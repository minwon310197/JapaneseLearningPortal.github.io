import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, f as speakJP } from "./feature-3d-jK3b4Iv-.js";
import { B as useAIKey, aL as getWeakStudyItems, aM as generateQuiz } from "./feature-3d-hud-Dp6hMoyV.js";
import { c as getUserErrorMessage } from "./index-CjITGIof.js";
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-icons-DHCyxOF-.js";
const QUIZ_TYPES = [
  { id: "vocab", label: "📖 Từ vựng", desc: "Nghĩa, đọc, cách dùng" },
  { id: "grammar", label: "📐 Ngữ pháp", desc: "Mẫu câu, điền từ" },
  { id: "kanji", label: "🈁 Kanji", desc: "Đọc, nghĩa, hợp chữ" },
  { id: "mixed", label: "🎯 Tổng hợp", desc: "Hỗn hợp tất cả" }
];
const DIFFICULTIES = [
  { id: "easy", label: "🟢 Dễ", desc: "N5 cơ bản" },
  { id: "normal", label: "🟡 Trung bình", desc: "N5–N4" },
  { id: "hard", label: "🔴 Khó", desc: "N4 nâng cao" }
];
const COUNTS = [5, 10, 15];
function AIQuiz() {
  var _a, _b;
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const recordAnswer = useLearningStore((s) => s.recordAnswer);
  const addXp = useLearningStore((s) => s.addXp);
  const recordStudy = useLearningStore((s) => s.recordStudy);
  const [quizType, setQuizType] = reactExports.useState("mixed");
  const [difficulty, setDifficulty] = reactExports.useState("normal");
  const [count, setCount] = reactExports.useState(5);
  const [personalized, setPersonalized] = reactExports.useState(true);
  const [phase, setPhase] = reactExports.useState("config");
  const [questions, setQuestions] = reactExports.useState([]);
  const [currentQ, setCurrentQ] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [showExplanation, setShowExplanation] = reactExports.useState(false);
  const [answers, setAnswers] = reactExports.useState([]);
  const [error, setError] = reactExports.useState(null);
  const abortRef = reactExports.useRef(null);
  const weakPreview = reactExports.useMemo(() => getWeakStudyItems(quizType, 6), [quizType, personalized]);
  const generate = reactExports.useCallback(async () => {
    if (abortRef.current) abortRef.current.abort();
    const ac = new AbortController();
    abortRef.current = ac;
    setPhase("loading");
    setError(null);
    try {
      const qs = await generateQuiz({ type: quizType, count, difficulty, personalized, signal: ac.signal }, apiKey);
      if (ac.signal.aborted) return;
      if (!qs.length) throw new Error("Không tạo được câu hỏi. Thử lại.");
      setQuestions(qs);
      setCurrentQ(0);
      setSelected(null);
      setShowExplanation(false);
      setAnswers([]);
      setPhase("quiz");
    } catch (err) {
      if (err.name === "AbortError" || ac.signal.aborted) return;
      setError(getUserErrorMessage(err, "Không thể tạo câu hỏi lúc này."));
      setPhase("config");
    } finally {
      if (abortRef.current === ac) abortRef.current = null;
    }
  }, [apiKey, quizType, count, difficulty, personalized]);
  const cancelGenerate = reactExports.useCallback(() => {
    if (abortRef.current) {
      abortRef.current.abort();
      abortRef.current = null;
    }
    setPhase("config");
    setError(null);
  }, []);
  const selectAnswer = reactExports.useCallback((idx) => {
    if (selected !== null) return;
    const q2 = questions[currentQ];
    if (!q2) return;
    const correct = idx === q2.answer;
    setSelected(idx);
    setShowExplanation(true);
    setAnswers((prev) => [...prev, { questionIdx: currentQ, selectedIdx: idx, correct }]);
    recordAnswer(correct);
    if (correct) addXp(5);
  }, [selected, questions, currentQ, recordAnswer, addXp]);
  const nextQuestion = reactExports.useCallback(() => {
    if (currentQ + 1 >= questions.length) {
      recordStudy();
      setPhase("results");
    } else {
      setCurrentQ((prev) => prev + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  }, [currentQ, questions.length, recordStudy]);
  const resetQuiz = reactExports.useCallback(() => {
    setPhase("config");
    setQuestions([]);
    setCurrentQ(0);
    setSelected(null);
    setShowExplanation(false);
    setAnswers([]);
    setError(null);
  }, []);
  if (!isLoggedIn || !hasKey) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-ai-nokey", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-nokey-icon", children: "🎯" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "AI trắc nghiệm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-ai-nokey-desc", children: !isLoggedIn ? "Vui lòng đăng nhập để sử dụng tính năng này." : "Đang chờ AI key từ hệ thống..." }),
      !isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", className: "n4-btn n4-btn-primary n4-ai-nokey-settings", children: "🔒 Đăng nhập" })
    ] });
  }
  if (phase === "config") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-aiq-page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-aiq-title", children: "🎯 AI trắc nghiệm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-aiq-desc", children: "AI tạo bài trắc nghiệm cá nhân hóa theo trình độ và điểm yếu của bạn" }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-aiq-error", children: [
        "❌ ",
        error
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-aiq-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-section-label", children: "📋 Loại câu hỏi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-options", children: QUIZ_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: `n4-card n4-aiq-option ${quizType === t.id ? "n4-aiq-option-active" : ""}`,
            onClick: () => setQuizType(t.id),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-option-label", children: t.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-option-desc", children: t.desc })
            ]
          },
          t.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-aiq-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-section-label", children: "⚡ Độ khó" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-options", children: DIFFICULTIES.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: `n4-card n4-aiq-option ${difficulty === d.id ? "n4-aiq-option-active" : ""}`,
            onClick: () => setDifficulty(d.id),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-option-label", children: d.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-option-desc", children: d.desc })
            ]
          },
          d.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-aiq-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-section-label", children: "🔢 Số câu hỏi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-counts", children: COUNTS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: `n4-btn ${count === c ? "n4-btn-primary" : "n4-btn-ghost"}`,
            onClick: () => setCount(c),
            children: [
              c,
              " câu"
            ]
          },
          c
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-aiq-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-aiq-toggle", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: personalized,
              onChange: (e) => setPersonalized(e.target.checked)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🧠 Tập trung điểm yếu (cá nhân hóa theo dữ liệu học)" })
        ] }),
        personalized && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { marginTop: 10, padding: 12, fontSize: "0.9rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600, marginBottom: 6 }, children: "🎯 AI sẽ ưu tiên:" }),
          weakPreview.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-secondary)" }, children: weakPreview.join(" • ") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-muted)" }, children: "Chưa có đủ dữ liệu yếu rõ ràng. AI sẽ dựa vào trình độ tổng thể và bài Minna gần nhất." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon n4-aiq-start", onClick: generate, children: "🚀 Tạo bài" })
    ] });
  }
  if (phase === "loading") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dashboard n4-page-enter n4-aiq-page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-aiq-loading", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-loading-spinner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🤖 AI đang tạo bài..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Đang phân tích trình độ và tạo ",
        count,
        " câu hỏi ",
        (_a = QUIZ_TYPES.find((t) => t.id === quizType)) == null ? void 0 : _a.label
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.8rem", opacity: 0.6, marginTop: 8 }, children: "Có thể mất 15–45 giây (model miễn phí)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", style: { marginTop: 16 }, onClick: cancelGenerate, children: "✕ Hủy" })
    ] }) });
  }
  if (phase === "results") {
    const correctCount = answers.filter((a) => a.correct).length;
    const accuracy = Math.round(correctCount / questions.length * 100);
    const grade = accuracy >= 90 ? "S" : accuracy >= 80 ? "A" : accuracy >= 70 ? "B" : accuracy >= 60 ? "C" : "D";
    const gradeColor = accuracy >= 80 ? "var(--n4-success)" : accuracy >= 60 ? "var(--n4-warning)" : "var(--n4-danger)";
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dashboard n4-page-enter n4-aiq-page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-aiq-results", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-grade", style: { color: gradeColor }, children: grade }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Kết quả trắc nghiệm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-aiq-score", children: [
        correctCount,
        "/",
        questions.length,
        " đúng (",
        accuracy,
        "%)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-aiq-xp", children: [
        "+",
        correctCount * 5,
        " XP"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-review", children: questions.map((q2, i) => {
        const a = answers[i];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-card n4-aiq-review-item ${(a == null ? void 0 : a.correct) ? "n4-aiq-correct" : "n4-aiq-wrong"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-aiq-review-q", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-aiq-review-num", children: [
              i + 1,
              "."
            ] }),
            (a == null ? void 0 : a.correct) ? "✅" : "❌",
            " ",
            q2.question
          ] }),
          !(a == null ? void 0 : a.correct) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-aiq-review-answer", children: [
            "Bạn chọn: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: q2.choices[a == null ? void 0 : a.selectedIdx] }),
            " → Đáp án: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: q2.choices[q2.answer] })
          ] }),
          q2.explanation && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-review-explain", children: q2.explanation })
        ] }, i);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-aiq-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: generate, children: "🔄 Bài mới (cùng cấu hình)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: resetQuiz, children: "⚙️ Đổi cấu hình" })
      ] })
    ] }) });
  }
  const q = questions[currentQ];
  if (!q) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-aiq-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-aiq-progress", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-progress-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-progress-fill", style: { width: `${(currentQ + (selected !== null ? 1 : 0)) / questions.length * 100}%` } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-aiq-progress-text", children: [
        "Câu ",
        currentQ + 1,
        "/",
        questions.length
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-aiq-question", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-q-text", children: q.question }),
      /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/.test(q.question) && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(q.question), children: "🔊" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-choices", children: q.choices.map((choice, i) => {
      var _a2;
      let cls = "n4-card n4-aiq-choice";
      if (selected !== null) {
        if (i === q.answer) cls += " n4-aiq-choice-correct";
        else if (i === selected && !((_a2 = answers[answers.length - 1]) == null ? void 0 : _a2.correct)) cls += " n4-aiq-choice-wrong";
        else cls += " n4-aiq-choice-dim";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: cls, onClick: () => selectAnswer(i), disabled: selected !== null, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-aiq-choice-letter", children: "ABCD"[i] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-aiq-choice-text", children: choice })
      ] }, i);
    }) }),
    showExplanation && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-aiq-explanation", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-explanation-header", children: ((_b = answers[answers.length - 1]) == null ? void 0 : _b.correct) ? "✅ Chính xác!" : "❌ Sai rồi!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-aiq-explanation-text", children: q.explanation }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-aiq-next", onClick: nextQuestion, children: currentQ + 1 >= questions.length ? "📊 Xem kết quả" : "➡️ Câu tiếp" })
    ] })
  ] });
}
export {
  AIQuiz as default
};
