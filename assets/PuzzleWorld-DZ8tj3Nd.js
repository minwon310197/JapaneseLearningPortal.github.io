import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-BbQ9A_1j.js";
import { u as useScoreEngine, T as TrainerContext } from "./useScoreEngine-f-lCg0MN.js";
import { u as useVocabItems, b as useSectionList } from "./useDataHelper-DtTUT9Wk.js";
import { x as playSFX, L as speakJP, o as onStopAll, b as stopSpeech } from "./index-BEJSIlFS.js";
import { u as useGameStore } from "./useGameEngine-BKAIg4EU.js";
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
const CROSSWORD_POOL = [
  { word: "ねこ", clue: "Con mèo" },
  { word: "いぬ", clue: "Con chó" },
  { word: "さかな", clue: "Cá (thức ăn / sinh vật)" },
  { word: "にく", clue: "Thịt" },
  { word: "みず", clue: "Nước (uống)" },
  { word: "やま", clue: "Núi" },
  { word: "かわ", clue: "Sông / suối" },
  { word: "そら", clue: "Bầu trời" },
  { word: "うみ", clue: "Biển" },
  { word: "はな", clue: "Hoa / mũi" },
  { word: "くも", clue: "Đám mây" },
  { word: "つき", clue: "Mặt trăng / tháng" },
  { word: "ほし", clue: "Ngôi sao" },
  { word: "かぜ", clue: "Gió / cảm lạnh" },
  { word: "あめ", clue: "Mưa / kẹo" },
  { word: "ゆき", clue: "Tuyết" },
  { word: "ひかり", clue: "Ánh sáng" },
  { word: "くるま", clue: "Xe hơi" },
  { word: "でんしゃ", clue: "Xe lửa / tàu điện" },
  { word: "ひこうき", clue: "Máy bay" },
  { word: "がっこう", clue: "Trường học" },
  { word: "びょういん", clue: "Bệnh viện" },
  { word: "ぎんこう", clue: "Ngân hàng" },
  { word: "ゆうびんきょく", clue: "Bưu điện" },
  { word: "としょかん", clue: "Thư viện" },
  { word: "レストラン", clue: "Nhà hàng" },
  { word: "スーパー", clue: "Siêu thị" },
  { word: "ほん", clue: "Sách" },
  { word: "えんぴつ", clue: "Bút chì" },
  { word: "めがね", clue: "Kính mắt" },
  { word: "かばん", clue: "Túi xách / cặp" },
  { word: "くつ", clue: "Giày" },
  { word: "ぼうし", clue: "Mũ" },
  { word: "ふく", clue: "Quần áo" },
  { word: "てがみ", clue: "Thư (bức thư)" },
  { word: "でんわ", clue: "Điện thoại" },
  { word: "テレビ", clue: "Tivi" },
  { word: "パソコン", clue: "Máy tính (PC)" },
  { word: "カメラ", clue: "Máy ảnh" },
  { word: "にほんご", clue: "Tiếng Nhật" },
  { word: "えいご", clue: "Tiếng Anh" },
  { word: "フランスご", clue: "Tiếng Pháp" },
  { word: "たべもの", clue: "Thức ăn" },
  { word: "のみもの", clue: "Đồ uống" },
  { word: "りょうり", clue: "Nấu ăn / món ăn" },
  { word: "れいぞうこ", clue: "Tủ lạnh" },
  { word: "せんたくき", clue: "Máy giặt" },
  { word: "エアコン", clue: "Máy điều hòa" },
  { word: "にわ", clue: "Vườn" },
  { word: "まど", clue: "Cửa sổ" }
];
const WORDSEARCH_THEMES = {
  nature: {
    label: "🌿 Thiên nhiên",
    words: [
      { reading: "やま", meaning: "Núi" },
      { reading: "うみ", meaning: "Biển" },
      { reading: "かわ", meaning: "Sông" },
      { reading: "はな", meaning: "Hoa" },
      { reading: "き", meaning: "Cây" },
      { reading: "くも", meaning: "Mây" },
      { reading: "あめ", meaning: "Mưa" },
      { reading: "ゆき", meaning: "Tuyết" }
    ]
  },
  animals: {
    label: "🐾 Động vật",
    words: [
      { reading: "ねこ", meaning: "Mèo" },
      { reading: "いぬ", meaning: "Chó" },
      { reading: "うし", meaning: "Bò" },
      { reading: "うま", meaning: "Ngựa" },
      { reading: "とり", meaning: "Chim" },
      { reading: "さかな", meaning: "Cá" },
      { reading: "うさぎ", meaning: "Thỏ" },
      { reading: "ぶた", meaning: "Lợn" }
    ]
  },
  food: {
    label: "🍜 Thức ăn",
    words: [
      { reading: "にく", meaning: "Thịt" },
      { reading: "さかな", meaning: "Cá" },
      { reading: "やさい", meaning: "Rau" },
      { reading: "くだもの", meaning: "Trái cây" },
      { reading: "こめ", meaning: "Gạo" },
      { reading: "たまご", meaning: "Trứng" },
      { reading: "パン", meaning: "Bánh mì" },
      { reading: "みず", meaning: "Nước" }
    ]
  },
  places: {
    label: "🏙️ Địa điểm",
    words: [
      { reading: "がっこう", meaning: "Trường học" },
      { reading: "びょういん", meaning: "Bệnh viện" },
      { reading: "ぎんこう", meaning: "Ngân hàng" },
      { reading: "こうえん", meaning: "Công viên" },
      { reading: "えき", meaning: "Ga tàu" },
      { reading: "みせ", meaning: "Cửa hàng" },
      { reading: "うち", meaning: "Nhà" },
      { reading: "にわ", meaning: "Vườn" }
    ]
  },
  body: {
    label: "🧍 Cơ thể",
    words: [
      { reading: "あたま", meaning: "Đầu" },
      { reading: "め", meaning: "Mắt" },
      { reading: "はな", meaning: "Mũi" },
      { reading: "くち", meaning: "Miệng" },
      { reading: "みみ", meaning: "Tai" },
      { reading: "て", meaning: "Tay" },
      { reading: "あし", meaning: "Chân" },
      { reading: "かた", meaning: "Vai" }
    ]
  },
  transport: {
    label: "🚆 Phương tiện",
    words: [
      { reading: "くるま", meaning: "Xe hơi" },
      { reading: "バス", meaning: "Xe buýt" },
      { reading: "タクシー", meaning: "Taxi" },
      { reading: "じてんしゃ", meaning: "Xe đạp" },
      { reading: "ふね", meaning: "Thuyền" },
      { reading: "ひこうき", meaning: "Máy bay" },
      { reading: "えき", meaning: "Ga tàu" },
      { reading: "みち", meaning: "Đường" }
    ]
  }
};
const HANGMAN_DIFFICULTY = {
  easy: {
    label: "Dễ",
    maxWrong: 8,
    showReading: true,
    description: "Cho xem cách đọc, 8 lần sai"
  },
  normal: {
    label: "Thường",
    maxWrong: 6,
    showReading: false,
    description: "Không hiện cách đọc, 6 lần sai"
  },
  hard: {
    label: "Khó",
    maxWrong: 4,
    showReading: false,
    description: "Không hiện cách đọc, 4 lần sai"
  }
};
const HIRAGANA_ALL = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ".split("");
const KATAKANA_ALL = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポー".split("");
function RuneForgeMode({ items = [], difficulty = "normal" }) {
  const { score, combo, hp, addScore, takeDamage, resetCombo } = useGameStore(useShallow((s) => ({
    score: s.score,
    combo: s.combo,
    hp: s.hp,
    addScore: s.addScore,
    takeDamage: s.takeDamage,
    resetCombo: s.resetCombo
  })));
  const scoring = useScoreEngine();
  const MAX_WRONG = difficulty === "easy" ? 8 : difficulty === "hard" ? 4 : 6;
  const pool = reactExports.useMemo(() => {
    const valid = items.filter((it) => it.word && it.reading && it.meaning);
    return [...valid].sort(() => Math.random() - 0.5).slice(0, 12);
  }, [items]);
  const [round, setRound] = reactExports.useState(0);
  const [guessed, setGuessed] = reactExports.useState([]);
  const [wrong, setWrong] = reactExports.useState(0);
  const [finished, setFinished] = reactExports.useState(false);
  const [forgeFlash, setForgeFlash] = reactExports.useState(false);
  const [forgeShake, setForgeShake] = reactExports.useState(false);
  const [kanaTab, setKanaTab] = reactExports.useState("hira");
  const correctRunes = reactExports.useRef(0);
  reactExports.useEffect(() => {
    useGameStore.setState({ hp: 100, score: 0, combo: 0, gameState: "PLAYING" });
  }, []);
  const current = pool[round];
  const targetChars = current ? (current.reading || current.word).split("") : [];
  const isWon = current && targetChars.every((ch) => guessed.includes(ch));
  const isLost = wrong >= MAX_WRONG;
  const nextRound = reactExports.useCallback(() => {
    if (round + 1 >= pool.length) {
      setFinished(true);
    } else {
      setRound((r) => r + 1);
      setGuessed([]);
      setWrong(0);
    }
  }, [round, pool.length]);
  reactExports.useEffect(() => {
    if (isWon && current) {
      playSFX("correct");
      correctRunes.current++;
      addScore(200 + combo * 40);
      scoring.recordCorrect(current);
      setForgeFlash(true);
      setTimeout(() => setForgeFlash(false), 500);
      const tid = setTimeout(() => nextRound(), 1600);
      return () => clearTimeout(tid);
    }
    if (isLost && current) {
      playSFX("wrong");
      takeDamage(20);
      resetCombo();
      scoring.recordWrong(current);
      const tid = setTimeout(() => nextRound(), 2500);
      return () => clearTimeout(tid);
    }
  }, [isWon, isLost, nextRound]);
  const guess = reactExports.useCallback((ch) => {
    if (guessed.includes(ch) || isWon || isLost) return;
    setGuessed((g) => [...g, ch]);
    if (!targetChars.includes(ch)) {
      setWrong((w) => w + 1);
      setForgeShake(true);
      setTimeout(() => setForgeShake(false), 300);
    }
  }, [guessed, targetChars, isWon, isLost]);
  const chars = kanaTab === "kata" ? KATAKANA_ALL : HIRAGANA_ALL;
  if (!current && !finished) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "⚒️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu cho Rune Forge." })
    ] });
  }
  if (finished) {
    const pct = pool.length > 0 ? Math.round(correctRunes.current / pool.length * 100) : 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forge-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "forge-result-icon", children: "⚒️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "forge-result-title", children: "ĐÃ RÈN XONG" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forge-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forge-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "forge-stat-value", children: correctRunes.current }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "forge-stat-label", children: "Rèn đúng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forge-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "forge-stat-value", children: pool.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "forge-stat-label", children: "Tổng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forge-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "forge-stat-value", children: [
            pct,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "forge-stat-label", children: "Thành công" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forge-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "forge-stat-value", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "forge-stat-label", children: "Điểm" })
        ] })
      ] })
    ] });
  }
  const heatLevel = Math.max(0, 1 - wrong / MAX_WRONG);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `forge-container ${forgeFlash ? "flash" : ""} ${forgeShake ? "shake" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forge-hud", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forge-hud-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "forge-score-icon", children: "⚡" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "forge-score-value", children: score }),
        combo > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "forge-combo", children: [
          "x",
          combo
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forge-hud-center", children: [
        "ẤN ",
        round + 1,
        "/",
        pool.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "forge-hud-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forge-heat-bar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "forge-heat-fill", style: { width: `${heatLevel * 100}%` } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "forge-heat-text", children: [
          "🔥 ",
          MAX_WRONG - wrong
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forge-hint", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "forge-hint-icon", children: "💡" }),
      current.meaning
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forge-rune-circle", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "forge-rune-ring", style: { "--heat": heatLevel } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "forge-rune-letters", children: targetChars.map((ch, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `forge-rune-char ${guessed.includes(ch) ? "revealed" : "hidden"} ${isLost && !guessed.includes(ch) ? "missed" : ""}`,
          children: guessed.includes(ch) || isLost ? ch : "◆"
        },
        i
      )) })
    ] }),
    isWon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "forge-status success", children: "✨ ĐÃ RÈN XONG! ✨" }),
    isLost && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forge-status fail", children: [
      "💀 Lò rèn đã tắt — ",
      current.reading
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forge-kana-tabs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `forge-tab ${kanaTab === "hira" ? "active" : ""}`, onClick: () => setKanaTab("hira"), children: "あ Hira" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `forge-tab ${kanaTab === "kata" ? "active" : ""}`, onClick: () => setKanaTab("kata"), children: "ア Kata" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "forge-keyboard", children: chars.map((ch) => {
      let cls = "forge-key";
      if (guessed.includes(ch)) {
        cls += targetChars.includes(ch) ? " correct" : " wrong";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: cls,
          disabled: guessed.includes(ch) || isWon || isLost,
          onClick: () => guess(ch),
          children: ch
        },
        ch
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "forge-speak-btn", onClick: () => speakJP(current.word), children: "🔊 Hear Word" })
  ] });
}
const MODES = [
  // Primary 3 — always visible as tabs
  { id: "hangman", label: "Hangman", icon: "⚒️" },
  { id: "speed-type", label: "Gõ nhanh", icon: "⌨️" },
  { id: "build", label: "Ghép câu", icon: "🧱" },
  // Overflow — behind "⋯" button
  { id: "wordsearch", label: "Tìm từ", icon: "🔍" },
  { id: "crossword", label: "Ô chữ", icon: "🟩" }
];
const HIRAGANA_BASIC = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
const HIRAGANA_DAKUTEN = "がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ";
const HIRAGANA_SMALL = "ぁぃぅぇぉっゃゅょゎ";
const KATAKANA_BASIC = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const KATAKANA_DAKUTEN = "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";
const KATAKANA_SMALL = "ァィゥェォッャュョヮー";
const HIRA_ALL = [...HIRAGANA_BASIC, ...HIRAGANA_DAKUTEN, ...HIRAGANA_SMALL];
const KATA_ALL = [...KATAKANA_BASIC, ...KATAKANA_DAKUTEN, ...KATAKANA_SMALL];
function KanaKeyboard({ chars, guessed, targetChars, onGuess, disabled }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-kana-keyboard", children: chars.map((ch) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      className: `n4-kana-key${guessed.includes(ch) ? targetChars.includes(ch) ? " correct" : " wrong" : ""}`,
      disabled: guessed.includes(ch) || disabled,
      onClick: () => onGuess(ch),
      children: ch
    },
    ch
  )) });
}
function TabbedKeyboard({ guessed, targetChars, onGuess, disabled }) {
  const [tab, setTab] = reactExports.useState("hira");
  const TABS = [
    { id: "hira", label: "あ ひらがな" },
    { id: "kata", label: "ア カタカナ" }
  ];
  const chars = tab === "kata" ? KATA_ALL : HIRA_ALL;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-kana-tabs", children: TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `n4-btn n4-btn-sm ${tab === t.id ? "n4-btn-neon" : "n4-btn-ghost"}`,
        onClick: () => setTab(t.id),
        children: t.label
      },
      t.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KanaKeyboard, { chars, guessed, targetChars, onGuess, disabled })
  ] });
}
function HangmanGame({ items, maxRounds, difficulty, scoring }) {
  const diffCfg = HANGMAN_DIFFICULTY[difficulty] || HANGMAN_DIFFICULTY.normal;
  const MAX_WRONG = diffCfg.maxWrong;
  const pool = reactExports.useMemo(() => {
    const filtered = items.filter((it) => it.word && it.reading && it.meaning);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, maxRounds);
  }, [items, maxRounds]);
  const [round, setRound] = reactExports.useState(0);
  const [guessed, setGuessed] = reactExports.useState([]);
  const [wrong, setWrong] = reactExports.useState(0);
  const [score, setScore] = reactExports.useState(0);
  const [finished, setFinished] = reactExports.useState(false);
  const current = pool[round];
  const targetChars = current ? (current.reading || current.word).split("") : [];
  const isWon = current && targetChars.every((ch) => guessed.includes(ch));
  const isLost = wrong >= MAX_WRONG;
  const nextRound = reactExports.useCallback(() => {
    if (round + 1 >= pool.length) {
      setFinished(true);
    } else {
      setRound((r) => r + 1);
      setGuessed([]);
      setWrong(0);
    }
  }, [round, pool.length]);
  reactExports.useEffect(() => {
    if (isWon && current) {
      playSFX("correct");
      setScore((s) => s + 1);
      scoring.recordCorrect(current);
      const tid = setTimeout(() => nextRound(), 1500);
      return () => clearTimeout(tid);
    }
    if (isLost && current) {
      playSFX("wrong");
      scoring.recordWrong(current);
      const tid = setTimeout(() => nextRound(), 2500);
      return () => clearTimeout(tid);
    }
  }, [isWon, isLost, nextRound]);
  const guess = reactExports.useCallback((ch) => {
    if (guessed.includes(ch) || isWon || isLost) return;
    setGuessed((g) => [...g, ch]);
    if (!targetChars.includes(ch)) setWrong((w) => w + 1);
  }, [guessed, targetChars, isWon, isLost]);
  if (!current && !finished) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu." })
  ] });
  if (finished) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-icon", children: "🎉" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-title", children: "Kết quả Hangman" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-value", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Đúng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-value", children: pool.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Tổng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-result-stat-value", children: [
            pool.length > 0 ? Math.round(score / pool.length * 100) : 0,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Tỉ lệ" })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-hm-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-hm-status", children: [
      "Câu ",
      round + 1,
      "/",
      pool.length,
      " · Sai: ",
      wrong,
      "/",
      MAX_WRONG,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginLeft: 8, fontSize: "0.75rem", background: difficulty === "easy" ? "#22c55e" : difficulty === "hard" ? "#ef4444" : "#f59e0b", color: "#fff", borderRadius: 4, padding: "2px 6px" }, children: diffCfg.label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-hm-hint", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "1.1rem", fontWeight: 500 }, children: [
        "💡 ",
        current.meaning
      ] }),
      diffCfg.showReading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.9rem", opacity: 0.75, marginTop: 4 }, children: [
        "(",
        current.reading || current.word,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-hm-letters", children: targetChars.map((ch, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-hm-letter ${guessed.includes(ch) ? "revealed" : "hidden"}${isLost && !guessed.includes(ch) ? " missed" : ""}`, children: guessed.includes(ch) || isLost ? ch : "　" }, i)) }),
    isWon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-hm-won", children: "✅ Chính xác!" }),
    isLost && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-hm-lost", children: [
      "❌ Đáp án: ",
      current.reading || current.word
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabbedKeyboard, { guessed, targetChars, onGuess: guess, disabled: isWon || isLost }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { marginTop: 12 }, onClick: () => speakJP(current.word), children: "🔊 Nghe" })
  ] });
}
function SpeedTypeGame({ items, maxRounds, scoring }) {
  const pool = reactExports.useMemo(() => {
    const filtered = items.filter((it) => it.word && it.reading && it.meaning);
    return [...filtered].sort(() => Math.random() - 0.5).slice(0, maxRounds);
  }, [items, maxRounds]);
  const [round, setRound] = reactExports.useState(0);
  const [input, setInput] = reactExports.useState("");
  const [score, setScore] = reactExports.useState(0);
  const [finished, setFinished] = reactExports.useState(false);
  const [feedback, setFeedback] = reactExports.useState(null);
  const inputRef = reactExports.useRef(null);
  const feedbackTimerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, [round]);
  reactExports.useEffect(() => {
    const unsub = onStopAll(() => {
      stopSpeech();
    });
    return () => {
      stopSpeech();
      unsub();
      clearTimeout(feedbackTimerRef.current);
    };
  }, []);
  const current = pool[round];
  const submit = reactExports.useCallback(() => {
    if (!current || finished) return;
    const correct = input.trim() === (current.reading || current.word);
    if (correct) {
      playSFX("correct");
      setScore((s) => s + 1);
      setFeedback("correct");
      scoring.recordCorrect(current);
    } else {
      playSFX("wrong");
      setFeedback("wrong");
      scoring.recordWrong(current);
    }
    feedbackTimerRef.current = setTimeout(() => {
      setFeedback(null);
      setInput("");
      if (round + 1 >= pool.length) {
        setFinished(true);
      } else {
        setRound((r) => r + 1);
      }
    }, 1e3);
  }, [current, input, round, pool.length, finished]);
  if (!current && !finished) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu." })
  ] });
  if (finished) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-icon", children: "⌨️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-title", children: "Kết quả Speed Type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-value", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Đúng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-value", children: pool.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Tổng" })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-game-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-round-info", children: [
      "Câu ",
      round + 1,
      "/",
      pool.length
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-speed-type-word", children: current.meaning }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-speed-type-hint", children: [
      "Gõ: (",
      current.reading || current.word,
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: inputRef,
        className: `n4-input${feedback === "correct" ? " n4-feedback-correct" : feedback === "wrong" ? " n4-feedback-wrong" : ""}`,
        value: input,
        onChange: (e) => setInput(e.target.value),
        onKeyDown: (e) => e.key === "Enter" && submit(),
        disabled: !!feedback,
        placeholder: "Gõ reading ở đây...",
        style: { fontSize: "1.4rem", textAlign: "center", maxWidth: 300, width: "100%", margin: "0 auto" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-game-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-btn-sm", onClick: submit, children: "Xác nhận" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(current.word), children: "🔊" })
    ] })
  ] });
}
function BuildGame({ items, maxRounds, scoring }) {
  var _a, _b;
  const pool = reactExports.useMemo(() => {
    const withExample = items.filter((it) => it.example && it.example.trim().length > 3);
    return [...withExample].sort(() => Math.random() - 0.5).slice(0, maxRounds);
  }, [items, maxRounds]);
  const [round, setRound] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState([]);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [score, setScore] = reactExports.useState(0);
  const [finished, setFinished] = reactExports.useState(false);
  const buildTimerRef = reactExports.useRef(null);
  const current = pool[round];
  const sentence = ((_b = (_a = current == null ? void 0 : current.example) == null ? void 0 : _a.split("/")[0]) == null ? void 0 : _b.trim()) || "";
  const chars = reactExports.useMemo(() => sentence ? sentence.split("") : [], [sentence]);
  const shuffled = reactExports.useMemo(() => [...chars].sort(() => Math.random() - 0.5).map((ch, i) => ({ ch, id: i })), [chars]);
  const remaining = reactExports.useMemo(() => shuffled.filter((s) => !selected.includes(s.id)), [shuffled, selected]);
  const check = reactExports.useCallback(() => {
    const attempt = selected.map((id) => {
      var _a2;
      return ((_a2 = shuffled.find((s) => s.id === id)) == null ? void 0 : _a2.ch) || "";
    }).join("");
    if (attempt === sentence) {
      playSFX("correct");
      setScore((s) => s + 1);
      setFeedback("correct");
      scoring.recordCorrect(current);
    } else {
      playSFX("wrong");
      setFeedback("wrong");
      scoring.recordWrong(current);
    }
    buildTimerRef.current = setTimeout(() => {
      setFeedback(null);
      setSelected([]);
      if (round + 1 >= pool.length) setFinished(true);
      else setRound((r) => r + 1);
    }, 1500);
  }, [selected, shuffled, sentence, round, pool.length]);
  reactExports.useEffect(() => () => clearTimeout(buildTimerRef.current), []);
  if (!current && !finished) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cần từ vựng có câu ví dụ." })
  ] });
  if (finished) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-icon", children: "🧱" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-title", children: "Kết quả Ghép câu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-value", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Đúng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-value", children: pool.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Tổng" })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-game-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-round-info", children: [
      "Câu ",
      round + 1,
      "/",
      pool.length
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-puzzle-hint", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hint-icon", children: "💡" }),
      current.meaning
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-build-selected${feedback === "correct" ? " correct" : feedback === "wrong" ? " wrong" : ""}`, children: [
      selected.map((id) => {
        var _a2;
        const ch = ((_a2 = shuffled.find((s) => s.id === id)) == null ? void 0 : _a2.ch) || "";
        return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: () => setSelected((s) => s.filter((x) => x !== id)), style: { cursor: "pointer" }, children: ch }, id);
      }),
      selected.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-text-muted)" }, children: "Nhấn các ký tự bên dưới..." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-build-pool", children: remaining.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-neon", onClick: () => setSelected((sel) => [...sel, s.id]), style: { cursor: "pointer" }, children: s.ch }, s.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-game-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-btn-sm", onClick: check, disabled: selected.length !== chars.length, children: "✅ Kiểm tra" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setSelected([]), children: "🗑️ Xóa" })
    ] })
  ] });
}
function WordSearchGame({ items, maxRounds, scoring }) {
  const themeKey = reactExports.useMemo(() => {
    const keys = Object.keys(WORDSEARCH_THEMES);
    return keys[Math.floor(Math.random() * keys.length)];
  }, []);
  const theme = WORDSEARCH_THEMES[themeKey];
  const pool = reactExports.useMemo(() => {
    const vocabWords = items.filter((it) => it.reading && it.reading.length >= 2 && it.reading.length <= 5 && it.meaning).map((it) => ({ reading: it.reading, meaning: it.meaning }));
    const themeWords = theme.words.filter((w) => w.reading.length >= 2 && w.reading.length <= 5);
    const combined = [...vocabWords, ...themeWords];
    const seen = /* @__PURE__ */ new Set();
    const unique = combined.filter((w) => {
      if (seen.has(w.reading)) return false;
      seen.add(w.reading);
      return true;
    });
    return [...unique].sort(() => Math.random() - 0.5).slice(0, Math.min(maxRounds, 6));
  }, [items, maxRounds, theme]);
  const [found, setFound] = reactExports.useState([]);
  const [selecting, setSelecting] = reactExports.useState([]);
  const finished = found.length >= pool.length && pool.length > 0;
  const GRID_SIZE = 9;
  const gridData = reactExports.useMemo(() => {
    const g = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(""));
    const placed = [];
    const DIRS = [[0, 1], [1, 0], [1, 1], [1, -1]];
    for (const item of pool) {
      const word = item.reading;
      if (word.length > GRID_SIZE) continue;
      let didPlace = false;
      for (let attempt = 0; attempt < 40 && !didPlace; attempt++) {
        const [dr, dc] = DIRS[Math.floor(Math.random() * DIRS.length)];
        const rowMax = dr === 0 ? GRID_SIZE - 1 : dr > 0 ? GRID_SIZE - word.length : word.length - 1;
        const colMax = dc === 0 ? GRID_SIZE - 1 : dc > 0 ? GRID_SIZE - word.length : word.length - 1;
        const rowMin = dr < 0 ? word.length - 1 : 0;
        const colMin = dc < 0 ? word.length - 1 : 0;
        if (rowMax < rowMin || colMax < colMin) continue;
        const row = rowMin + Math.floor(Math.random() * (rowMax - rowMin + 1));
        const col = colMin + Math.floor(Math.random() * (colMax - colMin + 1));
        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          const r = row + dr * i;
          const c = col + dc * i;
          if (g[r][c] !== "" && g[r][c] !== word[i]) {
            canPlace = false;
            break;
          }
        }
        if (canPlace) {
          for (let i = 0; i < word.length; i++) g[row + dr * i][col + dc * i] = word[i];
          placed.push({ ...item, row, col, dr, dc });
          didPlace = true;
        }
      }
    }
    const fill = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほ";
    for (let r = 0; r < GRID_SIZE; r++)
      for (let c = 0; c < GRID_SIZE; c++)
        if (g[r][c] === "") g[r][c] = fill[Math.floor(Math.random() * fill.length)];
    return { grid: g, words: placed };
  }, [pool]);
  const checkSelection = reactExports.useCallback((cells) => {
    if (cells.length < 2) return;
    const str = cells.map((k) => {
      const [r, c] = k.split(",").map(Number);
      return gridData.grid[r][c];
    }).join("");
    const revStr = str.split("").reverse().join("");
    const match = gridData.words.find(
      (w) => (w.reading === str || w.reading === revStr) && !found.includes(w.reading)
    );
    if (match) {
      playSFX("correct");
      scoring.recordCorrect(match);
      setFound((f) => [...f, match.reading]);
      setSelecting([]);
    }
  }, [gridData, found, scoring]);
  const toggleCell = reactExports.useCallback((r, c) => {
    const key = `${r},${c}`;
    setSelecting((prev) => {
      const next = prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key];
      checkSelection(next);
      return next;
    });
  }, [checkSelection]);
  if (gridData.words.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu." })
  ] });
  if (finished) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-icon", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-title", children: [
        "Tìm hết ",
        found.length,
        " từ!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: () => {
        setFound([]);
        setSelecting([]);
      }, children: "🔄 Chơi lại" }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-game-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-round-info", children: [
      theme.label,
      " · Đã tìm: ",
      found.length,
      "/",
      gridData.words.length
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-wordsearch-words", children: gridData.words.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-wordsearch-word${found.includes(w.reading) ? " found" : ""}`, children: found.includes(w.reading) ? `✅ ${w.reading}` : w.meaning }, w.reading)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-wordsearch-grid", style: { gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(26px, 36px))` }, children: gridData.grid.map((row, r) => row.map((ch, c) => {
      const isSelected = selecting.includes(`${r},${c}`);
      const isFound = gridData.words.some((w) => found.includes(w.reading) && (() => {
        for (let i = 0; i < w.reading.length; i++) {
          if (w.row + w.dr * i === r && w.col + w.dc * i === c) return true;
        }
        return false;
      })());
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-wordsearch-cell${isSelected ? " selected" : ""}${isFound ? " found" : ""}`,
          onClick: () => toggleCell(r, c),
          children: ch
        },
        `${r}-${c}`
      );
    })) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-game-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setSelecting([]), children: "Xóa chọn" }) })
  ] });
}
function buildCrosswordGrid(entries, gridSize = 12) {
  const g = Array.from({ length: gridSize }, () => Array(gridSize).fill(""));
  const placed = [];
  if (entries.length === 0) return { grid: g, placed };
  const first = entries[0];
  const startRow = Math.floor(gridSize / 2);
  const startCol = Math.floor((gridSize - first.word.length) / 2);
  for (let i = 0; i < first.word.length; i++) g[startRow][startCol + i] = first.word[i];
  placed.push({ ...first, row: startRow, col: startCol, dir: "h", number: 1 });
  for (let wi = 1; wi < entries.length; wi++) {
    const entry = entries[wi];
    let bestPlacement = null;
    outer: for (const p of placed) {
      for (let oi = 0; oi < p.word.length; oi++) {
        for (let ni = 0; ni < entry.word.length; ni++) {
          if (p.word[oi] !== entry.word[ni]) continue;
          let row, col, dir;
          if (p.dir === "h") {
            col = p.col + oi;
            row = p.row - ni;
            dir = "v";
          } else {
            row = p.row + oi;
            col = p.col - ni;
            dir = "h";
          }
          const endRow = dir === "v" ? row + entry.word.length - 1 : row;
          const endCol = dir === "h" ? col + entry.word.length - 1 : col;
          if (row < 0 || col < 0 || endRow >= gridSize || endCol >= gridSize) continue;
          let ok = true;
          for (let k = 0; k < entry.word.length; k++) {
            const r = dir === "v" ? row + k : row;
            const c = dir === "h" ? col + k : col;
            if (g[r][c] !== "" && g[r][c] !== entry.word[k]) {
              ok = false;
              break;
            }
          }
          if (!ok) continue;
          bestPlacement = { row, col, dir };
          break outer;
        }
      }
    }
    if (bestPlacement) {
      const { row, col, dir } = bestPlacement;
      for (let k = 0; k < entry.word.length; k++) {
        const r = dir === "v" ? row + k : row;
        const c = dir === "h" ? col + k : col;
        g[r][c] = entry.word[k];
      }
      placed.push({ ...entry, row, col, dir, number: placed.length + 1 });
    }
  }
  return { grid: g, placed };
}
function CrosswordGame({ items, maxRounds, scoring }) {
  const puzzleEntries = reactExports.useMemo(() => {
    const vocabEntries = items.filter((it) => it.reading && it.reading.length >= 2 && it.reading.length <= 7 && it.meaning).map((it) => ({ word: it.reading, clue: it.meaning }));
    const poolEntries = CROSSWORD_POOL.map((e) => ({ word: e.word, clue: e.clue }));
    const seen = /* @__PURE__ */ new Set();
    const all = [...vocabEntries, ...poolEntries].filter((e) => {
      if (seen.has(e.word)) return false;
      seen.add(e.word);
      return true;
    });
    return [...all].sort(() => Math.random() - 0.5).slice(0, Math.min(maxRounds, 8));
  }, [items, maxRounds]);
  const GRID_SIZE = 12;
  const { grid, placed } = reactExports.useMemo(() => buildCrosswordGrid(puzzleEntries, GRID_SIZE), [puzzleEntries]);
  const [inputs, setInputs] = reactExports.useState({});
  const [checked, setChecked] = reactExports.useState(false);
  const [results, setResults] = reactExports.useState({});
  const [score, setScore] = reactExports.useState(0);
  const checkAll = reactExports.useCallback(() => {
    const res = {};
    let correct = 0;
    placed.forEach((p) => {
      const isCorrect = (inputs[p.number] || "").trim() === p.word;
      res[p.number] = isCorrect;
      if (isCorrect) {
        correct++;
        scoring.recordCorrect({ word: p.word, meaning: p.clue });
      } else {
        scoring.recordWrong({ word: p.word, meaning: p.clue });
      }
    });
    setResults(res);
    setScore(correct);
    setChecked(true);
    if (correct === placed.length) playSFX("correct");
    else playSFX("wrong");
  }, [inputs, placed, scoring]);
  const restart = () => {
    setInputs({});
    setChecked(false);
    setResults({});
    setScore(0);
  };
  if (placed.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu để tạo ô chữ." })
  ] });
  let minRow = GRID_SIZE, maxRow = 0, minCol = GRID_SIZE, maxCol = 0;
  for (let r = 0; r < GRID_SIZE; r++)
    for (let c = 0; c < GRID_SIZE; c++)
      if (grid[r][c] !== "") {
        if (r < minRow) minRow = r;
        if (r > maxRow) maxRow = r;
        if (c < minCol) minCol = c;
        if (c > maxCol) maxCol = c;
      }
  const cellSize = 32;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-game-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-round-info", children: [
      "🟩 Ô chữ — ",
      placed.length,
      " từ"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(${maxCol - minCol + 1}, ${cellSize}px)`,
      gap: 2,
      margin: "12px auto",
      width: "fit-content"
    }, children: Array.from(
      { length: maxRow - minRow + 1 },
      (_, ri) => Array.from({ length: maxCol - minCol + 1 }, (_2, ci) => {
        const r = ri + minRow;
        const c = ci + minCol;
        const ch = grid[r][c];
        const wordHere = placed.find((p) => {
          for (let k = 0; k < p.word.length; k++) {
            if ((p.dir === "v" ? p.row + k : p.row) === r && (p.dir === "h" ? p.col + k : p.col) === c) return true;
          }
          return false;
        });
        const isStart = placed.find((p) => p.row === r && p.col === c);
        const bgColor = !ch ? "transparent" : checked && wordHere ? results[wordHere.number] ? "var(--n4-success)" : "var(--n4-error)" : "var(--n4-surface)";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          width: cellSize,
          height: cellSize,
          background: bgColor,
          border: ch ? "1px solid var(--n4-border)" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.9rem",
          fontWeight: 600,
          position: "relative",
          color: checked && wordHere ? "#fff" : "var(--n4-text)"
        }, children: [
          isStart && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { position: "absolute", top: 1, left: 2, fontSize: "0.6rem", opacity: 0.7 }, children: isStart.number }),
          checked ? ch : ch ? "?" : ""
        ] }, `${r}-${c}`);
      })
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100%", maxWidth: 480, margin: "0 auto" }, children: placed.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { minWidth: 24, fontWeight: 700, color: checked ? results[p.number] ? "var(--n4-success)" : "var(--n4-error)" : "var(--n4-accent)" }, children: [
        p.number,
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: 1, fontSize: "0.85rem" }, children: p.clue }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.75rem", opacity: 0.6 }, children: [
        "(",
        p.word.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "n4-input",
          value: inputs[p.number] || "",
          onChange: (e) => setInputs((prev) => ({ ...prev, [p.number]: e.target.value })),
          disabled: checked,
          placeholder: `${p.dir === "h" ? "→" : "↓"} ...`,
          style: { width: 100, fontSize: "0.9rem", textAlign: "center" }
        }
      ),
      checked && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: results[p.number] ? "✅" : `❌ ${p.word}` })
    ] }, p.number)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-game-actions", children: !checked ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-primary",
        onClick: checkAll,
        disabled: Object.keys(inputs).length < placed.length,
        children: "✅ Kiểm tra"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginBottom: 8 }, children: score === placed.length ? "🏆 Xuất sắc!" : `Đúng ${score}/${placed.length}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: restart, children: "🔄 Ô chữ mới" })
    ] }) })
  ] });
}
function PuzzleWorld({ mode = "hangman" }) {
  const [section, setSection] = reactExports.useState("all");
  const [difficulty, setDifficulty] = reactExports.useState("normal");
  const [itemCount, setItemCount] = reactExports.useState(10);
  const scoring = useScoreEngine("puzzle-world");
  const { reset } = scoring;
  const items = useVocabItems(section);
  const sections = useSectionList("vocab");
  const maxQ = difficulty === "easy" ? 5 : difficulty === "hard" ? 20 : itemCount;
  reactExports.useEffect(() => {
    reset();
  }, [mode, section, reset]);
  reactExports.useEffect(() => {
    const unsub = onStopAll(() => stopSpeech());
    return () => {
      unsub();
      stopSpeech();
    };
  }, []);
  const renderMode = () => {
    switch (mode) {
      case "hangman":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(RuneForgeMode, { items, difficulty });
      case "speed-type":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SpeedTypeGame, { items, maxRounds: maxQ, scoring });
      case "build":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(BuildGame, { items, maxRounds: maxQ, scoring });
      case "wordsearch":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(WordSearchGame, { items, maxRounds: maxQ, scoring });
      case "crossword":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CrosswordGame, { items, maxRounds: maxQ, scoring });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(HangmanGame, { items, maxRounds: maxQ, difficulty, scoring });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerContext.Provider, { value: "puzzle-world", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    GameShell,
    {
      trainerId: "puzzle-world",
      mode,
      icon: "🧩",
      title: "Thế giới câu đố",
      color: "var(--n4-cat-puzzle)",
      hearts: 3,
      rhythm: { warmup: 3, bossAt: "mid", bossCount: 1, cooldown: 1, totalItems: itemCount },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrainerTopBar,
          {
            trainerId: "puzzle-world",
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
  PuzzleWorld as default
};
