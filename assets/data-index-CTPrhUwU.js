import { b as useDataStore, ai as preferStandaloneReading, k as kanaToRomaji, aj as masuToDictKana, ak as alignRomajiToWord } from "./feature-3d-CFvJkEt3.js";
import { O as sanitizeRomaji } from "./feature-3d-hud-CYISTbY6.js";
const APP_QUERY_CACHE_MAX = 120;
const LOCAL_QUERY_CACHE_MAX = 120;
let _searchCorpusCache = {
  vocabRef: null,
  kanjiRef: null,
  grammarRef: null,
  minnaRef: null,
  entries: [],
  queryCache: /* @__PURE__ */ new Map()
};
let _localSearchCorpusCache = {
  vocabRef: null,
  kanjiRef: null,
  entries: [],
  queryCache: /* @__PURE__ */ new Map()
};
function getCachedQueryResult(cacheMap, cacheKey) {
  const value = cacheMap.get(cacheKey);
  if (!value) return null;
  cacheMap.delete(cacheKey);
  cacheMap.set(cacheKey, value);
  return value;
}
function setCachedQueryResult(cacheMap, cacheKey, value, maxSize) {
  if (cacheMap.has(cacheKey)) cacheMap.delete(cacheKey);
  cacheMap.set(cacheKey, value);
  while (cacheMap.size > maxSize) {
    const oldestKey = cacheMap.keys().next().value;
    cacheMap.delete(oldestKey);
  }
}
function snapshotData(source) {
  const state = source || useDataStore.getState();
  return {
    vocab: (state == null ? void 0 : state.vocab) || [],
    kanji: (state == null ? void 0 : state.kanji) || [],
    grammar: (state == null ? void 0 : state.grammar) || [],
    minna: (state == null ? void 0 : state.minna) || {}
  };
}
function stripParens(word) {
  if (!word) return word;
  return word.replace(/[（(].*?[）)]/g, "").replace(/\[.*?\]/g, "").trim();
}
function isJapanese(text) {
  return /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf\u3400-\u4dbf]/.test(text || "");
}
function searchAppData(query, source, limit = 20) {
  var _a, _b, _c;
  if (!(query == null ? void 0 : query.trim())) return [];
  const { vocab, kanji, grammar, minna } = snapshotData(source);
  const q = query.trim().toLowerCase();
  if (_searchCorpusCache.vocabRef !== vocab || _searchCorpusCache.kanjiRef !== kanji || _searchCorpusCache.grammarRef !== grammar || _searchCorpusCache.minnaRef !== minna) {
    const entries = [];
    for (const sec of vocab) {
      for (const item of sec.entries || []) {
        const label = item.word || item.reading || "";
        const desc = item.meaning || "";
        const searchText = `${item.word || ""} ${item.reading || ""} ${item.romaji || ""} ${item.meaning || ""}`.toLowerCase();
        entries.push({
          searchText,
          result: { icon: "📝", label, desc, path: `/content/vocab/${(_a = sec.id) != null ? _a : 0}`, cat: "data" }
        });
      }
    }
    for (const sec of kanji) {
      for (const item of sec.entries || []) {
        const label = item.kanji || "";
        const desc = item.meaning || "";
        const searchText = `${item.kanji || ""} ${item.title || ""} ${item.meaning || ""}`.toLowerCase();
        entries.push({
          searchText,
          result: { icon: "🈲", label, desc, path: `/content/kanji/${(_b = sec.id) != null ? _b : 0}`, cat: "data" }
        });
      }
    }
    for (const sec of grammar) {
      for (const item of sec.patterns || sec.entries || []) {
        const label = item.title || item.id || "";
        const desc = item.meaning || "";
        const searchText = `${item.title || ""} ${item.id || ""} ${item.meaning || ""}`.toLowerCase();
        entries.push({
          searchText,
          result: { icon: "📐", label, desc, path: `/content/grammar/${(_c = sec.id) != null ? _c : 0}`, cat: "data" }
        });
      }
    }
    for (const [lesson, data] of Object.entries(minna)) {
      for (const item of data.vocab || []) {
        const label = item.word || item.reading || "";
        const desc = `Bài ${lesson} — ${item.meaning || ""}`;
        const searchText = `${item.word || ""} ${item.reading || ""} ${item.meaning || ""}`.toLowerCase();
        entries.push({
          searchText,
          result: { icon: "📚", label, desc, path: `/content/minna/${lesson}`, cat: "data" }
        });
      }
    }
    _searchCorpusCache = {
      vocabRef: vocab,
      kanjiRef: kanji,
      grammarRef: grammar,
      minnaRef: minna,
      entries,
      queryCache: /* @__PURE__ */ new Map()
    };
  }
  const cacheKey = `${q}|${limit}`;
  const cachedResults = getCachedQueryResult(_searchCorpusCache.queryCache, cacheKey);
  if (cachedResults) return cachedResults;
  const results = [];
  for (const entry of _searchCorpusCache.entries) {
    if (entry.searchText.includes(q)) {
      results.push(entry.result);
      if (results.length >= limit) {
        setCachedQueryResult(_searchCorpusCache.queryCache, cacheKey, results, APP_QUERY_CACHE_MAX);
        return results;
      }
    }
  }
  setCachedQueryResult(_searchCorpusCache.queryCache, cacheKey, results, APP_QUERY_CACHE_MAX);
  return results;
}
function searchLocalStudyData(query, source, limit = 20) {
  if (!(query == null ? void 0 : query.trim())) return [];
  const { vocab, kanji } = snapshotData(source);
  const q = query.trim().toLowerCase();
  if (_localSearchCorpusCache.vocabRef !== vocab || _localSearchCorpusCache.kanjiRef !== kanji) {
    const entries = [];
    for (const section of vocab) {
      const items = section.entries || section.items || section.data || [];
      for (const item of items) {
        const searchText = `${item.word || ""} ${item.reading || ""} ${item.meaning || ""} ${item.romaji || ""}`.toLowerCase();
        entries.push({ searchText, item: { ...item, source: "vocab" } });
      }
    }
    for (const section of kanji) {
      const items = section.entries || section.items || section.data || [];
      for (const item of items) {
        const searchText = `${item.kanji || ""} ${item.title || ""} ${item.meaning || ""}`.toLowerCase();
        entries.push({ searchText, item: { ...item, source: "kanji" } });
      }
    }
    _localSearchCorpusCache = {
      vocabRef: vocab,
      kanjiRef: kanji,
      entries,
      queryCache: /* @__PURE__ */ new Map()
    };
  }
  const cacheKey = `${q}|${limit}`;
  const cachedResults = getCachedQueryResult(_localSearchCorpusCache.queryCache, cacheKey);
  if (cachedResults) return cachedResults;
  const results = [];
  for (const entry of _localSearchCorpusCache.entries) {
    if (entry.searchText.includes(q)) {
      results.push(entry.item);
      if (results.length >= limit) {
        setCachedQueryResult(_localSearchCorpusCache.queryCache, cacheKey, results, LOCAL_QUERY_CACHE_MAX);
        return results;
      }
    }
  }
  setCachedQueryResult(_localSearchCorpusCache.queryCache, cacheKey, results, LOCAL_QUERY_CACHE_MAX);
  return results;
}
function buildVocabLookupMap(source) {
  const { vocab, kanji, grammar, minna } = snapshotData(source);
  const map = {};
  function setEntry(key, entry) {
    if (!key) return;
    const normalized = {
      reading: entry.reading || "",
      meaning: entry.meaning || "",
      romaji: sanitizeRomaji(alignRomajiToWord(key, entry.romaji || ""))
    };
    if (!map[key]) {
      map[key] = normalized;
      return;
    }
    const existing = map[key];
    const existingBad = /masu$/i.test(existing.romaji || "") && !/ます$/.test(key);
    const newGood = !(/masu$/i.test(normalized.romaji || "") && !/ます$/.test(key));
    if (existingBad && newGood) map[key] = normalized;
  }
  function addEntry(word, reading, meaning, romaji) {
    if (!word) return;
    setEntry(word, { reading, meaning, romaji });
    const stripped = stripParens(word);
    if (stripped && stripped !== word) {
      setEntry(stripped, { reading, meaning, romaji });
    }
    const base = stripped || word;
    if (base && base.endsWith("する") && base.length > 2) {
      const stem = base.slice(0, -2);
      const readingStem = (reading || "").replace(/する$/, "");
      const romajiStem = (romaji || "").replace(/suru$/, "");
      if (stem) setEntry(stem, { reading: readingStem, meaning, romaji: romajiStem });
    }
    if (base && base.endsWith("ます") && base.length > 2) {
      const masuStem = base.slice(0, -2);
      const masuToDict = { "き": "く", "ぎ": "ぐ", "し": "す", "ち": "つ", "に": "ぬ", "び": "ぶ", "み": "む", "り": "る", "い": "う" };
      const last = masuStem[masuStem.length - 1];
      const dictReading = reading && reading.endsWith("ます") ? masuToDictKana(reading) : "";
      const dictRomaji = dictReading ? kanaToRomaji(dictReading) : "";
      if (masuToDict[last]) {
        const dictForm = masuStem.slice(0, -1) + masuToDict[last];
        if (dictForm) setEntry(dictForm, { reading: dictReading, meaning, romaji: dictRomaji });
      }
      const stemLast = masuStem[masuStem.length - 1];
      if (stemLast && /[えけげせぜてでねへべぺめれいきぎしじちぢにひびぴみり]/.test(stemLast)) {
        const ichidan = masuStem + "る";
        setEntry(ichidan, { reading: dictReading, meaning, romaji: dictRomaji });
      }
    }
  }
  for (const sec of vocab) {
    for (const item of sec.entries || []) {
      addEntry(item.word, item.reading, item.meaning, item.romaji);
      if (item.reading && item.reading !== item.word) {
        addEntry(item.reading, item.reading, item.meaning, item.romaji);
      }
      addEntry(item.word2, item.reading2, item.meaning2, item.romaji2);
      if (item.reading2 && item.reading2 !== item.word2) {
        addEntry(item.reading2, item.reading2, item.meaning2, item.romaji2);
      }
    }
  }
  for (const lesson of Object.values(minna)) {
    for (const item of (lesson == null ? void 0 : lesson.vocab) || []) {
      addEntry(item.word, item.reading, item.meaning, item.romaji);
      if (item.reading && item.reading !== item.word) {
        addEntry(item.reading, item.reading, item.meaning, item.romaji);
      }
    }
  }
  for (const sec of kanji) {
    for (const item of sec.entries || []) {
      if (item.kanji && !map[item.kanji]) {
        const pick = preferStandaloneReading({ on: item.on, kun: item.kun });
        const reading = (pick == null ? void 0 : pick.base) || "";
        const romaji = (pick == null ? void 0 : pick.romaji) || (reading ? kanaToRomaji(reading) : "");
        map[item.kanji] = {
          reading,
          meaning: item.meaning || item.title || "",
          romaji
        };
      }
      if (item.compounds) {
        for (const part of item.compounds.split(",")) {
          const match = part.match(/(\S+)\s*[（(]([^）)]+)[）)]\s*-\s*(.+)/);
          if (!match) continue;
          const compoundWord = match[1].trim();
          const readingParts = match[2].split("/").map((segment) => segment.trim());
          if (compoundWord && isJapanese(compoundWord) && !map[compoundWord]) {
            const rd = readingParts[0] || "";
            const rom = (readingParts[1] || "").trim() || (rd ? kanaToRomaji(rd) : "");
            map[compoundWord] = {
              reading: rd,
              meaning: match[3].trim(),
              romaji: rom
            };
          }
        }
      }
    }
  }
  for (const sec of grammar) {
    for (const item of sec.patterns || []) {
      const title = item.title || "";
      if (!title || !isJapanese(title)) continue;
      const jp = title.split(/[（()）\s]/).find((part) => isJapanese(part));
      if (!jp || map[jp]) continue;
      let meaning = "";
      if (item.content) {
        const content = item.content.trim();
        if (!/^[📗📘📙📕]/.test(content)) meaning = content.substring(0, 60);
      }
      map[jp] = { reading: "", meaning, romaji: "" };
    }
  }
  return map;
}
export {
  searchLocalStudyData as a,
  buildVocabLookupMap as b,
  searchAppData as s
};
