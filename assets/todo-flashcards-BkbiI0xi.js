import { bB as shuffleArray, ab as S, bK as esc } from "./feature-3d-CFvJkEt3.js";
import { s as showToast } from "./toast-CJdbqLP6.js";
import { ag as isLessonFilterActive, j as effectiveStart, i as effectiveCap } from "./index-D1BqAvip.js";
import { s as speak } from "./tts-CA6-5gSK.js";
import { g as getSRS } from "./bookmarks-BRjrfByw.js";
import "./vendor-react-BYxMSDiB.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
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
function _fcBase(id, title, icon, closeFn, bodyId) {
  return '<div class="mg-container"><div class="mg-header"><h3>' + icon + " " + esc(title) + '</h3><span class="mg-close" onclick="' + closeFn + '()">✕</span></div><div id="' + bodyId + '"></div></div>';
}
var _af = {};
function openAudioFirstCards() {
  var ol = _ov("audiofirst-overlay");
  var items = shuffleArray(_allVocab()).slice(0, 10);
  if (items.length === 0) {
    showToast("Không có dữ liệu");
    return;
  }
  _af = { items, idx: 0, flipped: false };
  ol.innerHTML = _fcBase("audiofirst", "Audio-First Flashcards", "🔊", "closeAudioFirstCards", "af-body");
  ol.classList.add("active");
  _afRender();
}
function _afRender() {
  if (_af.idx >= _af.items.length) {
    document.getElementById("af-body").innerHTML = '<div style="text-align:center;padding:20px">🎉 Hoàn thành ' + _af.items.length + ' thẻ!<br><button class="st-btn primary" onclick="openAudioFirstCards()" style="margin-top:8px">🔄 Chơi lại</button></div>';
    return;
  }
  var w = _af.items[_af.idx];
  _af.flipped = false;
  speak(w.word);
  var html = '<div style="text-align:center;padding:20px;background:var(--card-bg);border-radius:8px;margin:8px 0;min-height:150px;display:flex;flex-direction:column;align-items:center;justify-content:center">';
  html += '<div style="font-size:2em;margin-bottom:8px">🔊</div>';
  html += '<div style="color:var(--text-secondary);margin-bottom:12px">Nghe và đoán nghĩa trước khi lật thẻ</div>';
  html += '<div id="af-answer" style="display:none">';
  html += '<div class="jp-font" style="font-size:2em">' + esc(w.word) + "</div>";
  if (w.reading) html += '<div class="jp-font" style="color:var(--accent)">' + esc(w.reading) + "</div>";
  html += '<div style="font-weight:700;margin-top:4px">' + esc(w.meaning) + "</div>";
  if (w.example) html += '<div style="margin-top:6px;font-size:0.88em;color:var(--text-muted)" class="jp-font">' + esc(w.example) + "</div>";
  html += "</div></div>";
  html += '<div style="display:flex;gap:8px;margin-top:6px">';
  html += `<button class="st-btn" onclick="speak('` + esc(w.word).replace(/'/g, "\\'") + `')" style="flex:1">🔊 Nghe lại</button>`;
  html += `<button class="st-btn primary" onclick="document.getElementById('af-answer').style.display='block'" style="flex:1">👁️ Lật thẻ</button>`;
  html += "</div>";
  html += '<div style="display:flex;gap:8px;margin-top:6px"><button class="st-btn" onclick="afNext()" style="flex:1">→ Thẻ tiếp</button></div>';
  html += '<div style="text-align:center;color:var(--text-muted);font-size:0.8em;margin-top:4px">' + (_af.idx + 1) + "/" + _af.items.length + "</div>";
  document.getElementById("af-body").innerHTML = html;
}
function afNext() {
  _af.idx++;
  _afRender();
}
function closeAudioFirstCards() {
  _clOv("audiofirst-overlay");
}
var _rv = {};
function openReverseCards() {
  var ol = _ov("reverse-fc-overlay");
  var items = shuffleArray(_allVocab()).slice(0, 10);
  if (items.length === 0) {
    showToast("Không có dữ liệu");
    return;
  }
  _rv = { items, idx: 0 };
  ol.innerHTML = _fcBase("reverse-fc", "Reverse Flashcards", "🔄", "closeReverseCards", "rv-body");
  ol.classList.add("active");
  _rvRender();
}
function _rvRender() {
  if (_rv.idx >= _rv.items.length) {
    document.getElementById("rv-body").innerHTML = '<div style="text-align:center;padding:20px">🎉 Xong ' + _rv.items.length + ' thẻ!<br><button class="st-btn primary" onclick="openReverseCards()" style="margin-top:8px">🔄 Chơi lại</button></div>';
    return;
  }
  var w = _rv.items[_rv.idx];
  var html = '<div style="text-align:center;padding:20px;background:var(--card-bg);border-radius:8px;margin:8px 0;min-height:150px;display:flex;flex-direction:column;align-items:center;justify-content:center">';
  html += '<div style="font-size:1.5em;font-weight:700">' + esc(w.meaning) + "</div>";
  html += '<div style="color:var(--text-muted);margin:4px 0">→ Tiếng Nhật là gì?</div>';
  html += '<div id="rv-ans" style="display:none;margin-top:12px">';
  html += `<div class="jp-font" style="font-size:2em;cursor:pointer" onclick="speak('` + esc(w.word).replace(/'/g, "\\'") + `')">` + esc(w.word) + "</div>";
  if (w.reading) html += '<div class="jp-font" style="color:var(--accent)">' + esc(w.reading) + "</div>";
  html += "</div></div>";
  html += '<div style="display:flex;gap:8px;margin-top:6px">';
  html += `<button class="st-btn primary" onclick="document.getElementById('rv-ans').style.display='block'" style="flex:1">👁️ Xem đáp án</button>`;
  html += '<button class="st-btn" onclick="rvNext()" style="flex:1">→ Tiếp</button></div>';
  html += '<div style="text-align:center;color:var(--text-muted);font-size:0.8em;margin-top:4px">' + (_rv.idx + 1) + "/" + _rv.items.length + "</div>";
  document.getElementById("rv-body").innerHTML = html;
}
function rvNext() {
  _rv.idx++;
  _rvRender();
}
function closeReverseCards() {
  _clOv("reverse-fc-overlay");
}
var _cx = {};
function openContextCards() {
  var ol = _ov("context-fc-overlay");
  var items = shuffleArray(_allVocab().filter(function(e) {
    return e.example;
  })).slice(0, 10);
  if (items.length === 0) {
    showToast("Không đủ dữ liệu ví dụ");
    return;
  }
  _cx = { items, idx: 0 };
  ol.innerHTML = _fcBase("context-fc", "Context Flashcards", "📖", "closeContextCards", "cx-body");
  ol.classList.add("active");
  _cxRender();
}
function _cxRender() {
  if (_cx.idx >= _cx.items.length) {
    document.getElementById("cx-body").innerHTML = '<div style="text-align:center;padding:20px">🎉 Xong!<br><button class="st-btn primary" onclick="openContextCards()" style="margin-top:8px">🔄 Chơi lại</button></div>';
    return;
  }
  var w = _cx.items[_cx.idx];
  var exHtml = esc(w.example).replace(esc(w.word), '<span style="color:var(--accent);font-weight:700;text-decoration:underline">' + esc(w.word) + "</span>");
  var html = '<div style="padding:16px;background:var(--card-bg);border-radius:8px;margin:8px 0">';
  html += `<div class="jp-font" style="font-size:1.2em;line-height:1.8;cursor:pointer" onclick="speak('` + esc(w.example).replace(/'/g, "\\'") + `')">` + exHtml + "</div>";
  html += '<div style="color:var(--text-muted);margin-top:4px">Từ gạch chân nghĩa là gì?</div>';
  html += '<div id="cx-ans" style="display:none;margin-top:10px;padding:10px;background:var(--bg);border-radius:6px">';
  html += '<div class="jp-font" style="font-size:1.5em">' + esc(w.word) + "</div>";
  if (w.reading) html += '<div class="jp-font" style="color:var(--accent)">' + esc(w.reading) + "</div>";
  html += '<div style="font-weight:700">' + esc(w.meaning) + "</div>";
  html += "</div></div>";
  html += '<div style="display:flex;gap:8px;margin-top:6px">';
  html += `<button class="st-btn primary" onclick="document.getElementById('cx-ans').style.display='block'" style="flex:1">👁️ Lật thẻ</button>`;
  html += '<button class="st-btn" onclick="cxNext()" style="flex:1">→ Tiếp</button></div>';
  html += '<div style="text-align:center;color:var(--text-muted);font-size:0.8em;margin-top:4px">' + (_cx.idx + 1) + "/" + _cx.items.length + "</div>";
  document.getElementById("cx-body").innerHTML = html;
}
function cxNext() {
  _cx.idx++;
  _cxRender();
}
function closeContextCards() {
  _clOv("context-fc-overlay");
}
var _kcc = {};
function openKanjiComponentCards() {
  var ol = _ov("kanjicomp-fc-overlay");
  var items = shuffleArray(_allKanji()).slice(0, 10);
  if (items.length === 0) {
    showToast("Không có dữ liệu");
    return;
  }
  _kcc = { items, idx: 0 };
  ol.innerHTML = _fcBase("kanjicomp-fc", "Kanji Component Cards", "🧩", "closeKanjiComponentCards", "kcc-body");
  ol.classList.add("active");
  _kccRender();
}
function _kccRender() {
  if (_kcc.idx >= _kcc.items.length) {
    document.getElementById("kcc-body").innerHTML = '<div style="text-align:center;padding:20px">🎉 Xong!<br><button class="st-btn primary" onclick="openKanjiComponentCards()" style="margin-top:8px">🔄 Chơi lại</button></div>';
    return;
  }
  var k = _kcc.items[_kcc.idx];
  var html = '<div style="text-align:center;padding:20px;background:var(--card-bg);border-radius:8px;margin:8px 0">';
  html += `<div class="jp-font" style="font-size:4em;cursor:pointer" onclick="speak('` + esc(k.kanji).replace(/'/g, "\\'") + `')">` + esc(k.kanji) + "</div>";
  html += '<div style="font-weight:700">' + esc(k.title || k.meaning || "") + "</div>";
  if (k.on) html += '<div style="margin:4px 0"><span style="background:var(--accent);color:#fff;padding:1px 6px;border-radius:3px;font-size:0.8em">音 ' + esc(k.on) + "</span></div>";
  if (k.kun) html += '<div><span style="background:var(--grammar-accent);color:#fff;padding:1px 6px;border-radius:3px;font-size:0.8em">訓 ' + esc(k.kun) + "</span></div>";
  if (k.strokes) html += '<div style="color:var(--text-muted);font-size:0.85em;margin-top:4px">' + k.strokes + " nét</div>";
  html += "</div>";
  html += '<div style="display:flex;gap:8px;margin-top:6px"><button class="st-btn" onclick="kccNext()" style="flex:1">→ Thẻ tiếp</button></div>';
  html += '<div style="text-align:center;color:var(--text-muted);font-size:0.8em;margin-top:4px">' + (_kcc.idx + 1) + "/" + _kcc.items.length + "</div>";
  document.getElementById("kcc-body").innerHTML = html;
}
function kccNext() {
  _kcc.idx++;
  _kccRender();
}
function closeKanjiComponentCards() {
  _clOv("kanjicomp-fc-overlay");
}
var _gpc = {};
function openGrammarPatternCards() {
  var ol = _ov("gramcard-overlay");
  var items = shuffleArray(_allGrammar()).slice(0, 10);
  if (items.length === 0) {
    showToast("Không có dữ liệu");
    return;
  }
  _gpc = { items, idx: 0 };
  ol.innerHTML = _fcBase("gramcard", "Grammar Pattern Cards", "📘", "closeGrammarPatternCards", "gpc-body");
  ol.classList.add("active");
  _gpcRender();
}
function _gpcRender() {
  if (_gpc.idx >= _gpc.items.length) {
    document.getElementById("gpc-body").innerHTML = '<div style="text-align:center;padding:20px">🎉 Xong!<br><button class="st-btn primary" onclick="openGrammarPatternCards()" style="margin-top:8px">🔄 Chơi lại</button></div>';
    return;
  }
  var p = _gpc.items[_gpc.idx];
  var html = '<div style="padding:16px;background:var(--card-bg);border-radius:8px;margin:8px 0">';
  html += '<div class="jp-font" style="font-size:1.3em;font-weight:700;color:var(--accent)">' + esc(p.title) + "</div>";
  html += '<div style="color:var(--text-muted);font-size:0.8em">Mẫu ' + esc(p.id) + "</div>";
  html += '<div id="gpc-ans" style="display:none;margin-top:10px;font-size:0.9em;line-height:1.6;white-space:pre-wrap;color:var(--text-secondary)">' + esc(p.content || "").replace(/\\n/g, "<br>") + "</div>";
  html += "</div>";
  html += '<div style="display:flex;gap:8px;margin-top:6px">';
  html += `<button class="st-btn primary" onclick="document.getElementById('gpc-ans').style.display='block'" style="flex:1">👁️ Xem giải thích</button>`;
  html += '<button class="st-btn" onclick="gpcNext()" style="flex:1">→ Tiếp</button></div>';
  html += '<div style="text-align:center;color:var(--text-muted);font-size:0.8em;margin-top:4px">' + (_gpc.idx + 1) + "/" + _gpc.items.length + "</div>";
  document.getElementById("gpc-body").innerHTML = html;
}
function gpcNext() {
  _gpc.idx++;
  _gpcRender();
}
function closeGrammarPatternCards() {
  _clOv("gramcard-overlay");
}
var _convCards = [
  { situation: "Bạn muốn hỏi đường đến ga.", jp: "すみません、駅はどこですか。", reading: "すみません、えきはどこですか。" },
  { situation: "Bạn muốn gọi món ở nhà hàng.", jp: "これをお願いします。", reading: "これをおねがいします。" },
  { situation: "Bạn muốn hỏi giá.", jp: "これはいくらですか。", reading: "これはいくらですか。" },
  { situation: "Bạn muốn xin lỗi vì đến trễ.", jp: "遅れてすみません。", reading: "おくれてすみません。" },
  { situation: "Bạn muốn từ chối lời mời.", jp: "すみません、ちょっと用事があります。", reading: "すみません、ちょっとようじがあります。" },
  { situation: "Bạn muốn khen món ăn ngon.", jp: "とてもおいしいですね。", reading: "とてもおいしいですね。" },
  { situation: "Bạn muốn nói không hiểu.", jp: "すみません、もう一度お願いします。", reading: "すみません、もういちどおねがいします。" },
  { situation: "Bạn muốn tự giới thiệu.", jp: "初めまして。○○と申します。", reading: "はじめまして。○○ともうします。" }
];
var _cc = {};
function openConversationCards() {
  var ol = _ov("conv-fc-overlay");
  var items = shuffleArray([..._convCards]).slice(0, 8);
  _cc = { items, idx: 0 };
  ol.innerHTML = _fcBase("conv-fc", "Conversation Cards", "🗣️", "closeConversationCards", "cc-body");
  ol.classList.add("active");
  _ccRender();
}
function _ccRender() {
  if (_cc.idx >= _cc.items.length) {
    document.getElementById("cc-body").innerHTML = '<div style="text-align:center;padding:20px">🎉 Xong!<br><button class="st-btn primary" onclick="openConversationCards()" style="margin-top:8px">🔄 Chơi lại</button></div>';
    return;
  }
  var c = _cc.items[_cc.idx];
  var html = '<div style="padding:16px;background:var(--card-bg);border-radius:8px;margin:8px 0;text-align:center">';
  html += '<div style="font-size:1.1em;font-weight:700;margin-bottom:12px">💬 ' + esc(c.situation) + "</div>";
  html += '<div id="cc-ans" style="display:none">';
  html += `<div class="jp-font" style="font-size:1.5em;cursor:pointer" onclick="speak('` + esc(c.jp).replace(/'/g, "\\'") + `')">` + esc(c.jp) + "</div>";
  html += '<div class="jp-font" style="color:var(--accent);margin-top:4px">' + esc(c.reading) + "</div>";
  html += "</div></div>";
  html += '<div style="display:flex;gap:8px;margin-top:6px">';
  html += `<button class="st-btn primary" onclick="document.getElementById('cc-ans').style.display='block'" style="flex:1">👁️ Xem đáp án</button>`;
  html += '<button class="st-btn" onclick="ccNext()" style="flex:1">→ Tiếp</button></div>';
  html += '<div style="text-align:center;color:var(--text-muted);font-size:0.8em;margin-top:4px">' + (_cc.idx + 1) + "/" + _cc.items.length + "</div>";
  document.getElementById("cc-body").innerHTML = html;
}
function ccNext() {
  _cc.idx++;
  _ccRender();
}
function closeConversationCards() {
  _clOv("conv-fc-overlay");
}
var _ef = {};
function openErrorFocusedCards() {
  var ol = _ov("errorfocus-overlay");
  var srsData = getSRS();
  var weakKeys = [];
  Object.keys(srsData).forEach(function(k) {
    var e = srsData[k];
    if (e && e.wrong && e.wrong > 0) weakKeys.push({ key: k, wrong: e.wrong });
  });
  weakKeys.sort(function(a, b) {
    return b.wrong - a.wrong;
  });
  var topKeys = weakKeys.slice(0, 10).map(function(w) {
    return w.key;
  });
  var allV = _allVocab();
  var items = [];
  topKeys.forEach(function(k) {
    var found = allV.find(function(v) {
      return v.word === k || v.kanji && v.kanji === k;
    });
    if (found) items.push(found);
  });
  if (items.length === 0) {
    items = shuffleArray(allV).slice(0, 5);
  }
  _ef = { items, idx: 0 };
  ol.innerHTML = _fcBase("errorfocus", "Error-Focused Cards", "🎯", "closeErrorFocusedCards", "ef-body");
  ol.classList.add("active");
  _efRender();
}
function _efRender() {
  if (_ef.idx >= _ef.items.length) {
    document.getElementById("ef-body").innerHTML = '<div style="text-align:center;padding:20px">🎉 Ôn xong ' + _ef.items.length + ' từ yếu!<br><button class="st-btn primary" onclick="openErrorFocusedCards()" style="margin-top:8px">🔄 Ôn lại</button></div>';
    return;
  }
  var w = _ef.items[_ef.idx];
  var html = '<div style="text-align:center;padding:20px;background:var(--card-bg);border-radius:8px;margin:8px 0">';
  html += '<div style="color:var(--danger);font-size:0.8em;margin-bottom:4px">⚠️ Hay sai</div>';
  html += `<div class="jp-font" style="font-size:2em;cursor:pointer" onclick="speak('` + esc(w.word).replace(/'/g, "\\'") + `')">` + esc(w.word) + "</div>";
  if (w.reading) html += '<div class="jp-font" style="color:var(--accent)">' + esc(w.reading) + "</div>";
  html += '<div id="ef-ans" style="display:none;margin-top:10px">';
  html += '<div style="font-weight:700;font-size:1.1em">' + esc(w.meaning) + "</div>";
  if (w.example) html += '<div style="margin-top:6px;font-size:0.88em;color:var(--text-muted)" class="jp-font">' + esc(w.example) + "</div>";
  html += "</div></div>";
  html += '<div style="display:flex;gap:8px;margin-top:6px">';
  html += `<button class="st-btn primary" onclick="document.getElementById('ef-ans').style.display='block'" style="flex:1">👁️ Lật thẻ</button>`;
  html += '<button class="st-btn" onclick="efNext()" style="flex:1">→ Tiếp</button></div>';
  html += '<div style="text-align:center;color:var(--text-muted);font-size:0.8em;margin-top:4px">' + (_ef.idx + 1) + "/" + _ef.items.length + "</div>";
  document.getElementById("ef-body").innerHTML = html;
}
function efNext() {
  _ef.idx++;
  _efRender();
}
function closeErrorFocusedCards() {
  _clOv("errorfocus-overlay");
}
var _tf = {};
function openTimedCards() {
  var ol = _ov("timed-fc-overlay");
  var items = shuffleArray(_allVocab()).slice(0, 10);
  if (items.length === 0) {
    showToast("Không có dữ liệu");
    return;
  }
  _tf = { items, idx: 0, timer: null, seconds: 5 };
  ol.innerHTML = _fcBase("timed-fc", "Timed Flashcards", "⏰", "closeTimedCards", "tf-body");
  ol.classList.add("active");
  _tfRender();
}
function _tfRender() {
  if (_tf.timer) clearInterval(_tf.timer);
  if (_tf.idx >= _tf.items.length) {
    document.getElementById("tf-body").innerHTML = '<div style="text-align:center;padding:20px">🎉 Xong!<br><button class="st-btn primary" onclick="openTimedCards()" style="margin-top:8px">🔄 Chơi lại</button></div>';
    return;
  }
  var w = _tf.items[_tf.idx];
  speak(w.word);
  var left = _tf.seconds;
  var html = '<div style="text-align:center;padding:20px;background:var(--card-bg);border-radius:8px;margin:8px 0">';
  html += '<div style="color:var(--text-muted);font-size:0.85em">⏱️ <span id="tf-timer">' + left + "</span>s</div>";
  html += `<div class="jp-font" style="font-size:2.5em;cursor:pointer" onclick="speak('` + esc(w.word).replace(/'/g, "\\'") + `')">` + esc(w.word) + "</div>";
  if (w.reading) html += '<div class="jp-font" style="color:var(--accent)">' + esc(w.reading) + "</div>";
  html += '<div id="tf-ans" style="display:none;margin-top:10px"><div style="font-weight:700;font-size:1.1em">' + esc(w.meaning) + "</div></div>";
  html += "</div>";
  html += '<div style="display:flex;gap:8px;margin-top:6px">';
  html += `<button class="st-btn" onclick="document.getElementById('tf-ans').style.display='block'" style="flex:1">👁️ Lật ngay</button>`;
  html += '<button class="st-btn" onclick="tfNext()" style="flex:1">→ Tiếp</button></div>';
  html += '<div style="text-align:center;color:var(--text-muted);font-size:0.8em;margin-top:4px">' + (_tf.idx + 1) + "/" + _tf.items.length + "</div>";
  document.getElementById("tf-body").innerHTML = html;
  _tf.timer = setInterval(function() {
    left--;
    var te = document.getElementById("tf-timer");
    if (te) te.textContent = left;
    if (left <= 0) {
      clearInterval(_tf.timer);
      var ans = document.getElementById("tf-ans");
      if (ans) ans.style.display = "block";
    }
  }, 1e3);
}
function tfNext() {
  if (_tf.timer) clearInterval(_tf.timer);
  _tf.idx++;
  _tfRender();
}
function closeTimedCards() {
  if (_tf.timer) clearInterval(_tf.timer);
  _clOv("timed-fc-overlay");
}
var _sf = {};
function openSpacedCards() {
  var ol = _ov("spaced-fc-overlay");
  var srsData = getSRS();
  var allV = _allVocab();
  var due = [];
  var rest = [];
  allV.forEach(function(v) {
    var entry = srsData[v.word];
    if (entry && entry.nextReview && new Date(entry.nextReview) <= /* @__PURE__ */ new Date()) due.push(v);
    else rest.push(v);
  });
  var items = due.slice(0, 10);
  if (items.length < 10) items = items.concat(shuffleArray(rest).slice(0, 10 - items.length));
  if (items.length === 0) {
    showToast("Không có dữ liệu");
    return;
  }
  _sf = { items, idx: 0 };
  ol.innerHTML = _fcBase("spaced-fc", "Spaced Flashcards", "📊", "closeSpacedCards", "sf-body");
  ol.classList.add("active");
  _sfRender();
}
function _sfRender() {
  if (_sf.idx >= _sf.items.length) {
    document.getElementById("sf-body").innerHTML = '<div style="text-align:center;padding:20px">🎉 Ôn xong!<br><button class="st-btn primary" onclick="openSpacedCards()" style="margin-top:8px">🔄 Tiếp tục</button></div>';
    return;
  }
  var w = _sf.items[_sf.idx];
  var html = '<div style="text-align:center;padding:20px;background:var(--card-bg);border-radius:8px;margin:8px 0">';
  html += `<div class="jp-font" style="font-size:2em;cursor:pointer" onclick="speak('` + esc(w.word).replace(/'/g, "\\'") + `')">` + esc(w.word) + "</div>";
  if (w.reading) html += '<div class="jp-font" style="color:var(--accent)">' + esc(w.reading) + "</div>";
  html += '<div id="sf-ans" style="display:none;margin-top:10px"><div style="font-weight:700">' + esc(w.meaning) + "</div></div>";
  html += "</div>";
  html += '<div style="display:flex;gap:8px;margin-top:6px">';
  html += `<button class="st-btn primary" onclick="document.getElementById('sf-ans').style.display='block'" style="flex:1">👁️ Lật thẻ</button>`;
  html += '<button class="st-btn" onclick="sfNext()" style="flex:1">→ Tiếp</button></div>';
  html += '<div style="text-align:center;color:var(--text-muted);font-size:0.8em;margin-top:4px">' + (_sf.idx + 1) + "/" + _sf.items.length + "</div>";
  document.getElementById("sf-body").innerHTML = html;
}
function sfNext() {
  _sf.idx++;
  _sfRender();
}
function closeSpacedCards() {
  _clOv("spaced-fc-overlay");
}
var _ml = {};
function openMinnaLessonCards() {
  var ol = _ov("minna-fc-overlay");
  if (!S.minnaData) {
    showToast("Không có dữ liệu Minna");
    return;
  }
  var keys = Object.keys(S.minnaData).map(Number).sort(function(a, b) {
    return a - b;
  });
  if (isLessonFilterActive()) {
    var from = effectiveStart(), to = effectiveCap();
    keys = keys.filter(function(n) {
      return n >= from && n <= to;
    });
  }
  if (keys.length === 0) {
    showToast("Không có dữ liệu Minna trong phạm vi bài đã chọn");
    return;
  }
  var lessonNum = keys[Math.floor(Math.random() * keys.length)];
  var lesson = S.minnaData[lessonNum];
  var vocab = lesson.vocabulary || lesson.vocab || [];
  if (vocab.length === 0) {
    if (lesson.entries) vocab = lesson.entries;
  }
  var items = shuffleArray([...vocab]).slice(0, 10);
  if (items.length === 0) {
    showToast("Bài này chưa có từ vựng");
    return;
  }
  _ml = { items, idx: 0, lesson: "Bài " + lessonNum };
  ol.innerHTML = _fcBase("minna-fc", "Minna Lesson Cards: " + esc(_ml.lesson), "📖", "closeMinnaLessonCards", "ml-body");
  ol.classList.add("active");
  _mlRender();
}
function _mlRender() {
  if (_ml.idx >= _ml.items.length) {
    document.getElementById("ml-body").innerHTML = '<div style="text-align:center;padding:20px">🎉 Xong bài ' + esc(_ml.lesson) + '!<br><button class="st-btn primary" onclick="openMinnaLessonCards()" style="margin-top:8px">🔄 Bài khác</button></div>';
    return;
  }
  var w = _ml.items[_ml.idx];
  var word = w.word || w.japanese || w.jp || "";
  var meaning = w.meaning || w.vietnamese || w.vi || "";
  var reading = w.reading || w.kana || "";
  var html = '<div style="text-align:center;padding:20px;background:var(--card-bg);border-radius:8px;margin:8px 0">';
  html += `<div class="jp-font" style="font-size:2em;cursor:pointer" onclick="speak('` + esc(word).replace(/'/g, "\\'") + `')">` + esc(word) + "</div>";
  if (reading) html += '<div class="jp-font" style="color:var(--accent)">' + esc(reading) + "</div>";
  html += '<div id="ml-ans" style="display:none;margin-top:10px"><div style="font-weight:700">' + esc(meaning) + "</div></div>";
  html += "</div>";
  html += '<div style="display:flex;gap:8px;margin-top:6px">';
  html += `<button class="st-btn primary" onclick="document.getElementById('ml-ans').style.display='block'" style="flex:1">👁️ Lật thẻ</button>`;
  html += '<button class="st-btn" onclick="mlNext()" style="flex:1">→ Tiếp</button></div>';
  html += '<div style="text-align:center;color:var(--text-muted);font-size:0.8em;margin-top:4px">' + (_ml.idx + 1) + "/" + _ml.items.length + "</div>";
  document.getElementById("ml-body").innerHTML = html;
}
function mlNext() {
  _ml.idx++;
  _mlRender();
}
function closeMinnaLessonCards() {
  _clOv("minna-fc-overlay");
}
export {
  afNext,
  ccNext,
  closeAudioFirstCards,
  closeContextCards,
  closeConversationCards,
  closeErrorFocusedCards,
  closeGrammarPatternCards,
  closeKanjiComponentCards,
  closeMinnaLessonCards,
  closeReverseCards,
  closeSpacedCards,
  closeTimedCards,
  cxNext,
  efNext,
  gpcNext,
  kccNext,
  mlNext,
  openAudioFirstCards,
  openContextCards,
  openConversationCards,
  openErrorFocusedCards,
  openGrammarPatternCards,
  openKanjiComponentCards,
  openMinnaLessonCards,
  openReverseCards,
  openSpacedCards,
  openTimedCards,
  rvNext,
  sfNext,
  tfNext
};
