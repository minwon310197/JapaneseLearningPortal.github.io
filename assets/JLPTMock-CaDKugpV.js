import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-9qsLJC8Z.js";
import { u as useScoreEngine, T as TrainerContext } from "./useScoreEngine-Cjc3MMN3.js";
import "./QuizMode-CK8dFQ5n.js";
import { aT as equalsAnswerText, aS as stableAnswerKey, V as onStopAll, H as stopSpeech, as as speakJP, ce as playSFX } from "./feature-3d-ClP3ARU5.js";
import { u as useVocabItems, b as useGrammarItems } from "./useDataHelper-BnDD_cSP.js";
import { u as useGrammarGameItems } from "./useGrammarQuiz-CDFNBuyo.js";
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
  { id: "full", label: "Thi đầy đủ", icon: "📋" },
  { id: "vocab-section", label: "Từ vựng", icon: "📝" },
  { id: "grammar-section", label: "Ngữ pháp", icon: "📖" },
  { id: "reading-section", label: "Đọc hiểu", icon: "📖" },
  { id: "listening-section", label: "Nghe", icon: "🎧" }
];
const SECTION_CONFIG = {
  "full": { vocab: 15, grammar: 10, reading: 5, listening: 5, time: 30 * 60 },
  "vocab-section": { vocab: 25, grammar: 0, reading: 0, listening: 0, time: 15 * 60 },
  "grammar-section": { vocab: 0, grammar: 20, reading: 0, listening: 0, time: 15 * 60 },
  "reading-section": { vocab: 0, grammar: 0, reading: 10, listening: 0, time: 20 * 60 },
  "listening-section": { vocab: 0, grammar: 0, reading: 0, listening: 15, time: 15 * 60 }
};
function ResultScreen({ results, sections, correct, total, pct, passed, predictedStr, timer, config }) {
  const [showMistakes, setShowMistakes] = reactExports.useState(false);
  const mistakes = results.filter((r) => !r.correct);
  if (showMistakes) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setShowMistakes(false), children: "← Kết quả" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 600 }, children: [
          "❌ Câu sai (",
          mistakes.length,
          ")"
        ] })
      ] }),
      mistakes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "🎉" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có câu sai!" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "0.75rem" }, children: mistakes.map((m, i) => {
        var _a, _b;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "0.75rem 1rem", borderLeft: "4px solid var(--n4-danger)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.75rem", color: "var(--n4-text-muted)", marginBottom: "0.25rem" }, children: m.section }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1rem", marginBottom: "0.25rem" }, children: m.question }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "1rem", fontSize: "0.85rem", marginTop: "0.5rem", flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "❌ Bạn chọn: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--n4-danger)" }, children: m.userAnswer })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "✅ Đúng: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--n4-success)" }, children: m.answer })
            ] })
          ] }),
          ((_a = m.info) == null ? void 0 : _a.reading) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.8rem", color: "var(--n4-text-muted)", marginTop: "0.25rem" }, children: [
            "📖 ",
            m.info.reading
          ] }),
          ((_b = m.info) == null ? void 0 : _b.meaning) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.8rem", color: "var(--n4-text-muted)" }, children: [
            "🇻🇳 ",
            m.info.meaning
          ] }),
          m.speak && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { marginTop: "0.5rem" }, onClick: () => speakJP(m.question), children: "🔊 Nghe" })
        ] }, i);
      }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-icon", children: passed ? "🎉" : "💪" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-title", children: passed ? "ĐẬU!" : "CHƯA ĐẬU" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-result-stat-value", children: [
          correct,
          "/",
          total
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Đúng" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-result-stat-value", children: [
          pct,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Tỉ lệ" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-value", children: formatTime(config.time - timer) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Thời gian" })
      ] })
    ] }),
    predictedStr && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: {
      margin: "0.75rem auto",
      maxWidth: 320,
      padding: "0.6rem 1rem",
      textAlign: "center",
      background: passed ? "var(--n4-success-bg, rgba(0,200,100,0.12))" : "var(--n4-danger-bg, rgba(255,80,80,0.12))",
      border: `1px solid ${passed ? "var(--n4-success)" : "var(--n4-danger)"}`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8rem", color: "var(--n4-text-muted)", marginBottom: "0.2rem" }, children: "📊 Điểm dự đoán JLPT N4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.5rem", fontWeight: "bold" }, children: predictedStr }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.75rem", color: "var(--n4-text-muted)", marginTop: "0.2rem" }, children: "Cần 90/180 để đậu" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mock-breakdown", children: Object.entries(sections).map(([sec, data]) => {
      const secPct = data.total > 0 ? Math.round(data.correct / data.total * 100) : 0;
      const ok = secPct >= 60;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mock-breakdown-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: sec }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 80, height: 6, background: "var(--n4-surface)", borderRadius: 3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: `${secPct}%`, height: "100%", background: ok ? "var(--n4-success)" : "var(--n4-danger)", borderRadius: 3 } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: ok ? "var(--n4-success)" : "var(--n4-danger)", minWidth: 50 }, children: [
            data.correct,
            "/",
            data.total,
            " (",
            secPct,
            "%)"
          ] })
        ] })
      ] }, sec);
    }) }),
    mistakes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-ghost", style: { marginTop: "0.5rem", width: "100%" }, onClick: () => setShowMistakes(true), children: [
      "📋 Xem ",
      mistakes.length,
      " câu sai"
    ] })
  ] });
}
function formatTime(s) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
function MockTest({ vocabItems, grammarItems, grammarGameItems, mode, scoring, onTimerChange }) {
  var _a;
  const config = SECTION_CONFIG[mode] || SECTION_CONFIG.full;
  const questions = reactExports.useMemo(() => {
    var _a2, _b;
    const qs = [];
    const getVocabDistractors = (pool, item, count = 3) => {
      const isMasu = item.word.endsWith("ます");
      const isIAdj = item.word.endsWith("い") && item.word.length > 1;
      let possible = pool.filter((v) => v.word !== item.word && !equalsAnswerText(v.meaning, item.meaning));
      let tier1 = possible.filter((v) => v.word.length === item.word.length && (isMasu && v.word.endsWith("ます") || isIAdj && v.word.endsWith("い") || !isMasu && !isIAdj));
      let tier2 = possible.filter((v) => isMasu && v.word.endsWith("ます") || isIAdj && v.word.endsWith("い"));
      let candidates = tier1.length >= count ? tier1 : tier2.length >= count ? tier2 : possible;
      const wrongByKey = /* @__PURE__ */ new Map();
      candidates.sort(() => Math.random() - 0.5).forEach((v) => {
        const key = stableAnswerKey(v.meaning);
        if (!wrongByKey.has(key)) wrongByKey.set(key, v.meaning);
      });
      let wrongs = [...wrongByKey.values()];
      if (wrongs.length < count) {
        possible.sort(() => Math.random() - 0.5).forEach((v) => {
          const key = stableAnswerKey(v.meaning);
          if (!wrongByKey.has(key)) wrongByKey.set(key, v.meaning);
        });
        wrongs = [...wrongByKey.values()];
      }
      return wrongs.slice(0, count);
    };
    const vPool = [...vocabItems].filter((it) => it.word && it.meaning).sort(() => Math.random() - 0.5);
    const vCount = Math.min(config.vocab, vPool.length);
    for (let i = 0; i < vCount; i++) {
      const it = vPool[i];
      const wrongs = getVocabDistractors(vPool, it, 3);
      qs.push({
        section: "文字・語彙",
        question: it.word,
        answer: it.meaning,
        options: [...wrongs, it.meaning].sort(() => Math.random() - 0.5),
        info: { reading: it.reading || "", meaning: it.meaning },
        speak: true
      });
    }
    const gGamePool = [...grammarGameItems].filter((it) => it.sentence && it.title).sort(() => Math.random() - 0.5);
    if (gGamePool.length >= 4) {
      for (let i = 0; i < Math.min(config.grammar, gGamePool.length); i++) {
        const it = gGamePool[i];
        const wrongByKey = /* @__PURE__ */ new Map();
        let possibleG = gGamePool.filter((g) => !equalsAnswerText(g.title, it.title));
        possibleG.sort(() => Math.random() - 0.5).forEach((g) => {
          const key = stableAnswerKey(g.title);
          if (!wrongByKey.has(key)) wrongByKey.set(key, g.title);
        });
        const wrongs = [...wrongByKey.values()].slice(0, 3);
        qs.push({
          section: "文法",
          question: it.sentence,
          answer: it.title,
          options: [...wrongs, it.title].sort(() => Math.random() - 0.5),
          info: { reading: it.vi || "", meaning: it.explanation || it.purpose || "" },
          speak: true
        });
      }
    } else {
      const gPool = [...grammarItems].filter((it) => it.title && it.content).sort(() => Math.random() - 0.5);
      for (let i = 0; i < Math.min(config.grammar, gPool.length); i++) {
        const it = gPool[i];
        const c = it.content || "";
        const expMatch = c.match(/\*\*(?:Giải thích|Mục đích sử dụng|Cấu trúc)[:：]\*\*\s*(.+)/i);
        const explanation = expMatch ? expMatch[1].replace(/\*\*/g, "").trim().substring(0, 80) : ((_a2 = c.split("\n").filter((l) => l.trim() && !l.startsWith("#") && !l.startsWith("|") && !l.includes("📗") && !l.startsWith("---"))[0]) == null ? void 0 : _a2.trim().substring(0, 80)) || "";
        const wrongByKey = /* @__PURE__ */ new Map();
        gPool.filter((g) => !equalsAnswerText(g.title, it.title)).forEach((g) => {
          const key = stableAnswerKey(g.title);
          if (!wrongByKey.has(key)) wrongByKey.set(key, g.title);
        });
        const wrongs = [...wrongByKey.values()].sort(() => Math.random() - 0.5).slice(0, 3);
        qs.push({
          section: "文法",
          question: explanation || it.title,
          answer: it.title,
          options: [...wrongs, it.title].sort(() => Math.random() - 0.5),
          info: { reading: "", meaning: explanation },
          speak: false
        });
      }
    }
    const rPool = vocabItems.filter((it) => it.example && it.exMeaning).sort(() => Math.random() - 0.5);
    for (let i = 0; i < Math.min(config.reading, rPool.length); i++) {
      const it = rPool[i];
      const sentence = ((_b = it.example.split("/")[0]) == null ? void 0 : _b.trim()) || it.example;
      const wrongByKey = /* @__PURE__ */ new Map();
      let possibleR = rPool.filter((v) => v !== it && !equalsAnswerText(v.exMeaning, it.exMeaning));
      possibleR.sort(() => Math.random() - 0.5).forEach((v) => {
        const key = stableAnswerKey(v.exMeaning);
        if (!wrongByKey.has(key)) wrongByKey.set(key, v.exMeaning);
      });
      const wrongs = [...wrongByKey.values()].slice(0, 3);
      qs.push({
        section: "読解",
        question: sentence,
        answer: it.exMeaning,
        options: [...wrongs, it.exMeaning].sort(() => Math.random() - 0.5),
        info: { reading: it.exMeaning, meaning: "" },
        speak: false
      });
    }
    const lPool = [...vocabItems].filter((it) => it.word && it.meaning).sort(() => Math.random() - 0.5);
    for (let i = 0; i < Math.min(config.listening, lPool.length); i++) {
      const it = lPool[i];
      const wrongs = getVocabDistractors(lPool, it, 3);
      qs.push({
        section: "聴解",
        question: it.word,
        answer: it.meaning,
        options: [...wrongs, it.meaning].sort(() => Math.random() - 0.5),
        info: { reading: it.reading || "", meaning: it.meaning },
        speak: true,
        hideQuestion: true
      });
    }
    return qs;
  }, [config, !!vocabItems.length, !!grammarItems.length, !!grammarGameItems.length]);
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [timer, setTimer] = reactExports.useState(config.time);
  const [results, setResults] = reactExports.useState([]);
  const finished = qIdx >= questions.length || timer <= 0;
  const current = questions[qIdx];
  const timerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (finished) return;
    timerRef.current = setInterval(() => setTimer((t) => Math.max(0, t - 1)), 1e3);
    return () => clearInterval(timerRef.current);
  }, [finished]);
  reactExports.useEffect(() => {
    onTimerChange == null ? void 0 : onTimerChange(timer);
  }, [timer, onTimerChange]);
  reactExports.useEffect(() => {
    const unsub = onStopAll(() => {
    });
    return () => {
      unsub();
      stopSpeech();
      clearInterval(timerRef.current);
    };
  }, []);
  reactExports.useEffect(() => {
    if (!(current == null ? void 0 : current.speak) || !(current == null ? void 0 : current.question)) return () => stopSpeech();
    const speakTimer = setTimeout(() => {
      speakJP(current.question);
    }, 0);
    return () => {
      clearTimeout(speakTimer);
      stopSpeech();
    };
  }, [current == null ? void 0 : current.question, current == null ? void 0 : current.speak]);
  const answer = reactExports.useCallback((opt) => {
    if (feedback || finished) return;
    setSelected(opt);
    const correct = equalsAnswerText(opt, current.answer);
    setFeedback(correct ? "correct" : "wrong");
    if (correct) {
      playSFX("correct");
      scoring.recordCorrect(current);
    } else {
      playSFX("wrong");
      scoring.recordWrong(current);
    }
    setResults((r) => [...r, { ...current, userAnswer: opt, correct }]);
  }, [feedback, finished, current]);
  const nextQuestion = reactExports.useCallback(() => {
    if (!feedback) return;
    setFeedback(null);
    setSelected(null);
    setQIdx((i) => i + 1);
  }, [feedback]);
  if (questions.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu để thi thử." })
  ] });
  if (finished) {
    const total = results.length;
    const correct = results.filter((r) => r.correct).length;
    const pct = total > 0 ? Math.round(correct / total * 100) : 0;
    const passed = pct >= 60;
    const sections = {};
    results.forEach((r) => {
      if (!sections[r.section]) sections[r.section] = { total: 0, correct: 0 };
      sections[r.section].total++;
      if (r.correct) sections[r.section].correct++;
    });
    const sectionNames = ["文字・語彙", "文法", "読解", "聴解"];
    const sectionWeights = { "文字・語彙": 60, "文法": 60, "読解": 60, "聴解": 60 };
    let predictedScore = 0;
    let maxPossible = 0;
    sectionNames.forEach((sec) => {
      const w = sectionWeights[sec] || 0;
      const s = sections[sec];
      if (s && s.total > 0) {
        predictedScore += Math.round(s.correct / s.total * w);
        maxPossible += w;
      }
    });
    const predictedPct = maxPossible > 0 ? Math.round(predictedScore / maxPossible * 180) : null;
    const predictedStr = predictedPct !== null ? `~${Math.round(predictedScore / maxPossible * 180)}/180点` : null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ResultScreen,
      {
        results,
        sections,
        correct,
        total,
        pct,
        passed,
        predictedStr,
        timer,
        config
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mock-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mock-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: current.section }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Câu ",
        qIdx + 1,
        "/",
        questions.length
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mock-progress-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mock-progress-fill", style: { width: `${qIdx / questions.length * 100}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mock-question", children: current.hideQuestion ? "🔊 Nghe và chọn đáp án" : current.question }),
    current.hideQuestion && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { marginBottom: 12 }, onClick: () => speakJP(current.question), children: "🔊 Nghe lại" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mock-options", children: current.options.map((opt, i) => {
      const bg = feedback && equalsAnswerText(opt, current.answer) ? "var(--n4-success)" : feedback && equalsAnswerText(selected, opt) ? "var(--n4-danger)" : void 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `n4-btn ${feedback && equalsAnswerText(opt, current.answer) ? "n4-btn-primary" : "n4-btn-neon"}`,
          style: bg ? { background: bg } : void 0,
          onClick: () => answer(opt),
          disabled: !!feedback,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-mock-opt-num", children: [
              i + 1,
              "."
            ] }),
            " ",
            opt
          ]
        },
        i
      );
    }) }),
    feedback && ((_a = current == null ? void 0 : current.explanation) == null ? void 0 : _a.core) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mock-authored-explanation", style: {
      marginTop: 10,
      padding: "10px 14px",
      borderRadius: 10,
      background: "rgba(111,191,255,0.08)",
      borderLeft: "3px solid var(--n4-accent, #6fbfff)",
      fontSize: "0.9rem",
      lineHeight: 1.55
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 700, marginBottom: 4 }, children: "📘 Giải thích" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: current.explanation.core }),
      current.explanation.pattern && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 6, fontSize: "0.85rem", opacity: 0.85 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mẫu:" }),
        " ",
        current.explanation.pattern
      ] }),
      current.explanation.distractors && Object.keys(current.explanation.distractors).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 8, fontSize: "0.85rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Đáp án sai:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: { margin: "4px 0 0 18px", paddingLeft: 0 }, children: Object.entries(current.explanation.distractors).filter(([opt]) => opt !== current.answer).map(([opt, why]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: { background: "rgba(0,0,0,0.15)", padding: "0 4px", borderRadius: 3 }, children: opt }),
          " — ",
          why
        ] }, opt)) })
      ] })
    ] }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 12, textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: nextQuestion, children: qIdx + 1 < questions.length ? "Câu tiếp theo ▶" : "Xem kết quả" }) })
  ] });
}
function JLPTMock({ mode = "full" }) {
  const modeConfig = SECTION_CONFIG[mode] || SECTION_CONFIG.full;
  const vocabItems = useVocabItems("all");
  const grammarItems = useGrammarItems("all");
  const grammarGameItems = useGrammarGameItems(Math.max(modeConfig.grammar, 4));
  const scoring = useScoreEngine("jlpt-mock");
  const { reset } = scoring;
  const [timerDisplay, setTimerDisplay] = reactExports.useState(modeConfig.time);
  reactExports.useEffect(() => {
    reset();
    setTimerDisplay(modeConfig.time);
  }, [modeConfig.time, reset]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerContext.Provider, { value: "jlpt-mock", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    GameShell,
    {
      trainerId: "jlpt-mock",
      mode,
      icon: "📋",
      title: "Thi thử JLPT",
      color: "var(--n4-cat-jlpt)",
      hearts: 3,
      hazardSeconds: modeConfig.time > 0 ? modeConfig.time : null,
      rhythm: { warmup: 0, bossAt: "end", bossCount: 0, cooldown: 0, totalItems: 60 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrainerTopBar,
          {
            trainerId: "jlpt-mock",
            activeMode: mode,
            modes: MODES
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          MockTest,
          {
            vocabItems,
            grammarItems,
            grammarGameItems,
            mode,
            scoring,
            onTimerChange: setTimerDisplay
          },
          mode
        )
      ]
    }
  ) });
}
export {
  MODES,
  JLPTMock as default
};
