const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./StrokeCanvas-HZQYVvE8.js","./vendor-react-BYxMSDiB.js"])))=>i.map(i=>d[i]);
import { r as reactExports, j as jsxRuntimeExports, u as useShallow } from "./vendor-react-BYxMSDiB.js";
import { b as bus, G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-9qsLJC8Z.js";
import { u as useScoreEngine, T as TrainerContext } from "./useScoreEngine-Cjc3MMN3.js";
import { F as FlashcardMode } from "./FlashcardMode-DUBILJcl.js";
import { k as kanjiAccessors, Q as QuizMode } from "./QuizMode-CK8dFQ5n.js";
import { M as MatchMode } from "./MatchMode-BNhand3w.js";
import { cf as shuffleArray$1, ce as playSFX, as as speakJP, R as content, bW as getQualityConfig, d as useLearningStore, _ as __vitePreload, u as useAppStore } from "./feature-3d-ClP3ARU5.js";
import { u as useGameRestart, a as useStudySession } from "./useStudySession-cPqeZXg_.js";
import { S as ScaffoldingLayer } from "./ScaffoldingLayer-Dgchp7gt.js";
import { Q as QuizFeedback } from "./QuizFeedback-BMOgeHCF.js";
import { M as ModeResultsScreen } from "./useQuestionMeta-D-yYGU7U.js";
import { K as KanjiBattleMode } from "./KanjiBattleMode-vonK3ESR.js";
import { a as useKanjiItems, c as useSectionList } from "./useDataHelper-BnDD_cSP.js";
import { d as distExports } from "./index-Cmrzkkdy.js";
import { W as WebGLRenderer, S as Scene, P as PerspectiveCamera, fv as RingGeometry, aa as MeshBasicMaterial, D as DoubleSide, M as Mesh } from "./vendor-three-CoFVKTas.js";
import { u as useGameStore } from "./useGameEngine-CTBUVrIk.js";
import { a6 as GAME_EVENTS } from "./index-ZUSnnghe.js";
import "./vendor-router-BTJacUKt.js";
import "./empty-Bvm-mx50.js";
import "./quest-chains-CiwzmCpJ.js";
import "./PhaseRibbon-VgLgSQxn.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./ajl-rewards-Cd-OA6vJ.js";
import "./vendor-motion-CoQCRLnb.js";
import "./vendor-icons-DHCyxOF-.js";
const OKURIGANA_DATA = [
  // い-adjectives
  { kanji: "高", okurigana: "い", full: "高い", reading: "たかい", meaning: "đắt/cao", type: "い形" },
  { kanji: "安", okurigana: "い", full: "安い", reading: "やすい", meaning: "rẻ", type: "い形" },
  { kanji: "新", okurigana: "しい", full: "新しい", reading: "あたらしい", meaning: "mới", type: "い形" },
  { kanji: "古", okurigana: "い", full: "古い", reading: "ふるい", meaning: "cũ", type: "い形" },
  { kanji: "暑", okurigana: "い", full: "暑い", reading: "あつい", meaning: "nóng", type: "い形" },
  { kanji: "寒", okurigana: "い", full: "寒い", reading: "さむい", meaning: "lạnh", type: "い形" },
  { kanji: "長", okurigana: "い", full: "長い", reading: "ながい", meaning: "dài", type: "い形" },
  { kanji: "短", okurigana: "い", full: "短い", reading: "みじかい", meaning: "ngắn", type: "い形" },
  { kanji: "難", okurigana: "しい", full: "難しい", reading: "むずかしい", meaning: "khó", type: "い形" },
  { kanji: "易", okurigana: "しい", full: "易しい", reading: "やさしい", meaning: "dễ", type: "い形" },
  { kanji: "楽", okurigana: "しい", full: "楽しい", reading: "たのしい", meaning: "vui", type: "い形" },
  { kanji: "忙", okurigana: "しい", full: "忙しい", reading: "いそがしい", meaning: "bận", type: "い形" },
  { kanji: "広", okurigana: "い", full: "広い", reading: "ひろい", meaning: "rộng", type: "い形" },
  { kanji: "狭", okurigana: "い", full: "狭い", reading: "せまい", meaning: "hẹp", type: "い形" },
  { kanji: "若", okurigana: "い", full: "若い", reading: "わかい", meaning: "trẻ", type: "い形" },
  // Godan verbs
  { kanji: "書", okurigana: "く", full: "書く", reading: "かく", meaning: "viết", type: "五段" },
  { kanji: "読", okurigana: "む", full: "読む", reading: "よむ", meaning: "đọc", type: "五段" },
  { kanji: "飲", okurigana: "む", full: "飲む", reading: "のむ", meaning: "uống", type: "五段" },
  { kanji: "話", okurigana: "す", full: "話す", reading: "はなす", meaning: "nói", type: "五段" },
  { kanji: "聞", okurigana: "く", full: "聞く", reading: "きく", meaning: "nghe", type: "五段" },
  { kanji: "買", okurigana: "う", full: "買う", reading: "かう", meaning: "mua", type: "五段" },
  { kanji: "待", okurigana: "つ", full: "待つ", reading: "まつ", meaning: "chờ", type: "五段" },
  { kanji: "持", okurigana: "つ", full: "持つ", reading: "もつ", meaning: "cầm", type: "五段" },
  { kanji: "歩", okurigana: "く", full: "歩く", reading: "あるく", meaning: "đi bộ", type: "五段" },
  { kanji: "泳", okurigana: "ぐ", full: "泳ぐ", reading: "およぐ", meaning: "bơi", type: "五段" },
  { kanji: "遊", okurigana: "ぶ", full: "遊ぶ", reading: "あそぶ", meaning: "chơi", type: "五段" },
  { kanji: "死", okurigana: "ぬ", full: "死ぬ", reading: "しぬ", meaning: "chết", type: "五段" },
  { kanji: "立", okurigana: "つ", full: "立つ", reading: "たつ", meaning: "đứng", type: "五段" },
  { kanji: "座", okurigana: "る", full: "座る", reading: "すわる", meaning: "ngồi", type: "五段" },
  { kanji: "走", okurigana: "る", full: "走る", reading: "はしる", meaning: "chạy", type: "五段" },
  // Ichidan verbs
  { kanji: "食", okurigana: "べる", full: "食べる", reading: "たべる", meaning: "ăn", type: "一段" },
  { kanji: "見", okurigana: "る", full: "見る", reading: "みる", meaning: "xem", type: "一段" },
  { kanji: "起", okurigana: "きる", full: "起きる", reading: "おきる", meaning: "thức dậy", type: "一段" },
  { kanji: "寝", okurigana: "る", full: "寝る", reading: "ねる", meaning: "ngủ", type: "一段" },
  { kanji: "教", okurigana: "える", full: "教える", reading: "おしえる", meaning: "dạy", type: "一段" },
  { kanji: "覚", okurigana: "える", full: "覚える", reading: "おぼえる", meaning: "nhớ", type: "一段" },
  { kanji: "着", okurigana: "る", full: "着る", reading: "きる", meaning: "mặc", type: "一段" },
  { kanji: "開", okurigana: "ける", full: "開ける", reading: "あける", meaning: "mở", type: "一段" },
  { kanji: "閉", okurigana: "める", full: "閉める", reading: "しめる", meaning: "đóng", type: "一段" },
  { kanji: "降", okurigana: "りる", full: "降りる", reading: "おりる", meaning: "xuống", type: "一段" }
];
const ALL_SUFFIXES = [...new Set(OKURIGANA_DATA.map((d) => d.okurigana))];
const MAX_Q$2 = 15;
function OkuriganaQuizMode({ items = [], maxQuestions = MAX_Q$2 }) {
  const scoring = useScoreEngine();
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [done, setDone] = reactExports.useState(false);
  const pendingCorrectRef = reactExports.useRef(null);
  const { gameKey, restart, lockRef } = useGameRestart(scoring, {
    onReset: () => {
      setQIdx(0);
      setSelected(null);
      setDone(false);
    }
  });
  const pool = reactExports.useMemo(() => shuffleArray$1([...OKURIGANA_DATA]).slice(0, maxQuestions), [maxQuestions, gameKey]);
  const current = pool[qIdx];
  const options = reactExports.useMemo(() => {
    if (!current) return [];
    const wrongs = ALL_SUFFIXES.filter((s) => s !== current.okurigana);
    const picked = shuffleArray$1(wrongs).slice(0, 3);
    return shuffleArray$1([current.okurigana, ...picked]);
  }, [current]);
  const handleSelect = reactExports.useCallback((opt) => {
    var _a;
    if (lockRef.current || !current) return;
    lockRef.current = true;
    const isCorrect = opt === current.okurigana;
    setSelected(opt);
    if (isCorrect) {
      pendingCorrectRef.current = current;
      playSFX("correct");
      speakJP(current.full);
    } else {
      (_a = scoring.recordWrong) == null ? void 0 : _a.call(scoring, current);
      playSFX("wrong");
    }
  }, [current, scoring]);
  const handleNext = reactExports.useCallback(() => {
    lockRef.current = false;
    setSelected(null);
    if (qIdx + 1 >= pool.length) setDone(true);
    else setQIdx((q) => q + 1);
  }, [pool.length, qIdx]);
  const handleGrade = reactExports.useCallback((quality) => {
    var _a;
    if (pendingCorrectRef.current) {
      (_a = scoring.recordCorrect) == null ? void 0 : _a.call(scoring, pendingCorrectRef.current, quality);
      pendingCorrectRef.current = null;
    }
    handleNext();
  }, [scoring, handleNext]);
  if (done) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModeResultsScreen,
      {
        scoring,
        getQuestion: (item) => item.kanji + "___",
        getCorrectInfo: (item) => ({ reading: item.reading, meaning: item.meaning, word: item.full }),
        onRestart: restart
      }
    );
  }
  if (!current) return null;
  const answered = selected !== null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-instruction", style: { marginBottom: 8 }, children: [
      "Câu ",
      qIdx + 1,
      "/",
      pool.length,
      " — Chọn okurigana đúng"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "2.2rem", fontWeight: 700 }, children: [
        current.kanji,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-accent, #4f46e5)", fontSize: "2rem" }, children: "___" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.9rem", opacity: 0.6, marginTop: 4 }, children: [
        current.meaning,
        " (",
        current.type,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScaffoldingLayer, { text: current.full, minimal: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quiz-options", children: options.map((opt, idx) => {
      let cls = "n4-quiz-option";
      if (answered) {
        if (opt === current.okurigana) cls += " correct";
        else if (opt === selected) cls += " wrong";
        cls += " answered";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: cls, onClick: () => handleSelect(opt), disabled: answered, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-quiz-option-idx", children: idx + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.3rem" }, children: opt })
      ] }, `${qIdx}-${idx}`);
    }) }),
    answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuizFeedback,
      {
        isCorrect: selected === current.okurigana,
        correctAnswer: current.okurigana,
        correctInfo: { reading: current.reading, meaning: current.meaning, word: current.full },
        userAnswer: selected,
        questionDisplay: `${current.kanji}___ (${current.meaning})`,
        showQualityPicker: true,
        onQualityPick: handleGrade,
        onNext: handleNext,
        isLastQuestion: qIdx + 1 >= pool.length
      }
    )
  ] });
}
const READING_DATA = [
  // ON readings (compounds - 熟語)
  { word: "学校", reading: "がっこう", type: "on", kanji: "学+校", explain: "音読み: がく+こう → がっこう", meaning: "trường học" },
  { word: "電話", reading: "でんわ", type: "on", kanji: "電+話", explain: "音読み: でん+わ", meaning: "điện thoại" },
  { word: "食堂", reading: "しょくどう", type: "on", kanji: "食+堂", explain: "音読み: しょく+どう", meaning: "nhà ăn" },
  { word: "図書館", reading: "としょかん", type: "on", kanji: "図+書+館", explain: "音読み: と+しょ+かん", meaning: "thư viện" },
  { word: "銀行", reading: "ぎんこう", type: "on", kanji: "銀+行", explain: "音読み: ぎん+こう", meaning: "ngân hàng" },
  { word: "会社", reading: "かいしゃ", type: "on", kanji: "会+社", explain: "音読み: かい+しゃ", meaning: "công ty" },
  { word: "病院", reading: "びょういん", type: "on", kanji: "病+院", explain: "音読み: びょう+いん", meaning: "bệnh viện" },
  { word: "新聞", reading: "しんぶん", type: "on", kanji: "新+聞", explain: "音読み: しん+ぶん", meaning: "báo" },
  { word: "天気", reading: "てんき", type: "on", kanji: "天+気", explain: "音読み: てん+き", meaning: "thời tiết" },
  { word: "練習", reading: "れんしゅう", type: "on", kanji: "練+習", explain: "音読み: れん+しゅう", meaning: "luyện tập" },
  { word: "旅行", reading: "りょこう", type: "on", kanji: "旅+行", explain: "音読み: りょ+こう", meaning: "du lịch" },
  { word: "料理", reading: "りょうり", type: "on", kanji: "料+理", explain: "音読み: りょう+り", meaning: "nấu ăn" },
  { word: "会議", reading: "かいぎ", type: "on", kanji: "会+議", explain: "音読み: かい+ぎ", meaning: "cuộc họp" },
  // KUN readings (single kanji with okurigana, or native Japanese)
  { word: "食べる", reading: "たべる", type: "kun", kanji: "食", explain: "訓読み: たべる (có okurigana べる)", meaning: "ăn" },
  { word: "書く", reading: "かく", type: "kun", kanji: "書", explain: "訓読み: かく (có okurigana く)", meaning: "viết" },
  { word: "読む", reading: "よむ", type: "kun", kanji: "読", explain: "訓読み: よむ (có okurigana む)", meaning: "đọc" },
  { word: "話す", reading: "はなす", type: "kun", kanji: "話", explain: "訓読み: はなす (có okurigana す)", meaning: "nói" },
  { word: "飲む", reading: "のむ", type: "kun", kanji: "飲", explain: "訓読み: のむ (có okurigana む)", meaning: "uống" },
  { word: "花", reading: "はな", type: "kun", kanji: "花", explain: "訓読み: はな (đọc đơn lẻ)", meaning: "hoa" },
  { word: "山", reading: "やま", type: "kun", kanji: "山", explain: "訓読み: やま (đọc đơn lẻ)", meaning: "núi" },
  { word: "川", reading: "かわ", type: "kun", kanji: "川", explain: "訓読み: かわ (đọc đơn lẻ)", meaning: "sông" },
  { word: "海", reading: "うみ", type: "kun", kanji: "海", explain: "訓読み: うみ (đọc đơn lẻ)", meaning: "biển" },
  { word: "空", reading: "そら", type: "kun", kanji: "空", explain: "訓読み: そら (đọc đơn lẻ)", meaning: "bầu trời" },
  { word: "手", reading: "て", type: "kun", kanji: "手", explain: "訓読み: て (đọc đơn lẻ)", meaning: "tay" },
  { word: "目", reading: "め", type: "kun", kanji: "目", explain: "訓読み: め (đọc đơn lẻ)", meaning: "mắt" },
  { word: "歩く", reading: "あるく", type: "kun", kanji: "歩", explain: "訓読み: あるく (có okurigana く)", meaning: "đi bộ" },
  // Tricky: same kanji, different reading context
  { word: "人間", reading: "にんげん", type: "on", kanji: "人+間", explain: "音読み: にん+げん (trong từ ghép)", meaning: "con người" },
  { word: "人", reading: "ひと", type: "kun", kanji: "人", explain: "訓読み: ひと (đọc đơn lẻ)", meaning: "người" },
  { word: "日本", reading: "にほん", type: "on", kanji: "日+本", explain: "音読み: に+ほん (trong từ ghép)", meaning: "Nhật Bản" },
  { word: "日", reading: "ひ", type: "kun", kanji: "日", explain: "訓読み: ひ (đọc đơn lẻ → ngày/mặt trời)", meaning: "ngày, mặt trời" }
];
const MAX_Q$1 = 12;
function OnKunSwitchMode({ items = [], maxQuestions = MAX_Q$1 }) {
  const scoring = useScoreEngine();
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [done, setDone] = reactExports.useState(false);
  const pendingCorrectRef = reactExports.useRef(null);
  const { gameKey, restart, lockRef } = useGameRestart(scoring, {
    onReset: () => {
      setQIdx(0);
      setSelected(null);
      setDone(false);
    }
  });
  const pool = reactExports.useMemo(() => shuffleArray$1([...READING_DATA]).slice(0, maxQuestions), [maxQuestions, gameKey]);
  const current = pool[qIdx];
  const options = ["on", "kun"];
  const handleSelect = reactExports.useCallback((opt) => {
    var _a;
    if (lockRef.current || !current) return;
    lockRef.current = true;
    const isCorrect = opt === current.type;
    setSelected(opt);
    if (isCorrect) {
      pendingCorrectRef.current = current;
      playSFX("correct");
      speakJP(current.word);
    } else {
      (_a = scoring.recordWrong) == null ? void 0 : _a.call(scoring, current);
      playSFX("wrong");
    }
  }, [current, scoring]);
  const handleNext = reactExports.useCallback(() => {
    lockRef.current = false;
    setSelected(null);
    if (qIdx + 1 >= pool.length) setDone(true);
    else setQIdx((q) => q + 1);
  }, [pool.length, qIdx]);
  const handleGrade = reactExports.useCallback((quality) => {
    var _a;
    if (pendingCorrectRef.current) {
      (_a = scoring.recordCorrect) == null ? void 0 : _a.call(scoring, pendingCorrectRef.current, quality);
      pendingCorrectRef.current = null;
    }
    handleNext();
  }, [scoring, handleNext]);
  if (done) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModeResultsScreen,
      {
        scoring,
        getQuestion: (item) => item.word,
        getCorrectInfo: (item) => ({ reading: item.reading, meaning: item.meaning }),
        onRestart: restart
      }
    );
  }
  if (!current) return null;
  const answered = selected !== null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-instruction", style: { marginBottom: 8 }, children: [
      "Câu ",
      qIdx + 1,
      "/",
      pool.length,
      " — Âm ON hay KUN?"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2.2rem", fontWeight: 700 }, children: current.word }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1rem", opacity: 0.5, marginTop: 4 }, children: current.reading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.88rem", opacity: 0.6 }, children: current.meaning }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(current.word), style: { marginTop: 4 }, children: "🔊" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScaffoldingLayer, { text: current.word, minimal: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 12, justifyContent: "center", marginBottom: 16 }, children: options.map((opt) => {
      let bg = "var(--n4-bg-secondary, #f3f4f6)";
      let border = "2px solid transparent";
      if (answered) {
        if (opt === current.type) {
          bg = "rgba(74,222,128,0.2)";
          border = "2px solid #4ade80";
        } else if (opt === selected) {
          bg = "rgba(248,113,113,0.2)";
          border = "2px solid #f87171";
        }
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => handleSelect(opt),
          disabled: answered,
          style: {
            flex: 1,
            maxWidth: 200,
            padding: "16px 12px",
            borderRadius: 12,
            background: bg,
            border,
            cursor: answered ? "default" : "pointer",
            fontWeight: 700,
            fontSize: "1.1rem",
            transition: "all 0.2s"
          },
          children: [
            opt === "on" ? "🔵 音読み (ON)" : "🟢 訓読み (KUN)",
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.75rem", fontWeight: 400, opacity: 0.7, marginTop: 4 }, children: opt === "on" ? "Âm Hán (từ ghép)" : "Âm Nhật (đơn lẻ)" })
          ]
        },
        opt
      );
    }) }),
    answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuizFeedback,
      {
        isCorrect: selected === current.type,
        correctAnswer: current.type === "on" ? "Âm ON" : "Âm KUN",
        correctInfo: { reading: current.reading, meaning: current.meaning, word: current.explain },
        userAnswer: selected === "on" ? "Âm ON" : "Âm KUN",
        questionDisplay: `${current.word} (Âm ON hay KUN?)`,
        showQualityPicker: true,
        onQualityPick: handleGrade,
        onNext: handleNext,
        isLastQuestion: qIdx + 1 >= pool.length
      }
    )
  ] });
}
const LOOK_ALIKE_GROUPS = [
  [
    { kanji: "待", reading: "まつ", meaning: "chờ" },
    { kanji: "持", reading: "もつ", meaning: "cầm" },
    { kanji: "特", reading: "とく", meaning: "đặc biệt" },
    { kanji: "時", reading: "じ", meaning: "giờ" }
  ],
  [
    { kanji: "近", reading: "ちかい", meaning: "gần" },
    { kanji: "折", reading: "おる", meaning: "gấp/gãy" },
    { kanji: "断", reading: "ことわる", meaning: "từ chối" },
    { kanji: "所", reading: "ところ", meaning: "nơi chốn" }
  ],
  [
    { kanji: "末", reading: "まつ/すえ", meaning: "cuối" },
    { kanji: "未", reading: "み", meaning: "chưa" },
    { kanji: "本", reading: "ほん", meaning: "sách/gốc" },
    { kanji: "木", reading: "き", meaning: "cây" }
  ],
  [
    { kanji: "大", reading: "おおきい", meaning: "to" },
    { kanji: "太", reading: "ふとい", meaning: "béo/dày" },
    { kanji: "犬", reading: "いぬ", meaning: "chó" },
    { kanji: "天", reading: "てん", meaning: "trời" }
  ],
  [
    { kanji: "土", reading: "つち", meaning: "đất" },
    { kanji: "士", reading: "し", meaning: "samurai" },
    { kanji: "工", reading: "こう", meaning: "công nhân" },
    { kanji: "王", reading: "おう", meaning: "vua" }
  ],
  [
    { kanji: "日", reading: "ひ/にち", meaning: "ngày/mặt trời" },
    { kanji: "目", reading: "め", meaning: "mắt" },
    { kanji: "田", reading: "た", meaning: "ruộng" },
    { kanji: "白", reading: "しろい", meaning: "trắng" }
  ],
  [
    { kanji: "人", reading: "ひと", meaning: "người" },
    { kanji: "入", reading: "はいる", meaning: "vào" },
    { kanji: "八", reading: "はち", meaning: "tám" },
    { kanji: "又", reading: "また", meaning: "lại/nữa" }
  ],
  [
    { kanji: "千", reading: "せん", meaning: "nghìn" },
    { kanji: "干", reading: "かん", meaning: "khô" },
    { kanji: "午", reading: "ご", meaning: "trưa" },
    { kanji: "牛", reading: "うし", meaning: "bò" }
  ],
  [
    { kanji: "言", reading: "いう", meaning: "nói" },
    { kanji: "計", reading: "けい", meaning: "kế hoạch" },
    { kanji: "語", reading: "ご", meaning: "ngôn ngữ" },
    { kanji: "話", reading: "はなし", meaning: "câu chuyện" }
  ],
  [
    { kanji: "校", reading: "こう", meaning: "trường" },
    { kanji: "村", reading: "むら", meaning: "làng" },
    { kanji: "林", reading: "はやし", meaning: "rừng nhỏ" },
    { kanji: "森", reading: "もり", meaning: "rừng" }
  ],
  [
    { kanji: "右", reading: "みぎ", meaning: "bên phải" },
    { kanji: "左", reading: "ひだり", meaning: "bên trái" },
    { kanji: "石", reading: "いし", meaning: "đá" },
    { kanji: "友", reading: "とも", meaning: "bạn" }
  ],
  [
    { kanji: "道", reading: "みち", meaning: "đường" },
    { kanji: "通", reading: "とおる", meaning: "đi qua" },
    { kanji: "達", reading: "たつ", meaning: "đạt được" },
    { kanji: "送", reading: "おくる", meaning: "gửi" }
  ],
  [
    { kanji: "帰", reading: "かえる", meaning: "về nhà" },
    { kanji: "届", reading: "とどける", meaning: "giao hàng" },
    { kanji: "届", reading: "とどける", meaning: "giao" },
    { kanji: "届", reading: "とどける", meaning: "giao" }
  ],
  [
    { kanji: "院", reading: "いん", meaning: "viện" },
    { kanji: "完", reading: "かん", meaning: "hoàn thành" },
    { kanji: "宅", reading: "たく", meaning: "nhà" },
    { kanji: "安", reading: "やすい", meaning: "rẻ/an toàn" }
  ],
  [
    { kanji: "開", reading: "あける", meaning: "mở" },
    { kanji: "閉", reading: "しめる", meaning: "đóng" },
    { kanji: "間", reading: "あいだ", meaning: "giữa" },
    { kanji: "関", reading: "かん", meaning: "liên quan" }
  ],
  [
    { kanji: "切", reading: "きる", meaning: "cắt" },
    { kanji: "初", reading: "はじめ", meaning: "lần đầu" },
    { kanji: "別", reading: "べつ", meaning: "khác/chia tay" },
    { kanji: "列", reading: "れつ", meaning: "hàng" }
  ]
];
const MAX_Q = 12;
function LookAlikeKanjiMode({ items = [], maxQuestions = MAX_Q }) {
  const scoring = useScoreEngine();
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [done, setDone] = reactExports.useState(false);
  const pendingCorrectRef = reactExports.useRef(null);
  const { gameKey, restart, lockRef } = useGameRestart(scoring, {
    onReset: () => {
      setQIdx(0);
      setSelected(null);
      setDone(false);
    }
  });
  const pool = reactExports.useMemo(() => {
    const questions = [];
    for (const group of shuffleArray$1([...LOOK_ALIKE_GROUPS])) {
      if (questions.length >= maxQuestions) break;
      const unique = [];
      const seen = /* @__PURE__ */ new Set();
      for (const k of group) {
        if (!seen.has(k.kanji)) {
          unique.push(k);
          seen.add(k.kanji);
        }
      }
      if (unique.length < 2) continue;
      const target = unique[Math.floor(Math.random() * unique.length)];
      questions.push({ target, group: unique });
    }
    return questions;
  }, [maxQuestions, gameKey]);
  const current = pool[qIdx];
  const handleSelect = reactExports.useCallback((kanji) => {
    var _a;
    if (lockRef.current || !current) return;
    lockRef.current = true;
    const isCorrect = kanji === current.target.kanji;
    setSelected(kanji);
    if (isCorrect) {
      pendingCorrectRef.current = current.target;
      playSFX("correct");
    } else {
      (_a = scoring.recordWrong) == null ? void 0 : _a.call(scoring, current.target);
      playSFX("wrong");
    }
  }, [current, scoring]);
  const handleNext = reactExports.useCallback(() => {
    lockRef.current = false;
    setSelected(null);
    if (qIdx + 1 >= pool.length) setDone(true);
    else setQIdx((q) => q + 1);
  }, [pool.length, qIdx]);
  const handleGrade = reactExports.useCallback((quality) => {
    var _a;
    if (pendingCorrectRef.current) {
      (_a = scoring.recordCorrect) == null ? void 0 : _a.call(scoring, pendingCorrectRef.current, quality);
      pendingCorrectRef.current = null;
    }
    handleNext();
  }, [scoring, handleNext]);
  const shuffledGroup = reactExports.useMemo(() => current ? shuffleArray$1([...current.group]) : [], [current]);
  if (done) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModeResultsScreen,
      {
        scoring,
        getQuestion: (item) => item.kanji,
        getCorrectInfo: (item) => ({ reading: item.reading, meaning: item.meaning }),
        onRestart: restart
      }
    );
  }
  if (!current) return null;
  const answered = selected !== null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-instruction", style: { marginBottom: 8 }, children: [
      "Câu ",
      qIdx + 1,
      "/",
      pool.length,
      " — Tìm chữ Hán đúng"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.9rem", opacity: 0.6 }, children: "Tìm chữ Hán có nghĩa:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.3rem", fontWeight: 700, marginTop: 4 }, children: current.target.meaning }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1rem", opacity: 0.7 }, children: current.target.reading })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScaffoldingLayer, { text: current.target.kanji, minimal: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, maxWidth: 320, margin: "0 auto 16px" }, children: shuffledGroup.map((k) => {
      let bg = "var(--n4-bg-secondary, #f3f4f6)";
      let border = "2px solid transparent";
      if (answered) {
        if (k.kanji === current.target.kanji) {
          bg = "rgba(74,222,128,0.25)";
          border = "2px solid #4ade80";
        } else if (k.kanji === selected) {
          bg = "rgba(248,113,113,0.25)";
          border = "2px solid #f87171";
        }
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => handleSelect(k.kanji),
          disabled: answered,
          style: {
            padding: "18px 8px",
            borderRadius: 12,
            background: bg,
            border,
            cursor: answered ? "default" : "pointer",
            transition: "all 0.2s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "2.5rem", fontWeight: 700 }, children: k.kanji }),
            answered && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.75rem", opacity: 0.7 }, children: [
              k.reading,
              " — ",
              k.meaning
            ] })
          ]
        },
        k.kanji
      );
    }) }),
    answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuizFeedback,
      {
        isCorrect: selected === current.target.kanji,
        correctAnswer: current.target.kanji,
        correctInfo: { reading: current.target.reading, meaning: current.target.meaning },
        userAnswer: selected,
        questionDisplay: `Tìm chữ Hán: ${current.target.meaning}`,
        showQualityPicker: true,
        onQualityPick: handleGrade,
        onNext: handleNext,
        isLastQuestion: qIdx + 1 >= pool.length
      }
    )
  ] });
}
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function parseLegacyCompounds(str) {
  if (!str || typeof str !== "string") return [];
  return str.split(/,\s*/).map((c) => {
    const t = c.trim();
    if (!t) return null;
    const mCompound = t.match(/^([^\s(]+)/);
    const mReading = t.match(/\(([^)\/]+)\s*\/?/);
    const mMeaning = t.match(/-\s*(.+)$/);
    return {
      compound: ((mCompound == null ? void 0 : mCompound[1]) || "").trim(),
      reading: ((mReading == null ? void 0 : mReading[1]) || "").trim(),
      meaning: ((mMeaning == null ? void 0 : mMeaning[1]) || "").trim()
    };
  }).filter((c) => c && c.compound);
}
function KanjiDetectiveMode({ items = [], maxQuestions = 10 }) {
  const scoring = useScoreEngine();
  const pool = reactExports.useMemo(() => {
    var _a, _b;
    const candidates = [];
    for (const it of items || []) {
      const char = (it == null ? void 0 : it.kanji) || (it == null ? void 0 : it.character) || "";
      if (!char || char.length !== 1) continue;
      let v2 = null;
      try {
        v2 = ((_b = (_a = content).getItem) == null ? void 0 : _b.call(_a, `k:${char}`)) || null;
      } catch (e) {
        v2 = null;
      }
      const compounds = Array.isArray(v2 == null ? void 0 : v2.compounds) && v2.compounds.length ? v2.compounds : parseLegacyCompounds(it == null ? void 0 : it.compounds);
      if (compounds.length < 1) continue;
      candidates.push({
        character: char,
        meaning: it.meaning || (v2 == null ? void 0 : v2.meaning) || "",
        hanviet: (v2 == null ? void 0 : v2.hanviet) || "",
        onReadings: Array.isArray(v2 == null ? void 0 : v2.onReadings) && v2.onReadings.length ? v2.onReadings : it.on ? [String(it.on).replace(/\s*\([^)]*\)\s*/g, "").trim()] : [],
        kunReadings: Array.isArray(v2 == null ? void 0 : v2.kunReadings) && v2.kunReadings.length ? v2.kunReadings : it.kun ? [String(it.kun).replace(/\s*\([^)]*\)\s*/g, "").trim()] : [],
        strokeCount: (v2 == null ? void 0 : v2.strokeCount) || 0,
        radicals: Array.isArray(v2 == null ? void 0 : v2.radicals) ? v2.radicals : [],
        radicalBreakdown: Array.isArray(v2 == null ? void 0 : v2.radicalBreakdown) ? v2.radicalBreakdown : [],
        compounds,
        key: (v2 == null ? void 0 : v2.key) || `k:${char}`,
        kind: "kanji"
      });
    }
    return shuffleArray(candidates).slice(0, maxQuestions);
  }, [items, maxQuestions]);
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [input, setInput] = reactExports.useState("");
  const [hintLevel, setHintLevel] = reactExports.useState(0);
  const [result, setResult] = reactExports.useState(null);
  const [done, setDone] = reactExports.useState(false);
  const current = pool[qIdx];
  const maskedCompound = reactExports.useMemo(() => {
    if (!current) return null;
    const c = current.compounds[0];
    if (!c || !c.compound) return null;
    const masked = c.compound.split("").map((ch) => ch === current.character ? "？" : ch).join("");
    return { masked, reading: c.reading || "", meaning: c.meaning || "", original: c.compound };
  }, [current]);
  const extraHints = reactExports.useMemo(() => {
    if (!current) return [];
    const out = [];
    if (hintLevel >= 1) {
      if (current.radicalBreakdown.length) {
        const chars = current.radicalBreakdown.map((r) => (r == null ? void 0 : r.char) || (r == null ? void 0 : r.radical) || r).filter(Boolean);
        if (chars.length) out.push(`🧩 Thành phần: ${chars.join(" · ")}`);
      } else if (current.radicals.length) {
        out.push(`🧩 Bộ thủ: ${current.radicals.join(" · ")}`);
      } else if (current.kunReadings[0]) {
        out.push(`🔊 Âm kun: ${current.kunReadings[0]}`);
      }
    }
    if (hintLevel >= 2 && current.compounds[1]) {
      const c2 = current.compounds[1];
      const m2 = (c2.compound || "").split("").map((ch) => ch === current.character ? "？" : ch).join("");
      out.push(`💡 Ghép khác: ${m2}${c2.reading ? ` (${c2.reading})` : ""}${c2.meaning ? ` — ${c2.meaning}` : ""}`);
    }
    if (hintLevel >= 3) {
      if (current.meaning) out.push(`📖 Nghĩa: ${current.meaning}`);
      if (current.hanviet) out.push(`漢越: ${current.hanviet}`);
    }
    return out;
  }, [current, hintLevel]);
  const handleSubmit = reactExports.useCallback((e) => {
    var _a, _b, _c;
    (_a = e == null ? void 0 : e.preventDefault) == null ? void 0 : _a.call(e);
    if (!current || result) return;
    const guess = input.trim();
    if (!guess) return;
    const isCorrect = guess === current.character;
    if (isCorrect) {
      (_b = scoring.recordCorrect) == null ? void 0 : _b.call(scoring, { word: current.character });
      playSFX("correct");
      speakJP(current.character);
    } else {
      (_c = scoring.recordWrong) == null ? void 0 : _c.call(scoring, { word: current.character });
      playSFX("wrong");
    }
    setResult({ correct: isCorrect, answer: current.character });
  }, [current, input, result, scoring]);
  const handleNext = reactExports.useCallback(() => {
    if (qIdx + 1 >= pool.length) {
      setDone(true);
      return;
    }
    setQIdx((q) => q + 1);
    setInput("");
    setHintLevel(0);
    setResult(null);
  }, [qIdx, pool.length]);
  const handleRestart = reactExports.useCallback(() => {
    var _a;
    setQIdx(0);
    setInput("");
    setHintLevel(0);
    setResult(null);
    setDone(false);
    (_a = scoring.reset) == null ? void 0 : _a.call(scoring);
  }, [scoring]);
  if (!pool.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chưa đủ dữ liệu kanji có từ ghép để chơi thám tử. Hãy chọn phần khác." })
    ] });
  }
  if (done) {
    const pct = pool.length > 0 ? Math.round((scoring.score || 0) / pool.length * 100) : 0;
    const emoji = pct >= 80 ? "🕵️🏆" : pct >= 50 ? "🔍👍" : "💪";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-emoji", children: emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-result-title", children: pct >= 80 ? "Thám tử đại tài!" : pct >= 50 ? "Vụ án tiến triển!" : "Cần luyện suy luận!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Đúng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value success", children: scoring.score || 0 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Tổng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value", children: pool.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Chính xác" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stat-value", children: [
            pct,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: handleRestart, style: { width: "100%", marginTop: 12 }, children: "🔄 Chơi lại" })
    ] });
  }
  if (!current || !maskedCompound) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-instruction", style: { marginBottom: 8 }, children: [
      "🔍 Vụ án ",
      qIdx + 1,
      "/",
      pool.length,
      " — Đoán chữ Hán"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "14px 16px", marginBottom: 12 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.9rem", opacity: 0.7, marginBottom: 6 }, children: "📋 Manh mối ban đầu:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.95rem", lineHeight: 1.7 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "🔢 Số nét: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: current.strokeCount || "?" })
        ] }),
        current.onReadings[0] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "🔊 Âm on: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: current.onReadings[0] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "🧩 Xuất hiện trong:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { fontSize: "1.2rem" }, children: maskedCompound.masked }),
          maskedCompound.reading && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            " (",
            maskedCompound.reading,
            ")"
          ] }),
          maskedCompound.meaning && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            " — ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: maskedCompound.meaning })
          ] })
        ] })
      ] }),
      extraHints.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 10, paddingTop: 8, borderTop: "1px dashed var(--n4-border, rgba(0,0,0,0.15))" }, children: extraHints.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.9rem", marginTop: 4 }, children: h }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, style: { display: "flex", gap: 8, marginBottom: 10 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          className: "n4-input",
          value: input,
          onChange: (e) => setInput(e.target.value),
          placeholder: "Nhập chữ Hán (vd 人)",
          disabled: !!result,
          style: { flex: 1, fontSize: "1.3rem", textAlign: "center" },
          lang: "ja"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "n4-btn n4-btn-primary", disabled: !input.trim() || !!result, children: "🔍 Suy luận" })
    ] }),
    !result && hintLevel < 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginBottom: 10 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: "n4-btn n4-btn-ghost n4-btn-sm",
        onClick: () => setHintLevel((l) => Math.min(3, l + 1)),
        children: [
          "💡 Gợi ý thêm (cấp ",
          hintLevel + 1,
          "/3)"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScaffoldingLayer,
      {
        currentItem: current,
        text: current.character,
        toolbarConfig: { hint: false, reveal: false, speak: true, bookmark: true, lookup: true, drawer: true }
      }
    ),
    result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      padding: "10px 12px",
      borderRadius: 8,
      background: result.correct ? "rgba(74,222,128,0.15)" : "rgba(248,113,113,0.15)",
      textAlign: "center",
      marginTop: 10
    }, children: [
      result.correct ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "✅ ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { fontSize: "1.6rem" }, children: result.answer }),
        " — Đúng rồi thám tử! ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("em", { children: [
          "(",
          current.meaning,
          ")"
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "❌ Đáp án: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { fontSize: "1.6rem" }, children: result.answer }),
        " — ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: current.meaning })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: handleNext, style: { marginTop: 10, width: "100%" }, children: qIdx + 1 < pool.length ? "Vụ án tiếp ▶" : "Xem kết quả" }) })
    ] })
  ] });
}
function MagicCastingMode({ items = [] }) {
  var _a;
  const containerRef = reactExports.useRef(null);
  const canvasRef = reactExports.useRef(null);
  const castTimerRef = reactExports.useRef(null);
  const qCfg = reactExports.useMemo(() => getQualityConfig(), []);
  const lowPowerMotion = qCfg.tier === "low" || ((_a = qCfg.deviceProbe) == null ? void 0 : _a.isMobile);
  const { score, combo, hp, gameState, addScore, resetCombo, setGameState } = useGameStore(useShallow((s) => ({
    score: s.score,
    combo: s.combo,
    hp: s.hp,
    gameState: s.gameState,
    addScore: s.addScore,
    resetCombo: s.resetCombo,
    setGameState: s.setGameState
  })));
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [castSuccess, setCastSuccess] = reactExports.useState(false);
  const { rive, RiveComponent } = distExports.useRive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    // Placeholder wizard
    stateMachines: "bumpy",
    autoplay: !lowPowerMotion
  });
  const triggerCastInput = distExports.useStateMachineInput(rive, "bumpy", "bump");
  reactExports.useEffect(() => {
    useGameStore.setState({ hp: 100, score: 0, combo: 0, gameState: "PLAYING" });
  }, []);
  const handleCast = () => {
    if (gameState !== "PLAYING") return;
    setCastSuccess(true);
    if (triggerCastInput) triggerCastInput.fire();
    addScore(150);
    if (castTimerRef.current) window.clearTimeout(castTimerRef.current);
    castTimerRef.current = window.setTimeout(() => {
      setCastSuccess(false);
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, items.length));
      castTimerRef.current = null;
    }, 1e3);
  };
  const castSuccessRef = reactExports.useRef(castSuccess);
  reactExports.useEffect(() => {
    castSuccessRef.current = castSuccess;
  }, [castSuccess]);
  reactExports.useEffect(() => {
    var _a2;
    if (!canvasRef.current || lowPowerMotion) return;
    const canvas = canvasRef.current;
    const renderer = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: qCfg.antialias,
      powerPreference: ((_a2 = qCfg.deviceProbe) == null ? void 0 : _a2.isMobile) ? "low-power" : "high-performance"
    });
    const maxDpr = Array.isArray(qCfg.dpr) ? qCfg.dpr[1] : 1;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxDpr || 1));
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, 1, 0.1, 1e3);
    camera.position.z = 5;
    const resize = () => {
      const host = containerRef.current || canvas.parentElement;
      const width = Math.max(1, (host == null ? void 0 : host.clientWidth) || window.innerWidth || 1);
      const height = Math.max(1, (host == null ? void 0 : host.clientHeight) || window.innerHeight || 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });
    const geometry = new RingGeometry(1, 1.2, 32);
    const material = new MeshBasicMaterial({ color: 16711935, side: DoubleSide, transparent: true, opacity: 0.5 });
    const ring = new Mesh(geometry, material);
    scene.add(ring);
    let reqId;
    let disposed = false;
    let lastRender = 0;
    let lastTime = performance.now();
    const frameMs = 1e3 / (qCfg.frameCap || 30);
    const animate = (now = performance.now()) => {
      if (disposed) return;
      reqId = requestAnimationFrame(animate);
      if (typeof document !== "undefined" && document.hidden) return;
      if (now - lastRender < frameMs) return;
      const deltaScale = Math.min(2, Math.max(0.25, (now - lastTime) / 16.67));
      lastTime = now;
      lastRender = now;
      ring.rotation.z += 0.01 * deltaScale;
      if (castSuccessRef.current) {
        ring.scale.setScalar(ring.scale.x + 0.1 * deltaScale);
        material.opacity -= 0.02 * deltaScale;
        if (material.opacity <= 0) {
          ring.scale.setScalar(1);
          material.opacity = 0.5;
        }
      }
      renderer.render(scene, camera);
    };
    reqId = requestAnimationFrame(animate);
    return () => {
      disposed = true;
      cancelAnimationFrame(reqId);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [lowPowerMotion, qCfg]);
  reactExports.useEffect(() => () => {
    if (castTimerRef.current) window.clearTimeout(castTimerRef.current);
  }, []);
  const currentItem = items[currentIndex] || { word: "魔法", reading: "まほう", meaning: "Phép thuật" };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "magic-casting-container", ref: containerRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "webgpu-canvas-container", children: !lowPowerMotion && /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "kanji-target-area", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `kanji-display ${castSuccess ? "cast" : ""}`, children: currentItem.word }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#00f0ff", fontSize: "1.5rem" }, children: currentItem.reading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#fff" }, children: currentItem.meaning }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "cast-button", onClick: handleCast, children: "NIỆM CHÚ" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rive-character-layer", style: { left: "60%" }, children: !lowPowerMotion && /* @__PURE__ */ jsxRuntimeExports.jsx(RiveComponent, { className: "ninja-rive" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "game-hud", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "score-pop", children: [
        "Điểm: ",
        score
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: `combo-meter`, children: [
        "Năng lượng: ",
        hp,
        "%"
      ] })
    ] }) })
  ] });
}
const StrokeCanvas = reactExports.lazy(() => __vitePreload(() => import("./StrokeCanvas-HZQYVvE8.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url));
function StrokeTraceMode({ items = [], maxItems = 10 }) {
  const pool = reactExports.useMemo(() => items.filter((it) => it == null ? void 0 : it.kanji).slice(0, maxItems), [items, maxItems]);
  const [idx, setIdx] = reactExports.useState(0);
  const [result, setResult] = reactExports.useState(null);
  const [typedStrokeCount, setTypedStrokeCount] = reactExports.useState("");
  const recordAnswer = useLearningStore((s) => s.recordAnswer);
  const current = pool[idx];
  const expectedStrokes = (current == null ? void 0 : current.strokes) || (current == null ? void 0 : current.strokeCount) || 0;
  if (!current) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "🖌️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có kanji nào để luyện viết." })
    ] });
  }
  const evaluateStrokeCount = (count) => {
    const ok = expectedStrokes > 0 ? Math.abs(count - expectedStrokes) <= 1 : count >= 3;
    setResult({ ok, count, expected: expectedStrokes });
    try {
      bus.emit(GAME_EVENTS.ANSWER_SUBMITTED, {
        correct: ok,
        itemKey: current.kanji ? `k:${current.kanji}` : null,
        itemKind: "kanji",
        combo: ok ? 1 : 0,
        phase: "core",
        trainerId: "kanji-academy",
        mode: "stroke-trace",
        ts: Date.now(),
        meta: { expected: expectedStrokes, actual: count }
      });
    } catch (e) {
    }
    recordAnswer(ok);
  };
  const handleComplete = (strokes) => evaluateStrokeCount((strokes == null ? void 0 : strokes.length) || 0);
  const next = () => {
    setResult(null);
    setTypedStrokeCount("");
    setIdx((i) => Math.min(pool.length - 1, i + 1));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stroke-trace-mode", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-stroke-trace-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-stroke-trace-kanji", lang: "ja", children: current.kanji }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stroke-trace-meta", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: current.meaning }) }),
        expectedStrokes > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "Số nét mong đợi: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: expectedStrokes })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          current.on && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "音 ",
            current.on,
            " · "
          ] }),
          current.kun && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "訓 ",
            current.kun
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-stroke-trace-canvas", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Đang tải canvas…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      StrokeCanvas,
      {
        width: 340,
        height: 340,
        onComplete: handleComplete,
        guideGrid: true
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        className: "n4-stroke-trace-keyboard",
        onSubmit: (event) => {
          event.preventDefault();
          const count = Number.parseInt(typedStrokeCount, 10);
          if (Number.isFinite(count) && count > 0) evaluateStrokeCount(count);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "stroke-count-answer", children: "Không thể dùng khung vẽ? Nhập số nét:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "stroke-count-answer", className: "n4-input", type: "number", min: "1", max: "64", value: typedStrokeCount, onChange: (event) => setTypedStrokeCount(event.target.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", type: "submit", disabled: !typedStrokeCount, children: "Kiểm tra số nét" })
        ]
      }
    ),
    result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-stroke-trace-result ${result.ok ? "is-ok" : "is-off"}`, children: [
      result.ok ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "✅ Tốt! ",
        result.count,
        " nét — sát mục tiêu."
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "😅 ",
        result.count,
        "/",
        result.expected,
        " nét. Thử lại hoặc nhấn tiếp."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stroke-trace-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setResult(null), children: "↺ Thử lại" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-btn-sm", onClick: next, disabled: idx + 1 >= pool.length, children: idx + 1 >= pool.length ? "Đã hết" : "Tiếp →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "n4-stroke-trace-foot", children: [
      "Câu ",
      idx + 1,
      "/",
      pool.length
    ] })
  ] });
}
const MODES = [
  // Primary 3 — always visible as tabs
  { id: "flashcard", label: "Thẻ lật", icon: "🃏" },
  { id: "quiz", label: "Trắc nghiệm", icon: "❓" },
  { id: "reading", label: "Đọc kanji", icon: "📖" },
  { id: "jlpt-practice", label: "Luyện thi JLPT", icon: "📝" },
  // Overflow — behind "⋯" button
  { id: "match", label: "Ghép đôi", icon: "🔗" },
  { id: "writing", label: "Phép bút", icon: "🪄" },
  { id: "family", label: "Bộ thủ", icon: "🌳" },
  { id: "okurigana", label: "Okurigana", icon: "あ" },
  { id: "on-kun", label: "Âm/Huấn", icon: "🔀" },
  { id: "look-alike", label: "Giống nhau", icon: "👁️" },
  { id: "detective", label: "Thám tử", icon: "🔍" },
  { id: "stroke-trace", label: "Viết nét", icon: "🖌️" }
];
const kanjiChar = kanjiAccessors.getQuestion;
const kanjiMeaning = kanjiAccessors.getAnswer;
const kanjiReading = kanjiAccessors.getReading;
const parseCompounds = (str) => {
  if (!str) return [];
  return str.split(", ").map((c) => {
    const trimmed = c.trim();
    if (!trimmed) return null;
    const dashIdx = trimmed.indexOf(" - ");
    return {
      jp: dashIdx > -1 ? trimmed.slice(0, dashIdx) : trimmed,
      vi: dashIdx > -1 ? trimmed.slice(dashIdx + 3) : ""
    };
  }).filter(Boolean);
};
const parseKanjiExample = (str) => {
  if (!str) return null;
  const slashIdx = str.indexOf(" / ");
  const jp = slashIdx > -1 ? str.slice(0, slashIdx) : str;
  const rest = slashIdx > -1 ? str.slice(slashIdx + 3) : "";
  const parenIdx = rest.indexOf("(");
  const romaji = parenIdx > -1 ? rest.slice(0, parenIdx).trim() : rest;
  const vi = parenIdx > -1 ? rest.slice(parenIdx + 1).replace(/\)$/, "") : "";
  return { jp, romaji, vi };
};
const KANJI_EVOLUTION = {
  "日": { origin: "☀️", story: "Hình vẽ mặt trời với tia sáng ở giữa", ancient: "𡆸" },
  "月": { origin: "🌙", story: "Hình vẽ vầng trăng lưỡi liềm", ancient: "𠂇" },
  "山": { origin: "⛰️", story: "Ba ngọn núi nhô lên", ancient: "𠂉" },
  "川": { origin: "🌊", story: "Ba đường sóng chảy → dòng sông", ancient: "巛" },
  "木": { origin: "🌳", story: "Cái cây với rễ và cành", ancient: "𣎵" },
  "火": { origin: "🔥", story: "Ngọn lửa bốc cao", ancient: "𠈌" },
  "水": { origin: "💧", story: "Những giọt nước chảy", ancient: "氺" },
  "土": { origin: "🏔️", story: "Mặt đất và trụ đứng trên đó", ancient: "𠂇" },
  "金": { origin: "⚙️", story: "Kim loại quý trong mỏ đất", ancient: "𠁀" },
  "人": { origin: "🚶", story: "Người đứng nhìn nghiêng", ancient: "𠂉" },
  "口": { origin: "👄", story: "Hình dạng cái miệng mở", ancient: "𠀁" },
  "目": { origin: "👁️", story: "Con mắt nhìn thẳng", ancient: "𥃿" },
  "耳": { origin: "👂", story: "Hình dạng cái tai", ancient: "𠂋" },
  "手": { origin: "✋", story: "Bàn tay với năm ngón", ancient: "𠂇" },
  "足": { origin: "🦵", story: "Bàn chân và ống chân", ancient: "𠂢" },
  "大": { origin: "💪", story: "Người dang rộng hai tay", ancient: "𠂉" },
  "小": { origin: "⚬", story: "Ba điểm nhỏ li ti", ancient: "𠃊" },
  "上": { origin: "⬆️", story: "Đường nằm phía trên đường ngang", ancient: "𠂇" },
  "下": { origin: "⬇️", story: "Đường nằm phía dưới đường ngang", ancient: "𠃊" },
  "中": { origin: "🎯", story: "Mũi tên xuyên qua giữa mục tiêu", ancient: "𠃊" },
  "心": { origin: "❤️", story: "Hình trái tim với mạch đập", ancient: "𠂉" },
  "力": { origin: "💪", story: "Cánh tay bắp thịt cuộn lên", ancient: "𠃊" },
  "女": { origin: "🧎", story: "Người phụ nữ quỳ gối khoanh tay", ancient: "𠂎" },
  "男": { origin: "👨‍🌾", story: "田 (ruộng) + 力 (sức mạnh) = người canh tác", ancient: "" },
  "子": { origin: "👶", story: "Đứa trẻ đang vẫy tay", ancient: "𠂇" },
  "門": { origin: "🚪", story: "Hai cánh cổng lớn", ancient: "𠄜" },
  "雨": { origin: "🌧️", story: "Đám mây với những giọt mưa rơi xuống", ancient: "𠃊" },
  "気": { origin: "🌬️", story: "Hơi nước được nấu từ gạo", ancient: "𠃊" },
  "食": { origin: "🍚", story: "Người cầm đũa và bát cơm", ancient: "𠃊" },
  "車": { origin: "🚗", story: "Xe có bánh nhìn từ trên xuống", ancient: "𠂉" }
};
const kanjiFront = kanjiAccessors.getDisplay;
const kanjiSubtitle = (item) => (item == null ? void 0 : item.title) || "";
const kanjiBack = (item) => ({
  reading: kanjiReading(item),
  meaning: (item == null ? void 0 : item.meaning) || "",
  backHeader: { char: (item == null ? void 0 : item.kanji) || "", label: (item == null ? void 0 : item.title) || "" },
  on: ((item == null ? void 0 : item.on) || "").replace(/\s*\([^)]*\)\s*/g, "").trim() || "",
  kun: ((item == null ? void 0 : item.kun) || "").replace(/\s*\([^)]*\)\s*/g, "").trim() || "",
  compounds: parseCompounds(item == null ? void 0 : item.compounds),
  example: parseKanjiExample(item == null ? void 0 : item.example),
  description: (item == null ? void 0 : item.description) || "",
  subtitle: (item == null ? void 0 : item.title) || "",
  evolution: KANJI_EVOLUTION[item == null ? void 0 : item.kanji] || null
});
const kanjiInfo = kanjiAccessors.getInfo;
function KanjiFamilyMode({ items, maxCards }) {
  const scoring = useScoreEngine();
  const families = reactExports.useMemo(() => {
    const groups = {};
    items.forEach((it) => {
      var _a;
      const radical2 = it.radical || (it.title ? (_a = it.title.match(/[一-龯]/)) == null ? void 0 : _a[0] : null) || (it.on ? it.on[0] : null) || "？";
      if (!groups[radical2]) groups[radical2] = [];
      groups[radical2].push(it);
    });
    return Object.entries(groups).filter(([, members2]) => members2.length >= 2).sort((a, b) => b[1].length - a[1].length);
  }, [items]);
  const [familyIdx, setFamilyIdx] = reactExports.useState(0);
  const [phase, setPhase] = reactExports.useState("browse");
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [score, setScore] = reactExports.useState(0);
  if (!families.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "🌳" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ kanji để tạo nhóm. Hãy chọn nhiều phần hơn." })
    ] });
  }
  const [radical, members] = families[familyIdx % families.length];
  const quizItems = [...members].sort(() => Math.random() - 0.5).slice(0, Math.min(maxCards, members.length));
  const quizItem = quizItems[qIdx];
  const quizOptions = !quizItem || phase !== "quiz" ? [] : [
    ...items.filter((it) => it.kanji !== quizItem.kanji).sort(() => Math.random() - 0.5).slice(0, 3),
    quizItem
  ].sort(() => Math.random() - 0.5);
  const correctIdx = quizOptions.findIndex((o) => o.kanji === (quizItem == null ? void 0 : quizItem.kanji));
  const handlePick = (i) => {
    if (feedback) return;
    setSelected(i);
    if (i === correctIdx) {
      setFeedback("correct");
      setScore((s) => s + 1);
      scoring.recordCorrect(quizItem);
    } else {
      setFeedback("wrong");
      scoring.recordWrong(quizItem);
    }
    setTimeout(() => {
      setFeedback(null);
      setSelected(null);
      if (qIdx + 1 >= quizItems.length) {
        setPhase("result");
      } else {
        setQIdx((q) => q + 1);
      }
    }, 1300);
  };
  const nextFamily = () => {
    setFamilyIdx((f) => (f + 1) % families.length);
    setPhase("browse");
    setQIdx(0);
    setScore(0);
    setFeedback(null);
    setSelected(null);
  };
  if (phase === "result") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-icon", children: "🌳" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-title", children: "Kết quả Bộ thủ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-value", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Đúng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-value", children: quizItems.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Tổng" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", style: { marginTop: 16 }, onClick: nextFamily, children: "🌳 Nhóm tiếp theo" })
    ] });
  }
  if (phase === "browse") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { marginBottom: 16, textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2rem", marginBottom: 4 }, children: radical }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85rem", color: "var(--n4-text-muted)" }, children: [
          "Nhóm bộ thủ · ",
          members.length,
          " kanji"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 20 }, children: members.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "10px 14px", textAlign: "center", minWidth: 90 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.8rem" }, children: it.kanji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.75rem", color: "var(--n4-text-muted)" }, children: kanjiReading(it) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8rem" }, children: it.meaning || it.title }),
        KANJI_EVOLUTION[it.kanji] && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.1rem", marginTop: 4 }, title: KANJI_EVOLUTION[it.kanji].story, children: KANJI_EVOLUTION[it.kanji].origin })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: () => setPhase("quiz"), children: "❓ Làm quiz nhóm này" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: nextFamily, children: "▶ Nhóm khác" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 12, fontSize: "0.8rem", color: "var(--n4-text-muted)" }, children: [
        "Nhóm ",
        familyIdx % families.length + 1,
        "/",
        families.length
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 12, fontSize: "0.9rem", color: "var(--n4-text-muted)" }, children: [
      "🌳 Nhóm: ",
      radical,
      " · Câu ",
      qIdx + 1,
      "/",
      quizItems.length,
      " · Điểm: ",
      score
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { textAlign: "center", marginBottom: 16, padding: "20px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.9rem", color: "var(--n4-text-muted)", marginBottom: 8 }, children: "Kanji nào có nghĩa:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.4rem", fontWeight: 700 }, children: (quizItem == null ? void 0 : quizItem.meaning) || (quizItem == null ? void 0 : quizItem.title) }),
      (quizItem == null ? void 0 : quizItem.on) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85rem", color: "var(--n4-text-muted)", marginTop: 4 }, children: [
        "音読み: ",
        quizItem.on
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }, children: quizOptions.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `n4-btn n4-btn-neon`,
        style: {
          fontSize: "2rem",
          padding: "18px",
          background: feedback ? i === correctIdx ? "var(--n4-success)" : i === selected ? "var(--n4-danger)" : void 0 : void 0
        },
        onClick: () => handlePick(i),
        disabled: !!feedback,
        children: opt.kanji
      },
      i
    )) }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 12, textAlign: "center", fontSize: "0.9rem" }, children: feedback === "correct" ? `✅ Đúng! ${quizItem.kanji} = ${quizItem.meaning || quizItem.title}` : `❌ Sai! Đáp án: ${quizItem.kanji} (${quizItem.meaning || quizItem.title})` })
  ] });
}
function KanjiAcademy({ mode = "flashcard" }) {
  const storeDifficulty = useAppStore((s) => s.difficulty);
  const storeQuestionCount = useAppStore((s) => s.defaultQuestionCount);
  const setItemCount = useAppStore((s) => s.setDefaultQuestionCount);
  const [section, setSection] = reactExports.useState("all");
  const [difficulty, setDifficulty] = reactExports.useState(storeDifficulty || "normal");
  const studySession = useStudySession("kanji-academy");
  const baseItems = useKanjiItems(section);
  const items = studySession.filterItems(baseItems);
  const sections = useSectionList("kanji");
  const rawItemCount = storeQuestionCount || 10;
  const itemCount = studySession.filterQuestionCount(rawItemCount);
  const maxQ = difficulty === "easy" ? Math.min(5, itemCount) : difficulty === "hard" ? Math.min(20, itemCount) : itemCount;
  const optCount = difficulty === "easy" ? 3 : difficulty === "hard" ? 5 : 4;
  const renderMode = () => {
    switch (mode) {
      case "flashcard":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          FlashcardMode,
          {
            items,
            getFront: kanjiFront,
            getBack: kanjiBack,
            getSubtitle: kanjiSubtitle,
            getSrsKey: kanjiAccessors.getKey,
            cardType: "kanji",
            maxCards: maxQ,
            srsAware: true
          }
        );
      case "quiz":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items,
            getQuestion: kanjiChar,
            getAnswer: kanjiMeaning,
            getQuestionDisplay: kanjiChar,
            getCorrectInfo: kanjiInfo,
            getSrsKey: kanjiAccessors.getKey,
            getSection: kanjiAccessors.getSection,
            optionCount: optCount,
            maxQuestions: maxQ,
            difficulty,
            srsAware: true
          }
        );
      case "reading":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items,
            getQuestion: kanjiChar,
            getAnswer: kanjiReading,
            getQuestionDisplay: kanjiChar,
            getCorrectInfo: kanjiInfo,
            getSrsKey: kanjiAccessors.getKey,
            getSection: kanjiAccessors.getSection,
            optionCount: optCount,
            maxQuestions: maxQ,
            speakOnShow: false,
            difficulty,
            srsAware: true
          }
        );
      case "match":
        if (items.length < 4) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            QuizMode,
            {
              items,
              getQuestion: kanjiChar,
              getAnswer: kanjiMeaning,
              getQuestionDisplay: kanjiChar,
              getCorrectInfo: kanjiInfo,
              getSrsKey: kanjiAccessors.getKey,
              getSection: kanjiAccessors.getSection,
              optionCount: optCount,
              maxQuestions: maxQ,
              difficulty,
              srsAware: true
            }
          );
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          MatchMode,
          {
            items,
            getWord: kanjiChar,
            getMeaning: kanjiMeaning,
            getSrsKey: kanjiAccessors.getKey,
            pairCount: Math.max(2, Math.min(6, Math.floor(items.length / 2))),
            srsAware: true
          }
        );
      case "writing": {
        const magicItems = items.map((it) => ({
          word: it.kanji || "",
          reading: kanjiReading(it),
          meaning: kanjiMeaning(it)
        }));
        return /* @__PURE__ */ jsxRuntimeExports.jsx(MagicCastingMode, { items: magicItems });
      }
      case "stroke-trace":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(StrokeTraceMode, { items, maxItems: maxQ });
      case "family":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(KanjiFamilyMode, { items, maxCards: maxQ });
      case "okurigana":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(OkuriganaQuizMode, { items, maxQuestions: maxQ });
      case "on-kun":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(OnKunSwitchMode, { items, maxQuestions: maxQ });
      case "look-alike":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(LookAlikeKanjiMode, { items, maxQuestions: maxQ });
      case "detective":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(KanjiDetectiveMode, { items, maxQuestions: maxQ });
      case "jlpt-practice":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(KanjiBattleMode, { items, trainerId: "kanji-academy" });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          FlashcardMode,
          {
            items,
            getFront: kanjiFront,
            getBack: kanjiBack,
            getSrsKey: kanjiAccessors.getKey,
            maxCards: maxQ,
            srsAware: true
          }
        );
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerContext.Provider, { value: "kanji-academy", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    GameShell,
    {
      trainerId: "kanji-academy",
      mode,
      icon: "🏯",
      title: "Học viện hán tự",
      color: "var(--n4-cat-kanji)",
      hearts: 3,
      rhythm: { warmup: 3, bossAt: "mid", bossCount: 1, cooldown: 1, totalItems: itemCount },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrainerTopBar,
          {
            trainerId: "kanji-academy",
            activeMode: mode,
            modes: MODES,
            sections,
            section,
            onSectionChange: setSection,
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
  KanjiAcademy as default
};
