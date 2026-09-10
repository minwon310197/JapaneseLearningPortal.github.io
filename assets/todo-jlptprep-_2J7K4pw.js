import { w as worldOverlayMount } from "./legacy-loader-gyvSYPc3.js";
import { ao as esc, ap as shuffleArray, ai as S, s as safeGetItem, d as safeSetItem } from "./index-BEJSIlFS.js";
import { s as showToast } from "./toast-Dwy3w2e2.js";
import { getSRS } from "./bookmarks-DzO2NqfT.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./world-tool-destinations-BAVvWbat.js";
import "./vendor-react-BUL8WuXG.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
/* empty css               */
function _ov(id) {
  var el = document.getElementById(id);
  if (!el) {
    el = document.createElement("div");
    el.id = id;
    el.className = "game-overlay";
    worldOverlayMount().appendChild(el);
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
function _hdr(title, icon, closeFn, guideText) {
  var h = '<div class="mg-container"><div class="mg-header"><h3>' + icon + " " + esc(title) + "</h3>";
  h += '<div style="display:flex;gap:4px;align-items:center">';
  h += '<button class="game-toolbar-btn" onclick="translateCurrentGame()" title="Dịch">🌐</button>';
  h += `<button class="game-toolbar-btn" onclick="this.closest('.mg-container').querySelector('.game-instructions').classList.toggle('show')" title="Hướng dẫn">📖</button>`;
  h += '<span class="mg-close" onclick="' + closeFn + '()">✕</span></div></div>';
  h += '<div class="game-instructions">' + (guideText || "") + "</div>";
  return h;
}
function _allVocab() {
  var r = [];
  (S.vocab || []).forEach(function(s) {
    (s.entries || []).forEach(function(e) {
      if (e.word && e.meaning) r.push(e);
    });
  });
  return r;
}
function _allGrammar() {
  var r = [];
  (S.grammar || []).forEach(function(s) {
    (s.patterns || []).forEach(function(p) {
      r.push(p);
    });
  });
  return r;
}
var _jmock = {};
function openMockVocab() {
  _jmock = { score: 0, idx: 0, total: 10, type: "vocab" };
  var all = _allVocab();
  if (all.length < 10) {
    showToast("Chưa đủ dữ liệu");
    return;
  }
  _jmock.items = shuffleArray(all).slice(0, 10);
  _showMockQ();
}
function _showMockQ() {
  var ol = _ov("mockvocab-overlay");
  var m = _jmock;
  if (m.idx >= m.total) {
    _showMockResult(ol, "mockvocab");
    return;
  }
  var item = m.items[m.idx];
  var word = item.word || item.kanji || "";
  var reading = item.reading || item.hiragana || "";
  var meaning = item.meaning || "";
  var all = _allVocab();
  var opts = [meaning];
  var _safe = 0;
  while (opts.length < 4 && _safe++ < 200) {
    var r = all[Math.floor(Math.random() * all.length)];
    var rm = r && (r.meaning || "");
    if (rm && opts.indexOf(rm) < 0) opts.push(rm);
  }
  while (opts.length < 4) opts.push("—");
  opts = shuffleArray(opts);
  var html = _hdr("Mock Test — 語彙 (" + (m.idx + 1) + "/" + m.total + ")", "📝", "closeMockVocab", "<b>📝 Mock Vocab</b> — Chọn nghĩa đúng cho từ vựng hiển thị. Dùng 🔊 nghe phát âm, 🔤 xem cách đọc, 🇻🇳 xem nghĩa.");
  html += '<div style="padding:12px;text-align:center">';
  html += `<div style="font-size:1.8em;font-weight:700;margin:12px 0;cursor:pointer" onclick="speak('` + esc(word).replace(/'/g, "\\'") + `')">` + esc(word) + " 🔊</div>";
  html += '<div class="mock-hint" style="display:none;font-size:0.9em;color:var(--accent);margin-bottom:6px">' + esc(reading) + "</div>";
  html += '<div style="display:flex;gap:6px;justify-content:center;margin-bottom:8px">';
  html += `<button class="game-hint-btn" onclick="this.closest('.mg-container').querySelector('.mock-hint').style.display='block'" title="Xem cách đọc">🔤 Romaji</button>`;
  html += `<button class="game-hint-btn" onclick="showToast('` + esc(meaning).replace(/'/g, "\\'") + `')" title="Xem nghĩa">🇻🇳 Nghĩa</button>`;
  html += "</div>";
  html += '<div style="font-size:0.85em;color:var(--text-muted);margin-bottom:8px">Chọn nghĩa đúng:</div>';
  opts.forEach(function(o, i) {
    html += '<button class="st-btn" onclick="answerMockVocab(' + i + ",'" + esc(meaning).replace(/'/g, "\\'") + `')" style="width:100%;margin:4px 0;text-align:left;padding:8px">` + (i + 1) + ". " + esc(o) + "</button>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function answerMockVocab(idx, correct) {
  var ol = document.getElementById("mockvocab-overlay");
  if (!ol) return;
  var btns = ol.querySelectorAll(".st-btn");
  var chosen = btns[idx] ? btns[idx].textContent.slice(3) : "";
  if (chosen === correct) {
    _jmock.score++;
    showToast("✅ Đúng!");
  } else showToast("❌ Đáp án: " + correct);
  _jmock.idx++;
  setTimeout(_showMockQ, 800);
}
function _showMockResult(ol, closeFn) {
  var m = _jmock;
  var pct = Math.round(m.score / m.total * 100);
  var html = _hdr("Kết quả Mock Test", "📊", closeFn === "mockvocab" ? "closeMockVocab" : closeFn === "mockgrammar" ? "closeMockGrammar" : closeFn === "mockread" ? "closeMockReading" : closeFn === "mocklisten" ? "closeMockListening" : "closeFullMockTest");
  html += '<div style="padding:16px;text-align:center">';
  html += '<div style="font-size:3em">' + (pct >= 70 ? "🏆" : pct >= 50 ? "👍" : "💪") + "</div>";
  html += '<div style="font-size:2em;font-weight:700;color:var(--accent)">' + m.score + "/" + m.total + "</div>";
  html += '<div style="font-size:0.9em;color:var(--text-muted)">' + pct + "% — " + (pct >= 70 ? "Tuyệt vời!" : pct >= 50 ? "Khá tốt!" : "Cần ôn thêm!") + "</div>";
  html += "</div></div>";
  ol.innerHTML = html;
  var hist = JSON.parse(safeGetItem("quizHistory") || "[]");
  hist.push({ date: (/* @__PURE__ */ new Date()).toLocaleDateString(), score: m.score, total: m.total, type: m.type || "mock" });
  safeSetItem("quizHistory", JSON.stringify(hist.slice(-50)));
}
function closeMockVocab() {
  _clOv("mockvocab-overlay");
}
function openMockGrammar() {
  _jmock = { score: 0, idx: 0, total: 10, type: "grammar" };
  var all = _allGrammar();
  if (all.length < 10) {
    showToast("Chưa đủ dữ liệu");
    return;
  }
  _jmock.items = shuffleArray(all).slice(0, 10);
  _showMockGrammarQ();
}
function _showMockGrammarQ() {
  var ol = _ov("mockgrammar-overlay");
  var m = _jmock;
  if (m.idx >= m.total) {
    _showMockResult(ol, "mockgrammar");
    return;
  }
  var item = m.items[m.idx];
  var pattern = item.title || item.pattern || "";
  var meaning = item.meaning || item.explanation || "";
  var example = item.examples && item.examples[0] ? item.examples[0].jp || item.examples[0].sentence || "" : "";
  var all = _allGrammar();
  var opts = [meaning];
  var _safe = 0;
  while (opts.length < 4 && _safe++ < 200) {
    var r = all[Math.floor(Math.random() * all.length)];
    var rm = r && (r.meaning || r.explanation || "");
    if (rm && opts.indexOf(rm) < 0) opts.push(rm);
  }
  while (opts.length < 4) opts.push("—");
  opts = shuffleArray(opts);
  var html = _hdr("Mock Test — 文法 (" + (m.idx + 1) + "/" + m.total + ")", "📝", "closeMockGrammar", "<b>📝 Mock Grammar</b> — Chọn nghĩa đúng cho mẫu ngữ pháp. Dùng 🔊 nghe phát âm, 💡 xem ví dụ, 🇻🇳 xem nghĩa.");
  html += '<div style="padding:12px;text-align:center">';
  html += `<div style="font-size:1.5em;font-weight:700;margin:12px 0;cursor:pointer" onclick="speak('` + esc(pattern).replace(/'/g, "\\'") + `')">` + esc(pattern) + " 🔊</div>";
  if (example) html += '<div class="mock-hint" style="display:none;font-size:0.85em;color:var(--accent);margin-bottom:6px;font-style:italic">' + esc(example) + "</div>";
  html += '<div style="display:flex;gap:6px;justify-content:center;margin-bottom:8px">';
  if (example) html += `<button class="game-hint-btn" onclick="this.closest('.mg-container').querySelector('.mock-hint').style.display='block'" title="Xem ví dụ">💡 Ví dụ</button>`;
  html += `<button class="game-hint-btn" onclick="showToast('` + esc(meaning).replace(/'/g, "\\'") + `')" title="Xem nghĩa">🇻🇳 Nghĩa</button>`;
  html += "</div>";
  html += '<div style="font-size:0.85em;color:var(--text-muted);margin-bottom:8px">Chọn nghĩa đúng:</div>';
  opts.forEach(function(o, i) {
    html += '<button class="st-btn" onclick="answerMockGrammar(' + i + ",'" + esc(meaning).replace(/'/g, "\\'") + `')" style="width:100%;margin:4px 0;text-align:left;padding:8px">` + (i + 1) + ". " + esc(o) + "</button>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function answerMockGrammar(idx, correct) {
  var ol = document.getElementById("mockgrammar-overlay");
  if (!ol) return;
  var btns = ol.querySelectorAll(".st-btn");
  var chosen = btns[idx] ? btns[idx].textContent.slice(3) : "";
  if (chosen === correct) {
    _jmock.score++;
    showToast("✅ Đúng!");
  } else showToast("❌ Đáp án: " + correct);
  _jmock.idx++;
  setTimeout(_showMockGrammarQ, 800);
}
function closeMockGrammar() {
  _clOv("mockgrammar-overlay");
}
function openMockReading() {
  _ov("mockread-overlay");
  var passages = [
    { text: "田中さんは毎日六時に起きます。朝ごはんを食べてから、七時に家を出ます。電車で会社に行きます。会社は九時からです。", q: "田中さんは何で会社に行きますか。", opts: ["バスで", "電車で", "車で", "自転車で"], ans: 1 },
    { text: "来週の土曜日にパーティーがあります。場所は山田さんの家です。午後三時から始まります。食べ物は持ってきてください。", q: "パーティーは何時から始まりますか。", opts: ["午後一時", "午後二時", "午後三時", "午後四時"], ans: 2 },
    { text: "私は先月日本に来ました。日本語学校で勉強しています。毎日漢字を二十個覚えます。難しいですが、楽しいです。", q: "この人は毎日何を覚えますか。", opts: ["ひらがな", "文法", "漢字", "カタカナ"], ans: 2 },
    { text: "私のアパートは駅から歩いて十五分です。近くにスーパーがあるので便利です。でも、夜は少し暗いので、自転車で帰ります。家賃は月に五万円です。", q: "アパートから一番近い店は何ですか。", opts: ["コンビニ", "スーパー", "薬局", "レストラン"], ans: 1 },
    { text: "この図書館は毎日朝九時から夜八時まで開いています。本を借りるときはカードが必要です。カードは受付で作れます。一度に五冊まで借りることができます。", q: "一度に何冊借りられますか。", opts: ["三冊", "四冊", "五冊", "六冊"], ans: 2 }
  ];
  _jmock = { score: 0, idx: 0, total: passages.length, items: passages, type: "reading" };
  _showReadQ();
}
function _showReadQ() {
  var ol = _ov("mockread-overlay");
  var m = _jmock;
  if (m.idx >= m.total) {
    _showMockResult(ol, "mockread");
    return;
  }
  var p = m.items[m.idx];
  var html = _hdr("Mock Test — 読解 (" + (m.idx + 1) + "/" + m.total + ")", "📖", "closeMockReading", "<b>📖 Mock Reading</b> — Đọc đoạn văn và trả lời câu hỏi. Dùng 🔊 nghe đoạn văn, 🌐 dịch để hỗ trợ hiểu.");
  html += '<div style="padding:12px">';
  html += `<div style="background:var(--card-bg);padding:12px;border-radius:6px;font-size:1.1em;line-height:1.8;margin-bottom:8px;cursor:pointer" onclick="speak('` + esc(p.text).replace(/'/g, "\\'") + `')">` + esc(p.text) + "</div>";
  html += `<div style="text-align:center;margin-bottom:8px"><button class="game-hint-btn" onclick="speak('` + esc(p.text).replace(/'/g, "\\'") + `')">🔊 Nghe đoạn văn</button></div>`;
  html += '<div style="font-weight:700;margin-bottom:8px">' + esc(p.q) + "</div>";
  p.opts.forEach(function(o, i) {
    html += '<button class="st-btn" onclick="answerMockReading(' + i + "," + p.ans + ')" style="width:100%;margin:3px 0;text-align:left;padding:8px">' + (i + 1) + ". " + esc(o) + "</button>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function answerMockReading(idx, correctIdx) {
  if (idx === correctIdx) {
    _jmock.score++;
    showToast("✅ Đúng!");
  } else showToast("❌ Sai rồi!");
  _jmock.idx++;
  setTimeout(_showReadQ, 800);
}
function closeMockReading() {
  _clOv("mockread-overlay");
}
function openMockListening() {
  _ov("mocklisten-overlay");
  var items = [
    { jp: "すみません、駅はどこですか。", q: "Người nói muốn đi đâu?", opts: ["Bệnh viện", "Nhà ga", "Trường học", "Siêu thị"], ans: 1 },
    { jp: "明日は雨が降るでしょう。傘を持ってきてください。", q: "Cần mang theo gì?", opts: ["帽子", "傘", "上着", "財布"], ans: 1 },
    { jp: "コーヒーを二つお願いします。一つはミルクなしで。", q: "Đặt mấy ly cà phê?", opts: ["1 ly", "2 ly", "3 ly", "4 ly"], ans: 1 },
    { jp: "この電車は次の駅で止まりません。新宿に行きたい方は、次の快速電車に乗り換えてください。", q: "Muốn đi Shinjuku thì làm gì?", opts: ["Ngồi yên", "Đổi tàu nhanh", "Xuống ga sau", "Đi xe buýt"], ans: 1 },
    { jp: "今日の会議は三時から始まります。資料は田中さんが準備します。飲み物もお願いしますね。", q: "Ai chuẩn bị tài liệu?", opts: ["佐藤さん", "田中さん", "山田さん", "鈴木さん"], ans: 1 }
  ];
  _jmock = { score: 0, idx: 0, total: items.length, items, type: "listening" };
  _showListenQ();
}
function _showListenQ() {
  var ol = _ov("mocklisten-overlay");
  var m = _jmock;
  if (m.idx >= m.total) {
    _showMockResult(ol, "mocklisten");
    return;
  }
  var item = m.items[m.idx];
  var html = _hdr("Mock Test — 聴解 (" + (m.idx + 1) + "/" + m.total + ")", "🎧", "closeMockListening", "<b>🎧 Mock Listening</b> — Nghe câu tiếng Nhật và trả lời câu hỏi. Nhấn 🔊 để nghe lại. Dùng 🔤 xem nguyên văn nếu cần.");
  html += '<div style="padding:12px;text-align:center">';
  html += `<button class="st-btn primary" onclick="speak('` + esc(item.jp).replace(/'/g, "\\'") + `')" style="font-size:1.2em;margin:12px 0">🔊 Nghe</button>`;
  html += '<div class="mock-hint" style="display:none;font-size:0.9em;color:var(--accent);margin-bottom:6px">' + esc(item.jp) + "</div>";
  html += `<div style="margin-bottom:8px"><button class="game-hint-btn" onclick="this.closest('.mg-container').querySelector('.mock-hint').style.display='block'" title="Xem nguyên văn">🔤 Xem text</button></div>`;
  html += '<div style="font-weight:700;margin:8px 0">' + esc(item.q) + "</div>";
  item.opts.forEach(function(o, i) {
    html += '<button class="st-btn" onclick="answerMockListening(' + i + "," + item.ans + ')" style="width:100%;margin:3px 0;text-align:left;padding:8px">' + (i + 1) + ". " + esc(o) + "</button>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function answerMockListening(idx, correctIdx) {
  if (idx === correctIdx) {
    _jmock.score++;
    showToast("✅ Đúng!");
  } else showToast("❌ Sai rồi!");
  _jmock.idx++;
  setTimeout(_showListenQ, 800);
}
function closeMockListening() {
  _clOv("mocklisten-overlay");
}
function openFullMockTest() {
  var ol = _ov("fullmock-overlay");
  var html = _hdr("JLPT N4 Full Mock Test", "🎯", "closeFullMockTest");
  html += '<div style="padding:16px;text-align:center">';
  html += '<div style="font-size:1.2em;font-weight:700;margin-bottom:12px">Bài thi thử N4 đầy đủ</div>';
  html += '<div style="font-size:0.85em;color:var(--text-muted);margin-bottom:16px">3 phần: 語彙 → 文法 → 読解</div>';
  html += '<button class="st-btn primary" onclick="openMockVocab();closeFullMockTest()" style="width:100%;margin:4px 0;padding:12px">📝 Bắt đầu thi thử</button>';
  html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:12px">';
  html += '<div style="padding:8px;background:var(--card-bg);border-radius:6px;cursor:pointer" onclick="openMockVocab();closeFullMockTest()"><div>📖</div><div style="font-size:0.75em">Từ vựng</div></div>';
  html += '<div style="padding:8px;background:var(--card-bg);border-radius:6px;cursor:pointer" onclick="openMockGrammar();closeFullMockTest()"><div>📝</div><div style="font-size:0.75em">Ngữ pháp</div></div>';
  html += '<div style="padding:8px;background:var(--card-bg);border-radius:6px;cursor:pointer" onclick="openMockReading();closeFullMockTest()"><div>📖</div><div style="font-size:0.75em">Đọc hiểu</div></div>';
  html += "</div></div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeFullMockTest() {
  _clOv("fullmock-overlay");
}
function openTestStrategy() {
  var ol = _ov("teststrategy-overlay");
  var tips = [
    { title: "語彙 — Từ vựng", tips: ["Đọc kỹ toàn bộ đáp án trước khi chọn", "Chú ý ngữ cảnh câu, không dịch từng từ", "Từ Hán-Việt giúp đoán nghĩa nhanh"] },
    { title: "文法 — Ngữ pháp", tips: ["Xác định chủ ngữ trước", "Loại trừ đáp án sai ngữ pháp", "Chú ý trợ từ は/が/を/に"] },
    { title: "読解 — Đọc hiểu", tips: ["Đọc câu hỏi TRƯỚC khi đọc bài", "Tìm từ khóa trong bài", "Đáp án thường paraphrase, không copy nguyên"] },
    { title: "聴解 — Nghe hiểu", tips: ["Đọc đáp án trước khi nghe", "Ghi chú nhanh số, thời gian, địa điểm", "Không lo nếu bỏ lỡ 1 câu, tập trung câu tiếp"] }
  ];
  var html = _hdr("Test Strategy Tips", "💡", "closeTestStrategy");
  html += '<div style="padding:8px">';
  tips.forEach(function(sec) {
    html += '<div style="margin:8px 0"><div style="font-weight:700;color:var(--accent);font-size:0.9em">' + esc(sec.title) + "</div>";
    sec.tips.forEach(function(t) {
      html += '<div style="font-size:0.85em;padding:2px 0;padding-left:12px">• ' + esc(t) + "</div>";
    });
    html += "</div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeTestStrategy() {
  _clOv("teststrategy-overlay");
}
function openJLPTTraps() {
  var ol = _ov("jlpttraps-overlay");
  var traps = [
    { trap: "Đáp án chứa từ giống bài nghe nhưng nghĩa khác", fix: "Nghe toàn câu, không chỉ nghe từ khóa" },
    { trap: "Hai đáp án ngữ pháp giống nhau", fix: "Xem ngữ cảnh: thời gian, chủ ngữ, tính lịch sự" },
    { trap: "Bẫy negative (ない、ません)", fix: "Đánh dấu phủ định khi đọc câu hỏi" },
    { trap: "Đáp án đọc hiểu copy nguyên từ bài", fix: "JLPT thường paraphrase, đáp án copy là bẫy" },
    { trap: "Từ vựng giống nhau about 1 chữ", fix: "Phân biệt: 聞く/聴く, 帰る/返す, 教える/覚える" }
  ];
  var html = _hdr("Common JLPT Traps", "⚠️", "closeJLPTTraps");
  html += '<div style="padding:8px">';
  traps.forEach(function(t) {
    html += '<div style="background:var(--card-bg);padding:8px;border-radius:6px;margin:6px 0">';
    html += '<div style="color:var(--danger);font-weight:700;font-size:0.85em">🕳️ ' + esc(t.trap) + "</div>";
    html += '<div style="color:var(--success);font-size:0.8em;margin-top:4px">✅ ' + esc(t.fix) + "</div></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeJLPTTraps() {
  _clOv("jlpttraps-overlay");
}
function openVocabByFreq() {
  var ol = _ov("vocabfreq-overlay");
  var all = _allVocab();
  var srs = getSRS();
  var sorted = all.slice().sort(function(a, b) {
    var ka = "v-" + (a.word || "");
    var kb = "v-" + (b.word || "");
    var sa = srs[ka] ? (srs[ka].correct || 0) + (srs[ka].wrong || 0) : 0;
    var sb = srs[kb] ? (srs[kb].correct || 0) + (srs[kb].wrong || 0) : 0;
    return sb - sa;
  }).slice(0, 30);
  var html = _hdr("Vocab by Frequency", "📊", "closeVocabByFreq");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.8em;color:var(--text-muted);margin-bottom:6px">Từ vựng bạn đã luyện nhiều nhất (SRS):</div>';
  sorted.forEach(function(e, i) {
    html += '<div style="display:flex;gap:8px;padding:3px 0;font-size:0.85em;border-bottom:1px solid var(--border)">';
    html += '<span style="color:var(--text-muted);width:20px">' + (i + 1) + "</span>";
    html += `<span style="font-weight:700;cursor:pointer" onclick="speak('` + esc(e.word || "").replace(/'/g, "\\'") + `')">` + esc(e.word || "") + "</span>";
    html += '<span style="color:var(--text-secondary)">' + esc(e.meaning || "") + "</span></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeVocabByFreq() {
  _clOv("vocabfreq-overlay");
}
function openGrammarByFreq() {
  var ol = _ov("grammarfreq-overlay");
  var all = _allGrammar();
  var srs = getSRS();
  var sorted = all.slice().sort(function(a, b) {
    var ka = "g-" + (a.title || a.pattern || "");
    var kb = "g-" + (b.title || b.pattern || "");
    var sa = srs[ka] ? (srs[ka].correct || 0) + (srs[ka].wrong || 0) : 0;
    var sb = srs[kb] ? (srs[kb].correct || 0) + (srs[kb].wrong || 0) : 0;
    return sb - sa;
  }).slice(0, 20);
  var html = _hdr("Grammar by Frequency", "📋", "closeGrammarByFreq");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.8em;color:var(--text-muted);margin-bottom:6px">Ngữ pháp bạn đã luyện nhiều nhất:</div>';
  sorted.forEach(function(p, i) {
    html += '<div style="padding:4px 0;font-size:0.85em;border-bottom:1px solid var(--border)">';
    html += '<span style="color:var(--text-muted)">' + (i + 1) + ". </span>";
    html += '<span style="font-weight:700">' + esc(p.title || p.pattern || "") + "</span>";
    html += ' <span style="color:var(--text-secondary)">' + esc(p.meaning || "") + "</span></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeGrammarByFreq() {
  _clOv("grammarfreq-overlay");
}
function openReadStrategy() {
  var ol = _ov("readstrategy-overlay");
  var strategies = [
    { name: "Scanning", desc: "Lướt nhanh tìm từ khóa (số, tên, thời gian)", practice: "Đọc đoạn văn, tìm: ai, ở đâu, khi nào" },
    { name: "Skimming", desc: "Đọc câu đầu + câu cuối mỗi đoạn để nắm ý chính", practice: "Tóm tắt 1 câu cho mỗi đoạn" },
    { name: "Key-word Focus", desc: "Gạch chân từ quan trọng trong câu hỏi", practice: "Đọc câu hỏi trước, đánh dấu từ khóa" },
    { name: "Context Clues", desc: "Đoán nghĩa từ mới qua ngữ cảnh xung quanh", practice: "Khi gặp từ không biết, đọc cả câu và đoán" },
    { name: "Question First", desc: "Đọc câu hỏi trước khi đọc đoạn văn", practice: "Đọc 4 đáp án → đọc bài → chọn ngay" }
  ];
  var html = _hdr("Reading Strategy", "📖", "closeReadStrategy");
  html += '<div style="padding:8px">';
  strategies.forEach(function(s) {
    html += '<div style="background:var(--card-bg);padding:10px;border-radius:6px;margin:6px 0">';
    html += '<div style="font-weight:700;color:var(--accent)">' + esc(s.name) + "</div>";
    html += '<div style="font-size:0.85em;margin:4px 0">' + esc(s.desc) + "</div>";
    html += '<div style="font-size:0.8em;color:var(--success)">🎯 ' + esc(s.practice) + "</div></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeReadStrategy() {
  _clOv("readstrategy-overlay");
}
function openListenStrategy() {
  var ol = _ov("listenstrategy-overlay");
  var strategies = [
    { name: "Number Focus", desc: "Luyện nghe số: giá tiền, ngày, giờ, điện thoại", practice: "Nghe và ghi lại mọi con số" },
    { name: "Intent Detection", desc: "Xác định người nói muốn gì (mời, từ chối, hỏi)", practice: "Nghe giọng điệu + cấu trúc cuối câu" },
    { name: "Direction Tracking", desc: "Theo dõi hướng: 右、左、まっすぐ", practice: "Vẽ sơ đồ khi nghe chỉ đường" },
    { name: "Key Phrase Catch", desc: "Bắt cụm từ quan trọng: でも、しかし、ところで (chuyển ý)", practice: "Nghe và đánh dấu mỗi khi có từ chuyển ý" },
    { name: "Answer Prediction", desc: "Đọc đáp án trước, dự đoán nội dung sẽ nghe", practice: "Nhìn 4 đáp án, đoán câu hỏi sẽ hỏi gì" }
  ];
  var html = _hdr("Listening Strategy", "🎧", "closeListenStrategy");
  html += '<div style="padding:8px">';
  strategies.forEach(function(s) {
    html += '<div style="background:var(--card-bg);padding:10px;border-radius:6px;margin:6px 0">';
    html += '<div style="font-weight:700;color:var(--accent)">' + esc(s.name) + "</div>";
    html += '<div style="font-size:0.85em;margin:4px 0">' + esc(s.desc) + "</div>";
    html += '<div style="font-size:0.8em;color:var(--success)">🎯 ' + esc(s.practice) + "</div></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeListenStrategy() {
  _clOv("listenstrategy-overlay");
}
function openAnswerSheet() {
  var ol = _ov("anssheet-overlay");
  var html = _hdr("Answer Sheet Practice", "📋", "closeAnswerSheet");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.85em;margin-bottom:8px">Luyện tô phiếu trả lời JLPT (10 câu):</div>';
  for (var i = 1; i <= 10; i++) {
    html += '<div style="display:flex;align-items:center;gap:6px;padding:3px 0">';
    html += '<span style="width:25px;font-size:0.8em">' + i + ".</span>";
    for (var j = 1; j <= 4; j++) {
      html += `<span class="ans-bubble" onclick="var row=this.parentElement;row.querySelectorAll('.ans-bubble').forEach(function(b){b.style.background='';b.style.color=''});this.style.background='var(--accent)';this.style.color='#fff'" style="width:28px;height:28px;border-radius:50%;border:2px solid var(--border);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;font-size:0.8em">` + j + "</span>";
    }
    html += "</div>";
  }
  html += '<div style="font-size:0.75em;color:var(--text-muted);margin-top:8px">Nhấn để tô. Luyện thao tác nhanh!</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeAnswerSheet() {
  _clOv("anssheet-overlay");
}
function openTimeMgmt() {
  var ol = _ov("timemgmt-overlay");
  var html = _hdr("Time Management", "⏱️", "closeTimeMgmt");
  html += '<div style="padding:8px">';
  var sections = [
    { name: "文字・語彙 (Từ vựng)", time: "25 phút", questions: "9 bài", perQ: "~2.5 phút/bài" },
    { name: "文法 (Ngữ pháp)", time: "25 phút", questions: "5 bài", perQ: "~4 phút/bài" },
    { name: "読解 (Đọc hiểu)", time: "55 phút", questions: "9 bài", perQ: "~6 phút/bài" },
    { name: "聴解 (Nghe hiểu)", time: "35 phút", questions: "4 phần", perQ: "Theo tốc độ audio" }
  ];
  sections.forEach(function(s) {
    html += '<div style="background:var(--card-bg);padding:8px;border-radius:6px;margin:6px 0">';
    html += '<div style="font-weight:700;font-size:0.9em">' + esc(s.name) + "</div>";
    html += '<div style="display:flex;justify-content:space-between;font-size:0.8em;color:var(--text-muted)">';
    html += "<span>⏰ " + s.time + "</span><span>📝 " + s.questions + "</span><span>⚡ " + s.perQ + "</span></div></div>";
  });
  html += '<div style="font-size:0.8em;color:var(--accent);margin-top:8px">💡 Tip: Không nên dành quá lâu cho 1 câu. Skip câu khó, quay lại sau!</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeTimeMgmt() {
  _clOv("timemgmt-overlay");
}
function openElimination() {
  var ol = _ov("elimination-overlay");
  var html = _hdr("Elimination Strategy", "❌", "closeElimination");
  html += '<div style="padding:8px">';
  var steps = [
    { step: "1. Đọc câu hỏi kỹ", detail: "Xác định chính xác câu hỏi yêu cầu gì" },
    { step: "2. Loại đáp án chắc chắn sai", detail: "Thường loại được 1-2 đáp án ngay" },
    { step: "3. So sánh đáp án còn lại", detail: "Tìm điểm khác biệt giữa 2 đáp án" },
    { step: "4. Kiểm tra ngữ cảnh", detail: "Đáp án nào phù hợp ngữ cảnh hơn?" },
    { step: "5. Tin vào trực giác đầu tiên", detail: "Nếu không chắc, chọn đáp án đầu tiên nghĩ tới" }
  ];
  steps.forEach(function(s) {
    html += '<div style="padding:6px 0;border-bottom:1px solid var(--border)">';
    html += '<div style="font-weight:700;font-size:0.9em;color:var(--accent)">' + esc(s.step) + "</div>";
    html += '<div style="font-size:0.8em;color:var(--text-secondary)">' + esc(s.detail) + "</div></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeElimination() {
  _clOv("elimination-overlay");
}
function openScorePredictor() {
  var ol = _ov("scorepred-overlay");
  var srs = getSRS();
  var total = Object.keys(srs).length;
  var correct = 0;
  var wrong = 0;
  Object.values(srs).forEach(function(e) {
    correct += e.correct || 0;
    wrong += e.wrong || 0;
  });
  var accuracy = correct + wrong > 0 ? Math.round(correct / (correct + wrong) * 100) : 0;
  var vocabScore = Math.round(accuracy * 0.6);
  var gramScore = Math.round(accuracy * 0.6);
  var readScore = Math.round(accuracy * 0.6);
  var totalScore = vocabScore + gramScore + readScore;
  var pass = totalScore >= 90;
  var html = _hdr("JLPT N4 Score Prediction", "🎯", "closeScorePredictor");
  html += '<div style="padding:16px;text-align:center">';
  html += '<div style="font-size:3em">' + (pass ? "🏆" : "💪") + "</div>";
  html += '<div style="font-size:2em;font-weight:700;color:var(--accent)">' + totalScore + "/180</div>";
  html += '<div style="font-size:0.9em;color:' + (pass ? "var(--success)" : "var(--danger)") + '">' + (pass ? "✅ Khả năng đỗ cao!" : "⚠️ Cần ôn thêm!") + "</div>";
  html += '<div style="margin-top:12px;text-align:left;font-size:0.85em">';
  html += "<div>📖 言語知識 (語彙): " + vocabScore + "/60</div>";
  html += "<div>📝 言語知識 (文法): " + gramScore + "/60</div>";
  html += "<div>📖 読解: " + readScore + "/60</div>";
  html += "</div>";
  html += '<div style="font-size:0.75em;color:var(--text-muted);margin-top:8px">* Dựa trên ' + total + " từ đã ôn, accuracy " + accuracy + "%</div>";
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeScorePredictor() {
  _clOv("scorepred-overlay");
}
export {
  answerMockGrammar,
  answerMockListening,
  answerMockReading,
  answerMockVocab,
  closeAnswerSheet,
  closeElimination,
  closeFullMockTest,
  closeGrammarByFreq,
  closeJLPTTraps,
  closeListenStrategy,
  closeMockGrammar,
  closeMockListening,
  closeMockReading,
  closeMockVocab,
  closeReadStrategy,
  closeScorePredictor,
  closeTestStrategy,
  closeTimeMgmt,
  closeVocabByFreq,
  openAnswerSheet,
  openElimination,
  openFullMockTest,
  openGrammarByFreq,
  openJLPTTraps,
  openListenStrategy,
  openMockGrammar,
  openMockListening,
  openMockReading,
  openMockVocab,
  openReadStrategy,
  openScorePredictor,
  openTestStrategy,
  openTimeMgmt,
  openVocabByFreq
};
