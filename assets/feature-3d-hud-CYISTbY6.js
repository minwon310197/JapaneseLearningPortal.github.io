const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VocabDojo-KhqyBOrj.js","./vendor-react-BYxMSDiB.js","./TrainerTopBar-Ht4KBG1w.js","./index-D1BqAvip.js","./feature-3d-CFvJkEt3.js","./vendor-three-Ba7Uoy0A.js","./feature-3d-DB-cvyPV.css","./vendor-router-BTJacUKt.js","./vendor-icons-DHCyxOF-.js","./vendor-supabase-DTEAj5J1.js","./index-Dehd9LT2.css","./empty-Bvm-mx50.js","./feature-3d-scenery-C3eSpuWG.js","./quest-chains-CiwzmCpJ.js","./useScoreEngine-fO3A-KMP.js","./FlashcardMode-ShKBbtGU.js","./PhaseRibbon-BrG3g-XS.js","./useQuestionMeta-D4bSCufi.js","./useQuestionMeta-8h7agkzV.css","./QuizMode-BZfpUmXt.js","./QuizFeedback-C5B0QP7Y.js","./MatchMode-BJLGM0c5.js","./ScaffoldingLayer-BRKW1Dj-.js","./useStudySession-NFFE7V-8.js","./FillBlankMode-Cp8uDzAK.js","./TrueFalseMode-CScvKHpA.js","./useDataHelper-CLs8Rj_F.js","./index-Cmrzkkdy.js","./useGameEngine-CJjDfpsP.js","./VocabDojo-CqnDvM0m.css","./KanjiAcademy-lDBjxWff.js","./KanjiBattleMode-BIjkIpC4.js","./ajl-rewards-5BQsC-ZT.js","./vendor-motion-CoQCRLnb.js","./KanjiAcademy-BL5ACU6L.css","./GrammarArena-vJ-I13F-.js","./useGrammarQuiz-BIkUJbBQ.js","./ListeningLab-BRhzNTtW.js","./feature-particles-BSY69iaM.js","./ListeningLab-3HFqxcMB.css","./ReadingRoom-BvM4paJ9.js","./ReadingRoom-CWOFEmkx.css","./PuzzleWorld-BL9vdrse.js","./PuzzleWorld-BUohIAM1.css","./MindTricks-Bt5Lyeqv.js","./MindTricks-oq3crO-0.css","./index-BunvGhD7.js","./StoryMode-DiwdwGg0.js","./StoryMode-Bbr6bPIY.css","./MinnaLessons-DT8Xi5tH.js","./JLPTMock-ChAsQLrJ.js","./DailyPractice-DN0EOtuV.js","./DailyPractice-DjD604un.css","./ConjugationDojo-kd4giDs_.js","./AdventureArena-xWcAIEpE.js","./AdventureArena-k2HjbeLL.css","./index-CK7ruGCp.js","./index-BckzqNHP.css","./GachaPage-DvakJp7f.js","./cosmetic-registry-BevBw2sp.js","./sfx-catalog-DZj5Y_7h.js","./GachaPage-B-osMnaY.css","./economy-DWU_E1da.css","./ShopPage-oA5EV9Lz.js","./MarketPage-C3vBmGut.js","./useTodayKey-BBNOYeod.js","./InventoryPage-DPiuCpcu.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload, k as kanaToRomaji, K as KANJI_BY_BIOME, G as GRAMMAR_ECHO_POOL, u as useLearningStore, a as useAppStore, b as useDataStore, s as safeGetItem, S as STORAGE_KEYS, c as createSeededRng, d as safeSetItem, e as speakVi, f as speakJP, t as touchFlyToggle, g as touchJump, h as touchInteract, i as applyTouchZoom, j as applyTouchOrbit, l as setTouchMove, m as setTouchFlyVertical, n as setTouchSprint, o as cleanRomajiSpacing, p as useQuality, q as getTrainerSlot, r as emit$1, W as WORLD_EVENTS$1, v as on, w as getNow, x as regionAt, y as useThree, z as useStage, A as useFrame, B as useOptionalWorldRuntime, C as sampleY, M as ModelEntity, H as Html, D as consumeInteract } from "./feature-3d-CFvJkEt3.js";
import { r as reactExports, j as jsxRuntimeExports, R as React } from "./vendor-react-BYxMSDiB.js";
import { c as createClient } from "./vendor-supabase-DTEAj5J1.js";
import { J as Object3D, bc as FogExp2, aj as MathUtils } from "./vendor-three-Ba7Uoy0A.js";
const __vite_import_meta_env__ = { "BASE_URL": "./", "DEV": false, "MODE": "raw", "PROD": true, "SSR": false, "VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyZ2ZpaXV5ZmFqd3N3b2ZwZ3FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1ODQxODksImV4cCI6MjA4OTE2MDE4OX0.zIhTyu4P-JDh79r25xYm3n0j5qUWLJ0D14QVF04fVi0", "VITE_SUPABASE_URL": "https://wrgfiiuyfajwswofpgqg.supabase.co" };
function normalizeEnvValue(value) {
  return typeof value === "string" ? value.trim() : "";
}
function getPublicRuntimeConfig(env = __vite_import_meta_env__ != null ? __vite_import_meta_env__ : {}) {
  const config = {
    supabaseUrl: normalizeEnvValue(env.VITE_SUPABASE_URL),
    supabaseAnonKey: normalizeEnvValue(env.VITE_SUPABASE_ANON_KEY)
  };
  const missing = [];
  if (!config.supabaseUrl) missing.push("VITE_SUPABASE_URL");
  if (!config.supabaseAnonKey) missing.push("VITE_SUPABASE_ANON_KEY");
  return {
    ...config,
    missing,
    ok: missing.length === 0
  };
}
function formatMissingPublicEnvMessage(missing) {
  const list2 = Array.isArray(missing) ? missing.filter(Boolean) : [];
  if (list2.length === 0) return "Runtime config is valid.";
  return `Missing public runtime config: ${list2.join(", ")}. Cloud features are disabled until these variables are provided.`;
}
function reportPublicRuntimeConfigIssues(config = getPublicRuntimeConfig(), logger = console.error) {
  if (config.ok) return false;
  logger(`[Config] ${formatMissingPublicEnvMessage(config.missing)}`);
  return true;
}
const FLAG_STORAGE_KEY = "n4.flags.n4upgrade.v1";
const DEFAULT_N4_UPGRADE_FLAGS = Object.freeze({
  // Phase 1 — scaffolding skeleton available but not forced into modes yet.
  scaffolding: true,
  // Phase 1/2 — surface newly wired reference pages / drawer.
  referencePages: true,
  // Phase 3/4 — register the 4 creative modes.
  newModes: true,
  // Per-mode toolbar override bag; key = mode id, value = boolean|object.
  toolbar: {}
});
function readFlagStore() {
  if (typeof window !== "undefined" && window.__N4_FLAGS_OVERRIDE__) {
    return window.__N4_FLAGS_OVERRIDE__ || {};
  }
  try {
    if (typeof localStorage === "undefined") return {};
    const raw = localStorage.getItem(FLAG_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}
function getN4UpgradeFlags() {
  const stored = readFlagStore();
  return {
    ...DEFAULT_N4_UPGRADE_FLAGS,
    ...stored,
    toolbar: { ...DEFAULT_N4_UPGRADE_FLAGS.toolbar || {}, ...stored.toolbar || {} }
  };
}
function isN4Flag(name) {
  return Boolean(getN4UpgradeFlags()[name]);
}
const runtimeConfig = getPublicRuntimeConfig();
const isSupabaseConfigured = runtimeConfig.ok;
function createSupabaseConfigError(path = "Supabase client") {
  return new Error(`[Config] ${path} unavailable. ${formatMissingPublicEnvMessage(runtimeConfig.missing)}`);
}
function assertSupabaseConfigured(path = "Supabase feature") {
  if (!isSupabaseConfigured) {
    throw createSupabaseConfigError(path);
  }
}
function createUnavailableClient(path = "supabase") {
  const callable = () => {
    throw createSupabaseConfigError(path);
  };
  return new Proxy(callable, {
    get(_target, prop) {
      if (prop === "__isMissingConfig__") return true;
      if (prop === "then") return void 0;
      if (prop === Symbol.toStringTag) return "MissingSupabaseClient";
      if (prop === "toString") return () => "[MissingSupabaseClient]";
      if (prop === "valueOf") return () => callable;
      return createUnavailableClient(`${path}.${String(prop)}`);
    },
    apply() {
      throw createSupabaseConfigError(path);
    }
  });
}
const supabase = isSupabaseConfigured ? createClient(runtimeConfig.supabaseUrl, runtimeConfig.supabaseAnonKey, {
  auth: { flowType: "pkce", detectSessionInUrl: true, persistSession: true }
}) : createUnavailableClient();
const WORLD_STUDY_PROGRESS_STORAGE_KEY = "n4-world-study-progress-v1";
const STUDY_PROGRESS_CHANGED_EVENT = "n4-world-study-progress:changed";
const STUDY_DOMAINS = ["vocab", "vocabJlpt", "kanji", "grammar", "particles", "conjugation", "keigo"];
let memoryState = null;
function hasStorage() {
  return typeof window !== "undefined" && !!window.localStorage;
}
function emptyDomain() {
  return { completed: [], missed: [], resetAt: 0, updatedAt: 0 };
}
function normalizeDomain(raw) {
  const completed = Array.isArray(raw == null ? void 0 : raw.completed) ? raw.completed.map(String).filter(Boolean) : [];
  const missed = Array.isArray(raw == null ? void 0 : raw.missed) ? raw.missed.map(String).filter(Boolean) : [];
  const completedSet = new Set(completed);
  const resetAt = Number(raw == null ? void 0 : raw.resetAt) || 0;
  return {
    completed: [...completedSet],
    missed: [...new Set(missed.filter((key) => !completedSet.has(key)))],
    resetAt,
    updatedAt: Math.max(Number(raw == null ? void 0 : raw.updatedAt) || 0, resetAt)
  };
}
function normalizeState(raw) {
  const next = {};
  for (const id of STUDY_DOMAINS) next[id] = normalizeDomain(raw == null ? void 0 : raw[id]);
  return next;
}
function readState() {
  if (!hasStorage()) {
    memoryState = normalizeState(memoryState);
    return memoryState;
  }
  try {
    const parsed = JSON.parse(window.localStorage.getItem(WORLD_STUDY_PROGRESS_STORAGE_KEY) || "{}");
    return normalizeState(parsed);
  } catch (e) {
    return normalizeState(null);
  }
}
function emitProgressChanged(detail = {}) {
  if (typeof window === "undefined") return;
  try {
    window.dispatchEvent(new CustomEvent(STUDY_PROGRESS_CHANGED_EVENT, { detail }));
  } catch (e) {
  }
}
function writeState(state, detail = {}) {
  const normalized = normalizeState(state);
  if (!hasStorage()) {
    memoryState = normalized;
    emitProgressChanged(detail);
    return;
  }
  try {
    window.localStorage.setItem(WORLD_STUDY_PROGRESS_STORAGE_KEY, JSON.stringify(normalized));
  } catch (e) {
    memoryState = normalized;
  }
  emitProgressChanged(detail);
}
function domainState(domainId) {
  const state = readState();
  return state[domainId] || emptyDomain();
}
function itemKeyOf(item, getKey) {
  if (!item) return "";
  const key = typeof getKey === "function" ? getKey(item) : item.key || item.id;
  return String(key || "");
}
function uniqueItems(items, getKey) {
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const item of Array.isArray(items) ? items : []) {
    const key = itemKeyOf(item, getKey);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}
function randomItem(items, rng) {
  if (!items.length) return null;
  const rand = typeof rng === "function" ? rng : Math.random;
  return items[Math.floor(rand() * items.length)];
}
function getStudyDomainProgress(domainId, total = 0) {
  const current = domainState(domainId);
  const completedCount = current.completed.length;
  const missedCount = current.missed.length;
  const available = Math.max(0, Number(total) || 0);
  return {
    completedCount,
    missedCount,
    remainingCount: Math.max(0, available - completedCount),
    isComplete: available > 0 && completedCount >= available,
    resetAt: current.resetAt
  };
}
function recordStudyAnswer(domainId, itemKey, isCorrect) {
  const key = String(itemKey || "");
  if (!STUDY_DOMAINS.includes(domainId) || !key) return;
  const state = readState();
  const current = normalizeDomain(state[domainId]);
  const completed = new Set(current.completed);
  const missed = new Set(current.missed);
  const updatedAt = Date.now();
  if (isCorrect) {
    completed.add(key);
    missed.delete(key);
  } else if (!completed.has(key)) {
    missed.add(key);
  }
  state[domainId] = {
    completed: [...completed],
    missed: [...missed],
    resetAt: current.resetAt,
    updatedAt
  };
  writeState(state, { domainId, action: isCorrect ? "answer-correct" : "answer-wrong" });
}
function resetStudyDomain(domainId) {
  if (!STUDY_DOMAINS.includes(domainId)) return;
  const state = readState();
  const resetAt = Date.now();
  state[domainId] = { completed: [], missed: [], resetAt, updatedAt: resetAt };
  writeState(state, { domainId, action: "reset" });
}
function pickStudyItem(domainId, items, getKey, options = {}) {
  const pool = uniqueItems(items, getKey);
  if (!pool.length) return null;
  const current = domainState(domainId);
  const completed = new Set(current.completed);
  const missed = new Set(current.missed);
  const remaining = pool.filter((item) => !completed.has(itemKeyOf(item, getKey)));
  if (!remaining.length) return null;
  const missedItems = remaining.filter((item) => missed.has(itemKeyOf(item, getKey)));
  const freshItems = remaining.filter((item) => !missed.has(itemKeyOf(item, getKey)));
  const rng = options.rng || Math.random;
  const reviewChance = Number.isFinite(options.reviewChance) ? options.reviewChance : 0.25;
  if (missedItems.length && (!freshItems.length || rng() < reviewChance)) {
    return randomItem(missedItems, rng);
  }
  return randomItem(freshItems.length ? freshItems : remaining, rng);
}
function getStudyProgressSnapshot() {
  return readState();
}
function mergeStudyProgressSnapshots(localSnapshot, cloudSnapshot) {
  const local = normalizeState(localSnapshot);
  const cloud = normalizeState(cloudSnapshot);
  const merged = {};
  for (const domainId of STUDY_DOMAINS) {
    const localDomain = local[domainId];
    const cloudDomain = cloud[domainId];
    if (cloudDomain.resetAt > localDomain.resetAt) {
      merged[domainId] = cloudDomain;
      continue;
    }
    if (localDomain.resetAt > cloudDomain.resetAt) {
      merged[domainId] = localDomain;
      continue;
    }
    const completed = /* @__PURE__ */ new Set([...cloudDomain.completed, ...localDomain.completed]);
    const missed = /* @__PURE__ */ new Set([...cloudDomain.missed, ...localDomain.missed]);
    for (const key of completed) missed.delete(key);
    merged[domainId] = {
      completed: [...completed],
      missed: [...missed],
      resetAt: localDomain.resetAt || cloudDomain.resetAt || 0,
      updatedAt: Math.max(localDomain.updatedAt || 0, cloudDomain.updatedAt || 0)
    };
  }
  return merged;
}
function setStudyProgressSnapshot(snapshot, options = {}) {
  const next = options.merge ? mergeStudyProgressSnapshots(readState(), snapshot) : normalizeState(snapshot);
  writeState(next, { action: options.source || "set-snapshot" });
  return next;
}
const MIN_EASE = 1.3;
const MAX_EASE = 3.5;
const DAY_MS = 24 * 60 * 60 * 1e3;
const MAX_INTERVAL_DAYS = 365;
function defaultState(key, now = Date.now()) {
  return {
    key,
    ease: 2.5,
    stability: 0,
    retrievability: 1,
    reps: 0,
    lapses: 0,
    lastReviewedAt: 0,
    dueAt: now,
    // due immediately for fresh items
    history: []
  };
}
function nextState(state, quality, now = Date.now()) {
  const prev = state || defaultState("_", now);
  const q = Math.max(0, Math.min(3, Number(quality) | 0));
  let ease = prev.ease;
  let interval;
  let lapses = prev.lapses;
  let reps = prev.reps + 1;
  if (q === 0) {
    lapses = prev.lapses + 1;
    ease = clamp(ease - 0.2, MIN_EASE, MAX_EASE);
    interval = 0;
  } else {
    const eAdj = q === 1 ? -0.15 : q === 2 ? 0 : 0.15;
    ease = clamp(ease + eAdj, MIN_EASE, MAX_EASE);
    const prevInterval = prev.reps === 0 ? 0 : clampDays((prev.dueAt - prev.lastReviewedAt) / DAY_MS);
    if (prev.reps === 0) {
      interval = q === 1 ? 1 : q === 2 ? 2 : 4;
    } else if (prev.reps === 1) {
      interval = q === 1 ? 3 : q === 2 ? 6 : 10;
    } else {
      const base = Math.max(1, prevInterval);
      const factor = q === 1 ? 1.2 : q === 2 ? ease : ease * 1.3;
      interval = Math.round(base * factor);
    }
  }
  interval = Math.max(0, Math.min(MAX_INTERVAL_DAYS, interval));
  const dueAt = q === 0 ? now + 10 * 60 * 1e3 : now + interval * DAY_MS;
  const stability = q === 0 ? 0 : Math.max(1, interval);
  const retrievability = q === 0 ? 0.5 : Math.min(1, 0.6 + q * 0.13);
  const history = (prev.history || []).concat([{ t: now, q }]);
  if (history.length > 50) history.shift();
  return {
    key: prev.key,
    ease,
    stability,
    retrievability,
    reps,
    lapses,
    lastReviewedAt: now,
    dueAt,
    history
  };
}
function isDue(state, now = Date.now()) {
  if (!state) return true;
  return state.dueAt <= now;
}
function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n));
}
function clampDays(n) {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(n, MAX_INTERVAL_DAYS);
}
const STORAGE_KEY = "n4:srs:v1";
const STORAGE_SCHEMA = "1.0";
function hasLocalStorage() {
  try {
    return typeof localStorage !== "undefined";
  } catch (e) {
    return false;
  }
}
const _memoryStore = /* @__PURE__ */ new Map();
function loadAll() {
  if (!hasLocalStorage()) {
    return { schema: STORAGE_SCHEMA, states: Object.fromEntries(_memoryStore) };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { schema: STORAGE_SCHEMA, states: {} };
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || !parsed.states) {
      return { schema: STORAGE_SCHEMA, states: {} };
    }
    return { schema: parsed.schema || STORAGE_SCHEMA, states: parsed.states };
  } catch (e) {
    console.warn("[srs] loadAll failed", e);
    return { schema: STORAGE_SCHEMA, states: {} };
  }
}
function saveAll(blob) {
  if (!hasLocalStorage()) {
    _memoryStore.clear();
    for (const [k, v] of Object.entries((blob == null ? void 0 : blob.states) || {})) _memoryStore.set(k, v);
    return true;
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      schema: (blob == null ? void 0 : blob.schema) || STORAGE_SCHEMA,
      states: (blob == null ? void 0 : blob.states) || {}
    }));
    return true;
  } catch (e) {
    console.warn("[srs] saveAll failed", e);
    return false;
  }
}
function clearAll() {
  if (!hasLocalStorage()) {
    _memoryStore.clear();
    return;
  }
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
  }
}
function migrateIfNeeded(blob) {
  if (!blob || typeof blob !== "object") return { schema: STORAGE_SCHEMA, states: {} };
  if (blob.schema === STORAGE_SCHEMA) return blob;
  return { schema: STORAGE_SCHEMA, states: blob.states || {} };
}
let _blob = null;
let _content = null;
const _listeners$1 = /* @__PURE__ */ new Set();
function _ensureLoaded() {
  if (_blob) return _blob;
  _blob = migrateIfNeeded(loadAll());
  return _blob;
}
function _persist() {
  if (!_blob) return;
  saveAll(_blob);
}
function bindContent(contentService) {
  _content = contentService;
}
function stateFor(key) {
  if (!key) return null;
  const b = _ensureLoaded();
  return b.states[key] || null;
}
function recordReview({ itemKey, quality, reviewedAt, meta } = {}) {
  if (!itemKey) return null;
  const b = _ensureLoaded();
  const now = Number.isFinite(reviewedAt) ? reviewedAt : Date.now();
  const prev = b.states[itemKey] || defaultState(itemKey, now);
  const next = nextState(prev, quality, now);
  b.states[itemKey] = next;
  _persist();
  const review = { itemKey, quality, reviewedAt: now, meta: meta || null };
  for (const cb of _listeners$1) {
    try {
      cb(review, next);
    } catch (e) {
      console.error(e);
    }
  }
  return { dueAt: next.dueAt, intervalDays: Math.round((next.dueAt - now) / 864e5) };
}
function dueQueue(spec = {}) {
  const { kind, n, before } = spec;
  const now = Number.isFinite(before) ? before : Date.now();
  const b = _ensureLoaded();
  const keys = [];
  for (const [key, st] of Object.entries(b.states)) {
    if (!isDue(st, now)) continue;
    if (kind && !key.startsWith(kindToPrefix(kind))) continue;
    keys.push({ key, dueAt: st.dueAt });
  }
  keys.sort((a, b2) => a.dueAt - b2.dueAt);
  const sliced = Number.isFinite(n) && n >= 0 ? keys.slice(0, n) : keys;
  if (!_content) return sliced.map((x) => ({ key: x.key, dueAt: x.dueAt }));
  return sliced.map((x) => _content.getItem(x.key)).filter(Boolean);
}
function kindToPrefix(kind) {
  if (kind === "vocab") return "v:";
  if (kind === "kanji") return "k:";
  if (kind === "grammar") return "g:";
  return "";
}
function onReview(cb) {
  if (typeof cb !== "function") return () => {
  };
  _listeners$1.add(cb);
  return () => _listeners$1.delete(cb);
}
function isItemDue(key, now = Date.now()) {
  const st = stateFor(key);
  return isDue(st, now);
}
function _resetAll() {
  clearAll();
  _blob = null;
}
const debug = {
  dumpState() {
    return structuredClone(_ensureLoaded());
  },
  resetItem(key) {
    const b = _ensureLoaded();
    if (b.states[key]) {
      delete b.states[key];
      _persist();
    }
  },
  stats() {
    const b = _ensureLoaded();
    const entries = Object.values(b.states);
    return {
      total: entries.length,
      due: entries.filter((s) => isDue(s)).length,
      lapses: entries.reduce((a, s) => a + s.lapses, 0),
      reps: entries.reduce((a, s) => a + s.reps, 0)
    };
  }
};
const srs = {
  bindContent,
  stateFor,
  recordReview,
  dueQueue,
  onReview,
  isItemDue,
  debug,
  _resetAll
};
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
  const list2 = Array.isArray(item == null ? void 0 : item.comparesWith) ? item.comparesWith : [];
  return list2.map((entry) => {
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
function _installQuestions(list2) {
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
  if (Array.isArray(list2)) list2.forEach((q) => (q == null ? void 0 : q.id) && add(q.id, q));
  else if (list2 && typeof list2 === "object") Object.entries(list2).forEach(([id, q]) => q && add(id, { id, ...q }));
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
const TRAINER_REGISTRY = {
  "vocab-dojo": {
    modes: ["flashcard", "quiz", "fill-blank", "match", "match-drag", "listening", "true-false", "speed", "speed-run", "category-sort", "bingo", "picture", "minimal-pair", "word-chain", "cloze-passage", "compound-word", "word-family"],
    load: () => __vitePreload(() => import("./VocabDojo-KhqyBOrj.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]) : void 0, import.meta.url)
  },
  "kanji-academy": {
    modes: ["flashcard", "quiz", "match", "reading", "writing", "family", "okurigana", "on-kun", "look-alike"],
    load: () => __vitePreload(() => import("./KanjiAcademy-lDBjxWff.js"), true ? __vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,31,32,33,26,27,28,34]) : void 0, import.meta.url)
  },
  "grammar-arena": {
    modes: ["quiz", "fill-blank", "cloze", "particles", "flashcard", "true-false", "scramble", "sort", "sort-timeline", "grammar-vs", "correction", "form-transform", "pattern-completion"],
    load: () => __vitePreload(() => import("./GrammarArena-vJ-I13F-.js"), true ? __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12,13,14,19,16,17,18,20,15,25,22,24,23,26,36]) : void 0, import.meta.url)
  },
  "listening-lab": {
    modes: ["dictation", "comprehension", "speech", "drills", "numbers", "dialogue", "radio"],
    load: () => __vitePreload(() => import("./ListeningLab-BRhzNTtW.js"), true ? __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11,12,13,14,38,19,16,17,18,20,26,28,39]) : void 0, import.meta.url)
  },
  "reading-room": {
    modes: ["passages", "sentences", "context"],
    load: () => __vitePreload(() => import("./ReadingRoom-BvM4paJ9.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,10,11,12,13,14,19,16,17,18,20,26,28,41]) : void 0, import.meta.url)
  },
  "puzzle-world": {
    modes: ["hangman", "speed-type", "build", "wordsearch", "crossword"],
    load: () => __vitePreload(() => import("./PuzzleWorld-BL9vdrse.js"), true ? __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11,12,13,14,26,28,43]) : void 0, import.meta.url)
  },
  "mind-tricks": {
    modes: ["memory", "pattern", "speed", "association", "kanji-parts", "odd-one-out", "audio-memory"],
    load: () => __vitePreload(() => import("./MindTricks-Bt5Lyeqv.js"), true ? __vite__mapDeps([44,1,2,3,4,5,6,7,8,9,10,11,12,13,14,19,16,17,18,20,21,22,26,28,45]) : void 0, import.meta.url)
  },
  "boss-battle": {
    modes: ["easy", "normal", "hard", "nightmare"],
    load: () => __vitePreload(() => import("./index-BunvGhD7.js"), true ? __vite__mapDeps([46,1,2,3,4,5,6,7,8,9,10,11,12,13,14,38,26]) : void 0, import.meta.url)
  },
  "story-mode": {
    modes: ["palace", "adventures", "scenarios"],
    load: () => __vitePreload(() => import("./StoryMode-DiwdwGg0.js"), true ? __vite__mapDeps([47,1,2,3,4,5,6,7,8,9,10,11,12,13,14,19,16,17,18,20,26,28,48]) : void 0, import.meta.url)
  },
  "minna-lessons": {
    modes: ["lesson-picker", "vocab", "grammar", "quiz", "combined-quiz"],
    load: () => __vitePreload(() => import("./MinnaLessons-DT8Xi5tH.js"), true ? __vite__mapDeps([49,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]) : void 0, import.meta.url)
  },
  "jlpt-mock": {
    modes: ["full", "vocab-section", "grammar-section", "reading-section", "listening-section"],
    load: () => __vitePreload(() => import("./JLPTMock-ChAsQLrJ.js"), true ? __vite__mapDeps([50,1,2,3,4,5,6,7,8,9,10,11,12,13,14,19,16,17,18,20,26,36]) : void 0, import.meta.url)
  },
  "daily-practice": {
    modes: ["today", "review", "challenge", "weak-points"],
    load: () => __vitePreload(() => import("./DailyPractice-DN0EOtuV.js"), true ? __vite__mapDeps([51,1,2,3,4,5,6,7,8,9,10,11,12,13,14,19,16,17,18,20,21,22,25,15,26,36,28,52]) : void 0, import.meta.url)
  },
  "conjugation-dojo": {
    modes: ["verb-quiz", "verb-fill", "adj-quiz", "adj-fill", "mixed", "flashcard", "volitional-drill"],
    load: () => __vitePreload(() => import("./ConjugationDojo-kd4giDs_.js"), true ? __vite__mapDeps([53,1,2,3,4,5,6,7,8,9,10,11,12,13,14,38,15,16,17,18]) : void 0, import.meta.url)
  },
  "adventure-arena": {
    modes: ["kanji-battle", "arena-blitz", "ninja-typing", "izakaya", "anime-quotes", "sushi-chef", "world-boss"],
    load: () => __vitePreload(() => import("./AdventureArena-xWcAIEpE.js"), true ? __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,10,11,12,13,14,31,32,22,17,18,20,33,26,28,55]) : void 0, import.meta.url)
  },
  "particle-dojo": {
    modes: ["fill-drop", "quick-pick", "cascade", "sentence-build"],
    load: () => __vitePreload(() => import("./index-CK7ruGCp.js"), true ? __vite__mapDeps([56,1,2,3,4,5,6,7,8,9,10,11,12,13,36,57]) : void 0, import.meta.url)
  }
};
const PARTICLE_QUESTIONS = [
  // ─── BASIC ───────────────────────────────────────────────────────────────
  {
    id: "p001",
    sentence: "わたし＿＿がくせいです。",
    answer: "は",
    distractors: ["が", "を", "に"],
    vi: "Tôi là học sinh.",
    grammar: "は — chủ đề câu",
    level: "basic"
  },
  {
    id: "p002",
    sentence: "ねこ＿＿います。",
    answer: "が",
    distractors: ["は", "を", "で"],
    vi: "Có con mèo.",
    grammar: "が — tồn tại / chủ ngữ",
    level: "basic"
  },
  {
    id: "p003",
    sentence: "みず＿＿のみます。",
    answer: "を",
    distractors: ["が", "は", "に"],
    vi: "Uống nước.",
    grammar: "を — tân ngữ trực tiếp",
    level: "basic"
  },
  {
    id: "p004",
    sentence: "がっこう＿＿いきます。",
    answer: "に",
    distractors: ["で", "を", "へ"],
    vi: "Đi đến trường.",
    grammar: "に — đích đến / phương hướng",
    level: "basic"
  },
  {
    id: "p005",
    sentence: "としょかん＿＿べんきょうします。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Học ở thư viện.",
    grammar: "で — nơi thực hiện hành động",
    level: "basic"
  },
  {
    id: "p006",
    sentence: "ともだち＿＿えいがをみます。",
    answer: "と",
    distractors: ["に", "で", "が"],
    vi: "Xem phim cùng bạn.",
    grammar: "と — cùng với",
    level: "basic"
  },
  {
    id: "p007",
    sentence: "にほん＿＿くるまです。",
    answer: "の",
    distractors: ["は", "が", "に"],
    vi: "Xe của Nhật.",
    grammar: "の — sở hữu / thuộc về",
    level: "basic"
  },
  {
    id: "p008",
    sentence: "えき＿＿あるきます。",
    answer: "へ",
    distractors: ["に", "で", "を"],
    vi: "Đi bộ về phía ga.",
    grammar: "へ — hướng về phía",
    level: "basic"
  },
  {
    id: "p009",
    sentence: "コーヒー＿＿のみます。",
    answer: "も",
    distractors: ["を", "は", "が"],
    vi: "Cũng uống cà phê.",
    grammar: "も — cũng, thêm vào",
    level: "basic"
  },
  {
    id: "p010",
    sentence: "ここ＿＿すわってください。",
    answer: "に",
    distractors: ["で", "を", "へ"],
    vi: "Hãy ngồi ở đây.",
    grammar: "に — vị trí tồn tại / điểm tiếp xúc",
    level: "basic"
  },
  {
    id: "p011",
    sentence: "バス＿＿かいしゃにいきます。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Đi làm bằng xe buýt.",
    grammar: "で — phương tiện di chuyển",
    level: "basic"
  },
  {
    id: "p012",
    sentence: "ははは まいにち コーヒー＿＿のみます。",
    answer: "を",
    distractors: ["が", "で", "に"],
    vi: "Mẹ uống cà phê mỗi ngày.",
    grammar: "を — tân ngữ trực tiếp",
    level: "basic"
  },
  {
    id: "p013",
    sentence: "あなた＿＿なまえはなんですか。",
    answer: "の",
    distractors: ["は", "が", "を"],
    vi: "Tên của bạn là gì?",
    grammar: "の — sở hữu",
    level: "basic"
  },
  {
    id: "p014",
    sentence: "くじ＿＿かいしゃがはじまります。",
    answer: "に",
    distractors: ["で", "から", "まで"],
    vi: "Công ty bắt đầu lúc 9 giờ.",
    grammar: "に — thời điểm cụ thể",
    level: "basic"
  },
  {
    id: "p015",
    sentence: "やまだ＿＿せんせいはやさしいです。",
    answer: "さん",
    distractors: ["は", "が", "の"],
    vi: "Thầy Yamada rất tốt bụng.",
    grammar: "さん — danh hiệu lịch sự",
    level: "basic"
  },
  // ─── INTERMEDIATE ─────────────────────────────────────────────────────────
  {
    id: "p016",
    sentence: "ここ＿＿どうぞ。",
    answer: "から",
    distractors: ["まで", "に", "で"],
    vi: "Xin mời, bắt đầu từ đây.",
    grammar: "から — xuất phát điểm",
    level: "intermediate"
  },
  {
    id: "p017",
    sentence: "えき＿＿あるいて五分です。",
    answer: "から",
    distractors: ["まで", "に", "で"],
    vi: "Đi bộ từ ga 5 phút.",
    grammar: "から — điểm xuất phát (nơi chốn)",
    level: "intermediate"
  },
  {
    id: "p018",
    sentence: "ごご六じ＿＿しごとがおわります。",
    answer: "まで",
    distractors: ["から", "に", "で"],
    vi: "Công việc kết thúc đến 6 giờ chiều.",
    grammar: "まで — điểm kết thúc",
    level: "intermediate"
  },
  {
    id: "p019",
    sentence: "とうきょう＿＿おおさか＿＿しんかんせんでいきます。",
    answer: "から",
    distractors: ["に", "で", "へ"],
    vi: "Đi từ Tokyo đến Osaka bằng Shinkansen.",
    grammar: "から … まで — từ … đến …",
    level: "intermediate"
  },
  {
    id: "p020",
    sentence: "わたし＿＿おとうとはがくせいです。",
    answer: "の",
    distractors: ["が", "は", "と"],
    vi: "Em trai tôi là học sinh.",
    grammar: "の — sở hữu / quan hệ",
    level: "intermediate"
  },
  {
    id: "p021",
    sentence: "ねつ＿＿あるので、くすりをのみました。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Vì bị sốt nên tôi đã uống thuốc.",
    grammar: "が — chủ ngữ của mệnh đề subordinate",
    level: "intermediate"
  },
  {
    id: "p022",
    sentence: "かれ＿＿にほんご＿＿じょうずです。",
    answer: "は",
    distractors: ["が", "の", "を"],
    vi: "Anh ấy giỏi tiếng Nhật.",
    grammar: "は — chủ đề; が — đặc tính tốt/giỏi",
    level: "intermediate"
  },
  {
    id: "p023",
    sentence: "にほん＿＿きたのはことしです。",
    answer: "に",
    distractors: ["へ", "で", "を"],
    vi: "Năm nay tôi đến Nhật.",
    grammar: "に — đích đến (động từ đến)",
    level: "intermediate"
  },
  {
    id: "p024",
    sentence: "あの山＿＿たかいです。",
    answer: "は",
    distractors: ["が", "も", "を"],
    vi: "Ngọn núi đó cao.",
    grammar: "は — chủ đề câu miêu tả tính chất",
    level: "intermediate"
  },
  {
    id: "p025",
    sentence: "たなか＿＿ほん＿＿よみながら、コーヒーをのんでいます。",
    answer: "さん",
    distractors: ["は", "が", "の"],
    vi: "Anh Tanaka vừa đọc sách vừa uống cà phê.",
    grammar: "ながら — làm hai việc đồng thời",
    level: "intermediate"
  },
  {
    id: "p026",
    sentence: "おんがく＿＿きき＿＿、うんどうします。",
    answer: "を",
    distractors: ["に", "で", "が"],
    vi: "Vừa nghe nhạc vừa tập thể dục.",
    grammar: "を — tân ngữ; ながら — đồng thời",
    level: "intermediate"
  },
  {
    id: "p027",
    sentence: "あめ＿＿ふっているのに、でかけました。",
    answer: "が",
    distractors: ["は", "を", "で"],
    vi: "Dù trời đang mưa nhưng vẫn ra ngoài.",
    grammar: "が — chủ ngữ; のに — dù vậy mà",
    level: "intermediate"
  },
  {
    id: "p028",
    sentence: "この仕事＿＿できるのはあなた＿＿けです。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Chỉ có bạn mới có thể làm được công việc này.",
    grammar: "が — chủ ngữ; だけ — chỉ",
    level: "intermediate"
  },
  {
    id: "p029",
    sentence: "あの店＿＿あついラーメン＿＿たべました。",
    answer: "で",
    distractors: ["に", "が", "へ"],
    vi: "Tôi đã ăn ramen nóng ở tiệm đó.",
    grammar: "で — địa điểm thực hiện hành động",
    level: "intermediate"
  },
  {
    id: "p030",
    sentence: "りんご＿＿みかん＿＿すきです。",
    answer: "も",
    distractors: ["を", "が", "と"],
    vi: "Tôi thích cả táo lẫn quýt.",
    grammar: "も … も — cả … lẫn …",
    level: "intermediate"
  },
  {
    id: "p031",
    sentence: "どこ＿＿いってもいいです。",
    answer: "へ",
    distractors: ["に", "で", "が"],
    vi: "Đi đâu cũng được.",
    grammar: "へ — hướng (bất kỳ hướng nào)",
    level: "intermediate"
  },
  {
    id: "p032",
    sentence: "かれ＿＿えいご＿＿フランスご＿＿はなせます。",
    answer: "は",
    distractors: ["が", "も", "を"],
    vi: "Anh ấy nói được cả tiếng Anh lẫn tiếng Pháp.",
    grammar: "も … も — cả … lẫn …",
    level: "intermediate"
  },
  // ─── ADVANCED ─────────────────────────────────────────────────────────────
  {
    id: "p033",
    sentence: "かれ＿＿ほうが、わたし＿＿より上手です。",
    answer: "の",
    distractors: ["が", "は", "を"],
    vi: "Anh ấy giỏi hơn tôi.",
    grammar: "より — so sánh hơn",
    level: "advanced"
  },
  {
    id: "p034",
    sentence: "あめ＿＿ふる＿＿、かさをもってきた。",
    answer: "が",
    distractors: ["は", "で", "を"],
    vi: "Vì trời sẽ mưa nên tôi mang ô theo.",
    grammar: "ので — lý do / nguyên nhân",
    level: "advanced"
  },
  {
    id: "p035",
    sentence: "びょうき＿＿な＿＿、しゅっせきしました。",
    answer: "なの",
    distractors: ["ので", "のに", "なのに"],
    vi: "Dù bị ốm nhưng vẫn đi học.",
    grammar: "なのに — dù vậy (trái kỳ vọng)",
    level: "advanced"
  },
  {
    id: "p036",
    sentence: "よる おそい＿＿、でんわしてきた。",
    answer: "のに",
    distractors: ["ので", "から", "けど"],
    vi: "Dù đêm khuya mà vẫn gọi điện.",
    grammar: "のに — dù vậy (trái kỳ vọng)",
    level: "advanced"
  },
  {
    id: "p037",
    sentence: "この問題＿＿ついて、せつめいしてください。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Hãy giải thích về vấn đề này.",
    grammar: "について — về (chủ đề)",
    level: "advanced"
  },
  {
    id: "p039",
    sentence: "かいぎ＿＿おいて、あたらしいけいかくがはっぴょうされた。",
    answer: "に",
    distractors: ["で", "が", "を"],
    vi: "Trong cuộc họp, kế hoạch mới đã được công bố.",
    grammar: "において — trong (bối cảnh trang trọng)",
    level: "advanced"
  },
  {
    id: "p040",
    sentence: "てんき＿＿よって、けいかくがかわる。",
    answer: "に",
    distractors: ["で", "が", "を"],
    vi: "Kế hoạch thay đổi tùy theo thời tiết.",
    grammar: "によって — tùy theo, do (nguyên nhân/phương tiện)",
    level: "advanced"
  },
  {
    id: "p041",
    sentence: "この仕事＿＿かぎり、しんぱいしないでください。",
    answer: "に",
    distractors: ["が", "で", "を"],
    vi: "Chừng nào còn công việc này, đừng lo lắng.",
    grammar: "にかぎり — chừng nào còn",
    level: "advanced"
  },
  {
    id: "p042",
    sentence: "むずかしい問題＿＿かかわらず、あきらめなかった。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Dù vấn đề khó khăn, anh ấy không bỏ cuộc.",
    grammar: "にかかわらず — bất kể",
    level: "advanced"
  },
  {
    id: "p043",
    sentence: "しごと＿＿かえりに、スーパーによりました。",
    answer: "の",
    distractors: ["が", "を", "で"],
    vi: "Trên đường về sau khi làm việc, tôi ghé siêu thị.",
    grammar: "の帰りに — trên đường về từ",
    level: "advanced"
  },
  {
    id: "p044",
    sentence: "なん＿＿ためにべんきょうしているのですか。",
    answer: "の",
    distractors: ["が", "か", "を"],
    vi: "Bạn học để làm gì?",
    grammar: "のために — vì mục đích / vì lý do",
    level: "advanced"
  },
  {
    id: "p045",
    sentence: "この本＿＿よめば、日本語がうまくなります。",
    answer: "を",
    distractors: ["が", "に", "で"],
    vi: "Nếu đọc cuốn sách này, tiếng Nhật sẽ giỏi hơn.",
    grammar: "を読めば — nếu đọc",
    level: "advanced"
  },
  // ─── EXTRA / Mixed ─────────────────────────────────────────────────────────
  {
    id: "p046",
    sentence: "かれ＿＿えいご＿＿じょうずです。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Anh ấy giỏi tiếng Anh.",
    grammar: "が — chủ ngữ với tính từ năng lực (じょうず)",
    level: "intermediate"
  },
  {
    id: "p047",
    sentence: "あにはまいあさ ジョギング＿＿しています。",
    answer: "を",
    distractors: ["が", "に", "で"],
    vi: "Anh trai tôi mỗi sáng đi jogging.",
    grammar: "を — tân ngữ",
    level: "basic"
  },
  {
    id: "p048",
    sentence: "かのじょ＿＿いうことをよくきいてください。",
    answer: "の",
    distractors: ["が", "は", "を"],
    vi: "Hãy lắng nghe những gì cô ấy nói.",
    grammar: "の — danh hóa / thay thế that-clause",
    level: "intermediate"
  },
  {
    id: "p049",
    sentence: "わたし＿＿かれをあいしています。",
    answer: "は",
    distractors: ["が", "を", "も"],
    vi: "Tôi yêu anh ấy.",
    grammar: "は — chủ đề câu",
    level: "basic"
  },
  {
    id: "p050",
    sentence: "五時間＿＿ねましたが、まだねむいです。",
    answer: "も",
    distractors: ["は", "が", "で"],
    vi: "Tôi ngủ những 5 tiếng mà vẫn buồn ngủ.",
    grammar: "も — nhấn mạnh số lượng lớn",
    level: "intermediate"
  },
  {
    id: "p051",
    sentence: "むずかしい試験＿＿ごうかくしました。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi đã đậu kỳ thi khó.",
    grammar: "に合格する — đậu kỳ thi",
    level: "intermediate"
  },
  {
    id: "p052",
    sentence: "はは＿＿てがみ＿＿かきました。",
    answer: "に",
    distractors: ["へ", "を", "で"],
    vi: "Tôi đã viết thư cho mẹ.",
    grammar: "に — người nhận",
    level: "basic"
  },
  {
    id: "p053",
    sentence: "でんしゃ＿＿のって、えき＿＿いきます。",
    answer: "に",
    distractors: ["で", "を", "へ"],
    vi: "Lên tàu đi đến ga.",
    grammar: "に乗る — lên (phương tiện)",
    level: "intermediate"
  },
  {
    id: "p054",
    sentence: "あした＿＿テストがあります。",
    answer: "は",
    distractors: ["が", "に", "で"],
    vi: "Ngày mai có bài kiểm tra.",
    grammar: "は — chủ đề thời gian",
    level: "basic"
  },
  {
    id: "p055",
    sentence: "まいにち にほんご＿＿べんきょうしています。",
    answer: "を",
    distractors: ["が", "に", "で"],
    vi: "Mỗi ngày tôi học tiếng Nhật.",
    grammar: "を — tân ngữ của べんきょうする",
    level: "basic"
  },
  {
    id: "p056",
    sentence: "ふじ山＿＿のぼったことがありますか。",
    answer: "に",
    distractors: ["を", "で", "が"],
    vi: "Bạn đã từng leo núi Fuji chưa?",
    grammar: "に登る — leo lên (đỉnh)",
    level: "intermediate"
  },
  {
    id: "p057",
    sentence: "にほんご＿＿はなし＿＿、かれ＿＿はなしかけました。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Tôi bắt chuyện với anh ấy bằng tiếng Nhật.",
    grammar: "で — phương tiện ngôn ngữ",
    level: "intermediate"
  },
  {
    id: "p058",
    sentence: "このえいが＿＿みたことがありません。",
    answer: "は",
    distractors: ["が", "を", "に"],
    vi: "Tôi chưa từng xem bộ phim này.",
    grammar: "は — nhấn mạnh đối tượng phủ định",
    level: "intermediate"
  },
  {
    id: "p059",
    sentence: "あなた＿＿あえてよかったです。",
    answer: "に",
    distractors: ["と", "が", "を"],
    vi: "Thật vui khi được gặp bạn.",
    grammar: "に会う — gặp (ai đó)",
    level: "basic"
  },
  {
    id: "p060",
    sentence: "かれ＿＿しか、この仕事はできません。",
    answer: "に",
    distractors: ["が", "で", "を"],
    vi: "Chỉ anh ấy mới làm được công việc này.",
    grammar: "にしか — chỉ (người đó mới)",
    level: "advanced"
  },
  {
    id: "p061",
    sentence: "ともだち＿＿たのまれて、てつだいました。",
    answer: "に",
    distractors: ["から", "で", "が"],
    vi: "Được bạn nhờ nên tôi đã giúp.",
    grammar: "に頼まれる — được nhờ bởi",
    level: "advanced"
  },
  {
    id: "p062",
    sentence: "かのじょ＿＿こえ＿＿きいて、うれしくなった。",
    answer: "の",
    distractors: ["が", "は", "を"],
    vi: "Nghe giọng cô ấy tôi vui hơn.",
    grammar: "の — sở hữu",
    level: "basic"
  },
  {
    id: "p063",
    sentence: "くに＿＿でた＿＿、もうじゅうねんになります。",
    answer: "を",
    distractors: ["に", "が", "で"],
    vi: "Đã 10 năm kể từ khi rời quê hương.",
    grammar: "を出る — rời khỏi (nơi chốn)",
    level: "advanced"
  },
  {
    id: "p064",
    sentence: "もっとはやく＿＿きてください。",
    answer: "に",
    distractors: ["が", "を", "で"],
    vi: "Hãy đến sớm hơn một chút.",
    grammar: "に来る — đến (nơi nào đó)",
    level: "basic"
  },
  {
    id: "p065",
    sentence: "せんせい＿＿しつもんしました。",
    answer: "に",
    distractors: ["を", "で", "が"],
    vi: "Tôi đã hỏi thầy giáo.",
    grammar: "に質問する — hỏi (ai đó)",
    level: "basic"
  },
  {
    id: "p066",
    sentence: "かぜ＿＿ひいてしまいました。",
    answer: "を",
    distractors: ["が", "に", "で"],
    vi: "Tôi đã bị cảm lạnh.",
    grammar: "を引く — bị (bệnh)",
    level: "intermediate"
  },
  {
    id: "p067",
    sentence: "なつやすみ＿＿にほん＿＿いくつもりです。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Kỳ nghỉ hè tôi định đi Nhật.",
    grammar: "に — đích đến của ý định",
    level: "intermediate"
  },
  {
    id: "p068",
    sentence: "もし雨＿＿ふれば、いえにいます。",
    answer: "が",
    distractors: ["は", "を", "で"],
    vi: "Nếu trời mưa, tôi ở nhà.",
    grammar: "が降れば — nếu trời mưa",
    level: "intermediate"
  },
  {
    id: "p069",
    sentence: "かれ＿＿まって、いっしょにいきましょう。",
    answer: "を",
    distractors: ["に", "で", "が"],
    vi: "Hãy chờ anh ấy và cùng nhau đi.",
    grammar: "を待つ — chờ (ai đó)",
    level: "basic"
  },
  {
    id: "p070",
    sentence: "そのけっか＿＿もとづいて、はんだんしました。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi đã phán đoán dựa trên kết quả đó.",
    grammar: "に基づく — dựa trên",
    level: "advanced"
  },
  {
    id: "p071",
    sentence: "バス＿＿おくれてしまいました。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi đã bị trễ xe buýt.",
    grammar: "に遅れる — trễ (giờ/phương tiện)",
    level: "basic"
  },
  {
    id: "p072",
    sentence: "あしたは どこ＿＿いきません。",
    answer: "へも",
    distractors: ["にも", "でも", "をも"],
    vi: "Ngày mai tôi sẽ không đi đâu cả.",
    grammar: "へも — cũng không (hướng đến)",
    level: "basic"
  },
  {
    id: "p073",
    sentence: "このケーキは わたし＿＿つくりました。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Chiếc bánh này do tôi làm.",
    grammar: "が — nhấn mạnh người thực hiện hành động",
    level: "basic"
  },
  {
    id: "p074",
    sentence: "ナイフ＿＿パンをきります。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Cắt bánh mì bằng dao.",
    grammar: "で — phương tiện/công cụ",
    level: "basic"
  },
  {
    id: "p075",
    sentence: "かれは クラス＿＿いちばんせがたかいです。",
    answer: "で",
    distractors: ["に", "は", "が"],
    vi: "Cậu ấy cao nhất trong lớp.",
    grammar: "で — trong phạm vi (so sánh nhất)",
    level: "intermediate"
  },
  {
    id: "p076",
    sentence: "さくら＿＿きれいにさいています。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Hoa anh đào đang nở đẹp.",
    grammar: "が — chủ ngữ của hiện tượng tự nhiên/tình trạng",
    level: "basic"
  },
  {
    id: "p077",
    sentence: "このへやは あつい＿＿、まどをあけましょう。",
    answer: "から",
    distractors: ["ので", "のに", "けど"],
    vi: "Phòng này nóng nên hãy mở cửa sổ.",
    grammar: "から — lý do chủ quan (kèm lời mời/đề nghị)",
    level: "intermediate"
  },
  {
    id: "p078",
    sentence: "あめ＿＿ふっています。",
    answer: "が",
    distractors: ["は", "を", "で"],
    vi: "Trời đang mưa.",
    grammar: "が — diễn tả hiện tượng tự nhiên",
    level: "basic"
  },
  {
    id: "p079",
    sentence: "いっしゅうかん＿＿さんかい、テニスをします。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi chơi tennis 3 lần một tuần.",
    grammar: "に — tỷ lệ/tần suất",
    level: "basic"
  },
  {
    id: "p080",
    sentence: "ともだち＿＿プレゼントをあげます。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi tặng quà cho bạn.",
    grammar: "に — đối tượng tiếp nhận (người nhận)",
    level: "basic"
  },
  {
    id: "p081",
    sentence: "せんせい＿＿ほめられました。",
    answer: "に",
    distractors: ["から", "を", "で"],
    vi: "Tôi được giáo viên khen.",
    grammar: "に — người thực hiện hành động (trong câu bị động)",
    level: "intermediate"
  },
  {
    id: "p082",
    sentence: "きょうは いそがしい＿＿、あしたにしてください。",
    answer: "ので",
    distractors: ["から", "のに", "けど"],
    vi: "Hôm nay tôi bận nên xin hãy để ngày mai.",
    grammar: "ので — lý do khách quan/lịch sự",
    level: "intermediate"
  },
  {
    id: "p083",
    sentence: "にほんのせいかつ＿＿なれましたか。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Bạn đã quen với cuộc sống ở Nhật chưa?",
    grammar: "に慣れる — quen với",
    level: "intermediate"
  },
  {
    id: "p084",
    sentence: "わたしは いぬ＿＿こわいです。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Tôi sợ chó.",
    grammar: "が — đối tượng của cảm xúc (sợ, ghét, thích)",
    level: "basic"
  },
  {
    id: "p085",
    sentence: "としょかんのまえ＿＿こうえんがあります。",
    answer: "に",
    distractors: ["で", "を", "へ"],
    vi: "Trước thư viện có một công viên.",
    grammar: "に — vị trí tồn tại",
    level: "basic"
  },
  {
    id: "p086",
    sentence: "こうえん＿＿さんぽします。",
    answer: "を",
    distractors: ["に", "で", "が"],
    vi: "Đi dạo trong công viên.",
    grammar: "を — không gian di chuyển qua",
    level: "intermediate"
  },
  {
    id: "p087",
    sentence: "そらをとり＿＿とんでいます。",
    answer: "が",
    distractors: ["を", "に", "で"],
    vi: "Chim đang bay trên trời.",
    grammar: "が — chủ ngữ của động từ",
    level: "basic"
  },
  {
    id: "p088",
    sentence: "そら＿＿とりがとんでいます。",
    answer: "を",
    distractors: ["に", "で", "が"],
    vi: "Chim đang bay trên trời.",
    grammar: "を — không gian di chuyển qua",
    level: "intermediate"
  },
  {
    id: "p089",
    sentence: "あに＿＿カメラをかりました。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi mượn máy ảnh từ anh trai (hoặc: から).",
    grammar: "に (hoặc から) — nguồn cung cấp / mượn từ ai",
    level: "basic"
  },
  {
    id: "p090",
    sentence: "１２じ＿＿ねました。",
    answer: "に",
    distractors: ["で", "から", "まで"],
    vi: "Tôi đã ngủ lúc 12 giờ.",
    grammar: "に — thời điểm cụ thể",
    level: "basic"
  },
  {
    id: "p091",
    sentence: "スーパー＿＿かいものをします。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Tôi mua sắm ở siêu thị.",
    grammar: "で — Nơi chốn xảy ra hành động",
    level: "basic"
  },
  {
    id: "p092",
    sentence: "あした、だれ＿＿きますか。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Ngày mai, ai sẽ đến?",
    grammar: "が — Chủ ngữ mang từ để hỏi (nghi vấn từ)",
    level: "basic"
  },
  {
    id: "p093",
    sentence: "えんぴつ＿＿かいてください。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Hãy viết bằng bút chì.",
    grammar: "で — Phương tiện, công cụ",
    level: "basic"
  },
  {
    id: "p094",
    sentence: "わたしは コーヒー＿＿いいです。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Tôi thì chọn cà phê (là được).",
    grammar: "が — Sự lựa chọn",
    level: "intermediate"
  },
  {
    id: "p095",
    sentence: "やまださん＿＿あいました。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi đã gặp anh Yamada.",
    grammar: "に会う — Gặp ai đó",
    level: "basic"
  },
  {
    id: "p096",
    sentence: "でんしゃ＿＿のります。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Lên tàu điện.",
    grammar: "に乗る — Lên phương tiện",
    level: "basic"
  },
  {
    id: "p097",
    sentence: "でんしゃ＿＿おります。",
    answer: "を",
    distractors: ["に", "で", "が"],
    vi: "Xuống tàu điện.",
    grammar: "を降りる — Xuống phương tiện",
    level: "basic"
  },
  {
    id: "p098",
    sentence: "みち＿＿わたります。",
    answer: "を",
    distractors: ["に", "で", "が"],
    vi: "Băng qua đường.",
    grammar: "を渡る — Đi ngang qua không gian",
    level: "basic"
  },
  {
    id: "p099",
    sentence: "あさ、７じ＿＿おきます。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi thức dậy lúc 7 giờ sáng.",
    grammar: "に — Thời điểm",
    level: "basic"
  },
  {
    id: "p100",
    sentence: "かぜ＿＿がっこうをやすみました。",
    answer: "で",
    distractors: ["に", "から", "が"],
    vi: "Vì cảm cúm nên tôi nghỉ học.",
    grammar: "で — Nguyên nhân, lý do",
    level: "intermediate"
  },
  {
    id: "p101",
    sentence: "このカメラは とうきょう＿＿かいました。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Tôi mua máy ảnh này ở Tokyo.",
    grammar: "で — Nơi chốn hành động",
    level: "basic"
  },
  {
    id: "p102",
    sentence: "にほんご＿＿はなします。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Nói chuyện bằng tiếng Nhật.",
    grammar: "で — Phương tiện, ngôn ngữ",
    level: "basic"
  },
  {
    id: "p103",
    sentence: "かみ＿＿なまえをかきます。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Viết tên lên giấy.",
    grammar: "に書く — Bề mặt tiếp xúc",
    level: "basic"
  },
  {
    id: "p104",
    sentence: "はこのなか＿＿りんごがあります。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Trong hộp có quả táo.",
    grammar: "に — Nơi tồn tại (với あります/います)",
    level: "basic"
  },
  {
    id: "p105",
    sentence: "りんご＿＿３つあります。",
    answer: "が",
    distractors: ["は", "を", "に"],
    vi: "Có 3 quả táo.",
    grammar: "が — Chủ ngữ của sự tồn tại",
    level: "basic"
  },
  {
    id: "p106",
    sentence: "すずきさん＿＿ききました。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi đã hỏi anh Suzuki.",
    grammar: "に聞く — Hỏi ai đó",
    level: "basic"
  },
  {
    id: "p107",
    sentence: "１じかん＿＿やすみましょう。",
    answer: "ぐらい",
    distractors: ["ごろ", "しか", "まで"],
    vi: "Hãy nghỉ khoảng 1 tiếng.",
    grammar: "ぐらい — Khoảng thời gian",
    level: "basic"
  },
  {
    id: "p108",
    sentence: "あしたは １０じ＿＿にきます。",
    answer: "ごろ",
    distractors: ["ぐらい", "しか", "まで"],
    vi: "Ngày mai tôi sẽ đến lúc khoảng 10 giờ.",
    grammar: "ごろ — Khoảng thời điểm",
    level: "basic"
  },
  {
    id: "p109",
    sentence: "５ふん＿＿まちなさい。",
    answer: "だけ",
    distractors: ["しか", "でも", "ごろ"],
    vi: "Hãy chờ đúng 5 phút thôi.",
    grammar: "だけ — Chỉ, đúng giới hạn (đi với câu khẳng định)",
    level: "intermediate"
  },
  {
    id: "p110",
    sentence: "５ふん＿＿まちません。",
    answer: "しか",
    distractors: ["だけ", "でも", "ごろ"],
    vi: "Tôi chỉ chờ 5 phút thôi (không hơn).",
    grammar: "しか〜ない — Chỉ (đi với phủ định)",
    level: "intermediate"
  },
  {
    id: "p111",
    sentence: "あめ＿＿ふっても、いきます。",
    answer: "が",
    distractors: ["は", "を", "で"],
    vi: "Dù trời có mưa, tôi vẫn đi.",
    grammar: "が — Chủ ngữ trong vế phụ",
    level: "intermediate"
  },
  {
    id: "p112",
    sentence: "テストは あした＿＿あさってです。",
    answer: "か",
    distractors: ["と", "や", "も"],
    vi: "Kỳ thi là ngày mai hoặc ngày kia.",
    grammar: "か — Hoặc là",
    level: "basic"
  },
  {
    id: "p113",
    sentence: "このへや＿＿はいってはいけません。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Không được vào phòng này.",
    grammar: "に入る — Đi vào một không gian",
    level: "basic"
  },
  {
    id: "p114",
    sentence: "ともだち＿＿てがみをもらいました。",
    answer: "から",
    distractors: ["で", "を", "が"],
    vi: "Tôi nhận được thư từ bạn (hoặc に).",
    grammar: "から — Điểm xuất phát, nguồn gốc",
    level: "basic"
  },
  {
    id: "p115",
    sentence: "かばん＿＿つくえのうえです。",
    answer: "は",
    distractors: ["が", "を", "に"],
    vi: "Cặp sách ở trên bàn.",
    grammar: "は — Chủ đề câu",
    level: "basic"
  },
  {
    id: "p116",
    sentence: "わたし＿＿りんごをたべました。",
    answer: "が",
    distractors: ["に", "を", "で"],
    vi: 'CHÍNH TÔI là người đã ăn quả táo (trả lời cho "Ai đã ăn?").',
    grammar: "が — Nhấn mạnh chủ ngữ",
    level: "basic"
  },
  {
    id: "p117",
    sentence: "はこのなか＿＿なにもありません。",
    answer: "には",
    distractors: ["では", "をも", "がも"],
    vi: "Trong hộp không có gì cả.",
    grammar: "には — Nhấn mạnh vị trí phủ định",
    level: "intermediate"
  },
  {
    id: "p118",
    sentence: "きのう、ぎんこう＿＿いきました。",
    answer: "へ",
    distractors: ["を", "で", "が"],
    vi: "Hôm qua tôi đã đi đến ngân hàng.",
    grammar: "へ — Hướng di chuyển (giống に)",
    level: "basic"
  },
  {
    id: "p119",
    sentence: "わたしは さかな＿＿きらいです。",
    answer: "が",
    distractors: ["を", "に", "で"],
    vi: "Tôi ghét cá.",
    grammar: "が — Đối tượng của tính từ cảm xúc",
    level: "basic"
  },
  {
    id: "p120",
    sentence: "にほんに １ねん＿＿います。",
    answer: "ぐらい",
    distractors: ["ごろ", "しか", "から"],
    vi: "Tôi ở Nhật khoảng 1 năm.",
    grammar: "ぐらい — Khoảng (thời lượng)",
    level: "basic"
  },
  {
    id: "p121",
    sentence: "１０じ＿＿１２じまで べんきょうします。",
    answer: "から",
    distractors: ["に", "で", "が"],
    vi: "Tôi học từ 10 giờ đến 12 giờ.",
    grammar: "から〜まで — Từ... đến...",
    level: "basic"
  },
  {
    id: "p122",
    sentence: "とうきょう＿＿おおさかまで しんかんせんでいきます。",
    answer: "から",
    distractors: ["に", "で", "が"],
    vi: "Từ Tokyo đến Osaka đi bằng Shinkansen.",
    grammar: "から〜まで — Khoảng cách địa lý",
    level: "basic"
  },
  {
    id: "p123",
    sentence: "コーヒー＿＿のみますか。",
    answer: "でも",
    distractors: ["にも", "がも", "しかも"],
    vi: "Bạn có uống (cỡ như) cà phê không?",
    grammar: "でも — Gợi ý ví dụ tiêu biểu",
    level: "intermediate"
  },
  {
    id: "p124",
    sentence: "かれは にほんご＿＿はなせます。",
    answer: "が",
    distractors: ["を", "に", "で"],
    vi: "Anh ấy có thể nói tiếng Nhật.",
    grammar: "が — Đối tượng của động từ khả năng",
    level: "intermediate"
  },
  {
    id: "p125",
    sentence: "じしょ＿＿わすれました。",
    answer: "を",
    distractors: ["が", "に", "で"],
    vi: "Tôi để quên từ điển rồi.",
    grammar: "を忘れる — Quên vật gì đó",
    level: "basic"
  },
  {
    id: "p126",
    sentence: "でんしゃ＿＿かばんでわすれました。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi quên cặp trên tàu điện.",
    grammar: "に忘れる — Quên (để lại) ở đâu",
    level: "intermediate"
  },
  {
    id: "p127",
    sentence: "ちち＿＿とけいをくれました。",
    answer: "が",
    distractors: ["に", "を", "で"],
    vi: "Bố đã cho tôi đồng hồ.",
    grammar: "がくれる — Ai đó cho mình (chủ ngữ là người cho)",
    level: "basic"
  },
  {
    id: "p128",
    sentence: "わたしは ちち＿＿とけいをもらいました。",
    answer: "に",
    distractors: ["が", "を", "で"],
    vi: "Tôi nhận được đồng hồ từ bố.",
    grammar: "にもらう — Nhận từ ai",
    level: "basic"
  },
  {
    id: "p129",
    sentence: "せんせい＿＿しつもんします。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Đặt câu hỏi cho giáo viên.",
    grammar: "に質問する — Hỏi ai",
    level: "basic"
  },
  {
    id: "p130",
    sentence: "いっしょ＿＿いきませんか。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Cùng đi không?",
    grammar: "一緒に — Cùng nhau (phó từ)",
    level: "basic"
  },
  {
    id: "p131",
    sentence: "はこのなか＿＿ いぬがいます。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Trong hộp có con chó.",
    grammar: "に — Nơi tồn tại",
    level: "basic"
  },
  {
    id: "p132",
    sentence: "つくえのうえ＿＿ しゃしんをかざります。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Trang trí ảnh trên bàn.",
    grammar: "に飾る — Trang trí lên đâu",
    level: "intermediate"
  },
  {
    id: "p133",
    sentence: "かべ＿＿ ポスターがはってあります。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Trên tường có dán poster.",
    grammar: "に〜てある — Trạng thái tồn tại do con người tạo ra",
    level: "intermediate"
  },
  {
    id: "p134",
    sentence: "あに＿＿かかれたえです。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Bức tranh do anh trai vẽ.",
    grammar: "に〜れる (bị động) — Người thực hiện hành động",
    level: "intermediate"
  },
  {
    id: "p135",
    sentence: "かぞく＿＿でんわをかけます。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Tôi gọi điện thoại cho gia đình.",
    grammar: "に電話をかける — Gọi điện cho ai",
    level: "basic"
  },
  {
    id: "p136",
    sentence: "パソコン＿＿こわれました。",
    answer: "が",
    distractors: ["を", "に", "で"],
    vi: "Máy tính bị hỏng.",
    grammar: "が〜 tự động từ — Mô tả hiện tượng, sự việc",
    level: "basic"
  },
  {
    id: "p137",
    sentence: "わたしは ケーキ＿＿つくります。",
    answer: "を",
    distractors: ["が", "に", "で"],
    vi: "Tôi làm bánh kem.",
    grammar: "を〜 tha động từ — Đối tượng của hành động",
    level: "basic"
  },
  {
    id: "p138",
    sentence: "へやを きれい＿＿そうじします。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Dọn dẹp phòng sạch sẽ.",
    grammar: "Tính từ na + に — Chức năng như phó từ",
    level: "basic"
  },
  {
    id: "p139",
    sentence: "かみを みじかく＿＿きります。",
    answer: "✕ (không cần)",
    distractors: ["に", "で", "を"],
    vi: "Cắt tóc ngắn.",
    grammar: "Tính từ i (bỏ i + く) đứng trước động từ",
    level: "basic"
  },
  {
    id: "p140",
    sentence: "あのひと＿＿だれですか。",
    answer: "は",
    distractors: ["が", "を", "に"],
    vi: "Người kia là ai?",
    grammar: "は — Nhấn mạnh chủ đề",
    level: "basic"
  },
  {
    id: "p141",
    sentence: "やまださんは とうきょう＿＿すんでいます。",
    answer: "に",
    distractors: ["で", "を", "が"],
    vi: "Anh Yamada đang sống ở Tokyo.",
    grammar: "に住む — Sống ở đâu",
    level: "basic"
  },
  {
    id: "p142",
    sentence: "かぜ＿＿あたまがいたいです。",
    answer: "で",
    distractors: ["に", "から", "が"],
    vi: "Vì cảm cúm nên tôi đau đầu.",
    grammar: "で — Lý do (danh từ hiện tượng)",
    level: "basic"
  },
  {
    id: "p143",
    sentence: "きょうは にちようび＿＿、がっこうはやすみです。",
    answer: "だから",
    distractors: ["から", "ので", "なのに"],
    vi: "Hôm nay là chủ nhật nên trường học nghỉ.",
    grammar: "だから — Vì là (danh từ)",
    level: "basic"
  },
  {
    id: "p144",
    sentence: "びょうき＿＿、かいしゃにいきます。",
    answer: "でも",
    distractors: ["から", "ので", "けど"],
    vi: "Dù bệnh nhưng tôi vẫn đến công ty.",
    grammar: "Danh từ + でも — Cho dù...",
    level: "intermediate"
  },
  {
    id: "p145",
    sentence: "このほんは わたし＿＿です。",
    answer: "の",
    distractors: ["が", "を", "に"],
    vi: "Quyển sách này là của tôi.",
    grammar: "の — Sở hữu",
    level: "basic"
  },
  {
    id: "p146",
    sentence: "いぬ＿＿ねこがすきです。",
    answer: "より",
    distractors: ["ほど", "から", "まで"],
    vi: "Tôi thích chó hơn mèo (Mèo là mốc so sánh).",
    grammar: "A は B より — A hơn B (hoặc ngược lại tùy câu)",
    level: "basic"
  },
  {
    id: "p147",
    sentence: "にほんご＿＿えいごほどむずかしくないです。",
    answer: "は",
    distractors: ["が", "を", "に"],
    vi: "Tiếng Nhật không khó bằng tiếng Anh.",
    grammar: "ほど〜ない — Không bằng...",
    level: "basic"
  },
  {
    id: "p148",
    sentence: "あのレストランは おいしい＿＿、やすいです。",
    answer: "し",
    distractors: ["から", "て", "で"],
    vi: "Nhà hàng kia vừa ngon vừa rẻ.",
    grammar: "〜し、〜し — Vừa... vừa... (liệt kê lý do/tính chất)",
    level: "basic"
  },
  {
    id: "p149",
    sentence: "かばん＿＿なかに ほんがあります。",
    answer: "の",
    distractors: ["が", "を", "に"],
    vi: "Trong cặp có sách.",
    grammar: "N1 の N2 (vị trí)",
    level: "basic"
  },
  {
    id: "p150",
    sentence: "このりんごは ３つ＿＿５００えんです。",
    answer: "で",
    distractors: ["に", "を", "が"],
    vi: "Táo này 3 quả 500 yên.",
    grammar: "Số lượng + で — Số lượng gộp lại",
    level: "basic"
  }
];
function getQuestionsByLevel(level = "all") {
  if (level === "all") return PARTICLE_QUESTIONS;
  return PARTICLE_QUESTIONS.filter((q) => q.level === level);
}
const verbs = /* @__PURE__ */ JSON.parse('[{"key":"v:会う","dictionary":"会う","group":"godan","forms":{"dictionary":"会う","masu":"会います","masuNeg":"会いません","masuPast":"会いました","masuPastNeg":"会いませんでした","te":"会って","nai":"会わない","naiPast":"会わなかった","ta":"会った","potential":"会える","passive":"会われる","causative":"会わせる","causativePassive":"会わせられる","volitional":"会おう","imperative":"会え","prohibitive":"会うな","condBa":"会えば","condTara":"会ったら","tai":"会いたい","teIru":"会っている","teKudasai":"会ってください"}},{"key":"v:合う","dictionary":"合う","group":"godan","forms":{"dictionary":"合う","masu":"合います","masuNeg":"合いません","masuPast":"合いました","masuPastNeg":"合いませんでした","te":"合って","nai":"合わない","naiPast":"合わなかった","ta":"合った","potential":"合える","passive":"合われる","causative":"合わせる","causativePassive":"合わせられる","volitional":"合おう","imperative":"合え","prohibitive":"合うな","condBa":"合えば","condTara":"合ったら","tai":"合いたい","teIru":"合っている","teKudasai":"合ってください"}},{"key":"v:上がる","dictionary":"上がる","group":"godan","forms":{"dictionary":"上がる","masu":"上がります","masuNeg":"上がりません","masuPast":"上がりました","masuPastNeg":"上がりませんでした","te":"上がって","nai":"上がらない","naiPast":"上がらなかった","ta":"上がった","potential":"上がれる","passive":"上がられる","causative":"上がらせる","causativePassive":"上がらせられる","volitional":"上がろう","imperative":"上がれ","prohibitive":"上がるな","condBa":"上がれば","condTara":"上がったら","tai":"上がりたい","teIru":"上がっている","teKudasai":"上がってください"}},{"key":"v:開く","dictionary":"開く","group":"godan","forms":{"dictionary":"開く","masu":"開きます","masuNeg":"開きません","masuPast":"開きました","masuPastNeg":"開きませんでした","te":"開いて","nai":"開かない","naiPast":"開かなかった","ta":"開いた","potential":"開ける","passive":"開かれる","causative":"開かせる","causativePassive":"開かせられる","volitional":"開こう","imperative":"開け","prohibitive":"開くな","condBa":"開けば","condTara":"開いたら","tai":"開きたい","teIru":"開いている","teKudasai":"開いてください"}},{"key":"v:集まる","dictionary":"集まる","group":"godan","forms":{"dictionary":"集まる","masu":"集まります","masuNeg":"集まりません","masuPast":"集まりました","masuPastNeg":"集まりませんでした","te":"集まって","nai":"集まらない","naiPast":"集まらなかった","ta":"集まった","potential":"集まれる","passive":"集まられる","causative":"集まらせる","causativePassive":"集まらせられる","volitional":"集まろう","imperative":"集まれ","prohibitive":"集まるな","condBa":"集まれば","condTara":"集まったら","tai":"集まりたい","teIru":"集まっている","teKudasai":"集まってください"}},{"key":"v:謝る","dictionary":"謝る","group":"godan","forms":{"dictionary":"謝る","masu":"謝ります","masuNeg":"謝りません","masuPast":"謝りました","masuPastNeg":"謝りませんでした","te":"謝って","nai":"謝らない","naiPast":"謝らなかった","ta":"謝った","potential":"謝れる","passive":"謝られる","causative":"謝らせる","causativePassive":"謝らせられる","volitional":"謝ろう","imperative":"謝れ","prohibitive":"謝るな","condBa":"謝れば","condTara":"謝ったら","tai":"謝りたい","teIru":"謝っている","teKudasai":"謝ってください"}},{"key":"v:洗う","dictionary":"洗う","group":"godan","forms":{"dictionary":"洗う","masu":"洗います","masuNeg":"洗いません","masuPast":"洗いました","masuPastNeg":"洗いませんでした","te":"洗って","nai":"洗わない","naiPast":"洗わなかった","ta":"洗った","potential":"洗える","passive":"洗われる","causative":"洗わせる","causativePassive":"洗わせられる","volitional":"洗おう","imperative":"洗え","prohibitive":"洗うな","condBa":"洗えば","condTara":"洗ったら","tai":"洗いたい","teIru":"洗っている","teKudasai":"洗ってください"}},{"key":"v:歩く","dictionary":"歩く","group":"godan","forms":{"dictionary":"歩く","masu":"歩きます","masuNeg":"歩きません","masuPast":"歩きました","masuPastNeg":"歩きませんでした","te":"歩いて","nai":"歩かない","naiPast":"歩かなかった","ta":"歩いた","potential":"歩ける","passive":"歩かれる","causative":"歩かせる","causativePassive":"歩かせられる","volitional":"歩こう","imperative":"歩け","prohibitive":"歩くな","condBa":"歩けば","condTara":"歩いたら","tai":"歩きたい","teIru":"歩いている","teKudasai":"歩いてください"}},{"key":"v:言う","dictionary":"言う","group":"godan","forms":{"dictionary":"言う","masu":"言います","masuNeg":"言いません","masuPast":"言いました","masuPastNeg":"言いませんでした","te":"言って","nai":"言わない","naiPast":"言わなかった","ta":"言った","potential":"言える","passive":"言われる","causative":"言わせる","causativePassive":"言わせられる","volitional":"言おう","imperative":"言え","prohibitive":"言うな","condBa":"言えば","condTara":"言ったら","tai":"言いたい","teIru":"言っている","teKudasai":"言ってください"}},{"key":"v:急ぐ","dictionary":"急ぐ","group":"godan","forms":{"dictionary":"急ぐ","masu":"急ぎます","masuNeg":"急ぎません","masuPast":"急ぎました","masuPastNeg":"急ぎませんでした","te":"急いで","nai":"急がない","naiPast":"急がなかった","ta":"急いだ","potential":"急げる","passive":"急がれる","causative":"急がせる","causativePassive":"急がせられる","volitional":"急ごう","imperative":"急げ","prohibitive":"急ぐな","condBa":"急げば","condTara":"急いだら","tai":"急ぎたい","teIru":"急いでいる","teKudasai":"急いでください"}},{"key":"v:動く","dictionary":"動く","group":"godan","forms":{"dictionary":"動く","masu":"動きます","masuNeg":"動きません","masuPast":"動きました","masuPastNeg":"動きませんでした","te":"動いて","nai":"動かない","naiPast":"動かなかった","ta":"動いた","potential":"動ける","passive":"動かれる","causative":"動かせる","causativePassive":"動かせられる","volitional":"動こう","imperative":"動け","prohibitive":"動くな","condBa":"動けば","condTara":"動いたら","tai":"動きたい","teIru":"動いている","teKudasai":"動いてください"}},{"key":"v:歌う","dictionary":"歌う","group":"godan","forms":{"dictionary":"歌う","masu":"歌います","masuNeg":"歌いません","masuPast":"歌いました","masuPastNeg":"歌いませんでした","te":"歌って","nai":"歌わない","naiPast":"歌わなかった","ta":"歌った","potential":"歌える","passive":"歌われる","causative":"歌わせる","causativePassive":"歌わせられる","volitional":"歌おう","imperative":"歌え","prohibitive":"歌うな","condBa":"歌えば","condTara":"歌ったら","tai":"歌いたい","teIru":"歌っている","teKudasai":"歌ってください"}},{"key":"v:打つ","dictionary":"打つ","group":"godan","forms":{"dictionary":"打つ","masu":"打ちます","masuNeg":"打ちません","masuPast":"打ちました","masuPastNeg":"打ちませんでした","te":"打って","nai":"打たない","naiPast":"打たなかった","ta":"打った","potential":"打てる","passive":"打たれる","causative":"打たせる","causativePassive":"打たせられる","volitional":"打とう","imperative":"打て","prohibitive":"打つな","condBa":"打てば","condTara":"打ったら","tai":"打ちたい","teIru":"打っている","teKudasai":"打ってください"}},{"key":"v:写す","dictionary":"写す","group":"godan","forms":{"dictionary":"写す","masu":"写します","masuNeg":"写しません","masuPast":"写しました","masuPastNeg":"写しませんでした","te":"写して","nai":"写さない","naiPast":"写さなかった","ta":"写した","potential":"写せる","passive":"写される","causative":"写させる","causativePassive":"写させられる","volitional":"写そう","imperative":"写せ","prohibitive":"写すな","condBa":"写せば","condTara":"写したら","tai":"写したい","teIru":"写している","teKudasai":"写してください"}},{"key":"v:売る","dictionary":"売る","group":"godan","forms":{"dictionary":"売る","masu":"売ります","masuNeg":"売りません","masuPast":"売りました","masuPastNeg":"売りませんでした","te":"売って","nai":"売らない","naiPast":"売らなかった","ta":"売った","potential":"売れる","passive":"売られる","causative":"売らせる","causativePassive":"売らせられる","volitional":"売ろう","imperative":"売れ","prohibitive":"売るな","condBa":"売れば","condTara":"売ったら","tai":"売りたい","teIru":"売っている","teKudasai":"売ってください"}},{"key":"v:選ぶ","dictionary":"選ぶ","group":"godan","forms":{"dictionary":"選ぶ","masu":"選びます","masuNeg":"選びません","masuPast":"選びました","masuPastNeg":"選びませんでした","te":"選んで","nai":"選ばない","naiPast":"選ばなかった","ta":"選んだ","potential":"選べる","passive":"選ばれる","causative":"選ばせる","causativePassive":"選ばせられる","volitional":"選ぼう","imperative":"選べ","prohibitive":"選ぶな","condBa":"選べば","condTara":"選んだら","tai":"選びたい","teIru":"選んでいる","teKudasai":"選んでください"}},{"key":"v:送る","dictionary":"送る","group":"godan","forms":{"dictionary":"送る","masu":"送ります","masuNeg":"送りません","masuPast":"送りました","masuPastNeg":"送りませんでした","te":"送って","nai":"送らない","naiPast":"送らなかった","ta":"送った","potential":"送れる","passive":"送られる","causative":"送らせる","causativePassive":"送らせられる","volitional":"送ろう","imperative":"送れ","prohibitive":"送るな","condBa":"送れば","condTara":"送ったら","tai":"送りたい","teIru":"送っている","teKudasai":"送ってください"}},{"key":"v:押す","dictionary":"押す","group":"godan","forms":{"dictionary":"押す","masu":"押します","masuNeg":"押しません","masuPast":"押しました","masuPastNeg":"押しませんでした","te":"押して","nai":"押さない","naiPast":"押さなかった","ta":"押した","potential":"押せる","passive":"押される","causative":"押させる","causativePassive":"押させられる","volitional":"押そう","imperative":"押せ","prohibitive":"押すな","condBa":"押せば","condTara":"押したら","tai":"押したい","teIru":"押している","teKudasai":"押してください"}},{"key":"v:落とす","dictionary":"落とす","group":"godan","forms":{"dictionary":"落とす","masu":"落とします","masuNeg":"落としません","masuPast":"落としました","masuPastNeg":"落としませんでした","te":"落として","nai":"落とさない","naiPast":"落とさなかった","ta":"落とした","potential":"落とせる","passive":"落とされる","causative":"落とさせる","causativePassive":"落とさせられる","volitional":"落とそう","imperative":"落とせ","prohibitive":"落とすな","condBa":"落とせば","condTara":"落としたら","tai":"落としたい","teIru":"落としている","teKudasai":"落としてください"}},{"key":"v:踊る","dictionary":"踊る","group":"godan","forms":{"dictionary":"踊る","masu":"踊ります","masuNeg":"踊りません","masuPast":"踊りました","masuPastNeg":"踊りませんでした","te":"踊って","nai":"踊らない","naiPast":"踊らなかった","ta":"踊った","potential":"踊れる","passive":"踊られる","causative":"踊らせる","causativePassive":"踊らせられる","volitional":"踊ろう","imperative":"踊れ","prohibitive":"踊るな","condBa":"踊れば","condTara":"踊ったら","tai":"踊りたい","teIru":"踊っている","teKudasai":"踊ってください"}},{"key":"v:思い出す","dictionary":"思い出す","group":"godan","forms":{"dictionary":"思い出す","masu":"思い出します","masuNeg":"思い出しません","masuPast":"思い出しました","masuPastNeg":"思い出しませんでした","te":"思い出して","nai":"思い出さない","naiPast":"思い出さなかった","ta":"思い出した","potential":"思い出せる","passive":"思い出される","causative":"思い出させる","causativePassive":"思い出させられる","volitional":"思い出そう","imperative":"思い出せ","prohibitive":"思い出すな","condBa":"思い出せば","condTara":"思い出したら","tai":"思い出したい","teIru":"思い出している","teKudasai":"思い出してください"}},{"key":"v:思う","dictionary":"思う","group":"godan","forms":{"dictionary":"思う","masu":"思います","masuNeg":"思いません","masuPast":"思いました","masuPastNeg":"思いませんでした","te":"思って","nai":"思わない","naiPast":"思わなかった","ta":"思った","potential":"思える","passive":"思われる","causative":"思わせる","causativePassive":"思わせられる","volitional":"思おう","imperative":"思え","prohibitive":"思うな","condBa":"思えば","condTara":"思ったら","tai":"思いたい","teIru":"思っている","teKudasai":"思ってください"}},{"key":"v:終わる","dictionary":"終わる","group":"godan","forms":{"dictionary":"終わる","masu":"終わります","masuNeg":"終わりません","masuPast":"終わりました","masuPastNeg":"終わりませんでした","te":"終わって","nai":"終わらない","naiPast":"終わらなかった","ta":"終わった","potential":"終われる","passive":"終わられる","causative":"終わらせる","causativePassive":"終わらせられる","volitional":"終わろう","imperative":"終われ","prohibitive":"終わるな","condBa":"終われば","condTara":"終わったら","tai":"終わりたい","teIru":"終わっている","teKudasai":"終わってください"}},{"key":"v:返す","dictionary":"返す","group":"godan","forms":{"dictionary":"返す","masu":"返します","masuNeg":"返しません","masuPast":"返しました","masuPastNeg":"返しませんでした","te":"返して","nai":"返さない","naiPast":"返さなかった","ta":"返した","potential":"返せる","passive":"返される","causative":"返させる","causativePassive":"返させられる","volitional":"返そう","imperative":"返せ","prohibitive":"返すな","condBa":"返せば","condTara":"返したら","tai":"返したい","teIru":"返している","teKudasai":"返してください"}},{"key":"v:変わる","dictionary":"変わる","group":"godan","forms":{"dictionary":"変わる","masu":"変わります","masuNeg":"変わりません","masuPast":"変わりました","masuPastNeg":"変わりませんでした","te":"変わって","nai":"変わらない","naiPast":"変わらなかった","ta":"変わった","potential":"変われる","passive":"変わられる","causative":"変わらせる","causativePassive":"変わらせられる","volitional":"変わろう","imperative":"変われ","prohibitive":"変わるな","condBa":"変われば","condTara":"変わったら","tai":"変わりたい","teIru":"変わっている","teKudasai":"変わってください"}},{"key":"v:かかる","dictionary":"かかる","group":"godan","forms":{"dictionary":"かかる","masu":"かかります","masuNeg":"かかりません","masuPast":"かかりました","masuPastNeg":"かかりませんでした","te":"かかって","nai":"かからない","naiPast":"かからなかった","ta":"かかった","potential":"かかれる","passive":"かかられる","causative":"かからせる","causativePassive":"かからせられる","volitional":"かかろう","imperative":"かかれ","prohibitive":"かかるな","condBa":"かかれば","condTara":"かかったら","tai":"かかりたい","teIru":"かかっている","teKudasai":"かかってください"}},{"key":"v:勝つ","dictionary":"勝つ","group":"godan","forms":{"dictionary":"勝つ","masu":"勝ちます","masuNeg":"勝ちません","masuPast":"勝ちました","masuPastNeg":"勝ちませんでした","te":"勝って","nai":"勝たない","naiPast":"勝たなかった","ta":"勝った","potential":"勝てる","passive":"勝たれる","causative":"勝たせる","causativePassive":"勝たせられる","volitional":"勝とう","imperative":"勝て","prohibitive":"勝つな","condBa":"勝てば","condTara":"勝ったら","tai":"勝ちたい","teIru":"勝っている","teKudasai":"勝ってください"}},{"key":"v:壊す","dictionary":"壊す","group":"godan","forms":{"dictionary":"壊す","masu":"壊します","masuNeg":"壊しません","masuPast":"壊しました","masuPastNeg":"壊しませんでした","te":"壊して","nai":"壊さない","naiPast":"壊さなかった","ta":"壊した","potential":"壊せる","passive":"壊される","causative":"壊させる","causativePassive":"壊させられる","volitional":"壊そう","imperative":"壊せ","prohibitive":"壊すな","condBa":"壊せば","condTara":"壊したら","tai":"壊したい","teIru":"壊している","teKudasai":"壊してください"}},{"key":"v:噛む","dictionary":"噛む","group":"godan","forms":{"dictionary":"噛む","masu":"噛みます","masuNeg":"噛みません","masuPast":"噛みました","masuPastNeg":"噛みませんでした","te":"噛んで","nai":"噛まない","naiPast":"噛まなかった","ta":"噛んだ","potential":"噛める","passive":"噛まれる","causative":"噛ませる","causativePassive":"噛ませられる","volitional":"噛もう","imperative":"噛め","prohibitive":"噛むな","condBa":"噛めば","condTara":"噛んだら","tai":"噛みたい","teIru":"噛んでいる","teKudasai":"噛んでください"}},{"key":"v:通う","dictionary":"通う","group":"godan","forms":{"dictionary":"通う","masu":"通います","masuNeg":"通いません","masuPast":"通いました","masuPastNeg":"通いませんでした","te":"通って","nai":"通わない","naiPast":"通わなかった","ta":"通った","potential":"通える","passive":"通われる","causative":"通わせる","causativePassive":"通わせられる","volitional":"通おう","imperative":"通え","prohibitive":"通うな","condBa":"通えば","condTara":"通ったら","tai":"通いたい","teIru":"通っている","teKudasai":"通ってください"}},{"key":"v:乾く","dictionary":"乾く","group":"godan","forms":{"dictionary":"乾く","masu":"乾きます","masuNeg":"乾きません","masuPast":"乾きました","masuPastNeg":"乾きませんでした","te":"乾いて","nai":"乾かない","naiPast":"乾かなかった","ta":"乾いた","potential":"乾ける","passive":"乾かれる","causative":"乾かせる","causativePassive":"乾かせられる","volitional":"乾こう","imperative":"乾け","prohibitive":"乾くな","condBa":"乾けば","condTara":"乾いたら","tai":"乾きたい","teIru":"乾いている","teKudasai":"乾いてください"}},{"key":"v:頑張る","dictionary":"頑張る","group":"godan","forms":{"dictionary":"頑張る","masu":"頑張ります","masuNeg":"頑張りません","masuPast":"頑張りました","masuPastNeg":"頑張りませんでした","te":"頑張って","nai":"頑張らない","naiPast":"頑張らなかった","ta":"頑張った","potential":"頑張れる","passive":"頑張られる","causative":"頑張らせる","causativePassive":"頑張らせられる","volitional":"頑張ろう","imperative":"頑張れ","prohibitive":"頑張るな","condBa":"頑張れば","condTara":"頑張ったら","tai":"頑張りたい","teIru":"頑張っている","teKudasai":"頑張ってください"}},{"key":"v:決まる","dictionary":"決まる","group":"godan","forms":{"dictionary":"決まる","masu":"決まります","masuNeg":"決まりません","masuPast":"決まりました","masuPastNeg":"決まりませんでした","te":"決まって","nai":"決まらない","naiPast":"決まらなかった","ta":"決まった","potential":"決まれる","passive":"決まられる","causative":"決まらせる","causativePassive":"決まらせられる","volitional":"決まろう","imperative":"決まれ","prohibitive":"決まるな","condBa":"決まれば","condTara":"決まったら","tai":"決まりたい","teIru":"決まっている","teKudasai":"決まってください"}},{"key":"v:切る","dictionary":"切る","group":"godan","forms":{"dictionary":"切る","masu":"切ります","masuNeg":"切りません","masuPast":"切りました","masuPastNeg":"切りませんでした","te":"切って","nai":"切らない","naiPast":"切らなかった","ta":"切った","potential":"切れる","passive":"切られる","causative":"切らせる","causativePassive":"切らせられる","volitional":"切ろう","imperative":"切れ","prohibitive":"切るな","condBa":"切れば","condTara":"切ったら","tai":"切りたい","teIru":"切っている","teKudasai":"切ってください"}},{"key":"v:下がる","dictionary":"下がる","group":"godan","forms":{"dictionary":"下がる","masu":"下がります","masuNeg":"下がりません","masuPast":"下がりました","masuPastNeg":"下がりませんでした","te":"下がって","nai":"下がらない","naiPast":"下がらなかった","ta":"下がった","potential":"下がれる","passive":"下がられる","causative":"下がらせる","causativePassive":"下がらせられる","volitional":"下がろう","imperative":"下がれ","prohibitive":"下がるな","condBa":"下がれば","condTara":"下がったら","tai":"下がりたい","teIru":"下がっている","teKudasai":"下がってください"}},{"key":"v:探す","dictionary":"探す","group":"godan","forms":{"dictionary":"探す","masu":"探します","masuNeg":"探しません","masuPast":"探しました","masuPastNeg":"探しませんでした","te":"探して","nai":"探さない","naiPast":"探さなかった","ta":"探した","potential":"探せる","passive":"探される","causative":"探させる","causativePassive":"探させられる","volitional":"探そう","imperative":"探せ","prohibitive":"探すな","condBa":"探せば","condTara":"探したら","tai":"探したい","teIru":"探している","teKudasai":"探してください"}},{"key":"v:触る","dictionary":"触る","group":"godan","forms":{"dictionary":"触る","masu":"触ります","masuNeg":"触りません","masuPast":"触りました","masuPastNeg":"触りませんでした","te":"触って","nai":"触らない","naiPast":"触らなかった","ta":"触った","potential":"触れる","passive":"触られる","causative":"触らせる","causativePassive":"触らせられる","volitional":"触ろう","imperative":"触れ","prohibitive":"触るな","condBa":"触れば","condTara":"触ったら","tai":"触りたい","teIru":"触っている","teKudasai":"触ってください"}},{"key":"v:知る","dictionary":"知る","group":"godan","forms":{"dictionary":"知る","masu":"知ります","masuNeg":"知りません","masuPast":"知りました","masuPastNeg":"知りませんでした","te":"知って","nai":"知らない","naiPast":"知らなかった","ta":"知った","potential":"知れる","passive":"知られる","causative":"知らせる","causativePassive":"知らせられる","volitional":"知ろう","imperative":"知れ","prohibitive":"知るな","condBa":"知れば","condTara":"知ったら","tai":"知りたい","teIru":"知っている","teKudasai":"知ってください"}},{"key":"v:進む","dictionary":"進む","group":"godan","forms":{"dictionary":"進む","masu":"進みます","masuNeg":"進みません","masuPast":"進みました","masuPastNeg":"進みませんでした","te":"進んで","nai":"進まない","naiPast":"進まなかった","ta":"進んだ","potential":"進める","passive":"進まれる","causative":"進ませる","causativePassive":"進ませられる","volitional":"進もう","imperative":"進め","prohibitive":"進むな","condBa":"進めば","condTara":"進んだら","tai":"進みたい","teIru":"進んでいる","teKudasai":"進んでください"}},{"key":"v:滑る","dictionary":"滑る","group":"ichidan","forms":{"dictionary":"滑る","masu":"滑ます","masuNeg":"滑ません","masuPast":"滑ました","masuPastNeg":"滑ませんでした","te":"滑て","nai":"滑ない","naiPast":"滑なかった","ta":"滑た","potential":"滑られる","passive":"滑られる","causative":"滑させる","causativePassive":"滑させられる","volitional":"滑よう","imperative":"滑ろ","prohibitive":"滑るな","condBa":"滑れば","condTara":"滑たら","tai":"滑たい","teIru":"滑ている","teKudasai":"滑てください"}},{"key":"v:住む","dictionary":"住む","group":"godan","forms":{"dictionary":"住む","masu":"住みます","masuNeg":"住みません","masuPast":"住みました","masuPastNeg":"住みませんでした","te":"住んで","nai":"住まない","naiPast":"住まなかった","ta":"住んだ","potential":"住める","passive":"住まれる","causative":"住ませる","causativePassive":"住ませられる","volitional":"住もう","imperative":"住め","prohibitive":"住むな","condBa":"住めば","condTara":"住んだら","tai":"住みたい","teIru":"住んでいる","teKudasai":"住んでください"}},{"key":"v:済む","dictionary":"済む","group":"godan","forms":{"dictionary":"済む","masu":"済みます","masuNeg":"済みません","masuPast":"済みました","masuPastNeg":"済みませんでした","te":"済んで","nai":"済まない","naiPast":"済まなかった","ta":"済んだ","potential":"済める","passive":"済まれる","causative":"済ませる","causativePassive":"済ませられる","volitional":"済もう","imperative":"済め","prohibitive":"済むな","condBa":"済めば","condTara":"済んだら","tai":"済みたい","teIru":"済んでいる","teKudasai":"済んでください"}},{"key":"v:足す","dictionary":"足す","group":"godan","forms":{"dictionary":"足す","masu":"足します","masuNeg":"足しません","masuPast":"足しました","masuPastNeg":"足しませんでした","te":"足して","nai":"足さない","naiPast":"足さなかった","ta":"足した","potential":"足せる","passive":"足される","causative":"足させる","causativePassive":"足させられる","volitional":"足そう","imperative":"足せ","prohibitive":"足すな","condBa":"足せば","condTara":"足したら","tai":"足したい","teIru":"足している","teKudasai":"足してください"}},{"key":"v:頼む","dictionary":"頼む","group":"godan","forms":{"dictionary":"頼む","masu":"頼みます","masuNeg":"頼みません","masuPast":"頼みました","masuPastNeg":"頼みませんでした","te":"頼んで","nai":"頼まない","naiPast":"頼まなかった","ta":"頼んだ","potential":"頼める","passive":"頼まれる","causative":"頼ませる","causativePassive":"頼ませられる","volitional":"頼もう","imperative":"頼め","prohibitive":"頼むな","condBa":"頼めば","condTara":"頼んだら","tai":"頼みたい","teIru":"頼んでいる","teKudasai":"頼んでください"}},{"key":"v:違う","dictionary":"違う","group":"godan","forms":{"dictionary":"違う","masu":"違います","masuNeg":"違いません","masuPast":"違いました","masuPastNeg":"違いませんでした","te":"違って","nai":"違わない","naiPast":"違わなかった","ta":"違った","potential":"違える","passive":"違われる","causative":"違わせる","causativePassive":"違わせられる","volitional":"違おう","imperative":"違え","prohibitive":"違うな","condBa":"違えば","condTara":"違ったら","tai":"違いたい","teIru":"違っている","teKudasai":"違ってください"}},{"key":"v:使う","dictionary":"使う","group":"godan","forms":{"dictionary":"使う","masu":"使います","masuNeg":"使いません","masuPast":"使いました","masuPastNeg":"使いませんでした","te":"使って","nai":"使わない","naiPast":"使わなかった","ta":"使った","potential":"使える","passive":"使われる","causative":"使わせる","causativePassive":"使わせられる","volitional":"使おう","imperative":"使え","prohibitive":"使うな","condBa":"使えば","condTara":"使ったら","tai":"使いたい","teIru":"使っている","teKudasai":"使ってください"}},{"key":"v:届く","dictionary":"届く","group":"godan","forms":{"dictionary":"届く","masu":"届きます","masuNeg":"届きません","masuPast":"届きました","masuPastNeg":"届きませんでした","te":"届いて","nai":"届かない","naiPast":"届かなかった","ta":"届いた","potential":"届ける","passive":"届かれる","causative":"届かせる","causativePassive":"届かせられる","volitional":"届こう","imperative":"届け","prohibitive":"届くな","condBa":"届けば","condTara":"届いたら","tai":"届きたい","teIru":"届いている","teKudasai":"届いてください"}},{"key":"v:飛ぶ","dictionary":"飛ぶ","group":"godan","forms":{"dictionary":"飛ぶ","masu":"飛びます","masuNeg":"飛びません","masuPast":"飛びました","masuPastNeg":"飛びませんでした","te":"飛んで","nai":"飛ばない","naiPast":"飛ばなかった","ta":"飛んだ","potential":"飛べる","passive":"飛ばれる","causative":"飛ばせる","causativePassive":"飛ばせられる","volitional":"飛ぼう","imperative":"飛べ","prohibitive":"飛ぶな","condBa":"飛べば","condTara":"飛んだら","tai":"飛びたい","teIru":"飛んでいる","teKudasai":"飛んでください"}},{"key":"v:止まる","dictionary":"止まる","group":"godan","forms":{"dictionary":"止まる","masu":"止まります","masuNeg":"止まりません","masuPast":"止まりました","masuPastNeg":"止まりませんでした","te":"止まって","nai":"止まらない","naiPast":"止まらなかった","ta":"止まった","potential":"止まれる","passive":"止まられる","causative":"止まらせる","causativePassive":"止まらせられる","volitional":"止まろう","imperative":"止まれ","prohibitive":"止まるな","condBa":"止まれば","condTara":"止まったら","tai":"止まりたい","teIru":"止まっている","teKudasai":"止まってください"}},{"key":"v:泊まる","dictionary":"泊まる","group":"godan","forms":{"dictionary":"泊まる","masu":"泊まります","masuNeg":"泊まりません","masuPast":"泊まりました","masuPastNeg":"泊まりませんでした","te":"泊まって","nai":"泊まらない","naiPast":"泊まらなかった","ta":"泊まった","potential":"泊まれる","passive":"泊まられる","causative":"泊まらせる","causativePassive":"泊まらせられる","volitional":"泊まろう","imperative":"泊まれ","prohibitive":"泊まるな","condBa":"泊まれば","condTara":"泊まったら","tai":"泊まりたい","teIru":"泊まっている","teKudasai":"泊まってください"}},{"key":"v:取る","dictionary":"取る","group":"godan","forms":{"dictionary":"取る","masu":"取ります","masuNeg":"取りません","masuPast":"取りました","masuPastNeg":"取りませんでした","te":"取って","nai":"取らない","naiPast":"取らなかった","ta":"取った","potential":"取れる","passive":"取られる","causative":"取らせる","causativePassive":"取らせられる","volitional":"取ろう","imperative":"取れ","prohibitive":"取るな","condBa":"取れば","condTara":"取ったら","tai":"取りたい","teIru":"取っている","teKudasai":"取ってください"}},{"key":"v:直す","dictionary":"直す","group":"godan","forms":{"dictionary":"直す","masu":"直します","masuNeg":"直しません","masuPast":"直しました","masuPastNeg":"直しませんでした","te":"直して","nai":"直さない","naiPast":"直さなかった","ta":"直した","potential":"直せる","passive":"直される","causative":"直させる","causativePassive":"直させられる","volitional":"直そう","imperative":"直せ","prohibitive":"直すな","condBa":"直せば","condTara":"直したら","tai":"直したい","teIru":"直している","teKudasai":"直してください"}},{"key":"v:直る","dictionary":"直る","group":"godan","forms":{"dictionary":"直る","masu":"直ります","masuNeg":"直りません","masuPast":"直りました","masuPastNeg":"直りませんでした","te":"直って","nai":"直らない","naiPast":"直らなかった","ta":"直った","potential":"直れる","passive":"直られる","causative":"直らせる","causativePassive":"直らせられる","volitional":"直ろう","imperative":"直れ","prohibitive":"直るな","condBa":"直れば","condTara":"直ったら","tai":"直りたい","teIru":"直っている","teKudasai":"直ってください"}},{"key":"v:泣く","dictionary":"泣く","group":"godan","forms":{"dictionary":"泣く","masu":"泣きます","masuNeg":"泣きません","masuPast":"泣きました","masuPastNeg":"泣きませんでした","te":"泣いて","nai":"泣かない","naiPast":"泣かなかった","ta":"泣いた","potential":"泣ける","passive":"泣かれる","causative":"泣かせる","causativePassive":"泣かせられる","volitional":"泣こう","imperative":"泣け","prohibitive":"泣くな","condBa":"泣けば","condTara":"泣いたら","tai":"泣きたい","teIru":"泣いている","teKudasai":"泣いてください"}},{"key":"v:無くす","dictionary":"無くす","group":"godan","forms":{"dictionary":"無くす","masu":"無くします","masuNeg":"無くしません","masuPast":"無くしました","masuPastNeg":"無くしませんでした","te":"無くして","nai":"無くさない","naiPast":"無くさなかった","ta":"無くした","potential":"無くせる","passive":"無くされる","causative":"無くさせる","causativePassive":"無くさせられる","volitional":"無くそう","imperative":"無くせ","prohibitive":"無くすな","condBa":"無くせば","condTara":"無くしたら","tai":"無くしたい","teIru":"無くしている","teKudasai":"無くしてください"}},{"key":"v:無くなる","dictionary":"無くなる","group":"godan","forms":{"dictionary":"無くなる","masu":"無くなります","masuNeg":"無くなりません","masuPast":"無くなりました","masuPastNeg":"無くなりませんでした","te":"無くなって","nai":"無くならない","naiPast":"無くならなかった","ta":"無くなった","potential":"無くなれる","passive":"無くなられる","causative":"無くならせる","causativePassive":"無くならせられる","volitional":"無くなろう","imperative":"無くなれ","prohibitive":"無くなるな","condBa":"無くなれば","condTara":"無くなったら","tai":"無くなりたい","teIru":"無くなっている","teKudasai":"無くなってください"}},{"key":"v:鳴る","dictionary":"鳴る","group":"godan","forms":{"dictionary":"鳴る","masu":"鳴ります","masuNeg":"鳴りません","masuPast":"鳴りました","masuPastNeg":"鳴りませんでした","te":"鳴って","nai":"鳴らない","naiPast":"鳴らなかった","ta":"鳴った","potential":"鳴れる","passive":"鳴られる","causative":"鳴らせる","causativePassive":"鳴らせられる","volitional":"鳴ろう","imperative":"鳴れ","prohibitive":"鳴るな","condBa":"鳴れば","condTara":"鳴ったら","tai":"鳴りたい","teIru":"鳴っている","teKudasai":"鳴ってください"}},{"key":"v:盗む","dictionary":"盗む","group":"godan","forms":{"dictionary":"盗む","masu":"盗みます","masuNeg":"盗みません","masuPast":"盗みました","masuPastNeg":"盗みませんでした","te":"盗んで","nai":"盗まない","naiPast":"盗まなかった","ta":"盗んだ","potential":"盗める","passive":"盗まれる","causative":"盗ませる","causativePassive":"盗ませられる","volitional":"盗もう","imperative":"盗め","prohibitive":"盗むな","condBa":"盗めば","condTara":"盗んだら","tai":"盗みたい","teIru":"盗んでいる","teKudasai":"盗んでください"}},{"key":"v:残る","dictionary":"残る","group":"godan","forms":{"dictionary":"残る","masu":"残ります","masuNeg":"残りません","masuPast":"残りました","masuPastNeg":"残りませんでした","te":"残って","nai":"残らない","naiPast":"残らなかった","ta":"残った","potential":"残れる","passive":"残られる","causative":"残らせる","causativePassive":"残らせられる","volitional":"残ろう","imperative":"残れ","prohibitive":"残るな","condBa":"残れば","condTara":"残ったら","tai":"残りたい","teIru":"残っている","teKudasai":"残ってください"}},{"key":"v:運ぶ","dictionary":"運ぶ","group":"godan","forms":{"dictionary":"運ぶ","masu":"運びます","masuNeg":"運びません","masuPast":"運びました","masuPastNeg":"運びませんでした","te":"運んで","nai":"運ばない","naiPast":"運ばなかった","ta":"運んだ","potential":"運べる","passive":"運ばれる","causative":"運ばせる","causativePassive":"運ばせられる","volitional":"運ぼう","imperative":"運べ","prohibitive":"運ぶな","condBa":"運べば","condTara":"運んだら","tai":"運びたい","teIru":"運んでいる","teKudasai":"運んでください"}},{"key":"v:始まる","dictionary":"始まる","group":"godan","forms":{"dictionary":"始まる","masu":"始まります","masuNeg":"始まりません","masuPast":"始まりました","masuPastNeg":"始まりませんでした","te":"始まって","nai":"始まらない","naiPast":"始まらなかった","ta":"始まった","potential":"始まれる","passive":"始まられる","causative":"始まらせる","causativePassive":"始まらせられる","volitional":"始まろう","imperative":"始まれ","prohibitive":"始まるな","condBa":"始まれば","condTara":"始まったら","tai":"始まりたい","teIru":"始まっている","teKudasai":"始まってください"}},{"key":"v:払う","dictionary":"払う","group":"godan","forms":{"dictionary":"払う","masu":"払います","masuNeg":"払いません","masuPast":"払いました","masuPastNeg":"払いませんでした","te":"払って","nai":"払わない","naiPast":"払わなかった","ta":"払った","potential":"払える","passive":"払われる","causative":"払わせる","causativePassive":"払わせられる","volitional":"払おう","imperative":"払え","prohibitive":"払うな","condBa":"払えば","condTara":"払ったら","tai":"払いたい","teIru":"払っている","teKudasai":"払ってください"}},{"key":"v:引く","dictionary":"引く","group":"godan","forms":{"dictionary":"引く","masu":"引きます","masuNeg":"引きません","masuPast":"引きました","masuPastNeg":"引きませんでした","te":"引いて","nai":"引かない","naiPast":"引かなかった","ta":"引いた","potential":"引ける","passive":"引かれる","causative":"引かせる","causativePassive":"引かせられる","volitional":"引こう","imperative":"引け","prohibitive":"引くな","condBa":"引けば","condTara":"引いたら","tai":"引きたい","teIru":"引いている","teKudasai":"引いてください"}},{"key":"v:引っ越す","dictionary":"引っ越す","group":"godan","forms":{"dictionary":"引っ越す","masu":"引っ越します","masuNeg":"引っ越しません","masuPast":"引っ越しました","masuPastNeg":"引っ越しませんでした","te":"引っ越して","nai":"引っ越さない","naiPast":"引っ越さなかった","ta":"引っ越した","potential":"引っ越せる","passive":"引っ越される","causative":"引っ越させる","causativePassive":"引っ越させられる","volitional":"引っ越そう","imperative":"引っ越せ","prohibitive":"引っ越すな","condBa":"引っ越せば","condTara":"引っ越したら","tai":"引っ越したい","teIru":"引っ越している","teKudasai":"引っ越してください"}},{"key":"v:拾う","dictionary":"拾う","group":"godan","forms":{"dictionary":"拾う","masu":"拾います","masuNeg":"拾いません","masuPast":"拾いました","masuPastNeg":"拾いませんでした","te":"拾って","nai":"拾わない","naiPast":"拾わなかった","ta":"拾った","potential":"拾える","passive":"拾われる","causative":"拾わせる","causativePassive":"拾わせられる","volitional":"拾おう","imperative":"拾え","prohibitive":"拾うな","condBa":"拾えば","condTara":"拾ったら","tai":"拾いたい","teIru":"拾っている","teKudasai":"拾ってください"}},{"key":"v:太る","dictionary":"太る","group":"godan","forms":{"dictionary":"太る","masu":"太ります","masuNeg":"太りません","masuPast":"太りました","masuPastNeg":"太りませんでした","te":"太って","nai":"太らない","naiPast":"太らなかった","ta":"太った","potential":"太れる","passive":"太られる","causative":"太らせる","causativePassive":"太らせられる","volitional":"太ろう","imperative":"太れ","prohibitive":"太るな","condBa":"太れば","condTara":"太ったら","tai":"太りたい","teIru":"太っている","teKudasai":"太ってください"}},{"key":"v:踏む","dictionary":"踏む","group":"godan","forms":{"dictionary":"踏む","masu":"踏みます","masuNeg":"踏みません","masuPast":"踏みました","masuPastNeg":"踏みませんでした","te":"踏んで","nai":"踏まない","naiPast":"踏まなかった","ta":"踏んだ","potential":"踏める","passive":"踏まれる","causative":"踏ませる","causativePassive":"踏ませられる","volitional":"踏もう","imperative":"踏め","prohibitive":"踏むな","condBa":"踏めば","condTara":"踏んだら","tai":"踏みたい","teIru":"踏んでいる","teKudasai":"踏んでください"}},{"key":"v:降る","dictionary":"降る","group":"godan","forms":{"dictionary":"降る","masu":"降ります","masuNeg":"降りません","masuPast":"降りました","masuPastNeg":"降りませんでした","te":"降って","nai":"降らない","naiPast":"降らなかった","ta":"降った","potential":"降れる","passive":"降られる","causative":"降らせる","causativePassive":"降らせられる","volitional":"降ろう","imperative":"降れ","prohibitive":"降るな","condBa":"降れば","condTara":"降ったら","tai":"降りたい","teIru":"降っている","teKudasai":"降ってください"}},{"key":"v:放す","dictionary":"放す","group":"godan","forms":{"dictionary":"放す","masu":"放します","masuNeg":"放しません","masuPast":"放しました","masuPastNeg":"放しませんでした","te":"放して","nai":"放さない","naiPast":"放さなかった","ta":"放した","potential":"放せる","passive":"放される","causative":"放させる","causativePassive":"放させられる","volitional":"放そう","imperative":"放せ","prohibitive":"放すな","condBa":"放せば","condTara":"放したら","tai":"放したい","teIru":"放している","teKudasai":"放してください"}},{"key":"v:間に合う","dictionary":"間に合う","group":"godan","forms":{"dictionary":"間に合う","masu":"間に合います","masuNeg":"間に合いません","masuPast":"間に合いました","masuPastNeg":"間に合いませんでした","te":"間に合って","nai":"間に合わない","naiPast":"間に合わなかった","ta":"間に合った","potential":"間に合える","passive":"間に合われる","causative":"間に合わせる","causativePassive":"間に合わせられる","volitional":"間に合おう","imperative":"間に合え","prohibitive":"間に合うな","condBa":"間に合えば","condTara":"間に合ったら","tai":"間に合いたい","teIru":"間に合っている","teKudasai":"間に合ってください"}},{"key":"v:回す","dictionary":"回す","group":"godan","forms":{"dictionary":"回す","masu":"回します","masuNeg":"回しません","masuPast":"回しました","masuPastNeg":"回しませんでした","te":"回して","nai":"回さない","naiPast":"回さなかった","ta":"回した","potential":"回せる","passive":"回される","causative":"回させる","causativePassive":"回させられる","volitional":"回そう","imperative":"回せ","prohibitive":"回すな","condBa":"回せば","condTara":"回したら","tai":"回したい","teIru":"回している","teKudasai":"回してください"}},{"key":"v:見つかる","dictionary":"見つかる","group":"godan","forms":{"dictionary":"見つかる","masu":"見つかります","masuNeg":"見つかりません","masuPast":"見つかりました","masuPastNeg":"見つかりませんでした","te":"見つかって","nai":"見つからない","naiPast":"見つからなかった","ta":"見つかった","potential":"見つかれる","passive":"見つかられる","causative":"見つからせる","causativePassive":"見つからせられる","volitional":"見つかろう","imperative":"見つかれ","prohibitive":"見つかるな","condBa":"見つかれば","condTara":"見つかったら","tai":"見つかりたい","teIru":"見つかっている","teKudasai":"見つかってください"}},{"key":"v:向かう","dictionary":"向かう","group":"godan","forms":{"dictionary":"向かう","masu":"向かいます","masuNeg":"向かいません","masuPast":"向かいました","masuPastNeg":"向かいませんでした","te":"向かって","nai":"向かわない","naiPast":"向かわなかった","ta":"向かった","potential":"向かえる","passive":"向かわれる","causative":"向かわせる","causativePassive":"向かわせられる","volitional":"向かおう","imperative":"向かえ","prohibitive":"向かうな","condBa":"向かえば","condTara":"向かったら","tai":"向かいたい","teIru":"向かっている","teKudasai":"向かってください"}},{"key":"v:戻る","dictionary":"戻る","group":"godan","forms":{"dictionary":"戻る","masu":"戻ります","masuNeg":"戻りません","masuPast":"戻りました","masuPastNeg":"戻りませんでした","te":"戻って","nai":"戻らない","naiPast":"戻らなかった","ta":"戻った","potential":"戻れる","passive":"戻られる","causative":"戻らせる","causativePassive":"戻らせられる","volitional":"戻ろう","imperative":"戻れ","prohibitive":"戻るな","condBa":"戻れば","condTara":"戻ったら","tai":"戻りたい","teIru":"戻っている","teKudasai":"戻ってください"}},{"key":"v:もらう","dictionary":"もらう","group":"godan","forms":{"dictionary":"もらう","masu":"もらいます","masuNeg":"もらいません","masuPast":"もらいました","masuPastNeg":"もらいませんでした","te":"もらって","nai":"もらわない","naiPast":"もらわなかった","ta":"もらった","potential":"もらえる","passive":"もらわれる","causative":"もらわせる","causativePassive":"もらわせられる","volitional":"もらおう","imperative":"もらえ","prohibitive":"もらうな","condBa":"もらえば","condTara":"もらったら","tai":"もらいたい","teIru":"もらっている","teKudasai":"もらってください"}},{"key":"v:焼く","dictionary":"焼く","group":"godan","forms":{"dictionary":"焼く","masu":"焼きます","masuNeg":"焼きません","masuPast":"焼きました","masuPastNeg":"焼きませんでした","te":"焼いて","nai":"焼かない","naiPast":"焼かなかった","ta":"焼いた","potential":"焼ける","passive":"焼かれる","causative":"焼かせる","causativePassive":"焼かせられる","volitional":"焼こう","imperative":"焼け","prohibitive":"焼くな","condBa":"焼けば","condTara":"焼いたら","tai":"焼きたい","teIru":"焼いている","teKudasai":"焼いてください"}},{"key":"v:役に立つ","dictionary":"役に立つ","group":"godan","forms":{"dictionary":"役に立つ","masu":"役に立ちます","masuNeg":"役に立ちません","masuPast":"役に立ちました","masuPastNeg":"役に立ちませんでした","te":"役に立って","nai":"役に立たない","naiPast":"役に立たなかった","ta":"役に立った","potential":"役に立てる","passive":"役に立たれる","causative":"役に立たせる","causativePassive":"役に立たせられる","volitional":"役に立とう","imperative":"役に立て","prohibitive":"役に立つな","condBa":"役に立てば","condTara":"役に立ったら","tai":"役に立ちたい","teIru":"役に立っている","teKudasai":"役に立ってください"}},{"key":"v:破る","dictionary":"破る","group":"godan","forms":{"dictionary":"破る","masu":"破ります","masuNeg":"破りません","masuPast":"破りました","masuPastNeg":"破りませんでした","te":"破って","nai":"破らない","naiPast":"破らなかった","ta":"破った","potential":"破れる","passive":"破られる","causative":"破らせる","causativePassive":"破らせられる","volitional":"破ろう","imperative":"破れ","prohibitive":"破るな","condBa":"破れば","condTara":"破ったら","tai":"破りたい","teIru":"破っている","teKudasai":"破ってください"}},{"key":"v:呼ぶ","dictionary":"呼ぶ","group":"godan","forms":{"dictionary":"呼ぶ","masu":"呼びます","masuNeg":"呼びません","masuPast":"呼びました","masuPastNeg":"呼びませんでした","te":"呼んで","nai":"呼ばない","naiPast":"呼ばなかった","ta":"呼んだ","potential":"呼べる","passive":"呼ばれる","causative":"呼ばせる","causativePassive":"呼ばせられる","volitional":"呼ぼう","imperative":"呼べ","prohibitive":"呼ぶな","condBa":"呼べば","condTara":"呼んだら","tai":"呼びたい","teIru":"呼んでいる","teKudasai":"呼んでください"}},{"key":"v:寄る","dictionary":"寄る","group":"godan","forms":{"dictionary":"寄る","masu":"寄ります","masuNeg":"寄りません","masuPast":"寄りました","masuPastNeg":"寄りませんでした","te":"寄って","nai":"寄らない","naiPast":"寄らなかった","ta":"寄った","potential":"寄れる","passive":"寄られる","causative":"寄らせる","causativePassive":"寄らせられる","volitional":"寄ろう","imperative":"寄れ","prohibitive":"寄るな","condBa":"寄れば","condTara":"寄ったら","tai":"寄りたい","teIru":"寄っている","teKudasai":"寄ってください"}},{"key":"v:喜ぶ","dictionary":"喜ぶ","group":"godan","forms":{"dictionary":"喜ぶ","masu":"喜びます","masuNeg":"喜びません","masuPast":"喜びました","masuPastNeg":"喜びませんでした","te":"喜んで","nai":"喜ばない","naiPast":"喜ばなかった","ta":"喜んだ","potential":"喜べる","passive":"喜ばれる","causative":"喜ばせる","causativePassive":"喜ばせられる","volitional":"喜ぼう","imperative":"喜べ","prohibitive":"喜ぶな","condBa":"喜べば","condTara":"喜んだら","tai":"喜びたい","teIru":"喜んでいる","teKudasai":"喜んでください"}},{"key":"v:沸かす","dictionary":"沸かす","group":"godan","forms":{"dictionary":"沸かす","masu":"沸かします","masuNeg":"沸かしません","masuPast":"沸かしました","masuPastNeg":"沸かしませんでした","te":"沸かして","nai":"沸かさない","naiPast":"沸かさなかった","ta":"沸かした","potential":"沸かせる","passive":"沸かされる","causative":"沸かさせる","causativePassive":"沸かさせられる","volitional":"沸かそう","imperative":"沸かせ","prohibitive":"沸かすな","condBa":"沸かせば","condTara":"沸かしたら","tai":"沸かしたい","teIru":"沸かしている","teKudasai":"沸かしてください"}},{"key":"v:沸く","dictionary":"沸く","group":"godan","forms":{"dictionary":"沸く","masu":"沸きます","masuNeg":"沸きません","masuPast":"沸きました","masuPastNeg":"沸きませんでした","te":"沸いて","nai":"沸かない","naiPast":"沸かなかった","ta":"沸いた","potential":"沸ける","passive":"沸かれる","causative":"沸かせる","causativePassive":"沸かせられる","volitional":"沸こう","imperative":"沸け","prohibitive":"沸くな","condBa":"沸けば","condTara":"沸いたら","tai":"沸きたい","teIru":"沸いている","teKudasai":"沸いてください"}},{"key":"v:渡す","dictionary":"渡す","group":"godan","forms":{"dictionary":"渡す","masu":"渡します","masuNeg":"渡しません","masuPast":"渡しました","masuPastNeg":"渡しませんでした","te":"渡して","nai":"渡さない","naiPast":"渡さなかった","ta":"渡した","potential":"渡せる","passive":"渡される","causative":"渡させる","causativePassive":"渡させられる","volitional":"渡そう","imperative":"渡せ","prohibitive":"渡すな","condBa":"渡せば","condTara":"渡したら","tai":"渡したい","teIru":"渡している","teKudasai":"渡してください"}},{"key":"v:渡る","dictionary":"渡る","group":"godan","forms":{"dictionary":"渡る","masu":"渡ります","masuNeg":"渡りません","masuPast":"渡りました","masuPastNeg":"渡りませんでした","te":"渡って","nai":"渡らない","naiPast":"渡らなかった","ta":"渡った","potential":"渡れる","passive":"渡られる","causative":"渡らせる","causativePassive":"渡らせられる","volitional":"渡ろう","imperative":"渡れ","prohibitive":"渡るな","condBa":"渡れば","condTara":"渡ったら","tai":"渡りたい","teIru":"渡っている","teKudasai":"渡ってください"}},{"key":"v:笑う","dictionary":"笑う","group":"godan","forms":{"dictionary":"笑う","masu":"笑います","masuNeg":"笑いません","masuPast":"笑いました","masuPastNeg":"笑いませんでした","te":"笑って","nai":"笑わない","naiPast":"笑わなかった","ta":"笑った","potential":"笑える","passive":"笑われる","causative":"笑わせる","causativePassive":"笑わせられる","volitional":"笑おう","imperative":"笑え","prohibitive":"笑うな","condBa":"笑えば","condTara":"笑ったら","tai":"笑いたい","teIru":"笑っている","teKudasai":"笑ってください"}},{"key":"v:割る","dictionary":"割る","group":"godan","forms":{"dictionary":"割る","masu":"割ります","masuNeg":"割りません","masuPast":"割りました","masuPastNeg":"割りませんでした","te":"割って","nai":"割らない","naiPast":"割らなかった","ta":"割った","potential":"割れる","passive":"割られる","causative":"割らせる","causativePassive":"割らせられる","volitional":"割ろう","imperative":"割れ","prohibitive":"割るな","condBa":"割れば","condTara":"割ったら","tai":"割りたい","teIru":"割っている","teKudasai":"割ってください"}},{"key":"v:通る","dictionary":"通る","group":"godan","forms":{"dictionary":"通る","masu":"通ります","masuNeg":"通りません","masuPast":"通りました","masuPastNeg":"通りませんでした","te":"通って","nai":"通らない","naiPast":"通らなかった","ta":"通った","potential":"通れる","passive":"通られる","causative":"通らせる","causativePassive":"通らせられる","volitional":"通ろう","imperative":"通れ","prohibitive":"通るな","condBa":"通れば","condTara":"通ったら","tai":"通りたい","teIru":"通っている","teKudasai":"通ってください"}},{"key":"v:消す","dictionary":"消す","group":"godan","forms":{"dictionary":"消す","masu":"消します","masuNeg":"消しません","masuPast":"消しました","masuPastNeg":"消しませんでした","te":"消して","nai":"消さない","naiPast":"消さなかった","ta":"消した","potential":"消せる","passive":"消される","causative":"消させる","causativePassive":"消させられる","volitional":"消そう","imperative":"消せ","prohibitive":"消すな","condBa":"消せば","condTara":"消したら","tai":"消したい","teIru":"消している","teKudasai":"消してください"}},{"key":"v:育つ","dictionary":"育つ","group":"godan","forms":{"dictionary":"育つ","masu":"育ちます","masuNeg":"育ちません","masuPast":"育ちました","masuPastNeg":"育ちませんでした","te":"育って","nai":"育たない","naiPast":"育たなかった","ta":"育った","potential":"育てる","passive":"育たれる","causative":"育たせる","causativePassive":"育たせられる","volitional":"育とう","imperative":"育て","prohibitive":"育つな","condBa":"育てば","condTara":"育ったら","tai":"育ちたい","teIru":"育っている","teKudasai":"育ってください"}},{"key":"v:殴る","dictionary":"殴る","group":"godan","forms":{"dictionary":"殴る","masu":"殴ります","masuNeg":"殴りません","masuPast":"殴りました","masuPastNeg":"殴りませんでした","te":"殴って","nai":"殴らない","naiPast":"殴らなかった","ta":"殴った","potential":"殴れる","passive":"殴られる","causative":"殴らせる","causativePassive":"殴らせられる","volitional":"殴ろう","imperative":"殴れ","prohibitive":"殴るな","condBa":"殴れば","condTara":"殴ったら","tai":"殴りたい","teIru":"殴っている","teKudasai":"殴ってください"}},{"key":"v:遊ぶ","dictionary":"遊ぶ","group":"godan","forms":{"dictionary":"遊ぶ","masu":"遊びます","masuNeg":"遊びません","masuPast":"遊びました","masuPastNeg":"遊びませんでした","te":"遊んで","nai":"遊ばない","naiPast":"遊ばなかった","ta":"遊んだ","potential":"遊べる","passive":"遊ばれる","causative":"遊ばせる","causativePassive":"遊ばせられる","volitional":"遊ぼう","imperative":"遊べ","prohibitive":"遊ぶな","condBa":"遊べば","condTara":"遊んだら","tai":"遊びたい","teIru":"遊んでいる","teKudasai":"遊んでください"}},{"key":"v:立つ","dictionary":"立つ","group":"godan","forms":{"dictionary":"立つ","masu":"立ちます","masuNeg":"立ちません","masuPast":"立ちました","masuPastNeg":"立ちませんでした","te":"立って","nai":"立たない","naiPast":"立たなかった","ta":"立った","potential":"立てる","passive":"立たれる","causative":"立たせる","causativePassive":"立たせられる","volitional":"立とう","imperative":"立て","prohibitive":"立つな","condBa":"立てば","condTara":"立ったら","tai":"立ちたい","teIru":"立っている","teKudasai":"立ってください"}},{"key":"v:座る","dictionary":"座る","group":"godan","forms":{"dictionary":"座る","masu":"座ります","masuNeg":"座りません","masuPast":"座りました","masuPastNeg":"座りませんでした","te":"座って","nai":"座らない","naiPast":"座らなかった","ta":"座った","potential":"座れる","passive":"座られる","causative":"座らせる","causativePassive":"座らせられる","volitional":"座ろう","imperative":"座れ","prohibitive":"座るな","condBa":"座れば","condTara":"座ったら","tai":"座りたい","teIru":"座っている","teKudasai":"座ってください"}},{"key":"v:持つ","dictionary":"持つ","group":"godan","forms":{"dictionary":"持つ","masu":"持ちます","masuNeg":"持ちません","masuPast":"持ちました","masuPastNeg":"持ちませんでした","te":"持って","nai":"持たない","naiPast":"持たなかった","ta":"持った","potential":"持てる","passive":"持たれる","causative":"持たせる","causativePassive":"持たせられる","volitional":"持とう","imperative":"持て","prohibitive":"持つな","condBa":"持てば","condTara":"持ったら","tai":"持ちたい","teIru":"持っている","teKudasai":"持ってください"}},{"key":"v:待つ","dictionary":"待つ","group":"godan","forms":{"dictionary":"待つ","masu":"待ちます","masuNeg":"待ちません","masuPast":"待ちました","masuPastNeg":"待ちませんでした","te":"待って","nai":"待たない","naiPast":"待たなかった","ta":"待った","potential":"待てる","passive":"待たれる","causative":"待たせる","causativePassive":"待たせられる","volitional":"待とう","imperative":"待て","prohibitive":"待つな","condBa":"待てば","condTara":"待ったら","tai":"待ちたい","teIru":"待っている","teKudasai":"待ってください"}},{"key":"v:乗る","dictionary":"乗る","group":"godan","forms":{"dictionary":"乗る","masu":"乗ります","masuNeg":"乗りません","masuPast":"乗りました","masuPastNeg":"乗りませんでした","te":"乗って","nai":"乗らない","naiPast":"乗らなかった","ta":"乗った","potential":"乗れる","passive":"乗られる","causative":"乗らせる","causativePassive":"乗らせられる","volitional":"乗ろう","imperative":"乗れ","prohibitive":"乗るな","condBa":"乗れば","condTara":"乗ったら","tai":"乗りたい","teIru":"乗っている","teKudasai":"乗ってください"}},{"key":"v:作る","dictionary":"作る","group":"godan","forms":{"dictionary":"作る","masu":"作ります","masuNeg":"作りません","masuPast":"作りました","masuPastNeg":"作りませんでした","te":"作って","nai":"作らない","naiPast":"作らなかった","ta":"作った","potential":"作れる","passive":"作られる","causative":"作らせる","causativePassive":"作らせられる","volitional":"作ろう","imperative":"作れ","prohibitive":"作るな","condBa":"作れば","condTara":"作ったら","tai":"作りたい","teIru":"作っている","teKudasai":"作ってください"}},{"key":"v:走る","dictionary":"走る","group":"godan","forms":{"dictionary":"走る","masu":"走ります","masuNeg":"走りません","masuPast":"走りました","masuPastNeg":"走りませんでした","te":"走って","nai":"走らない","naiPast":"走らなかった","ta":"走った","potential":"走れる","passive":"走られる","causative":"走らせる","causativePassive":"走らせられる","volitional":"走ろう","imperative":"走れ","prohibitive":"走るな","condBa":"走れば","condTara":"走ったら","tai":"走りたい","teIru":"走っている","teKudasai":"走ってください"}},{"key":"v:話す","dictionary":"話す","group":"godan","forms":{"dictionary":"話す","masu":"話します","masuNeg":"話しません","masuPast":"話しました","masuPastNeg":"話しませんでした","te":"話して","nai":"話さない","naiPast":"話さなかった","ta":"話した","potential":"話せる","passive":"話される","causative":"話させる","causativePassive":"話させられる","volitional":"話そう","imperative":"話せ","prohibitive":"話すな","condBa":"話せば","condTara":"話したら","tai":"話したい","teIru":"話している","teKudasai":"話してください"}},{"key":"v:読む","dictionary":"読む","group":"godan","forms":{"dictionary":"読む","masu":"読みます","masuNeg":"読みません","masuPast":"読みました","masuPastNeg":"読みませんでした","te":"読んで","nai":"読まない","naiPast":"読まなかった","ta":"読んだ","potential":"読める","passive":"読まれる","causative":"読ませる","causativePassive":"読ませられる","volitional":"読もう","imperative":"読め","prohibitive":"読むな","condBa":"読めば","condTara":"読んだら","tai":"読みたい","teIru":"読んでいる","teKudasai":"読んでください"}},{"key":"v:飲む","dictionary":"飲む","group":"godan","forms":{"dictionary":"飲む","masu":"飲みます","masuNeg":"飲みません","masuPast":"飲みました","masuPastNeg":"飲みませんでした","te":"飲んで","nai":"飲まない","naiPast":"飲まなかった","ta":"飲んだ","potential":"飲める","passive":"飲まれる","causative":"飲ませる","causativePassive":"飲ませられる","volitional":"飲もう","imperative":"飲め","prohibitive":"飲むな","condBa":"飲めば","condTara":"飲んだら","tai":"飲みたい","teIru":"飲んでいる","teKudasai":"飲んでください"}},{"key":"v:書く","dictionary":"書く","group":"godan","forms":{"dictionary":"書く","masu":"書きます","masuNeg":"書きません","masuPast":"書きました","masuPastNeg":"書きませんでした","te":"書いて","nai":"書かない","naiPast":"書かなかった","ta":"書いた","potential":"書ける","passive":"書かれる","causative":"書かせる","causativePassive":"書かせられる","volitional":"書こう","imperative":"書け","prohibitive":"書くな","condBa":"書けば","condTara":"書いたら","tai":"書きたい","teIru":"書いている","teKudasai":"書いてください"}},{"key":"v:聞く","dictionary":"聞く","group":"godan","forms":{"dictionary":"聞く","masu":"聞きます","masuNeg":"聞きません","masuPast":"聞きました","masuPastNeg":"聞きませんでした","te":"聞いて","nai":"聞かない","naiPast":"聞かなかった","ta":"聞いた","potential":"聞ける","passive":"聞かれる","causative":"聞かせる","causativePassive":"聞かせられる","volitional":"聞こう","imperative":"聞け","prohibitive":"聞くな","condBa":"聞けば","condTara":"聞いたら","tai":"聞きたい","teIru":"聞いている","teKudasai":"聞いてください"}},{"key":"v:泳ぐ","dictionary":"泳ぐ","group":"godan","forms":{"dictionary":"泳ぐ","masu":"泳ぎます","masuNeg":"泳ぎません","masuPast":"泳ぎました","masuPastNeg":"泳ぎませんでした","te":"泳いで","nai":"泳がない","naiPast":"泳がなかった","ta":"泳いだ","potential":"泳げる","passive":"泳がれる","causative":"泳がせる","causativePassive":"泳がせられる","volitional":"泳ごう","imperative":"泳げ","prohibitive":"泳ぐな","condBa":"泳げば","condTara":"泳いだら","tai":"泳ぎたい","teIru":"泳いでいる","teKudasai":"泳いでください"}},{"key":"v:置く","dictionary":"置く","group":"godan","forms":{"dictionary":"置く","masu":"置きます","masuNeg":"置きません","masuPast":"置きました","masuPastNeg":"置きませんでした","te":"置いて","nai":"置かない","naiPast":"置かなかった","ta":"置いた","potential":"置ける","passive":"置かれる","causative":"置かせる","causativePassive":"置かせられる","volitional":"置こう","imperative":"置け","prohibitive":"置くな","condBa":"置けば","condTara":"置いたら","tai":"置きたい","teIru":"置いている","teKudasai":"置いてください"}},{"key":"v:着く","dictionary":"着く","group":"godan","forms":{"dictionary":"着く","masu":"着きます","masuNeg":"着きません","masuPast":"着きました","masuPastNeg":"着きませんでした","te":"着いて","nai":"着かない","naiPast":"着かなかった","ta":"着いた","potential":"着ける","passive":"着かれる","causative":"着かせる","causativePassive":"着かせられる","volitional":"着こう","imperative":"着け","prohibitive":"着くな","condBa":"着けば","condTara":"着いたら","tai":"着きたい","teIru":"着いている","teKudasai":"着いてください"}},{"key":"v:入る","dictionary":"入る","group":"godan","forms":{"dictionary":"入る","masu":"入ります","masuNeg":"入りません","masuPast":"入りました","masuPastNeg":"入りませんでした","te":"入って","nai":"入らない","naiPast":"入らなかった","ta":"入った","potential":"入れる","passive":"入られる","causative":"入らせる","causativePassive":"入らせられる","volitional":"入ろう","imperative":"入れ","prohibitive":"入るな","condBa":"入れば","condTara":"入ったら","tai":"入りたい","teIru":"入っている","teKudasai":"入ってください"}},{"key":"v:出す","dictionary":"出す","group":"godan","forms":{"dictionary":"出す","masu":"出します","masuNeg":"出しません","masuPast":"出しました","masuPastNeg":"出しませんでした","te":"出して","nai":"出さない","naiPast":"出さなかった","ta":"出した","potential":"出せる","passive":"出される","causative":"出させる","causativePassive":"出させられる","volitional":"出そう","imperative":"出せ","prohibitive":"出すな","condBa":"出せば","condTara":"出したら","tai":"出したい","teIru":"出している","teKudasai":"出してください"}},{"key":"v:並ぶ","dictionary":"並ぶ","group":"godan","forms":{"dictionary":"並ぶ","masu":"並びます","masuNeg":"並びません","masuPast":"並びました","masuPastNeg":"並びませんでした","te":"並んで","nai":"並ばない","naiPast":"並ばなかった","ta":"並んだ","potential":"並べる","passive":"並ばれる","causative":"並ばせる","causativePassive":"並ばせられる","volitional":"並ぼう","imperative":"並べ","prohibitive":"並ぶな","condBa":"並べば","condTara":"並んだら","tai":"並びたい","teIru":"並んでいる","teKudasai":"並んでください"}},{"key":"v:曲がる","dictionary":"曲がる","group":"godan","forms":{"dictionary":"曲がる","masu":"曲がります","masuNeg":"曲がりません","masuPast":"曲がりました","masuPastNeg":"曲がりませんでした","te":"曲がって","nai":"曲がらない","naiPast":"曲がらなかった","ta":"曲がった","potential":"曲がれる","passive":"曲がられる","causative":"曲がらせる","causativePassive":"曲がらせられる","volitional":"曲がろう","imperative":"曲がれ","prohibitive":"曲がるな","condBa":"曲がれば","condTara":"曲がったら","tai":"曲がりたい","teIru":"曲がっている","teKudasai":"曲がってください"}},{"key":"v:脱ぐ","dictionary":"脱ぐ","group":"godan","forms":{"dictionary":"脱ぐ","masu":"脱ぎます","masuNeg":"脱ぎません","masuPast":"脱ぎました","masuPastNeg":"脱ぎませんでした","te":"脱いで","nai":"脱がない","naiPast":"脱がなかった","ta":"脱いだ","potential":"脱げる","passive":"脱がれる","causative":"脱がせる","causativePassive":"脱がせられる","volitional":"脱ごう","imperative":"脱げ","prohibitive":"脱ぐな","condBa":"脱げば","condTara":"脱いだら","tai":"脱ぎたい","teIru":"脱いでいる","teKudasai":"脱いでください"}},{"key":"v:咲く","dictionary":"咲く","group":"godan","forms":{"dictionary":"咲く","masu":"咲きます","masuNeg":"咲きません","masuPast":"咲きました","masuPastNeg":"咲きませんでした","te":"咲いて","nai":"咲かない","naiPast":"咲かなかった","ta":"咲いた","potential":"咲ける","passive":"咲かれる","causative":"咲かせる","causativePassive":"咲かせられる","volitional":"咲こう","imperative":"咲け","prohibitive":"咲くな","condBa":"咲けば","condTara":"咲いたら","tai":"咲きたい","teIru":"咲いている","teKudasai":"咲いてください"}},{"key":"v:守る","dictionary":"守る","group":"godan","forms":{"dictionary":"守る","masu":"守ります","masuNeg":"守りません","masuPast":"守りました","masuPastNeg":"守りませんでした","te":"守って","nai":"守らない","naiPast":"守らなかった","ta":"守った","potential":"守れる","passive":"守られる","causative":"守らせる","causativePassive":"守らせられる","volitional":"守ろう","imperative":"守れ","prohibitive":"守るな","condBa":"守れば","condTara":"守ったら","tai":"守りたい","teIru":"守っている","teKudasai":"守ってください"}},{"key":"v:怒る","dictionary":"怒る","group":"godan","forms":{"dictionary":"怒る","masu":"怒ります","masuNeg":"怒りません","masuPast":"怒りました","masuPastNeg":"怒りませんでした","te":"怒って","nai":"怒らない","naiPast":"怒らなかった","ta":"怒った","potential":"怒れる","passive":"怒られる","causative":"怒らせる","causativePassive":"怒らせられる","volitional":"怒ろう","imperative":"怒れ","prohibitive":"怒るな","condBa":"怒れば","condTara":"怒ったら","tai":"怒りたい","teIru":"怒っている","teKudasai":"怒ってください"}},{"key":"v:手伝う","dictionary":"手伝う","group":"godan","forms":{"dictionary":"手伝う","masu":"手伝います","masuNeg":"手伝いません","masuPast":"手伝いました","masuPastNeg":"手伝いませんでした","te":"手伝って","nai":"手伝わない","naiPast":"手伝わなかった","ta":"手伝った","potential":"手伝える","passive":"手伝われる","causative":"手伝わせる","causativePassive":"手伝わせられる","volitional":"手伝おう","imperative":"手伝え","prohibitive":"手伝うな","condBa":"手伝えば","condTara":"手伝ったら","tai":"手伝いたい","teIru":"手伝っている","teKudasai":"手伝ってください"}},{"key":"v:困る","dictionary":"困る","group":"godan","forms":{"dictionary":"困る","masu":"困ります","masuNeg":"困りません","masuPast":"困りました","masuPastNeg":"困りませんでした","te":"困って","nai":"困らない","naiPast":"困らなかった","ta":"困った","potential":"困れる","passive":"困られる","causative":"困らせる","causativePassive":"困らせられる","volitional":"困ろう","imperative":"困れ","prohibitive":"困るな","condBa":"困れば","condTara":"困ったら","tai":"困りたい","teIru":"困っている","teKudasai":"困ってください"}},{"key":"v:下ろす","dictionary":"下ろす","group":"godan","forms":{"dictionary":"下ろす","masu":"下ろします","masuNeg":"下ろしません","masuPast":"下ろしました","masuPastNeg":"下ろしませんでした","te":"下ろして","nai":"下ろさない","naiPast":"下ろさなかった","ta":"下ろした","potential":"下ろせる","passive":"下ろされる","causative":"下ろさせる","causativePassive":"下ろさせられる","volitional":"下ろそう","imperative":"下ろせ","prohibitive":"下ろすな","condBa":"下ろせば","condTara":"下ろしたら","tai":"下ろしたい","teIru":"下ろしている","teKudasai":"下ろしてください"}},{"key":"v:死ぬ","dictionary":"死ぬ","group":"godan","forms":{"dictionary":"死ぬ","masu":"死にます","masuNeg":"死にません","masuPast":"死にました","masuPastNeg":"死にませんでした","te":"死んで","nai":"死なない","naiPast":"死ななかった","ta":"死んだ","potential":"死ねる","passive":"死なれる","causative":"死なせる","causativePassive":"死なせられる","volitional":"死のう","imperative":"死ね","prohibitive":"死ぬな","condBa":"死ねば","condTara":"死んだら","tai":"死にたい","teIru":"死んでいる","teKudasai":"死んでください"}},{"key":"v:光る","dictionary":"光る","group":"godan","forms":{"dictionary":"光る","masu":"光ります","masuNeg":"光りません","masuPast":"光りました","masuPastNeg":"光りませんでした","te":"光って","nai":"光らない","naiPast":"光らなかった","ta":"光った","potential":"光れる","passive":"光られる","causative":"光らせる","causativePassive":"光らせられる","volitional":"光ろう","imperative":"光れ","prohibitive":"光るな","condBa":"光れば","condTara":"光ったら","tai":"光りたい","teIru":"光っている","teKudasai":"光ってください"}},{"key":"v:包む","dictionary":"包む","group":"godan","forms":{"dictionary":"包む","masu":"包みます","masuNeg":"包みません","masuPast":"包みました","masuPastNeg":"包みませんでした","te":"包んで","nai":"包まない","naiPast":"包まなかった","ta":"包んだ","potential":"包める","passive":"包まれる","causative":"包ませる","causativePassive":"包ませられる","volitional":"包もう","imperative":"包め","prohibitive":"包むな","condBa":"包めば","condTara":"包んだら","tai":"包みたい","teIru":"包んでいる","teKudasai":"包んでください"}},{"key":"v:習う","dictionary":"習う","group":"godan","forms":{"dictionary":"習う","masu":"習います","masuNeg":"習いません","masuPast":"習いました","masuPastNeg":"習いませんでした","te":"習って","nai":"習わない","naiPast":"習わなかった","ta":"習った","potential":"習える","passive":"習われる","causative":"習わせる","causativePassive":"習わせられる","volitional":"習おう","imperative":"習え","prohibitive":"習うな","condBa":"習えば","condTara":"習ったら","tai":"習いたい","teIru":"習っている","teKudasai":"習ってください"}},{"key":"v:登る","dictionary":"登る","group":"godan","forms":{"dictionary":"登る","masu":"登ります","masuNeg":"登りません","masuPast":"登りました","masuPastNeg":"登りませんでした","te":"登って","nai":"登らない","naiPast":"登らなかった","ta":"登った","potential":"登れる","passive":"登られる","causative":"登らせる","causativePassive":"登らせられる","volitional":"登ろう","imperative":"登れ","prohibitive":"登るな","condBa":"登れば","condTara":"登ったら","tai":"登りたい","teIru":"登っている","teKudasai":"登ってください"}},{"key":"v:叩く","dictionary":"叩く","group":"godan","forms":{"dictionary":"叩く","masu":"叩きます","masuNeg":"叩きません","masuPast":"叩きました","masuPastNeg":"叩きませんでした","te":"叩いて","nai":"叩かない","naiPast":"叩かなかった","ta":"叩いた","potential":"叩ける","passive":"叩かれる","causative":"叩かせる","causativePassive":"叩かせられる","volitional":"叩こう","imperative":"叩け","prohibitive":"叩くな","condBa":"叩けば","condTara":"叩いたら","tai":"叩きたい","teIru":"叩いている","teKudasai":"叩いてください"}},{"key":"v:捕まる","dictionary":"捕まる","group":"godan","forms":{"dictionary":"捕まる","masu":"捕まります","masuNeg":"捕まりません","masuPast":"捕まりました","masuPastNeg":"捕まりませんでした","te":"捕まって","nai":"捕まらない","naiPast":"捕まらなかった","ta":"捕まった","potential":"捕まれる","passive":"捕まられる","causative":"捕まらせる","causativePassive":"捕まらせられる","volitional":"捕まろう","imperative":"捕まれ","prohibitive":"捕まるな","condBa":"捕まれば","condTara":"捕まったら","tai":"捕まりたい","teIru":"捕まっている","teKudasai":"捕まってください"}},{"key":"v:受け取る","dictionary":"受け取る","group":"godan","forms":{"dictionary":"受け取る","masu":"受け取ります","masuNeg":"受け取りません","masuPast":"受け取りました","masuPastNeg":"受け取りませんでした","te":"受け取って","nai":"受け取らない","naiPast":"受け取らなかった","ta":"受け取った","potential":"受け取れる","passive":"受け取られる","causative":"受け取らせる","causativePassive":"受け取らせられる","volitional":"受け取ろう","imperative":"受け取れ","prohibitive":"受け取るな","condBa":"受け取れば","condTara":"受け取ったら","tai":"受け取りたい","teIru":"受け取っている","teKudasai":"受け取ってください"}},{"key":"v:塗る","dictionary":"塗る","group":"godan","forms":{"dictionary":"塗る","masu":"塗ります","masuNeg":"塗りません","masuPast":"塗りました","masuPastNeg":"塗りませんでした","te":"塗って","nai":"塗らない","naiPast":"塗らなかった","ta":"塗った","potential":"塗れる","passive":"塗られる","causative":"塗らせる","causativePassive":"塗らせられる","volitional":"塗ろう","imperative":"塗れ","prohibitive":"塗るな","condBa":"塗れば","condTara":"塗ったら","tai":"塗りたい","teIru":"塗っている","teKudasai":"塗ってください"}},{"key":"v:片付く","dictionary":"片付く","group":"godan","forms":{"dictionary":"片付く","masu":"片付きます","masuNeg":"片付きません","masuPast":"片付きました","masuPastNeg":"片付きませんでした","te":"片付いて","nai":"片付かない","naiPast":"片付かなかった","ta":"片付いた","potential":"片付ける","passive":"片付かれる","causative":"片付かせる","causativePassive":"片付かせられる","volitional":"片付こう","imperative":"片付け","prohibitive":"片付くな","condBa":"片付けば","condTara":"片付いたら","tai":"片付きたい","teIru":"片付いている","teKudasai":"片付いてください"}},{"key":"v:起こす","dictionary":"起こす","group":"godan","forms":{"dictionary":"起こす","masu":"起こします","masuNeg":"起こしません","masuPast":"起こしました","masuPastNeg":"起こしませんでした","te":"起こして","nai":"起こさない","naiPast":"起こさなかった","ta":"起こした","potential":"起こせる","passive":"起こされる","causative":"起こさせる","causativePassive":"起こさせられる","volitional":"起こそう","imperative":"起こせ","prohibitive":"起こすな","condBa":"起こせば","condTara":"起こしたら","tai":"起こしたい","teIru":"起こしている","teKudasai":"起こしてください"}},{"key":"v:動かす","dictionary":"動かす","group":"godan","forms":{"dictionary":"動かす","masu":"動かします","masuNeg":"動かしません","masuPast":"動かしました","masuPastNeg":"動かしませんでした","te":"動かして","nai":"動かさない","naiPast":"動かさなかった","ta":"動かした","potential":"動かせる","passive":"動かされる","causative":"動かさせる","causativePassive":"動かさせられる","volitional":"動かそう","imperative":"動かせ","prohibitive":"動かすな","condBa":"動かせば","condTara":"動かしたら","tai":"動かしたい","teIru":"動かしている","teKudasai":"動かしてください"}},{"key":"v:戻す","dictionary":"戻す","group":"godan","forms":{"dictionary":"戻す","masu":"戻します","masuNeg":"戻しません","masuPast":"戻しました","masuPastNeg":"戻しませんでした","te":"戻して","nai":"戻さない","naiPast":"戻さなかった","ta":"戻した","potential":"戻せる","passive":"戻される","causative":"戻させる","causativePassive":"戻させられる","volitional":"戻そう","imperative":"戻せ","prohibitive":"戻すな","condBa":"戻せば","condTara":"戻したら","tai":"戻したい","teIru":"戻している","teKudasai":"戻してください"}},{"key":"v:届ける","dictionary":"届ける","group":"ichidan","forms":{"dictionary":"届ける","masu":"届けます","masuNeg":"届けません","masuPast":"届けました","masuPastNeg":"届けませんでした","te":"届けて","nai":"届けない","naiPast":"届けなかった","ta":"届けた","potential":"届けられる","passive":"届けられる","causative":"届けさせる","causativePassive":"届けさせられる","volitional":"届けよう","imperative":"届けろ","prohibitive":"届けるな","condBa":"届ければ","condTara":"届けたら","tai":"届けたい","teIru":"届けている","teKudasai":"届けてください"}},{"key":"v:減る","dictionary":"減る","group":"godan","forms":{"dictionary":"減る","masu":"減ります","masuNeg":"減りません","masuPast":"減りました","masuPastNeg":"減りませんでした","te":"減って","nai":"減らない","naiPast":"減らなかった","ta":"減った","potential":"減れる","passive":"減られる","causative":"減らせる","causativePassive":"減らせられる","volitional":"減ろう","imperative":"減れ","prohibitive":"減るな","condBa":"減れば","condTara":"減ったら","tai":"減りたい","teIru":"減っている","teKudasai":"減ってください"}},{"key":"v:混む","dictionary":"混む","group":"godan","forms":{"dictionary":"混む","masu":"混みます","masuNeg":"混みません","masuPast":"混みました","masuPastNeg":"混みませんでした","te":"混んで","nai":"混まない","naiPast":"混まなかった","ta":"混んだ","potential":"混める","passive":"混まれる","causative":"混ませる","causativePassive":"混ませられる","volitional":"混もう","imperative":"混め","prohibitive":"混むな","condBa":"混めば","condTara":"混んだら","tai":"混みたい","teIru":"混んでいる","teKudasai":"混んでください"}},{"key":"v:転ぶ","dictionary":"転ぶ","group":"godan","forms":{"dictionary":"転ぶ","masu":"転びます","masuNeg":"転びません","masuPast":"転びました","masuPastNeg":"転びませんでした","te":"転んで","nai":"転ばない","naiPast":"転ばなかった","ta":"転んだ","potential":"転べる","passive":"転ばれる","causative":"転ばせる","causativePassive":"転ばせられる","volitional":"転ぼう","imperative":"転べ","prohibitive":"転ぶな","condBa":"転べば","condTara":"転んだら","tai":"転びたい","teIru":"転んでいる","teKudasai":"転んでください"}},{"key":"v:折る","dictionary":"折る","group":"godan","forms":{"dictionary":"折る","masu":"折ります","masuNeg":"折りません","masuPast":"折りました","masuPastNeg":"折りませんでした","te":"折って","nai":"折らない","naiPast":"折らなかった","ta":"折った","potential":"折れる","passive":"折られる","causative":"折らせる","causativePassive":"折らせられる","volitional":"折ろう","imperative":"折れ","prohibitive":"折るな","condBa":"折れば","condTara":"折ったら","tai":"折りたい","teIru":"折っている","teKudasai":"折ってください"}},{"key":"v:吹く","dictionary":"吹く","group":"godan","forms":{"dictionary":"吹く","masu":"吹きます","masuNeg":"吹きません","masuPast":"吹きました","masuPastNeg":"吹きませんでした","te":"吹いて","nai":"吹かない","naiPast":"吹かなかった","ta":"吹いた","potential":"吹ける","passive":"吹かれる","causative":"吹かせる","causativePassive":"吹かせられる","volitional":"吹こう","imperative":"吹け","prohibitive":"吹くな","condBa":"吹けば","condTara":"吹いたら","tai":"吹きたい","teIru":"吹いている","teKudasai":"吹いてください"}},{"key":"v:曇る","dictionary":"曇る","group":"godan","forms":{"dictionary":"曇る","masu":"曇ります","masuNeg":"曇りません","masuPast":"曇りました","masuPastNeg":"曇りませんでした","te":"曇って","nai":"曇らない","naiPast":"曇らなかった","ta":"曇った","potential":"曇れる","passive":"曇られる","causative":"曇らせる","causativePassive":"曇らせられる","volitional":"曇ろう","imperative":"曇れ","prohibitive":"曇るな","condBa":"曇れば","condTara":"曇ったら","tai":"曇りたい","teIru":"曇っている","teKudasai":"曇ってください"}},{"key":"v:飾る","dictionary":"飾る","group":"godan","forms":{"dictionary":"飾る","masu":"飾ります","masuNeg":"飾りません","masuPast":"飾りました","masuPastNeg":"飾りませんでした","te":"飾って","nai":"飾らない","naiPast":"飾らなかった","ta":"飾った","potential":"飾れる","passive":"飾られる","causative":"飾らせる","causativePassive":"飾らせられる","volitional":"飾ろう","imperative":"飾れ","prohibitive":"飾るな","condBa":"飾れば","condTara":"飾ったら","tai":"飾りたい","teIru":"飾っている","teKudasai":"飾ってください"}},{"key":"v:磨く","dictionary":"磨く","group":"godan","forms":{"dictionary":"磨く","masu":"磨きます","masuNeg":"磨きません","masuPast":"磨きました","masuPastNeg":"磨きませんでした","te":"磨いて","nai":"磨かない","naiPast":"磨かなかった","ta":"磨いた","potential":"磨ける","passive":"磨かれる","causative":"磨かせる","causativePassive":"磨かせられる","volitional":"磨こう","imperative":"磨け","prohibitive":"磨くな","condBa":"磨けば","condTara":"磨いたら","tai":"磨きたい","teIru":"磨いている","teKudasai":"磨いてください"}},{"key":"v:驚く","dictionary":"驚く","group":"godan","forms":{"dictionary":"驚く","masu":"驚きます","masuNeg":"驚きません","masuPast":"驚きました","masuPastNeg":"驚きませんでした","te":"驚いて","nai":"驚かない","naiPast":"驚かなかった","ta":"驚いた","potential":"驚ける","passive":"驚かれる","causative":"驚かせる","causativePassive":"驚かせられる","volitional":"驚こう","imperative":"驚け","prohibitive":"驚くな","condBa":"驚けば","condTara":"驚いたら","tai":"驚きたい","teIru":"驚いている","teKudasai":"驚いてください"}},{"key":"v:暮らす","dictionary":"暮らす","group":"godan","forms":{"dictionary":"暮らす","masu":"暮らします","masuNeg":"暮らしません","masuPast":"暮らしました","masuPastNeg":"暮らしませんでした","te":"暮らして","nai":"暮らさない","naiPast":"暮らさなかった","ta":"暮らした","potential":"暮らせる","passive":"暮らされる","causative":"暮らさせる","causativePassive":"暮らさせられる","volitional":"暮らそう","imperative":"暮らせ","prohibitive":"暮らすな","condBa":"暮らせば","condTara":"暮らしたら","tai":"暮らしたい","teIru":"暮らしている","teKudasai":"暮らしてください"}},{"key":"v:騒ぐ","dictionary":"騒ぐ","group":"godan","forms":{"dictionary":"騒ぐ","masu":"騒ぎます","masuNeg":"騒ぎません","masuPast":"騒ぎました","masuPastNeg":"騒ぎませんでした","te":"騒いで","nai":"騒がない","naiPast":"騒がなかった","ta":"騒いだ","potential":"騒げる","passive":"騒がれる","causative":"騒がせる","causativePassive":"騒がせられる","volitional":"騒ごう","imperative":"騒げ","prohibitive":"騒ぐな","condBa":"騒げば","condTara":"騒いだら","tai":"騒ぎたい","teIru":"騒いでいる","teKudasai":"騒いでください"}},{"key":"v:釣る","dictionary":"釣る","group":"godan","forms":{"dictionary":"釣る","masu":"釣ります","masuNeg":"釣りません","masuPast":"釣りました","masuPastNeg":"釣りませんでした","te":"釣って","nai":"釣らない","naiPast":"釣らなかった","ta":"釣った","potential":"釣れる","passive":"釣られる","causative":"釣らせる","causativePassive":"釣らせられる","volitional":"釣ろう","imperative":"釣れ","prohibitive":"釣るな","condBa":"釣れば","condTara":"釣ったら","tai":"釣りたい","teIru":"釣っている","teKudasai":"釣ってください"}},{"key":"v:下る","dictionary":"下る","group":"godan","forms":{"dictionary":"下る","masu":"下ります","masuNeg":"下りません","masuPast":"下りました","masuPastNeg":"下りませんでした","te":"下って","nai":"下らない","naiPast":"下らなかった","ta":"下った","potential":"下れる","passive":"下られる","causative":"下らせる","causativePassive":"下らせられる","volitional":"下ろう","imperative":"下れ","prohibitive":"下るな","condBa":"下れば","condTara":"下ったら","tai":"下りたい","teIru":"下っている","teKudasai":"下ってください"}},{"key":"v:付く","dictionary":"付く","group":"godan","forms":{"dictionary":"付く","masu":"付きます","masuNeg":"付きません","masuPast":"付きました","masuPastNeg":"付きませんでした","te":"付いて","nai":"付かない","naiPast":"付かなかった","ta":"付いた","potential":"付ける","passive":"付かれる","causative":"付かせる","causativePassive":"付かせられる","volitional":"付こう","imperative":"付け","prohibitive":"付くな","condBa":"付けば","condTara":"付いたら","tai":"付きたい","teIru":"付いている","teKudasai":"付いてください"}},{"key":"v:汚す","dictionary":"汚す","group":"godan","forms":{"dictionary":"汚す","masu":"汚します","masuNeg":"汚しません","masuPast":"汚しました","masuPastNeg":"汚しませんでした","te":"汚して","nai":"汚さない","naiPast":"汚さなかった","ta":"汚した","potential":"汚せる","passive":"汚される","causative":"汚させる","causativePassive":"汚させられる","volitional":"汚そう","imperative":"汚せ","prohibitive":"汚すな","condBa":"汚せば","condTara":"汚したら","tai":"汚したい","teIru":"汚している","teKudasai":"汚してください"}},{"key":"v:ある","dictionary":"ある","group":"godan","forms":{"dictionary":"ある","masu":"あります","masuNeg":"ありません","masuPast":"ありました","masuPastNeg":"ありませんでした","te":"あって","nai":"あらない","naiPast":"あらなかった","ta":"あった","potential":"あれる","passive":"あられる","causative":"あらせる","causativePassive":"あらせられる","volitional":"あろう","imperative":"あれ","prohibitive":"あるな","condBa":"あれば","condTara":"あったら","tai":"ありたい","teIru":"あっている","teKudasai":"あってください"}},{"key":"v:要る","dictionary":"要る","group":"godan","forms":{"dictionary":"要る","masu":"要ります","masuNeg":"要りません","masuPast":"要りました","masuPastNeg":"要りませんでした","te":"要って","nai":"要らない","naiPast":"要らなかった","ta":"要った","potential":"要れる","passive":"要られる","causative":"要らせる","causativePassive":"要らせられる","volitional":"要ろう","imperative":"要れ","prohibitive":"要るな","condBa":"要れば","condTara":"要ったら","tai":"要りたい","teIru":"要っている","teKudasai":"要ってください"}},{"key":"v:なる","dictionary":"なる","group":"godan","forms":{"dictionary":"なる","masu":"なります","masuNeg":"なりません","masuPast":"なりました","masuPastNeg":"なりませんでした","te":"なって","nai":"ならない","naiPast":"ならなかった","ta":"なった","potential":"なれる","passive":"なられる","causative":"ならせる","causativePassive":"ならせられる","volitional":"なろう","imperative":"なれ","prohibitive":"なるな","condBa":"なれば","condTara":"なったら","tai":"なりたい","teIru":"なっている","teKudasai":"なってください"}},{"key":"v:分かる","dictionary":"分かる","group":"godan","forms":{"dictionary":"分かる","masu":"分かります","masuNeg":"分かりません","masuPast":"分かりました","masuPastNeg":"分かりませんでした","te":"分かって","nai":"分からない","naiPast":"分からなかった","ta":"分かった","potential":"分かれる","passive":"分かられる","causative":"分からせる","causativePassive":"分からせられる","volitional":"分かろう","imperative":"分かれ","prohibitive":"分かるな","condBa":"分かれば","condTara":"分かったら","tai":"分かりたい","teIru":"分かっている","teKudasai":"分かってください"}},{"key":"v:鳴く","dictionary":"鳴く","group":"godan","forms":{"dictionary":"鳴く","masu":"鳴きます","masuNeg":"鳴きません","masuPast":"鳴きました","masuPastNeg":"鳴きませんでした","te":"鳴いて","nai":"鳴かない","naiPast":"鳴かなかった","ta":"鳴いた","potential":"鳴ける","passive":"鳴かれる","causative":"鳴かせる","causativePassive":"鳴かせられる","volitional":"鳴こう","imperative":"鳴け","prohibitive":"鳴くな","condBa":"鳴けば","condTara":"鳴いたら","tai":"鳴きたい","teIru":"鳴いている","teKudasai":"鳴いてください"}},{"key":"v:込む","dictionary":"込む","group":"godan","forms":{"dictionary":"込む","masu":"込みます","masuNeg":"込みません","masuPast":"込みました","masuPastNeg":"込みませんでした","te":"込んで","nai":"込まない","naiPast":"込まなかった","ta":"込んだ","potential":"込める","passive":"込まれる","causative":"込ませる","causativePassive":"込ませられる","volitional":"込もう","imperative":"込め","prohibitive":"込むな","condBa":"込めば","condTara":"込んだら","tai":"込みたい","teIru":"込んでいる","teKudasai":"込んでください"}},{"key":"v:空く","dictionary":"空く","group":"godan","forms":{"dictionary":"空く","masu":"空きます","masuNeg":"空きません","masuPast":"空きました","masuPastNeg":"空きませんでした","te":"空いて","nai":"空かない","naiPast":"空かなかった","ta":"空いた","potential":"空ける","passive":"空かれる","causative":"空かせる","causativePassive":"空かせられる","volitional":"空こう","imperative":"空け","prohibitive":"空くな","condBa":"空けば","condTara":"空いたら","tai":"空きたい","teIru":"空いている","teKudasai":"空いてください"}},{"key":"v:続く","dictionary":"続く","group":"godan","forms":{"dictionary":"続く","masu":"続きます","masuNeg":"続きません","masuPast":"続きました","masuPastNeg":"続きませんでした","te":"続いて","nai":"続かない","naiPast":"続かなかった","ta":"続いた","potential":"続ける","passive":"続かれる","causative":"続かせる","causativePassive":"続かせられる","volitional":"続こう","imperative":"続け","prohibitive":"続くな","condBa":"続けば","condTara":"続いたら","tai":"続きたい","teIru":"続いている","teKudasai":"続いてください"}},{"key":"v:買う","dictionary":"買う","group":"godan","forms":{"dictionary":"買う","masu":"買います","masuNeg":"買いません","masuPast":"買いました","masuPastNeg":"買いませんでした","te":"買って","nai":"買わない","naiPast":"買わなかった","ta":"買った","potential":"買える","passive":"買われる","causative":"買わせる","causativePassive":"買わせられる","volitional":"買おう","imperative":"買え","prohibitive":"買うな","condBa":"買えば","condTara":"買ったら","tai":"買いたい","teIru":"買っている","teKudasai":"買ってください"}},{"key":"v:行く","dictionary":"行く","group":"godan","forms":{"dictionary":"行く","masu":"行きます","masuNeg":"行きません","masuPast":"行きました","masuPastNeg":"行きませんでした","te":"行いて","nai":"行かない","naiPast":"行かなかった","ta":"行いた","potential":"行ける","passive":"行かれる","causative":"行かせる","causativePassive":"行かせられる","volitional":"行こう","imperative":"行け","prohibitive":"行くな","condBa":"行けば","condTara":"行いたら","tai":"行きたい","teIru":"行いている","teKudasai":"行いてください"}},{"key":"v:帰る","dictionary":"帰る","group":"godan","forms":{"dictionary":"帰る","masu":"帰ります","masuNeg":"帰りません","masuPast":"帰りました","masuPastNeg":"帰りませんでした","te":"帰って","nai":"帰らない","naiPast":"帰らなかった","ta":"帰った","potential":"帰れる","passive":"帰られる","causative":"帰らせる","causativePassive":"帰らせられる","volitional":"帰ろう","imperative":"帰れ","prohibitive":"帰るな","condBa":"帰れば","condTara":"帰ったら","tai":"帰りたい","teIru":"帰っている","teKudasai":"帰ってください"}},{"key":"v:働く","dictionary":"働く","group":"godan","forms":{"dictionary":"働く","masu":"働きます","masuNeg":"働きません","masuPast":"働きました","masuPastNeg":"働きませんでした","te":"働いて","nai":"働かない","naiPast":"働かなかった","ta":"働いた","potential":"働ける","passive":"働かれる","causative":"働かせる","causativePassive":"働かせられる","volitional":"働こう","imperative":"働け","prohibitive":"働くな","condBa":"働けば","condTara":"働いたら","tai":"働きたい","teIru":"働いている","teKudasai":"働いてください"}},{"key":"v:休む","dictionary":"休む","group":"godan","forms":{"dictionary":"休む","masu":"休みます","masuNeg":"休みません","masuPast":"休みました","masuPastNeg":"休みませんでした","te":"休んで","nai":"休まない","naiPast":"休まなかった","ta":"休んだ","potential":"休める","passive":"休まれる","causative":"休ませる","causativePassive":"休ませられる","volitional":"休もう","imperative":"休め","prohibitive":"休むな","condBa":"休めば","condTara":"休んだら","tai":"休みたい","teIru":"休んでいる","teKudasai":"休んでください"}},{"key":"v:履く","dictionary":"履く","group":"godan","forms":{"dictionary":"履く","masu":"履きます","masuNeg":"履きません","masuPast":"履きました","masuPastNeg":"履きませんでした","te":"履いて","nai":"履かない","naiPast":"履かなかった","ta":"履いた","potential":"履ける","passive":"履かれる","causative":"履かせる","causativePassive":"履かせられる","volitional":"履こう","imperative":"履け","prohibitive":"履くな","condBa":"履けば","condTara":"履いたら","tai":"履きたい","teIru":"履いている","teKudasai":"履いてください"}},{"key":"v:貸す","dictionary":"貸す","group":"godan","forms":{"dictionary":"貸す","masu":"貸します","masuNeg":"貸しません","masuPast":"貸しました","masuPastNeg":"貸しませんでした","te":"貸して","nai":"貸さない","naiPast":"貸さなかった","ta":"貸した","potential":"貸せる","passive":"貸される","causative":"貸させる","causativePassive":"貸させられる","volitional":"貸そう","imperative":"貸せ","prohibitive":"貸すな","condBa":"貸せば","condTara":"貸したら","tai":"貸したい","teIru":"貸している","teKudasai":"貸してください"}},{"key":"v:拭く","dictionary":"拭く","group":"godan","forms":{"dictionary":"拭く","masu":"拭きます","masuNeg":"拭きません","masuPast":"拭きました","masuPastNeg":"拭きませんでした","te":"拭いて","nai":"拭かない","naiPast":"拭かなかった","ta":"拭いた","potential":"拭ける","passive":"拭かれる","causative":"拭かせる","causativePassive":"拭かせられる","volitional":"拭こう","imperative":"拭け","prohibitive":"拭くな","condBa":"拭けば","condTara":"拭いたら","tai":"拭きたい","teIru":"拭いている","teKudasai":"拭いてください"}},{"key":"v:叱る","dictionary":"叱る","group":"godan","forms":{"dictionary":"叱る","masu":"叱ります","masuNeg":"叱りません","masuPast":"叱りました","masuPastNeg":"叱りませんでした","te":"叱って","nai":"叱らない","naiPast":"叱らなかった","ta":"叱った","potential":"叱れる","passive":"叱られる","causative":"叱らせる","causativePassive":"叱らせられる","volitional":"叱ろう","imperative":"叱れ","prohibitive":"叱るな","condBa":"叱れば","condTara":"叱ったら","tai":"叱りたい","teIru":"叱っている","teKudasai":"叱ってください"}},{"key":"v:代わる","dictionary":"代わる","group":"godan","forms":{"dictionary":"代わる","masu":"代わります","masuNeg":"代わりません","masuPast":"代わりました","masuPastNeg":"代わりませんでした","te":"代わって","nai":"代わらない","naiPast":"代わらなかった","ta":"代わった","potential":"代われる","passive":"代わられる","causative":"代わらせる","causativePassive":"代わらせられる","volitional":"代わろう","imperative":"代われ","prohibitive":"代わるな","condBa":"代われば","condTara":"代わったら","tai":"代わりたい","teIru":"代わっている","teKudasai":"代わってください"}},{"key":"v:酔う","dictionary":"酔う","group":"godan","forms":{"dictionary":"酔う","masu":"酔います","masuNeg":"酔いません","masuPast":"酔いました","masuPastNeg":"酔いませんでした","te":"酔って","nai":"酔わない","naiPast":"酔わなかった","ta":"酔った","potential":"酔える","passive":"酔われる","causative":"酔わせる","causativePassive":"酔わせられる","volitional":"酔おう","imperative":"酔え","prohibitive":"酔うな","condBa":"酔えば","condTara":"酔ったら","tai":"酔いたい","teIru":"酔っている","teKudasai":"酔ってください"}},{"key":"v:上げる","dictionary":"上げる","group":"ichidan","forms":{"dictionary":"上げる","masu":"上げます","masuNeg":"上げません","masuPast":"上げました","masuPastNeg":"上げませんでした","te":"上げて","nai":"上げない","naiPast":"上げなかった","ta":"上げた","potential":"上げられる","passive":"上げられる","causative":"上げさせる","causativePassive":"上げさせられる","volitional":"上げよう","imperative":"上げろ","prohibitive":"上げるな","condBa":"上げれば","condTara":"上げたら","tai":"上げたい","teIru":"上げている","teKudasai":"上げてください"}},{"key":"v:開ける","dictionary":"開ける","group":"ichidan","forms":{"dictionary":"開ける","masu":"開けます","masuNeg":"開けません","masuPast":"開けました","masuPastNeg":"開けませんでした","te":"開けて","nai":"開けない","naiPast":"開けなかった","ta":"開けた","potential":"開けられる","passive":"開けられる","causative":"開けさせる","causativePassive":"開けさせられる","volitional":"開けよう","imperative":"開けろ","prohibitive":"開けるな","condBa":"開ければ","condTara":"開けたら","tai":"開けたい","teIru":"開けている","teKudasai":"開けてください"}},{"key":"v:浴びる","dictionary":"浴びる","group":"ichidan","forms":{"dictionary":"浴びる","masu":"浴びます","masuNeg":"浴びません","masuPast":"浴びました","masuPastNeg":"浴びませんでした","te":"浴びて","nai":"浴びない","naiPast":"浴びなかった","ta":"浴びた","potential":"浴びられる","passive":"浴びられる","causative":"浴びさせる","causativePassive":"浴びさせられる","volitional":"浴びよう","imperative":"浴びろ","prohibitive":"浴びるな","condBa":"浴びれば","condTara":"浴びたら","tai":"浴びたい","teIru":"浴びている","teKudasai":"浴びてください"}},{"key":"v:生まれる","dictionary":"生まれる","group":"ichidan","forms":{"dictionary":"生まれる","masu":"生まれます","masuNeg":"生まれません","masuPast":"生まれました","masuPastNeg":"生まれませんでした","te":"生まれて","nai":"生まれない","naiPast":"生まれなかった","ta":"生まれた","potential":"生まれられる","passive":"生まれられる","causative":"生まれさせる","causativePassive":"生まれさせられる","volitional":"生まれよう","imperative":"生まれろ","prohibitive":"生まれるな","condBa":"生まれれば","condTara":"生まれたら","tai":"生まれたい","teIru":"生まれている","teKudasai":"生まれてください"}},{"key":"v:受ける","dictionary":"受ける","group":"ichidan","forms":{"dictionary":"受ける","masu":"受けます","masuNeg":"受けません","masuPast":"受けました","masuPastNeg":"受けませんでした","te":"受けて","nai":"受けない","naiPast":"受けなかった","ta":"受けた","potential":"受けられる","passive":"受けられる","causative":"受けさせる","causativePassive":"受けさせられる","volitional":"受けよう","imperative":"受けろ","prohibitive":"受けるな","condBa":"受ければ","condTara":"受けたら","tai":"受けたい","teIru":"受けている","teKudasai":"受けてください"}},{"key":"v:起きる","dictionary":"起きる","group":"ichidan","forms":{"dictionary":"起きる","masu":"起きます","masuNeg":"起きません","masuPast":"起きました","masuPastNeg":"起きませんでした","te":"起きて","nai":"起きない","naiPast":"起きなかった","ta":"起きた","potential":"起きられる","passive":"起きられる","causative":"起きさせる","causativePassive":"起きさせられる","volitional":"起きよう","imperative":"起きろ","prohibitive":"起きるな","condBa":"起きれば","condTara":"起きたら","tai":"起きたい","teIru":"起きている","teKudasai":"起きてください"}},{"key":"v:落ちる","dictionary":"落ちる","group":"ichidan","forms":{"dictionary":"落ちる","masu":"落ちます","masuNeg":"落ちません","masuPast":"落ちました","masuPastNeg":"落ちませんでした","te":"落ちて","nai":"落ちない","naiPast":"落ちなかった","ta":"落ちた","potential":"落ちられる","passive":"落ちられる","causative":"落ちさせる","causativePassive":"落ちさせられる","volitional":"落ちよう","imperative":"落ちろ","prohibitive":"落ちるな","condBa":"落ちれば","condTara":"落ちたら","tai":"落ちたい","teIru":"落ちている","teKudasai":"落ちてください"}},{"key":"v:覚える","dictionary":"覚える","group":"ichidan","forms":{"dictionary":"覚える","masu":"覚えます","masuNeg":"覚えません","masuPast":"覚えました","masuPastNeg":"覚えませんでした","te":"覚えて","nai":"覚えない","naiPast":"覚えなかった","ta":"覚えた","potential":"覚えられる","passive":"覚えられる","causative":"覚えさせる","causativePassive":"覚えさせられる","volitional":"覚えよう","imperative":"覚えろ","prohibitive":"覚えるな","condBa":"覚えれば","condTara":"覚えたら","tai":"覚えたい","teIru":"覚えている","teKudasai":"覚えてください"}},{"key":"v:降りる","dictionary":"降りる","group":"ichidan","forms":{"dictionary":"降りる","masu":"降ります","masuNeg":"降りません","masuPast":"降りました","masuPastNeg":"降りませんでした","te":"降りて","nai":"降りない","naiPast":"降りなかった","ta":"降りた","potential":"降りられる","passive":"降りられる","causative":"降りさせる","causativePassive":"降りさせられる","volitional":"降りよう","imperative":"降りろ","prohibitive":"降りるな","condBa":"降りれば","condTara":"降りたら","tai":"降りたい","teIru":"降りている","teKudasai":"降りてください"}},{"key":"v:変える","dictionary":"変える","group":"ichidan","forms":{"dictionary":"変える","masu":"変えます","masuNeg":"変えません","masuPast":"変えました","masuPastNeg":"変えませんでした","te":"変えて","nai":"変えない","naiPast":"変えなかった","ta":"変えた","potential":"変えられる","passive":"変えられる","causative":"変えさせる","causativePassive":"変えさせられる","volitional":"変えよう","imperative":"変えろ","prohibitive":"変えるな","condBa":"変えれば","condTara":"変えたら","tai":"変えたい","teIru":"変えている","teKudasai":"変えてください"}},{"key":"v:考える","dictionary":"考える","group":"ichidan","forms":{"dictionary":"考える","masu":"考えます","masuNeg":"考えません","masuPast":"考えました","masuPastNeg":"考えませんでした","te":"考えて","nai":"考えない","naiPast":"考えなかった","ta":"考えた","potential":"考えられる","passive":"考えられる","causative":"考えさせる","causativePassive":"考えさせられる","volitional":"考えよう","imperative":"考えろ","prohibitive":"考えるな","condBa":"考えれば","condTara":"考えたら","tai":"考えたい","teIru":"考えている","teKudasai":"考えてください"}},{"key":"v:消える","dictionary":"消える","group":"ichidan","forms":{"dictionary":"消える","masu":"消えます","masuNeg":"消えません","masuPast":"消えました","masuPastNeg":"消えませんでした","te":"消えて","nai":"消えない","naiPast":"消えなかった","ta":"消えた","potential":"消えられる","passive":"消えられる","causative":"消えさせる","causativePassive":"消えさせられる","volitional":"消えよう","imperative":"消えろ","prohibitive":"消えるな","condBa":"消えれば","condTara":"消えたら","tai":"消えたい","teIru":"消えている","teKudasai":"消えてください"}},{"key":"v:着る","dictionary":"着る","group":"ichidan","forms":{"dictionary":"着る","masu":"着ます","masuNeg":"着ません","masuPast":"着ました","masuPastNeg":"着ませんでした","te":"着て","nai":"着ない","naiPast":"着なかった","ta":"着た","potential":"着られる","passive":"着られる","causative":"着させる","causativePassive":"着させられる","volitional":"着よう","imperative":"着ろ","prohibitive":"着るな","condBa":"着れば","condTara":"着たら","tai":"着たい","teIru":"着ている","teKudasai":"着てください"}},{"key":"v:気をつける","dictionary":"気をつける","group":"ichidan","forms":{"dictionary":"気をつける","masu":"気をつけます","masuNeg":"気をつけません","masuPast":"気をつけました","masuPastNeg":"気をつけませんでした","te":"気をつけて","nai":"気をつけない","naiPast":"気をつけなかった","ta":"気をつけた","potential":"気をつけられる","passive":"気をつけられる","causative":"気をつけさせる","causativePassive":"気をつけさせられる","volitional":"気をつけよう","imperative":"気をつけろ","prohibitive":"気をつけるな","condBa":"気をつければ","condTara":"気をつけたら","tai":"気をつけたい","teIru":"気をつけている","teKudasai":"気をつけてください"}},{"key":"v:比べる","dictionary":"比べる","group":"ichidan","forms":{"dictionary":"比べる","masu":"比べます","masuNeg":"比べません","masuPast":"比べました","masuPastNeg":"比べませんでした","te":"比べて","nai":"比べない","naiPast":"比べなかった","ta":"比べた","potential":"比べられる","passive":"比べられる","causative":"比べさせる","causativePassive":"比べさせられる","volitional":"比べよう","imperative":"比べろ","prohibitive":"比べるな","condBa":"比べれば","condTara":"比べたら","tai":"比べたい","teIru":"比べている","teKudasai":"比べてください"}},{"key":"v:暮れる","dictionary":"暮れる","group":"ichidan","forms":{"dictionary":"暮れる","masu":"暮れます","masuNeg":"暮れません","masuPast":"暮れました","masuPastNeg":"暮れませんでした","te":"暮れて","nai":"暮れない","naiPast":"暮れなかった","ta":"暮れた","potential":"暮れられる","passive":"暮れられる","causative":"暮れさせる","causativePassive":"暮れさせられる","volitional":"暮れよう","imperative":"暮れろ","prohibitive":"暮れるな","condBa":"暮れれば","condTara":"暮れたら","tai":"暮れたい","teIru":"暮れている","teKudasai":"暮れてください"}},{"key":"v:壊れる","dictionary":"壊れる","group":"ichidan","forms":{"dictionary":"壊れる","masu":"壊れます","masuNeg":"壊れません","masuPast":"壊れました","masuPastNeg":"壊れませんでした","te":"壊れて","nai":"壊れない","naiPast":"壊れなかった","ta":"壊れた","potential":"壊れられる","passive":"壊れられる","causative":"壊れさせる","causativePassive":"壊れさせられる","volitional":"壊れよう","imperative":"壊れろ","prohibitive":"壊れるな","condBa":"壊れれば","condTara":"壊れたら","tai":"壊れたい","teIru":"壊れている","teKudasai":"壊れてください"}},{"key":"v:下げる","dictionary":"下げる","group":"ichidan","forms":{"dictionary":"下げる","masu":"下げます","masuNeg":"下げません","masuPast":"下げました","masuPastNeg":"下げませんでした","te":"下げて","nai":"下げない","naiPast":"下げなかった","ta":"下げた","potential":"下げられる","passive":"下げられる","causative":"下げさせる","causativePassive":"下げさせられる","volitional":"下げよう","imperative":"下げろ","prohibitive":"下げるな","condBa":"下げれば","condTara":"下げたら","tai":"下げたい","teIru":"下げている","teKudasai":"下げてください"}},{"key":"v:閉める","dictionary":"閉める","group":"ichidan","forms":{"dictionary":"閉める","masu":"閉めます","masuNeg":"閉めません","masuPast":"閉めました","masuPastNeg":"閉めませんでした","te":"閉めて","nai":"閉めない","naiPast":"閉めなかった","ta":"閉めた","potential":"閉められる","passive":"閉められる","causative":"閉めさせる","causativePassive":"閉めさせられる","volitional":"閉めよう","imperative":"閉めろ","prohibitive":"閉めるな","condBa":"閉めれば","condTara":"閉めたら","tai":"閉めたい","teIru":"閉めている","teKudasai":"閉めてください"}},{"key":"v:捨てる","dictionary":"捨てる","group":"ichidan","forms":{"dictionary":"捨てる","masu":"捨てます","masuNeg":"捨てません","masuPast":"捨てました","masuPastNeg":"捨てませんでした","te":"捨てて","nai":"捨てない","naiPast":"捨てなかった","ta":"捨てた","potential":"捨てられる","passive":"捨てられる","causative":"捨てさせる","causativePassive":"捨てさせられる","volitional":"捨てよう","imperative":"捨てろ","prohibitive":"捨てるな","condBa":"捨てれば","condTara":"捨てたら","tai":"捨てたい","teIru":"捨てている","teKudasai":"捨ててください"}},{"key":"v:育てる","dictionary":"育てる","group":"ichidan","forms":{"dictionary":"育てる","masu":"育てます","masuNeg":"育てません","masuPast":"育てました","masuPastNeg":"育てませんでした","te":"育てて","nai":"育てない","naiPast":"育てなかった","ta":"育てた","potential":"育てられる","passive":"育てられる","causative":"育てさせる","causativePassive":"育てさせられる","volitional":"育てよう","imperative":"育てろ","prohibitive":"育てるな","condBa":"育てれば","condTara":"育てたら","tai":"育てたい","teIru":"育てている","teKudasai":"育ててください"}},{"key":"v:倒れる","dictionary":"倒れる","group":"ichidan","forms":{"dictionary":"倒れる","masu":"倒れます","masuNeg":"倒れません","masuPast":"倒れました","masuPastNeg":"倒れませんでした","te":"倒れて","nai":"倒れない","naiPast":"倒れなかった","ta":"倒れた","potential":"倒れられる","passive":"倒れられる","causative":"倒れさせる","causativePassive":"倒れさせられる","volitional":"倒れよう","imperative":"倒れろ","prohibitive":"倒れるな","condBa":"倒れれば","condTara":"倒れたら","tai":"倒れたい","teIru":"倒れている","teKudasai":"倒れてください"}},{"key":"v:助ける","dictionary":"助ける","group":"ichidan","forms":{"dictionary":"助ける","masu":"助けます","masuNeg":"助けません","masuPast":"助けました","masuPastNeg":"助けませんでした","te":"助けて","nai":"助けない","naiPast":"助けなかった","ta":"助けた","potential":"助けられる","passive":"助けられる","causative":"助けさせる","causativePassive":"助けさせられる","volitional":"助けよう","imperative":"助けろ","prohibitive":"助けるな","condBa":"助ければ","condTara":"助けたら","tai":"助けたい","teIru":"助けている","teKudasai":"助けてください"}},{"key":"v:食べる","dictionary":"食べる","group":"ichidan","forms":{"dictionary":"食べる","masu":"食べます","masuNeg":"食べません","masuPast":"食べました","masuPastNeg":"食べませんでした","te":"食べて","nai":"食べない","naiPast":"食べなかった","ta":"食べた","potential":"食べられる","passive":"食べられる","causative":"食べさせる","causativePassive":"食べさせられる","volitional":"食べよう","imperative":"食べろ","prohibitive":"食べるな","condBa":"食べれば","condTara":"食べたら","tai":"食べたい","teIru":"食べている","teKudasai":"食べてください"}},{"key":"v:足りる","dictionary":"足りる","group":"ichidan","forms":{"dictionary":"足りる","masu":"足ります","masuNeg":"足りません","masuPast":"足りました","masuPastNeg":"足りませんでした","te":"足りて","nai":"足りない","naiPast":"足りなかった","ta":"足りた","potential":"足りられる","passive":"足りられる","causative":"足りさせる","causativePassive":"足りさせられる","volitional":"足りよう","imperative":"足りろ","prohibitive":"足りるな","condBa":"足りれば","condTara":"足りたら","tai":"足りたい","teIru":"足りている","teKudasai":"足りてください"}},{"key":"v:続ける","dictionary":"続ける","group":"ichidan","forms":{"dictionary":"続ける","masu":"続けます","masuNeg":"続けません","masuPast":"続けました","masuPastNeg":"続けませんでした","te":"続けて","nai":"続けない","naiPast":"続けなかった","ta":"続けた","potential":"続けられる","passive":"続けられる","causative":"続けさせる","causativePassive":"続けさせられる","volitional":"続けよう","imperative":"続けろ","prohibitive":"続けるな","condBa":"続ければ","condTara":"続けたら","tai":"続けたい","teIru":"続けている","teKudasai":"続けてください"}},{"key":"v:伝える","dictionary":"伝える","group":"ichidan","forms":{"dictionary":"伝える","masu":"伝えます","masuNeg":"伝えません","masuPast":"伝えました","masuPastNeg":"伝えませんでした","te":"伝えて","nai":"伝えない","naiPast":"伝えなかった","ta":"伝えた","potential":"伝えられる","passive":"伝えられる","causative":"伝えさせる","causativePassive":"伝えさせられる","volitional":"伝えよう","imperative":"伝えろ","prohibitive":"伝えるな","condBa":"伝えれば","condTara":"伝えたら","tai":"伝えたい","teIru":"伝えている","teKudasai":"伝えてください"}},{"key":"v:連れる","dictionary":"連れる","group":"ichidan","forms":{"dictionary":"連れる","masu":"連れます","masuNeg":"連れません","masuPast":"連れました","masuPastNeg":"連れませんでした","te":"連れて","nai":"連れない","naiPast":"連れなかった","ta":"連れた","potential":"連れられる","passive":"連れられる","causative":"連れさせる","causativePassive":"連れさせられる","volitional":"連れよう","imperative":"連れろ","prohibitive":"連れるな","condBa":"連れれば","condTara":"連れたら","tai":"連れたい","teIru":"連れている","teKudasai":"連れてください"}},{"key":"v:できる","dictionary":"できる","group":"ichidan","forms":{"dictionary":"できる","masu":"できます","masuNeg":"できません","masuPast":"できました","masuPastNeg":"できませんでした","te":"できて","nai":"できない","naiPast":"できなかった","ta":"できた","potential":"できられる","passive":"できられる","causative":"できさせる","causativePassive":"できさせられる","volitional":"できよう","imperative":"できろ","prohibitive":"できるな","condBa":"できれば","condTara":"できたら","tai":"できたい","teIru":"できている","teKudasai":"できてください"}},{"key":"v:出る","dictionary":"出る","group":"ichidan","forms":{"dictionary":"出る","masu":"出ます","masuNeg":"出ません","masuPast":"出ました","masuPastNeg":"出ませんでした","te":"出て","nai":"出ない","naiPast":"出なかった","ta":"出た","potential":"出られる","passive":"出られる","causative":"出させる","causativePassive":"出させられる","volitional":"出よう","imperative":"出ろ","prohibitive":"出るな","condBa":"出れば","condTara":"出たら","tai":"出たい","teIru":"出ている","teKudasai":"出てください"}},{"key":"v:届ける","dictionary":"届ける","group":"ichidan","forms":{"dictionary":"届ける","masu":"届けます","masuNeg":"届けません","masuPast":"届けました","masuPastNeg":"届けませんでした","te":"届けて","nai":"届けない","naiPast":"届けなかった","ta":"届けた","potential":"届けられる","passive":"届けられる","causative":"届けさせる","causativePassive":"届けさせられる","volitional":"届けよう","imperative":"届けろ","prohibitive":"届けるな","condBa":"届ければ","condTara":"届けたら","tai":"届けたい","teIru":"届けている","teKudasai":"届けてください"}},{"key":"v:逃げる","dictionary":"逃げる","group":"ichidan","forms":{"dictionary":"逃げる","masu":"逃げます","masuNeg":"逃げません","masuPast":"逃げました","masuPastNeg":"逃げませんでした","te":"逃げて","nai":"逃げない","naiPast":"逃げなかった","ta":"逃げた","potential":"逃げられる","passive":"逃げられる","causative":"逃げさせる","causativePassive":"逃げさせられる","volitional":"逃げよう","imperative":"逃げろ","prohibitive":"逃げるな","condBa":"逃げれば","condTara":"逃げたら","tai":"逃げたい","teIru":"逃げている","teKudasai":"逃げてください"}},{"key":"v:寝る","dictionary":"寝る","group":"ichidan","forms":{"dictionary":"寝る","masu":"寝ます","masuNeg":"寝ません","masuPast":"寝ました","masuPastNeg":"寝ませんでした","te":"寝て","nai":"寝ない","naiPast":"寝なかった","ta":"寝た","potential":"寝られる","passive":"寝られる","causative":"寝させる","causativePassive":"寝させられる","volitional":"寝よう","imperative":"寝ろ","prohibitive":"寝るな","condBa":"寝れば","condTara":"寝たら","tai":"寝たい","teIru":"寝ている","teKudasai":"寝てください"}},{"key":"v:乗り換える","dictionary":"乗り換える","group":"ichidan","forms":{"dictionary":"乗り換える","masu":"乗り換えます","masuNeg":"乗り換えません","masuPast":"乗り換えました","masuPastNeg":"乗り換えませんでした","te":"乗り換えて","nai":"乗り換えない","naiPast":"乗り換えなかった","ta":"乗り換えた","potential":"乗り換えられる","passive":"乗り換えられる","causative":"乗り換えさせる","causativePassive":"乗り換えさせられる","volitional":"乗り換えよう","imperative":"乗り換えろ","prohibitive":"乗り換えるな","condBa":"乗り換えれば","condTara":"乗り換えたら","tai":"乗り換えたい","teIru":"乗り換えている","teKudasai":"乗り換えてください"}},{"key":"v:始める","dictionary":"始める","group":"ichidan","forms":{"dictionary":"始める","masu":"始めます","masuNeg":"始めません","masuPast":"始めました","masuPastNeg":"始めませんでした","te":"始めて","nai":"始めない","naiPast":"始めなかった","ta":"始めた","potential":"始められる","passive":"始められる","causative":"始めさせる","causativePassive":"始めさせられる","volitional":"始めよう","imperative":"始めろ","prohibitive":"始めるな","condBa":"始めれば","condTara":"始めたら","tai":"始めたい","teIru":"始めている","teKudasai":"始めてください"}},{"key":"v:晴れる","dictionary":"晴れる","group":"ichidan","forms":{"dictionary":"晴れる","masu":"晴れます","masuNeg":"晴れません","masuPast":"晴れました","masuPastNeg":"晴れませんでした","te":"晴れて","nai":"晴れない","naiPast":"晴れなかった","ta":"晴れた","potential":"晴れられる","passive":"晴れられる","causative":"晴れさせる","causativePassive":"晴れさせられる","volitional":"晴れよう","imperative":"晴れろ","prohibitive":"晴れるな","condBa":"晴れれば","condTara":"晴れたら","tai":"晴れたい","teIru":"晴れている","teKudasai":"晴れてください"}},{"key":"v:冷える","dictionary":"冷える","group":"ichidan","forms":{"dictionary":"冷える","masu":"冷えます","masuNeg":"冷えません","masuPast":"冷えました","masuPastNeg":"冷えませんでした","te":"冷えて","nai":"冷えない","naiPast":"冷えなかった","ta":"冷えた","potential":"冷えられる","passive":"冷えられる","causative":"冷えさせる","causativePassive":"冷えさせられる","volitional":"冷えよう","imperative":"冷えろ","prohibitive":"冷えるな","condBa":"冷えれば","condTara":"冷えたら","tai":"冷えたい","teIru":"冷えている","teKudasai":"冷えてください"}},{"key":"v:増える","dictionary":"増える","group":"ichidan","forms":{"dictionary":"増える","masu":"増えます","masuNeg":"増えません","masuPast":"増えました","masuPastNeg":"増えませんでした","te":"増えて","nai":"増えない","naiPast":"増えなかった","ta":"増えた","potential":"増えられる","passive":"増えられる","causative":"増えさせる","causativePassive":"増えさせられる","volitional":"増えよう","imperative":"増えろ","prohibitive":"増えるな","condBa":"増えれば","condTara":"増えたら","tai":"増えたい","teIru":"増えている","teKudasai":"増えてください"}},{"key":"v:負ける","dictionary":"負ける","group":"ichidan","forms":{"dictionary":"負ける","masu":"負けます","masuNeg":"負けません","masuPast":"負けました","masuPastNeg":"負けませんでした","te":"負けて","nai":"負けない","naiPast":"負けなかった","ta":"負けた","potential":"負けられる","passive":"負けられる","causative":"負けさせる","causativePassive":"負けさせられる","volitional":"負けよう","imperative":"負けろ","prohibitive":"負けるな","condBa":"負ければ","condTara":"負けたら","tai":"負けたい","teIru":"負けている","teKudasai":"負けてください"}},{"key":"v:間違える","dictionary":"間違える","group":"ichidan","forms":{"dictionary":"間違える","masu":"間違えます","masuNeg":"間違えません","masuPast":"間違えました","masuPastNeg":"間違えませんでした","te":"間違えて","nai":"間違えない","naiPast":"間違えなかった","ta":"間違えた","potential":"間違えられる","passive":"間違えられる","causative":"間違えさせる","causativePassive":"間違えさせられる","volitional":"間違えよう","imperative":"間違えろ","prohibitive":"間違えるな","condBa":"間違えれば","condTara":"間違えたら","tai":"間違えたい","teIru":"間違えている","teKudasai":"間違えてください"}},{"key":"v:見える","dictionary":"見える","group":"ichidan","forms":{"dictionary":"見える","masu":"見えます","masuNeg":"見えません","masuPast":"見えました","masuPastNeg":"見えませんでした","te":"見えて","nai":"見えない","naiPast":"見えなかった","ta":"見えた","potential":"見えられる","passive":"見えられる","causative":"見えさせる","causativePassive":"見えさせられる","volitional":"見えよう","imperative":"見えろ","prohibitive":"見えるな","condBa":"見えれば","condTara":"見えたら","tai":"見えたい","teIru":"見えている","teKudasai":"見えてください"}},{"key":"v:見せる","dictionary":"見せる","group":"ichidan","forms":{"dictionary":"見せる","masu":"見せます","masuNeg":"見せません","masuPast":"見せました","masuPastNeg":"見せませんでした","te":"見せて","nai":"見せない","naiPast":"見せなかった","ta":"見せた","potential":"見せられる","passive":"見せられる","causative":"見せさせる","causativePassive":"見せさせられる","volitional":"見せよう","imperative":"見せろ","prohibitive":"見せるな","condBa":"見せれば","condTara":"見せたら","tai":"見せたい","teIru":"見せている","teKudasai":"見せてください"}},{"key":"v:見る","dictionary":"見る","group":"ichidan","forms":{"dictionary":"見る","masu":"見ます","masuNeg":"見ません","masuPast":"見ました","masuPastNeg":"見ませんでした","te":"見て","nai":"見ない","naiPast":"見なかった","ta":"見た","potential":"見られる","passive":"見られる","causative":"見させる","causativePassive":"見させられる","volitional":"見よう","imperative":"見ろ","prohibitive":"見るな","condBa":"見れば","condTara":"見たら","tai":"見たい","teIru":"見ている","teKudasai":"見てください"}},{"key":"v:迎える","dictionary":"迎える","group":"ichidan","forms":{"dictionary":"迎える","masu":"迎えます","masuNeg":"迎えません","masuPast":"迎えました","masuPastNeg":"迎えませんでした","te":"迎えて","nai":"迎えない","naiPast":"迎えなかった","ta":"迎えた","potential":"迎えられる","passive":"迎えられる","causative":"迎えさせる","causativePassive":"迎えさせられる","volitional":"迎えよう","imperative":"迎えろ","prohibitive":"迎えるな","condBa":"迎えれば","condTara":"迎えたら","tai":"迎えたい","teIru":"迎えている","teKudasai":"迎えてください"}},{"key":"v:燃える","dictionary":"燃える","group":"ichidan","forms":{"dictionary":"燃える","masu":"燃えます","masuNeg":"燃えません","masuPast":"燃えました","masuPastNeg":"燃えませんでした","te":"燃えて","nai":"燃えない","naiPast":"燃えなかった","ta":"燃えた","potential":"燃えられる","passive":"燃えられる","causative":"燃えさせる","causativePassive":"燃えさせられる","volitional":"燃えよう","imperative":"燃えろ","prohibitive":"燃えるな","condBa":"燃えれば","condTara":"燃えたら","tai":"燃えたい","teIru":"燃えている","teKudasai":"燃えてください"}},{"key":"v:やめる","dictionary":"やめる","group":"ichidan","forms":{"dictionary":"やめる","masu":"やめます","masuNeg":"やめません","masuPast":"やめました","masuPastNeg":"やめませんでした","te":"やめて","nai":"やめない","naiPast":"やめなかった","ta":"やめた","potential":"やめられる","passive":"やめられる","causative":"やめさせる","causativePassive":"やめさせられる","volitional":"やめよう","imperative":"やめろ","prohibitive":"やめるな","condBa":"やめれば","condTara":"やめたら","tai":"やめたい","teIru":"やめている","teKudasai":"やめてください"}},{"key":"v:汚れる","dictionary":"汚れる","group":"ichidan","forms":{"dictionary":"汚れる","masu":"汚れます","masuNeg":"汚れません","masuPast":"汚れました","masuPastNeg":"汚れませんでした","te":"汚れて","nai":"汚れない","naiPast":"汚れなかった","ta":"汚れた","potential":"汚れられる","passive":"汚れられる","causative":"汚れさせる","causativePassive":"汚れさせられる","volitional":"汚れよう","imperative":"汚れろ","prohibitive":"汚れるな","condBa":"汚れれば","condTara":"汚れたら","tai":"汚れたい","teIru":"汚れている","teKudasai":"汚れてください"}},{"key":"v:集める","dictionary":"集める","group":"ichidan","forms":{"dictionary":"集める","masu":"集めます","masuNeg":"集めません","masuPast":"集めました","masuPastNeg":"集めませんでした","te":"集めて","nai":"集めない","naiPast":"集めなかった","ta":"集めた","potential":"集められる","passive":"集められる","causative":"集めさせる","causativePassive":"集めさせられる","volitional":"集めよう","imperative":"集めろ","prohibitive":"集めるな","condBa":"集めれば","condTara":"集めたら","tai":"集めたい","teIru":"集めている","teKudasai":"集めてください"}},{"key":"v:知らせる","dictionary":"知らせる","group":"ichidan","forms":{"dictionary":"知らせる","masu":"知らせます","masuNeg":"知らせません","masuPast":"知らせました","masuPastNeg":"知らせませんでした","te":"知らせて","nai":"知らせない","naiPast":"知らせなかった","ta":"知らせた","potential":"知らせられる","passive":"知らせられる","causative":"知らせさせる","causativePassive":"知らせさせられる","volitional":"知らせよう","imperative":"知らせろ","prohibitive":"知らせるな","condBa":"知らせれば","condTara":"知らせたら","tai":"知らせたい","teIru":"知らせている","teKudasai":"知らせてください"}},{"key":"v:調べる","dictionary":"調べる","group":"ichidan","forms":{"dictionary":"調べる","masu":"調べます","masuNeg":"調べません","masuPast":"調べました","masuPastNeg":"調べませんでした","te":"調べて","nai":"調べない","naiPast":"調べなかった","ta":"調べた","potential":"調べられる","passive":"調べられる","causative":"調べさせる","causativePassive":"調べさせられる","volitional":"調べよう","imperative":"調べろ","prohibitive":"調べるな","condBa":"調べれば","condTara":"調べたら","tai":"調べたい","teIru":"調べている","teKudasai":"調べてください"}},{"key":"v:聞こえる","dictionary":"聞こえる","group":"ichidan","forms":{"dictionary":"聞こえる","masu":"聞こえます","masuNeg":"聞こえません","masuPast":"聞こえました","masuPastNeg":"聞こえませんでした","te":"聞こえて","nai":"聞こえない","naiPast":"聞こえなかった","ta":"聞こえた","potential":"聞こえられる","passive":"聞こえられる","causative":"聞こえさせる","causativePassive":"聞こえさせられる","volitional":"聞こえよう","imperative":"聞こえろ","prohibitive":"聞こえるな","condBa":"聞こえれば","condTara":"聞こえたら","tai":"聞こえたい","teIru":"聞こえている","teKudasai":"聞こえてください"}},{"key":"v:決める","dictionary":"決める","group":"ichidan","forms":{"dictionary":"決める","masu":"決めます","masuNeg":"決めません","masuPast":"決めました","masuPastNeg":"決めませんでした","te":"決めて","nai":"決めない","naiPast":"決めなかった","ta":"決めた","potential":"決められる","passive":"決められる","causative":"決めさせる","causativePassive":"決めさせられる","volitional":"決めよう","imperative":"決めろ","prohibitive":"決めるな","condBa":"決めれば","condTara":"決めたら","tai":"決めたい","teIru":"決めている","teKudasai":"決めてください"}},{"key":"v:借りる","dictionary":"借りる","group":"ichidan","forms":{"dictionary":"借りる","masu":"借ります","masuNeg":"借りません","masuPast":"借りました","masuPastNeg":"借りませんでした","te":"借りて","nai":"借りない","naiPast":"借りなかった","ta":"借りた","potential":"借りられる","passive":"借りられる","causative":"借りさせる","causativePassive":"借りさせられる","volitional":"借りよう","imperative":"借りろ","prohibitive":"借りるな","condBa":"借りれば","condTara":"借りたら","tai":"借りたい","teIru":"借りている","teKudasai":"借りてください"}},{"key":"v:立てる","dictionary":"立てる","group":"ichidan","forms":{"dictionary":"立てる","masu":"立てます","masuNeg":"立てません","masuPast":"立てました","masuPastNeg":"立てませんでした","te":"立てて","nai":"立てない","naiPast":"立てなかった","ta":"立てた","potential":"立てられる","passive":"立てられる","causative":"立てさせる","causativePassive":"立てさせられる","volitional":"立てよう","imperative":"立てろ","prohibitive":"立てるな","condBa":"立てれば","condTara":"立てたら","tai":"立てたい","teIru":"立てている","teKudasai":"立ててください"}},{"key":"v:投げる","dictionary":"投げる","group":"ichidan","forms":{"dictionary":"投げる","masu":"投げます","masuNeg":"投げません","masuPast":"投げました","masuPastNeg":"投げませんでした","te":"投げて","nai":"投げない","naiPast":"投げなかった","ta":"投げた","potential":"投げられる","passive":"投げられる","causative":"投げさせる","causativePassive":"投げさせられる","volitional":"投げよう","imperative":"投げろ","prohibitive":"投げるな","condBa":"投げれば","condTara":"投げたら","tai":"投げたい","teIru":"投げている","teKudasai":"投げてください"}},{"key":"v:慣れる","dictionary":"慣れる","group":"ichidan","forms":{"dictionary":"慣れる","masu":"慣れます","masuNeg":"慣れません","masuPast":"慣れました","masuPastNeg":"慣れませんでした","te":"慣れて","nai":"慣れない","naiPast":"慣れなかった","ta":"慣れた","potential":"慣れられる","passive":"慣れられる","causative":"慣れさせる","causativePassive":"慣れさせられる","volitional":"慣れよう","imperative":"慣れろ","prohibitive":"慣れるな","condBa":"慣れれば","condTara":"慣れたら","tai":"慣れたい","teIru":"慣れている","teKudasai":"慣れてください"}},{"key":"v:痩せる","dictionary":"痩せる","group":"ichidan","forms":{"dictionary":"痩せる","masu":"痩せます","masuNeg":"痩せません","masuPast":"痩せました","masuPastNeg":"痩せませんでした","te":"痩せて","nai":"痩せない","naiPast":"痩せなかった","ta":"痩せた","potential":"痩せられる","passive":"痩せられる","causative":"痩せさせる","causativePassive":"痩せさせられる","volitional":"痩せよう","imperative":"痩せろ","prohibitive":"痩せるな","condBa":"痩せれば","condTara":"痩せたら","tai":"痩せたい","teIru":"痩せている","teKudasai":"痩せてください"}},{"key":"v:別れる","dictionary":"別れる","group":"ichidan","forms":{"dictionary":"別れる","masu":"別れます","masuNeg":"別れません","masuPast":"別れました","masuPastNeg":"別れませんでした","te":"別れて","nai":"別れない","naiPast":"別れなかった","ta":"別れた","potential":"別れられる","passive":"別れられる","causative":"別れさせる","causativePassive":"別れさせられる","volitional":"別れよう","imperative":"別れろ","prohibitive":"別れるな","condBa":"別れれば","condTara":"別れたら","tai":"別れたい","teIru":"別れている","teKudasai":"別れてください"}},{"key":"v:割れる","dictionary":"割れる","group":"ichidan","forms":{"dictionary":"割れる","masu":"割れます","masuNeg":"割れません","masuPast":"割れました","masuPastNeg":"割れませんでした","te":"割れて","nai":"割れない","naiPast":"割れなかった","ta":"割れた","potential":"割れられる","passive":"割れられる","causative":"割れさせる","causativePassive":"割れさせられる","volitional":"割れよう","imperative":"割れろ","prohibitive":"割れるな","condBa":"割れれば","condTara":"割れたら","tai":"割れたい","teIru":"割れている","teKudasai":"割れてください"}},{"key":"v:片付ける","dictionary":"片付ける","group":"ichidan","forms":{"dictionary":"片付ける","masu":"片付けます","masuNeg":"片付けません","masuPast":"片付けました","masuPastNeg":"片付けませんでした","te":"片付けて","nai":"片付けない","naiPast":"片付けなかった","ta":"片付けた","potential":"片付けられる","passive":"片付けられる","causative":"片付けさせる","causativePassive":"片付けさせられる","volitional":"片付けよう","imperative":"片付けろ","prohibitive":"片付けるな","condBa":"片付ければ","condTara":"片付けたら","tai":"片付けたい","teIru":"片付けている","teKudasai":"片付けてください"}},{"key":"v:つける","dictionary":"つける","group":"ichidan","forms":{"dictionary":"つける","masu":"つけます","masuNeg":"つけません","masuPast":"つけました","masuPastNeg":"つけませんでした","te":"つけて","nai":"つけない","naiPast":"つけなかった","ta":"つけた","potential":"つけられる","passive":"つけられる","causative":"つけさせる","causativePassive":"つけさせられる","volitional":"つけよう","imperative":"つけろ","prohibitive":"つけるな","condBa":"つければ","condTara":"つけたら","tai":"つけたい","teIru":"つけている","teKudasai":"つけてください"}},{"key":"v:過ぎる","dictionary":"過ぎる","group":"ichidan","forms":{"dictionary":"過ぎる","masu":"過ぎます","masuNeg":"過ぎません","masuPast":"過ぎました","masuPastNeg":"過ぎませんでした","te":"過ぎて","nai":"過ぎない","naiPast":"過ぎなかった","ta":"過ぎた","potential":"過ぎられる","passive":"過ぎられる","causative":"過ぎさせる","causativePassive":"過ぎさせられる","volitional":"過ぎよう","imperative":"過ぎろ","prohibitive":"過ぎるな","condBa":"過ぎれば","condTara":"過ぎたら","tai":"過ぎたい","teIru":"過ぎている","teKudasai":"過ぎてください"}},{"key":"v:足りる","dictionary":"足りる","group":"ichidan","forms":{"dictionary":"足りる","masu":"足ります","masuNeg":"足りません","masuPast":"足りました","masuPastNeg":"足りませんでした","te":"足りて","nai":"足りない","naiPast":"足りなかった","ta":"足りた","potential":"足りられる","passive":"足りられる","causative":"足りさせる","causativePassive":"足りさせられる","volitional":"足りよう","imperative":"足りろ","prohibitive":"足りるな","condBa":"足りれば","condTara":"足りたら","tai":"足りたい","teIru":"足りている","teKudasai":"足りてください"}},{"key":"v:似る","dictionary":"似る","group":"ichidan","forms":{"dictionary":"似る","masu":"似ます","masuNeg":"似ません","masuPast":"似ました","masuPastNeg":"似ませんでした","te":"似て","nai":"似ない","naiPast":"似なかった","ta":"似た","potential":"似られる","passive":"似られる","causative":"似させる","causativePassive":"似させられる","volitional":"似よう","imperative":"似ろ","prohibitive":"似るな","condBa":"似れば","condTara":"似たら","tai":"似たい","teIru":"似ている","teKudasai":"似てください"}},{"key":"v:生きる","dictionary":"生きる","group":"ichidan","forms":{"dictionary":"生きる","masu":"生きます","masuNeg":"生きません","masuPast":"生きました","masuPastNeg":"生きませんでした","te":"生きて","nai":"生きない","naiPast":"生きなかった","ta":"生きた","potential":"生きられる","passive":"生きられる","causative":"生きさせる","causativePassive":"生きさせられる","volitional":"生きよう","imperative":"生きろ","prohibitive":"生きるな","condBa":"生きれば","condTara":"生きたら","tai":"生きたい","teIru":"生きている","teKudasai":"生きてください"}},{"key":"v:閉じる","dictionary":"閉じる","group":"ichidan","forms":{"dictionary":"閉じる","masu":"閉じます","masuNeg":"閉じません","masuPast":"閉じました","masuPastNeg":"閉じませんでした","te":"閉じて","nai":"閉じない","naiPast":"閉じなかった","ta":"閉じた","potential":"閉じられる","passive":"閉じられる","causative":"閉じさせる","causativePassive":"閉じさせられる","volitional":"閉じよう","imperative":"閉じろ","prohibitive":"閉じるな","condBa":"閉じれば","condTara":"閉じたら","tai":"閉じたい","teIru":"閉じている","teKudasai":"閉じてください"}},{"key":"v:感じる","dictionary":"感じる","group":"ichidan","forms":{"dictionary":"感じる","masu":"感じます","masuNeg":"感じません","masuPast":"感じました","masuPastNeg":"感じませんでした","te":"感じて","nai":"感じない","naiPast":"感じなかった","ta":"感じた","potential":"感じられる","passive":"感じられる","causative":"感じさせる","causativePassive":"感じさせられる","volitional":"感じよう","imperative":"感じろ","prohibitive":"感じるな","condBa":"感じれば","condTara":"感じたら","tai":"感じたい","teIru":"感じている","teKudasai":"感じてください"}},{"key":"v:信じる","dictionary":"信じる","group":"ichidan","forms":{"dictionary":"信じる","masu":"信じます","masuNeg":"信じません","masuPast":"信じました","masuPastNeg":"信じませんでした","te":"信じて","nai":"信じない","naiPast":"信じなかった","ta":"信じた","potential":"信じられる","passive":"信じられる","causative":"信じさせる","causativePassive":"信じさせられる","volitional":"信じよう","imperative":"信じろ","prohibitive":"信じるな","condBa":"信じれば","condTara":"信じたら","tai":"信じたい","teIru":"信じている","teKudasai":"信じてください"}},{"key":"v:浴びる","dictionary":"浴びる","group":"ichidan","forms":{"dictionary":"浴びる","masu":"浴びます","masuNeg":"浴びません","masuPast":"浴びました","masuPastNeg":"浴びませんでした","te":"浴びて","nai":"浴びない","naiPast":"浴びなかった","ta":"浴びた","potential":"浴びられる","passive":"浴びられる","causative":"浴びさせる","causativePassive":"浴びさせられる","volitional":"浴びよう","imperative":"浴びろ","prohibitive":"浴びるな","condBa":"浴びれば","condTara":"浴びたら","tai":"浴びたい","teIru":"浴びている","teKudasai":"浴びてください"}},{"key":"v:飽きる","dictionary":"飽きる","group":"ichidan","forms":{"dictionary":"飽きる","masu":"飽きます","masuNeg":"飽きません","masuPast":"飽きました","masuPastNeg":"飽きませんでした","te":"飽きて","nai":"飽きない","naiPast":"飽きなかった","ta":"飽きた","potential":"飽きられる","passive":"飽きられる","causative":"飽きさせる","causativePassive":"飽きさせられる","volitional":"飽きよう","imperative":"飽きろ","prohibitive":"飽きるな","condBa":"飽きれば","condTara":"飽きたら","tai":"飽きたい","teIru":"飽きている","teKudasai":"飽きてください"}},{"key":"v:煮る","dictionary":"煮る","group":"ichidan","forms":{"dictionary":"煮る","masu":"煮ます","masuNeg":"煮ません","masuPast":"煮ました","masuPastNeg":"煮ませんでした","te":"煮て","nai":"煮ない","naiPast":"煮なかった","ta":"煮た","potential":"煮られる","passive":"煮られる","causative":"煮させる","causativePassive":"煮させられる","volitional":"煮よう","imperative":"煮ろ","prohibitive":"煮るな","condBa":"煮れば","condTara":"煮たら","tai":"煮たい","teIru":"煮ている","teKudasai":"煮てください"}},{"key":"v:教える","dictionary":"教える","group":"ichidan","forms":{"dictionary":"教える","masu":"教えます","masuNeg":"教えません","masuPast":"教えました","masuPastNeg":"教えませんでした","te":"教えて","nai":"教えない","naiPast":"教えなかった","ta":"教えた","potential":"教えられる","passive":"教えられる","causative":"教えさせる","causativePassive":"教えさせられる","volitional":"教えよう","imperative":"教えろ","prohibitive":"教えるな","condBa":"教えれば","condTara":"教えたら","tai":"教えたい","teIru":"教えている","teKudasai":"教えてください"}},{"key":"v:出かける","dictionary":"出かける","group":"ichidan","forms":{"dictionary":"出かける","masu":"出かけます","masuNeg":"出かけません","masuPast":"出かけました","masuPastNeg":"出かけませんでした","te":"出かけて","nai":"出かけない","naiPast":"出かけなかった","ta":"出かけた","potential":"出かけられる","passive":"出かけられる","causative":"出かけさせる","causativePassive":"出かけさせられる","volitional":"出かけよう","imperative":"出かけろ","prohibitive":"出かけるな","condBa":"出かければ","condTara":"出かけたら","tai":"出かけたい","teIru":"出かけている","teKudasai":"出かけてください"}},{"key":"v:答える","dictionary":"答える","group":"ichidan","forms":{"dictionary":"答える","masu":"答えます","masuNeg":"答えません","masuPast":"答えました","masuPastNeg":"答えませんでした","te":"答えて","nai":"答えない","naiPast":"答えなかった","ta":"答えた","potential":"答えられる","passive":"答えられる","causative":"答えさせる","causativePassive":"答えさせられる","volitional":"答えよう","imperative":"答えろ","prohibitive":"答えるな","condBa":"答えれば","condTara":"答えたら","tai":"答えたい","teIru":"答えている","teKudasai":"答えてください"}},{"key":"v:並べる","dictionary":"並べる","group":"ichidan","forms":{"dictionary":"並べる","masu":"並べます","masuNeg":"並べません","masuPast":"並べました","masuPastNeg":"並べませんでした","te":"並べて","nai":"並べない","naiPast":"並べなかった","ta":"並べた","potential":"並べられる","passive":"並べられる","causative":"並べさせる","causativePassive":"並べさせられる","volitional":"並べよう","imperative":"並べろ","prohibitive":"並べるな","condBa":"並べれば","condTara":"並べたら","tai":"並べたい","teIru":"並べている","teKudasai":"並べてください"}},{"key":"v:植える","dictionary":"植える","group":"ichidan","forms":{"dictionary":"植える","masu":"植えます","masuNeg":"植えません","masuPast":"植えました","masuPastNeg":"植えませんでした","te":"植えて","nai":"植えない","naiPast":"植えなかった","ta":"植えた","potential":"植えられる","passive":"植えられる","causative":"植えさせる","causativePassive":"植えさせられる","volitional":"植えよう","imperative":"植えろ","prohibitive":"植えるな","condBa":"植えれば","condTara":"植えたら","tai":"植えたい","teIru":"植えている","teKudasai":"植えてください"}},{"key":"v:褒める","dictionary":"褒める","group":"ichidan","forms":{"dictionary":"褒める","masu":"褒めます","masuNeg":"褒めません","masuPast":"褒めました","masuPastNeg":"褒めませんでした","te":"褒めて","nai":"褒めない","naiPast":"褒めなかった","ta":"褒めた","potential":"褒められる","passive":"褒められる","causative":"褒めさせる","causativePassive":"褒めさせられる","volitional":"褒めよう","imperative":"褒めろ","prohibitive":"褒めるな","condBa":"褒めれば","condTara":"褒めたら","tai":"褒めたい","teIru":"褒めている","teKudasai":"褒めてください"}},{"key":"v:忘れる","dictionary":"忘れる","group":"ichidan","forms":{"dictionary":"忘れる","masu":"忘れます","masuNeg":"忘れません","masuPast":"忘れました","masuPastNeg":"忘れませんでした","te":"忘れて","nai":"忘れない","naiPast":"忘れなかった","ta":"忘れた","potential":"忘れられる","passive":"忘れられる","causative":"忘れさせる","causativePassive":"忘れさせられる","volitional":"忘れよう","imperative":"忘れろ","prohibitive":"忘れるな","condBa":"忘れれば","condTara":"忘れたら","tai":"忘れたい","teIru":"忘れている","teKudasai":"忘れてください"}},{"key":"v:数える","dictionary":"数える","group":"ichidan","forms":{"dictionary":"数える","masu":"数えます","masuNeg":"数えません","masuPast":"数えました","masuPastNeg":"数えませんでした","te":"数えて","nai":"数えない","naiPast":"数えなかった","ta":"数えた","potential":"数えられる","passive":"数えられる","causative":"数えさせる","causativePassive":"数えさせられる","volitional":"数えよう","imperative":"数えろ","prohibitive":"数えるな","condBa":"数えれば","condTara":"数えたら","tai":"数えたい","teIru":"数えている","teKudasai":"数えてください"}},{"key":"v:見つける","dictionary":"見つける","group":"ichidan","forms":{"dictionary":"見つける","masu":"見つけます","masuNeg":"見つけません","masuPast":"見つけました","masuPastNeg":"見つけませんでした","te":"見つけて","nai":"見つけない","naiPast":"見つけなかった","ta":"見つけた","potential":"見つけられる","passive":"見つけられる","causative":"見つけさせる","causativePassive":"見つけさせられる","volitional":"見つけよう","imperative":"見つけろ","prohibitive":"見つけるな","condBa":"見つければ","condTara":"見つけたら","tai":"見つけたい","teIru":"見つけている","teKudasai":"見つけてください"}},{"key":"v:着替える","dictionary":"着替える","group":"ichidan","forms":{"dictionary":"着替える","masu":"着替えます","masuNeg":"着替えません","masuPast":"着替えました","masuPastNeg":"着替えませんでした","te":"着替えて","nai":"着替えない","naiPast":"着替えなかった","ta":"着替えた","potential":"着替えられる","passive":"着替えられる","causative":"着替えさせる","causativePassive":"着替えさせられる","volitional":"着替えよう","imperative":"着替えろ","prohibitive":"着替えるな","condBa":"着替えれば","condTara":"着替えたら","tai":"着替えたい","teIru":"着替えている","teKudasai":"着替えてください"}},{"key":"v:止める","dictionary":"止める","group":"ichidan","forms":{"dictionary":"止める","masu":"止めます","masuNeg":"止めません","masuPast":"止めました","masuPastNeg":"止めませんでした","te":"止めて","nai":"止めない","naiPast":"止めなかった","ta":"止めた","potential":"止められる","passive":"止められる","causative":"止めさせる","causativePassive":"止めさせられる","volitional":"止めよう","imperative":"止めろ","prohibitive":"止めるな","condBa":"止めれば","condTara":"止めたら","tai":"止めたい","teIru":"止めている","teKudasai":"止めてください"}},{"key":"v:掛ける","dictionary":"掛ける","group":"ichidan","forms":{"dictionary":"掛ける","masu":"掛けます","masuNeg":"掛けません","masuPast":"掛けました","masuPastNeg":"掛けませんでした","te":"掛けて","nai":"掛けない","naiPast":"掛けなかった","ta":"掛けた","potential":"掛けられる","passive":"掛けられる","causative":"掛けさせる","causativePassive":"掛けさせられる","volitional":"掛けよう","imperative":"掛けろ","prohibitive":"掛けるな","condBa":"掛ければ","condTara":"掛けたら","tai":"掛けたい","teIru":"掛けている","teKudasai":"掛けてください"}},{"key":"v:預ける","dictionary":"預ける","group":"ichidan","forms":{"dictionary":"預ける","masu":"預けます","masuNeg":"預けません","masuPast":"預けました","masuPastNeg":"預けませんでした","te":"預けて","nai":"預けない","naiPast":"預けなかった","ta":"預けた","potential":"預けられる","passive":"預けられる","causative":"預けさせる","causativePassive":"預けさせられる","volitional":"預けよう","imperative":"預けろ","prohibitive":"預けるな","condBa":"預ければ","condTara":"預けたら","tai":"預けたい","teIru":"預けている","teKudasai":"預けてください"}},{"key":"v:売れる","dictionary":"売れる","group":"ichidan","forms":{"dictionary":"売れる","masu":"売れます","masuNeg":"売れません","masuPast":"売れました","masuPastNeg":"売れませんでした","te":"売れて","nai":"売れない","naiPast":"売れなかった","ta":"売れた","potential":"売れられる","passive":"売れられる","causative":"売れさせる","causativePassive":"売れさせられる","volitional":"売れよう","imperative":"売れろ","prohibitive":"売れるな","condBa":"売れれば","condTara":"売れたら","tai":"売れたい","teIru":"売れている","teKudasai":"売れてください"}},{"key":"v:焼ける","dictionary":"焼ける","group":"ichidan","forms":{"dictionary":"焼ける","masu":"焼けます","masuNeg":"焼けません","masuPast":"焼けました","masuPastNeg":"焼けませんでした","te":"焼けて","nai":"焼けない","naiPast":"焼けなかった","ta":"焼けた","potential":"焼けられる","passive":"焼けられる","causative":"焼けさせる","causativePassive":"焼けさせられる","volitional":"焼けよう","imperative":"焼けろ","prohibitive":"焼けるな","condBa":"焼ければ","condTara":"焼けたら","tai":"焼けたい","teIru":"焼けている","teKudasai":"焼けてください"}},{"key":"v:捕まえる","dictionary":"捕まえる","group":"ichidan","forms":{"dictionary":"捕まえる","masu":"捕まえます","masuNeg":"捕まえません","masuPast":"捕まえました","masuPastNeg":"捕まえませんでした","te":"捕まえて","nai":"捕まえない","naiPast":"捕まえなかった","ta":"捕まえた","potential":"捕まえられる","passive":"捕まえられる","causative":"捕まえさせる","causativePassive":"捕まえさせられる","volitional":"捕まえよう","imperative":"捕まえろ","prohibitive":"捕まえるな","condBa":"捕まえれば","condTara":"捕まえたら","tai":"捕まえたい","teIru":"捕まえている","teKudasai":"捕まえてください"}},{"key":"v:乗せる","dictionary":"乗せる","group":"ichidan","forms":{"dictionary":"乗せる","masu":"乗せます","masuNeg":"乗せません","masuPast":"乗せました","masuPastNeg":"乗せませんでした","te":"乗せて","nai":"乗せない","naiPast":"乗せなかった","ta":"乗せた","potential":"乗せられる","passive":"乗せられる","causative":"乗せさせる","causativePassive":"乗せさせられる","volitional":"乗せよう","imperative":"乗せろ","prohibitive":"乗せるな","condBa":"乗せれば","condTara":"乗せたら","tai":"乗せたい","teIru":"乗せている","teKudasai":"乗せてください"}},{"key":"v:向ける","dictionary":"向ける","group":"ichidan","forms":{"dictionary":"向ける","masu":"向けます","masuNeg":"向けません","masuPast":"向けました","masuPastNeg":"向けませんでした","te":"向けて","nai":"向けない","naiPast":"向けなかった","ta":"向けた","potential":"向けられる","passive":"向けられる","causative":"向けさせる","causativePassive":"向けさせられる","volitional":"向けよう","imperative":"向けろ","prohibitive":"向けるな","condBa":"向ければ","condTara":"向けたら","tai":"向けたい","teIru":"向けている","teKudasai":"向けてください"}},{"key":"v:温める","dictionary":"温める","group":"ichidan","forms":{"dictionary":"温める","masu":"温めます","masuNeg":"温めません","masuPast":"温めました","masuPastNeg":"温めませんでした","te":"温めて","nai":"温めない","naiPast":"温めなかった","ta":"温めた","potential":"温められる","passive":"温められる","causative":"温めさせる","causativePassive":"温めさせられる","volitional":"温めよう","imperative":"温めろ","prohibitive":"温めるな","condBa":"温めれば","condTara":"温めたら","tai":"温めたい","teIru":"温めている","teKudasai":"温めてください"}},{"key":"v:入れる","dictionary":"入れる","group":"ichidan","forms":{"dictionary":"入れる","masu":"入れます","masuNeg":"入れません","masuPast":"入れました","masuPastNeg":"入れませんでした","te":"入れて","nai":"入れない","naiPast":"入れなかった","ta":"入れた","potential":"入れられる","passive":"入れられる","causative":"入れさせる","causativePassive":"入れさせられる","volitional":"入れよう","imperative":"入れろ","prohibitive":"入れるな","condBa":"入れれば","condTara":"入れたら","tai":"入れたい","teIru":"入れている","teKudasai":"入れてください"}},{"key":"v:濡れる","dictionary":"濡れる","group":"ichidan","forms":{"dictionary":"濡れる","masu":"濡れます","masuNeg":"濡れません","masuPast":"濡れました","masuPastNeg":"濡れませんでした","te":"濡れて","nai":"濡れない","naiPast":"濡れなかった","ta":"濡れた","potential":"濡れられる","passive":"濡れられる","causative":"濡れさせる","causativePassive":"濡れさせられる","volitional":"濡れよう","imperative":"濡れろ","prohibitive":"濡れるな","condBa":"濡れれば","condTara":"濡れたら","tai":"濡れたい","teIru":"濡れている","teKudasai":"濡れてください"}},{"key":"v:建てる","dictionary":"建てる","group":"ichidan","forms":{"dictionary":"建てる","masu":"建てます","masuNeg":"建てません","masuPast":"建てました","masuPastNeg":"建てませんでした","te":"建てて","nai":"建てない","naiPast":"建てなかった","ta":"建てた","potential":"建てられる","passive":"建てられる","causative":"建てさせる","causativePassive":"建てさせられる","volitional":"建てよう","imperative":"建てろ","prohibitive":"建てるな","condBa":"建てれば","condTara":"建てたら","tai":"建てたい","teIru":"建てている","teKudasai":"建ててください"}},{"key":"v:勤める","dictionary":"勤める","group":"ichidan","forms":{"dictionary":"勤める","masu":"勤めます","masuNeg":"勤めません","masuPast":"勤めました","masuPastNeg":"勤めませんでした","te":"勤めて","nai":"勤めない","naiPast":"勤めなかった","ta":"勤めた","potential":"勤められる","passive":"勤められる","causative":"勤めさせる","causativePassive":"勤めさせられる","volitional":"勤めよう","imperative":"勤めろ","prohibitive":"勤めるな","condBa":"勤めれば","condTara":"勤めたら","tai":"勤めたい","teIru":"勤めている","teKudasai":"勤めてください"}},{"key":"v:訪ねる","dictionary":"訪ねる","group":"ichidan","forms":{"dictionary":"訪ねる","masu":"訪ねます","masuNeg":"訪ねません","masuPast":"訪ねました","masuPastNeg":"訪ねませんでした","te":"訪ねて","nai":"訪ねない","naiPast":"訪ねなかった","ta":"訪ねた","potential":"訪ねられる","passive":"訪ねられる","causative":"訪ねさせる","causativePassive":"訪ねさせられる","volitional":"訪ねよう","imperative":"訪ねろ","prohibitive":"訪ねるな","condBa":"訪ねれば","condTara":"訪ねたら","tai":"訪ねたい","teIru":"訪ねている","teKudasai":"訪ねてください"}},{"key":"v:折れる","dictionary":"折れる","group":"ichidan","forms":{"dictionary":"折れる","masu":"折れます","masuNeg":"折れません","masuPast":"折れました","masuPastNeg":"折れませんでした","te":"折れて","nai":"折れない","naiPast":"折れなかった","ta":"折れた","potential":"折れられる","passive":"折れられる","causative":"折れさせる","causativePassive":"折れさせられる","volitional":"折れよう","imperative":"折れろ","prohibitive":"折れるな","condBa":"折れれば","condTara":"折れたら","tai":"折れたい","teIru":"折れている","teKudasai":"折れてください"}},{"key":"v:冷める","dictionary":"冷める","group":"ichidan","forms":{"dictionary":"冷める","masu":"冷めます","masuNeg":"冷めません","masuPast":"冷めました","masuPastNeg":"冷めませんでした","te":"冷めて","nai":"冷めない","naiPast":"冷めなかった","ta":"冷めた","potential":"冷められる","passive":"冷められる","causative":"冷めさせる","causativePassive":"冷めさせられる","volitional":"冷めよう","imperative":"冷めろ","prohibitive":"冷めるな","condBa":"冷めれば","condTara":"冷めたら","tai":"冷めたい","teIru":"冷めている","teKudasai":"冷めてください"}},{"key":"v:慌てる","dictionary":"慌てる","group":"ichidan","forms":{"dictionary":"慌てる","masu":"慌てます","masuNeg":"慌てません","masuPast":"慌てました","masuPastNeg":"慌てませんでした","te":"慌てて","nai":"慌てない","naiPast":"慌てなかった","ta":"慌てた","potential":"慌てられる","passive":"慌てられる","causative":"慌てさせる","causativePassive":"慌てさせられる","volitional":"慌てよう","imperative":"慌てろ","prohibitive":"慌てるな","condBa":"慌てれば","condTara":"慌てたら","tai":"慌てたい","teIru":"慌てている","teKudasai":"慌ててください"}},{"key":"v:いる","dictionary":"いる","group":"ichidan","forms":{"dictionary":"いる","masu":"います","masuNeg":"いません","masuPast":"いました","masuPastNeg":"いませんでした","te":"いて","nai":"いない","naiPast":"いなかった","ta":"いた","potential":"いられる","passive":"いられる","causative":"いさせる","causativePassive":"いさせられる","volitional":"いよう","imperative":"いろ","prohibitive":"いるな","condBa":"いれば","condTara":"いたら","tai":"いたい","teIru":"いている","teKudasai":"いてください"}},{"key":"v:くれる","dictionary":"くれる","group":"ichidan","forms":{"dictionary":"くれる","masu":"くれます","masuNeg":"くれません","masuPast":"くれました","masuPastNeg":"くれませんでした","te":"くれて","nai":"くれない","naiPast":"くれなかった","ta":"くれた","potential":"くれられる","passive":"くれられる","causative":"くれさせる","causativePassive":"くれさせられる","volitional":"くれよう","imperative":"くれろ","prohibitive":"くれるな","condBa":"くれれば","condTara":"くれたら","tai":"くれたい","teIru":"くれている","teKudasai":"くれてください"}},{"key":"v:あげる","dictionary":"あげる","group":"ichidan","forms":{"dictionary":"あげる","masu":"あげます","masuNeg":"あげません","masuPast":"あげました","masuPastNeg":"あげませんでした","te":"あげて","nai":"あげない","naiPast":"あげなかった","ta":"あげた","potential":"あげられる","passive":"あげられる","causative":"あげさせる","causativePassive":"あげさせられる","volitional":"あげよう","imperative":"あげろ","prohibitive":"あげるな","condBa":"あげれば","condTara":"あげたら","tai":"あげたい","teIru":"あげている","teKudasai":"あげてください"}},{"key":"v:付ける","dictionary":"付ける","group":"ichidan","forms":{"dictionary":"付ける","masu":"付けます","masuNeg":"付けません","masuPast":"付けました","masuPastNeg":"付けませんでした","te":"付けて","nai":"付けない","naiPast":"付けなかった","ta":"付けた","potential":"付けられる","passive":"付けられる","causative":"付けさせる","causativePassive":"付けさせられる","volitional":"付けよう","imperative":"付けろ","prohibitive":"付けるな","condBa":"付ければ","condTara":"付けたら","tai":"付けたい","teIru":"付けている","teKudasai":"付けてください"}},{"key":"v:片づける","dictionary":"片づける","group":"ichidan","forms":{"dictionary":"片づける","masu":"片づけます","masuNeg":"片づけません","masuPast":"片づけました","masuPastNeg":"片づけませんでした","te":"片づけて","nai":"片づけない","naiPast":"片づけなかった","ta":"片づけた","potential":"片づけられる","passive":"片づけられる","causative":"片づけさせる","causativePassive":"片づけさせられる","volitional":"片づけよう","imperative":"片づけろ","prohibitive":"片づけるな","condBa":"片づければ","condTara":"片づけたら","tai":"片づけたい","teIru":"片づけている","teKudasai":"片づけてください"}},{"key":"v:する","dictionary":"する","group":"irregular","forms":{"dictionary":"する","masu":"します","masuNeg":"しません","masuPast":"しました","masuPastNeg":"しませんでした","te":"して","nai":"しない","naiPast":"しなかった","ta":"した","potential":"できる","passive":"される","causative":"させる","causativePassive":"させられる","volitional":"しよう","imperative":"しろ","prohibitive":"するな","condBa":"すれば","condTara":"したら","tai":"したい","teIru":"している","teKudasai":"してください"}},{"key":"v:来る","dictionary":"来る","group":"irregular","forms":{"dictionary":"来る","masu":"来ます","masuNeg":"来ません","masuPast":"来ました","masuPastNeg":"来ませんでした","te":"来て","nai":"来ない","naiPast":"来なかった","ta":"来た","potential":"来られる","passive":"来られる","causative":"来させる","causativePassive":"来させられる","volitional":"来よう","imperative":"来い","prohibitive":"来るな","condBa":"来れば","condTara":"来たら","tai":"来たい","teIru":"来ている","teKudasai":"来てください"}},{"key":"v:運転する","dictionary":"運転する","group":"irregular","forms":{"dictionary":"運転する","masu":"運転します","masuNeg":"運転しません","masuPast":"運転しました","masuPastNeg":"運転しませんでした","te":"運転して","nai":"運転しない","naiPast":"運転しなかった","ta":"運転した","potential":"運転できる","passive":"運転される","causative":"運転させる","causativePassive":"運転させられる","volitional":"運転しよう","imperative":"運転しろ","prohibitive":"運転するな","condBa":"運転すれば","condTara":"運転したら","tai":"運転したい","teIru":"運転している","teKudasai":"運転してください"}},{"key":"v:運動する","dictionary":"運動する","group":"irregular","forms":{"dictionary":"運動する","masu":"運動します","masuNeg":"運動しません","masuPast":"運動しました","masuPastNeg":"運動しませんでした","te":"運動して","nai":"運動しない","naiPast":"運動しなかった","ta":"運動した","potential":"運動できる","passive":"運動される","causative":"運動させる","causativePassive":"運動させられる","volitional":"運動しよう","imperative":"運動しろ","prohibitive":"運動するな","condBa":"運動すれば","condTara":"運動したら","tai":"運動したい","teIru":"運動している","teKudasai":"運動してください"}},{"key":"v:説明する","dictionary":"説明する","group":"irregular","forms":{"dictionary":"説明する","masu":"説明します","masuNeg":"説明しません","masuPast":"説明しました","masuPastNeg":"説明しませんでした","te":"説明して","nai":"説明しない","naiPast":"説明しなかった","ta":"説明した","potential":"説明できる","passive":"説明される","causative":"説明させる","causativePassive":"説明させられる","volitional":"説明しよう","imperative":"説明しろ","prohibitive":"説明するな","condBa":"説明すれば","condTara":"説明したら","tai":"説明したい","teIru":"説明している","teKudasai":"説明してください"}},{"key":"v:心配する","dictionary":"心配する","group":"irregular","forms":{"dictionary":"心配する","masu":"心配します","masuNeg":"心配しません","masuPast":"心配しました","masuPastNeg":"心配しませんでした","te":"心配して","nai":"心配しない","naiPast":"心配しなかった","ta":"心配した","potential":"心配できる","passive":"心配される","causative":"心配させる","causativePassive":"心配させられる","volitional":"心配しよう","imperative":"心配しろ","prohibitive":"心配するな","condBa":"心配すれば","condTara":"心配したら","tai":"心配したい","teIru":"心配している","teKudasai":"心配してください"}},{"key":"v:準備する","dictionary":"準備する","group":"irregular","forms":{"dictionary":"準備する","masu":"準備します","masuNeg":"準備しません","masuPast":"準備しました","masuPastNeg":"準備しませんでした","te":"準備して","nai":"準備しない","naiPast":"準備しなかった","ta":"準備した","potential":"準備できる","passive":"準備される","causative":"準備させる","causativePassive":"準備させられる","volitional":"準備しよう","imperative":"準備しろ","prohibitive":"準備するな","condBa":"準備すれば","condTara":"準備したら","tai":"準備したい","teIru":"準備している","teKudasai":"準備してください"}},{"key":"v:出発する","dictionary":"出発する","group":"irregular","forms":{"dictionary":"出発する","masu":"出発します","masuNeg":"出発しません","masuPast":"出発しました","masuPastNeg":"出発しませんでした","te":"出発して","nai":"出発しない","naiPast":"出発しなかった","ta":"出発した","potential":"出発できる","passive":"出発される","causative":"出発させる","causativePassive":"出発させられる","volitional":"出発しよう","imperative":"出発しろ","prohibitive":"出発するな","condBa":"出発すれば","condTara":"出発したら","tai":"出発したい","teIru":"出発している","teKudasai":"出発してください"}},{"key":"v:紹介する","dictionary":"紹介する","group":"irregular","forms":{"dictionary":"紹介する","masu":"紹介します","masuNeg":"紹介しません","masuPast":"紹介しました","masuPastNeg":"紹介しませんでした","te":"紹介して","nai":"紹介しない","naiPast":"紹介しなかった","ta":"紹介した","potential":"紹介できる","passive":"紹介される","causative":"紹介させる","causativePassive":"紹介させられる","volitional":"紹介しよう","imperative":"紹介しろ","prohibitive":"紹介するな","condBa":"紹介すれば","condTara":"紹介したら","tai":"紹介したい","teIru":"紹介している","teKudasai":"紹介してください"}},{"key":"v:出席する","dictionary":"出席する","group":"irregular","forms":{"dictionary":"出席する","masu":"出席します","masuNeg":"出席しません","masuPast":"出席しました","masuPastNeg":"出席しませんでした","te":"出席して","nai":"出席しない","naiPast":"出席しなかった","ta":"出席した","potential":"出席できる","passive":"出席される","causative":"出席させる","causativePassive":"出席させられる","volitional":"出席しよう","imperative":"出席しろ","prohibitive":"出席するな","condBa":"出席すれば","condTara":"出席したら","tai":"出席したい","teIru":"出席している","teKudasai":"出席してください"}},{"key":"v:卒業する","dictionary":"卒業する","group":"irregular","forms":{"dictionary":"卒業する","masu":"卒業します","masuNeg":"卒業しません","masuPast":"卒業しました","masuPastNeg":"卒業しませんでした","te":"卒業して","nai":"卒業しない","naiPast":"卒業しなかった","ta":"卒業した","potential":"卒業できる","passive":"卒業される","causative":"卒業させる","causativePassive":"卒業させられる","volitional":"卒業しよう","imperative":"卒業しろ","prohibitive":"卒業するな","condBa":"卒業すれば","condTara":"卒業したら","tai":"卒業したい","teIru":"卒業している","teKudasai":"卒業してください"}},{"key":"v:注意する","dictionary":"注意する","group":"irregular","forms":{"dictionary":"注意する","masu":"注意します","masuNeg":"注意しません","masuPast":"注意しました","masuPastNeg":"注意しませんでした","te":"注意して","nai":"注意しない","naiPast":"注意しなかった","ta":"注意した","potential":"注意できる","passive":"注意される","causative":"注意させる","causativePassive":"注意させられる","volitional":"注意しよう","imperative":"注意しろ","prohibitive":"注意するな","condBa":"注意すれば","condTara":"注意したら","tai":"注意したい","teIru":"注意している","teKudasai":"注意してください"}},{"key":"v:到着する","dictionary":"到着する","group":"irregular","forms":{"dictionary":"到着する","masu":"到着します","masuNeg":"到着しません","masuPast":"到着しました","masuPastNeg":"到着しませんでした","te":"到着して","nai":"到着しない","naiPast":"到着しなかった","ta":"到着した","potential":"到着できる","passive":"到着される","causative":"到着させる","causativePassive":"到着させられる","volitional":"到着しよう","imperative":"到着しろ","prohibitive":"到着するな","condBa":"到着すれば","condTara":"到着したら","tai":"到着したい","teIru":"到着している","teKudasai":"到着してください"}},{"key":"v:入学する","dictionary":"入学する","group":"irregular","forms":{"dictionary":"入学する","masu":"入学します","masuNeg":"入学しません","masuPast":"入学しました","masuPastNeg":"入学しませんでした","te":"入学して","nai":"入学しない","naiPast":"入学しなかった","ta":"入学した","potential":"入学できる","passive":"入学される","causative":"入学させる","causativePassive":"入学させられる","volitional":"入学しよう","imperative":"入学しろ","prohibitive":"入学するな","condBa":"入学すれば","condTara":"入学したら","tai":"入学したい","teIru":"入学している","teKudasai":"入学してください"}},{"key":"v:入院する","dictionary":"入院する","group":"irregular","forms":{"dictionary":"入院する","masu":"入院します","masuNeg":"入院しません","masuPast":"入院しました","masuPastNeg":"入院しませんでした","te":"入院して","nai":"入院しない","naiPast":"入院しなかった","ta":"入院した","potential":"入院できる","passive":"入院される","causative":"入院させる","causativePassive":"入院させられる","volitional":"入院しよう","imperative":"入院しろ","prohibitive":"入院するな","condBa":"入院すれば","condTara":"入院したら","tai":"入院したい","teIru":"入院している","teKudasai":"入院してください"}},{"key":"v:退院する","dictionary":"退院する","group":"irregular","forms":{"dictionary":"退院する","masu":"退院します","masuNeg":"退院しません","masuPast":"退院しました","masuPastNeg":"退院しませんでした","te":"退院して","nai":"退院しない","naiPast":"退院しなかった","ta":"退院した","potential":"退院できる","passive":"退院される","causative":"退院させる","causativePassive":"退院させられる","volitional":"退院しよう","imperative":"退院しろ","prohibitive":"退院するな","condBa":"退院すれば","condTara":"退院したら","tai":"退院したい","teIru":"退院している","teKudasai":"退院してください"}},{"key":"v:翻訳する","dictionary":"翻訳する","group":"irregular","forms":{"dictionary":"翻訳する","masu":"翻訳します","masuNeg":"翻訳しません","masuPast":"翻訳しました","masuPastNeg":"翻訳しませんでした","te":"翻訳して","nai":"翻訳しない","naiPast":"翻訳しなかった","ta":"翻訳した","potential":"翻訳できる","passive":"翻訳される","causative":"翻訳させる","causativePassive":"翻訳させられる","volitional":"翻訳しよう","imperative":"翻訳しろ","prohibitive":"翻訳するな","condBa":"翻訳すれば","condTara":"翻訳したら","tai":"翻訳したい","teIru":"翻訳している","teKudasai":"翻訳してください"}},{"key":"v:連絡する","dictionary":"連絡する","group":"irregular","forms":{"dictionary":"連絡する","masu":"連絡します","masuNeg":"連絡しません","masuPast":"連絡しました","masuPastNeg":"連絡しませんでした","te":"連絡して","nai":"連絡しない","naiPast":"連絡しなかった","ta":"連絡した","potential":"連絡できる","passive":"連絡される","causative":"連絡させる","causativePassive":"連絡させられる","volitional":"連絡しよう","imperative":"連絡しろ","prohibitive":"連絡するな","condBa":"連絡すれば","condTara":"連絡したら","tai":"連絡したい","teIru":"連絡している","teKudasai":"連絡してください"}},{"key":"v:予約する","dictionary":"予約する","group":"irregular","forms":{"dictionary":"予約する","masu":"予約します","masuNeg":"予約しません","masuPast":"予約しました","masuPastNeg":"予約しませんでした","te":"予約して","nai":"予約しない","naiPast":"予約しなかった","ta":"予約した","potential":"予約できる","passive":"予約される","causative":"予約させる","causativePassive":"予約させられる","volitional":"予約しよう","imperative":"予約しろ","prohibitive":"予約するな","condBa":"予約すれば","condTara":"予約したら","tai":"予約したい","teIru":"予約している","teKudasai":"予約してください"}},{"key":"v:利用する","dictionary":"利用する","group":"irregular","forms":{"dictionary":"利用する","masu":"利用します","masuNeg":"利用しません","masuPast":"利用しました","masuPastNeg":"利用しませんでした","te":"利用して","nai":"利用しない","naiPast":"利用しなかった","ta":"利用した","potential":"利用できる","passive":"利用される","causative":"利用させる","causativePassive":"利用させられる","volitional":"利用しよう","imperative":"利用しろ","prohibitive":"利用するな","condBa":"利用すれば","condTara":"利用したら","tai":"利用したい","teIru":"利用している","teKudasai":"利用してください"}},{"key":"v:留学する","dictionary":"留学する","group":"irregular","forms":{"dictionary":"留学する","masu":"留学します","masuNeg":"留学しません","masuPast":"留学しました","masuPastNeg":"留学しませんでした","te":"留学して","nai":"留学しない","naiPast":"留学しなかった","ta":"留学した","potential":"留学できる","passive":"留学される","causative":"留学させる","causativePassive":"留学させられる","volitional":"留学しよう","imperative":"留学しろ","prohibitive":"留学するな","condBa":"留学すれば","condTara":"留学したら","tai":"留学したい","teIru":"留学している","teKudasai":"留学してください"}},{"key":"v:旅行する","dictionary":"旅行する","group":"irregular","forms":{"dictionary":"旅行する","masu":"旅行します","masuNeg":"旅行しません","masuPast":"旅行しました","masuPastNeg":"旅行しませんでした","te":"旅行して","nai":"旅行しない","naiPast":"旅行しなかった","ta":"旅行した","potential":"旅行できる","passive":"旅行される","causative":"旅行させる","causativePassive":"旅行させられる","volitional":"旅行しよう","imperative":"旅行しろ","prohibitive":"旅行するな","condBa":"旅行すれば","condTara":"旅行したら","tai":"旅行したい","teIru":"旅行している","teKudasai":"旅行してください"}},{"key":"v:練習する","dictionary":"練習する","group":"irregular","forms":{"dictionary":"練習する","masu":"練習します","masuNeg":"練習しません","masuPast":"練習しました","masuPastNeg":"練習しませんでした","te":"練習して","nai":"練習しない","naiPast":"練習しなかった","ta":"練習した","potential":"練習できる","passive":"練習される","causative":"練習させる","causativePassive":"練習させられる","volitional":"練習しよう","imperative":"練習しろ","prohibitive":"練習するな","condBa":"練習すれば","condTara":"練習したら","tai":"練習したい","teIru":"練習している","teKudasai":"練習してください"}},{"key":"v:相談する","dictionary":"相談する","group":"irregular","forms":{"dictionary":"相談する","masu":"相談します","masuNeg":"相談しません","masuPast":"相談しました","masuPastNeg":"相談しませんでした","te":"相談して","nai":"相談しない","naiPast":"相談しなかった","ta":"相談した","potential":"相談できる","passive":"相談される","causative":"相談させる","causativePassive":"相談させられる","volitional":"相談しよう","imperative":"相談しろ","prohibitive":"相談するな","condBa":"相談すれば","condTara":"相談したら","tai":"相談したい","teIru":"相談している","teKudasai":"相談してください"}},{"key":"v:参加する","dictionary":"参加する","group":"irregular","forms":{"dictionary":"参加する","masu":"参加します","masuNeg":"参加しません","masuPast":"参加しました","masuPastNeg":"参加しませんでした","te":"参加して","nai":"参加しない","naiPast":"参加しなかった","ta":"参加した","potential":"参加できる","passive":"参加される","causative":"参加させる","causativePassive":"参加させられる","volitional":"参加しよう","imperative":"参加しろ","prohibitive":"参加するな","condBa":"参加すれば","condTara":"参加したら","tai":"参加したい","teIru":"参加している","teKudasai":"参加してください"}},{"key":"v:賛成する","dictionary":"賛成する","group":"irregular","forms":{"dictionary":"賛成する","masu":"賛成します","masuNeg":"賛成しません","masuPast":"賛成しました","masuPastNeg":"賛成しませんでした","te":"賛成して","nai":"賛成しない","naiPast":"賛成しなかった","ta":"賛成した","potential":"賛成できる","passive":"賛成される","causative":"賛成させる","causativePassive":"賛成させられる","volitional":"賛成しよう","imperative":"賛成しろ","prohibitive":"賛成するな","condBa":"賛成すれば","condTara":"賛成したら","tai":"賛成したい","teIru":"賛成している","teKudasai":"賛成してください"}},{"key":"v:反対する","dictionary":"反対する","group":"irregular","forms":{"dictionary":"反対する","masu":"反対します","masuNeg":"反対しません","masuPast":"反対しました","masuPastNeg":"反対しませんでした","te":"反対して","nai":"反対しない","naiPast":"反対しなかった","ta":"反対した","potential":"反対できる","passive":"反対される","causative":"反対させる","causativePassive":"反対させられる","volitional":"反対しよう","imperative":"反対しろ","prohibitive":"反対するな","condBa":"反対すれば","condTara":"反対したら","tai":"反対したい","teIru":"反対している","teKudasai":"反対してください"}},{"key":"v:安心する","dictionary":"安心する","group":"irregular","forms":{"dictionary":"安心する","masu":"安心します","masuNeg":"安心しません","masuPast":"安心しました","masuPastNeg":"安心しませんでした","te":"安心して","nai":"安心しない","naiPast":"安心しなかった","ta":"安心した","potential":"安心できる","passive":"安心される","causative":"安心させる","causativePassive":"安心させられる","volitional":"安心しよう","imperative":"安心しろ","prohibitive":"安心するな","condBa":"安心すれば","condTara":"安心したら","tai":"安心したい","teIru":"安心している","teKudasai":"安心してください"}},{"key":"v:感動する","dictionary":"感動する","group":"irregular","forms":{"dictionary":"感動する","masu":"感動します","masuNeg":"感動しません","masuPast":"感動しました","masuPastNeg":"感動しませんでした","te":"感動して","nai":"感動しない","naiPast":"感動しなかった","ta":"感動した","potential":"感動できる","passive":"感動される","causative":"感動させる","causativePassive":"感動させられる","volitional":"感動しよう","imperative":"感動しろ","prohibitive":"感動するな","condBa":"感動すれば","condTara":"感動したら","tai":"感動したい","teIru":"感動している","teKudasai":"感動してください"}},{"key":"v:経験する","dictionary":"経験する","group":"irregular","forms":{"dictionary":"経験する","masu":"経験します","masuNeg":"経験しません","masuPast":"経験しました","masuPastNeg":"経験しませんでした","te":"経験して","nai":"経験しない","naiPast":"経験しなかった","ta":"経験した","potential":"経験できる","passive":"経験される","causative":"経験させる","causativePassive":"経験させられる","volitional":"経験しよう","imperative":"経験しろ","prohibitive":"経験するな","condBa":"経験すれば","condTara":"経験したら","tai":"経験したい","teIru":"経験している","teKudasai":"経験してください"}},{"key":"v:研究する","dictionary":"研究する","group":"irregular","forms":{"dictionary":"研究する","masu":"研究します","masuNeg":"研究しません","masuPast":"研究しました","masuPastNeg":"研究しませんでした","te":"研究して","nai":"研究しない","naiPast":"研究しなかった","ta":"研究した","potential":"研究できる","passive":"研究される","causative":"研究させる","causativePassive":"研究させられる","volitional":"研究しよう","imperative":"研究しろ","prohibitive":"研究するな","condBa":"研究すれば","condTara":"研究したら","tai":"研究したい","teIru":"研究している","teKudasai":"研究してください"}},{"key":"v:故障する","dictionary":"故障する","group":"irregular","forms":{"dictionary":"故障する","masu":"故障します","masuNeg":"故障しません","masuPast":"故障しました","masuPastNeg":"故障しませんでした","te":"故障して","nai":"故障しない","naiPast":"故障しなかった","ta":"故障した","potential":"故障できる","passive":"故障される","causative":"故障させる","causativePassive":"故障させられる","volitional":"故障しよう","imperative":"故障しろ","prohibitive":"故障するな","condBa":"故障すれば","condTara":"故障したら","tai":"故障したい","teIru":"故障している","teKudasai":"故障してください"}},{"key":"v:生活する","dictionary":"生活する","group":"irregular","forms":{"dictionary":"生活する","masu":"生活します","masuNeg":"生活しません","masuPast":"生活しました","masuPastNeg":"生活しませんでした","te":"生活して","nai":"生活しない","naiPast":"生活しなかった","ta":"生活した","potential":"生活できる","passive":"生活される","causative":"生活させる","causativePassive":"生活させられる","volitional":"生活しよう","imperative":"生活しろ","prohibitive":"生活するな","condBa":"生活すれば","condTara":"生活したら","tai":"生活したい","teIru":"生活している","teKudasai":"生活してください"}},{"key":"v:成功する","dictionary":"成功する","group":"irregular","forms":{"dictionary":"成功する","masu":"成功します","masuNeg":"成功しません","masuPast":"成功しました","masuPastNeg":"成功しませんでした","te":"成功して","nai":"成功しない","naiPast":"成功しなかった","ta":"成功した","potential":"成功できる","passive":"成功される","causative":"成功させる","causativePassive":"成功させられる","volitional":"成功しよう","imperative":"成功しろ","prohibitive":"成功するな","condBa":"成功すれば","condTara":"成功したら","tai":"成功したい","teIru":"成功している","teKudasai":"成功してください"}},{"key":"v:世話する","dictionary":"世話する","group":"irregular","forms":{"dictionary":"世話する","masu":"世話します","masuNeg":"世話しません","masuPast":"世話しました","masuPastNeg":"世話しませんでした","te":"世話して","nai":"世話しない","naiPast":"世話しなかった","ta":"世話した","potential":"世話できる","passive":"世話される","causative":"世話させる","causativePassive":"世話させられる","volitional":"世話しよう","imperative":"世話しろ","prohibitive":"世話するな","condBa":"世話すれば","condTara":"世話したら","tai":"世話したい","teIru":"世話している","teKudasai":"世話してください"}},{"key":"v:生産する","dictionary":"生産する","group":"irregular","forms":{"dictionary":"生産する","masu":"生産します","masuNeg":"生産しません","masuPast":"生産しました","masuPastNeg":"生産しませんでした","te":"生産して","nai":"生産しない","naiPast":"生産しなかった","ta":"生産した","potential":"生産できる","passive":"生産される","causative":"生産させる","causativePassive":"生産させられる","volitional":"生産しよう","imperative":"生産しろ","prohibitive":"生産するな","condBa":"生産すれば","condTara":"生産したら","tai":"生産したい","teIru":"生産している","teKudasai":"生産してください"}},{"key":"v:掃除する","dictionary":"掃除する","group":"irregular","forms":{"dictionary":"掃除する","masu":"掃除します","masuNeg":"掃除しません","masuPast":"掃除しました","masuPastNeg":"掃除しませんでした","te":"掃除して","nai":"掃除しない","naiPast":"掃除しなかった","ta":"掃除した","potential":"掃除できる","passive":"掃除される","causative":"掃除させる","causativePassive":"掃除させられる","volitional":"掃除しよう","imperative":"掃除しろ","prohibitive":"掃除するな","condBa":"掃除すれば","condTara":"掃除したら","tai":"掃除したい","teIru":"掃除している","teKudasai":"掃除してください"}},{"key":"v:洗濯する","dictionary":"洗濯する","group":"irregular","forms":{"dictionary":"洗濯する","masu":"洗濯します","masuNeg":"洗濯しません","masuPast":"洗濯しました","masuPastNeg":"洗濯しませんでした","te":"洗濯して","nai":"洗濯しない","naiPast":"洗濯しなかった","ta":"洗濯した","potential":"洗濯できる","passive":"洗濯される","causative":"洗濯させる","causativePassive":"洗濯させられる","volitional":"洗濯しよう","imperative":"洗濯しろ","prohibitive":"洗濯するな","condBa":"洗濯すれば","condTara":"洗濯したら","tai":"洗濯したい","teIru":"洗濯している","teKudasai":"洗濯してください"}},{"key":"v:散歩する","dictionary":"散歩する","group":"irregular","forms":{"dictionary":"散歩する","masu":"散歩します","masuNeg":"散歩しません","masuPast":"散歩しました","masuPastNeg":"散歩しませんでした","te":"散歩して","nai":"散歩しない","naiPast":"散歩しなかった","ta":"散歩した","potential":"散歩できる","passive":"散歩される","causative":"散歩させる","causativePassive":"散歩させられる","volitional":"散歩しよう","imperative":"散歩しろ","prohibitive":"散歩するな","condBa":"散歩すれば","condTara":"散歩したら","tai":"散歩したい","teIru":"散歩している","teKudasai":"散歩してください"}},{"key":"v:食事する","dictionary":"食事する","group":"irregular","forms":{"dictionary":"食事する","masu":"食事します","masuNeg":"食事しません","masuPast":"食事しました","masuPastNeg":"食事しませんでした","te":"食事して","nai":"食事しない","naiPast":"食事しなかった","ta":"食事した","potential":"食事できる","passive":"食事される","causative":"食事させる","causativePassive":"食事させられる","volitional":"食事しよう","imperative":"食事しろ","prohibitive":"食事するな","condBa":"食事すれば","condTara":"食事したら","tai":"食事したい","teIru":"食事している","teKudasai":"食事してください"}},{"key":"v:電話する","dictionary":"電話する","group":"irregular","forms":{"dictionary":"電話する","masu":"電話します","masuNeg":"電話しません","masuPast":"電話しました","masuPastNeg":"電話しませんでした","te":"電話して","nai":"電話しない","naiPast":"電話しなかった","ta":"電話した","potential":"電話できる","passive":"電話される","causative":"電話させる","causativePassive":"電話させられる","volitional":"電話しよう","imperative":"電話しろ","prohibitive":"電話するな","condBa":"電話すれば","condTara":"電話したら","tai":"電話したい","teIru":"電話している","teKudasai":"電話してください"}},{"key":"v:約束する","dictionary":"約束する","group":"irregular","forms":{"dictionary":"約束する","masu":"約束します","masuNeg":"約束しません","masuPast":"約束しました","masuPastNeg":"約束しませんでした","te":"約束して","nai":"約束しない","naiPast":"約束しなかった","ta":"約束した","potential":"約束できる","passive":"約束される","causative":"約束させる","causativePassive":"約束させられる","volitional":"約束しよう","imperative":"約束しろ","prohibitive":"約束するな","condBa":"約束すれば","condTara":"約束したら","tai":"約束したい","teIru":"約束している","teKudasai":"約束してください"}},{"key":"v:輸入する","dictionary":"輸入する","group":"irregular","forms":{"dictionary":"輸入する","masu":"輸入します","masuNeg":"輸入しません","masuPast":"輸入しました","masuPastNeg":"輸入しませんでした","te":"輸入して","nai":"輸入しない","naiPast":"輸入しなかった","ta":"輸入した","potential":"輸入できる","passive":"輸入される","causative":"輸入させる","causativePassive":"輸入させられる","volitional":"輸入しよう","imperative":"輸入しろ","prohibitive":"輸入するな","condBa":"輸入すれば","condTara":"輸入したら","tai":"輸入したい","teIru":"輸入している","teKudasai":"輸入してください"}},{"key":"v:輸出する","dictionary":"輸出する","group":"irregular","forms":{"dictionary":"輸出する","masu":"輸出します","masuNeg":"輸出しません","masuPast":"輸出しました","masuPastNeg":"輸出しませんでした","te":"輸出して","nai":"輸出しない","naiPast":"輸出しなかった","ta":"輸出した","potential":"輸出できる","passive":"輸出される","causative":"輸出させる","causativePassive":"輸出させられる","volitional":"輸出しよう","imperative":"輸出しろ","prohibitive":"輸出するな","condBa":"輸出すれば","condTara":"輸出したら","tai":"輸出したい","teIru":"輸出している","teKudasai":"輸出してください"}},{"key":"v:注文する","dictionary":"注文する","group":"irregular","forms":{"dictionary":"注文する","masu":"注文します","masuNeg":"注文しません","masuPast":"注文しました","masuPastNeg":"注文しませんでした","te":"注文して","nai":"注文しない","naiPast":"注文しなかった","ta":"注文した","potential":"注文できる","passive":"注文される","causative":"注文させる","causativePassive":"注文させられる","volitional":"注文しよう","imperative":"注文しろ","prohibitive":"注文するな","condBa":"注文すれば","condTara":"注文したら","tai":"注文したい","teIru":"注文している","teKudasai":"注文してください"}},{"key":"v:案内する","dictionary":"案内する","group":"irregular","forms":{"dictionary":"案内する","masu":"案内します","masuNeg":"案内しません","masuPast":"案内しました","masuPastNeg":"案内しませんでした","te":"案内して","nai":"案内しない","naiPast":"案内しなかった","ta":"案内した","potential":"案内できる","passive":"案内される","causative":"案内させる","causativePassive":"案内させられる","volitional":"案内しよう","imperative":"案内しろ","prohibitive":"案内するな","condBa":"案内すれば","condTara":"案内したら","tai":"案内したい","teIru":"案内している","teKudasai":"案内してください"}},{"key":"v:報告する","dictionary":"報告する","group":"irregular","forms":{"dictionary":"報告する","masu":"報告します","masuNeg":"報告しません","masuPast":"報告しました","masuPastNeg":"報告しませんでした","te":"報告して","nai":"報告しない","naiPast":"報告しなかった","ta":"報告した","potential":"報告できる","passive":"報告される","causative":"報告させる","causativePassive":"報告させられる","volitional":"報告しよう","imperative":"報告しろ","prohibitive":"報告するな","condBa":"報告すれば","condTara":"報告したら","tai":"報告したい","teIru":"報告している","teKudasai":"報告してください"}},{"key":"v:用意する","dictionary":"用意する","group":"irregular","forms":{"dictionary":"用意する","masu":"用意します","masuNeg":"用意しません","masuPast":"用意しました","masuPastNeg":"用意しませんでした","te":"用意して","nai":"用意しない","naiPast":"用意しなかった","ta":"用意した","potential":"用意できる","passive":"用意される","causative":"用意させる","causativePassive":"用意させられる","volitional":"用意しよう","imperative":"用意しろ","prohibitive":"用意するな","condBa":"用意すれば","condTara":"用意したら","tai":"用意したい","teIru":"用意している","teKudasai":"用意してください"}},{"key":"v:計画する","dictionary":"計画する","group":"irregular","forms":{"dictionary":"計画する","masu":"計画します","masuNeg":"計画しません","masuPast":"計画しました","masuPastNeg":"計画しませんでした","te":"計画して","nai":"計画しない","naiPast":"計画しなかった","ta":"計画した","potential":"計画できる","passive":"計画される","causative":"計画させる","causativePassive":"計画させられる","volitional":"計画しよう","imperative":"計画しろ","prohibitive":"計画するな","condBa":"計画すれば","condTara":"計画したら","tai":"計画したい","teIru":"計画している","teKudasai":"計画してください"}},{"key":"v:発見する","dictionary":"発見する","group":"irregular","forms":{"dictionary":"発見する","masu":"発見します","masuNeg":"発見しません","masuPast":"発見しました","masuPastNeg":"発見しませんでした","te":"発見して","nai":"発見しない","naiPast":"発見しなかった","ta":"発見した","potential":"発見できる","passive":"発見される","causative":"発見させる","causativePassive":"発見させられる","volitional":"発見しよう","imperative":"発見しろ","prohibitive":"発見するな","condBa":"発見すれば","condTara":"発見したら","tai":"発見したい","teIru":"発見している","teKudasai":"発見してください"}},{"key":"v:変更する","dictionary":"変更する","group":"irregular","forms":{"dictionary":"変更する","masu":"変更します","masuNeg":"変更しません","masuPast":"変更しました","masuPastNeg":"変更しませんでした","te":"変更して","nai":"変更しない","naiPast":"変更しなかった","ta":"変更した","potential":"変更できる","passive":"変更される","causative":"変更させる","causativePassive":"変更させられる","volitional":"変更しよう","imperative":"変更しろ","prohibitive":"変更するな","condBa":"変更すれば","condTara":"変更したら","tai":"変更したい","teIru":"変更している","teKudasai":"変更してください"}},{"key":"v:確認する","dictionary":"確認する","group":"irregular","forms":{"dictionary":"確認する","masu":"確認します","masuNeg":"確認しません","masuPast":"確認しました","masuPastNeg":"確認しませんでした","te":"確認して","nai":"確認しない","naiPast":"確認しなかった","ta":"確認した","potential":"確認できる","passive":"確認される","causative":"確認させる","causativePassive":"確認させられる","volitional":"確認しよう","imperative":"確認しろ","prohibitive":"確認するな","condBa":"確認すれば","condTara":"確認したら","tai":"確認したい","teIru":"確認している","teKudasai":"確認してください"}},{"key":"v:遅刻する","dictionary":"遅刻する","group":"irregular","forms":{"dictionary":"遅刻する","masu":"遅刻します","masuNeg":"遅刻しません","masuPast":"遅刻しました","masuPastNeg":"遅刻しませんでした","te":"遅刻して","nai":"遅刻しない","naiPast":"遅刻しなかった","ta":"遅刻した","potential":"遅刻できる","passive":"遅刻される","causative":"遅刻させる","causativePassive":"遅刻させられる","volitional":"遅刻しよう","imperative":"遅刻しろ","prohibitive":"遅刻するな","condBa":"遅刻すれば","condTara":"遅刻したら","tai":"遅刻したい","teIru":"遅刻している","teKudasai":"遅刻してください"}},{"key":"v:帰国する","dictionary":"帰国する","group":"irregular","forms":{"dictionary":"帰国する","masu":"帰国します","masuNeg":"帰国しません","masuPast":"帰国しました","masuPastNeg":"帰国しませんでした","te":"帰国して","nai":"帰国しない","naiPast":"帰国しなかった","ta":"帰国した","potential":"帰国できる","passive":"帰国される","causative":"帰国させる","causativePassive":"帰国させられる","volitional":"帰国しよう","imperative":"帰国しろ","prohibitive":"帰国するな","condBa":"帰国すれば","condTara":"帰国したら","tai":"帰国したい","teIru":"帰国している","teKudasai":"帰国してください"}},{"key":"v:交換する","dictionary":"交換する","group":"irregular","forms":{"dictionary":"交換する","masu":"交換します","masuNeg":"交換しません","masuPast":"交換しました","masuPastNeg":"交換しませんでした","te":"交換して","nai":"交換しない","naiPast":"交換しなかった","ta":"交換した","potential":"交換できる","passive":"交換される","causative":"交換させる","causativePassive":"交換させられる","volitional":"交換しよう","imperative":"交換しろ","prohibitive":"交換するな","condBa":"交換すれば","condTara":"交換したら","tai":"交換したい","teIru":"交換している","teKudasai":"交換してください"}},{"key":"v:見学する","dictionary":"見学する","group":"irregular","forms":{"dictionary":"見学する","masu":"見学します","masuNeg":"見学しません","masuPast":"見学しました","masuPastNeg":"見学しませんでした","te":"見学して","nai":"見学しない","naiPast":"見学しなかった","ta":"見学した","potential":"見学できる","passive":"見学される","causative":"見学させる","causativePassive":"見学させられる","volitional":"見学しよう","imperative":"見学しろ","prohibitive":"見学するな","condBa":"見学すれば","condTara":"見学したら","tai":"見学したい","teIru":"見学している","teKudasai":"見学してください"}},{"key":"v:就職する","dictionary":"就職する","group":"irregular","forms":{"dictionary":"就職する","masu":"就職します","masuNeg":"就職しません","masuPast":"就職しました","masuPastNeg":"就職しませんでした","te":"就職して","nai":"就職しない","naiPast":"就職しなかった","ta":"就職した","potential":"就職できる","passive":"就職される","causative":"就職させる","causativePassive":"就職させられる","volitional":"就職しよう","imperative":"就職しろ","prohibitive":"就職するな","condBa":"就職すれば","condTara":"就職したら","tai":"就職したい","teIru":"就職している","teKudasai":"就職してください"}},{"key":"v:質問する","dictionary":"質問する","group":"irregular","forms":{"dictionary":"質問する","masu":"質問します","masuNeg":"質問しません","masuPast":"質問しました","masuPastNeg":"質問しませんでした","te":"質問して","nai":"質問しない","naiPast":"質問しなかった","ta":"質問した","potential":"質問できる","passive":"質問される","causative":"質問させる","causativePassive":"質問させられる","volitional":"質問しよう","imperative":"質問しろ","prohibitive":"質問するな","condBa":"質問すれば","condTara":"質問したら","tai":"質問したい","teIru":"質問している","teKudasai":"質問してください"}},{"key":"v:予習する","dictionary":"予習する","group":"irregular","forms":{"dictionary":"予習する","masu":"予習します","masuNeg":"予習しません","masuPast":"予習しました","masuPastNeg":"予習しませんでした","te":"予習して","nai":"予習しない","naiPast":"予習しなかった","ta":"予習した","potential":"予習できる","passive":"予習される","causative":"予習させる","causativePassive":"予習させられる","volitional":"予習しよう","imperative":"予習しろ","prohibitive":"予習するな","condBa":"予習すれば","condTara":"予習したら","tai":"予習したい","teIru":"予習している","teKudasai":"予習してください"}},{"key":"v:復習する","dictionary":"復習する","group":"irregular","forms":{"dictionary":"復習する","masu":"復習します","masuNeg":"復習しません","masuPast":"復習しました","masuPastNeg":"復習しませんでした","te":"復習して","nai":"復習しない","naiPast":"復習しなかった","ta":"復習した","potential":"復習できる","passive":"復習される","causative":"復習させる","causativePassive":"復習させられる","volitional":"復習しよう","imperative":"復習しろ","prohibitive":"復習するな","condBa":"復習すれば","condTara":"復習したら","tai":"復習したい","teIru":"復習している","teKudasai":"復習してください"}},{"key":"v:失敗する","dictionary":"失敗する","group":"irregular","forms":{"dictionary":"失敗する","masu":"失敗します","masuNeg":"失敗しません","masuPast":"失敗しました","masuPastNeg":"失敗しませんでした","te":"失敗して","nai":"失敗しない","naiPast":"失敗しなかった","ta":"失敗した","potential":"失敗できる","passive":"失敗される","causative":"失敗させる","causativePassive":"失敗させられる","volitional":"失敗しよう","imperative":"失敗しろ","prohibitive":"失敗するな","condBa":"失敗すれば","condTara":"失敗したら","tai":"失敗したい","teIru":"失敗している","teKudasai":"失敗してください"}},{"key":"v:合格する","dictionary":"合格する","group":"irregular","forms":{"dictionary":"合格する","masu":"合格します","masuNeg":"合格しません","masuPast":"合格しました","masuPastNeg":"合格しませんでした","te":"合格して","nai":"合格しない","naiPast":"合格しなかった","ta":"合格した","potential":"合格できる","passive":"合格される","causative":"合格させる","causativePassive":"合格させられる","volitional":"合格しよう","imperative":"合格しろ","prohibitive":"合格するな","condBa":"合格すれば","condTara":"合格したら","tai":"合格したい","teIru":"合格している","teKudasai":"合格してください"}},{"key":"v:我慢する","dictionary":"我慢する","group":"irregular","forms":{"dictionary":"我慢する","masu":"我慢します","masuNeg":"我慢しません","masuPast":"我慢しました","masuPastNeg":"我慢しませんでした","te":"我慢して","nai":"我慢しない","naiPast":"我慢しなかった","ta":"我慢した","potential":"我慢できる","passive":"我慢される","causative":"我慢させる","causativePassive":"我慢させられる","volitional":"我慢しよう","imperative":"我慢しろ","prohibitive":"我慢するな","condBa":"我慢すれば","condTara":"我慢したら","tai":"我慢したい","teIru":"我慢している","teKudasai":"我慢してください"}},{"key":"v:中止する","dictionary":"中止する","group":"irregular","forms":{"dictionary":"中止する","masu":"中止します","masuNeg":"中止しません","masuPast":"中止しました","masuPastNeg":"中止しませんでした","te":"中止して","nai":"中止しない","naiPast":"中止しなかった","ta":"中止した","potential":"中止できる","passive":"中止される","causative":"中止させる","causativePassive":"中止させられる","volitional":"中止しよう","imperative":"中止しろ","prohibitive":"中止するな","condBa":"中止すれば","condTara":"中止したら","tai":"中止したい","teIru":"中止している","teKudasai":"中止してください"}},{"key":"v:欠席する","dictionary":"欠席する","group":"irregular","forms":{"dictionary":"欠席する","masu":"欠席します","masuNeg":"欠席しません","masuPast":"欠席しました","masuPastNeg":"欠席しませんでした","te":"欠席して","nai":"欠席しない","naiPast":"欠席しなかった","ta":"欠席した","potential":"欠席できる","passive":"欠席される","causative":"欠席させる","causativePassive":"欠席させられる","volitional":"欠席しよう","imperative":"欠席しろ","prohibitive":"欠席するな","condBa":"欠席すれば","condTara":"欠席したら","tai":"欠席したい","teIru":"欠席している","teKudasai":"欠席してください"}},{"key":"v:提出する","dictionary":"提出する","group":"irregular","forms":{"dictionary":"提出する","masu":"提出します","masuNeg":"提出しません","masuPast":"提出しました","masuPastNeg":"提出しませんでした","te":"提出して","nai":"提出しない","naiPast":"提出しなかった","ta":"提出した","potential":"提出できる","passive":"提出される","causative":"提出させる","causativePassive":"提出させられる","volitional":"提出しよう","imperative":"提出しろ","prohibitive":"提出するな","condBa":"提出すれば","condTara":"提出したら","tai":"提出したい","teIru":"提出している","teKudasai":"提出してください"}},{"key":"v:申し込む","dictionary":"申し込む","group":"godan","forms":{"dictionary":"申し込む","masu":"申し込みます","masuNeg":"申し込みません","masuPast":"申し込みました","masuPastNeg":"申し込みませんでした","te":"申し込んで","nai":"申し込まない","naiPast":"申し込まなかった","ta":"申し込んだ","potential":"申し込める","passive":"申し込まれる","causative":"申し込ませる","causativePassive":"申し込ませられる","volitional":"申し込もう","imperative":"申し込め","prohibitive":"申し込むな","condBa":"申し込めば","condTara":"申し込んだら","tai":"申し込みたい","teIru":"申し込んでいる","teKudasai":"申し込んでください"}},{"key":"v:結婚する","dictionary":"結婚する","group":"irregular","forms":{"dictionary":"結婚する","masu":"結婚します","masuNeg":"結婚しません","masuPast":"結婚しました","masuPastNeg":"結婚しませんでした","te":"結婚して","nai":"結婚しない","naiPast":"結婚しなかった","ta":"結婚した","potential":"結婚できる","passive":"結婚される","causative":"結婚させる","causativePassive":"結婚させられる","volitional":"結婚しよう","imperative":"結婚しろ","prohibitive":"結婚するな","condBa":"結婚すれば","condTara":"結婚したら","tai":"結婚したい","teIru":"結婚している","teKudasai":"結婚してください"}},{"key":"v:修理する","dictionary":"修理する","group":"irregular","forms":{"dictionary":"修理する","masu":"修理します","masuNeg":"修理しません","masuPast":"修理しました","masuPastNeg":"修理しませんでした","te":"修理して","nai":"修理しない","naiPast":"修理しなかった","ta":"修理した","potential":"修理できる","passive":"修理される","causative":"修理させる","causativePassive":"修理させられる","volitional":"修理しよう","imperative":"修理しろ","prohibitive":"修理するな","condBa":"修理すれば","condTara":"修理したら","tai":"修理したい","teIru":"修理している","teKudasai":"修理してください"}},{"key":"v:緊張する","dictionary":"緊張する","group":"irregular","forms":{"dictionary":"緊張する","masu":"緊張します","masuNeg":"緊張しません","masuPast":"緊張しました","masuPastNeg":"緊張しませんでした","te":"緊張して","nai":"緊張しない","naiPast":"緊張しなかった","ta":"緊張した","potential":"緊張できる","passive":"緊張される","causative":"緊張させる","causativePassive":"緊張させられる","volitional":"緊張しよう","imperative":"緊張しろ","prohibitive":"緊張するな","condBa":"緊張すれば","condTara":"緊張したら","tai":"緊張したい","teIru":"緊張している","teKudasai":"緊張してください"}},{"key":"v:料理する","dictionary":"料理する","group":"irregular","forms":{"dictionary":"料理する","masu":"料理します","masuNeg":"料理しません","masuPast":"料理しました","masuPastNeg":"料理しませんでした","te":"料理して","nai":"料理しない","naiPast":"料理しなかった","ta":"料理した","potential":"料理できる","passive":"料理される","causative":"料理させる","causativePassive":"料理させられる","volitional":"料理しよう","imperative":"料理しろ","prohibitive":"料理するな","condBa":"料理すれば","condTara":"料理したら","tai":"料理したい","teIru":"料理している","teKudasai":"料理してください"}},{"key":"v:返事する","dictionary":"返事する","group":"irregular","forms":{"dictionary":"返事する","masu":"返事します","masuNeg":"返事しません","masuPast":"返事しました","masuPastNeg":"返事しませんでした","te":"返事して","nai":"返事しない","naiPast":"返事しなかった","ta":"返事した","potential":"返事できる","passive":"返事される","causative":"返事させる","causativePassive":"返事させられる","volitional":"返事しよう","imperative":"返事しろ","prohibitive":"返事するな","condBa":"返事すれば","condTara":"返事したら","tai":"返事したい","teIru":"返事している","teKudasai":"返事してください"}},{"key":"v:乾杯する","dictionary":"乾杯する","group":"irregular","forms":{"dictionary":"乾杯する","masu":"乾杯します","masuNeg":"乾杯しません","masuPast":"乾杯しました","masuPastNeg":"乾杯しませんでした","te":"乾杯して","nai":"乾杯しない","naiPast":"乾杯しなかった","ta":"乾杯した","potential":"乾杯できる","passive":"乾杯される","causative":"乾杯させる","causativePassive":"乾杯させられる","volitional":"乾杯しよう","imperative":"乾杯しろ","prohibitive":"乾杯するな","condBa":"乾杯すれば","condTara":"乾杯したら","tai":"乾杯したい","teIru":"乾杯している","teKudasai":"乾杯してください"}},{"key":"v:びっくりする","dictionary":"びっくりする","group":"irregular","forms":{"dictionary":"びっくりする","masu":"びっくりします","masuNeg":"びっくりしません","masuPast":"びっくりしました","masuPastNeg":"びっくりしませんでした","te":"びっくりして","nai":"びっくりしない","naiPast":"びっくりしなかった","ta":"びっくりした","potential":"びっくりできる","passive":"びっくりされる","causative":"びっくりさせる","causativePassive":"びっくりさせられる","volitional":"びっくりしよう","imperative":"びっくりしろ","prohibitive":"びっくりするな","condBa":"びっくりすれば","condTara":"びっくりしたら","tai":"びっくりしたい","teIru":"びっくりしている","teKudasai":"びっくりしてください"}},{"key":"v:喧嘩する","dictionary":"喧嘩する","group":"irregular","forms":{"dictionary":"喧嘩する","masu":"喧嘩します","masuNeg":"喧嘩しません","masuPast":"喧嘩しました","masuPastNeg":"喧嘩しませんでした","te":"喧嘩して","nai":"喧嘩しない","naiPast":"喧嘩しなかった","ta":"喧嘩した","potential":"喧嘩できる","passive":"喧嘩される","causative":"喧嘩させる","causativePassive":"喧嘩させられる","volitional":"喧嘩しよう","imperative":"喧嘩しろ","prohibitive":"喧嘩するな","condBa":"喧嘩すれば","condTara":"喧嘩したら","tai":"喧嘩したい","teIru":"喧嘩している","teKudasai":"喧嘩してください"}},{"key":"v:いらっしゃる","dictionary":"いらっしゃる","group":"godan","forms":{"dictionary":"いらっしゃる","masu":"いらっしゃいます","masuNeg":"いらっしゃいません","masuPast":"いらっしゃいました","masuPastNeg":"いらっしゃいませんでした","te":"いらっしゃって","nai":"いらっしゃらない","naiPast":"いらっしゃらなかった","ta":"いらっしゃった","potential":"いらっしゃれる","passive":"いらっしゃられる","causative":"いらっしゃらせる","causativePassive":"いらっしゃらせられる","volitional":"いらっしゃろう","imperative":"いらっしゃれ","prohibitive":"いらっしゃるな","condBa":"いらっしゃれば","condTara":"いらっしゃったら","tai":"いらっしゃりたい","teIru":"いらっしゃっている","teKudasai":"いらっしゃってください"}},{"key":"v:おっしゃる","dictionary":"おっしゃる","group":"godan","forms":{"dictionary":"おっしゃる","masu":"おっしゃいます","masuNeg":"おっしゃいません","masuPast":"おっしゃいました","masuPastNeg":"おっしゃいませんでした","te":"おっしゃって","nai":"おっしゃらない","naiPast":"おっしゃらなかった","ta":"おっしゃった","potential":"おっしゃれる","passive":"おっしゃられる","causative":"おっしゃらせる","causativePassive":"おっしゃらせられる","volitional":"おっしゃろう","imperative":"おっしゃれ","prohibitive":"おっしゃるな","condBa":"おっしゃれば","condTara":"おっしゃったら","tai":"おっしゃりたい","teIru":"おっしゃっている","teKudasai":"おっしゃってください"}},{"key":"v:召し上がる","dictionary":"召し上がる","group":"godan","forms":{"dictionary":"召し上がる","masu":"召し上がります","masuNeg":"召し上がりません","masuPast":"召し上がりました","masuPastNeg":"召し上がりませんでした","te":"召し上がって","nai":"召し上がらない","naiPast":"召し上がらなかった","ta":"召し上がった","potential":"召し上がれる","passive":"召し上がられる","causative":"召し上がらせる","causativePassive":"召し上がらせられる","volitional":"召し上がろう","imperative":"召し上がれ","prohibitive":"召し上がるな","condBa":"召し上がれば","condTara":"召し上がったら","tai":"召し上がりたい","teIru":"召し上がっている","teKudasai":"召し上がってください"}},{"key":"v:ご覧になる","dictionary":"ご覧になる","group":"godan","forms":{"dictionary":"ご覧になる","masu":"ご覧になります","masuNeg":"ご覧になりません","masuPast":"ご覧になりました","masuPastNeg":"ご覧になりませんでした","te":"ご覧になって","nai":"ご覧にならない","naiPast":"ご覧にならなかった","ta":"ご覧になった","potential":"ご覧になれる","passive":"ご覧になられる","causative":"ご覧にならせる","causativePassive":"ご覧にならせられる","volitional":"ご覧になろう","imperative":"ご覧になれ","prohibitive":"ご覧になるな","condBa":"ご覧になれば","condTara":"ご覧になったら","tai":"ご覧になりたい","teIru":"ご覧になっている","teKudasai":"ご覧になってください"}},{"key":"v:参る","dictionary":"参る","group":"godan","forms":{"dictionary":"参る","masu":"参ります","masuNeg":"参りません","masuPast":"参りました","masuPastNeg":"参りませんでした","te":"参って","nai":"参らない","naiPast":"参らなかった","ta":"参った","potential":"参れる","passive":"参られる","causative":"参らせる","causativePassive":"参らせられる","volitional":"参ろう","imperative":"参れ","prohibitive":"参るな","condBa":"参れば","condTara":"参ったら","tai":"参りたい","teIru":"参っている","teKudasai":"参ってください"}},{"key":"v:申す","dictionary":"申す","group":"godan","forms":{"dictionary":"申す","masu":"申します","masuNeg":"申しません","masuPast":"申しました","masuPastNeg":"申しませんでした","te":"申して","nai":"申さない","naiPast":"申さなかった","ta":"申した","potential":"申せる","passive":"申される","causative":"申させる","causativePassive":"申させられる","volitional":"申そう","imperative":"申せ","prohibitive":"申すな","condBa":"申せば","condTara":"申したら","tai":"申したい","teIru":"申している","teKudasai":"申してください"}},{"key":"v:おる","dictionary":"おる","group":"godan","forms":{"dictionary":"おる","masu":"おります","masuNeg":"おりません","masuPast":"おりました","masuPastNeg":"おりませんでした","te":"おって","nai":"おらない","naiPast":"おらなかった","ta":"おった","potential":"おれる","passive":"おられる","causative":"おらせる","causativePassive":"おらせられる","volitional":"おろう","imperative":"おれ","prohibitive":"おるな","condBa":"おれば","condTara":"おったら","tai":"おりたい","teIru":"おっている","teKudasai":"おってください"}},{"key":"v:いたす","dictionary":"いたす","group":"godan","forms":{"dictionary":"いたす","masu":"いたします","masuNeg":"いたしません","masuPast":"いたしました","masuPastNeg":"いたしませんでした","te":"いたして","nai":"いたさない","naiPast":"いたさなかった","ta":"いたした","potential":"いたせる","passive":"いたされる","causative":"いたさせる","causativePassive":"いたさせられる","volitional":"いたそう","imperative":"いたせ","prohibitive":"いたすな","condBa":"いたせば","condTara":"いたしたら","tai":"いたしたい","teIru":"いたしている","teKudasai":"いたしてください"}},{"key":"v:存じる","dictionary":"存じる","group":"ichidan","forms":{"dictionary":"存じる","masu":"存じます","masuNeg":"存じません","masuPast":"存じました","masuPastNeg":"存じませんでした","te":"存じて","nai":"存じない","naiPast":"存じなかった","ta":"存じた","potential":"存じられる","passive":"存じられる","causative":"存じさせる","causativePassive":"存じさせられる","volitional":"存じよう","imperative":"存じろ","prohibitive":"存じるな","condBa":"存じれば","condTara":"存じたら","tai":"存じたい","teIru":"存じている","teKudasai":"存じてください"}},{"key":"v:開く (あく)","dictionary":"開く","group":"godan","forms":{"dictionary":"開く","masu":"開きます","masuNeg":"開きません","masuPast":"開きました","masuPastNeg":"開きませんでした","te":"開いて","nai":"開かない","naiPast":"開かなかった","ta":"開いた","potential":"開ける","passive":"開かれる","causative":"開かせる","causativePassive":"開かせられる","volitional":"開こう","imperative":"開け","prohibitive":"開くな","condBa":"開けば","condTara":"開いたら","tai":"開きたい","teIru":"開いている","teKudasai":"開いてください"}},{"key":"v:閉まる (しまる)","dictionary":"閉まる","group":"godan","forms":{"dictionary":"閉まる","masu":"閉まります","masuNeg":"閉まりません","masuPast":"閉まりました","masuPastNeg":"閉まりませんでした","te":"閉まって","nai":"閉まらない","naiPast":"閉まらなかった","ta":"閉まった","potential":"閉まれる","passive":"閉まられる","causative":"閉まらせる","causativePassive":"閉まらせられる","volitional":"閉まろう","imperative":"閉まれ","prohibitive":"閉まるな","condBa":"閉まれば","condTara":"閉まったら","tai":"閉まりたい","teIru":"閉まっている","teKudasai":"閉まってください"}},{"key":"v:入る (はいる)","dictionary":"入る","group":"godan","forms":{"dictionary":"入る","masu":"入ります","masuNeg":"入りません","masuPast":"入りました","masuPastNeg":"入りませんでした","te":"入って","nai":"入らない","naiPast":"入らなかった","ta":"入った","potential":"入れる","passive":"入られる","causative":"入らせる","causativePassive":"入らせられる","volitional":"入ろう","imperative":"入れ","prohibitive":"入るな","condBa":"入れば","condTara":"入ったら","tai":"入りたい","teIru":"入っている","teKudasai":"入ってください"}},{"key":"v:出る (でる)","dictionary":"出る","group":"godan","forms":{"dictionary":"出る","masu":"出ります","masuNeg":"出りません","masuPast":"出りました","masuPastNeg":"出りませんでした","te":"出って","nai":"出らない","naiPast":"出らなかった","ta":"出った","potential":"出れる","passive":"出られる","causative":"出らせる","causativePassive":"出らせられる","volitional":"出ろう","imperative":"出れ","prohibitive":"出るな","condBa":"出れば","condTara":"出ったら","tai":"出りたい","teIru":"出っている","teKudasai":"出ってください"}},{"key":"v:つく","dictionary":"つく","group":"godan","forms":{"dictionary":"つく","masu":"つきます","masuNeg":"つきません","masuPast":"つきました","masuPastNeg":"つきませんでした","te":"ついて","nai":"つかない","naiPast":"つかなかった","ta":"ついた","potential":"つける","passive":"つかれる","causative":"つかせる","causativePassive":"つかせられる","volitional":"つこう","imperative":"つけ","prohibitive":"つくな","condBa":"つけば","condTara":"ついたら","tai":"つきたい","teIru":"ついている","teKudasai":"ついてください"}},{"key":"v:消える (きえる)","dictionary":"消える","group":"ichidan","forms":{"dictionary":"消える","masu":"消えます","masuNeg":"消えません","masuPast":"消えました","masuPastNeg":"消えませんでした","te":"消えて","nai":"消えない","naiPast":"消えなかった","ta":"消えた","potential":"消えられる","passive":"消えられる","causative":"消えさせる","causativePassive":"消えさせられる","volitional":"消えよう","imperative":"消えろ","prohibitive":"消えるな","condBa":"消えれば","condTara":"消えたら","tai":"消えたい","teIru":"消えている","teKudasai":"消えてください"}},{"key":"v:壊れる (こわれる)","dictionary":"壊れる","group":"ichidan","forms":{"dictionary":"壊れる","masu":"壊れます","masuNeg":"壊れません","masuPast":"壊れました","masuPastNeg":"壊れませんでした","te":"壊れて","nai":"壊れない","naiPast":"壊れなかった","ta":"壊れた","potential":"壊れられる","passive":"壊れられる","causative":"壊れさせる","causativePassive":"壊れさせられる","volitional":"壊れよう","imperative":"壊れろ","prohibitive":"壊れるな","condBa":"壊れれば","condTara":"壊れたら","tai":"壊れたい","teIru":"壊れている","teKudasai":"壊れてください"}},{"key":"v:割れる (われる)","dictionary":"割れる","group":"ichidan","forms":{"dictionary":"割れる","masu":"割れます","masuNeg":"割れません","masuPast":"割れました","masuPastNeg":"割れませんでした","te":"割れて","nai":"割れない","naiPast":"割れなかった","ta":"割れた","potential":"割れられる","passive":"割れられる","causative":"割れさせる","causativePassive":"割れさせられる","volitional":"割れよう","imperative":"割れろ","prohibitive":"割れるな","condBa":"割れれば","condTara":"割れたら","tai":"割れたい","teIru":"割れている","teKudasai":"割れてください"}},{"key":"v:落ちる (おちる)","dictionary":"落ちる","group":"ichidan","forms":{"dictionary":"落ちる","masu":"落ちます","masuNeg":"落ちません","masuPast":"落ちました","masuPastNeg":"落ちませんでした","te":"落ちて","nai":"落ちない","naiPast":"落ちなかった","ta":"落ちた","potential":"落ちられる","passive":"落ちられる","causative":"落ちさせる","causativePassive":"落ちさせられる","volitional":"落ちよう","imperative":"落ちろ","prohibitive":"落ちるな","condBa":"落ちれば","condTara":"落ちたら","tai":"落ちたい","teIru":"落ちている","teKudasai":"落ちてください"}},{"key":"v:起きる (おきる)","dictionary":"起きる","group":"ichidan","forms":{"dictionary":"起きる","masu":"起きます","masuNeg":"起きません","masuPast":"起きました","masuPastNeg":"起きませんでした","te":"起きて","nai":"起きない","naiPast":"起きなかった","ta":"起きた","potential":"起きられる","passive":"起きられる","causative":"起きさせる","causativePassive":"起きさせられる","volitional":"起きよう","imperative":"起きろ","prohibitive":"起きるな","condBa":"起きれば","condTara":"起きたら","tai":"起きたい","teIru":"起きている","teKudasai":"起きてください"}},{"key":"v:始まる (はじまる)","dictionary":"始まる","group":"godan","forms":{"dictionary":"始まる","masu":"始まります","masuNeg":"始まりません","masuPast":"始まりました","masuPastNeg":"始まりませんでした","te":"始まって","nai":"始まらない","naiPast":"始まらなかった","ta":"始まった","potential":"始まれる","passive":"始まられる","causative":"始まらせる","causativePassive":"始まらせられる","volitional":"始まろう","imperative":"始まれ","prohibitive":"始まるな","condBa":"始まれば","condTara":"始まったら","tai":"始まりたい","teIru":"始まっている","teKudasai":"始まってください"}},{"key":"v:止まる (とまる)","dictionary":"止まる","group":"godan","forms":{"dictionary":"止まる","masu":"止まります","masuNeg":"止まりません","masuPast":"止まりました","masuPastNeg":"止まりませんでした","te":"止まって","nai":"止まらない","naiPast":"止まらなかった","ta":"止まった","potential":"止まれる","passive":"止まられる","causative":"止まらせる","causativePassive":"止まらせられる","volitional":"止まろう","imperative":"止まれ","prohibitive":"止まるな","condBa":"止まれば","condTara":"止まったら","tai":"止まりたい","teIru":"止まっている","teKudasai":"止まってください"}},{"key":"v:動く (うごく)","dictionary":"動く","group":"godan","forms":{"dictionary":"動く","masu":"動きます","masuNeg":"動きません","masuPast":"動きました","masuPastNeg":"動きませんでした","te":"動いて","nai":"動かない","naiPast":"動かなかった","ta":"動いた","potential":"動ける","passive":"動かれる","causative":"動かせる","causativePassive":"動かせられる","volitional":"動こう","imperative":"動け","prohibitive":"動くな","condBa":"動けば","condTara":"動いたら","tai":"動きたい","teIru":"動いている","teKudasai":"動いてください"}},{"key":"v:乗る (のる)","dictionary":"乗る","group":"godan","forms":{"dictionary":"乗る","masu":"乗ります","masuNeg":"乗りません","masuPast":"乗りました","masuPastNeg":"乗りませんでした","te":"乗って","nai":"乗らない","naiPast":"乗らなかった","ta":"乗った","potential":"乗れる","passive":"乗られる","causative":"乗らせる","causativePassive":"乗らせられる","volitional":"乗ろう","imperative":"乗れ","prohibitive":"乗るな","condBa":"乗れば","condTara":"乗ったら","tai":"乗りたい","teIru":"乗っている","teKudasai":"乗ってください"}},{"key":"v:並ぶ (ならぶ)","dictionary":"並ぶ","group":"godan","forms":{"dictionary":"並ぶ","masu":"並びます","masuNeg":"並びません","masuPast":"並びました","masuPastNeg":"並びませんでした","te":"並んで","nai":"並ばない","naiPast":"並ばなかった","ta":"並んだ","potential":"並べる","passive":"並ばれる","causative":"並ばせる","causativePassive":"並ばせられる","volitional":"並ぼう","imperative":"並べ","prohibitive":"並ぶな","condBa":"並べば","condTara":"並んだら","tai":"並びたい","teIru":"並んでいる","teKudasai":"並んでください"}},{"key":"v:集まる (あつまる)","dictionary":"集まる","group":"godan","forms":{"dictionary":"集まる","masu":"集まります","masuNeg":"集まりません","masuPast":"集まりました","masuPastNeg":"集まりませんでした","te":"集まって","nai":"集まらない","naiPast":"集まらなかった","ta":"集まった","potential":"集まれる","passive":"集まられる","causative":"集まらせる","causativePassive":"集まらせられる","volitional":"集まろう","imperative":"集まれ","prohibitive":"集まるな","condBa":"集まれば","condTara":"集まったら","tai":"集まりたい","teIru":"集まっている","teKudasai":"集まってください"}},{"key":"v:見つかる (みつかる)","dictionary":"見つかる","group":"godan","forms":{"dictionary":"見つかる","masu":"見つかります","masuNeg":"見つかりません","masuPast":"見つかりました","masuPastNeg":"見つかりませんでした","te":"見つかって","nai":"見つからない","naiPast":"見つからなかった","ta":"見つかった","potential":"見つかれる","passive":"見つかられる","causative":"見つからせる","causativePassive":"見つからせられる","volitional":"見つかろう","imperative":"見つかれ","prohibitive":"見つかるな","condBa":"見つかれば","condTara":"見つかったら","tai":"見つかりたい","teIru":"見つかっている","teKudasai":"見つかってください"}},{"key":"v:変わる (かわる)","dictionary":"変わる","group":"godan","forms":{"dictionary":"変わる","masu":"変わります","masuNeg":"変わりません","masuPast":"変わりました","masuPastNeg":"変わりませんでした","te":"変わって","nai":"変わらない","naiPast":"変わらなかった","ta":"変わった","potential":"変われる","passive":"変わられる","causative":"変わらせる","causativePassive":"変わらせられる","volitional":"変わろう","imperative":"変われ","prohibitive":"変わるな","condBa":"変われば","condTara":"変わったら","tai":"変わりたい","teIru":"変わっている","teKudasai":"変わってください"}},{"key":"v:決まる (きまる)","dictionary":"決まる","group":"godan","forms":{"dictionary":"決まる","masu":"決まります","masuNeg":"決まりません","masuPast":"決まりました","masuPastNeg":"決まりませんでした","te":"決まって","nai":"決まらない","naiPast":"決まらなかった","ta":"決まった","potential":"決まれる","passive":"決まられる","causative":"決まらせる","causativePassive":"決まらせられる","volitional":"決まろう","imperative":"決まれ","prohibitive":"決まるな","condBa":"決まれば","condTara":"決まったら","tai":"決まりたい","teIru":"決まっている","teKudasai":"決まってください"}},{"key":"v:汚れる (よごれる)","dictionary":"汚れる","group":"ichidan","forms":{"dictionary":"汚れる","masu":"汚れます","masuNeg":"汚れません","masuPast":"汚れました","masuPastNeg":"汚れませんでした","te":"汚れて","nai":"汚れない","naiPast":"汚れなかった","ta":"汚れた","potential":"汚れられる","passive":"汚れられる","causative":"汚れさせる","causativePassive":"汚れさせられる","volitional":"汚れよう","imperative":"汚れろ","prohibitive":"汚れるな","condBa":"汚れれば","condTara":"汚れたら","tai":"汚れたい","teIru":"汚れている","teKudasai":"汚れてください"}},{"key":"v:折れる (おれる)","dictionary":"折れる","group":"ichidan","forms":{"dictionary":"折れる","masu":"折れます","masuNeg":"折れません","masuPast":"折れました","masuPastNeg":"折れませんでした","te":"折れて","nai":"折れない","naiPast":"折れなかった","ta":"折れた","potential":"折れられる","passive":"折れられる","causative":"折れさせる","causativePassive":"折れさせられる","volitional":"折れよう","imperative":"折れろ","prohibitive":"折れるな","condBa":"折れれば","condTara":"折れたら","tai":"折れたい","teIru":"折れている","teKudasai":"折れてください"}},{"key":"v:焼ける (やける)","dictionary":"焼ける","group":"ichidan","forms":{"dictionary":"焼ける","masu":"焼けます","masuNeg":"焼けません","masuPast":"焼けました","masuPastNeg":"焼けませんでした","te":"焼けて","nai":"焼けない","naiPast":"焼けなかった","ta":"焼けた","potential":"焼けられる","passive":"焼けられる","causative":"焼けさせる","causativePassive":"焼けさせられる","volitional":"焼けよう","imperative":"焼けろ","prohibitive":"焼けるな","condBa":"焼ければ","condTara":"焼けたら","tai":"焼けたい","teIru":"焼けている","teKudasai":"焼けてください"}},{"key":"v:冷める (さめる)","dictionary":"冷める","group":"ichidan","forms":{"dictionary":"冷める","masu":"冷めます","masuNeg":"冷めません","masuPast":"冷めました","masuPastNeg":"冷めませんでした","te":"冷めて","nai":"冷めない","naiPast":"冷めなかった","ta":"冷めた","potential":"冷められる","passive":"冷められる","causative":"冷めさせる","causativePassive":"冷めさせられる","volitional":"冷めよう","imperative":"冷めろ","prohibitive":"冷めるな","condBa":"冷めれば","condTara":"冷めたら","tai":"冷めたい","teIru":"冷めている","teKudasai":"冷めてください"}},{"key":"v:増える (ふえる)","dictionary":"増える","group":"ichidan","forms":{"dictionary":"増える","masu":"増えます","masuNeg":"増えません","masuPast":"増えました","masuPastNeg":"増えませんでした","te":"増えて","nai":"増えない","naiPast":"増えなかった","ta":"増えた","potential":"増えられる","passive":"増えられる","causative":"増えさせる","causativePassive":"増えさせられる","volitional":"増えよう","imperative":"増えろ","prohibitive":"増えるな","condBa":"増えれば","condTara":"増えたら","tai":"増えたい","teIru":"増えている","teKudasai":"増えてください"}},{"key":"v:減る (へる)","dictionary":"減る","group":"godan","forms":{"dictionary":"減る","masu":"減ります","masuNeg":"減りません","masuPast":"減りました","masuPastNeg":"減りませんでした","te":"減って","nai":"減らない","naiPast":"減らなかった","ta":"減った","potential":"減れる","passive":"減られる","causative":"減らせる","causativePassive":"減らせられる","volitional":"減ろう","imperative":"減れ","prohibitive":"減るな","condBa":"減れば","condTara":"減ったら","tai":"減りたい","teIru":"減っている","teKudasai":"減ってください"}},{"key":"v:いす","dictionary":"いす","group":"godan","forms":{"dictionary":"いす","masu":"いします","masuNeg":"いしません","masuPast":"いしました","masuPastNeg":"いしませんでした","te":"いして","nai":"いさない","naiPast":"いさなかった","ta":"いした","potential":"いせる","passive":"いされる","causative":"いさせる","causativePassive":"いさせられる","volitional":"いそう","imperative":"いせ","prohibitive":"いすな","condBa":"いせば","condTara":"いしたら","tai":"いしたい","teIru":"いしている","teKudasai":"いしてください"}},{"key":"v:起きます","dictionary":"起く","group":"godan","forms":{"dictionary":"起く","masu":"起きます","masuNeg":"起きません","masuPast":"起きました","masuPastNeg":"起きませんでした","te":"起いて","nai":"起かない","naiPast":"起かなかった","ta":"起いた","potential":"起ける","passive":"起かれる","causative":"起かせる","causativePassive":"起かせられる","volitional":"起こう","imperative":"起け","prohibitive":"起くな","condBa":"起けば","condTara":"起いたら","tai":"起きたい","teIru":"起いている","teKudasai":"起いてください"}},{"key":"v:寝ます","dictionary":"寝る","group":"ichidan","forms":{"dictionary":"寝る","masu":"寝ます","masuNeg":"寝ません","masuPast":"寝ました","masuPastNeg":"寝ませんでした","te":"寝て","nai":"寝ない","naiPast":"寝なかった","ta":"寝た","potential":"寝られる","passive":"寝られる","causative":"寝させる","causativePassive":"寝させられる","volitional":"寝よう","imperative":"寝ろ","prohibitive":"寝るな","condBa":"寝れば","condTara":"寝たら","tai":"寝たい","teIru":"寝ている","teKudasai":"寝てください"}},{"key":"v:働きます","dictionary":"働く","group":"godan","forms":{"dictionary":"働く","masu":"働きます","masuNeg":"働きません","masuPast":"働きました","masuPastNeg":"働きませんでした","te":"働いて","nai":"働かない","naiPast":"働かなかった","ta":"働いた","potential":"働ける","passive":"働かれる","causative":"働かせる","causativePassive":"働かせられる","volitional":"働こう","imperative":"働け","prohibitive":"働くな","condBa":"働けば","condTara":"働いたら","tai":"働きたい","teIru":"働いている","teKudasai":"働いてください"}},{"key":"v:休みます","dictionary":"休む","group":"godan","forms":{"dictionary":"休む","masu":"休みます","masuNeg":"休みません","masuPast":"休みました","masuPastNeg":"休みませんでした","te":"休んで","nai":"休まない","naiPast":"休まなかった","ta":"休んだ","potential":"休める","passive":"休まれる","causative":"休ませる","causativePassive":"休ませられる","volitional":"休もう","imperative":"休め","prohibitive":"休むな","condBa":"休めば","condTara":"休んだら","tai":"休みたい","teIru":"休んでいる","teKudasai":"休んでください"}},{"key":"v:勉強します","dictionary":"勉強する","group":"irregular","forms":{"dictionary":"勉強する","masu":"勉強します","masuNeg":"勉強しません","masuPast":"勉強しました","masuPastNeg":"勉強しませんでした","te":"勉強して","nai":"勉強しない","naiPast":"勉強しなかった","ta":"勉強した","potential":"勉強できる","passive":"勉強される","causative":"勉強させる","causativePassive":"勉強させられる","volitional":"勉強しよう","imperative":"勉強しろ","prohibitive":"勉強するな","condBa":"勉強すれば","condTara":"勉強したら","tai":"勉強したい","teIru":"勉強している","teKudasai":"勉強してください"}},{"key":"v:終わります","dictionary":"終わる","group":"godan","forms":{"dictionary":"終わる","masu":"終わります","masuNeg":"終わりません","masuPast":"終わりました","masuPastNeg":"終わりませんでした","te":"終わって","nai":"終わらない","naiPast":"終わらなかった","ta":"終わった","potential":"終われる","passive":"終わられる","causative":"終わらせる","causativePassive":"終わらせられる","volitional":"終わろう","imperative":"終われ","prohibitive":"終わるな","condBa":"終われば","condTara":"終わったら","tai":"終わりたい","teIru":"終わっている","teKudasai":"終わってください"}},{"key":"v:きのう","dictionary":"きのう","group":"godan","forms":{"dictionary":"きのう","masu":"きのいます","masuNeg":"きのいません","masuPast":"きのいました","masuPastNeg":"きのいませんでした","te":"きのって","nai":"きのわない","naiPast":"きのわなかった","ta":"きのった","potential":"きのえる","passive":"きのわれる","causative":"きのわせる","causativePassive":"きのわせられる","volitional":"きのおう","imperative":"きのえ","prohibitive":"きのうな","condBa":"きのえば","condTara":"きのったら","tai":"きのいたい","teIru":"きのっている","teKudasai":"きのってください"}},{"key":"v:きょう","dictionary":"きょう","group":"godan","forms":{"dictionary":"きょう","masu":"きょいます","masuNeg":"きょいません","masuPast":"きょいました","masuPastNeg":"きょいませんでした","te":"きょって","nai":"きょわない","naiPast":"きょわなかった","ta":"きょった","potential":"きょえる","passive":"きょわれる","causative":"きょわせる","causativePassive":"きょわせられる","volitional":"きょおう","imperative":"きょえ","prohibitive":"きょうな","condBa":"きょえば","condTara":"きょったら","tai":"きょいたい","teIru":"きょっている","teKudasai":"きょってください"}},{"key":"v:行きます","dictionary":"行く","group":"godan","forms":{"dictionary":"行く","masu":"行きます","masuNeg":"行きません","masuPast":"行きました","masuPastNeg":"行きませんでした","te":"行いて","nai":"行かない","naiPast":"行かなかった","ta":"行いた","potential":"行ける","passive":"行かれる","causative":"行かせる","causativePassive":"行かせられる","volitional":"行こう","imperative":"行け","prohibitive":"行くな","condBa":"行けば","condTara":"行いたら","tai":"行きたい","teIru":"行いている","teKudasai":"行いてください"}},{"key":"v:来ます","dictionary":"来る","group":"irregular","forms":{"dictionary":"来る","masu":"来ます","masuNeg":"来ません","masuPast":"来ました","masuPastNeg":"来ませんでした","te":"来て","nai":"来ない","naiPast":"来なかった","ta":"来た","potential":"来られる","passive":"来られる","causative":"来させる","causativePassive":"来させられる","volitional":"来よう","imperative":"来い","prohibitive":"来るな","condBa":"来れば","condTara":"来たら","tai":"来たい","teIru":"来ている","teKudasai":"来てください"}},{"key":"v:帰ります","dictionary":"帰る","group":"godan","forms":{"dictionary":"帰る","masu":"帰ります","masuNeg":"帰りません","masuPast":"帰りました","masuPastNeg":"帰りませんでした","te":"帰って","nai":"帰らない","naiPast":"帰らなかった","ta":"帰った","potential":"帰れる","passive":"帰られる","causative":"帰らせる","causativePassive":"帰らせられる","volitional":"帰ろう","imperative":"帰れ","prohibitive":"帰るな","condBa":"帰れば","condTara":"帰ったら","tai":"帰りたい","teIru":"帰っている","teKudasai":"帰ってください"}},{"key":"v:食べます","dictionary":"食べる","group":"ichidan","forms":{"dictionary":"食べる","masu":"食べます","masuNeg":"食べません","masuPast":"食べました","masuPastNeg":"食べませんでした","te":"食べて","nai":"食べない","naiPast":"食べなかった","ta":"食べた","potential":"食べられる","passive":"食べられる","causative":"食べさせる","causativePassive":"食べさせられる","volitional":"食べよう","imperative":"食べろ","prohibitive":"食べるな","condBa":"食べれば","condTara":"食べたら","tai":"食べたい","teIru":"食べている","teKudasai":"食べてください"}},{"key":"v:飲みます","dictionary":"飲む","group":"godan","forms":{"dictionary":"飲む","masu":"飲みます","masuNeg":"飲みません","masuPast":"飲みました","masuPastNeg":"飲みませんでした","te":"飲んで","nai":"飲まない","naiPast":"飲まなかった","ta":"飲んだ","potential":"飲める","passive":"飲まれる","causative":"飲ませる","causativePassive":"飲ませられる","volitional":"飲もう","imperative":"飲め","prohibitive":"飲むな","condBa":"飲めば","condTara":"飲んだら","tai":"飲みたい","teIru":"飲んでいる","teKudasai":"飲んでください"}},{"key":"v:吸います","dictionary":"吸う","group":"godan","forms":{"dictionary":"吸う","masu":"吸います","masuNeg":"吸いません","masuPast":"吸いました","masuPastNeg":"吸いませんでした","te":"吸って","nai":"吸わない","naiPast":"吸わなかった","ta":"吸った","potential":"吸える","passive":"吸われる","causative":"吸わせる","causativePassive":"吸わせられる","volitional":"吸おう","imperative":"吸え","prohibitive":"吸うな","condBa":"吸えば","condTara":"吸ったら","tai":"吸いたい","teIru":"吸っている","teKudasai":"吸ってください"}},{"key":"v:見ます","dictionary":"見る","group":"godan","forms":{"dictionary":"見る","masu":"見ります","masuNeg":"見りません","masuPast":"見りました","masuPastNeg":"見りませんでした","te":"見って","nai":"見らない","naiPast":"見らなかった","ta":"見った","potential":"見れる","passive":"見られる","causative":"見らせる","causativePassive":"見らせられる","volitional":"見ろう","imperative":"見れ","prohibitive":"見るな","condBa":"見れば","condTara":"見ったら","tai":"見りたい","teIru":"見っている","teKudasai":"見ってください"}},{"key":"v:聞きます","dictionary":"聞く","group":"godan","forms":{"dictionary":"聞く","masu":"聞きます","masuNeg":"聞きません","masuPast":"聞きました","masuPastNeg":"聞きませんでした","te":"聞いて","nai":"聞かない","naiPast":"聞かなかった","ta":"聞いた","potential":"聞ける","passive":"聞かれる","causative":"聞かせる","causativePassive":"聞かせられる","volitional":"聞こう","imperative":"聞け","prohibitive":"聞くな","condBa":"聞けば","condTara":"聞いたら","tai":"聞きたい","teIru":"聞いている","teKudasai":"聞いてください"}},{"key":"v:読みます","dictionary":"読む","group":"godan","forms":{"dictionary":"読む","masu":"読みます","masuNeg":"読みません","masuPast":"読みました","masuPastNeg":"読みませんでした","te":"読んで","nai":"読まない","naiPast":"読まなかった","ta":"読んだ","potential":"読める","passive":"読まれる","causative":"読ませる","causativePassive":"読ませられる","volitional":"読もう","imperative":"読め","prohibitive":"読むな","condBa":"読めば","condTara":"読んだら","tai":"読みたい","teIru":"読んでいる","teKudasai":"読んでください"}},{"key":"v:書きます","dictionary":"書く","group":"godan","forms":{"dictionary":"書く","masu":"書きます","masuNeg":"書きません","masuPast":"書きました","masuPastNeg":"書きませんでした","te":"書いて","nai":"書かない","naiPast":"書かなかった","ta":"書いた","potential":"書ける","passive":"書かれる","causative":"書かせる","causativePassive":"書かせられる","volitional":"書こう","imperative":"書け","prohibitive":"書くな","condBa":"書けば","condTara":"書いたら","tai":"書きたい","teIru":"書いている","teKudasai":"書いてください"}},{"key":"v:買います","dictionary":"買う","group":"godan","forms":{"dictionary":"買う","masu":"買います","masuNeg":"買いません","masuPast":"買いました","masuPastNeg":"買いませんでした","te":"買って","nai":"買わない","naiPast":"買わなかった","ta":"買った","potential":"買える","passive":"買われる","causative":"買わせる","causativePassive":"買わせられる","volitional":"買おう","imperative":"買え","prohibitive":"買うな","condBa":"買えば","condTara":"買ったら","tai":"買いたい","teIru":"買っている","teKudasai":"買ってください"}},{"key":"v:撮ります","dictionary":"撮る","group":"godan","forms":{"dictionary":"撮る","masu":"撮ります","masuNeg":"撮りません","masuPast":"撮りました","masuPastNeg":"撮りませんでした","te":"撮って","nai":"撮らない","naiPast":"撮らなかった","ta":"撮った","potential":"撮れる","passive":"撮られる","causative":"撮らせる","causativePassive":"撮らせられる","volitional":"撮ろう","imperative":"撮れ","prohibitive":"撮るな","condBa":"撮れば","condTara":"撮ったら","tai":"撮りたい","teIru":"撮っている","teKudasai":"撮ってください"}},{"key":"v:します","dictionary":"する","group":"irregular","forms":{"dictionary":"する","masu":"します","masuNeg":"しません","masuPast":"しました","masuPastNeg":"しませんでした","te":"して","nai":"しない","naiPast":"しなかった","ta":"した","potential":"できる","passive":"される","causative":"させる","causativePassive":"させられる","volitional":"しよう","imperative":"しろ","prohibitive":"するな","condBa":"すれば","condTara":"したら","tai":"したい","teIru":"している","teKudasai":"してください"}},{"key":"v:会います","dictionary":"会う","group":"godan","forms":{"dictionary":"会う","masu":"会います","masuNeg":"会いません","masuPast":"会いました","masuPastNeg":"会いませんでした","te":"会って","nai":"会わない","naiPast":"会わなかった","ta":"会った","potential":"会える","passive":"会われる","causative":"会わせる","causativePassive":"会わせられる","volitional":"会おう","imperative":"会え","prohibitive":"会うな","condBa":"会えば","condTara":"会ったら","tai":"会いたい","teIru":"会っている","teKudasai":"会ってください"}},{"key":"v:切ります","dictionary":"切る","group":"godan","forms":{"dictionary":"切る","masu":"切ります","masuNeg":"切りません","masuPast":"切りました","masuPastNeg":"切りませんでした","te":"切って","nai":"切らない","naiPast":"切らなかった","ta":"切った","potential":"切れる","passive":"切られる","causative":"切らせる","causativePassive":"切らせられる","volitional":"切ろう","imperative":"切れ","prohibitive":"切るな","condBa":"切れば","condTara":"切ったら","tai":"切りたい","teIru":"切っている","teKudasai":"切ってください"}},{"key":"v:送ります","dictionary":"送る","group":"godan","forms":{"dictionary":"送る","masu":"送ります","masuNeg":"送りません","masuPast":"送りました","masuPastNeg":"送りませんでした","te":"送って","nai":"送らない","naiPast":"送らなかった","ta":"送った","potential":"送れる","passive":"送られる","causative":"送らせる","causativePassive":"送らせられる","volitional":"送ろう","imperative":"送れ","prohibitive":"送るな","condBa":"送れば","condTara":"送ったら","tai":"送りたい","teIru":"送っている","teKudasai":"送ってください"}},{"key":"v:あげます","dictionary":"あげる","group":"ichidan","forms":{"dictionary":"あげる","masu":"あげます","masuNeg":"あげません","masuPast":"あげました","masuPastNeg":"あげませんでした","te":"あげて","nai":"あげない","naiPast":"あげなかった","ta":"あげた","potential":"あげられる","passive":"あげられる","causative":"あげさせる","causativePassive":"あげさせられる","volitional":"あげよう","imperative":"あげろ","prohibitive":"あげるな","condBa":"あげれば","condTara":"あげたら","tai":"あげたい","teIru":"あげている","teKudasai":"あげてください"}},{"key":"v:もらいます","dictionary":"もらう","group":"godan","forms":{"dictionary":"もらう","masu":"もらいます","masuNeg":"もらいません","masuPast":"もらいました","masuPastNeg":"もらいませんでした","te":"もらって","nai":"もらわない","naiPast":"もらわなかった","ta":"もらった","potential":"もらえる","passive":"もらわれる","causative":"もらわせる","causativePassive":"もらわせられる","volitional":"もらおう","imperative":"もらえ","prohibitive":"もらうな","condBa":"もらえば","condTara":"もらったら","tai":"もらいたい","teIru":"もらっている","teKudasai":"もらってください"}},{"key":"v:貸します","dictionary":"貸す","group":"godan","forms":{"dictionary":"貸す","masu":"貸します","masuNeg":"貸しません","masuPast":"貸しました","masuPastNeg":"貸しませんでした","te":"貸して","nai":"貸さない","naiPast":"貸さなかった","ta":"貸した","potential":"貸せる","passive":"貸される","causative":"貸させる","causativePassive":"貸させられる","volitional":"貸そう","imperative":"貸せ","prohibitive":"貸すな","condBa":"貸せば","condTara":"貸したら","tai":"貸したい","teIru":"貸している","teKudasai":"貸してください"}},{"key":"v:借ります","dictionary":"借る","group":"godan","forms":{"dictionary":"借る","masu":"借ります","masuNeg":"借りません","masuPast":"借りました","masuPastNeg":"借りませんでした","te":"借って","nai":"借らない","naiPast":"借らなかった","ta":"借った","potential":"借れる","passive":"借られる","causative":"借らせる","causativePassive":"借らせられる","volitional":"借ろう","imperative":"借れ","prohibitive":"借るな","condBa":"借れば","condTara":"借ったら","tai":"借りたい","teIru":"借っている","teKudasai":"借ってください"}},{"key":"v:教えます","dictionary":"教える","group":"ichidan","forms":{"dictionary":"教える","masu":"教えます","masuNeg":"教えません","masuPast":"教えました","masuPastNeg":"教えませんでした","te":"教えて","nai":"教えない","naiPast":"教えなかった","ta":"教えた","potential":"教えられる","passive":"教えられる","causative":"教えさせる","causativePassive":"教えさせられる","volitional":"教えよう","imperative":"教えろ","prohibitive":"教えるな","condBa":"教えれば","condTara":"教えたら","tai":"教えたい","teIru":"教えている","teKudasai":"教えてください"}},{"key":"v:習います","dictionary":"習う","group":"godan","forms":{"dictionary":"習う","masu":"習います","masuNeg":"習いません","masuPast":"習いました","masuPastNeg":"習いませんでした","te":"習って","nai":"習わない","naiPast":"習わなかった","ta":"習った","potential":"習える","passive":"習われる","causative":"習わせる","causativePassive":"習わせられる","volitional":"習おう","imperative":"習え","prohibitive":"習うな","condBa":"習えば","condTara":"習ったら","tai":"習いたい","teIru":"習っている","teKudasai":"習ってください"}},{"key":"v:失礼します","dictionary":"失礼する","group":"irregular","forms":{"dictionary":"失礼する","masu":"失礼します","masuNeg":"失礼しません","masuPast":"失礼しました","masuPastNeg":"失礼しませんでした","te":"失礼して","nai":"失礼しない","naiPast":"失礼しなかった","ta":"失礼した","potential":"失礼できる","passive":"失礼される","causative":"失礼させる","causativePassive":"失礼させられる","volitional":"失礼しよう","imperative":"失礼しろ","prohibitive":"失礼するな","condBa":"失礼すれば","condTara":"失礼したら","tai":"失礼したい","teIru":"失礼している","teKudasai":"失礼してください"}},{"key":"v:わかります","dictionary":"わかる","group":"godan","forms":{"dictionary":"わかる","masu":"わかります","masuNeg":"わかりません","masuPast":"わかりました","masuPastNeg":"わかりませんでした","te":"わかって","nai":"わからない","naiPast":"わからなかった","ta":"わかった","potential":"わかれる","passive":"わかられる","causative":"わからせる","causativePassive":"わからせられる","volitional":"わかろう","imperative":"わかれ","prohibitive":"わかるな","condBa":"わかれば","condTara":"わかったら","tai":"わかりたい","teIru":"わかっている","teKudasai":"わかってください"}},{"key":"v:あります","dictionary":"ある","group":"godan","forms":{"dictionary":"ある","masu":"あります","masuNeg":"ありません","masuPast":"ありました","masuPastNeg":"ありませんでした","te":"あって","nai":"あらない","naiPast":"あらなかった","ta":"あった","potential":"あれる","passive":"あられる","causative":"あらせる","causativePassive":"あらせられる","volitional":"あろう","imperative":"あれ","prohibitive":"あるな","condBa":"あれば","condTara":"あったら","tai":"ありたい","teIru":"あっている","teKudasai":"あってください"}},{"key":"v:います","dictionary":"いる","group":"ichidan","forms":{"dictionary":"いる","masu":"います","masuNeg":"いません","masuPast":"いました","masuPastNeg":"いませんでした","te":"いて","nai":"いない","naiPast":"いなかった","ta":"いた","potential":"いられる","passive":"いられる","causative":"いさせる","causativePassive":"いさせられる","volitional":"いよう","imperative":"いろ","prohibitive":"いるな","condBa":"いれば","condTara":"いたら","tai":"いたい","teIru":"いている","teKudasai":"いてください"}},{"key":"v:かかります","dictionary":"かかる","group":"godan","forms":{"dictionary":"かかる","masu":"かかります","masuNeg":"かかりません","masuPast":"かかりました","masuPastNeg":"かかりませんでした","te":"かかって","nai":"かからない","naiPast":"かからなかった","ta":"かかった","potential":"かかれる","passive":"かかられる","causative":"かからせる","causativePassive":"かからせられる","volitional":"かかろう","imperative":"かかれ","prohibitive":"かかるな","condBa":"かかれば","condTara":"かかったら","tai":"かかりたい","teIru":"かかっている","teKudasai":"かかってください"}},{"key":"v:1つ","dictionary":"1つ","group":"godan","forms":{"dictionary":"1つ","masu":"1ちます","masuNeg":"1ちません","masuPast":"1ちました","masuPastNeg":"1ちませんでした","te":"1って","nai":"1たない","naiPast":"1たなかった","ta":"1った","potential":"1てる","passive":"1たれる","causative":"1たせる","causativePassive":"1たせられる","volitional":"1とう","imperative":"1て","prohibitive":"1つな","condBa":"1てば","condTara":"1ったら","tai":"1ちたい","teIru":"1っている","teKudasai":"1ってください"}},{"key":"v:2つ","dictionary":"2つ","group":"godan","forms":{"dictionary":"2つ","masu":"2ちます","masuNeg":"2ちません","masuPast":"2ちました","masuPastNeg":"2ちませんでした","te":"2って","nai":"2たない","naiPast":"2たなかった","ta":"2った","potential":"2てる","passive":"2たれる","causative":"2たせる","causativePassive":"2たせられる","volitional":"2とう","imperative":"2て","prohibitive":"2つな","condBa":"2てば","condTara":"2ったら","tai":"2ちたい","teIru":"2っている","teKudasai":"2ってください"}},{"key":"v:3つ","dictionary":"3つ","group":"godan","forms":{"dictionary":"3つ","masu":"3ちます","masuNeg":"3ちません","masuPast":"3ちました","masuPastNeg":"3ちませんでした","te":"3って","nai":"3たない","naiPast":"3たなかった","ta":"3った","potential":"3てる","passive":"3たれる","causative":"3たせる","causativePassive":"3たせられる","volitional":"3とう","imperative":"3て","prohibitive":"3つな","condBa":"3てば","condTara":"3ったら","tai":"3ちたい","teIru":"3っている","teKudasai":"3ってください"}},{"key":"v:4つ","dictionary":"4つ","group":"godan","forms":{"dictionary":"4つ","masu":"4ちます","masuNeg":"4ちません","masuPast":"4ちました","masuPastNeg":"4ちませんでした","te":"4って","nai":"4たない","naiPast":"4たなかった","ta":"4った","potential":"4てる","passive":"4たれる","causative":"4たせる","causativePassive":"4たせられる","volitional":"4とう","imperative":"4て","prohibitive":"4つな","condBa":"4てば","condTara":"4ったら","tai":"4ちたい","teIru":"4っている","teKudasai":"4ってください"}},{"key":"v:5つ","dictionary":"5つ","group":"godan","forms":{"dictionary":"5つ","masu":"5ちます","masuNeg":"5ちません","masuPast":"5ちました","masuPastNeg":"5ちませんでした","te":"5って","nai":"5たない","naiPast":"5たなかった","ta":"5った","potential":"5てる","passive":"5たれる","causative":"5たせる","causativePassive":"5たせられる","volitional":"5とう","imperative":"5て","prohibitive":"5つな","condBa":"5てば","condTara":"5ったら","tai":"5ちたい","teIru":"5っている","teKudasai":"5ってください"}},{"key":"v:6つ","dictionary":"6つ","group":"godan","forms":{"dictionary":"6つ","masu":"6ちます","masuNeg":"6ちません","masuPast":"6ちました","masuPastNeg":"6ちませんでした","te":"6って","nai":"6たない","naiPast":"6たなかった","ta":"6った","potential":"6てる","passive":"6たれる","causative":"6たせる","causativePassive":"6たせられる","volitional":"6とう","imperative":"6て","prohibitive":"6つな","condBa":"6てば","condTara":"6ったら","tai":"6ちたい","teIru":"6っている","teKudasai":"6ってください"}},{"key":"v:7つ","dictionary":"7つ","group":"godan","forms":{"dictionary":"7つ","masu":"7ちます","masuNeg":"7ちません","masuPast":"7ちました","masuPastNeg":"7ちませんでした","te":"7って","nai":"7たない","naiPast":"7たなかった","ta":"7った","potential":"7てる","passive":"7たれる","causative":"7たせる","causativePassive":"7たせられる","volitional":"7とう","imperative":"7て","prohibitive":"7つな","condBa":"7てば","condTara":"7ったら","tai":"7ちたい","teIru":"7っている","teKudasai":"7ってください"}},{"key":"v:8つ","dictionary":"8つ","group":"godan","forms":{"dictionary":"8つ","masu":"8ちます","masuNeg":"8ちません","masuPast":"8ちました","masuPastNeg":"8ちませんでした","te":"8って","nai":"8たない","naiPast":"8たなかった","ta":"8った","potential":"8てる","passive":"8たれる","causative":"8たせる","causativePassive":"8たせられる","volitional":"8とう","imperative":"8て","prohibitive":"8つな","condBa":"8てば","condTara":"8ったら","tai":"8ちたい","teIru":"8っている","teKudasai":"8ってください"}},{"key":"v:9つ","dictionary":"9つ","group":"godan","forms":{"dictionary":"9つ","masu":"9ちます","masuNeg":"9ちません","masuPast":"9ちました","masuPastNeg":"9ちませんでした","te":"9って","nai":"9たない","naiPast":"9たなかった","ta":"9った","potential":"9てる","passive":"9たれる","causative":"9たせる","causativePassive":"9たせられる","volitional":"9とう","imperative":"9て","prohibitive":"9つな","condBa":"9てば","condTara":"9ったら","tai":"9ちたい","teIru":"9っている","teKudasai":"9ってください"}},{"key":"v:お願いします","dictionary":"お願いする","group":"irregular","forms":{"dictionary":"お願いする","masu":"お願いします","masuNeg":"お願いしません","masuPast":"お願いしました","masuPastNeg":"お願いしませんでした","te":"お願いして","nai":"お願いしない","naiPast":"お願いしなかった","ta":"お願いした","potential":"お願いできる","passive":"お願いされる","causative":"お願いさせる","causativePassive":"お願いさせられる","volitional":"お願いしよう","imperative":"お願いしろ","prohibitive":"お願いするな","condBa":"お願いすれば","condTara":"お願いしたら","tai":"お願いしたい","teIru":"お願いしている","teKudasai":"お願いしてください"}},{"key":"v:遊びます","dictionary":"遊ぶ","group":"godan","forms":{"dictionary":"遊ぶ","masu":"遊びます","masuNeg":"遊びません","masuPast":"遊びました","masuPastNeg":"遊びませんでした","te":"遊んで","nai":"遊ばない","naiPast":"遊ばなかった","ta":"遊んだ","potential":"遊べる","passive":"遊ばれる","causative":"遊ばせる","causativePassive":"遊ばせられる","volitional":"遊ぼう","imperative":"遊べ","prohibitive":"遊ぶな","condBa":"遊べば","condTara":"遊んだら","tai":"遊びたい","teIru":"遊んでいる","teKudasai":"遊んでください"}},{"key":"v:泳ぎます","dictionary":"泳ぐ","group":"godan","forms":{"dictionary":"泳ぐ","masu":"泳ぎます","masuNeg":"泳ぎません","masuPast":"泳ぎました","masuPastNeg":"泳ぎませんでした","te":"泳いで","nai":"泳がない","naiPast":"泳がなかった","ta":"泳いだ","potential":"泳げる","passive":"泳がれる","causative":"泳がせる","causativePassive":"泳がせられる","volitional":"泳ごう","imperative":"泳げ","prohibitive":"泳ぐな","condBa":"泳げば","condTara":"泳いだら","tai":"泳ぎたい","teIru":"泳いでいる","teKudasai":"泳いでください"}},{"key":"v:迎えます","dictionary":"迎える","group":"ichidan","forms":{"dictionary":"迎える","masu":"迎えます","masuNeg":"迎えません","masuPast":"迎えました","masuPastNeg":"迎えませんでした","te":"迎えて","nai":"迎えない","naiPast":"迎えなかった","ta":"迎えた","potential":"迎えられる","passive":"迎えられる","causative":"迎えさせる","causativePassive":"迎えさせられる","volitional":"迎えよう","imperative":"迎えろ","prohibitive":"迎えるな","condBa":"迎えれば","condTara":"迎えたら","tai":"迎えたい","teIru":"迎えている","teKudasai":"迎えてください"}},{"key":"v:疲れます","dictionary":"疲れる","group":"ichidan","forms":{"dictionary":"疲れる","masu":"疲れます","masuNeg":"疲れません","masuPast":"疲れました","masuPastNeg":"疲れませんでした","te":"疲れて","nai":"疲れない","naiPast":"疲れなかった","ta":"疲れた","potential":"疲れられる","passive":"疲れられる","causative":"疲れさせる","causativePassive":"疲れさせられる","volitional":"疲れよう","imperative":"疲れろ","prohibitive":"疲れるな","condBa":"疲れれば","condTara":"疲れたら","tai":"疲れたい","teIru":"疲れている","teKudasai":"疲れてください"}},{"key":"v:出します","dictionary":"出す","group":"godan","forms":{"dictionary":"出す","masu":"出します","masuNeg":"出しません","masuPast":"出しました","masuPastNeg":"出しませんでした","te":"出して","nai":"出さない","naiPast":"出さなかった","ta":"出した","potential":"出せる","passive":"出される","causative":"出させる","causativePassive":"出させられる","volitional":"出そう","imperative":"出せ","prohibitive":"出すな","condBa":"出せば","condTara":"出したら","tai":"出したい","teIru":"出している","teKudasai":"出してください"}},{"key":"v:入ります","dictionary":"入る","group":"godan","forms":{"dictionary":"入る","masu":"入ります","masuNeg":"入りません","masuPast":"入りました","masuPastNeg":"入りませんでした","te":"入って","nai":"入らない","naiPast":"入らなかった","ta":"入った","potential":"入れる","passive":"入られる","causative":"入らせる","causativePassive":"入らせられる","volitional":"入ろう","imperative":"入れ","prohibitive":"入るな","condBa":"入れば","condTara":"入ったら","tai":"入りたい","teIru":"入っている","teKudasai":"入ってください"}},{"key":"v:出ます","dictionary":"出る","group":"ichidan","forms":{"dictionary":"出る","masu":"出ます","masuNeg":"出ません","masuPast":"出ました","masuPastNeg":"出ませんでした","te":"出て","nai":"出ない","naiPast":"出なかった","ta":"出た","potential":"出られる","passive":"出られる","causative":"出させる","causativePassive":"出させられる","volitional":"出よう","imperative":"出ろ","prohibitive":"出るな","condBa":"出れば","condTara":"出たら","tai":"出たい","teIru":"出ている","teKudasai":"出てください"}},{"key":"v:結婚します","dictionary":"結婚する","group":"irregular","forms":{"dictionary":"結婚する","masu":"結婚します","masuNeg":"結婚しません","masuPast":"結婚しました","masuPastNeg":"結婚しませんでした","te":"結婚して","nai":"結婚しない","naiPast":"結婚しなかった","ta":"結婚した","potential":"結婚できる","passive":"結婚される","causative":"結婚させる","causativePassive":"結婚させられる","volitional":"結婚しよう","imperative":"結婚しろ","prohibitive":"結婚するな","condBa":"結婚すれば","condTara":"結婚したら","tai":"結婚したい","teIru":"結婚している","teKudasai":"結婚してください"}},{"key":"v:買い物します","dictionary":"買い物する","group":"irregular","forms":{"dictionary":"買い物する","masu":"買い物します","masuNeg":"買い物しません","masuPast":"買い物しました","masuPastNeg":"買い物しませんでした","te":"買い物して","nai":"買い物しない","naiPast":"買い物しなかった","ta":"買い物した","potential":"買い物できる","passive":"買い物される","causative":"買い物させる","causativePassive":"買い物させられる","volitional":"買い物しよう","imperative":"買い物しろ","prohibitive":"買い物するな","condBa":"買い物すれば","condTara":"買い物したら","tai":"買い物したい","teIru":"買い物している","teKudasai":"買い物してください"}},{"key":"v:食事します","dictionary":"食事する","group":"irregular","forms":{"dictionary":"食事する","masu":"食事します","masuNeg":"食事しません","masuPast":"食事しました","masuPastNeg":"食事しませんでした","te":"食事して","nai":"食事しない","naiPast":"食事しなかった","ta":"食事した","potential":"食事できる","passive":"食事される","causative":"食事させる","causativePassive":"食事させられる","volitional":"食事しよう","imperative":"食事しろ","prohibitive":"食事するな","condBa":"食事すれば","condTara":"食事したら","tai":"食事したい","teIru":"食事している","teKudasai":"食事してください"}},{"key":"v:散歩します","dictionary":"散歩する","group":"irregular","forms":{"dictionary":"散歩する","masu":"散歩します","masuNeg":"散歩しません","masuPast":"散歩しました","masuPastNeg":"散歩しませんでした","te":"散歩して","nai":"散歩しない","naiPast":"散歩しなかった","ta":"散歩した","potential":"散歩できる","passive":"散歩される","causative":"散歩させる","causativePassive":"散歩させられる","volitional":"散歩しよう","imperative":"散歩しろ","prohibitive":"散歩するな","condBa":"散歩すれば","condTara":"散歩したら","tai":"散歩したい","teIru":"散歩している","teKudasai":"散歩してください"}},{"key":"v:つけます","dictionary":"つける","group":"ichidan","forms":{"dictionary":"つける","masu":"つけます","masuNeg":"つけません","masuPast":"つけました","masuPastNeg":"つけませんでした","te":"つけて","nai":"つけない","naiPast":"つけなかった","ta":"つけた","potential":"つけられる","passive":"つけられる","causative":"つけさせる","causativePassive":"つけさせられる","volitional":"つけよう","imperative":"つけろ","prohibitive":"つけるな","condBa":"つければ","condTara":"つけたら","tai":"つけたい","teIru":"つけている","teKudasai":"つけてください"}},{"key":"v:消します","dictionary":"消す","group":"godan","forms":{"dictionary":"消す","masu":"消します","masuNeg":"消しません","masuPast":"消しました","masuPastNeg":"消しませんでした","te":"消して","nai":"消さない","naiPast":"消さなかった","ta":"消した","potential":"消せる","passive":"消される","causative":"消させる","causativePassive":"消させられる","volitional":"消そう","imperative":"消せ","prohibitive":"消すな","condBa":"消せば","condTara":"消したら","tai":"消したい","teIru":"消している","teKudasai":"消してください"}},{"key":"v:開けます","dictionary":"開ける","group":"ichidan","forms":{"dictionary":"開ける","masu":"開けます","masuNeg":"開けません","masuPast":"開けました","masuPastNeg":"開けませんでした","te":"開けて","nai":"開けない","naiPast":"開けなかった","ta":"開けた","potential":"開けられる","passive":"開けられる","causative":"開けさせる","causativePassive":"開けさせられる","volitional":"開けよう","imperative":"開けろ","prohibitive":"開けるな","condBa":"開ければ","condTara":"開けたら","tai":"開けたい","teIru":"開けている","teKudasai":"開けてください"}},{"key":"v:閉めます","dictionary":"閉める","group":"ichidan","forms":{"dictionary":"閉める","masu":"閉めます","masuNeg":"閉めません","masuPast":"閉めました","masuPastNeg":"閉めませんでした","te":"閉めて","nai":"閉めない","naiPast":"閉めなかった","ta":"閉めた","potential":"閉められる","passive":"閉められる","causative":"閉めさせる","causativePassive":"閉めさせられる","volitional":"閉めよう","imperative":"閉めろ","prohibitive":"閉めるな","condBa":"閉めれば","condTara":"閉めたら","tai":"閉めたい","teIru":"閉めている","teKudasai":"閉めてください"}},{"key":"v:急ぎます","dictionary":"急ぐ","group":"godan","forms":{"dictionary":"急ぐ","masu":"急ぎます","masuNeg":"急ぎません","masuPast":"急ぎました","masuPastNeg":"急ぎませんでした","te":"急いで","nai":"急がない","naiPast":"急がなかった","ta":"急いだ","potential":"急げる","passive":"急がれる","causative":"急がせる","causativePassive":"急がせられる","volitional":"急ごう","imperative":"急げ","prohibitive":"急ぐな","condBa":"急げば","condTara":"急いだら","tai":"急ぎたい","teIru":"急いでいる","teKudasai":"急いでください"}},{"key":"v:待ちます","dictionary":"待つ","group":"godan","forms":{"dictionary":"待つ","masu":"待ちます","masuNeg":"待ちません","masuPast":"待ちました","masuPastNeg":"待ちませんでした","te":"待って","nai":"待たない","naiPast":"待たなかった","ta":"待った","potential":"待てる","passive":"待たれる","causative":"待たせる","causativePassive":"待たせられる","volitional":"待とう","imperative":"待て","prohibitive":"待つな","condBa":"待てば","condTara":"待ったら","tai":"待ちたい","teIru":"待っている","teKudasai":"待ってください"}},{"key":"v:止めます","dictionary":"止める","group":"ichidan","forms":{"dictionary":"止める","masu":"止めます","masuNeg":"止めません","masuPast":"止めました","masuPastNeg":"止めませんでした","te":"止めて","nai":"止めない","naiPast":"止めなかった","ta":"止めた","potential":"止められる","passive":"止められる","causative":"止めさせる","causativePassive":"止めさせられる","volitional":"止めよう","imperative":"止めろ","prohibitive":"止めるな","condBa":"止めれば","condTara":"止めたら","tai":"止めたい","teIru":"止めている","teKudasai":"止めてください"}},{"key":"v:曲がります","dictionary":"曲がる","group":"godan","forms":{"dictionary":"曲がる","masu":"曲がります","masuNeg":"曲がりません","masuPast":"曲がりました","masuPastNeg":"曲がりませんでした","te":"曲がって","nai":"曲がらない","naiPast":"曲がらなかった","ta":"曲がった","potential":"曲がれる","passive":"曲がられる","causative":"曲がらせる","causativePassive":"曲がらせられる","volitional":"曲がろう","imperative":"曲がれ","prohibitive":"曲がるな","condBa":"曲がれば","condTara":"曲がったら","tai":"曲がりたい","teIru":"曲がっている","teKudasai":"曲がってください"}},{"key":"v:持ちます","dictionary":"持つ","group":"godan","forms":{"dictionary":"持つ","masu":"持ちます","masuNeg":"持ちません","masuPast":"持ちました","masuPastNeg":"持ちませんでした","te":"持って","nai":"持たない","naiPast":"持たなかった","ta":"持った","potential":"持てる","passive":"持たれる","causative":"持たせる","causativePassive":"持たせられる","volitional":"持とう","imperative":"持て","prohibitive":"持つな","condBa":"持てば","condTara":"持ったら","tai":"持ちたい","teIru":"持っている","teKudasai":"持ってください"}},{"key":"v:取ります","dictionary":"取る","group":"godan","forms":{"dictionary":"取る","masu":"取ります","masuNeg":"取りません","masuPast":"取りました","masuPastNeg":"取りませんでした","te":"取って","nai":"取らない","naiPast":"取らなかった","ta":"取った","potential":"取れる","passive":"取られる","causative":"取らせる","causativePassive":"取らせられる","volitional":"取ろう","imperative":"取れ","prohibitive":"取るな","condBa":"取れば","condTara":"取ったら","tai":"取りたい","teIru":"取っている","teKudasai":"取ってください"}},{"key":"v:手伝います","dictionary":"手伝う","group":"godan","forms":{"dictionary":"手伝う","masu":"手伝います","masuNeg":"手伝いません","masuPast":"手伝いました","masuPastNeg":"手伝いませんでした","te":"手伝って","nai":"手伝わない","naiPast":"手伝わなかった","ta":"手伝った","potential":"手伝える","passive":"手伝われる","causative":"手伝わせる","causativePassive":"手伝わせられる","volitional":"手伝おう","imperative":"手伝え","prohibitive":"手伝うな","condBa":"手伝えば","condTara":"手伝ったら","tai":"手伝いたい","teIru":"手伝っている","teKudasai":"手伝ってください"}},{"key":"v:呼びます","dictionary":"呼ぶ","group":"godan","forms":{"dictionary":"呼ぶ","masu":"呼びます","masuNeg":"呼びません","masuPast":"呼びました","masuPastNeg":"呼びませんでした","te":"呼んで","nai":"呼ばない","naiPast":"呼ばなかった","ta":"呼んだ","potential":"呼べる","passive":"呼ばれる","causative":"呼ばせる","causativePassive":"呼ばせられる","volitional":"呼ぼう","imperative":"呼べ","prohibitive":"呼ぶな","condBa":"呼べば","condTara":"呼んだら","tai":"呼びたい","teIru":"呼んでいる","teKudasai":"呼んでください"}},{"key":"v:話します","dictionary":"話す","group":"godan","forms":{"dictionary":"話す","masu":"話します","masuNeg":"話しません","masuPast":"話しました","masuPastNeg":"話しませんでした","te":"話して","nai":"話さない","naiPast":"話さなかった","ta":"話した","potential":"話せる","passive":"話される","causative":"話させる","causativePassive":"話させられる","volitional":"話そう","imperative":"話せ","prohibitive":"話すな","condBa":"話せば","condTara":"話したら","tai":"話したい","teIru":"話している","teKudasai":"話してください"}},{"key":"v:見せます","dictionary":"見せる","group":"ichidan","forms":{"dictionary":"見せる","masu":"見せます","masuNeg":"見せません","masuPast":"見せました","masuPastNeg":"見せませんでした","te":"見せて","nai":"見せない","naiPast":"見せなかった","ta":"見せた","potential":"見せられる","passive":"見せられる","causative":"見せさせる","causativePassive":"見せさせられる","volitional":"見せよう","imperative":"見せろ","prohibitive":"見せるな","condBa":"見せれば","condTara":"見せたら","tai":"見せたい","teIru":"見せている","teKudasai":"見せてください"}},{"key":"v:始めます","dictionary":"始める","group":"ichidan","forms":{"dictionary":"始める","masu":"始めます","masuNeg":"始めません","masuPast":"始めました","masuPastNeg":"始めませんでした","te":"始めて","nai":"始めない","naiPast":"始めなかった","ta":"始めた","potential":"始められる","passive":"始められる","causative":"始めさせる","causativePassive":"始めさせられる","volitional":"始めよう","imperative":"始めろ","prohibitive":"始めるな","condBa":"始めれば","condTara":"始めたら","tai":"始めたい","teIru":"始めている","teKudasai":"始めてください"}},{"key":"v:降ります","dictionary":"降る","group":"godan","forms":{"dictionary":"降る","masu":"降ります","masuNeg":"降りません","masuPast":"降りました","masuPastNeg":"降りませんでした","te":"降って","nai":"降らない","naiPast":"降らなかった","ta":"降った","potential":"降れる","passive":"降られる","causative":"降らせる","causativePassive":"降らせられる","volitional":"降ろう","imperative":"降れ","prohibitive":"降るな","condBa":"降れば","condTara":"降ったら","tai":"降りたい","teIru":"降っている","teKudasai":"降ってください"}},{"key":"v:コピーします","dictionary":"コピーする","group":"irregular","forms":{"dictionary":"コピーする","masu":"コピーします","masuNeg":"コピーしません","masuPast":"コピーしました","masuPastNeg":"コピーしませんでした","te":"コピーして","nai":"コピーしない","naiPast":"コピーしなかった","ta":"コピーした","potential":"コピーできる","passive":"コピーされる","causative":"コピーさせる","causativePassive":"コピーさせられる","volitional":"コピーしよう","imperative":"コピーしろ","prohibitive":"コピーするな","condBa":"コピーすれば","condTara":"コピーしたら","tai":"コピーしたい","teIru":"コピーしている","teKudasai":"コピーしてください"}},{"key":"v:置きます","dictionary":"置く","group":"godan","forms":{"dictionary":"置く","masu":"置きます","masuNeg":"置きません","masuPast":"置きました","masuPastNeg":"置きませんでした","te":"置いて","nai":"置かない","naiPast":"置かなかった","ta":"置いた","potential":"置ける","passive":"置かれる","causative":"置かせる","causativePassive":"置かせられる","volitional":"置こう","imperative":"置け","prohibitive":"置くな","condBa":"置けば","condTara":"置いたら","tai":"置きたい","teIru":"置いている","teKudasai":"置いてください"}},{"key":"v:作ります、造ります","dictionary":"作る","group":"godan","forms":{"dictionary":"作る","masu":"作ります","masuNeg":"作りません","masuPast":"作りました","masuPastNeg":"作りませんでした","te":"作って","nai":"作らない","naiPast":"作らなかった","ta":"作った","potential":"作れる","passive":"作られる","causative":"作らせる","causativePassive":"作らせられる","volitional":"作ろう","imperative":"作れ","prohibitive":"作るな","condBa":"作れば","condTara":"作ったら","tai":"作りたい","teIru":"作っている","teKudasai":"作ってください"}},{"key":"v:売ります","dictionary":"売る","group":"godan","forms":{"dictionary":"売る","masu":"売ります","masuNeg":"売りません","masuPast":"売りました","masuPastNeg":"売りませんでした","te":"売って","nai":"売らない","naiPast":"売らなかった","ta":"売った","potential":"売れる","passive":"売られる","causative":"売らせる","causativePassive":"売らせられる","volitional":"売ろう","imperative":"売れ","prohibitive":"売るな","condBa":"売れば","condTara":"売ったら","tai":"売りたい","teIru":"売っている","teKudasai":"売ってください"}},{"key":"v:知ります","dictionary":"知る","group":"godan","forms":{"dictionary":"知る","masu":"知ります","masuNeg":"知りません","masuPast":"知りました","masuPastNeg":"知りませんでした","te":"知って","nai":"知らない","naiPast":"知らなかった","ta":"知った","potential":"知れる","passive":"知られる","causative":"知らせる","causativePassive":"知らせられる","volitional":"知ろう","imperative":"知れ","prohibitive":"知るな","condBa":"知れば","condTara":"知ったら","tai":"知りたい","teIru":"知っている","teKudasai":"知ってください"}},{"key":"v:住みます","dictionary":"住む","group":"godan","forms":{"dictionary":"住む","masu":"住みます","masuNeg":"住みません","masuPast":"住みました","masuPastNeg":"住みませんでした","te":"住んで","nai":"住まない","naiPast":"住まなかった","ta":"住んだ","potential":"住める","passive":"住まれる","causative":"住ませる","causativePassive":"住ませられる","volitional":"住もう","imperative":"住め","prohibitive":"住むな","condBa":"住めば","condTara":"住んだら","tai":"住みたい","teIru":"住んでいる","teKudasai":"住んでください"}},{"key":"v:研究します","dictionary":"研究する","group":"irregular","forms":{"dictionary":"研究する","masu":"研究します","masuNeg":"研究しません","masuPast":"研究しました","masuPastNeg":"研究しませんでした","te":"研究して","nai":"研究しない","naiPast":"研究しなかった","ta":"研究した","potential":"研究できる","passive":"研究される","causative":"研究させる","causativePassive":"研究させられる","volitional":"研究しよう","imperative":"研究しろ","prohibitive":"研究するな","condBa":"研究すれば","condTara":"研究したら","tai":"研究したい","teIru":"研究している","teKudasai":"研究してください"}},{"key":"v:思い出します","dictionary":"思い出す","group":"godan","forms":{"dictionary":"思い出す","masu":"思い出します","masuNeg":"思い出しません","masuPast":"思い出しました","masuPastNeg":"思い出しませんでした","te":"思い出して","nai":"思い出さない","naiPast":"思い出さなかった","ta":"思い出した","potential":"思い出せる","passive":"思い出される","causative":"思い出させる","causativePassive":"思い出させられる","volitional":"思い出そう","imperative":"思い出せ","prohibitive":"思い出すな","condBa":"思い出せば","condTara":"思い出したら","tai":"思い出したい","teIru":"思い出している","teKudasai":"思い出してください"}},{"key":"v:いらっしゃいます","dictionary":"いらっしゃる","group":"godan","forms":{"dictionary":"いらっしゃる","masu":"いらっしゃいます","masuNeg":"いらっしゃいません","masuPast":"いらっしゃいました","masuPastNeg":"いらっしゃいませんでした","te":"いらっしゃって","nai":"いらっしゃらない","naiPast":"いらっしゃらなかった","ta":"いらっしゃった","potential":"いらっしゃれる","passive":"いらっしゃられる","causative":"いらっしゃらせる","causativePassive":"いらっしゃらせられる","volitional":"いらっしゃろう","imperative":"いらっしゃれ","prohibitive":"いらっしゃるな","condBa":"いらっしゃれば","condTara":"いらっしゃったら","tai":"いらっしゃりたい","teIru":"いらっしゃっている","teKudasai":"いらっしゃってください"}},{"key":"v:乗ります","dictionary":"乗る","group":"godan","forms":{"dictionary":"乗る","masu":"乗ります","masuNeg":"乗りません","masuPast":"乗りました","masuPastNeg":"乗りませんでした","te":"乗って","nai":"乗らない","naiPast":"乗らなかった","ta":"乗った","potential":"乗れる","passive":"乗られる","causative":"乗らせる","causativePassive":"乗らせられる","volitional":"乗ろう","imperative":"乗れ","prohibitive":"乗るな","condBa":"乗れば","condTara":"乗ったら","tai":"乗りたい","teIru":"乗っている","teKudasai":"乗ってください"}},{"key":"v:乗り換えます","dictionary":"乗り換える","group":"ichidan","forms":{"dictionary":"乗り換える","masu":"乗り換えます","masuNeg":"乗り換えません","masuPast":"乗り換えました","masuPastNeg":"乗り換えませんでした","te":"乗り換えて","nai":"乗り換えない","naiPast":"乗り換えなかった","ta":"乗り換えた","potential":"乗り換えられる","passive":"乗り換えられる","causative":"乗り換えさせる","causativePassive":"乗り換えさせられる","volitional":"乗り換えよう","imperative":"乗り換えろ","prohibitive":"乗り換えるな","condBa":"乗り換えれば","condTara":"乗り換えたら","tai":"乗り換えたい","teIru":"乗り換えている","teKudasai":"乗り換えてください"}},{"key":"v:浴びます","dictionary":"浴ぶ","group":"godan","forms":{"dictionary":"浴ぶ","masu":"浴びます","masuNeg":"浴びません","masuPast":"浴びました","masuPastNeg":"浴びませんでした","te":"浴んで","nai":"浴ばない","naiPast":"浴ばなかった","ta":"浴んだ","potential":"浴べる","passive":"浴ばれる","causative":"浴ばせる","causativePassive":"浴ばせられる","volitional":"浴ぼう","imperative":"浴べ","prohibitive":"浴ぶな","condBa":"浴べば","condTara":"浴んだら","tai":"浴びたい","teIru":"浴んでいる","teKudasai":"浴んでください"}},{"key":"v:入れます","dictionary":"入れる","group":"ichidan","forms":{"dictionary":"入れる","masu":"入れます","masuNeg":"入れません","masuPast":"入れました","masuPastNeg":"入れませんでした","te":"入れて","nai":"入れない","naiPast":"入れなかった","ta":"入れた","potential":"入れられる","passive":"入れられる","causative":"入れさせる","causativePassive":"入れさせられる","volitional":"入れよう","imperative":"入れろ","prohibitive":"入れるな","condBa":"入れれば","condTara":"入れたら","tai":"入れたい","teIru":"入れている","teKudasai":"入れてください"}},{"key":"v:やめます","dictionary":"やめる","group":"ichidan","forms":{"dictionary":"やめる","masu":"やめます","masuNeg":"やめません","masuPast":"やめました","masuPastNeg":"やめませんでした","te":"やめて","nai":"やめない","naiPast":"やめなかった","ta":"やめた","potential":"やめられる","passive":"やめられる","causative":"やめさせる","causativePassive":"やめさせられる","volitional":"やめよう","imperative":"やめろ","prohibitive":"やめるな","condBa":"やめれば","condTara":"やめたら","tai":"やめたい","teIru":"やめている","teKudasai":"やめてください"}},{"key":"v:押します","dictionary":"押す","group":"godan","forms":{"dictionary":"押す","masu":"押します","masuNeg":"押しません","masuPast":"押しました","masuPastNeg":"押しませんでした","te":"押して","nai":"押さない","naiPast":"押さなかった","ta":"押した","potential":"押せる","passive":"押される","causative":"押させる","causativePassive":"押させられる","volitional":"押そう","imperative":"押せ","prohibitive":"押すな","condBa":"押せば","condTara":"押したら","tai":"押したい","teIru":"押している","teKudasai":"押してください"}},{"key":"v:覚えます","dictionary":"覚える","group":"ichidan","forms":{"dictionary":"覚える","masu":"覚えます","masuNeg":"覚えません","masuPast":"覚えました","masuPastNeg":"覚えませんでした","te":"覚えて","nai":"覚えない","naiPast":"覚えなかった","ta":"覚えた","potential":"覚えられる","passive":"覚えられる","causative":"覚えさせる","causativePassive":"覚えさせられる","volitional":"覚えよう","imperative":"覚えろ","prohibitive":"覚えるな","condBa":"覚えれば","condTara":"覚えたら","tai":"覚えたい","teIru":"覚えている","teKudasai":"覚えてください"}},{"key":"v:忘れます","dictionary":"忘れる","group":"ichidan","forms":{"dictionary":"忘れる","masu":"忘れます","masuNeg":"忘れません","masuPast":"忘れました","masuPastNeg":"忘れませんでした","te":"忘れて","nai":"忘れない","naiPast":"忘れなかった","ta":"忘れた","potential":"忘れられる","passive":"忘れられる","causative":"忘れさせる","causativePassive":"忘れさせられる","volitional":"忘れよう","imperative":"忘れろ","prohibitive":"忘れるな","condBa":"忘れれば","condTara":"忘れたら","tai":"忘れたい","teIru":"忘れている","teKudasai":"忘れてください"}},{"key":"v:なくします","dictionary":"なくす","group":"godan","forms":{"dictionary":"なくす","masu":"なくします","masuNeg":"なくしません","masuPast":"なくしました","masuPastNeg":"なくしませんでした","te":"なくして","nai":"なくさない","naiPast":"なくさなかった","ta":"なくした","potential":"なくせる","passive":"なくされる","causative":"なくさせる","causativePassive":"なくさせられる","volitional":"なくそう","imperative":"なくせ","prohibitive":"なくすな","condBa":"なくせば","condTara":"なくしたら","tai":"なくしたい","teIru":"なくしている","teKudasai":"なくしてください"}},{"key":"v:払います","dictionary":"払う","group":"godan","forms":{"dictionary":"払う","masu":"払います","masuNeg":"払いません","masuPast":"払いました","masuPastNeg":"払いませんでした","te":"払って","nai":"払わない","naiPast":"払わなかった","ta":"払った","potential":"払える","passive":"払われる","causative":"払わせる","causativePassive":"払わせられる","volitional":"払おう","imperative":"払え","prohibitive":"払うな","condBa":"払えば","condTara":"払ったら","tai":"払いたい","teIru":"払っている","teKudasai":"払ってください"}},{"key":"v:返します","dictionary":"返す","group":"godan","forms":{"dictionary":"返す","masu":"返します","masuNeg":"返しません","masuPast":"返しました","masuPastNeg":"返しませんでした","te":"返して","nai":"返さない","naiPast":"返さなかった","ta":"返した","potential":"返せる","passive":"返される","causative":"返させる","causativePassive":"返させられる","volitional":"返そう","imperative":"返せ","prohibitive":"返すな","condBa":"返せば","condTara":"返したら","tai":"返したい","teIru":"返している","teKudasai":"返してください"}},{"key":"v:出かけます","dictionary":"出かける","group":"ichidan","forms":{"dictionary":"出かける","masu":"出かけます","masuNeg":"出かけません","masuPast":"出かけました","masuPastNeg":"出かけませんでした","te":"出かけて","nai":"出かけない","naiPast":"出かけなかった","ta":"出かけた","potential":"出かけられる","passive":"出かけられる","causative":"出かけさせる","causativePassive":"出かけさせられる","volitional":"出かけよう","imperative":"出かけろ","prohibitive":"出かけるな","condBa":"出かければ","condTara":"出かけたら","tai":"出かけたい","teIru":"出かけている","teKudasai":"出かけてください"}},{"key":"v:脱ぎます","dictionary":"脱ぐ","group":"godan","forms":{"dictionary":"脱ぐ","masu":"脱ぎます","masuNeg":"脱ぎません","masuPast":"脱ぎました","masuPastNeg":"脱ぎませんでした","te":"脱いで","nai":"脱がない","naiPast":"脱がなかった","ta":"脱いだ","potential":"脱げる","passive":"脱がれる","causative":"脱がせる","causativePassive":"脱がせられる","volitional":"脱ごう","imperative":"脱げ","prohibitive":"脱ぐな","condBa":"脱げば","condTara":"脱いだら","tai":"脱ぎたい","teIru":"脱いでいる","teKudasai":"脱いでください"}},{"key":"v:持って行きます","dictionary":"持って行く","group":"godan","forms":{"dictionary":"持って行く","masu":"持って行きます","masuNeg":"持って行きません","masuPast":"持って行きました","masuPastNeg":"持って行きませんでした","te":"持って行いて","nai":"持って行かない","naiPast":"持って行かなかった","ta":"持って行いた","potential":"持って行ける","passive":"持って行かれる","causative":"持って行かせる","causativePassive":"持って行かせられる","volitional":"持って行こう","imperative":"持って行け","prohibitive":"持って行くな","condBa":"持って行けば","condTara":"持って行いたら","tai":"持って行きたい","teIru":"持って行いている","teKudasai":"持って行いてください"}},{"key":"v:心配します","dictionary":"心配する","group":"irregular","forms":{"dictionary":"心配する","masu":"心配します","masuNeg":"心配しません","masuPast":"心配しました","masuPastNeg":"心配しませんでした","te":"心配して","nai":"心配しない","naiPast":"心配しなかった","ta":"心配した","potential":"心配できる","passive":"心配される","causative":"心配させる","causativePassive":"心配させられる","volitional":"心配しよう","imperative":"心配しろ","prohibitive":"心配するな","condBa":"心配すれば","condTara":"心配したら","tai":"心配したい","teIru":"心配している","teKudasai":"心配してください"}},{"key":"v:残業します","dictionary":"残業する","group":"irregular","forms":{"dictionary":"残業する","masu":"残業します","masuNeg":"残業しません","masuPast":"残業しました","masuPastNeg":"残業しませんでした","te":"残業して","nai":"残業しない","naiPast":"残業しなかった","ta":"残業した","potential":"残業できる","passive":"残業される","causative":"残業させる","causativePassive":"残業させられる","volitional":"残業しよう","imperative":"残業しろ","prohibitive":"残業するな","condBa":"残業すれば","condTara":"残業したら","tai":"残業したい","teIru":"残業している","teKudasai":"残業してください"}},{"key":"v:出張します","dictionary":"出張する","group":"irregular","forms":{"dictionary":"出張する","masu":"出張します","masuNeg":"出張しません","masuPast":"出張しました","masuPastNeg":"出張しませんでした","te":"出張して","nai":"出張しない","naiPast":"出張しなかった","ta":"出張した","potential":"出張できる","passive":"出張される","causative":"出張させる","causativePassive":"出張させられる","volitional":"出張しよう","imperative":"出張しろ","prohibitive":"出張するな","condBa":"出張すれば","condTara":"出張したら","tai":"出張したい","teIru":"出張している","teKudasai":"出張してください"}},{"key":"v:できます","dictionary":"できる","group":"ichidan","forms":{"dictionary":"できる","masu":"できます","masuNeg":"できません","masuPast":"できました","masuPastNeg":"できませんでした","te":"できて","nai":"できない","naiPast":"できなかった","ta":"できた","potential":"できられる","passive":"できられる","causative":"できさせる","causativePassive":"できさせられる","volitional":"できよう","imperative":"できろ","prohibitive":"できるな","condBa":"できれば","condTara":"できたら","tai":"できたい","teIru":"できている","teKudasai":"できてください"}},{"key":"v:洗います","dictionary":"洗う","group":"godan","forms":{"dictionary":"洗う","masu":"洗います","masuNeg":"洗いません","masuPast":"洗いました","masuPastNeg":"洗いませんでした","te":"洗って","nai":"洗わない","naiPast":"洗わなかった","ta":"洗った","potential":"洗える","passive":"洗われる","causative":"洗わせる","causativePassive":"洗わせられる","volitional":"洗おう","imperative":"洗え","prohibitive":"洗うな","condBa":"洗えば","condTara":"洗ったら","tai":"洗いたい","teIru":"洗っている","teKudasai":"洗ってください"}},{"key":"v:弾きます","dictionary":"弾く","group":"godan","forms":{"dictionary":"弾く","masu":"弾きます","masuNeg":"弾きません","masuPast":"弾きました","masuPastNeg":"弾きませんでした","te":"弾いて","nai":"弾かない","naiPast":"弾かなかった","ta":"弾いた","potential":"弾ける","passive":"弾かれる","causative":"弾かせる","causativePassive":"弾かせられる","volitional":"弾こう","imperative":"弾け","prohibitive":"弾くな","condBa":"弾けば","condTara":"弾いたら","tai":"弾きたい","teIru":"弾いている","teKudasai":"弾いてください"}},{"key":"v:歌います","dictionary":"歌う","group":"godan","forms":{"dictionary":"歌う","masu":"歌います","masuNeg":"歌いません","masuPast":"歌いました","masuPastNeg":"歌いませんでした","te":"歌って","nai":"歌わない","naiPast":"歌わなかった","ta":"歌った","potential":"歌える","passive":"歌われる","causative":"歌わせる","causativePassive":"歌わせられる","volitional":"歌おう","imperative":"歌え","prohibitive":"歌うな","condBa":"歌えば","condTara":"歌ったら","tai":"歌いたい","teIru":"歌っている","teKudasai":"歌ってください"}},{"key":"v:集めます","dictionary":"集める","group":"ichidan","forms":{"dictionary":"集める","masu":"集めます","masuNeg":"集めません","masuPast":"集めました","masuPastNeg":"集めませんでした","te":"集めて","nai":"集めない","naiPast":"集めなかった","ta":"集めた","potential":"集められる","passive":"集められる","causative":"集めさせる","causativePassive":"集めさせられる","volitional":"集めよう","imperative":"集めろ","prohibitive":"集めるな","condBa":"集めれば","condTara":"集めたら","tai":"集めたい","teIru":"集めている","teKudasai":"集めてください"}},{"key":"v:捨てます","dictionary":"捨てる","group":"ichidan","forms":{"dictionary":"捨てる","masu":"捨てます","masuNeg":"捨てません","masuPast":"捨てました","masuPastNeg":"捨てませんでした","te":"捨てて","nai":"捨てない","naiPast":"捨てなかった","ta":"捨てた","potential":"捨てられる","passive":"捨てられる","causative":"捨てさせる","causativePassive":"捨てさせられる","volitional":"捨てよう","imperative":"捨てろ","prohibitive":"捨てるな","condBa":"捨てれば","condTara":"捨てたら","tai":"捨てたい","teIru":"捨てている","teKudasai":"捨ててください"}},{"key":"v:換えます","dictionary":"換える","group":"ichidan","forms":{"dictionary":"換える","masu":"換えます","masuNeg":"換えません","masuPast":"換えました","masuPastNeg":"換えませんでした","te":"換えて","nai":"換えない","naiPast":"換えなかった","ta":"換えた","potential":"換えられる","passive":"換えられる","causative":"換えさせる","causativePassive":"換えさせられる","volitional":"換えよう","imperative":"換えろ","prohibitive":"換えるな","condBa":"換えれば","condTara":"換えたら","tai":"換えたい","teIru":"換えている","teKudasai":"換えてください"}},{"key":"v:運転します","dictionary":"運転する","group":"irregular","forms":{"dictionary":"運転する","masu":"運転します","masuNeg":"運転しません","masuPast":"運転しました","masuPastNeg":"運転しませんでした","te":"運転して","nai":"運転しない","naiPast":"運転しなかった","ta":"運転した","potential":"運転できる","passive":"運転される","causative":"運転させる","causativePassive":"運転させられる","volitional":"運転しよう","imperative":"運転しろ","prohibitive":"運転するな","condBa":"運転すれば","condTara":"運転したら","tai":"運転したい","teIru":"運転している","teKudasai":"運転してください"}},{"key":"v:予約します","dictionary":"予約する","group":"irregular","forms":{"dictionary":"予約する","masu":"予約します","masuNeg":"予約しません","masuPast":"予約しました","masuPastNeg":"予約しませんでした","te":"予約して","nai":"予約しない","naiPast":"予約しなかった","ta":"予約した","potential":"予約できる","passive":"予約される","causative":"予約させる","causativePassive":"予約させられる","volitional":"予約しよう","imperative":"予約しろ","prohibitive":"予約するな","condBa":"予約すれば","condTara":"予約したら","tai":"予約したい","teIru":"予約している","teKudasai":"予約してください"}},{"key":"v:登ります","dictionary":"登る","group":"godan","forms":{"dictionary":"登る","masu":"登ります","masuNeg":"登りません","masuPast":"登りました","masuPastNeg":"登りませんでした","te":"登って","nai":"登らない","naiPast":"登らなかった","ta":"登った","potential":"登れる","passive":"登られる","causative":"登らせる","causativePassive":"登らせられる","volitional":"登ろう","imperative":"登れ","prohibitive":"登るな","condBa":"登れば","condTara":"登ったら","tai":"登りたい","teIru":"登っている","teKudasai":"登ってください"}},{"key":"v:泊まります","dictionary":"泊まる","group":"godan","forms":{"dictionary":"泊まる","masu":"泊まります","masuNeg":"泊まりません","masuPast":"泊まりました","masuPastNeg":"泊まりませんでした","te":"泊まって","nai":"泊まらない","naiPast":"泊まらなかった","ta":"泊まった","potential":"泊まれる","passive":"泊まられる","causative":"泊まらせる","causativePassive":"泊まらせられる","volitional":"泊まろう","imperative":"泊まれ","prohibitive":"泊まるな","condBa":"泊まれば","condTara":"泊まったら","tai":"泊まりたい","teIru":"泊まっている","teKudasai":"泊まってください"}},{"key":"v:掃除します","dictionary":"掃除する","group":"irregular","forms":{"dictionary":"掃除する","masu":"掃除します","masuNeg":"掃除しません","masuPast":"掃除しました","masuPastNeg":"掃除しませんでした","te":"掃除して","nai":"掃除しない","naiPast":"掃除しなかった","ta":"掃除した","potential":"掃除できる","passive":"掃除される","causative":"掃除させる","causativePassive":"掃除させられる","volitional":"掃除しよう","imperative":"掃除しろ","prohibitive":"掃除するな","condBa":"掃除すれば","condTara":"掃除したら","tai":"掃除したい","teIru":"掃除している","teKudasai":"掃除してください"}},{"key":"v:洗濯します","dictionary":"洗濯する","group":"irregular","forms":{"dictionary":"洗濯する","masu":"洗濯します","masuNeg":"洗濯しません","masuPast":"洗濯しました","masuPastNeg":"洗濯しませんでした","te":"洗濯して","nai":"洗濯しない","naiPast":"洗濯しなかった","ta":"洗濯した","potential":"洗濯できる","passive":"洗濯される","causative":"洗濯させる","causativePassive":"洗濯させられる","volitional":"洗濯しよう","imperative":"洗濯しろ","prohibitive":"洗濯するな","condBa":"洗濯すれば","condTara":"洗濯したら","tai":"洗濯したい","teIru":"洗濯している","teKudasai":"洗濯してください"}},{"key":"v:練習します","dictionary":"練習する","group":"irregular","forms":{"dictionary":"練習する","masu":"練習します","masuNeg":"練習しません","masuPast":"練習しました","masuPastNeg":"練習しませんでした","te":"練習して","nai":"練習しない","naiPast":"練習しなかった","ta":"練習した","potential":"練習できる","passive":"練習される","causative":"練習させる","causativePassive":"練習させられる","volitional":"練習しよう","imperative":"練習しろ","prohibitive":"練習するな","condBa":"練習すれば","condTara":"練習したら","tai":"練習したい","teIru":"練習している","teKudasai":"練習してください"}},{"key":"v:なります","dictionary":"なる","group":"godan","forms":{"dictionary":"なる","masu":"なります","masuNeg":"なりません","masuPast":"なりました","masuPastNeg":"なりませんでした","te":"なって","nai":"ならない","naiPast":"ならなかった","ta":"なった","potential":"なれる","passive":"なられる","causative":"ならせる","causativePassive":"ならせられる","volitional":"なろう","imperative":"なれ","prohibitive":"なるな","condBa":"なれば","condTara":"なったら","tai":"なりたい","teIru":"なっている","teKudasai":"なってください"}},{"key":"v:もうすぐ","dictionary":"もうすぐ","group":"godan","forms":{"dictionary":"もうすぐ","masu":"もうすぎます","masuNeg":"もうすぎません","masuPast":"もうすぎました","masuPastNeg":"もうすぎませんでした","te":"もうすいで","nai":"もうすがない","naiPast":"もうすがなかった","ta":"もうすいだ","potential":"もうすげる","passive":"もうすがれる","causative":"もうすがせる","causativePassive":"もうすがせられる","volitional":"もうすごう","imperative":"もうすげ","prohibitive":"もうすぐな","condBa":"もうすげば","condTara":"もうすいだら","tai":"もうすぎたい","teIru":"もうすいでいる","teKudasai":"もうすいでください"}},{"key":"v:要ります","dictionary":"要る","group":"godan","forms":{"dictionary":"要る","masu":"要ります","masuNeg":"要りません","masuPast":"要りました","masuPastNeg":"要りませんでした","te":"要って","nai":"要らない","naiPast":"要らなかった","ta":"要った","potential":"要れる","passive":"要られる","causative":"要らせる","causativePassive":"要らせられる","volitional":"要ろう","imperative":"要れ","prohibitive":"要るな","condBa":"要れば","condTara":"要ったら","tai":"要りたい","teIru":"要っている","teKudasai":"要ってください"}},{"key":"v:調べます","dictionary":"調べる","group":"ichidan","forms":{"dictionary":"調べる","masu":"調べます","masuNeg":"調べません","masuPast":"調べました","masuPastNeg":"調べませんでした","te":"調べて","nai":"調べない","naiPast":"調べなかった","ta":"調べた","potential":"調べられる","passive":"調べられる","causative":"調べさせる","causativePassive":"調べさせられる","volitional":"調べよう","imperative":"調べろ","prohibitive":"調べるな","condBa":"調べれば","condTara":"調べたら","tai":"調べたい","teIru":"調べている","teKudasai":"調べてください"}},{"key":"v:直します","dictionary":"直す","group":"godan","forms":{"dictionary":"直す","masu":"直します","masuNeg":"直しません","masuPast":"直しました","masuPastNeg":"直しませんでした","te":"直して","nai":"直さない","naiPast":"直さなかった","ta":"直した","potential":"直せる","passive":"直される","causative":"直させる","causativePassive":"直させられる","volitional":"直そう","imperative":"直せ","prohibitive":"直すな","condBa":"直せば","condTara":"直したら","tai":"直したい","teIru":"直している","teKudasai":"直してください"}},{"key":"v:修理します","dictionary":"修理する","group":"irregular","forms":{"dictionary":"修理する","masu":"修理します","masuNeg":"修理しません","masuPast":"修理しました","masuPastNeg":"修理しませんでした","te":"修理して","nai":"修理しない","naiPast":"修理しなかった","ta":"修理した","potential":"修理できる","passive":"修理される","causative":"修理させる","causativePassive":"修理させられる","volitional":"修理しよう","imperative":"修理しろ","prohibitive":"修理するな","condBa":"修理すれば","condTara":"修理したら","tai":"修理したい","teIru":"修理している","teKudasai":"修理してください"}},{"key":"v:電話します","dictionary":"電話する","group":"irregular","forms":{"dictionary":"電話する","masu":"電話します","masuNeg":"電話しません","masuPast":"電話しました","masuPastNeg":"電話しませんでした","te":"電話して","nai":"電話しない","naiPast":"電話しなかった","ta":"電話した","potential":"電話できる","passive":"電話される","causative":"電話させる","causativePassive":"電話させられる","volitional":"電話しよう","imperative":"電話しろ","prohibitive":"電話するな","condBa":"電話すれば","condTara":"電話したら","tai":"電話したい","teIru":"電話している","teKudasai":"電話してください"}},{"key":"v:思います","dictionary":"思う","group":"godan","forms":{"dictionary":"思う","masu":"思います","masuNeg":"思いません","masuPast":"思いました","masuPastNeg":"思いませんでした","te":"思って","nai":"思わない","naiPast":"思わなかった","ta":"思った","potential":"思える","passive":"思われる","causative":"思わせる","causativePassive":"思わせられる","volitional":"思おう","imperative":"思え","prohibitive":"思うな","condBa":"思えば","condTara":"思ったら","tai":"思いたい","teIru":"思っている","teKudasai":"思ってください"}},{"key":"v:言います","dictionary":"言う","group":"godan","forms":{"dictionary":"言う","masu":"言います","masuNeg":"言いません","masuPast":"言いました","masuPastNeg":"言いませんでした","te":"言って","nai":"言わない","naiPast":"言わなかった","ta":"言った","potential":"言える","passive":"言われる","causative":"言わせる","causativePassive":"言わせられる","volitional":"言おう","imperative":"言え","prohibitive":"言うな","condBa":"言えば","condTara":"言ったら","tai":"言いたい","teIru":"言っている","teKudasai":"言ってください"}},{"key":"v:足ります","dictionary":"足る","group":"godan","forms":{"dictionary":"足る","masu":"足ります","masuNeg":"足りません","masuPast":"足りました","masuPastNeg":"足りませんでした","te":"足って","nai":"足らない","naiPast":"足らなかった","ta":"足った","potential":"足れる","passive":"足られる","causative":"足らせる","causativePassive":"足らせられる","volitional":"足ろう","imperative":"足れ","prohibitive":"足るな","condBa":"足れば","condTara":"足ったら","tai":"足りたい","teIru":"足っている","teKudasai":"足ってください"}},{"key":"v:勝ちます","dictionary":"勝つ","group":"godan","forms":{"dictionary":"勝つ","masu":"勝ちます","masuNeg":"勝ちません","masuPast":"勝ちました","masuPastNeg":"勝ちませんでした","te":"勝って","nai":"勝たない","naiPast":"勝たなかった","ta":"勝った","potential":"勝てる","passive":"勝たれる","causative":"勝たせる","causativePassive":"勝たせられる","volitional":"勝とう","imperative":"勝て","prohibitive":"勝つな","condBa":"勝てば","condTara":"勝ったら","tai":"勝ちたい","teIru":"勝っている","teKudasai":"勝ってください"}},{"key":"v:負けます","dictionary":"負ける","group":"ichidan","forms":{"dictionary":"負ける","masu":"負けます","masuNeg":"負けません","masuPast":"負けました","masuPastNeg":"負けませんでした","te":"負けて","nai":"負けない","naiPast":"負けなかった","ta":"負けた","potential":"負けられる","passive":"負けられる","causative":"負けさせる","causativePassive":"負けさせられる","volitional":"負けよう","imperative":"負けろ","prohibitive":"負けるな","condBa":"負ければ","condTara":"負けたら","tai":"負けたい","teIru":"負けている","teKudasai":"負けてください"}},{"key":"v:役に立ちます","dictionary":"役に立つ","group":"godan","forms":{"dictionary":"役に立つ","masu":"役に立ちます","masuNeg":"役に立ちません","masuPast":"役に立ちました","masuPastNeg":"役に立ちませんでした","te":"役に立って","nai":"役に立たない","naiPast":"役に立たなかった","ta":"役に立った","potential":"役に立てる","passive":"役に立たれる","causative":"役に立たせる","causativePassive":"役に立たせられる","volitional":"役に立とう","imperative":"役に立て","prohibitive":"役に立つな","condBa":"役に立てば","condTara":"役に立ったら","tai":"役に立ちたい","teIru":"役に立っている","teKudasai":"役に立ってください"}},{"key":"v:着ます","dictionary":"着る","group":"godan","forms":{"dictionary":"着る","masu":"着ります","masuNeg":"着りません","masuPast":"着りました","masuPastNeg":"着りませんでした","te":"着って","nai":"着らない","naiPast":"着らなかった","ta":"着った","potential":"着れる","passive":"着られる","causative":"着らせる","causativePassive":"着らせられる","volitional":"着ろう","imperative":"着れ","prohibitive":"着るな","condBa":"着れば","condTara":"着ったら","tai":"着りたい","teIru":"着っている","teKudasai":"着ってください"}},{"key":"v:はきます","dictionary":"はく","group":"godan","forms":{"dictionary":"はく","masu":"はきます","masuNeg":"はきません","masuPast":"はきました","masuPastNeg":"はきませんでした","te":"はいて","nai":"はかない","naiPast":"はかなかった","ta":"はいた","potential":"はける","passive":"はかれる","causative":"はかせる","causativePassive":"はかせられる","volitional":"はこう","imperative":"はけ","prohibitive":"はくな","condBa":"はけば","condTara":"はいたら","tai":"はきたい","teIru":"はいている","teKudasai":"はいてください"}},{"key":"v:かぶります","dictionary":"かぶる","group":"godan","forms":{"dictionary":"かぶる","masu":"かぶります","masuNeg":"かぶりません","masuPast":"かぶりました","masuPastNeg":"かぶりませんでした","te":"かぶって","nai":"かぶらない","naiPast":"かぶらなかった","ta":"かぶった","potential":"かぶれる","passive":"かぶられる","causative":"かぶらせる","causativePassive":"かぶらせられる","volitional":"かぶろう","imperative":"かぶれ","prohibitive":"かぶるな","condBa":"かぶれば","condTara":"かぶったら","tai":"かぶりたい","teIru":"かぶっている","teKudasai":"かぶってください"}},{"key":"v:かけます","dictionary":"かける","group":"ichidan","forms":{"dictionary":"かける","masu":"かけます","masuNeg":"かけません","masuPast":"かけました","masuPastNeg":"かけませんでした","te":"かけて","nai":"かけない","naiPast":"かけなかった","ta":"かけた","potential":"かけられる","passive":"かけられる","causative":"かけさせる","causativePassive":"かけさせられる","volitional":"かけよう","imperative":"かけろ","prohibitive":"かけるな","condBa":"かければ","condTara":"かけたら","tai":"かけたい","teIru":"かけている","teKudasai":"かけてください"}},{"key":"v:生まれます","dictionary":"生まれる","group":"ichidan","forms":{"dictionary":"生まれる","masu":"生まれます","masuNeg":"生まれません","masuPast":"生まれました","masuPastNeg":"生まれませんでした","te":"生まれて","nai":"生まれない","naiPast":"生まれなかった","ta":"生まれた","potential":"生まれられる","passive":"生まれられる","causative":"生まれさせる","causativePassive":"生まれさせられる","volitional":"生まれよう","imperative":"生まれろ","prohibitive":"生まれるな","condBa":"生まれれば","condTara":"生まれたら","tai":"生まれたい","teIru":"生まれている","teKudasai":"生まれてください"}},{"key":"v:回します","dictionary":"回す","group":"godan","forms":{"dictionary":"回す","masu":"回します","masuNeg":"回しません","masuPast":"回しました","masuPastNeg":"回しませんでした","te":"回して","nai":"回さない","naiPast":"回さなかった","ta":"回した","potential":"回せる","passive":"回される","causative":"回させる","causativePassive":"回させられる","volitional":"回そう","imperative":"回せ","prohibitive":"回すな","condBa":"回せば","condTara":"回したら","tai":"回したい","teIru":"回している","teKudasai":"回してください"}},{"key":"v:引きます","dictionary":"引く","group":"godan","forms":{"dictionary":"引く","masu":"引きます","masuNeg":"引きません","masuPast":"引きました","masuPastNeg":"引きませんでした","te":"引いて","nai":"引かない","naiPast":"引かなかった","ta":"引いた","potential":"引ける","passive":"引かれる","causative":"引かせる","causativePassive":"引かせられる","volitional":"引こう","imperative":"引け","prohibitive":"引くな","condBa":"引けば","condTara":"引いたら","tai":"引きたい","teIru":"引いている","teKudasai":"引いてください"}},{"key":"v:変えます","dictionary":"変える","group":"ichidan","forms":{"dictionary":"変える","masu":"変えます","masuNeg":"変えません","masuPast":"変えました","masuPastNeg":"変えませんでした","te":"変えて","nai":"変えない","naiPast":"変えなかった","ta":"変えた","potential":"変えられる","passive":"変えられる","causative":"変えさせる","causativePassive":"変えさせられる","volitional":"変えよう","imperative":"変えろ","prohibitive":"変えるな","condBa":"変えれば","condTara":"変えたら","tai":"変えたい","teIru":"変えている","teKudasai":"変えてください"}},{"key":"v:触ります","dictionary":"触る","group":"godan","forms":{"dictionary":"触る","masu":"触ります","masuNeg":"触りません","masuPast":"触りました","masuPastNeg":"触りませんでした","te":"触って","nai":"触らない","naiPast":"触らなかった","ta":"触った","potential":"触れる","passive":"触られる","causative":"触らせる","causativePassive":"触らせられる","volitional":"触ろう","imperative":"触れ","prohibitive":"触るな","condBa":"触れば","condTara":"触ったら","tai":"触りたい","teIru":"触っている","teKudasai":"触ってください"}},{"key":"v:動きます","dictionary":"動く","group":"godan","forms":{"dictionary":"動く","masu":"動きます","masuNeg":"動きません","masuPast":"動きました","masuPastNeg":"動きませんでした","te":"動いて","nai":"動かない","naiPast":"動かなかった","ta":"動いた","potential":"動ける","passive":"動かれる","causative":"動かせる","causativePassive":"動かせられる","volitional":"動こう","imperative":"動け","prohibitive":"動くな","condBa":"動けば","condTara":"動いたら","tai":"動きたい","teIru":"動いている","teKudasai":"動いてください"}},{"key":"v:歩きます","dictionary":"歩く","group":"godan","forms":{"dictionary":"歩く","masu":"歩きます","masuNeg":"歩きません","masuPast":"歩きました","masuPastNeg":"歩きませんでした","te":"歩いて","nai":"歩かない","naiPast":"歩かなかった","ta":"歩いた","potential":"歩ける","passive":"歩かれる","causative":"歩かせる","causativePassive":"歩かせられる","volitional":"歩こう","imperative":"歩け","prohibitive":"歩くな","condBa":"歩けば","condTara":"歩いたら","tai":"歩きたい","teIru":"歩いている","teKudasai":"歩いてください"}},{"key":"v:渡ります","dictionary":"渡る","group":"godan","forms":{"dictionary":"渡る","masu":"渡ります","masuNeg":"渡りません","masuPast":"渡りました","masuPastNeg":"渡りませんでした","te":"渡って","nai":"渡らない","naiPast":"渡らなかった","ta":"渡った","potential":"渡れる","passive":"渡られる","causative":"渡らせる","causativePassive":"渡らせられる","volitional":"渡ろう","imperative":"渡れ","prohibitive":"渡るな","condBa":"渡れば","condTara":"渡ったら","tai":"渡りたい","teIru":"渡っている","teKudasai":"渡ってください"}},{"key":"v:気をつけます","dictionary":"気をつける","group":"ichidan","forms":{"dictionary":"気をつける","masu":"気をつけます","masuNeg":"気をつけません","masuPast":"気をつけました","masuPastNeg":"気をつけませんでした","te":"気をつけて","nai":"気をつけない","naiPast":"気をつけなかった","ta":"気をつけた","potential":"気をつけられる","passive":"気をつけられる","causative":"気をつけさせる","causativePassive":"気をつけさせられる","volitional":"気をつけよう","imperative":"気をつけろ","prohibitive":"気をつけるな","condBa":"気をつければ","condTara":"気をつけたら","tai":"気をつけたい","teIru":"気をつけている","teKudasai":"気をつけてください"}},{"key":"v:引っ越します","dictionary":"引っ越す","group":"godan","forms":{"dictionary":"引っ越す","masu":"引っ越します","masuNeg":"引っ越しません","masuPast":"引っ越しました","masuPastNeg":"引っ越しませんでした","te":"引っ越して","nai":"引っ越さない","naiPast":"引っ越さなかった","ta":"引っ越した","potential":"引っ越せる","passive":"引っ越される","causative":"引っ越させる","causativePassive":"引っ越させられる","volitional":"引っ越そう","imperative":"引っ越せ","prohibitive":"引っ越すな","condBa":"引っ越せば","condTara":"引っ越したら","tai":"引っ越したい","teIru":"引っ越している","teKudasai":"引っ越してください"}},{"key":"v:くれます","dictionary":"くれる","group":"ichidan","forms":{"dictionary":"くれる","masu":"くれます","masuNeg":"くれません","masuPast":"くれました","masuPastNeg":"くれませんでした","te":"くれて","nai":"くれない","naiPast":"くれなかった","ta":"くれた","potential":"くれられる","passive":"くれられる","causative":"くれさせる","causativePassive":"くれさせられる","volitional":"くれよう","imperative":"くれろ","prohibitive":"くれるな","condBa":"くれれば","condTara":"くれたら","tai":"くれたい","teIru":"くれている","teKudasai":"くれてください"}},{"key":"v:連れて行きます","dictionary":"連れて行く","group":"godan","forms":{"dictionary":"連れて行く","masu":"連れて行きます","masuNeg":"連れて行きません","masuPast":"連れて行きました","masuPastNeg":"連れて行きませんでした","te":"連れて行いて","nai":"連れて行かない","naiPast":"連れて行かなかった","ta":"連れて行いた","potential":"連れて行ける","passive":"連れて行かれる","causative":"連れて行かせる","causativePassive":"連れて行かせられる","volitional":"連れて行こう","imperative":"連れて行け","prohibitive":"連れて行くな","condBa":"連れて行けば","condTara":"連れて行いたら","tai":"連れて行きたい","teIru":"連れて行いている","teKudasai":"連れて行いてください"}},{"key":"v:紹介します","dictionary":"紹介する","group":"irregular","forms":{"dictionary":"紹介する","masu":"紹介します","masuNeg":"紹介しません","masuPast":"紹介しました","masuPastNeg":"紹介しませんでした","te":"紹介して","nai":"紹介しない","naiPast":"紹介しなかった","ta":"紹介した","potential":"紹介できる","passive":"紹介される","causative":"紹介させる","causativePassive":"紹介させられる","volitional":"紹介しよう","imperative":"紹介しろ","prohibitive":"紹介するな","condBa":"紹介すれば","condTara":"紹介したら","tai":"紹介したい","teIru":"紹介している","teKudasai":"紹介してください"}},{"key":"v:案内します","dictionary":"案内する","group":"irregular","forms":{"dictionary":"案内する","masu":"案内します","masuNeg":"案内しません","masuPast":"案内しました","masuPastNeg":"案内しませんでした","te":"案内して","nai":"案内しない","naiPast":"案内しなかった","ta":"案内した","potential":"案内できる","passive":"案内される","causative":"案内させる","causativePassive":"案内させられる","volitional":"案内しよう","imperative":"案内しろ","prohibitive":"案内するな","condBa":"案内すれば","condTara":"案内したら","tai":"案内したい","teIru":"案内している","teKudasai":"案内してください"}},{"key":"v:説明します","dictionary":"説明する","group":"irregular","forms":{"dictionary":"説明する","masu":"説明します","masuNeg":"説明しません","masuPast":"説明しました","masuPastNeg":"説明しませんでした","te":"説明して","nai":"説明しない","naiPast":"説明しなかった","ta":"説明した","potential":"説明できる","passive":"説明される","causative":"説明させる","causativePassive":"説明させられる","volitional":"説明しよう","imperative":"説明しろ","prohibitive":"説明するな","condBa":"説明すれば","condTara":"説明したら","tai":"説明したい","teIru":"説明している","teKudasai":"説明してください"}},{"key":"v:いれます","dictionary":"いれる","group":"ichidan","forms":{"dictionary":"いれる","masu":"いれます","masuNeg":"いれません","masuPast":"いれました","masuPastNeg":"いれませんでした","te":"いれて","nai":"いれない","naiPast":"いれなかった","ta":"いれた","potential":"いれられる","passive":"いれられる","causative":"いれさせる","causativePassive":"いれさせられる","volitional":"いれよう","imperative":"いれろ","prohibitive":"いれるな","condBa":"いれれば","condTara":"いれたら","tai":"いれたい","teIru":"いれている","teKudasai":"いれてください"}},{"key":"v:考えます","dictionary":"考える","group":"ichidan","forms":{"dictionary":"考える","masu":"考えます","masuNeg":"考えません","masuPast":"考えました","masuPastNeg":"考えませんでした","te":"考えて","nai":"考えない","naiPast":"考えなかった","ta":"考えた","potential":"考えられる","passive":"考えられる","causative":"考えさせる","causativePassive":"考えさせられる","volitional":"考えよう","imperative":"考えろ","prohibitive":"考えるな","condBa":"考えれば","condTara":"考えたら","tai":"考えたい","teIru":"考えている","teKudasai":"考えてください"}},{"key":"v:着きます","dictionary":"着く","group":"godan","forms":{"dictionary":"着く","masu":"着きます","masuNeg":"着きません","masuPast":"着きました","masuPastNeg":"着きませんでした","te":"着いて","nai":"着かない","naiPast":"着かなかった","ta":"着いた","potential":"着ける","passive":"着かれる","causative":"着かせる","causativePassive":"着かせられる","volitional":"着こう","imperative":"着け","prohibitive":"着くな","condBa":"着けば","condTara":"着いたら","tai":"着きたい","teIru":"着いている","teKudasai":"着いてください"}},{"key":"v:留学します","dictionary":"留学する","group":"irregular","forms":{"dictionary":"留学する","masu":"留学します","masuNeg":"留学しません","masuPast":"留学しました","masuPastNeg":"留学しませんでした","te":"留学して","nai":"留学しない","naiPast":"留学しなかった","ta":"留学した","potential":"留学できる","passive":"留学される","causative":"留学させる","causativePassive":"留学させられる","volitional":"留学しよう","imperative":"留学しろ","prohibitive":"留学するな","condBa":"留学すれば","condTara":"留学したら","tai":"留学したい","teIru":"留学している","teKudasai":"留学してください"}},{"key":"v:一杯飲みましょう","dictionary":"一杯飲みましょう","group":"godan","forms":{"dictionary":"一杯飲みましょう","masu":"一杯飲みましょいます","masuNeg":"一杯飲みましょいません","masuPast":"一杯飲みましょいました","masuPastNeg":"一杯飲みましょいませんでした","te":"一杯飲みましょって","nai":"一杯飲みましょわない","naiPast":"一杯飲みましょわなかった","ta":"一杯飲みましょった","potential":"一杯飲みましょえる","passive":"一杯飲みましょわれる","causative":"一杯飲みましょわせる","causativePassive":"一杯飲みましょわせられる","volitional":"一杯飲みましょおう","imperative":"一杯飲みましょえ","prohibitive":"一杯飲みましょうな","condBa":"一杯飲みましょえば","condTara":"一杯飲みましょったら","tai":"一杯飲みましょいたい","teIru":"一杯飲みましょっている","teKudasai":"一杯飲みましょってください"}},{"key":"v:頑張ります","dictionary":"頑張る","group":"godan","forms":{"dictionary":"頑張る","masu":"頑張ります","masuNeg":"頑張りません","masuPast":"頑張りました","masuPastNeg":"頑張りませんでした","te":"頑張って","nai":"頑張らない","naiPast":"頑張らなかった","ta":"頑張った","potential":"頑張れる","passive":"頑張られる","causative":"頑張らせる","causativePassive":"頑張らせられる","volitional":"頑張ろう","imperative":"頑張れ","prohibitive":"頑張るな","condBa":"頑張れば","condTara":"頑張ったら","tai":"頑張りたい","teIru":"頑張っている","teKudasai":"頑張ってください"}},{"key":"v:見ます、診ます","dictionary":"見る","group":"godan","forms":{"dictionary":"見る","masu":"見ります","masuNeg":"見りません","masuPast":"見りました","masuPastNeg":"見りませんでした","te":"見って","nai":"見らない","naiPast":"見らなかった","ta":"見った","potential":"見れる","passive":"見られる","causative":"見らせる","causativePassive":"見らせられる","volitional":"見ろう","imperative":"見れ","prohibitive":"見るな","condBa":"見れば","condTara":"見ったら","tai":"見りたい","teIru":"見っている","teKudasai":"見ってください"}},{"key":"v:探します、捜します","dictionary":"探す","group":"godan","forms":{"dictionary":"探す","masu":"探します","masuNeg":"探しません","masuPast":"探しました","masuPastNeg":"探しませんでした","te":"探して","nai":"探さない","naiPast":"探さなかった","ta":"探した","potential":"探せる","passive":"探される","causative":"探させる","causativePassive":"探させられる","volitional":"探そう","imperative":"探せ","prohibitive":"探すな","condBa":"探せば","condTara":"探したら","tai":"探したい","teIru":"探している","teKudasai":"探してください"}},{"key":"v:遅れます","dictionary":"遅れる","group":"ichidan","forms":{"dictionary":"遅れる","masu":"遅れます","masuNeg":"遅れません","masuPast":"遅れました","masuPastNeg":"遅れませんでした","te":"遅れて","nai":"遅れない","naiPast":"遅れなかった","ta":"遅れた","potential":"遅れられる","passive":"遅れられる","causative":"遅れさせる","causativePassive":"遅れさせられる","volitional":"遅れよう","imperative":"遅れろ","prohibitive":"遅れるな","condBa":"遅れれば","condTara":"遅れたら","tai":"遅れたい","teIru":"遅れている","teKudasai":"遅れてください"}},{"key":"v:間に合います","dictionary":"間に合う","group":"godan","forms":{"dictionary":"間に合う","masu":"間に合います","masuNeg":"間に合いません","masuPast":"間に合いました","masuPastNeg":"間に合いませんでした","te":"間に合って","nai":"間に合わない","naiPast":"間に合わなかった","ta":"間に合った","potential":"間に合える","passive":"間に合われる","causative":"間に合わせる","causativePassive":"間に合わせられる","volitional":"間に合おう","imperative":"間に合え","prohibitive":"間に合うな","condBa":"間に合えば","condTara":"間に合ったら","tai":"間に合いたい","teIru":"間に合っている","teKudasai":"間に合ってください"}},{"key":"v:やります","dictionary":"やる","group":"godan","forms":{"dictionary":"やる","masu":"やります","masuNeg":"やりません","masuPast":"やりました","masuPastNeg":"やりませんでした","te":"やって","nai":"やらない","naiPast":"やらなかった","ta":"やった","potential":"やれる","passive":"やられる","causative":"やらせる","causativePassive":"やらせられる","volitional":"やろう","imperative":"やれ","prohibitive":"やるな","condBa":"やれば","condTara":"やったら","tai":"やりたい","teIru":"やっている","teKudasai":"やってください"}},{"key":"v:拾います","dictionary":"拾う","group":"godan","forms":{"dictionary":"拾う","masu":"拾います","masuNeg":"拾いません","masuPast":"拾いました","masuPastNeg":"拾いませんでした","te":"拾って","nai":"拾わない","naiPast":"拾わなかった","ta":"拾った","potential":"拾える","passive":"拾われる","causative":"拾わせる","causativePassive":"拾わせられる","volitional":"拾おう","imperative":"拾え","prohibitive":"拾うな","condBa":"拾えば","condTara":"拾ったら","tai":"拾いたい","teIru":"拾っている","teKudasai":"拾ってください"}},{"key":"v:連絡します","dictionary":"連絡する","group":"irregular","forms":{"dictionary":"連絡する","masu":"連絡します","masuNeg":"連絡しません","masuPast":"連絡しました","masuPastNeg":"連絡しませんでした","te":"連絡して","nai":"連絡しない","naiPast":"連絡しなかった","ta":"連絡した","potential":"連絡できる","passive":"連絡される","causative":"連絡させる","causativePassive":"連絡させられる","volitional":"連絡しよう","imperative":"連絡しろ","prohibitive":"連絡するな","condBa":"連絡すれば","condTara":"連絡したら","tai":"連絡したい","teIru":"連絡している","teKudasai":"連絡してください"}},{"key":"v:片づきます","dictionary":"片づく","group":"godan","forms":{"dictionary":"片づく","masu":"片づきます","masuNeg":"片づきません","masuPast":"片づきました","masuPastNeg":"片づきませんでした","te":"片づいて","nai":"片づかない","naiPast":"片づかなかった","ta":"片づいた","potential":"片づける","passive":"片づかれる","causative":"片づかせる","causativePassive":"片づかせられる","volitional":"片づこう","imperative":"片づけ","prohibitive":"片づくな","condBa":"片づけば","condTara":"片づいたら","tai":"片づきたい","teIru":"片づいている","teKudasai":"片づいてください"}},{"key":"v:違います","dictionary":"違う","group":"godan","forms":{"dictionary":"違う","masu":"違います","masuNeg":"違いません","masuPast":"違いました","masuPastNeg":"違いませんでした","te":"違って","nai":"違わない","naiPast":"違わなかった","ta":"違った","potential":"違える","passive":"違われる","causative":"違わせる","causativePassive":"違わせられる","volitional":"違おう","imperative":"違え","prohibitive":"違うな","condBa":"違えば","condTara":"違ったら","tai":"違いたい","teIru":"違っている","teKudasai":"違ってください"}},{"key":"v:飼います","dictionary":"飼う","group":"godan","forms":{"dictionary":"飼う","masu":"飼います","masuNeg":"飼いません","masuPast":"飼いました","masuPastNeg":"飼いませんでした","te":"飼って","nai":"飼わない","naiPast":"飼わなかった","ta":"飼った","potential":"飼える","passive":"飼われる","causative":"飼わせる","causativePassive":"飼わせられる","volitional":"飼おう","imperative":"飼え","prohibitive":"飼うな","condBa":"飼えば","condTara":"飼ったら","tai":"飼いたい","teIru":"飼っている","teKudasai":"飼ってください"}},{"key":"v:走ります","dictionary":"走る","group":"godan","forms":{"dictionary":"走る","masu":"走ります","masuNeg":"走りません","masuPast":"走りました","masuPastNeg":"走りませんでした","te":"走って","nai":"走らない","naiPast":"走らなかった","ta":"走った","potential":"走れる","passive":"走られる","causative":"走らせる","causativePassive":"走らせられる","volitional":"走ろう","imperative":"走れ","prohibitive":"走るな","condBa":"走れば","condTara":"走ったら","tai":"走りたい","teIru":"走っている","teKudasai":"走ってください"}},{"key":"v:見えます","dictionary":"見える","group":"ichidan","forms":{"dictionary":"見える","masu":"見えます","masuNeg":"見えません","masuPast":"見えました","masuPastNeg":"見えませんでした","te":"見えて","nai":"見えない","naiPast":"見えなかった","ta":"見えた","potential":"見えられる","passive":"見えられる","causative":"見えさせる","causativePassive":"見えさせられる","volitional":"見えよう","imperative":"見えろ","prohibitive":"見えるな","condBa":"見えれば","condTara":"見えたら","tai":"見えたい","teIru":"見えている","teKudasai":"見えてください"}},{"key":"v:聞こえます","dictionary":"聞こえる","group":"ichidan","forms":{"dictionary":"聞こえる","masu":"聞こえます","masuNeg":"聞こえません","masuPast":"聞こえました","masuPastNeg":"聞こえませんでした","te":"聞こえて","nai":"聞こえない","naiPast":"聞こえなかった","ta":"聞こえた","potential":"聞こえられる","passive":"聞こえられる","causative":"聞こえさせる","causativePassive":"聞こえさせられる","volitional":"聞こえよう","imperative":"聞こえろ","prohibitive":"聞こえるな","condBa":"聞こえれば","condTara":"聞こえたら","tai":"聞こえたい","teIru":"聞こえている","teKudasai":"聞こえてください"}},{"key":"v:開きます","dictionary":"開く","group":"godan","forms":{"dictionary":"開く","masu":"開きます","masuNeg":"開きません","masuPast":"開きました","masuPastNeg":"開きませんでした","te":"開いて","nai":"開かない","naiPast":"開かなかった","ta":"開いた","potential":"開ける","passive":"開かれる","causative":"開かせる","causativePassive":"開かせられる","volitional":"開こう","imperative":"開け","prohibitive":"開くな","condBa":"開けば","condTara":"開いたら","tai":"開きたい","teIru":"開いている","teKudasai":"開いてください"}},{"key":"v:建てます","dictionary":"建てる","group":"ichidan","forms":{"dictionary":"建てる","masu":"建てます","masuNeg":"建てません","masuPast":"建てました","masuPastNeg":"建てませんでした","te":"建てて","nai":"建てない","naiPast":"建てなかった","ta":"建てた","potential":"建てられる","passive":"建てられる","causative":"建てさせる","causativePassive":"建てさせられる","volitional":"建てよう","imperative":"建てろ","prohibitive":"建てるな","condBa":"建てれば","condTara":"建てたら","tai":"建てたい","teIru":"建てている","teKudasai":"建ててください"}},{"key":"v:付けます","dictionary":"付ける","group":"ichidan","forms":{"dictionary":"付ける","masu":"付けます","masuNeg":"付けません","masuPast":"付けました","masuPastNeg":"付けませんでした","te":"付けて","nai":"付けない","naiPast":"付けなかった","ta":"付けた","potential":"付けられる","passive":"付けられる","causative":"付けさせる","causativePassive":"付けさせられる","volitional":"付けよう","imperative":"付けろ","prohibitive":"付けるな","condBa":"付ければ","condTara":"付けたら","tai":"付けたい","teIru":"付けている","teKudasai":"付けてください"}},{"key":"v:飛びます","dictionary":"飛ぶ","group":"godan","forms":{"dictionary":"飛ぶ","masu":"飛びます","masuNeg":"飛びません","masuPast":"飛びました","masuPastNeg":"飛びませんでした","te":"飛んで","nai":"飛ばない","naiPast":"飛ばなかった","ta":"飛んだ","potential":"飛べる","passive":"飛ばれる","causative":"飛ばせる","causativePassive":"飛ばせられる","volitional":"飛ぼう","imperative":"飛べ","prohibitive":"飛ぶな","condBa":"飛べば","condTara":"飛んだら","tai":"飛びたい","teIru":"飛んでいる","teKudasai":"飛んでください"}},{"key":"v:売れます","dictionary":"売れる","group":"ichidan","forms":{"dictionary":"売れる","masu":"売れます","masuNeg":"売れません","masuPast":"売れました","masuPastNeg":"売れませんでした","te":"売れて","nai":"売れない","naiPast":"売れなかった","ta":"売れた","potential":"売れられる","passive":"売れられる","causative":"売れさせる","causativePassive":"売れさせられる","volitional":"売れよう","imperative":"売れろ","prohibitive":"売れるな","condBa":"売れれば","condTara":"売れたら","tai":"売れたい","teIru":"売れている","teKudasai":"売れてください"}},{"key":"v:踊ります","dictionary":"踊る","group":"godan","forms":{"dictionary":"踊る","masu":"踊ります","masuNeg":"踊りません","masuPast":"踊りました","masuPastNeg":"踊りませんでした","te":"踊って","nai":"踊らない","naiPast":"踊らなかった","ta":"踊った","potential":"踊れる","passive":"踊られる","causative":"踊らせる","causativePassive":"踊らせられる","volitional":"踊ろう","imperative":"踊れ","prohibitive":"踊るな","condBa":"踊れば","condTara":"踊ったら","tai":"踊りたい","teIru":"踊っている","teKudasai":"踊ってください"}},{"key":"v:かみます","dictionary":"かむ","group":"godan","forms":{"dictionary":"かむ","masu":"かみます","masuNeg":"かみません","masuPast":"かみました","masuPastNeg":"かみませんでした","te":"かんで","nai":"かまない","naiPast":"かまなかった","ta":"かんだ","potential":"かめる","passive":"かまれる","causative":"かませる","causativePassive":"かませられる","volitional":"かもう","imperative":"かめ","prohibitive":"かむな","condBa":"かめば","condTara":"かんだら","tai":"かみたい","teIru":"かんでいる","teKudasai":"かんでください"}},{"key":"v:選びます","dictionary":"選ぶ","group":"godan","forms":{"dictionary":"選ぶ","masu":"選びます","masuNeg":"選びません","masuPast":"選びました","masuPastNeg":"選びませんでした","te":"選んで","nai":"選ばない","naiPast":"選ばなかった","ta":"選んだ","potential":"選べる","passive":"選ばれる","causative":"選ばせる","causativePassive":"選ばせられる","volitional":"選ぼう","imperative":"選べ","prohibitive":"選ぶな","condBa":"選べば","condTara":"選んだら","tai":"選びたい","teIru":"選んでいる","teKudasai":"選んでください"}},{"key":"v:通います","dictionary":"通う","group":"godan","forms":{"dictionary":"通う","masu":"通います","masuNeg":"通いません","masuPast":"通いました","masuPastNeg":"通いませんでした","te":"通って","nai":"通わない","naiPast":"通わなかった","ta":"通った","potential":"通える","passive":"通われる","causative":"通わせる","causativePassive":"通わせられる","volitional":"通おう","imperative":"通え","prohibitive":"通うな","condBa":"通えば","condTara":"通ったら","tai":"通いたい","teIru":"通っている","teKudasai":"通ってください"}},{"key":"v:メモします","dictionary":"メモする","group":"irregular","forms":{"dictionary":"メモする","masu":"メモします","masuNeg":"メモしません","masuPast":"メモしました","masuPastNeg":"メモしませんでした","te":"メモして","nai":"メモしない","naiPast":"メモしなかった","ta":"メモした","potential":"メモできる","passive":"メモされる","causative":"メモさせる","causativePassive":"メモさせられる","volitional":"メモしよう","imperative":"メモしろ","prohibitive":"メモするな","condBa":"メモすれば","condTara":"メモしたら","tai":"メモしたい","teIru":"メモしている","teKudasai":"メモしてください"}},{"key":"v:参加します","dictionary":"参加する","group":"irregular","forms":{"dictionary":"参加する","masu":"参加します","masuNeg":"参加しません","masuPast":"参加しました","masuPastNeg":"参加しませんでした","te":"参加して","nai":"参加しない","naiPast":"参加しなかった","ta":"参加した","potential":"参加できる","passive":"参加される","causative":"参加させる","causativePassive":"参加させられる","volitional":"参加しよう","imperative":"参加しろ","prohibitive":"参加するな","condBa":"参加すれば","condTara":"参加したら","tai":"参加したい","teIru":"参加している","teKudasai":"参加してください"}},{"key":"v:誘います","dictionary":"誘う","group":"godan","forms":{"dictionary":"誘う","masu":"誘います","masuNeg":"誘いません","masuPast":"誘いました","masuPastNeg":"誘いませんでした","te":"誘って","nai":"誘わない","naiPast":"誘わなかった","ta":"誘った","potential":"誘える","passive":"誘われる","causative":"誘わせる","causativePassive":"誘わせられる","volitional":"誘おう","imperative":"誘え","prohibitive":"誘うな","condBa":"誘えば","condTara":"誘ったら","tai":"誘いたい","teIru":"誘っている","teKudasai":"誘ってください"}},{"key":"v:閉まります","dictionary":"閉まる","group":"godan","forms":{"dictionary":"閉まる","masu":"閉まります","masuNeg":"閉まりません","masuPast":"閉まりました","masuPastNeg":"閉まりませんでした","te":"閉まって","nai":"閉まらない","naiPast":"閉まらなかった","ta":"閉まった","potential":"閉まれる","passive":"閉まられる","causative":"閉まらせる","causativePassive":"閉まらせられる","volitional":"閉まろう","imperative":"閉まれ","prohibitive":"閉まるな","condBa":"閉まれば","condTara":"閉まったら","tai":"閉まりたい","teIru":"閉まっている","teKudasai":"閉まってください"}},{"key":"v:つきます","dictionary":"つく","group":"godan","forms":{"dictionary":"つく","masu":"つきます","masuNeg":"つきません","masuPast":"つきました","masuPastNeg":"つきませんでした","te":"ついて","nai":"つかない","naiPast":"つかなかった","ta":"ついた","potential":"つける","passive":"つかれる","causative":"つかせる","causativePassive":"つかせられる","volitional":"つこう","imperative":"つけ","prohibitive":"つくな","condBa":"つけば","condTara":"ついたら","tai":"つきたい","teIru":"ついている","teKudasai":"ついてください"}},{"key":"v:消えます","dictionary":"消える","group":"ichidan","forms":{"dictionary":"消える","masu":"消えます","masuNeg":"消えません","masuPast":"消えました","masuPastNeg":"消えませんでした","te":"消えて","nai":"消えない","naiPast":"消えなかった","ta":"消えた","potential":"消えられる","passive":"消えられる","causative":"消えさせる","causativePassive":"消えさせられる","volitional":"消えよう","imperative":"消えろ","prohibitive":"消えるな","condBa":"消えれば","condTara":"消えたら","tai":"消えたい","teIru":"消えている","teKudasai":"消えてください"}},{"key":"v:込みます","dictionary":"込む","group":"godan","forms":{"dictionary":"込む","masu":"込みます","masuNeg":"込みません","masuPast":"込みました","masuPastNeg":"込みませんでした","te":"込んで","nai":"込まない","naiPast":"込まなかった","ta":"込んだ","potential":"込める","passive":"込まれる","causative":"込ませる","causativePassive":"込ませられる","volitional":"込もう","imperative":"込め","prohibitive":"込むな","condBa":"込めば","condTara":"込んだら","tai":"込みたい","teIru":"込んでいる","teKudasai":"込んでください"}},{"key":"v:すきます","dictionary":"すく","group":"godan","forms":{"dictionary":"すく","masu":"すきます","masuNeg":"すきません","masuPast":"すきました","masuPastNeg":"すきませんでした","te":"すいて","nai":"すかない","naiPast":"すかなかった","ta":"すいた","potential":"すける","passive":"すかれる","causative":"すかせる","causativePassive":"すかせられる","volitional":"すこう","imperative":"すけ","prohibitive":"すくな","condBa":"すけば","condTara":"すいたら","tai":"すきたい","teIru":"すいている","teKudasai":"すいてください"}},{"key":"v:壊れます","dictionary":"壊れる","group":"ichidan","forms":{"dictionary":"壊れる","masu":"壊れます","masuNeg":"壊れません","masuPast":"壊れました","masuPastNeg":"壊れませんでした","te":"壊れて","nai":"壊れない","naiPast":"壊れなかった","ta":"壊れた","potential":"壊れられる","passive":"壊れられる","causative":"壊れさせる","causativePassive":"壊れさせられる","volitional":"壊れよう","imperative":"壊れろ","prohibitive":"壊れるな","condBa":"壊れれば","condTara":"壊れたら","tai":"壊れたい","teIru":"壊れている","teKudasai":"壊れてください"}},{"key":"v:割れます","dictionary":"割れる","group":"ichidan","forms":{"dictionary":"割れる","masu":"割れます","masuNeg":"割れません","masuPast":"割れました","masuPastNeg":"割れませんでした","te":"割れて","nai":"割れない","naiPast":"割れなかった","ta":"割れた","potential":"割れられる","passive":"割れられる","causative":"割れさせる","causativePassive":"割れさせられる","volitional":"割れよう","imperative":"割れろ","prohibitive":"割れるな","condBa":"割れれば","condTara":"割れたら","tai":"割れたい","teIru":"割れている","teKudasai":"割れてください"}},{"key":"v:折れます","dictionary":"折れる","group":"ichidan","forms":{"dictionary":"折れる","masu":"折れます","masuNeg":"折れません","masuPast":"折れました","masuPastNeg":"折れませんでした","te":"折れて","nai":"折れない","naiPast":"折れなかった","ta":"折れた","potential":"折れられる","passive":"折れられる","causative":"折れさせる","causativePassive":"折れさせられる","volitional":"折れよう","imperative":"折れろ","prohibitive":"折れるな","condBa":"折れれば","condTara":"折れたら","tai":"折れたい","teIru":"折れている","teKudasai":"折れてください"}},{"key":"v:破れます","dictionary":"破れる","group":"ichidan","forms":{"dictionary":"破れる","masu":"破れます","masuNeg":"破れません","masuPast":"破れました","masuPastNeg":"破れませんでした","te":"破れて","nai":"破れない","naiPast":"破れなかった","ta":"破れた","potential":"破れられる","passive":"破れられる","causative":"破れさせる","causativePassive":"破れさせられる","volitional":"破れよう","imperative":"破れろ","prohibitive":"破れるな","condBa":"破れれば","condTara":"破れたら","tai":"破れたい","teIru":"破れている","teKudasai":"破れてください"}},{"key":"v:外れます","dictionary":"外れる","group":"ichidan","forms":{"dictionary":"外れる","masu":"外れます","masuNeg":"外れません","masuPast":"外れました","masuPastNeg":"外れませんでした","te":"外れて","nai":"外れない","naiPast":"外れなかった","ta":"外れた","potential":"外れられる","passive":"外れられる","causative":"外れさせる","causativePassive":"外れさせられる","volitional":"外れよう","imperative":"外れろ","prohibitive":"外れるな","condBa":"外れれば","condTara":"外れたら","tai":"外れたい","teIru":"外れている","teKudasai":"外れてください"}},{"key":"v:止まります","dictionary":"止まる","group":"godan","forms":{"dictionary":"止まる","masu":"止まります","masuNeg":"止まりません","masuPast":"止まりました","masuPastNeg":"止まりませんでした","te":"止まって","nai":"止まらない","naiPast":"止まらなかった","ta":"止まった","potential":"止まれる","passive":"止まられる","causative":"止まらせる","causativePassive":"止まらせられる","volitional":"止まろう","imperative":"止まれ","prohibitive":"止まるな","condBa":"止まれば","condTara":"止まったら","tai":"止まりたい","teIru":"止まっている","teKudasai":"止まってください"}},{"key":"v:まちがえます","dictionary":"まちがえる","group":"ichidan","forms":{"dictionary":"まちがえる","masu":"まちがえます","masuNeg":"まちがえません","masuPast":"まちがえました","masuPastNeg":"まちがえませんでした","te":"まちがえて","nai":"まちがえない","naiPast":"まちがえなかった","ta":"まちがえた","potential":"まちがえられる","passive":"まちがえられる","causative":"まちがえさせる","causativePassive":"まちがえさせられる","volitional":"まちがえよう","imperative":"まちがえろ","prohibitive":"まちがえるな","condBa":"まちがえれば","condTara":"まちがえたら","tai":"まちがえたい","teIru":"まちがえている","teKudasai":"まちがえてください"}},{"key":"v:落とします","dictionary":"落とす","group":"godan","forms":{"dictionary":"落とす","masu":"落とします","masuNeg":"落としません","masuPast":"落としました","masuPastNeg":"落としませんでした","te":"落として","nai":"落とさない","naiPast":"落とさなかった","ta":"落とした","potential":"落とせる","passive":"落とされる","causative":"落とさせる","causativePassive":"落とさせられる","volitional":"落とそう","imperative":"落とせ","prohibitive":"落とすな","condBa":"落とせば","condTara":"落としたら","tai":"落としたい","teIru":"落としている","teKudasai":"落としてください"}},{"key":"v:掛かります","dictionary":"掛かる","group":"godan","forms":{"dictionary":"掛かる","masu":"掛かります","masuNeg":"掛かりません","masuPast":"掛かりました","masuPastNeg":"掛かりませんでした","te":"掛かって","nai":"掛からない","naiPast":"掛からなかった","ta":"掛かった","potential":"掛かれる","passive":"掛かられる","causative":"掛からせる","causativePassive":"掛からせられる","volitional":"掛かろう","imperative":"掛かれ","prohibitive":"掛かるな","condBa":"掛かれば","condTara":"掛かったら","tai":"掛かりたい","teIru":"掛かっている","teKudasai":"掛かってください"}},{"key":"v:ふきます","dictionary":"ふく","group":"godan","forms":{"dictionary":"ふく","masu":"ふきます","masuNeg":"ふきません","masuPast":"ふきました","masuPastNeg":"ふきませんでした","te":"ふいて","nai":"ふかない","naiPast":"ふかなかった","ta":"ふいた","potential":"ふける","passive":"ふかれる","causative":"ふかせる","causativePassive":"ふかせられる","volitional":"ふこう","imperative":"ふけ","prohibitive":"ふくな","condBa":"ふけば","condTara":"ふいたら","tai":"ふきたい","teIru":"ふいている","teKudasai":"ふいてください"}},{"key":"v:取り替えます","dictionary":"取り替える","group":"ichidan","forms":{"dictionary":"取り替える","masu":"取り替えます","masuNeg":"取り替えません","masuPast":"取り替えました","masuPastNeg":"取り替えませんでした","te":"取り替えて","nai":"取り替えない","naiPast":"取り替えなかった","ta":"取り替えた","potential":"取り替えられる","passive":"取り替えられる","causative":"取り替えさせる","causativePassive":"取り替えさせられる","volitional":"取り替えよう","imperative":"取り替えろ","prohibitive":"取り替えるな","condBa":"取り替えれば","condTara":"取り替えたら","tai":"取り替えたい","teIru":"取り替えている","teKudasai":"取り替えてください"}},{"key":"v:片づけます","dictionary":"片づける","group":"ichidan","forms":{"dictionary":"片づける","masu":"片づけます","masuNeg":"片づけません","masuPast":"片づけました","masuPastNeg":"片づけませんでした","te":"片づけて","nai":"片づけない","naiPast":"片づけなかった","ta":"片づけた","potential":"片づけられる","passive":"片づけられる","causative":"片づけさせる","causativePassive":"片づけさせられる","volitional":"片づけよう","imperative":"片づけろ","prohibitive":"片づけるな","condBa":"片づければ","condTara":"片づけたら","tai":"片づけたい","teIru":"片づけている","teKudasai":"片づけてください"}},{"key":"v:指します","dictionary":"指す","group":"godan","forms":{"dictionary":"指す","masu":"指します","masuNeg":"指しません","masuPast":"指しました","masuPastNeg":"指しませんでした","te":"指して","nai":"指さない","naiPast":"指さなかった","ta":"指した","potential":"指せる","passive":"指される","causative":"指させる","causativePassive":"指させられる","volitional":"指そう","imperative":"指せ","prohibitive":"指すな","condBa":"指せば","condTara":"指したら","tai":"指したい","teIru":"指している","teKudasai":"指してください"}},{"key":"v:倒れます","dictionary":"倒れる","group":"ichidan","forms":{"dictionary":"倒れる","masu":"倒れます","masuNeg":"倒れません","masuPast":"倒れました","masuPastNeg":"倒れませんでした","te":"倒れて","nai":"倒れない","naiPast":"倒れなかった","ta":"倒れた","potential":"倒れられる","passive":"倒れられる","causative":"倒れさせる","causativePassive":"倒れさせられる","volitional":"倒れよう","imperative":"倒れろ","prohibitive":"倒れるな","condBa":"倒れれば","condTara":"倒れたら","tai":"倒れたい","teIru":"倒れている","teKudasai":"倒れてください"}},{"key":"v:はります","dictionary":"はる","group":"godan","forms":{"dictionary":"はる","masu":"はります","masuNeg":"はりません","masuPast":"はりました","masuPastNeg":"はりませんでした","te":"はって","nai":"はらない","naiPast":"はらなかった","ta":"はった","potential":"はれる","passive":"はられる","causative":"はらせる","causativePassive":"はらせられる","volitional":"はろう","imperative":"はれ","prohibitive":"はるな","condBa":"はれば","condTara":"はったら","tai":"はりたい","teIru":"はっている","teKudasai":"はってください"}},{"key":"v:掛けます","dictionary":"掛ける","group":"ichidan","forms":{"dictionary":"掛ける","masu":"掛けます","masuNeg":"掛けません","masuPast":"掛けました","masuPastNeg":"掛けませんでした","te":"掛けて","nai":"掛けない","naiPast":"掛けなかった","ta":"掛けた","potential":"掛けられる","passive":"掛けられる","causative":"掛けさせる","causativePassive":"掛けさせられる","volitional":"掛けよう","imperative":"掛けろ","prohibitive":"掛けるな","condBa":"掛ければ","condTara":"掛けたら","tai":"掛けたい","teIru":"掛けている","teKudasai":"掛けてください"}},{"key":"v:飾ります","dictionary":"飾る","group":"godan","forms":{"dictionary":"飾る","masu":"飾ります","masuNeg":"飾りません","masuPast":"飾りました","masuPastNeg":"飾りませんでした","te":"飾って","nai":"飾らない","naiPast":"飾らなかった","ta":"飾った","potential":"飾れる","passive":"飾られる","causative":"飾らせる","causativePassive":"飾らせられる","volitional":"飾ろう","imperative":"飾れ","prohibitive":"飾るな","condBa":"飾れば","condTara":"飾ったら","tai":"飾りたい","teIru":"飾っている","teKudasai":"飾ってください"}},{"key":"v:並べます","dictionary":"並べる","group":"ichidan","forms":{"dictionary":"並べる","masu":"並べます","masuNeg":"並べません","masuPast":"並べました","masuPastNeg":"並べませんでした","te":"並べて","nai":"並べない","naiPast":"並べなかった","ta":"並べた","potential":"並べられる","passive":"並べられる","causative":"並べさせる","causativePassive":"並べさせられる","volitional":"並べよう","imperative":"並べろ","prohibitive":"並べるな","condBa":"並べれば","condTara":"並べたら","tai":"並べたい","teIru":"並べている","teKudasai":"並べてください"}},{"key":"v:植えます","dictionary":"植える","group":"ichidan","forms":{"dictionary":"植える","masu":"植えます","masuNeg":"植えません","masuPast":"植えました","masuPastNeg":"植えませんでした","te":"植えて","nai":"植えない","naiPast":"植えなかった","ta":"植えた","potential":"植えられる","passive":"植えられる","causative":"植えさせる","causativePassive":"植えさせられる","volitional":"植えよう","imperative":"植えろ","prohibitive":"植えるな","condBa":"植えれば","condTara":"植えたら","tai":"植えたい","teIru":"植えている","teKudasai":"植えてください"}},{"key":"v:戻します","dictionary":"戻す","group":"godan","forms":{"dictionary":"戻す","masu":"戻します","masuNeg":"戻しません","masuPast":"戻しました","masuPastNeg":"戻しませんでした","te":"戻して","nai":"戻さない","naiPast":"戻さなかった","ta":"戻した","potential":"戻せる","passive":"戻される","causative":"戻させる","causativePassive":"戻させられる","volitional":"戻そう","imperative":"戻せ","prohibitive":"戻すな","condBa":"戻せば","condTara":"戻したら","tai":"戻したい","teIru":"戻している","teKudasai":"戻してください"}},{"key":"v:まとめます","dictionary":"まとめる","group":"ichidan","forms":{"dictionary":"まとめる","masu":"まとめます","masuNeg":"まとめません","masuPast":"まとめました","masuPastNeg":"まとめませんでした","te":"まとめて","nai":"まとめない","naiPast":"まとめなかった","ta":"まとめた","potential":"まとめられる","passive":"まとめられる","causative":"まとめさせる","causativePassive":"まとめさせられる","volitional":"まとめよう","imperative":"まとめろ","prohibitive":"まとめるな","condBa":"まとめれば","condTara":"まとめたら","tai":"まとめたい","teIru":"まとめている","teKudasai":"まとめてください"}},{"key":"v:しまいます","dictionary":"しまう","group":"godan","forms":{"dictionary":"しまう","masu":"しまいます","masuNeg":"しまいません","masuPast":"しまいました","masuPastNeg":"しまいませんでした","te":"しまって","nai":"しまわない","naiPast":"しまわなかった","ta":"しまった","potential":"しまえる","passive":"しまわれる","causative":"しまわせる","causativePassive":"しまわせられる","volitional":"しまおう","imperative":"しまえ","prohibitive":"しまうな","condBa":"しまえば","condTara":"しまったら","tai":"しまいたい","teIru":"しまっている","teKudasai":"しまってください"}},{"key":"v:決めます","dictionary":"決める","group":"ichidan","forms":{"dictionary":"決める","masu":"決めます","masuNeg":"決めません","masuPast":"決めました","masuPastNeg":"決めませんでした","te":"決めて","nai":"決めない","naiPast":"決めなかった","ta":"決めた","potential":"決められる","passive":"決められる","causative":"決めさせる","causativePassive":"決めさせられる","volitional":"決めよう","imperative":"決めろ","prohibitive":"決めるな","condBa":"決めれば","condTara":"決めたら","tai":"決めたい","teIru":"決めている","teKudasai":"決めてください"}},{"key":"v:知らせます","dictionary":"知らせる","group":"ichidan","forms":{"dictionary":"知らせる","masu":"知らせます","masuNeg":"知らせません","masuPast":"知らせました","masuPastNeg":"知らせませんでした","te":"知らせて","nai":"知らせない","naiPast":"知らせなかった","ta":"知らせた","potential":"知らせられる","passive":"知らせられる","causative":"知らせさせる","causativePassive":"知らせさせられる","volitional":"知らせよう","imperative":"知らせろ","prohibitive":"知らせるな","condBa":"知らせれば","condTara":"知らせたら","tai":"知らせたい","teIru":"知らせている","teKudasai":"知らせてください"}},{"key":"v:相談します","dictionary":"相談する","group":"irregular","forms":{"dictionary":"相談する","masu":"相談します","masuNeg":"相談しません","masuPast":"相談しました","masuPastNeg":"相談しませんでした","te":"相談して","nai":"相談しない","naiPast":"相談しなかった","ta":"相談した","potential":"相談できる","passive":"相談される","causative":"相談させる","causativePassive":"相談させられる","volitional":"相談しよう","imperative":"相談しろ","prohibitive":"相談するな","condBa":"相談すれば","condTara":"相談したら","tai":"相談したい","teIru":"相談している","teKudasai":"相談してください"}},{"key":"v:予習します","dictionary":"予習する","group":"irregular","forms":{"dictionary":"予習する","masu":"予習します","masuNeg":"予習しません","masuPast":"予習しました","masuPastNeg":"予習しませんでした","te":"予習して","nai":"予習しない","naiPast":"予習しなかった","ta":"予習した","potential":"予習できる","passive":"予習される","causative":"予習させる","causativePassive":"予習させられる","volitional":"予習しよう","imperative":"予習しろ","prohibitive":"予習するな","condBa":"予習すれば","condTara":"予習したら","tai":"予習したい","teIru":"予習している","teKudasai":"予習してください"}},{"key":"v:復習します","dictionary":"復習する","group":"irregular","forms":{"dictionary":"復習する","masu":"復習します","masuNeg":"復習しません","masuPast":"復習しました","masuPastNeg":"復習しませんでした","te":"復習して","nai":"復習しない","naiPast":"復習しなかった","ta":"復習した","potential":"復習できる","passive":"復習される","causative":"復習させる","causativePassive":"復習させられる","volitional":"復習しよう","imperative":"復習しろ","prohibitive":"復習するな","condBa":"復習すれば","condTara":"復習したら","tai":"復習したい","teIru":"復習している","teKudasai":"復習してください"}},{"key":"v:そのままにします","dictionary":"そのままにする","group":"irregular","forms":{"dictionary":"そのままにする","masu":"そのままにします","masuNeg":"そのままにしません","masuPast":"そのままにしました","masuPastNeg":"そのままにしませんでした","te":"そのままにして","nai":"そのままにしない","naiPast":"そのままにしなかった","ta":"そのままにした","potential":"そのままにできる","passive":"そのままにされる","causative":"そのままにさせる","causativePassive":"そのままにさせられる","volitional":"そのままにしよう","imperative":"そのままにしろ","prohibitive":"そのままにするな","condBa":"そのままにすれば","condTara":"そのままにしたら","tai":"そのままにしたい","teIru":"そのままにしている","teKudasai":"そのままにしてください"}},{"key":"v:目が覚めます","dictionary":"目が覚める","group":"ichidan","forms":{"dictionary":"目が覚める","masu":"目が覚めます","masuNeg":"目が覚めません","masuPast":"目が覚めました","masuPastNeg":"目が覚めませんでした","te":"目が覚めて","nai":"目が覚めない","naiPast":"目が覚めなかった","ta":"目が覚めた","potential":"目が覚められる","passive":"目が覚められる","causative":"目が覚めさせる","causativePassive":"目が覚めさせられる","volitional":"目が覚めよう","imperative":"目が覚めろ","prohibitive":"目が覚めるな","condBa":"目が覚めれば","condTara":"目が覚めたら","tai":"目が覚めたい","teIru":"目が覚めている","teKudasai":"目が覚めてください"}},{"key":"v:続けます","dictionary":"続ける","group":"ichidan","forms":{"dictionary":"続ける","masu":"続けます","masuNeg":"続けません","masuPast":"続けました","masuPastNeg":"続けませんでした","te":"続けて","nai":"続けない","naiPast":"続けなかった","ta":"続けた","potential":"続けられる","passive":"続けられる","causative":"続けさせる","causativePassive":"続けさせられる","volitional":"続けよう","imperative":"続けろ","prohibitive":"続けるな","condBa":"続ければ","condTara":"続けたら","tai":"続けたい","teIru":"続けている","teKudasai":"続けてください"}},{"key":"v:見つけます","dictionary":"見つける","group":"ichidan","forms":{"dictionary":"見つける","masu":"見つけます","masuNeg":"見つけません","masuPast":"見つけました","masuPastNeg":"見つけませんでした","te":"見つけて","nai":"見つけない","naiPast":"見つけなかった","ta":"見つけた","potential":"見つけられる","passive":"見つけられる","causative":"見つけさせる","causativePassive":"見つけさせられる","volitional":"見つけよう","imperative":"見つけろ","prohibitive":"見つけるな","condBa":"見つければ","condTara":"見つけたら","tai":"見つけたい","teIru":"見つけている","teKudasai":"見つけてください"}},{"key":"v:受けます","dictionary":"受ける","group":"ichidan","forms":{"dictionary":"受ける","masu":"受けます","masuNeg":"受けません","masuPast":"受けました","masuPastNeg":"受けませんでした","te":"受けて","nai":"受けない","naiPast":"受けなかった","ta":"受けた","potential":"受けられる","passive":"受けられる","causative":"受けさせる","causativePassive":"受けさせられる","volitional":"受けよう","imperative":"受けろ","prohibitive":"受けるな","condBa":"受ければ","condTara":"受けたら","tai":"受けたい","teIru":"受けている","teKudasai":"受けてください"}},{"key":"v:申し込みます","dictionary":"申し込む","group":"godan","forms":{"dictionary":"申し込む","masu":"申し込みます","masuNeg":"申し込みません","masuPast":"申し込みました","masuPastNeg":"申し込みませんでした","te":"申し込んで","nai":"申し込まない","naiPast":"申し込まなかった","ta":"申し込んだ","potential":"申し込める","passive":"申し込まれる","causative":"申し込ませる","causativePassive":"申し込ませられる","volitional":"申し込もう","imperative":"申し込め","prohibitive":"申し込むな","condBa":"申し込めば","condTara":"申し込んだら","tai":"申し込みたい","teIru":"申し込んでいる","teKudasai":"申し込んでください"}},{"key":"v:休憩します","dictionary":"休憩する","group":"irregular","forms":{"dictionary":"休憩する","masu":"休憩します","masuNeg":"休憩しません","masuPast":"休憩しました","masuPastNeg":"休憩しませんでした","te":"休憩して","nai":"休憩しない","naiPast":"休憩しなかった","ta":"休憩した","potential":"休憩できる","passive":"休憩される","causative":"休憩させる","causativePassive":"休憩させられる","volitional":"休憩しよう","imperative":"休憩しろ","prohibitive":"休憩するな","condBa":"休憩すれば","condTara":"休憩したら","tai":"休憩したい","teIru":"休憩している","teKudasai":"休憩してください"}},{"key":"v:残ります","dictionary":"残る","group":"godan","forms":{"dictionary":"残る","masu":"残ります","masuNeg":"残りません","masuPast":"残りました","masuPastNeg":"残りませんでした","te":"残って","nai":"残らない","naiPast":"残らなかった","ta":"残った","potential":"残れる","passive":"残られる","causative":"残らせる","causativePassive":"残らせられる","volitional":"残ろう","imperative":"残れ","prohibitive":"残るな","condBa":"残れば","condTara":"残ったら","tai":"残りたい","teIru":"残っている","teKudasai":"残ってください"}},{"key":"v:卒業します","dictionary":"卒業する","group":"irregular","forms":{"dictionary":"卒業する","masu":"卒業します","masuNeg":"卒業しません","masuPast":"卒業しました","masuPastNeg":"卒業しませんでした","te":"卒業して","nai":"卒業しない","naiPast":"卒業しなかった","ta":"卒業した","potential":"卒業できる","passive":"卒業される","causative":"卒業させる","causativePassive":"卒業させられる","volitional":"卒業しよう","imperative":"卒業しろ","prohibitive":"卒業するな","condBa":"卒業すれば","condTara":"卒業したら","tai":"卒業したい","teIru":"卒業している","teKudasai":"卒業してください"}},{"key":"v:閉じます","dictionary":"閉じる","group":"ichidan","forms":{"dictionary":"閉じる","masu":"閉じます","masuNeg":"閉じません","masuPast":"閉じました","masuPastNeg":"閉じませんでした","te":"閉じて","nai":"閉じない","naiPast":"閉じなかった","ta":"閉じた","potential":"閉じられる","passive":"閉じられる","causative":"閉じさせる","causativePassive":"閉じさせられる","volitional":"閉じよう","imperative":"閉じろ","prohibitive":"閉じるな","condBa":"閉じれば","condTara":"閉じたら","tai":"閉じたい","teIru":"閉じている","teKudasai":"閉じてください"}},{"key":"v:運動します","dictionary":"運動する","group":"irregular","forms":{"dictionary":"運動する","masu":"運動します","masuNeg":"運動しません","masuPast":"運動しました","masuPastNeg":"運動しませんでした","te":"運動して","nai":"運動しない","naiPast":"運動しなかった","ta":"運動した","potential":"運動できる","passive":"運動される","causative":"運動させる","causativePassive":"運動させられる","volitional":"運動しよう","imperative":"運動しろ","prohibitive":"運動するな","condBa":"運動すれば","condTara":"運動したら","tai":"運動したい","teIru":"運動している","teKudasai":"運動してください"}},{"key":"v:成功します","dictionary":"成功する","group":"irregular","forms":{"dictionary":"成功する","masu":"成功します","masuNeg":"成功しません","masuPast":"成功しました","masuPastNeg":"成功しませんでした","te":"成功して","nai":"成功しない","naiPast":"成功しなかった","ta":"成功した","potential":"成功できる","passive":"成功される","causative":"成功させる","causativePassive":"成功させられる","volitional":"成功しよう","imperative":"成功しろ","prohibitive":"成功するな","condBa":"成功すれば","condTara":"成功したら","tai":"成功したい","teIru":"成功している","teKudasai":"成功してください"}},{"key":"v:失敗します","dictionary":"失敗する","group":"irregular","forms":{"dictionary":"失敗する","masu":"失敗します","masuNeg":"失敗しません","masuPast":"失敗しました","masuPastNeg":"失敗しませんでした","te":"失敗して","nai":"失敗しない","naiPast":"失敗しなかった","ta":"失敗した","potential":"失敗できる","passive":"失敗される","causative":"失敗させる","causativePassive":"失敗させられる","volitional":"失敗しよう","imperative":"失敗しろ","prohibitive":"失敗するな","condBa":"失敗すれば","condTara":"失敗したら","tai":"失敗したい","teIru":"失敗している","teKudasai":"失敗してください"}},{"key":"v:合格します","dictionary":"合格する","group":"irregular","forms":{"dictionary":"合格する","masu":"合格します","masuNeg":"合格しません","masuPast":"合格しました","masuPastNeg":"合格しませんでした","te":"合格して","nai":"合格しない","naiPast":"合格しなかった","ta":"合格した","potential":"合格できる","passive":"合格される","causative":"合格させる","causativePassive":"合格させられる","volitional":"合格しよう","imperative":"合格しろ","prohibitive":"合格するな","condBa":"合格すれば","condTara":"合格したら","tai":"合格したい","teIru":"合格している","teKudasai":"合格してください"}},{"key":"v:やみます","dictionary":"やむ","group":"godan","forms":{"dictionary":"やむ","masu":"やみます","masuNeg":"やみません","masuPast":"やみました","masuPastNeg":"やみませんでした","te":"やんで","nai":"やまない","naiPast":"やまなかった","ta":"やんだ","potential":"やめる","passive":"やまれる","causative":"やませる","causativePassive":"やませられる","volitional":"やもう","imperative":"やめ","prohibitive":"やむな","condBa":"やめば","condTara":"やんだら","tai":"やみたい","teIru":"やんでいる","teKudasai":"やんでください"}},{"key":"v:晴れます","dictionary":"晴れる","group":"ichidan","forms":{"dictionary":"晴れる","masu":"晴れます","masuNeg":"晴れません","masuPast":"晴れました","masuPastNeg":"晴れませんでした","te":"晴れて","nai":"晴れない","naiPast":"晴れなかった","ta":"晴れた","potential":"晴れられる","passive":"晴れられる","causative":"晴れさせる","causativePassive":"晴れさせられる","volitional":"晴れよう","imperative":"晴れろ","prohibitive":"晴れるな","condBa":"晴れれば","condTara":"晴れたら","tai":"晴れたい","teIru":"晴れている","teKudasai":"晴れてください"}},{"key":"v:曇ります","dictionary":"曇る","group":"godan","forms":{"dictionary":"曇る","masu":"曇ります","masuNeg":"曇りません","masuPast":"曇りました","masuPastNeg":"曇りませんでした","te":"曇って","nai":"曇らない","naiPast":"曇らなかった","ta":"曇った","potential":"曇れる","passive":"曇られる","causative":"曇らせる","causativePassive":"曇らせられる","volitional":"曇ろう","imperative":"曇れ","prohibitive":"曇るな","condBa":"曇れば","condTara":"曇ったら","tai":"曇りたい","teIru":"曇っている","teKudasai":"曇ってください"}},{"key":"v:続きます","dictionary":"続く","group":"godan","forms":{"dictionary":"続く","masu":"続きます","masuNeg":"続きません","masuPast":"続きました","masuPastNeg":"続きませんでした","te":"続いて","nai":"続かない","naiPast":"続かなかった","ta":"続いた","potential":"続ける","passive":"続かれる","causative":"続かせる","causativePassive":"続かせられる","volitional":"続こう","imperative":"続け","prohibitive":"続くな","condBa":"続けば","condTara":"続いたら","tai":"続きたい","teIru":"続いている","teKudasai":"続いてください"}},{"key":"v:ひきます","dictionary":"ひく","group":"godan","forms":{"dictionary":"ひく","masu":"ひきます","masuNeg":"ひきません","masuPast":"ひきました","masuPastNeg":"ひきませんでした","te":"ひいて","nai":"ひかない","naiPast":"ひかなかった","ta":"ひいた","potential":"ひける","passive":"ひかれる","causative":"ひかせる","causativePassive":"ひかせられる","volitional":"ひこう","imperative":"ひけ","prohibitive":"ひくな","condBa":"ひけば","condTara":"ひいたら","tai":"ひきたい","teIru":"ひいている","teKudasai":"ひいてください"}},{"key":"v:冷やします","dictionary":"冷やす","group":"godan","forms":{"dictionary":"冷やす","masu":"冷やします","masuNeg":"冷やしません","masuPast":"冷やしました","masuPastNeg":"冷やしませんでした","te":"冷やして","nai":"冷やさない","naiPast":"冷やさなかった","ta":"冷やした","potential":"冷やせる","passive":"冷やされる","causative":"冷やさせる","causativePassive":"冷やさせられる","volitional":"冷やそう","imperative":"冷やせ","prohibitive":"冷やすな","condBa":"冷やせば","condTara":"冷やしたら","tai":"冷やしたい","teIru":"冷やしている","teKudasai":"冷やしてください"}},{"key":"v:無理をします","dictionary":"無理をする","group":"irregular","forms":{"dictionary":"無理をする","masu":"無理をします","masuNeg":"無理をしません","masuPast":"無理をしました","masuPastNeg":"無理をしませんでした","te":"無理をして","nai":"無理をしない","naiPast":"無理をしなかった","ta":"無理をした","potential":"無理をできる","passive":"無理をされる","causative":"無理をさせる","causativePassive":"無理をさせられる","volitional":"無理をしよう","imperative":"無理をしろ","prohibitive":"無理をするな","condBa":"無理をすれば","condTara":"無理をしたら","tai":"無理をしたい","teIru":"無理をしている","teKudasai":"無理をしてください"}},{"key":"v:遅く","dictionary":"遅く","group":"godan","forms":{"dictionary":"遅く","masu":"遅きます","masuNeg":"遅きません","masuPast":"遅きました","masuPastNeg":"遅きませんでした","te":"遅いて","nai":"遅かない","naiPast":"遅かなかった","ta":"遅いた","potential":"遅ける","passive":"遅かれる","causative":"遅かせる","causativePassive":"遅かせられる","volitional":"遅こう","imperative":"遅け","prohibitive":"遅くな","condBa":"遅けば","condTara":"遅いたら","tai":"遅きたい","teIru":"遅いている","teKudasai":"遅いてください"}},{"key":"v:困ります","dictionary":"困る","group":"godan","forms":{"dictionary":"困る","masu":"困ります","masuNeg":"困りません","masuPast":"困りました","masuPastNeg":"困りませんでした","te":"困って","nai":"困らない","naiPast":"困らなかった","ta":"困った","potential":"困れる","passive":"困られる","causative":"困らせる","causativePassive":"困らせられる","volitional":"困ろう","imperative":"困れ","prohibitive":"困るな","condBa":"困れば","condTara":"困ったら","tai":"困りたい","teIru":"困っている","teKudasai":"困ってください"}},{"key":"v:当たります","dictionary":"当たる","group":"godan","forms":{"dictionary":"当たる","masu":"当たります","masuNeg":"当たりません","masuPast":"当たりました","masuPastNeg":"当たりませんでした","te":"当たって","nai":"当たらない","naiPast":"当たらなかった","ta":"当たった","potential":"当たれる","passive":"当たられる","causative":"当たらせる","causativePassive":"当たらせられる","volitional":"当たろう","imperative":"当たれ","prohibitive":"当たるな","condBa":"当たれば","condTara":"当たったら","tai":"当たりたい","teIru":"当たっている","teKudasai":"当たってください"}},{"key":"v:逃げます","dictionary":"逃げる","group":"ichidan","forms":{"dictionary":"逃げる","masu":"逃げます","masuNeg":"逃げません","masuPast":"逃げました","masuPastNeg":"逃げませんでした","te":"逃げて","nai":"逃げない","naiPast":"逃げなかった","ta":"逃げた","potential":"逃げられる","passive":"逃げられる","causative":"逃げさせる","causativePassive":"逃げさせられる","volitional":"逃げよう","imperative":"逃げろ","prohibitive":"逃げるな","condBa":"逃げれば","condTara":"逃げたら","tai":"逃げたい","teIru":"逃げている","teKudasai":"逃げてください"}},{"key":"v:騒ぎます","dictionary":"騒ぐ","group":"godan","forms":{"dictionary":"騒ぐ","masu":"騒ぎます","masuNeg":"騒ぎません","masuPast":"騒ぎました","masuPastNeg":"騒ぎませんでした","te":"騒いで","nai":"騒がない","naiPast":"騒がなかった","ta":"騒いだ","potential":"騒げる","passive":"騒がれる","causative":"騒がせる","causativePassive":"騒がせられる","volitional":"騒ごう","imperative":"騒げ","prohibitive":"騒ぐな","condBa":"騒げば","condTara":"騒いだら","tai":"騒ぎたい","teIru":"騒いでいる","teKudasai":"騒いでください"}},{"key":"v:あきらめます","dictionary":"あきらめる","group":"ichidan","forms":{"dictionary":"あきらめる","masu":"あきらめます","masuNeg":"あきらめません","masuPast":"あきらめました","masuPastNeg":"あきらめませんでした","te":"あきらめて","nai":"あきらめない","naiPast":"あきらめなかった","ta":"あきらめた","potential":"あきらめられる","passive":"あきらめられる","causative":"あきらめさせる","causativePassive":"あきらめさせられる","volitional":"あきらめよう","imperative":"あきらめろ","prohibitive":"あきらめるな","condBa":"あきらめれば","condTara":"あきらめたら","tai":"あきらめたい","teIru":"あきらめている","teKudasai":"あきらめてください"}},{"key":"v:投げます","dictionary":"投げる","group":"ichidan","forms":{"dictionary":"投げる","masu":"投げます","masuNeg":"投げません","masuPast":"投げました","masuPastNeg":"投げませんでした","te":"投げて","nai":"投げない","naiPast":"投げなかった","ta":"投げた","potential":"投げられる","passive":"投げられる","causative":"投げさせる","causativePassive":"投げさせられる","volitional":"投げよう","imperative":"投げろ","prohibitive":"投げるな","condBa":"投げれば","condTara":"投げたら","tai":"投げたい","teIru":"投げている","teKudasai":"投げてください"}},{"key":"v:守ります","dictionary":"守る","group":"godan","forms":{"dictionary":"守る","masu":"守ります","masuNeg":"守りません","masuPast":"守りました","masuPastNeg":"守りませんでした","te":"守って","nai":"守らない","naiPast":"守らなかった","ta":"守った","potential":"守れる","passive":"守られる","causative":"守らせる","causativePassive":"守らせられる","volitional":"守ろう","imperative":"守れ","prohibitive":"守るな","condBa":"守れば","condTara":"守ったら","tai":"守りたい","teIru":"守っている","teKudasai":"守ってください"}},{"key":"v:始まります","dictionary":"始まる","group":"godan","forms":{"dictionary":"始まる","masu":"始まります","masuNeg":"始まりません","masuPast":"始まりました","masuPastNeg":"始まりませんでした","te":"始まって","nai":"始まらない","naiPast":"始まらなかった","ta":"始まった","potential":"始まれる","passive":"始まられる","causative":"始まらせる","causativePassive":"始まらせられる","volitional":"始まろう","imperative":"始まれ","prohibitive":"始まるな","condBa":"始まれば","condTara":"始まったら","tai":"始まりたい","teIru":"始まっている","teKudasai":"始まってください"}},{"key":"v:出席します","dictionary":"出席する","group":"irregular","forms":{"dictionary":"出席する","masu":"出席します","masuNeg":"出席しません","masuPast":"出席しました","masuPastNeg":"出席しませんでした","te":"出席して","nai":"出席しない","naiPast":"出席しなかった","ta":"出席した","potential":"出席できる","passive":"出席される","causative":"出席させる","causativePassive":"出席させられる","volitional":"出席しよう","imperative":"出席しろ","prohibitive":"出席するな","condBa":"出席すれば","condTara":"出席したら","tai":"出席したい","teIru":"出席している","teKudasai":"出席してください"}},{"key":"v:伝えます","dictionary":"伝える","group":"ichidan","forms":{"dictionary":"伝える","masu":"伝えます","masuNeg":"伝えません","masuPast":"伝えました","masuPastNeg":"伝えませんでした","te":"伝えて","nai":"伝えない","naiPast":"伝えなかった","ta":"伝えた","potential":"伝えられる","passive":"伝えられる","causative":"伝えさせる","causativePassive":"伝えさせられる","volitional":"伝えよう","imperative":"伝えろ","prohibitive":"伝えるな","condBa":"伝えれば","condTara":"伝えたら","tai":"伝えたい","teIru":"伝えている","teKudasai":"伝えてください"}},{"key":"v:注意します","dictionary":"注意する","group":"irregular","forms":{"dictionary":"注意する","masu":"注意します","masuNeg":"注意しません","masuPast":"注意しました","masuPastNeg":"注意しませんでした","te":"注意して","nai":"注意しない","naiPast":"注意しなかった","ta":"注意した","potential":"注意できる","passive":"注意される","causative":"注意させる","causativePassive":"注意させられる","volitional":"注意しよう","imperative":"注意しろ","prohibitive":"注意するな","condBa":"注意すれば","condTara":"注意したら","tai":"注意したい","teIru":"注意している","teKudasai":"注意してください"}},{"key":"v:外します","dictionary":"外す","group":"godan","forms":{"dictionary":"外す","masu":"外します","masuNeg":"外しません","masuPast":"外しました","masuPastNeg":"外しませんでした","te":"外して","nai":"外さない","naiPast":"外さなかった","ta":"外した","potential":"外せる","passive":"外される","causative":"外させる","causativePassive":"外させられる","volitional":"外そう","imperative":"外せ","prohibitive":"外すな","condBa":"外せば","condTara":"外したら","tai":"外したい","teIru":"外している","teKudasai":"外してください"}},{"key":"v:戻ります","dictionary":"戻る","group":"godan","forms":{"dictionary":"戻る","masu":"戻ります","masuNeg":"戻りません","masuPast":"戻りました","masuPastNeg":"戻りませんでした","te":"戻って","nai":"戻らない","naiPast":"戻らなかった","ta":"戻った","potential":"戻れる","passive":"戻られる","causative":"戻らせる","causativePassive":"戻らせられる","volitional":"戻ろう","imperative":"戻れ","prohibitive":"戻るな","condBa":"戻れば","condTara":"戻ったら","tai":"戻りたい","teIru":"戻っている","teKudasai":"戻ってください"}},{"key":"v:リサイクルします","dictionary":"リサイクルする","group":"irregular","forms":{"dictionary":"リサイクルする","masu":"リサイクルします","masuNeg":"リサイクルしません","masuPast":"リサイクルしました","masuPastNeg":"リサイクルしませんでした","te":"リサイクルして","nai":"リサイクルしない","naiPast":"リサイクルしなかった","ta":"リサイクルした","potential":"リサイクルできる","passive":"リサイクルされる","causative":"リサイクルさせる","causativePassive":"リサイクルさせられる","volitional":"リサイクルしよう","imperative":"リサイクルしろ","prohibitive":"リサイクルするな","condBa":"リサイクルすれば","condTara":"リサイクルしたら","tai":"リサイクルしたい","teIru":"リサイクルしている","teKudasai":"リサイクルしてください"}},{"key":"v:助け合います","dictionary":"助け合う","group":"godan","forms":{"dictionary":"助け合う","masu":"助け合います","masuNeg":"助け合いません","masuPast":"助け合いました","masuPastNeg":"助け合いませんでした","te":"助け合って","nai":"助け合わない","naiPast":"助け合わなかった","ta":"助け合った","potential":"助け合える","passive":"助け合われる","causative":"助け合わせる","causativePassive":"助け合わせられる","volitional":"助け合おう","imperative":"助け合え","prohibitive":"助け合うな","condBa":"助け合えば","condTara":"助け合ったら","tai":"助け合いたい","teIru":"助け合っている","teKudasai":"助け合ってください"}},{"key":"v:あいさつ","dictionary":"あいさつ","group":"godan","forms":{"dictionary":"あいさつ","masu":"あいさちます","masuNeg":"あいさちません","masuPast":"あいさちました","masuPastNeg":"あいさちませんでした","te":"あいさって","nai":"あいさたない","naiPast":"あいさたなかった","ta":"あいさった","potential":"あいさてる","passive":"あいさたれる","causative":"あいさたせる","causativePassive":"あいさたせられる","volitional":"あいさとう","imperative":"あいさて","prohibitive":"あいさつな","condBa":"あいさてば","condTara":"あいさったら","tai":"あいさちたい","teIru":"あいさっている","teKudasai":"あいさってください"}},{"key":"v:磨きます","dictionary":"磨く","group":"godan","forms":{"dictionary":"磨く","masu":"磨きます","masuNeg":"磨きません","masuPast":"磨きました","masuPastNeg":"磨きませんでした","te":"磨いて","nai":"磨かない","naiPast":"磨かなかった","ta":"磨いた","potential":"磨ける","passive":"磨かれる","causative":"磨かせる","causativePassive":"磨かせられる","volitional":"磨こう","imperative":"磨け","prohibitive":"磨くな","condBa":"磨けば","condTara":"磨いたら","tai":"磨きたい","teIru":"磨いている","teKudasai":"磨いてください"}},{"key":"v:組み立てます","dictionary":"組み立てる","group":"ichidan","forms":{"dictionary":"組み立てる","masu":"組み立てます","masuNeg":"組み立てません","masuPast":"組み立てました","masuPastNeg":"組み立てませんでした","te":"組み立てて","nai":"組み立てない","naiPast":"組み立てなかった","ta":"組み立てた","potential":"組み立てられる","passive":"組み立てられる","causative":"組み立てさせる","causativePassive":"組み立てさせられる","volitional":"組み立てよう","imperative":"組み立てろ","prohibitive":"組み立てるな","condBa":"組み立てれば","condTara":"組み立てたら","tai":"組み立てたい","teIru":"組み立てている","teKudasai":"組み立ててください"}},{"key":"v:折ります","dictionary":"折る","group":"godan","forms":{"dictionary":"折る","masu":"折ります","masuNeg":"折りません","masuPast":"折りました","masuPastNeg":"折りませんでした","te":"折って","nai":"折らない","naiPast":"折らなかった","ta":"折った","potential":"折れる","passive":"折られる","causative":"折らせる","causativePassive":"折らせられる","volitional":"折ろう","imperative":"折れ","prohibitive":"折るな","condBa":"折れば","condTara":"折ったら","tai":"折りたい","teIru":"折っている","teKudasai":"折ってください"}},{"key":"v:気がつきます","dictionary":"気がつく","group":"godan","forms":{"dictionary":"気がつく","masu":"気がつきます","masuNeg":"気がつきません","masuPast":"気がつきました","masuPastNeg":"気がつきませんでした","te":"気がついて","nai":"気がつかない","naiPast":"気がつかなかった","ta":"気がついた","potential":"気がつける","passive":"気がつかれる","causative":"気がつかせる","causativePassive":"気がつかせられる","volitional":"気がつこう","imperative":"気がつけ","prohibitive":"気がつくな","condBa":"気がつけば","condTara":"気がついたら","tai":"気がつきたい","teIru":"気がついている","teKudasai":"気がついてください"}},{"key":"v:見つかります","dictionary":"見つかる","group":"godan","forms":{"dictionary":"見つかる","masu":"見つかります","masuNeg":"見つかりません","masuPast":"見つかりました","masuPastNeg":"見つかりませんでした","te":"見つかって","nai":"見つからない","naiPast":"見つからなかった","ta":"見つかった","potential":"見つかれる","passive":"見つかられる","causative":"見つからせる","causativePassive":"見つからせられる","volitional":"見つかろう","imperative":"見つかれ","prohibitive":"見つかるな","condBa":"見つかれば","condTara":"見つかったら","tai":"見つかりたい","teIru":"見つかっている","teKudasai":"見つかってください"}},{"key":"v:質問します","dictionary":"質問する","group":"irregular","forms":{"dictionary":"質問する","masu":"質問します","masuNeg":"質問しません","masuPast":"質問しました","masuPastNeg":"質問しませんでした","te":"質問して","nai":"質問しない","naiPast":"質問しなかった","ta":"質問した","potential":"質問できる","passive":"質問される","causative":"質問させる","causativePassive":"質問させられる","volitional":"質問しよう","imperative":"質問しろ","prohibitive":"質問するな","condBa":"質問すれば","condTara":"質問したら","tai":"質問したい","teIru":"質問している","teKudasai":"質問してください"}},{"key":"v:さします","dictionary":"さす","group":"godan","forms":{"dictionary":"さす","masu":"さします","masuNeg":"さしません","masuPast":"さしました","masuPastNeg":"さしませんでした","te":"さして","nai":"ささない","naiPast":"ささなかった","ta":"さした","potential":"させる","passive":"さされる","causative":"ささせる","causativePassive":"ささせられる","volitional":"さそう","imperative":"させ","prohibitive":"さすな","condBa":"させば","condTara":"さしたら","tai":"さしたい","teIru":"さしている","teKudasai":"さしてください"}},{"key":"v:お茶をたてます","dictionary":"お茶をたてる","group":"ichidan","forms":{"dictionary":"お茶をたてる","masu":"お茶をたてます","masuNeg":"お茶をたてません","masuPast":"お茶をたてました","masuPastNeg":"お茶をたてませんでした","te":"お茶をたてて","nai":"お茶をたてない","naiPast":"お茶をたてなかった","ta":"お茶をたてた","potential":"お茶をたてられる","passive":"お茶をたてられる","causative":"お茶をたてさせる","causativePassive":"お茶をたてさせられる","volitional":"お茶をたてよう","imperative":"お茶をたてろ","prohibitive":"お茶をたてるな","condBa":"お茶をたてれば","condTara":"お茶をたてたら","tai":"お茶をたてたい","teIru":"お茶をたてている","teKudasai":"お茶をたててください"}},{"key":"v:載せます","dictionary":"載せる","group":"ichidan","forms":{"dictionary":"載せる","masu":"載せます","masuNeg":"載せません","masuPast":"載せました","masuPastNeg":"載せませんでした","te":"載せて","nai":"載せない","naiPast":"載せなかった","ta":"載せた","potential":"載せられる","passive":"載せられる","causative":"載せさせる","causativePassive":"載せさせられる","volitional":"載せよう","imperative":"載せろ","prohibitive":"載せるな","condBa":"載せれば","condTara":"載せたら","tai":"載せたい","teIru":"載せている","teKudasai":"載せてください"}},{"key":"v:火にかけます","dictionary":"火にかける","group":"ichidan","forms":{"dictionary":"火にかける","masu":"火にかけます","masuNeg":"火にかけません","masuPast":"火にかけました","masuPastNeg":"火にかけませんでした","te":"火にかけて","nai":"火にかけない","naiPast":"火にかけなかった","ta":"火にかけた","potential":"火にかけられる","passive":"火にかけられる","causative":"火にかけさせる","causativePassive":"火にかけさせられる","volitional":"火にかけよう","imperative":"火にかけろ","prohibitive":"火にかけるな","condBa":"火にかければ","condTara":"火にかけたら","tai":"火にかけたい","teIru":"火にかけている","teKudasai":"火にかけてください"}},{"key":"v:煮ます","dictionary":"煮る","group":"godan","forms":{"dictionary":"煮る","masu":"煮ります","masuNeg":"煮りません","masuPast":"煮りました","masuPastNeg":"煮りませんでした","te":"煮って","nai":"煮らない","naiPast":"煮らなかった","ta":"煮った","potential":"煮れる","passive":"煮られる","causative":"煮らせる","causativePassive":"煮らせられる","volitional":"煮ろう","imperative":"煮れ","prohibitive":"煮るな","condBa":"煮れば","condTara":"煮ったら","tai":"煮りたい","teIru":"煮っている","teKudasai":"煮ってください"}},{"key":"v:煮えます","dictionary":"煮える","group":"ichidan","forms":{"dictionary":"煮える","masu":"煮えます","masuNeg":"煮えません","masuPast":"煮えました","masuPastNeg":"煮えませんでした","te":"煮えて","nai":"煮えない","naiPast":"煮えなかった","ta":"煮えた","potential":"煮えられる","passive":"煮えられる","causative":"煮えさせる","causativePassive":"煮えさせられる","volitional":"煮えよう","imperative":"煮えろ","prohibitive":"煮えるな","condBa":"煮えれば","condTara":"煮えたら","tai":"煮えたい","teIru":"煮えている","teKudasai":"煮えてください"}},{"key":"v:咲きます","dictionary":"咲く","group":"godan","forms":{"dictionary":"咲く","masu":"咲きます","masuNeg":"咲きません","masuPast":"咲きました","masuPastNeg":"咲きませんでした","te":"咲いて","nai":"咲かない","naiPast":"咲かなかった","ta":"咲いた","potential":"咲ける","passive":"咲かれる","causative":"咲かせる","causativePassive":"咲かせられる","volitional":"咲こう","imperative":"咲け","prohibitive":"咲くな","condBa":"咲けば","condTara":"咲いたら","tai":"咲きたい","teIru":"咲いている","teKudasai":"咲いてください"}},{"key":"v:変わります","dictionary":"変わる","group":"godan","forms":{"dictionary":"変わる","masu":"変わります","masuNeg":"変わりません","masuPast":"変わりました","masuPastNeg":"変わりませんでした","te":"変わって","nai":"変わらない","naiPast":"変わらなかった","ta":"変わった","potential":"変われる","passive":"変わられる","causative":"変わらせる","causativePassive":"変わらせられる","volitional":"変わろう","imperative":"変われ","prohibitive":"変わるな","condBa":"変われば","condTara":"変わったら","tai":"変わりたい","teIru":"変わっている","teKudasai":"変わってください"}},{"key":"v:治ります、直ります","dictionary":"治る","group":"godan","forms":{"dictionary":"治る","masu":"治ります","masuNeg":"治りません","masuPast":"治りました","masuPastNeg":"治りませんでした","te":"治って","nai":"治らない","naiPast":"治らなかった","ta":"治った","potential":"治れる","passive":"治られる","causative":"治らせる","causativePassive":"治らせられる","volitional":"治ろう","imperative":"治れ","prohibitive":"治るな","condBa":"治れば","condTara":"治ったら","tai":"治りたい","teIru":"治っている","teKudasai":"治ってください"}},{"key":"v:クリックします","dictionary":"クリックする","group":"irregular","forms":{"dictionary":"クリックする","masu":"クリックします","masuNeg":"クリックしません","masuPast":"クリックしました","masuPastNeg":"クリックしませんでした","te":"クリックして","nai":"クリックしない","naiPast":"クリックしなかった","ta":"クリックした","potential":"クリックできる","passive":"クリックされる","causative":"クリックさせる","causativePassive":"クリックさせられる","volitional":"クリックしよう","imperative":"クリックしろ","prohibitive":"クリックするな","condBa":"クリックすれば","condTara":"クリックしたら","tai":"クリックしたい","teIru":"クリックしている","teKudasai":"クリックしてください"}},{"key":"v:入力します","dictionary":"入力する","group":"irregular","forms":{"dictionary":"入力する","masu":"入力します","masuNeg":"入力しません","masuPast":"入力しました","masuPastNeg":"入力しませんでした","te":"入力して","nai":"入力しない","naiPast":"入力しなかった","ta":"入力した","potential":"入力できる","passive":"入力される","causative":"入力させる","causativePassive":"入力させられる","volitional":"入力しよう","imperative":"入力しろ","prohibitive":"入力するな","condBa":"入力すれば","condTara":"入力したら","tai":"入力したい","teIru":"入力している","teKudasai":"入力してください"}},{"key":"v:交わります","dictionary":"交わる","group":"godan","forms":{"dictionary":"交わる","masu":"交わります","masuNeg":"交わりません","masuPast":"交わりました","masuPastNeg":"交わりませんでした","te":"交わって","nai":"交わらない","naiPast":"交わらなかった","ta":"交わった","potential":"交われる","passive":"交わられる","causative":"交わらせる","causativePassive":"交わらせられる","volitional":"交わろう","imperative":"交われ","prohibitive":"交わるな","condBa":"交われば","condTara":"交わったら","tai":"交わりたい","teIru":"交わっている","teKudasai":"交わってください"}},{"key":"v:仲よくします","dictionary":"仲よくする","group":"irregular","forms":{"dictionary":"仲よくする","masu":"仲よくします","masuNeg":"仲よくしません","masuPast":"仲よくしました","masuPastNeg":"仲よくしませんでした","te":"仲よくして","nai":"仲よくしない","naiPast":"仲よくしなかった","ta":"仲よくした","potential":"仲よくできる","passive":"仲よくされる","causative":"仲よくさせる","causativePassive":"仲よくさせられる","volitional":"仲よくしよう","imperative":"仲よくしろ","prohibitive":"仲よくするな","condBa":"仲よくすれば","condTara":"仲よくしたら","tai":"仲よくしたい","teIru":"仲よくしている","teKudasai":"仲よくしてください"}},{"key":"v:遭います","dictionary":"遭う","group":"godan","forms":{"dictionary":"遭う","masu":"遭います","masuNeg":"遭いません","masuPast":"遭いました","masuPastNeg":"遭いませんでした","te":"遭って","nai":"遭わない","naiPast":"遭わなかった","ta":"遭った","potential":"遭える","passive":"遭われる","causative":"遭わせる","causativePassive":"遭わせられる","volitional":"遭おう","imperative":"遭え","prohibitive":"遭うな","condBa":"遭えば","condTara":"遭ったら","tai":"遭いたい","teIru":"遭っている","teKudasai":"遭ってください"}},{"key":"v:貯金します","dictionary":"貯金する","group":"irregular","forms":{"dictionary":"貯金する","masu":"貯金します","masuNeg":"貯金しません","masuPast":"貯金しました","masuPastNeg":"貯金しませんでした","te":"貯金して","nai":"貯金しない","naiPast":"貯金しなかった","ta":"貯金した","potential":"貯金できる","passive":"貯金される","causative":"貯金させる","causativePassive":"貯金させられる","volitional":"貯金しよう","imperative":"貯金しろ","prohibitive":"貯金するな","condBa":"貯金すれば","condTara":"貯金したら","tai":"貯金したい","teIru":"貯金している","teKudasai":"貯金してください"}},{"key":"v:過ぎます","dictionary":"過ぐ","group":"godan","forms":{"dictionary":"過ぐ","masu":"過ぎます","masuNeg":"過ぎません","masuPast":"過ぎました","masuPastNeg":"過ぎませんでした","te":"過いで","nai":"過がない","naiPast":"過がなかった","ta":"過いだ","potential":"過げる","passive":"過がれる","causative":"過がせる","causativePassive":"過がせられる","volitional":"過ごう","imperative":"過げ","prohibitive":"過ぐな","condBa":"過げば","condTara":"過いだら","tai":"過ぎたい","teIru":"過いでいる","teKudasai":"過いでください"}},{"key":"v:慣れます","dictionary":"慣れる","group":"ichidan","forms":{"dictionary":"慣れる","masu":"慣れます","masuNeg":"慣れません","masuPast":"慣れました","masuPastNeg":"慣れませんでした","te":"慣れて","nai":"慣れない","naiPast":"慣れなかった","ta":"慣れた","potential":"慣れられる","passive":"慣れられる","causative":"慣れさせる","causativePassive":"慣れさせられる","volitional":"慣れよう","imperative":"慣れろ","prohibitive":"慣れるな","condBa":"慣れれば","condTara":"慣れたら","tai":"慣れたい","teIru":"慣れている","teKudasai":"慣れてください"}},{"key":"v:腐ります","dictionary":"腐る","group":"godan","forms":{"dictionary":"腐る","masu":"腐ります","masuNeg":"腐りません","masuPast":"腐りました","masuPastNeg":"腐りませんでした","te":"腐って","nai":"腐らない","naiPast":"腐らなかった","ta":"腐った","potential":"腐れる","passive":"腐られる","causative":"腐らせる","causativePassive":"腐らせられる","volitional":"腐ろう","imperative":"腐れ","prohibitive":"腐るな","condBa":"腐れば","condTara":"腐ったら","tai":"腐りたい","teIru":"腐っている","teKudasai":"腐ってください"}},{"key":"v:していらっしゃいます","dictionary":"していらっしゃう","group":"godan","forms":{"dictionary":"していらっしゃう","masu":"していらっしゃいます","masuNeg":"していらっしゃいません","masuPast":"していらっしゃいました","masuPastNeg":"していらっしゃいませんでした","te":"していらっしゃって","nai":"していらっしゃわない","naiPast":"していらっしゃわなかった","ta":"していらっしゃった","potential":"していらっしゃえる","passive":"していらっしゃわれる","causative":"していらっしゃわせる","causativePassive":"していらっしゃわせられる","volitional":"していらっしゃおう","imperative":"していらっしゃえ","prohibitive":"していらっしゃうな","condBa":"していらっしゃえば","condTara":"していらっしゃったら","tai":"していらっしゃいたい","teIru":"していらっしゃっている","teKudasai":"していらっしゃってください"}},{"key":"v:使っていらっしゃる","dictionary":"使っていらっしゃる","group":"godan","forms":{"dictionary":"使っていらっしゃる","masu":"使っていらっしゃります","masuNeg":"使っていらっしゃりません","masuPast":"使っていらっしゃりました","masuPastNeg":"使っていらっしゃりませんでした","te":"使っていらっしゃって","nai":"使っていらっしゃらない","naiPast":"使っていらっしゃらなかった","ta":"使っていらっしゃった","potential":"使っていらっしゃれる","passive":"使っていらっしゃられる","causative":"使っていらっしゃらせる","causativePassive":"使っていらっしゃらせられる","volitional":"使っていらっしゃろう","imperative":"使っていらっしゃれ","prohibitive":"使っていらっしゃるな","condBa":"使っていらっしゃれば","condTara":"使っていらっしゃったら","tai":"使っていらっしゃりたい","teIru":"使っていらっしゃっている","teKudasai":"使っていらっしゃってください"}},{"key":"v:チャレンジします","dictionary":"チャレンジする","group":"irregular","forms":{"dictionary":"チャレンジする","masu":"チャレンジします","masuNeg":"チャレンジしません","masuPast":"チャレンジしました","masuPastNeg":"チャレンジしませんでした","te":"チャレンジして","nai":"チャレンジしない","naiPast":"チャレンジしなかった","ta":"チャレンジした","potential":"チャレンジできる","passive":"チャレンジされる","causative":"チャレンジさせる","causativePassive":"チャレンジさせられる","volitional":"チャレンジしよう","imperative":"チャレンジしろ","prohibitive":"チャレンジするな","condBa":"チャレンジすれば","condTara":"チャレンジしたら","tai":"チャレンジしたい","teIru":"チャレンジしている","teKudasai":"チャレンジしてください"}},{"key":"v:運びます","dictionary":"運ぶ","group":"godan","forms":{"dictionary":"運ぶ","masu":"運びます","masuNeg":"運びません","masuPast":"運びました","masuPastNeg":"運びませんでした","te":"運んで","nai":"運ばない","naiPast":"運ばなかった","ta":"運んだ","potential":"運べる","passive":"運ばれる","causative":"運ばせる","causativePassive":"運ばせられる","volitional":"運ぼう","imperative":"運べ","prohibitive":"運ぶな","condBa":"運べば","condTara":"運んだら","tai":"運びたい","teIru":"運んでいる","teKudasai":"運んでください"}},{"key":"v:利用します","dictionary":"利用する","group":"irregular","forms":{"dictionary":"利用する","masu":"利用します","masuNeg":"利用しません","masuPast":"利用しました","masuPastNeg":"利用しませんでした","te":"利用して","nai":"利用しない","naiPast":"利用しなかった","ta":"利用した","potential":"利用できる","passive":"利用される","causative":"利用させる","causativePassive":"利用させられる","volitional":"利用しよう","imperative":"利用しろ","prohibitive":"利用するな","condBa":"利用すれば","condTara":"利用したら","tai":"利用したい","teIru":"利用している","teKudasai":"利用してください"}},{"key":"v:褒めます","dictionary":"褒める","group":"ichidan","forms":{"dictionary":"褒める","masu":"褒めます","masuNeg":"褒めません","masuPast":"褒めました","masuPastNeg":"褒めませんでした","te":"褒めて","nai":"褒めない","naiPast":"褒めなかった","ta":"褒めた","potential":"褒められる","passive":"褒められる","causative":"褒めさせる","causativePassive":"褒めさせられる","volitional":"褒めよう","imperative":"褒めろ","prohibitive":"褒めるな","condBa":"褒めれば","condTara":"褒めたら","tai":"褒めたい","teIru":"褒めている","teKudasai":"褒めてください"}},{"key":"v:しかります","dictionary":"しかる","group":"godan","forms":{"dictionary":"しかる","masu":"しかります","masuNeg":"しかりません","masuPast":"しかりました","masuPastNeg":"しかりませんでした","te":"しかって","nai":"しからない","naiPast":"しからなかった","ta":"しかった","potential":"しかれる","passive":"しかられる","causative":"しからせる","causativePassive":"しからせられる","volitional":"しかろう","imperative":"しかれ","prohibitive":"しかるな","condBa":"しかれば","condTara":"しかったら","tai":"しかりたい","teIru":"しかっている","teKudasai":"しかってください"}},{"key":"v:招待します","dictionary":"招待する","group":"irregular","forms":{"dictionary":"招待する","masu":"招待します","masuNeg":"招待しません","masuPast":"招待しました","masuPastNeg":"招待しませんでした","te":"招待して","nai":"招待しない","naiPast":"招待しなかった","ta":"招待した","potential":"招待できる","passive":"招待される","causative":"招待させる","causativePassive":"招待させられる","volitional":"招待しよう","imperative":"招待しろ","prohibitive":"招待するな","condBa":"招待すれば","condTara":"招待したら","tai":"招待したい","teIru":"招待している","teKudasai":"招待してください"}},{"key":"v:頼みます","dictionary":"頼む","group":"godan","forms":{"dictionary":"頼む","masu":"頼みます","masuNeg":"頼みません","masuPast":"頼みました","masuPastNeg":"頼みませんでした","te":"頼んで","nai":"頼まない","naiPast":"頼まなかった","ta":"頼んだ","potential":"頼める","passive":"頼まれる","causative":"頼ませる","causativePassive":"頼ませられる","volitional":"頼もう","imperative":"頼め","prohibitive":"頼むな","condBa":"頼めば","condTara":"頼んだら","tai":"頼みたい","teIru":"頼んでいる","teKudasai":"頼んでください"}},{"key":"v:とります","dictionary":"とる","group":"godan","forms":{"dictionary":"とる","masu":"とります","masuNeg":"とりません","masuPast":"とりました","masuPastNeg":"とりませんでした","te":"とって","nai":"とらない","naiPast":"とらなかった","ta":"とった","potential":"とれる","passive":"とられる","causative":"とらせる","causativePassive":"とらせられる","volitional":"とろう","imperative":"とれ","prohibitive":"とるな","condBa":"とれば","condTara":"とったら","tai":"とりたい","teIru":"とっている","teKudasai":"とってください"}},{"key":"v:踏みます","dictionary":"踏む","group":"godan","forms":{"dictionary":"踏む","masu":"踏みます","masuNeg":"踏みません","masuPast":"踏みました","masuPastNeg":"踏みませんでした","te":"踏んで","nai":"踏まない","naiPast":"踏まなかった","ta":"踏んだ","potential":"踏める","passive":"踏まれる","causative":"踏ませる","causativePassive":"踏ませられる","volitional":"踏もう","imperative":"踏め","prohibitive":"踏むな","condBa":"踏めば","condTara":"踏んだら","tai":"踏みたい","teIru":"踏んでいる","teKudasai":"踏んでください"}},{"key":"v:壊します","dictionary":"壊す","group":"godan","forms":{"dictionary":"壊す","masu":"壊します","masuNeg":"壊しません","masuPast":"壊しました","masuPastNeg":"壊しませんでした","te":"壊して","nai":"壊さない","naiPast":"壊さなかった","ta":"壊した","potential":"壊せる","passive":"壊される","causative":"壊させる","causativePassive":"壊させられる","volitional":"壊そう","imperative":"壊せ","prohibitive":"壊すな","condBa":"壊せば","condTara":"壊したら","tai":"壊したい","teIru":"壊している","teKudasai":"壊してください"}},{"key":"v:汚します","dictionary":"汚す","group":"godan","forms":{"dictionary":"汚す","masu":"汚します","masuNeg":"汚しません","masuPast":"汚しました","masuPastNeg":"汚しませんでした","te":"汚して","nai":"汚さない","naiPast":"汚さなかった","ta":"汚した","potential":"汚せる","passive":"汚される","causative":"汚させる","causativePassive":"汚させられる","volitional":"汚そう","imperative":"汚せ","prohibitive":"汚すな","condBa":"汚せば","condTara":"汚したら","tai":"汚したい","teIru":"汚している","teKudasai":"汚してください"}},{"key":"v:行います","dictionary":"行う","group":"godan","forms":{"dictionary":"行う","masu":"行います","masuNeg":"行いません","masuPast":"行いました","masuPastNeg":"行いませんでした","te":"行って","nai":"行わない","naiPast":"行わなかった","ta":"行った","potential":"行える","passive":"行われる","causative":"行わせる","causativePassive":"行わせられる","volitional":"行おう","imperative":"行え","prohibitive":"行うな","condBa":"行えば","condTara":"行ったら","tai":"行いたい","teIru":"行っている","teKudasai":"行ってください"}},{"key":"v:輸出します","dictionary":"輸出する","group":"irregular","forms":{"dictionary":"輸出する","masu":"輸出します","masuNeg":"輸出しません","masuPast":"輸出しました","masuPastNeg":"輸出しませんでした","te":"輸出して","nai":"輸出しない","naiPast":"輸出しなかった","ta":"輸出した","potential":"輸出できる","passive":"輸出される","causative":"輸出させる","causativePassive":"輸出させられる","volitional":"輸出しよう","imperative":"輸出しろ","prohibitive":"輸出するな","condBa":"輸出すれば","condTara":"輸出したら","tai":"輸出したい","teIru":"輸出している","teKudasai":"輸出してください"}},{"key":"v:輸入します","dictionary":"輸入する","group":"irregular","forms":{"dictionary":"輸入する","masu":"輸入します","masuNeg":"輸入しません","masuPast":"輸入しました","masuPastNeg":"輸入しませんでした","te":"輸入して","nai":"輸入しない","naiPast":"輸入しなかった","ta":"輸入した","potential":"輸入できる","passive":"輸入される","causative":"輸入させる","causativePassive":"輸入させられる","volitional":"輸入しよう","imperative":"輸入しろ","prohibitive":"輸入するな","condBa":"輸入すれば","condTara":"輸入したら","tai":"輸入したい","teIru":"輸入している","teKudasai":"輸入してください"}},{"key":"v:翻訳します","dictionary":"翻訳する","group":"irregular","forms":{"dictionary":"翻訳する","masu":"翻訳します","masuNeg":"翻訳しません","masuPast":"翻訳しました","masuPastNeg":"翻訳しませんでした","te":"翻訳して","nai":"翻訳しない","naiPast":"翻訳しなかった","ta":"翻訳した","potential":"翻訳できる","passive":"翻訳される","causative":"翻訳させる","causativePassive":"翻訳させられる","volitional":"翻訳しよう","imperative":"翻訳しろ","prohibitive":"翻訳するな","condBa":"翻訳すれば","condTara":"翻訳したら","tai":"翻訳したい","teIru":"翻訳している","teKudasai":"翻訳してください"}},{"key":"v:発明します","dictionary":"発明する","group":"irregular","forms":{"dictionary":"発明する","masu":"発明します","masuNeg":"発明しません","masuPast":"発明しました","masuPastNeg":"発明しませんでした","te":"発明して","nai":"発明しない","naiPast":"発明しなかった","ta":"発明した","potential":"発明できる","passive":"発明される","causative":"発明させる","causativePassive":"発明させられる","volitional":"発明しよう","imperative":"発明しろ","prohibitive":"発明するな","condBa":"発明すれば","condTara":"発明したら","tai":"発明したい","teIru":"発明している","teKudasai":"発明してください"}},{"key":"v:発見します","dictionary":"発見する","group":"irregular","forms":{"dictionary":"発見する","masu":"発見します","masuNeg":"発見しません","masuPast":"発見しました","masuPastNeg":"発見しませんでした","te":"発見して","nai":"発見しない","naiPast":"発見しなかった","ta":"発見した","potential":"発見できる","passive":"発見される","causative":"発見させる","causativePassive":"発見させられる","volitional":"発見しよう","imperative":"発見しろ","prohibitive":"発見するな","condBa":"発見すれば","condTara":"発見したら","tai":"発見したい","teIru":"発見している","teKudasai":"発見してください"}},{"key":"v:焼けます","dictionary":"焼ける","group":"ichidan","forms":{"dictionary":"焼ける","masu":"焼けます","masuNeg":"焼けません","masuPast":"焼けました","masuPastNeg":"焼けませんでした","te":"焼けて","nai":"焼けない","naiPast":"焼けなかった","ta":"焼けた","potential":"焼けられる","passive":"焼けられる","causative":"焼けさせる","causativePassive":"焼けさせられる","volitional":"焼けよう","imperative":"焼けろ","prohibitive":"焼けるな","condBa":"焼ければ","condTara":"焼けたら","tai":"焼けたい","teIru":"焼けている","teKudasai":"焼けてください"}},{"key":"v:眠ります","dictionary":"眠る","group":"godan","forms":{"dictionary":"眠る","masu":"眠ります","masuNeg":"眠りません","masuPast":"眠りました","masuPastNeg":"眠りませんでした","te":"眠って","nai":"眠らない","naiPast":"眠らなかった","ta":"眠った","potential":"眠れる","passive":"眠られる","causative":"眠らせる","causativePassive":"眠らせられる","volitional":"眠ろう","imperative":"眠れ","prohibitive":"眠るな","condBa":"眠れば","condTara":"眠ったら","tai":"眠りたい","teIru":"眠っている","teKudasai":"眠ってください"}},{"key":"v:彫ります","dictionary":"彫る","group":"godan","forms":{"dictionary":"彫る","masu":"彫ります","masuNeg":"彫りません","masuPast":"彫りました","masuPastNeg":"彫りませんでした","te":"彫って","nai":"彫らない","naiPast":"彫らなかった","ta":"彫った","potential":"彫れる","passive":"彫られる","causative":"彫らせる","causativePassive":"彫らせられる","volitional":"彫ろう","imperative":"彫れ","prohibitive":"彫るな","condBa":"彫れば","condTara":"彫ったら","tai":"彫りたい","teIru":"彫っている","teKudasai":"彫ってください"}},{"key":"v:育てます","dictionary":"育てる","group":"ichidan","forms":{"dictionary":"育てる","masu":"育てます","masuNeg":"育てません","masuPast":"育てました","masuPastNeg":"育てませんでした","te":"育てて","nai":"育てない","naiPast":"育てなかった","ta":"育てた","potential":"育てられる","passive":"育てられる","causative":"育てさせる","causativePassive":"育てさせられる","volitional":"育てよう","imperative":"育てろ","prohibitive":"育てるな","condBa":"育てれば","condTara":"育てたら","tai":"育てたい","teIru":"育てている","teKudasai":"育ててください"}},{"key":"v:入院します","dictionary":"入院する","group":"irregular","forms":{"dictionary":"入院する","masu":"入院します","masuNeg":"入院しません","masuPast":"入院しました","masuPastNeg":"入院しませんでした","te":"入院して","nai":"入院しない","naiPast":"入院しなかった","ta":"入院した","potential":"入院できる","passive":"入院される","causative":"入院させる","causativePassive":"入院させられる","volitional":"入院しよう","imperative":"入院しろ","prohibitive":"入院するな","condBa":"入院すれば","condTara":"入院したら","tai":"入院したい","teIru":"入院している","teKudasai":"入院してください"}},{"key":"v:退院します","dictionary":"退院する","group":"irregular","forms":{"dictionary":"退院する","masu":"退院します","masuNeg":"退院しません","masuPast":"退院しました","masuPastNeg":"退院しませんでした","te":"退院して","nai":"退院しない","naiPast":"退院しなかった","ta":"退院した","potential":"退院できる","passive":"退院される","causative":"退院させる","causativePassive":"退院させられる","volitional":"退院しよう","imperative":"退院しろ","prohibitive":"退院するな","condBa":"退院すれば","condTara":"退院したら","tai":"退院したい","teIru":"退院している","teKudasai":"退院してください"}},{"key":"v:答えます","dictionary":"答える","group":"ichidan","forms":{"dictionary":"答える","masu":"答えます","masuNeg":"答えません","masuPast":"答えました","masuPastNeg":"答えませんでした","te":"答えて","nai":"答えない","naiPast":"答えなかった","ta":"答えた","potential":"答えられる","passive":"答えられる","causative":"答えさせる","causativePassive":"答えさせられる","volitional":"答えよう","imperative":"答えろ","prohibitive":"答えるな","condBa":"答えれば","condTara":"答えたら","tai":"答えたい","teIru":"答えている","teKudasai":"答えてください"}},{"key":"v:通ります","dictionary":"通る","group":"godan","forms":{"dictionary":"通る","masu":"通ります","masuNeg":"通りません","masuPast":"通りました","masuPastNeg":"通りませんでした","te":"通って","nai":"通らない","naiPast":"通らなかった","ta":"通った","potential":"通れる","passive":"通られる","causative":"通らせる","causativePassive":"通らせられる","volitional":"通ろう","imperative":"通れ","prohibitive":"通るな","condBa":"通れば","condTara":"通ったら","tai":"通りたい","teIru":"通っている","teKudasai":"通ってください"}},{"key":"v:死にます","dictionary":"死ぬ","group":"godan","forms":{"dictionary":"死ぬ","masu":"死にます","masuNeg":"死にません","masuPast":"死にました","masuPastNeg":"死にませんでした","te":"死んで","nai":"死なない","naiPast":"死ななかった","ta":"死んだ","potential":"死ねる","passive":"死なれる","causative":"死なせる","causativePassive":"死なせられる","volitional":"死のう","imperative":"死ね","prohibitive":"死ぬな","condBa":"死ねば","condTara":"死んだら","tai":"死にたい","teIru":"死んでいる","teKudasai":"死んでください"}},{"key":"v:びっくりします","dictionary":"びっくりする","group":"irregular","forms":{"dictionary":"びっくりする","masu":"びっくりします","masuNeg":"びっくりしません","masuPast":"びっくりしました","masuPastNeg":"びっくりしませんでした","te":"びっくりして","nai":"びっくりしない","naiPast":"びっくりしなかった","ta":"びっくりした","potential":"びっくりできる","passive":"びっくりされる","causative":"びっくりさせる","causativePassive":"びっくりさせられる","volitional":"びっくりしよう","imperative":"びっくりしろ","prohibitive":"びっくりするな","condBa":"びっくりすれば","condTara":"びっくりしたら","tai":"びっくりしたい","teIru":"びっくりしている","teKudasai":"びっくりしてください"}},{"key":"v:がっかりします","dictionary":"がっかりする","group":"irregular","forms":{"dictionary":"がっかりする","masu":"がっかりします","masuNeg":"がっかりしません","masuPast":"がっかりしました","masuPastNeg":"がっかりしませんでした","te":"がっかりして","nai":"がっかりしない","naiPast":"がっかりしなかった","ta":"がっかりした","potential":"がっかりできる","passive":"がっかりされる","causative":"がっかりさせる","causativePassive":"がっかりさせられる","volitional":"がっかりしよう","imperative":"がっかりしろ","prohibitive":"がっかりするな","condBa":"がっかりすれば","condTara":"がっかりしたら","tai":"がっかりしたい","teIru":"がっかりしている","teKudasai":"がっかりしてください"}},{"key":"v:安心します","dictionary":"安心する","group":"irregular","forms":{"dictionary":"安心する","masu":"安心します","masuNeg":"安心しません","masuPast":"安心しました","masuPastNeg":"安心しませんでした","te":"安心して","nai":"安心しない","naiPast":"安心しなかった","ta":"安心した","potential":"安心できる","passive":"安心される","causative":"安心させる","causativePassive":"安心させられる","volitional":"安心しよう","imperative":"安心しろ","prohibitive":"安心するな","condBa":"安心すれば","condTara":"安心したら","tai":"安心したい","teIru":"安心している","teKudasai":"安心してください"}},{"key":"v:けんかします","dictionary":"けんかする","group":"irregular","forms":{"dictionary":"けんかする","masu":"けんかします","masuNeg":"けんかしません","masuPast":"けんかしました","masuPastNeg":"けんかしませんでした","te":"けんかして","nai":"けんかしない","naiPast":"けんかしなかった","ta":"けんかした","potential":"けんかできる","passive":"けんかされる","causative":"けんかさせる","causativePassive":"けんかさせられる","volitional":"けんかしよう","imperative":"けんかしろ","prohibitive":"けんかするな","condBa":"けんかすれば","condTara":"けんかしたら","tai":"けんかしたい","teIru":"けんかしている","teKudasai":"けんかしてください"}},{"key":"v:離婚します","dictionary":"離婚する","group":"irregular","forms":{"dictionary":"離婚する","masu":"離婚します","masuNeg":"離婚しません","masuPast":"離婚しました","masuPastNeg":"離婚しませんでした","te":"離婚して","nai":"離婚しない","naiPast":"離婚しなかった","ta":"離婚した","potential":"離婚できる","passive":"離婚される","causative":"離婚させる","causativePassive":"離婚させられる","volitional":"離婚しよう","imperative":"離婚しろ","prohibitive":"離婚するな","condBa":"離婚すれば","condTara":"離婚したら","tai":"離婚したい","teIru":"離婚している","teKudasai":"離婚してください"}},{"key":"v:太ります","dictionary":"太る","group":"godan","forms":{"dictionary":"太る","masu":"太ります","masuNeg":"太りません","masuPast":"太りました","masuPastNeg":"太りませんでした","te":"太って","nai":"太らない","naiPast":"太らなかった","ta":"太った","potential":"太れる","passive":"太られる","causative":"太らせる","causativePassive":"太らせられる","volitional":"太ろう","imperative":"太れ","prohibitive":"太るな","condBa":"太れば","condTara":"太ったら","tai":"太りたい","teIru":"太っている","teKudasai":"太ってください"}},{"key":"v:やせます","dictionary":"やせる","group":"ichidan","forms":{"dictionary":"やせる","masu":"やせます","masuNeg":"やせません","masuPast":"やせました","masuPastNeg":"やせませんでした","te":"やせて","nai":"やせない","naiPast":"やせなかった","ta":"やせた","potential":"やせられる","passive":"やせられる","causative":"やせさせる","causativePassive":"やせさせられる","volitional":"やせよう","imperative":"やせろ","prohibitive":"やせるな","condBa":"やせれば","condTara":"やせたら","tai":"やせたい","teIru":"やせている","teKudasai":"やせてください"}},{"key":"v:伺います","dictionary":"伺う","group":"godan","forms":{"dictionary":"伺う","masu":"伺います","masuNeg":"伺いません","masuPast":"伺いました","masuPastNeg":"伺いませんでした","te":"伺って","nai":"伺わない","naiPast":"伺わなかった","ta":"伺った","potential":"伺える","passive":"伺われる","causative":"伺わせる","causativePassive":"伺わせられる","volitional":"伺おう","imperative":"伺え","prohibitive":"伺うな","condBa":"伺えば","condTara":"伺ったら","tai":"伺いたい","teIru":"伺っている","teKudasai":"伺ってください"}},{"key":"v:数えます","dictionary":"数える","group":"ichidan","forms":{"dictionary":"数える","masu":"数えます","masuNeg":"数えません","masuPast":"数えました","masuPastNeg":"数えませんでした","te":"数えて","nai":"数えない","naiPast":"数えなかった","ta":"数えた","potential":"数えられる","passive":"数えられる","causative":"数えさせる","causativePassive":"数えさせられる","volitional":"数えよう","imperative":"数えろ","prohibitive":"数えるな","condBa":"数えれば","condTara":"数えたら","tai":"数えたい","teIru":"数えている","teKudasai":"数えてください"}},{"key":"v:測ります、量ります","dictionary":"測る","group":"godan","forms":{"dictionary":"測る","masu":"測ります","masuNeg":"測りません","masuPast":"測りました","masuPastNeg":"測りませんでした","te":"測って","nai":"測らない","naiPast":"測らなかった","ta":"測った","potential":"測れる","passive":"測られる","causative":"測らせる","causativePassive":"測らせられる","volitional":"測ろう","imperative":"測れ","prohibitive":"測るな","condBa":"測れば","condTara":"測ったら","tai":"測りたい","teIru":"測っている","teKudasai":"測ってください"}},{"key":"v:確かめます","dictionary":"確かめる","group":"ichidan","forms":{"dictionary":"確かめる","masu":"確かめます","masuNeg":"確かめません","masuPast":"確かめました","masuPastNeg":"確かめませんでした","te":"確かめて","nai":"確かめない","naiPast":"確かめなかった","ta":"確かめた","potential":"確かめられる","passive":"確かめられる","causative":"確かめさせる","causativePassive":"確かめさせられる","volitional":"確かめよう","imperative":"確かめろ","prohibitive":"確かめるな","condBa":"確かめれば","condTara":"確かめたら","tai":"確かめたい","teIru":"確かめている","teKudasai":"確かめてください"}},{"key":"v:合います","dictionary":"合う","group":"godan","forms":{"dictionary":"合う","masu":"合います","masuNeg":"合いません","masuPast":"合いました","masuPastNeg":"合いませんでした","te":"合って","nai":"合わない","naiPast":"合わなかった","ta":"合った","potential":"合える","passive":"合われる","causative":"合わせる","causativePassive":"合わせられる","volitional":"合おう","imperative":"合え","prohibitive":"合うな","condBa":"合えば","condTara":"合ったら","tai":"合いたい","teIru":"合っている","teKudasai":"合ってください"}},{"key":"v:出発します","dictionary":"出発する","group":"irregular","forms":{"dictionary":"出発する","masu":"出発します","masuNeg":"出発しません","masuPast":"出発しました","masuPastNeg":"出発しませんでした","te":"出発して","nai":"出発しない","naiPast":"出発しなかった","ta":"出発した","potential":"出発できる","passive":"出発される","causative":"出発させる","causativePassive":"出発させられる","volitional":"出発しよう","imperative":"出発しろ","prohibitive":"出発するな","condBa":"出発すれば","condTara":"出発したら","tai":"出発したい","teIru":"出発している","teKudasai":"出発してください"}},{"key":"v:到着します","dictionary":"到着する","group":"irregular","forms":{"dictionary":"到着する","masu":"到着します","masuNeg":"到着しません","masuPast":"到着しました","masuPastNeg":"到着しませんでした","te":"到着して","nai":"到着しない","naiPast":"到着しなかった","ta":"到着した","potential":"到着できる","passive":"到着される","causative":"到着させる","causativePassive":"到着させられる","volitional":"到着しよう","imperative":"到着しろ","prohibitive":"到着するな","condBa":"到着すれば","condTara":"到着したら","tai":"到着したい","teIru":"到着している","teKudasai":"到着してください"}},{"key":"v:酔います","dictionary":"酔う","group":"godan","forms":{"dictionary":"酔う","masu":"酔います","masuNeg":"酔いません","masuPast":"酔いました","masuPastNeg":"酔いませんでした","te":"酔って","nai":"酔わない","naiPast":"酔わなかった","ta":"酔った","potential":"酔える","passive":"酔われる","causative":"酔わせる","causativePassive":"酔わせられる","volitional":"酔おう","imperative":"酔え","prohibitive":"酔うな","condBa":"酔えば","condTara":"酔ったら","tai":"酔いたい","teIru":"酔っている","teKudasai":"酔ってください"}},{"key":"v:ほんとう","dictionary":"ほんとう","group":"godan","forms":{"dictionary":"ほんとう","masu":"ほんといます","masuNeg":"ほんといません","masuPast":"ほんといました","masuPastNeg":"ほんといませんでした","te":"ほんとって","nai":"ほんとわない","naiPast":"ほんとわなかった","ta":"ほんとった","potential":"ほんとえる","passive":"ほんとわれる","causative":"ほんとわせる","causativePassive":"ほんとわせられる","volitional":"ほんとおう","imperative":"ほんとえ","prohibitive":"ほんとうな","condBa":"ほんとえば","condTara":"ほんとったら","tai":"ほんといたい","teIru":"ほんとっている","teKudasai":"ほんとってください"}},{"key":"v:くださいます","dictionary":"くださる","group":"godan","forms":{"dictionary":"くださる","masu":"くださいます","masuNeg":"くださいません","masuPast":"くださいました","masuPastNeg":"くださいませんでした","te":"くださって","nai":"くださらない","naiPast":"くださらなかった","ta":"くださった","potential":"くだされる","passive":"くださられる","causative":"くださらせる","causativePassive":"くださらせられる","volitional":"くださろう","imperative":"くだされ","prohibitive":"くださるな","condBa":"くだされば","condTara":"くださったら","tai":"くださりたい","teIru":"くださっている","teKudasai":"くださってください"}},{"key":"v:上げます","dictionary":"上げる","group":"ichidan","forms":{"dictionary":"上げる","masu":"上げます","masuNeg":"上げません","masuPast":"上げました","masuPastNeg":"上げませんでした","te":"上げて","nai":"上げない","naiPast":"上げなかった","ta":"上げた","potential":"上げられる","passive":"上げられる","causative":"上げさせる","causativePassive":"上げさせられる","volitional":"上げよう","imperative":"上げろ","prohibitive":"上げるな","condBa":"上げれば","condTara":"上げたら","tai":"上げたい","teIru":"上げている","teKudasai":"上げてください"}},{"key":"v:下げます","dictionary":"下げる","group":"ichidan","forms":{"dictionary":"下げる","masu":"下げます","masuNeg":"下げません","masuPast":"下げました","masuPastNeg":"下げませんでした","te":"下げて","nai":"下げない","naiPast":"下げなかった","ta":"下げた","potential":"下げられる","passive":"下げられる","causative":"下げさせる","causativePassive":"下げさせられる","volitional":"下げよう","imperative":"下げろ","prohibitive":"下げるな","condBa":"下げれば","condTara":"下げたら","tai":"下げたい","teIru":"下げている","teKudasai":"下げてください"}},{"key":"v:親切にします","dictionary":"親切にする","group":"irregular","forms":{"dictionary":"親切にする","masu":"親切にします","masuNeg":"親切にしません","masuPast":"親切にしました","masuPastNeg":"親切にしませんでした","te":"親切にして","nai":"親切にしない","naiPast":"親切にしなかった","ta":"親切にした","potential":"親切にできる","passive":"親切にされる","causative":"親切にさせる","causativePassive":"親切にさせられる","volitional":"親切にしよう","imperative":"親切にしろ","prohibitive":"親切にするな","condBa":"親切にすれば","condTara":"親切にしたら","tai":"親切にしたい","teIru":"親切にしている","teKudasai":"親切にしてください"}},{"key":"v:いじめます","dictionary":"いじめる","group":"ichidan","forms":{"dictionary":"いじめる","masu":"いじめます","masuNeg":"いじめません","masuPast":"いじめました","masuPastNeg":"いじめませんでした","te":"いじめて","nai":"いじめない","naiPast":"いじめなかった","ta":"いじめた","potential":"いじめられる","passive":"いじめられる","causative":"いじめさせる","causativePassive":"いじめさせられる","volitional":"いじめよう","imperative":"いじめろ","prohibitive":"いじめるな","condBa":"いじめれば","condTara":"いじめたら","tai":"いじめたい","teIru":"いじめている","teKudasai":"いじめてください"}},{"key":"v:助けます","dictionary":"助ける","group":"ichidan","forms":{"dictionary":"助ける","masu":"助けます","masuNeg":"助けません","masuPast":"助けました","masuPastNeg":"助けませんでした","te":"助けて","nai":"助けない","naiPast":"助けなかった","ta":"助けた","potential":"助けられる","passive":"助けられる","causative":"助けさせる","causativePassive":"助けさせられる","volitional":"助けよう","imperative":"助けろ","prohibitive":"助けるな","condBa":"助ければ","condTara":"助けたら","tai":"助けたい","teIru":"助けている","teKudasai":"助けてください"}},{"key":"v:暮らします","dictionary":"暮らす","group":"godan","forms":{"dictionary":"暮らす","masu":"暮らします","masuNeg":"暮らしません","masuPast":"暮らしました","masuPastNeg":"暮らしませんでした","te":"暮らして","nai":"暮らさない","naiPast":"暮らさなかった","ta":"暮らした","potential":"暮らせる","passive":"暮らされる","causative":"暮らさせる","causativePassive":"暮らさせられる","volitional":"暮らそう","imperative":"暮らせ","prohibitive":"暮らすな","condBa":"暮らせば","condTara":"暮らしたら","tai":"暮らしたい","teIru":"暮らしている","teKudasai":"暮らしてください"}},{"key":"v:包みます","dictionary":"包む","group":"godan","forms":{"dictionary":"包む","masu":"包みます","masuNeg":"包みません","masuPast":"包みました","masuPastNeg":"包みませんでした","te":"包んで","nai":"包まない","naiPast":"包まなかった","ta":"包んだ","potential":"包める","passive":"包まれる","causative":"包ませる","causativePassive":"包ませられる","volitional":"包もう","imperative":"包め","prohibitive":"包むな","condBa":"包めば","condTara":"包んだら","tai":"包みたい","teIru":"包んでいる","teKudasai":"包んでください"}},{"key":"v:沸かします","dictionary":"沸かす","group":"godan","forms":{"dictionary":"沸かす","masu":"沸かします","masuNeg":"沸かしません","masuPast":"沸かしました","masuPastNeg":"沸かしませんでした","te":"沸かして","nai":"沸かさない","naiPast":"沸かさなかった","ta":"沸かした","potential":"沸かせる","passive":"沸かされる","causative":"沸かさせる","causativePassive":"沸かさせられる","volitional":"沸かそう","imperative":"沸かせ","prohibitive":"沸かすな","condBa":"沸かせば","condTara":"沸かしたら","tai":"沸かしたい","teIru":"沸かしている","teKudasai":"沸かしてください"}},{"key":"v:混ぜます","dictionary":"混ぜる","group":"ichidan","forms":{"dictionary":"混ぜる","masu":"混ぜます","masuNeg":"混ぜません","masuPast":"混ぜました","masuPastNeg":"混ぜませんでした","te":"混ぜて","nai":"混ぜない","naiPast":"混ぜなかった","ta":"混ぜた","potential":"混ぜられる","passive":"混ぜられる","causative":"混ぜさせる","causativePassive":"混ぜさせられる","volitional":"混ぜよう","imperative":"混ぜろ","prohibitive":"混ぜるな","condBa":"混ぜれば","condTara":"混ぜたら","tai":"混ぜたい","teIru":"混ぜている","teKudasai":"混ぜてください"}},{"key":"v:計算します","dictionary":"計算する","group":"irregular","forms":{"dictionary":"計算する","masu":"計算します","masuNeg":"計算しません","masuPast":"計算しました","masuPastNeg":"計算しませんでした","te":"計算して","nai":"計算しない","naiPast":"計算しなかった","ta":"計算した","potential":"計算できる","passive":"計算される","causative":"計算させる","causativePassive":"計算させられる","volitional":"計算しよう","imperative":"計算しろ","prohibitive":"計算するな","condBa":"計算すれば","condTara":"計算したら","tai":"計算したい","teIru":"計算している","teKudasai":"計算してください"}},{"key":"v:並びます","dictionary":"並ぶ","group":"godan","forms":{"dictionary":"並ぶ","masu":"並びます","masuNeg":"並びません","masuPast":"並びました","masuPastNeg":"並びませんでした","te":"並んで","nai":"並ばない","naiPast":"並ばなかった","ta":"並んだ","potential":"並べる","passive":"並ばれる","causative":"並ばせる","causativePassive":"並ばせられる","volitional":"並ぼう","imperative":"並べ","prohibitive":"並ぶな","condBa":"並べば","condTara":"並んだら","tai":"並びたい","teIru":"並んでいる","teKudasai":"並んでください"}},{"key":"v:増えます","dictionary":"増える","group":"ichidan","forms":{"dictionary":"増える","masu":"増えます","masuNeg":"増えません","masuPast":"増えました","masuPastNeg":"増えませんでした","te":"増えて","nai":"増えない","naiPast":"増えなかった","ta":"増えた","potential":"増えられる","passive":"増えられる","causative":"増えさせる","causativePassive":"増えさせられる","volitional":"増えよう","imperative":"増えろ","prohibitive":"増えるな","condBa":"増えれば","condTara":"増えたら","tai":"増えたい","teIru":"増えている","teKudasai":"増えてください"}},{"key":"v:減ります","dictionary":"減る","group":"godan","forms":{"dictionary":"減る","masu":"減ります","masuNeg":"減りません","masuPast":"減りました","masuPastNeg":"減りませんでした","te":"減って","nai":"減らない","naiPast":"減らなかった","ta":"減った","potential":"減れる","passive":"減られる","causative":"減らせる","causativePassive":"減らせられる","volitional":"減ろう","imperative":"減れ","prohibitive":"減るな","condBa":"減れば","condTara":"減ったら","tai":"減りたい","teIru":"減っている","teKudasai":"減ってください"}},{"key":"v:上がります","dictionary":"上がる","group":"godan","forms":{"dictionary":"上がる","masu":"上がります","masuNeg":"上がりません","masuPast":"上がりました","masuPastNeg":"上がりませんでした","te":"上がって","nai":"上がらない","naiPast":"上がらなかった","ta":"上がった","potential":"上がれる","passive":"上がられる","causative":"上がらせる","causativePassive":"上がらせられる","volitional":"上がろう","imperative":"上がれ","prohibitive":"上がるな","condBa":"上がれば","condTara":"上がったら","tai":"上がりたい","teIru":"上がっている","teKudasai":"上がってください"}},{"key":"v:下がります","dictionary":"下がる","group":"godan","forms":{"dictionary":"下がる","masu":"下がります","masuNeg":"下がりません","masuPast":"下がりました","masuPastNeg":"下がりませんでした","te":"下がって","nai":"下がらない","naiPast":"下がらなかった","ta":"下がった","potential":"下がれる","passive":"下がられる","causative":"下がらせる","causativePassive":"下がらせられる","volitional":"下がろう","imperative":"下がれ","prohibitive":"下がるな","condBa":"下がれば","condTara":"下がったら","tai":"下がりたい","teIru":"下がっている","teKudasai":"下がってください"}},{"key":"v:切れます","dictionary":"切れる","group":"ichidan","forms":{"dictionary":"切れる","masu":"切れます","masuNeg":"切れません","masuPast":"切れました","masuPastNeg":"切れませんでした","te":"切れて","nai":"切れない","naiPast":"切れなかった","ta":"切れた","potential":"切れられる","passive":"切れられる","causative":"切れさせる","causativePassive":"切れさせられる","volitional":"切れよう","imperative":"切れろ","prohibitive":"切れるな","condBa":"切れれば","condTara":"切れたら","tai":"切れたい","teIru":"切れている","teKudasai":"切れてください"}},{"key":"v:とれます","dictionary":"とれる","group":"ichidan","forms":{"dictionary":"とれる","masu":"とれます","masuNeg":"とれません","masuPast":"とれました","masuPastNeg":"とれませんでした","te":"とれて","nai":"とれない","naiPast":"とれなかった","ta":"とれた","potential":"とれられる","passive":"とれられる","causative":"とれさせる","causativePassive":"とれさせられる","volitional":"とれよう","imperative":"とれろ","prohibitive":"とれるな","condBa":"とれれば","condTara":"とれたら","tai":"とれたい","teIru":"とれている","teKudasai":"とれてください"}},{"key":"v:落ちます","dictionary":"落つ","group":"godan","forms":{"dictionary":"落つ","masu":"落ちます","masuNeg":"落ちません","masuPast":"落ちました","masuPastNeg":"落ちませんでした","te":"落って","nai":"落たない","naiPast":"落たなかった","ta":"落った","potential":"落てる","passive":"落たれる","causative":"落たせる","causativePassive":"落たせられる","volitional":"落とう","imperative":"落て","prohibitive":"落つな","condBa":"落てば","condTara":"落ったら","tai":"落ちたい","teIru":"落っている","teKudasai":"落ってください"}},{"key":"v:なくなります","dictionary":"なくなる","group":"godan","forms":{"dictionary":"なくなる","masu":"なくなります","masuNeg":"なくなりません","masuPast":"なくなりました","masuPastNeg":"なくなりませんでした","te":"なくなって","nai":"なくならない","naiPast":"なくならなかった","ta":"なくなった","potential":"なくなれる","passive":"なくなられる","causative":"なくならせる","causativePassive":"なくならせられる","volitional":"なくなろう","imperative":"なくなれ","prohibitive":"なくなるな","condBa":"なくなれば","condTara":"なくなったら","tai":"なくなりたい","teIru":"なくなっている","teKudasai":"なくなってください"}},{"key":"v:謝ります","dictionary":"謝る","group":"godan","forms":{"dictionary":"謝る","masu":"謝ります","masuNeg":"謝りません","masuPast":"謝りました","masuPastNeg":"謝りませんでした","te":"謝って","nai":"謝らない","naiPast":"謝らなかった","ta":"謝った","potential":"謝れる","passive":"謝られる","causative":"謝らせる","causativePassive":"謝らせられる","volitional":"謝ろう","imperative":"謝れ","prohibitive":"謝るな","condBa":"謝れば","condTara":"謝ったら","tai":"謝りたい","teIru":"謝っている","teKudasai":"謝ってください"}},{"key":"v:知り合います","dictionary":"知り合う","group":"godan","forms":{"dictionary":"知り合う","masu":"知り合います","masuNeg":"知り合いません","masuPast":"知り合いました","masuPastNeg":"知り合いませんでした","te":"知り合って","nai":"知り合わない","naiPast":"知り合わなかった","ta":"知り合った","potential":"知り合える","passive":"知り合われる","causative":"知り合わせる","causativePassive":"知り合わせられる","volitional":"知り合おう","imperative":"知り合え","prohibitive":"知り合うな","condBa":"知り合えば","condTara":"知り合ったら","tai":"知り合いたい","teIru":"知り合っている","teKudasai":"知り合ってください"}},{"key":"v:泣きます","dictionary":"泣く","group":"godan","forms":{"dictionary":"泣く","masu":"泣きます","masuNeg":"泣きません","masuPast":"泣きました","masuPastNeg":"泣きませんでした","te":"泣いて","nai":"泣かない","naiPast":"泣かなかった","ta":"泣いた","potential":"泣ける","passive":"泣かれる","causative":"泣かせる","causativePassive":"泣かせられる","volitional":"泣こう","imperative":"泣け","prohibitive":"泣くな","condBa":"泣けば","condTara":"泣いたら","tai":"泣きたい","teIru":"泣いている","teKudasai":"泣いてください"}},{"key":"v:笑います","dictionary":"笑う","group":"godan","forms":{"dictionary":"笑う","masu":"笑います","masuNeg":"笑いません","masuPast":"笑いました","masuPastNeg":"笑いませんでした","te":"笑って","nai":"笑わない","naiPast":"笑わなかった","ta":"笑った","potential":"笑える","passive":"笑われる","causative":"笑わせる","causativePassive":"笑わせられる","volitional":"笑おう","imperative":"笑え","prohibitive":"笑うな","condBa":"笑えば","condTara":"笑ったら","tai":"笑いたい","teIru":"笑っている","teKudasai":"笑ってください"}},{"key":"v:乾きます","dictionary":"乾く","group":"godan","forms":{"dictionary":"乾く","masu":"乾きます","masuNeg":"乾きません","masuPast":"乾きました","masuPastNeg":"乾きませんでした","te":"乾いて","nai":"乾かない","naiPast":"乾かなかった","ta":"乾いた","potential":"乾ける","passive":"乾かれる","causative":"乾かせる","causativePassive":"乾かせられる","volitional":"乾こう","imperative":"乾け","prohibitive":"乾くな","condBa":"乾けば","condTara":"乾いたら","tai":"乾きたい","teIru":"乾いている","teKudasai":"乾いてください"}},{"key":"v:濡れます","dictionary":"濡れる","group":"ichidan","forms":{"dictionary":"濡れる","masu":"濡れます","masuNeg":"濡れません","masuPast":"濡れました","masuPastNeg":"濡れませんでした","te":"濡れて","nai":"濡れない","naiPast":"濡れなかった","ta":"濡れた","potential":"濡れられる","passive":"濡れられる","causative":"濡れさせる","causativePassive":"濡れさせられる","volitional":"濡れよう","imperative":"濡れろ","prohibitive":"濡れるな","condBa":"濡れれば","condTara":"濡れたら","tai":"濡れたい","teIru":"濡れている","teKudasai":"濡れてください"}},{"key":"v:滑ります","dictionary":"滑る","group":"ichidan","forms":{"dictionary":"滑る","masu":"滑ます","masuNeg":"滑ません","masuPast":"滑ました","masuPastNeg":"滑ませんでした","te":"滑て","nai":"滑ない","naiPast":"滑なかった","ta":"滑た","potential":"滑られる","passive":"滑られる","causative":"滑させる","causativePassive":"滑させられる","volitional":"滑よう","imperative":"滑ろ","prohibitive":"滑るな","condBa":"滑れば","condTara":"滑たら","tai":"滑たい","teIru":"滑ている","teKudasai":"滑てください"}},{"key":"v:調節します","dictionary":"調節する","group":"irregular","forms":{"dictionary":"調節する","masu":"調節します","masuNeg":"調節しません","masuPast":"調節しました","masuPastNeg":"調節しませんでした","te":"調節して","nai":"調節しない","naiPast":"調節しなかった","ta":"調節した","potential":"調節できる","passive":"調節される","causative":"調節させる","causativePassive":"調節させられる","volitional":"調節しよう","imperative":"調節しろ","prohibitive":"調節するな","condBa":"調節すれば","condTara":"調節したら","tai":"調節したい","teIru":"調節している","teKudasai":"調節してください"}},{"key":"v:嫌がります","dictionary":"嫌がる","group":"godan","forms":{"dictionary":"嫌がる","masu":"嫌がります","masuNeg":"嫌がりません","masuPast":"嫌がりました","masuPastNeg":"嫌がりませんでした","te":"嫌がって","nai":"嫌がらない","naiPast":"嫌がらなかった","ta":"嫌がった","potential":"嫌がれる","passive":"嫌がられる","causative":"嫌がらせる","causativePassive":"嫌がらせられる","volitional":"嫌がろう","imperative":"嫌がれ","prohibitive":"嫌がるな","condBa":"嫌がれば","condTara":"嫌がったら","tai":"嫌がりたい","teIru":"嫌がっている","teKudasai":"嫌がってください"}},{"key":"v:うまく","dictionary":"うまく","group":"godan","forms":{"dictionary":"うまく","masu":"うまきます","masuNeg":"うまきません","masuPast":"うまきました","masuPastNeg":"うまきませんでした","te":"うまいて","nai":"うまかない","naiPast":"うまかなかった","ta":"うまいた","potential":"うまける","passive":"うまかれる","causative":"うまかせる","causativePassive":"うまかせられる","volitional":"うまこう","imperative":"うまけ","prohibitive":"うまくな","condBa":"うまけば","condTara":"うまいたら","tai":"うまきたい","teIru":"うまいている","teKudasai":"うまいてください"}},{"key":"v:別れます","dictionary":"別れる","group":"ichidan","forms":{"dictionary":"別れる","masu":"別れます","masuNeg":"別れません","masuPast":"別れました","masuPastNeg":"別れませんでした","te":"別れて","nai":"別れない","naiPast":"別れなかった","ta":"別れた","potential":"別れられる","passive":"別れられる","causative":"別れさせる","causativePassive":"別れさせられる","volitional":"別れよう","imperative":"別れろ","prohibitive":"別れるな","condBa":"別れれば","condTara":"別れたら","tai":"別れたい","teIru":"別れている","teKudasai":"別れてください"}},{"key":"v:信じます","dictionary":"信じる","group":"ichidan","forms":{"dictionary":"信じる","masu":"信じます","masuNeg":"信じません","masuPast":"信じました","masuPastNeg":"信じませんでした","te":"信じて","nai":"信じない","naiPast":"信じなかった","ta":"信じた","potential":"信じられる","passive":"信じられる","causative":"信じさせる","causativePassive":"信じさせられる","volitional":"信じよう","imperative":"信じろ","prohibitive":"信じるな","condBa":"信じれば","condTara":"信じたら","tai":"信じたい","teIru":"信じている","teKudasai":"信じてください"}},{"key":"v:キャンセルします","dictionary":"キャンセルする","group":"irregular","forms":{"dictionary":"キャンセルする","masu":"キャンセルします","masuNeg":"キャンセルしません","masuPast":"キャンセルしました","masuPastNeg":"キャンセルしませんでした","te":"キャンセルして","nai":"キャンセルしない","naiPast":"キャンセルしなかった","ta":"キャンセルした","potential":"キャンセルできる","passive":"キャンセルされる","causative":"キャンセルさせる","causativePassive":"キャンセルさせられる","volitional":"キャンセルしよう","imperative":"キャンセルしろ","prohibitive":"キャンセルするな","condBa":"キャンセルすれば","condTara":"キャンセルしたら","tai":"キャンセルしたい","teIru":"キャンセルしている","teKudasai":"キャンセルしてください"}},{"key":"v:優勝します","dictionary":"優勝する","group":"irregular","forms":{"dictionary":"優勝する","masu":"優勝します","masuNeg":"優勝しません","masuPast":"優勝しました","masuPastNeg":"優勝しませんでした","te":"優勝して","nai":"優勝しない","naiPast":"優勝しなかった","ta":"優勝した","potential":"優勝できる","passive":"優勝される","causative":"優勝させる","causativePassive":"優勝させられる","volitional":"優勝しよう","imperative":"優勝しろ","prohibitive":"優勝するな","condBa":"優勝すれば","condTara":"優勝したら","tai":"優勝したい","teIru":"優勝している","teKudasai":"優勝してください"}},{"key":"v:鳴ります","dictionary":"鳴る","group":"godan","forms":{"dictionary":"鳴る","masu":"鳴ります","masuNeg":"鳴りません","masuPast":"鳴りました","masuPastNeg":"鳴りませんでした","te":"鳴って","nai":"鳴らない","naiPast":"鳴らなかった","ta":"鳴った","potential":"鳴れる","passive":"鳴られる","causative":"鳴らせる","causativePassive":"鳴らせられる","volitional":"鳴ろう","imperative":"鳴れ","prohibitive":"鳴るな","condBa":"鳴れば","condTara":"鳴ったら","tai":"鳴りたい","teIru":"鳴っている","teKudasai":"鳴ってください"}},{"key":"v:渡します","dictionary":"渡す","group":"godan","forms":{"dictionary":"渡す","masu":"渡します","masuNeg":"渡しません","masuPast":"渡しました","masuPastNeg":"渡しませんでした","te":"渡して","nai":"渡さない","naiPast":"渡さなかった","ta":"渡した","potential":"渡せる","passive":"渡される","causative":"渡させる","causativePassive":"渡させられる","volitional":"渡そう","imperative":"渡せ","prohibitive":"渡すな","condBa":"渡せば","condTara":"渡したら","tai":"渡したい","teIru":"渡している","teKudasai":"渡してください"}},{"key":"v:届きます","dictionary":"届く","group":"godan","forms":{"dictionary":"届く","masu":"届きます","masuNeg":"届きません","masuPast":"届きました","masuPastNeg":"届きませんでした","te":"届いて","nai":"届かない","naiPast":"届かなかった","ta":"届いた","potential":"届ける","passive":"届かれる","causative":"届かせる","causativePassive":"届かせられる","volitional":"届こう","imperative":"届け","prohibitive":"届くな","condBa":"届けば","condTara":"届いたら","tai":"届きたい","teIru":"届いている","teKudasai":"届いてください"}},{"key":"v:入学します","dictionary":"入学する","group":"irregular","forms":{"dictionary":"入学する","masu":"入学します","masuNeg":"入学しません","masuPast":"入学しました","masuPastNeg":"入学しませんでした","te":"入学して","nai":"入学しない","naiPast":"入学しなかった","ta":"入学した","potential":"入学できる","passive":"入学される","causative":"入学させる","causativePassive":"入学させられる","volitional":"入学しよう","imperative":"入学しろ","prohibitive":"入学するな","condBa":"入学すれば","condTara":"入学したら","tai":"入学したい","teIru":"入学している","teKudasai":"入学してください"}},{"key":"v:焼きます","dictionary":"焼く","group":"godan","forms":{"dictionary":"焼く","masu":"焼きます","masuNeg":"焼きません","masuPast":"焼きました","masuPastNeg":"焼きませんでした","te":"焼いて","nai":"焼かない","naiPast":"焼かなかった","ta":"焼いた","potential":"焼ける","passive":"焼かれる","causative":"焼かせる","causativePassive":"焼かせられる","volitional":"焼こう","imperative":"焼け","prohibitive":"焼くな","condBa":"焼けば","condTara":"焼いたら","tai":"焼きたい","teIru":"焼いている","teKudasai":"焼いてください"}},{"key":"v:向かいます","dictionary":"向かう","group":"godan","forms":{"dictionary":"向かう","masu":"向かいます","masuNeg":"向かいません","masuPast":"向かいました","masuPastNeg":"向かいませんでした","te":"向かって","nai":"向かわない","naiPast":"向かわなかった","ta":"向かった","potential":"向かえる","passive":"向かわれる","causative":"向かわせる","causativePassive":"向かわせられる","volitional":"向かおう","imperative":"向かえ","prohibitive":"向かうな","condBa":"向かえば","condTara":"向かったら","tai":"向かいたい","teIru":"向かっている","teKudasai":"向かってください"}},{"key":"v:転びます","dictionary":"転ぶ","group":"godan","forms":{"dictionary":"転ぶ","masu":"転びます","masuNeg":"転びません","masuPast":"転びました","masuPastNeg":"転びませんでした","te":"転んで","nai":"転ばない","naiPast":"転ばなかった","ta":"転んだ","potential":"転べる","passive":"転ばれる","causative":"転ばせる","causativePassive":"転ばせられる","volitional":"転ぼう","imperative":"転べ","prohibitive":"転ぶな","condBa":"転べば","condTara":"転んだら","tai":"転びたい","teIru":"転んでいる","teKudasai":"転んでください"}},{"key":"v:集まります","dictionary":"集まる","group":"godan","forms":{"dictionary":"集まる","masu":"集まります","masuNeg":"集まりません","masuPast":"集まりました","masuPastNeg":"集まりませんでした","te":"集まって","nai":"集まらない","naiPast":"集まらなかった","ta":"集まった","potential":"集まれる","passive":"集まられる","causative":"集まらせる","causativePassive":"集まらせられる","volitional":"集まろう","imperative":"集まれ","prohibitive":"集まるな","condBa":"集まれば","condTara":"集まったら","tai":"集まりたい","teIru":"集まっている","teKudasai":"集まってください"}},{"key":"v:長生きします","dictionary":"長生きする","group":"irregular","forms":{"dictionary":"長生きする","masu":"長生きします","masuNeg":"長生きしません","masuPast":"長生きしました","masuPastNeg":"長生きしませんでした","te":"長生きして","nai":"長生きしない","naiPast":"長生きしなかった","ta":"長生きした","potential":"長生きできる","passive":"長生きされる","causative":"長生きさせる","causativePassive":"長生きさせられる","volitional":"長生きしよう","imperative":"長生きしろ","prohibitive":"長生きするな","condBa":"長生きすれば","condTara":"長生きしたら","tai":"長生きしたい","teIru":"長生きしている","teKudasai":"長生きしてください"}},{"key":"v:婚約します","dictionary":"婚約する","group":"irregular","forms":{"dictionary":"婚約する","masu":"婚約します","masuNeg":"婚約しません","masuPast":"婚約しました","masuPastNeg":"婚約しませんでした","te":"婚約して","nai":"婚約しない","naiPast":"婚約しなかった","ta":"婚約した","potential":"婚約できる","passive":"婚約される","causative":"婚約させる","causativePassive":"婚約させられる","volitional":"婚約しよう","imperative":"婚約しろ","prohibitive":"婚約するな","condBa":"婚約すれば","condTara":"婚約したら","tai":"婚約したい","teIru":"婚約している","teKudasai":"婚約してください"}},{"key":"v:比べます","dictionary":"比べる","group":"ichidan","forms":{"dictionary":"比べる","masu":"比べます","masuNeg":"比べません","masuPast":"比べました","masuPastNeg":"比べませんでした","te":"比べて","nai":"比べない","naiPast":"比べなかった","ta":"比べた","potential":"比べられる","passive":"比べられる","causative":"比べさせる","causativePassive":"比べさせられる","volitional":"比べよう","imperative":"比べろ","prohibitive":"比べるな","condBa":"比べれば","condTara":"比べたら","tai":"比べたい","teIru":"比べている","teKudasai":"比べてください"}},{"key":"v:下ろします","dictionary":"下ろす","group":"godan","forms":{"dictionary":"下ろす","masu":"下ろします","masuNeg":"下ろしません","masuPast":"下ろしました","masuPastNeg":"下ろしませんでした","te":"下ろして","nai":"下ろさない","naiPast":"下ろさなかった","ta":"下ろした","potential":"下ろせる","passive":"下ろされる","causative":"下ろさせる","causativePassive":"下ろさせられる","volitional":"下ろそう","imperative":"下ろせ","prohibitive":"下ろすな","condBa":"下ろせば","condTara":"下ろしたら","tai":"下ろしたい","teIru":"下ろしている","teKudasai":"下ろしてください"}},{"key":"v:届けます","dictionary":"届ける","group":"ichidan","forms":{"dictionary":"届ける","masu":"届けます","masuNeg":"届けません","masuPast":"届けました","masuPastNeg":"届けませんでした","te":"届けて","nai":"届けない","naiPast":"届けなかった","ta":"届けた","potential":"届けられる","passive":"届けられる","causative":"届けさせる","causativePassive":"届けさせられる","volitional":"届けよう","imperative":"届けろ","prohibitive":"届けるな","condBa":"届ければ","condTara":"届けたら","tai":"届けたい","teIru":"届けている","teKudasai":"届けてください"}},{"key":"v:世話をします","dictionary":"世話をする","group":"irregular","forms":{"dictionary":"世話をする","masu":"世話をします","masuNeg":"世話をしません","masuPast":"世話をしました","masuPastNeg":"世話をしませんでした","te":"世話をして","nai":"世話をしない","naiPast":"世話をしなかった","ta":"世話をした","potential":"世話をできる","passive":"世話をされる","causative":"世話をさせる","causativePassive":"世話をさせられる","volitional":"世話をしよう","imperative":"世話をしろ","prohibitive":"世話をするな","condBa":"世話をすれば","condTara":"世話をしたら","tai":"世話をしたい","teIru":"世話をしている","teKudasai":"世話をしてください"}},{"key":"v:録音します","dictionary":"録音する","group":"irregular","forms":{"dictionary":"録音する","masu":"録音します","masuNeg":"録音しません","masuPast":"録音しました","masuPastNeg":"録音しませんでした","te":"録音して","nai":"録音しない","naiPast":"録音しなかった","ta":"録音した","potential":"録音できる","passive":"録音される","causative":"録音させる","causativePassive":"録音させられる","volitional":"録音しよう","imperative":"録音しろ","prohibitive":"録音するな","condBa":"録音すれば","condTara":"録音したら","tai":"録音したい","teIru":"録音している","teKudasai":"録音してください"}},{"key":"v:楽しみます","dictionary":"楽しむ","group":"godan","forms":{"dictionary":"楽しむ","masu":"楽しみます","masuNeg":"楽しみません","masuPast":"楽しみました","masuPastNeg":"楽しみませんでした","te":"楽しんで","nai":"楽しまない","naiPast":"楽しまなかった","ta":"楽しんだ","potential":"楽しめる","passive":"楽しまれる","causative":"楽しませる","causativePassive":"楽しませられる","volitional":"楽しもう","imperative":"楽しめ","prohibitive":"楽しむな","condBa":"楽しめば","condTara":"楽しんだら","tai":"楽しみたい","teIru":"楽しんでいる","teKudasai":"楽しんでください"}},{"key":"v:召し上がります","dictionary":"召し上がる","group":"godan","forms":{"dictionary":"召し上がる","masu":"召し上がります","masuNeg":"召し上がりません","masuPast":"召し上がりました","masuPastNeg":"召し上がりませんでした","te":"召し上がって","nai":"召し上がらない","naiPast":"召し上がらなかった","ta":"召し上がった","potential":"召し上がれる","passive":"召し上がられる","causative":"召し上がらせる","causativePassive":"召し上がらせられる","volitional":"召し上がろう","imperative":"召し上がれ","prohibitive":"召し上がるな","condBa":"召し上がれば","condTara":"召し上がったら","tai":"召し上がりたい","teIru":"召し上がっている","teKudasai":"召し上がってください"}},{"key":"v:おっしゃいます","dictionary":"おっしゃる","group":"godan","forms":{"dictionary":"おっしゃる","masu":"おっしゃいます","masuNeg":"おっしゃいません","masuPast":"おっしゃいました","masuPastNeg":"おっしゃいませんでした","te":"おっしゃって","nai":"おっしゃらない","naiPast":"おっしゃらなかった","ta":"おっしゃった","potential":"おっしゃれる","passive":"おっしゃられる","causative":"おっしゃらせる","causativePassive":"おっしゃらせられる","volitional":"おっしゃろう","imperative":"おっしゃれ","prohibitive":"おっしゃるな","condBa":"おっしゃれば","condTara":"おっしゃったら","tai":"おっしゃりたい","teIru":"おっしゃっている","teKudasai":"おっしゃってください"}},{"key":"v:なさいます","dictionary":"なさる","group":"godan","forms":{"dictionary":"なさる","masu":"なさいます","masuNeg":"なさいません","masuPast":"なさいました","masuPastNeg":"なさいませんでした","te":"なさって","nai":"なさらない","naiPast":"なさらなかった","ta":"なさった","potential":"なされる","passive":"なさられる","causative":"なさらせる","causativePassive":"なさらせられる","volitional":"なさろう","imperative":"なされ","prohibitive":"なさるな","condBa":"なされば","condTara":"なさったら","tai":"なさりたい","teIru":"なさっている","teKudasai":"なさってください"}},{"key":"v:ご覧になります","dictionary":"ご覧になる","group":"godan","forms":{"dictionary":"ご覧になる","masu":"ご覧になります","masuNeg":"ご覧になりません","masuPast":"ご覧になりました","masuPastNeg":"ご覧になりませんでした","te":"ご覧になって","nai":"ご覧にならない","naiPast":"ご覧にならなかった","ta":"ご覧になった","potential":"ご覧になれる","passive":"ご覧になられる","causative":"ご覧にならせる","causativePassive":"ご覧にならせられる","volitional":"ご覧になろう","imperative":"ご覧になれ","prohibitive":"ご覧になるな","condBa":"ご覧になれば","condTara":"ご覧になったら","tai":"ご覧になりたい","teIru":"ご覧になっている","teKudasai":"ご覧になってください"}},{"key":"v:失礼いたします","dictionary":"失礼いたす","group":"godan","forms":{"dictionary":"失礼いたす","masu":"失礼いたします","masuNeg":"失礼いたしません","masuPast":"失礼いたしました","masuPastNeg":"失礼いたしませんでした","te":"失礼いたして","nai":"失礼いたさない","naiPast":"失礼いたさなかった","ta":"失礼いたした","potential":"失礼いたせる","passive":"失礼いたされる","causative":"失礼いたさせる","causativePassive":"失礼いたさせられる","volitional":"失礼いたそう","imperative":"失礼いたせ","prohibitive":"失礼いたすな","condBa":"失礼いたせば","condTara":"失礼いたしたら","tai":"失礼いたしたい","teIru":"失礼いたしている","teKudasai":"失礼いたしてください"}},{"key":"v:目指します","dictionary":"目指す","group":"godan","forms":{"dictionary":"目指す","masu":"目指します","masuNeg":"目指しません","masuPast":"目指しました","masuPastNeg":"目指しませんでした","te":"目指して","nai":"目指さない","naiPast":"目指さなかった","ta":"目指した","potential":"目指せる","passive":"目指される","causative":"目指させる","causativePassive":"目指させられる","volitional":"目指そう","imperative":"目指せ","prohibitive":"目指すな","condBa":"目指せば","condTara":"目指したら","tai":"目指したい","teIru":"目指している","teKudasai":"目指してください"}},{"key":"v:進みます","dictionary":"進む","group":"godan","forms":{"dictionary":"進む","masu":"進みます","masuNeg":"進みません","masuPast":"進みました","masuPastNeg":"進みませんでした","te":"進んで","nai":"進まない","naiPast":"進まなかった","ta":"進んだ","potential":"進める","passive":"進まれる","causative":"進ませる","causativePassive":"進ませられる","volitional":"進もう","imperative":"進め","prohibitive":"進むな","condBa":"進めば","condTara":"進んだら","tai":"進みたい","teIru":"進んでいる","teKudasai":"進んでください"}},{"key":"v:開発します","dictionary":"開発する","group":"irregular","forms":{"dictionary":"開発する","masu":"開発します","masuNeg":"開発しません","masuPast":"開発しました","masuPastNeg":"開発しませんでした","te":"開発して","nai":"開発しない","naiPast":"開発しなかった","ta":"開発した","potential":"開発できる","passive":"開発される","causative":"開発させる","causativePassive":"開発させられる","volitional":"開発しよう","imperative":"開発しろ","prohibitive":"開発するな","condBa":"開発すれば","condTara":"開発したら","tai":"開発したい","teIru":"開発している","teKudasai":"開発してください"}},{"key":"v:受賞します","dictionary":"受賞する","group":"irregular","forms":{"dictionary":"受賞する","masu":"受賞します","masuNeg":"受賞しません","masuPast":"受賞しました","masuPastNeg":"受賞しませんでした","te":"受賞して","nai":"受賞しない","naiPast":"受賞しなかった","ta":"受賞した","potential":"受賞できる","passive":"受賞される","causative":"受賞させる","causativePassive":"受賞させられる","volitional":"受賞しよう","imperative":"受賞しろ","prohibitive":"受賞するな","condBa":"受賞すれば","condTara":"受賞したら","tai":"受賞したい","teIru":"受賞している","teKudasai":"受賞してください"}},{"key":"v:参ります","dictionary":"参る","group":"godan","forms":{"dictionary":"参る","masu":"参ります","masuNeg":"参りません","masuPast":"参りました","masuPastNeg":"参りませんでした","te":"参って","nai":"参らない","naiPast":"参らなかった","ta":"参った","potential":"参れる","passive":"参られる","causative":"参らせる","causativePassive":"参らせられる","volitional":"参ろう","imperative":"参れ","prohibitive":"参るな","condBa":"参れば","condTara":"参ったら","tai":"参りたい","teIru":"参っている","teKudasai":"参ってください"}},{"key":"v:おります","dictionary":"おる","group":"godan","forms":{"dictionary":"おる","masu":"おります","masuNeg":"おりません","masuPast":"おりました","masuPastNeg":"おりませんでした","te":"おって","nai":"おらない","naiPast":"おらなかった","ta":"おった","potential":"おれる","passive":"おられる","causative":"おらせる","causativePassive":"おらせられる","volitional":"おろう","imperative":"おれ","prohibitive":"おるな","condBa":"おれば","condTara":"おったら","tai":"おりたい","teIru":"おっている","teKudasai":"おってください"}},{"key":"v:申します","dictionary":"申す","group":"godan","forms":{"dictionary":"申す","masu":"申します","masuNeg":"申しません","masuPast":"申しました","masuPastNeg":"申しませんでした","te":"申して","nai":"申さない","naiPast":"申さなかった","ta":"申した","potential":"申せる","passive":"申される","causative":"申させる","causativePassive":"申させられる","volitional":"申そう","imperative":"申せ","prohibitive":"申すな","condBa":"申せば","condTara":"申したら","tai":"申したい","teIru":"申している","teKudasai":"申してください"}},{"key":"v:いたします","dictionary":"いたす","group":"godan","forms":{"dictionary":"いたす","masu":"いたします","masuNeg":"いたしません","masuPast":"いたしました","masuPastNeg":"いたしませんでした","te":"いたして","nai":"いたさない","naiPast":"いたさなかった","ta":"いたした","potential":"いたせる","passive":"いたされる","causative":"いたさせる","causativePassive":"いたさせられる","volitional":"いたそう","imperative":"いたせ","prohibitive":"いたすな","condBa":"いたせば","condTara":"いたしたら","tai":"いたしたい","teIru":"いたしている","teKudasai":"いたしてください"}},{"key":"v:拝見します","dictionary":"拝見する","group":"irregular","forms":{"dictionary":"拝見する","masu":"拝見します","masuNeg":"拝見しません","masuPast":"拝見しました","masuPastNeg":"拝見しませんでした","te":"拝見して","nai":"拝見しない","naiPast":"拝見しなかった","ta":"拝見した","potential":"拝見できる","passive":"拝見される","causative":"拝見させる","causativePassive":"拝見させられる","volitional":"拝見しよう","imperative":"拝見しろ","prohibitive":"拝見するな","condBa":"拝見すれば","condTara":"拝見したら","tai":"拝見したい","teIru":"拝見している","teKudasai":"拝見してください"}},{"key":"v:存じます","dictionary":"存じる","group":"ichidan","forms":{"dictionary":"存じる","masu":"存じます","masuNeg":"存じません","masuPast":"存じました","masuPastNeg":"存じませんでした","te":"存じて","nai":"存じない","naiPast":"存じなかった","ta":"存じた","potential":"存じられる","passive":"存じられる","causative":"存じさせる","causativePassive":"存じさせられる","volitional":"存じよう","imperative":"存じろ","prohibitive":"存じるな","condBa":"存じれば","condTara":"存じたら","tai":"存じたい","teIru":"存じている","teKudasai":"存じてください"}},{"key":"v:お目に掛かります","dictionary":"お目に掛かる","group":"godan","forms":{"dictionary":"お目に掛かる","masu":"お目に掛かります","masuNeg":"お目に掛かりません","masuPast":"お目に掛かりました","masuPastNeg":"お目に掛かりませんでした","te":"お目に掛かって","nai":"お目に掛からない","naiPast":"お目に掛からなかった","ta":"お目に掛かった","potential":"お目に掛かれる","passive":"お目に掛かられる","causative":"お目に掛からせる","causativePassive":"お目に掛からせられる","volitional":"お目に掛かろう","imperative":"お目に掛かれ","prohibitive":"お目に掛かるな","condBa":"お目に掛かれば","condTara":"お目に掛かったら","tai":"お目に掛かりたい","teIru":"お目に掛かっている","teKudasai":"お目に掛かってください"}},{"key":"v:淹れます","dictionary":"淹れる","group":"ichidan","forms":{"dictionary":"淹れる","masu":"淹れます","masuNeg":"淹れません","masuPast":"淹れました","masuPastNeg":"淹れませんでした","te":"淹れて","nai":"淹れない","naiPast":"淹れなかった","ta":"淹れた","potential":"淹れられる","passive":"淹れられる","causative":"淹れさせる","causativePassive":"淹れさせられる","volitional":"淹れよう","imperative":"淹れろ","prohibitive":"淹れるな","condBa":"淹れれば","condTara":"淹れたら","tai":"淹れたい","teIru":"淹れている","teKudasai":"淹れてください"}},{"key":"v:用意します","dictionary":"用意する","group":"irregular","forms":{"dictionary":"用意する","masu":"用意します","masuNeg":"用意しません","masuPast":"用意しました","masuPastNeg":"用意しませんでした","te":"用意して","nai":"用意しない","naiPast":"用意しなかった","ta":"用意した","potential":"用意できる","passive":"用意される","causative":"用意させる","causativePassive":"用意させられる","volitional":"用意しよう","imperative":"用意しろ","prohibitive":"用意するな","condBa":"用意すれば","condTara":"用意したら","tai":"用意したい","teIru":"用意している","teKudasai":"用意してください"}},{"key":"v:緊張します","dictionary":"緊張する","group":"irregular","forms":{"dictionary":"緊張する","masu":"緊張します","masuNeg":"緊張しません","masuPast":"緊張しました","masuPastNeg":"緊張しませんでした","te":"緊張して","nai":"緊張しない","naiPast":"緊張しなかった","ta":"緊張した","potential":"緊張できる","passive":"緊張される","causative":"緊張させる","causativePassive":"緊張させられる","volitional":"緊張しよう","imperative":"緊張しろ","prohibitive":"緊張するな","condBa":"緊張すれば","condTara":"緊張したら","tai":"緊張したい","teIru":"緊張している","teKudasai":"緊張してください"}},{"key":"v:かないます","dictionary":"かなう","group":"godan","forms":{"dictionary":"かなう","masu":"かないます","masuNeg":"かないません","masuPast":"かないました","masuPastNeg":"かないませんでした","te":"かなって","nai":"かなわない","naiPast":"かなわなかった","ta":"かなった","potential":"かなえる","passive":"かなわれる","causative":"かなわせる","causativePassive":"かなわせられる","volitional":"かなおう","imperative":"かなえ","prohibitive":"かなうな","condBa":"かなえば","condTara":"かなったら","tai":"かないたい","teIru":"かなっている","teKudasai":"かなってください"}},{"key":"v:応援します","dictionary":"応援する","group":"irregular","forms":{"dictionary":"応援する","masu":"応援します","masuNeg":"応援しません","masuPast":"応援しました","masuPastNeg":"応援しませんでした","te":"応援して","nai":"応援しない","naiPast":"応援しなかった","ta":"応援した","potential":"応援できる","passive":"応援される","causative":"応援させる","causativePassive":"応援させられる","volitional":"応援しよう","imperative":"応援しろ","prohibitive":"応援するな","condBa":"応援すれば","condTara":"応援したら","tai":"応援したい","teIru":"応援している","teKudasai":"応援してください"}},{"key":"v:感謝します","dictionary":"感謝する","group":"irregular","forms":{"dictionary":"感謝する","masu":"感謝します","masuNeg":"感謝しません","masuPast":"感謝しました","masuPastNeg":"感謝しませんでした","te":"感謝して","nai":"感謝しない","naiPast":"感謝しなかった","ta":"感謝した","potential":"感謝できる","passive":"感謝される","causative":"感謝させる","causativePassive":"感謝させられる","volitional":"感謝しよう","imperative":"感謝しろ","prohibitive":"感謝するな","condBa":"感謝すれば","condTara":"感謝したら","tai":"感謝したい","teIru":"感謝している","teKudasai":"感謝してください"}}]');
const verbs$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: verbs
}, Symbol.toStringTag, { value: "Module" }));
const adjectives = /* @__PURE__ */ JSON.parse('[{"key":"v:明るい","dictionary":"明るい","group":"i-adj","forms":{"dictionary":"明るい","present":"明るい","negative":"明るくない","past":"明るかった","pastNegative":"明るくなかった","te":"明るくて","adverb":"明るく"}},{"key":"v:暖かい","dictionary":"暖かい","group":"i-adj","forms":{"dictionary":"暖かい","present":"暖かい","negative":"暖かくない","past":"暖かかった","pastNegative":"暖かくなかった","te":"暖かくて","adverb":"暖かく"}},{"key":"v:厚い","dictionary":"厚い","group":"i-adj","forms":{"dictionary":"厚い","present":"厚い","negative":"厚くない","past":"厚かった","pastNegative":"厚くなかった","te":"厚くて","adverb":"厚く"}},{"key":"v:暑い","dictionary":"暑い","group":"i-adj","forms":{"dictionary":"暑い","present":"暑い","negative":"暑くない","past":"暑かった","pastNegative":"暑くなかった","te":"暑くて","adverb":"暑く"}},{"key":"v:熱い","dictionary":"熱い","group":"i-adj","forms":{"dictionary":"熱い","present":"熱い","negative":"熱くない","past":"熱かった","pastNegative":"熱くなかった","te":"熱くて","adverb":"熱く"}},{"key":"v:危ない","dictionary":"危ない","group":"i-adj","forms":{"dictionary":"危ない","present":"危ない","negative":"危なくない","past":"危なかった","pastNegative":"危なくなかった","te":"危なくて","adverb":"危なく"}},{"key":"v:甘い","dictionary":"甘い","group":"i-adj","forms":{"dictionary":"甘い","present":"甘い","negative":"甘くない","past":"甘かった","pastNegative":"甘くなかった","te":"甘くて","adverb":"甘く"}},{"key":"v:痛い","dictionary":"痛い","group":"i-adj","forms":{"dictionary":"痛い","present":"痛い","negative":"痛くない","past":"痛かった","pastNegative":"痛くなかった","te":"痛くて","adverb":"痛く"}},{"key":"v:忙しい","dictionary":"忙しい","group":"i-adj","forms":{"dictionary":"忙しい","present":"忙しい","negative":"忙しくない","past":"忙しかった","pastNegative":"忙しくなかった","te":"忙しくて","adverb":"忙しく"}},{"key":"v:薄い","dictionary":"薄い","group":"i-adj","forms":{"dictionary":"薄い","present":"薄い","negative":"薄くない","past":"薄かった","pastNegative":"薄くなかった","te":"薄くて","adverb":"薄く"}},{"key":"v:嬉しい","dictionary":"嬉しい","group":"i-adj","forms":{"dictionary":"嬉しい","present":"嬉しい","negative":"嬉しくない","past":"嬉しかった","pastNegative":"嬉しくなかった","te":"嬉しくて","adverb":"嬉しく"}},{"key":"v:美味しい","dictionary":"美味しい","group":"i-adj","forms":{"dictionary":"美味しい","present":"美味しい","negative":"美味しくない","past":"美味しかった","pastNegative":"美味しくなかった","te":"美味しくて","adverb":"美味しく"}},{"key":"v:多い","dictionary":"多い","group":"i-adj","forms":{"dictionary":"多い","present":"多い","negative":"多くない","past":"多かった","pastNegative":"多くなかった","te":"多くて","adverb":"多く"}},{"key":"v:大きい","dictionary":"大きい","group":"i-adj","forms":{"dictionary":"大きい","present":"大きい","negative":"大きくない","past":"大きかった","pastNegative":"大きくなかった","te":"大きくて","adverb":"大きく"}},{"key":"v:遅い","dictionary":"遅い","group":"i-adj","forms":{"dictionary":"遅い","present":"遅い","negative":"遅くない","past":"遅かった","pastNegative":"遅くなかった","te":"遅くて","adverb":"遅く"}},{"key":"v:重い","dictionary":"重い","group":"i-adj","forms":{"dictionary":"重い","present":"重い","negative":"重くない","past":"重かった","pastNegative":"重くなかった","te":"重くて","adverb":"重く"}},{"key":"v:面白い","dictionary":"面白い","group":"i-adj","forms":{"dictionary":"面白い","present":"面白い","negative":"面白くない","past":"面白かった","pastNegative":"面白くなかった","te":"面白くて","adverb":"面白く"}},{"key":"v:辛い","dictionary":"辛い","group":"i-adj","forms":{"dictionary":"辛い","present":"辛い","negative":"辛くない","past":"辛かった","pastNegative":"辛くなかった","te":"辛くて","adverb":"辛く"}},{"key":"v:軽い","dictionary":"軽い","group":"i-adj","forms":{"dictionary":"軽い","present":"軽い","negative":"軽くない","past":"軽かった","pastNegative":"軽くなかった","te":"軽くて","adverb":"軽く"}},{"key":"v:可愛い","dictionary":"可愛い","group":"i-adj","forms":{"dictionary":"可愛い","present":"可愛い","negative":"可愛くない","past":"可愛かった","pastNegative":"可愛くなかった","te":"可愛くて","adverb":"可愛く"}},{"key":"v:黄色い","dictionary":"黄色い","group":"i-adj","forms":{"dictionary":"黄色い","present":"黄色い","negative":"黄色くない","past":"黄色かった","pastNegative":"黄色くなかった","te":"黄色くて","adverb":"黄色く"}},{"key":"v:厳しい","dictionary":"厳しい","group":"i-adj","forms":{"dictionary":"厳しい","present":"厳しい","negative":"厳しくない","past":"厳しかった","pastNegative":"厳しくなかった","te":"厳しくて","adverb":"厳しく"}},{"key":"v:汚い","dictionary":"汚い","group":"i-adj","forms":{"dictionary":"汚い","present":"汚い","negative":"汚くない","past":"汚かった","pastNegative":"汚くなかった","te":"汚くて","adverb":"汚く"}},{"key":"v:暗い","dictionary":"暗い","group":"i-adj","forms":{"dictionary":"暗い","present":"暗い","negative":"暗くない","past":"暗かった","pastNegative":"暗くなかった","te":"暗くて","adverb":"暗く"}},{"key":"v:詳しい","dictionary":"詳しい","group":"i-adj","forms":{"dictionary":"詳しい","present":"詳しい","negative":"詳しくない","past":"詳しかった","pastNegative":"詳しくなかった","te":"詳しくて","adverb":"詳しく"}},{"key":"v:苦しい","dictionary":"苦しい","group":"i-adj","forms":{"dictionary":"苦しい","present":"苦しい","negative":"苦しくない","past":"苦しかった","pastNegative":"苦しくなかった","te":"苦しくて","adverb":"苦しく"}},{"key":"v:寒い","dictionary":"寒い","group":"i-adj","forms":{"dictionary":"寒い","present":"寒い","negative":"寒くない","past":"寒かった","pastNegative":"寒くなかった","te":"寒くて","adverb":"寒く"}},{"key":"v:涼しい","dictionary":"涼しい","group":"i-adj","forms":{"dictionary":"涼しい","present":"涼しい","negative":"涼しくない","past":"涼しかった","pastNegative":"涼しくなかった","te":"涼しくて","adverb":"涼しく"}},{"key":"v:少ない","dictionary":"少ない","group":"i-adj","forms":{"dictionary":"少ない","present":"少ない","negative":"少なくない","past":"少なかった","pastNegative":"少なくなかった","te":"少なくて","adverb":"少なく"}},{"key":"v:狭い","dictionary":"狭い","group":"i-adj","forms":{"dictionary":"狭い","present":"狭い","negative":"狭くない","past":"狭かった","pastNegative":"狭くなかった","te":"狭くて","adverb":"狭く"}},{"key":"v:高い","dictionary":"高い","group":"i-adj","forms":{"dictionary":"高い","present":"高い","negative":"高くない","past":"高かった","pastNegative":"高くなかった","te":"高くて","adverb":"高く"}},{"key":"v:正しい","dictionary":"正しい","group":"i-adj","forms":{"dictionary":"正しい","present":"正しい","negative":"正しくない","past":"正しかった","pastNegative":"正しくなかった","te":"正しくて","adverb":"正しく"}},{"key":"v:楽しい","dictionary":"楽しい","group":"i-adj","forms":{"dictionary":"楽しい","present":"楽しい","negative":"楽しくない","past":"楽しかった","pastNegative":"楽しくなかった","te":"楽しくて","adverb":"楽しく"}},{"key":"v:小さい","dictionary":"小さい","group":"i-adj","forms":{"dictionary":"小さい","present":"小さい","negative":"小さくない","past":"小さかった","pastNegative":"小さくなかった","te":"小さくて","adverb":"小さく"}},{"key":"v:近い","dictionary":"近い","group":"i-adj","forms":{"dictionary":"近い","present":"近い","negative":"近くない","past":"近かった","pastNegative":"近くなかった","te":"近くて","adverb":"近く"}},{"key":"v:強い","dictionary":"強い","group":"i-adj","forms":{"dictionary":"強い","present":"強い","negative":"強くない","past":"強かった","pastNegative":"強くなかった","te":"強くて","adverb":"強く"}},{"key":"v:冷たい","dictionary":"冷たい","group":"i-adj","forms":{"dictionary":"冷たい","present":"冷たい","negative":"冷たくない","past":"冷たかった","pastNegative":"冷たくなかった","te":"冷たくて","adverb":"冷たく"}},{"key":"v:遠い","dictionary":"遠い","group":"i-adj","forms":{"dictionary":"遠い","present":"遠い","negative":"遠くない","past":"遠かった","pastNegative":"遠くなかった","te":"遠くて","adverb":"遠く"}},{"key":"v:長い","dictionary":"長い","group":"i-adj","forms":{"dictionary":"長い","present":"長い","negative":"長くない","past":"長かった","pastNegative":"長くなかった","te":"長くて","adverb":"長く"}},{"key":"v:懐かしい","dictionary":"懐かしい","group":"i-adj","forms":{"dictionary":"懐かしい","present":"懐かしい","negative":"懐かしくない","past":"懐かしかった","pastNegative":"懐かしくなかった","te":"懐かしくて","adverb":"懐かしく"}},{"key":"v:眠い","dictionary":"眠い","group":"i-adj","forms":{"dictionary":"眠い","present":"眠い","negative":"眠くない","past":"眠かった","pastNegative":"眠くなかった","te":"眠くて","adverb":"眠く"}},{"key":"v:早い","dictionary":"早い","group":"i-adj","forms":{"dictionary":"早い","present":"早い","negative":"早くない","past":"早かった","pastNegative":"早くなかった","te":"早くて","adverb":"早く"}},{"key":"v:速い","dictionary":"速い","group":"i-adj","forms":{"dictionary":"速い","present":"速い","negative":"速くない","past":"速かった","pastNegative":"速くなかった","te":"速くて","adverb":"速く"}},{"key":"v:低い","dictionary":"低い","group":"i-adj","forms":{"dictionary":"低い","present":"低い","negative":"低くない","past":"低かった","pastNegative":"低くなかった","te":"低くて","adverb":"低く"}},{"key":"v:広い","dictionary":"広い","group":"i-adj","forms":{"dictionary":"広い","present":"広い","negative":"広くない","past":"広かった","pastNegative":"広くなかった","te":"広くて","adverb":"広く"}},{"key":"v:深い","dictionary":"深い","group":"i-adj","forms":{"dictionary":"深い","present":"深い","negative":"深くない","past":"深かった","pastNegative":"深くなかった","te":"深くて","adverb":"深く"}},{"key":"v:太い","dictionary":"太い","group":"i-adj","forms":{"dictionary":"太い","present":"太い","negative":"太くない","past":"太かった","pastNegative":"太くなかった","te":"太くて","adverb":"太く"}},{"key":"v:古い","dictionary":"古い","group":"i-adj","forms":{"dictionary":"古い","present":"古い","negative":"古くない","past":"古かった","pastNegative":"古くなかった","te":"古くて","adverb":"古く"}},{"key":"v:欲しい","dictionary":"欲しい","group":"i-adj","forms":{"dictionary":"欲しい","present":"欲しい","negative":"欲しくない","past":"欲しかった","pastNegative":"欲しくなかった","te":"欲しくて","adverb":"欲しく"}},{"key":"v:細い","dictionary":"細い","group":"i-adj","forms":{"dictionary":"細い","present":"細い","negative":"細くない","past":"細かった","pastNegative":"細くなかった","te":"細くて","adverb":"細く"}},{"key":"v:不味い","dictionary":"不味い","group":"i-adj","forms":{"dictionary":"不味い","present":"不味い","negative":"不味くない","past":"不味かった","pastNegative":"不味くなかった","te":"不味くて","adverb":"不味く"}},{"key":"v:丸い","dictionary":"丸い","group":"i-adj","forms":{"dictionary":"丸い","present":"丸い","negative":"丸くない","past":"丸かった","pastNegative":"丸くなかった","te":"丸くて","adverb":"丸く"}},{"key":"v:短い","dictionary":"短い","group":"i-adj","forms":{"dictionary":"短い","present":"短い","negative":"短くない","past":"短かった","pastNegative":"短くなかった","te":"短くて","adverb":"短く"}},{"key":"v:難しい","dictionary":"難しい","group":"i-adj","forms":{"dictionary":"難しい","present":"難しい","negative":"難しくない","past":"難しかった","pastNegative":"難しくなかった","te":"難しくて","adverb":"難しく"}},{"key":"v:珍しい","dictionary":"珍しい","group":"i-adj","forms":{"dictionary":"珍しい","present":"珍しい","negative":"珍しくない","past":"珍しかった","pastNegative":"珍しくなかった","te":"珍しくて","adverb":"珍しく"}},{"key":"v:柔らかい","dictionary":"柔らかい","group":"i-adj","forms":{"dictionary":"柔らかい","present":"柔らかい","negative":"柔らかくない","past":"柔らかかった","pastNegative":"柔らかくなかった","te":"柔らかくて","adverb":"柔らかく"}},{"key":"v:優しい","dictionary":"優しい","group":"i-adj","forms":{"dictionary":"優しい","present":"優しい","negative":"優しくない","past":"優しかった","pastNegative":"優しくなかった","te":"優しくて","adverb":"優しく"}},{"key":"v:安い","dictionary":"安い","group":"i-adj","forms":{"dictionary":"安い","present":"安い","negative":"安くない","past":"安かった","pastNegative":"安くなかった","te":"安くて","adverb":"安く"}},{"key":"v:弱い","dictionary":"弱い","group":"i-adj","forms":{"dictionary":"弱い","present":"弱い","negative":"弱くない","past":"弱かった","pastNegative":"弱くなかった","te":"弱くて","adverb":"弱く"}},{"key":"v:若い","dictionary":"若い","group":"i-adj","forms":{"dictionary":"若い","present":"若い","negative":"若くない","past":"若かった","pastNegative":"若くなかった","te":"若くて","adverb":"若く"}},{"key":"v:悪い","dictionary":"悪い","group":"i-adj","forms":{"dictionary":"悪い","present":"悪い","negative":"悪くない","past":"悪かった","pastNegative":"悪くなかった","te":"悪くて","adverb":"悪く"}},{"key":"v:うるさい","dictionary":"うるさい","group":"i-adj","forms":{"dictionary":"うるさい","present":"うるさい","negative":"うるさくない","past":"うるさかった","pastNegative":"うるさくなかった","te":"うるさくて","adverb":"うるさく"}},{"key":"v:すごい","dictionary":"すごい","group":"i-adj","forms":{"dictionary":"すごい","present":"すごい","negative":"すごくない","past":"すごかった","pastNegative":"すごくなかった","te":"すごくて","adverb":"すごく"}},{"key":"v:ひどい","dictionary":"ひどい","group":"i-adj","forms":{"dictionary":"ひどい","present":"ひどい","negative":"ひどくない","past":"ひどかった","pastNegative":"ひどくなかった","te":"ひどくて","adverb":"ひどく"}},{"key":"v:うまい","dictionary":"うまい","group":"i-adj","forms":{"dictionary":"うまい","present":"うまい","negative":"うまくない","past":"うまかった","pastNegative":"うまくなかった","te":"うまくて","adverb":"うまく"}},{"key":"v:恥ずかしい","dictionary":"恥ずかしい","group":"i-adj","forms":{"dictionary":"恥ずかしい","present":"恥ずかしい","negative":"恥ずかしくない","past":"恥ずかしかった","pastNegative":"恥ずかしくなかった","te":"恥ずかしくて","adverb":"恥ずかしく"}},{"key":"v:寂しい","dictionary":"寂しい","group":"i-adj","forms":{"dictionary":"寂しい","present":"寂しい","negative":"寂しくない","past":"寂しかった","pastNegative":"寂しくなかった","te":"寂しくて","adverb":"寂しく"}},{"key":"v:素晴らしい","dictionary":"素晴らしい","group":"i-adj","forms":{"dictionary":"素晴らしい","present":"素晴らしい","negative":"素晴らしくない","past":"素晴らしかった","pastNegative":"素晴らしくなかった","te":"素晴らしくて","adverb":"素晴らしく"}},{"key":"v:羨ましい","dictionary":"羨ましい","group":"i-adj","forms":{"dictionary":"羨ましい","present":"羨ましい","negative":"羨ましくない","past":"羨ましかった","pastNegative":"羨ましくなかった","te":"羨ましくて","adverb":"羨ましく"}},{"key":"v:浅い","dictionary":"浅い","group":"i-adj","forms":{"dictionary":"浅い","present":"浅い","negative":"浅くない","past":"浅かった","pastNegative":"浅くなかった","te":"浅くて","adverb":"浅く"}},{"key":"v:偉い","dictionary":"偉い","group":"i-adj","forms":{"dictionary":"偉い","present":"偉い","negative":"偉くない","past":"偉かった","pastNegative":"偉くなかった","te":"偉くて","adverb":"偉く"}},{"key":"v:茶色い","dictionary":"茶色い","group":"i-adj","forms":{"dictionary":"茶色い","present":"茶色い","negative":"茶色くない","past":"茶色かった","pastNegative":"茶色くなかった","te":"茶色くて","adverb":"茶色く"}},{"key":"v:新しい","dictionary":"新しい","group":"i-adj","forms":{"dictionary":"新しい","present":"新しい","negative":"新しくない","past":"新しかった","pastNegative":"新しくなかった","te":"新しくて","adverb":"新しく"}},{"key":"v:良い","dictionary":"良い","group":"i-adj","forms":{"dictionary":"良い","present":"良い","negative":"良くない","past":"良かった","pastNegative":"良くなかった","te":"良くて","adverb":"良く"}},{"key":"v:白い","dictionary":"白い","group":"i-adj","forms":{"dictionary":"白い","present":"白い","negative":"白くない","past":"白かった","pastNegative":"白くなかった","te":"白くて","adverb":"白く"}},{"key":"v:赤い","dictionary":"赤い","group":"i-adj","forms":{"dictionary":"赤い","present":"赤い","negative":"赤くない","past":"赤かった","pastNegative":"赤くなかった","te":"赤くて","adverb":"赤く"}},{"key":"v:青い","dictionary":"青い","group":"i-adj","forms":{"dictionary":"青い","present":"青い","negative":"青くない","past":"青かった","pastNegative":"青くなかった","te":"青くて","adverb":"青く"}},{"key":"v:黒い","dictionary":"黒い","group":"i-adj","forms":{"dictionary":"黒い","present":"黒い","negative":"黒くない","past":"黒かった","pastNegative":"黒くなかった","te":"黒くて","adverb":"黒く"}},{"key":"v:怖い","dictionary":"怖い","group":"i-adj","forms":{"dictionary":"怖い","present":"怖い","negative":"怖くない","past":"怖かった","pastNegative":"怖くなかった","te":"怖くて","adverb":"怖く"}},{"key":"v:酸っぱい","dictionary":"酸っぱい","group":"i-adj","forms":{"dictionary":"酸っぱい","present":"酸っぱい","negative":"酸っぱくない","past":"酸っぱかった","pastNegative":"酸っぱくなかった","te":"酸っぱくて","adverb":"酸っぱく"}},{"key":"v:苦い","dictionary":"苦い","group":"i-adj","forms":{"dictionary":"苦い","present":"苦い","negative":"苦くない","past":"苦かった","pastNegative":"苦くなかった","te":"苦くて","adverb":"苦く"}},{"key":"v:つまらない","dictionary":"つまらない","group":"i-adj","forms":{"dictionary":"つまらない","present":"つまらない","negative":"つまらなくない","past":"つまらなかった","pastNegative":"つまらなくなかった","te":"つまらなくて","adverb":"つまらなく"}},{"key":"v:かっこいい","dictionary":"かっこいい","group":"i-adj","forms":{"dictionary":"かっこいい","present":"かっこいい","negative":"かっこいくない","past":"かっこいかった","pastNegative":"かっこいくなかった","te":"かっこいくて","adverb":"かっこいく"}},{"key":"v:硬い","dictionary":"硬い","group":"i-adj","forms":{"dictionary":"硬い","present":"硬い","negative":"硬くない","past":"硬かった","pastNegative":"硬くなかった","te":"硬くて","adverb":"硬く"}},{"key":"v:臭い","dictionary":"臭い","group":"i-adj","forms":{"dictionary":"臭い","present":"臭い","negative":"臭くない","past":"臭かった","pastNegative":"臭くなかった","te":"臭くて","adverb":"臭く"}},{"key":"v:だるい","dictionary":"だるい","group":"i-adj","forms":{"dictionary":"だるい","present":"だるい","negative":"だるくない","past":"だるかった","pastNegative":"だるくなかった","te":"だるくて","adverb":"だるく"}},{"key":"v:恐ろしい","dictionary":"恐ろしい","group":"i-adj","forms":{"dictionary":"恐ろしい","present":"恐ろしい","negative":"恐ろしくない","past":"恐ろしかった","pastNegative":"恐ろしくなかった","te":"恐ろしくて","adverb":"恐ろしく"}},{"key":"v:気持ちいい","dictionary":"気持ちいい","group":"i-adj","forms":{"dictionary":"気持ちいい","present":"気持ちいい","negative":"気持ちいくない","past":"気持ちいかった","pastNegative":"気持ちいくなかった","te":"気持ちいくて","adverb":"気持ちいく"}},{"key":"v:易しい","dictionary":"易しい","group":"i-adj","forms":{"dictionary":"易しい","present":"易しい","negative":"易しくない","past":"易しかった","pastNegative":"易しくなかった","te":"易しくて","adverb":"易しく"}},{"key":"v:悲しい","dictionary":"悲しい","group":"i-adj","forms":{"dictionary":"悲しい","present":"悲しい","negative":"悲しくない","past":"悲しかった","pastNegative":"悲しくなかった","te":"悲しくて","adverb":"悲しく"}},{"key":"v:安全（な）","dictionary":"安全（な）","group":"na-adj","forms":{"dictionary":"安全（な）","present":"安全（な）だ","negative":"安全（な）じゃない","past":"安全（な）だった","pastNegative":"安全（な）じゃなかった","te":"安全（な）で","adverb":"安全（な）に"}},{"key":"v:危険（な）","dictionary":"危険（な）","group":"na-adj","forms":{"dictionary":"危険（な）","present":"危険（な）だ","negative":"危険（な）じゃない","past":"危険（な）だった","pastNegative":"危険（な）じゃなかった","te":"危険（な）で","adverb":"危険（な）に"}},{"key":"v:大丈夫（な）","dictionary":"大丈夫（な）","group":"na-adj","forms":{"dictionary":"大丈夫（な）","present":"大丈夫（な）だ","negative":"大丈夫（な）じゃない","past":"大丈夫（な）だった","pastNegative":"大丈夫（な）じゃなかった","te":"大丈夫（な）で","adverb":"大丈夫（な）に"}},{"key":"v:大切（な）","dictionary":"大切（な）","group":"na-adj","forms":{"dictionary":"大切（な）","present":"大切（な）だ","negative":"大切（な）じゃない","past":"大切（な）だった","pastNegative":"大切（な）じゃなかった","te":"大切（な）で","adverb":"大切（な）に"}},{"key":"v:大変（な）","dictionary":"大変（な）","group":"na-adj","forms":{"dictionary":"大変（な）","present":"大変（な）だ","negative":"大変（な）じゃない","past":"大変（な）だった","pastNegative":"大変（な）じゃなかった","te":"大変（な）で","adverb":"大変（な）に"}},{"key":"v:丁寧（な）","dictionary":"丁寧（な）","group":"na-adj","forms":{"dictionary":"丁寧（な）","present":"丁寧（な）だ","negative":"丁寧（な）じゃない","past":"丁寧（な）だった","pastNegative":"丁寧（な）じゃなかった","te":"丁寧（な）で","adverb":"丁寧（な）に"}},{"key":"v:適当（な）","dictionary":"適当（な）","group":"na-adj","forms":{"dictionary":"適当（な）","present":"適当（な）だ","negative":"適当（な）じゃない","past":"適当（な）だった","pastNegative":"適当（な）じゃなかった","te":"適当（な）で","adverb":"適当（な）に"}},{"key":"v:特別（な）","dictionary":"特別（な）","group":"na-adj","forms":{"dictionary":"特別（な）","present":"特別（な）だ","negative":"特別（な）じゃない","past":"特別（な）だった","pastNegative":"特別（な）じゃなかった","te":"特別（な）で","adverb":"特別（な）に"}},{"key":"v:熱心（な）","dictionary":"熱心（な）","group":"na-adj","forms":{"dictionary":"熱心（な）","present":"熱心（な）だ","negative":"熱心（な）じゃない","past":"熱心（な）だった","pastNegative":"熱心（な）じゃなかった","te":"熱心（な）で","adverb":"熱心（な）に"}},{"key":"v:必要（な）","dictionary":"必要（な）","group":"na-adj","forms":{"dictionary":"必要（な）","present":"必要（な）だ","negative":"必要（な）じゃない","past":"必要（な）だった","pastNegative":"必要（な）じゃなかった","te":"必要（な）で","adverb":"必要（な）に"}},{"key":"v:不便（な）","dictionary":"不便（な）","group":"na-adj","forms":{"dictionary":"不便（な）","present":"不便（な）だ","negative":"不便（な）じゃない","past":"不便（な）だった","pastNegative":"不便（な）じゃなかった","te":"不便（な）で","adverb":"不便（な）に"}},{"key":"v:便利（な）","dictionary":"便利（な）","group":"na-adj","forms":{"dictionary":"便利（な）","present":"便利（な）だ","negative":"便利（な）じゃない","past":"便利（な）だった","pastNegative":"便利（な）じゃなかった","te":"便利（な）で","adverb":"便利（な）に"}},{"key":"v:有名（な）","dictionary":"有名（な）","group":"na-adj","forms":{"dictionary":"有名（な）","present":"有名（な）だ","negative":"有名（な）じゃない","past":"有名（な）だった","pastNegative":"有名（な）じゃなかった","te":"有名（な）で","adverb":"有名（な）に"}},{"key":"v:親切（な）","dictionary":"親切（な）","group":"na-adj","forms":{"dictionary":"親切（な）","present":"親切（な）だ","negative":"親切（な）じゃない","past":"親切（な）だった","pastNegative":"親切（な）じゃなかった","te":"親切（な）で","adverb":"親切（な）に"}},{"key":"v:静か（な）","dictionary":"静か（な）","group":"na-adj","forms":{"dictionary":"静か（な）","present":"静か（な）だ","negative":"静か（な）じゃない","past":"静か（な）だった","pastNegative":"静か（な）じゃなかった","te":"静か（な）で","adverb":"静か（な）に"}},{"key":"v:賑やか（な）","dictionary":"賑やか（な）","group":"na-adj","forms":{"dictionary":"賑やか（な）","present":"賑やか（な）だ","negative":"賑やか（な）じゃない","past":"賑やか（な）だった","pastNegative":"賑やか（な）じゃなかった","te":"賑やか（な）で","adverb":"賑やか（な）に"}},{"key":"v:元気（な）","dictionary":"元気（な）","group":"na-adj","forms":{"dictionary":"元気（な）","present":"元気（な）だ","negative":"元気（な）じゃない","past":"元気（な）だった","pastNegative":"元気（な）じゃなかった","te":"元気（な）で","adverb":"元気（な）に"}},{"key":"v:上手（な）","dictionary":"上手（な）","group":"na-adj","forms":{"dictionary":"上手（な）","present":"上手（な）だ","negative":"上手（な）じゃない","past":"上手（な）だった","pastNegative":"上手（な）じゃなかった","te":"上手（な）で","adverb":"上手（な）に"}},{"key":"v:下手（な）","dictionary":"下手（な）","group":"na-adj","forms":{"dictionary":"下手（な）","present":"下手（な）だ","negative":"下手（な）じゃない","past":"下手（な）だった","pastNegative":"下手（な）じゃなかった","te":"下手（な）で","adverb":"下手（な）に"}},{"key":"v:好き（な）","dictionary":"好き（な）","group":"na-adj","forms":{"dictionary":"好き（な）","present":"好き（な）だ","negative":"好き（な）じゃない","past":"好き（な）だった","pastNegative":"好き（な）じゃなかった","te":"好き（な）で","adverb":"好き（な）に"}},{"key":"v:嫌い（な）","dictionary":"嫌い（な）","group":"na-adj","forms":{"dictionary":"嫌い（な）","present":"嫌い（な）だ","negative":"嫌い（な）じゃない","past":"嫌い（な）だった","pastNegative":"嫌い（な）じゃなかった","te":"嫌い（な）で","adverb":"嫌い（な）に"}},{"key":"v:きれい（な）","dictionary":"きれい（な）","group":"na-adj","forms":{"dictionary":"きれい（な）","present":"きれい（な）だ","negative":"きれい（な）じゃない","past":"きれい（な）だった","pastNegative":"きれい（な）じゃなかった","te":"きれい（な）で","adverb":"きれい（な）に"}},{"key":"v:複雑（な）","dictionary":"複雑（な）","group":"na-adj","forms":{"dictionary":"複雑（な）","present":"複雑（な）だ","negative":"複雑（な）じゃない","past":"複雑（な）だった","pastNegative":"複雑（な）じゃなかった","te":"複雑（な）で","adverb":"複雑（な）に"}},{"key":"v:簡単（な）","dictionary":"簡単（な）","group":"na-adj","forms":{"dictionary":"簡単（な）","present":"簡単（な）だ","negative":"簡単（な）じゃない","past":"簡単（な）だった","pastNegative":"簡単（な）じゃなかった","te":"簡単（な）で","adverb":"簡単（な）に"}},{"key":"v:自由（な）","dictionary":"自由（な）","group":"na-adj","forms":{"dictionary":"自由（な）","present":"自由（な）だ","negative":"自由（な）じゃない","past":"自由（な）だった","pastNegative":"自由（な）じゃなかった","te":"自由（な）で","adverb":"自由（な）に"}},{"key":"v:十分（な）","dictionary":"十分（な）","group":"na-adj","forms":{"dictionary":"十分（な）","present":"十分（な）だ","negative":"十分（な）じゃない","past":"十分（な）だった","pastNegative":"十分（な）じゃなかった","te":"十分（な）で","adverb":"十分（な）に"}},{"key":"v:邪魔（な）","dictionary":"邪魔（な）","group":"na-adj","forms":{"dictionary":"邪魔（な）","present":"邪魔（な）だ","negative":"邪魔（な）じゃない","past":"邪魔（な）だった","pastNegative":"邪魔（な）じゃなかった","te":"邪魔（な）で","adverb":"邪魔（な）に"}},{"key":"v:素敵（な）","dictionary":"素敵（な）","group":"na-adj","forms":{"dictionary":"素敵（な）","present":"素敵（な）だ","negative":"素敵（な）じゃない","past":"素敵（な）だった","pastNegative":"素敵（な）じゃなかった","te":"素敵（な）で","adverb":"素敵（な）に"}},{"key":"v:残念（な）","dictionary":"残念（な）","group":"na-adj","forms":{"dictionary":"残念（な）","present":"残念（な）だ","negative":"残念（な）じゃない","past":"残念（な）だった","pastNegative":"残念（な）じゃなかった","te":"残念（な）で","adverb":"残念（な）に"}},{"key":"v:無理（な）","dictionary":"無理（な）","group":"na-adj","forms":{"dictionary":"無理（な）","present":"無理（な）だ","negative":"無理（な）じゃない","past":"無理（な）だった","pastNegative":"無理（な）じゃなかった","te":"無理（な）で","adverb":"無理（な）に"}},{"key":"v:楽（な）","dictionary":"楽（な）","group":"na-adj","forms":{"dictionary":"楽（な）","present":"楽（な）だ","negative":"楽（な）じゃない","past":"楽（な）だった","pastNegative":"楽（な）じゃなかった","te":"楽（な）で","adverb":"楽（な）に"}},{"key":"v:変（な）","dictionary":"変（な）","group":"na-adj","forms":{"dictionary":"変（な）","present":"変（な）だ","negative":"変（な）じゃない","past":"変（な）だった","pastNegative":"変（な）じゃなかった","te":"変（な）で","adverb":"変（な）に"}},{"key":"v:真面目（な）","dictionary":"真面目（な）","group":"na-adj","forms":{"dictionary":"真面目（な）","present":"真面目（な）だ","negative":"真面目（な）じゃない","past":"真面目（な）だった","pastNegative":"真面目（な）じゃなかった","te":"真面目（な）で","adverb":"真面目（な）に"}},{"key":"v:立派（な）","dictionary":"立派（な）","group":"na-adj","forms":{"dictionary":"立派（な）","present":"立派（な）だ","negative":"立派（な）じゃない","past":"立派（な）だった","pastNegative":"立派（な）じゃなかった","te":"立派（な）で","adverb":"立派（な）に"}},{"key":"v:不思議（な）","dictionary":"不思議（な）","group":"na-adj","forms":{"dictionary":"不思議（な）","present":"不思議（な）だ","negative":"不思議（な）じゃない","past":"不思議（な）だった","pastNegative":"不思議（な）じゃなかった","te":"不思議（な）で","adverb":"不思議（な）に"}},{"key":"v:正確（な）","dictionary":"正確（な）","group":"na-adj","forms":{"dictionary":"正確（な）","present":"正確（な）だ","negative":"正確（な）じゃない","past":"正確（な）だった","pastNegative":"正確（な）じゃなかった","te":"正確（な）で","adverb":"正確（な）に"}},{"key":"v:幸せ（な）","dictionary":"幸せ（な）","group":"na-adj","forms":{"dictionary":"幸せ（な）","present":"幸せ（な）だ","negative":"幸せ（な）じゃない","past":"幸せ（な）だった","pastNegative":"幸せ（な）じゃなかった","te":"幸せ（な）で","adverb":"幸せ（な）に"}},{"key":"v:豊か（な）","dictionary":"豊か（な）","group":"na-adj","forms":{"dictionary":"豊か（な）","present":"豊か（な）だ","negative":"豊か（な）じゃない","past":"豊か（な）だった","pastNegative":"豊か（な）じゃなかった","te":"豊か（な）で","adverb":"豊か（な）に"}},{"key":"v:盛ん（な）","dictionary":"盛ん（な）","group":"na-adj","forms":{"dictionary":"盛ん（な）","present":"盛ん（な）だ","negative":"盛ん（な）じゃない","past":"盛ん（な）だった","pastNegative":"盛ん（な）じゃなかった","te":"盛ん（な）で","adverb":"盛ん（な）に"}},{"key":"v:急（な）","dictionary":"急（な）","group":"na-adj","forms":{"dictionary":"急（な）","present":"急（な）だ","negative":"急（な）じゃない","past":"急（な）だった","pastNegative":"急（な）じゃなかった","te":"急（な）で","adverb":"急（な）に"}},{"key":"v:丈夫（な）","dictionary":"丈夫（な）","group":"na-adj","forms":{"dictionary":"丈夫（な）","present":"丈夫（な）だ","negative":"丈夫（な）じゃない","past":"丈夫（な）だった","pastNegative":"丈夫（な）じゃなかった","te":"丈夫（な）で","adverb":"丈夫（な）に"}},{"key":"v:有利（な）","dictionary":"有利（な）","group":"na-adj","forms":{"dictionary":"有利（な）","present":"有利（な）だ","negative":"有利（な）じゃない","past":"有利（な）だった","pastNegative":"有利（な）じゃなかった","te":"有利（な）で","adverb":"有利（な）に"}},{"key":"v:不満（な）","dictionary":"不満（な）","group":"na-adj","forms":{"dictionary":"不満（な）","present":"不満（な）だ","negative":"不満（な）じゃない","past":"不満（な）だった","pastNegative":"不満（な）じゃなかった","te":"不満（な）で","adverb":"不満（な）に"}},{"key":"v:得意（な）","dictionary":"得意（な）","group":"na-adj","forms":{"dictionary":"得意（な）","present":"得意（な）だ","negative":"得意（な）じゃない","past":"得意（な）だった","pastNegative":"得意（な）じゃなかった","te":"得意（な）で","adverb":"得意（な）に"}},{"key":"v:苦手（な）","dictionary":"苦手（な）","group":"na-adj","forms":{"dictionary":"苦手（な）","present":"苦手（な）だ","negative":"苦手（な）じゃない","past":"苦手（な）だった","pastNegative":"苦手（な）じゃなかった","te":"苦手（な）で","adverb":"苦手（な）に"}},{"key":"v:普通（な）","dictionary":"普通（な）","group":"na-adj","forms":{"dictionary":"普通（な）","present":"普通（な）だ","negative":"普通（な）じゃない","past":"普通（な）だった","pastNegative":"普通（な）じゃなかった","te":"普通（な）で","adverb":"普通（な）に"}},{"key":"v:暇（な）","dictionary":"暇（な）","group":"na-adj","forms":{"dictionary":"暇（な）","present":"暇（な）だ","negative":"暇（な）じゃない","past":"暇（な）だった","pastNegative":"暇（な）じゃなかった","te":"暇（な）で","adverb":"暇（な）に"}},{"key":"v:上品（な）","dictionary":"上品（な）","group":"na-adj","forms":{"dictionary":"上品（な）","present":"上品（な）だ","negative":"上品（な）じゃない","past":"上品（な）だった","pastNegative":"上品（な）じゃなかった","te":"上品（な）で","adverb":"上品（な）に"}},{"key":"v:派手（な）","dictionary":"派手（な）","group":"na-adj","forms":{"dictionary":"派手（な）","present":"派手（な）だ","negative":"派手（な）じゃない","past":"派手（な）だった","pastNegative":"派手（な）じゃなかった","te":"派手（な）で","adverb":"派手（な）に"}},{"key":"v:地味（な）","dictionary":"地味（な）","group":"na-adj","forms":{"dictionary":"地味（な）","present":"地味（な）だ","negative":"地味（な）じゃない","past":"地味（な）だった","pastNegative":"地味（な）じゃなかった","te":"地味（な）で","adverb":"地味（な）に"}},{"key":"v:おいしい","dictionary":"おいしい","group":"i-adj","forms":{"dictionary":"おいしい","present":"おいしい","negative":"おいしくない","past":"おいしかった","pastNegative":"おいしくなかった","te":"おいしくて","adverb":"おいしく"}},{"key":"v:すばらしい","dictionary":"すばらしい","group":"i-adj","forms":{"dictionary":"すばらしい","present":"すばらしい","negative":"すばらしくない","past":"すばらしかった","pastNegative":"すばらしくなかった","te":"すばらしくて","adverb":"すばらしく"}},{"key":"v:うれしい","dictionary":"うれしい","group":"i-adj","forms":{"dictionary":"うれしい","present":"うれしい","negative":"うれしくない","past":"うれしかった","pastNegative":"うれしくなかった","te":"うれしくて","adverb":"うれしく"}},{"key":"v:おかしい","dictionary":"おかしい","group":"i-adj","forms":{"dictionary":"おかしい","present":"おかしい","negative":"おかしくない","past":"おかしかった","pastNegative":"おかしくなかった","te":"おかしくて","adverb":"おかしく"}},{"key":"v:美しい","dictionary":"美しい","group":"i-adj","forms":{"dictionary":"美しい","present":"美しい","negative":"美しくない","past":"美しかった","pastNegative":"美しくなかった","te":"美しくて","adverb":"美しく"}}]');
const adjectives$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: adjectives
}, Symbol.toStringTag, { value: "Module" }));
const VERB_FORMS = [
  { id: "masu", label: "ます形", desc: "Thể lịch sự" },
  { id: "te", label: "て形", desc: "Thể て" },
  { id: "ta", label: "た形", desc: "Thể quá khứ" },
  { id: "tara", label: "たら形", desc: "Điều kiện hoàn thành" },
  { id: "nai", label: "ない形", desc: "Thể phủ định" },
  { id: "tai", label: "たい形", desc: "Mong muốn làm gì" },
  { id: "potential", label: "可能形", desc: "Thể khả năng" },
  { id: "volitional", label: "意向形", desc: "Thể ý chí" },
  { id: "passive", label: "受身形", desc: "Thể bị động" },
  { id: "causative", label: "使役形", desc: "Thể sai khiến" },
  { id: "causative-passive", label: "使役受身形", desc: "Sai khiến + bị động" },
  { id: "conditional", label: "条件形ば", desc: "Thể điều kiện" },
  { id: "imperative", label: "命令形", desc: "Thể mệnh lệnh" }
];
const ADJ_FORMS = [
  { id: "negative", label: "Phủ định", desc: "〜くない / 〜じゃない" },
  { id: "past", label: "Quá khứ", desc: "〜かった / 〜だった" },
  { id: "past-neg", label: "QK phủ định", desc: "〜くなかった / 〜じゃなかった" },
  { id: "te", label: "て形", desc: "〜くて / 〜で" },
  { id: "adverb", label: "Trạng từ", desc: "〜く / 〜に" },
  { id: "noun-mod", label: "Bổ nghĩa DT", desc: "〜い＋N / 〜な＋N" },
  { id: "conditional", label: "Điều kiện", desc: "〜ければ / 〜なら(ば)" }
];
const GODAN_STEMS = {
  "う": { a: "わ", i: "い", e: "え", o: "お" },
  "く": { a: "か", i: "き", e: "け", o: "こ" },
  "ぐ": { a: "が", i: "ぎ", e: "げ", o: "ご" },
  "す": { a: "さ", i: "し", e: "せ", o: "そ" },
  "つ": { a: "た", i: "ち", e: "て", o: "と" },
  "ぬ": { a: "な", i: "に", e: "ね", o: "の" },
  "ぶ": { a: "ば", i: "び", e: "べ", o: "ぼ" },
  "む": { a: "ま", i: "み", e: "め", o: "も" },
  "る": { a: "ら", i: "り", e: "れ", o: "ろ" }
};
const TE_MAP = {
  "う": { te: "って", ta: "った" },
  "つ": { te: "って", ta: "った" },
  "る": { te: "って", ta: "った" },
  "く": { te: "いて", ta: "いた" },
  "ぐ": { te: "いで", ta: "いだ" },
  "す": { te: "して", ta: "した" },
  "ぬ": { te: "んで", ta: "んだ" },
  "ぶ": { te: "んで", ta: "んだ" },
  "む": { te: "んで", ta: "んだ" }
};
const ICHIDAN_SET = /* @__PURE__ */ new Set([
  "たべる",
  "みる",
  "ねる",
  "おきる",
  "あける",
  "しめる",
  "つける",
  "きる",
  "でる",
  "いれる",
  "でかける",
  "おしえる",
  "みせる",
  "あげる",
  "くれる",
  "かりる",
  "おりる",
  "あびる",
  "できる",
  "しらべる",
  "すてる",
  "つかれる",
  "まける",
  "やめる",
  "わすれる",
  "こたえる",
  "つづける",
  "はじめる",
  "おぼえる",
  "かんがえる",
  "むかえる",
  "うまれる",
  "きめる",
  "たすける",
  "にげる",
  "あつめる",
  "ほめる",
  "しんじる",
  "かたづける",
  "きこえる",
  "みえる",
  "ならべる",
  "くらべる",
  "つたえる",
  "おくれる",
  "きえる",
  "うれる",
  "食べる",
  "見る",
  "寝る",
  "起きる",
  "開ける",
  "閉める",
  "着る",
  "出る",
  "入れる",
  "教える",
  "見せる",
  "借りる",
  "降りる",
  "浴びる",
  "出来る",
  "調べる",
  "捨てる",
  "疲れる",
  "負ける",
  "辞める",
  "忘れる",
  "答える",
  "続ける",
  "始める",
  "覚える",
  "考える",
  "迎える",
  "生まれる",
  "決める",
  "助ける",
  "逃げる",
  "集める",
  "褒める",
  "信じる",
  "片付ける",
  "聞こえる",
  "見える",
  "並べる",
  "比べる",
  "伝える",
  "遅れる",
  "消える",
  "売れる"
]);
const GODAN_RU_EXCEPTIONS = /* @__PURE__ */ new Set([
  "はいる",
  "かえる",
  "はしる",
  "のこる",
  "まわる",
  "いる",
  "入る",
  "帰る",
  "走る",
  "残る",
  "回る",
  "要る"
]);
function getPreRuKana(dictForm) {
  if (!dictForm || !dictForm.endsWith("る")) return "";
  for (let i = dictForm.length - 2; i >= 0; i--) {
    const ch = dictForm[i];
    if (/[\u3040-\u309f]/.test(ch)) return ch;
  }
  return "";
}
function getVerbGroup(dictForm) {
  if (!dictForm) return null;
  if (dictForm === "する" || dictForm.endsWith("する")) return 3;
  if (dictForm === "くる" || dictForm === "来る") return 3;
  if (GODAN_RU_EXCEPTIONS.has(dictForm)) return 1;
  if (ICHIDAN_SET.has(dictForm)) return 2;
  const last = dictForm.slice(-1);
  if (last === "る") {
    const prevKana = getPreRuKana(dictForm);
    if (prevKana && "いきしちにひみりえけせてねへめれぎじぢびぴげぜでべぺ".includes(prevKana)) return 2;
    return 1;
  }
  if (GODAN_STEMS[last]) return 1;
  return null;
}
function conjugateVerb(dictForm, form) {
  var _a, _b, _c;
  if (!dictForm || !form) return null;
  const group = getVerbGroup(dictForm);
  if (!group) return null;
  if (dictForm === "する" || dictForm.endsWith("する")) {
    const prefix = dictForm.slice(0, -2);
    const map = {
      masu: prefix + "します",
      te: prefix + "して",
      ta: prefix + "した",
      tara: prefix + "したら",
      nai: prefix + "しない",
      tai: prefix + "したい",
      potential: prefix + "できる",
      volitional: prefix + "しよう",
      passive: prefix + "される",
      causative: prefix + "させる",
      "causative-passive": prefix + "させられる",
      conditional: prefix + "すれば",
      imperative: prefix + "しろ"
    };
    return map[form] || null;
  }
  if (dictForm === "くる" || dictForm === "来る") {
    const map = {
      masu: "きます",
      te: "きて",
      ta: "きた",
      nai: "こない",
      tara: "きたら",
      tai: "きたい",
      potential: "こられる",
      volitional: "こよう",
      passive: "こられる",
      causative: "こさせる",
      "causative-passive": "こさせられる",
      conditional: "くれば",
      imperative: "こい"
    };
    return map[form] || null;
  }
  const stem = dictForm.slice(0, -1);
  const ending = dictForm.slice(-1);
  if (group === 2) {
    const map = {
      masu: stem + "ます",
      te: stem + "て",
      ta: stem + "た",
      nai: stem + "ない",
      tara: stem + "たら",
      tai: stem + "たい",
      potential: stem + "られる",
      volitional: stem + "よう",
      passive: stem + "られる",
      causative: stem + "させる",
      "causative-passive": stem + "させられる",
      conditional: stem + "れば",
      imperative: stem + "ろ"
    };
    return map[form] || null;
  }
  const stems = GODAN_STEMS[ending];
  if (!stems) return null;
  if (dictForm === "いく" || dictForm === "行く") {
    if (form === "te") return stem + "って";
    if (form === "ta") return stem + "った";
  }
  switch (form) {
    case "masu":
      return stem + stems.i + "ます";
    case "te":
      return stem + (((_a = TE_MAP[ending]) == null ? void 0 : _a.te) || "");
    case "ta":
      return stem + (((_b = TE_MAP[ending]) == null ? void 0 : _b.ta) || "");
    case "tara": {
      const ta = dictForm === "いく" || dictForm === "行く" ? stem + "った" : stem + (((_c = TE_MAP[ending]) == null ? void 0 : _c.ta) || "");
      return ta ? ta + "ら" : null;
    }
    case "nai":
      return stem + stems.a + "ない";
    case "tai":
      return stem + stems.i + "たい";
    case "potential":
      return stem + stems.e + "る";
    case "volitional":
      return stem + stems.o + "う";
    case "passive":
      return stem + stems.a + "れる";
    case "causative":
      return stem + stems.a + "せる";
    case "causative-passive":
      return stem + stems.a + "せられる";
    case "conditional":
      return stem + stems.e + "ば";
    case "imperative":
      return stem + stems.e;
    default:
      return null;
  }
}
function conjugateIAdj(dictForm, form) {
  if (!dictForm || !dictForm.endsWith("い")) return null;
  const stem = dictForm.slice(0, -1);
  const effectiveStem = dictForm === "いい" || dictForm === "よい" ? "よ" : stem;
  switch (form) {
    case "negative":
      return effectiveStem + "くない";
    case "past":
      return effectiveStem + "かった";
    case "past-neg":
      return effectiveStem + "くなかった";
    case "te":
      return effectiveStem + "くて";
    case "adverb":
      return effectiveStem + "く";
    case "noun-mod":
      return dictForm;
    case "conditional":
      return effectiveStem + "ければ";
    default:
      return null;
  }
}
function conjugateNaAdj(dictForm, form) {
  if (!dictForm) return null;
  switch (form) {
    case "negative":
      return dictForm + "じゃない";
    case "past":
      return dictForm + "だった";
    case "past-neg":
      return dictForm + "じゃなかった";
    case "te":
      return dictForm + "で";
    case "adverb":
      return dictForm + "に";
    case "noun-mod":
      return dictForm + "な";
    case "conditional":
      return dictForm + "なら";
    default:
      return null;
  }
}
function findVerbFormByAnswer(dict, answer) {
  if (!dict || !answer) return null;
  for (const form of VERB_FORMS) {
    if (conjugateVerb(dict, form.id) === answer) return form;
  }
  return null;
}
function findAdjFormByAnswer(item, answer) {
  if (!item || !answer) return null;
  const isI = item.adjType === "い形容詞";
  for (const form of ADJ_FORMS) {
    const v = isI ? conjugateIAdj(item.reading, form.id) : conjugateNaAdj(item.reading, form.id);
    if (v === answer) return form;
  }
  return null;
}
function getVerbPatternTag(dict, group) {
  if (!dict) return null;
  if (group === 3) return "irregular";
  if (group === 2) return "ichidan";
  const ending = dict.slice(-1);
  if (ending === "く") return "ku";
  if (ending === "む") return "mu";
  if (ending === "ぶ") return "bu";
  if (ending === "す") return "su";
  if (ending === "る") return "ru-godan";
  return "other";
}
function conjugateRuAsIchidan(dict, form) {
  if (!dict || !dict.endsWith("る")) return null;
  const stem = dict.slice(0, -1);
  const map = {
    masu: stem + "ます",
    te: stem + "て",
    ta: stem + "た",
    tara: stem + "たら",
    nai: stem + "ない",
    tai: stem + "たい",
    potential: stem + "られる",
    volitional: stem + "よう",
    passive: stem + "られる",
    causative: stem + "させる",
    "causative-passive": stem + "させられる",
    conditional: stem + "れば",
    imperative: stem + "ろ"
  };
  return map[form] || null;
}
function classifyConjugationError(item, selectedAnswer, correctAnswer) {
  if (!item || !selectedAnswer || !correctAnswer) return { type: "generic" };
  if (item._type !== "verb-conjugation") return { type: "unknown" };
  if ((item.reading === "いく" || item.reading === "行く") && item.formId === "te" && selectedAnswer.endsWith("いて")) {
    return { type: "ikku-exception" };
  }
  if (item.formId === "tai") {
    const masu = conjugateVerb(item.dict, "masu");
    if (selectedAnswer.includes("ましたい") || masu && selectedAnswer === `${masu}たい`) {
      return { type: "tai-fake-polite-past" };
    }
  }
  const passiveGuess = item.formId === "potential" && item.group === 1 ? conjugateVerb(item.dict, "passive") : null;
  if (item.formId === "potential" && item.group === 1 && (selectedAnswer === passiveGuess || selectedAnswer.endsWith("られる"))) {
    return { type: "potential-godan-pattern" };
  }
  if (item.formId === "causative-passive" && !selectedAnswer.includes("られ")) {
    return { type: "missing-passive-suffix" };
  }
  if (item.formId === "te" && /い[てだ]$/.test(selectedAnswer) && /いで$/.test(correctAnswer)) {
    return { type: "te-voicing" };
  }
  const mistaken = findVerbFormByAnswer(item.dict, selectedAnswer);
  if (mistaken && mistaken.id !== item.formId) {
    return { type: "similar-form", mistakenForm: mistaken };
  }
  if (item.dict && item.dict.endsWith("る")) {
    const ichidanGuess = conjugateRuAsIchidan(item.dict, item.formId);
    if (item.group === 1 && ichidanGuess && ichidanGuess === selectedAnswer) {
      return { type: "wrong-group", expected: "Nhóm 1", guessed: "Nhóm 2" };
    }
  }
  return { type: "generic" };
}
function getErrorExplanation(item, selectedAnswer, correctAnswer) {
  const err = classifyConjugationError(item, selectedAnswer, correctAnswer);
  if (err.type === "ikku-exception") return "⚠️ 「行く」là ngoại lệ: て形 là 「行って」, không phải 「行いて」.";
  if (err.type === "tai-fake-polite-past") return "⚠️ たい形 không ghép sau 「ました」 hoặc nguyên 「ます」. Hãy lấy ます形, bỏ hẳn 「ます」 để lấy thân động từ, rồi thêm 「たい」.";
  if (err.type === "potential-godan-pattern") return "⚠️ Động từ nhóm 1 chia 可能形 theo mẫu e-stem + る (vd: 飲む→飲める), không dùng られる.";
  if (err.type === "missing-passive-suffix") return "⚠️ 使役受身形 cần cả hai phần: 使役 + 受身 (vd: 書かせられる).";
  if (err.type === "te-voicing") return "⚠️ Với âm cuối ぐ/ぶ/む/ぬ, て形 dùng 〜で (vd: 泳ぐ→泳いで), không phải 〜て.";
  if (err.type === "similar-form" && err.mistakenForm) {
    return `⚠️ Bạn đã chọn đúng cách chia của động từ này nhưng nhầm dạng: đó là ${err.mistakenForm.label}, không phải ${(item == null ? void 0 : item.formLabel) || ""}.`;
  }
  if (err.type === "wrong-group") return `⚠️ Bạn đang chia theo ${err.guessed}. Động từ này thuộc ${err.expected}, cần đổi lại mẫu chia.`;
  return "⚠️ Sai mẫu chia. Hãy kiểm tra lại nhóm động từ, âm cuối và hậu tố của dạng cần chia.";
}
function isLikelyJapaneseText(v) {
  if (!v || typeof v !== "string") return false;
  return /^[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}ー・〜～々ゝゞぁ-ゖ゛゜]+$/u.test(v);
}
function validateConjugationItem(item) {
  if (!(item == null ? void 0 : item.id) || !(item == null ? void 0 : item.answer) || !(item == null ? void 0 : item.reading) || !(item == null ? void 0 : item.formId)) return false;
  if (!isLikelyJapaneseText(item.answer) || !isLikelyJapaneseText(item.reading)) return false;
  const options = [item.answer, ...item.wrongs || []].filter(Boolean);
  const unique = new Set(options);
  if (unique.size !== options.length) return false;
  if (item._type === "verb-conjugation") {
    const expected = conjugateVerb(item.dict, item.formId);
    if (!expected || expected !== item.answer) return false;
    const validWrongs = (item.wrongs || []).every((w) => {
      if (w === item.answer) return false;
      return Boolean(findVerbFormByAnswer(item.dict, w));
    });
    return validWrongs;
  }
  if (item._type === "adj-conjugation") {
    const expected = item.adjType === "い形容詞" ? conjugateIAdj(item.reading, item.formId) : conjugateNaAdj(item.reading, item.formId);
    if (!expected || expected !== item.answer) return false;
    const validWrongs = (item.wrongs || []).every((w) => {
      if (w === item.answer) return false;
      return Boolean(findAdjFormByAnswer(item, w));
    });
    return validWrongs;
  }
  return false;
}
function maskAnswerForHint(answer) {
  if (!answer) return "";
  if (answer.length <= 2) return `${answer.slice(0, 1)}◯`;
  const head = answer.slice(0, 2);
  const tail = answer.slice(-1);
  return `${head}${"◯".repeat(Math.max(answer.length - 3, 1))}${tail}`;
}
function buildConjugationTable(item) {
  if (!item) return [];
  if (item._type === "verb-conjugation") {
    return VERB_FORMS.map((f) => ({
      label: f.label,
      desc: f.desc,
      value: conjugateVerb(item.dict, f.id)
    })).filter((r) => r.value);
  }
  const isI = item.adjType === "い形容詞";
  return ADJ_FORMS.map((f) => ({
    label: f.label,
    desc: f.desc,
    value: isI ? conjugateIAdj(item.reading, f.id) : conjugateNaAdj(item.reading, f.id)
  })).filter((r) => r.value);
}
const JAPANESE_RE = /[\u3040-\u30ff\u3400-\u9fff\uff66-\uff9f]/;
const KANJI_RE = /[\u3400-\u9fff]+/g;
const BLANK_SOURCE = "(?:＿{2,}|_{2,}|\\{\\d+\\}|★)";
const BLANK_RE = new RegExp(BLANK_SOURCE, "g");
const BLANK_TEST_RE = new RegExp(BLANK_SOURCE);
const BLANK_SENTINEL = "N4BLANKTOKEN";
function toHiragana(text) {
  return String(text || "").replace(/[\u30a1-\u30f6]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 96));
}
function list(values) {
  return [...new Set((Array.isArray(values) ? values : [values]).flat(Infinity).map((value) => String(value || "").trim()).filter(Boolean))].sort((a, b) => b.length - a.length);
}
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function hasJapaneseText(text) {
  return JAPANESE_RE.test(String(text || ""));
}
function hasQuestionBlank(text) {
  return BLANK_TEST_RE.test(String(text || ""));
}
function maskLearningSecrets(text, secrets, replacement = "___") {
  let output = String(text || "");
  for (const secret of list(secrets)) {
    output = output.replace(new RegExp(escapeRegExp(secret), "gi"), replacement);
  }
  return output;
}
function romajiSecrets(secrets) {
  return list(secrets).flatMap((secret) => {
    const converted = hasJapaneseText(secret) ? kanaToRomaji(secret) : secret;
    return converted && converted !== secret ? [secret, converted] : [secret];
  });
}
function safeQuestionRomaji({
  text = "",
  reading = "",
  romaji = "",
  secrets = [],
  fallback = "___"
} = {}) {
  let source = String(romaji || reading || text || "");
  if (!source) return "";
  source = source.replace(BLANK_RE, BLANK_SENTINEL);
  source = maskLearningSecrets(source, secrets, BLANK_SENTINEL);
  let output = hasJapaneseText(source) ? kanaToRomaji(source) : source;
  output = maskLearningSecrets(output, romajiSecrets(secrets), BLANK_SENTINEL);
  output = output.replace(KANJI_RE, BLANK_SENTINEL);
  output = output.replace(new RegExp(BLANK_SENTINEL, "g"), " ___ ");
  output = output.replace(/\s+/g, " ").replace(/(?:\s*___\s*)+/g, " ___ ").trim();
  return output || fallback;
}
function safeQuestionTts({ text = "", secrets = [] } = {}) {
  let output = String(text || "").replace(BLANK_RE, "、");
  output = maskLearningSecrets(output, secrets, "、");
  return output.replace(/(?:\s*、\s*)+/g, "、").replace(/^[、\s]+|[、\s]+$/g, "").trim();
}
function safeVietnameseMeaning(text, answerMeanings = []) {
  const original = String(text || "").trim();
  if (!original) return "";
  const masked = maskLearningSecrets(original, answerMeanings, "___");
  if (masked.replace(/[_\s.,!?;:()\-–—]/g, "") === "") {
    return "Nghĩa của phần đang được hỏi: ___";
  }
  return masked;
}
function inferReadingFromReference(text, referenceText, referenceReading) {
  const target = String(text || "");
  const surface = String(referenceText || "");
  const reading = toHiragana(referenceReading);
  if (!target || !surface || !reading) return "";
  if (!KANJI_RE.test(surface)) return target;
  KANJI_RE.lastIndex = 0;
  const tokens = surface.match(/[\u3400-\u9fff]+|[^\u3400-\u9fff]+/g) || [];
  const mappings = /* @__PURE__ */ new Map();
  let cursor = 0;
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (!/[\u3400-\u9fff]/.test(token)) {
      const normalized = toHiragana(token);
      const found = reading.indexOf(normalized, cursor);
      if (found >= 0) cursor = found + normalized.length;
      continue;
    }
    const nextKnown = tokens.slice(index + 1).find((part) => !/[\u3400-\u9fff]/.test(part) && part.trim());
    const anchor = toHiragana(nextKnown || "");
    const end = anchor ? reading.indexOf(anchor, cursor) : reading.length;
    if (end >= cursor) {
      mappings.set(token, reading.slice(cursor, end));
      cursor = end;
    }
  }
  let inferred = target;
  for (const [kanji, kana] of [...mappings.entries()].sort((a, b) => b[0].length - a[0].length)) {
    if (kana) inferred = inferred.replace(new RegExp(escapeRegExp(kanji), "g"), kana);
  }
  return inferred;
}
function createQuestionPresentation({
  text = "",
  reading = "",
  romaji = "",
  vi = "",
  ttsText = "",
  answers = [],
  answerReadings = [],
  answerRomaji = [],
  answerMeanings = [],
  hiddenTargets = []
} = {}) {
  const answerSecrets = list([answers, answerReadings, answerRomaji]);
  const questionSecrets = list([answerSecrets, hiddenTargets]);
  return {
    romaji: safeQuestionRomaji({ text, reading, romaji, secrets: questionSecrets }),
    vi: safeVietnameseMeaning(vi, answerMeanings),
    ttsText: safeQuestionTts({ text: ttsText || text, secrets: questionSecrets })
  };
}
function createAnswerPresentation({ label = "", reading = "", romaji = "", ttsText = "" } = {}) {
  const text = String(label || "");
  const isJapanese = hasJapaneseText(text);
  const readingText = String(romaji || reading || "");
  const displayRomaji = isJapanese ? safeQuestionRomaji({ text, reading: readingText }) : "";
  const spoken = String(ttsText || (hasJapaneseText(reading) ? reading : text));
  return {
    romaji: displayRomaji,
    ttsText: spoken,
    lang: hasJapaneseText(spoken) || isJapanese ? "ja" : "vi"
  };
}
const JLPT_N4_VOCAB_EXAM_POOL = Object.freeze(
  [
    {
      "id": "vocab-reading-yakusoku",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "友達との約束を忘れてしまいました。",
      "target": "約束",
      "answer": "やくそく",
      "distractors": [
        "よそく",
        "やくぞく",
        "やくそ"
      ],
      "correctWord": "約束",
      "correctReading": "やくそく",
      "meaning": "lời hẹn, lời hứa",
      "explanationVi": "約束 đọc là やくそく. Trong đề thật, hãy nhìn cả chữ Hán lẫn ngữ cảnh để tránh nhầm với 予測（よそく）.",
      "sentenceVi": "Tôi đã vô tình quên mất lời hứa với bạn bè.",
      "sentenceReading": "ともだちとのやくそくをわすれてしまいました。"
    },
    {
      "id": "vocab-reading-keiken",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "日本で生活した経験があります。",
      "target": "経験",
      "answer": "けいけん",
      "distractors": [
        "けけん",
        "きょうけん",
        "けいげん"
      ],
      "correctWord": "経験",
      "correctReading": "けいけん",
      "meaning": "kinh nghiệm",
      "explanationVi": "経験 đọc là けいけん, thường đi với 「Vたことがあります」 để nói về kinh nghiệm đã từng làm.",
      "sentenceVi": "Tôi có kinh nghiệm sống ở Nhật Bản.",
      "sentenceReading": "にほんでせいかつしたけいけんがあります。"
    },
    {
      "id": "vocab-reading-undou",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "健康のために毎朝運動しています。",
      "target": "運動",
      "answer": "うんどう",
      "distractors": [
        "うんてん",
        "うんと",
        "うごき"
      ],
      "correctWord": "運動",
      "correctReading": "うんどう",
      "meaning": "vận động, tập thể dục",
      "explanationVi": "運動 đọc là うんどう. Chú ý phân biệt với 運転（うんてん） là lái xe.",
      "sentenceVi": "Tôi tập thể dục mỗi sáng vì sức khỏe.",
      "sentenceReading": "けんこうのためにまいあさうんどうしています。"
    },
    {
      "id": "vocab-reading-fukuzatsu",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "この機械の使い方は複雑です。",
      "target": "複雑",
      "answer": "ふくざつ",
      "distractors": [
        "ふくさつ",
        "ふぐざつ",
        "ぶくざつ"
      ],
      "correctWord": "複雑",
      "correctReading": "ふくざつ",
      "meaning": "phức tạp",
      "explanationVi": "複雑 đọc là ふくざつ. Đây là từ vựng rất hay xuất hiện trong bài thi đọc kanji N4.",
      "sentenceVi": "Cách sử dụng chiếc máy này rất phức tạp.",
      "sentenceReading": "このきかいのつかいかたはふくざつです。"
    },
    {
      "id": "vocab-reading-annai",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "私が町を案内します。",
      "target": "案内",
      "answer": "あんない",
      "distractors": [
        "あない",
        "あんがい",
        "あんないい"
      ],
      "correctWord": "案内",
      "correctReading": "あんない",
      "meaning": "hướng dẫn",
      "explanationVi": "案内 (Án Nội) đọc là あんない, mang nghĩa hướng dẫn.",
      "sentenceVi": "Tôi sẽ hướng dẫn bạn tham quan thị trấn.",
      "sentenceReading": "わたしがまちをあんないします。"
    },
    {
      "id": "vocab-reading-kiken",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "ここは危険ですから、入らないでください。",
      "target": "危険",
      "answer": "きけん",
      "distractors": [
        "ぎけん",
        "きげん",
        "きけんん"
      ],
      "correctWord": "危険",
      "correctReading": "きけん",
      "meaning": "nguy hiểm",
      "explanationVi": "危険 (Nguy Hiểm) đọc là きけん.",
      "sentenceVi": "Vì nơi này nguy hiểm nên xin đừng vào.",
      "sentenceReading": "ここはきけんですから、はいらないでください。"
    },
    {
      "id": "vocab-reading-shippai",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "テストで失敗してしまった。",
      "target": "失敗",
      "answer": "しっぱい",
      "distractors": [
        "しぱい",
        "じっぱい",
        "しっはい"
      ],
      "correctWord": "失敗",
      "correctReading": "しっぱい",
      "meaning": "thất bại",
      "explanationVi": "失敗 (Thất Bại) đọc là しっぱい, chú ý âm ngắt (っ).",
      "sentenceVi": "Tôi đã làm bài kiểm tra không tốt/thất bại.",
      "sentenceReading": "てすとでしっぱいしてしまった。"
    },
    {
      "id": "vocab-reading-junbi",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "旅行の準備をしましょう。",
      "target": "準備",
      "answer": "じゅんび",
      "distractors": [
        "じゅび",
        "じゅんひ",
        "しゅんび"
      ],
      "correctWord": "準備",
      "correctReading": "じゅんび",
      "meaning": "chuẩn bị",
      "explanationVi": "準備 (Chuẩn Bị) đọc là じゅんび.",
      "sentenceVi": "Chúng ta hãy chuẩn bị cho chuyến du lịch thôi.",
      "sentenceReading": "りょこうのじゅんびをしましょう。"
    },
    {
      "id": "vocab-reading-kyoumi",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "日本の歴史に興味があります。",
      "target": "興味",
      "answer": "きょうみ",
      "distractors": [
        "きょみ",
        "きょうみい",
        "きゅうみ"
      ],
      "correctWord": "興味",
      "correctReading": "きょうみ",
      "meaning": "hứng thú, quan tâm",
      "explanationVi": "興味 (Hưng Vị) đọc là きょうみ.",
      "sentenceVi": "Tôi có hứng thú với lịch sử Nhật Bản.",
      "sentenceReading": "にほんのれきしにきょうみがあります。"
    },
    {
      "id": "vocab-reading-keshiki",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "ここから見える景色は素晴らしい。",
      "target": "景色",
      "answer": "けしき",
      "distractors": [
        "けいき",
        "けしょく",
        "けいしき"
      ],
      "correctWord": "景色",
      "correctReading": "けしき",
      "meaning": "phong cảnh",
      "explanationVi": "景色 (Cảnh Sắc) đọc là けしき.",
      "sentenceVi": "Phong cảnh nhìn từ đây thật tuyệt vời.",
      "sentenceReading": "ここからみえるけしきはすばらしい。"
    },
    {
      "id": "vocab-reading-renraku",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "後で先生に連絡します。",
      "target": "連絡",
      "answer": "れんらく",
      "distractors": [
        "れらく",
        "れんがく",
        "れんらっく"
      ],
      "correctWord": "連絡",
      "correctReading": "れんらく",
      "meaning": "liên lạc",
      "explanationVi": "連絡 (Liên Lạc) đọc là れんらく.",
      "sentenceVi": "Tôi sẽ liên lạc với thầy giáo sau.",
      "sentenceReading": "あとでせんせいにれんらくします。"
    },
    {
      "id": "vocab-reading-dorobou",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "家の中に泥棒が入りました。",
      "target": "泥棒",
      "answer": "どろぼう",
      "distractors": [
        "とろぼう",
        "どろほう",
        "どろぼ"
      ],
      "correctWord": "泥棒",
      "correctReading": "どろぼう",
      "meaning": "kẻ trộm",
      "explanationVi": "泥棒 (Nê Bổng) đọc là どろぼう.",
      "sentenceVi": "Kẻ trộm đã lẻn vào trong nhà.",
      "sentenceReading": "いえのなかにどろぼうがはいりました。"
    },
    {
      "id": "vocab-reading-jiko",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "昨日、大きな事故がありました。",
      "target": "事故",
      "answer": "じこ",
      "distractors": [
        "じご",
        "じっこ",
        "じこう"
      ],
      "correctWord": "事故",
      "correctReading": "じこ",
      "meaning": "sự cố, tai nạn",
      "explanationVi": "事故 (Sự Cố) đọc là じこ. Chú ý không có trường âm.",
      "sentenceVi": "Hôm qua đã xảy ra một vụ tai nạn lớn.",
      "sentenceReading": "きのう、おおきなじこがありました。"
    },
    {
      "id": "vocab-reading-kisetsu",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "日本には四つの季節があります。",
      "target": "季節",
      "answer": "きせつ",
      "distractors": [
        "きぜつ",
        "きせっ",
        "ぎせつ"
      ],
      "correctWord": "季節",
      "correctReading": "きせつ",
      "meaning": "mùa",
      "explanationVi": "季節 (Quý Tiết) đọc là きせつ.",
      "sentenceVi": "Ở Nhật Bản có bốn mùa.",
      "sentenceReading": "にほんによっつのきせつがあります。"
    },
    {
      "id": "vocab-reading-soudan",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "困ったときは、友達に相談します。",
      "target": "相談",
      "answer": "そうだん",
      "distractors": [
        "そだん",
        "そうたん",
        "そうだ"
      ],
      "correctWord": "相談",
      "correctReading": "そうだん",
      "meaning": "bàn bạc, thảo luận",
      "explanationVi": "相談 (Tương Đàm) đọc là そうだん.",
      "sentenceVi": "Khi gặp khó khăn, tôi sẽ bàn bạc với bạn bè.",
      "sentenceReading": "こまったときは、ともだちにそうだんします。"
    },
    {
      "id": "vocab-reading-kaigi",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "これから会議が始まります。",
      "target": "会議",
      "answer": "かいぎ",
      "distractors": [
        "かいき",
        "がいぎ",
        "かいきい"
      ],
      "correctWord": "会議",
      "correctReading": "かいぎ",
      "meaning": "cuộc họp",
      "explanationVi": "会議 (Hội Nghị) đọc là かいぎ.",
      "sentenceVi": "Cuộc họp chuẩn bị bắt đầu bây giờ.",
      "sentenceReading": "これからかいぎがはじまります。"
    },
    {
      "id": "vocab-reading-jishin",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "地震のときは、机の下に入ってください。",
      "target": "地震",
      "answer": "じしん",
      "distractors": [
        "じじん",
        "じせん",
        "ちしん"
      ],
      "correctWord": "地震",
      "correctReading": "じしん",
      "meaning": "động đất",
      "explanationVi": "地震 (Địa Chấn) đọc là じしん.",
      "sentenceVi": "Khi có động đất, hãy chui xuống dưới gầm bàn.",
      "sentenceReading": "じしんのときは、つくえのしたにはいってください。"
    },
    {
      "id": "vocab-reading-dougu",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "この道具の使い方を教えてください。",
      "target": "道具",
      "answer": "どうぐ",
      "distractors": [
        "とぐ",
        "どうく",
        "とぐう"
      ],
      "correctWord": "道具",
      "correctReading": "どうぐ",
      "meaning": "dụng cụ",
      "explanationVi": "道具 (Đạo Cụ) đọc là どうぐ.",
      "sentenceVi": "Xin vui lòng chỉ cho tôi cách sử dụng dụng cụ này.",
      "sentenceReading": "このどうぐのつかいかたをおしえてください。"
    },
    {
      "id": "vocab-reading-juusho",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "ここに住所と名前を書いてください。",
      "target": "住所",
      "answer": "じゅうしょ",
      "distractors": [
        "じゅしょ",
        "じゅうしょう",
        "じゅうそ"
      ],
      "correctWord": "住所",
      "correctReading": "じゅうしょ",
      "meaning": "địa chỉ",
      "explanationVi": "住所 (Trụ Sở) đọc là じゅうしょ. Chú ý không có trường âm ở sau しょ.",
      "sentenceVi": "Xin vui lòng viết địa chỉ và tên vào đây.",
      "sentenceReading": "ここにじゅうしょとなまえをかいてください。"
    },
    {
      "id": "vocab-reading-enryo",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúngの từ được gạch dưới.",
      "sentence": "遠慮しないで、たくさん食べてください。",
      "target": "遠慮",
      "answer": "えんりょ",
      "distractors": [
        "えんろ",
        "えんりょう",
        "えんり"
      ],
      "correctWord": "遠慮",
      "correctReading": "えんりょ",
      "meaning": "ngần ngại, khách sáo",
      "explanationVi": "遠慮 (Viễn Lự) đọc là えんりょ. Không có trường âm ở đuôi.",
      "sentenceVi": "Đừng khách sáo, hãy ăn thật nhiều nhé.",
      "sentenceReading": "えんりょしないで、たくさんたべてください。"
    },
    {
      "id": "vocab-orthography-shiken",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "来週、しけんがあります。",
      "target": "しけん",
      "answer": "試験",
      "distractors": [
        "事件",
        "試検",
        "私見"
      ],
      "correctWord": "試験",
      "correctReading": "しけん",
      "meaning": "kỳ thi, bài kiểm tra",
      "explanationVi": "「しけん」 trong ngữ cảnh kiểm tra là 試験. 事件（じけん） nghĩa là sự việc/vụ việc.",
      "sentenceVi": "Tuần sau sẽ có kỳ thi.",
      "sentenceReading": "らいしゅう、しけんがあります。"
    },
    {
      "id": "vocab-orthography-tokubetsu",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "今日はとくべつな日です。",
      "target": "とくべつ",
      "answer": "特別",
      "distractors": [
        "特急",
        "徳別",
        "特色"
      ],
      "correctWord": "特別",
      "correctReading": "とくべつ",
      "meaning": "đặc biệt",
      "explanationVi": "特別 mang nghĩa đặc biệt.",
      "sentenceVi": "Hôm nay là một ngày đặc biệt.",
      "sentenceReading": "きょうはとくべつなひです。"
    },
    {
      "id": "vocab-orthography-riyuu",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "遅れたりゆうを教えてください。",
      "target": "りゆう",
      "answer": "理由",
      "distractors": [
        "理油",
        "里由",
        "理夕"
      ],
      "correctWord": "理由",
      "correctReading": "りゆう",
      "meaning": "lý do",
      "explanationVi": "理由 (Lý Do) là cách viết đúng. Cẩn thận nhầm chữ 油 (dầu).",
      "sentenceVi": "Hãy cho tôi biết lý do bạn đi trễ.",
      "sentenceReading": "おくれたりゆうをおしえてください。"
    },
    {
      "id": "vocab-orthography-sewa",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "犬のせわをする。",
      "target": "せわ",
      "answer": "世話",
      "distractors": [
        "世舌",
        "生話",
        "性話"
      ],
      "correctWord": "世話",
      "correctReading": "せわ",
      "meaning": "chăm sóc",
      "explanationVi": "世話 (Thế Thoại) có nghĩa là chăm sóc, giúp đỡ.",
      "sentenceVi": "Tôi chăm sóc chú chó.",
      "sentenceReading": "いぬのせわをする。"
    },
    {
      "id": "vocab-orthography-kyouiku",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "子どものきょういくは大切です。",
      "target": "きょういく",
      "answer": "教育",
      "distractors": [
        "教行く",
        "教生",
        "境育"
      ],
      "correctWord": "教育",
      "correctReading": "きょういく",
      "meaning": "giáo dục",
      "explanationVi": "教育 (Giáo Dục) là cách viết đúng.",
      "sentenceVi": "Việc giáo dục trẻ em là rất quan trọng.",
      "sentenceReading": "こどものきょういくはたいせつです。"
    },
    {
      "id": "vocab-orthography-hantai",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "その意見にははんたいです。",
      "target": "はんたい",
      "answer": "反対",
      "distractors": [
        "半対",
        "反待",
        "返対"
      ],
      "correctWord": "反対",
      "correctReading": "はんたい",
      "meaning": "phản đối",
      "explanationVi": "反対 (Phản Đối) là cách viết đúng. 半 mang nghĩa một nửa.",
      "sentenceVi": "Tôi phản đối ý kiến đó.",
      "sentenceReading": "そのいけんにははんたいです。"
    },
    {
      "id": "vocab-orthography-sansei",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "私はその案にさんせいです。",
      "target": "さんせい",
      "answer": "賛成",
      "distractors": [
        "参成",
        "賛星",
        "三成"
      ],
      "correctWord": "賛成",
      "correctReading": "さんせい",
      "meaning": "tán thành",
      "explanationVi": "賛成 (Tán Thành) là cách viết đúng.",
      "sentenceVi": "Tôi tán thành phương án đó.",
      "sentenceReading": "わたしはそのあんにさんせいです。"
    },
    {
      "id": "vocab-orthography-chuui",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "車にちゅういしてください。",
      "target": "ちゅうい",
      "answer": "注意",
      "distractors": [
        "注医",
        "柱意",
        "注音"
      ],
      "correctWord": "注意",
      "correctReading": "ちゅうい",
      "meaning": "chú ý",
      "explanationVi": "注意 (Chú Ý) là cách viết đúng. 医 là y (y bác sĩ).",
      "sentenceVi": "Xin hãy chú ý xe cộ.",
      "sentenceReading": "くるまにちゅういしてください。"
    },
    {
      "id": "vocab-orthography-setsumei",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "先生のせつめいをよく聞きます。",
      "target": "せつめい",
      "answer": "説明",
      "distractors": [
        "設明",
        "接明",
        "説名"
      ],
      "correctWord": "説明",
      "correctReading": "せつめい",
      "meaning": "giải thích",
      "explanationVi": "説明 (Thuyết Minh) là cách viết đúng.",
      "sentenceVi": "Tôi lắng nghe kỹ lời giải thích của giáo viên.",
      "sentenceReading": "せんせいのせつめいをよくききます。"
    },
    {
      "id": "vocab-orthography-kagaku",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "彼はかがくの研究をしています。",
      "target": "かがく",
      "answer": "科学",
      "distractors": [
        "化学",
        "科楽",
        "果学"
      ],
      "correctWord": "科学",
      "correctReading": "かがく",
      "meaning": "khoa học",
      "explanationVi": "科学 (Khoa Học) dùng trong ngữ cảnh khoa học tự nhiên chung. 化学 là Hóa học (cũng đọc là かがく hoặc ばけがく).",
      "sentenceVi": "Anh ấy đang nghiên cứu khoa học.",
      "sentenceReading": "かれはかがくのけんきゅうをしています。"
    },
    {
      "id": "vocab-orthography-houritsu",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "大学でほうりつを勉強します。",
      "target": "ほうりつ",
      "answer": "法律",
      "distractors": [
        "法率",
        "宝律",
        "法理"
      ],
      "correctWord": "法律",
      "correctReading": "ほうりつ",
      "meaning": "pháp luật",
      "explanationVi": "法律 (Pháp Luật) là cách viết đúng.",
      "sentenceVi": "Tôi học luật ở trường đại học.",
      "sentenceReading": "だいがくでほうりつをべんきょうします。"
    },
    {
      "id": "vocab-orthography-rekishi",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "日本のれきしに興味がある。",
      "target": "れきし",
      "answer": "歴史",
      "distractors": [
        "歴糸",
        "理史",
        "歴詩"
      ],
      "correctWord": "歴史",
      "correctReading": "れきし",
      "meaning": "lịch sử",
      "explanationVi": "歴史 (Lịch Sử) là cách viết đúng.",
      "sentenceVi": "Tôi có hứng thú với lịch sử Nhật Bản.",
      "sentenceReading": "にほんのれきしにきょうみがある。"
    },
    {
      "id": "vocab-orthography-shumi",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "私のしゅみは読書です。",
      "target": "しゅみ",
      "answer": "趣味",
      "distractors": [
        "手味",
        "趣見",
        "守味"
      ],
      "correctWord": "趣味",
      "correctReading": "しゅみ",
      "meaning": "sở thích",
      "explanationVi": "趣味 (Thú Vị) là cách viết đúng.",
      "sentenceVi": "Sở thích của tôi là đọc sách.",
      "sentenceReading": "わたしのしゅみはどくしょです。"
    },
    {
      "id": "vocab-orthography-josei",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "じょせいの客が多い店です。",
      "target": "じょせい",
      "answer": "女性",
      "distractors": [
        "女星",
        "女声",
        "女晴"
      ],
      "correctWord": "女性",
      "correctReading": "じょせい",
      "meaning": "phụ nữ, nữ giới",
      "explanationVi": "女性 (Nữ Tính) là cách viết đúng.",
      "sentenceVi": "Cửa hàng này có nhiều khách hàng là nữ giới.",
      "sentenceReading": "じょせいのきゃくがおおいみせです。"
    },
    {
      "id": "vocab-orthography-dansei",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "あの人は有名なだんせい歌手です。",
      "target": "だんせい",
      "answer": "男性",
      "distractors": [
        "男星",
        "男声",
        "男正"
      ],
      "correctWord": "男性",
      "correctReading": "だんせい",
      "meaning": "đàn ông, nam giới",
      "explanationVi": "男性 (Nam Tính) là cách viết đúng.",
      "sentenceVi": "Người đó là một nam ca sĩ nổi tiếng.",
      "sentenceReading": "あのひとはゆうめいなだんせいかしゅです。"
    },
    {
      "id": "vocab-orthography-keisatsu",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "道でお金を拾って、けいさつに届けた。",
      "target": "けいさつ",
      "answer": "警察",
      "distractors": [
        "計察",
        "警札",
        "系察"
      ],
      "correctWord": "警察",
      "correctReading": "けいさつ",
      "meaning": "cảnh sát",
      "explanationVi": "警察 (Cảnh Sát) là cách viết đúng.",
      "sentenceVi": "Tôi nhặt được tiền trên đường và đã nộp cho cảnh sát.",
      "sentenceReading": "みちでおかねをひろって、けいさつにとどけた。"
    },
    {
      "id": "vocab-orthography-isha",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "病気になったら、いしゃに行きます。",
      "target": "いしゃ",
      "answer": "医者",
      "distractors": [
        "医社",
        "意者",
        "異者"
      ],
      "correctWord": "医者",
      "correctReading": "いしゃ",
      "meaning": "bác sĩ",
      "explanationVi": "医者 (Y Giả) là cách viết đúng.",
      "sentenceVi": "Nếu bị bệnh, tôi sẽ đi gặp bác sĩ.",
      "sentenceReading": "びょうきになったら、いしゃにいきます。"
    },
    {
      "id": "vocab-orthography-jugyou",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "もうすぐじゅぎょうが始まります。",
      "target": "じゅぎょう",
      "answer": "授業",
      "distractors": [
        "受業",
        "授形",
        "受形"
      ],
      "correctWord": "授業",
      "correctReading": "じゅぎょう",
      "meaning": "tiết học",
      "explanationVi": "授業 (Thụ Nghiệp) là cách viết đúng. 受 mang nghĩa nhận, 授 mang nghĩa truyền trao.",
      "sentenceVi": "Giờ học sắp bắt đầu rồi.",
      "sentenceReading": "もうすぐじゅぎょうがはじまります。"
    },
    {
      "id": "vocab-orthography-sotsugyou",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "来年、大学をそつぎょうします。",
      "target": "そつぎょう",
      "answer": "卒業",
      "distractors": [
        "卒行",
        "出業",
        "卒形"
      ],
      "correctWord": "卒業",
      "correctReading": "そつぎょう",
      "meaning": "tốt nghiệp",
      "explanationVi": "卒業 (Tốt Nghiệp) là cách viết đúng.",
      "sentenceVi": "Sang năm tôi sẽ tốt nghiệp đại học.",
      "sentenceReading": "らいねん、だいがくをそつぎょうします。"
    },
    {
      "id": "vocab-orthography-kazoku",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "かぞくで旅行に行きます。",
      "target": "かぞく",
      "answer": "家族",
      "distractors": [
        "家束",
        "家続",
        "家属"
      ],
      "correctWord": "家族",
      "correctReading": "かぞく",
      "meaning": "gia đình",
      "explanationVi": "家族 (Gia Tộc) là cách viết đúng.",
      "sentenceVi": "Tôi đi du lịch cùng gia đình.",
      "sentenceReading": "かぞくでりょこうにいきます。"
    },
    {
      "id": "vocab-context-maniau",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "急げば、九時の電車に＿＿＿と思います。",
      "target": "＿＿＿",
      "answer": "間に合う",
      "distractors": [
        "間違える",
        "間に入る",
        "合格する"
      ],
      "correctWord": "間に合う",
      "correctReading": "まにあう",
      "meaning": "kịp giờ",
      "explanationVi": "Đi với 電車に và điều kiện 急げば, đáp án tự nhiên là 間に合う: kịp chuyến tàu lúc 9 giờ.",
      "sentenceVi": "Tôi nghĩ nếu vội thì sẽ kịp chuyến tàu lúc 9 giờ.",
      "sentenceReading": "いそげば、くじのでんしゃに＿＿＿とおもいます。"
    },
    {
      "id": "vocab-context-odoroku",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "大きな音がしたので、とても＿＿＿。",
      "target": "＿＿＿",
      "answer": "びっくりしました",
      "distractors": [
        "がっかりしました",
        "安心しました",
        "楽しみました"
      ],
      "correctWord": "びっくりしました",
      "correctReading": "びっくりしました",
      "meaning": "giật mình, ngạc nhiên",
      "explanationVi": "大きな音がした (có tiếng động lớn) thì phản ứng tự nhiên là びっくりしました (giật mình).",
      "sentenceVi": "Vì có tiếng động lớn nên tôi đã rất giật mình.",
      "sentenceReading": "おおきなおとがしたので、とても＿＿＿。"
    },
    {
      "id": "vocab-context-shikkari",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "明日はテストですから、＿＿＿勉強してください。",
      "target": "＿＿＿",
      "answer": "しっかり",
      "distractors": [
        "すっかり",
        "うっかり",
        "がっかり"
      ],
      "correctWord": "しっかり",
      "correctReading": "しっかり",
      "meaning": "chắc chắn, cẩn thận, chăm chỉ",
      "explanationVi": "しっかり勉強する nghĩa là học hành chăm chỉ, cẩn thận. すっかり là hoàn toàn, うっかり là lơ đễnh.",
      "sentenceVi": "Vì mai thi rồi nên hãy học hành chăm chỉ nhé.",
      "sentenceReading": "あしたはてすとですから、＿＿＿べんきょうしてください。"
    },
    {
      "id": "vocab-context-sukkari",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "春になって、雪は＿＿＿とけました。",
      "target": "＿＿＿",
      "answer": "すっかり",
      "distractors": [
        "しっかり",
        "なかなか",
        "どんどん"
      ],
      "correctWord": "すっかり",
      "correctReading": "すっかり",
      "meaning": "hoàn toàn",
      "explanationVi": "すっかりとける nghĩa là tan hoàn toàn.",
      "sentenceVi": "Khi mùa xuân đến, tuyết đã tan hoàn toàn.",
      "sentenceReading": "はるになって、ゆきは＿＿＿とけました。"
    },
    {
      "id": "vocab-context-dondon",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "日本語を＿＿＿話して、上手になりましょう。",
      "target": "＿＿＿",
      "answer": "どんどん",
      "distractors": [
        "だんだん",
        "そろそろ",
        "とうとう"
      ],
      "correctWord": "どんどん",
      "correctReading": "どんどん",
      "meaning": "liên tục, dồn dập",
      "explanationVi": "どんどん話す mang nghĩa nói nhiều, nói liên tục để giỏi lên.",
      "sentenceVi": "Hãy tích cực nói tiếng Nhật để nhanh giỏi lên nhé.",
      "sentenceReading": "にほんごを＿＿＿はなして、じょうずになりましょう。"
    },
    {
      "id": "vocab-context-zehi",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "日本へ来るときは、＿＿＿私に連絡してください。",
      "target": "＿＿＿",
      "answer": "ぜひ",
      "distractors": [
        "たぶん",
        "きっと",
        "もし"
      ],
      "correctWord": "ぜひ",
      "correctReading": "ぜひ",
      "meaning": "nhất định",
      "explanationVi": "ぜひ đi với ください hoặc たい để thể hiện mong muốn mãnh liệt (nhất định hãy...).",
      "sentenceVi": "Khi nào đến Nhật Bản, nhất định phải liên lạc với tôi nhé.",
      "sentenceReading": "にほんへくるときは、＿＿＿わたしにれんらくしてください。"
    },
    {
      "id": "vocab-context-tashika",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "あの人の名前は、＿＿＿田中さんだったと思います。",
      "target": "＿＿＿",
      "answer": "たしか",
      "distractors": [
        "たぶん",
        "きゅうに",
        "ちょうど"
      ],
      "correctWord": "たしか",
      "correctReading": "たしか",
      "meaning": "chắc là, hình như là",
      "explanationVi": "たしか~と思います dùng khi nhớ mang máng một điều gì đó trong quá khứ.",
      "sentenceVi": "Tôi nghĩ tên người đó chắc chắn là Tanaka.",
      "sentenceReading": "あのひとのなまえは、＿＿＿たなかさんだったとおもいます。"
    },
    {
      "id": "vocab-context-nigiyaka",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "祭りの日は、町がとても＿＿＿になります。",
      "target": "＿＿＿",
      "answer": "にぎやか",
      "distractors": [
        "しずか",
        "まじめ",
        "ひま"
      ],
      "correctWord": "にぎやか",
      "correctReading": "にぎやか",
      "meaning": "náo nhiệt",
      "explanationVi": "Ngày lễ hội (祭り) thì thị trấn sẽ trở nên náo nhiệt (にぎやか).",
      "sentenceVi": "Vào ngày lễ hội, thị trấn trở nên rất náo nhiệt.",
      "sentenceReading": "まつりのひは、まちがとても＿＿＿になります。"
    },
    {
      "id": "vocab-context-majime",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "彼はとても＿＿＿な学生で、毎日休まずに学校へ来ます。",
      "target": "＿＿＿",
      "answer": "まじめ",
      "distractors": [
        "ふまじめ",
        "じゆう",
        "じょうぶ"
      ],
      "correctWord": "まじめ",
      "correctReading": "まじめ",
      "meaning": "chăm chỉ, nghiêm túc",
      "explanationVi": "Đi học mỗi ngày không nghỉ thể hiện tính cách chăm chỉ, nghiêm túc (まじめ).",
      "sentenceVi": "Cậu ấy là một học sinh rất chăm chỉ, ngày nào cũng đến trường không nghỉ học.",
      "sentenceReading": "かれはとても＿＿＿ながくせいで、まいにちやすまずにがっこうへきます。"
    },
    {
      "id": "vocab-context-jiyuu",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "この部屋のパソコンは、＿＿＿に使ってもいいですよ。",
      "target": "＿＿＿",
      "answer": "自由に",
      "distractors": [
        "無理に",
        "特別に",
        "大切に"
      ],
      "correctWord": "自由",
      "correctReading": "じゆう",
      "meaning": "tự do",
      "explanationVi": "自由に使う mang nghĩa sử dụng tự do, thoải mái.",
      "sentenceVi": "Máy tính trong phòng này bạn có thể tự do sử dụng.",
      "sentenceReading": "このへやのぱそこんは、じゆうにつかってもいいですよ。"
    },
    {
      "id": "vocab-context-shibaraku",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "山田さん、＿＿＿ですね。お元気ですか。",
      "target": "＿＿＿",
      "answer": "しばらく",
      "distractors": [
        "いつも",
        "はじめて",
        "ちっとも"
      ],
      "correctWord": "しばらく",
      "correctReading": "しばらく",
      "meaning": "lâu rồi, một khoảng thời gian",
      "explanationVi": "しばらくですね (Đã lâu không gặp) là câu chào quen thuộc.",
      "sentenceVi": "Anh Yamada, lâu rồi không gặp. Anh khỏe không?",
      "sentenceReading": "やまださん、＿＿＿ですね。おげんきですか。"
    },
    {
      "id": "vocab-context-okage",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "先生の＿＿＿で、N4に合格することができました。",
      "target": "＿＿＿",
      "answer": "おかげ",
      "distractors": [
        "せい",
        "かわり",
        "ため"
      ],
      "correctWord": "おかげ",
      "correctReading": "おかげ",
      "meaning": "nhờ có",
      "explanationVi": "Đạt kết quả tốt (đậu N4) thì dùng おかげで (nhờ có). せいで dùng cho kết quả xấu.",
      "sentenceVi": "Nhờ có thầy/cô giáo mà tôi đã đỗ N4.",
      "sentenceReading": "せんせいのおかげで、N4にごうかくすることができました。"
    },
    {
      "id": "vocab-context-tochuu",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "学校へ行く＿＿＿で、雨が降ってきました。",
      "target": "＿＿＿",
      "answer": "途中",
      "distractors": [
        "間",
        "うち",
        "あと"
      ],
      "correctWord": "途中",
      "correctReading": "とちゅう",
      "meaning": "giữa chừng, trên đường",
      "explanationVi": "行く途中で: trên đường đi.",
      "sentenceVi": "Trên đường đến trường thì trời đổ mưa.",
      "sentenceReading": "がっこうへいくとちゅうで、あめがふってきました。"
    },
    {
      "id": "vocab-context-oiwai",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "友達の結婚の＿＿＿に、時計を買いました。",
      "target": "＿＿＿",
      "answer": "お祝い",
      "distractors": [
        "お見舞い",
        "お祭り",
        "お礼"
      ],
      "correctWord": "お祝い",
      "correctReading": "おいわい",
      "meaning": "chúc mừng, quà mừng",
      "explanationVi": "結婚のお祝い: quà mừng kết hôn. お見舞い là thăm bệnh.",
      "sentenceVi": "Tôi đã mua một chiếc đồng hồ để chúc mừng đám cưới của bạn.",
      "sentenceReading": "ともだちのけっこのおいわいに、とけいをかいました。"
    },
    {
      "id": "vocab-context-shippai_2",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "料理に塩を入れすぎて、＿＿＿しました。",
      "target": "＿＿＿",
      "answer": "失敗",
      "distractors": [
        "成功",
        "紹介",
        "出発"
      ],
      "correctWord": "失敗",
      "correctReading": "しっぱい",
      "meaning": "thất bại, hỏng",
      "explanationVi": "Cho quá nhiều muối (塩を入れすぎて) thì món ăn sẽ hỏng (失敗しました).",
      "sentenceVi": "Tôi bỏ quá nhiều muối vào món ăn nên đã thất bại.",
      "sentenceReading": "りょうりにしおをいれすぎて、しっぱいしました。"
    },
    {
      "id": "vocab-context-otosu",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "電車の中に財布を＿＿＿しまいました。",
      "target": "＿＿＿",
      "answer": "落として",
      "distractors": [
        "倒して",
        "壊して",
        "消して"
      ],
      "correctWord": "落とす",
      "correctReading": "おとす",
      "meaning": "làm rơi",
      "explanationVi": "財布を落とす: làm rơi ví.",
      "sentenceVi": "Tôi vô tình đánh rơi ví trên tàu điện.",
      "sentenceReading": "でんしゃのなかにさいふを＿＿＿しまいました。"
    },
    {
      "id": "vocab-context-naosu",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "壊れた時計を店で＿＿＿もらいました。",
      "target": "＿＿＿",
      "answer": "直して",
      "distractors": [
        "治して",
        "変えて",
        "作って"
      ],
      "correctWord": "直す",
      "correctReading": "なおす",
      "meaning": "sửa chữa",
      "explanationVi": "Sửa đồ vật dùng 直す. 治す dùng cho chữa bệnh.",
      "sentenceVi": "Tôi đã nhờ cửa hàng sửa lại chiếc đồng hồ bị hỏng.",
      "sentenceReading": "こわれたとけいをみせで＿＿＿もらいました。"
    },
    {
      "id": "vocab-context-kazaru",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "壁にきれいな花が＿＿＿あります。",
      "target": "＿＿＿",
      "answer": "飾って",
      "distractors": [
        "貼って",
        "置いて",
        "並んで"
      ],
      "correctWord": "飾る",
      "correctReading": "かざる",
      "meaning": "trang trí",
      "explanationVi": "Hoa được trang trí (trưng bày) trên tường thì dùng 飾ってあります.",
      "sentenceVi": "Trên tường có trang trí những bông hoa đẹp.",
      "sentenceReading": "かべにきれいなはなが＿＿＿あります。"
    },
    {
      "id": "vocab-context-sagasu",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "なくした鍵を＿＿＿いますが、まだ見つかりません。",
      "target": "＿＿＿",
      "answer": "探して",
      "distractors": [
        "調べて",
        "集めて",
        "見物して"
      ],
      "correctWord": "探す",
      "correctReading": "さがす",
      "meaning": "tìm kiếm",
      "explanationVi": "なくした鍵 (chìa khóa đã mất) thì phải 探す (tìm kiếm).",
      "sentenceVi": "Tôi đang tìm chiếc chìa khóa bị mất nhưng vẫn chưa thấy.",
      "sentenceReading": "なくしたかぎを＿＿＿いますが、まだみつかりません。"
    },
    {
      "id": "vocab-context-hiyou",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "大学に入るために、たくさんの＿＿＿がかかります。",
      "target": "＿＿＿",
      "answer": "費用",
      "distractors": [
        "給料",
        "お釣り",
        "家賃"
      ],
      "correctWord": "費用",
      "correctReading": "ひよう",
      "meaning": "chi phí",
      "explanationVi": "費用 (chi phí) đi với động từ かかる (tốn). 給料 là lương, 家賃 là tiền thuê nhà.",
      "sentenceVi": "Để vào đại học tốn rất nhiều chi phí.",
      "sentenceReading": "だいがくにはいるために、たくさんの＿＿＿がかかります。"
    },
    {
      "id": "vocab-paraphrase-moushikomi",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "旅行の申し込みは今日までです。",
      "target": "申し込み",
      "answer": "参加したいと伝えること",
      "distractors": [
        "お金を返すこと",
        "場所を変えること",
        "時間を調べること"
      ],
      "correctWord": "申し込み",
      "correctReading": "もうしこみ",
      "meaning": "đăng ký",
      "explanationVi": "申し込み là việc đăng ký/thông báo muốn tham gia. Đây là dạng 言い換え類義 trong JLPT.",
      "sentenceVi": "Hạn đăng ký du lịch là đến hôm nay.",
      "sentenceReading": "りょこうの＿＿＿はきょうまでです。"
    },
    {
      "id": "vocab-paraphrase-chanto",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "宿題はちゃんと出してください。",
      "target": "ちゃんと",
      "answer": "きちんと",
      "distractors": [
        "すぐに",
        "たぶん",
        "少しも"
      ],
      "correctWord": "ちゃんと",
      "correctReading": "ちゃんと",
      "meaning": "đàng hoàng, cẩn thận",
      "explanationVi": "ちゃんと gần nghĩa với きちんと: làm cho đúng/cẩn thận/đầy đủ.",
      "sentenceVi": "Hãy nộp bài tập về nhà đầy đủ.",
      "sentenceReading": "しゅくだいは＿＿＿だしてください。"
    },
    {
      "id": "vocab-paraphrase-daijoubu",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "この席に座っても大丈夫ですか。",
      "target": "大丈夫",
      "answer": "問題ありません",
      "distractors": [
        "危ないです",
        "必要です",
        "残念です"
      ],
      "correctWord": "大丈夫",
      "correctReading": "だいじょうぶ",
      "meaning": "ổn, không sao, được phép",
      "explanationVi": "Trong câu xin phép, 大丈夫ですか gần nghĩa với 問題ありませんか / いいですか.",
      "sentenceVi": "Tôi ngồi vào chỗ này có được không?",
      "sentenceReading": "このせきにすわっても＿＿＿ですか。"
    },
    {
      "id": "vocab-paraphrase-tashikameru",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "テストを出す前に、もう一度確かめてください。",
      "target": "確かめて",
      "answer": "チェックして",
      "distractors": [
        "直して",
        "考えて",
        "読んで"
      ],
      "correctWord": "確かめる",
      "correctReading": "たしかめる",
      "meaning": "kiểm tra, xác nhận",
      "explanationVi": "確かめる (xác nhận lại) đồng nghĩa với チェックする (check/kiểm tra).",
      "sentenceVi": "Trước khi nộp bài thi, hãy kiểm tra lại một lần nữa.",
      "sentenceReading": "てすとをだすまえに、もういちど＿＿＿ください。"
    },
    {
      "id": "vocab-paraphrase-mezurashii",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "これは珍しい鳥です。",
      "target": "珍しい",
      "answer": "あまりない",
      "distractors": [
        "とても大きい",
        "色がきれいな",
        "有名な"
      ],
      "correctWord": "珍しい",
      "correctReading": "めずらしい",
      "meaning": "hiếm, ít thấy",
      "explanationVi": "珍しい (hiếm) có nghĩa là あまりない (không có nhiều, ít thấy).",
      "sentenceVi": "Đây là một loài chim hiếm thấy.",
      "sentenceReading": "これは＿＿＿とりです。"
    },
    {
      "id": "vocab-paraphrase-oshaberi",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "授業中に友達とおしゃべりしてはいけません。",
      "target": "おしゃべりして",
      "answer": "話して",
      "distractors": [
        "遊んで",
        "食べて",
        "寝て"
      ],
      "correctWord": "おしゃべりする",
      "correctReading": "おしゃべりする",
      "meaning": "nói chuyện, tán gẫu",
      "explanationVi": "おしゃべりする đồng nghĩa với 話す (nói chuyện).",
      "sentenceVi": "Không được nói chuyện tán gẫu với bạn bè trong giờ học.",
      "sentenceReading": "じゅぎょうちゅうにともだちと＿＿＿してはいけません。"
    },
    {
      "id": "vocab-paraphrase-tamani",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "休みの日はたまに映画を見に行きます。",
      "target": "たまに",
      "answer": "時々",
      "distractors": [
        "いつも",
        "ぜんぜん",
        "必ず"
      ],
      "correctWord": "たまに",
      "correctReading": "たまに",
      "meaning": "thỉnh thoảng",
      "explanationVi": "たまに (đôi khi, thỉnh thoảng) gần nghĩa nhất với 時々 (thỉnh thoảng).",
      "sentenceVi": "Vào ngày nghỉ thỉnh thoảng tôi đi xem phim.",
      "sentenceReading": "やすみのひはたまにえいがをみにいきます。"
    },
    {
      "id": "vocab-paraphrase-hijouni",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "今年の夏はずいぶん暑い。",
      "target": "ずいぶん",
      "answer": "とても",
      "distractors": [
        "だいたい",
        "少し",
        "急に"
      ],
      "correctWord": "ずいぶん",
      "correctReading": "ずいぶん",
      "meaning": "khá là, rất",
      "explanationVi": "ずいぶん (khá là, rất) đồng nghĩa với とても (rất) trong ngữ cảnh này.",
      "sentenceVi": "Mùa hè năm nay khá là nóng.",
      "sentenceReading": "ことしのなつはずいぶんあつい。"
    },
    {
      "id": "vocab-paraphrase-shiraseru",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "パーティーの時間を皆に知らせました。",
      "target": "知らせました",
      "answer": "教えました",
      "distractors": [
        "聞きました",
        "約束しました",
        "頼みました"
      ],
      "correctWord": "知らせる",
      "correctReading": "しらせる",
      "meaning": "thông báo, cho biết",
      "explanationVi": "知らせる (thông báo) trong ngữ cảnh này đồng nghĩa với 教える (chỉ, nói cho biết).",
      "sentenceVi": "Tôi đã thông báo thời gian bữa tiệc cho mọi người.",
      "sentenceReading": "ぱーてぃーのじかんをみなに＿＿＿。"
    },
    {
      "id": "vocab-paraphrase-kitsui",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "彼の話は少しおかしいです。",
      "target": "おかしい",
      "answer": "変な",
      "distractors": [
        "面白い",
        "簡単な",
        "正しい"
      ],
      "correctWord": "おかしい",
      "correctReading": "おかしい",
      "meaning": "lạ, kỳ lạ, buồn cười",
      "explanationVi": "おかしい (lạ, kỳ lạ, buồn cười) đồng nghĩa với 変（na） (lạ, kỳ quặc).",
      "sentenceVi": "Câu chuyện của anh ấy hơi kỳ lạ.",
      "sentenceReading": "かれのはなしはすこしおかしいです。"
    },
    {
      "id": "vocab-paraphrase-shouganai",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "友達にメッセージを伝えてください。",
      "target": "伝えて",
      "answer": "言って",
      "distractors": [
        "聞いて",
        "呼んで",
        "書いて"
      ],
      "correctWord": "伝える",
      "correctReading": "つたえる",
      "meaning": "truyền đạt, nhắn lại",
      "explanationVi": "伝える (truyền đạt, nhắn lại) có nghĩa gần nhất với 言う (nói, nhắn lại) trong ngữ cảnh nhắn tin nhắn.",
      "sentenceVi": "Xin hãy nhắn lại tin nhắn cho bạn bè.",
      "sentenceReading": "ともだちにめっせーじをつたえてください。"
    },
    {
      "id": "vocab-paraphrase-oshimai",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "宿題はほとんど終わりました。",
      "target": "ほとんど",
      "answer": "だいたい",
      "distractors": [
        "全然",
        "少し",
        "急に"
      ],
      "correctWord": "ほとんど",
      "correctReading": "ほとんど",
      "meaning": "hầu hết, hầu như",
      "explanationVi": "ほとんど (hầu hết, hầu như) đồng nghĩa với だいたい (đại khái, khoảng) trong ngữ cảnh này.",
      "sentenceVi": "Bài tập về nhà hầu như đã làm xong.",
      "sentenceReading": "しゅくだいはほとんどおわりました。"
    },
    {
      "id": "vocab-paraphrase-tsumaranai",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "この映画はつまらなかった。",
      "target": "つまらなかった",
      "answer": "面白くなかった",
      "distractors": [
        "短かった",
        "長かった",
        "きれいだった"
      ],
      "correctWord": "つまらない",
      "correctReading": "つまらない",
      "meaning": "nhàm chán",
      "explanationVi": "つまらない (chán) đồng nghĩa với 面白くない (không thú vị).",
      "sentenceVi": "Bộ phim này thật tẻ nhạt/không hay.",
      "sentenceReading": "このえいがは＿＿＿。"
    },
    {
      "id": "vocab-paraphrase-ayamaru",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "山田さんは田中さんに謝りました。",
      "target": "謝りました",
      "answer": "「ごめんなさい」と言いました",
      "distractors": [
        "「ありがとう」と言いました",
        "「さようなら」と言いました",
        "「こんにちは」と言いました"
      ],
      "correctWord": "謝る",
      "correctReading": "あやまる",
      "meaning": "xin lỗi",
      "explanationVi": "謝る (xin lỗi) nghĩa là nói 「ごめんなさい」.",
      "sentenceVi": "Anh Yamada đã xin lỗi anh Tanaka.",
      "sentenceReading": "やまださんはたなかさんに＿＿＿。"
    },
    {
      "id": "vocab-paraphrase-yakunitatsu",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "この辞書はとても役に立ちます。",
      "target": "役に立ちます",
      "answer": "便利です",
      "distractors": [
        "高いです",
        "安いです",
        "重いです"
      ],
      "correctWord": "役に立つ",
      "correctReading": "やくにたつ",
      "meaning": "có ích, hữu ích",
      "explanationVi": "役に立つ (có ích) thường gần nghĩa với 便利 (tiện lợi) trong các câu hỏi đồng nghĩa JLPT.",
      "sentenceVi": "Cuốn từ điển này rất hữu ích.",
      "sentenceReading": "このじしょはとても＿＿＿。"
    },
    {
      "id": "vocab-paraphrase-okoru",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "母に怒られました。",
      "target": "怒られました",
      "answer": "しかられました",
      "distractors": [
        "褒められました",
        "笑われました",
        "泣かれました"
      ],
      "correctWord": "怒る",
      "correctReading": "おこる",
      "meaning": "nổi giận, mắng",
      "explanationVi": "Trong văn cảnh bị mẹ mắng, 怒られる (bị giận) gần nghĩa nhất với しかられる (bị la mắng).",
      "sentenceVi": "Tôi bị mẹ mắng.",
      "sentenceReading": "ははに＿＿＿。"
    },
    {
      "id": "vocab-paraphrase-nigeru",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "泥棒はすぐに逃げました。",
      "target": "逃げました",
      "answer": "走って離れました",
      "distractors": [
        "隠れました",
        "座りました",
        "泣きました"
      ],
      "correctWord": "逃げる",
      "correctReading": "にげる",
      "meaning": "chạy trốn",
      "explanationVi": "逃げる (chạy trốn) nghĩa là bỏ chạy ra xa (走って離れる).",
      "sentenceVi": "Kẻ trộm đã lập tức bỏ chạy.",
      "sentenceReading": "どろぼうはすぐに＿＿＿。"
    },
    {
      "id": "vocab-paraphrase-wazawa",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "わざわざ来てくれて、ありがとうございます。",
      "target": "わざわざ",
      "answer": "特別に",
      "distractors": [
        "急に",
        "たまたま",
        "ついでに"
      ],
      "correctWord": "わざわざ",
      "correctReading": "わざわざ",
      "meaning": "cất công, đặc biệt",
      "explanationVi": "わざわざ mang ý nghĩa cất công làm một việc gì đó đặc biệt vì ai đó.",
      "sentenceVi": "Cảm ơn bạn đã cất công đến đây.",
      "sentenceReading": "わざわざきてくれて、ありがとうございます。"
    },
    {
      "id": "vocab-paraphrase-yasashii",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "この問題はやさしいです。",
      "target": "やさしい",
      "answer": "簡単だ",
      "distractors": [
        "難しい",
        "複雑だ",
        "大切だ"
      ],
      "correctWord": "易しい",
      "correctReading": "やさしい",
      "meaning": "dễ dàng",
      "explanationVi": "易しい (dễ) đồng nghĩa với 簡単 (đơn giản, dễ).",
      "sentenceVi": "Câu hỏi này rất dễ.",
      "sentenceReading": "このもんだいは＿＿＿です。"
    },
    {
      "id": "vocab-paraphrase-saki",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "さっき、田中さんに会いました。",
      "target": "さっき",
      "answer": "少し前に",
      "distractors": [
        "今",
        "後で",
        "明日"
      ],
      "correctWord": "さっき",
      "correctReading": "さっき",
      "meaning": "vừa nãy",
      "explanationVi": "さっき (vừa nãy) có nghĩa là 少し前 (một chút trước đây).",
      "sentenceVi": "Vừa nãy tôi mới gặp anh Tanaka.",
      "sentenceReading": "さっき、たなかさんにあいました。"
    },
    {
      "id": "vocab-usage-yoyaku",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：予約",
      "target": "予約",
      "answer": "ホテルの部屋を予約しました。",
      "distractors": [
        "ホテルの部屋に予約しました。",
        "ホテルの部屋を予約がありました。",
        "ホテルの部屋で予約をしました人です。"
      ],
      "correctWord": "予約",
      "correctReading": "よやく",
      "meaning": "đặt trước, đặt chỗ",
      "explanationVi": "予約する dùng với khách sạn, vé, nhà hàng... Câu tự nhiên là 「ホテルの部屋を予約しました。」",
      "sentenceVi": "Tôi đã đặt phòng khách sạn.",
      "sentenceReading": "ほてるのへやをよやくしました。"
    },
    {
      "id": "vocab-usage-soudan",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：相談",
      "target": "相談",
      "answer": "困ったとき、先生に相談します。",
      "distractors": [
        "困ったとき、先生を相談します。",
        "困ったとき、先生で相談します。",
        "困ったとき、先生が相談にします。"
      ],
      "correctWord": "相談",
      "correctReading": "そうだん",
      "meaning": "trao đổi, xin tư vấn",
      "explanationVi": "相談する thường đi với người nghe bằng に: 「先生に相談します。」",
      "sentenceVi": "Khi gặp khó khăn, tôi sẽ tham khảo ý kiến giáo viên.",
      "sentenceReading": "こまったとき、せんせいにそうだんします。"
    },
    {
      "id": "vocab-usage-junbi_2",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：準備",
      "target": "準備",
      "answer": "旅行の準備をしています。",
      "distractors": [
        "旅行の準備にしています。",
        "旅行が準備をしています。",
        "旅行の準備でしています。"
      ],
      "correctWord": "準備",
      "correctReading": "じゅんび",
      "meaning": "chuẩn bị",
      "explanationVi": "準備する / 準備をする nghĩa là chuẩn bị. 「旅行の準備をしています」 là cách dùng tự nhiên.",
      "sentenceVi": "Tôi đang chuẩn bị cho chuyến đi du lịch.",
      "sentenceReading": "りょこうのじゅんびをしています。"
    },
    {
      "id": "vocab-usage-enryo",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：遠慮",
      "target": "遠慮",
      "answer": "遠慮しないで、もっと食べてください。",
      "distractors": [
        "遠慮して、もっと食べてください。",
        "遠慮しないで、学校を休みました。",
        "遠慮して、宿題を忘れました。"
      ],
      "correctWord": "遠慮",
      "correctReading": "えんりょ",
      "meaning": "ngại ngùng, khách sáo",
      "explanationVi": "遠慮しないで (đừng ngại ngùng/khách sáo) thường dùng khi mời mọc.",
      "sentenceVi": "Đừng ngại ngần, hãy ăn nhiều hơn nữa nhé.",
      "sentenceReading": "えんりょしないで、もっとたべてください。"
    },
    {
      "id": "vocab-usage-annai",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：案内",
      "target": "案内",
      "answer": "私が町を案内します。",
      "distractors": [
        "私が町に案内します。",
        "私が町で案内をします。",
        "私が町が案内します。"
      ],
      "correctWord": "案内",
      "correctReading": "あんない",
      "meaning": "hướng dẫn",
      "explanationVi": "案内する đi với trợ từ を (hướng dẫn tham quan một địa điểm).",
      "sentenceVi": "Tôi sẽ hướng dẫn bạn đi quanh thị trấn.",
      "sentenceReading": "わたしがまちをあんないします。"
    },
    {
      "id": "vocab-usage-renraku",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：連絡",
      "target": "連絡",
      "answer": "着いたら、すぐに連絡してください。",
      "distractors": [
        "着いたら、すぐに連絡になってください。",
        "着いたら、すぐに連絡を作ってください。",
        "着いたら、すぐに連絡を言ってください。"
      ],
      "correctWord": "連絡",
      "correctReading": "れんらく",
      "meaning": "liên lạc",
      "explanationVi": "連絡する là một nhóm 3 (V-suru) phổ biến. Dùng 連絡してください.",
      "sentenceVi": "Khi nào đến nơi, hãy liên lạc ngay với tôi nhé.",
      "sentenceReading": "ついたら、すぐにれんらくしてください。"
    },
    {
      "id": "vocab-usage-keiken_2",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：経験",
      "target": "経験",
      "answer": "私には教える経験があります。",
      "distractors": [
        "私には教える経験がします。",
        "私には教える経験に行きます。",
        "私には教える経験を出します。"
      ],
      "correctWord": "経験",
      "correctReading": "けいけん",
      "meaning": "kinh nghiệm",
      "explanationVi": "経験があります (có kinh nghiệm) là cách nói cố định.",
      "sentenceVi": "Tôi có kinh nghiệm giảng dạy.",
      "sentenceReading": "わたしにはおしえるけいけんがあります。"
    },
    {
      "id": "vocab-usage-sewa",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：世話",
      "target": "世話",
      "answer": "毎日、犬の世話をしています。",
      "distractors": [
        "毎日、犬を世話をしています。",
        "毎日、犬に世話をしています。",
        "毎日、犬と世話をしています。"
      ],
      "correctWord": "世話",
      "correctReading": "せわ",
      "meaning": "chăm sóc",
      "explanationVi": "世話をする là cụm từ cố định (chăm sóc ai/cái gì thì dùng ~の世話をする).",
      "sentenceVi": "Hàng ngày tôi đều chăm sóc chú chó.",
      "sentenceReading": "まいにち、いぬのせわをしています。"
    },
    {
      "id": "vocab-usage-hantai",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：反対",
      "target": "反対",
      "answer": "父は私の留学に反対しました。",
      "distractors": [
        "父は私の留学を反対しました。",
        "父は私の留学で反対しました。",
        "父は私の留学へ反対しました。"
      ],
      "correctWord": "反対",
      "correctReading": "はんたい",
      "meaning": "phản đối",
      "explanationVi": "反対する đi với trợ từ に (phản đối điều gì đó).",
      "sentenceVi": "Bố tôi đã phản đối việc tôi đi du học.",
      "sentenceReading": "ちちはわたしのりゅうがくにはんたいしました。"
    },
    {
      "id": "vocab-usage-sansei",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：賛成",
      "target": "賛成",
      "answer": "みんなその意見に賛成しました。",
      "distractors": [
        "みんなその意見を賛成しました。",
        "みんなその意見で賛成しました。",
        "みんなその意見へ賛成しました。"
      ],
      "correctWord": "賛成",
      "correctReading": "さんせい",
      "meaning": "tán thành",
      "explanationVi": "賛成する đi với trợ từ に (tán thành ý kiến/việc gì đó).",
      "sentenceVi": "Mọi người đều tán thành ý kiến đó.",
      "sentenceReading": "みんなそのいけんにさんせいしました。"
    },
    {
      "id": "vocab-usage-chuui",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：注意",
      "target": "注意",
      "answer": "車に注意して道を渡りましょう。",
      "distractors": [
        "車を注意して道を渡りましょう。",
        "車で注意して道を渡りましょう。",
        "車へ注意して道を渡りましょう。"
      ],
      "correctWord": "注意",
      "correctReading": "ちゅうい",
      "meaning": "chú ý",
      "explanationVi": "注意する (chú ý vào đâu/điều gì) dùng với trợ từ に.",
      "sentenceVi": "Hãy chú ý xe cộ khi sang đường.",
      "sentenceReading": "くるまにちゅういしてみちをわたりましょう。"
    },
    {
      "id": "vocab-usage-yakusoku_2",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：約束",
      "target": "約束",
      "answer": "友達と映画に行く約束をしました。",
      "distractors": [
        "友達と映画に行く約束があります。",
        "友達と映画に行く約束にしました。",
        "友達と映画に行く約束を与えました。"
      ],
      "correctWord": "約束",
      "correctReading": "やくそく",
      "meaning": "lời hứa, cuộc hẹn",
      "explanationVi": "約束をする (hứa/hẹn làm gì). 約束があります cũng đúng nhưng 約束をしました là động từ tự nhiên nhất khi vừa thiết lập cuộc hẹn.",
      "sentenceVi": "Tôi đã hứa đi xem phim cùng bạn bè.",
      "sentenceReading": "ともだちとえいがにいくやくそくをしました。"
    },
    {
      "id": "vocab-usage-shippai_3",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúngと tự nhiên nhất.",
      "sentence": "言葉：失敗",
      "target": "失敗",
      "answer": "テストで失敗してしまいました。",
      "distractors": [
        "テストを失敗してしまいました。",
        "テストに失敗してしまいました。",
        "テストへ失敗してしまいました。"
      ],
      "correctWord": "失敗",
      "correctReading": "しっぱい",
      "meaning": "thất bại",
      "explanationVi": "～で失敗する: thất bại trong việc gì (như trong bài thi).",
      "sentenceVi": "Tôi đã làm bài thi không tốt mất rồi.",
      "sentenceReading": "てすとでしっぱいしてしまいました。"
    },
    {
      "id": "vocab-usage-riyuu",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：理由",
      "target": "理由",
      "answer": "学校を休んだ理由を教えてください。",
      "distractors": [
        "学校を休んだ理由を言ってください。",
        "学校を休んだ理由を作りてください。",
        "学校を休んだ理由をしてください。"
      ],
      "correctWord": "理由",
      "correctReading": "りゆう",
      "meaning": "lý do",
      "explanationVi": "理由を教える (nói cho biết lý do) là cách ghép từ tự nhiên nhất.",
      "sentenceVi": "Hãy cho tôi biết lý do bạn nghỉ học.",
      "sentenceReading": "がっこうをやすんだりゆうをおしえてください。"
    },
    {
      "id": "vocab-usage-kyoumi",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：興味",
      "target": "興味",
      "answer": "日本の歴史に興味があります。",
      "distractors": [
        "日本の歴史を興味があります。",
        "日本の歴史で興味があります。",
        "日本の歴史へ興味があります。"
      ],
      "correctWord": "興味",
      "correctReading": "きょうみ",
      "meaning": "hứng thú, quan quan tâm",
      "explanationVi": "～に興味がある (có hứng thú với...). Trợ từ に là bắt buộc.",
      "sentenceVi": "Tôi có hứng thú với lịch sử Nhật Bản.",
      "sentenceReading": "にほんのれきしにきょうみがあります。"
    },
    {
      "id": "vocab-usage-kaigi",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：会議",
      "target": "会議",
      "answer": "今から会議が始まります。",
      "distractors": [
        "今から会議が開きます。",
        "今から会議を作ります。",
        "今から会議に出ます。"
      ],
      "correctWord": "会議",
      "correctReading": "かいぎ",
      "meaning": "hội nghị, cuộc họp",
      "explanationVi": "会議が始まる (cuộc họp bắt đầu) hoặc 会議をする (tổ chức họp).",
      "sentenceVi": "Cuộc họp sắp bắt đầu từ bây giờ.",
      "sentenceReading": "いまからかいぎがはじまります。"
    },
    {
      "id": "vocab-usage-keshiki",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：景色",
      "target": "景色",
      "answer": "山の頂上からの景色は素晴らしい。",
      "distractors": [
        "山の頂上からの景色は美味しい。",
        "山の頂上からの景色は親切だ。",
        "山の頂上からの景色は上手だ。"
      ],
      "correctWord": "景色",
      "correctReading": "けしき",
      "meaning": "phong cảnh",
      "explanationVi": "景色 (phong cảnh) thường đi với tính từ như きれい, 素晴らしい (tuyệt vời).",
      "sentenceVi": "Phong cảnh từ trên đỉnh núi thật tuyệt vời.",
      "sentenceReading": "やまのちょうじょうからのけしきはすばらしい。"
    },
    {
      "id": "vocab-usage-kyouiku_2",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：教育",
      "target": "教育",
      "answer": "子供の教育はお金がかかる。",
      "distractors": [
        "子供の教育はお金が使う。",
        "子供の教育はお金が要る。",
        "子供の教育はお金が買う。"
      ],
      "correctWord": "教育",
      "correctReading": "きょういく",
      "meaning": "giáo dục",
      "explanationVi": "教育 (giáo dục) thường đi với cụm từ お金がかかる (tốn tiền).",
      "sentenceVi": "Việc giáo dục con cái rất tốn kém.",
      "sentenceReading": "こどものきょういくはおかねがかかる。"
    },
    {
      "id": "vocab-usage-houritsu",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：法律",
      "target": "法律",
      "answer": "大学で法律を勉強しています。",
      "distractors": [
        "大学で法律を習っています。",
        "大学で法律を作っています。",
        "大学で法律をしています。"
      ],
      "correctWord": "法律",
      "correctReading": "ほうりつ",
      "meaning": "pháp luật",
      "explanationVi": "法律 (pháp luật) đi với động từ 勉強する (học) rất phổ biến trong đề JLPT.",
      "sentenceVi": "Tôi đang học luật tại trường đại học.",
      "sentenceReading": "だいがくでほうりつをべんきょうしています。"
    },
    {
      "id": "vocab-usage-dougu",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：道具",
      "target": "道具",
      "answer": "この道具はとても便利です。",
      "distractors": [
        "この道具はとても元気です。",
        "この道具はとても上手です。",
        "この道具はとても静かです。"
      ],
      "correctWord": "道具",
      "correctReading": "どうぐ",
      "meaning": "dụng cụ",
      "explanationVi": "道具 (dụng cụ) thường đi với tính từ miêu tả tính năng như 便利 (tiện lợi).",
      "sentenceVi": "Dụng cụ này rất tiện lợi.",
      "sentenceReading": "このどうぐはとてもべんりです。"
    },
    {
      "id": "vocab-reading-koutsuu",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "この町は交通が便利です。",
      "target": "交通",
      "answer": "こうつう",
      "distractors": [
        "こつ",
        "こうづう",
        "ごうつう"
      ],
      "correctWord": "交通",
      "correctReading": "こうつう",
      "meaning": "giao thông",
      "explanationVi": "交通 (Giao Thông) đọc là こうつう.",
      "sentenceVi": "Thị trấn này giao thông đi lại thuận tiện.",
      "sentenceReading": "このまちはこうつうがべんりです。"
    },
    {
      "id": "vocab-reading-ryokan",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "古い旅館に泊まりました。",
      "target": "旅館",
      "answer": "りょかん",
      "distractors": [
        "りょがん",
        "りよかん",
        "ろかん"
      ],
      "correctWord": "旅館",
      "correctReading": "りょかん",
      "meaning": "nhà trọ kiểu Nhật",
      "explanationVi": "旅館 (Lữ Quán) đọc là りょかん.",
      "sentenceVi": "Tôi đã trọ lại một quán trọ kiểu Nhật (ryokan) cổ kính.",
      "sentenceReading": "ふるいりょかんにとまりました。"
    },
    {
      "id": "vocab-reading-omiyage",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "家族にお土産を買いました。",
      "target": "お土産",
      "answer": "おみやげ",
      "distractors": [
        "おみあげ",
        "おどさん",
        "おさん"
      ],
      "correctWord": "お土産",
      "correctReading": "おみやげ",
      "meaning": "quà lưu niệm",
      "explanationVi": "お土産 (Thổ Sản) đọc là おみやげ.",
      "sentenceVi": "Tôi đã mua quà lưu niệm cho gia đình.",
      "sentenceReading": "かぞくにおみやげをかいました。"
    },
    {
      "id": "vocab-reading-shusseki",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "明日の会議に出席します。",
      "target": "出席",
      "answer": "しゅっせき",
      "distractors": [
        "しゅせき",
        "しゅうせき",
        "じゅっせき"
      ],
      "correctWord": "出席",
      "correctReading": "しゅっせき",
      "meaning": "có mặt, tham dự",
      "explanationVi": "出席 (Xuất Tịch) đọc là しゅっせき, chú ý âm ngắt (っ).",
      "sentenceVi": "Tôi sẽ tham dự cuộc họp vào ngày mai.",
      "sentenceReading": "あしたのかいぎにしゅっせきします。"
    },
    {
      "id": "vocab-reading-kesseki",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "風邪で学校を欠席しました。",
      "target": "欠席",
      "answer": "けっせき",
      "distractors": [
        "けせき",
        "けいせき",
        "けっせきい"
      ],
      "correctWord": "欠席",
      "correctReading": "けっせき",
      "meaning": "vắng mặt",
      "explanationVi": "欠席 (Khuyết Tịch) đọc là けっせき.",
      "sentenceVi": "Tôi đã nghỉ học vì bị cảm cúm.",
      "sentenceReading": "かぜでがっこうをけっせきしました。"
    },
    {
      "id": "vocab-reading-yotei",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "休みの予定はまだ決まっていません。",
      "target": "予定",
      "answer": "よてい",
      "distractors": [
        "よでい",
        "ようてい",
        "よて"
      ],
      "correctWord": "予定",
      "correctReading": "よてい",
      "meaning": "dự định, kế hoạch",
      "explanationVi": "予定 (Dự Định) đọc là よてい.",
      "sentenceVi": "Dự định cho ngày nghỉ của tôi vẫn chưa được quyết định.",
      "sentenceReading": "やすみのよていはまだきまっていません。"
    },
    {
      "id": "vocab-reading-taifuu",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "強い台風が来ています。",
      "target": "台風",
      "answer": "たいふう",
      "distractors": [
        "だいふう",
        "たいふ",
        "たいぷう"
      ],
      "correctWord": "台風",
      "correctReading": "たいふう",
      "meaning": "bão",
      "explanationVi": "台風 (Đài Phong) đọc là たいふう.",
      "sentenceVi": "Một cơn bão mạnh đang đổ bộ.",
      "sentenceReading": "つよいたいふうがきています。"
    },
    {
      "id": "vocab-reading-nimotsu",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "荷物が多いからタクシーで行こう。",
      "target": "荷物",
      "answer": "にもつ",
      "distractors": [
        "かもつ",
        "にもつう",
        "にもの"
      ],
      "correctWord": "荷物",
      "correctReading": "にもつ",
      "meaning": "hành lý",
      "explanationVi": "荷物 (Hà Vật) đọc là にもつ.",
      "sentenceVi": "Vì hành lý nhiều nên chúng ta đi bằng taxi đi.",
      "sentenceReading": "にもつがおおいからたくしーでいこう。"
    },
    {
      "id": "vocab-reading-shiai",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "明日はサッカーの試合があります。",
      "target": "試合",
      "answer": "しあい",
      "distractors": [
        "しあ",
        "じあい",
        "しやい"
      ],
      "correctWord": "試合",
      "correctReading": "しあい",
      "meaning": "trận đấu",
      "explanationVi": "試合 (Thí Hợp) đọc là しあい.",
      "sentenceVi": "Ngày mai sẽ có trận đấu bóng đá.",
      "sentenceReading": "あしたはさっかーのしあいがあります。"
    },
    {
      "id": "vocab-reading-keizai",
      "examType": "kanji-reading",
      "stem": "下線の言葉はどう読みますか。",
      "instructionVi": "Chọn cách đọc đúng của từ được gạch dưới.",
      "sentence": "大学で経済を勉強します。",
      "target": "経済",
      "answer": "けいざい",
      "distractors": [
        "けざい",
        "けいさい",
        "けいざ"
      ],
      "correctWord": "経済",
      "correctReading": "けいざい",
      "meaning": "kinh tế",
      "explanationVi": "経済 (Kinh Tế) đọc là けいざい.",
      "sentenceVi": "Tôi học kinh tế ở trường đại học.",
      "sentenceReading": "だいがくでけいざいをべんきょうします。"
    },
    {
      "id": "vocab-orthography-iken",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "みんなのいけんを聞きましょう。",
      "target": "いけん",
      "answer": "意見",
      "distractors": [
        "意建",
        "胃見",
        "異見"
      ],
      "correctWord": "意見",
      "correctReading": "いけん",
      "meaning": "ý kiến",
      "explanationVi": "意見 (Ý Kiến) là cách viết đúng.",
      "sentenceVi": "Chúng ta hãy lắng nghe ý kiến của mọi người.",
      "sentenceReading": "みんなのいけんをききましょう。"
    },
    {
      "id": "vocab-orthography-keikaku",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "旅行のけいかくを立てる。",
      "target": "けいかく",
      "answer": "計画",
      "distractors": [
        "計格",
        "形画",
        "系画"
      ],
      "correctWord": "計画",
      "correctReading": "けいかく",
      "meaning": "kế hoạch",
      "explanationVi": "計画 (Kế Hoạch) là cách viết đúng.",
      "sentenceVi": "Lập kế hoạch cho chuyến đi du lịch.",
      "sentenceReading": "りょこうのけいかくをたてる。"
    },
    {
      "id": "vocab-orthography-shuppatsu",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "明日の朝、しゅっぱつします。",
      "target": "しゅっぱつ",
      "answer": "出発",
      "distractors": [
        "出初",
        "出髪",
        "出張"
      ],
      "correctWord": "出発",
      "correctReading": "しゅっぱつ",
      "meaning": "xuất phát",
      "explanationVi": "出発 (Xuất Phát) là cách viết đúng.",
      "sentenceVi": "Sáng mai tôi sẽ khởi hành.",
      "sentenceReading": "あしたのあさ、しゅっぱつします。"
    },
    {
      "id": "vocab-orthography-touchaku",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "飛行機がとうちゃくしました。",
      "target": "とうちゃく",
      "answer": "到着",
      "distractors": [
        "倒着",
        "闘着",
        "当着"
      ],
      "correctWord": "到着",
      "correctReading": "とうちゃく",
      "meaning": "đến nơi",
      "explanationVi": "到着 (Đáo Trước) là cách viết đúng.",
      "sentenceVi": "Máy máy đã hạ cánh/đến nơi.",
      "sentenceReading": "ひこうきがとうちゃくしました。"
    },
    {
      "id": "vocab-orthography-shuukan",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "日本とベトナムのしゅうかんは違います。",
      "target": "しゅうかん",
      "answer": "習慣",
      "distractors": [
        "集観",
        "修関",
        "秋間"
      ],
      "correctWord": "習慣",
      "correctReading": "しゅうかん",
      "meaning": "tập quán, thói quen",
      "explanationVi": "習慣 (Tập Quán) là cách viết đúng.",
      "sentenceVi": "Phong tục tập quán của Nhật Bản và Việt Nam khác nhau.",
      "sentenceReading": "にほんとべとなむのしゅうかんはちがいます。"
    },
    {
      "id": "vocab-orthography-kisoku",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "学校のきそくを守ってください。",
      "target": "きそく",
      "answer": "規則",
      "distractors": [
        "気則",
        "記則",
        "期側"
      ],
      "correctWord": "規則",
      "correctReading": "きそく",
      "meaning": "quy tắc",
      "explanationVi": "規則 (Quy Tắc) là cách viết đúng.",
      "sentenceVi": "Hãy tuân thủ nội quy trường học.",
      "sentenceReading": "がっこうのきそくをまもってください。"
    },
    {
      "id": "vocab-orthography-muri",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "そんなむりなことは言わないで。",
      "target": "むり",
      "answer": "無理",
      "distractors": [
        "無利",
        "無里",
        "無理由"
      ],
      "correctWord": "無理",
      "correctReading": "むり",
      "meaning": "vô lý, quá sức",
      "explanationVi": "無理 (Vô Lý) là cách viết đúng.",
      "sentenceVi": "Đừng nói những điều vô lý như vậy.",
      "sentenceReading": "そんなむりなことはいわないで。"
    },
    {
      "id": "vocab-orthography-anzen",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "あんぜんに運転してください。",
      "target": "あんぜん",
      "answer": "安全",
      "distractors": [
        "安善",
        "安前",
        "暗全"
      ],
      "correctWord": "安全",
      "correctReading": "あんぜん",
      "meaning": "an toàn",
      "explanationVi": "安全 (An Toàn) là cách viết đúng.",
      "sentenceVi": "Hãy lái xe an toàn.",
      "sentenceReading": "あんぜんにうんてんしてください。"
    },
    {
      "id": "vocab-orthography-shinsetsu",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "あの人はとてもしんせつです。",
      "target": "しんせつ",
      "answer": "親切",
      "distractors": [
        "深切",
        "新切",
        "親接"
      ],
      "correctWord": "親切",
      "correctReading": "しんせつ",
      "meaning": "tốt bụng, thân thiện",
      "explanationVi": "親切 (Thân Thiết) là cách viết đúng.",
      "sentenceVi": "Người đó rất tốt bụng/thân thiện.",
      "sentenceReading": "あのひとはとてもしんせつです。"
    },
    {
      "id": "vocab-orthography-teinei",
      "examType": "orthography",
      "stem": "ひらがなで書かれた言葉は、漢字でどう書きますか。",
      "instructionVi": "Chọn cách viết kanji đúng cho từ hiragana trong câu.",
      "sentence": "ていねいに書いてください。",
      "target": "ていねい",
      "answer": "丁寧",
      "distractors": [
        "底寧",
        "丁年",
        "停寧"
      ],
      "correctWord": "丁寧",
      "correctReading": "ていねい",
      "meaning": "lịch sự, cẩn thận",
      "explanationVi": "丁寧 (Đinh Ninh) là cách viết đúng.",
      "sentenceVi": "Xin vui lòng viết nắn nót/cẩn thận.",
      "sentenceReading": "ていねいにかいてください。"
    },
    {
      "id": "vocab-context-sorosoro",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "もう夜の１０時ですね。＿＿＿帰りましょう。",
      "target": "＿＿＿",
      "answer": "そろそろ",
      "distractors": [
        "だんだん",
        "まだまだ",
        "もっと"
      ],
      "correctWord": "そろそろ",
      "correctReading": "そろそろ",
      "meaning": "chuẩn bị, sắp sửa",
      "explanationVi": "Khi trời đã muộn và muốn ra về, dùng そろそろ (đến lúc, sắp sửa).",
      "sentenceVi": "Đã 10 giờ đêm rồi nhỉ. Chuẩn bị ra về thôi.",
      "sentenceReading": "もうよるのじゅうじですね。そろそろかえりましょう。"
    },
    {
      "id": "vocab-context-daibu",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "病気は＿＿＿よくなりました。",
      "target": "＿＿＿",
      "answer": "だいぶ",
      "distractors": [
        "ずっと",
        "やっと",
        "ぜんぜん"
      ],
      "correctWord": "だいぶ",
      "correctReading": "だいぶ",
      "meaning": "khá nhiều, phần lớn",
      "explanationVi": "だいぶよくなる nghĩa là (bệnh) đã khá hơn rất nhiều.",
      "sentenceVi": "Căn bệnh đã thuyên giảm phần lớn rồi.",
      "sentenceReading": "びょうきはだいぶよくなりました。"
    },
    {
      "id": "vocab-context-taitei",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "日曜日は＿＿＿家にいます。",
      "target": "＿＿＿",
      "answer": "たいてい",
      "distractors": [
        "なかなか",
        "決して",
        "ちっとも"
      ],
      "correctWord": "たいてい",
      "correctReading": "たいてい",
      "meaning": "đại để, thường thì",
      "explanationVi": "たいてい (thường thì) chỉ thói quen phổ biến. Các từ kia thường đi với phủ định.",
      "sentenceVi": "Chủ nhật tôi thường ở nhà.",
      "sentenceReading": "にちようびはたいていいえにいます。"
    },
    {
      "id": "vocab-context-toutou",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "３時間待って、＿＿＿友達が来ました。",
      "target": "＿＿＿",
      "answer": "とうとう",
      "distractors": [
        "どんどん",
        "だんだん",
        "ぜひ"
      ],
      "correctWord": "とうとう",
      "correctReading": "とうとう",
      "meaning": "cuối cùng thì",
      "explanationVi": "Sau một thời gian dài chờ đợi, kết quả xảy ra dùng とうとう (cuối cùng thì).",
      "sentenceVi": "Sau khi chờ 3 tiếng, cuối cùng người bạn cũng đã đến.",
      "sentenceReading": "さんじかんまって、とうとうともだちがきました。"
    },
    {
      "id": "vocab-context-narubeku",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "明日は＿＿＿早く来てください。",
      "target": "＿＿＿",
      "answer": "なるべく",
      "distractors": [
        "なるほど",
        "なるか",
        "なると"
      ],
      "correctWord": "なるべく",
      "correctReading": "なるべく",
      "meaning": "cố gắng, càng...càng tốt",
      "explanationVi": "なるべく早く: cố gắng (hãy đến) càng sớm càng tốt.",
      "sentenceVi": "Ngày mai hãy cố gắng đến sớm nhất có thể nhé.",
      "sentenceReading": "あしたはなるべくはやくきてください。"
    },
    {
      "id": "vocab-context-hajimete",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "日本へ来たのは、これが＿＿＿です。",
      "target": "＿＿＿",
      "answer": "はじめて",
      "distractors": [
        "はじめ",
        "はじめに",
        "はじまり"
      ],
      "correctWord": "はじめて",
      "correctReading": "はじめて",
      "meaning": "lần đầu tiên",
      "explanationVi": "これがはじめてです: Đây là lần đầu tiên.",
      "sentenceVi": "Đây là lần đầu tiên tôi đến Nhật Bản.",
      "sentenceReading": "にほんへきたのは、これがはじめてです。"
    },
    {
      "id": "vocab-context-mukashi",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "この町は、＿＿＿とても静かでした。",
      "target": "＿＿＿",
      "answer": "むかし",
      "distractors": [
        "さっき",
        "いま",
        "これから"
      ],
      "correctWord": "昔",
      "correctReading": "むかし",
      "meaning": "ngày xưa",
      "explanationVi": "Câu kết thúc ở dạng quá khứ (~静かでした), nên chọn 昔 (ngày xưa).",
      "sentenceVi": "Thị trấn này ngày xưa rất yên bình.",
      "sentenceReading": "このまちは、むかしとてもしずかでした。"
    },
    {
      "id": "vocab-context-mochiron",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "A「パーティーに行きますか。」B「はい、＿＿＿行きますよ。」",
      "target": "＿＿＿",
      "answer": "もちろん",
      "distractors": [
        "ちょうど",
        "たいてい",
        "たぶん"
      ],
      "correctWord": "もちろん",
      "correctReading": "もちろん",
      "meaning": "tất nhiên",
      "explanationVi": "Trả lời khẳng định mạnh mẽ sự đồng tình: Tất nhiên là đi rồi (もちろん).",
      "sentenceVi": "A: 'Bạn có đi dự tiệc không?' B: 'Vâng, tất nhiên là có đi chứ.'",
      "sentenceReading": "A「ぱーてぃーにいきますか。」B「はい、もちろんいきますよ。」"
    },
    {
      "id": "vocab-context-yatto",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "道が混んでいましたが、＿＿＿着きました。",
      "target": "＿＿＿",
      "answer": "やっと",
      "distractors": [
        "ずっと",
        "きっと",
        "もっと"
      ],
      "correctWord": "やっと",
      "correctReading": "やっと",
      "meaning": "cuối cùng thì (cũng đạt được)",
      "explanationVi": "Trải qua khó khăn (kẹt xe), cuối cùng cũng đến nơi dùng やっと.",
      "sentenceVi": "Đường sá bị tắc nghẽn nhưng cuối cùng tôi cũng đã đến nơi.",
      "sentenceReading": "みちがこんでいましたが、やっとつきました。"
    },
    {
      "id": "vocab-context-yahari",
      "examType": "context-expression",
      "stem": "文の意味に合う言葉を選んでください。",
      "instructionVi": "Chọn từ phù hợp nhất với ngữ cảnh câu.",
      "sentence": "山田さんは＿＿＿来ませんでした。",
      "target": "＿＿＿",
      "answer": "やはり",
      "distractors": [
        "しっかり",
        "すっかり",
        "はっきり"
      ],
      "correctWord": "やはり",
      "correctReading": "やはり",
      "meaning": "quả nhiên, đúng như dự đoán",
      "explanationVi": "Đúng như dự đoán/lo lắng từ trước (quả nhiên không đến), dùng やはり.",
      "sentenceVi": "Anh Yamada quả nhiên đã không đến.",
      "sentenceReading": "やまださんはやはりきませんでした。"
    },
    {
      "id": "vocab-paraphrase-shitaku",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "出かける支度をします。",
      "target": "支度",
      "answer": "準備",
      "distractors": [
        "片付け",
        "約束",
        "世話"
      ],
      "correctWord": "支度",
      "correctReading": "したく",
      "meaning": "chuẩn bị",
      "explanationVi": "支度 (chuẩn bị) đồng nghĩa với 準備.",
      "sentenceVi": "Tôi chuẩn bị để đi ra ngoài.",
      "sentenceReading": "でかけるしたくをします。"
    },
    {
      "id": "vocab-paraphrase-kutabireru",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "この料理はまずいです。",
      "target": "まずい",
      "answer": "おいしくない",
      "distractors": [
        "辛い",
        "甘い",
        "冷たい"
      ],
      "correctWord": "まずい",
      "correctReading": "まずい",
      "meaning": "dở, không ngon",
      "explanationVi": "まずい (dở, không ngon) đồng nghĩa với おいしくない (không ngon).",
      "sentenceVi": "Món ăn này dở tệ.",
      "sentenceReading": "このりょうりはまずいです。"
    },
    {
      "id": "vocab-paraphrase-shibashiba",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "休みの日はたまに映画を見ます。",
      "target": "たまに",
      "answer": "時々",
      "distractors": [
        "いつも",
        "全然",
        "絶対に"
      ],
      "correctWord": "たまに",
      "correctReading": "たまに",
      "meaning": "thỉnh thoảng, đôi khi",
      "explanationVi": "たまに (thỉnh thoảng, đôi khi - tần suất ít) có nghĩa gần nhất với 時々 (thỉnh thoảng) trong các lựa chọn.",
      "sentenceVi": "Vào ngày nghỉ, thỉnh thoảng tôi đi xem phim.",
      "sentenceReading": "やすみのひはたまにえいがをみます。"
    },
    {
      "id": "vocab-paraphrase-suguni",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "すぐに電車が来ますよ。",
      "target": "すぐに",
      "answer": "もうすぐ",
      "distractors": [
        "さっき",
        "あとで",
        "いつも"
      ],
      "correctWord": "すぐに",
      "correctReading": "すぐに",
      "meaning": "sắp, ngay lập tức",
      "explanationVi": "すぐに (sắp tới, ngay lập tức) trong ngữ cảnh này bằng nghĩa với もうすぐ.",
      "sentenceVi": "Tàu điện sắp đến ngay đây thôi.",
      "sentenceReading": "すぐにてんしゃがきますよ。"
    },
    {
      "id": "vocab-paraphrase-sokkuri",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "部屋を片付けてください。",
      "target": "片付けて",
      "answer": "きれいにして",
      "distractors": [
        "汚して",
        "広くして",
        "静かにして"
      ],
      "correctWord": "片付ける",
      "correctReading": "かたづける",
      "meaning": "dọn dẹp",
      "explanationVi": "片付ける (dọn dẹp, làm sạch) đồng nghĩa với きれいにする (làm sạch, làm đẹp) trong ngữ cảnh này.",
      "sentenceVi": "Xin hãy dọn dẹp phòng.",
      "sentenceReading": "へやをかたづけてください。"
    },
    {
      "id": "vocab-paraphrase-tamatama",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "体の具合が悪いです。",
      "target": "具合",
      "answer": "調子",
      "distractors": [
        "気分",
        "関係",
        "注意"
      ],
      "correctWord": "具合",
      "correctReading": "ぐあい",
      "meaning": "tình trạng cơ thể, sức khỏe",
      "explanationVi": "具合 (tình trạng sức khỏe) đồng nghĩa với 調子 (tình trạng, phong độ) khi nói về sức khỏe cơ thể.",
      "sentenceVi": "Tình trạng sức khỏe của tôi không tốt.",
      "sentenceReading": "からだのぐあいがわるいです。"
    },
    {
      "id": "vocab-paraphrase-chittomo",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "この映画はちっとも面白くない。",
      "target": "ちっとも",
      "answer": "ぜんぜん",
      "distractors": [
        "少し",
        "とても",
        "だいたい"
      ],
      "correctWord": "ちっとも",
      "correctReading": "ちっとも",
      "meaning": "một chút cũng không",
      "explanationVi": "ちっとも...ない đồng nghĩa với ぜんぜん...ない (hoàn toàn không).",
      "sentenceVi": "Bộ phim này chẳng thú vị chút nào.",
      "sentenceReading": "このえいがはちっともおもしろくない。"
    },
    {
      "id": "vocab-paraphrase-nakunaru",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "財布がなくなりました。",
      "target": "なくなりました",
      "answer": "消えました",
      "distractors": [
        "壊れました",
        "落ちました",
        "破れました"
      ],
      "correctWord": "なくなる",
      "correctReading": "なくなる",
      "meaning": "mất",
      "explanationVi": "Trong trường hợp đồ vật bị mất (なくなる), nó tương tự với 消える (biến mất).",
      "sentenceVi": "Ví tiền của tôi đã mất/biến mất.",
      "sentenceReading": "さいふがなくなりました。"
    },
    {
      "id": "vocab-paraphrase-hakkiri",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "もっとはっきり言ってください。",
      "target": "はっきり",
      "answer": "わかりやすく",
      "distractors": [
        "ゆっくり",
        "早く",
        "静かに"
      ],
      "correctWord": "はっきり",
      "correctReading": "はっきり",
      "meaning": "rõ ràng",
      "explanationVi": "はっきり言う (nói rõ ràng) có nghĩa là わかりやすく (một cách dễ hiểu).",
      "sentenceVi": "Xin vui lòng nói rõ ràng hơn.",
      "sentenceReading": "もっとはっきりいってください。"
    },
    {
      "id": "vocab-paraphrase-mazu",
      "examType": "paraphrase",
      "stem": "下線の言葉と意味が近いものを選んでください。",
      "instructionVi": "Chọn cách nói có nghĩa gần nhất với từ/cụm được gạch dưới.",
      "sentence": "まず、手を洗ってください。",
      "target": "まず",
      "answer": "最初に",
      "distractors": [
        "すぐに",
        "後で",
        "急いで"
      ],
      "correctWord": "まず",
      "correctReading": "まず",
      "meaning": "trước tiên",
      "explanationVi": "まず (trước tiên) đồng nghĩa với 最初に (đầu tiên).",
      "sentenceVi": "Trước tiên, xin vui lòng rửa tay.",
      "sentenceReading": "まず、てをあらってください。"
    },
    {
      "id": "vocab-usage-koshou",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：故障",
      "target": "故障",
      "answer": "パソコンが故障して、動かない。",
      "distractors": [
        "パソコンが故障にしている。",
        "パソコンが故障をやめた。",
        "パソコンが故障を取った。"
      ],
      "correctWord": "故障",
      "correctReading": "こしょう",
      "meaning": "hỏng hóc",
      "explanationVi": "故障する (bị hỏng) thường dùng cho máy móc.",
      "sentenceVi": "Máy tính bị hỏng nên không chạy.",
      "sentenceReading": "ぱそこんがこしょうして、うごかない。"
    },
    {
      "id": "vocab-usage-jama",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：邪魔",
      "target": "邪魔",
      "answer": "仕事の邪魔をしないでください。",
      "distractors": [
        "仕事の邪魔をしませんか。",
        "仕事の邪魔を忘れないでください。",
        "仕事の邪魔ができません。"
      ],
      "correctWord": "邪魔",
      "correctReading": "じゃま",
      "meaning": "làm phiền, cản trở",
      "explanationVi": "邪魔をする mang nghĩa làm phiền, cản trở người khác.",
      "sentenceVi": "Xin đừng làm phiền/cản trở công việc của tôi.",
      "sentenceReading": "しごとのじゃまをしないでください。"
    },
    {
      "id": "vocab-usage-shoukai",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：紹介",
      "target": "紹介",
      "answer": "友達にいい店を紹介してもらった。",
      "distractors": [
        "友達にいい店を紹介になった。",
        "友達にいい店を紹介を取った。",
        "友達にいい店を紹介にすぎない。"
      ],
      "correctWord": "紹介",
      "correctReading": "しょうかい",
      "meaning": "giới thiệu",
      "explanationVi": "紹介する / 紹介してもらう (được giới thiệu).",
      "sentenceVi": "Tôi được bạn bè giới thiệu cho một cửa hàng rất tốt.",
      "sentenceReading": "ともだちにいいみせをしょうかいしてもらった。"
    },
    {
      "id": "vocab-usage-yushutsu",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：輸出",
      "target": "輸出",
      "answer": "日本は車をたくさん輸出しています。",
      "distractors": [
        "日本は車をたくさん輸出になります。",
        "日本は車をたくさん輸出にあります。",
        "日本は車をたくさん輸出を開きます。"
      ],
      "correctWord": "輸出",
      "correctReading": "ゆしゅつ",
      "meaning": "xuất khẩu",
      "explanationVi": "輸出する (xuất khẩu).",
      "sentenceVi": "Nhật Bản xuất khẩu rất nhiều ô tô.",
      "sentenceReading": "にほんはくるまをたくさんゆしゅつしています。"
    },
    {
      "id": "vocab-usage-yunyuu",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：輸入",
      "target": "輸入",
      "answer": "この国は米を輸入しています。",
      "distractors": [
        "この国は米を輸入にしています。",
        "この国は米を輸入がしています。",
        "この国は米を輸入をやります。"
      ],
      "correctWord": "輸入",
      "correctReading": "ゆにゅう",
      "meaning": "nhập khẩu",
      "explanationVi": "輸入する (nhập khẩu).",
      "sentenceVi": "Quốc gia này nhập khẩu gạo.",
      "sentenceReading": "このくにはこめをゆにゅうしています。"
    },
    {
      "id": "vocab-usage-kyousou",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：習慣",
      "target": "習慣",
      "answer": "毎朝早く起きる習慣があります。",
      "distractors": [
        "私の日本語の習慣は上手です。",
        "新しい習慣を買いに行きます。",
        "明日、友達と習慣があります。"
      ],
      "correctWord": "習慣",
      "correctReading": "しゅうかん",
      "meaning": "thói quen, tập quán",
      "explanationVi": "習慣 (tập quán, thói quen). Câu đúng: 毎朝早く起きる習慣があります (Tôi có thói quen dậy sớm mỗi sáng). Các câu còn lại dùng sai ngữ cảnh.",
      "sentenceVi": "Tôi có thói quen dậy sớm mỗi sáng.",
      "sentenceReading": "まいあさはやくおきるしゅうかんがあります。"
    },
    {
      "id": "vocab-usage-housou",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：放送",
      "target": "放送",
      "answer": "テレビでニュースが放送されている。",
      "distractors": [
        "テレビでニュースを放送にある。",
        "テレビでニュースを放送に行く。",
        "テレビでニュースを放送になる。"
      ],
      "correctWord": "放送",
      "correctReading": "ほうそう",
      "meaning": "phát sóng",
      "explanationVi": "放送される (được phát sóng).",
      "sentenceVi": "Bản tin thời sự đang được phát sóng trên tivi.",
      "sentenceReading": "てれびでにゅーすがほうそうされている。"
    },
    {
      "id": "vocab-usage-hikkoshi",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：引っ越し",
      "target": "引っ越し",
      "answer": "来月、新しいアパートに引っ越しします。",
      "distractors": [
        "来月、新しいアパートを引っ越しします。",
        "来月、新しいアパートが引っ越しします。",
        "来月、新しいアパートで引っ越しします。"
      ],
      "correctWord": "引っ越し",
      "correctReading": "ひっこし",
      "meaning": "chuyển nhà",
      "explanationVi": "引っ越しする (chuyển nhà) đi với trợ từ に (địa điểm đến).",
      "sentenceVi": "Tháng sau tôi sẽ chuyển sang căn hộ mới.",
      "sentenceReading": "らいげつ、あたらしいあぱーとにひっこしします。"
    },
    {
      "id": "vocab-usage-kiin",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：原因",
      "target": "原因",
      "answer": "事故の原因を調べる。",
      "distractors": [
        "事故の原因を行く。",
        "事故の原因を使う。",
        "事故の原因を来る。"
      ],
      "correctWord": "原因",
      "correctReading": "げんいん",
      "meaning": "nguyên nhân",
      "explanationVi": "原因を調べる (điều tra nguyên nhân).",
      "sentenceVi": "Điều tra nguyên nhân tai nạn.",
      "sentenceReading": "じこのげんいんをしらべる。"
    },
    {
      "id": "vocab-usage-seisan",
      "examType": "usage",
      "stem": "次の言葉の使い方として最もよいものを選んでください。",
      "instructionVi": "Chọn câu dùng từ đã cho đúng và tự nhiên nhất.",
      "sentence": "言葉：生産",
      "target": "生産",
      "answer": "この工場では自動車を生産しています。",
      "distractors": [
        "この工場では自動車が生産にしています。",
        "この工場では自動車を生産にあります。",
        "この工場では自動車を生産に行きます。"
      ],
      "correctWord": "生産",
      "correctReading": "せいさん",
      "meaning": "sản xuất",
      "explanationVi": "生産する (sản xuất).",
      "sentenceVi": "Nhà máy này sản xuất ô tô.",
      "sentenceReading": "このこうじょうではじどうしゃをせいさんしています。"
    }
  ]
);
const EXPANDED_GRAMMAR_POOL = [
  {
    id: "grammar-form-tokoro-da-ikuyo",
    examType: "grammar-form",
    sentence: "今から出かける＿＿＿だから、ちょっと待って。",
    sentenceReading: "いまからでかける＿＿＿だから、ちょっとまって。",
    sentenceVi: "Bây giờ tôi chuẩn bị đi ra ngoài, nên đợi một chút nhé.",
    promptVi: "Chọn mẫu diễn tả hành động sắp sửa xảy ra.",
    answer: "ところ",
    answerReading: "ところ",
    distractors: ["ばかり", "はず", "ため"],
    grammarPoint: "ところda",
    grammarPoint: "ところだ",
    explanationVi: "「V-辞書形 + ところ」 diễn tả hành động sắp sửa bắt đầu thực hiện: chuẩn bị đi ra ngoài.",
    level: "N4"
  },
  {
    id: "grammar-form-bakari-tabeta",
    examType: "grammar-form",
    sentence: "さっきご飯を食べた＿＿＿なので、お腹がいっぱいです。",
    sentenceReading: "さっきごはんをたべた＿＿＿なので、おなかがいっぱいです。",
    sentenceVi: "Vì tôi vừa mới ăn cơm xong lúc nãy nên bụng vẫn no.",
    promptVi: 'Chọn cách nói "vừa mới làm xong" theo cảm quan của người nói.',
    answer: "ばかり",
    answerReading: "ばかり",
    distractors: ["ところ", "はず", "ため"],
    grammarPoint: "ばかり",
    explanationVi: "「Vた + ばかり」 diễn tả hành động vừa mới xảy ra theo cảm nhận chủ quan của người nói.",
    level: "N4"
  },
  {
    id: "grammar-form-rashii-ame",
    examType: "grammar-form",
    sentence: "外でみんな傘をさしていますね. 雨が降っている＿＿＿です。",
    sentenceReading: "そとでみんなかさをさしていますね。あめがふっている＿＿＿です。",
    sentenceVi: "Mọi người ngoài kia đều đang che ô nhỉ. Hình như trời đang mưa.",
    promptVi: "Chọn mẫu phỏng đoán dựa trên chứng cứ gián tiếp nhìn thấy.",
    answer: "らしい",
    answerReading: "らしい",
    distractors: ["そうだ", "みたい", "はず"],
    grammarPoint: "らしい",
    explanationVi: "「普通形 + らしい」 diễn tả phỏng đoán có căn cứ khách quan gián tiếp (nhìn thấy mọi người che ô suy ra trời mưa).",
    level: "N4"
  },
  {
    id: "grammar-form-sou-hearsay-kekkon",
    examType: "grammar-form",
    sentence: "木村さんは来月結婚する＿＿＿ですよ。",
    sentenceReading: "きむらさんはらいげつけっこんする＿＿＿ですよ。",
    sentenceVi: "Nghe nói tháng sau anh Kimura kết hôn đấy.",
    promptVi: "Chọn mẫu truyền đạt thông tin nghe nói lại.",
    answer: "そうだ",
    answerReading: "そうだ",
    distractors: ["らしい", "ようだ", "はずだ"],
    grammarPoint: "そうだ",
    explanationVi: "「普通形 + そうだ」 dùng để truyền đạt lại thông tin nghe được từ nguồn khác: Nghe nói tháng sau anh ấy cưới.",
    level: "N4"
  },
  {
    id: "grammar-form-sou-conjecture-oishii",
    examType: "grammar-form",
    sentence: "このケーキはとてもおいし＿＿＿ですね。",
    sentenceReading: "このけーきはとてもおいし＿＿＿ですね。",
    sentenceVi: "Chiếc bánh kem này trông có vẻ ngon nhỉ.",
    promptVi: 'Chọn mẫu biểu thị đánh giá cảm quan "trông có vẻ".',
    answer: "そう",
    answerReading: "そう",
    distractors: ["らしい", "ようだ", "みたい"],
    grammarPoint: "そうだ",
    explanationVi: "Tính từ い bỏ い + そうだ diễn tả phỏng đoán qua vẻ bề ngoài: trông ngon mắt.",
    level: "N4"
  },
  {
    id: "grammar-form-nakereba-naranai-shukudai",
    examType: "grammar-form",
    sentence: "明日までに宿題を出さ＿＿＿。",
    sentenceReading: "あしたまでにしゅくだいをださ＿＿＿。",
    sentenceVi: "Tôi phải nộp bài tập trước ngày mai.",
    promptVi: "Chọn mẫu thể hiện nghĩa vụ bắt buộc phải làm.",
    answer: "なければなりません",
    answerReading: "なければなりません",
    distractors: ["なくてもいいです", "ないでください", "たらいいです"],
    grammarPoint: "なければならない",
    explanationVi: "「V-ない + なければなりません」 diễn tả nghĩa vụ hoặc việc cần thiết phải làm.",
    level: "N4"
  },
  {
    id: "grammar-form-youni-suru-yasai",
    examType: "grammar-form",
    sentence: "健康のために、毎日野菜を食べる＿＿＿。",
    sentenceReading: "けんこうのために、まいにちやさいをたべる＿＿＿。",
    sentenceVi: "Để bảo vệ sức khỏe, tôi cố gắng ăn rau mỗi ngày.",
    promptVi: "Chọn mẫu thể hiện sự nỗ lực duy trì thói quen.",
    answer: "ようにしています",
    answerReading: "ようにしています",
    distractors: ["ことにしています", "ことにしました", "ようにしました"],
    grammarPoint: "ようにする",
    explanationVi: "「V-辞書形 + ようにする」 diễn tả sự cố gắng, nỗ lực thực hiện một hành động hoặc thói quen.",
    level: "N4"
  },
  {
    id: "grammar-composition-nagara-tv",
    examType: "sentence-composition",
    sentence: "テレビを ★ ご飯を食べます。",
    sentenceReading: "てれびを ★ ごはんをたべます。",
    sentenceVi: "Tôi vừa xem tivi vừa ăn cơm.",
    promptVi: "Sắp xếp các cụm từ. Từ/cụm nào rơi vào vị trí ★?",
    answer: "見ながら",
    answerReading: "みながら",
    distractors: ["見ます", "見てから", "見たら"],
    scrambledParts: ["ご飯u", "見ながら", "テレビを", "見たら"],
    scrambledParts: ["ご飯を", "見ながら", "テレビを", "見たら"],
    fullSentence: "テレビを見ながらご飯を食べます。",
    fullReading: "てれびをみながらごはんをたべます。",
    grammarPoint: "ながら",
    explanationVi: "Hành động xem TV xảy ra song song ăn cơm: テレビを見ながらご飯を食べます。",
    level: "N4"
  },
  {
    id: "grammar-composition-noni-kusuri",
    examType: "sentence-composition",
    sentence: "薬を ★ よくなりません。",
    sentenceReading: "くすりを ★ よくなりません。",
    sentenceVi: "Dù đã uống thuốc nhưng vẫn không khỏe lên.",
    promptVi: "Sắp xếp các cụm từ. Từ/cụm nào rơi vào vị trí ★?",
    answer: "飲んだのに",
    answerReading: "のんだのに",
    distractors: ["飲んだから", "飲むために", "飲んでから"],
    scrambledParts: ["よくありません", "飲んだのに", "薬を", "飲んだから"],
    fullSentence: "薬を飲んだのによくなりません。",
    fullReading: "くすりをのんだのによくなりません。",
    grammarPoint: "のに",
    explanationVi: "Diễn tả sự tương phản trái mong đợi: Dù đã uống thuốc (薬を飲んだのに) nhưng không đỡ.",
    level: "N4"
  },
  {
    id: "grammar-text-dakara-benkyo",
    examType: "text-grammar",
    sentence: "明日は大事な試験があります。＿＿＿、今夜は早く寝なければなりません。",
    sentenceReading: "あしたはだいじなしけんがあります。＿＿＿、こんやははやくねなければなりません。",
    sentenceVi: "Ngày mai có kỳ thi quan trọng. Vì thế, tối nay tôi phải ngủ sớm.",
    promptVi: "Chọn liên từ thích hợp chỉ kết quả hợp logic.",
    answer: "だから",
    answerReading: "だから",
    distractors: ["しかし", "でも", "けれども"],
    grammarPoint: "接続表現",
    explanationVi: "Câu sau là kết luận tất yếu của câu trước, nên dùng だから (vì thế/cho nên).",
    level: "N4"
  },
  {
    id: "grammar-text-shikashi-samui",
    examType: "text-grammar",
    sentence: "四月になりました。＿＿＿、まだ風が強くて寒いです。",
    sentenceReading: "しがつになりました。＿＿＿、まだかぜがつよくてさむいです。",
    sentenceVi: "Đã sang tháng Tư rồi. Tuy nhiên, gió vẫn thổi mạnh và trời còn lạnh.",
    promptVi: "Chọn liên từ thích hợp chỉ sự tương phản.",
    answer: "しかし",
    answerReading: "しかし",
    distractors: ["それで", "だから", "そして"],
    grammarPoint: "接続表現",
    explanationVi: "Sang tháng 4 trời nên ấm áp nhưng thực tế vẫn lạnh. Sự tương phản này diễn tả bằng しかし (tuy nhiên).",
    level: "N4"
  }
];
const EXPANDED_PARTICLE_POOL = [
  {
    id: "particle-exam-de-action-place",
    examType: "grammar-form",
    sentence: "駅の近くのカフェ___コーヒーを飲みました。",
    sentenceReading: "えきのchika no kafe___ko-hi-o nomimashita.",
    sentenceReading: "えきのちかくのかふぇ___こーひーをのみました。",
    sentenceVi: "Tôi đã uống cà phê ở một quán cà phê gần ga.",
    promptVi: "Chọn trợ từ xác định địa điểm diễn ra hành động.",
    answer: "で",
    answerReading: "で",
    distractors: ["に", "へ", "を"],
    grammar: "で dùng để biểu thị địa điểm xảy ra một hành động cụ thể.",
    explanationVi: "Uống cà phê là hành động chủ động nên địa điểm đi kèm với で.",
    level: "N4"
  },
  {
    id: "particle-exam-ni-destination-exist",
    examType: "grammar-form",
    sentence: "机の上___本が置いてあります。",
    sentenceReading: "つくえのうえ___ほんがおいてあります。",
    sentenceVi: "Trên bàn có đặt một cuốn sách.",
    promptVi: "Chọn trợ từ chỉ nơi tồn tại hoặc hướng đến của trạng thái kết quả.",
    answer: "に",
    answerReading: "に",
    distractors: ["で", "を", "が"],
    grammar: "に dùng để chỉ vị trí nơi một trạng thái/sự vật đang tồn tại.",
    explanationVi: "Sách đang nằm yên vị trên mặt bàn, thể hiện trạng thái tồn tại nên dùng に.",
    level: "N4"
  },
  {
    id: "particle-exam-he-direction",
    examType: "grammar-form",
    sentence: "来月、日本___留学に行く予定です。",
    sentenceReading: "らいげつ、にほん___りゅうがくにいくよていです。",
    sentenceVi: "Tháng sau tôi có kế hoạch đi Nhật du học.",
    promptVi: "Chọn trợ từ chỉ phương hướng di chuyển.",
    answer: "へ",
    answerReading: "へ",
    distractors: ["で", "を", "が"],
    grammar: "へ chỉ phương hướng di chuyển hướng tới một địa điểm.",
    explanationVi: "Đi đến Nhật Bản (日本へ行く), dùng へ chỉ phương hướng di chuyển.",
    level: "N4"
  },
  {
    id: "particle-exam-wo-pass-through",
    examType: "grammar-form",
    sentence: "天気がいいので、公園___散歩しましょう。",
    sentenceReading: "てんきがいいので、こうえん___さんぽしましょう。",
    sentenceVi: "Thời tiết đẹp nên chúng ta hãy đi dạo qua công viên nào.",
    promptVi: "Chọn trợ từ chỉ không gian di chuyển đi qua.",
    answer: "を",
    answerReading: "を",
    distractors: ["で", "に", "が"],
    grammar: "を dùng với động từ di chuyển để biểu thị không gian đi qua (phạm vi đi dạo).",
    explanationVi: "Đi dạo băng qua công viên dùng 公園を散歩する. Tránh nhầm lẫn với で.",
    level: "N4"
  },
  {
    id: "particle-exam-to-together-with",
    examType: "grammar-form",
    sentence: "明日, 恋人___映画を見に行きます。",
    sentenceReading: "あした, こいびと___えいがをみにいきます。",
    sentenceVi: "Ngày mai tôi sẽ đi xem phim cùng với người yêu.",
    promptVi: "Chọn trợ từ biểu thị đối tác cùng thực hiện hành động.",
    answer: "と",
    answerReading: "と",
    distractors: ["に", "を", "で"],
    grammar: "と dùng để biểu thị đối tác cùng làm việc gì đó.",
    explanationVi: "Đi xem phim cùng người yêu dùng 恋人と.",
    level: "N4"
  },
  {
    id: "particle-exam-ga-passive-subject",
    examType: "grammar-form",
    sentence: "泥棒に財布___盗まれました。",
    sentenceReading: "どろぼうにさいふ___ぬすまれました。",
    sentenceVi: "Tôi đã bị kẻ trộm lấy mất ví.",
    promptVi: "Chọn trợ từ chỉ vật bị tác động trong câu bị động.",
    answer: "を",
    answerReading: "を",
    distractors: ["が", "に", "は"],
    grammar: "Trong câu bị động gián tiếp (bị hại), vật bị tác động vẫn đi với trợ từ を.",
    explanationVi: "Tôi bị trộm ví: (私ha)泥棒に財布を盗まれました。",
    explanationVi: "Tôi bị trộm ví: (私は)泥棒に財布を盗まれました. Đây là dạng bị động N4 điển hình.",
    level: "N4"
  },
  {
    id: "particle-exam-mo-even-also",
    examType: "grammar-form",
    sentence: "昨日は忙しくて、ご飯を食べる時間___ありませんでした。",
    sentenceReading: "きのうはいそがしくて、ごはんをたべるじかん___ありませんでした。",
    sentenceVi: "Hôm qua bận quá, ngay cả thời gian ăn cơm cũng không có.",
    promptVi: 'Chọn trợ từ mang nghĩa nhấn mạnh "ngay cả... cũng không".',
    answer: "も",
    answerReading: "も",
    distractors: ["は", "が", "を"],
    grammar: "mo dùng để nhấn mạnh mức độ cực đoan: ngay cả thời gian cũng không có.",
    explanationVi: "時間もありませんでした thể hiện ý nhấn mạnh sự bận rộn cực độ.",
    level: "N4"
  },
  {
    id: "particle-exam-ka-or",
    examType: "grammar-form",
    sentence: "飲み物はビール___ワインにしましょう。",
    sentenceReading: "のみものはびーる___わいんにしましょう。",
    sentenceVi: "Đồ uống thì chọn bia hoặc là rượu vang nhé.",
    promptVi: 'Chọn trợ từ mang nghĩa "hoặc là".',
    answer: "か",
    answerReading: "か",
    distractors: ["と", "も", "が"],
    grammar: "か biểu thị sự lựa chọn giữa các danh từ.",
    explanationVi: "Lựa chọn giữa bia hoặc rượu vang: ビールかワイン.",
    level: "N4"
  },
  {
    id: "particle-exam-ya-and-so-on",
    examType: "grammar-form",
    sentence: "机の上に本___ノートなどがあります。",
    sentenceReading: "つくえのうえにほん___のーとなどがあります。",
    sentenceVi: "Trên bàn có sách, vở và một số thứ khác nữa.",
    promptVi: "Chọn trợ từ liệt kê không hạn định.",
    answer: "や",
    answerReading: "や",
    distractors: ["と", "も", "か"],
    grammar: "ya dùng để liệt kê một vài vật tiêu biểu và ngụ ý còn những thứ khác.",
    explanationVi: "Câu có chữ など (vân vân), nên trợ từ đi kèm tương thích nhất là や.",
    level: "N4"
  },
  {
    id: "particle-exam-ni-time",
    examType: "grammar-form",
    sentence: "毎朝、七時半___起きます。",
    sentenceReading: "まいあさ、しちじはん___おきます。",
    sentenceVi: "Mỗi sáng tôi thức dậy vào lúc 7 giờ rưỡi.",
    promptVi: "Chọn trợ từ chỉ thời điểm cụ thể xảy ra hành động.",
    answer: "に",
    answerReading: "に",
    distractors: ["で", "を", "が"],
    grammar: "に đứng sau các danh từ chỉ thời gian có con số cụ thể.",
    explanationVi: "Thời gian 7h30 có số cụ thể nên dùng に, không dùng で.",
    level: "N4"
  }
];
const EXPANDED_CONJUGATION_POOL = [
  {
    id: "conj-exam-passive-shikareru",
    examType: "grammar-form",
    sentence: "授業中、先生に___ました。",
    sentenceReading: "じゅぎょうちゅう、せんせいに___ました。",
    sentenceVi: "Tôi đã bị giáo viên mắng trong giờ học.",
    promptVi: "Chọn dạng bị động trước ます.",
    base: "怒る",
    baseReading: "おこる",
    baseMeaning: "mắng/giận",
    kind: "verb",
    group: "godan",
    formKey: "passive",
    formLabel: "thể bị động",
    answer: "怒られ",
    answerReading: "おこられ",
    distractors: ["怒り", "怒らせ", "怒って"],
    explanationVi: "怒る nhóm 1, thể bị động là 怒られる; kết hợp với ます là 怒られます.",
    level: "N4"
  },
  {
    id: "conj-exam-causative-yaseru",
    examType: "grammar-form",
    sentence: "母は私に野菜を___ました。",
    sentenceReading: "はははわたしにやさいを___ました。",
    sentenceVi: "Mẹ đã bắt tôi phải ăn rau.",
    promptVi: "Chọn dạng sai khiến trước ます.",
    base: "食べる",
    baseReading: "たべる",
    baseMeaning: "ăn",
    kind: "verb",
    group: "ichidan",
    formKey: "causative",
    formLabel: "thể sai khiến",
    answer: "食べさせ",
    answerReading: "たべさせ",
    distractors: ["食べられ", "食べ", "食べさせて"],
    explanationVi: "食べる nhóm 2, thể sai khiến là 食べさせる; đi kèm ます là 食べさせました (bắt ăn).",
    level: "N4"
  },
  {
    id: "conj-exam-volitional-iko",
    examType: "grammar-form",
    sentence: "一緒に海へ___。",
    sentenceReading: "いっしょにうみへ___。",
    sentenceVi: "Chúng ta cùng đi biển nào!",
    promptVi: "Chọn dạng ý chí thể hiện lời rủ rê thân mật.",
    base: "行く",
    baseReading: "いく",
    baseMeaning: "đi",
    kind: "verb",
    group: "godan",
    formKey: "volitional",
    formLabel: "thể ý chí",
    answer: "行こう",
    answerReading: "いこう",
    distractors: ["行きます", "行って", "行けば"],
    explanationVi: "行く nhóm 1, thể ý chí là 行こう, dùng rủ rê thân mật.",
    level: "N4"
  },
  {
    id: "conj-exam-tai-ikitai",
    examType: "grammar-form",
    sentence: "日本へ寿司を___たいです。",
    sentenceReading: "にほんへすしを___たいです。",
    sentenceVi: "Tôi muốn đi Nhật để ăn sushi.",
    promptVi: "Chọn dạng ます-stem kết hợp với たい.",
    base: "食べる",
    baseReading: "たべる",
    baseMeaning: "ăn",
    kind: "verb",
    group: "ichidan",
    formKey: "masu-stem",
    formLabel: "thân ます + たい",
    answer: "食べ",
    answerReading: "たべ",
    distractors: ["食べる", "食べて", "食べた"],
    explanationVi: "Vます bỏ ます + たいです chỉ mong muốn. 食べる -> 食べたいです.",
    level: "N4"
  },
  {
    id: "conj-exam-i-adj-past-samukatta",
    examType: "grammar-form",
    sentence: "昨日のテストはとても___です。",
    sentenceReading: "きのうのてすとはとても___です。",
    sentenceVi: "Bài kiểm tra hôm qua rất khó.",
    promptVi: "Chọn dạng quá khứ của tính từ い.",
    base: "難しい",
    baseReading: "むずかしい",
    baseMeaning: "khó",
    kind: "adjective",
    group: "i-adj",
    formKey: "past",
    formLabel: "quá khứ tính từ い",
    answer: "難しかった",
    answerReading: "むずかしかった",
    distractors: ["難しいでした", "難しくでした", "難しかったです"],
    explanationVi: "Tính từ い quá khứ bỏ い thêm かった: 難しい → 難しかった.",
    level: "N4"
  },
  {
    id: "conj-exam-na-adj-past-shizuka-datta",
    examType: "grammar-form",
    sentence: "昔、この町はとても___でした。",
    sentenceReading: "むかし、このまちはとても___でした。",
    sentenceVi: "Ngày xưa thị trấn này rất yên tĩnh.",
    promptVi: "Chọn dạng quá khứ của tính từ な.",
    base: "静か",
    baseReading: "しずか",
    baseMeaning: "yên tĩnh",
    kind: "adjective",
    group: "na-adj",
    formKey: "past",
    formLabel: "quá khứ tính từ な",
    answer: "静か",
    answerReading: "しずか",
    distractors: ["静かかった", "静かだった", "静かに"],
    explanationVi: "Tính từ な quá khứ lịch sự giữ nguyên thân tính từ + でした: 静かでした.",
    level: "N4"
  },
  {
    id: "conj-exam-i-adj-neg-samukunai",
    examType: "grammar-form",
    sentence: "今日はあまり___です。",
    sentenceReading: "きょうはあまり___です。",
    sentenceVi: "Hôm nay trời không lạnh lắm.",
    promptVi: "Chọn dạng phủ định hiện tại của tính từ い.",
    base: "寒い",
    baseReading: "さむい",
    baseMeaning: "lạnh",
    kind: "adjective",
    group: "i-adj",
    formKey: "negative",
    formLabel: "phủ định tính từ い",
    answer: "寒くない",
    answerReading: "さむくない",
    distractors: ["寒いではない", "寒くないでした", "寒くではない"],
    explanationVi: "Tính từ い phủ định bỏ い thêm くない: 寒い → 寒くない.",
    level: "N4"
  },
  {
    id: "conj-exam-na-adj-neg-benri-dewanai",
    examType: "grammar-form",
    sentence: "このスマホはあまり___です。",
    sentenceReading: "このすまほはあまり___です。",
    sentenceVi: "Chiếc điện thoại này không tiện lợi lắm.",
    promptVi: "Chọn dạng phủ định hiện tại của tính từ な.",
    base: "便利",
    baseReading: "べんり",
    baseMeaning: "tiện lợi",
    kind: "adjective",
    group: "na-adj",
    formKey: "negative",
    formLabel: "phủ định tính từ な",
    answer: "便利ではあり",
    answerReading: "べんりではあり",
    distractors: ["便利くない", "便利ではない", "便利にない"],
    explanationVi: "Tính từ な phủ định lịch sự là thân tính từ + ありません. Chỗ trống trước ません là 便利ではあり.",
    level: "N4"
  },
  {
    id: "conj-exam-te-oku-katteoku",
    examType: "grammar-form",
    sentence: "パーティーの前に、飲み物を___おきます。",
    sentenceReading: "ぱーてぃーのまえに、のみものを___おきます。",
    sentenceVi: "Trước bữa tiệc, tôi sẽ mua sẵn đồ uống.",
    promptVi: "Chọn dạng て trước おきます.",
    base: "買う",
    baseReading: "かう",
    baseMeaning: "mua",
    kind: "verb",
    group: "godan",
    formKey: "te",
    formLabel: "thể て + おく",
    answer: "買って",
    answerReading: "かって",
    distractors: ["買う", "買いて", "買った"],
    explanationVi: "Động từ nhóm 1 買う chuyển sang thể て là 買って. Mẫu Vておく diễn tả sự chuẩn bị trước.",
    level: "N4"
  },
  {
    id: "conj-exam-te-simau-wasureta",
    examType: "grammar-form",
    sentence: "宿題を忘れて___ました。",
    sentenceReading: "しゅくだいをわすれて___ました。",
    sentenceVi: "Tôi đã lỡ quên bài tập mất rồi.",
    promptVi: "Chọn dạng đúng của しまう sau thể て.",
    base: "忘れる",
    baseReading: "わすれる",
    baseMeaning: "quên",
    kind: "verb",
    group: "ichidan",
    formKey: "te",
    formLabel: "thể て + しまう",
    answer: "しまい",
    answerReading: "しまい",
    distractors: ["しまって", "しまった", "しまえ"],
    explanationVi: "Mẫu Vて + しまいました diễn tả sự hối tiếc hoặc đã lỡ làm gì đó. Chỗ trống trước ました là しまい.",
    level: "N4"
  }
];
const STUDY_ROUTE_DOMAINS = Object.freeze([
  {
    id: "vocab",
    label: "Từ vựng",
    shortLabel: "Từ",
    description: "Nhận diện nghĩa, nghe phát âm, nhớ ví dụ.",
    action: "VOCAB_TREE",
    accent: "#7fd49a"
  },
  {
    id: "vocabJlpt",
    label: "Từ Vựng - Ngữ pháp JLPT",
    shortLabel: "JLPT Từ",
    description: "Đọc kanji, cách viết, ngữ cảnh, đồng nghĩa, cách dùng như đề N4.",
    action: "VOCAB_JLPT",
    accent: "#5ac8fa"
  },
  {
    id: "kanji",
    label: "Kanji",
    shortLabel: "Kanji",
    description: "Đọc âm, nhớ nghĩa, xem từ ghép theo biome.",
    action: "KANJI_ROCK",
    accent: "#d8bd7a"
  },
  {
    id: "grammar",
    label: "Ngữ pháp",
    shortLabel: "Ngữ",
    description: "Điền mẫu câu N4 và đọc giải thích tiếng Việt.",
    action: "GRAMMAR_ECHO",
    accent: "#b894e8"
  },
  {
    id: "particles",
    label: "Trợ từ",
    shortLabel: "Trợ",
    description: "Chọn は・が・を・に・で... theo ngữ cảnh câu.",
    action: "PARTICLE_GATE",
    accent: "#5dd6c5"
  },
  {
    id: "conjugation",
    label: "Chia thể",
    shortLabel: "Chia",
    description: "Luyện て, ない, た, khả năng, điều kiện, tính từ.",
    action: "CONJUGATION_FORGE",
    accent: "#f4a261"
  }
]);
const VERB_FORM_LABELS = Object.freeze({
  masu: "thể ます",
  masuNeg: "phủ định ます",
  masuPast: "quá khứ ます",
  te: "thể て",
  nai: "thể ない",
  ta: "thể た",
  potential: "thể khả năng",
  passive: "thể bị động",
  causative: "thể sai khiến",
  volitional: "ý chí",
  condBa: "điều kiện ば",
  condTara: "điều kiện たら",
  tai: "mong muốn たい",
  teIru: "ている",
  teKudasai: "てください"
});
const ADJECTIVE_FORM_LABELS = Object.freeze({
  present: "hiện tại",
  negative: "phủ định",
  past: "quá khứ",
  pastNegative: "quá khứ phủ định",
  te: "thể て",
  adverb: "dạng trạng từ"
});
const VOCAB_EXAM_TYPE_LABELS = Object.freeze({
  "kanji-reading": "問題1 漢字読み",
  orthography: "問題2 表記",
  "context-expression": "問題3 文脈規定",
  paraphrase: "問題4 言い換え類義",
  usage: "問題5 用法"
});
const GRAMMAR_EXAM_TYPE_LABELS = Object.freeze({
  "grammar-form": "問題1 文法形式",
  "sentence-composition": "問題2 文の組み立て",
  "text-grammar": "問題3 文章の文法"
});
const LEGACY_JLPT_N4_GRAMMAR_EXAM_POOL = [
  {
    id: "grammar-form-nagara",
    examType: "grammar-form",
    sentence: "音楽を＿＿＿、宿題をしました。",
    sentenceReading: "おんがくを＿＿＿、しゅくだいをしました。",
    sentenceVi: "Tôi vừa nghe nhạc vừa làm bài tập.",
    promptVi: "Chọn mẫu ngữ pháp phù hợp với câu.",
    answer: "聞きながら",
    answerReading: "ききながら",
    distractors: ["聞いてから", "聞くために", "聞いたら"],
    grammarPoint: "ながら",
    explanationVi: "V-ます bỏ ます + ながら diễn tả hai hành động xảy ra song song: vừa nghe nhạc vừa làm bài tập.",
    level: "N4"
  },
  {
    id: "grammar-form-noni",
    examType: "grammar-form",
    sentence: "たくさん勉強した＿＿＿、試験に合格できませんでした。",
    sentenceReading: "たくさんべんきょうした＿＿＿、しけんにごうかくできませんでした。",
    sentenceVi: "Đã học rất nhiều vậy mà tôi không thể đỗ kỳ thi.",
    promptVi: "Chọn mẫu thể hiện kết quả trái với mong đợi.",
    answer: "のに",
    answerReading: "のに",
    distractors: ["ので", "から", "ために"],
    grammarPoint: "のに",
    explanationVi: "「のに」 diễn tả sự trái ngược/tiếc nuối: đã học nhiều, vậy mà kết quả không như mong đợi.",
    level: "N4"
  },
  {
    id: "grammar-form-youni",
    examType: "grammar-form",
    sentence: "忘れない＿＿＿、メモしておきます。",
    sentenceReading: "わすれない＿＿＿、めもしておきます。",
    sentenceVi: "Tôi ghi chú sẵn để không quên.",
    promptVi: "Chọn mẫu chỉ mục đích/phòng tránh phù hợp.",
    answer: "ように",
    answerReading: "ように",
    distractors: ["ために", "そうに", "ながら"],
    grammarPoint: "ように",
    explanationVi: "V-ない + ように dùng khi mục tiêu là tránh một trạng thái/hành động: để không quên.",
    level: "N4"
  },
  {
    id: "grammar-composition-tsumori",
    examType: "sentence-composition",
    sentence: "来週、京都へ ★ つもりです。",
    sentenceReading: "らいしゅう、きょうとへ ★ つもりです。",
    sentenceVi: "Tuần sau tôi định đi Kyoto.",
    promptVi: "Sắp xếp các cụm từ. Từ/cụm nào rơi vào vị trí ★?",
    answer: "行く",
    answerReading: "いく",
    distractors: ["来週", "京都へ", "つもりです"],
    scrambledParts: ["つもりです", "京都へ", "行く", "来週"],
    fullSentence: "来週、京都へ行くつもりです。",
    fullReading: "らいしゅう、きょうとへいくつもりです。",
    grammarPoint: "つもりだ",
    explanationVi: "Mẫu 「V-辞書形 + つもりです」 diễn tả dự định. Thứ tự đúng: 来週、京都へ行くつもりです。",
    level: "N4"
  },
  {
    id: "grammar-composition-atode",
    examType: "sentence-composition",
    sentence: "ご飯を ★ 勉強します。",
    sentenceReading: "ごはんを ★ べんきょうします。",
    sentenceVi: "Sau khi ăn cơm xong, tôi sẽ học.",
    promptVi: "Sắp xếp các cụm từ. Từ/cụm nào rơi vào vị trí ★?",
    answer: "食べた後で",
    answerReading: "たべたあとで",
    distractors: ["ご飯を", "勉強します", "食べる前に"],
    scrambledParts: ["勉強します", "食べた後で", "ご飯を", "食べる前に"],
    fullSentence: "ご飯を食べた後で勉強します。",
    fullReading: "ごはんをたべたあとでべんきょうします。",
    grammarPoint: "後で",
    explanationVi: "「Vた + 後で」 nghĩa là sau khi làm xong. Ăn cơm xong rồi học nên đáp án là 食べた後で.",
    level: "N4"
  },
  {
    id: "grammar-composition-kamo",
    examType: "sentence-composition",
    sentence: "午後から雨が ★。",
    sentenceReading: "ごごからあめが ★。",
    sentenceVi: "Từ chiều có thể trời sẽ mưa.",
    promptVi: "Sắp xếp các cụm từ. Từ/cụm nào rơi vào vị trí ★?",
    answer: "降るかもしれません",
    answerReading: "ふるかもしれません",
    distractors: ["午後から", "雨が", "降りました"],
    scrambledParts: ["雨が", "降るかもしれません", "午後から", "降りました"],
    fullSentence: "午後から雨が降るかもしれません。",
    fullReading: "ごごからあめがふるかもしれません。",
    grammarPoint: "かもしれない",
    explanationVi: "「普通形 + かもしれません」 diễn tả khả năng không chắc chắn: có thể trời sẽ mưa.",
    level: "N4"
  },
  {
    id: "grammar-text-sorede",
    examType: "text-grammar",
    sentence: "昨日は朝から強い雨でした。＿＿＿、公園でサッカーをしませんでした。",
    sentenceReading: "きのうはあさからつよいあめでした。＿＿＿、こうえんでさっかーをしませんでした。",
    sentenceVi: "Hôm qua mưa to từ sáng. Vì vậy, chúng tôi đã không chơi bóng đá ở công viên.",
    promptVi: "Đọc đoạn ngắn và chọn từ nối phù hợp nhất.",
    answer: "それで",
    answerReading: "それで",
    distractors: ["しかし", "例えば", "それなのに"],
    grammarPoint: "接続表現",
    explanationVi: "Câu sau là kết quả của việc mưa to, nên dùng それで: vì vậy/do đó.",
    level: "N4"
  },
  {
    id: "grammar-text-demo",
    examType: "text-grammar",
    sentence: "この店は駅から遠いです。＿＿＿、料理がおいしいので、いつも人が多いです。",
    sentenceReading: "このみせはえきからとおいです。＿＿＿、りょうりがおいしいので、いつもひとがおおいです。",
    sentenceVi: "Quán này xa ga. Tuy nhiên, vì món ăn ngon nên lúc nào cũng đông khách.",
    promptVi: "Đọc đoạn ngắn và chọn từ nối phù hợp nhất.",
    answer: "でも",
    answerReading: "でも",
    distractors: ["それで", "だから", "すると"],
    grammarPoint: "接続表現",
    explanationVi: "Hai câu có quan hệ trái ngược: xa ga nhưng vẫn đông vì đồ ăn ngon. Vì vậy chọn でも.",
    level: "N4"
  },
  {
    id: "grammar-text-tokoro",
    examType: "text-grammar",
    sentence: "今、駅に着いた＿＿＿です。あと五分でそちらへ行きます。",
    sentenceReading: "いま、えきについた＿＿＿です。あとごふんでそちらへいきます。",
    sentenceVi: "Bây giờ tôi vừa đến ga. Khoảng 5 phút nữa tôi sẽ tới chỗ bạn.",
    promptVi: "Chọn mẫu ngữ pháp phù hợp với dòng chảy của đoạn văn.",
    answer: "ところ",
    answerReading: "ところ",
    distractors: ["ため", "はず", "まま"],
    grammarPoint: "ところ",
    explanationVi: "「Vたところ」 diễn tả vừa mới làm xong. Vừa đến ga nên dùng 着いたところです.",
    level: "N4"
  }
];
const JLPT_N4_GRAMMAR_EXAM_POOL = Object.freeze([
  ...LEGACY_JLPT_N4_GRAMMAR_EXAM_POOL,
  ...EXPANDED_GRAMMAR_POOL
]);
const LEGACY_JLPT_N4_PARTICLE_EXAM_POOL = [
  {
    id: "particle-exam-ga-dare",
    examType: "grammar-form",
    sentence: "だれ___窓を開けましたか。",
    sentenceReading: "だれ___まどをあけましたか。",
    sentenceVi: "Ai đã mở cửa sổ vậy?",
    promptVi: "Chọn trợ từ tự nhiên nhất cho câu hỏi có từ nghi vấn làm chủ ngữ.",
    answer: "が",
    answerReading: "が",
    distractors: ["は", "を", "に"],
    grammar: "Sau từ nghi vấn làm chủ ngữ như だれ/何/どこ, thường dùng が.",
    explanationVi: "Trong câu hỏi “ai đã...?”, だれ là chủ ngữ chưa biết nên chọn が, không dùng は.",
    level: "N4"
  },
  {
    id: "particle-exam-ni-morau",
    examType: "grammar-form",
    sentence: "駅まで友だち___迎えに来てもらいました。",
    sentenceReading: "えきまでともだち___むかえにきてもらいました。",
    sentenceVi: "Tôi đã được bạn đến đón tới ga.",
    promptVi: "Chọn trợ từ chỉ người làm hành động giúp mình trong mẫu てもらう.",
    answer: "に",
    answerReading: "に",
    distractors: ["を", "で", "から"],
    grammar: "Người làm hành động giúp mình trong mẫu Vて + もらう thường đi với に.",
    explanationVi: "友だちに迎えに来てもらいました nghĩa là “tôi được bạn đến đón”. Đây là điểm rất hay xuất hiện trong phần 文法形式.",
    level: "N4"
  },
  {
    id: "particle-exam-de-tool",
    examType: "grammar-form",
    sentence: "はさみ___紙を切ってください。",
    sentenceReading: "はさみ___かみをきってください。",
    sentenceVi: "Hãy cắt giấy bằng kéo.",
    promptVi: "Chọn trợ từ chỉ công cụ/phương tiện.",
    answer: "で",
    answerReading: "で",
    distractors: ["に", "を", "が"],
    grammar: "で dùng để chỉ công cụ hoặc phương tiện thực hiện hành động.",
    explanationVi: "Cắt bằng kéo là dùng công cụ, vì vậy はさみで紙を切る là tự nhiên.",
    level: "N4"
  },
  {
    id: "particle-exam-from-to",
    examType: "grammar-form",
    sentence: "図書館は九時___五時まで開いています。",
    sentenceReading: "としょかんはくじ___ごじまであいています。",
    sentenceVi: "Thư viện mở cửa từ 9 giờ đến 5 giờ.",
    promptVi: "Chọn trợ từ bắt đầu khoảng thời gian.",
    answer: "から",
    answerReading: "から",
    distractors: ["まで", "に", "で"],
    grammar: "から đánh dấu điểm bắt đầu, まで đánh dấu điểm kết thúc.",
    explanationVi: "Có 五時まで ở cuối câu, nên chỗ trống là điểm bắt đầu: 九時から五時まで.",
    level: "N4"
  },
  {
    id: "particle-exam-shika-negative",
    examType: "grammar-form",
    sentence: "財布には千円___ありません。",
    sentenceReading: "さいふにはせんえん___ありません。",
    sentenceVi: "Trong ví chỉ có 1.000 yên thôi.",
    promptVi: "Chọn cách nói “chỉ có...” đi với phủ định.",
    answer: "しか",
    answerReading: "しか",
    distractors: ["だけ", "も", "まで"],
    grammar: "しか đi với phủ định để nhấn mạnh “chỉ/không hơn”.",
    explanationVi: "Mẫu しか + phủ định là bẫy N4 quen thuộc. だけ không bắt buộc đi với phủ định, còn しか phải đi với dạng phủ định như ありません.",
    level: "N4"
  },
  {
    id: "particle-exam-hodo-negative",
    examType: "grammar-form",
    sentence: "今年の冬は去年___寒くありません。",
    sentenceReading: "ことしのふゆはきょねん___さむくありません。",
    sentenceVi: "Mùa đông năm nay không lạnh bằng năm ngoái.",
    promptVi: "Chọn trợ từ dùng trong so sánh phủ định.",
    answer: "ほど",
    answerReading: "ほど",
    distractors: ["より", "まで", "だけ"],
    grammar: "AはBほど + phủ định: A không bằng B.",
    explanationVi: "寒くありません là phủ định, nên dùng 去年ほど寒くありません. より thường dùng với câu khẳng định để nói “hơn”.",
    level: "N4"
  },
  {
    id: "particle-exam-noni-contrast",
    examType: "grammar-form",
    sentence: "たくさん練習した___、試合に勝てませんでした。",
    sentenceReading: "たくさんれんしゅうした___、しあいにかてませんでした。",
    sentenceVi: "Đã luyện tập rất nhiều vậy mà không thắng được trận đấu.",
    promptVi: "Chọn mẫu nối thể hiện kết quả trái với mong đợi.",
    answer: "のに",
    answerReading: "のに",
    distractors: ["ので", "から", "ために"],
    grammar: "のに diễn tả “vậy mà/dù... nhưng...”, kết quả trái với dự đoán.",
    explanationVi: "Luyện tập nhiều nhưng vẫn không thắng là quan hệ trái ngược, nên のに đúng hơn ので/から.",
    level: "N4"
  },
  {
    id: "particle-exam-node-reason",
    examType: "grammar-form",
    sentence: "熱がある___、今日は学校を休みます。",
    sentenceReading: "ねつがある___、きょうはがっこうをやすみます。",
    sentenceVi: "Vì bị sốt nên hôm nay tôi nghỉ học.",
    promptVi: "Chọn mẫu nêu lý do tự nhiên, mềm hơn から.",
    answer: "ので",
    answerReading: "ので",
    distractors: ["のに", "ても", "ながら"],
    grammar: "ので nêu lý do/nguyên nhân một cách tự nhiên, thường mềm hơn から.",
    explanationVi: "Câu sau là kết quả hợp lý của việc bị sốt, nên dùng ので. のに sẽ tạo nghĩa trái ngược.",
    level: "N4"
  },
  {
    id: "particle-exam-to-condition",
    examType: "grammar-form",
    sentence: "このボタンを押す___、ドアが開きます。",
    sentenceReading: "このボタンをおす___、ドアがあきます。",
    sentenceVi: "Nếu bấm nút này thì cửa sẽ mở.",
    promptVi: "Chọn mẫu điều kiện dùng cho kết quả tự nhiên/máy móc.",
    answer: "と",
    answerReading: "と",
    distractors: ["なら", "ても", "ながら"],
    grammar: "V辞書形 + と dùng cho kết quả xảy ra tự nhiên hoặc theo cơ chế.",
    explanationVi: "Bấm nút thì cửa mở là quan hệ điều kiện-kết quả ổn định, nên 押すと đúng.",
    level: "N4"
  },
  {
    id: "particle-exam-bakari",
    examType: "grammar-form",
    sentence: "さっき昼ご飯を食べた___です。",
    sentenceReading: "さっきひるごはんをたべた___です。",
    sentenceVi: "Tôi vừa mới ăn trưa xong.",
    promptVi: "Chọn mẫu nói “vừa mới làm xong”.",
    answer: "ばかり",
    answerReading: "ばかり",
    distractors: ["ところに", "まま", "はず"],
    grammar: "Vた + ばかりです diễn tả vừa mới làm xong theo cảm nhận của người nói.",
    explanationVi: "さっき là “vừa nãy”, hợp với 食べたばかりです. ところに/まま/はず không tạo câu đúng ở đây.",
    level: "N4"
  }
];
const JLPT_N4_PARTICLE_EXAM_POOL = Object.freeze([
  ...LEGACY_JLPT_N4_PARTICLE_EXAM_POOL,
  ...EXPANDED_PARTICLE_POOL
]);
const LEGACY_JLPT_N4_CONJUGATION_EXAM_POOL = [
  {
    id: "conj-exam-te-kudasai",
    examType: "grammar-form",
    sentence: "ここに名前を___ください。",
    sentenceReading: "ここになまえを___ください。",
    sentenceVi: "Hãy viết tên vào đây.",
    promptVi: "Chọn dạng て để tạo lời yêu cầu lịch sự.",
    base: "書く",
    baseReading: "かく",
    baseMeaning: "viết",
    kind: "verb",
    group: "godan",
    formKey: "te",
    formLabel: "thể て + ください",
    answer: "書いて",
    answerReading: "かいて",
    distractors: ["書く", "書いた", "書かない"],
    explanationVi: "書く là động từ nhóm 1, thể て là 書いて. Mẫu Vてください dùng để yêu cầu: 名前を書いてください.",
    level: "N4"
  },
  {
    id: "conj-exam-nai-youni",
    examType: "grammar-form",
    sentence: "パスポートを___ようにしてください。",
    sentenceReading: "ぱすぽーとを___ようにしてください。",
    sentenceVi: "Hãy cố gắng đừng quên hộ chiếu.",
    promptVi: "Chọn dạng ない trước ようにしてください.",
    base: "忘れる",
    baseReading: "わすれる",
    baseMeaning: "quên",
    kind: "verb",
    group: "ichidan",
    formKey: "nai",
    formLabel: "thể ない + ように",
    answer: "忘れない",
    answerReading: "わすれない",
    distractors: ["忘れる", "忘れて", "忘れた"],
    explanationVi: "Vない + ようにしてください nghĩa là hãy chú ý/cố gắng để không làm việc đó.",
    level: "N4"
  },
  {
    id: "conj-exam-ta-koto",
    examType: "grammar-form",
    sentence: "日本へ___ことがあります。",
    sentenceReading: "にほんへ___ことがあります。",
    sentenceVi: "Tôi đã từng đi Nhật.",
    promptVi: "Chọn dạng た để nói về kinh nghiệm đã từng làm.",
    base: "行く",
    baseReading: "いく",
    baseMeaning: "đi",
    kind: "verb",
    group: "godan",
    formKey: "ta",
    formLabel: "thể た + ことがある",
    answer: "行った",
    answerReading: "いった",
    distractors: ["行く", "行って", "行かない"],
    explanationVi: "Vた + ことがあります dùng để nói kinh nghiệm. 行く có thể た là 行った.",
    level: "N4"
  },
  {
    id: "conj-exam-potential",
    examType: "grammar-form",
    sentence: "この漢字が___ますか。",
    sentenceReading: "このかんじが___ますか。",
    sentenceVi: "Bạn có đọc được chữ Hán này không?",
    promptVi: "Chọn thân khả năng trước ます.",
    base: "読む",
    baseReading: "よむ",
    baseMeaning: "đọc",
    kind: "verb",
    group: "godan",
    formKey: "potential",
    formLabel: "thể khả năng lịch sự",
    answer: "読め",
    answerReading: "よめ",
    distractors: ["読み", "読んで", "読む"],
    explanationVi: "読む chuyển sang khả năng là 読める; dạng lịch sự là 読めます. Vì câu đã có ます, chỗ trống là 読め.",
    level: "N4"
  },
  {
    id: "conj-exam-ba-ii",
    examType: "grammar-form",
    sentence: "道がわからないときは、先生に___いいです。",
    sentenceReading: "みちがわからないときは、せんせいに___いいです。",
    sentenceVi: "Khi không biết đường thì hỏi giáo viên là được.",
    promptVi: "Chọn dạng điều kiện ば trong mẫu Vばいいです.",
    base: "聞く",
    baseReading: "きく",
    baseMeaning: "hỏi/nghe",
    kind: "verb",
    group: "godan",
    formKey: "condBa",
    formLabel: "điều kiện ば + いい",
    answer: "聞けば",
    answerReading: "きけば",
    distractors: ["聞くば", "聞いて", "聞いた"],
    explanationVi: "Vばいいです dùng để gợi ý “nên/cứ làm là được”. 聞く chuyển thành 聞けば.",
    level: "N4"
  },
  {
    id: "conj-exam-tara",
    examType: "grammar-form",
    sentence: "家に___、すぐ電話します。",
    sentenceReading: "いえに___、すぐでんわします。",
    sentenceVi: "Khi về tới nhà, tôi sẽ gọi điện ngay.",
    promptVi: "Chọn dạng たら để nói “khi/sau khi... thì...”.",
    base: "着く",
    baseReading: "つく",
    baseMeaning: "đến nơi",
    kind: "verb",
    group: "godan",
    formKey: "condTara",
    formLabel: "điều kiện たら",
    answer: "着いたら",
    answerReading: "ついたら",
    distractors: ["着くと", "着いて", "着くば"],
    explanationVi: "Vたら dùng tốt cho “khi/sau khi làm xong thì...”. 家に着いたら、すぐ電話します là cách nói tự nhiên.",
    level: "N4"
  },
  {
    id: "conj-exam-nagara",
    examType: "grammar-form",
    sentence: "音楽を___ながら、料理します。",
    sentenceReading: "おんがくを___ながら、りょうりします。",
    sentenceVi: "Tôi vừa nghe nhạc vừa nấu ăn.",
    promptVi: "Chọn thân ます trước ながら.",
    base: "聞く",
    baseReading: "きく",
    baseMeaning: "nghe",
    kind: "verb",
    group: "godan",
    formKey: "masu-stem",
    formLabel: "thân ます + ながら",
    answer: "聞き",
    answerReading: "きき",
    distractors: ["聞く", "聞いて", "聞いた"],
    explanationVi: "Vます bỏ ます + ながら diễn tả hai hành động song song. 聞きます bỏ ます thành 聞き.",
    level: "N4"
  },
  {
    id: "conj-exam-i-sugiru",
    examType: "grammar-form",
    sentence: "このかばんは___、持てません。",
    sentenceReading: "このかばんは___、もてません。",
    sentenceVi: "Cái cặp này quá nặng nên tôi không cầm nổi.",
    promptVi: "Chọn dạng đúng của tính từ い trước すぎる.",
    base: "重い",
    baseReading: "おもい",
    baseMeaning: "nặng",
    kind: "adjective",
    group: "i-adj",
    formKey: "sugiru",
    formLabel: "tính từ い + すぎる",
    answer: "重すぎて",
    answerReading: "おもすぎて",
    distractors: ["重いすぎて", "重くすぎて", "重かったすぎて"],
    explanationVi: "Tính từ い bỏ い rồi thêm すぎる: 重い → 重すぎる → 重すぎて.",
    level: "N4"
  },
  {
    id: "conj-exam-na-naru",
    examType: "grammar-form",
    sentence: "部屋が___なりました。",
    sentenceReading: "へやが___なりました。",
    sentenceVi: "Căn phòng đã trở nên sạch đẹp.",
    promptVi: "Chọn dạng に của tính từ な trước なります.",
    base: "きれい",
    baseReading: "きれい",
    baseMeaning: "sạch/đẹp",
    kind: "adjective",
    group: "na-adj",
    formKey: "adverb",
    formLabel: "tính từ な + に + なる",
    answer: "きれいに",
    answerReading: "きれいに",
    distractors: ["きれいな", "きれいで", "きれいだ"],
    explanationVi: "Tính từ な khi đi với なる dùng dạng に: きれいになります.",
    level: "N4"
  },
  {
    id: "conj-exam-i-naru",
    examType: "grammar-form",
    sentence: "天気が___なりました。",
    sentenceReading: "てんきが___なりました。",
    sentenceVi: "Thời tiết đã trở nên tốt hơn.",
    promptVi: "Chọn dạng く của tính từ い trước なります.",
    base: "いい",
    baseReading: "いい",
    baseMeaning: "tốt",
    kind: "adjective",
    group: "i-adj",
    formKey: "adverb",
    formLabel: "tính từ い + く + なる",
    answer: "よく",
    answerReading: "よく",
    distractors: ["いいに", "よいな", "よくて"],
    explanationVi: "いい chuyển bất quy tắc sang よく trước なる: 天気がよくなりました."
  }
];
const JLPT_N4_CONJUGATION_EXAM_POOL = Object.freeze([
  ...LEGACY_JLPT_N4_CONJUGATION_EXAM_POOL,
  ...EXPANDED_CONJUGATION_POOL
]);
function seededRandom(seed) {
  let state = (Number(seed) || 1) >>> 0;
  return () => {
    state = state * 1664525 + 1013904223 >>> 0;
    return state / 4294967296;
  };
}
function pickFrom(list2, rng) {
  if (!Array.isArray(list2) || list2.length === 0) return null;
  return list2[Math.floor(rng() * list2.length)];
}
function shuffleWithSeed(list2, seed) {
  const rng = seededRandom(seed);
  const out = [...list2];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
function primaryReading(value) {
  return String(value || "").split(/[・･]/)[0].trim();
}
function katakanaToHiragana(str) {
  return String(str || "").replace(
    /[\u30A1-\u30F6]/g,
    (ch) => String.fromCharCode(ch.charCodeAt(0) - 96)
  );
}
function bestKanjiReading(kanji) {
  const kun = primaryReading(kanji.kunReading);
  if (kun && kun !== "-") return { reading: kun, type: "kun" };
  const on2 = primaryReading(kanji.onReading);
  if (on2 && on2 !== "-") return { reading: katakanaToHiragana(on2), type: "on" };
  return { reading: "", type: null };
}
function uniqueByKey(items, getKey) {
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const item of items || []) {
    const key = getKey(item);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}
function sectionEntries(sections, entryKey) {
  return (Array.isArray(sections) ? sections : []).flatMap((section) => {
    if (Array.isArray(section == null ? void 0 : section[entryKey])) return section[entryKey];
    if (Array.isArray(section == null ? void 0 : section.entries)) return section.entries;
    if (Array.isArray(section == null ? void 0 : section.items)) return section.items;
    if (Array.isArray(section == null ? void 0 : section.data)) return section.data;
    if (Array.isArray(section)) return section;
    if (section && typeof section === "object") return [section];
    return [];
  });
}
function readingList(value, fallback = "") {
  if (Array.isArray(value)) return value.filter(Boolean).join("・");
  return String(value || fallback || "").replace(/\([^)]*\)/g, "").trim();
}
function normalizeRawVocab(item) {
  if (!(item == null ? void 0 : item.word) && !(item == null ? void 0 : item.jp) && !(item == null ? void 0 : item.key)) return null;
  return {
    ...item,
    kind: "vocab",
    key: item.key || `v:${item.word || item.jp}`,
    word: item.word || item.jp || item.kanji || item.key,
    reading: item.reading || item.kana || "",
    meaning: item.meaning || item.meaningVi || item.vi || item.gloss || ""
  };
}
function normalizeRawKanji(item) {
  const character = (item == null ? void 0 : item.character) || (item == null ? void 0 : item.kanji);
  if (!character) return null;
  const compounds = Array.isArray(item.compoundsList) ? item.compoundsList : Array.isArray(item.compounds) ? item.compounds : [];
  return {
    ...item,
    character,
    onReading: readingList(item.onReadings, item.on),
    kunReading: readingList(item.kunReadings, item.kun),
    meaning: item.meaning || item.vi || "",
    strokeCount: Number(item.strokeCount || item.strokes) || 0,
    words: compounds.map((entry) => ({
      word: entry.compound || entry.word,
      reading: entry.reading || "",
      vi: entry.meaning || entry.vi || ""
    })).filter((entry) => entry.word),
    mnemonicVi: item.mnemonicVi || item.mnemonic || item.description || ""
  };
}
function getVocabStudyKey(item) {
  return String((item == null ? void 0 : item.key) || (item == null ? void 0 : item.word) || (item == null ? void 0 : item.jp) || "");
}
function getVocabExamStudyKey(item) {
  return String((item == null ? void 0 : item.id) ? `exam:vocab:${item.id}` : "");
}
function getParticleStudyKey(item) {
  return String((item == null ? void 0 : item.id) ? `particle:${item.id}` : "");
}
function getGrammarStudyKey(entry) {
  return String(entry ? `grammar:${entry.id || "item"}:${entry.sentence || entry.answer}` : "");
}
function getKanjiStudyKey(kanji) {
  return String((kanji == null ? void 0 : kanji.character) ? `kanji:${kanji.character}` : "");
}
function getConjugationStudyKey(question) {
  return String((question == null ? void 0 : question.id) ? `conjugation:${question.id}` : "");
}
function getVocabExamTypeLabel(examType) {
  return VOCAB_EXAM_TYPE_LABELS[examType] || "問題 語彙";
}
function getGrammarExamTypeLabel(examType) {
  return GRAMMAR_EXAM_TYPE_LABELS[examType] || "問題 文法";
}
function resolveStaticChoiceReading(entry, label, isCorrect) {
  const text = String(label || "");
  if (!/[\u3400-\u9fff]/.test(text)) return text;
  if (isCorrect) {
    if (entry.examType === "usage" && entry.sentenceReading) return entry.sentenceReading;
    if (["orthography", "context-expression"].includes(entry.examType) && entry.correctReading) {
      return entry.correctReading;
    }
  }
  if (entry.examType === "usage" && entry.answer && entry.sentenceReading) {
    const inferred2 = inferReadingFromReference(text, entry.answer, entry.sentenceReading);
    if (inferred2 && !/[\u3400-\u9fff]/.test(inferred2)) return inferred2;
  }
  if (entry.correctWord && entry.correctReading && text.includes(entry.correctWord)) {
    const inferred2 = inferReadingFromReference(text, entry.correctWord, entry.correctReading);
    if (inferred2 && !/[\u3400-\u9fff]/.test(inferred2)) return inferred2;
  }
  const exact = rawVocabPool.find((item) => item.word === text && item.reading);
  if (exact) return exact.reading;
  let inferred = text;
  const candidates = rawVocabPool.filter((item) => item.word && item.reading && /[\u3400-\u9fff]/.test(item.word) && inferred.includes(item.word)).sort((a, b) => b.word.length - a.word.length);
  for (const item of candidates) inferred = inferred.replaceAll(item.word, item.reading);
  return inferred;
}
function normalizeStaticChoice(entry, label, isCorrect) {
  const text = String(label || "");
  return {
    key: isCorrect ? getVocabExamStudyKey(entry) : `${getVocabExamStudyKey(entry)}:wrong:${text}`,
    label: text,
    reading: resolveStaticChoiceReading(entry, text, isCorrect),
    meaning: "",
    isCorrect
  };
}
function buildStaticVocabQuestion(entry, seed) {
  if (!entry) return null;
  const answer = String(entry.answer || "");
  const distractors = Array.isArray(entry.distractors) ? entry.distractors : [];
  const choices = shuffleWithSeed(
    [
      normalizeStaticChoice(entry, answer, true),
      ...distractors.map((label) => normalizeStaticChoice(entry, label, false))
    ],
    seed + 31
  );
  return {
    id: entry.id,
    studyDomain: "vocabJlpt",
    examType: entry.examType,
    examTypeLabel: getVocabExamTypeLabel(entry.examType),
    instructionVi: entry.instructionVi,
    stem: entry.stem,
    sentence: entry.sentence,
    sentenceReading: entry.sentenceReading || "",
    target: entry.target,
    prompt: entry.target || entry.sentence || answer,
    correctKey: getVocabExamStudyKey(entry),
    correctText: entry.correctWord || answer,
    correctReading: entry.correctReading || "",
    correctFull: {
      key: getVocabExamStudyKey(entry),
      word: entry.correctWord || answer,
      reading: entry.correctReading || "",
      meaning: entry.meaning || "",
      vi: entry.meaning || "",
      explanationVi: entry.explanationVi || "",
      sentence: entry.sentence || "",
      sentenceVi: entry.sentenceVi || "",
      sentenceReading: entry.sentenceReading || "",
      target: entry.target || "",
      examTypeLabel: getVocabExamTypeLabel(entry.examType)
    },
    choices
  };
}
let rawVocabPool = [];
let rawKanjiPool = [];
let expandedPoolsReady = false;
let expandedPoolsPromise = null;
function loadExpandedStudyPools() {
  if (expandedPoolsReady) return Promise.resolve(true);
  if (expandedPoolsPromise) return expandedPoolsPromise;
  expandedPoolsPromise = Promise.all([
    __vitePreload(() => import("./vocab.v2-BilQu_Iy.js"), true ? [] : void 0, import.meta.url),
    __vitePreload(() => import("./kanji.v2-CS5TJfx7.js"), true ? [] : void 0, import.meta.url)
  ]).then(([vocabModule, kanjiModule]) => {
    rawVocabPool = uniqueByKey(
      sectionEntries(vocabModule.default, "entries").map(normalizeRawVocab).filter(Boolean),
      getVocabStudyKey
    );
    rawKanjiPool = uniqueByKey(
      sectionEntries(kanjiModule.default, "entries").map(normalizeRawKanji).filter(Boolean),
      getKanjiStudyKey
    );
    expandedPoolsReady = true;
    return true;
  }).catch((error) => {
    expandedPoolsPromise = null;
    throw error;
  });
  return expandedPoolsPromise;
}
function getVocabStudyPool() {
  const contentPool = isReady() ? allItems().filter((item) => (item == null ? void 0 : item.kind) === "vocab" && getVocabStudyKey(item)) : [];
  return uniqueByKey([...contentPool, ...rawVocabPool], getVocabStudyKey);
}
function countContentKinds() {
  if (!isReady()) return { vocab: 0, kanji: 0, grammar: 0, ready: false };
  const counts = { vocab: 0, kanji: 0, grammar: 0, ready: true };
  for (const item of allItems()) {
    if ((item == null ? void 0 : item.kind) === "vocab") counts.vocab += 1;
    else if ((item == null ? void 0 : item.kind) === "kanji") counts.kanji += 1;
    else if ((item == null ? void 0 : item.kind) === "grammar") counts.grammar += 1;
  }
  return counts;
}
function getWorldStudyStats() {
  const content2 = countContentKinds();
  const vocabStudyItems = getVocabStudyPool().length;
  const vocabJlptItems = JLPT_N4_VOCAB_EXAM_POOL.length;
  const particleExamItems = JLPT_N4_PARTICLE_EXAM_POOL.length;
  const kanjiBiomeItems = uniqueByKey(Object.values(KANJI_BY_BIOME).flat(), getKanjiStudyKey).length;
  const kanjiStudyItems = getKanjiStudyPool("yama", true).length;
  const conjugationItems = verbs.length + adjectives.length;
  const conjugationExamItems = JLPT_N4_CONJUGATION_EXAM_POOL.length;
  const conjugationForms = CONJUGATION_QUESTION_POOL.length + conjugationExamItems;
  const grammarExamItems = JLPT_N4_GRAMMAR_EXAM_POOL.length;
  const keigoItems = 0;
  const stats = {
    vocab: Math.max(content2.vocab, vocabStudyItems),
    vocabJlpt: vocabJlptItems,
    kanji: Math.max(content2.kanji, kanjiStudyItems),
    grammar: content2.grammar,
    particles: PARTICLE_QUESTIONS.length + particleExamItems,
    particleExamItems,
    grammarEcho: GRAMMAR_ECHO_POOL.length + grammarExamItems,
    conjugationItems,
    conjugationForms,
    conjugationExamItems,
    keigoItems,
    kanjiBiomeItems,
    kanjiStudyItems,
    ready: content2.ready
  };
  return {
    ...stats,
    total: stats.vocab + stats.vocabJlpt + stats.kanji + stats.grammar + stats.particles + stats.grammarEcho + stats.conjugationForms + stats.keigoItems
  };
}
function buildStudyRoute(seed = Date.now()) {
  const stats = getWorldStudyStats();
  const rng = seededRandom(seed);
  return STUDY_ROUTE_DOMAINS.map((domain, index) => {
    const available = domain.id === "vocab" ? stats.vocab : domain.id === "vocabJlpt" ? stats.vocabJlpt : domain.id === "kanji" ? stats.kanjiStudyItems : domain.id === "grammar" ? stats.grammarEcho : domain.id === "particles" ? stats.particles : domain.id === "conjugation" ? stats.conjugationForms : stats.keigoItems;
    return {
      ...domain,
      available,
      target: Math.max(3, Math.min(12, Math.round(available / 120) + 3 + index)),
      seed: Math.floor(rng() * 1e9)
    };
  });
}
function buildStaticVocabExamQuestion(seed = Date.now(), options = {}) {
  const rng = seededRandom(seed);
  if (!JLPT_N4_VOCAB_EXAM_POOL.length) return null;
  const domainId = options.domainId || "vocabJlpt";
  const entry = options.ignoreProgress ? pickFrom(JLPT_N4_VOCAB_EXAM_POOL, rng) : pickStudyItem(domainId, JLPT_N4_VOCAB_EXAM_POOL, getVocabExamStudyKey, { rng, reviewChance: 0.2 });
  return buildStaticVocabQuestion(entry, seed);
}
function buildLegacyWorldVocabQuestion(seed = Date.now(), options = {}) {
  const rng = seededRandom(seed);
  const pool = getVocabStudyPool();
  if (pool.length < 2) return null;
  const correct = options.ignoreProgress ? pickFrom(pool, rng) : pickStudyItem("vocab", pool, getVocabStudyKey, { rng, reviewChance: 0.2 });
  if (!correct) return null;
  const distractors = shuffleWithSeed(
    pool.filter((item) => getVocabStudyKey(item) !== getVocabStudyKey(correct)),
    seed + 17
  ).slice(0, 3);
  const choices = shuffleWithSeed([correct, ...distractors], seed + 31);
  const prompt = correct.meaning || correct.meaningVi || correct.vi || correct.gloss || correct.word || "???";
  return {
    studyDomain: "vocab",
    prompt,
    correctKey: getVocabStudyKey(correct),
    correctText: correct.word || correct.kanji || correct.jp || correct.key,
    correctReading: correct.reading || correct.kana || "",
    correctFull: correct,
    choices: choices.map((item) => ({
      key: getVocabStudyKey(item),
      label: item.word || item.kanji || item.jp || item.key,
      reading: item.reading || item.kana || "",
      romaji: item.romaji || "",
      full: item
    }))
  };
}
function buildWorldVocabQuestion(seed = Date.now(), options = {}) {
  return buildLegacyWorldVocabQuestion(seed, options);
}
function buildWorldJlptVocabQuestion(seed = Date.now(), options = {}) {
  return buildStaticVocabExamQuestion(seed, { ...options, domainId: "vocabJlpt" });
}
function getRandomParticleQuestion(seed = Date.now(), options = {}) {
  const rng = seededRandom(seed);
  if (!options.legacyOnly && JLPT_N4_PARTICLE_EXAM_POOL.length) {
    const entry = options.ignoreProgress ? pickFrom(JLPT_N4_PARTICLE_EXAM_POOL, rng) : pickStudyItem("particles", JLPT_N4_PARTICLE_EXAM_POOL, getParticleStudyKey, { rng, reviewChance: 0.25 });
    if (entry) return { ...entry, examTypeLabel: getGrammarExamTypeLabel(entry.examType || "grammar-form") };
  }
  if (options.ignoreProgress) return pickFrom(PARTICLE_QUESTIONS, rng);
  return pickStudyItem("particles", PARTICLE_QUESTIONS, getParticleStudyKey, { rng, reviewChance: 0.25 });
}
function getNextGrammarQuestion(seed = Date.now(), grammarPoint, options = {}) {
  const rng = seededRandom(seed);
  const examPool = JLPT_N4_GRAMMAR_EXAM_POOL;
  if (!options.legacyOnly && examPool.length) {
    const entry2 = options.ignoreProgress ? pickFrom(examPool, rng) : pickStudyItem("grammar", examPool, getGrammarStudyKey, { rng, reviewChance: 0.25 });
    if (entry2) return { ...entry2, examTypeLabel: getGrammarExamTypeLabel(entry2.examType) };
  }
  const pool = GRAMMAR_ECHO_POOL;
  if (!pool.length) return null;
  const entry = options.ignoreProgress ? pickFrom(pool, rng) : pickStudyItem("grammar", pool, getGrammarStudyKey, { rng, reviewChance: 0.25 });
  return entry ? { ...entry, examType: entry.examType || "grammar-form", examTypeLabel: getGrammarExamTypeLabel(entry.examType || "grammar-form") } : null;
}
function normalizeConjugationEntry(entry, kind) {
  const labels = kind === "verb" ? VERB_FORM_LABELS : ADJECTIVE_FORM_LABELS;
  const formKeys = Object.keys((entry == null ? void 0 : entry.forms) || {}).filter((key) => labels[key]);
  return formKeys.length ? { ...entry, kind, formKeys, labels } : null;
}
const CONJUGATION_POOL = Object.freeze([
  ...verbs.map((entry) => normalizeConjugationEntry(entry, "verb")).filter(Boolean),
  ...adjectives.map((entry) => normalizeConjugationEntry(entry, "adjective")).filter(Boolean)
]);
const CONJUGATION_QUESTION_POOL = Object.freeze(CONJUGATION_POOL.flatMap((entry) => entry.formKeys.map((formKey) => {
  var _a;
  const answer = (_a = entry.forms) == null ? void 0 : _a[formKey];
  if (!answer) return null;
  return {
    id: `${entry.key}:${formKey}`,
    base: entry.dictionary,
    group: entry.group,
    kind: entry.kind,
    formKey,
    formLabel: entry.labels[formKey],
    answer
  };
}).filter(Boolean)));
function buildStaticConjugationQuestion(entry, seed) {
  if (!(entry == null ? void 0 : entry.answer)) return null;
  const answerReading = entry.answerReading || "";
  const answerRomaji = answerReading ? kanaToRomaji(answerReading) : "";
  const choices = shuffleWithSeed(
    [
      { label: entry.answer, isCorrect: true, romaji: answerRomaji },
      ...(entry.distractors || []).map((label) => ({
        label,
        isCorrect: false,
        romaji: ""
      }))
    ],
    seed + 31
  );
  return {
    ...entry,
    examTypeLabel: getGrammarExamTypeLabel(entry.examType || "grammar-form"),
    baseRomaji: entry.baseReading ? kanaToRomaji(entry.baseReading) : "",
    baseMeaning: entry.baseMeaning || "",
    answerRomaji,
    choices
  };
}
function buildConjugationQuestionFromItem(item, seed) {
  if (!(item == null ? void 0 : item.answer)) return null;
  const answer = item.answer;
  const pool = getVocabStudyPool();
  function getVocabEntry(entryKey) {
    if (!entryKey) return null;
    const key = entryKey.split(":").slice(0, 2).join(":");
    return pool.find((v) => getVocabStudyKey(v) === key);
  }
  const baseVocab = getVocabEntry(item.id);
  const baseReading = (baseVocab == null ? void 0 : baseVocab.reading) || "";
  const baseMeaning = (baseVocab == null ? void 0 : baseVocab.meaning) || "";
  const baseRomaji = baseReading ? kanaToRomaji(baseReading) : "";
  let answerReading = "";
  if (baseReading) {
    if (item.kind === "verb") {
      answerReading = conjugateVerb(baseReading, item.formKey) || "";
    } else {
      const isI = item.group === "i-adj" || item.group === "い形容詞";
      answerReading = isI ? conjugateIAdj(baseReading, item.formKey) : conjugateNaAdj(baseReading, item.formKey);
    }
  }
  const answerRomaji = answerReading ? kanaToRomaji(answerReading) : "";
  const vocabKey2 = item.id.split(":").slice(0, 2).join(":");
  let distractors = CONJUGATION_QUESTION_POOL.filter((candidate) => candidate.id.startsWith(vocabKey2 + ":") && candidate.formKey !== item.formKey).filter((candidate) => candidate.answer && candidate.answer !== answer);
  distractors = distractors.filter((v, i, a) => a.findIndex((t) => t.answer === v.answer) === i);
  if (distractors.length < 3) {
    const fallbackDistractors = CONJUGATION_QUESTION_POOL.filter((candidate) => candidate.id !== item.id && candidate.formKey === item.formKey).filter((candidate) => candidate.answer && candidate.answer !== answer);
    distractors = [...distractors, ...fallbackDistractors].filter((v, i, a) => a.findIndex((t) => t.answer === v.answer) === i);
  }
  const distractorCandidates = shuffleWithSeed(distractors, seed + 17).slice(0, 3).map((candidate) => {
    const cVocab = getVocabEntry(candidate.id);
    let cReading = "";
    if (cVocab == null ? void 0 : cVocab.reading) {
      if (candidate.kind === "verb") {
        cReading = conjugateVerb(cVocab.reading, candidate.formKey) || "";
      } else {
        const isI = candidate.group === "i-adj" || candidate.group === "い形容詞";
        cReading = isI ? conjugateIAdj(cVocab.reading, candidate.formKey) : conjugateNaAdj(cVocab.reading, candidate.formKey);
      }
    }
    return {
      label: candidate.answer,
      isCorrect: false,
      romaji: cReading ? kanaToRomaji(cReading) : ""
    };
  });
  const choices = shuffleWithSeed(
    [
      { label: answer, isCorrect: true, romaji: answerRomaji },
      ...distractorCandidates
    ],
    seed + 31
  );
  return {
    id: item.id,
    base: item.base,
    baseRomaji,
    baseMeaning,
    group: item.group,
    kind: item.kind,
    formKey: item.formKey,
    formLabel: item.formLabel,
    answer,
    answerRomaji,
    choices
  };
}
function buildConjugationQuestion(seed = Date.now(), options = {}) {
  const rng = seededRandom(seed);
  if (!options.legacyOnly && JLPT_N4_CONJUGATION_EXAM_POOL.length) {
    const entry = options.ignoreProgress ? pickFrom(JLPT_N4_CONJUGATION_EXAM_POOL, rng) : pickStudyItem("conjugation", JLPT_N4_CONJUGATION_EXAM_POOL, getConjugationStudyKey, { rng, reviewChance: 0.25 });
    const examQuestion = buildStaticConjugationQuestion(entry, seed);
    if (examQuestion) return examQuestion;
  }
  if (CONJUGATION_QUESTION_POOL.length < 4) return null;
  const item = options.ignoreProgress ? pickFrom(CONJUGATION_QUESTION_POOL, rng) : pickStudyItem("conjugation", CONJUGATION_QUESTION_POOL, getConjugationStudyKey, { rng, reviewChance: 0.25 });
  return buildConjugationQuestionFromItem(item, seed);
}
function getKanjiStudyPool(biomeId, allBiomes = false) {
  const pool = allBiomes ? [...Object.values(KANJI_BY_BIOME).flat(), ...rawKanjiPool] : KANJI_BY_BIOME[biomeId] || [];
  return uniqueByKey(pool, getKanjiStudyKey);
}
function getNextKanjiQuestion(biomeId = "yama", seed = Date.now(), options = {}) {
  const pool = getKanjiStudyPool(biomeId, !!options.allBiomes);
  if (pool.length < 4) return null;
  const rng = seededRandom(seed);
  const kanji = options.ignoreProgress ? pickFrom(pool, rng) : pickStudyItem("kanji", pool, getKanjiStudyKey, { rng, reviewChance: 0.25 });
  if (!kanji) return null;
  const { reading: correctReading, type: correctReadingType } = bestKanjiReading(kanji);
  if (!correctReading) return null;
  const distractorCandidates = [];
  const seenReadings = /* @__PURE__ */ new Set([correctReading]);
  const shuffledPool = shuffleWithSeed(pool, seed + 19);
  for (const candidate of shuffledPool) {
    if (getKanjiStudyKey(candidate) === getKanjiStudyKey(kanji)) continue;
    const { reading, type } = bestKanjiReading(candidate);
    if (reading && !seenReadings.has(reading)) {
      seenReadings.add(reading);
      distractorCandidates.push({
        reading,
        type,
        meaning: candidate.meaning
      });
      if (distractorCandidates.length >= 3) break;
    }
  }
  if (distractorCandidates.length < 3) return null;
  return { kanji, correctReading, correctReadingType, distractors: distractorCandidates };
}
const listeners$1 = /* @__PURE__ */ new Set();
function emit(payload) {
  listeners$1.forEach((fn) => {
    try {
      fn(payload);
    } catch (e) {
    }
  });
}
function subscribe(fn) {
  listeners$1.add(fn);
  return () => listeners$1.delete(fn);
}
function reward({ itemKey, quality = 4, kind = "unknown", xp = 5, source = "encounter" } = {}) {
  if (itemKey) {
    try {
      recordReview({ itemKey, quality, meta: { source, kind } });
    } catch (e) {
    }
  }
  try {
    useLearningStore.getState().recordAnswer(true);
  } catch (e) {
    console.warn("[reward] Failed to record answer in store", e);
  }
  emit({ type: "reward", itemKey, quality, kind, xp, source });
}
function fail({ itemKey, kind = "unknown", source = "encounter" } = {}) {
  if (itemKey) {
    try {
      recordReview({ itemKey, quality: 1, meta: { source, kind } });
    } catch (e) {
    }
  }
  try {
    useLearningStore.getState().recordAnswer(false);
  } catch (e) {
    console.warn("[fail] Failed to record answer in store", e);
  }
  emit({ type: "fail", itemKey, kind, source });
}
const WORLD_EVENTS = Object.freeze({
  ENCOUNTER: "v3:encounter",
  DIALOGUE: "v3:dialogue",
  PET_SPEAK: "v3:pet-speak",
  BUILDING_NO_ROUTE: "v3:building-no-route",
  // Specialized learning overlays
  KANJI_ENCOUNTER: "v3:kanji-encounter",
  LISTENING_ENCOUNTER: "v3:listening-encounter",
  GRAMMAR_ENCOUNTER: "v3:grammar-encounter",
  PARTICLE_ENCOUNTER: "v3:particle-encounter",
  CONJUGATION_ENCOUNTER: "v3:conjugation-encounter",
  KEIGO_ENCOUNTER: "v3:keigo-encounter",
  NATURE_SCAN: "v3:nature-scan",
  HUNT_FOUND: "v3:hunt-found"
});
function emitWorldEvent(eventName, detail) {
  if (typeof window === "undefined" || !eventName) return false;
  window.dispatchEvent(new CustomEvent(eventName, { detail }));
  return true;
}
function onWorldEvent(eventName, handler) {
  if (typeof window === "undefined" || !eventName || typeof handler !== "function") return () => {
  };
  window.addEventListener(eventName, handler);
  return () => window.removeEventListener(eventName, handler);
}
const emitEncounter = (encounter) => emitWorldEvent(WORLD_EVENTS.ENCOUNTER, encounter);
const onEncounter = (handler) => onWorldEvent(WORLD_EVENTS.ENCOUNTER, handler);
const emitDialogue = (npc) => emitWorldEvent(WORLD_EVENTS.DIALOGUE, npc);
const onDialogue = (handler) => onWorldEvent(WORLD_EVENTS.DIALOGUE, handler);
const emitPetSpeak = (text) => {
  if (!text) return false;
  return emitWorldEvent(WORLD_EVENTS.PET_SPEAK, { text });
};
const onPetSpeak = (handler) => onWorldEvent(WORLD_EVENTS.PET_SPEAK, handler);
const emitBuildingNoRoute = (building) => emitWorldEvent(WORLD_EVENTS.BUILDING_NO_ROUTE, building);
const emitKanjiEncounter = (detail) => emitWorldEvent(WORLD_EVENTS.KANJI_ENCOUNTER, detail);
const onKanjiEncounter = (handler) => onWorldEvent(WORLD_EVENTS.KANJI_ENCOUNTER, handler);
const emitListeningEncounter = (detail) => emitWorldEvent(WORLD_EVENTS.LISTENING_ENCOUNTER, detail);
const onListeningEncounter = (handler) => onWorldEvent(WORLD_EVENTS.LISTENING_ENCOUNTER, handler);
const emitGrammarEncounter = (encounter) => emitWorldEvent(WORLD_EVENTS.GRAMMAR_ENCOUNTER, encounter);
const onGrammarEncounter = (handler) => onWorldEvent(WORLD_EVENTS.GRAMMAR_ENCOUNTER, handler);
const emitParticleEncounter = (encounter) => emitWorldEvent(WORLD_EVENTS.PARTICLE_ENCOUNTER, encounter);
const onParticleEncounter = (handler) => onWorldEvent(WORLD_EVENTS.PARTICLE_ENCOUNTER, handler);
const emitConjugationEncounter = (encounter) => emitWorldEvent(WORLD_EVENTS.CONJUGATION_ENCOUNTER, encounter);
const onConjugationEncounter = (handler) => onWorldEvent(WORLD_EVENTS.CONJUGATION_ENCOUNTER, handler);
const emitKeigoEncounter = (encounter) => emitWorldEvent(WORLD_EVENTS.KEIGO_ENCOUNTER, encounter);
const ACTION_EMITTERS = Object.freeze({
  VOCAB_TREE: emitEncounter,
  VOCAB_JLPT: emitEncounter,
  KANJI_ROCK: emitKanjiEncounter,
  GRAMMAR_ECHO: emitGrammarEncounter,
  PARTICLE_GATE: emitParticleEncounter,
  CONJUGATION_FORGE: emitConjugationEncounter,
  KEIGO_GATE: emitKeigoEncounter
});
const PREFIX_TO_TYPE = {
  "vocab:": "vocab",
  "kanji:": "kanji",
  "grammar:": "grammar"
};
function makeLearningKey(type, rawValue) {
  const value = String(rawValue || "").trim();
  if (!value) return null;
  if (type !== "vocab" && type !== "kanji" && type !== "grammar") return value;
  return `${type}:${value}`;
}
function makeVocabKey(rawValue) {
  return makeLearningKey("vocab", rawValue);
}
function makeKanjiKey(rawValue) {
  return makeLearningKey("kanji", rawValue);
}
function makeGrammarKey(rawValue) {
  return makeLearningKey("grammar", rawValue);
}
function getGrammarLabel(item) {
  if (!item) return "";
  return String(item.title || item.pattern || item.word || "").trim();
}
function getVocabLabel(item) {
  if (!item) return "";
  return String(item.word || item.kanji || item.japanese || "").trim();
}
function parseLearningKey(key) {
  const rawKey = String(key || "").trim();
  if (!rawKey) return null;
  for (const prefix of Object.keys(PREFIX_TO_TYPE)) {
    if (rawKey.startsWith(prefix)) {
      return {
        type: PREFIX_TO_TYPE[prefix],
        label: rawKey.slice(prefix.length).trim(),
        key: rawKey
      };
    }
  }
  return { type: "mixed", label: rawKey, key: rawKey };
}
function getLearningKeyType(key) {
  var _a;
  return ((_a = parseLearningKey(key)) == null ? void 0 : _a.type) || null;
}
function getItemLearningKey(item, fallbackType = null) {
  if (!item) return null;
  const inferredType = fallbackType || item.type || (item.kanji ? "kanji" : null) || (item.title || item.pattern ? "grammar" : null) || (item.word ? "vocab" : null);
  if (!inferredType) return null;
  if (inferredType === "kanji") return makeKanjiKey(item.kanji || item.word || item.char);
  if (inferredType === "grammar") return makeGrammarKey(getGrammarLabel(item));
  return makeVocabKey(getVocabLabel(item));
}
const SERVER_PROXY_CAPABILITY = "server-proxy";
function useAIKey() {
  const user = useAppStore((s) => s.user);
  const isLoggedIn = Boolean(user == null ? void 0 : user.id);
  return {
    aiKey: isLoggedIn ? SERVER_PROXY_CAPABILITY : null,
    provider: "server",
    hasKey: isLoggedIn,
    isLoggedIn,
    loading: false
  };
}
const FOCUSABLE = [
  "button:not([disabled])",
  "a[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(",");
function useDialogFocus(active2, onClose, { initialFocusRef } = {}) {
  const dialogRef = reactExports.useRef(null);
  const previousFocusRef = reactExports.useRef(null);
  const onCloseRef = reactExports.useRef(onClose);
  reactExports.useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);
  reactExports.useEffect(() => {
    if (!active2 || !dialogRef.current) return void 0;
    const dialog = dialogRef.current;
    previousFocusRef.current = document.activeElement;
    const focusables = () => [...dialog.querySelectorAll(FOCUSABLE)].filter((element) => !element.hidden && element.getAttribute("aria-hidden") !== "true");
    const initial = (initialFocusRef == null ? void 0 : initialFocusRef.current) || focusables()[0] || dialog;
    const frame = requestAnimationFrame(() => initial.focus({ preventScroll: true }));
    const handleKeyDown = (event) => {
      var _a;
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        (_a = onCloseRef.current) == null ? void 0 : _a.call(onCloseRef);
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      if (!items.length) {
        event.preventDefault();
        dialog.focus();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    dialog.addEventListener("keydown", handleKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      dialog.removeEventListener("keydown", handleKeyDown);
      const previous = previousFocusRef.current;
      if (previous == null ? void 0 : previous.isConnected) requestAnimationFrame(() => previous.focus({ preventScroll: true }));
    };
  }, [active2, initialFocusRef]);
  return dialogRef;
}
const CORS_PROXIES = [
  "https://api.allorigins.win/raw?url=",
  "https://corsproxy.io/?",
  "https://corsproxy.org/?",
  "https://api.codetabs.com/v1/proxy?quest="
];
const cache = /* @__PURE__ */ new Map();
const CACHE_TTL = 5 * 60 * 1e3;
function fetchWithTimeout(url, options = {}, timeout = 1e4) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  return fetch(url, { ...options, signal: controller.signal }).finally(() => clearTimeout(id));
}
async function apiFetch(url, options = {}) {
  const {
    timeout = 1e4,
    retries = 1,
    useProxy = false,
    cacheKey = null,
    cacheTTL = CACHE_TTL,
    headers = {},
    ...fetchOpts
  } = options;
  if (cacheKey && cache.has(cacheKey)) {
    const cached = cache.get(cacheKey);
    if (Date.now() - cached.time < cacheTTL) return cached.data;
    cache.delete(cacheKey);
  }
  const mergedHeaders = { "Accept": "application/json", ...headers };
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetchWithTimeout(url, { ...fetchOpts, headers: mergedHeaders }, timeout);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (cacheKey) cache.set(cacheKey, { data, time: Date.now() });
      return data;
    } catch (err) {
      if (attempt === retries && !useProxy) throw err;
      if (attempt < retries) await new Promise((r) => setTimeout(r, 500 * (attempt + 1)));
    }
  }
  if (useProxy) {
    for (const proxy of CORS_PROXIES) {
      try {
        const proxyUrl = proxy + encodeURIComponent(url);
        const res = await fetchWithTimeout(proxyUrl, { ...fetchOpts, headers: mergedHeaders }, timeout);
        if (!res.ok) continue;
        const data = await res.json();
        if (cacheKey) cache.set(cacheKey, { data, time: Date.now() });
        return data;
      } catch (e) {
        continue;
      }
    }
    throw new Error("All CORS proxies failed");
  }
  throw new Error("API fetch failed");
}
function isOnline() {
  return navigator.onLine !== false;
}
function summarizeLessonProgress(progress2) {
  if (!progress2) return "chưa có dữ liệu tiến độ";
  const parts = [];
  if (progress2.vocabViewed) parts.push("đã xem từ vựng");
  if (progress2.grammarViewed) parts.push("đã xem ngữ pháp");
  if (typeof progress2.quizScore === "number") parts.push(`quiz tốt nhất ${progress2.quizScore}%`);
  return parts.length ? parts.join(", ") : "chưa bắt đầu rõ ràng";
}
function buildLearnerProfile() {
  const s = useLearningStore.getState();
  const { xp, level, streak, maxCombo, todayCorrect, todayWrong, trainerStats, srs: srs2, bookmarks, studyHistory } = s;
  const catAccuracy = (ids) => {
    let c = 0, t = 0;
    ids.forEach((id) => {
      const st = trainerStats[id];
      if (st) {
        c += st.correct;
        t += st.total;
      }
    });
    return t > 0 ? { accuracy: Math.round(c / t * 100), correct: c, total: t } : null;
  };
  const vocabAcc = catAccuracy(["vocab-dojo"]);
  const kanjiAcc = catAccuracy(["kanji-academy"]);
  const grammarAcc = catAccuracy(["grammar-arena"]);
  const listeningAcc = catAccuracy(["listening-lab"]);
  const readingAcc = catAccuracy(["reading-room"]);
  const srsEntries = Object.entries(srs2 || {});
  const srsTotal = srsEntries.length;
  const srsNew = srsEntries.filter(([, lv]) => lv === 0).length;
  const srsLearning = srsEntries.filter(([, lv]) => lv >= 1 && lv <= 2).length;
  const srsMastered = srsEntries.filter(([, lv]) => lv >= 3).length;
  const historyEntries = Object.entries(studyHistory || {});
  const studyDays = historyEntries.filter(([, e]) => e && (typeof e === "number" ? e > 0 : (e.total || 0) > 0)).length;
  const totalQuestions = historyEntries.reduce((sum, [, e]) => {
    if (!e) return sum;
    return sum + (typeof e === "number" ? e : e.total || 0);
  }, 0);
  const totalCorrectAll = historyEntries.reduce((sum, [, e]) => {
    if (!e || typeof e === "number") return sum;
    return sum + (e.correct || 0);
  }, 0);
  const totalPlays = Object.values(trainerStats || {}).reduce((sum, st) => sum + (st.plays || 0), 0);
  const bmCount = Object.keys(bookmarks || {}).length;
  const weakKeys = srsEntries.filter(([, lv]) => lv <= 2).map(([k]) => k);
  const weakSample = weakKeys.slice(0, 10).map((k) => {
    const parts = k.split("-");
    return parts.length > 2 ? parts.slice(2).join("-") : k;
  });
  const todayTotal = todayCorrect + todayWrong;
  const todayAcc = todayTotal > 0 ? Math.round(todayCorrect / todayTotal * 100) : null;
  let profile = `Level ${level} (${xp} XP). Streak: ${streak || 0} ngày.`;
  profile += ` SRS: ${srsTotal} mục (Mới: ${srsNew}, Đang học: ${srsLearning}, Thuộc: ${srsMastered}).`;
  profile += ` Tổng câu đã trả lời: ${totalQuestions} (${totalCorrectAll} đúng). Ngày học: ${studyDays}. Lần chơi: ${totalPlays}.`;
  profile += ` Bookmarks: ${bmCount}.`;
  if (maxCombo > 0) profile += ` Combo cao nhất: ${maxCombo}.`;
  if (todayAcc !== null) profile += ` Hôm nay: ${todayCorrect}/${todayTotal} đúng (${todayAcc}%).`;
  const cats = [];
  if (vocabAcc) cats.push(`Từ vựng ${vocabAcc.accuracy}% (${vocabAcc.correct}/${vocabAcc.total})`);
  if (kanjiAcc) cats.push(`Kanji ${kanjiAcc.accuracy}% (${kanjiAcc.correct}/${kanjiAcc.total})`);
  if (grammarAcc) cats.push(`Ngữ pháp ${grammarAcc.accuracy}% (${grammarAcc.correct}/${grammarAcc.total})`);
  if (listeningAcc) cats.push(`Nghe ${listeningAcc.accuracy}% (${listeningAcc.correct}/${listeningAcc.total})`);
  if (readingAcc) cats.push(`Đọc ${readingAcc.accuracy}% (${readingAcc.correct}/${readingAcc.total})`);
  if (cats.length) profile += ` Accuracy theo loại: ${cats.join(", ")}.`;
  else profile += ` Chưa có accuracy theo loại bài tập.`;
  if (weakSample.length) profile += ` Điểm yếu: ${weakSample.join(", ")}.`;
  return profile;
}
function getLastMinnaLessonContext() {
  var _a;
  const data = useDataStore.getState();
  const lastLessonRaw = safeGetItem(STORAGE_KEYS.LAST_MINNA_LESSON);
  const lastLesson = Number.parseInt(lastLessonRaw || "", 10);
  if (!Number.isFinite(lastLesson)) return null;
  const lessonKey = String(lastLesson);
  return {
    lessonNum: lastLesson,
    lessonMeta: (data.minnaLessons || []).find((lesson, index) => {
      var _a2;
      return Number((_a2 = lesson == null ? void 0 : lesson.l) != null ? _a2 : index + 1) === lastLesson;
    }) || null,
    lessonData: ((_a = data.minna) == null ? void 0 : _a[lessonKey]) || null
  };
}
function normalizeWeakSrsLabel(key) {
  return parseLearningKey(key);
}
function getWeakStudyItems(type = "mixed", limit = 8) {
  var _a;
  const learning = useLearningStore.getState();
  const srsEntries = Object.entries(learning.srs || {}).map(([key, level]) => ({ key, level, normalized: normalizeWeakSrsLabel(key) })).filter((entry) => {
    var _a2;
    return (_a2 = entry.normalized) == null ? void 0 : _a2.label;
  }).sort((a, b) => a.level - b.level);
  const allowType = (entryType) => type === "mixed" || entryType === type || entryType === "mixed";
  const picks = [];
  const seen = /* @__PURE__ */ new Set();
  srsEntries.forEach((entry) => {
    if (!allowType(entry.normalized.type)) return;
    if (entry.level > 2) return;
    if (seen.has(entry.normalized.label)) return;
    seen.add(entry.normalized.label);
    picks.push(entry.normalized.label);
  });
  if ((type === "grammar" || type === "mixed") && picks.length < limit) {
    const minnaCtx = getLastMinnaLessonContext();
    const grammarItems = ((_a = minnaCtx == null ? void 0 : minnaCtx.lessonData) == null ? void 0 : _a.grammarItems) || [];
    grammarItems.forEach((item) => {
      const label = (item == null ? void 0 : item.title) || (item == null ? void 0 : item.pattern) || (item == null ? void 0 : item.meaning) || "";
      if (!label || seen.has(label)) return;
      seen.add(label);
      picks.push(label);
    });
  }
  return picks.slice(0, limit);
}
function buildLearnerContextBlock() {
  var _a, _b, _c;
  const learning = useLearningStore.getState();
  useDataStore.getState();
  const profile = buildLearnerProfile();
  const focus = safeGetItem(STORAGE_KEYS.ONBOARDING_FOCUS);
  const lastLessonContext = getLastMinnaLessonContext();
  const lastLesson = lastLessonContext == null ? void 0 : lastLessonContext.lessonNum;
  const lessonMeta = lastLessonContext == null ? void 0 : lastLessonContext.lessonMeta;
  const lessonData = lastLessonContext == null ? void 0 : lastLessonContext.lessonData;
  const lessonKey = lastLesson ? String(lastLesson) : null;
  const lessonProgress = lessonKey ? (_a = learning.lessonProgress) == null ? void 0 : _a[lessonKey] : null;
  const weakItems = Object.entries(learning.srs || {}).filter(([, level]) => level <= 2).slice(0, 5).map(([key]) => {
    const parts = key.split("-");
    return parts.length > 2 ? parts.slice(2).join("-") : key;
  });
  const lines = [profile];
  if (focus) lines.push(`Ưu tiên học tập đã chọn: ${focus}.`);
  if (Number.isFinite(lastLesson)) {
    const title = (lessonMeta == null ? void 0 : lessonMeta.t) || (lessonMeta == null ? void 0 : lessonMeta.title) || (lessonMeta == null ? void 0 : lessonMeta.vi) || "";
    const counts = lessonData ? ` (${((_b = lessonData.vocab) == null ? void 0 : _b.length) || 0} từ, ${((_c = lessonData.grammarItems) == null ? void 0 : _c.length) || 0} mẫu)` : "";
    lines.push(`Bài Minna gần nhất: Bài ${lastLesson}${title ? ` - ${title}` : ""}${counts}.`);
    lines.push(`Tiến độ bài gần nhất: ${summarizeLessonProgress(lessonProgress)}.`);
  }
  if (learning.maxCombo > 0) lines.push(`Combo cao nhất gần đây: ${learning.maxCombo}.`);
  if (weakItems.length) lines.push(`5 điểm yếu cần ưu tiên: ${weakItems.join(", ")}.`);
  return lines.join("\n");
}
const ENDPOINTS = {
  groq: "https://api.groq.com/openai/v1/chat/completions",
  openrouter: "https://openrouter.ai/api/v1/chat/completions",
  openai: "https://api.openai.com/v1/chat/completions"
};
const DEFAULT_MODELS = {
  groq: "llama-3.3-70b-versatile",
  openrouter: "meta-llama/llama-3.3-70b-instruct:free",
  openai: "gpt-3.5-turbo"
};
const GROQ_FALLBACKS = [
  "llama-3.3-70b-versatile",
  "llama-3.1-8b-instant",
  "gemma2-9b-it",
  "mixtral-8x7b-32768"
];
const OPENROUTER_FALLBACKS = [
  "openrouter/free",
  "meta-llama/llama-3.3-70b-instruct:free",
  "google/gemma-3-27b-it:free",
  "mistralai/mistral-small-3.1-24b-instruct:free",
  "meta-llama/llama-3.2-3b-instruct:free"
];
const SYSTEM_PROMPT = `You are a helpful Japanese language tutor for a Vietnamese student studying JLPT N4.
- Always explain in Vietnamese when possible
- Give example sentences in Japanese with Vietnamese translations
- Correct mistakes gently and explain why
- Use simple, clear Vietnamese explanations
- When teaching grammar, provide the pattern, meaning, and 2-3 examples
- When asked about vocabulary, include reading (hiragana), meaning, and usage
- The student is a native Vietnamese speaker, so compare with Vietnamese when helpful
- If learner context is provided, adapt examples and advice to that context naturally`;
let _cooldownUntil = 0;
const COOLDOWN_DURATION = 6e4;
let _inFlight = false;
function getCooldownRemaining() {
  const now = Date.now();
  if (_cooldownUntil > now) return Math.ceil((_cooldownUntil - now) / 1e3);
  return 0;
}
function _activateCooldown(durationMs) {
  _cooldownUntil = Date.now() + durationMs;
}
function detectProvider(apiKey) {
  if (!apiKey) return null;
  if (apiKey.startsWith("gsk_")) return "groq";
  if (apiKey.startsWith("sk-or-")) return "openrouter";
  if (apiKey.startsWith("sk-")) return "openai";
  return "groq";
}
function isAIAvailable(apiKey) {
  return Boolean(apiKey) && isOnline();
}
async function getAIKeyStatus() {
  return { status: "proxy", provider: "server" };
}
let _chatWithAIOverride = null;
function _setChatWithAIForTests(fn) {
  _chatWithAIOverride = fn;
}
async function chatWithAI(message, apiKey, options = {}) {
  var _a, _b, _c, _d, _e, _f, _g;
  if (_chatWithAIOverride) {
    return _chatWithAIOverride(message, apiKey, options);
  }
  if (!apiKey || !isOnline()) throw new Error("Cần đăng nhập và kết nối internet để dùng AI.");
  const cooldownLeft = getCooldownRemaining();
  if (cooldownLeft > 0) {
    throw new Error(`⏳ Đang trong thời gian chờ (${cooldownLeft}s). Vui lòng đợi trước khi gửi lại.`);
  }
  if (_inFlight) {
    throw new Error("Đang xử lý yêu cầu trước đó, vui lòng đợi.");
  }
  _inFlight = true;
  try {
    const shouldIncludeLearnerContext = (_a = options.includeLearnerContext) != null ? _a : !options.jsonMode;
    const learnerContext = shouldIncludeLearnerContext ? buildLearnerContextBlock() : "";
    const systemPrompt = learnerContext ? `${options.systemPrompt || SYSTEM_PROMPT}

Learner context:
${learnerContext}

Use this context when it helps. Keep the answer concise, accurate, and tailored to the learner's current stage.` : options.systemPrompt || SYSTEM_PROMPT;
    const messages = [
      { role: "system", content: systemPrompt },
      ...options.history || [],
      { role: "user", content: message }
    ];
    if ((_b = options.signal) == null ? void 0 : _b.aborted) throw new Error("Đã hủy bởi người dùng.");
    const controller = new AbortController();
    const abortFromCaller = () => controller.abort();
    (_c = options.signal) == null ? void 0 : _c.addEventListener("abort", abortFromCaller, { once: true });
    const timeoutId = setTimeout(() => controller.abort(), options.timeout || 45e3);
    let data;
    let error;
    try {
      ({ data, error } = await supabase.functions.invoke("ai-proxy", {
        body: {
          messages,
          model: options.model || null,
          maxTokens: options.maxTokens || 1e3,
          temperature: (_d = options.temperature) != null ? _d : 0.7,
          jsonMode: Boolean(options.jsonMode)
        },
        signal: controller.signal
      }));
    } catch (invokeError) {
      if (controller.signal.aborted) throw new Error(((_e = options.signal) == null ? void 0 : _e.aborted) ? "Đã hủy bởi người dùng." : "Hết thời gian chờ AI.");
      throw invokeError;
    } finally {
      clearTimeout(timeoutId);
      (_f = options.signal) == null ? void 0 : _f.removeEventListener("abort", abortFromCaller);
    }
    if (error) {
      const status = (_g = error == null ? void 0 : error.context) == null ? void 0 : _g.status;
      if (status === 429) _activateCooldown(COOLDOWN_DURATION);
      throw new Error(status === 429 ? "AI đang quá tải. Vui lòng chờ một phút rồi thử lại." : "Không thể kết nối dịch vụ AI an toàn. Vui lòng thử lại sau.");
    }
    if (typeof (data == null ? void 0 : data.text) !== "string" || !data.text.trim()) {
      throw new Error("Dịch vụ AI không trả về nội dung hợp lệ.");
    }
    return data.text;
  } finally {
    _inFlight = false;
  }
}
async function generateExamples(item, apiKey) {
  const prompt = `Cho tôi 3 câu ví dụ tiếng Nhật (N4 level) sử dụng "${item}".
Mỗi câu gồm: 
1. Câu tiếng Nhật
2. Phiên âm (hiragana)
3. Nghĩa tiếng Việt
Format: mỗi ví dụ cách nhau 1 dòng trống.`;
  return chatWithAI(prompt, apiKey, { maxTokens: 500, temperature: 0.8 });
}
async function grammarCheck(text, apiKey) {
  const prompt = `Kiểm tra ngữ pháp câu tiếng Nhật sau và chỉ ra lỗi (nếu có).
Giải thích bằng tiếng Việt:

"${text}"

Nếu đúng, nói "Câu đúng ngữ pháp!" và giải thích cấu trúc.
Nếu sai, sửa lại, giải thích lỗi, và cho ví dụ đúng.`;
  return chatWithAI(prompt, apiKey, { maxTokens: 500, temperature: 0.3 });
}
async function getConversationPrompt(topic, apiKey) {
  const prompt = `Tạo 1 đoạn hội thoại ngắn (4-6 câu) bằng tiếng Nhật ở trình độ N4 về chủ đề "${topic}".
Format:
A: [câu tiếng Nhật]
B: [câu tiếng Nhật]
...

Sau đó dịch sang tiếng Việt.`;
  return chatWithAI(prompt, apiKey, { maxTokens: 600, temperature: 0.8 });
}
const QUIZ_PROMPT = (type, count, difficulty, profile, weakItems) => {
  const typeMap = { vocab: "từ vựng", grammar: "ngữ pháp", kanji: "kanji", mixed: "hỗn hợp (từ vựng + ngữ pháp + kanji)" };
  const diffMap = { easy: "Dễ (N5-N4 cơ bản)", normal: "Trung bình (N4 chuẩn)", hard: "Khó (N4 trọng điểm, không vượt N4)" };
  let prompt = `Tạo CHÍNH XÁC ${count} câu hỏi trắc nghiệm JLPT ${typeMap[type] || type}.
Độ khó: ${diffMap[difficulty] || difficulty}.`;
  if (profile) prompt += `
Thông tin học viên: ${profile}`;
  if (weakItems == null ? void 0 : weakItems.length) prompt += `
Tập trung mạnh vào điểm yếu sau: ${weakItems.join(", ")}. Ít nhất 60% số câu phải trực tiếp kiểm tra các mục này hoặc mục rất gần với chúng.`;
  prompt += `

QUAN TRỌNG: Trả lời CHÍNH XÁC dạng JSON array, KHÔNG có markdown, KHÔNG có text trước/sau.
Format:
[
  {
    "question": "câu hỏi (tiếng Nhật hoặc tiếng Việt tùy loại)",
    "choices": ["A", "B", "C", "D"],
    "answer": 0,
    "explanation": "giải thích tiếng Việt tại sao đáp án đúng"
  }
]

Quy tắc:
- Chỉ dùng kiến thức N5/N4 phục vụ JLPT N4; không tạo câu hỏi, đáp án hoặc giải thích dùng mẫu N3/N2/N1.
- "answer" là index 0-3 của đáp án đúng trong "choices"
- Các đáp án sai phải hợp lý (cùng loại, dễ nhầm)
- Mỗi câu PHẢI có giải thích chi tiết bằng tiếng Việt
- Câu hỏi từ vựng: cho nghĩa → chọn từ JP hoặc ngược lại
- Câu hỏi ngữ pháp: điền vào chỗ trống hoặc chọn mẫu đúng
- Câu hỏi kanji: cho kanji → chọn đọc/nghĩa đúng`;
  return prompt;
};
async function generateQuiz(options, apiKey) {
  const { type = "mixed", count = 5, difficulty = "normal", personalized = false } = options;
  const profile = personalized ? buildLearnerProfile() : null;
  const weakItems = personalized ? getWeakStudyItems(type, 8) : null;
  const systemPrompt = `You are a JLPT N4 quiz generator. Use only N5/N4 knowledge for JLPT N4 prep; do not introduce N3/N2/N1 grammar, vocabulary, or distractors. You MUST respond with ONLY a valid JSON array. No markdown, no explanation, no extra text — just the JSON array starting with [ and ending with ].`;
  const message = QUIZ_PROMPT(type, count, difficulty, profile, weakItems);
  const response = await chatWithAI(message, apiKey, {
    systemPrompt,
    maxTokens: 2e3,
    temperature: 0.6,
    signal: options.signal,
    timeout: 6e4,
    jsonMode: true
  });
  let parsed;
  try {
    parsed = parseJSON(response);
  } catch (parseErr) {
    console.warn("[AI Quiz] Parse failed:", parseErr.message);
    throw new Error("AI trả về format không hợp lệ. Thử chọn loại khác hoặc bấm Tạo Quiz lại.");
  }
  if (!Array.isArray(parsed)) {
    const arr = (parsed == null ? void 0 : parsed.questions) || (parsed == null ? void 0 : parsed.quiz) || (parsed == null ? void 0 : parsed.data);
    if (Array.isArray(arr)) {
      parsed = arr;
    } else throw new Error("AI trả về format không hợp lệ. Vui lòng thử lại.");
  }
  const valid = parsed.map((q) => ({
    ...q,
    answer: typeof q.answer === "string" ? parseInt(q.answer, 10) : q.answer
  })).filter(
    (q) => q.question && Array.isArray(q.choices) && q.choices.length >= 2 && typeof q.answer === "number" && !isNaN(q.answer) && q.answer >= 0 && q.answer < q.choices.length
  );
  if (valid.length === 0) {
    console.warn("[AI Quiz] Parsed array but 0 valid questions. Raw count:", parsed.length);
    throw new Error(`AI tạo ${parsed.length} câu nhưng format không đúng. Thử lại.`);
  }
  return valid;
}
async function reviewWriting(text, apiKey) {
  const systemPrompt = `Bạn là giáo viên chấm bài viết tiếng Nhật cho học viên Việt Nam trình độ N4.
Luôn trả lời bằng tiếng Việt.
Phân tích chi tiết, nhẹ nhàng, khích lệ.`;
  const message = `Chấm và sửa bài viết tiếng Nhật sau:

"${text}"

Hãy trả lời theo format sau:
📊 ĐIỂM: [X/10]

✅ ĐIỂM TỐT:
- [liệt kê những gì viết tốt]

❌ LỖI CẦN SỬA:
- [lỗi 1]: [giải thích] → [cách sửa đúng]
- [lỗi 2]: ...

📝 BẢN SỬA:
[viết lại toàn bộ bài đã sửa]

💡 GỢI Ý CẢI THIỆN:
- [gợi ý cách diễn đạt tự nhiên hơn, từ vựng nâng cao hơn]

🌟 ĐÁNH GIÁ CHUNG:
[1-2 câu nhận xét tổng quan + khích lệ]`;
  return chatWithAI(message, apiKey, {
    systemPrompt,
    maxTokens: 1500,
    temperature: 0.3
  });
}
const ROLEPLAY_SCENARIOS = [
  { id: "restaurant", label: "🍽️ Nhà hàng", desc: "Gọi món, hỏi thực đơn", character: "nhân viên nhà hàng Nhật Bản" },
  { id: "hospital", label: "🏥 Bệnh viện", desc: "Khám bệnh, mô tả triệu chứng", character: "bác sĩ tại bệnh viện Nhật" },
  { id: "hotel", label: "🏨 Khách sạn", desc: "Check-in, hỏi dịch vụ", character: "lễ tân khách sạn" },
  { id: "station", label: "🚉 Ga tàu", desc: "Mua vé, hỏi đường", character: "nhân viên ga tàu" },
  { id: "shop", label: "🛍️ Mua sắm", desc: "Hỏi giá, size, màu", character: "nhân viên cửa hàng quần áo" },
  { id: "school", label: "🏫 Trường học", desc: "Hỏi bài, nói chuyện với bạn", character: "bạn cùng lớp người Nhật" },
  { id: "work", label: "💼 Công việc", desc: "Họp, xin phép, báo cáo", character: "đồng nghiệp Nhật (senpai)" },
  { id: "postoffice", label: "📮 Bưu điện", desc: "Gửi thư, bưu kiện", character: "nhân viên bưu điện" },
  { id: "bank", label: "🏦 Ngân hàng", desc: "Mở tài khoản, chuyển tiền", character: "nhân viên ngân hàng" },
  { id: "conbini", label: "🏪 Cửa hàng tiện lợi", desc: "Mua đồ, thanh toán", character: "nhân viên konbini" },
  { id: "phone", label: "📞 Gọi điện", desc: "Hẹn gặp, hỏi thông tin", character: "người nghe điện thoại" },
  { id: "jikoshoukai", label: "🙋 Tự giới thiệu", desc: "Giới thiệu bản thân", character: "người Nhật mới gặp tại bữa tiệc" }
];
async function roleplayMessage(scenarioId, history, userMessage, apiKey) {
  const scenario = ROLEPLAY_SCENARIOS.find((s) => s.id === scenarioId) || ROLEPLAY_SCENARIOS[0];
  const systemPrompt = `Bạn đang đóng vai ${scenario.character} trong tình huống "${scenario.desc}" tại Nhật Bản.

QUY TẮC:
1. Trả lời bằng tiếng Nhật (N4 level, đơn giản)
2. Sau mỗi câu trả lời, LUÔN thêm phần đánh giá câu tiếng Nhật của học viên
3. Giữ vai nhất quán, tự nhiên

FORMAT trả lời (LUÔN theo format này):
🗣️ [Câu trả lời tiếng Nhật của bạn - nhập vai]

📖 Dịch: [dịch câu trả lời sang tiếng Việt]

📝 Đánh giá câu của bạn:
- Ngữ pháp: [đúng/có lỗi + sửa]
- Tự nhiên: [tự nhiên/hơi cứng + gợi ý]
- Từ vựng: [phù hợp/có thể dùng từ khác]
- Điểm: [X/10]`;
  return chatWithAI(userMessage, apiKey, {
    systemPrompt,
    history,
    maxTokens: 800,
    temperature: 0.7
  });
}
async function roleplayEvaluate(scenarioId, history, apiKey) {
  const scenario = ROLEPLAY_SCENARIOS.find((s) => s.id === scenarioId) || ROLEPLAY_SCENARIOS[0];
  const systemPrompt = `Bạn là giáo viên tiếng Nhật. Đánh giá tổng thể buổi luyện tập hội thoại.`;
  const message = `Hãy đánh giá tổng thể buổi luyện tập hội thoại tình huống "${scenario.label} - ${scenario.desc}".

Dựa trên các tin nhắn của học viên trong lịch sử hội thoại, hãy đưa ra:

📊 ĐIỂM TỔNG: [X/10]

🎯 Ngữ pháp: [★★★☆☆] - [nhận xét]
🗣️ Tự nhiên: [★★★☆☆] - [nhận xét]
📖 Từ vựng: [★★★☆☆] - [nhận xét]
🎌 Phù hợp tình huống: [★★★☆☆] - [nhận xét]

✅ Điểm mạnh: [liệt kê]
❌ Cần cải thiện: [liệt kê + gợi ý cụ thể]
📚 Từ vựng mới nên học: [5 từ liên quan tình huống]
💪 Lời khuyên: [1-2 câu khích lệ]`;
  return chatWithAI(message, apiKey, {
    systemPrompt,
    history,
    maxTokens: 1e3,
    temperature: 0.4
  });
}
async function analyzeSentence(sentence, apiKey) {
  const systemPrompt = `Bạn là chuyên gia phân tích ngữ pháp tiếng Nhật cho học viên Việt Nam trình độ N4.
Chỉ phân tích bằng kiến thức N5/N4 phục vụ JLPT N4; nếu câu có điểm vượt N4, ghi rõ "ngoài phạm vi N4" và không mở rộng sang N3/N2/N1.
Luôn trả lời chi tiết, dễ hiểu bằng tiếng Việt.`;
  const message = `Phân tích chi tiết câu tiếng Nhật sau:

"${sentence}"

Trả lời theo format:

📝 CÂU GỐC: ${sentence}

🔍 PHÂN TÍCH TỪNG TỪ:
| Từ | Đọc | Nghĩa | Vai trò ngữ pháp |
|---|---|---|---|
| ... | ... | ... | ... |

📐 MẪU NGỮ PHÁP:
- [mẫu 1]: [giải thích ý nghĩa + cách dùng]
- [mẫu 2]: ...

🇻🇳 DỊCH: [bản dịch tiếng Việt tự nhiên]

🔄 CÁCH NÓI KHÁC:
- [câu thay thế 1 (JP)] → [dịch VN]
- [câu thay thế 2 (JP)] → [dịch VN]

📊 ĐỘ KHÓ: [N5/N4/ngoài phạm vi N4] — [giải thích ngắn]`;
  return chatWithAI(message, apiKey, {
    systemPrompt,
    maxTokens: 1200,
    temperature: 0.3
  });
}
async function getStudyAdvice(apiKey) {
  const profile = buildLearnerProfile();
  const systemPrompt = `Bạn là cố vấn học tập JLPT N4 cho học viên Việt Nam.
Dựa trên dữ liệu thực tế, đưa ra lời khuyên cụ thể, thực tế, đo lường được.
Luôn trả lời bằng tiếng Việt, trình bày rõ ràng.`;
  const message = `Phân tích dữ liệu học tập và đưa ra lời khuyên:

📊 HỒ SƠ HỌC VIÊN:
${profile}

Hãy trả lời theo format:

🎯 ĐÁNH GIÁ TỔNG QUAN:
- Trình độ hiện tại: [mô tả]
- Ước tính sẵn sàng JLPT N4: [X]%
- Xu hướng: [đang tiến bộ / cần cố gắng hơn]

📊 PHÂN TÍCH TỪNG KỸ NĂNG:
- 📖 Từ vựng: [★★★☆☆] — [nhận xét + gợi ý]
- 🈁 Kanji: [★★★☆☆] — [nhận xét + gợi ý]
- 📐 Ngữ pháp: [★★★☆☆] — [nhận xét + gợi ý]
- 🎧 Nghe: [★★★☆☆] — [nhận xét + gợi ý]
- 📖 Đọc: [★★★☆☆] — [nhận xét + gợi ý]

📋 KẾ HOẠCH HÔM NAY (15-30 phút):
1. [hoạt động 1] — [thời gian] phút
2. [hoạt động 2] — [thời gian] phút
3. [hoạt động 3] — [thời gian] phút

⚡ TOP 3 ĐIỂM YẾU CẦN TẬP TRUNG:
1. [điểm yếu + cách khắc phục cụ thể]
2. [...]
3. [...]

💪 ĐIỂM MẠNH:
- [liệt kê + khuyến khích duy trì]

🌟 LỜI KHUYÊN:
[2-3 câu khích lệ, động viên tiếp tục học]`;
  return chatWithAI(message, apiKey, {
    systemPrompt,
    maxTokens: 1500,
    temperature: 0.5
  });
}
async function explainItem(item, type, apiKey) {
  const systemPrompt = `Bạn là gia sư tiếng Nhật. Giải thích ngắn gọn cho học viên Việt Nam N4.
Trả lời dưới 200 từ, súc tích, thực dụng.`;
  let itemDesc = "";
  if (type === "vocab") {
    itemDesc = `Từ vựng: ${item.word || item.kanji || ""}${item.reading ? ` (${item.reading})` : ""}${item.meaning ? ` — ${item.meaning}` : ""}`;
  } else if (type === "kanji") {
    itemDesc = `Kanji: ${item.kanji || item.char || ""}${item.kunyomi ? ` (kun: ${item.kunyomi})` : ""}${item.onyomi ? ` (on: ${item.onyomi})` : ""}${item.meaning ? ` — ${item.meaning}` : ""}`;
  } else {
    itemDesc = `Ngữ pháp: ${item.title || item.pattern || ""}${item.meaning ? ` — ${item.meaning}` : ""}`;
  }
  const message = `${itemDesc}

Giải thích ngắn gọn:
🧠 Mẹo nhớ: [mnemonic dễ nhớ cho người Việt]
📝 Cách dùng: [1-2 ví dụ thực tế]
⚠️ Lỗi hay gặp: [lỗi phổ biến khi dùng]
🔗 Liên quan: [2-3 từ/mẫu tương tự hoặc liên quan]`;
  return chatWithAI(message, apiKey, {
    systemPrompt,
    maxTokens: 500,
    temperature: 0.6
  });
}
async function analyzeMistakes(trainerStats, srs2, bookmarks, apiKey) {
  const systemPrompt = `You are a JLPT N4 learning analytics expert. You MUST respond with ONLY valid JSON. No markdown, no explanation — just a single JSON object starting with { and ending with }.`;
  const statsSummary = Object.entries(trainerStats).filter(([, s]) => s.total > 0).map(([id, s]) => `${id}: ${s.correct}/${s.total} (${Math.round(s.correct / s.total * 100)}%)`).join("; ");
  const weakItems = Object.entries(srs2).filter(([, lv]) => lv <= 2).slice(0, 15).map(([k]) => {
    const p = k.split("-");
    return p.length > 2 ? p.slice(2).join("-") : k;
  });
  const message = `Phân tích dữ liệu học tập JLPT N4:
Thống kê: ${statsSummary || "Chưa có dữ liệu"}
Điểm yếu SRS: ${weakItems.join(", ") || "Chưa có"}
Bookmarks: ${Object.values(bookmarks).flat().length} items

Trả JSON:
{
  "overallScore": 0-100,
  "categories": [{ "name": "tên", "accuracy": 0-100, "status": "strong/ok/weak", "tip": "gợi ý" }],
  "errorPatterns": [{ "pattern": "loại lỗi", "description": "mô tả", "fix": "cách sửa" }],
  "recommendations": [{ "action": "hành động", "target": "mục tiêu", "priority": "high/medium/low" }],
  "summary": "nhận xét tổng quan 2-3 câu tiếng Việt"
}`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1500, temperature: 0.3, jsonMode: true });
  return parseJSON(raw);
}
async function generateStory(topic, difficulty, apiKey) {
  const systemPrompt = `You are a Japanese interactive story writer for Vietnamese N4 learners. You MUST respond with ONLY valid JSON. No markdown, no extra text — just a single JSON object.`;
  const diffMap = { easy: "N5-N4 cơ bản, câu ngắn", normal: "N4 chuẩn", hard: "N4 nâng cao" };
  const message = `Tạo đoạn mở đầu truyện tương tác tiếng Nhật (${diffMap[difficulty] || "N4 chuẩn"}) về "${topic}".

Trả JSON:
{
  "title": "tựa đề tiếng Nhật",
  "titleVn": "tựa đề tiếng Việt",
  "paragraph": "đoạn văn 3-4 câu tiếng Nhật (N4 level)",
  "paragraphVn": "dịch tiếng Việt",
  "vocab": [{ "word": "từ JP", "reading": "hiragana", "meaning": "nghĩa VN" }],
  "choices": [
    { "text": "lựa chọn 1 bằng tiếng Nhật", "textVn": "dịch VN" },
    { "text": "lựa chọn 2 bằng tiếng Nhật", "textVn": "dịch VN" },
    { "text": "lựa chọn 3 bằng tiếng Nhật", "textVn": "dịch VN" }
  ]
}`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1500, temperature: 0.8, jsonMode: true });
  return parseJSON(raw);
}
async function continueStory(storyHistory, choiceText, apiKey) {
  const systemPrompt = `You are a Japanese interactive story writer for Vietnamese N4 learners. You MUST respond with ONLY valid JSON. No markdown, no extra text — just a single JSON object.`;
  const historyContext = storyHistory.map(
    (s, i) => `Phần ${i + 1}: ${s.paragraph}
Chọn: ${s.chosenChoice || ""}`
  ).join("\n");
  const message = `Tiếp tục truyện tương tác. Lịch sử:
${historyContext}

Người chơi chọn: "${choiceText}"

Viết đoạn tiếp theo (3-4 câu N4) và 3 lựa chọn mới.
${storyHistory.length >= 4 ? 'Đây là đoạn cuối — kết thúc truyện và thêm "isEnding": true, không cần choices.' : ""}

Trả JSON:
{
  "paragraph": "đoạn tiếp theo JP",
  "paragraphVn": "dịch VN",
  "vocab": [{ "word": "từ", "reading": "đọc", "meaning": "nghĩa" }],
  "choices": [{ "text": "JP", "textVn": "VN" }],
  "isEnding": false
}`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1500, temperature: 0.8, jsonMode: true });
  return parseJSON(raw);
}
async function reviewDiary(text, apiKey) {
  const systemPrompt = `You are a Japanese diary teacher for Vietnamese N4 learners. You MUST respond with ONLY valid JSON. No markdown, no extra text — just a single JSON object.`;
  const message = `Chấm nhật ký tiếng Nhật:
"${text}"

Trả JSON:
{
  "score": 75,
  "corrections": [{ "original": "câu gốc", "corrected": "câu đã sửa", "explanation": "giải thích VN" }],
  "goodPoints": ["điểm tốt 1", "điểm tốt 2"],
  "suggestions": ["gợi ý cải thiện 1", "gợi ý 2"],
  "rewritten": "toàn bộ nhật ký đã sửa và cải thiện",
  "newVocab": [{ "word": "từ mới nên học", "reading": "đọc", "meaning": "nghĩa" }],
  "encouragement": "lời khích lệ bằng tiếng Việt"
}`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1500, temperature: 0.3, jsonMode: true });
  return parseJSON(raw);
}
async function generateWordMap(seedWord, apiKey) {
  const systemPrompt = `You are a Japanese N4 vocabulary expert. You MUST respond with ONLY valid JSON. No markdown, no extra text — just a single JSON object.`;
  const message = `Tạo mind map từ vựng cho từ "${seedWord}" (N4 level).

Trả JSON:
{
  "center": { "word": "${seedWord}", "reading": "hiragana", "meaning": "nghĩa VN" },
  "branches": [
    { "word": "từ liên quan", "reading": "hiragana", "meaning": "nghĩa", "relation": "loại quan hệ", "color": "màu CSS" }
  ]
}

Loại quan hệ: synonym, antonym, category, compound, similar-reading, related-topic, collocation, opposite
Màu: #4CAF50 (synonym), #F44336 (antonym), #2196F3 (category), #FF9800 (compound), #9C27B0 (similar), #00BCD4 (related), #795548 (collocation)
Tạo 6-8 branches đa dạng, ưu tiên từ N4-N5.`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1e3, temperature: 0.7, jsonMode: true });
  return parseJSON(raw);
}
async function predictJLPT(apiKey) {
  const profile = buildLearnerProfile();
  const systemPrompt = `You are a JLPT score prediction expert. You MUST respond with ONLY valid JSON. No markdown, no extra text — just a single JSON object.

CRITICAL SCORING RULES based on data volume:
- If SRS items < 50: totalScore MUST be below 60/180, passingChance below 20%. The learner barely started.
- If SRS items 50-100: totalScore MUST be below 90/180, passingChance below 40%. Still early stage.
- If SRS items 100-200: totalScore range 50-120 depending on accuracy. Moderate progress.
- If SRS items 200+: Score based on actual accuracy and coverage. Advanced learner.
- If a category (Nghe, Đọc, etc.) has NO accuracy data, that section score MUST be below 15/60 and level D.
- NEVER give high scores without strong quantitative evidence. Be conservative and honest.`;
  const message = `Dựa trên dữ liệu học viên, dự đoán điểm JLPT N4:
${profile}

Return ONLY this JSON object (no other text):
{
  "totalScore": 120,
  "passingChance": 75,
  "sections": {
    "vocabulary": { "score": 40, "max": 60, "level": "B", "comment": "nhận xét VN" },
    "grammar": { "score": 35, "max": 60, "level": "C", "comment": "nhận xét" },
    "reading": { "score": 25, "max": 60, "level": "C", "comment": "nhận xét" },
    "listening": { "score": 20, "max": 60, "level": "D", "comment": "nhận xét" }
  },
  "strengths": ["điểm mạnh 1", "điểm mạnh 2"],
  "weaknesses": ["điểm yếu 1", "điểm yếu 2"],
  "studyPlan": [{ "week": 1, "focus": "trọng tâm", "activities": "hoạt động cụ thể" }],
  "readinessLevel": "almost",
  "motivation": "lời khích lệ bằng tiếng Việt 1-2 câu"
}

Rules: totalScore 0-180, passingChance 0-100, each section score 0-60, level one of A/B/C/D, readinessLevel one of not-ready/almost/ready/confident. All comments in Vietnamese. Passing: total>=90 AND each section>=19. Score MUST reflect actual data volume — do NOT inflate scores for learners with little data.`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1500, temperature: 0.4, jsonMode: true });
  return parseJSON(raw);
}
async function simulateScene(situation, history, userMessage, apiKey) {
  const systemPrompt = `Bạn đang mô phỏng tình huống thực tế tại Nhật Bản: "${situation}".

QUY TẮC:
1. Trả lời bằng tiếng Nhật (N4 level) — giữ vai nhất quán
2. SAU câu trả lời, LUÔN thêm đánh giá câu tiếng Nhật của học viên
3. Tự nhiên, thực tế

FORMAT:
🗣️ [Câu trả lời tiếng Nhật — nhập vai]

📖 Dịch: [tiếng Việt]

📝 Đánh giá:
- Ngữ pháp: [đúng/sai + sửa]
- Tự nhiên: [tự nhiên/cứng + gợi ý]
- Điểm: [X/10]`;
  return chatWithAI(userMessage, apiKey, {
    systemPrompt,
    history,
    maxTokens: 800,
    temperature: 0.7
  });
}
async function generateGrammarDrill(weakPatterns, difficulty, count, apiKey) {
  const systemPrompt = `You are a JLPT N4 grammar quiz generator. You MUST respond with ONLY a valid JSON array. No markdown, no explanation, no extra text — just the JSON array.`;
  const diffMap = { easy: "Dễ (N5-N4 cơ bản)", normal: "Trung bình (N4)", hard: "Khó (N4 nâng cao)" };
  const message = `Create ${count} MCQ grammar questions for JLPT N4 learners (Vietnamese speakers).
Difficulty: ${diffMap[difficulty] || "N4"}.
${(weakPatterns == null ? void 0 : weakPatterns.length) ? `Focus on these weak patterns: ${weakPatterns.join(", ")}` : ""}

Return ONLY this JSON array (no other text):
[{"question": "日本語の文＿＿正しい答え", "options": ["A", "B", "C", "D"], "answer": 0, "grammar": "grammar pattern name", "explanation": "Vietnamese explanation of why the answer is correct"}]

Rules:
- "question" must be a Japanese sentence with ＿＿ blank
- "options" array of exactly 4 choices (strings)
- "answer" is the 0-based index (0, 1, 2, or 3) of the correct option
- "grammar" is the related grammar pattern
- "explanation" is in Vietnamese
- Wrong options must be plausible (easy to confuse)
- Output ONLY the JSON array, starting with [ and ending with ]`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 2500, temperature: 0.4, jsonMode: true });
  const parsed = parseJSON(raw);
  const arr = Array.isArray(parsed) ? parsed : (parsed == null ? void 0 : parsed.questions) || [];
  if (!Array.isArray(arr) || arr.length === 0) throw new Error("AI không tạo được câu hỏi. Vui lòng thử lại.");
  return arr.map((q) => {
    const opts = q.options || q.choices;
    return { ...q, options: opts, choices: opts };
  }).filter(
    (q) => q.question && Array.isArray(q.options) && q.options.length >= 2 && typeof q.answer === "number" && q.answer >= 0 && q.answer < q.options.length
  );
}
async function investigateKanji(kanji, apiKey) {
  const systemPrompt = `You are a Kanji expert for Vietnamese JLPT N4 learners. You MUST respond with ONLY valid JSON. No markdown, no explanation outside JSON — just a single JSON object starting with { and ending with }.`;
  const message = `Analyze this kanji in detail: ${kanji}

Return ONLY this JSON object:
{"kanji": "${kanji}", "meaning": "Vietnamese meaning", "onyomi": "ON reading", "kunyomi": "KUN reading", "hanviet": "Han-Viet reading", "strokes": 8, "radicals": [{"radical": "部首", "name": "radical name", "meaning": "meaning in Vietnamese"}], "etymology": "Origin story in Vietnamese (2-3 sentences)", "mnemonic": "Memory trick for Vietnamese learners (creative)", "lookalikes": [{"kanji": "similar kanji", "meaning": "meaning", "difference": "how to distinguish (Vietnamese)"}], "compounds": [{"word": "compound word", "reading": "hiragana", "meaning": "Vietnamese meaning"}], "funFact": "Fun fact about this kanji (1 sentence, Vietnamese)"}

All descriptions and explanations should be in Vietnamese.
Provide 2-3 radicals, 2-3 lookalikes, and 3-5 common compounds.
Output ONLY the JSON — no other text.`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1200, temperature: 0.5, jsonMode: true });
  return parseJSON(raw);
}
async function simplifyText(japaneseText, apiKey) {
  const systemPrompt = `You are a Japanese text simplification expert for N4 learners. Rewrite toward N5/N4 only and label anything harder as outside N4 instead of teaching N3/N2/N1. You MUST respond with ONLY valid JSON. No markdown, no extra text — just a single JSON object.`;
  const message = `Đơn giản hóa văn bản sau sang N4 level:
"${japaneseText}"

Trả JSON:
{
  "original": "văn bản gốc",
  "simplified": "văn bản đã đơn giản hóa (N4, câu ngắn, từ đơn giản)",
  "simplifiedVn": "dịch VN",
  "annotations": [{ "word": "từ khó", "reading": "hiragana", "meaning": "nghĩa VN", "level": "ngoài phạm vi N4" }],
  "vocabList": [{ "word": "từ mới", "reading": "đọc", "meaning": "nghĩa", "example": "ví dụ ngắn" }],
  "comprehensionQs": [{ "question": "câu hỏi VN", "choices": ["A", "B", "C"], "answer": 0 }]
}`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 2e3, temperature: 0.3, jsonMode: true });
  return parseJSON(raw);
}
async function generateLyrics(topic, mood, apiKey) {
  const systemPrompt = `You are a J-pop songwriter creating original N4-level Japanese lyrics. You MUST respond with ONLY valid JSON. No markdown, no extra text — just a single JSON object.`;
  const moodMap = { happy: "vui tươi", sad: "buồn nhẹ", energetic: "sôi động", calm: "nhẹ nhàng", romantic: "lãng mạn" };
  const message = `Viết lời bài hát J-pop ngắn (N4 level):
Chủ đề: ${topic}
Tâm trạng: ${moodMap[mood] || mood}

Trả JSON:
{
  "title": "tựa đề JP",
  "titleVn": "tựa đề VN",
  "mood": "${mood}",
  "sections": [
    {
      "type": "verse1/chorus/verse2",
      "lines": [
        { "jp": "dòng tiếng Nhật", "reading": "hiragana", "vn": "dịch VN" }
      ]
    }
  ],
  "vocabHighlights": [{ "word": "từ hay", "reading": "đọc", "meaning": "nghĩa", "note": "ghi chú" }],
  "grammarNotes": [{ "pattern": "mẫu ngữ pháp trong bài", "explanation": "giải thích VN" }]
}

Tạo 2 verse + 1 chorus, mỗi section 3-4 dòng. Dùng từ N4-N5.`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1500, temperature: 0.8, jsonMode: true });
  return parseJSON(raw);
}
async function batchTranslate(sentences, apiKey) {
  return _runBatchWithChunking(sentences, apiKey, {
    label: "translate",
    buildPrompt: (slice) => {
      const numbered = slice.map((s, i) => `${i + 1}. ${s}`).join("\n");
      return `Dịch ĐẦY ĐỦ từng câu tiếng Nhật sau sang tiếng Việt tự nhiên, súc tích.

QUY TẮC:
• PHẢI trả về ĐÚNG ${slice.length} phần tử trong JSON array — không được bỏ sót bất kỳ câu nào, không gộp 2 câu thành 1.
• Giữ đúng thứ tự input → output.
• Dịch tự nhiên kiểu văn nói/văn viết Việt, không dịch word-by-word.
• Giữ ý, không rút gọn quá mức; nếu câu dài vẫn phải dịch TRỌN NGHĨA.
• KHÔNG kèm giải thích, KHÔNG markdown, CHỈ trả về JSON array of strings.

Input (${slice.length} câu):
${numbered}`;
    },
    tokensPerItem: 110,
    chunkSize: 24,
    temperature: 0.2
  });
}
async function batchRomaji(sentences, apiKey) {
  return _runBatchWithChunking(sentences, apiKey, {
    label: "romaji",
    buildPrompt: (slice) => {
      const numbered = slice.map((s, i) => `${i + 1}. ${s}`).join("\n");
      return `Phiên âm từng câu tiếng Nhật sau sang romaji Hepburn sửa đổi (kiểu Minna no Nihongo).

QUY TẮC BẮT BUỘC:
• PHẢI trả về ĐÚNG ${slice.length} phần tử — không được bỏ sót, không gộp 2 câu thành 1.
• Giữ NGUYÊN thì/thể của động từ — không chuyển về thể từ điển, không chuyển về thể ます. 食べる ⇒ "taberu" (KHÔNG "tabemasu"). 食べます ⇒ "tabemasu". 食べた ⇒ "tabeta".
• Kanji đứng một mình (không okurigana): dùng âm on phổ biến. 語 ⇒ "go" (KHÔNG "kataru"); 人 ⇒ "hito"; 日 ⇒ "hi/nichi"; 本 ⇒ "hon/moto" tùy nghĩa.
• Kanji + okurigana: phiên âm đúng thể hiển thị. 負ける ⇒ "makeru"; 負けます ⇒ "makemasu"; 負けた ⇒ "maketa"; 食べている ⇒ "tabete iru".
• Hậu tố お-/ご-: giữ nguyên.
• Trợ từ は ⇒ "wa", へ ⇒ "e", を ⇒ "o".
• づ ⇒ "zu", ぢ ⇒ "ji". ん trước nguyên âm/y thêm dấu ', ví dụ 店員 ⇒ "ten'in".
• Chōon ー dùng nguyên âm kép. コーヒー ⇒ "koohii".
• Cách từ theo ngữ nghĩa: 私は学生です ⇒ "watashi wa gakusei desu".
• Dấu câu giữ nguyên input. CHỈ trả về ONE JSON array of strings.

Ví dụ:
Input:
1. 私は日本語ကို勉強します。
2. 彼は試合に負けた。
3. 語は難しい。
Output:
["watashi wa nihongo o benkyou shimasu.", "kare wa shiai ni maketa.", "go wa muzukashii."]

Input hiện tại (${slice.length} câu):
${numbered}`;
    },
    tokensPerItem: 90,
    chunkSize: 30,
    temperature: 0.1
  });
}
async function _runBatchWithChunking(sentences, apiKey, opts) {
  if (!Array.isArray(sentences) || !sentences.length) return [];
  const { buildPrompt, chunkSize = 25, tokensPerItem = 90, temperature = 0.2, label = "batch" } = opts;
  const chunks = [];
  for (let i = 0; i < sentences.length; i += chunkSize) {
    chunks.push({ start: i, items: sentences.slice(i, i + chunkSize) });
  }
  const CONCURRENCY = 3;
  const results = new Array(sentences.length).fill(null);
  let cursor = 0;
  async function worker() {
    while (cursor < chunks.length) {
      const idx = cursor++;
      const { start, items } = chunks[idx];
      const part = await _translateChunkWithRetry(items, apiKey, buildPrompt, tokensPerItem, temperature);
      for (let j = 0; j < items.length; j++) {
        results[start + j] = part[j] != null ? String(part[j]) : "";
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, chunks.length) }, () => worker()));
  for (let i = 0; i < results.length; i++) if (results[i] == null) results[i] = "";
  return results;
}
async function _translateChunkWithRetry(items, apiKey, buildPrompt, tokensPerItem, temperature, depth = 0) {
  if (!items.length) return [];
  const message = buildPrompt(items);
  const maxTokens = Math.min(4e3, Math.max(400, items.length * tokensPerItem + 600));
  let raw = "";
  try {
    raw = await chatWithAI(message, apiKey, { maxTokens, temperature, jsonMode: true });
  } catch (e) {
    console.warn("[batch] chatWithAI failed", (e == null ? void 0 : e.message) || e);
    return new Array(items.length).fill("");
  }
  const parsed = _extractBatchResult(raw, items.length);
  const isComplete = parsed.length === items.length && parsed.every((s) => s && String(s).trim());
  if (isComplete) return parsed;
  if (depth >= 3 || items.length <= 1) {
    if (items.length === 1) return [parsed[0] || ""];
    return parsed;
  }
  const half = Math.max(1, Math.ceil(items.length / 2));
  const left = await _translateChunkWithRetry(items.slice(0, half), apiKey, buildPrompt, tokensPerItem, temperature, depth + 1);
  const right = await _translateChunkWithRetry(items.slice(half), apiKey, buildPrompt, tokensPerItem, temperature, depth + 1);
  return [...left, ...right];
}
function _extractBatchResult(raw, expectedLen) {
  if (!raw) return new Array(expectedLen).fill("");
  let parsed;
  try {
    parsed = parseJSON(raw);
  } catch (e) {
    parsed = null;
  }
  const takeArr = (arr) => {
    const out = new Array(expectedLen).fill("");
    for (let i = 0; i < expectedLen && i < arr.length; i++) {
      out[i] = arr[i] != null ? String(arr[i]) : "";
    }
    return out;
  };
  if (Array.isArray(parsed)) return takeArr(parsed);
  if (parsed && typeof parsed === "object") {
    const arrVal = Object.values(parsed).find((v) => Array.isArray(v));
    if (arrVal) return takeArr(arrVal);
    const vals = Object.values(parsed);
    if (vals.length > 0 && vals.every((v) => typeof v === "string")) return takeArr(vals);
  }
  const lines = String(raw).split("\n").map((l) => l.replace(/^\s*(\d+)\.\s*/, "").replace(/^["\-•]\s*/, "").replace(/[",]\s*$/, "").trim()).filter((l) => l && !/^[{}\[\]]$/.test(l) && !/^["']\s*:/.test(l));
  return takeArr(lines);
}
const APP_FEATURES_MAP = `Features:
- /trainer/daily-practice: Luyện tập hằng ngày SRS (từ vựng + kanji + ngữ pháp)
- /trainer/vocab-dojo: Flashcard, Quiz, Match từ vựng
- /trainer/kanji-academy: Flashcard, Quiz, Nghe, Viết kanji
- /trainer/grammar-arena: Chia động từ, Trợ từ, Sắp xếp câu, Diễn đạt lại
- /trainer/listening-lab: Nghe chép, Radio N4, Nhận diện giọng nói
- /trainer/reading-room: Đọc hiểu (email, thực đơn, thông báo, lịch)
- /trainer/boss-battle: Boss fight nâng cao (hỗn hợp khó)
- /trainer/puzzle-world: Ô chữ, Tìm từ, Hangman
- /trainer/mind-tricks: Trí nhớ, Pattern, Tốc độ
- /trainer/story-mode: Phiêu lưu tình huống thực tế
- /trainer/minna-lessons: Bài 1-50 Minna no Nihongo (từ vựng + ngữ pháp)
- /trainer/jlpt-mock: Thi thử JLPT N4 đầy đủ (có đồng hồ)
- /dictionary: Tra từ điển Jisho online
- /tatoeba: Tra câu ví dụ Tatoeba
- /content/vocab: Tra cứu từ vựng N4 (bảng đầy đủ)
- /content/kanji: Tra cứu kanji N4 (bảng đầy đủ)
- /content/grammar: Tra cứu ngữ pháp N4 (bảng đầy đủ)
- /ai-tutor: Chat AI, kiểm tra ngữ pháp, tạo ví dụ, phân tích câu, cố vấn học tập, nhập vai, free talk
- /ai-tutor?feature=ai-quiz: Quiz AI cá nhân hóa theo điểm yếu
- /ai-tutor?feature=ai-grammar-drill: Bài tập ngữ pháp adaptive thích ứng
- /ai-tutor?feature=ai-mistakes: Phân tích lỗi sai & điểm yếu
- /ai-tutor?feature=ai-story: Truyện tương tác phân nhánh
- /ai-tutor?feature=ai-diary: Nhật ký tiếng Nhật, AI chấm & sửa
- /ai-tutor?feature=ai-wordmap: Mind map sơ đồ liên tưởng từ vựng
- /ai-tutor?feature=ai-jlpt-predictor: Dự đoán điểm JLPT dựa trên dữ liệu
- /ai-tutor?feature=ai-scene: Mô phỏng tình huống thực tế (quán ăn, bệnh viện...)
- /ai-tutor?feature=ai-kanji-detective: Giải mã kanji: bộ thủ, mẹo nhớ, ví dụ
- /ai-tutor?feature=ai-news: Đơn giản hóa tin tức tiếng Nhật
- /ai-tutor?feature=ai-lyrics: Học tiếng Nhật qua lời bài hát
- /settings: Cài đặt app, TTS, giao diện, backup`;
async function navigateApp(userQuery, apiKey) {
  const systemPrompt = `You are a Japanese learning app assistant. Help user find the right feature. You MUST respond with ONLY valid JSON. No markdown, no extra text.

${APP_FEATURES_MAP}`;
  const message = `User muốn: "${userQuery}"

Phân tích nhu cầu và gợi ý 2-4 tính năng CHÍNH XÁC nhất. Ưu tiên trainer routes (/trainer/...) cho luyện tập, AI features (/ai-tutor?feature=...) cho công cụ AI, content routes (/content/...) cho tra cứu.

Trả JSON (KHÔNG có markdown, KHÔNG có text khác):
{
  "recommendations": [
    { "path": "/route", "title": "tên tính năng", "icon": "emoji", "reason": "tại sao phù hợp với nhu cầu này (VN, 1 câu cụ thể)" }
  ],
  "tip": "mẹo học hiệu quả cho nhu cầu này (VN, 1-2 câu)"
}`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 600, temperature: 0.5, jsonMode: true });
  return parseJSON(raw);
}
function parseJSON(raw) {
  if (!raw || typeof raw !== "string") {
    throw new Error("AI không trả về dữ liệu. Vui lòng thử lại.");
  }
  let str = raw.replace(/```json?\s*/gi, "").replace(/```/g, "").trim();
  str = extractJSON(str);
  str = str.replace(/,\s*([\]\}])/g, "$1").replace(/([{,]\s*)([a-zA-Z_]\w*)\s*:/g, '$1"$2":').replace(/:\s*'([^']*)'\s*([,\}\]])/g, ': "$1"$2').replace(/\/\/[^\n]*/g, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/[\x00-\x1F\x7F]/g, (c) => c === "\n" || c === "\r" || c === "	" ? c : "").replace(/,\s*([\]\}])/g, "$1");
  try {
    return JSON.parse(str);
  } catch (e1) {
    const fixed = tryFixTruncated(str);
    if (fixed !== null) return fixed;
    const objMatch = str.match(/\{[\s\S]*\}/);
    const arrMatch = str.match(/\[[\s\S]*\]/);
    const fallback = objMatch ? objMatch[0] : arrMatch ? arrMatch[0] : null;
    if (fallback && fallback !== str) {
      try {
        return JSON.parse(fallback);
      } catch (e) {
      }
    }
    console.warn("[AI parseJSON] Failed after all attempts:", e1.message);
    throw new Error("AI trả về format không hợp lệ. Vui lòng thử lại.");
  }
}
function extractJSON(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "{" || str[i] === "[") {
      const open = str[i];
      const close = open === "{" ? "}" : "]";
      let depth = 0;
      let inStr = false;
      let escape = false;
      for (let j = i; j < str.length; j++) {
        const c = str[j];
        if (escape) {
          escape = false;
          continue;
        }
        if (c === "\\") {
          escape = true;
          continue;
        }
        if (c === '"') {
          inStr = !inStr;
          continue;
        }
        if (inStr) continue;
        if (c === open) depth++;
        else if (c === close) {
          depth--;
          if (depth === 0) return str.substring(i, j + 1);
        }
      }
      return str.substring(i);
    }
  }
  return str;
}
function tryFixTruncated(str) {
  let inStr = false, escape = false;
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (c === "\\") {
      escape = true;
      continue;
    }
    if (c === '"') {
      inStr = !inStr;
      continue;
    }
    if (inStr) continue;
    if (c === "{" || c === "[") stack.push(c);
    else if (c === "}") {
      if (stack.length && stack[stack.length - 1] === "{") stack.pop();
    } else if (c === "]") {
      if (stack.length && stack[stack.length - 1] === "[") stack.pop();
    }
  }
  if (stack.length === 0) return null;
  let fixed = str;
  if (inStr) fixed += '"';
  fixed = fixed.replace(/,\s*"[^"]*$/, "").replace(/,\s*$/, "");
  while (stack.length) {
    const open = stack.pop();
    fixed += open === "{" ? "}" : "]";
  }
  try {
    return JSON.parse(fixed);
  } catch (e) {
    return null;
  }
}
const ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DEFAULT_MODELS,
  ENDPOINTS,
  GROQ_FALLBACKS,
  OPENROUTER_FALLBACKS,
  ROLEPLAY_SCENARIOS,
  SYSTEM_PROMPT,
  _activateCooldown,
  get _chatWithAIOverride() {
    return _chatWithAIOverride;
  },
  _extractBatchResult,
  _setChatWithAIForTests,
  analyzeMistakes,
  analyzeSentence,
  batchRomaji,
  batchTranslate,
  buildLearnerContextBlock,
  buildLearnerProfile,
  chatWithAI,
  continueStory,
  detectProvider,
  explainItem,
  generateExamples,
  generateGrammarDrill,
  generateLyrics,
  generateQuiz,
  generateStory,
  generateWordMap,
  getAIKeyStatus,
  getConversationPrompt,
  getCooldownRemaining,
  getLastMinnaLessonContext,
  getStudyAdvice,
  getWeakStudyItems,
  grammarCheck,
  investigateKanji,
  isAIAvailable,
  navigateApp,
  normalizeWeakSrsLabel,
  predictJLPT,
  reviewDiary,
  reviewWriting,
  roleplayEvaluate,
  roleplayMessage,
  simplifyText,
  simulateScene,
  summarizeLessonProgress
}, Symbol.toStringTag, { value: "Module" }));
const WORLD_RADIUS = 96;
const VILLAGE_RADIUS = 36;
const BIOME_EDGE_FADE = 16;
const BIOMES = {
  mura: {
    id: "mura",
    nameJp: "村",
    nameVi: "Làng",
    bearing: [-Math.PI, Math.PI],
    radial: [0, VILLAGE_RADIUS],
    palette: {
      ground: "#d3b36f",
      grass: "#8bd36f",
      accent: "#ff8f70",
      sky: "#ffd38a"
    },
    ambientDensity: { tree: 0.04, rock: 0.02, flower: 0.1, grass: 0.35 },
    weatherBias: { clear: 0.65, rain: 0.2, fog: 0.1, snow: 0.05, storm: 0 },
    learningTopic: "hub",
    fogColor: "#f0e8d8",
    fogNear: 80,
    fogFar: 150,
    groundVariation: ["#b99f6a", "#d8c894"]
  },
  mori: {
    id: "mori",
    nameJp: "森",
    nameVi: "Rừng từ vựng",
    bearing: [-Math.PI / 5, Math.PI / 5],
    radial: [VILLAGE_RADIUS - 8, WORLD_RADIUS - 6],
    palette: {
      ground: "#3f7a42",
      grass: "#68b85f",
      accent: "#b6f05d",
      sky: "#b9f7c3"
    },
    ambientDensity: { tree: 0.75, rock: 0.1, flower: 0.25, grass: 0.55 },
    weatherBias: { clear: 0.45, rain: 0.35, fog: 0.15, snow: 0.05, storm: 0 },
    learningTopic: "vocab",
    fogColor: "#7aad88",
    fogNear: 55,
    fogFar: 135,
    groundVariation: ["#3f612f", "#71914f"]
  },
  yama: {
    id: "yama",
    nameJp: "山",
    nameVi: "Núi kanji",
    bearing: [-(3 * Math.PI) / 4, -Math.PI / 5],
    radial: [VILLAGE_RADIUS - 8, WORLD_RADIUS - 4],
    palette: {
      ground: "#787978",
      grass: "#8ba489",
      accent: "#e7edf8",
      sky: "#b9d7ff"
    },
    ambientDensity: { tree: 0.28, rock: 0.7, flower: 0.08, grass: 0.3 },
    weatherBias: { clear: 0.4, rain: 0.15, fog: 0.25, snow: 0.2, storm: 0 },
    learningTopic: "kanji",
    fogColor: "#8898b0",
    fogNear: 60,
    fogFar: 145,
    groundVariation: ["#665f58", "#858078"]
  },
  umi: {
    id: "umi",
    nameJp: "海",
    nameVi: "Biển nghe",
    bearing: [4 * Math.PI / 5, -(4 * Math.PI) / 5],
    radial: [VILLAGE_RADIUS - 8, WORLD_RADIUS - 6],
    palette: {
      ground: "#dac58f",
      grass: "#8bd0bc",
      accent: "#3ac7e8",
      sky: "#8ce7ff"
    },
    ambientDensity: { tree: 0.08, rock: 0.28, flower: 0.06, grass: 0.28 },
    weatherBias: { clear: 0.5, rain: 0.3, fog: 0.1, snow: 0, storm: 0.1 },
    learningTopic: "listening",
    fogColor: "#90c8e0",
    fogNear: 70,
    fogFar: 155,
    groundVariation: ["#c8b080", "#a0c8b0"]
  },
  doukutsu: {
    id: "doukutsu",
    nameJp: "洞窟",
    nameVi: "Hang ngữ pháp",
    bearing: [-(2 * Math.PI) / 3, -Math.PI / 3],
    radial: [70, WORLD_RADIUS - 4],
    palette: {
      ground: "#24233f",
      grass: "#47406a",
      accent: "#a78bfa",
      sky: "#27215f"
    },
    ambientDensity: { tree: 0, rock: 0.45, flower: 0.04, grass: 0 },
    weatherBias: { clear: 1, rain: 0, fog: 0, snow: 0, storm: 0 },
    learningTopic: "grammar",
    fogColor: "#20163a",
    fogNear: 25,
    fogFar: 90,
    groundVariation: ["#1b1d2c", "#2e2d46"]
  },
  sato: {
    id: "sato",
    nameJp: "里",
    nameVi: "Đồng Minna",
    bearing: [Math.PI / 5, 4 * Math.PI / 5],
    radial: [VILLAGE_RADIUS - 8, WORLD_RADIUS - 6],
    palette: {
      ground: "#c5a96a",
      grass: "#d3da67",
      accent: "#ffd166",
      sky: "#ffe4a3"
    },
    ambientDensity: { tree: 0.16, rock: 0.08, flower: 0.24, grass: 0.65 },
    weatherBias: { clear: 0.55, rain: 0.3, fog: 0.1, snow: 0.05, storm: 0 },
    learningTopic: "minna",
    fogColor: "#f0e0a0",
    fogNear: 70,
    fogFar: 150,
    groundVariation: ["#aa9a5c", "#c8c46e"]
  }
};
function normAngle(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}
function bearingIn(bearing, [start, end]) {
  const b = normAngle(bearing);
  if (start <= end) return b >= start && b <= end;
  return b >= start || b <= end;
}
function biomeAt(x, z) {
  const r = Math.hypot(x, z);
  const bearing = Math.atan2(z, x);
  if (r < VILLAGE_RADIUS) return BIOMES.mura;
  for (const id of ["doukutsu", "mori", "yama", "umi", "sato"]) {
    const biome = BIOMES[id];
    if (r < biome.radial[0] || r > biome.radial[1]) continue;
    if (bearingIn(bearing, biome.bearing)) return biome;
  }
  return BIOMES.mura;
}
function biomeBlend(x, z) {
  const r = Math.hypot(x, z);
  const inner = VILLAGE_RADIUS;
  const fade = BIOME_EDGE_FADE;
  if (r <= inner) return 0;
  if (r >= inner + fade) return 1;
  return (r - inner) / fade;
}
const ENCOUNTER_TYPES = Object.freeze({
  VOCAB_TREE: "VOCAB_TREE",
  VOCAB_JLPT: "VOCAB_JLPT",
  KANJI_ROCK: "KANJI_ROCK",
  GRAMMAR_ECHO: "GRAMMAR_ECHO",
  PARTICLE_GATE: "PARTICLE_GATE",
  CONJUGATION_FORGE: "CONJUGATION_FORGE",
  KEIGO_GATE: "KEIGO_GATE",
  LISTENING_FISH: "LISTENING_FISH",
  COMBAT_MOB: "COMBAT_MOB",
  NPC_QUIZ: "NPC_QUIZ",
  NATURE_SCAN: "NATURE_SCAN"
});
const BIOME_TO_TYPES = {
  mori: ["VOCAB_TREE", "PARTICLE_GATE"],
  yama: ["KANJI_ROCK", "COMBAT_MOB", "CONJUGATION_FORGE"],
  doukutsu: ["GRAMMAR_ECHO", "COMBAT_MOB", "PARTICLE_GATE"],
  umi: ["LISTENING_FISH", "PARTICLE_GATE"],
  sato: ["NPC_QUIZ", "KANJI_ROCK", "CONJUGATION_FORGE"],
  mura: []
};
const PER_CHUNK = 1;
const CORE_EXCLUSION = 42;
const EDGE_MARGIN = 8;
function encountersInChunk(cx, cz, chunkSize) {
  const rng = createSeededRng(cx * 1009 + cz * 2003 + 71);
  const out = [];
  for (let i = 0; i < PER_CHUNK; i++) {
    const lx = rng() * chunkSize;
    const lz = rng() * chunkSize;
    const x = cx * chunkSize + lx;
    const z = cz * chunkSize + lz;
    const radius = Math.hypot(x, z);
    if (radius < CORE_EXCLUSION) continue;
    if (radius > WORLD_RADIUS - EDGE_MARGIN) continue;
    const biome = biomeAt(x, z);
    const pool = BIOME_TO_TYPES[biome.id] || [];
    if (pool.length === 0) continue;
    const type = pool[Math.floor(rng() * pool.length)];
    out.push({
      id: `enc-${cx}-${cz}-${i}`,
      type: ENCOUNTER_TYPES[type],
      pos: [+x.toFixed(2), 0, +z.toFixed(2)],
      biome: biome.id,
      seed: Math.floor(rng() * 1e9)
    });
  }
  return out;
}
const NPCS = [
  { id: "npc-greeter", name: "Yuki さん", pos: [0, 0, 4], topic: "hub", model: "emiko", greetingVi: "Chào mừng đến làng Sakura!", questKey: "tutorial.intro" },
  { id: "npc-guide", name: "Mai 店長", pos: [-12, 0, 4], topic: "economy", model: "rogue", greetingVi: "Cần mua vật phẩm hay xem kho đồ thì ghé khu cửa hàng nhé.", questKey: "economy.guide" },
  { id: "npc-herbalist", name: "Sora 婆", pos: [28, 0, 14], topic: "vocab", model: "ranger", greetingVi: "Cùng học từ vựng cây cỏ trong rừng nhé.", questKey: "mori.herbs5" },
  { id: "npc-monk", name: "Hoshi 僧", pos: [18, 0, -18], topic: "kanji", model: "mage", greetingVi: "Hôm nay mình khắc một chữ kanji mới nhé.", questKey: "yama.kanji1" },
  { id: "npc-fisher", name: "Mio 漁師", pos: [-28, 0, 12], topic: "listening", model: "knight", greetingVi: "Lắng nghe tiếng sóng rồi đoán từ nhé.", questKey: "umi.listen3" },
  { id: "npc-cavekeeper", name: "Akari 洞守", pos: [28, 0, -14], topic: "grammar", model: "rogue_hooded", greetingVi: "Hang vang ngữ pháp đã mở, vào thử một câu nhé.", questKey: "doukutsu.grammar3" },
  { id: "npc-farmer", name: "Haru 農夫", pos: [-22, 0, 28], topic: "minna", model: "barbarian", greetingVi: "Đi theo bài Minna hôm nay với mình nhé.", questKey: "sato.minnaToday" }
];
function npcsInChunk(cx, cz, chunkSize) {
  const minX = cx * chunkSize;
  const minZ = cz * chunkSize;
  const maxX = minX + chunkSize;
  const maxZ = minZ + chunkSize;
  return NPCS.filter((npc) => {
    const [x, , z] = npc.pos;
    return x >= minX && x < maxX && z >= minZ && z < maxZ;
  });
}
let ctx = null;
let gain = null;
let muted = false;
const active = /* @__PURE__ */ new Set();
function ensure() {
  if (ctx || typeof window === "undefined" || typeof AudioContext === "undefined") return ctx;
  ctx = new AudioContext();
  gain = ctx.createGain();
  gain.gain.value = 0.18;
  gain.connect(ctx.destination);
  return ctx;
}
function tone({ freq = 440, dur = 0.16, type = "sine", sweep = 0 }) {
  if (muted) return;
  const c = ensure();
  if (!c) return;
  const osc = c.createOscillator();
  const env = c.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  if (sweep) osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq + sweep), c.currentTime + dur);
  env.gain.setValueAtTime(1e-4, c.currentTime);
  env.gain.exponentialRampToValueAtTime(0.6, c.currentTime + 0.01);
  env.gain.exponentialRampToValueAtTime(1e-4, c.currentTime + dur);
  osc.connect(env);
  env.connect(gain);
  active.add(osc);
  osc.onended = () => {
    active.delete(osc);
    try {
      osc.disconnect();
      env.disconnect();
    } catch (e) {
    }
  };
  osc.start();
  osc.stop(c.currentTime + dur + 0.05);
}
const audio = {
  setMuted(v) {
    muted = !!v;
  },
  hover() {
    tone({ freq: 660, dur: 0.06, type: "sine" });
  },
  confirm() {
    tone({ freq: 880, dur: 0.12, type: "triangle", sweep: 200 });
  },
  reward() {
    tone({ freq: 523, dur: 0.18, type: "triangle", sweep: 400 });
    setTimeout(() => tone({ freq: 784, dur: 0.16, type: "triangle" }), 100);
  },
  fail() {
    tone({ freq: 220, dur: 0.22, type: "sawtooth", sweep: -120 });
  },
  encounter() {
    tone({ freq: 392, dur: 0.18, type: "sine" });
    setTimeout(() => tone({ freq: 587, dur: 0.16, type: "sine" }), 90);
  },
  async dispose() {
    for (const source of active) {
      try {
        source.stop();
        source.disconnect();
      } catch (e) {
      }
    }
    active.clear();
    try {
      gain == null ? void 0 : gain.disconnect();
    } catch (e) {
    }
    if (ctx && ctx.state !== "closed") await ctx.close().catch(() => {
    });
    ctx = null;
    gain = null;
  }
};
const CONTENT_ERROR_ITEM_TYPES = Object.freeze(["vocab", "kanji", "grammar", "minna"]);
const CONTENT_ERROR_ITEM_TYPE_ALIASES = Object.freeze({
  vocabulary: "vocab",
  word: "vocab",
  words: "vocab",
  vocab_jlpt: "vocab",
  vocabjlpt: "vocab",
  vocab_tree: "vocab",
  kanji_rock: "kanji",
  grammar_echo: "grammar",
  particle_gate: "grammar",
  particle: "grammar",
  particles: "grammar",
  conjugation: "grammar",
  conjugation_forge: "grammar",
  ai: "grammar",
  ai_verification: "grammar",
  ai_explanation: "grammar",
  explanation: "grammar",
  minna_lesson: "minna",
  lesson: "minna"
});
function normalizeContentErrorItemType(itemType) {
  const raw = String(itemType || "").trim();
  if (CONTENT_ERROR_ITEM_TYPES.includes(raw)) return raw;
  const key = raw.replace(/[-\s]+/g, "_").toLowerCase();
  return CONTENT_ERROR_ITEM_TYPE_ALIASES[key] || "grammar";
}
function buildContentErrorInsertPayload(reporterId, report = {}) {
  const itemType = normalizeContentErrorItemType(report.itemType);
  const rawType = String(report.itemType || "").trim();
  const mappedFrom = rawType && rawType !== itemType ? rawType : "";
  const section = mappedFrom ? [report.section, mappedFrom].filter(Boolean).join(":") : report.section;
  const description = mappedFrom && report.description ? `[${mappedFrom}] ${report.description}` : report.description;
  return {
    reporter_id: reporterId,
    item_type: itemType,
    item_id: report.itemId,
    section,
    field: report.field,
    current_value: report.currentValue,
    suggested_value: report.suggestedValue,
    description
  };
}
async function reportContentError(reporterId, report) {
  const payload = buildContentErrorInsertPayload(reporterId, report);
  const { data, error } = await supabase.from("content_errors").insert(payload).select().single();
  if (error) throw error;
  return data;
}
async function getMyReports(userId) {
  const { data, error } = await supabase.from("content_errors").select("*").eq("reporter_id", userId).order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
function simpleHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i) | 0;
  }
  return Math.abs(h).toString(36);
}
const CACHE_PREFIX = "n4-ai-explain-";
function normalizeAnalysisContext(context) {
  if (!context) return null;
  if (typeof context === "string") return { notes: context };
  if (typeof context !== "object") return { notes: String(context) };
  return context;
}
function stableStringify(value) {
  if (value == null || value === "") return "";
  if (typeof value !== "object") return String(value);
  const seen = /* @__PURE__ */ new WeakSet();
  return JSON.stringify(value, (key, val) => {
    if (!val || typeof val !== "object") return val;
    if (seen.has(val)) return "[Circular]";
    seen.add(val);
    if (Array.isArray(val)) return val;
    return Object.keys(val).sort().reduce((acc, itemKey) => {
      const itemValue = val[itemKey];
      if (itemValue !== void 0 && itemValue !== null && itemValue !== "") {
        acc[itemKey] = itemValue;
      }
      return acc;
    }, {});
  });
}
function compactText(value) {
  if (value == null || value === "") return "";
  if (Array.isArray(value)) return value.map(compactText).filter(Boolean).join("\n");
  if (typeof value === "object") return stableStringify(value);
  return String(value).trim();
}
function formatChoice(choice) {
  if (choice == null || choice === "") return "";
  if (typeof choice !== "object") return String(choice);
  const label = compactText(choice.label || choice.word || choice.answer || choice.text || choice.key);
  const reading = compactText(choice.reading || choice.romaji);
  const meaning = compactText(choice.meaning || choice.vi || choice.gloss);
  const correctness = choice.isCorrect ? " [đáp án đúng]" : "";
  return [label, reading ? `(${reading})` : "", meaning ? `- ${meaning}` : ""].filter(Boolean).join(" ") + correctness;
}
function addContextLine(lines, label, value) {
  const text = compactText(value);
  if (text) lines.push(`- ${label}: ${text}`);
}
function formatContextLines(ctx2) {
  if (!ctx2) return "";
  const lines = [];
  addContextLine(lines, "Overlay", ctx2.overlay || ctx2.domain);
  addContextLine(lines, "Loại", ctx2.examTypeLabel || ctx2.questionType);
  addContextLine(lines, "Prompt", ctx2.questionPrompt || ctx2.prompt);
  addContextLine(lines, "Câu gốc", ctx2.blankSentence || ctx2.questionJapanese || ctx2.sentence);
  addContextLine(lines, "Romaji câu gốc", ctx2.blankRomaji || ctx2.questionRomaji || ctx2.sentenceRomaji);
  addContextLine(lines, "Nghĩa câu gốc", ctx2.questionVietnamese || ctx2.promptVietnamese || ctx2.sentenceVietnamese);
  addContextLine(lines, "Đáp án", ctx2.correctAnswer || ctx2.correctAnswerJapanese);
  addContextLine(lines, "Reading", ctx2.correctReading || ctx2.correctAnswerReading);
  addContextLine(lines, "Romaji đáp án", ctx2.correctRomaji || ctx2.correctAnswerRomaji);
  addContextLine(lines, "Nghĩa đáp án", ctx2.correctMeaning || ctx2.correctAnswerVietnamese);
  addContextLine(lines, "Người học chọn", ctx2.userAnswer || ctx2.userAnswerJapanese);
  addContextLine(lines, "Câu đầy đủ", ctx2.fullSentence || ctx2.fullSentenceJapanese);
  addContextLine(lines, "Romaji câu đầy đủ", ctx2.fullSentenceRomaji);
  addContextLine(lines, "Nghĩa câu đầy đủ", ctx2.fullSentenceVietnamese || ctx2.fullMeaning);
  addContextLine(lines, "Mục tiêu", ctx2.grammarPoint || ctx2.targetForm || ctx2.target);
  addContextLine(lines, "Từ gốc", ctx2.base);
  addContextLine(lines, "Romaji từ gốc", ctx2.baseRomaji);
  addContextLine(lines, "Nghĩa từ gốc", ctx2.baseMeaning);
  addContextLine(lines, "Giải thích app", ctx2.expectedExplanation || ctx2.explanationVi || ctx2.explanation);
  addContextLine(lines, "Thông tin", ctx2.itemInfo);
  addContextLine(lines, "Ghi chú", ctx2.notes || ctx2.extraContext);
  if (Array.isArray(ctx2.choices) && ctx2.choices.length) {
    lines.push(`- Lựa chọn:
  ${ctx2.choices.map(formatChoice).filter(Boolean).join("\n  ")}`);
  }
  if (Array.isArray(ctx2.examples) && ctx2.examples.length) {
    lines.push(`- Ví dụ:
  ${ctx2.examples.map(compactText).filter(Boolean).join("\n  ")}`);
  }
  if (Array.isArray(ctx2.vocabularyExamples) && ctx2.vocabularyExamples.length) {
    lines.push(`- Từ ví dụ:
  ${ctx2.vocabularyExamples.map(formatChoice).filter(Boolean).join("\n  ")}`);
  }
  return lines.join("\n");
}
const JLPT_N4_OVERLAY_SYSTEM_PROMPT = [
  "Bạn là GV tiếng Nhật JLPT N4.",
  "Phạm vi bắt buộc: chỉ dùng kiến thức N5/N4 để phục vụ ôn thi JLPT N4; không thêm mẫu N3/N2/N1.",
  'Nếu context chứa kiến thức vượt N4, hãy ghi rõ "ngoài phạm vi N4" và quay về cách giải N4 thay vì mở rộng.',
  "App-provided reading/correctAnswer là nguồn sự thật (nhất là kanji/vocab), không tự bác bỏ.",
  "Giải thích lý do đáp án đúng.",
  'Chỉ báo "Cần sửa" nếu context mâu thuẫn nội bộ rõ rệt (ví dụ: nghĩa sai hoàn toàn, romaji lệch kana).',
  'Nếu không chắc, ghi "không đủ dữ liệu để xác minh". Không bịa từ/thể chia.',
  "Viết ngắn gọn bằng tiếng Việt."
].join(" ");
function buildJlptN4OverlayAnalysisPrompt({
  question,
  answer,
  userAnswer,
  isCorrect,
  itemInfo,
  analysisContext
}) {
  const ctx2 = normalizeAnalysisContext(analysisContext) || {};
  const info = normalizeAnalysisContext(itemInfo) || {};
  const correctAnswer = ctx2.correctAnswer || ctx2.correctAnswerJapanese || answer;
  const selectedAnswer = ctx2.userAnswer || ctx2.userAnswerJapanese || userAnswer || "(không chọn)";
  const domain = ctx2.domain || ctx2.overlay || "";
  const isKanjiVocab = /kanji|vocab|reading/i.test(domain);
  const trustNote = isKanjiVocab ? `
LƯU Ý: Đây là câu ${domain}. Reading & đáp án từ app là nguồn sự thật — hãy giải thích dựa trên đó. Đừng tự bác bỏ cách đọc KUN/ON hợp lệ. Chỉ báo "Cần sửa" nếu context mâu thuẫn nội tại rõ rệt (nghĩa sai, romaji lệch kana). Nếu không chắc, ghi "không đủ dữ liệu để xác minh".` : "";
  const reading = ctx2.correctReading || ctx2.correctAnswerReading || info.reading || "";
  const meaning = ctx2.correctMeaning || ctx2.correctAnswerVietnamese || info.meaning || "";
  const contextLines = formatContextLines({
    questionPrompt: question,
    correctAnswer,
    correctReading: reading,
    correctMeaning: meaning,
    userAnswer: selectedAnswer,
    ...ctx2
  });
  return `Phân tích & kiểm chứng câu JLPT N4.${trustNote}

Dữ liệu app:
${contextLines || "- Không có."}
- Kết quả: ${isCorrect ? "Chọn đúng" : "Chọn sai"}

Nhiệm vụ:
- Giữ phân tích trong phạm vi N5/N4 phục vụ ôn thi JLPT N4; không thêm kiến thức N3/N2/N1.
- Nếu dữ liệu app có dấu hiệu vượt N4, ghi "ngoài phạm vi N4" và chỉ giải thích phần cần thiết cho N4.
- Giải thích đáp án đúng dựa vào dữ liệu app (reading từ app là nguồn sự thật).
- Chỉ báo "Cần sửa" nếu context mâu thuẫn nội bộ rõ rệt.
- Không chắc chắn thì ghi "không đủ dữ liệu để xác minh".
- Khôi phục câu đầy đủ. Phân tích cụm (cụm / romaji: vai trò) nếu là ngữ pháp/thể/trợ từ.
- Không trả JSON hay bảng.

Format trả về bắt buộc:

Kết luận kiểm chứng
Trạng thái: Hợp lệ / Cần sửa / Không đủ dữ liệu
Ghi chú: ...

Câu hỏi
<câu gốc/chỗ trống>
Romaji: ...
Nghĩa: ...

Đáp án đúng
<đáp án> / <romaji>

Câu đầy đủ:
<câu đầy đủ>
Romaji: ...
Nghĩa: ...

Ngữ pháp trong câu
<phân tích cụm Nhật/romaji: vai trò>

Vì sao chọn ${correctAnswer || "<đáp án đúng>"}
<giải thích ngắn gọn>

Vì sao bạn chọn sai: ${selectedAnswer}
<nếu người học chọn sai, giải thích lý do. Nếu chọn đúng, ghi: "Bạn đã chọn đúng, không có đáp án sai.">

Mẹo ghi nhớ
<1-2 câu hoặc bỏ>`;
}
function AIExplainButton({ question, answer, userAnswer, isCorrect, itemInfo, questionId, analysisContext }) {
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [explanation, setExplanation] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [expanded, setExpanded] = reactExports.useState(false);
  const user = useAppStore((state) => state.user);
  const [reportStatus, setReportStatus] = reactExports.useState("idle");
  const normalizedAnalysisContext = reactExports.useMemo(() => normalizeAnalysisContext(analysisContext), [analysisContext]);
  const analysisContextKey = reactExports.useMemo(() => stableStringify(normalizedAnalysisContext), [normalizedAnalysisContext]);
  const useOverlayAnalysisPrompt = (normalizedAnalysisContext == null ? void 0 : normalizedAnalysisContext.format) === "jlpt-n4-world-overlay";
  const authored = reactExports.useMemo(() => {
    var _a;
    if (!questionId) return null;
    try {
      return ((_a = content.getExplanation) == null ? void 0 : _a.call(content, questionId)) || null;
    } catch (e) {
      return null;
    }
  }, [questionId]);
  const renderAuthored = reactExports.useCallback(() => {
    if (!authored) return null;
    const parts = [];
    if (authored.core) parts.push(authored.core);
    if (authored.pattern) parts.push(`
Mẫu: ${authored.pattern}`);
    if (authored.whenToUse) parts.push(`
Khi nào dùng: ${authored.whenToUse}`);
    if (authored.distractors && typeof authored.distractors === "object") {
      const list2 = Object.entries(authored.distractors).filter(([opt]) => opt !== answer).map(([opt, why]) => `• ${opt}: ${why}`);
      if (list2.length) parts.push("\nVì sao các đáp án còn lại sai:\n" + list2.join("\n"));
    }
    return parts.join("\n");
  }, [authored, answer]);
  const handleExplain = reactExports.useCallback(async () => {
    if (explanation) {
      setExpanded((e) => !e);
      return;
    }
    const authoredText = useOverlayAnalysisPrompt ? null : renderAuthored();
    if (authoredText) {
      setExplanation(authoredText);
      setExpanded(true);
      return;
    }
    if (!isLoggedIn || !hasKey) {
      alert("Vui lòng đăng nhập để sử dụng tính năng này");
      return;
    }
    const cacheKey = CACHE_PREFIX + simpleHash(`${questionId || question}|${answer}|${userAnswer || ""}|${isCorrect ? "ok" : "ng"}|${analysisContextKey}`);
    const cached = safeGetItem(cacheKey);
    if (cached) {
      const tsKey = cacheKey + "-ts";
      const ts = parseInt(safeGetItem(tsKey) || "0", 10);
      if (ts && Date.now() - ts < 7 * 864e5) {
        setExplanation(cached);
        setExpanded(true);
        return;
      }
    }
    setLoading(true);
    try {
      const reading = (itemInfo == null ? void 0 : itemInfo.reading) || "";
      const meaning = (itemInfo == null ? void 0 : itemInfo.meaning) || "";
      const contextBlock = normalizedAnalysisContext ? `
- Bối cảnh kiểm chứng từ hệ thống:
${formatContextLines(normalizedAnalysisContext)}` : "";
      const msg = useOverlayAnalysisPrompt ? buildJlptN4OverlayAnalysisPrompt({
        question,
        answer,
        userAnswer,
        isCorrect,
        itemInfo,
        analysisContext: normalizedAnalysisContext
      }) : `Phân tích và double-check câu hỏi JLPT N4 này bằng tiếng Việt:
- Câu hỏi: ${question}
- Đáp án đúng: ${answer}${reading ? ` (${reading})` : ""}${meaning ? ` — ${meaning}` : ""}
- Người học chọn: ${userAnswer || "(không chọn)"}
- Kết quả: ${isCorrect ? "Đúng" : "Sai"}
${contextBlock}

Yêu cầu bắt buộc:
- Kiểm chứng đáp án đúng trước khi giải thích; nếu dữ liệu có dấu hiệu sai hoặc không tồn tại trong tiếng Nhật, hãy nói rõ.
- Không tự bịa từ tiếng Nhật, không ghép các hậu tố mâu thuẫn như ました + たい hoặc ます + たい.
- Nếu là bài chia động từ: xác định thể từ điển trước, xác định nhóm động từ từ thể từ điển, rồi mới nêu quy tắc.
- Với たい形: lấy ます形, bỏ toàn bộ ます để được thân động từ, rồi thêm たい.
- Chỉ dùng kiến thức N5/N4 cho kỳ thi JLPT N4; không gợi ý học tiếp N3/N2/N1 trong phần giải thích.
- Nếu không đủ dữ liệu để xác minh chắc chắn, hãy nói "không đủ dữ liệu để xác minh" thay vì đoán.

Hãy giải thích:
1. Kết luận kiểm chứng: đáp án có hợp lệ không
2. Tại sao đáp án đúng là "${answer}"
3. ${!isCorrect ? `Tại sao "${userAnswer}" sai` : "Điểm cần nhớ"}
4. Mẹo ghi nhớ (nếu có)

Trả lời ngắn gọn, chắc chắn, dễ hiểu.`;
      const result = await chatWithAI(msg, apiKey, {
        systemPrompt: useOverlayAnalysisPrompt ? JLPT_N4_OVERLAY_SYSTEM_PROMPT : "Bạn là giáo viên tiếng Nhật chuyên JLPT N4. Chỉ dùng kiến thức N5/N4 phục vụ ôn thi N4, không thêm mẫu N3/N2/N1. Luôn kiểm chứng trước khi giải thích, không bịa từ tiếng Nhật, không tạo dạng chia không tồn tại. Với chia động từ, xác định nhóm từ thể từ điển, không dựa vào đuôi ます. Nếu không chắc, nói rõ là không đủ dữ liệu để xác minh. Giải thích bằng tiếng Việt, ngắn gọn và dễ hiểu.",
        maxTokens: useOverlayAnalysisPrompt ? 1e3 : 420,
        temperature: useOverlayAnalysisPrompt ? 0.25 : 0.5,
        timeout: useOverlayAnalysisPrompt ? 2e4 : 15e3
      });
      if (result) {
        try {
          safeSetItem(cacheKey, result);
          safeSetItem(cacheKey + "-ts", String(Date.now()));
        } catch (e) {
          if ((e == null ? void 0 : e.name) === "QuotaExceededError") {
            for (let i = localStorage.length - 1; i >= 0; i--) {
              const k = localStorage.key(i);
              if (k == null ? void 0 : k.startsWith(CACHE_PREFIX)) localStorage.removeItem(k);
            }
            try {
              safeSetItem(cacheKey, result);
              safeSetItem(cacheKey + "-ts", String(Date.now()));
            } catch (e2) {
            }
          }
        }
        setExplanation(result);
        setExpanded(true);
      }
    } catch (e) {
      setExplanation("Không thể kết nối AI. Vui lòng thử lại.");
      setExpanded(true);
    } finally {
      setLoading(false);
    }
  }, [explanation, apiKey, hasKey, isLoggedIn, questionId, question, answer, userAnswer, isCorrect, itemInfo, normalizedAnalysisContext, analysisContextKey, useOverlayAnalysisPrompt, renderAuthored]);
  const handleReportError = reactExports.useCallback(async () => {
    if (reportStatus === "loading") return;
    setReportStatus("loading");
    try {
      await reportContentError((user == null ? void 0 : user.id) || "anonymous", {
        itemType: "ai_verification",
        itemId: questionId || "unknown",
        section: "ai",
        field: "explanation",
        currentValue: explanation,
        suggestedValue: JSON.stringify({ question, answer, userAnswer, isCorrect, itemInfo, analysisContext: normalizedAnalysisContext }),
        description: "Người dùng báo lỗi AI kiểm chứng"
      });
      setReportStatus("success");
    } catch (e) {
      console.error("Failed to report AI error:", e);
      setReportStatus("error");
    }
  }, [user, questionId, explanation, question, answer, userAnswer, isCorrect, itemInfo, normalizedAnalysisContext, reportStatus]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-explain", style: { marginTop: 8 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-ghost n4-btn-sm",
        onClick: handleExplain,
        disabled: loading,
        style: { opacity: loading ? 0.6 : 1 },
        children: loading ? "⏳ Đang phân tích..." : explanation ? expanded ? "🤖 Ẩn phân tích" : "🧠 Xem phân tích AI" : "🧠 AI phân tích / kiểm chứng"
      }
    ),
    expanded && explanation && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-explain-content", style: {
      marginTop: 6,
      padding: "8px 12px",
      background: "var(--n4-bg-tertiary, rgba(255,255,255,0.05))",
      borderRadius: 8,
      fontSize: "0.85rem",
      lineHeight: 1.5,
      whiteSpace: "pre-wrap",
      borderLeft: "3px solid var(--n4-accent, #6c63ff)"
    }, children: [
      explanation,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 12, display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-btn n4-btn-ghost n4-btn-sm",
          onClick: handleReportError,
          disabled: reportStatus === "loading" || reportStatus === "success",
          style: { fontSize: "0.8rem", padding: "4px 8px", borderColor: "rgba(255,100,100,0.5)", color: "rgba(255,200,200,0.9)" },
          children: reportStatus === "loading" ? "⏳ Đang gửi..." : reportStatus === "success" ? "✅ Đã báo cáo" : reportStatus === "error" ? "❌ Lỗi gửi báo cáo. Thử lại?" : "⚠️ Báo cáo AI giải thích sai"
        }
      ) })
    ] })
  ] });
}
function AIHintButton({ question, options, correctAnswer, itemInfo }) {
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [hints, setHints] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const handleHint = reactExports.useCallback(async () => {
    if (!isLoggedIn || !hasKey) {
      alert("Vui lòng đăng nhập để sử dụng tính năng này");
      return;
    }
    setLoading(true);
    try {
      const hintLevel = hints.length + 1;
      const reading = (itemInfo == null ? void 0 : itemInfo.reading) || "";
      const meaning = (itemInfo == null ? void 0 : itemInfo.meaning) || "";
      const msg = `Cho gợi ý cấp ${hintLevel} cho câu hỏi JLPT N4 này (tiếng Việt):
- Câu hỏi: ${question}
- Các đáp án: ${(options || []).join(", ")}
- Đáp án đúng: ${correctAnswer}${reading ? ` (${reading})` : ""}${meaning ? ` — ${meaning}` : ""}

Cấp gợi ý:
- Cấp 1: Gợi ý chung (loại từ, ngữ cảnh, không nói đáp án)
- Cấp 2: Gợi ý cụ thể hơn (loại bỏ 1-2 đáp án sai)
- Cấp 3+: Gợi ý rất rõ (gần như cho đáp án)

CHỈ cho gợi ý cấp ${hintLevel}. Một câu ngắn gọn.`;
      const result = await chatWithAI(msg, apiKey, {
        systemPrompt: "Bạn cho gợi ý cho câu hỏi JLPT N4. Chỉ dùng kiến thức N5/N4, không mở rộng sang N3/N2/N1. Trả lời 1 câu ngắn gọn bằng tiếng Việt. KHÔNG nói thẳng đáp án ở cấp 1-2.",
        maxTokens: 100,
        temperature: 0.7,
        timeout: 1e4
      });
      if (result) {
        setHints((prev) => [...prev, result]);
      }
    } catch (e) {
      setHints((prev) => [...prev, "Không thể kết nối AI."]);
    } finally {
      setLoading(false);
    }
  }, [apiKey, hasKey, isLoggedIn, question, options, correctAnswer, itemInfo, hints.length]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-hint", style: { marginTop: 4 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-ghost n4-btn-sm",
        onClick: handleHint,
        disabled: loading,
        style: { opacity: loading ? 0.6 : 1 },
        children: loading ? "⏳ ..." : `💡 AI Hint${hints.length > 0 ? ` (${hints.length})` : ""}`
      }
    ),
    hints.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      marginTop: 4,
      padding: "4px 10px",
      background: "var(--n4-bg-tertiary, rgba(255,255,255,0.05))",
      borderRadius: 6,
      fontSize: "0.8rem",
      borderLeft: "2px solid var(--n4-warning, #f0ad4e)"
    }, children: [
      "💡 ",
      h
    ] }, i))
  ] });
}
function AIPostGameButton({ history, getQuestion: getQuestion2, getCorrectInfo, score, total }) {
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [analysis, setAnalysis] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [expanded, setExpanded] = reactExports.useState(false);
  const handleAnalyze = reactExports.useCallback(async () => {
    if (analysis) {
      setExpanded((e) => !e);
      return;
    }
    if (!isLoggedIn || !hasKey) {
      alert("Vui lòng đăng nhập để sử dụng tính năng này");
      return;
    }
    setLoading(true);
    try {
      const wrongItems = history.filter((h) => !h.correct);
      const correctItems = history.filter((h) => h.correct);
      const wrongSummary = wrongItems.slice(0, 10).map((h) => {
        const q = (getQuestion2 == null ? void 0 : getQuestion2(h.item)) || "?";
        const info = getCorrectInfo == null ? void 0 : getCorrectInfo(h.item);
        return `❌ ${q}${(info == null ? void 0 : info.meaning) ? ` (${info.meaning})` : ""}`;
      }).join("\n");
      const correctSummary = correctItems.slice(0, 5).map((h) => {
        const q = (getQuestion2 == null ? void 0 : getQuestion2(h.item)) || "?";
        return `✅ ${q}`;
      }).join("\n");
      const pct = total > 0 ? Math.round(score / total * 100) : 0;
      const msg = `Phân tích kết quả luyện tập JLPT N4 của học sinh (tiếng Việt):

📊 Kết quả: ${score}/${total} (${pct}%)

❌ Câu sai:
${wrongSummary || "(Không có)"}

✅ Câu đúng (mẫu):
${correctSummary || "(Không có)"}

Hãy phân tích:
1. Đánh giá tổng quan (1 câu)
2. Điểm yếu cần cải thiện (từ các câu sai)
3. 2-3 lời khuyên cụ thể để cải thiện
4. Từ/mẫu nào nên ôn lại ngay`;
      const result = await chatWithAI(msg, apiKey, {
        systemPrompt: "Bạn là giáo viên tiếng Nhật JLPT N4. Phân tích kết quả luyện tập bằng tiếng Việt, chỉ khuyên ôn kiến thức N5/N4 phục vụ N4, không gợi ý mở sang N3/N2/N1. Tích cực nhưng thực tế. Ngắn gọn, có cấu trúc rõ ràng.",
        maxTokens: 400,
        temperature: 0.5,
        timeout: 2e4
      });
      if (result) {
        setAnalysis(result);
        setExpanded(true);
      }
    } catch (e) {
      setAnalysis("Không thể kết nối AI. Vui lòng thử lại.");
      setExpanded(true);
    } finally {
      setLoading(false);
    }
  }, [analysis, apiKey, hasKey, isLoggedIn, history, getQuestion2, getCorrectInfo, score, total]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 12, width: "100%" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-ghost",
        onClick: handleAnalyze,
        disabled: loading,
        style: { width: "100%", opacity: loading ? 0.6 : 1 },
        children: loading ? "⏳ AI đang phân tích..." : analysis ? expanded ? "🤖 Ẩn phân tích" : "🧠 Xem phân tích AI" : "🧠 Phân tích kết quả"
      }
    ),
    expanded && analysis && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      marginTop: 8,
      padding: "12px 16px",
      background: "var(--n4-bg-tertiary, rgba(255,255,255,0.05))",
      borderRadius: 8,
      fontSize: "0.85rem",
      lineHeight: 1.6,
      whiteSpace: "pre-wrap",
      borderLeft: "3px solid var(--n4-accent, #6c63ff)"
    }, children: analysis })
  ] });
}
function WorldTtsButton({ text, lang = "auto", label = "Nghe", title = "Nghe phát âm", className = "" }) {
  if (!String(text || "").trim()) return null;
  const resolvedLang = lang === "auto" ? hasJapaneseText(text) ? "ja" : "vi" : lang;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      className: `v3-tts-btn ${className}`.trim(),
      onClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (resolvedLang === "vi") speakVi(String(text));
        else speakJP(String(text));
      },
      title,
      "aria-label": title,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "🔊" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label })
      ]
    }
  );
}
function WorldTtsInline({ text, lang = "auto", label = "Nghe", title }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-tts-inline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsButton, { text, lang, label, title }) });
}
function WorldChoiceRow({ label, reading, romaji, meaning, ttsText, onChoose, onHover }) {
  const presentation = createAnswerPresentation({ label, reading, romaji, ttsText });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-choice-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "v3-overlay-choice",
        onClick: onChoose,
        onMouseEnter: onHover,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-overlay-choice-jp", children: label }),
          presentation.romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-overlay-choice-rd", children: presentation.romaji }),
          meaning && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-overlay-choice-vi", children: meaning })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      WorldTtsButton,
      {
        text: presentation.ttsText,
        lang: presentation.lang,
        label: "",
        title: `Nghe đáp án「${label}」`,
        className: "v3-tts-icon"
      }
    )
  ] });
}
function WorldQuestionPanel({
  questionKey,
  text,
  children,
  reading,
  romaji,
  vi,
  ttsText,
  answers,
  answerReadings,
  answerRomaji,
  answerMeanings,
  hiddenTargets,
  className = ""
}) {
  const [showVi, setShowVi] = reactExports.useState(false);
  reactExports.useEffect(() => setShowVi(false), [questionKey, text]);
  const presentation = reactExports.useMemo(() => createQuestionPresentation({
    text,
    reading,
    romaji,
    vi,
    ttsText,
    answers,
    answerReadings,
    answerRomaji,
    answerMeanings,
    hiddenTargets
  }), [text, reading, romaji, vi, ttsText, answers, answerReadings, answerRomaji, answerMeanings, hiddenTargets]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `v3-question-panel ${className}`.trim(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-question-panel-main", children: children || text }),
    presentation.romaji && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-question-panel-romaji", "aria-label": `Romaji: ${presentation.romaji}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Romaji" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: presentation.romaji })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-question-panel-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsButton, { text: presentation.ttsText, title: "Nghe câu hỏi (đã ẩn phần cần trả lời)" }),
      presentation.vi && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: `v3-meaning-toggle ${showVi ? "is-open" : ""}`,
          onClick: () => setShowVi((value) => !value),
          "aria-expanded": showVi,
          children: showVi ? "🙈 Ẩn nghĩa Việt" : "👁 Hiện nghĩa Việt"
        }
      )
    ] }),
    showVi && presentation.vi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-question-panel-vi", role: "note", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Nghĩa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: presentation.vi })
    ] })
  ] });
}
function WorldAIExplain({
  question,
  answer,
  userAnswer,
  isCorrect,
  itemInfo,
  questionId,
  analysisContext
}) {
  if (!question || !answer) return null;
  const itemContext = itemInfo && typeof itemInfo === "object" ? {
    correctReading: itemInfo.reading || "",
    correctMeaning: itemInfo.meaning || ""
  } : itemInfo ? { itemInfo: String(itemInfo) } : {};
  const extraContext = analysisContext && typeof analysisContext === "object" ? analysisContext : analysisContext ? { extraContext: String(analysisContext) } : {};
  const worldAnalysisContext = {
    format: "jlpt-n4-world-overlay",
    level: "JLPT N4",
    overlay: "JLPT N4 World",
    questionPrompt: question,
    correctAnswer: answer,
    userAnswer,
    isCorrect: !!isCorrect,
    questionId,
    ...itemContext,
    ...extraContext
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-ai-explain-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    AIExplainButton,
    {
      question,
      answer,
      userAnswer,
      isCorrect: !!isCorrect,
      itemInfo,
      questionId,
      analysisContext: worldAnalysisContext
    }
  ) });
}
function shuffle$5(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
function buildVocabQuiz$1(kind = "vocab") {
  let batch = getBatch({ kind, n: 8, order: "random", srsBias: "mixed" });
  if (!batch || batch.length < 4) {
    batch = getBatch({ kind, n: 8, order: "random" });
  }
  if (!batch || batch.length < 2) return null;
  const shuffled = shuffle$5(batch);
  const correct = shuffled[0];
  const distractors = shuffled.slice(1, 4);
  if (!correct) return null;
  const allChoices = shuffle$5([correct, ...distractors]);
  const prompt = correct.meaning || correct.meaningVi || correct.vi || correct.gloss || correct.word || "???";
  return {
    prompt,
    correctKey: correct.key,
    correctText: correct.word || correct.kanji || correct.jp || correct.key,
    correctReading: correct.reading || correct.kana || "",
    correctFull: correct,
    choices: allChoices.map((c) => ({
      key: c.key,
      label: c.word || c.kanji || c.jp || c.key,
      reading: c.reading || c.kana || "",
      full: c
    }))
  };
}
function DialogueOverlay({ onOpenChange }) {
  const [npc, setNpc] = reactExports.useState(null);
  const [question, setQuestion] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const onTalk = (e) => {
      var _a, _b;
      const source = e.detail || {};
      const dialogue = source.dialogue || null;
      const n = {
        ...source,
        name: source.name || source.nameVi || source.nameJp || "Người dân Sakura",
        greetingVi: (dialogue == null ? void 0 : dialogue.text) || source.greetingVi || "Chào mừng bạn trở lại Sakura.",
        affinity: Number((_b = (_a = dialogue == null ? void 0 : dialogue.affinity) != null ? _a : source.affinity) != null ? _b : 0),
        completedQuestCount: Number((dialogue == null ? void 0 : dialogue.completedQuestCount) || 0)
      };
      setNpc(n);
      setFeedback(null);
      const q = buildVocabQuiz$1("vocab");
      if (!q) {
        setQuestion({ prompt: "Không có dữ liệu câu hỏi.", choices: [] });
      } else {
        setQuestion(q);
      }
      audio.confirm();
      emitPetSpeak(n.greetingVi);
    };
    return onDialogue(onTalk);
  }, []);
  reactExports.useEffect(() => {
    onOpenChange == null ? void 0 : onOpenChange(Boolean(npc));
    return () => onOpenChange == null ? void 0 : onOpenChange(false);
  }, [npc, onOpenChange]);
  const close = reactExports.useCallback(() => {
    setNpc(null);
    setQuestion(null);
    setFeedback(null);
  }, []);
  const dialogRef = useDialogFocus(Boolean(npc), close);
  const loadNext = reactExports.useCallback(() => {
    const q = buildVocabQuiz$1("vocab");
    if (!q) {
      setQuestion({ prompt: "Không có dữ liệu câu hỏi.", choices: [] });
    } else {
      setQuestion(q);
    }
    setFeedback(null);
  }, []);
  const answer = reactExports.useCallback((choice) => {
    if (!question || !question.correctKey) return;
    if (choice.key === question.correctKey) {
      reward({ itemKey: choice.key, quality: 4, kind: "NPC_QUIZ", xp: 15, source: "encounter" });
      audio.reward();
      setFeedback({
        ok: true,
        msg: "✔ Đúng!",
        picked: choice.label,
        selected: choice.full,
        correct: question.correctFull
      });
    } else {
      fail({ itemKey: question.correctKey, kind: "NPC_QUIZ", source: "encounter" });
      audio.fail();
      setFeedback({
        ok: false,
        msg: "✘ Sai.",
        picked: choice.label,
        selected: choice.full,
        correct: question.correctFull
      });
    }
  }, [question]);
  reactExports.useEffect(() => {
    if (!npc) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [npc, close]);
  if (!npc) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-back", onPointerDown: (e) => e.target === e.currentTarget && close(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "v3-overlay-card", role: "dialog", "aria-modal": "true", "aria-label": `Hội thoại với ${npc.name}`, tabIndex: -1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-overlay-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-overlay-kind", children: npc.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-x", onClick: close, "aria-label": "Đóng", children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-prompt", style: { marginBottom: "8px" }, children: npc.greetingVi }),
    (npc.affinity > 0 || npc.completedQuestCount > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-dialogue-meta", "aria-label": `Thân thiết ${npc.affinity} trên 100`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Thân thiết ",
        npc.affinity,
        "/100"
      ] }),
      npc.completedQuestCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        npc.completedQuestCount,
        " nhiệm vụ hoàn tất"
      ] })
    ] }),
    feedback ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `v3-overlay-feedback ${feedback.ok ? "is-ok" : "is-err"}`, style: { textAlign: "left", padding: "16px", background: "rgba(0,0,0,0.5)", borderRadius: "8px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "20px", fontWeight: "bold", marginBottom: "12px", textAlign: "center" }, children: feedback.msg }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "16px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "24px", color: "#ffd700" }, children: [
          feedback.correct.word || feedback.correct.kanji,
          feedback.correct.reading && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "16px", color: "#aaa", marginLeft: "8px" }, children: [
            "(",
            feedback.correct.reading,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsInline, { text: feedback.correct.reading || feedback.correct.word || feedback.correct.kanji })
        ] }),
        (feedback.correct.romaji || feedback.correct.reading && kanaToRomaji(feedback.correct.reading)) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#88ccff", fontSize: "18px", fontStyle: "italic", marginTop: "4px" }, children: feedback.correct.romaji || kanaToRomaji(feedback.correct.reading) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "12px", lineHeight: "1.5" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Ý nghĩa:" }),
        " ",
        feedback.correct.meaning || feedback.correct.vi
      ] }),
      feedback.correct.hanviet && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "12px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hán Việt:" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#ffaaaa" }, children: feedback.correct.hanviet })
      ] }),
      feedback.correct.examples && feedback.correct.examples.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "16px", background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "6px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "14px", color: "#aaa", marginBottom: "8px" }, children: "Ví dụ:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "4px" }, children: [
          feedback.correct.examples[0].ja,
          /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsInline, { text: feedback.correct.examples[0].ja })
        ] }),
        feedback.correct.examples[0].romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "14px", color: "#88ccff", marginBottom: "4px" }, children: feedback.correct.examples[0].romaji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "14px", color: "#ddd" }, children: feedback.correct.examples[0].vi })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WorldAIExplain,
        {
          question: `Từ nào có nghĩa là: ${question == null ? void 0 : question.prompt}?`,
          answer: question == null ? void 0 : question.correctText,
          userAnswer: feedback.picked,
          isCorrect: feedback.ok,
          itemInfo: {
            reading: feedback.correct.reading || feedback.correct.romaji || "",
            meaning: feedback.correct.meaning || feedback.correct.vi || ""
          },
          questionId: question == null ? void 0 : question.correctKey,
          analysisContext: {
            domain: "dialogue-vocab",
            overlay: "NPC dialogue vocab",
            questionPrompt: `Từ nào có nghĩa là: ${question == null ? void 0 : question.prompt}?`,
            promptVietnamese: question == null ? void 0 : question.prompt,
            correctAnswer: question == null ? void 0 : question.correctText,
            correctReading: feedback.correct.reading || (question == null ? void 0 : question.correctReading),
            correctRomaji: feedback.correct.romaji || (feedback.correct.reading ? kanaToRomaji(feedback.correct.reading) : ""),
            correctMeaning: feedback.correct.meaning || feedback.correct.vi || feedback.correct.gloss,
            examples: (feedback.correct.examples || []).slice(0, 1),
            choices: ((question == null ? void 0 : question.choices) || []).map((choice) => ({
              label: choice.label,
              reading: choice.reading,
              isCorrect: choice.key === (question == null ? void 0 : question.correctKey)
            }))
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "v3-overlay-choice",
          style: { marginTop: "24px", width: "100%", background: "#4a90e2", color: "white", fontWeight: "bold" },
          onClick: loadNext,
          children: "Câu tiếp theo"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      question && question.prompt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "16px", fontWeight: "bold" }, children: [
        'Từ nào có nghĩa là: "',
        question.prompt,
        '"?'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-choices", children: question && question.choices && question.choices.length > 0 ? question.choices.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        WorldChoiceRow,
        {
          label: c.label,
          reading: c.reading,
          onChoose: () => answer(c),
          onHover: () => audio.hover()
        },
        c.key
      )) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-choice", onClick: close, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-overlay-choice-jp", children: "Tạm biệt" }) }) })
    ] })
  ] }) });
}
function Joystick() {
  const baseRef = reactExports.useRef(null);
  const knobRef = reactExports.useRef(null);
  const touchId = reactExports.useRef(null);
  const origin = reactExports.useRef({ x: 0, y: 0 });
  const RADIUS = 50;
  const handleStart = reactExports.useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    const touch = e.changedTouches[0];
    touchId.current = touch.identifier;
    const rect = baseRef.current.getBoundingClientRect();
    origin.current = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  }, []);
  const handleMove = reactExports.useCallback((e) => {
    e.preventDefault();
    for (const touch of e.changedTouches) {
      if (touch.identifier !== touchId.current) continue;
      let dx = touch.clientX - origin.current.x;
      let dy = touch.clientY - origin.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > RADIUS) {
        dx = dx / dist * RADIUS;
        dy = dy / dist * RADIUS;
      }
      if (knobRef.current) {
        knobRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
      }
      setTouchMove(dx / RADIUS, -dy / RADIUS);
    }
  }, []);
  const handleEnd = reactExports.useCallback((e) => {
    for (const touch of e.changedTouches) {
      if (touch.identifier !== touchId.current) continue;
      touchId.current = null;
      if (knobRef.current) {
        knobRef.current.style.transform = "translate(0px, 0px)";
      }
      setTouchMove(0, 0);
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: baseRef,
      className: "v3-touch-joystick",
      onTouchStart: handleStart,
      onTouchMove: handleMove,
      onTouchEnd: handleEnd,
      onTouchCancel: handleEnd,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-touch-joystick__ring" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: knobRef, className: "v3-touch-joystick__knob" })
      ]
    }
  );
}
function ActionButton({ icon, label, onPress, onRelease, active: active2 }) {
  const handleStart = reactExports.useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    onPress == null ? void 0 : onPress();
  }, [onPress]);
  const handleEnd = reactExports.useCallback((e) => {
    e.preventDefault();
    onRelease == null ? void 0 : onRelease();
  }, [onRelease]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      className: `v3-touch-btn${active2 ? " is-active" : ""}`,
      onTouchStart: handleStart,
      onTouchEnd: handleEnd,
      onTouchCancel: handleEnd,
      "aria-label": label,
      children: icon
    }
  );
}
function CameraOrbitArea() {
  const activeTouches = reactExports.useRef(/* @__PURE__ */ new Map());
  const lastPinchDist = reactExports.useRef(0);
  const handleStart = reactExports.useCallback((e) => {
    for (const touch of e.changedTouches) {
      activeTouches.current.set(touch.identifier, { x: touch.clientX, y: touch.clientY });
    }
    if (activeTouches.current.size === 2) {
      const pts = [...activeTouches.current.values()];
      lastPinchDist.current = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
    }
  }, []);
  const handleMove = reactExports.useCallback((e) => {
    e.preventDefault();
    const touches = activeTouches.current;
    if (touches.size === 2) {
      for (const touch of e.changedTouches) {
        if (touches.has(touch.identifier)) {
          touches.set(touch.identifier, { x: touch.clientX, y: touch.clientY });
        }
      }
      const pts = [...touches.values()];
      const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
      const delta = (lastPinchDist.current - dist) * 0.05;
      applyTouchZoom(delta);
      lastPinchDist.current = dist;
    } else if (touches.size === 1) {
      const touch = e.changedTouches[0];
      if (!touches.has(touch.identifier)) return;
      const prev = touches.get(touch.identifier);
      const dx = touch.clientX - prev.x;
      const dy = touch.clientY - prev.y;
      applyTouchOrbit(dx, dy);
      touches.set(touch.identifier, { x: touch.clientX, y: touch.clientY });
    }
  }, []);
  const handleEnd = reactExports.useCallback((e) => {
    for (const touch of e.changedTouches) {
      activeTouches.current.delete(touch.identifier);
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "v3-touch-orbit-area",
      onTouchStart: handleStart,
      onTouchMove: handleMove,
      onTouchEnd: handleEnd,
      onTouchCancel: handleEnd
    }
  );
}
function TouchControls() {
  const [sprinting, setSprinting] = React.useState(false);
  const [flyUp, setFlyUp] = React.useState(false);
  const [flyDown, setFlyDown] = React.useState(false);
  reactExports.useEffect(() => {
    const v = (flyUp ? 1 : 0) - (flyDown ? 1 : 0);
    setTouchFlyVertical(v);
  }, [flyUp, flyDown]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-touch-controls", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CameraOrbitArea, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-touch-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Joystick, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-touch-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ActionButton,
        {
          icon: "⬆️",
          label: "Bay lên",
          onPress: () => setFlyUp(true),
          onRelease: () => setFlyUp(false),
          active: flyUp
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ActionButton,
        {
          icon: "🦅",
          label: "Bật/Tắt bay",
          onPress: touchFlyToggle
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ActionButton,
        {
          icon: "🦘",
          label: "Nhảy",
          onPress: touchJump
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ActionButton,
        {
          icon: "🏃",
          label: "Chạy nhanh",
          onPress: () => {
            setSprinting(true);
            setTouchSprint(true);
          },
          onRelease: () => {
            setSprinting(false);
            setTouchSprint(false);
          },
          active: sprinting
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ActionButton,
        {
          icon: "💬",
          label: "Tương tác",
          onPress: touchInteract
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ActionButton,
        {
          icon: "⬇️",
          label: "Bay xuống",
          onPress: () => setFlyDown(true),
          onRelease: () => setFlyDown(false),
          active: flyDown
        }
      )
    ] })
  ] });
}
const STATE$1 = { quests: /* @__PURE__ */ new Map() };
const listeners = /* @__PURE__ */ new Set();
function notify() {
  listeners.forEach((fn) => {
    try {
      fn();
    } catch (e) {
    }
  });
}
function progress(questKey, by = 1) {
  const q = STATE$1.quests.get(questKey);
  if (!q || q.status !== "active") return;
  q.progress = Math.min(q.target, q.progress + by);
  if (q.progress >= q.target) q.status = "completed";
  notify();
}
const MONSTER_PHRASES = Object.freeze({
  SLIME: [
    // Battle cries
    { jp: "やっつけろ！", romaji: "Yattsukero!", vi: "Đánh thôi!", kind: "cry" },
    { jp: "逃げるな！", romaji: "Nigeru na!", vi: "Đừng chạy!", kind: "cry" },
    { jp: "ぬるぬる～", romaji: "Nuru nuru~", vi: "Nhờn nhợt~", kind: "cry" },
    // N4 Vocabulary — water / nature
    { jp: "水 (みず)", romaji: "Mizu", vi: "Nước", kind: "vocab" },
    { jp: "体 (からだ)", romaji: "Karada", vi: "Cơ thể", kind: "vocab" },
    { jp: "濡れる (ぬれる)", romaji: "Nureru", vi: "Bị ướt", kind: "vocab" },
    { jp: "柔らかい (やわらかい)", romaji: "Yawarakai", vi: "Mềm mại", kind: "vocab" },
    { jp: "動く (うごく)", romaji: "Ugoku", vi: "Di chuyển", kind: "vocab" },
    { jp: "緑 (みどり)", romaji: "Midori", vi: "Màu xanh lá", kind: "vocab" },
    { jp: "洗う (あらう)", romaji: "Araou", vi: "Rửa / Tắm gội", kind: "vocab" },
    { jp: "流す (ながす)", romaji: "Nagasu", vi: "Xả nước / Làm trôi", kind: "vocab" },
    { jp: "液体 (えきたい)", romaji: "Ekitai", vi: "Chất lỏng", kind: "vocab" },
    // Kanji
    { jp: "水 → みず", romaji: "Mizu (water)", vi: "Nước — âm kun: みず", kind: "kanji" },
    { jp: "体 → からだ", romaji: "Karada (body)", vi: "Cơ thể — âm kun", kind: "kanji" },
    { jp: "洗 → あら/せん", romaji: "Ara / Sen (wash)", vi: "Tẩy rửa", kind: "kanji" },
    { jp: "流 → なが/りゅう", romaji: "Naga / Ryū (flow)", vi: "Dòng chảy", kind: "kanji" },
    { jp: "池 (いけ)", romaji: "Ike", vi: "Cái ao", kind: "vocab" },
    { jp: "汚れる (よごれる)", romaji: "Yogoreru", vi: "Bị bẩn", kind: "vocab" },
    { jp: "冷たい (つめたい)", romaji: "Tsumetai", vi: "Lạnh (buốt)", kind: "vocab" },
    { jp: "池 → いけ/ち", romaji: "Ike / Chi", vi: "Cái ao", kind: "kanji" },
    { jp: "汚 → よご/お", romaji: "Yogo / O", vi: "Bẩn", kind: "kanji" }
  ],
  GOBLIN: [
    // Battle cries
    { jp: "盗む！", romaji: "Nusumu!", vi: "Ăn cắp!", kind: "cry" },
    { jp: "捕まえろ！", romaji: "Tsukamaero!", vi: "Bắt lấy nó!", kind: "cry" },
    { jp: "宝物を寄こせ！", romaji: "Takaramono wo yokose!", vi: "Đưa kho báu đây!", kind: "cry" },
    // N4 Vocabulary — emotion, action
    { jp: "宝物 (たからもの)", romaji: "Takaramono", vi: "Kho báu / Vật báu", kind: "vocab" },
    { jp: "盗む (ぬすむ)", romaji: "Nusumu", vi: "Đánh cắp", kind: "vocab" },
    { jp: "逃げる (にげる)", romaji: "Nigeru", vi: "Bỏ trốn", kind: "vocab" },
    { jp: "怖い (こわい)", romaji: "Kowai", vi: "Đáng sợ", kind: "vocab" },
    { jp: "急ぐ (いそぐ)", romaji: "Isogu", vi: "Vội vàng", kind: "vocab" },
    { jp: "隠れる (かくれる)", romaji: "Kakureru", vi: "Ẩn nấp", kind: "vocab" },
    { jp: "見つける (みつける)", romaji: "Mitsukeru", vi: "Tìm thấy", kind: "vocab" },
    { jp: "泥棒 (どろぼう)", romaji: "Dorobō", vi: "Kẻ trộm", kind: "vocab" },
    { jp: "悪口 (わるぐち)", romaji: "Waruguchi", vi: "Lời nói xấu", kind: "vocab" },
    { jp: "隠す (かくす)", romaji: "Kakusu", vi: "Che giấu", kind: "vocab" },
    // Kanji
    { jp: "力 → ちから", romaji: "Chikara (power)", vi: "Sức mạnh", kind: "kanji" },
    { jp: "金 → かね/きん", romaji: "Kane / Kin (money/gold)", vi: "Tiền / Vàng", kind: "kanji" },
    { jp: "悪 → わる/あく", romaji: "Waru / Aku (bad)", vi: "Xấu / Ác", kind: "kanji" },
    { jp: "暗 → くら/あん", romaji: "Kura / An (dark)", vi: "Bóng tối", kind: "kanji" },
    { jp: "危険 (きけん)", romaji: "Kiken", vi: "Nguy hiểm", kind: "vocab" },
    { jp: "石 (いし)", romaji: "Ishi", vi: "Hòn đá", kind: "vocab" },
    { jp: "拾う (ひろう)", romaji: "Hirou", vi: "Nhặt", kind: "vocab" },
    { jp: "険 → けん", romaji: "Ken", vi: "Hiểm", kind: "kanji" },
    { jp: "拾 → ひろ/しゅう", romaji: "Hiro / Shuu", vi: "Nhặt", kind: "kanji" }
  ],
  ORC: [
    // Battle cries
    { jp: "戦え！", romaji: "Tatakae!", vi: "Chiến đấu!", kind: "cry" },
    { jp: "壊す！", romaji: "Kowasu!", vi: "Phá hủy!", kind: "cry" },
    { jp: "負けない！", romaji: "Makenai!", vi: "Không chịu thua!", kind: "cry" },
    { jp: "お前は弱い！", romaji: "Omae wa yowai!", vi: "Mày yếu lắm!", kind: "cry" },
    // N4 Vocabulary — combat, strength
    { jp: "力 (ちから)", romaji: "Chikara", vi: "Sức mạnh", kind: "vocab" },
    { jp: "戦う (たたかう)", romaji: "Tatakau", vi: "Chiến đấu", kind: "vocab" },
    { jp: "強い (つよい)", romaji: "Tsuyoi", vi: "Mạnh mẽ", kind: "vocab" },
    { jp: "勝つ (かつ)", romaji: "Katsu", vi: "Chiến thắng", kind: "vocab" },
    { jp: "負ける (まける)", romaji: "Makeru", vi: "Thất bại", kind: "vocab" },
    { jp: "攻撃 (こうげき)", romaji: "Kōgeki", vi: "Tấn công", kind: "vocab" },
    { jp: "武器 (ぶき)", romaji: "Buki", vi: "Vũ khí", kind: "vocab" },
    { jp: "怒る (おこる)", romaji: "Okoru", vi: "Nổi giận", kind: "vocab" },
    { jp: "壊す (こわす)", romaji: "Kowasu", vi: "Phá hủy", kind: "vocab" },
    { jp: "勝負 (しょうぶ)", romaji: "Shōbu", vi: "Trận đấu / Thắng thua", kind: "vocab" },
    // Kanji
    { jp: "力 → ちから/りき", romaji: "Chikara / Riki", vi: "Sức mạnh", kind: "kanji" },
    { jp: "戦 → いくさ/せん", romaji: "Ikusa / Sen (war)", vi: "Chiến tranh", kind: "kanji" },
    { jp: "勝 → か/しょう", romaji: "Ka / Shō (win)", vi: "Chiến thắng", kind: "kanji" },
    { jp: "負 → ま/ふ", romaji: "Ma / Fu (lose)", vi: "Thua / Thất bại", kind: "kanji" },
    { jp: "怒り (いかり)", romaji: "Ikari", vi: "Sự tức giận", kind: "vocab" },
    { jp: "血 (ち)", romaji: "Chi", vi: "Máu", kind: "vocab" },
    { jp: "痛い (いたい)", romaji: "Itai", vi: "Đau", kind: "vocab" },
    { jp: "怒 → おこ/ど", romaji: "Oko / Do", vi: "Giận dữ", kind: "kanji" },
    { jp: "痛 → いた/つう", romaji: "Ita / Tsuu", vi: "Đau đớn", kind: "kanji" }
  ],
  WISP: [
    // Battle cries
    { jp: "消えろ！", romaji: "Kiero!", vi: "Biến đi!", kind: "cry" },
    { jp: "お前も幽霊になれ！", romaji: "Omae mo yūrei ni nare!", vi: "Mày cũng thành ma đi!", kind: "cry" },
    { jp: "暗闇に来い…", romaji: "Kurayami ni koi...", vi: "Đến bóng tối đây...", kind: "cry" },
    // N4 Vocabulary — light, magic, mystery
    { jp: "光 (ひかり)", romaji: "Hikari", vi: "Ánh sáng", kind: "vocab" },
    { jp: "魔法 (まほう)", romaji: "Mahō", vi: "Ma pháp", kind: "vocab" },
    { jp: "夜 (よる)", romaji: "Yoru", vi: "Ban đêm", kind: "vocab" },
    { jp: "星 (ほし)", romaji: "Hoshi", vi: "Ngôi sao", kind: "vocab" },
    { jp: "不思議 (ふしぎ)", romaji: "Fushigi", vi: "Kỳ lạ / Bí ẩn", kind: "vocab" },
    { jp: "幽霊 (ゆうれい)", romaji: "Yūrei", vi: "Con ma", kind: "vocab" },
    { jp: "消える (きえる)", romaji: "Kieru", vi: "Biến mất", kind: "vocab" },
    { jp: "暗い (くらい)", romaji: "Kurai", vi: "Tối tăm", kind: "vocab" },
    { jp: "冷たい (つめたい)", romaji: "Tsumetai", vi: "Lạnh giá", kind: "vocab" },
    { jp: "幻 (まぼろし)", romaji: "Maboroshi", vi: "Ảo ảnh", kind: "vocab" },
    { jp: "魂 (たましい)", romaji: "Tamashii", vi: "Linh hồn", kind: "vocab" },
    // Kanji
    { jp: "光 → ひかり/こう", romaji: "Hikari / Kō (light)", vi: "Ánh sáng", kind: "kanji" },
    { jp: "夜 → よる/や", romaji: "Yoru / Ya (night)", vi: "Ban đêm", kind: "kanji" },
    { jp: "暗 → くら/あん", romaji: "Kura / An (dark)", vi: "Tối tăm", kind: "kanji" },
    { jp: "黒 → くろ/こく", romaji: "Kuro / Koku (black)", vi: "Màu đen", kind: "kanji" },
    { jp: "魂 (たましい)", romaji: "Tamashii", vi: "Linh hồn", kind: "vocab" },
    { jp: "浮く (うく)", romaji: "Uku", vi: "Trôi nổi", kind: "vocab" },
    { jp: "暗い (くらい)", romaji: "Kurai", vi: "Tối tăm", kind: "vocab" },
    { jp: "魂 → たましい", romaji: "Tamashii", vi: "Linh hồn", kind: "kanji" },
    { jp: "浮 → う/ふ", romaji: "U / Fu", vi: "Nổi", kind: "kanji" }
  ],
  WOLF: [
    // Battle cries
    { jp: "追うぞ！", romaji: "Ou zo!", vi: "Đuổi theo nào!", kind: "cry" },
    { jp: "逃げても無駄だ！", romaji: "Nigete mo muda da!", vi: "Chạy cũng vô ích!", kind: "cry" },
    { jp: "ウォオオ！", romaji: "Wōōō!", vi: "Hú hú hú!", kind: "cry" },
    // N4 Vocabulary — animals, forest, speed
    { jp: "狼 (おおかみ)", romaji: "Ōkami", vi: "Con sói", kind: "vocab" },
    { jp: "走る (はしる)", romaji: "Hashiru", vi: "Chạy", kind: "vocab" },
    { jp: "速い (はやい)", romaji: "Hayai", vi: "Nhanh", kind: "vocab" },
    { jp: "牙 (きば)", romaji: "Kiba", vi: "Nanh vuốt", kind: "vocab" },
    { jp: "森 (もり)", romaji: "Mori", vi: "Khu rừng", kind: "vocab" },
    { jp: "狩る (かる)", romaji: "Karu", vi: "Săn bắt", kind: "vocab" },
    { jp: "群れ (むれ)", romaji: "Mure", vi: "Đàn / Nhóm", kind: "vocab" },
    { jp: "追跡 (ついせき)", romaji: "Tsuiseki", vi: "Truy đuổi", kind: "vocab" },
    { jp: "足跡 (あしあと)", romaji: "Ashiato", vi: "Dấu chân", kind: "vocab" },
    { jp: "夜中 (よなか)", romaji: "Yonaka", vi: "Nửa đêm", kind: "vocab" },
    // Kanji
    { jp: "森 → もり/しん", romaji: "Mori / Shin (forest)", vi: "Rừng", kind: "kanji" },
    { jp: "速 → はや/そく", romaji: "Haya / Soku (fast)", vi: "Nhanh", kind: "kanji" },
    { jp: "追 → お/つい", romaji: "O / Tsui (chase)", vi: "Đuổi theo", kind: "kanji" },
    { jp: "犬 → いぬ/けん", romaji: "Inu / Ken (dog)", vi: "Con chó", kind: "kanji" },
    { jp: "月 (つき)", romaji: "Tsuki", vi: "Mặt trăng", kind: "vocab" },
    { jp: "森 (もり)", romaji: "Mori", vi: "Rừng rậm", kind: "vocab" },
    { jp: "走る (はしる)", romaji: "Hashiru", vi: "Chạy", kind: "vocab" },
    { jp: "月 → つき/げつ", romaji: "Tsuki / Getsu", vi: "Mặt trăng", kind: "kanji" },
    { jp: "走 → はし/そう", romaji: "Hashi / Sou", vi: "Chạy", kind: "kanji" }
  ],
  FOX: [
    // Battle cries
    { jp: "化かすぞ！", romaji: "Bakasu zo!", vi: "Tao sẽ đánh lừa mày!", kind: "cry" },
    { jp: "甘く見るな！", romaji: "Amaku miru na!", vi: "Đừng coi thường tao!", kind: "cry" },
    { jp: "賢い者が勝つ！", romaji: "Kashikoi mono ga katsu!", vi: "Kẻ khôn ngoan sẽ thắng!", kind: "cry" },
    // N4 Vocabulary — intelligence, cunning
    { jp: "狐 (きつね)", romaji: "Kitsune", vi: "Con cáo", kind: "vocab" },
    { jp: "賢い (かしこい)", romaji: "Kashikoi", vi: "Thông minh / Khôn", kind: "vocab" },
    { jp: "速い (はやい)", romaji: "Hayai", vi: "Nhanh nhẹn", kind: "vocab" },
    { jp: "騙す (だます)", romaji: "Damasu", vi: "Lừa dối", kind: "vocab" },
    { jp: "尻尾 (しっぽ)", romaji: "Shippo", vi: "Đuôi", kind: "vocab" },
    { jp: "化ける (ばける)", romaji: "Bakeru", vi: "Biến hình", kind: "vocab" },
    { jp: "嘘 (うそ)", romaji: "Uso", vi: "Lời nói dối", kind: "vocab" },
    { jp: "秘密 (ひみつ)", romaji: "Himitsu", vi: "Bí mật", kind: "vocab" },
    { jp: "誘う (さそう)", romaji: "Sasou", vi: "Mời mọc / Rủ rê", kind: "vocab" },
    // Kanji
    { jp: "知 → し/ち", romaji: "Shi / Chi (knowledge)", vi: "Kiến thức", kind: "kanji" },
    { jp: "言 → い/こと/げん", romaji: "I / Koto / Gen (say)", vi: "Nói / Ngôn từ", kind: "kanji" },
    { jp: "心 → こころ/しん", romaji: "Kokoro / Shin (heart)", vi: "Trái tim / Tâm trí", kind: "kanji" },
    { jp: "化ける (ばける)", romaji: "Bakeru", vi: "Biến hóa", kind: "vocab" },
    { jp: "美しい (うつくしい)", romaji: "Utsukushii", vi: "Xinh đẹp", kind: "vocab" },
    { jp: "火 (ひ)", romaji: "Hi", vi: "Lửa", kind: "vocab" },
    { jp: "化 → ば/か", romaji: "Ba / Ka", vi: "Biến hóa", kind: "kanji" },
    { jp: "美 → うつく/び", romaji: "Utsuku / Bi", vi: "Đẹp", kind: "kanji" }
  ],
  BOAR: [
    // Battle cries
    { jp: "突進！", romaji: "Tosshin!", vi: "Lao thẳng!", kind: "cry" },
    { jp: "どけ！", romaji: "Doke!", vi: "Tránh ra!", kind: "cry" },
    { jp: "怒るなよ！", romaji: "Okoru na yo!", vi: "Đừng để tao tức!", kind: "cry" },
    // N4 Vocabulary — animals, nature
    { jp: "猪 (いのしし)", romaji: "Inoshishi", vi: "Con lợn rừng", kind: "vocab" },
    { jp: "怒る (おこる)", romaji: "Okoru", vi: "Tức giận", kind: "vocab" },
    { jp: "突進 (とっしん)", romaji: "Tosshin", vi: "Lao thẳng / Xung phong", kind: "vocab" },
    { jp: "荒野 (こうや)", romaji: "Kōya", vi: "Vùng hoang dã", kind: "vocab" },
    { jp: "野生 (やせい)", romaji: "Yasei", vi: "Hoang dã", kind: "vocab" },
    { jp: "頑固 (がんこ)", romaji: "Ganko", vi: "Cứng đầu", kind: "vocab" },
    { jp: "衝突 (しょうとつ)", romaji: "Shōtotsu", vi: "Va chạm / Tông vào", kind: "vocab" },
    { jp: "畑 (はたけ)", romaji: "Hatake", vi: "Cánh đồng / Nương rẫy", kind: "vocab" },
    { jp: "荒れる (あれる)", romaji: "Areru", vi: "Trở nên hung tợn", kind: "vocab" },
    // Kanji
    { jp: "野 → の/や", romaji: "No / Ya (field/wild)", vi: "Đồng ruộng / Hoang dã", kind: "kanji" },
    { jp: "田 → た/でん", romaji: "Ta / Den (rice field)", vi: "Ruộng lúa", kind: "kanji" },
    { jp: "力 → ちから/りき", romaji: "Chikara / Riki (power)", vi: "Sức mạnh", kind: "kanji" },
    { jp: "突進 (とっしん)", romaji: "Tosshin", vi: "Lao tới", kind: "vocab" },
    { jp: "太い (ふとい)", romaji: "Futoi", vi: "Mập mạp", kind: "vocab" },
    { jp: "豚 (ぶた)", romaji: "Buta", vi: "Con lợn", kind: "vocab" },
    { jp: "突 → つ/とつ", romaji: "Tsu / Totsu", vi: "Đột ngột, Đâm", kind: "kanji" },
    { jp: "太 → ふと/たい", romaji: "Futo / Tai", vi: "To béo", kind: "kanji" }
  ],
  BEAR: [
    // Battle cries
    { jp: "ガオオオ！", romaji: "Gaooo!", vi: "Gầm gừ!", kind: "cry" },
    { jp: "邪魔するな！", romaji: "Jama suru na!", vi: "Đừng cản đường tao!", kind: "cry" },
    { jp: "お前が餌だ！", romaji: "Omae ga esa da!", vi: "Mày là mồi của tao!", kind: "cry" },
    // N4 Vocabulary — size, nature, forest
    { jp: "熊 (くま)", romaji: "Kuma", vi: "Con gấu", kind: "vocab" },
    { jp: "大きい (おおきい)", romaji: "Ōkii", vi: "To lớn", kind: "vocab" },
    { jp: "危ない (あぶない)", romaji: "Abunai", vi: "Nguy hiểm", kind: "vocab" },
    { jp: "冬眠 (とうみん)", romaji: "Tōmin", vi: "Ngủ đông", kind: "vocab" },
    { jp: "爪 (つめ)", romaji: "Tsume", vi: "Móng vuốt", kind: "vocab" },
    { jp: "強い (つよい)", romaji: "Tsuyoi", vi: "Mạnh mẽ", kind: "vocab" },
    { jp: "山 (やま)", romaji: "Yama", vi: "Núi", kind: "vocab" },
    { jp: "森の中 (もりのなか)", romaji: "Mori no naka", vi: "Trong rừng", kind: "vocab" },
    { jp: "足音 (あしおと)", romaji: "Ashioto", vi: "Tiếng bước chân", kind: "vocab" },
    { jp: "捕まえる (つかまえる)", romaji: "Tsukamaeru", vi: "Bắt lấy / Tóm lấy", kind: "vocab" },
    // Kanji
    { jp: "山 → やま/さん", romaji: "Yama / San (mountain)", vi: "Núi", kind: "kanji" },
    { jp: "大 → おお/だい/たい", romaji: "Ō / Dai / Tai (big)", vi: "To lớn", kind: "kanji" },
    { jp: "林 → はやし/りん", romaji: "Hayashi / Rin (woods)", vi: "Rừng thưa", kind: "kanji" },
    { jp: "音 → おと/おん", romaji: "Oto / On (sound)", vi: "Âm thanh", kind: "kanji" },
    { jp: "冬 (ふゆ)", romaji: "Fuyu", vi: "Mùa đông", kind: "vocab" },
    { jp: "重い (おもい)", romaji: "Omoi", vi: "Nặng", kind: "vocab" },
    { jp: "爪 (つめ)", romaji: "Tsume", vi: "Móng vuốt", kind: "vocab" },
    { jp: "冬 → ふゆ/とう", romaji: "Fuyu / Tou", vi: "Mùa đông", kind: "kanji" },
    { jp: "重 → おも/じゅう", romaji: "Omo / Juu", vi: "Nặng", kind: "kanji" }
  ],
  LIZARD: [
    // Battle cries
    { jp: "シャー！", romaji: "Shā!", vi: "Xì xì!", kind: "cry" },
    { jp: "冷たい目で見てやる！", romaji: "Tsumetai me de mite yaru!", vi: "Tao nhìn mày bằng ánh mắt lạnh!", kind: "cry" },
    // N4 Vocabulary — reptiles, nature, speed
    { jp: "トカゲ", romaji: "Tokage", vi: "Con thằn lằn", kind: "vocab" },
    { jp: "冷たい (つめたい)", romaji: "Tsumetai", vi: "Lạnh / Lạnh lùng", kind: "vocab" },
    { jp: "鱗 (うろこ)", romaji: "Uroko", vi: "Vảy (da)", kind: "vocab" },
    { jp: "素早い (すばやい)", romaji: "Subayai", vi: "Lanh lẹ", kind: "vocab" },
    { jp: "岩 (いわ)", romaji: "Iwa", vi: "Tảng đá", kind: "vocab" },
    { jp: "這う (はう)", romaji: "Hau", vi: "Bò (trên đất)", kind: "vocab" },
    { jp: "砂漠 (さばく)", romaji: "Sabaku", vi: "Sa mạc", kind: "vocab" },
    { jp: "逃げる (にげる)", romaji: "Nigeru", vi: "Bỏ trốn / Chạy trốn", kind: "vocab" },
    { jp: "石の下 (いしのした)", romaji: "Ishi no shita", vi: "Dưới viên đá", kind: "vocab" },
    // Kanji
    { jp: "岩 → いわ/がん", romaji: "Iwa / Gan (rock)", vi: "Đá tảng", kind: "kanji" },
    { jp: "石 → いし/せき", romaji: "Ishi / Seki (stone)", vi: "Đá", kind: "kanji" },
    { jp: "虫 → むし/ちゅう", romaji: "Mushi / Chū (insect)", vi: "Côn trùng / Sâu", kind: "kanji" },
    { jp: "鱗 (うろこ)", romaji: "Uroko", vi: "Vảy", kind: "vocab" },
    { jp: "尻尾 (しっぽ)", romaji: "Shippo", vi: "Cái đuôi", kind: "vocab" },
    { jp: "草 (くさ)", romaji: "Kusa", vi: "Cỏ", kind: "vocab" },
    { jp: "尾 → お/び", romaji: "O / Bi", vi: "Cái đuôi", kind: "kanji" },
    { jp: "草 → くさ/そう", romaji: "Kusa / Sou", vi: "Cỏ", kind: "kanji" }
  ],
  BAT: [
    // Battle cries
    { jp: "チチチ！", romaji: "Chichichi!", vi: "Chít chít!", kind: "cry" },
    { jp: "暗闇は俺の領域だ！", romaji: "Kurayami wa ore no ryōiki da!", vi: "Bóng tối là lãnh địa của tao!", kind: "cry" },
    // N4 Vocabulary — night, flying, caves
    { jp: "コウモリ", romaji: "Kōmori", vi: "Con dơi", kind: "vocab" },
    { jp: "夜 (よる)", romaji: "Yoru", vi: "Ban đêm", kind: "vocab" },
    { jp: "飛ぶ (とぶ)", romaji: "Tobu", vi: "Bay", kind: "vocab" },
    { jp: "暗い (くらい)", romaji: "Kurai", vi: "Tối tăm", kind: "vocab" },
    { jp: "洞窟 (どうくつ)", romaji: "Dōkutsu", vi: "Hang động", kind: "vocab" },
    { jp: "超音波 (ちょうおんぱ)", romaji: "Chōonpa", vi: "Sóng siêu âm", kind: "vocab" },
    { jp: "天井 (てんじょう)", romaji: "Tenjō", vi: "Trần nhà", kind: "vocab" },
    { jp: "逆さま (さかさま)", romaji: "Sakasama", vi: "Ngược đầu / Ngược lại", kind: "vocab" },
    { jp: "静か (しずか)", romaji: "Shizuka", vi: "Yên tĩnh", kind: "vocab" },
    // Kanji
    { jp: "夜 → よる/や", romaji: "Yoru / Ya (night)", vi: "Ban đêm", kind: "kanji" },
    { jp: "空 → そら/くう", romaji: "Sora / Kū (sky)", vi: "Bầu trời", kind: "kanji" },
    { jp: "静 → しず/せい", romaji: "Shizu / Sei (quiet)", vi: "Yên tĩnh", kind: "kanji" },
    { jp: "音 → おと/おん", romaji: "Oto / On (sound)", vi: "Âm thanh", kind: "kanji" },
    { jp: "空 (そら)", romaji: "Sora", vi: "Bầu trời", kind: "vocab" },
    { jp: "飛ぶ (とぶ)", romaji: "Tobu", vi: "Bay", kind: "vocab" },
    { jp: "音 (おと)", romaji: "Oto", vi: "Âm thanh", kind: "vocab" },
    { jp: "空 → そら/くう", romaji: "Sora / Kuu", vi: "Bầu trời", kind: "kanji" },
    { jp: "飛 → と/ひ", romaji: "To / Hi", vi: "Bay", kind: "kanji" }
  ],
  WRAITH: [
    // Battle cries
    { jp: "呪う！", romaji: "Norou!", vi: "Nguyền rủa!", kind: "cry" },
    { jp: "お前も死ぬ運命だ…", romaji: "Omae mo shinu unmei da...", vi: "Mày cũng có số chết...", kind: "cry" },
    { jp: "消えない…消えない！", romaji: "Kienai... kienai!", vi: "Không biến mất... không biến mất!", kind: "cry" },
    // N4 Vocabulary — supernatural, death, spirit
    { jp: "怨霊 (おんりょう)", romaji: "Onryō", vi: "Oan hồn", kind: "vocab" },
    { jp: "呪い (のろい)", romaji: "Noroi", vi: "Lời nguyền", kind: "vocab" },
    { jp: "死 (し)", romaji: "Shi", vi: "Cái chết", kind: "vocab" },
    { jp: "魂 (たましい)", romaji: "Tamashii", vi: "Linh hồn", kind: "vocab" },
    { jp: "恨む (うらむ)", romaji: "Uramu", vi: "Oán hận", kind: "vocab" },
    { jp: "闇 (やみ)", romaji: "Yami", vi: "Bóng tối", kind: "vocab" },
    { jp: "運命 (うんめい)", romaji: "Unmei", vi: "Số phận", kind: "vocab" },
    { jp: "呪術 (じゅじゅつ)", romaji: "Jujutsu", vi: "Thuật nguyền rủa", kind: "vocab" },
    { jp: "浮く (うく)", romaji: "Uku", vi: "Nổi / Trôi lơ lửng", kind: "vocab" },
    { jp: "怖い (こわい)", romaji: "Kowai", vi: "Đáng sợ", kind: "vocab" },
    // Kanji
    { jp: "死 → し/しぬ", romaji: "Shi / Shinu (death)", vi: "Chết", kind: "kanji" },
    { jp: "霊 → れい/りょう", romaji: "Rei / Ryō (spirit)", vi: "Linh hồn", kind: "kanji" },
    { jp: "悪 → わる/あく", romaji: "Waru / Aku (bad)", vi: "Xấu xa", kind: "kanji" },
    { jp: "光 → ひかり/こう", romaji: "Hikari / Kō (light)", vi: "Ánh sáng", kind: "kanji" },
    { jp: "死 (し)", romaji: "Shi", vi: "Cái chết", kind: "vocab" },
    { jp: "恐ろしい (おそろしい)", romaji: "Osoroshii", vi: "Kinh khủng", kind: "vocab" },
    { jp: "呪い (のろい)", romaji: "Noroi", vi: "Lời nguyền", kind: "vocab" },
    { jp: "死 → し", romaji: "Shi", vi: "Chết", kind: "kanji" },
    { jp: "恐 → おそ/きょう", romaji: "Oso / Kyou", vi: "Sợ hãi", kind: "kanji" }
  ],
  TITAN: [
    // Battle cries
    { jp: "粉砕！", romaji: "Funsai!", vi: "Nghiền nát!", kind: "cry" },
    { jp: "最強は俺だ！", romaji: "Saikyō wa ore da!", vi: "Tao là kẻ mạnh nhất!", kind: "cry" },
    { jp: "お前など敵ではない！", romaji: "Omae nado teki de wa nai!", vi: "Mày không xứng là đối thủ!", kind: "cry" },
    { jp: "大地よ、震えろ！", romaji: "Daichi yo, furuero!", vi: "Đất đai, hãy rung chuyển!", kind: "cry" },
    // N4 Vocabulary — power, size, epic scale
    { jp: "巨人 (きょじん)", romaji: "Kyojin", vi: "Người khổng lồ", kind: "vocab" },
    { jp: "最強 (さいきょう)", romaji: "Saikyō", vi: "Mạnh nhất", kind: "vocab" },
    { jp: "地震 (じしん)", romaji: "Jishin", vi: "Động đất", kind: "vocab" },
    { jp: "恐怖 (きょうふ)", romaji: "Kyōfu", vi: "Nỗi sợ hãi", kind: "vocab" },
    { jp: "巨大 (きょだい)", romaji: "Kyodai", vi: "Khổng lồ / Vĩ đại", kind: "vocab" },
    { jp: "破壊 (はかい)", romaji: "Hakai", vi: "Hủy diệt", kind: "vocab" },
    { jp: "無敵 (むてき)", romaji: "Muteki", vi: "Bất khả chiến bại", kind: "vocab" },
    { jp: "支配 (しはい)", romaji: "Shihai", vi: "Thống trị", kind: "vocab" },
    { jp: "破壊者 (はかいしゃ)", romaji: "Hakaisha", vi: "Kẻ phá hủy", kind: "vocab" },
    { jp: "重い (おもい)", romaji: "Omoi", vi: "Nặng nề", kind: "vocab" },
    { jp: "倒す (たおす)", romaji: "Taosu", vi: "Hạ gục", kind: "vocab" },
    // Kanji
    { jp: "巨 → きょ", romaji: "Kyo (giant/huge)", vi: "Khổng lồ", kind: "kanji" },
    { jp: "強 → つよ/きょう", romaji: "Tsuyo / Kyō (strong)", vi: "Mạnh mẽ", kind: "kanji" },
    { jp: "重 → おも/じゅう", romaji: "Omo / Jū (heavy)", vi: "Nặng", kind: "kanji" },
    { jp: "力 → ちから/りき", romaji: "Chikara / Riki (power)", vi: "Sức mạnh", kind: "kanji" },
    { jp: "巨大 (きょだい)", romaji: "Kyodai", vi: "Khổng lồ", kind: "vocab" },
    { jp: "踏む (ふむ)", romaji: "Fumu", vi: "Dẫm lên", kind: "vocab" },
    { jp: "山 (やま)", romaji: "Yama", vi: "Ngọn núi", kind: "vocab" },
    { jp: "巨 → きょ", romaji: "Kyo", vi: "Khổng lồ", kind: "kanji" },
    { jp: "踏 → ふ/とう", romaji: "Fu / Tou", vi: "Dẫm đạp", kind: "kanji" }
  ]
});
function pickMonsterVocab(kind) {
  const pool = MONSTER_PHRASES[kind];
  if (!pool || pool.length === 0) return null;
  const learning = pool.filter((p) => p.kind === "vocab" || p.kind === "kanji");
  if (learning.length === 0) return pool[Math.floor(Math.random() * pool.length)];
  return learning[Math.floor(Math.random() * learning.length)];
}
const EXAM_STEM_ROMAJI = {
  "下線の言葉はどう読みますか。": "Kasen no kotoba wa dou yomimasu ka.",
  "ひらがなで書かれた言葉は、漢字でどう書きますか。": "Hiragana de kakareta kotoba wa, kanji de dou kakimasu ka.",
  "文の意味に合う言葉を選んでください。": "Bun no imi ni au kotoba o erande kudasai.",
  "＿＿＿の言葉に意味が最も近いものを選んでください。": "___ no kotoba ni imi ga mottomo chikai mono o erande kudasai.",
  "次の言葉の使い方として最もよいものを選んでください。": "Tsugi no kotoba no tsukaikata to shite mottomo yoi mono o erande kudasai.",
  "次の文とだいたい同じ意味の文を選んでください。": "Tsugi no bun to daitai onaji imi no bun o erande kudasai."
};
const MONSTER_KINDS = Object.keys(MONSTER_PHRASES);
function buildMonsterQuiz(seed) {
  const kind = MONSTER_KINDS[seed % MONSTER_KINDS.length];
  const vocab = pickMonsterVocab(kind);
  if (!vocab) return null;
  const allVocab = [];
  for (const k of MONSTER_KINDS) {
    if (k === kind) continue;
    const pool = MONSTER_PHRASES[k];
    if (!pool) continue;
    const learning = pool.filter((p) => p.kind === "vocab" || p.kind === "kanji");
    allVocab.push(...learning);
  }
  shuffle$4(allVocab);
  const distractors = allVocab.filter((v) => v.jp !== vocab.jp).slice(0, 3);
  if (distractors.length < 3) return null;
  const choices = shuffle$4([
    { key: `m:${vocab.jp}`, label: vocab.jp, reading: vocab.romaji, isCorrect: true },
    ...distractors.map((d) => ({
      key: `m:${d.jp}`,
      label: d.jp,
      reading: d.romaji,
      isCorrect: false
    }))
  ]);
  return {
    prompt: vocab.vi,
    correctKey: `m:${vocab.jp}`,
    correctText: vocab.jp,
    correctReading: vocab.romaji,
    choices,
    monsterKind: kind
  };
}
function buildVocabQuiz(seed = Date.now(), type = "VOCAB_TREE") {
  return type === "VOCAB_JLPT" ? buildWorldJlptVocabQuestion(seed) : buildWorldVocabQuestion(seed);
}
const VI_MASK_MAP = {
  "vocab-orthography-houritsu": "luật",
  "vocab-orthography-dansei": "nam",
  "vocab-orthography-jugyou": "Giờ học",
  "vocab-context-maniau": "kịp",
  "vocab-context-dondon": "tích cực",
  "vocab-context-tashika": "chắc chắn",
  "vocab-context-jiynuu": "tự do",
  "vocab-context-shippai": "thất bại",
  "vocab-context-otosu": "đánh rơi",
  "vocab-context-naosu": "sửa lại",
  "vocab-context-sagasu": "tìm",
  "vocab-paraphrase-chanto": "đầy đủ",
  "vocab-paraphrase-daijoubu": "có được không",
  "vocab-paraphrase-tama-ni": "thỉnh thoảng",
  "vocab-paraphrase-hijou-ni": "cực kỳ",
  "vocab-paraphrase-kitsu-i": "vất vả",
  "vocab-paraphrase-shouganai": "đành chịu",
  "vocab-paraphrase-tsumaranai": "tẻ nhạt/không hay",
  "vocab-paraphrase-nigeru": "bỏ chạy",
  "vocab-paraphrase-wazawaza": "cất công",
  "vocab-paraphrase-yasashii": "dễ",
  "vocab-paraphrase-sakki": "Vừa nãy",
  "vocab-usage-yoyaku": "đặt phòng",
  "vocab-usage-soudan": "tham khảo ý kiến",
  "vocab-usage-junbi": "chuẩn bị",
  "vocab-usage-enryo": "ngại ngần",
  "vocab-usage-keiken": "kinh nghiệm",
  "vocab-usage-yakusoku_2": "đã hứa",
  "vocab-usage-shippai_3": "không tốt",
  "vocab-usage-kyouiku": "giáo dục",
  "vocab-usage-houritsu": "luật",
  "vocab-reading-ryokan": "quán trọ kiểu Nhật",
  "vocab-reading-kesseki": "nghỉ học",
  "vocab-orthography-shuppatsu": "khởi hành",
  "vocab-orthography-kisoku": "nội quy",
  "vocab-context-taitei": "thường",
  "vocab-context-toutou": "cuối cùng",
  "vocab-context-yatto": "cuối cùng",
  "vocab-paraphrase-mousugu": "sắp đến",
  "vocab-paraphrase-sokkuri": "giống hệt",
  "vocab-paraphrase-chittomo": "chẳng",
  "vocab-usage-koshou": "bị hỏng",
  "vocab-usage-hikkoshi": "chuyển",
  "vocab-usage-gen-in": "nguyên nhân"
};
function getMaskedVi(id, sentenceVi, meaning) {
  if (!sentenceVi) return "";
  const customWord = VI_MASK_MAP[id];
  if (customWord) {
    const regex = new RegExp(customWord, "gi");
    if (regex.test(sentenceVi)) {
      return sentenceVi.replace(regex, "___");
    }
  }
  const meanings = (meaning || "").split(/[,，/、;；]/).map((m) => m.trim()).filter(Boolean);
  meanings.sort((a, b) => b.length - a.length);
  for (const m of meanings) {
    if (!m) continue;
    const regex = new RegExp(m, "gi");
    if (regex.test(sentenceVi)) {
      return sentenceVi.replace(regex, "___");
    }
  }
  const clean = (str) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  const cleanVi = clean(sentenceVi);
  for (const m of meanings) {
    const cleanM = clean(m);
    if (cleanM.length < 2) continue;
    const startIdx = cleanVi.indexOf(cleanM);
    if (startIdx !== -1) {
      const originalPart = sentenceVi.substring(startIdx, startIdx + cleanM.length);
      return sentenceVi.replace(originalPart, "___");
    }
  }
  return sentenceVi;
}
function HighlightedSentence({ sentence, target }) {
  if (!sentence) return null;
  const displaySentence = sentence.replace(/＿＿＿/g, "（　）").replace(/____/g, "（　）");
  if (!target || target === "＿＿＿" || target.includes("＿") || !String(sentence).includes(target)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-sentence", style: { position: "relative", paddingRight: "32px", fontSize: "20px" }, children: [
      displaySentence,
      /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsInline, { text: sentence.replace(/_+/g, "なに") })
    ] });
  }
  const parts = String(sentence).split(target);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-sentence", style: { position: "relative", paddingRight: "32px", fontSize: "20px" }, children: [
    parts.map((part, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
      part,
      index < parts.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v3-exam-target", children: [
        "（",
        target,
        "）"
      ] })
    ] }, `${part}-${index}`)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsInline, { text: sentence.replace(/_+/g, "なに") })
  ] });
}
function buildVocabAiQuestion(question) {
  if ((question == null ? void 0 : question.stem) || (question == null ? void 0 : question.sentence)) {
    return [question.examTypeLabel, question.stem, question.sentence].filter(Boolean).join(" / ");
  }
  return `Từ nào có nghĩa là: ${question == null ? void 0 : question.prompt}?`;
}
function EncounterOverlay() {
  const [encounter, setEncounter] = reactExports.useState(null);
  const [question, setQuestion] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [showTranslation, setShowTranslation] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onTrigger = (e) => {
      const enc = e.detail;
      setEncounter(enc);
      setShowTranslation(false);
      if (enc.type === "COMBAT_MOB") {
        const mq = buildMonsterQuiz(enc.seed || Math.floor(Math.random() * 1e3));
        if (mq) {
          setQuestion(mq);
          setFeedback(null);
          audio.encounter();
          emitPetSpeak(mq.correctText);
          return;
        }
      }
      const q = buildVocabQuiz(enc.seed || Date.now(), enc.type);
      if (!q) {
        if (!isReady()) {
          const retryTimer = setTimeout(() => {
            const q2 = buildVocabQuiz(Date.now(), enc.type);
            if (q2) {
              setQuestion(q2);
              setFeedback(null);
              audio.encounter();
              emitPetSpeak(q2.correctText);
            } else {
              setQuestion({ prompt: "Nội dung đang tải — thử lại sau.", answer: null });
            }
          }, 800);
          setQuestion({ prompt: "⏳ Đang tải từ vựng…", answer: null });
          return () => clearTimeout(retryTimer);
        }
        setQuestion({ done: true });
        return void 0;
      }
      setQuestion(q);
      setFeedback(null);
      audio.encounter();
      emitPetSpeak(q.correctText);
    };
    return onEncounter(onTrigger);
  }, []);
  const close = reactExports.useCallback(() => {
    setEncounter(null);
    setQuestion(null);
    setFeedback(null);
    setShowTranslation(false);
  }, []);
  const dialogRef = useDialogFocus(Boolean(encounter && question), close);
  const loadNext = reactExports.useCallback(() => {
    setShowTranslation(false);
    if ((encounter == null ? void 0 : encounter.type) === "COMBAT_MOB") {
      const mq = buildMonsterQuiz(Math.floor(Math.random() * 1e3));
      if (mq) {
        setQuestion(mq);
        setFeedback(null);
        emitPetSpeak(mq.correctText);
        return;
      }
    }
    const q = buildVocabQuiz(Date.now(), encounter == null ? void 0 : encounter.type);
    if (q) {
      setQuestion(q);
      setFeedback(null);
      emitPetSpeak(q.correctText);
    } else {
      setQuestion({ done: true });
      setFeedback(null);
    }
  }, [encounter, close]);
  const answer = reactExports.useCallback((choice) => {
    if (!question || !question.correctKey) return;
    const isCorrect = choice.key === question.correctKey;
    const studyDomain = question.studyDomain || (encounter == null ? void 0 : encounter.studyDomain) || ((encounter == null ? void 0 : encounter.type) === "VOCAB_JLPT" ? "vocabJlpt" : "vocab");
    recordStudyAnswer(studyDomain, question.correctKey, isCorrect);
    if (isCorrect) {
      reward({ itemKey: choice.key, quality: 4, kind: encounter == null ? void 0 : encounter.type, xp: 8, source: "encounter" });
      progress(`world.${encounter == null ? void 0 : encounter.type}`, 1);
      audio.reward();
    } else {
      fail({ itemKey: question.correctKey, kind: encounter == null ? void 0 : encounter.type, source: "encounter" });
      audio.fail();
    }
    setFeedback({
      ok: isCorrect,
      msg: isCorrect ? "✔ Đúng rồi!" : "✘ Chưa chính xác.",
      picked: choice.label,
      correct: question.correctFull || {
        word: question.correctText,
        reading: question.correctReading,
        romaji: question.correctReading,
        vi: question.prompt
      }
    });
    setShowTranslation(true);
  }, [question, encounter]);
  reactExports.useEffect(() => {
    if (!encounter) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [encounter, close]);
  if (!encounter || !question) return null;
  const isJlptVocab = encounter.type === "VOCAB_JLPT";
  const isLegacyVocab = encounter.type === "VOCAB_TREE" && !question.examTypeLabel;
  const vocabLabel = isJlptVocab ? "Từ Vựng - Ngữ pháp JLPT" : "Từ vựng";
  const hasRealTarget = question.target && question.target !== "＿＿＿" && !question.target.includes("＿");
  const sentenceRomajiStr = (() => {
    if (!question.sentenceReading) return "";
    let sentenceRomaji = kanaToRomaji(question.sentenceReading);
    if (hasRealTarget && question.correctReading) {
      const targetRomaji = kanaToRomaji(question.correctReading);
      const regex = new RegExp(targetRomaji, "gi");
      sentenceRomaji = sentenceRomaji.replace(regex, "___");
    }
    return sentenceRomaji.replace(/＿＿＿/g, " ___ ").replace(/____/g, " ___ ").trim();
  })();
  const fullSentenceRomaji = (() => {
    if (!question.sentenceReading) return "";
    if (!hasRealTarget && question.correctReading) {
      const filledKana = question.sentenceReading.replace(/＿＿＿/g, question.correctReading).replace(/____/g, question.correctReading);
      return kanaToRomaji(filledKana);
    }
    return kanaToRomaji(question.sentenceReading);
  })();
  const sentenceViStr = (() => {
    const full = question.correctFull;
    if (!full || !full.sentenceVi) return "";
    return getMaskedVi(question.id, full.sentenceVi, full.meaning);
  })();
  const safeQuestionTtsText = safeQuestionTts({
    text: question.sentenceReading || question.sentence || question.prompt,
    secrets: [
      question.correctText,
      question.correctReading,
      question.examType === "kanji-reading" ? question.target : ""
    ].filter(Boolean)
  });
  if (question.done) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `v3-overlay-back ${isLegacyVocab ? "v3-vocab-legacy-overlay" : ""}`, onPointerDown: (e) => e.target === e.currentTarget && close(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "v3-overlay-card", role: "dialog", "aria-modal": "true", "aria-label": vocabLabel, tabIndex: -1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-overlay-head", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v3-overlay-kind", children: [
          "🌳 ",
          vocabLabel
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-x", onClick: close, "aria-label": "Đóng", children: "✕" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-overlay-prompt", children: [
        "Bạn đã hoàn thành vòng ",
        vocabLabel,
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-study-empty-note", children: "Bấm Đặt lại ở lộ trình JLPT N4 World để luyện lại các câu đã đúng." })
    ] }) });
  }
  const typeLabel = encounter.type === "COMBAT_MOB" ? `👺 ${question.monsterKind || "Quái vật"}` : encounter.type === "NPC_QUIZ" ? "🗣️ Trắc nghiệm" : `🌳 ${vocabLabel}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `v3-overlay-back ${isLegacyVocab ? "v3-vocab-legacy-overlay" : ""}`, onPointerDown: (e) => e.target === e.currentTarget && close(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "v3-overlay-card", role: "dialog", "aria-modal": "true", "aria-label": typeLabel, tabIndex: -1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-overlay-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-overlay-kind", children: typeLabel }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-x", onClick: close, "aria-label": "Đóng", children: "✕" })
    ] }),
    feedback ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `v3-overlay-feedback ${feedback.ok ? "is-ok" : "is-err"}`, style: { textAlign: "left", padding: "16px", background: "rgba(0,0,0,0.5)", borderRadius: "8px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "20px", fontWeight: "bold", marginBottom: "12px", textAlign: "center" }, children: feedback.msg }),
      question.examTypeLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-meta", style: { marginBottom: "12px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: question.examTypeLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "JLPT N4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "16px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "24px", color: "#ffd700" }, children: [
          feedback.correct.word || feedback.correct.kanji || feedback.correct.jp,
          feedback.correct.reading && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "16px", color: "#aaa", marginLeft: "8px" }, children: [
            "(",
            feedback.correct.reading,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsInline, { text: feedback.correct.reading || feedback.correct.word || feedback.correct.kanji || feedback.correct.jp })
        ] }),
        (feedback.correct.romaji || feedback.correct.reading && kanaToRomaji(feedback.correct.reading)) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#88ccff", fontSize: "18px", fontStyle: "italic", marginTop: "4px" }, children: feedback.correct.romaji || kanaToRomaji(feedback.correct.reading) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "12px", lineHeight: "1.5" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Ý nghĩa:" }),
        " ",
        feedback.correct.meaning || feedback.correct.vi || feedback.correct.gloss
      ] }),
      feedback.correct.explanationVi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-explain", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mẹo làm bài:" }),
        " ",
        feedback.correct.explanationVi
      ] }),
      question.sentence && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-review", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-exam-review-label", children: "Câu trong đề" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightedSentence, { sentence: question.sentence, target: question.target }),
        fullSentenceRomaji && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-sentence-romaji", style: { marginTop: "4px", fontSize: "15px", color: "#88ccff", fontStyle: "italic" }, children: [
          "Romaji: ",
          fullSentenceRomaji
        ] }),
        feedback.correct.sentenceVi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-sentence-translation", style: { marginTop: "6px", fontSize: "14px", color: "#eee" }, children: [
          "Dịch nghĩa câu: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: feedback.correct.sentenceVi })
        ] }),
        hasRealTarget && question.correctReading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-review-target-detail", style: { marginTop: "8px", padding: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "6px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#88ccff", fontStyle: "italic", fontSize: "14px" }, children: [
            "Romaji từ gạch dưới (",
            question.target,
            "): ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: kanaToRomaji(question.correctReading) })
          ] }),
          (feedback.correct.meaning || feedback.correct.vi) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#aaa", fontSize: "14px", marginTop: "4px" }, children: [
            "Nghĩa từ gạch dưới: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: feedback.correct.meaning || feedback.correct.vi })
          ] })
        ] })
      ] }),
      feedback.correct.hanviet && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "12px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hán Việt:" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#ffaaaa" }, children: feedback.correct.hanviet })
      ] }),
      feedback.correct.examples && feedback.correct.examples.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "16px", background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "6px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "14px", color: "#aaa", marginBottom: "8px" }, children: "Ví dụ:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "4px" }, children: [
          feedback.correct.examples[0].ja,
          /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsInline, { text: feedback.correct.examples[0].ja })
        ] }),
        feedback.correct.examples[0].romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "14px", color: "#88ccff", marginBottom: "4px" }, children: feedback.correct.examples[0].romaji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "14px", color: "#ddd" }, children: feedback.correct.examples[0].vi })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WorldAIExplain,
        {
          question: buildVocabAiQuestion(question),
          answer: question.correctText,
          userAnswer: feedback.picked,
          isCorrect: feedback.ok,
          itemInfo: {
            reading: feedback.correct.reading || feedback.correct.romaji || "",
            meaning: feedback.correct.meaning || feedback.correct.vi || feedback.correct.gloss || feedback.correct.explanationVi || ""
          },
          questionId: question.correctKey
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "v3-overlay-choice",
          style: { marginTop: "24px", width: "100%", background: "#4a90e2", color: "white", fontWeight: "bold" },
          onClick: loadNext,
          children: "Câu tiếp theo"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      question.examTypeLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-meta", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: question.examTypeLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "JLPT N4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-prompt", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          question.stem || `Từ nào có nghĩa là: "${question.prompt}"?`,
          question.stem && EXAM_STEM_ROMAJI[question.stem] && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "15px", color: "#88ccff", fontStyle: "italic", marginTop: "2px" }, children: EXAM_STEM_ROMAJI[question.stem] })
        ] }),
        question.stem && safeQuestionTtsText && /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsInline, { text: safeQuestionTtsText })
      ] }) }),
      question.instructionVi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-exam-instruction", children: question.instructionVi }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightedSentence, { sentence: question.sentence, target: question.target }),
      sentenceRomajiStr && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-sentence-romaji", style: { marginTop: "8px", marginBottom: "8px", fontSize: "15px", color: "#88ccff", fontStyle: "italic" }, children: [
        "Romaji: ",
        sentenceRomajiStr
      ] }),
      sentenceViStr && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "v3-kanji-hint-toggle",
            onClick: () => setShowTranslation((t) => !t),
            "aria-label": showTranslation ? "Ẩn nghĩa" : "Xem nghĩa",
            style: { display: "inline-flex", marginTop: "4px", marginBottom: "12px" },
            children: showTranslation ? "🙈 Ẩn nghĩa" : "👁 Xem nghĩa"
          }
        ),
        showTranslation && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-sentence-translation", style: { marginTop: "2px", marginBottom: "12px", fontSize: "15px", color: "#eee" }, children: [
          "Nghĩa: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: sentenceViStr })
        ] })
      ] }),
      question.choices && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-choices", children: question.choices.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        WorldChoiceRow,
        {
          label: c.label,
          reading: c.reading,
          meaning: c.meaning,
          onChoose: () => answer(c),
          onHover: () => audio.hover()
        },
        c.key
      )) })
    ] })
  ] }) });
}
function shuffle$4(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
function shuffle$3(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
function buildKanjiQuiz(enc, seed = Date.now()) {
  const biome = (enc == null ? void 0 : enc.biome) || "yama";
  const q = getNextKanjiQuestion(biome, seed, { allBiomes: (enc == null ? void 0 : enc.source) === "study-panel" });
  if (!q) return null;
  const choices = shuffle$3([
    { label: q.correctReading, reading: kanaToRomaji(q.correctReading), meaning: q.kanji.meaning, isCorrect: true },
    ...q.distractors.map((d) => ({ label: d.reading, reading: kanaToRomaji(d.reading), meaning: d.meaning, isCorrect: false }))
  ]);
  return { ...q, choices };
}
function KanjiRubbingOverlay() {
  const [encounter, setEncounter] = reactExports.useState(null);
  const [kanjiEntry, setKanjiEntry] = reactExports.useState(null);
  const [quiz, setQuiz] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [showWords, setShowWords] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onTrigger = (e) => {
      const enc = e.detail;
      const q = buildKanjiQuiz(enc, (enc == null ? void 0 : enc.seed) || Date.now());
      setEncounter(enc);
      setKanjiEntry((q == null ? void 0 : q.kanji) || null);
      setQuiz(q || { done: true });
      setFeedback(null);
      setShowWords(false);
      audio.encounter();
    };
    return onKanjiEncounter(onTrigger);
  }, []);
  const close = reactExports.useCallback(() => {
    setEncounter(null);
    setKanjiEntry(null);
    setQuiz(null);
    setFeedback(null);
    setShowWords(false);
  }, []);
  const dialogRef = useDialogFocus(Boolean(encounter && quiz), close);
  const loadNext = reactExports.useCallback(() => {
    const q = buildKanjiQuiz(encounter, Date.now());
    if (!q) {
      setKanjiEntry(null);
      setQuiz({ done: true });
      setFeedback(null);
      setShowWords(false);
      return;
    }
    setKanjiEntry(q.kanji);
    setQuiz(q);
    setFeedback(null);
    setShowWords(false);
  }, [encounter, close]);
  const answer = reactExports.useCallback((choice) => {
    if (!quiz || !kanjiEntry) return;
    const key = `kanji:${kanjiEntry.character}`;
    recordStudyAnswer("kanji", getKanjiStudyKey(kanjiEntry), choice.isCorrect);
    if (choice.isCorrect) {
      reward({ itemKey: key, quality: 4, kind: "KANJI_ROCK", xp: 10, source: "kanji" });
      audio.reward();
      setFeedback({ ok: true, picked: choice.label, msg: `✔ Đúng rồi! Đọc là「${quiz.correctReading}」` });
      setShowWords(true);
    } else {
      fail({ itemKey: key, kind: "KANJI_ROCK", source: "kanji" });
      audio.fail();
      setFeedback({ ok: false, picked: choice.label, msg: `✘ Sai rồi. Đáp án:「${quiz.correctReading}」` });
      setShowWords(true);
    }
  }, [quiz, kanjiEntry]);
  reactExports.useEffect(() => {
    if (!encounter) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [encounter, close]);
  if (!encounter || !quiz) return null;
  if (quiz.done) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-back v3-kanji-overlay", onPointerDown: (e) => e.target === e.currentTarget && close(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "v3-overlay-card", role: "dialog", "aria-modal": "true", "aria-label": "Đá Kanji", tabIndex: -1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-overlay-head", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-overlay-kind", children: "🪨 Đá Kanji" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-x", onClick: close, "aria-label": "Đóng", children: "✕" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-prompt", children: "Bạn đã hoàn thành vòng Kanji." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-study-empty-note", children: "Bấm Đặt lại ở lộ trình JLPT N4 World để luyện lại các câu đã đúng." })
    ] }) });
  }
  if (!kanjiEntry) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-back v3-kanji-overlay", onPointerDown: (e) => e.target === e.currentTarget && close(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "v3-overlay-card", role: "dialog", "aria-modal": "true", "aria-label": "Đá Kanji", tabIndex: -1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-overlay-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-overlay-kind", children: "🪨 Đá Kanji" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-x", onClick: close, "aria-label": "Đóng", children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-kanji-quiz-title", children: quiz.correctReadingType === "on" ? "Âm ON (音読み) của Kanji này là gì?" : "Kanji này đọc là gì?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      WorldQuestionPanel,
      {
        questionKey: kanjiEntry.character,
        text: kanjiEntry.character,
        romaji: "___",
        vi: kanjiEntry.meaning,
        ttsText: kanjiEntry.hanviet || kanjiEntry.title ? `Chữ ${kanjiEntry.hanviet || kanjiEntry.title}` : `Kanji ${kanjiEntry.character}`,
        answers: [quiz.correctReading],
        answerReadings: [quiz.correctReading],
        hiddenTargets: [kanjiEntry.character],
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-kanji-char", children: kanjiEntry.character })
      }
    ),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-kanji-readings", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v3-kanji-pill", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-kanji-pill-label", children: "音" }),
        kanjiEntry.onReading,
        kanjiEntry.onReading && kanjiEntry.onReading !== "-" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { opacity: 0.7, fontSize: "0.85em", marginLeft: 4 }, children: [
            "(",
            kanaToRomaji(kanjiEntry.onReading),
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsInline, { text: kanjiEntry.onReading })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v3-kanji-pill", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-kanji-pill-label", children: "訓" }),
        kanjiEntry.kunReading,
        kanjiEntry.kunReading && kanjiEntry.kunReading !== "-" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { opacity: 0.7, fontSize: "0.85em", marginLeft: 4 }, children: [
            "(",
            kanaToRomaji(kanjiEntry.kunReading),
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsInline, { text: kanjiEntry.kunReading })
        ] })
      ] })
    ] }),
    feedback && kanjiEntry.mnemonicVi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-kanji-meaning", style: { fontStyle: "italic", fontSize: 13, opacity: 0.6 }, children: [
      "💡 ",
      kanjiEntry.mnemonicVi
    ] }),
    !feedback && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-choices", children: quiz.choices.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      WorldChoiceRow,
      {
        label: c.label,
        reading: c.reading,
        onChoose: () => answer(c),
        onHover: () => audio.hover()
      },
      i
    )) }) }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `v3-overlay-feedback ${feedback.ok ? "is-ok" : "is-bad"}`, children: feedback.msg }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-kanji-words", children: [
      kanjiEntry.words && kanjiEntry.words.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-kanji-words-title", children: "📖 Từ ghép thường gặp" }),
        kanjiEntry.words.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-kanji-word-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-kanji-word-jp", children: w.word }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v3-kanji-word-rd", children: [
            w.reading,
            w.reading && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { opacity: 0.7, fontSize: "0.85em", marginLeft: 4 }, children: [
              "(",
              kanaToRomaji(w.reading),
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-kanji-word-vi", children: w.vi }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsInline, { text: w.reading || w.word })
        ] }, i))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WorldAIExplain,
        {
          question: `Kanji ${kanjiEntry.character} đọc là gì?`,
          answer: quiz.correctReading,
          userAnswer: feedback.picked,
          isCorrect: feedback.ok,
          itemInfo: { reading: `${kanjiEntry.onReading} / ${kanjiEntry.kunReading}`, meaning: kanjiEntry.meaning },
          questionId: `kanji:${kanjiEntry.character}`,
          analysisContext: {
            domain: "kanji",
            overlay: "Kanji Rubbing",
            questionPrompt: `Kanji ${kanjiEntry.character} đọc là gì?`,
            questionJapanese: kanjiEntry.character,
            correctAnswer: quiz.correctReading,
            correctReading: quiz.correctReading,
            correctRomaji: kanaToRomaji(quiz.correctReading),
            correctMeaning: kanjiEntry.meaning,
            grammarPoint: quiz.correctReadingType === "on" ? "Âm ON" : "Cách đọc trong từ/câu",
            notes: `ON: ${kanjiEntry.onReading || "(không có)"} / KUN: ${kanjiEntry.kunReading || "(không có)"}`,
            choices: (quiz.choices || []).map((choice, i) => ({
              label: choice.label,
              reading: choice.reading,
              meaning: choice.meaning,
              isCorrect: choice.isCorrect
            })),
            vocabularyExamples: (kanjiEntry.words || []).slice(0, 4).map((word) => ({
              label: word.word,
              reading: word.reading,
              meaning: word.vi
            }))
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-choice", onClick: loadNext, style: { marginTop: 15, justifyContent: "center" }, children: "Câu tiếp theo" })
    ] })
  ] }) });
}
const TIMER_SECONDS = 15;
function speakJapanese(text) {
  speakJP(text, 0.85);
}
function shuffle$2(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
function ListeningTideOverlay() {
  const [encounter, setEncounter] = reactExports.useState(null);
  const [question, setQuestion] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [timeLeft, setTimeLeft] = reactExports.useState(TIMER_SECONDS);
  const timerRef = reactExports.useRef(null);
  const close = reactExports.useCallback(() => {
    setEncounter(null);
    setQuestion(null);
    setFeedback(null);
    setTimeLeft(TIMER_SECONDS);
    if (timerRef.current) clearInterval(timerRef.current);
    if (typeof window !== "undefined" && window.speechSynthesis) window.speechSynthesis.cancel();
  }, []);
  const dialogRef = useDialogFocus(Boolean(encounter), close);
  reactExports.useEffect(() => {
    const onTrigger = (e) => {
      const enc = e.detail;
      const batch = getBatch({ kind: "vocab", n: 4, srsBias: "mixed" });
      if (!batch || batch.length < 2) {
        setQuestion({ prompt: "Nội dung chưa sẵn — hãy thử lại sau.", answer: null });
        setEncounter(enc);
        return;
      }
      const correct = batch[0];
      const distractors = batch.slice(1, 4);
      const jpWord = correct.jp || correct.word || correct.kanji || correct.key;
      const choices = shuffle$2([
        { key: correct.key, label: correct.meaningVi || correct.vi || correct.meaning || correct.gloss || "???", isCorrect: true },
        ...distractors.map((d) => ({
          key: d.key,
          label: d.meaningVi || d.vi || d.meaning || d.gloss || "???",
          isCorrect: false
        }))
      ]);
      setEncounter(enc);
      setQuestion({
        jpWord,
        correctKey: correct.key,
        correctVi: correct.meaningVi || correct.vi || correct.meaning || "???",
        reading: correct.reading || correct.kana || "",
        sentence: correct.sentence || correct.example || "",
        sentenceVi: correct.sentenceVi || correct.exampleVi || "",
        choices
      });
      setFeedback(null);
      setTimeLeft(TIMER_SECONDS);
      audio.encounter();
      speakJapanese(jpWord);
    };
    return onListeningEncounter(onTrigger);
  }, []);
  const loadNext = reactExports.useCallback(() => {
    const batch = getBatch({ kind: "vocab", n: 4, srsBias: "mixed" });
    if (!batch || batch.length < 2) {
      close();
      return;
    }
    const correct = batch[0];
    const distractors = batch.slice(1, 4);
    const jpWord = correct.jp || correct.word || correct.kanji || correct.key;
    const choices = shuffle$2([
      { key: correct.key, label: correct.meaningVi || correct.vi || correct.meaning || correct.gloss || "???", isCorrect: true },
      ...distractors.map((d) => ({
        key: d.key,
        label: d.meaningVi || d.vi || d.meaning || d.gloss || "???",
        isCorrect: false
      }))
    ]);
    setQuestion({
      jpWord,
      correctKey: correct.key,
      correctVi: correct.meaningVi || correct.vi || correct.meaning || "???",
      reading: correct.reading || correct.kana || "",
      sentence: correct.sentence || correct.example || "",
      sentenceVi: correct.sentenceVi || correct.exampleVi || "",
      choices
    });
    setFeedback(null);
    setTimeLeft(TIMER_SECONDS);
    speakJapanese(jpWord);
  }, [close]);
  reactExports.useEffect(() => {
    if (!encounter || feedback) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          if (question == null ? void 0 : question.correctKey) {
            fail({ itemKey: question.correctKey, kind: "LISTENING_FISH", source: "listening" });
          }
          audio.fail();
          setFeedback({ ok: false, picked: "(hết giờ)", msg: `⏰ Hết giờ! Đáp án là: ${question.correctVi}` });
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return t - 1;
      });
    }, 1e3);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [encounter, feedback, question]);
  const answer = reactExports.useCallback((choice) => {
    if (!question || !question.correctKey) return;
    if (timerRef.current) clearInterval(timerRef.current);
    if (choice.isCorrect) {
      reward({ itemKey: question.correctKey, quality: 4, kind: "LISTENING_FISH", xp: 8, source: "listening" });
      audio.reward();
      setFeedback({ ok: true, picked: choice.label, msg: `✔ Chính xác! ${question.jpWord}（${question.reading}）= ${question.correctVi}` });
    } else {
      fail({ itemKey: question.correctKey, kind: "LISTENING_FISH", source: "listening" });
      audio.fail();
      setFeedback({ ok: false, picked: choice.label, msg: `✘ Sai rồi. Đáp án: ${question.correctVi}` });
    }
  }, [question]);
  reactExports.useEffect(() => {
    if (!encounter) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [encounter, close]);
  if (!encounter || !question) return null;
  const timerPct = timeLeft / TIMER_SECONDS * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-back v3-tide-overlay", onPointerDown: (e) => e.target === e.currentTarget && close(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "v3-overlay-card", role: "dialog", "aria-modal": "true", "aria-label": "Luyện nghe", tabIndex: -1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-overlay-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-overlay-kind", children: "CÁ NGHE NHẠC 🐟" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-x", onClick: close, "aria-label": "Đóng", children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-tide-timer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-tide-wave", style: { width: `${timerPct}%` } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v3-tide-timer-text", children: [
        timeLeft,
        "s"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      WorldQuestionPanel,
      {
        questionKey: question.correctKey,
        text: question.jpWord,
        reading: question.reading,
        ttsText: question.reading || question.jpWord,
        vi: question.sentenceVi || question.correctVi,
        answerMeanings: [question.correctVi]
      }
    ),
    !feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-prompt", children: "Từ này nghĩa là gì?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-choices", children: question.choices.map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        WorldChoiceRow,
        {
          label: c.label,
          onChoose: () => answer(c),
          onHover: () => audio.hover()
        },
        c.key || idx
      )) })
    ] }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `v3-overlay-feedback ${feedback.ok ? "is-ok" : "is-bad"}`, children: feedback.msg }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "16px" }, children: [
      question.sentence && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-tide-example", style: { marginBottom: "12px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-tide-example-jp", children: question.sentence }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsInline, { text: question.sentence }),
        question.sentenceVi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-tide-example-vi", children: question.sentenceVi })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WorldAIExplain,
        {
          question: `Nghe từ 「${question.jpWord}」 và chọn nghĩa tiếng Việt đúng.`,
          answer: question.correctVi,
          userAnswer: feedback.picked,
          isCorrect: feedback.ok,
          itemInfo: { reading: question.reading, meaning: question.sentenceVi || question.correctVi },
          questionId: question.correctKey,
          analysisContext: {
            domain: "listening",
            overlay: "Listening Tide",
            questionPrompt: `Nghe từ 「${question.jpWord}」 và chọn nghĩa tiếng Việt đúng.`,
            questionJapanese: question.jpWord,
            questionRomaji: question.reading ? kanaToRomaji(question.reading) : "",
            correctAnswer: question.correctVi,
            correctReading: question.reading,
            correctMeaning: question.correctVi,
            fullSentence: question.sentence,
            fullSentenceVietnamese: question.sentenceVi,
            choices: (question.choices || []).map((choice) => ({
              label: choice.label,
              isCorrect: choice.isCorrect
            }))
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-choice", onClick: loadNext, style: { width: "100%", justifyContent: "center", background: "#4a90e2", color: "white", fontWeight: "bold" }, children: "Câu tiếp theo" })
    ] })
  ] }) });
}
function shuffle$1(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
function buildGrammarChoices(entry) {
  if (!entry) return [];
  return shuffle$1([
    { label: entry.answer, isCorrect: true },
    ...(entry.distractors || []).map((d) => ({ label: d, isCorrect: false }))
  ]);
}
function fillGrammarSentence(entry) {
  if (!entry) return "";
  if (entry.fullSentence) return entry.fullSentence;
  return String(entry.sentence || "").replace("＿＿＿", entry.answer).replace("＿＿", entry.answer).replace("___", entry.answer).replace("★", entry.answer);
}
function fillGrammarReading(entry) {
  if (!entry) return "";
  if (entry.fullReading) return entry.fullReading;
  const answerReading = entry.answerReading || entry.answer || "";
  return String(entry.sentenceReading || "").replace("＿＿＿", answerReading).replace("＿＿", answerReading).replace("___", answerReading).replace("★", answerReading);
}
function GrammarEchoOverlay() {
  const [encounter, setEncounter] = reactExports.useState(null);
  const [quiz, setQuiz] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const onTrigger = (e) => {
      const enc = e.detail;
      const entry2 = getNextGrammarQuestion((enc == null ? void 0 : enc.seed) || Date.now());
      const choices2 = buildGrammarChoices(entry2);
      setEncounter(enc);
      setQuiz(entry2 ? { entry: entry2, choices: choices2 } : { done: true });
      setFeedback(null);
      audio.encounter();
    };
    return onGrammarEncounter(onTrigger);
  }, []);
  const close = reactExports.useCallback(() => {
    setEncounter(null);
    setQuiz(null);
    setFeedback(null);
  }, []);
  const dialogRef = useDialogFocus(Boolean(encounter && quiz), close);
  const loadNext = reactExports.useCallback(() => {
    const entry2 = getNextGrammarQuestion(Date.now());
    if (!entry2) {
      setQuiz({ done: true });
      setFeedback(null);
      return;
    }
    const choices2 = buildGrammarChoices(entry2);
    setQuiz({ entry: entry2, choices: choices2 });
    setFeedback(null);
  }, [close]);
  const answer = reactExports.useCallback((choice) => {
    if (!quiz) return;
    const { entry: entry2 } = quiz;
    recordStudyAnswer("grammar", getGrammarStudyKey(entry2), choice.isCorrect);
    if (choice.isCorrect) {
      reward({ itemKey: `grammar:${entry2.id}`, quality: 4, kind: "GRAMMAR_ECHO", xp: 10, source: "grammar" });
      audio.reward();
      setFeedback({ ok: true, picked: choice.label });
    } else {
      fail({ itemKey: `grammar:${entry2.id}`, kind: "GRAMMAR_ECHO", source: "grammar" });
      audio.fail();
      setFeedback({ ok: false, picked: choice.label });
    }
  }, [quiz]);
  reactExports.useEffect(() => {
    if (!encounter) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [encounter, close]);
  if (!encounter || !quiz) return null;
  if (quiz.done) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-back v3-echo-overlay", onPointerDown: (e) => e.target === e.currentTarget && close(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "v3-overlay-card", role: "dialog", "aria-modal": "true", "aria-label": "Tiếng vang Ngữ pháp", tabIndex: -1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-overlay-head", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-overlay-kind", children: "🗣️ Tiếng vang Ngữ pháp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-x", onClick: close, "aria-label": "Đóng", children: "✕" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-prompt", children: "Bạn đã hoàn thành vòng Ngữ pháp." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-study-empty-note", children: "Bấm Đặt lại ở lộ trình JLPT N4 World để luyện lại các câu đã đúng." })
    ] }) });
  }
  const { entry, choices } = quiz;
  const fullSentence = fillGrammarSentence(entry);
  const fullReading = fillGrammarReading(entry);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-back v3-echo-overlay", onPointerDown: (e) => e.target === e.currentTarget && close(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "v3-overlay-card", role: "dialog", "aria-modal": "true", "aria-label": "Tiếng vang Ngữ pháp", tabIndex: -1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-overlay-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-overlay-kind", children: "🗣️ Tiếng vang Ngữ pháp" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-x", onClick: close, "aria-label": "Đóng", children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-meta", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: entry.examTypeLabel || "問題 文法" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "JLPT N4" })
    ] }),
    entry.promptVi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-exam-instruction", children: entry.promptVi }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      WorldQuestionPanel,
      {
        questionKey: entry.id,
        text: entry.sentence,
        reading: entry.sentenceReading,
        vi: entry.sentenceVi,
        ttsText: entry.sentence,
        answers: [entry.answer],
        answerReadings: [entry.answerReading]
      }
    ),
    entry.scrambledParts && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-exam-word-bank", "aria-label": "Các cụm từ cần sắp xếp", children: entry.scrambledParts.map((part) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: part }, part)) }),
    !feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-choices", children: choices.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      WorldChoiceRow,
      {
        label: c.label,
        reading: inferReadingFromReference(c.label, entry.answer, entry.answerReading),
        onChoose: () => answer(c),
        onHover: () => audio.hover()
      },
      i
    )) }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-echo-explanation", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `v3-overlay-feedback ${feedback.ok ? "is-ok" : "is-bad"}`, children: feedback.ok ? "✔ Đúng rồi!" : `✘ Sai rồi. Đáp án:「${entry.answer}」` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-echo-grammar-box", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-echo-grammar-name", children: [
          "📝 ",
          entry.grammarPoint
        ] }),
        entry.examTypeLabel && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-exam-review-label", children: entry.examTypeLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-echo-grammar-vi", children: entry.explanationVi }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-echo-full-sentence", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-echo-full-jp", children: fullSentence }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v3-echo-full-rd", children: [
            fullReading,
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.88rem", color: "#88ccff", marginTop: "4px", fontStyle: "italic", fontWeight: "normal" }, children: kanaToRomaji(fullReading) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsInline, { text: fullSentence })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WorldAIExplain,
        {
          question: `${entry.sentence} (${entry.sentenceVi})`,
          answer: entry.answer,
          userAnswer: feedback.picked,
          isCorrect: feedback.ok,
          itemInfo: { reading: entry.answerReading, meaning: `${entry.grammarPoint}: ${entry.explanationVi}` },
          questionId: `grammar:${entry.id}`,
          analysisContext: {
            domain: "grammar",
            examTypeLabel: entry.examTypeLabel,
            questionPrompt: entry.promptVi || entry.examTypeLabel,
            blankSentence: entry.sentence,
            blankRomaji: cleanRomajiSpacing(kanaToRomaji(entry.sentenceReading || entry.sentence)),
            questionVietnamese: entry.sentenceVi,
            correctAnswer: entry.answer,
            correctReading: entry.answerReading,
            correctRomaji: cleanRomajiSpacing(kanaToRomaji(entry.answerReading || entry.answer)),
            fullSentence,
            fullSentenceRomaji: cleanRomajiSpacing(kanaToRomaji(fullReading || fullSentence)),
            fullSentenceVietnamese: entry.sentenceVi,
            grammarPoint: entry.grammarPoint,
            expectedExplanation: entry.explanationVi,
            choices: choices.map((choice, i) => ({
              label: choice.label,
              isCorrect: choice.isCorrect
            }))
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-choice", onClick: loadNext, style: { marginTop: 10, justifyContent: "center" }, children: "Câu tiếp theo" })
    ] })
  ] }) });
}
function shuffle(list2) {
  const out = [...list2];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
const BLANK_TOKENS$1 = ["___", "＿＿＿", "＿＿"];
function findBlankToken$1(sentence = "") {
  return BLANK_TOKENS$1.find((token) => String(sentence).includes(token)) || "";
}
function fullParticleSentence(item) {
  const sentence = String((item == null ? void 0 : item.sentence) || "");
  const token = findBlankToken$1(sentence);
  return token ? sentence.replace(token, (item == null ? void 0 : item.answer) || "") : sentence;
}
function buildQuestion$1(seed) {
  const item = getRandomParticleQuestion(seed);
  if (!item) return null;
  return {
    item,
    choices: shuffle([
      { label: item.answer, isCorrect: true },
      ...(item.distractors || []).map((label) => ({ label, isCorrect: false }))
    ])
  };
}
function ParticleGateOverlay() {
  const [encounter, setEncounter] = reactExports.useState(null);
  const [question, setQuestion] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const onTrigger = (event) => {
      const enc = event.detail || {};
      const next = buildQuestion$1(enc.seed || Date.now());
      setEncounter(enc);
      setQuestion(next || { done: true });
      setFeedback(null);
      audio.encounter();
    };
    return onParticleEncounter(onTrigger);
  }, []);
  const close = reactExports.useCallback(() => {
    setEncounter(null);
    setQuestion(null);
    setFeedback(null);
  }, []);
  const dialogRef = useDialogFocus(Boolean(encounter && question), close);
  const loadNext = reactExports.useCallback(() => {
    const next = buildQuestion$1(Date.now());
    if (!next) {
      setQuestion({ done: true });
      setFeedback(null);
      return;
    }
    setQuestion(next);
    setFeedback(null);
  }, [close]);
  const answer = reactExports.useCallback((choice) => {
    if (!(question == null ? void 0 : question.item)) return;
    const item2 = question.item;
    recordStudyAnswer("particles", getParticleStudyKey(item2), choice.isCorrect);
    if (choice.isCorrect) {
      reward({ itemKey: `particle:${item2.id}`, quality: 4, kind: "PARTICLE_GATE", xp: 9, source: "particle" });
      audio.reward();
      setFeedback({ ok: true, picked: choice.label });
    } else {
      fail({ itemKey: `particle:${item2.id}`, kind: "PARTICLE_GATE", source: "particle" });
      audio.fail();
      setFeedback({ ok: false, picked: choice.label });
    }
  }, [question]);
  reactExports.useEffect(() => {
    if (!encounter) return void 0;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [encounter, close]);
  if (!encounter || !question) return null;
  if (question.done) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-back v3-particle-overlay", onPointerDown: (e) => e.target === e.currentTarget && close(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "v3-overlay-card", role: "dialog", "aria-modal": "true", "aria-label": "Trợ từ trong ngữ cảnh", tabIndex: -1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-overlay-head", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-overlay-kind", children: "Trợ từ trong ngữ cảnh" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-x", onClick: close, "aria-label": "Đóng", children: "×" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-prompt", children: "Bạn đã hoàn thành vòng Trợ từ." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-study-empty-note", children: "Bấm Đặt lại ở lộ trình JLPT N4 World để luyện lại các câu đã đúng." })
    ] }) });
  }
  const { item, choices } = question;
  const fullSentence = fullParticleSentence(item);
  const readingSentence = item.sentenceReading || item.sentence;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-back v3-particle-overlay", onPointerDown: (e) => e.target === e.currentTarget && close(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "v3-overlay-card", role: "dialog", "aria-modal": "true", "aria-label": "Trợ từ trong ngữ cảnh", tabIndex: -1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-overlay-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-overlay-kind", children: "Trợ từ trong ngữ cảnh" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-x", onClick: close, "aria-label": "Đóng", children: "×" })
    ] }),
    item.examTypeLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-meta", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.examTypeLabel }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "JLPT N4" })
    ] }),
    item.promptVi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-exam-instruction", children: item.promptVi }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      WorldQuestionPanel,
      {
        questionKey: item.id,
        text: item.sentence,
        reading: readingSentence,
        vi: item.sentenceVi || item.vi,
        ttsText: item.sentence,
        answers: [item.answer],
        answerReadings: [item.answerReading || item.answer]
      }
    ),
    !feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-choices", children: choices.map((choice, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      WorldChoiceRow,
      {
        label: choice.label,
        reading: choice.label,
        onChoose: () => answer(choice),
        onHover: () => audio.hover()
      },
      choice.label
    )) }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-particle-feedback", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `v3-overlay-feedback ${feedback.ok ? "is-ok" : "is-bad"}`, children: feedback.ok ? "Đúng rồi!" : `Chưa đúng. Đáp án là「${item.answer}」.` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-particle-grammar", children: [
        item.grammar,
        item.explanationVi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-exam-explain", children: item.explanationVi }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.9rem", color: "#88ccff", marginTop: "6px", fontStyle: "italic" }, children: kanaToRomaji(item.fullReading || fullSentence) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WorldAIExplain,
        {
          question: `${item.sentence} (${item.sentenceVi || item.vi || ""})`,
          answer: item.answer,
          userAnswer: feedback.picked,
          isCorrect: feedback.ok,
          itemInfo: { meaning: item.explanationVi || item.grammar },
          questionId: `particle:${item.id}`,
          analysisContext: {
            domain: "particles",
            examTypeLabel: item.examTypeLabel,
            questionPrompt: item.promptVi || item.examTypeLabel,
            blankSentence: item.sentence,
            blankRomaji: kanaToRomaji(readingSentence),
            questionVietnamese: item.sentenceVi || item.vi,
            correctAnswer: item.answer,
            correctReading: item.answerReading || item.answer,
            correctRomaji: kanaToRomaji(item.answerReading || item.answer),
            fullSentence,
            fullSentenceRomaji: kanaToRomaji(item.fullReading || fullSentence),
            fullSentenceVietnamese: item.sentenceVi || item.vi,
            grammarPoint: item.grammar,
            expectedExplanation: item.explanationVi,
            choices: choices.map((choice, i) => ({
              label: choice.label,
              isCorrect: choice.isCorrect
            }))
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-choice v3-overlay-next", onClick: loadNext, children: "Câu tiếp theo" })
    ] })
  ] }) });
}
function buildQuestion(seed) {
  const item = buildConjugationQuestion(seed);
  if (!item) return null;
  return item;
}
const BLANK_TOKENS = ["___", "＿＿＿", "＿＿"];
function findBlankToken(sentence = "") {
  return BLANK_TOKENS.find((token) => String(sentence).includes(token)) || "";
}
function fillConjugationSentence(question) {
  const sentence = String((question == null ? void 0 : question.sentence) || "");
  const token = findBlankToken(sentence);
  return token ? sentence.replace(token, (question == null ? void 0 : question.answer) || "") : sentence;
}
function fillConjugationReading(question) {
  const sentence = String((question == null ? void 0 : question.sentenceReading) || "");
  const token = findBlankToken(sentence);
  return token ? sentence.replace(token, (question == null ? void 0 : question.answerReading) || (question == null ? void 0 : question.answer) || "") : sentence;
}
function ConjugationForgeOverlay() {
  const [encounter, setEncounter] = reactExports.useState(null);
  const [question, setQuestion] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const onTrigger = (event) => {
      const enc = event.detail || {};
      const next = buildQuestion(enc.seed || Date.now());
      setEncounter(enc);
      setQuestion(next || { done: true });
      setFeedback(null);
      audio.encounter();
    };
    return onConjugationEncounter(onTrigger);
  }, []);
  const close = reactExports.useCallback(() => {
    setEncounter(null);
    setQuestion(null);
    setFeedback(null);
  }, []);
  const dialogRef = useDialogFocus(Boolean(encounter && question), close);
  const loadNext = reactExports.useCallback(() => {
    const next = buildQuestion(Date.now());
    if (!next) {
      setQuestion({ done: true });
      setFeedback(null);
      return;
    }
    setQuestion(next);
    setFeedback(null);
  }, [close]);
  const answer = reactExports.useCallback((choice) => {
    if (!question) return;
    recordStudyAnswer("conjugation", getConjugationStudyKey(question), choice.isCorrect);
    if (choice.isCorrect) {
      reward({
        itemKey: `conjugation:${question.id}`,
        quality: 4,
        kind: "CONJUGATION_FORGE",
        xp: 11,
        source: "conjugation"
      });
      audio.reward();
      setFeedback({ ok: true, picked: choice.label });
    } else {
      fail({
        itemKey: `conjugation:${question.id}`,
        kind: "CONJUGATION_FORGE",
        source: "conjugation"
      });
      audio.fail();
      setFeedback({ ok: false, picked: choice.label });
    }
  }, [question]);
  reactExports.useEffect(() => {
    if (!encounter) return void 0;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [encounter, close]);
  if (!encounter || !question) return null;
  if (question.done) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-back v3-conjugation-overlay", onPointerDown: (e) => e.target === e.currentTarget && close(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "v3-overlay-card", role: "dialog", "aria-modal": "true", "aria-label": "Lò luyện chia thể", tabIndex: -1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-overlay-head", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-overlay-kind", children: "Lò luyện chia thể" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-x", onClick: close, "aria-label": "Đóng", children: "×" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-prompt", children: "Bạn đã hoàn thành vòng Chia thể." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-study-empty-note", children: "Bấm Đặt lại ở lộ trình JLPT N4 World để luyện lại các câu đã đúng." })
    ] }) });
  }
  const isExamQuestion = !!question.examTypeLabel;
  const fullSentence = fillConjugationSentence(question);
  const fullReading = fillConjugationReading(question);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-back v3-conjugation-overlay", onPointerDown: (e) => e.target === e.currentTarget && close(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "v3-overlay-card", role: "dialog", "aria-modal": "true", "aria-label": "Lò luyện chia thể", tabIndex: -1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-overlay-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-overlay-kind", children: "Lò luyện chia thể" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-x", onClick: close, "aria-label": "Đóng", children: "×" })
    ] }),
    question.examTypeLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-meta", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: question.examTypeLabel }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "JLPT N4" })
    ] }),
    question.promptVi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-exam-instruction", children: question.promptVi }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      WorldQuestionPanel,
      {
        questionKey: question.id,
        text: isExamQuestion ? question.sentence : `${question.base} ➔ ${question.formLabel}`,
        reading: isExamQuestion ? question.sentenceReading : question.baseRomaji,
        vi: isExamQuestion ? question.sentenceVi : question.baseMeaning,
        ttsText: isExamQuestion ? question.sentence : question.base,
        answers: [question.answer],
        answerReadings: [question.answerReading],
        answerRomaji: [question.answerRomaji]
      }
    ),
    !isExamQuestion && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-conj-meta", style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", marginBottom: "16px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85rem", opacity: 0.7 }, children: [
      question.kind === "verb" ? "Động từ" : "Tính từ",
      question.group ? ` · ${question.group}` : ""
    ] }) }),
    !feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-overlay-choices", children: question.choices.map((choice, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      WorldChoiceRow,
      {
        label: choice.label,
        reading: choice.romaji || inferReadingFromReference(choice.label, question.answer, question.answerReading),
        onChoose: () => answer(choice),
        onHover: () => audio.hover()
      },
      choice.label
    )) }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-conj-feedback", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `v3-overlay-feedback ${feedback.ok ? "is-ok" : "is-bad"}`, children: feedback.ok ? "Đúng rồi!" : `Chưa đúng. Đáp án là「${question.answer}」.` }),
      isExamQuestion ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-review", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-exam-review-label", children: "Câu đúng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-exam-sentence", children: [
          fullSentence,
          /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsInline, { text: fullSentence })
        ] }),
        question.explanationVi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-exam-explain", children: question.explanationVi })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-conj-explain", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: question.base }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: question.answer }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WorldTtsInline, { text: question.answer })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WorldAIExplain,
        {
          question: isExamQuestion ? `${question.sentence} (${question.sentenceVi || ""})` : `${question.base} → ${question.formLabel}`,
          answer: question.answer,
          userAnswer: feedback.picked,
          isCorrect: feedback.ok,
          itemInfo: {
            reading: question.group || question.answerRomaji || "",
            meaning: question.explanationVi || (question.kind === "verb" ? "Động từ" : "Tính từ")
          },
          questionId: `conjugation:${question.id}`,
          analysisContext: {
            domain: "conjugation",
            examTypeLabel: question.examTypeLabel,
            questionPrompt: question.promptVi || question.formLabel,
            blankSentence: question.sentence,
            blankRomaji: question.sentenceReading ? kanaToRomaji(question.sentenceReading) : "",
            questionVietnamese: question.sentenceVi,
            correctAnswer: question.answer,
            correctReading: question.answerReading,
            correctRomaji: question.answerRomaji,
            fullSentence: isExamQuestion ? fullSentence : "",
            fullSentenceRomaji: fullReading ? kanaToRomaji(fullReading) : "",
            fullSentenceVietnamese: question.sentenceVi,
            grammarPoint: question.formLabel,
            targetForm: question.formKey,
            base: question.base,
            baseRomaji: question.baseRomaji,
            baseMeaning: question.baseMeaning,
            expectedExplanation: question.explanationVi,
            choices: question.choices.map((choice, i) => ({
              label: choice.label,
              reading: choice.romaji,
              isCorrect: choice.isCorrect
            }))
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-overlay-choice v3-overlay-next", onClick: loadNext, children: "Câu tiếp theo" })
    ] })
  ] }) });
}
const WORLD_LEARNING_OVERLAYS = Object.freeze([
  { id: "vocab", Component: EncounterOverlay },
  { id: "kanji", Component: KanjiRubbingOverlay },
  { id: "listening", Component: ListeningTideOverlay },
  { id: "grammar", Component: GrammarEchoOverlay },
  { id: "particles", Component: ParticleGateOverlay },
  { id: "conjugation", Component: ConjugationForgeOverlay }
]);
function WorldLearningOverlayStack() {
  return WORLD_LEARNING_OVERLAYS.map(({ id, Component }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {}, id));
}
const WorldLearningOverlayStack$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WORLD_LEARNING_OVERLAYS,
  default: WorldLearningOverlayStack
}, Symbol.toStringTag, { value: "Module" }));
function formatNumber(value) {
  return new Intl.NumberFormat("vi-VN").format(Number(value) || 0);
}
function StudyQuestPanel({ open, onClose }) {
  const [routeSeed, setRouteSeed] = reactExports.useState(() => Date.now());
  const [progressTick, setProgressTick] = reactExports.useState(0);
  const stats = reactExports.useMemo(() => getWorldStudyStats(), [routeSeed, progressTick]);
  const route = reactExports.useMemo(() => buildStudyRoute(routeSeed), [routeSeed, progressTick]);
  reactExports.useEffect(() => subscribe((event) => {
    if ((event == null ? void 0 : event.type) !== "reward" && (event == null ? void 0 : event.type) !== "fail") return;
    setProgressTick((value) => value + 1);
  }), []);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return void 0;
    const handleProgressChange = () => setProgressTick((value) => value + 1);
    window.addEventListener(STUDY_PROGRESS_CHANGED_EVENT, handleProgressChange);
    return () => window.removeEventListener(STUDY_PROGRESS_CHANGED_EVENT, handleProgressChange);
  }, []);
  reactExports.useEffect(() => {
    if (!open) return void 0;
    let alive = true;
    loadExpandedStudyPools().then(() => {
      if (alive) setProgressTick((value) => value + 1);
    }).catch(() => {
    });
    return () => {
      alive = false;
    };
  }, [open]);
  const refreshRoute = reactExports.useCallback(() => {
    setRouteSeed(Date.now());
    audio.hover();
  }, []);
  const startDomain = reactExports.useCallback(async (domain) => {
    try {
      await loadExpandedStudyPools();
      setProgressTick((value) => value + 1);
    } catch (e) {
    }
    const emit2 = ACTION_EMITTERS[domain.action];
    if (!emit2) {
      console.warn("[StudyQuestPanel] Unknown study action:", domain.action, domain);
      return;
    }
    emit2({
      id: `study-${domain.id}-${Date.now()}`,
      type: domain.action,
      seed: domain.seed || Date.now(),
      source: "study-panel",
      studyDomain: domain.id
    });
  }, []);
  const resetDomain = reactExports.useCallback((event, domain) => {
    event.stopPropagation();
    resetStudyDomain(domain.id);
    setProgressTick((value) => value + 1);
    audio.hover();
  }, []);
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "v3-study-panel", "aria-label": "Bảng luyện tập", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-study-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-study-kicker", children: "Lộ trình học" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Thế giới JLPT N4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-study-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: refreshRoute, title: "Đổi lộ trình", children: "↻" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, "aria-label": "Đóng", children: "×" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-study-total", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatNumber(stats.total) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "mục luyện khả dụng" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-study-grid", children: route.map((domain) => {
      const progress2 = getStudyDomainProgress(domain.id, domain.available);
      const done = Math.min(progress2.completedCount, domain.available);
      const pct = domain.available > 0 ? Math.min(100, Math.round(done / domain.available * 100)) : 0;
      const isComplete = domain.available > 0 && progress2.remainingCount === 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "v3-study-domain-card",
          style: { "--study-accent": domain.accent },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "v3-study-reset-domain",
                onClick: (event) => resetDomain(event, domain),
                title: `Đặt lại vòng ${domain.label}`,
                children: [
                  "↻ Đặt lại ",
                  domain.shortLabel
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: `v3-study-domain ${isComplete ? "is-complete" : ""}`,
                "data-study-id": domain.id,
                "data-study-action": domain.action,
                disabled: isComplete || domain.available === 0,
                onClick: () => startDomain(domain),
                onMouseEnter: () => audio.hover(),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v3-study-domain-main", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-study-short", children: domain.shortLabel }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-study-title", children: domain.label })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-study-desc", children: domain.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-study-meter", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: `${pct}%` } }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v3-study-count", children: [
                    formatNumber(done),
                    "/",
                    formatNumber(domain.available),
                    " đúng · còn ",
                    formatNumber(progress2.remainingCount),
                    progress2.missedCount > 0 ? ` · sai ${formatNumber(progress2.missedCount)}` : ""
                  ] })
                ]
              }
            )
          ]
        },
        domain.id
      );
    }) })
  ] });
}
const KEY_GROUPS = Object.freeze([
  {
    id: "movement",
    label: "Di chuyển",
    keys: [
      { id: "move", keys: ["W", "A", "S", "D"], label: "Di chuyển", touch: "Joystick trái" },
      { id: "sprint", keys: ["Shift"], label: "Chạy nhanh", touch: "Nút Chạy nhanh" },
      { id: "jump", keys: ["Space"], label: "Nhảy", touch: "Nút Nhảy" },
      { id: "crouch", keys: ["C"], label: "Ngồi xuống", touch: "—" }
    ]
  },
  {
    id: "camera",
    label: "Camera",
    keys: [
      { id: "look", keys: ["Chuột phải"], label: "Xoay camera", touch: "Vuốt màn hình" },
      { id: "cam-mode", keys: ["T"], label: "Đổi góc nhìn (1st/3rd)", touch: "Nút Góc nhìn" },
      { id: "orbital", keys: ["Tab"], label: "Xem từ trên cao", touch: "—" }
    ]
  },
  {
    id: "interact",
    label: "Tương tác",
    keys: [
      { id: "interact", keys: ["E"], label: "Tương tác / Nhặt", touch: "Nút Tương tác" },
      { id: "talk", keys: ["F"], label: "Nói chuyện NPC", touch: "Nút Nói chuyện" }
    ]
  },
  {
    id: "ui",
    label: "Giao diện",
    keys: [
      { id: "map", keys: ["M"], label: "Bản đồ nhỏ / lớn", touch: "Nút Bản đồ" },
      { id: "study", keys: ["L"], label: "Bảng luyện tập", touch: "Nút Học" },
      { id: "help", keys: ["H"], label: "Bảng phím tắt", touch: "Nút Trợ giúp" },
      { id: "menu", keys: ["ESC"], label: "Đóng cửa sổ", touch: "Nút Đóng" },
      { id: "home", keys: ["Q"], label: "Về trang chủ", touch: "Nút Trang chủ" }
    ]
  }
]);
const KEYS_FLAT = Object.freeze(
  KEY_GROUPS.flatMap((g) => g.keys.map((k) => ({ ...k, group: g.id })))
);
function findKeyById(id) {
  return KEYS_FLAT.find((k) => k.id === id) || null;
}
const COACH_STEPS = Object.freeze([
  { id: "move", hint: "Dùng WASD để di chuyển trong thế giới." },
  { id: "look", hint: "Giữ chuột phải và kéo để xoay camera." },
  { id: "interact", hint: "Tới gần tòa nhà hoặc NPC, bấm E để vào / nói chuyện." },
  { id: "map", hint: "Bấm M để mở bản đồ nhỏ, xem vị trí + công trình xung quanh." },
  { id: "help", hint: "Bấm H bất cứ lúc nào để mở bảng tất cả phím tắt." }
]);
const RECOGNISED_CODES = Object.freeze({
  KeyW: "move",
  KeyA: "move",
  KeyS: "move",
  KeyD: "move",
  ArrowUp: "move",
  ArrowDown: "move",
  ArrowLeft: "move",
  ArrowRight: "move",
  ShiftLeft: "sprint",
  ShiftRight: "sprint",
  Space: "jump",
  KeyC: "crouch",
  KeyE: "interact",
  KeyF: "talk",
  KeyM: "map",
  KeyL: "study",
  KeyH: "help",
  KeyT: "cam-mode",
  KeyQ: "home",
  Tab: "orbital",
  Escape: "menu"
});
function HelpPanel({ open, onClose, onResetCoach }) {
  const dialogRef = useDialogFocus(open, onClose);
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-help-backdrop", onPointerDown: (e) => e.target === e.currentTarget && (onClose == null ? void 0 : onClose()), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "v3-help-panel", role: "dialog", "aria-modal": "true", "aria-label": "Phím tắt", tabIndex: -1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "v3-help-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "🎮 Phím tắt Thế giới 3D" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-help-close", onClick: onClose, "aria-label": "Đóng", children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-help-body", children: KEY_GROUPS.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "v3-help-group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: group.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: group.keys.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-help-keys", children: k.keys.map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: key }, key)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-help-label", children: k.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-help-touch", children: k.touch })
      ] }, k.id)) })
    ] }, group.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "v3-help-footer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-help-reset", onClick: onResetCoach, children: "↻ Xem lại hướng dẫn lần đầu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v3-help-hint", children: [
        "Bấm ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "ESC" }),
        " hoặc ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "H" }),
        " để đóng"
      ] })
    ] })
  ] }) });
}
const VISIBLE_KEYS = ["move", "sprint", "jump", "interact", "map", "study", "help"];
const IDLE_HIDE_MS = 4e3;
function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
function KeyLegend({ onOpenHelp }) {
  const [activeId, setActiveId] = reactExports.useState(null);
  const [visible, setVisible] = reactExports.useState(true);
  const hideTimerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (isTouchDevice()) return void 0;
    const onDown = (e) => {
      const id = RECOGNISED_CODES[e.code];
      if (!id) return;
      setActiveId(id);
      setVisible(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => setVisible(false), IDLE_HIDE_MS);
    };
    const onUp = () => setActiveId(null);
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    hideTimerRef.current = setTimeout(() => setVisible(false), IDLE_HIDE_MS);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);
  if (isTouchDevice()) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `v3-key-legend${visible ? " is-visible" : ""}`, "aria-hidden": "true", children: VISIBLE_KEYS.map((id) => {
    const entry = findKeyById(id);
    if (!entry) return null;
    const isActive = activeId === id;
    const isHelp = id === "help";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: `v3-key-chip${isActive ? " is-active" : ""}`,
        onClick: isHelp ? onOpenHelp : void 0,
        tabIndex: isHelp ? 0 : -1,
        title: entry.label,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-key-chip-keys", children: entry.keys.slice(0, 1).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: k }, k)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-key-chip-label", children: entry.label })
        ]
      },
      id
    );
  }) });
}
function ControlsCoach({ open, onDone }) {
  const [step, setStep] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (open) setStep(0);
  }, [open]);
  if (!open) return null;
  const current = COACH_STEPS[step];
  if (!current) return null;
  const keyEntry = findKeyById(current.id);
  const next = () => {
    if (step < COACH_STEPS.length - 1) setStep(step + 1);
    else onDone == null ? void 0 : onDone();
  };
  const skip = () => onDone == null ? void 0 : onDone();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-coach-backdrop", role: "dialog", "aria-live": "polite", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-coach-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-coach-progress", children: COACH_STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `v3-coach-dot${i <= step ? " is-on" : ""}` }, s.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-coach-keys", children: keyEntry == null ? void 0 : keyEntry.keys.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: k }, k)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "v3-coach-title", children: keyEntry == null ? void 0 : keyEntry.label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "v3-coach-hint", children: current.hint }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-coach-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-coach-btn-ghost", onClick: skip, children: "Bỏ qua" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-coach-btn-primary", onClick: next, children: step < COACH_STEPS.length - 1 ? "Tiếp →" : "Bắt đầu khám phá!" })
    ] })
  ] }) });
}
function PerformanceMonitor({ visible = false }) {
  const { tier } = useQuality();
  const [fps, setFps] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return void 0;
    const onFps = (event) => {
      var _a;
      const next = Number((_a = event == null ? void 0 : event.detail) == null ? void 0 : _a.fps);
      if (Number.isFinite(next)) setFps(next);
    };
    window.addEventListener("n4:gfx-fps", onFps);
    return () => window.removeEventListener("n4:gfx-fps", onFps);
  }, []);
  if (!visible) return null;
  const colour = fps >= 50 ? "#39ff88" : fps >= 30 ? "#ffd400" : "#ff3860";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-perf-pill", style: { color: colour }, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-perf-num", children: fps }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v3-perf-label", children: [
      "FPS - ",
      tier.toUpperCase()
    ] })
  ] });
}
const VALID_ORIGINS = /* @__PURE__ */ new Set(["route", "world", "npc"]);
function safeTelemetry(name, payload) {
  try {
    window.dispatchEvent(new CustomEvent("n4:telemetry", { detail: { name, payload } }));
  } catch (e) {
  }
}
function launchTrainer(trainerId, opts = {}) {
  const origin = VALID_ORIGINS.has(opts.origin) ? opts.origin : "world";
  if (!TRAINER_REGISTRY[trainerId]) {
    console.warn(`[trainer-launch] unknown trainer "${trainerId}"`);
    return false;
  }
  const mode = opts.mode || null;
  if (mode && !TRAINER_REGISTRY[trainerId].modes.includes(mode)) {
    console.warn(`[trainer-launch] unknown mode "${mode}" for trainer "${trainerId}"`);
  }
  const slot = getTrainerSlot(trainerId);
  const payload = { trainerId, mode, origin, npcId: opts.npcId || null, slot };
  safeTelemetry("trainer_launch_origin", payload);
  if (origin === "route") {
    return true;
  }
  emit$1(WORLD_EVENTS$1.LAUNCH_TRAINER, payload);
  return true;
}
function exitTrainer(trainerId, completed = false) {
  emit$1(WORLD_EVENTS$1.EXIT_TRAINER, { trainerId, completed });
  safeTelemetry("trainer_exit", { trainerId, completed });
}
const LAZY_TRAINERS = Object.fromEntries(
  Object.entries(TRAINER_REGISTRY).map(([id, entry]) => [id, reactExports.lazy(entry.load)])
);
function TrainerOverlay() {
  const [active2, setActive] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const offLaunch = on(WORLD_EVENTS$1.LAUNCH_TRAINER, (payload) => {
      if (!(payload == null ? void 0 : payload.trainerId)) return;
      setActive(payload);
    });
    const offExit = on(WORLD_EVENTS$1.EXIT_TRAINER, () => setActive(null));
    return () => {
      offLaunch();
      offExit();
    };
  }, []);
  reactExports.useEffect(() => {
    if (!active2) return void 0;
    const onKey = (e) => {
      if (e.code === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active2]);
  const Trainer = reactExports.useMemo(() => {
    if (!(active2 == null ? void 0 : active2.trainerId)) return null;
    return LAZY_TRAINERS[active2.trainerId] || null;
  }, [active2]);
  function handleClose() {
    if (active2) exitTrainer(active2.trainerId, false);
    setActive(null);
  }
  if (!active2 || !Trainer) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-trainer-overlay", role: "dialog", "aria-modal": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-trainer-overlay-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v3-trainer-overlay-title", children: [
        active2.origin === "npc" ? "🗣️ Mời từ NPC: " : "🏛️ ",
        active2.trainerId,
        active2.mode ? ` · ${active2.mode}` : ""
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "v3-trainer-overlay-close", onClick: handleClose, "aria-label": "Quay lại 3D World", children: "↩ Quay lại 3D" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-trainer-overlay-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v3-trainer-overlay-loading", children: "⏳ Đang tải trainer…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trainer, { mode: active2.mode }) }) })
  ] });
}
function SceneTransitionModal() {
  const [active2, setActive] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const offConfirm = on(WORLD_EVENTS$1.CONFIRM_SCENE_TRANSITION, (payload) => {
      setActive(payload);
    });
    return () => offConfirm();
  }, []);
  if (!active2) return null;
  const handleConfirm = () => {
    emit$1(WORLD_EVENTS$1.LAUNCH_SCENE, { sceneId: active2.sceneId, name: active2.name });
    setActive(null);
  };
  const handleCancel = () => {
    setActive(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "v3-scene-transition-modal-overlay",
      role: "dialog",
      "aria-modal": "true",
      style: {
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2e3,
        backdropFilter: "blur(4px)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "v3-scene-transition-modal",
          style: {
            background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
            border: "2px solid #38bdf8",
            borderRadius: "16px",
            padding: "24px",
            maxWidth: "400px",
            width: "90%",
            maxHeight: "92vh",
            overflowY: "auto",
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
            color: "#f8fafc"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: "1.25rem", fontWeight: "bold" }, children: "Chuyển Cảnh" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "0 0 24px 0", fontSize: "1rem", lineHeight: "1.5", opacity: 0.9 }, children: [
              "Bạn có muốn chuyển đến ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: active2.name }),
              " không?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "12px", justifyContent: "center" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleCancel,
                  style: {
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#475569",
                    color: "#fff",
                    fontWeight: "bold",
                    cursor: "pointer",
                    flex: 1
                  },
                  children: "Hủy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleConfirm,
                  style: {
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#0284c7",
                    color: "#fff",
                    fontWeight: "bold",
                    cursor: "pointer",
                    flex: 1
                  },
                  children: "Đồng ý"
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
const GachaPage = reactExports.lazy(() => __vitePreload(() => import("./GachaPage-DvakJp7f.js"), true ? __vite__mapDeps([58,1,4,5,6,3,7,8,9,10,12,59,60,61,62]) : void 0, import.meta.url));
const ShopPage = reactExports.lazy(() => __vitePreload(() => import("./ShopPage-oA5EV9Lz.js"), true ? __vite__mapDeps([63,1,4,5,6,12,59,7,9,62]) : void 0, import.meta.url));
const MarketPage = reactExports.lazy(() => __vitePreload(() => import("./MarketPage-C3vBmGut.js"), true ? __vite__mapDeps([64,1,4,5,6,11,12,65,9,62]) : void 0, import.meta.url));
const InventoryPage = reactExports.lazy(() => __vitePreload(() => import("./InventoryPage-DPiuCpcu.js"), true ? __vite__mapDeps([66,1,4,5,6,59,7,9,62]) : void 0, import.meta.url));
const SCENE_COMPONENTS = {
  "/gacha": GachaPage,
  "/shop": ShopPage,
  "/market": MarketPage,
  "/inventory": InventoryPage
};
function SceneOverlay() {
  const [active2, setActive] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const offLaunch = on(WORLD_EVENTS$1.LAUNCH_SCENE, (payload) => {
      if (!(payload == null ? void 0 : payload.sceneId)) return;
      setActive(payload);
    });
    const offExit = on(WORLD_EVENTS$1.EXIT_SCENE, () => setActive(null));
    return () => {
      offLaunch();
      offExit();
    };
  }, []);
  const SceneComponent = reactExports.useMemo(() => {
    if (!(active2 == null ? void 0 : active2.sceneId)) return null;
    return SCENE_COMPONENTS[active2.sceneId] || null;
  }, [active2]);
  function handleClose() {
    emit$1(WORLD_EVENTS$1.EXIT_SCENE, { sceneId: active2 == null ? void 0 : active2.sceneId });
    setActive(null);
  }
  if (!active2) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "v3-scene-overlay",
      role: "dialog",
      "aria-modal": "true",
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 1e3,
        backgroundColor: "var(--n4-bg, #0f172a)",
        // fallback background
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "v3-scene-overlay-header",
            style: {
              height: "56px",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "linear-gradient(180deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0) 100%)",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1010,
              // above the page content
              pointerEvents: "none"
              // let clicks pass through to the page unless on the button
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "v3-scene-overlay-close",
                  onClick: handleClose,
                  "aria-label": "Quay lại 3D World",
                  style: {
                    pointerEvents: "auto",
                    background: "rgba(0, 0, 0, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(4px)",
                    color: "#fff",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.background = "rgba(220, 38, 38, 0.8)";
                    e.currentTarget.style.borderColor = "rgba(248, 113, 113, 1)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  },
                  children: "↩ Quay lại 3D"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "v3-scene-overlay-body",
            style: {
              flex: 1,
              position: "relative",
              overflow: "auto"
              // some pages need their own scrolling
            },
            children: SceneComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", placeItems: "center", height: "100%", color: "#fff" }, children: "⏳ Đang tải khu vực…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SceneComponent, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "grid", placeItems: "center", height: "100%", color: "#fff" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "Không tìm thấy trang: ",
                active2.sceneId
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleClose, style: { marginTop: "16px", padding: "8px 16px", cursor: "pointer" }, children: "Đóng" })
            ] })
          }
        )
      ]
    }
  );
}
let enabled = false;
function isEnabled() {
  return enabled;
}
function bind() {
  if (typeof window === "undefined") return () => {
  };
  const onSpeak = (e) => {
    return;
  };
  return onPetSpeak(onSpeak);
}
const STATE = {
  intensity: 0,
  kind: "clear",
  wind: 0,
  fogDensity: 0
};
const KIND_CONFIG = Object.freeze({
  clear: { weight: 38, durationSec: 240 },
  // 4 min
  sakura: { weight: 26, durationSec: 180 },
  // 3 min
  snow: { weight: 18, durationSec: 180 },
  // 3 min
  fog: { weight: 8, durationSec: 90 },
  // 1.5 min
  rain: { weight: 7, durationSec: 45 },
  // 45 s — shortest, rare
  storm: { weight: 3, durationSec: 20 }
  // 20 s — very rare
});
const KIND_ORDER = Object.keys(KIND_CONFIG);
KIND_ORDER.reduce((s, k) => s + KIND_CONFIG[k].weight, 0);
let currentKind = "clear";
let nextSwitchAtSec = 0;
let initialised = false;
let lastWetAtSec = -Infinity;
let pendingRecompute = true;
let unsub = null;
function pickNextKind(prevKind) {
  const eligible = KIND_ORDER.filter((k) => k !== prevKind);
  const totalEligible = eligible.reduce((s, k) => s + KIND_CONFIG[k].weight, 0);
  const r = Math.random() * totalEligible;
  let acc = 0;
  for (const k of eligible) {
    acc += KIND_CONFIG[k].weight;
    if (r <= acc) return k;
  }
  return "clear";
}
function realSeconds() {
  return typeof performance !== "undefined" ? performance.now() / 1e3 : 0;
}
function ensureRotationInitialised(nowSec) {
  if (initialised) return;
  initialised = true;
  currentKind = "clear";
  nextSwitchAtSec = nowSec + KIND_CONFIG.clear.durationSec;
}
function tickRotation() {
  const nowSec = realSeconds();
  ensureRotationInitialised(nowSec);
  if (nowSec >= nextSwitchAtSec) {
    currentKind = pickNextKind(currentKind);
    nextSwitchAtSec = nowSec + KIND_CONFIG[currentKind].durationSec;
  }
  if (currentKind === "rain" || currentKind === "storm") lastWetAtSec = nowSec;
}
function recomputeIfPending() {
  if (!pendingRecompute) return;
  pendingRecompute = false;
  try {
    const due = dueQueue({ before: Date.now() });
    const dueCount = Array.isArray(due) ? due.length : 0;
    STATE.intensity = Math.max(0.3, Math.min(1, dueCount / 30));
  } catch (e) {
    STATE.intensity = 0.4;
  }
}
function ensureSubscribed() {
  if (unsub) return;
  try {
    unsub = onReview(() => {
      pendingRecompute = true;
    });
  } catch (e) {
  }
}
function get(playerPos) {
  ensureSubscribed();
  recomputeIfPending();
  tickRotation();
  const t = getNow();
  let kind = currentKind;
  if (playerPos) {
    const biome = biomeAt(playerPos.x, playerPos.z);
    const frontier = regionAt(playerPos.x, playerPos.z);
    if ((biome == null ? void 0 : biome.id) === "doukutsu" || (frontier == null ? void 0 : frontier.kind) === "cave") kind = "clear";
    else if (((biome == null ? void 0 : biome.id) === "umi" || (frontier == null ? void 0 : frontier.kind) === "coast") && kind === "snow") kind = "sakura";
    else if ((frontier == null ? void 0 : frontier.kind) === "highland" && kind === "rain") kind = "snow";
    else if ((frontier == null ? void 0 : frontier.kind) === "sky" && (kind === "fog" || kind === "rain")) kind = "clear";
  }
  STATE.kind = kind;
  STATE.wind = 0.2 + STATE.intensity * 0.6;
  STATE.fogDensity = kind === "fog" ? 0.012 + STATE.intensity * 0.014 : t.phase === "night" ? 3e-3 : 8e-4;
  return STATE;
}
function getLightingWeatherState() {
  const elapsedSinceRain = realSeconds() - lastWetAtSec;
  return {
    kind: currentKind,
    afterRain: currentKind === "clear" && elapsedSinceRain >= 0 ? Math.max(0, Math.min(1, 1 - elapsedSinceRain / 80)) : 0
  };
}
const PARTICLE_POOL = 240;
function WeatherLayer() {
  const { camera, scene } = useThree();
  const { playerRef, quality } = useStage();
  const meshRef = reactExports.useRef(null);
  const maxCount = quality === "medium" ? 120 : PARTICLE_POOL;
  const particles = reactExports.useRef(null);
  if (!particles.current) {
    particles.current = new Array(PARTICLE_POOL).fill(null).map(() => ({
      x: 0,
      y: -999,
      z: 0,
      vy: 0,
      kind: "rain"
    }));
  }
  const dummy = reactExports.useMemo(() => new Object3D(), []);
  useFrame((_, dt) => {
    if (quality === "low") return;
    const player = playerRef == null ? void 0 : playerRef.current;
    const w = get(player == null ? void 0 : player.position);
    const isParticleKind = w.kind === "rain" || w.kind === "snow" || w.kind === "storm" || w.kind === "sakura";
    const densityMul = w.kind === "sakura" ? 0.55 : w.kind === "rain" ? 0.7 : 1;
    const active2 = isParticleKind ? Math.floor(maxCount * w.intensity * densityMul) : 0;
    if (!scene.fog) scene.fog = new FogExp2("#cfd9e6", 1e-3);
    scene.fog.density = MathUtils.lerp(scene.fog.density || 1e-3, w.fogDensity || 1e-3, 0.05);
    if (w.kind === "storm") scene.fog.color.set("#5a627a");
    else if (w.kind === "fog") scene.fog.color.set("#cfd9e6");
    else if (w.kind === "snow") scene.fog.color.set("#e8eef8");
    else if (w.kind === "sakura") scene.fog.color.set("#ffe3ee");
    else if (w.kind === "clear") scene.fog.color.set("#e6f0ff");
    else scene.fog.color.set("#dde6ee");
    if (!meshRef.current) return;
    const mesh = meshRef.current;
    const colorHex = w.kind === "sakura" ? "#ffb6cf" : w.kind === "snow" ? "#ffffff" : w.kind === "storm" ? "#a8c2ff" : "#bfdcff";
    mesh.material.color.set(colorHex);
    mesh.count = active2;
    if (active2 <= 0) return;
    const step = Math.min(dt, 0.05);
    const cx = camera.position.x;
    const cz = camera.position.z;
    for (let i = 0; i < active2; i++) {
      const p = particles.current[i];
      const dx = p.x - cx, dz = p.z - cz;
      if (p.y < ((player == null ? void 0 : player.position.y) || 0) - 1 || dx * dx + dz * dz > 1600) {
        p.x = cx + (Math.random() - 0.5) * 60;
        p.z = cz + (Math.random() - 0.5) * 60;
        p.y = ((player == null ? void 0 : player.position.y) || 0) + 18 + Math.random() * 10;
        p.kind = w.kind;
        if (w.kind === "snow") p.vy = -1.8 - Math.random();
        else if (w.kind === "sakura") p.vy = -1 - Math.random() * 0.6;
        else p.vy = -16 - Math.random() * 6;
      }
      p.y += p.vy * step;
      if (p.kind === "snow") p.x += Math.sin(p.y * 0.5) * 0.04;
      if (p.kind === "sakura") {
        p.x += Math.sin(p.y * 0.35 + p.z * 0.1) * 0.08;
        p.z += Math.cos(p.y * 0.35 + p.x * 0.1) * 0.05;
      }
      dummy.position.set(p.x, p.y, p.z);
      const s = w.kind === "snow" ? 0.3 : w.kind === "sakura" ? 0.45 : 1;
      dummy.scale.set(s, s, s);
      dummy.lookAt(camera.position);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });
  if (quality === "low") return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("instancedMesh", { ref: meshRef, args: [null, null, maxCount], frustumCulled: false, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("planeGeometry", { args: [0.06, 0.6] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color: "#bfdcff", transparent: true, opacity: 0.6, depthWrite: false })
  ] }, quality);
}
const NEAR_DISTANCE = 4;
const VISUAL = {
  VOCAB_TREE: { color: "#7fd49a", label: "🌳 Cây từ vựng", height: 2, model: "tree", scale: 0.8 },
  KANJI_ROCK: { color: "#a89c84", label: "🪨 Đá Kanji", height: 1.4, model: "rock-medium", scale: 0.8 },
  GRAMMAR_ECHO: { color: "#b894e8", label: "✨ Tiếng vọng", height: 1.8, model: "mushroom", scale: 1.2 },
  PARTICLE_GATE: { color: "#5dd6c5", label: "⛩️ Cổng trợ từ", height: 1.6, model: "arch-gate", scale: 0.7 },
  CONJUGATION_FORGE: { color: "#f4a261", label: "⚒️ Lò chia thể", height: 1.7, model: "workbench-anvil", scale: 0.9 },
  KEIGO_GATE: { color: "#f472b6", label: "敬 Kính ngữ", height: 1.6, model: "arch-gate", scale: 0.72 },
  LISTENING_FISH: { color: "#7ec7e8", label: "🐟 Cá Nghe", height: 1, model: "duck", scale: 1 },
  COMBAT_MOB: { color: "#e8746e", label: "👺 Quái", height: 1.6, model: "barbarian", scale: 1 },
  NPC_QUIZ: { color: "#e8c574", label: "🗣️ Trắc nghiệm", height: 1.7, model: "rogue", scale: 1 },
  NATURE_SCAN: { color: "#a8e86e", label: "🍃 Quét thiên nhiên", height: 1.2, model: "fox", scale: 1 }
};
function EncounterNode({ def, onTrigger }) {
  const { playerRef } = useStage();
  const runtime = useOptionalWorldRuntime();
  const [nearby, setNearby] = reactExports.useState(false);
  const meshRef = reactExports.useRef(null);
  reactExports.useRef(0);
  const y = sampleY(def.pos[0], def.pos[2]);
  const vis = VISUAL[def.type] || VISUAL.COMBAT_MOB;
  useFrame((state) => {
    const player = playerRef == null ? void 0 : playerRef.current;
    if (!player) return;
    if (!meshRef.current) return;
    const offset = Math.abs(Math.floor(def.pos[0] + def.pos[2])) % 8;
    const tick = Math.floor(state.clock.elapsedTime * 60);
    if ((tick + offset) % 8 === 0) {
      const dx = player.position.x - def.pos[0];
      const dz = player.position.z - def.pos[2];
      const d2 = dx * dx + dz * dz;
      const isVisible = d2 < 1600;
      if (meshRef.current.visible !== isVisible) {
        meshRef.current.visible = isVisible;
      }
      if (d2 > (NEAR_DISTANCE + 5) * (NEAR_DISTANCE + 5)) {
        if (nearby) setNearby(false);
      } else {
        const d = Math.sqrt(d2);
        const near = d < NEAR_DISTANCE;
        if (near !== nearby) setNearby(near);
      }
    }
    if (!meshRef.current.visible) return;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2 + def.pos[0]) * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    if (!runtime && nearby && consumeInteract()) {
      onTrigger == null ? void 0 : onTrigger(def);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { position: [def.pos[0], y, def.pos[2]], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: meshRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        ModelEntity,
        {
          modelId: vis.model,
          scale: [vis.scale, vis.scale, vis.scale],
          fallbackSize: [1, vis.height, 1],
          fallbackColor: vis.color,
          castShadow: false,
          children: [
            nearby && /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { color: vis.color, intensity: 1.5, distance: 5, decay: 2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("mesh", { visible: false })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, vis.height * 0.5, 0], rotation: [Math.PI / 2, 0, 0], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ringGeometry", { args: [1.2, 1.3, 16] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color: vis.color, transparent: true, opacity: nearby ? 0.8 : 0.3, side: 2 })
      ] })
    ] }),
    nearby && /* @__PURE__ */ jsxRuntimeExports.jsx(Html, { position: [0, vis.height + 0.6, 0], center: true, distanceFactor: 8, style: { pointerEvents: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v3-encounter-label", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: vis.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-cta", children: "[E]" })
    ] }) })
  ] });
}
const TYPE_TO_EMITTER = Object.freeze({
  KANJI_ROCK: emitKanjiEncounter,
  GRAMMAR_ECHO: emitGrammarEncounter,
  PARTICLE_GATE: emitParticleEncounter,
  CONJUGATION_FORGE: emitConjugationEncounter,
  KEIGO_GATE: emitKeigoEncounter,
  LISTENING_FISH: emitListeningEncounter,
  NATURE_SCAN: () => false
});
function triggerEncounter(encounter) {
  if (!encounter) return false;
  const emit2 = TYPE_TO_EMITTER[encounter.type] || emitEncounter;
  return emit2(encounter);
}
function EncounterLayer({ cx, cz, chunkSize, excludedTypes = [] }) {
  const items = reactExports.useMemo(() => encountersInChunk(cx, cz, chunkSize), [cx, cz, chunkSize]);
  const visibleItems = items.filter((item) => !excludedTypes.includes(item.type));
  const onTrigger = reactExports.useCallback((def) => {
    triggerEncounter(def);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("group", { name: `encounters-${cx}-${cz}`, children: visibleItems.map((def) => /* @__PURE__ */ jsxRuntimeExports.jsx(EncounterNode, { def, onTrigger }, def.id)) });
}
const TALK_DISTANCE = 3.5;
const FAR_CULL_D2 = 80 * 80;
function NpcLayer({ cx, cz, chunkSize }) {
  const items = reactExports.useMemo(() => npcsInChunk(cx, cz, chunkSize), [cx, cz, chunkSize]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("group", { name: `npcs-${cx}-${cz}`, children: items.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(NpcMarker, { def: n }, n.id)) });
}
function NpcMarker({ def }) {
  const { playerRef } = useStage();
  const runtime = useOptionalWorldRuntime();
  const wrapperRef = reactExports.useRef(null);
  const [nearby, setNearby] = reactExports.useState(false);
  const [showLabel, setShowLabel] = reactExports.useState(false);
  const tickRef = reactExports.useRef(0);
  const y = sampleY(def.pos[0], def.pos[2]);
  useFrame((state) => {
    const p = playerRef == null ? void 0 : playerRef.current;
    if (!p) return;
    const dx = p.position.x - def.pos[0];
    const dz = p.position.z - def.pos[2];
    const d2 = dx * dx + dz * dz;
    const isVisible = d2 <= FAR_CULL_D2;
    if (wrapperRef.current && wrapperRef.current.visible !== isVisible) {
      wrapperRef.current.visible = isVisible;
    }
    if (!isVisible) {
      if (nearby) setNearby(false);
      return;
    }
    if (wrapperRef.current) {
      wrapperRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5 + def.pos[0]) * 0.05;
    }
    tickRef.current = (tickRef.current + 1) % 15;
    if (tickRef.current !== 0) return;
    const show = d2 < 30 * 30;
    if (show !== showLabel) setShowLabel(show);
    if (d2 > (TALK_DISTANCE + 30) * (TALK_DISTANCE + 30)) {
      if (nearby) setNearby(false);
      return;
    }
    const d = Math.sqrt(d2);
    const near = d < TALK_DISTANCE;
    if (near !== nearby) setNearby(near);
    if (near && wrapperRef.current) {
      const targetAngle = Math.atan2(p.position.x - def.pos[0], p.position.z - def.pos[2]);
      wrapperRef.current.rotation.y = MathUtils.lerp(wrapperRef.current.rotation.y, targetAngle, 0.1);
    } else if (wrapperRef.current) {
      wrapperRef.current.rotation.y = MathUtils.lerp(wrapperRef.current.rotation.y, 0, 0.02);
    }
    if (!runtime && near && consumeInteract()) {
      emitDialogue(def);
    }
  });
  const modelId = def.model || "emiko";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { position: [def.pos[0], y, def.pos[2]], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("group", { ref: wrapperRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModelEntity,
      {
        modelId,
        position: [0, 0, 0],
        scale: [0.9, 0.9, 0.9],
        fallbackSize: [1, 1.8, 1],
        castShadow: false
      }
    ) }),
    nearby && /* @__PURE__ */ jsxRuntimeExports.jsx(Html, { position: [0, 2.7, 0], center: true, style: { pointerEvents: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "24px", animation: "float 2s ease-in-out infinite" }, children: "💬" }) }),
    showLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(Html, { position: [0, 2.3, 0], center: true, distanceFactor: 10, style: { pointerEvents: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `v3-npc-label${nearby ? " is-near" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: def.name }),
      nearby && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v3-cta", children: "[E] Nói" })
    ] }) })
  ] });
}
export {
  getStudyDomainProgress as $,
  content as A,
  useAIKey as B,
  ControlsCoach as C,
  DialogueOverlay as D,
  EncounterLayer as E,
  batchTranslate as F,
  batchRomaji as G,
  HelpPanel as H,
  useDialogFocus as I,
  chatWithAI as J,
  KeyLegend as K,
  getMyReports as L,
  reportContentError as M,
  NpcLayer as N,
  sanitizeRomaji as O,
  PerformanceMonitor as P,
  loadExpandedStudyPools as Q,
  ACTION_EMITTERS as R,
  StudyQuestPanel as S,
  TouchControls as T,
  resetStudyDomain as U,
  VILLAGE_RADIUS as V,
  WORLD_RADIUS as W,
  subscribe as X,
  getWorldStudyStats as Y,
  buildStudyRoute as Z,
  TRAINER_REGISTRY as _,
  biomeBlend as a,
  ai as a$,
  makeKanjiKey as a0,
  makeVocabKey as a1,
  getVocabLabel as a2,
  makeGrammarKey as a3,
  getGrammarLabel as a4,
  isOnline as a5,
  apiFetch as a6,
  getStudyAdvice as a7,
  analyzeSentence as a8,
  roleplayMessage as a9,
  conjugateVerb as aA,
  validateConjugationItem as aB,
  ADJ_FORMS as aC,
  conjugateIAdj as aD,
  conjugateNaAdj as aE,
  maskAnswerForHint as aF,
  buildConjugationTable as aG,
  isLikelyJapaneseText as aH,
  getErrorExplanation as aI,
  classifyConjugationError as aJ,
  getQuestionsByLevel as aK,
  getWeakStudyItems as aL,
  generateQuiz as aM,
  navigateApp as aN,
  analyzeMistakes as aO,
  getLearningKeyType as aP,
  generateWordMap as aQ,
  generateStory as aR,
  continueStory as aS,
  generateGrammarDrill as aT,
  simplifyText as aU,
  generateLyrics as aV,
  reviewDiary as aW,
  simulateScene as aX,
  investigateKanji as aY,
  verbs$1 as aZ,
  adjectives$1 as a_,
  roleplayEvaluate as aa,
  ROLEPLAY_SCENARIOS as ab,
  reviewWriting as ac,
  grammarCheck as ad,
  generateExamples as ae,
  getConversationPrompt as af,
  getCooldownRemaining as ag,
  makeLearningKey as ah,
  AIHintButton as ai,
  AIExplainButton as aj,
  getItemLearningKey as ak,
  isN4Flag as al,
  vocabKey as am,
  kanjiKey as an,
  grammarKey as ao,
  parseLearningKey as ap,
  parseKey as aq,
  AIPostGameButton as ar,
  hasJapaneseText as as,
  hasQuestionBlank as at,
  safeQuestionRomaji as au,
  createAnswerPresentation as av,
  safeQuestionTts as aw,
  getItem as ax,
  VERB_FORMS as ay,
  getVerbPatternTag as az,
  biomeAt as b,
  WorldLearningOverlayStack$1 as b0,
  bind as c,
  WorldLearningOverlayStack as d,
  encountersInChunk as e,
  TrainerOverlay as f,
  SceneOverlay as g,
  SceneTransitionModal as h,
  isEnabled as i,
  getLightingWeatherState as j,
  emitBuildingNoRoute as k,
  launchTrainer as l,
  STUDY_PROGRESS_CHANGED_EVENT as m,
  npcsInChunk as n,
  getStudyProgressSnapshot as o,
  WeatherLayer as p,
  emitDialogue as q,
  isSupabaseConfigured as r,
  supabase as s,
  triggerEncounter as t,
  assertSupabaseConfigured as u,
  mergeStudyProgressSnapshots as v,
  STUDY_DOMAINS as w,
  setStudyProgressSnapshot as x,
  srs as y,
  reportPublicRuntimeConfigIssues as z
};
