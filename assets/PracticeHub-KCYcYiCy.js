import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { aH as countPendingMistakes, aI as countDueSrs, h as useLearningStore, w as useMasteryStore, aJ as getStudyDateKey } from "./index-BEJSIlFS.js";
import { L as Link } from "./vendor-router-Dx6RIovR.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-primary n4-practice-ticket__cta", to: recommendation.route, children: recommendation.cta })
    ] }),
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
