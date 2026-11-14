import { S } from "./index-qzEsKs-W.js";
const KANJI_RE = /[\u4e00-\u9faf\u3400-\u4dbf]/g;
function effectiveStart() {
  return S.lessonCap > 0 && S.lessonStart > 0 ? Math.min(S.lessonStart, 50) : 1;
}
function effectiveCap() {
  return S.lessonCap > 0 ? Math.min(S.lessonCap, 50) : 50;
}
function isLessonFilterActive() {
  return S.lessonCap > 0;
}
function flattenSectionItems(sections) {
  if (!(sections == null ? void 0 : sections.length)) return [];
  const flat = [];
  for (const sec of sections) {
    const items = (sec == null ? void 0 : sec.patterns) || (sec == null ? void 0 : sec.entries) || (sec == null ? void 0 : sec.items);
    if (!items) continue;
    for (const entry of items) {
      flat.push({ ...entry, _section: sec.id != null ? String(sec.id) : sec.name || sec.title || "" });
    }
  }
  return flat;
}
function isKanjiChar(ch) {
  const code = ch.charCodeAt(0);
  return code >= 19968 && code <= 40879 || code >= 13312 && code <= 19903;
}
function _lessonKeys(minna, minLesson, maxLesson) {
  return Object.keys(minna || {}).map(Number).filter((n) => !isNaN(n) && n >= minLesson && n <= maxLesson).sort((a, b) => a - b);
}
function collectMinnaVocabItems(minna, minLesson, maxLesson) {
  var _a;
  const result = [];
  const seen = /* @__PURE__ */ new Set();
  const keys = _lessonKeys(minna, minLesson, maxLesson);
  for (const n of keys) {
    const lesson = minna[n];
    if (!((_a = lesson == null ? void 0 : lesson.vocab) == null ? void 0 : _a.length)) continue;
    for (const v of lesson.vocab) {
      if (!v.word || seen.has(v.word)) continue;
      seen.add(v.word);
      result.push({
        word: v.word,
        reading: v.reading || "",
        romaji: v.romaji || "",
        meaning: v.meaning || "",
        example: v.example || "",
        exMeaning: v.exMeaning || "",
        _section: String(n),
        _lesson: n
      });
    }
  }
  return result;
}
function collectMinnaGrammarItems(minna, minLesson, maxLesson) {
  var _a;
  const result = [];
  const keys = _lessonKeys(minna, minLesson, maxLesson);
  for (const n of keys) {
    const lesson = minna[n];
    if (!((_a = lesson == null ? void 0 : lesson.grammarItems) == null ? void 0 : _a.length)) continue;
    for (const gi of lesson.grammarItems) {
      if (!gi.title) continue;
      const exLines = (gi.examples || []).filter((ex) => ex.jp && ex.vi).map((ex) => `- ${ex.jp}${ex.romaji ? " (" + ex.romaji + ")" : ""} → ${ex.vi}`).join("\n");
      const content = [
        gi.purpose ? `**Mục đích sử dụng:** ${gi.purpose}` : "",
        gi.explanation ? `**Giải thích:** ${gi.explanation}` : "",
        exLines ? `**Ví dụ:**
${exLines}` : ""
      ].filter(Boolean).join("\n\n");
      result.push({
        id: `minna-${n}-${result.length}`,
        title: gi.title,
        content,
        _section: String(n),
        _lesson: n,
        _examples: (gi.examples || []).filter((ex) => ex.jp && ex.vi),
        _explanation: gi.explanation || "",
        _purpose: gi.purpose || ""
      });
    }
  }
  return result;
}
function filterKanjiEntriesByVocab(kanjiSections, vocabItems) {
  const kanjiChars = /* @__PURE__ */ new Set();
  for (const v of vocabItems) {
    if (!v.word) continue;
    for (const ch of v.word) {
      if (isKanjiChar(ch)) kanjiChars.add(ch);
    }
  }
  const flat = flattenSectionItems(kanjiSections);
  return flat.filter((k) => kanjiChars.has(k.kanji));
}
function buildLessonSectionList(type, minna, minnaLessons, minLesson, maxLesson) {
  var _a, _b;
  const topicMap = {};
  if (Array.isArray(minnaLessons)) {
    minnaLessons.forEach((ml) => {
      if (ml.l && ml.t) topicMap[ml.l] = ml.t;
    });
  }
  const sections = [];
  const keys = _lessonKeys(minna, minLesson, maxLesson);
  for (const n of keys) {
    const lesson = minna[n];
    let count = 0;
    if (type === "grammar") count = ((_a = lesson == null ? void 0 : lesson.grammarItems) == null ? void 0 : _a.length) || 0;
    else if (type === "kanji") {
      const chars = /* @__PURE__ */ new Set();
      ((lesson == null ? void 0 : lesson.vocab) || []).forEach((v) => {
        for (const ch of v.word || "") if (isKanjiChar(ch)) chars.add(ch);
      });
      count = chars.size;
    } else {
      count = ((_b = lesson == null ? void 0 : lesson.vocab) == null ? void 0 : _b.length) || 0;
    }
    if (count > 0) {
      const topic = topicMap[n];
      sections.push({ id: String(n), title: topic ? `Bài ${n} — ${topic}` : `Bài ${n}`, count });
    }
  }
  return sections;
}
function getFilteredVocab() {
  const raw = S._rawVocab || S.vocab;
  if (!isLessonFilterActive()) return raw;
  const minna = S.minnaData;
  if (!minna) return raw;
  const words = /* @__PURE__ */ new Set();
  const from = effectiveStart(), to = effectiveCap();
  for (let i = from; i <= to; i++) {
    const lesson = minna[String(i)];
    if (!(lesson == null ? void 0 : lesson.vocab)) continue;
    for (const v of lesson.vocab) {
      if (v.word) words.add(v.word);
    }
  }
  const result = raw.map((sec) => {
    const filtered = (sec.entries || []).filter((e) => words.has(e.word));
    return filtered.length > 0 ? { ...sec, entries: filtered } : null;
  }).filter(Boolean);
  return result.length > 0 ? result : raw;
}
function getFilteredGrammar() {
  const raw = S._rawGrammar || S.grammar;
  if (!isLessonFilterActive()) return raw;
  const minna = S.minnaData;
  if (!minna) return raw;
  const titles = /* @__PURE__ */ new Set();
  const from = effectiveStart(), to = effectiveCap();
  for (let i = from; i <= to; i++) {
    const lesson = minna[String(i)];
    if (!(lesson == null ? void 0 : lesson.grammarItems)) continue;
    for (const g of lesson.grammarItems) {
      if (g.title) titles.add(g.title);
    }
  }
  return raw.map((sec) => {
    const filtered = (sec.patterns || []).filter((p) => titles.has(p.title));
    return filtered.length > 0 ? { ...sec, patterns: filtered } : null;
  }).filter(Boolean);
}
function getFilteredKanji() {
  const raw = S._rawKanji || S.kanji;
  if (!isLessonFilterActive()) return raw;
  const minna = S.minnaData;
  if (!minna) return raw;
  const kanjiChars = /* @__PURE__ */ new Set();
  const from = effectiveStart(), to = effectiveCap();
  for (let i = from; i <= to; i++) {
    const lesson = minna[String(i)];
    if (!(lesson == null ? void 0 : lesson.vocab)) continue;
    for (const v of lesson.vocab) {
      const matches = (v.word || "").match(KANJI_RE);
      if (matches) matches.forEach((ch) => kanjiChars.add(ch));
    }
  }
  return raw.map((sec) => {
    const filtered = (sec.entries || []).filter((e) => kanjiChars.has(e.kanji));
    return filtered.length > 0 ? { ...sec, entries: filtered } : null;
  }).filter(Boolean);
}
export {
  getFilteredGrammar as a,
  getFilteredKanji as b,
  collectMinnaVocabItems as c,
  effectiveStart as d,
  effectiveCap as e,
  flattenSectionItems as f,
  getFilteredVocab as g,
  filterKanjiEntriesByVocab as h,
  collectMinnaGrammarItems as i,
  buildLessonSectionList as j,
  isLessonFilterActive as k
};
