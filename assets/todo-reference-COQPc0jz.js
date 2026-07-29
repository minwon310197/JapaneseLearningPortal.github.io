import { bK as esc } from "./feature-3d-CFvJkEt3.js";
import "./vendor-react-BYxMSDiB.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
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
function _refCard(items) {
  return items.map(function(item) {
    return `<div style="padding:8px;background:var(--card-bg);border-radius:6px;margin-bottom:4px;cursor:pointer" onclick="speak('` + esc(item.jp || item.word || "").replace(/'/g, "\\'") + `')"><div style="display:flex;align-items:center;gap:8px"><span class="jp-font" style="font-weight:700;font-size:1.1em;min-width:60px">` + esc(item.jp || item.word || "") + "</span>" + (item.reading ? '<span class="jp-font" style="color:var(--accent);font-size:0.85em">' + esc(item.reading) + "</span>" : "") + '<span style="color:var(--text-secondary);font-size:0.85em;margin-left:auto">' + esc(item.vi || item.meaning || "") + "</span></div>" + (item.example ? '<div style="font-size:0.82em;color:var(--text-muted);margin-top:2px;padding-left:4px">例: <span class="jp-font">' + esc(item.example) + "</span></div>" : "") + "</div>";
  }).join("");
}
var _particles = [
  { jp: "は", reading: "wa", vi: "Chủ đề / So sánh", example: "私は学生です。" },
  { jp: "が", reading: "ga", vi: "Chủ ngữ / Nhấn mạnh", example: "猫がいます。" },
  { jp: "を", reading: "o", vi: "Tân ngữ trực tiếp", example: "ご飯を食べます。" },
  { jp: "に", reading: "ni", vi: "Địa điểm / Thời gian / Đối tượng", example: "学校に行きます。" },
  { jp: "で", reading: "de", vi: "Nơi hành động / Phương tiện", example: "バスで行きます。" },
  { jp: "へ", reading: "e", vi: "Hướng di chuyển", example: "東京へ行きます。" },
  { jp: "と", reading: "to", vi: "Và / Cùng với / Nếu", example: "友達と遊びます。" },
  { jp: "も", reading: "mo", vi: "Cũng", example: "私も行きます。" },
  { jp: "から", reading: "kara", vi: "Từ (thời gian/nơi) / Vì", example: "9時から始まります。" },
  { jp: "まで", reading: "made", vi: "Đến (thời gian/nơi)", example: "5時まで働きます。" },
  { jp: "の", reading: "no", vi: "Của / Sở hữu", example: "私の本です。" },
  { jp: "より", reading: "yori", vi: "Hơn (so sánh)", example: "猫より犬が好きです。" },
  { jp: "ね", reading: "ne", vi: "Nhỉ (xác nhận)", example: "いい天気ですね。" },
  { jp: "よ", reading: "yo", vi: "Đấy (thông báo)", example: "おいしいですよ。" },
  { jp: "か", reading: "ka", vi: "Từ để hỏi", example: "何ですか。" }
];
function openParticleRef() {
  var ol = _ov("particle-ref-overlay");
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>🔤 Trợ từ (Particle)</h3><span class="mg-close" onclick="closeParticleRef()">✕</span></div>';
  h += '<div style="font-size:0.85em;color:var(--text-secondary);margin:4px 0">Tất cả trợ từ N4 với ví dụ. Nhấn để nghe.</div>';
  h += _refCard(_particles);
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeParticleRef() {
  _clOv("particle-ref-overlay");
}
var _counters = [
  { jp: "〜つ", reading: "ひとつ〜とお", vi: "Đếm vật chung (1-10)", example: "りんごを三つください。" },
  { jp: "〜人", reading: "にん/り", vi: "Đếm người", example: "学生が五人います。" },
  { jp: "〜枚", reading: "まい", vi: "Đếm vật mỏng, phẳng", example: "切手を二枚買いました。" },
  { jp: "〜本", reading: "ほん/ぼん/ぽん", vi: "Đếm vật dài, tròn", example: "ペンを三本ください。" },
  { jp: "〜冊", reading: "さつ", vi: "Đếm sách, vở", example: "本を二冊読みました。" },
  { jp: "〜台", reading: "だい", vi: "Đếm máy móc, xe cộ", example: "車が一台あります。" },
  { jp: "〜杯", reading: "はい/ばい/ぱい", vi: "Đếm ly, cốc", example: "コーヒーを一杯飲みます。" },
  { jp: "〜匹", reading: "ひき/びき/ぴき", vi: "Đếm con vật nhỏ", example: "猫が二匹います。" },
  { jp: "〜個", reading: "こ", vi: "Đếm vật nhỏ, tròn", example: "卵を三個買います。" },
  { jp: "〜回", reading: "かい", vi: "Đếm lần", example: "二回見ました。" },
  { jp: "〜階", reading: "かい/がい", vi: "Đếm tầng", example: "三階に住んでいます。" },
  { jp: "〜番", reading: "ばん", vi: "Số thứ tự", example: "一番好きな食べ物は寿司です。" }
];
function openCounterRef() {
  var ol = _ov("counter-ref-overlay");
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>🔢 Trợ số từ (Counter)</h3><span class="mg-close" onclick="closeCounterRef()">✕</span></div>';
  h += '<div style="font-size:0.85em;color:var(--text-secondary);margin:4px 0">Các counter thường dùng trong JLPT N4.</div>';
  h += _refCard(_counters);
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeCounterRef() {
  _clOv("counter-ref-overlay");
}
var _timeExprs = [
  { jp: "〜前", reading: "まえ", vi: "Trước ~", example: "三日前に来ました。" },
  { jp: "〜後", reading: "あと/ご", vi: "Sau ~", example: "食事の後で散歩します。" },
  { jp: "〜間", reading: "あいだ/かん", vi: "Trong khoảng ~", example: "二時間勉強しました。" },
  { jp: "〜中", reading: "ちゅう/じゅう", vi: "Trong suốt ~", example: "一日中雨でした。" },
  { jp: "〜時", reading: "とき", vi: "Khi ~", example: "暇な時、本を読みます。" },
  { jp: "〜ごろ", reading: "ごろ", vi: "Khoảng ~ (thời điểm)", example: "七時ごろ起きます。" },
  { jp: "〜ぐらい", reading: "ぐらい", vi: "Khoảng ~ (số lượng)", example: "一時間ぐらいかかります。" },
  { jp: "〜まで", reading: "まで", vi: "Cho đến ~", example: "五時まで待ちます。" },
  { jp: "〜までに", reading: "までに", vi: "Trước thời hạn ~", example: "金曜日までに出してください。" },
  { jp: "〜たら", reading: "たら", vi: "Khi/Nếu ~ xong", example: "着いたら電話します。" }
];
function openTimeExprRef() {
  var ol = _ov("time-ref-overlay");
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>⏰ Biểu thức thời gian</h3><span class="mg-close" onclick="closeTimeExprRef()">✕</span></div>';
  h += _refCard(_timeExprs);
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeTimeExprRef() {
  _clOv("time-ref-overlay");
}
var _verbGroups = [
  { group: "Nhóm 1 (五段 Godan)", items: [
    { jp: "書く", reading: "かく", vi: "viết — ku→ki/ka/ko" },
    { jp: "飲む", reading: "のむ", vi: "uống — mu→mi/ma/mo" },
    { jp: "読む", reading: "よむ", vi: "đọc" },
    { jp: "話す", reading: "はなす", vi: "nói" },
    { jp: "待つ", reading: "まつ", vi: "chờ" },
    { jp: "買う", reading: "かう", vi: "mua" }
  ] },
  { group: "Nhóm 2 (一段 Ichidan)", items: [
    { jp: "食べる", reading: "たべる", vi: "ăn — bỏ る" },
    { jp: "見る", reading: "みる", vi: "xem" },
    { jp: "起きる", reading: "おきる", vi: "dậy" },
    { jp: "出る", reading: "でる", vi: "ra" },
    { jp: "教える", reading: "おしえる", vi: "dạy" }
  ] },
  { group: "Nhóm 3 (Bất quy tắc)", items: [
    { jp: "する", reading: "する", vi: "làm → し/さ/せ" },
    { jp: "来る", reading: "くる", vi: "đến → き/こ/け" }
  ] }
];
function openVerbGroupRef() {
  var ol = _ov("verb-group-overlay");
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>🔄 Nhóm động từ</h3><span class="mg-close" onclick="closeVerbGroupRef()">✕</span></div>';
  _verbGroups.forEach(function(g) {
    h += '<div style="font-weight:700;color:var(--accent);margin:10px 0 4px">' + esc(g.group) + "</div>";
    h += _refCard(g.items);
  });
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeVerbGroupRef() {
  _clOv("verb-group-overlay");
}
var _adjRef = [
  { type: "い Adjectives (い形容詞)", rows: [
    ["Hiện tại +", "高い (takai)", "cao/đắt"],
    ["Hiện tại -", "高くない (takakunai)", "không cao"],
    ["Quá khứ +", "高かった (takakatta)", "đã cao"],
    ["Quá khứ -", "高くなかった (takakunakatta)", "đã không cao"],
    ["て形", "高くて (takakute)", "cao và~"]
  ] },
  { type: "な Adjectives (な形容詞)", rows: [
    ["Hiện tại +", "静かだ (shizuka da)", "yên tĩnh"],
    ["Hiện tại -", "静かじゃない", "không yên tĩnh"],
    ["Quá khứ +", "静かだった", "đã yên tĩnh"],
    ["Quá khứ -", "静かじゃなかった", "đã không yên tĩnh"],
    ["て形", "静かで", "yên tĩnh và~"]
  ] }
];
function openAdjectiveRef() {
  var ol = _ov("adj-ref-overlay");
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>📊 Chia tính từ</h3><span class="mg-close" onclick="closeAdjectiveRef()">✕</span></div>';
  _adjRef.forEach(function(sec) {
    h += '<div style="font-weight:700;color:var(--accent);margin:10px 0 4px">' + esc(sec.type) + "</div>";
    h += '<table style="width:100%;font-size:0.88em;border-collapse:collapse">';
    sec.rows.forEach(function(r) {
      h += '<tr><td style="padding:4px 6px;border-bottom:1px solid var(--border);font-weight:600">' + esc(r[0]) + "</td>";
      h += '<td style="padding:4px 6px;border-bottom:1px solid var(--border)" class="jp-font">' + esc(r[1]) + "</td>";
      h += '<td style="padding:4px 6px;border-bottom:1px solid var(--border);color:var(--text-secondary)">' + esc(r[2]) + "</td></tr>";
    });
    h += "</table>";
  });
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeAdjectiveRef() {
  _clOv("adj-ref-overlay");
}
var _connectors = [
  { jp: "でも", reading: "demo", vi: "Nhưng", example: "高いです。でもおいしいです。" },
  { jp: "しかし", reading: "shikashi", vi: "Tuy nhiên (formal)", example: "勉強しました。しかし、テストは難しかったです。" },
  { jp: "それに", reading: "soreni", vi: "Hơn nữa", example: "おいしいです。それに安いです。" },
  { jp: "それで", reading: "sorede", vi: "Vì vậy", example: "雨でした。それで家にいました。" },
  { jp: "だから", reading: "dakara", vi: "Cho nên", example: "明日テストです。だから勉強します。" },
  { jp: "そして", reading: "soshite", vi: "Và rồi", example: "朝ご飯を食べました。そして学校に行きました。" },
  { jp: "けど/けれども", reading: "kedo", vi: "Nhưng mà", example: "行きたいけど、時間がありません。" },
  { jp: "または", reading: "matawa", vi: "Hoặc", example: "電話またはメールで連絡してください。" },
  { jp: "ところで", reading: "tokorode", vi: "Nhân tiện / À này", example: "ところで、明日暇ですか。" },
  { jp: "つまり", reading: "tsumari", vi: "Tóm lại", example: "つまり、行けないということです。" }
];
function openConnectorRef() {
  var ol = _ov("connector-ref-overlay");
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>🔗 Từ nối / Liên từ</h3><span class="mg-close" onclick="closeConnectorRef()">✕</span></div>';
  h += _refCard(_connectors);
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeConnectorRef() {
  _clOv("connector-ref-overlay");
}
var _qWords = [
  { jp: "何 (なに/なん)", reading: "nani/nan", vi: "Cái gì", example: "これは何ですか。" },
  { jp: "誰 (だれ)", reading: "dare", vi: "Ai", example: "あの人は誰ですか。" },
  { jp: "どこ", reading: "doko", vi: "Ở đâu", example: "トイレはどこですか。" },
  { jp: "いつ", reading: "itsu", vi: "Khi nào", example: "いつ日本に行きますか。" },
  { jp: "どうして/なぜ", reading: "dōshite/naze", vi: "Tại sao", example: "どうして遅れましたか。" },
  { jp: "どう/いかが", reading: "dō/ikaga", vi: "Thế nào", example: "日本語の勉強はどうですか。" },
  { jp: "いくつ", reading: "ikutsu", vi: "Bao nhiêu (đếm)", example: "りんごはいくつありますか。" },
  { jp: "いくら", reading: "ikura", vi: "Bao nhiêu (giá)", example: "これはいくらですか。" },
  { jp: "どれ", reading: "dore", vi: "Cái nào (3+)", example: "どれがいいですか。" },
  { jp: "どの", reading: "dono", vi: "~ nào (+ danh từ)", example: "どの本が好きですか。" },
  { jp: "どちら", reading: "dochira", vi: "Bên nào / Nơi nào", example: "どちらがいいですか。" }
];
function openQuestionWordRef() {
  var ol = _ov("qword-ref-overlay");
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>❓ Từ để hỏi</h3><span class="mg-close" onclick="closeQuestionWordRef()">✕</span></div>';
  h += _refCard(_qWords);
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeQuestionWordRef() {
  _clOv("qword-ref-overlay");
}
var _onoma = [
  { jp: "ドキドキ", reading: "dokidoki", vi: "Tim đập nhanh (hồi hộp)", example: "テストの前にドキドキしました。" },
  { jp: "ワクワク", reading: "wakuwaku", vi: "Háo hức, phấn khích", example: "旅行の前はワクワクします。" },
  { jp: "イライラ", reading: "iraira", vi: "Bực bội, khó chịu", example: "電車が遅くてイライラしました。" },
  { jp: "ペラペラ", reading: "perapera", vi: "Nói trôi chảy", example: "日本語がペラペラです。" },
  { jp: "ピカピカ", reading: "pikapika", vi: "Sáng bóng, lấp lánh", example: "新しい車はピカピカです。" },
  { jp: "ゴロゴロ", reading: "gorogoro", vi: "Sấm / Nằm lười", example: "休みの日はゴロゴロしています。" },
  { jp: "ニコニコ", reading: "nikoniko", vi: "Tươi cười", example: "いつもニコニコしている人です。" },
  { jp: "バラバラ", reading: "barabara", vi: "Rời rạc, tản mác", example: "意見がバラバラです。" },
  { jp: "フワフワ", reading: "fuwafuwa", vi: "Mềm mại, bồng bềnh", example: "このパンはフワフワです。" },
  { jp: "キラキラ", reading: "kirakira", vi: "Lấp lánh", example: "星がキラキラ光っています。" }
];
function openOnomatopoeiaRef() {
  var ol = _ov("onoma-ref-overlay");
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>🎵 Từ tượng thanh/hình</h3><span class="mg-close" onclick="closeOnomatopoeiaRef()">✕</span></div>';
  h += '<div style="font-size:0.85em;color:var(--text-secondary);margin:4px 0">Onomatopoeia thường dùng trong tiếng Nhật.</div>';
  h += _refCard(_onoma);
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeOnomatopoeiaRef() {
  _clOv("onoma-ref-overlay");
}
var _setPhrases = [
  { jp: "〜ことがある", reading: "koto ga aru", vi: "Đã từng ~", example: "日本に行ったことがあります。" },
  { jp: "〜ようにする", reading: "yō ni suru", vi: "Cố gắng ~", example: "毎日運動するようにしています。" },
  { jp: "〜ことにする", reading: "koto ni suru", vi: "Quyết định ~", example: "日本語を勉強することにしました。" },
  { jp: "〜ことになる", reading: "koto ni naru", vi: "Được quyết định rằng ~", example: "来月日本に行くことになりました。" },
  { jp: "〜つもり", reading: "tsumori", vi: "Dự định ~", example: "来年留学するつもりです。" },
  { jp: "〜はずだ", reading: "hazu da", vi: "Chắc hẳn / Lẽ ra ~", example: "今日届くはずです。" },
  { jp: "〜そうだ", reading: "sō da", vi: "Có vẻ ~ / Nghe nói ~", example: "雨が降りそうです。" },
  { jp: "〜らしい", reading: "rashii", vi: "Hình như ~ / Giống ~", example: "明日は休みらしいです。" },
  { jp: "〜ために", reading: "tame ni", vi: "Để ~ / Vì ~", example: "日本に行くために勉強しています。" },
  { jp: "〜てしまう", reading: "te shimau", vi: "Kết thúc ~ (tiếc nuối)", example: "全部食べてしまいました。" }
];
function openSetPhraseRef() {
  var ol = _ov("setphrase-ref-overlay");
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>📌 Cụm cố định</h3><span class="mg-close" onclick="closeSetPhraseRef()">✕</span></div>';
  h += _refCard(_setPhrases);
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeSetPhraseRef() {
  _clOv("setphrase-ref-overlay");
}
var _honData = [
  { casual: "する", polite: "します", honorific: "なさいます", humble: "いたします", vi: "làm" },
  { casual: "行く", polite: "行きます", honorific: "いらっしゃいます", humble: "参ります", vi: "đi" },
  { casual: "来る", polite: "来ます", honorific: "いらっしゃいます", humble: "参ります", vi: "đến" },
  { casual: "食べる", polite: "食べます", honorific: "召し上がります", humble: "いただきます", vi: "ăn" },
  { casual: "言う", polite: "言います", honorific: "おっしゃいます", humble: "申します", vi: "nói" },
  { casual: "見る", polite: "見ます", honorific: "ご覧になります", humble: "拝見します", vi: "xem" },
  { casual: "いる", polite: "います", honorific: "いらっしゃいます", humble: "おります", vi: "ở/có" },
  { casual: "知っている", polite: "知っています", honorific: "ご存じです", humble: "存じております", vi: "biết" }
];
function openHonorificRef() {
  var ol = _ov("honorific-ref-overlay");
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>🎩 Kính ngữ (Keigo)</h3><span class="mg-close" onclick="closeHonorificRef()">✕</span></div>';
  h += '<div style="overflow-x:auto"><table style="width:100%;font-size:0.82em;border-collapse:collapse">';
  h += '<thead><tr><th style="padding:6px;border-bottom:2px solid var(--border);text-align:left">Thường</th>';
  h += '<th style="padding:6px;border-bottom:2px solid var(--border)">Lịch sự</th>';
  h += '<th style="padding:6px;border-bottom:2px solid var(--border)">Tôn kính</th>';
  h += '<th style="padding:6px;border-bottom:2px solid var(--border)">Khiêm nhường</th>';
  h += '<th style="padding:6px;border-bottom:2px solid var(--border)">Nghĩa</th></tr></thead><tbody>';
  _honData.forEach(function(r) {
    h += "<tr>";
    h += `<td style="padding:4px 6px;border-bottom:1px solid var(--border)" class="jp-font" onclick="speak('` + esc(r.casual).replace(/'/g, "\\'") + `')" style="cursor:pointer">` + esc(r.casual) + "</td>";
    h += '<td style="padding:4px 6px;border-bottom:1px solid var(--border)" class="jp-font">' + esc(r.polite) + "</td>";
    h += '<td style="padding:4px 6px;border-bottom:1px solid var(--border);color:var(--accent)" class="jp-font">' + esc(r.honorific) + "</td>";
    h += '<td style="padding:4px 6px;border-bottom:1px solid var(--border);color:var(--grammar-accent)" class="jp-font">' + esc(r.humble) + "</td>";
    h += '<td style="padding:4px 6px;border-bottom:1px solid var(--border);color:var(--text-secondary)">' + esc(r.vi) + "</td>";
    h += "</tr>";
  });
  h += "</tbody></table></div>";
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeHonorificRef() {
  _clOv("honorific-ref-overlay");
}
export {
  closeAdjectiveRef,
  closeConnectorRef,
  closeCounterRef,
  closeHonorificRef,
  closeOnomatopoeiaRef,
  closeParticleRef,
  closeQuestionWordRef,
  closeSetPhraseRef,
  closeTimeExprRef,
  closeVerbGroupRef,
  openAdjectiveRef,
  openConnectorRef,
  openCounterRef,
  openHonorificRef,
  openOnomatopoeiaRef,
  openParticleRef,
  openQuestionWordRef,
  openSetPhraseRef,
  openTimeExprRef,
  openVerbGroupRef
};
