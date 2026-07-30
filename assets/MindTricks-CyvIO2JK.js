import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-DvHP1w9U.js";
import { u as useScoreEngine, T as TrainerContext } from "./useScoreEngine-BRdzD2Hh.js";
import { Q as QuizMode, v as vocabAccessors } from "./QuizMode-CPaCpYew.js";
import { M as MatchMode } from "./MatchMode-x-8EHuqx.js";
import { u as useVocabItems, a as useKanjiItems, c as useSectionList } from "./useDataHelper-Bybwc3O4.js";
import { bA as playSFX, ac as onStopAll, a5 as stopSpeech, f as speakJP } from "./feature-3d-jK3b4Iv-.js";
import { u as useGameStore } from "./useGameEngine-FsXdQbMC.js";
import "./feature-3d-hud-Dp6hMoyV.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./index-CjITGIof.js";
import "./vendor-router-BTJacUKt.js";
import "./vendor-icons-DHCyxOF-.js";
import "./empty-Bvm-mx50.js";
import "./feature-3d-scenery-C3eSpuWG.js";
import "./quest-chains-CiwzmCpJ.js";
import "./PhaseRibbon-B3pRyuWr.js";
import "./useQuestionMeta-COYdBAbl.js";
import "./QuizFeedback-RE122Uxw.js";
import "./ScaffoldingLayer-Bdy8Rm1t.js";
function NeuralLinkMode({ items = [], difficulty = "normal" }) {
  const { score, combo, addScore, resetCombo } = useGameStore(useShallow((s) => ({
    score: s.score,
    combo: s.combo,
    addScore: s.addScore,
    resetCombo: s.resetCombo
  })));
  const scoring = useScoreEngine();
  const gridSize = difficulty === "easy" ? 3 : difficulty === "hard" ? 6 : 4;
  const studyDefault = difficulty === "easy" ? 10 : difficulty === "hard" ? 4 : 6;
  const [sessionSeed, setSessionSeed] = reactExports.useState(0);
  const pool = reactExports.useMemo(() => {
    const valid = items.filter((it) => it.word && it.meaning);
    return [...valid].sort(() => Math.random() - 0.5).slice(0, Math.min(gridSize, valid.length));
  }, [items, gridSize, sessionSeed]);
  const [phase, setPhase] = reactExports.useState("charge");
  const [studyTime, setStudyTime] = reactExports.useState(studyDefault);
  const [timer, setTimer] = reactExports.useState(studyDefault);
  const [answers, setAnswers] = reactExports.useState({});
  const [localScore, setLocalScore] = reactExports.useState(0);
  const [networkPulse, setNetworkPulse] = reactExports.useState(false);
  reactExports.useEffect(() => {
    useGameStore.setState({ hp: 100, score: 0, combo: 0, gameState: "PLAYING" });
  }, []);
  reactExports.useEffect(() => {
    if (phase !== "charge") return;
    if (timer <= 0) {
      setPhase("recall");
      return;
    }
    const tid = setTimeout(() => setTimer((t) => t - 1), 1e3);
    return () => clearTimeout(tid);
  }, [phase, timer]);
  const allMeanings = reactExports.useMemo(() => {
    const unique = [...new Set(pool.map((it) => it.meaning))];
    return unique.sort(() => Math.random() - 0.5);
  }, [pool]);
  const checkAnswers = reactExports.useCallback(() => {
    let correct = 0;
    pool.forEach((it, i) => {
      if (answers[i] === it.meaning) {
        correct++;
        addScore(150 + combo * 20);
        scoring.recordCorrect(it);
      } else {
        resetCombo();
        scoring.recordWrong(it);
      }
    });
    setLocalScore(correct);
    setPhase("result");
    if (correct === pool.length) {
      playSFX("correct");
      setNetworkPulse(true);
      setTimeout(() => setNetworkPulse(false), 600);
    } else {
      playSFX("wrong");
    }
  }, [pool, answers, addScore, combo, resetCombo, scoring]);
  const restart = () => {
    setSessionSeed((s) => s + 1);
    setPhase("charge");
    setTimer(studyTime);
    setAnswers({});
    setLocalScore(0);
  };
  if (pool.length < 2) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "🧠" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu cho Neural Link." })
    ] });
  }
  if (phase === "charge") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neural-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neural-charge-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "neural-charge-icon", children: "⚡" }),
        "ĐANG NẠP MẠNG THẦN KINH..."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neural-timer-ring", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100", height: "100", viewBox: "0 0 100 100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "44", fill: "none", stroke: "rgba(0,200,255,0.1)", strokeWidth: "4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "50",
              cy: "50",
              r: "44",
              fill: "none",
              stroke: "#00c8ff",
              strokeWidth: "4",
              strokeDasharray: `${timer / studyTime * 276} 276`,
              strokeLinecap: "round",
              transform: "rotate(-90 50 50)",
              style: { transition: "stroke-dasharray 1s linear" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "neural-timer-text", children: [
          timer,
          "s"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "neural-time-select", children: [3, 5, 8, 12].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `neural-time-btn ${studyTime === t ? "active" : ""}`,
          onClick: () => {
            setStudyTime(t);
            setTimer(t);
          },
          children: [
            t,
            "s"
          ]
        },
        t
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "neural-nodes-grid", style: { gridTemplateColumns: `repeat(${Math.min(pool.length, 3)}, 1fr)` }, children: pool.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neural-node-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "neural-node-dot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "neural-node-word", children: it.word }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "neural-node-meaning", children: it.meaning }),
        it.reading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "neural-node-reading", children: it.reading })
      ] }, i)) })
    ] });
  }
  if (phase === "recall") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neural-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neural-recall-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🧩" }),
        " KẾT NỐI LẠI CÁC KHỚP THẦN KINH"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "neural-recall-list", children: pool.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neural-recall-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "neural-recall-word", children: it.word }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "neural-recall-options", children: allMeanings.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `neural-recall-btn ${answers[i] === m ? "selected" : ""}`,
            onClick: () => setAnswers((a) => ({ ...a, [i]: m })),
            children: m
          },
          m
        )) })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "neural-submit-btn",
          onClick: checkAnswers,
          disabled: Object.keys(answers).length < pool.length,
          children: "⚡ SYNC NEURAL LINKS"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `neural-container ${networkPulse ? "pulse" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neural-result", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "neural-result-icon", children: localScore === pool.length ? "🏆" : "💪" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "neural-result-title", children: localScore === pool.length ? "FULL SYNC" : "PARTIAL SYNC" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neural-result-score", children: [
      localScore,
      "/",
      pool.length,
      " Links"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "neural-result-nodes", children: pool.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `neural-result-node ${answers[i] === it.meaning ? "linked" : "broken"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "neural-result-jp", children: it.word }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "neural-result-arrow", children: "→" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "neural-result-vi", children: [
        answers[i] || "?",
        answers[i] !== it.meaning && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "neural-result-correct", children: [
          " ✗ ",
          it.meaning
        ] })
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "neural-submit-btn", onClick: restart, children: "🔄 RE-INITIALIZE" })
  ] }) });
}
const MODES = [
  // Primary 3 — always visible as tabs
  { id: "memory", label: "Trí nhớ", icon: "🧠" },
  { id: "pattern", label: "Mẫu hình", icon: "🔮" },
  { id: "speed", label: "Tốc độ", icon: "⚡" },
  // Overflow — behind "⋯" button
  { id: "association", label: "Liên tưởng", icon: "🔗" },
  { id: "kanji-parts", label: "Bộ kanji", icon: "🔳" },
  { id: "odd-one-out", label: "Khác nhóm", icon: "🔵" },
  { id: "audio-memory", label: "Nghe-nhớ", icon: "🎵" }
];
function MemoryGrid({ items, difficulty, maxCards }) {
  const scoring = useScoreEngine();
  const gridSize = difficulty === "easy" ? 3 : difficulty === "hard" ? 6 : 4;
  const defaultTime = difficulty === "easy" ? 8 : difficulty === "hard" ? 4 : 5;
  const [sessionSeed, setSessionSeed] = reactExports.useState(0);
  const pool = reactExports.useMemo(() => {
    const valid = items.filter((it) => it.word && it.meaning);
    return [...valid].sort(() => Math.random() - 0.5).slice(0, Math.min(gridSize, maxCards, valid.length));
  }, [items, gridSize, maxCards, sessionSeed]);
  const [phase, setPhase] = reactExports.useState("study");
  const [studyTime, setStudyTime] = reactExports.useState(defaultTime);
  const [timer, setTimer] = reactExports.useState(defaultTime);
  const [answers, setAnswers] = reactExports.useState({});
  const [score, setScore] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (phase !== "study") return;
    if (timer <= 0) {
      setPhase("recall");
      return;
    }
    const tid = setTimeout(() => setTimer((t) => t - 1), 1e3);
    return () => clearTimeout(tid);
  }, [phase, timer]);
  const checkAnswers = reactExports.useCallback(() => {
    let correct = 0;
    pool.forEach((it, i) => {
      if (answers[i] === it.meaning) {
        correct++;
        scoring.recordCorrect(it);
      } else {
        scoring.recordWrong(it);
      }
    });
    setScore(correct);
    setPhase("result");
    if (correct === pool.length) playSFX("correct");
    else playSFX("wrong");
  }, [pool, answers]);
  const allMeanings = reactExports.useMemo(() => {
    const unique = [...new Set(pool.map((it) => it.meaning))];
    return unique.sort(() => Math.random() - 0.5);
  }, [pool]);
  const restart = () => {
    setSessionSeed((s) => s + 1);
    setPhase("study");
    setTimer(studyTime);
    setAnswers({});
    setScore(0);
  };
  if (pool.length < 2) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu." })
  ] });
  if (phase === "study") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mg-study", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mg-time-setting", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mg-time-label", children: "⏱️ Thời gian nhớ:" }),
        [3, 5, 8, 12].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: `n4-btn n4-btn-sm ${studyTime === t ? "n4-btn-primary" : "n4-btn-ghost"}`,
            onClick: () => {
              setStudyTime(t);
              setTimer(t);
            },
            children: [
              t,
              "s"
            ]
          },
          t
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mg-countdown", children: [
        "⏱️ Ghi nhớ trong ",
        timer,
        " giây!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mg-grid", style: { gridTemplateColumns: `repeat(${Math.min(pool.length, 3)}, 1fr)` }, children: pool.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-mg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mg-word", children: it.word }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mg-meaning", children: it.meaning })
      ] }, i)) })
    ] });
  }
  if (phase === "recall") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mg-recall", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mg-recall-title", children: "🧩 Ghép lại nghĩa cho mỗi từ:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mg-recall-list", children: pool.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mg-recall-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mg-recall-word", children: it.word }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mg-recall-options", children: allMeanings.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `n4-btn n4-btn-sm ${answers[i] === m ? "n4-btn-primary" : "n4-btn-ghost"}`,
            onClick: () => setAnswers((a) => ({ ...a, [i]: m })),
            children: m
          },
          m
        )) })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-btn n4-btn-primary",
          style: { marginTop: 16 },
          onClick: checkAnswers,
          disabled: Object.keys(answers).length < pool.length,
          children: "✅ Kiểm tra"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-icon", children: score === pool.length ? "🏆" : "💪" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-title", children: [
      score,
      "/",
      pool.length,
      " đúng"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mg-result-list", children: pool.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mg-result-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mg-result-jp", children: it.word }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mg-result-arrow", children: "→" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: answers[i] === it.meaning ? "var(--n4-success)" : "var(--n4-error)" }, children: [
        answers[i] || "(trống)",
        " ",
        answers[i] !== it.meaning && `✗ ${it.meaning}`
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", style: { marginTop: 8 }, onClick: restart, children: "🔄 Chơi lại" })
  ] });
}
const KANJI_RADICALS = {
  "水": { radical: "水 (みず)", meaning: "nước", others: ["火 (ひ)", "木 (き)", "土 (つち)"] },
  "火": { radical: "火 (ひ)", meaning: "lửa", others: ["水 (みず)", "土 (つち)", "金 (かね)"] },
  "木": { radical: "木 (き)", meaning: "cây gỗ", others: ["山 (やま)", "土 (つち)", "石 (いし)"] },
  "山": { radical: "山 (やま)", meaning: "núi", others: ["川 (かわ)", "田 (た)", "木 (き)"] },
  "川": { radical: "川 (かわ)", meaning: "sông", others: ["山 (やま)", "水 (みず)", "雨 (あめ)"] },
  "日": { radical: "日 (ひ)", meaning: "mặt trời / ngày", others: ["月 (つき)", "星 (ほし)", "空 (そら)"] },
  "月": { radical: "月 (つき)", meaning: "mặt trăng / tháng", others: ["日 (ひ)", "星 (ほし)", "夜 (よる)"] },
  "口": { radical: "口 (くち)", meaning: "miệng", others: ["目 (め)", "耳 (みみ)", "鼻 (はな)"] },
  "手": { radical: "手 (て)", meaning: "tay", others: ["足 (あし)", "目 (め)", "口 (くち)"] },
  "目": { radical: "目 (め)", meaning: "mắt", others: ["耳 (みみ)", "口 (くち)", "鼻 (はな)"] },
  "人": { radical: "人 (ひと)", meaning: "người", others: ["子 (こ)", "女 (おんな)", "男 (おとこ)"] },
  "女": { radical: "女 (おんな)", meaning: "phụ nữ", others: ["男 (おとこ)", "人 (ひと)", "子 (こ)"] },
  "子": { radical: "子 (こ)", meaning: "trẻ em", others: ["女 (おんな)", "人 (ひと)", "男 (おとこ)"] },
  "大": { radical: "大 (おお)", meaning: "lớn", others: ["小 (ちい)", "中 (なか)", "高 (たか)"] },
  "小": { radical: "小 (ちい)", meaning: "nhỏ", others: ["大 (おお)", "中 (なか)", "低 (ひく)"] }
};
function KanjiPartsGame({ items, maxRounds }) {
  const scoring = useScoreEngine();
  const [sessionSeed, setSessionSeed] = reactExports.useState(0);
  const pool = reactExports.useMemo(() => {
    const fromKanji = items.filter((it) => it.word && KANJI_RADICALS[it.word[0]]).map((it) => ({ kanji: it.word[0], meaning: it.meaning }));
    const fromMap = Object.entries(KANJI_RADICALS).map(([k, v]) => ({
      kanji: k,
      meaning: v.meaning
    }));
    const seen = /* @__PURE__ */ new Set();
    const all = [...fromKanji, ...fromMap].filter((e) => {
      if (seen.has(e.kanji)) return false;
      seen.add(e.kanji);
      return true;
    });
    return [...all].sort(() => Math.random() - 0.5).slice(0, maxRounds);
  }, [maxRounds, sessionSeed, !!items.length]);
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [score, setScore] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [finished, setFinished] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  reactExports.useEffect(() => () => clearTimeout(timerRef.current), []);
  const current = pool[qIdx];
  const radInfo = current ? KANJI_RADICALS[current.kanji] : null;
  const options = reactExports.useMemo(() => {
    if (!radInfo) return [];
    return [...radInfo.others, radInfo.radical].sort(() => Math.random() - 0.5);
  }, [radInfo]);
  const answer = reactExports.useCallback((opt) => {
    if (feedback || finished) return;
    setSelected(opt);
    const isCorrect = opt === (radInfo == null ? void 0 : radInfo.radical);
    if (isCorrect) {
      playSFX("correct");
      setScore((s) => s + 1);
      setFeedback("correct");
      scoring.recordCorrect(current);
    } else {
      playSFX("wrong");
      setFeedback("wrong");
      scoring.recordWrong(current);
    }
    timerRef.current = setTimeout(() => {
      setFeedback(null);
      setSelected(null);
      if (qIdx + 1 >= pool.length) setFinished(true);
      else setQIdx((i) => i + 1);
    }, 1400);
  }, [feedback, finished, radInfo, qIdx, pool.length, current, scoring]);
  if (pool.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu kanji." })
  ] });
  const restart = () => {
    setSessionSeed((s) => s + 1);
    setQIdx(0);
    setScore(0);
    setSelected(null);
    setFeedback(null);
    setFinished(false);
  };
  if (finished) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-icon", children: "🔶" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-title", children: [
      "Bộ kanji — ",
      score,
      "/",
      pool.length,
      " đúng"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", style: { marginTop: 16 }, onClick: restart, children: "🔄 Chơi lại" })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-game-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-round-info", children: [
      "Câu ",
      qIdx + 1,
      "/",
      pool.length,
      " · Điểm: ",
      score
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "3.5rem", fontWeight: 700, margin: "12px 0" }, children: current.kanji }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-muted)", marginBottom: 16 }, children: "Bộ thủ (radical) của kanji này là gì?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-options-grid", children: options.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `n4-option-btn${feedback && opt === (radInfo == null ? void 0 : radInfo.radical) ? " correct" : feedback && opt === selected && opt !== (radInfo == null ? void 0 : radInfo.radical) ? " wrong" : ""}`,
        onClick: () => answer(opt),
        disabled: !!feedback,
        children: opt
      },
      i
    )) }),
    feedback === "wrong" && radInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 12, color: "var(--n4-error)" }, children: [
      "❌ Đáp án: ",
      radInfo.radical,
      " — ",
      radInfo.meaning
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { marginTop: 12 }, onClick: () => speakJP(current.kanji), children: "🔊 Nghe" })
  ] });
}
const ODD_GROUPS = [
  { label: "Màu sắc", words: ["あか", "あお", "しろ", "くろ", "きいろ", "みどり", "むらさき", "ちゃいろ"] },
  { label: "Con số", words: ["いち", "に", "さん", "し", "ご", "ろく", "なな", "はち", "きゅう", "じゅう"] },
  { label: "Thứ trong tuần", words: ["にちようび", "げつようび", "かようび", "すいようび", "もくようび", "きんようび", "どようび"] },
  { label: "Động từ chuyển động", words: ["いく", "くる", "かえる", "はしる", "あるく", "のる", "とまる"] },
  { label: "Thức ăn", words: ["ごはん", "パン", "さかな", "にく", "やさい", "たまご", "くだもの"] },
  { label: "Tính từ về kích thước", words: ["おおきい", "ちいさい", "なが", "みじか", "たか", "ひく", "ふと"] },
  { label: "Nơi chốn", words: ["がっこう", "びょういん", "ぎんこう", "えき", "こうえん", "としょかん", "みせ"] }
];
function OddOneOutGame({ items, maxRounds }) {
  useScoreEngine();
  const [sessionSeed, setSessionSeed] = reactExports.useState(0);
  const rounds = reactExports.useMemo(() => {
    const result = [];
    const shuffledGroups = [...ODD_GROUPS].sort(() => Math.random() - 0.5);
    for (let i = 0; i < shuffledGroups.length && result.length < maxRounds; i++) {
      const group = shuffledGroups[i];
      if (group.words.length < 3) continue;
      const inGroup = [...group.words].sort(() => Math.random() - 0.5).slice(0, 3);
      const otherGroups = shuffledGroups.filter((_, j) => j !== i);
      if (otherGroups.length === 0) continue;
      const intruderGroup = otherGroups[Math.floor(Math.random() * otherGroups.length)];
      const intruder = intruderGroup.words[Math.floor(Math.random() * intruderGroup.words.length)];
      const options = [...inGroup, intruder].sort(() => Math.random() - 0.5);
      result.push({ options, intruder, groupLabel: group.label, intruderLabel: intruderGroup.label });
    }
    return result.slice(0, maxRounds);
  }, [maxRounds, sessionSeed]);
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [score, setScore] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [finished, setFinished] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  reactExports.useEffect(() => () => clearTimeout(timerRef.current), []);
  const current = rounds[qIdx];
  const answer = reactExports.useCallback((opt) => {
    if (feedback || finished || !current) return;
    setSelected(opt);
    const isCorrect = opt === current.intruder;
    if (isCorrect) {
      playSFX("correct");
      setScore((s) => s + 1);
      setFeedback("correct");
    } else {
      playSFX("wrong");
      setFeedback("wrong");
    }
    timerRef.current = setTimeout(() => {
      setFeedback(null);
      setSelected(null);
      if (qIdx + 1 >= rounds.length) setFinished(true);
      else setQIdx((i) => i + 1);
    }, 1500);
  }, [feedback, finished, current, qIdx, rounds.length]);
  if (rounds.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu." })
  ] });
  const restart = () => {
    setSessionSeed((s) => s + 1);
    setQIdx(0);
    setScore(0);
    setSelected(null);
    setFeedback(null);
    setFinished(false);
  };
  if (finished) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-icon", children: "🔵" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-title", children: [
      "Khác nhóm — ",
      score,
      "/",
      rounds.length,
      " đúng"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", style: { marginTop: 16 }, onClick: restart, children: "🔄 Chơi lại" })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-game-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-round-info", children: [
      "Câu ",
      qIdx + 1,
      "/",
      rounds.length,
      " · Điểm: ",
      score
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "1rem", color: "var(--n4-text-muted)", marginBottom: 16, textAlign: "center" }, children: [
      "🔵 Từ nào ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "KHÔNG" }),
      " thuộc cùng nhóm với các từ còn lại?"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-options-grid", children: current.options.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `n4-option-btn${feedback && opt === current.intruder ? " correct" : feedback && opt === selected && opt !== current.intruder ? " wrong" : ""}`,
        onClick: () => answer(opt),
        disabled: !!feedback,
        children: opt
      },
      i
    )) }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 12, fontSize: "0.9rem", color: feedback === "correct" ? "var(--n4-success)" : "var(--n4-error)" }, children: feedback === "correct" ? `✅ Đúng! "${current.intruder}" thuộc nhóm "${current.intruderLabel}"` : `❌ Sai! "${current.intruder}" là từ lạ — thuộc nhóm "${current.intruderLabel}"` })
  ] });
}
function AudioMemoryGame({ items, maxRounds }) {
  const scoring = useScoreEngine();
  const [sessionSeed, setSessionSeed] = reactExports.useState(0);
  const pool = reactExports.useMemo(() => {
    const valid = items.filter((it) => it.word && it.meaning);
    return [...valid].sort(() => Math.random() - 0.5).slice(0, maxRounds);
  }, [maxRounds, sessionSeed, !!items.length]);
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [score, setScore] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [finished, setFinished] = reactExports.useState(false);
  const [hasPlayed, setHasPlayed] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  reactExports.useEffect(() => () => {
    clearTimeout(timerRef.current);
    stopSpeech();
  }, []);
  reactExports.useEffect(() => {
    setHasPlayed(false);
    if (pool[qIdx]) {
      const delay = setTimeout(() => {
        speakJP(pool[qIdx].word);
        setHasPlayed(true);
      }, 400);
      return () => clearTimeout(delay);
    }
  }, [qIdx, pool]);
  const current = pool[qIdx];
  const options = reactExports.useMemo(() => {
    if (!current) return [];
    const others = pool.filter((_, i) => i !== qIdx).sort(() => Math.random() - 0.5).slice(0, 3).map((it) => it.meaning);
    return [...others, current.meaning].sort(() => Math.random() - 0.5);
  }, [current, pool, qIdx]);
  const answer = reactExports.useCallback((opt) => {
    if (feedback || finished || !current) return;
    setSelected(opt);
    const isCorrect = opt === current.meaning;
    if (isCorrect) {
      playSFX("correct");
      setScore((s) => s + 1);
      setFeedback("correct");
      scoring.recordCorrect(current);
    } else {
      playSFX("wrong");
      setFeedback("wrong");
      scoring.recordWrong(current);
    }
    timerRef.current = setTimeout(() => {
      setFeedback(null);
      setSelected(null);
      if (qIdx + 1 >= pool.length) setFinished(true);
      else setQIdx((i) => i + 1);
    }, 1500);
  }, [feedback, finished, current, qIdx, pool.length, scoring]);
  if (pool.length < 4) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cần ít nhất 4 mục." })
  ] });
  const restart = () => {
    setSessionSeed((s) => s + 1);
    setQIdx(0);
    setScore(0);
    setSelected(null);
    setFeedback(null);
    setFinished(false);
    setHasPlayed(false);
  };
  if (finished) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-icon", children: "🎵" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-title", children: [
      "Nghe-nhớ — ",
      score,
      "/",
      pool.length,
      " đúng"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", style: { marginTop: 16 }, onClick: restart, children: "🔄 Chơi lại" })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-game-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-round-info", children: [
      "Câu ",
      qIdx + 1,
      "/",
      pool.length,
      " · Điểm: ",
      score
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        style: {
          fontSize: "4rem",
          margin: "16px 0",
          cursor: "pointer",
          userSelect: "none",
          filter: hasPlayed ? "none" : "grayscale(1)",
          border: 0,
          background: "transparent"
        },
        onClick: () => {
          speakJP(current.word);
          setHasPlayed(true);
        },
        title: "Nhấn để nghe lại",
        children: "🎵"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-muted)", marginBottom: 8, fontSize: "0.9rem" }, children: hasPlayed ? "Nhấn 🎵 để nghe lại" : "Đang phát..." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600, marginBottom: 16 }, children: "Từ vừa nghe có nghĩa là gì?" }),
    feedback === "wrong" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 8, color: "var(--n4-error)", fontSize: "0.9rem" }, children: [
      "❌ Đáp án: ",
      current.meaning,
      " (",
      current.word,
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-options-grid", children: options.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `n4-option-btn${feedback && opt === current.meaning ? " correct" : feedback && opt === selected && opt !== current.meaning ? " wrong" : ""}`,
        onClick: () => answer(opt),
        disabled: !!feedback,
        children: opt
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-ghost n4-btn-sm",
        style: { marginTop: 12 },
        onClick: () => {
          speakJP(current.word);
          setHasPlayed(true);
        },
        children: "🔊 Nghe lại"
      }
    )
  ] });
}
function MindTricks({ mode = "memory" }) {
  const [section, setSection] = reactExports.useState("all");
  const [difficulty, setDifficulty] = reactExports.useState("normal");
  const [itemCount, setItemCount] = reactExports.useState(10);
  const vocabItems = useVocabItems(section);
  const kanjiItems = useKanjiItems(section);
  const sections = useSectionList("vocab");
  reactExports.useEffect(() => {
    const unsub = onStopAll(() => stopSpeech());
    return () => {
      unsub();
      stopSpeech();
    };
  }, []);
  const vocabAll = useVocabItems("all");
  const kanjiAll = useKanjiItems("all");
  const allItems = reactExports.useMemo(() => {
    const fromSection = [
      ...vocabItems,
      ...kanjiItems.filter((k) => k == null ? void 0 : k.kanji).map((k) => ({ word: k.kanji, reading: [k.kun, k.on].filter(Boolean).join(" / ") || "", meaning: k.meaning || k.title || "" }))
    ].filter((it) => it.word && it.meaning);
    if (fromSection.length >= 4) return fromSection;
    return [
      ...vocabAll,
      ...kanjiAll.filter((k) => k == null ? void 0 : k.kanji).map((k) => ({ word: k.kanji, reading: [k.kun, k.on].filter(Boolean).join(" / ") || "", meaning: k.meaning || k.title || "" }))
    ].filter((it) => it.word && it.meaning);
  }, [vocabItems, kanjiItems, vocabAll, kanjiAll]);
  const maxQ = difficulty === "easy" ? Math.min(5, itemCount) : difficulty === "hard" ? Math.min(20, itemCount) : itemCount;
  const renderMode = () => {
    if (allItems.length < 4) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu. Hãy chọn phần khác." })
      ] });
    }
    switch (mode) {
      case "memory":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(NeuralLinkMode, { items: allItems, difficulty });
      case "pattern":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items: allItems,
            getQuestion: (it) => it.meaning,
            getAnswer: (it) => it.word,
            getQuestionDisplay: (it) => `🔮 ${it.meaning}`,
            getCorrectInfo: (it) => ({ reading: it.reading || "", meaning: it.meaning }),
            getSrsKey: vocabAccessors.getKey,
            getSection: vocabAccessors.getSection,
            optionCount: 4,
            maxQuestions: maxQ,
            speakOnShow: false,
            difficulty,
            srsAware: true
          }
        );
      case "speed":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          MatchMode,
          {
            items: allItems,
            getWord: (it) => it.word,
            getMeaning: (it) => it.meaning,
            getSrsKey: vocabAccessors.getKey,
            pairCount: Math.min(6, Math.floor(allItems.length / 2)),
            srsAware: true
          }
        );
      case "association":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items: allItems,
            getQuestion: (it) => it.word,
            getAnswer: (it) => it.meaning,
            getQuestionDisplay: (it) => `🔗 ${it.word}`,
            getCorrectInfo: (it) => ({ reading: it.reading || "", meaning: it.meaning }),
            getSrsKey: vocabAccessors.getKey,
            getSection: vocabAccessors.getSection,
            getAltAnswers: vocabAccessors.getAltAnswers,
            optionCount: 4,
            maxQuestions: maxQ,
            speakOnShow: true,
            difficulty,
            srsAware: true
          }
        );
      case "kanji-parts":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(KanjiPartsGame, { items: allItems, maxRounds: maxQ });
      case "odd-one-out":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(OddOneOutGame, { items: allItems, maxRounds: maxQ });
      case "audio-memory":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AudioMemoryGame, { items: allItems, maxRounds: maxQ });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(MemoryGrid, { items: allItems, difficulty, maxCards: maxQ });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerContext.Provider, { value: "mind-tricks", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    GameShell,
    {
      trainerId: "mind-tricks",
      mode,
      icon: "🧠",
      title: "Thử thách trí não",
      color: "var(--n4-cat-mind)",
      hearts: 3,
      rhythm: { warmup: 2, bossAt: "mid", bossCount: 1, cooldown: 1, totalItems: itemCount },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrainerTopBar,
          {
            trainerId: "mind-tricks",
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
  MindTricks as default
};
