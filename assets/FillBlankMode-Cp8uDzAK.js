import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useScoreEngine } from "./useScoreEngine-fO3A-KMP.js";
import { az as stableAnswerKey, bA as playSFX } from "./feature-3d-CFvJkEt3.js";
import { ai as AIHintButton } from "./feature-3d-hud-CYISTbY6.js";
import { s as selectDistractors, a as QuestionDisplay, A as AnswerOptionRow } from "./QuizMode-BZfpUmXt.js";
import { u as useSrsAwareBatch } from "./PhaseRibbon-BrG3g-XS.js";
import { Q as QuizFeedback } from "./QuizFeedback-C5B0QP7Y.js";
import { M as ModeResultsScreen, s as safeTtsText } from "./useQuestionMeta-D4bSCufi.js";
import { S as ScaffoldingLayer } from "./ScaffoldingLayer-BRKW1Dj-.js";
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function FillBlankMode({
  items,
  getSentence,
  getBlankWord,
  getHint,
  getCorrectInfo,
  getAltAnswers,
  getSrsKey,
  optionCount = 4,
  maxQuestions = 10,
  srsAware = false,
  qualityPicker = true,
  trainerId
}) {
  const scoring = useScoreEngine(trainerId);
  const [idx, setIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [answered, setAnswered] = reactExports.useState(false);
  const [retryItems, setRetryItems] = reactExports.useState(null);
  const [sessionKey, setSessionKey] = reactExports.useState(0);
  const pendingCorrectRef = reactExports.useRef(null);
  const itemsRef = reactExports.useRef(null);
  const answerLockRef = reactExports.useRef(false);
  if (!itemsRef.current && (items == null ? void 0 : items.length)) itemsRef.current = items;
  const effectiveItems = retryItems || itemsRef.current;
  const srsBatched = useSrsAwareBatch(effectiveItems, {
    maxItems: retryItems ? retryItems.length : maxQuestions,
    getKey: srsAware && !retryItems ? getSrsKey : void 0,
    enabled: srsAware && !retryItems && typeof getSrsKey === "function",
    sessionKey
  });
  const pool = reactExports.useMemo(() => {
    if (!(effectiveItems == null ? void 0 : effectiveItems.length)) return [];
    if (srsAware && !retryItems && (srsBatched == null ? void 0 : srsBatched.length)) return srsBatched;
    return shuffleArray(effectiveItems).slice(0, retryItems ? retryItems.length : maxQuestions);
  }, [effectiveItems, retryItems, maxQuestions, srsAware, srsBatched]);
  const current = pool[idx] || null;
  const finished = idx >= pool.length && pool.length > 0;
  const { blanked, options, correctIdx, altKeys } = reactExports.useMemo(() => {
    if (!current) return { blanked: "", options: [], correctIdx: -1, altKeys: /* @__PURE__ */ new Set() };
    const word = getBlankWord(current);
    const sentence = getSentence(current);
    if (!word || !sentence) {
      return { blanked: sentence || "", options: [], correctIdx: -1, altKeys: /* @__PURE__ */ new Set() };
    }
    const blanked2 = sentence.replace(word, "＿＿＿＿");
    const alts = typeof getAltAnswers === "function" ? getAltAnswers(current) || [] : [];
    const altKeys2 = new Set(alts.map(stableAnswerKey).filter(Boolean));
    const pool2 = (itemsRef.current || []).filter((it) => {
      if (it === current) return false;
      const w = getBlankWord(it);
      return w && !altKeys2.has(stableAnswerKey(w));
    });
    const wrongs = selectDistractors(current, pool2, {
      count: Math.max(0, optionCount - 1),
      strategy: "auto",
      getAnswer: getBlankWord
    });
    const allOpts = shuffleArray([word, ...wrongs]);
    const correctKey = stableAnswerKey(word);
    const correctIdx2 = allOpts.findIndex((opt) => stableAnswerKey(opt) === correctKey);
    return { blanked: blanked2, options: allOpts, correctIdx: correctIdx2, altKeys: altKeys2 };
  }, [current, getSentence, getBlankWord, getAltAnswers, optionCount]);
  const invalidQuestion = !!current && (!blanked || options.length === 0 || correctIdx < 0);
  const handleAnswer = reactExports.useCallback((optIdx) => {
    if (answered || answerLockRef.current || invalidQuestion) return;
    answerLockRef.current = true;
    setSelected(optIdx);
    setAnswered(true);
    const picked = options[optIdx];
    const isCorrect2 = optIdx === correctIdx || picked && altKeys.has(stableAnswerKey(picked));
    if (isCorrect2) {
      if (qualityPicker) {
        pendingCorrectRef.current = current;
      } else {
        scoring.recordCorrect(current);
      }
      playSFX("correct");
    } else {
      scoring.recordWrong(current);
      playSFX("wrong");
    }
  }, [answered, correctIdx, current, altKeys, options, invalidQuestion, scoring, qualityPicker]);
  const commitPending = reactExports.useCallback((quality) => {
    if (pendingCorrectRef.current) {
      scoring.recordCorrect(pendingCorrectRef.current, quality);
      pendingCorrectRef.current = null;
    }
  }, [scoring]);
  const handleNext = reactExports.useCallback(() => {
    commitPending(void 0);
    answerLockRef.current = false;
    const nextIdx = idx + 1;
    if (nextIdx >= pool.length) {
      setIdx(nextIdx);
    } else {
      setIdx(nextIdx);
      setSelected(null);
      setAnswered(false);
    }
  }, [idx, pool.length, commitPending]);
  const handleGrade = reactExports.useCallback((quality) => {
    commitPending(quality);
    answerLockRef.current = false;
    const nextIdx = idx + 1;
    if (nextIdx >= pool.length) {
      setIdx(nextIdx);
    } else {
      setIdx(nextIdx);
      setSelected(null);
      setAnswered(false);
    }
  }, [idx, pool.length, commitPending]);
  reactExports.useEffect(() => {
    function onKey(e) {
      if (!current) return;
      if (!answered) {
        const num = parseInt(e.key);
        if (num >= 1 && num <= options.length) handleAnswer(num - 1);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleNext();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [answered, options.length, handleAnswer, handleNext, current]);
  if (!(items == null ? void 0 : items.length)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có dữ liệu. Chọn phần khác để bắt đầu." })
    ] });
  }
  if (finished) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModeResultsScreen,
      {
        scoring,
        getQuestion: getBlankWord,
        getCorrectInfo,
        showCombo: false,
        onRetryWrong: (wrongItems) => {
          answerLockRef.current = false;
          setRetryItems(wrongItems);
          setIdx(0);
          setSelected(null);
          setAnswered(false);
          setSessionKey((k) => k + 1);
          scoring.reset();
        },
        onRestart: () => {
          answerLockRef.current = false;
          setRetryItems(null);
          setIdx(0);
          setSelected(null);
          setAnswered(false);
          setSessionKey((k) => k + 1);
          scoring.reset();
        }
      }
    );
  }
  if (!current) return null;
  const info = answered && getCorrectInfo ? getCorrectInfo(current) : null;
  const isCorrect = answered && (selected === correctIdx || options[selected] && altKeys.has(stableAnswerKey(options[selected])));
  if (invalidQuestion) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini-fill", style: { width: `${(idx + 1) / pool.length * 100}%` } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-question", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-instruction", children: [
          "Câu ",
          idx + 1,
          "/",
          pool.length,
          " — Điền vào chỗ trống"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", style: { marginTop: 16 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "⚠️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Câu này có dữ liệu chưa đủ an toàn để chấm tự động. Hệ thống sẽ bỏ qua để tránh chấm sai." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: handleNext, children: idx + 1 < pool.length ? "Bỏ qua câu này →" : "Xem kết quả" })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini-fill", style: { width: `${(idx + 1) / pool.length * 100}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-question", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-instruction", children: [
        "Câu ",
        idx + 1,
        "/",
        pool.length,
        " — Điền vào chỗ trống"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScaffoldingLayer,
        {
          currentItem: current,
          text: (getBlankWord == null ? void 0 : getBlankWord(current)) || "",
          toolbarConfig: { hint: true, reveal: false, speak: false, bookmark: true, lookup: true, drawer: true }
        }
      ),
      !answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
        AIHintButton,
        {
          question: blanked,
          options,
          correctAnswer: getBlankWord(current),
          itemInfo: getCorrectInfo == null ? void 0 : getCorrectInfo(current)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        QuestionDisplay,
        {
          className: "n4-fill-sentence",
          text: blanked,
          ttsText: safeTtsText(blanked),
          viMeaning: getHint ? getHint(current) : null,
          viIsAnswer: false,
          answered
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quiz-options", children: options.map((opt, oi) => {
        let stateClass = "";
        if (answered) {
          stateClass = "answered";
          const optKey = stableAnswerKey(opt);
          const isAltCorrect = altKeys.has(optKey);
          if (oi === correctIdx || isAltCorrect) stateClass += " correct";
          else if (oi === selected) stateClass += " wrong";
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          AnswerOptionRow,
          {
            opt,
            idx: oi,
            stateClass,
            disabled: answered,
            onClick: () => handleAnswer(oi)
          },
          oi
        );
      }) }),
      answered && info && /* @__PURE__ */ jsxRuntimeExports.jsx(
        QuizFeedback,
        {
          isCorrect,
          correctAnswer: getBlankWord(current),
          correctInfo: info,
          userAnswer: options[selected],
          questionDisplay: blanked,
          questionId: (current == null ? void 0 : current.id) || (current == null ? void 0 : current.key),
          showQualityPicker: qualityPicker,
          onQualityPick: handleGrade,
          onNext: handleNext,
          isLastQuestion: idx + 1 >= pool.length
        }
      )
    ] })
  ] });
}
const FillBlankMode$1 = reactExports.memo(FillBlankMode);
export {
  FillBlankMode$1 as F
};
