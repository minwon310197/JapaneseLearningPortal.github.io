import { r as reactExports, R as React, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-DvHP1w9U.js";
import { a5 as stopSpeech, ad as speakLongText, a as useAppStore } from "./feature-3d-jK3b4Iv-.js";
import { u as useGrammarGameItems } from "./useGrammarQuiz-bSsnJV68.js";
import { aj as AIExplainButton, aK as getQuestionsByLevel } from "./feature-3d-hud-Dp6hMoyV.js";
import "./index-CjITGIof.js";
import "./vendor-router-BTJacUKt.js";
import "./vendor-icons-DHCyxOF-.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./empty-Bvm-mx50.js";
import "./feature-3d-scenery-C3eSpuWG.js";
import "./quest-chains-CiwzmCpJ.js";
function shuffle$4(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function buildOptions$2(question) {
  const opts = [question.answer, ...question.distractors].slice(0, 5);
  return shuffle$4(opts);
}
function ProgressBar({ current, total }) {
  const pct = total > 0 ? Math.round(current / total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-progress-wrap", "aria-label": `Câu ${current}/${total}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-progress-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-progress-fill", style: { width: `${pct}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-progress-label", children: [
      current,
      " / ",
      total
    ] })
  ] });
}
function SentenceDisplay({ sentence, selectedParticle, feedback, speaking, onSpeak }) {
  const parts = sentence.split("＿＿");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-sentence-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pd-sentence ${feedback ? `pd-sentence--${feedback}` : ""}`, lang: "ja", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-sentence-part", children: parts[0] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pd-sentence-blank ${selectedParticle ? "pd-sentence-blank--filled" : ""} ${feedback ? `pd-sentence-blank--${feedback}` : ""}`, children: selectedParticle || "＿＿" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-sentence-part", children: parts[1] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `n4-btn n4-btn-icon n4-btn-ghost n4-speaker-btn ${speaking ? "n4-speaking" : ""}`,
        onClick: onSpeak,
        title: "Nghe câu này",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-speaker-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", width: "24", height: "24", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", className: "n4-speaker-wave n4-wave-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", className: "n4-speaker-wave n4-wave-2" })
        ] }) })
      }
    )
  ] });
}
function ParticleChip({ particle, onClick, disabled, selected, feedback, isCorrectAnswer }) {
  const cls = [
    "pd-chip",
    disabled && !feedback ? "pd-chip--disabled" : "",
    feedback && isCorrectAnswer ? "pd-chip--correct" : "",
    feedback && selected && !isCorrectAnswer ? "pd-chip--wrong" : "",
    feedback && !selected && !isCorrectAnswer ? "pd-chip--dim" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      className: cls,
      onClick: () => !disabled && onClick(particle),
      disabled,
      lang: "ja",
      "aria-label": `Chọn trợ từ ${particle}`,
      children: particle
    }
  );
}
function FillDropMode({ questions, maxQuestions = 10, difficulty = "normal", onFinish }) {
  const pool = reactExports.useMemo(() => shuffle$4(questions).slice(0, maxQuestions), [questions, maxQuestions]);
  const [idx, setIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [score, setScore] = reactExports.useState(0);
  const [wrongCount, setWrongCount] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  const [history, setHistory] = reactExports.useState([]);
  const [speaking, setSpeaking] = React.useState(false);
  const readCtrlRef = React.useRef(null);
  React.useEffect(() => () => {
    var _a;
    (_a = readCtrlRef.current) == null ? void 0 : _a.cancel();
  }, []);
  const current = pool[idx];
  const options = reactExports.useMemo(() => current ? buildOptions$2(current) : [], [current]);
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
    const textToRead = current.sentence.replace("＿＿", feedback === "correct" ? current.answer : selected || "＿＿");
    const ctrl = speakLongText(textToRead, { lang: "ja-JP", rate: 0.85 });
    readCtrlRef.current = ctrl;
    ctrl.promise.finally(() => {
      if (readCtrlRef.current === ctrl) readCtrlRef.current = null;
      setSpeaking(false);
    });
  }, [speaking, current, feedback, selected]);
  const handlePick = reactExports.useCallback((particle) => {
    if (feedback || !current) return;
    setSelected(particle);
    const isCorrect = particle === current.answer;
    setFeedback(isCorrect ? "correct" : "wrong");
    if (isCorrect) setScore((s) => s + 1);
    else setWrongCount((c) => c + 1);
    setHistory((h) => [...h, { q: current, chosen: particle, correct: isCorrect }]);
  }, [feedback, current]);
  const handleContinue = reactExports.useCallback(() => {
    setFeedback(null);
    setSelected(null);
    if (idx + 1 >= pool.length) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
    }
  }, [idx, pool.length]);
  if (!pool.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-empty", children: "Không có câu hỏi nào. Hãy thêm dữ liệu ngữ pháp!" });
  }
  if (done) {
    const pct = Math.round(score / pool.length * 100);
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-result-pct", children: [
            pct,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-label", children: "Chính xác" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Đúng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: wrongCount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Sai" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: pool.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Tổng" })
        ] })
      ] }),
      history.filter((h) => !h.correct).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-review", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "pd-result-review-title", children: "📝 Câu cần ôn lại" }),
        history.filter((h) => !h.correct).map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-review-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-result-review-sentence", lang: "ja", children: h.q.sentence.replace("＿＿", `[${h.q.answer}]`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-review-meta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-result-review-wrong", children: [
              "Bạn chọn: ",
              h.chosen
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-result-review-correct", children: [
              "Đúng: ",
              h.q.answer
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-review-grammar", children: h.q.grammar })
          ] }),
          h.q.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-result-review-vi", children: h.q.vi })
        ] }, i))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "pd-result-retry", onClick: () => {
        setIdx(0);
        setScore(0);
        setWrongCount(0);
        setDone(false);
        setHistory([]);
        setSelected(null);
        setFeedback(null);
      }, children: "🔄 Chơi lại" }),
      onFinish && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "pd-result-finish", onClick: () => onFinish({ score, total: pool.length, pct }), children: "✅ Kết thúc" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-fill-drop", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { current: idx + 1, total: pool.length }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-level-badge pd-level-badge--fill", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-level-badge-icon", children: "🔤" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Điền trợ từ" }),
      current.level && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pd-level-tag pd-level-tag--${current.level}`, children: current.level })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pd-card ${feedback ? `pd-card--${feedback}` : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SentenceDisplay,
        {
          sentence: current.sentence,
          selectedParticle: selected,
          feedback,
          speaking,
          onSpeak: handleSpeak
        }
      ),
      current.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pd-card-vi", children: current.vi }),
      feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `pd-card-grammar pd-card-grammar--${feedback}`, children: [
        feedback === "correct" ? "✅" : "❌",
        " ",
        current.grammar
      ] }),
      feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pd-feedback-panel pd-feedback-panel--${feedback}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-feedback-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-feedback-answer", children: feedback === "correct" ? "🎉 Chính xác!" : `❌ Đáp án đúng: 「${current.answer}」` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIExplainButton,
            {
              question: current.sentence,
              answer: current.answer,
              userAnswer: selected,
              isCorrect: feedback === "correct",
              itemInfo: { meaning: current.grammar },
              questionId: current.id
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "pd-continue-btn",
            onClick: handleContinue,
            children: idx + 1 >= pool.length ? "✅ Xem kết quả" : "Tiếp tục →"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-chip-bank", role: "group", "aria-label": "Chọn trợ từ", children: options.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ParticleChip,
      {
        particle: p,
        onClick: handlePick,
        disabled: !!feedback,
        selected: p === selected,
        feedback,
        isCorrectAnswer: p === current.answer
      },
      p
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-inline-score", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-inline-score-correct", children: [
        "✅ ",
        score
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-inline-score-sep", children: "·" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-inline-score-wrong", children: [
        "❌ ",
        wrongCount
      ] })
    ] })
  ] });
}
const TIME_PER_QUESTION = 10;
const STREAK_THRESHOLD = 3;
function shuffle$3(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function buildOptions$1(question, count = 4) {
  const opts = shuffle$3([question.answer, ...question.distractors]).slice(0, count);
  if (!opts.includes(question.answer)) {
    opts[0] = question.answer;
  }
  return shuffle$3(opts);
}
function TimerRing({ timeLeft, total }) {
  const pct = timeLeft / total;
  const r = 22;
  const circ = 2 * Math.PI * r;
  const danger = timeLeft <= 3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-timer", "aria-label": `Còn ${timeLeft} giây`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "56", height: "56", viewBox: "0 0 56 56", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "28", r, strokeWidth: "4", className: "pd-timer-bg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "circle",
        {
          cx: "28",
          cy: "28",
          r,
          strokeWidth: "4",
          className: `pd-timer-fill ${danger ? "pd-timer-fill--danger" : ""}`,
          strokeDasharray: circ,
          strokeDashoffset: circ * (1 - pct),
          transform: "rotate(-90 28 28)"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pd-timer-num ${danger ? "pd-timer-num--danger" : ""}`, children: timeLeft })
  ] });
}
function StreakBadge({ streak }) {
  if (streak < STREAK_THRESHOLD) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-streak", "aria-label": `Streak ${streak}`, children: [
    "🔥 x",
    streak,
    " streak!"
  ] });
}
function QuickPickMode({ questions, maxQuestions = 10, difficulty = "normal", onFinish }) {
  var _a;
  const timePerQ = difficulty === "easy" ? 15 : difficulty === "hard" ? 6 : TIME_PER_QUESTION;
  const optCount = difficulty === "easy" ? 3 : difficulty === "hard" ? 5 : 4;
  const pool = reactExports.useMemo(() => shuffle$3(questions).slice(0, maxQuestions), [questions, maxQuestions]);
  const [idx, setIdx] = reactExports.useState(0);
  const [timeLeft, setTimeLeft] = reactExports.useState(timePerQ);
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [score, setScore] = reactExports.useState(0);
  const [bonusPoints, setBonusPoints] = reactExports.useState(0);
  const [streak, setStreak] = reactExports.useState(0);
  const [maxStreak, setMaxStreak] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  const [history, setHistory] = reactExports.useState([]);
  const timerRef = reactExports.useRef(null);
  const [speaking, setSpeaking] = reactExports.useState(false);
  const readCtrlRef = reactExports.useRef(null);
  reactExports.useEffect(() => () => {
    var _a2;
    (_a2 = readCtrlRef.current) == null ? void 0 : _a2.cancel();
  }, []);
  const current = pool[idx];
  const options = reactExports.useMemo(() => current ? buildOptions$1(current, optCount) : [], [current, optCount]);
  const handleSpeak = reactExports.useCallback(() => {
    var _a2;
    if (speaking) {
      (_a2 = readCtrlRef.current) == null ? void 0 : _a2.cancel();
      readCtrlRef.current = null;
      stopSpeech();
      setSpeaking(false);
      return;
    }
    if (!current) return;
    setSpeaking(true);
    const textToRead = current.sentence.replace("＿＿", feedback === "correct" || feedback === "timeout" ? current.answer : selected || "＿＿");
    const ctrl = speakLongText(textToRead, { lang: "ja-JP", rate: 0.85 });
    readCtrlRef.current = ctrl;
    ctrl.promise.finally(() => {
      if (readCtrlRef.current === ctrl) readCtrlRef.current = null;
      setSpeaking(false);
    });
  }, [speaking, current, feedback, selected]);
  reactExports.useEffect(() => {
    if (done || feedback) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          setFeedback("timeout");
          setStreak(0);
          setHistory((h) => [...h, { q: current, chosen: null, correct: false }]);
          setTimeout(() => {
            setFeedback(null);
            setSelected(null);
            setTimeLeft(timePerQ);
            if (idx + 1 >= pool.length) {
              setDone(true);
            } else {
              setIdx((i) => i + 1);
            }
          }, 1800);
          return 0;
        }
        return t - 1;
      });
    }, 1e3);
    return () => clearInterval(timerRef.current);
  }, [idx, done, feedback, current, pool.length, timePerQ]);
  const handleContinue = reactExports.useCallback(() => {
    setFeedback(null);
    setSelected(null);
    setTimeLeft(timePerQ);
    if (idx + 1 >= pool.length) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
    }
  }, [idx, pool.length, timePerQ]);
  const handlePick = reactExports.useCallback((particle) => {
    if (feedback || !current) return;
    clearInterval(timerRef.current);
    setSelected(particle);
    const isCorrect = particle === current.answer;
    const newStreak = isCorrect ? streak + 1 : 0;
    const speedBonus = isCorrect ? Math.max(0, Math.round(timeLeft / timePerQ * 5)) : 0;
    const streakBonus = newStreak >= STREAK_THRESHOLD ? 2 : 1;
    const pts = isCorrect ? (10 + speedBonus) * streakBonus : 0;
    setFeedback(isCorrect ? "correct" : "wrong");
    setStreak(newStreak);
    setMaxStreak((m) => Math.max(m, newStreak));
    if (isCorrect) {
      setScore((s) => s + pts);
      setBonusPoints((b) => b + speedBonus);
    }
    setHistory((h) => [...h, { q: current, chosen: particle, correct: isCorrect, pts }]);
  }, [feedback, current, streak, timeLeft, timePerQ]);
  if (!pool.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-empty", children: "Không có câu hỏi nào." });
  }
  if (done) {
    const correctCount = history.filter((h) => h.correct).length;
    const pct2 = Math.round(correctCount / pool.length * 100);
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
              strokeDashoffset: `${2 * Math.PI * 50 * (1 - pct2 / 100)}`
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-score-inner", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-result-pct", children: [
            pct2,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-label", children: "Chính xác" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Điểm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: bonusPoints }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Bonus tốc độ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: maxStreak }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Streak tối đa" })
        ] })
      ] }),
      history.filter((h) => !h.correct).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-review", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "pd-result-review-title", children: "📝 Câu cần ôn lại" }),
        history.filter((h) => !h.correct).map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-review-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-result-review-sentence", lang: "ja", children: h.q.sentence.replace("＿＿", `[${h.q.answer}]`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-review-meta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-review-wrong", children: h.chosen ? `Bạn chọn: ${h.chosen}` : "⏱ Hết giờ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-result-review-correct", children: [
              "Đúng: ",
              h.q.answer
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-review-grammar", children: h.q.grammar })
          ] }),
          h.q.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-result-review-vi", children: h.q.vi })
        ] }, i))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "pd-result-retry", onClick: () => {
        setIdx(0);
        setScore(0);
        setBonusPoints(0);
        setStreak(0);
        setMaxStreak(0);
        setDone(false);
        setHistory([]);
        setSelected(null);
        setFeedback(null);
        setTimeLeft(timePerQ);
      }, children: "🔄 Chơi lại" }),
      onFinish && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "pd-result-finish", onClick: () => onFinish({ score, total: pool.length, pct: pct2 }), children: "✅ Kết thúc" })
    ] });
  }
  const pct = pool.length > 0 ? Math.round(idx / pool.length * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-quick-pick", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-qp-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-progress-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-progress-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-progress-fill", style: { width: `${pct}%` } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-progress-label", children: [
          idx + 1,
          " / ",
          pool.length
        ] })
      ] }),
      !feedback && /* @__PURE__ */ jsxRuntimeExports.jsx(TimerRing, { timeLeft, total: timePerQ })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StreakBadge, { streak }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-qp-score", children: [
      "🏆 ",
      score,
      "pts"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-level-badge pd-level-badge--quick", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚡ Trắc nghiệm nhanh" }),
      current.level && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pd-level-tag pd-level-tag--${current.level}`, children: current.level })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pd-card pd-card--qp ${feedback ? `pd-card--${feedback}` : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-sentence-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-sentence", lang: "ja", children: current.sentence.split("＿＿").map((part, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-sentence-part", children: part }),
          i < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pd-sentence-blank ${selected ? "pd-sentence-blank--filled" : ""} ${feedback ? `pd-sentence-blank--${feedback}` : ""}`, children: selected || "＿＿" })
        ] }, i)) }),
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
      current.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pd-card-vi", children: current.vi }),
      feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `pd-card-grammar pd-card-grammar--${feedback}`, children: [
        feedback === "correct" ? "✅" : feedback === "timeout" ? "⏱" : "❌",
        " ",
        current.grammar
      ] }),
      feedback && feedback !== "timeout" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pd-feedback-panel pd-feedback-panel--${feedback}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-feedback-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-feedback-answer", children: feedback === "correct" ? `🎉 Chính xác! +${((_a = history[history.length - 1]) == null ? void 0 : _a.pts) || 0}pts` : `❌ Đáp án đúng: 「${current.answer}」` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIExplainButton,
            {
              question: current.sentence,
              answer: current.answer,
              userAnswer: selected,
              isCorrect: feedback === "correct",
              itemInfo: { meaning: current.grammar },
              questionId: current.id
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "pd-continue-btn",
            onClick: handleContinue,
            children: idx + 1 >= pool.length ? "✅ Xem kết quả" : "Tiếp tục →"
          }
        )
      ] }),
      feedback === "timeout" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-feedback-panel pd-feedback-panel--timeout", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-feedback-answer", children: [
        "⏱ Hết giờ! Đáp án: 「",
        current.answer,
        "」"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-qp-options", role: "group", "aria-label": "Chọn trợ từ", children: options.map((p) => {
      let cls = "pd-qp-option";
      if (feedback) {
        if (p === current.answer) cls += " pd-qp-option--correct";
        else if (p === selected) cls += " pd-qp-option--wrong";
        else cls += " pd-qp-option--dim";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: cls,
          onClick: () => handlePick(p),
          disabled: !!feedback,
          lang: "ja",
          children: p
        },
        p
      );
    }) })
  ] });
}
const FALL_DURATION = 5e3;
const LANE_COUNT = 4;
const LIVES_MAX = 3;
function shuffle$2(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function buildOptions(question, count = 4) {
  const opts = shuffle$2([question.answer, ...question.distractors]).slice(0, count);
  if (!opts.includes(question.answer)) opts[0] = question.answer;
  return shuffle$2(opts);
}
function LivesDisplay({ lives }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-cascade-lives", "aria-label": `Còn ${lives} mạng`, children: Array.from({ length: LIVES_MAX }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pd-cascade-life ${i < lives ? "" : "pd-cascade-life--lost"}`, children: i < lives ? "❤️" : "🖤" }, i)) });
}
function CascadeMode({ questions, maxQuestions = 15, difficulty = "normal", onFinish }) {
  const fallDuration = difficulty === "easy" ? 7e3 : difficulty === "hard" ? 3500 : FALL_DURATION;
  const pool = reactExports.useMemo(() => shuffle$2(questions).slice(0, maxQuestions), [questions, maxQuestions]);
  const [idx, setIdx] = reactExports.useState(0);
  const [lives, setLives] = reactExports.useState(LIVES_MAX);
  const [score, setScore] = reactExports.useState(0);
  const [combo, setCombo] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [fallingKey, setFallingKey] = reactExports.useState(0);
  const current = pool[idx];
  const options = reactExports.useMemo(() => current ? buildOptions(current) : [], [current]);
  const advance = reactExports.useCallback((wasCorrect) => {
    setFeedback(null);
    setFallingKey((k) => k + 1);
    if (idx + 1 >= pool.length || lives <= 0) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
    }
  }, [idx, pool.length, lives]);
  const handleTap = reactExports.useCallback((particle) => {
    if (feedback || !current) return;
    const isCorrect = particle === current.answer;
    if (isCorrect) {
      const pts = 10 + combo * 3;
      setScore((s) => s + pts);
      setCombo((c) => c + 1);
      setFeedback({ particle, type: "hit" });
    } else {
      setLives((l) => {
        const newLives = l - 1;
        if (newLives <= 0) setDone(true);
        return newLives;
      });
      setCombo(0);
      setFeedback({ particle, type: "miss" });
    }
    setTimeout(() => advance(isCorrect), 900);
  }, [feedback, current, combo, advance]);
  const handleTimeout = reactExports.useCallback((particle) => {
    if (feedback || !current) return;
    if (particle === current.answer) {
      setLives((l) => {
        const nl = l - 1;
        if (nl <= 0) setDone(true);
        return nl;
      });
      setCombo(0);
      setFeedback({ particle, type: "timeout" });
      setTimeout(() => advance(false), 900);
    }
  }, [feedback, current, advance]);
  if (!pool.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-empty", children: "Không có câu hỏi nào." });
  }
  if (done) {
    const pct = Math.round(score / (pool.length * 10) * 100);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-cascade-done-icon", children: "🌊" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "pd-result-title", children: lives > 0 ? "🎉 Hoàn thành!" : "💀 Hết mạng!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Điểm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: idx + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Câu đã qua" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-val", children: lives }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pd-result-stat-lbl", children: "Mạng còn" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "pd-result-retry", onClick: () => {
        setIdx(0);
        setLives(LIVES_MAX);
        setScore(0);
        setCombo(0);
        setDone(false);
        setFeedback(null);
        setFallingKey((k) => k + 1);
      }, children: "🔄 Chơi lại" }),
      onFinish && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "pd-result-finish", onClick: () => onFinish({ score, total: pool.length, pct }), children: "✅ Kết thúc" })
    ] });
  }
  const progressPct = pool.length > 0 ? Math.round(idx / pool.length * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-cascade", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-cascade-hud", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LivesDisplay, { lives }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-cascade-score", children: [
        "🏆 ",
        score
      ] }),
      combo >= 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-cascade-combo", children: [
        "🔥 x",
        combo,
        " combo"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-progress-wrap pd-cascade-progress", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-progress-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-progress-fill", style: { width: `${progressPct}%` } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pd-progress-label", children: [
        idx + 1,
        " / ",
        pool.length
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-cascade-arena", "aria-hidden": "true", children: options.map((p, i) => {
      const lane = i % LANE_COUNT;
      const delay = (i * 0.6).toFixed(2);
      p === current.answer;
      const hitThis = (feedback == null ? void 0 : feedback.particle) === p;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `pd-falling-particle ${hitThis ? feedback.type === "hit" ? "pd-falling-particle--hit" : "pd-falling-particle--miss" : ""}`,
          style: {
            left: `${12 + lane * 22}%`,
            animationDuration: `${fallDuration}ms`,
            animationDelay: `${delay}s`
          },
          onClick: () => handleTap(p),
          onAnimationEnd: () => handleTimeout(p),
          lang: "ja",
          "aria-label": `Chọn ${p}`,
          children: p
        },
        `${fallingKey}-${p}`
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-cascade-question", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pd-level-badge pd-level-badge--cascade", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🌊 Mưa trợ từ" }),
        current.level && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pd-level-tag pd-level-tag--${current.level}`, children: current.level })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-cascade-sentence", lang: "ja", children: current.sentence }),
      current.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-cascade-vi", children: current.vi }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pd-cascade-hint", children: "☝️ Bấm vào trợ từ đúng khi nó rơi xuống!" })
    ] })
  ] });
}
function shuffle$1(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function buildChunks(question) {
  const { sentence, answer } = question;
  const full = sentence.replace("＿＿", answer);
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
function SentenceBuildMode({ questions, maxQuestions = 10, difficulty = "normal", onFinish }) {
  const pool = reactExports.useMemo(() => shuffle$1(questions).slice(0, maxQuestions), [questions, maxQuestions]);
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
  const correctChunks = reactExports.useMemo(() => current ? buildChunks(current) : [], [current]);
  const shuffledChunks = reactExports.useMemo(() => shuffle$1(correctChunks), [correctChunks]);
  const [selected, setSelected] = reactExports.useState([]);
  const [remaining, setRemaining] = reactExports.useState(shuffledChunks);
  const [qKey, setQKey] = reactExports.useState(0);
  reactExports.useMemo(() => {
    setSelected([]);
    setRemaining(shuffle$1(correctChunks));
    setFeedback(null);
  }, [idx]);
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
    setTimeout(() => {
      setFeedback(null);
      if (idx + 1 >= pool.length) {
        setDone(true);
      } else {
        setIdx((i) => i + 1);
        setSelected([]);
      }
    }, 1400);
  }, [feedback, current, selected, correctChunks, idx, pool.length]);
  const handleClear = reactExports.useCallback(() => {
    if (feedback) return;
    setRemaining(shuffle$1(correctChunks));
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
const MODES = [
  { id: "fill-drop", label: "Điền trợ từ", icon: "🔤" },
  { id: "quick-pick", label: "Trắc nghiệm", icon: "⚡" },
  { id: "cascade", label: "Mưa trợ từ", icon: "🌊" },
  { id: "sentence-build", label: "Xây câu", icon: "🧩" }
];
const LEVEL_OPTIONS = [
  { id: "all", label: "Tất cả" },
  { id: "basic", label: "🟢 N4 nền tảng" },
  { id: "intermediate", label: "🟡 N4 chuẩn" },
  { id: "advanced", label: "🔴 N4 trọng điểm" }
];
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const DYNAMIC_PARTICLES = [
  "ながら",
  "ので",
  "のに",
  "から",
  "まで",
  "より",
  "は",
  "が",
  "を",
  "に",
  "で",
  "と",
  "の",
  "へ",
  "も"
];
const DYNAMIC_SORTED = [...DYNAMIC_PARTICLES].sort((a, b) => b.length - a.length);
function buildDynamicQuestions(grammarGameItems) {
  const result = [];
  const used = /* @__PURE__ */ new Set();
  for (const it of grammarGameItems) {
    for (const ex of it.allExamples || []) {
      const jp = ex.jp || "";
      if (used.has(jp)) continue;
      for (const p of DYNAMIC_SORTED) {
        const idx = jp.indexOf(p);
        if (idx > 0 && idx < jp.length - p.length) {
          const distractors = shuffle(DYNAMIC_PARTICLES.filter((dp) => dp !== p)).slice(0, 4);
          result.push({
            id: `dyn-${result.length}`,
            sentence: jp.substring(0, idx) + "＿＿" + jp.substring(idx + p.length),
            answer: p,
            distractors,
            vi: ex.vi || "",
            grammar: it.title || "",
            level: "intermediate"
          });
          used.add(jp);
          break;
        }
      }
    }
  }
  return result;
}
function ParticleDojo({ mode = "fill-drop" }) {
  const storeDifficulty = useAppStore((s) => s.difficulty);
  const storeQCount = useAppStore((s) => s.defaultQuestionCount);
  const [level, setLevel] = reactExports.useState("all");
  const [difficulty, setDifficulty] = reactExports.useState(storeDifficulty || "normal");
  const [qCount, setQCount] = reactExports.useState(storeQCount || 15);
  const [sessionKey, setSessionKey] = reactExports.useState(0);
  const grammarGameItems = useGrammarGameItems(80);
  const allQuestions = reactExports.useMemo(() => {
    const dynamic = buildDynamicQuestions(grammarGameItems);
    const staticPool = getQuestionsByLevel(level);
    const dynamicFiltered = level === "all" ? dynamic : dynamic.filter((q) => q.level === level);
    const seen = new Set(staticPool.map((q) => q.sentence));
    const merged = [...staticPool];
    for (const q of dynamicFiltered) {
      if (!seen.has(q.sentence)) {
        merged.push(q);
        seen.add(q.sentence);
      }
    }
    return shuffle(merged);
  }, [grammarGameItems, level]);
  const maxQ = reactExports.useMemo(() => {
    if (mode === "cascade") return Math.min(20, qCount);
    if (difficulty === "easy") return Math.min(8, qCount);
    if (difficulty === "hard") return Math.min(20, qCount);
    return qCount;
  }, [mode, difficulty, qCount]);
  const renderMode = () => {
    const commonProps = {
      questions: allQuestions,
      maxQuestions: maxQ,
      difficulty,
      key: sessionKey
    };
    switch (mode) {
      case "fill-drop":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(FillDropMode, { ...commonProps });
      case "quick-pick":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(QuickPickMode, { ...commonProps });
      case "cascade":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CascadeMode, { ...commonProps, maxQuestions: Math.min(20, qCount) });
      case "sentence-build":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SentenceBuildMode, { ...commonProps });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(FillDropMode, { ...commonProps });
    }
  };
  if (allQuestions.length < 4) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(GameShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", padding: "4rem 2rem", color: "var(--n4-text-dim, #888)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "2rem" }, children: "🔤" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chưa đủ dữ liệu câu hỏi. Hãy thử lại sau khi data ngữ pháp được tải." })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(GameShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TrainerTopBar,
      {
        trainerId: "particle-dojo",
        modes: MODES,
        activeMode: mode,
        difficulty,
        onDifficultyChange: (v) => {
          setDifficulty(v);
          setSessionKey((k) => k + 1);
        },
        itemCount: qCount,
        onItemCountChange: (v) => {
          setQCount(v);
          setSessionKey((k) => k + 1);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      gap: "0.6rem",
      flexWrap: "wrap",
      alignItems: "center",
      padding: "0.5rem 1rem",
      borderBottom: "1px solid rgba(255,255,255,0.06)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--n4-text-muted, #888)", letterSpacing: "0.05em" }, children: "🎯 CẤP ĐỘ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            value: level,
            onChange: (e) => {
              setLevel(e.target.value);
              setSessionKey((k) => k + 1);
            },
            className: "n4-input",
            style: { fontSize: 12, padding: "4px 8px", height: "auto" },
            children: LEVEL_OPTIONS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: l.id, children: l.label }, l.id))
          }
        )
      ] }),
      mode !== "cascade" && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--n4-text-muted, #888)", letterSpacing: "0.05em" }, children: "📊 SỐ CÂU" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            value: qCount,
            onChange: (e) => {
              setQCount(Number(e.target.value));
              setSessionKey((k) => k + 1);
            },
            className: "n4-input",
            style: { fontSize: 12, padding: "4px 8px", height: "auto" },
            children: [5, 10, 15, 20, 30].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: n, children: [
              n,
              " câu"
            ] }, n))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.72rem", color: "var(--n4-text-muted, #888)", marginLeft: "auto" }, children: [
        allQuestions.length,
        " câu có sẵn"
      ] })
    ] }),
    renderMode()
  ] });
}
export {
  MODES,
  ParticleDojo as default
};
