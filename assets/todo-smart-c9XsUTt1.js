import { s as submitLegacyToolAssessment, f as finishLegacyToolAssessment, a as startLegacyToolAssessment } from "./legacy-tool-assessment-CuYVfzBR.js";
import { w as worldOverlayMount } from "./legacy-loader-gyvSYPc3.js";
import { ai as S, ap as shuffleArray, ao as esc, s as safeGetItem } from "./index-BEJSIlFS.js";
import { s as showToast } from "./toast-Dwy3w2e2.js";
import "./world-tool-destinations-BAVvWbat.js";
import "./vendor-runtime-BbOs9S9B.js";
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
function openStudyPath() {
  var ol = _ov("studypath-overlay");
  var srs = S.srs || {};
  var weak = [], strong = [], unseen = [];
  var allV = _allVocab();
  allV.forEach(function(v) {
    var e = srs[v.word];
    if (!e) unseen.push(v);
    else if (e.wrong && e.wrong > (e.correct || 0)) weak.push(v);
    else strong.push(v);
  });
  var html = _hdr("Lộ trình học cá nhân", "🗺️", "closeStudyPath");
  html += '<div style="padding:8px">';
  html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px">';
  html += '<div style="text-align:center;padding:10px;background:var(--danger-bg,#fde);border-radius:6px"><div style="font-size:1.5em;font-weight:700;color:var(--danger)">' + weak.length + '</div><div style="font-size:0.75em">Yếu</div></div>';
  html += '<div style="text-align:center;padding:10px;background:var(--success-bg,#dfe);border-radius:6px"><div style="font-size:1.5em;font-weight:700;color:var(--success)">' + strong.length + '</div><div style="font-size:0.75em">Khá</div></div>';
  html += '<div style="text-align:center;padding:10px;background:var(--card-bg);border-radius:6px"><div style="font-size:1.5em;font-weight:700;color:var(--text-muted)">' + unseen.length + '</div><div style="font-size:0.75em">Chưa học</div></div>';
  html += "</div>";
  html += '<h4 style="margin:8px 0 4px">📋 Kế hoạch hôm nay:</h4>';
  var plan = [];
  if (weak.length > 0) plan.push("1. Ôn lại " + Math.min(weak.length, 10) + " từ yếu");
  if (unseen.length > 0) plan.push("2. Học thêm " + Math.min(unseen.length, 5) + " từ mới");
  plan.push("3. Làm 1 bài Quiz tổng hợp");
  plan.push("4. Luyện nghe 5 phút");
  plan.forEach(function(p) {
    html += '<div style="padding:4px 0;font-size:0.9em">' + esc(p) + "</div>";
  });
  if (weak.length > 0) {
    html += '<h4 style="margin:12px 0 4px">⚠️ Từ cần ôn gấp:</h4>';
    weak.slice(0, 5).forEach(function(v) {
      html += '<div style="display:flex;justify-content:space-between;padding:3px 0;font-size:0.85em"><span class="jp-font">' + esc(v.word) + "</span><span>" + esc(v.meaning) + "</span></div>";
    });
  }
  html += '<button class="st-btn" onclick="openStudyPath()" style="margin-top:8px;width:100%">🔄 Tải lại</button>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeStudyPath() {
  _clOv("studypath-overlay");
}
function openAnalyticsDash() {
  var ol = _ov("analyticsdash-overlay");
  var srs = S.srs || {};
  var correct = 0, wrong = 0, reviewed = 0;
  Object.keys(srs).forEach(function(k) {
    var e = srs[k];
    correct += e.correct || 0;
    wrong += e.wrong || 0;
    if (e.correct || e.wrong) reviewed++;
  });
  var accuracy = correct + wrong > 0 ? Math.round(correct / (correct + wrong) * 100) : 0;
  var allV = _allVocab().length;
  var allK = _allKanji().length;
  var allG = _allGrammar().length;
  var html = _hdr("Learning Analytics", "📊", "closeAnalyticsDash");
  html += '<div style="padding:8px">';
  html += '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:12px">';
  html += '<div style="padding:12px;background:var(--card-bg);border-radius:6px;text-align:center"><div style="font-size:2em;font-weight:700;color:var(--accent)">' + accuracy + '%</div><div style="font-size:0.75em">Độ chính xác</div></div>';
  html += '<div style="padding:12px;background:var(--card-bg);border-radius:6px;text-align:center"><div style="font-size:2em;font-weight:700;color:var(--success)">' + reviewed + '</div><div style="font-size:0.75em">Đã ôn</div></div>';
  html += '<div style="padding:12px;background:var(--card-bg);border-radius:6px;text-align:center"><div style="font-size:2em;font-weight:700">' + correct + '</div><div style="font-size:0.75em">Đúng</div></div>';
  html += '<div style="padding:12px;background:var(--card-bg);border-radius:6px;text-align:center"><div style="font-size:2em;font-weight:700;color:var(--danger)">' + wrong + '</div><div style="font-size:0.75em">Sai</div></div>';
  html += "</div>";
  html += '<h4 style="margin:8px 0 4px">📈 Tiến độ tổng:</h4>';
  var bm = S.bookmarks || {};
  var bmCount = Object.keys(bm).filter(function(k) {
    return bm[k];
  }).length;
  var items = [
    { label: "Từ vựng", cur: _allVocab().filter(function(v) {
      return !!srs["vocab:" + v.word];
    }).length, max: allV, color: "var(--accent)" },
    { label: "Kanji", cur: Object.keys(srs).filter(function(k) {
      return _allKanji().some(function(kk) {
        return kk.kanji === k.replace(/^(vocab|kanji|grammar):/, "");
      });
    }).length, max: allK, color: "var(--kanji-accent)" },
    { label: "Bookmark", cur: bmCount, max: allV + allK + allG, color: "var(--grammar-accent)" }
  ];
  items.forEach(function(it) {
    var pct = it.max > 0 ? Math.round(it.cur / it.max * 100) : 0;
    html += '<div style="margin:4px 0"><div style="display:flex;justify-content:space-between;font-size:0.8em"><span>' + it.label + "</span><span>" + it.cur + "/" + it.max + " (" + pct + "%)</span></div>";
    html += '<div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden"><div style="width:' + pct + "%;height:100%;background:" + it.color + ';border-radius:3px"></div></div></div>';
  });
  html += '<button class="st-btn" onclick="openAnalyticsDash()" style="margin-top:8px;width:100%">🔄 Cập nhật</button>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeAnalyticsDash() {
  _clOv("analyticsdash-overlay");
}
function openPredictedScore() {
  var ol = _ov("predictscore-overlay");
  var srs = S.srs || {};
  var correct = 0, wrong = 0;
  Object.values(srs).forEach(function(e) {
    correct += e.correct || 0;
    wrong += e.wrong || 0;
  });
  var accuracy = correct + wrong > 0 ? correct / (correct + wrong) : 0;
  var vocabCoverage = Math.min(1, Object.keys(srs).length / Math.max(1, _allVocab().length));
  var rawScore = Math.round((accuracy * 0.6 + vocabCoverage * 0.4) * 180);
  var pass = rawScore >= 90;
  var html = _hdr("Dự đoán điểm JLPT N4", "🎯", "closePredictedScore");
  html += '<div style="padding:16px;text-align:center">';
  html += '<div style="font-size:4em;font-weight:700;color:' + (pass ? "var(--success)" : "var(--danger)") + '">' + rawScore + "</div>";
  html += '<div style="font-size:1.2em;color:var(--text-secondary)">/180 điểm</div>';
  html += '<div style="margin:12px 0;padding:8px;background:' + (pass ? "var(--success-bg,#dfe)" : "var(--danger-bg,#fde)") + ';border-radius:6px;font-weight:700">' + (pass ? "✅ Khả năng ĐẬU!" : "⚠️ Cần ôn thêm!") + "</div>";
  html += '<div style="font-size:0.85em;color:var(--text-muted);margin-top:8px">';
  html += "Độ chính xác: " + Math.round(accuracy * 100) + "%<br>";
  html += "Phủ từ vựng: " + Math.round(vocabCoverage * 100) + "%";
  html += "</div>";
  html += '<div style="font-size:0.75em;color:var(--text-muted);margin-top:8px">* Dự đoán dựa trên dữ liệu luyện tập, không phải kết quả thực tế</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closePredictedScore() {
  _clOv("predictscore-overlay");
}
var _wpd = {};
var _wpdTimer = null;
function openWeakDrill() {
  clearTimeout(_wpdTimer);
  var ol = _ov("weakdrill-overlay");
  var srs = S.srs || {};
  var allV = _allVocab();
  var pairs = [];
  Object.keys(srs).forEach(function(k) {
    var e = srs[k];
    if (e.wrong && e.wrong > 0) {
      var v = allV.find(function(vv) {
        return vv.word === k.replace(/^(vocab|kanji|grammar):/, "");
      });
      if (v) pairs.push({ v, wrong: e.wrong });
    }
  });
  pairs.sort(function(a, b) {
    return b.wrong - a.wrong;
  });
  var items = pairs.slice(0, 10).map(function(p) {
    return p.v;
  });
  if (items.length === 0) items = shuffleArray(allV).slice(0, 5);
  _wpd = { items, idx: 0, score: 0, run: startLegacyToolAssessment("openWeakDrill") };
  var html = _hdr("Weak Point Drill", "🎯", "closeWeakDrill");
  html += '<div id="wpd-body"></div></div>';
  ol.innerHTML = html;
  ol.classList.add("active");
  _wpdRender();
}
function _wpdRender() {
  if (_wpd.idx >= _wpd.items.length) {
    finishLegacyToolAssessment("openWeakDrill", _wpd.run);
    document.getElementById("wpd-body").innerHTML = '<div style="text-align:center;padding:20px"><div style="font-size:2em">🎉</div><div style="font-weight:700;margin:8px 0">' + _wpd.score + "/" + _wpd.items.length + ' đúng</div><button class="st-btn primary" onclick="openWeakDrill()" style="margin-top:8px">🔄 Drill lại</button></div>';
    return;
  }
  var w = _wpd.items[_wpd.idx];
  var allV = _allVocab();
  var opts = [w.meaning];
  while (opts.length < 4 && allV.length >= 4) {
    var r = allV[Math.floor(Math.random() * allV.length)].meaning;
    if (opts.indexOf(r) < 0) opts.push(r);
  }
  opts = shuffleArray(opts);
  var html = '<div style="padding:12px;text-align:center">';
  html += `<div class="jp-font" style="font-size:2em;cursor:pointer" onclick="speak('` + esc(w.word).replace(/'/g, "\\'") + `')">` + esc(w.word) + "</div>";
  if (w.reading) html += '<div class="jp-font" style="color:var(--accent)">' + esc(w.reading) + "</div>";
  html += '<div style="margin-top:12px">';
  opts.forEach(function(o, i) {
    html += '<button class="st-btn" onclick="answerWeakDrill(' + i + ')" style="width:100%;margin:4px 0" data-correct="' + (o === w.meaning ? "1" : "0") + '">' + esc(o) + "</button>";
  });
  html += "</div>";
  html += '<div style="color:var(--text-muted);font-size:0.8em;margin-top:8px">' + (_wpd.idx + 1) + "/" + _wpd.items.length + "</div>";
  html += "</div>";
  document.getElementById("wpd-body").innerHTML = html;
}
function answerWeakDrill(i) {
  var btns = document.querySelectorAll("#wpd-body .st-btn[data-correct]");
  if (!btns[i] || btns[i].disabled) return;
  var correct = btns[i].getAttribute("data-correct") === "1";
  btns.forEach(function(button) {
    button.disabled = true;
  });
  submitLegacyToolAssessment("openWeakDrill", _wpd.run, { questionId: "q" + _wpd.idx, item: _wpd.items[_wpd.idx], kind: "vocab", correct });
  if (correct) {
    _wpd.score++;
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
  var run = _wpd.run;
  _wpdTimer = setTimeout(function() {
    if (run !== _wpd.run || !document.getElementById("wpd-body")) return;
    _wpd.idx++;
    _wpdRender();
  }, 800);
}
function closeWeakDrill() {
  clearTimeout(_wpdTimer);
  finishLegacyToolAssessment("openWeakDrill", _wpd.run);
  _clOv("weakdrill-overlay");
}
function openSmartScheduler() {
  var ol = _ov("smartsched-overlay");
  var srs = S.srs || {};
  var now = /* @__PURE__ */ new Date();
  var due = [], upcoming = [], mastered = [];
  Object.keys(srs).forEach(function(k) {
    var e = srs[k];
    if (e.level >= 5) mastered.push(k);
    else if (e.nextReview && new Date(e.nextReview) <= now) due.push(k);
    else upcoming.push(k);
  });
  var html = _hdr("Smart SRS Scheduler", "📊", "closeSmartScheduler");
  html += '<div style="padding:8px">';
  html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px">';
  html += '<div style="text-align:center;padding:10px;background:var(--danger-bg,#fde);border-radius:6px"><div style="font-size:1.5em;font-weight:700;color:var(--danger)">' + due.length + '</div><div style="font-size:0.75em">Đến hạn</div></div>';
  html += '<div style="text-align:center;padding:10px;background:var(--card-bg);border-radius:6px"><div style="font-size:1.5em;font-weight:700">' + upcoming.length + '</div><div style="font-size:0.75em">Sắp tới</div></div>';
  html += '<div style="text-align:center;padding:10px;background:var(--success-bg,#dfe);border-radius:6px"><div style="font-size:1.5em;font-weight:700;color:var(--success)">' + mastered.length + '</div><div style="font-size:0.75em">Thành thạo</div></div>';
  html += "</div>";
  if (due.length > 0) {
    html += '<h4 style="margin:8px 0 4px">🔴 Cần ôn ngay:</h4>';
    due.slice(0, 8).forEach(function(k) {
      html += '<div style="padding:2px 0;font-size:0.85em" class="jp-font">' + esc(k) + "</div>";
    });
    if (due.length > 8) html += '<div style="font-size:0.8em;color:var(--text-muted)">...và ' + (due.length - 8) + " mục khác</div>";
  } else {
    html += '<div style="text-align:center;padding:12px;color:var(--success)">✅ Không có mục nào đến hạn!</div>';
  }
  html += '<button class="st-btn" onclick="openSmartScheduler()" style="margin-top:8px;width:100%">🔄 Cập nhật</button>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeSmartScheduler() {
  _clOv("smartsched-overlay");
}
var _pom = { timer: null, left: 0, mode: "study", studying: false };
function openPomodoroTimer() {
  var ol = _ov("pomodoro-overlay");
  var _sessMin = parseInt(safeGetItem("sessionLen"), 10) || 25;
  _pom = { timer: null, left: _sessMin * 60, mode: "study", studying: false };
  var html = _hdr("Pomodoro Timer", "🍅", "closePomodoroTimer");
  html += '<div id="pom-body" style="padding:16px;text-align:center"></div></div>';
  ol.innerHTML = html;
  ol.classList.add("active");
  _pomRender();
}
function _pomRender() {
  var m = Math.floor(_pom.left / 60), s = _pom.left % 60;
  var html = '<div style="font-size:4em;font-weight:700;font-family:monospace">' + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s + "</div>";
  html += '<div style="margin:8px 0;font-size:0.9em;color:var(--text-secondary)">' + (_pom.mode === "study" ? "📖 Đang học" : "☕ Nghỉ ngơi") + "</div>";
  html += '<div style="display:flex;gap:8px;justify-content:center;margin-top:12px">';
  html += '<button class="st-btn primary" onclick="pomToggle()">' + (_pom.studying ? "⏸️ Tạm dừng" : "▶️ Bắt đầu") + "</button>";
  html += '<button class="st-btn" onclick="pomReset()">🔄 Reset</button></div>';
  html += '<div style="display:flex;gap:4px;justify-content:center;margin-top:8px">';
  html += '<button class="st-btn" onclick="pomSet(25)" style="font-size:0.8em">25 phút</button>';
  html += '<button class="st-btn" onclick="pomSet(15)" style="font-size:0.8em">15 phút</button>';
  html += '<button class="st-btn" onclick="pomSet(5)" style="font-size:0.8em">5 phút</button>';
  html += "</div>";
  document.getElementById("pom-body").innerHTML = html;
}
function pomToggle() {
  if (_pom.studying) {
    clearInterval(_pom.timer);
    _pom.studying = false;
  } else {
    _pom.studying = true;
    _pom.timer = setInterval(function() {
      _pom.left--;
      if (_pom.left <= 0) {
        clearInterval(_pom.timer);
        _pom.studying = false;
        showToast(_pom.mode === "study" ? "🍅 Hết giờ! Nghỉ ngơi thôi!" : "☕ Nghỉ xong! Học tiếp nào!");
        _pom.mode = _pom.mode === "study" ? "break" : "study";
        _pom.left = _pom.mode === "study" ? 25 * 60 : 5 * 60;
      }
      _pomRender();
    }, 1e3);
  }
  _pomRender();
}
function pomReset() {
  if (_pom.timer) clearInterval(_pom.timer);
  var _sm2 = parseInt(safeGetItem("sessionLen"), 10) || 25;
  _pom = { timer: null, left: _sm2 * 60, mode: "study", studying: false };
  _pomRender();
}
function pomSet(min) {
  if (_pom.timer) clearInterval(_pom.timer);
  _pom = { timer: null, left: min * 60, mode: "study", studying: false };
  _pomRender();
}
function closePomodoroTimer() {
  if (_pom.timer) clearInterval(_pom.timer);
  _clOv("pomodoro-overlay");
}
function openMilestones() {
  var ol = _ov("milestones-overlay");
  var srs = S.srs || {};
  var bm = S.bookmarks || {};
  var reviewed = Object.keys(srs).filter(function(k) {
    return srs[k].correct || srs[k].wrong;
  }).length;
  var bmCount = Object.keys(bm).filter(function(k) {
    return bm[k];
  }).length;
  var correct = 0;
  Object.values(srs).forEach(function(e) {
    correct += e.correct || 0;
  });
  var streak = parseInt(safeGetItem("studyStreak") || "0", 10);
  var badges = [
    { icon: "📖", name: "Bắt đầu học", desc: "Ôn 1 từ đầu tiên", done: reviewed >= 1 },
    { icon: "🎯", name: "10 từ", desc: "Ôn 10 từ", done: reviewed >= 10 },
    { icon: "💯", name: "100 từ", desc: "Ôn 100 từ", done: reviewed >= 100 },
    { icon: "🏆", name: "500 từ", desc: "Ôn 500 từ", done: reviewed >= 500 },
    { icon: "⭐", name: "10 bookmark", desc: "Đánh dấu 10 mục", done: bmCount >= 10 },
    { icon: "🌟", name: "50 bookmark", desc: "Đánh dấu 50 mục", done: bmCount >= 50 },
    { icon: "✅", name: "100 đúng", desc: "100 câu trả lời đúng", done: correct >= 100 },
    { icon: "💎", name: "500 đúng", desc: "500 câu trả lời đúng", done: correct >= 500 },
    { icon: "🔥", name: "3 ngày liên tiếp", desc: "Streak 3 ngày", done: streak >= 3 },
    { icon: "🔥", name: "7 ngày liên tiếp", desc: "Streak 7 ngày", done: streak >= 7 },
    { icon: "🔥", name: "30 ngày liên tiếp", desc: "Streak 30 ngày", done: streak >= 30 }
  ];
  var unlocked = badges.filter(function(b) {
    return b.done;
  }).length;
  var html = _hdr("Achievement Milestones", "🏅", "closeMilestones");
  html += '<div style="padding:8px">';
  html += '<div style="text-align:center;margin-bottom:12px"><span style="font-size:1.5em;font-weight:700;color:var(--accent)">' + unlocked + '</span><span style="color:var(--text-muted)"> / ' + badges.length + " badges</span></div>";
  badges.forEach(function(b) {
    html += '<div style="display:flex;align-items:center;gap:8px;padding:6px;background:var(--card-bg);border-radius:6px;margin:4px 0;opacity:' + (b.done ? "1" : "0.4") + '">';
    html += '<div style="font-size:1.5em">' + b.icon + "</div>";
    html += '<div><div style="font-weight:700;font-size:0.85em">' + esc(b.name) + '</div><div style="font-size:0.75em;color:var(--text-muted)">' + esc(b.desc) + "</div></div>";
    html += '<div style="margin-left:auto">' + (b.done ? "✅" : "🔒") + "</div></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeMilestones() {
  _clOv("milestones-overlay");
}
function openSpeedTracker() {
  var ol = _ov("speedtracker-overlay");
  var log = JSON.parse(safeGetItem("dailyLog") || "{}");
  var days = Object.keys(log).sort().slice(-7);
  var html = _hdr("Tốc độ học", "📈", "closeSpeedTracker");
  html += '<div style="padding:8px">';
  if (days.length === 0) {
    html += '<div style="text-align:center;padding:20px;color:var(--text-muted)">Chưa có dữ liệu. Hãy luyện tập thêm!</div>';
  } else {
    html += '<div style="margin-bottom:8px;font-size:0.85em">7 ngày gần nhất:</div>';
    var maxV = 1;
    days.forEach(function(d) {
      if ((log[d].count || 0) > maxV) maxV = log[d].count || 0;
    });
    days.forEach(function(d) {
      var c = log[d].count || 0;
      var pct = Math.round(c / maxV * 100);
      html += '<div style="display:flex;align-items:center;gap:6px;margin:3px 0;font-size:0.8em">';
      html += '<span style="width:60px;flex-shrink:0">' + d.slice(5) + "</span>";
      html += '<div style="flex:1;height:12px;background:var(--border);border-radius:6px;overflow:hidden"><div style="width:' + pct + '%;height:100%;background:var(--accent);border-radius:6px"></div></div>';
      html += '<span style="width:30px;text-align:right">' + c + "</span></div>";
    });
  }
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeSpeedTracker() {
  _clOv("speedtracker-overlay");
}
function openVocabGrowth() {
  var ol = _ov("vocabgrowth-overlay");
  var srs = S.srs || {};
  var total = _allVocab().length;
  var known = _allVocab().filter(function(v) {
    return !!srs["vocab:" + v.word];
  }).length;
  var pct = total > 0 ? Math.round(known / total * 100) : 0;
  var html = _hdr("Từ vựng đã học", "📊", "closeVocabGrowth");
  html += '<div style="padding:16px;text-align:center">';
  html += '<div style="position:relative;width:min(120px,60vw);height:min(120px,60vw);margin:0 auto">';
  html += '<svg viewBox="0 0 36 36" style="width:100%;height:100%"><circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--border)" stroke-width="2"/>';
  html += '<circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="' + pct + " " + (100 - pct) + '" stroke-dashoffset="25" stroke-linecap="round"/></svg>';
  html += '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.5em;font-weight:700">' + pct + "%</div></div>";
  html += '<div style="margin-top:12px;font-size:1.2em;font-weight:700">' + known + " / " + total + "</div>";
  html += '<div style="font-size:0.85em;color:var(--text-muted)">từ đã biết</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeVocabGrowth() {
  _clOv("vocabgrowth-overlay");
}
function openGrammarTree() {
  var ol = _ov("grammartree-overlay");
  var srs = S.srs || {};
  var html = _hdr("Grammar Mastery Tree", "🌳", "closeGrammarTree");
  html += '<div style="padding:8px">';
  S.grammar.forEach(function(sec) {
    var total = sec.patterns.length;
    var done = 0;
    sec.patterns.forEach(function(p) {
      if (srs[p.title] || srs[p.id]) done++;
    });
    var pct = total > 0 ? Math.round(done / total * 100) : 0;
    html += '<div style="margin:4px 0"><div style="display:flex;justify-content:space-between;font-size:0.8em"><span>§' + sec.id + " " + esc(sec.name || "") + "</span><span>" + done + "/" + total + "</span></div>";
    html += '<div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden"><div style="width:' + pct + '%;height:100%;background:var(--grammar-accent);border-radius:3px"></div></div></div>';
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeGrammarTree() {
  _clOv("grammartree-overlay");
}
function openContextGen() {
  var ol = _ov("contextgen-overlay");
  var srs = S.srs || {};
  var allV = _allVocab().filter(function(v) {
    return v.example;
  });
  var weak = allV.filter(function(v) {
    var e = srs[v.word];
    return e && e.wrong && e.wrong > 0;
  });
  if (weak.length === 0) weak = shuffleArray(allV).slice(0, 5);
  else weak = shuffleArray(weak).slice(0, 5);
  var html = _hdr("Context Generator", "💡", "closeContextGen");
  html += '<div style="padding:8px">';
  weak.forEach(function(v) {
    html += '<div style="padding:8px;background:var(--card-bg);border-radius:6px;margin:6px 0">';
    html += '<div style="display:flex;justify-content:space-between;align-items:center">';
    html += `<span class="jp-font" style="font-size:1.1em;font-weight:700;cursor:pointer" onclick="speak('` + esc(v.word).replace(/'/g, "\\'") + `')">` + esc(v.word) + "</span>";
    html += '<span style="font-size:0.85em">' + esc(v.meaning) + "</span></div>";
    if (v.example) html += '<div class="jp-font" style="color:var(--text-secondary);font-size:0.9em;margin-top:4px">' + esc(v.example) + "</div>";
    html += "</div>";
  });
  html += '<button class="st-btn" onclick="openContextGen()" style="margin-top:8px;width:100%">🔄 Tải lại</button>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeContextGen() {
  _clOv("contextgen-overlay");
}
function openDifficultyAdjust() {
  var ol = _ov("difficulty-overlay");
  var srs = S.srs || {};
  var correct = 0, wrong = 0;
  Object.values(srs).forEach(function(e) {
    correct += e.correct || 0;
    wrong += e.wrong || 0;
  });
  var accuracy = correct + wrong > 0 ? correct / (correct + wrong) : 0.5;
  var level = accuracy >= 0.85 ? "Khó" : accuracy >= 0.65 ? "Trung bình" : "Dễ";
  var emoji = accuracy >= 0.85 ? "🔴" : accuracy >= 0.65 ? "🟡" : "🟢";
  var html = _hdr("Độ khó tự động", "⚙️", "closeDifficultyAdjust");
  html += '<div style="padding:16px;text-align:center">';
  html += '<div style="font-size:3em">' + emoji + "</div>";
  html += '<div style="font-size:1.5em;font-weight:700;margin:8px 0">' + level + "</div>";
  html += '<div style="font-size:0.85em;color:var(--text-muted)">Dựa trên ' + Math.round(accuracy * 100) + "% chính xác</div>";
  html += '<div style="margin-top:12px;font-size:0.85em;color:var(--text-secondary)">';
  if (accuracy >= 0.85) html += "💪 Bạn học rất tốt! Hệ thống sẽ cho bạn câu hỏi khó hơn.";
  else if (accuracy >= 0.65) html += "📚 Tiếp tục ôn tập, bạn đang tiến bộ!";
  else html += "🌱 Hệ thống sẽ giúp bạn ôn lại những phần cơ bản.";
  html += "</div></div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeDifficultyAdjust() {
  _clOv("difficulty-overlay");
}
var _sb = {};
function openStudyBuddy() {
  var ol = _ov("studybuddy-overlay");
  var dialogues = [
    { buddy: "こんにちは！今日も一緒に勉強しましょう！", vi: "Xin chào! Hôm nay cùng học nhé!" },
    { buddy: "今日は何を勉強したいですか？", vi: "Hôm nay bạn muốn học gì?" },
    { buddy: "最近、どんな言葉を覚えましたか？", vi: "Gần đây bạn đã nhớ được từ gì?" }
  ];
  _sb = { dialogues, idx: 0 };
  var html = _hdr("Study Buddy", "🤝", "closeStudyBuddy");
  html += '<div id="sb-body" style="padding:8px"></div></div>';
  ol.innerHTML = html;
  ol.classList.add("active");
  _sbRender();
}
function _sbRender() {
  var d = _sb.dialogues[_sb.idx];
  var html = '<div style="padding:12px;background:var(--card-bg);border-radius:8px;margin:8px 0">';
  html += '<div style="font-weight:700;color:var(--accent);margin-bottom:4px">🤖 Buddy:</div>';
  html += `<div class="jp-font" style="font-size:1.1em;cursor:pointer" onclick="speak('` + esc(d.buddy).replace(/'/g, "\\'") + `')">` + esc(d.buddy) + "</div>";
  html += '<div style="font-size:0.85em;color:var(--text-muted);margin-top:4px">' + esc(d.vi) + "</div>";
  html += "</div>";
  html += '<div style="display:flex;gap:8px;margin-top:8px">';
  html += '<button class="st-btn" onclick="sbNext()" style="flex:1">→ Tiếp tục</button>';
  html += `<button class="st-btn" onclick="speak('` + esc(d.buddy).replace(/'/g, "\\'") + `')" style="flex:1">🔊 Nghe</button></div>`;
  html += '<div style="text-align:center;color:var(--text-muted);font-size:0.8em;margin-top:4px">' + (_sb.idx + 1) + "/" + _sb.dialogues.length + "</div>";
  document.getElementById("sb-body").innerHTML = html;
}
function sbNext() {
  _sb.idx = (_sb.idx + 1) % _sb.dialogues.length;
  _sbRender();
}
function closeStudyBuddy() {
  _clOv("studybuddy-overlay");
}
function openMistakeAnalyzer() {
  var ol = _ov("mistakeanalyzer-overlay");
  var srs = S.srs || {};
  var categories = { vocab: 0, kanji: 0, other: 0 };
  var allK = _allKanji();
  Object.keys(srs).forEach(function(k) {
    var e = srs[k];
    if (e.wrong && e.wrong > 0) {
      if (allK.some(function(kk) {
        return kk.kanji === k.replace(/^(vocab|kanji|grammar):/, "");
      })) categories.kanji += e.wrong;
      else categories.vocab += e.wrong;
    }
  });
  var total = categories.vocab + categories.kanji + categories.other;
  var html = _hdr("Phân tích lỗi sai", "🔍", "closeMistakeAnalyzer");
  html += '<div style="padding:8px">';
  if (total === 0) {
    html += '<div style="text-align:center;padding:20px;color:var(--success)">✅ Chưa có lỗi sai nào! Tuyệt vời!</div>';
  } else {
    html += '<div style="margin-bottom:12px">';
    [
      { label: "Từ vựng", count: categories.vocab, color: "var(--accent)" },
      { label: "Kanji", count: categories.kanji, color: "var(--kanji-accent)" }
    ].forEach(function(c) {
      var pct = total > 0 ? Math.round(c.count / total * 100) : 0;
      html += '<div style="margin:6px 0"><div style="display:flex;justify-content:space-between;font-size:0.85em"><span>' + c.label + "</span><span>" + c.count + " lỗi (" + pct + "%)</span></div>";
      html += '<div style="height:8px;background:var(--border);border-radius:4px;overflow:hidden"><div style="width:' + pct + "%;height:100%;background:" + c.color + ';border-radius:4px"></div></div></div>';
    });
    html += "</div>";
    html += '<div style="font-size:0.85em;color:var(--text-secondary);padding:8px;background:var(--card-bg);border-radius:6px">';
    if (categories.vocab > categories.kanji) html += "💡 Bạn sai nhiều ở từ vựng. Hãy dùng Flashcard và Weak Drill để ôn lại!";
    else html += "💡 Bạn sai nhiều ở Kanji. Hãy dùng Kanji Writer và Component Quiz!";
    html += "</div>";
  }
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeMistakeAnalyzer() {
  _clOv("mistakeanalyzer-overlay");
}
function openKanjiSimilar() {
  var ol = _ov("kanjisimilar-overlay");
  var pairs = [
    ["待", "持", "まつ (đợi) vs もつ (giữ)"],
    ["近", "折", "ちかい (gần) vs おる (gấp)"],
    ["読", "話", "よむ (đọc) vs はなす (nói)"],
    ["聞", "間", "きく (nghe) vs あいだ (giữa)"],
    ["同", "向", "おなじ (giống) vs むく (hướng)"],
    ["切", "払", "きる (cắt) vs はらう (trả)"],
    ["教", "数", "おしえる (dạy) vs かず (số)"],
    ["特", "持", "とく (đặc biệt) vs もつ (giữ)"]
  ];
  var html = _hdr("Kanji dễ nhầm", "⚠️", "closeKanjiSimilar");
  html += '<div style="padding:8px">';
  pairs.forEach(function(p) {
    html += '<div style="display:flex;align-items:center;gap:12px;padding:8px;background:var(--card-bg);border-radius:6px;margin:4px 0">';
    html += `<div class="jp-font" style="font-size:2em;cursor:pointer" onclick="speak('` + esc(p[0]).replace(/'/g, "\\'") + `')">` + esc(p[0]) + "</div>";
    html += '<div style="font-size:1.5em;color:var(--text-muted)">↔</div>';
    html += `<div class="jp-font" style="font-size:2em;cursor:pointer" onclick="speak('` + esc(p[1]).replace(/'/g, "\\'") + `')">` + esc(p[1]) + "</div>";
    html += '<div style="font-size:0.8em;color:var(--text-secondary);flex:1">' + esc(p[2]) + "</div>";
    html += "</div>";
  });
  html += '<button class="st-btn" onclick="openKanjiSimilar()" style="margin-top:8px;width:100%">🔄 Tải lại</button>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeKanjiSimilar() {
  _clOv("kanjisimilar-overlay");
}
function openGrammarCompare() {
  var ol = _ov("gramcompare-overlay");
  var comparisons = [
    { a: "〜ている", b: "〜てある", diff: "〜ている: trạng thái đang diễn ra (tự mình)\n〜てある: kết quả do ai đó làm" },
    { a: "〜ので", b: "〜から", diff: "〜ので: lý do khách quan, lịch sự\n〜から: lý do chủ quan, thân mật" },
    { a: "〜たら", b: "〜と", diff: "〜たら: giả định cụ thể, 1 lần\n〜と: quy luật tự nhiên, luôn xảy ra" },
    { a: "〜ようにする", b: "〜ことにする", diff: "〜ようにする: cố gắng dần dần\n〜ことにする: quyết định cụ thể" },
    { a: "〜てみる", b: "〜てしまう", diff: "〜てみる: thử làm gì đó\n〜てしまう: hoàn thành / đáng tiếc" }
  ];
  var html = _hdr("So sánh ngữ pháp", "⚖️", "closeGrammarCompare");
  html += '<div style="padding:8px">';
  comparisons.forEach(function(c) {
    html += '<div style="padding:10px;background:var(--card-bg);border-radius:6px;margin:6px 0">';
    html += '<div style="display:flex;justify-content:center;gap:12px;margin-bottom:8px">';
    html += '<span class="jp-font" style="font-weight:700;color:var(--accent)">' + esc(c.a) + "</span>";
    html += '<span style="color:var(--text-muted)">vs</span>';
    html += '<span class="jp-font" style="font-weight:700;color:var(--grammar-accent)">' + esc(c.b) + "</span></div>";
    html += '<div style="font-size:0.85em;white-space:pre-wrap;color:var(--text-secondary)">' + esc(c.diff) + "</div>";
    html += "</div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeGrammarCompare() {
  _clOv("gramcompare-overlay");
}
function openVocabNetwork() {
  var ol = _ov("vocabnet-overlay");
  var groups = [
    { name: "食べ物 (Đồ ăn)", words: ["ごはん", "パン", "にく", "さかな", "やさい", "くだもの"] },
    { name: "場所 (Địa điểm)", words: ["えき", "がっこう", "びょういん", "ゆうびんきょく", "スーパー"] },
    { name: "時間 (Thời gian)", words: ["あさ", "ひる", "よる", "きのう", "きょう", "あした"] },
    { name: "動作 (Hành động)", words: ["たべる", "のむ", "いく", "くる", "みる", "きく"] },
    { name: "形容詞 (Tính từ)", words: ["おおきい", "ちいさい", "あたらしい", "ふるい", "たかい"] }
  ];
  var html = _hdr("Vocab Network Map", "🕸️", "closeVocabNetwork");
  html += '<div style="padding:8px">';
  groups.forEach(function(g) {
    html += '<div style="padding:8px;background:var(--card-bg);border-radius:6px;margin:6px 0">';
    html += '<div style="font-weight:700;font-size:0.9em;margin-bottom:6px">' + esc(g.name) + "</div>";
    html += '<div style="display:flex;flex-wrap:wrap;gap:4px">';
    g.words.forEach(function(w) {
      html += `<span class="jp-font" style="padding:2px 8px;background:var(--accent-light);border-radius:12px;font-size:0.85em;cursor:pointer" onclick="speak('` + esc(w).replace(/'/g, "\\'") + `')">` + esc(w) + "</span>";
    });
    html += "</div></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeVocabNetwork() {
  _clOv("vocabnet-overlay");
}
function openReadingLevel() {
  var ol = _ov("readinglevel-overlay");
  var srs = S.srs || {};
  var allV = _allVocab();
  var known = allV.filter(function(v) {
    return srs[v.word];
  }).length;
  var pct = allV.length > 0 ? known / allV.length : 0;
  var level = pct >= 0.8 ? "N4 上級 (Cao)" : pct >= 0.5 ? "N4 中級 (Trung bình)" : pct >= 0.2 ? "N4 初級 (Sơ cấp)" : "N5 復習 (Đang ôn N5)";
  var html = _hdr("Đánh giá khả năng đọc", "📖", "closeReadingLevel");
  html += '<div style="padding:16px;text-align:center">';
  html += '<div style="font-size:1.5em;font-weight:700;color:var(--accent);margin-bottom:8px">' + esc(level) + "</div>";
  html += '<div style="font-size:0.85em;color:var(--text-muted)">Từ vựng: ' + known + "/" + allV.length + " (" + Math.round(pct * 100) + "%)</div>";
  html += '<div style="margin:12px 0;height:8px;background:var(--border);border-radius:4px;overflow:hidden"><div style="width:' + Math.round(pct * 100) + '%;height:100%;background:var(--accent);border-radius:4px"></div></div>';
  html += '<div style="font-size:0.85em;color:var(--text-secondary);margin-top:8px">';
  if (pct >= 0.8) html += "🎉 Bạn có thể đọc hầu hết văn bản N4!";
  else if (pct >= 0.5) html += "📚 Tiếp tục học thêm từ vựng để đọc tốt hơn.";
  else html += "🌱 Hãy tập trung học từ vựng cơ bản trước.";
  html += "</div></div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeReadingLevel() {
  _clOv("readinglevel-overlay");
}
function openListeningLevel() {
  var ol = _ov("listeninglevel-overlay");
  var srs = S.srs || {};
  var correct = 0, total = 0;
  Object.values(srs).forEach(function(e) {
    correct += e.correct || 0;
    total += (e.correct || 0) + (e.wrong || 0);
  });
  var accuracy = total > 0 ? correct / total : 0;
  var level = accuracy >= 0.8 ? "Tốt" : accuracy >= 0.6 ? "Khá" : accuracy >= 0.3 ? "Trung bình" : "Cần luyện thêm";
  var html = _hdr("Đánh giá nghe hiểu", "🎧", "closeListeningLevel");
  html += '<div style="padding:16px;text-align:center">';
  html += '<div style="font-size:1.5em;font-weight:700;color:var(--accent)">' + esc(level) + "</div>";
  html += '<div style="font-size:0.85em;color:var(--text-muted);margin-top:4px">Dựa trên ' + total + " câu trả lời</div>";
  html += '<div style="margin:12px 0;height:8px;background:var(--border);border-radius:4px;overflow:hidden"><div style="width:' + Math.round(accuracy * 100) + '%;height:100%;background:var(--accent)"></div></div>';
  html += '<div style="font-size:0.85em;color:var(--text-secondary)">';
  html += "💡 Để cải thiện: Dùng Radio N4, Dictation, và Listening Games thường xuyên.";
  html += "</div></div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeListeningLevel() {
  _clOv("listeninglevel-overlay");
}
var _jmt = { timer: null, left: 0, section: 0 };
var _jmtSections = [
  { name: "言語知識 (Ngôn ngữ)", time: 30 },
  { name: "読解 (Đọc hiểu)", time: 60 },
  { name: "聴解 (Nghe hiểu)", time: 35 }
];
function openMockTestTimer() {
  var ol = _ov("mocktest-overlay");
  if (_jmt.timer) clearInterval(_jmt.timer);
  _jmt = { timer: null, left: 0, section: 0 };
  var html = _hdr("JLPT Mock Test Timer", "⏱️", "closeMockTestTimer");
  html += '<div id="jmt-body" style="padding:12px;text-align:center"></div></div>';
  ol.innerHTML = html;
  ol.classList.add("active");
  _jmtRender();
}
function _jmtRender() {
  if (_jmt.section >= _jmtSections.length) {
    document.getElementById("jmt-body").innerHTML = '<div style="font-size:2em">🎉</div><div style="font-weight:700;margin:8px 0">Hoàn thành tất cả phần thi!</div><button class="st-btn primary" onclick="openMockTestTimer()" style="margin-top:8px">🔄 Làm lại</button>';
    return;
  }
  var sec = _jmtSections[_jmt.section];
  if (_jmt.left === 0) _jmt.left = sec.time * 60;
  var m = Math.floor(_jmt.left / 60), s = _jmt.left % 60;
  var html = '<div style="font-size:0.9em;color:var(--text-secondary);margin-bottom:8px">Phần ' + (_jmt.section + 1) + "/" + _jmtSections.length + "</div>";
  html += '<div class="jp-font" style="font-size:1.2em;font-weight:700;margin-bottom:8px">' + esc(sec.name) + "</div>";
  html += '<div style="font-size:3.5em;font-weight:700;font-family:monospace">' + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s + "</div>";
  html += '<div style="display:flex;gap:8px;justify-content:center;margin-top:12px">';
  html += '<button class="st-btn primary" onclick="jmtToggle()">' + (_jmt.timer ? "⏸️ Tạm dừng" : "▶️ Bắt đầu") + "</button>";
  html += '<button class="st-btn" onclick="jmtNextSection()">→ Phần tiếp</button></div>';
  document.getElementById("jmt-body").innerHTML = html;
}
function jmtToggle() {
  if (_jmt.timer) {
    clearInterval(_jmt.timer);
    _jmt.timer = null;
  } else {
    _jmt.timer = setInterval(function() {
      _jmt.left--;
      if (_jmt.left <= 0) {
        clearInterval(_jmt.timer);
        _jmt.timer = null;
        showToast("⏰ Hết giờ phần " + _jmtSections[_jmt.section].name + "!");
        _jmt.section++;
        _jmt.left = 0;
      }
      _jmtRender();
    }, 1e3);
  }
  _jmtRender();
}
function jmtNextSection() {
  if (_jmt.timer) clearInterval(_jmt.timer);
  _jmt.timer = null;
  _jmt.section++;
  _jmt.left = 0;
  _jmtRender();
}
function closeMockTestTimer() {
  if (_jmt.timer) clearInterval(_jmt.timer);
  _clOv("mocktest-overlay");
}
export {
  answerWeakDrill,
  closeAnalyticsDash,
  closeContextGen,
  closeDifficultyAdjust,
  closeGrammarCompare,
  closeGrammarTree,
  closeKanjiSimilar,
  closeListeningLevel,
  closeMilestones,
  closeMistakeAnalyzer,
  closeMockTestTimer,
  closePomodoroTimer,
  closePredictedScore,
  closeReadingLevel,
  closeSmartScheduler,
  closeSpeedTracker,
  closeStudyBuddy,
  closeStudyPath,
  closeVocabGrowth,
  closeVocabNetwork,
  closeWeakDrill,
  jmtNextSection,
  jmtToggle,
  openAnalyticsDash,
  openContextGen,
  openDifficultyAdjust,
  openGrammarCompare,
  openGrammarTree,
  openKanjiSimilar,
  openListeningLevel,
  openMilestones,
  openMistakeAnalyzer,
  openMockTestTimer,
  openPomodoroTimer,
  openPredictedScore,
  openReadingLevel,
  openSmartScheduler,
  openSpeedTracker,
  openStudyBuddy,
  openStudyPath,
  openVocabGrowth,
  openVocabNetwork,
  openWeakDrill,
  pomReset,
  pomSet,
  pomToggle,
  sbNext
};
