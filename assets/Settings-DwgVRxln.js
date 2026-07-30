import { r as reactExports, j as jsxRuntimeExports, u as useShallow } from "./vendor-react-BYxMSDiB.js";
import { s as safeGetItem, S as STORAGE_KEYS, ap as safeGetObjectItem, d as safeSetItem, Z as safeSetObjectItem, R as resetAppStoreToDefaults, a as useAppStore, a1 as useManagedTimeout, aq as THEME_FAMILIES, ar as getThemeVariant, as as getJapaneseVoices, at as getVietnameseVoices, au as getPreferredVoiceName, av as setPreferredVoice, f as speakJP, e as speakVi, u as useLearningStore, aw as resolveThemeMode } from "./feature-3d-jK3b4Iv-.js";
import { x as startAutoBackup, y as signInWithGoogle, z as logoutAndClearAccount, s as syncNow, A as stopAutoBackup, c as getUserErrorMessage, B as resetAllAndSync } from "./index-CjITGIof.js";
import { B as useAIKey } from "./feature-3d-hud-Dp6hMoyV.js";
import { I as IOSGroupedList, a as IOSGroupedRow } from "./IOSGroupedList-CaxwLMfO.js";
import { S as SettingsHeroScene } from "./feature-3d-scenery-C3eSpuWG.js";
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-icons-DHCyxOF-.js";
import "./vendor-supabase-DTEAj5J1.js";
const ACCENT_COLORS = [
  { label: "Lam sáng", value: "#00f0ff" },
  { label: "Hồng tím", value: "#ff00aa" },
  { label: "Vàng", value: "#ffd700" },
  { label: "Xanh ngọc", value: "#00ff88" },
  { label: "Đỏ", value: "#ff3355" },
  { label: "Tím", value: "#aa66ff" },
  { label: "Hoa đào", value: "#ff6b9d" },
  { label: "Biển xanh", value: "#0088cc" },
  { label: "Hoàng hôn", value: "#ff6622" }
];
const THEME_MODE_LABELS = { dark: "🌙 Ban đêm", light: "☀️ Ban ngày" };
const DENSITIES = [
  { label: "Gọn", value: "compact" },
  { label: "Thoải mái", value: "comfortable" },
  { label: "Rộng", value: "spacious" }
];
const DIFFICULTIES = [
  { label: "😊 Dễ", value: "easy", desc: "Nhiều gợi ý, thời gian dài" },
  { label: "📚 Bình thường", value: "normal", desc: "Cân bằng học & thử thách" },
  { label: "🔥 Khó", value: "hard", desc: "Ít gợi ý, thời gian ngắn" },
  { label: "📋 JLPT", value: "jlpt", desc: "Mô phỏng điều kiện thi thật" }
];
const KANJI_FONTS = [
  { label: "Mặc định", value: "default" },
  { label: "Noto Serif JP", value: "'Noto Serif JP', serif" },
  { label: "Serif", value: "serif" },
  { label: "Sans-serif", value: "sans-serif" }
];
const KANJI_WEIGHTS = [
  { label: "Nhẹ", value: "400" },
  { label: "Vừa", value: "500" },
  { label: "Đậm", value: "700" },
  { label: "Rất đậm", value: "900" }
];
const CARD_LAYOUTS = [
  { label: "Lưới", value: "grid" },
  { label: "Danh sách", value: "list" },
  { label: "Gọn", value: "compact" }
];
const EXAMPLE_MODES = [
  { label: "Cùng dòng", value: "inline" },
  { label: "Tách khối", value: "block" },
  { label: "Ẩn", value: "hidden" }
];
const MINNA_VIEWS = [
  { label: "Mặc định", value: "default" },
  { label: "Thu gọn", value: "compact" },
  { label: "Chi tiết", value: "expanded" }
];
const COMPACT_ITEMS_SET = /* @__PURE__ */ new Set([
  "Hiện Furigana",
  "Hiện Romaji",
  "Tự động chuyển câu",
  "Tự động phát âm",
  "🔔 Hiệu ứng âm UI",
  "✅ Âm trả lời đúng",
  "❌ Âm trả lời sai",
  "🎯 Chế độ tập trung",
  "Giảm chuyển động",
  "Tương phản cao",
  "🔴 Mù màu đỏ (Protanopia)",
  "🟢 Mù màu xanh (Deuteranopia)",
  "🔵 Mù màu xanh dương (Tritanopia)",
  "🔤 Font Dyslexia",
  "👆 Nút bấm lớn",
  "👉 Vuốt lật thẻ",
  "👇 Vuốt đóng modal",
  "Chế độ gỡ lỗi",
  "📚 Hiện Công Cụ Học",
  "🧩 Hiện Tính Năng Mở Rộng",
  "📖 Hiện Công Cụ Giai Đoạn 2",
  "🧠 Hiện Công Cụ Giai Đoạn 3",
  "Chế độ sáng/tối",
  "Mật độ hiển thị",
  "🔤 Cỡ chữ toàn cục",
  "🃏 Kiểu hiển thị thẻ",
  "📍 Vị trí thanh điều hướng",
  "🎮 Số cột Games Hub",
  "📚 Chế độ xem Minna",
  "📖 Hiển thị ví dụ",
  "Tốc độ TTS",
  "Mục tiêu XP/ngày",
  "Từ mới/ngày",
  "Số câu hỏi mặc định",
  "📖 Bắt đầu từ bài",
  "📖 Kết thúc ở bài",
  "📏 Cỡ chữ Kanji",
  "📐 Cỡ chữ tab Kanji",
  "📐 Cỡ chữ tab Từ vựng",
  "📐 Cỡ chữ tab Ngữ pháp",
  "📻 Tốc độ Radio JP",
  "📻 Tốc độ Radio VI",
  "🇯🇵 Giọng tiếng Nhật",
  "🇻🇳 Giọng tiếng Việt",
  "🖋️ Font chữ Kanji",
  "🖊️ Độ đậm Kanji"
]);
const POPULAR_ITEMS_SET = /* @__PURE__ */ new Set([
  "Hiện Furigana",
  "Hiện Romaji",
  "Chế độ sáng/tối",
  "Độ khó",
  "Tốc độ TTS",
  "🔤 Cỡ chữ toàn cục",
  "Tự động phát âm",
  "🎯 Chế độ tập trung"
]);
const TABS = [
  { id: "display", icon: "🎨", label: "Hiển thị" },
  { id: "games", icon: "🎮", label: "Học tập" },
  { id: "audio", icon: "🔊", label: "Âm thanh" },
  { id: "accessibility", icon: "♿", label: "Trợ năng" },
  { id: "advanced", icon: "🔧", label: "Nâng cao" },
  { id: "online", icon: "☁️", label: "Dữ liệu" }
];
const GROUP_LABELS = {
  popular: "⭐ Cài đặt phổ biến",
  display: "🎨 Thiết lập hiển thị",
  games: "🎮 Tiến trình & Chế độ học tập",
  audio: "🔊 Âm thanh & Radio",
  accessibility: "♿ Chế độ Trợ năng",
  advanced: "🔧 Công cụ & Nâng cao",
  online: "☁️ Sao lưu & Đồng bộ đám mây"
};
const SECTIONS = {
  // display
  theme: { header: "🎨 Giao diện & Chủ đề", footer: "Chọn chế độ sáng/tối, bộ chủ đề màu sắc và màu nhấn cho ứng dụng." },
  gfx: { header: "✨ Hiệu ứng & Hiệu năng", footer: "Tăng giảm chất lượng đồ họa và hiệu ứng hạt khi chạm màn hình." },
  layout: { header: "📱 Bố cục & Mật độ hiển thị", footer: "Tùy chỉnh khoảng cách các phần tử, kiểu hiển thị thẻ và các thanh điều hướng." },
  japanese: { header: "🇯🇵 Hiển thị tiếng Nhật", footer: "Cài đặt cách hiển thị bảng chữ cái Furigana và Romaji." },
  font: { header: "🖋️ Font & Cỡ chữ Kanji", footer: "Tùy biến kiểu chữ, độ đậm nhạt và kích thước chữ Kanji, Từ vựng, Ngữ pháp." },
  // games
  study_mode: { header: "🎯 Chế độ học tập", footer: "Chọn độ khó phù hợp với tiến trình học tập của bạn." },
  goals: { header: "📈 Chỉ tiêu & Mục tiêu ngày", footer: "Đặt chỉ tiêu điểm kinh nghiệm (XP) và số từ học mới mỗi ngày." },
  quiz_options: { header: "📝 Thiết lập trắc nghiệm", footer: "Cài đặt hành vi chuyển câu và số câu hỏi mặc định trong mỗi bài luyện tập." },
  minna_range: { header: "📖 Giới hạn bài học Minna", footer: "Giới hạn phạm vi bài học Minna no Nihongo đang học." },
  // audio
  tts_options: { header: "🗣️ Đọc thoại & TTS", footer: "Cấu hình giọng đọc tự động và tốc độ của hệ thống phát âm." },
  voices: { header: "👥 Chọn giọng đọc", footer: "Thay đổi giọng đọc của AI tiếng Nhật và tiếng Việt." },
  sound_fx: { header: "🔔 Hiệu ứng âm thanh", footer: "Bật tắt âm thanh phản hồi UI và âm báo kết quả đúng/sai." },
  radio_options: { header: "📻 Radio tin tức N4", footer: "Cấu hình tốc độ phát thanh tin tức đài tiếng Nhật và thuyết minh tiếng Việt." },
  // accessibility
  focus: { header: "🎯 Tập trung & Trải nghiệm", footer: "Bật chế độ tập trung giảm xao nhãng hoặc tắt các chuyển động động." },
  visual_aid: { header: "♿ Hỗ trợ hiển thị", footer: "Hỗ trợ người khiếm khuyết thị lực, mù màu hoặc font chữ Dyslexia." },
  gestures: { header: "👆 Tương tác & Cử chỉ", footer: "Tăng kích thước phím bấm và cấu hình vuốt nhanh trên màn hình." },
  // advanced
  developer: { header: "🔧 Công cụ Nhà phát triển", footer: "Bật bảng gỡ lỗi (Debug panel) của hệ thống." },
  sidebar: { header: "📂 Phân hệ Thanh công cụ bên (Sidebar)", footer: "Chọn các bộ công cụ hiển thị ở thanh biên để tối ưu hóa không gian làm việc." },
  shortcuts: { header: "⌨️ Phím tắt nhanh", footer: "Tham khảo danh sách phím tắt trên máy tính để thao tác nhanh hơn." },
  // online
  cloud: { header: "☁️ Đồng bộ đám mây", footer: "Đăng nhập tài khoản Google để tự động sao lưu dữ liệu lên đám mây." },
  backup: { header: "📦 Sao lưu file Local", footer: "Tải về máy file sao lưu thủ công hoặc nạp dữ liệu từ file backup dạng JSON." },
  stats: { header: "📊 Dữ liệu hiện tại", footer: "Xem thống kê về XP, cấp độ và số lượng từ vựng đang quản lý." },
  reset: { header: "⚠️ Reset & Xóa dữ liệu", footer: "Khôi phục các cài đặt ban đầu hoặc xóa sạch tiến trình học tập (hành động không thể hoàn tác)." }
};
const TAB_SECTIONS = {
  display: ["theme", "gfx", "layout", "japanese", "font"],
  games: ["study_mode", "goals", "quiz_options", "minna_range"],
  audio: ["tts_options", "voices", "sound_fx", "radio_options"],
  accessibility: ["focus", "visual_aid", "gestures"],
  advanced: ["developer", "sidebar", "shortcuts"],
  online: ["cloud", "backup", "stats", "reset"]
};
const LEGACY_IMPORT_KEYS = [
  "n4-accent",
  "n4-font-jp",
  STORAGE_KEYS.TTS_RATE,
  STORAGE_KEYS.AUTO_TTS,
  STORAGE_KEYS.SELECTION_POPUP,
  STORAGE_KEYS.START_TAB,
  STORAGE_KEYS.COMPACT,
  STORAGE_KEYS.AUTO_COLLAPSE,
  STORAGE_KEYS.FURIGANA,
  STORAGE_KEYS.ROMAJI
];
function buildSettingsBackupPayload(now = /* @__PURE__ */ new Date()) {
  let app = {};
  let learning = {};
  let worldGameplay = {};
  let legacy = {};
  try {
    app = JSON.parse(safeGetItem(STORAGE_KEYS.APP_STORE) || "{}");
  } catch (e) {
  }
  try {
    learning = JSON.parse(safeGetItem(STORAGE_KEYS.LEARNING_STORE) || "{}");
  } catch (e) {
  }
  try {
    worldGameplay = JSON.parse(safeGetItem(STORAGE_KEYS.WORLD_GAMEPLAY_V4) || "{}");
  } catch (e) {
  }
  try {
    legacy = safeGetObjectItem(STORAGE_KEYS.BOOKMARKS);
  } catch (e) {
  }
  return {
    app,
    learning,
    worldGameplay,
    legacy,
    exportedAt: now.toISOString()
  };
}
function downloadSettingsBackupFile(data, { documentRef = document, urlApi = URL, now = /* @__PURE__ */ new Date() } = {}) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const anchor = documentRef.createElement("a");
  anchor.href = urlApi.createObjectURL(blob);
  anchor.download = `n4-backup-${now.toISOString().slice(0, 10)}.json`;
  anchor.click();
  urlApi.revokeObjectURL(anchor.href);
  return anchor.download;
}
function applyImportedBackupData(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return { status: "invalid" };
  }
  if (Object.prototype.hasOwnProperty.call(data, "app") || Object.prototype.hasOwnProperty.call(data, "learning") || Object.prototype.hasOwnProperty.call(data, "worldGameplay")) {
    if (data.app) safeSetItem(STORAGE_KEYS.APP_STORE, JSON.stringify(data.app));
    if (data.learning) safeSetItem(STORAGE_KEYS.LEARNING_STORE, JSON.stringify(data.learning));
    if (data.worldGameplay) {
      safeSetItem(STORAGE_KEYS.WORLD_GAMEPLAY_V4, JSON.stringify(data.worldGameplay));
    }
    return { status: "react" };
  }
  let applied = false;
  if (data["n4-bm"] && typeof data["n4-bm"] === "object" && !Array.isArray(data["n4-bm"])) {
    safeSetObjectItem(STORAGE_KEYS.BOOKMARKS, data["n4-bm"]);
    applied = true;
  }
  if (data["n4-srs"] && typeof data["n4-srs"] === "object" && !Array.isArray(data["n4-srs"])) {
    safeSetObjectItem(STORAGE_KEYS.SRS, data["n4-srs"]);
    applied = true;
  }
  if (typeof data["n4-theme"] === "string") {
    safeSetItem(STORAGE_KEYS.THEME, data["n4-theme"]);
    applied = true;
  }
  if (data[STORAGE_KEYS.FONT_SIZE_BASE] != null) {
    safeSetItem(STORAGE_KEYS.FONT_SIZE_BASE, String(data[STORAGE_KEYS.FONT_SIZE_BASE]));
    applied = true;
  }
  for (const key of LEGACY_IMPORT_KEYS) {
    if (data[key] === void 0) continue;
    safeSetItem(key, typeof data[key] === "string" ? data[key] : JSON.stringify(data[key]));
    applied = true;
  }
  return { status: applied ? "legacy" : "invalid" };
}
function resetSettingsToDefaults(store) {
  resetAppStoreToDefaults(store);
}
function formatTimeSince(iso) {
  if (!iso) return null;
  const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 6e4);
  if (mins < 1) return "vừa xong";
  if (mins < 60) return mins + " phút trước";
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return hrs + " giờ trước";
  return Math.floor(hrs / 24) + " ngày trước";
}
function formatInterval(ms) {
  if (ms < 6e4) return Math.round(ms / 1e3) + "s";
  return Math.round(ms / 6e4) + " phút";
}
function AuthAvatar({ user, size = 28 }) {
  if (user == null ? void 0 : user.avatar) return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user.avatar, alt: "", className: "n4-auth-avatar", referrerPolicy: "no-referrer", style: { width: size, height: size, borderRadius: "50%" } });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: size }, children: "👤" });
}
function AuthButton({ compact = false }) {
  const user = useAppStore((s) => s.user);
  const lastSyncAt = useAppStore((s) => s.lastSyncAt);
  const autoBackupEnabled = useAppStore((s) => s.autoBackupEnabled);
  const setAutoBackupEnabled = useAppStore((s) => s.setAutoBackupEnabled);
  const syncInterval = useAppStore((s) => s.syncInterval) || 5e3;
  const [loadingOp, setLoadingOp] = reactExports.useState(null);
  const [syncMsg, setSyncMsg] = reactExports.useState(null);
  const syncMsgTimerRef = reactExports.useRef(null);
  const loading = loadingOp !== null;
  const { scheduleTimeout, clearManagedTimeout } = useManagedTimeout();
  const scheduleSyncMsgClear = reactExports.useCallback((delay = 2500) => {
    clearManagedTimeout(syncMsgTimerRef.current);
    syncMsgTimerRef.current = scheduleTimeout(() => {
      setSyncMsg(null);
      syncMsgTimerRef.current = null;
    }, delay);
  }, [clearManagedTimeout, scheduleTimeout]);
  reactExports.useEffect(() => {
    if (!user) {
      stopAutoBackup();
      if (autoBackupEnabled) setAutoBackupEnabled(false);
    }
  }, [user, autoBackupEnabled, setAutoBackupEnabled]);
  reactExports.useEffect(() => {
    if (!user) return;
    if (!autoBackupEnabled) {
      stopAutoBackup();
      return;
    }
    startAutoBackup(syncInterval);
  }, [autoBackupEnabled, syncInterval, user]);
  const handleLogin = reactExports.useCallback(async () => {
    setLoadingOp("login");
    try {
      await signInWithGoogle();
    } catch (e) {
      console.error("Login failed:", e);
    } finally {
      setLoadingOp(null);
    }
  }, []);
  const handleLogout = reactExports.useCallback(async () => {
    setLoadingOp("logout");
    try {
      await logoutAndClearAccount();
    } catch (e) {
      console.error("Logout failed:", e);
    } finally {
      setLoadingOp(null);
    }
  }, []);
  const handleSyncNow = reactExports.useCallback(async () => {
    if (loading || !user) return;
    setLoadingOp("sync");
    setSyncMsg(null);
    try {
      const result = await syncNow();
      setSyncMsg((result == null ? void 0 : result.message) || "Đồng bộ thành công!");
      scheduleSyncMsgClear((result == null ? void 0 : result.status) === "success" ? 2500 : 3500);
    } catch (error) {
      setSyncMsg("❌ " + ((error == null ? void 0 : error.message) || String(error)));
      scheduleSyncMsgClear(3500);
    } finally {
      setLoadingOp(null);
    }
  }, [loading, scheduleSyncMsgClear, user]);
  const toggleAuto = reactExports.useCallback(() => {
    if (loading) return;
    setSyncMsg(null);
    if (autoBackupEnabled) {
      stopAutoBackup();
      setAutoBackupEnabled(false);
      setSyncMsg("⏸️ Tự động đồng bộ: Tắt");
      scheduleSyncMsgClear(2500);
      return;
    }
    startAutoBackup(syncInterval);
    setAutoBackupEnabled(true);
    setSyncMsg("▶️ Tự động đồng bộ: Bật (" + formatInterval(syncInterval) + ")");
    scheduleSyncMsgClear(2500);
  }, [loading, autoBackupEnabled, scheduleSyncMsgClear, setAutoBackupEnabled, syncInterval]);
  const timeSince = formatTimeSince(lastSyncAt);
  if (compact) {
    if (!user) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "sa-btn",
          onClick: handleLogin,
          disabled: loading,
          title: "Đăng nhập Google để đồng bộ",
          style: { gridColumn: "1 / -1" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-icon", children: loadingOp === "login" ? "⏳" : "🔑" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-label", children: loadingOp === "login" ? "Đang..." : "Đăng nhập Google" })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `sa-btn ${loadingOp === "sync" ? "sa-active" : ""}`,
          onClick: handleSyncNow,
          disabled: loading,
          title: timeSince ? `Đồng bộ ngay · Lần cuối ${timeSince}` : "Đồng bộ ngay",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-icon", children: loadingOp === "sync" ? "⏳" : "☁️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-label", children: "Đồng bộ" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `sa-btn ${autoBackupEnabled ? "sa-active" : ""}`,
          onClick: toggleAuto,
          disabled: loading,
          title: `Tự động đồng bộ mỗi ${formatInterval(syncInterval)}${timeSince ? ` · ${timeSince}` : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-icon", children: autoBackupEnabled ? "⏸️" : "🔁" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-label", children: "Tự động đồng bộ" })
          ]
        }
      ),
      syncMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { gridColumn: "1 / -1", fontSize: 12, textAlign: "center", opacity: syncMsg.startsWith("❌") ? 0.95 : 0.85 }, children: syncMsg })
    ] });
  }
  if (!user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-auth-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-sm n4-btn-primary",
        onClick: handleLogin,
        disabled: loading,
        children: loading ? "⏳ Đang xử lý..." : "🔑 Đăng nhập Google"
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-auth-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-auth-user", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "relative", display: "inline-flex" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthAvatar, { user }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-auth-info", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-auth-name", children: user.name || user.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-auth-email", children: user.email })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-auth-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-btn n4-btn-sm ${loadingOp === "sync" ? "n4-btn-primary" : "n4-btn-ghost"}`,
          onClick: handleSyncNow,
          disabled: loading,
          title: timeSince ? `Đồng bộ ngay · Lần cuối ${timeSince}` : "Đồng bộ ngay",
          children: loadingOp === "sync" ? "⏳ Đang đồng bộ..." : "☁️ Đồng bộ ngay"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-btn n4-btn-sm ${autoBackupEnabled ? "n4-btn-primary" : "n4-btn-ghost"}`,
          onClick: toggleAuto,
          disabled: loading,
          title: `Tự động đồng bộ mỗi ${formatInterval(syncInterval)}${timeSince ? ` · ${timeSince}` : ""}`,
          children: autoBackupEnabled ? "⏸️ Tự động đồng bộ: BẬT" : "🔁 Tự động đồng bộ: TẮT"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-btn n4-btn-sm n4-btn-ghost",
          onClick: handleLogout,
          disabled: loading,
          children: "🚪 Đăng xuất"
        }
      )
    ] }),
    timeSince && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-auth-sync-time", children: [
      "Lần cuối: ",
      timeSince
    ] }),
    syncMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-auth-sync-msg ${syncMsg.startsWith("❌") ? "error" : "success"}`, children: syncMsg })
  ] });
}
function AIStatusBadge() {
  const { hasKey, provider, isLoggedIn } = useAIKey();
  if (!isLoggedIn) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge", style: { background: "color-mix(in srgb, var(--n4-text-muted) 15%, transparent)", color: "var(--n4-text-muted)" }, children: "⚪ Chưa đăng nhập" });
  }
  if (hasKey) {
    const resolvedProvider = provider;
    const name = resolvedProvider.charAt(0).toUpperCase() + resolvedProvider.slice(1);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-badge", style: { background: "color-mix(in srgb, var(--n4-neon-green) 15%, transparent)", color: "var(--n4-neon-green)" }, children: [
      "✅ ",
      name,
      " — Sẵn sàng"
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge", style: { background: "color-mix(in srgb, var(--n4-neon-red) 15%, transparent)", color: "var(--n4-neon-red)" }, children: "❌ Chưa có AI key" });
}
function ShortcutRow({ keys, desc }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-shortcut-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-settings-shortcut-desc", children: desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "n4-settings-shortcut-key", children: keys })
  ] });
}
const FREE_THEMES = ["light-classic", "light-sand", "light-rose", "light-sky", "light-mint"];
function ThemePresetPicker({ activeThemeMode, themePreset, applyThemePreset, learning }) {
  const { availableThemes, lockedCount } = reactExports.useMemo(() => {
    const available = THEME_FAMILIES.filter((preset) => {
      var _a;
      const owned = !!((_a = learning.unlockedItems) == null ? void 0 : _a[`theme-${preset.id}`]);
      return FREE_THEMES.includes(preset.id) || owned || themePreset === preset.id;
    });
    return { availableThemes: available, lockedCount: THEME_FAMILIES.length - available.length };
  }, [learning.unlockedItems, themePreset]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-theme-picker", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-theme-group-label", children: [
      THEME_MODE_LABELS[activeThemeMode],
      " · tự đổi biến thể sáng/tối cùng một họ"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-theme-preset-grid", children: availableThemes.map((preset) => {
      var _a, _b;
      const preview = getThemeVariant(preset.id, activeThemeMode);
      const darkAccent = (_a = getThemeVariant(preset.id, "dark")) == null ? void 0 : _a.accent;
      const lightAccent = (_b = getThemeVariant(preset.id, "light")) == null ? void 0 : _b.accent;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: `n4-theme-preset-card ${themePreset === preset.id ? "active" : ""}`, onClick: () => applyThemePreset(preset), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-theme-preset-preview", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { background: preview == null ? void 0 : preview.bgPrimary } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { background: preview == null ? void 0 : preview.accent } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { background: preview == null ? void 0 : preview.textPrimary } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-theme-preset-info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-theme-preset-name", children: [
            preset.icon,
            " ",
            preset.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-theme-preset-variants", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { style: { background: darkAccent } }),
            "Tối ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { style: { background: lightAccent } }),
            "Sáng"
          ] })
        ] })
      ] }, preset.id);
    }) }),
    lockedCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "n4-theme-picker-shop", children: [
      "Khám phá ",
      lockedCount,
      " giao diện khác trong Shop →"
    ] })
  ] });
}
function VoicePicker({ lang }) {
  const [voices, setVoices] = reactExports.useState([]);
  const [selected, setSelected] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (typeof speechSynthesis === "undefined") return void 0;
    const load = () => {
      const list = lang === "ja" ? getJapaneseVoices() : getVietnameseVoices();
      setVoices(list);
      setSelected(getPreferredVoiceName(lang));
    };
    load();
    speechSynthesis.onvoiceschanged = load;
    return () => {
      if (speechSynthesis.onvoiceschanged === load) {
        speechSynthesis.onvoiceschanged = null;
      }
    };
  }, [lang]);
  const onChange = (event) => {
    const name = event.target.value;
    setSelected(name);
    setPreferredVoice(lang, name);
    if (lang === "ja") speakJP("こんにちは");
    else speakVi("Xin chào");
  };
  if (voices.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.8em", opacity: 0.6 }, children: "Không có giọng" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: selected, onChange, className: "n4-settings-select", style: { maxWidth: 200 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Tự động" }),
    voices.map((voice) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: voice.name, children: voice.name }, voice.name))
  ] });
}
function buildSettingsItems({ store, learning, activeThemeMode, actions }) {
  var _a;
  const s = store;
  const { handleExport, handleImport, handleResetAllData, resetSettings } = actions;
  return [
    // DISPLAY -> theme
    {
      tab: "display",
      section: "theme",
      kw: "theme mode dark light chu de sang toi",
      label: "Chế độ sáng/tối",
      desc: "Chọn giao diện sáng hoặc tối",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: [{ v: "dark", l: "🌙 Tối" }, { v: "light", l: "☀️ Sáng" }].map((mode) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.themeMode === mode.v ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setThemeMode(mode.v), children: mode.l }, mode.v)) })
    },
    {
      tab: "display",
      section: "theme",
      kw: "theme dark light auto chu de sang toi tu dong preset family",
      label: "Bộ giao diện",
      desc: `Chọn họ giao diện, tự đổi theo ${THEME_MODE_LABELS[activeThemeMode]}`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemePresetPicker, { activeThemeMode, themePreset: s.themePreset, applyThemePreset: s.applyThemePreset, learning })
    },
    {
      tab: "display",
      section: "theme",
      kw: "accent color mau nhan chu dao",
      label: "Màu nhấn (tùy chỉnh)",
      desc: "Ghi đè màu nhấn của bộ giao diện",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-accent-grid", children: ACCENT_COLORS.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { title: color.label, onClick: () => s.setAccent(color.value), className: `n4-settings-accent-btn ${s.accent === color.value ? "active" : ""}`, style: { background: color.value } }, color.value)) })
    },
    // DISPLAY -> gfx
    {
      tab: "display",
      section: "gfx",
      kw: "energy performance quality battery heat cool phone mobile tiet kiem pin nong may",
      label: "Chế độ năng lượng",
      desc: s.energyMode === "quality" ? "Chất lượng cao nhất: hình ảnh đẹp hơn, dùng nhiều tài nguyên hơn" : "Hiệu năng tốt nhất: mặc định mát máy, tiết kiệm pin",
      popular: true,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-density-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.energyMode !== "quality" ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setEnergyMode("performance"), children: "Hiệu năng tốt nhất" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.energyMode === "quality" ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setEnergyMode("quality"), children: "Chất lượng tốt nhất" })
      ] }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.65rem", color: "var(--n4-text-secondary, #aaa)", padding: "4px 0" }, children: s.energyMode === "quality" ? "Chế độ đẹp: bật lại particle/chuyển động và đẩy 3D lên cao. Nên dùng khi máy mát hoặc cắm sạc." : "Mặc định an toàn: tắt particle, giảm chuyển động, ép 3D thấp nhất và giới hạn FPS để tránh nóng máy." })
    },
    {
      tab: "display",
      section: "gfx",
      kw: "touch particle burst hieu ung cham intensity nhe nang",
      label: "✨ Hiệu ứng chạm",
      desc: `Cường độ burst khi chạm: ${{ off: "Tắt", light: "Nhẹ", normal: "Vừa", full: "Đầy đủ" }[s.touchParticleIntensity] || "Vừa"}`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: [{ v: "off", l: "🚫 Tắt" }, { v: "light", l: "💨 Nhẹ" }, { v: "normal", l: "✨ Vừa" }, { v: "full", l: "🎆 Full" }].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.touchParticleIntensity === opt.v ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setTouchParticleIntensity(opt.v), children: opt.l }, opt.v)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.65rem", color: "var(--n4-text-secondary, #aaa)", padding: "4px 0" }, children: s.touchParticleIntensity === "off" ? "🚫 Tắt hiệu ứng chạm — tốt cho thiết bị yếu" : s.touchParticleIntensity === "light" ? "💨 ~4 hạt/lần, không bóng đổ — iPad/mobile mượt" : s.touchParticleIntensity === "full" ? "🎆 Đầy đủ: nhiều hạt, bóng sáng, hiệu ứng lớn" : "✨ Cân bằng hiệu ứng và hiệu suất" })
    },
    {
      tab: "display",
      section: "gfx",
      kw: "graphics quality 3d chat luong do hoa tier mobile hieu nang nong pin battery world isekai",
      label: "🎮 Chất lượng 3D",
      desc: `Mức chi tiết thế giới 3D: ${{ auto: "Tự động", low: "Tiết kiệm", medium: "Vừa", high: "Cao" }[s.gfxTier] || "Tự động"}`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: [{ v: "auto", l: "🤖 Tự động" }, { v: "low", l: "🪫 Tiết kiệm" }, { v: "medium", l: "⚖️ Vừa" }, { v: "high", l: "🔥 Cao" }].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.gfxTier === opt.v ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setGfxTier(opt.v), children: opt.l }, opt.v)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.65rem", color: "var(--n4-text-secondary, #aaa)", padding: "4px 0" }, children: s.gfxTier === "low" ? "🪫 Tắt cánh hoa/đom đóm/mây — giảm nóng máy trên mobile" : s.gfxTier === "medium" ? "⚖️ Hiệu ứng vừa phải, cân bằng cho tablet/máy tầm trung" : s.gfxTier === "high" ? "🔥 Đầy đủ hiệu ứng, dành cho PC/laptop mạnh" : "🤖 Tự chọn theo thiết bị — mobile → tiết kiệm, PC → cao" })
    },
    // DISPLAY -> layout
    {
      tab: "display",
      section: "layout",
      kw: "density mat do compact spacious",
      label: "Mật độ hiển thị",
      desc: "Khoảng cách giữa các phần tử",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: DENSITIES.map((density) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.density === density.value ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setDensity(density.value), children: density.label }, density.value)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.65rem", color: "var(--n4-text-secondary, #aaa)", padding: "4px 0" }, children: s.density === "compact" ? "📦 Nhiều nội dung trên 1 trang, khoảng cách nhỏ" : s.density === "spacious" ? "🌊 Thoáng hơn, khoảng cách lớn giữa các phần" : "⚖️ Cân bằng — phù hợp đa số người dùng" })
    },
    {
      tab: "display",
      section: "layout",
      kw: "font scale size co chu kich thuoc text toan cuc",
      label: "🔤 Cỡ chữ toàn cục",
      desc: `Kích thước chữ: ${s.fontScale}`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: ["S", "M", "L", "XL"].map((size) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.fontScale === size ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setFontScale(size), children: size }, size)) })
    },
    {
      tab: "display",
      section: "layout",
      kw: "card layout grid list kieu hien thi the",
      label: "🃏 Kiểu hiển thị thẻ",
      desc: "Lưới, danh sách hoặc gọn",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: CARD_LAYOUTS.map((layout) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.cardLayout === layout.value ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setCardLayout(layout.value), children: layout.label }, layout.value)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 8, padding: "6px 0", justifyContent: "center" }, children: CARD_LAYOUTS.map((layout) => {
        const isActive = s.cardLayout === layout.value;
        const boxStyle = { border: `1px solid ${isActive ? "var(--n4-accent)" : "var(--n4-border, #333)"}`, borderRadius: 4, padding: 4, opacity: isActive ? 1 : 0.4, transition: "all .2s", width: 60, fontSize: "0.55rem", textAlign: "center" };
        if (layout.value === "grid") return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: boxStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }, children: [1, 2, 3, 4].map((number) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "var(--n4-accent)", borderRadius: 2, height: 12, opacity: 0.5 } }, number)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 2 }, children: "Lưới" })
        ] }, layout.value);
        if (layout.value === "list") return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: boxStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 2 }, children: [1, 2, 3].map((number) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "var(--n4-accent)", borderRadius: 2, height: 6, opacity: 0.5 } }, number)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 2 }, children: "Danh sách" })
        ] }, layout.value);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: boxStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1 }, children: [1, 2, 3, 4, 5, 6].map((number) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "var(--n4-accent)", borderRadius: 1, height: 6, opacity: 0.5 } }, number)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 2 }, children: "Gọn" })
        ] }, layout.value);
      }) })
    },
    {
      tab: "display",
      section: "layout",
      kw: "example display vi du hien thi",
      label: "📖 Hiển thị ví dụ",
      desc: "Cách hiện ví dụ mẫu trong bài",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: EXAMPLE_MODES.map((mode) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.exampleDisplay === mode.value ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setExampleDisplay(mode.value), children: mode.label }, mode.value)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "6px 8px", fontSize: "0.72rem", color: "var(--n4-text-secondary, #aaa)", borderLeft: "2px solid var(--n4-accent)", marginTop: 4 }, children: s.exampleDisplay === "hidden" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { opacity: 0.4 }, children: "Ví dụ: (bị ẩn)" }) : s.exampleDisplay === "block" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "📝 食べる",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { opacity: 0.6 }, children: "= ăn" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "📝 食べる = ăn ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { opacity: 0.5 }, children: "(cùng dòng)" })
      ] }) })
    },
    {
      tab: "display",
      section: "layout",
      kw: "nav position vi tri thanh dieu huong",
      label: "📍 Vị trí thanh điều hướng",
      desc: "Trên hoặc dưới",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-density-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.navPosition === "top" ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setNavPosition("top"), children: "Trên" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.navPosition === "bottom" ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setNavPosition("bottom"), children: "Dưới" })
      ] })
    },
    {
      tab: "display",
      section: "layout",
      kw: "games columns cot so luong",
      label: "🎮 Số cột Games Hub",
      desc: `${s.gamesCols} cột`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: [2, 3, 4].map((columnCount) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.gamesCols === columnCount ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setGamesCols(columnCount), children: columnCount }, columnCount)) })
    },
    {
      tab: "display",
      section: "layout",
      kw: "minna view mode bai hoc hien thi",
      label: "📚 Chế độ xem Minna",
      desc: "Kiểu hiển thị bài học Minna no Nihongo",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: MINNA_VIEWS.map((view) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.minnaView === view.value ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setMinnaView(view.value), children: view.label }, view.value)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.65rem", color: "var(--n4-text-secondary, #aaa)", padding: "4px 0" }, children: s.minnaView === "compact" ? "📋 Thu gọn: chỉ tiêu đề, bấm mở rộng" : s.minnaView === "expanded" ? "📖 Chi tiết: hiện đầy đủ nội dung mỗi bài" : "📑 Mặc định: cân bằng giữa chi tiết và gọn" })
    },
    // DISPLAY -> japanese
    {
      tab: "display",
      section: "japanese",
      kw: "furigana phien am han",
      label: "Hiện Furigana",
      desc: "Phiên âm trên chữ Hán",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.showFurigana ? "active" : ""}`, onClick: s.toggleFurigana })
    },
    {
      tab: "display",
      section: "japanese",
      kw: "romaji latin phien am",
      label: "Hiện Romaji",
      desc: "Phiên âm Latin",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.showRomaji ? "active" : ""}`, onClick: s.toggleRomaji })
    },
    // DISPLAY -> font
    {
      tab: "display",
      section: "font",
      kw: "kanji font chu kieu",
      label: "🖋️ Font chữ Kanji",
      desc: "Kiểu chữ riêng cho Kanji",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "n4-settings-select", value: s.kanjiFont, onChange: (event) => s.setKanjiFont(event.target.value), children: KANJI_FONTS.map((font) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: font.value, children: font.label }, font.value)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 12, padding: "8px 0", justifyContent: "center" }, children: ["漢", "字", "読"].map((kanji) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontFamily: s.kanjiFont === "default" ? void 0 : s.kanjiFont, fontWeight: s.kanjiWeight, fontSize: `${s.kanjiSize}rem`, color: "var(--n4-accent)" }, children: kanji }, kanji)) })
    },
    {
      tab: "display",
      section: "font",
      kw: "kanji weight dam nhat do dam",
      label: "🖊️ Độ đậm Kanji",
      desc: `Độ đậm nét chữ: ${s.kanjiWeight}`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Độ đậm Kanji", min: "100", max: "900", step: "100", value: s.kanjiWeight, onChange: (event) => s.setKanjiWeight(event.target.value), className: "n4-settings-range" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.75rem", minWidth: 28, textAlign: "center", fontWeight: s.kanjiWeight }, children: s.kanjiWeight })
      ] }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 16, padding: "6px 0", justifyContent: "center", fontSize: "1.4rem" }, children: KANJI_WEIGHTS.map((weight) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: weight.value, opacity: s.kanjiWeight === weight.value ? 1 : 0.35, color: s.kanjiWeight === weight.value ? "var(--n4-accent)" : void 0, transition: "all .2s" }, children: [
        "漢 ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { style: { fontSize: "0.6rem" }, children: weight.label })
      ] }, weight.value)) })
    },
    {
      tab: "display",
      section: "font",
      kw: "kanji size co chu kich thuoc",
      label: "📏 Cỡ chữ Kanji",
      desc: `${s.kanjiSize.toFixed(1)}rem`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Cỡ chữ Kanji chính", min: "1.2", max: "3", step: "0.1", value: s.kanjiSize, onChange: (event) => s.setKanjiSize(parseFloat(event.target.value)), className: "n4-settings-range" })
    },
    {
      tab: "display",
      section: "font",
      kw: "font size kanji section co chu tab",
      label: "📐 Cỡ chữ tab Kanji",
      desc: `${s.fzKanji}px`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Cỡ chữ phần Kanji", min: "12", max: "24", step: "1", value: s.fzKanji, onChange: (event) => s.setFzKanji(parseInt(event.target.value, 10)), className: "n4-settings-range" })
    },
    {
      tab: "display",
      section: "font",
      kw: "font size vocab section tu vung co chu tab",
      label: "📐 Cỡ chữ tab Từ vựng",
      desc: `${s.fzVocab}px`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Cỡ chữ phần từ vựng", min: "12", max: "24", step: "1", value: s.fzVocab, onChange: (event) => s.setFzVocab(parseInt(event.target.value, 10)), className: "n4-settings-range" })
    },
    {
      tab: "display",
      section: "font",
      kw: "font size grammar section ngu phap co chu tab",
      label: "📐 Cỡ chữ tab Ngữ pháp",
      desc: `${s.fzGrammar}px`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Cỡ chữ phần ngữ pháp", min: "12", max: "24", step: "1", value: s.fzGrammar, onChange: (event) => s.setFzGrammar(parseInt(event.target.value, 10)), className: "n4-settings-range" })
    },
    // GAMES -> study_mode
    {
      tab: "games",
      section: "study_mode",
      kw: "difficulty do kho easy hard jlpt",
      label: "Độ khó",
      desc: "Mức độ khó cho game/quiz",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-difficulty-col", children: DIFFICULTIES.map((difficulty) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.difficulty === difficulty.value ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setDifficulty(difficulty.value), title: difficulty.desc, children: difficulty.label }, difficulty.value)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.65rem", color: "var(--n4-text-secondary, #aaa)", padding: "4px 0" }, children: ((_a = DIFFICULTIES.find((difficulty) => difficulty.value === s.difficulty)) == null ? void 0 : _a.desc) || "" })
    },
    // GAMES -> goals
    {
      tab: "games",
      section: "goals",
      kw: "xp goal muc tieu diem ngay",
      label: "Mục tiêu XP/ngày",
      desc: `${s.dailyGoal} XP`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Mục tiêu XP mỗi ngày", min: "10", max: "200", step: "10", value: s.dailyGoal, onChange: (event) => s.setDailyGoal(parseInt(event.target.value, 10)), className: "n4-settings-range" })
    },
    // GAMES -> quiz_options
    {
      tab: "games",
      section: "quiz_options",
      kw: "auto advance tu dong chuyen cau",
      label: "Tự động chuyển câu",
      desc: "Tự sang câu tiếp sau khi trả lời",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.autoAdvance ? "active" : ""}`, onClick: () => s.setAutoAdvance(!s.autoAdvance) })
    },
    {
      tab: "games",
      section: "quiz_options",
      kw: "question count so cau hoi mac dinh",
      label: "Số câu hỏi mặc định",
      desc: `${s.defaultQuestionCount || 10} câu/phiên`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "n4-input", style: { width: "auto" }, value: s.defaultQuestionCount || 10, onChange: (event) => s.setDefaultQuestionCount(Number(event.target.value)), children: [5, 10, 15, 20, 30, 50].map((count) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: count, children: [
        count,
        " câu"
      ] }, count)) })
    },
    // GAMES -> minna_range
    {
      tab: "games",
      section: "minna_range",
      kw: "lesson start tu bai bat dau pham vi",
      label: "📖 Bắt đầu từ bài",
      desc: s.lessonStart > 0 ? `Bài ${s.lessonStart}` : "Tất cả (từ đầu)",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", style: { width: "auto" }, value: s.lessonStart || 0, onChange: (event) => s.setLessonStart(Number(event.target.value)), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 0, children: "Tất cả" }),
        Array.from({ length: 50 }, (_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: index + 1, children: [
          "Bài ",
          index + 1
        ] }, index + 1))
      ] })
    },
    {
      tab: "games",
      section: "minna_range",
      kw: "lesson cap den bai ket thuc pham vi gioi han",
      label: "📖 Kết thúc ở bài",
      desc: s.lessonCap > 0 ? `Bài ${s.lessonCap}` : "Tất cả (không giới hạn)",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", style: { width: "auto" }, value: s.lessonCap || 0, onChange: (event) => s.setLessonCap(Number(event.target.value)), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 0, children: "Không giới hạn" }),
        Array.from({ length: 50 }, (_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: index + 1, children: [
          "Bài ",
          index + 1
        ] }, index + 1))
      ] }),
      preview: s.lessonStart > 0 || s.lessonCap > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.65rem", color: "var(--n4-accent)", padding: "4px 0" }, children: [
        "📚 Phạm vi: Bài ",
        s.lessonStart > 0 ? s.lessonStart : 1,
        " → ",
        s.lessonCap > 0 ? `Bài ${s.lessonCap}` : "Cuối"
      ] }) : null
    },
    // AUDIO -> tts_options
    {
      tab: "audio",
      section: "tts_options",
      kw: "tts rate toc do phat am",
      label: "Tốc độ TTS",
      desc: `${s.ttsRate.toFixed(1)}x`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Tốc độ đọc TTS", min: "0.3", max: "2", step: "0.1", value: s.ttsRate, onChange: (event) => s.setTtsRate(parseFloat(event.target.value)), className: "n4-settings-range" })
    },
    {
      tab: "audio",
      section: "tts_options",
      kw: "auto speak tu dong phat am",
      label: "Tự động phát âm",
      desc: "Phát âm khi hiện thẻ",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.autoSpeak ? "active" : ""}`, onClick: () => s.setAutoSpeak(!s.autoSpeak) })
    },
    // AUDIO -> voices
    {
      tab: "audio",
      section: "voices",
      kw: "voice jp giong noi tieng nhat",
      label: "🇯🇵 Giọng tiếng Nhật",
      desc: "Chọn giọng TTS tiếng Nhật",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx(VoicePicker, { lang: "ja" })
    },
    {
      tab: "audio",
      section: "voices",
      kw: "voice vi giong noi tieng viet",
      label: "🇻🇳 Giọng tiếng Việt",
      desc: "Chọn giọng TTS tiếng Việt",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx(VoicePicker, { lang: "vi" })
    },
    // AUDIO -> sound_fx
    {
      tab: "audio",
      section: "sound_fx",
      kw: "sound fx hieu ung am thanh ui",
      label: "🔔 Hiệu ứng âm UI",
      desc: "Âm thanh khi bấm nút",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.soundFX ? "active" : ""}`, onClick: () => s.setSoundFX(!s.soundFX) })
    },
    {
      tab: "audio",
      section: "sound_fx",
      kw: "sound correct am dung tra loi",
      label: "✅ Âm trả lời đúng",
      desc: "Phát âm khi trả lời đúng",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.soundCorrect ? "active" : ""}`, onClick: () => s.setSoundCorrect(!s.soundCorrect) })
    },
    {
      tab: "audio",
      section: "sound_fx",
      kw: "sound wrong am sai tra loi",
      label: "❌ Âm trả lời sai",
      desc: "Phát âm khi trả lời sai",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.soundWrong ? "active" : ""}`, onClick: () => s.setSoundWrong(!s.soundWrong) })
    },
    // AUDIO -> radio_options
    {
      tab: "audio",
      section: "radio_options",
      kw: "radio rate jp tieng nhat toc do",
      label: "📻 Tốc độ Radio JP",
      desc: `${s.radioRateJp.toFixed(1)}x`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Tốc độ radio tiếng Nhật", min: "0.5", max: "1.5", step: "0.1", value: s.radioRateJp, onChange: (event) => s.setRadioRateJp(parseFloat(event.target.value)), className: "n4-settings-range" })
    },
    {
      tab: "audio",
      section: "radio_options",
      kw: "radio rate vi tieng viet toc do",
      label: "📻 Tốc độ Radio VI",
      desc: `${s.radioRateVi.toFixed(1)}x`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Tốc độ radio tiếng Việt", min: "0.5", max: "1.5", step: "0.1", value: s.radioRateVi, onChange: (event) => s.setRadioRateVi(parseFloat(event.target.value)), className: "n4-settings-range" })
    },
    // ACCESSIBILITY -> focus
    {
      tab: "accessibility",
      section: "focus",
      kw: "focus mode tap trung hoc",
      label: "🎯 Chế độ tập trung",
      desc: "Ẩn thanh điều hướng, chỉ hiện nội dung (Esc để thoát)",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": "Focus mode", "aria-pressed": s.focusMode, className: `n4-toggle ${s.focusMode ? "active" : ""}`, onClick: () => s.setFocusMode(!s.focusMode) })
    },
    {
      tab: "accessibility",
      section: "focus",
      kw: "reduced motion giam chuyen dong animation",
      label: "Giảm chuyển động",
      desc: "Tắt hiệu ứng, animation",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.reducedMotion ? "active" : ""}`, onClick: () => s.setReducedMotion(!s.reducedMotion) })
    },
    // ACCESSIBILITY -> visual_aid
    {
      tab: "accessibility",
      section: "visual_aid",
      kw: "high contrast tuong phan cao",
      label: "Tương phản cao",
      desc: "Tăng độ tương phản chữ",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.highContrast ? "active" : ""}`, onClick: () => s.setHighContrast(!s.highContrast) })
    },
    {
      tab: "accessibility",
      section: "visual_aid",
      kw: "color blind protanopia mu mau do",
      label: "🔴 Mù màu đỏ (Protanopia)",
      desc: "Hỗ trợ khiếm khuyết nhìn đỏ",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.cbProtanopia ? "active" : ""}`, onClick: () => s.setCbProtanopia(!s.cbProtanopia) })
    },
    {
      tab: "accessibility",
      section: "visual_aid",
      kw: "color blind deuteranopia mu mau xanh la",
      label: "🟢 Mù màu xanh (Deuteranopia)",
      desc: "Hỗ trợ khiếm khuyết nhìn xanh lá",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.cbDeuteranopia ? "active" : ""}`, onClick: () => s.setCbDeuteranopia(!s.cbDeuteranopia) })
    },
    {
      tab: "accessibility",
      section: "visual_aid",
      kw: "color blind tritanopia mu mau xanh duong",
      label: "🔵 Mù màu xanh dương (Tritanopia)",
      desc: "Hỗ trợ khiếm khuyết nhìn xanh dương",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.cbTritanopia ? "active" : ""}`, onClick: () => s.setCbTritanopia(!s.cbTritanopia) })
    },
    {
      tab: "accessibility",
      section: "visual_aid",
      kw: "dyslexia font chu doc kho",
      label: "🔤 Font Dyslexia",
      desc: "Dùng font dễ đọc hơn",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.dyslexiaFont ? "active" : ""}`, onClick: () => s.setDyslexiaFont(!s.dyslexiaFont) })
    },
    // ACCESSIBILITY -> gestures
    {
      tab: "accessibility",
      section: "gestures",
      kw: "large touch target nut lon cam ung",
      label: "👆 Nút bấm lớn",
      desc: "Tăng kích thước cho màn cảm ứng",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.largeTouchTargets ? "active" : ""}`, onClick: () => s.setLargeTouchTargets(!s.largeTouchTargets) })
    },
    {
      tab: "accessibility",
      section: "gestures",
      kw: "swipe close vuot dong modal",
      label: "👇 Vuốt đóng modal",
      desc: "Vuốt xuống để đóng cửa sổ",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.swipeClose ? "active" : ""}`, onClick: () => s.setSwipeClose(!s.swipeClose) })
    },
    // ADVANCED -> developer
    {
      tab: "advanced",
      section: "developer",
      kw: "debug mode go loi",
      label: "Chế độ gỡ lỗi",
      desc: "Hiện công cụ gỡ lỗi (Ctrl+B)",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.debugMode ? "active" : ""}`, onClick: () => s.setDebugMode(!s.debugMode) })
    },
    // ADVANCED -> sidebar
    {
      tab: "advanced",
      section: "sidebar",
      kw: "sidebar study tools thanh ben cong cu hoc",
      label: "📚 Hiện Công Cụ Học",
      desc: "Timer, Jisho, Phân tích, Ghi chú... (19 công cụ)",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.sidebarStudyTools ? "active" : ""}`, onClick: () => s.setSidebarStudyTools(!s.sidebarStudyTools) })
    },
    {
      tab: "advanced",
      section: "sidebar",
      kw: "sidebar extended tinh nang mo rong",
      label: "🧩 Hiện Tính Năng Mở Rộng",
      desc: "Hán-Việt, Keigo, Viết canvas... (26 tính năng)",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.sidebarExtended ? "active" : ""}`, onClick: () => s.setSidebarExtended(!s.sidebarExtended) })
    },
    {
      tab: "advanced",
      section: "sidebar",
      kw: "sidebar phase 2 giai doan quick learn",
      label: "📖 Hiện Công Cụ Giai Đoạn 2",
      desc: "Bài học ngày, Thẻ nhớ, Thẻ tra cứu...",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.sidebarPhase2 ? "active" : ""}`, onClick: () => s.setSidebarPhase2(!s.sidebarPhase2) })
    },
    {
      tab: "advanced",
      section: "sidebar",
      kw: "sidebar phase 3 giai doan smart",
      label: "🧠 Hiện Công Cụ Giai Đoạn 3",
      desc: "Phân tích AI, Ôn tập thông minh, Dự đoán JLPT...",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.sidebarPhase3 ? "active" : ""}`, onClick: () => s.setSidebarPhase3(!s.sidebarPhase3) })
    },
    // ADVANCED -> shortcuts
    {
      tab: "advanced",
      section: "shortcuts",
      kw: "shortcut keyboard phim tat ctrl",
      label: "⌨️ Phím tắt",
      desc: "Danh sách phím tắt",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-shortcuts-list", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRow, { keys: "Ctrl+K", desc: "Tìm kiếm nhanh" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRow, { keys: "Ctrl+,", desc: "Mở Cài đặt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRow, { keys: "Ctrl+B", desc: "Bảng gỡ lỗi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRow, { keys: "Esc", desc: "Đóng modal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRow, { keys: "1-5", desc: "Chuyển tab điều hướng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRow, { keys: "Enter", desc: "Xác nhận" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRow, { keys: "Space", desc: "Phát âm" })
      ] })
    },
    // ONLINE -> cloud
    {
      tab: "online",
      section: "cloud",
      kw: "ai status trang thai provider groq openrouter",
      label: "Trạng thái nhà cung cấp AI",
      desc: "Trạng thái AI từ hệ thống",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx(AIStatusBadge, {})
    },
    {
      tab: "online",
      section: "cloud",
      kw: "account google login dang nhap sync dong bo cloud",
      label: "☁️ Tài khoản & Đồng bộ",
      desc: "Đăng nhập Google, đồng bộ dữ liệu lên cloud",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthButton, {})
    },
    // ONLINE -> backup
    {
      tab: "online",
      section: "backup",
      kw: "export xuat du lieu backup sao luu",
      label: "Xuất dữ liệu",
      desc: "Tải về bookmark, SRS, ghi chú",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: handleExport, children: "📤 Xuất" })
    },
    {
      tab: "online",
      section: "backup",
      kw: "import nhap du lieu restore khoi phuc",
      label: "Nhập dữ liệu",
      desc: "Khôi phục từ file JSON",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: handleImport, children: "📥 Nhập" })
    },
    // ONLINE -> stats
    {
      tab: "online",
      section: "stats",
      kw: "stats thong ke level xp",
      label: "Thống kê",
      desc: "Dữ liệu hiện tại",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-stats", children: [
        "🏆 Cấp độ ",
        learning.level,
        " · ",
        learning.xp,
        " Điểm",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "🔖 ",
        Object.keys(learning.bookmarks || {}).length,
        " mục đánh dấu",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "📚 ",
        Object.keys(learning.srs || {}).length,
        " mục ôn tập (SRS)"
      ] })
    },
    // ONLINE -> reset
    {
      tab: "online",
      section: "reset",
      kw: "reset settings default mac dinh khoi phuc cai dat",
      label: "🔄 Khôi phục cài đặt mặc định",
      desc: "Reset mọi cài đặt, giữ nguyên dữ liệu học tập",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: resetSettings, children: "🔄 Khôi phục" })
    },
    {
      tab: "online",
      section: "reset",
      kw: "reset xoa toan bo clear du lieu",
      label: "Xóa toàn bộ",
      desc: "Xóa mọi dữ liệu local trừ đăng nhập rồi đồng bộ trạng thái sạch lên cloud",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: handleResetAllData, children: "🗑️ Reset" })
    }
  ].map((item) => {
    var _a2, _b;
    return {
      ...item,
      compact: (_a2 = item.compact) != null ? _a2 : COMPACT_ITEMS_SET.has(item.label),
      popular: (_b = item.popular) != null ? _b : POPULAR_ITEMS_SET.has(item.label)
    };
  });
}
const LEARNING_MODES = [
  { id: "focus", icon: "◎", label: "Nhẹ nhàng", detail: "30 XP · nhiều trợ giúp", values: { difficulty: "easy", dailyGoal: 30, newItemsPerDay: 6, autoAdvance: false, ttsRate: 0.8, autoSpeak: true, density: "comfortable", showFurigana: true, showRomaji: true } },
  { id: "balanced", icon: "◐", label: "Cân bằng", detail: "50 XP · nhịp N4 hằng ngày", values: { difficulty: "normal", dailyGoal: 50, newItemsPerDay: 10, autoAdvance: false, ttsRate: 0.9, autoSpeak: false, density: "comfortable", showFurigana: true, showRomaji: true } },
  { id: "intensive", icon: "↗", label: "Tăng tốc", detail: "100 XP · ưu tiên ôn thi", values: { difficulty: "jlpt", dailyGoal: 100, newItemsPerDay: 15, autoAdvance: true, ttsRate: 1, autoSpeak: false, density: "compact", showFurigana: true, showRomaji: false } }
];
const CATEGORY_SUMMARIES = {
  display: "Giao diện, chữ Nhật và hiệu năng",
  games: "Mục tiêu, độ khó và phạm vi học",
  audio: "Phát âm, giọng đọc và phản hồi âm thanh",
  accessibility: "Trợ năng, cử chỉ và tập trung",
  advanced: "Công cụ và phím tắt",
  online: "Đồng bộ, sao lưu và dữ liệu"
};
const valueLabel = {
  difficulty: { easy: "Nhẹ", normal: "Thường", hard: "Khó", jlpt: "JLPT N4" },
  density: { comfortable: "Thoáng", compact: "Gọn" }
};
function settingLabel(key, value) {
  var _a;
  if (key === "dailyGoal") return `${value} XP/ngày`;
  if (key === "newItemsPerDay") return `${value} từ mới/ngày`;
  if (key === "ttsRate") return `${value}×`;
  if (typeof value === "boolean") return value ? "Bật" : "Tắt";
  return ((_a = valueLabel[key]) == null ? void 0 : _a[value]) || String(value);
}
const MODE_SETTING_LABELS = {
  difficulty: "Độ khó",
  dailyGoal: "Mục tiêu hôm nay",
  newItemsPerDay: "Từ mới mỗi ngày",
  autoAdvance: "Tự chuyển câu hỏi",
  ttsRate: "Tốc độ TTS",
  autoSpeak: "Đọc tự động",
  density: "Mật độ giao diện",
  showFurigana: "Furigana",
  showRomaji: "Romaji"
};
function getModeChanges(mode, settings) {
  return Object.entries(mode.values).filter(([key, next]) => settings[key] !== next).map(([key, next]) => ({
    key,
    label: MODE_SETTING_LABELS[key],
    previous: settingLabel(key, settings[key]),
    next: settingLabel(key, next)
  }));
}
function SmartSettingsController({ settings: s, items }) {
  var _a;
  const [appliedMode, setAppliedMode] = reactExports.useState(null);
  const [selectedMode, setSelectedMode] = reactExports.useState(null);
  const [lastAppliedChanges, setLastAppliedChanges] = reactExports.useState([]);
  const [activeCategory, setActiveCategory] = reactExports.useState("display");
  const [activeSection, setActiveSection] = reactExports.useState("theme");
  const categoryItems = reactExports.useMemo(
    () => items.filter((item) => item.tab === activeCategory),
    [activeCategory, items]
  );
  const sectionIds = TAB_SECTIONS[activeCategory] || [];
  const activeSectionId = sectionIds.includes(activeSection) ? activeSection : sectionIds[0];
  const sectionItems = categoryItems.filter((item) => item.section === activeSectionId);
  const section = SECTIONS[activeSectionId] || {};
  const pendingModeChanges = selectedMode ? getModeChanges(selectedMode, s) : [];
  const isSelectedModeApplied = (selectedMode == null ? void 0 : selectedMode.id) === appliedMode && pendingModeChanges.length === 0;
  const visibleModeChanges = isSelectedModeApplied ? lastAppliedChanges : pendingModeChanges;
  const applyMode = (mode) => {
    const { values } = mode;
    const changes = getModeChanges(mode, s);
    if (!changes.length) return;
    s.setDifficulty(values.difficulty);
    s.setDailyGoal(values.dailyGoal);
    s.setNewItemsPerDay(values.newItemsPerDay);
    s.setAutoAdvance(values.autoAdvance);
    s.setTtsRate(values.ttsRate);
    s.setAutoSpeak(values.autoSpeak);
    s.setDensity(values.density);
    if (s.showFurigana !== values.showFurigana) s.toggleFurigana();
    if (s.showRomaji !== values.showRomaji) s.toggleRomaji();
    setAppliedMode(mode.id);
    setLastAppliedChanges(changes);
  };
  const selectCategory = (categoryId) => {
    var _a2;
    setActiveCategory(categoryId);
    setActiveSection(((_a2 = TAB_SECTIONS[categoryId]) == null ? void 0 : _a2[0]) || "");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-settings-controller", "aria-labelledby": "settings-controller-title", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-settings-command-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-settings-controller-kicker", children: "CÀI ĐẶT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { id: "settings-controller-title", children: "Một nơi, mọi thay đổi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chọn khu vực cần chỉnh. Thay đổi áp dụng ngay cho toàn bộ ứng dụng." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-settings-global-status", role: "status", children: "✓ Toàn app" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-learning-mode", "aria-label": "Chọn nhịp học", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-settings-mode-label", children: "Nhịp học" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-mode-options", role: "group", "aria-label": "Chọn nhịp học hôm nay", children: LEARNING_MODES.map((mode) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", "aria-pressed": (selectedMode == null ? void 0 : selectedMode.id) === mode.id, className: `n4-settings-mode ${(selectedMode == null ? void 0 : selectedMode.id) === mode.id ? "is-selected" : ""}`, onClick: () => setSelectedMode(mode), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: mode.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: mode.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: mode.detail })
        ] })
      ] }, mode.id)) })
    ] }),
    selectedMode && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-settings-mode-changes", "aria-live": "polite", "aria-labelledby": "settings-mode-changes-title", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-mode-changes-heading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSelectedModeApplied ? "ĐÃ ÁP DỤNG" : "SẼ THAY ĐỔI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { id: "settings-mode-changes-title", children: selectedMode.label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { children: [
          visibleModeChanges.length,
          " mục"
        ] })
      ] }),
      visibleModeChanges.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: visibleModeChanges.map((change) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: change.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          change.previous,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { "aria-hidden": "true", children: "→" }),
          " ",
          change.next
        ] })
      ] }, change.key)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Preset này đã khớp với cài đặt hiện tại." }),
      !isSelectedModeApplied && visibleModeChanges.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-settings-mode-apply", onClick: () => applyMode(selectedMode), children: [
        "Áp dụng ",
        selectedMode.label,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          visibleModeChanges.length,
          " thay đổi"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "n4-settings-controller-categories", "aria-label": "Khu vực cài đặt", children: TABS.map((tab) => {
      const count = items.filter((item) => item.tab === tab.id).length;
      const selected = activeCategory === tab.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", "aria-pressed": selected, className: `n4-settings-controller-category ${selected ? "is-active" : ""}`, onClick: () => selectCategory(tab.id), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: tab.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: count })
      ] }, tab.id);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-active-area", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-active-heading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: (_a = TABS.find((tab) => tab.id === activeCategory)) == null ? void 0 : _a.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: CATEGORY_SUMMARIES[activeCategory] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { children: [
          categoryItems.length,
          " mục"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-section-picker", role: "tablist", "aria-label": "Nhóm điều khiển chi tiết", children: sectionIds.map((sectionId) => {
        const info = SECTIONS[sectionId] || {};
        const selected = activeSectionId === sectionId;
        const count = categoryItems.filter((item) => item.section === sectionId).length;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", role: "tab", "aria-selected": selected, onClick: () => setActiveSection(sectionId), children: [
          info.header,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: count })
        ] }, sectionId);
      }) }),
      sectionItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(IOSGroupedList, { header: section.header, footer: section.footer, className: "n4-settings-controller-list", children: sectionItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-row-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IOSGroupedRow, { label: item.label, description: item.desc, right: item.ctrl, compact: item.compact }),
        item.preview && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-preview", children: item.preview })
      ] }, `${activeSectionId}-${index}`)) })
    ] })
  ] });
}
function Settings() {
  const store = useAppStore(useShallow((s2) => ({
    theme: s2.theme,
    themeMode: s2.themeMode,
    accent: s2.accent,
    density: s2.density,
    showFurigana: s2.showFurigana,
    showRomaji: s2.showRomaji,
    ttsRate: s2.ttsRate,
    autoSpeak: s2.autoSpeak,
    difficulty: s2.difficulty,
    dailyGoal: s2.dailyGoal,
    newItemsPerDay: s2.newItemsPerDay,
    autoAdvance: s2.autoAdvance,
    defaultQuestionCount: s2.defaultQuestionCount,
    lessonStart: s2.lessonStart,
    lessonCap: s2.lessonCap,
    reducedMotion: s2.reducedMotion,
    highContrast: s2.highContrast,
    debugMode: s2.debugMode,
    kanjiFont: s2.kanjiFont,
    kanjiWeight: s2.kanjiWeight,
    kanjiSize: s2.kanjiSize,
    fzKanji: s2.fzKanji,
    fzVocab: s2.fzVocab,
    fzGrammar: s2.fzGrammar,
    cardLayout: s2.cardLayout,
    exampleDisplay: s2.exampleDisplay,
    navPosition: s2.navPosition,
    gamesCols: s2.gamesCols,
    minnaView: s2.minnaView,
    soundFX: s2.soundFX,
    soundCorrect: s2.soundCorrect,
    soundWrong: s2.soundWrong,
    radioRateJp: s2.radioRateJp,
    radioRateVi: s2.radioRateVi,
    cbProtanopia: s2.cbProtanopia,
    cbDeuteranopia: s2.cbDeuteranopia,
    cbTritanopia: s2.cbTritanopia,
    dyslexiaFont: s2.dyslexiaFont,
    largeTouchTargets: s2.largeTouchTargets,
    swipeFlashcard: s2.swipeFlashcard,
    swipeClose: s2.swipeClose,
    energyMode: s2.energyMode,
    touchParticleIntensity: s2.touchParticleIntensity,
    gfxTier: s2.gfxTier,
    sidebarStudyTools: s2.sidebarStudyTools,
    sidebarExtended: s2.sidebarExtended,
    sidebarPhase2: s2.sidebarPhase2,
    sidebarPhase3: s2.sidebarPhase3,
    focusMode: s2.focusMode,
    themePreset: s2.themePreset,
    syncInterval: s2.syncInterval,
    fontScale: s2.fontScale,
    // Setters (stable function refs — not part of shallow equality check)
    setTheme: s2.setTheme,
    setThemeMode: s2.setThemeMode,
    setAccent: s2.setAccent,
    applyThemePreset: s2.applyThemePreset,
    clearThemePreset: s2.clearThemePreset,
    setDensity: s2.setDensity,
    toggleFurigana: s2.toggleFurigana,
    toggleRomaji: s2.toggleRomaji,
    setTtsRate: s2.setTtsRate,
    setAutoSpeak: s2.setAutoSpeak,
    setDifficulty: s2.setDifficulty,
    setDailyGoal: s2.setDailyGoal,
    setNewItemsPerDay: s2.setNewItemsPerDay,
    setAutoAdvance: s2.setAutoAdvance,
    setDefaultQuestionCount: s2.setDefaultQuestionCount,
    setLessonStart: s2.setLessonStart,
    setLessonCap: s2.setLessonCap,
    setReducedMotion: s2.setReducedMotion,
    setHighContrast: s2.setHighContrast,
    setDebugMode: s2.setDebugMode,
    setKanjiFont: s2.setKanjiFont,
    setKanjiWeight: s2.setKanjiWeight,
    setKanjiSize: s2.setKanjiSize,
    setFzKanji: s2.setFzKanji,
    setFzVocab: s2.setFzVocab,
    setFzGrammar: s2.setFzGrammar,
    setCardLayout: s2.setCardLayout,
    setExampleDisplay: s2.setExampleDisplay,
    setNavPosition: s2.setNavPosition,
    setGamesCols: s2.setGamesCols,
    setMinnaView: s2.setMinnaView,
    setSoundFX: s2.setSoundFX,
    setSoundCorrect: s2.setSoundCorrect,
    setSoundWrong: s2.setSoundWrong,
    setRadioRateJp: s2.setRadioRateJp,
    setRadioRateVi: s2.setRadioRateVi,
    setCbProtanopia: s2.setCbProtanopia,
    setCbDeuteranopia: s2.setCbDeuteranopia,
    setCbTritanopia: s2.setCbTritanopia,
    setDyslexiaFont: s2.setDyslexiaFont,
    setLargeTouchTargets: s2.setLargeTouchTargets,
    setSwipeFlashcard: s2.setSwipeFlashcard,
    setSwipeClose: s2.setSwipeClose,
    setEnergyMode: s2.setEnergyMode,
    setTouchParticleIntensity: s2.setTouchParticleIntensity,
    setGfxTier: s2.setGfxTier,
    setSidebarStudyTools: s2.setSidebarStudyTools,
    setSidebarExtended: s2.setSidebarExtended,
    setSidebarPhase2: s2.setSidebarPhase2,
    setSidebarPhase3: s2.setSidebarPhase3,
    setFocusMode: s2.setFocusMode,
    setSyncInterval: s2.setSyncInterval,
    setFontScale: s2.setFontScale
  })));
  const learning = useLearningStore(useShallow((s2) => ({
    level: s2.level,
    xp: s2.xp,
    bookmarks: s2.bookmarks,
    srs: s2.srs,
    unlockedItems: s2.unlockedItems,
    equippedCosmetics: s2.equippedCosmetics,
    equipItem: s2.equipItem,
    unequipItem: s2.unequipItem
  })));
  const [search, setSearch] = reactExports.useState("");
  const [exportMsg, setExportMsg] = reactExports.useState(null);
  const handleExport = reactExports.useCallback(() => {
    if (typeof window.exportData === "function") {
      window.exportData();
      setExportMsg("✅ Đã xuất dữ liệu!");
    } else {
      try {
        downloadSettingsBackupFile(buildSettingsBackupPayload());
        setExportMsg("✅ Đã xuất dữ liệu!");
      } catch (error) {
        console.warn("Export failed:", error);
        setExportMsg("❌ " + getUserErrorMessage(error, "Không thể xuất dữ liệu lúc này."));
      }
    }
    setTimeout(() => setExportMsg(null), 3e3);
  }, []);
  const handleImport = reactExports.useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      var _a;
      const file = (_a = e.target.files) == null ? void 0 : _a[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const data = JSON.parse(evt.target.result);
          const result = applyImportedBackupData(data);
          if (result.status === "invalid") {
            setExportMsg("❌ File không hợp lệ");
            setTimeout(() => setExportMsg(null), 3e3);
            return;
          }
          setExportMsg("✅ Đã nhập dữ liệu! Đang tải lại...");
          setTimeout(() => location.reload(), 1200);
        } catch (e2) {
          setExportMsg("❌ File không hợp lệ");
          setTimeout(() => setExportMsg(null), 3e3);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }, []);
  const s = store;
  const activeThemeMode = resolveThemeMode(s.themeMode, s.theme);
  const handleResetSettings = reactExports.useCallback(() => {
    if (!confirm("Khôi phục tất cả cài đặt về mặc định? (Dữ liệu học tập không bị ảnh hưởng)")) return;
    resetSettingsToDefaults(s);
    s.setFontScale("S");
    setExportMsg("✅ Đã khôi phục cài đặt mặc định!");
    setTimeout(() => setExportMsg(null), 3e3);
  }, [s]);
  const handleResetAllData = reactExports.useCallback(async () => {
    if (!confirm("Bạn có chắc chắn muốn xóa mọi dữ liệu local, giữ lại đăng nhập và ghi trạng thái sạch này lên cloud? Hành động này không thể hoàn tác.")) return;
    try {
      const result = await resetAllAndSync();
      alert(result.message || "✅ Đã xoá sạch dữ liệu!");
      await new Promise((resolve) => setTimeout(resolve, 800));
      location.reload();
    } catch (error) {
      alert("❌ " + getUserErrorMessage(error));
    }
  }, []);
  const allItems = reactExports.useMemo(() => buildSettingsItems({
    store,
    learning,
    activeThemeMode,
    actions: {
      handleExport,
      handleImport,
      handleResetAllData,
      resetSettings: handleResetSettings
    }
  }), [store, learning, activeThemeMode, handleExport, handleImport, handleResetAllData, handleResetSettings]);
  const visibleItems = reactExports.useMemo(() => {
    let items = allItems;
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter((it) => it.label.toLowerCase().includes(q) || it.kw.includes(q) || it.desc && it.desc.toLowerCase().includes(q));
    }
    return items;
  }, [allItems, search]);
  const isSearching = search.trim().length > 0;
  const searchGroupedItems = reactExports.useMemo(() => {
    if (!isSearching) return {};
    const groups = {};
    for (const item of visibleItems) {
      if (!groups[item.tab]) groups[item.tab] = [];
      groups[item.tab].push(item);
    }
    return groups;
  }, [isSearching, visibleItems]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsHeroScene, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: "n4-input n4-settings-search",
        type: "text",
        placeholder: "🔍 Tìm cài đặt...",
        value: search,
        onChange: (e) => setSearch(e.target.value),
        style: { margin: "0 var(--n4-sp-4) var(--n4-sp-3)", width: "calc(100% - var(--n4-sp-4) * 2)" }
      }
    ),
    !isSearching && /* @__PURE__ */ jsxRuntimeExports.jsx(SmartSettingsController, { settings: s, items: allItems }),
    isSearching ? TABS.map((tab) => {
      const items = searchGroupedItems[tab.id];
      if (!(items == null ? void 0 : items.length)) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(IOSGroupedList, { header: GROUP_LABELS[tab.id] || tab.label, children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-row-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IOSGroupedRow, { label: item.label, description: item.desc, right: item.ctrl, compact: item.compact }),
        item.preview && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-preview", style: { padding: "0 var(--n4-sp-4) var(--n4-sp-2)" }, children: item.preview })
      ] }, `${tab.id}-${i}`)) }, tab.id);
    }) : null,
    isSearching && visibleItems.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state n4-settings-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: isSearching ? "🔍" : "⚙️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: isSearching ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Không tìm thấy “",
        search,
        "”"
      ] }) : "Không có cài đặt" })
    ] }),
    exportMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-settings-export-msg ${exportMsg.startsWith("✅") ? "success" : "error"}`, children: exportMsg })
  ] });
}
export {
  Settings as default
};
