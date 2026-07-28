import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { s as shuffleArray, u as useSrsAwareBatch } from "./PhaseRibbon-VgLgSQxn.js";
import { d as useLearningStore, aS as stableAnswerKey, co as getItemLearningKey, cq as vocabKey, cr as kanjiKey, cs as grammarKey, ct as parseLearningKey, cu as parseKey, Z as kanaToRomaji, R as content, aT as equalsAnswerText, as as speakJP, cv as useRewardPop, cp as isN4Flag, ce as playSFX, cg as AIHintButton } from "./feature-3d-ClP3ARU5.js";
import { u as useScoreEngine } from "./useScoreEngine-Cjc3MMN3.js";
import { h as hasJapanese, q as questionRomaji, s as safeTtsText, o as optionRomaji, u as useInGameLookup, a as useGameHelpers, M as ModeResultsScreen, v as viRevealAnswer, G as GameToolbar, Q as QuickDictionaryOverlay, C as ContentDetailDrawer } from "./useQuestionMeta-D-yYGU7U.js";
import "./TrainerTopBar-9qsLJC8Z.js";
import "./index-ZUSnnghe.js";
import { Q as QuizFeedback } from "./QuizFeedback-BMOgeHCF.js";
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
function pickGeneric(item, pool, opts) {
  const { count, getAnswer, getSection } = opts;
  if (!Array.isArray(pool) || pool.length === 0) return [];
  const correctKey = stableAnswerKey(getAnswer(item));
  const seen = /* @__PURE__ */ new Set([correctKey]);
  const candidates = pool.filter((it) => it !== item);
  let ordered;
  if (getSection) {
    const sec = getSection(item);
    if (sec != null) {
      const same = shuffleArray(candidates.filter((it) => getSection(it) === sec));
      const rest = shuffleArray(candidates.filter((it) => getSection(it) !== sec));
      ordered = same.concat(rest);
    } else {
      ordered = shuffleArray(candidates);
    }
  } else {
    ordered = shuffleArray(candidates);
  }
  const wrongs = [];
  for (const it of ordered) {
    if (wrongs.length >= count) break;
    const ans = getAnswer(it);
    if (!ans) continue;
    const k = stableAnswerKey(ans);
    if (!k || seen.has(k)) continue;
    seen.add(k);
    wrongs.push(ans);
  }
  return wrongs;
}
function inferKind(item) {
  if (!item) return null;
  if (item.kind === "vocab" || item.kind === "kanji" || item.kind === "grammar") return item.kind;
  if (typeof item.key === "string") {
    const p = parseKey(item.key);
    if (p) return p.kind;
  }
  if (item.character || item.kanji && typeof item.kanji === "string" && [...item.kanji].length === 1) {
    return "kanji";
  }
  if (item.structure || item.pattern || item.title && !item.word) return "grammar";
  if (item.word) return "vocab";
  return null;
}
function getQuestionKey(item) {
  var _a, _b, _c;
  if (!item) return null;
  if (typeof item.key === "string" && /^[vkg]:/.test(item.key)) return item.key;
  const kind = inferKind(item);
  if (kind === "vocab") {
    const w = item.word || item.japanese || "";
    return w ? vocabKey(w) : null;
  }
  if (kind === "kanji") {
    const c = item.character || item.kanji || "";
    return c ? kanjiKey(c) : null;
  }
  if (kind === "grammar") {
    const id = (_c = (_b = (_a = item.id) != null ? _a : item.title) != null ? _b : item.pattern) != null ? _c : "";
    return id ? grammarKey(id) : null;
  }
  const legacy = getItemLearningKey(item);
  if (!legacy) return null;
  const parsed = parseLearningKey(legacy);
  if (!parsed) return null;
  if (parsed.type === "vocab") return vocabKey(parsed.label);
  if (parsed.type === "kanji") return kanjiKey(parsed.label);
  if (parsed.type === "grammar") return grammarKey(parsed.label);
  return legacy;
}
function getLegacyLearningKey(item) {
  return getItemLearningKey(item);
}
function parseExample(raw) {
  if (!raw) return null;
  if (typeof raw === "object") {
    return {
      jp: String(raw.ja || raw.jp || raw.japanese || "").trim(),
      romaji: String(raw.romaji || "").trim(),
      vi: String(raw.vi || raw.vietnamese || "").trim()
    };
  }
  if (typeof raw !== "string") return null;
  const s = raw.trim();
  if (!s) return null;
  const slashIdx = s.indexOf("/");
  if (slashIdx < 0) return { jp: s, romaji: "", vi: "" };
  const jp = s.slice(0, slashIdx).trim();
  const rest = s.slice(slashIdx + 1).trim();
  const parenIdx = rest.indexOf("(");
  if (parenIdx < 0) return { jp, romaji: rest, vi: "" };
  const romaji = rest.slice(0, parenIdx).trim();
  const vi = rest.slice(parenIdx + 1).replace(/\)\s*$/, "").trim();
  return { jp, romaji, vi };
}
function getFirstExample(item) {
  if (!item) return null;
  if (Array.isArray(item.examples) && item.examples.length) {
    const ex = parseExample(item.examples[0]);
    if (ex && ex.jp) return ex;
  }
  if (item.example) return parseExample(item.example);
  return null;
}
function vocabMeaning(item) {
  return String((item == null ? void 0 : item.meaning) || (item == null ? void 0 : item.vi) || "").trim();
}
function vocabReading(item) {
  return String((item == null ? void 0 : item.reading) || (item == null ? void 0 : item.hiragana) || "").trim();
}
function vocabRomaji(item) {
  if (item == null ? void 0 : item.romaji) return item.romaji;
  const r = vocabReading(item);
  return r ? kanaToRomaji(r) : "";
}
function vocabAltAnswers(item) {
  const raw = Array.isArray(item == null ? void 0 : item.altMeanings) ? item.altMeanings : [];
  return raw.map((s) => String(s || "").trim()).filter(Boolean);
}
const vocabAccessors = Object.freeze({
  kind: "vocab",
  getKey: getQuestionKey,
  getLegacyKey: getLegacyLearningKey,
  getQuestion: (item) => String((item == null ? void 0 : item.word) || "").trim(),
  getAnswer: vocabMeaning,
  getDisplay: (item) => String((item == null ? void 0 : item.word) || "").trim(),
  getSubtitle: vocabReading,
  getReading: vocabReading,
  getRomaji: vocabRomaji,
  getAltAnswers: vocabAltAnswers,
  getInfo: (item) => ({
    reading: vocabReading(item),
    meaning: vocabMeaning(item),
    example: getFirstExample(item)
  }),
  getBack: (item) => ({
    reading: vocabReading(item),
    meaning: vocabMeaning(item),
    romaji: vocabRomaji(item),
    example: getFirstExample(item) || void 0,
    subtitle: vocabReading(item)
  }),
  getConfusableKeys: (item) => Array.isArray(item == null ? void 0 : item.confusableKeys) ? item.confusableKeys : [],
  getSynonymKeys: (item) => Array.isArray(item == null ? void 0 : item.synonymKeys) ? item.synonymKeys : [],
  getAntonymKeys: (item) => Array.isArray(item == null ? void 0 : item.antonymKeys) ? item.antonymKeys : [],
  getSection: (item) => {
    var _a, _b;
    return (_b = (_a = item == null ? void 0 : item.sectionId) != null ? _a : item == null ? void 0 : item.sectionName) != null ? _b : null;
  },
  getLessonIds: (item) => Array.isArray(item == null ? void 0 : item.lessonIds) ? item.lessonIds : [],
  getTopicTags: (item) => Array.isArray(item == null ? void 0 : item.topicTags) ? item.topicTags : []
});
function kanjiChar(item) {
  return String((item == null ? void 0 : item.character) || (item == null ? void 0 : item.kanji) || "").trim();
}
function kanjiMeaning(item) {
  return String((item == null ? void 0 : item.meaning) || (item == null ? void 0 : item.title) || (item == null ? void 0 : item.vi) || "").trim();
}
function readingList(item, field) {
  if (Array.isArray(item == null ? void 0 : item[field])) return item[field].filter(Boolean);
  if (typeof (item == null ? void 0 : item[field]) === "string" && item[field].trim()) return [item[field].trim()];
  return [];
}
function kanjiOn(item) {
  if (Array.isArray(item == null ? void 0 : item.onReadings)) return item.onReadings.filter(Boolean);
  return readingList(item, "on");
}
function kanjiKun(item) {
  if (Array.isArray(item == null ? void 0 : item.kunReadings)) return item.kunReadings.filter(Boolean);
  return readingList(item, "kun");
}
function kanjiReadingStr(item) {
  const on = kanjiOn(item).join("・");
  const kun = kanjiKun(item).join("・");
  return [on, kun].filter(Boolean).join(" / ");
}
const kanjiAccessors = Object.freeze({
  kind: "kanji",
  getKey: getQuestionKey,
  getLegacyKey: getLegacyLearningKey,
  getQuestion: kanjiChar,
  getAnswer: kanjiMeaning,
  getDisplay: kanjiChar,
  getSubtitle: kanjiReadingStr,
  getReading: kanjiReadingStr,
  getRomaji: () => "",
  getAltAnswers: () => [],
  getInfo: (item) => ({
    reading: kanjiReadingStr(item),
    meaning: kanjiMeaning(item)
  }),
  getBack: (item) => ({
    reading: kanjiReadingStr(item),
    meaning: kanjiMeaning(item),
    on: kanjiOn(item),
    kun: kanjiKun(item),
    compounds: Array.isArray(item == null ? void 0 : item.compounds) ? item.compounds : [],
    example: (item == null ? void 0 : item.example) ? getFirstExample(item) || void 0 : void 0,
    description: (item == null ? void 0 : item.description) || (item == null ? void 0 : item.mnemonic) || ""
  }),
  /** Kanji uses `lookAlikeKeys` for visually-confusable partners. */
  getConfusableKeys: (item) => Array.isArray(item == null ? void 0 : item.lookAlikeKeys) ? item.lookAlikeKeys : [],
  getSection: (item) => {
    var _a, _b;
    return (_b = (_a = item == null ? void 0 : item.sectionId) != null ? _a : item == null ? void 0 : item.sectionName) != null ? _b : null;
  },
  getLessonIds: (item) => Array.isArray(item == null ? void 0 : item.lessonIds) ? item.lessonIds : [],
  getTopicTags: (item) => Array.isArray(item == null ? void 0 : item.topicTags) ? item.topicTags : []
});
function grammarTitle(item) {
  return String((item == null ? void 0 : item.title) || (item == null ? void 0 : item.pattern) || "").trim();
}
function grammarMeaning(item) {
  return String((item == null ? void 0 : item.meaning) || (item == null ? void 0 : item.vi) || (item == null ? void 0 : item.title) || "").trim();
}
const grammarAccessors = Object.freeze({
  kind: "grammar",
  getKey: getQuestionKey,
  getLegacyKey: getLegacyLearningKey,
  getQuestion: grammarTitle,
  getAnswer: grammarMeaning,
  getDisplay: grammarTitle,
  getSubtitle: (item) => String((item == null ? void 0 : item.structure) || "").trim(),
  getReading: () => "",
  getRomaji: () => "",
  getAltAnswers: () => [],
  getInfo: (item) => ({
    reading: "",
    meaning: grammarMeaning(item),
    example: getFirstExample(item),
    structure: String((item == null ? void 0 : item.structure) || "").trim()
  }),
  getBack: (item) => ({
    reading: "",
    meaning: grammarMeaning(item),
    structure: String((item == null ? void 0 : item.structure) || "").trim(),
    usage: String((item == null ? void 0 : item.usage) || "").trim(),
    example: getFirstExample(item) || void 0
  }),
  getConfusableKeys: (item) => Array.isArray(item == null ? void 0 : item.relatedKeys) ? item.relatedKeys : [],
  getCommonMistakes: (item) => Array.isArray(item == null ? void 0 : item.commonMistakes) ? item.commonMistakes : [],
  getSection: (item) => {
    var _a, _b;
    return (_b = (_a = item == null ? void 0 : item.sectionId) != null ? _a : item == null ? void 0 : item.sectionName) != null ? _b : null;
  },
  getLessonIds: (item) => Array.isArray(item == null ? void 0 : item.lessonIds) ? item.lessonIds : [],
  getTopicTags: (item) => Array.isArray(item == null ? void 0 : item.topicTags) ? item.topicTags : []
});
function accessorsFor(item) {
  const k = inferKind(item);
  if (k === "kanji") return kanjiAccessors;
  if (k === "grammar") return grammarAccessors;
  return vocabAccessors;
}
function resolveKeys(keys) {
  var _a, _b;
  if (!Array.isArray(keys) || keys.length === 0) return [];
  const out = [];
  for (const k of keys) {
    if (!k) continue;
    try {
      const it = (_b = (_a = content).getItem) == null ? void 0 : _b.call(_a, k);
      if (it) out.push(it);
    } catch (e) {
    }
  }
  return out;
}
function buildConfusablePool(item) {
  var _a, _b, _c;
  const a = accessorsFor(item);
  const primary = resolveKeys((_a = a.getConfusableKeys) == null ? void 0 : _a.call(a, item));
  const extras = [];
  if (a.kind === "vocab") {
    extras.push(...resolveKeys((_b = a.getSynonymKeys) == null ? void 0 : _b.call(a, item)));
    extras.push(...resolveKeys((_c = a.getAntonymKeys) == null ? void 0 : _c.call(a, item)));
  }
  const seen = new Set(primary);
  const pool = [...primary];
  for (const e of extras) {
    if (!seen.has(e)) {
      seen.add(e);
      pool.push(e);
    }
  }
  return pool;
}
function pickConfusable(item, fallbackPool, opts) {
  const { count, getAnswer } = opts;
  const curated = buildConfusablePool(item);
  const correctKey = stableAnswerKey(getAnswer(item));
  const seen = /* @__PURE__ */ new Set([correctKey]);
  const wrongs = [];
  const ordered = shuffleArray(curated);
  for (const it of ordered) {
    if (wrongs.length >= count) break;
    const ans = getAnswer(it);
    if (!ans) continue;
    const k = stableAnswerKey(ans);
    if (!k || seen.has(k)) continue;
    seen.add(k);
    wrongs.push(ans);
  }
  if (wrongs.length >= count) return wrongs;
  const extras = pickGeneric(item, fallbackPool, {
    ...opts,
    count: count - wrongs.length,
    getAnswer: (it) => {
      const ans = getAnswer(it);
      const k = stableAnswerKey(ans);
      return seen.has(k) ? "" : ans;
    }
  });
  return wrongs.concat(extras).slice(0, count);
}
function hasConfusableData(item) {
  var _a, _b, _c;
  if (!item) return false;
  const a = accessorsFor(item);
  const direct = ((_a = a.getConfusableKeys) == null ? void 0 : _a.call(a, item)) || [];
  if (direct.length > 0) return true;
  if (a.kind === "vocab") {
    return (((_b = a.getSynonymKeys) == null ? void 0 : _b.call(a, item)) || []).length + (((_c = a.getAntonymKeys) == null ? void 0 : _c.call(a, item)) || []).length > 0;
  }
  return false;
}
function extractForms(item) {
  if (!item) return null;
  if (item.forms && typeof item.forms === "object") return item.forms;
  if (item.conjugation && typeof item.conjugation === "object") return item.conjugation;
  return null;
}
function pickFormAware(item, fallbackPool, opts) {
  const { count, getAnswer, probedForm } = opts;
  const forms = extractForms(item);
  const correct = getAnswer(item);
  const correctKey = stableAnswerKey(correct);
  const seen = /* @__PURE__ */ new Set([correctKey]);
  const wrongs = [];
  if (forms) {
    const ordered = shuffleArray(Object.entries(forms));
    for (const [name, value] of ordered) {
      if (wrongs.length >= count) break;
      if (probedForm && name === probedForm) continue;
      if (!value) continue;
      const k = stableAnswerKey(value);
      if (!k || seen.has(k)) continue;
      seen.add(k);
      wrongs.push(value);
    }
  }
  if (wrongs.length >= count) return wrongs;
  const pool = Array.isArray(fallbackPool) ? shuffleArray(fallbackPool.filter((it) => it !== item)) : [];
  for (const it of pool) {
    if (wrongs.length >= count) break;
    const ans = getAnswer(it);
    if (!ans) continue;
    const k = stableAnswerKey(ans);
    if (!k || seen.has(k)) continue;
    seen.add(k);
    wrongs.push(ans);
  }
  return wrongs.slice(0, count);
}
function hasFormData(item) {
  return !!extractForms(item);
}
const KNOWN_STRATEGIES = /* @__PURE__ */ new Set(["auto", "generic", "confusable", "form-aware", "same-section"]);
function selectDistractors(item, pool, options = {}) {
  const {
    count = 3,
    strategy = "auto",
    getAnswer,
    getSection,
    probedForm
  } = options;
  if (!item || typeof getAnswer !== "function" || count <= 0) return [];
  const strat = KNOWN_STRATEGIES.has(strategy) ? strategy : "auto";
  if (strat === "form-aware" || strat === "auto" && hasFormData(item)) {
    return pickFormAware(item, pool, { count, getAnswer, probedForm });
  }
  if (strat === "confusable" || strat === "auto" && hasConfusableData(item)) {
    return pickConfusable(item, pool, { count, getAnswer, getSection });
  }
  if (strat === "same-section" && typeof getSection === "function") {
    const sec = getSection(item);
    const sameSec = (pool || []).filter((it) => getSection(it) === sec);
    return pickGeneric(item, sameSec, { count, getAnswer });
  }
  return pickGeneric(item, pool, { count, getAnswer, getSection });
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
    var _a2;
    const src = itemsRef.current;
    if (!currentItem || !(src == null ? void 0 : src.length)) return [];
    const correctAnswer2 = getAnswerRef.current(currentItem);
    const correctKey = stableAnswerKey(correctAnswer2);
    const wrongs = selectDistractors(currentItem, src, {
      count: Math.max(0, optionCount - 1),
      strategy: distractorStrategy,
      getAnswer: getAnswerRef.current,
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
        question: (_a2 = getQuestionRef.current) == null ? void 0 : _a2.call(getQuestionRef, currentItem),
        correctKey
      });
      deduped.unshift(correctAnswer2);
    }
    return deduped.slice(0, Math.max(1, optionCount));
  }, [currentItem, optionCount, sessionKey, distractorStrategy, probedForm]);
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
    insufficient: !(items == null ? void 0 : items.length) || items.length < 2,
    // Actions
    answer,
    next,
    restart
  };
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: `n4-quiz-option n4-btn-glass ${stateClass}${eliminated ? " eliminated" : ""}`,
      onClick,
      disabled,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-quiz-option-idx", children: idx + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-quiz-option-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-quiz-option-text", children: eliminated ? /* @__PURE__ */ jsxRuntimeExports.jsx("s", { children: opt }) : opt }),
          romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-quiz-option-romaji", children: romaji })
        ] }),
        isJP && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "n4-btn n4-btn-ghost n4-quiz-option-tts",
            onClick: handleTTS,
            title: `Đọc: ${opt}`,
            "aria-label": `Nghe đáp án ${idx + 1}`,
            tabIndex: -1,
            children: "🔊"
          }
        )
      ]
    }
  );
}
const AnswerOptionRow$1 = reactExports.memo(AnswerOptionRow);
function QuizMode({
  items,
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
  QuizMode$1 as Q,
  QuestionDisplay$1 as a,
  grammarAccessors as g,
  kanjiAccessors as k,
  selectDistractors as s,
  vocabAccessors as v
};
