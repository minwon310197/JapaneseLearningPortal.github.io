import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-9qsLJC8Z.js";
import { T as TrainerContext, u as useScoreEngine } from "./useScoreEngine-Cjc3MMN3.js";
import { F as FlashcardMode } from "./FlashcardMode-DUBILJcl.js";
import { Q as QuizMode, v as vocabAccessors, g as grammarAccessors } from "./QuizMode-CK8dFQ5n.js";
import { J as useDataStore, as as speakJP, ce as playSFX } from "./feature-3d-ClP3ARU5.js";
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
const MODES = [
  // Primary 3 — always visible as tabs
  { id: "lesson-picker", label: "Chọn bài", icon: "📚" },
  { id: "vocab", label: "Từ vựng", icon: "📝" },
  { id: "grammar", label: "Ngữ pháp", icon: "📖" },
  // Overflow — behind "⋯" button
  { id: "quiz", label: "Kiểm tra", icon: "❓" },
  { id: "combined-quiz", label: "Tổng hợp", icon: "🎯" }
];
function flattenMinna(minnaData) {
  if (!minnaData || typeof minnaData !== "object") return [];
  const items = [];
  for (const [num, data] of Object.entries(minnaData)) {
    const lessonNum = parseInt(num, 10);
    if (Number.isNaN(lessonNum)) continue;
    if (data == null ? void 0 : data.vocab) data.vocab.forEach((v) => items.push({ ...v, lesson: lessonNum }));
    if (data == null ? void 0 : data.grammarItems) data.grammarItems.forEach((g) => items.push({ ...g, lesson: lessonNum }));
  }
  return items;
}
function buildMinnaLessons(minnaLessons, minnaData) {
  if (Array.isArray(minnaLessons) && minnaLessons.length > 0) return minnaLessons;
  if (!minnaData || typeof minnaData !== "object") return [];
  return Object.keys(minnaData).map(Number).filter((n) => !Number.isNaN(n)).sort((a, b) => a - b).map((n) => ({ lesson: n, l: n, title: `Bài ${n}` }));
}
function LessonPicker({ lessons, minnaItems, onSelectLesson, lessonProgress }) {
  const lessonList = reactExports.useMemo(() => {
    if (lessons.length > 0) return lessons;
    if (minnaItems.length === 0) return [];
    const byLesson = {};
    minnaItems.forEach((item) => {
      const num = item.lesson || item.bai || 0;
      if (num) {
        if (!byLesson[num]) byLesson[num] = { lesson: num, title: `Bài ${num}`, items: 0 };
        byLesson[num].items++;
      }
    });
    return Object.values(byLesson).sort((a, b) => a.lesson - b.lesson);
  }, [lessons, minnaItems]);
  if (lessons.length === 0 && minnaItems.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chưa có dữ liệu Minna no Nihongo." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ml-count", children: [
      "📚 Minna no Nihongo — ",
      lessonList.length,
      " bài học"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ml-grid", children: lessonList.map((l, i) => {
      const lNum = l.lesson || i + 1;
      const prog = lessonProgress == null ? void 0 : lessonProgress[lNum];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "n4-card n4-btn n4-ml-card",
          onClick: () => onSelectLesson(lNum),
          style: { position: "relative" },
          children: [
            prog && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", top: 4, right: 6, fontSize: "0.7rem", color: prog.pct >= 80 ? "var(--n4-success)" : "var(--n4-warning, orange)" }, children: prog.pct >= 80 ? "✅" : `${prog.pct}%` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ml-card-num", children: lNum }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ml-card-title", children: l.title || `Bài ${lNum}` })
          ]
        },
        lNum
      );
    }) })
  ] });
}
function CombinedQuiz({ lessonNum, vocabItems, grammarItems, onFinish }) {
  var _a;
  const scoring = useScoreEngine();
  const pool = reactExports.useMemo(() => {
    const vocabQ = vocabItems.map((it) => ({
      type: "vocab",
      question: it.word,
      answer: it.meaning,
      reading: it.reading,
      distractors: vocabItems.filter((v) => v.meaning !== it.meaning).map((v) => v.meaning)
    }));
    const grammarQ = grammarItems.map((it) => ({
      type: "grammar",
      question: it.title,
      answer: it.content || it.example || it.title,
      reading: "",
      distractors: grammarItems.filter((g) => g.title !== it.title).map((g) => g.content || g.title)
    }));
    const mixed = [...vocabQ, ...grammarQ].sort(() => Math.random() - 0.5);
    return mixed.slice(0, Math.min(20, mixed.length));
  }, [vocabItems, grammarItems]);
  const [idx, setIdx] = reactExports.useState(0);
  const [score, setScore] = reactExports.useState(0);
  const [wrong, setWrong] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [finished, setFinished] = reactExports.useState(false);
  const current = pool[idx];
  const options = reactExports.useMemo(() => {
    if (!current) return [];
    const wrongs = current.distractors.filter(Boolean).sort(() => Math.random() - 0.5).slice(0, 3);
    return [...wrongs, current.answer].sort(() => Math.random() - 0.5);
  }, [idx]);
  const correctIdx = options.indexOf(current == null ? void 0 : current.answer);
  reactExports.useEffect(() => {
    if (!current || finished) return;
    setSelected(null);
    setFeedback(null);
    if (current.type === "vocab") {
      const t = setTimeout(() => speakJP(current.question), 200);
      return () => clearTimeout(t);
    }
  }, [idx, finished]);
  const handlePick = (i) => {
    if (feedback || finished) return;
    setSelected(i);
    if (i === correctIdx) {
      setScore((s) => s + 1);
      setFeedback("correct");
      playSFX("correct");
      scoring.recordCorrect(current);
    } else {
      setWrong((w) => w + 1);
      setFeedback("wrong");
      playSFX("wrong");
      scoring.recordWrong(current);
    }
  };
  const goNext = () => {
    if (idx + 1 >= pool.length) setFinished(true);
    else setIdx((i) => i + 1);
  };
  if (pool.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cần ít nhất 4 mục để quiz tổng hợp." })
    ] });
  }
  if (finished) {
    const total = score + wrong;
    const pct = total ? Math.round(score / total * 100) : 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-emoji", children: pct >= 80 ? "🎉" : pct >= 60 ? "👍" : "💪" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "n4-result-title", children: [
        "Bài ",
        lessonNum,
        " — Quiz tổng hợp"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Đúng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value success", children: score })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Sai" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value error", children: wrong })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Chính xác" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stat-value", children: [
            pct,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "0.5rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: () => {
          setIdx(0);
          setScore(0);
          setWrong(0);
          setFeedback(null);
          setSelected(null);
          setFinished(false);
        }, children: "🔄 Làm lại" }),
        onFinish && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => onFinish(pct), children: "← Bài học" })
      ] })
    ] });
  }
  const typeLabel = current.type === "vocab" ? "📝 Từ vựng" : "📖 Ngữ pháp";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sd-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-sd-progress", children: [
        "🎯 ",
        idx + 1,
        "/",
        pool.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.75rem", color: "var(--n4-text-muted)" }, children: typeLabel }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-sd-score", children: [
        "✓ ",
        score
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { textAlign: "center", padding: "1.5rem", marginBottom: "1rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.6rem", fontWeight: "bold", marginBottom: "0.5rem" }, children: current.question }),
      current.reading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.9rem", color: "var(--n4-text-muted)" }, children: current.reading }),
      current.type === "vocab" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { marginTop: "0.5rem" }, onClick: () => speakJP(current.question), children: "🔊 Nghe" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sd-options", children: options.map((opt, i) => {
      let bg;
      if (feedback) {
        if (i === correctIdx) bg = "var(--n4-success)";
        else if (i === selected && i !== correctIdx) bg = "var(--n4-danger)";
      }
      const truncated = opt && opt.length > 60 ? opt.substring(0, 57) + "…" : opt;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-btn ${feedback && i === correctIdx ? "n4-btn-primary" : "n4-btn-neon"}`,
          style: bg ? { background: bg } : void 0,
          onClick: () => handlePick(i),
          disabled: !!feedback,
          children: truncated
        },
        i
      );
    }) }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sd-feedback", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sd-feedback-text", children: feedback === "correct" ? "✅ Chính xác!" : `❌ Sai! → ${((_a = current.answer) == null ? void 0 : _a.substring(0, 60)) || ""}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-btn-sm", onClick: goNext, children: idx + 1 < pool.length ? "Câu tiếp →" : "Xem kết quả" })
    ] })
  ] });
}
function LessonContent({ lessonNum, mode, minnaData, minnaItems, onQuizFinish }) {
  const lessonData = reactExports.useMemo(() => {
    if (minnaData == null ? void 0 : minnaData[lessonNum]) {
      const data = minnaData[lessonNum];
      const items = [];
      if (data.vocab) data.vocab.forEach((v) => items.push({ ...v, lesson: lessonNum }));
      if (data.grammarItems) data.grammarItems.forEach((g) => items.push({ ...g, lesson: lessonNum }));
      return items;
    }
    return minnaItems.filter((item) => {
      const num = item.lesson || item.bai || 0;
      return num === lessonNum;
    });
  }, [minnaData, minnaItems, lessonNum]);
  const vocabItems = reactExports.useMemo(() => {
    return lessonData.filter((it) => it.word || it.jp).map((it) => ({
      word: it.word || it.jp || "",
      reading: it.reading || it.kana || "",
      meaning: it.meaning || it.vn || it.vi || "",
      example: it.example || "",
      type: it.type || "vocab"
    })).filter((it) => it.word && it.meaning);
  }, [lessonData]);
  const grammarItems = reactExports.useMemo(() => {
    return lessonData.filter((it) => it.grammar || it.pattern || it.title).map((it) => ({
      title: it.grammar || it.pattern || it.title || "",
      content: it.explanation || it.content || "",
      example: it.example || ""
    })).filter((it) => it.title);
  }, [lessonData]);
  if (lessonData.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Không có dữ liệu cho Bài ",
        lessonNum,
        "."
      ] })
    ] });
  }
  switch (mode) {
    case "vocab":
      if (vocabItems.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📝" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Bài ",
          lessonNum,
          " không có từ vựng."
        ] })
      ] });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        FlashcardMode,
        {
          items: vocabItems,
          getFront: (it) => it.word,
          getBack: (it) => {
            const ex = it.example ? (() => {
              const si = (it.example || "").indexOf("/");
              if (si < 0) return { jp: it.example.trim(), romaji: "", vi: "" };
              const jp = it.example.slice(0, si).trim();
              const rest = it.example.slice(si + 1).trim();
              const pi = rest.indexOf("(");
              return { jp, romaji: pi > -1 ? rest.slice(0, pi).trim() : rest, vi: pi > -1 ? rest.slice(pi + 1).replace(/\)$/, "").trim() : "" };
            })() : null;
            return { reading: it.reading, meaning: it.meaning, example: ex, subtitle: it.reading };
          },
          getSubtitle: (it) => it.reading,
          getSrsKey: vocabAccessors.getKey,
          cardType: "vocab",
          maxCards: vocabItems.length,
          srsAware: true
        }
      );
    case "grammar":
      if (grammarItems.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📖" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Bài ",
          lessonNum,
          " không có ngữ pháp."
        ] })
      ] });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        FlashcardMode,
        {
          items: grammarItems,
          getFront: (it) => it.title,
          getBack: (it) => {
            const sections = [];
            if (it.content) sections.push({ icon: "📖", label: "Giải thích", content: it.content });
            if (it.example) sections.push({ icon: "💬", label: "Ví dụ", content: it.example });
            return { reading: "", meaning: it.content || "", sections };
          },
          getSrsKey: grammarAccessors.getKey,
          cardType: "grammar",
          maxCards: grammarItems.length,
          srsAware: true
        }
      );
    case "quiz":
      if (vocabItems.length < 4) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "❓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cần ít nhất 4 từ vựng để quiz." })
      ] });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        QuizMode,
        {
          items: vocabItems,
          getQuestion: (it) => it.word,
          getAnswer: (it) => it.meaning,
          getQuestionDisplay: (it) => it.word,
          getCorrectInfo: (it) => ({ reading: it.reading, meaning: it.meaning }),
          getSrsKey: vocabAccessors.getKey,
          getSection: vocabAccessors.getSection,
          getAltAnswers: vocabAccessors.getAltAnswers,
          optionCount: 4,
          maxQuestions: Math.min(15, vocabItems.length),
          speakOnShow: true,
          srsAware: true
        }
      );
    case "combined-quiz":
      if (vocabItems.length + grammarItems.length < 4) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "🎯" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cần ít nhất 4 mục để tổng hợp." })
      ] });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CombinedQuiz, { lessonNum, vocabItems, grammarItems, onFinish: onQuizFinish });
    default:
      return null;
  }
}
function MinnaLessons({ mode = "lesson-picker" }) {
  const [selectedLesson, setSelectedLesson] = reactExports.useState(null);
  const [activeMode, setActiveMode] = reactExports.useState(mode);
  const [lessonProgress, setLessonProgress] = reactExports.useState({});
  const minnaData = useDataStore((s) => s.minna);
  const minnaLessons = useDataStore((s) => s.minnaLessons);
  const minnaItems = reactExports.useMemo(() => flattenMinna(minnaData), [minnaData]);
  const lessonList = reactExports.useMemo(() => buildMinnaLessons(minnaLessons, minnaData), [minnaLessons, minnaData]);
  reactExports.useEffect(() => {
    setActiveMode(mode);
  }, [mode]);
  const handleSelectLesson = (num) => {
    setSelectedLesson(num);
    setActiveMode("vocab");
  };
  const handleQuizFinish = reactExports.useCallback((pct) => {
    if (selectedLesson != null) {
      setLessonProgress((prev) => ({
        ...prev,
        [selectedLesson]: { pct }
      }));
    }
    setActiveMode("lesson-picker");
    setSelectedLesson(null);
  }, [selectedLesson]);
  if (!selectedLesson || activeMode === "lesson-picker") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerContext.Provider, { value: "minna-lessons", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      GameShell,
      {
        trainerId: "minna-lessons",
        mode: "lesson-picker",
        icon: "📚",
        title: "Bài Minna",
        color: "var(--n4-cat-minna)",
        hearts: 3,
        bodyLayout: "hybrid",
        rhythm: { warmup: 0, bossAt: "end", bossCount: 0, cooldown: 0, totalItems: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TrainerTopBar,
            {
              trainerId: "minna-lessons",
              activeMode: "lesson-picker",
              modes: MODES
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LessonPicker, { lessons: lessonList, minnaItems, onSelectLesson: handleSelectLesson, lessonProgress })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerContext.Provider, { value: "minna-lessons", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    GameShell,
    {
      trainerId: "minna-lessons",
      mode: activeMode,
      icon: "📚",
      title: `Minna — Bài ${selectedLesson}`,
      color: "var(--n4-cat-minna)",
      hearts: 3,
      bodyLayout: "hybrid",
      rhythm: { warmup: 2, bossAt: "mid", bossCount: 1, cooldown: 1, totalItems: 15 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ml-mode-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => {
            setSelectedLesson(null);
            setActiveMode("lesson-picker");
          }, children: "← Danh sách bài" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ml-mode-group", children: ["vocab", "grammar", "quiz", "combined-quiz"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `n4-btn n4-btn-sm ${activeMode === m ? "n4-btn-primary" : "n4-btn-ghost"}`,
              onClick: () => setActiveMode(m),
              children: m === "vocab" ? "📝 Từ vựng" : m === "grammar" ? "📖 Ngữ pháp" : m === "quiz" ? "❓ Quiz" : "🎯 Tổng hợp"
            },
            m
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LessonContent,
          {
            lessonNum: selectedLesson,
            mode: activeMode,
            minnaData,
            minnaItems,
            onQuizFinish: handleQuizFinish
          }
        )
      ]
    }
  ) });
}
export {
  MODES,
  MinnaLessons as default
};
