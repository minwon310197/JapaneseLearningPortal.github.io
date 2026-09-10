import { r as reactExports, R as React, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-BbQ9A_1j.js";
import { b as stopSpeech, c as speakLongText, u as useAppStore } from "./index-BEJSIlFS.js";
import { u as useGrammarGameItems } from "./useGrammarQuiz-CkAk5tho.js";
import { A as AIExplainButton } from "./AIGameHelper-DJcZivzu.js";
import { S as SentenceBuildMode } from "./SentenceBuildMode-bjz57jFE.js";
import "./useDialogFocus-CowhWfi-.js";
import "./vendor-router-Dx6RIovR.js";
import "./empty-Bvm-mx50.js";
import "./HitPause-BapLYhfu.js";
import "./study-results-DtyGPqxP.js";
import "./quest-chains-CiwzmCpJ.js";
import "./registry-BAotxlgH.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./useAIKey-CpSw0zmN.js";
import "./client-wNJ1tNgU.js";
import "./api-BAg1LJRR.js";
import "./content-errors-D90Pz2ps.js";
const PARTICLE_QUESTIONS = [
  // ─── BASIC ───────────────────────────────────────────────────────────────
  {
    id: "p001",
    sentence: "わたし＿＿がくせいです。",
    answer: "は",
    distractors: ["が", "を", "に"],
    vi: "Tôi là học sinh.",
    grammar: "は — chủ đề câu",
    level: "basic"
  },
  {
    id: "p002",
    sentence: "ねこ＿＿います。",
    answer: "が",
    distractors: ["は", "を", "で"],
    vi: "Có con mèo.",
    grammar: "が — tồn tại / chủ ngữ",
    level: "basic"
  },
  {
    id: "p003",
    sentence: "みず＿＿のみます。",
    answer: "を",
    distractors: ["が", "は", "に"],
    vi: "Uống nước.",
    grammar: "を — tân ngữ trực tiếp",
    level: "basic"
  },
  {
    id: "p004",
    sentence: "がっこう＿＿いきます。",
    answer: "に",
    distractors: ["で", "を", "へ"],
    vi: "Đi đến trường.",
    grammar: "に — đích đến / phương hướng",
    level: "basic"
  },
  {
    id: "p005",
    sentence: "としょかん＿＿べんきょうします。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Học ở thư viện.",
    grammar: "で — nơi thực hiện hành động",
    level: "basic"
  },
  {
    id: "p006",
    sentence: "ともだち＿＿えいがをみます。",
    answer: "と",
    distractors: ["に", "で", "が"],
    vi: "Xem phim cùng bạn.",
    grammar: "と — cùng với",
    level: "basic"
  },
  {
    id: "p007",
    sentence: "にほん＿＿くるまです。",
    answer: "の",
    distractors: ["は", "が", "に"],
    vi: "Xe của Nhật.",
    grammar: "の — sở hữu / thuộc về",
    level: "basic"
  },
  {
    id: "p008",
    sentence: "えき＿＿あるきます。",
    answer: "へ",
    distractors: ["に", "で", "を"],
    vi: "Đi bộ về phía ga.",
    grammar: "へ — hướng về phía",
    level: "basic"
  },
  {
    id: "p009",
    sentence: "コーヒー＿＿のみます。",
    answer: "も",
    distractors: ["を", "は", "が"],
    vi: "Cũng uống cà phê.",
    grammar: "も — cũng, thêm vào",
    level: "basic"
  },
  {
    id: "p010",
    sentence: "ここ＿＿すわってください。",
    answer: "に",
    distractors: ["で", "を", "へ"],
    vi: "Hãy ngồi ở đây.",
    grammar: "に — vị trí tồn tại / điểm tiếp xúc",
    level: "basic"
  },
  {
    id: "p011",
    sentence: "バス＿＿かいしゃにいきます。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Đi làm bằng xe buýt.",
    grammar: "で — phương tiện di chuyển",
    level: "basic"
  },
  {
    id: "p012",
    sentence: "ははは まいにち コーヒー＿＿のみます。",
    answer: "を",
    distractors: ["が", "で", "に"],
    vi: "Mẹ uống cà phê mỗi ngày.",
    grammar: "を — tân ngữ trực tiếp",
    level: "basic"
  },
  {
    id: "p013",
    sentence: "あなた＿＿なまえはなんですか。",
    answer: "の",
    distractors: ["は", "が", "を"],
    vi: "Tên của bạn là gì?",
    grammar: "の — sở hữu",
    level: "basic"
  },
  {
    id: "p014",
    sentence: "くじ＿＿かいしゃがはじまります。",
    answer: "に",
    distractors: ["で", "から", "まで"],
    vi: "Công ty bắt đầu lúc 9 giờ.",
    grammar: "に — thời điểm cụ thể",
    level: "basic"
  },
  {
    id: "p015",
    sentence: "やまだ＿＿せんせいはやさしいです。",
    answer: "さん",
    distractors: ["は", "が", "の"],
    vi: "Thầy Yamada rất tốt bụng.",
    grammar: "さん — danh hiệu lịch sự",
    level: "basic"
  },
  // ─── INTERMEDIATE ─────────────────────────────────────────────────────────
  {
    id: "p016",
    sentence: "ここ＿＿どうぞ。",
    answer: "から",
    distractors: ["まで", "に", "で"],
    vi: "Xin mời, bắt đầu từ đây.",
    grammar: "から — xuất phát điểm",
    level: "intermediate"
  },
  {
    id: "p017",
    sentence: "えき＿＿あるいて五分です。",
    answer: "から",
    distractors: ["まで", "に", "で"],
    vi: "Đi bộ từ ga 5 phút.",
    grammar: "から — điểm xuất phát (nơi chốn)",
    level: "intermediate"
  },
  {
    id: "p018",
    sentence: "ごご六じ＿＿しごとがおわります。",
    answer: "まで",
    distractors: ["から", "に", "で"],
    vi: "Công việc kết thúc đến 6 giờ chiều.",
    grammar: "まで — điểm kết thúc",
    level: "intermediate"
  },
  {
    id: "p019",
    sentence: "とうきょう＿＿おおさか＿＿しんかんせんでいきます。",
    answer: "から",
    distractors: ["に", "で", "へ"],
    vi: "Đi từ Tokyo đến Osaka bằng Shinkansen.",
    grammar: "から … まで — từ … đến …",
    level: "intermediate"
  },
  {
    id: "p020",
    sentence: "わたし＿＿おとうとはがくせいです。",
    answer: "の",
    distractors: ["が", "は", "と"],
    vi: "Em trai tôi là học sinh.",
    grammar: "の — sở hữu / quan hệ",
    level: "intermediate"
  },
  {
    id: "p021",
    sentence: "ねつ＿＿あるので、くすりをのみました。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Vì bị sốt nên tôi đã uống thuốc.",
    grammar: "が — chủ ngữ của mệnh đề subordinate",
    level: "intermediate"
  },
  {
    id: "p022",
    sentence: "かれ＿＿にほんご＿＿じょうずです。",
    answer: "は",
    distractors: ["が", "の", "を"],
    vi: "Anh ấy giỏi tiếng Nhật.",
    grammar: "は — chủ đề; が — đặc tính tốt/giỏi",
    level: "intermediate"
  },
  {
    id: "p023",
    sentence: "にほん＿＿きたのはことしです。",
    answer: "に",
    distractors: ["へ", "で", "を"],
    vi: "Năm nay tôi đến Nhật.",
    grammar: "に — đích đến (động từ đến)",
    level: "intermediate"
  },
  {
    id: "p024",
    sentence: "あの山＿＿たかいです。",
    answer: "は",
    distractors: ["が", "も", "を"],
    vi: "Ngọn núi đó cao.",
    grammar: "は — chủ đề câu miêu tả tính chất",
    level: "intermediate"
  },
  {
    id: "p025",
    sentence: "たなか＿＿ほん＿＿よみながら、コーヒーをのんでいます。",
    answer: "さん",
    distractors: ["は", "が", "の"],
    vi: "Anh Tanaka vừa đọc sách vừa uống cà phê.",
    grammar: "ながら — làm hai việc đồng thời",
    level: "intermediate"
  },
  {
    id: "p026",
    sentence: "おんがく＿＿きき＿＿、うんどうします。",
    answer: "を",
    distractors: ["に", "で", "が"],
    vi: "Vừa nghe nhạc vừa tập thể dục.",
    grammar: "を — tân ngữ; ながら — đồng thời",
    level: "intermediate"
  },
  {
    id: "p027",
    sentence: "あめ＿＿ふっているのに、でかけました。",
    answer: "が",
    distractors: ["は", "を", "で"],
    vi: "Dù trời đang mưa nhưng vẫn ra ngoài.",
    grammar: "が — chủ ngữ; のに — dù vậy mà",
    level: "intermediate"
  },
  {
    id: "p028",
    sentence: "この仕事＿＿できるのはあなた＿＿けです。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Chỉ có bạn mới có thể làm được công việc này.",
    grammar: "が — chủ ngữ; だけ — chỉ",
    level: "intermediate"
  },
  {
    id: "p029",
    sentence: "あの店＿＿あついラーメン＿＿たべました。",
    answer: "で",
    distractors: ["に", "が", "へ"],
    vi: "Tôi đã ăn ramen nóng ở tiệm đó.",
    grammar: "で — địa điểm thực hiện hành động",
    level: "intermediate"
  },
  {
    id: "p030",
    sentence: "りんご＿＿みかん＿＿すきです。",
    answer: "も",
    distractors: ["を", "が", "と"],
    vi: "Tôi thích cả táo lẫn quýt.",
    grammar: "も … も — cả … lẫn …",
    level: "intermediate"
  },
  {
    id: "p031",
    sentence: "どこ＿＿いってもいいです。",
    answer: "へ",
    distractors: ["に", "で", "が"],
    vi: "Đi đâu cũng được.",
    grammar: "へ — hướng (bất kỳ hướng nào)",
    level: "intermediate"
  },
  {
    id: "p032",
    sentence: "かれ＿＿えいご＿＿フランスご＿＿はなせます。",
    answer: "は",
    distractors: ["が", "も", "を"],
    vi: "Anh ấy nói được cả tiếng Anh lẫn tiếng Pháp.",
    grammar: "も … も — cả … lẫn …",
    level: "intermediate"
  },
  // ─── ADVANCED ─────────────────────────────────────────────────────────────
  {
    id: "p033",
    sentence: "かれ＿＿ほうが、わたし＿＿より上手です。",
    answer: "の",
    distractors: ["が", "は", "を"],
    vi: "Anh ấy giỏi hơn tôi.",
    grammar: "より — so sánh hơn",
    level: "advanced"
  },
  {
    id: "p034",
    sentence: "あめ＿＿ふる＿＿、かさをもってきた。",
    answer: "が",
    distractors: ["は", "で", "を"],
    vi: "Vì trời sẽ mưa nên tôi mang ô theo.",
    grammar: "ので — lý do / nguyên nhân",
    level: "advanced"
  },
  {
    id: "p035",
    sentence: "びょうき＿＿な＿＿、しゅっせきしました。",
    answer: "なの",
    distractors: ["ので", "のに", "なのに"],
    vi: "Dù bị ốm nhưng vẫn đi học.",
    grammar: "なのに — dù vậy (trái kỳ vọng)",
    level: "advanced"
  },
  {
    id: "p036",
    sentence: "よる おそい＿＿、でんわしてきた。",
    answer: "のに",
    distractors: ["ので", "から", "けど"],
    vi: "Dù đêm khuya mà vẫn gọi điện.",
    grammar: "のに — dù vậy (trái kỳ vọng)",
    level: "advanced"
  },
  {
    id: "p037",
    sentence: "この問題＿＿ついて、せつめいしてください。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Hãy giải thích về vấn đề này.",
    grammar: "について — về (chủ đề)",
    level: "advanced"
  },
  {
    id: "p039",
    sentence: "かいぎ＿＿おいて、あたらしいけいかくがはっぴょうされた。",
    answer: "に",
    distractors: ["で", "が", "を"],
    vi: "Trong cuộc họp, kế hoạch mới đã được công bố.",
    grammar: "において — trong (bối cảnh trang trọng)",
    level: "advanced"
  },
  {
    id: "p040",
    sentence: "てんき＿＿よって、けいかくがかわる。",
    answer: "に",
    distractors: ["で", "が", "を"],
    vi: "Kế hoạch thay đổi tùy theo thời tiết.",
    grammar: "によって — tùy theo, do (nguyên nhân/phương tiện)",
    level: "advanced"
  },
  {
    id: "p041",
    sentence: "この仕事＿＿かぎり、しんぱいしないでください。",
    answer: "に",
    distractors: ["が", "で", "を"],
    vi: "Chừng nào còn công việc này, đừng lo lắng.",
    grammar: "にかぎり — chừng nào còn",
    level: "advanced"
  },
  {
    id: "p042",
    sentence: "むずかしい問題＿＿かかわらず、あきらめなかった。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Dù vấn đề khó khăn, anh ấy không bỏ cuộc.",
    grammar: "にかかわらず — bất kể",
    level: "advanced"
  },
  {
    id: "p043",
    sentence: "しごと＿＿かえりに、スーパーによりました。",
    answer: "の",
    distractors: ["が", "を", "で"],
    vi: "Trên đường về sau khi làm việc, tôi ghé siêu thị.",
    grammar: "の帰りに — trên đường về từ",
    level: "advanced"
  },
  {
    id: "p044",
    sentence: "なん＿＿ためにべんきょうしているのですか。",
    answer: "の",
    distractors: ["が", "か", "を"],
    vi: "Bạn học để làm gì?",
    grammar: "のために — vì mục đích / vì lý do",
    level: "advanced"
  },
  {
    id: "p045",
    sentence: "この本＿＿よめば、日本語がうまくなります。",
    answer: "を",
    distractors: ["が", "に", "で"],
    vi: "Nếu đọc cuốn sách này, tiếng Nhật sẽ giỏi hơn.",
    grammar: "を読めば — nếu đọc",
    level: "advanced"
  },
  // ─── EXTRA / Mixed ─────────────────────────────────────────────────────────
  {
    id: "p046",
    sentence: "かれ＿＿えいご＿＿じょうずです。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Anh ấy giỏi tiếng Anh.",
    grammar: "が — chủ ngữ với tính từ năng lực (じょうず)",
    level: "intermediate"
  },
  {
    id: "p047",
    sentence: "あにはまいあさ ジョギング＿＿しています。",
    answer: "を",
    distractors: ["が", "に", "で"],
    vi: "Anh trai tôi mỗi sáng đi jogging.",
    grammar: "を — tân ngữ",
    level: "basic"
  },
  {
    id: "p048",
    sentence: "かのじょ＿＿いうことをよくきいてください。",
    answer: "の",
    distractors: ["が", "は", "を"],
    vi: "Hãy lắng nghe những gì cô ấy nói.",
    grammar: "の — danh hóa / thay thế that-clause",
    level: "intermediate"
  },
  {
    id: "p049",
    sentence: "わたし＿＿かれをあいしています。",
    answer: "は",
    distractors: ["が", "を", "も"],
    vi: "Tôi yêu anh ấy.",
    grammar: "は — chủ đề câu",
    level: "basic"
  },
  {
    id: "p050",
    sentence: "五時間＿＿ねましたが、まだねむいです。",
    answer: "も",
    distractors: ["は", "が", "で"],
    vi: "Tôi ngủ những 5 tiếng mà vẫn buồn ngủ.",
    grammar: "も — nhấn mạnh số lượng lớn",
    level: "intermediate"
  },
  {
    id: "p051",
    sentence: "むずかしい試験＿＿ごうかくしました。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi đã đậu kỳ thi khó.",
    grammar: "に合格する — đậu kỳ thi",
    level: "intermediate"
  },
  {
    id: "p052",
    sentence: "はは＿＿てがみ＿＿かきました。",
    answer: "に",
    distractors: ["へ", "を", "で"],
    vi: "Tôi đã viết thư cho mẹ.",
    grammar: "に — người nhận",
    level: "basic"
  },
  {
    id: "p053",
    sentence: "でんしゃ＿＿のって、えき＿＿いきます。",
    answer: "に",
    distractors: ["で", "を", "へ"],
    vi: "Lên tàu đi đến ga.",
    grammar: "に乗る — lên (phương tiện)",
    level: "intermediate"
  },
  {
    id: "p054",
    sentence: "あした＿＿テストがあります。",
    answer: "は",
    distractors: ["が", "に", "で"],
    vi: "Ngày mai có bài kiểm tra.",
    grammar: "は — chủ đề thời gian",
    level: "basic"
  },
  {
    id: "p055",
    sentence: "まいにち にほんご＿＿べんきょうしています。",
    answer: "を",
    distractors: ["が", "に", "で"],
    vi: "Mỗi ngày tôi học tiếng Nhật.",
    grammar: "を — tân ngữ của べんきょうする",
    level: "basic"
  },
  {
    id: "p056",
    sentence: "ふじ山＿＿のぼったことがありますか。",
    answer: "に",
    distractors: ["を", "で", "が"],
    vi: "Bạn đã từng leo núi Fuji chưa?",
    grammar: "に登る — leo lên (đỉnh)",
    level: "intermediate"
  },
  {
    id: "p057",
    sentence: "にほんご＿＿はなし＿＿、かれ＿＿はなしかけました。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Tôi bắt chuyện với anh ấy bằng tiếng Nhật.",
    grammar: "で — phương tiện ngôn ngữ",
    level: "intermediate"
  },
  {
    id: "p058",
    sentence: "このえいが＿＿みたことがありません。",
    answer: "は",
    distractors: ["が", "を", "に"],
    vi: "Tôi chưa từng xem bộ phim này.",
    grammar: "は — nhấn mạnh đối tượng phủ định",
    level: "intermediate"
  },
  {
    id: "p059",
    sentence: "あなた＿＿あえてよかったです。",
    answer: "に",
    distractors: ["と", "が", "を"],
    vi: "Thật vui khi được gặp bạn.",
    grammar: "に会う — gặp (ai đó)",
    level: "basic"
  },
  {
    id: "p060",
    sentence: "かれ＿＿しか、この仕事はできません。",
    answer: "に",
    distractors: ["が", "で", "を"],
    vi: "Chỉ anh ấy mới làm được công việc này.",
    grammar: "にしか — chỉ (người đó mới)",
    level: "advanced"
  },
  {
    id: "p061",
    sentence: "ともだち＿＿たのまれて、てつだいました。",
    answer: "に",
    distractors: ["から", "で", "が"],
    vi: "Được bạn nhờ nên tôi đã giúp.",
    grammar: "に頼まれる — được nhờ bởi",
    level: "advanced"
  },
  {
    id: "p062",
    sentence: "かのじょ＿＿こえ＿＿きいて、うれしくなった。",
    answer: "の",
    distractors: ["が", "は", "を"],
    vi: "Nghe giọng cô ấy tôi vui hơn.",
    grammar: "の — sở hữu",
    level: "basic"
  },
  {
    id: "p063",
    sentence: "くに＿＿でた＿＿、もうじゅうねんになります。",
    answer: "を",
    distractors: ["に", "が", "で"],
    vi: "Đã 10 năm kể từ khi rời quê hương.",
    grammar: "を出る — rời khỏi (nơi chốn)",
    level: "advanced"
  },
  {
    id: "p064",
    sentence: "もっとはやく＿＿きてください。",
    answer: "に",
    distractors: ["が", "を", "で"],
    vi: "Hãy đến sớm hơn một chút.",
    grammar: "に来る — đến (nơi nào đó)",
    level: "basic"
  },
  {
    id: "p065",
    sentence: "せんせい＿＿しつもんしました。",
    answer: "に",
    distractors: ["を", "で", "が"],
    vi: "Tôi đã hỏi thầy giáo.",
    grammar: "に質問する — hỏi (ai đó)",
    level: "basic"
  },
  {
    id: "p066",
    sentence: "かぜ＿＿ひいてしまいました。",
    answer: "を",
    distractors: ["が", "に", "で"],
    vi: "Tôi đã bị cảm lạnh.",
    grammar: "を引く — bị (bệnh)",
    level: "intermediate"
  },
  {
    id: "p067",
    sentence: "なつやすみ＿＿にほん＿＿いくつもりです。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Kỳ nghỉ hè tôi định đi Nhật.",
    grammar: "に — đích đến của ý định",
    level: "intermediate"
  },
  {
    id: "p068",
    sentence: "もし雨＿＿ふれば、いえにいます。",
    answer: "が",
    distractors: ["は", "を", "で"],
    vi: "Nếu trời mưa, tôi ở nhà.",
    grammar: "が降れば — nếu trời mưa",
    level: "intermediate"
  },
  {
    id: "p069",
    sentence: "かれ＿＿まって、いっしょにいきましょう。",
    answer: "を",
    distractors: ["に", "で", "が"],
    vi: "Hãy chờ anh ấy và cùng nhau đi.",
    grammar: "を待つ — chờ (ai đó)",
    level: "basic"
  },
  {
    id: "p070",
    sentence: "そのけっか＿＿もとづいて、はんだんしました。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi đã phán đoán dựa trên kết quả đó.",
    grammar: "に基づく — dựa trên",
    level: "advanced"
  },
  {
    id: "p071",
    sentence: "バス＿＿おくれてしまいました。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi đã bị trễ xe buýt.",
    grammar: "に遅れる — trễ (giờ/phương tiện)",
    level: "basic"
  },
  {
    id: "p072",
    sentence: "あしたは どこ＿＿いきません。",
    answer: "へも",
    distractors: ["にも", "でも", "をも"],
    vi: "Ngày mai tôi sẽ không đi đâu cả.",
    grammar: "へも — cũng không (hướng đến)",
    level: "basic"
  },
  {
    id: "p073",
    sentence: "このケーキは わたし＿＿つくりました。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Chiếc bánh này do tôi làm.",
    grammar: "が — nhấn mạnh người thực hiện hành động",
    level: "basic"
  },
  {
    id: "p074",
    sentence: "ナイフ＿＿パンをきります。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Cắt bánh mì bằng dao.",
    grammar: "で — phương tiện/công cụ",
    level: "basic"
  },
  {
    id: "p075",
    sentence: "かれは クラス＿＿いちばんせがたかいです。",
    answer: "で",
    distractors: ["に", "は", "が"],
    vi: "Cậu ấy cao nhất trong lớp.",
    grammar: "で — trong phạm vi (so sánh nhất)",
    level: "intermediate"
  },
  {
    id: "p076",
    sentence: "さくら＿＿きれいにさいています。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Hoa anh đào đang nở đẹp.",
    grammar: "が — chủ ngữ của hiện tượng tự nhiên/tình trạng",
    level: "basic"
  },
  {
    id: "p077",
    sentence: "このへやは あつい＿＿、まどをあけましょう。",
    answer: "から",
    distractors: ["ので", "のに", "けど"],
    vi: "Phòng này nóng nên hãy mở cửa sổ.",
    grammar: "から — lý do chủ quan (kèm lời mời/đề nghị)",
    level: "intermediate"
  },
  {
    id: "p078",
    sentence: "あめ＿＿ふっています。",
    answer: "が",
    distractors: ["は", "を", "で"],
    vi: "Trời đang mưa.",
    grammar: "が — diễn tả hiện tượng tự nhiên",
    level: "basic"
  },
  {
    id: "p079",
    sentence: "いっしゅうかん＿＿さんかい、テニスをします。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi chơi tennis 3 lần một tuần.",
    grammar: "に — tỷ lệ/tần suất",
    level: "basic"
  },
  {
    id: "p080",
    sentence: "ともだち＿＿プレゼントをあげます。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi tặng quà cho bạn.",
    grammar: "に — đối tượng tiếp nhận (người nhận)",
    level: "basic"
  },
  {
    id: "p081",
    sentence: "せんせい＿＿ほめられました。",
    answer: "に",
    distractors: ["から", "を", "で"],
    vi: "Tôi được giáo viên khen.",
    grammar: "に — người thực hiện hành động (trong câu bị động)",
    level: "intermediate"
  },
  {
    id: "p082",
    sentence: "きょうは いそがしい＿＿、あしたにしてください。",
    answer: "ので",
    distractors: ["から", "のに", "けど"],
    vi: "Hôm nay tôi bận nên xin hãy để ngày mai.",
    grammar: "ので — lý do khách quan/lịch sự",
    level: "intermediate"
  },
  {
    id: "p083",
    sentence: "にほんのせいかつ＿＿なれましたか。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Bạn đã quen với cuộc sống ở Nhật chưa?",
    grammar: "に慣れる — quen với",
    level: "intermediate"
  },
  {
    id: "p084",
    sentence: "わたしは いぬ＿＿こわいです。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Tôi sợ chó.",
    grammar: "が — đối tượng của cảm xúc (sợ, ghét, thích)",
    level: "basic"
  },
  {
    id: "p085",
    sentence: "としょかんのまえ＿＿こうえんがあります。",
    answer: "に",
    distractors: ["で", "を", "へ"],
    vi: "Trước thư viện có một công viên.",
    grammar: "に — vị trí tồn tại",
    level: "basic"
  },
  {
    id: "p086",
    sentence: "こうえん＿＿さんぽします。",
    answer: "を",
    distractors: ["に", "で", "が"],
    vi: "Đi dạo trong công viên.",
    grammar: "を — không gian di chuyển qua",
    level: "intermediate"
  },
  {
    id: "p087",
    sentence: "そらをとり＿＿とんでいます。",
    answer: "が",
    distractors: ["を", "に", "で"],
    vi: "Chim đang bay trên trời.",
    grammar: "が — chủ ngữ của động từ",
    level: "basic"
  },
  {
    id: "p088",
    sentence: "そら＿＿とりがとんでいます。",
    answer: "を",
    distractors: ["に", "で", "が"],
    vi: "Chim đang bay trên trời.",
    grammar: "を — không gian di chuyển qua",
    level: "intermediate"
  },
  {
    id: "p089",
    sentence: "あに＿＿カメラをかりました。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi mượn máy ảnh từ anh trai (hoặc: から).",
    grammar: "に (hoặc から) — nguồn cung cấp / mượn từ ai",
    level: "basic"
  },
  {
    id: "p090",
    sentence: "１２じ＿＿ねました。",
    answer: "に",
    distractors: ["で", "から", "まで"],
    vi: "Tôi đã ngủ lúc 12 giờ.",
    grammar: "に — thời điểm cụ thể",
    level: "basic"
  },
  {
    id: "p091",
    sentence: "スーパー＿＿かいものをします。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Tôi mua sắm ở siêu thị.",
    grammar: "で — Nơi chốn xảy ra hành động",
    level: "basic"
  },
  {
    id: "p092",
    sentence: "あした、だれ＿＿きますか。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Ngày mai, ai sẽ đến?",
    grammar: "が — Chủ ngữ mang từ để hỏi (nghi vấn từ)",
    level: "basic"
  },
  {
    id: "p093",
    sentence: "えんぴつ＿＿かいてください。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Hãy viết bằng bút chì.",
    grammar: "で — Phương tiện, công cụ",
    level: "basic"
  },
  {
    id: "p094",
    sentence: "わたしは コーヒー＿＿いいです。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Tôi thì chọn cà phê (là được).",
    grammar: "が — Sự lựa chọn",
    level: "intermediate"
  },
  {
    id: "p095",
    sentence: "やまださん＿＿あいました。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi đã gặp anh Yamada.",
    grammar: "に会う — Gặp ai đó",
    level: "basic"
  },
  {
    id: "p096",
    sentence: "でんしゃ＿＿のります。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Lên tàu điện.",
    grammar: "に乗る — Lên phương tiện",
    level: "basic"
  },
  {
    id: "p097",
    sentence: "でんしゃ＿＿おります。",
    answer: "を",
    distractors: ["に", "で", "が"],
    vi: "Xuống tàu điện.",
    grammar: "を降りる — Xuống phương tiện",
    level: "basic"
  },
  {
    id: "p098",
    sentence: "みち＿＿わたります。",
    answer: "を",
    distractors: ["に", "で", "が"],
    vi: "Băng qua đường.",
    grammar: "を渡る — Đi ngang qua không gian",
    level: "basic"
  },
  {
    id: "p099",
    sentence: "あさ、７じ＿＿おきます。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi thức dậy lúc 7 giờ sáng.",
    grammar: "に — Thời điểm",
    level: "basic"
  },
  {
    id: "p100",
    sentence: "かぜ＿＿がっこうをやすみました。",
    answer: "で",
    distractors: ["に", "から", "が"],
    vi: "Vì cảm cúm nên tôi nghỉ học.",
    grammar: "で — Nguyên nhân, lý do",
    level: "intermediate"
  },
  {
    id: "p101",
    sentence: "このカメラは とうきょう＿＿かいました。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Tôi mua máy ảnh này ở Tokyo.",
    grammar: "で — Nơi chốn hành động",
    level: "basic"
  },
  {
    id: "p102",
    sentence: "にほんご＿＿はなします。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Nói chuyện bằng tiếng Nhật.",
    grammar: "で — Phương tiện, ngôn ngữ",
    level: "basic"
  },
  {
    id: "p103",
    sentence: "かみ＿＿なまえをかきます。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Viết tên lên giấy.",
    grammar: "に書く — Bề mặt tiếp xúc",
    level: "basic"
  },
  {
    id: "p104",
    sentence: "はこのなか＿＿りんごがあります。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Trong hộp có quả táo.",
    grammar: "に — Nơi tồn tại (với あります/います)",
    level: "basic"
  },
  {
    id: "p105",
    sentence: "りんご＿＿３つあります。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Có 3 quả táo.",
    grammar: "が — Chủ ngữ của sự tồn tại",
    level: "basic"
  },
  {
    id: "p106",
    sentence: "すずきさん＿＿ききました。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi đã hỏi anh Suzuki.",
    grammar: "に聞く — Hỏi ai đó",
    level: "basic"
  },
  {
    id: "p107",
    sentence: "１じかん＿＿やすみましょう。",
    answer: "ぐらい",
    distractors: ["ごろ", "しか", "まで"],
    vi: "Hãy nghỉ khoảng 1 tiếng.",
    grammar: "ぐらい — Khoảng thời gian",
    level: "basic"
  },
  {
    id: "p108",
    sentence: "あしたは １０じ＿＿にきます。",
    answer: "ごろ",
    distractors: ["ぐらい", "しか", "まで"],
    vi: "Ngày mai tôi sẽ đến lúc khoảng 10 giờ.",
    grammar: "ごろ — Khoảng thời điểm",
    level: "basic"
  },
  {
    id: "p109",
    sentence: "５ふん＿＿まちなさい。",
    answer: "だけ",
    distractors: ["しか", "でも", "ごろ"],
    vi: "Hãy chờ đúng 5 phút thôi.",
    grammar: "だけ — Chỉ, đúng giới hạn (đi với câu khẳng định)",
    level: "intermediate"
  },
  {
    id: "p110",
    sentence: "５ふん＿＿まちません。",
    answer: "しか",
    distractors: ["だけ", "でも", "ごろ"],
    vi: "Tôi chỉ chờ 5 phút thôi (không hơn).",
    grammar: "しか〜ない — Chỉ (đi với phủ định)",
    level: "intermediate"
  },
  {
    id: "p111",
    sentence: "あめ＿＿ふっても、いきます。",
    answer: "が",
    distractors: ["は", "を", "で"],
    vi: "Dù trời có mưa, tôi vẫn đi.",
    grammar: "が — Chủ ngữ trong vế phụ",
    level: "intermediate"
  },
  {
    id: "p112",
    sentence: "テストは あした＿＿あさってです。",
    answer: "か",
    distractors: ["と", "や", "も"],
    vi: "Kỳ thi là ngày mai hoặc ngày kia.",
    grammar: "か — Hoặc là",
    level: "basic"
  },
  {
    id: "p113",
    sentence: "このへや＿＿はいってはいけません。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Không được vào phòng này.",
    grammar: "に入る — Đi vào một không gian",
    level: "basic"
  },
  {
    id: "p114",
    sentence: "ともだち＿＿てがみをもらいました。",
    answer: "から",
    distractors: ["で", "を", "が"],
    vi: "Tôi nhận được thư từ bạn (hoặc に).",
    grammar: "から — Điểm xuất phát, nguồn gốc",
    level: "basic"
  },
  {
    id: "p115",
    sentence: "かばん＿＿つくえのうえです。",
    answer: "は",
    distractors: ["が", "を", "に"],
    vi: "Cặp sách ở trên bàn.",
    grammar: "は — Chủ đề câu",
    level: "basic"
  },
  {
    id: "p116",
    sentence: "わたし＿＿りんごをたべました。",
    answer: "が",
    distractors: ["に", "を", "で"],
    vi: 'CHÍNH TÔI là người đã ăn quả táo (trả lời cho "Ai đã ăn?").',
    grammar: "が — Nhấn mạnh chủ ngữ",
    level: "basic"
  },
  {
    id: "p117",
    sentence: "はこのなか＿＿なにもありません。",
    answer: "には",
    distractors: ["では", "をも", "がも"],
    vi: "Trong hộp không có gì cả.",
    grammar: "には — Nhấn mạnh vị trí phủ định",
    level: "intermediate"
  },
  {
    id: "p118",
    sentence: "きのう、ぎんこう＿＿いきました。",
    answer: "へ",
    distractors: ["を", "で", "が"],
    vi: "Hôm qua tôi đã đi đến ngân hàng.",
    grammar: "へ — Hướng di chuyển (giống に)",
    level: "basic"
  },
  {
    id: "p119",
    sentence: "わたしは さかな＿＿きらいです。",
    answer: "が",
    distractors: ["を", "に", "で"],
    vi: "Tôi ghét cá.",
    grammar: "が — Đối tượng của tính từ cảm xúc",
    level: "basic"
  },
  {
    id: "p120",
    sentence: "にほんに １ねん＿＿います。",
    answer: "ぐらい",
    distractors: ["ごろ", "しか", "から"],
    vi: "Tôi ở Nhật khoảng 1 năm.",
    grammar: "ぐらい — Khoảng (thời lượng)",
    level: "basic"
  },
  {
    id: "p121",
    sentence: "１０じ＿＿１２じまで べんきょうします。",
    answer: "から",
    distractors: ["に", "で", "が"],
    vi: "Tôi học từ 10 giờ đến 12 giờ.",
    grammar: "から〜まで — Từ... đến...",
    level: "basic"
  },
  {
    id: "p122",
    sentence: "とうきょう＿＿おおさかまで しんかんせんでいきます。",
    answer: "から",
    distractors: ["に", "で", "が"],
    vi: "Từ Tokyo đến Osaka đi bằng Shinkansen.",
    grammar: "から〜まで — Khoảng cách địa lý",
    level: "basic"
  },
  {
    id: "p123",
    sentence: "コーヒー＿＿のみますか。",
    answer: "でも",
    distractors: ["にも", "がも", "しかも"],
    vi: "Bạn có uống (cỡ như) cà phê không?",
    grammar: "でも — Gợi ý ví dụ tiêu biểu",
    level: "intermediate"
  },
  {
    id: "p124",
    sentence: "かれは にほんご＿＿はなせます。",
    answer: "が",
    distractors: ["を", "に", "で"],
    vi: "Anh ấy có thể nói tiếng Nhật.",
    grammar: "が — Đối tượng của động từ khả năng",
    level: "intermediate"
  },
  {
    id: "p125",
    sentence: "じしょ＿＿わすれました。",
    answer: "を",
    distractors: ["が", "に", "で"],
    vi: "Tôi để quên từ điển rồi.",
    grammar: "を忘れる — Quên vật gì đó",
    level: "basic"
  },
  {
    id: "p126",
    sentence: "でんしゃ＿＿かばんでわすれました。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi quên cặp trên tàu điện.",
    grammar: "に忘れる — Quên (để lại) ở đâu",
    level: "intermediate"
  },
  {
    id: "p127",
    sentence: "ちち＿＿とけいをくれました。",
    answer: "が",
    distractors: ["に", "を", "で"],
    vi: "Bố đã cho tôi đồng hồ.",
    grammar: "がくれる — Ai đó cho mình (chủ ngữ là người cho)",
    level: "basic"
  },
  {
    id: "p128",
    sentence: "わたしは ちち＿＿とけいをもらいました。",
    answer: "に",
    distractors: ["が", "を", "で"],
    vi: "Tôi nhận được đồng hồ từ bố.",
    grammar: "にもらう — Nhận từ ai",
    level: "basic"
  },
  {
    id: "p129",
    sentence: "せんせい＿＿しつもんします。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Đặt câu hỏi cho giáo viên.",
    grammar: "に質問する — Hỏi ai",
    level: "basic"
  },
  {
    id: "p130",
    sentence: "いっしょ＿＿いきませんか。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Cùng đi không?",
    grammar: "一緒に — Cùng nhau (phó từ)",
    level: "basic"
  },
  {
    id: "p131",
    sentence: "はこのなか＿＿ いぬがいます。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Trong hộp có con chó.",
    grammar: "に — Nơi tồn tại",
    level: "basic"
  },
  {
    id: "p132",
    sentence: "つくえのうえ＿＿ しゃしんをかざります。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Trang trí ảnh trên bàn.",
    grammar: "に飾る — Trang trí lên đâu",
    level: "intermediate"
  },
  {
    id: "p133",
    sentence: "かべ＿＿ ポスターがはってあります。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Trên tường có dán poster.",
    grammar: "に〜てある — Trạng thái tồn tại do con người tạo ra",
    level: "intermediate"
  },
  {
    id: "p134",
    sentence: "あに＿＿かかれたえです。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Bức tranh do anh trai vẽ.",
    grammar: "に〜れる (bị động) — Người thực hiện hành động",
    level: "intermediate"
  },
  {
    id: "p135",
    sentence: "かぞく＿＿でんわをかけます。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi gọi điện thoại cho gia đình.",
    grammar: "に電話をかける — Gọi điện cho ai",
    level: "basic"
  },
  {
    id: "p136",
    sentence: "パソコン＿＿こわれました。",
    answer: "が",
    distractors: ["を", "に", "で"],
    vi: "Máy tính bị hỏng.",
    grammar: "が〜 tự động từ — Mô tả hiện tượng, sự việc",
    level: "basic"
  },
  {
    id: "p137",
    sentence: "わたしは ケーキ＿＿つくります。",
    answer: "を",
    distractors: ["が", "に", "で"],
    vi: "Tôi làm bánh kem.",
    grammar: "を〜 tha động từ — Đối tượng của hành động",
    level: "basic"
  },
  {
    id: "p138",
    sentence: "へやを きれい＿＿そうじします。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Dọn dẹp phòng sạch sẽ.",
    grammar: "Tính từ na + に — Chức năng như phó từ",
    level: "basic"
  },
  {
    id: "p139",
    sentence: "かみを みじかく＿＿きります。",
    answer: "✕ (không cần)",
    distractors: ["に", "で", "を"],
    vi: "Cắt tóc ngắn.",
    grammar: "Tính từ i (bỏ i + く) đứng trước động từ",
    level: "basic"
  },
  {
    id: "p140",
    sentence: "あのひと＿＿だれですか。",
    answer: "は",
    distractors: ["が", "を", "に"],
    vi: "Người kia là ai?",
    grammar: "は — Nhấn mạnh chủ đề",
    level: "basic"
  },
  {
    id: "p141",
    sentence: "やまださんは とうきょう＿＿すんでいます。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Anh Yamada đang sống ở Tokyo.",
    grammar: "に住む — Sống ở đâu",
    level: "basic"
  },
  {
    id: "p142",
    sentence: "かぜ＿＿あたまがいたいです。",
    answer: "で",
    distractors: ["に", "から", "が"],
    vi: "Vì cảm cúm nên tôi đau đầu.",
    grammar: "で — Lý do (danh từ hiện tượng)",
    level: "basic"
  },
  {
    id: "p143",
    sentence: "きょうは にちようび＿＿、がっこうはやすみです。",
    answer: "だから",
    distractors: ["から", "ので", "なのに"],
    vi: "Hôm nay là chủ nhật nên trường học nghỉ.",
    grammar: "だから — Vì là (danh từ)",
    level: "basic"
  },
  {
    id: "p144",
    sentence: "びょうき＿＿、かいしゃにいきます。",
    answer: "でも",
    distractors: ["から", "ので", "けど"],
    vi: "Dù bệnh nhưng tôi vẫn đến công ty.",
    grammar: "Danh từ + でも — Cho dù...",
    level: "intermediate"
  },
  {
    id: "p145",
    sentence: "このほんは わたし＿＿です。",
    answer: "の",
    distractors: ["が", "を", "に"],
    vi: "Quyển sách này là của tôi.",
    grammar: "の — Sở hữu",
    level: "basic"
  },
  {
    id: "p146",
    sentence: "いぬ＿＿ねこがすきです。",
    answer: "より",
    distractors: ["ほど", "から", "まで"],
    vi: "Tôi thích chó hơn mèo (Mèo là mốc so sánh).",
    grammar: "A は B より — A hơn B (hoặc ngược lại tùy câu)",
    level: "basic"
  },
  {
    id: "p147",
    sentence: "にほんご＿＿えいごほどむずかしくないです。",
    answer: "は",
    distractors: ["が", "を", "に"],
    vi: "Tiếng Nhật không khó bằng tiếng Anh.",
    grammar: "ほど〜ない — Không bằng...",
    level: "basic"
  },
  {
    id: "p148",
    sentence: "あのレストランは おいしい＿＿、やすいです。",
    answer: "し",
    distractors: ["から", "て", "で"],
    vi: "Nhà hàng kia vừa ngon vừa rẻ.",
    grammar: "〜し、〜し — Vừa... vừa... (liệt kê lý do/tính chất)",
    level: "basic"
  },
  {
    id: "p149",
    sentence: "かばん＿＿なかに ほんがあります。",
    answer: "の",
    distractors: ["が", "を", "に"],
    vi: "Trong cặp có sách.",
    grammar: "N1 の N2 (vị trí)",
    level: "basic"
  },
  {
    id: "p150",
    sentence: "このりんごは ３つ＿＿５００えんです。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Táo này 3 quả 500 yên.",
    grammar: "Số lượng + で — Số lượng gộp lại",
    level: "basic"
  }
];
function getQuestionsByLevel(level = "all") {
  if (level === "all") return PARTICLE_QUESTIONS;
  return PARTICLE_QUESTIONS.filter((q) => q.level === level);
}
function shuffle$3(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function buildOptions$2(question) {
  const opts = [question.answer, ...question.distractors].slice(0, 5);
  return shuffle$3(opts);
}
function ProgressBar({ current, total }) {
  const pct = total > 0 ? Math.round(current / total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-progress-wrap", "aria-label": `Câu ${current}/${total}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-progress-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-progress-fill", style: { width: `${pct}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-progress-label", children: [
      current,
      " / ",
      total
    ] })
  ] });
}
function SentenceDisplay({ sentence, selectedParticle, feedback, speaking, onSpeak }) {
  const parts = sentence.split("＿＿");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-sentence-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pd-sentence ${feedback ? `pd-sentence--${feedback}` : ""}`, lang: "ja", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-sentence-part", children: parts[0] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pd-sentence-blank ${selectedParticle ? "pd-sentence-blank--filled" : ""} ${feedback ? `pd-sentence-blank--${feedback}` : ""}`, children: selectedParticle || "＿＿" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-sentence-part", children: parts[1] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `n4-btn n4-btn-icon n4-btn-ghost n4-speaker-btn ${speaking ? "n4-speaking" : ""}`,
        onClick: onSpeak,
        title: "Nghe câu này",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-speaker-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", width: "24", height: "24", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", className: "n4-speaker-wave n4-wave-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", className: "n4-speaker-wave n4-wave-2" })
        ] }) })
      }
    )
  ] });
}
function ParticleChip({ particle, onClick, disabled, selected, feedback, isCorrectAnswer }) {
  const cls = [
    "pd-chip",
    disabled && !feedback ? "pd-chip--disabled" : "",
    feedback && isCorrectAnswer ? "pd-chip--correct" : "",
    feedback && selected && !isCorrectAnswer ? "pd-chip--wrong" : "",
    feedback && !selected && !isCorrectAnswer ? "pd-chip--dim" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      className: cls,
      onClick: () => !disabled && onClick(particle),
      disabled,
      lang: "ja",
      "aria-label": `Chọn trợ từ ${particle}`,
      children: particle
    }
  );
}
function FillDropMode({ questions, maxQuestions = 10, difficulty = "normal", onFinish }) {
  const pool = reactExports.useMemo(() => shuffle$3(questions).slice(0, maxQuestions), [questions, maxQuestions]);
  const [idx, setIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [score, setScore] = reactExports.useState(0);
  const [wrongCount, setWrongCount] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  const [history, setHistory] = reactExports.useState([]);
  const [speaking, setSpeaking] = React.useState(false);
  const readCtrlRef = React.useRef(null);
  React.useEffect(() => () => {
    var _a;
    (_a = readCtrlRef.current) == null ? void 0 : _a.cancel();
  }, []);
  const current = pool[idx];
  const options = reactExports.useMemo(() => current ? buildOptions$2(current) : [], [current]);
  const handleSpeak = reactExports.useCallback(() => {
    var _a;
    if (speaking) {
      (_a = readCtrlRef.current) == null ? void 0 : _a.cancel();
      readCtrlRef.current = null;
      stopSpeech();
      setSpeaking(false);
      return;
    }
    if (!current) return;
    setSpeaking(true);
    const textToRead = current.sentence.replace("＿＿", feedback === "correct" ? current.answer : selected || "＿＿");
    const ctrl = speakLongText(textToRead, { lang: "ja-JP", rate: 0.85 });
    readCtrlRef.current = ctrl;
    ctrl.promise.finally(() => {
      if (readCtrlRef.current === ctrl) readCtrlRef.current = null;
      setSpeaking(false);
    });
  }, [speaking, current, feedback, selected]);
  const handlePick = reactExports.useCallback((particle) => {
    if (feedback || !current) return;
    setSelected(particle);
    const isCorrect = particle === current.answer;
    setFeedback(isCorrect ? "correct" : "wrong");
    if (isCorrect) setScore((s) => s + 1);
    else setWrongCount((c) => c + 1);
    setHistory((h) => [...h, { q: current, chosen: particle, correct: isCorrect }]);
  }, [feedback, current]);
  const handleContinue = reactExports.useCallback(() => {
    setFeedback(null);
    setSelected(null);
    if (idx + 1 >= pool.length) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
    }
  }, [idx, pool.length]);
  if (!pool.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-empty", children: "Không có câu hỏi nào. Hãy thêm dữ liệu ngữ pháp!" });
  }
  if (done) {
    const pct = Math.round(score / pool.length * 100);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-ring", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 120 120", className: "pd-result-svg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "60", cy: "60", r: "50", strokeWidth: "8", className: "pd-result-ring-bg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "60",
              cy: "60",
              r: "50",
              strokeWidth: "8",
              className: "pd-result-ring-fill",
              strokeDasharray: `${2 * Math.PI * 50}`,
              strokeDashoffset: `${2 * Math.PI * 50 * (1 - pct / 100)}`
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-score-inner", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-result-pct", children: [
            pct,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-label", children: "Chính xác" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Đúng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: wrongCount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Sai" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: pool.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Tổng" })
        ] })
      ] }),
      history.filter((h) => !h.correct).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-review", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "pd-result-review-title", children: "📝 Câu cần ôn lại" }),
        history.filter((h) => !h.correct).map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-review-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-result-review-sentence", lang: "ja", children: h.q.sentence.replace("＿＿", `[${h.q.answer}]`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-review-meta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-result-review-wrong", children: [
              "Bạn chọn: ",
              h.chosen
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-result-review-correct", children: [
              "Đúng: ",
              h.q.answer
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-review-grammar", children: h.q.grammar })
          ] }),
          h.q.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-result-review-vi", children: h.q.vi })
        ] }, i))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "pd-result-retry", onClick: () => {
        setIdx(0);
        setScore(0);
        setWrongCount(0);
        setDone(false);
        setHistory([]);
        setSelected(null);
        setFeedback(null);
      }, children: "🔄 Chơi lại" }),
      onFinish && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "pd-result-finish", onClick: () => onFinish({ score, total: pool.length, pct }), children: "✅ Kết thúc" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-fill-drop", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { current: idx + 1, total: pool.length }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-level-badge pd-level-badge--fill", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-level-badge-icon", children: "🔤" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Điền trợ từ" }),
      current.level && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pd-level-tag pd-level-tag--${current.level}`, children: current.level })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pd-card ${feedback ? `pd-card--${feedback}` : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SentenceDisplay,
        {
          sentence: current.sentence,
          selectedParticle: selected,
          feedback,
          speaking,
          onSpeak: handleSpeak
        }
      ),
      current.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pd-card-vi", children: current.vi }),
      feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `pd-card-grammar pd-card-grammar--${feedback}`, children: [
        feedback === "correct" ? "✅" : "❌",
        " ",
        current.grammar
      ] }),
      feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pd-feedback-panel pd-feedback-panel--${feedback}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-feedback-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-feedback-answer", children: feedback === "correct" ? "🎉 Chính xác!" : `❌ Đáp án đúng: 「${current.answer}」` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIExplainButton,
            {
              question: current.sentence,
              answer: current.answer,
              userAnswer: selected,
              isCorrect: feedback === "correct",
              itemInfo: { meaning: current.grammar },
              questionId: current.id
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "pd-continue-btn",
            onClick: handleContinue,
            children: idx + 1 >= pool.length ? "✅ Xem kết quả" : "Tiếp tục →"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-chip-bank", role: "group", "aria-label": "Chọn trợ từ", children: options.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ParticleChip,
      {
        particle: p,
        onClick: handlePick,
        disabled: !!feedback,
        selected: p === selected,
        feedback,
        isCorrectAnswer: p === current.answer
      },
      p
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-inline-score", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-inline-score-correct", children: [
        "✅ ",
        score
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-inline-score-sep", children: "·" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-inline-score-wrong", children: [
        "❌ ",
        wrongCount
      ] })
    ] })
  ] });
}
const TIME_PER_QUESTION = 10;
const STREAK_THRESHOLD = 3;
function shuffle$2(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function buildOptions$1(question, count = 4) {
  const opts = shuffle$2([question.answer, ...question.distractors]).slice(0, count);
  if (!opts.includes(question.answer)) {
    opts[0] = question.answer;
  }
  return shuffle$2(opts);
}
function TimerRing({ timeLeft, total }) {
  const pct = timeLeft / total;
  const r = 22;
  const circ = 2 * Math.PI * r;
  const danger = timeLeft <= 3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-timer", "aria-label": `Còn ${timeLeft} giây`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "56", height: "56", viewBox: "0 0 56 56", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "28", r, strokeWidth: "4", className: "pd-timer-bg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "circle",
        {
          cx: "28",
          cy: "28",
          r,
          strokeWidth: "4",
          className: `pd-timer-fill ${danger ? "pd-timer-fill--danger" : ""}`,
          strokeDasharray: circ,
          strokeDashoffset: circ * (1 - pct),
          transform: "rotate(-90 28 28)"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pd-timer-num ${danger ? "pd-timer-num--danger" : ""}`, children: timeLeft })
  ] });
}
function StreakBadge({ streak }) {
  if (streak < STREAK_THRESHOLD) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-streak", "aria-label": `Streak ${streak}`, children: [
    "🔥 x",
    streak,
    " streak!"
  ] });
}
function QuickPickMode({ questions, maxQuestions = 10, difficulty = "normal", onFinish }) {
  var _a;
  const timePerQ = difficulty === "easy" ? 15 : difficulty === "hard" ? 6 : TIME_PER_QUESTION;
  const optCount = difficulty === "easy" ? 3 : difficulty === "hard" ? 5 : 4;
  const pool = reactExports.useMemo(() => shuffle$2(questions).slice(0, maxQuestions), [questions, maxQuestions]);
  const [idx, setIdx] = reactExports.useState(0);
  const [timeLeft, setTimeLeft] = reactExports.useState(timePerQ);
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [score, setScore] = reactExports.useState(0);
  const [bonusPoints, setBonusPoints] = reactExports.useState(0);
  const [streak, setStreak] = reactExports.useState(0);
  const [maxStreak, setMaxStreak] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  const [history, setHistory] = reactExports.useState([]);
  const timerRef = reactExports.useRef(null);
  const [speaking, setSpeaking] = reactExports.useState(false);
  const readCtrlRef = reactExports.useRef(null);
  reactExports.useEffect(() => () => {
    var _a2;
    (_a2 = readCtrlRef.current) == null ? void 0 : _a2.cancel();
  }, []);
  const current = pool[idx];
  const options = reactExports.useMemo(() => current ? buildOptions$1(current, optCount) : [], [current, optCount]);
  const handleSpeak = reactExports.useCallback(() => {
    var _a2;
    if (speaking) {
      (_a2 = readCtrlRef.current) == null ? void 0 : _a2.cancel();
      readCtrlRef.current = null;
      stopSpeech();
      setSpeaking(false);
      return;
    }
    if (!current) return;
    setSpeaking(true);
    const textToRead = current.sentence.replace("＿＿", feedback === "correct" || feedback === "timeout" ? current.answer : selected || "＿＿");
    const ctrl = speakLongText(textToRead, { lang: "ja-JP", rate: 0.85 });
    readCtrlRef.current = ctrl;
    ctrl.promise.finally(() => {
      if (readCtrlRef.current === ctrl) readCtrlRef.current = null;
      setSpeaking(false);
    });
  }, [speaking, current, feedback, selected]);
  reactExports.useEffect(() => {
    if (done || feedback) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          setFeedback("timeout");
          setStreak(0);
          setHistory((h) => [...h, { q: current, chosen: null, correct: false }]);
          setTimeout(() => {
            setFeedback(null);
            setSelected(null);
            setTimeLeft(timePerQ);
            if (idx + 1 >= pool.length) {
              setDone(true);
            } else {
              setIdx((i) => i + 1);
            }
          }, 1800);
          return 0;
        }
        return t - 1;
      });
    }, 1e3);
    return () => clearInterval(timerRef.current);
  }, [idx, done, feedback, current, pool.length, timePerQ]);
  const handleContinue = reactExports.useCallback(() => {
    setFeedback(null);
    setSelected(null);
    setTimeLeft(timePerQ);
    if (idx + 1 >= pool.length) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
    }
  }, [idx, pool.length, timePerQ]);
  const handlePick = reactExports.useCallback((particle) => {
    if (feedback || !current) return;
    clearInterval(timerRef.current);
    setSelected(particle);
    const isCorrect = particle === current.answer;
    const newStreak = isCorrect ? streak + 1 : 0;
    const speedBonus = isCorrect ? Math.max(0, Math.round(timeLeft / timePerQ * 5)) : 0;
    const streakBonus = newStreak >= STREAK_THRESHOLD ? 2 : 1;
    const pts = isCorrect ? (10 + speedBonus) * streakBonus : 0;
    setFeedback(isCorrect ? "correct" : "wrong");
    setStreak(newStreak);
    setMaxStreak((m) => Math.max(m, newStreak));
    if (isCorrect) {
      setScore((s) => s + pts);
      setBonusPoints((b) => b + speedBonus);
    }
    setHistory((h) => [...h, { q: current, chosen: particle, correct: isCorrect, pts }]);
  }, [feedback, current, streak, timeLeft, timePerQ]);
  if (!pool.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-empty", children: "Không có câu hỏi nào." });
  }
  if (done) {
    const correctCount = history.filter((h) => h.correct).length;
    const pct2 = Math.round(correctCount / pool.length * 100);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-ring", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 120 120", className: "pd-result-svg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "60", cy: "60", r: "50", strokeWidth: "8", className: "pd-result-ring-bg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "60",
              cy: "60",
              r: "50",
              strokeWidth: "8",
              className: "pd-result-ring-fill",
              strokeDasharray: `${2 * Math.PI * 50}`,
              strokeDashoffset: `${2 * Math.PI * 50 * (1 - pct2 / 100)}`
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-score-inner", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-result-pct", children: [
            pct2,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-label", children: "Chính xác" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Điểm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: bonusPoints }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Bonus tốc độ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: maxStreak }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Streak tối đa" })
        ] })
      ] }),
      history.filter((h) => !h.correct).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-review", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "pd-result-review-title", children: "📝 Câu cần ôn lại" }),
        history.filter((h) => !h.correct).map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-review-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-result-review-sentence", lang: "ja", children: h.q.sentence.replace("＿＿", `[${h.q.answer}]`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-review-meta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-review-wrong", children: h.chosen ? `Bạn chọn: ${h.chosen}` : "⏱ Hết giờ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-result-review-correct", children: [
              "Đúng: ",
              h.q.answer
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-review-grammar", children: h.q.grammar })
          ] }),
          h.q.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-result-review-vi", children: h.q.vi })
        ] }, i))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "pd-result-retry", onClick: () => {
        setIdx(0);
        setScore(0);
        setBonusPoints(0);
        setStreak(0);
        setMaxStreak(0);
        setDone(false);
        setHistory([]);
        setSelected(null);
        setFeedback(null);
        setTimeLeft(timePerQ);
      }, children: "🔄 Chơi lại" }),
      onFinish && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "pd-result-finish", onClick: () => onFinish({ score, total: pool.length, pct: pct2 }), children: "✅ Kết thúc" })
    ] });
  }
  const pct = pool.length > 0 ? Math.round(idx / pool.length * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-quick-pick", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-qp-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-progress-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-progress-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-progress-fill", style: { width: `${pct}%` } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-progress-label", children: [
          idx + 1,
          " / ",
          pool.length
        ] })
      ] }),
      !feedback && /* @__PURE__ */ jsxRuntimeExports.jsx(TimerRing, { timeLeft, total: timePerQ })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StreakBadge, { streak }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-qp-score", children: [
      "🏆 ",
      score,
      "pts"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-level-badge pd-level-badge--quick", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚡ Trắc nghiệm nhanh" }),
      current.level && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pd-level-tag pd-level-tag--${current.level}`, children: current.level })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pd-card pd-card--qp ${feedback ? `pd-card--${feedback}` : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-sentence-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-sentence", lang: "ja", children: current.sentence.split("＿＿").map((part, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-sentence-part", children: part }),
          i < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pd-sentence-blank ${selected ? "pd-sentence-blank--filled" : ""} ${feedback ? `pd-sentence-blank--${feedback}` : ""}`, children: selected || "＿＿" })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `n4-btn n4-btn-icon n4-btn-ghost n4-speaker-btn ${speaking ? "n4-speaking" : ""}`,
            onClick: handleSpeak,
            title: "Nghe câu này",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-speaker-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", width: "24", height: "24", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", className: "n4-speaker-wave n4-wave-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", className: "n4-speaker-wave n4-wave-2" })
            ] }) })
          }
        )
      ] }),
      current.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pd-card-vi", children: current.vi }),
      feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `pd-card-grammar pd-card-grammar--${feedback}`, children: [
        feedback === "correct" ? "✅" : feedback === "timeout" ? "⏱" : "❌",
        " ",
        current.grammar
      ] }),
      feedback && feedback !== "timeout" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pd-feedback-panel pd-feedback-panel--${feedback}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-feedback-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-feedback-answer", children: feedback === "correct" ? `🎉 Chính xác! +${((_a = history[history.length - 1]) == null ? void 0 : _a.pts) || 0}pts` : `❌ Đáp án đúng: 「${current.answer}」` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIExplainButton,
            {
              question: current.sentence,
              answer: current.answer,
              userAnswer: selected,
              isCorrect: feedback === "correct",
              itemInfo: { meaning: current.grammar },
              questionId: current.id
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "pd-continue-btn",
            onClick: handleContinue,
            children: idx + 1 >= pool.length ? "✅ Xem kết quả" : "Tiếp tục →"
          }
        )
      ] }),
      feedback === "timeout" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-feedback-panel pd-feedback-panel--timeout", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-feedback-answer", children: [
        "⏱ Hết giờ! Đáp án: 「",
        current.answer,
        "」"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-qp-options", role: "group", "aria-label": "Chọn trợ từ", children: options.map((p) => {
      let cls = "pd-qp-option";
      if (feedback) {
        if (p === current.answer) cls += " pd-qp-option--correct";
        else if (p === selected) cls += " pd-qp-option--wrong";
        else cls += " pd-qp-option--dim";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: cls,
          onClick: () => handlePick(p),
          disabled: !!feedback,
          lang: "ja",
          children: p
        },
        p
      );
    }) })
  ] });
}
const FALL_DURATION = 5e3;
const LANE_COUNT = 4;
const LIVES_MAX = 3;
function shuffle$1(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function buildOptions(question, count = 4) {
  const opts = shuffle$1([question.answer, ...question.distractors]).slice(0, count);
  if (!opts.includes(question.answer)) opts[0] = question.answer;
  return shuffle$1(opts);
}
function LivesDisplay({ lives }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-cascade-lives", "aria-label": `Còn ${lives} mạng`, children: Array.from({ length: LIVES_MAX }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pd-cascade-life ${i < lives ? "" : "pd-cascade-life--lost"}`, children: i < lives ? "❤️" : "🖤" }, i)) });
}
function CascadeMode({ questions, maxQuestions = 15, difficulty = "normal", onFinish }) {
  const fallDuration = difficulty === "easy" ? 7e3 : difficulty === "hard" ? 3500 : FALL_DURATION;
  const pool = reactExports.useMemo(() => shuffle$1(questions).slice(0, maxQuestions), [questions, maxQuestions]);
  const [idx, setIdx] = reactExports.useState(0);
  const [lives, setLives] = reactExports.useState(LIVES_MAX);
  const [score, setScore] = reactExports.useState(0);
  const [combo, setCombo] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [fallingKey, setFallingKey] = reactExports.useState(0);
  const current = pool[idx];
  const options = reactExports.useMemo(() => current ? buildOptions(current) : [], [current]);
  const advance = reactExports.useCallback((wasCorrect) => {
    setFeedback(null);
    setFallingKey((k) => k + 1);
    if (idx + 1 >= pool.length || lives <= 0) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
    }
  }, [idx, pool.length, lives]);
  const handleTap = reactExports.useCallback((particle) => {
    if (feedback || !current) return;
    const isCorrect = particle === current.answer;
    if (isCorrect) {
      const pts = 10 + combo * 3;
      setScore((s) => s + pts);
      setCombo((c) => c + 1);
      setFeedback({ particle, type: "hit" });
    } else {
      setLives((l) => {
        const newLives = l - 1;
        if (newLives <= 0) setDone(true);
        return newLives;
      });
      setCombo(0);
      setFeedback({ particle, type: "miss" });
    }
    setTimeout(() => advance(isCorrect), 900);
  }, [feedback, current, combo, advance]);
  const handleTimeout = reactExports.useCallback((particle) => {
    if (feedback || !current) return;
    if (particle === current.answer) {
      setLives((l) => {
        const nl = l - 1;
        if (nl <= 0) setDone(true);
        return nl;
      });
      setCombo(0);
      setFeedback({ particle, type: "timeout" });
      setTimeout(() => advance(false), 900);
    }
  }, [feedback, current, advance]);
  if (!pool.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-empty", children: "Không có câu hỏi nào." });
  }
  if (done) {
    const pct = Math.round(score / (pool.length * 10) * 100);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-cascade-done-icon", children: "🌊" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "pd-result-title", children: lives > 0 ? "🎉 Hoàn thành!" : "💀 Hết mạng!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Điểm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: idx + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Câu đã qua" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: lives }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Mạng còn" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "pd-result-retry", onClick: () => {
        setIdx(0);
        setLives(LIVES_MAX);
        setScore(0);
        setCombo(0);
        setDone(false);
        setFeedback(null);
        setFallingKey((k) => k + 1);
      }, children: "🔄 Chơi lại" }),
      onFinish && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "pd-result-finish", onClick: () => onFinish({ score, total: pool.length, pct }), children: "✅ Kết thúc" })
    ] });
  }
  const progressPct = pool.length > 0 ? Math.round(idx / pool.length * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-cascade", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-cascade-hud", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LivesDisplay, { lives }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-cascade-score", children: [
        "🏆 ",
        score
      ] }),
      combo >= 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-cascade-combo", children: [
        "🔥 x",
        combo,
        " combo"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-progress-wrap pd-cascade-progress", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-progress-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-progress-fill", style: { width: `${progressPct}%` } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-progress-label", children: [
        idx + 1,
        " / ",
        pool.length
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-cascade-arena", "aria-hidden": "true", children: options.map((p, i) => {
      const lane = i % LANE_COUNT;
      const delay = (i * 0.6).toFixed(2);
      p === current.answer;
      const hitThis = (feedback == null ? void 0 : feedback.particle) === p;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `pd-falling-particle ${hitThis ? feedback.type === "hit" ? "pd-falling-particle--hit" : "pd-falling-particle--miss" : ""}`,
          style: {
            left: `${12 + lane * 22}%`,
            animationDuration: `${fallDuration}ms`,
            animationDelay: `${delay}s`
          },
          onClick: () => handleTap(p),
          onAnimationEnd: () => handleTimeout(p),
          lang: "ja",
          "aria-label": `Chọn ${p}`,
          children: p
        },
        `${fallingKey}-${p}`
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-cascade-question", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-level-badge pd-level-badge--cascade", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🌊 Mưa trợ từ" }),
        current.level && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pd-level-tag pd-level-tag--${current.level}`, children: current.level })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-cascade-sentence", lang: "ja", children: current.sentence }),
      current.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-cascade-vi", children: current.vi }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-cascade-hint", children: "☝️ Bấm vào trợ từ đúng khi nó rơi xuống!" })
    ] })
  ] });
}
const MODES = [
  { id: "fill-drop", label: "Điền trợ từ", icon: "🔤" },
  { id: "quick-pick", label: "Trắc nghiệm", icon: "⚡" },
  { id: "cascade", label: "Mưa trợ từ", icon: "🌊" },
  { id: "sentence-build", label: "Xây câu", icon: "🧩" }
];
const LEVEL_OPTIONS = [
  { id: "all", label: "Tất cả" },
  { id: "basic", label: "🟢 N4 nền tảng" },
  { id: "intermediate", label: "🟡 N4 chuẩn" },
  { id: "advanced", label: "🔴 N4 trọng điểm" }
];
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const DYNAMIC_PARTICLES = [
  "ながら",
  "ので",
  "のに",
  "から",
  "まで",
  "より",
  "は",
  "が",
  "を",
  "に",
  "で",
  "と",
  "の",
  "へ",
  "も"
];
const DYNAMIC_SORTED = [...DYNAMIC_PARTICLES].sort((a, b) => b.length - a.length);
function buildDynamicQuestions(grammarGameItems) {
  const result = [];
  const used = /* @__PURE__ */ new Set();
  for (const it of grammarGameItems) {
    for (const ex of it.allExamples || []) {
      const jp = ex.jp || "";
      if (used.has(jp)) continue;
      for (const p of DYNAMIC_SORTED) {
        const idx = jp.indexOf(p);
        if (idx > 0 && idx < jp.length - p.length) {
          const distractors = shuffle(DYNAMIC_PARTICLES.filter((dp) => dp !== p)).slice(0, 4);
          result.push({
            id: `dyn-${result.length}`,
            sentence: jp.substring(0, idx) + "＿＿" + jp.substring(idx + p.length),
            answer: p,
            distractors,
            vi: ex.vi || "",
            grammar: it.title || "",
            level: "intermediate"
          });
          used.add(jp);
          break;
        }
      }
    }
  }
  return result;
}
function ParticleDojo({ mode = "fill-drop" }) {
  const storeDifficulty = useAppStore((s) => s.difficulty);
  const storeQCount = useAppStore((s) => s.defaultQuestionCount);
  const [level, setLevel] = reactExports.useState("all");
  const [difficulty, setDifficulty] = reactExports.useState(storeDifficulty || "normal");
  const [qCount, setQCount] = reactExports.useState(storeQCount || 15);
  const [sessionKey, setSessionKey] = reactExports.useState(0);
  const grammarGameItems = useGrammarGameItems(80);
  const allQuestions = reactExports.useMemo(() => {
    const dynamic = buildDynamicQuestions(grammarGameItems);
    const staticPool = getQuestionsByLevel(level);
    const dynamicFiltered = level === "all" ? dynamic : dynamic.filter((q) => q.level === level);
    const seen = new Set(staticPool.map((q) => q.sentence));
    const merged = [...staticPool];
    for (const q of dynamicFiltered) {
      if (!seen.has(q.sentence)) {
        merged.push(q);
        seen.add(q.sentence);
      }
    }
    return shuffle(merged);
  }, [grammarGameItems, level]);
  const maxQ = reactExports.useMemo(() => {
    if (mode === "cascade") return Math.min(20, qCount);
    if (difficulty === "easy") return Math.min(8, qCount);
    if (difficulty === "hard") return Math.min(20, qCount);
    return qCount;
  }, [mode, difficulty, qCount]);
  const renderMode = () => {
    const commonProps = {
      questions: allQuestions,
      maxQuestions: maxQ,
      difficulty,
      key: sessionKey
    };
    switch (mode) {
      case "fill-drop":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(FillDropMode, { ...commonProps });
      case "quick-pick":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(QuickPickMode, { ...commonProps });
      case "cascade":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CascadeMode, { ...commonProps, maxQuestions: Math.min(20, qCount) });
      case "sentence-build":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SentenceBuildMode, { ...commonProps });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(FillDropMode, { ...commonProps });
    }
  };
  if (allQuestions.length < 4) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(GameShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", padding: "4rem 2rem", color: "var(--n4-text-dim, #888)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "2rem" }, children: "🔤" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chưa đủ dữ liệu câu hỏi. Hãy thử lại sau khi data ngữ pháp được tải." })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(GameShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TrainerTopBar,
      {
        trainerId: "particle-dojo",
        modes: MODES,
        activeMode: mode,
        difficulty,
        onDifficultyChange: (v) => {
          setDifficulty(v);
          setSessionKey((k) => k + 1);
        },
        itemCount: qCount,
        onItemCountChange: (v) => {
          setQCount(v);
          setSessionKey((k) => k + 1);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      gap: "0.6rem",
      flexWrap: "wrap",
      alignItems: "center",
      padding: "0.5rem 1rem",
      borderBottom: "1px solid rgba(255,255,255,0.06)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--n4-text-muted, #888)", letterSpacing: "0.05em" }, children: "🎯 CẤP ĐỘ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            value: level,
            onChange: (e) => {
              setLevel(e.target.value);
              setSessionKey((k) => k + 1);
            },
            className: "n4-input",
            style: { fontSize: 12, padding: "4px 8px", height: "auto" },
            children: LEVEL_OPTIONS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: l.id, children: l.label }, l.id))
          }
        )
      ] }),
      mode !== "cascade" && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--n4-text-muted, #888)", letterSpacing: "0.05em" }, children: "📊 SỐ CÂU" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            value: qCount,
            onChange: (e) => {
              setQCount(Number(e.target.value));
              setSessionKey((k) => k + 1);
            },
            className: "n4-input",
            style: { fontSize: 12, padding: "4px 8px", height: "auto" },
            children: [5, 10, 15, 20, 30].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: n, children: [
              n,
              " câu"
            ] }, n))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.72rem", color: "var(--n4-text-muted, #888)", marginLeft: "auto" }, children: [
        allQuestions.length,
        " câu có sẵn"
      ] })
    ] }),
    renderMode()
  ] });
}
export {
  MODES,
  ParticleDojo as default
};
