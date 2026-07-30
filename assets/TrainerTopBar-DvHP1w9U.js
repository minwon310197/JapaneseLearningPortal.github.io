import { r as reactExports, j as jsxRuntimeExports, u as useShallow } from "./vendor-react-BYxMSDiB.js";
import { I as useDialogFocus } from "./feature-3d-hud-Dp6hMoyV.js";
import { a7 as PRIO, u as useMasteryStore, l as loadDailyStudyPlan, a6 as GAME_EVENTS, a8 as PHASES, a9 as SKILLS, aa as loadGemState, ab as saveGemState, ac as addGems, t as useQuestStore, ad as useWorldClockStore, ae as completeBlockInStudyPlan } from "./index-CjITGIof.js";
import { u as useLearningStore, bC as summarizeSets, bD as POWER_UP_META, I as telemetry, T as TELEMETRY_EVENTS, bE as getComboMultiplier, bF as COIN_PER_CORRECT, aC as getItemBonuses, bG as getSetBonuses, a as useAppStore, p as useQuality } from "./feature-3d-jK3b4Iv-.js";
import { b as useNavigate, L as Link } from "./vendor-router-BTJacUKt.js";
import { E as EMPTY_OBJ } from "./empty-Bvm-mx50.js";
import { u as useScreenShake, k as useHitPause } from "./feature-3d-scenery-C3eSpuWG.js";
import { Q as QUEST_CHAINS } from "./quest-chains-CiwzmCpJ.js";
function formatMMSS(seconds) {
  const s = Math.max(0, Math.floor(seconds));
  const mm = Math.floor(s / 60).toString().padStart(2, "0");
  const ss = (s % 60).toString().padStart(2, "0");
  return `${mm}:${ss}`;
}
function TimerBar({ seconds = 0, maxSeconds = 60, paused = false }) {
  const pct = reactExports.useMemo(() => Math.max(0, Math.min(1, seconds / Math.max(1, maxSeconds))), [seconds, maxSeconds]);
  const state = pct > 0.33 ? "safe" : pct > 0.1 ? "warn" : "danger";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-timer-bar n4-timer-${state}${paused ? " is-paused" : ""}`, role: "timer", "aria-label": `Thời gian ${formatMMSS(seconds)}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-timer-bar-fill", style: { width: `${pct * 100}%` } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-timer-bar-text", children: [
      "⏱ ",
      formatMMSS(seconds)
    ] })
  ] });
}
function PauseMenu({ open, onResume, onRestart, onLeave }) {
  const firstBtnRef = reactExports.useRef(null);
  const dialogRef = useDialogFocus(open, onResume, { initialFocusRef: firstBtnRef });
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: dialogRef, className: "n4-pause-menu", role: "dialog", "aria-modal": "true", "aria-label": "Tạm dừng", tabIndex: -1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pause-menu-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-pause-menu-title", children: "Tạm dừng" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pause-menu-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { ref: firstBtnRef, type: "button", className: "n4-btn n4-btn-primary", onClick: onResume, children: "▶ Tiếp tục" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-btn n4-btn-ghost", onClick: onRestart, children: "↻ Chơi lại" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-btn n4-btn-ghost", onClick: onLeave, children: "← Thoát" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-pause-menu-hint", children: "Phím tắt: P tạm dừng · R chơi lại · ESC thoát" })
  ] }) });
}
const registry$1 = /* @__PURE__ */ new Map();
function getEntries(event) {
  let arr = registry$1.get(event);
  if (!arr) {
    arr = [];
    registry$1.set(event, arr);
  }
  return arr;
}
function on(event, fn, opts = {}) {
  if (typeof fn !== "function") return () => {
  };
  const entry = {
    fn,
    prio: typeof opts.prio === "number" ? opts.prio : PRIO.TELEMETRY,
    tag: opts.tag || ""
  };
  const arr = getEntries(event);
  arr.push(entry);
  arr.sort((a, b) => a.prio - b.prio);
  return () => off(event, entry);
}
function off(event, entryOrFn) {
  const arr = registry$1.get(event);
  if (!arr) return;
  const idx = arr.findIndex((e) => e === entryOrFn || e.fn === entryOrFn);
  if (idx >= 0) arr.splice(idx, 1);
}
function once(event, fn, opts = {}) {
  const unsub = on(event, (payload) => {
    unsub();
    fn(payload);
  }, opts);
  return unsub;
}
function emit(event, payload) {
  const arr = registry$1.get(event);
  if (!arr || arr.length === 0) return;
  for (let i = 0; i < arr.length; i++) {
    try {
      arr[i].fn(payload);
    } catch (err) {
      console.warn("[game-events] listener error for", event, arr[i].tag, err);
    }
  }
}
function clear() {
  registry$1.clear();
}
function _debugSnapshot() {
  const out = {};
  for (const [ev, arr] of registry$1) {
    out[ev] = arr.map((e) => ({ prio: e.prio, tag: e.tag }));
  }
  return out;
}
const bus = { on, off, once, emit, clear };
if (typeof window !== "undefined") {
  window.__N4_GAME_BUS__ = bus;
  window.__N4_GAME_BUS_DEBUG__ = _debugSnapshot;
}
function useMasteryAll() {
  return useMasteryStore(useShallow((s) => s.masteryBars));
}
function bucket(acc) {
  if (acc >= 0.9) return { emoji: "🌟", label: "Xuất sắc", tone: "great" };
  if (acc >= 0.75) return { emoji: "💪", label: "Rất tốt", tone: "good" };
  if (acc >= 0.5) return { emoji: "👍", label: "Ổn", tone: "ok" };
  return { emoji: "🌱", label: "Cần luyện thêm", tone: "low" };
}
function kindAccuracy(answers = []) {
  const acc = { vocab: { c: 0, t: 0 }, kanji: { c: 0, t: 0 }, grammar: { c: 0, t: 0 }, listening: { c: 0, t: 0 }, reading: { c: 0, t: 0 } };
  for (const a of answers) {
    const k = a.itemKind || "vocab";
    if (!acc[k]) continue;
    acc[k].t += 1;
    if (a.correct) acc[k].c += 1;
  }
  return acc;
}
function SessionReviewV2({
  summary,
  onReplay,
  onLeave,
  onDrillWeak
}) {
  var _a;
  const [dispatch, setDispatch] = reactExports.useState(null);
  const [triggers, setTriggers] = reactExports.useState([]);
  useMasteryAll();
  const navigate = useNavigate();
  const plan = reactExports.useMemo(() => loadDailyStudyPlan(), []);
  const { equippedCosmetics, unlockedItems } = useLearningStore(useShallow((s) => ({
    equippedCosmetics: s.equippedCosmetics,
    unlockedItems: s.unlockedItems
  })));
  reactExports.useEffect(() => {
    const offs = [];
    offs.push(bus.on(GAME_EVENTS.REWARD_DISPATCHED, (r) => setDispatch(r)));
    offs.push(bus.on(GAME_EVENTS.ARTIFACT_TRIGGERED, (t) => setTriggers((arr) => [...arr.slice(-9), t])));
    return () => offs.forEach((o) => o == null ? void 0 : o());
  }, []);
  const score = (summary == null ? void 0 : summary.score) || 0;
  const total = (summary == null ? void 0 : summary.total) || 0;
  const acc = total > 0 ? score / total : 0;
  const timeMs = (summary == null ? void 0 : summary.timeMs) || 0;
  const minutes = Math.floor(timeMs / 6e4);
  const seconds = Math.floor(timeMs % 6e4 / 1e3);
  const kindAcc = reactExports.useMemo(() => kindAccuracy((summary == null ? void 0 : summary.answers) || []), [summary]);
  const sets = reactExports.useMemo(() => summarizeSets({ equippedCosmetics, unlockedItems }).filter((s) => {
    var _a2;
    return (((_a2 = s.activeBonuses) == null ? void 0 : _a2.length) || 0) > 0;
  }), [equippedCosmetics, unlockedItems]);
  const tone = bucket(acc);
  const missed = ((summary == null ? void 0 : summary.answers) || []).filter((a) => !a.correct).slice(0, 12);
  const leech = ((summary == null ? void 0 : summary.leechItems) || []).slice(0, 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gs-review-overlay", role: "dialog", "aria-label": "Tổng kết phiên", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-gs-review-card is-${tone.tone}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-gs-review-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gs-review-tone", children: [
          tone.emoji,
          " ",
          tone.label
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-gs-review-title", children: "Tổng kết phiên" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-gs-review-sub", children: [
          summary == null ? void 0 : summary.trainerId,
          " · ",
          (summary == null ? void 0 : summary.mode) || "—"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gs-review-score", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gs-review-score-num", children: [
          score,
          "/",
          total
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gs-review-score-pct", children: [
          Math.round(acc * 100),
          "%"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-gs-review-stats", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gs-review-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⏱️" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
          minutes,
          ":",
          String(seconds).padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Thời gian" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gs-review-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🎯" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
          "+",
          (dispatch == null ? void 0 : dispatch.xp) || 0
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "XP" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gs-review-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🪙" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
          "+",
          (dispatch == null ? void 0 : dispatch.coins) || 0
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Xu" })
      ] }),
      (dispatch == null ? void 0 : dispatch.gems) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gs-review-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "💎" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
          "+",
          dispatch.gems
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Gem" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-gs-review-block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Chi tiết kỹ năng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gs-review-skill-grid", children: Object.entries(kindAcc).map(([k, { c, t }]) => {
        if (!t) return null;
        const p = c / t;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gs-review-skill", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gs-review-skill-label", children: k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gs-review-skill-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: `${Math.round(p * 100)}%` } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-gs-review-skill-acc", children: [
            c,
            "/",
            t
          ] })
        ] }, k);
      }) })
    ] }),
    (((_a = dispatch == null ? void 0 : dispatch.masteryLevelUps) == null ? void 0 : _a.length) || 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-gs-review-block n4-gs-review-level", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Kỹ năng tăng hạng ✨" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: dispatch.masteryLevelUps.map((lu, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: lu.skillId }),
        " → cấp ",
        lu.level
      ] }, i)) })
    ] }),
    sets.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-gs-review-block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Bộ trang phục đang dùng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: sets.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: s.nameVi || s.name }),
        " ",
        s.equippedCount,
        "/",
        s.total,
        " · ",
        s.activeBonuses.map((ab) => ab.label || `${ab.pieces}p`).join(" · ")
      ] }, s.id)) })
    ] }),
    triggers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-gs-review-block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Cổ vật đã kích hoạt" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: triggers.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "✨ ",
        t.label || t.artifactId
      ] }, i)) })
    ] }),
    missed.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-gs-review-block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Cần ôn lại" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gs-review-missed", children: missed.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge", children: m.itemKey || "?" }, i)) })
    ] }),
    leech.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-gs-review-block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Mục khó (leech)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: leech.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: l }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "n4-gs-review-actions", children: plan && (plan.status === "active" || plan.status === "complete") ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: () => navigate("/study-session"), children: plan.status === "complete" ? "Xem kết quả" : "Tiếp tục lộ trình" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      onDrillWeak && missed.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => onDrillWeak(missed), children: "🎯 Luyện mục yếu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-secondary", onClick: onReplay, children: "🔁 Chơi lại" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: onLeave, children: "🏠 Trang chủ" })
    ] }) })
  ] }) });
}
const SECTIONS = [
  {
    title: "Phiên chơi",
    items: [
      ["P", "Tạm dừng / tiếp tục"],
      ["R", "Chơi lại"],
      ["ESC", "Thoát"],
      ["?", "Hiện bảng phím tắt"]
    ]
  },
  {
    title: "Trả lời",
    items: [
      ["1 · 2 · 3 · 4", "Chọn đáp án"],
      ["Space", "Xác nhận / tiếp theo"],
      ["← / →", "Quay lại / đi tiếp"]
    ]
  },
  {
    title: "Trợ giúp",
    items: [
      ["H", "Gợi ý"],
      ["Shift+H", "Hé lộ đáp án"],
      ["D", "Từ điển nhanh"]
    ]
  },
  {
    title: "Vật phẩm",
    items: [
      ["Q · W · E · R", "Dùng vật phẩm ô 1-4"],
      ["T", "Triệu hồi thú cưng"]
    ]
  },
  {
    title: "Hệ thống",
    items: [
      ["Ctrl+K", "Lệnh nhanh"],
      ["Ctrl+,", "Cài đặt"]
    ]
  }
];
function HotkeyHelpOverlay({ open, onClose }) {
  const dialogRef = useDialogFocus(open, onClose);
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gs-help-overlay", onPointerDown: (event) => event.target === event.currentTarget && (onClose == null ? void 0 : onClose()), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "n4-gs-help-card", role: "dialog", "aria-modal": "true", "aria-label": "Phím tắt trò chơi", tabIndex: -1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-gs-help-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🎮 Phím tắt" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: onClose, "aria-label": "Đóng", children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gs-help-grid", children: SECTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { children: s.items.map(([k, label]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gs-help-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: k }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: label })
      ] }, k)) })
    ] }, s.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "n4-gs-help-foot", children: [
      "Nhấn lại ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "?" }),
      " để đóng."
    ] })
  ] }) });
}
const POWERUP_CATALOG = Object.freeze([
  // ── Common ──
  {
    id: "hintPack",
    name: "Gợi ý",
    icon: "💡",
    rarity: "common",
    type: "consume",
    desc: "Loại 1 đáp án sai trong câu hỏi trắc nghiệm.",
    synergy: ["reveal"],
    cooldownMs: 0
  },
  {
    id: "revealOne",
    name: "Mắt thần",
    icon: "👁️",
    rarity: "common",
    type: "consume",
    desc: "Tiết lộ cách đọc của đáp án.",
    synergy: ["reveal"],
    cooldownMs: 0
  },
  {
    id: "skipShield",
    name: "Cứu mạng",
    icon: "🛡️",
    rarity: "common",
    type: "consume",
    desc: "Bỏ qua câu hỏi — không mất chuỗi.",
    synergy: ["defense"],
    cooldownMs: 0
  },
  {
    id: "rerollQ",
    name: "Đổi câu",
    icon: "🎲",
    rarity: "common",
    type: "consume",
    desc: "Đổi câu hỏi hiện tại bằng câu khác.",
    synergy: ["utility"],
    cooldownMs: 0
  },
  // ── Rare ──
  {
    id: "xpBoost",
    name: "Tăng XP",
    icon: "⭐",
    rarity: "rare",
    type: "charge",
    desc: "×1.5 XP trong 60 giây.",
    synergy: ["economy"],
    durationMs: 6e4
  },
  {
    id: "doubleCoins",
    name: "Kim bội",
    icon: "🪙",
    rarity: "rare",
    type: "charge",
    desc: "×2 xu trong 60 giây.",
    synergy: ["economy"],
    durationMs: 6e4
  },
  {
    id: "streakFreeze",
    name: "Đóng băng chuỗi",
    icon: "🧊",
    rarity: "rare",
    type: "consume",
    desc: "Giữ chuỗi ngày khi bạn bỏ lỡ 1 ngày.",
    synergy: ["defense"],
    cooldownMs: 864e5
  },
  {
    id: "timerSlow",
    name: "Rỉn thời gian",
    icon: "⏳",
    rarity: "rare",
    type: "charge",
    desc: "Thời gian chậm ×0.5 trong 30 giây.",
    synergy: ["tempo"],
    durationMs: 3e4
  },
  {
    id: "comboSaver",
    name: "Khóa combo",
    icon: "🔗",
    rarity: "rare",
    type: "consume",
    desc: "Chuỗi không reset khi trả lời sai 1 câu.",
    synergy: ["defense"],
    cooldownMs: 0
  },
  {
    id: "lifeShield",
    name: "Khiên sinh mệnh",
    icon: "💚",
    rarity: "rare",
    type: "consume",
    desc: "Hấp thu sát thương HP tiếp theo trong GameShell.",
    synergy: ["defense"],
    cooldownMs: 0
  },
  // ── Epic ──
  {
    id: "mercyKill",
    name: "Ân xá",
    icon: "🕊️",
    rarity: "epic",
    type: "consume",
    desc: "Cho 50 % điểm dù thua ván này.",
    synergy: ["defense"],
    cooldownMs: 0
  },
  {
    id: "goldenStreak",
    name: "Chuỗi vàng",
    icon: "🌟",
    rarity: "epic",
    type: "consume",
    desc: "5 câu đúng tiếp theo: ×3 XP, ×2 xu.",
    synergy: ["economy", "tempo"],
    cooldownMs: 0
  },
  {
    id: "elderWisdom",
    name: "Thần trí",
    icon: "🧙",
    rarity: "epic",
    type: "consume",
    desc: "Tự động trả lời đúng 1 câu khó.",
    synergy: ["reveal"],
    cooldownMs: 0
  },
  {
    id: "spiritLantern",
    name: "Đèn linh",
    icon: "🏮",
    rarity: "epic",
    type: "charge",
    desc: "Hiện tất cả đáp án sai trong 10 giây.",
    synergy: ["reveal"],
    durationMs: 1e4
  },
  {
    id: "kotobaMirror",
    name: "Kính ngôn",
    icon: "🔮",
    rarity: "epic",
    type: "consume",
    desc: "Xoay câu hỏi qua 3 từ đồng nghĩa; chọn 1.",
    synergy: ["reveal"],
    cooldownMs: 0
  },
  // ── Legendary ──
  {
    id: "bossBreaker",
    name: "Phá trùm",
    icon: "💥",
    rarity: "legendary",
    type: "consume",
    desc: "Gây 25 % HP khối cho trùm.",
    synergy: ["offense"],
    cooldownMs: 0
  },
  {
    id: "chronoShift",
    name: "Chuyển thời",
    icon: "⌛",
    rarity: "legendary",
    type: "consume",
    desc: "Tua lại 1 câu trả lời sai.",
    synergy: ["defense", "tempo"],
    cooldownMs: 0
  },
  {
    id: "drumHeart",
    name: "Tim trống",
    icon: "🥁",
    rarity: "legendary",
    type: "passive",
    desc: "Chuỗi không reset giữa ván (1 lần/ngày).",
    synergy: ["defense"],
    cooldownMs: 864e5
  }
]);
const INDEX = new Map(POWERUP_CATALOG.map((p) => [p.id, p]));
function getPowerUp(id) {
  const direct = INDEX.get(id);
  if (direct) return direct;
  const meta = POWER_UP_META[id];
  if (!meta) return null;
  return Object.freeze({
    id,
    name: meta.name || id,
    icon: meta.icon || "✨",
    rarity: "common",
    type: "consume",
    desc: meta.desc || "",
    synergy: [],
    cooldownMs: 0
  });
}
const registry = [];
let _id = 1;
let _handler = null;
function normalizeKey(k) {
  return String(k || "").toLowerCase();
}
function matchKey(event, binding) {
  const key = normalizeKey(event.key);
  const combos = Array.isArray(binding.key) ? binding.key : [binding.key];
  for (const raw of combos) {
    const parts = String(raw).toLowerCase().split("+").map((p) => p.trim());
    const base = parts.pop();
    const needsCtrl = parts.includes("ctrl") || parts.includes("control");
    const needsShift = parts.includes("shift");
    const needsAlt = parts.includes("alt");
    const needsMeta = parts.includes("meta") || parts.includes("cmd");
    if (base !== key && !(base === "esc" && key === "escape")) continue;
    if (!!event.ctrlKey !== needsCtrl) continue;
    if (!!event.shiftKey !== needsShift) continue;
    if (!!event.altKey !== needsAlt) continue;
    if (!!event.metaKey !== needsMeta) continue;
    return true;
  }
  return false;
}
function install() {
  if (install.installed) return;
  install.installed = true;
  _handler = (e) => {
    const tgt = e.target;
    if (tgt && /^(INPUT|TEXTAREA|SELECT)$/.test(tgt.tagName)) return;
    if (tgt && tgt.isContentEditable) return;
    const overlayOpen = registry.some((b) => b.active && b.scope === "overlay");
    const candidates = registry.filter((b) => b.active && matchKey(e, b));
    if (!candidates.length) return;
    const eligible = overlayOpen ? candidates.filter((b) => b.scope === "overlay") : candidates;
    if (!eligible.length) return;
    eligible.sort((a, b) => a.prio - b.prio);
    e.preventDefault();
    try {
      eligible[0].fn(e);
    } catch (err) {
      console.warn("[useHotkeys]", eligible[0].tag, err);
    }
  };
  window.addEventListener("keydown", _handler, true);
}
function uninstallIfIdle() {
  if (registry.length || !_handler || typeof window === "undefined") return;
  window.removeEventListener("keydown", _handler, true);
  _handler = null;
  install.installed = false;
}
function useHotkeys(bindings, deps = []) {
  const active = reactExports.useRef(true);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return void 0;
    install();
    const mine = [];
    for (const b of bindings || []) {
      if (!b || !b.key || typeof b.fn !== "function") continue;
      const entry = {
        id: _id++,
        key: b.key,
        scope: b.scope || "session",
        prio: typeof b.prio === "number" ? b.prio : 50,
        fn: b.fn,
        tag: b.tag || "",
        active: true
      };
      registry.push(entry);
      mine.push(entry);
    }
    active.current = true;
    return () => {
      for (const entry of mine) {
        const idx = registry.indexOf(entry);
        if (idx >= 0) registry.splice(idx, 1);
      }
      uninstallIfIdle();
    };
  }, deps);
}
const DEFAULT_SLOTS = ["hintPack", "revealOne", "skipShield", "rerollQ"];
const HOTKEYS = ["q", "w", "e", "r"];
function PowerupDock({ slots = DEFAULT_SLOTS, disabled = false, onUse }) {
  const { powerUps, consumePowerUp, activeEffects, activePet, pets } = useLearningStore(useShallow((s) => ({
    powerUps: s.powerUps || EMPTY_OBJ,
    consumePowerUp: s.consumePowerUp,
    activeEffects: s.activeEffects || EMPTY_OBJ,
    activePet: s.activePet,
    pets: s.pets || EMPTY_OBJ
  })));
  const fourSlots = reactExports.useMemo(() => (slots || []).slice(0, 4), [slots]);
  const handleUse = reactExports.useCallback((id) => {
    if (disabled) return;
    const meta = getPowerUp(id);
    if (!meta) return;
    if (meta.type === "consume") {
      const count = powerUps[id] || 0;
      if (count <= 0) return;
      consumePowerUp == null ? void 0 : consumePowerUp(id);
    }
    bus.emit(GAME_EVENTS.POWERUP_USED, { id, rarity: meta.rarity, type: meta.type, at: Date.now() });
    try {
      onUse == null ? void 0 : onUse(id, meta);
    } catch (err) {
      console.warn("[PowerupDock] onUse", err);
    }
  }, [consumePowerUp, disabled, onUse, powerUps]);
  const petAbility = reactExports.useMemo(() => {
    if (!activePet) return null;
    const pet = pets[activePet];
    return pet ? { id: "pet-active", icon: "🐾", name: pet.name || activePet, cooldown: pet.activeCooldownUntil } : null;
  }, [activePet, pets]);
  const handlePetActive = reactExports.useCallback(() => {
    if (disabled || !petAbility) return;
    bus.emit(GAME_EVENTS.PET_ACTIVE_TRIGGERED, { petId: activePet, at: Date.now() });
    try {
      onUse == null ? void 0 : onUse("pet-active", petAbility);
    } catch (err) {
      console.warn("[PowerupDock] pet-active", err);
    }
  }, [disabled, petAbility, activePet, onUse]);
  useHotkeys(
    [
      ...fourSlots.map((id, idx) => ({
        key: HOTKEYS[idx],
        scope: "powerup",
        prio: 40,
        tag: `powerup:${id}`,
        fn: () => handleUse(id)
      })),
      { key: "t", scope: "powerup", prio: 40, tag: "pet-active", fn: handlePetActive }
    ],
    [disabled, fourSlots, handleUse, handlePetActive]
  );
  fourSlots.some((id) => (powerUps[id] || 0) > 0);
  return null;
}
function popXp(amount, opts = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("n4-xp-pop", { detail: { amount, ...opts } }));
}
const FeedbackContext = reactExports.createContext(null);
function FeedbackProvider({ children, qualityTier = "high" }) {
  var _a, _b;
  const screenShake = ((_a = useScreenShake) == null ? void 0 : _a()) || null;
  const hitPause = ((_b = useHitPause) == null ? void 0 : _b()) || null;
  const value = reactExports.useMemo(() => ({
    qualityTier,
    popXp,
    shake: (magnitude = "small", ms = 160) => {
      var _a2;
      try {
        (_a2 = screenShake == null ? void 0 : screenShake.shake) == null ? void 0 : _a2.call(screenShake, magnitude, ms);
      } catch (e) {
      }
    },
    pause: (ms = 150) => {
      var _a2;
      try {
        (_a2 = hitPause == null ? void 0 : hitPause.pause) == null ? void 0 : _a2.call(hitPause, ms);
      } catch (e) {
      }
    }
  }), [qualityTier, screenShake, hitPause]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FeedbackContext.Provider, { value, children });
}
function useFeedback() {
  const ctx = reactExports.useContext(FeedbackContext);
  if (!ctx) {
    return {
      qualityTier: "high",
      popXp: (n) => popXp(n),
      shake: () => {
      },
      pause: () => {
      }
    };
  }
  return ctx;
}
let installed$5 = false;
function installTelemetryBridge() {
  if (installed$5) return;
  installed$5 = true;
  bus.on(GAME_EVENTS.SESSION_STARTED, (p) => {
    telemetry.emit(TELEMETRY_EVENTS.GAME_SESSION_STARTED, p);
  }, { prio: PRIO.TELEMETRY, tag: "telemetry-bridge" });
  bus.on(GAME_EVENTS.SESSION_FINISHED, (p) => {
    telemetry.emit(TELEMETRY_EVENTS.GAME_SESSION_FINISHED, p);
  }, { prio: PRIO.TELEMETRY, tag: "telemetry-bridge" });
  bus.on(GAME_EVENTS.ANSWER_SUBMITTED, (p) => {
    telemetry.emit(
      (p == null ? void 0 : p.correct) ? TELEMETRY_EVENTS.GAME_ANSWER_CORRECT : TELEMETRY_EVENTS.GAME_ANSWER_WRONG,
      p
    );
  }, { prio: PRIO.TELEMETRY, tag: "telemetry-bridge" });
  bus.on(GAME_EVENTS.POWERUP_USED, (p) => {
    telemetry.emit(TELEMETRY_EVENTS.GAME_POWERUP_USED, p);
  }, { prio: PRIO.TELEMETRY, tag: "telemetry-bridge" });
  bus.on(GAME_EVENTS.MILESTONE_HIT, (p) => {
    telemetry.emit(TELEMETRY_EVENTS.GAME_COMBO_MILESTONE, p);
  }, { prio: PRIO.TELEMETRY, tag: "telemetry-bridge" });
  bus.on(GAME_EVENTS.SRS_RECORDED, (p) => {
    telemetry.emit(TELEMETRY_EVENTS.SRS_REVIEWED, p);
  }, { prio: PRIO.TELEMETRY, tag: "telemetry-bridge" });
  bus.on(GAME_EVENTS.CHAIN_COMPLETED, (p) => {
    telemetry.emit(TELEMETRY_EVENTS.QUEST_COMPLETED, { scope: "chain", ...p });
  }, { prio: PRIO.TELEMETRY, tag: "telemetry-bridge" });
}
let installed$4 = false;
function safePlay(key) {
  try {
    if (typeof window === "undefined") return;
    const audio = window.__N4_AUDIO_BUS__;
    if (audio && typeof audio.play === "function") audio.play(key);
  } catch (e) {
  }
}
function installAudioSubscriber() {
  if (installed$4) return;
  installed$4 = true;
  bus.on(GAME_EVENTS.ANSWER_SUBMITTED, (p) => {
    safePlay((p == null ? void 0 : p.correct) ? "tap-soft" : "miss");
  }, { prio: PRIO.COSMETICS, tag: "audio" });
  bus.on(GAME_EVENTS.COMBO_TIER_UP, (p) => {
    const tier = (p == null ? void 0 : p.tier) || 0;
    if (tier >= 4) safePlay("rarity-legendary");
    else if (tier === 3) safePlay("rarity-rare");
    else if (tier === 2) safePlay("coin-pickup");
  }, { prio: PRIO.COSMETICS, tag: "audio" });
  bus.on(GAME_EVENTS.MILESTONE_HIT, () => {
    safePlay("hit-perfect");
  }, { prio: PRIO.COSMETICS, tag: "audio" });
  bus.on(GAME_EVENTS.HP_CHANGED, (p) => {
    if (((p == null ? void 0 : p.delta) || 0) < 0) safePlay("hit-ka");
  }, { prio: PRIO.COSMETICS, tag: "audio" });
  bus.on(GAME_EVENTS.POWERUP_USED, () => {
    safePlay("whoosh-menu");
  }, { prio: PRIO.COSMETICS, tag: "audio" });
  bus.on(GAME_EVENTS.PET_ACTIVE_TRIGGERED, () => {
    safePlay("gong");
  }, { prio: PRIO.COSMETICS, tag: "audio" });
  bus.on(GAME_EVENTS.SESSION_FINISHED, () => {
    safePlay("level-up");
  }, { prio: PRIO.COSMETICS, tag: "audio" });
  bus.on(GAME_EVENTS.ARTIFACT_TRIGGERED, () => {
    safePlay("stamp-buy");
  }, { prio: PRIO.COSMETICS, tag: "audio" });
}
const PHASE_MULTIPLIERS = Object.freeze({
  [PHASES.WARMUP]: {
    xp: 0.75,
    coin: 0.75,
    srsQualityCap: 2,
    // no "easy" escalation
    countsMastery: false,
    countsQuestProgress: true,
    // simple quests can see warmup, but not chains
    countsChain: false
  },
  [PHASES.CORE]: {
    xp: 1,
    coin: 1,
    srsQualityCap: 3,
    countsMastery: true,
    countsQuestProgress: true,
    countsChain: true
  },
  [PHASES.BOSS]: {
    xp: 1.75,
    coin: 1.5,
    srsQualityCap: 3,
    countsMastery: true,
    countsQuestProgress: true,
    countsChain: true,
    damageOnFail: 2
    // boss beat failure hurts more
  },
  [PHASES.COOLDOWN]: {
    xp: 0.5,
    coin: 0.25,
    srsQualityBonus: 1,
    // reinforcement for items passed in CORE/BOSS
    countsMastery: false,
    countsQuestProgress: false,
    countsChain: false
  }
});
function getPhaseMultiplier(phase) {
  return PHASE_MULTIPLIERS[phase] || PHASE_MULTIPLIERS[PHASES.CORE];
}
let current = null;
const buffs = /* @__PURE__ */ new Map();
function registerActiveSession(api) {
  current = api || null;
}
function unregisterActiveSession(api) {
  if (current === api) current = null;
}
function getActiveSession() {
  return current;
}
function heal(amount = 1) {
  var _a;
  try {
    (_a = current == null ? void 0 : current.heal) == null ? void 0 : _a.call(current, amount);
  } catch (e) {
  }
}
function damage(amount = 1) {
  var _a;
  try {
    (_a = current == null ? void 0 : current.damage) == null ? void 0 : _a.call(current, amount);
  } catch (e) {
  }
}
function pauseTimer(ms = 1e4) {
  try {
    const api = current;
    if (!(api == null ? void 0 : api.patchTimer)) return;
    api.patchTimer(ms);
  } catch (e) {
  }
}
function applyBuff(id, { durationMs = 3e4, data = null } = {}) {
  if (!id) return;
  const expiresAt = Date.now() + durationMs;
  buffs.set(id, { id, expiresAt, data });
  setTimeout(() => {
    const b = buffs.get(id);
    if (b && b.expiresAt <= Date.now()) buffs.delete(id);
  }, durationMs + 10);
}
function hasBuff(id) {
  const b = buffs.get(id);
  if (!b) return false;
  if (b.expiresAt <= Date.now()) {
    buffs.delete(id);
    return false;
  }
  return true;
}
function clearBuffs() {
  buffs.clear();
}
if (typeof window !== "undefined") {
  window.__N4_ACTIVE_SESSION__ = { getActiveSession, heal, damage, pauseTimer, applyBuff, hasBuff, clearBuffs };
}
function inferSkillId({ itemKind, itemKey } = {}) {
  if (itemKind) {
    switch (itemKind) {
      case "vocab":
        return SKILLS.VOCAB;
      case "kanji":
        return SKILLS.KANJI;
      case "grammar":
        return SKILLS.GRAMMAR;
      case "listening":
        return SKILLS.LISTENING;
      case "reading":
        return SKILLS.READING;
    }
  }
  if (typeof itemKey === "string") {
    if (itemKey.startsWith("v:") || itemKey.startsWith("vocab:")) return SKILLS.VOCAB;
    if (itemKey.startsWith("k:") || itemKey.startsWith("kanji:")) return SKILLS.KANJI;
    if (itemKey.startsWith("g:") || itemKey.startsWith("grammar:")) return SKILLS.GRAMMAR;
  }
  return SKILLS.VOCAB;
}
function synthSkillDeltas({ answerMs, comboStreak, sessionMs } = {}) {
  const out = [];
  if (typeof answerMs === "number" && answerMs > 0 && answerMs < 3e3) {
    out.push({ skillId: SKILLS.SPEED, xp: 1 });
  }
  if (typeof comboStreak === "number" && comboStreak >= 5) {
    out.push({ skillId: SKILLS.CONSISTENCY, xp: 1 });
  }
  if (typeof sessionMs === "number" && sessionMs >= 15 * 60 * 1e3) {
    out.push({ skillId: SKILLS.ENDURANCE, xp: 1 });
  }
  return out;
}
function resolveAnswer({ correct, phase = PHASES.CORE, combo = 0, state = {}, itemBonuses, setBonuses, season }) {
  var _a, _b, _c, _d, _e;
  const phaseMult = getPhaseMultiplier(phase);
  const sources = [];
  if (!correct) {
    return { xp: 0, coins: 0, sources };
  }
  const comboMult = getComboMultiplier(Math.max(0, combo));
  const xpBase = 5;
  const comboCapBonus = ((itemBonuses == null ? void 0 : itemBonuses.comboXpCap) || 0) + ((setBonuses == null ? void 0 : setBonuses.comboXpCap) || 0);
  const xpCombo = Math.min(combo, 10 + Math.max(0, Math.round(comboCapBonus)));
  let xpMultAdd = ((itemBonuses == null ? void 0 : itemBonuses.xpMult) || 0) + ((setBonuses == null ? void 0 : setBonuses.xpMult) || 0);
  if (hasBuff("xp-boost-2x")) xpMultAdd += 1;
  else if (hasBuff("xp-plus-50")) xpMultAdd += 0.5;
  const xpRaw = (xpBase + xpCombo) * (1 + xpMultAdd) * phaseMult.xp;
  const xp = Math.max(0, Math.round(xpRaw));
  sources.push({ label: `Base ${xpBase}+${xpCombo} combo`, amount: xpBase + xpCombo, kind: "xp" });
  if (xpMultAdd > 0) sources.push({ label: `Items/sets +${Math.round(xpMultAdd * 100)}%`, amount: Math.round((xpBase + xpCombo) * xpMultAdd), kind: "xp" });
  if (phaseMult.xp !== 1) sources.push({ label: `Phase ${phase} ×${phaseMult.xp}`, amount: Math.round(xpRaw - (xpBase + xpCombo) * (1 + xpMultAdd)), kind: "xp" });
  let additive = 1;
  if ((((_a = state.powerUps) == null ? void 0 : _a.doubleCoins) || 0) > 0) additive += 1;
  if ((((_b = state.activeEffects) == null ? void 0 : _b.goldRush) || 0) > 0) additive += 2;
  if ((_c = state.activeEffects) == null ? void 0 : _c.coinMagnet) additive += 0.5;
  if (state.vipExpiry && Date.now() < state.vipExpiry) additive += 0.25;
  if (state.activePet && ((_d = state.pets) == null ? void 0 : _d[state.activePet])) {
    const pet = state.pets[state.activePet];
    if ((pet.happiness || 0) >= 50) additive += (pet.coinBonus || 0) / 100;
  }
  additive += ((itemBonuses == null ? void 0 : itemBonuses.coinMult) || 0) + ((setBonuses == null ? void 0 : setBonuses.coinMult) || 0);
  if ((season == null ? void 0 : season.id) === "autumn" && ((_e = season.bonus) == null ? void 0 : _e.coinBonus)) additive += season.bonus.coinBonus / 100;
  const coinFlat = Math.max(0, Math.round(((itemBonuses == null ? void 0 : itemBonuses.coinFlat) || 0) + ((setBonuses == null ? void 0 : setBonuses.coinFlat) || 0)));
  const coinRaw = COIN_PER_CORRECT * comboMult * additive * phaseMult.coin + coinFlat;
  const coins = Math.max(0, Math.round(coinRaw));
  sources.push({ label: `Base ${COIN_PER_CORRECT} × combo ${comboMult}`, amount: Math.round(COIN_PER_CORRECT * comboMult), kind: "coins" });
  if (additive > 1) sources.push({ label: `Multipliers ×${additive.toFixed(2)}`, amount: Math.round(COIN_PER_CORRECT * comboMult * (additive - 1)), kind: "coins" });
  if (phaseMult.coin !== 1) sources.push({ label: `Phase ${phase} ×${phaseMult.coin}`, amount: Math.round(COIN_PER_CORRECT * comboMult * additive * (phaseMult.coin - 1)), kind: "coins" });
  if (coinFlat) sources.push({ label: `Flat +${coinFlat}`, amount: coinFlat, kind: "coins" });
  return { xp, coins, sources };
}
function resolveArtifactTriggers({ equipped = {}, unlockedItems = {}, event = {}, state = {} } = {}) {
  const triggered = [];
  if (unlockedItems["artifact-paper-crane"] && event.correct === false && Math.random() < 0.1) {
    triggered.push({ artifactId: "artifact-paper-crane", label: "Hạc giấy: +1 gợi ý" });
  }
  if (unlockedItems["artifact-koi-scale"] && event.correct === true && (event.combo || 0) >= 7) {
    triggered.push({ artifactId: "artifact-koi-scale", label: "Vảy Cá Koi: thưởng xu" });
  }
  if (unlockedItems["artifact-bonsai"] && event.correct === true && (event.phase === "core" || event.phase === "boss")) {
    triggered.push({ artifactId: "artifact-bonsai", label: "Bonsai: SRS +1" });
  }
  return triggered;
}
function resolveSessionCompletion({ score = 0, total = 0, timeMs = 0 } = {}) {
  if (total <= 0) return { coins: 0, xp: 0, sources: [] };
  const pct = score / total;
  let coins = 0;
  if (pct >= 0.9) coins = 50;
  else if (pct >= 0.75) coins = 30;
  else if (pct >= 0.5) coins = 15;
  else coins = 10;
  const xp = Math.round(pct * 20);
  const sources = [
    { label: `Hoàn thành (${Math.round(pct * 100)}%)`, amount: coins, kind: "coins" },
    { label: `XP hoàn thành`, amount: xp, kind: "xp" }
  ];
  if (timeMs >= 15 * 60 * 1e3) sources.push({ label: "Rèn luyện 15+ phút", amount: 5, kind: "coins" });
  return { coins: coins + (timeMs >= 15 * 60 * 1e3 ? 5 : 0), xp, sources };
}
function applyPayout(payout) {
  var _a, _b;
  if (!payout) return { ok: false };
  const receipt = {
    xp: payout.xp,
    coins: payout.coins,
    gems: payout.gems,
    sources: payout.sources,
    masteryLevelUps: [],
    artifactTriggered: payout.artifactTriggered
  };
  try {
    const learning = useLearningStore.getState();
    if (payout.xp > 0 && typeof learning.addXp === "function") {
      learning.addXp(payout.xp);
    }
    if (payout.coins > 0 && typeof learning.addCoins === "function") {
      learning.addCoins(payout.coins, "game-reward");
    }
    if (payout.gems > 0) {
      try {
        const state = loadGemState();
        saveGemState(addGems(state, payout.gems, "game-reward"));
      } catch (err) {
        console.warn("[rewards.apply] gems", err);
      }
    }
    if (payout.petHappinessDelta && typeof learning.bumpPetHappiness === "function") {
      learning.bumpPetHappiness(payout.petHappinessDelta);
    }
    if (payout.streakDelta && typeof learning.bumpAnswerStreak === "function") {
      learning.bumpAnswerStreak(payout.streakDelta);
    }
    if ((_a = payout.questDelta) == null ? void 0 : _a.length) {
      try {
        const quest = useQuestStore.getState();
        if (typeof quest.advanceFromPayout === "function") {
          quest.advanceFromPayout(payout.questDelta, payout.chainDelta);
        }
      } catch (err) {
        console.warn("[rewards.apply] quest", err);
      }
    }
    if ((_b = payout.masteryDelta) == null ? void 0 : _b.length) {
      const levelUps = useMasteryStore.getState().applyBatch(payout.masteryDelta);
      receipt.masteryLevelUps = levelUps || [];
      for (const lu of levelUps || []) {
        bus.emit(GAME_EVENTS.MASTERY_LEVELED, lu);
      }
    }
    for (const trig of payout.artifactTriggered || []) {
      bus.emit(GAME_EVENTS.ARTIFACT_TRIGGERED, trig);
    }
    bus.emit(GAME_EVENTS.REWARD_DISPATCHED, receipt);
    return { ok: true, levelUps: receipt.masteryLevelUps, receipt };
  } catch (err) {
    console.warn("[rewards.apply] fatal", err);
    return { ok: false };
  }
}
function makeEmptyPayout() {
  return {
    xp: 0,
    coins: 0,
    gems: 0,
    materials: {},
    cosmeticDrops: [],
    questDelta: [],
    chainDelta: [],
    petHappinessDelta: 0,
    streakDelta: 0,
    masteryDelta: [],
    artifactTriggered: [],
    sources: []
  };
}
function computeAnswerPayout({ event, state, season, worldPhase } = {}) {
  var _a, _b;
  const payout = makeEmptyPayout();
  if (!event) return payout;
  const itemBonuses = getItemBonuses(state) || {};
  const setBonuses = getSetBonuses(state) || {};
  const phase = event.phase || PHASES.CORE;
  const mult = getPhaseMultiplier(phase);
  const { xp, coins, sources } = resolveAnswer({
    correct: event.correct,
    phase,
    combo: event.combo || 0,
    state,
    itemBonuses,
    setBonuses,
    season
  });
  payout.xp += xp;
  payout.coins += coins;
  payout.sources.push(...sources);
  if (event.correct && worldPhase) {
    if ((worldPhase === "morning" || worldPhase === "dawn") && phase === "warmup") {
      const bonus = Math.max(1, Math.round(xp * 0.1));
      payout.xp += bonus;
      payout.sources.push({ label: `🌅 Buổi sáng +${bonus} XP`, amount: bonus, kind: "xp" });
    }
    if ((worldPhase === "evening" || worldPhase === "dusk" || worldPhase === "night") && mult.countsMastery) {
      const bonus = 1;
      payout.xp += bonus;
      payout.sources.push({ label: `🌙 Buổi tối +${bonus} XP`, amount: bonus, kind: "xp" });
    }
  }
  if (event.correct && mult.countsMastery) {
    const skillId = inferSkillId(event);
    payout.masteryDelta.push({ skillId, xp: 2 });
    payout.masteryDelta.push(...synthSkillDeltas({
      answerMs: (_a = event.meta) == null ? void 0 : _a.answerMs,
      comboStreak: event.combo || 0,
      sessionMs: (_b = event.meta) == null ? void 0 : _b.sessionMs
    }));
  }
  if (event.correct && mult.countsQuestProgress) {
    const kind = event.itemKind || inferSkillId(event);
    payout.questDelta.push({ questId: `todayCorrectByKind.${kind}`, delta: 1 });
    if (mult.countsChain) {
      payout.questDelta.push({ questId: `weekCorrectByKind.${kind}`, delta: 1 });
      payout.questDelta.push({ questId: `seasonCorrectByKind.${kind}`, delta: 1 });
    }
  }
  const triggered = resolveArtifactTriggers({
    equipped: state == null ? void 0 : state.equippedCosmetics,
    unlockedItems: state == null ? void 0 : state.unlockedItems,
    event,
    state
  });
  payout.artifactTriggered.push(...triggered);
  payout.petHappinessDelta += event.correct ? 0.5 : -0.2;
  return payout;
}
function computeSessionPayout({ summary, state } = {}) {
  const payout = makeEmptyPayout();
  if (!summary) return payout;
  const { coins, xp, sources } = resolveSessionCompletion(summary);
  payout.coins += coins;
  payout.xp += xp;
  payout.sources.push(...sources);
  if ((summary.total || 0) >= 5 && summary.score / Math.max(1, summary.total) >= 0.5) {
    payout.streakDelta += 1;
  }
  return payout;
}
let installed$3 = false;
function getSeasonSnapshot() {
  try {
    const h = (/* @__PURE__ */ new Date()).getMonth() + 1;
    if (h <= 2 || h === 12) return { id: "winter" };
    if (h <= 5) return { id: "spring" };
    if (h <= 8) return { id: "summer" };
    return { id: "autumn" };
  } catch (e) {
  }
  return null;
}
function getWorldPhase() {
  var _a, _b;
  try {
    return ((_b = (_a = useWorldClockStore).getState) == null ? void 0 : _b.call(_a).phase) || null;
  } catch (e) {
    return null;
  }
}
function installRewardSubscriber() {
  if (installed$3) return;
  installed$3 = true;
  bus.on(GAME_EVENTS.ANSWER_SUBMITTED, (event) => {
    try {
      const state = useLearningStore.getState();
      const season = getSeasonSnapshot();
      const worldPhase = getWorldPhase();
      const payout = computeAnswerPayout({ event, state, season, worldPhase });
      applyPayout(payout);
    } catch (err) {
      console.warn("[reward-subscriber] answer", err);
    }
  }, { prio: PRIO.REWARD, tag: "reward" });
  bus.on(GAME_EVENTS.SESSION_FINISHED, (summary) => {
    try {
      const state = useLearningStore.getState();
      const season = getSeasonSnapshot();
      const worldPhase = getWorldPhase();
      const payout = computeSessionPayout({ summary, state, season, worldPhase });
      applyPayout(payout);
    } catch (err) {
      console.warn("[reward-subscriber] session", err);
    }
  }, { prio: PRIO.REWARD, tag: "reward" });
}
let installed$2 = false;
function currentSeasonId() {
  const m = (/* @__PURE__ */ new Date()).getMonth() + 1;
  if (m <= 2 || m === 12) return "winter";
  if (m <= 5) return "spring";
  if (m <= 8) return "summer";
  return "autumn";
}
function installQuestSubscriber() {
  if (installed$2) return;
  installed$2 = true;
  bus.on(GAME_EVENTS.ANSWER_SUBMITTED, () => {
    var _a, _b;
    try {
      const quest = useQuestStore.getState();
      const counters = quest.counters || {};
      const season = currentSeasonId();
      for (const chain of QUEST_CHAINS) {
        if (chain.scope === "seasonal" && chain.seasonId && chain.seasonId !== season) continue;
        const current2 = ((_a = quest.chainProgress) == null ? void 0 : _a[chain.id]) || { step: 0 };
        if (current2.done) continue;
        const stepIdx = Math.min(current2.step, chain.steps.length - 1);
        const step = chain.steps[stepIdx];
        if (!step) continue;
        const value = getCounter(counters, step.goalKey);
        if (value >= step.goal) {
          (_b = quest.advanceChain) == null ? void 0 : _b.call(quest, chain.id, chain.steps.length);
          bus.emit(GAME_EVENTS.CHAIN_ADVANCED, {
            chainId: chain.id,
            step: stepIdx + 1,
            total: chain.steps.length,
            reward: step.reward
          });
          if (stepIdx + 1 >= chain.steps.length) {
            bus.emit(GAME_EVENTS.CHAIN_COMPLETED, {
              chainId: chain.id,
              final: chain.final
            });
          }
        }
      }
    } catch (err) {
      console.warn("[quest-subscriber]", err);
    }
  }, { prio: PRIO.QUESTS, tag: "quest" });
}
function getCounter(counters, path) {
  if (!path) return 0;
  const parts = path.split(".");
  let node = counters;
  for (const p of parts) {
    if (node == null) return 0;
    node = node[p];
  }
  return typeof node === "number" ? node : 0;
}
let installed$1 = false;
function resolveAbilityEffect(petId) {
  var _a, _b, _c;
  try {
    const state = (_b = (_a = useLearningStore).getState) == null ? void 0 : _b.call(_a);
    const pet = (_c = state == null ? void 0 : state.pets) == null ? void 0 : _c[petId];
    if (pet == null ? void 0 : pet.activeAbility) return pet.activeAbility;
  } catch (e) {
  }
  return null;
}
function applyPetActive(abilityId) {
  var _a, _b, _c, _d, _e, _f, _g;
  const state = ((_b = (_a = useLearningStore).getState) == null ? void 0 : _b.call(_a)) || {};
  if (abilityId.includes("soft-paw") || abilityId.includes("timer")) {
    pauseTimer(1e4);
    return;
  }
  if (abilityId.includes("coin-rain") || abilityId.includes("coin-burst")) {
    try {
      (_c = state.addCoins) == null ? void 0 : _c.call(state, 50, "pet-active");
    } catch (e) {
    }
    return;
  }
  if (abilityId.includes("royal-gift") || abilityId.includes("gift-hint")) {
    try {
      (_d = state.grantPowerUp) == null ? void 0 : _d.call(state, "hintPack", 1);
    } catch (e) {
    }
    return;
  }
  if (abilityId.includes("snow-cloak") || abilityId.includes("free-hint")) {
    try {
      (_e = state.grantPowerUp) == null ? void 0 : _e.call(state, "hintPack", 3);
    } catch (e) {
    }
    return;
  }
  if (abilityId.includes("rice-blessing") || abilityId.includes("xp-double")) {
    applyBuff("xp-boost-2x", { durationMs: 45e3 });
    return;
  }
  if (abilityId.includes("moon-song") || abilityId.includes("xp-plus50")) {
    applyBuff("xp-plus-50", { durationMs: 6e4 });
    return;
  }
  if (abilityId.includes("phantom-step") || abilityId.includes("shield")) {
    applyBuff("shield-2-wrong", { durationMs: 12e4, data: { remaining: 2 } });
    return;
  }
  if (abilityId.includes("shadow-leap") || abilityId.includes("skip")) {
    applyBuff("skip-next", { durationMs: 6e4 });
    return;
  }
  if (abilityId.includes("disguise") || abilityId.includes("eliminate")) {
    applyBuff("eliminate-2", { durationMs: 6e4 });
    return;
  }
  if (abilityId.includes("barrel-roll") || abilityId.includes("reroll")) {
    applyBuff("reroll-current", { durationMs: 3e4 });
    return;
  }
  if (abilityId.includes("bark-rally") || abilityId.includes("combo-plus")) {
    try {
      (_f = state.addCombo) == null ? void 0 : _f.call(state);
    } catch (e) {
    }
    return;
  }
  if (abilityId.includes("heal") || abilityId.includes("restore-hp")) {
    heal(1);
    return;
  }
  try {
    (_g = state.addCoins) == null ? void 0 : _g.call(state, 15, `pet-active:${abilityId}`);
  } catch (e) {
  }
}
function installPetActiveSubscriber() {
  if (installed$1) return;
  installed$1 = true;
  bus.on(GAME_EVENTS.PET_ACTIVE_TRIGGERED, (payload) => {
    var _a, _b, _c;
    try {
      const { petId } = payload || {};
      if (!petId) return;
      try {
        const state = (_b = (_a = useLearningStore).getState) == null ? void 0 : _b.call(_a);
        (_c = state == null ? void 0 : state.setPetActiveCooldown) == null ? void 0 : _c.call(state, petId, Date.now() + 900 * 1e3);
      } catch (e) {
      }
      const abilityId = resolveAbilityEffect(petId) || "heal";
      applyPetActive(abilityId);
    } catch (err) {
      console.warn("[pet-active-subscriber]", err);
    }
  }, { prio: PRIO.PROGRESSION, tag: "pet-active" });
}
let installed = false;
let isTracking = false;
let activePlan = null;
let activeBlockIndex = -1;
let activeAnswers = [];
let activeRewards = { xp: 0, coins: 0, gems: 0 };
function isBlockMatching(block, trainerId, mode) {
  if (!block) return false;
  if (trainerId === "daily-practice") {
    return block.route.includes(mode || "");
  }
  const domainMap = {
    vocab: "vocab-dojo",
    kanji: "kanji-academy",
    grammar: "grammar-arena",
    reading: "reading-room",
    listening: "listening-lab"
  };
  return domainMap[block.domain] === trainerId;
}
function installStudySessionSubscriber() {
  if (installed) return;
  installed = true;
  if (typeof window !== "undefined") {
    window.addEventListener("n4:study-os:hint-used", (e) => {
      var _a;
      if (!isTracking) return;
      const key = (_a = e.detail) == null ? void 0 : _a.itemKey;
      if (!key) return;
      const ans = activeAnswers.find((a) => a.itemKey === key);
      if (ans) ans.hintUsed = true;
    });
    window.addEventListener("n4:study-os:reveal-used", (e) => {
      var _a;
      if (!isTracking) return;
      const key = (_a = e.detail) == null ? void 0 : _a.itemKey;
      if (!key) return;
      const ans = activeAnswers.find((a) => a.itemKey === key);
      if (ans) ans.revealUsed = true;
    });
  }
  bus.on(GAME_EVENTS.SESSION_STARTED, (event) => {
    try {
      const plan = loadDailyStudyPlan();
      if (plan && plan.status === "active") {
        const block = plan.blocks[plan.currentBlock];
        if (block && isBlockMatching(block, event.trainerId, event.mode)) {
          isTracking = true;
          activePlan = plan;
          activeBlockIndex = plan.currentBlock;
          activeAnswers = [];
          activeRewards = { xp: 0, coins: 0, gems: 0 };
        }
      }
    } catch (err) {
      console.warn("[study-session-subscriber] start", err);
    }
  });
  bus.on(GAME_EVENTS.ANSWER_SUBMITTED, (event) => {
    if (!isTracking) return;
    try {
      const { itemKey, correct } = event;
      if (itemKey) {
        let ans = activeAnswers.find((a) => a.itemKey === itemKey);
        if (!ans) {
          ans = {
            itemKey,
            correct: !!correct,
            quality: event.quality || void 0,
            hintUsed: false,
            revealUsed: false,
            timestamp: event.ts || Date.now()
          };
          activeAnswers.push(ans);
        } else {
          ans.correct = ans.correct || !!correct;
          if (event.quality) ans.quality = event.quality;
        }
        if (!correct) {
          useLearningStore.getState().recordMistake(itemKey);
        } else {
          useLearningStore.getState().resolveMistake(itemKey);
        }
      }
    } catch (err) {
      console.warn("[study-session-subscriber] answer", err);
    }
  });
  bus.on(GAME_EVENTS.REWARD_DISPATCHED, (receipt) => {
    if (!isTracking) return;
    try {
      activeRewards.xp += receipt.xp || 0;
      activeRewards.coins += receipt.coins || 0;
      activeRewards.gems += receipt.gems || 0;
    } catch (err) {
      console.warn("[study-session-subscriber] reward", err);
    }
  });
  bus.on(GAME_EVENTS.SESSION_FINISHED, (summary) => {
    if (!isTracking) return;
    try {
      const result = {
        score: summary.score || 0,
        total: summary.total || 0,
        timeMs: summary.timeMs || 0,
        xp: activeRewards.xp,
        coins: activeRewards.coins,
        gems: activeRewards.gems
      };
      completeBlockInStudyPlan(activePlan, activeBlockIndex, activeAnswers, result);
    } catch (err) {
      console.warn("[study-session-subscriber] finish", err);
    } finally {
      isTracking = false;
      activePlan = null;
      activeBlockIndex = -1;
      activeAnswers = [];
    }
  });
}
let booted = false;
function bootGameEventSubscribers() {
  if (booted) return;
  booted = true;
  installTelemetryBridge();
  installAudioSubscriber();
  installRewardSubscriber();
  installQuestSubscriber();
  installPetActiveSubscriber();
  installStudySessionSubscriber();
}
bootGameEventSubscribers();
const STATES = Object.freeze({
  IDLE: "idle",
  RUNNING: "running",
  PAUSED: "paused",
  FINISHED: "finished"
});
const DEFAULT_RHYTHM = Object.freeze({
  warmup: 3,
  bossAt: "mid",
  // 'mid' | 'end' | number
  bossCount: 1,
  cooldown: 1,
  totalItems: null
  // set by trainer
});
function computePhase({ answerIdx, rhythm }) {
  const r = rhythm || DEFAULT_RHYTHM;
  const total = r.totalItems || Infinity;
  if (answerIdx < r.warmup) return PHASES.WARMUP;
  if (total !== Infinity) {
    const cooldownStart = total - (r.cooldown || 0);
    if (answerIdx >= cooldownStart) return PHASES.COOLDOWN;
    const bossCount = r.bossCount || 1;
    const bossStart = r.bossAt === "end" ? cooldownStart - bossCount : Math.floor(total / 2);
    if (answerIdx >= bossStart && answerIdx < bossStart + bossCount) return PHASES.BOSS;
  }
  return PHASES.CORE;
}
function useGameSession({
  trainerId,
  mode,
  hearts: startHearts = 3,
  hazardSeconds = null,
  rhythm,
  onFinish,
  onPhaseEntered
} = {}) {
  const [status, setStatus] = reactExports.useState(STATES.IDLE);
  const [hp, setHp] = reactExports.useState(startHearts);
  const [timeLeft, setTimeLeft] = reactExports.useState(hazardSeconds != null ? hazardSeconds : 0);
  const [answers, setAnswers] = reactExports.useState([]);
  const [events, setEvents] = reactExports.useState([]);
  const [phase, setPhase] = reactExports.useState(PHASES.WARMUP);
  const startedAtRef = reactExports.useRef(0);
  const lastTickRef = reactExports.useRef(0);
  const hazardRef = reactExports.useRef(null);
  const rhythmRef = reactExports.useRef(rhythm || DEFAULT_RHYTHM);
  const phaseRef = reactExports.useRef(PHASES.WARMUP);
  reactExports.useEffect(() => {
    rhythmRef.current = rhythm || DEFAULT_RHYTHM;
  }, [rhythm]);
  const emitPhaseIfChanged = reactExports.useCallback((nextPhase, idx) => {
    var _a;
    if (nextPhase !== phaseRef.current) {
      phaseRef.current = nextPhase;
      setPhase(nextPhase);
      const payload = { phase: nextPhase, idx, of: (_a = rhythmRef.current) == null ? void 0 : _a.totalItems, trainerId, mode };
      bus.emit(GAME_EVENTS.SESSION_PHASE_ENTERED, payload);
      try {
        onPhaseEntered == null ? void 0 : onPhaseEntered(payload);
      } catch (err) {
        console.warn("[useGameSession] onPhaseEntered", err);
      }
    }
  }, [trainerId, mode, onPhaseEntered]);
  const begin = reactExports.useCallback(() => {
    var _a;
    setStatus(STATES.RUNNING);
    setHp(startHearts);
    setTimeLeft(hazardSeconds != null ? hazardSeconds : 0);
    setAnswers([]);
    setEvents([]);
    phaseRef.current = PHASES.WARMUP;
    setPhase(PHASES.WARMUP);
    startedAtRef.current = Date.now();
    lastTickRef.current = Date.now();
    telemetry.emit(TELEMETRY_EVENTS.GAME_SESSION_STARTED, { trainerId, mode, at: Date.now() });
    bus.emit(GAME_EVENTS.SESSION_STARTED, { trainerId, mode, startedAt: Date.now(), rhythm: rhythmRef.current });
    bus.emit(GAME_EVENTS.SESSION_PHASE_ENTERED, { phase: PHASES.WARMUP, idx: 0, of: (_a = rhythmRef.current) == null ? void 0 : _a.totalItems, trainerId, mode });
  }, [startHearts, hazardSeconds, trainerId, mode]);
  const finish = reactExports.useCallback((extra = {}) => {
    if (status === STATES.FINISHED) return;
    setStatus(STATES.FINISHED);
    const summary = {
      trainerId,
      mode,
      timeMs: Math.max(0, Date.now() - startedAtRef.current),
      answers,
      score: answers.filter((a) => a.correct).length,
      total: answers.length,
      hpRemaining: hp,
      events,
      ...extra
    };
    try {
      onFinish == null ? void 0 : onFinish(summary);
    } catch (err) {
      console.warn("[useGameSession] onFinish error", err);
    }
    bus.emit(GAME_EVENTS.SESSION_FINISHED, summary);
  }, [answers, events, hp, mode, onFinish, status, trainerId]);
  reactExports.useEffect(() => {
    if (status !== STATES.RUNNING || hazardSeconds == null) return void 0;
    hazardRef.current = setInterval(() => {
      setTimeLeft((t) => {
        const next = Math.max(0, t - 1);
        if (next <= 0 && hazardRef.current) {
          clearInterval(hazardRef.current);
          hazardRef.current = null;
          queueMicrotask(() => finish({ reason: "time-up" }));
        }
        return next;
      });
    }, 1e3);
    return () => {
      if (hazardRef.current) {
        clearInterval(hazardRef.current);
        hazardRef.current = null;
      }
    };
  }, [status, hazardSeconds, finish]);
  const pause = reactExports.useCallback(() => {
    setStatus((s) => s === STATES.RUNNING ? STATES.PAUSED : s);
  }, []);
  const resume = reactExports.useCallback(() => {
    setStatus((s) => s === STATES.PAUSED ? STATES.RUNNING : s);
  }, []);
  const submitAnswer = reactExports.useCallback(({ correct, itemKey, itemKind, quality, meta } = {}) => {
    if (status !== STATES.RUNNING) return;
    const ts = Date.now();
    const comboAfter = (() => {
      if (!correct) return 0;
      let c = 0;
      for (let i = answers.length - 1; i >= 0; i--) {
        if (answers[i].correct) c++;
        else break;
      }
      return c + 1;
    })();
    const entry = { correct: !!correct, itemKey, itemKind, quality, ts, meta, combo: comboAfter, phase: phaseRef.current };
    setAnswers((arr) => {
      const next = [...arr, entry];
      const idx = next.length;
      const nextPhase = computePhase({ answerIdx: idx, rhythm: rhythmRef.current });
      queueMicrotask(() => emitPhaseIfChanged(nextPhase, idx));
      return next.length > 2e3 ? next.slice(-2e3) : next;
    });
    setEvents((arr) => {
      const next = [...arr, { t: ts - startedAtRef.current, k: "answer", correct: !!correct, itemKey, itemKind, quality, combo: comboAfter, phase: phaseRef.current }];
      return next.length > 2e3 ? next.slice(-2e3) : next;
    });
    bus.emit(GAME_EVENTS.ANSWER_SUBMITTED, {
      correct: !!correct,
      itemKey,
      itemKind,
      quality,
      combo: comboAfter,
      phase: phaseRef.current,
      trainerId,
      mode,
      ts,
      meta
    });
    if (correct) {
      bus.emit(GAME_EVENTS.COMBO_CHANGED, { combo: comboAfter, delta: 1, phase: phaseRef.current });
      const tier = comboAfter >= 25 ? 4 : comboAfter >= 10 ? 3 : comboAfter >= 5 ? 2 : comboAfter >= 1 ? 1 : 0;
      if (tier >= 2) bus.emit(GAME_EVENTS.COMBO_TIER_UP, { tier, combo: comboAfter });
      const correctTotal = answers.filter((a) => a.correct).length + 1;
      if (correctTotal % 10 === 0) bus.emit(GAME_EVENTS.MILESTONE_HIT, { correctTotal });
    } else {
      bus.emit(GAME_EVENTS.COMBO_BROKEN, { phase: phaseRef.current });
    }
  }, [status, trainerId, mode, answers, emitPhaseIfChanged]);
  const damage2 = reactExports.useCallback((amount = 1) => {
    setHp((h) => {
      const delta = -Math.max(0, Math.round(amount));
      const next = Math.max(0, h + delta);
      bus.emit(GAME_EVENTS.HP_CHANGED, { hp: next, delta, cause: "damage" });
      if (next <= 0) queueMicrotask(() => finish({ reason: "hp-zero" }));
      return next;
    });
  }, [finish]);
  const heal2 = reactExports.useCallback((amount = 1) => {
    setHp((h) => {
      const delta = Math.max(0, Math.round(amount));
      const next = Math.min(startHearts, h + delta);
      bus.emit(GAME_EVENTS.HP_CHANGED, { hp: next, delta, cause: "heal" });
      return next;
    });
  }, [startHearts]);
  const advancePhase = reactExports.useCallback((nextPhase) => {
    emitPhaseIfChanged(nextPhase, answers.length);
  }, [answers.length, emitPhaseIfChanged]);
  const patchTimer = reactExports.useCallback((ms) => {
    if (hazardSeconds == null) return;
    const add = Math.max(0, Math.round(Number(ms) / 1e3));
    if (!add) return;
    setTimeLeft((t) => t + add);
  }, [hazardSeconds]);
  const api = reactExports.useMemo(() => ({
    status,
    hp,
    timeLeft,
    answers,
    events,
    phase,
    isRunning: status === STATES.RUNNING,
    isPaused: status === STATES.PAUSED,
    isFinished: status === STATES.FINISHED,
    begin,
    pause,
    resume,
    finish,
    submitAnswer,
    damage: damage2,
    heal: heal2,
    advancePhase,
    patchTimer
  }), [status, hp, timeLeft, answers, events, phase, begin, pause, resume, finish, submitAnswer, damage2, heal2, advancePhase, patchTimer]);
  reactExports.useEffect(() => {
    if (status !== STATES.RUNNING) return void 0;
    registerActiveSession(api);
    return () => {
      unregisterActiveSession(api);
      clearBuffs();
    };
  }, [status, api]);
  return api;
}
function prefersReducedMotion() {
  try {
    if (useAppStore.getState().reducedMotion) return true;
  } catch (e) {
  }
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function useGameFeedback({ shake, pause, tier = "high" } = {}) {
  reactExports.useEffect(() => {
    const reduced = prefersReducedMotion();
    const isLow = tier === "low";
    const offs = [];
    offs.push(bus.on(GAME_EVENTS.ANSWER_SUBMITTED, (p) => {
      if (p == null ? void 0 : p.correct) {
        popXp == null ? void 0 : popXp(5 + Math.min(p.combo || 0, 10));
      } else {
        if (!reduced && !isLow && shake) shake("small", 120);
        if (!reduced && !isLow && pause) pause(150);
      }
    }));
    offs.push(bus.on(GAME_EVENTS.COMBO_TIER_UP, (p) => {
      if (reduced || isLow) return;
      const tier2 = (p == null ? void 0 : p.tier) || 0;
      if (tier2 >= 3 && shake) shake("small", 80);
      if (tier2 >= 4 && pause) pause(200);
    }));
    offs.push(bus.on(GAME_EVENTS.MILESTONE_HIT, () => {
      if (reduced || isLow) return;
      pause == null ? void 0 : pause(250);
    }));
    offs.push(bus.on(GAME_EVENTS.HP_CHANGED, (p) => {
      if (((p == null ? void 0 : p.delta) || 0) < 0 && !reduced && !isLow && shake) shake("medium", 200);
    }));
    return () => {
      for (const off2 of offs) {
        try {
          off2();
        } catch (e) {
        }
      }
    };
  }, [shake, pause, tier]);
}
function Inner({
  trainerId,
  mode,
  title,
  icon,
  color,
  hearts,
  hazardSeconds,
  rhythm,
  powerUps,
  onFinish,
  onDrillWeak,
  onRestartRequest,
  ariaLabel,
  children,
  autoStart,
  bodyLayout
}) {
  const navigate = useNavigate();
  const feedback = useFeedback();
  const [helpOpen, setHelpOpen] = reactExports.useState(false);
  const [finalSummary, setFinalSummary] = reactExports.useState(null);
  const [startedOnce, setStartedOnce] = reactExports.useState(false);
  const session = useGameSession({
    trainerId,
    mode,
    hearts,
    hazardSeconds,
    rhythm,
    onFinish: (summary) => {
      setFinalSummary(summary);
      try {
        onFinish == null ? void 0 : onFinish(summary);
      } catch (err) {
        console.warn("[GameShell] onFinish", err);
      }
    }
  });
  useGameFeedback({ shake: feedback.shake, pause: feedback.pause, tier: feedback.qualityTier });
  reactExports.useEffect(() => {
    if (autoStart && !startedOnce) {
      setStartedOnce(true);
      session.begin();
    }
  }, [autoStart, startedOnce, session]);
  const handleReplay = reactExports.useCallback(() => {
    setFinalSummary(null);
    onRestartRequest ? onRestartRequest() : session.begin();
  }, [onRestartRequest, session]);
  useHotkeys([
    { key: "p", scope: "session", prio: 10, tag: "pause", fn: () => session.isPaused ? session.resume() : session.pause() },
    { key: "r", scope: "session", prio: 10, tag: "restart", fn: () => {
      if (session.isFinished) handleReplay();
    } },
    { key: "esc", scope: "session", prio: 5, tag: "leave", fn: () => navigate("/") },
    { key: "?", scope: "session", prio: 5, tag: "help", fn: () => setHelpOpen((v) => !v) },
    { key: "shift+/", scope: "session", prio: 5, tag: "help", fn: () => setHelpOpen((v) => !v) }
  ], [session, navigate, handleReplay]);
  const childApi = reactExports.useMemo(() => ({
    session,
    submitAnswer: session.submitAnswer,
    feedback
  }), [session, feedback]);
  const content = typeof children === "function" ? children(childApi) : children;
  const bodyClassName = [
    "n4-gameshell-body",
    `is-layout-${bodyLayout || "2d-flex"}`
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gameshell n4-gameshell-v2", "aria-label": ariaLabel || title || "Trò chơi", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-gameshell-head", style: { borderTop: `3px solid ${color}` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gameshell-head-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "n4-btn n4-btn-ghost n4-btn-sm", "aria-label": "Về trang chính", children: "←" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gameshell-icon", "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gameshell-title", children: title || trainerId })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gameshell-head-right", style: { display: "flex", gap: 4 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "n4-btn n4-btn-ghost n4-btn-sm",
            onClick: () => session.isPaused ? session.resume() : session.pause(),
            disabled: session.isFinished,
            "aria-label": session.isPaused ? "Tiếp tục" : "Tạm dừng",
            title: "Tạm dừng [P]",
            children: session.isPaused ? "▶" : "⏸"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "n4-btn n4-btn-ghost n4-btn-sm",
            onClick: () => setHelpOpen(true),
            "aria-label": "Phím tắt",
            title: "Phím tắt [?]",
            children: "?"
          }
        )
      ] })
    ] }),
    hazardSeconds != null && /* @__PURE__ */ jsxRuntimeExports.jsx(TimerBar, { seconds: session.timeLeft, maxSeconds: hazardSeconds, paused: session.isPaused }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: bodyClassName, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gameshell-2d-slot", children: content }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "n4-gameshell-foot", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PowerupDock, { slots: powerUps, disabled: !session.isRunning }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PauseMenu,
      {
        open: session.isPaused,
        onResume: () => session.resume(),
        onRestart: handleReplay,
        onLeave: () => navigate("/")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HotkeyHelpOverlay, { open: helpOpen, onClose: () => setHelpOpen(false) }),
    session.isFinished && finalSummary && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SessionReviewV2,
      {
        summary: finalSummary,
        onDrillWeak,
        onReplay: handleReplay,
        onLeave: () => navigate("/")
      }
    )
  ] });
}
function GameShell({
  trainerId,
  mode,
  title,
  icon = "🎮",
  color = "#6fbfff",
  hearts = 3,
  hazardSeconds = null,
  rhythm = null,
  powerUps = ["hintPack", "revealOne", "skipShield", "rerollQ"],
  onFinish,
  onDrillWeak,
  onRestartRequest,
  ariaLabel,
  children,
  autoStart = true,
  bodyLayout = "2d-flex",
  qualityTier = null
}) {
  const { tier } = useQuality();
  const resolvedQualityTier = qualityTier || tier;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FeedbackProvider, { qualityTier: resolvedQualityTier, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Inner,
    {
      trainerId,
      mode,
      title,
      icon,
      color,
      hearts,
      hazardSeconds,
      rhythm,
      powerUps,
      onFinish,
      onDrillWeak,
      onRestartRequest,
      ariaLabel,
      autoStart,
      bodyLayout,
      children
    }
  ) });
}
function TrainerTopBar({
  trainerId,
  activeMode,
  modes = [],
  sections = [],
  section = "all",
  onSectionChange,
  difficulty = "normal",
  onDifficultyChange,
  itemCount = 10,
  onItemCountChange
}) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-trainer-topbar", children: [
    modes.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-trainer-topbar-modes", children: modes.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: `n4-btn n4-btn-sm ${activeMode === m.id ? "n4-btn-primary" : "n4-btn-ghost"}`,
        onClick: () => navigate(`/trainer/${trainerId}/${m.id}`),
        title: m.label,
        children: [
          m.icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: m.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-topbar-label", children: m.label })
        ]
      },
      m.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-trainer-topbar-settings", style: { display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }, children: [
      (sections == null ? void 0 : sections.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--n4-text-muted, #888)", letterSpacing: "0.05em" }, children: "📂 NHÓM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: section,
            onChange: (e) => onSectionChange == null ? void 0 : onSectionChange(e.target.value),
            className: "n4-input",
            style: { fontSize: 12, padding: "4px 8px", height: "auto" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Tất cả" }),
              sections.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: s.id, children: [
                s.title,
                " (",
                s.count,
                ")"
              ] }, s.id))
            ]
          }
        )
      ] }),
      onDifficultyChange && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--n4-text-muted, #888)", letterSpacing: "0.05em" }, children: "⚙️ ĐỘ KHÓ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: difficulty,
            onChange: (e) => onDifficultyChange(e.target.value),
            className: "n4-input",
            style: { fontSize: 12, padding: "4px 8px", height: "auto" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "easy", children: "Dễ" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "normal", children: "Bình thường" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hard", children: "Khó" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "adaptive", children: "🧠 Thích ứng" })
            ]
          }
        )
      ] }),
      onItemCountChange && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--n4-text-muted, #888)", letterSpacing: "0.05em" }, children: "🔢 SỐ CÂU" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            value: itemCount,
            onChange: (e) => onItemCountChange(Number(e.target.value)),
            className: "n4-input",
            style: { fontSize: 12, padding: "4px 8px", height: "auto" },
            children: [5, 10, 15, 20, 30, 50].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: n, children: [
              n,
              " câu"
            ] }, n))
          }
        )
      ] })
    ] })
  ] });
}
export {
  GameShell as G,
  TrainerTopBar as T,
  bus as b
};
