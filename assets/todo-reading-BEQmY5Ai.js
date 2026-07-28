import { cV as esc, cW as haptic, P as S } from "./feature-3d-ClP3ARU5.js";
import { s as showToast } from "./toast-CJdbqLP6.js";
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
var _GRADED_TEXTS = [
  {
    title: "わたしのいちにち",
    level: "初級",
    text: "まいにち、あさ七時におきます。かおをあらって、あさごはんをたべます。八時にうちをでます。でんしゃにのって、がっこうにいきます。ひるごはんはともだちとたべます。ごご五時にうちにかえります。ばんごはんをたべて、テレビをみます。十一時にねます。",
    vocab: ["まいにち=mỗi ngày", "おきます=thức dậy", "あらう=rửa", "でんしゃ=tàu điện", "かえります=về nhà"]
  },
  {
    title: "にほんのきせつ",
    level: "初級",
    text: "にほんには、はる、なつ、あき、ふゆの四つのきせつがあります。はるはさくらがきれいです。なつはあつくて、うみにいきます。あきはもみじがきれいです。ふゆはさむくて、ゆきがふります。わたしはあきがいちばんすきです。",
    vocab: ["きせつ=mùa", "さくら=hoa anh đào", "あつい=nóng", "もみじ=lá đỏ", "ゆき=tuyết"]
  },
  {
    title: "わたしのかぞく",
    level: "初級",
    text: "わたしのかぞくは五人です。ちちとはは、あにとあねとわたしです。ちちはかいしゃいんです。はははせんせいです。あにはだいがくせいで、あねはこうこうせいです。わたしたちはいっしょにすんでいます。",
    vocab: ["かぞく=gia đình", "かいしゃいん=nhân viên", "せんせい=giáo viên", "だいがくせい=sinh viên", "いっしょに=cùng nhau"]
  }
];
function openGradedReader() {
  var text = _GRADED_TEXTS[Math.floor(Math.random() * _GRADED_TEXTS.length)];
  var ol = _ov("graded-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📖 Graded Reader</h3><span class="mg-close" onclick="closeGradedReader()">✕</span></div>';
  h += '<div class="rd-level">Level: ' + esc(text.level) + "</div>";
  h += '<div class="rd-title">' + esc(text.title) + "</div>";
  h += '<div class="rd-text" id="gr-text">' + esc(text.text) + "</div>";
  h += `<button class="st-btn" onclick="speak(document.getElementById('gr-text').textContent)" style="margin:8px auto;display:block">🔊 Nghe toàn bài</button>`;
  h += '<div class="rd-vocab"><b>Từ vựng:</b><br>';
  text.vocab.forEach(function(v) {
    var parts = v.split("=");
    h += '<span class="rd-vocab-item">' + esc(parts[0]) + " = " + esc(parts[1]) + "</span>";
  });
  h += "</div>";
  h += '<button class="st-btn primary" onclick="openGradedReader()" style="margin:8px auto;display:block">🔄 Bài mới</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeGradedReader() {
  _clOv("graded-overlay");
}
function openNHKEasy() {
  var ol = _ov("nhk-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📰 NHK Easy News</h3><span class="mg-close" onclick="closeNHKEasy()">✕</span></div>';
  h += '<div class="at-tip">NHK News Web Easy cung cấp tin tức tiếng Nhật dễ đọc</div>';
  h += '<div class="rd-nhk-link">';
  h += '<a href="https://www3.nhk.or.jp/news/easy/" target="_blank" rel="noopener noreferrer" class="st-btn primary" style="display:inline-block;text-decoration:none">🔗 Mở NHK Easy News</a>';
  h += "</div>";
  h += '<div class="rd-nhk-tips"><h4>💡 Mẹo đọc NHK Easy:</h4>';
  h += "<ul><li>Đọc tiêu đề trước để nắm chủ đề</li>";
  h += "<li>Furigana (chữ nhỏ trên kanji) giúp đọc kanji mới</li>";
  h += "<li>Nhấn vào từ có gạch để xem nghĩa</li>";
  h += "<li>Đọc mỗi ngày 1 bài để tăng tốc độ đọc</li></ul></div>";
  h += '<div class="rd-practice">';
  h += "<h4>📝 Bài tập mẫu:</h4>";
  h += '<div class="rd-text">きょうの東京の天気はくもりです。気温は15度ぐらいです。あしたは雨がふるかもしれません。かさをもっていってください。</div>';
  h += `<button class="st-btn" onclick="speak('きょうの東京の天気はくもりです。気温は15度ぐらいです。')">🔊 Nghe</button>`;
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeNHKEasy() {
  _clOv("nhk-overlay");
}
var _MANGA_PANELS = [
  { panels: [
    { speaker: "A", text: "おはよう！今日はいい天気だね。", vi: "Chào buổi sáng! Thời tiết đẹp nhỉ." },
    { speaker: "B", text: "うん、どこかに行かない？", vi: "Ừ, đi đâu đó không?" },
    { speaker: "A", text: "公園はどう？", vi: "Công viên thì sao?" },
    { speaker: "B", text: "いいね！行こう！", vi: "Hay đấy! Đi nào!" }
  ] },
  { panels: [
    { speaker: "Teacher", text: "はい、テストを始めます。", vi: "Nào, bắt đầu kiểm tra." },
    { speaker: "Student", text: "えー！聞いてないよ！", vi: "Hả! Em không nghe thấy!" },
    { speaker: "Teacher", text: "先週言いましたよ。", vi: "Tuần trước tôi đã nói rồi." },
    { speaker: "Student", text: "がんばります...", vi: "Em sẽ cố gắng..." }
  ] }
];
function openMangaReader() {
  var manga = _MANGA_PANELS[Math.floor(Math.random() * _MANGA_PANELS.length)];
  var ol = _ov("manga-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📕 Manga Reader</h3><span class="mg-close" onclick="closeMangaReader()">✕</span></div>';
  h += '<div class="rd-manga-panels">';
  manga.panels.forEach(function(p, i) {
    var isRight = i % 2 === 1;
    h += '<div class="rd-manga-panel ' + (isRight ? "right" : "left") + '">';
    h += '<div class="rd-manga-speaker">' + esc(p.speaker) + "</div>";
    h += '<div class="rd-manga-bubble">';
    h += '<div class="rd-manga-jp">' + esc(p.text) + "</div>";
    h += '<div class="rd-manga-vi">' + esc(p.vi) + "</div>";
    h += "</div>";
    h += `<button class="at-speak-btn" onclick="speak('` + esc(p.text).replace(/'/g, "\\'") + `')">🔊</button>`;
    h += "</div>";
  });
  h += "</div>";
  h += '<button class="st-btn primary" onclick="openMangaReader()" style="margin:12px auto;display:block">🔄 Đoạn mới</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeMangaReader() {
  _clOv("manga-overlay");
}
var _MENU_ITEMS = [
  { jp: "ラーメン", reading: "rāmen", price: "800円", vi: "Mì ramen", cat: "めん" },
  { jp: "カレーライス", reading: "karē raisu", price: "750円", vi: "Cơm cà ri", cat: "ごはん" },
  { jp: "天ぷら定食", reading: "tenpura teishoku", price: "1200円", vi: "Set tempura", cat: "ごはん" },
  { jp: "お茶", reading: "ocha", price: "200円", vi: "Trà", cat: "のみもの" },
  { jp: "ビール", reading: "bīru", price: "500円", vi: "Bia", cat: "のみもの" },
  { jp: "焼き魚定食", reading: "yakizakana teishoku", price: "900円", vi: "Set cá nướng", cat: "ごはん" },
  { jp: "うどん", reading: "udon", price: "650円", vi: "Mì udon", cat: "めん" },
  { jp: "から揚げ", reading: "karaage", price: "600円", vi: "Gà rán", cat: "おかず" },
  { jp: "味噌汁", reading: "misoshiru", price: "150円", vi: "Súp miso", cat: "おかず" },
  { jp: "アイスクリーム", reading: "aisu kurīmu", price: "350円", vi: "Kem", cat: "デザート" }
];
function openMenuReading() {
  var ol = _ov("menu-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🍽 Menu Reading</h3><span class="mg-close" onclick="closeMenuReading()">✕</span></div>';
  h += '<div class="rd-menu-title">📋 メニュー (Menu)</div>';
  var cats = {};
  _MENU_ITEMS.forEach(function(item) {
    if (!cats[item.cat]) cats[item.cat] = [];
    cats[item.cat].push(item);
  });
  Object.keys(cats).forEach(function(cat) {
    h += '<div class="rd-menu-cat">' + esc(cat) + "</div>";
    cats[cat].forEach(function(item) {
      h += '<div class="rd-menu-item">';
      h += '<div class="rd-menu-jp">' + esc(item.jp) + ` <button class="at-speak-btn" onclick="speak('` + esc(item.jp).replace(/'/g, "\\'") + `')">🔊</button></div>`;
      h += '<div class="rd-menu-price">' + esc(item.price) + "</div>";
      h += '<div class="rd-menu-vi">' + esc(item.vi) + "</div>";
      h += "</div>";
    });
  });
  h += '<div class="rd-menu-quiz" id="menu-quiz"></div>';
  h += '<button class="st-btn primary" onclick="menuQuiz()" style="margin:12px auto;display:block">🧠 Quiz: Gọi món!</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function menuQuiz() {
  var item = _MENU_ITEMS[Math.floor(Math.random() * _MENU_ITEMS.length)];
  var el = document.getElementById("menu-quiz");
  if (el) {
    el.innerHTML = '<div class="rd-quiz-card"><div>Khách gọi: "<b>' + esc(item.vi) + `</b>"</div><div>Bạn nói: <input class="pz-spt-input" id="mq-input" placeholder="Gõ tiếng Nhật..." style="display:inline-block;width:auto" /></div><button class="st-btn" onclick="menuCheck('` + esc(item.jp).replace(/'/g, "\\'") + `')">Kiểm tra</button><div id="mq-fb"></div></div>`;
  }
}
function menuCheck(answer) {
  var inp = document.getElementById("mq-input");
  var fb = document.getElementById("mq-fb");
  if (!inp || !fb) return;
  if (inp.value.trim() === answer) {
    fb.innerHTML = '<div class="mg-feedback correct">✓ Chính xác!</div>';
    haptic();
  } else fb.innerHTML = '<div class="mg-feedback wrong">✗ → ' + esc(answer) + "</div>";
}
function closeMenuReading() {
  _clOv("menu-overlay");
}
var _SIGNS = [
  { jp: "立入禁止", reading: "たちいりきんし", vi: "Cấm vào", context: "Công trường, khu vực nguy hiểm" },
  { jp: "非常口", reading: "ひじょうぐち", vi: "Lối thoát hiểm", context: "Tòa nhà, rạp phim" },
  { jp: "駐車場", reading: "ちゅうしゃじょう", vi: "Bãi đậu xe", context: "Trung tâm thương mại" },
  { jp: "受付", reading: "うけつけ", vi: "Quầy tiếp nhận", context: "Bệnh viện, công ty" },
  { jp: "営業中", reading: "えいぎょうちゅう", vi: "Đang mở cửa", context: "Cửa hàng, nhà hàng" },
  { jp: "準備中", reading: "じゅんびちゅう", vi: "Đang chuẩn bị", context: "Cửa hàng chưa mở" },
  { jp: "禁煙", reading: "きんえん", vi: "Cấm hút thuốc", context: "Nhà hàng, ga tàu" },
  { jp: "お手洗い", reading: "おてあらい", vi: "Nhà vệ sinh", context: "Nơi công cộng" },
  { jp: "出口", reading: "でぐち", vi: "Lối ra", context: "Ga tàu, cửa hàng" },
  { jp: "入口", reading: "いりぐち", vi: "Lối vào", context: "Bất kỳ đâu" },
  { jp: "定休日", reading: "ていきゅうび", vi: "Ngày nghỉ định kỳ", context: "Cửa hàng" },
  { jp: "割引", reading: "わりびき", vi: "Giảm giá", context: "Cửa hàng" }
];
function openSignReading() {
  var ol = _ov("sign-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🪧 Sign Reading</h3><span class="mg-close" onclick="closeSignReading()">✕</span></div>';
  h += '<div class="at-tip">Biển báo thường gặp ở Nhật Bản</div>';
  h += '<div class="rd-sign-grid">';
  _SIGNS.forEach(function(s) {
    h += `<div class="rd-sign-card" onclick="speak('` + esc(s.jp).replace(/'/g, "\\'") + `')">`;
    h += '<div class="rd-sign-jp">' + esc(s.jp) + "</div>";
    h += '<div class="rd-sign-reading">' + esc(s.reading) + "</div>";
    h += '<div class="rd-sign-vi">' + esc(s.vi) + "</div>";
    h += '<div class="rd-sign-context">📍 ' + esc(s.context) + "</div>";
    h += "</div>";
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeSignReading() {
  _clOv("sign-overlay");
}
var _STORIES = [
  { title: "Cáo và nho", paragraphs: [
    { jp: "ある日、キツネがぶどうを見つけました。", vi: "Một ngày, cáo tìm thấy chùm nho." },
    { jp: "「おいしそうだな」とキツネは思いました。", vi: '"Trông ngon nhỉ!" cáo nghĩ.' },
    { jp: "でも、ぶどうはとても高いところにありました。", vi: "Nhưng nho ở nơi rất cao." },
    { jp: "キツネはジャンプしましたが、届きませんでした。", vi: "Cáo nhảy nhưng không tới." },
    { jp: "「あのぶどうはすっぱいに決まっている」と言って、キツネは帰りました。", vi: '"Chùm nho đó chắc chua lắm" nói xong, cáo bỏ đi.' }
  ] },
  { title: "Thỏ và rùa", paragraphs: [
    { jp: "ウサギとカメがかけっこをしました。", vi: "Thỏ và rùa chạy đua." },
    { jp: "ウサギはとても速くて、すぐに遠くまで走りました。", vi: "Thỏ rất nhanh, chạy xa ngay." },
    { jp: "「カメはまだ遠いだろう」と思って、ウサギは寝ました。", vi: '"Rùa chắc còn xa," thỏ nghĩ rồi ngủ.' },
    { jp: "カメはゆっくりですが、止まりませんでした。", vi: "Rùa chậm nhưng không dừng." },
    { jp: "カメが先にゴールに着きました。", vi: "Rùa về đích trước." }
  ] }
];
function openBilingualStories() {
  var story = _STORIES[Math.floor(Math.random() * _STORIES.length)];
  var ol = _ov("bilingual-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📚 ' + esc(story.title) + '</h3><span class="mg-close" onclick="closeBilingualStories()">✕</span></div>';
  h += '<div class="rd-story">';
  story.paragraphs.forEach(function(p) {
    h += '<div class="rd-story-para">';
    h += '<div class="rd-story-jp">' + esc(p.jp) + ` <button class="at-speak-btn" onclick="speak('` + esc(p.jp).replace(/'/g, "\\'") + `')">🔊</button></div>`;
    h += '<div class="rd-story-vi">' + esc(p.vi) + "</div>";
    h += "</div>";
  });
  h += "</div>";
  h += '<button class="st-btn primary" onclick="openBilingualStories()" style="margin:8px auto;display:block">🔄 Truyện mới</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeBilingualStories() {
  _clOv("bilingual-overlay");
}
var _EMAILS = [
  {
    title: "Xin nghỉ phép",
    subject: "お休みのお願い",
    body: "○○先生\n\nお忙しいところ失礼いたします。\n明日、体調が悪いため、お休みをいただきたいと思います。\nご迷惑をおかけして申し訳ございません。\nよろしくお願いいたします。\n\n○○より",
    notes: "Dùng keigo: いただきたい、申し訳ございません"
  },
  {
    title: "Cảm ơn sau phỏng vấn",
    subject: "面接のお礼",
    body: "○○会社\n○○様\n\n本日は面接のお時間をいただき、ありがとうございました。\n御社で働くことに大変興味があります。\nご検討のほど、よろしくお願いいたします。\n\n○○",
    notes: "Dùng keigo: いただき、ご検討のほど"
  },
  {
    title: "Hỏi thông tin",
    subject: "お問い合わせ",
    body: "○○様\n\nはじめまして、○○と申します。\n○○について質問がございます。\n詳しい情報を教えていただけませんか。\nお忙しいところ恐れ入りますが、よろしくお願いいたします。\n\n○○",
    notes: "Dùng いただけませんか (thể lịch sự hỏi xin)"
  }
];
function openEmailTemplates() {
  var ol = _ov("email-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📧 Email Templates</h3><span class="mg-close" onclick="closeEmailTemplates()">✕</span></div>';
  _EMAILS.forEach(function(email) {
    h += '<div class="rd-email-card">';
    h += '<div class="rd-email-title">' + esc(email.title) + "</div>";
    h += '<div class="rd-email-subject">📌 件名: ' + esc(email.subject) + "</div>";
    h += '<pre class="rd-email-body">' + esc(email.body) + "</pre>";
    h += '<div class="rd-email-notes">💡 ' + esc(email.notes) + "</div>";
    h += "</div>";
  });
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeEmailTemplates() {
  _clOv("email-overlay");
}
var _JLPT_PASSAGES = [
  {
    text: "田中さんは毎朝六時に起きます。シャワーを浴びて、朝ごはんを食べます。七時半に家を出て、電車で会社に行きます。会社は九時から五時までです。田中さんは仕事が好きです。",
    questions: [
      { q: "田中さんは何時に起きますか？", choices: ["五時", "六時", "七時", "八時"], answer: 1 },
      { q: "田中さんは何で会社に行きますか？", choices: ["バス", "車", "電車", "自転車"], answer: 2 }
    ]
  },
  {
    text: "きのう、友達とデパートに行きました。新しい服を買いたかったですが、高かったので、買いませんでした。代わりに、本屋で日本語の本を二冊買いました。家に帰って、すぐ読み始めました。",
    questions: [
      { q: "服を買いましたか？", choices: ["はい", "いいえ", "分からない", "友達が買った"], answer: 1 },
      { q: "何を買いましたか？", choices: ["服", "食べ物", "本", "DVD"], answer: 2 }
    ]
  }
];
var JLPT_R = { passage: null, answers: {} };
function openJLPTPassages() {
  JLPT_R.passage = _JLPT_PASSAGES[Math.floor(Math.random() * _JLPT_PASSAGES.length)];
  JLPT_R.answers = {};
  _renderJLPT();
}
function _renderJLPT() {
  var ol = _ov("jlpt-overlay");
  var p = JLPT_R.passage;
  var h = '<div class="mg-container"><div class="mg-header"><h3>📝 JLPT Reading</h3><span class="mg-close" onclick="closeJLPTPassages()">✕</span></div>';
  h += '<div class="rd-text">' + esc(p.text) + "</div>";
  h += `<button class="st-btn" onclick="speak('` + esc(p.text).replace(/'/g, "\\'") + `')" style="margin:8px auto;display:block">🔊 Nghe</button>`;
  p.questions.forEach(function(q, qi) {
    h += '<div class="rd-question"><b>Q' + (qi + 1) + ":</b> " + esc(q.q) + "</div>";
    h += '<div class="mg-choices">';
    q.choices.forEach(function(ch, ci) {
      var selected = JLPT_R.answers[qi] === ci;
      var checked = JLPT_R.answers[qi + "_checked"];
      var cls = "";
      if (checked) cls = ci === q.answer ? " correct" : selected ? " wrong" : "";
      h += '<button class="mg-choice-btn' + cls + '"' + (!checked ? ' onclick="jlptAnswer(' + qi + "," + ci + ')"' : "") + ">" + esc(ch) + "</button>";
    });
    h += "</div>";
  });
  h += '<button class="st-btn primary" onclick="jlptCheck()" style="margin:12px auto;display:block">✅ Kiểm tra</button>';
  h += '<button class="st-btn" onclick="openJLPTPassages()" style="margin:4px auto;display:block">🔄 Bài mới</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function jlptAnswer(qi, ci) {
  JLPT_R.answers[qi] = ci;
  _renderJLPT();
}
function jlptCheck() {
  var p = JLPT_R.passage;
  var score = 0;
  p.questions.forEach(function(q, qi) {
    JLPT_R.answers[qi + "_checked"] = true;
    if (JLPT_R.answers[qi] === q.answer) score++;
  });
  _renderJLPT();
  showToast("🎯 " + score + "/" + p.questions.length + " đúng");
}
function closeJLPTPassages() {
  _clOv("jlpt-overlay");
}
function openAutoHighlight() {
  var ol = _ov("highlight-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🖍 Auto-Highlight</h3><span class="mg-close" onclick="closeAutoHighlight()">✕</span></div>';
  h += '<div class="at-tip">Dán đoạn văn tiếng Nhật, hệ thống sẽ tô màu từ N4 đã biết</div>';
  h += '<textarea class="wr-essay-input" id="ah-input" rows="5" placeholder="Dán văn bản tiếng Nhật..."></textarea>';
  h += '<button class="st-btn primary" onclick="ahAnalyze()" style="margin:8px auto;display:block">🔍 Phân tích</button>';
  h += '<div id="ah-result" class="rd-highlight-result"></div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function ahAnalyze() {
  var inp = document.getElementById("ah-input");
  var result = document.getElementById("ah-result");
  if (!inp || !result) return;
  var text = inp.value.trim();
  if (!text) {
    showToast("Hãy nhập văn bản");
    return;
  }
  var vocab = _vocab();
  var known = {};
  vocab.forEach(function(v) {
    known[v.word] = v.meaning;
    if (v.reading) known[v.reading] = v.meaning;
  });
  var safeText = esc(text);
  var highlighted = safeText;
  var found = [];
  Object.keys(known).forEach(function(word) {
    var safeWord = esc(word);
    if (word.length >= 2 && safeText.indexOf(safeWord) >= 0) {
      found.push({ word, meaning: known[word] });
      highlighted = highlighted.split(safeWord).join('<span class="ah-known" title="' + esc(known[word]) + '">' + safeWord + "</span>");
    }
  });
  var h = '<div class="rd-highlighted">' + highlighted + "</div>";
  h += '<div class="rd-found-words"><b>Từ N4 tìm thấy (' + found.length + "):</b><br>";
  found.forEach(function(f) {
    h += '<span class="rd-found-word">' + esc(f.word) + " = " + esc(f.meaning) + "</span>";
  });
  h += "</div>";
  result.innerHTML = h;
}
function closeAutoHighlight() {
  _clOv("highlight-overlay");
}
var SPRD = { text: "", startTime: 0, wpm: 0 };
function openSpeedReading() {
  var texts = _GRADED_TEXTS;
  var t = texts[Math.floor(Math.random() * texts.length)];
  SPRD.text = t.text;
  SPRD.startTime = Date.now();
  var ol = _ov("speedread-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>⚡ Speed Reading</h3><span class="mg-close" onclick="closeSpeedReading()">✕</span></div>';
  h += '<div class="rd-level">⏱ Bấm "Xong" khi đọc xong</div>';
  h += '<div class="rd-title">' + esc(t.title) + "</div>";
  h += '<div class="rd-text" style="font-size:1.2em;line-height:1.8">' + esc(t.text) + "</div>";
  h += '<button class="st-btn primary" onclick="speedReadDone()" style="margin:12px auto;display:block" id="sr-done">✅ Đọc xong!</button>';
  h += '<div id="sr-result"></div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function speedReadDone() {
  var elapsed = (Date.now() - SPRD.startTime) / 1e3;
  var charCount = SPRD.text.length;
  var cpm = Math.round(charCount / (elapsed / 60));
  var r = document.getElementById("sr-result");
  if (r) {
    r.innerHTML = '<div class="rd-speed-result"><div>⏱ Thời gian: ' + elapsed.toFixed(1) + "s</div><div>📏 Độ dài: " + charCount + " ký tự</div><div>⚡ Tốc độ: " + cpm + ' ký tự/phút</div><div class="at-tip">' + (cpm > 200 ? "🌟 Rất nhanh!" : cpm > 100 ? "👍 Tốt!" : "💪 Tiếp tục luyện!") + "</div></div>";
  }
  var btn = document.getElementById("sr-done");
  if (btn) btn.style.display = "none";
}
function closeSpeedReading() {
  _clOv("speedread-overlay");
}
export {
  JLPT_R,
  SPRD,
  ahAnalyze,
  closeAutoHighlight,
  closeBilingualStories,
  closeEmailTemplates,
  closeGradedReader,
  closeJLPTPassages,
  closeMangaReader,
  closeMenuReading,
  closeNHKEasy,
  closeSignReading,
  closeSpeedReading,
  jlptAnswer,
  jlptCheck,
  menuCheck,
  menuQuiz,
  openAutoHighlight,
  openBilingualStories,
  openEmailTemplates,
  openGradedReader,
  openJLPTPassages,
  openMangaReader,
  openMenuReading,
  openNHKEasy,
  openSignReading,
  openSpeedReading,
  speedReadDone
};
