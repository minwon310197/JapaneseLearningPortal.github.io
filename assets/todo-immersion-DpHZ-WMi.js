import { bK as esc, bB as shuffleArray } from "./feature-3d-CFvJkEt3.js";
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
function _topicHTML(title, icon, closeFn, vocab, dialogue, quiz) {
  var quizzes = Array.isArray(quiz) ? quiz : quiz ? [quiz] : [];
  var h = '<div class="mg-container">';
  h += '<div class="mg-header"><h3>' + icon + " " + esc(title) + '</h3><span class="mg-close" onclick="' + closeFn + '()">✕</span></div>';
  h += '<div style="font-weight:700;color:var(--accent);margin:8px 0">📝 Từ vựng</div>';
  vocab.forEach(function(v) {
    h += `<div style="display:flex;align-items:center;gap:6px;padding:5px 8px;background:var(--card-bg);border-radius:4px;margin-bottom:3px;cursor:pointer" onclick="speak('` + esc(v.jp).replace(/'/g, "\\'") + `')">`;
    h += '<span class="jp-font" style="font-weight:700">' + esc(v.jp) + "</span>";
    if (v.reading) h += '<span class="jp-font" style="color:var(--accent);font-size:0.82em">' + esc(v.reading) + "</span>";
    h += '<span style="color:var(--text-secondary);font-size:0.85em;margin-left:auto">' + esc(v.vi) + "</span></div>";
  });
  if (dialogue && dialogue.length > 0) {
    h += '<div style="font-weight:700;color:var(--grammar-accent);margin:12px 0 4px">💬 Hội thoại</div>';
    h += '<div style="background:var(--card-bg);border-radius:8px;padding:10px">';
    dialogue.forEach(function(line) {
      var speaker = line.speaker === "A" ? "👤" : "👨‍💼";
      h += '<div style="margin-bottom:6px"><span style="font-weight:700">' + speaker + " " + line.speaker + `:</span> <span class="jp-font" style="cursor:pointer" onclick="speak('` + esc(line.jp).replace(/'/g, "\\'") + `')">` + esc(line.jp) + "</span>";
      h += '<div style="color:var(--text-secondary);font-size:0.82em;padding-left:28px">' + esc(line.vi) + "</div></div>";
    });
    h += "</div>";
  }
  if (quizzes.length > 0) {
    h += '<div style="font-weight:700;margin:12px 0 4px">🧠 Quiz nhanh (' + quizzes.length + " câu)</div>";
    quizzes.forEach(function(qz, qi) {
      var qid = "tq-" + qi;
      h += '<div style="padding:8px;background:var(--card-bg);border-radius:6px;margin-bottom:6px">';
      h += '<div style="margin-bottom:6px"><b>' + (qi + 1) + ".</b> " + esc(qz.q) + "</div>";
      var opts = shuffleArray([...qz.opts]);
      opts.forEach(function(o) {
        h += '<button class="st-btn ' + qid + '-opt" onclick="this.disabled=true;' + (o === qz.a ? "this.classList.add('correct')" : "this.classList.add('wrong')") + ";document.querySelectorAll('." + qid + "-opt').forEach(function(b){b.disabled=true;if(b.getAttribute('data-val')==='" + esc(qz.a) + `')b.classList.add('correct')})" data-val="` + esc(o) + '" style="display:block;width:100%;margin-bottom:3px;text-align:left;padding:8px">' + esc(o) + "</button>";
      });
      h += "</div>";
    });
  }
  h += '<button class="st-btn" onclick="' + closeFn.replace("close", "open") + '()" style="margin-top:8px;width:100%">🔄 Tải lại</button>';
  h += "</div>";
  return h;
}
function openTopicRestaurant() {
  var ol = _ov("topic-rest-overlay");
  ol.innerHTML = _topicHTML(
    "Nhà hàng",
    "🍽️",
    "closeTopicRestaurant",
    [{ jp: "メニュー", reading: "めにゅー", vi: "thực đơn" }, { jp: "注文", reading: "ちゅうもん", vi: "gọi món" }, { jp: "お会計", reading: "おかいけい", vi: "tính tiền" }, { jp: "おすすめ", reading: "おすすめ", vi: "món giới thiệu" }, { jp: "お水", reading: "おみず", vi: "nước lọc" }, { jp: "お箸", reading: "おはし", vi: "đũa" }, { jp: "取り皿", reading: "とりざら", vi: "đĩa nhỏ" }, { jp: "美味しい", reading: "おいしい", vi: "ngon" }],
    [{ speaker: "A", jp: "すみません、メニューをお願いします。", vi: "Xin lỗi, cho tôi xem thực đơn." }, { speaker: "B", jp: "はい、どうぞ。", vi: "Vâng, mời bạn." }, { speaker: "A", jp: "これとこれをください。", vi: "Cho tôi cái này và cái này." }, { speaker: "B", jp: "かしこまりました。少々お待ちください。", vi: "Vâng ạ. Xin chờ một chút." }, { speaker: "A", jp: "お会計をお願いします。", vi: "Cho tôi tính tiền." }],
    [
      { q: "「お会計」nghĩa là gì?", a: "Tính tiền", opts: ["Tính tiền", "Gọi món", "Thực đơn", "Đũa"] },
      { q: "「注文」nghĩa là gì?", a: "Gọi món", opts: ["Gọi món", "Tính tiền", "Thực đơn", "Nước"] },
      { q: "「おすすめ」nghĩa là gì?", a: "Món giới thiệu", opts: ["Món giới thiệu", "Món tráng miệng", "Đũa", "Đĩa nhỏ"] }
    ]
  );
  ol.classList.add("active");
}
function closeTopicRestaurant() {
  _clOv("topic-rest-overlay");
}
function openTopicTravel() {
  var ol = _ov("topic-travel-overlay");
  ol.innerHTML = _topicHTML(
    "Du lịch",
    "✈️",
    "closeTopicTravel",
    [{ jp: "空港", reading: "くうこう", vi: "sân bay" }, { jp: "ホテル", reading: "ほてる", vi: "khách sạn" }, { jp: "観光", reading: "かんこう", vi: "tham quan" }, { jp: "パスポート", reading: "ぱすぽーと", vi: "hộ chiếu" }, { jp: "予約", reading: "よやく", vi: "đặt trước" }, { jp: "荷物", reading: "にもつ", vi: "hành lý" }, { jp: "チェックイン", reading: "ちぇっくいん", vi: "nhận phòng" }, { jp: "出発", reading: "しゅっぱつ", vi: "khởi hành" }],
    [{ speaker: "A", jp: "チェックインをお願いします。", vi: "Cho tôi nhận phòng." }, { speaker: "B", jp: "パスポートをお見せください。", vi: "Xin cho xem hộ chiếu." }, { speaker: "A", jp: "二泊です。", vi: "2 đêm ạ." }, { speaker: "B", jp: "三階の305号室です。", vi: "Phòng 305, tầng 3 ạ." }],
    [
      { q: "「予約」nghĩa là gì?", a: "Đặt trước", opts: ["Đặt trước", "Hủy", "Thanh toán", "Xác nhận"] },
      { q: "「出発」nghĩa là gì?", a: "Khởi hành", opts: ["Khởi hành", "Đặt phòng", "Hành lý", "Nhận phòng"] },
      { q: "「荷物」nghĩa là gì?", a: "Hành lý", opts: ["Hành lý", "Hộ chiếu", "Vé máy bay", "Sân bay"] }
    ]
  );
  ol.classList.add("active");
}
function closeTopicTravel() {
  _clOv("topic-travel-overlay");
}
function openTopicHospital() {
  var ol = _ov("topic-hospital-overlay");
  ol.innerHTML = _topicHTML(
    "Bệnh viện",
    "🏥",
    "closeTopicHospital",
    [{ jp: "病院", reading: "びょういん", vi: "bệnh viện" }, { jp: "医者", reading: "いしゃ", vi: "bác sĩ" }, { jp: "薬", reading: "くすり", vi: "thuốc" }, { jp: "熱", reading: "ねつ", vi: "sốt" }, { jp: "頭が痛い", reading: "あたまがいたい", vi: "đau đầu" }, { jp: "お腹が痛い", reading: "おなかがいたい", vi: "đau bụng" }, { jp: "風邪", reading: "かぜ", vi: "cảm" }, { jp: "保険証", reading: "ほけんしょう", vi: "thẻ bảo hiểm" }],
    [{ speaker: "A", jp: "どうしましたか。", vi: "Bạn bị sao vậy?" }, { speaker: "B", jp: "昨日から熱があります。", vi: "Từ hôm qua tôi bị sốt." }, { speaker: "A", jp: "他に症状はありますか。", vi: "Có triệu chứng nào khác không?" }, { speaker: "B", jp: "頭も痛いです。", vi: "Đầu cũng đau ạ." }, { speaker: "A", jp: "お薬を出しますね。", vi: "Tôi sẽ kê thuốc nhé." }],
    [
      { q: "「風邪」nghĩa là gì?", a: "Cảm", opts: ["Cảm", "Sốt", "Đau đầu", "Thuốc"] },
      { q: "「保険証」nghĩa là gì?", a: "Thẻ bảo hiểm", opts: ["Thẻ bảo hiểm", "Đơn thuốc", "Bệnh viện", "Bác sĩ"] },
      { q: "「熱」nghĩa là gì?", a: "Sốt", opts: ["Sốt", "Ho", "Đau bụng", "Đau lưng"] }
    ]
  );
  ol.classList.add("active");
}
function closeTopicHospital() {
  _clOv("topic-hospital-overlay");
}
function openTopicShopping() {
  var ol = _ov("topic-shop-overlay");
  ol.innerHTML = _topicHTML(
    "Mua sắm",
    "🛍️",
    "closeTopicShopping",
    [{ jp: "店員", reading: "てんいん", vi: "nhân viên" }, { jp: "サイズ", reading: "さいず", vi: "cỡ" }, { jp: "色", reading: "いろ", vi: "màu" }, { jp: "安い", reading: "やすい", vi: "rẻ" }, { jp: "高い", reading: "たかい", vi: "đắt" }, { jp: "割引", reading: "わりびき", vi: "giảm giá" }, { jp: "レシート", reading: "れしーと", vi: "hóa đơn" }, { jp: "試着", reading: "しちゃく", vi: "thử đồ" }],
    [{ speaker: "A", jp: "これのMサイズはありますか。", vi: "Cái này có size M không?" }, { speaker: "B", jp: "はい、こちらにあります。", vi: "Có ạ, ở đây." }, { speaker: "A", jp: "試着してもいいですか。", vi: "Tôi thử được không?" }, { speaker: "B", jp: "どうぞ。あちらが試着室です。", vi: "Được ạ. Phòng thử ở đằng kia." }],
    [
      { q: "「試着」nghĩa là gì?", a: "Thử đồ", opts: ["Thử đồ", "Mua", "Đổi", "Trả"] },
      { q: "「割引」nghĩa là gì?", a: "Giảm giá", opts: ["Giảm giá", "Tăng giá", "Hóa đơn", "Thử đồ"] },
      { q: "「レシート」nghĩa là gì?", a: "Hóa đơn", opts: ["Hóa đơn", "Vé", "Túi xách", "Thẻ"] }
    ]
  );
  ol.classList.add("active");
}
function closeTopicShopping() {
  _clOv("topic-shop-overlay");
}
function openTopicSchool() {
  var ol = _ov("topic-school-overlay");
  ol.innerHTML = _topicHTML(
    "Trường học",
    "🏫",
    "closeTopicSchool",
    [{ jp: "授業", reading: "じゅぎょう", vi: "tiết học" }, { jp: "先生", reading: "せんせい", vi: "thầy/cô" }, { jp: "教室", reading: "きょうしつ", vi: "lớp học" }, { jp: "宿題", reading: "しゅくだい", vi: "bài tập về nhà" }, { jp: "テスト", reading: "てすと", vi: "kiểm tra" }, { jp: "黒板", reading: "こくばん", vi: "bảng đen" }, { jp: "教科書", reading: "きょうかしょ", vi: "sách giáo khoa" }, { jp: "出席", reading: "しゅっせき", vi: "điểm danh" }],
    [{ speaker: "A", jp: "今日の宿題は何ですか。", vi: "Bài tập hôm nay là gì?" }, { speaker: "B", jp: "教科書の50ページを読んでください。", vi: "Đọc trang 50 sách giáo khoa." }, { speaker: "A", jp: "テストはいつですか。", vi: "Kiểm tra khi nào?" }, { speaker: "B", jp: "来週の金曜日です。", vi: "Thứ 6 tuần sau." }],
    [
      { q: "「宿題」nghĩa là gì?", a: "Bài tập về nhà", opts: ["Bài tập về nhà", "Kiểm tra", "Sách", "Tiết học"] },
      { q: "「出席」nghĩa là gì?", a: "Điểm danh", opts: ["Điểm danh", "Vắng mặt", "Kiểm tra", "Tốt nghiệp"] },
      { q: "「教科書」nghĩa là gì?", a: "Sách giáo khoa", opts: ["Sách giáo khoa", "Vở", "Từ điển", "Bút"] }
    ]
  );
  ol.classList.add("active");
}
function closeTopicSchool() {
  _clOv("topic-school-overlay");
}
function openTopicWork() {
  var ol = _ov("topic-work-overlay");
  ol.innerHTML = _topicHTML(
    "Nơi làm việc",
    "💼",
    "closeTopicWork",
    [{ jp: "会社", reading: "かいしゃ", vi: "công ty" }, { jp: "会議", reading: "かいぎ", vi: "họp" }, { jp: "上司", reading: "じょうし", vi: "sếp" }, { jp: "同僚", reading: "どうりょう", vi: "đồng nghiệp" }, { jp: "残業", reading: "ざんぎょう", vi: "làm thêm giờ" }, { jp: "出張", reading: "しゅっちょう", vi: "công tác" }, { jp: "報告", reading: "ほうこく", vi: "báo cáo" }, { jp: "締め切り", reading: "しめきり", vi: "hạn chót" }],
    [{ speaker: "A", jp: "お疲れ様です。会議は何時からですか。", vi: "Anh vất vả. Họp mấy giờ vậy?" }, { speaker: "B", jp: "三時からです。", vi: "3 giờ ạ." }, { speaker: "A", jp: "報告書はできましたか。", vi: "Báo cáo xong chưa?" }, { speaker: "B", jp: "はい、もう送りました。", vi: "Vâng, gửi rồi ạ." }],
    [
      { q: "「残業」nghĩa là gì?", a: "Làm thêm giờ", opts: ["Làm thêm giờ", "Nghỉ phép", "Công tác", "Họp"] },
      { q: "「締め切り」nghĩa là gì?", a: "Hạn chót", opts: ["Hạn chót", "Báo cáo", "Họp", "Lương"] },
      { q: "「出張」nghĩa là gì?", a: "Công tác", opts: ["Công tác", "Nghỉ phép", "Chuyển nhà", "Đi học"] }
    ]
  );
  ol.classList.add("active");
}
function closeTopicWork() {
  _clOv("topic-work-overlay");
}
function openTopicHome() {
  var ol = _ov("topic-home-overlay");
  ol.innerHTML = _topicHTML(
    "Ở nhà",
    "🏠",
    "closeTopicHome",
    [{ jp: "台所", reading: "だいどころ", vi: "nhà bếp" }, { jp: "居間", reading: "いま", vi: "phòng khách" }, { jp: "掃除", reading: "そうじ", vi: "dọn dẹp" }, { jp: "洗濯", reading: "せんたく", vi: "giặt quần áo" }, { jp: "料理", reading: "りょうり", vi: "nấu ăn" }, { jp: "お風呂", reading: "おふろ", vi: "bồn tắm" }, { jp: "布団", reading: "ふとん", vi: "chăn đệm" }, { jp: "エアコン", reading: "えあこん", vi: "điều hòa" }],
    [{ speaker: "A", jp: "ただいま！", vi: "Em về rồi!" }, { speaker: "B", jp: "おかえり。ご飯できたよ。", vi: "À về rồi. Cơm xong rồi đấy." }, { speaker: "A", jp: "手を洗ってから食べるね。", vi: "Rửa tay xong rồi ăn nhé." }, { speaker: "B", jp: "お風呂は後でいい？", vi: "Tắm sau được không?" }],
    [
      { q: "「掃除」nghĩa là gì?", a: "Dọn dẹp", opts: ["Dọn dẹp", "Nấu ăn", "Giặt đồ", "Tắm"] },
      { q: "「洗濯」nghĩa là gì?", a: "Giặt quần áo", opts: ["Giặt quần áo", "Dọn dẹp", "Nấu ăn", "Rửa bát"] },
      { q: "「台所」nghĩa là gì?", a: "Nhà bếp", opts: ["Nhà bếp", "Phòng khách", "Phòng ngủ", "Nhà tắm"] }
    ]
  );
  ol.classList.add("active");
}
function closeTopicHome() {
  _clOv("topic-home-overlay");
}
function openTopicTransport() {
  var ol = _ov("topic-transport-overlay");
  ol.innerHTML = _topicHTML(
    "Giao thông",
    "🚃",
    "closeTopicTransport",
    [{ jp: "駅", reading: "えき", vi: "nhà ga" }, { jp: "電車", reading: "でんしゃ", vi: "tàu điện" }, { jp: "バス停", reading: "ばすてい", vi: "trạm xe buýt" }, { jp: "切符", reading: "きっぷ", vi: "vé" }, { jp: "乗り換え", reading: "のりかえ", vi: "chuyển tàu" }, { jp: "片道", reading: "かたみち", vi: "một chiều" }, { jp: "往復", reading: "おうふく", vi: "khứ hồi" }, { jp: "改札口", reading: "かいさつぐち", vi: "cổng soát vé" }],
    [{ speaker: "A", jp: "すみません、東京駅はどう行きますか。", vi: "Xin lỗi, ga Tokyo đi thế nào?" }, { speaker: "B", jp: "次の駅で山手線に乗り換えてください。", vi: "Đổi sang tuyến Yamanote ở ga tiếp theo." }, { speaker: "A", jp: "片道いくらですか。", vi: "Vé một chiều bao nhiêu?" }, { speaker: "B", jp: "二百円です。", vi: "200 yên ạ." }],
    [
      { q: "「乗り換え」nghĩa là gì?", a: "Chuyển tàu", opts: ["Chuyển tàu", "Mua vé", "Xuống ga", "Đi bộ"] },
      { q: "「往復」nghĩa là gì?", a: "Khứ hồi", opts: ["Khứ hồi", "Một chiều", "Chuyến tàu", "Cổng soát vé"] },
      { q: "「改札口」nghĩa là gì?", a: "Cổng soát vé", opts: ["Cổng soát vé", "Quầy vé", "Trạm xe buýt", "Nhà ga"] }
    ]
  );
  ol.classList.add("active");
}
function closeTopicTransport() {
  _clOv("topic-transport-overlay");
}
function openTopicWeather() {
  var ol = _ov("topic-weather-overlay");
  ol.innerHTML = _topicHTML(
    "Thời tiết",
    "🌤️",
    "closeTopicWeather",
    [{ jp: "天気", reading: "てんき", vi: "thời tiết" }, { jp: "晴れ", reading: "はれ", vi: "nắng" }, { jp: "曇り", reading: "くもり", vi: "mây" }, { jp: "雨", reading: "あめ", vi: "mưa" }, { jp: "雪", reading: "ゆき", vi: "tuyết" }, { jp: "風", reading: "かぜ", vi: "gió" }, { jp: "暑い", reading: "あつい", vi: "nóng" }, { jp: "寒い", reading: "さむい", vi: "lạnh" }, { jp: "傘", reading: "かさ", vi: "ô/dù" }, { jp: "天気予報", reading: "てんきよほう", vi: "dự báo thời tiết" }],
    [{ speaker: "A", jp: "今日の天気はどうですか。", vi: "Thời tiết hôm nay thế nào?" }, { speaker: "B", jp: "午前は晴れですが、午後から雨が降るそうです。", vi: "Sáng nắng, nhưng chiều nghe nói sẽ mưa." }, { speaker: "A", jp: "傘を持っていったほうがいいですね。", vi: "Mang ô đi thì tốt nhỉ." }, { speaker: "B", jp: "台風が来るそうですよ。気をつけてください。", vi: "Nghe nói bão sắp đến. Hãy cẩn thận nhé." }, { speaker: "A", jp: "最近暑くなりましたね。夏が来ますね。", vi: "Dạo này nóng lên rồi nhỉ. Mùa hè đến rồi." }],
    [
      { q: "「天気予報」nghĩa là gì?", a: "Dự báo thời tiết", opts: ["Dự báo thời tiết", "Thời tiết", "Mây", "Mưa"] },
      { q: "「曇り」nghĩa là gì?", a: "Mây/âm u", opts: ["Mây/âm u", "Nắng", "Mưa", "Bão"] },
      { q: "「傘」nghĩa là gì?", a: "Ô/dù", opts: ["Ô/dù", "Áo mưa", "Mũ", "Giày"] }
    ]
  );
  ol.classList.add("active");
}
function closeTopicWeather() {
  _clOv("topic-weather-overlay");
}
function openTopicPostOffice() {
  var ol = _ov("topic-post-overlay");
  ol.innerHTML = _topicHTML(
    "Bưu điện",
    "📮",
    "closeTopicPostOffice",
    [{ jp: "郵便局", reading: "ゆうびんきょく", vi: "bưu điện" }, { jp: "手紙", reading: "てがみ", vi: "thư" }, { jp: "切手", reading: "きって", vi: "tem" }, { jp: "荷物", reading: "にもつ", vi: "bưu kiện" }, { jp: "送る", reading: "おくる", vi: "gửi" }, { jp: "届く", reading: "とどく", vi: "đến nơi" }, { jp: "速達", reading: "そくたつ", vi: "gửi nhanh" }, { jp: "住所", reading: "じゅうしょ", vi: "địa chỉ" }],
    [{ speaker: "A", jp: "この荷物をベトナムに送りたいです。", vi: "Tôi muốn gửi bưu kiện này về Việt Nam." }, { speaker: "B", jp: "船便ですか、航空便ですか。", vi: "Gửi đường biển hay đường hàng không?" }, { speaker: "A", jp: "航空便でお願いします。", vi: "Đường hàng không ạ." }, { speaker: "B", jp: "一週間ぐらいかかります。", vi: "Khoảng 1 tuần ạ." }],
    [
      { q: "「速達」nghĩa là gì?", a: "Gửi nhanh", opts: ["Gửi nhanh", "Gửi thường", "Tem", "Địa chỉ"] },
      { q: "「切手」nghĩa là gì?", a: "Tem", opts: ["Tem", "Thư", "Bưu kiện", "Phong bì"] },
      { q: "「届く」nghĩa là gì?", a: "Đến nơi", opts: ["Đến nơi", "Gửi đi", "Đặt hàng", "Nhận"] }
    ]
  );
  ol.classList.add("active");
}
function closeTopicPostOffice() {
  _clOv("topic-post-overlay");
}
export {
  closeTopicHome,
  closeTopicHospital,
  closeTopicPostOffice,
  closeTopicRestaurant,
  closeTopicSchool,
  closeTopicShopping,
  closeTopicTransport,
  closeTopicTravel,
  closeTopicWeather,
  closeTopicWork,
  openTopicHome,
  openTopicHospital,
  openTopicPostOffice,
  openTopicRestaurant,
  openTopicSchool,
  openTopicShopping,
  openTopicTransport,
  openTopicTravel,
  openTopicWeather,
  openTopicWork
};
