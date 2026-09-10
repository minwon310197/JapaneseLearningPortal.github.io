import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { s as shuffleArray } from "./utils-zpwy_og2.js";
import { h as useLearningStore, J as stableAnswerKey, K as equalsAnswerText, L as speakJP, G as isN4Flag, x as playSFX } from "./index-BEJSIlFS.js";
import { u as useSrsAwareBatch } from "./PhaseRibbon-D3yQ4T2H.js";
import { s as selectDistractors } from "./index-B2ai8n3C.js";
import { u as useScoreEngine } from "./useScoreEngine-f-lCg0MN.js";
import { a as AIHintButton } from "./AIGameHelper-DJcZivzu.js";
import { h as hasJapanese, q as questionRomaji, s as safeTtsText, o as optionRomaji, u as useInGameLookup, a as useGameHelpers, M as ModeResultsScreen, v as viRevealAnswer, G as GameToolbar, Q as QuickDictionaryOverlay, C as ContentDetailDrawer } from "./ModeResultsScreen-5Gki9ifL.js";
import "./TrainerTopBar-BbQ9A_1j.js";
import "./registry-BAotxlgH.js";
import { Q as QuizFeedback } from "./QuizFeedback-Pap1aVYn.js";
function useSmartPool(items, { maxQuestions = 10, getKey, sessionKey = 0, enabled = true } = {}) {
  const srs = useLearningStore(enabled ? ((s) => s.srs) : () => null);
  const itemsRef = reactExports.useRef(null);
  if (!itemsRef.current && (items == null ? void 0 : items.length)) itemsRef.current = items;
  return reactExports.useMemo(() => {
    const src = itemsRef.current;
    if (!(src == null ? void 0 : src.length)) return [];
    const hasSrs = srs && Object.keys(srs).length > 0;
    if (!enabled || !hasSrs || !getKey) {
      return shuffleArray(src).slice(0, maxQuestions);
    }
    const weighted = src.map((item) => {
      var _a;
      const key = getKey(item);
      const level = key ? (_a = srs[key]) != null ? _a : -1 : -1;
      const weight = level <= 0 ? 4 : level === 1 ? 3 : level === 2 ? 2 : 1;
      return { item, weight };
    });
    const selected = [];
    const pool = [...weighted];
    const count = Math.min(maxQuestions, pool.length);
    for (let i = 0; i < count; i++) {
      const totalWeight = pool.reduce((s, w) => s + w.weight, 0);
      let rand = Math.random() * totalWeight;
      let pick = 0;
      for (let j = 0; j < pool.length; j++) {
        rand -= pool[j].weight;
        if (rand <= 0) {
          pick = j;
          break;
        }
      }
      selected.push(pool[pick].item);
      pool.splice(pick, 1);
    }
    return selected;
  }, [sessionKey, maxQuestions, srs, getKey, enabled]);
}
function useQuizEngine(items, {
  getQuestion,
  getAnswer,
  optionCount = 4,
  maxQuestions = 10,
  difficulty,
  getSrsKey,
  getSection,
  distractorStrategy = "auto",
  distractorPool,
  probedForm,
  srsAware = false
} = {}) {
  var _a;
  const [questionIdx, setQuestionIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [answered, setAnswered] = reactExports.useState(false);
  const [finished, setFinished] = reactExports.useState(false);
  const answerLockRef = reactExports.useRef(false);
  const correctIndexRef = reactExports.useRef(-1);
  const [sessionKey, setSessionKey] = reactExports.useState(0);
  const isAdaptive = difficulty === "adaptive";
  const itemsRef = reactExports.useRef(null);
  if (!itemsRef.current && (items == null ? void 0 : items.length)) itemsRef.current = items;
  const getAnswerRef = reactExports.useRef(getAnswer);
  const getSectionRef = reactExports.useRef(getSection);
  const getQuestionRef = reactExports.useRef(getQuestion);
  getAnswerRef.current = getAnswer;
  getSectionRef.current = getSection;
  getQuestionRef.current = getQuestion;
  const smartItems = useSmartPool(items, {
    maxQuestions,
    getKey: isAdaptive ? getSrsKey : void 0,
    sessionKey,
    enabled: isAdaptive
  });
  const srsBatched = useSrsAwareBatch(items, {
    maxItems: maxQuestions,
    getKey: srsAware ? getSrsKey : void 0,
    enabled: srsAware && typeof getSrsKey === "function",
    sessionKey
  });
  const sessionItems = reactExports.useMemo(() => {
    if (srsAware && (srsBatched == null ? void 0 : srsBatched.length)) return srsBatched;
    if (isAdaptive) return smartItems;
    const src = itemsRef.current;
    if (!(src == null ? void 0 : src.length)) return [];
    return shuffleArray(src).slice(0, maxQuestions);
  }, [sessionKey, maxQuestions, isAdaptive, smartItems, srsAware, srsBatched]);
  const currentItem = sessionItems[questionIdx] || null;
  const options = reactExports.useMemo(() => {
    var _a2, _b;
    const src = distractorPool != null ? distractorPool : itemsRef.current;
    if (!currentItem || !(src == null ? void 0 : src.length)) return [];
    const correctAnswer2 = getAnswerRef.current(currentItem);
    const correctKey = stableAnswerKey(correctAnswer2);
    const questionKey = stableAnswerKey((_a2 = getQuestionRef.current) == null ? void 0 : _a2.call(getQuestionRef, currentItem));
    const getDistractorAnswer = (candidate) => {
      var _a3;
      if (candidate !== currentItem && questionKey && stableAnswerKey((_a3 = getQuestionRef.current) == null ? void 0 : _a3.call(getQuestionRef, candidate)) === questionKey) return null;
      return getAnswerRef.current(candidate);
    };
    const wrongs = selectDistractors(currentItem, src, {
      count: Math.max(0, optionCount - 1),
      strategy: distractorStrategy,
      getAnswer: getDistractorAnswer,
      getSection: getSectionRef.current,
      probedForm
    });
    const shuffled = shuffleArray([correctAnswer2, ...wrongs]);
    const deduped = shuffled.filter((opt, index, arr) => {
      const key = stableAnswerKey(opt);
      return key && arr.findIndex((candidate) => stableAnswerKey(candidate) === key) === index;
    });
    if (!deduped.some((opt) => equalsAnswerText(opt, correctAnswer2))) {
      console.warn("[useQuizEngine] Re-inserting missing correct answer after normalization.", {
        correctAnswer: correctAnswer2,
        question: (_b = getQuestionRef.current) == null ? void 0 : _b.call(getQuestionRef, currentItem),
        correctKey
      });
      deduped.unshift(correctAnswer2);
    }
    return deduped.slice(0, Math.max(1, optionCount));
  }, [currentItem, optionCount, sessionKey, distractorStrategy, distractorPool, probedForm]);
  const correctAnswer = currentItem ? (_a = getAnswerRef.current) == null ? void 0 : _a.call(getAnswerRef, currentItem) : null;
  const correctIndex = correctAnswer != null ? options.findIndex((opt) => equalsAnswerText(opt, correctAnswer)) : -1;
  correctIndexRef.current = correctIndex;
  const answer = reactExports.useCallback((optIdx) => {
    if (answered || finished || answerLockRef.current) return null;
    answerLockRef.current = true;
    setSelected(optIdx);
    setAnswered(true);
    return optIdx === correctIndexRef.current;
  }, [answered, finished]);
  const next = reactExports.useCallback(() => {
    const nextIdx = questionIdx + 1;
    if (nextIdx >= sessionItems.length) {
      setFinished(true);
    } else {
      setQuestionIdx(nextIdx);
      setSelected(null);
      setAnswered(false);
      answerLockRef.current = false;
    }
  }, [questionIdx, sessionItems.length]);
  const restart = reactExports.useCallback((overrideItems) => {
    itemsRef.current = overrideItems != null ? overrideItems : items;
    setSessionKey((k) => k + 1);
    setQuestionIdx(0);
    setSelected(null);
    setAnswered(false);
    setFinished(false);
    answerLockRef.current = false;
  }, [items]);
  return {
    // State
    currentItem,
    questionText: currentItem ? getQuestion(currentItem) : "",
    options,
    correctIndex,
    selected,
    answered,
    finished,
    questionNumber: questionIdx + 1,
    totalQuestions: sessionItems.length,
    progress: sessionItems.length > 0 ? (questionIdx + 1) / sessionItems.length * 100 : 0,
    insufficient: !sessionItems.length || options.length < 2,
    // Actions
    answer,
    next,
    restart
  };
}
function useRewardPop() {
  const triggerReward = reactExports.useCallback(() => {
  }, []);
  const RewardLayer = reactExports.useCallback(() => null, []);
  return { triggerReward, RewardLayer };
}
function QuestionDisplay({
  text,
  // required — displayed question text (may contain blank markers)
  readingHint,
  // optional — hiragana reading to derive romaji from
  ttsText,
  // optional — override TTS text (defaults to safeTtsText(text))
  viMeaning,
  // optional — Vietnamese meaning for the toggle
  viIsAnswer = false,
  // when true, VI toggle is suppressed (would reveal the answer)
  answered = false,
  // when true, VI is always shown (answer already revealed)
  className = ""
}) {
  const [showVI, setShowVI] = reactExports.useState(false);
  const romaji = hasJapanese(text) ? questionRomaji(text, readingHint) : "";
  const speakable = safeTtsText(ttsText || text) || "";
  const canShowVIToggle = !!viMeaning && (!viIsAnswer || answered);
  const viVisible = answered || showVI;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-qdisplay", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-qdisplay-text ${className}`, children: text }),
    romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-qdisplay-romaji", "aria-label": `Romaji: ${romaji}`, children: romaji }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-qdisplay-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-btn n4-btn-ghost n4-btn-xs n4-qdisplay-tts",
          onClick: () => speakJP(speakable),
          title: "Nghe phát âm câu hỏi",
          "aria-label": "Đọc câu hỏi",
          children: "🔊"
        }
      ),
      canShowVIToggle && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `n4-btn n4-btn-ghost n4-btn-xs n4-qdisplay-vi-toggle${viVisible ? " is-active" : ""}`,
          onClick: () => setShowVI((v) => !v),
          title: viVisible ? "Ẩn nghĩa tiếng Việt" : "Hiện nghĩa tiếng Việt",
          "aria-label": viVisible ? "Ẩn nghĩa tiếng Việt" : "Hiện nghĩa tiếng Việt",
          children: [
            viVisible ? "👁" : "👁‍🗨",
            " VI"
          ]
        }
      )
    ] }),
    canShowVIToggle && viVisible && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-qdisplay-vi", role: "note", "aria-label": "Nghĩa tiếng Việt", children: viMeaning })
  ] });
}
const QuestionDisplay$1 = reactExports.memo(QuestionDisplay);
function AnswerOptionRow({
  opt,
  idx,
  stateClass = "",
  eliminated = false,
  disabled = false,
  onClick
}) {
  const romaji = optionRomaji(opt);
  const isJP = hasJapanese(opt);
  const handleTTS = (e) => {
    e.stopPropagation();
    if (opt) speakJP(opt);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-option-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: `n4-quiz-option n4-btn-glass ${stateClass}${eliminated ? " eliminated" : ""}`,
        onClick,
        disabled,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-quiz-option-idx", children: idx + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-quiz-option-body", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-quiz-option-text", children: eliminated ? /* @__PURE__ */ jsxRuntimeExports.jsx("s", { children: opt }) : opt }),
            romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-quiz-option-romaji", children: romaji })
          ] })
        ]
      }
    ),
    isJP && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: "n4-btn n4-btn-ghost n4-quiz-option-tts",
        onClick: handleTTS,
        title: `Đọc: ${opt}`,
        "aria-label": `Nghe đáp án ${idx + 1}`,
        children: "🔊"
      }
    )
  ] });
}
const AnswerOptionRow$1 = reactExports.memo(AnswerOptionRow);
function QuizMode({
  items,
  distractorPool,
  // optional known content for choices, independent of the tested items
  getQuestion,
  getAnswer,
  getQuestionDisplay,
  // optional: item => display text (e.g. kanji character)
  getCorrectInfo,
  // optional: item => { reading, meaning } for feedback
  getSrsKey,
  // optional: item => v:/k:/g: key — enables SRS-aware session batching
  getSection,
  // optional: item => section id — enables same-section distractors
  getAltAnswers,
  // optional: item => string[] of additional accepted answers
  onAnswerEvaluated,
  // optional: ({ item, isCorrect, selectedIndex, selectedAnswer, correctAnswer }) => void
  feedbackExtras,
  // optional: ({ item, isCorrect, selectedAnswer, correctAnswer }) => ReactNode
  optionCount = 4,
  maxQuestions = 10,
  speakOnShow = true,
  difficulty = "normal",
  srsAware = false,
  distractorStrategy = "auto",
  qualityPicker = true,
  trainerId
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const [retryItems, setRetryItems] = reactExports.useState(null);
  const [revealedWrong, setRevealedWrong] = reactExports.useState(null);
  const [drawerKey, setDrawerKey] = reactExports.useState(null);
  const [shake, setShake] = reactExports.useState(false);
  const [glow, setGlow] = reactExports.useState("");
  const effectiveItems = retryItems || items;
  const quiz = useQuizEngine(effectiveItems, {
    getQuestion,
    getAnswer,
    optionCount,
    maxQuestions: retryItems ? retryItems.length : maxQuestions,
    difficulty,
    getSrsKey,
    getSection,
    distractorStrategy,
    distractorPool,
    srsAware: srsAware && !retryItems
    // don't SRS-batch during retry-wrong runs
  });
  const scoring = useScoreEngine(trainerId);
  const { triggerReward, RewardLayer } = useRewardPop();
  const pendingCorrectRef = reactExports.useRef(null);
  const scaffoldingOn = isN4Flag("scaffolding");
  const currentItemKey = ((_a = quiz.currentItem) == null ? void 0 : _a.key) || null;
  const lookup = useInGameLookup();
  const helpers = useGameHelpers({
    currentItemKey,
    onOpenLookup: lookup.open,
    onOpenDrawer: (k) => setDrawerKey(k)
  });
  const toolbarText = ((_b = quiz.currentItem) == null ? void 0 : _b.word) || ((_c = quiz.currentItem) == null ? void 0 : _c.character) || quiz.questionText || "";
  reactExports.useEffect(() => {
    if (speakOnShow && quiz.currentItem) {
      speakJP(quiz.questionText);
    }
    setRevealedWrong(null);
  }, [quiz.questionNumber, speakOnShow]);
  const altKeySet = (() => {
    if (!quiz.currentItem || typeof getAltAnswers !== "function") return null;
    const alts = getAltAnswers(quiz.currentItem) || [];
    if (!alts.length) return null;
    return new Set(alts.map(stableAnswerKey).filter(Boolean));
  })();
  const handleAnswer = reactExports.useCallback((idx) => {
    var _a2;
    if (revealedWrong === idx) return;
    const engineCorrect = quiz.answer(idx);
    if (engineCorrect === null) return;
    const selectedAnswer2 = quiz.options[idx];
    const correctAnswer2 = quiz.options[quiz.correctIndex];
    const isCorrect2 = engineCorrect || !!altKeySet && altKeySet.has(stableAnswerKey(selectedAnswer2));
    if (isCorrect2) {
      if (qualityPicker) {
        pendingCorrectRef.current = quiz.currentItem;
      } else {
        scoring.recordCorrect(quiz.currentItem);
      }
      playSFX("correct");
      setGlow("success");
      setTimeout(() => setGlow(""), 600);
      const rect = (_a2 = document.querySelector(".n4-quiz-options")) == null ? void 0 : _a2.getBoundingClientRect();
      if (rect) triggerReward(rect.left + rect.width / 2, rect.top);
    } else {
      scoring.recordWrong(quiz.currentItem);
      playSFX("wrong");
      setShake(true);
      setGlow("error");
      setTimeout(() => {
        setShake(false);
        setGlow("");
      }, 400);
    }
    if (onAnswerEvaluated) {
      onAnswerEvaluated({
        item: quiz.currentItem,
        isCorrect: isCorrect2,
        selectedIndex: idx,
        selectedAnswer: selectedAnswer2,
        correctAnswer: correctAnswer2
      });
    }
  }, [quiz, scoring, onAnswerEvaluated, revealedWrong, altKeySet, qualityPicker, triggerReward]);
  const commitPending = reactExports.useCallback((quality) => {
    if (pendingCorrectRef.current) {
      scoring.recordCorrect(pendingCorrectRef.current, quality);
      pendingCorrectRef.current = null;
    }
  }, [scoring]);
  const handleNext = reactExports.useCallback(() => {
    commitPending(void 0);
    quiz.next();
  }, [commitPending, quiz]);
  const handleGrade = reactExports.useCallback((quality) => {
    commitPending(quality);
    quiz.next();
  }, [commitPending, quiz]);
  reactExports.useCallback(() => {
    const { powerUps, consumePowerUp } = useLearningStore.getState();
    if (!(powerUps == null ? void 0 : powerUps.revealOne) || quiz.answered) return;
    const wrongIndices = quiz.options.map((_, i) => i).filter((i) => i !== quiz.correctIndex && i !== revealedWrong);
    if (wrongIndices.length === 0) return;
    const pickIdx = wrongIndices[Math.floor(Math.random() * wrongIndices.length)];
    setRevealedWrong(pickIdx);
    consumePowerUp("revealOne");
  }, [quiz, revealedWrong]);
  reactExports.useCallback(() => {
    const { powerUps, consumePowerUp } = useLearningStore.getState();
    if (!(powerUps == null ? void 0 : powerUps.rerollToken) || quiz.answered) return;
    consumePowerUp("rerollToken");
    setRevealedWrong(null);
    pendingCorrectRef.current = null;
    quiz.next();
  }, [quiz]);
  reactExports.useEffect(() => {
    function onKey(e) {
      if (!quiz.currentItem) return;
      if (!quiz.answered) {
        const num = parseInt(e.key);
        if (num >= 1 && num <= quiz.options.length) {
          handleAnswer(num - 1);
        }
      } else if (e.key === "Enter" || e.key === " ") {
        if (!(qualityPicker && pendingCorrectRef.current)) {
          e.preventDefault();
          handleNext();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [quiz.answered, quiz.options.length, handleAnswer, quiz, qualityPicker, handleNext]);
  if (!(items == null ? void 0 : items.length)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có dữ liệu. Chọn phần khác để bắt đầu." })
    ] });
  }
  if (quiz.finished) {
    commitPending(void 0);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModeResultsScreen,
      {
        scoring,
        getQuestion,
        getCorrectInfo,
        onRetryWrong: (wrongItems) => {
          setRetryItems(wrongItems);
          quiz.restart();
          scoring.reset();
        },
        onRestart: () => {
          setRetryItems(null);
          quiz.restart(items);
          scoring.reset();
        }
      }
    );
  }
  const display = (getQuestionDisplay == null ? void 0 : getQuestionDisplay(quiz.currentItem)) || quiz.questionText;
  const info = quiz.answered && getCorrectInfo ? getCorrectInfo(quiz.currentItem) : null;
  const selectedAnswer = quiz.answered ? quiz.options[quiz.selected] : null;
  const correctAnswer = quiz.answered ? quiz.options[quiz.correctIndex] : null;
  const isCorrect = quiz.answered && (quiz.selected === quiz.correctIndex || !!altKeySet && altKeySet.has(stableAnswerKey(selectedAnswer)));
  qualityPicker && quiz.answered && isCorrect;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini-fill", style: { width: `${quiz.progress}%` } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-quiz-question ${shake ? "n4-screen-shake" : ""} ${glow ? "n4-glow-" + glow : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-instruction", children: [
          "Câu ",
          quiz.questionNumber,
          "/",
          quiz.totalQuestions,
          " — Chọn đáp án đúng"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuestionDisplay$1,
          {
            className: "n4-quiz-prompt",
            text: display,
            readingHint: (info == null ? void 0 : info.reading) || ((_d = getCorrectInfo == null ? void 0 : getCorrectInfo(quiz.currentItem)) == null ? void 0 : _d.reading),
            ttsText: quiz.questionText,
            viMeaning: ((_e = quiz.currentItem) == null ? void 0 : _e.vi) || ((_f = quiz.currentItem) == null ? void 0 : _f.meaning_vi) || null,
            viIsAnswer: viRevealAnswer(
              ((_g = getCorrectInfo == null ? void 0 : getCorrectInfo(quiz.currentItem)) == null ? void 0 : _g.meaning) || ((_h = quiz.options) == null ? void 0 : _h[quiz.correctIndex]),
              ((_i = quiz.currentItem) == null ? void 0 : _i.vi) || ((_j = quiz.currentItem) == null ? void 0 : _j.meaning_vi)
            ),
            answered: quiz.answered
          }
        ),
        scaffoldingOn && currentItemKey && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quiz-toolbar-row", style: { display: "flex", justifyContent: "center", marginBottom: "var(--n4-sp-3)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          GameToolbar,
          {
            helpers,
            config: { hint: true, reveal: false, speak: false, bookmark: true, lookup: true, drawer: true },
            text: toolbarText,
            compact: true
          }
        ) }),
        !quiz.answered && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "center", marginBottom: "var(--n4-sp-3)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          AIHintButton,
          {
            question: display,
            options: quiz.options,
            correctAnswer: quiz.options[quiz.correctIndex],
            itemInfo: getCorrectInfo == null ? void 0 : getCorrectInfo(quiz.currentItem)
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quiz-options", children: quiz.options.map((opt, idx) => {
          let stateClass = "";
          if (quiz.answered) {
            stateClass = "answered";
            const optKey = stableAnswerKey(opt);
            const isAltCorrect = !!altKeySet && altKeySet.has(optKey);
            if (idx === quiz.correctIndex || isAltCorrect) stateClass += " correct";
            else if (idx === quiz.selected) stateClass += " wrong";
          }
          const isEliminated = revealedWrong === idx;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            AnswerOptionRow$1,
            {
              opt,
              idx,
              stateClass,
              eliminated: isEliminated,
              disabled: quiz.answered || isEliminated,
              onClick: () => handleAnswer(idx)
            },
            idx
          );
        }) }),
        quiz.answered && info && /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizFeedback,
          {
            isCorrect,
            correctAnswer: quiz.options[quiz.correctIndex],
            correctInfo: info,
            userAnswer: quiz.options[quiz.selected],
            questionDisplay: display,
            questionId: ((_k = quiz.currentItem) == null ? void 0 : _k.id) || ((_l = quiz.currentItem) == null ? void 0 : _l.key),
            showQualityPicker: qualityPicker,
            onQualityPick: handleGrade,
            onNext: handleNext,
            isLastQuestion: quiz.questionNumber >= quiz.totalQuestions,
            children: feedbackExtras && feedbackExtras({
              item: quiz.currentItem,
              isCorrect,
              selectedAnswer,
              correctAnswer
            })
          }
        )
      ] })
    ] }),
    scaffoldingOn && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        QuickDictionaryOverlay,
        {
          active: lookup.active,
          onClose: lookup.close,
          onSelect: (item) => {
            setDrawerKey(item.key);
            lookup.close();
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ContentDetailDrawer,
        {
          itemKey: drawerKey,
          open: !!drawerKey,
          onClose: () => setDrawerKey(null)
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RewardLayer, {})
  ] });
}
const QuizMode$1 = reactExports.memo(QuizMode);
export {
  AnswerOptionRow$1 as A,
  QuestionDisplay$1 as Q,
  QuizMode$1 as a
};
