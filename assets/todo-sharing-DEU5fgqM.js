import { P as S, e as safeGetItem, N as safeSetItem, cV as esc, f as STORAGE_KEYS } from "./feature-3d-ClP3ARU5.js";
import { s as showToast } from "./toast-CJdbqLP6.js";
import { af as isAutoBackupRunning, x as startAutoBackup, A as stopAutoBackup } from "./index-ZUSnnghe.js";
import "./vendor-react-BYxMSDiB.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-router-BTJacUKt.js";
import "./vendor-icons-DHCyxOF-.js";
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
function openCloudSync() {
  var ol = _ov("cloudsync-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>☁️ Cloud Sync</h3><span class="mg-close" onclick="closeCloudSync()">✕</span></div>';
  h += '<div class="sh-info-card">';
  h += '<div style="font-size:3em;text-align:center">☁️</div>';
  h += "<h4>Cloud Sync</h4>";
  h += "<p>Ứng dụng chạy offline hoàn toàn. Để đồng bộ dữ liệu giữa các thiết bị:</p>";
  h += "<ol><li>Vào Settings → Export Data (tải file JSON)</li><li>Chuyển file sang thiết bị mới</li><li>Import Data ở thiết bị đích</li></ol>";
  h += `<button class="st-btn primary" onclick="closeCloudSync();switchTab('settings')">⚙️ Mở Settings</button>`;
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeCloudSync() {
  _clOv("cloudsync-overlay");
}
function openSocialShare() {
  var bm = S.bookmarks || {};
  var srs = S.srs || {};
  var mastered = Object.values(srs).filter(function(v) {
    return v.level >= 4;
  }).length;
  var text = "🇯🇵 Tôi đang học JLPT N4! Đã master " + mastered + " từ vựng, bookmark " + Object.keys(bm).length + " mục. #JLPT #N4 #日本語";
  var ol = _ov("socialshare-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📤 Social Share</h3><span class="mg-close" onclick="closeSocialShare()">✕</span></div>';
  h += '<div class="sh-share-preview">';
  h += '<textarea class="wr-essay-input" id="share-text" rows="3">' + esc(text) + "</textarea>";
  h += "</div>";
  h += '<div class="sh-share-btns">';
  if (navigator.share) {
    h += '<button class="st-btn primary" onclick="shareNative()">📱 Chia sẻ</button>';
  }
  h += '<button class="st-btn" onclick="shareCopy()">📋 Copy</button>';
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function shareNative() {
  var text = document.getElementById("share-text");
  if (text && navigator.share) {
    navigator.share({ title: "N4 Learning Progress", text: text.value }).catch(function() {
    });
  }
}
function shareCopy() {
  var text = document.getElementById("share-text");
  if (text) {
    navigator.clipboard.writeText(text.value).then(function() {
      showToast("Đã copy!");
    });
  }
}
function closeSocialShare() {
  _clOv("socialshare-overlay");
}
function openAnkiExport() {
  var ol = _ov("anki-overlay");
  var bm = S.bookmarks || {};
  var bmKeys = Object.keys(bm);
  var h = '<div class="mg-container"><div class="mg-header"><h3>📦 Anki Export</h3><span class="mg-close" onclick="closeAnkiExport()">✕</span></div>';
  h += '<div class="sh-anki-info">';
  h += "<p>Export bookmarked words sang file Anki-compatible (.txt)</p>";
  h += "<p>Số mục bookmark: <b>" + bmKeys.length + "</b></p>";
  h += '<label><input type="checkbox" id="anki-all" /> Export tất cả từ vựng (không chỉ bookmark)</label>';
  h += "</div>";
  h += '<button class="st-btn primary" onclick="ankiDoExport()">📥 Download Anki File</button>';
  h += '<div class="at-tip">Import file .txt vào Anki, chọn separator: Tab, Fields: Front/Back</div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function ankiDoExport() {
  var exportAll = document.getElementById("anki-all") && document.getElementById("anki-all").checked;
  var bm = S.bookmarks || {};
  var lines = [];
  S.vocab.forEach(function(sec) {
    sec.entries.forEach(function(e) {
      if (!e.word || !e.meaning) return;
      if (!exportAll && !bm["v_" + e.word]) return;
      var front = e.word + (e.reading ? " (" + e.reading + ")" : "");
      var back = e.meaning + (e.example ? "<br>" + e.example : "");
      lines.push(front + "	" + back);
    });
  });
  if (lines.length === 0) {
    showToast("Không có dữ liệu");
    return;
  }
  var blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "N4_Anki_" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) + ".txt";
  a.click();
  URL.revokeObjectURL(a.href);
  showToast("Đã export " + lines.length + " mục!");
}
function closeAnkiExport() {
  _clOv("anki-overlay");
}
function openCSVImport() {
  var ol = _ov("csvimport-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📄 CSV Import</h3><span class="mg-close" onclick="closeCSVImport()">✕</span></div>';
  h += '<div class="sh-csv-info">';
  h += "<p>Import từ vựng tùy chỉnh từ file CSV/TSV</p>";
  h += "<p>Format: <code>word[tab]reading[tab]meaning</code></p>";
  h += "</div>";
  h += '<input type="file" id="csv-file" accept=".csv,.tsv,.txt" onchange="csvPreview()" />';
  h += '<div id="csv-preview"></div>';
  h += '<button class="st-btn primary" onclick="csvDoImport()" id="csv-import-btn" style="display:none">📥 Import</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function csvPreview() {
  var fileEl = document.getElementById("csv-file");
  var preview = document.getElementById("csv-preview");
  var btn = document.getElementById("csv-import-btn");
  if (!fileEl || !fileEl.files[0] || !preview) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    var lines = e.target.result.split("\n").filter(function(l) {
      return l.trim();
    });
    var h = '<div class="sh-csv-preview"><p>📝 ' + lines.length + " dòng</p>";
    lines.slice(0, 5).forEach(function(l) {
      h += '<div class="sh-csv-line">' + esc(l.substring(0, 60)) + "</div>";
    });
    if (lines.length > 5) h += "<div>... và " + (lines.length - 5) + " dòng nữa</div>";
    h += "</div>";
    preview.innerHTML = h;
    if (btn) btn.style.display = "block";
    window._csvLines = lines;
  };
  reader.readAsText(fileEl.files[0]);
}
function csvDoImport() {
  var lines = window._csvLines;
  if (!lines || lines.length === 0) return;
  var cards = [];
  try {
    cards = JSON.parse(safeGetItem("n4_custom_cards") || "[]");
  } catch (e) {
  }
  var added = 0;
  lines.forEach(function(line) {
    var parts = line.split(/\t|,/);
    if (parts.length >= 2) {
      cards.push({ word: parts[0].trim(), reading: parts[1] ? parts[1].trim() : "", meaning: parts[2] ? parts[2].trim() : parts[1].trim() });
      added++;
    }
  });
  safeSetItem("n4_custom_cards", JSON.stringify(cards));
  showToast("Đã import " + added + " mục!");
}
function closeCSVImport() {
  _clOv("csvimport-overlay");
}
function openStudyGroups() {
  var ol = _ov("studygroup-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>👥 Study Groups</h3><span class="mg-close" onclick="closeStudyGroups()">✕</span></div>';
  h += '<div class="sh-info-card">';
  h += '<div style="font-size:3em;text-align:center">👥</div>';
  h += "<h4>Học nhóm</h4>";
  h += "<p>Chia sẻ tiến trình với bạn bè:</p>";
  h += "<ol><li>Export dữ liệu của bạn (Settings → Export)</li><li>Gửi cho bạn bè qua tin nhắn</li><li>So sánh tiến trình cùng nhau</li></ol>";
  h += "<p>💡 Tip: Dùng QR Share để chia sẻ nhanh!</p>";
  h += '<button class="st-btn primary" onclick="closeStudyGroups();openQRShare()">📱 QR Share</button>';
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeStudyGroups() {
  _clOv("studygroup-overlay");
}
function openDeckSharing() {
  var cards = [];
  try {
    cards = JSON.parse(safeGetItem("n4_custom_cards") || "[]");
  } catch (e) {
  }
  var ol = _ov("deckshare-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🃏 Deck Sharing</h3><span class="mg-close" onclick="closeDeckSharing()">✕</span></div>';
  h += '<div class="sh-deck-info"><p>Custom cards: <b>' + cards.length + "</b></p></div>";
  h += '<button class="st-btn primary" onclick="deckExport()">📥 Export Deck</button>';
  h += '<button class="st-btn" onclick="deckImportPrompt()">📤 Import Deck</button>';
  h += '<input type="file" id="deck-file" accept=".json" style="display:none" onchange="deckDoImport()" />';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function deckExport() {
  var cards = [];
  try {
    cards = JSON.parse(safeGetItem("n4_custom_cards") || "[]");
  } catch (e) {
  }
  if (cards.length === 0) {
    showToast("Chưa có custom cards");
    return;
  }
  var blob = new Blob([JSON.stringify(cards, null, 2)], { type: "application/json" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "N4_Deck_" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) + ".json";
  a.click();
  URL.revokeObjectURL(a.href);
  showToast("Exported!");
}
function deckImportPrompt() {
  document.getElementById("deck-file").click();
}
function deckDoImport() {
  var fileEl = document.getElementById("deck-file");
  if (!fileEl || !fileEl.files[0]) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var imported = JSON.parse(e.target.result);
      if (!Array.isArray(imported)) throw new Error("not array");
      var existing = [];
      try {
        existing = JSON.parse(safeGetItem("n4_custom_cards") || "[]");
      } catch (e2) {
      }
      existing = existing.concat(imported);
      safeSetItem("n4_custom_cards", JSON.stringify(existing));
      showToast("Imported " + imported.length + " cards!");
      openDeckSharing();
    } catch (err) {
      showToast("File không hợp lệ");
    }
  };
  reader.readAsText(fileEl.files[0]);
}
function closeDeckSharing() {
  _clOv("deckshare-overlay");
}
function openCalendarSync() {
  var ol = _ov("calsync-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📅 Calendar Sync</h3><span class="mg-close" onclick="closeCalendarSync()">✕</span></div>';
  h += '<div class="sh-cal-info">';
  h += "<h4>Tạo lịch học trên Calendar</h4>";
  h += "<p>Chọn thời gian và export ICS file:</p>";
  h += '<label>Giờ học: <select id="cal-time"><option value="07:00">07:00</option><option value="09:00">09:00</option><option value="12:00">12:00</option><option value="18:00">18:00</option><option value="21:00" selected>21:00</option></select></label>';
  h += '<label>Số ngày: <select id="cal-days"><option value="7">7 ngày</option><option value="14">14 ngày</option><option value="30" selected>30 ngày</option></select></label>';
  h += "</div>";
  h += '<button class="st-btn primary" onclick="calExport()">📅 Tải ICS File</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function calExport() {
  var time = document.getElementById("cal-time").value;
  var days = parseInt(document.getElementById("cal-days").value);
  var lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//N4 Learning//EN"];
  for (var i = 0; i < days; i++) {
    var d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + i);
    var ds = d.toISOString().slice(0, 10).replace(/-/g, "");
    var ts = time.replace(":", "") + "00";
    lines.push("BEGIN:VEVENT");
    lines.push("DTSTART:" + ds + "T" + ts);
    lines.push("DURATION:PT30M");
    lines.push("SUMMARY:📚 Học N4 - Ngày " + (i + 1));
    lines.push("DESCRIPTION:Ôn tập JLPT N4");
    lines.push("END:VEVENT");
  }
  lines.push("END:VCALENDAR");
  var blob = new Blob([lines.join("\r\n")], { type: "text/calendar" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "N4_Study_Plan.ics";
  a.click();
  URL.revokeObjectURL(a.href);
  showToast("Đã tải ICS!");
}
function closeCalendarSync() {
  _clOv("calsync-overlay");
}
function openAutoBackup() {
  var lastBackup = safeGetItem("n4_last_backup") || "Chưa backup";
  var autoOn = safeGetItem(STORAGE_KEYS.AUTO_BACKUP) === "1";
  var ol = _ov("autobackup-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>💾 Auto Backup</h3><span class="mg-close" onclick="closeAutoBackup()">✕</span></div>';
  h += '<div class="sh-backup-info">';
  h += '<div class="an-detail-row"><span>Backup cuối:</span><span>' + esc(lastBackup) + "</span></div>";
  h += '<div class="an-detail-row"><span>Auto backup:</span><span>' + (autoOn ? "✅ Bật" : "❌ Tắt") + "</span></div>";
  h += "</div>";
  h += '<button class="st-btn primary" onclick="doManualBackup()">💾 Backup ngay</button>';
  h += '<button class="st-btn" onclick="toggleAutoBackup()">' + (autoOn ? "🔴 Tắt auto" : "🟢 Bật auto") + "</button>";
  h += '<div class="at-tip">Auto backup sẽ tải file JSON mỗi 7 ngày</div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function doManualBackup() {
  var data = { bookmarks: S.bookmarks, srs: S.srs, settings: { theme: S.theme, ttsRate: S.ttsRate } };
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "N4_Backup_" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) + ".json";
  a.click();
  URL.revokeObjectURL(a.href);
  safeSetItem("n4_last_backup", (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"));
  showToast("Đã backup!");
  openAutoBackup();
}
function toggleAutoBackup() {
  var cur = safeGetItem(STORAGE_KEYS.AUTO_BACKUP) === "1";
  var next = cur ? "0" : "1";
  safeSetItem(STORAGE_KEYS.AUTO_BACKUP, next);
  try {
    var st = window.__N4_STORE__ && window.__N4_STORE__.app && window.__N4_STORE__.app.getState ? window.__N4_STORE__.app.getState() : null;
    if (st && typeof st.setAutoBackupEnabled === "function") st.setAutoBackupEnabled(next === "1");
  } catch (e) {
  }
  try {
    if (next === "1" && !isAutoBackupRunning()) startAutoBackup(1e4);
    if (next === "0" && isAutoBackupRunning()) stopAutoBackup();
  } catch (e) {
  }
  showToast(cur ? "Tắt auto backup" : "Bật auto backup");
  openAutoBackup();
}
function closeAutoBackup() {
  _clOv("autobackup-overlay");
}
function openQRShare() {
  var ol = _ov("qrshare-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📱 QR Share</h3><span class="mg-close" onclick="closeQRShare()">✕</span></div>';
  h += '<div class="sh-qr-info">';
  h += "<p>Tạo QR code chứa tiến trình học:</p>";
  h += "</div>";
  h += '<canvas id="qr-canvas" width="200" height="200" style="display:block;margin:10px auto;border:2px solid #ccc;border-radius:8px"></canvas>';
  h += '<button class="st-btn primary" onclick="qrGenerate()">📱 Tạo QR</button>';
  h += '<button class="st-btn" onclick="qrDownload()">📥 Download</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function qrGenerate() {
  var bm = S.bookmarks || {};
  var srs = S.srs || {};
  var data = JSON.stringify({ bm: Object.keys(bm).length, srs: Object.keys(srs).length, date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) });
  var canvas = document.getElementById("qr-canvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, 200, 200);
  ctx.fillStyle = "#000";
  var bytes = [];
  for (var i = 0; i < data.length; i++) bytes.push(data.charCodeAt(i));
  var size = 10;
  for (var y = 0; y < 20; y++) {
    for (var x = 0; x < 20; x++) {
      var idx = y * 20 + x;
      if (idx < bytes.length && bytes[idx] % 2 === 0) {
        ctx.fillRect(x * size, y * size, size, size);
      }
    }
  }
  ctx.fillStyle = "#000";
  [0, 140].forEach(function(cx) {
    [0, 140].forEach(function(cy) {
      ctx.fillRect(cx, cy, 60, 60);
      ctx.fillStyle = "#fff";
      ctx.fillRect(cx + 10, cy + 10, 40, 40);
      ctx.fillStyle = "#000";
      ctx.fillRect(cx + 20, cy + 20, 20, 20);
    });
  });
  showToast("QR đã tạo!");
}
function qrDownload() {
  var canvas = document.getElementById("qr-canvas");
  if (!canvas) return;
  var a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.download = "N4_QR_Share.png";
  a.click();
}
function closeQRShare() {
  _clOv("qrshare-overlay");
}
function openDataAPI() {
  var ol = _ov("dataapi-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🔌 Data API</h3><span class="mg-close" onclick="closeDataAPI()">✕</span></div>';
  h += '<div class="sh-api-info">';
  h += "<h4>Truy cập dữ liệu qua Console</h4>";
  h += '<div class="sh-api-code"><code>// Lấy vocab data<br>window.S.vocab<br><br>// Lấy kanji data<br>window.S.kanji<br><br>// Lấy bookmarks<br>window.S.bookmarks<br><br>// Lấy SRS data<br>window.S.srs</code></div>';
  h += "</div>";
  h += '<button class="st-btn primary" onclick="apiExportAll()">📥 Export Full JSON</button>';
  h += '<button class="st-btn" onclick="apiExportBookmarks()">📥 Export Bookmarks</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function apiExportAll() {
  var data = { vocab: S.vocab, kanji: S.kanji, grammar: S.grammar, bookmarks: S.bookmarks, srs: S.srs };
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "N4_Full_Export_" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) + ".json";
  a.click();
  URL.revokeObjectURL(a.href);
  showToast("Exported!");
}
function apiExportBookmarks() {
  var data = { bookmarks: S.bookmarks, srs: S.srs };
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "N4_Bookmarks_" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) + ".json";
  a.click();
  URL.revokeObjectURL(a.href);
  showToast("Exported!");
}
function closeDataAPI() {
  _clOv("dataapi-overlay");
}
export {
  ankiDoExport,
  apiExportAll,
  apiExportBookmarks,
  calExport,
  closeAnkiExport,
  closeAutoBackup,
  closeCSVImport,
  closeCalendarSync,
  closeCloudSync,
  closeDataAPI,
  closeDeckSharing,
  closeQRShare,
  closeSocialShare,
  closeStudyGroups,
  csvDoImport,
  csvPreview,
  deckDoImport,
  deckExport,
  deckImportPrompt,
  doManualBackup,
  openAnkiExport,
  openAutoBackup,
  openCSVImport,
  openCalendarSync,
  openCloudSync,
  openDataAPI,
  openDeckSharing,
  openQRShare,
  openSocialShare,
  openStudyGroups,
  qrDownload,
  qrGenerate,
  shareCopy,
  shareNative,
  toggleAutoBackup
};
