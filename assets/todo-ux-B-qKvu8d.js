import { s as safeGetItem, d as safeSetItem, ab as S } from "./feature-3d-CFvJkEt3.js";
import { s as showToast } from "./toast-CJdbqLP6.js";
import "./vendor-react-BYxMSDiB.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
function _ov(id) {
  var el = document.getElementById(id);
  if (!el) {
    el = document.createElement("div");
    el.id = id;
    el.className = "game-overlay";
    document.body.appendChild(el);
  }
  return el;
}
function _clOv(id) {
  var el = document.getElementById(id);
  if (el) {
    el.classList.remove("active");
    setTimeout(function() {
      el.remove();
    }, 300);
  }
}
function openPWAInstall() {
  var ol = _ov("pwa-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📱 Cài đặt ứng dụng</h3><span class="mg-close" onclick="closePWAInstall()">✕</span></div>';
  h += '<div class="ux-pwa-info">';
  h += '<div class="ux-pwa-icon">📲</div>';
  h += "<h4>Cài N4 Learning lên màn hình chính</h4>";
  h += '<div class="ux-pwa-steps">';
  h += "<p><b>Chrome / Edge:</b></p>";
  h += '<ol><li>Nhấn nút ⋮ (menu) ở góc trên phải</li><li>Chọn "Thêm vào màn hình chính" / "Install app"</li><li>Xác nhận cài đặt</li></ol>';
  h += "<p><b>Safari (iOS):</b></p>";
  h += '<ol><li>Nhấn nút chia sẻ □↑ ở thanh dưới</li><li>Cuộn xuống chọn "Thêm vào MH chính"</li><li>Nhấn "Thêm"</li></ol>';
  h += "</div>";
  if (window._pwaPrompt) {
    h += '<button class="st-btn primary" onclick="triggerPWA()">📲 Cài đặt ngay</button>';
  } else {
    h += '<div class="at-tip">Ứng dụng đã sẵn sàng offline! Làm theo hướng dẫn trên.</div>';
  }
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function triggerPWA() {
  if (window._pwaPrompt) {
    window._pwaPrompt.prompt();
    window._pwaPrompt.userChoice.then(function(r) {
      showToast(r.outcome === "accepted" ? "✅ Đã cài đặt!" : "Đã hủy");
      window._pwaPrompt = null;
    });
  }
}
function closePWAInstall() {
  _clOv("pwa-overlay");
}
function openWidget() {
  var bm = S.bookmarks || {};
  var srs = S.srs || {};
  var bmCount = Object.keys(bm).length;
  var srsCount = Object.keys(srs).length;
  var mastered = Object.values(srs).filter(function(v) {
    return v.level >= 4;
  }).length;
  var log = {};
  try {
    log = JSON.parse(safeGetItem("n4_activity_log") || "{}");
  } catch (e) {
  }
  var streak = 0;
  var d = /* @__PURE__ */ new Date();
  for (var i = 0; i < 365; i++) {
    var ds = d.toISOString().slice(0, 10);
    if (log[ds]) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else break;
  }
  var ol = _ov("widget-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📊 Dashboard Widget</h3><span class="mg-close" onclick="closeWidget()">✕</span></div>';
  h += '<div class="ux-widget-grid">';
  h += '<div class="ux-widget-card"><div class="ux-w-num">' + bmCount + '</div><div class="ux-w-label">Bookmarks</div></div>';
  h += '<div class="ux-widget-card"><div class="ux-w-num">' + srsCount + '</div><div class="ux-w-label">SRS Items</div></div>';
  h += '<div class="ux-widget-card"><div class="ux-w-num">' + mastered + '</div><div class="ux-w-label">Mastered</div></div>';
  h += '<div class="ux-widget-card"><div class="ux-w-num">🔥' + streak + '</div><div class="ux-w-label">Streak</div></div>';
  h += "</div>";
  h += '<div class="ux-widget-quick">';
  h += `<button class="st-btn primary" onclick="closeWidget();switchTab('games')">🎮 Games</button>`;
  h += `<button class="st-btn" onclick="closeWidget();switchTab('kanji')">漢 Kanji</button>`;
  h += `<button class="st-btn" onclick="closeWidget();switchTab('vocab')">📖 Vocab</button>`;
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeWidget() {
  _clOv("widget-overlay");
}
function openNotifications() {
  var ol = _ov("notif-overlay");
  var enabled = safeGetItem("n4_notif") === "1";
  var h = '<div class="mg-container"><div class="mg-header"><h3>🔔 Notifications</h3><span class="mg-close" onclick="closeNotifications()">✕</span></div>';
  h += '<div class="ux-notif-status">' + (enabled ? "✅ Đã bật" : "❌ Chưa bật") + "</div>";
  h += '<button class="st-btn primary" onclick="notifToggle()">🔔 ' + (enabled ? "Tắt" : "Bật") + " thông báo</button>";
  h += '<div class="ux-notif-settings">';
  h += '<label>Nhắc học: <select id="notif-time"><option value="9">9:00</option><option value="12">12:00</option><option value="18">18:00</option><option value="21">21:00</option></select></label>';
  h += "</div>";
  h += '<div class="at-tip">Hệ thống sẽ nhắc bạn ôn bài mỗi ngày</div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function notifToggle() {
  if (!("Notification" in window)) {
    showToast("Trình duyệt không hỗ trợ");
    return;
  }
  if (Notification.permission === "denied") {
    showToast("Notification bị chặn trong cài đặt trình duyệt");
    return;
  }
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(function(p) {
      if (p === "granted") {
        safeSetItem("n4_notif", "1");
        showToast("✅ Đã bật thông báo!");
        openNotifications();
      } else {
        showToast("Bị từ chối");
      }
    });
  } else {
    var cur = safeGetItem("n4_notif") === "1";
    safeSetItem("n4_notif", cur ? "0" : "1");
    showToast(cur ? "Đã tắt" : "Đã bật");
    openNotifications();
  }
}
function closeNotifications() {
  _clOv("notif-overlay");
}
function openGestureNav() {
  var ol = _ov("gesture-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>👆 Gesture Navigation</h3><span class="mg-close" onclick="closeGestureNav()">✕</span></div>';
  h += '<div class="ux-gesture-list">';
  h += '<div class="ux-gesture-item"><span class="ux-gesture-icon">👈</span><span>Vuốt trái → Tab tiếp theo</span></div>';
  h += '<div class="ux-gesture-item"><span class="ux-gesture-icon">👉</span><span>Vuốt phải → Tab trước</span></div>';
  h += '<div class="ux-gesture-item"><span class="ux-gesture-icon">👆👆</span><span>Double tap → Quick Lookup</span></div>';
  h += '<div class="ux-gesture-item"><span class="ux-gesture-icon">📌</span><span>Long press từ → Bookmark</span></div>';
  h += '<div class="ux-gesture-item"><span class="ux-gesture-icon">🔍</span><span>Pinch → Zoom nội dung</span></div>';
  h += "</div>";
  var gestOn = safeGetItem("n4_gesture") !== "0";
  h += '<button class="st-btn ' + (gestOn ? "" : "primary") + '" onclick="toggleGesture()">' + (gestOn ? "✅ Đang bật" : "❌ Đang tắt") + "</button>";
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function toggleGesture() {
  var cur = safeGetItem("n4_gesture") !== "0";
  safeSetItem("n4_gesture", cur ? "0" : "1");
  showToast(cur ? "Tắt gesture" : "Bật gesture");
  openGestureNav();
}
function closeGestureNav() {
  _clOv("gesture-overlay");
}
function openLandscape() {
  var ol = _ov("landscape-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🖥️ Landscape Mode</h3><span class="mg-close" onclick="closeLandscape()">✕</span></div>';
  var isLand = safeGetItem("n4_landscape") === "1";
  h += '<div class="ux-landscape-preview">';
  h += '<div class="ux-land-icon">' + (isLand ? "🖥️" : "📱") + "</div>";
  h += "<div>Chế độ: <b>" + (isLand ? "Landscape (ngang)" : "Portrait (dọc)") + "</b></div>";
  h += "</div>";
  h += '<button class="st-btn primary" onclick="toggleLandscape()">🔄 Chuyển đổi</button>';
  h += '<div class="at-tip">Landscape mode hiển thị sidebar cố định và bảng rộng hơn</div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function toggleLandscape() {
  var cur = safeGetItem("n4_landscape") === "1";
  safeSetItem("n4_landscape", cur ? "0" : "1");
  document.body.classList.toggle("landscape-mode", !cur);
  showToast(!cur ? "Landscape ON" : "Portrait ON");
  openLandscape();
}
function closeLandscape() {
  _clOv("landscape-overlay");
}
function openKeyboardShortcuts() {
  var ol = _ov("kbshort-overlay");
  var shortcuts = [
    ["1–6", "Chuyển tab"],
    ["/", "Mở tìm kiếm"],
    ["Ctrl+K", "Quick Lookup"],
    ["F", "Toggle Furigana"],
    ["R", "Toggle Romaji"],
    ["T", "Chuyển theme"],
    ["B", "Toggle Bookmark only"],
    ["Esc", "Đóng overlay"],
    ["←→", "Chuyển section"],
    ["Space", "Phát TTS"]
  ];
  var h = '<div class="mg-container"><div class="mg-header"><h3>⌨️ Keyboard Shortcuts</h3><span class="mg-close" onclick="closeKeyboardShortcuts()">✕</span></div>';
  h += '<div class="ux-kb-list">';
  shortcuts.forEach(function(s) {
    h += '<div class="ux-kb-row"><kbd class="ux-kbd">' + s[0] + "</kbd><span>" + s[1] + "</span></div>";
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeKeyboardShortcuts() {
  _clOv("kbshort-overlay");
}
function openMultiWindow() {
  var ol = _ov("multiwin-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🪟 Multi-Window</h3><span class="mg-close" onclick="closeMultiWindow()">✕</span></div>';
  h += '<div class="ux-mw-info">';
  h += "<h4>Sử dụng song song:</h4>";
  h += '<div class="ux-mw-step">1. Mở ứng dụng trong 2 tab trình duyệt</div>';
  h += '<div class="ux-mw-step">2. Dùng 1 tab xem bài, tab kia làm bài tập</div>';
  h += '<div class="ux-mw-step">3. Dữ liệu tự đồng bộ qua localStorage</div>';
  h += "</div>";
  h += '<button class="st-btn primary" onclick="openNewWindow()">🪟 Mở cửa sổ mới</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function openNewWindow() {
  window.open(window.location.href, "_blank", "width=500,height=700");
}
function closeMultiWindow() {
  _clOv("multiwin-overlay");
}
function openAccessibility() {
  var ol = _ov("a11y-overlay");
  var fontSize = parseInt(safeGetItem("n4_fontsize") || "16");
  var highContrast = safeGetItem("n4_highcontrast") === "1";
  var reduceMotion = safeGetItem("n4_reducemotion") === "1";
  var h = '<div class="mg-container"><div class="mg-header"><h3>♿ Accessibility</h3><span class="mg-close" onclick="closeAccessibility()">✕</span></div>';
  h += '<div class="ux-a11y-settings">';
  h += '<div class="ux-a11y-row"><span>Cỡ chữ:</span>';
  h += '<button class="st-btn" onclick="a11yFontSize(-2)">A-</button>';
  h += '<span id="a11y-fs">' + fontSize + "px</span>";
  h += '<button class="st-btn" onclick="a11yFontSize(2)">A+</button></div>';
  h += '<div class="ux-a11y-row"><span>High Contrast:</span>';
  h += '<button class="st-btn ' + (highContrast ? "primary" : "") + `" onclick="a11yToggle('contrast')">` + (highContrast ? "ON" : "OFF") + "</button></div>";
  h += '<div class="ux-a11y-row"><span>Reduce Motion:</span>';
  h += '<button class="st-btn ' + (reduceMotion ? "primary" : "") + `" onclick="a11yToggle('motion')">` + (reduceMotion ? "ON" : "OFF") + "</button></div>";
  h += "</div>";
  h += '<button class="st-btn" onclick="a11yReset()">🔄 Reset mặc định</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function a11yFontSize(delta) {
  var cur = parseInt(safeGetItem("n4_fontsize") || "16");
  var next = Math.max(12, Math.min(28, cur + delta));
  safeSetItem("n4_fontsize", String(next));
  document.documentElement.style.fontSize = next + "px";
  var el = document.getElementById("a11y-fs");
  if (el) el.textContent = next + "px";
}
function a11yToggle(type) {
  if (type === "contrast") {
    var cur = safeGetItem("n4_highcontrast") === "1";
    safeSetItem("n4_highcontrast", cur ? "0" : "1");
    document.body.classList.toggle("high-contrast", !cur);
  } else if (type === "motion") {
    var cur2 = safeGetItem("n4_reducemotion") === "1";
    safeSetItem("n4_reducemotion", cur2 ? "0" : "1");
    document.body.classList.toggle("reduce-motion", !cur2);
  }
  openAccessibility();
}
function a11yReset() {
  safeSetItem("n4_fontsize", "16");
  safeSetItem("n4_highcontrast", "0");
  safeSetItem("n4_reducemotion", "0");
  document.documentElement.style.fontSize = "16px";
  document.body.classList.remove("high-contrast", "reduce-motion");
  showToast("Reset xong");
  openAccessibility();
}
function closeAccessibility() {
  _clOv("a11y-overlay");
}
function openAMOLED() {
  var ol = _ov("amoled-overlay");
  var isOn = safeGetItem("n4_amoled") === "1";
  var h = '<div class="mg-container"><div class="mg-header"><h3>🌑 AMOLED Theme</h3><span class="mg-close" onclick="closeAMOLED()">✕</span></div>';
  h += '<div class="ux-amoled-preview" style="background:' + (isOn ? "#000" : "#1a1a2e") + ';color:white;padding:20px;border-radius:12px;text-align:center">';
  h += '<div style="font-size:2em">🌑</div>';
  h += "<div>AMOLED: <b>" + (isOn ? "BẬT" : "TẮT") + "</b></div>";
  h += '<div style="font-size:0.8em;opacity:0.7">Nền đen hoàn toàn, tiết kiệm pin OLED</div>';
  h += "</div>";
  h += '<button class="st-btn primary" onclick="toggleAMOLED()">🔄 ' + (isOn ? "Tắt" : "Bật") + " AMOLED</button>";
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function toggleAMOLED() {
  var cur = safeGetItem("n4_amoled") === "1";
  safeSetItem("n4_amoled", cur ? "0" : "1");
  document.body.classList.toggle("amoled-theme", !cur);
  if (!cur) document.body.setAttribute("data-theme", "dark");
  showToast(!cur ? "AMOLED ON" : "AMOLED OFF");
  openAMOLED();
}
function closeAMOLED() {
  _clOv("amoled-overlay");
}
function openThemeCreator() {
  var saved = {};
  try {
    saved = JSON.parse(safeGetItem("n4_custom_theme") || "{}");
  } catch (e) {
  }
  var ol = _ov("themecreator-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🎨 Theme Creator</h3><span class="mg-close" onclick="closeThemeCreator()">✕</span></div>';
  h += '<div class="ux-tc-colors">';
  var colors = [
    { key: "primary", label: "Primary", def: "#6c5ce7" },
    { key: "bg", label: "Background", def: "#ffffff" },
    { key: "text", label: "Text", def: "#2d3436" },
    { key: "accent", label: "Accent", def: "#00b894" },
    { key: "card", label: "Card BG", def: "#f8f9fa" }
  ];
  colors.forEach(function(c) {
    h += '<div class="ux-tc-row"><label>' + c.label + "</label>";
    h += '<input type="color" class="ux-tc-color" value="' + (saved[c.key] || c.def) + '" data-key="' + c.key + '" onchange="tcPreview()" /></div>';
  });
  h += "</div>";
  h += '<div class="ux-tc-btns">';
  h += '<button class="st-btn primary" onclick="tcApply()">✅ Áp dụng</button>';
  h += '<button class="st-btn" onclick="tcReset()">🔄 Reset</button>';
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function tcPreview() {
  var inputs = document.querySelectorAll(".ux-tc-color");
  inputs.forEach(function(inp) {
    var key = inp.getAttribute("data-key");
    if (key === "primary") document.documentElement.style.setProperty("--primary", inp.value);
    else if (key === "bg") document.documentElement.style.setProperty("--bg", inp.value);
    else if (key === "text") document.documentElement.style.setProperty("--text", inp.value);
    else if (key === "accent") document.documentElement.style.setProperty("--accent", inp.value);
    else if (key === "card") document.documentElement.style.setProperty("--card-bg", inp.value);
  });
}
function tcApply() {
  var theme = {};
  document.querySelectorAll(".ux-tc-color").forEach(function(inp) {
    theme[inp.getAttribute("data-key")] = inp.value;
  });
  safeSetItem("n4_custom_theme", JSON.stringify(theme));
  showToast("Theme đã lưu!");
}
function tcReset() {
  safeSetItem("n4_custom_theme", "{}");
  ["--primary", "--bg", "--text", "--accent", "--card-bg"].forEach(function(p) {
    document.documentElement.style.removeProperty(p);
  });
  showToast("Reset theme");
  openThemeCreator();
}
function closeThemeCreator() {
  _clOv("themecreator-overlay");
}
export {
  a11yFontSize,
  a11yReset,
  a11yToggle,
  closeAMOLED,
  closeAccessibility,
  closeGestureNav,
  closeKeyboardShortcuts,
  closeLandscape,
  closeMultiWindow,
  closeNotifications,
  closePWAInstall,
  closeThemeCreator,
  closeWidget,
  notifToggle,
  openAMOLED,
  openAccessibility,
  openGestureNav,
  openKeyboardShortcuts,
  openLandscape,
  openMultiWindow,
  openNewWindow,
  openNotifications,
  openPWAInstall,
  openThemeCreator,
  openWidget,
  tcApply,
  tcPreview,
  tcReset,
  toggleAMOLED,
  toggleGesture,
  toggleLandscape,
  triggerPWA
};
