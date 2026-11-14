import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-DMamQVB4.js";
import { a$ as countPendingMistakes, b0 as countDueSrs, c as useAppStore, b as useLearningStore, Q as useMasteryStore, b1 as getStudyDateKey } from "./index-qzEsKs-W.js";
import { H as HARU_WORLD_ACTIVITIES, h as haruWorldActivityHref, r as resolveHaruWorldLegacyActivity, a as resolveHaruWorldActivity } from "./haru-world-activity-catalog-5ZfG2j7n.js";
import { o as openHaruWorldDatabase, w as worldOwner, r as readHaruWorldRecord, H as HARU_WORLD_CONTENT_VERSION } from "./haru-world-storage-Bk67__cy.js";
import { L as Link } from "./vendor-router-udyIeVgQ.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-MeSkysD6.js";
const DOMAINS = Object.freeze([
  { id: "vocab", label: "từ vựng" },
  { id: "kanji", label: "kanji" },
  { id: "grammar", label: "ngữ pháp" },
  { id: "particles", label: "trợ từ" },
  { id: "conjugation", label: "chia thể" }
]);
function number(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}
function recentTrainerId(history = []) {
  var _a;
  return ((_a = [...Array.isArray(history) ? history : []].sort((left, right) => number(right == null ? void 0 : right.at) - number(left == null ? void 0 : left.at)).find((entry) => entry == null ? void 0 : entry.trainerId)) == null ? void 0 : _a.trainerId) || null;
}
const TRAINER_DOMAIN = Object.freeze({
  "vocab-dojo": "vocab",
  "kanji-academy": "kanji",
  "grammar-arena": "grammar",
  "particle-dojo": "particles",
  "conjugation-dojo": "conjugation"
});
function weakestDomain(masteryBars = {}, recentlyPlayed = null) {
  const ranked = DOMAINS.map((domain) => {
    var _a;
    return {
      ...domain,
      level: Math.max(0, number((_a = masteryBars == null ? void 0 : masteryBars[domain.id]) == null ? void 0 : _a.level, 1))
    };
  }).sort((left, right) => left.level - right.level || left.id.localeCompare(right.id));
  const alternative = ranked.find((domain) => domain.id !== recentlyPlayed);
  return alternative || ranked[0] || DOMAINS[0];
}
function getPracticeRecommendation({
  mistakes = {},
  srs = {},
  masteryBars = {},
  gameHistory = [],
  now = Date.now()
} = {}) {
  const pendingMistakes = countPendingMistakes(mistakes);
  const dueCount = countDueSrs(srs, now);
  const recentDomain = TRAINER_DOMAIN[recentTrainerId(gameHistory)] || null;
  if (pendingMistakes > 0) {
    return {
      id: "repair",
      route: "/trainer/daily-practice/weak-points",
      label: `Sửa ${pendingMistakes} lỗi chưa ổn định`,
      detail: "Chỉ xem lại các lỗi thực tế của bạn trước khi học nội dung mới.",
      cta: "Sửa lỗi ngay",
      badge: "Ưu tiên 1",
      pendingMistakes,
      dueCount
    };
  }
  if (dueCount > 0) {
    return {
      id: "due-review",
      route: "/trainer/daily-practice/review",
      label: `Ôn ${dueCount} mục đúng hạn`,
      detail: "Chỉ các mục đã đến lịch SRS mới quay lại; kiến thức cũ chưa đến hạn sẽ không chen vào.",
      cta: "Ôn đúng hạn",
      badge: "SRS",
      pendingMistakes,
      dueCount
    };
  }
  const domain = weakestDomain(masteryBars, recentDomain);
  return {
    id: `advance-${domain.id}`,
    route: "/trainer/daily-practice/today",
    label: `Tiến tiếp với ${domain.label}`,
    detail: `Phiên ngắn sẽ ưu tiên nội dung mới và phần ${domain.label} cần củng cố, không lặp lại mục chưa đến hạn.`,
    cta: "Bắt đầu phiên gợi ý",
    badge: "Nội dung mới",
    domain: domain.id,
    pendingMistakes,
    dueCount
  };
}
const DATE_KEY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
function localDateKeyFromMs(ms) {
  if (typeof ms !== "number" || !Number.isFinite(ms)) return null;
  const date = new Date(ms);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}
function isValidCalendarDateKey(value) {
  if (typeof value !== "string" || !DATE_KEY_PATTERN.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const roundtrip = new Date(year, month - 1, day);
  return roundtrip.getFullYear() === year && roundtrip.getMonth() === month - 1 && roundtrip.getDate() === day;
}
function isValidLegacyCount(value) {
  return typeof value === "number" && Number.isInteger(value) && value >= 0 ? value : null;
}
function buildTodayJourneyCard({ saveData, legacyLearning, activityCatalog, nowMs = Date.now(), contentVersion = null } = {}) {
  const todayDateKey = localDateKeyFromMs(nowMs);
  const rejected = [];
  const practicedToday = [];
  const progress = saveData && typeof saveData === "object" && saveData.learning && typeof saveData.learning === "object" ? saveData.learning.activityProgress : null;
  const progressEntries = progress && typeof progress === "object" && !Array.isArray(progress) ? Object.entries(progress) : [];
  for (const [activityId, raw] of progressEntries) {
    if (typeof activityId !== "string" || activityId.length === 0 || activityId.length > 160) {
      rejected.push({ activityId: String(activityId).slice(0, 160), reason: "invalid_id" });
      continue;
    }
    const known = activityCatalog && typeof activityCatalog === "object" && !Array.isArray(activityCatalog) ? activityCatalog[activityId] : null;
    if (!known || typeof known !== "object" || typeof known.href !== "string" || typeof known.label !== "string") {
      rejected.push({ activityId, reason: "unknown_activity" });
      continue;
    }
    const touchedMs = raw && typeof raw === "object" ? raw.completedAtMs : void 0;
    if (typeof touchedMs !== "number" || !Number.isFinite(touchedMs) || !Number.isInteger(touchedMs) || touchedMs <= 0) {
      rejected.push({ activityId, reason: "malformed_timestamp" });
      continue;
    }
    if (touchedMs > nowMs) {
      rejected.push({ activityId, reason: "future_timestamp" });
      continue;
    }
    const dateKey = localDateKeyFromMs(touchedMs);
    if (dateKey === null || dateKey !== todayDateKey) continue;
    practicedToday.push({
      activityId,
      label: known.label,
      href: known.href,
      kind: "practiced",
      lastTouchedAtMs: touchedMs,
      dateKey
    });
  }
  practicedToday.sort((a, b) => b.lastTouchedAtMs - a.lastTouchedAtMs);
  const last = practicedToday[0] || null;
  const saveContentVersion = saveData && typeof saveData === "object" ? saveData.contentVersion : void 0;
  const contentVersionMatch = typeof contentVersion === "string" && contentVersion.length > 0 && typeof saveContentVersion === "string" && saveContentVersion.length > 0 && saveContentVersion === contentVersion;
  const lastStudyDate = legacyLearning && typeof legacyLearning === "object" ? legacyLearning.lastStudyDate : void 0;
  const legacyDateKey = isValidCalendarDateKey(lastStudyDate) ? lastStudyDate : null;
  return {
    game: {
      practicedToday,
      lastActivityId: last ? last.activityId : null,
      lastTouchedAtMs: last ? last.lastTouchedAtMs : null
    },
    legacy: {
      dateKey: legacyDateKey,
      isToday: legacyDateKey !== null && legacyDateKey === todayDateKey,
      todayCorrect: isValidLegacyCount(legacyLearning == null ? void 0 : legacyLearning.todayCorrect),
      todayWrong: isValidLegacyCount(legacyLearning == null ? void 0 : legacyLearning.todayWrong)
    },
    resume: last && contentVersionMatch ? { source: "game", activityId: last.activityId, label: last.label, href: last.href, contentVersionMatch: true } : { source: null, activityId: null, label: null, href: null, contentVersionMatch },
    meta: { todayDateKey, rejected }
  };
}
const DEFAULT_ACTIVITY_CATALOG = Object.freeze(
  Object.fromEntries(
    HARU_WORLD_ACTIVITIES.map((entry) => [
      entry.id,
      Object.freeze({
        href: haruWorldActivityHref(entry.id),
        label: entry.label
      })
    ])
  )
);
function msUntilNextLocalMidnight(fromMs = Date.now()) {
  const d = new Date(fromMs);
  const next = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 0, 0, 0, 20);
  return Math.max(1e3, next.getTime() - fromMs);
}
function TodayJourneyCard({
  saveData: propSaveData,
  legacyLearning: propLegacyLearning,
  activityCatalog: propActivityCatalog,
  nowMs: propNowMs,
  contentVersion = HARU_WORLD_CONTENT_VERSION,
  userId: propUserId,
  indexedDB: propIndexedDB,
  className = ""
}) {
  var _a, _b, _c, _d;
  const storeUserId = useAppStore((state) => {
    var _a2;
    return (_a2 = state.user) == null ? void 0 : _a2.id;
  });
  const effectiveUserId = propUserId !== void 0 ? propUserId : storeUserId;
  const storeLastStudyDate = useLearningStore((state) => state.lastStudyDate);
  const storeTodayCorrect = useLearningStore((state) => state.todayCorrect);
  const storeTodayWrong = useLearningStore((state) => state.todayWrong);
  const effectiveLegacyLearning = propLegacyLearning !== void 0 ? propLegacyLearning : {
    lastStudyDate: storeLastStudyDate,
    todayCorrect: storeTodayCorrect,
    todayWrong: storeTodayWrong
  };
  const [currentNowMs, setCurrentNowMs] = reactExports.useState(() => propNowMs !== void 0 ? propNowMs : Date.now());
  const [loadedSave, setLoadedSave] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(propSaveData === void 0);
  const [error, setError] = reactExports.useState(null);
  const [isUnavailable, setIsUnavailable] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (propNowMs !== void 0) {
      setCurrentNowMs(propNowMs);
    }
  }, [propNowMs]);
  const activeFetchIdRef = reactExports.useRef(0);
  const fetchRecord = reactExports.useCallback(async () => {
    var _a2;
    if (propSaveData !== void 0) {
      setLoading(false);
      return;
    }
    if (propIndexedDB === null) {
      setIsUnavailable(true);
      setLoading(false);
      return;
    }
    const fetchId = ++activeFetchIdRef.current;
    setLoading(true);
    setError(null);
    setIsUnavailable(false);
    try {
      const db = await openHaruWorldDatabase(propIndexedDB);
      if (fetchId !== activeFetchIdRef.current) return;
      const owner = worldOwner(effectiveUserId);
      const record = await readHaruWorldRecord(db, owner);
      if (fetchId !== activeFetchIdRef.current) return;
      setLoadedSave((record == null ? void 0 : record.save) || null);
    } catch (err) {
      if (fetchId !== activeFetchIdRef.current) return;
      if (((_a2 = err == null ? void 0 : err.message) == null ? void 0 : _a2.includes("chưa hỗ trợ lưu IndexedDB")) || propIndexedDB === null) {
        setIsUnavailable(true);
      } else {
        setError((err == null ? void 0 : err.message) || "Không thể đọc bản lưu Haru World trên thiết bị.");
      }
    } finally {
      if (fetchId === activeFetchIdRef.current) {
        setLoading(false);
      }
    }
  }, [propSaveData, propIndexedDB, effectiveUserId]);
  reactExports.useEffect(() => {
    fetchRecord();
    return () => {
      activeFetchIdRef.current++;
    };
  }, [fetchRecord]);
  const refreshBoth = reactExports.useCallback(() => {
    if (propNowMs === void 0) {
      setCurrentNowMs(Date.now());
    }
    fetchRecord();
  }, [propNowMs, fetchRecord]);
  reactExports.useEffect(() => {
    let timerId = null;
    function scheduleMidnight() {
      const delay = msUntilNextLocalMidnight(Date.now());
      timerId = setTimeout(() => {
        refreshBoth();
        scheduleMidnight();
      }, delay);
    }
    scheduleMidnight();
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [refreshBoth]);
  reactExports.useEffect(() => {
    if (typeof document === "undefined") return void 0;
    function onVisibilityChange() {
      if (document.visibilityState === "visible") {
        refreshBoth();
      }
    }
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [refreshBoth]);
  const effectiveCatalog = reactExports.useMemo(() => {
    return propActivityCatalog || DEFAULT_ACTIVITY_CATALOG;
  }, [propActivityCatalog]);
  const activeSaveData = propSaveData !== void 0 ? propSaveData : loadedSave;
  const effectiveNowMs = propNowMs !== void 0 ? propNowMs : currentNowMs;
  const card = reactExports.useMemo(() => {
    return buildTodayJourneyCard({
      saveData: activeSaveData,
      legacyLearning: effectiveLegacyLearning,
      activityCatalog: effectiveCatalog,
      nowMs: effectiveNowMs,
      contentVersion
    });
  }, [activeSaveData, effectiveLegacyLearning, effectiveCatalog, effectiveNowMs, contentVersion]);
  if (isUnavailable) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: `n4-today-card is-unavailable ${className}`.trim(),
        "aria-label": "Hành trình hôm nay",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-today-card__header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-today-card__eyebrow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-kicker", children: "Hành trình hôm nay" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-today-card__subnote", children: "Không khả dụng" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-today-card__title", children: "Trình duyệt không hỗ trợ lưu trữ cục bộ" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-today-card__unavailable-msg", children: "Nhật ký Làng Haru yêu cầu IndexedDB để ghi nhận dữ liệu luyện tập trên thiết bị này." })
        ]
      }
    );
  }
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: `n4-today-card is-loading ${className}`.trim(),
        "aria-busy": "true",
        "aria-label": "Hành trình hôm nay",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-today-card__skeleton-header" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-today-card__skeleton-body" })
        ]
      }
    );
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: `n4-today-card is-error ${className}`.trim(),
        "aria-label": "Hành trình hôm nay",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-today-card__header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-kicker", children: "Hành trình hôm nay" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Không thể tải dữ liệu Làng Haru" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-today-card__error-text", children: error })
        ]
      }
    );
  }
  const { game, legacy, resume } = card;
  const practiced = game.practicedToday;
  const hasGameActivity = practiced.length > 0;
  const hasLegacyActivity = legacy.isToday && (((_a = legacy.todayCorrect) != null ? _a : 0) > 0 || ((_b = legacy.todayWrong) != null ? _b : 0) > 0);
  const isStaleOrEmpty = !hasGameActivity && !hasLegacyActivity;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: `n4-today-card ${isStaleOrEmpty ? "is-empty" : "has-activity"} ${className}`.trim(),
      "aria-label": "Hành trình học hôm nay",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-today-card__header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-today-card__eyebrow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-kicker", children: "Hành trình hôm nay" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-today-card__subnote", children: "Cục bộ trên thiết bị" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-today-card__title", children: isStaleOrEmpty ? "Chưa có hoạt động được ghi nhận hôm nay" : "Nhật ký luyện tập trong ngày" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-today-card__grid", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-today-card__pane n4-today-card__pane--game", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "n4-today-card__pane-title", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "🌸" }),
              " Làng Haru (3D)"
            ] }),
            hasGameActivity ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-today-card__game-summary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-today-card__stat-line", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: practiced.length }),
                " hoạt động đã luyện"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "n4-today-card__practiced-list", "aria-label": "Các hoạt động đã luyện hôm nay", children: practiced.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "n4-today-card__practiced-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-today-card__practiced-badge", children: "Đã luyện" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-today-card__practiced-label", children: item.label })
              ] }, item.activityId)) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-today-card__empty-msg", children: "Chưa có hoạt động nào được luyện hôm nay." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-today-card__pane n4-today-card__pane--legacy", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "n4-today-card__pane-title", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "📖" }),
              " Bài học & Ôn tập"
            ] }),
            hasLegacyActivity ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-today-card__legacy-summary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-today-card__stat-line", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  (_c = legacy.todayCorrect) != null ? _c : 0,
                  " đúng"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-today-card__divider", children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  (_d = legacy.todayWrong) != null ? _d : 0,
                  " sai"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-today-card__date-note", children: [
                "Ghi nhận: ",
                legacy.dateKey
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-today-card__empty-msg", children: "Chưa có lượt trả lời nào hôm nay." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "n4-today-card__actions", children: resume.source === "game" && resume.href ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: resume.href,
            className: "n4-btn n4-btn-primary n4-today-card__resume-btn",
            "aria-label": `Tiếp tục hoạt động vừa luyện: ${resume.label}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "▶" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Tiếp tục: ",
                resume.label
              ] })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/world",
            className: "n4-btn n4-btn-ghost n4-today-card__world-btn",
            "aria-label": "Vào Làng Haru",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "🌸" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Vào Làng Haru" })
            ]
          }
        ) })
      ]
    }
  );
}
const EMPTY_OBJECT = Object.freeze({});
const EMPTY_ARRAY = Object.freeze([]);
function getTodayActivitySummary(activity) {
  const source = activity && typeof activity === "object" ? activity : {};
  return {
    total: Math.max(0, Number(source.total) || 0),
    sessions: Math.max(0, Number(source.sessions) || 0),
    durationMs: Math.max(0, Number(source.durationMs) || 0),
    lastEventAt: Math.max(0, Number(source.lastEventAt) || 0)
  };
}
function formatDuration(durationMs) {
  const minutes = Math.floor(Math.max(0, durationMs) / 6e4);
  return minutes > 0 ? `${minutes} phút` : "mới bắt đầu";
}
function PracticeHub() {
  const mistakes = useLearningStore((state) => state.mistakes || EMPTY_OBJECT);
  const srs = useLearningStore((state) => state.srs || EMPTY_OBJECT);
  const gameHistory = useLearningStore((state) => state.gameHistory || EMPTY_ARRAY);
  const studyActivity = useLearningStore((state) => state.studyActivity || EMPTY_OBJECT);
  const masteryBars = useMasteryStore((state) => state.masteryBars || EMPTY_OBJECT);
  const recommendation = reactExports.useMemo(() => getPracticeRecommendation({
    mistakes,
    srs,
    masteryBars,
    gameHistory
  }), [gameHistory, masteryBars, mistakes, srs]);
  const haruActivity = reactExports.useMemo(() => {
    return resolveHaruWorldLegacyActivity(recommendation.route) || resolveHaruWorldActivity("field.expedition");
  }, [recommendation.route]);
  const activity = getTodayActivitySummary(studyActivity[getStudyDateKey()]);
  const hasActivity = activity.total > 0 || activity.sessions > 0 || activity.durationMs > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "n4-arranged-page n4-practice-hub n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-page-intro n4-practice-intro", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-kicker", children: "Luyện tập" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Một bài đúng lúc, không cần chọn mode" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Hệ thống tự chọn bước tiếp theo từ lỗi chưa sửa, SRS đến hạn và kỹ năng N4 cần tiến tiếp." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-practice-ticket", "aria-labelledby": "practice-ticket-title", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-practice-ticket__eyebrow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "今" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: recommendation.badge })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-practice-ticket__content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "practice-ticket-title", children: recommendation.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: recommendation.detail }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "n4-practice-ticket__facts", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: "Lỗi cần sửa" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: recommendation.pendingMistakes })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: "Mục đến hạn" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: recommendation.dueCount })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: "Nhịp học" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: "~10 câu" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-practice-ticket__actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-primary n4-practice-ticket__cta", to: recommendation.route, children: recommendation.cta }),
        haruActivity && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            className: "n4-btn n4-btn-ghost n4-practice-ticket__world-btn",
            to: haruWorldActivityHref(haruActivity.id, null, "/practice"),
            title: `Luyện "${haruActivity.label}" trong Thế giới Haru 3D`,
            "aria-label": `Luyện trong Thế giới Haru: ${haruActivity.label}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "🌸" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Làng Haru" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TodayJourneyCard, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `n4-practice-record ${hasActivity ? "is-recorded" : ""}`, "aria-live": "polite", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-kicker", children: "Nhật ký hôm nay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: hasActivity ? "Đã ghi nhận bền vững trên thiết bị này" : "Chưa có hoạt động học được ghi nhận hôm nay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: hasActivity ? `${activity.total} câu trả lời · ${activity.sessions} phiên · ${formatDuration(activity.durationMs)} hoạt động` : "Câu trả lời đầu tiên hoặc một phiên hoàn thành sẽ cập nhật ngay tại đây và đồng bộ cùng dữ liệu học của bạn." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-practice-record__seal", "aria-hidden": "true", children: hasActivity ? "Đã lưu" : "Sẵn sàng" })
    ] })
  ] });
}
export {
  PracticeHub as default,
  getTodayActivitySummary
};
