import { s as safeGetItem, af as _isIOS, ag as forvoUrl, ah as safeGetObjectItem, ai as S, d as safeSetItem, aj as jishoUrl, ak as safeSetObjectItem } from "./index-BEJSIlFS.js";
import { s as showToast } from "./toast-Dwy3w2e2.js";
import "./vendor-react-BUL8WuXG.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./legacy-loader-gyvSYPc3.js";
import "./world-tool-destinations-BAVvWbat.js";
/* empty css               */
function getBookmarks() {
  return safeGetObjectItem("n4-bm");
}
function setBookmarks(bm) {
  var _a;
  safeSetObjectItem("n4-bm", bm);
  if ((_a = window.__N4_STORE__) == null ? void 0 : _a.learning) {
    const reactBm = {};
    for (const k in bm) if (bm[k]) reactBm[k] = true;
    window.__N4_STORE__.learning.setState({ bookmarks: reactBm });
  }
  window.dispatchEvent(new CustomEvent("n4-bookmarks-changed"));
}
function isBookmarked(key) {
  return !!getBookmarks()[key];
}
function toggleBookmark(key, el) {
  const bm = getBookmarks();
  if (bm[key]) {
    delete bm[key];
    showToast("☆ Đã bỏ đánh dấu");
  } else {
    bm[key] = Date.now();
    showToast("★ Đã đánh dấu");
  }
  setBookmarks(bm);
  if (el) {
    el.classList.toggle("active", !!bm[key]);
    el.textContent = bm[key] ? "★" : "☆";
  }
  if (window.updateProgress) window.updateProgress();
  if (window.updateBookmarkBadge) window.updateBookmarkBadge();
}
function bmKey(type, word) {
  return type + ":" + word;
}
function bmBtn(type, word) {
  const k = bmKey(type, word);
  const active = isBookmarked(k);
  return '<button class="icon-btn bm-btn' + (active ? " active" : "") + `" onclick="toggleBookmark('` + k.replace(/'/g, "\\'") + `',this)" title="Đánh dấu">` + (active ? "★" : "☆") + "</button>";
}
function ttsBtn(text) {
  const clean = (text || "").replace(/'/g, "\\'").replace(/"/g, "&quot;");
  return `<button class="icon-btn tts-btn" onclick="speakBtn(this,'` + clean + `')" title="Phát âm">🔊</button>`;
}
function jishoBtn(word) {
  return '<a class="icon-btn" href="' + jishoUrl(word) + '" target="_blank" rel="noopener" title="Tra Jisho.org">📖</a>';
}
function forvoBtn(word) {
  return '<a class="icon-btn" href="' + forvoUrl(word) + '" target="_blank" rel="noopener" title="Nghe phát âm bản ngữ (Forvo)">🗣️</a>';
}
const SRS_INTERVALS = [0, 12 * 36e5, 24 * 36e5, 3 * 24 * 36e5, 7 * 24 * 36e5, 14 * 24 * 36e5];
function getSRS() {
  return safeGetObjectItem("n4-srs");
}
function setSRS(d) {
  safeSetObjectItem("n4-srs", d);
  window.dispatchEvent(new CustomEvent("n4-srs-changed"));
}
function updateSRS(key, remembered) {
  const srs = getSRS();
  const cur = srs[key] || { level: 0, nextReview: 0, correct: 0, wrong: 0 };
  if (remembered) {
    cur.correct = (cur.correct || 0) + 1;
    cur.level = Math.min(cur.level + 1, SRS_INTERVALS.length - 1);
  } else {
    cur.wrong = (cur.wrong || 0) + 1;
    const overdue = Date.now() - cur.nextReview;
    if (cur.level > 0 && cur.nextReview > 0 && overdue > SRS_INTERVALS[cur.level] * 2) {
      cur.level = Math.max(0, cur.level - 2);
    } else {
      cur.level = Math.max(0, cur.level - 1);
    }
  }
  cur.nextReview = Date.now() + SRS_INTERVALS[cur.level];
  srs[key] = cur;
  setSRS(srs);
  return cur;
}
function srsLevelLabel(level) {
  const labels = ["Mới", "12h", "1 ngày", "3 ngày", "7 ngày", "14 ngày"];
  return labels[level] || labels[0];
}
function countBookmarks() {
  const bm = getBookmarks();
  return Object.keys(bm).length;
}
function exportData() {
  const data = {};
  const bm = safeGetItem("n4-bm");
  const srs = safeGetItem("n4-srs");
  const theme = safeGetItem("n4-theme");
  const fs = safeGetItem("n4-fs");
  if (bm) data["n4-bm"] = JSON.parse(bm);
  if (srs) data["n4-srs"] = JSON.parse(srs);
  if (theme) data["n4-theme"] = theme;
  if (fs) data["n4-fs"] = fs;
  var _settingsKeys = ["n4-accent", "n4-font-jp", "n4-tts-rate", "n4-auto-tts", "n4-sel-popup", "n4-start-tab", "n4-compact", "n4-auto-collapse", "n4-furigana", "n4-romaji"];
  _settingsKeys.forEach(function(k) {
    var v = safeGetItem(k);
    if (v !== null) data[k] = v;
  });
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  if (_isIOS) {
    const ov = document.createElement("div");
    ov.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px";
    ov.innerHTML = `<div style="background:var(--bg-card);padding:20px;border-radius:12px;max-height:80vh;overflow:auto;max-width:92vw;width:400px"><h3 style="margin-bottom:10px">Sao chép dữ liệu backup</h3><textarea id="ios-export-ta" style="width:100%;height:180px;font-family:monospace;font-size:11px;border:1px solid var(--border);border-radius:6px;padding:8px" readonly></textarea><div style="display:flex;gap:8px;margin-top:10px"><button onclick="document.getElementById('ios-export-ta').select();document.execCommand('copy');showToast('Copied!')" style="flex:1;padding:8px;border-radius:6px;border:1px solid var(--accent);background:var(--accent);color:#fff;font-weight:600;cursor:pointer">Copy</button><button onclick="this.closest('div[style]').parentElement.remove()" style="flex:1;padding:8px;border-radius:6px;border:1px solid var(--border);background:var(--bg);color:var(--text);font-weight:600;cursor:pointer">Close</button></div></div>`;
    document.body.appendChild(ov);
    document.getElementById("ios-export-ta").value = json;
    return;
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "JLPT_N4_Backup.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("💾 Đã xuất dữ liệu backup!");
}
function importData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (typeof data !== "object" || data === null || Array.isArray(data)) {
        showToast("❌ File không hợp lệ!");
        return;
      }
      if (data["n4-bm"] && typeof data["n4-bm"] === "object" && !Array.isArray(data["n4-bm"])) {
        const cur = getBookmarks();
        Object.assign(cur, data["n4-bm"]);
        setBookmarks(cur);
      }
      if (data["n4-srs"] && typeof data["n4-srs"] === "object" && !Array.isArray(data["n4-srs"])) {
        const cur = getSRS();
        Object.assign(cur, data["n4-srs"]);
        setSRS(cur);
      }
      if (typeof data["n4-theme"] === "string" && (data["n4-theme"] === "light" || data["n4-theme"] === "dark")) {
        S.theme = data["n4-theme"];
        safeSetItem("n4-theme", S.theme);
        document.documentElement.setAttribute("data-theme", S.theme);
      }
      if (data["n4-fs"] && !isNaN(+data["n4-fs"])) {
        const sz = Math.min(22, Math.max(12, +data["n4-fs"]));
        document.documentElement.style.fontSize = sz + "px";
        safeSetItem("n4-fs", sz);
      }
      var _impKeys = ["n4-accent", "n4-font-jp", "n4-tts-rate", "n4-auto-tts", "n4-sel-popup", "n4-start-tab", "n4-compact", "n4-auto-collapse", "n4-furigana", "n4-romaji"];
      _impKeys.forEach(function(k) {
        if (data[k] !== void 0) safeSetItem(k, data[k]);
      });
      if (data["n4-accent"]) {
        document.documentElement.style.setProperty("--accent", data["n4-accent"]);
        document.documentElement.style.setProperty("--accent-light", data["n4-accent"] + "22");
      }
      if (data["n4-font-jp"]) {
        var fm = data["n4-font-jp"] === "serif" ? "'Noto Serif JP', serif" : data["n4-font-jp"] === "system" ? "system-ui, sans-serif" : "'Noto Sans JP', sans-serif";
        document.documentElement.style.setProperty("--font-jp", fm);
      }
      if (data["n4-compact"] === "1") document.body.classList.add("compact-cards");
      else document.body.classList.remove("compact-cards");
      if (data["n4-tts-rate"]) S.ttsRate = parseFloat(data["n4-tts-rate"]) || 1;
      if (data["n4-auto-tts"]) S.autoTTS = data["n4-auto-tts"] === "1";
      if (data["n4-sel-popup"] !== void 0) S.selPopup = data["n4-sel-popup"] !== "0";
      if (data["n4-auto-collapse"] !== void 0) S.autoCollapse = data["n4-auto-collapse"] === "1";
      if (window.render) window.render();
      if (window.renderSidebar) window.renderSidebar();
      if (window.updateProgress) window.updateProgress();
      showToast("✅ Đã nhập dữ liệu thành công!");
    } catch (err) {
      showToast("❌ File không hợp lệ!");
    }
  };
  reader.readAsText(file);
}
export {
  SRS_INTERVALS,
  bmBtn,
  bmKey,
  countBookmarks,
  exportData,
  forvoBtn,
  getBookmarks,
  getSRS,
  importData,
  isBookmarked,
  jishoBtn,
  setBookmarks,
  setSRS,
  srsLevelLabel,
  toggleBookmark,
  ttsBtn,
  updateSRS
};
