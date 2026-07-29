import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, f as speakJP } from "./feature-3d-CFvJkEt3.js";
import { B as useAIKey, aT as generateGrammarDrill } from "./feature-3d-hud-CYISTbY6.js";
import { c as getUserErrorMessage } from "./index-D1BqAvip.js";
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-icons-DHCyxOF-.js";
const DIFFICULTY_LEVELS = [
  { id: "easy", label: "🟢 Dễ", desc: "N5→N4 cơ bản" },
  { id: "normal", label: "🟡 Trung bình", desc: "N4 chuẩn" },
  { id: "hard", label: "🔴 Khó", desc: "N4 nâng cao" }
];
function AIGrammarDrill() {
  var _a;
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const srs = useLearningStore((s) => s.srs);
  const trainerStats = useLearningStore((s) => s.trainerStats);
  const [phase, setPhase] = reactExports.useState("config");
  const [difficulty, setDifficulty] = reactExports.useState("normal");
  const [count, setCount] = reactExports.useState(5);
  const [questions, setQuestions] = reactExports.useState([]);
  const [currentIdx, setCurrentIdx] = reactExports.useState(0);
  const [answers, setAnswers] = reactExports.useState([]);
  const [selected, setSelected] = reactExports.useState(null);
  const [showExplanation, setShowExplanation] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const weakPatterns = reactExports.useMemo(() => {
    const patterns = [];
    if (srs) {
      Object.entries(srs).forEach(([key, data]) => {
        if (key.startsWith("grammar-") && data.box <= 2) {
          patterns.push(key.replace("grammar-", ""));
        }
      });
    }
    if (trainerStats == null ? void 0 : trainerStats.grammar) {
      Object.entries(trainerStats.grammar).forEach(([pattern, stats]) => {
        if (stats.wrong > stats.correct) patterns.push(pattern);
      });
    }
    return [...new Set(patterns)].slice(0, 10);
  }, [srs, trainerStats]);
  const startDrill = reactExports.useCallback(async () => {
    setPhase("loading");
    setLoading(true);
    setError(null);
    try {
      const data = await generateGrammarDrill(weakPatterns, difficulty, count, apiKey);
      const qs = Array.isArray(data) ? data : data.questions || [];
      if (qs.length === 0) throw new Error("AI không tạo được câu hỏi. Thử lại nhé!");
      setQuestions(qs);
      setCurrentIdx(0);
      setAnswers([]);
      setSelected(null);
      setShowExplanation(false);
      setPhase("quiz");
    } catch (err) {
      setError(getUserErrorMessage(err, "Không thể tạo bài luyện ngữ pháp lúc này."));
      setPhase("config");
    } finally {
      setLoading(false);
    }
  }, [apiKey, difficulty, count, weakPatterns]);
  const handleAnswer = (optionIdx) => {
    if (selected !== null) return;
    const q = questions[currentIdx];
    const correct = optionIdx === q.answer;
    setSelected(optionIdx);
    setShowExplanation(true);
    setAnswers((prev) => [...prev, { questionIdx: currentIdx, selected: optionIdx, correct }]);
  };
  const nextQuestion = () => {
    if (currentIdx + 1 >= questions.length) {
      setPhase("results");
      return;
    }
    setCurrentIdx((prev) => prev + 1);
    setSelected(null);
    setShowExplanation(false);
  };
  const correctCount = answers.filter((a) => a.correct).length;
  const currentQ = questions[currentIdx];
  if (!isLoggedIn || !hasKey) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-ai-nokey", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-nokey-icon", children: "📝" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Luyện ngữ pháp AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-ai-nokey-desc", children: !isLoggedIn ? "Vui lòng đăng nhập để sử dụng tính năng này." : "Đang chờ AI key từ hệ thống..." }),
      !isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", className: "n4-btn n4-btn-primary", children: "🔒 Đăng nhập" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-feature n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-hero-icon", children: "📝" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Luyện ngữ pháp AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bài tập ngữ pháp MCQ thích ứng — AI tập trung vào điểm yếu của bạn" })
    ] }),
    phase === "config" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-config", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-config-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-config-label", children: "Độ khó" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-config-options", children: DIFFICULTY_LEVELS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-ai-config-option ${difficulty === d.id ? "active" : ""}`, onClick: () => setDifficulty(d.id), children: d.label }, d.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-config-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-config-label", children: "Số câu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-config-options", children: [3, 5, 8, 10].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: `n4-ai-config-option ${count === n ? "active" : ""}`, onClick: () => setCount(n), children: [
            n,
            " câu"
          ] }, n)) })
        ] })
      ] }),
      weakPatterns.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { marginTop: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8rem", color: "var(--n4-text-muted)", marginBottom: 4 }, children: "📊 Điểm yếu phát hiện:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 4 }, children: weakPatterns.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-pill", children: p }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", style: { width: "100%", marginTop: "var(--n4-sp-3)" }, onClick: startDrill, children: "🚀 Bắt đầu luyện tập" })
    ] }),
    phase === "loading" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-loading-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-loading-spinner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "📝 Đang tạo bài tập ngữ pháp..." })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-error-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-icon", children: "❌" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-msg", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => {
        setError(null);
        setPhase("config");
      }, children: "Thử lại" })
    ] }),
    phase === "quiz" && currentQ && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.85rem", color: "var(--n4-text-muted)" }, children: [
          "Câu ",
          currentIdx + 1,
          "/",
          questions.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.85rem" }, children: [
          "✅ ",
          correctCount,
          "   ❌ ",
          answers.length - correctCount
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 4, background: "var(--n4-card-bg)", borderRadius: 2, marginBottom: "var(--n4-sp-3)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "100%", width: `${currentIdx / questions.length * 100}%`, background: "var(--n4-neon-blue)", borderRadius: 2, transition: "width 0.3s" } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", children: [
        currentQ.context && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.8rem", color: "var(--n4-text-muted)", marginBottom: "var(--n4-sp-1)" }, children: [
          "📌 ",
          currentQ.context
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "1.1rem", marginBottom: "var(--n4-sp-2)" }, children: [
          currentQ.question,
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { marginLeft: 8 }, onClick: () => speakJP(currentQ.question), children: "🔊" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "var(--n4-sp-1)" }, children: (_a = currentQ.options || currentQ.choices) == null ? void 0 : _a.map((opt, i) => {
          var _a2;
          let cls = "n4-ai-story-choice";
          if (selected !== null) {
            if (i === currentQ.answer) cls += " n4-correct";
            else if (i === selected && !((_a2 = answers[answers.length - 1]) == null ? void 0 : _a2.correct)) cls += " n4-wrong";
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: cls,
              onClick: () => handleAnswer(i),
              disabled: selected !== null,
              style: { textAlign: "left", padding: "10px 14px", border: selected !== null && i === currentQ.answer ? "2px solid var(--n4-success)" : void 0 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 600, marginRight: 8 }, children: [
                  ["A", "B", "C", "D"][i],
                  "."
                ] }),
                opt
              ]
            },
            i
          );
        }) }),
        showExplanation && currentQ.explanation && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "var(--n4-sp-2)", padding: "var(--n4-sp-2)", background: "var(--n4-card-bg)", borderRadius: "var(--n4-radius-md)", fontSize: "0.85rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💡 Giải thích:" }),
          " ",
          currentQ.explanation
        ] })
      ] }),
      selected !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", style: { width: "100%", marginTop: "var(--n4-sp-2)" }, onClick: nextQuestion, children: currentIdx + 1 >= questions.length ? "📊 Xem kết quả" : "➡️ Câu tiếp" })
    ] }),
    phase === "results" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-score", style: { background: correctCount / questions.length >= 0.7 ? "linear-gradient(135deg, var(--n4-success), var(--n4-neon-blue))" : "linear-gradient(135deg, var(--n4-warning), var(--n4-danger))" }, children: [
          Math.round(correctCount / questions.length * 100),
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { style: { marginTop: "var(--n4-sp-2)" }, children: [
          correctCount,
          "/",
          questions.length,
          " câu đúng"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-secondary)", fontSize: "0.85rem" }, children: correctCount === questions.length ? "🎉 Hoàn hảo!" : correctCount / questions.length >= 0.7 ? "👍 Tốt lắm!" : correctCount / questions.length >= 0.5 ? "💪 Cần ôn thêm!" : "📚 Hãy ôn lại ngữ pháp nhé!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "var(--n4-sp-3)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "📋 Chi tiết:" }),
        questions.map((q, i) => {
          var _a2;
          const a = answers[i];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { marginTop: "var(--n4-sp-1)", borderLeft: `3px solid ${(a == null ? void 0 : a.correct) ? "var(--n4-success)" : "var(--n4-danger)"}` }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85rem" }, children: [
              (a == null ? void 0 : a.correct) ? "✅" : "❌",
              " ",
              q.question
            ] }),
            !(a == null ? void 0 : a.correct) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.8rem", color: "var(--n4-success)", marginTop: 4 }, children: [
              "Đáp án: ",
              (_a2 = q.options || q.choices) == null ? void 0 : _a2[q.answer]
            ] }),
            q.explanation && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.8rem", color: "var(--n4-text-muted)", marginTop: 4 }, children: [
              "💡 ",
              q.explanation
            ] })
          ] }, i);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: () => {
          setPhase("config");
          setError(null);
        }, children: "🔄 Luyện lại" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/ai-tutor", className: "n4-btn n4-btn-ghost", children: "✨ Gia sư AI" })
      ] })
    ] })
  ] });
}
export {
  AIGrammarDrill as default
};
