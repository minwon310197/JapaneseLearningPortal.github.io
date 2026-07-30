import { ab as S, s as safeGetItem, bK as esc, bB as shuffleArray } from "./feature-3d-jK3b4Iv-.js";
import { s as showToast } from "./toast-CJdbqLP6.js";
import { s as speak } from "./tts-CmyFILQG.js";
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
function _hdr(title, icon, closeFn) {
  return '<div class="mg-container"><div class="mg-header"><h3>' + icon + " " + esc(title) + '</h3><span class="mg-close" onclick="' + closeFn + '()">✕</span></div>';
}
function openConsistency() {
  var ol = _ov("consistency-overlay");
  var log = JSON.parse(safeGetItem("dailyLog") || "{}");
  (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  var days7 = 0, days30 = 0;
  for (var i = 0; i < 30; i++) {
    var d = new Date(Date.now() - i * 864e5).toISOString().slice(0, 10);
    if (log[d] && log[d].count > 0) {
      days30++;
      if (i < 7) days7++;
    }
  }
  var score7 = Math.round(days7 / 7 * 100);
  var score30 = Math.round(days30 / 30 * 100);
  var html = _hdr("Consistency Score", "📅", "closeConsistency");
  html += '<div style="padding:16px;text-align:center">';
  html += '<div style="display:flex;gap:12px;justify-content:center;margin-bottom:12px">';
  html += '<div style="padding:16px;background:var(--card-bg);border-radius:8px;flex:1"><div style="font-size:2.5em;font-weight:700;color:var(--accent)">' + score7 + '%</div><div style="font-size:0.8em">7 ngày</div></div>';
  html += '<div style="padding:16px;background:var(--card-bg);border-radius:8px;flex:1"><div style="font-size:2.5em;font-weight:700;color:var(--grammar-accent)">' + score30 + '%</div><div style="font-size:0.8em">30 ngày</div></div>';
  html += "</div>";
  html += '<div style="font-size:0.85em;color:var(--text-secondary)">';
  if (score7 >= 85) html += "🔥 Tuyệt vời! Bạn học rất đều đặn!";
  else if (score7 >= 50) html += "📚 Khá tốt! Cố gắng học đều hơn nhé.";
  else html += "🌱 Hãy cố gắng học mỗi ngày để tiến bộ!";
  html += "</div></div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeConsistency() {
  _clOv("consistency-overlay");
}
function openWordFrequency() {
  var ol = _ov("wordfreq-overlay");
  var srs = S.srs || {};
  var allV = _allVocab();
  var ranked = allV.map(function(v) {
    var e = srs[v.word] || {};
    return { word: v.word, meaning: v.meaning, reading: v.reading, freq: (e.correct || 0) + (e.wrong || 0) };
  }).sort(function(a, b) {
    return b.freq - a.freq;
  });
  var html = _hdr("Tần suất từ vựng", "📊", "closeWordFrequency");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.8em;color:var(--text-muted);margin-bottom:8px">Từ bạn ôn nhiều nhất:</div>';
  ranked.slice(0, 15).forEach(function(w, i) {
    html += '<div style="display:flex;align-items:center;gap:8px;padding:3px 0;font-size:0.85em">';
    html += '<span style="width:20px;color:var(--text-muted)">' + (i + 1) + "</span>";
    html += `<span class="jp-font" style="flex:1;font-weight:700;cursor:pointer" onclick="speak('` + esc(w.word).replace(/'/g, "\\'") + `')">` + esc(w.word) + "</span>";
    html += '<span style="color:var(--text-muted)">' + esc(w.meaning) + "</span>";
    html += '<span style="color:var(--accent);font-weight:700;width:30px;text-align:right">' + w.freq + "</span></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeWordFrequency() {
  _clOv("wordfreq-overlay");
}
function openGrammarFrequency() {
  var ol = _ov("gramfreq-overlay");
  var srs = S.srs || {};
  var allG = _allGrammar();
  var ranked = allG.map(function(p) {
    var e = srs[p.title] || srs[p.id] || {};
    return { title: p.title, id: p.id, freq: (e.correct || 0) + (e.wrong || 0) };
  }).sort(function(a, b) {
    return b.freq - a.freq;
  });
  var html = _hdr("Tần suất ngữ pháp", "📋", "closeGrammarFrequency");
  html += '<div style="padding:8px">';
  ranked.slice(0, 15).forEach(function(g, i) {
    html += '<div style="display:flex;align-items:center;gap:8px;padding:3px 0;font-size:0.85em">';
    html += '<span style="width:20px;color:var(--text-muted)">' + (i + 1) + "</span>";
    html += '<span class="jp-font" style="flex:1;font-weight:700">' + esc(g.title) + "</span>";
    html += '<span style="color:var(--grammar-accent);font-weight:700">' + g.freq + "</span></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeGrammarFrequency() {
  _clOv("gramfreq-overlay");
}
var _cqb = {};
function openCustomQuiz() {
  var ol = _ov("customquiz-overlay");
  var html = _hdr("Custom Quiz Builder", "🔨", "closeCustomQuiz");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.85em;margin-bottom:8px">Chọn nguồn dữ liệu:</div>';
  html += '<div id="cqb-opts">';
  html += '<label style="display:flex;align-items:center;gap:6px;padding:4px 0"><input type="checkbox" id="cqb-vocab" checked> Từ vựng</label>';
  html += '<label style="display:flex;align-items:center;gap:6px;padding:4px 0"><input type="checkbox" id="cqb-kanji"> Kanji</label>';
  html += '<div style="margin-top:8px"><label style="font-size:0.85em">Số câu hỏi:</label>';
  html += '<select id="cqb-count" style="margin-left:8px;padding:2px 8px;border-radius:4px;border:1px solid var(--border)"><option value="5">5</option><option value="10" selected>10</option><option value="20">20</option></select></div>';
  html += "</div>";
  html += '<button class="st-btn primary" onclick="startCustomQuiz()" style="width:100%;margin-top:12px">🎮 Bắt đầu Quiz</button>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function startCustomQuiz() {
  var useVocab = document.getElementById("cqb-vocab") && document.getElementById("cqb-vocab").checked;
  var useKanji = document.getElementById("cqb-kanji") && document.getElementById("cqb-kanji").checked;
  var count = parseInt((document.getElementById("cqb-count") || {}).value || "10", 10);
  var pool = [];
  if (useVocab) _allVocab().forEach(function(v) {
    pool.push({ q: v.word, a: v.meaning, r: v.reading });
  });
  if (useKanji) _allKanji().forEach(function(k) {
    pool.push({ q: k.kanji, a: k.title || k.meaning || "", r: k.on || "" });
  });
  if (pool.length === 0) {
    showToast("Chọn ít nhất 1 nguồn");
    return;
  }
  var items = shuffleArray(pool).slice(0, count);
  _cqb = { items, idx: 0, score: 0 };
  _cqbRender();
}
function _cqbRender() {
  var el = document.querySelector("#customquiz-overlay .mg-container");
  if (!el) return;
  if (_cqb.idx >= _cqb.items.length) {
    el.innerHTML = '<div class="mg-header"><h3>🔨 Kết quả</h3><span class="mg-close" onclick="closeCustomQuiz()">✕</span></div>';
    el.innerHTML += '<div style="text-align:center;padding:20px"><div style="font-size:2em">🎉</div><div style="font-weight:700;margin:8px 0">' + _cqb.score + "/" + _cqb.items.length + '</div><button class="st-btn primary" onclick="openCustomQuiz()" style="margin-top:8px">🔄 Quiz mới</button></div>';
    return;
  }
  var item = _cqb.items[_cqb.idx];
  var allPool = _cqb.items.map(function(i) {
    return i.a;
  });
  var opts = [item.a];
  var _safe = 0;
  while (opts.length < 4 && _safe++ < 200) {
    var r = allPool[Math.floor(Math.random() * allPool.length)];
    if (r && opts.indexOf(r) < 0) opts.push(r);
  }
  var extras = ["không biết", "khác", "không rõ"];
  extras.forEach(function(e) {
    if (opts.length < 4) opts.push(e);
  });
  opts = shuffleArray(opts);
  var html2 = '<div class="mg-header"><h3>🔨 Custom Quiz</h3><span class="mg-close" onclick="closeCustomQuiz()">✕</span></div>';
  html2 += '<div style="padding:12px;text-align:center">';
  html2 += `<div class="jp-font" style="font-size:2em;cursor:pointer" onclick="speak('` + esc(item.q).replace(/'/g, "\\'") + `')">` + esc(item.q) + "</div>";
  opts.forEach(function(o, i) {
    html2 += '<button class="st-btn" onclick="answerCustomQuiz(' + i + ')" style="width:100%;margin:4px 0" data-correct="' + (o === item.a ? "1" : "0") + '">' + esc(o) + "</button>";
  });
  html2 += '<div style="color:var(--text-muted);font-size:0.8em;margin-top:8px">' + (_cqb.idx + 1) + "/" + _cqb.items.length + "</div>";
  html2 += "</div>";
  el.innerHTML = html2;
}
function answerCustomQuiz(i) {
  var btns = document.querySelectorAll("#customquiz-overlay .st-btn[data-correct]");
  var correct = btns[i] && btns[i].getAttribute("data-correct") === "1";
  if (correct) {
    _cqb.score++;
    btns[i].style.background = "var(--success)";
    btns[i].style.color = "#fff";
  } else {
    btns[i].style.background = "var(--danger)";
    btns[i].style.color = "#fff";
    btns.forEach(function(b) {
      if (b.getAttribute("data-correct") === "1") {
        b.style.background = "var(--success)";
        b.style.color = "#fff";
      }
    });
  }
  setTimeout(function() {
    _cqb.idx++;
    _cqbRender();
  }, 800);
}
function closeCustomQuiz() {
  _clOv("customquiz-overlay");
}
var _msd = {};
function openMultiSkillDrill() {
  var ol = _ov("multiskill-overlay");
  var allV = _allVocab();
  var allG = _allGrammar();
  var items = [];
  shuffleArray(allV).slice(0, 4).forEach(function(v) {
    items.push({ type: "vocab", q: v.word, a: v.meaning, reading: v.reading });
  });
  shuffleArray(allG).slice(0, 3).forEach(function(g) {
    items.push({ type: "grammar", q: g.title, a: g.content ? g.content.slice(0, 80) : g.title });
  });
  shuffleArray(allV).slice(0, 3).forEach(function(v) {
    items.push({ type: "listen", q: v.word, a: v.meaning, reading: v.reading });
  });
  items = shuffleArray(items);
  _msd = { items, idx: 0, score: 0 };
  var html = _hdr("Multi-Skill Drill", "🎯", "closeMultiSkillDrill");
  html += '<div id="msd-body"></div></div>';
  ol.innerHTML = html;
  ol.classList.add("active");
  _msdRender();
}
function _msdRender() {
  if (_msd.idx >= _msd.items.length) {
    document.getElementById("msd-body").innerHTML = '<div style="text-align:center;padding:20px"><div style="font-size:2em">🎉</div><div style="font-weight:700;margin:8px 0">' + _msd.score + "/" + _msd.items.length + '</div><button class="st-btn primary" onclick="openMultiSkillDrill()" style="margin-top:8px">🔄 Drill mới</button></div>';
    return;
  }
  var it = _msd.items[_msd.idx];
  var html = '<div style="padding:12px;text-align:center">';
  var typeLabel = it.type === "vocab" ? "📖 Từ vựng" : it.type === "grammar" ? "📘 Ngữ pháp" : "🎧 Nghe";
  html += '<div style="font-size:0.8em;color:var(--text-muted);margin-bottom:4px">' + typeLabel + "</div>";
  if (it.type === "listen") {
    speak(it.q);
    html += `<div style="font-size:2em;cursor:pointer" onclick="speak('` + esc(it.q).replace(/'/g, "\\'") + `')">🔊</div>`;
  } else {
    html += '<div class="jp-font" style="font-size:1.5em">' + esc(it.q) + "</div>";
  }
  html += '<div id="msd-ans" style="display:none;margin-top:8px;padding:8px;background:var(--card-bg);border-radius:6px">';
  html += '<div style="font-weight:700">' + esc(it.a) + "</div>";
  if (it.type === "listen") html += '<div class="jp-font" style="color:var(--accent)">' + esc(it.q) + "</div>";
  html += "</div>";
  html += '<div style="display:flex;gap:8px;margin-top:8px">';
  html += `<button class="st-btn primary" onclick="document.getElementById('msd-ans').style.display='block'" style="flex:1">👁️ Đáp án</button>`;
  html += '<button class="st-btn" onclick="msdNext()" style="flex:1">→ Tiếp</button></div>';
  html += '<div style="color:var(--text-muted);font-size:0.8em;margin-top:6px">' + (_msd.idx + 1) + "/" + _msd.items.length + "</div></div>";
  document.getElementById("msd-body").innerHTML = html;
}
function msdNext() {
  _msd.idx++;
  _msdRender();
}
function closeMultiSkillDrill() {
  _clOv("multiskill-overlay");
}
function openIntervalOptimizer() {
  var ol = _ov("interval-overlay");
  var srs = S.srs || {};
  var now = /* @__PURE__ */ new Date();
  var items = [];
  Object.keys(srs).forEach(function(k) {
    var e = srs[k];
    if (e.nextReview) {
      var next = new Date(e.nextReview);
      var diff = Math.round((next - now) / 36e5);
      items.push({ word: k, hours: diff, level: e.level || 0 });
    }
  });
  items.sort(function(a, b) {
    return a.hours - b.hours;
  });
  var html = _hdr("Review Interval Optimizer", "⏰", "closeIntervalOptimizer");
  html += '<div style="padding:8px">';
  if (items.length === 0) {
    html += '<div style="text-align:center;padding:20px;color:var(--text-muted)">Chưa có lịch ôn tập. Hãy dùng SRS!</div>';
  } else {
    html += '<div style="font-size:0.85em;color:var(--text-muted);margin-bottom:8px">Thời gian ôn tiếp theo:</div>';
    items.slice(0, 15).forEach(function(it) {
      var status = it.hours <= 0 ? "🔴 Đến hạn" : it.hours < 24 ? "🟡 < 1 ngày" : "🟢 " + Math.round(it.hours / 24) + " ngày";
      html += '<div style="display:flex;justify-content:space-between;padding:3px 0;font-size:0.85em"><span class="jp-font">' + esc(it.word) + "</span><span>" + status + "</span></div>";
    });
  }
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeIntervalOptimizer() {
  _clOv("interval-overlay");
}
function openLearningJournal() {
  var ol = _ov("journal-overlay");
  var log = JSON.parse(safeGetItem("dailyLog") || "{}");
  var days = Object.keys(log).sort().reverse().slice(0, 14);
  var html = _hdr("Nhật ký học tập", "📔", "closeLearningJournal");
  html += '<div style="padding:8px">';
  if (days.length === 0) {
    html += '<div style="text-align:center;padding:20px;color:var(--text-muted)">Chưa có nhật ký. Hãy bắt đầu học!</div>';
  } else {
    days.forEach(function(d) {
      var entry = log[d];
      html += '<div style="padding:6px;background:var(--card-bg);border-radius:6px;margin:4px 0;font-size:0.85em">';
      html += '<div style="font-weight:700;color:var(--accent)">' + d + "</div>";
      html += '<div style="color:var(--text-secondary)">Đã ôn: ' + (entry.count || 0) + " mục</div>";
      html += "</div>";
    });
  }
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeLearningJournal() {
  _clOv("journal-overlay");
}
function openForgettingCurve() {
  var ol = _ov("forgetting-overlay");
  var html = _hdr("Forgetting Curve", "📉", "closeForgettingCurve");
  html += '<div style="padding:12px">';
  var intervals = [
    { t: "20 phút", retention: 58 },
    { t: "1 giờ", retention: 44 },
    { t: "9 giờ", retention: 36 },
    { t: "1 ngày", retention: 33 },
    { t: "2 ngày", retention: 28 },
    { t: "6 ngày", retention: 25 },
    { t: "31 ngày", retention: 21 }
  ];
  html += '<div style="font-size:0.85em;color:var(--text-muted);margin-bottom:8px">Đường cong quên lãng (Ebbinghaus):</div>';
  intervals.forEach(function(d) {
    html += '<div style="display:flex;align-items:center;gap:8px;margin:3px 0;font-size:0.8em">';
    html += '<span style="width:60px;flex-shrink:0">' + d.t + "</span>";
    html += '<div style="flex:1;height:12px;background:var(--border);border-radius:6px;overflow:hidden"><div style="width:' + d.retention + '%;height:100%;background:var(--danger);border-radius:6px"></div></div>';
    html += '<span style="width:30px;text-align:right">' + d.retention + "%</span></div>";
  });
  html += '<div style="margin-top:12px;padding:8px;background:var(--card-bg);border-radius:6px;font-size:0.85em;color:var(--text-secondary)">';
  html += "💡 <b>SRS giúp bạn chống quên!</b> Mỗi lần ôn tập đúng lúc sẽ kéo dài thời gian nhớ. Hãy ôn tập đều đặn!";
  html += "</div></div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeForgettingCurve() {
  _clOv("forgetting-overlay");
}
function openCategoryTracker() {
  var ol = _ov("cattracker-overlay");
  var srs = S.srs || {};
  var html = _hdr("Tiến độ theo mục", "📊", "closeCategoryTracker");
  html += '<div style="padding:8px">';
  html += '<h4 style="margin:4px 0">📖 Từ vựng</h4>';
  S.vocab.forEach(function(sec) {
    var total = sec.entries.length;
    var done = sec.entries.filter(function(e) {
      return srs[e.word];
    }).length;
    var pct = total > 0 ? Math.round(done / total * 100) : 0;
    html += '<div style="margin:3px 0"><div style="display:flex;justify-content:space-between;font-size:0.75em"><span>§' + sec.id + "</span><span>" + done + "/" + total + "</span></div>";
    html += '<div style="height:4px;background:var(--border);border-radius:2px;overflow:hidden"><div style="width:' + pct + '%;height:100%;background:var(--accent);border-radius:2px"></div></div></div>';
  });
  html += '<h4 style="margin:8px 0 4px">🈲 Kanji</h4>';
  S.kanji.forEach(function(sec) {
    var total = sec.entries.length;
    var done = sec.entries.filter(function(e) {
      return srs[e.kanji];
    }).length;
    var pct = total > 0 ? Math.round(done / total * 100) : 0;
    html += '<div style="margin:3px 0"><div style="display:flex;justify-content:space-between;font-size:0.75em"><span>§' + sec.id + "</span><span>" + done + "/" + total + "</span></div>";
    html += '<div style="height:4px;background:var(--border);border-radius:2px;overflow:hidden"><div style="width:' + pct + '%;height:100%;background:var(--kanji-accent);border-radius:2px"></div></div></div>';
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeCategoryTracker() {
  _clOv("cattracker-overlay");
}
function openSmartBookmarks() {
  var ol = _ov("smartbm-overlay");
  var srs = S.srs || {};
  var bm = S.bookmarks || {};
  var allV = _allVocab();
  var suggestions = [];
  allV.forEach(function(v) {
    var e = srs[v.word];
    if (e && e.wrong && e.wrong > 0 && !bm[v.word]) {
      suggestions.push({ v, wrong: e.wrong });
    }
  });
  suggestions.sort(function(a, b) {
    return b.wrong - a.wrong;
  });
  var items = suggestions.slice(0, 10);
  var html = _hdr("Gợi ý bookmark", "💡", "closeSmartBookmarks");
  html += '<div style="padding:8px">';
  if (items.length === 0) {
    html += '<div style="text-align:center;padding:20px;color:var(--text-muted)">Không có gợi ý. Hãy luyện tập thêm!</div>';
  } else {
    html += '<div style="font-size:0.85em;color:var(--text-muted);margin-bottom:8px">Từ hay sai nhưng chưa bookmark:</div>';
    items.forEach(function(it) {
      html += '<div style="display:flex;align-items:center;gap:8px;padding:6px;background:var(--card-bg);border-radius:6px;margin:4px 0">';
      html += `<span class="jp-font" style="font-size:1.1em;font-weight:700;cursor:pointer" onclick="speak('` + esc(it.v.word).replace(/'/g, "\\'") + `')">` + esc(it.v.word) + "</span>";
      html += '<span style="flex:1;font-size:0.85em">' + esc(it.v.meaning) + "</span>";
      html += '<span style="color:var(--danger);font-size:0.8em">' + it.wrong + " sai</span>";
      html += "</div>";
    });
  }
  html += '<button class="st-btn" onclick="openSmartBookmarks()" style="margin-top:8px;width:100%">🔄 Cập nhật</button>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeSmartBookmarks() {
  _clOv("smartbm-overlay");
}
export {
  answerCustomQuiz,
  closeCategoryTracker,
  closeConsistency,
  closeCustomQuiz,
  closeForgettingCurve,
  closeGrammarFrequency,
  closeIntervalOptimizer,
  closeLearningJournal,
  closeMultiSkillDrill,
  closeSmartBookmarks,
  closeWordFrequency,
  msdNext,
  openCategoryTracker,
  openConsistency,
  openCustomQuiz,
  openForgettingCurve,
  openGrammarFrequency,
  openIntervalOptimizer,
  openLearningJournal,
  openMultiSkillDrill,
  openSmartBookmarks,
  openWordFrequency,
  startCustomQuiz
};
