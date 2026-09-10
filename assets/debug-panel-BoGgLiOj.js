import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { u as useAppStore, h as useLearningStore, O as useGameStore, a as useDataStore, ay as submitBugToCloud } from "./index-BEJSIlFS.js";
import { g as getMyReports, r as reportContentError } from "./content-errors-D90Pz2ps.js";
import { c as chatWithAI } from "./client-wNJ1tNgU.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./api-BAg1LJRR.js";
const EXPECTED_LOOKUP = {
  "TTS/Audio": "Âm thanh nên phát đúng khi nhấn nút, có voice tiếng Nhật/Việt khả dụng.",
  "Game/Quiz": "Game nên chạy mượt, không crash, điểm số cập nhật đúng.",
  "UI/Layout": "Giao diện nên hiển thị đúng, không bị vỡ layout hoặc chồng chéo.",
  "Data/Content": "Nội dung nên hiển thị đầy đủ, đúng tiếng Nhật và tiếng Việt.",
  "Settings": "Cài đặt nên được áp dụng ngay lập tức và giữ lại sau khi reload.",
  "Navigation": "Điều hướng nên chuyển tab/trang mượt mà, không bị kẹt.",
  "Save/Load": "Dữ liệu nên lưu vào localStorage và khôi phục đúng khi mở lại.",
  "Accessibility": "Tính năng trợ năng nên hoạt động đúng cho người dùng khuyết tật.",
  "Performance": "Ứng dụng nên phản hồi dưới 1 giây, không lag hoặc giật.",
  "Other": "Tính năng nên hoạt động như mô tả trong giao diện."
};
const CATEGORY_MAP = {
  TypeError: "UI/Layout",
  ReferenceError: "UI/Layout",
  speechSynthesis: "TTS/Audio",
  SpeechSynthesis: "TTS/Audio",
  TTS: "TTS/Audio",
  localStorage: "Save/Load",
  JSON: "Data/Content",
  fetch: "Performance",
  network: "Performance",
  game: "Game/Quiz",
  trainer: "Game/Quiz",
  quiz: "Game/Quiz",
  router: "Navigation",
  route: "Navigation"
};
function categorizeError(msg) {
  const lower = (msg || "").toLowerCase();
  for (const [pattern, cat] of Object.entries(CATEGORY_MAP)) {
    if (lower.includes(pattern.toLowerCase())) return cat;
  }
  return "Other";
}
function detectIssues() {
  var _a, _b, _c, _d, _e, _f;
  const issues = [];
  const now = Date.now();
  const recentErrors = (window._debugErrors || []).filter((e) => {
    const t = new Date(e.time).getTime();
    return e.level === "error" && now - t < 6e4;
  });
  if (recentErrors.length > 0) {
    const grouped = {};
    recentErrors.forEach((e) => {
      const cat = categorizeError(e.msg);
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(e);
    });
    for (const [cat, errs] of Object.entries(grouped)) {
      issues.push({
        type: "console_error",
        severity: errs.length >= 3 ? "🔴 Critical" : "🟠 High",
        category: cat,
        description: `${errs.length} console error(s) trong 60s gần nhất: ${errs[0].msg.slice(0, 100)}`,
        expected: EXPECTED_LOOKUP[cat] || EXPECTED_LOOKUP.Other,
        source: "Console",
        details: errs.map((e) => e.msg.slice(0, 150)).join("\n")
      });
    }
  }
  try {
    const app = (_a = window.__N4_STORE__) == null ? void 0 : _a.app.getState();
    const learn = (_b = window.__N4_STORE__) == null ? void 0 : _b.learning.getState();
    if (learn) {
      if (learn.xp < 0) issues.push({ type: "store_anomaly", severity: "🟠 High", category: "Save/Load", description: "XP có giá trị âm: " + learn.xp, expected: "XP nên >= 0.", source: "Store", details: "learning.xp = " + learn.xp });
      if (learn.streak < 0) issues.push({ type: "store_anomaly", severity: "🟡 Medium", category: "Save/Load", description: "Streak có giá trị âm: " + learn.streak, expected: "Streak nên >= 0.", source: "Store", details: "learning.streak = " + learn.streak });
      if (learn.bookmarks && typeof learn.bookmarks !== "object") issues.push({ type: "store_anomaly", severity: "🟠 High", category: "Save/Load", description: "Bookmarks bị hỏng (không phải object)", expected: "Bookmarks nên là object.", source: "Store", details: typeof learn.bookmarks });
    }
    if (app) {
      const validThemes = ["dark", "light", "blue", "green", "purple", "warm", "midnight", "sakura"];
      if (app.theme && !validThemes.includes(app.theme)) issues.push({ type: "store_anomaly", severity: "🟡 Medium", category: "Settings", description: "Theme không hợp lệ: " + app.theme, expected: "Theme nên thuộc: " + validThemes.join(", "), source: "Store", details: "app.theme = " + app.theme });
    }
  } catch (e) {
  }
  try {
    const activeOverlays = document.querySelectorAll(".modal-overlay.active, .game-overlay.active");
    if (activeOverlays.length > 1) issues.push({ type: "dom_anomaly", severity: "🟡 Medium", category: "UI/Layout", description: activeOverlays.length + " overlay đang active cùng lúc", expected: "Chỉ nên có tối đa 1 overlay active.", source: "DOM", details: Array.from(activeOverlays).map((e) => e.id || e.className).join(", ") });
    if (!document.querySelector(".n4-app")) issues.push({ type: "dom_anomaly", severity: "🔴 Critical", category: "UI/Layout", description: "Không tìm thấy .n4-app root element", expected: ".n4-app nên tồn tại trong DOM.", source: "DOM", details: "" });
    const domCount = document.querySelectorAll("*").length;
    if (domCount > 2e4) issues.push({ type: "dom_anomaly", severity: "🟡 Medium", category: "Performance", description: "DOM quá lớn: " + domCount + " nodes", expected: "DOM nên dưới 20,000 nodes.", source: "DOM", details: 'document.querySelectorAll("*").length = ' + domCount });
  } catch (e) {
  }
  try {
    const mem = performance.memory;
    if (mem) {
      const pct = mem.usedJSHeapSize / mem.jsHeapSizeLimit * 100;
      if (pct > 80) issues.push({ type: "perf_anomaly", severity: "🟠 High", category: "Performance", description: "JS Heap sử dụng " + pct.toFixed(0) + "% bộ nhớ", expected: "Nên dưới 80% heap limit.", source: "Performance", details: Math.round(mem.usedJSHeapSize / 1048576) + "MB / " + Math.round(mem.jsHeapSizeLimit / 1048576) + "MB" });
    }
    const nav = (_d = (_c = performance.getEntriesByType) == null ? void 0 : _c.call(performance, "navigation")) == null ? void 0 : _d[0];
    if (nav && nav.loadEventEnd - nav.startTime > 5e3) issues.push({ type: "perf_anomaly", severity: "🟡 Medium", category: "Performance", description: "Page load > 5s: " + Math.round(nav.loadEventEnd - nav.startTime) + "ms", expected: "Trang nên load dưới 5 giây.", source: "Performance", details: "" });
    let storageBytes = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      storageBytes += (k.length + (localStorage.getItem(k) || "").length) * 2;
    }
    if (storageBytes > 4 * 1024 * 1024) issues.push({ type: "perf_anomaly", severity: "🟡 Medium", category: "Save/Load", description: "localStorage > 4MB: " + (storageBytes / 1048576).toFixed(1) + "MB", expected: "localStorage nên dưới 4MB.", source: "Performance", details: "" });
  } catch (e) {
  }
  try {
    if (!navigator.onLine) issues.push({ type: "network", severity: "🟢 Low", category: "Other", description: "Thiết bị đang offline", expected: "Ứng dụng offline-first, hầu hết tính năng nên vẫn hoạt động.", source: "Network", details: "" });
    const voices = ((_e = speechSynthesis == null ? void 0 : speechSynthesis.getVoices) == null ? void 0 : _e.call(speechSynthesis)) || [];
    if (voices.length === 0) issues.push({ type: "tts_failure", severity: "🟠 High", category: "TTS/Audio", description: "Không có TTS voice nào khả dụng", expected: "Nên có ít nhất 1 voice (ja-JP) để phát âm.", source: "TTS", details: "" });
    const ttsLog = window._ttsLog || [];
    const recentFails = ttsLog.filter((l) => !l.success && now - l.t < 3e4);
    if (recentFails.length >= 2) issues.push({ type: "tts_failure", severity: "🟠 High", category: "TTS/Audio", description: recentFails.length + " lần TTS thất bại trong 30s gần nhất", expected: "TTS nên phát âm thành công.", source: "TTS", details: recentFails.map((l) => l.text + " (" + l.lang + ")").join(", ") });
  } catch (e) {
  }
  try {
    const hash = location.hash.replace("#", "") || "/";
    if (hash.startsWith("/trainer/")) {
      const game = (_f = window.__N4_STORE__) == null ? void 0 : _f.game.getState();
      if (game && !game.activeTrainer) issues.push({ type: "route_anomaly", severity: "🟡 Medium", category: "Navigation", description: "Đang ở /trainer/ nhưng không có activeTrainer", expected: "Khi ở route /trainer/, game.activeTrainer nên có giá trị.", source: "Route", details: "hash: " + hash });
    }
    const navFlow = window._reactNavFlow || [];
    const fallbacks = navFlow.filter((n) => {
      var _a2, _b2;
      return ((_a2 = n.a) == null ? void 0 : _a2.includes("Route → /*")) || ((_b2 = n.a) == null ? void 0 : _b2.includes("Route → /404"));
    });
    if (fallbacks.length > 0) issues.push({ type: "route_anomaly", severity: "🟡 Medium", category: "Navigation", description: "Fallback route đã được hit", expected: "Không nên rơi vào fallback route.", source: "Route", details: fallbacks.map((f) => f.a).join(", ") });
  } catch (e) {
  }
  return issues;
}
async function generateExpected(description, context, apiKey) {
  {
    try {
      const prompt = `Bạn là trợ lý QA cho app học tiếng Nhật JLPT N4. Dựa vào mô tả lỗi dưới đây, hãy viết 1-2 câu ngắn gọn bằng tiếng Việt về hành vi kỳ vọng (expected behavior). Chỉ trả lời nội dung, không giải thích thêm.

Mô tả lỗi: ${description}
Route: ${(context == null ? void 0 : context.route) || "/"}
Category: ${(context == null ? void 0 : context.category) || "Other"}`;
      const text = await chatWithAI(prompt, apiKey, {
        systemPrompt: "Bạn là trợ lý QA ngắn gọn. Chỉ trả lời 1-2 câu tiếng Việt về expected behavior.",
        timeout: 5e3
      });
      if (text) return text.trim();
    } catch (e) {
    }
  }
  const category = (context == null ? void 0 : context.category) || "Other";
  return EXPECTED_LOOKUP[category] || EXPECTED_LOOKUP.Other;
}
async function analyzeFullReport(report, apiKey) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const ctx = report.context || {};
  const prompt = `Phân tích bug report chi tiết cho app học tiếng Nhật JLPT N4.

MÔ TẢ: ${report.description || "(trống)"}
ROUTE: ${ctx.route || "/"}
BROWSER: ${ctx.browser || "N/A"} / ${ctx.os || "N/A"}
SCREEN: ${ctx.screen || "N/A"}
MEMORY: ${ctx.memory || "N/A"}
STORAGE: ${ctx.storageTotal || "N/A"}
NETWORK: ${ctx.network || "N/A"}
DOM: ${ctx.domCount || "N/A"} nodes

CONSOLE ERRORS:
${(ctx.recentErrors || []).slice(-5).map((e) => e.msg).join("\n") || "(none)"}

STEPS:
${report.steps || "(none)"}

DETECTED ISSUES:
${(report.detectedIssues || []).map((d) => `[${d.source}] ${d.description}`).join("\n") || "(none)"}

STORE STATE (key values):
${ctx.storeSnapshot ? JSON.stringify({
    theme: (_a = ctx.storeSnapshot.app) == null ? void 0 : _a.theme,
    density: (_b = ctx.storeSnapshot.app) == null ? void 0 : _b.density,
    lessonStart: (_c = ctx.storeSnapshot.app) == null ? void 0 : _c.lessonStart,
    lessonCap: (_d = ctx.storeSnapshot.app) == null ? void 0 : _d.lessonCap,
    difficulty: (_e = ctx.storeSnapshot.app) == null ? void 0 : _e.difficulty,
    xp: (_f = ctx.storeSnapshot.learning) == null ? void 0 : _f.xp,
    streak: (_g = ctx.storeSnapshot.learning) == null ? void 0 : _g.streak,
    activeTrainer: (_h = ctx.storeSnapshot.game) == null ? void 0 : _h.activeTrainer
  }).replace(/"/g, "") : "N/A"}

Trả lời CHÍNH XÁC theo format JSON (không markdown):
{"description":"Mô tả lỗi chi tiết bằng tiếng Việt (2-4 câu)","expected":"Hành vi mong đợi đúng bằng tiếng Việt (1-2 câu)","steps":"Các bước tái hiện dạng: 1. ... 2. ... 3. ..."}`;
  const text = await chatWithAI(prompt, apiKey, {
    systemPrompt: 'Bạn là QA analyst cho app học tiếng Nhật. Phân tích bug report và trả lời CHÍNH XÁC bằng JSON format {"description":"...","expected":"...","steps":"..."}. Viết bằng tiếng Việt. Phần steps là các bước tái hiện lỗi dựa trên thông tin route, actions, console errors.',
    timeout: 15e3,
    maxTokens: 500,
    temperature: 0.3
  });
  try {
    const match = text.match(/\{[\s\S]*"description"[\s\S]*"expected"[\s\S]*\}/);
    if (match) {
      const parsed = JSON.parse(match[0]);
      if (parsed.description && parsed.expected) return parsed;
    }
  } catch (e) {
  }
  const lines = text.split("\n").filter((l) => l.trim());
  return {
    description: lines[0] || report.description || "",
    expected: lines[1] || EXPECTED_LOOKUP[report.category] || EXPECTED_LOOKUP.Other
  };
}
function safeCopy(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).catch(() => {
      _fbCopy(text);
    });
  }
  _fbCopy(text);
  return Promise.resolve();
}
function _fbCopy(t) {
  const ta = document.createElement("textarea");
  ta.value = t;
  ta.style.cssText = "position:fixed;left:-9999px;top:-9999px;opacity:0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand("copy");
  } catch (e) {
  }
  ta.remove();
}
if (typeof window !== "undefined" && !window._debugErrors) {
  window._debugErrors = [];
  const MAX = 50;
  const pushErr = (entry) => {
    window._debugErrors.push(entry);
    if (window._debugErrors.length > MAX) window._debugErrors.shift();
  };
  const origError = console.error;
  const origWarn = console.warn;
  console.error = (...args) => {
    var _a;
    pushErr({ time: (/* @__PURE__ */ new Date()).toISOString(), level: "error", msg: args.map(String).join(" ").slice(0, 500), stack: ((_a = new Error().stack) == null ? void 0 : _a.slice(0, 500)) || "" });
    origError.apply(console, args);
  };
  console.warn = (...args) => {
    pushErr({ time: (/* @__PURE__ */ new Date()).toISOString(), level: "warn", msg: args.map(String).join(" ").slice(0, 500), stack: "" });
    origWarn.apply(console, args);
  };
  window.addEventListener("error", (e) => {
    var _a, _b;
    pushErr({ time: (/* @__PURE__ */ new Date()).toISOString(), level: "error", msg: (e.message || "Unknown error") + (e.filename ? " @ " + e.filename + ":" + e.lineno : ""), stack: ((_b = (_a = e.error) == null ? void 0 : _a.stack) == null ? void 0 : _b.slice(0, 500)) || "" });
  });
  window.addEventListener("unhandledrejection", (e) => {
    var _a;
    const reason = e.reason || {};
    pushErr({ time: (/* @__PURE__ */ new Date()).toISOString(), level: "error", msg: "Unhandled rejection: " + (reason.message || String(reason)).slice(0, 300), stack: ((_a = reason.stack) == null ? void 0 : _a.slice(0, 500)) || "" });
  });
}
function StateViewer() {
  const [expanded, setExpanded] = reactExports.useState({ app: true });
  const [snapshot, setSnapshot] = reactExports.useState(null);
  const refresh = reactExports.useCallback(() => {
    var _a, _b, _c, _d;
    const app = useAppStore.getState();
    const learning = useLearningStore.getState();
    const game = useGameStore.getState();
    const data = useDataStore.getState();
    setSnapshot({
      app: { theme: app.theme, accent: app.accent, density: app.density, showFurigana: app.showFurigana, showRomaji: app.showRomaji, ttsRate: app.ttsRate, autoSpeak: app.autoSpeak, difficulty: app.difficulty, dailyGoal: app.dailyGoal, reducedMotion: app.reducedMotion, debugMode: app.debugMode },
      learning: { xp: learning.xp, level: learning.level, lastStudyDate: learning.lastStudyDate, bookmarkCount: Object.keys(learning.bookmarks || {}).length, srsCount: Object.keys(learning.srs || {}).length, todayCorrect: learning.todayCorrect, todayWrong: learning.todayWrong, combo: learning.combo, maxCombo: learning.maxCombo },
      game: { activeTrainer: game.activeTrainer, activeMode: game.activeMode, score: game.score, total: game.total, timeElapsed: game.timeElapsed },
      data: { loaded: data.loaded, vocabSections: ((_a = data.vocab) == null ? void 0 : _a.length) || 0, kanjiSections: ((_b = data.kanji) == null ? void 0 : _b.length) || 0, grammarSections: ((_c = data.grammar) == null ? void 0 : _c.length) || 0, minnaLessons: ((_d = data.minnaLessons) == null ? void 0 : _d.length) || 0 }
    });
  }, []);
  reactExports.useEffect(() => {
    refresh();
  }, [refresh]);
  const toggle = (key) => setExpanded((p) => ({ ...p, [key]: !p[key] }));
  const stores = snapshot || {};
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.8rem", fontFamily: "var(--n4-font-mono)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: refresh, style: { marginBottom: 8, padding: "2px 8px", fontSize: "0.75rem" }, children: "🔄 Refresh" }),
    Object.entries(stores).map(([name, values]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          style: { cursor: "pointer", fontWeight: 700, color: "var(--n4-primary)", padding: "4px 0" },
          onClick: () => toggle(name),
          "aria-expanded": Boolean(expanded[name]),
          children: [
            expanded[name] ? "▼" : "▶",
            " ",
            name,
            "Store"
          ]
        }
      ),
      expanded[name] && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { paddingLeft: 16 }, children: Object.entries(values).map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "2px 0", display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "var(--n4-text-muted)" }, children: [
          k,
          ":"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: typeof v === "number" ? "#ffd700" : typeof v === "boolean" ? v ? "#00ff88" : "#ff3355" : "var(--n4-text)" }, children: String(v) })
      ] }, k)) })
    ] }, name))
  ] });
}
function PerfMonitor() {
  const [stats, setStats] = reactExports.useState({});
  reactExports.useEffect(() => {
    const update = () => {
      const nav = performance.getEntriesByType("navigation")[0];
      const memory = performance.memory;
      setStats({
        pageLoadMs: nav ? Math.round(nav.loadEventEnd - nav.startTime) : "-",
        domContentLoaded: nav ? Math.round(nav.domContentLoadedEventEnd - nav.startTime) : "-",
        jsHeapMB: memory ? Math.round(memory.usedJSHeapSize / 1048576) : "-",
        jsHeapLimitMB: memory ? Math.round(memory.jsHeapSizeLimit / 1048576) : "-",
        domNodes: document.querySelectorAll("*").length,
        localStorageKeys: Object.keys(localStorage).length,
        localStorageSize: Math.round(JSON.stringify(localStorage).length / 1024)
      });
    };
    update();
    const t = setInterval(update, 2e3);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8rem", fontFamily: "var(--n4-font-mono)" }, children: [
    ["⏱️ Page Load", `${stats.pageLoadMs} ms`],
    ["📄 DOM Ready", `${stats.domContentLoaded} ms`],
    ["🧠 JS Heap", `${stats.jsHeapMB} / ${stats.jsHeapLimitMB} MB`],
    ["🏗️ DOM Nodes", stats.domNodes],
    ["💾 localStorage", `${stats.localStorageKeys} keys · ${stats.localStorageSize} KB`],
    ["🌐 Online", navigator.onLine ? "✅ Yes" : "❌ No"],
    ["📱 UA", navigator.userAgent.slice(0, 80)]
  ].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "4px 0", display: "flex", justifyContent: "space-between" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-text-muted)" }, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: value })
  ] }, label)) });
}
function ConsoleLog() {
  const [logs, setLogs] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const update = () => setLogs([...window._debugErrors || []]);
    update();
    const t = setInterval(update, 1e3);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.75rem", fontFamily: "var(--n4-font-mono)" }, children: logs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-muted)", padding: 16, textAlign: "center" }, children: "Chưa có log nào. Lỗi và cảnh báo sẽ hiện ở đây." }) : logs.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    padding: "3px 6px",
    background: l.level === "error" ? "rgba(255,50,50,0.1)" : l.level === "warn" ? "rgba(255,200,0,0.1)" : "transparent",
    borderLeft: `3px solid ${l.level === "error" ? "#ff3355" : "#ffd700"}`,
    marginBottom: 2
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-text-muted)", marginRight: 8 }, children: (l.time || "").slice(11, 19) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.msg }),
    l.stack && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-muted)", fontSize: "0.65rem", marginTop: 2, whiteSpace: "pre-wrap", maxHeight: 60, overflow: "auto" }, children: l.stack })
  ] }, i)) });
}
function ActionsTab() {
  const [result, setResult] = reactExports.useState("");
  const actions = [
    { label: "🗑️ Xóa localStorage", fn: () => {
      if (confirm("Xóa toàn bộ localStorage?")) {
        localStorage.clear();
        setResult("Đã xóa localStorage");
      }
    } },
    { label: "📊 Ghi store ra console", fn: () => {
      console.log("N4 Stores:", window.__N4_STORE__);
      setResult("Đã ghi ra console");
    } },
    { label: "🔄 Buộc tải lại dữ liệu", fn: () => {
      var _a;
      (_a = window.__N4_STORE__) == null ? void 0 : _a.data.getState().loadFromLegacy();
      setResult("Đã tải lại dữ liệu từ lớp cũ");
    } },
    { label: "📋 Chép JSON trạng thái", fn: () => {
      var _a, _b;
      const state = {
        app: (_a = window.__N4_STORE__) == null ? void 0 : _a.app.getState(),
        learning: (_b = window.__N4_STORE__) == null ? void 0 : _b.learning.getState()
      };
      safeCopy(JSON.stringify(state, null, 2)).then(() => setResult("Đã chép vào bộ nhớ tạm"));
    } },
    { label: "🎮 Đặt lại trạng thái trò chơi", fn: () => {
      var _a;
      (_a = window.__N4_STORE__) == null ? void 0 : _a.game.getState().endGame();
      setResult("Đã đặt lại trạng thái trò chơi");
    } },
    { label: "⏱️ Bản ghi hiệu năng", fn: () => {
      console.log(performance.getEntries());
      setResult("Đã ghi ra console");
    } }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 }, children: actions.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: a.fn, children: a.label }, a.label)) }),
    result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 8, fontSize: "0.8rem", color: "var(--n4-primary)" }, children: [
      "✓ ",
      result
    ] })
  ] });
}
const AI_PROXY_CAPABILITY = "server-proxy";
const BUG_STORAGE_KEY = "n4-bug-reports";
function _loadBugs() {
  try {
    return JSON.parse(localStorage.getItem(BUG_STORAGE_KEY) || "[]");
  } catch (e) {
    return [];
  }
}
function _persistBugs(bugs) {
  try {
    localStorage.setItem(BUG_STORAGE_KEY, JSON.stringify(bugs));
  } catch (e) {
  }
}
const ROUTE_TO_FILE = {
  "/": "src/app/components/world-godot/WorldExperience.jsx",
  "/content": "src/app/pages/Content.jsx",
  "/trainer": "src/app/pages/TrainerPage.jsx",
  "/settings": "src/app/pages/Settings.jsx",
  "/dictionary": "src/app/features/lookup.jsx",
  "/ai-tutor": "src/app/features/ai-tutor.jsx",
  "/ai-quiz": "src/app/features/ai-tutor.jsx",
  "/ai-grammar-drill": "src/app/features/ai-tutor.jsx",
  "/ai-mistakes": "src/app/features/ai-tutor.jsx",
  "/ai-navigator": "src/app/features/ai-tutor.jsx",
  "/ai-jlpt-predict": "src/app/features/ai-tutor.jsx",
  "/ai-jlpt-predictor": "src/app/features/ai-tutor.jsx",
  "/ai-wordmap": "src/app/features/ai-tutor.jsx",
  "/ai-story": "src/app/features/ai-tutor.jsx",
  "/ai-news": "src/app/features/ai-tutor.jsx",
  "/ai-lyrics": "src/app/features/ai-tutor.jsx",
  "/ai-diary": "src/app/features/ai-tutor.jsx",
  "/ai-scene": "src/app/features/ai-tutor.jsx",
  "/ai-kanji-detective": "src/app/features/ai-tutor.jsx",
  "/tatoeba": "src/app/features/tatoeba.jsx"
};
function _getCodeContext(route) {
  const normalizedRoute = String(route || "/").split("?")[0];
  const r = normalizedRoute.split("/").slice(0, 2).join("/") || "/";
  return ROUTE_TO_FILE[r] || "src/app/components/world-godot/WorldExperience.jsx";
}
function _detectCtx() {
  var _a, _b;
  const ua = navigator.userAgent;
  let browser = "Unknown";
  if (/Edg\//.test(ua)) browser = "Edge " + (ua.match(/Edg\/(\S+)/) || ["", "?"])[1];
  else if (/Chrome\//.test(ua)) browser = "Chrome " + (ua.match(/Chrome\/(\S+)/) || ["", "?"])[1];
  else if (/Firefox\//.test(ua)) browser = "Firefox " + (ua.match(/Firefox\/(\S+)/) || ["", "?"])[1];
  else if (/Safari\//.test(ua)) browser = "Safari";
  let os = "Unknown";
  if (/Windows NT 10/.test(ua)) os = "Windows 10/11";
  else if (/Windows/.test(ua)) os = "Windows";
  else if (/Mac OS X/.test(ua)) os = "macOS";
  else if (/Android/.test(ua)) os = "Android";
  else if (/iPhone|iPad/.test(ua)) os = "iOS";
  else if (/Linux/.test(ua)) os = "Linux";
  let storeSnapshot = {};
  try {
    const stores = window.__N4_STORE__;
    if (stores) {
      const s = stores.app.getState();
      const l = stores.learning.getState();
      const g = stores.game.getState();
      const appSnap = {};
      for (const k of Object.keys(s)) {
        if (typeof s[k] !== "function") appSnap[k] = s[k];
      }
      const learnSnap = {};
      for (const k of Object.keys(l)) {
        if (typeof l[k] !== "function") learnSnap[k] = l[k];
      }
      const gameSnap = {};
      for (const k of Object.keys(g)) {
        if (typeof g[k] !== "function") gameSnap[k] = g[k];
      }
      storeSnapshot = { app: appSnap, learning: learnSnap, game: gameSnap };
    }
  } catch (e) {
  }
  let memInfo = "n/a";
  try {
    if (performance == null ? void 0 : performance.memory) {
      const m = performance.memory;
      memInfo = Math.round(m.usedJSHeapSize / 1048576) + "MB / " + Math.round(m.jsHeapSizeLimit / 1048576) + "MB";
    }
  } catch (e) {
  }
  let perfInfo = "n/a";
  try {
    const n = (_b = (_a = performance.getEntriesByType) == null ? void 0 : _a.call(performance, "navigation")) == null ? void 0 : _b[0];
    if (n) perfInfo = "load:" + Math.round(n.loadEventEnd - n.startTime) + "ms dom:" + Math.round(n.domContentLoadedEventEnd - n.startTime) + "ms";
  } catch (e) {
  }
  let storageTotalKB = "0KB", storageTop5 = "none";
  try {
    const sizes = [];
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      const v = localStorage.getItem(k) || "";
      const b = (k.length + v.length) * 2;
      total += b;
      sizes.push({ k, s: b });
    }
    sizes.sort((a, b) => b.s - a.s);
    storageTotalKB = (total / 1024).toFixed(1) + "KB";
    storageTop5 = sizes.slice(0, 5).map((x) => x.k + ":" + (x.s / 1024).toFixed(1) + "KB").join(", ") || "none";
  } catch (e) {
  }
  let netStatus = navigator.onLine ? "online" : "offline";
  try {
    const nc = navigator.connection;
    if (nc) netStatus += " " + nc.effectiveType + (nc.downlink ? " ↓" + nc.downlink + "Mbps" : "");
  } catch (e) {
  }
  let domCount = 0;
  try {
    domCount = document.querySelectorAll("*").length;
  } catch (e) {
  }
  const activeOverlays = Array.from(document.querySelectorAll(".modal-overlay.active, .game-overlay.active")).map((el) => el.id || el.className.split(" ")[0]).join(", ") || "none";
  const currentRoute = location.hash.replace("#", "") || "/";
  return {
    route: currentRoute,
    browser,
    os,
    screen: `${window.innerWidth}x${window.innerHeight} (DPR:${(window.devicePixelRatio || 1).toFixed(1)})`,
    storeSnapshot,
    memory: memInfo,
    perfTiming: perfInfo,
    storageTotal: storageTotalKB,
    storageTop5,
    activeOverlays,
    network: netStatus,
    domCount,
    recentErrors: (window._debugErrors || []).slice(-8),
    zustandLog: [...window._zustandLog || []],
    ttsLog: [...window._ttsLog || []],
    codeContext: _getCodeContext(currentRoute),
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    userAgent: ua.slice(0, 200)
  };
}
const TEMPLATE_CATEGORIES = [
  { id: "audio", label: "🔊 Âm thanh", templates: [
    { label: "TTS không phát", desc: "Nhấn nút 🔊 nhưng không nghe thấy âm thanh phát ra.", expected: "Nên phát đúng âm thanh tiếng Nhật của từ/câu hiển thị." },
    { label: "TTS sai giọng", desc: "TTS phát âm sai giọng hoặc dùng voice không đúng ngôn ngữ.", expected: "TTS nên dùng voice tiếng Nhật cho text JP, voice tiếng Việt cho text VN." },
    { label: "TTS tốc độ lỗi", desc: "Tốc độ phát âm TTS quá nhanh hoặc quá chậm, không theo cài đặt.", expected: "TTS nên phát theo tốc độ đã cài đặt trong Cài đặt." },
    { label: "Radio N4 lỗi", desc: "Radio N4 không phát, bị gián đoạn hoặc không chuyển câu.", expected: "Radio nên phát liên tục, tự chuyển câu theo cài đặt." },
    { label: "Voice không có", desc: "Không có voice tiếng Nhật hoặc tiếng Việt khả dụng trên thiết bị.", expected: "Nên cảnh báo và hướng dẫn cài đặt voice." }
  ] },
  { id: "game", label: "🎮 Game", templates: [
    { label: "Game bị văng", desc: "Đang chơi game thì màn hình đóng đột ngột / trắng / không phản hồi.", expected: "Game nên tiếp tục hoặc hiển thị thông báo lỗi thân thiện." },
    { label: "Thẻ lật lỗi", desc: "Thẻ lật hiển thị sai nội dung, không lật được, hoặc trống.", expected: "Thẻ lật nên hiển thị đúng từ/kanji/nghĩa và lật mượt mà." },
    { label: "Trắc nghiệm đáp án sai", desc: "Bài trắc nghiệm hiển thị đáp án đúng nhưng đánh giá là sai, hoặc ngược lại.", expected: "Bài trắc nghiệm nên đánh giá chính xác đáp án đúng/sai." },
    { label: "Ghép đôi lỗi", desc: "Game ghép đôi không ghép được cặp đúng hoặc bị kẹt.", expected: "Ghép đôi nên cho phép ghép tất cả cặp đúng và kết thúc bình thường." },
    { label: "Timer lỗi", desc: "Timer không đếm ngược, đếm sai, hoặc không dừng khi hết game.", expected: "Timer nên đếm chính xác và dừng khi game kết thúc." },
    { label: "Điểm sai", desc: "Điểm số không cập nhật hoặc cập nhật sai sau khi trả lời.", expected: "Điểm nên +1 khi đúng, tổng số nên tăng sau mỗi câu." }
  ] },
  { id: "ui", label: "📐 Giao diện", templates: [
    { label: "UI bị vỡ", desc: "Phần tử UI bị che khuất, tràn ra ngoài màn hình, layout bị vỡ.", expected: "Tất cả phần tử nên hiển thị đúng vị trí, không bị cắt hoặc chồng." },
    { label: "Mobile lỗi", desc: "Giao diện bị vỡ / cắt / không cuộn được trên điện thoại hoặc tablet.", expected: "Giao diện nên responsive, hiển thị đầy đủ trên mọi kích thước." },
    { label: "Nút không hoạt động", desc: "Nhấn nút nhưng không có phản hồi / action nào xảy ra.", expected: "Nút nên thực hiện đúng action như nhãn/mô tả." },
    { label: "Modal/overlay kẹt", desc: "Modal hoặc overlay không đóng được, bị kẹt trên màn hình.", expected: "Modal nên đóng khi nhấn nút ✕ hoặc nhấn ESC." }
  ] },
  { id: "data", label: "📝 Nội dung", templates: [
    { label: "Nội dung sai", desc: "Nội dung hiển thị sai: romaji/furigana/từ/nghĩa không khớp.", expected: "Hiển thị đúng nội dung, chính xác về cả tiếng Nhật lẫn tiếng Việt." },
    { label: "Romaji/Furigana lỗi", desc: "Romaji hoặc furigana hiển thị không khớp với chữ Nhật.", expected: "Romaji/furigana phải chính xác và khớp hoàn toàn với từ tiếng Nhật." },
    { label: "Kanji thiếu", desc: "Kanji hiển thị thiếu reading, compounds, hoặc nghĩa.", expected: "Mỗi kanji nên có đầy đủ on/kun reading, compounds, và nghĩa." },
    { label: "Vocab thiếu", desc: "Từ vựng thiếu nghĩa tiếng Việt, ví dụ, hoặc romaji.", expected: "Mỗi từ vựng nên có đầy đủ nghĩa, romaji, và ví dụ." },
    { label: "Grammar thiếu", desc: "Ngữ pháp thiếu ví dụ hoặc giải thích tiếng Việt.", expected: "Mỗi mẫu ngữ pháp nên có ≥3 ví dụ và giải thích tiếng Việt." },
    { label: "Minna lỗi", desc: "Bài Minna no Nihongo thiếu nội dung hoặc hiển thị sai.", expected: "Mỗi bài Minna nên có vocab, grammar, và dialogue đầy đủ." }
  ] },
  { id: "settings", label: "⚙️ Cài đặt", templates: [
    { label: "Cài đặt không apply", desc: "Thay đổi cài đặt nhưng không thấy thay đổi trên giao diện.", expected: "Cài đặt nên áp dụng ngay lập tức khi thay đổi." },
    { label: "Theme lỗi", desc: "Chuyển theme nhưng màu sắc không đổi, hoặc phần tử sai màu.", expected: "Tất cả phần tử nên đổi màu theo theme đã chọn." },
    { label: "Font lỗi", desc: "Đổi font nhưng chữ không thay đổi hoặc hiển thị sai.", expected: "Font nên thay đổi ngay khi chọn trong Settings." },
    { label: "Mất khi reload", desc: "Cài đặt bị mất sau khi reload trang.", expected: "Cài đặt nên lưu vào localStorage và giữ lại qua các phiên." }
  ] },
  { id: "nav", label: "🧭 Điều hướng", templates: [
    { label: "Phím tắt lỗi", desc: "Nhấn phím tắt nhưng không có tác dụng.", expected: "Phím tắt nên thực hiện đúng chức năng đã gán." },
    { label: "Tab lỗi", desc: "Nhấn tab nhưng không chuyển được hoặc hiển thị sai nội dung.", expected: "Tab nên chuyển mượt mà và hiển thị đúng nội dung." },
    { label: "Sidebar lỗi", desc: "Sidebar không mở được, hoặc nhấn công cụ nhưng không phản hồi.", expected: "Sidebar nên mở/đóng mượt mà, tất cả công cụ nên hoạt động." },
    { label: "Back lỗi", desc: "Nhấn nút quay lại nhưng không quay về trang trước hoặc bị kẹt.", expected: "Nút back nên quay lại route trước đó." }
  ] },
  { id: "storage", label: "💾 Lưu trữ", templates: [
    { label: "Không lưu được", desc: "Điểm / tiến trình / bookmark / cài đặt bị mất sau khi reload.", expected: "Dữ liệu nên lưu vào localStorage và giữ nguyên qua các lần mở." },
    { label: "Bookmark lỗi", desc: "Nhấn đánh dấu (★) nhưng bookmark không lưu hoặc bị mất khi reload.", expected: "Bookmark nên lưu vào localStorage và hiển thị lại đúng khi mở lại." },
    { label: "SRS lỗi", desc: "Hệ thống SRS không cập nhật sau khi trả lời đúng/sai trong game.", expected: "SRS nên tăng/giảm level đúng theo kết quả trả lời." },
    { label: "Import/Export lỗi", desc: "Xuất hoặc nhập dữ liệu báo lỗi hoặc mất dữ liệu.", expected: "Export nên tạo file JSON đầy đủ, import nên khôi phục chính xác." }
  ] },
  { id: "a11y", label: "♿ Trợ năng", templates: [
    { label: "Screen reader", desc: "Screen reader không đọc được nội dung hoặc đọc sai thứ tự.", expected: "Nên có aria-label phù hợp cho tất cả interactive elements." },
    { label: "Contrast lỗi", desc: "Chữ quá mờ, không đọc được trên nền hiện tại.", expected: "Contrast ratio nên đạt WCAG AA (≥4.5:1 cho text thường)." },
    { label: "Touch target nhỏ", desc: "Nút hoặc link quá nhỏ, khó nhấn trên màn hình cảm ứng.", expected: "Touch target nên ≥44x44px theo WCAG guidelines." }
  ] }
];
const ALL_TEMPLATES = TEMPLATE_CATEGORIES.flatMap((c) => c.templates.map((t) => ({ ...t, catId: c.id })));
const SEV_COLORS = { "🔴 Critical": "#ff3355", "🟠 High": "#ff8800", "🟡 Medium": "#ffd700", "🟢 Low": "#00cc88" };
const CATEGORIES = ["TTS/Audio", "Game/Quiz", "UI/Layout", "Data/Content", "Settings", "Navigation", "Save/Load", "Accessibility", "Performance", "Other"];
function BugReporter() {
  const [view, setView] = reactExports.useState("form");
  const [desc, setDesc] = reactExports.useState("");
  const [expected, setExpected] = reactExports.useState("");
  const [steps, setSteps] = reactExports.useState("");
  const [severity, setSeverity] = reactExports.useState("🟠 High");
  const [category, setCategory] = reactExports.useState("Other");
  const [activeTpl, setActiveTpl] = reactExports.useState(-1);
  const [activeCat, setActiveCat] = reactExports.useState(null);
  const [bugs, setBugs] = reactExports.useState(() => _loadBugs());
  const [lastId, setLastId] = reactExports.useState("");
  const [detected, setDetected] = reactExports.useState([]);
  const [screenshot, setScreenshot] = reactExports.useState(null);
  const [showCtx, setShowCtx] = reactExports.useState(false);
  const [showState, setShowState] = reactExports.useState(false);
  const [aiLoading, setAiLoading] = reactExports.useState(false);
  const ctx = reactExports.useRef(_detectCtx());
  const fileInputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const issues = detectIssues();
    setDetected(issues);
    if (issues.length > 0) {
      const descLines = issues.map((iss, i) => `${i + 1}. [${iss.source}] ${iss.description}`).join("\n");
      setDesc(descLines);
      const sevOrder = ["🔴 Critical", "🟠 High", "🟡 Medium", "🟢 Low"];
      const highest = sevOrder.find((s) => issues.some((i) => i.severity === s)) || "🟡 Medium";
      setSeverity(highest);
      setCategory(issues[0].category);
      setExpected(issues[0].expected);
      setAiLoading(true);
      generateExpected(descLines, { route: ctx.current.route, category: issues[0].category }, AI_PROXY_CAPABILITY).then((text) => {
        if (text) setExpected(text);
      }).catch(() => {
      }).finally(() => setAiLoading(false));
    }
    const navFlow = (window._reactNavFlow || []).slice(-15);
    const zustandLog = (window._zustandLog || []).slice(-10);
    const allEvents = [
      ...navFlow.map((n) => ({ t: n.t, dt: n.dt, text: n.a })),
      ...zustandLog.map((z) => ({ t: z.t, dt: z.t - (window._sessionStart || z.t), text: `Store.${z.store}.${z.key} = ${JSON.stringify(z.value).slice(0, 60)}` }))
    ].sort((a, b) => a.t - b.t);
    const lines = [];
    if (allEvents.length > 0) {
      allEvents.forEach((ev, i) => {
        const sec = (ev.dt / 1e3).toFixed(1);
        lines.push(`${i + 1}. [+${sec}s] ${ev.text}`);
      });
    } else {
      lines.push(`1. Route: ${ctx.current.route}`);
    }
    lines.push(`${lines.length + 1}. [Mô tả hành động thực hiện]`);
    lines.push(`${lines.length + 1}. → Lỗi xuất hiện: [mô tả cụ thể]`);
    setSteps(lines.join("\n"));
  }, []);
  function applyTemplate(idx) {
    const tpl = ALL_TEMPLATES[idx];
    setDesc(tpl.desc);
    setExpected(tpl.expected);
    setActiveTpl(idx);
    const catMap = { audio: "TTS/Audio", game: "Game/Quiz", ui: "UI/Layout", data: "Data/Content", settings: "Settings", nav: "Navigation", storage: "Save/Load", a11y: "Accessibility" };
    if (catMap[tpl.catId]) setCategory(catMap[tpl.catId]);
  }
  async function takeScreenshot() {
    try {
      const { default: html2canvas } = await __vitePreload(async () => {
        const { default: html2canvas2 } = await import("./html2canvas.esm-DWZSdXKi.js");
        return { default: html2canvas2 };
      }, true ? [] : void 0, import.meta.url);
      const el = document.querySelector(".n4-app");
      if (!el) return;
      const canvas = await html2canvas(el, {
        ignoreElements: (node) => {
          var _a;
          return (_a = node.hasAttribute) == null ? void 0 : _a.call(node, "data-debug-panel");
        },
        scale: 1,
        logging: false,
        useCORS: true
      });
      setScreenshot(canvas.toDataURL("image/png"));
    } catch (err) {
      console.warn("Screenshot failed:", err);
    }
  }
  function _buildReport() {
    return {
      id: "BUG-" + Date.now(),
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      severity,
      category,
      description: desc.trim(),
      expected: expected.trim(),
      steps: steps.trim(),
      status: "open",
      context: ctx.current,
      detectedIssues: detected,
      screenshot: screenshot || null,
      codeContext: _getCodeContext(ctx.current.route)
    };
  }
  function saveBug() {
    if (!desc.trim()) return;
    const bug = _buildReport();
    const updated = [..._loadBugs(), bug];
    _persistBugs(updated);
    setBugs(updated);
    setLastId(bug.id);
    setView("submitted");
  }
  const [cloudMsg, setCloudMsg] = reactExports.useState(null);
  const [cloudLoading, setCloudLoading] = reactExports.useState(false);
  async function saveBugToCloud() {
    if (!desc.trim()) return;
    const bug = _buildReport();
    const updated = [..._loadBugs(), bug];
    _persistBugs(updated);
    setBugs(updated);
    setLastId(bug.id);
    setCloudLoading(true);
    setCloudMsg(null);
    try {
      await submitBugToCloud(bug);
      setCloudMsg("✅ Đã gửi lên cloud!");
    } catch (e) {
      setCloudMsg("❌ " + e.message);
    } finally {
      setCloudLoading(false);
      setView("submitted");
    }
  }
  function copyJSON(minified) {
    const report = _buildReport();
    const json = minified ? JSON.stringify(report) : JSON.stringify(report, null, 2);
    safeCopy(json);
  }
  function copyAllJSON() {
    const all = _loadBugs();
    safeCopy(JSON.stringify(all, null, 2));
  }
  function copyBugJSON(bug) {
    safeCopy(JSON.stringify(bug, null, 2));
  }
  function downloadJSON() {
    const report = _buildReport();
    report.allSaved = _loadBugs();
    const url = URL.createObjectURL(new Blob([JSON.stringify(report, null, 2)], { type: "application/json" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: `bug-report-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json` });
    a.click();
    URL.revokeObjectURL(url);
  }
  function importJSON(e) {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        let imported = [];
        if (Array.isArray(data)) imported = data;
        else if (data.allSaved && Array.isArray(data.allSaved)) imported = data.allSaved;
        else if (data.id) imported = [data];
        if (imported.length === 0) return;
        const existing = _loadBugs();
        const existingIds = new Set(existing.map((b) => b.id));
        const newBugs = imported.filter((b) => b.id && !existingIds.has(b.id));
        if (newBugs.length > 0) {
          const merged = [...existing, ...newBugs];
          _persistBugs(merged);
          setBugs(merged);
        }
      } catch (e2) {
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }
  function updateStatus(id, status) {
    const updated = _loadBugs().map((b) => b.id === id ? { ...b, status } : b);
    _persistBugs(updated);
    setBugs(updated);
  }
  function deleteBugById(id) {
    const updated = _loadBugs().filter((b) => b.id !== id);
    _persistBugs(updated);
    setBugs(updated);
  }
  const openCount = bugs.filter((b) => b.status === "open").length;
  const field = { width: "100%", background: "var(--n4-bg-secondary)", border: "1px solid var(--n4-border)", borderRadius: 6, color: "var(--n4-text)", padding: "5px 8px", fontFamily: "inherit", fontSize: "0.78rem", boxSizing: "border-box" };
  const lbl = { display: "block", fontSize: "0.68rem", color: "var(--n4-text-muted)", marginBottom: 3, marginTop: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.4px" };
  if (view === "submitted") return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", padding: "20px 8px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2.2rem", marginBottom: 8 }, children: "✅" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 700, marginBottom: 4 }, children: "Đã lưu báo cáo!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.75rem", color: "var(--n4-text-muted)", marginBottom: 14 }, children: [
      "ID: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: { fontFamily: "var(--n4-font-mono)" }, children: lastId })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-btn-sm", onClick: downloadJSON, children: "📥 Tải JSON" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => {
        setDesc("");
        setExpected("");
        setActiveTpl(-1);
        setScreenshot(null);
        setView("form");
      }, children: "+ Báo cáo khác" }),
      openCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setView("list"), children: [
        "📋 ",
        openCount,
        " open"
      ] })
    ] })
  ] });
  if (view === "list") return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, flexWrap: "wrap", gap: 4 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { style: { fontSize: "0.82rem" }, children: [
        "🐛 Báo lỗi (",
        bugs.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: copyAllJSON, title: "Chép toàn bộ báo cáo dưới dạng JSON", children: "📋 Chép tất cả" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: downloadJSON, children: "📤 Xuất" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => {
          var _a;
          return (_a = fileInputRef.current) == null ? void 0 : _a.click();
        }, children: "📥 Nhập" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setView("form"), children: "← Mới" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileInputRef, type: "file", accept: ".json", style: { display: "none" }, onChange: importJSON })
      ] })
    ] }),
    bugs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-muted)", textAlign: "center", padding: 16 }, children: "Chưa có báo lỗi nào." }) : [...bugs].reverse().map((bug) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "7px 10px", marginBottom: 5, background: "var(--n4-bg-secondary)", borderRadius: 6, borderLeft: `3px solid ${SEV_COLORS[bug.severity] || "#888"}`, fontSize: "0.75rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", gap: 4 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontFamily: "var(--n4-font-mono)", color: "var(--n4-text-muted)", marginRight: 5 }, children: bug.id.slice(-10) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 600 }, children: [
            bug.description.slice(0, 70),
            bug.description.length > 70 ? "…" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 3, flexShrink: 0 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { padding: "1px 5px" }, onClick: () => copyBugJSON(bug), title: "Copy", children: "📋" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: bug.status, onChange: (e) => updateStatus(bug.id, e.target.value), style: { ...field, width: "auto", padding: "1px 4px", marginTop: 0 }, children: ["open", "in-progress", "resolved", "wontfix"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s }, s)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { padding: "1px 5px", color: "var(--n4-error, #f55)" }, onClick: () => deleteBugById(bug.id), children: "✕" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "var(--n4-text-muted)", marginTop: 2 }, children: [
        bug.severity,
        " · ",
        bug.category,
        " · ",
        bug.timestamp.slice(0, 16).replace("T", " ")
      ] })
    ] }, bug.id))
  ] });
  const filteredTemplates = activeCat ? ALL_TEMPLATES.filter((t) => t.catId === activeCat) : ALL_TEMPLATES;
  const detectedCats = new Set(detected.map((d) => {
    const catMap = { "TTS/Audio": "audio", "Game/Quiz": "game", "UI/Layout": "ui", "Data/Content": "data", "Settings": "settings", "Navigation": "nav", "Save/Load": "storage", "Accessibility": "a11y" };
    return catMap[d.category] || null;
  }).filter(Boolean));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.8rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "6px 10px", marginBottom: 6, borderRadius: 6, background: detected.length > 0 ? "rgba(255,50,50,0.08)" : "rgba(0,200,100,0.08)", borderLeft: `3px solid ${detected.length > 0 ? "#ff3355" : "#00cc88"}`, display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 700, fontSize: "0.78rem" }, children: detected.length > 0 ? `⚡ ${detected.length} lỗi phát hiện` : "✅ Không tìm thấy lỗi" }),
      detected.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.65rem", color: "var(--n4-text-muted)" }, children: detected.map((d) => d.source).filter((v, i, a) => a.indexOf(v) === i).join(", ") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 6 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { fontSize: "0.65rem", padding: "2px 6px" }, onClick: () => setShowCtx(!showCtx), children: [
        showCtx ? "▼" : "▶",
        " Context"
      ] }),
      showCtx && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 10px", padding: "6px 8px", background: "var(--n4-bg-secondary)", borderRadius: 6, fontSize: "0.68rem", marginTop: 4 }, children: [
        ["📍 Route", ctx.current.route],
        ["🌐 Browser", `${ctx.current.browser} / ${ctx.current.os}`],
        ["📐 Màn hình", ctx.current.screen],
        ["🧠 Memory", ctx.current.memory],
        ["💾 Storage", ctx.current.storageTotal],
        ["🌐 Mạng", ctx.current.network],
        ["🔗 Overlays", ctx.current.activeOverlays],
        ["💡 DOM", `${ctx.current.domCount} nodes`],
        ["📁 Code", ctx.current.codeContext]
      ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 4, overflow: "hidden" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "var(--n4-text-muted)", flexShrink: 0 }, children: [
          k,
          ":"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: v })
      ] }, k)) })
    ] }),
    ctx.current.recentErrors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "4px 8px", background: "rgba(255,50,50,0.08)", borderRadius: 4, marginBottom: 6, fontSize: "0.68rem", borderLeft: "3px solid #ff3355" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
        "❗ ",
        ctx.current.recentErrors.length,
        " console error(s)"
      ] }),
      ctx.current.recentErrors.slice(-3).map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "var(--n4-text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: [
        (e.time || "").slice(11, 19),
        " ",
        e.msg
      ] }, i))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 6, display: "flex", gap: 6, alignItems: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { fontSize: "0.7rem" }, onClick: takeScreenshot, children: "📸 Chụp màn hình" }),
      screenshot && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", display: "inline-block" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => window.open(screenshot, "_blank"), "aria-label": "Mở ảnh chụp màn hình", style: { border: 0, padding: 0, background: "transparent" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: screenshot, alt: "Ảnh chụp màn hình gỡ lỗi", style: { height: 40, borderRadius: 4, border: "1px solid var(--n4-border)", cursor: "pointer" } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setScreenshot(null), style: { position: "absolute", top: -4, right: -4, background: "#f55", color: "#fff", border: "none", borderRadius: "50%", width: 14, height: 14, fontSize: "0.55rem", cursor: "pointer", lineHeight: "14px", padding: 0 }, children: "✕" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "debug-severity", style: lbl, children: "Mức độ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { id: "debug-severity", value: severity, onChange: (e) => setSeverity(e.target.value), style: field, children: Object.keys(SEV_COLORS).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s }, s)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "debug-category", style: lbl, children: "Loại lỗi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { id: "debug-category", value: category, onChange: (e) => setCategory(e.target.value), style: field, children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: c }, c)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: lbl, children: "Mẫu nhanh" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: 3, marginBottom: 4 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${activeCat === null ? "n4-btn-primary" : "n4-btn-ghost"}`, style: { fontSize: "0.6rem", padding: "1px 5px" }, onClick: () => setActiveCat(null), children: "Tất cả" }),
      TEMPLATE_CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-btn n4-btn-sm ${activeCat === c.id ? "n4-btn-primary" : "n4-btn-ghost"}`,
          style: { fontSize: "0.6rem", padding: "1px 5px", outline: detectedCats.has(c.id) ? "2px solid #ff3355" : "none" },
          onClick: () => setActiveCat(activeCat === c.id ? null : c.id),
          children: c.label
        },
        c.id
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 3, marginBottom: 2 }, children: filteredTemplates.map((t, i) => {
      const globalIdx = ALL_TEMPLATES.indexOf(t);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-btn n4-btn-sm ${activeTpl === globalIdx ? "n4-btn-primary" : "n4-btn-ghost"}`,
          style: { fontSize: "0.65rem", padding: "2px 6px" },
          onClick: () => applyTemplate(globalIdx),
          children: t.label
        },
        globalIdx
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "debug-description", style: lbl, children: [
      "Mô tả lỗi ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-error, #f55)" }, children: "*" }),
      detected.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-primary)", fontWeight: 400, marginLeft: 6 }, children: "⚡ tự động từ auto-detect" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        id: "debug-description",
        value: desc,
        onChange: (e) => setDesc(e.target.value),
        rows: 3,
        placeholder: "Mô tả chính xác điều gì đang xảy ra sai...",
        style: { ...field, resize: "vertical" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "debug-expected", style: lbl, children: [
      "Kết quả mong đợi",
      aiLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-primary)", fontWeight: 400, marginLeft: 6 }, children: "⏳ AI đang phân tích..." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        id: "debug-expected",
        value: expected,
        onChange: (e) => setExpected(e.target.value),
        rows: 2,
        placeholder: "Điều gì nên xảy ra thay thế...",
        style: { ...field, resize: "vertical" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-ghost n4-btn-sm",
        style: { width: "100%", marginTop: 4, fontSize: "0.72rem", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 },
        disabled: aiLoading,
        onClick: async () => {
          setAiLoading(true);
          try {
            const report = _buildReport();
            const result = await analyzeFullReport(report, AI_PROXY_CAPABILITY);
            if (result.description) setDesc(result.description);
            if (result.expected) setExpected(result.expected);
            if (result.steps) setSteps((prev) => prev ? prev + "\n\n--- AI ---\n" + result.steps : result.steps);
          } catch (err) {
            console.warn("AI analyze failed:", err);
          } finally {
            setAiLoading(false);
          }
        },
        children: aiLoading ? "⏳ Đang phân tích..." : "🤖 AI Phân tích"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "debug-steps", style: lbl, children: [
      "Các bước tái hiện",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-primary)", fontWeight: 400, marginLeft: 6 }, children: "⚡ nav + store mutations" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        id: "debug-steps",
        value: steps,
        onChange: (e) => setSteps(e.target.value),
        rows: 5,
        style: { ...field, resize: "vertical", fontFamily: "var(--n4-font-mono)", fontSize: "0.7rem" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 6 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { fontSize: "0.65rem", padding: "2px 6px" }, onClick: () => setShowState(!showState), children: [
        showState ? "▼" : "▶",
        " Zustand State Snapshot"
      ] }),
      showState && /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { style: { ...field, maxHeight: 120, overflow: "auto", fontSize: "0.6rem", fontFamily: "var(--n4-font-mono)", marginTop: 4, whiteSpace: "pre-wrap", wordBreak: "break-all" }, children: JSON.stringify(ctx.current.storeSnapshot, null, 2) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-btn-sm", style: { flex: 1 }, onClick: saveBug, disabled: !desc.trim(), children: "📨 Lưu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-sm", style: { flex: 1, background: "var(--n4-accent, #00f0ff)", color: "#000" }, onClick: saveBugToCloud, disabled: !desc.trim() || cloudLoading, children: [
        cloudLoading ? "⏳" : "☁️",
        " Gửi Cloud"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => copyJSON(false), disabled: !desc.trim(), title: "Copy pretty JSON", children: "📋 JSON" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => copyJSON(true), disabled: !desc.trim(), title: "Copy minified JSON", children: "📋 Min" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: downloadJSON, disabled: !desc.trim(), children: "📥 File" }),
      openCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setView("list"), children: [
        "📋 ",
        openCount
      ] })
    ] })
  ] });
}
function ContentErrorTab() {
  const user = useAppStore((s) => s.user);
  const [form, setForm] = reactExports.useState({ itemType: "vocab", itemId: "", description: "" });
  const [status, setStatus] = reactExports.useState(null);
  const [reports, setReports] = reactExports.useState([]);
  const [showHistory, setShowHistory] = reactExports.useState(false);
  const loadReports = reactExports.useCallback(async () => {
    if (!(user == null ? void 0 : user.id)) return;
    try {
      const d = await getMyReports(user.id);
      setReports(d || []);
    } catch (e) {
      setReports([]);
    }
  }, [user == null ? void 0 : user.id]);
  reactExports.useEffect(() => {
    if (showHistory) loadReports();
  }, [showHistory, loadReports]);
  const handleSubmit = async () => {
    if (!(user == null ? void 0 : user.id)) {
      setStatus("login");
      return;
    }
    if (!form.description.trim()) return;
    setStatus("sending");
    try {
      await reportContentError(user.id, {
        itemType: form.itemType,
        itemId: form.itemId || null,
        description: form.description
      });
      setStatus("sent");
      setForm({ itemType: "vocab", itemId: "", description: "" });
      setTimeout(() => setStatus(null), 3e3);
    } catch (e) {
      console.error("[ContentError]", e);
      setStatus("error");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "⚠️ Báo lỗi nội dung" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => setShowHistory((h) => !h), children: showHistory ? "✏️ Báo lỗi mới" : "📋 Lịch sử" })
    ] }),
    !showHistory ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
      !user && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-warning, #f59e0b)", marginBottom: 4 }, children: "⚠️ Vui lòng đăng nhập để gửi báo cáo." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", value: form.itemType, onChange: (e) => setForm((p) => ({ ...p, itemType: e.target.value })), style: { fontSize: "0.82rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "vocab", children: "Từ vựng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "kanji", children: "Kanji" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "grammar", children: "Ngữ pháp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "minna", children: "Minna" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", placeholder: "ID mục (tùy chọn)", value: form.itemId, onChange: (e) => setForm((p) => ({ ...p, itemId: e.target.value })), style: { flex: 1, fontSize: "0.82rem" } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          className: "n4-input",
          placeholder: "Mô tả lỗi... (VD: 'Từ 食べる romaji sai, phải là taberu')",
          rows: 3,
          value: form.description,
          onChange: (e) => setForm((p) => ({ ...p, description: e.target.value })),
          style: { width: "100%", resize: "vertical", fontSize: "0.82rem" }
        }
      ),
      status === "sent" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#22c55e" }, children: "✅ Đã gửi! Cảm ơn bạn." }),
      status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#ef4444" }, children: "❌ Lỗi khi gửi. Kiểm tra đăng nhập và thử lại." }),
      status === "login" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#f59e0b" }, children: "⚠️ Vui lòng đăng nhập trước." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: handleSubmit, disabled: status === "sending", style: { alignSelf: "flex-start" }, children: status === "sending" ? "⏳ Đang gửi..." : "📤 Gửi báo cáo" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
      reports.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-muted)", textAlign: "center", padding: 16 }, children: "Bạn chưa gửi báo cáo nào." }),
      reports.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "6px 8px", background: "var(--n4-surface)", borderRadius: 6, fontSize: "0.8rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 600 }, children: [
            r.item_type,
            " ",
            r.item_id ? `#${r.item_id}` : ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { opacity: 0.6 }, children: [
            r.status,
            " · ",
            new Date(r.created_at).toLocaleDateString("vi")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 2, opacity: 0.85 }, children: r.description })
      ] }, r.id))
    ] })
  ] });
}
const TABS = [
  { id: "state", label: "📊 State", Component: StateViewer },
  { id: "perf", label: "⚡ Perf", Component: PerfMonitor },
  { id: "console", label: "📝 Console", Component: ConsoleLog },
  { id: "actions", label: "🔧 Actions", Component: ActionsTab },
  { id: "bug", label: "🐛 Bug", Component: BugReporter },
  { id: "content-error", label: "⚠️ Lỗi ND", Component: ContentErrorTab }
];
function DebugPanel({ onClose }) {
  var _a;
  const [tab, setTab] = reactExports.useState("state");
  const panelRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose == null ? void 0 : onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);
  const ActiveTab = ((_a = TABS.find((t) => t.id === tab)) == null ? void 0 : _a.Component) || StateViewer;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-debug-panel": true,
      style: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "45vh",
        minHeight: 280,
        background: "var(--n4-bg-primary)",
        borderTop: "2px solid var(--n4-primary)",
        zIndex: 10001,
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.4)"
      },
      ref: panelRef,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "6px 12px",
          background: "var(--n4-surface)",
          borderBottom: "1px solid var(--n4-border)",
          flexShrink: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 4 }, children: TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `n4-btn n4-btn-sm ${tab === t.id ? "n4-btn-primary" : "n4-btn-ghost"}`,
              onClick: () => setTab(t.id),
              style: { fontSize: "0.75rem", padding: "3px 8px" },
              children: t.label
            },
            t.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: onClose, style: { padding: "3px 8px" }, children: "✕" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1, overflow: "auto", padding: 12, minHeight: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveTab, {}) })
      ]
    }
  );
}
export {
  DebugPanel as default
};
