import { s as safeGetItem, d as safeSetItem, ai as S, aq as haptic, K as equalsAnswerText, b7 as playSFX, b8 as normalizeAnswerText, ao as esc, ap as shuffleArray, b9 as bold } from "./index-BEJSIlFS.js";
import { speak } from "./tts-DDDtO8rG.js";
import { s as showToast } from "./toast-Dwy3w2e2.js";
import { _lookupHints, setGameHint, gameHintBarHTML } from "./game-hints-C7RIXbTT.js";
import { s as showGameFeedback } from "./game-feedback-rT-bQdpt.js";
/* empty css               */
import "./vendor-react-BUL8WuXG.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./legacy-loader-gyvSYPc3.js";
import "./world-tool-destinations-BAVvWbat.js";
function trackMistake(word) {
  try {
    var m = JSON.parse(safeGetItem("n4-mistakes") || "{}");
    m[word] = (m[word] || 0) + 1;
    safeSetItem("n4-mistakes", JSON.stringify(m));
  } catch (e) {
  }
}
const QZ = {
  items: [],
  order: [],
  cursor: 0,
  current: null,
  options: [],
  score: 0,
  total: 0,
  answered: false,
  get maxQ() {
    return parseInt(S.quizCount || 10, 10);
  }
};
function startQuiz() {
  const data = S.tab === "kanji" ? S.kanji : S.tab === "vocab" ? S.vocab : null;
  if (!data) {
    showToast("✍️ Quiz hỗ trợ Kanji và Từ vựng");
    return;
  }
  QZ.items = [];
  data.forEach((sec) => {
    if (S.section !== "all" && sec.id !== S.section) return;
    if (S.tab === "kanji") {
      sec.entries.forEach((k) => {
        if (k.title) QZ.items.push({ word: k.kanji, reading: k.on || k.kun || "", meaning: k.title });
      });
    } else {
      sec.entries.forEach((e) => {
        if (e.meaning && e.word) QZ.items.push({ word: e.word, reading: e.reading || e.romaji || "", meaning: e.meaning });
      });
    }
  });
  if (QZ.items.length < 4) {
    showToast("Cần ít nhất 4 mục để bắt đầu quiz");
    return;
  }
  QZ.score = 0;
  QZ.total = 0;
  QZ.answered = false;
  QZ.order = shuffleArray([...QZ.items || []]);
  QZ.cursor = 0;
  nextQuizQuestion();
  var _g = document.getElementById("quiz-guide");
  if (_g) _g.innerHTML = "<b>✍️ Quiz</b> — Chọn nghĩa đúng cho từ hiển thị. Dùng 🔤 Romaji hoặc 🇻🇳 Nghĩa để xem gợi ý. Nhấn 🔊 để nghe phát âm. Sau khi trả lời sai, đáp án đúng sẽ được hiện.";
  document.getElementById("quiz-overlay").classList.add("active");
  showToast("✍️ Quiz bắt đầu — " + Math.min(QZ.maxQ, QZ.items.length) + " câu hỏi");
}
function nextQuizQuestion() {
  if (QZ.total >= QZ.maxQ) {
    showQuizResult();
    return;
  }
  QZ.answered = false;
  if (!QZ.order || QZ.order.length === 0) {
    QZ.order = shuffleArray([...QZ.items || []]);
    QZ.cursor = 0;
  }
  if (QZ.cursor >= QZ.order.length) {
    QZ.order = shuffleArray([...QZ.items || []]);
    QZ.cursor = 0;
  }
  QZ.current = QZ.order[QZ.cursor++];
  const _qd = safeGetItem("quizDifficulty") || "normal";
  const _wc = _qd === "easy" ? 3 : _qd === "hard" ? 5 : _qd === "jlpt" ? 3 : 3;
  const wrongs = QZ.items.filter((i) => !equalsAnswerText(i.meaning, QZ.current.meaning)).sort(() => Math.random() - 0.5).slice(0, _wc);
  QZ.options = [...wrongs, QZ.current].sort(() => Math.random() - 0.5);
  renderQuiz();
}
function renderQuiz() {
  document.getElementById("quiz-question").textContent = QZ.current.word;
  document.getElementById("quiz-hint").textContent = (safeGetItem("answerFormat") === "type" ? "Nhập nghĩa đúng" : "Chọn nghĩa đúng") + " (" + (QZ.total + 1) + "/" + Math.min(QZ.maxQ, QZ.items.length) + ")";
  const container = document.getElementById("quiz-options");
  container.innerHTML = "";
  var _fmt = safeGetItem("answerFormat") || "mcq";
  if (_fmt === "type") {
    var inp = document.createElement("input");
    inp.type = "text";
    inp.className = "quiz-type-input";
    inp.id = "quiz-type-ans";
    inp.placeholder = "Nhập nghĩa tiếng Việt...";
    inp.style.cssText = "width:100%;padding:10px;font-size:1em;border:2px solid var(--border);border-radius:8px;background:var(--card-bg);color:var(--text);margin:8px 0";
    inp.addEventListener("keydown", function(e) {
      if (e.key === "Enter") window.answerQuizType();
    });
    container.appendChild(inp);
    var sub = document.createElement("button");
    sub.className = "quiz-option";
    sub.textContent = "✓ Xác nhận";
    sub.style.cssText = "margin-top:8px;background:var(--accent);color:#fff";
    sub.onclick = function() {
      window.answerQuizType();
    };
    container.appendChild(sub);
    setTimeout(function() {
      inp.focus();
    }, 100);
  } else {
    QZ.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.textContent = opt.meaning;
      btn.dataset.idx = i;
      container.appendChild(btn);
    });
  }
  document.getElementById("quiz-score").innerHTML = 'Điểm: <span class="correct-num">' + QZ.score + "</span>/" + QZ.total;
  document.getElementById("quiz-next").style.display = "none";
  var ghEl = document.getElementById("quiz-gh");
  if (ghEl) {
    var hints = _lookupHints(QZ.current.word);
    setGameHint({ romaji: hints.romaji, vi: QZ.current.meaning });
    ghEl.innerHTML = gameHintBarHTML("🔤 Romaji");
  }
}
function answerQuiz(idx) {
  if (QZ.answered) return;
  QZ.answered = true;
  QZ.total++;
  const btns = document.querySelectorAll(".quiz-option");
  const correct = QZ.options.findIndex(function(opt) {
    return equalsAnswerText(opt.word, QZ.current.word) && equalsAnswerText(opt.meaning, QZ.current.meaning);
  });
  const correctIdx = correct >= 0 ? correct : 0;
  if (btns[correctIdx]) btns[correctIdx].classList.add("correct");
  if (idx === correctIdx) {
    QZ.score++;
    speak(QZ.current.reading || QZ.current.word);
    haptic(50);
    playSFX("correct");
    dgTrack(S.tab === "kanji" ? "kanji" : S.tab === "grammar" ? "grammar" : "vocab");
  } else {
    if (btns[idx]) btns[idx].classList.add("wrong");
    haptic([100, 50, 100]);
    playSFX("wrong");
    trackMistake(QZ.current.word);
  }
  btns.forEach((b) => b.classList.add("answered"));
  document.getElementById("quiz-score").innerHTML = 'Điểm: <span class="correct-num">' + QZ.score + "</span>/" + QZ.total;
  document.getElementById("quiz-next").style.display = "inline-block";
  document.getElementById("quiz-next").textContent = QZ.total >= QZ.maxQ ? "Xem kết quả →" : "Câu tiếp theo →";
  showGameFeedback({ correct: idx === correctIdx, word: QZ.current.word, reading: QZ.current.reading, meaning: QZ.current.meaning, onContinue() {
    nextQuizQuestion();
  } });
}
function answerQuizType() {
  if (QZ.answered) return;
  var inp = document.getElementById("quiz-type-ans");
  if (!inp) return;
  var ans = normalizeAnswerText(inp.value || "");
  var correct = normalizeAnswerText(QZ.current.meaning || "");
  QZ.answered = true;
  QZ.total++;
  var isCorrect = ans === correct || ans.length >= 2 && correct.indexOf(ans) !== -1 || ans.length >= 2 && ans.indexOf(correct) !== -1;
  var container = document.getElementById("quiz-options");
  container.innerHTML = '<div style="padding:10px;text-align:center;border-radius:8px;background:' + (isCorrect ? "var(--success)" : "var(--danger)") + ';color:#fff;font-size:1em">' + (isCorrect ? "✅ Đúng!" : "❌ Sai! Đáp án: " + esc(QZ.current.meaning)) + "</div>";
  if (isCorrect) {
    QZ.score++;
    speak(QZ.current.reading || QZ.current.word);
    haptic(50);
    playSFX("correct");
    dgTrack(S.tab === "kanji" ? "kanji" : S.tab === "grammar" ? "grammar" : "vocab");
  } else {
    haptic([100, 50, 100]);
    playSFX("wrong");
    trackMistake(QZ.current.word);
  }
  document.getElementById("quiz-score").innerHTML = 'Điểm: <span class="correct-num">' + QZ.score + "</span>/" + QZ.total;
  document.getElementById("quiz-next").style.display = "inline-block";
  document.getElementById("quiz-next").textContent = QZ.total >= QZ.maxQ ? "Xem kết quả →" : "Câu tiếp theo →";
  showGameFeedback({ correct: isCorrect, word: QZ.current.word, reading: QZ.current.reading, meaning: QZ.current.meaning, onContinue() {
    nextQuizQuestion();
  } });
}
function showQuizResult() {
  const pct = Math.round(QZ.score / QZ.total * 100);
  const emoji = pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "💪";
  const c = document.getElementById("quiz-container");
  c.innerHTML = '<div class="quiz-result"><div style="font-size:3rem;margin-bottom:12px">' + emoji + '</div><div class="quiz-result-score">' + QZ.score + "/" + QZ.total + '</div><div class="quiz-result-label">' + pct + '% chính xác</div><button class="quiz-next" onclick="QZ.score=0;QZ.total=0;nextQuizQuestion();renderQuizContainer();" style="margin-top:20px">Chơi lại</button><button class="quiz-next" onclick="closeQuiz()" style="margin-top:8px;background:var(--bg-hover);color:var(--text)">Đóng</button></div>';
}
function renderQuizContainer() {
  document.getElementById("quiz-container").innerHTML = '<div class="quiz-header"><div class="quiz-question" id="quiz-question"></div><button class="fc-tts-btn" id="quiz-tts" onclick="_quizSpeak()" title="Phát âm" style="margin:8px auto">🔊</button><div class="quiz-hint" id="quiz-hint"></div><div id="quiz-gh"></div></div><div class="quiz-options" id="quiz-options"></div><div class="quiz-footer"><div class="quiz-score" id="quiz-score"></div><button class="quiz-next" id="quiz-next" onclick="nextQuizQuestion()" style="display:none">Câu tiếp theo →</button></div>';
  renderQuiz();
}
function _quizSpeak() {
  if (window.PPQ && window.PPQ.current && window.PPQ.total > 0) {
    speak(window.PPQ.current.reading || window.PPQ.current.word);
  } else if (QZ.current) {
    speak(QZ.current.reading || QZ.current.word);
  }
}
function closeQuiz() {
  document.getElementById("quiz-overlay").classList.remove("active");
  QZ.items = [];
  QZ.order = [];
  QZ.cursor = 0;
  QZ.current = null;
  QZ.options = [];
  QZ.score = 0;
  QZ.total = 0;
  QZ.answered = false;
  document.getElementById("quiz-container").innerHTML = '<div class="quiz-header"><div class="quiz-question" id="quiz-question"></div><button class="fc-tts-btn" id="quiz-tts" onclick="_quizSpeak()" title="Phát âm" style="margin:8px auto">🔊</button><div class="quiz-hint" id="quiz-hint">Chọn nghĩa đúng</div><div id="quiz-gh"></div></div><div class="quiz-options" id="quiz-options"></div><div class="quiz-footer"><div class="quiz-score" id="quiz-score"></div><button class="quiz-next" id="quiz-next" onclick="nextQuizQuestion()" style="display:none">Câu tiếp theo →</button></div>';
}
var _rrCurrent = null;
function openRandomReview() {
  var existing = document.getElementById("rr-modal");
  if (existing) existing.remove();
  var modal = document.createElement("div");
  modal.id = "rr-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeRandomReview();
  };
  modal.innerHTML = `<div class="st-modal st-modal-wide"><div class="st-modal-header"><h3>🎲 Ôn tập ngẫu nhiên</h3><button class="st-close" onclick="closeRandomReview()">✕</button></div><div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-bottom:10px" id="rr-filters"><button class="rr-cat-btn active" data-cat="all" onclick="_setRRFilter('all')">🎲 Tất cả</button><button class="rr-cat-btn" data-cat="kanji" onclick="_setRRFilter('kanji')">🌟 Kanji</button><button class="rr-cat-btn" data-cat="vocab" onclick="_setRRFilter('vocab')">📚 Từ vựng</button><button class="rr-cat-btn" data-cat="grammar" onclick="_setRRFilter('grammar')">💡 Ngữ pháp</button><button class="rr-cat-btn" data-cat="minna" onclick="_setRRFilter('minna')">📖 Minna</button><button class="rr-cat-btn" data-cat="minna-vocab" onclick="_setRRFilter('minna-vocab')">📝 Minna Từ vựng</button><button class="rr-cat-btn" data-cat="minna-grammar" onclick="_setRRFilter('minna-grammar')">📘 Minna Ngữ pháp</button></div><div class="rr-card rr-card-scroll" id="rr-card" style="min-height:200px;max-height:50vh"><div class="rr-empty">Bấm 🎲 để bắt đầu ôn tập</div></div><div class="rr-actions"><button class="st-btn primary" onclick="_rollRandom()">🎲 Ngẫu nhiên</button><button class="st-btn" id="rr-speak-btn" onclick="_rrSpeak()" style="display:none">🔊 Phát âm</button></div></div>`;
  document.body.appendChild(modal);
  var tabMap = { kanji: "kanji", vocab: "vocab", grammar: "grammar", minna: "minna" };
  var autoFilter = tabMap[S.tab] || "all";
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
    _setRRFilter(autoFilter);
  }, 10);
}
function closeRandomReview() {
  var modal = document.getElementById("rr-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
  _rrCurrent = null;
}
function _setRRCat() {
}
var _rrFilter = "all";
function _setRRFilter(cat) {
  _rrFilter = cat;
  var btns = document.querySelectorAll("#rr-filters .rr-cat-btn");
  btns.forEach(function(b) {
    b.classList.remove("active");
  });
  btns.forEach(function(b) {
    if (b.getAttribute("data-cat") === cat) b.classList.add("active");
  });
  _rollRandom();
}
function _rollRandom() {
  var pool = [];
  if (_rrFilter === "all" || _rrFilter === "kanji") {
    (S.kanji || []).forEach(function(sec) {
      var entries = sec && (sec.entries || sec.items || sec.kanji) || [];
      if (!Array.isArray(entries)) return;
      entries.forEach(function(k) {
        if (k && (k.kanji || k.word)) pool.push({ type: "kanji", data: k });
      });
    });
  }
  if (_rrFilter === "all" || _rrFilter === "vocab") {
    (S.vocab || []).forEach(function(sec) {
      var entries = sec && sec.entries || [];
      if (!Array.isArray(entries)) return;
      entries.forEach(function(e) {
        if (e && e.word) pool.push({ type: "vocab", data: e });
      });
    });
  }
  if (_rrFilter === "all" || _rrFilter === "grammar") {
    (S.grammar || []).forEach(function(sec) {
      var patterns = sec && sec.patterns || [];
      if (!Array.isArray(patterns)) return;
      patterns.forEach(function(p) {
        if (p) pool.push({ type: "grammar", data: p });
      });
    });
  }
  if ((_rrFilter === "all" || _rrFilter === "minna" || _rrFilter === "minna-vocab" || _rrFilter === "minna-grammar") && S.minnaData) {
    Object.keys(S.minnaData).forEach(function(k) {
      var ld = S.minnaData[k];
      if ((_rrFilter === "all" || _rrFilter === "minna" || _rrFilter === "minna-vocab") && ld && Array.isArray(ld.vocab)) {
        ld.vocab.forEach(function(v) {
          if (v && v.word) pool.push({ type: "minna", data: v, lesson: k });
        });
      }
      if ((_rrFilter === "all" || _rrFilter === "minna" || _rrFilter === "minna-grammar") && ld && Array.isArray(ld.grammarItems)) {
        ld.grammarItems.forEach(function(g) {
          if (g) pool.push({ type: "minna-grammar", data: g, lesson: k });
        });
      }
    });
  }
  if (pool.length === 0) {
    showToast("Không có dữ liệu");
    return;
  }
  var item = pool[Math.floor(Math.random() * pool.length)];
  _rrCurrent = item;
  _renderRRCard(item);
  if (item.type !== "grammar" && item.type !== "minna-grammar") {
    var d = item.data;
    var word = d.reading || d.on || d.kun || d.word || d.kanji || "";
    if (word) speak(word);
  }
  haptic(50);
}
function _renderRRCard(item) {
  var el = document.getElementById("rr-card");
  var d = item.data;
  var typeLabels = { kanji: "🈲 Kanji", vocab: "📚 Từ vựng", grammar: "💡 Ngữ pháp", minna: "📖 Minna", "minna-grammar": "📖 Minna Ngữ pháp" };
  var h = '<div class="rr-type-badge">' + (typeLabels[item.type] || item.type) + "</div>";
  if (item.type === "kanji") {
    var kChar = d.kanji || d.word || "";
    var kTitle = d.title || d.meaning || "";
    h += '<div class="rr-kanji-char">' + esc(kChar) + "</div>";
    h += '<div class="rr-title">' + esc(kTitle) + (d.meaning && d.title ? " — " + esc(d.meaning) : "") + "</div>";
    if (d.on) h += '<div class="rr-detail-row"><span class="rr-detail-label">音 On:</span> <span class="rr-detail-val">' + esc(d.on) + "</span></div>";
    if (d.kun) h += '<div class="rr-detail-row"><span class="rr-detail-label">訓 Kun:</span> <span class="rr-detail-val">' + esc(d.kun) + "</span></div>";
    if (d.strokes) h += '<div class="rr-detail-row"><span class="rr-detail-label">Số nét:</span> <span class="rr-detail-val">' + esc(String(d.strokes)) + "</span></div>";
    if (d.description) h += '<div class="rr-detail-row"><span class="rr-detail-label">Ghi chú:</span> <span class="rr-detail-val">' + esc(d.description) + "</span></div>";
    if (d.compounds) {
      h += '<div class="rr-compounds"><span class="rr-detail-label">Từ ghép:</span>';
      var comps = d.compounds.split(/[、,]/).map(function(c) {
        return c.trim();
      }).filter(Boolean);
      comps.forEach(function(c) {
        h += '<span class="rr-compound-tag">' + esc(c) + "</span>";
      });
      h += "</div>";
    }
    if (d.example) h += '<div class="rr-example">' + esc(d.example) + "</div>";
  } else if (item.type === "vocab") {
    h += '<div class="rr-word">' + esc(d.word) + "</div>";
    if (d.reading) h += '<div class="rr-reading">' + esc(d.reading) + "</div>";
    if (d.romaji) h += '<div class="rr-romaji">' + esc(d.romaji) + "</div>";
    h += '<div class="rr-meaning">' + esc(d.meaning || "") + "</div>";
    if (d.example) h += '<div class="rr-example">' + esc(d.example) + "</div>";
  } else if (item.type === "grammar") {
    h += '<div class="rr-grammar-id">' + esc(d.id) + "</div>";
    h += '<div class="rr-title">' + esc(d.title) + "</div>";
    if (d.content) {
      h += '<div class="rr-grammar-content">' + bold(d.content) + "</div>";
    }
  } else if (item.type === "minna") {
    h += '<div class="rr-word">' + esc(d.word) + "</div>";
    if (d.reading) h += '<div class="rr-reading">' + esc(d.reading) + "</div>";
    if (d.romaji) h += '<div class="rr-romaji">' + esc(d.romaji) + "</div>";
    h += '<div class="rr-meaning">' + esc(d.meaning || "") + "</div>";
    if (d.example) h += '<div class="rr-example">' + esc(d.example) + "</div>";
    h += '<div class="rr-row" style="margin-top:6px"><span class="rr-label">Bài:</span> ' + esc(item.lesson) + "</div>";
  } else if (item.type === "minna-grammar") {
    h += '<div class="rr-title" style="font-size:1.1rem;font-weight:700">' + esc(d.title || "") + "</div>";
    if (d.purpose) h += '<div class="rr-meaning" style="margin-top:4px">🎯 ' + esc(d.purpose) + "</div>";
    if (d.explanation) h += '<div class="rr-grammar-content" style="margin-top:6px">' + esc(d.explanation) + "</div>";
    if (d.examples && d.examples.length) {
      h += '<div style="margin-top:8px;font-weight:600">📝 Ví dụ:</div>';
      d.examples.forEach(function(ex) {
        if (typeof ex === "string") {
          h += '<div class="rr-example">' + esc(ex) + "</div>";
        } else {
          h += '<div class="rr-example">';
          if (ex.jp) h += '<span style="font-weight:600">' + esc(ex.jp) + "</span>";
          if (ex.vi) h += " — " + esc(ex.vi);
          h += "</div>";
        }
      });
    }
    h += '<div class="rr-row" style="margin-top:6px"><span class="rr-label">Bài:</span> ' + esc(item.lesson) + "</div>";
  }
  el.innerHTML = h;
  document.getElementById("rr-speak-btn").style.display = item.type !== "grammar" && item.type !== "minna-grammar" ? "" : "none";
}
function _rrSpeak() {
  if (!_rrCurrent) return;
  var d = _rrCurrent.data;
  speak(d.reading || d.on || d.kun || d.word || d.kanji || "");
}
function randomReview() {
  openRandomReview();
}
export {
  QZ,
  _quizSpeak,
  _rollRandom,
  _rrSpeak,
  _setRRCat,
  _setRRFilter,
  answerQuiz,
  answerQuizType,
  closeQuiz,
  closeRandomReview,
  nextQuizQuestion,
  openRandomReview,
  randomReview,
  renderQuiz,
  renderQuizContainer,
  showQuizResult,
  startQuiz
};
