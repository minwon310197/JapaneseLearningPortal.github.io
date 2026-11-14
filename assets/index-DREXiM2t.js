import { aB as srs } from "./index-BgvNAguN.js";
function vocabKey(word) {
  if (!word) return "";
  return "v:" + String(word).normalize("NFC");
}
function kanjiKey(ch) {
  if (!ch) return "";
  return "k:" + String(ch).normalize("NFC");
}
function grammarKey(id) {
  if (id == null) return "";
  return "g:" + String(id);
}
function parseKey(key) {
  if (typeof key !== "string" || key.length < 3) return null;
  const m = /^([vkg]):(.+)$/.exec(key);
  if (!m) return null;
  return {
    kind: m[1] === "v" ? "vocab" : m[1] === "k" ? "kanji" : "grammar",
    id: m[2]
  };
}
const GODAN_RE = /五段|godan|ごだん/i;
const ICHI_RE = /一段|ichidan|いちだん/i;
const IRREG_RE = /不規則|irregular|する|くる|来る/i;
const I_ADJ_RE = /い形容詞|i[- ]?adj/i;
const NA_ADJ_RE = /な形容詞|na[- ]?adj/i;
function inferPartOfSpeech(entry, sectionName) {
  const hay = [
    (entry == null ? void 0 : entry.sub) || "",
    (entry == null ? void 0 : entry.type) || "",
    (entry == null ? void 0 : entry.note) || "",
    sectionName || ""
  ].join(" | ");
  if (GODAN_RE.test(hay)) return "verb-godan";
  if (ICHI_RE.test(hay)) return "verb-ichidan";
  if (IRREG_RE.test(hay)) return "verb-irregular";
  if (I_ADJ_RE.test(hay)) return "i-adj";
  if (NA_ADJ_RE.test(hay)) return "na-adj";
  const section = (sectionName || "").toLowerCase();
  if (section.includes("động từ")) {
    const w = (entry == null ? void 0 : entry.word) || "";
    if (/[うくぐすつぬぶむる]$/.test(w) && /[えいきぎしちにびみり]る$/.test(w)) {
      return "verb-ichidan";
    }
    if (/する$/.test(w)) return "verb-irregular";
    if (w === "来る" || w === "くる") return "verb-irregular";
    return "verb-godan";
  }
  if (section.includes("tính từ đuôi い") || section.includes("i-adj")) return "i-adj";
  if (section.includes("tính từ đuôi な") || section.includes("na-adj")) return "na-adj";
  if (section.includes("phó từ")) return "adverb";
  if (section.includes("liên từ") || section.includes("trợ từ")) return "particle";
  if (section.includes("biểu thức")) return "expression";
  if (section.includes("trợ số từ") || section.includes("counter")) return "counter";
  if (section.includes("đại từ chỉ thị") || section.includes("nghi vấn")) return "pronoun";
  if (section.includes("số đếm")) return "other";
  if (section.includes("danh từ") || section.includes("noun")) return "noun";
  if (section.includes("ngoại lai") || section.includes("katakana")) return "noun";
  return "other";
}
const TOPIC_TAG_MAP = [
  [/cơ thể|body|健康|sức khỏe/i, "body"],
  [/thời gian|time|時間/i, "time"],
  [/thời tiết|weather|天気/i, "weather"],
  [/địa điểm|place|場所/i, "place"],
  [/phương hướng|direction|方向/i, "direction"],
  [/gia đình|family|家族/i, "family"],
  [/đồ ăn|food|food|料理|飲み物/i, "food"],
  [/giao thông|transport|transport/i, "transport"],
  [/trường học|school|学校/i, "school"],
  [/công việc|work|job|仕事/i, "work"],
  [/nhà ở|house|home|家/i, "home"],
  [/màu sắc|color|色/i, "color"],
  [/quần áo|clothes|服/i, "clothes"],
  [/thể thao|sport|スポーツ/i, "sport"],
  [/bưu điện|post|ngân hàng|bank|銀行/i, "civic"],
  [/động từ|verb/i, "verb"],
  [/tính từ|adj/i, "adjective"],
  [/danh từ|noun/i, "noun"],
  [/phó từ|adverb/i, "adverb"],
  [/trợ từ|particle/i, "particle"],
  [/số đếm|counter|数字/i, "counter"],
  [/đại từ|pronoun/i, "pronoun"],
  [/ngoại lai|gairaigo|katakana|カタカナ/i, "katakana"],
  [/biểu thức|expression/i, "expression"],
  [/tự động|tha động|自動|他動/i, "transitivity-pair"]
];
function inferTopicTags(sectionName, entry) {
  const out = /* @__PURE__ */ new Set();
  const hay = [sectionName || "", (entry == null ? void 0 : entry.sub) || "", (entry == null ? void 0 : entry.type) || "", (entry == null ? void 0 : entry.note) || ""].join(" | ");
  for (const [re, tag] of TOPIC_TAG_MAP) if (re.test(hay)) out.add(tag);
  return [...out];
}
const N5_RE = /\bN5\b|\[N5\]|N五|n5/i;
const N4_RE = /\bN4\b|\[N4\]|N四|n4/i;
function inferLevel({ title, sectionName, lessonIds, fallback = "N4" } = {}) {
  const hay = [title || "", sectionName || ""].join(" | ");
  if (N5_RE.test(hay) && !N4_RE.test(hay)) return "N5";
  if (N4_RE.test(hay) && !N5_RE.test(hay)) return "N4";
  if (Array.isArray(lessonIds) && lessonIds.length) {
    const minLesson = Math.min(...lessonIds);
    if (minLesson > 0 && minLesson <= 25) return "N5";
    if (minLesson >= 26 && minLesson <= 50) return "N4";
  }
  return fallback;
}
const DIGIT_TO_SINO = {
  "0": "rei",
  "1": "ichi",
  "2": "ni",
  "3": "san",
  "4": "yon",
  "5": "go",
  "6": "roku",
  "7": "nana",
  "8": "hachi",
  "9": "kyuu"
};
function digitsToReading(s) {
  return s.replace(/[0-9]+/g, (run) => [...run].map((d) => DIGIT_TO_SINO[d] || "").join(" "));
}
const CJK_STRIP = new RegExp(
  [
    "[\\u4e00-\\u9fff]",
    // CJK Unified Ideographs (kanji)
    "[\\u3040-\\u309f]",
    // Hiragana
    "[\\u30a0-\\u30ff]",
    // Katakana
    "[\\uff65-\\uff9f]",
    // Half-width katakana
    "[\\u3000-\\u303f]",
    // CJK symbols and punctuation
    "[\\uff01-\\uff60\\uffe0-\\uffe6]"
    // Full-width ASCII + currency
  ].join("|"),
  "g"
);
const MD_MARKS_RE = /[*_`]{1,3}/g;
const ALLOWED_RE = /[^a-zA-ZāēīōūĀĒĪŌŪâêîôûÂÊÎÔÛ \t\-'():,.?!~"]/g;
function sanitizeRomaji(text) {
  if (text == null) return "";
  let s = String(text);
  s = digitsToReading(s);
  s = s.replace(CJK_STRIP, " ");
  s = s.replace(MD_MARKS_RE, " ");
  s = s.replace(ALLOWED_RE, " ");
  s = s.replace(/\s+/g, " ").trim();
  return s;
}
const PAREN_RE = /\s*[（(]([^（(]*?(?:\([^()]*\)[^()]*)*?)[)）]\s*$/;
function parseExampleString(raw) {
  if (!raw || typeof raw !== "string") return null;
  let s = raw.trim().replace(/\r\n/g, "\n");
  if (!s) return null;
  s = s.replace(/\*\*(.*?)\*\*/g, "$1");
  let vi = "";
  const viMatch = s.match(PAREN_RE);
  if (viMatch) {
    vi = viMatch[1].trim();
    s = s.slice(0, viMatch.index).trim();
  }
  let ja = s, romaji = "";
  const slashIdx = s.lastIndexOf(" / ");
  if (slashIdx > 0) {
    ja = s.slice(0, slashIdx).trim();
    romaji = s.slice(slashIdx + 3).trim();
    if (romaji.endsWith(".")) romaji = romaji;
  }
  if (!/[\u3040-\u30ff\u4e00-\u9faf]/.test(ja)) return null;
  return { ja, romaji: sanitizeRomaji(romaji), vi };
}
function vocabExamplesV1(entry) {
  const out = [];
  if (!entry) return out;
  const parsed = parseExampleString(entry.example);
  if (parsed) out.push(parsed);
  const parsed2 = parseExampleString(entry.example2);
  if (parsed2) out.push(parsed2);
  return out;
}
const COMPOUND_CHUNK_RE = /([\u4e00-\u9faf\u3400-\u4dbf\u3040-\u30ff々〆ヵヶA-Za-z0-9]+)\s*[（(]([^)）]+)[)）]\s*[-–—:：]?\s*([^,，、;]+)/g;
function parseKanjiCompoundsV1(text) {
  if (!text || typeof text !== "string") return [];
  const out = [];
  let m;
  COMPOUND_CHUNK_RE.lastIndex = 0;
  while ((m = COMPOUND_CHUNK_RE.exec(text)) !== null) {
    const compound = m[1].trim();
    const inside = m[2].trim();
    const meaning = m[3].trim();
    let reading = inside, romaji = "";
    const slash = inside.indexOf("/");
    if (slash >= 0) {
      reading = inside.slice(0, slash).trim();
      romaji = inside.slice(slash + 1).trim();
    }
    out.push({ compound, reading, meaning, romaji: sanitizeRomaji(romaji) });
  }
  return out;
}
function parseGrammarContentV1(content2) {
  const out = { structure: "", usage: "", examples: [], notes: "" };
  if (!content2 || typeof content2 !== "string") return out;
  const normalized = content2.replace(/\r\n/g, "\n").trim();
  const structMatch = normalized.match(/\*\*cấu trúc.*?\*\*\s*[:：]?\s*\n?([^\n]+)/i) || normalized.match(/\*\*ý nghĩa.*?\*\*\s*[:：]?\s*\n?([^\n]+)/i);
  if (structMatch) out.structure = structMatch[1].trim();
  const usageMatch = normalized.match(/\*\*(?:cách dùng|giải thích|sử dụng|ý nghĩa).*?\*\*\s*[:：]?\s*\n?([\s\S]*?)(\n\n|\n\*\*|$)/i);
  if (usageMatch) out.usage = usageMatch[1].trim();
  const exBlock = normalized.match(/\*\*ví dụ.*?\*\*[:：]?\s*\n([\s\S]*?)(\n\n\*\*|$)/i);
  const exText = exBlock ? exBlock[1] : normalized;
  const lineRe = /[-•*]\s*([^\n]+)/g;
  let m;
  while ((m = lineRe.exec(exText)) !== null) {
    const parsed = parseExampleString(m[1]);
    if (parsed) out.examples.push(parsed);
    if (out.examples.length >= 6) break;
  }
  const noteMatch = normalized.match(/\*\*(?:lưu ý|note).*?\*\*\s*[:：]?\s*([\s\S]*?)(\n\n|$)/i);
  if (noteMatch) out.notes = noteMatch[1].trim();
  if (!out.usage && !out.structure && out.examples.length === 0) {
    out.usage = normalized.slice(0, 500);
  }
  return out;
}
function splitReadings(raw) {
  if (!raw) return [];
  const cleaned = String(raw).replace(/[（(][^)）]*[)）]/g, "");
  return cleaned.split(/[、,\s]+/).map((s) => s.trim()).filter(Boolean).filter((s) => !/^[（(]/.test(s) && !/[)）]$/.test(s));
}
function buildMinnaIndexes({ vocabV1, grammarV1, minnaV1, minnaLessonsV1 }) {
  const flatVocabIdx = [];
  for (const sec of vocabV1 || []) {
    for (const e of sec.entries || []) {
      flatVocabIdx.push(e.word);
    }
  }
  const wordToLessons = /* @__PURE__ */ new Map();
  const titleToLessons = /* @__PURE__ */ new Map();
  if (minnaV1 && typeof minnaV1 === "object") {
    for (const [lk, lesson] of Object.entries(minnaV1)) {
      const n = Number(lk);
      if (!Number.isFinite(n) || n < 1 || n > 50) continue;
      for (const v of lesson.vocab || []) {
        if (!(v == null ? void 0 : v.word)) continue;
        if (!wordToLessons.has(v.word)) wordToLessons.set(v.word, /* @__PURE__ */ new Set());
        wordToLessons.get(v.word).add(n);
      }
      for (const g of lesson.grammarItems || []) {
        if (!(g == null ? void 0 : g.title)) continue;
        if (!titleToLessons.has(g.title)) titleToLessons.set(g.title, /* @__PURE__ */ new Set());
        titleToLessons.get(g.title).add(n);
      }
    }
  }
  if (Array.isArray(minnaLessonsV1)) {
    for (const ml of minnaLessonsV1) {
      const n = Number(ml == null ? void 0 : ml.l);
      if (!Number.isFinite(n)) continue;
      for (const i of ml.v || []) {
        const w = flatVocabIdx[i];
        if (!w) continue;
        if (!wordToLessons.has(w)) wordToLessons.set(w, /* @__PURE__ */ new Set());
        wordToLessons.get(w).add(n);
      }
    }
  }
  const idToLessons = /* @__PURE__ */ new Map();
  if (Array.isArray(minnaLessonsV1)) {
    for (const ml of minnaLessonsV1) {
      const n = Number(ml == null ? void 0 : ml.l);
      if (!Number.isFinite(n)) continue;
      for (const gid of ml.gp || []) {
        const key = String(gid);
        if (!idToLessons.has(key)) idToLessons.set(key, /* @__PURE__ */ new Set());
        idToLessons.get(key).add(n);
      }
    }
  }
  return {
    wordToLessons,
    titleToLessons,
    grammarIdToLessons: idToLessons,
    flatVocabIdx
  };
}
function normalizeVocabV1({ vocabV1, minna }) {
  const out = [];
  const idx = (minna == null ? void 0 : minna.wordToLessons) || /* @__PURE__ */ new Map();
  for (const sec of vocabV1 || []) {
    for (const e of sec.entries || []) {
      if (!(e == null ? void 0 : e.word)) continue;
      const word = String(e.word).normalize("NFC");
      const lessonSet = idx.get(word) || idx.get(e.word);
      const lessonIds = lessonSet ? [...lessonSet].sort((a, b) => a - b) : [];
      const level = inferLevel({ sectionName: sec.name, lessonIds });
      const partOfSpeech = inferPartOfSpeech(e, sec.name);
      const topicTags = inferTopicTags(sec.name, e);
      const examples = vocabExamplesV1(e);
      const item = {
        key: vocabKey(word),
        kind: "vocab",
        level,
        word,
        reading: e.reading || "",
        romaji: sanitizeRomaji(e.romaji),
        hanviet: e.kanji || "",
        meaning: e.meaning || "",
        altMeanings: e.meaning2 ? [e.meaning2] : [],
        partOfSpeech,
        examples,
        lessonIds,
        topicTags,
        sectionId: sec.id,
        sectionName: sec.name
      };
      if (e.note) item.note = e.note;
      out.push(item);
    }
  }
  return out;
}
function normalizeKanjiV1({ kanjiV1, vocabItemsByWord, minna }) {
  const out = [];
  for (const sec of kanjiV1 || []) {
    for (const e of sec.entries || []) {
      if (!(e == null ? void 0 : e.kanji)) continue;
      const character = String(e.kanji).normalize("NFC");
      const lessonSet = /* @__PURE__ */ new Set();
      if ((minna == null ? void 0 : minna.wordToLessons) instanceof Map) {
        for (const [w, set] of minna.wordToLessons.entries()) {
          if (w && w.includes(character)) {
            for (const n of set) lessonSet.add(n);
          }
        }
      }
      const lessonIds = [...lessonSet].sort((a, b) => a - b);
      const level = inferLevel({ sectionName: sec.name, lessonIds, fallback: "N4" });
      const compounds = parseKanjiCompoundsV1(e.compounds || "");
      const example = e.example || "";
      const item = {
        key: kanjiKey(character),
        kind: "kanji",
        level,
        character,
        meaning: e.meaning || "",
        hanviet: e.title || "",
        onReadings: splitReadings(e.on),
        kunReadings: splitReadings(e.kun),
        strokeCount: Number(e.strokes) || 0,
        radicals: [],
        components: [],
        compounds,
        lessonIds,
        topicTags: inferTopicTags(sec.name, e),
        sectionId: sec.id,
        sectionName: sec.name
      };
      if (e.description) item.mnemonic = e.description;
      if (example) item.example = example;
      out.push(item);
    }
  }
  return out;
}
function normalizeGrammarV1({ grammarV1, minna }) {
  const out = [];
  for (const sec of grammarV1 || []) {
    for (const p of sec.patterns || []) {
      if (!(p == null ? void 0 : p.id)) continue;
      const idStr = String(p.id);
      let lessonSet = (minna == null ? void 0 : minna.grammarIdToLessons) && minna.grammarIdToLessons.get(idStr) || (minna == null ? void 0 : minna.titleToLessons) && minna.titleToLessons.get(p.title) || null;
      const lessonIds = lessonSet ? [...lessonSet].sort((a, b) => a - b) : [];
      const level = inferLevel({
        title: p.title,
        sectionName: sec.name,
        lessonIds,
        fallback: "N4"
      });
      const parsed = parseGrammarContentV1(p.content);
      const item = {
        key: grammarKey(idStr),
        kind: "grammar",
        level,
        sectionId: String(sec.id),
        sectionName: sec.name,
        title: p.title,
        minnaLessonId: lessonIds[0] || null,
        structure: parsed.structure,
        usage: parsed.usage,
        examples: parsed.examples,
        notes: parsed.notes,
        lessonIds,
        topicTags: []
      };
      out.push(item);
    }
  }
  return out;
}
function buildIndex(items) {
  const byKey = /* @__PURE__ */ new Map();
  const byKind = { vocab: [], kanji: [], grammar: [] };
  const byLesson = /* @__PURE__ */ new Map();
  const byTag = /* @__PURE__ */ new Map();
  const byLevel = { N5: [], N4: [] };
  const byKanjiChar = /* @__PURE__ */ new Map();
  const allItems2 = [];
  for (const it of items || []) {
    if (!it || !it.key) continue;
    byKey.set(it.key, it);
    if (byKind[it.kind]) byKind[it.kind].push(it);
    if (byLevel[it.level]) byLevel[it.level].push(it);
    for (const n of it.lessonIds || []) {
      if (!byLesson.has(n)) byLesson.set(n, []);
      byLesson.get(n).push(it);
    }
    for (const tag of it.topicTags || []) {
      if (!byTag.has(tag)) byTag.set(tag, []);
      byTag.get(tag).push(it);
    }
    if (it.kind === "vocab" && it.word) {
      for (const ch of it.word) {
        if (/[\u4e00-\u9faf\u3400-\u4dbf]/.test(ch)) {
          if (!byKanjiChar.has(ch)) byKanjiChar.set(ch, []);
          byKanjiChar.get(ch).push(it);
        }
      }
    }
    allItems2.push(it);
  }
  return { byKey, byKind, byLesson, byTag, byLevel, byKanjiChar, allItems: allItems2 };
}
function buildFromRaw(raw) {
  if (!raw) return { items: [], index: buildIndex([]), minnaIndex: null };
  const minnaIndex = buildMinnaIndexes({
    vocabV1: raw.vocabV1,
    grammarV1: raw.grammarV1,
    minnaV1: raw.minnaV1,
    minnaLessonsV1: raw.minnaLessonsV1
  });
  const vocabItems = normalizeVocabV1({ vocabV1: raw.vocabV1, minna: minnaIndex });
  const kanjiItems = normalizeKanjiV1({ kanjiV1: raw.kanjiV1, minna: minnaIndex });
  const grammarItems = normalizeGrammarV1({ grammarV1: raw.grammarV1, minna: minnaIndex });
  const items = [...vocabItems, ...kanjiItems, ...grammarItems];
  const index = buildIndex(items);
  return { items, index, minnaIndex };
}
function buildFromV2({ vocabV2, kanjiV2, grammarV2 } = {}) {
  const items = [];
  for (const v of vocabV2 || []) {
    if (!v || !v.key) continue;
    items.push({
      ...v,
      lessonIds: Array.isArray(v.lessonIds) ? v.lessonIds : [],
      topicTags: Array.isArray(v.topicTags) ? v.topicTags : [],
      examples: Array.isArray(v.examples) ? v.examples : []
    });
  }
  for (const k of kanjiV2 || []) {
    if (!k || !k.key) continue;
    items.push({
      ...k,
      lessonIds: Array.isArray(k.lessonIds) ? k.lessonIds : [],
      topicTags: Array.isArray(k.topicTags) ? k.topicTags : [],
      compounds: Array.isArray(k.compounds) ? k.compounds : [],
      onReadings: Array.isArray(k.onReadings) ? k.onReadings : [],
      kunReadings: Array.isArray(k.kunReadings) ? k.kunReadings : []
    });
  }
  for (const g of grammarV2 || []) {
    if (!g || !g.key) continue;
    items.push({
      ...g,
      lessonIds: Array.isArray(g.lessonIds) ? g.lessonIds : [],
      topicTags: Array.isArray(g.topicTags) ? g.topicTags : [],
      examples: Array.isArray(g.examples) ? g.examples : []
    });
  }
  const index = buildIndex(items);
  return { items, index, minnaIndex: null };
}
function mulberry32(seed) {
  let s = seed | 0 || 1;
  return function rand() {
    s = s + 1831565813 | 0;
    let t = s;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function shuffleInPlace(arr, rand) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  return arr;
}
function asArray(v) {
  if (v == null) return null;
  return Array.isArray(v) ? v : [v];
}
function getItem$1(index, key) {
  if (!key) return null;
  return index.byKey.get(key) || null;
}
function getBatch$1(index, spec = {}) {
  const {
    kind,
    level,
    lessonIds,
    topicTags,
    excludeKeys,
    n,
    order = "lesson",
    seed
  } = spec;
  const kinds = asArray(kind);
  const levels = asArray(level);
  const lessons = asArray(lessonIds);
  const tags = asArray(topicTags);
  const exclude = excludeKeys ? new Set(excludeKeys) : null;
  let candidates = index.allItems;
  if (kinds && kinds.length === 1 && index.byKind[kinds[0]]) {
    candidates = index.byKind[kinds[0]];
  }
  const out = [];
  for (const it of candidates) {
    if (kinds && !kinds.includes(it.kind)) continue;
    if (levels && !levels.includes(it.level)) continue;
    if (lessons) {
      const ids = it.lessonIds || [];
      let any = false;
      for (const l of lessons) if (ids.includes(l)) {
        any = true;
        break;
      }
      if (!any) continue;
    }
    if (tags) {
      const its = it.topicTags || [];
      let any = false;
      for (const t of tags) if (its.includes(t)) {
        any = true;
        break;
      }
      if (!any) continue;
    }
    if (exclude && exclude.has(it.key)) continue;
    out.push(it);
  }
  if (order === "random") {
    const rand = mulberry32(Number.isFinite(seed) ? seed : Date.now() >>> 0);
    shuffleInPlace(out, rand);
  } else if (order === "lesson") {
    out.sort(cmpByLesson);
  } else if (order === "frequency") {
    out.sort((a, b) => {
      var _a, _b;
      const ar = (_a = a.frequencyRank) != null ? _a : 999999;
      const br = (_b = b.frequencyRank) != null ? _b : 999999;
      return ar - br;
    });
  }
  if (Number.isFinite(n) && n >= 0) return out.slice(0, n);
  return out;
}
function cmpByLesson(a, b) {
  const al = a.lessonIds && a.lessonIds[0] || 99;
  const bl = b.lessonIds && b.lessonIds[0] || 99;
  if (al !== bl) return al - bl;
  const ak = a.key || "";
  const bk = b.key || "";
  return ak < bk ? -1 : ak > bk ? 1 : 0;
}
function getLesson$1(index, lessonId) {
  const id = Number(lessonId);
  const items = index.byLesson.get(id) || [];
  const out = {
    lesson: id,
    vocab: [],
    kanji: [],
    grammar: []
  };
  for (const it of items) {
    if (it.kind === "vocab") out.vocab.push(it);
    else if (it.kind === "kanji") out.kanji.push(it);
    else if (it.kind === "grammar") out.grammar.push(it);
  }
  return out;
}
function getRelated$1(index, key, k = 8) {
  const base = index.byKey.get(key);
  if (!base) return [];
  const score = /* @__PURE__ */ new Map();
  const tagSet = new Set(base.topicTags || []);
  const lessonSet = new Set(base.lessonIds || []);
  for (const it of index.allItems) {
    if (it.key === key) continue;
    if (it.kind !== base.kind) continue;
    let s = 0;
    for (const t of it.topicTags || []) if (tagSet.has(t)) s += 2;
    for (const l of it.lessonIds || []) if (lessonSet.has(l)) s += 3;
    if (base.kind === "vocab" && it.reading && base.reading && it.reading.slice(0, 2) === base.reading.slice(0, 2)) s += 1;
    if (s > 0) score.set(it, s);
  }
  return [...score.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(([it]) => it);
}
function search$1(index, q, opts = {}) {
  const { kinds, limit = 50 } = opts;
  const query = String(q || "").trim().toLowerCase();
  if (!query) return [];
  const allowed = kinds ? new Set(kinds) : null;
  const out = [];
  for (const it of index.allItems) {
    if (allowed && !allowed.has(it.kind)) continue;
    const hay = [
      it.key,
      it.word,
      it.reading,
      it.romaji,
      it.meaning,
      it.character,
      it.hanviet,
      ...Array.isArray(it.onReadings) ? it.onReadings : [],
      ...Array.isArray(it.kunReadings) ? it.kunReadings : [],
      it.title,
      it.structure,
      it.usage
    ].filter(Boolean).join(" ").toLowerCase();
    if (hay.includes(query)) out.push(it);
    if (out.length >= limit) break;
  }
  return out;
}
const SCHEMA_VERSION = "1.0";
const BUILT_AT = (/* @__PURE__ */ new Date()).toISOString();
let _state = {
  ready: false,
  schema: SCHEMA_VERSION,
  items: [],
  index: null,
  minnaIndex: null,
  raw: null,
  backing: "none"
  // 'v1' | 'v2' | 'none'
};
const _listeners = /* @__PURE__ */ new Set();
function _emitReady() {
  for (const cb of _listeners) {
    try {
      cb(_state);
    } catch (e) {
      console.error("[content] onReady listener error", e);
    }
  }
}
function init(raw) {
  const { items, index, minnaIndex } = buildFromRaw(raw);
  _state = { ready: true, schema: SCHEMA_VERSION, items, index, minnaIndex, raw, backing: "v1" };
  _emitReady();
  return _state;
}
function initFromV2(v2) {
  const { items, index } = buildFromV2(v2);
  _state = { ready: true, schema: SCHEMA_VERSION, items, index, minnaIndex: null, raw: v2, backing: "v2" };
  _emitReady();
  return _state;
}
function initFromWindow() {
  return null;
}
function onReady(cb) {
  if (typeof cb !== "function") return () => {
  };
  if (_state.ready) {
    try {
      cb(_state);
    } catch (e) {
      console.error(e);
    }
  }
  _listeners.add(cb);
  return () => _listeners.delete(cb);
}
function isReady() {
  return _state.ready;
}
function version() {
  var _a;
  return {
    schema: SCHEMA_VERSION,
    data: _state.ready ? `${_state.backing}.${((_a = _state.items) == null ? void 0 : _a.length) || 0}` : "unready",
    backing: _state.backing,
    built: BUILT_AT
  };
}
function _idx() {
  if (!_state.index) throw new Error("[content] service not initialized — bootstrap canonical v2 content first");
  return _state.index;
}
function getItem(key) {
  if (!_state.ready) return null;
  return getItem$1(_idx(), key);
}
function getBatch(spec) {
  if (!_state.ready) return [];
  return getSrsAwareBatch(_idx(), spec);
}
function getSrsAwareBatch(index, spec = {}) {
  const bias = resolveSrsBias(spec);
  if (!bias) return getBatch$1(index, spec);
  const baseSpec = stripSrsSpec(spec);
  const maxItems = Number.isFinite(spec.n) && spec.n >= 0 ? spec.n : null;
  const candidates = getBatch$1(index, { ...baseSpec, n: void 0 });
  if (!candidates.length) return [];
  const buckets = bucketizeBySrsState(candidates, spec.before);
  if (!buckets.hasReviewedState) {
    return getBatch$1(index, baseSpec);
  }
  const ranked = bias === "mixed" ? buildMixedSrsBatch(buckets, maxItems, spec.srsWeights) : bias === "weak" ? buildWeakSrsBatch(buckets) : [...buckets.due, ...buckets.fresh, ...buckets.review];
  return maxItems == null ? ranked : ranked.slice(0, maxItems);
}
function resolveSrsBias(spec = {}) {
  const rawBias = spec.srsBias || (spec.order === "due" ? "due" : null);
  if (!rawBias || rawBias === "none") return null;
  return ["due", "mixed", "weak"].includes(rawBias) ? rawBias : null;
}
function stripSrsSpec(spec = {}) {
  const { srsBias, srsWeights, before, ...rest } = spec;
  return {
    ...rest,
    order: rest.order === "due" ? "lesson" : rest.order
  };
}
function bucketizeBySrsState(items, before) {
  const now = Number.isFinite(before) ? before : Date.now();
  const due = [];
  const fresh = [];
  const review = [];
  let hasReviewedState = false;
  for (const item of items) {
    const state = (item == null ? void 0 : item.key) ? srs.stateFor(item.key) : null;
    if (!state) {
      fresh.push(item);
      continue;
    }
    hasReviewedState = true;
    if (state.dueAt <= now) due.push({ item, state });
    else review.push({ item, state });
  }
  due.sort((a, b) => a.state.dueAt - b.state.dueAt);
  review.sort((a, b) => a.state.dueAt - b.state.dueAt);
  return {
    due: due.map((entry) => entry.item),
    fresh,
    review: review.map((entry) => entry.item),
    weakReview: review.slice().sort((a, b) => scoreWeakState(b.state) - scoreWeakState(a.state)).map((entry) => entry.item),
    hasReviewedState
  };
}
function buildMixedSrsBatch(buckets, maxItems, weights = {}) {
  var _a, _b, _c;
  if (maxItems == null) return [...buckets.due, ...buckets.fresh, ...buckets.review];
  const count = Math.max(0, maxItems);
  if (count === 0) return [];
  const overdueWeight = Math.max(0, (_a = weights.overdue) != null ? _a : 0.5);
  const newWeight = Math.max(0, (_b = weights.new) != null ? _b : 0.3);
  const reviewWeight = Math.max(0, (_c = weights.review) != null ? _c : 0.2);
  const totalWeight = overdueWeight + newWeight + reviewWeight || 1;
  const dueTarget = Math.round(count * overdueWeight / totalWeight);
  const freshTarget = Math.round(count * newWeight / totalWeight);
  const reviewTarget = Math.max(0, count - dueTarget - freshTarget);
  const picks = [
    ...buckets.due.slice(0, dueTarget),
    ...buckets.fresh.slice(0, freshTarget),
    ...buckets.review.slice(0, reviewTarget)
  ];
  const used = new Set(picks.map((item) => item.key));
  const leftovers = [...buckets.due, ...buckets.fresh, ...buckets.review].filter((item) => !used.has(item.key));
  return [...picks, ...leftovers].slice(0, count);
}
function buildWeakSrsBatch(buckets) {
  return [...buckets.due, ...buckets.weakReview, ...buckets.fresh];
}
function scoreWeakState(state) {
  var _a;
  if (!state) return 0;
  const lapseScore = (state.lapses || 0) * 100;
  const lowStabilityScore = Math.max(0, 30 - (state.stability || 0));
  const lowRetrievabilityScore = Math.round((1 - ((_a = state.retrievability) != null ? _a : 1)) * 50);
  return lapseScore + lowStabilityScore + lowRetrievabilityScore;
}
function getLesson(lessonId) {
  if (!_state.ready) return { lesson: Number(lessonId), vocab: [], kanji: [], grammar: [] };
  return getLesson$1(_idx(), lessonId);
}
function getRelated(key, k) {
  if (!_state.ready) return [];
  return getRelated$1(_idx(), key, k);
}
function search(q, opts) {
  if (!_state.ready) return [];
  return search$1(_idx(), q, opts);
}
function allItems() {
  return _state.ready ? _state.items.slice() : [];
}
let _refs = {
  counters: null,
  particles: null,
  keigoPairs: null,
  confusables: null,
  radicals: null,
  verbForms: null,
  connectors: null,
  conjugationVerbs: null,
  conjugationAdjectives: null,
  mocks: /* @__PURE__ */ new Map(),
  reading: [],
  listening: [],
  pronunciation: null
};
function _installReferences(refs) {
  _refs = { ..._refs, ...refs };
  _emitReady();
}
function getCounters() {
  return _refs.counters;
}
function getParticles() {
  return _refs.particles;
}
function getKeigoPairs() {
  return _refs.keigoPairs;
}
function getRadicals() {
  return _refs.radicals;
}
function getVerbForms() {
  return _refs.verbForms || [];
}
function getConnectors() {
  return _refs.connectors || [];
}
function getConfusables(key) {
  if (!_refs.confusables) return [];
  if (key) {
    const set = _refs.confusables.find((p) => {
      var _a;
      return (_a = p.pair) == null ? void 0 : _a.includes(key);
    });
    return set ? set.pair.filter((k) => k !== key).map((k) => getItem(k)).filter(Boolean) : [];
  }
  return _refs.confusables;
}
function getConjugation(verbKey) {
  if (!_refs.conjugationVerbs) return null;
  return _refs.conjugationVerbs[verbKey] || null;
}
function getAdjectiveConjugation(adjKey) {
  if (!_refs.conjugationAdjectives) return null;
  return _refs.conjugationAdjectives[adjKey] || null;
}
function getMock(id) {
  if (_refs.mocks && _refs.mocks.get) {
    const v = _refs.mocks.get(id);
    if (!v) return null;
    if (v.lazy) return { lazy: true, meta: v.meta };
    return v;
  }
  return _refs.mocks && _refs.mocks[id] || null;
}
function _setMock(id, payload) {
  if (_refs.mocks && _refs.mocks.set) _refs.mocks.set(id, payload);
}
function listMocks() {
  if (_refs.mocks && _refs.mocks.keys) return [..._refs.mocks.keys()];
  return Object.keys(_refs.mocks || {});
}
function getReading(id) {
  return (_refs.reading || []).find((p) => p.id === id) || null;
}
function listReading() {
  return (_refs.reading || []).slice();
}
function getListening(id) {
  return (_refs.listening || []).find((p) => p.id === id) || null;
}
function listListening() {
  return (_refs.listening || []).slice();
}
function getPronunciation(key) {
  if (!_refs.pronunciation) return null;
  return _refs.pronunciation[key] || null;
}
function getGrammarComparesWith(key) {
  if (!_state.ready) return [];
  const item = getItem(key);
  const list = Array.isArray(item == null ? void 0 : item.comparesWith) ? item.comparesWith : [];
  return list.map((entry) => {
    const partner = getItem(entry.partnerKey);
    if (!partner) return null;
    return { ...entry, partner };
  }).filter(Boolean);
}
function getWordFamilyFor(kanjiCharOrKey) {
  if (!_state.ready) return [];
  let char = kanjiCharOrKey || "";
  if (char.startsWith("k:")) {
    const kItem2 = getItem(char);
    char = (kItem2 == null ? void 0 : kItem2.character) || "";
  }
  if (!char) return [];
  const kKey = `k:${char}`;
  const kItem = getItem(kKey);
  if (Array.isArray(kItem == null ? void 0 : kItem.wordFamily) && kItem.wordFamily.length > 0) {
    return kItem.wordFamily.map((k) => getItem(k)).filter((v) => v && v.kind === "vocab");
  }
  return _state.items.filter((it) => it.kind === "vocab" && typeof it.word === "string" && it.word.includes(char)).slice(0, 50);
}
function getMinnaLessonsIntroducing(key) {
  var _a, _b;
  if (!_state.ready) return [];
  const minna = _state.minnaIndex;
  if (!minna) {
    const item = getItem(key);
    const ids = Array.isArray(item == null ? void 0 : item.lessonIds) ? item.lessonIds : [];
    return ids.map((id) => ({ lesson: id, title: `Lesson ${id}` }));
  }
  const hits = [];
  const lessons = Array.isArray(minna) ? minna : Object.values(minna);
  for (const l of lessons) {
    const present = (l.vocab || []).includes(key) || (l.kanji || []).includes(key) || (l.grammar || []).includes(key);
    if (present) hits.push({ lesson: (_a = l.lesson) != null ? _a : l.id, title: l.title || l.vi || `Lesson ${(_b = l.lesson) != null ? _b : l.id}` });
  }
  return hits;
}
let _questions = /* @__PURE__ */ new Map();
let _questionIndex = { byKind: /* @__PURE__ */ new Map(), byGrammar: /* @__PURE__ */ new Map() };
let _audioManifest = null;
let _pitchTable = null;
let _pronunciationOverrides = null;
function _installQuestions(list) {
  _questions = /* @__PURE__ */ new Map();
  _questionIndex = { byKind: /* @__PURE__ */ new Map(), byGrammar: /* @__PURE__ */ new Map() };
  const add = (id, q) => {
    _questions.set(id, q);
    if (q.kind) {
      const byKind = _questionIndex.byKind;
      const arr = byKind.get(q.kind) || [];
      arr.push(q);
      byKind.set(q.kind, arr);
    }
    if (q.grammarKey) {
      const byGr = _questionIndex.byGrammar;
      const arr = byGr.get(q.grammarKey) || [];
      arr.push(q);
      byGr.set(q.grammarKey, arr);
    }
  };
  if (Array.isArray(list)) list.forEach((q) => (q == null ? void 0 : q.id) && add(q.id, q));
  else if (list && typeof list === "object") Object.entries(list).forEach(([id, q]) => q && add(id, { id, ...q }));
}
function getExplanation(questionId) {
  const q = _questions.get(questionId);
  if (!q || !q.explanation) return null;
  return q.explanation;
}
function getQuestion(questionId) {
  return _questions.get(questionId) || null;
}
function getQuestions(spec = {}) {
  const { kind, grammarKey: grammarKey2, level, difficulty, n, seed } = spec;
  let pool;
  if (kind && _questionIndex.byKind.has(kind)) pool = _questionIndex.byKind.get(kind).slice();
  else if (grammarKey2 && _questionIndex.byGrammar.has(grammarKey2)) pool = _questionIndex.byGrammar.get(grammarKey2).slice();
  else pool = [..._questions.values()];
  if (level) pool = pool.filter((q) => !q.level || q.level === level);
  if (difficulty) pool = pool.filter((q) => !q.difficulty || q.difficulty === difficulty);
  if (typeof seed === "number") {
    let s = seed >>> 0;
    const rand = () => {
      s = s * 1664525 + 1013904223 >>> 0;
      return s / 4294967296;
    };
    for (let i = pool.length - 1; i > 0; i -= 1) {
      const j = Math.floor(rand() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
  }
  if (typeof n === "number" && n > 0) pool = pool.slice(0, n);
  return pool;
}
function _installAudioManifest(manifest) {
  _audioManifest = manifest || null;
}
function getAudioManifest() {
  return _audioManifest;
}
function getAudioUrl(audioKey) {
  if (!audioKey || !(_audioManifest == null ? void 0 : _audioManifest.entries)) return null;
  const entry = _audioManifest.entries[audioKey];
  return (entry == null ? void 0 : entry.url) || null;
}
function _installPitch(table) {
  _pitchTable = table || null;
}
function getPitch(wordOrReading) {
  if (!_pitchTable || !wordOrReading) return null;
  return _pitchTable[wordOrReading] || null;
}
function _installPronunciationOverrides(table) {
  _pronunciationOverrides = table || null;
}
function getPronunciationOverride(text) {
  if (!_pronunciationOverrides || !text) return null;
  if (_pronunciationOverrides[text]) return _pronunciationOverrides[text];
  const keys = Object.keys(_pronunciationOverrides).filter((k) => text.includes(k)).sort((a, b) => b.length - a.length);
  return keys.length ? { match: keys[0], reading: _pronunciationOverrides[keys[0]] } : null;
}
function applyPronunciationOverrides(text) {
  if (!_pronunciationOverrides || !text) return text;
  let out = text;
  const entries = Object.entries(_pronunciationOverrides).sort((a, b) => b[0].length - a[0].length);
  for (const [surface, reading] of entries) {
    if (out.includes(surface)) {
      out = out.split(surface).join(reading);
    }
  }
  return out;
}
const content = {
  init,
  initFromV2,
  initFromWindow,
  onReady,
  isReady,
  version,
  getItem,
  getBatch,
  getLesson,
  getRelated,
  search,
  allItems,
  getCounters,
  getParticles,
  getKeigoPairs,
  getRadicals,
  getVerbForms,
  getConnectors,
  getConfusables,
  getConjugation,
  getAdjectiveConjugation,
  getMock,
  listMocks,
  getReading,
  listReading,
  getListening,
  listListening,
  getPronunciation,
  getGrammarComparesWith,
  getWordFamilyFor,
  getMinnaLessonsIntroducing,
  // v2 extensions
  getExplanation,
  getQuestion,
  getQuestions,
  getAudioManifest,
  getAudioUrl,
  getPitch,
  getPronunciationOverride,
  applyPronunciationOverrides,
  _installReferences,
  _setMock,
  _installQuestions,
  _installAudioManifest,
  _installPitch,
  _installPronunciationOverrides
};
export {
  grammarKey as a,
  content as c,
  getItem as g,
  kanjiKey as k,
  parseKey as p,
  vocabKey as v
};
