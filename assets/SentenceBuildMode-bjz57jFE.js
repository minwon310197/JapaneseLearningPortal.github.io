import { r as reactExports, R as React, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { b as stopSpeech, c as speakLongText } from "./index-BEJSIlFS.js";
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function buildSentenceChunks(question) {
  const { sentence, answer = "" } = question;
  const full = sentence.replace("＿＿", answer);
  if (!answer) {
    const segments = typeof Intl.Segmenter === "function" ? [...new Intl.Segmenter("ja", { granularity: "word" }).segment(full)].map((part) => part.segment) : Array.from(full);
    return segments.length > 1 ? segments : Array.from(full);
  }
  const particleIdx = full.indexOf(answer);
  if (particleIdx < 0) {
    return full.match(/.{1,4}/g) || [full];
  }
  const before = full.substring(0, particleIdx);
  const particle = answer;
  const after = full.substring(particleIdx + answer.length);
  const splitPart = (s) => {
    if (!s) return [];
    if (s.length <= 6) return [s];
    const mid = Math.ceil(s.length / 2);
    return [s.substring(0, mid), s.substring(mid)];
  };
  return [...splitPart(before), particle, ...splitPart(after)].filter(Boolean);
}
function SentenceBuildMode({ questions, maxQuestions = 10, difficulty = "normal", onFinish, onAnswerEvaluated }) {
  const pool = reactExports.useMemo(() => shuffle(questions).slice(0, maxQuestions), [questions, maxQuestions]);
  const [idx, setIdx] = reactExports.useState(0);
  const [score, setScore] = reactExports.useState(0);
  const [wrongCount, setWrongCount] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  const [history, setHistory] = reactExports.useState([]);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [speaking, setSpeaking] = React.useState(false);
  const readCtrlRef = React.useRef(null);
  React.useEffect(() => () => {
    var _a;
    (_a = readCtrlRef.current) == null ? void 0 : _a.cancel();
  }, []);
  const current = pool[idx];
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
    const textToRead = current.sentence.replace("＿＿", current.answer);
    const ctrl = speakLongText(textToRead, { lang: "ja-JP", rate: 0.85 });
    readCtrlRef.current = ctrl;
    ctrl.promise.finally(() => {
      if (readCtrlRef.current === ctrl) readCtrlRef.current = null;
      setSpeaking(false);
    });
  }, [speaking, current]);
  const correctChunks = reactExports.useMemo(() => current ? buildSentenceChunks(current) : [], [current]);
  const shuffledChunks = reactExports.useMemo(() => shuffle(correctChunks), [correctChunks]);
  const [selected, setSelected] = reactExports.useState([]);
  const [remaining, setRemaining] = reactExports.useState(shuffledChunks);
  const [qKey, setQKey] = reactExports.useState(0);
  reactExports.useMemo(() => {
    setSelected([]);
    setRemaining(shuffle(correctChunks));
    setFeedback(null);
  }, [idx, qKey]);
  const handleSelectChunk = reactExports.useCallback((chunk, fromIndex) => {
    if (feedback) return;
    setSelected((s) => [...s, chunk]);
    setRemaining((r) => r.filter((_, i) => i !== fromIndex));
  }, [feedback]);
  const handleRemoveChunk = reactExports.useCallback((chunk, fromIndex) => {
    if (feedback) return;
    setRemaining((r) => [...r, chunk]);
    setSelected((s) => s.filter((_, i) => i !== fromIndex));
  }, [feedback]);
  const handleCheck = reactExports.useCallback(() => {
    if (feedback || !current) return;
    const isCorrect = selected.join("") === correctChunks.join("");
    setFeedback(isCorrect ? "correct" : "wrong");
    if (isCorrect) setScore((s) => s + 10);
    else setWrongCount((c) => c + 1);
    setHistory((h) => [...h, { q: current, answer: selected.join(""), correct: isCorrect }]);
    onAnswerEvaluated == null ? void 0 : onAnswerEvaluated({ question: current, isCorrect, answer: selected.join("") });
    setTimeout(() => {
      setFeedback(null);
      if (idx + 1 >= pool.length) {
        setDone(true);
      } else {
        setIdx((i) => i + 1);
        setSelected([]);
      }
    }, 1400);
  }, [feedback, current, selected, correctChunks, idx, pool.length, onAnswerEvaluated]);
  const handleClear = reactExports.useCallback(() => {
    if (feedback) return;
    setRemaining(shuffle(correctChunks));
    setSelected([]);
  }, [feedback, correctChunks]);
  if (!pool.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-empty", children: "Không có câu hỏi nào." });
  }
  if (done) {
    const pct = Math.round(score / (pool.length * 10) * 100);
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-pct", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-label", children: "Điểm" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: history.filter((h) => h.correct).length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Đúng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: wrongCount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Sai" })
        ] })
      ] }),
      history.filter((h) => !h.correct).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-review", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "pd-result-review-title", children: "📝 Câu đúng" }),
        history.filter((h) => !h.correct).map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-review-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-result-review-sentence", lang: "ja", children: h.q.sentence.replace("＿＿", `[${h.q.answer}]`) }),
          h.q.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-result-review-vi", children: h.q.vi }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-result-review-meta", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-review-grammar", children: h.q.grammar }) })
        ] }, i))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "pd-result-retry", onClick: () => {
        setIdx(0);
        setScore(0);
        setWrongCount(0);
        setDone(false);
        setHistory([]);
        setSelected([]);
        setFeedback(null);
        setQKey((k) => k + 1);
      }, children: "🔄 Chơi lại" }),
      onFinish && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "pd-result-finish", onClick: () => onFinish({ score, total: pool.length, pct }), children: "✅ Kết thúc" })
    ] });
  }
  const progressPct = pool.length > 0 ? Math.round(idx / pool.length * 100) : 0;
  const isAnswered = selected.length === correctChunks.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-sentence-build", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-progress-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-progress-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-progress-fill", style: { width: `${progressPct}%` } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-progress-label", children: [
        idx + 1,
        " / ",
        pool.length
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-level-badge pd-level-badge--build", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🧩 Xây câu" }),
      current.level && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pd-level-tag pd-level-tag--${current.level}`, children: current.level })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-inline-score", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-inline-score-correct", children: [
        "🏆 ",
        score
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-inline-score-sep", children: "·" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-inline-score-wrong", children: [
        "❌ ",
        wrongCount
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pd-sb-instruction", children: "Sắp xếp các mảnh câu theo đúng thứ tự:" }),
    current.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pd-card-vi", children: current.vi }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-sentence-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pd-sb-answer ${feedback ? `pd-sb-answer--${feedback}` : ""}`, children: selected.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-sb-placeholder", children: "Bấm vào các mảnh bên dưới để xếp câu..." }) : selected.map((chunk, i) => {
        const isParticle = chunk === current.answer;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `pd-sb-chunk pd-sb-chunk--selected ${isParticle ? "pd-sb-chunk--particle" : ""}`,
            onClick: () => handleRemoveChunk(chunk, i),
            disabled: !!feedback,
            lang: "ja",
            children: chunk
          },
          `sel-${i}`
        );
      }) }),
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
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `pd-card-grammar pd-card-grammar--${feedback}`, children: [
      feedback === "correct" ? "✅" : "❌",
      " ",
      current.grammar
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-sb-bank", role: "group", "aria-label": "Các mảnh câu", children: remaining.map((chunk, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "pd-sb-chunk",
        onClick: () => handleSelectChunk(chunk, i),
        disabled: !!feedback,
        lang: "ja",
        children: chunk
      },
      `rem-${i}`
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-sb-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "pd-sb-clear",
          onClick: handleClear,
          disabled: !!feedback || selected.length === 0,
          children: "🔄 Xóa"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "pd-sb-check",
          onClick: handleCheck,
          disabled: !!feedback || !isAnswered,
          children: "✅ Kiểm tra"
        }
      )
    ] })
  ] });
}
export {
  SentenceBuildMode as S
};
