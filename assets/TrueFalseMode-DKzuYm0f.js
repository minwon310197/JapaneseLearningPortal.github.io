const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SwipeGesture-BqnwRsF-.js","./vendor-react-BUL8WuXG.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { u as useScoreEngine } from "./useScoreEngine-f-lCg0MN.js";
import { u as useSrsAwareBatch } from "./PhaseRibbon-D3yQ4T2H.js";
import { x as playSFX } from "./index-BEJSIlFS.js";
import { A as AIExplainButton, a as AIHintButton } from "./AIGameHelper-DJcZivzu.js";
import { M as ModeResultsScreen } from "./ModeResultsScreen-5Gki9ifL.js";
import { S as ScaffoldingLayer } from "./ScaffoldingLayer-BwAQh4aw.js";
import { Q as QuestionDisplay } from "./QuizMode-DQg4kJzy.js";
const SwipeGesture = reactExports.lazy(() => __vitePreload(() => import("./SwipeGesture-BqnwRsF-.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url));
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function TrueFalseMode({
  items,
  getDisplay,
  getMeaning,
  getCorrectInfo,
  getSrsKey,
  maxQuestions = 15,
  srsAware = false,
  trainerId
}) {
  const scoring = useScoreEngine(trainerId);
  const [idx, setIdx] = reactExports.useState(0);
  const [answered, setAnswered] = reactExports.useState(false);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [retryItems, setRetryItems] = reactExports.useState(null);
  const timerRef = reactExports.useRef(null);
  const answerLockRef = reactExports.useRef(false);
  const [sessionKey, setSessionKey] = reactExports.useState(0);
  const itemsRef = reactExports.useRef(null);
  if (!itemsRef.current && (items == null ? void 0 : items.length)) itemsRef.current = items;
  const getMeaningRef = reactExports.useRef(getMeaning);
  const maxQuestionsRef = reactExports.useRef(maxQuestions);
  const effectiveItems = retryItems || itemsRef.current;
  const srsBatched = useSrsAwareBatch(effectiveItems, {
    maxItems: retryItems ? retryItems.length : maxQuestions,
    getKey: srsAware && !retryItems ? getSrsKey : void 0,
    enabled: srsAware && !retryItems && typeof getSrsKey === "function",
    sessionKey
  });
  const pool = reactExports.useMemo(() => {
    const src = effectiveItems;
    const meaningFn = getMeaningRef.current;
    const maxQ = maxQuestionsRef.current;
    if (!(src == null ? void 0 : src.length)) return [];
    const selected = srsAware && !retryItems && (srsBatched == null ? void 0 : srsBatched.length) ? srsBatched : shuffleArray(src).slice(0, retryItems ? retryItems.length : maxQ);
    const shuffled = selected;
    if (!(shuffled == null ? void 0 : shuffled.length)) return [];
    const allMeanings = (itemsRef.current || []).map((it) => meaningFn(it)).filter(Boolean);
    const uniqueMeanings = [...new Set(allMeanings)];
    const trueCount = Math.floor(selected.length / 2) + (Math.random() > 0.5 ? 1 : 0);
    const booleans = shuffleArray([
      ...Array(Math.min(trueCount, selected.length)).fill(true),
      ...Array(Math.max(0, selected.length - trueCount)).fill(false)
    ]);
    return selected.map((item, i) => {
      if (booleans[i] || uniqueMeanings.length < 2) {
        return { item, shownMeaning: meaningFn(item), isTrue: true };
      } else {
        const correct = meaningFn(item);
        const wrongs = uniqueMeanings.filter((m) => m !== correct);
        if (wrongs.length === 0) {
          return { item, shownMeaning: correct, isTrue: true };
        }
        const wrongMeaning = wrongs[Math.floor(Math.random() * wrongs.length)];
        return { item, shownMeaning: wrongMeaning, isTrue: false };
      }
    });
  }, [sessionKey, retryItems, srsAware, srsBatched]);
  const current = pool[idx] || null;
  const finished = idx >= pool.length && pool.length > 0;
  const handleAnswer = reactExports.useCallback((playerSaidTrue) => {
    if (answered || !current || answerLockRef.current) return;
    answerLockRef.current = true;
    setAnswered(true);
    const isCorrect = playerSaidTrue === current.isTrue;
    if (isCorrect) {
      scoring.recordCorrect(current.item);
      playSFX("correct");
      setFeedback("correct");
    } else {
      scoring.recordWrong(current.item);
      playSFX("wrong");
      setFeedback("wrong");
    }
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      answerLockRef.current = false;
      setIdx((i) => i + 1);
      setAnswered(false);
      setFeedback(null);
    }, 1200);
  }, [answered, current, scoring]);
  reactExports.useEffect(() => () => clearTimeout(timerRef.current), []);
  reactExports.useEffect(() => {
    function onKey(e) {
      if (answered || !current) return;
      if (e.key === "ArrowRight" || e.key === "o" || e.key === "O") {
        e.preventDefault();
        handleAnswer(true);
      } else if (e.key === "ArrowLeft" || e.key === "x" || e.key === "X") {
        e.preventDefault();
        handleAnswer(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [answered, current, handleAnswer]);
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
        getQuestion: getDisplay,
        getCorrectInfo,
        onRetryWrong: (wrongItems) => {
          clearTimeout(timerRef.current);
          timerRef.current = null;
          answerLockRef.current = false;
          setRetryItems(wrongItems);
          setSessionKey((k) => k + 1);
          setIdx(0);
          setAnswered(false);
          setFeedback(null);
          scoring.reset();
        },
        onRestart: () => {
          clearTimeout(timerRef.current);
          timerRef.current = null;
          answerLockRef.current = false;
          setRetryItems(null);
          setSessionKey((k) => k + 1);
          setIdx(0);
          setAnswered(false);
          setFeedback(null);
          scoring.reset();
        }
      }
    );
  }
  if (!current) return null;
  getCorrectInfo == null ? void 0 : getCorrectInfo(current.item);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini-fill", style: { width: `${(idx + 1) / pool.length * 100}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tf-container" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SwipeGesture,
      {
        axes: ["x"],
        disabled: answered,
        ariaOptionMap: { left: "Sai", right: "Đúng" },
        onSwipe: (dir) => {
          if (!answered) handleAnswer(dir === "right");
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-tf-container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-tf-instruction", children: [
            "Câu ",
            idx + 1,
            "/",
            pool.length,
            " — Đúng hay Sai?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-tf-card${feedback === "correct" ? " feedback-correct" : feedback === "wrong" ? " feedback-wrong" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              QuestionDisplay,
              {
                className: "n4-tf-display-wrap",
                text: getDisplay(current.item),
                viMeaning: null,
                viIsAnswer: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-tf-meaning", children: [
              "= ",
              current.shownMeaning
            ] })
          ] }),
          feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-tf-feedback ${feedback}`, children: [
            feedback === "correct" ? "✅ Đúng rồi!" : `❌ Sai! Nghĩa đúng: ${getMeaning(current.item)}`,
            feedback === "wrong" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              AIExplainButton,
              {
                question: getDisplay(current.item),
                answer: getMeaning(current.item),
                userAnswer: current.shownMeaning,
                isCorrect: false,
                itemInfo: getCorrectInfo == null ? void 0 : getCorrectInfo(current.item)
              }
            )
          ] }),
          !answered && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ScaffoldingLayer,
              {
                currentItem: current.item,
                text: getDisplay(current.item),
                toolbarConfig: { hint: true, reveal: false, speak: true, bookmark: true, lookup: true, drawer: true }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AIHintButton,
              {
                question: `${getDisplay(current.item)} = ${current.shownMeaning}`,
                options: ["Đúng", "Sai"],
                correctAnswer: current.isTrue ? "Đúng" : "Sai",
                itemInfo: `${getDisplay(current.item)} — ${getMeaning(current.item)}`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-tf-buttons", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "n4-tf-btn false",
                disabled: answered,
                onClick: () => handleAnswer(false),
                children: "✕ Sai"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "n4-tf-btn true",
                disabled: answered,
                onClick: () => handleAnswer(true),
                children: "○ Đúng"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tf-hint", children: "← Vuốt trái = Sai · Vuốt phải = Đúng → (hoặc nhấn X / O)" })
        ] })
      }
    ) })
  ] });
}
const TrueFalseMode$1 = reactExports.memo(TrueFalseMode);
export {
  TrueFalseMode$1 as T
};
