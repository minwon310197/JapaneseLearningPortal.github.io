import { cV as esc, P as S, e as safeGetItem, N as safeSetItem, cf as shuffleArray } from "./feature-3d-ClP3ARU5.js";
import { s as showToast } from "./toast-CJdbqLP6.js";
import { g as getSRS, a as getBookmarks } from "./bookmarks-lHbrr_Ia.js";
import "./vendor-react-BYxMSDiB.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
function _vocab() {
  var r = [];
  S.vocab.forEach(function(s) {
    s.entries.forEach(function(e) {
      if (e.word && e.meaning) r.push(e);
    });
  });
  return r;
}
function _pick(a, n) {
  return shuffleArray([...a]).slice(0, n);
}
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
var _TUTOR_TOPICS = [
  { q: "Dạy tôi về thể て", a: "Thể て (te-form) là dạng liên kết quan trọng nhất trong tiếng Nhật:\n\n• Nhóm 1 (u→tte/nde): 書く→書いて、飲む→飲んで\n• Nhóm 2 (-masu→te): 食べます→食べて\n• Bất quy tắc: する→して、くる→きて\n\nDùng để: nối câu, xin phép (てもいい), đang làm (ている)" },
  { q: "Giải thích thể điều kiện", a: "4 loại điều kiện trong tiếng Nhật:\n\n1. ～ば: Nếu (tự nhiên) 行けば\n2. ～たら: Nếu/khi (hoàn thành) 行ったら\n3. ～と: Khi (tự động) 行くと\n4. ～なら: Nếu (giả định) 行くなら\n\nN4 tập trung vào ～たら và ～ば" },
  { q: "Thể bị động là gì?", a: "Thể bị động (受身形):\n\n• Nhóm 1: u→areru (書く→書かれる)\n• Nhóm 2: る→られる (食べる→食べられる)\n• する→される、くる→こられる\n\nDùng: 先生に褒められた (Được thầy khen)\n⚠️ Bị động gián tiếp: 雨に降られた (Bị mưa - khó chịu)" },
  { q: "Sự khác nhau は và が", a: 'は (wa) vs が (ga):\n\n• は = chủ đề (topic), thông tin đã biết\n  私はベトナム人です (Tôi là người Việt)\n• が = chủ ngữ (subject), thông tin mới\n  誰が来ましたか？田中さんが来ました\n\n💡 Mẹo: は = "speaking of...", が = "it is... that"' }
];
function openAITutor() {
  var ol = _ov("aitutor-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🤖 AI Tutor</h3><span class="mg-close" onclick="closeAITutor()">✕</span></div>';
  h += '<div class="at-tip">Chọn chủ đề hoặc đặt câu hỏi</div>';
  h += '<div class="ai-topics">';
  _TUTOR_TOPICS.forEach(function(t, i) {
    h += '<button class="ai-topic-btn" onclick="tutorAsk(' + i + ')">' + esc(t.q) + "</button>";
  });
  h += "</div>";
  h += '<div class="ai-chat" id="ai-chat"></div>';
  h += '<div class="ai-input-row">';
  h += `<input class="pz-spt-input" id="ai-input" placeholder="Đặt câu hỏi..." onkeydown="if(event.key==='Enter')tutorFreeAsk()" />`;
  h += '<button class="st-btn primary" onclick="tutorFreeAsk()">Gửi</button>';
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function tutorAsk(idx) {
  var t = _TUTOR_TOPICS[idx];
  var chat = document.getElementById("ai-chat");
  if (chat) {
    chat.innerHTML += '<div class="ai-msg user">👤 ' + esc(t.q) + "</div>";
    chat.innerHTML += '<div class="ai-msg bot">🤖 ' + esc(t.a).replace(/\n/g, "<br>") + "</div>";
    chat.scrollTop = chat.scrollHeight;
  }
}
function tutorFreeAsk() {
  var inp = document.getElementById("ai-input");
  if (!inp || !inp.value.trim()) return;
  var q = inp.value.trim();
  inp.value = "";
  var chat = document.getElementById("ai-chat");
  if (!chat) return;
  chat.innerHTML += '<div class="ai-msg user">👤 ' + esc(q) + "</div>";
  var answer = "Đây là hệ thống offline, nên không có AI thực. Hãy thử các chủ đề có sẵn ở trên, hoặc sử dụng tab Ngữ pháp để tìm hiểu chi tiết!";
  if (q.match(/て|te.?form/i)) answer = _TUTOR_TOPICS[0].a;
  else if (q.match(/điều kiện|ば|たら|conditional/i)) answer = _TUTOR_TOPICS[1].a;
  else if (q.match(/bị động|passive|受身/i)) answer = _TUTOR_TOPICS[2].a;
  else if (q.match(/は|が|wa.*ga|topic.*subject/i)) answer = _TUTOR_TOPICS[3].a;
  else if (q.match(/kanji|漢字/i)) answer = "Hãy vào tab Kanji để học và ôn tập. Sử dụng tính năng Look-Alike Kanji để so sánh các kanji giống nhau!";
  else if (q.match(/vocab|từ vựng/i)) answer = "Tab Từ vựng có 26 chủ đề. Bookmark từ quan trọng và ôn qua SRS mỗi ngày!";
  chat.innerHTML += '<div class="ai-msg bot">🤖 ' + esc(answer).replace(/\n/g, "<br>") + "</div>";
  chat.scrollTop = chat.scrollHeight;
}
function closeAITutor() {
  _clOv("aitutor-overlay");
}
function openExampleGen() {
  var ol = _ov("exgen-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📝 Example Generator</h3><span class="mg-close" onclick="closeExampleGen()">✕</span></div>';
  h += '<div class="at-tip">Nhập từ để tìm ví dụ</div>';
  h += `<input class="pz-spt-input" id="exgen-input" placeholder="Nhập từ vựng..." onkeydown="if(event.key==='Enter')exgenSearch()" />`;
  h += '<button class="st-btn primary" onclick="exgenSearch()" style="margin:8px auto;display:block">🔍 Tìm ví dụ</button>';
  h += '<div id="exgen-results"></div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function exgenSearch() {
  var inp = document.getElementById("exgen-input");
  var res = document.getElementById("exgen-results");
  if (!inp || !res) return;
  var q = inp.value.trim();
  if (!q) return;
  var found = [];
  S.vocab.forEach(function(sec) {
    sec.entries.forEach(function(e) {
      if (e.word && e.word.indexOf(q) >= 0 || e.meaning && e.meaning.indexOf(q) >= 0) {
        if (e.example) found.push({ word: e.word, meaning: e.meaning, example: e.example });
      }
    });
  });
  S.grammar.forEach(function(sec) {
    sec.patterns.forEach(function(p) {
      if (p.content.indexOf(q) >= 0) {
        var lines = p.content.match(/[ぁ-ん\u30A0-\u30FF\u4E00-\u9FFF][^\n|*]{5,50}/g);
        if (lines) lines.slice(0, 2).forEach(function(l) {
          found.push({ word: q, meaning: p.title, example: l.trim() });
        });
      }
    });
  });
  var h = "";
  if (found.length === 0) {
    h = '<div class="at-tip">Không tìm thấy ví dụ cho "' + esc(q) + '"</div>';
  } else {
    found.slice(0, 10).forEach(function(f) {
      h += '<div class="ai-example"><b>' + esc(f.word) + "</b> (" + esc(f.meaning) + ")<br>";
      h += '<span class="ai-ex-text">' + esc(f.example) + "</span>";
      h += ` <button class="at-speak-btn" onclick="speak('` + esc(f.example).replace(/'/g, "\\'") + `')">🔊</button></div>`;
    });
  }
  res.innerHTML = h;
}
function closeExampleGen() {
  _clOv("exgen-overlay");
}
var _BOT_RESPONSES = {
  "こんにちは": "こんにちは！お元気ですか？ (Chào! Bạn khỏe không?)",
  "おはよう": "おはようございます！今日もがんばりましょう！ (Chào buổi sáng! Hôm nay cũng cố gắng nhé!)",
  "ありがとう": "どういたしまして！(Không có gì!)",
  "すみません": "いいですよ。何か手伝いましょうか？ (Không sao. Tôi giúp gì được?)",
  "さようなら": "さようなら！また会いましょう！ (Tạm biệt! Hẹn gặp lại!)",
  "お名前は": "N4 Botです。よろしくお願いします！ (Tôi là N4 Bot. Rất vui được biết!)",
  "default": "すみません、よく分かりません。もう一度お願いします。 (Xin lỗi, tôi không hiểu rõ. Nói lại được không?)"
};
function openChatbot() {
  var ol = _ov("chatbot-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>💬 Chatbot</h3><span class="mg-close" onclick="closeChatbot()">✕</span></div>';
  h += '<div class="ai-chat" id="bot-chat"><div class="ai-msg bot">🤖 こんにちは！日本語で話しましょう！<br>(Chào! Hãy nói tiếng Nhật nhé!)</div></div>';
  h += '<div class="ai-quick-replies">';
  ["こんにちは", "おはよう", "ありがとう", "すみません", "さようなら"].forEach(function(r) {
    h += `<button class="ai-quick-btn" onclick="botSend('` + r + `')">` + r + "</button>";
  });
  h += "</div>";
  h += '<div class="ai-input-row">';
  h += `<input class="pz-spt-input" id="bot-input" placeholder="日本語で入力..." onkeydown="if(event.key==='Enter')botSendInput()" />`;
  h += '<button class="st-btn primary" onclick="botSendInput()">送信</button>';
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function botSend(msg) {
  var chat = document.getElementById("bot-chat");
  if (!chat) return;
  chat.innerHTML += '<div class="ai-msg user">👤 ' + esc(msg) + "</div>";
  var response = _BOT_RESPONSES["default"];
  Object.keys(_BOT_RESPONSES).forEach(function(key) {
    if (key !== "default" && msg.indexOf(key) >= 0) response = _BOT_RESPONSES[key];
  });
  setTimeout(function() {
    chat.innerHTML += '<div class="ai-msg bot">🤖 ' + esc(response) + "</div>";
    chat.scrollTop = chat.scrollHeight;
  }, 500);
}
function botSendInput() {
  var inp = document.getElementById("bot-input");
  if (!inp || !inp.value.trim()) return;
  botSend(inp.value.trim());
  inp.value = "";
}
function closeChatbot() {
  _clOv("chatbot-overlay");
}
function openDailyRecommend() {
  var srs = getSRS();
  var bm = getBookmarks();
  var dueItems = [];
  Object.entries(srs).forEach(function(entry) {
    var key = entry[0], val = entry[1];
    if (val.nextReview && new Date(val.nextReview) <= /* @__PURE__ */ new Date()) dueItems.push(key);
  });
  var weakSections = [];
  S.vocab.forEach(function(sec) {
    var total = sec.entries.length;
    var bmCount = sec.entries.filter(function(e) {
      return bm["v_" + e.word];
    }).length;
    var pct = total > 0 ? Math.round(bmCount / total * 100) : 100;
    if (pct < 30) weakSections.push({ name: sec.name, pct });
  });
  weakSections.sort(function(a, b) {
    return a.pct - b.pct;
  });
  var vocab = _vocab();
  var randomWords = _pick(vocab, 5);
  var ol = _ov("dailyrec-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📅 Gợi ý hôm nay</h3><span class="mg-close" onclick="closeDailyRecommend()">✕</span></div>';
  h += '<div class="ai-rec-section"><h4>📝 SRS cần ôn: ' + dueItems.length + " mục</h4>";
  if (dueItems.length > 0) h += `<button class="st-btn primary" onclick="closeDailyRecommend();switchTab('games')">Ôn tập ngay →</button>`;
  else h += '<div class="at-tip">✅ Không có mục nào cần ôn!</div>';
  h += "</div>";
  h += '<div class="ai-rec-section"><h4>⚠️ Chủ đề yếu:</h4>';
  weakSections.slice(0, 3).forEach(function(s) {
    h += '<div class="an-detail-row"><span>' + esc(s.name) + "</span><span>" + s.pct + "%</span></div>";
  });
  h += "</div>";
  h += '<div class="ai-rec-section"><h4>🎲 Từ vựng ngẫu nhiên hôm nay:</h4>';
  randomWords.forEach(function(w) {
    h += '<div class="ai-rec-word"><b>' + esc(w.word) + "</b> — " + esc(w.meaning) + ` <button class="at-speak-btn" onclick="speak('` + esc(w.word).replace(/'/g, "\\'") + `')">🔊</button></div>`;
  });
  h += '<button class="st-btn" onclick="openDailyRecommend()" style="margin-top:8px;width:100%">🔄 Gợi ý mới</button>';
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeDailyRecommend() {
  _clOv("dailyrec-overlay");
}
function openGrammarCheck() {
  var ol = _ov("gramcheck-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>✏️ Grammar Check</h3><span class="mg-close" onclick="closeGrammarCheck()">✕</span></div>';
  h += '<div class="at-tip">Nhập câu tiếng Nhật để kiểm tra ngữ pháp</div>';
  h += '<textarea class="wr-essay-input" id="gc-input" rows="3" placeholder="日本語の文を入力してください..."></textarea>';
  h += '<button class="st-btn primary" onclick="gcCheck()" style="margin:8px auto;display:block">🔍 Kiểm tra</button>';
  h += '<div id="gc-result"></div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function gcCheck() {
  var inp = document.getElementById("gc-input");
  var res = document.getElementById("gc-result");
  if (!inp || !res) return;
  var text = inp.value.trim();
  if (!text) {
    showToast("Nhập câu");
    return;
  }
  var issues = [];
  var tips = [];
  if (text.match(/[a-zA-Z]/)) issues.push("⚠️ Có chữ Latin - hãy dùng tiếng Nhật");
  if (!text.match(/[。！？]$/)) tips.push("💡 Câu nên kết thúc bằng 。！ hoặc ？");
  if (text.match(/です.*です/)) issues.push("⚠️ Có vẻ lặp です quá nhiều");
  if (text.match(/は.*は/)) tips.push("💡 Nhiều は trong câu - kiểm tra chủ đề");
  var patterns = [];
  if (text.match(/ている|ています/)) patterns.push("～ている (đang làm)");
  if (text.match(/たら/)) patterns.push("～たら (nếu/khi)");
  if (text.match(/ければ|なければ/)) patterns.push("～ば (điều kiện)");
  if (text.match(/ようにする|ようになる/)) patterns.push("～ようにする/なる");
  if (text.match(/てもいい/)) patterns.push("～てもいい (được phép)");
  if (text.match(/なければならない|なきゃ/)) patterns.push("～なければならない (phải)");
  var h = '<div class="ai-gc-result">';
  if (issues.length > 0) {
    h += '<div class="ai-gc-issues"><h4>⚠️ Vấn đề:</h4>';
    issues.forEach(function(i) {
      h += "<div>" + esc(i) + "</div>";
    });
    h += "</div>";
  }
  if (tips.length > 0) {
    h += '<div class="ai-gc-tips"><h4>💡 Gợi ý:</h4>';
    tips.forEach(function(t) {
      h += "<div>" + esc(t) + "</div>";
    });
    h += "</div>";
  }
  if (patterns.length > 0) {
    h += '<div class="ai-gc-patterns"><h4>📖 Ngữ pháp N4 phát hiện:</h4>';
    patterns.forEach(function(p) {
      h += "<div>✅ " + p + "</div>";
    });
    h += "</div>";
  }
  if (issues.length === 0 && tips.length === 0) h += '<div class="mg-feedback correct">✅ Không phát hiện vấn đề rõ ràng!</div>';
  h += "</div>";
  res.innerHTML = h;
}
function closeGrammarCheck() {
  _clOv("gramcheck-overlay");
}
function openSmartReview() {
  var srs = getSRS();
  var vocab = _vocab();
  var items = [];
  vocab.forEach(function(v) {
    var key = "v_" + v.word;
    var box = srs[key] ? srs[key].level : 0;
    items.push({ word: v, box, priority: 5 - box });
  });
  items.sort(function(a, b) {
    return b.priority - a.priority;
  });
  var toReview = items.slice(0, 10);
  var idx = { val: 0 };
  _renderSmartReview(toReview, idx);
}
function _renderSmartReview(items, idx) {
  var ol = _ov("smartrev-overlay");
  if (idx.val >= items.length) {
    ol.innerHTML = '<div class="mg-container"><div class="mg-header"><h3>🧠 Smart Review</h3><span class="mg-close" onclick="closeSmartReview()">✕</span></div><div class="mg-result">🎉 Ôn xong!</div><button class="st-btn primary" onclick="openSmartReview()">🔄 Lại</button></div>';
    ol.classList.add("active");
    return;
  }
  var item = items[idx.val];
  var w = item.word;
  var h = '<div class="mg-container"><div class="mg-header"><h3>🧠 Smart Review</h3><span class="mg-close" onclick="closeSmartReview()">✕</span></div>';
  h += '<div class="mg-progress">' + (idx.val + 1) + "/" + items.length + " · Box " + item.box + "</div>";
  h += '<div class="at-word">' + esc(w.word) + "</div>";
  h += `<button class="st-btn" onclick="speak('` + esc(w.word).replace(/'/g, "\\'") + `')">🔊</button>`;
  h += '<div id="sr-answer" class="ai-sr-answer" style="display:none">';
  h += '<div class="at-meaning">' + esc(w.meaning) + "</div>";
  h += '<div class="at-reading">' + esc(w.reading || "") + "</div>";
  h += "</div>";
  h += `<button class="st-btn primary" id="sr-show" onclick="document.getElementById('sr-answer').style.display='block';document.getElementById('sr-show').style.display='none';document.getElementById('sr-btns').style.display='flex'">Hiện đáp án</button>`;
  h += '<div id="sr-btns" class="ai-sr-btns" style="display:none">';
  h += '<button class="st-btn" style="background:#e74c3c;color:white" onclick="srRate(0)">😟 Quên</button>';
  h += '<button class="st-btn" style="background:#f39c12;color:white" onclick="srRate(1)">🤔 Khó</button>';
  h += '<button class="st-btn" style="background:#27ae60;color:white" onclick="srRate(2)">😊 Nhớ</button>';
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
  window._srItems = items;
  window._srIdx = idx;
}
function srRate(rating) {
  window._srIdx.val++;
  _renderSmartReview(window._srItems, window._srIdx);
}
function closeSmartReview() {
  _clOv("smartrev-overlay");
}
var _MNEMONIC_DB = {
  "食べる": 'taberu → "ta bé rủ" → Ta (tôi) bé (nhỏ) rủ bạn đi ĂN',
  "飲む": 'nomu → "nô mù" → Uống nhiều quá thành nô lệ mù',
  "書く": 'kaku → "cá cù" → Cá cù nhau bằng bút → VIẾT',
  "読む": 'yomu → "yêu mù" → Yêu mù quáng nên ĐỌC sách',
  "聞く": 'kiku → "kick + cù" → Kick (đá) vào tai để NGHE',
  "見る": 'miru → "mi rủ" → Mi (mắt) rủ nhau NHÌN',
  "行く": 'iku → "í cù" → Bị cù nên phải ĐI nhanh',
  "来る": 'kuru → "cù rủ" → Cù rủ bạn ĐẾN chơi'
};
function openMnemonicAI() {
  var vocab = _vocab();
  var w = vocab[Math.floor(Math.random() * vocab.length)];
  var ol = _ov("mnemonic-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🧠 Mnemonic Generator</h3><span class="mg-close" onclick="closeMnemonicAI()">✕</span></div>';
  h += '<div class="at-word">' + esc(w.word) + "</div>";
  h += '<div class="at-reading">' + esc(w.reading || "") + "</div>";
  h += '<div class="at-meaning">' + esc(w.meaning) + "</div>";
  var mnemonic = _MNEMONIC_DB[w.word];
  if (!mnemonic && w.romaji) {
    mnemonic = 'Đọc "' + w.romaji + '" → Liên tưởng âm thanh với nghĩa "' + w.meaning + '". Hãy tạo hình ảnh sinh động trong đầu!';
  }
  h += '<div class="ai-mnemonic-card">';
  h += '<div class="ai-mnemonic-text">💡 ' + esc(mnemonic || "Hãy tự tạo liên tưởng cho từ này!") + "</div>";
  h += "</div>";
  h += '<div class="ai-mnemonic-custom">';
  h += '<textarea class="wr-essay-input" id="mn-custom" rows="2" placeholder="Viết mnemonic của bạn..."></textarea>';
  h += `<button class="st-btn" onclick="mnSave('` + esc(w.word).replace(/'/g, "\\'") + `')">💾 Lưu</button>`;
  h += "</div>";
  h += '<button class="st-btn primary" onclick="openMnemonicAI()" style="margin:8px auto;display:block">🔄 Từ mới</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function mnSave(word) {
  var inp = document.getElementById("mn-custom");
  if (!inp || !inp.value.trim()) return;
  var saved = {};
  try {
    saved = JSON.parse(safeGetItem("n4_mnemonics") || "{}");
  } catch (e) {
  }
  saved[word] = inp.value.trim();
  safeSetItem("n4_mnemonics", JSON.stringify(saved));
  showToast("Đã lưu mnemonic!");
}
function closeMnemonicAI() {
  _clOv("mnemonic-overlay");
}
function openTranslation() {
  var ol = _ov("translate-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🌐 Translation</h3><span class="mg-close" onclick="closeTranslation()">✕</span></div>';
  h += '<textarea class="wr-essay-input" id="tr-input" rows="3" placeholder="Nhập văn bản tiếng Nhật..."></textarea>';
  h += '<button class="st-btn primary" onclick="trTranslate()" style="margin:8px auto;display:block">🔍 Dịch từng từ</button>';
  h += '<div id="tr-result"></div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function trTranslate() {
  var inp = document.getElementById("tr-input");
  var res = document.getElementById("tr-result");
  if (!inp || !res) return;
  var text = inp.value.trim();
  if (!text) return;
  var vocab = _vocab();
  var dict = {};
  vocab.forEach(function(v) {
    dict[v.word] = v.meaning;
    if (v.reading) dict[v.reading] = v.meaning;
  });
  var found = [];
  Object.keys(dict).sort(function(a, b) {
    return b.length - a.length;
  }).forEach(function(word) {
    if (text.indexOf(word) >= 0) found.push({ word, meaning: dict[word] });
  });
  var h = '<div class="ai-tr-result"><h4>📖 Từ tìm thấy:</h4>';
  if (found.length > 0) {
    found.forEach(function(f) {
      h += '<div class="ai-tr-word"><b>' + esc(f.word) + "</b> → " + esc(f.meaning) + "</div>";
    });
  } else {
    h += '<div class="at-tip">Không tìm thấy từ N4 nào trong văn bản</div>';
  }
  h += "</div>";
  res.innerHTML = h;
}
function closeTranslation() {
  _clOv("translate-overlay");
}
function openQuizGen() {
  var ol = _ov("quizgen-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🎲 Quiz Generator</h3><span class="mg-close" onclick="closeQuizGen()">✕</span></div>';
  h += '<div class="ai-qg-settings">';
  h += '<label>Số câu: <select id="qg-count"><option value="5">5</option><option value="10" selected>10</option><option value="20">20</option></select></label>';
  h += '<label>Loại: <select id="qg-type"><option value="meaning">JP→VN</option><option value="reading">Kanji→Reading</option><option value="reverse">VN→JP</option></select></label>';
  h += "</div>";
  h += '<button class="st-btn primary" onclick="qgStart()">▶ Bắt đầu Quiz</button>';
  h += '<div id="qg-area"></div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function qgStart() {
  var count = parseInt(document.getElementById("qg-count").value) || 10;
  var type = document.getElementById("qg-type").value;
  var vocab = _vocab();
  var questions = _pick(vocab, count);
  var state = { qs: questions, idx: 0, score: 0, type };
  window._qgState = state;
  _renderQuiz();
}
function _renderQuiz() {
  var area = document.getElementById("qg-area");
  if (!area) return;
  var st = window._qgState;
  if (st.idx >= st.qs.length) {
    area.innerHTML = '<div class="mg-result">Kết quả: ' + st.score + "/" + st.qs.length + '</div><button class="st-btn primary" onclick="qgStart()">🔄 Quiz mới</button>';
    return;
  }
  var q = st.qs[st.idx];
  var prompt = st.type === "meaning" ? q.word : st.type === "reading" ? q.word : q.meaning;
  var answer = st.type === "meaning" ? q.meaning : st.type === "reading" ? q.reading || q.word : q.word;
  var pool = _vocab().filter(function(v) {
    return v.word !== q.word;
  });
  var choices = _pick(pool, 3).map(function(v) {
    return st.type === "meaning" ? v.meaning : st.type === "reading" ? v.reading || v.word : v.word;
  });
  choices = choices.filter(function(c) {
    return c !== answer;
  });
  while (choices.length < 3 && pool.length > 0) {
    var extra = pool[Math.floor(Math.random() * pool.length)];
    var val = st.type === "meaning" ? extra.meaning : st.type === "reading" ? extra.reading || extra.word : extra.word;
    if (choices.indexOf(val) < 0 && val !== answer) choices.push(val);
    pool = pool.filter(function(v) {
      return v !== extra;
    });
  }
  choices.push(answer);
  choices = shuffleArray(choices);
  var h = '<div class="mg-progress">' + (st.idx + 1) + "/" + st.qs.length + " · ✅ " + st.score + "</div>";
  h += '<div class="at-word">' + esc(prompt) + "</div>";
  h += '<div class="mg-choices">';
  choices.forEach(function(ch) {
    h += `<button class="mg-choice-btn" onclick="qgAnswer('` + esc(ch).replace(/'/g, "\\'") + "','" + esc(answer).replace(/'/g, "\\'") + `')">` + esc(ch) + "</button>";
  });
  h += '</div><div id="qg-fb"></div>';
  area.innerHTML = h;
}
function qgAnswer(selected, correct) {
  var st = window._qgState;
  if (selected === correct) {
    st.score++;
  }
  st.idx++;
  setTimeout(_renderQuiz, 400);
}
function closeQuizGen() {
  _clOv("quizgen-overlay");
}
function openTextAnalyzer() {
  var ol = _ov("textanalyzer-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📊 Text Analyzer</h3><span class="mg-close" onclick="closeTextAnalyzer()">✕</span></div>';
  h += '<textarea class="wr-essay-input" id="ta-input" rows="4" placeholder="Dán văn bản tiếng Nhật..."></textarea>';
  h += '<button class="st-btn primary" onclick="taAnalyze()" style="margin:8px auto;display:block">🔍 Phân tích</button>';
  h += '<div id="ta-result"></div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function taAnalyze() {
  var inp = document.getElementById("ta-input");
  var res = document.getElementById("ta-result");
  if (!inp || !res) return;
  var text = inp.value.trim();
  if (!text) return;
  var hiragana = (text.match(/[ぁ-ん]/g) || []).length;
  var katakana = (text.match(/[\u30A0-\u30FF]/g) || []).length;
  var kanji = (text.match(/[\u4E00-\u9FFF]/g) || []).length;
  var latin = (text.match(/[a-zA-Z]/g) || []).length;
  var total = text.length;
  var sentences = text.split(/[。！？]/).filter(function(s) {
    return s.trim();
  }).length;
  var vocab = _vocab();
  var n4Found = 0;
  vocab.forEach(function(v) {
    if (v.word && text.indexOf(v.word) >= 0) n4Found++;
  });
  var h = '<div class="ai-ta-result">';
  h += "<h4>📊 Kết quả phân tích:</h4>";
  h += '<div class="an-detail-row"><span>Tổng ký tự</span><span>' + total + "</span></div>";
  h += '<div class="an-detail-row"><span>ひらがな</span><span>' + hiragana + " (" + Math.round(hiragana / total * 100) + "%)</span></div>";
  h += '<div class="an-detail-row"><span>カタカナ</span><span>' + katakana + " (" + Math.round(katakana / total * 100) + "%)</span></div>";
  h += '<div class="an-detail-row"><span>漢字</span><span>' + kanji + " (" + Math.round(kanji / total * 100) + "%)</span></div>";
  h += '<div class="an-detail-row"><span>Latin</span><span>' + latin + "</span></div>";
  h += '<div class="an-detail-row"><span>Số câu</span><span>~' + sentences + "</span></div>";
  h += '<div class="an-detail-row"><span>Từ N4 tìm thấy</span><span>' + n4Found + "</span></div>";
  h += '<div class="at-tip">' + (kanji / total > 0.3 ? "📖 Nhiều kanji - level cao!" : kanji / total > 0.1 ? "👍 Mức N4 phù hợp" : "💡 Ít kanji - thử thêm!") + "</div>";
  h += "</div>";
  res.innerHTML = h;
}
function closeTextAnalyzer() {
  _clOv("textanalyzer-overlay");
}
export {
  botSend,
  botSendInput,
  closeAITutor,
  closeChatbot,
  closeDailyRecommend,
  closeExampleGen,
  closeGrammarCheck,
  closeMnemonicAI,
  closeQuizGen,
  closeSmartReview,
  closeTextAnalyzer,
  closeTranslation,
  exgenSearch,
  gcCheck,
  mnSave,
  openAITutor,
  openChatbot,
  openDailyRecommend,
  openExampleGen,
  openGrammarCheck,
  openMnemonicAI,
  openQuizGen,
  openSmartReview,
  openTextAnalyzer,
  openTranslation,
  qgAnswer,
  qgStart,
  srRate,
  taAnalyze,
  trTranslate,
  tutorAsk,
  tutorFreeAsk
};
