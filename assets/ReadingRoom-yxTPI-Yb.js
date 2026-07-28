import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-9qsLJC8Z.js";
import { u as useScoreEngine, T as TrainerContext } from "./useScoreEngine-Cjc3MMN3.js";
import { Q as QuizMode, v as vocabAccessors } from "./QuizMode-CK8dFQ5n.js";
import { b as useGrammarItems, u as useVocabItems, c as useSectionList } from "./useDataHelper-BnDD_cSP.js";
import { ce as playSFX, as as speakJP } from "./feature-3d-ClP3ARU5.js";
import { u as useGameStore } from "./useGameEngine-CTBUVrIk.js";
import "./index-ZUSnnghe.js";
import "./vendor-router-BTJacUKt.js";
import "./vendor-icons-DHCyxOF-.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./empty-Bvm-mx50.js";
import "./quest-chains-CiwzmCpJ.js";
import "./PhaseRibbon-VgLgSQxn.js";
import "./useQuestionMeta-D-yYGU7U.js";
import "./QuizFeedback-BMOgeHCF.js";
function DetectiveBoardMode({ items = [] }) {
  const { score, combo, hp, addScore, takeDamage, resetCombo } = useGameStore(useShallow((s) => ({
    score: s.score,
    combo: s.combo,
    hp: s.hp,
    addScore: s.addScore,
    takeDamage: s.takeDamage,
    resetCombo: s.resetCombo
  })));
  const scoring = useScoreEngine();
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [phase, setPhase] = reactExports.useState("investigate");
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [finished, setFinished] = reactExports.useState(false);
  const [casesCleared, setCasesCleared] = reactExports.useState(0);
  const [magnifyTarget, setMagnifyTarget] = reactExports.useState(null);
  const timerRef = reactExports.useRef(null);
  const correctCount = reactExports.useRef(0);
  reactExports.useEffect(() => {
    useGameStore.setState({ hp: 100, score: 0, combo: 0, gameState: "PLAYING" });
  }, []);
  const pool = reactExports.useMemo(() => {
    const valid = items.filter((it) => it.word && it.meaning);
    return [...valid].sort(() => Math.random() - 0.5).slice(0, 15);
  }, [items]);
  const current = pool[qIdx];
  const suspects = reactExports.useMemo(() => {
    if (!current) return [];
    const others = pool.filter((_, i) => i !== qIdx).sort(() => Math.random() - 0.5).slice(0, 3).map((it) => ({ text: it.meaning, word: it.word }));
    const all = [
      { text: current.meaning, word: current.word },
      ...others
    ].sort(() => Math.random() - 0.5);
    return all;
  }, [current, pool, qIdx]);
  const handleSelect = reactExports.useCallback((suspect) => {
    if (feedback || !current) return;
    setSelected(suspect.text);
    const isCorrect = suspect.text === current.meaning;
    if (isCorrect) {
      playSFX("correct");
      addScore(200 + combo * 30);
      correctCount.current++;
      setCasesCleared((c) => c + 1);
      scoring.recordCorrect(current);
      setFeedback("correct");
    } else {
      playSFX("wrong");
      takeDamage(15);
      resetCombo();
      scoring.recordWrong(current);
      setFeedback("wrong");
    }
    timerRef.current = setTimeout(() => {
      setFeedback(null);
      setSelected(null);
      setMagnifyTarget(null);
      if (qIdx + 1 >= pool.length || hp <= 0) {
        setFinished(true);
      } else {
        setQIdx((i) => i + 1);
      }
    }, 1500);
  }, [feedback, current, combo, qIdx, pool.length, hp, addScore, takeDamage, resetCombo, scoring]);
  reactExports.useEffect(() => () => clearTimeout(timerRef.current), []);
  if (pool.length < 4) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "🕵️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cần ít nhất 4 mục để điều tra." })
    ] });
  }
  if (finished) {
    const pct = pool.length > 0 ? Math.round(correctCount.current / pool.length * 100) : 0;
    const rank = pct >= 90 ? "S" : pct >= 70 ? "A" : pct >= 50 ? "B" : "C";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detective-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detective-result-badge", children: rank }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detective-result-title", children: "KHÉP LẠI VỤ ÁN" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detective-result-subtitle", children: "Báo cáo điều tra" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detective-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detective-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "detective-stat-value", children: correctCount.current }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "detective-stat-label", children: "Phá án" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detective-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "detective-stat-value", children: pool.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "detective-stat-label", children: "Vụ án" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detective-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "detective-stat-value", children: [
            pct,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "detective-stat-label", children: "Chính xác" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detective-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "detective-stat-value", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "detective-stat-label", children: "Điểm" })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detective-board-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detective-hud", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detective-hud-score", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "detective-badge-icon", children: "🔍" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: score }),
        combo > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "detective-combo", children: [
          "x",
          combo
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detective-case-num", children: [
        "VỤ #",
        qIdx + 1,
        " / ",
        pool.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detective-hp", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detective-hp-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detective-hp-fill", style: { width: `${hp}%` } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "detective-hp-label", children: [
          hp,
          "%"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detective-evidence-board", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detective-evidence-main", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detective-pin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detective-evidence-label", children: "CHỨNG CỨ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detective-evidence-word", children: current == null ? void 0 : current.word }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detective-evidence-reading", children: (current == null ? void 0 : current.reading) || "" }),
        (current == null ? void 0 : current.example) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detective-evidence-example", children: [
          "💬 ",
          current.example.split("/")[0]
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "detective-speak-btn",
            onClick: () => speakJP(current == null ? void 0 : current.word),
            children: "🔊 Nghe"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detective-strings" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "detective-suspects", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detective-suspects-label", children: "🔎 GHÉP ĐÚNG NGHĨA" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detective-suspects-grid", children: suspects.map((s, i) => {
        let cls = "detective-suspect-card";
        if (feedback && s.text === (current == null ? void 0 : current.meaning)) cls += " correct";
        else if (feedback && s.text === selected && s.text !== (current == null ? void 0 : current.meaning)) cls += " wrong";
        if (magnifyTarget === i) cls += " magnified";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: cls,
            onClick: () => handleSelect(s),
            onMouseEnter: () => !feedback && setMagnifyTarget(i),
            onMouseLeave: () => setMagnifyTarget(null),
            disabled: !!feedback,
            style: { "--card-rotate": `${(Math.random() * 6 - 3).toFixed(1)}deg` },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detective-suspect-pin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detective-suspect-text", children: s.text })
            ]
          },
          i
        );
      }) })
    ] }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `detective-feedback ${feedback}`, children: feedback === "correct" ? "✅ CASE SOLVED! Evidence matched." : `❌ WRONG LEAD — Correct: ${current.meaning}` })
  ] });
}
const MODES = [
  { id: "passages", label: "Trinh thám", icon: "🕵️" },
  { id: "sentences", label: "Đọc câu", icon: "📝" },
  { id: "context", label: "Ngữ cảnh", icon: "🔍" }
];
function ReadingRoom({ mode = "passages" }) {
  const [section, setSection] = reactExports.useState("all");
  const [difficulty, setDifficulty] = reactExports.useState("normal");
  const [itemCount, setItemCount] = reactExports.useState(10);
  useGrammarItems(section);
  const vocabItems = useVocabItems(section);
  const sections = useSectionList("grammar");
  const maxQ = difficulty === "easy" ? 5 : difficulty === "hard" ? 20 : itemCount;
  const sentenceItems = reactExports.useMemo(() => {
    return vocabItems.filter((it) => it.example && typeof it.example === "string" && it.example.length > 5).map((it) => {
      var _a;
      const parts = (it.example || "").split("/");
      const rawTranslation = (parts[1] || "").trim();
      const translation = rawTranslation.replace(/\([^)]*\)\s*/g, "").trim() || it.meaning;
      return {
        ...it,
        sentence: ((_a = parts[0]) == null ? void 0 : _a.trim()) || it.example,
        translation
      };
    });
  }, [vocabItems]);
  const renderMode = () => {
    switch (mode) {
      case "passages":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(DetectiveBoardMode, { items: sentenceItems });
      case "sentences":
        if (sentenceItems.length < 4) {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ câu ví dụ. Hãy chọn phần khác." })
          ] });
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items: sentenceItems,
            getQuestion: (it) => it.sentence,
            getAnswer: (it) => it.meaning,
            getQuestionDisplay: (it) => it.sentence,
            getCorrectInfo: (it) => ({
              reading: it.reading || "",
              meaning: it.meaning
            }),
            getSrsKey: vocabAccessors.getKey,
            getSection: vocabAccessors.getSection,
            optionCount: 4,
            maxQuestions: maxQ,
            speakOnShow: true,
            difficulty,
            srsAware: true
          }
        );
      case "context":
        if (sentenceItems.length < 4) {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ câu ví dụ. Hãy chọn phần khác." })
          ] });
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items: sentenceItems,
            getQuestion: (it) => it.meaning,
            getAnswer: (it) => it.word,
            getQuestionDisplay: (it) => `🔍 ${it.meaning}`,
            getCorrectInfo: (it) => ({
              reading: it.reading || "",
              meaning: it.meaning
            }),
            getSrsKey: vocabAccessors.getKey,
            getSection: vocabAccessors.getSection,
            optionCount: 4,
            maxQuestions: maxQ,
            speakOnShow: false,
            difficulty,
            srsAware: true
          }
        );
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(DetectiveBoardMode, { items: sentenceItems });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerContext.Provider, { value: "reading-room", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    GameShell,
    {
      trainerId: "reading-room",
      mode,
      icon: "📖",
      title: "Phòng đọc hiểu",
      color: "var(--n4-cat-reading)",
      hearts: 3,
      hazardSeconds: null,
      bodyLayout: "hybrid",
      rhythm: { warmup: 1, bossAt: "end", bossCount: 0, cooldown: 0, totalItems: itemCount },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrainerTopBar,
          {
            trainerId: "reading-room",
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
  ReadingRoom as default
};
