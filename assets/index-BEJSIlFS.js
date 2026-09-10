const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./WorldExperience-CQ_uhNin.js","./vendor-runtime-BbOs9S9B.js","./vendor-react-BUL8WuXG.js","./registry-BAotxlgH.js","./learning-tools-CW2TYh-A.js","./ai-feature-catalog-BVQfq9eZ.js","./WorldSurfaceContext-CUHCnPUQ.js","./vendor-router-Dx6RIovR.js","./WorldExperience-Caf00gpT.css","./Content-D6IFEAjX.js","./vendor-icons-D83cEu6Z.js","./vendor-supabase-DTEAj5J1.js","./PracticeHub-KCYcYiCy.js","./ProfilePage-BnyYmi-j.js","./Settings-OmH3_UKz.js","./IOSGroupedList-s00mgaMZ.js","./useDialogFocus-CowhWfi-.js","./settings-constants-hqFN9CGt.js","./useAIKey-CpSw0zmN.js","./AnnouncementBanner-b2_-IvVK.js","./StudyAssist-BsBtjVZh.js","./ai-S4u4-t6_.js","./client-wNJ1tNgU.js","./api-BAg1LJRR.js","./data-index-Dcwjwz3J.js","./CoinToast-DjAhWqqV.js","./XpToast-3R5ucfHz.js","./CommandPalette-DTXSkZU6.js","./useSwipeClose-Ba57cA9P.js","./navigation-index-BUPaV9YS.js","./GuideModal-CFFxSqKQ.js","./debug-panel-BoGgLiOj.js","./content-errors-D90Pz2ps.js","./activity-router-BSafjB-b.js","./loader-BV1fV8FN.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { e as createJSONStorage, a as create, p as persist, r as reactExports, j as jsxRuntimeExports, R as React, u as useShallow, f as clientExports } from "./vendor-react-BUL8WuXG.js";
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { q as ChevronLeft, r as LoaderCircle, p as CircleAlert, s as House, t as Menu, U as UserRound, u as KeyRound, v as Cloud, R as RefreshCw, w as Pause, P as Play, l as Shield, x as Bell, y as Check, z as Megaphone, M as MessageCircle, m as Trophy, D as LogOut, E as CloudOff, F as Search, I as Ellipsis, J as Sun, N as Moon, O as Settings, Q as Globe, V as Target, B as BookOpen, Y as VolumeX, _ as Volume2 } from "./vendor-icons-D83cEu6Z.js";
import { a as useNavigate, H as HashRouter, u as useLocation, L as Link } from "./vendor-router-Dx6RIovR.js";
import { c as createClient } from "./vendor-supabase-DTEAj5J1.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function scheduleOfflineBoot({ production = false, win = globalThis.window, nav = globalThis.navigator } = {}) {
  if (!production || !win || !(nav == null ? void 0 : nav.serviceWorker)) return () => {
  };
  const page = new URL(win.location.href);
  if ([...page.searchParams.keys()].some((key) => ["qa", "__qa", "gallery", "benchmark"].includes(key.toLowerCase()))) return () => {
  };
  let disposed = false, resourceObserver = null, started = false;
  let worldReady = win.__HARU_WORLD_READY === true;
  const base = new URL("./", win.document.baseURI);
  const register = () => {
    if (disposed || started || !worldReady || win.document.readyState !== "complete") return;
    started = true;
    nav.serviceWorker.register(new URL("service-worker.js", base).href, { scope: base.pathname, updateViaCache: "none" }).then(async () => {
      var _a2, _b2;
      const ready = await nav.serviceWorker.ready;
      if (disposed || !(ready == null ? void 0 : ready.active)) return;
      const remember = (entries) => {
        const urls = [...new Set(entries.map((entry) => entry.name).filter((name) => {
          try {
            const url = new URL(name);
            return url.origin === base.origin && url.pathname.startsWith(base.pathname) && !url.search && /^(?:assets|game\/world|fonts|icons|images)\//.test(url.pathname.slice(base.pathname.length));
          } catch (e) {
            return false;
          }
        }))];
        for (let offset = 0; offset < urls.length; offset += 128) ready.active.postMessage({ type: "HARU_CACHE_VISITED", urls: urls.slice(offset, offset + 128) });
      };
      remember(((_b2 = (_a2 = win.performance) == null ? void 0 : _a2.getEntriesByType) == null ? void 0 : _b2.call(_a2, "resource")) || []);
      if (win.PerformanceObserver) {
        resourceObserver = new win.PerformanceObserver((list) => remember(list.getEntries()));
        resourceObserver.observe({ type: "resource", buffered: false });
      }
    }).catch(() => {
      var _a2;
      return (_a2 = win.console) == null ? void 0 : _a2.warn("Chưa chuẩn bị được bản ngoại tuyến. Ứng dụng vẫn hoạt động trực tuyến.");
    });
  };
  const worldBecameReady = () => {
    worldReady = true;
    register();
  };
  win.addEventListener("haru-world-ready", worldBecameReady);
  if (win.document.readyState === "complete") queueMicrotask(register);
  else win.addEventListener("load", register, { once: true });
  return () => {
    disposed = true;
    resourceObserver == null ? void 0 : resourceObserver.disconnect();
    win.removeEventListener("load", register);
    win.removeEventListener("haru-world-ready", worldBecameReady);
  };
}
const DEFAULT_DEVICE_PROBE = Object.freeze({
  isMobile: false,
  isTinyScreen: false,
  hardwareConcurrency: 4,
  deviceMemory: 4,
  crowdScale: 1,
  ambientScale: 1,
  viewDistance: 150,
  dprMax: 1
});
let cachedDeviceProbe = null;
function readNavigatorNumber(navigatorRef, key, fallback) {
  const value = Number(navigatorRef == null ? void 0 : navigatorRef[key]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}
function readScreenWidth(globalRef) {
  var _a2;
  const width = Number((globalRef == null ? void 0 : globalRef.innerWidth) || ((_a2 = globalRef == null ? void 0 : globalRef.screen) == null ? void 0 : _a2.width) || 0);
  return Number.isFinite(width) && width > 0 ? width : 1024;
}
function createDeviceProbe(globalRef = globalThis) {
  const navigatorRef = globalRef == null ? void 0 : globalRef.navigator;
  const userAgent = String((navigatorRef == null ? void 0 : navigatorRef.userAgent) || "");
  const hardwareConcurrency = readNavigatorNumber(navigatorRef, "hardwareConcurrency", 4);
  const deviceMemory = readNavigatorNumber(navigatorRef, "deviceMemory", 4);
  const screenWidth = readScreenWidth(globalRef);
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent) || screenWidth <= 768;
  const isTinyScreen = screenWidth <= 430;
  const weakCpu = hardwareConcurrency <= 4;
  const lowMemory = deviceMemory <= 4;
  const constrained = isMobile || isTinyScreen || weakCpu || lowMemory;
  return Object.freeze({
    isMobile,
    isTinyScreen,
    hardwareConcurrency,
    deviceMemory,
    crowdScale: constrained ? 0.65 : 1,
    ambientScale: constrained ? 0.45 : 1,
    viewDistance: isTinyScreen ? 90 : isMobile ? 110 : 150,
    dprMax: isTinyScreen ? 0.75 : isMobile ? 0.85 : 1
  });
}
function getDeviceProbe() {
  if (!cachedDeviceProbe) cachedDeviceProbe = createDeviceProbe();
  return cachedDeviceProbe || DEFAULT_DEVICE_PROBE;
}
const BASE_LOW = Object.freeze({
  tier: "low",
  shadows: false,
  shadowMapSize: 0,
  shadowSpan: 0,
  environment: null,
  antialias: false,
  enablePostProcessing: false,
  enable3D: true,
  enableDetailProps: false,
  enableAnimalScatter: false,
  enableMixedTerrain: false,
  enableRiver: false,
  enableMistPlanes: false,
  enablePetals: false,
  enableButterflies: false,
  enableMegaNature: false,
  enableFireflies: false,
  enableClouds: false,
  enableStarPulse: false,
  enableLanternFlicker: false,
  enableNPCBob: false,
  enableLakeRipple: false,
  enableCollectibleFloat: false,
  enableBuildingHover: false,
  enableMagicAura: false,
  enableEnemyLOD: true,
  enableAmbientLife: false,
  monumentVfxTier: "off",
  countMultiplier: 0.02,
  maxNPCs: 1,
  maxDetailProps: 0,
  scatterMultiplier: 0.01,
  pebbleTileCap: 80,
  lanternDetail: "off",
  viewDistance: 90,
  ambientScale: 1,
  crowdScale: 1,
  frameCap: 24,
  deviceProbe: DEFAULT_DEVICE_PROBE
});
const BASE_MED = Object.freeze({
  ...BASE_LOW,
  tier: "medium",
  shadows: false,
  shadowMapSize: 1024,
  shadowSpan: 60,
  antialias: false,
  enablePostProcessing: false,
  enableDetailProps: true,
  enableMixedTerrain: true,
  enablePetals: false,
  enableFireflies: false,
  enableClouds: true,
  enableLanternFlicker: true,
  enableNPCBob: true,
  enableLakeRipple: true,
  enableCollectibleFloat: true,
  enableBuildingHover: true,
  enableAmbientLife: true,
  monumentVfxTier: "lite",
  countMultiplier: 0.15,
  maxNPCs: 8,
  maxDetailProps: 7,
  scatterMultiplier: 0.18,
  pebbleTileCap: 200,
  lanternDetail: "lite",
  viewDistance: 220,
  frameCap: 45
});
const BASE_HIGH = Object.freeze({
  ...BASE_LOW,
  tier: "high",
  shadows: false,
  shadowMapSize: 2048,
  shadowSpan: 100,
  antialias: true,
  enablePostProcessing: false,
  enableDetailProps: true,
  enableAnimalScatter: true,
  enableMixedTerrain: true,
  enableRiver: true,
  enableMistPlanes: false,
  enablePetals: true,
  enableButterflies: false,
  enableMegaNature: true,
  enableFireflies: true,
  enableClouds: true,
  enableStarPulse: true,
  enableLanternFlicker: true,
  enableNPCBob: true,
  enableLakeRipple: true,
  enableCollectibleFloat: true,
  enableBuildingHover: true,
  enableMagicAura: true,
  enableAmbientLife: true,
  monumentVfxTier: "full",
  countMultiplier: 0.35,
  maxNPCs: 8,
  maxDetailProps: 10,
  scatterMultiplier: 0.38,
  pebbleTileCap: 400,
  lanternDetail: "full",
  viewDistance: 220,
  frameCap: 60
});
const TIER_TABLE = Object.freeze({
  low: BASE_LOW,
  medium: BASE_MED,
  high: BASE_HIGH
});
function pickRecommendedTier(probe = getDeviceProbe()) {
  if (!probe) return "low";
  if (probe.isMobile || probe.isTinyScreen) return "low";
  const cores = Number(probe.hardwareConcurrency) || 4;
  const mem = Number(probe.deviceMemory) || 4;
  if (cores >= 8 && mem >= 8) return "high";
  if (cores >= 4 && mem >= 4) return "medium";
  return "low";
}
function normaliseTier(tier) {
  return TIER_TABLE[tier] ? tier : "low";
}
function createQualityProfile(tier = "low", deviceProbe = getDeviceProbe()) {
  const base = TIER_TABLE[normaliseTier(tier)];
  const crowdScale = Number.isFinite(deviceProbe == null ? void 0 : deviceProbe.crowdScale) ? deviceProbe.crowdScale : 1;
  const ambientScale = Number.isFinite(deviceProbe == null ? void 0 : deviceProbe.ambientScale) ? deviceProbe.ambientScale : 1;
  const dprMax = Number.isFinite(deviceProbe == null ? void 0 : deviceProbe.dprMax) ? deviceProbe.dprMax : 1;
  const dprFloor = base.tier === "high" ? 0.9 : base.tier === "medium" ? 0.75 : 0.5;
  const dprCeiling = base.tier === "high" ? 1.5 : base.tier === "medium" ? 1.1 : 0.75;
  const minNPCs = base.tier === "low" ? 0 : 2;
  const minDetailProps = base.tier === "low" ? 0 : 2;
  return Object.freeze({
    ...base,
    antialias: base.antialias && !(deviceProbe == null ? void 0 : deviceProbe.isMobile) && !(deviceProbe == null ? void 0 : deviceProbe.isTinyScreen),
    dpr: [dprFloor, Math.max(dprFloor, Math.min(dprCeiling, dprMax * dprCeiling))],
    countMultiplier: base.countMultiplier * ambientScale,
    maxNPCs: Math.max(minNPCs, Math.round(base.maxNPCs * crowdScale)),
    maxDetailProps: Math.max(minDetailProps, Math.round(base.maxDetailProps * ambientScale)),
    scatterMultiplier: base.scatterMultiplier * ambientScale,
    pebbleTileCap: Math.max(base.tier === "low" ? 40 : 80, Math.round(base.pebbleTileCap * ambientScale)),
    viewDistance: Math.min(
      base.viewDistance,
      Number.isFinite(deviceProbe == null ? void 0 : deviceProbe.viewDistance) ? deviceProbe.viewDistance * (base.viewDistance / 150) : base.viewDistance
    ),
    frameCap: (deviceProbe == null ? void 0 : deviceProbe.isMobile) || (deviceProbe == null ? void 0 : deviceProbe.isTinyScreen) ? Math.min(base.frameCap, 30) : base.frameCap,
    ambientScale,
    crowdScale,
    deviceProbe
  });
}
function createLiteQualityProfile(deviceProbe = getDeviceProbe()) {
  return createQualityProfile("low", deviceProbe);
}
const LITE_PROFILE = createLiteQualityProfile(DEFAULT_DEVICE_PROBE);
const STORAGE_SCHEMA_KEY = "n4-schema-version";
const STORAGE_SCHEMA_VERSION = 2;
const OBJECT_STORE_KEYS = [
  "n4-bm",
  "n4-srs",
  "n4-react-app",
  "n4-react-learning"
];
function _getStorageItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}
function _setStorageItem(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    return false;
  }
}
function _normalizeObjectStore(key) {
  const raw = _getStorageItem(key);
  if (raw === null) return;
  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) return;
  } catch (e) {
  }
  _setStorageItem(key, "{}");
}
function _migrateToV1() {
  OBJECT_STORE_KEYS.forEach(_normalizeObjectStore);
}
function _getObjectItem(key) {
  try {
    const value = JSON.parse(_getStorageItem(key) || "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch (e) {
    return {};
  }
}
function _migrateToV2() {
  const bookmarks = _getObjectItem("n4-bm");
  const srs2 = _getObjectItem("n4-srs");
  const persisted = _getObjectItem("n4-react-learning");
  const state = persisted && typeof persisted.state === "object" ? persisted.state : {};
  const next = {
    ...persisted,
    state: {
      ...state,
      bookmarks: { ...bookmarks || {}, ...state.bookmarks || {} },
      srs: { ...srs2 || {}, ...state.srs || {} }
    }
  };
  _setStorageItem("n4-react-learning", JSON.stringify(next));
}
const STORAGE_MIGRATIONS = {
  1: _migrateToV1,
  2: _migrateToV2
};
function ensureStorageSchema() {
  let version2 = 0;
  const rawVersion = _getStorageItem(STORAGE_SCHEMA_KEY);
  if (rawVersion !== null) {
    const parsedVersion = parseInt(rawVersion, 10);
    version2 = Number.isFinite(parsedVersion) && parsedVersion > 0 ? parsedVersion : 0;
  }
  if (version2 >= STORAGE_SCHEMA_VERSION) return version2;
  for (let nextVersion = version2 + 1; nextVersion <= STORAGE_SCHEMA_VERSION; nextVersion++) {
    const migrate = STORAGE_MIGRATIONS[nextVersion];
    if (typeof migrate === "function") migrate();
    if (!_setStorageItem(STORAGE_SCHEMA_KEY, String(nextVersion))) break;
    version2 = nextVersion;
  }
  return version2;
}
const STORAGE_KEYS = {
  // ── Core navigation & display ──
  START_TAB: "n4-start-tab",
  LAST_ROUTE: "n4-last-route",
  FURIGANA: "n4-furigana",
  ROMAJI: "n4-romaji",
  THEME: "n4-theme",
  APP_STORE: "n4-react-app",
  LEARNING_STORE: "n4-react-learning",
  MASTERY_STORE: "n4-mastery-v1",
  QUEST_STORE: "n4-quest-store-v1",
  INVENTORY_STORE: "inventory",
  SEARCH_SCOPE: "n4-search-scope",
  TTS_RATE: "n4-tts-rate",
  AUTO_TTS: "n4-auto-tts",
  AUTO_BACKUP: "n4_autobackup",
  // NOTE: underscore (legacy compat)
  SELECTION_POPUP: "n4-sel-popup",
  COMPACT: "n4-compact",
  AUTO_COLLAPSE: "n4-auto-collapse",
  FILL_SCREEN: "n4-fill-screen",
  QUIZ_COUNT: "n4-quiz-count",
  HAPTIC: "n4-haptic",
  AUTO_SPEAK_FLASHCARD: "n4-auto-speak-fc",
  MINNA_VIEW: "n4-minna-view",
  GAME_TIME_BOMB: "n4-game-timebomb",
  GAME_FLASH_TIME: "n4-game-flashtime",
  // ── Kanji display ──
  KANJI_FONT: "n4-kanji-font",
  KANJI_WEIGHT: "n4-kanji-weight",
  KANJI_SIZE: "n4-kanji-size",
  // NOTE: bare-name keys below are persisted in users' localStorage;
  // renaming them would orphan stored values. All code uses the constant,
  // never the string literal. Safe to normalise in a future schema migration.
  FONT_SIZE_KANJI: "fzKanji",
  FONT_SIZE_VOCAB: "fzVocab",
  FONT_SIZE_GRAMMAR: "fzGrammar",
  // ── Layout ──
  CARD_LAYOUT: "cardLayout",
  EXAMPLE_DISPLAY: "n4-example-display",
  NAV_POSITION: "n4-nav-position",
  GAMES_COLS: "n4-games-cols",
  // ── Audio ──
  SOUND_FX: "soundFX",
  SOUND_CORRECT: "soundCorrect",
  SOUND_WRONG: "soundWrong",
  // ── Accessibility ──
  CB_PROTANOPIA: "cbProtanopia",
  CB_DEUTERANOPIA: "cbDeuteranopia",
  CB_TRITANOPIA: "cbTritanopia",
  DYSLEXIA_FONT: "dyslexiaFont",
  LARGE_TOUCH_TARGETS: "largeTouchTargets",
  SWIPE_FLASHCARD: "swipeFlashcard",
  SWIPE_CLOSE: "swipeClose",
  // ── Sidebar toggles ──
  SIDEBAR_STUDY_TOOLS: "sidebarStudyTools",
  SIDEBAR_EXTENDED: "sidebarExtended",
  SIDEBAR_PHASE2: "sidebarPhase2",
  SIDEBAR_PHASE3: "sidebarPhase3",
  // ── Lesson & SRS ──
  LESSON_CAP: "n4-lesson-cap",
  LESSON_START: "n4-lesson-start",
  SHOW_FEEDBACK: "n4-show-feedback",
  FONT_SIZE_BASE: "n4-fs",
  SRS: "n4-srs",
  BOOKMARKS: "n4-bm",
  // ── Onboarding ──
  GUIDE_SHOWN: "guideShown",
  ONBOARDING_DONE: "n4-onboarding-done",
  ONBOARDING_LEVEL: "n4-onboarding-level",
  ONBOARDING_FOCUS: "n4-onboarding-focus",
  // ── Learning ──
  LAST_MINNA_LESSON: "n4-last-minna-lesson",
  AI_DIARY_ENTRIES: "n4-ai-diary-entries",
  AUTO_BACKUP_SIGNATURE: "n4-auto-backup-sig",
  TTS_JP_VOICE: "n4-tts-jp-voice",
  TTS_VI_VOICE: "n4-tts-vi-voice",
  MISTAKES: "n4-mistakes",
  QUIZ_HISTORY: "quizHistory",
  STUDY_NOTES: "n4-study-notes",
  STUDY_NOTES_LOG: "n4-study-notes-log",
  PLAYLIST: "n4_playlist",
  // NOTE: underscore (legacy compat)
  CUSTOM_CARDS: "n4_custom_cards",
  // NOTE: underscore (legacy compat)
  DRAFT_FEATURES_SHORTLIST: "n4-draft-features-shortlist-v1",
  DRAFT_FEATURES_ROADMAP: "n4-draft-features-roadmap-v1",
  DRAFT_FEATURES_CHANGED_AT: "n4-draft-features-changed-at-v1"
};
(function() {
  try {
    const t = "__st";
    localStorage.setItem(t, "1");
    localStorage.removeItem(t);
  } catch (e) {
  }
})();
ensureStorageSchema();
function safeGetItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}
function safeSetItem(key, val) {
  try {
    if (localStorage.getItem(key) === val) return true;
    localStorage.setItem(key, val);
    return true;
  } catch (e) {
  }
  return false;
}
function safeRemoveItem(key) {
  try {
    localStorage.removeItem(key);
    delete _jsonObjectCache[key];
    return true;
  } catch (e) {
    return false;
  }
}
const _jsonObjectCache = /* @__PURE__ */ Object.create(null);
function _normalizeObjectValue(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}
function _cloneObjectValue(value) {
  if (typeof structuredClone === "function") {
    try {
      return structuredClone(value);
    } catch (e) {
    }
  }
  return JSON.parse(JSON.stringify(value));
}
function safeGetObjectItem(key) {
  const raw = safeGetItem(key);
  const cached = _jsonObjectCache[key];
  if (cached && cached.raw === raw) return _cloneObjectValue(cached.value);
  let parsed = {};
  if (raw) {
    try {
      parsed = _normalizeObjectValue(JSON.parse(raw));
    } catch (e) {
      parsed = {};
    }
  }
  _jsonObjectCache[key] = { raw, value: parsed };
  return _cloneObjectValue(parsed);
}
function safeSetObjectItem(key, value) {
  const normalized = _normalizeObjectValue(value);
  const raw = JSON.stringify(normalized);
  const current = safeGetItem(key);
  if (current === raw) {
    _jsonObjectCache[key] = { raw, value: normalized };
    return true;
  }
  try {
    localStorage.setItem(key, raw);
    _jsonObjectCache[key] = { raw, value: normalized };
    return true;
  } catch (e) {
    return false;
  }
}
const S = {
  tab: safeGetItem(STORAGE_KEYS.START_TAB) || "roadmap",
  search: "",
  section: "all",
  furigana: (function() {
    var v = safeGetItem(STORAGE_KEYS.FURIGANA);
    return v === "0" ? false : true;
  })(),
  romaji: (function() {
    var v = safeGetItem(STORAGE_KEYS.ROMAJI);
    return v === "0" ? false : true;
  })(),
  theme: safeGetItem(STORAGE_KEYS.THEME) || "light",
  sidebarOpen: typeof window !== "undefined" && window.innerWidth > 1024,
  bookmarkOnly: false,
  searchGlobal: safeGetItem(STORAGE_KEYS.SEARCH_SCOPE) === "global" || safeGetItem(STORAGE_KEYS.SEARCH_SCOPE) === null,
  ttsRate: (function() {
    var v = safeGetItem(STORAGE_KEYS.TTS_RATE);
    return v ? parseFloat(v) : 1;
  })(),
  autoTTS: safeGetItem(STORAGE_KEYS.AUTO_TTS) === "1",
  selPopup: safeGetItem(STORAGE_KEYS.SELECTION_POPUP) !== "0",
  compact: safeGetItem(STORAGE_KEYS.COMPACT) === "1",
  autoCollapse: safeGetItem(STORAGE_KEYS.AUTO_COLLAPSE) === "1",
  fillScreen: safeGetItem(STORAGE_KEYS.FILL_SCREEN) === "1",
  quizCount: parseInt(safeGetItem(STORAGE_KEYS.QUIZ_COUNT) || "10", 10),
  hapticEnabled: safeGetItem(STORAGE_KEYS.HAPTIC) !== "0",
  autoSpeakFC: safeGetItem(STORAGE_KEYS.AUTO_SPEAK_FLASHCARD) === "1",
  minnaView: safeGetItem(STORAGE_KEYS.MINNA_VIEW) || "default",
  gameTimeBomb: parseInt(safeGetItem(STORAGE_KEYS.GAME_TIME_BOMB) || "60", 10),
  gameFlashTime: parseInt(safeGetItem(STORAGE_KEYS.GAME_FLASH_TIME) || "2000", 10),
  kanji: [],
  vocab: [],
  grammar: [],
  minnaData: [],
  lessonCap: parseInt(safeGetItem(STORAGE_KEYS.LESSON_CAP) || "0", 10),
  lessonStart: parseInt(safeGetItem(STORAGE_KEYS.LESSON_START) || "0", 10),
  showFeedback: safeGetItem(STORAGE_KEYS.SHOW_FEEDBACK) !== "0"
};
Object.defineProperty(S, "srs", {
  get() {
    return safeGetObjectItem(STORAGE_KEYS.SRS);
  },
  set(v) {
    safeSetObjectItem(STORAGE_KEYS.SRS, v || {});
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(S, "bookmarks", {
  get() {
    return safeGetObjectItem(STORAGE_KEYS.BOOKMARKS);
  },
  set(v) {
    safeSetObjectItem(STORAGE_KEYS.BOOKMARKS, v || {});
  },
  enumerable: true,
  configurable: true
});
if (typeof window !== "undefined") {
  window.S = S;
}
const THEME_VAR_MAP = {
  bgPrimary: "--n4-bg-primary",
  bgSecondary: "--n4-bg-secondary",
  bgTertiary: "--n4-bg-tertiary",
  bgCard: "--n4-bg-card",
  bgCardHover: "--n4-bg-card-hover",
  bgOverlay: "--n4-bg-overlay",
  bgInput: "--n4-bg-input",
  bgSunken: "--n4-bg-sunken",
  bgElevated: "--n4-bg-elevated",
  textPrimary: "--n4-text-primary",
  textSecondary: "--n4-text-secondary",
  textMuted: "--n4-text-muted",
  textPlaceholder: "--n4-text-placeholder",
  accent: "--n4-accent",
  onAccent: "--n4-on-accent",
  bgGradient: "--n4-bg-gradient",
  borderColor: "--n4-border",
  ambient1: "--n4-ambient-1",
  ambient2: "--n4-ambient-2",
  shadowColor: "--n4-shadow-accent"
};
function hexToRgb(hex) {
  if (!hex || typeof hex !== "string") return null;
  let normalized = hex.replace("#", "");
  if (/^[0-9a-fA-F]{3}$/.test(normalized)) {
    normalized = normalized[0] + normalized[0] + normalized[1] + normalized[1] + normalized[2] + normalized[2];
  }
  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) return null;
  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16)
  };
}
function clampHex(n) {
  return Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
}
function relativeLuminance(rgb) {
  if (!rgb) return 0;
  const channel2 = (value) => {
    const normalized = value / 255;
    return normalized <= 0.04045 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel2(rgb.r) + 0.7152 * channel2(rgb.g) + 0.0722 * channel2(rgb.b);
}
function contrastRatio$1(foreground, background) {
  const lighter = Math.max(relativeLuminance(foreground), relativeLuminance(background));
  const darker = Math.min(relativeLuminance(foreground), relativeLuminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}
function getReadableTextOnColor(hex) {
  const background = hexToRgb(hex);
  if (!background) return "#000000";
  const dark = hexToRgb("#000000");
  const light = hexToRgb("#ffffff");
  return contrastRatio$1(dark, background) >= contrastRatio$1(light, background) ? "#000000" : "#ffffff";
}
function withAccentEffects(tokens) {
  var _a2, _b2, _c;
  const rgb = hexToRgb(tokens.accent);
  const bgRgb = hexToRgb(tokens.bgPrimary);
  const cardRgb = hexToRgb(tokens.bgCard);
  const secRgb = hexToRgb(tokens.textSecondary);
  const isLight = bgRgb && bgRgb.r * 0.299 + bgRgb.g * 0.587 + bgRgb.b * 0.114 > 128;
  const ar = (_a2 = rgb == null ? void 0 : rgb.r) != null ? _a2 : 77, ag = (_b2 = rgb == null ? void 0 : rgb.g) != null ? _b2 : 184, ab = (_c = rgb == null ? void 0 : rgb.b) != null ? _c : 154;
  const t = { ...tokens };
  t.onAccent = t.onAccent || getReadableTextOnColor(t.accent);
  t.accentGlow = t.accentGlow || `rgba(${ar},${ag},${ab},${isLight ? 0.18 : 0.28})`;
  t.accentDim = t.accentDim || `rgba(${ar},${ag},${ab},${isLight ? 0.06 : 0.12})`;
  if (!t.bgCardHover && cardRgb) {
    const d = isLight ? -6 : 10;
    t.bgCardHover = `#${clampHex(cardRgb.r + d)}${clampHex(cardRgb.g + d)}${clampHex(cardRgb.b + d)}`;
  }
  if (!t.bgOverlay && bgRgb) {
    t.bgOverlay = isLight ? `rgba(${bgRgb.r},${bgRgb.g},${bgRgb.b},0.88)` : `rgba(${Math.max(0, bgRgb.r - 4)},${Math.max(0, bgRgb.g - 4)},${Math.max(0, bgRgb.b - 4)},0.94)`;
  }
  if (!t.bgInput && bgRgb) {
    const d = isLight ? 6 : -4;
    t.bgInput = `#${clampHex(bgRgb.r + d)}${clampHex(bgRgb.g + d)}${clampHex(bgRgb.b + d)}`;
  }
  if (!t.bgSunken && bgRgb) {
    const d = isLight ? -8 : -5;
    t.bgSunken = `#${clampHex(bgRgb.r + d)}${clampHex(bgRgb.g + d)}${clampHex(bgRgb.b + d)}`;
  }
  if (!t.bgElevated && cardRgb) {
    const d = isLight ? 3 : 6;
    t.bgElevated = `#${clampHex(cardRgb.r + d)}${clampHex(cardRgb.g + d)}${clampHex(cardRgb.b + d)}`;
  }
  if (!t.textMuted && secRgb) {
    const surfaceRgb = cardRgb || bgRgb;
    t.textMuted = contrastRatio$1(secRgb, surfaceRgb) >= 4.5 ? t.textSecondary : t.textPrimary;
  }
  if (!t.textPlaceholder && secRgb) {
    const d = isLight ? 48 : -40;
    t.textPlaceholder = `#${clampHex(secRgb.r + d)}${clampHex(secRgb.g + d)}${clampHex(secRgb.b + d)}`;
  }
  if (!t.borderColor) {
    t.borderColor = isLight ? `rgba(${ar},${ag},${ab},0.1)` : `rgba(${ar},${ag},${ab},0.12)`;
  }
  if (!t.ambient1) {
    t.ambient1 = isLight ? `rgba(${ar},${ag},${ab},0.1)` : `rgba(${ar},${ag},${ab},0.15)`;
  }
  if (!t.ambient2) {
    const a2r = (ar + 120) % 256;
    const a2g = (ag + 206) % 256;
    const a2b = (ab + 90) % 256;
    t.ambient2 = isLight ? `rgba(${a2r},${a2g},${a2b},0.06)` : `rgba(${a2r},${a2g},${a2b},0.1)`;
  }
  if (!t.shadowColor) {
    t.shadowColor = isLight ? `rgba(${Math.floor(ar * 0.4)},${Math.floor(ag * 0.4)},${Math.floor(ab * 0.4)},0.12)` : `rgba(${ar},${ag},${ab},0.2)`;
  }
  if (!t.bgGradient) {
    if (isLight) {
      t.bgGradient = [
        `radial-gradient(ellipse 100% 55% at 80% 10%, rgba(${ar},${ag},${ab},0.09), transparent 70%)`,
        `radial-gradient(ellipse 80% 45% at 10% 85%, rgba(${ar},${ag},${ab},0.06), transparent 65%)`,
        `radial-gradient(ellipse 50% 35% at 50% 50%, rgba(${ar},${ag},${ab},0.02), transparent 55%)`,
        `linear-gradient(170deg, ${t.bgPrimary} 0%, ${t.bgSecondary} 45%, ${t.bgPrimary} 100%)`
      ].join(", ");
    } else {
      t.bgGradient = [
        `radial-gradient(ellipse 70% 50% at 75% -5%, rgba(${ar},${ag},${ab},0.18), transparent 65%)`,
        `radial-gradient(ellipse 55% 40% at 10% 90%, rgba(${ar},${ag},${ab},0.1), transparent 55%)`,
        `radial-gradient(ellipse 40% 30% at 40% 50%, rgba(${ar},${ag},${ab},0.04), transparent 50%)`,
        `linear-gradient(170deg, ${t.bgSecondary} 0%, ${t.bgPrimary} 55%, ${t.bgSecondary} 100%)`
      ].join(", ");
    }
  }
  return t;
}
const THEME_FAMILIES = [
  {
    id: "forest",
    icon: "🌲",
    name: "Rừng sâu",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#141f18", bgSecondary: "#1b2a20", bgTertiary: "#24352a", bgCard: "#1d2d1f", textPrimary: "#e4eedA", textSecondary: "#9aae8f", accent: "#52c9a5" }),
      light: withAccentEffects({ bgPrimary: "#e8f2ea", bgSecondary: "#dceade", bgTertiary: "#c8dccb", bgCard: "#f5fbf5", textPrimary: "#1e3024", textSecondary: "#4e6854", accent: "#2f9a6f" })
    }
  },
  {
    id: "sakura",
    icon: "🌸",
    name: "Sakura",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#201420", bgSecondary: "#2a1a28", bgTertiary: "#382432", bgCard: "#28182a", textPrimary: "#f2e0ea", textSecondary: "#b890a4", accent: "#ff6ba3" }),
      light: withAccentEffects({ bgPrimary: "#f8eaf1", bgSecondary: "#f0dce6", bgTertiary: "#e4c8d8", bgCard: "#fdf4f8", textPrimary: "#44263a", textSecondary: "#906580", accent: "#e25590" })
    }
  },
  {
    id: "ocean",
    icon: "🌊",
    name: "Đại dương",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#101c28", bgSecondary: "#152536", bgTertiary: "#1c3042", bgCard: "#132230", textPrimary: "#d8e9f2", textSecondary: "#85afc8", accent: "#12b5f0" }),
      light: withAccentEffects({ bgPrimary: "#e6f0fa", bgSecondary: "#d8e8f4", bgTertiary: "#c0d6ea", bgCard: "#f4f9ff", textPrimary: "#1a3250", textSecondary: "#587898", accent: "#1585d0" })
    }
  },
  {
    id: "sunset",
    icon: "🌅",
    name: "Hoàng hôn",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#201814", bgSecondary: "#2c201a", bgTertiary: "#3a2a22", bgCard: "#281c18", textPrimary: "#f2e4d8", textSecondary: "#c8a080", accent: "#ff7030" }),
      light: withAccentEffects({ bgPrimary: "#f5ece4", bgSecondary: "#ede0d4", bgTertiary: "#dfc8b0", bgCard: "#fdf6f0", textPrimary: "#4a2e22", textSecondary: "#986a55", accent: "#e0702e" })
    }
  },
  {
    id: "amethyst",
    icon: "💜",
    name: "Thạch anh tím",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#181620", bgSecondary: "#201c2c", bgTertiary: "#2c2638", bgCard: "#1e1a28", textPrimary: "#e6e0f2", textSecondary: "#a090be", accent: "#b46eff" }),
      light: withAccentEffects({ bgPrimary: "#eee8fa", bgSecondary: "#e4daf4", bgTertiary: "#d4c6ea", bgCard: "#f8f4ff", textPrimary: "#30264a", textSecondary: "#7868a0", accent: "#9460de" })
    }
  },
  {
    id: "ember",
    icon: "🔥",
    name: "Than hồng",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#201414", bgSecondary: "#2c1c1c", bgTertiary: "#3a2424", bgCard: "#281818", textPrimary: "#f2dada", textSecondary: "#cc9090", accent: "#ff3860" }),
      light: withAccentEffects({ bgPrimary: "#f8eaea", bgSecondary: "#f0dada", bgTertiary: "#e4c2be", bgCard: "#fdf4f3", textPrimary: "#4a2424", textSecondary: "#986464", accent: "#e04565" })
    }
  },
  {
    id: "midnight",
    icon: "🌙",
    name: "Nửa đêm",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#12121c", bgSecondary: "#1a1a26", bgTertiary: "#222232", bgCard: "#161620", textPrimary: "#e2e2f2", textSecondary: "#9090b8", accent: "#00f0ff" }),
      light: withAccentEffects({ bgPrimary: "#eaeff8", bgSecondary: "#dce4f0", bgTertiary: "#cad5e8", bgCard: "#f6f8ff", textPrimary: "#1e2840", textSecondary: "#5e6e90", accent: "#1caabb" })
    }
  },
  {
    id: "light-classic",
    icon: "☀️",
    name: "Cổ điển",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#171e17", bgSecondary: "#1e2820", bgTertiary: "#28322a", bgCard: "#1c241e", textPrimary: "#e8ece2", textSecondary: "#9ea894", accent: "#4fb888" }),
      light: withAccentEffects({ bgPrimary: "#eeece6", bgSecondary: "#e4e2da", bgTertiary: "#d4d0c6", bgCard: "#fafaf6", textPrimary: "#283224", textSecondary: "#566250", accent: "#2d9870" })
    }
  },
  {
    id: "light-sand",
    icon: "🏖️",
    name: "Bãi cát",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#1e1a14", bgSecondary: "#28221a", bgTertiary: "#352c22", bgCard: "#241e16", textPrimary: "#f2e8da", textSecondary: "#bea585", accent: "#daa850" }),
      light: withAccentEffects({ bgPrimary: "#f2ece2", bgSecondary: "#e8e2d6", bgTertiary: "#d8d0c0", bgCard: "#faf8f2", textPrimary: "#382e1e", textSecondary: "#786a52", accent: "#cc9020" })
    }
  },
  {
    id: "light-rose",
    icon: "🌷",
    name: "Hoa hồng",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#201820", bgSecondary: "#2a202a", bgTertiary: "#362832", bgCard: "#261e26", textPrimary: "#f4e0ea", textSecondary: "#be98a8", accent: "#e06488" }),
      light: withAccentEffects({ bgPrimary: "#f4ecef", bgSecondary: "#eae0e6", bgTertiary: "#dcccd6", bgCard: "#faf6f8", textPrimary: "#382230", textSecondary: "#886078", accent: "#d85078" })
    }
  },
  {
    id: "neon-tokyo",
    icon: "🏙️",
    name: "Tokyo Neon",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#0e0e1a", bgSecondary: "#161626", bgTertiary: "#202034", bgCard: "#121220", textPrimary: "#f0eaff", textSecondary: "#a898c8", accent: "#ff10ee", bgGradient: "radial-gradient(ellipse 75% 45% at 60% 0%, rgba(255,16,238,0.22), transparent 60%), radial-gradient(ellipse 50% 35% at 15% 85%, rgba(0,200,255,0.12), transparent 55%), radial-gradient(ellipse 30% 25% at 82% 60%, rgba(255,16,238,0.06), transparent 45%), linear-gradient(170deg, #161626 0%, #0e0e1a 55%, #161626 100%)", ambient1: "rgba(255,16,238,0.18)", ambient2: "rgba(0,200,255,0.12)" }),
      light: withAccentEffects({ bgPrimary: "#f0eaf8", bgSecondary: "#e6dcf2", bgTertiary: "#d4c6e8", bgCard: "#faf6ff", textPrimary: "#302450", textSecondary: "#7a66a8", accent: "#d02ab8", bgGradient: "radial-gradient(ellipse 80% 45% at 55% 8%, rgba(208,42,184,0.1), transparent 65%), radial-gradient(ellipse 50% 35% at 20% 85%, rgba(0,160,220,0.06), transparent 55%), linear-gradient(170deg, #e6dcf2 0%, #f0eaf8 50%, #e6dcf2 100%)", ambient1: "rgba(208,42,184,0.08)", ambient2: "rgba(0,160,220,0.05)" })
    }
  },
  {
    id: "aurora",
    icon: "🌌",
    name: "Cực quang",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#0c161e", bgSecondary: "#132028", bgTertiary: "#1c2c38", bgCard: "#101c26", textPrimary: "#d8f5ec", textSecondary: "#80c4a8", accent: "#00ff88", bgGradient: "radial-gradient(ellipse 80% 40% at 25% 5%, rgba(0,255,136,0.22), transparent 60%), radial-gradient(ellipse 55% 35% at 75% 20%, rgba(0,160,255,0.14), transparent 55%), radial-gradient(ellipse 40% 30% at 50% 75%, rgba(40,220,180,0.07), transparent 50%), linear-gradient(170deg, #132028 0%, #0c161e 55%, #132028 100%)", ambient1: "rgba(0,255,136,0.18)", ambient2: "rgba(0,160,255,0.12)" }),
      light: withAccentEffects({ bgPrimary: "#e2f8f0", bgSecondary: "#d2f0e6", bgTertiary: "#b6e4d2", bgCard: "#f0fdf8", textPrimary: "#163830", textSecondary: "#4e7e6c", accent: "#00c070", bgGradient: "radial-gradient(ellipse 90% 50% at 40% 5%, rgba(0,192,112,0.12), transparent 65%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0,140,200,0.07), transparent 55%), linear-gradient(170deg, #d2f0e6 0%, #e2f8f0 50%, #d2f0e6 100%)", ambient1: "rgba(0,192,112,0.1)", ambient2: "rgba(0,140,200,0.06)" })
    }
  },
  {
    id: "tropical",
    icon: "🌴",
    name: "Nhiệt đới",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#152018", bgSecondary: "#1c2a1c", bgTertiary: "#263424", bgCard: "#1c2818", textPrimary: "#f2edd4", textSecondary: "#a8b078", accent: "#ffd000" }),
      light: withAccentEffects({ bgPrimary: "#f5f2e2", bgSecondary: "#eceaD2", bgTertiary: "#dcd6b4", bgCard: "#fdfcf0", textPrimary: "#303e1c", textSecondary: "#748050", accent: "#d0a800" })
    }
  },
  {
    id: "lavender",
    icon: "💐",
    name: "Oải hương",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#1a1624", bgSecondary: "#221e2e", bgTertiary: "#2e263c", bgCard: "#201a2c", textPrimary: "#eae2fa", textSecondary: "#b0a0d0", accent: "#be90ff" }),
      light: withAccentEffects({ bgPrimary: "#eeeafa", bgSecondary: "#e2daf2", bgTertiary: "#d0c6e6", bgCard: "#f8f6ff", textPrimary: "#2e2448", textSecondary: "#726498", accent: "#9878e0" })
    }
  },
  {
    id: "light-sky",
    icon: "🌤️",
    name: "Bầu trời",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#131c28", bgSecondary: "#1a2634", bgTertiary: "#223242", bgCard: "#18222e", textPrimary: "#e0ecfa", textSecondary: "#92abc4", accent: "#4590f0" }),
      light: withAccentEffects({ bgPrimary: "#e6eef8", bgSecondary: "#dce6f2", bgTertiary: "#c8d6ea", bgCard: "#f4f8ff", textPrimary: "#1a283a", textSecondary: "#486280", accent: "#1a78f0" })
    }
  },
  {
    id: "light-mint",
    icon: "🍃",
    name: "Bạc hà",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#131e1a", bgSecondary: "#1a2822", bgTertiary: "#22342c", bgCard: "#18221e", textPrimary: "#e0f4ec", textSecondary: "#90baa8", accent: "#22d09a" }),
      light: withAccentEffects({ bgPrimary: "#e8f4ee", bgSecondary: "#dceae4", bgTertiary: "#c6dcd2", bgCard: "#f4faf8", textPrimary: "#182e26", textSecondary: "#466656", accent: "#00b870" })
    }
  },
  {
    id: "galaxy",
    icon: "🌌",
    name: "Vũ trụ",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#08001a", bgSecondary: "#0f0028", bgTertiary: "#1a0040", bgCard: "#120032", textPrimary: "#e6d9ff", textSecondary: "#a88beb", accent: "#8a2be2", bgGradient: "radial-gradient(ellipse 70% 45% at 60% 8%, rgba(138,43,226,0.26), transparent 60%), radial-gradient(ellipse 50% 35% at 22% 78%, rgba(100,50,200,0.15), transparent 55%), radial-gradient(circle 100px at 82% 55%, rgba(180,100,255,0.08), transparent 60%), linear-gradient(170deg, #0f0028 0%, #08001a 55%, #0f0028 100%)", ambient1: "rgba(138,43,226,0.22)", ambient2: "rgba(80,50,200,0.12)" }),
      light: withAccentEffects({ bgPrimary: "#f0e6ff", bgSecondary: "#e0ccff", bgTertiary: "#cfa6ff", bgCard: "#f8f2ff", textPrimary: "#1f004d", textSecondary: "#4a2680", accent: "#7000cc", bgGradient: "radial-gradient(ellipse 85% 50% at 50% 8%, rgba(112,0,204,0.1), transparent 65%), radial-gradient(ellipse 55% 35% at 80% 80%, rgba(138,43,226,0.06), transparent 55%), linear-gradient(170deg, #e0ccff 0%, #f0e6ff 50%, #e0ccff 100%)", ambient1: "rgba(112,0,204,0.08)", ambient2: "rgba(138,43,226,0.05)" })
    }
  },
  {
    id: "autumn",
    icon: "🍂",
    name: "Mùa thu",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#1c120c", bgSecondary: "#291a12", bgTertiary: "#38241a", bgCard: "#241610", textPrimary: "#ffead9", textSecondary: "#d9a380", accent: "#e05a16" }),
      light: withAccentEffects({ bgPrimary: "#fff1e6", bgSecondary: "#ffe0cc", bgTertiary: "#ffd0b3", bgCard: "#fff8f2", textPrimary: "#4d2b14", textSecondary: "#8c5936", accent: "#d9661a" })
    }
  },
  {
    id: "cyberpunk",
    icon: "🤖",
    name: "Tương lai viễn tưởng",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#03010a", bgSecondary: "#080316", bgTertiary: "#100624", bgCard: "#0b041c", textPrimary: "#f0f0ff", textSecondary: "#00f0ff", accent: "#ff0055", bgGradient: "radial-gradient(ellipse 65% 45% at 82% 8%, rgba(255,0,85,0.24), transparent 60%), radial-gradient(ellipse 55% 40% at 12% 82%, rgba(11,158,201,0.18), transparent 55%), radial-gradient(ellipse 30% 25% at 50% 45%, rgba(255,0,85,0.04), transparent 50%), linear-gradient(170deg, #080316 0%, #03010a 55%, #080316 100%)", ambient1: "rgba(255,0,85,0.2)", ambient2: "rgba(11,158,201,0.14)" }),
      light: withAccentEffects({ bgPrimary: "#f8f4ff", bgSecondary: "#e8e0ff", bgTertiary: "#d4c2ff", bgCard: "#fbf9ff", textPrimary: "#1a0533", textSecondary: "#ff0055", accent: "#0b9ec9", bgGradient: "radial-gradient(ellipse 75% 45% at 75% 10%, rgba(11,158,201,0.1), transparent 65%), radial-gradient(ellipse 55% 35% at 15% 80%, rgba(255,0,85,0.06), transparent 55%), linear-gradient(170deg, #e8e0ff 0%, #f8f4ff 50%, #e8e0ff 100%)", ambient1: "rgba(11,158,201,0.08)", ambient2: "rgba(255,0,85,0.05)" })
    }
  },
  // ══════════════ NEON / CYBERPUNK EXPANSION ══════════════
  {
    id: "neon-dragon",
    icon: "🐉",
    name: "Rồng Neon",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#0a0008", bgSecondary: "#140010", bgTertiary: "#1e0018", bgCard: "#10000c", textPrimary: "#ffe0f0", textSecondary: "#ff6090", accent: "#ff2060" }),
      light: withAccentEffects({ bgPrimary: "#fff0f4", bgSecondary: "#ffe0ea", bgTertiary: "#ffc8d8", bgCard: "#fff8fa", textPrimary: "#400018", textSecondary: "#c01850", accent: "#e01850" })
    }
  },
  {
    id: "neon-sakura",
    icon: "🌸",
    name: "Sakura Neon",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#100818", bgSecondary: "#1a0e24", bgTertiary: "#261432", bgCard: "#140a1e", textPrimary: "#fce0ff", textSecondary: "#e080ff", accent: "#ff40ff" }),
      light: withAccentEffects({ bgPrimary: "#faf0ff", bgSecondary: "#f2e2ff", bgTertiary: "#e6ccff", bgCard: "#fef8ff", textPrimary: "#30104a", textSecondary: "#a040d0", accent: "#c030e0" })
    }
  },
  {
    id: "neon-vaporwave",
    icon: "🌆",
    name: "Vaporwave",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#0c031e", bgSecondary: "#14062c", bgTertiary: "#1e0c3c", bgCard: "#100526", textPrimary: "#e0d0ff", textSecondary: "#80d0ff", accent: "#ff71ce", bgGradient: "radial-gradient(ellipse 70% 40% at 70% 8%, rgba(255,113,206,0.22), transparent 60%), radial-gradient(ellipse 55% 35% at 18% 82%, rgba(128,208,255,0.15), transparent 55%), radial-gradient(ellipse 35% 28% at 45% 50%, rgba(200,120,255,0.07), transparent 50%), linear-gradient(170deg, #14062c 0%, #0c031e 55%, #14062c 100%)", ambient1: "rgba(255,113,206,0.18)", ambient2: "rgba(128,208,255,0.12)" }),
      light: withAccentEffects({ bgPrimary: "#f4ecff", bgSecondary: "#ebe0ff", bgTertiary: "#dcceff", bgCard: "#faf6ff", textPrimary: "#200840", textSecondary: "#8040c0", accent: "#e050a0", bgGradient: "radial-gradient(ellipse 80% 45% at 65% 8%, rgba(224,80,160,0.1), transparent 65%), radial-gradient(ellipse 55% 35% at 20% 82%, rgba(100,180,240,0.07), transparent 55%), linear-gradient(170deg, #ebe0ff 0%, #f4ecff 50%, #ebe0ff 100%)", ambient1: "rgba(224,80,160,0.08)", ambient2: "rgba(100,180,240,0.05)" })
    }
  },
  {
    id: "cyber-chrome",
    icon: "⚙️",
    name: "Kim loại tương lai",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#0a0c10", bgSecondary: "#12151c", bgTertiary: "#1c2028", bgCard: "#0e1218", textPrimary: "#e8eaf0", textSecondary: "#8890a8", accent: "#00e5ff" }),
      light: withAccentEffects({ bgPrimary: "#eef0f4", bgSecondary: "#e2e6ec", bgTertiary: "#d0d6e0", bgCard: "#f8f9fc", textPrimary: "#141820", textSecondary: "#566078", accent: "#00b8d0" })
    }
  },
  {
    id: "cyber-violet",
    icon: "💜",
    name: "Tím cơ khí",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#08001a", bgSecondary: "#10002e", bgTertiary: "#180042", bgCard: "#0c0024", textPrimary: "#e8d0ff", textSecondary: "#9060e0", accent: "#bf5af2" }),
      light: withAccentEffects({ bgPrimary: "#f4ecff", bgSecondary: "#ead8ff", bgTertiary: "#dac0ff", bgCard: "#faf6ff", textPrimary: "#1a003c", textSecondary: "#6030a0", accent: "#9040d0" })
    }
  },
  {
    id: "midnight-neon",
    icon: "🌃",
    name: "Neon nửa đêm",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#060610", bgSecondary: "#0c0c1c", bgTertiary: "#141428", bgCard: "#0a0a16", textPrimary: "#e0e8ff", textSecondary: "#6080c0", accent: "#4df0ff" }),
      light: withAccentEffects({ bgPrimary: "#edf0fa", bgSecondary: "#dfe4f4", bgTertiary: "#ccd4ec", bgCard: "#f6f8ff", textPrimary: "#0c1030", textSecondary: "#405080", accent: "#20a8c8" })
    }
  },
  {
    id: "electric-blue",
    icon: "⚡",
    name: "Xanh tia điện",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#020c18", bgSecondary: "#041428", bgTertiary: "#081e38", bgCard: "#031020", textPrimary: "#d0ecff", textSecondary: "#60a8e0", accent: "#00aaff" }),
      light: withAccentEffects({ bgPrimary: "#e8f2ff", bgSecondary: "#d8e8ff", bgTertiary: "#c0d8ff", bgCard: "#f4f9ff", textPrimary: "#021830", textSecondary: "#3068a0", accent: "#0080e0" })
    }
  },
  {
    id: "plasma-red",
    icon: "🔴",
    name: "Đỏ Plasma",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#100204", bgSecondary: "#1c0408", bgTertiary: "#28080e", bgCard: "#140308", textPrimary: "#ffe0e4", textSecondary: "#e06070", accent: "#ff1744" }),
      light: withAccentEffects({ bgPrimary: "#fff0f2", bgSecondary: "#ffe0e4", bgTertiary: "#ffc8ce", bgCard: "#fff8f9", textPrimary: "#3a0810", textSecondary: "#b03040", accent: "#e01535" })
    }
  },
  {
    id: "toxic-green",
    icon: "☢️",
    name: "Xanh lá Neon",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#020c02", bgSecondary: "#041804", bgTertiary: "#082408", bgCard: "#031003", textPrimary: "#d0ffd0", textSecondary: "#50c050", accent: "#39ff14" }),
      light: withAccentEffects({ bgPrimary: "#eafaea", bgSecondary: "#d8f4d8", bgTertiary: "#c0e8c0", bgCard: "#f5fdf5", textPrimary: "#082008", textSecondary: "#308030", accent: "#20c010" })
    }
  },
  {
    id: "holographic",
    icon: "🔮",
    name: "Toàn ảnh",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#08080e", bgSecondary: "#10101a", bgTertiary: "#181828", bgCard: "#0c0c14", textPrimary: "#f0f0ff", textSecondary: "#a0a0e0", accent: "#c084fc" }),
      light: withAccentEffects({ bgPrimary: "#f4f2ff", bgSecondary: "#eae4ff", bgTertiary: "#dcd2ff", bgCard: "#faf8ff", textPrimary: "#181030", textSecondary: "#6858a0", accent: "#9060e0" })
    }
  },
  {
    id: "synthwave",
    icon: "🎹",
    name: "Sóng điện tử (Synthwave)",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#0a001e", bgSecondary: "#12032c", bgTertiary: "#1c063e", bgCard: "#0e0126", textPrimary: "#ffe0ff", textSecondary: "#c080ff", accent: "#f72585", bgGradient: "radial-gradient(ellipse 90% 35% at 50% 100%, rgba(247,37,133,0.24), transparent 60%), radial-gradient(ellipse 60% 40% at 50% 5%, rgba(60,60,200,0.15), transparent 55%), radial-gradient(ellipse 35% 25% at 30% 50%, rgba(247,37,133,0.05), transparent 50%), linear-gradient(170deg, #12032c 0%, #0a001e 55%, #12032c 100%)", ambient1: "rgba(247,37,133,0.2)", ambient2: "rgba(60,60,200,0.12)" }),
      light: withAccentEffects({ bgPrimary: "#faf0ff", bgSecondary: "#f2e0ff", bgTertiary: "#e4ccff", bgCard: "#fef8ff", textPrimary: "#280040", textSecondary: "#8030c0", accent: "#d02070", bgGradient: "radial-gradient(ellipse 80% 40% at 50% 90%, rgba(208,32,112,0.1), transparent 60%), radial-gradient(ellipse 60% 35% at 50% 10%, rgba(60,60,180,0.07), transparent 55%), linear-gradient(170deg, #f2e0ff 0%, #faf0ff 50%, #f2e0ff 100%)", ambient1: "rgba(208,32,112,0.08)", ambient2: "rgba(60,60,180,0.05)" })
    }
  },
  {
    id: "retrowave",
    icon: "📼",
    name: "Sóng hoài cổ (Retrowave)",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#0a0416", bgSecondary: "#14082a", bgTertiary: "#1e0e3e", bgCard: "#0e0620", textPrimary: "#ffd8ff", textSecondary: "#ff80c0", accent: "#ff6ec7" }),
      light: withAccentEffects({ bgPrimary: "#fff0fa", bgSecondary: "#ffe4f5", bgTertiary: "#ffd0eb", bgCard: "#fff8fc", textPrimary: "#300820", textSecondary: "#b04080", accent: "#e050a0" })
    }
  },
  {
    id: "neon-amethyst",
    icon: "💎",
    name: "Thạch anh Neon",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#060012", bgSecondary: "#0e0024", bgTertiary: "#180038", bgCard: "#0a001a", textPrimary: "#e8d0ff", textSecondary: "#a070e0", accent: "#a855f7" }),
      light: withAccentEffects({ bgPrimary: "#f2e8ff", bgSecondary: "#e6d4ff", bgTertiary: "#d6baff", bgCard: "#f9f4ff", textPrimary: "#180030", textSecondary: "#6040a0", accent: "#8040e0" })
    }
  },
  {
    id: "neon-coral",
    icon: "🪸",
    name: "San hô Neon",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#100806", bgSecondary: "#1c100c", bgTertiary: "#281814", bgCard: "#160c0a", textPrimary: "#ffe8e0", textSecondary: "#ff9080", accent: "#ff6b6b" }),
      light: withAccentEffects({ bgPrimary: "#fff2f0", bgSecondary: "#ffe6e2", bgTertiary: "#ffd4ce", bgCard: "#fff9f8", textPrimary: "#3a1410", textSecondary: "#c05040", accent: "#e05050" })
    }
  },
  {
    id: "starlight",
    icon: "⭐",
    name: "Ánh sao",
    variants: {
      dark: withAccentEffects({ bgPrimary: "#080810", bgSecondary: "#10101c", bgTertiary: "#1a1a28", bgCard: "#0c0c16", textPrimary: "#eff0ff", textSecondary: "#a0a8d0", accent: "#ffd700" }),
      light: withAccentEffects({ bgPrimary: "#f4f4fa", bgSecondary: "#eaeaf2", bgTertiary: "#dcdce8", bgCard: "#fafafe", textPrimary: "#141428", textSecondary: "#5a5a80", accent: "#d4a800" })
    }
  }
];
function getThemeFamily(id) {
  return THEME_FAMILIES.find((family) => family.id === id) || null;
}
function resolveThemeMode(themeMode, theme) {
  var _a2;
  if (themeMode === "dark" || themeMode === "light") return themeMode;
  if (themeMode === "auto") {
    const osLight = (_a2 = window.matchMedia) == null ? void 0 : _a2.call(window, "(prefers-color-scheme: light)").matches;
    return osLight ? "light" : "dark";
  }
  return theme === "light" ? "light" : "dark";
}
function getThemeVariant(familyId, mode) {
  const family = getThemeFamily(familyId);
  if (!family) return null;
  return family.variants[mode === "light" ? "light" : "dark"] || null;
}
function setThemeVarsOnElement(el, tokens, accentOverride) {
  if (!el) return;
  const nextAccent = accentOverride || tokens.accent;
  for (const [key, cssVar] of Object.entries(THEME_VAR_MAP)) {
    const value = key === "accent" ? nextAccent : tokens[key];
    if (value) el.style.setProperty(cssVar, value);
  }
  if (accentOverride && accentOverride !== tokens.accent) {
    const rgb = hexToRgb(accentOverride);
    if (rgb) {
      el.style.setProperty("--n4-accent-glow", `rgba(${rgb.r},${rgb.g},${rgb.b},0.25)`);
      el.style.setProperty("--n4-accent-dim", `rgba(${rgb.r},${rgb.g},${rgb.b},0.1)`);
      el.style.setProperty("--n4-on-accent", getReadableTextOnColor(accentOverride));
    }
  } else {
    el.style.setProperty("--n4-accent-glow", tokens.accentGlow || "rgba(77,184,154,0.25)");
    el.style.setProperty("--n4-accent-dim", tokens.accentDim || "rgba(77,184,154,0.1)");
  }
}
function clearThemeVarsOnElement(el) {
  if (!el) return;
  for (const cssVar of Object.values(THEME_VAR_MAP)) el.style.removeProperty(cssVar);
  el.style.removeProperty("--n4-accent-glow");
  el.style.removeProperty("--n4-accent-dim");
}
function applyThemeFamilyToDom(familyId, mode, accentOverride) {
  const tokens = getThemeVariant(familyId, mode);
  const root = document.documentElement;
  const appEl = document.querySelector(".n4-app");
  if (!tokens) {
    clearThemeVarsOnElement(root);
    clearThemeVarsOnElement(appEl);
    root.removeAttribute("data-preset");
    appEl == null ? void 0 : appEl.removeAttribute("data-preset");
    return null;
  }
  root.setAttribute("data-preset", familyId);
  appEl == null ? void 0 : appEl.setAttribute("data-preset", familyId);
  setThemeVarsOnElement(root, tokens, accentOverride);
  setThemeVarsOnElement(appEl, tokens, accentOverride);
  return accentOverride || tokens.accent;
}
function clearThemeFamilyFromDom() {
  const root = document.documentElement;
  const appEl = document.querySelector(".n4-app");
  clearThemeVarsOnElement(root);
  clearThemeVarsOnElement(appEl);
  root.removeAttribute("data-preset");
  appEl == null ? void 0 : appEl.removeAttribute("data-preset");
}
const listeners$1 = /* @__PURE__ */ new Map();
function on(event, cb) {
  if (typeof cb !== "function") return () => {
  };
  if (!listeners$1.has(event)) listeners$1.set(event, /* @__PURE__ */ new Set());
  listeners$1.get(event).add(cb);
  return () => off(event, cb);
}
function off(event, cb) {
  const set = listeners$1.get(event);
  if (set) set.delete(cb);
}
function emit(event, payload) {
  const set = listeners$1.get(event);
  if (!set) return;
  [...set].forEach((fn) => {
    try {
      fn(payload);
    } catch (err) {
      console.warn("[telemetry] listener error for", event, err);
    }
  });
}
function once(event, cb) {
  const unsub = on(event, (payload) => {
    unsub();
    cb(payload);
  });
  return unsub;
}
function clear() {
  listeners$1.clear();
}
const telemetry = { on, off, once, emit, clear };
const TELEMETRY_EVENTS = Object.freeze({
  GAME_SESSION_STARTED: "gameSessionStarted",
  GAME_SESSION_FINISHED: "gameSessionFinished",
  GAME_ANSWER_CORRECT: "gameAnswerCorrect",
  GAME_ANSWER_WRONG: "gameAnswerWrong",
  GAME_COMBO_MILESTONE: "gameComboMilestone",
  GAME_POWERUP_USED: "gamePowerupUsed",
  QUEST_COMPLETED: "questCompleted",
  COSMETIC_EARNED: "cosmeticEarned",
  SRS_REVIEWED: "srsReviewed"
});
if (typeof window !== "undefined") {
  window.__N4_TELEMETRY__ = telemetry;
}
if (typeof window !== "undefined" && !window._zustandLog) window._zustandLog = [];
function nextIsoTimestamp(previousValue) {
  const previousMs = Date.parse(previousValue || "");
  const nextMs = Number.isFinite(previousMs) ? Math.max(Date.now(), previousMs + 1) : Date.now();
  return new Date(nextMs).toISOString();
}
const logger = (storeName, { timestampKey = null, ignoredTimestampKeys = [] } = {}) => (config) => (set, get, api) => {
  api.setStateWithoutPersist = set;
  return config(
    (...args) => {
      var _a2, _b2;
      const prev = get();
      set(...args);
      let next = get();
      if (timestampKey) {
        const ignored = /* @__PURE__ */ new Set([timestampKey, ...ignoredTimestampKeys]);
        const changed2 = Object.keys(next).some((key) => !ignored.has(key) && typeof next[key] !== "function" && next[key] !== prev[key]);
        if (changed2 && next[timestampKey] === prev[timestampKey]) {
          set({ [timestampKey]: nextIsoTimestamp(prev[timestampKey]) });
          next = get();
        }
      }
      if (storeName === "learning" && next.lastEconomyChangeAt !== prev.lastEconomyChangeAt && next.economyRevision === prev.economyRevision) {
        const economyDeviceId = next.economyDeviceId || ((_b2 = (_a2 = globalThis.crypto) == null ? void 0 : _a2.randomUUID) == null ? void 0 : _b2.call(_a2)) || Math.random().toString(36).slice(2);
        set({ economyRevision: Math.max(0, Number(prev.economyRevision) || 0) + 1, economyDeviceId });
        next = get();
      }
      if (typeof window !== "undefined") {
        const log = window._zustandLog;
        for (const key of Object.keys(next)) {
          if (typeof next[key] === "function") continue;
          if (next[key] !== prev[key]) {
            log.push({ t: Date.now(), store: storeName, key, value: next[key] });
            if (log.length > 20) log.shift();
          }
        }
      }
    },
    get,
    api
  );
};
const persistStorage = createJSONStorage(() => ({
  getItem: (key) => safeGetItem(key),
  setItem: (key, value) => {
    if (!safeSetItem(key, value)) {
      telemetry.emit("persistFailure", { key, at: (/* @__PURE__ */ new Date()).toISOString() });
      if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("n4:persist-failure", { detail: { key } }));
    }
  },
  removeItem: (key) => {
    safeRemoveItem(key);
  }
}));
function getIsoDateKey$1(offsetDays = 0) {
  const date = new Date(Date.now() + offsetDays * 864e5);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function buildEconomyLogEntry(type, amount, source, extra) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    amount,
    source,
    at: (/* @__PURE__ */ new Date()).toISOString(),
    ...extra
  };
}
function resolveAccentForThemeChange(currentTheme, nextTheme, themePreset, currentAccent) {
  if (!themePreset) return currentAccent;
  const prevVariant = getThemeVariant(themePreset, currentTheme);
  const nextVariant = getThemeVariant(themePreset, nextTheme);
  if (!(nextVariant == null ? void 0 : nextVariant.accent)) return currentAccent;
  if (!currentAccent || currentAccent === (prevVariant == null ? void 0 : prevVariant.accent)) return nextVariant.accent;
  return currentAccent;
}
const SETTING_ENUMS = Object.freeze({
  theme: Object.freeze(["dark", "light"]),
  density: Object.freeze(["compact", "comfortable", "spacious"]),
  difficulty: Object.freeze(["easy", "normal", "hard", "jlpt"]),
  kanjiFont: Object.freeze(["default", "Noto Serif JP", "serif", "sans-serif"]),
  kanjiWeight: Object.freeze(["400", "500", "700", "900"]),
  cardLayout: Object.freeze(["grid", "list", "compact"]),
  exampleDisplay: Object.freeze(["inline", "block", "hidden"]),
  navPosition: Object.freeze(["top", "bottom"]),
  minnaView: Object.freeze(["default", "compact", "expanded"]),
  fontScale: Object.freeze(["S", "M", "L", "XL"]),
  touchParticleIntensity: Object.freeze(["off", "light", "normal", "full"]),
  gfxTier: Object.freeze(["auto", "low", "medium", "high"])
});
function enumSetting(name, value, fallback) {
  var _a2;
  return ((_a2 = SETTING_ENUMS[name]) == null ? void 0 : _a2.includes(value)) ? value : fallback;
}
function numberSetting(value, { min, max, fallback, integer = false }) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  const bounded = Math.min(max, Math.max(min, parsed));
  return integer ? Math.round(bounded) : bounded;
}
function booleanSetting(value) {
  return value === true || value === 1 || value === "1" || value === "true";
}
const THEME_V6_FAMILY_IDS = Object.freeze([
  "washi",
  "sakura-ink",
  "indigo-study",
  "moss-library",
  "high-contrast"
]);
const DEFAULT_THEME_V6_FAMILY = "washi";
const DEFAULT_THEME_V6_MODE = "dark";
const OLD_THEME_FAMILY_MAP = Object.freeze({
  forest: "moss-library",
  tropical: "moss-library",
  "light-mint": "moss-library",
  "toxic-green": "moss-library",
  sakura: "sakura-ink",
  "light-rose": "sakura-ink",
  "neon-sakura": "sakura-ink",
  "neon-coral": "sakura-ink",
  ember: "sakura-ink",
  ocean: "indigo-study",
  midnight: "indigo-study",
  "light-sky": "indigo-study",
  "electric-blue": "indigo-study",
  amethyst: "indigo-study",
  lavender: "indigo-study",
  galaxy: "indigo-study",
  cyberpunk: "indigo-study",
  "neon-tokyo": "indigo-study",
  aurora: "indigo-study",
  "neon-dragon": "indigo-study",
  "neon-vaporwave": "indigo-study",
  "cyber-chrome": "indigo-study",
  "cyber-violet": "indigo-study",
  "midnight-neon": "indigo-study",
  "plasma-red": "sakura-ink",
  holographic: "indigo-study",
  synthwave: "indigo-study",
  retrowave: "sakura-ink",
  "neon-amethyst": "indigo-study",
  starlight: "washi",
  "light-classic": "washi",
  "light-sand": "washi",
  sunset: "washi",
  autumn: "washi"
});
function normalizeThemeV6Family(value) {
  if (THEME_V6_FAMILY_IDS.includes(value)) return value;
  return OLD_THEME_FAMILY_MAP[value] || DEFAULT_THEME_V6_FAMILY;
}
function resolveThemeV6Mode(themeMode, currentTheme = DEFAULT_THEME_V6_MODE, matchMedia = globalThis.matchMedia) {
  var _a2;
  if (themeMode === "light" || themeMode === "dark") return themeMode;
  if (themeMode === "auto") return ((_a2 = matchMedia == null ? void 0 : matchMedia("(prefers-color-scheme: dark)")) == null ? void 0 : _a2.matches) ? "dark" : "light";
  return currentTheme === "light" ? "light" : DEFAULT_THEME_V6_MODE;
}
function normalizeThemeV6State(state = {}) {
  const mode = ["light", "dark", "auto"].includes(state.themeMode) ? state.themeMode : DEFAULT_THEME_V6_MODE;
  return {
    ...state,
    themeMode: mode,
    theme: resolveThemeV6Mode(mode, state.theme),
    themeFamily: normalizeThemeV6Family(state.themeFamily || state.themePreset)
  };
}
const ENERGY_MODES = Object.freeze({
  PERFORMANCE: "performance",
  QUALITY: "quality"
});
const BEST_PERFORMANCE_SETTINGS = Object.freeze({
  energyMode: ENERGY_MODES.PERFORMANCE,
  reducedMotion: true,
  touchParticleIntensity: "off",
  gfxTier: "low"
});
const BEST_QUALITY_SETTINGS = Object.freeze({
  energyMode: ENERGY_MODES.QUALITY,
  reducedMotion: false,
  touchParticleIntensity: "full",
  gfxTier: "high"
});
function normalizeEnergyMode(mode) {
  return mode === ENERGY_MODES.QUALITY ? ENERGY_MODES.QUALITY : ENERGY_MODES.PERFORMANCE;
}
function getEnergyModeSettings(mode) {
  return normalizeEnergyMode(mode) === ENERGY_MODES.QUALITY ? BEST_QUALITY_SETTINGS : BEST_PERFORMANCE_SETTINGS;
}
function resetAppStoreToDefaults(store) {
  store.setThemeMode("dark");
  store.clearThemePreset();
  if (typeof store.setThemeFamily === "function") store.setThemeFamily("washi");
  store.setTheme("dark");
  store.setAccent("#4db89a");
  if (typeof store.clearCustomAccent === "function") store.clearCustomAccent();
  store.setDensity("comfortable");
  if (!store.showFurigana) store.toggleFurigana();
  if (!store.showRomaji) store.toggleRomaji();
  store.setTtsRate(0.9);
  store.setAutoSpeak(false);
  store.setDifficulty("normal");
  store.setDailyGoal(50);
  store.setNewItemsPerDay(10);
  store.setAutoAdvance(false);
  store.setDefaultQuestionCount(10);
  store.setLessonStart(0);
  store.setLessonCap(0);
  store.setHighContrast(false);
  if (typeof store.setReducedTransparency === "function") store.setReducedTransparency(true);
  if (typeof store.setTrainer3dEnabled === "function") store.setTrainer3dEnabled(false);
  if (typeof store.setHideChanceBasedActivities === "function") store.setHideChanceBasedActivities(true);
  store.setDebugMode(false);
  store.setKanjiFont("default");
  store.setKanjiWeight("900");
  store.setKanjiSize(1.8);
  store.setFzKanji(18);
  store.setFzVocab(15);
  store.setFzGrammar(14);
  store.setCardLayout("grid");
  store.setExampleDisplay("inline");
  store.setNavPosition("bottom");
  store.setGamesCols(3);
  store.setMinnaView("default");
  store.setSoundFX(true);
  store.setSoundCorrect(true);
  store.setSoundWrong(true);
  store.setRadioRateJp(0.8);
  store.setRadioRateVi(1);
  store.setCbProtanopia(false);
  store.setCbDeuteranopia(false);
  store.setCbTritanopia(false);
  store.setDyslexiaFont(false);
  store.setLargeTouchTargets(false);
  store.setSwipeFlashcard(true);
  store.setSwipeClose(false);
  store.setEnergyMode(ENERGY_MODES.PERFORMANCE);
  store.setSidebarStudyTools(true);
  store.setSidebarExtended(true);
  store.setSidebarPhase2(true);
  store.setSidebarPhase3(true);
  store.setFocusMode(false);
  if (typeof store.setAutoBackupEnabled === "function") store.setAutoBackupEnabled(true);
  if (typeof store.setSyncInterval === "function") store.setSyncInterval(2e3);
  store.setFontScale("M");
}
const APP_SETTINGS_TIMESTAMP_EXCLUSIONS = Object.freeze([
  "user",
  "lastSyncAt",
  "settingsQuery",
  "reactMode",
  "studyOsV1",
  "visualRedesignV5",
  "visualRedesignV6"
]);
const useAppStore = create(
  logger("app", {
    timestampKey: "settingsChangedAt",
    ignoredTimestampKeys: APP_SETTINGS_TIMESTAMP_EXCLUSIONS
  })(persist(
    (set, get) => ({
      // UI mode (always React now)
      reactMode: true,
      setReactMode: (v) => set({ reactMode: v }),
      // Study OS v1 feature flag
      studyOsV1: true,
      visualRedesignV5: true,
      visualRedesignV6: true,
      applyServerFeatureFlags: (flags) => set({
        studyOsV1: booleanSetting(flags == null ? void 0 : flags.studyOsV1),
        visualRedesignV5: booleanSetting(flags == null ? void 0 : flags.visualRedesignV5),
        visualRedesignV6: booleanSetting(flags == null ? void 0 : flags.visualRedesignV6)
      }),
      // Focus Mode (Q99) — hides nav, sidebar, XP bar for distraction-free study
      focusMode: false,
      setFocusMode: (v) => set({ focusMode: !!v }),
      // Theme — 'dark' | 'light', themeMode — 'dark' | 'light'
      theme: "dark",
      themeMode: "dark",
      accent: "#4db89a",
      customAccentEnabled: false,
      setThemeMode: (mode) => {
        const valid = enumSetting("theme", mode, "dark");
        set({ themeMode: valid });
        get().setTheme(resolveThemeMode(valid, get().theme));
      },
      setTheme: (t) => {
        const resolved = enumSetting("theme", t, "dark");
        const state = get();
        const nextAccent = resolveAccentForThemeChange(state.theme, resolved, state.themePreset, state.accent);
        set({ theme: resolved, accent: nextAccent });
      },
      setAccent: (c) => {
        if (!c || typeof c !== "string") return;
        let hex = c.replace("#", "");
        if (/^[0-9a-fA-F]{3}$/.test(hex)) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        if (!/^[0-9a-fA-F]{6}$/.test(hex)) return;
        const validated = "#" + hex;
        set({ accent: validated, customAccentEnabled: true });
      },
      clearCustomAccent: () => set({ customAccentEnabled: false }),
      // Theme Presets — one family id with independent dark/light variants
      themePreset: null,
      // active preset id or null
      themeFamily: "washi",
      setThemeFamily: (familyId) => set({ themeFamily: normalizeThemeV6Family(familyId) }),
      applyThemePreset: (preset) => {
        const familyId = typeof preset === "string" ? preset : preset == null ? void 0 : preset.id;
        if (!familyId) return;
        const resolved = resolveThemeMode(get().themeMode, get().theme);
        const variant = getThemeVariant(familyId, resolved);
        const nextAccent = (variant == null ? void 0 : variant.accent) || get().accent;
        set({ theme: resolved, accent: nextAccent, themePreset: familyId, themeFamily: normalizeThemeV6Family(familyId) });
        safeSetItem(STORAGE_KEYS.THEME, resolved);
      },
      clearThemePreset: () => {
        set({ themePreset: null });
        get().setTheme(get().theme);
      },
      // Layout
      density: "comfortable",
      // compact | comfortable | spacious
      showFurigana: true,
      showRomaji: true,
      setDensity: (d) => {
        set({ density: enumSetting("density", d, "comfortable") });
      },
      toggleFurigana: () => {
        const next = !useAppStore.getState().showFurigana;
        set({ showFurigana: next });
        safeSetItem(STORAGE_KEYS.FURIGANA, next ? "1" : "0");
      },
      toggleRomaji: () => {
        const next = !useAppStore.getState().showRomaji;
        set({ showRomaji: next });
        safeSetItem(STORAGE_KEYS.ROMAJI, next ? "1" : "0");
      },
      // TTS
      ttsRate: 0.9,
      autoSpeak: false,
      setTtsRate: (r) => {
        const value = numberSetting(r, { min: 0.5, max: 2, fallback: 0.9 });
        set({ ttsRate: value });
        safeSetItem(STORAGE_KEYS.TTS_RATE, String(value));
      },
      setAutoSpeak: (v) => {
        set({ autoSpeak: v });
        safeSetItem(STORAGE_KEYS.AUTO_TTS, v ? "1" : "0");
      },
      // Auth & Sync
      user: null,
      setUser: (u) => set({ user: u }),
      lastSyncAt: null,
      autoBackupEnabled: true,
      setAutoBackupEnabled: (enabled) => set({ autoBackupEnabled: !!enabled }),
      // Sync interval (milliseconds) — pull-only polling every 2s
      syncInterval: 2e3,
      setSyncInterval: (intervalMs) => {
        set({ syncInterval: numberSetting(intervalMs, { min: 2e3, max: 3e5, fallback: 2e3, integer: true }) });
      },
      // Learning config
      difficulty: "normal",
      // easy | normal | hard | jlpt
      dailyGoal: 50,
      // XP target per day
      newItemsPerDay: 10,
      autoAdvance: false,
      lessonStart: 0,
      // 0 = disabled, 1–50 = FROM lesson
      lessonCap: 0,
      // 0 = disabled (all content), 1–50 = TO lesson
      defaultQuestionCount: 10,
      // default questions per game session (5-50)
      setDifficulty: (d) => set({ difficulty: enumSetting("difficulty", d, "normal") }),
      setDailyGoal: (g) => set({ dailyGoal: numberSetting(g, { min: 5, max: 1e3, fallback: 50, integer: true }) }),
      setNewItemsPerDay: (n) => set({ newItemsPerDay: numberSetting(n, { min: 0, max: 100, fallback: 10, integer: true }) }),
      setAutoAdvance: (v) => set({ autoAdvance: booleanSetting(v) }),
      setDefaultQuestionCount: (n) => set({ defaultQuestionCount: numberSetting(n, { min: 5, max: 50, fallback: 10, integer: true }) }),
      setLessonStart: (n) => {
        const value = numberSetting(n, { min: 0, max: 50, fallback: 0, integer: true });
        set({ lessonStart: value });
        safeSetItem(STORAGE_KEYS.LESSON_START, String(value));
      },
      setLessonCap: (n) => {
        const value = numberSetting(n, { min: 0, max: 50, fallback: 0, integer: true });
        set({ lessonCap: value });
        safeSetItem(STORAGE_KEYS.LESSON_CAP, String(value));
      },
      // Accessibility
      reducedMotion: true,
      reducedTransparency: true,
      highContrast: false,
      debugMode: false,
      setReducedMotion: (v) => set({ reducedMotion: !!v }),
      setReducedTransparency: (v) => set({ reducedTransparency: !!v }),
      setHighContrast: (v) => set({ highContrast: v }),
      setDebugMode: (v) => set({ debugMode: v }),
      // Kanji display
      kanjiFont: "default",
      // default | 'Noto Serif JP', serif | serif | sans-serif
      kanjiWeight: "900",
      // 400 | 500 | 700 | 900
      kanjiSize: 1.8,
      // rem
      setKanjiFont: (v) => {
        const value = enumSetting("kanjiFont", v, "default");
        set({ kanjiFont: value });
        safeSetItem(STORAGE_KEYS.KANJI_FONT, value);
      },
      setKanjiWeight: (v) => {
        const value = enumSetting("kanjiWeight", String(v), "900");
        set({ kanjiWeight: value });
        safeSetItem(STORAGE_KEYS.KANJI_WEIGHT, value);
      },
      setKanjiSize: (v) => {
        const value = numberSetting(v, { min: 1, max: 4, fallback: 1.8 });
        set({ kanjiSize: value });
        safeSetItem(STORAGE_KEYS.KANJI_SIZE, String(value));
      },
      // Per-section font sizes
      fzKanji: 18,
      fzVocab: 15,
      fzGrammar: 14,
      setFzKanji: (v) => {
        const n = parseFloat(v);
        if (isNaN(n) || n < 8 || n > 48) return;
        set({ fzKanji: n });
      },
      setFzVocab: (v) => {
        const n = parseFloat(v);
        if (isNaN(n) || n < 8 || n > 48) return;
        set({ fzVocab: n });
      },
      setFzGrammar: (v) => {
        const n = parseFloat(v);
        if (isNaN(n) || n < 8 || n > 48) return;
        set({ fzGrammar: n });
      },
      // Layout options
      cardLayout: "grid",
      // grid | list | compact
      exampleDisplay: "inline",
      // inline | block | hidden
      navPosition: "bottom",
      // top | bottom
      gamesCols: 3,
      // 2 | 3 | 4
      minnaView: "default",
      // default | compact | expanded
      setCardLayout: (v) => {
        const value = enumSetting("cardLayout", v, "grid");
        set({ cardLayout: value });
        safeSetItem(STORAGE_KEYS.CARD_LAYOUT, value);
      },
      setExampleDisplay: (v) => {
        const value = enumSetting("exampleDisplay", v, "inline");
        set({ exampleDisplay: value });
        safeSetItem(STORAGE_KEYS.EXAMPLE_DISPLAY, value);
      },
      setNavPosition: (v) => {
        const value = enumSetting("navPosition", v, "bottom");
        set({ navPosition: value });
        safeSetItem(STORAGE_KEYS.NAV_POSITION, value);
      },
      setGamesCols: (v) => {
        const value = numberSetting(v, { min: 2, max: 4, fallback: 3, integer: true });
        set({ gamesCols: value });
        safeSetItem(STORAGE_KEYS.GAMES_COLS, String(value));
      },
      setMinnaView: (v) => {
        const value = enumSetting("minnaView", v, "default");
        set({ minnaView: value });
        safeSetItem(STORAGE_KEYS.MINNA_VIEW, value);
      },
      // Audio / Sound
      soundFX: true,
      soundCorrect: true,
      soundWrong: true,
      radioRateJp: 0.8,
      radioRateVi: 1,
      // Font Scale (S/M/L/XL) — iOS-style text size
      fontScale: "M",
      setFontScale: (size) => {
        const valid = enumSetting("fontScale", size, "M");
        set({ fontScale: valid });
      },
      setSoundFX: (v) => set({ soundFX: v }),
      setSoundCorrect: (v) => set({ soundCorrect: v }),
      setSoundWrong: (v) => set({ soundWrong: v }),
      setRadioRateJp: (v) => {
        set({ radioRateJp: v });
      },
      setRadioRateVi: (v) => {
        set({ radioRateVi: v });
      },
      // Accessibility – color blind & special needs
      cbProtanopia: false,
      cbDeuteranopia: false,
      cbTritanopia: false,
      dyslexiaFont: false,
      largeTouchTargets: false,
      swipeFlashcard: true,
      swipeClose: false,
      // Global energy mode: performance is the safe default for phones/tablets.
      energyMode: ENERGY_MODES.PERFORMANCE,
      setEnergyMode: (mode) => {
        const next = getEnergyModeSettings(mode);
        set({ ...next });
      },
      // Touch particle intensity: 'off' | 'light' | 'normal' | 'full'
      touchParticleIntensity: "off",
      setTouchParticleIntensity: (v) => {
        const valid = enumSetting("touchParticleIntensity", v, "off");
        set({ touchParticleIntensity: valid });
      },
      // 3D graphics quality tier: 'auto' | 'low' | 'medium' | 'high'
      // 'auto' = detected from device (mobile → low/medium, desktop → high).
      gfxTier: "low",
      setGfxTier: (v) => {
        const valid = enumSetting("gfxTier", v, "low");
        set({ gfxTier: valid });
      },
      // Heavy/optional surfaces are opt-in in the learning-first default.
      trainer3dEnabled: false,
      setTrainer3dEnabled: (v) => set({ trainer3dEnabled: !!v }),
      hideChanceBasedActivities: true,
      setHideChanceBasedActivities: (v) => set({ hideChanceBasedActivities: !!v }),
      // First-time 3D world coach overlay — once dismissed, never auto-shown again.
      world3dCoachSeen: false,
      setWorld3dCoachSeen: (v) => set({ world3dCoachSeen: !!v }),
      setCbProtanopia: (v) => {
        set({ cbProtanopia: v });
      },
      setCbDeuteranopia: (v) => {
        set({ cbDeuteranopia: v });
      },
      setCbTritanopia: (v) => {
        set({ cbTritanopia: v });
      },
      setDyslexiaFont: (v) => {
        set({ dyslexiaFont: v });
      },
      setLargeTouchTargets: (v) => {
        set({ largeTouchTargets: v });
      },
      setSwipeFlashcard: (v) => set({ swipeFlashcard: v }),
      setSwipeClose: (v) => set({ swipeClose: v }),
      // Sidebar visibility
      sidebarStudyTools: true,
      sidebarExtended: true,
      sidebarPhase2: true,
      sidebarPhase3: true,
      setSidebarStudyTools: (v) => set({ sidebarStudyTools: v }),
      setSidebarExtended: (v) => set({ sidebarExtended: v }),
      setSidebarPhase2: (v) => set({ sidebarPhase2: v }),
      setSidebarPhase3: (v) => set({ sidebarPhase3: v }),
      // Settings search
      settingsQuery: "",
      setSettingsQuery: (q) => set({ settingsQuery: q }),
      // Tracks when settings were last CHANGED (not just synced)
      // Used by sync service to resolve which device's settings are newer
      settingsChangedAt: (/* @__PURE__ */ new Date(0)).toISOString()
    }),
    {
      name: STORAGE_KEYS.APP_STORE,
      storage: persistStorage,
      version: 9,
      migrate: (persisted, version2) => {
        if (version2 < 2 && persisted) {
          const old = ["#00f0ff", "#00c8dd", "#0ff"];
          if (!persisted.accent || old.includes(persisted.accent)) {
            persisted.accent = "#4db89a";
          }
        }
        if (version2 < 3 && persisted) {
          delete persisted.simpleMode;
        }
        if (version2 < 4 && persisted) {
          Object.assign(persisted, BEST_PERFORMANCE_SETTINGS);
        }
        if (version2 < 5 && persisted) {
          delete persisted.user;
        }
        if (version2 < 6 && persisted) {
          if (!persisted.density || persisted.density === "compact") persisted.density = "comfortable";
          if (!persisted.fontScale || persisted.fontScale === "S") persisted.fontScale = "M";
        }
        if (version2 < 7 && persisted) {
          persisted.reducedTransparency = true;
          persisted.trainer3dEnabled = false;
          persisted.hideChanceBasedActivities = true;
        }
        if (version2 < 8 && persisted) {
          persisted.themeFamily = normalizeThemeV6Family(persisted.themeFamily || persisted.themePreset);
        }
        if (version2 < 9 && persisted) {
          persisted.customAccentEnabled = Boolean(persisted.accent && persisted.accent.toLowerCase() !== "#4db89a");
        }
        return persisted;
      },
      partialize: (state) => ({
        reactMode: state.reactMode,
        theme: state.theme,
        themeMode: state.themeMode,
        themePreset: state.themePreset,
        themeFamily: state.themeFamily,
        accent: state.accent,
        customAccentEnabled: state.customAccentEnabled,
        density: state.density,
        showFurigana: state.showFurigana,
        showRomaji: state.showRomaji,
        ttsRate: state.ttsRate,
        autoSpeak: state.autoSpeak,
        difficulty: state.difficulty,
        dailyGoal: state.dailyGoal,
        newItemsPerDay: state.newItemsPerDay,
        autoAdvance: state.autoAdvance,
        lessonStart: state.lessonStart,
        lessonCap: state.lessonCap,
        defaultQuestionCount: state.defaultQuestionCount,
        energyMode: state.energyMode,
        reducedMotion: state.reducedMotion,
        reducedTransparency: state.reducedTransparency,
        touchParticleIntensity: state.touchParticleIntensity,
        gfxTier: state.gfxTier,
        trainer3dEnabled: state.trainer3dEnabled,
        hideChanceBasedActivities: state.hideChanceBasedActivities,
        highContrast: state.highContrast,
        debugMode: state.debugMode,
        // Kanji display
        kanjiFont: state.kanjiFont,
        kanjiWeight: state.kanjiWeight,
        kanjiSize: state.kanjiSize,
        fzKanji: state.fzKanji,
        fzVocab: state.fzVocab,
        fzGrammar: state.fzGrammar,
        // Layout
        cardLayout: state.cardLayout,
        exampleDisplay: state.exampleDisplay,
        navPosition: state.navPosition,
        gamesCols: state.gamesCols,
        minnaView: state.minnaView,
        // Audio
        soundFX: state.soundFX,
        soundCorrect: state.soundCorrect,
        soundWrong: state.soundWrong,
        radioRateJp: state.radioRateJp,
        radioRateVi: state.radioRateVi,
        // Accessibility
        cbProtanopia: state.cbProtanopia,
        cbDeuteranopia: state.cbDeuteranopia,
        cbTritanopia: state.cbTritanopia,
        dyslexiaFont: state.dyslexiaFont,
        largeTouchTargets: state.largeTouchTargets,
        swipeFlashcard: state.swipeFlashcard,
        swipeClose: state.swipeClose,
        // Sidebar
        sidebarStudyTools: state.sidebarStudyTools,
        sidebarExtended: state.sidebarExtended,
        sidebarPhase2: state.sidebarPhase2,
        sidebarPhase3: state.sidebarPhase3,
        // Sync
        lastSyncAt: state.lastSyncAt,
        autoBackupEnabled: state.autoBackupEnabled,
        syncInterval: state.syncInterval,
        fontScale: state.fontScale,
        settingsChangedAt: state.settingsChangedAt
      })
    }
  ))
);
const QUALITY_TIERS = Object.freeze({ LOW: "low", MEDIUM: "medium", HIGH: "high" });
const QualityCtx = reactExports.createContext({ tier: "low", config: LITE_PROFILE });
function resolveTier(gfxTier, energyMode = "performance") {
  var _a2;
  const effective = (_a2 = QUALITY_TIERS[gfxTier == null ? void 0 : gfxTier.toUpperCase()]) != null ? _a2 : pickRecommendedTier(getDeviceProbe());
  if (energyMode !== "quality" && effective === "high") return "medium";
  return effective;
}
function QualityProvider({ children }) {
  const gfxTier = useAppStore((state) => state.gfxTier);
  const energyMode = useAppStore((state) => state.energyMode || "performance");
  const [forcedTier, setForcedTier] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const onDegrade = (event) => {
      if ((event == null ? void 0 : event.detail) === "low" || (event == null ? void 0 : event.detail) === "medium") setForcedTier(event.detail);
    };
    window.addEventListener("n4:gfx-auto-degrade", onDegrade);
    return () => window.removeEventListener("n4:gfx-auto-degrade", onDegrade);
  }, []);
  reactExports.useEffect(() => setForcedTier(null), [gfxTier, energyMode]);
  const value = reactExports.useMemo(() => {
    const tier = energyMode === "quality" && forcedTier ? forcedTier : resolveTier(gfxTier, energyMode);
    const config = createQualityProfile(tier, getDeviceProbe());
    return { tier: config.tier, config };
  }, [energyMode, forcedTier, gfxTier]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QualityCtx.Provider, { value, children });
}
function useQuality() {
  return reactExports.useContext(QualityCtx);
}
function getQualityConfig() {
  try {
    const state = useAppStore.getState();
    return createQualityProfile(resolveTier(state.gfxTier, state.energyMode), getDeviceProbe());
  } catch (e) {
    return LITE_PROFILE;
  }
}
const OverlayContext = reactExports.createContext(null);
function useOverlay() {
  const context = reactExports.useContext(OverlayContext);
  if (!context) {
    throw new Error("useOverlay must be used within an OverlayProvider");
  }
  return context;
}
function OverlayProvider({ children }) {
  const [toasts, setToasts] = reactExports.useState([]);
  const dismissToast = reactExports.useCallback((id) => {
    setToasts(
      (prev) => prev.map((t) => t.id === id ? { ...t, exit: true } : t)
    );
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 400);
  }, []);
  const showToast = reactExports.useCallback(
    (message, type = "info", duration = 5e3) => {
      const id = `${Date.now()}-${Math.random()}`;
      setToasts((prev) => [...prev, { id, message, type, exit: false }]);
      if (duration > 0) {
        setTimeout(() => {
          dismissToast(id);
        }, duration);
      }
      return id;
    },
    [dismissToast]
  );
  const value = reactExports.useMemo(() => ({ showToast, dismissToast }), [showToast, dismissToast]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OverlayContext.Provider, { value, children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-toast-container", "aria-live": "polite", children: toasts.map((toast) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `n4-toast n4-toast-${toast.type} ${toast.exit ? "n4-toast-exit" : "n4-toast-enter"}`,
        role: "status",
        children: toast.message
      },
      toast.id
    )) })
  ] });
}
const CHUNK_RELOAD_KEY = "n4:chunk-reload-attempt";
const CHUNK_RELOAD_WINDOW_MS = 6e4;
function isChunkLoadError(error) {
  const message = String((error == null ? void 0 : error.message) || error || "");
  return /ChunkLoadError|Loading chunk [\w-]+ failed|Failed to fetch dynamically imported module|Importing a module script failed/i.test(message);
}
function claimChunkReload(storage, route, now = Date.now()) {
  if (!storage) return false;
  let previous = null;
  try {
    previous = JSON.parse(storage.getItem(CHUNK_RELOAD_KEY) || "null");
  } catch (e) {
  }
  if ((previous == null ? void 0 : previous.route) === route && now - Number(previous.at || 0) < CHUNK_RELOAD_WINDOW_MS) {
    return false;
  }
  try {
    storage.setItem(CHUNK_RELOAD_KEY, JSON.stringify({ route, at: now }));
    return true;
  } catch (e) {
    return false;
  }
}
function clearChunkReloadClaim(storage) {
  try {
    storage == null ? void 0 : storage.removeItem(CHUNK_RELOAD_KEY);
  } catch (e) {
  }
}
const ROUTE_PATHS = Object.freeze({
  home: "/",
  content: "/content/:type?",
  contentSection: "/content/:type/:section",
  practice: "/practice",
  trainer: "/trainer/:id",
  trainerMode: "/trainer/:id/:mode",
  studySession: "/study-session",
  studyResults: "/study-results",
  chain: "/chains/:chainId",
  dictionary: "/dictionary",
  aiTutor: "/ai-tutor",
  tatoeba: "/tatoeba",
  tools: "/tools",
  settings: "/settings",
  admin: "/admin",
  inbox: "/inbox",
  challenge: "/challenge/:id",
  analytics: "/analytics",
  shop: "/shop",
  inventory: "/inventory",
  missions: "/missions",
  world: "/world",
  draftFeatures: "/draft-features",
  gacha: "/gacha",
  pets: "/pets",
  collections: "/collections",
  studyRoom: "/study-room",
  economyStats: "/economy-stats",
  gambling: "/gambling",
  market: "/market",
  scratchCards: "/scratch-cards",
  treasureHunt: "/treasure-hunt",
  profile: "/profile",
  skillTree: "/skill-tree",
  bounties: "/bounties",
  faction: "/faction",
  village: "/village",
  town: "/town",
  zenDojo: "/zen-dojo",
  sensei: "/sensei",
  shrine: "/shrine",
  onsen: "/onsen",
  manga: "/manga",
  origami: "/origami",
  ramen: "/ramen",
  kendo: "/kendo",
  neko: "/neko",
  tea: "/tea",
  mecha: "/mecha",
  taiko: "/taiko",
  story: "/story"
});
const RESTORABLE_ROUTE_PREFIXES = Object.freeze([...new Set(
  Object.entries(ROUTE_PATHS).filter(([name, path]) => name !== "admin" && path !== "/").map(([, path]) => `/${path.split("/").filter(Boolean)[0]}`)
)]);
const PRIMARY_DESTINATIONS = Object.freeze([
  { id: "world", path: "/", label: "Thế giới Haru", shortLabel: "Haru", icon: "world", shortcut: "1", match: ["/", ...RESTORABLE_ROUTE_PREFIXES] }
]);
function getPrimaryDestination(pathname = "/") {
  return PRIMARY_DESTINATIONS.find((destination) => destination.match.some((prefix) => prefix === "/" ? pathname === "/" : pathname === prefix || pathname.startsWith(`${prefix}/`))) || null;
}
function getRouteBreadcrumbs(pathname = "/") {
  const destination = getPrimaryDestination(pathname);
  const meta = resolveRouteMeta(pathname);
  if (!destination) return meta ? [meta] : [];
  if (!meta || destination.path === pathname) return [{ title: destination.label, path: destination.path }];
  return [{ title: destination.label, path: destination.path }, { title: meta.title, path: pathname }];
}
function getRouteContext(pathname = "/") {
  const destination = getPrimaryDestination(pathname);
  const meta = resolveRouteMeta(pathname);
  const breadcrumbs = getRouteBreadcrumbs(pathname);
  const isLearnRoot = (destination == null ? void 0 : destination.id) === "learn" && /^\/content\/?(?:minna)?$/.test(pathname);
  const isRoot = (destination == null ? void 0 : destination.path) === pathname || isLearnRoot;
  const parent = breadcrumbs.length > 1 ? breadcrumbs[0] : null;
  return {
    destination,
    isRoot,
    title: isRoot ? (destination == null ? void 0 : destination.label) || (meta == null ? void 0 : meta.title) || "JLPT N4" : (meta == null ? void 0 : meta.title) || (destination == null ? void 0 : destination.label) || "JLPT N4",
    backLabel: isRoot ? void 0 : (meta == null ? void 0 : meta.backLabel) || (parent == null ? void 0 : parent.title) || (destination == null ? void 0 : destination.label) || "Hôm nay",
    backPath: isRoot ? void 0 : (meta == null ? void 0 : meta.backPath) || (parent == null ? void 0 : parent.path) || (destination == null ? void 0 : destination.path) || "/"
  };
}
const HOME_BACK = Object.freeze({ backLabel: "Hôm nay", backPath: "/" });
const LEARN_BACK = Object.freeze({ backLabel: "Học", backPath: "/content/minna" });
const PRACTICE_BACK = Object.freeze({ backLabel: "Luyện tập", backPath: "/practice" });
const PROFILE_BACK = Object.freeze({ backLabel: "Hồ sơ", backPath: "/profile" });
const WORLD_BACK = Object.freeze({ backLabel: "Thế giới", backPath: "/world" });
const ROUTE_META = Object.freeze({
  "/": { title: "Hôm nay", isRoot: true, largeTitle: true },
  "/content": { title: "Học", isRoot: true, largeTitle: true },
  "/practice": { title: "Luyện tập", isRoot: true, largeTitle: true },
  "/settings": { title: "Cài đặt", isRoot: true, largeTitle: true },
  "/dictionary": { title: "Tra cứu", ...LEARN_BACK },
  "/world": { title: "Thế giới", isRoot: true, largeTitle: true },
  "/economy": { title: "Thế giới", isRoot: true, largeTitle: true },
  "/analytics": { title: "Phân tích", ...PROFILE_BACK },
  "/inbox": { title: "Sự kiện", ...PROFILE_BACK },
  "/challenge": { title: "Thử thách", backLabel: "Sự kiện", backPath: "/inbox" },
  "/nhk-news": { title: "Tin tức NHK", ...HOME_BACK },
  "/tatoeba": { title: "Tatoeba", ...LEARN_BACK },
  "/tools": { title: "Công cụ", ...PROFILE_BACK },
  "/trainer": { title: "Buổi luyện tập", ...PRACTICE_BACK },
  "/study-session": { title: "Buổi học", ...PRACTICE_BACK },
  "/study-results": { title: "Kết quả học", ...PRACTICE_BACK },
  "/ai-tutor": { title: "AI hỗ trợ học tập", ...PRACTICE_BACK },
  "/admin": { title: "Bảng quản trị", ...HOME_BACK },
  "/zen-dojo": { title: "Thiền đường", ...WORLD_BACK },
  "/sensei": { title: "Phòng hướng dẫn", ...WORLD_BACK },
  "/shrine": { title: "Đền rút quẻ", ...WORLD_BACK },
  "/onsen": { title: "Suối nóng", ...WORLD_BACK },
  "/manga": { title: "Thư viện truyện tranh", ...WORLD_BACK },
  "/origami": { title: "Xưởng gấp giấy", ...WORLD_BACK },
  "/ramen": { title: "Quán mì Nhật", ...WORLD_BACK },
  "/kendo": { title: "Giải kiếm đạo", ...WORLD_BACK },
  "/neko": { title: "Quán mèo", ...WORLD_BACK },
  "/tea": { title: "Trà đạo", ...WORLD_BACK },
  "/mecha": { title: "Gara người máy", ...WORLD_BACK },
  "/taiko": { title: "Trống Nhật", ...WORLD_BACK },
  "/story": { title: "Hành trình truyện", ...WORLD_BACK },
  "/skill-tree": { title: "Cây kỹ năng", ...WORLD_BACK },
  "/bounties": { title: "Tiền thưởng", ...WORLD_BACK },
  "/faction": { title: "Phe phái", ...WORLD_BACK },
  "/village": { title: "Làng", ...WORLD_BACK },
  "/town": { title: "Thị trấn", ...WORLD_BACK },
  "/market": { title: "Chợ", ...WORLD_BACK },
  "/scratch-cards": { title: "Thẻ cào", ...WORLD_BACK },
  "/treasure-hunt": { title: "Kho báu", ...WORLD_BACK },
  "/shop": { title: "Cửa hàng", ...WORLD_BACK },
  "/inventory": { title: "Kho đồ", ...WORLD_BACK },
  "/missions": { title: "Nhiệm vụ", ...WORLD_BACK },
  "/draft-features": { title: "Ý tưởng nháp", ...WORLD_BACK },
  "/gacha": { title: "Quay thưởng", ...WORLD_BACK },
  "/pets": { title: "Thú cưng", ...WORLD_BACK },
  "/collections": { title: "Bộ sưu tập", ...WORLD_BACK },
  "/study-room": { title: "Phòng học", ...WORLD_BACK },
  "/economy-stats": { title: "Thống kê", ...WORLD_BACK },
  "/gambling": { title: "Trò mini", ...WORLD_BACK },
  "/profile": { title: "Hồ sơ", isRoot: true, largeTitle: true }
});
function resolveRouteMeta(pathname) {
  const normalized = pathname === "/" ? "/" : `/${String(pathname || "").split("/").filter(Boolean)[0] || ""}`;
  return ROUTE_META[normalized] || null;
}
function BrandMark$1({ compact = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v6-brand", "aria-label": "Keiko Atelier, JLPT N4 Learning OS", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-brand__seal", lang: "ja", "aria-hidden": "true", children: "稽" }),
    !compact && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v6-brand__copy", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "KEIKO ATELIER" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "JLPT N4 Learning OS" })
    ] })
  ] });
}
const VARIANTS = /* @__PURE__ */ new Set(["primary", "secondary", "quiet", "destructive"]);
function classNames(variant, iconOnly, className) {
  const safeVariant = VARIANTS.has(variant) ? variant : "secondary";
  return ["v6-button", `v6-button--${safeVariant}`, iconOnly && "v6-icon-button", className].filter(Boolean).join(" ");
}
function Button({ variant = "secondary", loading = false, disabled, children, className = "", ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: classNames(variant, false, className), disabled: disabled || loading, "aria-busy": loading || void 0, ...props, children: loading ? "Đang xử lý…" : children });
}
function IconButton({ label, variant = "quiet", children, className = "", ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: classNames(variant, true, className), "aria-label": label, title: label, ...props, children });
}
function PageToolbar$1({ title, backAction, primaryAction, secondaryActions = [] }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "v6-toolbar", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: backAction && /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { label: `Quay lại ${backAction.label}`, onClick: backAction.onClick, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20, strokeWidth: 1.8, "aria-hidden": "true" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-toolbar__title", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v6-toolbar__actions", children: [
      secondaryActions,
      primaryAction
    ] })
  ] });
}
function normalizeDateInput(input) {
  if (typeof input === "string" && /^\d{4}-\d{2}-\d{2}$/.test(input)) {
    const [year, month, day] = input.split("-").map(Number);
    return new Date(Date.UTC(year, month - 1, day));
  }
  const date = input instanceof Date ? new Date(input.getTime()) : new Date(input || Date.now());
  if (Number.isNaN(date.getTime())) return null;
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}
function getIsoWeekStartKey(input = /* @__PURE__ */ new Date()) {
  const date = normalizeDateInput(input);
  if (!date) return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const day = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() - day + 1);
  return date.toISOString().slice(0, 10);
}
function parseEconomySource(source) {
  if (!source || typeof source !== "string") {
    return { key: "unknown", raw: source || "", detail: "" };
  }
  if (source.startsWith("shop:")) {
    return { key: "shop", raw: source, detail: source.slice(5) };
  }
  if (source.startsWith("adopt-")) {
    return { key: "pet-adoption", raw: source, detail: source.slice(6) };
  }
  if (source.startsWith("gacha-")) {
    return { key: source === "gacha-reward" ? "gacha-reward" : "gacha", raw: source, detail: source.slice(6) };
  }
  return { key: source, raw: source, detail: "" };
}
function formatEconomySourceLabel(source, labels = {}, options = {}) {
  const { includeDetail = false, separator = " • " } = options;
  const parsed = parseEconomySource(source);
  const label = labels[parsed.key] || labels[source] || parsed.raw || "unknown";
  if (includeDetail && parsed.detail) {
    return `${label}${separator}${parsed.detail}`;
  }
  return label;
}
function isPurchaseSource(source) {
  const { key } = parseEconomySource(source);
  return key === "shop" || key === "gacha" || key === "pet-adoption" || key === "pet-feed" || key === "room-buy" || key === "vip-purchase";
}
function isQuizCoinSource(source) {
  const { key } = parseEconomySource(source);
  return key === "correct-answer" || key === "game-completion" || key === "first-game-of-day";
}
function isGamblingWinSource(source) {
  const { key } = parseEconomySource(source);
  return key === "bet-win" || key === "wheel-win" || key === "slot-win";
}
function normalizeWeeklyQuestClaims(claims) {
  if (!claims || typeof claims !== "object" || Array.isArray(claims)) return {};
  const normalized = {};
  for (const [outerKey, value] of Object.entries(claims)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      const weekKey3 = /^\d{4}-\d{2}-\d{2}$/.test(outerKey) ? outerKey : getIsoWeekStartKey(outerKey);
      const bucket = {};
      for (const [questId2, claimedAt] of Object.entries(value)) {
        const timestamp2 = Number(claimedAt) || Date.now();
        bucket[questId2] = timestamp2;
      }
      if (Object.keys(bucket).length > 0) {
        normalized[weekKey3] = { ...normalized[weekKey3] || {}, ...bucket };
      }
      continue;
    }
    const questId = outerKey;
    const timestamp = Number(value) || Date.now();
    const weekKey2 = getIsoWeekStartKey(timestamp);
    normalized[weekKey2] = {
      ...normalized[weekKey2] || {},
      [questId]: timestamp
    };
  }
  return normalized;
}
const SET_DEFS = [
  {
    id: "set-sakura",
    name: "Sakura Bloom",
    nameVi: "Anh Đào Mãn Khai",
    description: "A tender set for spring mornings.",
    descriptionVi: "Bộ trang phục dịu dàng cho sáng xuân.",
    pieces: [
      "theme-sakura",
      "avatar-crane",
      "effect-sakura-petals",
      "badge-sakura"
    ],
    bonuses: [
      { pieces: 2, effect: { xpMult: 0.03 }, visual: "aura-sakura-soft" },
      { pieces: 3, effect: { xpMult: 0.05, coinMult: 0.03 }, visual: "aura-sakura-bright" },
      { pieces: 4, effect: { xpMult: 0.08, coinMult: 0.05, dailyMult: 0.05 }, visual: "aura-sakura-full" }
    ]
  },
  {
    id: "set-oni",
    name: "Oni Warrior",
    nameVi: "Chiến Binh Oni",
    description: "For the battle-hardened.",
    descriptionVi: "Dành cho chiến binh dũng mãnh.",
    pieces: [
      "theme-ember",
      "avatar-oni",
      "badge-dragon",
      "effect-lightning"
    ],
    bonuses: [
      { pieces: 2, effect: { coinMult: 0.05 }, visual: "aura-oni-red" },
      { pieces: 3, effect: { coinMult: 0.08, comboXpCap: 2 }, visual: "aura-oni-flame" },
      { pieces: 4, effect: { coinMult: 0.12, comboXpCap: 3, xpMult: 0.05 }, visual: "aura-oni-hellfire" }
    ]
  },
  {
    id: "set-shinto",
    name: "Shinto Pilgrim",
    nameVi: "Hành Hương Shinto",
    description: "Blessed steps along torii paths.",
    descriptionVi: "Bước chân được ban phước dưới torii.",
    pieces: [
      "theme-amethyst",
      "avatar-daruma",
      "badge-scholar"
    ],
    bonuses: [
      { pieces: 2, effect: { dailyMult: 0.05 }, visual: "aura-shinto-soft" },
      { pieces: 3, effect: { dailyMult: 0.1, xpMult: 0.03 }, visual: "aura-shinto-gold" }
    ]
  },
  {
    id: "set-hanami",
    name: "Hanami Picnic",
    nameVi: "Dã Ngoại Hanami",
    description: "Petals, matcha, a breeze.",
    descriptionVi: "Cánh hoa, matcha, cơn gió nhẹ.",
    pieces: [
      "theme-lavender",
      "avatar-maneki",
      "effect-sakura-petals",
      "card-gradient"
    ],
    bonuses: [
      { pieces: 2, effect: { xpMult: 0.03 }, visual: "aura-hanami-pink" },
      { pieces: 3, effect: { xpMult: 0.05, dailyMult: 0.05 }, visual: "aura-hanami-glow" },
      { pieces: 4, effect: { xpMult: 0.08, dailyMult: 0.08, coinMult: 0.03 }, visual: "aura-hanami-full" }
    ]
  },
  {
    id: "set-tsuki",
    name: "Tsuki Night",
    nameVi: "Đêm Tsuki",
    description: "Moonlit studies.",
    descriptionVi: "Học bài dưới ánh trăng.",
    pieces: [
      "theme-midnight",
      "avatar-crane",
      "card-hologram"
    ],
    bonuses: [
      { pieces: 2, effect: { xpMult: 0.05 }, visual: "aura-tsuki-silver" },
      { pieces: 3, effect: { xpMult: 0.1, coinMult: 0.05 }, visual: "aura-tsuki-moon" }
    ]
  },
  {
    id: "set-inu",
    name: "Shiba Inu Crew",
    nameVi: "Biệt Đội Shiba",
    description: "Loyal and cheerful.",
    descriptionVi: "Trung thành và vui vẻ.",
    pieces: [
      "avatar-tanuki",
      "badge-explorer",
      "effect-confetti"
    ],
    bonuses: [
      { pieces: 2, effect: { coinMult: 0.03 }, visual: "aura-inu-soft" },
      { pieces: 3, effect: { coinMult: 0.05, xpMult: 0.03 }, visual: "aura-inu-bright" }
    ]
  },
  {
    id: "set-kitsune",
    name: "Kitsune Trickster",
    nameVi: "Cáo Kitsune Tinh Quái",
    description: "Nine-tailed mystery.",
    descriptionVi: "Chín đuôi huyền bí.",
    pieces: [
      "avatar-kitsune",
      "theme-aurora",
      "effect-rainbow",
      "card-hologram"
    ],
    bonuses: [
      { pieces: 2, effect: { gachaLuck: 0.02 }, visual: "aura-kitsune-blue" },
      { pieces: 3, effect: { gachaLuck: 0.04, coinMult: 0.05 }, visual: "aura-kitsune-nine" },
      { pieces: 4, effect: { gachaLuck: 0.07, coinMult: 0.08, xpMult: 0.05 }, visual: "aura-kitsune-nine-bright" }
    ]
  },
  {
    id: "set-samurai",
    name: "Samurai Order",
    nameVi: "Hội Samurai",
    description: "Bushidō always.",
    descriptionVi: "Bushidō vĩnh cửu.",
    pieces: [
      "badge-samurai",
      "title-samurai",
      "avatar-oni",
      "effect-lightning"
    ],
    bonuses: [
      { pieces: 2, effect: { comboXpCap: 2 }, visual: "aura-samurai-steel" },
      { pieces: 3, effect: { comboXpCap: 3, coinMult: 0.05 }, visual: "aura-samurai-blade" },
      { pieces: 4, effect: { comboXpCap: 4, coinMult: 0.08, xpMult: 0.05 }, visual: "aura-samurai-blade-bright" }
    ]
  },
  {
    id: "set-ramen-ya",
    name: "Ramen-Ya Regular",
    nameVi: "Khách Quen Tiệm Ramen",
    description: "Slurp, warm, repeat.",
    descriptionVi: "Húp, ấm, lặp lại.",
    pieces: [
      "theme-autumn",
      "badge-explorer",
      "effect-confetti"
    ],
    bonuses: [
      { pieces: 2, effect: { coinMult: 0.03 }, visual: "aura-ramen-steam" },
      { pieces: 3, effect: { coinMult: 0.05, dailyMult: 0.05 }, visual: "aura-ramen-steam-bright" }
    ]
  },
  {
    id: "set-kohaku",
    name: "Kohaku Amber",
    nameVi: "Hổ Phách Kohaku",
    description: "Warm amber glow.",
    descriptionVi: "Ánh hổ phách ấm.",
    pieces: [
      "theme-sunset",
      "card-gold",
      "badge-vip"
    ],
    bonuses: [
      { pieces: 2, effect: { shopDiscount: 0.03 }, visual: "aura-kohaku-amber" },
      { pieces: 3, effect: { shopDiscount: 0.05, coinMult: 0.03 }, visual: "aura-kohaku-amber-bright" }
    ]
  },
  {
    id: "set-kawa",
    name: "Kawa River",
    nameVi: "Dòng Sông Kawa",
    description: "Flowing calm.",
    descriptionVi: "Bình yên trôi chảy.",
    pieces: [
      "theme-ocean",
      "avatar-maneki",
      "effect-snow"
    ],
    bonuses: [
      { pieces: 2, effect: { xpMult: 0.03 }, visual: "aura-kawa-blue" },
      { pieces: 3, effect: { xpMult: 0.05, dailyMult: 0.05 }, visual: "aura-kawa-flow" }
    ]
  },
  {
    id: "set-mori",
    name: "Mori Forest",
    nameVi: "Rừng Mori",
    description: "Deep green calm.",
    descriptionVi: "Yên bình xanh thẳm.",
    pieces: [
      "theme-forest",
      "avatar-tanuki",
      "effect-sakura-petals"
    ],
    bonuses: [
      { pieces: 2, effect: { xpMult: 0.03 }, visual: "aura-mori-soft" },
      { pieces: 3, effect: { xpMult: 0.06, coinMult: 0.03 }, visual: "aura-mori-deep" }
    ]
  }
];
function computeSetProgress(state = {}) {
  const equipped = state.equippedCosmetics || {};
  const owned = state.unlockedItems || {};
  const equippedValues = new Set(Object.values(equipped).filter(Boolean));
  const ownedKeys = new Set(Object.keys(owned));
  const perSet = {};
  for (const set of SET_DEFS) {
    const ownedCount = set.pieces.filter((p) => ownedKeys.has(p)).length;
    const equippedCount = set.pieces.filter((p) => equippedValues.has(p)).length;
    const activeBonuses = set.bonuses.filter((b) => equippedCount >= b.pieces);
    perSet[set.id] = {
      ownedCount,
      equippedCount,
      total: set.pieces.length,
      bonuses: set.bonuses,
      activeBonuses
    };
  }
  return perSet;
}
function getSetBonuses(state = {}) {
  const perSet = computeSetProgress(state);
  const delta = { xpMult: 0, coinMult: 0, coinFlat: 0, dailyMult: 0, comboXpCap: 0, gachaLuck: 0, shopDiscount: 0 };
  for (const progress of Object.values(perSet)) {
    for (const active of progress.activeBonuses) {
      for (const [k, v] of Object.entries(active.effect || {})) {
        if (typeof v === "number") delta[k] = (delta[k] || 0) + v;
      }
    }
  }
  return delta;
}
function summarizeSets(state = {}) {
  const perSet = computeSetProgress(state);
  return SET_DEFS.map((set) => ({
    id: set.id,
    name: set.name,
    nameVi: set.nameVi,
    description: set.description,
    descriptionVi: set.descriptionVi,
    pieces: set.pieces,
    ownedCount: perSet[set.id].ownedCount,
    equippedCount: perSet[set.id].equippedCount,
    total: perSet[set.id].total,
    bonuses: set.bonuses,
    activeBonuses: perSet[set.id].activeBonuses
  }));
}
const EQUIPPED_ITEM_EFFECTS = {
  // ── Music (category: music) — study mood buffs ──
  "music-lofi": { xpMult: 0.05, desc: "+5% XP khi học cùng lo-fi." },
  "music-zen": { coinMult: 0.05, desc: "+5% xu khi học cùng Zen Garden." },
  "music-shamisen": { xpMult: 0.03, coinMult: 0.03, desc: "+3% XP và +3% xu." },
  "music-sakura-rain": { dailyMult: 0.1, desc: "+10% thưởng điểm danh hằng ngày." },
  // ── SFX (category: sfx) — combat reaction bonuses ──
  "sfx-retro": { coinMult: 0.03, desc: "+3% xu (âm thanh 8-bit retro)." },
  "sfx-nature": { xpMult: 0.03, desc: "+3% XP (âm thanh thiên nhiên)." },
  "sfx-traditional": { coinMult: 0.05, desc: "+5% xu (nhạc cụ truyền thống)." },
  "sfx-anime": { xpMult: 0.05, desc: "+5% XP (âm hiệu anime)." },
  "sfx-chime": { dailyMult: 0.05, desc: "+5% thưởng điểm danh (chuông gió)." },
  "sfx-taiko": { comboXpCap: 2, desc: "+2 trần XP combo (trống taiko)." },
  // ── Emote (category: emote) — social/celebration bonuses ──
  "emote-kawaii": { coinMult: 0.03, desc: "+3% xu (dễ thương thu hút may mắn)." },
  "emote-sugoi": { xpMult: 0.05, desc: "+5% XP (phấn khích mỗi lần học)." },
  "emote-ganbatte": { xpMult: 0.03, coinMult: 0.03, desc: "+3% XP và +3% xu." },
  "emote-nani": { comboXpCap: 1, desc: "+1 trần XP combo (bất ngờ thú vị)." },
  "emote-yoroshiku": { dailyMult: 0.05, desc: "+5% thưởng điểm danh." },
  "emote-omedetou": { xpMult: 0.05, dailyMult: 0.05, desc: "+5% XP và +5% điểm danh." }
  // ── Charm (Omamori) bonuses already live in economy-config.getCharmBonus — keep there ──
};
const OWNED_ITEM_EFFECTS = {
  // ── Existing skills (some already hard-coded in store; duplicated here for registry completeness) ──
  "skill-coinBoost5": { coinMult: 0.05, desc: "+5% xu vĩnh viễn." },
  "skill-xpBoost5": { xpMult: 0.05, desc: "+5% XP vĩnh viễn." },
  "skill-dailyBonus": { dailyMult: 0.2, desc: "+20% thưởng điểm danh." },
  // ── Newly wired skills ──
  "skill-hintFree": { dailyHintPack: 1, desc: "+1 gói gợi ý miễn phí mỗi lần điểm danh." },
  "skill-comboExtend": { comboXpCap: 3, desc: "+3 trần XP combo (giúp combo cao đáng giá hơn)." },
  "skill-streakBonus10": { dailyMult: 0.1, desc: "+10% thưởng streak điểm danh." },
  "skill-quizAccuracy5": { xpMult: 0.05, desc: "+5% XP từ quiz đúng." },
  "skill-srsBoost": { xpMult: 0.03, desc: "+3% XP tổng (SRS hiệu quả hơn)." },
  "skill-gachaLuckPerm": { gachaLuck: 0.03, desc: "+3% tỷ lệ rare+ trong gacha." },
  "skill-shopDiscount5": { shopDiscount: 0.05, desc: "-5% giá mua trong shop." },
  "skill-bonusCoinQuiz": { coinFlat: 2, desc: "+2 xu cộng thẳng mỗi câu đúng." },
  "skill-autoReview": { xpMult: 0.03, desc: "+3% XP (tự ôn hiệu quả hơn)." },
  "skill-doubleDailyReward": { dailyMult: 1, desc: "Nhân đôi thưởng điểm danh." },
  "skill-extraLife": { comboXpCap: 1, desc: "+1 trần XP combo." },
  "skill-multiCombo": { startingComboBoost: 1, desc: "Combo khởi động từ ×2." },
  // ── Combat Gear — boost 3D world stats permanently ───────────────────
  "gear-iron-sword": { atkBonus: 8, desc: "+8 ATK (Kiếm sắt — vũ khí căn bản chiến binh)." },
  "gear-steel-sword": { atkBonus: 18, desc: "+18 ATK (Kiếm thép — sắc bén hơn rõ rệt)." },
  "gear-katana": { atkBonus: 32, spdBonus: 0.05, desc: "+32 ATK +5% tốc độ (Katana — linh hồn samurai)." },
  "gear-oni-blade": { atkBonus: 55, spdBonus: 0.08, desc: "+55 ATK +8% tốc độ (Dao quỷ Oni — sức chém kinh hoàng)." },
  "gear-leather-armor": { hpBonus: 60, desc: "+60 HP (Áo da — bảo vệ cơ bản)." },
  "gear-chain-mail": { hpBonus: 120, defBonus: 0.04, desc: "+120 HP +4% giảm sát thương (Áo giáp lưới)." },
  "gear-samurai-armor": { hpBonus: 200, defBonus: 0.08, desc: "+200 HP +8% giảm sát thương (Giáp samurai đầy đủ)." },
  "gear-dragon-scale": { hpBonus: 350, defBonus: 0.12, atkBonus: 15, desc: "+350 HP +12% def +15 ATK (Giáp vảy rồng — quý hiếm)." },
  "gear-wind-boots": { spdBonus: 0.12, desc: "+12% tốc độ (Giày gió — nhẹ nhàng như gió)." },
  "gear-thunder-treads": { spdBonus: 0.22, atkBonus: 10, desc: "+22% tốc độ +10 ATK (Giày sấm — lao vào trận nhanh như chớp)." },
  "gear-spirit-talisman": { defBonus: 0.1, hpBonus: 80, desc: "+10% def +80 HP (Bùa hộ mệnh linh thiêng)." },
  "gear-berserker-rune": { atkBonus: 70, defBonus: -0.05, desc: "+70 ATK −5% def (Rune cuồng chiến — hy sinh phòng thủ lấy sức công)." },
  "gear-celestial-orb": { atkBonus: 40, hpBonus: 150, defBonus: 0.06, spdBonus: 0.06, desc: "+40 ATK +150 HP +6% def +6% spd (Ngọc thiên — tổng hợp toàn diện)." },
  // ── Tool unlocks (give a small XP buff instead of implementing the tool UI) ──
  "tool-vocab-highlighter": { xpMult: 0.03, desc: "+3% XP (tô sáng từ vựng giúp nhớ hơn)." },
  "tool-kanji-overlay": { xpMult: 0.03, desc: "+3% XP (lớp phủ kanji tăng tốc nhận diện)." },
  "tool-grammar-checker": { xpMult: 0.03, desc: "+3% XP (thẻ ngữ pháp rõ ràng hơn)." },
  "tool-advanced-analytics": { coinMult: 0.03, desc: "+3% xu (đọc biểu đồ tối ưu hành vi)." },
  "tool-custom-quiz": { xpMult: 0.03, desc: "+3% XP (quiz tùy chỉnh sát mục tiêu)." },
  "tool-study-calendar": { dailyMult: 0.05, desc: "+5% thưởng điểm danh (lập kế hoạch)." },
  "tool-grammar-compare": { xpMult: 0.03, desc: "+3% XP (so sánh ngữ pháp)." },
  "tool-vocab-network": { xpMult: 0.03, desc: "+3% XP (mạng từ vựng)." },
  "tool-streak-recovery": { dailyMult: 0.05, desc: "+5% thưởng điểm danh (phục hồi streak)." },
  "tool-export-pdf": { coinMult: 0.02, desc: "+2% xu (xuất PDF động viên học)." },
  "tool-srs-insights": { xpMult: 0.03, desc: "+3% XP (góc nhìn SRS sâu)." },
  "tool-mistake-drill": { xpMult: 0.05, desc: "+5% XP (luyện lỗi tự động)." },
  "tool-speed-review": { xpMult: 0.03, desc: "+3% XP (ôn nhanh)." },
  "tool-daily-planner": { dailyMult: 0.05, desc: "+5% thưởng điểm danh (kế hoạch ngày)." },
  "tool-weak-point-finder": { xpMult: 0.05, desc: "+5% XP (tìm điểm yếu)." },
  "tool-sentence-builder": { xpMult: 0.03, desc: "+3% XP (ghép câu)." },
  "tool-progress-share": { coinMult: 0.02, desc: "+2% xu (chia sẻ tiến độ)." }
};
const ZERO_BONUSES = Object.freeze({
  xpMult: 0,
  coinMult: 0,
  coinFlat: 0,
  dailyMult: 0,
  comboXpCap: 0,
  startingComboBoost: 0,
  gachaLuck: 0,
  shopDiscount: 0,
  dailyHintPack: 0,
  // ── Combat stat bonuses ──────────────────────────────────────────────
  atkBonus: 0,
  // flat ATK added to base attack
  hpBonus: 0,
  // flat HP added to base max HP
  defBonus: 0,
  // damage reduction fraction (additive, capped at 0.85 combined)
  spdBonus: 0
  // movement speed multiplier additive (e.g. 0.10 = +10%)
});
function addBonuses(target, delta) {
  if (!delta) return;
  for (const key of Object.keys(ZERO_BONUSES)) {
    if (typeof delta[key] === "number") {
      target[key] = (target[key] || 0) + delta[key];
    }
  }
}
function getItemBonuses(state = {}) {
  const result = { ...ZERO_BONUSES };
  const equipped = state.equippedCosmetics || {};
  const owned = state.unlockedItems || {};
  for (const key of Object.values(equipped)) {
    if (key && EQUIPPED_ITEM_EFFECTS[key]) addBonuses(result, EQUIPPED_ITEM_EFFECTS[key]);
  }
  for (const key of Object.keys(owned)) {
    if (OWNED_ITEM_EFFECTS[key]) addBonuses(result, OWNED_ITEM_EFFECTS[key]);
  }
  try {
    addBonuses(result, getSetBonuses(state));
  } catch (e) {
  }
  return result;
}
function getItemEffectDescription(key) {
  var _a2, _b2;
  return ((_a2 = EQUIPPED_ITEM_EFFECTS[key]) == null ? void 0 : _a2.desc) || ((_b2 = OWNED_ITEM_EFFECTS[key]) == null ? void 0 : _b2.desc) || null;
}
const COOKING_BUFF_EFFECTS = Object.freeze({
  "buff.xp.plus10": "+10 % XP trong 5 phút",
  "buff.xp.plus15": "+15 % XP trong 5 phút",
  "buff.coin.plus10": "+10 % xu trong 5 phút",
  "buff.coin.plus15": "+15 % xu trong 5 phút",
  "buff.combo.plus1": "+1 trần XP combo trong 5 phút",
  "buff.hint.plus1": "+1 gợi ý miễn phí tiếp theo",
  "buff.streak.keep": "Giữ chuỗi ngày nếu bỏ 1 ngày học",
  "buff.stamina.plus20": "Hồi thể lực 3D world +20 %",
  "buff.srs.plus5": "Điểm nhớ SRS +5 % cho lần ôn tới",
  "buff.tts.speed": "Tốc độ TTS nới ±10 %",
  "buff.gacha.luck": "+5 % tỉ lệ hiếm cho 1 lần pull",
  "buff.damage.plus15": "+15 % sát thương boss trong 5 phút"
});
function getCookingBuffDescription(effectRef) {
  if (!effectRef) return null;
  if (COOKING_BUFF_EFFECTS[effectRef]) return COOKING_BUFF_EFFECTS[effectRef];
  return String(effectRef);
}
const COIN_PER_CORRECT = 2;
const COMBO_MULTIPLIER_TABLE = [
  { minCombo: 0, multiplier: 1 },
  { minCombo: 5, multiplier: 1.5 },
  { minCombo: 10, multiplier: 2 },
  { minCombo: 15, multiplier: 2.5 },
  { minCombo: 20, multiplier: 3 }
];
function getComboMultiplier(combo) {
  let mult = 1;
  for (const tier of COMBO_MULTIPLIER_TABLE) {
    if (combo >= tier.minCombo) mult = tier.multiplier;
  }
  return mult;
}
const DAILY_COIN_REWARDS = [40, 48, 56, 64, 72, 84, 120];
const ACHIEVEMENT_COIN_TABLE = {
  common: 50,
  rare: 100,
  epic: 200,
  legendary: 500
};
const COIN_SOURCES = {
  gameCompletionMin: 10,
  // min bonus for game completion
  gameCompletionMax: 50,
  // max bonus (scales with score %)
  perfectScore: 25,
  // bonus on top of completion for 100%
  firstGameOfDay: 15,
  // once daily
  studyTimeReward: 5
};
function calcGameCompletionBonus(scorePercent) {
  const { gameCompletionMin, gameCompletionMax, perfectScore } = COIN_SOURCES;
  const base = Math.round(
    gameCompletionMin + (gameCompletionMax - gameCompletionMin) * (scorePercent / 100)
  );
  const bonus = scorePercent >= 100 ? perfectScore : 0;
  return base + bonus;
}
const RARITY_COLORS = {
  common: "var(--n4-text-2, #aaa)",
  rare: "var(--n4-neon-blue, #0af)",
  epic: "var(--n4-neon-purple, #a855f7)",
  legendary: "var(--n4-neon-gold, #fbbf24)"
};
const RARITY_LABELS = {
  common: "Thường",
  rare: "Hiếm",
  epic: "Sử thi",
  legendary: "Huyền thoại"
};
const GACHA_PITY = {
  epicGuarantee: 20,
  // guaranteed Epic+ after this many pulls without one
  legendaryGuarantee: 50
  // guaranteed Legendary after this many pulls without one
};
const WHEEL_CONFIG = {
  costPerSpin: 40,
  maxSpinsPerDay: 5,
  vipBonusSpins: 2,
  // VIP gets +2 daily spins
  luckyCharmBoostPerStack: 0.12
};
const SLOT_CONFIG = {
  costPerSpin: 10,
  maxSpinsPerDay: 10,
  twoMatchPayout: 15,
  fortuneStart: 4,
  fortuneRefundBase: 4,
  fortuneRefundStep: 2,
  fortuneRefundCap: 10,
  jackpotThreshold: 300
};
const VIP_CONFIG = {
  price: 500,
  durationMs: 7 * 24 * 60 * 60 * 1e3,
  // 7 days
  coinMultiplier: 1.25,
  // +25% all coin sources
  petFeedingDiscount: 0.5
  // 50% off pet food
};
const PET_FOOD_OPTIONS = [
  { id: "snack", label: "Bữa nhẹ", cost: 10, xpGain: 5, happinessGain: 10 },
  { id: "meal", label: "Bữa ăn", cost: 20, xpGain: 15, happinessGain: 25 },
  { id: "feast", label: "Đại tiệc", cost: 50, xpGain: 40, happinessGain: 60 }
];
const PET_MOOD_THRESHOLDS = {
  happy: 60,
  // happiness >= 60 = happy (full bonus)
  sleepy: 30
};
const PET_HAPPINESS_DECAY_PER_HOUR = 2;
const PET_MAX_LEVEL = 10;
const PET_XP_PER_LEVEL = 100;
const ROOM_GRID = { cols: 5, rows: 4 };
const ROOM_BONUS_PER_ITEM = 0.5;
const ROOM_MAX_BONUS = 10;
const CHARM_BONUSES = {
  "charm-gakugyo": { type: "xp", value: 3, descVi: "+3% XP mỗi lần học" },
  "charm-kotsu": { type: "boss", value: 5, descVi: "-5% sát thương nhận khi trả lời sai" },
  "charm-shobai": { type: "coin", value: 3, descVi: "+3% coin kiếm được" },
  "charm-kenko": { type: "boss", value: 5, descVi: "+5 HP trong boss fight" },
  "charm-renai": { type: "gacha", value: 5, descVi: "+5% tỷ lệ rare gacha" },
  "charm-gokaku": { type: "xp", value: 2, descVi: "+2% điểm quiz chính xác" },
  "charm-yakuyoke": { type: "gacha", value: 3, descVi: "+3% vận may chung" },
  "charm-anzan": { type: "pet", value: 10, descVi: "+10% pet happiness gain" },
  "charm-kaiun": { type: "wheel", value: 1, descVi: "+1 lượt quay wheel/ngày" },
  "charm-kachimamori": { type: "boss", value: 5, descVi: "+5% sát thương boss" },
  "charm-kinun": { type: "coin", value: 2, descVi: "+2 coin mỗi câu trả lời đúng" },
  "charm-mubyo": { type: "streak", value: 1, descVi: "+1 streak freeze miễn phí/tuần" }
};
function getCharmBonus(unlockKey) {
  return CHARM_BONUSES[unlockKey] || null;
}
const GACHA_PHASE_TIMINGS = {
  portal: 260,
  // ms after pull starts → show portal phase
  burst: 820,
  // ms → show burst phase
  reveal: 1500,
  // ms → show results and start reveal
  revealStart: 1650,
  // ms offset for first card reveal
  revealStep: 380,
  // ms between each card reveal
  completeDelay: 160
  // ms after last card → complete phase
};
const SEASONS = [
  {
    id: "spring",
    name: "🌸 Sakura Festival",
    months: [2, 3, 4],
    // Mar–May (0-indexed)
    bonus: { gachaRare: 50 },
    bonusDesc: "+50% gacha rare rate",
    exclusiveItems: [
      { id: "seasonal-sakura-frame", name: "Sakura Frame", icon: "🌸", price: 200, type: "unlock", unlockKey: "seasonal-sakura-frame", rarity: "rare" },
      { id: "seasonal-hanami-bg", name: "Hanami Background", icon: "🌳", price: 300, type: "unlock", unlockKey: "seasonal-hanami-bg", rarity: "epic" },
      { id: "seasonal-spring-title", name: "Title: 春の子", icon: "🌸", price: 250, type: "unlock", unlockKey: "seasonal-spring-title", rarity: "rare" }
    ]
  },
  {
    id: "summer",
    name: "🎆 Natsu Matsuri",
    months: [5, 6, 7],
    // Jun–Aug
    bonus: { wheelSpins: 2 },
    bonusDesc: "+2 bonus wheel spins",
    exclusiveItems: [
      { id: "seasonal-firework-effect", name: "Firework Burst", icon: "🎆", price: 300, type: "unlock", unlockKey: "seasonal-firework-effect", rarity: "epic" },
      { id: "seasonal-yukata-avatar", name: "Avatar: Yukata", icon: "👘", price: 250, type: "unlock", unlockKey: "seasonal-yukata-avatar", rarity: "rare" },
      { id: "seasonal-summer-title", name: "Title: 夏祭り", icon: "🎆", price: 200, type: "unlock", unlockKey: "seasonal-summer-title", rarity: "rare" }
    ]
  },
  {
    id: "autumn",
    name: "🍂 Momiji Season",
    months: [8, 9, 10],
    // Sep–Nov
    bonus: { coinBonus: 25 },
    bonusDesc: "+25% harvest coin bonus",
    exclusiveItems: [
      { id: "seasonal-momiji-theme", name: "Momiji Theme", icon: "🍁", price: 350, type: "unlock", unlockKey: "seasonal-momiji-theme", rarity: "epic" },
      { id: "seasonal-harvest-badge", name: "Badge: Harvest", icon: "🌾", price: 200, type: "unlock", unlockKey: "seasonal-harvest-badge", rarity: "rare" },
      { id: "seasonal-autumn-title", name: "Title: 紅葉狩り", icon: "🍂", price: 250, type: "unlock", unlockKey: "seasonal-autumn-title", rarity: "rare" }
    ]
  },
  {
    id: "winter",
    name: "❄️ Fuyu Festival",
    months: [11, 0, 1],
    // Dec–Feb
    bonus: { snowEffect: true },
    bonusDesc: "Snow effects + New Year items",
    exclusiveItems: [
      { id: "seasonal-snow-effect", name: "Snow Falling", icon: "❄️", price: 300, type: "unlock", unlockKey: "seasonal-snow-effect", rarity: "epic" },
      { id: "seasonal-kagami-mochi", name: "Kagami Mochi", icon: "🎍", price: 200, type: "unlock", unlockKey: "seasonal-kagami-mochi", rarity: "rare" },
      { id: "seasonal-winter-title", name: "Title: 冬将軍", icon: "❄️", price: 250, type: "unlock", unlockKey: "seasonal-winter-title", rarity: "rare" },
      { id: "seasonal-fukubukuro", name: "福袋 Mega Loot Box", icon: "🎁", price: 800, type: "lootbox", rarity: "legendary" }
    ]
  }
];
function getCurrentSeason() {
  const month = (/* @__PURE__ */ new Date()).getMonth();
  return SEASONS.find((s) => s.months.includes(month)) || SEASONS[0];
}
const _R2K = {
  "kya": "きゃ",
  "kyu": "きゅ",
  "kyo": "きょ",
  "sha": "しゃ",
  "shi": "し",
  "shu": "しゅ",
  "sho": "しょ",
  "cha": "ちゃ",
  "chi": "ち",
  "chu": "ちゅ",
  "cho": "ちょ",
  "tsu": "つ",
  "nya": "にゃ",
  "nyu": "にゅ",
  "nyo": "にょ",
  "hya": "ひゃ",
  "hyu": "ひゅ",
  "hyo": "ひょ",
  "mya": "みゃ",
  "myu": "みゅ",
  "myo": "みょ",
  "rya": "りゃ",
  "ryu": "りゅ",
  "ryo": "りょ",
  "gya": "ぎゃ",
  "gyu": "ぎゅ",
  "gyo": "ぎょ",
  "ja": "じゃ",
  "ju": "じゅ",
  "jo": "じょ",
  "bya": "びゃ",
  "byu": "びゅ",
  "byo": "びょ",
  "pya": "ぴゃ",
  "pyu": "ぴゅ",
  "pyo": "ぴょ",
  "ka": "か",
  "ki": "き",
  "ku": "く",
  "ke": "け",
  "ko": "こ",
  "sa": "さ",
  "si": "し",
  "su": "す",
  "se": "せ",
  "so": "そ",
  "ta": "た",
  "te": "て",
  "to": "と",
  "na": "な",
  "ni": "に",
  "nu": "ぬ",
  "ne": "ね",
  "no": "の",
  "ha": "は",
  "hi": "ひ",
  "fu": "ふ",
  "hu": "ふ",
  "he": "へ",
  "ho": "ほ",
  "ma": "ま",
  "mi": "み",
  "mu": "む",
  "me": "め",
  "mo": "も",
  "ya": "や",
  "yu": "ゆ",
  "yo": "よ",
  "ra": "ら",
  "ri": "り",
  "ru": "る",
  "re": "れ",
  "ro": "ろ",
  "wa": "わ",
  "wi": "ゐ",
  "we": "ゑ",
  "wo": "を",
  "ga": "が",
  "gi": "ぎ",
  "gu": "ぐ",
  "ge": "げ",
  "go": "ご",
  "za": "ざ",
  "ji": "じ",
  "zi": "じ",
  "zu": "ず",
  "ze": "ぜ",
  "zo": "ぞ",
  "da": "だ",
  "di": "ぢ",
  "du": "づ",
  "de": "で",
  "do": "ど",
  "ba": "ば",
  "bi": "び",
  "bu": "ぶ",
  "be": "べ",
  "bo": "ぼ",
  "pa": "ぱ",
  "pi": "ぴ",
  "pu": "ぷ",
  "pe": "ぺ",
  "po": "ぽ",
  "a": "あ",
  "i": "い",
  "u": "う",
  "e": "え",
  "o": "お",
  "n": "ん",
  "nn": "ん"
};
const _K2R_MAP = (() => {
  const m = {};
  const entries = Object.entries(_R2K).sort((a, b) => b[1].length - a[1].length);
  for (const [romaji, kana] of entries) if (!m[kana]) m[kana] = romaji;
  for (const [kana, romaji] of Object.entries(m)) {
    const kata = kana.split("").map((c) => {
      const code = c.charCodeAt(0);
      return code >= 12353 && code <= 12438 ? String.fromCharCode(code + 96) : c;
    }).join("");
    if (kata !== kana && !m[kata]) m[kata] = romaji;
  }
  m["っ"] = "Q";
  m["ッ"] = "Q";
  m["ー"] = "-";
  return m;
})();
const KANA_RE = /^[\u3040-\u30ff\u30fc]+$/;
const HAS_KANA_RE = /[\u3040-\u30ff]/;
function isKanaChar(ch) {
  if (!ch) return false;
  const code = ch.charCodeAt(0);
  return code >= 12352 && code <= 12447 || code >= 12448 && code <= 12543 || ch === "ー";
}
function isKanjiChar$1(ch) {
  if (!ch) return false;
  const code = ch.charCodeAt(0);
  return code >= 19968 && code <= 40879 || code >= 13312 && code <= 19903;
}
function kanaToRomaji(str, opts = {}) {
  if (!str) return "";
  const { keepNonKana = true, macron = false } = opts;
  const HEPBURN = {
    "づ": "zu",
    "ヅ": "zu",
    "ぢ": "ji",
    "ヂ": "ji",
    "ぢゃ": "ja",
    "ぢゅ": "ju",
    "ぢょ": "jo",
    "ヂャ": "ja",
    "ヂュ": "ju",
    "ヂョ": "jo"
  };
  const VOWELS = /* @__PURE__ */ new Set(["a", "i", "u", "e", "o"]);
  const chunks = [];
  let i = 0;
  while (i < str.length) {
    if (i + 1 < str.length) {
      const two = str.substring(i, i + 2);
      const h = HEPBURN[two];
      if (h) {
        chunks.push(_mkChunk(h));
        i += 2;
        continue;
      }
      if (_K2R_MAP[two]) {
        chunks.push(_mkChunk(_K2R_MAP[two]));
        i += 2;
        continue;
      }
    }
    const one = str[i];
    if (HEPBURN[one]) {
      chunks.push(_mkChunk(HEPBURN[one]));
      i++;
      continue;
    }
    if (one === "っ" || one === "ッ") {
      chunks.push({ sokuon: true });
      i++;
      continue;
    }
    if (one === "ー") {
      chunks.push({ choon: true });
      i++;
      continue;
    }
    if (_K2R_MAP[one]) {
      chunks.push(_mkChunk(_K2R_MAP[one]));
      i++;
      continue;
    }
    chunks.push({ raw: one });
    i++;
  }
  const out = [];
  for (let idx = 0; idx < chunks.length; idx++) {
    const c = chunks[idx];
    if (c.sokuon) {
      const next = chunks[idx + 1];
      if (next == null ? void 0 : next.r) {
        const firstChar = next.r[0];
        if (firstChar === "c" && next.r.startsWith("ch")) {
          out.push("t");
        } else {
          out.push(firstChar);
        }
      } else {
        out.push("t");
      }
      continue;
    }
    if (c.choon) {
      const prev = out[out.length - 1] || "";
      const lastCh = prev[prev.length - 1] || "";
      if (VOWELS.has(lastCh)) {
        if (macron) {
          const macronMap = { "a": "ā", "i": "ī", "u": "ū", "e": "ē", "o": "ō" };
          out[out.length - 1] = prev.slice(0, -1) + macronMap[lastCh];
        } else {
          out.push(lastCh);
        }
      } else {
        out.push("-");
      }
      continue;
    }
    if (c.raw) {
      if (keepNonKana) {
        out.push(c.raw);
      } else if (out.length && out[out.length - 1] !== " ") {
        out.push(" ");
      }
      continue;
    }
    if (c.r === "n") {
      const next = chunks[idx + 1];
      if (next == null ? void 0 : next.r) {
        const firstChar = next.r[0];
        if (VOWELS.has(firstChar) || firstChar === "y") {
          out.push("n'");
          continue;
        }
      }
    }
    out.push(c.r);
  }
  const s = out.join("");
  const result = keepNonKana ? s : s.trim().replace(/\s+/g, " ");
  if (result.length > 15 || str.includes(" ") || str.includes("　") || str.includes("★") || str.includes("＿") || str.includes("（")) {
    return cleanRomajiSpacing(result);
  }
  return result;
}
function cleanRomajiSpacing(romaji) {
  if (!romaji) return "";
  let r = romaji;
  const protect = [
    "nihongo",
    "nihon",
    "tomodachi",
    "gohan",
    "watashi",
    "annai",
    "manga",
    "kuni",
    "nani",
    "nanika",
    "heya",
    "kyouto",
    "kyoto",
    "soto",
    "no-to",
    "noto",
    "haha",
    "koibito",
    "eiga",
    "daigaku",
    "ichigatsu",
    "nigatsu",
    "sangatsu",
    "shigatsu",
    "gogatsu",
    "rokugatsu",
    "shichigatsu",
    "hachigatsu",
    "kugatsu",
    "juugatsu",
    "juuichigatsu",
    "juunigatsu"
  ];
  protect.sort((a, b) => b.length - a.length);
  const map = [];
  protect.forEach((w, i) => {
    const regex = new RegExp(w, "gi");
    if (regex.test(r)) {
      const ph = `__W${i}__`;
      r = r.replace(regex, ph);
      map.push({ ph, w });
    }
  });
  r = r.replace(/\s+/g, " ");
  r = r.replace(/node/gi, " node ");
  r = r.replace(/noni/gi, " noni ");
  r = r.replace(/kara/gi, " kara ");
  r = r.replace(/made/gi, " made ");
  r = r.replace(/tame/gi, " tame ");
  r = r.replace(/youni/gi, " youni ");
  r = r.replace(/kudasai/gi, " kudasai ");
  r = r.replace(/desu/gi, " desu ");
  r = r.replace(/deshita/gi, " deshita ");
  r = r.replace(/masu/gi, " masu ");
  r = r.replace(/mashita/gi, " mashita ");
  r = r.replace(/masen/gi, " masen ");
  r = r.replace(/mashou/gi, " mashou ");
  r = r.replace(/nakereba/gi, " nakereba ");
  r = r.replace(/naranai/gi, " naranai ");
  r = r.replace(/narimasen/gi, " narimasen ");
  r = r.replace(/kamoshiremasen/gi, " kamoshiremasen ");
  r = r.replace(/shite/gi, " shite ");
  r = r.replace(/shita/gi, " shita ");
  r = r.replace(/suru/gi, " suru ");
  r = r.replace(/yoku/gi, " yoku ");
  r = r.replace(/(\w)wo/gi, "$1 wo");
  r = r.replace(/wo(\w)/gi, "wo $1");
  const pv = "([aeiou]|__W\\d+__)";
  r = r.replace(new RegExp(`${pv}de`, "gi"), "$1 de ");
  r = r.replace(new RegExp(`${pv}ni`, "gi"), "$1 ni ");
  r = r.replace(new RegExp(`${pv}ga`, "gi"), "$1 ga ");
  r = r.replace(new RegExp(`${pv}to`, "gi"), "$1 to ");
  r = r.replace(new RegExp(`${pv}mo`, "gi"), "$1 mo ");
  r = r.replace(new RegExp(`${pv}no`, "gi"), "$1 no ");
  r = r.replace(new RegExp(`${pv}ha`, "gi"), "$1 wa ");
  r = r.replace(new RegExp(`${pv}wa`, "gi"), "$1 wa ");
  r = r.replace(new RegExp(`${pv}he`, "gi"), "$1 e ");
  for (let idx = map.length - 1; idx >= 0; idx--) {
    const item = map[idx];
    r = r.replace(new RegExp(item.ph, "g"), item.w);
  }
  r = r.replace(/\s+/g, " ");
  r = r.replace(/\s*([。、，．.,?!])\s*/g, "$1 ");
  r = r.replace(/。/g, ".");
  r = r.replace(/、/g, ",");
  return r.trim();
}
function _mkChunk(r) {
  return { r };
}
function parseKanjiReadings(field) {
  if (!field || field === "-") return [];
  let s = String(field).replace(/\s*\([a-zA-Z\s,]+\)\s*$/g, "").trim();
  const parts = s.split(/[、,]/).map((p) => p.trim()).filter(Boolean);
  const out = [];
  for (const p of parts) {
    const m = p.match(/^([^\s()（）]+)(?:[（(]([^）)]+)[）)])?$/);
    if (!m) continue;
    const base = m[1].trim();
    const okurigana = (m[2] || "").trim();
    if (!base || !HAS_KANA_RE.test(base)) continue;
    if (!/^[\u3040-\u30ff\u30fcー]+$/.test(base)) continue;
    const withOkurigana = base + (okurigana && /^[\u3040-\u30ff]+$/.test(okurigana) ? okurigana : "");
    out.push({
      base,
      okurigana: okurigana && /^[\u3040-\u30ff]+$/.test(okurigana) ? okurigana : "",
      withOkurigana,
      romaji: kanaToRomaji(base)
    });
  }
  return out;
}
function preferStandaloneReading({ on: on2, kun }) {
  const kunReadings = parseKanjiReadings(kun);
  const onReadings = parseKanjiReadings(on2);
  const bareKun = kunReadings.find((r) => !r.okurigana);
  if (bareKun) return { ...bareKun, source: "kun" };
  if (onReadings.length > 0) return { ...onReadings[0], source: "on" };
  if (kunReadings.length > 0) return { ...kunReadings[0], source: "kun-base" };
  return null;
}
const MASU_TO_DICT_ROMAJI = [
  [/^kimasu$/, "kuru"],
  [/^shimasu$/, "suru"],
  [/desu$/, "da"],
  // Godan with at least one non-i prefix char.
  [/(?<=.)kimasu$/, "ku"],
  [/(?<=.)gimasu$/, "gu"],
  [/(?<=.)shimasu$/, "su"],
  [/(?<=.)chimasu$/, "tsu"],
  [/(?<=.)nimasu$/, "nu"],
  [/(?<=.)bimasu$/, "bu"],
  [/(?<=.)mimasu$/, "mu"],
  [/(?<=.)rimasu$/, "ru"],
  [/(?<=.)imasu$/, "u"],
  // Ichidan fallback.
  [/masu$/, "ru"]
];
function masuToDictRomaji(romaji) {
  if (!romaji) return romaji;
  const s = String(romaji).trim().toLowerCase();
  if (!s.endsWith("masu")) return romaji;
  for (const [re, replacement] of MASU_TO_DICT_ROMAJI) {
    if (re.test(s)) return s.replace(re, replacement);
  }
  return romaji;
}
const MASU_TO_DICT_KANA = [
  [/^きます$/, "くる"],
  [/^します$/, "する"],
  [/きます$/, "く"],
  [/ぎます$/, "ぐ"],
  [/します$/, "す"],
  [/ちます$/, "つ"],
  [/にます$/, "ぬ"],
  [/びます$/, "ぶ"],
  [/みます$/, "む"],
  [/ります$/, "る"],
  [/います$/, "う"],
  [/ます$/, "る"]
];
function masuToDictKana(kana) {
  if (!kana) return kana;
  const s = String(kana).trim();
  if (!s.endsWith("ます")) return kana;
  for (const [re, replacement] of MASU_TO_DICT_KANA) {
    if (re.test(s)) return s.replace(re, replacement);
  }
  return kana;
}
function alignRomajiToWord(word, romaji) {
  if (!word || !romaji) return romaji || "";
  const hasMasu = /ます$/.test(word);
  const romajiHasMasu = /masu$/i.test(romaji);
  if (romajiHasMasu && !hasMasu) return masuToDictRomaji(romaji);
  return romaji;
}
function readingToRomaji(word, reading, preset) {
  const aligned = alignRomajiToWord(word, preset);
  if (aligned && !/[^\x00-\x7f]/.test(aligned)) return aligned;
  if (reading) return kanaToRomaji(reading);
  if (word && KANA_RE.test(word)) return kanaToRomaji(word);
  return "";
}
function esc(s) {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function bold(s) {
  return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}
function normalizeAnswerText(value) {
  return String(value || "").normalize("NFKC").replace(/\s+/g, " ").trim().toLowerCase();
}
function stableAnswerKey(value) {
  return normalizeAnswerText(value);
}
function equalsAnswerText(a, b) {
  return stableAnswerKey(a) === stableAnswerKey(b);
}
const _isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
function jishoUrl(word) {
  const clean = (word || "").replace(/\s*\(.+?\)\s*$/, "").replace(/\*\*/g, "").trim();
  return "https://jisho.org/search/" + encodeURIComponent(clean);
}
function forvoUrl(word) {
  const clean = (word || "").replace(/\s*\(.+?\)\s*$/, "").replace(/\*\*/g, "").trim();
  return "https://forvo.com/word/" + encodeURIComponent(clean) + "/#ja";
}
function haptic(ms) {
  try {
    var off2 = false;
    try {
      off2 = safeGetItem(STORAGE_KEYS.HAPTIC) === "0";
    } catch (e2) {
    }
    if (!off2 && navigator.vibrate) {
      if (ms === "success") navigator.vibrate(50);
      else if (ms === "error") navigator.vibrate([100, 50, 100]);
      else navigator.vibrate(ms);
    }
  } catch (e) {
  }
}
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
var _sfxCtx = null;
function _getSfxCtx() {
  if (!_sfxCtx) {
    try {
      _sfxCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
    }
  }
  return _sfxCtx;
}
const _kanjiSvgCache = /* @__PURE__ */ new Map();
function fetchKanjiSVG(kanji, signal) {
  const code = kanji.codePointAt(0).toString(16).padStart(5, "0");
  if (_kanjiSvgCache.has(code)) return Promise.resolve(_kanjiSvgCache.get(code));
  const url = "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/" + code + ".svg";
  return fetch(url, signal ? { signal } : {}).then((r) => {
    if (!r.ok) throw new Error(r.status === 404 ? "not-found" : "HTTP " + r.status);
    return r.text();
  }).then((svg) => {
    _kanjiSvgCache.set(code, svg);
    return svg;
  });
}
function playSFX$1(type) {
  try {
    var sfxOff = safeGetItem(STORAGE_KEYS.SOUND_FX) === "off";
    if (sfxOff) return;
    if (type === "correct" && safeGetItem(STORAGE_KEYS.SOUND_CORRECT) === "off") return;
    if (type === "wrong" && safeGetItem(STORAGE_KEYS.SOUND_WRONG) === "off") return;
  } catch (e) {
  }
  var ctx = _getSfxCtx();
  if (!ctx) return;
  var osc = ctx.createOscillator();
  var gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.value = 0.15;
  var t = ctx.currentTime;
  if (type === "correct") {
    osc.frequency.setValueAtTime(523, t);
    osc.frequency.setValueAtTime(659, t + 0.08);
    osc.frequency.setValueAtTime(784, t + 0.16);
    gain.gain.exponentialRampToValueAtTime(1e-3, t + 0.35);
    osc.start(t);
    osc.stop(t + 0.35);
  } else if (type === "wrong") {
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(200, t);
    osc.frequency.setValueAtTime(150, t + 0.15);
    gain.gain.exponentialRampToValueAtTime(1e-3, t + 0.3);
    osc.start(t);
    osc.stop(t + 0.3);
  } else {
    osc.frequency.setValueAtTime(880, t);
    gain.gain.exponentialRampToValueAtTime(1e-3, t + 0.12);
    osc.start(t);
    osc.stop(t + 0.12);
  }
}
function safeCopy(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).catch(function() {
      _fallbackCopy(text);
    });
  }
  _fallbackCopy(text);
  return Promise.resolve();
}
function _fallbackCopy(text) {
  var ta = document.createElement("textarea");
  ta.value = text;
  ta.style.cssText = "position:fixed;left:-9999px;top:-9999px;opacity:0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand("copy");
  } catch (e) {
  }
  ta.remove();
}
function getIsoDateKey(timestamp = Date.now(), offsetDays = 0) {
  return new Date(timestamp + offsetDays * 864e5).toISOString().slice(0, 10);
}
function getDailyRewardOutcome(state = {}, dateContext = {}) {
  var _a2, _b2, _c, _d, _e;
  const now = (_a2 = dateContext.now) != null ? _a2 : Date.now();
  const today = (_b2 = dateContext.today) != null ? _b2 : getIsoDateKey(now);
  const yesterday = (_c = dateContext.yesterday) != null ? _c : getIsoDateKey(now, -1);
  const dayBefore = (_d = dateContext.dayBefore) != null ? _d : getIsoDateKey(now, -2);
  const lastDailyClaimDate = (_e = state.lastDailyClaimDate) != null ? _e : null;
  const dailyClaimStreak = Number(state.dailyClaimStreak) || 0;
  const powerUps = state.powerUps || {};
  const unlockedItems = state.unlockedItems || {};
  if (lastDailyClaimDate === today) return null;
  const isMissedOneDay = lastDailyClaimDate === dayBefore && lastDailyClaimDate !== yesterday;
  const freezeAvailable = (powerUps.streakFreeze || 0) > 0;
  const freezeUsed = isMissedOneDay && freezeAvailable;
  const continuedStreak = lastDailyClaimDate === yesterday || freezeUsed;
  const streak = continuedStreak ? dailyClaimStreak + 1 : 1;
  let coins = DAILY_COIN_REWARDS[Math.min(streak - 1, DAILY_COIN_REWARDS.length - 1)];
  const bonuses = getItemBonuses(state);
  const legacyDailyBonus = unlockedItems["skill-dailyBonus"] ? 0.2 : 0;
  const dailyMult = Math.max(0, bonuses.dailyMult - legacyDailyBonus);
  coins = Math.round(coins * (1 + (unlockedItems["skill-dailyBonus"] ? 0.2 : 0) + dailyMult));
  const powerUp = streak % 7 === 0 ? { id: "streakFreeze", amount: 1 } : streak % 3 === 0 ? { id: "hintPack", amount: 1 } : null;
  const extraHintPack = bonuses.dailyHintPack > 0 ? { id: "hintPack", amount: Math.round(bonuses.dailyHintPack) } : null;
  const outcome = {
    coins,
    streak,
    powerUp,
    freezeUsed
  };
  if (extraHintPack) outcome.extraHintPack = extraHintPack;
  return outcome;
}
function calculateCorrectAnswerCoins(state = {}, options = {}) {
  var _a2, _b2, _c, _d, _e, _f;
  const comboMultiplier = getComboMultiplier(Math.max(0, Number(state.combo) || 0));
  let additiveMultiplier = 1;
  if ((((_a2 = state.powerUps) == null ? void 0 : _a2.doubleCoins) || 0) > 0) additiveMultiplier += 1;
  if ((((_b2 = state.activeEffects) == null ? void 0 : _b2.goldRush) || 0) > 0) additiveMultiplier += 2;
  if ((_c = state.activeEffects) == null ? void 0 : _c.coinMagnet) additiveMultiplier += 0.5;
  if (state.vipExpiry && ((_d = options.now) != null ? _d : Date.now()) < state.vipExpiry) additiveMultiplier += 0.25;
  if (state.activePet && ((_e = state.pets) == null ? void 0 : _e[state.activePet])) {
    const pet = state.pets[state.activePet];
    if ((pet.happiness || 0) >= 50) {
      additiveMultiplier += (pet.coinBonus || 0) / 100;
    }
  }
  const bonuses = getItemBonuses(state);
  additiveMultiplier += bonuses.coinMult;
  const season = options.season;
  if ((season == null ? void 0 : season.id) === "autumn" && ((_f = season.bonus) == null ? void 0 : _f.coinBonus)) {
    additiveMultiplier += season.bonus.coinBonus / 100;
  }
  const baseCoins = Math.round(COIN_PER_CORRECT * comboMultiplier * additiveMultiplier);
  const flatBonus = Math.max(0, Math.round(bonuses.coinFlat || 0));
  return {
    comboMultiplier,
    additiveMultiplier,
    earnedCoins: baseCoins + flatBonus
  };
}
function getGameSessionOutcome(state = {}, session = {}, dateContext = {}) {
  var _a2, _b2, _c;
  const now = (_b2 = (_a2 = dateContext.now) != null ? _a2 : session.at) != null ? _b2 : Date.now();
  const today = (_c = dateContext.today) != null ? _c : getIsoDateKey(now);
  const sessionAt = Math.max(0, Number(session.at) || Number(now) || Date.now());
  const entry = {
    id: session.id || `${session.trainerId || "trainer"}:${sessionAt}:${Math.max(0, Number(session.total) || 0)}`,
    trainerId: session.trainerId,
    mode: session.mode || null,
    score: session.score,
    total: session.total,
    timeMs: session.timeMs,
    date: today,
    at: sessionAt,
    answersAlreadyRecorded: session.answersAlreadyRecorded === true
  };
  const nextGameHistory = [...state.gameHistory || [], entry];
  if (nextGameHistory.length > 50) nextGameHistory.splice(0, nextGameHistory.length - 50);
  const scorePercent = session.total > 0 ? Math.round(session.score / session.total * 100) : 0;
  const completionBonus = session.total >= 5 ? calcGameCompletionBonus(scorePercent) : 0;
  const firstGameBonus = nextGameHistory.filter((game) => game.date === today).length === 1 ? COIN_SOURCES.firstGameOfDay : 0;
  const totalBonus = completionBonus + firstGameBonus;
  const nextLog = totalBonus > 0 ? [
    ...state.economyLog || [],
    ...completionBonus > 0 ? [buildEconomyLogEntry("earn", completionBonus, "game-completion", { trainerId: session.trainerId, scorePercent })] : [],
    ...firstGameBonus > 0 ? [buildEconomyLogEntry("earn", firstGameBonus, "first-game-of-day")] : []
  ] : state.economyLog || [];
  if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
  return {
    entry,
    nextGameHistory,
    scorePercent,
    completionBonus,
    firstGameBonus,
    totalBonus,
    nextLog
  };
}
function getActiveTimeRewardOutcome(state = {}, minutes = 0, dateContext = {}) {
  var _a2, _b2, _c;
  const today = (_b2 = dateContext.today) != null ? _b2 : getIsoDateKey((_a2 = dateContext.now) != null ? _a2 : Date.now());
  const prev = ((_c = state.dailyActiveMinutes) == null ? void 0 : _c[today]) || 0;
  const newTotal = prev + minutes;
  const prevRewardSlots = Math.floor(prev / 10);
  const newRewardSlots = Math.floor(newTotal / 10);
  const earnedSlots = newRewardSlots - prevRewardSlots;
  const studyCoins = earnedSlots > 0 ? earnedSlots * COIN_SOURCES.studyTimeReward : 0;
  const nextLog = studyCoins > 0 ? [...state.economyLog || [], buildEconomyLogEntry("earn", studyCoins, "study-time", { minutes: newTotal })] : state.economyLog || [];
  if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
  return {
    today,
    newTotal,
    studyCoins,
    nextDailyActiveMinutes: {
      ...state.dailyActiveMinutes || {},
      [today]: newTotal
    },
    nextLog
  };
}
const SRS_INTERVALS_MS = Object.freeze([
  0,
  12 * 60 * 60 * 1e3,
  24 * 60 * 60 * 1e3,
  3 * 24 * 60 * 60 * 1e3,
  7 * 24 * 60 * 60 * 1e3,
  14 * 24 * 60 * 60 * 1e3
]);
function finiteNumber(value, fallback = 0) {
  const number2 = Number(value);
  return Number.isFinite(number2) ? number2 : fallback;
}
function normalizeLevel(value) {
  return Math.max(0, Math.min(5, Math.round(finiteNumber(value))));
}
function normalizeSrsEntry(value, now = Date.now()) {
  var _a2, _b2;
  const isObject = value && typeof value === "object" && !Array.isArray(value);
  const source = isObject ? value : { level: value };
  const level = normalizeLevel((_a2 = source.level) != null ? _a2 : source.stability);
  const dueAt = Math.max(0, finiteNumber((_b2 = source.dueAt) != null ? _b2 : source.nextReview, isObject ? now : 0));
  const explicitLastReviewedAt = Math.max(0, finiteNumber(source.lastReviewedAt, 0));
  const intervalMs = Math.max(0, finiteNumber(
    source.intervalMs,
    finiteNumber(source.intervalDays) * 864e5 || (explicitLastReviewedAt && dueAt >= explicitLastReviewedAt ? dueAt - explicitLastReviewedAt : SRS_INTERVALS_MS[level] || 0)
  ));
  const lastReviewedAt = Math.max(0, finiteNumber(
    source.lastReviewedAt,
    dueAt ? Math.max(0, dueAt - intervalMs) : 0
  ));
  const normalized = { level, dueAt, lastReviewedAt, intervalMs };
  const ease = finiteNumber(source.ease, NaN);
  if (Number.isFinite(ease)) normalized.ease = ease;
  return normalized;
}
function normalizeSrsMap(value, now = Date.now()) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => {
      if (typeof entry === "number") return Number.isFinite(entry);
      return Boolean(
        entry && typeof entry === "object" && !Array.isArray(entry) && Number.isFinite(Number(entry.level))
      );
    }).map(([key, entry]) => [key, normalizeSrsEntry(entry, now)])
  );
}
function getSrsLevel(value) {
  return normalizeSrsEntry(value, 0).level;
}
function mergeSrsMaps(localValue, remoteValue, now = Date.now()) {
  const local = normalizeSrsMap(localValue, now);
  const remote = normalizeSrsMap(remoteValue, now);
  const keys = /* @__PURE__ */ new Set([...Object.keys(remote), ...Object.keys(local)]);
  const merged = {};
  for (const key of keys) {
    const left = local[key];
    const right = remote[key];
    if (!left) {
      merged[key] = right;
      continue;
    }
    if (!right) {
      merged[key] = left;
      continue;
    }
    const leftRank = [left.lastReviewedAt, left.dueAt];
    const rightRank = [right.lastReviewedAt, right.dueAt];
    merged[key] = rightRank[0] > leftRank[0] || rightRank[0] === leftRank[0] && rightRank[1] > leftRank[1] ? right : left;
  }
  return merged;
}
function createReviewedSrsEntry(level, now = Date.now(), previous) {
  const safeLevel = normalizeLevel(level);
  const intervalMs = SRS_INTERVALS_MS[safeLevel] || 0;
  const prior = normalizeSrsEntry(previous != null ? previous : safeLevel, now);
  return {
    ...prior,
    level: safeLevel,
    dueAt: now + intervalMs,
    lastReviewedAt: now,
    intervalMs
  };
}
function toLegacySrsEntry(value, now = Date.now()) {
  const entry = normalizeSrsEntry(value, now);
  return {
    level: entry.level,
    nextReview: entry.dueAt,
    lastReviewedAt: entry.lastReviewedAt,
    intervalMs: entry.intervalMs,
    ...entry.ease == null ? {} : { ease: entry.ease }
  };
}
function selectDueSrsEntries(srs2, now = Date.now(), allowedKeys) {
  return Object.entries(normalizeSrsMap(srs2, now)).filter(([key, entry]) => entry.dueAt <= now).map(([key, entry]) => ({ key, ...entry })).sort((left, right) => left.dueAt - right.dueAt || left.level - right.level || left.key.localeCompare(right.key));
}
function countDueSrs(srs2, now = Date.now(), allowedKeys) {
  return selectDueSrsEntries(srs2, now).length;
}
const MAX_DATE_ENTRIES = 365;
function number$1(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}
function whole(value) {
  return Math.max(0, Math.round(number$1(value)));
}
function safeKey(value, fallback = "other") {
  const normalized = String(value || "").trim().slice(0, 80);
  return normalized || fallback;
}
function getStudyDateKey(timestamp = Date.now()) {
  const date = new Date(number$1(timestamp) || Date.now());
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function previousDateKey(dateKey) {
  const date = /* @__PURE__ */ new Date(`${dateKey}T12:00:00`);
  date.setDate(date.getDate() - 1);
  return getStudyDateKey(date.getTime());
}
function normalizeStudyHistoryEntry(value) {
  const source = typeof value === "number" ? { total: value } : value || {};
  return {
    total: whole(source.total),
    correct: whole(source.correct),
    wrong: whole(source.wrong),
    sessions: whole(source.sessions),
    durationMs: whole(source.durationMs),
    firstEventAt: whole(source.firstEventAt),
    lastEventAt: whole(source.lastEventAt)
  };
}
function normalizeCounter(value) {
  const source = value && typeof value === "object" ? value : {};
  return {
    total: whole(source.total),
    correct: whole(source.correct),
    wrong: whole(source.wrong),
    sessions: whole(source.sessions),
    durationMs: whole(source.durationMs),
    lastEventAt: whole(source.lastEventAt)
  };
}
function normalizeStudyActivityEntry(value) {
  const source = value && typeof value === "object" ? value : {};
  const normalizeMap = (raw) => Object.fromEntries(
    Object.entries(raw && typeof raw === "object" ? raw : {}).slice(-40).map(([key, entry]) => [safeKey(key), normalizeCounter(entry)])
  );
  return {
    total: whole(source.total),
    correct: whole(source.correct),
    wrong: whole(source.wrong),
    sessions: whole(source.sessions),
    durationMs: whole(source.durationMs),
    events: whole(source.events),
    firstEventAt: whole(source.firstEventAt),
    lastEventAt: whole(source.lastEventAt),
    trainers: normalizeMap(source.trainers),
    domains: normalizeMap(source.domains),
    sources: Object.fromEntries(
      Object.entries(source.sources && typeof source.sources === "object" ? source.sources : {}).slice(-20).map(([key, count]) => [safeKey(key), whole(count)])
    )
  };
}
function updateCounter(previous, delta, timestamp) {
  const value = normalizeCounter(previous);
  return {
    total: value.total + delta.total,
    correct: value.correct + delta.correct,
    wrong: value.wrong + delta.wrong,
    sessions: value.sessions + delta.sessions,
    durationMs: value.durationMs + delta.durationMs,
    lastEventAt: Math.max(value.lastEventAt, timestamp)
  };
}
function trimDateMap(value) {
  const entries = Object.entries(value || {}).sort(([left], [right]) => right.localeCompare(left));
  return Object.fromEntries(entries.slice(0, MAX_DATE_ENTRIES));
}
function earliestTimestamp(...values) {
  const finite = values.map(whole).filter(Boolean);
  return finite.length ? Math.min(...finite) : 0;
}
function buildDeltas(event = {}) {
  const explicitCorrect = whole(event.correctCount);
  const explicitWrong = whole(event.wrongCount);
  const explicitTotal = whole(event.total);
  const correct = event.correct === true ? Math.max(1, explicitCorrect) : explicitCorrect;
  const wrong = event.correct === false ? Math.max(1, explicitWrong) : explicitWrong;
  const total = Math.max(explicitTotal, correct + wrong);
  return {
    total,
    correct,
    wrong,
    sessions: whole(event.sessions),
    durationMs: whole(event.durationMs)
  };
}
function buildStudyActivityPatch(state = {}, event = {}) {
  var _a2, _b2;
  const timestamp = whole(event.at) || Date.now();
  const dateKey = typeof event.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(event.date) ? event.date : getStudyDateKey(timestamp);
  const delta = buildDeltas(event);
  const source = safeKey(event.source, "learning");
  const trainerId = event.trainerId ? safeKey(event.trainerId) : null;
  const domain = event.domain ? safeKey(event.domain) : null;
  const previousHistory = normalizeStudyHistoryEntry((_a2 = state.studyHistory) == null ? void 0 : _a2[dateKey]);
  const previousActivity = normalizeStudyActivityEntry((_b2 = state.studyActivity) == null ? void 0 : _b2[dateKey]);
  const history = {
    total: previousHistory.total + delta.total,
    correct: previousHistory.correct + delta.correct,
    wrong: previousHistory.wrong + delta.wrong,
    sessions: previousHistory.sessions + delta.sessions,
    durationMs: previousHistory.durationMs + delta.durationMs,
    firstEventAt: previousHistory.firstEventAt || timestamp,
    lastEventAt: Math.max(previousHistory.lastEventAt, timestamp)
  };
  const activity = {
    ...previousActivity,
    total: previousActivity.total + delta.total,
    correct: previousActivity.correct + delta.correct,
    wrong: previousActivity.wrong + delta.wrong,
    sessions: previousActivity.sessions + delta.sessions,
    durationMs: previousActivity.durationMs + delta.durationMs,
    events: previousActivity.events + 1,
    firstEventAt: previousActivity.firstEventAt || timestamp,
    lastEventAt: Math.max(previousActivity.lastEventAt, timestamp),
    sources: {
      ...previousActivity.sources,
      [source]: whole(previousActivity.sources[source]) + 1
    }
  };
  if (trainerId) {
    activity.trainers = {
      ...previousActivity.trainers,
      [trainerId]: updateCounter(previousActivity.trainers[trainerId], delta, timestamp)
    };
  }
  if (domain) {
    activity.domains = {
      ...previousActivity.domains,
      [domain]: updateCounter(previousActivity.domains[domain], delta, timestamp)
    };
  }
  const lastStudyDate = state.lastStudyDate || null;
  const shouldAdvanceDay = !lastStudyDate || dateKey >= lastStudyDate;
  const streak = shouldAdvanceDay && lastStudyDate !== dateKey ? lastStudyDate === previousDateKey(dateKey) ? whole(state.streak) + 1 : 1 : whole(state.streak);
  return {
    studyHistory: trimDateMap({ ...state.studyHistory || {}, [dateKey]: history }),
    studyActivity: trimDateMap({ ...state.studyActivity || {}, [dateKey]: activity }),
    ...shouldAdvanceDay ? { lastStudyDate: dateKey, streak } : {}
  };
}
function mergeCounter(left, right) {
  const local = normalizeCounter(left);
  const cloud = normalizeCounter(right);
  return {
    total: Math.max(local.total, cloud.total),
    correct: Math.max(local.correct, cloud.correct),
    wrong: Math.max(local.wrong, cloud.wrong),
    sessions: Math.max(local.sessions, cloud.sessions),
    durationMs: Math.max(local.durationMs, cloud.durationMs),
    lastEventAt: Math.max(local.lastEventAt, cloud.lastEventAt)
  };
}
function mergeCounterMap(left, right) {
  const local = left && typeof left === "object" ? left : {};
  const cloud = right && typeof right === "object" ? right : {};
  const keys = /* @__PURE__ */ new Set([...Object.keys(local), ...Object.keys(cloud)]);
  return Object.fromEntries([...keys].map((key) => [key, mergeCounter(local[key], cloud[key])]));
}
function mergeStudyHistoryMaps(localValue, cloudValue) {
  const local = localValue && typeof localValue === "object" ? localValue : {};
  const cloud = cloudValue && typeof cloudValue === "object" ? cloudValue : {};
  const dates = /* @__PURE__ */ new Set([...Object.keys(local), ...Object.keys(cloud)]);
  const next = {};
  for (const date of dates) {
    const left = normalizeStudyHistoryEntry(local[date]);
    const right = normalizeStudyHistoryEntry(cloud[date]);
    next[date] = {
      total: Math.max(left.total, right.total),
      correct: Math.max(left.correct, right.correct),
      wrong: Math.max(left.wrong, right.wrong),
      sessions: Math.max(left.sessions, right.sessions),
      durationMs: Math.max(left.durationMs, right.durationMs),
      firstEventAt: earliestTimestamp(left.firstEventAt, right.firstEventAt),
      lastEventAt: Math.max(left.lastEventAt, right.lastEventAt)
    };
  }
  return trimDateMap(next);
}
function mergeStudyActivityMaps(localValue, cloudValue) {
  const local = localValue && typeof localValue === "object" ? localValue : {};
  const cloud = cloudValue && typeof cloudValue === "object" ? cloudValue : {};
  const dates = /* @__PURE__ */ new Set([...Object.keys(local), ...Object.keys(cloud)]);
  const next = {};
  for (const date of dates) {
    const left = normalizeStudyActivityEntry(local[date]);
    const right = normalizeStudyActivityEntry(cloud[date]);
    const sourceKeys = /* @__PURE__ */ new Set([...Object.keys(left.sources), ...Object.keys(right.sources)]);
    next[date] = {
      total: Math.max(left.total, right.total),
      correct: Math.max(left.correct, right.correct),
      wrong: Math.max(left.wrong, right.wrong),
      sessions: Math.max(left.sessions, right.sessions),
      durationMs: Math.max(left.durationMs, right.durationMs),
      events: Math.max(left.events, right.events),
      firstEventAt: earliestTimestamp(left.firstEventAt, right.firstEventAt),
      lastEventAt: Math.max(left.lastEventAt, right.lastEventAt),
      trainers: mergeCounterMap(left.trainers, right.trainers),
      domains: mergeCounterMap(left.domains, right.domains),
      sources: Object.fromEntries([...sourceKeys].map((key) => [key, Math.max(whole(left.sources[key]), whole(right.sources[key]))]))
    };
  }
  return trimDateMap(next);
}
const LEARNING_OWNER_SWITCH_KEY = "n4:learning-owner-switch:v1";
function assertLearningOwnerReady() {
  if (typeof localStorage !== "undefined" && localStorage.getItem(LEARNING_OWNER_SWITCH_KEY)) {
    throw new Error("Learning owner switch is incomplete. Reopen the account to recover.");
  }
}
const createLearningSlice = (setState, get) => {
  const set = (...args) => {
    assertLearningOwnerReady();
    return setState(...args);
  };
  return {
    xp: 0,
    level: 1,
    streak: 0,
    lastStudyDate: null,
    bookmarks: {},
    bookmarkTombstones: {},
    srs: {},
    todayCorrect: 0,
    todayWrong: 0,
    todayXp: 0,
    lastActivityDate: null,
    studyHistory: {},
    studyActivity: {},
    combo: 0,
    maxCombo: 0,
    trainerStats: {},
    lessonProgress: {},
    lastVisitedRoute: null,
    lastAdminXpOverrideTs: null,
    addXp: (amount) => set((s) => {
      var _a2, _b2, _c;
      let boosted = amount;
      const xpBoostStacks = Math.min(((_a2 = s.powerUps) == null ? void 0 : _a2.xpBoost) || 0, 3);
      const rainbowOrbCount = ((_b2 = s.powerUps) == null ? void 0 : _b2.rainbowOrb) || 0;
      if (xpBoostStacks > 0) boosted = Math.round(boosted * (1 + 0.5 * xpBoostStacks));
      if (rainbowOrbCount > 0) boosted = Math.round(boosted * 2);
      const itemBonuses = getItemBonuses(s);
      if (itemBonuses.xpMult > 0) boosted = Math.round(boosted * (1 + itemBonuses.xpMult));
      const charmKey = (_c = s.equippedCosmetics) == null ? void 0 : _c.charm;
      if (charmKey) {
        const cb = getCharmBonus(charmKey);
        if (cb && cb.type === "xp") boosted = Math.round(boosted * (1 + cb.value / 100));
      }
      const newXp = s.xp + boosted;
      const newLevel = Math.floor(newXp / 100) + 1;
      const levelDiff = newLevel - s.level;
      let updates = { xp: newXp, level: newLevel, lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString() };
      const lastBonusLevel = s.lastLevelUpBonusLevel || 0;
      const spLevelDiff = Math.max(0, newLevel - lastBonusLevel);
      if (levelDiff > 0 && spLevelDiff > 0) {
        const bonusCoins = 50 * spLevelDiff;
        const bonusSP = spLevelDiff;
        const nextLog = [...s.economyLog || [], { type: "earn", amount: bonusCoins, source: "level-up", timestamp: Date.now() }];
        if (nextLog.length > 40) nextLog.splice(0, nextLog.length - 40);
        Object.assign(updates, {
          coins: (s.coins || 0) + bonusCoins,
          skillPoints: (s.skillPoints || 0) + bonusSP,
          economyLog: nextLog,
          lastLevelUpBonusLevel: newLevel
        });
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("n4-level-up", { detail: { level: newLevel, levelDiff, bonusCoins } }));
        }
      }
      return updates;
    }),
    recordStudy: (context = {}) => set((state) => buildStudyActivityPatch(state, {
      source: context.source || "study",
      trainerId: context.trainerId,
      domain: context.domain,
      at: context.at
    })),
    toggleBookmark: (key) => set((s) => {
      const bm = { ...s.bookmarks };
      const tombstones = { ...s.bookmarkTombstones };
      if (bm[key]) {
        delete bm[key];
        tombstones[key] = Date.now();
      } else {
        bm[key] = Date.now();
        delete tombstones[key];
      }
      try {
        const legacyBm = safeGetObjectItem(STORAGE_KEYS.BOOKMARKS);
        if (bm[key]) legacyBm[key] = bm[key];
        else delete legacyBm[key];
        safeSetObjectItem(STORAGE_KEYS.BOOKMARKS, legacyBm);
      } catch (e) {
      }
      return { bookmarks: bm, bookmarkTombstones: tombstones };
    }),
    isBookmarked: (key) => !!get().bookmarks[key],
    // Mistakes Journal bridged
    mistakes: {},
    recordMistake: (key) => set((s) => {
      if (!key) return {};
      const mst = { ...s.mistakes || {} };
      const previous = mst[key] || {};
      const count = (previous.count || 0) + 1;
      const now = Date.now();
      mst[key] = {
        ...previous,
        count,
        firstWrongAt: previous.firstWrongAt || now,
        lastWrongAt: now,
        reviewState: "unresolved"
      };
      try {
        const legacyMistakes = safeGetObjectItem(STORAGE_KEYS.MISTAKES) || {};
        const rawWord = key.includes(":") ? key.split(":")[1] : key;
        legacyMistakes[rawWord] = count;
        safeSetObjectItem(STORAGE_KEYS.MISTAKES, legacyMistakes);
      } catch (e) {
      }
      return { mistakes: mst };
    }),
    markMistakeCorrectedInSession: (key) => set((s) => {
      var _a2;
      if (!key || !((_a2 = s.mistakes) == null ? void 0 : _a2[key])) return {};
      const mst = { ...s.mistakes || {} };
      mst[key] = {
        ...mst[key],
        reviewState: "corrected-in-session",
        correctedAt: Date.now()
      };
      return { mistakes: mst };
    }),
    resolveMistake: (key) => set((s) => {
      var _a2;
      if (!key || !((_a2 = s.mistakes) == null ? void 0 : _a2[key])) return {};
      const mst = { ...s.mistakes || {} };
      mst[key] = {
        ...mst[key],
        reviewState: "reviewed-later",
        reviewedAt: Date.now()
      };
      try {
        const legacyMistakes = safeGetObjectItem(STORAGE_KEYS.MISTAKES) || {};
        const rawWord = key.includes(":") ? key.split(":")[1] : key;
        delete legacyMistakes[rawWord];
        safeSetObjectItem(STORAGE_KEYS.MISTAKES, legacyMistakes);
      } catch (e) {
      }
      return { mistakes: mst };
    }),
    disputeMistake: (key) => set((s) => {
      var _a2;
      if (!key || !((_a2 = s.mistakes) == null ? void 0 : _a2[key])) return {};
      const mst = { ...s.mistakes || {} };
      mst[key] = { ...mst[key], reviewState: "disputed", disputedAt: Date.now() };
      return { mistakes: mst };
    }),
    updateSrs: (key, level) => set((s) => {
      var _a2;
      const now = Date.now();
      const entry = createReviewedSrsEntry(level, now, (_a2 = s.srs) == null ? void 0 : _a2[key]);
      try {
        const legacySrs = safeGetObjectItem(STORAGE_KEYS.SRS);
        legacySrs[key] = toLegacySrsEntry(entry, now);
        safeSetObjectItem(STORAGE_KEYS.SRS, legacySrs);
      } catch (e) {
      }
      return { srs: { ...s.srs || {}, [key]: entry } };
    }),
    recordAnswer: (correct, context = {}) => set((s) => {
      const dateKey = getIsoDateKey$1();
      const isNewDay = s.lastActivityDate !== dateKey;
      const baseCorrect = isNewDay ? 0 : s.todayCorrect;
      const baseWrong = isNewDay ? 0 : s.todayWrong;
      const baseTodayXp = isNewDay ? 0 : s.todayXp || 0;
      const basePowerUps = isNewDay ? 0 : s.todayPowerUps || 0;
      const basePetFed = isNewDay ? 0 : s.todayPetFed || 0;
      const baseWheelSpins = isNewDay ? 0 : s.wheelSpinsToday || 0;
      const baseSlotSpins = isNewDay ? 0 : s.slotSpinsToday || 0;
      let earnedCoins = 0;
      let comboMultiplier = 1;
      if (correct) {
        let season = null;
        try {
          season = getCurrentSeason();
        } catch (e) {
        }
        const reward = calculateCorrectAnswerCoins(s, { season, now: Date.now() });
        earnedCoins = Math.max(1e3, reward.earnedCoins);
        comboMultiplier = reward.comboMultiplier;
      } else {
        earnedCoins = 500;
      }
      const earnedXp = correct ? 100 : 50;
      const newXp = (s.xp || 0) + earnedXp;
      const newLevel = Math.floor(newXp / 100) + 1;
      let levelUpUpdates = {};
      if (newLevel > (s.level || 1)) {
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("n4-level-up", { detail: { level: newLevel, levelDiff: newLevel - (s.level || 1) } }));
        }, 50);
        levelUpUpdates = { level: newLevel };
      }
      const nextLog = earnedCoins > 0 ? [...s.economyLog || [], buildEconomyLogEntry("earn", earnedCoins, correct ? "correct-answer" : "wrong-answer", {
        combo: s.combo + (correct ? 1 : 0),
        multiplier: comboMultiplier
      })] : s.economyLog || [];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      let nextActiveEffects = s.activeEffects || {};
      if (correct && nextActiveEffects.goldRush > 0) {
        nextActiveEffects = { ...nextActiveEffects, goldRush: nextActiveEffects.goldRush - 1 };
      }
      return {
        ...buildStudyActivityPatch(s, {
          correct: !!correct,
          source: context.source || "answer",
          trainerId: context.trainerId,
          domain: context.domain,
          at: context.at
        }),
        lastActivityDate: dateKey,
        todayCorrect: baseCorrect + (correct ? 1 : 0),
        todayWrong: baseWrong + (correct ? 0 : 1),
        todayXp: baseTodayXp + earnedXp,
        coins: (s.coins || 0) + earnedCoins,
        xp: newXp,
        ...levelUpUpdates,
        economyLog: nextLog,
        activeEffects: nextActiveEffects,
        todayPowerUps: basePowerUps,
        todayPetFed: basePetFed,
        wheelSpinsToday: baseWheelSpins,
        slotSpinsToday: baseSlotSpins
      };
    }),
    addCombo: () => set((s) => ({
      combo: s.combo + 1,
      maxCombo: Math.max(s.maxCombo, s.combo + 1)
    })),
    resetCombo: () => set({ combo: 0 }),
    recordTrainerPlay: (trainerId, correct, total) => set((s) => {
      const prev = s.trainerStats[trainerId] || { plays: 0, correct: 0, total: 0 };
      return {
        trainerStats: {
          ...s.trainerStats || {},
          [trainerId]: {
            plays: prev.plays + 1,
            correct: prev.correct + correct,
            total: prev.total + total,
            lastPlayed: Date.now()
          }
        }
      };
    }),
    markLessonVocabViewed: (lessonNum) => set((s) => {
      const key = String(lessonNum);
      const prev = s.lessonProgress[key] || {};
      if (prev.vocabViewed) return {};
      return {
        lessonProgress: { ...s.lessonProgress || {}, [key]: { ...prev, vocabViewed: true } },
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    }),
    markLessonGrammarViewed: (lessonNum) => set((s) => {
      const key = String(lessonNum);
      const prev = s.lessonProgress[key] || {};
      if (prev.grammarViewed) return {};
      return {
        lessonProgress: { ...s.lessonProgress || {}, [key]: { ...prev, grammarViewed: true } },
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    }),
    recordLessonQuiz: (lessonNum, score) => set((s) => {
      const key = String(lessonNum);
      const prev = s.lessonProgress[key] || {};
      const best = Math.max(score, prev.quizScore || 0);
      return {
        lessonProgress: { ...s.lessonProgress || {}, [key]: { ...prev, quizScore: best } },
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    }),
    // Keep account/recovery navigation usable while assessment writes are blocked.
    setLastVisitedRoute: (route) => setState({ lastVisitedRoute: route })
  };
};
const POWER_UP_META = {
  hintPack: { name: "Gói gợi ý", label: "Gói gợi ý", icon: "💡", coinValue: 60, desc: "Bổ sung gợi ý khi làm quiz." },
  xpBoost: { name: "Tăng điểm kinh nghiệm", label: "Tăng điểm", icon: "⚡", coinValue: 80, desc: "Tăng XP cho một phiên học." },
  streakFreeze: { name: "Đóng băng chuỗi", label: "Giữ chuỗi", icon: "🧊", coinValue: 100, desc: "Giữ streak nếu lỡ nghỉ 1 ngày." },
  doubleCoins: { name: "Nhân đôi xu", label: "Nhân đôi xu", icon: "🪙", coinValue: 120, desc: "Nhân đôi coin trong một phiên học." },
  timeExtend: { name: "Thêm thời gian", label: "Thêm giờ", icon: "⏰", coinValue: 70, desc: "Thêm thời gian cho các mode có đếm giờ." },
  skipShield: { name: "Khiên bỏ qua", label: "Khiên bỏ qua", icon: "🛡️", coinValue: 90, desc: "Bỏ qua một lỗi mà không đứt mạch." },
  autoHint: { name: "Tự động gợi ý", label: "Tự động gợi ý", icon: "🔮", coinValue: 60, desc: "Hiện gợi ý tự động khi bị kẹt." },
  comboSaver: { name: "Bảo toàn chuỗi", label: "Giữ chuỗi", icon: "🔗", coinValue: 100, desc: "Bảo vệ combo khi trả lời sai một lần." },
  bonusQuestion: { name: "Câu hỏi thưởng", label: "Câu thưởng", icon: "➕", coinValue: 50, desc: "Tặng thêm câu hỏi có thưởng." },
  easyMode: { name: "Chế độ dễ", label: "Chế độ dễ", icon: "🌱", coinValue: 75, desc: "Giảm độ khó của một phiên học." },
  revealOne: { name: "Loại đáp án sai", label: "Mở 1 đáp án", icon: "👁️", coinValue: 80, desc: "Loại bỏ một đáp án sai." },
  slowMotion: { name: "Thời gian chậm", label: "Làm chậm", icon: "🐌", coinValue: 90, desc: "Làm chậm bộ đếm ngược." },
  coinMagnet: { name: "Nam châm xu", label: "Nam châm xu", icon: "🧲", coinValue: 150, desc: "Tăng coin nhận được trong thời gian ngắn." },
  luckyCharm: { name: "Bùa may mắn", label: "Bùa may mắn", icon: "🍀", coinValue: 200, desc: "Tăng nhẹ vận may cho phần thưởng hiếm." },
  goldRush: { name: "Cơn sốt xu", label: "Cơn mưa vàng", icon: "💛", coinValue: 250, desc: "Bơm mạnh coin reward cho chuỗi đúng." },
  jackpot: { name: "Nổ hũ", label: "Nổ hũ", icon: "🎰", coinValue: 320, desc: "Đẩy tỷ lệ trúng phần thưởng top-tier." },
  rerollToken: { name: "Phiếu đổi câu", label: "Phiếu đổi câu", icon: "🔄", coinValue: 100, desc: "Đổi sang câu hỏi hoặc roll khác." },
  focusLens: { name: "Kính tập trung", label: "Kính tập trung", icon: "🔍", coinValue: 120, desc: "Tăng thông tin hỗ trợ khi học." },
  memoryInk: { name: "Mực ghi nhớ", label: "Mực ghi nhớ", icon: "🖊️", coinValue: 130, desc: "Hỗ trợ tăng tốc ghi nhớ / SRS." },
  wisdomScroll: { name: "Cuộn trí tuệ", label: "Cuộn trí tuệ", icon: "📜", coinValue: 180, desc: "Cuộn hỗ trợ XP và học nhanh hơn." },
  phoenixFeather: { name: "Lông vũ Phượng hoàng", label: "Lông phượng", icon: "🪶", coinValue: 300, desc: "Hỗ trợ cứu hoặc hồi streak." },
  rainbowOrb: { name: "Quả cầu cầu vồng", label: "Ngọc cầu vồng", icon: "🌈", coinValue: 600, desc: "Booster hiếm cho lượt gacha chất lượng cao." },
  titanShield: { name: "Khiên Titan", label: "Khiên titan", icon: "🏛️", coinValue: 350, desc: "Lá chắn premium cho economy run." },
  timeCrystal: { name: "Tinh thể thời gian", label: "Tinh thể thời gian", icon: "💠", coinValue: 400, desc: "Đóng băng nhịp thời gian trong quiz." },
  starFragment: { name: "Mảnh sao", label: "Mảnh sao", icon: "⭐", coinValue: 500, desc: "Mảnh vật phẩm premium cực hiếm." },
  doubleXp1h: { name: "Nhân đôi điểm (1 giờ)", label: "Nhân đôi XP (1 giờ)", icon: "⚡", coinValue: 200, desc: "Nhân đôi XP trong 1 giờ." },
  coinBoost1h: { name: "Tăng xu (1 giờ)", label: "Tăng xu (1 giờ)", icon: "💰", coinValue: 200, desc: "Tăng coin trong 1 giờ." },
  streakShield24h: { name: "Lá chắn chuỗi (24 giờ)", label: "Khiên giữ chuỗi (24 giờ)", icon: "🛡️", coinValue: 300, desc: "Bảo vệ streak suốt 24 giờ." },
  srsAccel: { name: "Tăng tốc lặp lại (SRS)", label: "Tăng tốc SRS", icon: "🚀", coinValue: 250, desc: "Tăng tốc các tiến trình học SRS." },
  quizMaster: { name: "Bậc thầy trắc nghiệm", label: "Bậc thầy quiz", icon: "🧠", coinValue: 180, desc: "Booster cho phiên quiz chuyên sâu." },
  speedReader: { name: "Đọc thần tốc", label: "Đọc nhanh", icon: "📖", coinValue: 150, desc: "Tăng reward cho bài đọc tốc độ." },
  gachaLuck: { name: "Tăng may mắn Gacha", label: "Tăng vận gacha", icon: "🍀", coinValue: 350, desc: "Tăng tỷ lệ ra đồ hiếm ở gacha." },
  xpRain: { name: "Mưa điểm", label: "Mưa XP", icon: "🌧️", coinValue: 400, desc: "Bơm XP liên tục trong thời gian ngắn." },
  perfectShield: { name: "Khiên hoàn hảo", label: "Khiên hoàn hảo", icon: "🛡️", coinValue: 150, desc: "Không mất điểm khi trả lời sai 1 lần." },
  kanjiReveal: { name: "Hiện Kanji", label: "Hiện kanji", icon: "👁️", coinValue: 70, desc: "Hiện furigana cho 1 kanji khó trong quiz." },
  grammarHelper: { name: "Trợ lý ngữ pháp", label: "Trợ lý ngữ pháp", icon: "📝", coinValue: 80, desc: "Gợi ý cấu trúc ngữ pháp trong quiz." },
  vocabHint: { name: "Ngữ cảnh từ vựng", label: "Ngữ cảnh từ vựng", icon: "📋", coinValue: 60, desc: "Hiện câu ví dụ cho từ vựng." },
  instantReplay: { name: "Xem lại ngay", label: "Xem lại ngay", icon: "⏪", coinValue: 100, desc: "Xem lại câu hỏi vừa trả lời sai." },
  scoreMultiplier: { name: "Nhân 1.5 điểm", label: "Điểm x1.5", icon: "📊", coinValue: 200, desc: "Nhân 1.5 điểm cho toàn bộ quiz tiếp theo." },
  categoryBan: { name: "Chặn nhóm từ", label: "Chặn nhóm", icon: "🚫", coinValue: 120, desc: "Loại bỏ 1 nhóm từ vựng yếu trong quiz." },
  extraTime30: { name: "Thêm 30 giây", label: "Thêm 30 giây", icon: "⏰", coinValue: 100, desc: "Thêm 30 giây cho quiz thời gian." },
  mysteryBox: { name: "Hộp bí ẩn", label: "Hộp bí ẩn", icon: "❓", coinValue: 200, desc: "Mở hộp bí ẩn để nhận power-up ngẫu nhiên." },
  megaXpBoost: { name: "Siêu tăng điểm", label: "Siêu tăng XP", icon: "💥", coinValue: 300, desc: "Nhân ba XP cho phiên học tiếp theo." },
  ultraCoinBoost: { name: "Siêu tăng xu", label: "Siêu tăng xu", icon: "💰", coinValue: 350, desc: "Nhân ba coin cho chuỗi câu trả lời đúng tiếp theo." },
  resurrectionStone: { name: "Đá hồi sinh", label: "Đá hồi sinh", icon: "💎", coinValue: 500, desc: "Phục hồi đầy đủ trong boss fight." },
  wisdomPotion: { name: "Thuốc trí tuệ", label: "Thuốc trí tuệ", icon: "🧪", coinValue: 180, desc: "Loại bỏ hai đáp án sai trong câu hỏi trắc nghiệm." },
  talismanLuck: { name: "Bùa hộ mệnh Omamori", label: "Bùa omamori", icon: "🎐", coinValue: 250, desc: "Bùa may mắn tăng khả năng nhận bonus." },
  ninjaScroll: { name: "Cuộn thuật Ninja", label: "Cuộn ninja", icon: "📜", coinValue: 400, desc: "Bỏ qua 1 câu hỏi và giữ streak." },
  // ── Japanese Cultural Consumables ──
  omikuji: { name: "Omikuji 御神籤", label: "Omikuji", icon: "🎋", coinValue: 80, desc: "Bốc quẻ may mắn (大吉→凶) — nhận bonus ngẫu nhiên!" },
  daruma: { name: "Daruma 達磨", label: "Daruma", icon: "🔴", coinValue: 200, desc: "Đặt mục tiêu học tập → nhận bonus XP khi hoàn thành." },
  shichifukujin: { name: "七福神 Thất Phúc Thần", label: "Shichifukujin", icon: "🏛️", coinValue: 350, desc: "7 mini-bonus ngẫu nhiên trong 7 ngày liên tiếp." },
  onsenToken: { name: "Onsen 温泉", label: "Onsen", icon: "♨️", coinValue: 120, desc: "Tắm suối nước nóng — ×2 hiệu quả SRS trong 4 giờ." },
  matchaFocus: { name: "Matcha 抹茶", label: "Matcha", icon: "🍵", coinValue: 150, desc: "Uống trà xanh — +30% thưởng thời gian học trong 2 giờ." },
  origamiCrane: { name: "Hạc Giấy 折り紙", label: "Origami Crane", icon: "🦢", coinValue: 100, desc: "+10% tỷ lệ rare cho lần gacha kế tiếp." },
  luckyWave: { name: "Mèo Thần Tài 招き猫", label: "Lucky Wave", icon: "🐱", coinValue: 90, desc: "Nhận thưởng coin ngẫu nhiên (50–200) khi đăng nhập lần sau." },
  shrineBell: { name: "Chuông Đền 神社の鈴", label: "Shrine Bell", icon: "🔔", coinValue: 300, desc: "Rung chuông đền — reset toàn bộ giới hạn daily (wheel, quest)." },
  hanabi: { name: "Pháo Hoa 花火", label: "Hanabi", icon: "🎆", coinValue: 60, desc: "Bật hiệu ứng pháo hoa mừng + chia sẻ thành tích." },
  emaTablet: { name: "Ema 絵馬", label: "Ema", icon: "📝", coinValue: 250, desc: "Viết mục tiêu lên ema — hoàn thành để nhận +50% XP." }
};
const POWER_UP_LABEL_OVERRIDES = {
  xpBoost: "Tăng Điểm",
  xpRain: "Mưa Điểm",
  megaXpBoost: "Siêu tăng Điểm",
  doubleXp1h: "Nhân đôi Điểm (1 giờ)",
  srsAccel: "Tăng tốc lặp lại (SRS)",
  quizMaster: "Bậc thầy trắc nghiệm",
  hintPack: "Gói gợi ý",
  xpBoost: "Tăng Điểm",
  streakFreeze: "Giữ chuỗi",
  doubleCoins: "Nhân đôi xu",
  timeExtend: "Thêm giờ",
  skipShield: "Khiên bỏ qua",
  autoHint: "Gợi ý tự động",
  comboSaver: "Giữ combo",
  bonusQuestion: "Câu thưởng",
  easyMode: "Chế độ dễ",
  revealOne: "Mở 1 đáp án",
  slowMotion: "Làm chậm",
  coinMagnet: "Nam châm xu",
  luckyCharm: "Bùa may mắn",
  goldRush: "Cơn mưa vàng",
  jackpot: "Nổ hũ",
  rerollToken: "Phiếu đổi câu",
  focusLens: "Kính tập trung",
  memoryInk: "Mực ghi nhớ",
  wisdomScroll: "Cuộn trí tuệ",
  phoenixFeather: "Lông phượng",
  rainbowOrb: "Ngọc cầu vồng",
  titanShield: "Khiên titan",
  timeCrystal: "Tinh thể thời gian",
  starFragment: "Mảnh sao",
  doubleXp1h: "Nhân đôi Điểm (1 giờ)",
  coinBoost1h: "Tăng xu (1 giờ)",
  streakShield24h: "Khiên giữ chuỗi (24 giờ)",
  srsAccel: "Tăng tốc SRS",
  quizMaster: "Bậc thầy quiz",
  speedReader: "Đọc nhanh",
  gachaLuck: "Tăng vận gacha",
  xpRain: "Mưa Điểm",
  perfectShield: "Khiên hoàn hảo",
  kanjiReveal: "Hiện kanji",
  grammarHelper: "Trợ lý ngữ pháp",
  vocabHint: "Ngữ cảnh từ vựng",
  instantReplay: "Xem lại ngay",
  scoreMultiplier: "Điểm x1.5",
  categoryBan: "Chặn nhóm",
  extraTime30: "Thêm 30 giây",
  mysteryBox: "Hộp bí ẩn",
  megaXpBoost: "Siêu tăng Điểm",
  ultraCoinBoost: "Siêu tăng xu",
  resurrectionStone: "Đá hồi sinh",
  wisdomPotion: "Thuốc trí tuệ",
  talismanLuck: "Bùa omamori",
  ninjaScroll: "Cuộn ninja",
  omikuji: "Omikuji 御神籤",
  daruma: "Daruma 達磨",
  shichifukujin: "七福神",
  onsenToken: "Onsen 温泉",
  matchaFocus: "Matcha 抹茶",
  origamiCrane: "Hạc giấy 折り紙",
  luckyWave: "招き猫",
  shrineBell: "Chuông đền 神社の鈴",
  hanabi: "Hanabi 花火",
  emaTablet: "Ema 絵馬"
};
function localizePowerUpMeta(powerUpId, meta) {
  if (!meta) return meta;
  const localizedLabel = POWER_UP_LABEL_OVERRIDES[powerUpId] || meta.label || meta.name;
  return {
    ...meta,
    name: localizedLabel,
    label: localizedLabel
  };
}
function getPowerUpMeta(powerUpId) {
  const meta = POWER_UP_META[powerUpId] || {
    name: powerUpId,
    label: powerUpId,
    icon: "⚡",
    desc: "Vật phẩm hỗ trợ"
  };
  return localizePowerUpMeta(powerUpId, meta);
}
const DEFAULT_POWER_UPS = Object.freeze(
  Object.fromEntries(Object.keys(POWER_UP_META).map((powerUpId) => [powerUpId, 0]))
);
const createEconomySlice = (set, get) => ({
  coins: 0,
  todayPowerUps: 0,
  todayPetFed: 0,
  powerUps: { ...DEFAULT_POWER_UPS },
  lastDailyClaimDate: null,
  dailyClaimStreak: 0,
  questClaims: {},
  weeklyQuestClaims: {},
  milestoneClaims: {},
  collectionClaims: {},
  economyLog: [],
  economyRevision: 0,
  economyDeviceId: "",
  resetGeneration: 0,
  domainVersions: { learning: 1, economy: 1, srs: 1, world: 1 },
  vipExpiry: null,
  lastLevelUpBonusLevel: 0,
  lastAdminCoinOverrideTs: null,
  powerUpLevels: {},
  addCoins: (amount, source = "manual") => set((s) => {
    var _a2;
    let value = Math.max(0, Math.round(Number(amount) || 0));
    if (!value) return {};
    const charmKey = (_a2 = s.equippedCosmetics) == null ? void 0 : _a2.charm;
    if (charmKey) {
      const cb = getCharmBonus(charmKey);
      if (cb && cb.type === "coin") value = Math.round(value * (1 + cb.value / 100));
    }
    const nextLog = [...s.economyLog || [], buildEconomyLogEntry("earn", value, source)];
    if (nextLog.length > 40) nextLog.splice(0, nextLog.length - 40);
    return { coins: (s.coins || 0) + value, economyLog: nextLog, lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString() };
  }),
  earnCoins: (amount, source = "reward") => get().addCoins(amount, source),
  spendCoins: (amount, source = "shop") => {
    const value = Math.max(0, Math.round(Number(amount) || 0));
    if (!value) return false;
    let success = false;
    set((s) => {
      if (s.coins < value) return {};
      success = true;
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("spend", value, source)];
      if (nextLog.length > 40) nextLog.splice(0, nextLog.length - 40);
      return { coins: s.coins - value, economyLog: nextLog };
    });
    return success;
  },
  grantPowerUp: (powerUpId, amount = 1, source = "reward") => set((s) => {
    if (!powerUpId || typeof powerUpId !== "string" || !Object.prototype.hasOwnProperty.call(POWER_UP_META, powerUpId)) return {};
    const value = Math.max(1, Math.round(Number(amount) || 1));
    const nextLog = [...s.economyLog || [], buildEconomyLogEntry("power-up", value, source, { powerUpId })];
    if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
    return {
      powerUps: {
        ...s.powerUps || {},
        [powerUpId]: ((s.powerUps || {})[powerUpId] || 0) + value
      },
      economyLog: nextLog
    };
  }),
  claimDailyReward: () => {
    const today = getIsoDateKey$1();
    const reward = getDailyRewardOutcome(get(), {
      today,
      yesterday: getIsoDateKey$1(-1),
      dayBefore: getIsoDateKey$1(-2)
    });
    if (!reward) return null;
    const rewardCoins = reward.coins;
    const nextStreak = reward.streak;
    const rewardPowerUp = reward.powerUp;
    const extraHintPack = reward.extraHintPack;
    const applyFreeze = reward.freezeUsed;
    set((s) => {
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("earn", rewardCoins, "daily-claim", { streak: nextStreak })];
      if (rewardPowerUp) {
        nextLog.push(buildEconomyLogEntry("power-up", rewardPowerUp.amount, "daily-claim", { powerUpId: rewardPowerUp.id, streak: nextStreak }));
      }
      if (extraHintPack) {
        nextLog.push(buildEconomyLogEntry("power-up", extraHintPack.amount, "skill-hint-free", { powerUpId: extraHintPack.id }));
      }
      if (applyFreeze) {
        nextLog.push(buildEconomyLogEntry("power-up", -1, "streak-freeze-used", { streak: nextStreak }));
      }
      if (nextLog.length > 40) nextLog.splice(0, nextLog.length - 40);
      const nextPowerUps = { ...s.powerUps || {} };
      if (rewardPowerUp) {
        nextPowerUps[rewardPowerUp.id] = (nextPowerUps[rewardPowerUp.id] || 0) + rewardPowerUp.amount;
      }
      if (extraHintPack) {
        nextPowerUps[extraHintPack.id] = (nextPowerUps[extraHintPack.id] || 0) + extraHintPack.amount;
      }
      if (applyFreeze) {
        nextPowerUps.streakFreeze = Math.max(0, (nextPowerUps.streakFreeze || 0) - 1);
      }
      return {
        coins: (s.coins || 0) + rewardCoins,
        lastDailyClaimDate: today,
        dailyClaimStreak: nextStreak,
        powerUps: nextPowerUps,
        economyLog: nextLog
      };
    });
    return reward;
  },
  claimCollectionReward: (collectionId, rewardCoins) => {
    if (!collectionId) return false;
    let success = false;
    set((s) => {
      var _a2;
      if ((_a2 = s.collectionClaims) == null ? void 0 : _a2[collectionId]) return {};
      success = true;
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("earn", rewardCoins, "collection-claim", { collectionId })];
      if (nextLog.length > 40) nextLog.splice(0, nextLog.length - 40);
      return {
        coins: (s.coins || 0) + Math.max(0, Math.round(Number(rewardCoins) || 0)),
        collectionClaims: {
          ...s.collectionClaims || {},
          [collectionId]: Date.now()
        },
        economyLog: nextLog
      };
    });
    return success;
  },
  claimQuestReward: (questId, rewardCoins, meta = {}) => {
    if (!questId) return false;
    const today = getIsoDateKey$1();
    let success = false;
    set((s) => {
      var _a2;
      const claimedToday = ((_a2 = s.questClaims) == null ? void 0 : _a2[today]) || {};
      if (claimedToday[questId]) return {};
      success = true;
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("earn", rewardCoins, "daily-quest", { questId, ...meta })];
      if (nextLog.length > 40) nextLog.splice(0, nextLog.length - 40);
      return {
        coins: (s.coins || 0) + Math.max(0, Math.round(Number(rewardCoins) || 0)),
        questClaims: {
          ...s.questClaims || {},
          [today]: {
            ...claimedToday,
            [questId]: Date.now()
          }
        },
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  claimWeeklyReward: (questId, rewardCoins, meta = {}) => {
    if (!questId) return false;
    let success = false;
    set((s) => {
      const weekKey2 = getIsoWeekStartKey();
      const normalizedClaims = normalizeWeeklyQuestClaims(s.weeklyQuestClaims);
      const claimedThisWeek = (normalizedClaims == null ? void 0 : normalizedClaims[weekKey2]) || {};
      if (claimedThisWeek[questId]) return {};
      success = true;
      const rewardValue = Math.max(0, Math.round(Number(rewardCoins) || 0));
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("earn", rewardValue, "weekly-quest", { questId, weekKey: weekKey2, ...meta })];
      if (nextLog.length > 40) nextLog.splice(0, nextLog.length - 40);
      return {
        coins: (s.coins || 0) + rewardValue,
        weeklyQuestClaims: {
          ...normalizedClaims,
          [weekKey2]: {
            ...claimedThisWeek,
            [questId]: Date.now()
          }
        },
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  claimMilestoneReward: (milestoneId, rewardCoins) => {
    if (!milestoneId) return false;
    let success = false;
    set((s) => {
      var _a2;
      if ((_a2 = s.milestoneClaims) == null ? void 0 : _a2[milestoneId]) return {};
      success = true;
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("earn", rewardCoins, "milestone", { milestoneId })];
      if (nextLog.length > 40) nextLog.splice(0, nextLog.length - 40);
      return {
        coins: (s.coins || 0) + Math.max(0, Math.round(Number(rewardCoins) || 0)),
        milestoneClaims: { ...s.milestoneClaims || {}, [milestoneId]: Date.now() },
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  upgradePowerUp: (powerUpId, cost) => {
    let success = false;
    set((s) => {
      var _a2;
      if (s.coins < cost) return {};
      const currentLevel = ((_a2 = s.powerUpLevels) == null ? void 0 : _a2[powerUpId]) || 1;
      success = true;
      const nextLog = [...s.economyLog || [], {
        type: "upgrade",
        amount: cost,
        source: "inventory",
        extra: { powerUpId, newLevel: currentLevel + 1 },
        timestamp: Date.now()
      }];
      if (nextLog.length > 40) nextLog.splice(0, nextLog.length - 40);
      return {
        coins: s.coins - cost,
        powerUpLevels: { ...s.powerUpLevels || {}, [powerUpId]: currentLevel + 1 },
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  consumePowerUp: (powerUpId, amount = 1) => {
    if (!powerUpId) return false;
    let success = false;
    set((s) => {
      var _a2;
      const current = ((_a2 = s.powerUps) == null ? void 0 : _a2[powerUpId]) || 0;
      if (current < amount) return {};
      success = true;
      return {
        powerUps: { ...s.powerUps || {}, [powerUpId]: current - amount },
        todayPowerUps: (s.todayPowerUps || 0) + amount,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  purchaseVIP: () => {
    const state = get();
    if (state.coins < VIP_CONFIG.price) return false;
    const success = state.spendCoins(VIP_CONFIG.price, "vip-purchase");
    if (success) {
      set({ vipExpiry: Date.now() + VIP_CONFIG.durationMs });
    }
    return success;
  },
  isVipActive: () => {
    const { vipExpiry } = get();
    return vipExpiry && Date.now() < vipExpiry;
  }
});
const CACHE_METRICS_KEY = "n4:cache-metrics:v1";
function readMetrics() {
  try {
    return JSON.parse(localStorage.getItem(CACHE_METRICS_KEY) || "{}");
  } catch (e) {
    return {};
  }
}
function recordCacheResult(cache, hit) {
  const metrics = readMetrics();
  const current = metrics[cache] || { hits: 0, misses: 0 };
  const next = {
    ...metrics,
    [cache]: {
      hits: current.hits + (hit ? 1 : 0),
      misses: current.misses + (hit ? 0 : 1),
      lastMeasuredAt: (/* @__PURE__ */ new Date()).toISOString()
    }
  };
  try {
    localStorage.setItem(CACHE_METRICS_KEY, JSON.stringify(next));
  } catch (e) {
  }
}
const DB_NAME$1 = "n4-audio-cache";
const DB_VERSION$1 = 1;
const STORE_NAME$1 = "audio";
let _db = null;
function openDB$1() {
  if (_db) return Promise.resolve(_db);
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB not available"));
      return;
    }
    const req = indexedDB.open(DB_NAME$1, DB_VERSION$1);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME$1)) {
        const store = db.createObjectStore(STORE_NAME$1, { keyPath: "key" });
        store.createIndex("lastUsed", "lastUsed", { unique: false });
      }
    };
    req.onsuccess = () => {
      _db = req.result;
      resolve(_db);
    };
    req.onerror = () => reject(req.error);
  });
}
function makeKey(text, lang) {
  return `${lang}:${text}`;
}
async function getCachedAudio(text, lang) {
  try {
    const db = await openDB$1();
    const tx = db.transaction(STORE_NAME$1, "readwrite");
    const store = tx.objectStore(STORE_NAME$1);
    const key = makeKey(text, lang);
    const record = await new Promise((res, rej) => {
      const r = store.get(key);
      r.onsuccess = () => res(r.result);
      r.onerror = rej;
    });
    if (!record) {
      recordCacheResult("audio", false);
      return null;
    }
    record.lastUsed = Date.now();
    store.put(record);
    recordCacheResult("audio", true);
    return record.blob;
  } catch (e) {
    recordCacheResult("audio", false);
    return null;
  }
}
async function clearAudioCache() {
  try {
    const db = await openDB$1();
    const tx = db.transaction(STORE_NAME$1, "readwrite");
    tx.objectStore(STORE_NAME$1).clear();
    await new Promise((res, rej) => {
      tx.oncomplete = res;
      tx.onerror = rej;
    });
  } catch (e) {
  }
}
let _muted = false;
let _keepAliveTimer = null;
let _voiceRetryTimer = null;
let _recoveryTimer = null;
let _cachedJPVoice = null;
let _cachedVIVoice = null;
let _voicesLoaded = false;
let _pendingSpeakTimer = null;
let _pendingUtterance = null;
const _activeHtmlAudio = /* @__PURE__ */ new Set();
function trackHtmlAudio(audio, objectUrl = null) {
  _activeHtmlAudio.add(audio);
  const cleanup2 = () => {
    _activeHtmlAudio.delete(audio);
    audio.onended = null;
    audio.onerror = null;
    if (objectUrl) URL.revokeObjectURL(objectUrl);
  };
  audio.onended = cleanup2;
  audio.onerror = cleanup2;
  return cleanup2;
}
const BENIGN_SPEECH_ERRORS = /* @__PURE__ */ new Set(["canceled", "cancelled", "interrupted"]);
function speechErrorName(eventOrError) {
  if (!eventOrError) return "";
  if (typeof eventOrError === "string") return eventOrError;
  return eventOrError.error || eventOrError.name || "";
}
function isBenignSpeechError(eventOrError) {
  return BENIGN_SPEECH_ERRORS.has(speechErrorName(eventOrError));
}
function ensureVoices() {
  if (_voicesLoaded) return;
  if (!("speechSynthesis" in window)) return;
  const voices = speechSynthesis.getVoices();
  if (voices.length > 0) {
    _voicesLoaded = true;
    window.__n4TtsUnavailable = false;
    const savedJP = safeGetItem(STORAGE_KEYS.TTS_JP_VOICE);
    const savedVI = safeGetItem(STORAGE_KEYS.TTS_VI_VOICE);
    _cachedJPVoice = savedJP && voices.find((v) => v.name === savedJP) || selectBestVoice(voices, "ja");
    _cachedVIVoice = savedVI && voices.find((v) => v.name === savedVI) || selectBestVoice(voices, "vi");
  } else if (!_voiceRetryTimer) {
    let retries = 0;
    _voiceRetryTimer = setInterval(() => {
      retries++;
      const v = speechSynthesis.getVoices();
      if (v.length > 0 || retries >= 10) {
        clearInterval(_voiceRetryTimer);
        _voiceRetryTimer = null;
        if (v.length > 0) {
          ensureVoices();
        } else {
          if (typeof window !== "undefined") window.__n4TtsUnavailable = true;
          console.warn("[TTS] No voices available after 10 retries — starting recovery loop");
          startRecoveryLoop();
        }
      }
    }, 200);
  }
}
function selectBestVoice(voices, langPrefix) {
  const matches = voices.filter((v) => v.lang.startsWith(langPrefix));
  if (!matches.length) return null;
  const google = matches.find((v) => v.name.includes("Google"));
  if (google) return google;
  const remote = matches.find((v) => !v.localService);
  return remote || matches[0];
}
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  ensureVoices();
  speechSynthesis.onvoiceschanged = ensureVoices;
}
function setMuted(muted) {
  _muted = muted;
  if (typeof window !== "undefined") window.__n4TtsMuted = muted;
  if (muted) stopSpeech();
}
function isMuted() {
  return _muted;
}
if (typeof window !== "undefined") window.__n4TtsMuted = false;
function startKeepAlive() {
  stopKeepAlive();
  _keepAliveTimer = setInterval(() => {
    if ("speechSynthesis" in window && speechSynthesis.speaking) return;
    speechSynthesis.cancel();
  }, 14e3);
}
function stopKeepAlive() {
  if (_keepAliveTimer) {
    clearInterval(_keepAliveTimer);
    _keepAliveTimer = null;
  }
}
function doSpeak(text, lang, rate) {
  if (_muted || !text) return null;
  if ("speechSynthesis" in window && !window.__n4TtsUnavailable) {
    ensureVoices();
    if (_pendingSpeakTimer !== null) {
      clearTimeout(_pendingSpeakTimer);
      _pendingSpeakTimer = null;
      const prev = _pendingUtterance;
      _pendingUtterance = null;
      if (prev == null ? void 0 : prev.onerror) {
        try {
          prev.onerror({ error: "canceled", type: "error" });
        } catch (e) {
        }
      }
    }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = rate;
    const voice = lang.startsWith("ja") ? _cachedJPVoice : lang.startsWith("vi") ? _cachedVIVoice : null;
    if (voice) u.voice = voice;
    u.onerror = (e) => {
      if (!isBenignSpeechError(e)) {
        console.warn("[TTS] Speech error:", speechErrorName(e) || "unknown");
        playCachedFallback(text, lang);
      }
    };
    _pendingUtterance = u;
    _pendingSpeakTimer = setTimeout(() => {
      _pendingSpeakTimer = null;
      _pendingUtterance = null;
      speechSynthesis.speak(u);
      startKeepAlive();
    }, 50);
    return u;
  }
  playCachedFallback(text, lang);
  return null;
}
function playCachedFallback(text, lang) {
  getCachedAudio(text, lang).then((blob) => {
    if (blob) {
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      const cleanup2 = trackHtmlAudio(audio, url);
      audio.play().catch(cleanup2);
    }
  }).catch(() => {
  });
}
let _contentSvc = null;
function getContent() {
  if (_contentSvc) return _contentSvc;
  try {
    _contentSvc = require("./content").default || require("./content");
  } catch (e) {
    _contentSvc = null;
  }
  return _contentSvc;
}
function tryAudioManifest(audioKey) {
  const svc = getContent();
  if (!svc || typeof svc.getAudioUrl !== "function") return null;
  try {
    return svc.getAudioUrl(audioKey) || null;
  } catch (e) {
    return null;
  }
}
function applyOverrides(text) {
  const svc = getContent();
  if (!svc || typeof svc.applyPronunciationOverrides !== "function") return text;
  try {
    return svc.applyPronunciationOverrides(text) || text;
  } catch (e) {
    return text;
  }
}
function speakJP(text, rate, options = {}) {
  let effectiveRate = rate;
  if (effectiveRate === void 0 || effectiveRate === null) {
    try {
      effectiveRate = useAppStore.getState().ttsRate;
    } catch (e) {
    }
    if (effectiveRate === void 0 || effectiveRate === null) {
      effectiveRate = 0.9;
    }
  }
  const key = options.audioKey;
  if (key) {
    const url = tryAudioManifest(key);
    if (url) {
      try {
        const audio = new Audio(url.startsWith("/") ? url : "/" + url);
        audio.playbackRate = effectiveRate;
        const cleanup2 = trackHtmlAudio(audio);
        audio.play().catch(cleanup2);
        return;
      } catch (e) {
      }
    }
  }
  const safe = applyOverrides(text);
  return doSpeak(safe, "ja-JP", effectiveRate);
}
function speakVi(text, rate = 1) {
  doSpeak(text, "vi-VN", rate);
}
function isTTSAvailable() {
  return {
    jp: !!_cachedJPVoice,
    vi: !!_cachedVIVoice,
    any: _voicesLoaded && !window.__n4TtsUnavailable
  };
}
function speakJPPromise(text, rate = 0.9) {
  return new Promise((resolve) => {
    const u = doSpeak(text, "ja-JP", rate);
    if (!u) {
      resolve();
      return;
    }
    u.onend = resolve;
    u.onerror = (e) => {
      if (!isBenignSpeechError(e)) console.warn("[TTS] Speech error:", speechErrorName(e) || "unknown");
      resolve();
    };
  });
}
const _audioCtx = typeof window !== "undefined" && window.AudioContext ? new AudioContext() : null;
async function playSFX(type) {
  var _a2;
  if (_muted || !_audioCtx) return;
  let soundFXEnabled = true;
  let correctEnabled = true;
  let wrongEnabled = true;
  try {
    const state = useAppStore.getState();
    soundFXEnabled = state.soundFX;
    correctEnabled = state.soundCorrect;
    wrongEnabled = state.soundWrong;
  } catch (e) {
  }
  if (!soundFXEnabled) return;
  if (type === "correct" && !correctEnabled) return;
  if (type === "wrong" && !wrongEnabled) return;
  try {
    if (type === "correct" || type === "wrong") (_a2 = navigator.vibrate) == null ? void 0 : _a2.call(navigator, type === "correct" ? 10 : [10, 30, 10]);
  } catch (e) {
  }
  try {
    if (_audioCtx.state === "suspended") await _audioCtx.resume();
    const osc = _audioCtx.createOscillator();
    const gain = _audioCtx.createGain();
    osc.connect(gain);
    gain.connect(_audioCtx.destination);
    if (type === "correct") {
      osc.frequency.value = 880;
      osc.type = "sine";
      gain.gain.value = 0.15;
    } else if (type === "wrong") {
      osc.frequency.value = 220;
      osc.type = "square";
      gain.gain.value = 0.1;
    } else if (type === "streak") {
      osc.frequency.setValueAtTime(440, _audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(880, _audioCtx.currentTime + 0.15);
      osc.type = "sine";
      gain.gain.value = 0.12;
    } else if (type === "achievement") {
      osc.frequency.setValueAtTime(523, _audioCtx.currentTime);
      osc.frequency.setValueAtTime(659, _audioCtx.currentTime + 0.1);
      osc.frequency.setValueAtTime(784, _audioCtx.currentTime + 0.2);
      osc.type = "sine";
      gain.gain.value = 0.18;
      gain.gain.exponentialRampToValueAtTime(1e-3, _audioCtx.currentTime + 0.4);
      osc.onended = () => {
        try {
          osc.disconnect();
          gain.disconnect();
        } catch (e) {
        }
      };
      osc.start();
      osc.stop(_audioCtx.currentTime + 0.4);
      return;
    } else {
      osc.frequency.value = 660;
      osc.type = "sine";
      gain.gain.value = 0.1;
    }
    gain.gain.exponentialRampToValueAtTime(1e-3, _audioCtx.currentTime + 0.2);
    osc.start();
    osc.stop(_audioCtx.currentTime + 0.2);
    osc.onended = () => {
      try {
        osc.disconnect();
        gain.disconnect();
      } catch (e) {
      }
    };
  } catch (e) {
  }
}
function getJapaneseVoices() {
  if (!("speechSynthesis" in window)) return [];
  return speechSynthesis.getVoices().filter((v) => v.lang.startsWith("ja"));
}
function getVietnameseVoices() {
  if (!("speechSynthesis" in window)) return [];
  return speechSynthesis.getVoices().filter((v) => v.lang.startsWith("vi"));
}
function setPreferredVoice(lang, voiceName) {
  const key = lang.startsWith("ja") ? STORAGE_KEYS.TTS_JP_VOICE : STORAGE_KEYS.TTS_VI_VOICE;
  if (voiceName) safeSetItem(key, voiceName);
  else safeRemoveItem(key);
  const voices = speechSynthesis.getVoices();
  const match = voiceName ? voices.find((v) => v.name === voiceName) : null;
  if (lang.startsWith("ja")) _cachedJPVoice = match || selectBestVoice(voices, "ja");
  else _cachedVIVoice = match || selectBestVoice(voices, "vi");
}
function getPreferredVoiceName(lang) {
  return safeGetItem(lang.startsWith("ja") ? STORAGE_KEYS.TTS_JP_VOICE : STORAGE_KEYS.TTS_VI_VOICE) || "";
}
const _stopListeners = /* @__PURE__ */ new Set();
function onStopAll(cb) {
  _stopListeners.add(cb);
  return () => _stopListeners.delete(cb);
}
function startRecoveryLoop() {
  if (_recoveryTimer) return;
  _recoveryTimer = setInterval(() => {
    if (_voicesLoaded) {
      clearInterval(_recoveryTimer);
      _recoveryTimer = null;
      return;
    }
    if (!("speechSynthesis" in window)) return;
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      _voicesLoaded = true;
      window.__n4TtsUnavailable = false;
      const savedJP = safeGetItem(STORAGE_KEYS.TTS_JP_VOICE);
      const savedVI = safeGetItem(STORAGE_KEYS.TTS_VI_VOICE);
      _cachedJPVoice = savedJP && voices.find((v) => v.name === savedJP) || selectBestVoice(voices, "ja");
      _cachedVIVoice = savedVI && voices.find((v) => v.name === savedVI) || selectBestVoice(voices, "vi");
      console.info("[TTS] Recovery successful — voices loaded");
      clearInterval(_recoveryTimer);
      _recoveryTimer = null;
    }
  }, 3e4);
}
function splitSpeechChunks(text, { maxLen = 180 } = {}) {
  if (!text) return [];
  const s = String(text).replace(/\u00A0/g, " ");
  const STRONG_RE = /([^。．.!！?？\n]+[。．.!！?？\n]?)/g;
  const sentences = (s.match(STRONG_RE) || []).map((x) => x.trim()).filter(Boolean);
  const chunks = [];
  let buf = "";
  function push() {
    const v = buf.trim();
    if (v) chunks.push(v);
    buf = "";
  }
  for (const sent of sentences) {
    if (sent.length > maxLen) {
      if (buf) push();
      const subparts = sent.split(/([、,，…・])/);
      let sub = "";
      for (const part of subparts) {
        if ((sub + part).length > maxLen && sub) {
          chunks.push(sub.trim());
          sub = part;
        } else {
          sub += part;
        }
      }
      while (sub.length > maxLen) {
        chunks.push(sub.slice(0, maxLen));
        sub = sub.slice(maxLen);
      }
      if (sub.trim()) chunks.push(sub.trim());
      continue;
    }
    const sep = buf && !buf.endsWith(" ") ? " " : "";
    if ((buf + sep + sent).length > maxLen && buf) {
      push();
      buf = sent;
    } else {
      buf += sep + sent;
    }
  }
  if (buf) push();
  return chunks;
}
function speakLongText(text, { lang = "ja-JP", rate = 0.9, onChunk, maxLen = 180 } = {}) {
  const chunks = splitSpeechChunks(text, { maxLen });
  let cancelled = false;
  let idx = 0;
  const promise = (async () => {
    if (_muted || !chunks.length) return;
    stopSpeech();
    for (; idx < chunks.length; idx++) {
      if (cancelled || _muted) return;
      const chunk = chunks[idx];
      try {
        onChunk == null ? void 0 : onChunk(chunk, idx, chunks.length);
      } catch (e) {
      }
      await new Promise((resolve) => {
        const u = doSpeak(chunk, lang, rate);
        if (!u) {
          resolve();
          return;
        }
        u.onend = resolve;
        u.onerror = (e) => {
          if (speechErrorName(e) && !isBenignSpeechError(e)) {
            console.warn("[TTS] chunk error:", speechErrorName(e));
          }
          resolve();
        };
      });
    }
  })();
  return {
    promise,
    isActive() {
      return !cancelled && idx < chunks.length;
    },
    cancel() {
      cancelled = true;
      stopSpeech();
    }
  };
}
function stopSpeech() {
  var _a2;
  if (_pendingSpeakTimer !== null) {
    clearTimeout(_pendingSpeakTimer);
    _pendingSpeakTimer = null;
    const prev = _pendingUtterance;
    _pendingUtterance = null;
    if (prev == null ? void 0 : prev.onerror) {
      try {
        prev.onerror({ error: "canceled", type: "error" });
      } catch (e) {
      }
    }
  }
  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
  }
  stopKeepAlive();
  for (const audio of _activeHtmlAudio) {
    try {
      audio.pause();
      audio.currentTime = 0;
      (_a2 = audio.onended) == null ? void 0 : _a2.call(audio);
    } catch (e) {
    }
  }
  _activeHtmlAudio.clear();
  _stopListeners.forEach((fn) => {
    try {
      fn();
    } catch (e) {
    }
  });
}
function useManagedTimeout() {
  const timeoutsRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const clearManagedTimeout = reactExports.useCallback((timeoutId) => {
    if (timeoutId == null) return;
    window.clearTimeout(timeoutId);
    timeoutsRef.current.delete(timeoutId);
  }, []);
  const clearAllManagedTimeouts = reactExports.useCallback(() => {
    timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    timeoutsRef.current.clear();
  }, []);
  const scheduleTimeout = reactExports.useCallback((callback, delayMs) => {
    const timeoutId = window.setTimeout(() => {
      timeoutsRef.current.delete(timeoutId);
      callback();
    }, delayMs);
    timeoutsRef.current.add(timeoutId);
    return timeoutId;
  }, []);
  reactExports.useEffect(() => clearAllManagedTimeouts, [clearAllManagedTimeouts]);
  return {
    scheduleTimeout,
    clearManagedTimeout,
    clearAllManagedTimeouts
  };
}
function getBadgeRarity(id) {
  if (/^streak-(180|365)$|^xp-(50000|100000)$|^level-(50|100)$|^elite-/.test(id)) return "legendary";
  if (/^streak-(30|60|90)$|^xp-(10000|25000)$|^level-(20|30)$|^combo-(50|100)$|accuracy-90|^srs-|^secret-/.test(id)) return "epic";
  if (/^streak-(7|14|21)$|^xp-(2000|5000)$|^level-(5|10|15)$|^combo-(10|20)$|^trainer-master-|^minna-(10|25|50)$|^study-/.test(id)) return "rare";
  return "common";
}
const DEFAULT_EQUIPPED_COSMETICS = Object.freeze({
  theme: null,
  avatar: null,
  badge: null,
  cardStyle: null,
  effect: null,
  title: null,
  sticker: null,
  textColor: null,
  entrance: null,
  particleAmbient: null,
  particleTouch: null,
  frame: null,
  banner: null,
  charm: null,
  aura: null,
  sfx: null,
  emote: null
});
function isTouchParticleKey$1(unlockKey) {
  return String(unlockKey || "").startsWith("particle-touch-");
}
function resolveEquippedCosmeticCategory$1(category, unlockKey) {
  if (category !== "particle") return category;
  return isTouchParticleKey$1(unlockKey) ? "particleTouch" : "particleAmbient";
}
function normalizeEquippedCosmetics$1(equippedCosmetics) {
  const next = {
    ...DEFAULT_EQUIPPED_COSMETICS,
    ...equippedCosmetics && typeof equippedCosmetics === "object" ? equippedCosmetics : {}
  };
  const legacyParticle = next.particle;
  if (legacyParticle) {
    const targetCategory = resolveEquippedCosmeticCategory$1("particle", legacyParticle);
    if (!next[targetCategory]) next[targetCategory] = legacyParticle;
  }
  delete next.particle;
  return next;
}
const createCosmeticsSlice = (set, get) => ({
  unlockedItems: {},
  equippedCosmetics: { ...DEFAULT_EQUIPPED_COSMETICS },
  lastEquippedAt: null,
  achievements: {},
  roomItems: {},
  ownedRoomItems: [],
  unlockItem: (key) => {
    if (!key) return false;
    let success = false;
    set((s) => {
      if (s.unlockedItems[key]) return {};
      success = true;
      return { unlockedItems: { ...s.unlockedItems || {}, [key]: Date.now() } };
    });
    return success;
  },
  equipItem: (category, unlockKey) => {
    if (!category || !unlockKey) return false;
    const state = get();
    if (!state.unlockedItems[unlockKey]) return false;
    const normalizedCategory = resolveEquippedCosmeticCategory$1(category, unlockKey);
    set({
      equippedCosmetics: {
        ...normalizeEquippedCosmetics$1(state.equippedCosmetics),
        [normalizedCategory]: unlockKey
      },
      lastEquippedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    return true;
  },
  forceEquip: (category, unlockKey) => {
    if (!category || !unlockKey) return false;
    const state = get();
    const normalizedCategory = resolveEquippedCosmeticCategory$1(category, unlockKey);
    set({
      equippedCosmetics: {
        ...normalizeEquippedCosmetics$1(state.equippedCosmetics),
        [normalizedCategory]: unlockKey
      },
      lastEquippedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    return true;
  },
  unequipItem: (category) => {
    if (!category) return;
    if (category === "particle") {
      set((s) => ({
        equippedCosmetics: {
          ...normalizeEquippedCosmetics$1(s.equippedCosmetics),
          particleAmbient: null,
          particleTouch: null
        },
        lastEquippedAt: (/* @__PURE__ */ new Date()).toISOString()
      }));
      return;
    }
    const normalizedCategory = resolveEquippedCosmeticCategory$1(category);
    set((s) => ({
      equippedCosmetics: {
        ...normalizeEquippedCosmetics$1(s.equippedCosmetics),
        [normalizedCategory]: null
      },
      lastEquippedAt: (/* @__PURE__ */ new Date()).toISOString()
    }));
  },
  resetAllCosmetics: () => {
    set({
      equippedCosmetics: { ...DEFAULT_EQUIPPED_COSMETICS },
      lastEquippedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
  },
  unlockAchievement: (id) => {
    if (get().achievements[id]) return false;
    let rarity = "common";
    try {
      rarity = getBadgeRarity(id);
    } catch (e) {
    }
    const coinReward = ACHIEVEMENT_COIN_TABLE[rarity] || ACHIEVEMENT_COIN_TABLE.common;
    set((s) => {
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("earn", coinReward, "achievement", { achievementId: id, rarity })];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      return {
        achievements: { ...s.achievements || {}, [id]: Date.now() },
        coins: (s.coins || 0) + coinReward,
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return true;
  },
  placeRoomItem: (slotId, itemId) => set((s) => ({
    roomItems: { ...s.roomItems || {}, [slotId]: itemId }
  })),
  removeRoomItem: (slotId) => set((s) => {
    const next = { ...s.roomItems || {} };
    delete next[slotId];
    return { roomItems: next };
  }),
  getRoomCoinBonus: () => {
    const count = Object.keys(get().roomItems || {}).length;
    return Math.min(ROOM_MAX_BONUS, count * ROOM_BONUS_PER_ITEM);
  },
  purchaseRoomItem: (itemId, cost) => {
    let success = false;
    set((s) => {
      if (s.coins < cost || (s.ownedRoomItems || []).includes(itemId)) return {};
      success = true;
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("spend", cost, "room-buy", { itemId })];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      return {
        coins: s.coins - cost,
        ownedRoomItems: [...s.ownedRoomItems || [], itemId],
        economyLog: nextLog
      };
    });
    return success;
  }
});
function findPetFoodOption(foodId) {
  return PET_FOOD_OPTIONS.find((food) => food.id === foodId) || null;
}
function getPetMood(happiness) {
  if (happiness >= PET_MOOD_THRESHOLDS.happy) return "happy";
  if (happiness >= PET_MOOD_THRESHOLDS.sleepy) return "sleepy";
  return "hungry";
}
function getPetFeedingCost(baseCost, options = {}) {
  var _a2;
  const now = (_a2 = options.now) != null ? _a2 : Date.now();
  if (options.vipExpiry && now < options.vipExpiry) {
    return Math.round(baseCost * VIP_CONFIG.petFeedingDiscount);
  }
  return baseCost;
}
function buildFedPetState(pet = {}, food = {}, now = Date.now()) {
  const newXp = (pet.xp || 0) + (food.xpGain || 0);
  const newHappiness = Math.min(100, (pet.happiness || 0) + (food.happinessGain || 0));
  return {
    ...pet,
    xp: newXp,
    level: Math.min(PET_MAX_LEVEL, Math.floor(newXp / PET_XP_PER_LEVEL) + 1),
    happiness: newHappiness,
    lastFed: now,
    mood: getPetMood(newHappiness)
  };
}
function getPetsWithUpdatedMood(pets = {}, now = Date.now()) {
  const updated = { ...pets };
  for (const [petId, pet] of Object.entries(updated)) {
    const hoursSinceFed = (now - (pet.lastFed || now)) / (1e3 * 60 * 60);
    const decayAmount = Math.floor(hoursSinceFed) * PET_HAPPINESS_DECAY_PER_HOUR;
    const newHappiness = Math.max(0, (pet.happiness || 100) - decayAmount);
    updated[petId] = {
      ...pet,
      happiness: newHappiness,
      mood: getPetMood(newHappiness)
    };
  }
  return updated;
}
const createMinigamesSlice = (set, get) => ({
  gachaHistory: [],
  gachaPity: { epic: 0, legendary: 0 },
  wheelSpinsToday: 0,
  lastWheelDate: null,
  slotSpinsToday: 0,
  lastSlotDate: null,
  slotPity: 0,
  currentBet: 0,
  bettingEnabled: true,
  pets: {},
  activePet: null,
  storyProgress: {},
  mangaProgress: {},
  lastOmikujiDate: null,
  activeBuffs: [],
  senseiAffinity: 0,
  recordGachaPull: (items, cost, boxId) => set((s) => {
    var _a2, _b2;
    const entry = { items, boxId, at: (/* @__PURE__ */ new Date()).toISOString(), cost };
    const nextHistory = [...s.gachaHistory || [], entry];
    if (nextHistory.length > 100) nextHistory.splice(0, nextHistory.length - 100);
    const hasEpic = items.some((i) => i.rarity === "epic" || i.rarity === "legendary");
    const hasLegendary = items.some((i) => i.rarity === "legendary");
    const nextPity = {
      epic: hasEpic ? 0 : (((_a2 = s.gachaPity) == null ? void 0 : _a2.epic) || 0) + items.length,
      legendary: hasLegendary ? 0 : (((_b2 = s.gachaPity) == null ? void 0 : _b2.legendary) || 0) + items.length
    };
    return { gachaHistory: nextHistory, gachaPity: nextPity };
  }),
  recordWheelSpin: () => set((s) => {
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const isNewDay = s.lastWheelDate !== today;
    return {
      wheelSpinsToday: isNewDay ? 1 : (s.wheelSpinsToday || 0) + 1,
      lastWheelDate: today
    };
  }),
  recordSlotSpin: () => set((s) => {
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const isNewDay = s.lastSlotDate !== today;
    return {
      slotSpinsToday: isNewDay ? 1 : (s.slotSpinsToday || 0) + 1,
      lastSlotDate: today
    };
  }),
  setSlotPity: (val) => set({ slotPity: Math.max(0, Math.round(Number(val) || 0)) }),
  placeBet: (amount) => {
    const value = Math.max(0, Math.round(Number(amount) || 0));
    let success = false;
    set((s) => {
      if (!s.bettingEnabled) return {};
      if (value > 0 && s.coins < value) return {};
      success = true;
      return value > 0 ? { coins: s.coins - value, currentBet: value } : { currentBet: 0 };
    });
    return success;
  },
  resolveBet: (scorePercent) => set((s) => {
    if (s.currentBet <= 0) return {};
    const bet = s.currentBet;
    let multiplier = 0;
    if (scorePercent >= 100) multiplier = 5;
    else if (scorePercent >= 90) multiplier = 3;
    else if (scorePercent >= 80) multiplier = 2;
    const winnings = Math.round(bet * multiplier);
    const nextLog = winnings > 0 ? [...s.economyLog || [], buildEconomyLogEntry("earn", winnings, "bet-win", { bet, multiplier, scorePercent })] : [...s.economyLog || [], buildEconomyLogEntry("spend", 0, "bet-loss", { bet, scorePercent })];
    if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
    return { currentBet: 0, coins: (s.coins || 0) + winnings, economyLog: nextLog };
  }),
  feedPet: (petId, foodId) => {
    var _a2;
    const food = findPetFoodOption(foodId);
    if (!food) return false;
    const state = get();
    const pet = (_a2 = state.pets) == null ? void 0 : _a2[petId];
    if (!pet) return false;
    const cost = getPetFeedingCost(food.cost, { vipExpiry: state.vipExpiry });
    if (state.coins < cost) return false;
    let success = false;
    set((s) => {
      if (s.coins < cost) return {};
      success = true;
      const currentPet = s.pets[petId];
      const nextPet = buildFedPetState(currentPet, food);
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("spend", cost, "pet-feed", { petId, foodId })];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      return {
        coins: s.coins - cost,
        economyLog: nextLog,
        todayPetFed: (s.todayPetFed || 0) + 1,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString(),
        pets: {
          ...s.pets || {},
          [petId]: nextPet
        }
      };
    });
    return success;
  },
  switchPet: (petId) => {
    var _a2;
    const state = get();
    if (petId && !((_a2 = state.pets) == null ? void 0 : _a2[petId])) return false;
    set({ activePet: petId || null });
    return true;
  },
  adoptPet: (petId, petData) => set((s) => ({
    pets: {
      ...s.pets || {},
      [petId]: {
        level: 1,
        xp: 0,
        happiness: 100,
        lastFed: Date.now(),
        mood: "happy",
        coinBonus: (petData == null ? void 0 : petData.coinBonus) || 0,
        ...petData
      }
    }
  })),
  checkPetMood: () => set((s) => {
    if (!s.pets || Object.keys(s.pets).length === 0) return {};
    return { pets: getPetsWithUpdatedMood(s.pets) };
  }),
  recordGameSession: (trainerId, score, total, timeMs, options = {}) => set((s) => {
    assertLearningOwnerReady();
    const outcome = getGameSessionOutcome(s, { trainerId, score, total, timeMs, ...options });
    const answersAlreadyRecorded = options.answersAlreadyRecorded === true;
    return {
      ...buildStudyActivityPatch(s, {
        source: "game-session",
        trainerId,
        domain: options.domain,
        total: answersAlreadyRecorded ? 0 : total,
        correctCount: answersAlreadyRecorded ? 0 : score,
        wrongCount: answersAlreadyRecorded ? 0 : Math.max(0, Number(total || 0) - Number(score || 0)),
        sessions: 1,
        durationMs: timeMs,
        at: options.at
      }),
      gameHistory: outcome.nextGameHistory,
      coins: (s.coins || 0) + outcome.totalBonus,
      economyLog: outcome.nextLog
    };
  }),
  addActiveTime: (minutes) => set((s) => {
    const outcome = getActiveTimeRewardOutcome(s, minutes);
    return {
      ...buildStudyActivityPatch(s, {
        source: "active-time",
        durationMs: Math.max(0, Number(minutes) || 0) * 6e4
      }),
      dailyActiveMinutes: outcome.nextDailyActiveMinutes,
      coins: (s.coins || 0) + outcome.studyCoins,
      economyLog: outcome.nextLog
    };
  }),
  completeScenario: (scenarioId) => set((s) => ({
    storyProgress: { ...s.storyProgress || {}, [scenarioId]: Date.now() },
    lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
  })),
  markMangaRead: (chapterId) => {
    if (!chapterId) return;
    set((s) => ({
      mangaProgress: { ...s.mangaProgress || {}, [chapterId]: true },
      lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
    }));
  },
  setLastOmikujiDate: (dateKey) => set({
    lastOmikujiDate: dateKey || null,
    lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
  }),
  activateBuff: (buffId, durationMs) => set((s) => ({
    activeBuffs: [
      ...(s.activeBuffs || []).filter((b) => b.expiresAt > Date.now()),
      { id: buffId, expiresAt: Date.now() + durationMs }
    ],
    lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
  })),
  getActiveBuffMultiplier: (type) => {
    const now = Date.now();
    const buffs = (get().activeBuffs || []).filter((b) => b.expiresAt > now);
    let multiplier = 0;
    for (const buff of buffs) {
      if (buff.id === "buff_gravity" && type === "xp") multiplier += 1;
      if (buff.id === "buff_slayer" && type === "xp") multiplier += 2;
    }
    return multiplier;
  },
  addSenseiAffinity: (amount) => set((s) => ({
    senseiAffinity: (s.senseiAffinity || 0) + amount,
    lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
  }))
});
const MATERIAL_TYPES = {
  shardCommon: { id: "shardCommon", icon: "⚗️", label: "Mảnh thường", color: "#94a3b8" },
  crystalRare: { id: "crystalRare", icon: "💎", label: "Tinh thể hiếm", color: "#3b82f6" },
  epicGem: { id: "epicGem", icon: "🔮", label: "Đá sử thi", color: "#a855f7" },
  legendaryCore: { id: "legendaryCore", icon: "⭐", label: "Lõi huyền thoại", color: "#f59e0b" }
};
const RECYCLE_YIELD = {
  common: { shardCommon: 2 },
  rare: { shardCommon: 1, crystalRare: 1 },
  epic: { crystalRare: 1, epicGem: 1 },
  legendary: { epicGem: 1, legendaryCore: 1 }
};
const RECYCLE_COIN_REFUND_PCT = 0.2;
const ENCHANT_COSTS = {
  1: { shardCommon: 3, coins: 50 },
  2: { shardCommon: 1, crystalRare: 2, coins: 150 },
  3: { crystalRare: 1, epicGem: 1, coins: 300 }
};
const FUSION_CONFIG = {
  common: { successRate: 0.8, extraCost: { shardCommon: 2, coins: 30 }, upgradeTo: "rare" },
  rare: { successRate: 0.75, extraCost: { crystalRare: 1, coins: 80 }, upgradeTo: "epic" },
  epic: { successRate: 0.6, extraCost: { epicGem: 1, coins: 200 }, upgradeTo: "legendary" },
  legendary: null
  // Cannot fuse legendary items
};
const CRAFT_RECIPES = [
  // ── Common Tier ──
  {
    id: "forged_sakura_frame",
    name: "🌸 Khung Sakura",
    rarity: "rare",
    category: "frame",
    description: "Khung ảnh đại lý đặc biệt được chế tạo từ mảnh sakura",
    cost: { shardCommon: 8, coins: 100 },
    icon: "🌸"
  },
  {
    id: "forged_koi_badge",
    name: "🐟 Huy hiệu Cá Koi",
    rarity: "rare",
    category: "badge",
    description: "Huy hiệu cá koi mang lại may mắn",
    cost: { shardCommon: 6, crystalRare: 1, coins: 80 },
    icon: "🐟"
  },
  {
    id: "forged_scroll_title",
    name: "📜 Danh hiệu Cuộn Giấy",
    rarity: "rare",
    category: "title",
    description: 'Danh hiệu "Học Giả" được viết trên cuộn giấy cổ',
    cost: { shardCommon: 10, coins: 120 },
    icon: "📜"
  },
  // ── Rare Tier ──
  {
    id: "forged_crystal_aura",
    name: "💎 Hào Quang Tinh Thể",
    rarity: "epic",
    category: "aura",
    description: "Hào quang lấp lánh tạo từ tinh thể hiếm",
    cost: { crystalRare: 4, coins: 200 },
    icon: "💎"
  },
  {
    id: "forged_moonblade_avatar",
    name: "🌙 Avatar Kiếm Trăng",
    rarity: "epic",
    category: "avatar",
    description: "Avatar huyền bí với lưỡi kiếm ánh trăng",
    cost: { crystalRare: 3, epicGem: 1, coins: 250 },
    icon: "🌙"
  },
  {
    id: "forged_storm_banner",
    name: "⚡ Biểu Ngữ Sấm Sét",
    rarity: "epic",
    category: "banner",
    description: "Biểu ngữ với tia sét ngang trời",
    cost: { crystalRare: 5, coins: 180 },
    icon: "⚡"
  },
  {
    id: "forged_lotus_frame",
    name: "🪷 Khung Sen Vàng",
    rarity: "epic",
    category: "frame",
    description: "Khung ảnh hoa sen vàng rực rỡ",
    cost: { crystalRare: 2, epicGem: 2, coins: 300 },
    icon: "🪷"
  },
  // ── Epic Tier ──
  {
    id: "forged_phoenix_aura",
    name: "🔥 Hào Quang Phượng Hoàng",
    rarity: "legendary",
    category: "aura",
    description: "Hào quang ngọn lửa bất tử của phượng hoàng",
    cost: { epicGem: 4, legendaryCore: 1, coins: 500 },
    icon: "🔥"
  },
  {
    id: "forged_dragon_title",
    name: "🐲 Danh hiệu Rồng Thần",
    rarity: "legendary",
    category: "title",
    description: "Danh hiệu tối thượng dành cho người chinh phục N4",
    cost: { epicGem: 3, legendaryCore: 1, coins: 600 },
    icon: "🐲"
  },
  {
    id: "forged_cosmos_avatar",
    name: "🌌 Avatar Vũ Trụ",
    rarity: "legendary",
    category: "avatar",
    description: "Avatar không gian vũ trụ huyền bí",
    cost: { epicGem: 2, legendaryCore: 2, coins: 700 },
    icon: "🌌"
  },
  {
    id: "forged_champion_banner",
    name: "🏆 Biểu Ngữ Vô Địch",
    rarity: "legendary",
    category: "banner",
    description: "Biểu ngữ chứng nhận bạn là chiến binh JLPT N4",
    cost: { epicGem: 5, coins: 450 },
    icon: "🏆"
  },
  // ── Utility Cosmetics ──
  {
    id: "forged_focus_badge",
    name: "🎯 Huy hiệu Tập Trung",
    rarity: "rare",
    category: "badge",
    description: "Huy hiệu dành cho người học chuyên cần",
    cost: { shardCommon: 5, crystalRare: 1, coins: 90 },
    icon: "🎯"
  },
  {
    id: "forged_ninja_title",
    name: "🥷 Danh hiệu Ninja",
    rarity: "epic",
    category: "title",
    description: "Danh hiệu bí ẩn cho người học thầm lặng",
    cost: { crystalRare: 3, epicGem: 1, coins: 220 },
    icon: "🥷"
  },
  {
    id: "forged_zen_frame",
    name: "☯️ Khung Thiền Định",
    rarity: "epic",
    category: "frame",
    description: "Khung ảnh thiền định tâm bình khí hòa",
    cost: { crystalRare: 4, coins: 200 },
    icon: "☯️"
  },
  {
    id: "forged_shogun_banner",
    name: "⚔️ Biểu Ngữ Shogun",
    rarity: "legendary",
    category: "banner",
    description: "Biểu ngữ uy quyền của Đại Tướng Quân",
    cost: { epicGem: 3, legendaryCore: 1, coins: 550 },
    icon: "⚔️"
  }
];
const AJL_ITEMS = [
  // Titles
  { id: "ajl-title-ninja", name: "Danh hiệu Ninja", description: 'Trang bị danh hiệu "Ninja" trên hồ sơ.', price: 500, type: "title", rarity: "rare", icon: "🥷" },
  { id: "ajl-title-samurai", name: "Danh hiệu Samurai", description: 'Trang bị danh hiệu "Samurai" trên hồ sơ.', price: 1e3, type: "title", rarity: "epic", icon: "⚔️" },
  { id: "ajl-title-isekai", name: "Nhân vật chính Isekai", description: "Chuyển sinh sang thế giới khác.", price: 2e3, type: "title", rarity: "legendary", icon: "🚚" },
  { id: "ajl-title-hunter", name: "Thợ săn cấp S", description: "Thợ săn hạng S mạnh nhất.", price: 1500, type: "title", rarity: "epic", icon: "🗡️" },
  { id: "ajl-title-magical", name: "Thiếu nữ Ma pháp", description: "Nhân danh Mặt Trăng!", price: 1500, type: "title", rarity: "epic", icon: "✨" },
  { id: "ajl-title-hokage", name: "Trưởng làng", description: "Believe it!", price: 2e3, type: "title", rarity: "legendary", icon: "🔥" },
  // Consumables — Yokai Food
  { id: "ajl-food-onigiri", name: "Onigiri", description: "Cơm nắm thơm ngon. Yokai thích lắm!", price: 20, type: "consumable", rarity: "common", icon: "🍙", affection: 10 },
  { id: "ajl-food-dango", name: "Dango", description: "Bánh nếp ngọt trên que.", price: 50, type: "consumable", rarity: "rare", icon: "🍡", affection: 25 },
  { id: "ajl-food-sushi", name: "Sushi Thượng hạng", description: "Sushi cao cấp. Tăng cảm tình cực mạnh!", price: 150, type: "consumable", rarity: "epic", icon: "🍣", affection: 50 },
  // Consumables — Buffs
  { id: "ajl-buff-gravity", name: "Phòng Trọng lực", description: "Tập luyện 2x XP trong 1 giờ!", price: 500, type: "consumable", rarity: "rare", icon: "⏱️", buffId: "buff_gravity", durationMs: 36e5, xpMultiplier: 2 },
  { id: "ajl-buff-slayer", name: "Huấn luyện Diệt quỷ", description: "3x XP trong 30 phút.", price: 800, type: "consumable", rarity: "epic", icon: "🗡️", buffId: "buff_slayer", durationMs: 18e5, xpMultiplier: 3 },
  // Consumables — Gifts for Sensei
  { id: "ajl-gift-cake", name: "Bánh kem dâu", description: "Sensei thích đồ ngọt! (+10 Cảm tình)", price: 100, type: "consumable", rarity: "common", icon: "🍰", affinity: 10 },
  { id: "ajl-gift-tea", name: "Matcha cao cấp", description: "Trà chất lượng cao. (+25 Cảm tình)", price: 250, type: "consumable", rarity: "rare", icon: "🍵", affinity: 25 },
  { id: "ajl-gift-manga", name: "Tập manga hiếm", description: "Manga phiên bản giới hạn. (+100 Cảm tình)", price: 1e3, type: "consumable", rarity: "epic", icon: "📖", affinity: 100 },
  // Backgrounds
  { id: "ajl-bg-academy", name: "Học viện Ma thuật", description: "Trường đào tạo pháp sư danh tiếng.", price: 3e3, type: "background", rarity: "epic", icon: "🏫" },
  { id: "ajl-bg-neotokyo", name: "Tân Tokyo", description: "Thành phố cyberpunk.", price: 5e3, type: "background", rarity: "legendary", icon: "🌃" },
  { id: "ajl-bg-isekai", name: "Hội Giả tưởng", description: "Nơi các phiêu lưu gia tụ hội.", price: 3e3, type: "background", rarity: "epic", icon: "⚔️" },
  // Weapons
  { id: "ajl-wpn-katana", name: "Katana Diệt quỷ", description: "Lưỡi kiếm bị nguyền. +10% sát thương Boss.", price: 2e3, type: "weapon", rarity: "epic", icon: "🗡️", bossDamageBonus: 10 },
  { id: "ajl-wpn-staff", name: "Trượng Đại pháp sư", description: "Explosion! +10% XP trong Minigames.", price: 2e3, type: "weapon", rarity: "epic", icon: "🪄", xpBonus: 10 },
  // Armor
  { id: "ajl-arm-kimono", name: "Kimono Lụa", description: "Trang phục thanh lịch. +5% Xu.", price: 1500, type: "armor", rarity: "rare", icon: "👘", coinBonus: 5 },
  { id: "ajl-arm-mecha", name: "Giáp Mecha", description: "Lên robot thôi. +15% sát thương Boss.", price: 5e3, type: "armor", rarity: "legendary", icon: "🤖", bossDamageBonus: 15 },
  // Streak Freeze
  { id: "ajl-streak-freeze", name: "Đóng băng Chuỗi", description: "Bảo vệ chuỗi nếu bạn bỏ lỡ một ngày.", price: 200, type: "consumable", rarity: "common", icon: "❄️" }
];
const AJL_YOKAI = [
  { id: "yokai-kappa", name: "Kappa", icon: "🥒", price: 100, rarity: "common", passiveDesc: "Tinh linh nước nghịch ngợm. +10% xu trong Gõ Ninja.", coinBonusGame: "ninja-typing", bonusPercent: 10 },
  { id: "yokai-tanuki", name: "Tanuki", icon: "🍃", price: 100, rarity: "common", passiveDesc: "Gấu mèo biến hình. +20% xu trong Izakaya.", coinBonusGame: "izakaya", bonusPercent: 20 },
  { id: "yokai-tengu", name: "Tengu", icon: "👺", price: 100, rarity: "rare", passiveDesc: "Tinh linh núi mũi dài. +15% XP trong Trắc nghiệm.", xpBonusGame: "quiz", bonusPercent: 15 },
  { id: "yokai-oni", name: "Oni", icon: "👹", price: 100, rarity: "rare", passiveDesc: "Ác quỷ đáng sợ. +20% sát thương Trùm.", bossDamageBonus: 20 },
  { id: "yokai-kitsune", name: "Kitsune", icon: "🦊", price: 100, rarity: "epic", passiveDesc: "Cáo chín đuôi huyền bí. +20% xu trong Zen Dojo & Izakaya.", coinBonusPercent: 20 },
  { id: "yokai-dragon", name: "Ryū", icon: "🐉", price: 100, rarity: "legendary", passiveDesc: "Rồng nước huyền thoại. +50% xu toàn bộ.", coinBonusPercent: 50 }
];
const AJL_SKILLS = [
  { id: "skill_focus", name: "Tập trung Tuyệt đối", description: "+5% XP từ mọi nguồn.", cost: 1, icon: "👁️", req: [], effect: { type: "xp", value: 5 } },
  { id: "skill_wealth", name: "Tâm hồn Thương nhân", description: "+5% Xu từ mọi nguồn.", cost: 1, icon: "💰", req: [], effect: { type: "coin", value: 5 } },
  { id: "skill_ninja", name: "Phân thân chi thuật", description: "Thêm 1 mạng trong Gõ Ninja.", cost: 2, icon: "👥", req: ["skill_focus"], effect: { type: "extra-life", game: "ninja-typing" } },
  { id: "skill_chef", name: "Bậc thầy Đầu bếp", description: "Thêm thời gian trong Trò chơi Izakaya.", cost: 2, icon: "👨‍🍳", req: ["skill_wealth"], effect: { type: "extra-time", game: "izakaya", seconds: 15 } },
  { id: "skill_isekai", name: "Hào quang Nhân vật chính", description: "Sống sót 1 đòn chí mạng trong Quyết đấu Kanji.", cost: 3, icon: "🛡️", req: ["skill_ninja", "skill_chef"], effect: { type: "revive", game: "kanji-battle" } },
  { id: "skill_memory", name: "Trí nhớ Siêu phàm", description: "Xem trước thẻ lúc bắt đầu Ghép cặp Kana.", cost: 2, icon: "🧠", req: ["skill_focus"], effect: { type: "peek", game: "memory-match", seconds: 2 } },
  { id: "skill_taiko", name: "Bậc thầy Nhịp điệu", description: "Trượt không phá chuỗi liên tục trong Taiko.", cost: 3, icon: "🥁", req: ["skill_ninja"], effect: { type: "no-break-combo", game: "taiko" } },
  { id: "skill_gacha", name: "Ngôi sao May mắn", description: "Tăng tỷ lệ Gacha hiếm.", cost: 4, icon: "⭐", req: ["skill_wealth", "skill_chef"], effect: { type: "gacha-rate", value: 10 } }
];
const AJL_BUILDINGS = [
  { id: "bld_ramen", name: "Quán Ramen", description: "Tạo 10 xu/giờ.", price: 1e3, icon: "🍜", incomeType: "coins", incomePerHour: 10 },
  { id: "bld_dojo", name: "Võ Đường", description: "Tạo 5 XP/giờ.", price: 1500, icon: "🥋", incomeType: "xp", incomePerHour: 5 },
  { id: "bld_shrine", name: "Đền Inari", description: "Tạo 25 xu/giờ.", price: 3e3, icon: "⛩️", incomeType: "coins", incomePerHour: 25 },
  { id: "bld_castle", name: "Lâu đài Shogun", description: "Tạo 20 XP/giờ.", price: 5e3, icon: "🏯", incomeType: "xp", incomePerHour: 20 },
  { id: "bld_onsen", name: "Suối Nước Nóng", description: "Tạo 50 xu/giờ.", price: 1e4, icon: "♨️", incomeType: "coins", incomePerHour: 50 }
];
const AJL_FACTIONS = [
  { id: "shinobi", name: "Shinobi Làng Lá", icon: "🍃", color: "var(--n4-neon-green)", description: "Bậc thầy tốc độ và ẩn thân.", bonus: { type: "xp", value: 3 } },
  { id: "samurai", name: "Samurai Shogun", icon: "⚔️", color: "var(--n4-neon-red, #ef4444)", description: "Chiến binh danh dự và sức mạnh.", bonus: { type: "coin", value: 3 } },
  { id: "onmyoji", name: "Onmyoji Huyền bí", icon: "🔮", color: "var(--n4-neon-purple)", description: "Pháp sư ma thuật và linh hồn.", bonus: { type: "gacha", value: 5 } }
];
const AJL_ORIGAMI = [
  { id: "ori_crane", name: "Hạc Giấy", description: "+1% XP toàn cục", cost: 1e3, icon: "🕊️", effect: { type: "xp", value: 1 } },
  { id: "ori_frog", name: "Ếch Giấy", description: "+1% Xu toàn cục", cost: 1e3, icon: "🐸", effect: { type: "coin", value: 1 } },
  { id: "ori_dragon", name: "Rồng Giấy", description: "+5% sát thương Boss", cost: 5e3, icon: "🐉", effect: { type: "boss-damage", value: 5 } }
];
const AJL_CATS = [
  { id: "cat_tama", name: "Tama", description: "Mèo tam thể. +1% Xu", cost: 500, icon: "🐈", effect: { type: "coin", value: 1 } },
  { id: "cat_kuro", name: "Kuro", description: "Mèo đen. +2% Xu", cost: 1500, icon: "🐈‍⬛", effect: { type: "coin", value: 2 } },
  { id: "cat_shiro", name: "Shiro", description: "Mèo trắng. +5% Xu", cost: 5e3, icon: "🐱", effect: { type: "coin", value: 5 } }
];
const AJL_MECHA_PARTS = [
  { id: "mecha_head", name: "Đầu cảm biến", description: "Tăng chính xác. +10% XP", baseCost: 1e3, icon: "🤖", effect: { type: "xp", value: 10 } },
  { id: "mecha_core", name: "Lõi nhiệt hạch", description: "Nguồn năng lượng. +10% Xu", baseCost: 1e3, icon: "🔋", effect: { type: "coin", value: 10 } },
  { id: "mecha_arms", name: "Cánh tay Plasma", description: "Thêm sát thương. +10% sát thương Trùm", baseCost: 1e3, icon: "🦾", effect: { type: "boss-damage", value: 10 } },
  { id: "mecha_legs", name: "Chân động cơ đẩy", description: "Di chuyển nhanh. +5% toàn bộ chỉ số", baseCost: 2e3, icon: "🦿", effect: { type: "all", value: 5 } }
];
const AJL_BOUNTIES = [
  { id: "bounty-kanji", icon: "📜", title: "Tiêu diệt Ma Kanji", target: 20, reward: 100, trackKey: "kanjiBattleKills" },
  { id: "bounty-typing", icon: "⌨️", title: "Bậc thầy Gõ Ninja", target: 50, reward: 150, trackKey: "ninjaTypingScore" },
  { id: "bounty-izakaya", icon: "🍽️", title: "Phục vụ khách hàng", target: 30, reward: 120, trackKey: "izakayaServed" }
];
const AJL_MANGA_CHAPTERS = [
  { id: "manga_1", title: "Cuộc Gặp Gỡ Đầu Tiên", difficulty: "N5", reward: 100 },
  { id: "manga_2", title: "Hành Trình Mới", difficulty: "N5", reward: 150 },
  { id: "manga_3", title: "Sức Mạnh Ẩn Giấu", difficulty: "N4", reward: 300 }
];
const AJL_TOWN_SCENARIOS = [
  {
    id: "sushi-restaurant",
    icon: "🍣",
    name: "🍣 Nhà hàng Sushi",
    description: "Vào nhà hàng sushi và gọi món bằng tiếng Nhật.",
    objective: "Gọi thành công 2 món sushi và thanh toán.",
    reward: { coins: 100, xp: 50 },
    systemPrompt: `Bạn là nhân viên phục vụ tại nhà hàng sushi ở Tokyo. Nói tiếng Nhật đơn giản (N4-N5). Chào khách, hỏi muốn gọi gì, giới thiệu menu. Khi khách gọi được 2 món và hỏi thanh toán, hãy thêm [OBJECTIVE_COMPLETE] vào cuối tin nhắn.`,
    greeting: "いらっしゃいませ！何名様ですか？",
    keywords: ["すし", "注文", "お会計", "メニュー", "おすすめ"]
  },
  {
    id: "convenience-store",
    icon: "🏪",
    name: "🏪 Cửa hàng tiện lợi",
    description: "Mua đồ tại konbini và hỏi lấy túi.",
    objective: "Mua ít nhất 1 món và hỏi xin túi đựng (袋).",
    reward: { coins: 100, xp: 50 },
    systemPrompt: `Bạn là nhân viên konbini ở Nhật. Nói tiếng Nhật đơn giản (N4-N5). Hỏi khách cần gì, tính tiền. Khi khách hỏi túi (袋/ふくろ), hãy thêm [OBJECTIVE_COMPLETE] vào cuối tin nhắn.`,
    greeting: "いらっしゃいませ！",
    keywords: ["袋", "ふくろ", "レジ", "温める", "ポイントカード"]
  },
  {
    id: "train-station",
    icon: "🚉",
    name: "🚉 Ga tàu",
    description: "Hỏi đường đến Shinjuku tại ga tàu.",
    objective: "Hỏi được đường đi đến 新宿 (Shinjuku).",
    reward: { coins: 150, xp: 75 },
    systemPrompt: `Bạn là nhân viên tại ga tàu ở Tokyo. Nói tiếng Nhật đơn giản (N4-N5). Giúp khách tìm đường. Khi khách hỏi được cách đi đến 新宿 (Shinjuku) và bạn đã chỉ đường, hãy thêm [OBJECTIVE_COMPLETE] vào cuối tin nhắn.`,
    greeting: "はい、どうしましたか？",
    keywords: ["新宿", "乗り換え", "ホーム", "切符", "電車"]
  }
];
const AJL_ANIME_QUOTES = [
  { jp: "おれは海賊王になる！", romaji: "Ore wa kaizoku-ou ni naru!", meaning: "Tao sẽ trở thành Vua Hải Tặc!", anime: "One Piece", character: "Luffy" },
  { jp: "だってばよ！", romaji: "Dattebayo!", meaning: "Tin tao đi!", anime: "Naruto", character: "Naruto" },
  { jp: "真実はいつもひとつ！", romaji: "Shinjitsu wa itsumo hitotsu!", meaning: "Sự thật chỉ có một!", anime: "Detective Conan", character: "Conan" },
  { jp: "お前はもう死んでいる", romaji: "Omae wa mou shindeiru", meaning: "Mày đã chết rồi.", anime: "Fist of the North Star", character: "Kenshiro" },
  { jp: "なんでもは知らないわよ、知ってることだけ", romaji: "Nandemo wa shiranai wa yo, shitteru koto dake", meaning: "Tao không biết hết, chỉ biết những gì tao biết thôi.", anime: "Monogatari", character: "Hanekawa" },
  { jp: "逃げちゃだめだ", romaji: "Nigecha dame da", meaning: "Không được chạy trốn!", anime: "Evangelion", character: "Shinji" },
  { jp: "かめはめ波！", romaji: "Kamehameha!", meaning: "Kamehameha!", anime: "Dragon Ball", character: "Goku" },
  { jp: "人は誰かに必要とされた時に強くなれる", romaji: "Hito wa dareka ni hitsuyou to sareta toki ni tsuyoku nareru", meaning: "Con người mạnh lên khi được ai đó cần đến.", anime: "Naruto", character: "Haku" },
  { jp: "あきらめたらそこで試合終了ですよ", romaji: "Akirametara soko de shiai shuuryou desu yo", meaning: "Nếu bỏ cuộc, trận đấu kết thúc tại đó.", anime: "Slam Dunk", character: "Anzai-sensei" },
  { jp: "私の名前はキラです", romaji: "Watashi no namae wa Kira desu", meaning: "Tên tôi là Kira.", anime: "Death Note", character: "Light" },
  { jp: "この世界は残酷だ。そして美しい", romaji: "Kono sekai wa zankoku da. Soshite utsukushii", meaning: "Thế giới này tàn khốc. Nhưng cũng rất đẹp.", anime: "Attack on Titan", character: "Mikasa" },
  { jp: "等価交換だ", romaji: "Touka koukan da", meaning: "Trao đổi ngang giá.", anime: "Fullmetal Alchemist", character: "Edward" },
  { jp: "月がきれいですね", romaji: "Tsuki ga kirei desu ne", meaning: "Trăng đẹp quá nhỉ. (= Tôi yêu bạn)", anime: "Japanese Literature", character: "Natsume Souseki" },
  { jp: "俺の屍を超えてゆけ", romaji: "Ore no shikabane wo koete yuke", meaning: "Hãy bước qua xác ta mà đi.", anime: "Various", character: "Classic phrase" },
  { jp: "さすがお兄様です", romaji: "Sasuga Onii-sama desu", meaning: "Quả không hổ danh anh trai.", anime: "Mahouka", character: "Miyuki" }
];
const AJL_IZAKAYA_MENU = [
  { id: "beer", jp: "ビール", meaning: "Bia", icon: "🍺", romaji: "biiru" },
  { id: "sake", jp: "お酒", meaning: "Rượu sake", icon: "🍶", romaji: "osake" },
  { id: "edamame", jp: "枝豆", meaning: "Đậu nành luộc", icon: "🫘", romaji: "edamame" },
  { id: "yakitori", jp: "焼き鳥", meaning: "Gà nướng xiên", icon: "🍢", romaji: "yakitori" },
  { id: "gyoza", jp: "餃子", meaning: "Há cảo", icon: "🥟", romaji: "gyouza" },
  { id: "ramen", jp: "ラーメン", meaning: "Mì ramen", icon: "🍜", romaji: "raamen" },
  { id: "tempura", jp: "天ぷら", meaning: "Tempura", icon: "🍤", romaji: "tenpura" },
  { id: "sashimi", jp: "刺身", meaning: "Sashimi", icon: "🐟", romaji: "sashimi" },
  { id: "onigiri", jp: "おにぎり", meaning: "Cơm nắm", icon: "🍙", romaji: "onigiri" },
  { id: "takoyaki", jp: "たこ焼き", meaning: "Bánh bạch tuộc", icon: "🐙", romaji: "takoyaki" },
  { id: "okonomiyaki", jp: "お好み焼き", meaning: "Bánh xèo Nhật", icon: "🥞", romaji: "okonomiyaki" },
  { id: "miso", jp: "味噌汁", meaning: "Súp miso", icon: "🍲", romaji: "misoshiru" }
];
const AJL_SUSHI_TYPES = [
  { id: "maguro", jp: "マグロ", meaning: "Cá ngừ", icon: "🍣", romaji: "maguro" },
  { id: "salmon", jp: "サーモン", meaning: "Cá hồi", icon: "🍣", romaji: "saamon" },
  { id: "ebi", jp: "エビ", meaning: "Tôm", icon: "🦐", romaji: "ebi" },
  { id: "tamago", jp: "卵", meaning: "Trứng", icon: "🥚", romaji: "tamago" },
  { id: "ika", jp: "イカ", meaning: "Mực", icon: "🦑", romaji: "ika" },
  { id: "uni", jp: "ウニ", meaning: "Nhím biển", icon: "🟡", romaji: "uni" },
  { id: "unagi", jp: "うなぎ", meaning: "Lươn", icon: "🐍", romaji: "unagi" },
  { id: "hotate", jp: "ホタテ", meaning: "Sò điệp", icon: "🐚", romaji: "hotate" }
];
function getAjlYokaiById(id) {
  return AJL_YOKAI.find((y) => y.id === id) || null;
}
function getAjlSkillById(id) {
  return AJL_SKILLS.find((s) => s.id === id) || null;
}
function canUnlockSkill(skillId, unlockedSkills) {
  const skill = getAjlSkillById(skillId);
  if (!skill) return false;
  return skill.req.every((reqId) => unlockedSkills.includes(reqId));
}
const DAILY_DEALS_COUNT = 3;
const DAILY_DEAL_POOL = [
  // Item discounts (buy items at reduced coin cost)
  { id: "dd_shards_bundle", type: "material", icon: "⚗️", label: "Gói Mảnh Thường x5", originalCost: 100, discountedCost: 70, payload: { shardCommon: 5 } },
  { id: "dd_crystal_bundle", type: "material", icon: "💎", label: "Gói Tinh Thể Hiếm x2", originalCost: 150, discountedCost: 100, payload: { crystalRare: 2 } },
  { id: "dd_epic_gem", type: "material", icon: "🔮", label: "Đá Sử Thi x1", originalCost: 200, discountedCost: 140, payload: { epicGem: 1 } },
  { id: "dd_legendary_core", type: "material", icon: "⭐", label: "Lõi Huyền Thoại x1", originalCost: 350, discountedCost: 250, payload: { legendaryCore: 1 } },
  { id: "dd_coins_200", type: "coins", icon: "🪙", label: "Gấp đôi 200 xu", originalCost: 180, discountedCost: 180, payload: { coins: 200 }, bonus: "Tặng thêm 50 xu!" },
  { id: "dd_gacha_ticket", type: "powerup", icon: "🎫", label: "Vé Gacha x1", originalCost: 120, discountedCost: 80, payload: { gacha_ticket: 1 } },
  { id: "dd_xp_boost", type: "powerup", icon: "⚡", label: "XP Boost 2× (30 phút)", originalCost: 100, discountedCost: 65, payload: { xp_boost_30: 1 } },
  { id: "dd_shards_large", type: "material", icon: "⚗️", label: "Gói Mảnh Thường x10", originalCost: 180, discountedCost: 120, payload: { shardCommon: 10 } },
  { id: "dd_crystal_small", type: "material", icon: "💎", label: "Tinh Thể Hiếm x1", originalCost: 80, discountedCost: 55, payload: { crystalRare: 1 } },
  { id: "dd_mixed_bundle", type: "material", icon: "🎁", label: "Hỗn Hợp Nguyên Liệu", originalCost: 250, discountedCost: 180, payload: { shardCommon: 3, crystalRare: 1 } },
  { id: "dd_coin_small", type: "coins", icon: "🪙", label: "Túi Xu 100", originalCost: 90, discountedCost: 90, payload: { coins: 100 }, bonus: "Tặng thêm 20 xu!" },
  { id: "dd_luck_potion", type: "powerup", icon: "🍀", label: "Bùa May Mắn (Gacha +)", originalCost: 130, discountedCost: 90, payload: { luck_potion: 1 } }
];
function getDailyDeals(dateStr) {
  const seed = dateStr.split("-").reduce((acc, n, i) => acc + parseInt(n) * (i + 1) * 31, 0);
  let s = seed >>> 0;
  function rand() {
    s += 1831565813;
    let t = Math.imul(s ^ s >>> 15, 1 | s);
    t ^= t + Math.imul(t ^ t >>> 7, 61 | t);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
  const pool = [...DAILY_DEAL_POOL];
  const result = [];
  while (result.length < DAILY_DEALS_COUNT && pool.length > 0) {
    const idx = Math.floor(rand() * pool.length);
    result.push({ ...pool[idx] });
    pool.splice(idx, 1);
  }
  return result;
}
const SCRATCH_CONFIG = {
  cardCost: 30,
  // coins per scratch card
  dailyLimit: 3
};
const SCRATCH_SYMBOLS = [
  { id: "coin50", icon: "🪙", label: "50 xu", weight: 20, reward: { coins: 50 } },
  { id: "coin100", icon: "💰", label: "100 xu", weight: 12, reward: { coins: 100 } },
  { id: "coin200", icon: "💵", label: "200 xu", weight: 7, reward: { coins: 200 } },
  { id: "shard", icon: "⚗️", label: "Mảnh Thường ×2", weight: 15, reward: { shardCommon: 2 } },
  { id: "crystal", icon: "💎", label: "Tinh Thể ×1", weight: 8, reward: { crystalRare: 1 } },
  { id: "epic", icon: "🔮", label: "Đá Sử Thi ×1", weight: 3, reward: { epicGem: 1 } },
  { id: "legendary", icon: "⭐", label: "Lõi HT ×1", weight: 1, reward: { legendaryCore: 1 } },
  { id: "xp50", icon: "⚡", label: "+50 XP", weight: 14, reward: { xp: 50 } },
  { id: "nothing", icon: "❌", label: "Trượt", weight: 20, reward: {} }
];
function generateScratchGrid() {
  const winPool = SCRATCH_SYMBOLS.filter((s) => s.id !== "nothing");
  const totalW = winPool.reduce((a, s) => a + s.weight, 0);
  let r = Math.random() * totalW;
  let winner = winPool[winPool.length - 1];
  for (const sym of winPool) {
    r -= sym.weight;
    if (r <= 0) {
      winner = sym;
      break;
    }
  }
  const isWin = Math.random() < 0.25;
  const cells = [];
  if (isWin) {
    const positions = [...Array(9).keys()];
    const winPositions = [];
    for (let i = 0; i < 3; i++) {
      const idx = Math.floor(Math.random() * positions.length);
      winPositions.push(positions.splice(idx, 1)[0]);
    }
    for (let i = 0; i < 9; i++) {
      if (winPositions.includes(i)) {
        cells.push(winner.id);
      } else {
        cells.push(pickRandomSymbol(winner.id));
      }
    }
  } else {
    for (let i = 0; i < 9; i++) {
      let sym;
      let tries = 0;
      do {
        sym = pickRandomSymbol(null);
        tries++;
      } while (tries < 20 && cells.filter((c) => c === sym).length >= 2);
      cells.push(sym);
    }
  }
  return cells;
}
function pickRandomSymbol(exclude) {
  const pool = SCRATCH_SYMBOLS.filter((s) => s.id !== exclude);
  const total = pool.reduce((a, s) => a + s.weight, 0);
  let r = Math.random() * total;
  for (const sym of pool) {
    r -= sym.weight;
    if (r <= 0) return sym.id;
  }
  return pool[pool.length - 1].id;
}
function evalScratchResult(cells) {
  const counts = {};
  for (const c of cells) counts[c] = (counts[c] || 0) + 1;
  const match = Object.entries(counts).find(([, v]) => v >= 3);
  if (!match) return null;
  const sym = SCRATCH_SYMBOLS.find((s) => s.id === match[0]);
  return sym ? sym.reward : null;
}
const TREASURE_CONFIG = {
  gridCols: 5,
  gridRows: 5,
  digCost: 15,
  // coins per dig
  dailyLimit: 10,
  // max digs per day
  bonusChestAt: 8
  // guaranteed bonus chest if digs >= this
};
const TREASURE_LOOT = [
  { id: "coins_20", icon: "🪙", label: "+20 xu", weight: 22, reward: { coins: 20 } },
  { id: "coins_50", icon: "💰", label: "+50 xu", weight: 15, reward: { coins: 50 } },
  { id: "coins_100", icon: "💵", label: "+100 xu", weight: 7, reward: { coins: 100 } },
  { id: "shard", icon: "⚗️", label: "Mảnh Thường ×1", weight: 18, reward: { shardCommon: 1 } },
  { id: "crystal", icon: "💎", label: "Tinh Thể ×1", weight: 9, reward: { crystalRare: 1 } },
  { id: "epic", icon: "🔮", label: "Đá Sử Thi ×1", weight: 3, reward: { epicGem: 1 } },
  { id: "xp_30", icon: "⚡", label: "+30 XP", weight: 12, reward: { xp: 30 } },
  { id: "empty", icon: "🪨", label: "Đất trống", weight: 14, reward: {} }
];
const TREASURE_BONUS_CHEST = { coins: 80, crystalRare: 1 };
const TREASURE_HEAT = {
  treasure: { icon: "💎", label: "Kho báu!", color: "#f59e0b" },
  hot: { icon: "🔥", label: "Nóng!", color: "#ef4444" },
  warm: { icon: "☀️", label: "Ấm áp", color: "#f97316" },
  cold: { icon: "❄️", label: "Lạnh", color: "#3b82f6" }
};
function generateTreasureGrid() {
  const total = TREASURE_CONFIG.gridCols * TREASURE_CONFIG.gridRows;
  const positions = [...Array(total).keys()];
  const treasurePositions = [];
  for (let i = 0; i < 3; i++) {
    const idx = Math.floor(Math.random() * positions.length);
    treasurePositions.push(positions.splice(idx, 1)[0]);
  }
  return { treasurePositions, dug: [] };
}
function pickDigReward() {
  const total = TREASURE_LOOT.reduce((a, l) => a + l.weight, 0);
  let r = Math.random() * total;
  for (const loot of TREASURE_LOOT) {
    r -= loot.weight;
    if (r <= 0) return loot;
  }
  return TREASURE_LOOT[TREASURE_LOOT.length - 1];
}
function getHeat(flatIdx, treasurePositions, cols = TREASURE_CONFIG.gridCols) {
  if (treasurePositions.includes(flatIdx)) return "treasure";
  const row = Math.floor(flatIdx / cols);
  const col = flatIdx % cols;
  let minDist = Infinity;
  for (const t of treasurePositions) {
    const tr = Math.floor(t / cols);
    const tc = t % cols;
    const d = Math.abs(row - tr) + Math.abs(col - tc);
    if (d < minDist) minDist = d;
  }
  if (minDist === 1) return "hot";
  if (minDist === 2) return "warm";
  return "cold";
}
const DEFAULT_MATERIALS = Object.freeze({
  shardCommon: 0,
  crystalRare: 0,
  epicGem: 0,
  legendaryCore: 0
});
const DEFAULT_DAILY_DEALS = Object.freeze({
  date: null,
  deals: [],
  claimed: []
});
function buildDefaultBounties() {
  return AJL_BOUNTIES.map((bounty) => ({
    ...bounty,
    progress: 0,
    completed: false,
    claimed: false
  }));
}
const createCraftingSlice = (set, get) => ({
  materials: { ...DEFAULT_MATERIALS },
  enchantments: {},
  dailyDeals: { ...DEFAULT_DAILY_DEALS },
  scratchCardsToday: 0,
  lastScratchDate: null,
  treasureHuntGrid: null,
  lastTreasureDate: null,
  treasureDigsToday: 0,
  skillPoints: 0,
  unlockedSkills: [],
  faction: null,
  villageBuildings: [],
  lastVillageCollect: null,
  bounties: buildDefaultBounties(),
  lastBountyReset: null,
  yokaiAffection: {},
  equippedYokai: null,
  equippedWeapon: null,
  equippedArmor: null,
  equippedBackground: null,
  equippedTitle: null,
  ownedOrigami: [],
  ramenIngredients: {},
  ownedCats: [],
  mechaParts: {},
  bossDamage: 0,
  recycleItem: (itemId, rarity, originalPrice) => {
    let success = false;
    set((s) => {
      const owned = s.unlockedItems || {};
      if (!owned[itemId]) return {};
      const equipped = s.equippedCosmetics || {};
      if (Object.values(equipped).includes(itemId)) return {};
      const yield_ = RECYCLE_YIELD[rarity] || { shardCommon: 1 };
      const coinRefund = Math.floor((originalPrice || 0) * RECYCLE_COIN_REFUND_PCT);
      const newMaterials = { ...s.materials || {} };
      for (const [k, v] of Object.entries(yield_)) {
        newMaterials[k] = (newMaterials[k] || 0) + v;
      }
      success = true;
      const logEntry = buildEconomyLogEntry("earn", coinRefund, "recycle", { itemId, rarity });
      const nextLog = [...s.economyLog || [], logEntry];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      const { [itemId]: _removed, ...remainingItems } = owned;
      return {
        unlockedItems: remainingItems,
        materials: newMaterials,
        coins: (s.coins || 0) + coinRefund,
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  craftItem: (recipeId) => {
    let result = null;
    set((s) => {
      const recipe = CRAFT_RECIPES.find((r) => r.id === recipeId);
      if (!recipe) return {};
      const owned = s.unlockedItems || {};
      if (owned[recipeId]) return {};
      const mats = { ...s.materials || {} };
      const cost = recipe.cost || {};
      for (const [k, v] of Object.entries(cost)) {
        if (k === "coins") continue;
        if ((mats[k] || 0) < v) return {};
      }
      const coinCost = cost.coins || 0;
      if ((s.coins || 0) < coinCost) return {};
      for (const [k, v] of Object.entries(cost)) {
        if (k !== "coins") mats[k] = (mats[k] || 0) - v;
      }
      result = recipe;
      const logEntry = buildEconomyLogEntry("spend", coinCost, "craft", { recipeId });
      const nextLog = [...s.economyLog || [], logEntry];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      return {
        materials: mats,
        coins: (s.coins || 0) - coinCost,
        unlockedItems: { ...owned, [recipeId]: Date.now() },
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return result;
  },
  enchantItem: (itemId, toLevel) => {
    let success = false;
    set((s) => {
      const owned = s.unlockedItems || {};
      if (!owned[itemId]) return {};
      const currentLevel = (s.enchantments || {})[itemId] || 0;
      if (toLevel !== currentLevel + 1 || toLevel > 3) return {};
      const cost = ENCHANT_COSTS[toLevel];
      if (!cost) return {};
      const mats = { ...s.materials || {} };
      for (const [k, v] of Object.entries(cost)) {
        if (k === "coins") continue;
        if ((mats[k] || 0) < v) return {};
      }
      const coinCost = cost.coins || 0;
      if ((s.coins || 0) < coinCost) return {};
      for (const [k, v] of Object.entries(cost)) {
        if (k !== "coins") mats[k] = (mats[k] || 0) - v;
      }
      success = true;
      const logEntry = buildEconomyLogEntry("spend", coinCost, "enchant", { itemId, level: toLevel });
      const nextLog = [...s.economyLog || [], logEntry];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      return {
        materials: mats,
        coins: (s.coins || 0) - coinCost,
        enchantments: { ...s.enchantments || {}, [itemId]: toLevel },
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  fuseItems: (itemId1, itemId2, rarity) => {
    let result = null;
    set((s) => {
      const config = FUSION_CONFIG[rarity];
      if (!config) return {};
      const owned = s.unlockedItems || {};
      if (!owned[itemId1] || !owned[itemId2]) return {};
      if (itemId1 === itemId2) return {};
      const mats = { ...s.materials || {} };
      const extra = config.extraCost || {};
      for (const [k, v] of Object.entries(extra)) {
        if (k === "coins") continue;
        if ((mats[k] || 0) < v) return {};
      }
      const coinCost = extra.coins || 0;
      if ((s.coins || 0) < coinCost) return {};
      for (const [k, v] of Object.entries(extra)) {
        if (k !== "coins") mats[k] = (mats[k] || 0) - v;
      }
      const success = Math.random() < config.successRate;
      const { [itemId1]: _a2, [itemId2]: _b2, ...newOwned } = owned;
      if (!success) {
        const refundMat = rarity === "legendary" ? "epicGem" : rarity === "epic" ? "crystalRare" : "shardCommon";
        mats[refundMat] = (mats[refundMat] || 0) + 1;
      }
      result = { success, upgradedRarity: success ? config.upgradeTo : null };
      const logEntry = buildEconomyLogEntry("spend", coinCost, "fuse", { itemId1, itemId2, rarity, success });
      const nextLog = [...s.economyLog || [], logEntry];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      return {
        materials: mats,
        coins: (s.coins || 0) - coinCost,
        unlockedItems: newOwned,
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return result;
  },
  claimDeal: (dealId, cost, payload) => {
    let success = false;
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    set((s) => {
      const dd = s.dailyDeals || { date: null, deals: [], claimed: [] };
      if (dd.claimed.includes(dealId)) return {};
      if ((s.coins || 0) < cost) return {};
      const newMats = { ...s.materials || {} };
      let bonusCoins = 0;
      for (const [k, v] of Object.entries(payload || {})) {
        if (k === "coins") bonusCoins += v;
        else if (k in newMats) newMats[k] = (newMats[k] || 0) + v;
      }
      success = true;
      const logEntry = buildEconomyLogEntry("spend", cost, "daily-deal", { dealId });
      const nextLog = [...s.economyLog || [], logEntry];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      return {
        coins: (s.coins || 0) - cost + bonusCoins,
        materials: newMats,
        dailyDeals: { ...dd, date: today, claimed: [...dd.claimed, dealId] },
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  scratchCard: (reward) => {
    let success = false;
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    set((s) => {
      const lastDate = s.lastScratchDate;
      const usedToday = lastDate === today ? s.scratchCardsToday || 0 : 0;
      if (usedToday >= SCRATCH_CONFIG.dailyLimit) return {};
      if ((s.coins || 0) < SCRATCH_CONFIG.cardCost) return {};
      const newMats = { ...s.materials || {} };
      let bonusCoins = -30;
      let xpGain = 0;
      for (const [k, v] of Object.entries(reward || {})) {
        if (k === "coins") bonusCoins += v;
        else if (k === "xp") xpGain += v;
        else if (k in newMats) newMats[k] = (newMats[k] || 0) + v;
      }
      success = true;
      const logEntry = buildEconomyLogEntry(bonusCoins > 0 ? "earn" : "spend", Math.abs(bonusCoins), "scratch", { reward });
      const nextLog = [...s.economyLog || [], logEntry];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      const isNewDay = today !== s.lastActivityDate;
      const baseTodayXp = isNewDay ? 0 : s.todayXp || 0;
      return {
        coins: (s.coins || 0) + bonusCoins,
        xp: (s.xp || 0) + xpGain,
        todayXp: baseTodayXp + xpGain,
        lastActivityDate: today,
        materials: newMats,
        scratchCardsToday: usedToday + 1,
        lastScratchDate: today,
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  digTreasure: (flatIdx, reward, isTreasure, bonusChest) => {
    let success = false;
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    set((s) => {
      const lastDate = s.lastTreasureDate;
      const digsToday = lastDate === today ? s.treasureDigsToday || 0 : 0;
      if (digsToday >= TREASURE_CONFIG.dailyLimit) return {};
      if ((s.coins || 0) < TREASURE_CONFIG.digCost) return {};
      const grid = s.treasureHuntGrid || { treasurePositions: [], dug: [] };
      if (grid.dug.includes(flatIdx)) return {};
      const newMats = { ...s.materials || {} };
      let coinDelta = -15;
      let xpGain = 0;
      const allRewards = [reward, bonusChest].filter(Boolean);
      for (const r of allRewards) {
        for (const [k, v] of Object.entries(r || {})) {
          if (k === "coins") coinDelta += v;
          else if (k === "xp") xpGain += v;
          else if (k in newMats) newMats[k] = (newMats[k] || 0) + v;
        }
      }
      success = true;
      const logEntry = buildEconomyLogEntry(coinDelta >= 0 ? "earn" : "spend", Math.abs(coinDelta), "treasure", { flatIdx, isTreasure });
      const nextLog = [...s.economyLog || [], logEntry];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      const isNewDay = today !== s.lastActivityDate;
      const baseTodayXp = isNewDay ? 0 : s.todayXp || 0;
      return {
        coins: (s.coins || 0) + coinDelta,
        xp: (s.xp || 0) + xpGain,
        todayXp: baseTodayXp + xpGain,
        lastActivityDate: today,
        materials: newMats,
        treasureHuntGrid: { ...grid, dug: [...grid.dug, flatIdx] },
        treasureDigsToday: digsToday + 1,
        lastTreasureDate: today,
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  initTreasureGrid: (gridData) => set(() => ({
    treasureHuntGrid: gridData,
    lastTreasureDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    treasureDigsToday: 0,
    lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
  })),
  exchangeMaterials: (fromMat, toMat, fromQty, toQty) => {
    let success = false;
    set((s) => {
      const mats = { ...s.materials || {} };
      if ((mats[fromMat] || 0) < fromQty) return {};
      mats[fromMat] = (mats[fromMat] || 0) - fromQty;
      mats[toMat] = (mats[toMat] || 0) + toQty;
      success = true;
      return {
        materials: mats,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  grantSkillPoint: (amount = 1) => set((s) => ({
    skillPoints: (s.skillPoints || 0) + amount
  })),
  unlockSkill: (skillId) => {
    let success = false;
    set((s) => {
      const skill = getAjlSkillById(skillId);
      if (!skill) return {};
      if (s.unlockedSkills.includes(skillId)) return {};
      if (s.skillPoints < skill.cost) return {};
      if (!canUnlockSkill(skillId, s.unlockedSkills)) return {};
      success = true;
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("spend", 0, "skill-unlock", { skillId })];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      return {
        skillPoints: s.skillPoints - skill.cost,
        unlockedSkills: [...s.unlockedSkills, skillId],
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  hasSkill: (skillId) => (get().unlockedSkills || []).includes(skillId),
  chooseFaction: (factionId) => {
    if (get().faction) return false;
    set({ faction: factionId, lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString() });
    return true;
  },
  buildVillage: (buildingId) => {
    const building = AJL_BUILDINGS.find((b) => b.id === buildingId);
    if (!building) return false;
    let success = false;
    set((s) => {
      if (s.villageBuildings.includes(buildingId)) return {};
      if (s.coins < building.price) return {};
      success = true;
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("spend", building.price, "village-build", { buildingId })];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      return {
        coins: s.coins - building.price,
        villageBuildings: [...s.villageBuildings, buildingId],
        lastVillageCollect: Date.now(),
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  collectVillageIncome: () => set((s) => {
    if ((s.villageBuildings || []).length === 0) return {};
    const now = Date.now();
    const lastCollect = s.lastVillageCollect || now;
    const elapsedHours = Math.min(24, (now - lastCollect) / 36e5);
    if (elapsedHours < 0.01) return {};
    let totalCoins = 0;
    let totalXp = 0;
    for (const bId of s.villageBuildings) {
      const b = AJL_BUILDINGS.find((x) => x.id === bId);
      if (!b) continue;
      if (b.incomeType === "coins") totalCoins += Math.floor(b.incomePerHour * elapsedHours);
      if (b.incomeType === "xp") totalXp += Math.floor(b.incomePerHour * elapsedHours);
    }
    if (totalCoins === 0 && totalXp === 0) return {};
    const nextLog = [...s.economyLog || [], buildEconomyLogEntry("earn", totalCoins, "village-income", { hours: Math.round(elapsedHours * 10) / 10, xp: totalXp })];
    if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const isNewDay = today !== s.lastActivityDate;
    const baseTodayXp = isNewDay ? 0 : s.todayXp || 0;
    return {
      coins: (s.coins || 0) + totalCoins,
      xp: (s.xp || 0) + totalXp,
      todayXp: baseTodayXp + totalXp,
      lastActivityDate: today,
      lastVillageCollect: now,
      economyLog: nextLog,
      lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }),
  updateBountyProgress: (bountyId, amount = 1) => set((s) => {
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    let bounties = s.bounties || [];
    if (s.lastBountyReset !== today) {
      bounties = AJL_BOUNTIES.map((b) => ({ ...b, progress: 0, completed: false, claimed: false }));
    }
    const updated = bounties.map((b) => {
      if (b.id !== bountyId || b.completed) return b;
      const newProgress = Math.min(b.target, b.progress + amount);
      return { ...b, progress: newProgress, completed: newProgress >= b.target };
    });
    return {
      bounties: updated,
      lastBountyReset: today,
      lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }),
  claimBountyReward: (bountyId) => {
    let success = false;
    set((s) => {
      const bountiesList = s.bounties || [];
      const bounty = bountiesList.find((b) => b.id === bountyId);
      if (!bounty || !bounty.completed || bounty.claimed) return {};
      success = true;
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("earn", bounty.reward, "bounty-claim", { bountyId })];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      return {
        coins: (s.coins || 0) + bounty.reward,
        bounties: bountiesList.map((b) => b.id === bountyId ? { ...b, claimed: true } : b),
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  feedYokai: (yokaiId, foodItem) => {
    if (!foodItem || !foodItem.affection) return false;
    let success = false;
    set((s) => {
      if (s.coins < foodItem.price) return {};
      success = true;
      const currentAffection = (s.yokaiAffection || {})[yokaiId] || 0;
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("spend", foodItem.price, "yokai-feed", { yokaiId, food: foodItem.id })];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      return {
        coins: s.coins - foodItem.price,
        yokaiAffection: { ...s.yokaiAffection || {}, [yokaiId]: currentAffection + foodItem.affection },
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  petYokai: (yokaiId) => set((s) => ({
    yokaiAffection: { ...s.yokaiAffection || {}, [yokaiId]: ((s.yokaiAffection || {})[yokaiId] || 0) + 2 },
    lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
  })),
  equipYokai: (yokaiId) => set({ equippedYokai: yokaiId, lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString() }),
  getYokaiLevel: (yokaiId) => Math.floor(((get().yokaiAffection || {})[yokaiId] || 0) / 100) + 1,
  equipGear: (category, itemId) => {
    const validCategories = ["weapon", "armor", "background", "title"];
    if (!validCategories.includes(category)) return false;
    const key = category === "weapon" ? "equippedWeapon" : category === "armor" ? "equippedArmor" : category === "background" ? "equippedBackground" : "equippedTitle";
    set({ [key]: itemId, lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString() });
    return true;
  },
  unequipGear: (category) => {
    const key = category === "weapon" ? "equippedWeapon" : category === "armor" ? "equippedArmor" : category === "background" ? "equippedBackground" : "equippedTitle";
    set({ [key]: null, lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString() });
  },
  craftOrigami: (origamiItem) => {
    if (!origamiItem) return false;
    let success = false;
    set((s) => {
      if (s.ownedOrigami.includes(origamiItem.id)) return {};
      if (s.coins < origamiItem.cost) return {};
      success = true;
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("spend", origamiItem.cost, "origami-craft", { origamiId: origamiItem.id })];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      return {
        coins: s.coins - origamiItem.cost,
        ownedOrigami: [...s.ownedOrigami, origamiItem.id],
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  buyRamenIngredient: (ingredientId, cost) => {
    const key = String(ingredientId || "").trim();
    const value = Math.max(0, Math.round(Number(cost) || 0));
    if (!key || value <= 0) return false;
    const paid = get().spendCoins(value, "ramen-ingredient");
    if (!paid) return false;
    set((s) => ({
      ramenIngredients: {
        ...s.ramenIngredients || {},
        [key]: Math.max(0, Math.round(Number((s.ramenIngredients || {})[key]) || 0)) + 1
      }
    }));
    return true;
  },
  cookRamen: (recipe) => {
    const cfg = recipe && typeof recipe === "object" ? recipe : {};
    const needs = cfg.needs || { ing_noodles: 1, ing_broth: 1 };
    const rewardCoins = Math.max(0, Math.round(Number(cfg.rewardCoins) || 300));
    const rewardXp = Math.max(0, Math.round(Number(cfg.rewardXp) || 100));
    let success = false;
    set((s) => {
      const inv = { ...s.ramenIngredients || {} };
      for (const [k, amount] of Object.entries(needs)) {
        const need = Math.max(0, Math.round(Number(amount) || 0));
        if (need > 0 && (inv[k] || 0) < need) return {};
      }
      for (const [k, amount] of Object.entries(needs)) {
        const need = Math.max(0, Math.round(Number(amount) || 0));
        if (need > 0) inv[k] = Math.max(0, (inv[k] || 0) - need);
      }
      success = true;
      return { ramenIngredients: inv };
    });
    if (!success) return false;
    if (rewardCoins > 0) get().addCoins(rewardCoins, "ramen-cook");
    if (rewardXp > 0) get().addXp(rewardXp);
    return true;
  },
  buyCat: (catItem) => {
    if (!catItem) return false;
    let success = false;
    set((s) => {
      if (s.ownedCats.includes(catItem.id)) return {};
      if (s.coins < catItem.cost) return {};
      success = true;
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("spend", catItem.cost, "cat-buy", { catId: catItem.id })];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      return {
        coins: s.coins - catItem.cost,
        ownedCats: [...s.ownedCats, catItem.id],
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  upgradeMechaPart: (partId, cost) => {
    let success = false;
    set((s) => {
      if (s.coins < cost) return {};
      const currentLevel = s.mechaParts[partId] || 0;
      success = true;
      const nextLog = [...s.economyLog || [], buildEconomyLogEntry("spend", cost, "mecha-upgrade", { partId, newLevel: currentLevel + 1 })];
      if (nextLog.length > 200) nextLog.splice(0, nextLog.length - 200);
      return {
        coins: s.coins - cost,
        mechaParts: { ...s.mechaParts || {}, [partId]: currentLevel + 1 },
        economyLog: nextLog,
        lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    });
    return success;
  },
  addBossDamage: (amount) => set((s) => ({
    bossDamage: (s.bossDamage || 0) + Math.max(0, Math.round(amount)),
    lastEconomyChangeAt: (/* @__PURE__ */ new Date()).toISOString()
  }))
});
function createResetLearningState(now = /* @__PURE__ */ new Date(), resetGeneration = 0) {
  return {
    xp: 0,
    level: 1,
    lastAdminXpOverrideTs: null,
    coins: 0,
    powerUps: { ...DEFAULT_POWER_UPS },
    lastDailyClaimDate: null,
    dailyClaimStreak: 0,
    lastAdminCoinOverrideTs: null,
    lastEconomyChangeAt: now.toISOString(),
    questClaims: {},
    weeklyQuestClaims: {},
    milestoneClaims: {},
    economyLog: [],
    economyRevision: 0,
    economyDeviceId: "",
    resetGeneration: Math.max(0, Number(resetGeneration) || 0),
    domainVersions: { learning: 1, economy: 1, srs: 1, world: 1 },
    streak: 0,
    lastStudyDate: null,
    bookmarks: {},
    bookmarkTombstones: {},
    srs: {},
    worldLearningReceipts: {},
    mistakes: {},
    trainerStats: {},
    studyHistory: {},
    studyActivity: {},
    unlockedItems: {},
    achievements: {},
    equippedCosmetics: { ...DEFAULT_EQUIPPED_COSMETICS },
    lastEquippedAt: null,
    lessonProgress: {},
    todayCorrect: 0,
    todayWrong: 0,
    todayXp: 0,
    lastActivityDate: null,
    gameHistory: [],
    dailyActiveMinutes: {},
    activeEffects: {},
    powerUpLevels: {},
    pets: {},
    activePet: null,
    gachaHistory: [],
    gachaPity: { epic: 0, legendary: 0 },
    wheelSpinsToday: 0,
    lastWheelDate: null,
    slotSpinsToday: 0,
    lastSlotDate: null,
    slotPity: 0,
    currentBet: 0,
    bettingEnabled: true,
    vipExpiry: null,
    roomItems: {},
    ownedRoomItems: [],
    collectionClaims: {},
    lastLevelUpBonusLevel: 0,
    todayPowerUps: 0,
    todayPetFed: 0,
    combo: 0,
    maxCombo: 0,
    materials: { ...DEFAULT_MATERIALS },
    enchantments: {},
    dailyDeals: { ...DEFAULT_DAILY_DEALS, deals: [], claimed: [] },
    scratchCardsToday: 0,
    lastScratchDate: null,
    treasureHuntGrid: null,
    lastTreasureDate: null,
    treasureDigsToday: 0,
    skillPoints: 0,
    unlockedSkills: [],
    faction: null,
    villageBuildings: [],
    lastVillageCollect: null,
    bounties: buildDefaultBounties(),
    lastBountyReset: null,
    yokaiAffection: {},
    equippedYokai: null,
    equippedWeapon: null,
    equippedArmor: null,
    equippedBackground: null,
    equippedTitle: null,
    ownedOrigami: [],
    ramenIngredients: {},
    ownedCats: [],
    mechaParts: {},
    bossDamage: 0,
    storyProgress: {},
    mangaProgress: {},
    lastOmikujiDate: null,
    activeBuffs: [],
    senseiAffinity: 0,
    lastVisitedRoute: null
  };
}
function selectPersistedLearningState(state = {}) {
  return {
    xp: state.xp,
    level: state.level,
    lastAdminXpOverrideTs: state.lastAdminXpOverrideTs,
    coins: state.coins,
    powerUps: state.powerUps,
    lastDailyClaimDate: state.lastDailyClaimDate,
    dailyClaimStreak: state.dailyClaimStreak,
    lastAdminCoinOverrideTs: state.lastAdminCoinOverrideTs,
    lastEconomyChangeAt: state.lastEconomyChangeAt,
    questClaims: state.questClaims,
    weeklyQuestClaims: state.weeklyQuestClaims,
    milestoneClaims: state.milestoneClaims,
    economyLog: state.economyLog,
    economyRevision: state.economyRevision,
    economyDeviceId: state.economyDeviceId,
    resetGeneration: state.resetGeneration,
    domainVersions: state.domainVersions,
    streak: state.streak,
    lastStudyDate: state.lastStudyDate,
    bookmarks: state.bookmarks,
    bookmarkTombstones: state.bookmarkTombstones,
    srs: state.srs,
    worldLearningReceipts: state.worldLearningReceipts || {},
    mistakes: state.mistakes || {},
    trainerStats: state.trainerStats,
    studyHistory: state.studyHistory,
    studyActivity: state.studyActivity,
    achievements: state.achievements,
    unlockedItems: state.unlockedItems,
    equippedCosmetics: state.equippedCosmetics,
    lastEquippedAt: state.lastEquippedAt,
    lessonProgress: state.lessonProgress,
    todayCorrect: state.todayCorrect,
    todayWrong: state.todayWrong,
    todayXp: state.todayXp,
    lastActivityDate: state.lastActivityDate,
    gameHistory: state.gameHistory,
    dailyActiveMinutes: state.dailyActiveMinutes,
    activeEffects: state.activeEffects,
    powerUpLevels: state.powerUpLevels,
    pets: state.pets,
    activePet: state.activePet,
    gachaHistory: state.gachaHistory,
    gachaPity: state.gachaPity,
    wheelSpinsToday: state.wheelSpinsToday,
    lastWheelDate: state.lastWheelDate,
    slotSpinsToday: state.slotSpinsToday,
    lastSlotDate: state.lastSlotDate,
    slotPity: state.slotPity,
    currentBet: state.currentBet,
    bettingEnabled: state.bettingEnabled,
    vipExpiry: state.vipExpiry,
    roomItems: state.roomItems,
    ownedRoomItems: state.ownedRoomItems,
    collectionClaims: state.collectionClaims,
    lastLevelUpBonusLevel: state.lastLevelUpBonusLevel,
    todayPowerUps: state.todayPowerUps,
    todayPetFed: state.todayPetFed,
    maxCombo: state.maxCombo,
    materials: state.materials,
    enchantments: state.enchantments,
    dailyDeals: state.dailyDeals,
    scratchCardsToday: state.scratchCardsToday,
    lastScratchDate: state.lastScratchDate,
    treasureHuntGrid: state.treasureHuntGrid,
    lastTreasureDate: state.lastTreasureDate,
    treasureDigsToday: state.treasureDigsToday,
    skillPoints: state.skillPoints,
    unlockedSkills: state.unlockedSkills,
    faction: state.faction,
    villageBuildings: state.villageBuildings,
    lastVillageCollect: state.lastVillageCollect,
    bounties: state.bounties,
    lastBountyReset: state.lastBountyReset,
    yokaiAffection: state.yokaiAffection,
    equippedYokai: state.equippedYokai,
    equippedWeapon: state.equippedWeapon,
    equippedArmor: state.equippedArmor,
    equippedBackground: state.equippedBackground,
    equippedTitle: state.equippedTitle,
    ownedOrigami: state.ownedOrigami,
    ramenIngredients: state.ramenIngredients,
    ownedCats: state.ownedCats,
    mechaParts: state.mechaParts,
    bossDamage: state.bossDamage,
    storyProgress: state.storyProgress,
    mangaProgress: state.mangaProgress,
    lastOmikujiDate: state.lastOmikujiDate,
    activeBuffs: state.activeBuffs,
    senseiAffinity: state.senseiAffinity,
    lastVisitedRoute: state.lastVisitedRoute
  };
}
function isTouchParticleKey(unlockKey) {
  return String(unlockKey || "").startsWith("particle-touch-");
}
function resolveEquippedCosmeticCategory(category, unlockKey) {
  return isTouchParticleKey(unlockKey) ? "particleTouch" : "particleAmbient";
}
function normalizeEquippedCosmetics(equippedCosmetics) {
  const next = {
    ...DEFAULT_EQUIPPED_COSMETICS,
    ...equippedCosmetics && typeof equippedCosmetics === "object" ? equippedCosmetics : {}
  };
  const legacyParticle = next.particle;
  if (legacyParticle) {
    const targetCategory = resolveEquippedCosmeticCategory("particle", legacyParticle);
    if (!next[targetCategory]) next[targetCategory] = legacyParticle;
  }
  delete next.particle;
  return next;
}
function migrateLearningSrsState(persisted, version2, now = Date.now()) {
  if (!persisted || typeof persisted !== "object" || version2 >= 10) return persisted;
  persisted.srs = normalizeSrsMap(persisted.srs, now);
  persisted.domainVersions = {
    learning: 1,
    economy: 1,
    srs: 1,
    world: 1,
    ...persisted.domainVersions || {},
    srs: 2
  };
  return persisted;
}
const useLearningStore = create(
  logger("learning")(persist(
    (set, get) => ({
      ...createLearningSlice(set, get),
      ...createEconomySlice(set, get),
      ...createCosmeticsSlice(set, get),
      ...createMinigamesSlice(set, get),
      ...createCraftingSlice(set, get),
      worldLearningReceipts: {},
      applyWorldLearningResult: (receipt) => applyWorldLearningResult(receipt)
    }),
    {
      name: STORAGE_KEYS.LEARNING_STORE,
      storage: persistStorage,
      version: 11,
      migrate: (persisted, version2) => {
        if (!persisted || typeof persisted !== "object") return persisted;
        migrateLearningSrsState(persisted, version2);
        if (version2 < 11) {
          persisted.studyActivity = persisted.studyActivity && typeof persisted.studyActivity === "object" ? persisted.studyActivity : {};
        }
        if (version2 < 9) {
          persisted.economyRevision = Math.max(0, Number(persisted.economyRevision) || 0);
          persisted.economyDeviceId = persisted.economyDeviceId || "";
          persisted.resetGeneration = Math.max(0, Number(persisted.resetGeneration) || 0);
          persisted.domainVersions = { learning: 1, economy: 1, srs: 1, world: 1, ...persisted.domainVersions || {} };
        }
        if (version2 < 2) {
          persisted.lastAdminXpOverrideTs = persisted.lastAdminXpOverrideTs || null;
          persisted.coins = Number(persisted.coins) || 0;
          persisted.powerUps = { ...DEFAULT_POWER_UPS, ...persisted.powerUps || {} };
          persisted.lastDailyClaimDate = persisted.lastDailyClaimDate || null;
          persisted.dailyClaimStreak = Number(persisted.dailyClaimStreak) || 0;
          persisted.lastAdminCoinOverrideTs = persisted.lastAdminCoinOverrideTs || null;
          persisted.questClaims = persisted.questClaims && typeof persisted.questClaims === "object" ? persisted.questClaims : {};
          persisted.weeklyQuestClaims = persisted.weeklyQuestClaims && typeof persisted.weeklyQuestClaims === "object" ? persisted.weeklyQuestClaims : {};
          persisted.milestoneClaims = persisted.milestoneClaims && typeof persisted.milestoneClaims === "object" ? persisted.milestoneClaims : {};
          persisted.economyLog = Array.isArray(persisted.economyLog) ? persisted.economyLog.slice(-200) : [];
        }
        if (version2 < 3) {
          persisted.powerUps = { ...DEFAULT_POWER_UPS, ...persisted.powerUps || {} };
          persisted.activeEffects = persisted.activeEffects || {};
          persisted.powerUpLevels = persisted.powerUpLevels || {};
          persisted.pets = persisted.pets || {};
          persisted.activePet = persisted.activePet || null;
          persisted.gachaHistory = Array.isArray(persisted.gachaHistory) ? persisted.gachaHistory.slice(-100) : [];
          persisted.gachaPity = persisted.gachaPity || { epic: 0, legendary: 0 };
          persisted.wheelSpinsToday = Number(persisted.wheelSpinsToday) || 0;
          persisted.lastWheelDate = persisted.lastWheelDate || null;
          persisted.slotSpinsToday = Number(persisted.slotSpinsToday) || 0;
          persisted.lastSlotDate = persisted.lastSlotDate || null;
          persisted.slotPity = Number(persisted.slotPity) || 0;
          persisted.currentBet = 0;
          persisted.bettingEnabled = persisted.bettingEnabled || false;
          persisted.vipExpiry = persisted.vipExpiry || null;
          persisted.roomItems = persisted.roomItems || {};
          persisted.ownedRoomItems = Array.isArray(persisted.ownedRoomItems) ? persisted.ownedRoomItems : [];
          persisted.collectionClaims = persisted.collectionClaims || {};
          persisted.lastLevelUpBonusLevel = Number(persisted.lastLevelUpBonusLevel) || 0;
          persisted.todayPowerUps = Number(persisted.todayPowerUps) || 0;
          persisted.todayPetFed = Number(persisted.todayPetFed) || 0;
          if (Array.isArray(persisted.economyLog) && persisted.economyLog.length > 200) {
            persisted.economyLog = persisted.economyLog.slice(-200);
          }
        }
        if (version2 < 4) {
          persisted.powerUps = { ...DEFAULT_POWER_UPS, ...persisted.powerUps || {} };
          persisted.weeklyQuestClaims = normalizeWeeklyQuestClaims(persisted.weeklyQuestClaims);
        }
        if (version2 < 5) {
          const DEFAULT_MATS = { shardCommon: 0, crystalRare: 0, epicGem: 0, legendaryCore: 0 };
          persisted.materials = { ...DEFAULT_MATS, ...persisted.materials || {} };
          persisted.enchantments = persisted.enchantments || {};
          persisted.dailyDeals = persisted.dailyDeals || { date: null, deals: [], claimed: [] };
          persisted.scratchCardsToday = Number(persisted.scratchCardsToday) || 0;
          persisted.lastScratchDate = persisted.lastScratchDate || null;
          persisted.treasureHuntGrid = persisted.treasureHuntGrid || null;
          persisted.lastTreasureDate = persisted.lastTreasureDate || null;
          persisted.treasureDigsToday = Number(persisted.treasureDigsToday) || 0;
        }
        if (version2 < 6) {
          persisted.skillPoints = Number(persisted.skillPoints) || 0;
          persisted.unlockedSkills = Array.isArray(persisted.unlockedSkills) ? persisted.unlockedSkills : [];
          persisted.faction = persisted.faction || null;
          persisted.villageBuildings = Array.isArray(persisted.villageBuildings) ? persisted.villageBuildings : [];
          persisted.lastVillageCollect = persisted.lastVillageCollect || null;
          persisted.bounties = Array.isArray(persisted.bounties) ? persisted.bounties : [];
          persisted.lastBountyReset = persisted.lastBountyReset || null;
          persisted.yokaiAffection = persisted.yokaiAffection || {};
          persisted.equippedYokai = persisted.equippedYokai || null;
          persisted.equippedWeapon = persisted.equippedWeapon || null;
          persisted.equippedArmor = persisted.equippedArmor || null;
          persisted.equippedBackground = persisted.equippedBackground || null;
          persisted.equippedTitle = persisted.equippedTitle || null;
          persisted.ownedOrigami = Array.isArray(persisted.ownedOrigami) ? persisted.ownedOrigami : [];
          persisted.ramenIngredients = persisted.ramenIngredients || {};
          persisted.ownedCats = Array.isArray(persisted.ownedCats) ? persisted.ownedCats : [];
          persisted.mechaParts = persisted.mechaParts || {};
          persisted.bossDamage = Number(persisted.bossDamage) || 0;
          persisted.storyProgress = persisted.storyProgress || {};
          persisted.mangaProgress = persisted.mangaProgress || {};
          persisted.lastOmikujiDate = persisted.lastOmikujiDate || null;
          persisted.activeBuffs = Array.isArray(persisted.activeBuffs) ? persisted.activeBuffs : [];
          persisted.senseiAffinity = Number(persisted.senseiAffinity) || 0;
        }
        if (version2 < 7) {
          persisted.lastVisitedRoute = persisted.lastVisitedRoute || null;
        }
        if (version2 < 8) {
          persisted.equippedCosmetics = normalizeEquippedCosmetics(persisted.equippedCosmetics);
        }
        return persisted;
      },
      partialize: (state) => selectPersistedLearningState(state)
    }
  ))
);
function applyWorldLearningResult(receipt) {
  var _a2, _b2;
  assertLearningOwnerReady();
  const { id, itemKey, independentCorrect, at, activityId, domain } = receipt;
  if (!id || !itemKey || !Number.isFinite(at)) throw new Error("Invalid world assessment");
  const state = useLearningStore.getState();
  const fingerprint = JSON.stringify({ itemKey, independentCorrect, at, activityId, domain });
  if ((_a2 = state.worldLearningReceipts) == null ? void 0 : _a2[id]) {
    if (state.worldLearningReceipts[id] !== fingerprint) throw new Error("Mismatched learning receipt");
    return;
  }
  const day = getStudyDateKey(at), sameDay = state.lastActivityDate === day;
  const previous = ((_b2 = state.mistakes) == null ? void 0 : _b2[itemKey]) || {};
  const patch = {
    ...buildStudyActivityPatch(state, { correct: independentCorrect, at, trainerId: activityId, domain, source: "world-answer" }),
    worldLearningReceipts: { ...state.worldLearningReceipts || {}, [id]: fingerprint },
    lastActivityDate: day,
    todayCorrect: (sameDay ? state.todayCorrect || 0 : 0) + (independentCorrect ? 1 : 0),
    todayWrong: (sameDay ? state.todayWrong || 0 : 0) + (independentCorrect ? 0 : 1),
    mistakes: independentCorrect ? state.mistakes : { ...state.mistakes || {}, [itemKey]: { ...previous, count: (previous.count || 0) + 1, firstWrongAt: previous.firstWrongAt || at, lastWrongAt: at, reviewState: "unresolved" } }
  };
  const options = useLearningStore.persist.getOptions();
  localStorage.setItem(options.name, JSON.stringify({ state: selectPersistedLearningState({ ...state, ...patch }), version: options.version }));
  useLearningStore.setStateWithoutPersist(patch);
}
function applyWorldLearningCompletion(receipt) {
  var _a2, _b2;
  assertLearningOwnerReady();
  const state = useLearningStore.getState();
  const { id, activityId, correct, total, at, durationMs } = receipt;
  const fingerprint = JSON.stringify(receipt);
  if ((_a2 = state.worldLearningReceipts) == null ? void 0 : _a2[id]) {
    if (state.worldLearningReceipts[id] !== fingerprint) throw new Error("Mismatched completion receipt");
    return;
  }
  const previous = ((_b2 = state.trainerStats) == null ? void 0 : _b2[activityId]) || {};
  const patch = {
    ...buildStudyActivityPatch(state, { at, trainerId: activityId, source: "world-session", sessions: 1, durationMs }),
    worldLearningReceipts: { ...state.worldLearningReceipts || {}, [id]: fingerprint },
    trainerStats: { ...state.trainerStats || {}, [activityId]: { ...previous, plays: (previous.plays || 0) + 1, correct: (previous.correct || 0) + correct, total: (previous.total || 0) + total, lastPlayed: at } },
    gameHistory: [...state.gameHistory || [], { id, trainerId: activityId, score: correct, total, timeMs: durationMs, at, date: getStudyDateKey(at) }].slice(-50)
  };
  const options = useLearningStore.persist.getOptions();
  localStorage.setItem(options.name, JSON.stringify({ state: selectPersistedLearningState({ ...state, ...patch }), version: options.version }));
  useLearningStore.setStateWithoutPersist(patch);
}
const useDataStore = create((set, get) => ({
  vocab: [],
  kanji: [],
  grammar: [],
  minna: {},
  minnaLessons: [],
  loaded: false,
  loadCanonical: async () => {
    if (get().loading) return;
    set({ loading: true, error: null });
    try {
      const { loadCanonicalData: loadCanonicalData2 } = await __vitePreload(async () => {
        const { loadCanonicalData: loadCanonicalData3 } = await Promise.resolve().then(() => loader);
        return { loadCanonicalData: loadCanonicalData3 };
      }, true ? void 0 : void 0, import.meta.url);
      const data = await loadCanonicalData2();
      const vocab = data.vocab || [];
      const kanji = data.kanji || [];
      const grammar = data.grammar || [];
      const hasData = vocab.length > 0 || kanji.length > 0 || grammar.length > 0;
      set({ vocab, kanji, grammar, minna: data.minna, minnaLessons: data.minnaLessons, loaded: hasData, loading: false });
    } catch (error) {
      set({ loading: false, error: "Không thể tải dữ liệu học tập." });
      throw error;
    }
  },
  // Compatibility action name; canonical JSON, not window.S, is authoritative.
  loadFromLegacy: async () => {
    await get().loadCanonical();
  },
  loading: false,
  error: null
}));
const useGameStore = create(logger("game")((set) => ({
  activeTrainer: null,
  activeMode: null,
  score: 0,
  total: 0,
  timeElapsed: 0,
  startGame: (trainer, mode) => set({
    activeTrainer: trainer,
    activeMode: mode,
    score: 0,
    total: 0,
    timeElapsed: 0
  }),
  addScore: () => set((s) => ({ score: s.score + 1 })),
  addTotal: () => set((s) => ({ total: s.total + 1 })),
  endGame: () => set({ activeTrainer: null, activeMode: null })
})));
function uniqueList(items) {
  return [...new Set((Array.isArray(items) ? items : []).filter(Boolean))];
}
function createMessageEntry(message, index) {
  const content2 = String((message == null ? void 0 : message.content) || "").trim();
  if (!content2) return null;
  const timestamp = (message == null ? void 0 : message.ts) || (/* @__PURE__ */ new Date()).toISOString();
  return {
    id: (message == null ? void 0 : message.id) || `npc-msg-${timestamp}-${index}`,
    role: (message == null ? void 0 : message.role) || "assistant",
    content: content2,
    action: (message == null ? void 0 : message.action) || null,
    ts: timestamp
  };
}
function createDecisionEntry(decision) {
  return {
    id: (decision == null ? void 0 : decision.id) || `npc-decision-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type: (decision == null ? void 0 : decision.type) || "observe",
    payload: (decision == null ? void 0 : decision.payload) && typeof decision.payload === "object" ? decision.payload : {},
    at: (decision == null ? void 0 : decision.at) || (/* @__PURE__ */ new Date()).toISOString()
  };
}
function createNPCRuntimeDefaults() {
  return {
    npcs: {},
    scenePresence: {},
    sessions: {},
    activeSessionId: null,
    memorySummaries: {},
    scheduler: {
      running: false,
      tick: 0,
      lastRunAt: null
    }
  };
}
const useNPCStore = create(logger("npc")((set) => ({
  ...createNPCRuntimeDefaults(),
  upsertNpc: (npc) => {
    if (!(npc == null ? void 0 : npc.id)) return;
    set((state) => {
      const prev = state.npcs[npc.id] || {};
      return {
        npcs: {
          ...state.npcs,
          [npc.id]: {
            ...prev,
            ...npc,
            id: npc.id,
            tags: uniqueList([...prev.tags || [], ...npc.tags || []])
          }
        }
      };
    });
  },
  setSceneNpcIds: (sceneId, npcIds) => {
    if (!sceneId) return;
    set((state) => ({
      scenePresence: {
        ...state.scenePresence,
        [sceneId]: uniqueList(npcIds)
      }
    }));
  },
  startSession: ({ sessionId, npcId, sceneId, channel: channel2 = "dialogue" }) => {
    if (!npcId || !sceneId) return null;
    const nextSessionId = sessionId || `${npcId}:${sceneId}:${Date.now()}`;
    set((state) => ({
      activeSessionId: nextSessionId,
      sessions: {
        ...state.sessions,
        [nextSessionId]: {
          id: nextSessionId,
          npcId,
          sceneId,
          channel: channel2,
          startedAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
          status: "active",
          history: []
        }
      }
    }));
    return nextSessionId;
  },
  appendSessionMessage: (sessionId, message) => {
    if (!sessionId) return;
    set((state) => {
      const session = state.sessions[sessionId];
      if (!session) return {};
      const nextEntry = createMessageEntry(message, session.history.length);
      if (!nextEntry) return {};
      return {
        activeSessionId: sessionId,
        sessions: {
          ...state.sessions,
          [sessionId]: {
            ...session,
            updatedAt: nextEntry.ts,
            history: [...session.history, nextEntry].slice(-20)
          }
        }
      };
    });
  },
  closeSession: (sessionId, status = "completed") => {
    if (!sessionId) return;
    set((state) => {
      const session = state.sessions[sessionId];
      if (!session) return {};
      return {
        activeSessionId: state.activeSessionId === sessionId ? null : state.activeSessionId,
        sessions: {
          ...state.sessions,
          [sessionId]: {
            ...session,
            status,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          }
        }
      };
    });
  },
  setMemorySummary: (npcId, patch) => {
    if (!npcId || !patch || typeof patch !== "object") return;
    set((state) => {
      var _a2;
      return {
        memorySummaries: {
          ...state.memorySummaries,
          [npcId]: {
            ...state.memorySummaries[npcId],
            ...patch,
            tags: uniqueList([...((_a2 = state.memorySummaries[npcId]) == null ? void 0 : _a2.tags) || [], ...patch.tags || []]),
            updatedAt: patch.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
          }
        }
      };
    });
  },
  recordDecision: (npcId, decision) => {
    if (!npcId || !decision) return;
    set((state) => {
      const summary = state.memorySummaries[npcId] || {};
      const nextDecision = createDecisionEntry(decision);
      return {
        memorySummaries: {
          ...state.memorySummaries,
          [npcId]: {
            ...summary,
            recentDecisions: [
              ...summary.recentDecisions || [],
              nextDecision
            ].slice(-10),
            updatedAt: nextDecision.at
          }
        }
      };
    });
  },
  setSchedulerState: (patch) => {
    if (!patch || typeof patch !== "object") return;
    set((state) => ({
      scheduler: {
        ...state.scheduler,
        ...patch
      }
    }));
  },
  clearRuntime: () => set(createNPCRuntimeDefaults())
})));
const GAME_EVENTS = Object.freeze({
  SESSION_STARTED: "session:started",
  SESSION_CANCELLED: "session:cancelled",
  SESSION_PHASE_ENTERED: "session:phaseEntered",
  SESSION_FINISHED: "session:finished",
  ANSWER_SUBMITTED: "answer:submitted",
  COMBO_CHANGED: "combo:changed",
  COMBO_BROKEN: "combo:broken",
  COMBO_TIER_UP: "combo:tierUp",
  MILESTONE_HIT: "milestone:hit",
  HP_CHANGED: "hp:changed",
  POWERUP_USED: "powerup:used",
  PET_ACTIVE_TRIGGERED: "pet:activeTriggered",
  ARTIFACT_TRIGGERED: "artifact:triggered",
  SET_ACTIVE: "set:active",
  SRS_RECORDED: "srs:recorded",
  REWARD_DISPATCHED: "reward:dispatched",
  QUEST_PROGRESS: "quest:progress",
  QUEST_COMPLETED: "quest:completed",
  CHAIN_ADVANCED: "chain:advanced",
  CHAIN_COMPLETED: "chain:completed",
  MASTERY_XP_GAINED: "mastery:xpGained",
  MASTERY_LEVELED: "mastery:leveled"
});
const PHASES = Object.freeze({
  WARMUP: "warmup",
  CORE: "core",
  BOSS: "boss",
  COOLDOWN: "cooldown"
});
const SKILLS = Object.freeze({
  VOCAB: "vocab",
  KANJI: "kanji",
  GRAMMAR: "grammar",
  LISTENING: "listening",
  READING: "reading",
  SPEED: "speed",
  CONSISTENCY: "consistency",
  ENDURANCE: "endurance"
});
const PRIO = Object.freeze({
  CRITICAL: 0,
  REWARD: 10,
  QUESTS: 20,
  PROGRESSION: 30,
  COSMETICS: 40,
  TELEMETRY: 90
});
const SKILL_IDS = Object.values(SKILLS);
function emptyBar() {
  return { level: 1, xp: 0, nextAt: 25, lifetime: 0 };
}
const INITIAL_STATE$1 = {
  schema: 1,
  revision: 0,
  updatedAt: 0,
  resetGeneration: 0,
  receipts: {},
  masteryBars: SKILL_IDS.reduce((acc, id) => ({ ...acc, [id]: emptyBar() }), {}),
  recentLevelUps: []
  // bounded log { skillId, level, at }
};
function nextAtForLevel(level) {
  return Math.round(25 * level * (1 + level / 10));
}
function applyXpToBar(bar, xp) {
  if (xp <= 0) return { bar, leveled: false, levelsGained: 0 };
  const next = { ...bar, lifetime: bar.lifetime + xp };
  let remaining = bar.xp + xp;
  let level = bar.level;
  let leveled = false;
  let levelsGained = 0;
  while (remaining >= nextAtForLevel(level)) {
    remaining -= nextAtForLevel(level);
    level += 1;
    levelsGained += 1;
    leveled = true;
  }
  next.xp = remaining;
  next.level = level;
  next.nextAt = nextAtForLevel(level);
  return { bar: next, leveled, levelsGained };
}
const useMasteryStore = create(
  persist(
    (set, get) => ({
      ...INITIAL_STATE$1,
      applyXp: (skillId, xp) => {
        assertLearningOwnerReady();
        if (!skillId || !SKILL_IDS.includes(skillId) || !xp) return { leveled: false };
        const s = get();
        const existing = s.masteryBars[skillId] || emptyBar();
        const { bar, leveled, levelsGained } = applyXpToBar(existing, Math.max(0, Math.round(xp)));
        set({
          revision: (s.revision || 0) + 1,
          updatedAt: Date.now(),
          masteryBars: { ...s.masteryBars, [skillId]: bar },
          recentLevelUps: leveled ? appendLog$1(s.recentLevelUps, { skillId, level: bar.level, at: Date.now() }) : s.recentLevelUps
        });
        return { leveled, levelsGained, level: bar.level };
      },
      applyBatch: (entries = []) => {
        assertLearningOwnerReady();
        const s = get();
        let bars = { ...s.masteryBars };
        const levelUps = [];
        for (const { skillId, xp } of entries) {
          if (!skillId || !SKILL_IDS.includes(skillId) || !xp) continue;
          const existing = bars[skillId] || emptyBar();
          const { bar, leveled, levelsGained } = applyXpToBar(existing, Math.max(0, Math.round(xp)));
          bars[skillId] = bar;
          if (leveled) levelUps.push({ skillId, level: bar.level, at: Date.now(), levelsGained });
        }
        set({
          revision: (s.revision || 0) + 1,
          updatedAt: Date.now(),
          masteryBars: bars,
          recentLevelUps: levelUps.length ? appendLog$1(s.recentLevelUps, ...levelUps) : s.recentLevelUps
        });
        return levelUps;
      },
      getBar: (skillId) => get().masteryBars[skillId] || emptyBar(),
      reset: () => restoreMasterySnapshot({ ...INITIAL_STATE$1, resetGeneration: (get().resetGeneration || 0) + 1, updatedAt: Date.now() })
    }),
    {
      name: "n4-mastery-v1",
      storage: createJSONStorage(() => localStorage),
      // skipHydration: prevent the persist middleware from rehydrating
      // synchronously at module-import time. Rehydration is deferred to
      // after React's commit phase completes (see store/index.js) so that
      // no setState is fired into a fiber that has no root yet.
      // Without this flag ProfilePage triggers React error #185.
      skipHydration: true,
      partialize: (s) => ({
        schema: s.schema,
        revision: s.revision,
        updatedAt: s.updatedAt,
        resetGeneration: s.resetGeneration,
        receipts: s.receipts,
        masteryBars: s.masteryBars,
        recentLevelUps: s.recentLevelUps
      })
    }
  )
);
function appendLog$1(log, ...entries) {
  const next = [...log, ...entries];
  return next.length > 200 ? next.slice(-200) : next;
}
if (typeof window !== "undefined") {
  window.__N4_MASTERY_STORE__ = useMasteryStore;
}
function validateMasterySnapshot(value) {
  if (!value || value.schema !== 1 || !value.masteryBars || typeof value.masteryBars !== "object") throw new Error("Invalid mastery snapshot");
  for (const [id, bar] of Object.entries(value.masteryBars)) if (!SKILL_IDS.includes(id) || !bar || ["level", "xp", "nextAt", "lifetime"].some((k) => !Number.isFinite(bar[k]) || bar[k] < 0)) throw new Error("Invalid mastery bar");
  return structuredClone({ schema: 1, masteryBars: { ...INITIAL_STATE$1.masteryBars, ...value.masteryBars }, recentLevelUps: Array.isArray(value.recentLevelUps) ? value.recentLevelUps : [], revision: Math.max(0, Number(value.revision) || 0), updatedAt: Math.max(0, Number(value.updatedAt) || 0), resetGeneration: Math.max(0, Number(value.resetGeneration) || 0), receipts: value.receipts || {} });
}
function masterySnapshot() {
  assertLearningOwnerReady();
  return validateMasterySnapshot(useMasteryStore.getState());
}
function mergeMasterySnapshots(local, remote) {
  if (!local) return remote ? validateMasterySnapshot(remote) : void 0;
  if (!remote) return validateMasterySnapshot(local);
  const a = validateMasterySnapshot(local), b = validateMasterySnapshot(remote);
  for (const key of ["resetGeneration", "updatedAt", "revision"]) if (a[key] !== b[key]) return a[key] > b[key] ? a : b;
  return JSON.stringify(a) >= JSON.stringify(b) ? a : b;
}
function restoreMasterySnapshot(value, { merge = false, ownerSwitch = false } = {}) {
  if (!ownerSwitch) assertLearningOwnerReady();
  const next = merge ? mergeMasterySnapshots(masterySnapshot(), value) : validateMasterySnapshot(value);
  localStorage.setItem("n4-mastery-v1", JSON.stringify({ state: next, version: 0 }));
  useMasteryStore.setState(next);
  return next;
}
function applyMasteryReceipt({ id, domain, independentCorrect, at }) {
  const s = masterySnapshot();
  const fingerprint = JSON.stringify({ domain, independentCorrect, at });
  if (s.receipts[id]) {
    if (s.receipts[id] !== fingerprint) throw new Error("Mismatched mastery receipt");
    return;
  }
  if (!SKILL_IDS.includes(domain)) throw new Error("Invalid mastery domain");
  const { bar } = applyXpToBar(s.masteryBars[domain] || emptyBar(), independentCorrect ? 10 : 0);
  restoreMasterySnapshot({ ...s, masteryBars: { ...s.masteryBars, [domain]: bar }, receipts: { ...s.receipts, [id]: fingerprint }, revision: s.revision + 1, updatedAt: Math.max(at, s.updatedAt + 1) });
}
function isPlainObject(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}
function normalizeReactBookmarks(reactBookmarks = {}) {
  const normalized = {};
  if (!isPlainObject(reactBookmarks)) return normalized;
  for (const [key, value] of Object.entries(reactBookmarks)) {
    if (value) normalized[key] = true;
  }
  return normalized;
}
function normalizeReactSrs(reactSrs = {}, now = Date.now()) {
  return normalizeSrsMap(reactSrs, now);
}
function areMapsEqual(left = {}, right = {}) {
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) return false;
  for (const key of leftKeys) {
    if (JSON.stringify(left[key]) !== JSON.stringify(right[key])) return false;
  }
  return true;
}
function normalizeLegacyBookmarks(legacyBookmarks = {}) {
  const normalized = {};
  if (!isPlainObject(legacyBookmarks)) return normalized;
  for (const [key, value] of Object.entries(legacyBookmarks)) {
    if (value) normalized[key] = true;
  }
  return normalized;
}
function normalizeLegacySrs(legacySrs = {}, now = Date.now()) {
  return normalizeSrsMap(legacySrs, now);
}
function reconcileReactBookmarksFromLegacy(reactBookmarks = {}, legacyBookmarks = {}) {
  const currentReactBookmarks = normalizeReactBookmarks(reactBookmarks);
  const nextReactBookmarks = normalizeLegacyBookmarks(legacyBookmarks);
  return {
    nextReactBookmarks,
    changed: !areMapsEqual(currentReactBookmarks, nextReactBookmarks)
  };
}
function reconcileReactSrsFromLegacy(reactSrs = {}, legacySrs = {}, now = Date.now()) {
  const currentReactSrs = normalizeReactSrs(reactSrs, now);
  const nextReactSrs = normalizeLegacySrs(legacySrs, now);
  return {
    nextReactSrs,
    changed: !areMapsEqual(currentReactSrs, nextReactSrs)
  };
}
function buildBookmarkStartupSync(reactBookmarks = {}, legacyBookmarks = {}, now = Date.now()) {
  const currentReactBookmarks = normalizeReactBookmarks(reactBookmarks);
  const currentLegacyBookmarks = isPlainObject(legacyBookmarks) ? legacyBookmarks : {};
  const nextReactBookmarks = {
    ...currentReactBookmarks,
    ...normalizeLegacyBookmarks(currentLegacyBookmarks)
  };
  const nextLegacyBookmarks = { ...currentLegacyBookmarks };
  let legacyChanged = false;
  for (const key of Object.keys(currentReactBookmarks)) {
    if (!nextLegacyBookmarks[key]) {
      nextLegacyBookmarks[key] = now;
      legacyChanged = true;
    }
  }
  return {
    nextReactBookmarks,
    nextLegacyBookmarks,
    reactChanged: !areMapsEqual(currentReactBookmarks, nextReactBookmarks),
    legacyChanged
  };
}
function buildSrsStartupSync(reactSrs = {}, legacySrs = {}, now = Date.now()) {
  const currentReactSrs = normalizeReactSrs(reactSrs, now);
  const currentLegacySrs = isPlainObject(legacySrs) ? legacySrs : {};
  const nextReactSrs = mergeSrsMaps(currentReactSrs, normalizeLegacySrs(currentLegacySrs, now), now);
  const nextLegacySrs = { ...currentLegacySrs };
  let legacyChanged = false;
  for (const [key, entry] of Object.entries(currentReactSrs)) {
    if (!(key in nextLegacySrs)) {
      nextLegacySrs[key] = toLegacySrsEntry(entry, now);
      legacyChanged = true;
    }
  }
  return {
    nextReactSrs,
    nextLegacySrs,
    reactChanged: !areMapsEqual(currentReactSrs, nextReactSrs),
    legacyChanged
  };
}
function getAppStorageSyncEffect(key, newValue, appState = {}) {
  switch (key) {
    case STORAGE_KEYS.TTS_RATE: {
      const value = parseFloat(newValue);
      if (Number.isNaN(value) || value === appState.ttsRate) return null;
      return { type: "action", name: "setTtsRate", value };
    }
    case STORAGE_KEYS.AUTO_TTS: {
      const value = newValue === "1";
      if (value === !!appState.autoSpeak) return null;
      return { type: "action", name: "setAutoSpeak", value };
    }
    case STORAGE_KEYS.THEME:
      if (!newValue || newValue === appState.theme) return null;
      return { type: "action", name: "setTheme", value: newValue };
    case STORAGE_KEYS.FURIGANA:
      if (newValue !== "0" === !!appState.showFurigana) return null;
      return { type: "action", name: "toggleFurigana" };
    case STORAGE_KEYS.ROMAJI:
      if (newValue !== "0" === !!appState.showRomaji) return null;
      return { type: "action", name: "toggleRomaji" };
    case STORAGE_KEYS.AUTO_BACKUP: {
      const value = newValue === "1";
      if (value === !!appState.autoBackupEnabled) return null;
      return { type: "patch", patch: { autoBackupEnabled: value } };
    }
    default:
      return null;
  }
}
function applyAppStorageSyncEffect(appStore, effect) {
  if (!appStore || !effect) return false;
  if (effect.type === "patch") {
    appStore.setState(effect.patch);
    return true;
  }
  const state = appStore.getState();
  const handler = state == null ? void 0 : state[effect.name];
  if (typeof handler !== "function") return false;
  if (Object.prototype.hasOwnProperty.call(effect, "value")) {
    handler(effect.value);
  } else {
    handler();
  }
  return true;
}
function reconcileReactMistakesFromLegacy(reactMistakes = {}, legacyMistakes = {}) {
  const nextReactMistakes = { ...reactMistakes };
  let changed2 = false;
  if (!legacyMistakes || typeof legacyMistakes !== "object" || Array.isArray(legacyMistakes)) {
    return { nextReactMistakes, changed: changed2 };
  }
  for (const [rawWord, count] of Object.entries(legacyMistakes)) {
    let key = rawWord;
    if (!rawWord.includes(":")) {
      if (rawWord.length === 1) {
        key = `k:${rawWord}`;
      } else {
        key = `v:${rawWord}`;
      }
    }
    const val = Number(count) || 1;
    const existing = nextReactMistakes[key];
    if (!existing || existing.count !== val) {
      nextReactMistakes[key] = {
        count: val,
        lastWrongAt: (existing == null ? void 0 : existing.lastWrongAt) || Date.now()
      };
      changed2 = true;
    }
  }
  return { nextReactMistakes, changed: changed2 };
}
function buildMistakeStartupSync(reactMistakes = {}, legacyMistakes = {}, now = Date.now()) {
  const currentReactMistakes = { ...reactMistakes };
  const currentLegacyMistakes = legacyMistakes && typeof legacyMistakes === "object" && !Array.isArray(legacyMistakes) ? legacyMistakes : {};
  const nextReactMistakes = { ...currentReactMistakes };
  const nextLegacyMistakes = { ...currentLegacyMistakes };
  let reactChanged = false;
  let legacyChanged = false;
  for (const [rawWord, count] of Object.entries(currentLegacyMistakes)) {
    let key = rawWord;
    if (!rawWord.includes(":")) {
      if (rawWord.length === 1) {
        key = `k:${rawWord}`;
      } else {
        key = `v:${rawWord}`;
      }
    }
    const val = Number(count) || 1;
    const existing = nextReactMistakes[key];
    if (!existing || existing.count !== val) {
      nextReactMistakes[key] = {
        count: val,
        lastWrongAt: (existing == null ? void 0 : existing.lastWrongAt) || now
      };
      reactChanged = true;
    }
  }
  for (const [key, val] of Object.entries(currentReactMistakes)) {
    if (!val) continue;
    const rawWord = key.includes(":") ? key.split(":")[1] : key;
    if (!nextLegacyMistakes[rawWord] || nextLegacyMistakes[rawWord] !== val.count) {
      nextLegacyMistakes[rawWord] = val.count;
      legacyChanged = true;
    }
  }
  return {
    nextReactMistakes,
    nextLegacyMistakes,
    reactChanged,
    legacyChanged
  };
}
function cleanupLegacyBridgeListeners() {
  const listeners2 = window.__N4_LEGACY_BRIDGE_LISTENERS__;
  if (!listeners2) return;
  for (const [eventName, handler] of Object.entries(listeners2)) {
    window.removeEventListener(eventName, handler);
  }
  delete window.__N4_LEGACY_BRIDGE_LISTENERS__;
}
function initLegacyBridge({ useAppStore: useAppStore2, useLearningStore: useLearningStore2, useDataStore: useDataStore2, useGameStore: useGameStore2 }) {
  if (typeof window === "undefined") return;
  if (window.__N4_LEGACY_BRIDGE_INIT__) return;
  cleanupLegacyBridgeListeners();
  window.__N4_LEGACY_BRIDGE_INIT__ = true;
  window.__N4_STORE__ = {
    app: useAppStore2,
    learning: useLearningStore2,
    data: useDataStore2,
    game: useGameStore2
  };
  const handleStorage = (event) => {
    const effect = getAppStorageSyncEffect(event.key, event.newValue, useAppStore2.getState());
    applyAppStorageSyncEffect(useAppStore2, effect);
  };
  window.addEventListener("storage", handleStorage);
  const handleBookmarksChanged = () => {
    try {
      const legacyBookmarks = safeGetObjectItem(STORAGE_KEYS.BOOKMARKS) || {};
      const { nextReactBookmarks, changed: changed2 } = reconcileReactBookmarksFromLegacy(
        useLearningStore2.getState().bookmarks,
        legacyBookmarks
      );
      if (changed2) useLearningStore2.setState({ bookmarks: nextReactBookmarks });
    } catch (e) {
    }
  };
  window.addEventListener("n4-bookmarks-changed", handleBookmarksChanged);
  const handleSrsChanged = () => {
    try {
      const legacySrs = safeGetObjectItem(STORAGE_KEYS.SRS) || {};
      const { nextReactSrs, changed: changed2 } = reconcileReactSrsFromLegacy(
        useLearningStore2.getState().srs,
        legacySrs
      );
      if (changed2) useLearningStore2.setState({ srs: nextReactSrs });
    } catch (e) {
    }
  };
  const handleMistakesChanged = () => {
    try {
      const legacyMistakes = safeGetObjectItem(STORAGE_KEYS.MISTAKES) || {};
      const { nextReactMistakes, changed: changed2 } = reconcileReactMistakesFromLegacy(
        useLearningStore2.getState().mistakes,
        legacyMistakes
      );
      if (changed2) useLearningStore2.setState({ mistakes: nextReactMistakes });
    } catch (e) {
    }
  };
  window.addEventListener("n4-srs-changed", handleSrsChanged);
  window.addEventListener("n4-mistakes-changed", handleMistakesChanged);
  window.__N4_LEGACY_BRIDGE_LISTENERS__ = {
    storage: handleStorage,
    "n4-bookmarks-changed": handleBookmarksChanged,
    "n4-srs-changed": handleSrsChanged,
    "n4-mistakes-changed": handleMistakesChanged
  };
  try {
    const legacyBookmarks = safeGetObjectItem(STORAGE_KEYS.BOOKMARKS) || {};
    const legacySrs = safeGetObjectItem(STORAGE_KEYS.SRS) || {};
    const legacyMistakes = safeGetObjectItem(STORAGE_KEYS.MISTAKES) || {};
    const learning = useLearningStore2.getState();
    const bookmarkSync = buildBookmarkStartupSync(learning.bookmarks, legacyBookmarks);
    const srsSync = buildSrsStartupSync(learning.srs, legacySrs);
    const mistakeSync = buildMistakeStartupSync(learning.mistakes, legacyMistakes);
    if (bookmarkSync.reactChanged) {
      useLearningStore2.setState({ bookmarks: bookmarkSync.nextReactBookmarks });
    }
    if (bookmarkSync.legacyChanged) {
      safeSetObjectItem(STORAGE_KEYS.BOOKMARKS, bookmarkSync.nextLegacyBookmarks);
    }
    if (srsSync.reactChanged) {
      useLearningStore2.setState({ srs: srsSync.nextReactSrs });
    }
    if (srsSync.legacyChanged) {
      safeSetObjectItem(STORAGE_KEYS.SRS, srsSync.nextLegacySrs);
    }
    if (mistakeSync.reactChanged) {
      useLearningStore2.setState({ mistakes: mistakeSync.nextReactMistakes });
    }
    if (mistakeSync.legacyChanged) {
      safeSetObjectItem(STORAGE_KEYS.MISTAKES, mistakeSync.nextLegacyMistakes);
    }
  } catch (e) {
  }
}
function whenPersistHydrated(store, onReady2) {
  if (typeof onReady2 !== "function") return () => {
  };
  const persistApi = store == null ? void 0 : store.persist;
  let called = false;
  const markReady = () => {
    if (called) return;
    called = true;
    onReady2();
  };
  if (!persistApi) {
    Promise.resolve().then(markReady);
    return () => {
      called = true;
    };
  }
  if (typeof persistApi.hasHydrated === "function" && persistApi.hasHydrated()) {
    markReady();
    return () => {
    };
  }
  if (typeof persistApi.onFinishHydration === "function") {
    const unsubscribe = persistApi.onFinishHydration(markReady);
    return typeof unsubscribe === "function" ? unsubscribe : () => {
      called = true;
    };
  }
  Promise.resolve().then(markReady);
  return () => {
    called = true;
  };
}
let cleanup = null;
let transitionTimer = null;
function setBodyVariant(prefix, value, defaultValue) {
  if (typeof document === "undefined") return;
  for (const cls of [...document.body.classList]) {
    if (cls.startsWith(prefix)) document.body.classList.remove(cls);
  }
  if (value && value !== defaultValue) document.body.classList.add(`${prefix}${value}`);
}
function applyAccent$1(targets, accent) {
  if (!accent || typeof accent !== "string") return;
  let hex = accent.replace("#", "");
  if (/^[0-9a-fA-F]{3}$/.test(hex)) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  if (!/^[0-9a-fA-F]{6}$/.test(hex)) return;
  const value = `#${hex}`;
  const r = Number.parseInt(hex.slice(0, 2), 16);
  const g = Number.parseInt(hex.slice(2, 4), 16);
  const b = Number.parseInt(hex.slice(4, 6), 16);
  for (const target of targets) {
    target == null ? void 0 : target.style.setProperty("--n4-accent", value);
    target == null ? void 0 : target.style.setProperty("--n4-on-accent", getReadableTextOnColor(value));
    target == null ? void 0 : target.style.setProperty("--n4-accent-glow", `rgba(${r},${g},${b},0.25)`);
    target == null ? void 0 : target.style.setProperty("--n4-accent-dim", `rgba(${r},${g},${b},0.08)`);
  }
}
function applyAppPresentation(state, previous = {}) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const app = document.querySelector(".n4-app");
  const targets = [root, app].filter(Boolean);
  const theme = state.theme === "light" ? "light" : "dark";
  root.setAttribute("data-theme", theme);
  app == null ? void 0 : app.setAttribute("data-theme", theme);
  root.setAttribute("data-energy-mode", state.energyMode || "performance");
  app == null ? void 0 : app.setAttribute("data-energy-mode", state.energyMode || "performance");
  app == null ? void 0 : app.setAttribute("data-density", state.density || "comfortable");
  app == null ? void 0 : app.setAttribute("data-font-scale", state.fontScale || "M");
  if (state.themePreset) applyThemeFamilyToDom(state.themePreset, theme, state.accent);
  else clearThemeFamilyFromDom();
  applyAccent$1(targets, state.accent);
  const densityScales = { compact: "0.85", comfortable: "1", spacious: "1.2" };
  app == null ? void 0 : app.style.setProperty("--n4-density-scale", densityScales[state.density] || "1");
  app == null ? void 0 : app.style.setProperty("--games-cols", String(state.gamesCols || 3));
  root.style.setProperty("--fz-kanji", `${state.fzKanji || 18}px`);
  root.style.setProperty("--fz-vocab", `${state.fzVocab || 15}px`);
  root.style.setProperty("--fz-grammar", `${state.fzGrammar || 14}px`);
  root.style.setProperty("--kanji-weight", state.kanjiWeight || "900");
  root.style.setProperty("--n4-fw-kanji", state.kanjiWeight || "900");
  root.style.setProperty("--kanji-size", `${state.kanjiSize || 1.8}rem`);
  root.style.setProperty("--n4-fs-kanji", `${state.kanjiSize || 1.8}rem`);
  if (state.kanjiFont && state.kanjiFont !== "default") {
    root.style.setProperty("--kanji-font", state.kanjiFont);
    root.style.setProperty("--n4-font-jp", state.kanjiFont);
  } else {
    root.style.removeProperty("--kanji-font");
    root.style.removeProperty("--n4-font-jp");
  }
  document.body.classList.toggle("hide-reading", !state.showFurigana);
  document.body.classList.toggle("hide-romaji", !state.showRomaji);
  document.body.classList.toggle("nav-top", state.navPosition === "top");
  document.body.classList.toggle("cb-protanopia", !!state.cbProtanopia);
  document.body.classList.toggle("cb-deuteranopia", !!state.cbDeuteranopia);
  document.body.classList.toggle("cb-tritanopia", !!state.cbTritanopia);
  document.body.classList.toggle("dyslexia-font", !!state.dyslexiaFont);
  document.body.classList.toggle("large-touch", !!state.largeTouchTargets);
  setBodyVariant("card-layout-", state.cardLayout, "grid");
  setBodyVariant("examples-", state.exampleDisplay, "inline");
  setBodyVariant("minna-view-", state.minnaView, "default");
  if (previous.theme !== state.theme || previous.themePreset !== state.themePreset) {
    root.classList.add("n4-theme-transitioning");
    if (transitionTimer) clearTimeout(transitionTimer);
    transitionTimer = setTimeout(() => root.classList.remove("n4-theme-transitioning"), 300);
  }
  if (typeof window !== "undefined") {
    if (window.S) Object.assign(window.S, {
      theme,
      density: state.density,
      furigana: state.showFurigana,
      romaji: state.showRomaji,
      ttsRate: state.ttsRate,
      autoTTS: state.autoSpeak,
      lessonStart: state.lessonStart,
      lessonCap: state.lessonCap
    });
    if (window.RD) Object.assign(window.RD, { rateJp: state.radioRateJp, rateVi: state.radioRateVi });
    if (previous.energyMode !== state.energyMode) {
      window.dispatchEvent(new CustomEvent("n4:energy-mode-change", { detail: state.energyMode }));
    }
    if (previous.gfxTier !== state.gfxTier) {
      window.dispatchEvent(new CustomEvent("n4:gfx-tier-change", { detail: state.gfxTier }));
    }
  }
  safeSetItem(STORAGE_KEYS.THEME, theme);
  safeSetItem(STORAGE_KEYS.FURIGANA, state.showFurigana ? "1" : "0");
  safeSetItem(STORAGE_KEYS.ROMAJI, state.showRomaji ? "1" : "0");
}
function initAppPresentation(store) {
  cleanup == null ? void 0 : cleanup();
  let previous = {};
  const render = (state) => {
    applyAppPresentation(state, previous);
    previous = state;
  };
  render(store.getState());
  cleanup = store.subscribe(render);
  return cleanup;
}
const MIN_EASE = 1.3;
const MAX_EASE = 3.5;
const DAY_MS$1 = 24 * 60 * 60 * 1e3;
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
    const prevInterval = prev.reps === 0 ? 0 : clampDays((prev.dueAt - prev.lastReviewedAt) / DAY_MS$1);
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
  const dueAt = q === 0 ? now + 10 * 60 * 1e3 : now + interval * DAY_MS$1;
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
      throw new Error("Invalid FSRS save; existing data preserved");
    }
    return { ...parsed, schema: parsed.schema || STORAGE_SCHEMA, states: parsed.states };
  } catch (e) {
    throw new Error("Could not read FSRS save; existing data preserved", { cause: e });
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
      ...blob,
      schema: (blob == null ? void 0 : blob.schema) || STORAGE_SCHEMA,
      states: (blob == null ? void 0 : blob.states) || {}
    }));
    return true;
  } catch (e) {
    console.warn("[srs] saveAll failed", e);
    return false;
  }
}
function migrateIfNeeded(blob) {
  if (!blob || typeof blob !== "object") return { schema: STORAGE_SCHEMA, states: {} };
  if (blob.schema === STORAGE_SCHEMA) return blob;
  return { schema: STORAGE_SCHEMA, states: blob.states || {} };
}
const PREFIX_TO_TYPE = {
  "v:": "vocab",
  "k:": "kanji",
  "g:": "grammar",
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
  var _a2;
  return ((_a2 = parseLearningKey(key)) == null ? void 0 : _a2.type) || null;
}
function getItemLearningKey(item, fallbackType = null) {
  if (!item) return null;
  if (typeof item.key === "string" && /^[vkg]:.+/.test(item.key)) return item.key;
  return getItemLegacyLearningKey(item, fallbackType);
}
function getItemLegacyLearningKey(item, fallbackType = null) {
  if (!item) return null;
  const inferredType = fallbackType || item.kind || item.type || (item.character || item.kanji ? "kanji" : null) || (item.title || item.pattern ? "grammar" : null) || (item.word ? "vocab" : null);
  if (!inferredType) return item.key ? item.key.replace(/^v:/, "vocab:").replace(/^k:/, "kanji:").replace(/^g:/, "grammar:") : null;
  if (inferredType === "kanji") return makeKanjiKey(item.character || item.kanji || item.word || item.char);
  if (inferredType === "grammar") return makeGrammarKey(getGrammarLabel(item));
  return makeVocabKey(getVocabLabel(item));
}
let _blob = null;
let _content = null;
let _sourceAliases = /* @__PURE__ */ new Map();
let _reverseAliases = /* @__PURE__ */ new Map();
const _listeners$1 = /* @__PURE__ */ new Set();
const _changeListeners = /* @__PURE__ */ new Set();
function onChange(cb) {
  _changeListeners.add(cb);
  return () => _changeListeners.delete(cb);
}
function changed() {
  for (const cb of _changeListeners) cb();
}
function validateSrsSnapshot(value) {
  if (!value || value.schema !== "1.0" || !value.states || typeof value.states !== "object" || Array.isArray(value.states)) throw new Error("Invalid FSRS snapshot");
  for (const [key, state] of Object.entries(value.states)) {
    if (!key || !state || state.key !== key || ["ease", "stability", "retrievability", "reps", "lapses", "lastReviewedAt", "dueAt"].some((k) => !Number.isFinite(state[k]) || state[k] < 0) || !Array.isArray(state.history)) throw new Error("Invalid FSRS entry");
  }
  return structuredClone({ ...value, resetGeneration: Math.max(0, Number(value.resetGeneration) || 0), receipts: value.receipts || {} });
}
function snapshot$1() {
  assertLearningOwnerReady();
  return validateSrsSnapshot(_ensureLoaded());
}
function mergeSrsSnapshots(local, remote) {
  if (!local) return remote ? validateSrsSnapshot(remote) : void 0;
  if (!remote) return validateSrsSnapshot(local);
  const a = validateSrsSnapshot(local), b = validateSrsSnapshot(remote);
  if (a.resetGeneration !== b.resetGeneration) return a.resetGeneration > b.resetGeneration ? a : b;
  const states = { ...a.states };
  for (const [key, state] of Object.entries(b.states)) if (!states[key] || state.lastReviewedAt > states[key].lastReviewedAt || state.lastReviewedAt === states[key].lastReviewedAt && JSON.stringify(state) > JSON.stringify(states[key])) states[key] = state;
  return { ...a, states, receipts: { ...a.receipts, ...b.receipts } };
}
function restoreSnapshot(value, { merge = false, ownerSwitch = false } = {}) {
  if (!ownerSwitch) assertLearningOwnerReady();
  const next = merge ? mergeSrsSnapshots(snapshot$1(), value) : validateSrsSnapshot(value);
  if (!saveAll(next)) throw new Error("FSRS storage failed");
  _blob = next;
  if (!ownerSwitch) changed();
  return validateSrsSnapshot(next);
}
function reloadFromStorage() {
  assertLearningOwnerReady();
  _blob = null;
  _ensureLoaded();
  changed();
}
function _ensureLoaded() {
  if (_blob) return _blob;
  _blob = validateSrsSnapshot(migrateIfNeeded(loadAll()));
  return _blob;
}
function _persist() {
  if (!_blob) return;
  saveAll(_blob);
}
function bindContent(contentService) {
  var _a2;
  _content = contentService;
  _sourceAliases = /* @__PURE__ */ new Map();
  _reverseAliases = /* @__PURE__ */ new Map();
  for (const item of ((_a2 = contentService == null ? void 0 : contentService.getBatch) == null ? void 0 : _a2.call(contentService, {})) || []) {
    if (!(item == null ? void 0 : item.key)) continue;
    const legacy = getItemLearningKey({ ...item, key: void 0 });
    if (!legacy || legacy === item.key) continue;
    if (_sourceAliases.has(legacy) && _sourceAliases.get(legacy) !== item.key) _sourceAliases.set(legacy, null);
    else _sourceAliases.set(legacy, item.key);
  }
  for (const [alias, key] of _sourceAliases) if (key) _reverseAliases.set(key, [..._reverseAliases.get(key) || [], alias]);
}
function canonicalKey(key) {
  return _sourceAliases.get(key) || key.replace(/^vocab:/, "v:").replace(/^kanji:/, "k:");
}
function latestState(states, key) {
  const canonical = canonicalKey(key);
  const aliases = /* @__PURE__ */ new Set([key, canonical, ..._reverseAliases.get(canonical) || []]);
  if (canonical.startsWith("v:")) aliases.add(canonical.replace(/^v:/, "vocab:"));
  if (canonical.startsWith("k:")) aliases.add(canonical.replace(/^k:/, "kanji:"));
  let latest = null;
  for (const alias of aliases) {
    const candidate = states[alias];
    if (candidate && (!latest || candidate.lastReviewedAt > latest.lastReviewedAt || candidate.lastReviewedAt === latest.lastReviewedAt && alias === canonical)) latest = candidate;
  }
  return latest ? { ...latest, key: canonical } : null;
}
function stateFor(key) {
  assertLearningOwnerReady();
  if (!key) return null;
  const b = _ensureLoaded();
  return latestState(b.states, key);
}
function recordReview({ itemKey, quality, reviewedAt, meta, eventId } = {}) {
  var _a2, _b2, _c;
  assertLearningOwnerReady();
  if (!itemKey) return null;
  const b = _ensureLoaded();
  const resolvedKey = canonicalKey(itemKey);
  const now = Number.isFinite(reviewedAt) ? reviewedAt : Date.now();
  const fingerprint = JSON.stringify({ itemKey, quality, reviewedAt: now });
  if (eventId && ((_a2 = b.receipts) == null ? void 0 : _a2[eventId])) {
    if (b.receipts[eventId] !== fingerprint) throw new Error("Mismatched FSRS receipt");
    return { dueAt: (_c = (_b2 = latestState(b.states, itemKey)) == null ? void 0 : _b2.dueAt) != null ? _c : null };
  }
  const prev = latestState(b.states, itemKey) || defaultState(resolvedKey, now);
  const next = nextState(prev, quality, now);
  const updated = { ...b, states: { ...b.states, [resolvedKey]: next }, receipts: { ...b.receipts || {}, ...eventId ? { [eventId]: fingerprint } : {} } };
  if (!saveAll(updated)) throw new Error("FSRS storage failed");
  _blob = updated;
  changed();
  const review = { itemKey: resolvedKey, quality, reviewedAt: now, meta: meta || null };
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
  assertLearningOwnerReady();
  const { kind, n, before } = spec;
  const now = Number.isFinite(before) ? before : Date.now();
  const b = _ensureLoaded();
  const keys = [];
  for (const key of new Set(Object.keys(b.states).map(canonicalKey))) {
    const st = latestState(b.states, key);
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
  restoreSnapshot({ schema: "1.0", states: {}, receipts: {}, resetGeneration: (_ensureLoaded().resetGeneration || 0) + 1 });
}
const debug = {
  dumpState() {
    return snapshot$1();
  },
  resetItem(key) {
    assertLearningOwnerReady();
    const b = _ensureLoaded();
    const canonical = canonicalKey(key);
    for (const candidate of Object.keys(b.states)) if (canonicalKey(candidate) === canonical) delete b.states[candidate];
    _persist();
  },
  stats() {
    assertLearningOwnerReady();
    const b = _ensureLoaded();
    const entries = [...new Set(Object.keys(b.states).map(canonicalKey))].map((key) => latestState(b.states, key));
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
  _resetAll,
  snapshot: snapshot$1,
  restoreSnapshot,
  reloadFromStorage,
  onChange
};
const OWNER_KEY = "n4:learning-active-owner";
const emptySrs = () => ({ schema: "1.0", states: {}, receipts: {}, resetGeneration: 0 });
const emptyMastery = () => ({ schema: 1, masteryBars: {}, recentLevelUps: [], revision: 0, updatedAt: 0, resetGeneration: 0, receipts: {} });
const archiveKey = (owner) => `n4:learning-owner:v1:${encodeURIComponent(owner)}`;
function durableWrite(key, value) {
  const serialized = JSON.stringify(value);
  localStorage.setItem(key, serialized);
  if (localStorage.getItem(key) !== serialized) throw new Error("Learning owner switch was not saved");
}
function validatePair(pair) {
  if (!pair) throw new Error("Invalid learning owner snapshot");
  return { fsrs: validateSrsSnapshot(pair.fsrs), mastery: validateMasterySnapshot(pair.mastery) };
}
function validateIntent(intent) {
  if (!intent || intent.schema !== 1 || intent.from !== null && typeof intent.from !== "string" || typeof intent.to !== "string" || !intent.to) throw new Error("Invalid learning owner switch; saved data preserved");
  return { ...intent, source: validatePair(intent.source), target: validatePair(intent.target) };
}
function finishSwitch(value) {
  const intent = validateIntent(value);
  if (intent.from) durableWrite(archiveKey(intent.from), intent.source);
  srs.restoreSnapshot(intent.target.fsrs, { ownerSwitch: true });
  restoreMasterySnapshot(intent.target.mastery, { ownerSwitch: true });
  localStorage.setItem(OWNER_KEY, intent.to);
  if (localStorage.getItem(OWNER_KEY) !== intent.to) throw new Error("Learning owner switch was not committed");
  localStorage.removeItem(LEARNING_OWNER_SWITCH_KEY);
  if (localStorage.getItem(LEARNING_OWNER_SWITCH_KEY)) throw new Error("Learning owner switch is incomplete");
  srs.reloadFromStorage();
}
function ensureLearningOwner(owner) {
  if (!owner) throw new Error("Learning owner is required");
  const pending = localStorage.getItem(LEARNING_OWNER_SWITCH_KEY);
  if (pending) finishSwitch(JSON.parse(pending));
  const previous = localStorage.getItem(OWNER_KEY);
  if (previous === owner) return;
  let source;
  if (previous) source = validatePair({ fsrs: srs.snapshot(), mastery: masterySnapshot() });
  else {
    const fsrsRaw = localStorage.getItem("n4:srs:v1");
    const masteryRaw = localStorage.getItem("n4-mastery-v1");
    source = validatePair({ fsrs: fsrsRaw ? JSON.parse(fsrsRaw) : emptySrs(), mastery: masteryRaw ? JSON.parse(masteryRaw).state : emptyMastery() });
  }
  const raw = previous ? localStorage.getItem(archiveKey(owner)) : null;
  const target = previous ? validatePair(raw ? JSON.parse(raw) : { fsrs: emptySrs(), mastery: emptyMastery() }) : source;
  const intent = { schema: 1, from: previous, to: owner, source, target };
  durableWrite(LEARNING_OWNER_SWITCH_KEY, intent);
  finishSwitch(intent);
}
function forgetLearningOwner() {
  localStorage.removeItem(LEARNING_OWNER_SWITCH_KEY);
  localStorage.removeItem(OWNER_KEY);
  srs.restoreSnapshot(emptySrs());
  restoreMasterySnapshot(emptyMastery());
}
initLegacyBridge({ useAppStore, useLearningStore, useDataStore, useGameStore });
if (typeof window !== "undefined") initAppPresentation(useAppStore);
if (!globalThis.__N4_CANONICAL_SRS_BRIDGE__) {
  globalThis.__N4_CANONICAL_SRS_BRIDGE__ = srs.onReview((review, next) => {
    if (!(review == null ? void 0 : review.itemKey) || !next) return;
    useLearningStore.setState((state) => ({
      srs: {
        ...state.srs || {},
        [review.itemKey]: normalizeSrsEntry(next, review.reviewedAt)
      }
    }));
  });
}
if (typeof window !== "undefined") {
  Promise.resolve().then(() => {
    var _a2;
    useMasteryStore.persist.rehydrate();
    ensureLearningOwner(((_a2 = useAppStore.getState().user) == null ? void 0 : _a2.id) ? `user:${useAppStore.getState().user.id}` : "guest");
  });
  useAppStore.subscribe((state, previous) => {
    var _a2, _b2, _c;
    if (((_a2 = state.user) == null ? void 0 : _a2.id) === ((_b2 = previous.user) == null ? void 0 : _b2.id)) return;
    ensureLearningOwner(((_c = state.user) == null ? void 0 : _c.id) ? `user:${state.user.id}` : "guest");
  });
}
const _SYNC_META_KEYS = /* @__PURE__ */ new Set([
  "user",
  "lastSyncAt",
  "settingsChangedAt",
  "settingsQuery",
  "reactMode",
  "studyOsV1",
  "visualRedesignV5",
  "visualRedesignV6"
]);
if (typeof window !== "undefined") {
  let _settingsTrackingReady = false;
  whenPersistHydrated(useAppStore, () => {
    _settingsTrackingReady = true;
  });
  useAppStore.subscribe((state, prev) => {
    if (!_settingsTrackingReady || globalThis.__N4_RESTORING_SETTINGS__ || state.settingsChangedAt !== prev.settingsChangedAt) return;
    for (const key of Object.keys(state)) {
      if (_SYNC_META_KEYS.has(key)) continue;
      if (typeof state[key] === "function") continue;
      if (state[key] !== prev[key]) {
        useAppStore.setState({ settingsChangedAt: nextIsoTimestamp(prev.settingsChangedAt) });
        break;
      }
    }
  });
}
function RouteLoadingShell({ cards = 4, lines = 5 }) {
  const itemCount = cards > 0 ? cards : Math.max(3, lines);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "v6-route-state v6-route-loading", role: "status", "aria-busy": "true", "aria-live": "polite", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-route-state__icon", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 24, strokeWidth: 1.8 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v6-route-state__copy", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Đang chuẩn bị nội dung" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bố cục được giữ ổn định trong khi phần học được tải." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `v6-route-loading__grid${cards > 0 ? "" : " v6-route-loading__grid--lines"}`, "aria-hidden": "true", children: Array.from({ length: itemCount }, (_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}, index)) })
  ] });
}
function RouteErrorShell({ chunkError = false, incidentId, onReset }) {
  const theme = useAppStore((state) => state.theme);
  const themeFamily = useAppStore((state) => state.highContrast ? "high-contrast" : state.themeFamily);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "v6-fatal-shell", "data-design-version": "v6", "data-theme-family": themeFamily, "data-theme-mode": theme, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "v6-route-state v6-route-error", role: "alert", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-route-state__icon", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 28, strokeWidth: 1.8 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v6-route-state__copy", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "v6-route-state__eyebrow", children: "Khôi phục an toàn" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: chunkError ? "Chưa tải được phiên bản mới" : "Không thể hiển thị nội dung này" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: chunkError ? "Ứng dụng đã thử làm mới một lần và sẽ không lặp vô hạn. Tiến độ học trên thiết bị vẫn được giữ nguyên." : "Tiến độ học của bạn vẫn an toàn. Trở về trang chủ để tiếp tục với nội dung khác." }),
      incidentId && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "v6-route-state__incident", children: [
        "Mã sự cố: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: incidentId })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", onClick: onReset, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(House, { size: 18, "aria-hidden": "true" }),
      "Về trang chủ"
    ] })
  ] }) });
}
class ErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    __publicField(this, "reset", () => {
      this.setState((state) => ({
        error: null,
        incidentId: null,
        resetKey: state.resetKey + 1
      }));
      if (this.props.onReset) {
        this.props.onReset();
      } else {
        window.location.hash = "#/";
      }
    });
    this.state = { error: null, resetKey: 0, incidentId: null };
  }
  static getDerivedStateFromError(error) {
    const incidentId = `N4-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    return { error, incidentId };
  }
  componentDidCatch(err, info) {
    console.error("[ErrorBoundary]", err, info);
    if (isChunkLoadError(err) && claimChunkReload(window.sessionStorage, window.location.href)) {
      window.location.reload();
    }
  }
  render() {
    if (this.state.error) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(RouteErrorShell, { chunkError: isChunkLoadError(this.state.error), incidentId: this.state.incidentId, onReset: this.reset });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, { children: this.props.children }, this.state.resetKey);
  }
}
function RouteErrorBoundary({ children }) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { onReset: () => navigate("/", { replace: true }), children });
}
function isRestorableRoute(route) {
  if (typeof route !== "string" || !route.startsWith("/") || route.startsWith("//")) return false;
  const pathname = route.split("?")[0];
  return RESTORABLE_ROUTE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}
function RestoreLastRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const hasRestored = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (hasRestored.current) return;
    hasRestored.current = true;
    try {
      const lastRoute = localStorage.getItem(STORAGE_KEYS.LAST_ROUTE);
      if (isRestorableRoute(lastRoute) && location.pathname === "/") {
        navigate(lastRoute, { replace: true });
      }
    } catch (e) {
    }
  }, []);
  return null;
}
function AppProviders({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(QualityProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(OverlayProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HashRouter, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RestoreLastRoute, {}),
    children
  ] }) }) }) });
}
const ICO = { size: 20, strokeWidth: 1.8 };
function IOSNavBar({
  title,
  largeTitle = false,
  backLabel,
  backPath,
  onHamburger,
  rightActions,
  className = ""
}) {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = reactExports.useState(false);
  const sentinelRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!largeTitle) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const obs = new IntersectionObserver(
      ([entry]) => setCollapsed(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, [largeTitle]);
  const handleBack = reactExports.useCallback(() => {
    if (backPath) navigate(backPath);
    else navigate(-1);
  }, [backPath, navigate]);
  const showBack = !!backLabel;
  const showHamburger = !showBack && !!onHamburger;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: `n4-ios-nav ${collapsed ? "n4-ios-nav--collapsed" : ""} ${className}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ios-nav-left", children: [
        showBack && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-ios-back-btn", onClick: handleBack, "aria-label": "Quay lại", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { ...ICO }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ios-back-label", children: backLabel })
        ] }),
        showHamburger && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "n4-btn n4-btn-icon n4-btn-ghost",
            onClick: onHamburger,
            "aria-label": "Menu",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { ...ICO })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ios-nav-center", children: (!largeTitle || collapsed) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ios-nav-title", children: title }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ios-nav-right", children: rightActions })
    ] }),
    largeTitle && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: sentinelRef, className: "n4-ios-large-title-sentinel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-ios-large-title ${collapsed ? "n4-ios-large-title--hidden" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: title }) })
    ] })
  ] });
}
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
  const list = Array.isArray(missing) ? missing.filter(Boolean) : [];
  if (list.length === 0) return "Runtime config is valid.";
  return `Missing public runtime config: ${list.join(", ")}. Cloud features are disabled until these variables are provided.`;
}
function reportPublicRuntimeConfigIssues(config = getPublicRuntimeConfig(), logger2 = console.error) {
  if (config.ok) return false;
  logger2(`[Config] ${formatMissingPublicEnvMessage(config.missing)}`);
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
function normalizeProfileText(value) {
  return typeof value === "string" ? value.trim() : "";
}
function toNonNegativeNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.max(0, Math.round(parsed)) : fallback;
}
function supportsEmailRetry(error, fields) {
  if (!fields || !Object.prototype.hasOwnProperty.call(fields, "email")) return false;
  const message = String((error == null ? void 0 : error.message) || "").toLowerCase();
  return message.includes("email") && (message.includes("column") || message.includes("schema cache"));
}
function executeProfileMutation(mode, payload, userId) {
  return supabase.from("user_profiles").update(payload).eq("id", userId).select().single();
}
const OPTIONAL_COLUMNS_RETRY_ORDER = [
  "email",
  "last_active_at",
  "total_quizzes",
  "total_correct",
  "avatar_url",
  "display_name",
  // migration-007 columns (may not exist on older environments)
  "total_xp",
  "skill_points",
  "total_skill_points_earned"
];
function isSchemaCacheError(error, field) {
  const message = String((error == null ? void 0 : error.message) || "").toLowerCase();
  const details = String((error == null ? void 0 : error.details) || "").toLowerCase();
  const blob = `${message} ${details}`;
  if (!blob.includes(field.toLowerCase())) return false;
  return blob.includes("column") || blob.includes("schema cache") || blob.includes("does not exist");
}
function stripField(payload, field) {
  if (!Object.prototype.hasOwnProperty.call(payload, field)) return payload;
  const next = { ...payload };
  delete next[field];
  return next;
}
async function writeProfileMutation(mode, payload, userId) {
  let { data, error } = await executeProfileMutation(mode, payload, userId);
  if (error && supportsEmailRetry(error, payload)) {
    const retryPayload = stripField(payload, "email");
    ({ data, error } = await executeProfileMutation(mode, retryPayload, userId));
  }
  if (error) {
    let trimmedPayload = payload;
    for (const field of OPTIONAL_COLUMNS_RETRY_ORDER) {
      if (!isSchemaCacheError(error, field)) continue;
      if (!Object.prototype.hasOwnProperty.call(trimmedPayload, field)) continue;
      trimmedPayload = stripField(trimmedPayload, field);
      ({ data, error } = await executeProfileMutation(mode, trimmedPayload, userId));
      if (!error) break;
    }
  }
  if (error) throw error;
  return data;
}
function buildAppUserSnapshot(user, profile) {
  var _a2, _b2;
  const id = (user == null ? void 0 : user.id) || (profile == null ? void 0 : profile.id) || null;
  if (!id) return null;
  const email = normalizeProfileText(user == null ? void 0 : user.email) || normalizeProfileText(profile == null ? void 0 : profile.email);
  const fallbackName = email ? email.split("@")[0] : "Learner";
  const name = normalizeProfileText(profile == null ? void 0 : profile.display_name) || normalizeProfileText(user == null ? void 0 : user.name) || normalizeProfileText((_a2 = user == null ? void 0 : user.user_metadata) == null ? void 0 : _a2.full_name) || fallbackName;
  const avatar = normalizeProfileText(profile == null ? void 0 : profile.avatar_url) || normalizeProfileText(user == null ? void 0 : user.avatar) || normalizeProfileText((_b2 = user == null ? void 0 : user.user_metadata) == null ? void 0 : _b2.avatar_url) || "";
  return {
    id,
    email,
    name,
    avatar
  };
}
function buildProfileSeedFields(user) {
  var _a2, _b2;
  const displayName = normalizeProfileText(user == null ? void 0 : user.name) || normalizeProfileText((_a2 = user == null ? void 0 : user.user_metadata) == null ? void 0 : _a2.full_name) || normalizeProfileText((user == null ? void 0 : user.email) ? user.email.split("@")[0] : "") || "Learner";
  const avatarUrl = normalizeProfileText(user == null ? void 0 : user.avatar) || normalizeProfileText((_b2 = user == null ? void 0 : user.user_metadata) == null ? void 0 : _b2.avatar_url) || null;
  const email = normalizeProfileText(user == null ? void 0 : user.email) || null;
  return {
    display_name: displayName,
    avatar_url: avatarUrl,
    email
  };
}
function buildProfileSyncFields(stats = {}) {
  const fields = {
    xp: toNonNegativeNumber(stats.xp, 0),
    level: Math.max(1, toNonNegativeNumber(stats.level, 1)),
    streak: toNonNegativeNumber(stats.streak, 0),
    total_quizzes: toNonNegativeNumber(stats.totalQuizzes, 0),
    total_correct: toNonNegativeNumber(stats.totalCorrect, 0),
    last_active_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  const displayName = normalizeProfileText(stats.displayName);
  const avatarUrl = normalizeProfileText(stats.avatarUrl);
  if (displayName) fields.display_name = displayName;
  if (avatarUrl) fields.avatar_url = avatarUrl;
  return fields;
}
async function getProfile(userId) {
  const { data, error } = await supabase.rpc("get_current_user_profile");
  if (error && error.code !== "PGRST116") throw error;
  if ((data == null ? void 0 : data.id) && userId && data.id !== userId) throw new Error("Profile scope mismatch");
  return data;
}
async function updateProfile(userId, fields) {
  return writeProfileMutation("update", {
    ...fields,
    last_active_at: (/* @__PURE__ */ new Date()).toISOString()
  }, userId);
}
async function syncProfileStats(userId, stats) {
  if (!userId) return null;
  try {
    return await updateProfile(userId, buildProfileSyncFields(stats));
  } catch (error) {
    console.warn("[Profiles] sync stats failed:", {
      message: (error == null ? void 0 : error.message) || String(error),
      code: error == null ? void 0 : error.code,
      details: error == null ? void 0 : error.details,
      hint: error == null ? void 0 : error.hint
    });
    return null;
  }
}
async function getAllProfiles() {
  const { data, error } = await supabase.rpc("admin_list_user_profiles");
  if (error) throw error;
  return data || [];
}
async function setUserRole(userId, role) {
  const { error } = await supabase.rpc("admin_set_user_access", {
    target_user_id: userId,
    next_role: role
  });
  if (error) throw error;
}
async function setUserAccess(userId, role, { reason = null, duration = null, banUntil = null } = {}) {
  const { data, error } = await supabase.rpc("admin_set_user_access", {
    target_user_id: userId,
    next_role: role,
    ban_reason: reason,
    ban_duration: duration,
    ban_until: banUntil
  });
  if (error) throw error;
  return data;
}
async function ensureProfile(user) {
  if (!user) return null;
  const seedFields = buildProfileSeedFields(user);
  const { data, error } = await supabase.rpc("ensure_current_user_profile", {
    profile_display_name: seedFields.display_name,
    profile_avatar_url: seedFields.avatar_url,
    profile_email: seedFields.email
  });
  if (error) throw error;
  return data;
}
function getOAuthRedirectUrl(locationLike = window.location) {
  return `${locationLike.origin}${locationLike.pathname}`;
}
async function signInWithGoogle() {
  assertSupabaseConfigured("Google OAuth sign-in");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: getOAuthRedirectUrl() }
  });
  if (error) throw error;
  return data;
}
async function signOut() {
  assertSupabaseConfigured("Sign out");
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
async function getSession() {
  if (!isSupabaseConfigured) return null;
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}
async function checkBlocked(userId) {
  if (!isSupabaseConfigured) return false;
  if (!userId) return false;
  try {
    const profile = await getProfile(userId);
    if ((profile == null ? void 0 : profile.role) === "blocked") {
      const banUntil = (profile == null ? void 0 : profile.ban_until) ? Date.parse(profile.ban_until) : Number.NaN;
      if (Number.isFinite(banUntil) && banUntil <= Date.now()) {
        const { error } = await supabase.rpc("release_expired_current_user_ban");
        if (error) throw error;
        return false;
      }
      await signOut();
      throw new Error("Tài khoản đã bị khóa. Vui lòng liên hệ admin.");
    }
  } catch (e) {
    if (e.message.includes("bị khóa")) throw e;
    console.warn("[Auth] checkBlocked error:", e.message);
    throw e;
  }
  return false;
}
function onAuthChange(callback) {
  if (!isSupabaseConfigured) return () => {
  };
  const pendingCallbacks = /* @__PURE__ */ new Set();
  const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
    const timeoutId = setTimeout(() => {
      pendingCallbacks.delete(timeoutId);
      Promise.resolve(callback(event, session)).catch((error) => {
        console.error("[Auth] state-change handler failed:", (error == null ? void 0 : error.message) || String(error));
      });
    }, 0);
    pendingCallbacks.add(timeoutId);
  });
  return () => {
    pendingCallbacks.forEach((timeoutId) => clearTimeout(timeoutId));
    pendingCallbacks.clear();
    subscription.unsubscribe();
  };
}
function toMs(isoLike) {
  if (!isoLike) return 0;
  const ms = new Date(isoLike).getTime();
  return Number.isFinite(ms) ? ms : 0;
}
function dedupeByKey(arr) {
  if (!Array.isArray(arr)) return [];
  const seen = /* @__PURE__ */ new Set();
  return arr.filter((item) => {
    let k = (item == null ? void 0 : item.ts) || (item == null ? void 0 : item.timestamp) || (item == null ? void 0 : item.id);
    if (!k) {
      try {
        k = JSON.stringify(item);
      } catch (e) {
        k = String(item);
      }
    }
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}
function asPlainObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}
function validateCloudRow(row) {
  var _a2;
  if (!row || typeof row !== "object" || Array.isArray(row)) {
    console.warn("[Sync] validateCloudRow: received invalid row", typeof row);
    return null;
  }
  try {
    if (new TextEncoder().encode(JSON.stringify(row)).byteLength > 2e6) {
      console.warn("[Sync] validateCloudRow: payload exceeds 2 MB limit");
      return null;
    }
  } catch (e) {
    return null;
  }
  return {
    ...row,
    learning: asPlainObject(row.learning),
    settings: {
      ...asPlainObject(row.settings),
      legacy: asPlainObject((_a2 = row.settings) == null ? void 0 : _a2.legacy)
    },
    bookmarks: asPlainObject(row.bookmarks),
    srs: asPlainObject(row.srs),
    trainer_stats: asPlainObject(row.trainer_stats)
  };
}
function asPlainObjectLocal(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}
function mergeGems(local = {}, cloud = {}) {
  const l = asPlainObjectLocal(local);
  const c = asPlainObjectLocal(cloud);
  const lShards = asPlainObjectLocal(l.shards);
  const cShards = asPlainObjectLocal(c.shards);
  return {
    gems: Math.max(Number(l.gems) || 0, Number(c.gems) || 0),
    gemLog: dedupeByKey([...Array.isArray(c.gemLog) ? c.gemLog : [], ...Array.isArray(l.gemLog) ? l.gemLog : []]).slice(-100),
    shards: {
      common: Math.max(Number(lShards.common) || 0, Number(cShards.common) || 0),
      rare: Math.max(Number(lShards.rare) || 0, Number(cShards.rare) || 0),
      epic: Math.max(Number(lShards.epic) || 0, Number(cShards.epic) || 0),
      legendary: Math.max(Number(lShards.legendary) || 0, Number(cShards.legendary) || 0)
    }
  };
}
function mergeTokens(local = {}, cloud = {}) {
  const l = asPlainObjectLocal(local);
  const c = asPlainObjectLocal(cloud);
  return {
    tokens: Math.max(Number(l.tokens) || 0, Number(c.tokens) || 0),
    tokenLog: dedupeByKey([...Array.isArray(c.tokenLog) ? c.tokenLog : [], ...Array.isArray(l.tokenLog) ? l.tokenLog : []]).slice(-100)
  };
}
function mergeClaimMapsByDate(local = {}, cloud = {}) {
  const l = asPlainObjectLocal(local);
  const c = asPlainObjectLocal(cloud);
  const out = {};
  const periods = /* @__PURE__ */ new Set([...Object.keys(l), ...Object.keys(c)]);
  for (const period of periods) {
    const lp = asPlainObjectLocal(l[period]);
    const cp = asPlainObjectLocal(c[period]);
    const ids = /* @__PURE__ */ new Set([...Object.keys(lp), ...Object.keys(cp)]);
    const merged = {};
    for (const id of ids) {
      const lt = Number(lp[id]) || 0;
      const ct = Number(cp[id]) || 0;
      merged[id] = Math.max(lt, ct);
    }
    out[period] = merged;
  }
  return out;
}
function mergeQuests(local = {}, cloud = {}) {
  const l = asPlainObjectLocal(local);
  const c = asPlainObjectLocal(cloud);
  const lDaily = asPlainObjectLocal(l.claimedDaily);
  const cDaily = asPlainObjectLocal(c.claimedDaily);
  let claimedDaily;
  if (lDaily.day && cDaily.day && lDaily.day === cDaily.day) {
    claimedDaily = { day: lDaily.day, ids: { ...asPlainObjectLocal(cDaily.ids), ...asPlainObjectLocal(lDaily.ids) } };
  } else if (lDaily.day && (!cDaily.day || lDaily.day > cDaily.day)) {
    claimedDaily = { day: lDaily.day, ids: asPlainObjectLocal(lDaily.ids) };
  } else if (cDaily.day) {
    claimedDaily = { day: cDaily.day, ids: asPlainObjectLocal(cDaily.ids) };
  } else {
    claimedDaily = { day: null, ids: {} };
  }
  const lWeekly = asPlainObjectLocal(l.claimedWeekly);
  const cWeekly = asPlainObjectLocal(c.claimedWeekly);
  let claimedWeekly;
  if (lWeekly.week && cWeekly.week && lWeekly.week === cWeekly.week) {
    claimedWeekly = { week: lWeekly.week, ids: { ...asPlainObjectLocal(cWeekly.ids), ...asPlainObjectLocal(lWeekly.ids) } };
  } else if (lWeekly.week && (!cWeekly.week || lWeekly.week > cWeekly.week)) {
    claimedWeekly = { week: lWeekly.week, ids: asPlainObjectLocal(lWeekly.ids) };
  } else if (cWeekly.week) {
    claimedWeekly = { week: cWeekly.week, ids: asPlainObjectLocal(cWeekly.ids) };
  } else {
    claimedWeekly = { week: null, ids: {} };
  }
  const chainProgress = { ...asPlainObjectLocal(c.chainProgress) };
  for (const [id, p] of Object.entries(asPlainObjectLocal(l.chainProgress))) {
    const existing = chainProgress[id];
    const lTs = toMs(p == null ? void 0 : p.startedAt);
    const eTs = toMs(existing == null ? void 0 : existing.startedAt);
    if (!existing || lTs >= eTs) chainProgress[id] = p;
  }
  return {
    schema: Math.max(Number(l.schema) || 1, Number(c.schema) || 1),
    claimedDaily,
    claimedWeekly,
    chainProgress,
    seasonBonusClaimed: { ...asPlainObjectLocal(c.seasonBonusClaimed), ...asPlainObjectLocal(l.seasonBonusClaimed) },
    completionLog: dedupeByKey([...Array.isArray(c.completionLog) ? c.completionLog : [], ...Array.isArray(l.completionLog) ? l.completionLog : []]).slice(-200)
  };
}
function mergePetDepth(local = {}, cloud = {}) {
  const l = asPlainObjectLocal(local);
  const c = asPlainObjectLocal(cloud);
  const petAbilityCooldowns = { ...asPlainObjectLocal(c.petAbilityCooldowns) };
  for (const [k, v] of Object.entries(asPlainObjectLocal(l.petAbilityCooldowns))) {
    petAbilityCooldowns[k] = Math.max(Number(petAbilityCooldowns[k]) || 0, Number(v) || 0);
  }
  const petOutfits = { ...asPlainObjectLocal(c.petOutfits), ...asPlainObjectLocal(l.petOutfits) };
  const petQuests = { ...asPlainObjectLocal(c.petQuests) };
  for (const [day, quests] of Object.entries(asPlainObjectLocal(l.petQuests))) {
    const existing = Array.isArray(petQuests[day]) ? petQuests[day] : [];
    const byId = new Map(existing.filter((q) => q == null ? void 0 : q.id).map((q) => [q.id, q]));
    for (const q of Array.isArray(quests) ? quests : []) {
      if (!(q == null ? void 0 : q.id)) continue;
      const prior = byId.get(q.id);
      if (!prior) {
        byId.set(q.id, q);
        continue;
      }
      const prog = (Number(q.progress) || 0) > (Number(prior.progress) || 0);
      const claimedNow = !!q.claimed && !prior.claimed;
      byId.set(q.id, prog || claimedNow ? { ...prior, ...q } : prior);
    }
    petQuests[day] = Array.from(byId.values());
  }
  return {
    petAbilityCooldowns,
    petOutfits,
    petQuests,
    petParadeUnlocked: !!(l.petParadeUnlocked || c.petParadeUnlocked)
  };
}
function mergeCooking(local = {}, cloud = {}) {
  const l = asPlainObjectLocal(local);
  const c = asPlainObjectLocal(cloud);
  const maxMergeNumeric = (lMap, cMap) => {
    const out = { ...asPlainObjectLocal(cMap) };
    for (const [k, v] of Object.entries(asPlainObjectLocal(lMap))) {
      out[k] = Math.max(Number(out[k]) || 0, Number(v) || 0);
    }
    return out;
  };
  const now = Date.now();
  const cookingBuffs = {};
  for (const [ref, buff] of Object.entries(asPlainObjectLocal(c.cookingBuffs))) {
    if (Number(buff == null ? void 0 : buff.expiresAt) > now) cookingBuffs[ref] = buff;
  }
  for (const [ref, buff] of Object.entries(asPlainObjectLocal(l.cookingBuffs))) {
    if (Number(buff == null ? void 0 : buff.expiresAt) <= now) continue;
    const existing = cookingBuffs[ref];
    if (!existing || Number(buff.expiresAt) > Number(existing.expiresAt)) cookingBuffs[ref] = buff;
  }
  return {
    ingredients: maxMergeNumeric(l.ingredients, c.ingredients),
    dishes: maxMergeNumeric(l.dishes, c.dishes),
    cookingBuffs,
    recipesKnown: { ...asPlainObjectLocal(c.recipesKnown), ...asPlainObjectLocal(l.recipesKnown) },
    cookingXp: Math.max(Number(l.cookingXp) || 0, Number(c.cookingXp) || 0)
  };
}
function mergeMarket(local = {}, cloud = {}) {
  const l = asPlainObjectLocal(local);
  const c = asPlainObjectLocal(cloud);
  const lIdx = Number.isFinite(Number(l.lastSeenDayIndex)) ? Number(l.lastSeenDayIndex) : null;
  const cIdx = Number.isFinite(Number(c.lastSeenDayIndex)) ? Number(c.lastSeenDayIndex) : null;
  const lFs = asPlainObjectLocal(l.flashSale);
  const cFs = asPlainObjectLocal(c.flashSale);
  let flashSale = null;
  const lUntil = toMs(lFs == null ? void 0 : lFs.until);
  const cUntil = toMs(cFs == null ? void 0 : cFs.until);
  const hasL = !!(lFs && Object.keys(lFs).length);
  const hasC = !!(cFs && Object.keys(cFs).length);
  if (hasL && hasC) flashSale = lUntil >= cUntil ? l.flashSale : c.flashSale;
  else if (hasL) flashSale = l.flashSale;
  else if (hasC) flashSale = c.flashSale;
  return {
    watchlist: { ...asPlainObjectLocal(c.watchlist), ...asPlainObjectLocal(l.watchlist) },
    lastSeenDayIndex: lIdx == null && cIdx == null ? null : Math.max(lIdx != null ? lIdx : -1, cIdx != null ? cIdx : -1),
    flashSale
  };
}
function mergeSlices(local = {}, cloud = {}) {
  const l = asPlainObjectLocal(local);
  const c = asPlainObjectLocal(cloud);
  return {
    gems: mergeGems(l.gems, c.gems),
    tokens: mergeTokens(l.tokens, c.tokens),
    quests: mergeQuests(l.quests, c.quests),
    petDepth: mergePetDepth(l.petDepth, c.petDepth),
    cooking: mergeCooking(l.cooking, c.cooking),
    market: mergeMarket(l.market, c.market),
    combat: mergeCombatStats(l.combat, c.combat),
    worldPrefs: mergeWorldPrefs(l.worldPrefs, c.worldPrefs)
  };
}
function mergeCombatStats(local = {}, cloud = {}) {
  const l = asPlainObjectLocal(local);
  const c = asPlainObjectLocal(cloud);
  return {
    killCount: Math.max(Number(l.killCount) || 0, Number(c.killCount) || 0),
    deathCount: Math.max(Number(l.deathCount) || 0, Number(c.deathCount) || 0),
    totalXpEarned: Math.max(Number(l.totalXpEarned) || 0, Number(c.totalXpEarned) || 0)
  };
}
function mergeWorldPrefs(local = {}, cloud = {}) {
  var _a2, _b2, _c, _d, _e;
  const l = asPlainObjectLocal(local);
  const c = asPlainObjectLocal(cloud);
  const lTs = toMs(l.changedAt);
  const cTs = toMs(c.changedAt);
  const winner = cTs > lTs ? c : l;
  return {
    isDay: (_a2 = winner.isDay) != null ? _a2 : true,
    season: (_b2 = winner.season) != null ? _b2 : "spring",
    weather: (_c = winner.weather) != null ? _c : "clear",
    world3dConfig: (_d = winner.world3dConfig) != null ? _d : {},
    changedAt: (_e = winner.changedAt) != null ? _e : null
  };
}
const WORLD_STUDY_PROGRESS_STORAGE_KEY = "n4-world-study-progress-v1";
const STUDY_PROGRESS_CHANGED_EVENT = "n4-world-study-progress:changed";
const STUDY_DOMAINS = ["vocab", "vocabJlpt", "kanji", "grammar", "particles", "conjugation", "keigo"];
let memoryState = null;
function hasStorage() {
  return typeof window !== "undefined" && !!window.localStorage;
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
function setStudyProgressSnapshot(snapshot2, options = {}) {
  const next = options.merge ? mergeStudyProgressSnapshots(readState(), snapshot2) : normalizeState(snapshot2);
  writeState(next, { action: options.source || "set-snapshot" });
  return next;
}
function canonicalReceipt(receipt) {
  if (!receipt || typeof receipt.id !== "string" || !receipt.id.startsWith("study:") || typeof receipt.heroId !== "string" || !receipt.heroId || typeof receipt.activityId !== "string" || !receipt.activityId || receipt.itemCount !== 5 || !Number.isInteger(receipt.recommendedLevel) || receipt.recommendedLevel < 1 || receipt.recommendedLevel > 50) throw new Error("Invalid world reward entitlement");
  return { id: receipt.id, heroId: receipt.heroId, activityId: receipt.activityId, recommendedLevel: receipt.recommendedLevel, itemCount: 5 };
}
function validateRewardEntitlement(entry, id, owner, generation) {
  const receipt = canonicalReceipt(entry == null ? void 0 : entry.receipt);
  if (receipt.id !== id || entry.owner !== owner || entry.generation !== generation || entry.fingerprint !== JSON.stringify(receipt)) throw new Error("Conflicting world reward entitlement");
  return { ...entry, receipt };
}
function recordRewardEntitlement(doc, receipt) {
  var _a2;
  const canonical = canonicalReceipt(receipt);
  const entry = { owner: doc.owner, generation: doc.generation, receipt: canonical, fingerprint: JSON.stringify(canonical) };
  const previous = (_a2 = doc.rewardEntitlements) == null ? void 0 : _a2[canonical.id];
  if (previous) {
    validateRewardEntitlement(previous, canonical.id, doc.owner, doc.generation);
    if (previous.fingerprint !== entry.fingerprint) throw new Error("Conflicting world reward entitlement");
    return previous;
  }
  doc.rewardEntitlements = { ...doc.rewardEntitlements || {}, [canonical.id]: entry };
  return entry;
}
function mergeRewardEntitlements(local = {}, remote = {}, owner, generation) {
  if (!local || typeof local !== "object" || Array.isArray(local) || !remote || typeof remote !== "object" || Array.isArray(remote)) throw new Error("Invalid reward entitlements map");
  const merged = {};
  for (const map of [local, remote]) for (const [id, entry] of Object.entries(map)) {
    const valid = validateRewardEntitlement(entry, id, owner, generation);
    if (merged[id] && merged[id].fingerprint !== valid.fingerprint) throw new Error("Conflicting world reward entitlement");
    merged[id] = valid;
  }
  return merged;
}
function restoreRewardEntitlements(doc) {
  var _a2;
  doc.rewardEntitlements = mergeRewardEntitlements(doc.rewardEntitlements || {}, {}, doc.owner, doc.generation);
  if ((_a2 = doc.session) == null ? void 0 : _a2.reward) recordRewardEntitlement(doc, doc.session.reward);
  for (const pending of Object.values(doc.observedSessions || {})) recordRewardEntitlement(doc, pending.receipt);
  return doc;
}
function createWorldLearningJournal({ owner, storage = globalThis.localStorage, generation = 0 }) {
  if (!owner || !storage) throw new Error("Learning storage unavailable");
  const key = `n4:world-learning:v1:${encodeURIComponent(owner)}:${generation}`;
  return {
    key,
    read() {
      assertLearningOwnerReady();
      const raw = storage.getItem(key);
      if (!raw) return { schema: 1, owner, generation, updatedAt: 0, session: null, requests: {}, rewardEntitlements: {} };
      return validateWorldLearningSnapshot(JSON.parse(raw), owner, generation);
    },
    write(value) {
      assertLearningOwnerReady();
      value.updatedAt = Math.max(Date.now(), (value.updatedAt || 0) + 1);
      validateWorldLearningSnapshot(value, owner, generation);
      const existingRaw = storage.getItem(key);
      if (existingRaw) {
        const existing = validateWorldLearningSnapshot(JSON.parse(existingRaw), owner, generation);
        value.rewardEntitlements = mergeRewardEntitlements(existing.rewardEntitlements, value.rewardEntitlements, owner, generation);
      }
      const serialized = JSON.stringify(value);
      storage.setItem(key, serialized);
      if (storage.getItem(key) !== serialized) throw new Error("Learning journal was not saved");
      if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("n4:world-learning-changed"));
    }
  };
}
function validateWorldLearningSnapshot(value, owner = value == null ? void 0 : value.owner, generation = value == null ? void 0 : value.generation) {
  var _a2, _b2;
  if (!value || value.schema !== 1 || typeof value.owner !== "string" || !value.owner || value.owner !== owner || !Number.isInteger(value.generation) || value.generation < 0 || value.generation !== generation || !value.requests || typeof value.requests !== "object" || Array.isArray(value.requests)) throw new Error("Invalid learning journal; saved data preserved");
  const s = value.session;
  if (s && (!s.id || !s.heroId || !Array.isArray(s.questions) || s.questions.length !== 5 || !Number.isInteger(s.index) || s.index < 0 || s.index >= 5 || !Number.isInteger(s.sequence) || !s.answers || !s.assisted || !["active", "feedback", "completed", "cancelled"].includes(s.status))) throw new Error("Invalid saved learning session");
  if (s) {
    for (const q of s.questions) if (!validQuestion(q)) throw new Error("Invalid saved learning question");
  }
  for (const pending of Object.values(value.observedSessions || {})) if (!pending || typeof pending.fingerprint !== "string" || typeof pending.queued !== "boolean" || !((_b2 = (_a2 = pending.receipt) == null ? void 0 : _a2.id) == null ? void 0 : _b2.startsWith("study:trainer:")) || typeof pending.receipt.heroId !== "string" || typeof pending.receipt.activityId !== "string" || pending.receipt.itemCount !== 5 || !Number.isInteger(pending.receipt.recommendedLevel) || pending.receipt.recommendedLevel < 1 || pending.receipt.recommendedLevel > 50) throw new Error("Invalid saved trainer receipt");
  return restoreRewardEntitlements(value);
}
function validQuestion(q) {
  if (!q || typeof q.id !== "string" || !/^[vkg]:.+/.test(q.itemKey || "") || typeof q.prompt !== "string") return false;
  if (q.interaction === "sentence") {
    if (!Array.isArray(q.tokens) || q.tokens.length < 3 || q.tokens.length > 8 || q.tokens.some((t) => !t || typeof t.id !== "string" || !t.id || typeof t.label !== "string" || !t.label.trim())) return false;
    const ids = new Set(q.tokens.map((t) => t.id));
    if (ids.size !== q.tokens.length || !Array.isArray(q.correctTokenIds) || q.correctTokenIds.length !== ids.size || new Set(q.correctTokenIds).size !== ids.size || q.correctTokenIds.some((id) => !ids.has(id))) return false;
    return typeof q.answerLabel === "string" && q.correctTokenIds.map((id) => q.tokens.find((t) => t.id === id).label).join("") === q.answerLabel;
  }
  if (q.interaction !== void 0 && q.interaction !== "choice") return false;
  return Array.isArray(q.choices) && q.choices.some((c) => (c == null ? void 0 : c.id) === q.correctChoiceId) && !q.choices.some((c) => !c || typeof c.id !== "string" || typeof c.label !== "string");
}
function mergeWorldLearningSnapshots(local, remote) {
  if (!local) return remote ? validateWorldLearningSnapshot(remote) : void 0;
  if (!remote) return validateWorldLearningSnapshot(local);
  validateWorldLearningSnapshot(local);
  validateWorldLearningSnapshot(remote);
  if (local.owner !== remote.owner) throw new Error("Learning journal owner mismatch");
  if (local.generation !== remote.generation) return local.generation > remote.generation ? local : remote;
  const winner = (local.updatedAt || 0) === (remote.updatedAt || 0) ? JSON.stringify(local) >= JSON.stringify(remote) ? local : remote : (local.updatedAt || 0) > (remote.updatedAt || 0) ? local : remote;
  const observedSessions = { ...local.observedSessions || {} };
  for (const [id, entry] of Object.entries(remote.observedSessions || {})) {
    const previous = observedSessions[id];
    if (previous && previous.fingerprint !== entry.fingerprint) throw new Error("Conflicting trainer receipt");
    observedSessions[id] = (previous == null ? void 0 : previous.queued) ? previous : entry;
  }
  return { ...winner, observedSessions, rewardEntitlements: mergeRewardEntitlements(local.rewardEntitlements, remote.rewardEntitlements, local.owner, local.generation) };
}
function getWorldStudyProgressWeight(progress) {
  if (!progress || typeof progress !== "object" || Array.isArray(progress)) return 0;
  let weight = 0;
  for (const domainId of STUDY_DOMAINS) {
    const domain = progress[domainId];
    if (!domain || typeof domain !== "object" || Array.isArray(domain)) continue;
    weight += Array.isArray(domain.completed) ? domain.completed.length : 0;
    weight += Array.isArray(domain.missed) ? domain.missed.length : 0;
    if (Number(domain.resetAt) > 0) weight += 1;
  }
  return weight;
}
function computeDataWeight(data) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let w = 0;
  w += Object.keys((data == null ? void 0 : data.bookmarks) || {}).length;
  w += Object.keys((data == null ? void 0 : data.srs) || {}).length;
  for (const v of Object.values((data == null ? void 0 : data.trainer_stats) || {})) {
    w += (v == null ? void 0 : v.plays) || 0;
  }
  w += ((_a2 = data == null ? void 0 : data.learning) == null ? void 0 : _a2.xp) || 0;
  w += ((_b2 = data == null ? void 0 : data.learning) == null ? void 0 : _b2.combo) || 0;
  w += ((_c = data == null ? void 0 : data.learning) == null ? void 0 : _c.maxCombo) || 0;
  w += (((_d = data == null ? void 0 : data.learning) == null ? void 0 : _d.achievements) || []).length;
  w += Object.keys(((_e = data == null ? void 0 : data.learning) == null ? void 0 : _e.studyHistory) || {}).length;
  w += Object.keys(((_f = data == null ? void 0 : data.learning) == null ? void 0 : _f.studyActivity) || {}).length;
  const leg = ((_g = data == null ? void 0 : data.settings) == null ? void 0 : _g.legacy) || {};
  w += Object.keys(leg.mistakes || {}).length;
  w += (leg.quizHistory || []).length;
  w += (leg.customCards || []).length;
  w += (leg.aiDiary || []).length;
  w += (leg.playlist || []).length;
  w += (((_h = leg.draftFeatures) == null ? void 0 : _h.shortlistIds) || []).length;
  w += Object.keys(((_i = leg.draftFeatures) == null ? void 0 : _i.roadmapData) || {}).length;
  w += getWorldStudyProgressWeight((_k = (_j = data == null ? void 0 : data.learning) == null ? void 0 : _j._slices) == null ? void 0 : _k.worldStudyProgress);
  return w;
}
function normalizeDraftFeaturesPayload(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { shortlistIds: [], roadmapData: {}, changedAt: "" };
  }
  const shortlistIds = [...new Set(Array.isArray(value.shortlistIds) ? value.shortlistIds.filter((entry) => typeof entry === "string") : [])];
  const roadmapData = value.roadmapData && typeof value.roadmapData === "object" && !Array.isArray(value.roadmapData) ? value.roadmapData : {};
  const changedAt = typeof value.changedAt === "string" ? value.changedAt : "";
  return { shortlistIds, roadmapData, changedAt };
}
function getDraftFeaturesWeight(value) {
  const normalized = normalizeDraftFeaturesPayload(value);
  return normalized.shortlistIds.length + Object.keys(normalized.roadmapData || {}).length;
}
function normalizeUniqueArray(value) {
  return [...new Set(Array.isArray(value) ? value.filter((entry) => entry != null) : [])];
}
function mergeMaxNumericMap(localValue, cloudValue) {
  const localMap = localValue && typeof localValue === "object" && !Array.isArray(localValue) ? localValue : {};
  const cloudMap = cloudValue && typeof cloudValue === "object" && !Array.isArray(cloudValue) ? cloudValue : {};
  const merged = { ...cloudMap };
  for (const [key, value] of Object.entries(localMap)) {
    const localNumber = Number(value);
    const cloudNumber = Number(merged[key]);
    if (Number.isFinite(localNumber) && Number.isFinite(cloudNumber)) {
      merged[key] = Math.max(localNumber, cloudNumber);
      continue;
    }
    if (!Object.prototype.hasOwnProperty.call(merged, key)) {
      merged[key] = value;
    }
  }
  return merged;
}
function mergeStoryProgress(localValue, cloudValue) {
  const localMap = localValue && typeof localValue === "object" && !Array.isArray(localValue) ? localValue : {};
  const cloudMap = cloudValue && typeof cloudValue === "object" && !Array.isArray(cloudValue) ? cloudValue : {};
  const merged = { ...cloudMap };
  for (const [key, value] of Object.entries(localMap)) {
    const localNumber = Number(value);
    const cloudNumber = Number(merged[key]);
    if (Number.isFinite(localNumber) && Number.isFinite(cloudNumber)) {
      merged[key] = Math.max(localNumber, cloudNumber);
      continue;
    }
    if (!Object.prototype.hasOwnProperty.call(merged, key) || merged[key] == null) {
      merged[key] = value;
    }
  }
  return merged;
}
function mergeSameDayCounter(localDate, localCount, cloudDate, cloudCount) {
  if (!localDate && !cloudDate) return { date: null, count: 0 };
  if (!localDate) return { date: cloudDate, count: Math.max(0, Math.round(Number(cloudCount) || 0)) };
  if (!cloudDate) return { date: localDate, count: Math.max(0, Math.round(Number(localCount) || 0)) };
  if (localDate === cloudDate) {
    return {
      date: localDate,
      count: Math.max(
        Math.max(0, Math.round(Number(localCount) || 0)),
        Math.max(0, Math.round(Number(cloudCount) || 0))
      )
    };
  }
  return localDate > cloudDate ? { date: localDate, count: Math.max(0, Math.round(Number(localCount) || 0)) } : { date: cloudDate, count: Math.max(0, Math.round(Number(cloudCount) || 0)) };
}
function mergeTreasureGrid(localGrid, cloudGrid) {
  const localValue = localGrid && typeof localGrid === "object" && !Array.isArray(localGrid) ? localGrid : null;
  const cloudValue = cloudGrid && typeof cloudGrid === "object" && !Array.isArray(cloudGrid) ? cloudGrid : null;
  if (!localValue && !cloudValue) return null;
  const localDug = Array.isArray(localValue == null ? void 0 : localValue.dug) ? localValue.dug : [];
  const cloudDug = Array.isArray(cloudValue == null ? void 0 : cloudValue.dug) ? cloudValue.dug : [];
  return {
    ...cloudValue || localValue || {},
    ...localValue || {},
    treasurePositions: Array.isArray(localValue == null ? void 0 : localValue.treasurePositions) && localValue.treasurePositions.length ? localValue.treasurePositions : Array.isArray(cloudValue == null ? void 0 : cloudValue.treasurePositions) ? cloudValue.treasurePositions : [],
    dug: normalizeUniqueArray([...cloudDug, ...localDug])
  };
}
function mergeDailyDeals(localDeals, cloudDeals, localTs, cloudTs) {
  const localValue = localDeals && typeof localDeals === "object" && !Array.isArray(localDeals) ? localDeals : {};
  const cloudValue = cloudDeals && typeof cloudDeals === "object" && !Array.isArray(cloudDeals) ? cloudDeals : {};
  const localDate = typeof localValue.date === "string" ? localValue.date : null;
  const cloudDate = typeof cloudValue.date === "string" ? cloudValue.date : null;
  if (localDate && cloudDate && localDate !== cloudDate) {
    return localDate > cloudDate ? localValue : cloudValue;
  }
  const useCloudDeals = toMs(cloudTs) > toMs(localTs);
  const winner = useCloudDeals ? cloudValue : localValue;
  const fallback = useCloudDeals ? localValue : cloudValue;
  return {
    date: localDate || cloudDate || null,
    deals: Array.isArray(winner.deals) && winner.deals.length ? winner.deals : Array.isArray(fallback.deals) ? fallback.deals : [],
    claimed: normalizeUniqueArray([...cloudValue.claimed || [], ...localValue.claimed || []])
  };
}
function mergeBounties(localBounties, cloudBounties, localReset, cloudReset) {
  const localList = Array.isArray(localBounties) ? localBounties : [];
  const cloudList = Array.isArray(cloudBounties) ? cloudBounties : [];
  if (localReset && cloudReset && localReset !== cloudReset) {
    return localReset > cloudReset ? localList : cloudList;
  }
  const merged = /* @__PURE__ */ new Map();
  for (const bounty of cloudList) {
    if (bounty == null ? void 0 : bounty.id) merged.set(bounty.id, { ...bounty });
  }
  for (const bounty of localList) {
    if (!(bounty == null ? void 0 : bounty.id)) continue;
    const current = merged.get(bounty.id);
    if (!current) {
      merged.set(bounty.id, { ...bounty });
      continue;
    }
    merged.set(bounty.id, {
      ...current,
      ...bounty,
      progress: Math.max(Number(current.progress) || 0, Number(bounty.progress) || 0),
      completed: !!(current.completed || bounty.completed),
      claimed: !!(current.claimed || bounty.claimed)
    });
  }
  return Array.from(merged.values());
}
function mergeData(local, cloud, localTs, cloudTs) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
  if (!cloud) return local;
  const merged = {};
  const keys = ["bookmarks", "srs", "trainer_stats", "learning", "settings"];
  for (const key of keys) {
    if (key === "bookmarks") {
      const localTombstones = ((_a2 = local.learning) == null ? void 0 : _a2.bookmarkTombstones) || {};
      const cloudTombstones = ((_b2 = cloud.learning) == null ? void 0 : _b2.bookmarkTombstones) || {};
      const mergedTombstones = { ...localTombstones };
      for (const [k, v] of Object.entries(cloudTombstones)) {
        mergedTombstones[k] = Math.max(mergedTombstones[k] || 0, Number(v) || 0);
      }
      const mergedBookmarks = {};
      const allKeys = /* @__PURE__ */ new Set([
        ...Object.keys(local.bookmarks || {}),
        ...Object.keys(cloud.bookmarks || {})
      ]);
      for (const k of allKeys) {
        const localVal = (_c = local.bookmarks) == null ? void 0 : _c[k];
        const cloudVal = (_d = cloud.bookmarks) == null ? void 0 : _d[k];
        const isLocalExist = localVal !== void 0 && localVal !== null;
        const isCloudExist = cloudVal !== void 0 && cloudVal !== null;
        const localAddedAt = typeof localVal === "number" ? localVal : isLocalExist ? 1 : 0;
        const cloudAddedAt = typeof cloudVal === "number" ? cloudVal : isCloudExist ? 1 : 0;
        const addedAt = Math.max(localAddedAt, cloudAddedAt);
        const deletedAt = mergedTombstones[k] || 0;
        if (deletedAt > addedAt) {
          continue;
        }
        if (isLocalExist || isCloudExist) {
          mergedBookmarks[k] = typeof localVal === "number" ? localVal : typeof cloudVal === "number" ? cloudVal : true;
        }
      }
      merged[key] = mergedBookmarks;
    } else if (key === "srs") {
      merged[key] = mergeSrsMaps(local[key], cloud[key]);
    } else if (key === "trainer_stats") {
      merged[key] = { ...cloud[key] || {} };
      for (const [k, v] of Object.entries(local[key] || {})) {
        if (!merged[key][k]) {
          merged[key][k] = v;
          continue;
        }
        merged[key][k] = {
          plays: Math.max(merged[key][k].plays || 0, v.plays || 0),
          correct: Math.max(merged[key][k].correct || 0, v.correct || 0),
          total: Math.max(merged[key][k].total || 0, v.total || 0)
        };
      }
    } else if (key === "settings") {
      const localS = local[key] || {};
      const cloudS = cloud[key] || {};
      const localChangedAt = localS.settingsChangedAt || (/* @__PURE__ */ new Date(0)).toISOString();
      const cloudChangedAt = cloudS.settingsChangedAt || (/* @__PURE__ */ new Date(0)).toISOString();
      if (new Date(cloudChangedAt) > new Date(localChangedAt)) {
        merged[key] = { ...localS, ...cloudS };
      } else {
        merged[key] = { ...cloudS, ...localS };
      }
      merged[key].settingsChangedAt = new Date(cloudChangedAt) > new Date(localChangedAt) ? cloudChangedAt : localChangedAt;
      const ll = localS.legacy || {};
      const cl = cloudS.legacy || {};
      merged[key].legacy = {
        mistakes: { ...cl.mistakes || {}, ...ll.mistakes || {} },
        studyNotes: new Date(localChangedAt) >= new Date(cloudChangedAt) ? ll.studyNotes || cl.studyNotes || "" : cl.studyNotes || ll.studyNotes || "",
        studyNotesLog: dedupeByKey([...cl.studyNotesLog || [], ...ll.studyNotesLog || []]),
        quizHistory: [...cl.quizHistory || [], ...ll.quizHistory || []].filter((v, i, a) => a.indexOf(v) === i).slice(-50),
        customCards: dedupeByKey([...cl.customCards || [], ...ll.customCards || []]),
        aiDiary: dedupeByKey([...cl.aiDiary || [], ...ll.aiDiary || []]),
        playlist: [.../* @__PURE__ */ new Set([
          ...(cl.playlist || []).map((x) => typeof x === "string" ? x : JSON.stringify(x)),
          ...(ll.playlist || []).map((x) => typeof x === "string" ? x : JSON.stringify(x))
        ])].map((x) => {
          try {
            return JSON.parse(x);
          } catch (e) {
            return x;
          }
        }),
        ttsVoiceJp: ll.ttsVoiceJp || "" || (cl.ttsVoiceJp || ""),
        ttsVoiceVi: ll.ttsVoiceVi || "" || (cl.ttsVoiceVi || ""),
        draftFeatures: (() => {
          const localDraft = normalizeDraftFeaturesPayload(ll.draftFeatures);
          const cloudDraft = normalizeDraftFeaturesPayload(cl.draftFeatures);
          const localDraftChangedAt = localDraft.changedAt || (/* @__PURE__ */ new Date(0)).toISOString();
          const cloudDraftChangedAt = cloudDraft.changedAt || (/* @__PURE__ */ new Date(0)).toISOString();
          if (new Date(localDraftChangedAt) > new Date(cloudDraftChangedAt)) return localDraft;
          if (new Date(cloudDraftChangedAt) > new Date(localDraftChangedAt)) return cloudDraft;
          return getDraftFeaturesWeight(localDraft) >= getDraftFeaturesWeight(cloudDraft) ? localDraft : cloudDraft;
        })()
      };
    } else if (key === "learning") {
      const localL = local[key] || {};
      const cloudL = cloud[key] || {};
      const localGeneration = Math.max(0, Number(localL.resetGeneration) || 0);
      const cloudGeneration = Math.max(0, Number(cloudL.resetGeneration) || 0);
      if (localGeneration !== cloudGeneration) {
        merged[key] = localGeneration > cloudGeneration ? localL : cloudL;
        continue;
      }
      const localRevision = Math.max(0, Number(localL.economyRevision) || 0);
      const cloudRevision = Math.max(0, Number(cloudL.economyRevision) || 0);
      const localDevice = String(localL.economyDeviceId || "");
      const cloudDevice = String(cloudL.economyDeviceId || "");
      const economyWinner = localRevision > cloudRevision || localRevision === cloudRevision && localDevice >= cloudDevice ? localL : cloudL;
      const localSnapshotTs = toMs(localTs);
      const cloudSnapshotTs = toMs(cloudTs);
      const syncWinner = cloudSnapshotTs > localSnapshotTs ? cloudL : localL;
      const mergedSlices = mergeSlices(localL._slices, cloudL._slices);
      if (((_e = localL._slices) == null ? void 0 : _e.fsrs) || ((_f = cloudL._slices) == null ? void 0 : _f.fsrs)) mergedSlices.fsrs = mergeSrsSnapshots((_g = localL._slices) == null ? void 0 : _g.fsrs, (_h = cloudL._slices) == null ? void 0 : _h.fsrs);
      if (((_i = localL._slices) == null ? void 0 : _i.mastery) || ((_j = cloudL._slices) == null ? void 0 : _j.mastery)) mergedSlices.mastery = mergeMasterySnapshots((_k = localL._slices) == null ? void 0 : _k.mastery, (_l = cloudL._slices) == null ? void 0 : _l.mastery);
      if (((_m = localL._slices) == null ? void 0 : _m.worldLearning) || ((_n = cloudL._slices) == null ? void 0 : _n.worldLearning)) mergedSlices.worldLearning = mergeWorldLearningSnapshots((_o = localL._slices) == null ? void 0 : _o.worldLearning, (_p = cloudL._slices) == null ? void 0 : _p.worldLearning);
      mergedSlices.worldStudyProgress = mergeStudyProgressSnapshots(
        (_q = localL._slices) == null ? void 0 : _q.worldStudyProgress,
        (_r = cloudL._slices) == null ? void 0 : _r.worldStudyProgress
      );
      const localXpOverrideTs = ((_s = localL.adminXpOverride) == null ? void 0 : _s.setAt) || localL.lastAdminXpOverrideTs || "";
      const cloudXpOverrideTs = ((_t = cloudL.adminXpOverride) == null ? void 0 : _t.setAt) || cloudL.lastAdminXpOverrideTs || "";
      const latestAdminXpOverride = localXpOverrideTs && (!cloudXpOverrideTs || new Date(localXpOverrideTs) >= new Date(cloudXpOverrideTs)) ? ((_u = cloudL.adminXpOverride) == null ? void 0 : _u.setAt) === localXpOverrideTs ? cloudL.adminXpOverride : localL.adminXpOverride : cloudL.adminXpOverride;
      const localOverrideTs = ((_v = localL.adminCoinOverride) == null ? void 0 : _v.setAt) || localL.lastAdminCoinOverrideTs || "";
      const cloudOverrideTs = ((_w = cloudL.adminCoinOverride) == null ? void 0 : _w.setAt) || cloudL.lastAdminCoinOverrideTs || "";
      const latestAdminOverride = localOverrideTs && (!cloudOverrideTs || new Date(localOverrideTs) >= new Date(cloudOverrideTs)) ? ((_x = cloudL.adminCoinOverride) == null ? void 0 : _x.setAt) === localOverrideTs ? cloudL.adminCoinOverride : localL.adminCoinOverride : cloudL.adminCoinOverride;
      const effectiveXp = (latestAdminXpOverride == null ? void 0 : latestAdminXpOverride.value) != null ? Math.max(0, Math.round(Number(latestAdminXpOverride.value) || 0)) : Math.max(localL.xp || 0, cloudL.xp || 0);
      const effectiveLevel = (latestAdminXpOverride == null ? void 0 : latestAdminXpOverride.level) != null ? Math.max(1, Math.round(Number(latestAdminXpOverride.level) || 0)) : Math.max(localL.level || 1, cloudL.level || 1);
      const effectiveStreak = (latestAdminXpOverride == null ? void 0 : latestAdminXpOverride.streak) != null ? Math.max(0, Math.round(Number(latestAdminXpOverride.streak) || 0)) : Math.max(localL.streak || 0, cloudL.streak || 0);
      merged[key] = {
        xp: effectiveXp,
        level: effectiveLevel,
        streak: effectiveStreak,
        lastStudyDate: localL.lastStudyDate && cloudL.lastStudyDate ? new Date(localL.lastStudyDate) > new Date(cloudL.lastStudyDate) ? localL.lastStudyDate : cloudL.lastStudyDate : localL.lastStudyDate || cloudL.lastStudyDate,
        achievements: { ...cloudL.achievements || {}, ...localL.achievements || {} },
        gameHistory: dedupeByKey([...cloudL.gameHistory || [], ...localL.gameHistory || []]).slice(-50),
        dailyActiveMinutes: (() => {
          const m = { ...cloudL.dailyActiveMinutes || {} };
          for (const [d, v] of Object.entries(localL.dailyActiveMinutes || {})) {
            m[d] = Math.max(m[d] || 0, v);
          }
          return m;
        })(),
        lessonProgress: (() => {
          const m = { ...cloudL.lessonProgress || {} };
          for (const [k, v] of Object.entries(localL.lessonProgress || {})) {
            if (!m[k]) {
              m[k] = v;
              continue;
            }
            m[k] = {
              vocabViewed: m[k].vocabViewed || v.vocabViewed,
              grammarViewed: m[k].grammarViewed || v.grammarViewed,
              quizScore: Math.max(m[k].quizScore || 0, v.quizScore || 0)
            };
          }
          return m;
        })(),
        studyHistory: mergeStudyHistoryMaps(localL.studyHistory, cloudL.studyHistory),
        studyActivity: mergeStudyActivityMaps(localL.studyActivity, cloudL.studyActivity),
        maxCombo: Math.max(localL.maxCombo || 0, cloudL.maxCombo || 0),
        lastVisitedRoute: localL.lastVisitedRoute || cloudL.lastVisitedRoute || null,
        adminXpOverride: latestAdminXpOverride || null,
        lastAdminXpOverrideTs: localL.lastAdminXpOverrideTs && cloudL.lastAdminXpOverrideTs ? new Date(localL.lastAdminXpOverrideTs) > new Date(cloudL.lastAdminXpOverrideTs) ? localL.lastAdminXpOverrideTs : cloudL.lastAdminXpOverrideTs : localL.lastAdminXpOverrideTs || cloudL.lastAdminXpOverrideTs || null,
        coins: Math.max(0, Math.round(Number(economyWinner.coins) || 0)),
        powerUps: { ...economyWinner.powerUps || {} },
        unlockedItems: { ...cloudL.unlockedItems || {}, ...localL.unlockedItems || {} },
        dailyClaimStreak: Math.max(0, Math.round(Number(economyWinner.dailyClaimStreak) || 0)),
        lastDailyClaimDate: economyWinner.lastDailyClaimDate || null,
        economyLog: dedupeByKey([...cloudL.economyLog || [], ...localL.economyLog || []]).slice(-40),
        adminCoinOverride: latestAdminOverride || null,
        lastAdminCoinOverrideTs: localL.lastAdminCoinOverrideTs && cloudL.lastAdminCoinOverrideTs ? new Date(localL.lastAdminCoinOverrideTs) > new Date(cloudL.lastAdminCoinOverrideTs) ? localL.lastAdminCoinOverrideTs : cloudL.lastAdminCoinOverrideTs : localL.lastAdminCoinOverrideTs || cloudL.lastAdminCoinOverrideTs || null,
        equippedCosmetics: (() => {
          const lTs = toMs(localL.lastEquippedAt);
          const cTs = toMs(cloudL.lastEquippedAt);
          return cTs > lTs ? cloudL.equippedCosmetics || {} : localL.equippedCosmetics || {};
        })(),
        lastEquippedAt: (() => {
          const lTs = toMs(localL.lastEquippedAt);
          const cTs = toMs(cloudL.lastEquippedAt);
          return cTs > lTs ? cloudL.lastEquippedAt : localL.lastEquippedAt;
        })(),
        activeEffects: { ...economyWinner.activeEffects || {} },
        powerUpLevels: { ...economyWinner.powerUpLevels || {} },
        pets: (() => {
          const mergedPets = { ...cloudL.pets || {} };
          for (const [k, v] of Object.entries(localL.pets || {})) {
            if (!mergedPets[k]) mergedPets[k] = v;
            else mergedPets[k] = v.level > mergedPets[k].level || v.level === mergedPets[k].level && v.xp > mergedPets[k].xp ? v : mergedPets[k];
          }
          return mergedPets;
        })(),
        activePet: economyWinner.activePet || null,
        gachaHistory: dedupeByKey([...cloudL.gachaHistory || [], ...localL.gachaHistory || []]).slice(-100),
        gachaPity: {
          epic: Math.max(((_y = localL.gachaPity) == null ? void 0 : _y.epic) || 0, ((_z = cloudL.gachaPity) == null ? void 0 : _z.epic) || 0),
          legendary: Math.max(((_A = localL.gachaPity) == null ? void 0 : _A.legendary) || 0, ((_B = cloudL.gachaPity) == null ? void 0 : _B.legendary) || 0)
        },
        wheelSpinsToday: localL.lastWheelDate === cloudL.lastWheelDate ? Math.max(localL.wheelSpinsToday || 0, cloudL.wheelSpinsToday || 0) : economyWinner.wheelSpinsToday || 0,
        lastWheelDate: economyWinner.lastWheelDate || null,
        slotSpinsToday: localL.lastSlotDate === cloudL.lastSlotDate ? Math.max(localL.slotSpinsToday || 0, cloudL.slotSpinsToday || 0) : economyWinner.slotSpinsToday || 0,
        lastSlotDate: economyWinner.lastSlotDate || null,
        slotPity: Math.max(0, Math.round(Number(economyWinner.slotPity) || 0)),
        currentBet: economyWinner.currentBet || 0,
        lastEconomyChangeAt: economyWinner.lastEconomyChangeAt || null,
        economyRevision: Math.max(localRevision, cloudRevision),
        economyDeviceId: economyWinner.economyDeviceId || "",
        resetGeneration: localGeneration,
        worldLearningReceipts: { ...cloudL.worldLearningReceipts || {}, ...localL.worldLearningReceipts || {} },
        mistakes: Object.fromEntries([.../* @__PURE__ */ new Set([...Object.keys(localL.mistakes || {}), ...Object.keys(cloudL.mistakes || {})])].map((key2) => {
          var _a3, _b3, _c2, _d2, _e2, _f2;
          return [key2, (((_b3 = (_a3 = localL.mistakes) == null ? void 0 : _a3[key2]) == null ? void 0 : _b3.lastWrongAt) || 0) >= (((_d2 = (_c2 = cloudL.mistakes) == null ? void 0 : _c2[key2]) == null ? void 0 : _d2.lastWrongAt) || 0) ? (_e2 = localL.mistakes) == null ? void 0 : _e2[key2] : (_f2 = cloudL.mistakes) == null ? void 0 : _f2[key2]];
        })),
        domainVersions: { ...cloudL.domainVersions || {}, ...localL.domainVersions || {} },
        bettingEnabled: !!economyWinner.bettingEnabled,
        vipExpiry: Math.max(localL.vipExpiry || 0, cloudL.vipExpiry || 0),
        roomItems: economyWinner.roomItems || {},
        ownedRoomItems: [.../* @__PURE__ */ new Set([...localL.ownedRoomItems || [], ...cloudL.ownedRoomItems || []])],
        collectionClaims: { ...cloudL.collectionClaims || {}, ...localL.collectionClaims || {} },
        questClaims: mergeClaimMapsByDate(localL.questClaims, cloudL.questClaims),
        weeklyQuestClaims: mergeClaimMapsByDate(localL.weeklyQuestClaims, cloudL.weeklyQuestClaims),
        milestoneClaims: { ...cloudL.milestoneClaims || {}, ...localL.milestoneClaims || {} },
        lastLevelUpBonusLevel: Math.max(localL.lastLevelUpBonusLevel || 0, cloudL.lastLevelUpBonusLevel || 0),
        materials: { ...economyWinner.materials || {} },
        enchantments: { ...economyWinner.enchantments || {} },
        dailyDeals: mergeDailyDeals(localL.dailyDeals, cloudL.dailyDeals, localTs, cloudTs),
        ...(() => {
          const mergedScratch = mergeSameDayCounter(
            localL.lastScratchDate,
            localL.scratchCardsToday,
            cloudL.lastScratchDate,
            cloudL.scratchCardsToday
          );
          return {
            scratchCardsToday: mergedScratch.count,
            lastScratchDate: mergedScratch.date
          };
        })(),
        ...(() => {
          const mergedTreasure = mergeSameDayCounter(
            localL.lastTreasureDate,
            localL.treasureDigsToday,
            cloudL.lastTreasureDate,
            cloudL.treasureDigsToday
          );
          const sameTreasureDate = !!mergedTreasure.date && mergedTreasure.date === localL.lastTreasureDate && mergedTreasure.date === cloudL.lastTreasureDate;
          return {
            treasureDigsToday: mergedTreasure.count,
            lastTreasureDate: mergedTreasure.date,
            treasureHuntGrid: sameTreasureDate ? mergeTreasureGrid(localL.treasureHuntGrid, cloudL.treasureHuntGrid) : (mergedTreasure.date === cloudL.lastTreasureDate ? cloudL.treasureHuntGrid : localL.treasureHuntGrid) || null
          };
        })(),
        skillPoints: Math.max(
          Math.max(0, Math.round(Number(localL.skillPoints) || 0)),
          Math.max(0, Math.round(Number(economyWinner.skillPoints) || 0))
        ),
        totalSkillPointsEarned: Math.max(
          Math.max(0, Math.round(Number(localL.totalSkillPointsEarned) || 0)),
          Math.max(0, Math.round(Number(cloudL.totalSkillPointsEarned) || 0))
        ),
        unlockedSkills: normalizeUniqueArray([...cloudL.unlockedSkills || [], ...localL.unlockedSkills || []]),
        faction: syncWinner.faction || cloudL.faction || localL.faction || null,
        villageBuildings: normalizeUniqueArray([...cloudL.villageBuildings || [], ...localL.villageBuildings || []]),
        lastVillageCollect: Math.max(localL.lastVillageCollect || 0, cloudL.lastVillageCollect || 0) || null,
        bounties: mergeBounties(localL.bounties, cloudL.bounties, localL.lastBountyReset, cloudL.lastBountyReset),
        lastBountyReset: localL.lastBountyReset && cloudL.lastBountyReset ? localL.lastBountyReset > cloudL.lastBountyReset ? localL.lastBountyReset : cloudL.lastBountyReset : localL.lastBountyReset || cloudL.lastBountyReset || null,
        yokaiAffection: mergeMaxNumericMap(localL.yokaiAffection, cloudL.yokaiAffection),
        equippedYokai: syncWinner.equippedYokai || cloudL.equippedYokai || localL.equippedYokai || null,
        equippedWeapon: syncWinner.equippedWeapon || cloudL.equippedWeapon || localL.equippedWeapon || null,
        equippedArmor: syncWinner.equippedArmor || cloudL.equippedArmor || localL.equippedArmor || null,
        equippedBackground: syncWinner.equippedBackground || cloudL.equippedBackground || localL.equippedBackground || null,
        equippedTitle: syncWinner.equippedTitle || cloudL.equippedTitle || localL.equippedTitle || null,
        ownedOrigami: normalizeUniqueArray([...cloudL.ownedOrigami || [], ...localL.ownedOrigami || []]),
        ramenIngredients: { ...economyWinner.ramenIngredients || {} },
        ownedCats: normalizeUniqueArray([...cloudL.ownedCats || [], ...localL.ownedCats || []]),
        mechaParts: mergeMaxNumericMap(localL.mechaParts, cloudL.mechaParts),
        bossDamage: Math.max(localL.bossDamage || 0, cloudL.bossDamage || 0),
        storyProgress: mergeStoryProgress(localL.storyProgress, cloudL.storyProgress),
        mangaProgress: { ...cloudL.mangaProgress || {}, ...localL.mangaProgress || {} },
        lastOmikujiDate: localL.lastOmikujiDate && cloudL.lastOmikujiDate ? localL.lastOmikujiDate > cloudL.lastOmikujiDate ? localL.lastOmikujiDate : cloudL.lastOmikujiDate : localL.lastOmikujiDate || cloudL.lastOmikujiDate || null,
        activeBuffs: Array.isArray(syncWinner.activeBuffs) ? syncWinner.activeBuffs.filter((buff) => Number((buff == null ? void 0 : buff.expiresAt) || 0) > Date.now()) : [],
        senseiAffinity: Math.max(localL.senseiAffinity || 0, cloudL.senseiAffinity || 0),
        ...(() => {
          const ld = localL.lastActivityDate;
          const cd = cloudL.lastActivityDate;
          if (!ld && !cd) return { todayCorrect: 0, todayWrong: 0, todayPowerUps: 0, todayPetFed: 0, lastActivityDate: null };
          if (!ld) return { todayCorrect: cloudL.todayCorrect || 0, todayWrong: cloudL.todayWrong || 0, todayPowerUps: cloudL.todayPowerUps || 0, todayPetFed: cloudL.todayPetFed || 0, lastActivityDate: cd };
          if (!cd) return { todayCorrect: localL.todayCorrect || 0, todayWrong: localL.todayWrong || 0, todayPowerUps: localL.todayPowerUps || 0, todayPetFed: localL.todayPetFed || 0, lastActivityDate: ld };
          if (ld === cd) return {
            todayCorrect: Math.max(localL.todayCorrect || 0, cloudL.todayCorrect || 0),
            todayWrong: Math.max(localL.todayWrong || 0, cloudL.todayWrong || 0),
            todayPowerUps: Math.max(localL.todayPowerUps || 0, cloudL.todayPowerUps || 0),
            todayPetFed: Math.max(localL.todayPetFed || 0, cloudL.todayPetFed || 0),
            lastActivityDate: ld
          };
          return new Date(ld) >= new Date(cd) ? { todayCorrect: localL.todayCorrect || 0, todayWrong: localL.todayWrong || 0, todayPowerUps: localL.todayPowerUps || 0, todayPetFed: localL.todayPetFed || 0, lastActivityDate: ld } : { todayCorrect: cloudL.todayCorrect || 0, todayWrong: cloudL.todayWrong || 0, todayPowerUps: cloudL.todayPowerUps || 0, todayPetFed: cloudL.todayPetFed || 0, lastActivityDate: cd };
        })(),
        bookmarkTombstones: (() => {
          const m = { ...cloudL.bookmarkTombstones || {} };
          for (const [k, v] of Object.entries(localL.bookmarkTombstones || {})) {
            m[k] = Math.max(m[k] || 0, Number(v) || 0);
          }
          return m;
        })(),
        _slices: mergedSlices
      };
    }
  }
  return merged;
}
const KEY$4 = "n4.gems.v1";
const DEFAULT$4 = {
  gems: 0,
  gemLog: [],
  // { at, delta, source }
  shards: {
    // dupe → shards pool (Plan §3.1 TK5)
    common: 0,
    rare: 0,
    epic: 0,
    legendary: 0
  }
};
function loadGemState() {
  try {
    if (typeof localStorage === "undefined") return { ...DEFAULT$4 };
    const raw = localStorage.getItem(KEY$4);
    if (!raw) return { ...DEFAULT$4 };
    const parsed = JSON.parse(raw);
    return {
      gems: Number(parsed.gems) || 0,
      gemLog: Array.isArray(parsed.gemLog) ? parsed.gemLog : [],
      shards: { ...DEFAULT$4.shards, ...parsed.shards || {} }
    };
  } catch (e) {
    return { ...DEFAULT$4 };
  }
}
function saveGemState(state) {
  try {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(KEY$4, JSON.stringify({
      gems: state.gems | 0,
      gemLog: (state.gemLog || []).slice(-100),
      shards: state.shards || DEFAULT$4.shards
    }));
  } catch (e) {
  }
}
function addGems(state, delta, source = "misc") {
  if (!Number.isFinite(delta)) return state;
  const next = {
    ...state,
    gems: Math.max(0, (state.gems | 0) + Math.floor(delta)),
    gemLog: [...state.gemLog || [], { at: Date.now(), delta: Math.floor(delta), source }].slice(-100)
  };
  saveGemState(next);
  return next;
}
function spendGems(state, amount, source = "misc") {
  const cost = Math.max(0, Math.floor(amount));
  if ((state.gems | 0) < cost) return { ok: false, state, reason: "not-enough-gems" };
  return { ok: true, state: addGems(state, -cost, `spend:${source}`) };
}
function addShards(state, rarity, count) {
  if (!["common", "rare", "epic", "legendary"].includes(rarity)) return state;
  const next = {
    ...state,
    shards: {
      ...state.shards || DEFAULT$4.shards,
      [rarity]: Math.max(0, ((state.shards || {})[rarity] || 0) + (count | 0))
    }
  };
  saveGemState(next);
  return next;
}
function spendShards(state, rarity, count) {
  const available = (state.shards || {})[rarity] || 0;
  if (available < count) return { ok: false, state, reason: "not-enough-shards" };
  return { ok: true, state: addShards(state, rarity, -count) };
}
const KEY$3 = "n4.tokens.v1";
const DEFAULT$3 = {
  tokens: 0,
  tokenLog: []
  // { at, delta, source, eventId? }
};
function loadTokenState() {
  try {
    if (typeof localStorage === "undefined") return { ...DEFAULT$3 };
    const raw = localStorage.getItem(KEY$3);
    if (!raw) return { ...DEFAULT$3 };
    const parsed = JSON.parse(raw);
    return {
      tokens: Number(parsed.tokens) || 0,
      tokenLog: Array.isArray(parsed.tokenLog) ? parsed.tokenLog : []
    };
  } catch (e) {
    return { ...DEFAULT$3 };
  }
}
function saveTokenState(state) {
  try {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(KEY$3, JSON.stringify({
      tokens: state.tokens | 0,
      tokenLog: (state.tokenLog || []).slice(-100)
    }));
  } catch (e) {
  }
}
function addTokens(state, delta, source = "event", eventId = null) {
  if (!Number.isFinite(delta)) return state;
  const entry = { at: Date.now(), delta: Math.floor(delta), source };
  if (eventId) entry.eventId = eventId;
  const next = {
    ...state,
    tokens: Math.max(0, (state.tokens | 0) + Math.floor(delta)),
    tokenLog: [...state.tokenLog || [], entry].slice(-100)
  };
  saveTokenState(next);
  return next;
}
function spendTokens(state, amount, source = "misc") {
  const cost = Math.max(0, Math.floor(amount));
  if ((state.tokens | 0) < cost) return { ok: false, state, reason: "not-enough-tokens" };
  return { ok: true, state: addTokens(state, -cost, `spend:${source}`) };
}
const KEY$2 = "n4.cooking.v1";
const DEFAULT$2 = {
  ingredients: {},
  dishes: {},
  cookingBuffs: {},
  recipesKnown: {},
  cookingXp: 0
};
function loadCookingState() {
  try {
    if (typeof localStorage === "undefined") return { ...DEFAULT$2 };
    const raw = localStorage.getItem(KEY$2);
    if (!raw) return { ...DEFAULT$2 };
    const parsed = JSON.parse(raw);
    return {
      ingredients: parsed.ingredients || {},
      dishes: parsed.dishes || {},
      cookingBuffs: parsed.cookingBuffs || {},
      recipesKnown: parsed.recipesKnown || {},
      cookingXp: Number(parsed.cookingXp) || 0
    };
  } catch (e) {
    return { ...DEFAULT$2 };
  }
}
function saveCookingState(state) {
  try {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(KEY$2, JSON.stringify({
      ingredients: state.ingredients || {},
      dishes: state.dishes || {},
      cookingBuffs: state.cookingBuffs || {},
      recipesKnown: state.recipesKnown || {},
      cookingXp: state.cookingXp | 0
    }));
  } catch (e) {
  }
}
function addIngredient(state, key, count = 1) {
  const ingredients = { ...state.ingredients || {} };
  ingredients[key] = Math.max(0, (ingredients[key] || 0) + count);
  if (ingredients[key] === 0) delete ingredients[key];
  const next = { ...state, ingredients };
  saveCookingState(next);
  return next;
}
function addDish(state, key, count = 1) {
  const dishes = { ...state.dishes || {} };
  dishes[key] = Math.max(0, (dishes[key] || 0) + count);
  if (dishes[key] === 0) delete dishes[key];
  const next = { ...state, dishes };
  saveCookingState(next);
  return next;
}
function applyCookedDeductions(state, deltas = {}) {
  let next = state;
  for (const [key, delta] of Object.entries(deltas)) {
    next = addIngredient(next, key, delta);
  }
  return next;
}
function applyBuff(state, buffEntry) {
  if (!buffEntry) return state;
  const existing = (state.cookingBuffs || {})[buffEntry.effectRef];
  if (existing && existing.expiresAt > buffEntry.expiresAt) return state;
  const cookingBuffs = { ...state.cookingBuffs || {}, [buffEntry.effectRef]: buffEntry };
  const next = { ...state, cookingBuffs };
  saveCookingState(next);
  return next;
}
function pruneExpiredBuffs(state, now = Date.now()) {
  const raw = state.cookingBuffs || {};
  const cookingBuffs = {};
  for (const [ref, entry] of Object.entries(raw)) {
    if (entry && entry.expiresAt > now) cookingBuffs[ref] = entry;
  }
  const next = { ...state, cookingBuffs };
  saveCookingState(next);
  return next;
}
function learnRecipe(state, recipeId) {
  const recipesKnown = { ...state.recipesKnown || {}, [recipeId]: true };
  const next = { ...state, recipesKnown };
  saveCookingState(next);
  return next;
}
const KEY$1 = "n4.market.v1";
const DEFAULT$1 = {
  watchlist: {},
  // { itemKey: true }
  lastSeenDayIndex: null,
  flashSale: null
  // { itemKey, until, discountPct }
};
function loadMarketState() {
  try {
    if (typeof localStorage === "undefined") return { ...DEFAULT$1 };
    const raw = localStorage.getItem(KEY$1);
    if (!raw) return { ...DEFAULT$1 };
    const parsed = JSON.parse(raw);
    return {
      watchlist: parsed.watchlist || {},
      lastSeenDayIndex: Number.isFinite(parsed.lastSeenDayIndex) ? parsed.lastSeenDayIndex : null,
      flashSale: parsed.flashSale || null
    };
  } catch (e) {
    return { ...DEFAULT$1 };
  }
}
function saveMarketState(state) {
  try {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(KEY$1, JSON.stringify({
      watchlist: state.watchlist || {},
      lastSeenDayIndex: state.lastSeenDayIndex,
      flashSale: state.flashSale
    }));
  } catch (e) {
  }
}
function toggleWatch(state, itemKey) {
  const watchlist = { ...state.watchlist || {} };
  if (watchlist[itemKey]) delete watchlist[itemKey];
  else watchlist[itemKey] = true;
  const next = { ...state, watchlist };
  saveMarketState(next);
  return next;
}
function setFlashSale(state, sale) {
  const next = { ...state, flashSale: sale };
  saveMarketState(next);
  return next;
}
function updateDayIndex(state, dayIndex) {
  if (state.lastSeenDayIndex === dayIndex) return state;
  const next = { ...state, lastSeenDayIndex: dayIndex };
  saveMarketState(next);
  return next;
}
const KEY = "n4.pet-depth.v1";
const DEFAULT = {
  petAbilityCooldowns: {},
  petOutfits: {},
  petQuests: {},
  petParadeUnlocked: false
};
function loadPetDepthState() {
  try {
    if (typeof localStorage === "undefined") return { ...DEFAULT };
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULT };
    const parsed = JSON.parse(raw);
    return {
      petAbilityCooldowns: parsed.petAbilityCooldowns || {},
      petOutfits: parsed.petOutfits || {},
      petQuests: parsed.petQuests || {},
      petParadeUnlocked: !!parsed.petParadeUnlocked
    };
  } catch (e) {
    return { ...DEFAULT };
  }
}
function savePetDepthState(state) {
  try {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(KEY, JSON.stringify({
      petAbilityCooldowns: state.petAbilityCooldowns || {},
      petOutfits: state.petOutfits || {},
      petQuests: state.petQuests || {},
      petParadeUnlocked: !!state.petParadeUnlocked
    }));
  } catch (e) {
  }
}
function setAbilityCooldown(state, abilityId, expiresAt) {
  const petAbilityCooldowns = { ...state.petAbilityCooldowns || {}, [abilityId]: expiresAt };
  const next = { ...state, petAbilityCooldowns };
  savePetDepthState(next);
  return next;
}
function canUseAbility(state, abilityId, now = Date.now()) {
  const until = (state.petAbilityCooldowns || {})[abilityId];
  return !until || until <= now;
}
function equipOutfit(state, petKey, slot, outfitKey) {
  const current = (state.petOutfits || {})[petKey] || {};
  const petOutfits = { ...state.petOutfits || {}, [petKey]: { ...current, [slot]: outfitKey || null } };
  const next = { ...state, petOutfits };
  savePetDepthState(next);
  return next;
}
const DEFAULT_DAILY_QUESTS = [
  { id: "feed", petKey: null, target: 1, description: "Cho thú cưng ăn 1 lần" },
  { id: "play", petKey: null, target: 2, description: "Sử dụng kỹ năng chủ động 2 lần" },
  { id: "walk", petKey: null, target: 5, description: "Đi dạo với thú cưng 5 phút" }
];
function ensureDailyQuests(state, now = Date.now()) {
  const today = getIsoDateKey(now);
  const quests = state.petQuests || {};
  if (quests[today] && quests[today].length) return state;
  const petQuests = { ...quests, [today]: DEFAULT_DAILY_QUESTS.map((q) => ({ ...q, progress: 0, done: false, claimed: false })) };
  const next = { ...state, petQuests };
  savePetDepthState(next);
  return next;
}
function progressQuest(state, id, delta = 1, now = Date.now()) {
  const today = getIsoDateKey(now);
  const quests = state.petQuests || {};
  const today_ = quests[today] || [];
  const next = today_.map((q) => {
    if (q.id !== id || q.done) return q;
    const progress = Math.min(q.target, q.progress + delta);
    return { ...q, progress, done: progress >= q.target };
  });
  const petQuests = { ...quests, [today]: next };
  const state_ = { ...state, petQuests };
  savePetDepthState(state_);
  return state_;
}
function claimQuest(state, id, now = Date.now()) {
  const today = getIsoDateKey(now);
  const quests = state.petQuests || {};
  const list = quests[today] || [];
  let claimed = false;
  const next = list.map((q) => {
    if (q.id === id && q.done && !q.claimed) {
      claimed = true;
      return { ...q, claimed: true };
    }
    return q;
  });
  if (!claimed) return { ok: false, state };
  const state_ = { ...state, petQuests: { ...quests, [today]: next } };
  savePetDepthState(state_);
  return { ok: true, state: state_ };
}
function unlockPetParade(state) {
  if (state.petParadeUnlocked) return state;
  const next = { ...state, petParadeUnlocked: true };
  savePetDepthState(next);
  return next;
}
function initialState() {
  return {
    gemSlice: loadGemState(),
    tokenSlice: loadTokenState(),
    cookingSlice: loadCookingState(),
    marketSlice: loadMarketState(),
    petDepthSlice: loadPetDepthState()
  };
}
const useTakaraStore = create((set, get) => ({
  ...initialState(),
  // ── Gems ──
  addGems: (delta, source) => set((s) => ({ gemSlice: addGems(s.gemSlice, delta, source) })),
  spendGems: (amount, source) => {
    const res = spendGems(get().gemSlice, amount, source);
    if (res.ok) set({ gemSlice: res.state });
    return res;
  },
  addShards: (rarity, count) => set((s) => ({ gemSlice: addShards(s.gemSlice, rarity, count) })),
  spendShards: (rarity, count) => {
    const res = spendShards(get().gemSlice, rarity, count);
    if (res.ok) set({ gemSlice: res.state });
    return res;
  },
  // ── Tokens ──
  addTokens: (delta, source, eventId) => set((s) => ({ tokenSlice: addTokens(s.tokenSlice, delta, source, eventId) })),
  spendTokens: (amount, source) => {
    const res = spendTokens(get().tokenSlice, amount, source);
    if (res.ok) set({ tokenSlice: res.state });
    return res;
  },
  // ── Cooking ──
  addIngredient: (key, count) => set((s) => ({ cookingSlice: addIngredient(s.cookingSlice, key, count) })),
  addDish: (key, count) => set((s) => ({ cookingSlice: addDish(s.cookingSlice, key, count) })),
  applyCookedDeductions: (deltas) => set((s) => ({ cookingSlice: applyCookedDeductions(s.cookingSlice, deltas) })),
  applyBuff: (entry) => set((s) => ({ cookingSlice: applyBuff(s.cookingSlice, entry) })),
  pruneExpiredBuffs: () => set((s) => ({ cookingSlice: pruneExpiredBuffs(s.cookingSlice) })),
  learnRecipe: (recipeId) => set((s) => ({ cookingSlice: learnRecipe(s.cookingSlice, recipeId) })),
  // ── Market ──
  toggleWatch: (itemKey) => set((s) => ({ marketSlice: toggleWatch(s.marketSlice, itemKey) })),
  setFlashSale: (sale) => set((s) => ({ marketSlice: setFlashSale(s.marketSlice, sale) })),
  updateMarketDay: (dayIndex) => set((s) => ({ marketSlice: updateDayIndex(s.marketSlice, dayIndex) })),
  // ── Pet Depth ──
  setAbilityCooldown: (id, until) => set((s) => ({ petDepthSlice: setAbilityCooldown(s.petDepthSlice, id, until) })),
  canUseAbility: (id, now) => canUseAbility(get().petDepthSlice, id, now),
  equipPetOutfit: (petKey, slot, outfitKey) => set((s) => ({ petDepthSlice: equipOutfit(s.petDepthSlice, petKey, slot, outfitKey) })),
  ensureDailyQuests: () => set((s) => ({ petDepthSlice: ensureDailyQuests(s.petDepthSlice) })),
  progressQuest: (id, delta) => set((s) => ({ petDepthSlice: progressQuest(s.petDepthSlice, id, delta) })),
  claimPetQuest: (id) => {
    const res = claimQuest(get().petDepthSlice, id);
    if (res.ok) set({ petDepthSlice: res.state });
    return res;
  },
  unlockPetParade: () => set((s) => ({ petDepthSlice: unlockPetParade(s.petDepthSlice) }))
}));
const selGems = (s) => s.gemSlice.gems;
const selShards = (s) => s.gemSlice.shards;
function saveAllTakara() {
  const s = useTakaraStore.getState();
  saveGemState(s.gemSlice);
  saveTokenState(s.tokenSlice);
  saveCookingState(s.cookingSlice);
  saveMarketState(s.marketSlice);
  savePetDepthState(s.petDepthSlice);
}
let _telemetryBootstrapped = false;
function rewardForSession({ score = 0, total = 0 }) {
  if (!total) return { gems: 0, shards: 0 };
  const accuracy = score / total;
  if (accuracy < 0.5) return { gems: 0, shards: 0 };
  const gems = Math.max(1, Math.round(score / 5));
  const shards = accuracy >= 0.9 ? 1 : 0;
  return { gems, shards };
}
function bootstrapTakaraTelemetry() {
  if (_telemetryBootstrapped) return;
  _telemetryBootstrapped = true;
  telemetry.on(TELEMETRY_EVENTS.GAME_SESSION_FINISHED, (payload = {}) => {
    const { gems, shards } = rewardForSession(payload);
    if (gems > 0) {
      useTakaraStore.getState().addGems(gems, `session:${payload.trainerId || "unknown"}`);
    }
    if (shards > 0) {
      useTakaraStore.getState().addShards("rare", shards);
    }
    if (gems > 0 || shards > 0) {
      telemetry.emit(TELEMETRY_EVENTS.COSMETIC_EARNED, {
        source: "gameSessionFinished",
        trainerId: payload.trainerId || null,
        gems,
        shards,
        at: Date.now()
      });
    }
  });
}
bootstrapTakaraTelemetry();
const DAY_MS = 24 * 60 * 60 * 1e3;
function dayKey(ts = Date.now()) {
  const d = new Date(ts);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function weekKey(ts = Date.now()) {
  const d = new Date(ts);
  const first = new Date(d.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((d - first) / DAY_MS) + 1;
  const wk = Math.ceil(dayOfYear / 7);
  return `${d.getFullYear()}-W${String(wk).padStart(2, "0")}`;
}
const INITIAL_STATE = {
  schema: 2,
  claimedDaily: { day: dayKey(), ids: {} },
  // { ids: { questId: claimedAt } }
  claimedWeekly: { week: weekKey(), ids: {} },
  chainProgress: {},
  // { chainId: { step, startedAt } }
  seasonBonusClaimed: {},
  // { [weekIndex]: true }
  completionLog: [],
  // bounded log of recent claims
  // Cross-game counters written by reward subscriber
  counters: {
    day: dayKey(),
    week: weekKey(),
    season: null,
    todayCorrectByKind: { vocab: 0, kanji: 0, grammar: 0, listening: 0, reading: 0 },
    weekCorrectByKind: { vocab: 0, kanji: 0, grammar: 0, listening: 0, reading: 0 },
    seasonCorrectByKind: { vocab: 0, kanji: 0, grammar: 0, listening: 0, reading: 0 }
  }
};
const useQuestStore = create(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,
      /** Rotate cycles if day/week rolled over. Safe to call often. */
      rotateCyclesIfNeeded: () => {
        const s = get();
        const today = dayKey();
        const thisWeek = weekKey();
        const patch = {};
        if (s.claimedDaily.day !== today) patch.claimedDaily = { day: today, ids: {} };
        if (s.claimedWeekly.week !== thisWeek) patch.claimedWeekly = { week: thisWeek, ids: {} };
        const c = s.counters || {};
        if (c.day !== today || c.week !== thisWeek) {
          patch.counters = {
            ...c,
            day: today,
            week: thisWeek,
            todayCorrectByKind: c.day === today ? c.todayCorrectByKind : { vocab: 0, kanji: 0, grammar: 0, listening: 0, reading: 0 },
            weekCorrectByKind: c.week === thisWeek ? c.weekCorrectByKind : { vocab: 0, kanji: 0, grammar: 0, listening: 0, reading: 0 }
          };
        }
        if (Object.keys(patch).length) set(patch);
      },
      /**
       * Apply a batch of counter deltas produced by the reward subscriber.
       * Each entry: { questId: 'path.to.counter', delta: +N }
       */
      advanceFromPayout: (questDelta = [], _chainDelta = []) => {
        if (!(questDelta == null ? void 0 : questDelta.length)) return;
        get().rotateCyclesIfNeeded();
        const s = get();
        const nextCounters = JSON.parse(JSON.stringify(s.counters || {}));
        for (const { questId, delta } of questDelta) {
          if (!questId || !delta) continue;
          const parts = questId.split(".");
          let node = nextCounters;
          for (let i = 0; i < parts.length - 1; i++) {
            const k = parts[i];
            if (typeof node[k] !== "object" || node[k] === null) node[k] = {};
            node = node[k];
          }
          const leaf = parts[parts.length - 1];
          node[leaf] = (typeof node[leaf] === "number" ? node[leaf] : 0) + delta;
        }
        set({ counters: nextCounters });
      },
      /** Mark a daily quest as claimed. Returns true iff newly claimed. */
      claimDaily: (questId) => {
        var _a2;
        get().rotateCyclesIfNeeded();
        const s = get();
        if ((_a2 = s.claimedDaily.ids) == null ? void 0 : _a2[questId]) return false;
        const nextIds = { ...s.claimedDaily.ids, [questId]: Date.now() };
        set({
          claimedDaily: { ...s.claimedDaily, ids: nextIds },
          completionLog: appendLog(s.completionLog, { kind: "daily", id: questId, at: Date.now() })
        });
        telemetry.emit(TELEMETRY_EVENTS.QUEST_COMPLETED, { scope: "daily", id: questId, at: Date.now() });
        return true;
      },
      /** Mark a weekly quest as claimed. */
      claimWeekly: (questId) => {
        var _a2;
        get().rotateCyclesIfNeeded();
        const s = get();
        if ((_a2 = s.claimedWeekly.ids) == null ? void 0 : _a2[questId]) return false;
        const nextIds = { ...s.claimedWeekly.ids, [questId]: Date.now() };
        set({
          claimedWeekly: { ...s.claimedWeekly, ids: nextIds },
          completionLog: appendLog(s.completionLog, { kind: "weekly", id: questId, at: Date.now() })
        });
        telemetry.emit(TELEMETRY_EVENTS.QUEST_COMPLETED, { scope: "weekly", id: questId, at: Date.now() });
        return true;
      },
      /** Advance a cross-game quest chain by one step. */
      advanceChain: (chainId, totalSteps = 1) => set((s) => {
        const current = s.chainProgress[chainId] || { step: 0, startedAt: Date.now() };
        const nextStep = Math.min(totalSteps, current.step + 1);
        const done = nextStep >= totalSteps;
        if (done) {
          telemetry.emit(TELEMETRY_EVENTS.QUEST_COMPLETED, { scope: "chain", id: chainId, at: Date.now() });
        }
        return {
          chainProgress: {
            ...s.chainProgress,
            [chainId]: { step: nextStep, startedAt: current.startedAt, done, completedAt: done ? Date.now() : void 0 }
          }
        };
      }),
      /** Claim the current week's seasonal bonus exactly once per week. */
      claimSeasonBonus: (weekIndex) => {
        const s = get();
        if (s.seasonBonusClaimed[weekIndex]) return false;
        set({ seasonBonusClaimed: { ...s.seasonBonusClaimed, [weekIndex]: true } });
        telemetry.emit(TELEMETRY_EVENTS.QUEST_COMPLETED, { scope: "season", id: `week-${weekIndex}`, at: Date.now() });
        return true;
      },
      /** Debug helpers. */
      reset: () => set({ ...INITIAL_STATE })
    }),
    {
      name: "n4-quest-store-v1",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        schema: s.schema,
        claimedDaily: s.claimedDaily,
        claimedWeekly: s.claimedWeekly,
        chainProgress: s.chainProgress,
        seasonBonusClaimed: s.seasonBonusClaimed,
        completionLog: s.completionLog,
        counters: s.counters
      })
    }
  )
);
function appendLog(log, entry) {
  const next = [...log, entry];
  return next.length > 200 ? next.slice(-200) : next;
}
if (typeof window !== "undefined") {
  window.__N4_QUEST_STORE__ = useQuestStore;
}
const LOOT_VOCAB_SEED = [
  // Nature
  { key: "v:山", word: "山", reading: "やま", meaning: "Núi", hanviet: "Sơn", theme: "nature" },
  { key: "v:川", word: "川", reading: "かわ", meaning: "Sông", hanviet: "Xuyên", theme: "nature" },
  { key: "v:木", word: "木", reading: "き", meaning: "Cây", hanviet: "Mộc", theme: "nature" },
  { key: "v:森", word: "森", reading: "もり", meaning: "Rừng", hanviet: "Sâm", theme: "nature" },
  { key: "v:海", word: "海", reading: "うみ", meaning: "Biển", hanviet: "Hải", theme: "nature" },
  { key: "v:空", word: "空", reading: "そら", meaning: "Bầu trời", hanviet: "Không", theme: "nature" },
  { key: "v:月", word: "月", reading: "つき", meaning: "Mặt trăng", hanviet: "Nguyệt", theme: "nature" },
  { key: "v:星", word: "星", reading: "ほし", meaning: "Ngôi sao", hanviet: "Tinh", theme: "nature" },
  { key: "v:花", word: "花", reading: "はな", meaning: "Hoa", hanviet: "Hoa", theme: "nature" },
  { key: "v:雨", word: "雨", reading: "あめ", meaning: "Mưa", hanviet: "Vũ", theme: "nature" },
  { key: "v:風", word: "風", reading: "かぜ", meaning: "Gió", hanviet: "Phong", theme: "nature" },
  { key: "v:雪", word: "雪", reading: "ゆき", meaning: "Tuyết", hanviet: "Tuyết", theme: "nature" },
  { key: "v:石", word: "石", reading: "いし", meaning: "Đá", hanviet: "Thạch", theme: "nature" },
  { key: "v:火", word: "火", reading: "ひ", meaning: "Lửa", hanviet: "Hỏa", theme: "nature" },
  { key: "v:水", word: "水", reading: "みず", meaning: "Nước", hanviet: "Thủy", theme: "nature" },
  // Daily objects / food
  { key: "v:本", word: "本", reading: "ほん", meaning: "Sách", hanviet: "Bản", theme: "daily" },
  { key: "v:傘", word: "傘", reading: "かさ", meaning: "Ô dù", hanviet: "Tản", theme: "daily" },
  { key: "v:鞄", word: "鞄", reading: "かばん", meaning: "Cặp sách", hanviet: "Bao", theme: "daily" },
  { key: "v:茶", word: "茶", reading: "ちゃ", meaning: "Trà", hanviet: "Trà", theme: "daily" },
  { key: "v:米", word: "米", reading: "こめ", meaning: "Gạo", hanviet: "Mễ", theme: "daily" },
  { key: "v:肉", word: "肉", reading: "にく", meaning: "Thịt", hanviet: "Nhục", theme: "daily" },
  { key: "v:魚", word: "魚", reading: "さかな", meaning: "Cá", hanviet: "Ngư", theme: "daily" },
  { key: "v:卵", word: "卵", reading: "たまご", meaning: "Trứng", hanviet: "Noãn", theme: "daily" },
  // People / village
  { key: "v:人", word: "人", reading: "ひと", meaning: "Người", hanviet: "Nhân", theme: "people" },
  { key: "v:友", word: "友", reading: "とも", meaning: "Bạn", hanviet: "Hữu", theme: "people" },
  { key: "v:家", word: "家", reading: "いえ", meaning: "Nhà", hanviet: "Gia", theme: "people" },
  { key: "v:町", word: "町", reading: "まち", meaning: "Phố", hanviet: "Đinh", theme: "people" },
  { key: "v:道", word: "道", reading: "みち", meaning: "Đường", hanviet: "Đạo", theme: "people" },
  { key: "v:村", word: "村", reading: "むら", meaning: "Làng", hanviet: "Thôn", theme: "people" },
  // Actions / states
  { key: "v:歩", word: "歩く", reading: "あるく", meaning: "Đi bộ", hanviet: "Bộ", theme: "action" },
  { key: "v:走", word: "走る", reading: "はしる", meaning: "Chạy", hanviet: "Tẩu", theme: "action" },
  { key: "v:食", word: "食べる", reading: "たべる", meaning: "Ăn", hanviet: "Thực", theme: "action" },
  { key: "v:飲", word: "飲む", reading: "のむ", meaning: "Uống", hanviet: "Ẩm", theme: "action" },
  { key: "v:見", word: "見る", reading: "みる", meaning: "Nhìn", hanviet: "Kiến", theme: "action" },
  { key: "v:聞", word: "聞く", reading: "きく", meaning: "Nghe", hanviet: "Văn", theme: "action" },
  { key: "v:話", word: "話す", reading: "はなす", meaning: "Nói chuyện", hanviet: "Thoại", theme: "action" },
  // Adventure / quest flavour
  { key: "v:旅", word: "旅", reading: "たび", meaning: "Chuyến đi", hanviet: "Lữ", theme: "adventure" },
  { key: "v:剣", word: "剣", reading: "けん", meaning: "Kiếm", hanviet: "Kiếm", theme: "adventure" },
  { key: "v:盾", word: "盾", reading: "たて", meaning: "Khiên", hanviet: "Thuẫn", theme: "adventure" },
  { key: "v:宝", word: "宝", reading: "たから", meaning: "Kho báu", hanviet: "Bảo", theme: "adventure" },
  { key: "v:神", word: "神", reading: "かみ", meaning: "Thần linh", hanviet: "Thần", theme: "adventure" },
  { key: "v:魂", word: "魂", reading: "たましい", meaning: "Linh hồn", hanviet: "Hồn", theme: "adventure" },
  { key: "v:夢", word: "夢", reading: "ゆめ", meaning: "Giấc mơ", hanviet: "Mộng", theme: "adventure" },
  // Body parts (v58)
  { key: "v:頭", word: "頭", reading: "あたま", meaning: "Đầu", hanviet: "Đầu", theme: "body" },
  { key: "v:目", word: "目", reading: "め", meaning: "Mắt", hanviet: "Mục", theme: "body" },
  { key: "v:耳", word: "耳", reading: "みみ", meaning: "Tai", hanviet: "Nhĩ", theme: "body" },
  { key: "v:口", word: "口", reading: "くち", meaning: "Miệng", hanviet: "Khẩu", theme: "body" },
  { key: "v:手", word: "手", reading: "て", meaning: "Tay", hanviet: "Thủ", theme: "body" },
  { key: "v:足", word: "足", reading: "あし", meaning: "Chân", hanviet: "Túc", theme: "body" },
  // Time words (v58)
  { key: "v:朝", word: "朝", reading: "あさ", meaning: "Buổi sáng", hanviet: "Triêu", theme: "time" },
  { key: "v:昼", word: "昼", reading: "ひる", meaning: "Buổi trưa", hanviet: "Trú", theme: "time" },
  { key: "v:夜", word: "夜", reading: "よる", meaning: "Buổi tối", hanviet: "Dạ", theme: "time" },
  { key: "v:今", word: "今", reading: "いま", meaning: "Bây giờ", hanviet: "Kim", theme: "time" },
  { key: "v:年", word: "年", reading: "とし", meaning: "Năm", hanviet: "Niên", theme: "time" },
  { key: "v:週", word: "週", reading: "しゅう", meaning: "Tuần", hanviet: "Chu", theme: "time" },
  // School / study (v58)
  { key: "v:学", word: "学校", reading: "がっこう", meaning: "Trường học", hanviet: "Học hiệu", theme: "school" },
  { key: "v:先", word: "先生", reading: "せんせい", meaning: "Giáo viên", hanviet: "Tiên sinh", theme: "school" },
  { key: "v:勉", word: "勉強", reading: "べんきょう", meaning: "Học bài", hanviet: "Miễn cường", theme: "school" },
  { key: "v:試", word: "試験", reading: "しけん", meaning: "Kỳ thi", hanviet: "Thí nghiệm", theme: "school" },
  { key: "v:答", word: "答え", reading: "こたえ", meaning: "Câu trả lời", hanviet: "Đáp", theme: "school" },
  // Transport (v58)
  { key: "v:車", word: "車", reading: "くるま", meaning: "Xe ô tô", hanviet: "Xa", theme: "transport" },
  { key: "v:電", word: "電車", reading: "でんしゃ", meaning: "Tàu điện", hanviet: "Điện xa", theme: "transport" },
  { key: "v:駅", word: "駅", reading: "えき", meaning: "Ga tàu", hanviet: "Dịch", theme: "transport" },
  { key: "v:道路", word: "道路", reading: "どうろ", meaning: "Con đường", hanviet: "Đạo lộ", theme: "transport" },
  { key: "v:橋", word: "橋", reading: "はし", meaning: "Cây cầu", hanviet: "Kiều", theme: "transport" }
];
const EQUIP_SLOT_COUNT = 3;
const THEME_BUFFS = Object.freeze({
  nature: { label: "Mộc · Hồi stamina", desc: "Hồi thể lực +40% mỗi slot", staminaMult: 1.4, color: "#7cd992" },
  daily: { label: "Thổ · Giáp", desc: "Giảm sát thương nhận vào 15%", defenseMult: 0.85, color: "#fbbf77" },
  people: { label: "Nhân · Mở rộng tương tác", desc: "Tầm nói chuyện NPC rộng hơn", interactRange: 1.3, color: "#a3b5ff" },
  action: { label: "Hỏa · Sát thương", desc: "Đòn đánh +15% + tia lửa đỏ", damageMult: 1.15, attackFx: "red-spark", color: "#ff9aa2" },
  adventure: { label: "Bảo · Tặng thẻ", desc: "Mỗi node thu được thêm +1 thẻ", lootBonus: 1, color: "#ffd27a" }
});
const STUDY_BOOKS = Object.freeze({
  "book-vocab": {
    id: "book-vocab",
    icon: "📗",
    name: "Sách Từ Vựng",
    nameJP: "語彙帳",
    description: "Mở 5 flashcard từ vựng ngẫu nhiên N4 với phát âm TTS.",
    type: "vocab",
    color: "#4ade80",
    border: "rgba(74,222,128,0.35)"
  },
  "book-kanji": {
    id: "book-kanji",
    icon: "📘",
    name: "Sách Kanji",
    nameJP: "漢字帳",
    description: "Ôn tập 5 chữ Kanji ngẫu nhiên — bộ thủ, âm đọc, ý nghĩa.",
    type: "kanji",
    color: "#60a5fa",
    border: "rgba(96,165,250,0.35)"
  },
  "book-grammar": {
    id: "book-grammar",
    icon: "📙",
    name: "Sách Ngữ Pháp",
    nameJP: "文法帳",
    description: "Xem lại 5 cấu trúc ngữ pháp N4 với ví dụ câu thực tế.",
    type: "grammar",
    color: "#fbbf24",
    border: "rgba(251,191,36,0.35)"
  }
});
const DEFAULT_ITEMS = Object.freeze({
  "book-vocab": 3,
  "book-kanji": 3,
  "book-grammar": 3
});
const emptyState = () => ({
  vocab: {},
  grammar: {},
  lastForgeAt: 0,
  panelOpen: false,
  lastPickupAt: 0,
  equippedCards: Array(EQUIP_SLOT_COUNT).fill(null),
  // v41 — item mastery + abilities
  mastery: {},
  // { [vocabKey]: { uses: number, lastUsedAt: number } }
  abilityCooldowns: {},
  // { [abilityId]: expireTimestamp }
  completedThemes: [],
  // theme keys for which collection bonus is claimed
  // v5 — consumable items (Study Books)
  items: { ...DEFAULT_ITEMS }
  // { [itemId]: count }
});
const FORGE_RECIPES = Object.freeze([
  { materials: ["v:山", "v:川"], result: { key: "g:natural", word: "山川", reading: "さんせん", meaning: "Thiên nhiên (núi sông)", theme: "grammar", rarity: "rare" } },
  { materials: ["v:火", "v:水"], result: { key: "g:opposite", word: "対立", reading: "たいりつ", meaning: "Đối lập (lửa nước)", theme: "grammar", rarity: "rare" } },
  { materials: ["v:食", "v:飲"], result: { key: "g:feast", word: "宴", reading: "うたげ", meaning: "Bữa tiệc", theme: "grammar", rarity: "rare" } },
  { materials: ["v:剣", "v:盾"], result: { key: "g:warrior", word: "戦士", reading: "せんし", meaning: "Chiến binh", theme: "grammar", rarity: "rare" } },
  { materials: ["v:人", "v:友"], result: { key: "g:comrade", word: "仲間", reading: "なかま", meaning: "Đồng bạn", theme: "grammar", rarity: "rare" } },
  { materials: ["v:空", "v:星"], result: { key: "g:universe", word: "宇宙", reading: "うちゅう", meaning: "Vũ trụ", theme: "grammar", rarity: "rare" } },
  { materials: ["v:木", "v:森"], result: { key: "g:wilderness", word: "大自然", reading: "だいしぜん", meaning: "Đại tự nhiên", theme: "grammar", rarity: "rare" } },
  { materials: ["v:旅", "v:夢"], result: { key: "g:adventure", word: "冒険", reading: "ぼうけん", meaning: "Phiêu lưu", theme: "grammar", rarity: "rare" } },
  { materials: ["v:雨", "v:風"], result: { key: "g:storm", word: "嵐", reading: "あらし", meaning: "Bão tố", theme: "grammar", rarity: "rare" } },
  { materials: ["v:月", "v:花"], result: { key: "g:beauty", word: "花鳥風月", reading: "かちょうふうげつ", meaning: "Tứ nhã (hoa-chim-gió-trăng)", theme: "grammar", rarity: "rare" } },
  // v41 — more special recipes to cover orphaned items
  { materials: ["v:雪", "v:石"], result: { key: "g:landscape", word: "景色", reading: "けしき", meaning: "Phong cảnh", theme: "grammar", rarity: "rare" } },
  { materials: ["v:海", "v:魚"], result: { key: "g:fishing", word: "漁", reading: "りょう", meaning: "Đánh cá", theme: "grammar", rarity: "rare" } },
  { materials: ["v:米", "v:茶"], result: { key: "g:meal", word: "食事", reading: "しょくじ", meaning: "Bữa ăn", theme: "grammar", rarity: "rare" } },
  { materials: ["v:肉", "v:卵"], result: { key: "g:cooking", word: "料理", reading: "りょうり", meaning: "Nấu ăn", theme: "grammar", rarity: "rare" } },
  { materials: ["v:家", "v:村"], result: { key: "g:hometown", word: "故郷", reading: "こきょう", meaning: "Quê hương", theme: "grammar", rarity: "rare" } },
  { materials: ["v:町", "v:道"], result: { key: "g:journey", word: "旅路", reading: "たびじ", meaning: "Hành trình", theme: "grammar", rarity: "rare" } },
  { materials: ["v:歩", "v:走"], result: { key: "g:speed", word: "速度", reading: "そくど", meaning: "Tốc độ", theme: "grammar", rarity: "rare" } },
  { materials: ["v:見", "v:聞"], result: { key: "g:senses", word: "感覚", reading: "かんかく", meaning: "Giác quan", theme: "grammar", rarity: "rare" } },
  { materials: ["v:話", "v:人"], result: { key: "g:dialogue", word: "会話", reading: "かいわ", meaning: "Hội thoại", theme: "grammar", rarity: "rare" } },
  { materials: ["v:宝", "v:神"], result: { key: "g:blessing", word: "神宝", reading: "しんぽう", meaning: "Thần bảo", theme: "grammar", rarity: "epic" } },
  { materials: ["v:魂", "v:夢"], result: { key: "g:spirit", word: "精神", reading: "せいしん", meaning: "Tinh thần", theme: "grammar", rarity: "epic" } },
  { materials: ["v:本", "v:鞄"], result: { key: "g:school", word: "学校", reading: "がっこう", meaning: "Trường học", theme: "grammar", rarity: "rare" } },
  { materials: ["v:傘", "v:雨"], result: { key: "g:weather", word: "天気", reading: "てんき", meaning: "Thời tiết", theme: "grammar", rarity: "rare" } }
]);
const THEME_FUSION_POOL = Object.freeze({
  nature: [
    { key: "g:tf:ecosystem", word: "生態系", reading: "せいたいけい", meaning: "Hệ sinh thái" },
    { key: "g:tf:seasons", word: "四季", reading: "しき", meaning: "Bốn mùa" },
    { key: "g:tf:earth", word: "大地", reading: "だいち", meaning: "Mặt đất" }
  ],
  daily: [
    { key: "g:tf:routine", word: "日常", reading: "にちじょう", meaning: "Thường ngày" },
    { key: "g:tf:lifestyle", word: "暮らし", reading: "くらし", meaning: "Cuộc sống" },
    { key: "g:tf:hometown", word: "下町", reading: "したまち", meaning: "Khu phố cổ" }
  ],
  people: [
    { key: "g:tf:society", word: "社会", reading: "しゃかい", meaning: "Xã hội" },
    { key: "g:tf:community", word: "地域", reading: "ちいき", meaning: "Cộng đồng" },
    { key: "g:tf:family", word: "家族", reading: "かぞく", meaning: "Gia đình" }
  ],
  action: [
    { key: "g:tf:training", word: "修行", reading: "しゅぎょう", meaning: "Tu luyện" },
    { key: "g:tf:skill", word: "技術", reading: "ぎじゅつ", meaning: "Kỹ năng" },
    { key: "g:tf:power", word: "力", reading: "ちから", meaning: "Sức mạnh" }
  ],
  adventure: [
    { key: "g:tf:quest", word: "冒険譚", reading: "ぼうけんたん", meaning: "Câu chuyện phiêu lưu" },
    { key: "g:tf:treasure", word: "秘宝", reading: "ひほう", meaning: "Bảo vật bí mật" },
    { key: "g:tf:legend", word: "伝説", reading: "でんせつ", meaning: "Truyền thuyết" }
  ]
});
const CROSS_FUSION_POOL = Object.freeze([
  { key: "g:cf:harmony", word: "調和", reading: "ちょうわ", meaning: "Hài hòa" },
  { key: "g:cf:contrast", word: "対照", reading: "たいしょう", meaning: "Tương phản" },
  { key: "g:cf:bond", word: "絆", reading: "きずな", meaning: "Sợi dây gắn kết" },
  { key: "g:cf:discovery", word: "発見", reading: "はっけん", meaning: "Khám phá" },
  { key: "g:cf:wonder", word: "不思議", reading: "ふしぎ", meaning: "Kỳ diệu" },
  { key: "g:cf:fate", word: "運命", reading: "うんめい", meaning: "Số phận" }
]);
const COLLECTION_BONUSES = Object.freeze({
  nature: { label: "Tự Nhiên Đại Sư", effect: "staminaRegen", value: 1.5, desc: "Hồi thể lực +50% vĩnh viễn" },
  daily: { label: "Bách Khoa Toàn Thư", effect: "xpBonus", value: 1.2, desc: "Nhận XP +20%" },
  people: { label: "Nhân Duyên Sư", effect: "npcDiscount", value: 0.8, desc: "Giá shop NPC giảm 20%" },
  action: { label: "Võ Lâm Cao Thủ", effect: "critChance", value: 0.15, desc: "Tỉ lệ chí mạng +15%" },
  adventure: { label: "Lữ Hành Gia", effect: "moveSpeed", value: 1.1, desc: "Tốc độ di chuyển +10%" }
});
const ITEM_ABILITIES = Object.freeze({
  // Nature
  "v:火": { id: "fireball", label: "🔥 Hỏa Cầu", desc: "Bắn lửa gây sát thương vùng", cooldown: 12 },
  "v:水": { id: "heal", label: "💧 Hồi Phục", desc: "Hồi 30% HP", cooldown: 20 },
  "v:風": { id: "windboost", label: "💨 Thuận Phong", desc: "Tăng tốc 3 giây", cooldown: 15 },
  "v:雷": { id: "thunder", label: "⚡ Lôi Đình", desc: "Gây sét đánh quanh bạn", cooldown: 18 },
  "v:木": { id: "barrier", label: "🌳 Phòng Hộ", desc: "Giảm sát thương 50% trong 4 giây", cooldown: 25 },
  "v:石": { id: "stoneskin", label: "🪨 Thạch Giáp", desc: "Không thể bị đánh bật 5 giây", cooldown: 22 },
  // Adventure
  "v:剣": { id: "slash", label: "⚔️ Kiếm Chém", desc: "Đòn chém mạnh x2 sát thương", cooldown: 8 },
  "v:盾": { id: "block", label: "🛡️ Khiên Đỡ", desc: "Chặn hoàn toàn 1 đòn kế tiếp", cooldown: 15 },
  "v:宝": { id: "magnetloot", label: "✨ Hút Kho Báu", desc: "Hút hết loot gần bạn", cooldown: 30 },
  "v:神": { id: "divineaura", label: "🌟 Thần Quang", desc: "Soi sáng và hiện POI ẩn 10 giây", cooldown: 45 },
  "v:魂": { id: "revive", label: "👻 Hồi Sinh", desc: "Hồi sinh tại chỗ khi HP = 0 (tự động)", cooldown: 120 },
  // Action
  "v:走": { id: "sprint", label: "🏃 Xung Phong", desc: "Sprint không tốn stamina 5 giây", cooldown: 20 },
  "v:食": { id: "feast", label: "🍖 Đại Tiệc", desc: "Hồi đầy stamina", cooldown: 30 },
  "v:見": { id: "farsight", label: "👁️ Viễn Nhãn", desc: "Tầm nhìn xa gấp đôi 10 giây", cooldown: 25 }
});
const MASTERY_TIERS = Object.freeze([
  { uses: 5, tier: 1, label: "初心者 (Sơ cấp)", buffMult: 1.05, color: "#b0b0b0" },
  { uses: 15, tier: 2, label: "修行者 (Tu luyện)", buffMult: 1.12, color: "#7cd992" },
  { uses: 30, tier: 3, label: "達人 (Đạt nhân)", buffMult: 1.2, color: "#3498db" },
  { uses: 60, tier: 4, label: "名人 (Danh nhân)", buffMult: 1.3, color: "#9b59b6" },
  { uses: 100, tier: 5, label: "伝説 (Huyền thoại)", buffMult: 1.5, color: "#f1c40f" }
]);
function getMasteryTier(uses) {
  let best = null;
  for (const t of MASTERY_TIERS) {
    if (uses >= t.uses) best = t;
  }
  return best;
}
function findRecipe(keyA, keyB) {
  for (const r of FORGE_RECIPES) {
    const [a, b] = r.materials;
    if (a === keyA && b === keyB || a === keyB && b === keyA) return r;
  }
  return null;
}
function resolveFusion(keyA, keyB, vocabA, vocabB) {
  const special = findRecipe(keyA, keyB);
  if (special) return { result: special.result, isSpecial: true, rarity: special.result.rarity || "rare" };
  if (vocabA.theme === vocabB.theme) {
    const pool = THEME_FUSION_POOL[vocabA.theme];
    if (pool && pool.length > 0) {
      const pick2 = pool[Math.floor(Math.random() * pool.length)];
      return { result: { ...pick2, theme: "grammar", rarity: "common" }, isSpecial: false, rarity: "common" };
    }
  }
  const pick = CROSS_FUSION_POOL[Math.floor(Math.random() * CROSS_FUSION_POOL.length)];
  return { result: { ...pick, theme: "grammar", rarity: "uncommon" }, isSpecial: false, rarity: "uncommon" };
}
const useInventoryStore = create(
  persist(
    (set, get) => ({
      ...emptyState(),
      addVocab(entry) {
        if (!entry || !entry.key) return;
        const now = Date.now();
        set((s) => {
          const existing = s.vocab[entry.key];
          const next = existing ? { ...existing, count: (existing.count || 0) + 1, lastAt: now } : {
            word: entry.word,
            reading: entry.reading,
            meaning: entry.meaning,
            hanviet: entry.hanviet,
            theme: entry.theme,
            count: 1,
            firstAt: now,
            lastAt: now
          };
          return {
            vocab: { ...s.vocab, [entry.key]: next },
            lastPickupAt: now
          };
        });
      },
      togglePanel() {
        set((s) => ({ panelOpen: !s.panelOpen }));
      },
      openPanel() {
        set({ panelOpen: true });
      },
      closePanel() {
        set({ panelOpen: false });
      },
      clearAll() {
        set({ vocab: {}, grammar: {}, equippedCards: Array(EQUIP_SLOT_COUNT).fill(null), mastery: {}, abilityCooldowns: {}, completedThemes: [] });
      },
      // ── v41 Flexible Grammar Forge ─────────────────────────────────
      /**
       * Forge a grammar card from any two vocab materials.
       * Priority: special recipe > same-theme fusion > cross-theme fusion.
       * ALL combinations produce something — no more "unknown recipe".
       */
      forgeGrammar(matKey1, matKey2) {
        if (!matKey1 || !matKey2) return { ok: false, reason: "empty-slot" };
        if (matKey1 === matKey2) return { ok: false, reason: "same-material" };
        const s = get();
        const v1 = s.vocab[matKey1];
        const v2 = s.vocab[matKey2];
        if (!v1 || (v1.count || 0) < 1) return { ok: false, reason: "missing-mat-1" };
        if (!v2 || (v2.count || 0) < 1) return { ok: false, reason: "missing-mat-2" };
        const fusion = resolveFusion(matKey1, matKey2, v1, v2);
        if (!fusion) return { ok: false, reason: "no-fusion" };
        const now = Date.now();
        set((st) => {
          const nextVocab = { ...st.vocab };
          const n1 = (nextVocab[matKey1].count || 0) - 1;
          if (n1 <= 0) delete nextVocab[matKey1];
          else nextVocab[matKey1] = { ...nextVocab[matKey1], count: n1, lastAt: now };
          const n2 = (nextVocab[matKey2].count || 0) - 1;
          if (n2 <= 0) delete nextVocab[matKey2];
          else nextVocab[matKey2] = { ...nextVocab[matKey2], count: n2, lastAt: now };
          const gKey = fusion.result.key;
          const existing = st.grammar[gKey];
          const nextGrammar = {
            ...st.grammar,
            [gKey]: existing ? { ...existing, count: (existing.count || 0) + 1, lastAt: now } : { ...fusion.result, count: 1, firstAt: now, lastAt: now }
          };
          const nextMastery = { ...st.mastery };
          for (const mk of [matKey1, matKey2]) {
            const prev = nextMastery[mk] || { uses: 0 };
            nextMastery[mk] = { uses: prev.uses + 1, lastUsedAt: now };
          }
          return { vocab: nextVocab, grammar: nextGrammar, lastForgeAt: now, mastery: nextMastery };
        });
        return { ok: true, result: fusion.result, isSpecial: fusion.isSpecial, rarity: fusion.rarity };
      },
      // ── v41 Transmute — 3 of any item → 1 random from next rarity tier ──
      /**
       * Sacrifice 3 copies of a single vocab item to receive a random item
       * from a different theme (simulates "upgrading").
       */
      transmute(vocabKey2) {
        const s = get();
        const v = s.vocab[vocabKey2];
        if (!v || (v.count || 0) < 3) return { ok: false, reason: "need-3-copies" };
        const now = Date.now();
        const otherThemes = LOOT_VOCAB_SEED.filter((e) => e.theme !== v.theme);
        const pick = otherThemes[Math.floor(Math.random() * otherThemes.length)];
        if (!pick) return { ok: false, reason: "no-target" };
        set((st) => {
          const nextVocab = { ...st.vocab };
          const newCount = (nextVocab[vocabKey2].count || 0) - 3;
          if (newCount <= 0) delete nextVocab[vocabKey2];
          else nextVocab[vocabKey2] = { ...nextVocab[vocabKey2], count: newCount, lastAt: now };
          const existing = nextVocab[pick.key];
          nextVocab[pick.key] = existing ? { ...existing, count: (existing.count || 0) + 1, lastAt: now } : { word: pick.word, reading: pick.reading, meaning: pick.meaning, hanviet: pick.hanviet, theme: pick.theme, count: 1, firstAt: now, lastAt: now };
          return { vocab: nextVocab };
        });
        return { ok: true, received: pick };
      },
      // ── v41 Item Mastery ──────────────────────────────────────────
      /** Increment usage counter for an item (called on equip/forge/ability use). */
      recordItemUse(vocabKey2) {
        const now = Date.now();
        set((s) => {
          var _a2;
          return {
            mastery: {
              ...s.mastery,
              [vocabKey2]: { uses: (((_a2 = s.mastery[vocabKey2]) == null ? void 0 : _a2.uses) || 0) + 1, lastUsedAt: now }
            }
          };
        });
      },
      /** Get mastery info for an item. */
      getItemMastery(vocabKey2) {
        const entry = get().mastery[vocabKey2];
        if (!entry) return { uses: 0, tier: null, label: null, buffMult: 1, color: null };
        const tier = getMasteryTier(entry.uses);
        return {
          uses: entry.uses,
          tier: (tier == null ? void 0 : tier.tier) || 0,
          label: (tier == null ? void 0 : tier.label) || null,
          buffMult: (tier == null ? void 0 : tier.buffMult) || 1,
          color: (tier == null ? void 0 : tier.color) || null
        };
      },
      // ── v41 Collection Bonuses ────────────────────────────────────
      /** Check if all items in a theme have been collected (at least 1). */
      isThemeComplete(theme) {
        const themeItems = LOOT_VOCAB_SEED.filter((e) => e.theme === theme);
        const vocab = get().vocab;
        return themeItems.every((e) => vocab[e.key] && vocab[e.key].count > 0);
      },
      /** Claim a collection bonus. Returns true if newly claimed. */
      claimCollectionBonus(theme) {
        const s = get();
        if (s.completedThemes.includes(theme)) return false;
        if (!this.isThemeComplete(theme)) return false;
        set((st) => ({ completedThemes: [...st.completedThemes, theme] }));
        return true;
      },
      /** Get all active collection bonuses. */
      getCollectionBonuses() {
        return get().completedThemes.map((t) => ({ theme: t, ...COLLECTION_BONUSES[t] })).filter((b) => b.effect);
      },
      // ── v41 Item Abilities ────────────────────────────────────────
      /** Check if an item ability is ready (off cooldown). */
      isAbilityReady(vocabKey2) {
        const ability = ITEM_ABILITIES[vocabKey2];
        if (!ability) return false;
        const expiry = get().abilityCooldowns[ability.id] || 0;
        return Date.now() >= expiry;
      },
      /** Use an item ability. Returns the ability data if successful. */
      useAbility(vocabKey2) {
        const ability = ITEM_ABILITIES[vocabKey2];
        if (!ability) return { ok: false, reason: "no-ability" };
        const now = Date.now();
        const expiry = get().abilityCooldowns[ability.id] || 0;
        if (now < expiry) return { ok: false, reason: "on-cooldown", remaining: Math.ceil((expiry - now) / 1e3) };
        const equipped = get().equippedCards;
        if (!equipped.includes(vocabKey2)) return { ok: false, reason: "not-equipped" };
        set((s) => {
          var _a2;
          return {
            abilityCooldowns: { ...s.abilityCooldowns, [ability.id]: now + ability.cooldown * 1e3 },
            mastery: {
              ...s.mastery,
              [vocabKey2]: { uses: (((_a2 = s.mastery[vocabKey2]) == null ? void 0 : _a2.uses) || 0) + 1, lastUsedAt: now }
            }
          };
        });
        return { ok: true, ability };
      },
      /** Get ability info for an equipped item (with cooldown status). */
      getAbilityInfo(vocabKey2) {
        const ability = ITEM_ABILITIES[vocabKey2];
        if (!ability) return null;
        const now = Date.now();
        const expiry = get().abilityCooldowns[ability.id] || 0;
        return {
          ...ability,
          ready: now >= expiry,
          remaining: now < expiry ? Math.ceil((expiry - now) / 1e3) : 0
        };
      },
      /** Array view of all forged grammar cards, sorted by recent. */
      getAllGrammar() {
        const g = get().grammar || {};
        return Object.entries(g).map(([key, entry]) => ({ key, ...entry })).sort((a, b) => (b.firstAt || 0) - (a.firstAt || 0));
      },
      getAll() {
        const v = get().vocab || {};
        return Object.entries(v).map(([key, entry]) => ({ key, ...entry })).sort((a, b) => (b.firstAt || 0) - (a.firstAt || 0));
      },
      getTotalCount() {
        const v = get().vocab || {};
        let n = 0;
        for (const k in v) n += v[k].count || 0;
        return n;
      },
      getUniqueCount() {
        return Object.keys(get().vocab || {}).length;
      },
      // ── Equip system (v29) ───────────────────────────────────────
      /** Place a vocab key into a slot (0-indexed). Passing null unequips. */
      equipToSlot(slotIdx, vocabKey2) {
        if (slotIdx < 0 || slotIdx >= EQUIP_SLOT_COUNT) return;
        set((s) => {
          const next = [...s.equippedCards];
          if (vocabKey2) {
            const otherIdx = next.findIndex((k, i) => k === vocabKey2 && i !== slotIdx);
            if (otherIdx >= 0) next[otherIdx] = next[slotIdx];
          }
          next[slotIdx] = vocabKey2;
          return { equippedCards: next };
        });
      },
      unequipSlot(slotIdx) {
        if (slotIdx < 0 || slotIdx >= EQUIP_SLOT_COUNT) return;
        set((s) => {
          const next = [...s.equippedCards];
          next[slotIdx] = null;
          return { equippedCards: next };
        });
      },
      // ── v5 Consumable Items ──────────────────────────────────────────
      /** Add count copies of a consumable item. */
      addItem(itemId, count = 1) {
        if (!STUDY_BOOKS[itemId]) return;
        set((s) => {
          var _a2;
          return {
            items: { ...s.items, [itemId]: (((_a2 = s.items) == null ? void 0 : _a2[itemId]) || 0) + count }
          };
        });
      },
      /** Consume one copy of an item. Returns { ok, reason }. */
      consumeItem(itemId) {
        var _a2;
        const s = get();
        const current = ((_a2 = s.items) == null ? void 0 : _a2[itemId]) || 0;
        if (current < 1) return { ok: false, reason: "out-of-stock" };
        set((st) => ({
          items: { ...st.items, [itemId]: current - 1 }
        }));
        return { ok: true };
      },
      /** Seed default study books if none exist yet (called once on first open). */
      ensureDefaultItems() {
        const s = get();
        if (!s.items || Object.keys(s.items).length === 0) {
          set({ items: { ...DEFAULT_ITEMS } });
        }
      },
      /** Resolve equipped keys into full vocab entries. */
      getEquippedEntries() {
        const s = get();
        return s.equippedCards.map((key) => key && s.vocab[key] ? { key, ...s.vocab[key] } : null);
      },
      /**
       * Compute stacked buffs from all three equipped cards.
       * Returns a stable object shape so callers can read fields without
       * null-guarding. Stacks multiplicatively for mults and additively
       * for counters.
       */
      getActiveBuffs() {
        const s = get();
        const buffs = {
          staminaMult: 1,
          damageMult: 1,
          defenseMult: 1,
          interactRange: 1,
          lootBonus: 0,
          attackFx: null,
          auraColors: [],
          themes: []
        };
        for (const key of s.equippedCards) {
          if (!key) continue;
          const entry = s.vocab[key];
          if (!entry || !entry.theme) continue;
          const buff = THEME_BUFFS[entry.theme];
          if (!buff) continue;
          buffs.themes.push(entry.theme);
          buffs.auraColors.push(buff.color);
          if (buff.staminaMult) buffs.staminaMult *= buff.staminaMult;
          if (buff.damageMult) buffs.damageMult *= buff.damageMult;
          if (buff.defenseMult) buffs.defenseMult *= buff.defenseMult;
          if (buff.interactRange) buffs.interactRange = Math.max(buffs.interactRange, buff.interactRange);
          if (buff.lootBonus) buffs.lootBonus += buff.lootBonus;
          if (buff.attackFx) buffs.attackFx = buff.attackFx;
          const m = s.mastery[key];
          if (m) {
            const tier = getMasteryTier(m.uses);
            if (tier) {
              buffs.staminaMult *= tier.buffMult;
              buffs.damageMult *= tier.buffMult;
            }
          }
        }
        return buffs;
      }
    }),
    {
      name: "inventory",
      version: 5,
      partialize: (s) => ({
        vocab: s.vocab,
        grammar: s.grammar,
        equippedCards: s.equippedCards,
        mastery: s.mastery,
        completedThemes: s.completedThemes,
        items: s.items
      }),
      migrate: (persisted, fromVersion) => {
        if (!persisted) return persisted;
        let next = persisted;
        if (fromVersion < 2) {
          next = { ...next, equippedCards: Array(EQUIP_SLOT_COUNT).fill(null) };
        }
        if (fromVersion < 3) {
          next = { ...next, grammar: {} };
        }
        if (fromVersion < 4) {
          next = { ...next, mastery: {}, abilityCooldowns: {}, completedThemes: [] };
        }
        if (fromVersion < 5) {
          next = { ...next, items: { ...DEFAULT_ITEMS } };
        }
        return next;
      }
    }
  )
);
const STAT_ATTRS = Object.freeze({
  hp: {
    id: "hp",
    label: "Sức khoẻ",
    icon: "❤️",
    desc: "Tăng máu tối đa",
    perPoint: 15,
    // +15 HP per point
    max: 100
    // +1500 HP cap
  },
  atk: {
    id: "atk",
    label: "Tấn công",
    icon: "⚔️",
    desc: "Tăng sát thương cơ bản",
    perPoint: 2,
    // +2 ATK per point
    max: 100
    // +200 ATK cap
  },
  def: {
    id: "def",
    label: "Phòng thủ",
    icon: "🛡️",
    desc: "Giảm sát thương nhận vào",
    perPoint: 0.01,
    // +1% damage reduction per point (multiplicative via 1 - def)
    max: 100
    // up to 85% reduction (capped in damageTakenMult)
  },
  crit: {
    id: "crit",
    label: "Chí mạng",
    icon: "💥",
    desc: "Tỉ lệ gây x2 sát thương",
    perPoint: 0.01,
    // +1% crit rate per point
    max: 100
    // capped at 100% in critChance
  },
  spd: {
    id: "spd",
    label: "Tốc độ",
    icon: "👟",
    desc: "Tăng tốc độ di chuyển + hồi stamina",
    perPoint: 0.02,
    // +2% movement speed per point
    max: 100
    // +200% speed cap
  }
});
const DEFAULT_ALLOC = { hp: 0, atk: 0, def: 0, crit: 0, spd: 0 };
const SCHEMA_VERSION$1 = 1;
const useCharacterStatsStore = create(persist(
  (set, get) => ({
    schema: SCHEMA_VERSION$1,
    // ─── Wallet ──────────────────────────────────────────────────
    statPoints: 0,
    totalEarned: 0,
    // lifetime (for stats / milestones)
    // ─── Allocation ──────────────────────────────────────────────
    alloc: { ...DEFAULT_ALLOC },
    // ─── Actions ─────────────────────────────────────────────────
    /** Award N points. Called by combat + learning-store hooks. */
    addStatPoints: (n) => set((s) => ({
      statPoints: s.statPoints + Math.max(0, n | 0),
      totalEarned: s.totalEarned + Math.max(0, n | 0)
    })),
    /** Spend N points on an attribute. Returns true on success. */
    allocate: (attrId, amount = 1) => {
      const attr = STAT_ATTRS[attrId];
      if (!attr) return false;
      const s = get();
      if (s.statPoints < 1) return false;
      const toSpend = Math.min(s.statPoints, amount);
      const cur = s.alloc[attrId] || 0;
      const actualSpend = Math.min(toSpend, attr.max - cur);
      if (actualSpend <= 0) return false;
      set({
        statPoints: s.statPoints - actualSpend,
        alloc: { ...s.alloc, [attrId]: cur + actualSpend }
      });
      return true;
    },
    /** Refund ALL allocated points back to the wallet. Used by the
     *  "Reset" button on the stats page. No cost (design call — the
     *  economy charges no gold to reset so players experiment freely;
     *  add a coin cost in a future balance pass if needed). */
    resetAll: () => set((s) => {
      const spent = Object.values(s.alloc).reduce((a, b) => a + (b | 0), 0);
      return {
        statPoints: s.statPoints + spent,
        alloc: { ...DEFAULT_ALLOC }
      };
    }),
    /** Dangerous wipe — zero everything. Used by settings/debug. */
    _fullReset: () => set({
      statPoints: 0,
      totalEarned: 0,
      alloc: { ...DEFAULT_ALLOC }
    })
  }),
  {
    name: "n4:character-stats:v1",
    storage: createJSONStorage(() => localStorage),
    version: SCHEMA_VERSION$1,
    partialize: (s) => ({
      schema: s.schema,
      statPoints: s.statPoints,
      totalEarned: s.totalEarned,
      alloc: s.alloc
    })
  }
));
function _itemBonuses() {
  try {
    return getItemBonuses(useLearningStore.getState());
  } catch (e) {
    return { atkBonus: 0, hpBonus: 0, defBonus: 0, spdBonus: 0 };
  }
}
function bonusMaxHp() {
  const s = useCharacterStatsStore.getState();
  const allocHp = (s.alloc.hp || 0) * STAT_ATTRS.hp.perPoint;
  const itemHp = _itemBonuses().hpBonus || 0;
  return allocHp + itemHp;
}
function bonusAtk() {
  const s = useCharacterStatsStore.getState();
  const allocAtk = (s.alloc.atk || 0) * STAT_ATTRS.atk.perPoint;
  const itemAtk = _itemBonuses().atkBonus || 0;
  return allocAtk + itemAtk;
}
function damageTakenMult() {
  const s = useCharacterStatsStore.getState();
  const allocDef = (s.alloc.def || 0) * STAT_ATTRS.def.perPoint;
  const itemDef = _itemBonuses().defBonus || 0;
  const reduction = Math.min(0.85, allocDef + itemDef);
  return 1 - reduction;
}
const useLearningEncounterStore = create((set, get) => ({
  locked: false,
  current: null,
  openedAt: 0,
  resolver: null,
  /** Called by LearningEncounterManager. Returns true if opened, false
   *  if another encounter is already active. */
  _open({ id, spec, items, resolver }) {
    if (get().current) return false;
    set({
      locked: true,
      current: { id, spec, items },
      openedAt: Date.now(),
      resolver
    });
    return true;
  },
  /** Called by EncounterModal when the user closes (finished or skipped).
   *  Fires the resolver with a summary and clears state. */
  _close(summary) {
    var _a2, _b2, _c, _d;
    const { resolver, current, openedAt } = get();
    if (!current) return;
    const payload = {
      source: ((_a2 = current.spec) == null ? void 0 : _a2.source) || null,
      spec: current.spec,
      items: current.items,
      correct: (_b2 = summary == null ? void 0 : summary.correct) != null ? _b2 : 0,
      total: (_d = summary == null ? void 0 : summary.total) != null ? _d : ((_c = current.items) == null ? void 0 : _c.length) || 0,
      skipped: !!(summary == null ? void 0 : summary.skipped),
      durationMs: Date.now() - openedAt
    };
    set({ locked: false, current: null, openedAt: 0, resolver: null });
    if (typeof resolver === "function") {
      try {
        resolver(payload);
      } catch (e) {
        console.error("[learning] resolver threw", e);
      }
    }
  }
}));
const PLAYER_HP_MAX_BASE = 120;
const PLAYER_MP_MAX = 100;
const PLAYER_ATK_BASE = 18;
function effectivePlayerHpMax() {
  try {
    return PLAYER_HP_MAX_BASE + bonusMaxHp();
  } catch (e) {
    return PLAYER_HP_MAX_BASE;
  }
}
function effectivePlayerAtk() {
  try {
    return PLAYER_ATK_BASE + bonusAtk();
  } catch (e) {
    return PLAYER_ATK_BASE;
  }
}
const useCombatStore = create(persist(
  (set, get) => ({
    // ─── Player vitals ───
    playerHp: effectivePlayerHpMax(),
    playerHpMax: effectivePlayerHpMax(),
    playerMp: PLAYER_MP_MAX,
    playerMpMax: PLAYER_MP_MAX,
    playerAtk: effectivePlayerAtk(),
    stunUntil: 0,
    // performance.now() timestamp — stunned while t < stunUntil
    invulnerableUntil: 0,
    // brief i-frames after being hit
    // ─── Skill cooldowns ── map of skillId → timestamp when it next can fire
    cooldowns: {},
    // ─── Aggro / active prompt ───
    activePromptEnemyId: null,
    // which enemy is currently showing the N4 gate
    activeSkillId: null,
    // which skill the player requested
    promptOpenedAt: 0,
    // performance.now() — timeout based on this
    // ─── Enemies — flat array of live enemy state ── (pool writes here)
    enemies: [],
    // { id, kind, x, y, z, hp, hpMax, state, targetX, targetZ, lastAttackAt }
    // v52 — NPC combat registry. Guard-class NPCs register themselves
    // here on mount so the EnemyFSM can treat them as aggro targets and
    // guards can hunt down monsters near their post. Civilians never
    // register, so they remain non-combat dressing.
    //   shape: { id, x, z, hp, hpMax, combatClass: 'guard', state, lastHitAt }
    npcs: [],
    // ─── Kill counter (persisted for HUD stats) ───
    killCount: 0,
    deathCount: 0,
    totalXpEarned: 0,
    // v53 — cumulative XP earned across all sessions
    // ─── v38 Game-juice: camera trauma + hit-stop ─────────────────
    // cameraTrauma 0..1 drives a procedural camera shake (ThirdPerson
    // reads this each frame). Decays in `tickTrauma`.
    cameraTrauma: 0,
    // hitStopUntil is a performance.now() stamp — player + enemy
    // tick loops early-return while now() < this so the scene freezes
    // for ~120ms on impact. Short enough to feel punchy, long enough
    // for the player to register the hit.
    hitStopUntil: 0,
    // ═════════ Actions ═════════
    hitPlayer: (damage) => set((s) => {
      const now = performance.now();
      const isLocked = s.activePromptEnemyId || useLearningEncounterStore.getState().locked;
      if (now < s.invulnerableUntil || isLocked) return s;
      let reduced = damage;
      try {
        reduced = Math.max(1, Math.round(damage * damageTakenMult()));
      } catch (e) {
      }
      const next = Math.max(0, s.playerHp - reduced);
      const died = next === 0;
      const fullHp = effectivePlayerHpMax();
      return {
        playerHp: died ? fullHp : next,
        playerHpMax: fullHp,
        invulnerableUntil: now + 500,
        deathCount: died ? s.deathCount + 1 : s.deathCount,
        stunUntil: died ? 0 : reduced > 20 ? now + 300 : s.stunUntil
      };
    }),
    /** Re-read max HP / ATK from character-stats store. Call after a
     *  stat allocation so the HUD bars + skill damage refresh live. */
    syncStatsFromAlloc: () => set((s) => {
      const hpMax = effectivePlayerHpMax();
      const atk = effectivePlayerAtk();
      return {
        playerHpMax: hpMax,
        playerHp: Math.min(s.playerHp + Math.max(0, hpMax - s.playerHpMax), hpMax),
        playerAtk: atk
      };
    }),
    healPlayer: (amount) => set((s) => ({
      playerHp: Math.min(s.playerHpMax, s.playerHp + amount)
    })),
    spendMp: (amount) => {
      const s = get();
      if (s.playerMp < amount) return false;
      set({ playerMp: s.playerMp - amount });
      return true;
    },
    regenMp: (amount) => set((s) => ({
      playerMp: Math.min(s.playerMpMax, s.playerMp + amount)
    })),
    stunPlayer: (ms) => set({
      stunUntil: performance.now() + ms
    }),
    setCooldown: (skillId, cooldownSec) => set((s) => ({
      cooldowns: { ...s.cooldowns, [skillId]: performance.now() + cooldownSec * 1e3 }
    })),
    isOnCooldown: (skillId) => {
      const cd = get().cooldowns[skillId];
      return cd && performance.now() < cd;
    },
    openSkillGate: (skillId, enemyId) => set({
      activeSkillId: skillId,
      activePromptEnemyId: enemyId,
      promptOpenedAt: performance.now()
    }),
    closeSkillGate: () => set({
      activeSkillId: null,
      activePromptEnemyId: null,
      promptOpenedAt: 0
    }),
    // ─── v38 Game-juice actions ───────────────────────────────────
    /** Add trauma in [0..1]; clamped. ThirdPerson reads this each frame. */
    addTrauma: (amount) => set((s) => ({
      cameraTrauma: Math.min(1, Math.max(0, s.cameraTrauma + (amount || 0)))
    })),
    /** Decay trauma toward 0 each frame. Called from ThirdPerson useFrame. */
    tickTrauma: (dt) => set((s) => {
      if (s.cameraTrauma <= 0) return s;
      const next = Math.max(0, s.cameraTrauma - dt * 3.2);
      return next === s.cameraTrauma ? s : { cameraTrauma: next };
    }),
    /** Freeze player + enemy ticks for `ms` (hit-stop). Chains: if a
     *  second hit lands mid-freeze, the new end stamp wins only when
     *  it's later than the current one. */
    setHitStop: (ms) => set((s) => {
      const end = performance.now() + Math.max(0, ms || 0);
      return end > s.hitStopUntil ? { hitStopUntil: end } : s;
    }),
    // ─── Enemy list ops (called by EnemyPool) ───
    setEnemies: (enemies) => set({ enemies }),
    updateEnemy: (id, patch) => set((s) => ({
      enemies: s.enemies.map((e) => e.id === id ? { ...e, ...patch } : e)
    })),
    damageEnemy: (id, damage, opts = {}) => {
      var _a2, _b2, _c, _d;
      const s = get();
      const enemy = s.enemies.find((e) => e.id === id);
      if (!enemy) return false;
      const dmgMult = ((_c = (_b2 = (_a2 = useInventoryStore.getState()).getActiveBuffs) == null ? void 0 : _b2.call(_a2)) == null ? void 0 : _c.damageMult) || 1;
      const finalDamage = damage * dmgMult;
      const nextHp = Math.max(0, enemy.hp - finalDamage);
      const died = nextHp === 0;
      const now = performance.now();
      const dir = opts.knockDir || null;
      const strength = (_d = opts.knockStrength) != null ? _d : Math.min(9, 3 + damage / 18);
      const strengthFinal = strength * (dmgMult > 1 ? 1 + (dmgMult - 1) * 0.6 : 1);
      const MASS_BY_KIND = { SLIME: 0.8, GOBLIN: 1, WISP: 0.6, ORC: 2.2 };
      const mass = MASS_BY_KIND[enemy.kind] || 1;
      const massMult = 1 / mass;
      const knockVx = dir ? (dir.x || 0) * strengthFinal * massMult : 0;
      const knockVz = dir ? (dir.z || 0) * strengthFinal * massMult : 0;
      const isSkill = opts.source === "skill" || opts.isSkill;
      const trauma = (died ? 0.55 : isSkill ? 0.48 : 0.28) + Math.min(0.25, finalDamage / 180);
      const hitStopMs = died ? 200 : isSkill ? 150 : 120;
      set({
        enemies: s.enemies.map((e) => e.id === id ? {
          ...e,
          hp: nextHp,
          state: died ? "DEAD" : "HURT",
          lastHitAt: now,
          knockVx: died ? 0 : knockVx,
          knockVz: died ? 0 : knockVz,
          knockStartAt: died ? 0 : now
        } : e),
        killCount: died ? s.killCount + 1 : s.killCount,
        totalXpEarned: died ? s.totalXpEarned + (enemy.xp || 0) : s.totalXpEarned,
        cameraTrauma: Math.min(1, s.cameraTrauma + trauma),
        hitStopUntil: Math.max(s.hitStopUntil, now + hitStopMs)
      });
      return died;
    },
    respawnEnemy: (id, patch) => set((s) => ({
      enemies: s.enemies.map((e) => e.id === id ? { ...e, ...patch, hp: e.hpMax, state: "PATROL", lastHitAt: 0 } : e)
    })),
    // ─── NPC combat registry (v52) ────────────────────────────────
    registerNPC: (npc) => set((s) => {
      if (s.npcs.some((n) => n.id === npc.id)) return s;
      return { npcs: [...s.npcs, { ...npc, state: "ALIVE", lastHitAt: 0 }] };
    }),
    unregisterNPC: (id) => set((s) => ({
      npcs: s.npcs.filter((n) => n.id !== id)
    })),
    // High-frequency position ping — mutates in place to avoid
    // broadcasting a new enemies/npcs array every frame.
    updateNPCPos: (id, x, z) => {
      const s = get();
      const npc = s.npcs.find((n) => n.id === id);
      if (!npc) return;
      npc.x = x;
      npc.z = z;
    },
    damageNPC: (id, damage, opts = {}) => {
      const s = get();
      const npc = s.npcs.find((n) => n.id === id);
      if (!npc) return false;
      if (npc.state === "FAINTED") return false;
      const nextHp = Math.max(0, npc.hp - damage);
      const fainted = nextHp === 0;
      const now = performance.now();
      set((st) => ({
        npcs: st.npcs.map((n) => n.id === id ? { ...n, hp: nextHp, state: fainted ? "FAINTED" : "HURT", lastHitAt: now } : n)
      }));
      return fainted;
    },
    healNPC: (id) => set((s) => ({
      npcs: s.npcs.map((n) => n.id === id ? { ...n, hp: n.hpMax, state: "ALIVE", lastHitAt: 0 } : n)
    })),
    // ─── Test helper ── reset full combat state
    reset: () => set({
      playerHp: effectivePlayerHpMax(),
      playerHpMax: effectivePlayerHpMax(),
      playerAtk: effectivePlayerAtk(),
      playerMp: PLAYER_MP_MAX,
      cooldowns: {},
      activePromptEnemyId: null,
      activeSkillId: null,
      enemies: [],
      killCount: 0,
      deathCount: 0,
      totalXpEarned: 0,
      stunUntil: 0,
      invulnerableUntil: 0
    })
  }),
  {
    name: "n4-combat-stats",
    storage: createJSONStorage(() => localStorage),
    // Only persist aggregate statistics — NOT session-scoped HP/MP/enemies.
    partialize: (s) => ({
      killCount: s.killCount,
      deathCount: s.deathCount,
      totalXpEarned: s.totalXpEarned
    }),
    version: 1
  }
));
const VALID_SEASONS = ["spring", "summer", "autumn", "winter"];
const VALID_WEATHERS = ["clear", "rain", "snow"];
const useWorldStore$1 = create(persist(
  (set) => ({
    // ── Transient ──────────────────────────────────────────────
    activeBuilding: null,
    cameraMode: "explore",
    mapOpen: false,
    // WorldMap modal visibility — driven by HUD menu
    // ── Persisted ──────────────────────────────────────────────
    isDay: true,
    // default to day for new users (was: false / dark)
    season: "spring",
    weather: "clear",
    // v53 — Centralized world3dConfig defaults. Previously these were
    // undefined and fell through to hardcoded fallbacks scattered across
    // CameraSystem, NPCManager, EnemyPool, etc. Centralizing prevents
    // config drift and lets the user's overrides persist.
    world3dConfig: {
      npcDensity: 1,
      cameraSmooth: 0.4,
      cameraDolly: 0.5,
      birdEyeAlt: 38
    },
    // ── Actions ────────────────────────────────────────────────
    enterBuilding: (buildingId) => set({
      activeBuilding: buildingId,
      cameraMode: "transition"
    }),
    exitBuilding: () => set({
      activeBuilding: null,
      cameraMode: "explore"
    }),
    setCameraMode: (mode) => set({ cameraMode: mode }),
    openMap: () => set({ mapOpen: true }),
    closeMap: () => set({ mapOpen: false }),
    toggleMap: () => set((s) => ({ mapOpen: !s.mapOpen })),
    toggleDayNight: () => set((s) => ({ isDay: !s.isDay })),
    setDayNight: (isDay) => set({ isDay: !!isDay }),
    setSeason: (s) => set({ season: VALID_SEASONS.includes(s) ? s : "spring" }),
    cycleSeason: () => set((state) => {
      const i = VALID_SEASONS.indexOf(state.season);
      return { season: VALID_SEASONS[(i + 1) % VALID_SEASONS.length] };
    }),
    setWeather: (w) => set({ weather: VALID_WEATHERS.includes(w) ? w : "clear" }),
    cycleWeather: () => set((state) => {
      const i = VALID_WEATHERS.indexOf(state.weather);
      return { weather: VALID_WEATHERS[(i + 1) % VALID_WEATHERS.length] };
    })
  }),
  {
    name: "n4-world-prefs",
    storage: createJSONStorage(() => localStorage),
    // Only persist player-facing preferences, not transient camera state.
    partialize: (s) => ({
      isDay: s.isDay,
      season: s.season,
      weather: s.weather,
      world3dConfig: s.world3dConfig
    }),
    version: 2
  }
));
const STUDY_PLAN_SCHEMA = 2;
const STUDY_PLAN_STORAGE_KEY = "n4:study-os:daily-plan:v1";
const STUDY_RESULT_HISTORY_KEY = "n4:study-os:result-history:v1";
const STUDY_PLAN_UPDATED_EVENT = "n4:study-os:daily-plan:updated";
function number(value) {
  return Number.isFinite(Number(value)) ? Number(value) : 0;
}
function stableId(value) {
  return String(value || "").replace(/[^\w:-]/g, "").slice(0, 64);
}
function stableHash(value) {
  let hash = 2166136261;
  for (const char of String(value || "")) {
    hash ^= char.codePointAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}
function createVersionToken() {
  var _a2, _b2;
  return ((_b2 = (_a2 = globalThis.crypto) == null ? void 0 : _a2.randomUUID) == null ? void 0 : _b2.call(_a2)) || `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function withBlockState(block, index, currentBlock = 0) {
  const signature = JSON.stringify({
    type: block.type,
    domain: block.domain,
    route: block.route,
    itemKeys: block.itemKeys || [],
    questionCount: number(block.questionCount)
  });
  return {
    ...block,
    id: block.id || `${index}:${stableId(block.type)}:${stableId(block.domain)}:${stableHash(signature)}`,
    status: index < currentBlock ? "complete" : index === currentBlock ? "available" : "locked"
  };
}
function normalizePlan(value) {
  if (!value || ![1, STUDY_PLAN_SCHEMA].includes(value.schema) || !Array.isArray(value.blocks)) return null;
  const currentBlock = Math.max(0, Math.min(Math.trunc(number(value.currentBlock)), value.blocks.length));
  const status = value.status === "complete" || currentBlock >= value.blocks.length ? "complete" : value.status === "active" ? "active" : "ready";
  return {
    ...value,
    schema: STUDY_PLAN_SCHEMA,
    currentBlock,
    status,
    revision: Math.max(0, Math.trunc(number(value.revision))),
    versionToken: typeof value.versionToken === "string" ? value.versionToken : null,
    blocks: value.blocks.map((block, index) => withBlockState(block, index, currentBlock))
  };
}
function readStoredPlan() {
  try {
    return normalizePlan(JSON.parse(localStorage.getItem(STUDY_PLAN_STORAGE_KEY) || "null"));
  } catch (e) {
    return null;
  }
}
function isMistakePendingReview(value) {
  return !["reviewed-later", "disputed"].includes(value == null ? void 0 : value.reviewState);
}
function countPendingMistakes(mistakes = {}) {
  return Object.values(mistakes || {}).filter(isMistakePendingReview).length;
}
function loadDailyStudyPlan(now = Date.now()) {
  var _a2;
  const value = readStoredPlan();
  if (!value || value.date !== getIsoDateKey(now)) return null;
  try {
    const storedSchema = (_a2 = JSON.parse(localStorage.getItem(STUDY_PLAN_STORAGE_KEY) || "null")) == null ? void 0 : _a2.schema;
    if (storedSchema !== STUDY_PLAN_SCHEMA) return saveDailyStudyPlan(value, { force: true });
  } catch (e) {
    return null;
  }
  return value;
}
function saveDailyStudyPlan(plan, options = {}) {
  const candidate = normalizePlan(plan);
  if (!candidate) return null;
  const latest = readStoredPlan();
  if (!options.force && (latest == null ? void 0 : latest.id) === candidate.id) {
    if (candidate.revision < latest.revision) return latest;
    if (candidate.revision === latest.revision && latest.versionToken && candidate.versionToken !== latest.versionToken) {
      return latest;
    }
  }
  const next = {
    ...candidate,
    revision: (latest == null ? void 0 : latest.id) === candidate.id ? Math.max(latest.revision, candidate.revision) + 1 : candidate.revision + 1,
    versionToken: createVersionToken(),
    updatedAt: Date.now()
  };
  try {
    localStorage.setItem(STUDY_PLAN_STORAGE_KEY, JSON.stringify(next));
    if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent(STUDY_PLAN_UPDATED_EVENT, { detail: { planId: next.id, status: next.status } }));
  } catch (e) {
    return plan;
  }
  return next;
}
function completedResultCount(plan) {
  var _a2;
  return ((_a2 = plan == null ? void 0 : plan.blocks) == null ? void 0 : _a2.filter((block) => block.status === "complete" && block.result).length) || 0;
}
function reconcileDailyStudyPlans(localPlan, incomingPlan) {
  const local = normalizePlan(localPlan);
  const incoming = normalizePlan(incomingPlan);
  if (!incoming) return local;
  if (!local) return { ...incoming, activeSession: null };
  if (local.date !== incoming.date) {
    return local.date > incoming.date ? local : { ...incoming, activeSession: null };
  }
  if (local.id !== incoming.id) {
    return number(local.updatedAt) >= number(incoming.updatedAt) ? local : { ...incoming, activeSession: null };
  }
  const selectIncoming = () => ({
    ...incoming,
    activeSession: incoming.currentBlock === local.currentBlock ? local.activeSession || null : null
  });
  const localRank = [
    local.currentBlock,
    completedResultCount(local),
    local.revision,
    number(local.updatedAt)
  ];
  const incomingRank = [
    incoming.currentBlock,
    completedResultCount(incoming),
    incoming.revision,
    number(incoming.updatedAt)
  ];
  for (let index = 0; index < localRank.length; index += 1) {
    if (localRank[index] > incomingRank[index]) return local;
    if (incomingRank[index] > localRank[index]) return selectIncoming();
  }
  return local;
}
function applySyncedDailyStudyPlan(incomingPlan) {
  const local = readStoredPlan();
  const reconciled = reconcileDailyStudyPlans(local, incomingPlan);
  if (!reconciled) return { applied: false, plan: local, reason: "invalid" };
  if (local && reconciled.id === local.id && reconciled.revision === local.revision && reconciled.versionToken === local.versionToken && reconciled.updatedAt === local.updatedAt) {
    return { applied: false, plan: local, reason: "local-newer-or-equal" };
  }
  const saved = saveDailyStudyPlan(reconciled, { force: true });
  return { applied: !!saved, plan: saved, reason: saved ? "incoming-newer" : "persistence-failed" };
}
function completeBlockInStudyPlan(plan, blockIndex, answers, result, options = {}) {
  const candidate = normalizePlan(plan);
  const latest = readStoredPlan();
  if (latest && latest.id !== (candidate == null ? void 0 : candidate.id)) return latest;
  const base = (latest == null ? void 0 : latest.id) === (candidate == null ? void 0 : candidate.id) ? latest : candidate;
  if (!base || base.id !== (candidate == null ? void 0 : candidate.id) || blockIndex !== base.currentBlock) return base || null;
  const currentBlock = base.blocks[blockIndex];
  if (!currentBlock || options.blockId && currentBlock.id !== options.blockId || currentBlock.status === "complete" || currentBlock.result) {
    return base;
  }
  const nextBlocks = [...base.blocks];
  nextBlocks[blockIndex] = {
    ...nextBlocks[blockIndex],
    status: "complete",
    answers,
    result
  };
  const nextIndex = Math.min(blockIndex + 1, base.blocks.length);
  if (nextBlocks[nextIndex]) nextBlocks[nextIndex] = { ...nextBlocks[nextIndex], status: "available" };
  const status = nextIndex >= base.blocks.length ? "complete" : "active";
  const nextPlan = saveDailyStudyPlan({
    ...base,
    blocks: nextBlocks,
    currentBlock: nextIndex,
    status,
    activeSession: null
  });
  if ((nextPlan == null ? void 0 : nextPlan.status) === "complete") persistStudyResult(nextPlan);
  return nextPlan;
}
function loadStudyResultHistory() {
  try {
    const value = JSON.parse(localStorage.getItem(STUDY_RESULT_HISTORY_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch (e) {
    return [];
  }
}
function persistStudyResult(plan) {
  try {
    const existing = loadStudyResultHistory().filter((entry) => entry.planId !== plan.id);
    const completed = plan.blocks.filter((block) => block.result);
    const summary = completed.reduce((total, block) => {
      var _a2, _b2, _c, _d;
      return {
        correct: total.correct + Number(((_a2 = block.result) == null ? void 0 : _a2.score) || 0),
        questions: total.questions + Number(((_b2 = block.result) == null ? void 0 : _b2.total) || 0),
        xp: total.xp + Number(((_c = block.result) == null ? void 0 : _c.xp) || 0),
        coins: total.coins + Number(((_d = block.result) == null ? void 0 : _d.coins) || 0)
      };
    }, { correct: 0, questions: 0, xp: 0, coins: 0 });
    localStorage.setItem(STUDY_RESULT_HISTORY_KEY, JSON.stringify([{ planId: plan.id, date: plan.date, completedAt: Date.now(), ...summary }, ...existing].slice(0, 30)));
  } catch (e) {
  }
}
function currentWorldJournal() {
  const user = useAppStore.getState().user;
  return createWorldLearningJournal({ owner: (user == null ? void 0 : user.id) ? `user:${user.id}` : "guest:this-browser", generation: useLearningStore.getState().resetGeneration || 0 });
}
function buildLearningSyncPayload(state = {}) {
  assertLearningOwnerReady();
  const persisted = selectPersistedLearningState(state);
  const {
    bookmarks = {},
    srs: srs2 = {},
    trainerStats = {},
    gameHistory = [],
    economyLog = [],
    gachaHistory = [],
    ...learning
  } = persisted;
  return {
    bookmarks,
    srs: normalizeSrsMap(srs2),
    trainer_stats: trainerStats,
    learning: {
      ...learning,
      gameHistory: Array.isArray(gameHistory) ? gameHistory.slice(-50) : [],
      economyLog: Array.isArray(economyLog) ? economyLog.slice(-40) : [],
      gachaHistory: Array.isArray(gachaHistory) ? gachaHistory.slice(-100) : []
    }
  };
}
function buildLearningSyncSignature(state = {}) {
  return JSON.stringify(buildLearningSyncPayload(state));
}
function syncLog(...args) {
  try {
    const enabled = typeof window !== "undefined" && (window._N4_SYNC_DEBUG === true || sessionStorage.getItem("n4-sync-debug") === "1");
    if (!enabled) return;
  } catch (e) {
  }
  try {
    console.debug("[sync]", ...args);
  } catch (e) {
  }
}
function buildProfileStatsPayload(learning = useLearningStore.getState(), appUser = useAppStore.getState().user) {
  var _a2, _b2, _c;
  const trainerStats = (learning == null ? void 0 : learning.trainerStats) || {};
  return {
    xp: learning == null ? void 0 : learning.xp,
    level: learning == null ? void 0 : learning.level,
    streak: learning == null ? void 0 : learning.streak,
    totalQuizzes: Object.values(trainerStats).reduce((sum, entry) => sum + ((entry == null ? void 0 : entry.plays) || 0), 0),
    totalCorrect: Object.values(trainerStats).reduce((sum, entry) => sum + ((entry == null ? void 0 : entry.correct) || 0), 0),
    displayName: (appUser == null ? void 0 : appUser.name) || null,
    avatarUrl: (appUser == null ? void 0 : appUser.avatar) || null,
    email: (appUser == null ? void 0 : appUser.email) || null,
    total_xp: (_a2 = learning == null ? void 0 : learning.xp) != null ? _a2 : 0,
    skill_points: (_b2 = learning == null ? void 0 : learning.skillPoints) != null ? _b2 : 0,
    total_skill_points_earned: (_c = learning == null ? void 0 : learning.totalSkillPointsEarned) != null ? _c : 0
  };
}
function applyProfileBackedUser(baseUser, profile) {
  const nextUser = buildAppUserSnapshot(baseUser, profile);
  if (!nextUser) return null;
  useAppStore.setState({ user: nextUser });
  return nextUser;
}
async function refreshAppUserFromProfile(baseUser, profile = null) {
  const userLike = baseUser || useAppStore.getState().user;
  if (!(userLike == null ? void 0 : userLike.id)) return null;
  let resolvedProfile = profile;
  if (!resolvedProfile) {
    try {
      resolvedProfile = await ensureProfile(userLike);
    } catch (e) {
      try {
        resolvedProfile = await getProfile(userLike.id);
      } catch (e2) {
        resolvedProfile = null;
      }
    }
  }
  return applyProfileBackedUser(userLike, resolvedProfile);
}
function collectLocalSlices() {
  assertLearningOwnerReady();
  const slices = {};
  slices.fsrs = srs.snapshot();
  slices.mastery = masterySnapshot();
  const journal = currentWorldJournal().read();
  if (journal.session || Object.keys(journal.observedSessions || {}).length || Object.keys(journal.rewardEntitlements || {}).length) slices.worldLearning = journal;
  try {
    const raw = localStorage.getItem("n4_kanji_panel_rotation_v1");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) slices.kanjiPanelRotation = parsed;
    }
  } catch (e) {
    slices.kanjiPanelRotation = null;
  }
  try {
    const takara = useTakaraStore.getState();
    slices.gems = takara.gemSlice;
    slices.tokens = takara.tokenSlice;
    slices.petDepth = takara.petDepthSlice;
    slices.cooking = takara.cookingSlice;
    slices.market = takara.marketSlice;
  } catch (e) {
    console.warn("[Sync] Failed to collect takara slices:", e == null ? void 0 : e.message);
  }
  try {
    slices.quests = useQuestStore.getState();
  } catch (e) {
  }
  try {
    slices.combat = useCombatStore.getState();
  } catch (e) {
  }
  try {
    slices.worldPrefs = useWorldStore$1.getState();
  } catch (e) {
  }
  try {
    slices.worldStudyProgress = getStudyProgressSnapshot();
  } catch (e) {
  }
  try {
    const raw = localStorage.getItem(STUDY_PLAN_STORAGE_KEY);
    if (raw) slices.dailyPlan = JSON.parse(raw);
  } catch (e) {
  }
  return slices;
}
function applySlicesToLocal(slices) {
  assertLearningOwnerReady();
  if (!slices || typeof slices !== "object" || Array.isArray(slices)) return;
  if (slices.fsrs) validateSrsSnapshot(slices.fsrs);
  if (slices.mastery) validateMasterySnapshot(slices.mastery);
  if (slices.worldLearning) {
    const local = currentWorldJournal().read();
    validateWorldLearningSnapshot(slices.worldLearning, local.owner, local.generation);
  }
  if (slices.fsrs) srs.restoreSnapshot(slices.fsrs, { merge: true });
  if (slices.mastery) restoreMasterySnapshot(slices.mastery, { merge: true });
  if (slices.worldLearning) {
    const journal = currentWorldJournal();
    journal.write(mergeWorldLearningSnapshots(journal.read(), slices.worldLearning));
  }
  try {
    if (Array.isArray(slices.kanjiPanelRotation) && slices.kanjiPanelRotation.length) {
      let current = null;
      try {
        const raw = localStorage.getItem("n4_kanji_panel_rotation_v1");
        if (raw) current = JSON.parse(raw);
      } catch (e) {
        current = null;
      }
      if (Array.isArray(current) && current.length === slices.kanjiPanelRotation.length) {
        const merged = current.map((localIdx, i) => Math.max(localIdx, slices.kanjiPanelRotation[i] || 0));
        localStorage.setItem("n4_kanji_panel_rotation_v1", JSON.stringify(merged));
      } else if (!current || !Array.isArray(current)) {
        localStorage.setItem("n4_kanji_panel_rotation_v1", JSON.stringify(slices.kanjiPanelRotation));
      }
    }
  } catch (e) {
    console.warn("[Sync] applySlicesToLocal.kanjiPanelRotation failed:", e == null ? void 0 : e.message);
  }
  try {
    useTakaraStore.setState((state) => ({
      gemSlice: slices.gems || state.gemSlice,
      tokenSlice: slices.tokens || state.tokenSlice,
      petDepthSlice: slices.petDepth || state.petDepthSlice,
      cookingSlice: slices.cooking || state.cookingSlice,
      marketSlice: slices.market || state.marketSlice
    }));
    saveAllTakara();
  } catch (e) {
    console.warn("[Sync] Failed to apply takara slices:", e == null ? void 0 : e.message);
  }
  try {
    if (slices.quests) useQuestStore.setState(slices.quests);
  } catch (e) {
  }
  try {
    if (slices.combat) useCombatStore.setState(slices.combat);
  } catch (e) {
  }
  try {
    if (slices.worldPrefs) useWorldStore$1.setState(slices.worldPrefs);
  } catch (e) {
  }
  try {
    if (slices.worldStudyProgress) {
      setStudyProgressSnapshot(slices.worldStudyProgress, { merge: true, source: "sync-restore" });
    }
  } catch (e) {
    console.warn("[Sync] Failed to apply world study progress:", e == null ? void 0 : e.message);
  }
  try {
    if (slices.dailyPlan && typeof slices.dailyPlan === "object") {
      const result = applySyncedDailyStudyPlan(slices.dailyPlan);
      if (result.applied) {
        window.dispatchEvent(new CustomEvent("n4:study-os:daily-plan:synced"));
      }
    }
  } catch (e) {
    console.warn("[Sync] Failed to apply daily plan:", e == null ? void 0 : e.message);
  }
}
function collectLocalData() {
  assertLearningOwnerReady();
  const app = useAppStore.getState();
  const learningPayload = buildLearningSyncPayload(useLearningStore.getState());
  if (learningPayload && learningPayload.learning) {
    learningPayload.learning._slices = collectLocalSlices();
  }
  let mistakes = {}, quizHistory = [], studyNotes = "", studyNotesLog = [];
  try {
    mistakes = JSON.parse(safeGetItem(STORAGE_KEYS.MISTAKES) || "{}");
  } catch (e) {
  }
  try {
    quizHistory = JSON.parse(safeGetItem(STORAGE_KEYS.QUIZ_HISTORY) || "[]").slice(-50);
  } catch (e) {
  }
  try {
    studyNotes = safeGetItem(STORAGE_KEYS.STUDY_NOTES) || "";
  } catch (e) {
  }
  try {
    studyNotesLog = JSON.parse(safeGetItem(STORAGE_KEYS.STUDY_NOTES_LOG) || "[]");
  } catch (e) {
  }
  let customCards = [], aiDiary = [], playlist = [];
  let ttsVoiceJp = "", ttsVoiceVi = "";
  let draftFeatureShortlist = [], draftFeatureRoadmap = {}, draftFeaturesChangedAt = "";
  try {
    customCards = JSON.parse(safeGetItem(STORAGE_KEYS.CUSTOM_CARDS) || "[]");
  } catch (e) {
  }
  try {
    aiDiary = JSON.parse(safeGetItem(STORAGE_KEYS.AI_DIARY_ENTRIES) || "[]");
  } catch (e) {
  }
  try {
    playlist = JSON.parse(safeGetItem(STORAGE_KEYS.PLAYLIST) || "[]");
  } catch (e) {
  }
  try {
    ttsVoiceJp = safeGetItem(STORAGE_KEYS.TTS_JP_VOICE) || "";
  } catch (e) {
  }
  try {
    ttsVoiceVi = safeGetItem(STORAGE_KEYS.TTS_VI_VOICE) || "";
  } catch (e) {
  }
  try {
    draftFeatureShortlist = JSON.parse(safeGetItem(STORAGE_KEYS.DRAFT_FEATURES_SHORTLIST) || "[]");
  } catch (e) {
  }
  try {
    draftFeatureRoadmap = JSON.parse(safeGetItem(STORAGE_KEYS.DRAFT_FEATURES_ROADMAP) || "{}");
  } catch (e) {
  }
  try {
    draftFeaturesChangedAt = safeGetItem(STORAGE_KEYS.DRAFT_FEATURES_CHANGED_AT) || "";
  } catch (e) {
  }
  return {
    ...learningPayload,
    settings: {
      theme: app.theme,
      themeMode: app.themeMode || app.theme || "dark",
      themePreset: app.themePreset || null,
      themeFamily: app.themeFamily,
      accent: app.accent,
      customAccentEnabled: app.customAccentEnabled,
      density: app.density,
      showFurigana: app.showFurigana,
      showRomaji: app.showRomaji,
      ttsRate: app.ttsRate,
      autoSpeak: app.autoSpeak,
      difficulty: app.difficulty,
      dailyGoal: app.dailyGoal,
      newItemsPerDay: app.newItemsPerDay,
      autoAdvance: app.autoAdvance,
      lessonStart: app.lessonStart,
      lessonCap: app.lessonCap,
      kanjiFont: app.kanjiFont,
      kanjiWeight: app.kanjiWeight,
      kanjiSize: app.kanjiSize,
      fzKanji: app.fzKanji,
      fzVocab: app.fzVocab,
      fzGrammar: app.fzGrammar,
      cardLayout: app.cardLayout,
      exampleDisplay: app.exampleDisplay,
      navPosition: app.navPosition,
      gamesCols: app.gamesCols,
      minnaView: app.minnaView,
      soundFX: app.soundFX,
      soundCorrect: app.soundCorrect,
      soundWrong: app.soundWrong,
      radioRateJp: app.radioRateJp,
      radioRateVi: app.radioRateVi,
      energyMode: app.energyMode,
      reducedMotion: app.reducedMotion,
      reducedTransparency: app.reducedTransparency,
      touchParticleIntensity: app.touchParticleIntensity,
      gfxTier: app.gfxTier,
      trainer3dEnabled: app.trainer3dEnabled,
      hideChanceBasedActivities: app.hideChanceBasedActivities,
      highContrast: app.highContrast,
      debugMode: app.debugMode,
      cbProtanopia: app.cbProtanopia,
      cbDeuteranopia: app.cbDeuteranopia,
      cbTritanopia: app.cbTritanopia,
      dyslexiaFont: app.dyslexiaFont,
      largeTouchTargets: app.largeTouchTargets,
      swipeFlashcard: app.swipeFlashcard,
      swipeClose: app.swipeClose,
      fontScale: app.fontScale,
      defaultQuestionCount: app.defaultQuestionCount,
      sidebarStudyTools: app.sidebarStudyTools,
      sidebarExtended: app.sidebarExtended,
      sidebarPhase2: app.sidebarPhase2,
      sidebarPhase3: app.sidebarPhase3,
      autoBackupEnabled: !!app.autoBackupEnabled,
      syncInterval: app.syncInterval || 2e3,
      legacy: {
        mistakes,
        quizHistory,
        studyNotes,
        studyNotesLog,
        customCards,
        aiDiary,
        playlist,
        ttsVoiceJp,
        ttsVoiceVi,
        draftFeatures: normalizeDraftFeaturesPayload({
          shortlistIds: draftFeatureShortlist,
          roadmapData: draftFeatureRoadmap,
          changedAt: draftFeaturesChangedAt
        })
      },
      settingsChangedAt: app.settingsChangedAt || (/* @__PURE__ */ new Date(0)).toISOString()
    }
  };
}
let _isRestoringFromCloud = false;
function setRestoringFromCloud(val) {
  _isRestoringFromCloud = val;
}
function restoreFromCloud(cloudData) {
  assertLearningOwnerReady();
  if (!cloudData) return;
  try {
    syncLog("restoreFromCloud: enter", {
      updated_at: cloudData == null ? void 0 : cloudData.updated_at,
      cloudWeight: computeDataWeight(cloudData),
      localWeight: computeDataWeight(collectLocalData())
    });
  } catch (e) {
  }
  _isRestoringFromCloud = true;
  globalThis.__N4_RESTORING_SETTINGS__ = true;
  try {
    _restoreFromCloudInner(cloudData);
  } finally {
    Promise.resolve().then(() => {
      _isRestoringFromCloud = false;
      globalThis.__N4_RESTORING_SETTINGS__ = false;
    });
  }
}
function _restoreFromCloudInner(cloudData) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i;
  let learning = useLearningStore.getState();
  try {
    syncLog("restoreFromCloudInner: start", { keys: Object.keys(cloudData || {}), updated_at: cloudData == null ? void 0 : cloudData.updated_at });
    syncLog("restoreFromCloudInner: beforeWeight", computeDataWeight(collectLocalData()));
  } catch (e) {
  }
  if (cloudData.learning) {
    const d = cloudData.learning;
    const localResetGeneration = Math.max(0, Number(learning.resetGeneration) || 0);
    const cloudResetGeneration = Math.max(0, Number(d.resetGeneration) || 0);
    if (cloudResetGeneration < localResetGeneration) {
      syncLog("restoreFromCloud: rejected stale reset generation", { localResetGeneration, cloudResetGeneration });
      return;
    }
    if (cloudResetGeneration > localResetGeneration) {
      useLearningStore.setState(createResetLearningState(/* @__PURE__ */ new Date(), cloudResetGeneration));
      learning = useLearningStore.getState();
    }
    if (d.worldLearningReceipts && typeof d.worldLearningReceipts === "object" && !Array.isArray(d.worldLearningReceipts)) useLearningStore.setState({ worldLearningReceipts: { ...learning.worldLearningReceipts || {}, ...d.worldLearningReceipts } });
    if (d.mistakes && typeof d.mistakes === "object" && !Array.isArray(d.mistakes)) {
      const mistakes = { ...learning.mistakes || {} };
      for (const [key, value] of Object.entries(d.mistakes)) if (value && (!mistakes[key] || (value.lastWrongAt || 0) > (mistakes[key].lastWrongAt || 0))) mistakes[key] = value;
      useLearningStore.setState({ mistakes });
    }
    const cloudRevision = Math.max(0, Number(d.economyRevision) || 0);
    const localRevision = Math.max(0, Number(learning.economyRevision) || 0);
    const cloudDevice = String(d.economyDeviceId || "");
    const localDevice = String(learning.economyDeviceId || "");
    const shouldApplyCloudEconomy = cloudRevision > localRevision || cloudRevision === localRevision && cloudDevice > localDevice;
    try {
      syncLog("restoreFromCloud: learning block", { cloudRevision, localRevision, shouldApplyCloudEconomy, cloudXp: d.xp, localXp: learning.xp });
    } catch (e) {
    }
    if (shouldApplyCloudEconomy && d.xp != null) {
      const targetXp = Math.max(d.xp, learning.xp || 0);
      useLearningStore.setState({ xp: targetXp, level: Math.floor(targetXp / 100) + 1 });
    }
    if ((_a2 = d.adminXpOverride) == null ? void 0 : _a2.setAt) {
      const incomingTs = d.adminXpOverride.setAt;
      const lastAppliedTs = learning.lastAdminXpOverrideTs || "";
      try {
        syncLog("restoreFromCloud: adminXpOverride", { incomingTs, lastAppliedTs, incomingValue: d.adminXpOverride.value });
      } catch (e) {
      }
      if (!lastAppliedTs || new Date(incomingTs) > new Date(lastAppliedTs)) {
        const forcedXp = Math.max(0, Math.round(Number(d.adminXpOverride.value) || 0));
        const forcedLevel = Math.max(1, Math.round(Number(d.adminXpOverride.level) || 0)) || Math.floor(forcedXp / 100) + 1;
        const nextState2 = {
          xp: forcedXp,
          level: forcedLevel,
          lastAdminXpOverrideTs: incomingTs
        };
        if (d.adminXpOverride.streak != null) {
          nextState2.streak = Math.max(0, Math.round(Number(d.adminXpOverride.streak) || 0));
        }
        useLearningStore.setState(nextState2);
      }
    }
    if (d.streak != null) {
      const prevStreak = learning.streak || 0;
      useLearningStore.setState({ streak: Math.max(prevStreak, d.streak) });
    }
    if (d.studyHistory || d.studyActivity || d.lastStudyDate) {
      const currentLearning = useLearningStore.getState();
      const nextStudyState = {};
      if (d.studyHistory && typeof d.studyHistory === "object") {
        nextStudyState.studyHistory = mergeStudyHistoryMaps(currentLearning.studyHistory, d.studyHistory);
      }
      if (d.studyActivity && typeof d.studyActivity === "object") {
        nextStudyState.studyActivity = mergeStudyActivityMaps(currentLearning.studyActivity, d.studyActivity);
      }
      if (typeof d.lastStudyDate === "string" && d.lastStudyDate) {
        nextStudyState.lastStudyDate = !currentLearning.lastStudyDate || d.lastStudyDate > currentLearning.lastStudyDate ? d.lastStudyDate : currentLearning.lastStudyDate;
      }
      if (Object.keys(nextStudyState).length) useLearningStore.setState(nextStudyState);
    }
    if (d.maxCombo != null) {
      const prevMax = learning.maxCombo || 0;
      useLearningStore.setState({ maxCombo: Math.max(prevMax, d.maxCombo) });
    }
    if (d.lastVisitedRoute && !learning.lastVisitedRoute) {
      useLearningStore.setState({ lastVisitedRoute: d.lastVisitedRoute });
    }
    if (shouldApplyCloudEconomy) {
      if (d.coins != null) {
        useLearningStore.setState({ coins: Math.max(0, Math.round(Number(d.coins) || 0)) });
      }
      useLearningStore.setState({
        economyRevision: Math.max(0, Number(d.economyRevision) || 0),
        economyDeviceId: String(d.economyDeviceId || ""),
        resetGeneration: cloudResetGeneration,
        domainVersions: { ...learning.domainVersions || {}, ...d.domainVersions || {} }
      });
      if (d.powerUps) {
        useLearningStore.setState({ powerUps: { ...d.powerUps || {} } });
      }
      if (d.unlockedItems) {
        useLearningStore.setState({ unlockedItems: { ...learning.unlockedItems || {}, ...d.unlockedItems } });
      }
      if (d.dailyClaimStreak != null) {
        useLearningStore.setState({ dailyClaimStreak: Math.max(0, Math.round(Number(d.dailyClaimStreak) || 0)) });
      }
      if (d.lastDailyClaimDate) {
        useLearningStore.setState({ lastDailyClaimDate: d.lastDailyClaimDate });
      }
      if (Array.isArray(d.economyLog)) {
        useLearningStore.setState({ economyLog: d.economyLog.slice(-40) });
      }
      if (d.equippedCosmetics) {
        const cloudEquipTs = toMs(d.lastEquippedAt);
        const localEquipTs = toMs(learning.lastEquippedAt);
        if (cloudEquipTs > localEquipTs) {
          useLearningStore.setState({
            equippedCosmetics: d.equippedCosmetics,
            lastEquippedAt: d.lastEquippedAt
          });
        }
      }
      if (d.activeEffects) useLearningStore.setState({ activeEffects: { ...learning.activeEffects || {}, ...d.activeEffects } });
      if (d.powerUpLevels) useLearningStore.setState({ powerUpLevels: { ...learning.powerUpLevels || {}, ...d.powerUpLevels } });
      if (d.pets) {
        const mergedPets = { ...learning.pets || {} };
        for (const [k, v] of Object.entries(d.pets || {})) {
          if (!mergedPets[k]) mergedPets[k] = v;
          else {
            const localPet = mergedPets[k];
            mergedPets[k] = v.level > localPet.level || v.level === localPet.level && v.xp > localPet.xp ? v : localPet;
          }
        }
        useLearningStore.setState({ pets: mergedPets });
      }
      if (d.activePet) useLearningStore.setState({ activePet: d.activePet });
      if (Array.isArray(d.gachaHistory)) useLearningStore.setState({ gachaHistory: d.gachaHistory.slice(-100) });
      if (d.gachaPity) {
        useLearningStore.setState({ gachaPity: {
          epic: Math.max(((_b2 = learning.gachaPity) == null ? void 0 : _b2.epic) || 0, d.gachaPity.epic || 0),
          legendary: Math.max(((_c = learning.gachaPity) == null ? void 0 : _c.legendary) || 0, d.gachaPity.legendary || 0)
        } });
      }
      if (d.lastWheelDate) {
        if (!learning.lastWheelDate || new Date(d.lastWheelDate) > new Date(learning.lastWheelDate)) {
          useLearningStore.setState({ lastWheelDate: d.lastWheelDate, wheelSpinsToday: d.wheelSpinsToday || 0 });
        } else if (d.lastWheelDate === learning.lastWheelDate) {
          useLearningStore.setState({ wheelSpinsToday: Math.max(learning.wheelSpinsToday || 0, d.wheelSpinsToday || 0) });
        }
      }
      if (d.lastSlotDate) {
        if (!learning.lastSlotDate || new Date(d.lastSlotDate) > new Date(learning.lastSlotDate)) {
          useLearningStore.setState({ lastSlotDate: d.lastSlotDate, slotSpinsToday: d.slotSpinsToday || 0 });
        } else if (d.lastSlotDate === learning.lastSlotDate) {
          useLearningStore.setState({ slotSpinsToday: Math.max(learning.slotSpinsToday || 0, d.slotSpinsToday || 0) });
        }
      }
      if (d.bettingEnabled != null) useLearningStore.setState({ bettingEnabled: !!d.bettingEnabled });
      if (d.vipExpiry) {
        useLearningStore.setState({ vipExpiry: Math.max(learning.vipExpiry || 0, d.vipExpiry || 0) });
      }
      if (d.roomItems) useLearningStore.setState({ roomItems: d.roomItems });
      if (d.ownedRoomItems) useLearningStore.setState({ ownedRoomItems: [.../* @__PURE__ */ new Set([...learning.ownedRoomItems || [], ...d.ownedRoomItems])] });
      if (d.collectionClaims) useLearningStore.setState({ collectionClaims: { ...learning.collectionClaims || {}, ...d.collectionClaims } });
      if (d.questClaims) useLearningStore.setState({
        questClaims: mergeClaimMapsByDate(learning.questClaims, d.questClaims)
      });
      if (d.weeklyQuestClaims) useLearningStore.setState({
        weeklyQuestClaims: mergeClaimMapsByDate(learning.weeklyQuestClaims, d.weeklyQuestClaims)
      });
      if (d.milestoneClaims) useLearningStore.setState({ milestoneClaims: { ...learning.milestoneClaims || {}, ...d.milestoneClaims } });
      if (d.lastLevelUpBonusLevel) useLearningStore.setState({ lastLevelUpBonusLevel: Math.max(learning.lastLevelUpBonusLevel || 0, d.lastLevelUpBonusLevel || 0) });
      if (d.lastEconomyChangeAt) {
        const cloudTs = toMs(d.lastEconomyChangeAt);
        const localTs = toMs(learning.lastEconomyChangeAt);
        if (cloudTs > localTs) useLearningStore.setState({ lastEconomyChangeAt: d.lastEconomyChangeAt });
      }
      if (d.currentBet != null) useLearningStore.setState({ currentBet: d.currentBet });
      if (d.slotPity != null) {
        useLearningStore.setState({ slotPity: Math.max(0, Math.round(Number(d.slotPity) || 0)) });
      }
      if (d.materials) {
        useLearningStore.setState({ materials: { ...d.materials || {} } });
      }
      if (d.enchantments) {
        useLearningStore.setState({ enchantments: { ...d.enchantments || {} } });
      }
      if (d.dailyDeals) {
        useLearningStore.setState({
          dailyDeals: {
            date: typeof ((_d = d.dailyDeals) == null ? void 0 : _d.date) === "string" ? d.dailyDeals.date : null,
            deals: Array.isArray((_e = d.dailyDeals) == null ? void 0 : _e.deals) ? d.dailyDeals.deals : [],
            claimed: normalizeUniqueArray((_f = d.dailyDeals) == null ? void 0 : _f.claimed)
          }
        });
      }
      if (d.lastScratchDate) {
        if (!learning.lastScratchDate || d.lastScratchDate > learning.lastScratchDate) {
          useLearningStore.setState({
            lastScratchDate: d.lastScratchDate,
            scratchCardsToday: Math.max(0, Math.round(Number(d.scratchCardsToday) || 0))
          });
        } else if (d.lastScratchDate === learning.lastScratchDate) {
          useLearningStore.setState({
            scratchCardsToday: Math.max(
              Math.max(0, Math.round(Number(learning.scratchCardsToday) || 0)),
              Math.max(0, Math.round(Number(d.scratchCardsToday) || 0))
            )
          });
        }
      }
      if (d.lastTreasureDate) {
        if (!learning.lastTreasureDate || d.lastTreasureDate > learning.lastTreasureDate) {
          useLearningStore.setState({
            lastTreasureDate: d.lastTreasureDate,
            treasureDigsToday: Math.max(0, Math.round(Number(d.treasureDigsToday) || 0)),
            treasureHuntGrid: d.treasureHuntGrid || null
          });
        } else if (d.lastTreasureDate === learning.lastTreasureDate) {
          useLearningStore.setState({
            treasureDigsToday: Math.max(
              Math.max(0, Math.round(Number(learning.treasureDigsToday) || 0)),
              Math.max(0, Math.round(Number(d.treasureDigsToday) || 0))
            ),
            treasureHuntGrid: mergeTreasureGrid(learning.treasureHuntGrid, d.treasureHuntGrid)
          });
        }
      }
      if (d.skillPoints != null) {
        useLearningStore.setState({
          skillPoints: Math.max(
            learning.skillPoints || 0,
            Math.max(0, Math.round(Number(d.skillPoints) || 0))
          )
        });
      }
      if (d.totalSkillPointsEarned != null) {
        useLearningStore.setState({
          totalSkillPointsEarned: Math.max(
            learning.totalSkillPointsEarned || 0,
            Math.max(0, Math.round(Number(d.totalSkillPointsEarned) || 0))
          )
        });
      }
      if (Array.isArray(d.unlockedSkills)) {
        useLearningStore.setState({ unlockedSkills: normalizeUniqueArray([...learning.unlockedSkills || [], ...d.unlockedSkills]) });
      }
      if (d.faction !== void 0) {
        useLearningStore.setState({ faction: d.faction || null });
      }
      if (Array.isArray(d.villageBuildings)) {
        useLearningStore.setState({ villageBuildings: normalizeUniqueArray([...learning.villageBuildings || [], ...d.villageBuildings]) });
      }
      if (d.lastVillageCollect != null) {
        useLearningStore.setState({ lastVillageCollect: Math.max(learning.lastVillageCollect || 0, d.lastVillageCollect || 0) || null });
      }
      if (Array.isArray(d.bounties)) {
        useLearningStore.setState({
          bounties: mergeBounties(learning.bounties, d.bounties, learning.lastBountyReset, d.lastBountyReset),
          lastBountyReset: d.lastBountyReset || learning.lastBountyReset || null
        });
      }
      if (d.yokaiAffection) {
        useLearningStore.setState({ yokaiAffection: mergeMaxNumericMap(learning.yokaiAffection, d.yokaiAffection) });
      }
      if (d.equippedYokai !== void 0) useLearningStore.setState({ equippedYokai: d.equippedYokai || null });
      if (d.equippedWeapon !== void 0) useLearningStore.setState({ equippedWeapon: d.equippedWeapon || null });
      if (d.equippedArmor !== void 0) useLearningStore.setState({ equippedArmor: d.equippedArmor || null });
      if (d.equippedBackground !== void 0) useLearningStore.setState({ equippedBackground: d.equippedBackground || null });
      if (d.equippedTitle !== void 0) useLearningStore.setState({ equippedTitle: d.equippedTitle || null });
      if (Array.isArray(d.ownedOrigami)) {
        useLearningStore.setState({ ownedOrigami: normalizeUniqueArray([...learning.ownedOrigami || [], ...d.ownedOrigami]) });
      }
      if (d.ramenIngredients) {
        useLearningStore.setState({ ramenIngredients: { ...d.ramenIngredients || {} } });
      }
      if (Array.isArray(d.ownedCats)) {
        useLearningStore.setState({ ownedCats: normalizeUniqueArray([...learning.ownedCats || [], ...d.ownedCats]) });
      }
      if (d.mechaParts) {
        useLearningStore.setState({ mechaParts: mergeMaxNumericMap(learning.mechaParts, d.mechaParts) });
      }
      if (d.bossDamage != null) {
        useLearningStore.setState({ bossDamage: Math.max(learning.bossDamage || 0, d.bossDamage || 0) });
      }
      if (d.storyProgress) {
        useLearningStore.setState({ storyProgress: mergeStoryProgress(learning.storyProgress, d.storyProgress) });
      }
      if (d.mangaProgress) {
        useLearningStore.setState({ mangaProgress: { ...learning.mangaProgress || {}, ...d.mangaProgress || {} } });
      }
      if (d.lastOmikujiDate) {
        useLearningStore.setState({
          lastOmikujiDate: !learning.lastOmikujiDate || d.lastOmikujiDate > learning.lastOmikujiDate ? d.lastOmikujiDate : learning.lastOmikujiDate
        });
      }
      if (Array.isArray(d.activeBuffs)) {
        useLearningStore.setState({ activeBuffs: Array.isArray(d.activeBuffs) ? d.activeBuffs.filter((buff) => Number((buff == null ? void 0 : buff.expiresAt) || 0) > Date.now()) : [] });
      }
      if (d.senseiAffinity != null) {
        useLearningStore.setState({ senseiAffinity: Math.max(learning.senseiAffinity || 0, d.senseiAffinity || 0) });
      }
    }
    if ((_g = d.adminCoinOverride) == null ? void 0 : _g.setAt) {
      const incomingTs = d.adminCoinOverride.setAt;
      const lastAppliedTs = learning.lastAdminCoinOverrideTs || "";
      if (!lastAppliedTs || new Date(incomingTs) > new Date(lastAppliedTs)) {
        const nextState2 = { lastAdminCoinOverrideTs: incomingTs };
        if (d.adminCoinOverride.value != null) nextState2.coins = Math.max(0, Math.round(Number(d.adminCoinOverride.value) || 0));
        if (d.adminCoinOverride.powerUps && typeof d.adminCoinOverride.powerUps === "object") {
          nextState2.powerUps = { ...learning.powerUps || {}, ...d.adminCoinOverride.powerUps };
        }
        useLearningStore.setState(nextState2);
      }
    }
    if (d.lastActivityDate != null) {
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      if (d.lastActivityDate === today) {
        useLearningStore.setState({
          todayCorrect: Math.max(learning.todayCorrect || 0, d.todayCorrect || 0),
          todayWrong: Math.max(learning.todayWrong || 0, d.todayWrong || 0),
          todayPowerUps: Math.max(learning.todayPowerUps || 0, d.todayPowerUps || 0),
          todayPetFed: Math.max(learning.todayPetFed || 0, d.todayPetFed || 0),
          lastActivityDate: today
        });
      }
    }
    if (d.achievements) {
      useLearningStore.setState({ achievements: { ...learning.achievements, ...d.achievements } });
    }
    if ((_h = d.gameHistory) == null ? void 0 : _h.length) {
      const historyKey = (entry) => (entry == null ? void 0 : entry.id) ? `id:${entry.id}` : `legacy:${(entry == null ? void 0 : entry.trainerId) || ""}:${(entry == null ? void 0 : entry.date) || ""}:${(entry == null ? void 0 : entry.score) || 0}:${(entry == null ? void 0 : entry.at) || ""}`;
      const existing = new Set((learning.gameHistory || []).map(historyKey));
      const merged = [...learning.gameHistory || []];
      for (const e of d.gameHistory) {
        const k = historyKey(e);
        if (!existing.has(k)) {
          merged.push(e);
          existing.add(k);
        }
      }
      useLearningStore.setState({ gameHistory: merged.slice(-50) });
    }
    if (d.dailyActiveMinutes) {
      const merged = { ...learning.dailyActiveMinutes || {} };
      for (const [day, mins] of Object.entries(d.dailyActiveMinutes)) {
        merged[day] = Math.max(merged[day] || 0, mins);
      }
      useLearningStore.setState({ dailyActiveMinutes: merged });
    }
  }
  if (cloudData.settings) {
    const s = cloudData.settings;
    const update = {};
    if (s.theme) update.theme = s.theme;
    if (s.themeMode) update.themeMode = s.themeMode;
    if ("themePreset" in s) update.themePreset = s.themePreset || null;
    if (s.themeFamily) update.themeFamily = s.themeFamily;
    if (s.accent) update.accent = s.accent;
    if (s.customAccentEnabled != null) update.customAccentEnabled = !!s.customAccentEnabled;
    if (s.density) update.density = s.density;
    if (s.showFurigana != null) update.showFurigana = !!s.showFurigana;
    if (s.showRomaji != null) update.showRomaji = !!s.showRomaji;
    if (s.ttsRate != null) update.ttsRate = Number(s.ttsRate) || 1;
    if (s.autoSpeak != null) update.autoSpeak = !!s.autoSpeak;
    if (s.difficulty) update.difficulty = s.difficulty;
    if (s.dailyGoal != null) update.dailyGoal = Number(s.dailyGoal) || 5;
    if (s.newItemsPerDay != null) update.newItemsPerDay = Number(s.newItemsPerDay) || 5;
    if (s.autoAdvance != null) update.autoAdvance = !!s.autoAdvance;
    if (s.lessonStart != null) update.lessonStart = Number(s.lessonStart) || 1;
    if (s.lessonCap != null) update.lessonCap = Number(s.lessonCap) || 5;
    if (s.kanjiFont) update.kanjiFont = s.kanjiFont;
    if (s.kanjiWeight) update.kanjiWeight = s.kanjiWeight;
    if (s.kanjiSize) update.kanjiSize = s.kanjiSize;
    if (s.fzKanji) update.fzKanji = s.fzKanji;
    if (s.fzVocab) update.fzVocab = s.fzVocab;
    if (s.fzGrammar) update.fzGrammar = s.fzGrammar;
    if (s.cardLayout) update.cardLayout = s.cardLayout;
    if (s.exampleDisplay) update.exampleDisplay = s.exampleDisplay;
    if (s.navPosition) update.navPosition = s.navPosition;
    if (s.gamesCols) update.gamesCols = s.gamesCols;
    if (s.minnaView) update.minnaView = s.minnaView;
    if (s.soundFX != null) update.soundFX = !!s.soundFX;
    if (s.soundCorrect != null) update.soundCorrect = !!s.soundCorrect;
    if (s.soundWrong != null) update.soundWrong = !!s.soundWrong;
    if (s.radioRateJp != null) update.radioRateJp = Number(s.radioRateJp) || 1;
    if (s.radioRateVi != null) update.radioRateVi = Number(s.radioRateVi) || 1;
    if (s.energyMode) update.energyMode = s.energyMode;
    if (s.reducedMotion != null) update.reducedMotion = !!s.reducedMotion;
    if (s.reducedTransparency != null) update.reducedTransparency = !!s.reducedTransparency;
    if (s.touchParticleIntensity) update.touchParticleIntensity = s.touchParticleIntensity;
    if (s.gfxTier) update.gfxTier = s.gfxTier;
    if (s.trainer3dEnabled != null) update.trainer3dEnabled = !!s.trainer3dEnabled;
    if (s.hideChanceBasedActivities != null) update.hideChanceBasedActivities = !!s.hideChanceBasedActivities;
    if (s.highContrast != null) update.highContrast = !!s.highContrast;
    if (s.debugMode != null) update.debugMode = !!s.debugMode;
    if (s.cbProtanopia != null) update.cbProtanopia = !!s.cbProtanopia;
    if (s.cbDeuteranopia != null) update.cbDeuteranopia = !!s.cbDeuteranopia;
    if (s.cbTritanopia != null) update.cbTritanopia = !!s.cbTritanopia;
    if (s.dyslexiaFont != null) update.dyslexiaFont = !!s.dyslexiaFont;
    if (s.largeTouchTargets != null) update.largeTouchTargets = !!s.largeTouchTargets;
    if (s.swipeFlashcard != null) update.swipeFlashcard = !!s.swipeFlashcard;
    if (s.swipeClose != null) update.swipeClose = !!s.swipeClose;
    if (s.fontScale != null) update.fontScale = ["S", "M", "L", "XL"].includes(s.fontScale) ? s.fontScale : "M";
    if (s.defaultQuestionCount != null) update.defaultQuestionCount = Number(s.defaultQuestionCount) || 5;
    if (s.sidebarStudyTools != null) update.sidebarStudyTools = !!s.sidebarStudyTools;
    if (s.sidebarExtended != null) update.sidebarExtended = !!s.sidebarExtended;
    if (s.sidebarPhase2 != null) update.sidebarPhase2 = !!s.sidebarPhase2;
    if (s.sidebarPhase3 != null) update.sidebarPhase3 = !!s.sidebarPhase3;
    if (s.autoBackupEnabled != null) update.autoBackupEnabled = !!s.autoBackupEnabled;
    if (s.syncInterval != null) update.syncInterval = Number(s.syncInterval) || 2e3;
    if (s.settingsChangedAt) update.settingsChangedAt = s.settingsChangedAt;
    useAppStore.setState(update);
    if (s.legacy) {
      const leg = s.legacy;
      if (leg.mistakes) localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(leg.mistakes));
      if (Array.isArray(leg.quizHistory)) localStorage.setItem(STORAGE_KEYS.QUIZ_HISTORY, JSON.stringify(leg.quizHistory));
      if (leg.studyNotes !== void 0) localStorage.setItem(STORAGE_KEYS.STUDY_NOTES, String(leg.studyNotes || ""));
      if (Array.isArray(leg.studyNotesLog)) localStorage.setItem(STORAGE_KEYS.STUDY_NOTES_LOG, JSON.stringify(leg.studyNotesLog));
      if (Array.isArray(leg.customCards)) localStorage.setItem(STORAGE_KEYS.CUSTOM_CARDS, JSON.stringify(leg.customCards));
      if (Array.isArray(leg.aiDiary)) localStorage.setItem(STORAGE_KEYS.AI_DIARY_ENTRIES, JSON.stringify(leg.aiDiary));
      if (Array.isArray(leg.playlist)) localStorage.setItem(STORAGE_KEYS.PLAYLIST, JSON.stringify(leg.playlist));
      if (leg.ttsVoiceJp) localStorage.setItem(STORAGE_KEYS.TTS_JP_VOICE, String(leg.ttsVoiceJp || ""));
      if (leg.ttsVoiceVi) localStorage.setItem(STORAGE_KEYS.TTS_VI_VOICE, String(leg.ttsVoiceVi || ""));
      if (leg.draftFeatures) {
        const df = normalizeDraftFeaturesPayload(leg.draftFeatures);
        localStorage.setItem(STORAGE_KEYS.DRAFT_FEATURES_SHORTLIST, JSON.stringify(df.shortlistIds));
        localStorage.setItem(STORAGE_KEYS.DRAFT_FEATURES_ROADMAP, JSON.stringify(df.roadmapData));
        localStorage.setItem(STORAGE_KEYS.DRAFT_FEATURES_CHANGED_AT, String(df.changedAt || ""));
      }
    }
  }
  if (cloudData.bookmarks) {
    useLearningStore.setState({ bookmarks: cloudData.bookmarks });
  }
  if (cloudData.srs) {
    useLearningStore.setState({ srs: normalizeSrsMap(cloudData.srs) });
  }
  if (cloudData.trainer_stats) {
    useLearningStore.setState({ trainerStats: cloudData.trainer_stats });
  }
  if ((_i = cloudData.learning) == null ? void 0 : _i._slices) {
    applySlicesToLocal(cloudData.learning._slices);
  }
  try {
    syncLog("restoreFromCloudInner: end", { afterWeight: computeDataWeight(collectLocalData()) });
  } catch (e) {
  }
}
function detectDevice() {
  const ua = navigator.userAgent;
  let browser = "Unknown";
  if (ua.includes("Firefox")) browser = "Firefox";
  else if (ua.includes("Edg/")) browser = "Edge";
  else if (ua.includes("Chrome")) browser = "Chrome";
  else if (ua.includes("Safari")) browser = "Safari";
  let os = "Unknown";
  if (ua.includes("Windows")) os = "Windows";
  else if (ua.includes("Mac")) os = "macOS";
  else if (ua.includes("Linux")) os = "Linux";
  else if (ua.includes("Android")) os = "Android";
  else if (ua.includes("iPhone") || ua.includes("iPad")) os = "iOS";
  return { browser, os };
}
function getFingerprint$1() {
  const parts = [
    navigator.userAgent,
    navigator.language,
    screen.width + "x" + screen.height,
    (/* @__PURE__ */ new Date()).getTimezoneOffset()
  ];
  let hash = 0;
  const str = parts.join("|");
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i) | 0;
  }
  return "dev_" + Math.abs(hash).toString(36);
}
async function registerDevice(userId) {
  const { browser, os } = detectDevice();
  const fingerprint = getFingerprint$1();
  const deviceName = `${browser} on ${os}`;
  const { error } = await supabase.from("devices").upsert({
    user_id: userId,
    device_fingerprint: fingerprint,
    device_name: deviceName,
    browser,
    os,
    last_sync_at: (/* @__PURE__ */ new Date()).toISOString(),
    last_active_at: (/* @__PURE__ */ new Date()).toISOString()
  }, { onConflict: "user_id,device_fingerprint" });
  if (error) console.warn("[Devices] register failed:", error.message);
}
async function logActivity(userId, event, metadata = null) {
  if (!userId || !event) return;
  try {
    await supabase.from("activity_log").insert({
      user_id: userId,
      event,
      metadata
    });
  } catch (e) {
  }
}
async function getRecentActivity(limit = 100, offset = 0, filters = {}) {
  let query = supabase.from("activity_log").select("*, user_profiles!activity_log_user_id_fkey(display_name, avatar_url, email)").order("created_at", { ascending: false }).range(offset, offset + limit - 1);
  if (filters.event) query = query.eq("event", filters.event);
  if (filters.userId) query = query.eq("user_id", filters.userId);
  if (filters.since) query = query.gte("created_at", filters.since);
  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}
async function getUserActivity(userId, limit = 200) {
  const { data, error } = await supabase.from("activity_log").select("*").eq("user_id", userId).order("created_at", { ascending: false }).limit(limit);
  if (error) throw error;
  return data || [];
}
async function getDailyActiveUsers(days = 30) {
  var _a2;
  const since = new Date(Date.now() - days * 864e5).toISOString();
  const { data, error } = await supabase.from("activity_log").select("user_id, created_at").gte("created_at", since);
  if (error) throw error;
  const dailyUsers = {};
  (data || []).forEach((row) => {
    const day = row.created_at.slice(0, 10);
    if (!dailyUsers[day]) dailyUsers[day] = /* @__PURE__ */ new Set();
    dailyUsers[day].add(row.user_id);
  });
  const result = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(Date.now() - i * 864e5);
    const key = d.toISOString().slice(0, 10);
    result.push({ date: key, count: ((_a2 = dailyUsers[key]) == null ? void 0 : _a2.size) || 0 });
  }
  return result;
}
async function getActivityHeatmap(days = 30) {
  const since = new Date(Date.now() - days * 864e5).toISOString();
  const { data, error } = await supabase.from("activity_log").select("created_at").gte("created_at", since);
  if (error) throw error;
  const grid = Array.from({ length: 7 }, () => Array(24).fill(0));
  (data || []).forEach((row) => {
    const d = new Date(row.created_at);
    grid[d.getDay()][d.getHours()]++;
  });
  return grid;
}
async function purgeActivityLog(olderThanDays = 90) {
  const { data, error } = await supabase.rpc("purge_expired_operational_data", {
    activity_retention_days: olderThanDays
  });
  if (error) throw error;
  return Number(data) || 0;
}
async function getAllQuizHistory(limit = 200, filters = {}) {
  let query = supabase.from("quiz_history").select("*, user_profiles!quiz_history_user_id_fkey(display_name, avatar_url)").order("created_at", { ascending: false }).limit(limit);
  if (filters.quizType) query = query.eq("quiz_type", filters.quizType);
  if (filters.userId) query = query.eq("user_id", filters.userId);
  if (filters.since) query = query.gte("created_at", filters.since);
  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}
async function getQuizAnalytics(days = 30) {
  const since = new Date(Date.now() - days * 864e5).toISOString();
  const { data, error } = await supabase.from("quiz_history").select("quiz_type, score, total, accuracy, duration_seconds, created_at, user_id").gte("created_at", since);
  if (error) throw error;
  const items = data || [];
  const byType = {};
  const uniqueUsers = /* @__PURE__ */ new Set();
  items.forEach((q) => {
    uniqueUsers.add(q.user_id);
    if (!byType[q.quiz_type]) {
      byType[q.quiz_type] = { count: 0, totalScore: 0, totalQ: 0, totalTime: 0, users: /* @__PURE__ */ new Set() };
    }
    const t = byType[q.quiz_type];
    t.count++;
    t.totalScore += q.score || 0;
    t.totalQ += q.total || 0;
    t.totalTime += q.duration_seconds || 0;
    t.users.add(q.user_id);
  });
  const typeStats = Object.entries(byType).map(([type, t]) => ({
    type,
    sessions: t.count,
    avgAccuracy: t.totalQ > 0 ? Math.round(t.totalScore / t.totalQ * 100) : 0,
    avgDuration: t.count > 0 ? Math.round(t.totalTime / t.count) : 0,
    uniqueUsers: t.users.size
  })).sort((a, b) => b.sessions - a.sessions);
  return {
    totalSessions: items.length,
    uniqueUsers: uniqueUsers.size,
    typeStats
  };
}
const activityLog = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getActivityHeatmap,
  getAllQuizHistory,
  getDailyActiveUsers,
  getQuizAnalytics,
  getRecentActivity,
  getUserActivity,
  logActivity,
  purgeActivityLog
}, Symbol.toStringTag, { value: "Module" }));
const VALID_MODES = ["orbital", "third", "first"];
const useWorldCharacterStore = create(persist(
  (set, get) => ({
    // ─── Transient (no persist) ──────────────────────────────────
    // Change this from [-8, 0.9, 45] to your desired coordinates
    position: [0, 0.9, 0],
    rotation: [0, 0, 0],
    // euler Y used as facing
    velocity: [0, 0, 0],
    // transient physics state
    grounded: true,
    facing: 0,
    // radians around Y
    crouching: false,
    sprinting: false,
    jumping: false,
    /** true when fly mode is engaged — skips gravity + terrain clamp,
     *  Space = fly up, Ctrl/C = fly down. Toggled via KeyG. */
    flying: false,
    /** true when character is being controlled (walk mode active).
     *  Default-on so combat HUD + enemies surface immediately when
     *  the user lands on /world. */
    active: true,
    // ─── Persisted ──────────────────────────────────────────────
    mode: "third",
    // 'orbital' | 'third' | 'first' — walk by default
    stamina: 100,
    staminaMax: 100,
    spawnSlot: "plaza",
    // persisted spawn zone ('plaza' default)
    // ─── Actions ────────────────────────────────────────────────
    setMode: (m) => set({ mode: VALID_MODES.includes(m) ? m : "orbital" }),
    toggleFirstPerson: () => set((s) => ({
      mode: s.mode === "first" ? "third" : "first"
    })),
    toggleWalk: () => set((s) => ({
      mode: s.mode === "orbital" ? "third" : "orbital",
      active: s.mode === "orbital"
    })),
    setActive: (v) => set({ active: !!v }),
    setPosition: (pos) => set({ position: pos }),
    setRotation: (rot) => set({ rotation: rot }),
    setVelocity: (v) => set({ velocity: v }),
    setFacing: (r) => set({ facing: r }),
    setGrounded: (g) => set({ grounded: !!g }),
    setCrouching: (c) => set({ crouching: !!c }),
    setSprinting: (s) => set({ sprinting: !!s }),
    setJumping: (j) => set({ jumping: !!j }),
    setFlying: (f) => set({ flying: !!f }),
    toggleFlying: () => set((s) => ({ flying: !s.flying })),
    drainStamina: (amount) => set((s) => ({
      stamina: Math.max(0, s.stamina - amount)
    })),
    regenStamina: (amount) => set((s) => ({
      stamina: Math.min(s.staminaMax, s.stamina + amount)
    })),
    setStamina: (v) => set((s) => ({
      stamina: Math.max(0, Math.min(s.staminaMax, v))
    })),
    teleport: (pos, facing = 0) => set({
      position: Array.isArray(pos) ? pos : [0, 0.9, 0],
      facing,
      velocity: [0, 0, 0],
      grounded: true
    })
  }),
  {
    name: "n4-world-character",
    storage: createJSONStorage(() => localStorage),
    partialize: (s) => ({
      mode: s.mode,
      stamina: s.stamina,
      staminaMax: s.staminaMax,
      spawnSlot: s.spawnSlot
    }),
    // v2 — default mode flipped from 'orbital' to 'third'. Migrate drops
    // any persisted mode so returning users get the new default.
    version: 2,
    migrate: (persisted, oldVersion) => {
      if (!persisted) return persisted;
      if (oldVersion < 2) {
        const { mode: _dropped, ...rest } = persisted;
        return rest;
      }
      return persisted;
    }
  }
));
function phaseOf(hour) {
  if (hour >= 4 && hour < 6) return "dawn";
  if (hour >= 6 && hour < 11) return "morning";
  if (hour >= 11 && hour < 13) return "noon";
  if (hour >= 13 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 19) return "dusk";
  if (hour >= 19 && hour < 22) return "evening";
  return "night";
}
const useWorldClockStore = create(persist(
  (set) => ({
    virtualHour: 8,
    // 8 AM default spawn
    virtualDay: 1,
    phase: "morning",
    scale: 72,
    // 1 real-second = scale virtual-seconds
    paused: false,
    /** Wall-clock timestamp of the last tick (ms). */
    lastTickAt: 0,
    tick: (deltaRealSeconds) => set((s) => {
      if (s.paused) return {};
      const deltaVirtHour = deltaRealSeconds * s.scale / 3600;
      let h = s.virtualHour + deltaVirtHour;
      let d = s.virtualDay;
      while (h >= 24) {
        h -= 24;
        d += 1;
      }
      while (h < 0) {
        h += 24;
        d -= 1;
      }
      const p = phaseOf(h);
      return { virtualHour: h, virtualDay: d, phase: p, lastTickAt: Date.now() };
    }),
    /**
     * Wall-clock catch-up for tab-pause / device-sleep resume. rAF halts
     * while the tab is hidden, so tick() misses the whole gap. Call this
     * on visibility-change:visible to advance the virtual clock by the
     * elapsed real seconds. Capped at 4 hours of real time to avoid a
     * week-away return burning through 7 virtual days of schedules.
     */
    catchUp: () => set((s) => {
      if (s.paused || !s.lastTickAt) return { lastTickAt: Date.now() };
      const gapMs = Math.max(0, Date.now() - s.lastTickAt);
      if (gapMs < 1e3) return {};
      const cappedMs = Math.min(gapMs, 4 * 60 * 60 * 1e3);
      const deltaRealSeconds = cappedMs / 1e3;
      const deltaVirtHour = deltaRealSeconds * s.scale / 3600;
      let h = s.virtualHour + deltaVirtHour;
      let d = s.virtualDay;
      while (h >= 24) {
        h -= 24;
        d += 1;
      }
      while (h < 0) {
        h += 24;
        d -= 1;
      }
      return { virtualHour: h, virtualDay: d, phase: phaseOf(h), lastTickAt: Date.now() };
    }),
    setHour: (h) => set(() => {
      let nh = (h % 24 + 24) % 24;
      return { virtualHour: nh, phase: phaseOf(nh) };
    }),
    setScale: (s) => set({ scale: Math.max(1, Math.min(3600, Number(s) || 72)) }),
    pause: () => set({ paused: true }),
    resume: () => set({ paused: false }),
    togglePause: () => set((s) => ({ paused: !s.paused })),
    resetDay: () => set({ virtualHour: 8, virtualDay: 1, phase: "morning" })
  }),
  {
    name: "n4-world-clock",
    storage: createJSONStorage(() => localStorage),
    partialize: (s) => ({
      virtualHour: s.virtualHour,
      virtualDay: s.virtualDay,
      phase: s.phase,
      scale: s.scale
    }),
    version: 1
  }
));
const CELL_SIZE = 8;
const ZONE_HALF = 220;
const CELLS_PER_AXIS = Math.ceil(ZONE_HALF * 2 / CELL_SIZE);
function xzToCell(x, z) {
  const col = Math.floor((x + ZONE_HALF) / CELL_SIZE);
  const row = Math.floor((z + ZONE_HALF) / CELL_SIZE);
  if (col < 0 || col >= CELLS_PER_AXIS) return null;
  if (row < 0 || row >= CELLS_PER_AXIS) return null;
  return row * CELLS_PER_AXIS + col;
}
function makeEmptyTiles() {
  return Array.from({ length: CELLS_PER_AXIS * CELLS_PER_AXIS }, () => 0);
}
const useWorldDiscoveredStore = create(persist(
  (set, get) => ({
    /** zoneId → number[] packed 0/1 */
    tiles: { village: makeEmptyTiles() },
    /** POI IDs the player has discovered (shrines, portals, teleport points) */
    pois: [],
    /** zoneId → boolean — visited at least once */
    zonesVisited: { village: true },
    markDiscovered: (zoneId, x, z, radiusCells = 2) => set((s) => {
      const tiles = { ...s.tiles };
      if (!tiles[zoneId]) tiles[zoneId] = makeEmptyTiles();
      const grid = tiles[zoneId].slice();
      const centerCol = Math.floor((x + ZONE_HALF) / CELL_SIZE);
      const centerRow = Math.floor((z + ZONE_HALF) / CELL_SIZE);
      for (let dr = -radiusCells; dr <= radiusCells; dr++) {
        for (let dc = -radiusCells; dc <= radiusCells; dc++) {
          const r = centerRow + dr;
          const c = centerCol + dc;
          if (r < 0 || r >= CELLS_PER_AXIS || c < 0 || c >= CELLS_PER_AXIS) continue;
          if (dr * dr + dc * dc > radiusCells * radiusCells) continue;
          grid[r * CELLS_PER_AXIS + c] = 1;
        }
      }
      tiles[zoneId] = grid;
      return { tiles };
    }),
    markZoneVisited: (zoneId) => set((s) => ({
      zonesVisited: { ...s.zonesVisited, [zoneId]: true },
      tiles: s.tiles[zoneId] ? s.tiles : { ...s.tiles, [zoneId]: makeEmptyTiles() }
    })),
    addPoi: (poiId) => set((s) => s.pois.includes(poiId) ? {} : { pois: [...s.pois, poiId] }),
    clearZone: (zoneId) => set((s) => {
      const tiles = { ...s.tiles };
      delete tiles[zoneId];
      return { tiles };
    }),
    /** Read-only helper: is cell discovered? */
    isDiscovered: (zoneId, x, z) => {
      const grid = get().tiles[zoneId];
      if (!grid) return false;
      const idx = xzToCell(x, z);
      return idx != null && grid[idx] === 1;
    },
    /** Dump raw grid for painting to canvas. */
    getGrid: (zoneId) => get().tiles[zoneId] || null,
    reset: () => set({
      tiles: { village: makeEmptyTiles() },
      pois: [],
      zonesVisited: { village: true }
    })
  }),
  {
    name: "n4-world-discovered",
    storage: createJSONStorage(() => localStorage),
    partialize: (s) => ({
      tiles: s.tiles,
      pois: s.pois,
      zonesVisited: s.zonesVisited
    }),
    version: 1
  }
));
const useWorldEntriesStore = create(persist(
  (set, get) => ({
    discoveredIds: [],
    // Array for JSON-serialization
    interiorVisits: {},
    // id → count
    scheduleOverrides: {},
    // id → { forceOpen:bool }
    rev: 0,
    /** Mark an entry discovered. Returns true if this was the first time. */
    markDiscovered(id) {
      if (!id) return false;
      const cur = get().discoveredIds;
      if (cur.includes(id)) return false;
      set({ discoveredIds: [...cur, id], rev: get().rev + 1 });
      return true;
    },
    isDiscovered(id) {
      return get().discoveredIds.includes(id);
    },
    discoveredCount() {
      return get().discoveredIds.length;
    },
    /** Increment interior-visit counter. Returns new count. */
    incrementVisit(id) {
      if (!id) return 0;
      const next = (get().interiorVisits[id] || 0) + 1;
      set({ interiorVisits: { ...get().interiorVisits, [id]: next }, rev: get().rev + 1 });
      return next;
    },
    getVisitCount(id) {
      return get().interiorVisits[id] || 0;
    },
    setScheduleOverride(id, override) {
      set({
        scheduleOverrides: { ...get().scheduleOverrides, [id]: override || null },
        rev: get().rev + 1
      });
    },
    clearScheduleOverrides() {
      set({ scheduleOverrides: {}, rev: get().rev + 1 });
    },
    /** Hard reset — used by /debug-panel "Reset WorldV2 data". */
    _resetAll() {
      set({ discoveredIds: [], interiorVisits: {}, scheduleOverrides: {}, rev: 0 });
    }
  }),
  {
    name: "ja-world-v2:entries",
    storage: createJSONStorage(() => localStorage),
    version: 1
  }
));
const useWorldEventsStore = create(persist(
  (set, get) => ({
    /** Set of season-event ids the player has unlocked/participated in. */
    seasonUnlocks: [],
    /** Active events right now (driven by calendar + unlocks). */
    activeEvents: [],
    /** Mini-games (8 hidden) the player has discovered. */
    foundMiniGames: [],
    rev: 0,
    unlockEvent(eventId) {
      if (!eventId) return false;
      const cur = get().seasonUnlocks;
      if (cur.includes(eventId)) return false;
      set({ seasonUnlocks: [...cur, eventId], rev: get().rev + 1 });
      return true;
    },
    setActiveEvents(list) {
      set({ activeEvents: Array.isArray(list) ? list.slice() : [], rev: get().rev + 1 });
    },
    discoverMiniGame(id) {
      if (!id) return false;
      const cur = get().foundMiniGames;
      if (cur.includes(id)) return false;
      set({ foundMiniGames: [...cur, id], rev: get().rev + 1 });
      return true;
    },
    hasFoundMiniGame(id) {
      return get().foundMiniGames.includes(id);
    },
    _resetAll() {
      set({ seasonUnlocks: [], activeEvents: [], foundMiniGames: [], rev: 0 });
    }
  }),
  {
    name: "ja-world-v2:events",
    storage: createJSONStorage(() => localStorage),
    version: 1
  }
));
const CROPS = Object.freeze({
  rice: { id: "rice", hoursToMature: 10, tokens: 5, label: "Lúa", icon: "🌾" },
  radish: { id: "radish", hoursToMature: 5, tokens: 3, label: "Củ Cải", icon: "🟣" },
  melon: { id: "melon", hoursToMature: 18, tokens: 12, label: "Dưa", icon: "🍈" },
  tea: { id: "tea", hoursToMature: 14, tokens: 8, label: "Trà", icon: "🍃" },
  soy: { id: "soy", hoursToMature: 8, tokens: 4, label: "Đậu", icon: "🫘" }
});
const useWorldGrindingStore = create(persist(
  (set, get) => ({
    nodeCooldowns: {},
    // nodeId → virtualHour when respawns
    plots: {},
    // plotId → plot object
    passiveLastTicks: {},
    // buildingId → virtualHour
    gatherSessions: {},
    // active gather: sessionId → { nodeId, startedAt, kind }
    totals: {
      gathered: 0,
      harvested: 0,
      passiveCoins: 0
    },
    // ─── Gather nodes ────────────────────────────────────────────
    setNodeCooldown: (nodeId, untilVirtHour) => set((s) => ({
      nodeCooldowns: { ...s.nodeCooldowns, [nodeId]: untilVirtHour }
    })),
    clearNodeCooldown: (nodeId) => set((s) => {
      const next = { ...s.nodeCooldowns };
      delete next[nodeId];
      return { nodeCooldowns: next };
    }),
    isNodeReady: (nodeId, currentVirtHour) => {
      const cd = get().nodeCooldowns[nodeId];
      if (cd === void 0) return true;
      return currentVirtHour >= cd;
    },
    // ─── Farm plots ─────────────────────────────────────────────
    plant: (plotId, cropId, virtualHour, virtualDay) => set((s) => {
      const crop = CROPS[cropId];
      if (!crop) return {};
      return {
        plots: {
          ...s.plots,
          [plotId]: {
            id: plotId,
            crop: cropId,
            plantedAt: { hour: virtualHour, day: virtualDay },
            stage: "planted",
            wateredAt: null,
            ready: false
          }
        }
      };
    }),
    water: (plotId, virtualHour, virtualDay) => set((s) => {
      const p = s.plots[plotId];
      if (!p) return {};
      return {
        plots: {
          ...s.plots,
          [plotId]: { ...p, wateredAt: { hour: virtualHour, day: virtualDay } }
        }
      };
    }),
    harvest: (plotId) => set((s) => {
      const p = s.plots[plotId];
      if (!p || !p.ready) return {};
      const next = { ...s.plots };
      delete next[plotId];
      return {
        plots: next,
        totals: { ...s.totals, harvested: s.totals.harvested + 1 }
      };
    }),
    /** Advance all plots against the current clock. Returns ids that just matured. */
    advancePlots: (currentHour, currentDay) => {
      const state = get();
      const { plots } = state;
      const maturedIds = [];
      const nextPlots = { ...plots };
      for (const [id, p] of Object.entries(plots)) {
        if (!p) continue;
        const crop = CROPS[p.crop];
        if (!crop) continue;
        const elapsed = (currentDay - p.plantedAt.day) * 24 + (currentHour - p.plantedAt.hour);
        const frac = Math.max(0, elapsed / crop.hoursToMature);
        let stage = "planted";
        if (frac >= 1) stage = "harvestable";
        else if (frac >= 0.66) stage = "mature";
        else if (frac >= 0.25) stage = "sprout";
        const ready = stage === "harvestable";
        if (stage !== p.stage || ready !== p.ready) {
          nextPlots[id] = { ...p, stage, ready };
          if (ready && !p.ready) maturedIds.push(id);
        }
      }
      set({ plots: nextPlots });
      return maturedIds;
    },
    // ─── Gather sessions (short-lived) ──────────────────────────
    startGather: (nodeId, kind) => {
      const sessionId = `${nodeId}-${Date.now()}`;
      set((s) => ({
        gatherSessions: {
          ...s.gatherSessions,
          [sessionId]: { nodeId, kind, startedAt: Date.now() }
        }
      }));
      return sessionId;
    },
    endGather: (sessionId) => set((s) => {
      const next = { ...s.gatherSessions };
      delete next[sessionId];
      return {
        gatherSessions: next,
        totals: { ...s.totals, gathered: s.totals.gathered + 1 }
      };
    }),
    // ─── Passive income ─────────────────────────────────────────
    recordPassiveTick: (buildingId, currentHour, coins) => set((s) => ({
      passiveLastTicks: { ...s.passiveLastTicks, [buildingId]: currentHour },
      totals: { ...s.totals, passiveCoins: s.totals.passiveCoins + coins }
    }))
  }),
  {
    name: "n4-world-grinding",
    storage: createJSONStorage(() => localStorage),
    partialize: (s) => ({
      nodeCooldowns: s.nodeCooldowns,
      plots: s.plots,
      passiveLastTicks: s.passiveLastTicks,
      totals: s.totals
    }),
    version: 1
  }
));
const DEFAULT_SLOTS = [
  "entry.mat",
  "living.rug",
  "living.sofa",
  "living.art1",
  "living.art2",
  "bedroom.bed",
  "bedroom.lamp",
  "kitchen.table",
  "garden.tree",
  "garden.path"
];
const useWorldHousingStore = create(persist(
  (set) => ({
    owned: true,
    floorColor: "#b88a57",
    wallColor: "#e8dbc6",
    roofColor: "#7a3a2e",
    /** slotId → cosmeticItemId (Track D registry) or null */
    slots: DEFAULT_SLOTS.reduce((acc, id) => {
      acc[id] = null;
      return acc;
    }, {}),
    petBedActive: true,
    storageBound: true,
    // Track D's inventory chest renders here
    setColor: (key, value) => set((s) => {
      if (!["floorColor", "wallColor", "roofColor"].includes(key)) return {};
      return { [key]: value };
    }),
    placeCosmetic: (slotId, itemId) => set((s) => ({
      slots: { ...s.slots, [slotId]: itemId || null }
    })),
    clearSlot: (slotId) => set((s) => ({
      slots: { ...s.slots, [slotId]: null }
    })),
    resetHouse: () => set({
      floorColor: "#b88a57",
      wallColor: "#e8dbc6",
      roofColor: "#7a3a2e",
      slots: DEFAULT_SLOTS.reduce((acc, id) => {
        acc[id] = null;
        return acc;
      }, {})
    })
  }),
  {
    name: "n4-world-housing",
    storage: createJSONStorage(() => localStorage),
    partialize: (s) => ({
      owned: s.owned,
      floorColor: s.floorColor,
      wallColor: s.wallColor,
      roofColor: s.roofColor,
      slots: s.slots,
      petBedActive: s.petBedActive,
      storageBound: s.storageBound
    }),
    version: 1
  }
));
const AFFINITY_TIERS = [
  { tier: 0, label: "Xa Lạ", threshold: 0 },
  { tier: 1, label: "Quen Biết", threshold: 30 },
  { tier: 2, label: "Bạn Bè", threshold: 80 },
  { tier: 3, label: "Thân Thiết", threshold: 180 },
  { tier: 4, label: "Tri Kỷ", threshold: 320 }
];
function affinityTier(value) {
  const v = Number(value) || 0;
  let out = AFFINITY_TIERS[0];
  for (const t of AFFINITY_TIERS) if (v >= t.threshold) out = t;
  return out;
}
const useWorldNpcStore = create(persist(
  (set, get) => ({
    affinity: {},
    // npcId → points
    shownLines: {},
    // npcId → Array<lineId>
    lastInteractAt: {},
    // npcId → epoch ms
    rev: 0,
    addAffinity(npcId, delta) {
      if (!npcId) return 0;
      const cur = get().affinity[npcId] || 0;
      const next = Math.max(0, cur + (Number(delta) || 0));
      set({
        affinity: { ...get().affinity, [npcId]: next },
        lastInteractAt: { ...get().lastInteractAt, [npcId]: Date.now() },
        rev: get().rev + 1
      });
      return next;
    },
    getAffinity(npcId) {
      return get().affinity[npcId] || 0;
    },
    getAffinityTier(npcId) {
      return affinityTier(get().affinity[npcId] || 0);
    },
    markLineShown(npcId, lineId) {
      if (!npcId || !lineId) return;
      const arr = get().shownLines[npcId] || [];
      if (arr.includes(lineId)) return;
      set({
        shownLines: { ...get().shownLines, [npcId]: [...arr, lineId] },
        rev: get().rev + 1
      });
    },
    hasSeenLine(npcId, lineId) {
      return (get().shownLines[npcId] || []).includes(lineId);
    },
    _resetAll() {
      set({ affinity: {}, shownLines: {}, lastInteractAt: {}, rev: 0 });
    }
  }),
  {
    name: "ja-world-v2:npc",
    storage: createJSONStorage(() => localStorage),
    version: 1
  }
));
const useWorldSchedulesStore = create(persist(
  (set, get) => ({
    /** npcId → { rep: -100..100, lastSeen: {hour, day} } */
    npcs: {},
    /** questId → { state: 'available'|'active'|'complete', progress: number, takenAt: {h,d} } */
    worldQuests: {},
    setReputation: (npcId, rep) => set((s) => ({
      npcs: {
        ...s.npcs,
        [npcId]: { ...s.npcs[npcId] || { lastSeen: null }, rep: Math.max(-100, Math.min(100, rep)) }
      }
    })),
    bumpReputation: (npcId, delta) => set((s) => {
      var _a2, _b2;
      const prev = (_b2 = (_a2 = s.npcs[npcId]) == null ? void 0 : _a2.rep) != null ? _b2 : 0;
      return {
        npcs: {
          ...s.npcs,
          [npcId]: { ...s.npcs[npcId] || { lastSeen: null }, rep: Math.max(-100, Math.min(100, prev + delta)) }
        }
      };
    }),
    noteSeen: (npcId, hour, day) => set((s) => ({
      npcs: {
        ...s.npcs,
        [npcId]: { ...s.npcs[npcId] || { rep: 0 }, lastSeen: { hour, day } }
      }
    })),
    startQuest: (questId, hour, day) => set((s) => ({
      worldQuests: {
        ...s.worldQuests,
        [questId]: { state: "active", progress: 0, takenAt: { hour, day } }
      }
    })),
    progressQuest: (questId, delta = 1) => set((s) => {
      const q = s.worldQuests[questId];
      if (!q || q.state !== "active") return {};
      return {
        worldQuests: {
          ...s.worldQuests,
          [questId]: { ...q, progress: q.progress + delta }
        }
      };
    }),
    completeQuest: (questId) => set((s) => {
      const q = s.worldQuests[questId];
      if (!q) return {};
      return {
        worldQuests: {
          ...s.worldQuests,
          [questId]: { ...q, state: "complete" }
        }
      };
    }),
    resetQuest: (questId) => set((s) => {
      const next = { ...s.worldQuests };
      delete next[questId];
      return { worldQuests: next };
    })
  }),
  {
    name: "n4-world-schedules",
    storage: createJSONStorage(() => localStorage),
    partialize: (s) => ({
      npcs: s.npcs,
      worldQuests: s.worldQuests
    }),
    version: 1
  }
));
const useWorldAnchorStore = create(
  persist(
    (set, get) => ({
      /** Map<anchorId, { mastery: 0-3, lastReviewed: timestamp, type: string }> */
      anchors: {},
      /**
       * Record an interaction with an anchor. Bumps mastery if not yet max.
       */
      recordInteraction: (anchorId, type) => {
        set((state) => {
          const prev = state.anchors[anchorId] || { mastery: 0, type };
          const newMastery = Math.min(3, prev.mastery + 1);
          return {
            anchors: {
              ...state.anchors,
              [anchorId]: {
                mastery: newMastery,
                lastReviewed: Date.now(),
                type: type || prev.type
              }
            }
          };
        });
      },
      /**
       * Get mastery level for an anchor. Returns 0 if unseen.
       */
      getMastery: (anchorId) => {
        var _a2;
        return ((_a2 = get().anchors[anchorId]) == null ? void 0 : _a2.mastery) || 0;
      },
      /**
       * Get count of anchors at mastery level >= threshold.
       */
      countMastered: (threshold = 3) => {
        const { anchors } = get();
        return Object.values(anchors).filter((a) => a.mastery >= threshold).length;
      },
      /**
       * Reset all anchor mastery (for testing / new game).
       */
      resetAnchors: () => set({ anchors: {} })
    }),
    {
      name: "n4-world-anchors-v1",
      version: 1
    }
  )
);
const useSrsStore = create((set, get) => ({
  rev: 0,
  lastReview: null,
  recordReview(input) {
    const due = srs.recordReview(input);
    set({ rev: get().rev + 1, lastReview: { ...input, dueAt: due == null ? void 0 : due.dueAt } });
    return due;
  },
  stateFor(key) {
    return srs.stateFor(key);
  },
  dueQueue(spec) {
    return srs.dueQueue(spec);
  },
  stats() {
    return srs.debug.stats();
  },
  resetItem(key) {
    srs.debug.resetItem(key);
    set({ rev: get().rev + 1 });
  },
  resetAll() {
    srs._resetAll();
    set({ rev: get().rev + 1, lastReview: null });
  }
}));
srs.onReview((r) => {
  try {
    useSrsStore.setState({ rev: useSrsStore.getState().rev + 1, lastReview: r });
  } catch (e) {
  }
});
srs.onChange(() => useSrsStore.setState((state) => ({ rev: state.rev + 1 })));
const DB_NAME = "n4-content-cache";
const STORE_NAME = "data";
const DB_VERSION = 1;
function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "type" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function clearContentCache() {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).clear();
    await new Promise((resolve, reject) => {
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
  } catch (e) {
  }
}
const RETRY_QUEUE_KEY = "n4-sync-retry-queue";
const PUSH_BACKOFF_DELAYS_MS = [1500, 3500, 7500];
let _logoutInFlight = false;
let _loginPullInFlight = false;
let _pushPending = false;
let _economyImmediatePushInFlight = false;
let _economyImmediatePushTimer = null;
let _economySpendUnsubscribe = null;
let _settingsChangeUnsubscribe = null;
let _takaraSpendUnsubscribe = null;
let _questsSpendUnsubscribe = null;
let _combatSpendUnsubscribe = null;
let _worldStudyProgressUnsubscribe = null;
let _masteryUnsubscribe = null;
let _fsrsUnsubscribe = null;
let _resetProtectedUntil = 0;
const _syncListeners = /* @__PURE__ */ new Set();
const _syncState = {
  lastSyncAt: null,
  lastPushAt: null,
  lastPullAt: null,
  lastError: null,
  inFlight: false,
  pendingRetry: false,
  isOnline: typeof navigator !== "undefined" ? navigator.onLine !== false : true
};
try {
  if (typeof localStorage !== "undefined" && localStorage.getItem(RETRY_QUEUE_KEY)) {
    _syncState.pendingRetry = true;
  }
} catch (e) {
}
function onSyncEvent(fn) {
  _syncListeners.add(fn);
  return () => _syncListeners.delete(fn);
}
function emitSyncEvent(type, detail = null) {
  const now = (/* @__PURE__ */ new Date()).toISOString();
  switch (type) {
    case "pull":
      _syncState.lastPullAt = now;
      _syncState.lastSyncAt = now;
      _syncState.lastError = null;
      break;
    case "push":
      _syncState.lastPushAt = now;
      _syncState.lastSyncAt = now;
      _syncState.lastError = null;
      _syncState.inFlight = false;
      break;
    case "push-start":
      _syncState.inFlight = true;
      break;
    case "push-error":
    case "pull-error":
      _syncState.lastError = { message: (detail == null ? void 0 : detail.message) || "Lỗi đồng bộ", at: now };
      _syncState.inFlight = false;
      break;
    case "push-blocked":
      _syncState.inFlight = false;
      break;
    case "retry-queued":
      _syncState.pendingRetry = true;
      _syncState.inFlight = false;
      break;
    case "retry-flushed":
      _syncState.pendingRetry = false;
      break;
    case "offline":
      _syncState.isOnline = false;
      break;
    case "online":
      _syncState.isOnline = true;
      break;
  }
  for (const fn of _syncListeners) {
    try {
      fn(type, detail);
    } catch (e) {
    }
  }
}
function queuePushRetry(err) {
  try {
    if (typeof localStorage === "undefined") return;
    const item = {
      message: (err == null ? void 0 : err.message) || String(err),
      failedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    localStorage.setItem(RETRY_QUEUE_KEY, JSON.stringify(item));
    emitSyncEvent("retry-queued", item);
  } catch (e) {
  }
}
function clearPushRetryQueue() {
  try {
    if (typeof localStorage !== "undefined" && localStorage.getItem(RETRY_QUEUE_KEY)) {
      localStorage.removeItem(RETRY_QUEUE_KEY);
      emitSyncEvent("retry-flushed");
    }
  } catch (e) {
  }
}
function hasPendingPushRetry() {
  try {
    if (typeof localStorage === "undefined") return false;
    return !!localStorage.getItem(RETRY_QUEUE_KEY);
  } catch (e) {
    return false;
  }
}
function flushPendingRetryIfAny(trigger = "unknown") {
  if (!hasPendingPushRetry()) return;
  syncLog("flushPendingRetryIfAny: pending retry found, re-scheduling push", { trigger });
  scheduleImmediateEconomyPush("retry-queue-flush");
}
async function syncNow() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Chưa đăng nhập");
  let currentProfile = null;
  try {
    currentProfile = await getProfile(user.id);
    if ((currentProfile == null ? void 0 : currentProfile.role) === "blocked") {
      return { status: "blocked", message: "⛔ Tài khoản đã bị khóa. Không thể đồng bộ." };
    }
    applyProfileBackedUser(user, currentProfile);
  } catch (e) {
  }
  const { data: cloudRowRaw, error: pullErr } = await supabase.from("user_data").select("*").eq("user_id", user.id).maybeSingle();
  if (pullErr) throw new Error("Lỗi khi tải dữ liệu: " + pullErr.message);
  const cloudRow = cloudRowRaw ? validateCloudRow(cloudRowRaw) : null;
  const localData = collectLocalData();
  const localWeight = computeDataWeight(localData);
  const cloudWeight = cloudRow ? computeDataWeight(cloudRow) : 0;
  const pushTs = (/* @__PURE__ */ new Date()).toISOString();
  const cloudTs = (cloudRow == null ? void 0 : cloudRow.updated_at) || null;
  if (localWeight === 0 && cloudWeight > 5 && cloudRow) {
    restoreFromCloud(cloudRow);
    useAppStore.setState({ lastSyncAt: pushTs });
    emitSyncEvent("pull");
    const syncedUser = await refreshAppUserFromProfile(user, currentProfile);
    const restoredLearning = useLearningStore.getState();
    const syncedProfile2 = await syncProfileStats(user.id, buildProfileStatsPayload(restoredLearning, syncedUser || useAppStore.getState().user));
    applyProfileBackedUser(syncedUser || user, syncedProfile2 || currentProfile);
    return { status: "success", message: "⬇️ Đã lấy dữ liệu từ cloud (local trống)" };
  }
  const merged = mergeData(localData, cloudRow, pushTs, cloudTs);
  const { error: pushErr } = await supabase.from("user_data").upsert({
    user_id: user.id,
    ...merged,
    updated_at: pushTs,
    version: ((cloudRow == null ? void 0 : cloudRow.version) || 0) + 1
  }, { onConflict: "user_id" });
  if (pushErr) throw new Error("Lỗi khi lưu dữ liệu: " + pushErr.message);
  restoreFromCloud(merged);
  useAppStore.setState({ lastSyncAt: pushTs });
  emitSyncEvent("push");
  registerDevice(user.id).catch((e) => console.warn("[Sync] registerDevice failed:", e == null ? void 0 : e.message));
  const learning = useLearningStore.getState();
  const syncedProfile = await syncProfileStats(user.id, buildProfileStatsPayload(learning, useAppStore.getState().user));
  applyProfileBackedUser(useAppStore.getState().user || user, syncedProfile || currentProfile);
  logActivity(user.id, "sync", { localWeight, cloudWeight });
  return { status: "success", message: "Đồng bộ thành công!" };
}
async function pushNow({ force = false } = {}) {
  if (_loginPullInFlight && !force) {
    return { status: "noop", message: "Đang tải dữ liệu từ cloud — tạm hoãn push." };
  }
  emitSyncEvent("push-start");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Chưa đăng nhập");
  let currentProfile = null;
  try {
    currentProfile = await getProfile(user.id);
    applyProfileBackedUser(user, currentProfile);
  } catch (e) {
  }
  const localData = collectLocalData();
  const localWeight = computeDataWeight(localData);
  const pushTs = (/* @__PURE__ */ new Date()).toISOString();
  const { data: cloudRowRaw } = await supabase.from("user_data").select("*").eq("user_id", user.id).maybeSingle();
  const cloudRow = cloudRowRaw ? validateCloudRow(cloudRowRaw) : null;
  if (!force && cloudRow) {
    const cloudWeight = computeDataWeight(cloudRow);
    if (localWeight === 0 && cloudWeight > 5) {
      console.warn("[Sync] Blocked push: local data is empty but cloud has", cloudWeight, "items. Pull first or use force.");
      emitSyncEvent("push-blocked", { reason: "empty-local", localWeight, cloudWeight });
      return {
        status: "blocked",
        message: "⚠️ Dữ liệu local trống — không ghi đè cloud. Hãy Pull trước."
      };
    }
    if (localWeight > 0 && cloudWeight > 20 && localWeight < cloudWeight * 0.5) {
      console.warn("[Sync] Blocked push: local weight", localWeight, "≪ cloud weight", cloudWeight);
      emitSyncEvent("push-blocked", { reason: "weight-loss", localWeight, cloudWeight });
      return {
        status: "blocked",
        message: "⚠️ Dữ liệu local ít hơn 50% so với cloud — có thể bị mất dữ liệu. Dùng Pull để đồng bộ trước."
      };
    }
  }
  const dataToUpsert = force ? localData : mergeData(localData, cloudRow, pushTs, (cloudRow == null ? void 0 : cloudRow.updated_at) || null);
  const { error } = await supabase.from("user_data").upsert({
    user_id: user.id,
    ...dataToUpsert,
    updated_at: pushTs,
    version: ((cloudRow == null ? void 0 : cloudRow.version) || 0) + 1
  }, { onConflict: "user_id" });
  if (error) throw new Error("Lỗi khi đẩy dữ liệu: " + error.message);
  if (!force && cloudRow) restoreFromCloud(dataToUpsert);
  useAppStore.setState({ lastSyncAt: pushTs });
  emitSyncEvent("push");
  registerDevice(user.id).catch((e) => console.warn("[Sync] registerDevice failed:", e == null ? void 0 : e.message));
  const learning = useLearningStore.getState();
  const syncedProfile = await syncProfileStats(user.id, buildProfileStatsPayload(learning, useAppStore.getState().user));
  applyProfileBackedUser(useAppStore.getState().user || user, syncedProfile || currentProfile);
  return { status: "success", message: "⬆️ Đã đẩy dữ liệu lên cloud!" };
}
async function pullNow() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Chưa đăng nhập");
  let currentProfile = null;
  try {
    currentProfile = await getProfile(user.id);
    applyProfileBackedUser(user, currentProfile);
  } catch (e) {
  }
  const { data: cloudRow, error } = await supabase.from("user_data").select("*").eq("user_id", user.id).maybeSingle();
  if (error) {
    emitSyncEvent("pull-error", { message: error.message });
    throw new Error("Lỗi khi tải dữ liệu: " + error.message);
  }
  if (!cloudRow) throw new Error("Chưa có dữ liệu trên cloud. Hãy Push trước.");
  restoreFromCloud(cloudRow);
  await refreshAppUserFromProfile(user, currentProfile);
  const ts = (/* @__PURE__ */ new Date()).toISOString();
  useAppStore.setState({ lastSyncAt: ts });
  emitSyncEvent("pull");
  return { status: "success", message: "⬇️ Đã lấy dữ liệu từ cloud!" };
}
function stableStringify(value) {
  const seen = /* @__PURE__ */ new WeakSet();
  const walk = (v) => {
    if (v === null || typeof v !== "object") return v;
    if (seen.has(v)) return "[Circular]";
    seen.add(v);
    if (Array.isArray(v)) return v.map(walk);
    const out = {};
    for (const k of Object.keys(v).sort()) out[k] = walk(v[k]);
    return out;
  };
  return JSON.stringify(walk(value));
}
function computeLocalDataSignature() {
  return stableStringify(collectLocalData());
}
function persistCurrentSignature() {
  const sig = computeLocalDataSignature();
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.AUTO_BACKUP_SIGNATURE, sig);
    }
  } catch (e) {
  }
}
async function pushIfChanged() {
  const sig = computeLocalDataSignature();
  let lastAutoBackupSig = null;
  try {
    lastAutoBackupSig = typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE_KEYS.AUTO_BACKUP_SIGNATURE) : null;
  } catch (e) {
  }
  if (lastAutoBackupSig && sig === lastAutoBackupSig) {
    return { status: "noop", message: "No changes" };
  }
  const result = await pushNow();
  if (result.status === "blocked") return result;
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.AUTO_BACKUP_SIGNATURE, sig);
    }
  } catch (e) {
  }
  return { status: "success", message: (result == null ? void 0 : result.message) || "⬆️ Auto backup OK" };
}
function scheduleImmediateEconomyPush(reason = "economy-spend") {
  if (_logoutInFlight) return;
  if (_economyImmediatePushInFlight) {
    _pushPending = true;
    return;
  }
  if (_economyImmediatePushTimer) clearTimeout(_economyImmediatePushTimer);
  _economyImmediatePushTimer = setTimeout(async () => {
    _economyImmediatePushTimer = null;
    if (_economyImmediatePushInFlight) {
      _pushPending = true;
      return;
    }
    _economyImmediatePushInFlight = true;
    _pushPending = false;
    let attempt = 0;
    while (attempt < PUSH_BACKOFF_DELAYS_MS.length) {
      try {
        const result = await pushNow();
        if ((result == null ? void 0 : result.status) === "success") {
          persistCurrentSignature();
          clearPushRetryQueue();
        }
        break;
      } catch (e) {
        attempt++;
        emitSyncEvent("push-error", { message: (e == null ? void 0 : e.message) || String(e), attempt });
        if (attempt >= PUSH_BACKOFF_DELAYS_MS.length) {
          console.warn(`[Sync] Economy push failed after ${attempt} attempts:`, e == null ? void 0 : e.message);
          queuePushRetry(e);
          break;
        }
        const delay = PUSH_BACKOFF_DELAYS_MS[attempt - 1];
        syncLog(`push attempt ${attempt} failed, retrying in ${delay}ms:`, e == null ? void 0 : e.message);
        await new Promise((r) => setTimeout(r, delay));
      }
    }
    _economyImmediatePushInFlight = false;
    if (_pushPending) {
      _pushPending = false;
      scheduleImmediateEconomyPush("post-inflight-dirty");
    }
  }, 180);
}
function startEconomySpendWatcher() {
  if (_economySpendUnsubscribe) return;
  const changedLearningSlice = () => {
    if (!_isRestoringFromCloud) scheduleImmediateEconomyPush("learning-slice-change");
  };
  _masteryUnsubscribe = useMasteryStore.subscribe(changedLearningSlice);
  _fsrsUnsubscribe = srs.onChange(changedLearningSlice);
  _economySpendUnsubscribe = useLearningStore.subscribe((state, prev) => {
    if (_isRestoringFromCloud) return;
    if (buildLearningSyncSignature(state) !== buildLearningSyncSignature(prev)) {
      scheduleImmediateEconomyPush("learning-change");
    }
  });
  _takaraSpendUnsubscribe = useTakaraStore.subscribe((state, prev) => {
    if (_isRestoringFromCloud) return;
    scheduleImmediateEconomyPush("takara-change");
  });
  _questsSpendUnsubscribe = useQuestStore.subscribe((state, prev) => {
    if (_isRestoringFromCloud) return;
    scheduleImmediateEconomyPush("quests-change");
  });
  _combatSpendUnsubscribe = useCombatStore.subscribe((state, prev) => {
    if (_isRestoringFromCloud) return;
    scheduleImmediateEconomyPush("combat-change");
  });
  if (!_worldStudyProgressUnsubscribe && typeof window !== "undefined") {
    const handleWorldStudyProgressChange = () => {
      if (_isRestoringFromCloud) return;
      scheduleImmediateEconomyPush("world-study-progress-change");
    };
    window.addEventListener(STUDY_PROGRESS_CHANGED_EVENT, handleWorldStudyProgressChange);
    window.addEventListener("n4:world-learning-changed", handleWorldStudyProgressChange);
    _worldStudyProgressUnsubscribe = () => {
      window.removeEventListener(STUDY_PROGRESS_CHANGED_EVENT, handleWorldStudyProgressChange);
      window.removeEventListener("n4:world-learning-changed", handleWorldStudyProgressChange);
    };
  }
}
function startSettingsChangeWatcher() {
  if (_settingsChangeUnsubscribe) return;
  let _ready = false;
  whenPersistHydrated(useAppStore, () => {
    _ready = true;
  });
  _settingsChangeUnsubscribe = useAppStore.subscribe((state, prev) => {
    if (!_ready) return;
    if (_isRestoringFromCloud) return;
    const _SETTINGS_META_KEYS = /* @__PURE__ */ new Set(["user", "lastSyncAt", "settingsChangedAt", "settingsQuery"]);
    for (const key of Object.keys(state)) {
      if (_SETTINGS_META_KEYS.has(key)) continue;
      if (typeof state[key] === "function") continue;
      if (state[key] !== prev[key]) {
        scheduleImmediateEconomyPush("settings-change");
        return;
      }
    }
  });
}
function stopRealtimeCloudSync$1() {
  _masteryUnsubscribe == null ? void 0 : _masteryUnsubscribe();
  _masteryUnsubscribe = null;
  _fsrsUnsubscribe == null ? void 0 : _fsrsUnsubscribe();
  _fsrsUnsubscribe = null;
  if (_economySpendUnsubscribe) {
    _economySpendUnsubscribe();
    _economySpendUnsubscribe = null;
  }
  if (_takaraSpendUnsubscribe) {
    _takaraSpendUnsubscribe();
    _takaraSpendUnsubscribe = null;
  }
  if (_questsSpendUnsubscribe) {
    _questsSpendUnsubscribe();
    _questsSpendUnsubscribe = null;
  }
  if (_combatSpendUnsubscribe) {
    _combatSpendUnsubscribe();
    _combatSpendUnsubscribe = null;
  }
  if (_settingsChangeUnsubscribe) {
    _settingsChangeUnsubscribe();
    _settingsChangeUnsubscribe = null;
  }
  if (_worldStudyProgressUnsubscribe) {
    _worldStudyProgressUnsubscribe();
    _worldStudyProgressUnsubscribe = null;
  }
  window.dispatchEvent(new CustomEvent("n4:sync:stop-realtime"));
}
function buildResetSyncResult({ failedScopes = [], cloud = null, resetGeneration = 0 } = {}) {
  const failures = [...new Set(failedScopes.filter(Boolean))];
  if (failures.length) {
    return {
      status: "partial",
      message: `⚠️ Đã reset phần chính, nhưng ${failures.length} phần phụ chưa hoàn tất.`,
      failedScopes: failures,
      cloud,
      resetGeneration
    };
  }
  return cloud || { status: "success", message: "✅ Đã reset tất cả dữ liệu!", failedScopes: [], resetGeneration };
}
async function resetAllAndSync() {
  const { data: { user } } = await supabase.auth.getUser().catch(() => ({ data: { user: null } }));
  const savedUser = useAppStore.getState().user;
  const resetAt = /* @__PURE__ */ new Date();
  const nextResetGeneration = Math.max(0, Number(useLearningStore.getState().resetGeneration) || 0) + 1;
  const resetFailures = [];
  const recordResetFailure = (scope, error) => {
    resetFailures.push(scope);
    console.warn(`[resetAllAndSync] ${scope} failed:`, error);
  };
  window.dispatchEvent(new CustomEvent("n4:sync:stop-autobackup"));
  stopRealtimeCloudSync$1();
  _resetProtectedUntil = Date.now() + 12e3;
  setRestoringFromCloud(true);
  if (_economyImmediatePushTimer) {
    clearTimeout(_economyImmediatePushTimer);
    _economyImmediatePushTimer = null;
  }
  _pushPending = false;
  const keysToPreserve = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && (key.startsWith("sb-") || key.startsWith("supabase"))) {
      keysToPreserve.push({ key, value: localStorage.getItem(key) });
    }
  }
  localStorage.clear();
  for (const { key, value } of keysToPreserve) {
    localStorage.setItem(key, value);
  }
  try {
    const resetBoundary = resetAt.getTime();
    const resetStudyProgress = Object.fromEntries(
      STUDY_DOMAINS.map((domainId) => [
        domainId,
        { completed: [], missed: [], resetAt: resetBoundary, updatedAt: resetBoundary }
      ])
    );
    setStudyProgressSnapshot(resetStudyProgress, { source: "account-reset" });
  } catch (e) {
    recordResetFailure("world-study-progress", e);
  }
  const cacheResults = await Promise.allSettled([
    clearAudioCache(),
    clearContentCache()
  ]);
  cacheResults.forEach((result, index) => {
    if (result.status === "rejected") recordResetFailure(index === 0 ? "audio-cache" : "content-cache", result.reason);
  });
  useLearningStore.setState(createResetLearningState(resetAt, nextResetGeneration));
  const appState = useAppStore.getState();
  resetAppStoreToDefaults(appState);
  useAppStore.setState({
    user: savedUser || null,
    lastSyncAt: null
  });
  try {
    useInventoryStore.setState({
      vocab: {},
      grammar: {},
      lastForgeAt: 0,
      panelOpen: false,
      lastPickupAt: 0,
      equippedCards: Array(3).fill(null),
      mastery: {},
      abilityCooldowns: {},
      completedThemes: [],
      items: { "book-vocab": 3, "book-kanji": 3, "book-grammar": 3 }
    });
  } catch (e) {
    recordResetFailure("inventory", e);
  }
  try {
    useCharacterStatsStore.getState()._fullReset();
  } catch (e) {
    recordResetFailure("character-stats", e);
  }
  try {
    useWorldStore.setState({
      activeBuilding: null,
      cameraMode: "explore",
      mapOpen: false,
      isDay: true,
      season: "spring",
      weather: "clear",
      world3dConfig: {
        npcDensity: 1,
        cameraSmooth: 0.4,
        cameraDolly: 0.5,
        birdEyeAlt: 38
      }
    });
  } catch (e) {
    recordResetFailure("world", e);
  }
  try {
    useWorldCharacterStore.setState({
      position: [0, 0.9, 0],
      rotation: [0, 0, 0],
      velocity: [0, 0, 0],
      grounded: true,
      facing: 0,
      crouching: false,
      sprinting: false,
      jumping: false,
      flying: false,
      active: true,
      mode: "third",
      stamina: 100,
      staminaMax: 100,
      spawnSlot: "plaza"
    });
  } catch (e) {
    recordResetFailure("world-character", e);
  }
  try {
    useWorldClockStore.setState({
      virtualHour: 8,
      virtualDay: 1,
      phase: "morning",
      scale: 72,
      paused: false,
      lastTickAt: 0
    });
  } catch (e) {
    recordResetFailure("world-clock", e);
  }
  try {
    useWorldDiscoveredStore.getState().reset();
  } catch (e) {
    recordResetFailure("world-discovered", e);
  }
  try {
    useWorldEntriesStore.getState()._resetAll();
  } catch (e) {
    recordResetFailure("world-entries", e);
  }
  try {
    useWorldEventsStore.getState()._resetAll();
  } catch (e) {
    recordResetFailure("world-events", e);
  }
  try {
    useWorldGrindingStore.setState({
      nodeCooldowns: {},
      plots: {},
      passiveLastTicks: {},
      gatherSessions: {},
      totals: { gathered: 0, harvested: 0, passiveCoins: 0 }
    });
  } catch (e) {
    recordResetFailure("world-grinding", e);
  }
  try {
    useWorldHousingStore.setState({
      owned: true,
      floorColor: "#b88a57",
      wallColor: "#e8dbc6",
      roofColor: "#7a3a2e",
      slots: ["entry.mat", "living.rug", "living.sofa", "living.art1", "living.art2", "bedroom.bed", "bedroom.lamp", "kitchen.table", "garden.tree", "garden.path"].reduce((acc, id) => {
        acc[id] = null;
        return acc;
      }, {}),
      petBedActive: true,
      storageBound: true
    });
  } catch (e) {
    recordResetFailure("world-housing", e);
  }
  try {
    useWorldNpcStore.getState()._resetAll();
  } catch (e) {
    recordResetFailure("world-npc", e);
  }
  try {
    useWorldSchedulesStore.setState({
      npcs: {},
      worldQuests: {}
    });
  } catch (e) {
    recordResetFailure("world-schedules", e);
  }
  try {
    useQuestStore.getState().reset();
  } catch (e) {
    recordResetFailure("quests", e);
  }
  try {
    useMasteryStore.getState().reset();
  } catch (e) {
    recordResetFailure("mastery", e);
  }
  try {
    useWorldAnchorStore.getState().resetAnchors();
  } catch (e) {
    recordResetFailure("anchors", e);
  }
  try {
    useTakaraStore.setState({
      gemSlice: { gems: 0, gemLog: [], shards: { common: 0, rare: 0, epic: 0, legendary: 0 } },
      tokenSlice: { tokens: 0, tokenLog: [] },
      cookingSlice: { ingredients: {}, dishes: {}, cookingBuffs: {}, recipesKnown: {}, cookingXp: 0 },
      marketSlice: { watchlist: {}, lastSeenDayIndex: null, flashSale: null },
      petDepthSlice: { petAbilityCooldowns: {}, petOutfits: {}, petQuests: {}, petParadeUnlocked: false }
    });
    saveAllTakara();
  } catch (e) {
    recordResetFailure("takara", e);
  }
  try {
    useNPCStore.getState().clearRuntime();
  } catch (e) {
    recordResetFailure("npc-runtime", e);
  }
  try {
    useSrsStore.getState().resetAll();
  } catch (e) {
    recordResetFailure("srs", e);
  }
  try {
    useLearningEncounterStore.setState({
      locked: false,
      current: null,
      openedAt: 0,
      resolver: null
    });
  } catch (e) {
    recordResetFailure("learning-encounter", e);
  }
  try {
    const appState2 = useAppStore.getState();
    if (typeof appState2.clearThemePreset === "function") {
      appState2.clearThemePreset();
    }
    if (typeof appState2.setAccent === "function") {
      appState2.setAccent("#4db89a");
    }
    try {
      const appEl = document.querySelector(".n4-app");
      if (appEl && appEl.classList && appEl.classList.length) {
        const cls = Array.from(appEl.classList);
        for (const c of cls) {
          if (c.startsWith("n4-cardstyle-") || c.startsWith("n4-entrance-") || c.startsWith("n4-avatar-aura-")) {
            appEl.classList.remove(c);
          }
        }
      }
    } catch (e) {
      recordResetFailure("cosmetic-presentation", e);
    }
  } catch (e) {
    recordResetFailure("cosmetics", e);
  }
  _lastAutoBackupSig = null;
  try {
    safeSetObjectItem(STORAGE_KEYS.SRS, {});
  } catch (e) {
  }
  try {
    safeSetObjectItem(STORAGE_KEYS.BOOKMARKS, {});
  } catch (e) {
  }
  try {
    sessionStorage.setItem("n4-reset-in-progress", "1");
    sessionStorage.setItem("n4-reset-protected-until", String(Date.now() + 12e3));
  } catch (e) {
  }
  let pushResult = null;
  if (user) {
    try {
      pushResult = await pushNow({ force: true });
    } catch (e) {
      console.error("[resetAllAndSync] Push failed:", e);
      pushResult = { status: "error", message: "❌ Reset thành công nhưng không thể đẩy lên cloud: " + e.message };
    }
  }
  const postPushProtection = Date.now() + 12e3;
  _resetProtectedUntil = postPushProtection;
  try {
    sessionStorage.setItem("n4-reset-protected-until", String(postPushProtection));
  } catch (e) {
  }
  setRestoringFromCloud(false);
  window.dispatchEvent(new CustomEvent("n4:sync:start-autobackup"));
  return buildResetSyncResult({ failedScopes: resetFailures, cloud: pushResult, resetGeneration: nextResetGeneration });
}
async function pullThenEnableSync() {
  _loginPullInFlight = true;
  try {
    if (_economyImmediatePushTimer) {
      clearTimeout(_economyImmediatePushTimer);
      _economyImmediatePushTimer = null;
    }
    _pushPending = false;
    const { data: { user } } = await supabase.auth.getUser().catch(() => ({ data: { user: null } }));
    if (!user) return null;
    try {
      const result = await syncNow();
      persistCurrentSignature();
      return result;
    } catch (e) {
      console.warn("[Sync] pullThenEnableSync failed:", (e == null ? void 0 : e.message) || e);
      return null;
    }
  } finally {
    _loginPullInFlight = false;
  }
}
async function finalizePushAndClearLocal() {
  _logoutInFlight = true;
  if (_economyImmediatePushTimer) {
    clearTimeout(_economyImmediatePushTimer);
    _economyImmediatePushTimer = null;
  }
  _pushPending = false;
  try {
    const { data: { user } } = await supabase.auth.getUser().catch(() => ({ data: { user: null } }));
    if (user) {
      await Promise.race([
        syncNow(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 8e3))
      ]).catch((e) => console.warn("[Sync] Final logout push failed:", e == null ? void 0 : e.message));
    }
  } finally {
    _logoutInFlight = false;
    window.dispatchEvent(new CustomEvent("n4:sync:stop-autobackup"));
    stopRealtimeCloudSync$1();
    try {
      const ownedValues = Object.values(STORAGE_KEYS);
      const ownedPrefixes = ["n4-", "n4.", "n4_", "n4:"];
      const toRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key) continue;
        if (key.startsWith("sb-") || key.startsWith("supabase")) continue;
        if (ownedValues.includes(key) || ownedPrefixes.some((p) => key.startsWith(p))) {
          toRemove.push(key);
        }
      }
      for (const key of toRemove) {
        try {
          localStorage.removeItem(key);
        } catch (e) {
        }
      }
    } catch (e) {
    }
  }
}
function getFingerprint() {
  const raw = [
    navigator.userAgent,
    screen.width + "x" + screen.height,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    navigator.language
  ].join("|");
  let h = 0;
  for (let i = 0; i < raw.length; i++) {
    h = (h << 5) - h + raw.charCodeAt(i);
    h |= 0;
  }
  return h.toString(36);
}
async function submitBugToCloud(bugReport) {
  const { data: { user } } = await supabase.auth.getUser().catch(() => ({ data: { user: null } }));
  const fingerprint = getFingerprint();
  if (!user) {
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const { count, error: countErr } = await supabase.from("bug_reports").select("*", { count: "exact", head: true }).eq("fingerprint", fingerprint).gte("created_at", today + "T00:00:00Z");
    if (!countErr && count >= 10) {
      throw new Error("Đã đạt giới hạn 10 báo lỗi/ngày. Đăng nhập để gửi thêm.");
    }
  }
  let screenshot = bugReport.screenshot || null;
  if (screenshot && screenshot.length > 5e5) {
    screenshot = null;
  }
  const row = {
    id: bugReport.id,
    user_id: (user == null ? void 0 : user.id) || null,
    severity: bugReport.severity || null,
    category: bugReport.category || null,
    description: bugReport.description,
    expected: bugReport.expected || null,
    steps: bugReport.steps || null,
    context: bugReport.context || null,
    detected_issues: bugReport.detectedIssues || null,
    screenshot,
    status: "open",
    fingerprint
  };
  const { error } = await supabase.from("bug_reports").insert(row);
  if (error) throw new Error("Lỗi khi gửi: " + error.message);
  return { status: "success", id: bugReport.id };
}
let _lastAutoBackupSig = null;
try {
  _lastAutoBackupSig = typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE_KEYS.AUTO_BACKUP_SIGNATURE) || null : null;
} catch (e) {
}
const LEASE_KEY = "n4:sync-leader:v1";
const LEASE_MS = 12e3;
const RENEW_MS = 4e3;
const TAB_ID = ((_b = (_a = globalThis.crypto) == null ? void 0 : _a.randomUUID) == null ? void 0 : _b.call(_a)) || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
let leader = false;
let timer = null;
let listener = null;
function readLease() {
  try {
    return JSON.parse(localStorage.getItem(LEASE_KEY) || "null");
  } catch (e) {
    return null;
  }
}
function writeLease(now = Date.now()) {
  localStorage.setItem(LEASE_KEY, JSON.stringify({ tabId: TAB_ID, expiresAt: now + LEASE_MS }));
}
function tryAcquireSyncLeadership(now = Date.now()) {
  if (typeof localStorage === "undefined") return true;
  const lease = readLease();
  if (!lease || lease.expiresAt <= now || lease.tabId === TAB_ID) {
    writeLease(now);
    const confirmed = readLease();
    return (confirmed == null ? void 0 : confirmed.tabId) === TAB_ID;
  }
  return false;
}
function isSyncLeader() {
  return leader;
}
function evaluate(onChange2) {
  const next = tryAcquireSyncLeadership();
  if (next !== leader) {
    leader = next;
    onChange2 == null ? void 0 : onChange2(leader);
  }
}
function startSyncLeadership(onChange2) {
  stopSyncLeadership();
  listener = (event) => {
    if (event.key === LEASE_KEY) evaluate(onChange2);
  };
  window.addEventListener("storage", listener);
  evaluate(onChange2);
  timer = window.setInterval(() => evaluate(onChange2), RENEW_MS);
  return stopSyncLeadership;
}
function stopSyncLeadership() {
  if (timer) window.clearInterval(timer);
  timer = null;
  if (listener) window.removeEventListener("storage", listener);
  listener = null;
  if (leader) {
    const lease = readLease();
    if ((lease == null ? void 0 : lease.tabId) === TAB_ID) localStorage.removeItem(LEASE_KEY);
  }
  leader = false;
}
let _autoBackupInFlight = false;
let _autoBackupPending = false;
let _realtimeUserDataChannel = null;
let _realtimeUserId = null;
let _realtimeApplyTimer = null;
let _realtimeApplyInFlight = false;
let _realtimeHealthy = false;
let _desiredRealtimeUserId = null;
let _leadershipStarted = false;
const ADAPTIVE_SEMI_IDLE_MS = 30 * 1e3;
const ADAPTIVE_DEEP_IDLE_MS = 5 * 60 * 1e3;
const ADAPTIVE_SEMI_IDLE_DELAY = 10 * 1e3;
const ADAPTIVE_DEEP_IDLE_DELAY = 30 * 1e3;
let _adaptivePullTimer = null;
let _adaptiveActiveInterval = 2e3;
let _adaptiveListenersWired = false;
let _heartbeatTimer = null;
function stopRealtimeCloudSync() {
  if (_realtimeUserDataChannel) {
    _realtimeUserDataChannel.unsubscribe();
    _realtimeUserDataChannel = null;
  }
  _realtimeHealthy = false;
  _realtimeUserId = null;
  if (_realtimeApplyTimer) {
    clearTimeout(_realtimeApplyTimer);
    _realtimeApplyTimer = null;
  }
}
function openRealtimeCloudSync(userId) {
  if (!userId) return;
  if (_realtimeUserDataChannel && _realtimeUserId === userId) return;
  stopRealtimeCloudSync();
  startEconomySpendWatcher();
  startSettingsChangeWatcher();
  _realtimeUserId = userId;
  _realtimeUserDataChannel = supabase.channel(`user-data-live:${userId}`).on(
    "postgres_changes",
    {
      event: "*",
      schema: "public",
      table: "user_data",
      filter: `user_id=eq.${userId}`
    },
    (payload) => {
      const candidate = (payload == null ? void 0 : payload.new) || (payload == null ? void 0 : payload.old) || null;
      if (!candidate) return;
      try {
        syncLog("realtime: payload", { userId, event: (payload == null ? void 0 : payload.event) || "", candidateUpdatedAt: candidate.updated_at });
      } catch (e) {
      }
      if (Date.now() < _resetProtectedUntil) {
        try {
          syncLog("realtime: blocked by _resetProtectedUntil", { _resetProtectedUntil });
        } catch (e) {
        }
        return;
      }
      try {
        const sessionProtected = parseInt(sessionStorage.getItem("n4-reset-protected-until") || "0");
        if (Date.now() < sessionProtected) {
          try {
            syncLog("realtime: blocked by sessionProtected", { sessionProtected });
          } catch (e) {
          }
          return;
        }
      } catch (e) {
      }
      const cloudRow = candidate.data ? { ...candidate.data, updated_at: candidate.updated_at } : candidate;
      const remoteTs = candidate.updated_at || cloudRow.updated_at || null;
      const lastSyncAt = useAppStore.getState().lastSyncAt || null;
      if (lastSyncAt && remoteTs && new Date(remoteTs) <= new Date(lastSyncAt)) {
        try {
          syncLog("realtime: skip older_or_equal", { remoteTs, lastSyncAt });
        } catch (e) {
        }
        return;
      }
      let cloudWeight = 0, localWeight = 0;
      try {
        cloudWeight = computeDataWeight(cloudRow);
      } catch (e) {
      }
      try {
        localWeight = computeDataWeight(collectLocalData());
      } catch (e) {
      }
      try {
        syncLog("realtime: scheduling apply", { remoteTs, lastSyncAt, cloudWeight, localWeight });
      } catch (e) {
      }
      if (_realtimeApplyTimer) clearTimeout(_realtimeApplyTimer);
      _realtimeApplyTimer = setTimeout(() => {
        _realtimeApplyTimer = null;
        try {
          try {
            syncLog("realtime: applying payload", { remoteTs });
          } catch (e) {
          }
          restoreFromCloud(cloudRow);
          useAppStore.setState({ lastSyncAt: remoteTs || (/* @__PURE__ */ new Date()).toISOString() });
          persistCurrentSignature();
          emitSyncEvent("pull");
        } catch (e) {
          try {
            syncLog("realtime: direct apply failed, falling back to fetch", (e == null ? void 0 : e.message) || e);
          } catch (e2) {
          }
          applyRealtimeCloudUpdate(userId).catch(() => {
          });
        }
      }, 120);
    }
  ).subscribe((status) => {
    if (status === "SUBSCRIBED") {
      _realtimeHealthy = true;
      if (_adaptivePullTimer) clearTimeout(_adaptivePullTimer);
      _adaptivePullTimer = null;
    }
    if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
      _realtimeHealthy = false;
      _scheduleAdaptivePull();
      console.warn("[Sync] Realtime channel error:", status);
    }
  });
}
function ensureSyncLeadership() {
  if (_leadershipStarted || typeof window === "undefined") return;
  _leadershipStarted = true;
  startSyncLeadership((active) => {
    if (active) {
      if (_desiredRealtimeUserId) openRealtimeCloudSync(_desiredRealtimeUserId);
      if (_adaptiveActiveInterval > 0) _scheduleAdaptivePull();
    } else {
      stopRealtimeCloudSync();
      if (_adaptivePullTimer) clearTimeout(_adaptivePullTimer);
      _adaptivePullTimer = null;
      stopHeartbeat();
    }
  });
}
function startRealtimeCloudSync(userId) {
  _desiredRealtimeUserId = userId || null;
  ensureSyncLeadership();
  if (isSyncLeader() && userId) openRealtimeCloudSync(userId);
}
async function applyRealtimeCloudUpdate(userId) {
  if (!userId || _realtimeApplyInFlight) return;
  if (Date.now() < _resetProtectedUntil) return;
  _realtimeApplyInFlight = true;
  try {
    const { data: cloudRow, error } = await supabase.from("user_data").select("*").eq("user_id", userId).maybeSingle();
    if (error || !cloudRow) return;
    const lastSyncAt = useAppStore.getState().lastSyncAt || null;
    if (lastSyncAt && cloudRow.updated_at && new Date(cloudRow.updated_at) <= new Date(lastSyncAt)) return;
    restoreFromCloud(cloudRow);
    useAppStore.setState({ lastSyncAt: cloudRow.updated_at || (/* @__PURE__ */ new Date()).toISOString() });
    persistCurrentSignature();
    emitSyncEvent("pull");
    emitSyncEvent("remote-update", { at: cloudRow.updated_at || null });
  } finally {
    _realtimeApplyInFlight = false;
  }
}
function _adaptivePullDelayMs() {
  var _a2;
  try {
    if (!isSyncLeader()) return null;
    if (_realtimeHealthy) return null;
    if (typeof document !== "undefined" && document.hidden) return null;
    if (typeof navigator !== "undefined" && navigator.onLine === false) return null;
    const lastEconomyIso = (_a2 = useLearningStore.getState()) == null ? void 0 : _a2.lastEconomyChangeAt;
    const last = toMs(lastEconomyIso);
    const idle = last > 0 ? Date.now() - last : Infinity;
    if (idle < ADAPTIVE_SEMI_IDLE_MS) return _adaptiveActiveInterval;
    if (idle < ADAPTIVE_DEEP_IDLE_MS) return ADAPTIVE_SEMI_IDLE_DELAY;
    return ADAPTIVE_DEEP_IDLE_DELAY;
  } catch (e) {
    return _adaptiveActiveInterval;
  }
}
function _adaptivePullTick() {
  const tickImpl = async () => {
    if (_autoBackupInFlight) {
      _autoBackupPending = true;
      return;
    }
    _autoBackupInFlight = true;
    _autoBackupPending = false;
    try {
      await pullFromCloudIfNewer();
    } catch (e) {
      if (((e == null ? void 0 : e.message) || "").includes("Chưa đăng nhập")) {
        stopAutoBackup();
        _autoBackupInFlight = false;
        _autoBackupPending = false;
        return;
      }
    } finally {
      _autoBackupInFlight = false;
      if (_autoBackupPending) {
        _autoBackupPending = false;
        pullFromCloudIfNewer().catch(() => {
        });
      }
    }
  };
  tickImpl().finally(() => {
    if (_adaptivePullTimer !== null || _adaptiveActiveInterval > 0) _scheduleAdaptivePull();
  });
}
function _scheduleAdaptivePull() {
  if (_adaptivePullTimer) {
    clearTimeout(_adaptivePullTimer);
    _adaptivePullTimer = null;
  }
  const delay = _adaptivePullDelayMs();
  if (delay === null) return;
  _adaptivePullTimer = setTimeout(_adaptivePullTick, delay);
}
function _wireAdaptiveListenersOnce() {
  if (_adaptiveListenersWired) return;
  if (typeof window === "undefined" || typeof document === "undefined") return;
  _adaptiveListenersWired = true;
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      syncLog("adaptive-pull: resume (visible)");
      _scheduleAdaptivePull();
    } else {
      if (_adaptivePullTimer) {
        clearTimeout(_adaptivePullTimer);
        _adaptivePullTimer = null;
      }
      syncLog("adaptive-pull: paused (hidden)");
    }
  });
  window.addEventListener("online", () => {
    syncLog("adaptive-pull: online — resuming + flushing retry queue");
    emitSyncEvent("online");
    _scheduleAdaptivePull();
    flushPendingRetryIfAny("online");
  });
  window.addEventListener("offline", () => {
    if (_adaptivePullTimer) {
      clearTimeout(_adaptivePullTimer);
      _adaptivePullTimer = null;
    }
    emitSyncEvent("offline");
    syncLog("adaptive-pull: paused (offline)");
  });
  const _markPendingOnUnload = () => {
    if (_economyImmediatePushTimer || _pushPending || _economyImmediatePushInFlight) {
      queuePushRetry({ message: "pending-on-unload" });
    }
  };
  window.addEventListener("pagehide", _markPendingOnUnload);
  window.addEventListener("beforeunload", _markPendingOnUnload);
}
async function pullFromCloudIfNewer() {
  if (Date.now() < _resetProtectedUntil) {
    try {
      syncLog("pullFromCloudIfNewer: blocked by _resetProtectedUntil", { _resetProtectedUntil });
    } catch (e) {
    }
    return;
  }
  try {
    const sessionProtected = parseInt(sessionStorage.getItem("n4-reset-protected-until") || "0");
    if (Date.now() < sessionProtected) {
      try {
        syncLog("pullFromCloudIfNewer: blocked by sessionProtected", { sessionProtected });
      } catch (e) {
      }
      return;
    }
  } catch (e) {
  }
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Chưa đăng nhập");
  const localLast = useAppStore.getState().lastSyncAt || null;
  const localTs = localLast ? new Date(localLast).getTime() : 0;
  const { data: cloudRow, error } = await supabase.from("user_data").select("*").eq("user_id", user.id).maybeSingle();
  if (error) throw new Error("Lỗi khi kiểm tra cloud: " + error.message);
  if (!cloudRow) return;
  const cloudTs = cloudRow.updated_at ? new Date(cloudRow.updated_at).getTime() : 0;
  try {
    const cw = computeDataWeight(cloudRow);
    const lw = computeDataWeight(collectLocalData());
    syncLog("pullFromCloudIfNewer: fetched cloudRow", { cloudUpdatedAt: cloudRow.updated_at, cloudWeight: cw, localWeight: lw });
  } catch (e) {
  }
  restoreFromCloud(cloudRow);
  useAppStore.setState({ lastSyncAt: cloudRow.updated_at || (/* @__PURE__ */ new Date()).toISOString() });
  persistCurrentSignature();
  if (cloudTs > localTs) emitSyncEvent("pull");
}
const HEARTBEAT_INTERVAL_MS = 5 * 60 * 1e3;
function startHeartbeat() {
  if (_heartbeatTimer) return;
  _heartbeatTimer = setInterval(async () => {
    try {
      if (typeof document !== "undefined" && document.hidden) return;
      if (typeof navigator !== "undefined" && navigator.onLine === false) return;
      const user = useAppStore.getState().user;
      if (!(user == null ? void 0 : user.id)) return;
      await syncProfileStats(user.id, buildProfileStatsPayload());
      syncLog("heartbeat: pushed profile stats");
    } catch (e) {
    }
  }, HEARTBEAT_INTERVAL_MS);
}
function stopHeartbeat() {
  if (_heartbeatTimer) {
    clearInterval(_heartbeatTimer);
    _heartbeatTimer = null;
  }
}
function isAutoBackupRunning() {
  return _adaptivePullTimer !== null;
}
function stopAutoBackup() {
  if (_adaptivePullTimer) {
    clearTimeout(_adaptivePullTimer);
    _adaptivePullTimer = null;
  }
  _adaptiveActiveInterval = 0;
  stopHeartbeat();
}
function startAutoBackup(intervalMs = 2e3) {
  const active = Math.max(Number(intervalMs) || 2e3, 2e3);
  if (_adaptivePullTimer && _adaptiveActiveInterval === active) return;
  if (_adaptivePullTimer) {
    clearTimeout(_adaptivePullTimer);
    _adaptivePullTimer = null;
  }
  _adaptiveActiveInterval = active;
  _wireAdaptiveListenersOnce();
  ensureSyncLeadership();
  if (isSyncLeader()) {
    setTimeout(() => _adaptivePullTick(), 1500);
  }
  if (isSyncLeader()) {
    startHeartbeat();
    flushPendingRetryIfAny("startAutoBackup");
  }
}
if (typeof window !== "undefined") {
  window.addEventListener("n4:sync:stop-realtime", () => {
    _desiredRealtimeUserId = null;
    stopRealtimeCloudSync();
    stopSyncLeadership();
    _leadershipStarted = false;
  });
  window.addEventListener("n4:sync:stop-autobackup", () => {
    stopAutoBackup();
  });
  window.addEventListener("n4:sync:start-autobackup", () => {
    startAutoBackup();
  });
}
function resetAccountScopedStores() {
  forgetLearningOwner();
  useLearningStore.setState(createResetLearningState());
  useGameStore.setState({
    activeTrainer: null,
    activeMode: null,
    score: 0,
    total: 0,
    timeElapsed: 0
  });
  useNPCStore.setState({
    npcs: {},
    scenePresence: {},
    sessions: {},
    activeSessionId: null,
    memorySummaries: {},
    scheduler: { running: false, tick: 0, lastRunAt: null }
  });
  const appStore = useAppStore.getState();
  resetAppStoreToDefaults(appStore);
  useAppStore.setState({
    user: null,
    lastSyncAt: null,
    autoBackupEnabled: false
  });
}
async function logoutAndClearAccount() {
  await finalizePushAndClearLocal();
  resetAccountScopedStores();
  await signOut();
}
let cachedResult = null;
let cachedUid = null;
function useIsAdmin() {
  const user = useAppStore((s) => s.user);
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (!isSupabaseConfigured) {
      setIsAdmin(false);
      setLoading(false);
      return;
    }
    if (!(user == null ? void 0 : user.id)) {
      setIsAdmin(false);
      setLoading(false);
      return;
    }
    if (cachedUid === user.id && cachedResult !== null) {
      setIsAdmin(cachedResult);
      setLoading(false);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const { data, error } = await supabase.rpc("is_current_user_admin");
        if (error) throw error;
        if (!cancelled) {
          const admin = data === true;
          cachedResult = admin;
          cachedUid = user.id;
          setIsAdmin(admin);
        }
      } catch (e) {
        if (!cancelled) setIsAdmin(false);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user == null ? void 0 : user.id]);
  return { isAdmin, loading };
}
async function getAnnouncements() {
  const { data, error } = await supabase.from("announcements").select("*").order("priority", { ascending: false }).order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
async function getUnreadAnnouncements(userId) {
  const { data: all, error: e1 } = await supabase.from("announcements").select("*").order("created_at", { ascending: false });
  if (e1) throw e1;
  const { data: reads, error: e2 } = await supabase.from("announcement_reads").select("announcement_id").eq("user_id", userId);
  if (e2) throw e2;
  const readSet = new Set((reads || []).map((r) => r.announcement_id));
  return (all || []).filter((a) => !readSet.has(a.id));
}
async function markAsRead(userId, announcementId) {
  const { error } = await supabase.from("announcement_reads").upsert({ user_id: userId, announcement_id: announcementId }, { onConflict: "user_id,announcement_id" });
  if (error) console.warn("[Announcements] mark read failed:", error.message);
}
async function createAnnouncement(authorId, { title, content: content2, type = "info", priority = 0, targetRole = "all", expiresAt = null }) {
  const { data, error } = await supabase.from("announcements").insert({
    author_id: authorId,
    title,
    content: content2,
    type,
    priority,
    target_role: targetRole,
    expires_at: expiresAt
  }).select().single();
  if (error) throw error;
  return data;
}
async function updateAnnouncement(id, fields) {
  const { data, error } = await supabase.from("announcements").update(fields).eq("id", id).select().single();
  if (error) throw error;
  return data;
}
async function deleteAnnouncement(id) {
  const { error } = await supabase.from("announcements").delete().eq("id", id);
  if (error) throw error;
}
async function getConversations(userId) {
  const { data, error } = await supabase.from("messages").select("*").or(`sender_id.eq.${userId},receiver_id.eq.${userId}`).order("created_at", { ascending: false });
  if (error) throw error;
  const convMap = {};
  for (const msg of data || []) {
    const partnerId = msg.sender_id === userId ? msg.receiver_id : msg.sender_id;
    if (!convMap[partnerId]) {
      convMap[partnerId] = { partnerId, messages: [], unread: 0, lastMessage: msg };
    }
    convMap[partnerId].messages.push(msg);
    if (msg.receiver_id === userId && !msg.read_at) {
      convMap[partnerId].unread++;
    }
  }
  const partnerIds = Object.keys(convMap);
  if (partnerIds.length > 0) {
    const { data: profiles } = await supabase.from("public_user_profiles").select("id, display_name, avatar_url").in("id", partnerIds);
    const profileMap = {};
    for (const p of profiles || []) profileMap[p.id] = p;
    for (const conv of Object.values(convMap)) {
      const profile = profileMap[conv.partnerId];
      conv.partnerName = (profile == null ? void 0 : profile.display_name) || "User";
      conv.partnerAvatar = (profile == null ? void 0 : profile.avatar_url) || null;
    }
  }
  return Object.values(convMap).sort(
    (a, b) => new Date(b.lastMessage.created_at) - new Date(a.lastMessage.created_at)
  );
}
async function getMessages(userId, partnerId) {
  const { data, error } = await supabase.from("messages").select("*").or(
    `and(sender_id.eq.${userId},receiver_id.eq.${partnerId}),and(sender_id.eq.${partnerId},receiver_id.eq.${userId})`
  ).order("created_at", { ascending: true });
  if (error) throw error;
  return data || [];
}
async function sendMessage(senderId, receiverId, content2) {
  const { data, error } = await supabase.from("messages").insert({ sender_id: senderId, receiver_id: receiverId, content: content2 }).select().single();
  if (error) throw error;
  return data;
}
async function markMessagesRead(userId, senderId) {
  const { error } = await supabase.from("messages").update({ read_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("receiver_id", userId).eq("sender_id", senderId).is("read_at", null);
  if (error) console.warn("[Messages] mark read failed:", error.message);
}
async function deleteConversation(userId, partnerId) {
  const { error } = await supabase.from("messages").delete().or(
    `and(sender_id.eq.${userId},receiver_id.eq.${partnerId}),and(sender_id.eq.${partnerId},receiver_id.eq.${userId})`
  );
  if (error) throw error;
}
async function adminDeleteConversation(userA, userB) {
  const { error, count } = await supabase.from("messages").delete({ count: "exact" }).or(
    `and(sender_id.eq.${userA},receiver_id.eq.${userB}),and(sender_id.eq.${userB},receiver_id.eq.${userA})`
  );
  if (error) throw error;
  if (count === 0) throw new Error("Không xóa được tin nhắn nào (có thể do quyền RLS).");
}
async function getUnreadCount(userId) {
  const { count, error } = await supabase.from("messages").select("*", { count: "exact", head: true }).eq("receiver_id", userId).is("read_at", null);
  if (error) return 0;
  return count || 0;
}
async function getUnreadCounts(userId) {
  if (!userId) return { announcements: 0, messages: 0, challenges: 0 };
  try {
    const { data, error } = await supabase.rpc("get_unread_counts");
    if (!error && data) return data;
  } catch (e) {
  }
  try {
    const [annData, msgCount] = await Promise.all([
      getUnreadAnnouncements(userId).catch(() => []),
      getUnreadCount(userId).catch(() => 0)
    ]);
    const { count: chalCount } = await supabase.from("quiz_challenges").select("*", { count: "exact", head: true }).lte("starts_at", (/* @__PURE__ */ new Date()).toISOString()).gt("ends_at", (/* @__PURE__ */ new Date()).toISOString());
    return {
      announcements: Array.isArray(annData) ? annData.length : 0,
      messages: msgCount || 0,
      challenges: chalCount || 0
    };
  } catch (e) {
    return { announcements: 0, messages: 0, challenges: 0 };
  }
}
async function getRecentNotifications(userId) {
  if (!userId) return { announcements: [], messages: [], challenges: [] };
  try {
    const [annResult, msgResult, chalResult] = await Promise.all([
      supabase.from("announcements").select("id, title, type, created_at").order("created_at", { ascending: false }).limit(3),
      supabase.from("messages").select("id, sender_id, content, created_at, read_at").eq("receiver_id", userId).order("created_at", { ascending: false }).limit(3),
      supabase.from("quiz_challenges").select("id, title, starts_at, ends_at").lte("starts_at", (/* @__PURE__ */ new Date()).toISOString()).gt("ends_at", (/* @__PURE__ */ new Date()).toISOString()).order("created_at", { ascending: false }).limit(3)
    ]);
    return {
      announcements: annResult.data || [],
      messages: msgResult.data || [],
      challenges: chalResult.data || []
    };
  } catch (e) {
    return { announcements: [], messages: [], challenges: [] };
  }
}
const POLL_INTERVAL = 3e4;
const ZERO_COUNTS = Object.freeze({ announcements: 0, messages: 0, challenges: 0 });
let activeSubscribers = 0;
let activeUserId = null;
let pollTimerId = null;
let pollInFlight = false;
let visibilityHandler = null;
let snapshot = {
  counts: ZERO_COUNTS,
  recent: null,
  notifLoading: false,
  clearing: false
};
const listeners = /* @__PURE__ */ new Set();
function normalizeCounts(value) {
  return {
    announcements: Number(value == null ? void 0 : value.announcements) || 0,
    messages: Number(value == null ? void 0 : value.messages) || 0,
    challenges: Number(value == null ? void 0 : value.challenges) || 0
  };
}
function normalizeRecent(value) {
  return {
    announcements: Array.isArray(value == null ? void 0 : value.announcements) ? value.announcements : [],
    messages: Array.isArray(value == null ? void 0 : value.messages) ? value.messages : [],
    challenges: Array.isArray(value == null ? void 0 : value.challenges) ? value.challenges : []
  };
}
function emitChange() {
  listeners.forEach((listener2) => listener2());
}
function updateSnapshot(patch) {
  snapshot = { ...snapshot, ...patch };
  emitChange();
}
function clearPollTimer() {
  if (pollTimerId != null) {
    window.clearTimeout(pollTimerId);
    pollTimerId = null;
  }
}
function detachVisibilityHandler() {
  if (visibilityHandler && typeof document !== "undefined") {
    document.removeEventListener("visibilitychange", visibilityHandler);
  }
  visibilityHandler = null;
}
function resetSnapshot() {
  snapshot = {
    counts: ZERO_COUNTS,
    recent: null,
    notifLoading: false,
    clearing: false
  };
  emitChange();
}
function stopPolling() {
  clearPollTimer();
  pollInFlight = false;
  activeUserId = null;
  detachVisibilityHandler();
  resetSnapshot();
}
async function refreshCountsInternal(userId = activeUserId) {
  if (!userId) {
    updateSnapshot({ counts: ZERO_COUNTS });
    return ZERO_COUNTS;
  }
  let counts = ZERO_COUNTS;
  try {
    counts = normalizeCounts(await getUnreadCounts(userId));
  } catch (e) {
    counts = ZERO_COUNTS;
  }
  if (activeUserId === userId) {
    updateSnapshot({ counts });
  }
  return counts;
}
function scheduleNextPoll(userId = activeUserId) {
  clearPollTimer();
  if (!userId) return;
  pollTimerId = window.setTimeout(() => {
    void runPoll(userId);
  }, POLL_INTERVAL);
}
async function runPoll(userId = activeUserId) {
  if (!userId || activeUserId !== userId) return;
  if (typeof document !== "undefined" && document.visibilityState === "hidden") {
    scheduleNextPoll(userId);
    return;
  }
  if (pollInFlight) {
    scheduleNextPoll(userId);
    return;
  }
  pollInFlight = true;
  try {
    await refreshCountsInternal(userId);
  } finally {
    pollInFlight = false;
    if (activeUserId === userId) {
      scheduleNextPoll(userId);
    }
  }
}
function startPolling(userId) {
  if (!userId) {
    stopPolling();
    return;
  }
  if (activeUserId !== userId) {
    activeUserId = userId;
    clearPollTimer();
    pollInFlight = false;
    updateSnapshot({ counts: ZERO_COUNTS, recent: null, notifLoading: false, clearing: false });
    detachVisibilityHandler();
    if (typeof document !== "undefined") {
      visibilityHandler = () => {
        if (activeUserId === userId && document.visibilityState === "visible") {
          void runPoll(userId);
        }
      };
      document.addEventListener("visibilitychange", visibilityHandler, { passive: true });
    }
    void runPoll(userId);
    return;
  }
  if (!pollTimerId && !pollInFlight) {
    void runPoll(userId);
  }
}
function subscribe(listener2) {
  listeners.add(listener2);
  return () => {
    listeners.delete(listener2);
  };
}
function getSnapshot() {
  return snapshot;
}
function useNotificationSummary(userId) {
  const state = reactExports.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  reactExports.useEffect(() => {
    activeSubscribers += 1;
    if (userId) {
      startPolling(userId);
    } else if (activeSubscribers === 1) {
      stopPolling();
    }
    return () => {
      activeSubscribers = Math.max(0, activeSubscribers - 1);
      if (activeSubscribers === 0) {
        stopPolling();
      }
    };
  }, [userId]);
  const loadRecent = reactExports.useCallback(async () => {
    if (!userId) {
      const empty = normalizeRecent();
      updateSnapshot({ recent: empty, notifLoading: false });
      return empty;
    }
    updateSnapshot({ notifLoading: true });
    try {
      const recent = normalizeRecent(await getRecentNotifications(userId));
      if (activeUserId === userId) {
        updateSnapshot({ recent });
      }
      return recent;
    } catch (e) {
      const empty = normalizeRecent();
      if (activeUserId === userId) {
        updateSnapshot({ recent: empty });
      }
      return empty;
    } finally {
      if (activeUserId === userId) {
        updateSnapshot({ notifLoading: false });
      }
    }
  }, [userId]);
  const markAllRead = reactExports.useCallback(async () => {
    const currentRecent = snapshot.recent;
    if (!userId || !currentRecent) return ZERO_COUNTS;
    updateSnapshot({ clearing: true });
    try {
      const announcementJobs = (currentRecent.announcements || []).map((item) => markAsRead(userId, item.id));
      const senderIds = [...new Set((currentRecent.messages || []).filter((item) => !item.read_at).map((item) => item.sender_id))];
      const messageJobs = senderIds.map((senderId) => markMessagesRead(userId, senderId));
      await Promise.all([...announcementJobs, ...messageJobs]);
      const counts = await refreshCountsInternal(userId);
      if (activeUserId === userId) {
        updateSnapshot({
          counts,
          recent: {
            announcements: (currentRecent.announcements || []).map((item) => ({ ...item, _read: true })),
            messages: (currentRecent.messages || []).map((item) => ({ ...item, read_at: item.read_at || "now" })),
            challenges: currentRecent.challenges || []
          }
        });
      }
      return counts;
    } finally {
      if (activeUserId === userId) {
        updateSnapshot({ clearing: false });
      }
    }
  }, [userId]);
  const refreshCounts = reactExports.useCallback(() => refreshCountsInternal(userId), [userId]);
  return {
    counts: state.counts,
    recent: state.recent,
    notifLoading: state.notifLoading,
    clearing: state.clearing,
    loadRecent,
    markAllRead,
    refreshCounts
  };
}
function getUserErrorMessage(error, fallback = "Không thể hoàn tất thao tác. Vui lòng thử lại.") {
  const raw = typeof error === "string" ? error : error == null ? void 0 : error.message;
  const message = String(raw || "").toLowerCase();
  if (!message) return fallback;
  if (/abort|cancel/.test(message)) return "Thao tác đã được huỷ.";
  if (/network|fetch|offline|internet|failed to connect/.test(message)) return "Không thể kết nối. Hãy kiểm tra mạng rồi thử lại.";
  if (/401|403|unauth|session|jwt|login|sign in/.test(message)) return "Phiên đăng nhập không còn hợp lệ. Vui lòng đăng nhập lại.";
  if (/429|rate.?limit|quota|too many/.test(message)) return "Bạn đang thao tác quá nhanh. Vui lòng đợi một chút rồi thử lại.";
  if (/timeout|timed out/.test(message)) return "Yêu cầu mất quá nhiều thời gian. Vui lòng thử lại.";
  if (/not.?found|404/.test(message)) return "Không tìm thấy dữ liệu được yêu cầu.";
  return fallback;
}
function formatTimeSince(iso) {
  if (!iso) return null;
  const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 6e4);
  if (mins < 1) return "vừa xong";
  if (mins < 60) return mins + " phút trước";
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return hrs + " giờ trước";
  return Math.floor(hrs / 24) + " ngày trước";
}
function formatInterval(ms) {
  if (ms < 6e4) return ms / 1e3 + "s";
  return ms / 6e4 + " phút";
}
function UserMenu() {
  const user = useAppStore((s) => s.user);
  const setUser = useAppStore((s) => s.setUser);
  const lastSyncAt = useAppStore((s) => s.lastSyncAt);
  const autoBackupEnabled = useAppStore((s) => s.autoBackupEnabled);
  const setAutoBackupEnabled = useAppStore((s) => s.setAutoBackupEnabled);
  const syncInterval = useAppStore((s) => s.syncInterval) || 5e3;
  const { isAdmin } = useIsAdmin();
  const navigate = useNavigate();
  const [open, setOpen] = reactExports.useState(false);
  const [loadingOp, setLoadingOp] = reactExports.useState(null);
  const [syncMsg, setSyncMsg] = reactExports.useState(null);
  const [syncMsgTone, setSyncMsgTone] = reactExports.useState("success");
  const [loginError, setLoginError] = reactExports.useState(null);
  const [syncPulse, setSyncPulse] = reactExports.useState(false);
  const wrapRef = reactExports.useRef(null);
  const triggerRef = reactExports.useRef(null);
  const pulledForUserRef = reactExports.useRef(null);
  const syncPulseTimerRef = reactExports.useRef(null);
  const syncMsgTimerRef = reactExports.useRef(null);
  const [initialSyncDone, setInitialSyncDone] = reactExports.useState(false);
  const loading = loadingOp !== null;
  const { scheduleTimeout, clearManagedTimeout } = useManagedTimeout();
  const { counts, clearing, loadRecent, markAllRead } = useNotificationSummary(user == null ? void 0 : user.id);
  const scheduleSyncMsgClear = reactExports.useCallback((delay = 2500) => {
    clearManagedTimeout(syncMsgTimerRef.current);
    syncMsgTimerRef.current = scheduleTimeout(() => {
      setSyncMsg(null);
      syncMsgTimerRef.current = null;
    }, delay);
  }, [clearManagedTimeout, scheduleTimeout]);
  reactExports.useEffect(() => {
    const unsub = onSyncEvent(() => {
      setSyncPulse(true);
      clearManagedTimeout(syncPulseTimerRef.current);
      syncPulseTimerRef.current = scheduleTimeout(() => {
        setSyncPulse(false);
        syncPulseTimerRef.current = null;
      }, 900);
    });
    return () => {
      clearManagedTimeout(syncPulseTimerRef.current);
      syncPulseTimerRef.current = null;
      unsub == null ? void 0 : unsub();
    };
  }, [clearManagedTimeout, scheduleTimeout]);
  reactExports.useEffect(() => {
    let cancelled = false;
    async function hydrateSessionUser(sessionUser) {
      var _a2;
      if (!sessionUser) {
        if (!cancelled) setUser(null);
        return null;
      }
      const currentUserId = (_a2 = useAppStore.getState().user) == null ? void 0 : _a2.id;
      if (currentUserId && currentUserId !== sessionUser.id) {
        resetAccountScopedStores();
      }
      let profile = null;
      try {
        profile = await ensureProfile(sessionUser);
      } catch (e) {
      }
      const nextUser = buildAppUserSnapshot(sessionUser, profile);
      if (!cancelled) setUser(nextUser);
      return nextUser;
    }
    getSession().then(async (session) => {
      const u = session == null ? void 0 : session.user;
      if (u) {
        try {
          await checkBlocked(u.id);
        } catch (e) {
          if (!cancelled) {
            setUser(null);
            alert(getUserErrorMessage(e));
          }
          return;
        }
        await hydrateSessionUser(u);
        if (!pulledForUserRef.current || pulledForUserRef.current !== u.id) {
          pulledForUserRef.current = u.id;
          const justReset = sessionStorage.getItem("n4-reset-in-progress");
          if (justReset) {
            sessionStorage.removeItem("n4-reset-in-progress");
            try {
              sessionStorage.setItem("n4-reset-protected-until", String(Date.now() + 1e4));
            } catch (e) {
            }
            setInitialSyncDone(true);
          } else {
            pullThenEnableSync().finally(() => setInitialSyncDone(true));
          }
        }
        if (!cancelled) startRealtimeCloudSync(u.id);
      } else {
        stopRealtimeCloudSync$1();
        setUser(null);
      }
    });
    const unsub = onAuthChange(async (event, session) => {
      const u = session == null ? void 0 : session.user;
      if (u) {
        try {
          await checkBlocked(u.id);
        } catch (e) {
          if (!cancelled) {
            setUser(null);
            alert(getUserErrorMessage(e));
          }
          return;
        }
        await hydrateSessionUser(u);
        if (event === "SIGNED_IN" && (!pulledForUserRef.current || pulledForUserRef.current !== u.id)) {
          pulledForUserRef.current = u.id;
          logActivity(u.id, "login", { method: "google" });
          pullThenEnableSync().then(() => {
            setAutoBackupEnabled(true);
            setInitialSyncDone(true);
          }).catch(() => {
            setAutoBackupEnabled(true);
            setInitialSyncDone(true);
          });
        }
        if (!cancelled) startRealtimeCloudSync(u.id);
      } else {
        stopRealtimeCloudSync$1();
        setUser(null);
        pulledForUserRef.current = null;
      }
    });
    return () => {
      cancelled = true;
      stopRealtimeCloudSync$1();
      unsub();
    };
  }, [setAutoBackupEnabled, setUser]);
  reactExports.useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e) {
      var _a2;
      if (e.key === "Escape") {
        setOpen(false);
        (_a2 = triggerRef.current) == null ? void 0 : _a2.focus();
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);
  const timeSince = formatTimeSince(lastSyncAt);
  reactExports.useEffect(() => {
    if (!user) {
      stopRealtimeCloudSync$1();
      stopAutoBackup();
    }
  }, [user]);
  reactExports.useEffect(() => {
    if (!user || !initialSyncDone) return;
    if (!autoBackupEnabled) {
      stopAutoBackup();
      return;
    }
    startAutoBackup(syncInterval);
  }, [user, syncInterval, initialSyncDone, autoBackupEnabled]);
  const handleLogin = reactExports.useCallback(async () => {
    setLoadingOp("login");
    setLoginError(null);
    try {
      await signInWithGoogle();
    } catch (e) {
      console.error("Login failed:", e);
      const msg = (e == null ? void 0 : e.message) || String(e);
      if (msg.includes("Missing public runtime config") || msg.includes("VITE_SUPABASE")) {
        setLoginError("Chưa cấu hình server. Cần thiết lập file .env với VITE_SUPABASE_URL và VITE_SUPABASE_ANON_KEY rồi khởi động lại.");
      } else {
        setLoginError("Đăng nhập thất bại: " + msg);
      }
    } finally {
      setLoadingOp(null);
    }
  }, []);
  const handleLogout = reactExports.useCallback(async () => {
    setLoadingOp("logout");
    try {
      await logoutAndClearAccount();
      pulledForUserRef.current = null;
      setInitialSyncDone(false);
      setUser(null);
      setOpen(false);
    } catch (e) {
      console.error("Logout failed:", e);
    } finally {
      setLoadingOp(null);
    }
  }, [setUser]);
  const handleSyncNow = reactExports.useCallback(async () => {
    if (loading || !user) return;
    setLoadingOp("sync");
    setSyncMsg(null);
    try {
      const result = await syncNow();
      setSyncMsgTone((result == null ? void 0 : result.status) === "success" ? "success" : "danger");
      setSyncMsg((result == null ? void 0 : result.message) || "Đồng bộ thành công!");
      scheduleSyncMsgClear((result == null ? void 0 : result.status) === "success" ? 2500 : 3500);
    } catch (error) {
      setSyncMsgTone("danger");
      setSyncMsg((error == null ? void 0 : error.message) || String(error));
      scheduleSyncMsgClear(3500);
    } finally {
      setLoadingOp(null);
    }
  }, [loading, scheduleSyncMsgClear, user]);
  const toggleAuto = reactExports.useCallback(() => {
    if (loading) return;
    setSyncMsg(null);
    setSyncMsgTone("success");
    if (autoBackupEnabled) {
      stopAutoBackup();
      setAutoBackupEnabled(false);
      setSyncMsg("Tự động đồng bộ: Tắt");
      scheduleSyncMsgClear(2500);
      return;
    }
    startAutoBackup(syncInterval);
    setAutoBackupEnabled(true);
    setSyncMsg("Tự động đồng bộ: Bật (" + formatInterval(syncInterval) + ")");
    scheduleSyncMsgClear(2500);
  }, [loading, autoBackupEnabled, setAutoBackupEnabled, syncInterval, scheduleSyncMsgClear]);
  const avatarNode = (user == null ? void 0 : user.avatar) ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user.avatar, alt: "", referrerPolicy: "no-referrer", className: `v6-user-menu__avatar${syncPulse ? " is-syncing" : ""}` }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `v6-user-menu__avatar-placeholder${syncPulse ? " is-syncing" : ""}`, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { size: 20, strokeWidth: 1.8 }) });
  const totalNotifs = (counts.announcements || 0) + (counts.messages || 0) + (counts.challenges || 0);
  reactExports.useEffect(() => {
    if (!open || !(user == null ? void 0 : user.id)) return;
    loadRecent().catch(() => {
    });
  }, [loadRecent, open, user == null ? void 0 : user.id]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v6-user-menu", ref: wrapRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        ref: triggerRef,
        type: "button",
        className: "v6-user-menu__trigger",
        onClick: () => setOpen((prev) => !prev),
        title: user ? user.name || user.email || "Tài khoản" : "Đăng nhập",
        "aria-label": "Tài khoản",
        "aria-haspopup": "dialog",
        "aria-expanded": open,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v6-user-menu__avatar-wrap", children: [
          avatarNode,
          totalNotifs > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-user-menu__badge", children: totalNotifs > 99 ? "99+" : totalNotifs })
        ] })
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v6-user-menu__panel", role: "dialog", "aria-label": "Tài khoản", children: !user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "v6-user-menu__action", onClick: handleLogin, disabled: loading, children: [
        loadingOp === "login" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "v6-user-menu__spinner", "aria-hidden": "true" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: loadingOp === "login" ? "Đang xử lý..." : "Đăng nhập Google" })
      ] }),
      loginError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v6-user-menu__message is-danger", role: "alert", children: loginError })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v6-user-menu__identity", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v6-user-menu__avatar-wrap is-large", children: [
          avatarNode,
          totalNotifs > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-user-menu__badge", children: totalNotifs > 99 ? "99+" : totalNotifs })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v6-user-menu__identity-copy", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: user.name || user.email }),
          timeSince && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { size: 13, "aria-hidden": "true" }),
            " Đồng bộ ",
            timeSince
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: `v6-user-menu__action${loadingOp === "sync" ? " is-active" : ""}`,
          onClick: handleSyncNow,
          disabled: loading || !initialSyncDone,
          title: timeSince ? `Đồng bộ ngay · Lần cuối ${timeSince}` : "Đồng bộ ngay",
          children: [
            loadingOp === "sync" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "v6-user-menu__spinner", "aria-hidden": "true" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Đồng bộ ngay" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: `v6-user-menu__action${autoBackupEnabled ? " is-active" : ""}`,
          onClick: toggleAuto,
          disabled: loading || !initialSyncDone,
          title: `Tự động đồng bộ mỗi ${formatInterval(syncInterval)}${timeSince ? ` · Lần cuối ${timeSince}` : ""}`,
          children: [
            autoBackupEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { "aria-hidden": "true" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tự động đồng bộ" })
          ]
        }
      ),
      isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "v6-user-menu__action",
          onClick: () => {
            navigate("/admin");
            setOpen(false);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Quản trị" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "v6-user-menu__notifications", "aria-labelledby": "user-menu-notifications", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v6-user-menu__section-heading", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "user-menu-notifications", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 16, "aria-hidden": "true" }),
            " Thông báo"
          ] }),
          totalNotifs > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: markAllRead, disabled: clearing, className: "v6-user-menu__mark-read", children: [
            clearing ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "v6-user-menu__spinner", "aria-hidden": "true" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { "aria-hidden": "true" }),
            "Đánh dấu đã đọc"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v6-user-menu__notification-list", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
            navigate("/inbox?tab=announce");
            setOpen(false);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Thông báo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: counts.announcements || 0 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
            navigate("/inbox?tab=messages");
            setOpen(false);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tin nhắn" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: counts.messages || 0 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
            navigate("/inbox?tab=challenges");
            setOpen(false);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Thử thách" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: counts.challenges || 0 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "v6-user-menu__action",
          onClick: () => {
            navigate("/profile");
            setOpen(false);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Hồ sơ" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: `v6-user-menu__action is-danger${loadingOp === "logout" ? " is-active" : ""}`,
          onClick: handleLogout,
          disabled: loading,
          children: [
            loadingOp === "logout" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "v6-user-menu__spinner", "aria-hidden": "true" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Đăng xuất" })
          ]
        }
      ),
      syncMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `v6-user-menu__message is-${syncMsgTone}`, role: "status", children: syncMsg })
    ] }) })
  ] });
}
const sealUrl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20role='img'%20aria-labelledby='title'%3e%3ctitle%20id='title'%3eDấu%20triện%20N4%3c/title%3e%3crect%20x='5'%20y='5'%20width='54'%20height='54'%20rx='10'%20fill='%23c94e3d'/%3e%3cpath%20d='M18%2045V19h6l14%2017V19h8v26h-6L26%2028v17z'%20fill='%23fffcf6'/%3e%3cpath%20d='M42%2035h9v6h-9z'%20fill='%23fffcf6'/%3e%3c/svg%3e";
function BrandMark({ compact = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v5-brand", "aria-label": "N4 Keiko Atelier", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "v5-brand__seal", src: sealUrl, alt: "", width: "42", height: "42" }),
    !compact && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v5-brand__text", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "KEIKO ATELIER" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "JLPT N4 Learning OS" })
    ] })
  ] });
}
const ROLES = /* @__PURE__ */ new Set(["primary", "secondary", "quiet", "destructive"]);
function classes(role, iconOnly, className) {
  const resolvedRole = ROLES.has(role) ? role : "secondary";
  return ["v5-button", `v5-button--${resolvedRole}`, iconOnly && "v5-button--icon", className].filter(Boolean).join(" ");
}
function V5Button({ variant = "secondary", loading = false, children, className = "", disabled, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: classes(variant, false, className), disabled: disabled || loading, "aria-busy": loading || void 0, ...props, children: loading ? "Đang xử lý…" : children });
}
function V5IconButton({ label, variant = "quiet", children, className = "", ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: classes(variant, true, className), "aria-label": label, title: label, ...props, children });
}
function V5LinkButton({ variant = "quiet", className = "", children, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: classes(variant, false, className), ...props, children });
}
function PageToolbar({ title, backAction, primaryAction, secondaryActions = [], context }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "v5-page-toolbar", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-page-toolbar__leading", children: [
      backAction && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "v5-page-toolbar__back", onClick: backAction.onClick, "aria-label": `Quay lại ${backAction.label}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20, strokeWidth: 1.8, "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: backAction.label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-page-toolbar__title-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v5-page-toolbar__title", children: title }),
        context && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v5-page-toolbar__context", children: context })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-page-toolbar__actions", children: [
      secondaryActions,
      primaryAction
    ] })
  ] });
}
const ICONS$2 = { home: House, learn: BookOpen, practice: Target, world: Globe, profile: UserRound, settings: Settings };
const ICON_PROPS$2 = { size: 21, strokeWidth: 1.8 };
function DestinationLinks$1({ pathname, compact = false }) {
  var _a2;
  const active = (_a2 = getRouteContext(pathname).destination) == null ? void 0 : _a2.id;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v5-nav__items", children: PRIMARY_DESTINATIONS.map((item) => {
    const Icon = ICONS$2[item.icon];
    const selected = active === item.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: item.path, className: `v5-nav__item${selected ? " is-active" : ""}${item.id === "settings" ? " is-settings" : ""}`, "aria-label": item.label, "aria-current": selected ? "page" : void 0, title: compact ? item.label : `${item.label} (${item.shortcut})`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v5-nav__icon", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { ...ICON_PROPS$2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v5-nav__label", children: compact ? item.shortLabel : item.label }),
      !compact && /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "v5-nav__shortcut", children: item.shortcut })
    ] }, item.id);
  }) });
}
function MuteAction$1() {
  const [muted, setMutedState] = reactExports.useState(() => isMuted());
  const Icon = muted ? VolumeX : Volume2;
  const label = muted ? "Bật âm thanh" : "Tắt âm thanh";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(V5IconButton, { label, onClick: () => {
    const next = !muted;
    setMuted(next);
    if (next) stopSpeech();
    setMutedState(next);
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, strokeWidth: 1.8, "aria-hidden": "true" }) });
}
function V5Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const bottomRef = reactExports.useRef(null);
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((state) => state.setTheme);
  const user = useAppStore((state) => state.user);
  const lastSyncAt = useAppStore((state) => state.lastSyncAt);
  const context = getRouteContext(location.pathname);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    const element = bottomRef.current;
    if (!element) return void 0;
    const update = () => root.style.setProperty("--n4-mobile-nav-h", `${Math.round(element.getBoundingClientRect().height)}px`);
    update();
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(update);
    observer == null ? void 0 : observer.observe(element);
    window.addEventListener("resize", update);
    return () => {
      observer == null ? void 0 : observer.disconnect();
      window.removeEventListener("resize", update);
      root.style.removeProperty("--n4-mobile-nav-h");
    };
  }, []);
  const toolbarActions = [
    /* @__PURE__ */ jsxRuntimeExports.jsx(V5IconButton, { label: "Tìm kiếm", onClick: () => navigate("/dictionary?tab=search"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 20, strokeWidth: 1.8, "aria-hidden": "true" }) }, "search"),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "v5-toolbar-menu", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { "aria-label": "Tiện ích giao diện", title: "Tiện ích giao diện", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 20, "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-toolbar-menu__panel", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MuteAction$1, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "v5-toolbar-menu__action", onClick: () => setTheme(theme === "dark" ? "light" : "dark"), children: [
          theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 18, "aria-hidden": "true" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 18, "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Đổi giao diện" })
        ] })
      ] })
    ] }, "utilities"),
    /* @__PURE__ */ jsxRuntimeExports.jsx(UserMenu, {}, "user")
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageToolbar, { title: context.title, backAction: context.backPath ? { label: context.backLabel, onClick: () => navigate(context.backPath) } : void 0, secondaryActions: toolbarActions }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "v5-rail", "aria-label": "Điều hướng chính", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "v5-rail__brand", "aria-label": "N4 Keiko Atelier", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandMark, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DestinationLinks$1, { pathname: location.pathname }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-rail__status", "aria-label": user ? "Tài khoản đã đăng nhập" : "Chưa đăng nhập", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v5-rail__avatar", "aria-hidden": "true", children: (user == null ? void 0 : user.avatar) ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user.avatar, alt: "" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { size: 20 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v5-rail__status-copy", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: (user == null ? void 0 : user.name) || "Học viên N4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: lastSyncAt ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { size: 13 }),
            " Đã đồng bộ"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CloudOff, { size: 13 }),
            " Lưu trên thiết bị"
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "v5-bottom-nav", ref: bottomRef, "aria-label": "Điều hướng chính trên thiết bị di động", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DestinationLinks$1, { pathname: location.pathname, compact: true }) })
  ] });
}
const PRIMARY_ROUTE_LOADERS = Object.freeze({
  "/": () => __vitePreload(() => import("./WorldExperience-CQ_uhNin.js").then((n) => n.W), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0, import.meta.url),
  "/content": () => __vitePreload(() => import("./Content-D6IFEAjX.js"), true ? __vite__mapDeps([9,2,7,1,10,11]) : void 0, import.meta.url),
  "/practice": () => __vitePreload(() => import("./PracticeHub-KCYcYiCy.js"), true ? __vite__mapDeps([12,2,7,1,10,11]) : void 0, import.meta.url),
  "/world": () => __vitePreload(() => import("./WorldExperience-CQ_uhNin.js").then((n) => n.W), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0, import.meta.url),
  "/profile": () => __vitePreload(() => import("./ProfilePage-BnyYmi-j.js"), true ? __vite__mapDeps([13,2,7,1,10,11]) : void 0, import.meta.url),
  "/settings": () => __vitePreload(() => import("./Settings-OmH3_UKz.js"), true ? __vite__mapDeps([14,2,15,10,16,17,18,7,1,11]) : void 0, import.meta.url)
});
function getPrimaryRouteLoader(pathname) {
  if (pathname == null ? void 0 : pathname.startsWith("/content/")) return PRIMARY_ROUTE_LOADERS["/content"];
  return PRIMARY_ROUTE_LOADERS[pathname] || null;
}
function preloadPrimaryRoute(pathname) {
  const load = getPrimaryRouteLoader(pathname);
  return load ? load().catch(() => null) : Promise.resolve(null);
}
function schedulePrimaryRoutePreload() {
  if (typeof window === "undefined") return () => {
  };
  const run = () => PRIMARY_ROUTE_LOADERS["/"]().catch(() => null);
  if (typeof window.requestIdleCallback === "function") {
    const id2 = window.requestIdleCallback(run, { timeout: 3500 });
    return () => {
      var _a2;
      return (_a2 = window.cancelIdleCallback) == null ? void 0 : _a2.call(window, id2);
    };
  }
  const id = window.setTimeout(run, 1200);
  return () => window.clearTimeout(id);
}
const primaryRouteLoaders = PRIMARY_ROUTE_LOADERS;
const ICONS$1 = { home: House, learn: BookOpen, practice: Target, world: Globe, profile: UserRound, settings: Settings };
const ICON_PROPS$1 = { size: 21, strokeWidth: 1.8 };
function DestinationLinks({ pathname, compact = false }) {
  var _a2;
  const active = (_a2 = getRouteContext(pathname).destination) == null ? void 0 : _a2.id;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v6-nav__items", children: PRIMARY_DESTINATIONS.map((item) => {
    const Icon = ICONS$1[item.icon];
    const selected = active === item.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: item.path, onPointerEnter: () => preloadPrimaryRoute(item.path), onFocus: () => preloadPrimaryRoute(item.path), className: `v6-nav__item${selected ? " is-active" : ""}`, "aria-label": item.label, "aria-current": selected ? "page" : void 0, title: compact ? item.label : `${item.label} (${item.shortcut})`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { ...ICON_PROPS$1 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-nav__label", children: compact ? item.shortLabel : item.label }),
      !compact && /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "v6-nav__shortcut", children: item.shortcut })
    ] }, item.id);
  }) });
}
function MuteAction() {
  const [muted, setMutedState] = reactExports.useState(() => isMuted());
  const Icon = muted ? VolumeX : Volume2;
  const label = muted ? "Bật âm thanh" : "Tắt âm thanh";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { label, onClick: () => {
    const next = !muted;
    setMuted(next);
    if (next) stopSpeech();
    setMutedState(next);
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, strokeWidth: 1.8, "aria-hidden": "true" }) });
}
function V6Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const bottomRef = reactExports.useRef(null);
  const theme = useAppStore((state) => state.theme);
  const setThemeMode = useAppStore((state) => state.setThemeMode);
  const user = useAppStore((state) => state.user);
  const lastSyncAt = useAppStore((state) => state.lastSyncAt);
  const context = getRouteContext(location.pathname);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    const element = bottomRef.current;
    if (!element) return void 0;
    const update = () => {
      const navHeight = Math.round(element.getBoundingClientRect().height);
      root.style.setProperty("--n4-mobile-nav-h", `calc(${navHeight}px + max(8px, env(safe-area-inset-bottom)))`);
    };
    update();
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(update);
    observer == null ? void 0 : observer.observe(element);
    window.addEventListener("resize", update);
    return () => {
      observer == null ? void 0 : observer.disconnect();
      window.removeEventListener("resize", update);
      root.style.removeProperty("--n4-mobile-nav-h");
    };
  }, []);
  reactExports.useEffect(() => schedulePrimaryRoutePreload(), []);
  const actions = [
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { label: "Tìm kiếm", onClick: () => navigate("/dictionary?tab=search"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 20, strokeWidth: 1.8, "aria-hidden": "true" }) }, "search"),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MuteAction, {}, "mute"),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { label: theme === "dark" ? "Dùng giao diện sáng" : "Dùng giao diện tối", onClick: () => setThemeMode(theme === "dark" ? "light" : "dark"), children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 20, "aria-hidden": "true" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 20, "aria-hidden": "true" }) }, "theme"),
    /* @__PURE__ */ jsxRuntimeExports.jsx(UserMenu, {}, "user")
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageToolbar$1, { title: context.title, backAction: context.backPath ? { label: context.backLabel, onClick: () => navigate(context.backPath) } : void 0, secondaryActions: actions }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "v6-rail", "aria-label": "Điều hướng chính", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "v6-rail__brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandMark$1, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DestinationLinks, { pathname: location.pathname }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v6-rail__status", "aria-label": user ? "Tài khoản đã đăng nhập" : "Chưa đăng nhập", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-rail__avatar", "aria-hidden": "true", children: (user == null ? void 0 : user.avatar) ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user.avatar, alt: "" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { size: 20 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v6-rail__status-copy", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: (user == null ? void 0 : user.name) || "Học viên N4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: lastSyncAt ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { size: 13 }),
            " Đã đồng bộ"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CloudOff, { size: 13 }),
            " Lưu trên thiết bị"
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "v6-bottom-nav", ref: bottomRef, "aria-label": "Điều hướng chính trên thiết bị di động", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DestinationLinks, { pathname: location.pathname, compact: true }) })
  ] });
}
const ICONS = { home: House, learn: BookOpen, practice: Target, world: Globe, profile: UserRound, settings: Settings };
const ICON_PROPS = { size: 22, strokeWidth: 1.8 };
function activeDestination(pathname) {
  var _a2;
  return ((_a2 = getPrimaryDestination(pathname)) == null ? void 0 : _a2.id) || null;
}
function contextualMeta(pathname) {
  const meta = resolveRouteMeta(pathname);
  const crumbs = getRouteBreadcrumbs(pathname);
  if (meta) {
    const parent = crumbs.length > 1 ? crumbs[0] : null;
    return { ...meta, backLabel: meta.backLabel || (parent == null ? void 0 : parent.title), backPath: meta.backPath || (parent == null ? void 0 : parent.path) };
  }
  if (pathname.startsWith("/content/")) return { title: "Học", backLabel: "Học", backPath: "/content/minna" };
  if (pathname.startsWith("/trainer/")) return { title: "Buổi luyện tập", backLabel: "Luyện tập", backPath: "/practice" };
  if (pathname.startsWith("/ai-tutor")) return { title: "AI hỗ trợ học tập", backLabel: "Luyện tập", backPath: "/practice" };
  return { title: "JLPT N4", backLabel: "Hôm nay", backPath: "/" };
}
function PrimaryNavigation({ className, pathname, navRef, compact = false }) {
  const active = activeDestination(pathname);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className, ref: navRef, "aria-label": "Điều hướng chính", children: [
    !compact && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-rail-brand", to: "/", "aria-label": "JLPT N4", children: "N4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-primary-nav-items", children: PRIMARY_DESTINATIONS.map((item) => {
      const Icon = ICONS[item.icon];
      const selected = active === item.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: item.path,
          className: `n4-mobile-nav-item${selected ? " active" : ""}${item.id === "settings" ? " is-settings" : ""}`,
          "aria-current": selected ? "page" : void 0,
          "aria-label": item.label,
          title: !compact ? `${item.label} (${item.shortcut})` : void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mobile-nav-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { ...ICON_PROPS }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mobile-nav-label", children: compact ? item.shortLabel : item.label }),
            !compact && /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "n4-rail-shortcut", children: item.shortcut })
          ]
        },
        item.id
      );
    }) })
  ] });
}
function MuteToggle() {
  const [muted, setMutedState] = React.useState(() => isMuted());
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      className: "n4-btn n4-btn-icon n4-btn-ghost",
      "aria-label": muted ? "Bật âm thanh" : "Tắt âm thanh",
      title: muted ? "Bật âm thanh" : "Tắt âm thanh",
      onClick: () => {
        const next = !muted;
        setMuted(next);
        if (next) stopSpeech();
        setMutedState(next);
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: muted ? "🔇" : "🔊" })
    }
  );
}
function Navigation() {
  const visualRedesignV6 = useAppStore((state) => state.visualRedesignV6);
  const visualRedesignV5 = useAppStore((state) => state.visualRedesignV5);
  if (visualRedesignV6) return /* @__PURE__ */ jsxRuntimeExports.jsx(V6Navigation, {});
  if (visualRedesignV5) return /* @__PURE__ */ jsxRuntimeExports.jsx(V5Navigation, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LegacyNavigation, {});
}
function LegacyNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const bottomNavRef = reactExports.useRef(null);
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((state) => state.setTheme);
  const meta = contextualMeta(location.pathname);
  const destination = getPrimaryDestination(location.pathname);
  const isDestinationRoot = (destination == null ? void 0 : destination.path) === location.pathname || (destination == null ? void 0 : destination.id) === "learn" && /^\/content\/?(?:minna)?$/.test(location.pathname);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    const element = bottomNavRef.current;
    if (!element) return void 0;
    const update = () => root.style.setProperty("--n4-mobile-nav-h", `${Math.round(element.getBoundingClientRect().height)}px`);
    update();
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(update);
    observer == null ? void 0 : observer.observe(element);
    window.addEventListener("resize", update);
    return () => {
      observer == null ? void 0 : observer.disconnect();
      window.removeEventListener("resize", update);
      root.style.removeProperty("--n4-mobile-nav-h");
    };
  }, []);
  const actions = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MuteToggle, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-btn n4-btn-icon n4-btn-ghost", onClick: () => navigate("/dictionary?tab=search"), "aria-label": "Tìm kiếm", title: "Tìm kiếm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 20, strokeWidth: 1.8 }) }),
    isDestinationRoot && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-btn n4-btn-icon n4-btn-ghost", onClick: () => setTheme(theme === "dark" ? "light" : "dark"), "aria-label": "Đổi giao diện", title: "Đổi giao diện", children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 20 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 20 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(UserMenu, {})
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IOSNavBar,
      {
        title: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isDestinationRoot ? (destination == null ? void 0 : destination.label) || meta.title : meta.title }),
        largeTitle: Boolean(isDestinationRoot),
        backLabel: isDestinationRoot ? void 0 : meta.backLabel || (destination == null ? void 0 : destination.label),
        backPath: isDestinationRoot ? void 0 : meta.backPath || (destination == null ? void 0 : destination.path),
        rightActions: actions
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryNavigation, { className: "n4-desktop-rail", pathname: location.pathname }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryNavigation, { className: "n4-mobile-nav", pathname: location.pathname, navRef: bottomNavRef, compact: true })
  ] });
}
const SERVER_SECRET_KEYS = /* @__PURE__ */ new Set(["ai_api_key", "ai_provider"]);
async function getConfig(key) {
  var _a2;
  if (!isSupabaseConfigured) return null;
  const { data, error } = await supabase.from("app_config").select("value").eq("key", key).maybeSingle();
  if (error) throw error;
  return (_a2 = data == null ? void 0 : data.value) != null ? _a2 : null;
}
async function getAllConfig() {
  if (!isSupabaseConfigured) return [];
  const { data, error } = await supabase.from("app_config").select("key, value, updated_at");
  if (error) throw error;
  return data || [];
}
async function setConfig(key, value, userId) {
  assertSupabaseConfigured("App config write");
  if (SERVER_SECRET_KEYS.has(key)) {
    throw new Error("AI provider configuration must be stored in Edge Function secrets.");
  }
  const { error } = await supabase.from("app_config").upsert({
    key,
    value,
    updated_at: (/* @__PURE__ */ new Date()).toISOString(),
    updated_by: userId
  }, { onConflict: "key" });
  if (error) throw error;
}
async function deleteConfig(key) {
  assertSupabaseConfigured("App config delete");
  const { error } = await supabase.from("app_config").delete().eq("key", key);
  if (error) throw error;
}
function OfflineIndicator() {
  const [online, setOnline] = reactExports.useState(
    () => typeof navigator === "undefined" ? true : navigator.onLine
  );
  reactExports.useEffect(() => {
    const on2 = () => setOnline(true);
    const off2 = () => setOnline(false);
    window.addEventListener("online", on2);
    window.addEventListener("offline", off2);
    return () => {
      window.removeEventListener("online", on2);
      window.removeEventListener("offline", off2);
    };
  }, []);
  if (online) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "n4-offline-badge",
      title: "Không có kết nối mạng. Các tính năng ngoại tuyến vẫn hoạt động.",
      role: "status",
      children: "☁️ Ngoại tuyến"
    }
  );
}
function StreakLossCheck() {
  const { showToast } = useOverlay();
  reactExports.useEffect(() => {
    var _a2;
    try {
      const store = (_a2 = JSON.parse(safeGetItem(STORAGE_KEYS.LEARNING_STORE) || "{}")) == null ? void 0 : _a2.state;
      if (!(store == null ? void 0 : store.lastStudyDate) || !store.streak) return;
      const dateKey = (value) => {
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return String(value || "");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${date.getFullYear()}-${month}-${day}`;
      };
      const yesterday = dateKey(Date.now() - 864e5);
      const today = dateKey(Date.now());
      const lastStudyDate = dateKey(store.lastStudyDate);
      if (lastStudyDate !== today && lastStudyDate !== yesterday && store.streak > 1) {
        const timer2 = setTimeout(() => {
          showToast(
            `💪 Chuỗi ${store.streak} ngày học đã bị gián đoạn. Bắt đầu lại nào!`,
            "info",
            5e3
          );
        }, 2e3);
        return () => clearTimeout(timer2);
      }
    } catch (e) {
      console.warn("Streak check failed:", e);
    }
  }, [showToast]);
  return null;
}
function MaintenanceCheck() {
  const [maintenance, setMaintenance] = reactExports.useState(false);
  const { isAdmin, loading: adminLoading } = useIsAdmin();
  reactExports.useEffect(() => {
    getConfig("maintenance_mode").then((v) => {
      if (v === "true") setMaintenance(true);
    }).catch(() => {
    });
  }, []);
  if (!maintenance || isAdmin || adminLoading) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-maintenance-overlay", role: "alert", "aria-live": "assertive", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-maintenance-icon", children: "🔧" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Hệ thống đang bảo trì" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Vui lòng quay lại sau. Các tính năng đang được cập nhật để phục vụ bạn tốt hơn." })
  ] });
}
function PersistFailureNotice() {
  const [failed, setFailed] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onFailure = () => setFailed(true);
    window.addEventListener("n4:persist-failure", onFailure);
    return () => window.removeEventListener("n4:persist-failure", onFailure);
  }, []);
  if (!failed) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-review-error", role: "alert", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Không thể lưu thay đổi trên thiết bị này. Hãy giải phóng dung lượng hoặc xuất bản sao lưu." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: "n4-btn n4-btn-sm n4-btn-ghost",
        onClick: () => setFailed(false),
        children: "Đóng"
      }
    )
  ] });
}
function RouteEffects() {
  const location = useLocation();
  reactExports.useEffect(() => {
    safeSetItem(STORAGE_KEYS.LAST_ROUTE, location.pathname + (location.search || ""));
  }, [location.pathname, location.search]);
  reactExports.useEffect(() => {
    stopSpeech();
    if (!window._reactNavFlow) window._reactNavFlow = [];
    const now = Date.now();
    window._reactNavFlow.push({
      t: now,
      dt: now - (window._sessionStart || now),
      a: "Route → " + (location.pathname || "/")
    });
    if (window._reactNavFlow.length > 30) window._reactNavFlow.shift();
    const navigationTrigger = document.activeElement;
    const focusPageContent = (main) => {
      var _a2;
      if (!main) return false;
      const activeElement = document.activeElement;
      const focusStayedOnNavigationTrigger = activeElement === navigationTrigger && ((_a2 = navigationTrigger == null ? void 0 : navigationTrigger.matches) == null ? void 0 : _a2.call(navigationTrigger, "a[href], button"));
      const userOwnsFocus = activeElement && activeElement !== document.body && activeElement !== document.documentElement && activeElement !== main && !focusStayedOnNavigationTrigger;
      if (userOwnsFocus || document.querySelector('[aria-modal="true"]')) return true;
      if (!main.hasAttribute("tabindex")) main.setAttribute("tabindex", "-1");
      main.setAttribute("aria-label", getRouteContext(location.pathname).title);
      main.focus({ preventScroll: true });
      return true;
    };
    const frameId = requestAnimationFrame(() => {
      const main = document.querySelector(".n4-main") || document.querySelector("main");
      if (main) main.scrollTop = 0;
      else window.scrollTo(0, 0);
      focusPageContent(main);
    });
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [location.pathname]);
  reactExports.useEffect(() => {
    const handler = () => stopSpeech();
    window.addEventListener("n4-modal-close", handler);
    window.addEventListener("n4-overlay-close", handler);
    return () => {
      window.removeEventListener("n4-modal-close", handler);
      window.removeEventListener("n4-overlay-close", handler);
    };
  }, []);
  return null;
}
function useGlobalShortcuts({
  paletteOpen,
  setPaletteOpen,
  guideOpen,
  setGuideOpen,
  debugOpen,
  setDebugOpen
}) {
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    const NAV_ROUTES = PRIMARY_DESTINATIONS.map((destination) => destination.path);
    function handleKeyDown(e) {
      const tag = (e.target.tagName || "").toLowerCase();
      const isInput = tag === "input" || tag === "textarea" || tag === "select" || e.target.isContentEditable;
      if ((e.ctrlKey || e.metaKey) && e.key === "b") {
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.key === ",") {
        e.preventDefault();
        navigate("/settings");
        return;
      }
      if (isInput) return;
      if (!e.ctrlKey && !e.metaKey && !e.altKey && e.key >= "1" && e.key <= "6") {
        const route = NAV_ROUTES[parseInt(e.key) - 1];
        if (route) {
          e.preventDefault();
          navigate(route);
        }
        return;
      }
      if (e.key === "Escape") {
        if (paletteOpen) {
          setPaletteOpen(false);
          return;
        }
        if (guideOpen) {
          setGuideOpen(false);
          return;
        }
        if (useAppStore.getState().focusMode) {
          useAppStore.getState().setFocusMode(false);
          return;
        }
        if (debugOpen) {
          setDebugOpen(false);
          return;
        }
        window.dispatchEvent(new Event("n4-overlay-close"));
        return;
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [debugOpen, guideOpen, paletteOpen, navigate, setDebugOpen, setGuideOpen, setPaletteOpen]);
}
const IDLE_TIMEOUT = 5 * 60 * 1e3;
const FLUSH_INTERVAL = 60 * 1e3;
function useActiveTime() {
  const lastActivityRef = reactExports.useRef(Date.now());
  const accumulatedRef = reactExports.useRef(0);
  const isActiveRef = reactExports.useRef(true);
  reactExports.useEffect(() => {
    const markActive = () => {
      lastActivityRef.current = Date.now();
      isActiveRef.current = true;
    };
    const events = ["mousemove", "keydown", "touchstart", "scroll", "click"];
    events.forEach((e) => window.addEventListener(e, markActive, { passive: true }));
    const tickInterval = setInterval(() => {
      const now = Date.now();
      const idle = now - lastActivityRef.current;
      if (idle > IDLE_TIMEOUT) {
        isActiveRef.current = false;
      }
      if (isActiveRef.current) {
        accumulatedRef.current += 1e3;
      }
    }, 1e3);
    const flushInterval = setInterval(() => {
      const minutes = Math.floor(accumulatedRef.current / 6e4);
      if (minutes > 0) {
        if (typeof useLearningStore.getState().addActiveTime === "function") {
          useLearningStore.getState().addActiveTime(minutes);
        }
        accumulatedRef.current = accumulatedRef.current % 6e4;
      }
    }, FLUSH_INTERVAL);
    const handleUnload = () => {
      const minutes = Math.floor(accumulatedRef.current / 6e4);
      if (minutes > 0 && typeof useLearningStore.getState().addActiveTime === "function") {
        useLearningStore.getState().addActiveTime(minutes);
      }
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => {
      events.forEach((e) => window.removeEventListener(e, markActive));
      clearInterval(tickInterval);
      clearInterval(flushInterval);
      window.removeEventListener("beforeunload", handleUnload);
      handleUnload();
    };
  }, []);
}
const UI_SURFACE_SELECTOR = [
  ".ui-panel",
  ".hub-window",
  ".n4-modal",
  ".n4-panel",
  ".n4-overlay",
  ".n4-drawer",
  ".n4-card",
  ".n4-hud-menu",
  ".n4-hud-menu__drawer",
  ".n4-status-card",
  ".n4-quest-tracker",
  ".n4-hud-zone",
  '[data-ui-guard="true"]'
].join(",");
const INTERACTIVE_ATOM_SELECTOR = [
  "button",
  "a[href]",
  "input",
  "textarea",
  "select",
  "label",
  '[role="button"]',
  '[role="slider"]',
  '[role="tab"]',
  '[role="switch"]',
  '[role="menuitem"]',
  '[contenteditable="true"]'
].join(",");
const EVENTS = ["pointerdown", "mousedown", "touchstart"];
let _installCount = 0;
function stopIfUI(event) {
  const target = event.target;
  if (!target || typeof target.closest !== "function") return;
  if (target.closest(INTERACTIVE_ATOM_SELECTOR)) return;
  if (target.closest(UI_SURFACE_SELECTOR)) {
    event.stopPropagation();
  }
}
function useUIInteractionGuard() {
  reactExports.useEffect(() => {
    if (typeof document === "undefined") return void 0;
    _installCount += 1;
    const options = { capture: true, passive: true };
    if (_installCount === 1) EVENTS.forEach((name) => document.addEventListener(name, stopIfUI, options));
    return () => {
      _installCount = Math.max(0, _installCount - 1);
      if (_installCount === 0) EVENTS.forEach((name) => document.removeEventListener(name, stopIfUI, options));
    };
  }, []);
}
const LEGACY_POLL_INTERVAL_MS = 200;
const LEGACY_POLL_MAX_ATTEMPTS = 50;
const LEGACY_GLOBAL_LOAD_DEBOUNCE_MS = 250;
let legacyLastLoadAttemptAt = 0;
function hasLegacyDataReady() {
  var _a2, _b2;
  return !!((_b2 = (_a2 = window.S) == null ? void 0 : _a2.vocab) == null ? void 0 : _b2.length);
}
function useEnsureLegacyDataLoaded(loaded, loadFromLegacy) {
  const loadRef = reactExports.useRef(loadFromLegacy);
  loadRef.current = loadFromLegacy;
  reactExports.useEffect(() => {
    if (loaded) return;
    let didLoad = false;
    let attempts = 0;
    const shouldThrottleGlobalLoad = () => {
      const now = Date.now();
      if (now - legacyLastLoadAttemptAt < LEGACY_GLOBAL_LOAD_DEBOUNCE_MS) {
        return true;
      }
      legacyLastLoadAttemptAt = now;
      return false;
    };
    const tryLoad = () => {
      if (didLoad || !hasLegacyDataReady() || shouldThrottleGlobalLoad()) return false;
      didLoad = true;
      try {
        loadRef.current();
      } catch (error) {
        didLoad = false;
        console.warn("loadFromLegacy failed:", error);
      }
      return true;
    };
    if (tryLoad()) return;
    let pollId = null;
    const stopPolling2 = () => {
      if (pollId !== null) {
        clearInterval(pollId);
        pollId = null;
      }
    };
    const onReady2 = () => {
      if (tryLoad()) stopPolling2();
    };
    window.addEventListener("n4-data-ready", onReady2);
    pollId = setInterval(() => {
      attempts += 1;
      if (tryLoad() || attempts >= LEGACY_POLL_MAX_ATTEMPTS) {
        stopPolling2();
      }
    }, LEGACY_POLL_INTERVAL_MS);
    return () => {
      stopPolling2();
      window.removeEventListener("n4-data-ready", onReady2);
    };
  }, [loaded]);
}
const LOCAL_STORAGE_WARN_BYTES = 3 * 1024 * 1024;
function measureLocalStorage() {
  let bytes = 0;
  const largest = [];
  try {
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      const value = localStorage.getItem(key) || "";
      const size = (String(key).length + value.length) * 2;
      bytes += size;
      largest.push({ key, bytes: size });
    }
  } catch (e) {
    return { available: false, bytes: 0, largest: [] };
  }
  largest.sort((a, b) => b.bytes - a.bytes);
  return { available: true, bytes, largest: largest.slice(0, 10) };
}
async function reportStorageHealth() {
  var _a2, _b2;
  const local = measureLocalStorage();
  let quota = null;
  try {
    quota = await ((_b2 = (_a2 = navigator.storage) == null ? void 0 : _a2.estimate) == null ? void 0 : _b2.call(_a2));
  } catch (e) {
    quota = null;
  }
  const report = { localStorage: local, quota, at: (/* @__PURE__ */ new Date()).toISOString() };
  telemetry.emit("storageHealth", report);
  if (local.bytes >= LOCAL_STORAGE_WARN_BYTES && typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("n4:storage-warning", { detail: report }));
  }
  return report;
}
function startStorageHealthMonitor(intervalMs = 6e4) {
  const run = () => reportStorageHealth().catch(() => {
  });
  run();
  const timer2 = window.setInterval(run, Math.max(3e4, intervalMs));
  return () => window.clearInterval(timer2);
}
const PRODUCT_FEATURE_FLAGS = Object.freeze({
  studyOsV1: Object.freeze({ configKey: "feature.study_os_v1", defaultValue: true }),
  visualRedesignV5: Object.freeze({ configKey: "feature.visual_redesign_v5", defaultValue: true }),
  visualRedesignV6: Object.freeze({ configKey: "feature.visual_redesign_v6", defaultValue: true })
});
function parseBoolean(value, fallback) {
  if (value === true || value === "true" || value === "1" || value === 1) return true;
  if (value === false || value === "false" || value === "0" || value === 0) return false;
  return fallback;
}
function validateProductFeatureFlags(values = {}) {
  return Object.fromEntries(Object.entries(PRODUCT_FEATURE_FLAGS).map(([name, schema]) => [
    name,
    parseBoolean(values[name], schema.defaultValue)
  ]));
}
async function loadProductFeatureFlags() {
  const values = {};
  await Promise.all(Object.entries(PRODUCT_FEATURE_FLAGS).map(async ([name, schema]) => {
    try {
      values[name] = await getConfig(schema.configKey);
    } catch (e) {
      values[name] = schema.defaultValue;
    }
  }));
  return validateProductFeatureFlags(values);
}
function normalizeHex(value) {
  if (typeof value !== "string") return null;
  let hex = value.trim().replace(/^#/, "");
  if (/^[0-9a-f]{3}$/i.test(hex)) hex = hex.split("").map((part) => part + part).join("");
  return /^[0-9a-f]{6}$/i.test(hex) ? `#${hex.toLowerCase()}` : null;
}
function toRgb(value) {
  const hex = normalizeHex(value);
  if (!hex) return null;
  return [1, 3, 5].map((start) => Number.parseInt(hex.slice(start, start + 2), 16));
}
function channel(value) {
  const normalized = value / 255;
  return normalized <= 0.04045 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
}
function contrastRatio(foreground, background) {
  const fg = toRgb(foreground);
  const bg = toRgb(background);
  if (!fg || !bg) return 0;
  const luminance = (rgb) => 0.2126 * channel(rgb[0]) + 0.7152 * channel(rgb[1]) + 0.0722 * channel(rgb[2]);
  const a = luminance(fg);
  const b = luminance(bg);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}
function readableText(value) {
  return contrastRatio("#000000", value) >= contrastRatio("#ffffff", value) ? "#000000" : "#ffffff";
}
function mix(value, target, weight) {
  const sourceRgb = toRgb(value);
  const targetRgb = toRgb(target);
  if (!sourceRgb || !targetRgb) return null;
  const next = sourceRgb.map((part, index) => Math.round(part + (targetRgb[index] - part) * weight));
  return `#${next.map((part) => part.toString(16).padStart(2, "0")).join("")}`;
}
function deriveThemeV6Accent(value) {
  const brand = normalizeHex(value);
  if (!brand) return null;
  const onBrand = readableText(brand);
  const darkText = onBrand === "#ffffff";
  return Object.freeze({
    brand,
    brandHover: mix(brand, darkText ? "#000000" : "#ffffff", 0.14),
    brandPressed: mix(brand, darkText ? "#000000" : "#ffffff", 0.25),
    brandSoft: mix(brand, darkText ? "#ffffff" : "#000000", 0.84),
    onBrand,
    focus: brand
  });
}
const CUSTOM_PROPERTIES = Object.freeze([
  "--ui-brand",
  "--ui-brand-hover",
  "--ui-brand-pressed",
  "--ui-brand-soft",
  "--ui-on-brand",
  "--ui-focus"
]);
function clearCustomAccent(target) {
  for (const property of CUSTOM_PROPERTIES) target == null ? void 0 : target.style.removeProperty(property);
}
function applyCustomAccent(target, accent) {
  clearCustomAccent(target);
  const derived = deriveThemeV6Accent(accent);
  if (!derived) return;
  for (const [name, value] of Object.entries(derived)) target.style.setProperty(`--ui-${name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`, value);
}
function applyThemeV6ToDom(settings = {}, dom = {}) {
  const root = dom.root || document.documentElement;
  const app = dom.app || document.querySelector(".n4-app");
  const mode = resolveThemeV6Mode(settings.themeMode, settings.theme, dom.matchMedia || globalThis.matchMedia);
  const family = settings.highContrast ? "high-contrast" : normalizeThemeV6Family(settings.themeFamily || settings.themePreset);
  for (const target of [root, app]) {
    if (!target) continue;
    target.setAttribute("data-design-version", "v6");
    target.setAttribute("data-theme", mode);
    target.setAttribute("data-theme-mode", mode);
    target.setAttribute("data-theme-family", family);
    target.removeAttribute("data-preset");
    applyCustomAccent(target, settings.accent);
  }
  return { family, mode };
}
function clearThemeV6FromDom(dom = {}) {
  const root = dom.root || document.documentElement;
  const app = dom.app || document.querySelector(".n4-app");
  for (const target of [root, app]) {
    if (!target) continue;
    clearCustomAccent(target);
    target.removeAttribute("data-theme-family");
    target.removeAttribute("data-theme-mode");
  }
}
const BODY_SETTING_CLASSES = [
  "card-layout-list",
  "card-layout-compact",
  "examples-block",
  "examples-hidden",
  "nav-top",
  "minna-view-compact",
  "minna-view-expanded",
  "cb-protanopia",
  "cb-deuteranopia",
  "cb-tritanopia",
  "dyslexia-font",
  "large-touch"
];
const ROOT_STYLE_PROPERTIES = [
  "--kanji-font",
  "--n4-font-jp-override",
  "--n4-font-jp",
  "--kanji-weight",
  "--n4-fw-kanji",
  "--n4-fw-black",
  "--kanji-size",
  "--n4-fs-kanji",
  "--fz-kanji",
  "--fz-vocab",
  "--fz-grammar"
];
const APP_STYLE_PROPERTIES = [
  "--n4-accent",
  "--n4-on-accent",
  "--n4-accent-glow",
  "--n4-accent-dim",
  "--n4-density-scale",
  "--games-cols"
];
function clearClasses(element, classes2) {
  if (element) element.classList.remove(...classes2);
}
function clearProperties(element, properties) {
  for (const property of properties) element == null ? void 0 : element.style.removeProperty(property);
}
function applyAccent(appEl, accent) {
  if (!appEl || !/^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(accent || "")) return;
  let hex = accent.slice(1);
  if (hex.length === 3) hex = hex.split("").map((value) => value + value).join("");
  const red = Number.parseInt(hex.slice(0, 2), 16);
  const green = Number.parseInt(hex.slice(2, 4), 16);
  const blue = Number.parseInt(hex.slice(4, 6), 16);
  appEl.style.setProperty("--n4-accent", accent);
  appEl.style.setProperty("--n4-on-accent", getReadableTextOnColor(accent));
  appEl.style.setProperty("--n4-accent-glow", `rgba(${red},${green},${blue},0.25)`);
  appEl.style.setProperty("--n4-accent-dim", `rgba(${red},${green},${blue},0.08)`);
}
function applyPresentationSettingsToDom(settings, cosmetics = {}, dom = {}) {
  var _a2, _b2, _c, _d, _e;
  const root = dom.root || document.documentElement;
  const body = dom.body || document.body;
  const appEl = dom.appEl || document.querySelector(".n4-app") || root;
  const resolvedTheme = resolveThemeMode(settings.themeMode, settings.theme);
  clearClasses(body, BODY_SETTING_CLASSES);
  clearProperties(root, ROOT_STYLE_PROPERTIES);
  clearProperties(appEl, APP_STYLE_PROPERTIES);
  appEl.removeAttribute("data-density");
  for (const className of Array.from(appEl.classList)) {
    if (className.startsWith("n4-cardstyle-")) appEl.classList.remove(className);
  }
  root.setAttribute("data-theme", resolvedTheme);
  appEl.setAttribute("data-theme", resolvedTheme);
  root.setAttribute("data-energy-mode", settings.energyMode || "performance");
  appEl.setAttribute("data-energy-mode", settings.energyMode || "performance");
  appEl.setAttribute("data-font-scale", settings.fontScale || "M");
  if (settings.visualRedesignV6) {
    clearThemeFamilyFromDom();
    applyThemeV6ToDom({ ...settings, theme: resolvedTheme, accent: settings.customAccentEnabled ? settings.accent : null }, { root, app: appEl });
  } else {
    clearThemeV6FromDom({ root, app: appEl });
    if (settings.themePreset) applyThemeFamilyToDom(settings.themePreset, resolvedTheme, settings.accent);
    else clearThemeFamilyFromDom();
    applyAccent(appEl, settings.accent);
  }
  const scales = { compact: "0.85", comfortable: "1", spacious: "1.2" };
  appEl.style.setProperty("--n4-density-scale", scales[settings.density] || "1");
  if (settings.density) appEl.setAttribute("data-density", settings.density);
  if (settings.kanjiFont && settings.kanjiFont !== "default") {
    root.style.setProperty("--kanji-font", settings.kanjiFont);
    root.style.setProperty("--n4-font-jp-override", settings.kanjiFont);
    root.style.setProperty("--n4-font-jp", settings.kanjiFont);
  }
  if (settings.kanjiWeight) {
    root.style.setProperty("--kanji-weight", settings.kanjiWeight);
    root.style.setProperty("--n4-fw-kanji", settings.kanjiWeight);
    root.style.setProperty("--n4-fw-black", settings.kanjiWeight);
  }
  if (settings.kanjiSize) {
    root.style.setProperty("--kanji-size", `${settings.kanjiSize}rem`);
    root.style.setProperty("--n4-fs-kanji", `${settings.kanjiSize}rem`);
  }
  if (settings.fzKanji) root.style.setProperty("--fz-kanji", `${settings.fzKanji}px`);
  if (settings.fzVocab) root.style.setProperty("--fz-vocab", `${settings.fzVocab}px`);
  if (settings.fzGrammar) root.style.setProperty("--fz-grammar", `${settings.fzGrammar}px`);
  if (settings.cardLayout && settings.cardLayout !== "grid") body.classList.add(`card-layout-${settings.cardLayout}`);
  if (settings.exampleDisplay && settings.exampleDisplay !== "inline") body.classList.add(`examples-${settings.exampleDisplay}`);
  if (settings.navPosition === "top") body.classList.add("nav-top");
  if (settings.gamesCols && settings.gamesCols !== 3) appEl.style.setProperty("--games-cols", String(settings.gamesCols));
  if (settings.minnaView && settings.minnaView !== "default") body.classList.add(`minna-view-${settings.minnaView}`);
  if (settings.cbProtanopia) body.classList.add("cb-protanopia");
  if (settings.cbDeuteranopia) body.classList.add("cb-deuteranopia");
  if (settings.cbTritanopia) body.classList.add("cb-tritanopia");
  if (settings.dyslexiaFont) body.classList.add("dyslexia-font");
  if (settings.largeTouchTargets) body.classList.add("large-touch");
  const cardStyle = (_a2 = cosmetics.equippedCosmetics) == null ? void 0 : _a2.cardStyle;
  if (cardStyle && ((_b2 = cosmetics.unlockedItems) == null ? void 0 : _b2[cardStyle])) {
    appEl.classList.add(`n4-cardstyle-${cardStyle.replace("card-", "")}`);
  }
  if ((_c = globalThis.window) == null ? void 0 : _c.RD) {
    window.RD.rateJp = (_d = settings.radioRateJp) != null ? _d : 0.8;
    window.RD.rateVi = (_e = settings.radioRateVi) != null ? _e : 1;
  }
  return resolvedTheme;
}
function normalizeAccent(value) {
  if (typeof value !== "string") return null;
  const compact = value.trim().toLowerCase();
  if (/^#[0-9a-f]{6}$/.test(compact)) return compact;
  if (/^#[0-9a-f]{3}$/.test(compact)) return `#${compact.slice(1).split("").map((part) => part + part).join("")}`;
  return null;
}
function parsePersistedThemeState(rawValue) {
  if (typeof rawValue !== "string" || !rawValue) return null;
  try {
    const persisted = JSON.parse(rawValue);
    if (!(persisted == null ? void 0 : persisted.state) || typeof persisted.state !== "object" || Array.isArray(persisted.state)) return null;
    const normalized = normalizeThemeV6State(persisted.state);
    const accent = normalizeAccent(normalized.accent);
    return {
      theme: normalized.theme,
      themeMode: normalized.themeMode,
      themeFamily: normalized.themeFamily,
      themePreset: typeof normalized.themePreset === "string" ? normalized.themePreset : null,
      customAccentEnabled: Boolean(normalized.customAccentEnabled && accent),
      ...accent ? { accent } : {},
      highContrast: Boolean(normalized.highContrast),
      settingsChangedAt: typeof persisted.state.settingsChangedAt === "string" ? persisted.state.settingsChangedAt : (/* @__PURE__ */ new Date(0)).toISOString()
    };
  } catch (e) {
    return null;
  }
}
function shouldApplyPersistedThemeState(incoming, current) {
  if (!incoming) return false;
  const incomingMs = Date.parse(incoming.settingsChangedAt || "");
  const currentMs = Date.parse((current == null ? void 0 : current.settingsChangedAt) || "");
  if (!Number.isFinite(incomingMs)) return false;
  if (!Number.isFinite(currentMs)) return true;
  return incomingMs > currentMs;
}
function parsePersistedAppState(rawValue) {
  const themeState = parsePersistedThemeState(rawValue);
  if (!themeState) return null;
  try {
    const persisted = JSON.parse(rawValue);
    return { ...persisted.state, ...themeState };
  } catch (e) {
    return null;
  }
}
const AnnouncementBanner = reactExports.lazy(() => __vitePreload(() => import("./AnnouncementBanner-b2_-IvVK.js"), true ? __vite__mapDeps([19,2,1,10,7,11]) : void 0, import.meta.url));
const StudyAssist = reactExports.lazy(() => __vitePreload(() => import("./StudyAssist-BsBtjVZh.js"), true ? __vite__mapDeps([20,2,18,21,22,23,1,10,7,11,24]) : void 0, import.meta.url));
const CoinToast = reactExports.lazy(() => __vitePreload(() => import("./CoinToast-DjAhWqqV.js"), true ? __vite__mapDeps([25,2,1,10,7,11]) : void 0, import.meta.url));
const XpToast = reactExports.lazy(() => __vitePreload(() => import("./XpToast-3R5ucfHz.js"), true ? __vite__mapDeps([26,2,1,10,7,11]) : void 0, import.meta.url));
const CommandPalette = reactExports.lazy(() => __vitePreload(() => import("./CommandPalette-DTXSkZU6.js"), true ? __vite__mapDeps([27,2,28,29,3,1,16,24,17,7,10,11]) : void 0, import.meta.url));
const GuideModal = reactExports.lazy(() => __vitePreload(() => import("./GuideModal-CFFxSqKQ.js"), true ? __vite__mapDeps([30,2,28,16,1,10,7,11]) : void 0, import.meta.url));
const DebugPanel = reactExports.lazy(() => __vitePreload(() => import("./debug-panel-BoGgLiOj.js"), true ? __vite__mapDeps([31,1,2,32,22,23,10,7,11]) : void 0, import.meta.url));
function GameExitGuard() {
  const gameScore = useGameStore((s) => s.score);
  const gameTotal = useGameStore((s) => s.total);
  const activeTrainer = useGameStore((s) => s.activeTrainer);
  reactExports.useEffect(() => {
    const handler = (e) => {
      const isGameActive = activeTrainer && (gameScore > 0 || gameTotal > 0);
      if (isGameActive) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [gameScore, gameTotal, activeTrainer]);
  return null;
}
function AppShell({ children }) {
  const administrative = useLocation().pathname.startsWith("/admin");
  const [paletteOpen, setPaletteOpen] = reactExports.useState(false);
  const [debugOpen, setDebugOpen] = reactExports.useState(false);
  const [guideOpen, setGuideOpen] = reactExports.useState(false);
  const visualRedesignV5 = useAppStore((s) => s.visualRedesignV5);
  const visualRedesignV6 = useAppStore((s) => s.visualRedesignV6);
  const presentation = useAppStore(useShallow((s) => ({
    theme: s.theme,
    themeMode: s.themeMode,
    themePreset: s.themePreset,
    themeFamily: s.themeFamily,
    visualRedesignV6: s.visualRedesignV6,
    accent: s.accent,
    customAccentEnabled: s.customAccentEnabled,
    density: s.density,
    reducedMotion: s.reducedMotion,
    reducedTransparency: s.reducedTransparency,
    highContrast: s.highContrast,
    focusMode: s.focusMode,
    energyMode: s.energyMode || "performance",
    kanjiFont: s.kanjiFont,
    kanjiWeight: s.kanjiWeight,
    kanjiSize: s.kanjiSize,
    fzKanji: s.fzKanji,
    fzVocab: s.fzVocab,
    fzGrammar: s.fzGrammar,
    cardLayout: s.cardLayout,
    exampleDisplay: s.exampleDisplay,
    navPosition: s.navPosition,
    gamesCols: s.gamesCols,
    minnaView: s.minnaView,
    cbProtanopia: s.cbProtanopia,
    cbDeuteranopia: s.cbDeuteranopia,
    cbTritanopia: s.cbTritanopia,
    dyslexiaFont: s.dyslexiaFont,
    largeTouchTargets: s.largeTouchTargets,
    fontScale: s.fontScale,
    radioRateJp: s.radioRateJp,
    radioRateVi: s.radioRateVi
  })));
  const cosmetics = useLearningStore(useShallow((s) => ({
    equippedCosmetics: s.equippedCosmetics,
    unlockedItems: s.unlockedItems
  })));
  const {
    theme,
    reducedMotion,
    energyMode,
    highContrast,
    reducedTransparency,
    focusMode
  } = presentation;
  const loaded = useDataStore((s) => s.loaded);
  const loadFromLegacy = useDataStore((s) => s.loadFromLegacy);
  useEnsureLegacyDataLoaded(loaded, loadFromLegacy);
  useActiveTime();
  reactExports.useEffect(() => startStorageHealthMonitor(), []);
  reactExports.useEffect(() => {
    let active = true;
    loadProductFeatureFlags().then((flags) => {
      if (active) useAppStore.getState().applyServerFeatureFlags(flags);
    });
    return () => {
      active = false;
    };
  }, []);
  useUIInteractionGuard();
  reactExports.useEffect(() => {
    var _a2, _b2;
    const resolvedTheme = applyPresentationSettingsToDom(presentation, cosmetics);
    if (resolvedTheme !== presentation.theme) useAppStore.getState().setTheme(resolvedTheme);
    const equipped = cosmetics.equippedCosmetics || {};
    if (equipped.cardStyle && !((_a2 = cosmetics.unlockedItems) == null ? void 0 : _a2[equipped.cardStyle])) {
      useLearningStore.getState().unequipItem("cardStyle");
    }
    if (equipped.theme && !((_b2 = cosmetics.unlockedItems) == null ? void 0 : _b2[equipped.theme])) {
      useLearningStore.getState().unequipItem("theme");
    }
  }, [cosmetics, presentation]);
  reactExports.useEffect(() => {
    var _a2, _b2;
    const mq = (_a2 = window.matchMedia) == null ? void 0 : _a2.call(window, "(prefers-color-scheme: dark)");
    const handleOsThemeChange = (e) => {
      if (useAppStore.getState().themeMode === "auto") {
        useAppStore.getState().setTheme(e.matches ? "dark" : "light");
      }
    };
    (_b2 = mq == null ? void 0 : mq.addEventListener) == null ? void 0 : _b2.call(mq, "change", handleOsThemeChange);
    const openPalette = () => setPaletteOpen(true);
    const openGuide = () => setGuideOpen(true);
    const openDebugPanel = () => {
    };
    window.addEventListener("n4-open-command-palette", openPalette);
    window.addEventListener("n4-open-guide", openGuide);
    window.addEventListener("n4-open-debug-panel", openDebugPanel);
    let appStorageSyncTimer = null;
    const syncPersistedStore = (event) => {
      var _a3, _b3, _c, _d;
      if (event.key === STORAGE_KEYS.APP_STORE) {
        window.clearTimeout(appStorageSyncTimer);
        appStorageSyncTimer = window.setTimeout(() => {
          var _a4, _b4;
          const latestValue = localStorage.getItem(STORAGE_KEYS.APP_STORE) || event.newValue;
          const appPatch = parsePersistedAppState(latestValue);
          if (shouldApplyPersistedThemeState(appPatch, useAppStore.getState())) {
            if (typeof useAppStore.setStateWithoutPersist === "function") useAppStore.setStateWithoutPersist(appPatch);
            else useAppStore.setState(appPatch);
          } else if (!appPatch) (_b4 = (_a4 = useAppStore.persist) == null ? void 0 : _a4.rehydrate) == null ? void 0 : _b4.call(_a4);
        }, 250);
      } else if (event.key === null) {
        (_b3 = (_a3 = useAppStore.persist) == null ? void 0 : _a3.rehydrate) == null ? void 0 : _b3.call(_a3);
      }
      if (event.key === STORAGE_KEYS.LEARNING_STORE || event.key === null) (_d = (_c = useLearningStore.persist) == null ? void 0 : _c.rehydrate) == null ? void 0 : _d.call(_c);
    };
    window.addEventListener("storage", syncPersistedStore);
    return () => {
      var _a3;
      window.removeEventListener("n4-open-command-palette", openPalette);
      window.removeEventListener("n4-open-guide", openGuide);
      window.removeEventListener("n4-open-debug-panel", openDebugPanel);
      window.removeEventListener("storage", syncPersistedStore);
      window.clearTimeout(appStorageSyncTimer);
      (_a3 = mq == null ? void 0 : mq.removeEventListener) == null ? void 0 : _a3.call(mq, "change", handleOsThemeChange);
    };
  }, []);
  useGlobalShortcuts({
    paletteOpen,
    setPaletteOpen,
    guideOpen,
    setGuideOpen,
    debugOpen,
    setDebugOpen
  });
  reactExports.useEffect(() => {
    return void 0;
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `n4-app${administrative ? "" : " haru-world-app"}${focusMode ? " n4-focus-mode" : ""}`,
      "data-theme": theme,
      "data-energy-mode": energyMode,
      "data-reduced-motion": reducedMotion || void 0,
      "data-high-contrast": highContrast || void 0,
      "data-reduced-transparency": reducedTransparency || void 0,
      "data-font-scale": presentation.fontScale || "M",
      "data-design-version": visualRedesignV6 ? "v6" : visualRedesignV5 ? "v5" : "v4",
      "data-theme-mode": theme,
      "data-theme-family": presentation.highContrast ? "high-contrast" : presentation.themeFamily,
      children: [
        administrative && !focusMode && /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, {}),
        administrative && focusMode && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "n4-focus-exit",
            onClick: () => useAppStore.getState().setFocusMode(false),
            title: "Thoát Focus Mode (Esc)",
            children: "✕ Thoát Focus"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MaintenanceCheck, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(OfflineIndicator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PersistFailureNotice, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StreakLossCheck, {}),
        administrative && /* @__PURE__ */ jsxRuntimeExports.jsx(RouteEffects, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GameExitGuard, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "n4-main", children: [
          administrative && /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementBanner, {}) }),
          children
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StudyAssist, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CoinToast, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(XpToast, {}) }),
        debugOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DebugPanel, { onClose: () => setDebugOpen(false) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: null, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CommandPalette, { open: paletteOpen, onClose: () => setPaletteOpen(false) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GuideModal, { open: guideOpen, onClose: () => setGuideOpen(false) })
        ] })
      ]
    }
  );
}
const WorldExperience = reactExports.lazy(() => __vitePreload(() => import("./WorldExperience-CQ_uhNin.js").then((n) => n.W), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0, import.meta.url));
const AdministrativeRoutes = reactExports.lazy(() => __vitePreload(() => import("./activity-router-BSafjB-b.js"), true ? __vite__mapDeps([33,1,2,7,10,11]) : void 0, import.meta.url));
function AppRouter() {
  const { pathname } = useLocation();
  const administrative = pathname === "/admin" || false;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "haru-boot", role: "status", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { lang: "ja", children: "春" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Đang mở làng Haru…" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chuẩn bị hành trình học của bạn." })
  ] }), children: administrative ? /* @__PURE__ */ jsxRuntimeExports.jsx(AdministrativeRoutes, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(WorldExperience, {}) });
}
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppProviders, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppRouter, {}) }) });
}
reportPublicRuntimeConfigIssues();
if (typeof window !== "undefined") {
  const _origWarn = console.warn.bind(console);
  console.warn = function(...args) {
    const msg = typeof args[0] === "string" ? args[0] : "";
    if (msg.includes("Clock") && msg.includes("deprecated") && msg.includes("Timer")) return;
    _origWarn(...args);
  };
}
let _mounted = false;
function mountReactApp() {
  if (_mounted) return;
  _mounted = true;
  window.__N4_REACT_APP_ACTIVE = true;
  const container = document.getElementById("react-root");
  if (!container) return;
  const root = clientExports.createRoot(container);
  root.render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
  );
}
mountReactApp();
scheduleOfflineBoot({ production: true });
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
  var _a2;
  const result = [];
  const seen = /* @__PURE__ */ new Set();
  const keys = _lessonKeys(minna, minLesson, maxLesson);
  for (const n of keys) {
    const lesson = minna[n];
    if (!((_a2 = lesson == null ? void 0 : lesson.vocab) == null ? void 0 : _a2.length)) continue;
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
  var _a2;
  const result = [];
  const keys = _lessonKeys(minna, minLesson, maxLesson);
  for (const n of keys) {
    const lesson = minna[n];
    if (!((_a2 = lesson == null ? void 0 : lesson.grammarItems) == null ? void 0 : _a2.length)) continue;
    for (const gi of lesson.grammarItems) {
      if (!gi.title) continue;
      const exLines = (gi.examples || []).filter((ex) => ex.jp && ex.vi).map((ex) => `- ${ex.jp}${ex.romaji ? " (" + ex.romaji + ")" : ""} → ${ex.vi}`).join("\n");
      const content2 = [
        gi.purpose ? `**Mục đích sử dụng:** ${gi.purpose}` : "",
        gi.explanation ? `**Giải thích:** ${gi.explanation}` : "",
        exLines ? `**Ví dụ:**
${exLines}` : ""
      ].filter(Boolean).join("\n\n");
      result.push({
        id: `minna-${n}-${result.length}`,
        title: gi.title,
        content: content2,
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
  var _a2, _b2;
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
    if (type === "grammar") count = ((_a2 = lesson == null ? void 0 : lesson.grammarItems) == null ? void 0 : _a2.length) || 0;
    else if (type === "kanji") {
      const chars = /* @__PURE__ */ new Set();
      ((lesson == null ? void 0 : lesson.vocab) || []).forEach((v) => {
        for (const ch of v.word || "") if (isKanjiChar(ch)) chars.add(ch);
      });
      count = chars.size;
    } else {
      count = ((_b2 = lesson == null ? void 0 : lesson.vocab) == null ? void 0 : _b2.length) || 0;
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
  var _a2, _b2, _c;
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
      meaning2: ((_a2 = v.altMeanings) == null ? void 0 : _a2[0]) || "",
      note: v.note || "",
      example: ((_b2 = v.examples) == null ? void 0 : _b2[0]) ? `${v.examples[0].ja || ""} / ${v.examples[0].romaji || ""} (${v.examples[0].vi || ""})`.replace(/^\s*\/\s*/, "") : "",
      example2: ((_c = v.examples) == null ? void 0 : _c[1]) ? `${v.examples[1].ja || ""} / ${v.examples[1].romaji || ""} (${v.examples[1].vi || ""})`.replace(/^\s*\/\s*/, "") : "",
      examples: Array.isArray(v.examples) ? v.examples : []
    });
  }
  return Array.from(sectionsMap.values()).sort((a, b) => a.id - b.id);
}
function reconstructKanjiV1(kanjiV2) {
  var _a2, _b2, _c, _d;
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
      on: ((_a2 = k.onReadings) == null ? void 0 : _a2.join("、")) || "",
      kun: ((_b2 = k.kunReadings) == null ? void 0 : _b2.join("、")) || "",
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
  var _a2;
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
    let content2 = "";
    if (g.structure) content2 += `**Cấu trúc:**
${g.structure}

`;
    if (g.usage) content2 += `**Cách dùng:**
${g.usage}

`;
    if (g.examples && g.examples.length > 0) {
      content2 += `**Ví dụ:**
` + g.examples.map((ex) => {
        let text = `- ${ex.ja}`;
        if (ex.romaji) text += ` / ${ex.romaji}`;
        if (ex.vi) text += ` (${ex.vi})`;
        return text;
      }).join("\n") + `

`;
    }
    if (g.notes) content2 += `**Lưu ý:**
${g.notes}`;
    const gIdStr = ((_a2 = g.key) == null ? void 0 : _a2.split(":")[1]) || "";
    const gId = Number(gIdStr) || gIdStr;
    sectionsMap.get(secId).patterns.push({
      id: gId,
      title: g.title || "",
      content: content2.trim(),
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
function replaceWithServerData(content2) {
  if (content2.vocab) S._rawVocab = content2.vocab;
  if (content2.kanji) S._rawKanji = content2.kanji;
  if (content2.grammar) S._rawGrammar = content2.grammar;
  if (content2.minna) S.minnaData = content2.minna;
  if (content2["minna-lessons"]) S.minnaLessons = content2["minna-lessons"];
  if (content2["game-content"]) S.gameContent = content2["game-content"];
  _invalidate();
  window.dispatchEvent(new CustomEvent("n4-data-ready"));
}
const loader = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loadCanonicalData,
  loadData,
  reconstructGrammarV1,
  reconstructKanjiV1,
  reconstructVocabV1,
  replaceWithServerData
}, Symbol.toStringTag, { value: "Module" }));
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
      var _a2, _b2;
      const ar = (_a2 = a.frequencyRank) != null ? _a2 : 999999;
      const br = (_b2 = b.frequencyRank) != null ? _b2 : 999999;
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
  var _a2;
  return {
    schema: SCHEMA_VERSION,
    data: _state.ready ? `${_state.backing}.${((_a2 = _state.items) == null ? void 0 : _a2.length) || 0}` : "unready",
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
  var _a2, _b2, _c;
  if (maxItems == null) return [...buckets.due, ...buckets.fresh, ...buckets.review];
  const count = Math.max(0, maxItems);
  if (count === 0) return [];
  const overdueWeight = Math.max(0, (_a2 = weights.overdue) != null ? _a2 : 0.5);
  const newWeight = Math.max(0, (_b2 = weights.new) != null ? _b2 : 0.3);
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
  var _a2;
  if (!state) return 0;
  const lapseScore = (state.lapses || 0) * 100;
  const lowStabilityScore = Math.max(0, 30 - (state.stability || 0));
  const lowRetrievabilityScore = Math.round((1 - ((_a2 = state.retrievability) != null ? _a2 : 1)) * 50);
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
      var _a2;
      return (_a2 = p.pair) == null ? void 0 : _a2.includes(key);
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
  var _a2, _b2;
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
    if (present) hits.push({ lesson: (_a2 = l.lesson) != null ? _a2 : l.id, title: l.title || l.vi || `Lesson ${(_b2 = l.lesson) != null ? _b2 : l.id}` });
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
var define_process_env_default$1 = {};
let _wired = false;
let _v2Promise = null;
async function ensureCanonicalContentReady() {
  if (content.isReady()) return true;
  if (!_v2Promise) _v2Promise = _tryInitV2();
  if (!await _v2Promise || !content.isReady()) {
    _v2Promise = null;
    throw new Error("Không tải được nội dung học. Hãy thử lại.");
  }
  return true;
}
async function _tryInitV2() {
  try {
    const [
      { default: vocabV2 },
      { default: kanjiV2 },
      { default: grammarV2 }
    ] = await Promise.all([
      __vitePreload(() => import("./vocab.v2-BilQu_Iy.js"), true ? [] : void 0, import.meta.url),
      __vitePreload(() => import("./kanji.v2-CS5TJfx7.js"), true ? [] : void 0, import.meta.url),
      __vitePreload(() => import("./grammar.v2-DCAJ8ygz.js"), true ? [] : void 0, import.meta.url)
    ]);
    content.initFromV2({ vocabV2, kanjiV2, grammarV2 });
    srs.bindContent(content);
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(() => _loadReferences(), { timeout: 2e3 });
    } else {
      setTimeout(() => _loadReferences(), 1500);
    }
    return true;
  } catch (e) {
    console.warn("[content-bootstrap] v2 load failed, falling back to v1", e);
    return false;
  }
}
async function _loadReferences() {
  try {
    const [
      verbs,
      adjectives,
      counters,
      particles,
      keigo,
      confusables,
      radicals,
      verbForms,
      connectors,
      readingPack,
      listeningPack,
      pronunciation,
      mocksIdx
    ] = await Promise.all([
      __vitePreload(() => import("./verbs-CCALaAti.js"), true ? [] : void 0, import.meta.url).then((m) => m.default),
      __vitePreload(() => import("./adjectives-CmT_lO8Q.js"), true ? [] : void 0, import.meta.url).then((m) => m.default),
      __vitePreload(() => import("./counters-CGgn4F8t.js"), true ? [] : void 0, import.meta.url).then((m) => m.default),
      __vitePreload(() => import("./particles-Did7F3OA.js"), true ? [] : void 0, import.meta.url).then((m) => m.default),
      __vitePreload(() => import("./keigo-pairs-CxDPojIr.js"), true ? [] : void 0, import.meta.url).then((m) => m.default),
      __vitePreload(() => import("./confusables-qNCQ2LIJ.js"), true ? [] : void 0, import.meta.url).then((m) => m.default),
      __vitePreload(() => import("./radicals-DsjRvj36.js"), true ? [] : void 0, import.meta.url).then((m) => m.default),
      __vitePreload(() => import("./verb-forms-BNpLAxFx.js"), true ? [] : void 0, import.meta.url).then((m) => m.default),
      __vitePreload(() => import("./connectors-CiBMIeXP.js"), true ? [] : void 0, import.meta.url).then((m) => m.default),
      __vitePreload(() => import("./passages-n4-CCGr8xil.js"), true ? [] : void 0, import.meta.url).then((m) => m.default),
      __vitePreload(() => import("./scripts-n4-CPolSWlS.js"), true ? [] : void 0, import.meta.url).then((m) => m.default),
      __vitePreload(() => import("./index-BMORg_pt.js"), true ? [] : void 0, import.meta.url).then((m) => m.default),
      __vitePreload(() => import("./index-B6wbftj7.js"), true ? [] : void 0, import.meta.url).then((m) => m.default)
    ]);
    Promise.all([
      __vitePreload(() => import("./overrides-gTFbM9Ya.js"), true ? [] : void 0, import.meta.url).then((m) => m.default).catch(() => null),
      __vitePreload(() => import("./pitch-D1DfTRhE.js"), true ? [] : void 0, import.meta.url).then((m) => m.default).catch(() => null),
      __vitePreload(() => import("./manifest-BlDYQxg-.js"), true ? [] : void 0, import.meta.url).then((m) => m.default).catch(() => null),
      __vitePreload(() => import("./game-content-DFg1ZrbC.js"), true ? [] : void 0, import.meta.url).then((m) => m.default).catch(() => null)
    ]).then(async ([overrides, pitch, audioManifest, questions]) => {
      var _a2, _b2, _c, _d, _e;
      if (overrides == null ? void 0 : overrides.entries) (_a2 = content._installPronunciationOverrides) == null ? void 0 : _a2.call(content, overrides.entries);
      if (pitch == null ? void 0 : pitch.entries) (_b2 = content._installPitch) == null ? void 0 : _b2.call(content, pitch.entries);
      if (audioManifest) (_c = content._installAudioManifest) == null ? void 0 : _c.call(content, audioManifest);
      const merged = [];
      if (questions) {
        const list = Array.isArray(questions) ? questions : Object.values(questions).flatMap((v) => Array.isArray(v) ? v : []);
        merged.push(...list);
      }
      try {
        const expMod = await __vitePreload(() => import("./loader-BV1fV8FN.js"), true ? __vite__mapDeps([34,2,1,10,7,11]) : void 0, import.meta.url);
        const bundle = (_d = expMod.getExplanationEntries) == null ? void 0 : _d.call(expMod);
        if (bundle) {
          for (const [id, entry] of Object.entries(bundle)) {
            merged.push({ id, ...entry });
          }
        }
      } catch (e) {
        console.warn("[content-bootstrap] explanation pool load failed", e);
      }
      if (merged.length) (_e = content._installQuestions) == null ? void 0 : _e.call(content, merged);
    }).catch((e) => console.warn("[content-bootstrap] Keiko Deluxe data optional load failed", e));
    const verbMap = Object.fromEntries((verbs || []).map((v) => [v.key, v]));
    const adjMap = Object.fromEntries((adjectives || []).map((v) => [v.key, v]));
    const mocks = /* @__PURE__ */ new Map();
    for (const row of (mocksIdx == null ? void 0 : mocksIdx.mocks) || []) {
      mocks.set(row.id, { lazy: true, meta: row });
    }
    content._installReferences({
      conjugationVerbs: verbMap,
      conjugationAdjectives: adjMap,
      counters: (counters == null ? void 0 : counters.entries) || counters,
      particles: (particles == null ? void 0 : particles.entries) || particles,
      keigoPairs: (keigo == null ? void 0 : keigo.entries) || keigo,
      confusables: (confusables == null ? void 0 : confusables.entries) || confusables,
      radicals: (radicals == null ? void 0 : radicals.entries) || radicals,
      verbForms: (verbForms == null ? void 0 : verbForms.entries) || verbForms,
      connectors: (connectors == null ? void 0 : connectors.entries) || connectors,
      reading: (readingPack == null ? void 0 : readingPack.passages) || [],
      listening: (listeningPack == null ? void 0 : listeningPack.scripts) || [],
      pronunciation,
      mocks
    });
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("n4-content-ready"));
    }
  } catch (e) {
    console.warn("[content-bootstrap] reference pack load failed (ok for Phase-1 apps)", e);
  }
}
function bootstrapContentAndSrs() {
  if (_wired) return;
  _wired = true;
  if (typeof window !== "undefined") {
    window.__N4_CONTENT__ = content;
    window.__N4_SRS__ = srs;
  }
  const runInit = () => {
    ensureCanonicalContentReady().then((ok) => {
      if (!ok && typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("n4-content-error", { detail: { code: "canonical-content-load-failed" } }));
      }
    }).catch(() => {
      if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("n4-content-error", { detail: { code: "canonical-content-load-failed" } }));
    });
  };
  const isTest2 = typeof process !== "undefined" && ((define_process_env_default$1 == null ? void 0 : define_process_env_default$1.VITEST) || false);
  if (isTest2) {
    runInit();
  } else {
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(() => runInit(), { timeout: 1e3 });
    } else {
      setTimeout(runInit, 200);
    }
  }
}
bootstrapContentAndSrs();
var define_process_env_default = {};
const isTest = typeof process !== "undefined" && ((define_process_env_default == null ? void 0 : define_process_env_default.VITEST) || false);
const startLoad = () => {
  loadData().catch((err) => {
    console.error("[Boot] Failed to load data.", err);
    window.dispatchEvent(new CustomEvent("n4-data-error", { detail: err }));
  });
};
if (isTest) {
  startLoad();
} else {
  if (typeof window !== "undefined" && "requestIdleCallback" in window) {
    window.requestIdleCallback(() => startLoad(), { timeout: 1500 });
  } else {
    setTimeout(startLoad, 300);
  }
}
export {
  getGrammarLabel as $,
  effectiveStart as A,
  flattenSectionItems as B,
  filterKanjiEntriesByVocab as C,
  collectMinnaGrammarItems as D,
  buildLessonSectionList as E,
  content as F,
  isN4Flag as G,
  getQualityConfig as H,
  getItem as I,
  stableAnswerKey as J,
  equalsAnswerText as K,
  speakJP as L,
  useQuestStore as M,
  useEnsureLegacyDataLoaded as N,
  useGameStore as O,
  getUserErrorMessage as P,
  getAnnouncements as Q,
  getConversations as R,
  STORAGE_KEYS as S,
  getMessages as T,
  deleteConversation as U,
  sendMessage as V,
  markMessagesRead as W,
  logActivity as X,
  syncProfileStats as Y,
  pushIfChanged as Z,
  getSrsLevel as _,
  useDataStore as a,
  getAjlYokaiById as a$,
  getVocabLabel as a0,
  makeLearningKey as a1,
  getCurrentSeason as a2,
  getItemBonuses as a3,
  getItemEffectDescription as a4,
  getPowerUpMeta as a5,
  AJL_SKILLS as a6,
  canUnlockSkill as a7,
  AJL_BOUNTIES as a8,
  AJL_FACTIONS as a9,
  PRIMARY_DESTINATIONS as aA,
  ROUTE_PATHS as aB,
  RouteErrorBoundary as aC,
  RouteLoadingShell as aD,
  useIsAdmin as aE,
  primaryRouteLoaders as aF,
  clearChunkReloadClaim as aG,
  countPendingMistakes as aH,
  countDueSrs as aI,
  getStudyDateKey as aJ,
  getItemLearningKey as aK,
  getItemLegacyLearningKey as aL,
  srs as aM,
  PHASES as aN,
  onSyncEvent as aO,
  pushNow as aP,
  pullNow as aQ,
  syncNow as aR,
  getDailyDeals as aS,
  MATERIAL_TYPES as aT,
  CRAFT_RECIPES as aU,
  RECYCLE_YIELD as aV,
  RECYCLE_COIN_REFUND_PCT as aW,
  generateScratchGrid as aX,
  evalScratchResult as aY,
  SCRATCH_CONFIG as aZ,
  SCRATCH_SYMBOLS as a_,
  AJL_BUILDINGS as aa,
  useNPCStore as ab,
  AJL_TOWN_SCENARIOS as ac,
  AJL_ITEMS as ad,
  loadDailyStudyPlan as ae,
  _isIOS as af,
  forvoUrl as ag,
  safeGetObjectItem as ah,
  S as ai,
  jishoUrl as aj,
  safeSetObjectItem as ak,
  speakJPPromise as al,
  speakVi as am,
  isTTSAvailable as an,
  esc as ao,
  shuffleArray as ap,
  haptic as aq,
  isAutoBackupRunning as ar,
  startAutoBackup as as,
  stopAutoBackup as at,
  selectDueSrsEntries as au,
  isLessonFilterActive as av,
  safeCopy as aw,
  getLearningKeyType as ax,
  submitBugToCloud as ay,
  parseLearningKey as az,
  stopSpeech as b,
  resetAppStoreToDefaults as b$,
  AJL_MANGA_CHAPTERS as b0,
  AJL_ORIGAMI as b1,
  AJL_MECHA_PARTS as b2,
  STUDY_PLAN_UPDATED_EVENT as b3,
  STUDY_PLAN_STORAGE_KEY as b4,
  completeBlockInStudyPlan as b5,
  saveDailyStudyPlan as b6,
  playSFX$1 as b7,
  normalizeAnswerText as b8,
  bold as b9,
  makeGrammarKey as bA,
  grammarKey as bB,
  recordRewardEntitlement as bC,
  ensureLearningOwner as bD,
  ensureCanonicalContentReady as bE,
  createWorldLearningJournal as bF,
  applyWorldLearningCompletion as bG,
  applyWorldLearningResult as bH,
  applyMasteryReceipt as bI,
  toLegacySrsEntry as bJ,
  assertLearningOwnerReady as bK,
  useTakaraStore as bL,
  getCookingBuffDescription as bM,
  parseKey as bN,
  WHEEL_CONFIG as bO,
  SLOT_CONFIG as bP,
  VIP_CONFIG as bQ,
  selGems as bR,
  selShards as bS,
  GACHA_PHASE_TIMINGS as bT,
  RARITY_COLORS as bU,
  RARITY_LABELS as bV,
  getCharmBonus as bW,
  AJL_IZAKAYA_MENU as bX,
  AJL_ANIME_QUOTES as bY,
  AJL_SUSHI_TYPES as bZ,
  safeRemoveItem as b_,
  GAME_EVENTS as ba,
  normalizeSrsEntry as bb,
  GACHA_PITY as bc,
  SEASONS as bd,
  isGamblingWinSource as be,
  isPurchaseSource as bf,
  isQuizCoinSource as bg,
  getIsoWeekStartKey as bh,
  PET_MAX_LEVEL as bi,
  PET_XP_PER_LEVEL as bj,
  PET_FOOD_OPTIONS as bk,
  ROOM_GRID as bl,
  ROOM_MAX_BONUS as bm,
  ROOM_BONUS_PER_ITEM as bn,
  generateTreasureGrid as bo,
  TREASURE_CONFIG as bp,
  pickDigReward as bq,
  getHeat as br,
  TREASURE_HEAT as bs,
  TREASURE_BONUS_CHEST as bt,
  AJL_CATS as bu,
  isMistakePendingReview as bv,
  makeVocabKey as bw,
  vocabKey as bx,
  makeKanjiKey as by,
  kanjiKey as bz,
  speakLongText as c,
  STUDY_RESULT_HISTORY_KEY as c0,
  createResetLearningState as c1,
  selectPersistedLearningState as c2,
  signInWithGoogle as c3,
  logoutAndClearAccount as c4,
  getJapaneseVoices as c5,
  getVietnameseVoices as c6,
  getPreferredVoiceName as c7,
  setPreferredVoice as c8,
  resolveThemeMode as c9,
  POWER_UP_META as cA,
  telemetry as cB,
  TELEMETRY_EVENTS as cC,
  getComboMultiplier as cD,
  COIN_PER_CORRECT as cE,
  SKILLS as cF,
  loadGemState as cG,
  saveGemState as cH,
  addGems as cI,
  getSetBonuses as cJ,
  useWorldClockStore as cK,
  useQuality as cL,
  activityLog as cM,
  resetAllAndSync as ca,
  isSupabaseConfigured as cb,
  ROUTE_META as cc,
  fetchKanjiSVG as cd,
  V5Button as ce,
  V5IconButton as cf,
  V5LinkButton as cg,
  getAllProfiles as ch,
  getDailyActiveUsers as ci,
  setConfig as cj,
  setUserRole as ck,
  setUserAccess as cl,
  createAnnouncement as cm,
  updateAnnouncement as cn,
  deleteAnnouncement as co,
  adminDeleteConversation as cp,
  getRecentActivity as cq,
  getAllQuizHistory as cr,
  getQuizAnalytics as cs,
  getActivityHeatmap as ct,
  purgeActivityLog as cu,
  getUserActivity as cv,
  getAllConfig as cw,
  deleteConfig as cx,
  PRIO as cy,
  summarizeSets as cz,
  safeSetItem as d,
  isKanaChar as e,
  isMuted as f,
  getUnreadAnnouncements as g,
  useLearningStore as h,
  isKanjiChar$1 as i,
  useManagedTimeout as j,
  kanaToRomaji as k,
  formatEconomySourceLabel as l,
  markAsRead as m,
  masuToDictKana as n,
  onStopAll as o,
  preferStandaloneReading as p,
  sanitizeRomaji as q,
  readingToRomaji as r,
  safeGetItem as s,
  alignRomajiToWord as t,
  useAppStore as u,
  supabase as v,
  useMasteryStore as w,
  playSFX as x,
  collectMinnaVocabItems as y,
  effectiveCap as z
};
