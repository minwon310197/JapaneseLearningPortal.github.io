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
function _hdr(title, icon, closeFn) {
  return '<div class="mg-container"><div class="mg-header"><h3>' + icon + " " + esc(title) + '</h3><span class="mg-close" onclick="' + closeFn + '()">✕</span></div>';
}
function _cultureCard(items) {
  var h = "";
  items.forEach(function(it) {
    h += '<div style="background:var(--card-bg);padding:10px;border-radius:6px;margin:6px 0">';
    if (it.jp) h += `<div style="font-size:1.1em;font-weight:700;cursor:pointer" onclick="speak('` + esc(it.jp).replace(/'/g, "\\'") + `')">` + esc(it.jp) + " 🔊</div>";
    if (it.reading) h += '<div style="font-size:0.85em;color:var(--text-secondary)">' + esc(it.reading) + "</div>";
    if (it.title) h += '<div style="font-weight:700;color:var(--accent)">' + esc(it.title) + "</div>";
    if (it.meaning) h += '<div style="font-size:0.85em">' + esc(it.meaning) + "</div>";
    if (it.note) h += '<div style="font-size:0.8em;color:var(--text-muted);margin-top:4px">💡 ' + esc(it.note) + "</div>";
    h += "</div>";
  });
  return h;
}
function openJPCultureGuide() {
  var ol = _ov("culture-overlay");
  var html = _hdr("Văn hóa Nhật Bản", "🗾", "closeJPCultureGuide");
  html += '<div style="padding:8px">';
  html += _cultureCard([
    { title: "おじぎ — Cúi chào", meaning: "15° chào thường, 30° chào lịch sự, 45° xin lỗi/cảm ơn sâu", note: "Cúi càng sâu = càng tôn trọng" },
    { title: "名刺交換 — Trao danh thiếp", meaning: "Đưa bằng 2 tay, nhận bằng 2 tay, đọc kỹ trước khi cất", note: "Không viết lên danh thiếp người khác" },
    { title: "靴を脱ぐ — Cởi giày", meaning: "Cởi giày khi vào nhà, trường, một số nhà hàng", note: "Luôn mang tất sạch" },
    { title: "いただきます — Trước khi ăn", meaning: "Nói trước khi ăn để cảm ơn người nấu & thức ăn", note: "Sau khi ăn nói ごちそうさまでした" },
    { title: "割り勘 — Chia tiền", meaning: "Chia đều tiền ăn uống khi đi nhóm", note: "Phổ biến giữa bạn bè, ít khi người Nhật mời" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeJPCultureGuide() {
  _clOv("culture-overlay");
}
function openSeasonalGreetings() {
  var ol = _ov("seasonal-overlay");
  var html = _hdr("Lời chào theo mùa", "🌸", "closeSeasonalGreetings");
  html += '<div style="padding:8px">';
  html += _cultureCard([
    { jp: "あけましておめでとうございます", reading: "Akemashite omedetou gozaimasu", meaning: "Chúc mừng năm mới", note: "Dùng từ 1/1 đến ~15/1" },
    { jp: "お花見に行きましょう", reading: "Ohanami ni ikimashou", meaning: "Đi ngắm hoa anh đào nhé", note: "Mùa xuân (3-4 tháng)" },
    { jp: "お中元", reading: "Ochuugen", meaning: "Quà tặng giữa năm (tháng 7)", note: "Tặng cho sếp, thầy cô, người giúp đỡ" },
    { jp: "お盆", reading: "Obon", meaning: "Lễ Vu Lan (tháng 8)", note: "Về quê thăm mộ tổ tiên" },
    { jp: "メリークリスマス", reading: "Merii Kurisumasu", meaning: "Giáng sinh vui vẻ", note: "Nhật kỷ niệm nhưng không phải ngày lễ chính thức" },
    { jp: "年賀状", reading: "Nengajou", meaning: "Thiệp chúc Tết", note: "Gửi trước 1/1 để đến đúng ngày đầu năm" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeSeasonalGreetings() {
  _clOv("seasonal-overlay");
}
function openVNMistakes() {
  var ol = _ov("vnmistakes-overlay");
  var html = _hdr("Lỗi thường gặp người Việt", "⚠️", "closeVNMistakes");
  html += '<div style="padding:8px">';
  html += _cultureCard([
    { title: "Nhầm つ/す", meaning: "Tiếng Việt không phân biệt tsu/su rõ", note: "つ = tsu (lưỡi chạm răng), す = su" },
    { title: "Nhầm ら行/la", meaning: "ら = ra (lưỡi cuộn nhẹ), không phải la", note: "Luyện flap R, giữa L và R" },
    { title: "Quên trợ từ", meaning: "Tiếng Việt không có trợ từ → hay quên は/が/を", note: "Học cụm: 水を飲む, 学校に行く" },
    { title: "Dùng sai です/ます", meaning: "Không phải tha hồ thêm です vào cuối câu", note: "Chỉ dùng sau danh từ/na-adj, không dùng sau i-adj" },
    { title: "Nhầm Hán-Việt", meaning: "勉強=miễn cưỡng (Hán-Việt) nhưng nghĩa JP=học", note: "Kiểm tra nghĩa JP thật trước khi đoán từ Hán-Việt" },
    { title: "Phát âm dài/ngắn", meaning: "おばさん(cô) vs おばあさん(bà): nguyên âm dài thay đổi nghĩa", note: "Luyện nghe và phân biệt kỹ" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeVNMistakes() {
  _clOv("vnmistakes-overlay");
}
function openFalseFriends() {
  var ol = _ov("falsefriends-overlay");
  var html = _hdr("False Friends VN-JP", "🔀", "closeFalseFriends");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.8em;color:var(--text-muted);margin-bottom:6px">Từ Hán-Việt trông giống nhưng nghĩa khác:</div>';
  html += _cultureCard([
    { jp: "勉強 (べんきょう)", meaning: "Hán-Việt: Miễn cưỡng → JP: Học tập", note: "Nghĩa hoàn toàn khác!" },
    { jp: "大丈夫 (だいじょうぶ)", meaning: "Hán-Việt: Đại trượng phu → JP: Ổn, không sao", note: "JP nghĩa nhẹ nhàng hơn" },
    { jp: "手紙 (てがみ)", meaning: "Hán-Việt: Thủ chỉ → JP: Thư (letter)", note: "Trung: 手紙 = giấy toilet!" },
    { jp: "新聞 (しんぶん)", meaning: "Hán-Việt: Tân văn → JP: Báo (newspaper)", note: "VN: Tin tức; JP: Tờ báo" },
    { jp: "走る (はしる)", meaning: "Hán-Việt: Tẩu → JP: Chạy", note: "Đúng nghĩa!" },
    { jp: "丈夫 (じょうぶ)", meaning: "Hán-Việt: Trượng phu → JP: Bền, chắc", note: "JP: mô tả đồ vật bền chắc" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeFalseFriends() {
  _clOv("falsefriends-overlay");
}
function openNumberSystems() {
  var ol = _ov("numbers-overlay");
  var html = _hdr("Hệ thống số Nhật", "🔢", "closeNumberSystems");
  html += '<div style="padding:8px">';
  html += '<div style="font-weight:700;color:var(--accent);margin:8px 0">和語 Wago (số thuần Nhật)</div>';
  [["ひとつ", "1"], ["ふたつ", "2"], ["みっつ", "3"], ["よっつ", "4"], ["いつつ", "5"], ["むっつ", "6"], ["ななつ", "7"], ["やっつ", "8"], ["ここのつ", "9"], ["とお", "10"]].forEach(function(n) {
    html += `<span style="display:inline-block;background:var(--card-bg);padding:4px 8px;border-radius:4px;margin:2px;font-size:0.85em;cursor:pointer" onclick="speak('` + esc(n[0]).replace(/'/g, "\\'") + `')">` + n[1] + ": " + n[0] + "</span>";
  });
  html += '<div style="font-weight:700;color:var(--accent);margin:12px 0 8px">漢語 Kango (số Hán)</div>';
  [["いち", "1"], ["に", "2"], ["さん", "3"], ["し/よん", "4"], ["ご", "5"], ["ろく", "6"], ["しち/なな", "7"], ["はち", "8"], ["く/きゅう", "9"], ["じゅう", "10"]].forEach(function(n) {
    html += `<span style="display:inline-block;background:var(--card-bg);padding:4px 8px;border-radius:4px;margin:2px;font-size:0.85em;cursor:pointer" onclick="speak('` + esc(n[0].split("/")[0]).replace(/'/g, "\\'") + `')">` + n[1] + ": " + n[0] + "</span>";
  });
  html += '<div style="font-weight:700;color:var(--accent);margin:12px 0 8px">助数詞 Counters</div>';
  html += _cultureCard([
    { jp: "〜人 (にん/り)", meaning: "Đếm người", note: "一人(ひとり), 二人(ふたり), 三人(さんにん)" },
    { jp: "〜枚 (まい)", meaning: "Đếm vật phẳng (giấy, áo, đĩa)", note: "" },
    { jp: "〜本 (ほん)", meaning: "Đếm vật dài (bút, chai, cây)", note: "一本(いっぽん), 三本(さんぼん)" },
    { jp: "〜匹 (ひき)", meaning: "Đếm động vật nhỏ", note: "一匹(いっぴき), 三匹(さんびき)" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeNumberSystems() {
  _clOv("numbers-overlay");
}
function openAddressFormat() {
  var ol = _ov("address-overlay");
  var html = _hdr("Địa chỉ Nhật Bản", "📬", "closeAddressFormat");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.85em;margin-bottom:8px">Địa chỉ Nhật viết từ LỚN → NHỎ:</div>';
  html += '<div style="background:var(--card-bg);padding:12px;border-radius:6px;font-size:0.9em;line-height:1.8">';
  html += "〒100-0001<br>東京都 (Tokyo-to) ← Tỉnh/Thành phố<br>千代田区 (Chiyoda-ku) ← Quận<br>";
  html += "千代田 (Chiyoda) ← Phường/Xã<br>1丁目2番3号 ← Số block, số nhà</div>";
  html += '<div style="font-size:0.8em;color:var(--text-muted);margin-top:8px">💡 〒 = mã bưu điện (zipcode)</div>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeAddressFormat() {
  _clOv("address-overlay");
}
function openJPCalendar() {
  var ol = _ov("jpcalendar-overlay");
  var html = _hdr("Lịch Nhật Bản", "📅", "closeJPCalendar");
  html += '<div style="padding:8px">';
  html += '<div style="font-weight:700;color:var(--accent);margin-bottom:6px">年号 Niên hiệu</div>';
  html += _cultureCard([
    { jp: "令和 (れいわ)", meaning: "2019–hiện tại", note: "2024 = 令和6年" },
    { jp: "平成 (へいせい)", meaning: "1989–2019", note: "" },
    { jp: "昭和 (しょうわ)", meaning: "1926–1989", note: "" },
    { jp: "大正 (たいしょう)", meaning: "1912–1926", note: "" },
    { jp: "明治 (めいじ)", meaning: "1868–1912", note: "近代日本の始まり" }
  ]);
  html += '<div style="font-weight:700;color:var(--accent);margin:8px 0 6px">月 Tháng</div>';
  var months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
  months.forEach(function(m, i) {
    html += `<span style="display:inline-block;background:var(--card-bg);padding:3px 6px;border-radius:4px;margin:2px;font-size:0.8em;cursor:pointer" onclick="speak('` + m + `')">` + (i + 1) + ": " + m + "</span>";
  });
  html += '<div style="font-weight:700;color:var(--accent);margin:8px 0 6px">曜日 Thứ</div>';
  [["日", "Chủ nhật"], ["月", "Thứ 2"], ["火", "Thứ 3"], ["水", "Thứ 4"], ["木", "Thứ 5"], ["金", "Thứ 6"], ["土", "Thứ 7"]].forEach(function(d) {
    html += `<span style="display:inline-block;background:var(--card-bg);padding:3px 8px;border-radius:4px;margin:2px;font-size:0.85em;cursor:pointer" onclick="speak('` + d[0] + `ようび')">` + d[0] + " " + d[1] + "</span>";
  });
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeJPCalendar() {
  _clOv("jpcalendar-overlay");
}
function openMoneyVocab() {
  var ol = _ov("money-overlay");
  var html = _hdr("Tiền & Ngân hàng", "💰", "closeMoneyVocab");
  html += '<div style="padding:8px">';
  html += _cultureCard([
    { jp: "お金 (おかね)", meaning: "Tiền", note: "" },
    { jp: "円 (えん)", meaning: "Yên (đơn vị tiền)", note: "100円 = hyaku en" },
    { jp: "銀行 (ぎんこう)", meaning: "Ngân hàng", note: "" },
    { jp: "ATM", meaning: "Máy rút tiền", note: "ATMは何時までですか (ATM mở đến mấy giờ?)" },
    { jp: "両替 (りょうがえ)", meaning: "Đổi tiền", note: "両替所 = quầy đổi tiền" },
    { jp: "クレジットカード", meaning: "Thẻ tín dụng", note: "カードは使えますか = Dùng thẻ được không?" },
    { jp: "レシート", meaning: "Hóa đơn, biên lai", note: "レシートをください = Cho tôi biên lai" },
    { jp: "おつり", meaning: "Tiền thối", note: "おつりはいりません = Không cần thối" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeMoneyVocab() {
  _clOv("money-overlay");
}
function openMedicalVocab() {
  var ol = _ov("medical-overlay");
  var html = _hdr("Từ vựng y tế", "🏥", "closeMedicalVocab");
  html += '<div style="padding:8px">';
  html += _cultureCard([
    { jp: "病院 (びょういん)", meaning: "Bệnh viện", note: "" },
    { jp: "薬 (くすり)", meaning: "Thuốc", note: "薬局(やっきょく) = nhà thuốc" },
    { jp: "熱がある (ねつがある)", meaning: "Bị sốt", note: "" },
    { jp: "お腹が痛い (おなかがいたい)", meaning: "Đau bụng", note: "" },
    { jp: "頭が痛い (あたまがいたい)", meaning: "Đau đầu", note: "" },
    { jp: "アレルギー", meaning: "Dị ứng", note: "アレルギーがあります = Tôi bị dị ứng" },
    { jp: "保険証 (ほけんしょう)", meaning: "Thẻ bảo hiểm", note: "Luôn mang theo khi đi khám" },
    { jp: "処方箋 (しょほうせん)", meaning: "Đơn thuốc", note: "" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeMedicalVocab() {
  _clOv("medical-overlay");
}
function openEmergencyPhrases() {
  var ol = _ov("emergency-overlay");
  var html = _hdr("Câu khẩn cấp", "🚨", "closeEmergencyPhrases");
  html += '<div style="padding:8px">';
  html += '<div style="background:var(--danger);color:#fff;padding:8px;border-radius:6px;margin-bottom:8px;text-align:center;font-weight:700">🚨 Emergency: 110 (Police) / 119 (Fire/Ambulance)</div>';
  html += _cultureCard([
    { jp: "助けてください！", reading: "Tasukete kudasai!", meaning: "Xin hãy giúp tôi!", note: "" },
    { jp: "警察を呼んでください", reading: "Keisatsu wo yonde kudasai", meaning: "Xin gọi cảnh sát", note: "" },
    { jp: "救急車をお願いします", reading: "Kyuukyuusha wo onegai shimasu", meaning: "Xin gọi xe cấp cứu", note: "" },
    { jp: "火事です！", reading: "Kaji desu!", meaning: "Cháy rồi!", note: "" },
    { jp: "病気です", reading: "Byouki desu", meaning: "Tôi bị bệnh", note: "" },
    { jp: "パスポートをなくしました", reading: "Pasupooto wo nakushimashita", meaning: "Tôi mất hộ chiếu", note: "Liên hệ đại sứ quán" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeEmergencyPhrases() {
  _clOv("emergency-overlay");
}
function openTransportGuide() {
  var ol = _ov("transport-overlay");
  var html = _hdr("Giao thông Nhật", "🚃", "closeTransportGuide");
  html += '<div style="padding:8px">';
  html += _cultureCard([
    { jp: "切符 (きっぷ)", meaning: "Vé", note: "切符売り場 = quầy bán vé" },
    { jp: "ICカード", meaning: "Thẻ IC (Suica, Pasmo)", note: "Dùng cho tàu + bus + combini" },
    { jp: "乗り換え (のりかえ)", meaning: "Chuyển tàu", note: "乗り換えはどこですか = Chuyển ở đâu?" },
    { jp: "急行 (きゅうこう)", meaning: "Tàu nhanh", note: "Không dừng mọi trạm!" },
    { jp: "各停 (かくてい)", meaning: "Tàu dừng mọi trạm", note: "An toàn nhất cho người mới" },
    { jp: "終電 (しゅうでん)", meaning: "Chuyến cuối", note: "Thường 23:00-0:30" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeTransportGuide() {
  _clOv("transport-overlay");
}
function openFoodGuide() {
  var ol = _ov("food-overlay");
  var html = _hdr("Nhà hàng & Ẩm thực", "🍱", "closeFoodGuide");
  html += '<div style="padding:8px">';
  html += _cultureCard([
    { jp: "いただきます", meaning: "Nói trước khi ăn", note: "Bắt buộc!" },
    { jp: "ごちそうさまでした", meaning: "Nói sau khi ăn", note: "Cảm ơn bữa ăn" },
    { jp: "すみません、注文お願いします", meaning: "Xin cho gọi món", note: "" },
    { jp: "お会計お願いします", meaning: "Xin tính tiền", note: "" },
    { jp: "メニューをください", meaning: "Cho xin menu", note: "" },
    { jp: "アレルギーがあります", meaning: "Tôi bị dị ứng", note: "Nói trước khi gọi món!" },
    { jp: "持ち帰り (もちかえり)", meaning: "Mang về", note: "" },
    { jp: "ここで食べます", meaning: "Ăn tại đây", note: "" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeFoodGuide() {
  _clOv("food-overlay");
}
function openShoppingPhrases() {
  var ol = _ov("shopping-overlay");
  var html = _hdr("Mua sắm", "🛍️", "closeShoppingPhrases");
  html += '<div style="padding:8px">';
  html += _cultureCard([
    { jp: "これはいくらですか", meaning: "Cái này bao nhiêu?", note: "" },
    { jp: "試着してもいいですか", reading: "Shichaku shitemo ii desu ka", meaning: "Tôi thử được không?", note: "" },
    { jp: "もう少し安くなりますか", meaning: "Có rẻ hơn được không?", note: "Dùng ở chợ, không dùng ở cửa hàng" },
    { jp: "Sサイズはありますか", meaning: "Có size S không?", note: "S/M/L/LL (Nhật dùng LL = XL)" },
    { jp: "免税 (めんぜい)", meaning: "Miễn thuế", note: "Tax free cho khách du lịch từ 5000¥" },
    { jp: "袋は要りますか", reading: "Fukuro wa irimasu ka", meaning: "Cần túi không?", note: "Túi nhựa mất phí ở Nhật" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeShoppingPhrases() {
  _clOv("shopping-overlay");
}
function openPhoneEmail() {
  var ol = _ov("phoneemail-overlay");
  var html = _hdr("Điện thoại & Email", "📞", "closePhoneEmail");
  html += '<div style="padding:8px">';
  html += '<div style="font-weight:700;color:var(--accent);margin-bottom:6px">📞 Gọi điện</div>';
  html += _cultureCard([
    { jp: "もしもし", meaning: "A-lô (chỉ dùng khi gọi điện)", note: "" },
    { jp: "〜さんはいらっしゃいますか", meaning: "〜 có ở đó không?", note: "Dùng lịch sự" },
    { jp: "伝言をお願いします", meaning: "Xin nhắn lại", note: "" },
    { jp: "番号を間違えました", meaning: "Tôi gọi nhầm số", note: "すみません、番号を間違えました" },
    { jp: "折り返しお電話ください", meaning: "Xin hãy gọi lại", note: "おりかえし = gọi lại" }
  ]);
  html += '<div style="font-weight:700;color:var(--accent);margin:8px 0 6px">📧 Email</div>';
  html += _cultureCard([
    { jp: "お疲れ様です", meaning: "Lời chào đầu email (đồng nghiệp)", note: "Bắt buộc trong email công việc" },
    { jp: "お世話になっております", meaning: "Xin kính chào (đối tác bên ngoài)", note: "" },
    { jp: "よろしくお願いいたします", meaning: "Kính mong được quan tâm", note: "Câu kết email chuẩn" },
    { jp: "添付ファイルをご確認ください", meaning: "Vui lòng xem file đính kèm", note: "添付(てんぷ) = đính kèm" },
    { jp: "ご返信お待ちしております", meaning: "Chờ đợi phản hồi của bạn", note: "Lịch sự, dùng kết thúc email" }
  ]);
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closePhoneEmail() {
  _clOv("phoneemail-overlay");
}
function openSelfIntro() {
  var ol = _ov("selfintro-overlay");
  var html = _hdr("Tự giới thiệu", "🙋", "closeSelfIntro");
  html += '<div style="padding:8px">';
  html += '<div style="font-size:0.85em;margin-bottom:8px">Mẫu 自己紹介 (じこしょうかい):</div>';
  var lines = [
    { jp: "はじめまして。", vi: "Xin chào (lần đầu gặp)." },
    { jp: "（名前）と申します。", vi: "Tôi tên là (tên)." },
    { jp: "ベトナムから来ました。", vi: "Tôi đến từ Việt Nam." },
    { jp: "（会社名）で働いています。", vi: "Tôi làm việc ở (tên công ty)." },
    { jp: "趣味は（趣味）です。", vi: "Sở thích của tôi là (sở thích)." },
    { jp: "日本語を勉強しています。", vi: "Tôi đang học tiếng Nhật." },
    { jp: "どうぞよろしくお願いします。", vi: "Xin hãy chiếu cố." }
  ];
  lines.forEach(function(l) {
    html += '<div style="display:flex;gap:8px;padding:6px;background:var(--card-bg);border-radius:4px;margin:3px 0;align-items:center">';
    html += `<span style="font-size:1em;cursor:pointer" onclick="speak('` + esc(l.jp).replace(/'/g, "\\'") + `')">🔊</span>`;
    html += '<div><div style="font-weight:700">' + esc(l.jp) + '</div><div style="font-size:0.8em;color:var(--text-muted)">' + esc(l.vi) + "</div></div></div>";
  });
  html += '<button class="st-btn" onclick="openSelfIntro()" style="margin-top:8px;width:100%">🔄 Tải lại</button>';
  html += "</div></div>";
  ol.innerHTML = html;
  ol.classList.add("active");
}
function closeSelfIntro() {
  _clOv("selfintro-overlay");
}
export {
  closeAddressFormat,
  closeEmergencyPhrases,
  closeFalseFriends,
  closeFoodGuide,
  closeJPCalendar,
  closeJPCultureGuide,
  closeMedicalVocab,
  closeMoneyVocab,
  closeNumberSystems,
  closePhoneEmail,
  closeSeasonalGreetings,
  closeSelfIntro,
  closeShoppingPhrases,
  closeTransportGuide,
  closeVNMistakes,
  openAddressFormat,
  openEmergencyPhrases,
  openFalseFriends,
  openFoodGuide,
  openJPCalendar,
  openJPCultureGuide,
  openMedicalVocab,
  openMoneyVocab,
  openNumberSystems,
  openPhoneEmail,
  openSeasonalGreetings,
  openSelfIntro,
  openShoppingPhrases,
  openTransportGuide,
  openVNMistakes
};
