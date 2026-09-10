import { w as worldOverlayMount } from "./legacy-loader-gyvSYPc3.js";
import { ai as S, ao as esc, ap as shuffleArray } from "./index-BEJSIlFS.js";
/* empty css               */
import "./vendor-runtime-BbOs9S9B.js";
import "./world-tool-destinations-BAVvWbat.js";
import "./vendor-react-BUL8WuXG.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
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
var _N5_CORE = [
  { word: "わたし", meaning: "tôi", example: "わたしは学生です。" },
  { word: "あなた", meaning: "bạn", example: "あなたのなまえは？" },
  { word: "これ", meaning: "cái này", example: "これはペンです。" },
  { word: "それ", meaning: "cái đó", example: "それは何ですか？" },
  { word: "ある", meaning: "có (vật)", example: "本があります。" },
  { word: "いる", meaning: "có (sinh vật)", example: "猫がいます。" },
  { word: "たべる", meaning: "ăn", example: "ごはんをたべます。" },
  { word: "のむ", meaning: "uống", example: "おちゃをのみます。" },
  { word: "いく", meaning: "đi", example: "学校にいきます。" },
  { word: "くる", meaning: "đến", example: "ともだちがきます。" },
  { word: "おおきい", meaning: "to, lớn", example: "おおきいいえ。" },
  { word: "ちいさい", meaning: "nhỏ, bé", example: "ちいさいねこ。" }
];
function openN5Review() {
  var ol = _ov("n5review-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📖 N5 Review</h3><span class="mg-close" onclick="closeN5Review()">✕</span></div>';
  h += '<div class="at-tip">Ôn lại từ vựng N5 cơ bản</div>';
  h += '<div class="ct-word-list">';
  _N5_CORE.forEach(function(w) {
    h += '<div class="ct-word-card"><div class="ct-word-main"><b>' + esc(w.word) + "</b> — " + esc(w.meaning);
    h += ` <button class="at-speak-btn" onclick="speak('` + esc(w.word).replace(/'/g, "\\'") + `')">🔊</button></div>`;
    h += '<div class="ct-example">' + esc(w.example) + "</div></div>";
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeN5Review() {
  _clOv("n5review-overlay");
}
var _TRANS_INTRANS_N4 = [
  { trans: "開ける (あける)", intrans: "開く (あく)", meaning: "Mở (cửa...)" },
  { trans: "閉める (しめる)", intrans: "閉まる (しまる)", meaning: "Đóng (cửa...)" },
  { trans: "つける (つける)", intrans: "つく (つく)", meaning: "Bật (đèn, điện...)" },
  { trans: "消す (けす)", intrans: "消える (きえる)", meaning: "Tắt, dập (lửa, điện...)" },
  { trans: "入れる (いれる)", intrans: "入る (はいる)", meaning: "Cho vào / Đi vào" },
  { trans: "出す (だす)", intrans: "出る (でる)", meaning: "Lấy ra / Đi ra" },
  { trans: "壊す (こわす)", intrans: "壊れる (こわれる)", meaning: "Hỏng / Làm hỏng" },
  { trans: "落とす (おとす)", intrans: "落ちる (おちる)", meaning: "Rơi / Đánh rơi" },
  { trans: "始める (はじめる)", intrans: "始まる (はじまる)", meaning: "Bắt đầu" },
  { trans: "起こす (おこす)", intrans: "起きる (おきる)", meaning: "Thức dậy / Đánh thức" }
];
function openTransIntrans() {
  var ol = _ov("transintrans-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🔄 Tự/Tha động từ N4</h3><span class="mg-close" onclick="closeTransIntrans()">✕</span></div>';
  h += '<div class="at-tip">Cặp động từ Tự động từ (Intransitive) và Tha động từ (Transitive) quan trọng trong N4</div>';
  h += '<table class="ct-keigo-table"><thead><tr><th>Tha động từ (Tác động)</th><th>Tự động từ (Trạng thái)</th><th>Ý nghĩa</th></tr></thead><tbody>';
  _TRANS_INTRANS_N4.forEach(function(p) {
    h += "<tr>";
    h += "<td>" + esc(p.trans) + ` <button class="at-speak-btn" onclick="speak('` + esc(p.trans.split(" ")[0]).replace(/'/g, "\\'") + `')">🔊</button></td>`;
    h += "<td>" + esc(p.intrans) + ` <button class="at-speak-btn" onclick="speak('` + esc(p.intrans.split(" ")[0]).replace(/'/g, "\\'") + `')">🔊</button></td>`;
    h += "<td>" + esc(p.meaning) + "</td>";
    h += "</tr>";
  });
  h += "</tbody></table>";
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeTransIntrans() {
  _clOv("transintrans-overlay");
}
function openAudioExamples() {
  var vocab = [];
  S.vocab.forEach(function(s) {
    s.entries.forEach(function(e) {
      if (e.word && e.example) vocab.push(e);
    });
  });
  var items = shuffleArray([...vocab]).slice(0, 15);
  var ol = _ov("audioex-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🎧 Audio Examples</h3><span class="mg-close" onclick="closeAudioExamples()">✕</span></div>';
  h += '<div class="at-tip">Nghe ví dụ với TTS</div>';
  h += '<button class="st-btn primary" onclick="playAllAudioEx()">▶️ Phát tất cả</button>';
  h += '<div class="ct-word-list" id="audioex-list">';
  items.forEach(function(e, i) {
    h += '<div class="ct-word-card"><b>' + esc(e.word) + "</b> — " + esc(e.meaning);
    h += '<div class="ct-example">' + esc(e.example) + "</div>";
    h += `<button class="at-speak-btn" onclick="speak('` + esc(e.example).replace(/'/g, "\\'") + `')">🔊</button></div>`;
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function playAllAudioEx() {
  var btns = document.querySelectorAll("#audioex-list .at-speak-btn");
  var i = 0;
  function next() {
    if (i < btns.length) {
      btns[i].click();
      i++;
      setTimeout(next, 3e3);
    }
  }
  next();
}
function closeAudioExamples() {
  _clOv("audioex-overlay");
}
function openOfflineDict() {
  var ol = _ov("offdict-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📕 Offline Dictionary</h3><span class="mg-close" onclick="closeOfflineDict()">✕</span></div>';
  h += '<input class="pz-spt-input" id="dict-input" placeholder="Tìm từ (JP/VN)..." oninput="dictSearch()" />';
  h += '<div id="dict-results" class="ct-word-list"></div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
  document.getElementById("dict-input").focus();
}
function dictSearch() {
  var q = (document.getElementById("dict-input").value || "").trim().toLowerCase();
  var res = document.getElementById("dict-results");
  if (!res || q.length < 1) {
    if (res) res.innerHTML = "";
    return;
  }
  var found = [];
  S.vocab.forEach(function(s) {
    s.entries.forEach(function(e) {
      if (e.word && e.word.toLowerCase().indexOf(q) >= 0 || e.reading && e.reading.toLowerCase().indexOf(q) >= 0 || e.meaning && e.meaning.toLowerCase().indexOf(q) >= 0 || e.romaji && e.romaji.toLowerCase().indexOf(q) >= 0) {
        found.push(e);
      }
    });
  });
  S.kanji.forEach(function(s) {
    s.entries.forEach(function(e) {
      if (e.kanji && e.kanji.indexOf(q) >= 0 || e.meaning && e.meaning.toLowerCase().indexOf(q) >= 0) {
        found.push({ word: e.kanji, reading: e.on, meaning: e.meaning, example: e.compounds });
      }
    });
  });
  var h = "";
  found.slice(0, 20).forEach(function(f) {
    h += '<div class="ct-word-card"><b>' + esc(f.word) + "</b>";
    if (f.reading) h += " (" + esc(f.reading) + ")";
    h += " — " + esc(f.meaning);
    h += ` <button class="at-speak-btn" onclick="speak('` + esc(f.word).replace(/'/g, "\\'") + `')">🔊</button>`;
    if (f.example) h += '<div class="ct-example">' + esc(f.example) + "</div>";
    h += "</div>";
  });
  if (found.length === 0) h = '<div class="at-tip">Không tìm thấy</div>';
  else if (found.length > 20) h += '<div class="at-tip">... và ' + (found.length - 20) + " kết quả nữa</div>";
  res.innerHTML = h;
}
function closeOfflineDict() {
  _clOv("offdict-overlay");
}
var _VOCAB_IMAGES = [
  { word: "猫", emoji: "🐱", desc: "Con mèo — ねこ" },
  { word: "犬", emoji: "🐕", desc: "Con chó — いぬ" },
  { word: "花", emoji: "🌸", desc: "Hoa — はな" },
  { word: "山", emoji: "🏔️", desc: "Núi — やま" },
  { word: "海", emoji: "🌊", desc: "Biển — うみ" },
  { word: "車", emoji: "🚗", desc: "Xe hơi — くるま" },
  { word: "電車", emoji: "🚃", desc: "Tàu điện — でんしゃ" },
  { word: "雨", emoji: "🌧️", desc: "Mưa — あめ" },
  { word: "雪", emoji: "❄️", desc: "Tuyết — ゆき" },
  { word: "太陽", emoji: "☀️", desc: "Mặt trời — たいよう" },
  { word: "月", emoji: "🌙", desc: "Mặt trăng — つき" },
  { word: "木", emoji: "🌳", desc: "Cây — き" }
];
function openVocabImages() {
  var ol = _ov("vocabimg-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🖼️ Vocab Visual</h3><span class="mg-close" onclick="closeVocabImages()">✕</span></div>';
  h += '<div class="ct-img-grid">';
  _VOCAB_IMAGES.forEach(function(v) {
    h += `<div class="ct-img-card" onclick="speak('` + esc(v.word).replace(/'/g, "\\'") + `')">`;
    h += '<div class="ct-img-emoji">' + v.emoji + "</div>";
    h += '<div class="ct-img-word">' + esc(v.word) + "</div>";
    h += '<div class="ct-img-desc">' + esc(v.desc) + "</div>";
    h += "</div>";
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeVocabImages() {
  _clOv("vocabimg-overlay");
}
var _PROVERBS = [
  { jp: "七転び八起き", reading: "ななころびやおき", meaning: "Ngã 7 lần đứng 8 lần", lesson: "Kiên trì không bỏ cuộc" },
  { jp: "猿も木から落ちる", reading: "さるもきからおちる", meaning: "Khỉ cũng rơi từ cây", lesson: "Ai cũng có lúc sai" },
  { jp: "花より団子", reading: "はなよりだんご", meaning: "Bánh hơn là hoa", lesson: "Thực tế hơn vẻ đẹp" },
  { jp: "石の上にも三年", reading: "いしのうえにもさんねん", meaning: "Ngồi trên đá 3 năm", lesson: "Kiên nhẫn sẽ thành công" },
  { jp: "早起きは三文の徳", reading: "はやおきはさんもんのとく", meaning: "Dậy sớm có lợi", lesson: 'Giống "Con chim dậy sớm bắt được sâu"' },
  { jp: "百聞は一見に如かず", reading: "ひゃくぶんはいっけんにしかず", meaning: "Trăm nghe không bằng một thấy", lesson: "Nhìn tận mắt mới tin" },
  { jp: "出る杭は打たれる", reading: "でるくいはうたれる", meaning: "Cọc nhô ra bị đóng", lesson: "Nổi bật dễ bị chỉ trích" },
  { jp: "井の中の蛙大海を知らず", reading: "いのなかのかわずたいかいをしらず", meaning: "Ếch ngồi đáy giếng", lesson: "Hiểu biết hạn hẹp" }
];
function openProverbs() {
  var ol = _ov("proverbs-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🏮 Tục ngữ Nhật</h3><span class="mg-close" onclick="closeProverbs()">✕</span></div>';
  h += '<div class="ct-word-list">';
  _PROVERBS.forEach(function(p) {
    h += '<div class="ct-proverb-card">';
    h += '<div class="ct-proverb-jp">' + esc(p.jp) + ` <button class="at-speak-btn" onclick="speak('` + esc(p.jp).replace(/'/g, "\\'") + `')">🔊</button></div>`;
    h += '<div class="ct-proverb-reading">' + esc(p.reading) + "</div>";
    h += '<div class="ct-proverb-meaning">🇻🇳 ' + esc(p.meaning) + "</div>";
    h += '<div class="ct-proverb-lesson">💡 ' + esc(p.lesson) + "</div>";
    h += "</div>";
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeProverbs() {
  _clOv("proverbs-overlay");
}
var _ANIME_SENTENCES = [
  { jp: "あきらめないで！", romaji: "akiramenaide!", meaning: "Đừng bỏ cuộc!", source: "Common anime" },
  { jp: "がんばれ！", romaji: "ganbare!", meaning: "Cố lên!", source: "Sports anime" },
  { jp: "すごい！", romaji: "sugoi!", meaning: "Tuyệt vời!", source: "Common" },
  { jp: "やった！", romaji: "yatta!", meaning: "Được rồi! Thắng rồi!", source: "Common" },
  { jp: "信じている", romaji: "shinjite iru", meaning: "Tôi tin tưởng", source: "Drama" },
  { jp: "まだまだだね", romaji: "mada mada da ne", meaning: "Vẫn còn non lắm", source: "Prince of Tennis" },
  { jp: "俺は海賊王になる", romaji: "ore wa kaizoku-ou ni naru", meaning: "Ta sẽ thành Vua Hải Tặc", source: "One Piece" },
  { jp: "逃げちゃダメだ", romaji: "nigecha dame da", meaning: "Không được chạy trốn", source: "Evangelion" },
  { jp: "なんだと？", romaji: "nan da to?", meaning: "Cái gì cơ?!", source: "Shonen" },
  { jp: "友達になろう", romaji: "tomodachi ni narou", meaning: "Hãy làm bạn nhé", source: "Slice of life" }
];
function openAnimeSentences() {
  var ol = _ov("anime-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🎌 Anime Sentences</h3><span class="mg-close" onclick="closeAnimeSentences()">✕</span></div>';
  h += '<div class="ct-word-list">';
  _ANIME_SENTENCES.forEach(function(s) {
    h += '<div class="ct-anime-card">';
    h += '<div class="ct-anime-jp">' + esc(s.jp) + ` <button class="at-speak-btn" onclick="speak('` + esc(s.jp).replace(/'/g, "\\'") + `')">🔊</button></div>`;
    h += '<div class="ct-anime-romaji">' + esc(s.romaji) + "</div>";
    h += '<div class="ct-anime-meaning">🇻🇳 ' + esc(s.meaning) + "</div>";
    h += '<div class="ct-anime-source">📺 ' + esc(s.source) + "</div>";
    h += "</div>";
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeAnimeSentences() {
  _clOv("anime-overlay");
}
var _KATAKANA_WORDS = [
  { kata: "コンピューター", meaning: "máy tính (computer)" },
  { kata: "テレビ", meaning: "tivi (television)" },
  { kata: "アルバイト", meaning: "làm thêm (arbeit)" },
  { kata: "パソコン", meaning: "máy tính cá nhân (personal computer)" },
  { kata: "レストラン", meaning: "nhà hàng (restaurant)" },
  { kata: "スーパー", meaning: "siêu thị (supermarket)" },
  { kata: "エレベーター", meaning: "thang máy (elevator)" },
  { kata: "インターネット", meaning: "internet" },
  { kata: "ボランティア", meaning: "tình nguyện (volunteer)" },
  { kata: "アパート", meaning: "căn hộ (apartment)" },
  { kata: "サラリーマン", meaning: "nhân viên công ty (salary man)" },
  { kata: "コンビニ", meaning: "cửa hàng tiện lợi (convenience)" }
];
function openKatakanaDeep() {
  var ol = _ov("katadeep-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🔤 Katakana Deep</h3><span class="mg-close" onclick="closeKatakanaDeep()">✕</span></div>';
  h += '<div class="ct-word-list">';
  _KATAKANA_WORDS.forEach(function(w) {
    h += '<div class="ct-word-card"><b class="ct-kata">' + esc(w.kata) + "</b> — " + esc(w.meaning);
    h += ` <button class="at-speak-btn" onclick="speak('` + esc(w.kata).replace(/'/g, "\\'") + `')">🔊</button></div>`;
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeKatakanaDeep() {
  _clOv("katadeep-overlay");
}
var _KEIGO = [
  { casual: "いく", polite: "いきます", honorific: "いらっしゃる", meaning: "đi" },
  { casual: "くる", polite: "きます", honorific: "いらっしゃる", meaning: "đến" },
  { casual: "たべる", polite: "たべます", honorific: "めしあがる", meaning: "ăn" },
  { casual: "いる", polite: "います", honorific: "いらっしゃる", meaning: "ở" },
  { casual: "いう", polite: "いいます", honorific: "おっしゃる", meaning: "nói" },
  { casual: "みる", polite: "みます", honorific: "ごらんになる", meaning: "xem" },
  { casual: "する", polite: "します", honorific: "なさる", meaning: "làm" },
  { casual: "くれる", polite: "くれます", honorific: "くださる", meaning: "cho (tôi)" },
  { casual: "しる", polite: "しっています", honorific: "ごぞんじ", meaning: "biết" }
];
function openKeigoBasics() {
  var ol = _ov("keigo-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🎩 Keigo Basics</h3><span class="mg-close" onclick="closeKeigoBasics()">✕</span></div>';
  h += '<div class="at-tip">Kính ngữ cơ bản — 3 cấp độ</div>';
  h += '<table class="ct-keigo-table"><thead><tr><th>Thường</th><th>Lịch sự</th><th>Kính ngữ</th><th>Nghĩa</th></tr></thead><tbody>';
  _KEIGO.forEach(function(k) {
    h += "<tr><td>" + esc(k.casual) + "</td><td>" + esc(k.polite) + "</td><td>" + esc(k.honorific) + "</td><td>" + esc(k.meaning) + "</td></tr>";
  });
  h += "</tbody></table>";
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeKeigoBasics() {
  _clOv("keigo-overlay");
}
var _TOPICS = [
  { name: "🏥 Bệnh viện", words: [
    { jp: "熱", meaning: "sốt", reading: "ねつ" },
    { jp: "薬", meaning: "thuốc", reading: "くすり" },
    { jp: "医者", meaning: "bác sĩ", reading: "いしゃ" },
    { jp: "病院", meaning: "bệnh viện", reading: "びょういん" }
  ] },
  { name: "🛒 Mua sắm", words: [
    { jp: "高い", meaning: "đắt", reading: "たかい" },
    { jp: "安い", meaning: "rẻ", reading: "やすい" },
    { jp: "お金", meaning: "tiền", reading: "おかね" },
    { jp: "レジ", meaning: "quầy tính tiền", reading: "" }
  ] },
  { name: "✈️ Du lịch", words: [
    { jp: "空港", meaning: "sân bay", reading: "くうこう" },
    { jp: "ホテル", meaning: "khách sạn", reading: "" },
    { jp: "地図", meaning: "bản đồ", reading: "ちず" },
    { jp: "切符", meaning: "vé", reading: "きっぷ" }
  ] }
];
function openTopicVocab() {
  var ol = _ov("topicvocab-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📚 Topic Vocabulary</h3><span class="mg-close" onclick="closeTopicVocab()">✕</span></div>';
  _TOPICS.forEach(function(topic) {
    h += '<div class="ct-topic-section"><h4>' + esc(topic.name) + "</h4>";
    topic.words.forEach(function(w) {
      h += '<div class="ct-word-card"><b>' + esc(w.jp) + "</b>";
      if (w.reading) h += " (" + esc(w.reading) + ")";
      h += " — " + esc(w.meaning);
      h += ` <button class="at-speak-btn" onclick="speak('` + esc(w.jp).replace(/'/g, "\\'") + `')">🔊</button></div>`;
    });
    h += "</div>";
  });
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeTopicVocab() {
  _clOv("topicvocab-overlay");
}
var _CULTURE = [
  { title: "🏯 Omotenashi (おもてなし)", text: "Tinh thần hiếu khách Nhật Bản — phục vụ tận tâm không đợi được yêu cầu. Từ nhà hàng đến cửa hàng tiện lợi, mọi nơi đều thể hiện omotenashi." },
  { title: "🎋 Tanabata (七夕)", text: "Lễ Thất Tịch Nhật (7/7): viết điều ước lên tanzaku (短冊) và treo lên cành tre. Tương tự Ngưu Lang Chức Nữ." },
  { title: "🍱 Obento (お弁当)", text: "Cơm hộp Nhật — không chỉ là đồ ăn mà còn là nghệ thuật. Bento của mẹ làm cho con mang đi học là biểu tượng tình yêu." },
  { title: "🚃 Manner (マナー)", text: "Trên tàu: không nói điện thoại, không ăn uống, nhường ghế priority seat. Luôn xếp hàng gọn gàng khi lên tàu." },
  { title: "🎌 Hanami (花見)", text: "Ngắm hoa anh đào (sakura) vào mùa xuân — một lễ hội không chính thức nhưng rất quan trọng. Mọi người picnic dưới tán hoa." }
];
function openCultureNotes() {
  var ol = _ov("culturenotes-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🏯 Culture Notes</h3><span class="mg-close" onclick="closeCultureNotes()">✕</span></div>';
  h += '<div class="ct-word-list">';
  _CULTURE.forEach(function(c) {
    h += '<div class="ct-culture-card"><h4>' + esc(c.title) + "</h4><p>" + esc(c.text) + "</p></div>";
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeCultureNotes() {
  _clOv("culturenotes-overlay");
}
var _TRAVEL = [
  { jp: "すみません、駅はどこですか？", meaning: "Xin lỗi, nhà ga ở đâu ạ?" },
  { jp: "これはいくらですか？", meaning: "Cái này bao nhiêu tiền?" },
  { jp: "メニューをお願いします", meaning: "Cho tôi xem menu" },
  { jp: "お会計お願いします", meaning: "Tính tiền ạ" },
  { jp: "トイレはどこですか？", meaning: "Nhà vệ sinh ở đâu?" },
  { jp: "助けてください", meaning: "Xin hãy giúp tôi" },
  { jp: "写真を撮ってもいいですか？", meaning: "Chụp ảnh được không?" },
  { jp: "Wi-Fiはありますか？", meaning: "Có WiFi không?" }
];
function openTravelPhrases() {
  var ol = _ov("travel-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>✈️ Travel Phrases</h3><span class="mg-close" onclick="closeTravelPhrases()">✕</span></div>';
  h += '<div class="ct-word-list">';
  _TRAVEL.forEach(function(t) {
    h += '<div class="ct-word-card"><div class="ct-travel-jp">' + esc(t.jp) + ` <button class="at-speak-btn" onclick="speak('` + esc(t.jp).replace(/'/g, "\\'") + `')">🔊</button></div>`;
    h += '<div class="ct-travel-vn">🇻🇳 ' + esc(t.meaning) + "</div></div>";
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeTravelPhrases() {
  _clOv("travel-overlay");
}
var _KANJI_HISTORY = [
  { kanji: "山", origin: "Hình ảnh 3 ngọn núi", period: "Oracle bone (甲骨文)" },
  { kanji: "水", origin: "Dòng nước chảy", period: "Bronze (金文)" },
  { kanji: "火", origin: "Ngọn lửa bốc cháy", period: "Oracle bone" },
  { kanji: "木", origin: "Cây có cành và rễ", period: "Oracle bone" },
  { kanji: "人", origin: "Người đứng nghiêng", period: "Oracle bone" },
  { kanji: "日", origin: "Mặt trời tròn có chấm", period: "Oracle bone" },
  { kanji: "月", origin: "Trăng lưỡi liềm", period: "Oracle bone" }
];
function openKanjiHistory() {
  var ol = _ov("kanjihistory-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📜 Kanji History</h3><span class="mg-close" onclick="closeKanjiHistory()">✕</span></div>';
  h += '<div class="at-tip">Nguồn gốc tượng hình của chữ Hán</div>';
  h += '<div class="ct-word-list">';
  _KANJI_HISTORY.forEach(function(k) {
    h += '<div class="ct-kanji-hist-card"><div class="ct-kanji-big">' + esc(k.kanji) + "</div>";
    h += "<div>📖 " + esc(k.origin) + "</div>";
    h += "<div>🕐 " + esc(k.period) + "</div></div>";
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeKanjiHistory() {
  _clOv("kanjihistory-overlay");
}
var _BIZ_KEIGO = [
  { casual: "わかりました", biz: "かしこまりました", meaning: "Tôi hiểu rồi ạ" },
  { casual: "すみません", biz: "おそれいります", meaning: "Xin lỗi (rất lịch sự)" },
  { casual: "ちょっと待って", biz: "少々お待ちください", meaning: "Xin đợi một chút" },
  { casual: "だれですか", biz: "どちら様ですか", meaning: "Quý khách là ai ạ?" },
  { casual: "ごめん", biz: "申し訳ございません", meaning: "Xin thành thật xin lỗi" },
  { casual: "いいですよ", biz: "もちろんでございます", meaning: "Dĩ nhiên ạ" }
];
function openBizKeigo() {
  var ol = _ov("bizkeigo-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>💼 Business Keigo</h3><span class="mg-close" onclick="closeBizKeigo()">✕</span></div>';
  h += '<table class="ct-keigo-table"><thead><tr><th>Thường</th><th>Business</th><th>Nghĩa</th></tr></thead><tbody>';
  _BIZ_KEIGO.forEach(function(k) {
    h += "<tr><td>" + esc(k.casual) + "</td><td><b>" + esc(k.biz) + "</b></td><td>" + esc(k.meaning) + "</td></tr>";
  });
  h += "</tbody></table>";
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeBizKeigo() {
  _clOv("bizkeigo-overlay");
}
var _ANIME_VS_REAL = [
  { anime: "おれ", real: "わたし / ぼく", note: "おれ rất thô, chỉ dùng với bạn thân nam" },
  { anime: "おまえ", real: "あなた / ○○さん", note: "おまえ rất thô, tránh dùng ngoài đời" },
  { anime: "くそ！", real: "— (không dùng)", note: "Từ chửi, anime dùng nhiều nhưng thực tế tránh" },
  { anime: "なんだと？！", real: "えっ？/ 何ですか？", note: "Anime drama hóa, thực tế nhẹ nhàng hơn" },
  { anime: "～だぜ", real: "～ですよ", note: "だぜ = nam tính mạnh, thực tế ít dùng" },
  { anime: "うるさい！", real: "すみません、静かにしてください", note: "Anime: hét lên. Thực tế: nói lịch sự" }
];
function openAnimeVsReal() {
  var ol = _ov("animevs-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🎌 Anime vs Real</h3><span class="mg-close" onclick="closeAnimeVsReal()">✕</span></div>';
  h += '<div class="at-tip">⚠️ Tiếng Nhật trong anime ≠ tiếng Nhật thực tế!</div>';
  h += '<table class="ct-keigo-table"><thead><tr><th>Anime</th><th>Thực tế</th><th>Ghi chú</th></tr></thead><tbody>';
  _ANIME_VS_REAL.forEach(function(a) {
    h += '<tr><td class="ct-anime-cell">' + esc(a.anime) + "</td><td>" + esc(a.real) + "</td><td>" + esc(a.note) + "</td></tr>";
  });
  h += "</tbody></table>";
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeAnimeVsReal() {
  _clOv("animevs-overlay");
}
var _INTERVIEW = [
  { jp: "自己紹介をお願いします", meaning: "Xin hãy tự giới thiệu" },
  { jp: "志望動機は何ですか", meaning: "Lý do ứng tuyển là gì?" },
  { jp: "長所と短所を教えてください", meaning: "Cho biết ưu điểm và nhược điểm" },
  { jp: "いつから働けますか", meaning: "Khi nào có thể bắt đầu làm?" },
  { jp: "何か質問はありますか", meaning: "Bạn có câu hỏi gì không?" }
];
function openInterviewJP() {
  var ol = _ov("interview-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>💼 Interview Japanese</h3><span class="mg-close" onclick="closeInterviewJP()">✕</span></div>';
  h += '<div class="ct-word-list">';
  _INTERVIEW.forEach(function(q) {
    h += '<div class="ct-word-card"><div class="ct-travel-jp">' + esc(q.jp) + ` <button class="at-speak-btn" onclick="speak('` + esc(q.jp).replace(/'/g, "\\'") + `')">🔊</button></div>`;
    h += '<div class="ct-travel-vn">🇻🇳 ' + esc(q.meaning) + "</div></div>";
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeInterviewJP() {
  _clOv("interview-overlay");
}
var _ADDRESSES = [
  { jp: "東京都渋谷区神宮前1-2-3", reading: "とうきょうと しぶやく じんぐうまえ 1の2の3", explain: "Tokyo, quận Shibuya, Jingumae 1-2-3" },
  { jp: "大阪府大阪市北区梅田", reading: "おおさかふ おおさかし きたく うめだ", explain: "Osaka, quận Kita, Umeda" },
  { jp: "京都府京都市左京区", reading: "きょうとふ きょうとし さきょうく", explain: "Kyoto, quận Sakyo" }
];
function openAddressReading() {
  var ol = _ov("address-reading-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🏠 Address Reading</h3><span class="mg-close" onclick="closeAddressReading()">✕</span></div>';
  h += '<div class="at-tip">Cách đọc địa chỉ Nhật Bản</div>';
  h += '<div class="ct-word-list">';
  _ADDRESSES.forEach(function(a) {
    h += '<div class="ct-word-card"><div class="ct-address-jp">' + esc(a.jp) + "</div>";
    h += '<div class="ct-address-reading">📖 ' + esc(a.reading) + "</div>";
    h += '<div class="ct-travel-vn">🇻🇳 ' + esc(a.explain) + "</div>";
    h += `<button class="at-speak-btn" onclick="speak('` + esc(a.jp).replace(/'/g, "\\'") + `')">🔊</button></div>`;
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeAddressReading() {
  _clOv("address-reading-overlay");
}
var _COUNTERS = [
  { counter: "～つ", use: "Đồ vật chung", examples: "ひとつ、ふたつ、みっつ" },
  { counter: "～人", use: "Người", examples: "ひとり、ふたり、さんにん" },
  { counter: "～本", use: "Vật dài/tròn", examples: "いっぽん、にほん、さんぼん" },
  { counter: "～枚", use: "Vật phẳng", examples: "いちまい、にまい、さんまい" },
  { counter: "～台", use: "Máy/xe", examples: "いちだい、にだい、さんだい" },
  { counter: "～匹", use: "Động vật nhỏ", examples: "いっぴき、にひき、さんびき" },
  { counter: "～冊", use: "Sách/vở", examples: "いっさつ、にさつ、さんさつ" },
  { counter: "～杯", use: "Ly/cốc", examples: "いっぱい、にはい、さんばい" },
  { counter: "～階", use: "Tầng", examples: "いっかい、にかい、さんがい" },
  { counter: "～回", use: "Lần", examples: "いっかい、にかい、さんかい" }
];
function openCounterWords() {
  var ol = _ov("counter-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🔢 Counter Words</h3><span class="mg-close" onclick="closeCounterWords()">✕</span></div>';
  h += '<table class="ct-keigo-table"><thead><tr><th>Trợ số từ</th><th>Dùng cho</th><th>1, 2, 3</th></tr></thead><tbody>';
  _COUNTERS.forEach(function(c) {
    h += "<tr><td><b>" + esc(c.counter) + "</b></td><td>" + esc(c.use) + "</td><td>" + esc(c.examples) + "</td></tr>";
  });
  h += "</tbody></table>";
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeCounterWords() {
  _clOv("counter-overlay");
}
function openJLPTPrepTips() {
  var ol = _ov("jlptprep-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🎯 JLPT N4 Prep</h3><span class="mg-close" onclick="closeJLPTPrepTips()">✕</span></div>';
  h += '<div class="ct-word-list">';
  h += '<div class="ct-culture-card"><h4>📝 Cấu trúc đề thi</h4><p>Thời gian: 125 phút<br>• Ngôn ngữ kiến thức (語彙・文法): 25 phút<br>• Đọc hiểu (読解): 55 phút<br>• Nghe hiểu (聴解): 35 phút</p></div>';
  h += '<div class="ct-culture-card"><h4>🎯 Chiến lược</h4><p>1. Ôn từ vựng mỗi ngày (SRS)<br>2. Ngữ pháp: nắm 70 mẫu câu N4<br>3. Đọc: luyện passage ngắn<br>4. Nghe: shadowing 15p/ngày</p></div>';
  h += '<div class="ct-culture-card"><h4>📊 Điểm đậu</h4><p>Tổng: ≥90/180 (50%)<br>Mỗi phần: ≥19 điểm (không được để 0 phần nào)</p></div>';
  h += '<div class="ct-culture-card"><h4>⏰ Kế hoạch 3 tháng</h4><p>Tháng 1: Từ vựng + Kanji<br>Tháng 2: Ngữ pháp + Đọc<br>Tháng 3: Đề thi thử + Nghe</p></div>';
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeJLPTPrepTips() {
  _clOv("jlptprep-overlay");
}
var _HANVIET = [
  { kanji: "学", hanviet: "HỌC", meaning: "học", examples: "学生(がくせい) học sinh, 学校(がっこう) trường" },
  { kanji: "生", hanviet: "SINH / SANH", meaning: "sống, sinh ra", examples: "先生(せんせい) thầy cô, 生活(せいかつ) sinh hoạt" },
  { kanji: "日", hanviet: "NHẬT", meaning: "ngày, mặt trời", examples: "日本(にほん) Nhật Bản, 毎日(まいにち) mỗi ngày" },
  { kanji: "本", hanviet: "BẢN / BỔN", meaning: "gốc, sách", examples: "日本(にほん), 本(ほん) sách" },
  { kanji: "人", hanviet: "NHÂN", meaning: "người", examples: "日本人(にほんじん), 人々(ひとびと) mọi người" },
  { kanji: "大", hanviet: "ĐẠI", meaning: "to, lớn", examples: "大学(だいがく) đại học, 大きい(おおきい) to" },
  { kanji: "中", hanviet: "TRUNG", meaning: "trong, giữa", examples: "中国(ちゅうごく) Trung Quốc, 中(なか) bên trong" },
  { kanji: "国", hanviet: "QUỐC", meaning: "nước, quốc gia", examples: "国(くに) nước, 外国(がいこく) nước ngoài" },
  { kanji: "時", hanviet: "THỜ / THỜI", meaning: "thời gian, giờ", examples: "時間(じかん) thời gian, 時計(とけい) đồng hồ" },
  { kanji: "出", hanviet: "XUẤT", meaning: "ra, xuất", examples: "出る(でる) ra, 出口(でぐち) lối ra" },
  { kanji: "見", hanviet: "KIẾN", meaning: "thấy, nhìn", examples: "見る(みる) xem, 意見(いけん) ý kiến" },
  { kanji: "行", hanviet: "HÀNH / HÀNG", meaning: "đi, hành", examples: "行く(いく) đi, 旅行(りょこう) du lịch" }
];
function openHanVietDict() {
  var ol = _ov("hanviet-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🇻🇳 Hán-Việt Dictionary</h3><span class="mg-close" onclick="closeHanVietDict()">✕</span></div>';
  h += '<div class="at-tip">Liên hệ Hán-Việt giúp nhớ Kanji nhanh hơn!</div>';
  h += '<div class="ct-word-list">';
  _HANVIET.forEach(function(hv) {
    h += '<div class="ct-hanviet-card">';
    h += '<div class="ct-kanji-big">' + esc(hv.kanji) + "</div>";
    h += '<div class="ct-hv-reading"><b>' + esc(hv.hanviet) + "</b> — " + esc(hv.meaning) + "</div>";
    h += '<div class="ct-hv-examples">' + esc(hv.examples) + "</div>";
    h += "</div>";
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeHanVietDict() {
  _clOv("hanviet-overlay");
}
export {
  closeAddressReading,
  closeAnimeSentences,
  closeAnimeVsReal,
  closeAudioExamples,
  closeBizKeigo,
  closeCounterWords,
  closeCultureNotes,
  closeHanVietDict,
  closeInterviewJP,
  closeJLPTPrepTips,
  closeKanjiHistory,
  closeKatakanaDeep,
  closeKeigoBasics,
  closeN5Review,
  closeOfflineDict,
  closeProverbs,
  closeTopicVocab,
  closeTransIntrans,
  closeTravelPhrases,
  closeVocabImages,
  dictSearch,
  openAddressReading,
  openAnimeSentences,
  openAnimeVsReal,
  openAudioExamples,
  openBizKeigo,
  openCounterWords,
  openCultureNotes,
  openHanVietDict,
  openInterviewJP,
  openJLPTPrepTips,
  openKanjiHistory,
  openKatakanaDeep,
  openKeigoBasics,
  openN5Review,
  openOfflineDict,
  openProverbs,
  openTopicVocab,
  openTransIntrans,
  openTravelPhrases,
  openVocabImages,
  playAllAudioEx
};
