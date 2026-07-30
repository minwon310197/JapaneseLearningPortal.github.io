import { s as safeGetItem, d as safeSetItem, bK as esc, S as STORAGE_KEYS, ab as S, bM as safeCopy } from "./feature-3d-jK3b4Iv-.js";
import { s as showToast } from "./toast-CJdbqLP6.js";
import "./vendor-react-BYxMSDiB.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-Dp6hMoyV.js";
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
function _hdr(title, icon, closeFn) {
  return '<div class="mg-container"><div class="mg-header"><h3>' + icon + " " + esc(title) + '</h3><span class="mg-close" onclick="' + closeFn + '()">✕</span></div>';
}
function _settingToggle(label, key, defaultVal) {
  var val = safeGetItem(key);
  if (val === null) val = defaultVal ? "on" : "off";
  var on = val === "on";
  return '<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0"><span style="font-size:0.85em">' + esc(label) + `</span><button class="st-btn" onclick="settToggle('` + key + `',this)" style="min-width:50px;font-size:0.8em;background:` + (on ? "var(--success)" : "var(--border)") + ";color:" + (on ? "#fff" : "var(--text-muted)") + '">' + (on ? "ON" : "OFF") + "</button></div>";
}
function settToggle(key, btn) {
  var cur = safeGetItem(key) || "off";
  var nv = cur === "on" ? "off" : "on";
  safeSetItem(key, nv);
  btn.textContent = nv === "on" ? "ON" : "OFF";
  btn.style.background = nv === "on" ? "var(--success)" : "var(--border)";
  btn.style.color = nv === "on" ? "#fff" : "var(--text-muted)";
  var _bcMap = { dyslexiaFont: "dyslexia-font", largeTouchTargets: "large-touch", reduceAnim: "reduce-anim", noHover: "no-hover", cbProtanopia: "cb-protanopia", cbDeuteranopia: "cb-deuteranopia", cbTritanopia: "cb-tritanopia", romajiFade: "romaji-fade" };
  if (_bcMap[key]) document.body.classList.toggle(_bcMap[key], nv === "on");
  showToast("Đã " + (nv === "on" ? "bật" : "tắt"));
}
function openQuizDifficulty() {
  var ol = _ov("quizdiff-overlay");
  var cur = safeGetItem("quizDifficulty") || "normal";
  var modes = [
    { id: "easy", label: "🟢 Dễ", desc: "4 đáp án, gợi ý, thời gian dài" },
    { id: "normal", label: "🟡 Trung bình", desc: "Mặc định" },
    { id: "hard", label: "🔴 Khó", desc: "6 đáp án, không gợi ý, thời gian ngắn" },
    { id: "jlpt", label: "🎯 JLPT", desc: "Giống đề thi thật" }
  ];
  var html = _hdr("Quiz Difficulty", "⚙️", "closeQuizDifficulty");
  html += '<div style="padding:8px">';
  modes.forEach(function(m) {
    var active = cur === m.id;
    html += '<div style="padding:10px;background:' + (active ? "var(--accent-light)" : "var(--card-bg)") + ";border:2px solid " + (active ? "var(--accent)" : "transparent") + `;border-radius:6px;margin:4px 0;cursor:pointer" onclick="setQuizDiff('` + m.id + `')">`;
    html += '<div style="font-weight:700">' + m.label + "</div>";
    html += '<div style="font-size:0.8em;color:var(--text-muted)">' + esc(m.desc) + "</div></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function setQuizDiff(mode) {
  safeSetItem("quizDifficulty", mode);
  showToast("Đã chọn: " + mode);
  openQuizDifficulty();
}
function closeQuizDifficulty() {
  _clOv("quizdiff-overlay");
}
function openTimerConfig() {
  var ol = _ov("timerconfig-overlay");
  var cur = parseInt(safeGetItem("gameTimer") || "30", 10);
  var html = _hdr("Timer Settings", "⏱️", "closeTimerConfig");
  html += '<div style="padding:8px">';
  [10, 15, 20, 30, 45, 60, 90].forEach(function(t) {
    var active = cur === t;
    html += '<button class="st-btn' + (active ? " primary" : "") + '" onclick="setTimerDur(' + t + ')" style="margin:3px;min-width:60px">' + t + "s</button>";
  });
  html += '<div style="font-size:0.8em;color:var(--text-muted);margin-top:8px">Áp dụng cho các game có hẹn giờ</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function setTimerDur(t) {
  safeSetItem("gameTimer", String(t));
  showToast(t + "s");
  openTimerConfig();
}
function closeTimerConfig() {
  _clOv("timerconfig-overlay");
}
function openFontSizeConfig() {
  var ol = _ov("fontsize-overlay");
  var html = _hdr("Cỡ chữ chi tiết", "🔤", "closeFontSizeConfig");
  html += '<div style="padding:8px">';
  [{ key: STORAGE_KEYS.FONT_SIZE_KANJI, label: "Kanji", def: "18" }, { key: STORAGE_KEYS.FONT_SIZE_VOCAB, label: "Từ vựng", def: "15" }, { key: STORAGE_KEYS.FONT_SIZE_GRAMMAR, label: "Ngữ pháp", def: "14" }].forEach(function(s) {
    var val = safeGetItem(s.key) || s.def;
    html += '<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0"><span style="font-size:0.85em">' + s.label + "</span>";
    html += `<div style="display:flex;gap:4px;align-items:center"><button class="st-btn" onclick="adjFontSz('` + s.key + `',-1)" style="width:28px;height:28px;padding:0">−</button>`;
    html += '<span id="fz-' + s.key + '" style="width:30px;text-align:center;font-weight:700">' + val + "</span>";
    html += `<button class="st-btn" onclick="adjFontSz('` + s.key + `',1)" style="width:28px;height:28px;padding:0">+</button></div></div>`;
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function adjFontSz(key, delta) {
  var cur = parseInt(safeGetItem(key) || "15", 10);
  var nv = Math.max(10, Math.min(30, cur + delta));
  safeSetItem(key, String(nv));
  var el = document.getElementById("fz-" + key);
  if (el) el.textContent = nv;
}
function closeFontSizeConfig() {
  _clOv("fontsize-overlay");
}
function openCardLayout() {
  var ol = _ov("cardlayout-overlay");
  var cur = safeGetItem("cardLayout") || "grid";
  var html = _hdr("Card Layout", "📐", "closeCardLayout");
  html += '<div style="padding:8px;display:flex;gap:8px">';
  [{ id: "grid", label: "📊 Grid" }, { id: "list", label: "📋 List" }, { id: "compact", label: "📦 Compact" }].forEach(function(l) {
    html += '<button class="st-btn' + (cur === l.id ? " primary" : "") + `" onclick="setCardLayout('` + l.id + `')" style="flex:1">` + l.label + "</button>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function setCardLayout(layout) {
  safeSetItem("cardLayout", layout);
  document.body.classList.remove("card-layout-list", "card-layout-compact");
  if (layout !== "grid") document.body.classList.add("card-layout-" + layout);
  showToast("Layout: " + layout);
  openCardLayout();
}
function closeCardLayout() {
  _clOv("cardlayout-overlay");
}
function openAnswerFormat() {
  var ol = _ov("ansformat-overlay");
  var cur = safeGetItem("answerFormat") || "mcq";
  var html = _hdr("Answer Format", "📝", "closeAnswerFormat");
  html += '<div style="padding:8px">';
  [{ id: "mcq", label: "Trắc nghiệm", desc: "Chọn 1 trong 4 đáp án" }, { id: "type", label: "Nhập tay", desc: "Gõ đáp án bằng keyboard" }, { id: "match", label: "Nối", desc: "Kéo nối từ với nghĩa" }].forEach(function(f) {
    var active = cur === f.id;
    html += '<div style="padding:8px;background:' + (active ? "var(--accent-light)" : "var(--card-bg)") + ";border:2px solid " + (active ? "var(--accent)" : "transparent") + `;border-radius:6px;margin:4px 0;cursor:pointer" onclick="setAnsFormat('` + f.id + `')">`;
    html += '<div style="font-weight:700">' + esc(f.label) + '</div><div style="font-size:0.8em;color:var(--text-muted)">' + esc(f.desc) + "</div></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function setAnsFormat(fmt) {
  safeSetItem("answerFormat", fmt);
  showToast("Đã chọn: " + fmt);
  openAnswerFormat();
}
function closeAnswerFormat() {
  _clOv("ansformat-overlay");
}
function openAutoPlay() {
  var ol = _ov("autoplay-overlay");
  var html = _hdr("Auto-Play", "▶️", "closeAutoPlay");
  html += '<div style="padding:8px">';
  html += _settingToggle("Tự động câu tiếp theo", "autoPlayNext", false);
  html += '<div style="margin-top:8px"><span style="font-size:0.85em">Delay (giây):</span>';
  var del = safeGetItem("autoPlayDelay") || "2";
  [1, 2, 3, 5].forEach(function(d) {
    html += '<button class="st-btn' + (del == d ? " primary" : "") + '" onclick="setAutoDelay(' + d + ')" style="margin:3px">' + d + "s</button>";
  });
  html += "</div></div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function setAutoDelay(d) {
  safeSetItem("autoPlayDelay", String(d));
  showToast(d + "s");
  openAutoPlay();
}
function closeAutoPlay() {
  _clOv("autoplay-overlay");
}
function openReminders() {
  var ol = _ov("reminders-overlay");
  var html = _hdr("Nhắc nhở học", "🔔", "closeReminders");
  html += '<div style="padding:8px">';
  html += _settingToggle("Nhắc nhở hàng ngày", "dailyReminder", false);
  html += '<div style="font-size:0.8em;color:var(--text-muted);margin-top:8px">Cần cho phép Notification trên trình duyệt</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeReminders() {
  _clOv("reminders-overlay");
}
function openSessionPresets() {
  var ol = _ov("session-overlay");
  var html = _hdr("Session Presets", "⏰", "closeSessionPresets");
  html += '<div style="padding:8px;text-align:center">';
  html += '<div style="font-size:0.85em;margin-bottom:8px">Chọn thời lượng học:</div>';
  html += '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">';
  [{ min: 5, label: "☕ 5 phút", desc: "Ôn nhanh" }, { min: 10, label: "📖 10 phút", desc: "Ôn vừa" }, { min: 15, label: "📚 15 phút", desc: "Ôn kỹ" }, { min: 30, label: "💪 30 phút", desc: "Chuyên sâu" }].forEach(function(s) {
    html += '<div style="padding:12px;background:var(--card-bg);border-radius:6px;cursor:pointer" onclick="setSessionLen(' + s.min + ')">';
    html += '<div style="font-size:1.2em">' + s.label + '</div><div style="font-size:0.75em;color:var(--text-muted)">' + s.desc + "</div></div>";
  });
  html += "</div></div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function setSessionLen(min) {
  safeSetItem("sessionLen", String(min));
  showToast(min + " phút");
  closeSessionPresets();
}
function closeSessionPresets() {
  _clOv("session-overlay");
}
function openDataSync() {
  var ol = _ov("datasync-overlay");
  var html = _hdr("Data Sync", "🔄", "closeDataSync");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.85em;color:var(--text-secondary);margin-bottom:8px">Dữ liệu được lưu trên localStorage.</div>';
  html += '<button class="st-btn" onclick="exportData()" style="width:100%;margin:4px 0">📤 Export JSON</button>';
  html += '<button class="st-btn" onclick="importData()" style="width:100%;margin:4px 0">📥 Import JSON</button>';
  html += '<div style="font-size:0.75em;color:var(--text-muted);margin-top:8px">Dùng Export/Import để chuyển dữ liệu giữa các thiết bị.</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeDataSync() {
  _clOv("datasync-overlay");
}
function openOfflineIndicator() {
  var ol = _ov("offline-overlay");
  var online = navigator.onLine;
  var html = _hdr("Trạng thái kết nối", "📡", "closeOfflineIndicator");
  html += '<div style="padding:16px;text-align:center">';
  html += '<div style="font-size:3em">' + (online ? "🟢" : "🔴") + "</div>";
  html += '<div style="font-size:1.3em;font-weight:700;margin:8px 0">' + (online ? "Online" : "Offline") + "</div>";
  html += '<div style="font-size:0.85em;color:var(--text-secondary)">Ứng dụng hoạt động đầy đủ ở chế độ offline.</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeOfflineIndicator() {
  _clOv("offline-overlay");
}
function openSectionReset() {
  var ol = _ov("secreset-overlay");
  var html = _hdr("Reset tiến độ", "🗑️", "closeSectionReset");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.85em;color:var(--danger);margin-bottom:8px">⚠️ Chọn phần muốn reset SRS:</div>';
  S.vocab.forEach(function(sec) {
    html += `<button class="st-btn" onclick="resetSection('vocab',` + sec.id + ')" style="width:100%;margin:2px 0;font-size:0.8em">📖 §' + sec.id + " " + esc(sec.name || "") + "</button>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function resetSection(type, secId) {
  var srs = S.srs || {};
  var sec = S[type].find(function(s) {
    return s.id == secId;
  });
  if (!sec) return;
  var items = type === "vocab" ? sec.entries : sec.entries || sec.patterns || [];
  var count = 0;
  items.forEach(function(e) {
    var key = e.word || e.kanji || e.title;
    if (srs[key]) {
      delete srs[key];
      count++;
    }
  });
  S.srs = srs;
  showToast("Đã reset " + count + " mục");
}
function closeSectionReset() {
  _clOv("secreset-overlay");
}
function openQuizHistory() {
  var ol = _ov("quizhistory-overlay");
  var history = JSON.parse(safeGetItem("quizHistory") || "[]");
  var html = _hdr("Quiz History", "📜", "closeQuizHistory");
  html += '<div style="padding:8px">';
  if (history.length === 0) {
    html += '<div style="text-align:center;padding:20px;color:var(--text-muted)">Chưa có lịch sử quiz</div>';
  } else {
    history.slice(-15).reverse().forEach(function(h) {
      html += '<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:0.85em;border-bottom:1px solid var(--border)">';
      html += "<span>" + esc(h.date || "") + "</span>";
      html += '<span style="font-weight:700;color:' + (h.score / h.total >= 0.7 ? "var(--success)" : "var(--danger)") + '">' + (h.score || 0) + "/" + (h.total || 0) + "</span></div>";
    });
  }
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeQuizHistory() {
  _clOv("quizhistory-overlay");
}
function openFavoriteGames() {
  var ol = _ov("favgames-overlay");
  var favs = JSON.parse(safeGetItem("favGames") || "[]");
  var html = _hdr("Favorite Games", "⭐", "closeFavoriteGames");
  html += '<div style="padding:8px">';
  if (favs.length === 0) {
    html += '<div style="text-align:center;padding:20px;color:var(--text-muted)">Chưa có game yêu thích. Nhấn ⭐ trong Games Hub để thêm!</div>';
  } else {
    favs.forEach(function(g) {
      html += '<div style="display:flex;justify-content:space-between;align-items:center;padding:6px;background:var(--card-bg);border-radius:6px;margin:4px 0">';
      html += '<span style="font-size:0.85em">' + esc(g) + "</span>";
      html += `<button class="st-btn" onclick="removeFavGame('` + esc(g).replace(/'/g, "\\'") + `')" style="font-size:0.75em;padding:2px 6px">✕</button></div>`;
    });
  }
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function removeFavGame(name) {
  var favs = JSON.parse(safeGetItem("favGames") || "[]");
  favs = favs.filter(function(g) {
    return g !== name;
  });
  safeSetItem("favGames", JSON.stringify(favs));
  openFavoriteGames();
}
function closeFavoriteGames() {
  _clOv("favgames-overlay");
}
function openSidebarConfig() {
  var ol = _ov("sidebarconfig-overlay");
  var html = _hdr("Sidebar Config", "📋", "closeSidebarConfig");
  html += '<div style="padding:8px">';
  html += _settingToggle("Hiện Study Tools", "sidebarStudyTools", true);
  html += _settingToggle("Hiện Tính năng mở rộng", "sidebarExtended", true);
  html += _settingToggle("Hiện Phase 2 tools", "sidebarPhase2", true);
  html += _settingToggle("Hiện Phase 3 tools", "sidebarPhase3", true);
  html += '<div style="font-size:0.75em;color:var(--text-muted);margin-top:8px">Cần refresh để áp dụng</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeSidebarConfig() {
  _clOv("sidebarconfig-overlay");
}
function openGestureConfig() {
  var ol = _ov("gestureconfig-overlay");
  var html = _hdr("Gesture Config", "👆", "closeGestureConfig");
  html += '<div style="padding:8px">';
  html += _settingToggle("Swipe trái/phải cho Flashcard", "swipeFlashcard", true);
  html += _settingToggle("Swipe xuống để đóng", "swipeClose", false);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeGestureConfig() {
  _clOv("gestureconfig-overlay");
}
function openAudioConfig() {
  var ol = _ov("audioconfig-overlay");
  var rate = parseFloat(safeGetItem("ttsRate") || "1");
  var html = _hdr("Audio Settings", "🔊", "closeAudioConfig");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.85em;margin-bottom:4px">Tốc độ TTS:</div>';
  [0.5, 0.7, 0.8, 1, 1.2, 1.5].forEach(function(r) {
    html += '<button class="st-btn' + (rate === r ? " primary" : "") + '" onclick="setTTSRate(' + r + ')" style="margin:2px">' + r + "x</button>";
  });
  html += '<div style="margin-top:8px">';
  html += _settingToggle("Auto TTS khi mở thẻ", "autoTTSCard", true);
  html += "</div></div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function setTTSRate(r) {
  safeSetItem("ttsRate", String(r));
  S.ttsRate = r;
  showToast("TTS: " + r + "x");
  openAudioConfig();
}
function closeAudioConfig() {
  _clOv("audioconfig-overlay");
}
function openColorBlind() {
  var ol = _ov("colorblind-overlay");
  var html = _hdr("Color Blind Mode", "🎨", "closeColorBlind");
  html += '<div style="padding:8px">';
  html += _settingToggle("Protanopia mode", "cbProtanopia", false);
  html += _settingToggle("Deuteranopia mode", "cbDeuteranopia", false);
  html += _settingToggle("Tritanopia mode", "cbTritanopia", false);
  html += '<div style="font-size:0.75em;color:var(--text-muted);margin-top:8px">Thay đổi bảng màu để phù hợp hơn</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeColorBlind() {
  _clOv("colorblind-overlay");
}
function openDyslexiaFont() {
  var ol = _ov("dyslexia-overlay");
  var html = _hdr("Dyslexia Font", "🔡", "closeDyslexiaFont");
  html += '<div style="padding:8px">';
  html += _settingToggle("Dùng OpenDyslexic font", "dyslexiaFont", false);
  html += '<div style="font-size:0.8em;color:var(--text-muted);margin-top:8px">Font được thiết kế để dễ đọc hơn cho người dyslexia</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeDyslexiaFont() {
  _clOv("dyslexia-overlay");
}
function openLargeTouch() {
  var ol = _ov("largetouch-overlay");
  var html = _hdr("Touch Target Size", "👆", "closeLargeTouch");
  html += '<div style="padding:8px">';
  html += _settingToggle("Nút lớn (mobile/tablet)", "largeTouchTargets", false);
  html += '<div style="font-size:0.8em;color:var(--text-muted);margin-top:8px">Tăng kích thước nút cho dễ bấm</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeLargeTouch() {
  _clOv("largetouch-overlay");
}
function openAnimToggle() {
  var ol = _ov("animtoggle-overlay");
  var html = _hdr("Animations", "✨", "closeAnimToggle");
  html += '<div style="padding:8px">';
  html += _settingToggle("Giảm animation", "reduceAnim", false);
  html += _settingToggle("Tắt hiệu ứng hover", "noHover", false);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeAnimToggle() {
  _clOv("animtoggle-overlay");
}
function openExportPDF() {
  var ol = _ov("exportpdf-overlay");
  var html = _hdr("Export as PDF", "📄", "closeExportPDF");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.85em;color:var(--text-secondary);margin-bottom:8px">In trang hiện tại dưới dạng PDF:</div>';
  html += '<button class="st-btn primary" onclick="window.print()" style="width:100%">🖨️ Print / Save as PDF</button>';
  html += '<div style="font-size:0.75em;color:var(--text-muted);margin-top:8px">Chọn "Save as PDF" trong hộp thoại in</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeExportPDF() {
  _clOv("exportpdf-overlay");
}
function openShareProgress() {
  var ol = _ov("shareprogress-overlay");
  var srs = S.srs || {};
  var count = Object.keys(srs).length;
  var correct = 0;
  Object.values(srs).forEach(function(e) {
    correct += e.correct || 0;
  });
  var streak = safeGetItem("studyStreak") || "0";
  var html = _hdr("Share Progress", "📸", "closeShareProgress");
  html += '<div style="padding:16px;text-align:center">';
  html += '<canvas id="share-canvas" width="400" height="250" style="width:100%;max-width:400px;border-radius:8px;margin-bottom:12px"></canvas>';
  html += '<div style="display:flex;gap:8px;justify-content:center">';
  html += '<button class="st-btn" onclick="shareDownloadImg()" style="flex:1">💾 Lưu ảnh</button>';
  html += '<button class="st-btn" onclick="shareCopyText()" style="flex:1">📋 Copy text</button>';
  html += "</div></div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
  setTimeout(function() {
    _drawShareCard(count, correct, streak);
  }, 50);
}
function _drawShareCard(count, correct, streak) {
  var c = document.getElementById("share-canvas");
  if (!c) return;
  var ctx = c.getContext("2d");
  var g = ctx.createLinearGradient(0, 0, 400, 250);
  g.addColorStop(0, "#1a1a2e");
  g.addColorStop(1, "#16213e");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 400, 250);
  ctx.strokeStyle = "#e94560";
  ctx.lineWidth = 3;
  ctx.strokeRect(8, 8, 384, 234);
  ctx.fillStyle = "#e94560";
  ctx.font = "bold 24px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("JLPT N4 Progress", 200, 50);
  ctx.font = "32px sans-serif";
  ctx.fillText("⛩️", 200, 90);
  ctx.fillStyle = "#fff";
  ctx.font = "16px sans-serif";
  ctx.fillText(count + " 単語を学んだ", 200, 130);
  ctx.fillText(correct + " 正解", 200, 158);
  ctx.fillStyle = "#e94560";
  ctx.fillText("🔥 " + streak + " 日連続", 200, 186);
  ctx.fillStyle = "#aaa";
  ctx.font = "11px sans-serif";
  ctx.fillText((/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN"), 200, 230);
}
function shareDownloadImg() {
  var c = document.getElementById("share-canvas");
  if (!c) return;
  var link = document.createElement("a");
  link.download = "jlpt-n4-progress.png";
  link.href = c.toDataURL("image/png");
  link.click();
  showToast("Đã lưu ảnh!");
}
function shareCopyText() {
  var srs = S.srs || {};
  var count = Object.keys(srs).length;
  var correct = 0;
  Object.values(srs).forEach(function(e) {
    correct += e.correct || 0;
  });
  var text = "JLPT N4 Progress: " + count + " words, " + correct + " correct, streak " + (safeGetItem("studyStreak") || "0") + " days!";
  safeCopy(text).then(function() {
    showToast("Copied!");
  });
}
function closeShareProgress() {
  _clOv("shareprogress-overlay");
}
var DEFAULT_SHORTCUTS = {
  furigana: "f",
  romaji: "r",
  lookup: "ctrl+k",
  flashFlip: " ",
  flashPrev: "arrowleft",
  flashNext: "arrowright"
};
var SHORTCUT_LABELS = {
  furigana: "Toggle Furigana",
  romaji: "Toggle Romaji",
  lookup: "Tra nhanh",
  flashFlip: "Lật flashcard",
  flashPrev: "Card trước",
  flashNext: "Card sau"
};
function _getShortcuts() {
  try {
    return Object.assign({}, DEFAULT_SHORTCUTS, JSON.parse(safeGetItem("customShortcuts") || "{}"));
  } catch (e) {
    return Object.assign({}, DEFAULT_SHORTCUTS);
  }
}
function openShortcutEditor() {
  var ol = _ov("shortcuted-overlay");
  var sc = _getShortcuts();
  var html = _hdr("Keyboard Shortcuts", "⌨️", "closeShortcutEditor");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.8em;color:var(--text-muted);margin-bottom:6px">Phím cố định:</div>';
  [{ key: "1-6", action: "Chuyển tab" }, { key: "Esc", action: "Đóng overlay" }].forEach(function(s) {
    html += '<div style="display:flex;justify-content:space-between;padding:3px 0;font-size:0.85em"><code style="background:var(--border);padding:1px 6px;border-radius:3px">' + s.key + "</code><span>" + esc(s.action) + "</span></div>";
  });
  html += '<div style="font-size:0.8em;color:var(--text-muted);margin:8px 0 6px">Phím tùy chỉnh (nhấn ô để đổi):</div>';
  Object.keys(SHORTCUT_LABELS).forEach(function(id) {
    var keyLabel = (sc[id] || "").replace("arrowleft", "←").replace("arrowright", "→").replace(" ", "Space").replace("ctrl+", "Ctrl+");
    html += '<div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0;font-size:0.85em">';
    html += "<span>" + esc(SHORTCUT_LABELS[id]) + "</span>";
    html += '<button class="st-btn" id="sc-' + id + `" onclick="captureShortcut('` + id + `')" style="min-width:80px;font-family:monospace;font-size:0.85em">` + esc(keyLabel) + "</button>";
    html += "</div>";
  });
  html += '<button class="st-btn" onclick="resetShortcuts()" style="margin-top:10px;width:100%;font-size:0.8em">🔄 Khôi phục mặc định</button>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
var _captureId = null;
function captureShortcut(id) {
  _captureId = id;
  var btn = document.getElementById("sc-" + id);
  if (btn) {
    btn.textContent = "... nhấn phím ...";
    btn.style.background = "var(--accent)";
    btn.style.color = "#fff";
  }
  function handler(e) {
    e.preventDefault();
    e.stopPropagation();
    document.removeEventListener("keydown", handler, true);
    if (!_captureId) return;
    var key = e.key.toLowerCase();
    if (e.ctrlKey && key !== "control") key = "ctrl+" + key;
    saveShortcut(_captureId, key);
    _captureId = null;
  }
  document.addEventListener("keydown", handler, true);
}
function saveShortcut(id, key) {
  var sc = _getShortcuts();
  sc[id] = key;
  safeSetItem("customShortcuts", JSON.stringify(sc));
  showToast("Đã lưu: " + SHORTCUT_LABELS[id] + " → " + key);
  openShortcutEditor();
}
function resetShortcuts() {
  safeSetItem("customShortcuts", "{}");
  showToast("Đã khôi phục phím tắt mặc định");
  openShortcutEditor();
}
function closeShortcutEditor() {
  _clOv("shortcuted-overlay");
}
function openThemeScheduler() {
  var ol = _ov("themesched-overlay");
  var html = _hdr("Theme Scheduler", "🕐", "closeThemeScheduler");
  html += '<div style="padding:8px">';
  html += _settingToggle("Tự đổi theme theo giờ", "autoTheme", false);
  html += '<div style="font-size:0.85em;color:var(--text-muted);margin-top:8px">6:00-18:00 → Light<br>18:00-6:00 → Dark</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeThemeScheduler() {
  _clOv("themesched-overlay");
}
function openWidgetStart() {
  var ol = _ov("widgetstart-overlay");
  var html = _hdr("Quick Start", "🚀", "closeWidgetStart");
  html += '<div style="padding:8px;text-align:center">';
  html += '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">';
  html += '<div style="padding:12px;background:var(--card-bg);border-radius:6px;cursor:pointer" onclick="openMorningQuiz();closeWidgetStart()"><div style="font-size:1.5em">🌅</div><div style="font-size:0.8em">Morning Quiz</div></div>';
  html += '<div style="padding:12px;background:var(--card-bg);border-radius:6px;cursor:pointer" onclick="openWeakDrill();closeWidgetStart()"><div style="font-size:1.5em">🎯</div><div style="font-size:0.8em">Weak Drill</div></div>';
  html += '<div style="padding:12px;background:var(--card-bg);border-radius:6px;cursor:pointer" onclick="openAudioFirstCards();closeWidgetStart()"><div style="font-size:1.5em">🔊</div><div style="font-size:0.8em">Audio Cards</div></div>';
  html += '<div style="padding:12px;background:var(--card-bg);border-radius:6px;cursor:pointer" onclick="openSpacedCards();closeWidgetStart()"><div style="font-size:1.5em">📊</div><div style="font-size:0.8em">SRS Cards</div></div>';
  html += "</div></div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeWidgetStart() {
  _clOv("widgetstart-overlay");
}
function openStudyGoalSetting() {
  var ol = _ov("studygoal-overlay");
  var goal = safeGetItem("dailyGoal") || "20";
  var html = _hdr("Study Goals", "🎯", "closeStudyGoalSetting");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.85em;margin-bottom:8px">Mục tiêu hàng ngày (số từ ôn):</div>';
  [5, 10, 20, 30, 50].forEach(function(g) {
    html += '<button class="st-btn' + (goal == g ? " primary" : "") + '" onclick="setDailyGoal(' + g + ')" style="margin:3px">' + g + "</button>";
  });
  var log = JSON.parse(safeGetItem("dailyLog") || "{}");
  var today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  var todayCount = (log[today] || {}).count || 0;
  var pct = Math.min(100, Math.round(todayCount / parseInt(goal, 10) * 100));
  html += '<div style="margin-top:12px"><div style="display:flex;justify-content:space-between;font-size:0.85em"><span>Hôm nay</span><span>' + todayCount + "/" + goal + "</span></div>";
  html += '<div style="height:8px;background:var(--border);border-radius:4px;overflow:hidden"><div style="width:' + pct + '%;height:100%;background:var(--accent)"></div></div></div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function setDailyGoal(g) {
  safeSetItem("dailyGoal", String(g));
  showToast("Goal: " + g + " từ/ngày");
  openStudyGoalSetting();
}
function closeStudyGoalSetting() {
  _clOv("studygoal-overlay");
}
function openStreakReward() {
  var ol = _ov("streakrew-overlay");
  var streak = parseInt(safeGetItem("studyStreak") || "0", 10);
  var html = _hdr("Streak Rewards", "🏆", "closeStreakReward");
  html += '<div style="padding:16px;text-align:center">';
  html += '<div style="font-size:3em">' + (streak >= 30 ? "💎" : streak >= 7 ? "🏆" : streak >= 3 ? "🔥" : "🌱") + "</div>";
  html += '<div style="font-size:2em;font-weight:700;color:var(--accent)">' + streak + " ngày</div>";
  var rewards = [
    { days: 3, reward: "🔥 Bronze Streak", unlocked: streak >= 3 },
    { days: 7, reward: "🏆 Silver Streak", unlocked: streak >= 7 },
    { days: 14, reward: "⭐ Gold Streak", unlocked: streak >= 14 },
    { days: 30, reward: "💎 Diamond Streak", unlocked: streak >= 30 }
  ];
  html += '<div style="margin-top:12px">';
  rewards.forEach(function(r) {
    html += '<div style="padding:6px;margin:3px 0;background:var(--card-bg);border-radius:6px;opacity:' + (r.unlocked ? "1" : "0.4") + '">';
    html += "<span>" + r.reward + '</span> <span style="font-size:0.8em;color:var(--text-muted)">(' + r.days + " ngày)</span>";
    html += " " + (r.unlocked ? "✅" : "🔒") + "</div>";
  });
  html += "</div></div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeStreakReward() {
  _clOv("streakrew-overlay");
}
function openSoundEffects() {
  var ol = _ov("soundfx-overlay");
  var html = _hdr("Sound Effects", "🔔", "closeSoundEffects");
  html += '<div style="padding:8px">';
  html += _settingToggle("Hiệu ứng âm thanh UI", "soundFX", true);
  html += _settingToggle("Âm thanh khi đúng", "soundCorrect", true);
  html += _settingToggle("Âm thanh khi sai", "soundWrong", true);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeSoundEffects() {
  _clOv("soundfx-overlay");
}
function openContentFilter() {
  var ol = _ov("contentfilter-overlay");
  var html = _hdr("Content Filter", "🔍", "closeContentFilter");
  html += '<div style="padding:8px">';
  html += _settingToggle("Chỉ hiện N4 mới (ẩn N5)", "hideN5", false);
  html += _settingToggle("Ẩn từ đã thành thạo", "hideMastered", false);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeContentFilter() {
  _clOv("contentfilter-overlay");
}
function openRomajiFade() {
  var ol = _ov("romajifade-overlay");
  var html = _hdr("Romaji Fade", "🔤", "closeRomajiFade");
  html += '<div style="padding:8px">';
  html += _settingToggle("Romaji mờ dần khi học", "romajiFade", false);
  html += '<div style="font-size:0.8em;color:var(--text-muted);margin-top:8px">Romaji sẽ hiện ban đầu rồi mờ dần đi theo thời gian. Giúp bạn dần dần bỏ phụ thuộc romaji.</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeRomajiFade() {
  _clOv("romajifade-overlay");
}
export {
  adjFontSz,
  captureShortcut,
  closeAnimToggle,
  closeAnswerFormat,
  closeAudioConfig,
  closeAutoPlay,
  closeCardLayout,
  closeColorBlind,
  closeContentFilter,
  closeDataSync,
  closeDyslexiaFont,
  closeExportPDF,
  closeFavoriteGames,
  closeFontSizeConfig,
  closeGestureConfig,
  closeLargeTouch,
  closeOfflineIndicator,
  closeQuizDifficulty,
  closeQuizHistory,
  closeReminders,
  closeRomajiFade,
  closeSectionReset,
  closeSessionPresets,
  closeShareProgress,
  closeShortcutEditor,
  closeSidebarConfig,
  closeSoundEffects,
  closeStreakReward,
  closeStudyGoalSetting,
  closeThemeScheduler,
  closeTimerConfig,
  closeWidgetStart,
  openAnimToggle,
  openAnswerFormat,
  openAudioConfig,
  openAutoPlay,
  openCardLayout,
  openColorBlind,
  openContentFilter,
  openDataSync,
  openDyslexiaFont,
  openExportPDF,
  openFavoriteGames,
  openFontSizeConfig,
  openGestureConfig,
  openLargeTouch,
  openOfflineIndicator,
  openQuizDifficulty,
  openQuizHistory,
  openReminders,
  openRomajiFade,
  openSectionReset,
  openSessionPresets,
  openShareProgress,
  openShortcutEditor,
  openSidebarConfig,
  openSoundEffects,
  openStreakReward,
  openStudyGoalSetting,
  openThemeScheduler,
  openTimerConfig,
  openWidgetStart,
  removeFavGame,
  resetSection,
  resetShortcuts,
  saveShortcut,
  setAnsFormat,
  setAutoDelay,
  setCardLayout,
  setDailyGoal,
  setQuizDiff,
  setSessionLen,
  setTTSRate,
  setTimerDur,
  settToggle,
  shareCopyText,
  shareDownloadImg
};
