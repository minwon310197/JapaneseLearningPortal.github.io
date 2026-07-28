import { cV as esc, P as S, e as safeGetItem } from "./feature-3d-ClP3ARU5.js";
import { g as getSRS, a as getBookmarks } from "./bookmarks-lHbrr_Ia.js";
import "./vendor-react-BYxMSDiB.js";
import "./vendor-three-CoFVKTas.js";
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
function _hdr(title, icon, closeFn) {
  return '<div class="mg-container"><div class="mg-header"><h3>' + icon + " " + esc(title) + '</h3><span class="mg-close" onclick="' + closeFn + '()">✕</span></div>';
}
function _contentList(items) {
  var h = "";
  items.forEach(function(it) {
    h += '<div style="background:var(--card-bg);padding:8px;border-radius:6px;margin:5px 0">';
    if (it.jp) h += `<div style="font-size:1.05em;font-weight:700;cursor:pointer" onclick="speak('` + esc(it.jp).replace(/'/g, "\\'") + `')">` + esc(it.jp) + " 🔊</div>";
    if (it.reading) h += '<div style="font-size:0.8em;color:var(--text-secondary)">' + esc(it.reading) + "</div>";
    if (it.meaning) h += '<div style="font-size:0.85em">' + esc(it.meaning) + "</div>";
    if (it.example) h += '<div style="font-size:0.8em;color:var(--text-muted);font-style:italic;margin-top:2px">' + esc(it.example) + "</div>";
    h += "</div>";
  });
  return h;
}
function openVerbNounColl() {
  var ol = _ov("verbnoun-overlay");
  var html = _hdr("Verb + Noun Collocations", "🔗", "closeVerbNounColl");
  html += '<div style="padding:8px">';
  html += _contentList([
    { jp: "写真を撮る", reading: "しゃしんをとる", meaning: "Chụp ảnh", example: "富士山の写真を撮りました。" },
    { jp: "電話をかける", reading: "でんわをかける", meaning: "Gọi điện", example: "友達に電話をかけます。" },
    { jp: "約束を守る", reading: "やくそくをまもる", meaning: "Giữ lời hứa", example: "約束を守ってください。" },
    { jp: "シャワーを浴びる", reading: "しゃわーをあびる", meaning: "Tắm vòi sen", example: "毎朝シャワーを浴びます。" },
    { jp: "道に迷う", reading: "みちにまよう", meaning: "Lạc đường", example: "駅で道に迷いました。" },
    { jp: "席を取る", reading: "せきをとる", meaning: "Giữ chỗ", example: "先に席を取ってください。" },
    { jp: "風邪をひく", reading: "かぜをひく", meaning: "Bị cảm", example: "冬に風邪をひきました。" },
    { jp: "夢を見る", reading: "ゆめをみる", meaning: "Mơ (giấc mơ)", example: "昨日いい夢を見ました。" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeVerbNounColl() {
  _clOv("verbnoun-overlay");
}
function openAdjNounColl() {
  var ol = _ov("adjnoun-overlay");
  var html = _hdr("Adj + Noun Collocations", "🎨", "closeAdjNounColl");
  html += '<div style="padding:8px">';
  html += _contentList([
    { jp: "高い山", reading: "たかいやま", meaning: "Núi cao", example: "日本で一番高い山は富士山です。" },
    { jp: "きれいな花", reading: "きれいなはな", meaning: "Hoa đẹp", example: "庭にきれいな花が咲いています。" },
    { jp: "長い髪", reading: "ながいかみ", meaning: "Tóc dài", example: "彼女は長い髪です。" },
    { jp: "静かな場所", reading: "しずかなばしょ", meaning: "Nơi yên tĩnh", example: "静かな場所で勉強したいです。" },
    { jp: "大きな声", reading: "おおきなこえ", meaning: "Giọng to", example: "大きな声で話してください。" },
    { jp: "熱いお茶", reading: "あついおちゃ", meaning: "Trà nóng", example: "熱いお茶を飲みましょう。" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeAdjNounColl() {
  _clOv("adjnoun-overlay");
}
function openAdverbGuide() {
  var ol = _ov("adverb-overlay");
  var html = _hdr("Trạng từ thường gặp", "📝", "closeAdverbGuide");
  html += '<div style="padding:8px">';
  html += _contentList([
    { jp: "もう", meaning: "Đã (rồi)", example: "もう食べましたか。— Đã ăn chưa?" },
    { jp: "まだ", meaning: "Chưa / Vẫn còn", example: "まだ分かりません。— Vẫn chưa hiểu." },
    { jp: "とても", meaning: "Rất", example: "この映画はとてもおもしろいです。" },
    { jp: "ちょっと", meaning: "Một chút", example: "ちょっと待ってください。— Đợi chút." },
    { jp: "たぶん", meaning: "Có lẽ", example: "たぶん明日は雨でしょう。" },
    { jp: "ぜんぜん", meaning: "Hoàn toàn không", example: "ぜんぜん分かりません。— Hoàn toàn không hiểu." },
    { jp: "よく", meaning: "Thường xuyên / Rõ", example: "よく映画を見ます。— Hay xem phim." },
    { jp: "だんだん", meaning: "Dần dần", example: "だんだん寒くなりました。— Dần lạnh." }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeAdverbGuide() {
  _clOv("adverb-overlay");
}
function openTransitions() {
  var ol = _ov("transitions-overlay");
  var html = _hdr("Liên từ & Chuyển đoạn", "🔗", "closeTransitions");
  html += '<div style="padding:8px">';
  html += _contentList([
    { jp: "まず", meaning: "Trước tiên", example: "まず、名前を書いてください。" },
    { jp: "次に（つぎに）", meaning: "Tiếp theo", example: "次に、住所を書きます。" },
    { jp: "そして", meaning: "Rồi / Và", example: "そして、最後に電話番号です。" },
    { jp: "最後に（さいごに）", meaning: "Cuối cùng", example: "最後に、サインしてください。" },
    { jp: "しかし", meaning: "Tuy nhiên", example: "しかし、時間がありません。" },
    { jp: "それに", meaning: "Hơn nữa", example: "この店は安いです。それに、おいしいです。" },
    { jp: "だから", meaning: "Vì vậy", example: "雨が降っています。だから、傘を持ちます。" },
    { jp: "例えば（たとえば）", meaning: "Ví dụ", example: "日本の食べ物、例えば寿司や天ぷら。" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeTransitions() {
  _clOv("transitions-overlay");
}
function openDiaryTemplate() {
  var ol = _ov("diary-overlay");
  var html = _hdr("Mẫu viết nhật ký", "📔", "closeDiaryTemplate");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.85em;margin-bottom:8px">Template viết nhật ký tiếng Nhật:</div>';
  var template = [
    "○月○日 （○曜日） 天気：晴れ",
    "",
    "今日は＿＿＿をしました。",
    "（場所）で＿＿＿を＿＿＿ました。",
    "＿＿＿はとても＿＿＿でした。",
    "明日は＿＿＿をしたいです。"
  ];
  html += '<div style="background:var(--card-bg);padding:12px;border-radius:6px;line-height:2;font-size:0.95em">';
  template.forEach(function(l) {
    html += esc(l) + "<br>";
  });
  html += "</div>";
  html += '<div style="margin-top:10px;font-size:0.85em;color:var(--accent)">💡 Ví dụ:</div>';
  html += '<div style="background:var(--card-bg);padding:10px;border-radius:6px;font-size:0.85em;line-height:1.8">';
  html += "3月15日 （土曜日） 天気：晴れ<br><br>";
  html += "今日は友達と買い物をしました。<br>";
  html += "デパートで新しい服を買いました。<br>";
  html += "買い物はとても楽しかったです。<br>";
  html += "明日は日本語を勉強したいです。</div>";
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeDiaryTemplate() {
  _clOv("diary-overlay");
}
function openEmailTemplate2() {
  var ol = _ov("emailtpl-overlay");
  var html = _hdr("Mẫu viết email", "📧", "closeEmailTemplate2");
  html += '<div style="padding:8px">';
  html += '<div style="font-weight:700;color:var(--accent);margin-bottom:6px">Business email:</div>';
  html += '<div style="background:var(--card-bg);padding:10px;border-radius:6px;font-size:0.85em;line-height:1.8">';
  html += "〇〇様<br><br>お世話になっております。<br>（会社名）の（名前）です。<br><br>（本文）<br><br>よろしくお願いいたします。<br>（名前）</div>";
  html += '<div style="font-weight:700;color:var(--accent);margin:12px 0 6px">Casual email:</div>';
  html += '<div style="background:var(--card-bg);padding:10px;border-radius:6px;font-size:0.85em;line-height:1.8">';
  html += "〇〇さんへ<br><br>元気ですか。<br><br>（本文）<br><br>また連絡します。<br>（名前）</div>";
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeEmailTemplate2() {
  _clOv("emailtpl-overlay");
}
function openBlogReading() {
  var ol = _ov("blogreading-overlay");
  var posts = [
    { title: "東京の週末", text: "先週末、友達と渋谷に行きました。新しいカフェでコーヒーを飲みました。それから、公園を散歩しました。天気が良くて、とても楽しかったです。来週も行きたいです。", q: "Họ đã đi đâu?", ans: "Shibuya" },
    { title: "料理を作りました", text: "昨日初めてカレーを作りました。レシピを見ながら、野菜を切りました。少し辛かったですが、おいしかったです。家族もおいしいと言いました。", q: "Món gì?", ans: "Cà-ri" },
    { title: "日本語の勉強", text: "毎日二時間日本語を勉強しています。漢字が一番難しいです。でも、アニメを見て、少し分かるようになりました。来年JLPTを受けたいです。", q: "Gì khó nhất?", ans: "Kanji" },
    { title: "ホームステイ", text: "今、日本でホームステイをしています。ホストファミリーはとても親切です。毎朝、お母さんが日本語で話しかけてくれます。最初は分からなかったけど、今は少し聞き取れるようになりました。週末は家族と一緒に買い物に行きます。", q: "Ai nói tiếng Nhật mỗi sáng?", ans: "Mẹ của gia đình homestay" },
    { title: "アルバイト", text: "コンビニでアルバイトを始めました。仕事は品物を並べたり、レジを打ったりすることです。日本語を使う機会が多いので、とてもいい勉強になります。お客さんに「ありがとう」と言われると、嬉しいです。", q: "Công việc gồm gì?", ans: "Xếp hàng hóa và đứng quầy thu ngân" }
  ];
  var p = posts[Math.floor(Math.random() * posts.length)];
  var html = _hdr("Blog Reading", "📝", "closeBlogReading");
  html += '<div style="padding:12px">';
  html += '<div style="font-weight:700;font-size:1.1em;margin-bottom:8px">' + esc(p.title) + "</div>";
  html += '<div style="background:var(--card-bg);padding:12px;border-radius:6px;font-size:1em;line-height:1.8">' + esc(p.text) + "</div>";
  html += '<div style="margin-top:8px;font-size:0.85em"><strong>❓ ' + esc(p.q) + '</strong> → <span style="color:var(--success)">' + esc(p.ans) + "</span></div>";
  html += '<button class="st-btn" onclick="openBlogReading()" style="margin-top:8px;width:100%">🔄 Bài khác</button>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeBlogReading() {
  _clOv("blogreading-overlay");
}
function openSongLyrics() {
  var ol = _ov("songlyrics-overlay");
  var songs = [
    { title: "きらきら星 (Twinkle Star)", lines: [
      { jp: "きらきらひかる", vi: "Lấp lánh tỏa sáng" },
      { jp: "おそらのほしよ", vi: "Ngôi sao trên trời ơi" },
      { jp: "まばたきしては", vi: "Nhấp nháy mãi" },
      { jp: "みんなをみてる", vi: "Nhìn mọi người" }
    ] },
    { title: "ふるさと (Quê hương)", lines: [
      { jp: "うさぎ追いし かの山", vi: "Đuổi thỏ trên ngọn núi kia" },
      { jp: "こぶな釣りし かの川", vi: "Câu cá ở con sông kia" },
      { jp: "夢は今も めぐりて", vi: "Giấc mơ vẫn quay về" },
      { jp: "忘れがたき ふるさと", vi: "Quê hương không thể quên" }
    ] },
    { title: "春が来た (Xuân đã đến)", lines: [
      { jp: "はるがきた はるがきた", vi: "Xuân đã đến, xuân đã đến" },
      { jp: "どこにきた", vi: "Đến nơi nào?" },
      { jp: "山にきた 里にきた", vi: "Đến núi, đến làng" },
      { jp: "野にもきた", vi: "Cả đồng cỏ nữa" }
    ] },
    { title: "どんぐりころころ (Quả sồi lăn tròn)", lines: [
      { jp: "どんぐりころころ どんぶりこ", vi: "Quả sồi lăn tròn, tõm xuống" },
      { jp: "おいけにはまって さあたいへん", vi: "Rơi vào ao, ôi chao ơi" },
      { jp: "どじょうがでてきて こんにちは", vi: "Cá chạch bơi ra, xin chào" },
      { jp: "ぼっちゃん いっしょに あそびましょう", vi: "Cậu bé ơi, cùng chơi nào" }
    ] },
    { title: "大きな古時計 (Chiếc đồng hồ cũ to lớn)", lines: [
      { jp: "おおきなのっぽの ふるどけい", vi: "Chiếc đồng hồ cũ to cao" },
      { jp: "おじいさんの とけい", vi: "Đồng hồ của ông" },
      { jp: "ひゃくねん いつも うごいていた", vi: "Trăm năm luôn chạy mãi" },
      { jp: "ごじまんの とけいさ", vi: "Chiếc đồng hồ tự hào lắm" }
    ] }
  ];
  var song = songs[Math.floor(Math.random() * songs.length)];
  var html = _hdr("Song Lyrics Study", "🎵", "closeSongLyrics");
  html += '<div style="padding:8px">';
  html += '<div style="font-weight:700;text-align:center;font-size:1.1em;margin-bottom:8px">🎵 ' + esc(song.title) + "</div>";
  song.lines.forEach(function(l) {
    html += `<div style="background:var(--card-bg);padding:8px;border-radius:6px;margin:4px 0;cursor:pointer" onclick="speak('` + esc(l.jp).replace(/'/g, "\\'") + `')">`;
    html += '<div style="font-size:1em;font-weight:700">' + esc(l.jp) + " 🔊</div>";
    html += '<div style="font-size:0.8em;color:var(--text-muted)">' + esc(l.vi) + "</div></div>";
  });
  html += '<button class="st-btn" onclick="openSongLyrics()" style="margin-top:8px;width:100%">🔄 Bài khác</button>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeSongLyrics() {
  _clOv("songlyrics-overlay");
}
function openAnimePhrases() {
  var ol = _ov("animephrases-overlay");
  var html = _hdr("Anime/Drama Phrases", "🎬", "closeAnimePhrases");
  html += '<div style="padding:8px">';
  html += _contentList([
    { jp: "すごい！", meaning: "Tuyệt vời! Ghê quá!", example: "Phổ biến trong mọi anime" },
    { jp: "やばい！", meaning: "Nguy hiểm / Tuyệt vời (slang)", example: "Youth slang, dùng cả tích cực lẫn tiêu cực" },
    { jp: "なるほど", meaning: "Ra vậy / À hiểu rồi", example: "Khi hiểu điều gì đó" },
    { jp: "まさか！", meaning: "Không thể nào!", example: "Bất ngờ, shock" },
    { jp: "がんばって！", meaning: "Cố lên!", example: "Encourage ai đó" },
    { jp: "うそ！", meaning: "Nói dóc! / Không thể tin!", example: "Bất ngờ nhẹ" },
    { jp: "ちくしょう！", meaning: "Chết tiệt!", example: "Tức giận (hơi thô, dùng trong manga)" },
    { jp: "しょうがない", meaning: "Không có cách nào khác", example: "Chấp nhận hoàn cảnh" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeAnimePhrases() {
  _clOv("animephrases-overlay");
}
function openProverbDeep() {
  var ol = _ov("proverbdeep-overlay");
  var html = _hdr("Tục ngữ Nhật", "📜", "closeProverbDeep");
  html += '<div style="padding:8px">';
  var proverbs = [
    { jp: "七転び八起き", reading: "ななころびやおき", meaning: "Ngã 7 lần, đứng 8 lần", origin: "Tinh thần kiên cường của người Nhật" },
    { jp: "花より団子", reading: "はなよりだんご", meaning: "Thực tế hơn vẻ đẹp", origin: "Bánh dango ngon hơn ngắm hoa" },
    { jp: "石の上にも三年", reading: "いしのうえにもさんねん", meaning: "Kiên nhẫn sẽ thành công", origin: "Ngồi trên đá 3 năm, đá cũng ấm" },
    { jp: "一期一会", reading: "いちごいちえ", meaning: "Mỗi cuộc gặp là duy nhất", origin: "Từ trà đạo: trân trọng khoảnh khắc" },
    { jp: "猿も木から落ちる", reading: "さるもきからおちる", meaning: "Khỉ cũng té cây", origin: "Ai cũng có lúc sai" }
  ];
  proverbs.forEach(function(p) {
    html += `<div style="background:var(--card-bg);padding:10px;border-radius:6px;margin:6px 0;cursor:pointer" onclick="speak('` + esc(p.jp).replace(/'/g, "\\'") + `')">`;
    html += '<div style="font-size:1.2em;font-weight:700">' + esc(p.jp) + " 🔊</div>";
    html += '<div style="font-size:0.8em;color:var(--text-secondary)">' + esc(p.reading) + "</div>";
    html += '<div style="font-size:0.9em;margin:4px 0">' + esc(p.meaning) + "</div>";
    html += '<div style="font-size:0.8em;color:var(--text-muted)">💡 ' + esc(p.origin) + "</div></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeProverbDeep() {
  _clOv("proverbdeep-overlay");
}
function openKanjiEtymology() {
  var ol = _ov("kanjietymology-overlay");
  var html = _hdr("Chữ Hán: Nguồn gốc", "📖", "closeKanjiEtymology");
  html += '<div style="padding:8px">';
  var stories = [
    { kanji: "山", meaning: "Núi", story: "Hình 3 đỉnh núi nhọn — tượng hình từ hình vẽ núi cổ đại" },
    { kanji: "川", meaning: "Sông", story: "3 nét dọc — hình dòng nước chảy giữa 2 bờ" },
    { kanji: "木", meaning: "Cây", story: "Hình cây: thân ở giữa, cành 2 bên, rễ ở dưới" },
    { kanji: "休", meaning: "Nghỉ", story: "Người (人) tựa vào cây (木) → nghỉ ngơi" },
    { kanji: "明", meaning: "Sáng", story: "Mặt trời (日) + mặt trăng (月) = sáng" },
    { kanji: "森", meaning: "Rừng", story: "3 cây (木) = rừng rậm" },
    { kanji: "男", meaning: "Nam", story: "Ruộng (田) + sức (力) = đàn ông làm ruộng" }
  ];
  stories.forEach(function(s) {
    html += '<div style="display:flex;gap:10px;background:var(--card-bg);padding:10px;border-radius:6px;margin:5px 0;align-items:center">';
    html += `<div style="font-size:clamp(1.8em,8vw,2.5em);font-weight:700;min-width:40px;text-align:center;cursor:pointer" onclick="speak(' ` + esc(s.kanji).replace(/'/g, "\\'") + ` ')">` + esc(s.kanji) + "</div>";
    html += '<div><div style="font-weight:700">' + esc(s.meaning) + '</div><div style="font-size:0.8em;color:var(--text-muted)">' + esc(s.story) + "</div></div></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeKanjiEtymology() {
  _clOv("kanjietymology-overlay");
}
function openGrammarStories() {
  var ol = _ov("grammarstories-overlay");
  var html = _hdr("Grammar qua truyện ngắn", "📖", "closeGrammarStories");
  html += '<div style="padding:8px">';
  var stories = [
    { grammar: "〜たことがある", story: "田中さんは富士山に登ったことがあります。でも、一回だけです。「とても大変でした。でも、頂上からの景色はきれいでした」と言いました。", highlight: "〜たことがある = đã từng" },
    { grammar: "〜ながら", story: "毎朝、音楽を聞きながら朝ごはんを食べます。電車の中では、本を読みながら日本語を勉強します。", highlight: "〜ながら = vừa… vừa…" },
    { grammar: "〜てしまう", story: "宿題を忘れてしまいました。先生に怒られてしまいました。「すみません」と言いましたが、もう遅かったです。", highlight: "〜てしまう = đã lỡ / xong mất" },
    { grammar: "〜ようにする", story: "医者に「毎日野菜を食べるようにしてください」と言われました。それから、毎朝サラダを食べるようにしています。一か月で体重が2キロ減りました。", highlight: "〜ようにする = cố gắng (làm)" },
    { grammar: "〜ことにする", story: "来月JLPTがあるので、毎日二時間勉強することにしました。テレビを見る時間を減らして、漢字の練習をしています。", highlight: "〜ことにする = quyết định (làm)" }
  ];
  stories.forEach(function(s) {
    html += '<div style="background:var(--card-bg);padding:10px;border-radius:6px;margin:8px 0">';
    html += '<div style="font-weight:700;color:var(--accent);margin-bottom:6px">' + esc(s.grammar) + "</div>";
    html += '<div style="font-size:0.95em;line-height:1.8">' + esc(s.story) + "</div>";
    html += '<div style="font-size:0.8em;color:var(--success);margin-top:4px">💡 ' + esc(s.highlight) + "</div></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeGrammarStories() {
  _clOv("grammarstories-overlay");
}
function openDialogueLib() {
  var ol = _ov("dialogue-overlay");
  var dialogues = [
    { title: "🏪 Ở combini", lines: [
      { role: "店員", jp: "いらっしゃいませ。", vi: "Xin mời." },
      { role: "客", jp: "これをお願いします。", vi: "Cho tôi cái này." },
      { role: "店員", jp: "280円になります。", vi: "Tất cả 280 yên." },
      { role: "客", jp: "カードで払えますか。", vi: "Trả bằng thẻ được không?" },
      { role: "店員", jp: "はい、どうぞ。", vi: "Vâng, mời ạ." }
    ] },
    { title: "🚉 Hỏi đường", lines: [
      { role: "A", jp: "すみません、東京駅はどこですか。", vi: "Xin lỗi, ga Tokyo ở đâu?" },
      { role: "B", jp: "まっすぐ行って、右に曲がってください。", vi: "Đi thẳng rồi rẽ phải." },
      { role: "A", jp: "どのくらいかかりますか。", vi: "Mất bao lâu?" },
      { role: "B", jp: "歩いて10分くらいです。", vi: "Đi bộ khoảng 10 phút." },
      { role: "A", jp: "ありがとうございます。", vi: "Cảm ơn ạ." }
    ] },
    { title: "🏥 Ở bệnh viện", lines: [
      { role: "受付", jp: "こんにちは。保険証はお持ちですか。", vi: "Xin chào. Bạn có thẻ bảo hiểm không?" },
      { role: "患者", jp: "はい、これです。", vi: "Vâng, đây ạ." },
      { role: "受付", jp: "少々お待ちください。", vi: "Vui lòng đợi một chút." },
      { role: "医者", jp: "どうしましたか。", vi: "Có chuyện gì?" },
      { role: "患者", jp: "昨日から頭が痛いです。", vi: "Từ hôm qua đau đầu." },
      { role: "医者", jp: "熱はありますか。", vi: "Có sốt không?" },
      { role: "患者", jp: "少しあります。37度5分です。", vi: "Hơi sốt, 37.5 độ." }
    ] },
    { title: "🍽️ Đặt bàn nhà hàng", lines: [
      { role: "店員", jp: "お電話ありがとうございます。", vi: "Cảm ơn đã gọi điện." },
      { role: "客", jp: "今晩、予約したいんですが。", vi: "Tôi muốn đặt bàn tối nay." },
      { role: "店員", jp: "何名様ですか。", vi: "Bao nhiêu người ạ?" },
      { role: "客", jp: "4人です。7時にお願いします。", vi: "4 người. Xin hẹn 7 giờ." },
      { role: "店員", jp: "禁煙席と喫煙席、どちらがよろしいですか。", vi: "Khu hút thuốc hay không hút thuốc?" },
      { role: "客", jp: "禁煙席でお願いします。", vi: "Khu không hút thuốc nhé." }
    ] },
    { title: "📮 Ở bưu điện", lines: [
      { role: "客", jp: "すみません、この荷物をベトナムに送りたいんですが。", vi: "Xin lỗi, tôi muốn gửi bưu kiện này đến Việt Nam." },
      { role: "局員", jp: "航空便と船便、どちらにしますか。", vi: "Đường hàng không hay đường biển?" },
      { role: "客", jp: "航空便はいくらですか。", vi: "Đường hàng không bao nhiêu?" },
      { role: "局員", jp: "重さによりますが、2000円くらいです。", vi: "Tùy trọng lượng, khoảng 2000 yên." },
      { role: "客", jp: "航空便でお願いします。", vi: "Đường hàng không nhé." },
      { role: "局員", jp: "こちらに住所を書いてください。", vi: "Viết địa chỉ vào đây." }
    ] }
  ];
  var d = dialogues[Math.floor(Math.random() * dialogues.length)];
  var html = _hdr("Dialogue Library", "💬", "closeDialogueLib");
  html += '<div style="padding:8px">';
  html += '<div style="font-weight:700;text-align:center;margin-bottom:8px">' + esc(d.title) + "</div>";
  d.lines.forEach(function(l) {
    html += '<div style="display:flex;gap:8px;padding:6px;margin:3px 0;background:var(--card-bg);border-radius:6px">';
    html += '<div style="min-width:30px;font-weight:700;font-size:0.8em;color:var(--accent)">' + esc(l.role) + "</div>";
    html += `<div style="cursor:pointer" onclick="speak('` + esc(l.jp).replace(/'/g, "\\'") + `')">`;
    html += '<div style="font-weight:700">' + esc(l.jp) + " 🔊</div>";
    html += '<div style="font-size:0.8em;color:var(--text-muted)">' + esc(l.vi) + "</div></div></div>";
  });
  html += '<button class="st-btn" onclick="openDialogueLib()" style="margin-top:8px;width:100%">🔄 Hội thoại khác</button>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeDialogueLib() {
  _clOv("dialogue-overlay");
}
function openReadingLib() {
  var ol = _ov("readinglib-overlay");
  var passages = [
    { title: "日本の春", text: "日本の春は三月から五月までです。桜の花が咲きます。みんなでお花見をします。公園でお弁当を食べたり、写真を撮ったりします。日本人にとって、春は一番好きな季節です。", level: "N5" },
    { title: "私の町", text: "私の町は東京から電車で一時間くらいのところにあります。小さい町ですが、きれいな川があります。夏には川で泳ぐことができます。最近、新しいショッピングモールもできました。住みやすい町です。", level: "N4" },
    { title: "日本のコンビニ", text: "日本のコンビニは24時間開いています。食べ物や飲み物だけでなく、公共料金の支払いや荷物の受け取りもできます。最近はイートインスペースもある店が増えました。外国人観光客にもとても便利です。", level: "N4" },
    { title: "日本の交通", text: "日本の電車はとても正確です。時刻表通りに来ます。朝と夕方のラッシュアワーはとても混みます。最近はICカードを使う人が多いです。切符を買わなくてもいいので、便利です。外国人にはJRパスという特別な切符もあります。", level: "N4" },
    { title: "私の夢", text: "私の夢は日本語の通訳になることです。高校の時、日本のドラマを見て日本語に興味を持ちました。大学で日本語を専攻して、来年日本に留学するつもりです。将来、ベトナムと日本の架け橋になりたいです。", level: "N4" }
  ];
  var p = passages[Math.floor(Math.random() * passages.length)];
  var html = _hdr("Reading Library", "📚", "closeReadingLib");
  html += '<div style="padding:12px">';
  html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><span style="font-weight:700;font-size:1.1em">' + esc(p.title) + '</span><span style="background:var(--accent);color:#fff;padding:2px 6px;border-radius:4px;font-size:0.75em">' + p.level + "</span></div>";
  html += '<div style="background:var(--card-bg);padding:12px;border-radius:6px;font-size:1.05em;line-height:2">' + esc(p.text) + "</div>";
  html += '<button class="st-btn" onclick="openReadingLib()" style="margin-top:8px;width:100%">🔄 Bài khác</button>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeReadingLib() {
  _clOv("readinglib-overlay");
}
function openListeningLib() {
  var ol = _ov("listeninglib-overlay");
  var passages = [
    { jp: "明日は日曜日です。天気がよかったら、公園に行きましょう。お弁当を持って行きませんか。", q: "Đề nghị gì?", ans: "Đi công viên, mang cơm hộp" },
    { jp: "すみません、この電車は新宿に止まりますか。いいえ、急行ですから、新宿には止まりません。次の各停に乗ってください。", q: "Nên làm gì?", ans: "Đợi chuyến tàu sau (各停)" },
    { jp: "来月から会社の近くに引っ越します。今のアパートは安いですが、会社まで一時間半もかかります。新しいところは少し高いですが、歩いて十分です。", q: "Lý do chuyển nhà?", ans: "Gần công ty hơn" },
    { jp: "今日は山田さんの誕生日パーティーです。場所はいつものレストランです。プレゼントは花を買いました。ケーキは田中さんが作ります。6時に駅で集合です。", q: "Ai làm bánh?", ans: "Tanaka-san" },
    { jp: "図書館の利用についてお知らせします。本は二週間借りることができます。一度に五冊までです。返す日を過ぎると、一日10円かかりますので、気をつけてください。", q: "Quá hạn thì sao?", ans: "Phạt 10 yên/ngày" }
  ];
  var p = passages[Math.floor(Math.random() * passages.length)];
  var html = _hdr("Listening Library", "🎧", "closeListeningLib");
  html += '<div style="padding:12px;text-align:center">';
  html += `<button class="st-btn primary" onclick="speak('` + esc(p.jp).replace(/'/g, "\\'") + `')" style="font-size:1.2em;margin:12px 0;padding:12px 24px">🔊 Nghe bài</button>`;
  html += '<div style="margin-top:12px;font-size:0.85em"><strong>❓ ' + esc(p.q) + "</strong></div>";
  html += '<div id="listen-ans" style="display:none;font-size:0.9em;color:var(--success);margin-top:6px">✅ ' + esc(p.ans) + "</div>";
  html += `<button class="st-btn" onclick="document.getElementById('listen-ans').style.display='block'" style="margin-top:8px">👀 Xem đáp án</button>`;
  html += '<button class="st-btn" onclick="openListeningLib()" style="margin-top:4px;width:100%">🔄 Bài khác</button>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeListeningLib() {
  _clOv("listeninglib-overlay");
}
function openHandwriting2() {
  var ol = _ov("handwriting-overlay");
  var html = _hdr("Luyện viết tay", "✍️", "closeHandwriting2");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.85em;margin-bottom:8px">Chọn bảng để luyện viết:</div>';
  var hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
  var katakana = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  html += '<div style="font-weight:700;color:var(--accent);margin-bottom:4px">ひらがな</div>';
  html += '<div style="display:flex;flex-wrap:wrap;gap:3px;margin-bottom:12px">';
  for (var i = 0; i < hiragana.length; i++) {
    html += `<span style="width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;background:var(--card-bg);border-radius:4px;font-size:1.1em;cursor:pointer" onclick="speak('` + hiragana[i] + `')">` + hiragana[i] + "</span>";
  }
  html += "</div>";
  html += '<div style="font-weight:700;color:var(--accent);margin-bottom:4px">カタカナ</div>';
  html += '<div style="display:flex;flex-wrap:wrap;gap:3px">';
  for (var j = 0; j < katakana.length; j++) {
    html += `<span style="width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;background:var(--card-bg);border-radius:4px;font-size:1.1em;cursor:pointer" onclick="speak('` + katakana[j] + `')">` + katakana[j] + "</span>";
  }
  html += "</div>";
  html += '<div style="font-size:0.75em;color:var(--text-muted);margin-top:8px">Nhấn chữ để nghe phát âm. Luyện viết trên giấy!</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeHandwriting2() {
  _clOv("handwriting-overlay");
}
function openVocabByTopic() {
  var ol = _ov("vocabtopic-overlay");
  var all = [];
  (S.vocab || []).forEach(function(s) {
    (s.entries || []).forEach(function(e) {
      all.push(e);
    });
  });
  var topics = {
    "🏠 Nhà cửa": ["家", "部屋", "台所", "庭", "窓", "ドア"],
    "🍔 Đồ ăn": ["ごはん", "パン", "魚", "肉", "野菜", "果物"],
    "🏫 Trường": ["学校", "先生", "学生", "教室", "宿題", "試験"],
    "🚃 Di chuyển": ["電車", "バス", "車", "自転車", "飛行機", "駅"],
    "👨‍👩‍👧 Gia đình": ["父", "母", "兄", "姉", "弟", "妹"]
  };
  var html = _hdr("Vocab theo Chủ đề", "📂", "closeVocabByTopic");
  html += '<div style="padding:8px">';
  Object.keys(topics).forEach(function(topic) {
    html += '<div style="margin:8px 0"><div style="font-weight:700;color:var(--accent)">' + topic + "</div>";
    topics[topic].forEach(function(w) {
      var found = all.find(function(e) {
        return e.word === w || (e.word || "").indexOf(w) >= 0;
      });
      html += `<span style="display:inline-block;background:var(--card-bg);padding:3px 8px;border-radius:4px;margin:2px;font-size:0.85em;cursor:pointer" onclick="speak('` + esc(w).replace(/'/g, "\\'") + `')">` + esc(w);
      if (found) html += ' <span style="font-size:0.75em;color:var(--text-muted)">' + esc(found.meaning || "") + "</span>";
      html += "</span>";
    });
    html += "</div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeVocabByTopic() {
  _clOv("vocabtopic-overlay");
}
function openGrammarUsageFreq() {
  var ol = _ov("grammarusage-overlay");
  var html = _hdr("Tần suất ngữ pháp đời thực", "📊", "closeGrammarUsageFreq");
  html += '<div style="padding:8px">';
  var patterns = [
    { pattern: "〜ている", freq: "★★★★★", usage: "Hành động đang tiếp diễn / trạng thái" },
    { pattern: "〜たい", freq: "★★★★★", usage: "Muốn (mong muốn)" },
    { pattern: "〜てください", freq: "★★★★★", usage: "Xin hãy…" },
    { pattern: "〜ことができる", freq: "★★★★☆", usage: "Có thể / Có khả năng" },
    { pattern: "〜たことがある", freq: "★★★★☆", usage: "Đã từng" },
    { pattern: "〜たら", freq: "★★★★☆", usage: "Nếu / Khi" },
    { pattern: "〜ながら", freq: "★★★☆☆", usage: "Vừa… vừa…" },
    { pattern: "〜そうだ", freq: "★★★☆☆", usage: "Có vẻ / Nghe nói" },
    { pattern: "〜ようにする", freq: "★★★☆☆", usage: "Cố gắng để…" },
    { pattern: "〜ばよかった", freq: "★★☆☆☆", usage: "Giá mà đã…" }
  ];
  patterns.forEach(function(p) {
    html += '<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:0.85em;border-bottom:1px solid var(--border)">';
    html += '<span style="font-weight:700">' + esc(p.pattern) + "</span>";
    html += '<span style="color:var(--warning)">' + p.freq + "</span></div>";
    html += '<div style="font-size:0.75em;color:var(--text-muted);padding:2px 0 4px">' + esc(p.usage) + "</div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeGrammarUsageFreq() {
  _clOv("grammarusage-overlay");
}
function openConversationPatterns() {
  var ol = _ov("convpatterns-overlay");
  var html = _hdr("Mẫu hội thoại phổ biến", "💬", "closeConversationPatterns");
  html += '<div style="padding:8px">';
  var patterns = [
    { situation: "Mời ai", jp: "〜ませんか / 〜ましょう", example: "映画を見ませんか。(Đi xem phim không?)" },
    { situation: "Xin phép", jp: "〜てもいいですか", example: "写真を撮ってもいいですか。(Chụp ảnh được không?)" },
    { situation: "Từ chối", jp: "ちょっと…", example: "ちょっと用事があって… (Tôi hơi có việc…)" },
    { situation: "Nhờ vả", jp: "〜てくれませんか", example: "手伝ってくれませんか。(Giúp tôi được không?)" },
    { situation: "Đề nghị", jp: "〜たほうがいい", example: "薬を飲んだほうがいいですよ。(Nên uống thuốc.)" },
    { situation: "Giải thích", jp: "〜んです", example: "頭が痛いんです。(Vì tôi bị đau đầu.)" }
  ];
  patterns.forEach(function(p) {
    html += '<div style="background:var(--card-bg);padding:8px;border-radius:6px;margin:5px 0">';
    html += '<div style="font-size:0.75em;color:var(--accent);font-weight:700">' + esc(p.situation) + "</div>";
    html += '<div style="font-weight:700">' + esc(p.jp) + "</div>";
    html += `<div style="font-size:0.85em;color:var(--text-muted);cursor:pointer" onclick="speak('` + esc(p.example.split("(")[0].trim()).replace(/'/g, "\\'") + `')">` + esc(p.example) + " 🔊</div></div>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeConversationPatterns() {
  _clOv("convpatterns-overlay");
}
function openN4Checklist() {
  var ol = _ov("n4checklist-overlay");
  var srs = getSRS();
  var bm = getBookmarks();
  var vocabCount = 0;
  (S.vocab || []).forEach(function(s) {
    vocabCount += (s.entries || []).length;
  });
  var kanjiCount = 0;
  (S.kanji || []).forEach(function(s) {
    kanjiCount += (s.entries || []).length;
  });
  var grammarCount = 0;
  (S.grammar || []).forEach(function(s) {
    grammarCount += (s.patterns || []).length;
  });
  var reviewed = Object.keys(srs).length;
  Object.keys(bm).length;
  var checks = [
    { item: "Học hết từ vựng N4", target: vocabCount, current: Math.min(reviewed, vocabCount) },
    { item: "Học hết kanji N4", target: kanjiCount, current: Math.min(Math.round(reviewed * 0.3), kanjiCount) },
    { item: "Học hết ngữ pháp N4", target: grammarCount, current: Math.min(Math.round(reviewed * 0.1), grammarCount) },
    { item: "Ôn tập SRS đều đặn", target: 100, current: Math.min(100, Math.round(reviewed / vocabCount * 100)) },
    { item: "Làm mock test ít nhất 3 lần", target: 3, current: Math.min(3, JSON.parse(safeGetItem("quizHistory") || "[]").filter(function(h) {
      return h.type && h.type.indexOf("mock") >= 0;
    }).length) },
    { item: "Streak 7 ngày liên tục", target: 7, current: Math.min(7, parseInt(safeGetItem("studyStreak") || "0", 10)) }
  ];
  var html = _hdr("N4 Complete Checklist ✅", "📋", "closeN4Checklist");
  html += '<div style="padding:8px">';
  checks.forEach(function(c) {
    var pct = Math.min(100, Math.round(c.current / c.target * 100));
    var done = pct >= 100;
    html += '<div style="padding:6px 0">';
    html += '<div style="display:flex;justify-content:space-between;font-size:0.85em"><span>' + (done ? "✅" : "⬜") + " " + esc(c.item) + '</span><span style="color:' + (done ? "var(--success)" : "var(--text-muted)") + '">' + pct + "%</span></div>";
    html += '<div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden"><div style="width:' + pct + "%;height:100%;background:" + (done ? "var(--success)" : "var(--accent)") + '"></div></div>';
    html += "</div>";
  });
  html += '<div style="font-size:0.8em;color:var(--text-muted);margin-top:8px;text-align:center">Hoàn thành tất cả để sẵn sàng thi N4! 💪</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeN4Checklist() {
  _clOv("n4checklist-overlay");
}
export {
  closeAdjNounColl,
  closeAdverbGuide,
  closeAnimePhrases,
  closeBlogReading,
  closeConversationPatterns,
  closeDialogueLib,
  closeDiaryTemplate,
  closeEmailTemplate2,
  closeGrammarStories,
  closeGrammarUsageFreq,
  closeHandwriting2,
  closeKanjiEtymology,
  closeListeningLib,
  closeN4Checklist,
  closeProverbDeep,
  closeReadingLib,
  closeSongLyrics,
  closeTransitions,
  closeVerbNounColl,
  closeVocabByTopic,
  openAdjNounColl,
  openAdverbGuide,
  openAnimePhrases,
  openBlogReading,
  openConversationPatterns,
  openDialogueLib,
  openDiaryTemplate,
  openEmailTemplate2,
  openGrammarStories,
  openGrammarUsageFreq,
  openHandwriting2,
  openKanjiEtymology,
  openListeningLib,
  openN4Checklist,
  openProverbDeep,
  openReadingLib,
  openSongLyrics,
  openTransitions,
  openVerbNounColl,
  openVocabByTopic
};
