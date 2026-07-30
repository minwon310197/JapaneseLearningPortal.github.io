import { bK as esc, bB as shuffleArray, s as safeGetItem, ab as S } from "./feature-3d-jK3b4Iv-.js";
import { s as showToast } from "./toast-CJdbqLP6.js";
import { g as getSRS, a as getBookmarks } from "./bookmarks-wgIlRBn-.js";
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
function _dayNum() {
  return Math.floor(Date.now() / 864e5);
}
function _allVocab() {
  var r = [];
  S.vocab.forEach(function(s) {
    s.entries.forEach(function(e) {
      if (e.word && e.meaning) r.push(e);
    });
  });
  return r;
}
function _allKanji() {
  var r = [];
  S.kanji.forEach(function(s) {
    s.entries.forEach(function(e) {
      if (e.kanji) r.push(e);
    });
  });
  return r;
}
function _allGrammar() {
  var r = [];
  S.grammar.forEach(function(s) {
    s.patterns.forEach(function(p) {
      r.push(p);
    });
  });
  return r;
}
function openWordOfDay() {
  var ol = _ov("wod-overlay");
  var day = _dayNum();
  var all = _allVocab();
  if (all.length === 0) {
    showToast("Không có dữ liệu từ vựng");
    return;
  }
  var w = all[day % all.length];
  var related = shuffleArray(all.filter(function(x) {
    return x !== w;
  })).slice(0, 4);
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>📅 Từ vựng hôm nay</h3><span class="mg-close" onclick="closeWordOfDay()">✕</span></div>';
  h += '<div style="text-align:center;padding:20px;background:var(--card-bg);border-radius:8px;margin:8px 0">';
  h += `<div class="jp-font" style="font-size:2.5em;cursor:pointer" onclick="speak('` + esc(w.word).replace(/'/g, "\\'") + `')">` + esc(w.word) + "</div>";
  if (w.reading) h += '<div class="jp-font" style="color:var(--accent);font-size:1.2em">' + esc(w.reading) + "</div>";
  if (w.romaji) h += '<div style="color:var(--text-muted);font-size:0.9em">' + esc(w.romaji) + "</div>";
  h += '<div style="font-size:1.1em;margin-top:8px;font-weight:700">' + esc(w.meaning) + "</div>";
  if (w.example) h += '<div style="margin-top:12px;padding:10px;background:var(--bg);border-radius:6px;text-align:left">';
  if (w.example) h += `<div class="jp-font" style="cursor:pointer" onclick="speak('` + esc(w.example).replace(/'/g, "\\'") + `')">` + esc(w.example) + "</div>";
  if (w.exampleVi || w.example_vi) h += '<div style="color:var(--text-secondary);font-size:0.9em">' + esc(w.exampleVi || w.example_vi || "") + "</div>";
  if (w.example) h += "</div>";
  h += "</div>";
  if (related.length > 0) {
    h += '<div style="margin-top:12px"><div style="font-weight:700;margin-bottom:6px">📚 Từ liên quan</div>';
    related.forEach(function(r) {
      h += `<div style="display:flex;align-items:center;gap:8px;padding:6px;background:var(--card-bg);border-radius:4px;margin-bottom:4px;cursor:pointer" onclick="speak('` + esc(r.word).replace(/'/g, "\\'") + `')">`;
      h += '<span class="jp-font" style="font-weight:700">' + esc(r.word) + "</span>";
      if (r.reading) h += '<span class="jp-font" style="color:var(--accent);font-size:0.85em">' + esc(r.reading) + "</span>";
      h += '<span style="color:var(--text-secondary);font-size:0.85em;margin-left:auto">' + esc(r.meaning) + "</span>";
      h += "</div>";
    });
    h += "</div>";
  }
  h += '<button class="st-btn" onclick="openWordOfDay()" style="margin-top:8px;width:100%">🔄 Tải lại</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeWordOfDay() {
  _clOv("wod-overlay");
}
function openKanjiOfDay() {
  var ol = _ov("kod-overlay");
  var day = _dayNum();
  var all = _allKanji();
  if (all.length === 0) {
    showToast("Không có dữ liệu kanji");
    return;
  }
  var k = all[(day + 13) % all.length];
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>🈲 Kanji hôm nay</h3><span class="mg-close" onclick="closeKanjiOfDay()">✕</span></div>';
  h += '<div style="text-align:center;padding:20px;background:var(--card-bg);border-radius:8px;margin:8px 0">';
  h += `<div class="jp-font" style="font-size:4em;cursor:pointer" onclick="speak('` + esc(k.kanji).replace(/'/g, "\\'") + `')">` + esc(k.kanji) + "</div>";
  h += '<div style="font-weight:700;font-size:1.1em">' + esc(k.title || k.meaning || "") + "</div>";
  if (k.on) h += '<div style="margin-top:6px"><span style="background:var(--accent);color:white;padding:2px 8px;border-radius:4px;font-size:0.8em">音 ' + esc(k.on) + "</span></div>";
  if (k.kun) h += '<div style="margin-top:4px"><span style="background:var(--grammar-accent);color:white;padding:2px 8px;border-radius:4px;font-size:0.8em">訓 ' + esc(k.kun) + "</span></div>";
  if (k.strokes) h += '<div style="margin-top:6px;color:var(--text-muted)">Số nét: ' + k.strokes + "</div>";
  h += "</div>";
  if (k.compounds && k.compounds.length > 0) {
    h += '<div style="margin-top:8px"><div style="font-weight:700;margin-bottom:4px">📝 Từ ghép</div>';
    k.compounds.forEach(function(c) {
      h += `<div style="padding:4px 8px;background:var(--card-bg);border-radius:4px;margin-bottom:3px;cursor:pointer" onclick="speak('` + esc(c.word || c.compound || "").replace(/'/g, "\\'") + `')">`;
      h += '<span class="jp-font" style="font-weight:700">' + esc(c.word || c.compound || "") + "</span>";
      if (c.reading) h += ' <span class="jp-font" style="color:var(--accent);font-size:0.85em">' + esc(c.reading) + "</span>";
      if (c.meaning) h += ' <span style="color:var(--text-secondary);font-size:0.85em">— ' + esc(c.meaning) + "</span>";
      h += "</div>";
    });
    h += "</div>";
  }
  h += '<button class="st-btn" onclick="openKanjiOfDay()" style="margin-top:8px;width:100%">🔄 Tải lại</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeKanjiOfDay() {
  _clOv("kod-overlay");
}
function openGrammarOfDay() {
  var ol = _ov("god-overlay");
  var day = _dayNum();
  var all = _allGrammar();
  if (all.length === 0) {
    showToast("Không có dữ liệu ngữ pháp");
    return;
  }
  var p = all[(day + 7) % all.length];
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>💡 Ngữ pháp hôm nay</h3><span class="mg-close" onclick="closeGrammarOfDay()">✕</span></div>';
  h += '<div style="padding:16px;background:var(--card-bg);border-radius:8px;margin:8px 0">';
  h += '<div class="jp-font" style="font-size:1.4em;font-weight:700;color:var(--accent)">' + esc(p.title) + "</div>";
  h += '<div style="color:var(--text-muted);font-size:0.8em;margin:4px 0">Mẫu ' + esc(p.id) + "</div>";
  if (p.content) {
    h += '<div style="margin-top:10px;font-size:0.92em;line-height:1.6;white-space:pre-wrap">' + esc(p.content).replace(/\\n/g, "<br>") + "</div>";
  }
  h += "</div>";
  h += '<button class="st-btn" onclick="openGrammarOfDay()" style="margin-top:8px;width:100%">🔄 Tải lại</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeGrammarOfDay() {
  _clOv("god-overlay");
}
var _miniState = {};
function openDailyMiniLesson() {
  var ol = _ov("mini-lesson-overlay");
  var allV = _allVocab();
  var allG = _allGrammar();
  if (allV.length < 3 || allG.length === 0) {
    showToast("Không đủ dữ liệu");
    return;
  }
  var day = _dayNum();
  var vocabs = [allV[day % allV.length], allV[(day + 100) % allV.length], allV[(day + 200) % allV.length]];
  var gram = allG[(day + 50) % allG.length];
  var quizWord = vocabs[0];
  var wrongOpts = shuffleArray(allV.filter(function(x) {
    return x.word !== quizWord.word && x.meaning;
  })).slice(0, 3);
  var opts = shuffleArray([quizWord.meaning].concat(wrongOpts.map(function(x) {
    return x.meaning;
  })));
  _miniState = { answer: quizWord.meaning, done: false };
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>📚 Mini Lesson</h3><span class="mg-close" onclick="closeDailyMiniLesson()">✕</span></div>';
  h += '<div style="font-weight:700;color:var(--accent);margin:8px 0">📅 Bài học 5 phút hôm nay</div>';
  h += '<div style="font-weight:700;margin:8px 0">📝 Từ vựng mới</div>';
  vocabs.forEach(function(v) {
    h += `<div style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--card-bg);border-radius:6px;margin-bottom:4px;cursor:pointer" onclick="speak('` + esc(v.word).replace(/'/g, "\\'") + `')">`;
    h += '<span class="jp-font" style="font-weight:700;font-size:1.1em">' + esc(v.word) + "</span>";
    if (v.reading) h += '<span class="jp-font" style="color:var(--accent);font-size:0.85em">' + esc(v.reading) + "</span>";
    h += '<span style="color:var(--text-secondary);margin-left:auto">' + esc(v.meaning) + "</span>";
    h += "</div>";
  });
  h += '<div style="font-weight:700;margin:12px 0 4px">💡 Ngữ pháp</div>';
  h += '<div style="padding:8px;background:var(--card-bg);border-radius:6px">';
  h += '<div class="jp-font" style="font-weight:700;color:var(--accent)">' + esc(gram.title) + "</div>";
  var shortContent = (gram.content || "").split("\n").slice(0, 3).join("\n");
  h += '<div style="font-size:0.88em;color:var(--text-secondary);margin-top:4px;white-space:pre-wrap">' + esc(shortContent) + "</div>";
  h += "</div>";
  h += '<div style="font-weight:700;margin:12px 0 4px">🧠 Mini Quiz</div>';
  h += '<div style="padding:8px;background:var(--card-bg);border-radius:6px">';
  h += '<div>「<span class="jp-font" style="font-weight:700">' + esc(quizWord.word) + "</span>」nghĩa là gì?</div>";
  h += '<div id="mini-quiz-opts" style="display:flex;flex-direction:column;gap:4px;margin-top:6px">';
  opts.forEach(function(o, i) {
    h += '<button class="st-btn mini-q-opt" onclick="answerMiniLesson(' + i + ')" data-val="' + esc(o) + '" style="text-align:left;padding:8px">' + esc(o) + "</button>";
  });
  h += '</div><div id="mini-quiz-fb" style="margin-top:6px"></div>';
  h += "</div>";
  h += '<button class="st-btn" onclick="openDailyMiniLesson()" style="margin-top:8px;width:100%">🔄 Bài khác</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function answerMiniLesson(idx) {
  if (_miniState.done) return;
  _miniState.done = true;
  var btns = document.querySelectorAll(".mini-q-opt");
  var chosen = btns[idx] ? btns[idx].getAttribute("data-val") : "";
  var correct = chosen === _miniState.answer;
  btns.forEach(function(b) {
    b.disabled = true;
    if (b.getAttribute("data-val") === _miniState.answer) b.classList.add("correct");
    if (b === btns[idx] && !correct) b.classList.add("wrong");
  });
  document.getElementById("mini-quiz-fb").innerHTML = correct ? '<span class="correct-text">✅ Đúng rồi!</span>' : '<span class="wrong-text">❌ Đáp án: ' + esc(_miniState.answer) + "</span>";
}
function closeDailyMiniLesson() {
  _clOv("mini-lesson-overlay");
}
var _dlpData = [
  { text: "明日は日曜日です。天気がいいですから、公園に行きます。友達と一緒にサッカーをします。", qs: [{ q: "Ngày mai là thứ mấy?", a: "Chủ nhật", opts: ["Thứ bảy", "Chủ nhật", "Thứ hai"] }, { q: "Họ sẽ làm gì?", a: "Chơi bóng đá", opts: ["Chơi bóng đá", "Xem phim", "Ăn cơm"] }] },
  { text: "昨日デパートで新しいかばんを買いました。赤いかばんです。三千円でした。", qs: [{ q: "Mua gì?", a: "Cặp mới", opts: ["Cặp mới", "Áo mới", "Giày mới"] }, { q: "Giá bao nhiêu?", a: "3000 yên", opts: ["2000 yên", "3000 yên", "5000 yên"] }] },
  { text: "私は毎朝六時に起きます。七時にご飯を食べて、八時に学校に行きます。", qs: [{ q: "Mấy giờ dậy?", a: "6 giờ", opts: ["5 giờ", "6 giờ", "7 giờ"] }, { q: "Mấy giờ đi học?", a: "8 giờ", opts: ["7 giờ", "8 giờ", "9 giờ"] }] }
];
var _dlpState = {};
function openDailyListening() {
  var ol = _ov("daily-listen-overlay");
  var item = _dlpData[_dayNum() % _dlpData.length];
  _dlpState = { item, qIdx: 0, done: [] };
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>🎧 Luyện nghe hàng ngày</h3><span class="mg-close" onclick="closeDailyListening()">✕</span></div>';
  h += `<div style="text-align:center;margin:12px 0"><button class="st-btn primary" onclick="speak('` + esc(item.text).replace(/'/g, "\\'") + `')" style="font-size:1.1em;padding:12px 24px">🔊 Nghe đoạn văn</button></div>`;
  h += '<div id="dlp-transcript" style="display:none;padding:10px;background:var(--card-bg);border-radius:6px;margin:8px 0"><div class="jp-font">' + esc(item.text) + "</div></div>";
  h += `<button class="st-btn" onclick="document.getElementById('dlp-transcript').style.display=document.getElementById('dlp-transcript').style.display==='none'?'block':'none'" style="width:100%;margin-bottom:8px">📝 Hiện/ẩn bài nghe</button>`;
  h += '<div id="dlp-qs"></div>';
  h += '<button class="st-btn" onclick="openDailyListening()" style="margin-top:8px;width:100%">🔄 Bài khác</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
  _dlpRenderQ();
}
function _dlpRenderQ() {
  var c = _dlpState;
  if (c.qIdx >= c.item.qs.length) {
    document.getElementById("dlp-qs").innerHTML = '<div style="text-align:center;padding:16px;background:var(--card-bg);border-radius:8px"><div style="font-size:1.5em">🎉</div><div style="font-weight:700;margin-top:4px">Hoàn thành!</div><div style="color:var(--text-secondary)">Đúng: ' + c.done.filter(function(x) {
      return x;
    }).length + "/" + c.item.qs.length + "</div></div>";
    return;
  }
  var q = c.item.qs[c.qIdx];
  var opts = shuffleArray([...q.opts]);
  var html = '<div style="padding:10px;background:var(--card-bg);border-radius:6px">';
  html += '<div style="font-weight:700;margin-bottom:6px">Câu ' + (c.qIdx + 1) + ": " + esc(q.q) + "</div>";
  html += '<div style="display:flex;flex-direction:column;gap:4px">';
  opts.forEach(function(o, i) {
    html += '<button class="st-btn dlp-opt" onclick="answerDailyListening(' + i + ')" data-val="' + esc(o) + '">' + esc(o) + "</button>";
  });
  html += '</div><div id="dlp-fb" style="margin-top:6px"></div></div>';
  document.getElementById("dlp-qs").innerHTML = html;
}
function answerDailyListening(idx) {
  var c = _dlpState;
  var q = c.item.qs[c.qIdx];
  var btns = document.querySelectorAll(".dlp-opt");
  if (!btns[idx] || btns[idx].disabled) return;
  var chosen = btns[idx].getAttribute("data-val");
  var correct = chosen === q.a;
  btns.forEach(function(b) {
    b.disabled = true;
    if (b.getAttribute("data-val") === q.a) b.classList.add("correct");
    if (b === btns[idx] && !correct) b.classList.add("wrong");
  });
  c.done.push(correct);
  document.getElementById("dlp-fb").innerHTML = correct ? '<span class="correct-text">✅ Đúng!</span>' : '<span class="wrong-text">❌ Đáp án: ' + esc(q.a) + "</span>";
  c.qIdx++;
  setTimeout(_dlpRenderQ, 1500);
}
function closeDailyListening() {
  _clOv("daily-listen-overlay");
}
var _phrases = [
  { jp: "お疲れ様です", reading: "おつかれさまです", vi: "Anh/chị vất vả rồi", context: "Dùng khi gặp đồng nghiệp/bạn học, hoặc khi tan ca." },
  { jp: "よろしくお願いします", reading: "よろしくおねがいします", vi: "Xin hãy giúp đỡ / Mong được chiếu cố", context: "Dùng khi gặp lần đầu, bắt đầu công việc chung." },
  { jp: "お先に失礼します", reading: "おさきにしつれいします", vi: "Tôi xin phép về trước", context: "Dùng khi rời khỏi nơi làm việc/học trước người khác." },
  { jp: "いただきます", reading: "いただきます", vi: "Tôi xin được ăn", context: "Nói trước khi ăn." },
  { jp: "ごちそうさまでした", reading: "ごちそうさまでした", vi: "Cảm ơn bữa ăn", context: "Nói sau khi ăn xong." },
  { jp: "お邪魔します", reading: "おじゃまします", vi: "Xin lỗi đã quấy rầy", context: "Nói khi vào nhà người khác." },
  { jp: "いってきます", reading: "いってきます", vi: "Tôi đi đây (sẽ quay lại)", context: "Nói khi ra khỏi nhà." },
  { jp: "ただいま", reading: "ただいま", vi: "Tôi về rồi", context: "Nói khi về đến nhà." },
  { jp: "しょうがない", reading: "しょうがない", vi: "Không có cách nào khác / Đành vậy thôi", context: "Dùng khi phải chấp nhận tình huống." },
  { jp: "気をつけてください", reading: "きをつけてください", vi: "Hãy cẩn thận", context: "Dùng khi tiễn ai đó đi." }
];
function openPhraseOfDay() {
  var ol = _ov("phrase-overlay");
  var day = _dayNum();
  var p = _phrases[day % _phrases.length];
  var others = shuffleArray(_phrases.filter(function(x) {
    return x !== p;
  })).slice(0, 3);
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>💬 Cụm từ hôm nay</h3><span class="mg-close" onclick="closePhraseOfDay()">✕</span></div>';
  h += '<div style="text-align:center;padding:20px;background:var(--card-bg);border-radius:8px;margin:8px 0">';
  h += `<div class="jp-font" style="font-size:1.8em;cursor:pointer" onclick="speak('` + esc(p.jp).replace(/'/g, "\\'") + `')">` + esc(p.jp) + "</div>";
  h += '<div class="jp-font" style="color:var(--accent);margin:4px 0">' + esc(p.reading) + "</div>";
  h += '<div style="font-weight:700;font-size:1.05em">' + esc(p.vi) + "</div>";
  h += '<div style="margin-top:10px;padding:8px;background:var(--bg);border-radius:4px;text-align:left;font-size:0.9em;color:var(--text-secondary)">💡 ' + esc(p.context) + "</div>";
  h += "</div>";
  if (others.length > 0) {
    h += '<div style="font-weight:700;margin:8px 0">📚 Cụm từ khác</div>';
    others.forEach(function(o) {
      h += `<div style="padding:6px 8px;background:var(--card-bg);border-radius:4px;margin-bottom:3px;cursor:pointer" onclick="speak('` + esc(o.jp).replace(/'/g, "\\'") + `')">`;
      h += '<span class="jp-font" style="font-weight:700">' + esc(o.jp) + "</span>";
      h += ' <span style="color:var(--text-secondary);font-size:0.85em">— ' + esc(o.vi) + "</span></div>";
    });
  }
  h += '<button class="st-btn" onclick="openPhraseOfDay()" style="margin-top:8px;width:100%">🔄 Tải lại</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closePhraseOfDay() {
  _clOv("phrase-overlay");
}
function openMistakeDigest() {
  var ol = _ov("mistake-digest-overlay");
  var srsData = getSRS();
  var items = [];
  Object.keys(srsData).forEach(function(key) {
    var entry = srsData[key];
    if (entry && entry.wrong && entry.wrong > 0) {
      items.push({ key, wrong: entry.wrong || 0, correct: entry.correct || 0, level: entry.level || 0 });
    }
  });
  items.sort(function(a, b) {
    return b.wrong - a.wrong;
  });
  var top5 = items.slice(0, 5);
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>❌ Lỗi sai cần ôn</h3><span class="mg-close" onclick="closeMistakeDigest()">✕</span></div>';
  if (top5.length === 0) {
    h += '<div style="text-align:center;padding:20px;color:var(--text-secondary)">🎉 Chưa có lỗi sai nào! Hãy làm quiz để bắt đầu.</div>';
  } else {
    h += '<div style="font-size:0.9em;color:var(--text-secondary);margin:8px 0">Top ' + top5.length + " mục sai nhiều nhất:</div>";
    top5.forEach(function(item, i) {
      var pct = item.correct + item.wrong > 0 ? Math.round(item.correct / (item.correct + item.wrong) * 100) : 0;
      h += '<div style="padding:10px;background:var(--card-bg);border-radius:6px;margin-bottom:6px">';
      h += '<div style="display:flex;justify-content:space-between;align-items:center">';
      h += '<span style="font-weight:700">' + (i + 1) + ". " + esc(item.key) + "</span>";
      h += '<span style="font-size:0.8em;color:' + (pct < 50 ? "var(--danger)" : "var(--accent)") + '">✅' + item.correct + " ❌" + item.wrong + " (" + pct + "%)</span>";
      h += "</div>";
      h += '<div style="background:var(--bg);border-radius:4px;height:6px;margin-top:4px"><div style="background:' + (pct < 50 ? "var(--danger)" : "var(--accent)") + ";width:" + pct + '%;height:100%;border-radius:4px"></div></div>';
      h += "</div>";
    });
  }
  h += '<button class="st-btn" onclick="openMistakeDigest()" style="margin-top:8px;width:100%">🔄 Tải lại</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeMistakeDigest() {
  _clOv("mistake-digest-overlay");
}
var _dkcState = {};
function openDailyKanjiChallenge() {
  var ol = _ov("dkc-overlay");
  var all = _allKanji();
  if (all.length < 5) {
    showToast("Không đủ dữ liệu");
    return;
  }
  var items = shuffleArray([...all]).slice(0, 5);
  _dkcState = { items, idx: 0, score: 0, answered: [] };
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>✍️ Thử thách Kanji</h3><span class="mg-close" onclick="closeDailyKanjiChallenge()">✕</span></div>';
  h += '<div style="font-size:0.9em;color:var(--text-secondary);margin:8px 0">Xem nghĩa → gõ cách đọc (hiragana) cho 5 kanji.</div>';
  h += '<div id="dkc-body"></div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
  _dkcRender();
}
function _dkcRender() {
  var c = _dkcState;
  if (c.idx >= c.items.length) {
    document.getElementById("dkc-body").innerHTML = '<div style="text-align:center;padding:20px;background:var(--card-bg);border-radius:8px"><div style="font-size:2em">🎉</div><div style="font-weight:700;margin:8px 0">Hoàn thành!</div><div style="color:var(--accent);font-size:1.2em">' + c.score + "/" + c.items.length + " đúng</div>" + c.answered.map(function(a) {
      return '<div style="margin-top:4px;font-size:0.9em">' + (a.correct ? "✅" : "❌") + ' <span class="jp-font">' + esc(a.kanji) + "</span> = " + esc(a.reading) + "</div>";
    }).join("") + '</div><button class="st-btn primary" onclick="openDailyKanjiChallenge()" style="margin-top:8px;width:100%">🔄 Chơi lại</button>';
    return;
  }
  var k = c.items[c.idx];
  k.reading || k.kun || k.on || "";
  var html = '<div style="text-align:center;margin:16px 0">';
  html += '<div style="color:var(--text-muted);font-size:0.85em">Câu ' + (c.idx + 1) + "/5</div>";
  html += `<div class="jp-font" style="font-size:3em;cursor:pointer" onclick="speak('` + esc(k.kanji).replace(/'/g, "\\'") + `')">` + esc(k.kanji) + "</div>";
  html += '<div style="color:var(--text-secondary)">' + esc(k.title || k.meaning || "") + "</div>";
  html += "</div>";
  html += `<input type="text" id="dkc-input" placeholder="Gõ cách đọc..." style="width:100%;padding:10px;font-size:1.1em;border-radius:6px;border:1px solid var(--border)" onkeydown="if(event.key==='Enter')checkDailyKanji()" autocomplete="off">`;
  html += '<div style="display:flex;gap:8px;margin-top:6px"><button class="st-btn primary" onclick="checkDailyKanji()">✓ Kiểm tra</button><button class="st-btn" onclick="revealDailyKanji()">💡 Đáp án</button></div>';
  html += '<div id="dkc-fb" style="margin-top:6px"></div>';
  document.getElementById("dkc-body").innerHTML = html;
  setTimeout(function() {
    var inp = document.getElementById("dkc-input");
    if (inp) inp.focus();
  }, 100);
}
function checkDailyKanji() {
  var c = _dkcState;
  if (c.idx >= c.items.length) return;
  var k = c.items[c.idx];
  var reading = k.reading || k.kun || k.on || "";
  var inp = document.getElementById("dkc-input");
  if (!inp) return;
  var user = inp.value.trim();
  var correct = user === reading || user === k.kanji || user === k.kun || user === k.on;
  if (correct) c.score++;
  c.answered.push({ kanji: k.kanji, reading, correct });
  inp.disabled = true;
  document.getElementById("dkc-fb").innerHTML = correct ? '<span class="correct-text">✅ ' + esc(k.kanji) + " = " + esc(reading) + "</span>" : '<span class="wrong-text">❌ Đáp án: ' + esc(reading) + "</span>";
  c.idx++;
  setTimeout(_dkcRender, correct ? 1200 : 2200);
}
function revealDailyKanji() {
  var c = _dkcState;
  if (c.idx >= c.items.length) return;
  var k = c.items[c.idx];
  var reading = k.reading || k.kun || k.on || "";
  var inp = document.getElementById("dkc-input");
  if (inp) inp.value = reading;
}
function closeDailyKanjiChallenge() {
  _clOv("dkc-overlay");
}
var _mqState = {};
function openMorningQuiz() {
  var ol = _ov("morning-quiz-overlay");
  var allV = _allVocab();
  var allK = _allKanji();
  if (allV.length < 5 || allK.length < 5) {
    showToast("Không đủ dữ liệu");
    return;
  }
  var qs = [];
  var vocabs = shuffleArray([...allV]).slice(0, 5);
  var kanjis = shuffleArray([...allK]).slice(0, 5);
  vocabs.forEach(function(v) {
    var wrongs = shuffleArray(allV.filter(function(x) {
      return x.word !== v.word && x.meaning;
    })).slice(0, 3).map(function(x) {
      return x.meaning;
    });
    qs.push({ type: "vocab", q: v.word, answer: v.meaning, opts: shuffleArray([v.meaning].concat(wrongs)) });
  });
  kanjis.forEach(function(k) {
    var reading = k.reading || k.kun || k.on || k.title || "";
    var wrongs = shuffleArray(allK.filter(function(x) {
      return x.kanji !== k.kanji;
    })).slice(0, 3).map(function(x) {
      return x.reading || x.kun || x.on || x.title || "";
    });
    qs.push({ type: "kanji", q: k.kanji, answer: reading, opts: shuffleArray([reading].concat(wrongs)) });
  });
  var mixed = shuffleArray(qs).slice(0, 10);
  _mqState = { qs: mixed, idx: 0, score: 0 };
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>☀️ Morning Quiz</h3><span class="mg-close" onclick="closeMorningQuiz()">✕</span></div>';
  h += '<div class="mg-progress">Câu <span id="mq-prog">1</span>/10 · Đúng: <span id="mq-score">0</span></div>';
  h += '<div id="mq-body"></div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
  _mqRender();
}
function _mqRender() {
  var c = _mqState;
  if (c.idx >= c.qs.length) {
    var pct = Math.round(c.score / c.qs.length * 100);
    document.getElementById("mq-body").innerHTML = '<div style="text-align:center;padding:20px;background:var(--card-bg);border-radius:8px"><div style="font-size:2em">' + (pct >= 80 ? "🌟" : pct >= 60 ? "👍" : "💪") + '</div><div style="font-weight:700;margin:8px 0">' + c.score + "/10 (" + pct + '%)</div><button class="st-btn primary" onclick="openMorningQuiz()" style="margin-top:8px">🔄 Làm lại</button></div>';
    return;
  }
  var q = c.qs[c.idx];
  var el = document.getElementById("mq-prog");
  if (el) el.textContent = c.idx + 1;
  var se = document.getElementById("mq-score");
  if (se) se.textContent = c.score;
  var icon = q.type === "kanji" ? "🈲" : "📝";
  var html = `<div style="text-align:center;margin:12px 0"><div class="jp-font" style="font-size:2em;cursor:pointer" onclick="speak('` + esc(q.q).replace(/'/g, "\\'") + `')">` + icon + " " + esc(q.q) + "</div></div>";
  html += '<div style="display:flex;flex-direction:column;gap:4px">';
  q.opts.forEach(function(o, i) {
    html += '<button class="st-btn mq-opt" onclick="answerMorningQuiz(' + i + ')" data-val="' + esc(o) + '" style="padding:10px">' + esc(o) + "</button>";
  });
  html += '</div><div id="mq-fb" style="margin-top:6px"></div>';
  document.getElementById("mq-body").innerHTML = html;
}
function answerMorningQuiz(idx) {
  var c = _mqState;
  var q = c.qs[c.idx];
  var btns = document.querySelectorAll(".mq-opt");
  if (!btns[idx] || btns[idx].disabled) return;
  var chosen = btns[idx].getAttribute("data-val");
  var correct = chosen === q.answer;
  btns.forEach(function(b) {
    b.disabled = true;
    if (b.getAttribute("data-val") === q.answer) b.classList.add("correct");
    if (b === btns[idx] && !correct) b.classList.add("wrong");
  });
  if (correct) c.score++;
  document.getElementById("mq-fb").innerHTML = correct ? '<span class="correct-text">✅</span>' : '<span class="wrong-text">❌ ' + esc(q.answer) + "</span>";
  c.idx++;
  setTimeout(_mqRender, correct ? 800 : 1800);
}
function closeMorningQuiz() {
  _clOv("morning-quiz-overlay");
}
function openNightReview() {
  var ol = _ov("night-review-overlay");
  var today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  var log;
  try {
    log = JSON.parse(safeGetItem("studyLog") || "{}");
  } catch (e) {
    log = {};
  }
  var todayLog = log[today] || { words: 0, kanji: 0, grammar: 0, quizzes: 0, correct: 0, wrong: 0 };
  var srsData = getSRS();
  var totalSrs = Object.keys(srsData).length;
  var dueCount = 0;
  Object.keys(srsData).forEach(function(k) {
    var e = srsData[k];
    if (e && e.nextReview && new Date(e.nextReview) <= /* @__PURE__ */ new Date()) dueCount++;
  });
  var bmData = getBookmarks();
  var bmCount = Object.keys(bmData).filter(function(k) {
    return bmData[k];
  }).length;
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>🌙 Tổng kết hôm nay</h3><span class="mg-close" onclick="closeNightReview()">✕</span></div>';
  h += '<div style="padding:16px;background:var(--card-bg);border-radius:8px;margin:8px 0">';
  h += '<div style="text-align:center;font-size:1.5em;margin-bottom:12px">🌙 ' + today + "</div>";
  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">';
  h += '<div style="text-align:center;padding:10px;background:var(--bg);border-radius:6px"><div style="font-size:1.5em;font-weight:700;color:var(--accent)">' + todayLog.words + '</div><div style="font-size:0.8em;color:var(--text-muted)">Từ vựng</div></div>';
  h += '<div style="text-align:center;padding:10px;background:var(--bg);border-radius:6px"><div style="font-size:1.5em;font-weight:700;color:var(--kanji-accent)">' + todayLog.kanji + '</div><div style="font-size:0.8em;color:var(--text-muted)">Kanji</div></div>';
  h += '<div style="text-align:center;padding:10px;background:var(--bg);border-radius:6px"><div style="font-size:1.5em;font-weight:700;color:var(--grammar-accent)">' + todayLog.grammar + '</div><div style="font-size:0.8em;color:var(--text-muted)">Ngữ pháp</div></div>';
  h += '<div style="text-align:center;padding:10px;background:var(--bg);border-radius:6px"><div style="font-size:1.5em;font-weight:700;color:var(--success)">' + todayLog.quizzes + '</div><div style="font-size:0.8em;color:var(--text-muted)">Quiz</div></div>';
  h += "</div>";
  if (todayLog.correct + todayLog.wrong > 0) {
    var acc = Math.round(todayLog.correct / (todayLog.correct + todayLog.wrong) * 100);
    h += '<div style="margin-top:10px;text-align:center">Độ chính xác: <span style="font-weight:700;color:' + (acc >= 80 ? "var(--success)" : "var(--danger)") + '">' + acc + "%</span> (" + todayLog.correct + "✅ " + todayLog.wrong + "❌)</div>";
  }
  h += '<div style="margin-top:10px;display:flex;gap:12px;justify-content:center">';
  h += '<div style="text-align:center"><div style="font-weight:700">' + totalSrs + '</div><div style="font-size:0.75em;color:var(--text-muted)">SRS items</div></div>';
  h += '<div style="text-align:center"><div style="font-weight:700;color:var(--accent)">' + dueCount + '</div><div style="font-size:0.75em;color:var(--text-muted)">Cần ôn</div></div>';
  h += '<div style="text-align:center"><div style="font-weight:700">⭐ ' + bmCount + '</div><div style="font-size:0.75em;color:var(--text-muted)">Bookmark</div></div>';
  h += "</div>";
  h += "</div>";
  h += '<div style="text-align:center;padding:12px;color:var(--text-secondary);font-size:0.9em">💤 Nghỉ ngơi đầy đủ, ngày mai học tiếp nhé!</div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeNightReview() {
  _clOv("night-review-overlay");
}
export {
  answerDailyListening,
  answerMiniLesson,
  answerMorningQuiz,
  checkDailyKanji,
  closeDailyKanjiChallenge,
  closeDailyListening,
  closeDailyMiniLesson,
  closeGrammarOfDay,
  closeKanjiOfDay,
  closeMistakeDigest,
  closeMorningQuiz,
  closeNightReview,
  closePhraseOfDay,
  closeWordOfDay,
  openDailyKanjiChallenge,
  openDailyListening,
  openDailyMiniLesson,
  openGrammarOfDay,
  openKanjiOfDay,
  openMistakeDigest,
  openMorningQuiz,
  openNightReview,
  openPhraseOfDay,
  openWordOfDay,
  revealDailyKanji
};
