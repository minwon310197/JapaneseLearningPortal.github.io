import { w as worldOverlayMount } from "./legacy-loader-gyvSYPc3.js";
import { ai as S, ao as esc } from "./index-BEJSIlFS.js";
let activeFeedbackCleanup = null;
function closeGameFeedback() {
  const cleanup = activeFeedbackCleanup;
  activeFeedbackCleanup = null;
  cleanup == null ? void 0 : cleanup();
}
function showGameFeedback(opts) {
  closeGameFeedback();
  if (!S.showFeedback && opts.correct) {
    if (opts.onContinue) opts.onContinue();
    return;
  }
  let popup = document.getElementById("gf-popup");
  if (popup) popup.remove();
  popup = document.createElement("div");
  popup.id = "gf-popup";
  popup.className = "gf-popup " + (opts.correct ? "gf-correct" : "gf-wrong");
  let html = '<div class="gf-card">';
  html += '<div class="gf-header">';
  html += opts.correct ? '<span class="gf-icon">✅</span><span class="gf-status">Chính xác!</span>' : '<span class="gf-icon">❌</span><span class="gf-status">Sai rồi!</span>';
  html += "</div>";
  html += '<div class="gf-word-section">';
  html += '<div class="gf-word jp-font">' + esc(opts.word || "") + "</div>";
  const readings = [];
  if (opts.reading) readings.push(opts.reading);
  if (opts.on && opts.on !== opts.reading) readings.push("音: " + opts.on);
  if (opts.kun && opts.kun !== opts.reading) readings.push("訓: " + opts.kun);
  if (readings.length > 0) {
    html += '<div class="gf-reading">' + esc(readings.join(" · ")) + "</div>";
  }
  if (opts.romaji) {
    html += '<div class="gf-romaji">' + esc(opts.romaji) + "</div>";
  }
  if (opts.meaning) {
    html += '<div class="gf-meaning">' + esc(opts.meaning) + "</div>";
  }
  html += "</div>";
  const speakText = opts.reading || opts.on || opts.kun || opts.word || "";
  if (speakText) {
    html += `<button class="gf-speak-btn" onclick="speak('` + esc(speakText).replace(/'/g, "\\'") + `')">🔊 Nghe</button>`;
  }
  if (opts.example) {
    html += '<div class="gf-example"><span class="gf-example-label">Ví dụ:</span> <span class="jp-font">' + esc(opts.example) + "</span></div>";
  }
  if (opts.compounds) {
    html += '<div class="gf-compounds"><span class="gf-compounds-label">Từ ghép:</span> <span class="jp-font">' + esc(opts.compounds) + "</span></div>";
  }
  if (opts.explanation) {
    html += '<div class="gf-explanation">' + esc(opts.explanation) + "</div>";
  }
  html += '<button class="gf-continue-btn" id="gf-continue-btn">Tiếp tục ▶</button>';
  html += "</div>";
  popup.innerHTML = html;
  worldOverlayMount().appendChild(popup);
  popup.offsetHeight;
  popup.classList.add("gf-visible");
  let continueTimer = null;
  activeFeedbackCleanup = () => {
    clearTimeout(continueTimer);
    document.removeEventListener("keydown", _keyHandler);
    popup.remove();
  };
  document.getElementById("gf-continue-btn").onclick = function() {
    if (continueTimer !== null) return;
    document.removeEventListener("keydown", _keyHandler);
    popup.classList.remove("gf-visible");
    continueTimer = setTimeout(function() {
      closeGameFeedback();
      if (opts.onContinue) opts.onContinue();
    }, 200);
  };
  function _keyHandler(e) {
    var _a;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      document.removeEventListener("keydown", _keyHandler);
      (_a = document.getElementById("gf-continue-btn")) == null ? void 0 : _a.click();
    }
  }
  document.addEventListener("keydown", _keyHandler);
}
export {
  closeGameFeedback as c,
  showGameFeedback as s
};
