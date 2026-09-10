import { r as reactExports } from "./vendor-react-BUL8WuXG.js";
import { h as useLearningStore, aK as getItemLearningKey, aL as getItemLegacyLearningKey, aM as srs } from "./index-BEJSIlFS.js";
const TrainerContext = reactExports.createContext(null);
const XP_BASE = 5;
const XP_COMBO_CAP = 10;
function calcXp(combo, comboCapBonus = 0) {
  return XP_BASE + Math.min(combo, XP_COMBO_CAP + Math.max(0, Math.round(comboCapBonus)));
}
function createLearningSessionId(trainerId) {
  var _a, _b;
  const suffix = ((_b = (_a = globalThis.crypto) == null ? void 0 : _a.randomUUID) == null ? void 0 : _b.call(_a)) || `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  return `${trainerId || "trainer"}:${suffix}`;
}
function useScoreEngine(explicitTrainerId) {
  const contextTrainerId = reactExports.useContext(TrainerContext);
  const trainerId = explicitTrainerId || contextTrainerId;
  const [score, setScore] = reactExports.useState(0);
  const [total, setTotal] = reactExports.useState(0);
  const [combo, setCombo] = reactExports.useState(0);
  const [maxCombo, setMaxCombo] = reactExports.useState(0);
  const [history, setHistory] = reactExports.useState([]);
  const recordAnswer = useLearningStore((s) => s.recordAnswer);
  const recordTrainerPlay = useLearningStore((s) => s.recordTrainerPlay);
  const recordGameSession = useLearningStore((s) => s.recordGameSession);
  const pendingTrainerStatsRef = reactExports.useRef({ trainerId: null, correct: 0, total: 0 });
  const nonCriticalTimerRef = reactExports.useRef(null);
  const sessionStartRef = reactExports.useRef(Date.now());
  const sessionScoreRef = reactExports.useRef(0);
  const sessionTotalRef = reactExports.useRef(0);
  const sessionRecordedRef = reactExports.useRef(false);
  const sessionIdRef = reactExports.useRef(createLearningSessionId(trainerId));
  const itemStreakRef = reactExports.useRef(/* @__PURE__ */ new Map());
  const flushNonCritical = reactExports.useCallback(() => {
    if (nonCriticalTimerRef.current) {
      clearTimeout(nonCriticalTimerRef.current);
      nonCriticalTimerRef.current = null;
    }
    const pending = pendingTrainerStatsRef.current;
    if (pending.trainerId && pending.total > 0) {
      recordTrainerPlay(pending.trainerId, pending.correct, pending.total);
      pendingTrainerStatsRef.current = { trainerId: null, correct: 0, total: 0 };
    }
    const p = pendingTrainerStatsRef.current;
    if (p.trainerId === null && pending.total >= 5) {
      pending.total > 0 ? pending.correct / pending.total : 0;
    }
  }, [recordTrainerPlay]);
  const scheduleNonCritical = reactExports.useCallback((correctDelta, totalDelta) => {
    if (trainerId) {
      const pending = pendingTrainerStatsRef.current;
      if (pending.trainerId && pending.trainerId !== trainerId && pending.total > 0) {
        flushNonCritical();
      }
      pendingTrainerStatsRef.current = {
        trainerId,
        correct: pendingTrainerStatsRef.current.correct + correctDelta,
        total: pendingTrainerStatsRef.current.total + totalDelta
      };
    }
    if (nonCriticalTimerRef.current) clearTimeout(nonCriticalTimerRef.current);
    nonCriticalTimerRef.current = setTimeout(flushNonCritical, 250);
  }, [flushNonCritical, trainerId]);
  const recordCompletedSession = reactExports.useCallback(() => {
    const sessionTotal = sessionTotalRef.current;
    if (!trainerId || sessionTotal <= 0 || sessionRecordedRef.current || typeof recordGameSession !== "function") return;
    recordGameSession(
      trainerId,
      sessionScoreRef.current,
      sessionTotal,
      Math.max(0, Date.now() - sessionStartRef.current),
      {
        answersAlreadyRecorded: true,
        id: sessionIdRef.current,
        at: sessionStartRef.current
      }
    );
    sessionRecordedRef.current = true;
  }, [recordGameSession, trainerId]);
  const resetSessionTracking = reactExports.useCallback(() => {
    sessionStartRef.current = Date.now();
    sessionScoreRef.current = 0;
    sessionTotalRef.current = 0;
    sessionRecordedRef.current = false;
    sessionIdRef.current = createLearningSessionId(trainerId);
  }, [trainerId]);
  reactExports.useEffect(() => {
    resetSessionTracking();
    return () => {
      flushNonCritical();
      recordCompletedSession();
    };
  }, [flushNonCritical, recordCompletedSession, resetSessionTracking]);
  const recordCorrect = reactExports.useCallback((item, qualityOverride) => {
    setScore((s) => s + 1);
    setTotal((t) => t + 1);
    let nextCombo = 0;
    setCombo((c) => {
      nextCombo = c + 1;
      return nextCombo;
    });
    queueMicrotask(() => {
      setMaxCombo((m) => Math.max(m, nextCombo));
    });
    setHistory((h) => [...h, { correct: true, item, quality: Number.isFinite(qualityOverride) ? qualityOverride : null }]);
    sessionScoreRef.current += 1;
    sessionTotalRef.current += 1;
    recordAnswer(true, { trainerId, source: "game-answer" });
    if (item) {
      const key = getItemLearningKey(item);
      if (key) {
        if (window.updateSRS) window.updateSRS(getItemLegacyLearningKey(item) || key, true);
        const streakMap = itemStreakRef.current;
        const prevStreak = streakMap.get(key) || 0;
        const nextStreak = prevStreak + 1;
        streakMap.set(key, nextStreak);
        let quality;
        if (Number.isFinite(qualityOverride)) {
          quality = Math.max(0, Math.min(3, qualityOverride | 0));
          if (quality === 0) streakMap.set(key, 0);
        } else {
          quality = nextStreak >= 3 ? 3 : 2;
        }
        try {
          srs.recordReview({ itemKey: key, quality });
        } catch (e) {
        }
      }
    }
    scheduleNonCritical(1, 1);
  }, [recordAnswer, scheduleNonCritical, trainerId]);
  const recordWrong = reactExports.useCallback((item) => {
    setTotal((t) => t + 1);
    setCombo(0);
    setHistory((h) => [...h, { correct: false, item }]);
    sessionTotalRef.current += 1;
    recordAnswer(false, { trainerId, source: "game-answer" });
    if (item) {
      const key = getItemLearningKey(item);
      if (key) {
        if (window.updateSRS) window.updateSRS(getItemLegacyLearningKey(item) || key, false);
        itemStreakRef.current.set(key, 0);
        try {
          srs.recordReview({ itemKey: key, quality: 0 });
        } catch (e) {
        }
      }
    }
    scheduleNonCritical(0, 1);
  }, [recordAnswer, scheduleNonCritical, trainerId]);
  const reset = reactExports.useCallback(() => {
    flushNonCritical();
    recordCompletedSession();
    setScore(0);
    setTotal(0);
    setCombo(0);
    setMaxCombo(0);
    setHistory([]);
    itemStreakRef.current = /* @__PURE__ */ new Map();
    resetSessionTracking();
  }, [flushNonCritical, recordCompletedSession, resetSessionTracking]);
  const accuracy = total > 0 ? Math.round(score / total * 100) : 0;
  return {
    score,
    total,
    combo,
    maxCombo,
    accuracy,
    history,
    onCorrect: recordCorrect,
    onWrong: recordWrong,
    recordCorrect,
    recordWrong,
    reset
  };
}
export {
  TrainerContext as T,
  calcXp as c,
  useScoreEngine as u
};
