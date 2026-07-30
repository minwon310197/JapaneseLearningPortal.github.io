const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RhythmTrack-BCmNJxkE.js","./vendor-react-BYxMSDiB.js","./feature-3d-jK3b4Iv-.js","./vendor-three-Ba7Uoy0A.js","./feature-3d-hud-Dp6hMoyV.js","./vendor-supabase-DTEAj5J1.js","./feature-3d-CUwqVi7Q.css"])))=>i.map(i=>d[i]);
import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { b as bus, G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-DvHP1w9U.js";
import { T as TrainerContext, u as useScoreEngine, c as calcXp } from "./useScoreEngine-BRdzD2Hh.js";
import { c as createCombatText, a as createBattleBanner, g as getComboTier, G as GameplayEffects } from "./feature-particles-sq2OJuuI.js";
import { F as FlashcardMode } from "./FlashcardMode-BoBgQHca.js";
import { ay as VERB_FORMS, az as getVerbPatternTag, aA as conjugateVerb, aB as validateConjugationItem, aC as ADJ_FORMS, aD as conjugateIAdj, aE as conjugateNaAdj, aF as maskAnswerForHint, ar as AIPostGameButton, aG as buildConjugationTable, ai as AIHintButton, aj as AIExplainButton, aH as isLikelyJapaneseText, aI as getErrorExplanation, aJ as classifyConjugationError } from "./feature-3d-hud-Dp6hMoyV.js";
import { _ as __vitePreload, u as useLearningStore, bA as playSFX, f as speakJP } from "./feature-3d-jK3b4Iv-.js";
import { a6 as GAME_EVENTS } from "./index-CjITGIof.js";
import "./vendor-router-BTJacUKt.js";
import "./empty-Bvm-mx50.js";
import "./feature-3d-scenery-C3eSpuWG.js";
import "./quest-chains-CiwzmCpJ.js";
import "./PhaseRibbon-B3pRyuWr.js";
import "./useQuestionMeta-COYdBAbl.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-icons-DHCyxOF-.js";
const RhythmTrack = reactExports.lazy(() => __vitePreload(() => import("./RhythmTrack-BCmNJxkE.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0, import.meta.url));
function RhythmDrillMode({ tempo = 120, pattern: inputPattern }) {
  const pattern = reactExports.useMemo(() => {
    if (Array.isArray(inputPattern) && inputPattern.length) return inputPattern;
    return Array.from({ length: 16 }, (_, i) => ({
      t: 500 + i * 500,
      lane: i % 2 === 0 ? "don" : "ka"
    }));
  }, [inputPattern]);
  const [stats, setStats] = reactExports.useState({ hits: 0, misses: 0 });
  const [done, setDone] = reactExports.useState(false);
  const handleHit = ({ accuracy }) => {
    setStats((s) => ({ ...s, hits: s.hits + 1 }));
    try {
      bus.emit(GAME_EVENTS.ANSWER_SUBMITTED, {
        correct: true,
        itemKey: `rhythm:${Date.now()}`,
        itemKind: "grammar",
        combo: stats.hits + 1,
        phase: "core",
        trainerId: "conjugation-dojo",
        mode: "rhythm-drill",
        ts: Date.now(),
        meta: { accuracy }
      });
    } catch (e) {
    }
  };
  const handleMiss = () => {
    setStats((s) => ({ ...s, misses: s.misses + 1 }));
  };
  const handleFinish = () => setDone(true);
  if (done) {
    const pct = stats.hits + stats.misses > 0 ? Math.round(stats.hits / (stats.hits + stats.misses) * 100) : 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-icon", children: pct >= 80 ? "🥁" : "💪" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-title", children: "Kết quả rhythm drill" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-value", children: stats.hits }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Trúng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-value", children: stats.misses }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Lỡ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-result-stat-value", children: [
            pct,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Chính xác" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: () => {
        setStats({ hits: 0, misses: 0 });
        setDone(false);
      }, children: "🔁 Chơi lại" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Đang tải track…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RhythmTrack, { pattern, tempo, onHit: handleHit, onMiss: handleMiss, onFinish: handleFinish }) });
}
const EXCLUDED_JLPT_N4_VERB_FORM_IDS = /* @__PURE__ */ new Set(["causative-passive", "imperative"]);
const N4_VERB_FORMS = VERB_FORMS.filter((form) => !EXCLUDED_JLPT_N4_VERB_FORM_IDS.has(form.id));
const N4_VERB_FORM_IDS = new Set(N4_VERB_FORMS.map((form) => form.id));
const sanitizeN4VerbForms = (forms = []) => Array.isArray(forms) ? forms.filter((formId) => N4_VERB_FORM_IDS.has(formId)) : [];
const MODES = [
  // Primary 3 — always visible as tabs
  { id: "verb-quiz", label: "Động từ", icon: "⚔️" },
  { id: "mixed", label: "Hỗn hợp", icon: "🎯" },
  { id: "flashcard", label: "Thẻ lật", icon: "🃏" },
  // Overflow — behind "⋯" button
  { id: "verb-fill", label: "Điền động từ", icon: "✏️" },
  { id: "adj-quiz", label: "Tính từ", icon: "📊" },
  { id: "adj-fill", label: "Điền tính từ", icon: "✍️" },
  { id: "volitional-drill", label: "意向形", icon: "🎯" },
  { id: "rhythm-drill", label: "Trống nhịp", icon: "🥁" }
];
const DRILL_MODE_FORMS = {
  "volitional-drill": ["volitional", "potential", "conditional"]
};
const VERB_PATTERN_OPTIONS = [
  { id: "ku", label: "Động từ く" },
  { id: "mu", label: "Động từ む" },
  { id: "bu", label: "Động từ ぶ" },
  { id: "su", label: "Động từ す" },
  { id: "ru-godan", label: "Động từ る godan" },
  { id: "ichidan", label: "Động từ る ichidan" },
  { id: "irregular", label: "する/くる" }
];
const N4_VERBS = [
  { dict: "たべる", kanji: "食べる", meaning: "Ăn", group: 2 },
  { dict: "のむ", kanji: "飲む", meaning: "Uống", group: 1 },
  { dict: "いく", kanji: "行く", meaning: "Đi", group: 1 },
  { dict: "くる", kanji: "来る", meaning: "Đến", group: 3 },
  { dict: "する", kanji: "する", meaning: "Làm", group: 3 },
  { dict: "みる", kanji: "見る", meaning: "Xem", group: 2 },
  { dict: "かく", kanji: "書く", meaning: "Viết", group: 1 },
  { dict: "よむ", kanji: "読む", meaning: "Đọc", group: 1 },
  { dict: "きく", kanji: "聞く", meaning: "Nghe", group: 1 },
  { dict: "はなす", kanji: "話す", meaning: "Nói", group: 1 },
  { dict: "かう", kanji: "買う", meaning: "Mua", group: 1 },
  { dict: "まつ", kanji: "待つ", meaning: "Chờ", group: 1 },
  { dict: "あう", kanji: "会う", meaning: "Gặp", group: 1 },
  { dict: "おきる", kanji: "起きる", meaning: "Thức dậy", group: 2 },
  { dict: "ねる", kanji: "寝る", meaning: "Ngủ", group: 2 },
  { dict: "あるく", kanji: "歩く", meaning: "Đi bộ", group: 1 },
  { dict: "はしる", kanji: "走る", meaning: "Chạy", group: 1 },
  { dict: "およぐ", kanji: "泳ぐ", meaning: "Bơi", group: 1 },
  { dict: "あそぶ", kanji: "遊ぶ", meaning: "Chơi", group: 1 },
  { dict: "しぬ", kanji: "死ぬ", meaning: "Chết", group: 1 },
  { dict: "つくる", kanji: "作る", meaning: "Tạo/Làm", group: 1 },
  { dict: "おしえる", kanji: "教える", meaning: "Dạy", group: 2 },
  { dict: "でる", kanji: "出る", meaning: "Ra/Xuất hiện", group: 2 },
  { dict: "はいる", kanji: "入る", meaning: "Vào", group: 1 },
  { dict: "おわる", kanji: "終わる", meaning: "Kết thúc", group: 1 },
  { dict: "はじめる", kanji: "始める", meaning: "Bắt đầu", group: 2 },
  { dict: "わかる", kanji: "分かる", meaning: "Hiểu", group: 1 },
  { dict: "わすれる", kanji: "忘れる", meaning: "Quên", group: 2 },
  { dict: "おぼえる", kanji: "覚える", meaning: "Nhớ", group: 2 },
  { dict: "もつ", kanji: "持つ", meaning: "Cầm/Có", group: 1 },
  { dict: "つかう", kanji: "使う", meaning: "Dùng", group: 1 },
  { dict: "あける", kanji: "開ける", meaning: "Mở", group: 2 },
  { dict: "しめる", kanji: "閉める", meaning: "Đóng", group: 2 },
  { dict: "とる", kanji: "撮る", meaning: "Chụp ảnh", group: 1 },
  { dict: "おくる", kanji: "送る", meaning: "Gửi", group: 1 },
  { dict: "かえる", kanji: "帰る", meaning: "Về nhà", group: 1 },
  { dict: "のる", kanji: "乗る", meaning: "Đi (xe)", group: 1 },
  { dict: "おりる", kanji: "降りる", meaning: "Xuống (xe)", group: 2 },
  { dict: "きる", kanji: "着る", meaning: "Mặc", group: 2 },
  { dict: "あびる", kanji: "浴びる", meaning: "Tắm", group: 2 },
  { dict: "べんきょうする", kanji: "勉強する", meaning: "Học", group: 3 },
  { dict: "さんぽする", kanji: "散歩する", meaning: "Đi dạo", group: 3 },
  { dict: "うんどうする", kanji: "運動する", meaning: "Vận động", group: 3 },
  { dict: "せんたくする", kanji: "洗濯する", meaning: "Giặt quần áo", group: 3 },
  { dict: "そうじする", kanji: "掃除する", meaning: "Dọn dẹp", group: 3 },
  { dict: "りょうりする", kanji: "料理する", meaning: "Nấu ăn", group: 3 },
  { dict: "きめる", kanji: "決める", meaning: "Quyết định", group: 2 },
  { dict: "みせる", kanji: "見せる", meaning: "Cho xem", group: 2 },
  { dict: "やめる", kanji: "辞める", meaning: "Nghỉ/Bỏ", group: 2 },
  { dict: "こたえる", kanji: "答える", meaning: "Trả lời", group: 2 },
  { dict: "ならべる", kanji: "並べる", meaning: "Sắp xếp", group: 2 },
  { dict: "あつめる", kanji: "集める", meaning: "Thu thập", group: 2 },
  { dict: "くらべる", kanji: "比べる", meaning: "So sánh", group: 2 },
  { dict: "しらべる", kanji: "調べる", meaning: "Tra/Điều tra", group: 2 },
  { dict: "つたえる", kanji: "伝える", meaning: "Truyền đạt", group: 2 },
  { dict: "おくれる", kanji: "遅れる", meaning: "Trễ", group: 2 },
  { dict: "きえる", kanji: "消える", meaning: "Biến mất/Tắt", group: 2 },
  { dict: "うれる", kanji: "売れる", meaning: "Bán chạy", group: 2 },
  { dict: "なおす", kanji: "直す", meaning: "Sửa", group: 1 },
  { dict: "さがす", kanji: "探す", meaning: "Tìm kiếm", group: 1 },
  { dict: "はらう", kanji: "払う", meaning: "Trả tiền", group: 1 },
  { dict: "えらぶ", kanji: "選ぶ", meaning: "Chọn", group: 1 },
  { dict: "まにあう", kanji: "間に合う", meaning: "Kịp", group: 1 },
  { dict: "うごく", kanji: "動く", meaning: "Di chuyển", group: 1 },
  { dict: "のこる", kanji: "残る", meaning: "Còn lại", group: 1 },
  { dict: "けす", kanji: "消す", meaning: "Xóa/Tắt", group: 1 },
  { dict: "ひらく", kanji: "開く", meaning: "Mở ra", group: 1 },
  { dict: "しまる", kanji: "閉まる", meaning: "Đóng lại", group: 1 },
  { dict: "まわす", kanji: "回す", meaning: "Xoay", group: 1 },
  { dict: "まわる", kanji: "回る", meaning: "Quay", group: 1 },
  { dict: "うる", kanji: "売る", meaning: "Bán", group: 1 },
  { dict: "おもう", kanji: "思う", meaning: "Nghĩ", group: 1 },
  { dict: "やくそくする", kanji: "約束する", meaning: "Hứa hẹn", group: 3 },
  { dict: "れんしゅうする", kanji: "練習する", meaning: "Luyện tập", group: 3 },
  { dict: "しんぱいする", kanji: "心配する", meaning: "Lo lắng", group: 3 },
  { dict: "りようする", kanji: "利用する", meaning: "Sử dụng", group: 3 },
  { dict: "せつめいする", kanji: "説明する", meaning: "Giải thích", group: 3 },
  { dict: "あんないする", kanji: "案内する", meaning: "Hướng dẫn", group: 3 },
  { dict: "れんらくする", kanji: "連絡する", meaning: "Liên lạc", group: 3 },
  { dict: "よやくする", kanji: "予約する", meaning: "Đặt trước", group: 3 },
  { dict: "あく", kanji: "開く", meaning: "Mở (tự động từ)", group: 1 },
  { dict: "いそぐ", kanji: "急ぐ", meaning: "Vội vàng", group: 1 },
  { dict: "うたう", kanji: "歌う", meaning: "Hát", group: 1 },
  { dict: "おす", kanji: "押す", meaning: "Đẩy/Bấm", group: 1 },
  { dict: "おちる", kanji: "落ちる", meaning: "Rơi", group: 2 },
  { dict: "おもいだす", kanji: "思い出す", meaning: "Nhớ lại", group: 1 },
  { dict: "かる", kanji: "刈る", meaning: "Cắt/Gặt", group: 1 },
  { dict: "かわく", kanji: "渇く", meaning: "Khát", group: 1 },
  { dict: "がんばる", kanji: "頑張る", meaning: "Cố gắng", group: 1 },
  { dict: "きがえる", kanji: "着替える", meaning: "Thay quần áo", group: 2 },
  { dict: "くもる", kanji: "曇る", meaning: "Nhiều mây", group: 1 },
  { dict: "さわる", kanji: "触る", meaning: "Chạm", group: 1 },
  { dict: "しずむ", kanji: "沈む", meaning: "Chìm", group: 1 },
  { dict: "しる", kanji: "知る", meaning: "Biết", group: 1 },
  { dict: "すう", kanji: "吸う", meaning: "Hút (thuốc)", group: 1 },
  { dict: "すむ", kanji: "住む", meaning: "Sống/Cư trú", group: 1 },
  { dict: "たつ", kanji: "立つ", meaning: "Đứng", group: 1 },
  { dict: "たのむ", kanji: "頼む", meaning: "Nhờ vả", group: 1 },
  { dict: "ちがう", kanji: "違う", meaning: "Khác/Sai", group: 1 },
  { dict: "つかれる", kanji: "疲れる", meaning: "Mệt mỏi", group: 2 },
  { dict: "つく", kanji: "着く", meaning: "Đến nơi", group: 1 },
  { dict: "つれる", kanji: "連れる", meaning: "Dẫn theo", group: 2 },
  { dict: "てつだう", kanji: "手伝う", meaning: "Giúp đỡ", group: 1 },
  { dict: "とぶ", kanji: "飛ぶ", meaning: "Bay", group: 1 },
  { dict: "とまる", kanji: "止まる", meaning: "Dừng lại", group: 1 },
  { dict: "ぬぐ", kanji: "脱ぐ", meaning: "Cởi (quần áo)", group: 1 },
  { dict: "ぬすむ", kanji: "盗む", meaning: "Ăn cắp", group: 1 },
  { dict: "のぼる", kanji: "登る", meaning: "Leo", group: 1 },
  { dict: "はこぶ", kanji: "運ぶ", meaning: "Vận chuyển", group: 1 },
  { dict: "はたらく", kanji: "働く", meaning: "Làm việc", group: 1 },
  { dict: "ひく", kanji: "弾く", meaning: "Chơi (nhạc cụ)", group: 1 },
  { dict: "ふとる", kanji: "太る", meaning: "Béo lên", group: 1 },
  { dict: "ふる", kanji: "降る", meaning: "Rơi (mưa, tuyết)", group: 1 },
  { dict: "まがる", kanji: "曲がる", meaning: "Rẽ/Uốn cong", group: 1 },
  { dict: "みがく", kanji: "磨く", meaning: "Đánh (răng)", group: 1 },
  { dict: "むかえる", kanji: "迎える", meaning: "Đón", group: 2 },
  { dict: "やすむ", kanji: "休む", meaning: "Nghỉ ngơi", group: 1 },
  { dict: "やせる", kanji: "痩せる", meaning: "Gầy đi", group: 2 },
  { dict: "よぶ", kanji: "呼ぶ", meaning: "Gọi", group: 1 },
  { dict: "わらう", kanji: "笑う", meaning: "Cười", group: 1 },
  { dict: "あらう", kanji: "洗う", meaning: "Rửa", group: 1 },
  { dict: "いのる", kanji: "祈る", meaning: "Cầu nguyện", group: 1 },
  { dict: "おく", kanji: "置く", meaning: "Đặt/Để", group: 1 },
  { dict: "かける", kanji: "掛ける", meaning: "Treo/Gọi (điện thoại)", group: 2 },
  { dict: "かまう", kanji: "構う", meaning: "Bận tâm", group: 1 },
  { dict: "さく", kanji: "咲く", meaning: "Nở (hoa)", group: 1 },
  { dict: "しかる", kanji: "叱る", meaning: "Mắng", group: 1 },
  { dict: "そだてる", kanji: "育てる", meaning: "Nuôi nấng", group: 2 },
  { dict: "たのしむ", kanji: "楽しむ", meaning: "Thưởng thức", group: 1 },
  { dict: "なれる", kanji: "慣れる", meaning: "Quen với", group: 2 },
  { dict: "まける", kanji: "負ける", meaning: "Thua", group: 2 },
  { dict: "あまる", kanji: "余る", meaning: "Dư thừa", group: 1 },
  { dict: "あやまる", kanji: "謝る", meaning: "Xin lỗi", group: 1 },
  { dict: "いじめる", kanji: "苛める", meaning: "Bắt nạt", group: 2 },
  { dict: "いたす", kanji: "致す", meaning: "Làm (khiêm nhường của する)", group: 1 },
  { dict: "いただく", kanji: "頂く", meaning: "Nhận (khiêm nhường)", group: 1 },
  { dict: "いらっしゃる", kanji: "いらっしゃる", meaning: "Đi, đến, ở (tôn kính)", group: 1 },
  { dict: "うえる", kanji: "植える", meaning: "Trồng", group: 2 },
  { dict: "うかがう", kanji: "伺う", meaning: "Hỏi, đến thăm", group: 1 },
  { dict: "うける", kanji: "受ける", meaning: "Nhận, tham gia (kỳ thi)", group: 2 },
  { dict: "うつす", kanji: "移す", meaning: "Dời đi, chuyển đi", group: 1 },
  { dict: "うつる", kanji: "移る", meaning: "Chuyển sang, lây", group: 1 },
  { dict: "おこす", kanji: "起こす", meaning: "Đánh thức", group: 1 },
  { dict: "おこなう", kanji: "行う", meaning: "Tổ chức, tiến hành", group: 1 },
  { dict: "おこる", kanji: "怒る", meaning: "Tức giận", group: 1 },
  { dict: "おとす", kanji: "落とす", meaning: "Làm rơi", group: 1 },
  { dict: "おどる", kanji: "踊る", meaning: "Nhảy múa", group: 1 },
  { dict: "おどろく", kanji: "驚く", meaning: "Ngạc nhiên", group: 1 },
  { dict: "おれる", kanji: "折れる", meaning: "Bị gãy", group: 2 },
  { dict: "かう", kanji: "飼う", meaning: "Nuôi (động vật)", group: 1 },
  { dict: "かざる", kanji: "飾る", meaning: "Trang trí", group: 1 },
  { dict: "かむ", kanji: "噛む", meaning: "Cắn, nhai", group: 1 },
  { dict: "かよう", kanji: "通う", meaning: "Đi lại, lui tới", group: 1 },
  { dict: "かわる", kanji: "変わる", meaning: "Thay đổi", group: 1 },
  { dict: "きまる", kanji: "決まる", meaning: "Được quyết định", group: 1 },
  { dict: "くらす", kanji: "暮らす", meaning: "Sinh sống", group: 1 },
  { dict: "くれる", kanji: "呉れる", meaning: "Cho (tôi)", group: 2 },
  { dict: "こむ", kanji: "込む", meaning: "Đông đúc", group: 1 },
  { dict: "こわす", kanji: "壊す", meaning: "Làm hỏng", group: 1 },
  { dict: "こわれる", kanji: "壊れる", meaning: "Bị hỏng", group: 2 },
  { dict: "さがる", kanji: "下がる", meaning: "Giảm xuống", group: 1 },
  { dict: "さげる", kanji: "下げる", meaning: "Làm giảm", group: 2 },
  { dict: "さす", kanji: "差す", meaning: "Giương (ô)", group: 1 },
  { dict: "さわぐ", kanji: "騒ぐ", meaning: "Làm ồn", group: 1 },
  { dict: "しらせる", kanji: "知らせる", meaning: "Thông báo", group: 2 },
  { dict: "すぎる", kanji: "過ぎる", meaning: "Quá", group: 2 },
  { dict: "すく", kanji: "空く", meaning: "Trống, vắng", group: 1 },
  { dict: "すすむ", kanji: "進む", meaning: "Tiến lên", group: 1 },
  { dict: "すべる", kanji: "滑る", meaning: "Trượt", group: 1 },
  { dict: "そだつ", kanji: "育つ", meaning: "Lớn lên", group: 1 },
  { dict: "たおれる", kanji: "倒れる", meaning: "Ngã, đổ", group: 2 },
  { dict: "たす", kanji: "足す", meaning: "Cộng thêm", group: 1 },
  { dict: "たずねる", kanji: "訪ねる", meaning: "Thăm", group: 2 },
  { dict: "たてる", kanji: "建てる", meaning: "Xây dựng", group: 2 },
  { dict: "たりる", kanji: "足りる", meaning: "Đủ", group: 2 },
  { dict: "つかまえる", kanji: "捕まえる", meaning: "Bắt lấy", group: 2 },
  { dict: "つくる", kanji: "造る", meaning: "Chế tạo", group: 1 },
  { dict: "つづく", kanji: "続く", meaning: "Tiếp tục (tự)", group: 1 },
  { dict: "つづける", kanji: "続ける", meaning: "Tiếp tục (tha)", group: 2 },
  { dict: "つつむ", kanji: "包む", meaning: "Gói, bọc", group: 1 },
  { dict: "でかける", kanji: "出掛ける", meaning: "Ra ngoài", group: 2 },
  { dict: "とどける", kanji: "届ける", meaning: "Giao đến", group: 2 },
  { dict: "とめる", kanji: "止める", meaning: "Làm dừng", group: 2 },
  { dict: "とりかえる", kanji: "取り替える", meaning: "Đổi lại", group: 2 },
  { dict: "なおる", kanji: "直る", meaning: "Được sửa", group: 1 },
  { dict: "なく", kanji: "泣く", meaning: "Khóc", group: 1 },
  { dict: "なくす", kanji: "無くす", meaning: "Làm mất", group: 1 },
  { dict: "なくなる", kanji: "亡くなる", meaning: "Qua đời", group: 1 },
  { dict: "なげる", kanji: "投げる", meaning: "Ném", group: 2 },
  { dict: "なさる", kanji: "為さる", meaning: "Làm (tôn kính)", group: 1 },
  { dict: "ならぶ", kanji: "並ぶ", meaning: "Xếp hàng", group: 1 },
  { dict: "にげる", kanji: "逃げる", meaning: "Chạy trốn", group: 2 },
  { dict: "にる", kanji: "似る", meaning: "Giống", group: 2 },
  { dict: "ぬる", kanji: "塗る", meaning: "Sơn, bôi", group: 1 },
  { dict: "ぬれる", kanji: "濡れる", meaning: "Bị ướt", group: 2 },
  { dict: "ねがう", kanji: "願う", meaning: "Cầu mong", group: 1 },
  { dict: "のびる", kanji: "伸びる", meaning: "Kéo dài", group: 2 },
  { dict: "はかる", kanji: "計る", meaning: "Đo lường", group: 1 },
  { dict: "はじまる", kanji: "始まる", meaning: "Bắt đầu (tự)", group: 1 },
  { dict: "はれる", kanji: "晴れる", meaning: "Nắng", group: 2 },
  { dict: "ひえる", kanji: "冷える", meaning: "Lạnh đi", group: 2 },
  { dict: "ひかる", kanji: "光る", meaning: "Tỏa sáng", group: 1 },
  { dict: "ひきうける", kanji: "引き受ける", meaning: "Đảm nhận", group: 2 },
  { dict: "ふえる", kanji: "増える", meaning: "Tăng lên", group: 2 },
  { dict: "ふむ", kanji: "踏む", meaning: "Dẫm, đạp", group: 1 },
  { dict: "へる", kanji: "減る", meaning: "Giảm xuống", group: 1 },
  { dict: "まちがえる", kanji: "間違える", meaning: "Nhầm lẫn", group: 2 },
  { dict: "みつかる", kanji: "見つかる", meaning: "Được tìm thấy", group: 1 },
  { dict: "みつける", kanji: "見つける", meaning: "Tìm thấy", group: 2 },
  { dict: "むかう", kanji: "向かう", meaning: "Hướng tới", group: 1 },
  { dict: "めしあがる", kanji: "召し上がる", meaning: "Ăn, uống (tôn kính)", group: 1 },
  { dict: "もうしあげる", kanji: "申し上げる", meaning: "Nói (khiêm nhường)", group: 2 },
  { dict: "もうす", kanji: "申す", meaning: "Nói (khiêm nhường)", group: 1 },
  { dict: "もどる", kanji: "戻る", meaning: "Quay lại", group: 1 },
  { dict: "もらう", kanji: "貰う", meaning: "Nhận", group: 1 },
  { dict: "やく", kanji: "焼く", meaning: "Nướng", group: 1 },
  { dict: "やける", kanji: "焼ける", meaning: "Bị nướng, cháy", group: 2 },
  { dict: "やむ", kanji: "止む", meaning: "Tạnh, ngừng", group: 1 },
  { dict: "よごれる", kanji: "汚れる", meaning: "Bị bẩn", group: 2 },
  { dict: "よろこぶ", kanji: "喜ぶ", meaning: "Vui mừng", group: 1 },
  { dict: "わかす", kanji: "沸かす", meaning: "Đun sôi", group: 1 },
  { dict: "わく", kanji: "沸く", meaning: "Sôi", group: 1 },
  { dict: "わかれる", kanji: "分かれる", meaning: "Chia tay", group: 2 },
  { dict: "わたす", kanji: "渡す", meaning: "Trao", group: 1 },
  { dict: "わたる", kanji: "渡る", meaning: "Băng qua", group: 1 },
  { dict: "われる", kanji: "割れる", meaning: "Bị vỡ", group: 2 },
  { dict: "あく", kanji: "開く", meaning: "Mở (tự động từ)", group: 1 },
  { dict: "あげる", kanji: "上げる", meaning: "Tặng, tăng lên", group: 2 },
  { dict: "あつまる", kanji: "集まる", meaning: "Tập trung (tự)", group: 1 },
  { dict: "あつめる", kanji: "集める", meaning: "Thu thập (tha)", group: 2 },
  { dict: "あやまる", kanji: "謝る", meaning: "Xin lỗi", group: 1 },
  { dict: "いきる", kanji: "生きる", meaning: "Sống", group: 2 },
  { dict: "いそぐ", kanji: "急ぐ", meaning: "Vội vàng", group: 1 },
  { dict: "うごく", kanji: "動く", meaning: "Chuyển động", group: 1 },
  { dict: "うたう", kanji: "歌う", meaning: "Hát", group: 1 },
  { dict: "うつる", kanji: "映る", meaning: "Phản chiếu", group: 1 },
  { dict: "えらぶ", kanji: "選ぶ", meaning: "Lựa chọn", group: 1 },
  { dict: "おきる", kanji: "起きる", meaning: "Thức dậy", group: 2 },
  { dict: "おこる", kanji: "起こる", meaning: "Xảy ra", group: 1 },
  { dict: "おしえる", kanji: "教える", meaning: "Dạy", group: 2 },
  { dict: "おちる", kanji: "落ちる", meaning: "Rơi (tự)", group: 2 },
  { dict: "おもいだす", kanji: "思い出す", meaning: "Nhớ lại", group: 1 },
  { dict: "およぐ", kanji: "泳ぐ", meaning: "Bơi", group: 1 },
  { dict: "おりる", kanji: "降りる", meaning: "Xuống (xe)", group: 2 },
  { dict: "おわる", kanji: "終わる", meaning: "Kết thúc", group: 1 },
  { dict: "かう", kanji: "買う", meaning: "Mua", group: 1 },
  { dict: "かえす", kanji: "返す", meaning: "Trả lại", group: 1 },
  { dict: "かえる", kanji: "帰る", meaning: "Trở về", group: 1 },
  { dict: "かかる", kanji: "掛かる", meaning: "Tốn (thời gian)", group: 1 },
  { dict: "かたづける", kanji: "片付ける", meaning: "Dọn dẹp", group: 2 },
  { dict: "かつ", kanji: "勝つ", meaning: "Chiến thắng", group: 1 },
  { dict: "かぶる", kanji: "被る", meaning: "Đội (mũ)", group: 1 },
  { dict: "かりる", kanji: "借りる", meaning: "Mượn", group: 2 },
  { dict: "かわく", kanji: "乾く", meaning: "Khô", group: 1 },
  { dict: "きがえる", kanji: "着替える", meaning: "Thay áo quần", group: 2 },
  { dict: "きく", kanji: "聞く", meaning: "Nghe, hỏi", group: 1 },
  { dict: "きめる", kanji: "決める", meaning: "Quyết định (tha)", group: 2 },
  { dict: "きる", kanji: "切る", meaning: "Cắt", group: 1 },
  { dict: "きる", kanji: "着る", meaning: "Mặc", group: 2 },
  { dict: "くらべる", kanji: "比べる", meaning: "So sánh", group: 2 },
  { dict: "くれる", kanji: "暮れる", meaning: "Lặn (mặt trời)", group: 2 },
  { dict: "けす", kanji: "消す", meaning: "Tắt, xóa", group: 1 },
  { dict: "こたえる", kanji: "答える", meaning: "Trả lời", group: 2 },
  { dict: "さがす", kanji: "探す", meaning: "Tìm kiếm", group: 1 },
  { dict: "さがる", kanji: "下がる", meaning: "Hạ xuống", group: 1 },
  { dict: "さす", kanji: "指す", meaning: "Chỉ định", group: 1 },
  { dict: "さめる", kanji: "冷める", meaning: "Nguội đi", group: 2 },
  { dict: "しまる", kanji: "閉まる", meaning: "Đóng (tự)", group: 1 },
  { dict: "しめる", kanji: "閉める", meaning: "Đóng (tha)", group: 2 },
  { dict: "しらべる", kanji: "調べる", meaning: "Điều tra", group: 2 },
  { dict: "しる", kanji: "知る", meaning: "Biết", group: 1 },
  { dict: "しんじる", kanji: "信じる", meaning: "Tin tưởng", group: 2 },
  { dict: "すてる", kanji: "捨てる", meaning: "Vứt bỏ", group: 2 },
  { dict: "すむ", kanji: "済む", meaning: "Kết thúc, xong", group: 1 },
  { dict: "すわる", kanji: "座る", meaning: "Ngồi", group: 1 },
  { dict: "そだてる", kanji: "育てる", meaning: "Nuôi dưỡng", group: 2 },
  { dict: "たのむ", kanji: "頼む", meaning: "Yêu cầu, nhờ", group: 1 },
  { dict: "だまる", kanji: "黙る", meaning: "Im lặng", group: 1 },
  { dict: "ちがう", kanji: "違う", meaning: "Khác", group: 1 },
  { dict: "ちかづく", kanji: "近づく", meaning: "Đến gần", group: 1 },
  { dict: "つかれる", kanji: "疲れる", meaning: "Mệt mỏi", group: 2 },
  { dict: "つかえる", kanji: "仕える", meaning: "Phục vụ", group: 2 },
  { dict: "つける", kanji: "点ける", meaning: "Bật (điện)", group: 2 },
  { dict: "つたえる", kanji: "伝える", meaning: "Truyền đạt", group: 2 },
  { dict: "つづく", kanji: "続く", meaning: "Tiếp tục (tự)", group: 1 },
  { dict: "つづける", kanji: "続ける", meaning: "Tiếp tục (tha)", group: 2 },
  { dict: "つとめる", kanji: "勤める", meaning: "Làm việc cho", group: 2 },
  { dict: "であう", kanji: "出会う", meaning: "Tình cờ gặp", group: 1 },
  { dict: "でる", kanji: "出る", meaning: "Đi ra", group: 2 },
  { dict: "とぶ", kanji: "飛ぶ", meaning: "Bay", group: 1 },
  { dict: "とまる", kanji: "止まる", meaning: "Dừng (tự)", group: 1 },
  { dict: "とめる", kanji: "止める", meaning: "Dừng (tha)", group: 2 },
  { dict: "なおす", kanji: "直す", meaning: "Sửa chữa", group: 1 },
  { dict: "なおる", kanji: "治る", meaning: "Khỏi bệnh", group: 1 },
  { dict: "なれる", kanji: "慣れる", meaning: "Quen với", group: 2 },
  { dict: "にげる", kanji: "逃げる", meaning: "Chạy trốn", group: 2 },
  { dict: "ぬぐ", kanji: "脱ぐ", meaning: "Cởi (quần áo)", group: 1 },
  { dict: "ねむる", kanji: "眠る", meaning: "Ngủ", group: 1 },
  { dict: "のこる", kanji: "残る", meaning: "Còn lại", group: 1 },
  { dict: "のる", kanji: "乗る", meaning: "Lên (xe)", group: 1 },
  { dict: "はたらく", kanji: "働く", meaning: "Làm việc", group: 1 },
  { dict: "はなす", kanji: "離す", meaning: "Tránh xa", group: 1 },
  { dict: "はらう", kanji: "払う", meaning: "Tranh toán", group: 1 },
  { dict: "はれる", kanji: "晴れる", meaning: "Trời nắng", group: 2 },
  { dict: "ひえる", kanji: "冷える", meaning: "Lạnh đi", group: 2 },
  { dict: "ひかる", kanji: "光る", meaning: "Phát sáng", group: 1 },
  { dict: "ひく", kanji: "引く", meaning: "Kéo", group: 1 },
  { dict: "ふとる", kanji: "太る", meaning: "Béo lên", group: 1 },
  { dict: "ふむ", kanji: "踏む", meaning: "Dẫm lên", group: 1 },
  { dict: "へる", kanji: "減る", meaning: "Giảm đi", group: 1 },
  { dict: "ほめる", kanji: "褒める", meaning: "Khen ngợi", group: 2 },
  { dict: "まがる", kanji: "曲がる", meaning: "Rẽ", group: 1 },
  { dict: "まざる", kanji: "混ざる", meaning: "Trộn lẫn", group: 1 },
  { dict: "まもる", kanji: "守る", meaning: "Bảo vệ", group: 1 },
  { dict: "まよう", kanji: "迷う", meaning: "Lạc đường", group: 1 },
  { dict: "まわす", kanji: "回す", meaning: "Vặn, quay", group: 1 },
  { dict: "みつかる", kanji: "見つかる", meaning: "Được tìm thấy", group: 1 },
  { dict: "みつける", kanji: "見つける", meaning: "Tìm thấy", group: 2 },
  { dict: "むかえる", kanji: "迎える", meaning: "Nghênh đón", group: 2 },
  { dict: "めだつ", kanji: "目立つ", meaning: "Nổi bật", group: 1 },
  { dict: "もえる", kanji: "燃える", meaning: "Cháy", group: 2 },
  { dict: "もどる", kanji: "戻る", meaning: "Quay lại", group: 1 },
  { dict: "やく", kanji: "焼く", meaning: "Nướng", group: 1 },
  { dict: "やぶれる", kanji: "破れる", meaning: "Bị rách", group: 2 },
  { dict: "やめる", kanji: "辞める", meaning: "Từ bỏ", group: 2 },
  { dict: "ゆるす", kanji: "許す", meaning: "Tha thứ", group: 1 },
  { dict: "よごれる", kanji: "汚れる", meaning: "Bị bẩn", group: 2 },
  { dict: "わく", kanji: "沸く", meaning: "Sôi", group: 1 },
  { dict: "わかす", kanji: "沸かす", meaning: "Đun sôi", group: 1 },
  { dict: "わたす", kanji: "渡す", meaning: "Trao cho", group: 1 },
  { dict: "わたる", kanji: "渡る", meaning: "Băng qua", group: 1 },
  { dict: "われる", kanji: "割れる", meaning: "Bị vỡ", group: 2 }
];
const N4_I_ADJ = [
  { dict: "たかい", kanji: "高い", meaning: "Đắt/Cao" },
  { dict: "やすい", kanji: "安い", meaning: "Rẻ" },
  { dict: "おおきい", kanji: "大きい", meaning: "Lớn" },
  { dict: "ちいさい", kanji: "小さい", meaning: "Nhỏ" },
  { dict: "あたらしい", kanji: "新しい", meaning: "Mới" },
  { dict: "ふるい", kanji: "古い", meaning: "Cũ" },
  { dict: "いい", kanji: "いい", meaning: "Tốt" },
  { dict: "わるい", kanji: "悪い", meaning: "Xấu/Tệ" },
  { dict: "おいしい", kanji: "おいしい", meaning: "Ngon" },
  { dict: "あつい", kanji: "暑い", meaning: "Nóng" },
  { dict: "さむい", kanji: "寒い", meaning: "Lạnh" },
  { dict: "むずかしい", kanji: "難しい", meaning: "Khó" },
  { dict: "やさしい", kanji: "優しい", meaning: "Dễ/Hiền" },
  { dict: "はやい", kanji: "早い", meaning: "Sớm/Nhanh" },
  { dict: "おそい", kanji: "遅い", meaning: "Chậm/Muộn" },
  { dict: "ながい", kanji: "長い", meaning: "Dài" },
  { dict: "みじかい", kanji: "短い", meaning: "Ngắn" },
  { dict: "おもしろい", kanji: "面白い", meaning: "Thú vị" },
  { dict: "つまらない", kanji: "つまらない", meaning: "Chán" },
  { dict: "うれしい", kanji: "嬉しい", meaning: "Vui" },
  { dict: "かなしい", kanji: "悲しい", meaning: "Buồn" },
  { dict: "いそがしい", kanji: "忙しい", meaning: "Bận" },
  { dict: "ひろい", kanji: "広い", meaning: "Rộng" },
  { dict: "せまい", kanji: "狭い", meaning: "Hẹp" },
  { dict: "つよい", kanji: "強い", meaning: "Mạnh" },
  { dict: "よわい", kanji: "弱い", meaning: "Yếu" },
  { dict: "あかるい", kanji: "明るい", meaning: "Sáng" },
  { dict: "くらい", kanji: "暗い", meaning: "Tối" },
  { dict: "あまい", kanji: "甘い", meaning: "Ngọt" },
  { dict: "からい", kanji: "辛い", meaning: "Cay" },
  { dict: "にがい", kanji: "苦い", meaning: "Đắng" },
  { dict: "すっぱい", kanji: "酸っぱい", meaning: "Chua" },
  { dict: "あぶない", kanji: "危ない", meaning: "Nguy hiểm" },
  { dict: "いたい", kanji: "痛い", meaning: "Đau" },
  { dict: "うるさい", kanji: "煩い", meaning: "Ồn ào" },
  { dict: "きたない", kanji: "汚い", meaning: "Dơ bẩn" },
  { dict: "すずしい", kanji: "涼しい", meaning: "Mát mẻ" },
  { dict: "あたたかい", kanji: "暖かい", meaning: "Ấm áp" },
  { dict: "ねむい", kanji: "眠い", meaning: "Buồn ngủ" },
  { dict: "まるい", kanji: "丸い", meaning: "Tròn" },
  { dict: "わかい", kanji: "若い", meaning: "Trẻ" },
  { dict: "ただしい", kanji: "正しい", meaning: "Đúng đắn" },
  { dict: "めずらしい", kanji: "珍しい", meaning: "Hiếm" },
  { dict: "あさい", kanji: "浅い", meaning: "Nông, cạn" },
  { dict: "うつくしい", kanji: "美しい", meaning: "Đẹp" },
  { dict: "おかしい", kanji: "可笑しい", meaning: "Buồn cười, lạ" },
  { dict: "かたい", kanji: "固い", meaning: "Cứng" },
  { dict: "きびしい", kanji: "厳しい", meaning: "Nghiêm khắc" },
  { dict: "くさい", kanji: "臭い", meaning: "Hôi thối" },
  { dict: "くわしい", kanji: "詳しい", meaning: "Chi tiết" },
  { dict: "こわい", kanji: "怖い", meaning: "Sợ hãi" },
  { dict: "さびしい", kanji: "寂しい", meaning: "Buồn, cô đơn" },
  { dict: "したしい", kanji: "親しい", meaning: "Thân thiết" },
  { dict: "すばらしい", kanji: "素晴らしい", meaning: "Tuyệt vời" },
  { dict: "たのしい", kanji: "楽しい", meaning: "Vui vẻ" },
  { dict: "とおい", kanji: "遠い", meaning: "Xa" },
  { dict: "はずかしい", kanji: "恥ずかしい", meaning: "Xấu hổ" },
  { dict: "ひどい", kanji: "酷い", meaning: "Tồi tệ" },
  { dict: "ふかい", kanji: "深い", meaning: "Sâu" },
  { dict: "ふとい", kanji: "太い", meaning: "Béo, mập" },
  { dict: "ほしい", kanji: "欲しい", meaning: "Muốn có" },
  { dict: "ほそい", kanji: "細い", meaning: "Mỏng, thon" },
  { dict: "やわらかい", kanji: "柔らかい", meaning: "Mềm mại" },
  { dict: "よろしい", kanji: "宜しい", meaning: "Được, tốt (lịch sự)" },
  { dict: "あさい", kanji: "浅い", meaning: "Nông", type: "i" },
  { dict: "あつい", kanji: "厚い", meaning: "Dày", type: "i" },
  { dict: "あまい", kanji: "甘い", meaning: "Ngọt", type: "i" },
  { dict: "あやしい", kanji: "怪しい", meaning: "Kỳ lạ", type: "i" },
  { dict: "あらい", kanji: "荒い", meaning: "Thô bạo", type: "i" },
  { dict: "うすい", kanji: "薄い", meaning: "Mỏng", type: "i" },
  { dict: "うまい", kanji: "旨い", meaning: "Ngon, giỏi", type: "i" },
  { dict: "うるさい", kanji: "煩い", meaning: "Ồn ào", type: "i" },
  { dict: "おかしい", kanji: "可笑しい", meaning: "Buồn cười", type: "i" },
  { dict: "おそい", kanji: "遅い", meaning: "Chậm", type: "i" },
  { dict: "おもい", kanji: "重い", meaning: "Nặng", type: "i" },
  { dict: "かたい", kanji: "固い", meaning: "Cứng", type: "i" },
  { dict: "かなしい", kanji: "悲しい", meaning: "Buồn", type: "i" },
  { dict: "からい", kanji: "辛い", meaning: "Cay", type: "i" },
  { dict: "かるい", kanji: "軽い", meaning: "Nhẹ", type: "i" },
  { dict: "きいろい", kanji: "黄色い", meaning: "Màu vàng", type: "i" },
  { dict: "きたない", kanji: "汚い", meaning: "Bẩn", type: "i" },
  { dict: "きびしい", kanji: "厳しい", meaning: "Nghiêm khắc", type: "i" },
  { dict: "くさい", kanji: "臭い", meaning: "Hôi", type: "i" },
  { dict: "くらい", kanji: "暗い", meaning: "Tối", type: "i" },
  { dict: "くるしい", kanji: "苦しい", meaning: "Đau khổ", type: "i" },
  { dict: "くろい", kanji: "黒い", meaning: "Màu đen", type: "i" },
  { dict: "こわい", kanji: "怖い", meaning: "Đáng sợ", type: "i" },
  { dict: "さびしい", kanji: "寂しい", meaning: "Cô đơn", type: "i" },
  { dict: "さむい", kanji: "寒い", meaning: "Lạnh (thời tiết)", type: "i" },
  { dict: "したしい", kanji: "親しい", meaning: "Thân thiết", type: "i" },
  { dict: "しろい", kanji: "白い", meaning: "Màu trắng", type: "i" },
  { dict: "すくない", kanji: "少ない", meaning: "Ít", type: "i" },
  { dict: "すずしい", kanji: "涼しい", meaning: "Mát mẻ", type: "i" },
  { dict: "すごい", kanji: "凄い", meaning: "Tuyệt vời", type: "i" },
  { dict: "すばらしい", kanji: "素晴らしい", meaning: "Tuyệt diệu", type: "i" },
  { dict: "せまい", kanji: "狭い", meaning: "Hẹp", type: "i" },
  { dict: "たかい", kanji: "高い", meaning: "Cao, đắt", type: "i" },
  { dict: "ただしい", kanji: "正しい", meaning: "Chính xác", type: "i" },
  { dict: "たのしい", kanji: "楽しい", meaning: "Vui vẻ", type: "i" },
  { dict: "ちいさい", kanji: "小さい", meaning: "Nhỏ", type: "i" },
  { dict: "ちかい", kanji: "近い", meaning: "Gần", type: "i" },
  { dict: "つまらない", kanji: "詰まらない", meaning: "Nhàm chán", type: "i" },
  { dict: "つめたい", kanji: "冷たい", meaning: "Lạnh (cảm giác)", type: "i" },
  { dict: "つよい", kanji: "強い", meaning: "Mạnh", type: "i" },
  { dict: "とおい", kanji: "遠い", meaning: "Xa", type: "i" },
  { dict: "ながい", kanji: "長い", meaning: "Dài", type: "i" },
  { dict: "なつかしい", kanji: "懐かしい", meaning: "Nhớ nhung", type: "i" },
  { dict: "にがい", kanji: "苦い", meaning: "Đắng", type: "i" },
  { dict: "ぬるい", kanji: "温い", meaning: "Nguội, ấm ấm", type: "i" },
  { dict: "ねむい", kanji: "眠い", meaning: "Buồn ngủ", type: "i" },
  { dict: "はずかしい", kanji: "恥ずかしい", meaning: "Xấu hổ", type: "i" },
  { dict: "ひくい", kanji: "低い", meaning: "Thấp", type: "i" },
  { dict: "ひろい", kanji: "広い", meaning: "Rộng", type: "i" },
  { dict: "ふかい", kanji: "深い", meaning: "Sâu", type: "i" },
  { dict: "ふとい", kanji: "太い", meaning: "Béo, dày", type: "i" },
  { dict: "まずい", kanji: "不味い", meaning: "Dở, tệ", type: "i" },
  { dict: "まるい", kanji: "丸い", meaning: "Tròn", type: "i" },
  { dict: "みじかい", kanji: "短い", meaning: "Ngắn", type: "i" },
  { dict: "むずかしい", kanji: "難しい", meaning: "Khó", type: "i" },
  { dict: "めずらしい", kanji: "珍しい", meaning: "Hiếm", type: "i" },
  { dict: "やさしい", kanji: "優しい", meaning: "Hiền lành", type: "i" },
  { dict: "やすい", kanji: "安い", meaning: "Rẻ", type: "i" },
  { dict: "やわらかい", kanji: "柔らかい", meaning: "Mềm", type: "i" },
  { dict: "よろしい", kanji: "宜しい", meaning: "Được, tốt", type: "i" },
  { dict: "わかい", kanji: "若い", meaning: "Trẻ", type: "i" }
];
const N4_NA_ADJ = [
  { dict: "きれい", kanji: "きれい", meaning: "Đẹp/Sạch", type: "na" },
  { dict: "しずか", kanji: "静か", meaning: "Yên tĩnh", type: "na" },
  { dict: "にぎやか", kanji: "にぎやか", meaning: "Nhộn nhịp", type: "na" },
  { dict: "げんき", kanji: "元気", meaning: "Khỏe", type: "na" },
  { dict: "ひま", kanji: "暇", meaning: "Rảnh", type: "na" },
  { dict: "べんり", kanji: "便利", meaning: "Tiện lợi", type: "na" },
  { dict: "ふべん", kanji: "不便", meaning: "Bất tiện", type: "na" },
  { dict: "じょうず", kanji: "上手", meaning: "Giỏi", type: "na" },
  { dict: "へた", kanji: "下手", meaning: "Dở", type: "na" },
  { dict: "ゆうめい", kanji: "有名", meaning: "Nổi tiếng", type: "na" },
  { dict: "たいせつ", kanji: "大切", meaning: "Quan trọng", type: "na" },
  { dict: "だいじょうぶ", kanji: "大丈夫", meaning: "Không sao", type: "na" },
  { dict: "すき", kanji: "好き", meaning: "Thích", type: "na" },
  { dict: "きらい", kanji: "嫌い", meaning: "Ghét", type: "na" },
  { dict: "とくべつ", kanji: "特別", meaning: "Đặc biệt", type: "na" },
  { dict: "かんたん", kanji: "簡単", meaning: "Đơn giản", type: "na" },
  { dict: "ふくざつ", kanji: "複雑", meaning: "Phức tạp", type: "na" },
  { dict: "しんせつ", kanji: "親切", meaning: "Tử tế", type: "na" },
  { dict: "じゅうよう", kanji: "重要", meaning: "Quan trọng", type: "na" },
  { dict: "あんぜん", kanji: "安全", meaning: "An toàn", type: "na" },
  { dict: "すてき", kanji: "素敵", meaning: "Tuyệt vời", type: "na" },
  { dict: "ていねい", kanji: "丁寧", meaning: "Lịch sự/Cẩn thận", type: "na" },
  { dict: "りっぱ", kanji: "立派", meaning: "Xuất chúng", type: "na" },
  { dict: "むり", kanji: "無理", meaning: "Vô lý/Quá sức", type: "na" },
  { dict: "じゆう", kanji: "自由", meaning: "Tự do", type: "na" },
  { dict: "ねっしん", kanji: "熱心", meaning: "Nhiệt tình", type: "na" },
  { dict: "たいへん", kanji: "大変", meaning: "Vất vả", type: "na" },
  { dict: "ひつよう", kanji: "必要", meaning: "Cần thiết", type: "na" },
  { dict: "さかん", kanji: "盛ん", meaning: "Phổ biến/Thịnh vượng", type: "na" },
  { dict: "ざんねん", kanji: "残念", meaning: "Đáng tiếc", type: "na" },
  { dict: "いや", kanji: "嫌", meaning: "Đáng ghét", type: "na" },
  { dict: "きけん", kanji: "危険", meaning: "Nguy hiểm", type: "na" },
  { dict: "しつれい", kanji: "失礼", meaning: "Thất lễ", type: "na" },
  { dict: "じゃま", kanji: "邪魔", meaning: "Vướng víu", type: "na" },
  { dict: "じゅうぶん", kanji: "十分", meaning: "Đủ", type: "na" },
  { dict: "じょうぶ", kanji: "丈夫", meaning: "Chắc chắn", type: "na" },
  { dict: "てきとう", kanji: "適当", meaning: "Thích hợp", type: "na" },
  { dict: "へん", kanji: "変", meaning: "Kỳ lạ", type: "na" },
  { dict: "まじめ", kanji: "真面目", meaning: "Chăm chỉ, nghiêm túc", type: "na" },
  { dict: "むだ", kanji: "無駄", meaning: "Lãng phí", type: "na" },
  { dict: "わがまま", kanji: "我が儘", meaning: "Ích kỷ", type: "na" },
  { dict: "あんしん", kanji: "安心", meaning: "An tâm", type: "na" },
  { dict: "いっしょうけんめい", kanji: "一生懸命", meaning: "Cố gắng hết sức", type: "na" },
  { dict: "おなじ", kanji: "同じ", meaning: "Giống nhau", type: "na" },
  { dict: "かんなん", kanji: "困難", meaning: "Khó khăn", type: "na" },
  { dict: "きゅう", kanji: "急", meaning: "Gấp", type: "na" },
  { dict: "あんぜん", kanji: "安全", meaning: "An toàn", type: "na" },
  { dict: "いっしょうけんめい", kanji: "一生懸命", meaning: "Cố gắng hết sức", type: "na" },
  { dict: "いろいろ", kanji: "色々", meaning: "Nhiều loại", type: "na" },
  { dict: "おしゃれ", kanji: "お洒落", meaning: "Sành điệu", type: "na" },
  { dict: "おなじ", kanji: "同じ", meaning: "Giống nhau", type: "na" },
  { dict: "かんたん", kanji: "簡単", meaning: "Đơn giản", type: "na" },
  { dict: "きけん", kanji: "危険", meaning: "Nguy hiểm", type: "na" },
  { dict: "きゅう", kanji: "急", meaning: "Gấp gáp", type: "na" },
  { dict: "きらい", kanji: "嫌い", meaning: "Ghét", type: "na" },
  { dict: "きれい", kanji: "綺麗", meaning: "Đẹp, sạch", type: "na" },
  { dict: "げんき", kanji: "元気", meaning: "Khỏe mạnh", type: "na" },
  { dict: "ざんねん", kanji: "残念", meaning: "Đáng tiếc", type: "na" },
  { dict: "しあわせ", kanji: "幸せ", meaning: "Hạnh phúc", type: "na" },
  { dict: "しずか", kanji: "静か", meaning: "Yên tĩnh", type: "na" },
  { dict: "じゆう", kanji: "自由", meaning: "Tự do", type: "na" },
  { dict: "じゅうぶん", kanji: "十分", meaning: "Đầy đủ", type: "na" },
  { dict: "じょうぶ", kanji: "丈夫", meaning: "Chắc chắn", type: "na" },
  { dict: "じょうず", kanji: "上手", meaning: "Giỏi", type: "na" },
  { dict: "しんせつ", kanji: "親切", meaning: "Tốt bụng", type: "na" },
  { dict: "すき", kanji: "好き", meaning: "Thích", type: "na" },
  { dict: "ていねい", kanji: "丁寧", meaning: "Lịch sự", type: "na" },
  { dict: "てきとう", kanji: "適当", meaning: "Thích hợp", type: "na" },
  { dict: "とくべつ", kanji: "特別", meaning: "Đặc biệt", type: "na" },
  { dict: "にぎやか", kanji: "賑やか", meaning: "Nhộn nhịp", type: "na" },
  { dict: "ねっしん", kanji: "熱心", meaning: "Nhiệt tình", type: "na" },
  { dict: "ひつよう", kanji: "必要", meaning: "Cần thiết", type: "na" },
  { dict: "ひま", kanji: "暇", meaning: "Rảnh rỗi", type: "na" },
  { dict: "ふくざつ", kanji: "複雑", meaning: "Phức tạp", type: "na" },
  { dict: "べんり", kanji: "便利", meaning: "Tiện lợi", type: "na" },
  { dict: "ふべん", kanji: "不便", meaning: "Bất tiện", type: "na" },
  { dict: "まじめ", kanji: "真面目", meaning: "Chăm chỉ", type: "na" },
  { dict: "むだ", kanji: "無駄", meaning: "Lãng phí", type: "na" },
  { dict: "むり", kanji: "無理", meaning: "Quá sức", type: "na" },
  { dict: "りっぱ", kanji: "立派", meaning: "Tuyệt vời", type: "na" },
  { dict: "わがまま", kanji: "我侭", meaning: "Ích kỷ", type: "na" },
  { dict: "らく", kanji: "楽", meaning: "Thoải mái", type: "na" },
  { dict: "りそう", kanji: "理想", meaning: "Lý tưởng", type: "na" },
  { dict: "だめ", kanji: "駄目", meaning: "Không được", type: "na" }
];
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function generateVerbQuizItems(forms, count = 15, options = {}) {
  const selectedForms = sanitizeN4VerbForms(forms).length ? sanitizeN4VerbForms(forms) : N4_VERB_FORMS.map((f) => f.id);
  const items = [];
  const patternFilter = options.patternFilter || [];
  const pool = patternFilter.length ? N4_VERBS.filter((v) => patternFilter.includes(getVerbPatternTag(v.dict, v.group))) : N4_VERBS;
  const verbs = shuffle(pool);
  let questionSeq = 0;
  for (const verb of verbs) {
    if (items.length >= count) break;
    const form = selectedForms[Math.floor(Math.random() * selectedForms.length)];
    const formInfo = N4_VERB_FORMS.find((f) => f.id === form);
    const answer = conjugateVerb(verb.dict, form);
    if (!answer) continue;
    const wrongs = /* @__PURE__ */ new Set();
    for (const f of N4_VERB_FORMS) {
      if (f.id !== form) {
        const w = conjugateVerb(verb.dict, f.id);
        if (w && w !== answer) wrongs.add(w);
      }
    }
    const item = {
      id: `${verb.dict}::${form}::${questionSeq++}`,
      _type: "verb-conjugation",
      dict: verb.dict,
      word: verb.kanji || verb.dict,
      reading: verb.dict,
      meaning: verb.meaning,
      formId: form,
      formLabel: (formInfo == null ? void 0 : formInfo.label) || form,
      formDesc: (formInfo == null ? void 0 : formInfo.desc) || "",
      answer,
      group: verb.group,
      groupLabel: verb.group === 1 ? "Nhóm 1 (五段)" : verb.group === 2 ? "Nhóm 2 (一段)" : "Nhóm 3 (Bất quy tắc)",
      patternTag: getVerbPatternTag(verb.dict, verb.group),
      wrongs: shuffle([...wrongs]).slice(0, 5)
    };
    if (validateConjugationItem(item)) items.push(item);
  }
  return shuffle(items);
}
const CONJ_STATS_KEY = "n4-conj-stats-v1";
const CONJ_SRS_KEY = "n4-conj-srs-v1";
const CONJ_PREFS_KEY = "n4-conj-prefs-v1";
function loadJSON(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : fallback;
  } catch (e) {
    return fallback;
  }
}
function loadConjPrefs() {
  return loadJSON(CONJ_PREFS_KEY, {
    difficulty: "normal",
    itemCount: 10,
    selectedVerbForms: [],
    selectedAdjForms: [],
    selectedPatterns: []
  });
}
function useConjugationStats() {
  const [stats, setStats] = reactExports.useState(() => loadJSON(CONJ_STATS_KEY, {}));
  const [srsQueue, setSrsQueue] = reactExports.useState(() => loadJSON(CONJ_SRS_KEY, []));
  reactExports.useEffect(() => {
    try {
      const enforced = LocalStorageQuotaManager.enforceQueueLimit(stats);
      LocalStorageQuotaManager.safeSet(CONJ_STATS_KEY, enforced);
    } catch (e) {
    }
  }, [stats]);
  reactExports.useEffect(() => {
    try {
      const enforced = LocalStorageQuotaManager.enforceQueueLimit(srsQueue);
      LocalStorageQuotaManager.safeSet(CONJ_SRS_KEY, enforced);
    } catch (e) {
    }
  }, [srsQueue]);
  const recordResult = reactExports.useCallback((formId, isCorrect) => {
    if (!formId) return;
    setStats((prev) => {
      const cur = prev[formId] || { correct: 0, wrong: 0 };
      return {
        ...prev,
        [formId]: {
          correct: cur.correct + (isCorrect ? 1 : 0),
          wrong: cur.wrong + (isCorrect ? 0 : 1)
        }
      };
    });
  }, []);
  const getAccuracy = reactExports.useCallback((formId) => {
    const cur = stats[formId] || { correct: 0, wrong: 0 };
    const total = cur.correct + cur.wrong;
    return total > 0 ? Math.round(cur.correct / total * 100) : null;
  }, [stats]);
  const weakForms = reactExports.useMemo(() => {
    return N4_VERB_FORMS.map((f) => ({ id: f.id, acc: getAccuracy(f.id) })).filter((x) => x.acc !== null && x.acc < 70).sort((a, b) => a.acc - b.acc).map((x) => x.id);
  }, [getAccuracy]);
  const addToSrs = reactExports.useCallback((dict, formId) => {
    if (!dict || !formId) return;
    setSrsQueue((prev) => {
      if (prev.some((x) => x.dict === dict && x.formId === formId)) return prev;
      return [{ dict, formId, failedAt: Date.now() }, ...prev].slice(0, 120);
    });
  }, []);
  const clearFromSrs = reactExports.useCallback((dict, formId) => {
    setSrsQueue((prev) => prev.filter((x) => !(x.dict === dict && x.formId === formId)));
  }, []);
  const clearStats = reactExports.useCallback(() => {
    setStats({});
    setSrsQueue([]);
  }, []);
  return {
    stats,
    srsQueue,
    weakForms,
    recordResult,
    getAccuracy,
    addToSrs,
    clearFromSrs,
    clearStats
  };
}
function enhanceErrorExplanation(item, selectedAnswer, correctAnswer) {
  if (!item || !selectedAnswer || !correctAnswer) return null;
  const baseExplanation = getErrorExplanation(item, selectedAnswer, correctAnswer);
  classifyConjugationError(item, selectedAnswer, correctAnswer);
  if (item.formId === "causative-passive" && selectedAnswer && item.dict) {
    const passive = conjugateVerb(item.dict, "passive");
    if (passive && selectedAnswer === passive) {
      return "⚠️ Bạn đã chọn thể bị động (受身形) thay vì thể sai khiến-bị động (使役受身形). 使役受身形 = bị bắt phải làm ~ (gốc + させられる).";
    }
    const causative = conjugateVerb(item.dict, "causative");
    if (causative && selectedAnswer === causative) {
      return "⚠️ Bạn đã chọn thể sai khiến (使役形, bắt làm) thay vì thể sai khiến-bị động (使役受身形, bị bắt làm). Cần thêm phần bị động: させる → させられる.";
    }
  }
  if (item.formId === "volitional" && selectedAnswer) {
    const masu = conjugateVerb(item.dict, "masu");
    if (masu && selectedAnswer === masu) {
      return "⚠️ Bạn đã chọn thể lịch sự (ます形). Thể ý chí (意向形) dùng để rủ/đề nghị: nhóm 1 → đuôi ō+う, nhóm 2 → よう, nhóm 3 → しよう/こよう.";
    }
    const potential = conjugateVerb(item.dict, "potential");
    if (potential && selectedAnswer === potential) {
      return '⚠️ Bạn đã chọn thể khả năng (可能形, có thể ~). Thể ý chí (意向形) = "hãy cùng ~/tôi sẽ ~": o-đoạn + う.';
    }
  }
  if ((item.formId === "conditional" || item.formId === "tara") && selectedAnswer) {
    const other = item.formId === "conditional" ? "tara" : "conditional";
    const otherForm = conjugateVerb(item.dict, other);
    if (otherForm && selectedAnswer === otherForm) {
      return item.formId === "conditional" ? "⚠️ Bạn đã chọn 〜たら (hoàn thành điều kiện). Câu hỏi yêu cầu 〜ば (điều kiện chung): e-đoạn + ば." : "⚠️ Bạn đã chọn 〜ば (điều kiện chung). Câu hỏi yêu cầu 〜たら (hoàn thành điều kiện): た形 + ら.";
    }
  }
  if ((item.formId === "potential" || item.formId === "passive") && item.group === 2) {
    const potentialForm = conjugateVerb(item.dict, "potential");
    const passiveForm = conjugateVerb(item.dict, "passive");
    if (potentialForm === passiveForm && selectedAnswer !== correctAnswer) {
      return "⚠️ Nhóm 2: thể khả năng (可能形) và thể bị động (受身形) có cùng dạng (～られる). Kiểm tra ngữ cảnh để phân biệt.";
    }
  }
  if (item._type === "adj-conjugation") {
    if (item.adjType === "い形容詞" && selectedAnswer && selectedAnswer.includes("じゃない")) {
      return "⚠️ Bạn đang chia theo mẫu な形容詞 (じゃない). Đây là い形容詞: bỏ い → くない.";
    }
    if (item.adjType === "な形容詞" && selectedAnswer && selectedAnswer.includes("くない")) {
      return "⚠️ Bạn đang chia theo mẫu い形容詞 (くない). Đây là な形容詞: gốc + じゃない.";
    }
  }
  return baseExplanation;
}
function generateAdjQuizItems(forms, count = 15) {
  const selectedForms = forms.length ? forms : ADJ_FORMS.map((f) => f.id);
  const items = [];
  const allAdj = shuffle([...N4_I_ADJ.map((a) => ({ ...a, type: "i" })), ...N4_NA_ADJ]);
  let questionSeq = 0;
  for (const adj of allAdj) {
    if (items.length >= count) break;
    const form = selectedForms[Math.floor(Math.random() * selectedForms.length)];
    const formInfo = ADJ_FORMS.find((f) => f.id === form);
    const isI = adj.type === "i" || !adj.type && adj.dict.endsWith("い");
    const answer = isI ? conjugateIAdj(adj.dict, form) : conjugateNaAdj(adj.dict, form);
    if (!answer) continue;
    const wrongs = /* @__PURE__ */ new Set();
    for (const f of ADJ_FORMS) {
      if (f.id !== form) {
        const w = isI ? conjugateIAdj(adj.dict, f.id) : conjugateNaAdj(adj.dict, f.id);
        if (w && w !== answer) wrongs.add(w);
      }
    }
    const item = {
      id: `adj::${adj.dict}::${form}::${questionSeq++}`,
      _type: "adj-conjugation",
      word: adj.kanji || adj.dict,
      reading: adj.dict,
      meaning: adj.meaning,
      adjType: isI ? "い形容詞" : "な形容詞",
      formId: form,
      formLabel: (formInfo == null ? void 0 : formInfo.label) || form,
      formDesc: (formInfo == null ? void 0 : formInfo.desc) || "",
      answer,
      wrongs: shuffle([...wrongs]).slice(0, 5)
    };
    if (validateConjugationItem(item)) items.push(item);
  }
  return shuffle(items);
}
const formatInlineMeaning = (meaning) => String(meaning || "").replace(/[()]/g, "").replace(/\s*\/\s*/g, " / ").replace(/\s+/g, " ").trim();
const conjFront = (item) => {
  return `${item.reading} (${formatInlineMeaning(item.meaning)}) → ${item.formLabel}`;
};
const conjSubtitle = (item) => {
  const isVerb = item._type === "verb-conjugation";
  return isVerb ? `${item.groupLabel} · Chia sang: ${item.formDesc}` : `${item.adjType} · Chia sang: ${item.formDesc}`;
};
const conjBack = (item) => ({
  reading: item.answer,
  meaning: item.meaning,
  sections: [
    { icon: "📐", label: "Dạng chia", content: `${item.formLabel} — ${item.formDesc}` },
    { icon: "✅", label: "Đáp án", content: item.answer },
    ...item.groupLabel ? [{ icon: "📂", label: "Nhóm", content: item.groupLabel }] : [],
    ...item.adjType ? [{ icon: "📂", label: "Loại", content: item.adjType }] : []
  ],
  subtitle: item.formDesc
});
function getConjugationRule(item) {
  if (!item) return "";
  const isVerb = item._type === "verb-conjugation";
  if (!isVerb) {
    if (item.adjType === "い形容詞") return `い形: bỏ「い」→ hậu tố (${item.formDesc})`;
    return `な形: gốc + hậu tố (${item.formDesc})`;
  }
  if (item.formId === "tai") return `たい形: lấy ます形, bỏ hẳn「ます」rồi thêm「たい」`;
  if (item.group === 3) {
    if (item.dict === "くる" || item.dict === "来る") return `来る: bất quy tắc → ${item.answer}`;
    const prefix = item.dict.slice(0, -2);
    const suffix = item.answer.slice(prefix.length);
    return `する → ${suffix}`;
  }
  if (item.group === 2) return `Nhóm 2: bỏ「る」→ hậu tố (${item.formDesc})`;
  return `Nhóm 1 (${item.dict.slice(-1)}): đổi âm cuối → ${item.formDesc}`;
}
function getTransformationSteps(item) {
  if (!item) return [];
  if (item._type === "adj-conjugation") {
    const base = item.reading;
    if (item.adjType === "い形容詞") {
      return [
        `Gốc: ${base}`,
        "Bước 1: bỏ 「い」 ở cuối (hoặc đổi いい -> よ)",
        `Bước 2: gắn mẫu ${item.formLabel}`,
        `Kết quả: ${item.answer}`
      ];
    }
    return [
      `Gốc: ${base}`,
      `Bước 1: giữ nguyên gốc な形容詞`,
      `Bước 2: gắn mẫu ${item.formLabel}`,
      `Kết quả: ${item.answer}`
    ];
  }
  if (item.group === 3) {
    if (item.formId === "tai") {
      const masu = conjugateVerb(item.dict, "masu");
      const stem = (masu == null ? void 0 : masu.endsWith("ます")) ? masu.slice(0, -2) : "";
      return [
        `Gốc: ${item.reading}`,
        "Bước 1: xác định thể từ điển để biết đây là động từ bất quy tắc",
        `Bước 2: lấy ます形: ${masu || "—"}`,
        `Bước 3: bỏ hẳn「ます」→ ${stem || "—"}, rồi thêm「たい」`,
        `Kết quả: ${item.answer}`
      ];
    }
    return [
      `Gốc: ${item.reading}`,
      "Bước 1: nhận diện bất quy tắc (する / くる)",
      `Bước 2: áp dụng mẫu ${item.formLabel}`,
      `Kết quả: ${item.answer}`
    ];
  }
  if (item.group === 2) {
    if (item.formId === "tai") {
      const masu = conjugateVerb(item.dict, "masu");
      const stem = (masu == null ? void 0 : masu.endsWith("ます")) ? masu.slice(0, -2) : item.reading.slice(0, -1);
      return [
        `Gốc: ${item.reading}`,
        `Bước 1: lấy ます形: ${masu || "—"}`,
        `Bước 2: bỏ hẳn「ます」→ ${stem}`,
        `Bước 3: thêm「たい」→ ${item.answer}`,
        `Kết quả lịch sự: ${item.answer}です`
      ];
    }
    return [
      `Gốc: ${item.reading}`,
      "Bước 1: bỏ 「る」",
      `Bước 2: gắn mẫu ${item.formLabel}`,
      `Kết quả: ${item.answer}`
    ];
  }
  if (item.formId === "tai") {
    const masu = conjugateVerb(item.dict, "masu");
    const stem = (masu == null ? void 0 : masu.endsWith("ます")) ? masu.slice(0, -2) : "";
    return [
      `Gốc: ${item.reading}`,
      `Bước 1: xác định thể từ điển để biết nhóm động từ: ${item.groupLabel}`,
      `Bước 2: lấy ます形: ${masu || "—"}`,
      `Bước 3: bỏ hẳn「ます」→ ${stem || "—"}, rồi thêm「たい」`,
      `Kết quả: ${item.answer}`
    ];
  }
  return [
    `Gốc: ${item.reading}`,
    `Bước 1: xác định âm cuối 「${item.reading.slice(-1)}」 của nhóm 1`,
    `Bước 2: đổi hàng âm theo mẫu ${item.formLabel}`,
    `Kết quả: ${item.answer}`
  ];
}
function validateQuizPool(items) {
  if (!Array.isArray(items) || items.length === 0) {
    console.warn("[ConjugationDojo] Empty quiz pool");
    return [];
  }
  const validated = items.filter((item) => {
    if (!item || typeof item !== "object") return false;
    if (!item.id || !item.answer) return false;
    if (!item.reading || !isLikelyJapaneseText(item.answer)) return false;
    if (!item.formId) return false;
    if (!Array.isArray(item.wrongs) || item.wrongs.length < 1) return false;
    return true;
  });
  return validated;
}
const LocalStorageQuotaManager = {
  MAX_SRS_ENTRIES: 100,
  MAX_STATS_SIZE_KB: 200,
  /**
   * Enforces SRS queue size limit (FIFO)
   */
  enforceQueueLimit(queue) {
    if (!Array.isArray(queue)) return [];
    if (queue.length <= this.MAX_SRS_ENTRIES) return queue;
    console.warn(`[ConjugationDojo] SRS queue exceeded limit (${queue.length}), trimming oldest ${queue.length - this.MAX_SRS_ENTRIES} entries`);
    return queue.slice(queue.length - this.MAX_SRS_ENTRIES);
  },
  /**
   * Checks if localStorage operation would exceed quota
   */
  canStore(key, value) {
    try {
      const jsonStr = JSON.stringify(value);
      const sizeKB = new Blob([jsonStr]).size / 1024;
      return sizeKB < this.MAX_STATS_SIZE_KB;
    } catch (e) {
      return false;
    }
  },
  /**
   * Safe localStorage write with quota protection
   */
  safeSet(key, value) {
    try {
      if (!this.canStore(key, value)) {
        console.warn(`[ConjugationDojo] localStorage quota exceeded for key ${key}`);
        return false;
      }
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error(`[ConjugationDojo] localStorage write failed: ${e.message}`);
      return false;
    }
  }
};
const RapidClickProtection = {
  clicks: /* @__PURE__ */ new Map(),
  // key -> { count, timestamp }
  /**
   * Records click attempt and returns true if allowed
   */
  attempt(key, throttleMs = 500) {
    const now = Date.now();
    const record = this.clicks.get(key) || { count: 0, timestamp: now };
    if (now - record.timestamp > throttleMs) {
      this.clicks.set(key, { count: 1, timestamp: now });
      return true;
    }
    if (record.count > 0) {
      record.count++;
      console.warn(`[ConjugationDojo] Rapid click detected on ${key} (${record.count} in ${throttleMs}ms)`);
      return false;
    }
    record.count++;
    this.clicks.set(key, record);
    return true;
  },
  /**
   * Clears record for key
   */
  reset(key) {
    this.clicks.delete(key);
  }
};
function validateOptionsStability(optionsRef, questionId) {
  if (!optionsRef.current) return false;
  if (optionsRef.current.key !== questionId) {
    console.warn(`[ConjugationDojo] Options stale: expected ${questionId}, got ${optionsRef.current.key}`);
    return false;
  }
  const options = optionsRef.current.options;
  if (!Array.isArray(options) || options.length < 2) {
    console.warn(`[ConjugationDojo] Options integrity check failed: ${options ? options.length : "null"} options`);
    return false;
  }
  const unique = new Set(options);
  if (unique.size !== options.length) {
    console.warn(`[ConjugationDojo] Non-unique options: ${unique.size}/${options.length} unique`);
    return false;
  }
  return true;
}
function hasDistinctDistractor(options, correctAnswer) {
  if (!Array.isArray(options) || !correctAnswer) return false;
  return options.some((option) => option && option !== correctAnswer && !String(option).includes(correctAnswer));
}
function findDistinctDistractor(item, correctAnswer) {
  if (!item || !correctAnswer) return null;
  if (item._type === "verb-conjugation") {
    for (const verb of shuffle(N4_VERBS)) {
      if (!verb || verb.dict === item.dict) continue;
      const candidate = conjugateVerb(verb.dict, item.formId);
      if (candidate && candidate !== correctAnswer && !candidate.includes(correctAnswer)) {
        return candidate;
      }
    }
    return null;
  }
  if (item._type === "adj-conjugation") {
    const pool = item.adjType === "い形容詞" ? N4_I_ADJ : N4_NA_ADJ;
    for (const adjective of shuffle(pool)) {
      if (!adjective || adjective.dict === item.dict) continue;
      const candidate = item.adjType === "い形容詞" ? conjugateIAdj(adjective.dict, item.formId) : conjugateNaAdj(adjective.dict, item.formId);
      if (candidate && candidate !== correctAnswer && !candidate.includes(correctAnswer)) {
        return candidate;
      }
    }
  }
  return null;
}
function ConjugationQuizInner({ items, maxQuestions, onResult, trainerId }) {
  const scoring = useScoreEngine(trainerId);
  const [sessionKey, setSessionKey] = reactExports.useState(0);
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [answered, setAnswered] = reactExports.useState(false);
  const [retryItems, setRetryItems] = reactExports.useState(null);
  const [hintLevel, setHintLevel] = reactExports.useState(0);
  const [showTable, setShowTable] = reactExports.useState(false);
  const [screenShake, setScreenShake] = reactExports.useState(false);
  const [state, setState] = reactExports.useState({ currentQuestionId: null, status: "idle" });
  const [damageEvents, setDamageEvents] = reactExports.useState([]);
  const [comboTier, setComboTier] = reactExports.useState(null);
  const [effectBanner, setEffectBanner] = reactExports.useState(null);
  const answerLockRef = reactExports.useRef(false);
  const statusRef = reactExports.useRef("idle");
  const currentIdRef = reactExports.useRef(null);
  const currentItemRef = reactExports.useRef(null);
  const itemsRef = reactExports.useRef(null);
  const effectTimeoutsRef = reactExports.useRef(/* @__PURE__ */ new Set());
  if (!itemsRef.current && (items == null ? void 0 : items.length)) itemsRef.current = items;
  const pool = reactExports.useMemo(() => {
    const src = retryItems || itemsRef.current;
    if (!(src == null ? void 0 : src.length)) return [];
    const valid = src.filter((it) => validateConjugationItem(it));
    const enhanced = validateQuizPool(valid);
    if (enhanced.length < valid.length) {
      console.warn(`[ConjugationDojo] Pool validation filtered out ${valid.length - enhanced.length} invalid items`);
    }
    return shuffle(enhanced).slice(0, retryItems ? enhanced.length : maxQuestions);
  }, [sessionKey, retryItems, maxQuestions]);
  const current = pool[qIdx] || null;
  const finished = qIdx >= pool.length && pool.length > 0;
  reactExports.useEffect(() => {
    currentItemRef.current = current;
    const id = (current == null ? void 0 : current.id) || null;
    currentIdRef.current = id;
    answerLockRef.current = false;
    statusRef.current = current ? "idle" : "transitioning";
    setState({ currentQuestionId: id, status: statusRef.current });
    setSelected(null);
    setAnswered(false);
    setHintLevel(0);
    setShowTable(false);
  }, [qIdx, sessionKey, current == null ? void 0 : current.id]);
  const optionsRef = reactExports.useRef({ key: "", options: [], correctIdx: -1 });
  const optKeyRef = reactExports.useRef("");
  const optKey = `${sessionKey}-${(current == null ? void 0 : current.id) || qIdx}`;
  if (current && optionsRef.current.key !== optKey) {
    const correct = current.answer;
    const sameWrongs = (current.wrongs || []).filter((w) => w && w !== correct);
    const picked = shuffle(sameWrongs).slice(0, 3);
    const raw = shuffle([correct, ...picked]);
    const seen = /* @__PURE__ */ new Set();
    let unique = raw.filter((o) => {
      if (seen.has(o)) return false;
      seen.add(o);
      return true;
    });
    if (!hasDistinctDistractor(unique, correct)) {
      const fallback = findDistinctDistractor(current, correct);
      if (fallback && !unique.includes(fallback)) {
        const fallbackRaw = shuffle([correct, ...sameWrongs.filter((option) => option !== fallback).slice(0, 2), fallback]);
        const fallbackSeen = /* @__PURE__ */ new Set();
        unique = fallbackRaw.filter((option) => {
          if (fallbackSeen.has(option)) return false;
          fallbackSeen.add(option);
          return true;
        });
      }
    }
    optionsRef.current = { key: optKey, options: unique, correctIdx: unique.indexOf(correct) };
    optKeyRef.current = optKey;
  }
  const clearEffectTimeouts = reactExports.useCallback(() => {
    effectTimeoutsRef.current.forEach(clearTimeout);
    effectTimeoutsRef.current.clear();
  }, []);
  const resetEffectState = reactExports.useCallback(() => {
    clearEffectTimeouts();
    setDamageEvents([]);
    setComboTier(null);
    setEffectBanner(null);
  }, [clearEffectTimeouts]);
  const scheduleEffectCleanup = reactExports.useCallback((callback, delayMs) => {
    const timeoutId = setTimeout(() => {
      effectTimeoutsRef.current.delete(timeoutId);
      callback();
    }, delayMs);
    effectTimeoutsRef.current.add(timeoutId);
    return timeoutId;
  }, []);
  const pushEffectText = reactExports.useCallback((payload, durationMs = 760) => {
    const nextEvent = createCombatText(payload);
    setDamageEvents((events) => [...events, nextEvent]);
    scheduleEffectCleanup(() => {
      setDamageEvents((events) => events.filter((event) => event.id !== nextEvent.id));
    }, durationMs);
    return nextEvent;
  }, [scheduleEffectCleanup]);
  const showEffectBanner = reactExports.useCallback((payload, durationMs = 1200) => {
    const nextBanner = createBattleBanner(payload);
    setEffectBanner(nextBanner);
    scheduleEffectCleanup(() => {
      setEffectBanner((banner) => (banner == null ? void 0 : banner.id) === nextBanner.id ? null : banner);
    }, durationMs);
    return nextBanner;
  }, [scheduleEffectCleanup]);
  const triggerComboTierEffect = reactExports.useCallback((nextCombo) => {
    const tier = getComboTier(nextCombo);
    if (!tier) return null;
    const tierState = { ...tier, combo: nextCombo };
    setComboTier(tierState);
    scheduleEffectCleanup(() => {
      setComboTier((activeTier) => (activeTier == null ? void 0 : activeTier.combo) === nextCombo ? null : activeTier);
    }, 1100);
    if (nextCombo === tier.threshold) {
      showEffectBanner({
        icon: tier.icon,
        label: `${tier.label}!`,
        detail: `Chuỗi x${nextCombo} đang rất ổn.`,
        tone: "power"
      }, 1e3);
    }
    return tierState;
  }, [scheduleEffectCleanup, showEffectBanner]);
  const handleAnswer = reactExports.useCallback((idx, clickedQuestionId) => {
    if (!RapidClickProtection.attempt(clickedQuestionId, 500)) {
      console.warn(`[ConjugationDojo] Rapid click rejected for question ${clickedQuestionId}`);
      return;
    }
    if (!currentItemRef.current) return;
    if (!clickedQuestionId || clickedQuestionId !== currentIdRef.current) return;
    if (statusRef.current !== "idle" || answerLockRef.current) return;
    answerLockRef.current = true;
    statusRef.current = "locked";
    setState((prev) => ({ ...prev, status: "locked" }));
    const item = currentItemRef.current;
    if (!validateOptionsStability(optionsRef, optKeyRef.current)) {
      console.error("[ConjugationDojo] Options validation failed, aborting answer submission");
      answerLockRef.current = false;
      return;
    }
    const opts = optionsRef.current.options;
    const cIdx = optionsRef.current.correctIdx;
    const selectedAnswer2 = opts[idx];
    const correctAnswer2 = item.answer;
    const isCorrect2 = idx === cIdx;
    const comboBeforeAnswer = scoring.combo;
    const powerUps = useLearningStore.getState().powerUps;
    const skipShieldActive = ((powerUps == null ? void 0 : powerUps.skipShield) || 0) > 0;
    const comboProtected = skipShieldActive || ((powerUps == null ? void 0 : powerUps.comboSaver) || 0) > 0 || ((powerUps == null ? void 0 : powerUps.titanShield) || 0) > 0;
    setSelected(idx);
    setAnswered(true);
    if (isCorrect2) {
      const nextCombo = comboBeforeAnswer + 1;
      scoring.recordCorrect(item);
      playSFX("correct");
      pushEffectText({
        amount: nextCombo,
        label: `+${calcXp(nextCombo)} XP`,
        target: "boss",
        left: "50%",
        top: "18%",
        variant: nextCombo >= 5 ? "crit" : "hit",
        emphasis: nextCombo >= 5,
        color: nextCombo >= 5 ? "#fde68a" : "#4ade80",
        textShadow: nextCombo >= 5 ? "0 0 14px rgba(250, 204, 21, 0.52)" : "0 0 12px rgba(74, 222, 128, 0.45)"
      });
      if (nextCombo === 3) {
        showEffectBanner({
          icon: "🧠",
          label: "Nhịp đang lên",
          detail: "Bạn đã đúng 3 câu liên tiếp.",
          tone: "info"
        }, 900);
      }
      triggerComboTierEffect(nextCombo);
    } else {
      scoring.recordWrong(item);
      playSFX("wrong");
      setScreenShake(true);
      setTimeout(() => setScreenShake(false), 400);
      setComboTier(null);
      pushEffectText({
        amount: 0,
        label: skipShieldActive ? "Chắn lỗi" : "Sai rồi",
        target: "player",
        left: "50%",
        top: "18%",
        color: skipShieldActive ? "#c4b5fd" : "#fca5a5",
        textShadow: skipShieldActive ? "0 0 12px rgba(196, 181, 253, 0.55)" : "0 0 10px rgba(248, 113, 113, 0.38)"
      });
      if (skipShieldActive) {
        showEffectBanner({
          icon: "🛡️",
          label: "Lá chắn cứu nguy",
          detail: "Lỗi sai đã bị hấp thụ, chuỗi vẫn giữ nguyên.",
          tone: "power"
        }, 1200);
      } else if (comboProtected && comboBeforeAnswer > 1) {
        showEffectBanner({
          icon: "🧷",
          label: "Combo được giữ",
          detail: `Power-up đã cứu chuỗi x${comboBeforeAnswer}.`,
          tone: "power"
        }, 1200);
      } else if (comboBeforeAnswer > 1) {
        showEffectBanner({
          icon: "💔",
          label: "Combo bị gãy",
          detail: `Chuỗi x${comboBeforeAnswer} đã mất.`,
          tone: "warning"
        }, 1300);
      }
    }
    statusRef.current = "showing-result";
    setState((prev) => ({ ...prev, status: "showing-result" }));
    if (onResult) onResult({ item, isCorrect: isCorrect2, selectedAnswer: selectedAnswer2, correctAnswer: correctAnswer2 });
  }, [onResult, pushEffectText, scoring, showEffectBanner, triggerComboTierEffect]);
  const handleNext = reactExports.useCallback(() => {
    if (!currentItemRef.current) return;
    if (statusRef.current !== "showing-result" && statusRef.current !== "locked") return;
    statusRef.current = "transitioning";
    setState((prev) => ({ ...prev, status: "transitioning" }));
    answerLockRef.current = false;
    setQIdx((q) => q + 1);
  }, []);
  const restart = reactExports.useCallback(() => {
    setRetryItems(null);
    setSessionKey((k) => k + 1);
    setQIdx(0);
    setSelected(null);
    setAnswered(false);
    answerLockRef.current = false;
    resetEffectState();
    scoring.reset();
  }, [resetEffectState, scoring]);
  const retryWrong = reactExports.useCallback(() => {
    var _a;
    const wrong = scoring.history.filter((h) => !h.correct).map((h) => h.item);
    if (wrong.length > 0) {
      setRetryItems(wrong);
      setSessionKey((k) => k + 1);
      setQIdx(0);
      setSelected(null);
      setAnswered(false);
      answerLockRef.current = false;
      statusRef.current = "idle";
      setState({ currentQuestionId: ((_a = wrong[0]) == null ? void 0 : _a.id) || null, status: "idle" });
      resetEffectState();
      scoring.reset();
    }
  }, [resetEffectState, scoring]);
  reactExports.useEffect(() => () => clearEffectTimeouts(), [clearEffectTimeouts]);
  reactExports.useEffect(() => {
    const opts = optionsRef.current.options;
    function onKey(e) {
      if (!current) return;
      if (!answered) {
        const num = parseInt(e.key);
        if (num >= 1 && num <= opts.length) handleAnswer(num - 1, current.id);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleNext();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [answered, handleAnswer, handleNext, current]);
  reactExports.useEffect(() => {
    if (current) speakJP(current.reading || current.dict || "");
  }, [qIdx, sessionKey]);
  const hintText = reactExports.useMemo(() => {
    if (!current || hintLevel <= 0) return "";
    if (hintLevel === 1) {
      if (current._type === "verb-conjugation") {
        const groupNames = { 1: "Nhóm 1 (Godan), ", 2: "Nhóm 2 (Ichidan), ", 3: "Nhóm 3 (Bất quy tắc), " };
        const groupInfo = groupNames[current.group] || `Nhóm ${current.group}, `;
        return `💡 Level 1: Động từ này thuộc ${groupInfo}dạng là ${current.formLabel}.`;
      }
      const adjTypeLabel = current.adjType === "い形容詞" ? "tính từ い" : "tính từ な";
      return `💡 Level 1: Đây là ${adjTypeLabel}, cần chia ${current.formLabel}.`;
    }
    if (hintLevel === 2) {
      const rule = getConjugationRule(current);
      return `💡 Level 2: Quy tắc chia: ${rule}`;
    }
    if (hintLevel === 3) {
      const steps = getTransformationSteps(current);
      if (steps.length > 0) {
        return `💡 Level 3 (Chi tiết): ${steps.join(" → ")}`;
      }
      return `💡 Level 3: Mẫu đáp án gần đúng: ${maskAnswerForHint(current.answer)}`;
    }
    return `💡 Level 4 (Gợi ý): Đáp án bắt đầu: ${current.answer.slice(0, Math.ceil(current.answer.length / 2))}...`;
  }, [current, hintLevel]);
  if (!(items == null ? void 0 : items.length) || items.length < 2) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có dữ liệu. Chọn phần khác để bắt đầu." })
    ] });
  }
  if (finished) {
    const pct = scoring.accuracy;
    const emoji = pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "💪";
    const wrongItems = scoring.history.filter((h) => !h.correct);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-emoji", children: emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-result-title", children: pct >= 80 ? "Xuất sắc!" : pct >= 50 ? "Khá tốt!" : "Cố lên!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Đúng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value success", children: scoring.score })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Sai" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value error", children: scoring.total - scoring.score })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Chính xác" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stat-value", children: [
            pct,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Chuỗi lớn nhất" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stat-value", children: [
            "x",
            scoring.maxCombo
          ] })
        ] })
      ] }),
      scoring.history.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-review-list", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-review-title", children: "📝 Chi tiết kết quả" }),
        scoring.history.map((h, i) => {
          const it = h.item;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-review-item ${h.correct ? "correct" : "wrong"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-review-icon", children: h.correct ? "✅" : "❌" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-review-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-review-word", children: [
                it.word || it.reading,
                " (",
                it.meaning,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-review-detail", children: [
                it.formLabel,
                ": ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: it.answer }),
                it.groupLabel && ` · ${it.groupLabel}`,
                it.adjType && ` · ${it.adjType}`
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(it.answer), children: "🔊" })
          ] }, i);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-actions", children: [
        wrongItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-ghost n4-btn-retry", onClick: retryWrong, children: [
          "🔁 Chơi lại câu sai (",
          wrongItems.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: restart, children: "🔄 Làm lại" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AIPostGameButton,
        {
          history: scoring.history,
          getQuestion: (item) => `${item.reading} (${formatInlineMeaning(item.meaning)}) → ${item.formLabel}`,
          getCorrectInfo: (item) => ({ reading: item.answer, meaning: `${item.meaning} · ${item.formLabel}` }),
          score: scoring.score,
          total: scoring.total
        }
      )
    ] });
  }
  if (!current) return null;
  const options = optionsRef.current.options;
  const correctIdx = optionsRef.current.correctIdx;
  const isVerb = current._type === "verb-conjugation";
  const selectedAnswer = answered ? options[selected] : null;
  const correctAnswer = current.answer;
  const isCorrect = answered && selected === correctIdx;
  const transformations = answered ? getTransformationSteps(current) : [];
  const tableRows = buildConjugationTable(current);
  const conjugationRule = getConjugationRule(current);
  const baseForm = isVerb ? current.kanji || current.dict || current.reading : current.word || current.reading;
  const analysisContext = [
    `Loại câu hỏi: ${isVerb ? "chia động từ" : "chia tính từ"}`,
    `Thể từ điển/gốc: ${baseForm}`,
    isVerb ? `Nhóm động từ: ${current.groupLabel || `Nhóm ${current.group}`}` : `Loại tính từ: ${current.adjType}`,
    `Dạng cần chia: ${current.formLabel} (${current.formDesc})`,
    `Quy tắc nội bộ: ${conjugationRule}`,
    transformations.length ? `Các bước biến đổi:
${transformations.join("\n")}` : "",
    `Các lựa chọn: ${options.join(", ")}`
  ].filter(Boolean).join("\n");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-page-enter n4-conj-quiz ${screenShake ? "n4-screen-shake" : ""} ${answered ? selected === optionsRef.current.correctIdx ? "n4-glow-success" : "n4-glow-error" : ""}`, style: { position: "relative" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GameplayEffects, { damageEvents, comboTier, banner: effectBanner }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini-fill", style: { width: `${pool.length > 0 ? (qIdx + 1) / pool.length * 100 : 0}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-question", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-instruction", children: [
        "Câu ",
        qIdx + 1,
        "/",
        pool.length,
        " — Chia động từ / tính từ"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { textAlign: "center", marginBottom: 12 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.6rem", fontWeight: 700 }, children: current.word || current.reading }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "1.1rem", opacity: 0.85 }, children: [
          current.reading,
          " (",
          formatInlineMeaning(current.meaning),
          ")"
        ] }),
        isVerb && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85rem", opacity: 0.6, marginTop: 2 }, children: current.groupLabel }),
        !isVerb && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85rem", opacity: 0.6, marginTop: 2 }, children: current.adjType })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "var(--n4-surface-2, rgba(0,0,0,0.05))", borderRadius: 8, padding: "8px 12px", textAlign: "center", marginBottom: 12, fontWeight: 600 }, children: [
        "→ Chia sang: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-accent, #4f46e5)" }, children: current.formLabel }),
        " (",
        current.formDesc,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 12 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(current.reading), children: "🔊 Nghe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: "n4-btn n4-btn-ghost n4-btn-sm",
            onClick: () => setHintLevel((v) => Math.min(v + 1, 4)),
            title: hintLevel >= 4 ? "Tất cả gợi ý đã hiển thị" : `Gợi ý ${hintLevel + 1}/4`,
            children: [
              "💡 Hint ",
              hintLevel > 0 && `(${hintLevel}/4)`,
              " ",
              hintLevel >= 4 && "✓"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setShowTable((v) => !v), children: "📖 Bảng chia" })
      ] }),
      hintText && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginBottom: 10, padding: "8px 10px", borderRadius: 8, background: "var(--n4-bg-tertiary, rgba(255,255,255,0.06))", fontSize: "0.86rem" }, children: hintText }),
      !answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
        AIHintButton,
        {
          question: `${current.reading} (${formatInlineMeaning(current.meaning)}) → ${current.formLabel} (${current.formDesc})`,
          options,
          correctAnswer,
          itemInfo: { reading: current.answer, meaning: `${current.meaning} · ${current.formLabel}` }
        }
      ),
      showTable && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 10, padding: "10px 12px", borderRadius: 8, background: "var(--n4-bg-tertiary, rgba(255,255,255,0.06))" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontWeight: 700, marginBottom: 6 }, children: [
          "Bảng chia: ",
          current.reading
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gap: 4 }, children: tableRows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", gap: 8, fontSize: "0.86rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            row.label,
            " (",
            row.desc,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: row.value })
        ] }, `${current.id}-${row.label}`)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quiz-options", children: options.map((opt, idx) => {
        let cls = "n4-quiz-option";
        if (answered) {
          if (idx === correctIdx) cls += " correct";
          else if (idx === selected) cls += " wrong";
          cls += " answered";
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: cls, onClick: () => handleAnswer(idx, current.id), disabled: answered || state.status === "locked" || state.status === "transitioning", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-quiz-option-idx", children: idx + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: opt })
        ] }, `${optionsRef.current.key}-${idx}`);
      }) }),
      answered && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-conj-feedback ${isCorrect ? "correct" : "wrong"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-conj-feedback-title", children: isCorrect ? "✅ Chính xác!" : "❌ Sai rồi!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-conj-feedback-answer", children: [
          current.reading,
          " → ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: correctAnswer })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-conj-feedback-rule", children: conjugationRule }),
        transformations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-conj-feedback-steps", children: transformations.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: step }, `${current.id}-step-${i}`)) }),
        !isCorrect && isVerb && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-conj-feedback-rule", style: { marginTop: 6 }, children: enhanceErrorExplanation(current, selectedAnswer, correctAnswer) }),
        !isCorrect && !isVerb && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-conj-feedback-rule", style: { marginTop: 6 }, children: enhanceErrorExplanation(current, selectedAnswer, correctAnswer) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AIExplainButton,
          {
            question: `${current.reading} (${formatInlineMeaning(current.meaning)}) → ${current.formLabel}`,
            answer: correctAnswer,
            userAnswer: selectedAnswer,
            isCorrect,
            itemInfo: { reading: current.answer, meaning: `${current.meaning} · ${current.formLabel}` },
            questionId: current.id,
            analysisContext
          }
        )
      ] }),
      answered && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: handleNext, style: { width: "100%", marginTop: 10 }, disabled: state.status === "transitioning", children: "Câu tiếp theo →" })
    ] })
  ] });
}
function ConjugationDojo({ mode = "verb-quiz" }) {
  const prefs = reactExports.useMemo(() => loadConjPrefs(), []);
  const [difficulty, setDifficulty] = reactExports.useState(prefs.difficulty || "normal");
  const [itemCount, setItemCount] = reactExports.useState(Number(prefs.itemCount) || 10);
  const [selectedVerbForms, setSelectedVerbForms] = reactExports.useState(Array.isArray(prefs.selectedVerbForms) ? sanitizeN4VerbForms(prefs.selectedVerbForms) : []);
  const [selectedAdjForms, setSelectedAdjForms] = reactExports.useState(Array.isArray(prefs.selectedAdjForms) ? prefs.selectedAdjForms : []);
  const [selectedPatterns, setSelectedPatterns] = reactExports.useState(Array.isArray(prefs.selectedPatterns) ? prefs.selectedPatterns : []);
  const stats = useConjugationStats();
  reactExports.useEffect(() => {
    try {
      window.localStorage.setItem(CONJ_PREFS_KEY, JSON.stringify({
        difficulty,
        itemCount,
        selectedVerbForms,
        selectedAdjForms,
        selectedPatterns
      }));
    } catch (e) {
    }
  }, [difficulty, itemCount, selectedVerbForms, selectedAdjForms, selectedPatterns]);
  const maxQ = difficulty === "easy" ? Math.min(5, itemCount) : difficulty === "hard" ? Math.min(20, itemCount) : itemCount;
  const isDrillMode = mode in DRILL_MODE_FORMS;
  const drillForms = isDrillMode ? DRILL_MODE_FORMS[mode] : null;
  const weightedVerbForms = reactExports.useMemo(() => {
    if (drillForms) return drillForms;
    const safeSelected = sanitizeN4VerbForms(selectedVerbForms);
    return safeSelected.length ? safeSelected : N4_VERB_FORMS.map((f) => f.id);
  }, [selectedVerbForms, drillForms]);
  const verbItems = reactExports.useMemo(() => generateVerbQuizItems(weightedVerbForms, maxQ + 8, { patternFilter: selectedPatterns }), [weightedVerbForms, maxQ, selectedPatterns]);
  const adjItems = reactExports.useMemo(() => generateAdjQuizItems(selectedAdjForms, maxQ + 5), [selectedAdjForms, maxQ]);
  const mixedItems = reactExports.useMemo(() => shuffle([...verbItems, ...adjItems]).slice(0, maxQ + 5), [verbItems, adjItems, maxQ]);
  const currentItems = mode.startsWith("verb") || isDrillMode ? verbItems : mode.startsWith("adj") ? adjItems : mixedItems;
  const onAnswerEvaluated = reactExports.useCallback(({ item, isCorrect, selectedAnswer, correctAnswer }) => {
    if (!(item == null ? void 0 : item.formId)) return;
    stats.recordResult(item.formId, isCorrect);
    if (item._type === "verb-conjugation" && item.dict) {
      if (isCorrect) stats.clearFromSrs(item.dict, item.formId);
      else stats.addToSrs(item.dict, item.formId);
    }
  }, [stats]);
  const renderFormSelector = () => {
    const forms = mode.startsWith("verb") || mode === "mixed" ? N4_VERB_FORMS : null;
    const adjForms = mode.startsWith("adj") || mode === "mixed" ? ADJ_FORMS : null;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-conj-form-selector", style: { margin: "8px 0", display: "flex", flexWrap: "wrap", gap: "4px" }, children: [
      forms && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100%", fontSize: "0.85em", opacity: 0.7, marginBottom: 2 }, children: "Dạng động từ:" }),
        forms.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: `n4-btn n4-btn-sm ${selectedVerbForms.includes(f.id) ? "n4-btn-primary" : "n4-btn-ghost"}`,
            onClick: () => setSelectedVerbForms(
              (prev) => prev.includes(f.id) ? prev.filter((x) => x !== f.id) : [...prev, f.id]
            ),
            title: f.desc,
            children: [
              f.label,
              " (",
              f.desc,
              ")"
            ]
          },
          f.id
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100%", fontSize: "0.85em", opacity: 0.7, marginBottom: 2, marginTop: 8 }, children: "Pattern động từ:" }),
        VERB_PATTERN_OPTIONS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `n4-btn n4-btn-sm ${selectedPatterns.includes(p.id) ? "n4-btn-primary" : "n4-btn-ghost"}`,
            onClick: () => setSelectedPatterns((prev) => prev.includes(p.id) ? prev.filter((x) => x !== p.id) : [...prev, p.id]),
            children: p.label
          },
          p.id
        ))
      ] }),
      adjForms && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100%", fontSize: "0.85em", opacity: 0.7, marginBottom: 2, marginTop: forms ? 6 : 0 }, children: "Dạng tính từ:" }),
        adjForms.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: `n4-btn n4-btn-sm ${selectedAdjForms.includes(f.id) ? "n4-btn-primary" : "n4-btn-ghost"}`,
            onClick: () => setSelectedAdjForms(
              (prev) => prev.includes(f.id) ? prev.filter((x) => x !== f.id) : [...prev, f.id]
            ),
            title: f.desc,
            children: [
              f.label,
              " (",
              f.desc,
              ")"
            ]
          },
          f.id
        ))
      ] }),
      (selectedVerbForms.length > 0 || selectedAdjForms.length > 0 || selectedPatterns.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-btn n4-btn-sm n4-btn-ghost",
          onClick: () => {
            setSelectedVerbForms([]);
            setSelectedAdjForms([]);
            setSelectedPatterns([]);
          },
          style: { marginLeft: "auto" },
          children: "↩ Tất cả"
        }
      )
    ] });
  };
  const renderMode = () => {
    switch (mode) {
      case "verb-quiz":
      case "verb-fill":
      case "adj-quiz":
      case "adj-fill":
      case "mixed":
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { style: { margin: "8px 0" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { style: { cursor: "pointer", fontSize: "0.9em", opacity: 0.8, padding: "4px 0" }, children: "⚙️ Tùy chọn nâng cao" }),
            renderFormSelector()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ConjugationQuizInner,
            {
              items: currentItems,
              maxQuestions: maxQ,
              onResult: onAnswerEvaluated,
              trainerId: "conjugation-dojo"
            }
          )
        ] });
      case "volitional-drill":
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "8px 10px", borderRadius: 8, background: "rgba(16,185,129,0.1)", marginBottom: 10, fontSize: "0.88em" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🎯 Luyện: Thể ý chí (意向形)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { opacity: 0.8 }, children: "Drill tập trung vào: volitional (〜よう), potential (〜られる/〜える), conditional (〜ば)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ConjugationQuizInner,
            {
              items: verbItems,
              maxQuestions: maxQ,
              onResult: onAnswerEvaluated,
              trainerId: "conjugation-dojo"
            }
          )
        ] });
      case "flashcard":
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          renderFormSelector(),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FlashcardMode,
            {
              items: mixedItems,
              getFront: conjFront,
              getSubtitle: conjSubtitle,
              getBack: conjBack
            }
          )
        ] });
      case "rhythm-drill":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(RhythmDrillMode, { tempo: 120 });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Mode chưa hỗ trợ" });
    }
  };
  const isBattle3D = mode === "battle" || mode === "volitional-drill";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerContext.Provider, { value: "conjugation-dojo", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    GameShell,
    {
      trainerId: "conjugation-dojo",
      mode,
      icon: "🔤",
      title: "Võ đường chia thể",
      color: "var(--n4-cat-grammar)",
      hearts: 3,
      bodyLayout: isBattle3D ? "3d-canvas" : "2d-flex",
      rhythm: { warmup: 3, bossAt: "mid", bossCount: 1, cooldown: 1, totalItems: itemCount },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrainerTopBar,
          {
            trainerId: "conjugation-dojo",
            activeMode: mode,
            modes: MODES,
            difficulty,
            onDifficultyChange: setDifficulty,
            itemCount,
            onItemCountChange: setItemCount
          }
        ),
        renderMode()
      ]
    }
  ) });
}
export {
  MODES,
  ConjugationDojo as default
};
