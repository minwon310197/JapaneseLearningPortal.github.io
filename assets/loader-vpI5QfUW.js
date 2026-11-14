import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { S } from "./index-qzEsKs-W.js";
import { g as getFilteredVocab, a as getFilteredGrammar, b as getFilteredKanji } from "./lesson-filter-DQOC--QD.js";
import "./vendor-react-DMamQVB4.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-router-udyIeVgQ.js";
import "./vendor-icons-MeSkysD6.js";
let _cache = { key: "", vocab: null, grammar: null, kanji: null };
function _invalidate() {
  _cache = { key: "", vocab: null, grammar: null, kanji: null };
}
function _cacheKey() {
  return S.lessonStart + "-" + S.lessonCap;
}
function _getCached(type) {
  const k = _cacheKey();
  if (_cache.key !== k) _invalidate(), _cache.key = k;
  if (!_cache[type]) {
    if (type === "vocab") _cache.vocab = getFilteredVocab();
    else if (type === "grammar") _cache.grammar = getFilteredGrammar();
    else if (type === "kanji") _cache.kanji = getFilteredKanji();
  }
  return _cache[type];
}
function reconstructVocabV1(vocabV2) {
  var _a, _b, _c;
  const sectionsMap = /* @__PURE__ */ new Map();
  for (const v of vocabV2 || []) {
    const secId = v.sectionId || 0;
    const secName = v.sectionName || "Khác";
    if (!sectionsMap.has(secId)) {
      sectionsMap.set(secId, {
        id: secId,
        name: secName,
        entries: []
      });
    }
    sectionsMap.get(secId).entries.push({
      word: v.word,
      reading: v.reading || "",
      romaji: v.romaji || "",
      kanji: v.hanviet || "",
      meaning: v.meaning || "",
      meaning2: ((_a = v.altMeanings) == null ? void 0 : _a[0]) || "",
      note: v.note || "",
      example: ((_b = v.examples) == null ? void 0 : _b[0]) ? `${v.examples[0].ja || ""} / ${v.examples[0].romaji || ""} (${v.examples[0].vi || ""})`.replace(/^\s*\/\s*/, "") : "",
      example2: ((_c = v.examples) == null ? void 0 : _c[1]) ? `${v.examples[1].ja || ""} / ${v.examples[1].romaji || ""} (${v.examples[1].vi || ""})`.replace(/^\s*\/\s*/, "") : "",
      examples: Array.isArray(v.examples) ? v.examples : []
    });
  }
  return Array.from(sectionsMap.values()).sort((a, b) => a.id - b.id);
}
function reconstructKanjiV1(kanjiV2) {
  var _a, _b, _c, _d;
  const sectionsMap = /* @__PURE__ */ new Map();
  for (const k of kanjiV2 || []) {
    const secId = k.sectionId || 0;
    const secName = k.sectionName || "Khác";
    if (!sectionsMap.has(secId)) {
      sectionsMap.set(secId, {
        id: secId,
        name: secName,
        entries: []
      });
    }
    sectionsMap.get(secId).entries.push({
      kanji: k.character,
      meaning: k.meaning || "",
      title: k.hanviet || "",
      on: ((_a = k.onReadings) == null ? void 0 : _a.join("、")) || "",
      kun: ((_b = k.kunReadings) == null ? void 0 : _b.join("、")) || "",
      strokes: k.strokeCount || 0,
      compounds: ((_c = k.compounds) == null ? void 0 : _c.map((c) => `${c.compound} (${c.reading}${c.romaji ? " / " + c.romaji : ""}) - ${c.meaning}`).join(", ")) || "",
      compoundsList: Array.isArray(k.compounds) ? k.compounds : [],
      examples: Array.isArray(k.examples) ? k.examples : [],
      example: k.example || (((_d = k.examples) == null ? void 0 : _d[0]) ? `${k.examples[0].ja || ""} / ${k.examples[0].romaji || ""} (${k.examples[0].vi || ""})`.replace(/^\s*\/\s*/, "") : ""),
      description: k.mnemonic || ""
    });
  }
  return Array.from(sectionsMap.values()).sort((a, b) => a.id - b.id);
}
function reconstructGrammarV1(grammarV2) {
  var _a;
  const sectionsMap = /* @__PURE__ */ new Map();
  for (const g of grammarV2 || []) {
    const secId = Number(g.sectionId) || 0;
    const secName = g.sectionName || "Khác";
    if (!sectionsMap.has(secId)) {
      sectionsMap.set(secId, {
        id: secId,
        name: secName,
        patterns: []
      });
    }
    let content = "";
    if (g.structure) content += `**Cấu trúc:**
${g.structure}

`;
    if (g.usage) content += `**Cách dùng:**
${g.usage}

`;
    if (g.examples && g.examples.length > 0) {
      content += `**Ví dụ:**
` + g.examples.map((ex) => {
        let text = `- ${ex.ja}`;
        if (ex.romaji) text += ` / ${ex.romaji}`;
        if (ex.vi) text += ` (${ex.vi})`;
        return text;
      }).join("\n") + `

`;
    }
    if (g.notes) content += `**Lưu ý:**
${g.notes}`;
    const gIdStr = ((_a = g.key) == null ? void 0 : _a.split(":")[1]) || "";
    const gId = Number(gIdStr) || gIdStr;
    sectionsMap.get(secId).patterns.push({
      id: gId,
      title: g.title || "",
      content: content.trim(),
      examples: Array.isArray(g.examples) ? g.examples : []
    });
  }
  return Array.from(sectionsMap.values()).sort((a, b) => a.id - b.id);
}
async function loadCanonicalData() {
  const [
    { default: kanjiV2 },
    { default: vocabV2 },
    { default: grammarV2 },
    { default: minnaData },
    { default: minnaLessons },
    { default: gameContentData }
  ] = await Promise.all([
    __vitePreload(() => import("./kanji.v2-CS5TJfx7.js"), true ? [] : void 0, import.meta.url),
    __vitePreload(() => import("./vocab.v2-BilQu_Iy.js"), true ? [] : void 0, import.meta.url),
    __vitePreload(() => import("./grammar.v2-DCAJ8ygz.js"), true ? [] : void 0, import.meta.url),
    __vitePreload(() => import("./minna-BMbhs6iQ.js"), true ? [] : void 0, import.meta.url),
    __vitePreload(() => import("./minna-lessons-CY_VH0Sd.js"), true ? [] : void 0, import.meta.url),
    __vitePreload(() => import("./game-content-DFg1ZrbC.js"), true ? [] : void 0, import.meta.url)
  ]);
  return {
    kanji: reconstructKanjiV1(kanjiV2),
    vocab: reconstructVocabV1(vocabV2),
    grammar: reconstructGrammarV1(grammarV2),
    minna: minnaData || {},
    minnaLessons: minnaLessons || [],
    gameContent: gameContentData || {}
  };
}
async function loadData() {
  const canonical = await loadCanonicalData();
  S._rawKanji = canonical.kanji;
  S._rawVocab = canonical.vocab;
  S._rawGrammar = canonical.grammar;
  S.minnaData = canonical.minna;
  S.minnaLessons = canonical.minnaLessons;
  S.gameContent = canonical.gameContent;
  if (!Array.isArray(S._rawVocab) || S._rawVocab.length === 0) {
    console.error("[Loader] vocab data is empty or invalid — check build/decryption");
  }
  if (!Array.isArray(S._rawKanji) || S._rawKanji.length === 0) {
    console.error("[Loader] kanji data is empty or invalid — check build/decryption");
  }
  if (!Array.isArray(S._rawGrammar) || S._rawGrammar.length === 0) {
    console.error("[Loader] grammar data is empty or invalid — check build/decryption");
  }
  Object.defineProperty(S, "kanji", {
    get() {
      return S.lessonCap > 0 ? _getCached("kanji") : S._rawKanji;
    },
    set(v) {
      S._rawKanji = v;
      _invalidate();
    },
    configurable: true,
    enumerable: true
  });
  Object.defineProperty(S, "vocab", {
    get() {
      return S.lessonCap > 0 ? _getCached("vocab") : S._rawVocab;
    },
    set(v) {
      S._rawVocab = v;
      _invalidate();
    },
    configurable: true,
    enumerable: true
  });
  Object.defineProperty(S, "grammar", {
    get() {
      return S.lessonCap > 0 ? _getCached("grammar") : S._rawGrammar;
    },
    set(v) {
      S._rawGrammar = v;
      _invalidate();
    },
    configurable: true,
    enumerable: true
  });
  window.dispatchEvent(new CustomEvent("n4-data-ready"));
}
function replaceWithServerData(content) {
  if (content.vocab) S._rawVocab = content.vocab;
  if (content.kanji) S._rawKanji = content.kanji;
  if (content.grammar) S._rawGrammar = content.grammar;
  if (content.minna) S.minnaData = content.minna;
  if (content["minna-lessons"]) S.minnaLessons = content["minna-lessons"];
  if (content["game-content"]) S.gameContent = content["game-content"];
  _invalidate();
  window.dispatchEvent(new CustomEvent("n4-data-ready"));
}
export {
  loadCanonicalData,
  loadData,
  reconstructGrammarV1,
  reconstructKanjiV1,
  reconstructVocabV1,
  replaceWithServerData
};
