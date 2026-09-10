import { w as worldOverlayMount } from "./legacy-loader-gyvSYPc3.js";
import { ap as shuffleArray, ao as esc, s as safeGetItem, S as STORAGE_KEYS, d as safeSetItem, ai as S } from "./index-BEJSIlFS.js";
import { s as showToast } from "./toast-Dwy3w2e2.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./world-tool-destinations-BAVvWbat.js";
import "./vendor-react-BUL8WuXG.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
/* empty css               */
function _loadCustomCards() {
  try {
    return JSON.parse(safeGetItem(STORAGE_KEYS.CUSTOM_CARDS) || "[]");
  } catch (e) {
    return [];
  }
}
function _saveCustomCards(cards) {
  return safeSetItem(STORAGE_KEYS.CUSTOM_CARDS, JSON.stringify(Array.isArray(cards) ? cards : []));
}
function _kanji() {
  var r = [];
  S.kanji.forEach(function(s) {
    s.entries.forEach(function(k) {
      if (k.kanji) r.push(k);
    });
  });
  return r;
}
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
function openCanvasWriting() {
  var kanji = _kanji();
  var k = kanji[Math.floor(Math.random() * kanji.length)];
  var ol = _ov("canvaswrite-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>✍️ Luyện viết</h3><span class="mg-close" onclick="closeCanvasWriting()">✕</span></div>';
  h += '<div class="wr-target">';
  h += '<div class="wr-kanji">' + esc(k.kanji) + "</div>";
  h += '<div class="wr-info">' + esc(k.title || "") + " · " + esc(String(k.strokes || "?")) + " nét</div>";
  h += "</div>";
  h += '<div class="wr-canvas-wrap">';
  h += '<canvas id="wr-canvas" width="280" height="280"></canvas>';
  h += "</div>";
  h += '<div class="wr-btns">';
  h += '<button class="st-btn" onclick="wrClear()">🗑 Xóa</button>';
  h += '<button class="st-btn" onclick="wrUndo()">↩ Undo</button>';
  h += '<button class="st-btn primary" onclick="openCanvasWriting()">🔄 Kanji mới</button>';
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
  setTimeout(function() {
    _initWriteCanvas();
  }, 50);
}
var _wrStrokes = [], _wrCurrent = [];
function _initWriteCanvas() {
  var canvas = document.getElementById("wr-canvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim() || "#fff";
  ctx.fillRect(0, 0, 280, 280);
  var _cs = getComputedStyle(document.documentElement);
  ctx.strokeStyle = _cs.getPropertyValue("--border").trim() || "#ddd";
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(140, 0);
  ctx.lineTo(140, 280);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, 140);
  ctx.lineTo(280, 140);
  ctx.stroke();
  ctx.setLineDash([]);
  _wrStrokes = [];
  _wrCurrent = [];
  var drawing = false;
  ctx.strokeStyle = _cs.getPropertyValue("--text").trim() || "#333";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  function pos(e) {
    var r = canvas.getBoundingClientRect();
    var t = e.touches ? e.touches[0] : e;
    return { x: t.clientX - r.left, y: t.clientY - r.top };
  }
  canvas.onmousedown = canvas.ontouchstart = function(e) {
    e.preventDefault();
    drawing = true;
    var p = pos(e);
    _wrCurrent = [p];
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  };
  canvas.onmousemove = canvas.ontouchmove = function(e) {
    if (!drawing) return;
    e.preventDefault();
    var p = pos(e);
    _wrCurrent.push(p);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
  };
  canvas.onmouseup = canvas.ontouchend = function() {
    drawing = false;
    if (_wrCurrent.length > 0) _wrStrokes.push([..._wrCurrent]);
    _wrCurrent = [];
  };
}
function wrClear() {
  _wrStrokes = [];
  _initWriteCanvas();
}
function wrUndo() {
  _wrStrokes.pop();
  var canvas = document.getElementById("wr-canvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var _cs2 = getComputedStyle(document.documentElement);
  ctx.fillStyle = _cs2.getPropertyValue("--bg-card").trim() || "#fff";
  ctx.fillRect(0, 0, 280, 280);
  ctx.strokeStyle = _cs2.getPropertyValue("--border").trim() || "#ddd";
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(140, 0);
  ctx.lineTo(140, 280);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, 140);
  ctx.lineTo(280, 140);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.strokeStyle = _cs2.getPropertyValue("--text").trim() || "#333";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  _wrStrokes.forEach(function(stroke) {
    ctx.beginPath();
    stroke.forEach(function(p, i) {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();
  });
}
function closeCanvasWriting() {
  _clOv("canvaswrite-overlay");
}
function openHandwritingOCR() {
  var ol = _ov("hwocr-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📷 Nhận dạng chữ viết</h3><span class="mg-close" onclick="closeHandwritingOCR()">✕</span></div>';
  h += '<div class="at-tip">Viết một ký tự Hiragana hoặc Kanji rồi nhấn "Nhận dạng"</div>';
  h += '<canvas id="ocr-canvas" width="200" height="200" style="border:2px solid var(--border);border-radius:8px;background:var(--bg-card,#fff);display:block;margin:12px auto;touch-action:none"></canvas>';
  h += '<div class="wr-btns">';
  h += '<button class="st-btn" onclick="ocrClear()">🗑 Xóa</button>';
  h += '<button class="st-btn primary" onclick="ocrRecognize()">🔍 Nhận dạng</button>';
  h += "</div>";
  h += '<div id="ocr-result" class="wr-result"></div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
  setTimeout(function() {
    var canvas = document.getElementById("ocr-canvas");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var drawing = false;
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--text").trim() || "#333";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    function pos(e) {
      var r = canvas.getBoundingClientRect();
      var t = e.touches ? e.touches[0] : e;
      return { x: t.clientX - r.left, y: t.clientY - r.top };
    }
    canvas.onmousedown = canvas.ontouchstart = function(e) {
      e.preventDefault();
      drawing = true;
      var p = pos(e);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
    };
    canvas.onmousemove = canvas.ontouchmove = function(e) {
      if (!drawing) return;
      e.preventDefault();
      var p = pos(e);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    };
    canvas.onmouseup = canvas.ontouchend = function() {
      drawing = false;
    };
  }, 50);
}
function ocrClear() {
  var c = document.getElementById("ocr-canvas");
  if (c) c.getContext("2d").clearRect(0, 0, 200, 200);
  var r = document.getElementById("ocr-result");
  if (r) r.innerHTML = "";
}
function ocrRecognize() {
  var r = document.getElementById("ocr-result");
  var kanji = _kanji();
  var suggestions = shuffleArray(kanji).slice(0, 5);
  var h = '<div class="at-tip">✨ Gợi ý (nhấn để chọn):</div>';
  suggestions.forEach(function(k) {
    h += `<span class="wr-ocr-suggest" onclick="speak('` + esc(k.kanji).replace(/'/g, "\\'") + `')">` + esc(k.kanji) + "</span>";
  });
  h += '<div class="at-tip" style="margin-top:8px">💡 Tính năng OCR đầy đủ cần thêm ML model. Hiện tại sử dụng gợi ý.</div>';
  if (r) r.innerHTML = h;
}
function closeHandwritingOCR() {
  _clOv("hwocr-overlay");
}
var _RADICALS = {
  "人": { meaning: "người", readings: "ジン・ニン" },
  "口": { meaning: "miệng", readings: "コウ・ク" },
  "手": { meaning: "tay", readings: "シュ" },
  "心": { meaning: "tim", readings: "シン" },
  "水": { meaning: "nước", readings: "スイ" },
  "火": { meaning: "lửa", readings: "カ" },
  "木": { meaning: "cây", readings: "モク・ボク" },
  "土": { meaning: "đất", readings: "ド・ト" },
  "金": { meaning: "vàng/kim loại", readings: "キン" },
  "日": { meaning: "ngày/mặt trời", readings: "ニチ・ジツ" },
  "月": { meaning: "tháng/mặt trăng", readings: "ゲツ・ガツ" },
  "言": { meaning: "lời nói", readings: "ゲン・ゴン" },
  "女": { meaning: "phụ nữ", readings: "ジョ" },
  "子": { meaning: "con", readings: "シ・ス" },
  "力": { meaning: "sức", readings: "リョク・リキ" },
  "門": { meaning: "cổng", readings: "モン" },
  "目": { meaning: "mắt", readings: "モク・ボク" },
  "耳": { meaning: "tai", readings: "ジ" },
  "足": { meaning: "chân", readings: "ソク" },
  "車": { meaning: "xe", readings: "シャ" }
};
function openRadicalDetail() {
  var kanji = _kanji();
  var k = kanji[Math.floor(Math.random() * kanji.length)];
  var ol = _ov("radical-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🧩 Phân tích bộ thủ</h3><span class="mg-close" onclick="closeRadicalDetail()">✕</span></div>';
  h += '<div class="wr-target"><div class="wr-kanji">' + esc(k.kanji) + "</div>";
  h += '<div class="wr-info">' + esc(k.title || "") + "</div></div>";
  h += '<div class="wr-radical-list">';
  k.kanji.split ? [k.kanji] : [k.kanji];
  var found = [];
  Object.keys(_RADICALS).forEach(function(rad) {
    if (k.kanji.indexOf(rad) >= 0 || k.compounds && k.compounds.indexOf(rad) >= 0) {
      found.push({ rad, info: _RADICALS[rad] });
    }
  });
  if (found.length > 0) {
    found.forEach(function(f) {
      h += '<div class="wr-radical-item">';
      h += '<span class="wr-rad-char">' + f.rad + "</span>";
      h += '<span class="wr-rad-info">' + esc(f.info.meaning) + " (" + esc(f.info.readings) + ")</span>";
      h += "</div>";
    });
  } else {
    h += '<div class="at-tip">Không tìm thấy bộ thủ phổ biến. Kanji này có thể là bộ thủ gốc.</div>';
  }
  h += "</div>";
  h += '<div class="wr-extra"><b>On:</b> ' + esc(k.on || "") + " · <b>Kun:</b> " + esc(k.kun || "") + " · <b>Nét:</b> " + esc(String(k.strokes || "?")) + "</div>";
  if (k.compounds) h += '<div class="wr-extra"><b>Từ ghép:</b> ' + esc(k.compounds) + "</div>";
  h += '<button class="st-btn primary" onclick="openRadicalDetail()" style="margin:12px auto;display:block">🔄 Kanji mới</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeRadicalDetail() {
  _clOv("radical-overlay");
}
var _ESSAY_PROMPTS = [
  { jp: "今日何をしましたか？", vi: "Hôm nay bạn đã làm gì?", hint: "～ました、～て" },
  { jp: "好きな食べ物は何ですか？", vi: "Bạn thích ăn gì?", hint: "～が好きです" },
  { jp: "週末に何をしますか？", vi: "Cuối tuần bạn sẽ làm gì?", hint: "～つもりです、～たいです" },
  { jp: "日本語をどのくらい勉強していますか？", vi: "Bạn học tiếng Nhật bao lâu rồi?", hint: "～ています、～ぐらい" },
  { jp: "あなたの町について教えてください。", vi: "Hãy kể về thành phố của bạn.", hint: "～があります、～です" },
  { jp: "将来何になりたいですか？", vi: "Bạn muốn trở thành gì trong tương lai?", hint: "～になりたいです" }
];
function openEssayWriting() {
  var prompt = _ESSAY_PROMPTS[Math.floor(Math.random() * _ESSAY_PROMPTS.length)];
  var ol = _ov("essay-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📝 Viết bài nhỏ</h3><span class="mg-close" onclick="closeEssayWriting()">✕</span></div>';
  h += '<div class="wr-prompt-card">';
  h += '<div class="wr-prompt-jp">' + esc(prompt.jp) + ` <button class="at-speak-btn" onclick="speak('` + esc(prompt.jp).replace(/'/g, "\\'") + `')">🔊</button></div>`;
  h += '<div class="wr-prompt-vi">' + esc(prompt.vi) + "</div>";
  h += '<div class="wr-prompt-hint">💡 Gợi ý ngữ pháp: ' + esc(prompt.hint) + "</div>";
  h += "</div>";
  h += '<textarea class="wr-essay-input" id="essay-input" rows="5" placeholder="Viết câu trả lời bằng tiếng Nhật..."></textarea>';
  h += '<div class="wr-btns">';
  h += '<button class="st-btn" onclick="essayCheck()">✅ Đánh giá</button>';
  h += '<button class="st-btn primary" onclick="openEssayWriting()">🔄 Đề mới</button>';
  h += "</div>";
  h += '<div id="essay-fb" class="wr-result"></div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function essayCheck() {
  var input = document.getElementById("essay-input");
  if (!input) return;
  var text = input.value.trim();
  if (text.length < 2) {
    showToast("Hãy viết ít nhất 1 câu");
    return;
  }
  var fb = document.getElementById("essay-fb");
  var charCount = text.length;
  var hasHiragana = /[ぁ-ん]/.test(text);
  var hasKanji = /[\u4E00-\u9FFF]/.test(text);
  var hasKatakana = /[\u30A0-\u30FF]/.test(text);
  var h = '<div class="wr-eval">';
  h += "<div>📊 Độ dài: " + charCount + " ký tự</div>";
  h += "<div>" + (hasHiragana ? "✅" : "⚠️") + " Hiragana: " + (hasHiragana ? "Có" : "Chưa có") + "</div>";
  h += "<div>" + (hasKanji ? "✅" : "💡") + " Kanji: " + (hasKanji ? "Có sử dụng" : "Thử dùng kanji") + "</div>";
  h += "<div>" + (hasKatakana ? "✅" : "ℹ️") + " Katakana: " + (hasKatakana ? "Có" : "Không (OK)") + "</div>";
  h += "<div>🎯 Tiếp tục luyện viết!</div>";
  h += "</div>";
  if (fb) fb.innerHTML = h;
}
function closeEssayWriting() {
  _clOv("essay-overlay");
}
var _HIRAGANA = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
var _KATAKANA = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
var KANA = { type: "hiragana", idx: 0, score: 0, total: 10, chars: [] };
function openKanaPractice() {
  var src = KANA.type === "hiragana" ? _HIRAGANA : _KATAKANA;
  var all = src.split("");
  KANA.chars = shuffleArray([...all]).slice(0, KANA.total);
  KANA.idx = 0;
  KANA.score = 0;
  _renderKana();
}
function _renderKana() {
  var ol = _ov("kana-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🔤 Luyện Kana</h3><span class="mg-close" onclick="closeKanaPractice()">✕</span></div>';
  h += '<div class="wr-btns" style="margin-bottom:8px">';
  h += '<button class="st-btn' + (KANA.type === "hiragana" ? " active" : "") + `" onclick="kanaSwitch('hiragana')">Hiragana</button>`;
  h += '<button class="st-btn' + (KANA.type === "katakana" ? " active" : "") + `" onclick="kanaSwitch('katakana')">Katakana</button>`;
  h += "</div>";
  if (KANA.idx >= KANA.total) {
    h += '<div class="mg-result">Kết quả: ' + KANA.score + "/" + KANA.total + "</div>";
    h += '<button class="st-btn primary" onclick="openKanaPractice()">🔄 Lại</button>';
  } else {
    var ch = KANA.chars[KANA.idx];
    h += '<div class="mg-progress">' + (KANA.idx + 1) + "/" + KANA.total + " · ✅ " + KANA.score + "</div>";
    h += '<div class="wr-kanji" style="font-size:3em">' + ch + "</div>";
    h += `<button class="st-btn" onclick="speak('` + ch + `')" style="margin:8px auto;display:block">🔊</button>`;
    h += '<canvas id="kana-canvas" width="200" height="200" style="border:2px solid var(--border);border-radius:8px;background:var(--bg-card,#fff);display:block;margin:8px auto;touch-action:none"></canvas>';
    h += '<div class="wr-btns"><button class="st-btn" onclick="kanaClear()">🗑</button><button class="st-btn primary" onclick="kanaNext()">Tiếp →</button></div>';
  }
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
  if (KANA.idx < KANA.total) setTimeout(_initKanaCanvas, 50);
}
function _initKanaCanvas() {
  var c = document.getElementById("kana-canvas");
  if (!c) return;
  var ctx = c.getContext("2d");
  var drawing = false;
  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--text").trim() || "#333";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  function pos(e) {
    var r = c.getBoundingClientRect();
    var t = e.touches ? e.touches[0] : e;
    return { x: t.clientX - r.left, y: t.clientY - r.top };
  }
  c.onmousedown = c.ontouchstart = function(e) {
    e.preventDefault();
    drawing = true;
    var p = pos(e);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  };
  c.onmousemove = c.ontouchmove = function(e) {
    if (!drawing) return;
    e.preventDefault();
    var p = pos(e);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
  };
  c.onmouseup = c.ontouchend = function() {
    drawing = false;
  };
}
function kanaClear() {
  var c = document.getElementById("kana-canvas");
  if (c) c.getContext("2d").clearRect(0, 0, 200, 200);
}
function kanaSwitch(type) {
  KANA.type = type;
  openKanaPractice();
}
function kanaNext() {
  KANA.score++;
  KANA.idx++;
  _renderKana();
}
function closeKanaPractice() {
  _clOv("kana-overlay");
}
function openComponentTree() {
  var kanji = _kanji();
  var k = kanji[Math.floor(Math.random() * kanji.length)];
  var ol = _ov("comptree-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🌳 Component Tree</h3><span class="mg-close" onclick="closeComponentTree()">✕</span></div>';
  h += '<div class="wr-target"><div class="wr-kanji">' + esc(k.kanji) + "</div>";
  h += '<div class="wr-info">' + esc(k.title || "") + " · " + esc(String(k.strokes || "?")) + " nét</div></div>";
  h += '<div class="wr-tree">';
  h += '<div class="wr-tree-node root">' + esc(k.kanji) + "</div>";
  var chars = k.kanji.length > 1 ? k.kanji.split("") : [];
  if (chars.length > 1) {
    h += '<div class="wr-tree-children">';
    chars.forEach(function(c) {
      h += '<div class="wr-tree-node child">' + c + "</div>";
    });
    h += "</div>";
  }
  h += "</div>";
  h += '<div class="wr-extra">';
  h += "<div><b>On:</b> " + esc(k.on || "") + "</div>";
  h += "<div><b>Kun:</b> " + esc(k.kun || "") + "</div>";
  if (k.compounds) h += "<div><b>Từ ghép:</b> " + esc(k.compounds) + "</div>";
  h += "</div>";
  h += '<button class="st-btn primary" onclick="openComponentTree()" style="margin:12px auto;display:block">🔄 Kanji mới</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeComponentTree() {
  _clOv("comptree-overlay");
}
var _LOOKALIKES = [
  { a: "大", b: "太", c: "犬", note: "Tất cả gần giống nhau, chú ý nét chấm" },
  { a: "土", b: "士", c: "十", note: "Nét dài ngắn khác nhau" },
  { a: "未", b: "末", c: "本", note: "Vị trí nét ngang khác nhau" },
  { a: "待", b: "持", c: "特", note: "Bộ thủ bên trái khác nhau" },
  { a: "話", b: "語", c: "読", note: "Bộ thủ bên trái: 言 vs ごんべん" },
  { a: "入", b: "人", c: "八", note: "Hình dáng tương tự, nét khác" },
  { a: "日", b: "目", c: "田", note: "Nét bên trong khác nhau" },
  { a: "右", b: "左", c: "石", note: "Thứ tự nét khác, ý nghĩa khác" },
  { a: "間", b: "聞", c: "問", note: "Bộ thủ bên trong/ngoài: 門+日/耳/口" },
  { a: "休", b: "体", c: "林", note: "Bộ ⺅ + 木 vs 本 vs 木+木" }
];
function openLookAlike() {
  var pair = _LOOKALIKES[Math.floor(Math.random() * _LOOKALIKES.length)];
  var kanji = _kanji();
  var ol = _ov("lookalike-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>👀 Look-Alike Kanji</h3><span class="mg-close" onclick="closeLookAlike()">✕</span></div>';
  h += '<div class="wr-lookalike-group">';
  [pair.a, pair.b, pair.c].forEach(function(ch) {
    var info = kanji.find(function(k) {
      return k.kanji === ch;
    });
    h += '<div class="wr-la-card">';
    h += '<div class="wr-la-char">' + ch + "</div>";
    if (info) {
      h += '<div class="wr-la-meaning">' + esc(info.title || "") + "</div>";
      h += '<div class="wr-la-reading">' + esc(info.on || "") + "</div>";
    }
    h += "</div>";
  });
  h += "</div>";
  h += '<div class="wr-la-note">💡 ' + esc(pair.note) + "</div>";
  h += '<button class="st-btn primary" onclick="openLookAlike()" style="margin:12px auto;display:block">🔄 Nhóm mới</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeLookAlike() {
  _clOv("lookalike-overlay");
}
function openCustomCards() {
  var cards = _loadCustomCards();
  var ol = _ov("customcards-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📇 Custom Flashcards</h3><span class="mg-close" onclick="closeCustomCards()">✕</span></div>';
  h += '<div class="wr-cc-form">';
  h += '<input class="pz-spt-input" id="cc-front" placeholder="Mặt trước (JP)" />';
  h += '<input class="pz-spt-input" id="cc-back" placeholder="Mặt sau (VN)" />';
  h += '<button class="st-btn primary" onclick="ccAdd()">+ Thêm card</button>';
  h += "</div>";
  h += '<div class="wr-cc-list">';
  if (cards.length === 0) h += '<div class="at-tip">Chưa có flashcard nào</div>';
  cards.forEach(function(c, i) {
    h += '<div class="wr-cc-item">';
    h += '<span class="wr-cc-front">' + esc(c.front) + "</span>";
    h += '<span class="wr-cc-back">' + esc(c.back) + "</span>";
    h += '<button class="at-pl-rm" onclick="ccRemove(' + i + ')">✕</button>';
    h += "</div>";
  });
  h += "</div>";
  if (cards.length > 0) h += '<button class="st-btn" onclick="ccStudy()" style="margin-top:8px">📖 Ôn flashcard</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function ccAdd() {
  var front = document.getElementById("cc-front");
  var back = document.getElementById("cc-back");
  if (!front || !back || !front.value.trim() || !back.value.trim()) {
    showToast("Nhập cả 2 mặt");
    return;
  }
  var cards = _loadCustomCards();
  if (cards.length >= 500) {
    showToast("Tối đa 500 card. Xóa bớt để thêm mới.");
    return;
  }
  cards.push({ front: front.value.trim(), back: back.value.trim() });
  _saveCustomCards(cards);
  openCustomCards();
}
function ccRemove(idx) {
  var cards = _loadCustomCards();
  cards.splice(idx, 1);
  _saveCustomCards(cards);
  openCustomCards();
}
function ccStudy() {
  var cards = _loadCustomCards();
  if (cards.length === 0) {
    showToast("Không có card");
    return;
  }
  cards = shuffleArray(cards);
  var idx = 0;
  function showCard() {
    var ol = document.getElementById("customcards-overlay");
    if (!ol) return;
    if (idx >= cards.length) {
      ol.querySelector(".mg-container").innerHTML = '<div class="mg-header"><h3>📇 Custom Flashcards</h3><span class="mg-close" onclick="closeCustomCards()">✕</span></div><div class="mg-result">🎉 Ôn xong!</div><button class="st-btn primary" onclick="openCustomCards()">OK</button>';
      return;
    }
    var c = cards[idx];
    ol.querySelector(".mg-container").innerHTML = '<div class="mg-header"><h3>📇 Card ' + (idx + 1) + "/" + cards.length + `</h3><span class="mg-close" onclick="closeCustomCards()">✕</span></div><div class="wr-cc-study-card" onclick="this.classList.toggle('flipped')"><div class="wr-cc-s-front">` + esc(c.front) + '</div><div class="wr-cc-s-back">' + esc(c.back) + '</div></div><div class="at-tip">Nhấn card để lật</div><button class="st-btn primary" onclick="">Tiếp →</button>';
    ol.querySelector(".st-btn.primary").onclick = function() {
      idx++;
      showCard();
    };
  }
  showCard();
}
function closeCustomCards() {
  _clOv("customcards-overlay");
}
var _SHODO_INFO = [
  { title: "永字八法 (Eiji Happō)", desc: "Ký tự 永 chứa 8 nét cơ bản của thư pháp Nhật: yokohane, tatehane, ten, migi-harai, hidari-harai..." },
  { title: "Bút pháp cơ bản", desc: "Giữ bút thẳng, lực tay đều. Bắt đầu nét nhẹ, ấn giữa, nhấc nhẹ cuối." },
  { title: "Thứ tự nét", desc: "Trái → phải, trên → dưới. Nét ngang trước dọc. Bao ngoài trước ruột trong." },
  { title: "Cân bằng", desc: "Mỗi kanji phải cân bằng trong ô vuông tưởng tượng, chia 4 phần đều." }
];
function openShodo() {
  var ol = _ov("shodo-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🖌 Shodo - Thư pháp</h3><span class="mg-close" onclick="closeShodo()">✕</span></div>';
  h += '<div class="wr-shodo-hero">永</div>';
  _SHODO_INFO.forEach(function(info) {
    h += '<div class="wr-shodo-card"><h4>' + esc(info.title) + "</h4><p>" + esc(info.desc) + "</p></div>";
  });
  h += '<div class="wr-shodo-practice">';
  h += '<canvas id="shodo-canvas" width="280" height="280" style="border:2px solid var(--border);border-radius:8px;background:#fffef5;display:block;margin:12px auto;touch-action:none"></canvas>';
  h += '<div class="wr-btns"><button class="st-btn" onclick="shodoClear()">🗑 Xóa</button></div>';
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
  setTimeout(function() {
    var c = document.getElementById("shodo-canvas");
    if (!c) return;
    var ctx = c.getContext("2d");
    var drawing = false;
    ctx.strokeStyle = "#222";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    function pos(e) {
      var r = c.getBoundingClientRect();
      var t = e.touches ? e.touches[0] : e;
      return { x: t.clientX - r.left, y: t.clientY - r.top };
    }
    c.onmousedown = c.ontouchstart = function(e) {
      e.preventDefault();
      drawing = true;
      var p = pos(e);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
    };
    c.onmousemove = c.ontouchmove = function(e) {
      if (!drawing) return;
      e.preventDefault();
      var p = pos(e);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    };
    c.onmouseup = c.ontouchend = function() {
      drawing = false;
    };
  }, 50);
}
function shodoClear() {
  var c = document.getElementById("shodo-canvas");
  if (c) {
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#fffef5";
    ctx.fillRect(0, 0, 280, 280);
  }
}
function closeShodo() {
  _clOv("shodo-overlay");
}
var _KANJI_EVOLUTION = [
  { kanji: "山", stages: ["🏔️ Hình núi", "⛰ → 山"], origin: "Tượng hình ba đỉnh núi" },
  { kanji: "川", stages: ["🌊 Dòng nước", "〜〜 → 川"], origin: "Ba dòng nước chảy song song" },
  { kanji: "日", stages: ["☀️ Mặt trời", "⊙ → 日"], origin: "Hình tròn có chấm giữa = mặt trời" },
  { kanji: "月", stages: ["🌙 Trăng lưỡi liềm", "☽ → 月"], origin: "Hình trăng khuyết" },
  { kanji: "木", stages: ["🌳 Cây", "🌿 → 木"], origin: "Thân cây có cành và rễ" },
  { kanji: "火", stages: ["🔥 Ngọn lửa", "🔥 → 火"], origin: "Ngọn lửa với tàn bay" },
  { kanji: "水", stages: ["💧 Nước chảy", "〜 → 水"], origin: "Dòng nước giữa và giọt bắn hai bên" },
  { kanji: "人", stages: ["🚶 Người đứng", "人 → 人"], origin: "Người đứng nghiêng, hai chân" },
  { kanji: "口", stages: ["👄 Miệng mở", "○ → 口"], origin: "Hình miệng nhìn chính diện" },
  { kanji: "目", stages: ["👁 Con mắt", "◎ → 目"], origin: "Mắt xoay dọc, có đồng tử" },
  { kanji: "耳", stages: ["👂 Tai", "耳"], origin: "Hình lỗ tai với nếp trong" },
  { kanji: "手", stages: ["✋ Bàn tay", "✋ → 手"], origin: "Năm ngón và lòng bàn tay" }
];
function openKanjiEvolution() {
  var ol = _ov("evolution-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📜 Kanji Evolution</h3><span class="mg-close" onclick="closeKanjiEvolution()">✕</span></div>';
  h += '<div class="at-tip">Nguồn gốc tượng hình của Kanji</div>';
  h += '<div class="wr-evo-list">';
  _KANJI_EVOLUTION.forEach(function(item) {
    h += '<div class="wr-evo-card">';
    h += '<div class="wr-evo-kanji">' + item.kanji + "</div>";
    h += '<div class="wr-evo-stages">';
    item.stages.forEach(function(s) {
      h += '<span class="wr-evo-stage">' + esc(s) + "</span>";
    });
    h += "</div>";
    h += '<div class="wr-evo-origin">' + esc(item.origin) + "</div>";
    h += "</div>";
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeKanjiEvolution() {
  _clOv("evolution-overlay");
}
export {
  KANA,
  ccAdd,
  ccRemove,
  ccStudy,
  closeCanvasWriting,
  closeComponentTree,
  closeCustomCards,
  closeEssayWriting,
  closeHandwritingOCR,
  closeKanaPractice,
  closeKanjiEvolution,
  closeLookAlike,
  closeRadicalDetail,
  closeShodo,
  essayCheck,
  kanaClear,
  kanaNext,
  kanaSwitch,
  ocrClear,
  ocrRecognize,
  openCanvasWriting,
  openComponentTree,
  openCustomCards,
  openEssayWriting,
  openHandwritingOCR,
  openKanaPractice,
  openKanjiEvolution,
  openLookAlike,
  openRadicalDetail,
  openShodo,
  shodoClear,
  wrClear,
  wrUndo
};
