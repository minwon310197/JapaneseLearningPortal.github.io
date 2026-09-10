import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-BbQ9A_1j.js";
import { u as useScoreEngine, T as TrainerContext } from "./useScoreEngine-f-lCg0MN.js";
import { a as QuizMode } from "./QuizMode-DQg4kJzy.js";
import "./MatchMode-ftsrtm9f.js";
import { T as TrueFalseMode } from "./TrueFalseMode-DKzuYm0f.js";
import { F as FlashcardMode } from "./FlashcardMode-CA-Jcray.js";
import { u as useVocabItems, c as useKanjiItems, a as useGrammarItems } from "./useDataHelper-DtTUT9Wk.js";
import { u as useGrammarGameItems } from "./useGrammarQuiz-CkAk5tho.js";
import { bv as isMistakePendingReview, au as selectDueSrsEntries, aJ as getStudyDateKey, bw as makeVocabKey, bx as vocabKey, by as makeKanjiKey, bz as kanjiKey, bA as makeGrammarKey, bB as grammarKey, x as playSFX, L as speakJP, h as useLearningStore, F as content } from "./index-BEJSIlFS.js";
import { u as useGameStore } from "./useGameEngine-BKAIg4EU.js";
import { E as EMPTY_OBJ } from "./empty-Bvm-mx50.js";
import "./useDialogFocus-CowhWfi-.js";
import "./vendor-router-Dx6RIovR.js";
import "./HitPause-BapLYhfu.js";
import "./study-results-DtyGPqxP.js";
import "./quest-chains-CiwzmCpJ.js";
import "./registry-BAotxlgH.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./utils-zpwy_og2.js";
import "./PhaseRibbon-D3yQ4T2H.js";
import "./index-B2ai8n3C.js";
import "./AIGameHelper-DJcZivzu.js";
import "./useAIKey-CpSw0zmN.js";
import "./client-wNJ1tNgU.js";
import "./api-BAg1LJRR.js";
import "./content-errors-D90Pz2ps.js";
import "./ModeResultsScreen-5Gki9ifL.js";
import "./QuizFeedback-Pap1aVYn.js";
import "./ScaffoldingLayer-BwAQh4aw.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
function stableHash(value) {
  let hash = 2166136261;
  for (const char of String(value || "")) {
    hash ^= char.codePointAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}
function clean(value) {
  return String(value || "").trim();
}
function uniqueByIdentity(items) {
  const seen = /* @__PURE__ */ new Set();
  return items.filter((item) => {
    if (!(item == null ? void 0 : item.identity) || seen.has(item.identity)) return false;
    seen.add(item.identity);
    return true;
  });
}
function toVocabCandidate(item) {
  const word = clean(item == null ? void 0 : item.word);
  const meaning = clean(item == null ? void 0 : item.meaning);
  if (!word || !meaning) return null;
  return {
    identity: `vocab:${word}`,
    aliases: [makeVocabKey(word), vocabKey(word)],
    item: { ...item, key: item.key || makeVocabKey(word), word, reading: clean(item.reading), meaning, type: "vocab", example: clean(item.example) }
  };
}
function toKanjiCandidate(item) {
  const word = clean((item == null ? void 0 : item.kanji) || (item == null ? void 0 : item.character));
  const meaning = clean((item == null ? void 0 : item.meaning) || (item == null ? void 0 : item.title));
  if (!word || !meaning) return null;
  return {
    identity: `kanji:${word}`,
    aliases: [makeKanjiKey(word), kanjiKey(word)],
    item: { ...item, key: item.key || makeKanjiKey(word), word, reading: clean(item.on || item.kun || item.reading), meaning, type: "kanji", example: "" }
  };
}
function grammarMeaning(item) {
  const content2 = clean(item == null ? void 0 : item.content);
  const line = content2.split("\n").find((value) => value.trim() && !value.startsWith("#") && !value.startsWith("|") && !value.startsWith("---"));
  return clean((item == null ? void 0 : item.vi) || (item == null ? void 0 : item.meaning) || line);
}
function toGrammarCandidate(item) {
  const word = clean((item == null ? void 0 : item.sentence) || (item == null ? void 0 : item.title) || (item == null ? void 0 : item.pattern));
  const meaning = grammarMeaning(item);
  if (!word || !meaning) return null;
  const stableId = clean((item == null ? void 0 : item.id) || (item == null ? void 0 : item.title) || (item == null ? void 0 : item.pattern) || word);
  return {
    identity: `grammar:${stableId}`,
    aliases: [makeGrammarKey(stableId), grammarKey(stableId)],
    item: {
      ...item,
      key: item.key || makeGrammarKey(stableId),
      word,
      reading: clean((item == null ? void 0 : item.romaji) || (item == null ? void 0 : item.reading)),
      meaning,
      type: "grammar",
      example: clean((item == null ? void 0 : item.explanation) || (item == null ? void 0 : item.title))
    }
  };
}
function rotate(items, count, seed) {
  if (!items.length || count <= 0) return [];
  const offset = stableHash(seed) % items.length;
  return Array.from({ length: Math.min(count, items.length) }, (_, index) => items[(offset + index) % items.length]);
}
function buildCandidates({ vocabItems = [], kanjiItems = [], grammarItems = [], grammarGameItems = [] } = {}) {
  return uniqueByIdentity([
    ...vocabItems.map(toVocabCandidate),
    ...kanjiItems.map(toKanjiCandidate),
    ...grammarGameItems.map(toGrammarCandidate),
    ...grammarItems.map(toGrammarCandidate)
  ].filter(Boolean));
}
function buildDailyPracticePool(input = {}) {
  return buildCandidates(input).map((candidate) => candidate.item);
}
function buildAliasIndex(candidates) {
  const byAlias = /* @__PURE__ */ new Map();
  for (const candidate of candidates) {
    for (const alias of candidate.aliases) byAlias.set(alias, candidate);
  }
  return byAlias;
}
function selectDuePracticeItems(input = {}) {
  const candidates = buildCandidates(input);
  const byAlias = buildAliasIndex(candidates);
  const selected = [];
  const used = /* @__PURE__ */ new Set();
  for (const entry of selectDueSrsEntries(input.srs, input.now)) {
    const candidate = byAlias.get(entry.key);
    if (!candidate || used.has(candidate.identity)) continue;
    used.add(candidate.identity);
    selected.push(candidate.item);
    if (selected.length >= (input.limit || 15)) break;
  }
  return selected;
}
function selectPendingMistakeItems(input = {}) {
  const candidates = buildCandidates(input);
  const byAlias = buildAliasIndex(candidates);
  const selected = [];
  const used = /* @__PURE__ */ new Set();
  const mistakesInOrder = Object.entries(input.mistakes || {}).filter(([, value]) => isMistakePendingReview(value)).sort(([leftKey, left], [rightKey, right]) => {
    const countDelta = Number((right == null ? void 0 : right.count) || right || 0) - Number((left == null ? void 0 : left.count) || left || 0);
    if (countDelta) return countDelta;
    return Number((right == null ? void 0 : right.lastWrongAt) || 0) - Number((left == null ? void 0 : left.lastWrongAt) || 0) || leftKey.localeCompare(rightKey);
  });
  for (const [key] of mistakesInOrder) {
    const candidate = byAlias.get(key);
    if (!candidate || used.has(candidate.identity)) continue;
    used.add(candidate.identity);
    selected.push(candidate.item);
    if (selected.length >= (input.limit || 15)) break;
  }
  return selected;
}
function selectDailyPracticeItems({
  vocabItems = [],
  kanjiItems = [],
  grammarItems = [],
  grammarGameItems = [],
  srs = {},
  mistakes = {},
  now = Date.now(),
  limit = 10
} = {}) {
  const candidates = buildCandidates({ vocabItems, kanjiItems, grammarItems, grammarGameItems });
  const byAlias = buildAliasIndex(candidates);
  const selected = [];
  const used = /* @__PURE__ */ new Set();
  const add = (candidate) => {
    if (!candidate || used.has(candidate.identity) || selected.length >= limit) return;
    used.add(candidate.identity);
    selected.push(candidate);
  };
  const due = selectDueSrsEntries(srs, now);
  for (const entry of due) add(byAlias.get(entry.key));
  const mistakesInOrder = Object.entries(mistakes || {}).filter(([, value]) => isMistakePendingReview(value)).sort(([leftKey, left], [rightKey, right]) => {
    const countDelta = Number((right == null ? void 0 : right.count) || right || 0) - Number((left == null ? void 0 : left.count) || left || 0);
    if (countDelta) return countDelta;
    return Number((right == null ? void 0 : right.lastWrongAt) || 0) - Number((left == null ? void 0 : left.lastWrongAt) || 0) || leftKey.localeCompare(rightKey);
  });
  for (const [key] of mistakesInOrder) add(byAlias.get(key));
  const knownAliases = new Set(Object.keys(srs || {}));
  const fresh = candidates.filter((candidate) => candidate.aliases.every((alias) => !knownAliases.has(alias)) && !used.has(candidate.identity));
  const day = getStudyDateKey(now);
  for (const candidate of rotate(fresh, limit - selected.length, `${day}:fresh`)) add(candidate);
  const notDue = candidates.filter((candidate) => !used.has(candidate.identity));
  for (const candidate of rotate(notDue, limit - selected.length, `${day}:fallback`)) add(candidate);
  return selected.map((candidate) => candidate.item);
}
const QUEST_TIERS = [
  { name: "Bronze Quest", icon: "🥉", threshold: 3 },
  { name: "Silver Quest", icon: "🥈", threshold: 6 },
  { name: "Gold Quest", icon: "🥇", threshold: 9 },
  { name: "Legendary Quest", icon: "👑", threshold: 12 }
];
function DailyQuestMode({ items = [], streakDays = 0 }) {
  const { score, combo, hp, addScore, takeDamage, resetCombo } = useGameStore(useShallow((s) => ({
    score: s.score,
    combo: s.combo,
    hp: s.hp,
    addScore: s.addScore,
    takeDamage: s.takeDamage,
    resetCombo: s.resetCombo
  })));
  const scoring = useScoreEngine();
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [finished, setFinished] = reactExports.useState(false);
  const [rewards, setRewards] = reactExports.useState([]);
  const [questComplete, setQuestComplete] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  const correctCount = reactExports.useRef(0);
  reactExports.useEffect(() => {
    useGameStore.setState({ hp: 100, score: 0, combo: 0, gameState: "PLAYING" });
  }, []);
  const pool = reactExports.useMemo(() => {
    const valid = items.filter((it) => it.word && it.meaning);
    return [...valid].sort(() => Math.random() - 0.5).slice(0, 15);
  }, [items]);
  const current = pool[qIdx];
  const currentTier = QUEST_TIERS.reduce((acc, t) => correctCount.current >= t.threshold ? t : acc, QUEST_TIERS[0]);
  const options = reactExports.useMemo(() => {
    if (!current) return [];
    const others = pool.filter((_, i) => i !== qIdx).sort(() => Math.random() - 0.5).slice(0, 3).map((it) => it.meaning);
    return [current.meaning, ...others].sort(() => Math.random() - 0.5);
  }, [current, pool, qIdx]);
  const handleAnswer = reactExports.useCallback((opt) => {
    if (feedback || !current) return;
    setSelected(opt);
    const isCorrect = opt === current.meaning;
    const streakBonus = Math.min(streakDays * 0.1, 1);
    if (isCorrect) {
      playSFX("correct");
      const points = Math.round((150 + combo * 20) * (1 + streakBonus));
      addScore(points);
      correctCount.current++;
      scoring.recordCorrect(current);
      setFeedback("correct");
      if (correctCount.current % 3 === 0) {
        const drops = ["💎 Crystal x1", "🪙 Gold x50", "📜 Scroll x1", "🧪 Elixir x1", "⭐ Star x1"];
        const drop = drops[Math.floor(Math.random() * drops.length)];
        setRewards((r) => [...r, drop]);
        setQuestComplete(true);
        setTimeout(() => setQuestComplete(false), 1500);
      }
    } else {
      playSFX("wrong");
      takeDamage(12);
      resetCombo();
      scoring.recordWrong(current);
      setFeedback("wrong");
    }
    timerRef.current = setTimeout(() => {
      setFeedback(null);
      setSelected(null);
      if (hp <= 0 || qIdx + 1 >= pool.length) {
        setFinished(true);
      } else {
        setQIdx((i) => i + 1);
      }
    }, 1200);
  }, [feedback, current, combo, streakDays, qIdx, pool.length, hp, addScore, takeDamage, resetCombo, scoring]);
  reactExports.useEffect(() => () => clearTimeout(timerRef.current), []);
  if (pool.length < 4) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📜" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu cho Nhiệm vụ ngày." })
    ] });
  }
  if (finished) {
    const pct = pool.length > 0 ? Math.round(correctCount.current / pool.length * 100) : 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quest-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quest-result-icon", children: currentTier.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quest-result-title", children: "HOÀN THÀNH NHIỆM VỤ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quest-result-tier", children: currentTier.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quest-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quest-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "quest-stat-value", children: correctCount.current }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "quest-stat-label", children: "Giải đúng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quest-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "quest-stat-value", children: [
            pct,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "quest-stat-label", children: "Chính xác" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quest-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "quest-stat-value", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "quest-stat-label", children: "Điểm" })
        ] })
      ] }),
      rewards.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quest-rewards-summary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quest-rewards-title", children: "🎁 Phần thưởng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quest-rewards-list", children: rewards.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "quest-reward-item", children: r }, i)) })
      ] })
    ] });
  }
  const progressPct = correctCount.current / pool.length * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quest-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quest-hud", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quest-hud-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "quest-score-label", children: [
          "⚡ ",
          score
        ] }),
        combo > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "quest-combo", children: [
          "x",
          combo
        ] }),
        streakDays > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "quest-streak", children: [
          "🔥",
          streakDays,
          "d"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quest-hud-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "quest-tier-icon", children: currentTier.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "quest-progress-text", children: [
          qIdx + 1,
          "/",
          pool.length
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quest-hud-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quest-hp-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quest-hp-fill", style: { width: `${hp}%` } }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quest-progress-ring", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "80", height: "80", viewBox: "0 0 80 80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "40", r: "34", fill: "none", stroke: "rgba(168,85,247,0.1)", strokeWidth: "4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "40",
            cy: "40",
            r: "34",
            fill: "none",
            stroke: "#a855f7",
            strokeWidth: "4",
            strokeDasharray: `${progressPct * 2.14} 214`,
            strokeLinecap: "round",
            transform: "rotate(-90 40 40)",
            style: { transition: "stroke-dasharray 0.5s ease" }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "quest-progress-inner", children: correctCount.current })
    ] }),
    questComplete && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quest-reward-toast", children: [
      "🎁 ",
      rewards[rewards.length - 1]
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quest-scroll", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quest-scroll-word", children: current == null ? void 0 : current.word }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quest-scroll-reading", children: (current == null ? void 0 : current.reading) || "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "quest-speak-btn", onClick: () => speakJP(current == null ? void 0 : current.word), children: "🔊" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quest-options", children: options.map((opt, i) => {
      let cls = "quest-option";
      if (feedback && opt === (current == null ? void 0 : current.meaning)) cls += " correct";
      else if (feedback && opt === selected && opt !== (current == null ? void 0 : current.meaning)) cls += " wrong";
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: cls, onClick: () => handleAnswer(opt), disabled: !!feedback, children: opt }, i);
    }) }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `quest-feedback ${feedback}`, children: feedback === "correct" ? "✅ Correct!" : `❌ Wrong — ${current == null ? void 0 : current.meaning}` })
  ] });
}
const MODES = [
  // Primary 3 — always visible as tabs
  { id: "today", label: "Hôm nay", icon: "🎯" },
  { id: "review", label: "Ôn tập", icon: "🔄" },
  { id: "challenge", label: "Thử thách", icon: "⚡" },
  // Overflow — behind "⋯" button
  { id: "weak-points", label: "Điểm yếu", icon: "💪" },
  { id: "bookmarks", label: "Đã lưu", icon: "⭐" }
];
function BookmarkReview() {
  const bookmarks = useLearningStore((s) => s.bookmarks || EMPTY_OBJ);
  const keys = Object.keys(bookmarks);
  const items = reactExports.useMemo(() => {
    return keys.map((k) => content.getItem(k)).filter(Boolean);
  }, [keys.join("|")]);
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "⭐" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Chưa có đồ đã lưu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Trong bất kỳ trò chơi nào, bấm nút ⭐ (phím B) để lưu từ/kanji/ngữ pháp muốn ôn." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sau đó quay lại đây để xem flashcard toàn bộ những gì đã lưu." })
    ] });
  }
  const getFront = (it) => it.word || it.character || it.title || "—";
  const getBack = (it) => ({
    primary: it.meaning || it.usage || "",
    reading: it.reading || (it.onReadings || []).join(" / "),
    hanviet: it.hanviet || "",
    examples: it.examples || [],
    ja: it.word || it.character || ""
  });
  const getSubtitle = (it) => it.reading || (it.onReadings || []).slice(0, 1).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FlashcardMode,
    {
      items,
      getFront,
      getBack,
      getSubtitle,
      cardType: "bookmark",
      maxCards: Math.min(40, items.length)
    }
  );
}
function getSrsLevel(srs, key) {
  const value = srs == null ? void 0 : srs[key];
  if (typeof value === "number") return value;
  if (value && typeof value === "object" && typeof value.level === "number") return value.level;
  return 0;
}
function DailyMix({ vocabItems, kanjiItems, grammarItems, grammarGameItems }) {
  const srs = useLearningStore((s) => s.srs);
  const streak = useLearningStore((s) => s.streak);
  const srsSnapshotRef = reactExports.useRef(null);
  if (!srsSnapshotRef.current && srs) srsSnapshotRef.current = srs;
  const srsSnapshot = srsSnapshotRef.current || srs;
  const dailyItems = reactExports.useMemo(() => {
    const sortedVocab = [...vocabItems].map((it) => ({ ...it, _srs: getSrsLevel(srsSnapshot, makeVocabKey(it.word)) })).sort((a, b) => a._srs - b._srs);
    const overdue = sortedVocab.filter((it) => it._srs <= 1).slice(0, 3);
    const rest = sortedVocab.filter((it) => it._srs > 1).sort(() => Math.random() - 0.5).slice(0, 5 - overdue.length);
    const v = [...overdue, ...rest].slice(0, 5).map((it) => ({
      word: it.word,
      reading: it.reading || "",
      meaning: it.meaning,
      type: "vocab",
      example: it.example || ""
    }));
    const sortedKanji = [...kanjiItems].map((it) => ({ ...it, _srs: getSrsLevel(srsSnapshot, makeKanjiKey(it.kanji)) })).sort((a, b) => a._srs - b._srs);
    const kOverdue = sortedKanji.filter((it) => it._srs <= 1).slice(0, 2);
    const kRest = sortedKanji.filter((it) => it._srs > 1).sort(() => Math.random() - 0.5).slice(0, 3 - kOverdue.length);
    const k = [...kOverdue, ...kRest].slice(0, 3).map((it) => ({
      word: it.kanji,
      reading: it.on || it.kun || "",
      meaning: it.meaning || it.title || "",
      type: "kanji",
      example: ""
    }));
    const gGame = [...grammarGameItems].filter((it) => it.sentence && it.vi).sort(() => Math.random() - 0.5);
    let g;
    if (gGame.length >= 2) {
      g = gGame.slice(0, 2).map((it) => ({
        word: it.sentence,
        reading: it.romaji || "",
        meaning: it.vi,
        type: "grammar",
        example: `${it.title}: ${it.explanation || ""}`
      }));
    } else {
      g = [...grammarItems].sort(() => Math.random() - 0.5).slice(0, 2).map((it) => {
        var _a;
        const c = it.content || "";
        const expMatch = c.match(/\*\*(?:Giải thích|Mục đích sử dụng|Cấu trúc)[:：]\*\*\s*(.+)/i);
        const meaning = expMatch ? expMatch[1].replace(/\*\*/g, "").trim().substring(0, 120) : ((_a = c.split("\n").filter((l) => l.trim() && !l.startsWith("#") && !l.startsWith("|") && !l.includes("📗") && !l.startsWith("---"))[0]) == null ? void 0 : _a.trim()) || "";
        return { word: it.title, reading: "", meaning, type: "grammar", example: "" };
      });
    }
    return [...v, ...k, ...g].filter((it) => it.word && it.meaning);
  }, [vocabItems, kanjiItems, grammarItems, grammarGameItems]);
  const streakBonus = streak >= 7 ? 3 : streak >= 3 ? 2 : streak >= 1 ? 1.5 : 1;
  if (dailyItems.length < 4) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu cho luyện tập hôm nay." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-daily-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-daily-date", children: [
        "📅 ",
        (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN", { weekday: "long", day: "numeric", month: "long" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-daily-stats", children: [
        dailyItems.filter((i) => i.type === "vocab").length,
        " từ vựng ·",
        dailyItems.filter((i) => i.type === "kanji").length,
        " kanji ·",
        dailyItems.filter((i) => i.type === "grammar").length,
        " ngữ pháp"
      ] }),
      streak > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-daily-streak-bonus", style: { fontSize: "0.85rem", marginTop: 4, color: "var(--n4-accent)" }, children: [
        "🔥 Streak ",
        streak,
        " ngày — 🪙 x",
        streakBonus,
        " coin bonus!"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TrueFalseMode,
      {
        items: dailyItems,
        getDisplay: (it) => `${it.type === "kanji" ? "漢" : it.type === "grammar" ? "文" : "語"} ${it.word}`,
        getMeaning: (it) => it.meaning,
        getCorrectInfo: (it) => ({ reading: it.reading || "", meaning: it.meaning }),
        maxQuestions: dailyItems.length
      }
    )
  ] });
}
function AdaptiveDailyMix({ vocabItems, kanjiItems, grammarItems, grammarGameItems }) {
  const srs = useLearningStore((state) => state.srs || EMPTY_OBJ);
  const mistakes = useLearningStore((state) => state.mistakes || EMPTY_OBJ);
  const streak = useLearningStore((state) => state.streak || 0);
  const dailyItems = reactExports.useMemo(() => selectDailyPracticeItems({
    vocabItems,
    kanjiItems,
    grammarItems,
    grammarGameItems,
    srs,
    mistakes,
    limit: 10
  }), [grammarGameItems, grammarItems, kanjiItems, mistakes, srs, vocabItems]);
  if (dailyItems.length < 4) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu cho phiên gợi ý hôm nay." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-daily-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-daily-date", children: "Phiên gợi ý hôm nay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-daily-stats", children: [
        dailyItems.length,
        " câu · chỉ mục đến hạn, lỗi chưa sửa hoặc nội dung mới"
      ] }),
      streak > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-daily-streak-bonus", children: [
        "Streak ",
        streak,
        " ngày"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TrueFalseMode,
      {
        items: dailyItems,
        getDisplay: (item) => `${item.type === "kanji" ? "漢" : item.type === "grammar" ? "文" : "語"} ${item.word}`,
        getMeaning: (item) => item.meaning,
        getCorrectInfo: (item) => ({ reading: item.reading || "", meaning: item.meaning }),
        maxQuestions: dailyItems.length
      }
    )
  ] });
}
function AdaptiveReviewMode({ vocabItems, kanjiItems, grammarItems, grammarGameItems }) {
  const srs = useLearningStore((state) => state.srs || EMPTY_OBJ);
  const distractorPool = reactExports.useMemo(() => buildDailyPracticePool({ vocabItems, kanjiItems, grammarItems, grammarGameItems }), [vocabItems, kanjiItems, grammarItems, grammarGameItems]);
  const items = reactExports.useMemo(() => selectDuePracticeItems({
    vocabItems,
    kanjiItems,
    grammarItems,
    grammarGameItems,
    srs,
    limit: 15
  }), [grammarGameItems, grammarItems, kanjiItems, srs, vocabItems]);
  if (!items.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "✓" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có mục nào đến hạn. Hệ thống sẽ không lặp lại kiến thức cũ chỉ để lấp phiên." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    QuizMode,
    {
      items,
      distractorPool,
      getQuestion: (item) => item.word,
      getAnswer: (item) => item.meaning,
      getQuestionDisplay: (item) => item.word,
      getCorrectInfo: (item) => ({ reading: item.reading || "", meaning: item.meaning }),
      optionCount: 4,
      maxQuestions: items.length,
      speakOnShow: true
    }
  );
}
function AdaptiveWeakPoints({ vocabItems, kanjiItems, grammarItems, grammarGameItems }) {
  const mistakes = useLearningStore((state) => state.mistakes || EMPTY_OBJ);
  const distractorPool = reactExports.useMemo(() => buildDailyPracticePool({ vocabItems, kanjiItems, grammarItems, grammarGameItems }), [vocabItems, kanjiItems, grammarItems, grammarGameItems]);
  const items = reactExports.useMemo(() => selectPendingMistakeItems({
    vocabItems,
    kanjiItems,
    grammarItems,
    grammarGameItems,
    mistakes,
    limit: 15
  }), [grammarGameItems, grammarItems, kanjiItems, mistakes, vocabItems]);
  if (!items.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "✓" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không còn lỗi cần sửa. Hãy quay lại phiên gợi ý để học nội dung mới." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    QuizMode,
    {
      items,
      distractorPool,
      getQuestion: (item) => item.word,
      getAnswer: (item) => item.meaning,
      getQuestionDisplay: (item) => `🎯 ${item.word}`,
      getCorrectInfo: (item) => ({ reading: item.reading || "", meaning: item.meaning }),
      optionCount: 4,
      maxQuestions: items.length,
      speakOnShow: true
    }
  );
}
function DailyPractice({ mode = "today" }) {
  const vocabItems = useVocabItems("all");
  const kanjiItems = useKanjiItems("all");
  const grammarItems = useGrammarItems("all");
  const grammarGameItems = useGrammarGameItems(20);
  const renderMode = () => {
    var _a;
    switch (mode) {
      case "today":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AdaptiveDailyMix, { vocabItems, kanjiItems, grammarItems, grammarGameItems });
      case "review":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AdaptiveReviewMode, { vocabItems, kanjiItems, grammarItems, grammarGameItems });
      case "challenge": {
        const streak = ((_a = useLearningStore.getState()) == null ? void 0 : _a.streak) || 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(DailyQuestMode, { items: vocabItems, streakDays: streak });
      }
      case "weak-points":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AdaptiveWeakPoints, { vocabItems, kanjiItems, grammarItems, grammarGameItems });
      case "bookmarks":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(BookmarkReview, {});
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(DailyMix, { vocabItems, kanjiItems, grammarItems, grammarGameItems });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerContext.Provider, { value: "daily-practice", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    GameShell,
    {
      trainerId: "daily-practice",
      mode,
      icon: "🎯",
      title: "Luyện tập hằng ngày",
      color: "var(--n4-cat-daily)",
      hearts: 3,
      rhythm: { warmup: 3, bossAt: "mid", bossCount: 1, cooldown: 1, totalItems: 15 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrainerTopBar,
          {
            trainerId: "daily-practice",
            activeMode: mode,
            modes: MODES
          }
        ),
        renderMode()
      ]
    }
  ) });
}
export {
  MODES,
  DailyPractice as default
};
