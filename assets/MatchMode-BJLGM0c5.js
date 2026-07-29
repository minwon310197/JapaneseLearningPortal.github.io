import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { s as shuffleArray, u as useSrsAwareBatch } from "./PhaseRibbon-BrG3g-XS.js";
import { u as useScoreEngine } from "./useScoreEngine-fO3A-KMP.js";
import { f as speakJP, bA as playSFX } from "./feature-3d-CFvJkEt3.js";
import { M as ModeResultsScreen } from "./useQuestionMeta-D4bSCufi.js";
import { S as ScaffoldingLayer } from "./ScaffoldingLayer-BRKW1Dj-.js";
function useMatchEngine(items, {
  getWord,
  getMeaning,
  pairCount = 6
} = {}) {
  const [cards, setCards] = reactExports.useState([]);
  const [selectedIdx, setSelectedIdx] = reactExports.useState(null);
  const [matchedPairs, setMatchedPairs] = reactExports.useState(/* @__PURE__ */ new Set());
  const [wrongPair, setWrongPair] = reactExports.useState(null);
  const [attempts, setAttempts] = reactExports.useState(0);
  const [started, setStarted] = reactExports.useState(false);
  const [finished, setFinished] = reactExports.useState(false);
  const wrongTimerRef = reactExports.useRef(null);
  reactExports.useEffect(() => () => clearTimeout(wrongTimerRef.current), []);
  const initGame = reactExports.useCallback(() => {
    if (!(items == null ? void 0 : items.length)) return;
    const valid = items.filter((it) => getWord(it) !== getMeaning(it));
    if (!valid.length) return;
    const picked = shuffleArray(valid).slice(0, pairCount);
    const cardList = [];
    picked.forEach((item, pairId) => {
      cardList.push({ id: pairId * 2, type: "word", text: getWord(item), pairId, item });
      cardList.push({ id: pairId * 2 + 1, type: "meaning", text: getMeaning(item), pairId, item });
    });
    setCards(shuffleArray(cardList));
    setSelectedIdx(null);
    setMatchedPairs(/* @__PURE__ */ new Set());
    setWrongPair(null);
    setAttempts(0);
    setStarted(true);
    setFinished(false);
  }, [items, pairCount, getWord, getMeaning]);
  const selectCard = reactExports.useCallback((idx) => {
    if (finished) return null;
    if (idx < 0 || idx >= cards.length) return null;
    const card = cards[idx];
    if (!card || matchedPairs.has(card.pairId)) return null;
    if (wrongPair) return null;
    if (selectedIdx === null || selectedIdx === idx) {
      setSelectedIdx(selectedIdx === idx ? null : idx);
      return "selected";
    }
    const prev = cards[selectedIdx];
    setAttempts((a) => a + 1);
    if (prev.pairId === card.pairId && prev.type !== card.type) {
      const newMatched = new Set(matchedPairs);
      newMatched.add(card.pairId);
      setMatchedPairs(newMatched);
      setSelectedIdx(null);
      if (newMatched.size === pairCount) {
        setFinished(true);
      }
      return "correct";
    }
    setWrongPair([selectedIdx, idx]);
    clearTimeout(wrongTimerRef.current);
    wrongTimerRef.current = setTimeout(() => {
      setWrongPair(null);
      setSelectedIdx(null);
    }, 600);
    return "wrong";
  }, [cards, selectedIdx, matchedPairs, wrongPair, finished, pairCount]);
  const restart = reactExports.useCallback(() => initGame(), [initGame]);
  const getCardState = reactExports.useCallback((idx) => {
    const card = cards[idx];
    if (!card) return "hidden";
    if (matchedPairs.has(card.pairId)) return "matched";
    if (wrongPair == null ? void 0 : wrongPair.includes(idx)) return "wrong";
    if (selectedIdx === idx) return "selected";
    return "idle";
  }, [cards, matchedPairs, wrongPair, selectedIdx]);
  return {
    cards,
    selectedIdx,
    matchedPairs,
    attempts,
    started,
    finished,
    totalPairs: pairCount,
    matchedCount: matchedPairs.size,
    progress: pairCount > 0 ? matchedPairs.size / pairCount * 100 : 0,
    // Actions
    initGame,
    selectCard,
    restart,
    getCardState
  };
}
function useTimerEngine(initialSeconds = 0, { countdown = false, onTimeUp } = {}) {
  const [seconds, setSeconds] = reactExports.useState(initialSeconds);
  const [running, setRunning] = reactExports.useState(false);
  const intervalRef = reactExports.useRef(null);
  const onTimeUpRef = reactExports.useRef(onTimeUp);
  onTimeUpRef.current = onTimeUp;
  const tick = reactExports.useCallback(() => {
    setSeconds((prev) => {
      var _a;
      if (countdown) {
        if (prev <= 0) return 0;
        const next = prev - 1;
        if (next <= 0) {
          setRunning(false);
          (_a = onTimeUpRef.current) == null ? void 0 : _a.call(onTimeUpRef);
          return 0;
        }
        return next;
      }
      return prev + 1;
    });
  }, [countdown]);
  reactExports.useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(tick, 1e3);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running, tick]);
  const start = reactExports.useCallback(() => setRunning(true), []);
  const pause = reactExports.useCallback(() => setRunning(false), []);
  const reset = reactExports.useCallback((newTime) => {
    setRunning(false);
    setSeconds(newTime != null ? newTime : initialSeconds);
  }, [initialSeconds]);
  const formatted = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  return { seconds, running, formatted, start, pause, reset };
}
function MatchMode({
  items,
  getWord,
  getMeaning,
  getSrsKey,
  pairCount = 6,
  srsAware = false,
  trainerId
}) {
  var _a;
  const [sessionKey, setSessionKey] = reactExports.useState(0);
  const poolSize = Math.min((items == null ? void 0 : items.length) || 0, pairCount * 3);
  const srsBatched = useSrsAwareBatch(items, {
    maxItems: poolSize,
    getKey: srsAware ? getSrsKey : void 0,
    enabled: srsAware && typeof getSrsKey === "function",
    sessionKey
  });
  const effectiveItems = srsAware && (srsBatched == null ? void 0 : srsBatched.length) ? srsBatched : items;
  const match = useMatchEngine(effectiveItems, { getWord, getMeaning, pairCount });
  const timer = useTimerEngine(0);
  const scoring = useScoreEngine(trainerId);
  reactExports.useEffect(() => {
    match.initGame();
  }, [items, pairCount]);
  reactExports.useEffect(() => {
    if (match.started && !match.finished) {
      timer.start();
    }
    if (match.finished) {
      timer.pause();
    }
  }, [match.started, match.finished, timer]);
  const handleSelect = reactExports.useCallback((idx) => {
    const card = match.cards[idx];
    if (!card) return;
    if (card.type === "word") {
      speakJP(card.text);
    }
    const result = match.selectCard(idx);
    if (result === "correct") {
      scoring.recordCorrect(card.item);
      playSFX("correct");
    } else if (result === "wrong") {
      scoring.recordWrong(card.item);
      playSFX("wrong");
    }
  }, [match, scoring]);
  if (!(items == null ? void 0 : items.length)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Cần ít nhất ",
        pairCount,
        " mục để chơi."
      ] })
    ] });
  }
  if (!match.started) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-match-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-match-start-icon", children: "🔗" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Nối cặp từ vựng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-match-start-desc", children: [
        "Tìm ",
        pairCount,
        " cặp từ — nghĩa tương ứng"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: match.initGame, children: "▶ Bắt đầu" })
    ] });
  }
  if (match.finished) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModeResultsScreen,
      {
        scoring,
        getQuestion: getWord,
        getCorrectInfo: (item) => ({ reading: "", meaning: getMeaning(item) }),
        showCombo: false,
        onRestart: () => {
          var _a2, _b;
          setSessionKey((k) => k + 1);
          (_a2 = match.restart) == null ? void 0 : _a2.call(match);
          (_b = match.initGame) == null ? void 0 : _b.call(match);
          timer.reset(0);
          scoring.reset();
          timer.start();
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-stats", style: { marginTop: 12 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-stat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mode-results-stat-value", children: timer.formatted }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mode-results-stat-label", children: "Thời gian" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-stat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mode-results-stat-value", children: match.attempts }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mode-results-stat-label", children: "Lần thử" })
          ] })
        ] })
      }
    );
  }
  const lastFlipped = ((_a = match.flipped) == null ? void 0 : _a.length) ? match.cards[match.flipped[match.flipped.length - 1]] : null;
  const scaffItem = lastFlipped && lastFlipped.sourceItem || (items == null ? void 0 : items[0]) || null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-match-status", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-match-status-text", children: [
        "Đã nối: ",
        match.matchedCount,
        "/",
        match.totalPairs
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-timer-display", children: timer.formatted })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini-fill", style: { width: `${match.progress}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScaffoldingLayer,
      {
        currentItem: scaffItem,
        toolbarConfig: { hint: false, reveal: false, speak: true, bookmark: true, lookup: true, drawer: true }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-match-grid", style: { gridTemplateColumns: `repeat(${Math.min(4, match.cards.length / 2)}, 1fr)` }, children: match.cards.map((card, idx) => {
      const state = match.getCardState(idx);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-match-card ${card.type === "word" ? "jp" : ""} ${state}`,
          style: { "--card-i": idx },
          onClick: () => handleSelect(idx),
          disabled: state === "matched",
          children: card.text
        },
        card.id
      );
    }) })
  ] });
}
const MatchMode$1 = reactExports.memo(MatchMode);
export {
  MatchMode$1 as M
};
