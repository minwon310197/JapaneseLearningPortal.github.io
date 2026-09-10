import { f as finishLegacyToolAssessment, s as submitLegacyToolAssessment, a as startLegacyToolAssessment } from "./legacy-tool-assessment-CuYVfzBR.js";
import { ai as S, ao as esc } from "./index-BEJSIlFS.js";
import { s as showToast } from "./toast-Dwy3w2e2.js";
import { GH, setGameHint, gameHintBarHTML } from "./game-hints-C7RIXbTT.js";
import { c as closeGameFeedback, s as showGameFeedback } from "./game-feedback-rT-bQdpt.js";
import "./world-tool-destinations-BAVvWbat.js";
import "./vendor-react-BUL8WuXG.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./legacy-loader-gyvSYPc3.js";
/* empty css               */
const MEM = { items: [], score: 0, total: 0, maxQ: 15, current: null, phase: "idle", streak: 0, bestStreak: 0, flashTime: 2e3, timer: null, weights: {}, options: [] };
function _collectMemItems() {
  const items = [];
  const data = S.tab === "kanji" ? S.kanji : S.vocab;
  if (!data) return items;
  data.forEach(function(sec) {
    if (S.section !== "all" && sec.id !== S.section) return;
    if (S.tab === "kanji") {
      sec.entries.forEach(function(k) {
        if (k.kanji && k.title) items.push({ word: k.kanji, reading: k.on || k.kun || "", meaning: k.title, type: "kanji" });
      });
    } else {
      sec.entries.forEach(function(e) {
        if (e.word && e.meaning) items.push({ word: e.word, reading: e.reading || "", meaning: e.meaning, type: "vocab" });
      });
    }
  });
  return items;
}
function _pickMemItem() {
  var total = 0;
  MEM.items.forEach(function(it, i2) {
    total += MEM.weights[i2] || 1;
  });
  var r = Math.random() * total;
  var cum = 0;
  for (var i = 0; i < MEM.items.length; i++) {
    cum += MEM.weights[i] || 1;
    if (r <= cum) return i;
  }
  return MEM.items.length - 1;
}
function startSpeedMemory() {
  var items = _collectMemItems();
  if (items.length < 5) {
    showToast("Không đủ dữ liệu (cần ≥ 5)");
    return;
  }
  MEM.assessmentRun = startLegacyToolAssessment("startSpeedMemory");
  MEM.items = items.sort(function() {
    return Math.random() - 0.5;
  });
  MEM.score = 0;
  MEM.total = 0;
  MEM.streak = 0;
  MEM.bestStreak = 0;
  MEM.weights = {};
  MEM.flashTime = S.gameFlashTime || 2e3;
  document.getElementById("mem-overlay").classList.add("active");
  var _g = document.getElementById("mem-guide");
  if (_g) _g.innerHTML = "<b>⚡ Speed Memory</b> — Ghi nhớ từ xuất hiện trong vài giây, sau đó chọn nghĩa đúng. Từ sai sẽ xuất hiện nhiều hơn. Dùng 🔤/🇻🇳 để xem gợi ý. Giữ streak càng cao càng tốt!";
  showToast("⚡ Speed Memory — " + Math.min(MEM.maxQ, items.length) + " từ");
  memNextRound();
}
function memNextRound() {
  if (MEM.total >= MEM.maxQ) {
    showMemResult();
    return;
  }
  MEM.phase = "flash";
  var idx = _pickMemItem();
  MEM.current = { item: MEM.items[idx], idx };
  MEM.options = _buildMemOptions(MEM.current.item);
  document.getElementById("mem-word").textContent = MEM.current.item.word;
  document.getElementById("mem-word").style.opacity = "1";
  document.getElementById("mem-reading").textContent = MEM.current.item.reading;
  document.getElementById("mem-reading").style.opacity = "1";
  document.getElementById("mem-feedback").textContent = "";
  document.getElementById("mem-choices").style.display = "none";
  document.getElementById("mem-next").style.display = "none";
  document.getElementById("mem-progress").textContent = "Từ " + (MEM.total + 1) + "/" + Math.min(MEM.maxQ, MEM.items.length);
  document.getElementById("mem-score").innerHTML = 'Điểm: <span style="color:var(--success)">' + MEM.score + "</span>/" + MEM.total;
  if (MEM.streak > 1) {
    document.getElementById("mem-streak").style.display = "";
    document.getElementById("mem-streak").textContent = "🔥 Streak: " + MEM.streak;
  } else {
    document.getElementById("mem-streak").style.display = "none";
  }
  var ghEl = document.getElementById("mem-gh");
  setGameHint({ romaji: MEM.current.item.reading || "", vi: MEM.current.item.meaning });
  if (ghEl) {
    ghEl.innerHTML = gameHintBarHTML("🔤 Romaji");
  }
  var fill = document.getElementById("mem-timer-fill");
  fill.style.transition = "none";
  fill.style.width = "100%";
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      fill.style.transition = "width " + MEM.flashTime + "ms linear";
      fill.style.width = "0%";
    });
  });
  clearTimeout(MEM.timer);
  MEM.timer = setTimeout(function() {
    MEM.phase = "recall";
    document.getElementById("mem-word").style.opacity = "0";
    document.getElementById("mem-reading").style.opacity = "0";
    var choicesEl = document.getElementById("mem-choices");
    choicesEl.style.display = "grid";
    var html = "";
    for (var i = 0; i < MEM.options.length; i++) {
      html += '<button class="mem-choice" onclick="memChoose(' + i + ')">' + esc(MEM.options[i]) + "</button>";
    }
    choicesEl.innerHTML = html;
  }, MEM.flashTime);
}
function _buildMemOptions(correctItem) {
  var correct = correctItem.meaning;
  var opts = [correct];
  var pool = [];
  for (var i = 0; i < MEM.items.length; i++) {
    if (MEM.items[i].meaning !== correct) pool.push(MEM.items[i].meaning);
  }
  for (var j = pool.length - 1; j > 0; j--) {
    var k = Math.floor(Math.random() * (j + 1));
    var tmp = pool[j];
    pool[j] = pool[k];
    pool[k] = tmp;
  }
  for (var m = 0; m < Math.min(3, pool.length); m++) {
    if (opts.indexOf(pool[m]) === -1) opts.push(pool[m]);
  }
  while (opts.length < 4 && pool.length > opts.length - 1) {
    var r = pool[Math.floor(Math.random() * pool.length)];
    if (opts.indexOf(r) === -1) opts.push(r);
  }
  for (var n = opts.length - 1; n > 0; n--) {
    var p = Math.floor(Math.random() * (n + 1));
    var t = opts[n];
    opts[n] = opts[p];
    opts[p] = t;
  }
  return opts;
}
function memChoose(idx) {
  if (MEM.phase !== "recall") return;
  MEM.phase = "result";
  MEM.total++;
  var chosen = MEM.options[idx];
  var correct = MEM.current.item.meaning;
  var isCorrect = chosen === correct;
  submitLegacyToolAssessment("startSpeedMemory", MEM.assessmentRun, { questionId: "q" + (MEM.total - 1), item: MEM.current.item, kind: MEM.current.item.type, correct: isCorrect, assisted: GH.used === true });
  var btns = document.querySelectorAll(".mem-choice");
  for (var i = 0; i < btns.length; i++) {
    btns[i].disabled = true;
    if (MEM.options[i] === correct) btns[i].classList.add("correct");
    if (i === idx && !isCorrect) btns[i].classList.add("wrong");
  }
  if (isCorrect) {
    MEM.score++;
    MEM.streak++;
    if (MEM.streak > MEM.bestStreak) MEM.bestStreak = MEM.streak;
    document.getElementById("mem-feedback").innerHTML = '<span style="color:var(--success)">✅ Chính xác!</span>';
    MEM.weights[MEM.current.idx] = Math.max(0.3, (MEM.weights[MEM.current.idx] || 1) * 0.6);
    MEM.flashTime = Math.max(800, MEM.flashTime - 100);
  } else {
    MEM.streak = 0;
    document.getElementById("mem-feedback").innerHTML = '<span style="color:var(--danger)">❌ Đáp án: ' + esc(correct) + "</span>";
    MEM.weights[MEM.current.idx] = (MEM.weights[MEM.current.idx] || 1) * 2.5;
  }
  document.getElementById("mem-word").style.opacity = "1";
  document.getElementById("mem-reading").style.opacity = "1";
  document.getElementById("mem-score").innerHTML = 'Điểm: <span style="color:var(--success)">' + MEM.score + "</span>/" + MEM.total;
  if (MEM.streak > 1) {
    document.getElementById("mem-streak").style.display = "";
    document.getElementById("mem-streak").textContent = "🔥 Streak: " + MEM.streak;
  } else {
    document.getElementById("mem-streak").style.display = "none";
  }
  document.getElementById("mem-next").style.display = "inline-block";
  showGameFeedback({ correct: isCorrect, word: MEM.current.item.word, reading: MEM.current.item.reading, meaning: MEM.current.item.meaning, onContinue() {
    memNext();
  } });
}
function memNext() {
  memNextRound();
}
function showMemResult() {
  finishLegacyToolAssessment("startSpeedMemory", MEM.assessmentRun);
  var pct = MEM.total > 0 ? Math.round(MEM.score / MEM.total * 100) : 0;
  var emoji = pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "💪";
  document.getElementById("mem-container").innerHTML = '<div class="quiz-result"><div style="font-size:3rem;margin-bottom:12px">' + emoji + '</div><div class="quiz-result-score">' + MEM.score + "/" + MEM.total + '</div><div class="quiz-result-label">⚡ Speed Memory — ' + pct + '% chính xác</div><div style="font-size:0.82rem;color:var(--text-muted);margin-top:8px">🔥 Best streak: ' + MEM.bestStreak + '</div><button class="quiz-next" onclick="resetMemContainer();startSpeedMemory()" style="margin-top:20px">Chơi lại</button><button class="quiz-next" onclick="closeSpeedMemory()" style="margin-top:8px;background:var(--bg-hover);color:var(--text)">Đóng</button></div>';
}
function resetMemContainer() {
  document.getElementById("mem-container").innerHTML = '<div class="mem-header"><h3>⚡ 記憶ドリル Speed Memory</h3></div><div class="mem-progress" id="mem-progress"></div><div class="mem-streak" id="mem-streak" style="display:none"></div><div id="mem-gh"></div><div class="mem-flash-area" id="mem-flash-area"><div class="mem-word" id="mem-word"></div><div class="mem-reading" id="mem-reading"></div><div class="mem-timer-bar"><div class="mem-timer-fill" id="mem-timer-fill"></div></div></div><div class="mem-choices" id="mem-choices" style="display:none"></div><div class="mem-feedback" id="mem-feedback"></div><div class="mem-score" id="mem-score"></div><div style="margin-top:8px"><button class="dict-btn primary" onclick="memNext()" id="mem-next" style="display:none">Tiếp theo →</button></div>';
}
function closeSpeedMemory() {
  var _a;
  finishLegacyToolAssessment("startSpeedMemory", MEM.assessmentRun);
  closeGameFeedback();
  (_a = document.getElementById("mem-overlay")) == null ? void 0 : _a.classList.remove("active");
  clearTimeout(MEM.timer);
  MEM.items = [];
  MEM.score = 0;
  MEM.total = 0;
  if (document.getElementById("mem-container")) resetMemContainer();
}
export {
  MEM,
  _collectMemItems,
  _pickMemItem,
  closeSpeedMemory,
  memChoose,
  memNext,
  memNextRound,
  resetMemContainer,
  showMemResult,
  startSpeedMemory
};
