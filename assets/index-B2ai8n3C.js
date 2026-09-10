import { s as shuffleArray } from "./utils-zpwy_og2.js";
import { bx as vocabKey, bz as kanjiKey, bB as grammarKey, aK as getItemLearningKey, az as parseLearningKey, bN as parseKey, k as kanaToRomaji, J as stableAnswerKey, F as content } from "./index-BEJSIlFS.js";
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
function buildQuestion(item, opts = {}) {
  var _a, _b;
  const a = accessorsFor(item);
  const prompt = (_a = opts.promptOverride) != null ? _a : a.getQuestion(item);
  const display = (_b = opts.display) != null ? _b : a.getDisplay(item);
  const itemKey = a.getKey(item);
  return {
    id: itemKey || `q:${Math.random().toString(36).slice(2, 10)}`,
    itemKey,
    kind: a.kind,
    prompt,
    display,
    answer: a.getAnswer(item),
    altAnswers: a.getAltAnswers(item),
    info: a.getInfo(item),
    source: item
  };
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
export {
  grammarAccessors as a,
  getQuestionKey as b,
  buildQuestion as c,
  accessorsFor as d,
  getFirstExample as g,
  inferKind as i,
  kanjiAccessors as k,
  parseExample as p,
  selectDistractors as s,
  vocabAccessors as v
};
