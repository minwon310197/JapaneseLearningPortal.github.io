import { r as reactExports, j as jsxRuntimeExports, u as useShallow, b as reactDomExports } from "./vendor-react-BUL8WuXG.js";
import { s as safeGetItem, b_ as safeRemoveItem, b$ as resetAppStoreToDefaults, d as safeSetItem, S as STORAGE_KEYS, c0 as STUDY_RESULT_HISTORY_KEY, b4 as STUDY_PLAN_STORAGE_KEY, c1 as createResetLearningState, c2 as selectPersistedLearningState, u as useAppStore, j as useManagedTimeout, at as stopAutoBackup, as as startAutoBackup, c3 as signInWithGoogle, c4 as logoutAndClearAccount, aR as syncNow, c5 as getJapaneseVoices, c6 as getVietnameseVoices, c7 as getPreferredVoiceName, c8 as setPreferredVoice, L as speakJP, am as speakVi, h as useLearningStore, P as getUserErrorMessage, c9 as resolveThemeMode, ca as resetAllAndSync } from "./index-BEJSIlFS.js";
import { I as IOSGroupedList, a as IOSGroupedRow } from "./IOSGroupedList-s00mgaMZ.js";
import { u as useDialogFocus } from "./useDialogFocus-CowhWfi-.js";
import { b as THEME_MODE_LABELS, A as ACCENT_COLORS, D as DENSITIES, C as CARD_LAYOUTS, E as EXAMPLE_MODES, M as MINNA_VIEWS, K as KANJI_FONTS, c as KANJI_WEIGHTS, d as DIFFICULTIES, P as POPULAR_ITEMS_SET, e as COMPACT_ITEMS_SET, T as TABS, G as GROUP_LABELS, a as TAB_SECTIONS, S as SECTIONS } from "./settings-constants-hqFN9CGt.js";
import { u as useAIKey } from "./useAIKey-CpSw0zmN.js";
import { b as CircleCheck, p as CircleAlert } from "./vendor-icons-D83cEu6Z.js";
import { c as useSearchParams } from "./vendor-router-Dx6RIovR.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-supabase-DTEAj5J1.js";
const SETTINGS_BACKUP_FORMAT = "html-dev-n4-backup";
const SETTINGS_BACKUP_VERSION = 2;
const MAX_SETTINGS_BACKUP_BYTES = 5 * 1024 * 1024;
const SETTINGS_IMPORT_ROLLBACK_KEY = "n4-settings-import-rollback-v1";
const SETTINGS_IMPORT_ROLLBACK_TTL_MS = 24 * 60 * 60 * 1e3;
const LEGACY_IMPORT_KEYS = [
  "n4-accent",
  "n4-font-jp",
  STORAGE_KEYS.TTS_RATE,
  STORAGE_KEYS.AUTO_TTS,
  STORAGE_KEYS.SELECTION_POPUP,
  STORAGE_KEYS.START_TAB,
  STORAGE_KEYS.COMPACT,
  STORAGE_KEYS.AUTO_COLLAPSE,
  STORAGE_KEYS.FURIGANA,
  STORAGE_KEYS.ROMAJI
];
const APP_STATE_KEYS = /* @__PURE__ */ new Set([
  "reactMode",
  "theme",
  "themeMode",
  "themePreset",
  "themeFamily",
  "accent",
  "customAccentEnabled",
  "density",
  "showFurigana",
  "showRomaji",
  "ttsRate",
  "autoSpeak",
  "difficulty",
  "dailyGoal",
  "newItemsPerDay",
  "autoAdvance",
  "lessonStart",
  "lessonCap",
  "defaultQuestionCount",
  "energyMode",
  "reducedMotion",
  "reducedTransparency",
  "touchParticleIntensity",
  "gfxTier",
  "trainer3dEnabled",
  "hideChanceBasedActivities",
  "highContrast",
  "debugMode",
  "kanjiFont",
  "kanjiWeight",
  "kanjiSize",
  "fzKanji",
  "fzVocab",
  "fzGrammar",
  "cardLayout",
  "exampleDisplay",
  "navPosition",
  "gamesCols",
  "minnaView",
  "soundFX",
  "soundCorrect",
  "soundWrong",
  "radioRateJp",
  "radioRateVi",
  "cbProtanopia",
  "cbDeuteranopia",
  "cbTritanopia",
  "dyslexiaFont",
  "largeTouchTargets",
  "swipeFlashcard",
  "swipeClose",
  "sidebarStudyTools",
  "sidebarExtended",
  "sidebarPhase2",
  "sidebarPhase3",
  "lastSyncAt",
  "autoBackupEnabled",
  "syncInterval",
  "fontScale",
  "settingsChangedAt"
]);
const LEARNING_STATE_KEYS = new Set(Object.keys(selectPersistedLearningState(createResetLearningState())));
const APP_ENUMS = {
  theme: ["dark", "light"],
  themeMode: ["auto", "dark", "light"],
  themeFamily: ["washi", "sakura-ink", "indigo-study", "moss-library", "high-contrast"],
  density: ["compact", "comfortable", "spacious"],
  difficulty: ["easy", "normal", "hard", "jlpt"],
  energyMode: ["performance", "quality"],
  touchParticleIntensity: ["off", "light", "normal", "full"],
  gfxTier: ["auto", "low", "medium", "high"],
  cardLayout: ["grid", "list", "compact"],
  exampleDisplay: ["inline", "block", "hidden"],
  navPosition: ["top", "bottom"],
  gamesCols: [2, 3, 4],
  minnaView: ["default", "compact", "expanded"],
  fontScale: ["S", "M", "L", "XL"]
};
const APP_RANGES = {
  ttsRate: [0.5, 2],
  dailyGoal: [5, 1e3],
  newItemsPerDay: [0, 100],
  lessonStart: [0, 50],
  lessonCap: [0, 50],
  defaultQuestionCount: [5, 50],
  kanjiSize: [1, 4],
  fzKanji: [8, 48],
  fzVocab: [8, 48],
  fzGrammar: [8, 48],
  radioRateJp: [0.5, 2],
  radioRateVi: [0.5, 2],
  syncInterval: [2e3, 3e5]
};
const APP_BOOLEAN_KEYS = [
  "reactMode",
  "customAccentEnabled",
  "showFurigana",
  "showRomaji",
  "autoSpeak",
  "autoAdvance",
  "reducedMotion",
  "reducedTransparency",
  "trainer3dEnabled",
  "hideChanceBasedActivities",
  "highContrast",
  "debugMode",
  "soundFX",
  "soundCorrect",
  "soundWrong",
  "cbProtanopia",
  "cbDeuteranopia",
  "cbTritanopia",
  "dyslexiaFont",
  "largeTouchTargets",
  "swipeFlashcard",
  "swipeClose",
  "sidebarStudyTools",
  "sidebarExtended",
  "sidebarPhase2",
  "sidebarPhase3",
  "autoBackupEnabled"
];
const BACKUP_DATA_FIELDS = Object.freeze({
  mistakes: { key: STORAGE_KEYS.MISTAKES, type: "object", fallback: {} },
  quizHistory: { key: STORAGE_KEYS.QUIZ_HISTORY, type: "array", fallback: [] },
  studyNotes: { key: STORAGE_KEYS.STUDY_NOTES, type: "string", fallback: "" },
  studyNotesLog: { key: STORAGE_KEYS.STUDY_NOTES_LOG, type: "array", fallback: [] },
  customCards: { key: STORAGE_KEYS.CUSTOM_CARDS, type: "array", fallback: [] },
  aiDiary: { key: STORAGE_KEYS.AI_DIARY_ENTRIES, type: "array", fallback: [] },
  playlist: { key: STORAGE_KEYS.PLAYLIST, type: "array", fallback: [] },
  dailyPlan: { key: STUDY_PLAN_STORAGE_KEY, type: "nullable-object", fallback: null },
  resultHistory: { key: STUDY_RESULT_HISTORY_KEY, type: "array", fallback: [] },
  masteryStore: {
    key: STORAGE_KEYS.MASTERY_STORE,
    type: "persisted-store",
    fallback: null,
    allowedStateKeys: ["schema", "masteryBars", "recentLevelUps", "revision", "updatedAt", "resetGeneration", "receipts"],
    validateState: validateMasteryStoreState
  },
  questStore: {
    key: STORAGE_KEYS.QUEST_STORE,
    type: "persisted-store",
    fallback: null,
    allowedStateKeys: ["schema", "claimedDaily", "claimedWeekly", "chainProgress", "seasonBonusClaimed", "completionLog", "counters"],
    allowObjectNull: true,
    validateState: validateQuestStoreState
  },
  inventoryStore: {
    key: STORAGE_KEYS.INVENTORY_STORE,
    type: "persisted-store",
    fallback: null,
    allowArrayNull: true,
    allowedStateKeys: ["vocab", "grammar", "equippedCards", "mastery", "completedThemes", "items"],
    validateState: validateInventoryStoreState
  }
});
const LEGACY_ALLOWED_KEYS = /* @__PURE__ */ new Set([
  "n4-bm",
  "n4-srs",
  "n4-theme",
  STORAGE_KEYS.FONT_SIZE_BASE,
  ...LEGACY_IMPORT_KEYS
]);
function isPlainObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}
function hasUnsafeJsonKey(value, seen = /* @__PURE__ */ new Set()) {
  if (!value || typeof value !== "object") return false;
  if (seen.has(value)) return true;
  seen.add(value);
  if (Array.isArray(value)) return value.some((item) => hasUnsafeJsonKey(item, seen));
  for (const [key, item] of Object.entries(value)) {
    if (key === "__proto__" || key === "prototype" || key === "constructor") return true;
    if (hasUnsafeJsonKey(item, seen)) return true;
  }
  seen.delete(value);
  return false;
}
function jsonByteLength(value) {
  const json = typeof value === "string" ? value : JSON.stringify(value);
  if (typeof TextEncoder !== "undefined") return new TextEncoder().encode(json).byteLength;
  return json.length;
}
function parseStoredJson(key) {
  try {
    const raw = safeGetItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}
function validatePersistedContainer(section, allowedKeys) {
  if (!isPlainObject(section)) return null;
  const isContainer = Object.prototype.hasOwnProperty.call(section, "state");
  const state = isContainer ? section.state : section;
  if (!isPlainObject(state) || Object.keys(state).some((key) => !allowedKeys.has(key))) return null;
  if (isContainer) {
    if (Object.keys(section).some((key) => key !== "state" && key !== "version")) return null;
    if (!Number.isInteger(section.version) || section.version < 0 || section.version > 100) return null;
  }
  return { state, version: isContainer ? section.version : 0 };
}
function validateAppSection(section) {
  const normalized = validatePersistedContainer(section, APP_STATE_KEYS);
  if (!normalized) return null;
  const { state } = normalized;
  for (const [key, allowed] of Object.entries(APP_ENUMS)) {
    if (state[key] !== void 0 && !allowed.includes(state[key])) return null;
  }
  for (const [key, [min, max]] of Object.entries(APP_RANGES)) {
    if (state[key] === void 0) continue;
    if (!Number.isFinite(state[key]) || state[key] < min || state[key] > max) return null;
  }
  if (APP_BOOLEAN_KEYS.some((key) => state[key] !== void 0 && typeof state[key] !== "boolean")) return null;
  if (state.accent !== void 0 && !/^#[0-9a-f]{6}$/i.test(state.accent)) return null;
  return normalized;
}
function matchesDefaultShape(value, defaultValue) {
  if (defaultValue === null) return value === null;
  if (Array.isArray(defaultValue)) return Array.isArray(value) && value.length <= 1e4;
  if (isPlainObject(defaultValue)) return isPlainObject(value) && Object.keys(value).length <= 2e4;
  if (typeof defaultValue === "number") return Number.isFinite(value) && value >= 0;
  if (typeof defaultValue === "string") return typeof value === "string" && value.length <= 1e4;
  return typeof value === typeof defaultValue;
}
function isBoundedJsonValue(value, {
  depth = 0,
  allowNull = false,
  allowArrayNull = false,
  allowObjectNull = false
} = {}) {
  if (depth > 12) return false;
  if (value === null) return allowNull;
  if (typeof value === "string") return value.length <= 5e5;
  if (typeof value === "number") return Number.isFinite(value);
  if (typeof value === "boolean") return true;
  if (Array.isArray(value)) {
    return value.length <= 1e4 && value.every((item) => (item !== null || allowArrayNull) && isBoundedJsonValue(item, {
      depth: depth + 1,
      allowNull: allowArrayNull,
      allowArrayNull,
      allowObjectNull
    }));
  }
  if (!isPlainObject(value) || Object.keys(value).length > 2e4) return false;
  return Object.values(value).every((item) => isBoundedJsonValue(item, {
    depth: depth + 1,
    allowArrayNull,
    allowObjectNull,
    allowNull: allowObjectNull
  }));
}
function isSafeRecord(value) {
  return isPlainObject(value) && isBoundedJsonValue(value);
}
function validateStatsRecord(value) {
  if (!isPlainObject(value)) return false;
  return Object.values(value).every((entry) => {
    if (Number.isFinite(entry) || typeof entry === "string" || typeof entry === "boolean") return true;
    return validateStatsRecord(entry);
  });
}
function validateMasteryStoreState(state) {
  if (state.schema !== void 0 && (!Number.isInteger(state.schema) || state.schema < 0)) return false;
  for (const key of ["revision", "resetGeneration"]) if (state[key] !== void 0 && (!Number.isInteger(state[key]) || state[key] < 0)) return false;
  if (state.updatedAt !== void 0 && (!Number.isFinite(state.updatedAt) || state.updatedAt < 0)) return false;
  if (state.receipts !== void 0 && !validateReceiptMap(state.receipts)) return false;
  if (state.masteryBars !== void 0) {
    if (!isPlainObject(state.masteryBars)) return false;
    for (const bar of Object.values(state.masteryBars)) {
      if (!isPlainObject(bar)) return false;
      if (["level", "xp", "nextAt", "lifetime"].some((key) => !Number.isFinite(bar[key]) || bar[key] < 0)) return false;
      if (Object.keys(bar).some((key) => !["level", "xp", "nextAt", "lifetime"].includes(key))) return false;
    }
  }
  if (state.recentLevelUps !== void 0 && (!Array.isArray(state.recentLevelUps) || state.recentLevelUps.some((entry) => !isSafeRecord(entry)))) return false;
  return true;
}
function validateReceiptMap(value) {
  return isPlainObject(value) && Object.entries(value).every(([id, fingerprint]) => id.length > 0 && id.length <= 1e3 && typeof fingerprint === "string" && fingerprint.length > 0 && fingerprint.length <= 5e5);
}
function hasOnlyKeys(value, allowedKeys) {
  return Object.keys(value).every((key) => allowedKeys.includes(key));
}
function validateClaimCycle(value, periodKey) {
  if (!isPlainObject(value) || !hasOnlyKeys(value, [periodKey, "ids"])) return false;
  const period = value[periodKey];
  if (period !== void 0 && period !== null && (typeof period !== "string" || period.length > 40)) return false;
  if (!isPlainObject(value.ids) || Object.keys(value.ids).length > 1e4) return false;
  return Object.entries(value.ids).every(([id, claimedAt]) => id.length <= 200 && Number.isFinite(claimedAt) && claimedAt >= 0);
}
function validateCounterRecord(value) {
  return isPlainObject(value) && Object.keys(value).length <= 100 && Object.values(value).every((entry) => Number.isFinite(entry) && entry >= 0);
}
function validateQuestStoreState(state) {
  if (state.schema !== void 0 && (!Number.isInteger(state.schema) || state.schema < 0)) return false;
  if (state.claimedDaily !== void 0 && !validateClaimCycle(state.claimedDaily, "day")) return false;
  if (state.claimedWeekly !== void 0 && !validateClaimCycle(state.claimedWeekly, "week")) return false;
  if (state.chainProgress !== void 0) {
    if (!isPlainObject(state.chainProgress) || Object.values(state.chainProgress).some((entry) => {
      if (!isPlainObject(entry) || !hasOnlyKeys(entry, ["step", "startedAt", "done", "completedAt"])) return true;
      if (!Number.isFinite(entry.step) || entry.step < 0) return true;
      for (const key of ["startedAt", "completedAt"]) {
        const timestamp = entry[key];
        if (timestamp !== void 0 && !Number.isFinite(timestamp) && (typeof timestamp !== "string" || timestamp.length > 80)) return true;
      }
      return entry.done !== void 0 && typeof entry.done !== "boolean";
    })) return false;
  }
  if (state.seasonBonusClaimed !== void 0 && (!isPlainObject(state.seasonBonusClaimed) || Object.values(state.seasonBonusClaimed).some((entry) => typeof entry !== "boolean"))) return false;
  if (state.completionLog !== void 0 && (!Array.isArray(state.completionLog) || state.completionLog.length > 200 || state.completionLog.some((entry) => !isPlainObject(entry) || !hasOnlyKeys(entry, ["kind", "id", "at"]) || !["daily", "weekly", "chain"].includes(entry.kind) || typeof entry.id !== "string" || entry.id.length > 200 || !Number.isFinite(entry.at) || entry.at < 0))) return false;
  if (state.counters !== void 0) {
    const counters = state.counters;
    const counterKeys = ["day", "week", "season", "todayCorrectByKind", "weekCorrectByKind", "seasonCorrectByKind"];
    if (!isPlainObject(counters) || !hasOnlyKeys(counters, counterKeys)) return false;
    for (const key of ["day", "week"]) {
      if (counters[key] !== void 0 && counters[key] !== null && (typeof counters[key] !== "string" || counters[key].length > 40)) return false;
    }
    if (counters.season !== void 0 && counters.season !== null && typeof counters.season !== "string" && !Number.isFinite(counters.season)) return false;
    for (const key of ["todayCorrectByKind", "weekCorrectByKind", "seasonCorrectByKind"]) {
      if (counters[key] !== void 0 && !validateCounterRecord(counters[key])) return false;
    }
  }
  return true;
}
function validateDailyDeals(value) {
  if (!isPlainObject(value) || !hasOnlyKeys(value, ["date", "deals", "claimed"])) return false;
  if (value.date !== void 0 && value.date !== null && (typeof value.date !== "string" || value.date.length > 40)) return false;
  if (value.deals !== void 0 && (!Array.isArray(value.deals) || value.deals.length > 100 || value.deals.some((entry) => !isSafeRecord(entry)))) return false;
  if (value.claimed !== void 0 && (!Array.isArray(value.claimed) || value.claimed.length > 100 || value.claimed.some((entry) => typeof entry !== "string" || entry.length > 200))) return false;
  return true;
}
const NULLABLE_DAY_KEYS = /* @__PURE__ */ new Set([
  "lastDailyClaimDate",
  "lastStudyDate",
  "lastActivityDate",
  "lastWheelDate",
  "lastSlotDate",
  "lastScratchDate",
  "lastTreasureDate",
  "lastOmikujiDate"
]);
const NULLABLE_ISO_KEYS = /* @__PURE__ */ new Set([
  "lastAdminXpOverrideTs",
  "lastAdminCoinOverrideTs",
  "lastEquippedAt"
]);
const NULLABLE_ID_KEYS = /* @__PURE__ */ new Set([
  "activePet",
  "faction",
  "equippedYokai",
  "equippedWeapon",
  "equippedArmor",
  "equippedBackground",
  "equippedTitle"
]);
function validateNullableLearningValue(key, value) {
  if (value === null) return true;
  if (NULLABLE_DAY_KEYS.has(key)) return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value);
  if (key === "lastBountyReset") return typeof value === "string" && value.length <= 80 && (/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isFinite(Date.parse(value)));
  if (NULLABLE_ISO_KEYS.has(key)) return typeof value === "string" && value.length <= 80 && Number.isFinite(Date.parse(value));
  if (NULLABLE_ID_KEYS.has(key)) return typeof value === "string" && value.length <= 200 && /^[a-z0-9_.:-]+$/i.test(value);
  if (key === "vipExpiry" || key === "lastVillageCollect") {
    return Number.isFinite(value) && value >= 0;
  }
  if (key === "lastVisitedRoute") {
    return typeof value === "string" && value.length <= 500 && value.startsWith("/") && !/[\u0000-\u001f\u007f]/.test(value);
  }
  if (key === "treasureHuntGrid") {
    if (!isPlainObject(value) || !hasOnlyKeys(value, ["treasurePositions", "dug"])) return false;
    return ["treasurePositions", "dug"].every((field) => Array.isArray(value[field]) && value[field].length <= 100 && value[field].every((entry) => Number.isInteger(entry) && entry >= 0));
  }
  return false;
}
function validateInventoryStoreState(state) {
  for (const key of ["vocab", "grammar", "mastery", "items"]) {
    if (state[key] !== void 0 && !isPlainObject(state[key])) return false;
  }
  if (state.equippedCards !== void 0 && (!Array.isArray(state.equippedCards) || state.equippedCards.length > 100 || state.equippedCards.some((entry) => entry !== null && typeof entry !== "string"))) return false;
  if (state.completedThemes !== void 0 && (!Array.isArray(state.completedThemes) || state.completedThemes.some((entry) => typeof entry !== "string"))) return false;
  return true;
}
function validatePersistedDataStore(value, config) {
  if (value === null) return true;
  const normalized = validatePersistedContainer(value, new Set(config.allowedStateKeys || []));
  return Boolean(normalized && isBoundedJsonValue(normalized.state, {
    allowArrayNull: Boolean(config.allowArrayNull),
    allowObjectNull: Boolean(config.allowObjectNull)
  }) && (!config.validateState || config.validateState(normalized.state)));
}
function validateLearningSection(section) {
  const normalized = validatePersistedContainer(section, LEARNING_STATE_KEYS);
  if (!normalized) return null;
  const { state } = normalized;
  const defaults = createResetLearningState();
  for (const [key, value] of Object.entries(state)) {
    if (defaults[key] === null) {
      if (!validateNullableLearningValue(key, value)) return null;
    } else if (!matchesDefaultShape(value, defaults[key])) return null;
    if (Array.isArray(value) && value.some((item) => item === null || !isBoundedJsonValue(item))) return null;
    if (isPlainObject(value) && key !== "equippedCosmetics" && key !== "dailyDeals" && !isBoundedJsonValue(value)) return null;
  }
  if (state.trainerStats && Object.values(state.trainerStats).some((entry) => !validateStatsRecord(entry))) return null;
  if (state.worldLearningReceipts !== void 0 && !validateReceiptMap(state.worldLearningReceipts)) return null;
  if (state.dailyDeals && !validateDailyDeals(state.dailyDeals)) return null;
  if (state.level !== void 0 && (!Number.isInteger(state.level) || state.level < 1 || state.level > 1e4)) return null;
  if (state.equippedCosmetics) {
    const safeToken = /^[a-z0-9_-]+$/i;
    if (Object.values(state.equippedCosmetics).some((value) => value !== null && (typeof value !== "string" || !safeToken.test(value)))) return null;
  }
  if (state.srs && Object.values(state.srs).some((entry) => !Number.isFinite(entry) && !isPlainObject(entry))) return null;
  return normalized;
}
function validateDataSection(section) {
  if (!isPlainObject(section) || Object.keys(section).some((key) => !BACKUP_DATA_FIELDS[key])) return null;
  for (const [name, value] of Object.entries(section)) {
    const config = BACKUP_DATA_FIELDS[name];
    const { type } = config;
    if (type === "array" && (!Array.isArray(value) || value.length > 1e4 || value.some((item) => item === null || !isBoundedJsonValue(item, { allowObjectNull: true })))) return null;
    if (type === "object" && (!isPlainObject(value) || !isBoundedJsonValue(value, { allowObjectNull: true }))) return null;
    if (type === "nullable-object" && value !== null && (!isPlainObject(value) || !isBoundedJsonValue(value, { allowObjectNull: true }))) return null;
    if (type === "string" && (typeof value !== "string" || value.length > 5e5)) return null;
    if (type === "persisted-store" && !validatePersistedDataStore(value, config)) return null;
  }
  return section;
}
function validateLegacySection(section, { allowEnvelopeName = true } = {}) {
  if (!isPlainObject(section)) return null;
  const entries = Object.entries(section);
  if (!entries.length || entries.some(([key]) => !LEGACY_ALLOWED_KEYS.has(key))) return null;
  if (section["n4-bm"] !== void 0 && !isPlainObject(section["n4-bm"])) return null;
  if (section["n4-srs"] !== void 0 && !isPlainObject(section["n4-srs"])) return null;
  if (section["n4-theme"] !== void 0 && !["dark", "light"].includes(section["n4-theme"])) return null;
  const fontSize = section[STORAGE_KEYS.FONT_SIZE_BASE];
  if (fontSize !== void 0 && (!Number.isFinite(Number(fontSize)) || Number(fontSize) < 8 || Number(fontSize) > 40)) return null;
  const ttsRate = section[STORAGE_KEYS.TTS_RATE];
  if (ttsRate !== void 0 && (!Number.isFinite(Number(ttsRate)) || Number(ttsRate) < 0.5 || Number(ttsRate) > 2)) return null;
  if (!allowEnvelopeName && entries.some(([key]) => key === "legacy")) return null;
  return section;
}
function normalizeBackup(data) {
  if (!isPlainObject(data) || hasUnsafeJsonKey(data) || jsonByteLength(data) > MAX_SETTINGS_BACKUP_BYTES) return null;
  if (data.format === SETTINGS_BACKUP_FORMAT) {
    if (data.version !== SETTINGS_BACKUP_VERSION) return null;
    if (Object.keys(data).some((key) => !["format", "version", "exportedAt", "sections"].includes(key))) return null;
    if (!isPlainObject(data.sections)) return null;
    if (Object.keys(data.sections).some((key) => !["app", "learning", "legacy", "data"].includes(key))) return null;
    const app = data.sections.app == null ? null : validateAppSection(data.sections.app);
    const learning = data.sections.learning == null ? null : validateLearningSection(data.sections.learning);
    const legacy2 = data.sections.legacy == null ? null : validateLegacySection(data.sections.legacy);
    const extraData = data.sections.data == null ? null : validateDataSection(data.sections.data);
    if (data.sections.app != null && !app || data.sections.learning != null && !learning || data.sections.legacy != null && !legacy2 || data.sections.data != null && !extraData) return null;
    if (!app && !learning && !legacy2 && !extraData) return null;
    return { format: "v2", exportedAt: data.exportedAt || null, app, learning, legacy: legacy2, extraData };
  }
  const oldReactKeys = /* @__PURE__ */ new Set(["app", "learning", "legacy", "exportedAt"]);
  const hasOldReactSection = data.app !== void 0 || data.learning !== void 0 || data.legacy !== void 0;
  if (hasOldReactSection) {
    if (Object.keys(data).some((key) => !oldReactKeys.has(key))) return null;
    const app = data.app == null ? null : validateAppSection(data.app);
    const learning = data.learning == null ? null : validateLearningSection(data.learning);
    const legacy2 = data.legacy == null ? null : validateLegacySection({ "n4-bm": data.legacy });
    if (data.app != null && !app || data.learning != null && !learning || data.legacy != null && !legacy2) return null;
    if (!app && !learning && !legacy2) return null;
    return { format: "v1-react", exportedAt: data.exportedAt || null, app, learning, legacy: legacy2, extraData: null };
  }
  const legacy = validateLegacySection(data, { allowEnvelopeName: false });
  return legacy ? { format: "legacy", exportedAt: null, app: null, learning: null, legacy, extraData: null } : null;
}
function toPersistedContainer(section) {
  return { state: section.state, version: section.version };
}
function buildSettingsBackupPayload(now = /* @__PURE__ */ new Date()) {
  const bookmarks = parseStoredJson(STORAGE_KEYS.BOOKMARKS) || {};
  const srs = parseStoredJson(STORAGE_KEYS.SRS) || {};
  return {
    format: SETTINGS_BACKUP_FORMAT,
    version: SETTINGS_BACKUP_VERSION,
    exportedAt: now.toISOString(),
    sections: {
      app: parseStoredJson(STORAGE_KEYS.APP_STORE),
      learning: parseStoredJson(STORAGE_KEYS.LEARNING_STORE),
      legacy: { "n4-bm": bookmarks, "n4-srs": srs },
      data: Object.fromEntries(Object.entries(BACKUP_DATA_FIELDS).map(([name, config]) => {
        const raw = safeGetItem(config.key);
        if (config.type === "string") return [name, raw || config.fallback];
        try {
          return [name, raw ? JSON.parse(raw) : config.fallback];
        } catch (e) {
          return [name, config.fallback];
        }
      }))
    }
  };
}
function downloadSettingsBackupFile(data, { documentRef = document, urlApi = URL, now = /* @__PURE__ */ new Date() } = {}) {
  const json = JSON.stringify(data, null, 2);
  if (jsonByteLength(json) > MAX_SETTINGS_BACKUP_BYTES) {
    throw new Error("Backup exceeds the 5 MB import limit");
  }
  const blob = new Blob([json], { type: "application/json" });
  const anchor = documentRef.createElement("a");
  anchor.href = urlApi.createObjectURL(blob);
  anchor.download = `n4-backup-${now.toISOString().slice(0, 10)}.json`;
  anchor.click();
  urlApi.revokeObjectURL(anchor.href);
  return anchor.download;
}
function buildWrites(normalized) {
  const writes = [];
  if (normalized.app) writes.push([STORAGE_KEYS.APP_STORE, JSON.stringify(toPersistedContainer(normalized.app))]);
  if (normalized.learning) writes.push([STORAGE_KEYS.LEARNING_STORE, JSON.stringify(toPersistedContainer(normalized.learning))]);
  const legacy = normalized.legacy;
  if (legacy) {
    if (legacy["n4-bm"] !== void 0) writes.push([STORAGE_KEYS.BOOKMARKS, JSON.stringify(legacy["n4-bm"])]);
    if (legacy["n4-srs"] !== void 0) writes.push([STORAGE_KEYS.SRS, JSON.stringify(legacy["n4-srs"])]);
    if (legacy["n4-theme"] !== void 0) writes.push([STORAGE_KEYS.THEME, legacy["n4-theme"]]);
    if (legacy[STORAGE_KEYS.FONT_SIZE_BASE] !== void 0) writes.push([STORAGE_KEYS.FONT_SIZE_BASE, String(legacy[STORAGE_KEYS.FONT_SIZE_BASE])]);
    for (const key of LEGACY_IMPORT_KEYS) {
      if (legacy[key] === void 0) continue;
      writes.push([key, typeof legacy[key] === "string" ? legacy[key] : JSON.stringify(legacy[key])]);
    }
  }
  if (normalized.extraData) {
    for (const [name, value] of Object.entries(normalized.extraData)) {
      const config = BACKUP_DATA_FIELDS[name];
      if (config.type === "persisted-store" && value === null) continue;
      writes.push([config.key, config.type === "string" ? value : JSON.stringify(value)]);
    }
  }
  return writes;
}
function applyImportedBackupData(data, storage = {}) {
  const normalized = normalizeBackup(data);
  if (!normalized) return { status: "invalid" };
  const getItem = storage.getItem || safeGetItem;
  const setItem = storage.setItem || safeSetItem;
  const removeItem = storage.removeItem || safeRemoveItem;
  const writes = buildWrites(normalized);
  const snapshot = Object.fromEntries(writes.map(([key]) => [key, getItem(key)]));
  if (!setItem(SETTINGS_IMPORT_ROLLBACK_KEY, JSON.stringify({ createdAt: (/* @__PURE__ */ new Date()).toISOString(), values: snapshot }))) {
    return { status: "failed" };
  }
  for (const [key, value] of writes) {
    if (setItem(key, value)) continue;
    let rolledBack = true;
    for (const [rollbackKey, oldValue] of Object.entries(snapshot)) {
      const restored = oldValue === null ? removeItem(rollbackKey) : setItem(rollbackKey, oldValue);
      if (!restored) rolledBack = false;
    }
    removeItem(SETTINGS_IMPORT_ROLLBACK_KEY);
    return { status: "failed", rolledBack };
  }
  return { status: normalized.format === "legacy" ? "legacy" : "react", rollbackAvailable: true };
}
function restoreLatestImportedBackup(storage = {}) {
  const getItem = storage.getItem || safeGetItem;
  const setItem = storage.setItem || safeSetItem;
  const removeItem = storage.removeItem || safeRemoveItem;
  let snapshot;
  try {
    snapshot = JSON.parse(getItem(SETTINGS_IMPORT_ROLLBACK_KEY) || "null");
  } catch (e) {
    return false;
  }
  const createdAt = Date.parse((snapshot == null ? void 0 : snapshot.createdAt) || "");
  if (!isPlainObject(snapshot == null ? void 0 : snapshot.values) || !Number.isFinite(createdAt) || Date.now() - createdAt > SETTINGS_IMPORT_ROLLBACK_TTL_MS) {
    removeItem(SETTINGS_IMPORT_ROLLBACK_KEY);
    return false;
  }
  const currentValues = Object.fromEntries(Object.keys(snapshot.values).map((key) => [key, getItem(key)]));
  const restoredKeys = [];
  for (const [key, value] of Object.entries(snapshot.values)) {
    let succeeded;
    if (value === null) {
      succeeded = removeItem(key);
    } else {
      succeeded = setItem(key, value);
    }
    if (succeeded) {
      restoredKeys.push(key);
      continue;
    }
    for (const restoredKey of restoredKeys) {
      const currentValue = currentValues[restoredKey];
      if (currentValue === null) removeItem(restoredKey);
      else setItem(restoredKey, currentValue);
    }
    return false;
  }
  removeItem(SETTINGS_IMPORT_ROLLBACK_KEY);
  return true;
}
function hasSettingsImportRollback() {
  try {
    const snapshot = JSON.parse(safeGetItem(SETTINGS_IMPORT_ROLLBACK_KEY) || "null");
    const createdAt = Date.parse((snapshot == null ? void 0 : snapshot.createdAt) || "");
    const valid = isPlainObject(snapshot == null ? void 0 : snapshot.values) && Number.isFinite(createdAt) && Date.now() - createdAt <= SETTINGS_IMPORT_ROLLBACK_TTL_MS;
    if (!valid) safeRemoveItem(SETTINGS_IMPORT_ROLLBACK_KEY);
    return valid;
  } catch (e) {
    safeRemoveItem(SETTINGS_IMPORT_ROLLBACK_KEY);
    return false;
  }
}
function resetSettingsToDefaults(store) {
  resetAppStoreToDefaults(store);
}
function inspectSettingsBackupData(data) {
  var _a, _b;
  const normalized = normalizeBackup(data);
  if (!normalized) return { status: "invalid", sections: [] };
  const sections = [];
  if (normalized.app) sections.push("Cài đặt ứng dụng");
  if (normalized.learning) sections.push("Tiến độ và kết quả học");
  if ((_a = normalized.legacy) == null ? void 0 : _a["n4-bm"]) sections.push("Mục đã lưu");
  if ((_b = normalized.legacy) == null ? void 0 : _b["n4-srs"]) sections.push("Lịch ôn SRS");
  if (normalized.extraData) sections.push("Nhật ký, tiến độ mở rộng và lịch sử học");
  if (normalized.format === "legacy" && !sections.length) sections.push("Cài đặt phiên bản cũ");
  return {
    status: "valid",
    sections,
    exportedAt: normalized.exportedAt,
    version: normalized.format === "v2" ? SETTINGS_BACKUP_VERSION : 1,
    migrated: normalized.format !== "v2"
  };
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
  if (ms < 6e4) return Math.round(ms / 1e3) + "s";
  return Math.round(ms / 6e4) + " phút";
}
function AuthAvatar({ user, size = 28 }) {
  if (user == null ? void 0 : user.avatar) return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user.avatar, alt: "", className: "n4-auth-avatar", referrerPolicy: "no-referrer", style: { width: size, height: size, borderRadius: "50%" } });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: size }, children: "👤" });
}
function AuthButton({ compact = false }) {
  const user = useAppStore((s) => s.user);
  const lastSyncAt = useAppStore((s) => s.lastSyncAt);
  const autoBackupEnabled = useAppStore((s) => s.autoBackupEnabled);
  const setAutoBackupEnabled = useAppStore((s) => s.setAutoBackupEnabled);
  const syncInterval = useAppStore((s) => s.syncInterval) || 5e3;
  const [loadingOp, setLoadingOp] = reactExports.useState(null);
  const [syncMsg, setSyncMsg] = reactExports.useState(null);
  const syncMsgTimerRef = reactExports.useRef(null);
  const loading = loadingOp !== null;
  const { scheduleTimeout, clearManagedTimeout } = useManagedTimeout();
  const scheduleSyncMsgClear = reactExports.useCallback((delay = 2500) => {
    clearManagedTimeout(syncMsgTimerRef.current);
    syncMsgTimerRef.current = scheduleTimeout(() => {
      setSyncMsg(null);
      syncMsgTimerRef.current = null;
    }, delay);
  }, [clearManagedTimeout, scheduleTimeout]);
  reactExports.useEffect(() => {
    if (!user) {
      stopAutoBackup();
      if (autoBackupEnabled) setAutoBackupEnabled(false);
    }
  }, [user, autoBackupEnabled, setAutoBackupEnabled]);
  reactExports.useEffect(() => {
    if (!user) return;
    if (!autoBackupEnabled) {
      stopAutoBackup();
      return;
    }
    startAutoBackup(syncInterval);
  }, [autoBackupEnabled, syncInterval, user]);
  const handleLogin = reactExports.useCallback(async () => {
    setLoadingOp("login");
    try {
      await signInWithGoogle();
    } catch (e) {
      console.error("Login failed:", e);
    } finally {
      setLoadingOp(null);
    }
  }, []);
  const handleLogout = reactExports.useCallback(async () => {
    setLoadingOp("logout");
    try {
      await logoutAndClearAccount();
    } catch (e) {
      console.error("Logout failed:", e);
    } finally {
      setLoadingOp(null);
    }
  }, []);
  const handleSyncNow = reactExports.useCallback(async () => {
    if (loading || !user) return;
    setLoadingOp("sync");
    setSyncMsg(null);
    try {
      const result = await syncNow();
      setSyncMsg((result == null ? void 0 : result.message) || "Đồng bộ thành công!");
      scheduleSyncMsgClear((result == null ? void 0 : result.status) === "success" ? 2500 : 3500);
    } catch (error) {
      setSyncMsg("❌ " + ((error == null ? void 0 : error.message) || String(error)));
      scheduleSyncMsgClear(3500);
    } finally {
      setLoadingOp(null);
    }
  }, [loading, scheduleSyncMsgClear, user]);
  const toggleAuto = reactExports.useCallback(() => {
    if (loading) return;
    setSyncMsg(null);
    if (autoBackupEnabled) {
      stopAutoBackup();
      setAutoBackupEnabled(false);
      setSyncMsg("⏸️ Tự động đồng bộ: Tắt");
      scheduleSyncMsgClear(2500);
      return;
    }
    startAutoBackup(syncInterval);
    setAutoBackupEnabled(true);
    setSyncMsg("▶️ Tự động đồng bộ: Bật (" + formatInterval(syncInterval) + ")");
    scheduleSyncMsgClear(2500);
  }, [loading, autoBackupEnabled, scheduleSyncMsgClear, setAutoBackupEnabled, syncInterval]);
  const timeSince = formatTimeSince(lastSyncAt);
  if (compact) {
    if (!user) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "sa-btn",
          onClick: handleLogin,
          disabled: loading,
          title: "Đăng nhập Google để đồng bộ",
          style: { gridColumn: "1 / -1" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-icon", children: loadingOp === "login" ? "⏳" : "🔑" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-label", children: loadingOp === "login" ? "Đang..." : "Đăng nhập Google" })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `sa-btn ${loadingOp === "sync" ? "sa-active" : ""}`,
          onClick: handleSyncNow,
          disabled: loading,
          title: timeSince ? `Đồng bộ ngay · Lần cuối ${timeSince}` : "Đồng bộ ngay",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-icon", children: loadingOp === "sync" ? "⏳" : "☁️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-label", children: "Đồng bộ" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `sa-btn ${autoBackupEnabled ? "sa-active" : ""}`,
          onClick: toggleAuto,
          disabled: loading,
          title: `Tự động đồng bộ mỗi ${formatInterval(syncInterval)}${timeSince ? ` · ${timeSince}` : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-icon", children: autoBackupEnabled ? "⏸️" : "🔁" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-label", children: "Tự động đồng bộ" })
          ]
        }
      ),
      syncMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { gridColumn: "1 / -1", fontSize: 12, textAlign: "center", opacity: syncMsg.startsWith("❌") ? 0.95 : 0.85 }, children: syncMsg })
    ] });
  }
  if (!user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-auth-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-sm n4-btn-primary",
        onClick: handleLogin,
        disabled: loading,
        children: loading ? "⏳ Đang xử lý..." : "🔑 Đăng nhập Google"
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-auth-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-auth-user", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "relative", display: "inline-flex" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthAvatar, { user }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-auth-info", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-auth-name", children: user.name || user.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-auth-email", children: user.email })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-auth-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-btn n4-btn-sm ${loadingOp === "sync" ? "n4-btn-primary" : "n4-btn-ghost"}`,
          onClick: handleSyncNow,
          disabled: loading,
          title: timeSince ? `Đồng bộ ngay · Lần cuối ${timeSince}` : "Đồng bộ ngay",
          children: loadingOp === "sync" ? "⏳ Đang đồng bộ..." : "☁️ Đồng bộ ngay"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-btn n4-btn-sm ${autoBackupEnabled ? "n4-btn-primary" : "n4-btn-ghost"}`,
          onClick: toggleAuto,
          disabled: loading,
          title: `Tự động đồng bộ mỗi ${formatInterval(syncInterval)}${timeSince ? ` · ${timeSince}` : ""}`,
          children: autoBackupEnabled ? "⏸️ Tự động đồng bộ: BẬT" : "🔁 Tự động đồng bộ: TẮT"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-btn n4-btn-sm n4-btn-ghost",
          onClick: handleLogout,
          disabled: loading,
          children: "🚪 Đăng xuất"
        }
      )
    ] }),
    timeSince && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-auth-sync-time", children: [
      "Lần cuối: ",
      timeSince
    ] }),
    syncMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-auth-sync-msg ${syncMsg.startsWith("❌") ? "error" : "success"}`, children: syncMsg })
  ] });
}
function AIStatusBadge() {
  const { hasKey, isLoggedIn } = useAIKey();
  if (!isLoggedIn) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge", style: { background: "color-mix(in srgb, var(--n4-text-muted) 15%, transparent)", color: "var(--n4-text-muted)" }, children: "Cần đăng nhập" });
  }
  if (hasKey) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge", style: { background: "color-mix(in srgb, var(--n4-neon-green) 15%, transparent)", color: "var(--n4-neon-green)" }, children: "AI sẵn sàng" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge", style: { background: "color-mix(in srgb, var(--n4-neon-red) 15%, transparent)", color: "var(--n4-neon-red)" }, children: "AI chưa sẵn sàng" });
}
function ShortcutRow({ keys, desc }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-shortcut-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-settings-shortcut-desc", children: desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "n4-settings-shortcut-key", children: keys })
  ] });
}
const variants = (light, dark) => Object.freeze({
  light: Object.freeze(light),
  dark: Object.freeze(dark)
});
const THEME_V6_FAMILIES = Object.freeze([
  Object.freeze({
    id: "washi",
    name: "Washi Atelier",
    description: "Giấy washi ấm và mực sumi tĩnh.",
    illustrationTone: "warm",
    texture: "washi",
    ...variants(
      { canvas: "#f4f0e8", canvasSubtle: "#ece7dc", surface: "#fffcf6", surfaceMuted: "#f2ede3", surfaceRaised: "#ffffff", surfaceSunken: "#e9e2d6", text: "#1b211d", textSecondary: "#4c5650", textMuted: "#69736c", border: "#d9d3c7", borderStrong: "#a9a193", brand: "#304a68", brandHover: "#263d57", brandPressed: "#1f3248", brandSoft: "#e4eaf0", onBrand: "#ffffff", success: "#397a52", warning: "#895b18", danger: "#a53b35", info: "#356387" },
      { canvas: "#101512", canvasSubtle: "#151b17", surface: "#1a211d", surfaceMuted: "#202822", surfaceRaised: "#252e28", surfaceSunken: "#0c100e", text: "#f3efe6", textSecondary: "#c1c7c1", textMuted: "#a5afa7", border: "#323c35", borderStrong: "#56645b", brand: "#9ab9d8", brandHover: "#abc8e3", brandPressed: "#c0d8ed", brandSoft: "#1d2a36", onBrand: "#101820", success: "#8dc59d", warning: "#e1b46b", danger: "#ee9188", info: "#91b9d8" }
    )
  }),
  Object.freeze({
    id: "sakura-ink",
    name: "Sakura Ink",
    description: "Hồng tro tiết chế với than mực.",
    illustrationTone: "warm",
    texture: "ink",
    ...variants(
      { canvas: "#f6eeee", canvasSubtle: "#eee2e3", surface: "#fffafa", surfaceMuted: "#f5e9ea", surfaceRaised: "#ffffff", surfaceSunken: "#eadbdd", text: "#292124", textSecondary: "#5d5054", textMuted: "#77686d", border: "#ddced1", borderStrong: "#b8a3a8", brand: "#8f3f54", brandHover: "#793446", brandPressed: "#642b3a", brandSoft: "#f3dde3", onBrand: "#ffffff", success: "#467557", warning: "#8a5a22", danger: "#a43d48", info: "#486880" },
      { canvas: "#171214", canvasSubtle: "#1d1719", surface: "#251d20", surfaceMuted: "#2c2225", surfaceRaised: "#33272b", surfaceSunken: "#110d0e", text: "#f5ecee", textSecondary: "#d0c0c5", textMuted: "#ae9ba1", border: "#44363a", borderStrong: "#655158", brand: "#e29aae", brandHover: "#edacbd", brandPressed: "#f4bfcc", brandSoft: "#3a2229", onBrand: "#241116", success: "#92c2a0", warning: "#dfb875", danger: "#ef929b", info: "#9abbd2" }
    )
  }),
  Object.freeze({
    id: "indigo-study",
    name: "Indigo Study",
    description: "Chàm mát cho những phiên học tập trung.",
    illustrationTone: "cool",
    texture: "plain",
    ...variants(
      { canvas: "#edf1f4", canvasSubtle: "#e2e8ed", surface: "#fbfcfd", surfaceMuted: "#eef2f5", surfaceRaised: "#ffffff", surfaceSunken: "#dbe3e9", text: "#18232d", textSecondary: "#465766", textMuted: "#657584", border: "#ccd6de", borderStrong: "#9eafbc", brand: "#315b83", brandHover: "#284c6e", brandPressed: "#213f5b", brandSoft: "#dce8f2", onBrand: "#ffffff", success: "#347258", warning: "#82601d", danger: "#a33d3d", info: "#35688e" },
      { canvas: "#0e151b", canvasSubtle: "#131c24", surface: "#19242d", surfaceMuted: "#202c36", surfaceRaised: "#273540", surfaceSunken: "#0a0f14", text: "#eef3f6", textSecondary: "#bdc9d1", textMuted: "#9babb6", border: "#32414c", borderStrong: "#50616e", brand: "#94badc", brandHover: "#a7c8e5", brandPressed: "#bdd8ee", brandSoft: "#1c3041", onBrand: "#0d1b27", success: "#85c2a0", warning: "#dfb96e", danger: "#ec8f8f", info: "#8bb9dc" }
    )
  }),
  Object.freeze({
    id: "moss-library",
    name: "Moss Library",
    description: "Xanh rêu dịu và giấy thư viện cũ.",
    illustrationTone: "neutral",
    texture: "washi",
    ...variants(
      { canvas: "#f0f1e9", canvasSubtle: "#e5e8dd", surface: "#fbfcf6", surfaceMuted: "#eef0e7", surfaceRaised: "#ffffff", surfaceSunken: "#dde2d4", text: "#20271f", textSecondary: "#4e5b4c", textMuted: "#6b7768", border: "#d0d6c9", borderStrong: "#a4ae9d", brand: "#526b4c", brandHover: "#455b40", brandPressed: "#394c35", brandSoft: "#e1e9dd", onBrand: "#ffffff", success: "#3c7651", warning: "#80601e", danger: "#9e403b", info: "#45697d" },
      { canvas: "#111611", canvasSubtle: "#171d17", surface: "#1d251d", surfaceMuted: "#242d23", surfaceRaised: "#2b352a", surfaceSunken: "#0c100c", text: "#eff2e9", textSecondary: "#c2cabc", textMuted: "#a2ad9e", border: "#364135", borderStrong: "#566552", brand: "#a8c39d", brandHover: "#b8cfaf", brandPressed: "#c9dcc3", brandSoft: "#253323", onBrand: "#142011", success: "#8dc49c", warning: "#dcb66e", danger: "#e99088", info: "#91b6c9" }
    )
  }),
  Object.freeze({
    id: "high-contrast",
    name: "High Contrast",
    description: "Tương phản tối đa cho khả năng đọc và thao tác.",
    illustrationTone: "neutral",
    texture: "plain",
    ...variants(
      { canvas: "#ffffff", canvasSubtle: "#f2f2f2", surface: "#ffffff", surfaceMuted: "#eeeeee", surfaceRaised: "#ffffff", surfaceSunken: "#e2e2e2", text: "#000000", textSecondary: "#1f1f1f", textMuted: "#3d3d3d", border: "#555555", borderStrong: "#000000", brand: "#003f8f", brandHover: "#002f6c", brandPressed: "#001f49", brandSoft: "#d7e9ff", onBrand: "#ffffff", success: "#006b2d", warning: "#714900", danger: "#9a0010", info: "#004f78" },
      { canvas: "#000000", canvasSubtle: "#0d0d0d", surface: "#111111", surfaceMuted: "#1b1b1b", surfaceRaised: "#222222", surfaceSunken: "#000000", text: "#ffffff", textSecondary: "#f0f0f0", textMuted: "#d0d0d0", border: "#aaaaaa", borderStrong: "#ffffff", brand: "#74b9ff", brandHover: "#99ccff", brandPressed: "#bfdeff", brandSoft: "#092b4d", onBrand: "#000000", success: "#79e39d", warning: "#ffd166", danger: "#ff8d98", info: "#8bd8ff" }
    )
  })
]);
function ThemePresetPicker({ activeThemeMode, themeFamily, setThemeFamily }) {
  const previewMode = activeThemeMode === "light" ? "light" : "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v6-theme-picker", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "v6-theme-picker__hint", children: [
      THEME_MODE_LABELS[activeThemeMode],
      " · mỗi họ giao diện có bản sáng và tối hoàn chỉnh."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v6-theme-picker__grid", role: "radiogroup", "aria-label": "Họ giao diện", children: THEME_V6_FAMILIES.map((family) => {
      const selected = themeFamily === family.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", role: "radio", "aria-checked": selected, className: "v6-theme-choice", onClick: () => setThemeFamily(family.id), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v6-theme-choice__copy", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: family.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: family.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v6-theme-preview", "data-design-version": "v6", "data-theme-family": family.id, "data-theme-mode": previewMode, "data-theme": previewMode, "aria-hidden": "true", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v6-theme-preview__nav", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v6-theme-preview__paper", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-theme-preview__jp", lang: "ja", children: "学ぶ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-theme-preview__input" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-theme-preview__button" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v6-theme-preview__states", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 12 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 12 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-theme-choice__status", children: selected ? "Đang dùng" : "Xem trước" })
      ] }, family.id);
    }) })
  ] });
}
function VoicePicker({ lang }) {
  const [voices, setVoices] = reactExports.useState([]);
  const [selected, setSelected] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (typeof speechSynthesis === "undefined") return void 0;
    const load = () => {
      const list = lang === "ja" ? getJapaneseVoices() : getVietnameseVoices();
      setVoices(list);
      setSelected(getPreferredVoiceName(lang));
    };
    load();
    speechSynthesis.onvoiceschanged = load;
    return () => {
      if (speechSynthesis.onvoiceschanged === load) {
        speechSynthesis.onvoiceschanged = null;
      }
    };
  }, [lang]);
  const onChange = (event) => {
    const name = event.target.value;
    setSelected(name);
    setPreferredVoice(lang, name);
    if (lang === "ja") speakJP("こんにちは");
    else speakVi("Xin chào");
  };
  if (voices.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.8em", opacity: 0.6 }, children: "Không có giọng" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: selected, onChange, className: "n4-settings-select", style: { maxWidth: 200 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Tự động" }),
    voices.map((voice) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: voice.name, children: voice.name }, voice.name))
  ] });
}
function buildSettingsItems({ store, learning, activeThemeMode, actions }) {
  var _a;
  const s = store;
  const { handleExport, handleImport, handleResetAllData, resetSettings, rememberPresentationChange } = actions;
  return [
    // DISPLAY -> theme
    {
      tab: "display",
      section: "theme",
      kw: "theme mode dark light chu de sang toi",
      label: "Chế độ sáng/tối",
      desc: "Chọn giao diện sáng hoặc tối",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: [{ v: "dark", l: "🌙 Tối" }, { v: "light", l: "☀️ Sáng" }].map((mode) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.themeMode === mode.v ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => {
        rememberPresentationChange == null ? void 0 : rememberPresentationChange();
        s.setThemeMode(mode.v);
      }, children: mode.l }, mode.v)) })
    },
    {
      tab: "display",
      section: "theme",
      kw: "theme dark light auto chu de sang toi tu dong preset family",
      label: "Bộ giao diện",
      desc: `Chọn họ giao diện, tự đổi theo ${THEME_MODE_LABELS[activeThemeMode]}`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemePresetPicker, { activeThemeMode, themeFamily: s.themeFamily, setThemeFamily: (familyId) => {
        rememberPresentationChange == null ? void 0 : rememberPresentationChange();
        s.setThemeFamily(familyId);
      } })
    },
    {
      tab: "display",
      section: "theme",
      kw: "accent color mau nhan chu dao",
      label: "Màu nhấn (tùy chỉnh)",
      desc: "Ghi đè màu nhấn của bộ giao diện",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-accent-control", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-accent-grid", children: ACCENT_COLORS.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            title: color.label,
            "aria-label": `Dùng màu nhấn ${color.label}`,
            "aria-pressed": Boolean(s.customAccentEnabled && s.accent === color.value),
            onClick: () => {
              rememberPresentationChange == null ? void 0 : rememberPresentationChange();
              s.setAccent(color.value);
            },
            className: `n4-settings-accent-btn ${s.customAccentEnabled && s.accent === color.value ? "active" : ""}`,
            style: { "--settings-accent-swatch": color.value }
          },
          color.value
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "n4-btn n4-btn-sm n4-btn-ghost",
            disabled: !s.customAccentEnabled,
            onClick: () => {
              rememberPresentationChange == null ? void 0 : rememberPresentationChange();
              s.clearCustomAccent();
            },
            children: "Dùng màu của giao diện"
          }
        )
      ] })
    },
    // DISPLAY -> gfx
    {
      tab: "display",
      section: "gfx",
      kw: "energy performance quality battery heat cool phone mobile tiet kiem pin nong may",
      label: "Chế độ năng lượng",
      desc: s.energyMode === "quality" ? "Chất lượng cao nhất: hình ảnh đẹp hơn, dùng nhiều tài nguyên hơn" : "Hiệu năng tốt nhất: mặc định mát máy, tiết kiệm pin",
      popular: true,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-density-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.energyMode !== "quality" ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setEnergyMode("performance"), children: "Hiệu năng tốt nhất" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.energyMode === "quality" ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setEnergyMode("quality"), children: "Chất lượng tốt nhất" })
      ] }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.65rem", color: "var(--n4-text-secondary, #aaa)", padding: "4px 0" }, children: s.energyMode === "quality" ? "Chế độ đẹp: bật lại particle/chuyển động và đẩy 3D lên cao. Nên dùng khi máy mát hoặc cắm sạc." : "Mặc định an toàn: tắt particle, giảm chuyển động, ép 3D thấp nhất và giới hạn FPS để tránh nóng máy." })
    },
    {
      tab: "display",
      section: "gfx",
      kw: "touch particle burst hieu ung cham intensity nhe nang",
      label: "✨ Hiệu ứng chạm",
      desc: `Cường độ burst khi chạm: ${{ off: "Tắt", light: "Nhẹ", normal: "Vừa", full: "Đầy đủ" }[s.touchParticleIntensity] || "Vừa"}`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: [{ v: "off", l: "🚫 Tắt" }, { v: "light", l: "💨 Nhẹ" }, { v: "normal", l: "✨ Vừa" }, { v: "full", l: "🎆 Full" }].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.touchParticleIntensity === opt.v ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setTouchParticleIntensity(opt.v), children: opt.l }, opt.v)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.65rem", color: "var(--n4-text-secondary, #aaa)", padding: "4px 0" }, children: s.touchParticleIntensity === "off" ? "🚫 Tắt hiệu ứng chạm — tốt cho thiết bị yếu" : s.touchParticleIntensity === "light" ? "💨 ~4 hạt/lần, không bóng đổ — iPad/mobile mượt" : s.touchParticleIntensity === "full" ? "🎆 Đầy đủ: nhiều hạt, bóng sáng, hiệu ứng lớn" : "✨ Cân bằng hiệu ứng và hiệu suất" })
    },
    {
      tab: "display",
      section: "gfx",
      kw: "graphics quality 3d chat luong do hoa tier mobile hieu nang nong pin battery world isekai",
      label: "Chất lượng thế giới 3D",
      desc: `Mức chi tiết: ${{ auto: "Tự động", low: "Tiết kiệm pin", medium: "Cân bằng", high: "Hình ảnh đẹp" }[s.gfxTier] || "Tự động"}`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: [{ v: "auto", l: "Tự động" }, { v: "low", l: "Tiết kiệm pin" }, { v: "medium", l: "Cân bằng" }, { v: "high", l: "Hình ảnh đẹp" }].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.gfxTier === opt.v ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setGfxTier(opt.v), children: opt.l }, opt.v)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.65rem", color: "var(--n4-text-secondary, #aaa)", padding: "4px 0" }, children: s.gfxTier === "low" ? "🪫 Tắt cánh hoa/đom đóm/mây — giảm nóng máy trên mobile" : s.gfxTier === "medium" ? "⚖️ Hiệu ứng vừa phải, cân bằng cho tablet/máy tầm trung" : s.gfxTier === "high" ? "🔥 Đầy đủ hiệu ứng, dành cho PC/laptop mạnh" : "🤖 Tự chọn theo thiết bị — mobile → tiết kiệm, PC → cao" })
    },
    {
      tab: "display",
      section: "gfx",
      kw: "trainer 3d backdrop nen ba chieu",
      label: "Nền 3D trong bài luyện",
      desc: "Tải nền 3D trang trí trong trainer (mặc định tắt)",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.trainer3dEnabled ? "active" : ""}`, onClick: () => s.setTrainer3dEnabled(!s.trainer3dEnabled) })
    },
    // DISPLAY -> layout
    {
      tab: "display",
      section: "layout",
      kw: "density mat do compact spacious",
      label: "Mật độ hiển thị",
      desc: "Khoảng cách giữa các phần tử",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: DENSITIES.map((density) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.density === density.value ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setDensity(density.value), children: density.label }, density.value)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.65rem", color: "var(--n4-text-secondary, #aaa)", padding: "4px 0" }, children: s.density === "compact" ? "📦 Nhiều nội dung trên 1 trang, khoảng cách nhỏ" : s.density === "spacious" ? "🌊 Thoáng hơn, khoảng cách lớn giữa các phần" : "⚖️ Cân bằng — phù hợp đa số người dùng" })
    },
    {
      tab: "display",
      section: "layout",
      kw: "font scale size co chu kich thuoc text toan cuc",
      label: "🔤 Cỡ chữ toàn cục",
      desc: `Kích thước chữ: ${s.fontScale}`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: ["S", "M", "L", "XL"].map((size) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.fontScale === size ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => {
        rememberPresentationChange == null ? void 0 : rememberPresentationChange();
        s.setFontScale(size);
      }, children: size }, size)) })
    },
    {
      tab: "display",
      section: "layout",
      kw: "card layout grid list kieu hien thi the",
      label: "🃏 Kiểu hiển thị thẻ",
      desc: "Lưới, danh sách hoặc gọn",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: CARD_LAYOUTS.map((layout) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.cardLayout === layout.value ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setCardLayout(layout.value), children: layout.label }, layout.value)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 8, padding: "6px 0", justifyContent: "center" }, children: CARD_LAYOUTS.map((layout) => {
        const isActive = s.cardLayout === layout.value;
        const boxStyle = { border: `1px solid ${isActive ? "var(--n4-accent)" : "var(--n4-border, #333)"}`, borderRadius: 4, padding: 4, opacity: isActive ? 1 : 0.4, transition: "all .2s", width: 60, fontSize: "0.55rem", textAlign: "center" };
        if (layout.value === "grid") return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: boxStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }, children: [1, 2, 3, 4].map((number) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "var(--n4-accent)", borderRadius: 2, height: 12, opacity: 0.5 } }, number)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 2 }, children: "Lưới" })
        ] }, layout.value);
        if (layout.value === "list") return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: boxStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 2 }, children: [1, 2, 3].map((number) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "var(--n4-accent)", borderRadius: 2, height: 6, opacity: 0.5 } }, number)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 2 }, children: "Danh sách" })
        ] }, layout.value);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: boxStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1 }, children: [1, 2, 3, 4, 5, 6].map((number) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "var(--n4-accent)", borderRadius: 1, height: 6, opacity: 0.5 } }, number)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 2 }, children: "Gọn" })
        ] }, layout.value);
      }) })
    },
    {
      tab: "display",
      section: "layout",
      kw: "example display vi du hien thi",
      label: "📖 Hiển thị ví dụ",
      desc: "Cách hiện ví dụ mẫu trong bài",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: EXAMPLE_MODES.map((mode) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.exampleDisplay === mode.value ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setExampleDisplay(mode.value), children: mode.label }, mode.value)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "6px 8px", fontSize: "0.72rem", color: "var(--n4-text-secondary, #aaa)", borderLeft: "2px solid var(--n4-accent)", marginTop: 4 }, children: s.exampleDisplay === "hidden" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { opacity: 0.4 }, children: "Ví dụ: (bị ẩn)" }) : s.exampleDisplay === "block" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "📝 食べる",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { opacity: 0.6 }, children: "= ăn" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "📝 食べる = ăn ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { opacity: 0.5 }, children: "(cùng dòng)" })
      ] }) })
    },
    {
      tab: "display",
      section: "layout",
      kw: "nav position vi tri thanh dieu huong",
      label: "📍 Vị trí thanh điều hướng",
      desc: "Trên hoặc dưới",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-density-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.navPosition === "top" ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setNavPosition("top"), children: "Trên" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.navPosition === "bottom" ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setNavPosition("bottom"), children: "Dưới" })
      ] })
    },
    {
      tab: "display",
      section: "layout",
      kw: "games columns cot so luong",
      label: "🎮 Số cột Games Hub",
      desc: `${s.gamesCols} cột`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: [2, 3, 4].map((columnCount) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.gamesCols === columnCount ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setGamesCols(columnCount), children: columnCount }, columnCount)) })
    },
    {
      tab: "display",
      section: "layout",
      kw: "minna view mode bai hoc hien thi",
      label: "📚 Chế độ xem Minna",
      desc: "Kiểu hiển thị bài học Minna no Nihongo",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: MINNA_VIEWS.map((view) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.minnaView === view.value ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setMinnaView(view.value), children: view.label }, view.value)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.65rem", color: "var(--n4-text-secondary, #aaa)", padding: "4px 0" }, children: s.minnaView === "compact" ? "📋 Thu gọn: chỉ tiêu đề, bấm mở rộng" : s.minnaView === "expanded" ? "📖 Chi tiết: hiện đầy đủ nội dung mỗi bài" : "📑 Mặc định: cân bằng giữa chi tiết và gọn" })
    },
    // DISPLAY -> japanese
    {
      tab: "display",
      section: "japanese",
      kw: "furigana phien am han",
      label: "Hiện Furigana",
      desc: "Phiên âm trên chữ Hán",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.showFurigana ? "active" : ""}`, onClick: s.toggleFurigana })
    },
    {
      tab: "display",
      section: "japanese",
      kw: "romaji latin phien am",
      label: "Hiện Romaji",
      desc: "Phiên âm Latin",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.showRomaji ? "active" : ""}`, onClick: s.toggleRomaji })
    },
    // DISPLAY -> font
    {
      tab: "display",
      section: "font",
      kw: "kanji font chu kieu",
      label: "🖋️ Font chữ Kanji",
      desc: "Kiểu chữ riêng cho Kanji",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "n4-settings-select", value: s.kanjiFont, onChange: (event) => s.setKanjiFont(event.target.value), children: KANJI_FONTS.map((font) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: font.value, children: font.label }, font.value)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 12, padding: "8px 0", justifyContent: "center" }, children: ["漢", "字", "読"].map((kanji) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontFamily: s.kanjiFont === "default" ? void 0 : s.kanjiFont, fontWeight: s.kanjiWeight, fontSize: `${s.kanjiSize}rem`, color: "var(--n4-accent)" }, children: kanji }, kanji)) })
    },
    {
      tab: "display",
      section: "font",
      kw: "kanji weight dam nhat do dam",
      label: "🖊️ Độ đậm Kanji",
      desc: `Độ đậm nét chữ: ${s.kanjiWeight}`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Độ đậm Kanji", min: "100", max: "900", step: "100", value: s.kanjiWeight, onChange: (event) => s.setKanjiWeight(event.target.value), className: "n4-settings-range" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.75rem", minWidth: 28, textAlign: "center", fontWeight: s.kanjiWeight }, children: s.kanjiWeight })
      ] }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 16, padding: "6px 0", justifyContent: "center", fontSize: "1.4rem" }, children: KANJI_WEIGHTS.map((weight) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: weight.value, opacity: s.kanjiWeight === weight.value ? 1 : 0.35, color: s.kanjiWeight === weight.value ? "var(--n4-accent)" : void 0, transition: "all .2s" }, children: [
        "漢 ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { style: { fontSize: "0.6rem" }, children: weight.label })
      ] }, weight.value)) })
    },
    {
      tab: "display",
      section: "font",
      kw: "kanji size co chu kich thuoc",
      label: "📏 Cỡ chữ Kanji",
      desc: `${s.kanjiSize.toFixed(1)}rem`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Cỡ chữ Kanji chính", min: "1.2", max: "3", step: "0.1", value: s.kanjiSize, onChange: (event) => s.setKanjiSize(parseFloat(event.target.value)), className: "n4-settings-range" })
    },
    {
      tab: "display",
      section: "font",
      kw: "font size kanji section co chu tab",
      label: "📐 Cỡ chữ tab Kanji",
      desc: `${s.fzKanji}px`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Cỡ chữ phần Kanji", min: "12", max: "24", step: "1", value: s.fzKanji, onChange: (event) => s.setFzKanji(parseInt(event.target.value, 10)), className: "n4-settings-range" })
    },
    {
      tab: "display",
      section: "font",
      kw: "font size vocab section tu vung co chu tab",
      label: "📐 Cỡ chữ tab Từ vựng",
      desc: `${s.fzVocab}px`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Cỡ chữ phần từ vựng", min: "12", max: "24", step: "1", value: s.fzVocab, onChange: (event) => s.setFzVocab(parseInt(event.target.value, 10)), className: "n4-settings-range" })
    },
    {
      tab: "display",
      section: "font",
      kw: "font size grammar section ngu phap co chu tab",
      label: "📐 Cỡ chữ tab Ngữ pháp",
      desc: `${s.fzGrammar}px`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Cỡ chữ phần ngữ pháp", min: "12", max: "24", step: "1", value: s.fzGrammar, onChange: (event) => s.setFzGrammar(parseInt(event.target.value, 10)), className: "n4-settings-range" })
    },
    // GAMES -> study_mode
    {
      tab: "games",
      section: "study_mode",
      kw: "difficulty do kho easy hard jlpt",
      label: "Độ khó",
      desc: "Mức độ khó cho game/quiz",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-difficulty-col", children: DIFFICULTIES.map((difficulty) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.difficulty === difficulty.value ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setDifficulty(difficulty.value), title: difficulty.desc, children: difficulty.label }, difficulty.value)) }),
      preview: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.65rem", color: "var(--n4-text-secondary, #aaa)", padding: "4px 0" }, children: ((_a = DIFFICULTIES.find((difficulty) => difficulty.value === s.difficulty)) == null ? void 0 : _a.desc) || "" })
    },
    // GAMES -> goals
    {
      tab: "games",
      section: "goals",
      kw: "xp goal muc tieu diem ngay",
      label: "Mục tiêu XP/ngày",
      desc: `${s.dailyGoal} XP`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Mục tiêu XP mỗi ngày", min: "10", max: "200", step: "10", value: s.dailyGoal, onChange: (event) => s.setDailyGoal(parseInt(event.target.value, 10)), className: "n4-settings-range" })
    },
    // GAMES -> quiz_options
    {
      tab: "games",
      section: "quiz_options",
      kw: "auto advance tu dong chuyen cau",
      label: "Tự động chuyển câu",
      desc: "Tự sang câu tiếp sau khi trả lời",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.autoAdvance ? "active" : ""}`, onClick: () => s.setAutoAdvance(!s.autoAdvance) })
    },
    {
      tab: "games",
      section: "quiz_options",
      kw: "question count so cau hoi mac dinh",
      label: "Số câu hỏi mặc định",
      desc: `${s.defaultQuestionCount || 10} câu/phiên`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "n4-input", style: { width: "auto" }, value: s.defaultQuestionCount || 10, onChange: (event) => s.setDefaultQuestionCount(Number(event.target.value)), children: [5, 10, 15, 20, 30, 50].map((count) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: count, children: [
        count,
        " câu"
      ] }, count)) })
    },
    // GAMES -> minna_range
    {
      tab: "games",
      section: "minna_range",
      kw: "lesson start tu bai bat dau pham vi",
      label: "📖 Bắt đầu từ bài",
      desc: s.lessonStart > 0 ? `Bài ${s.lessonStart}` : "Tất cả (từ đầu)",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", style: { width: "auto" }, value: s.lessonStart || 0, onChange: (event) => s.setLessonStart(Number(event.target.value)), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 0, children: "Tất cả" }),
        Array.from({ length: 50 }, (_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: index + 1, children: [
          "Bài ",
          index + 1
        ] }, index + 1))
      ] })
    },
    {
      tab: "games",
      section: "minna_range",
      kw: "lesson cap den bai ket thuc pham vi gioi han",
      label: "📖 Kết thúc ở bài",
      desc: s.lessonCap > 0 ? `Bài ${s.lessonCap}` : "Tất cả (không giới hạn)",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", style: { width: "auto" }, value: s.lessonCap || 0, onChange: (event) => s.setLessonCap(Number(event.target.value)), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 0, children: "Không giới hạn" }),
        Array.from({ length: 50 }, (_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: index + 1, children: [
          "Bài ",
          index + 1
        ] }, index + 1))
      ] }),
      preview: s.lessonStart > 0 || s.lessonCap > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.65rem", color: "var(--n4-accent)", padding: "4px 0" }, children: [
        "📚 Phạm vi: Bài ",
        s.lessonStart > 0 ? s.lessonStart : 1,
        " → ",
        s.lessonCap > 0 ? `Bài ${s.lessonCap}` : "Cuối"
      ] }) : null
    },
    // AUDIO -> tts_options
    {
      tab: "audio",
      section: "tts_options",
      kw: "tts rate toc do phat am",
      label: "Tốc độ TTS",
      desc: `${s.ttsRate.toFixed(1)}x`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Tốc độ đọc TTS", min: "0.3", max: "2", step: "0.1", value: s.ttsRate, onChange: (event) => s.setTtsRate(parseFloat(event.target.value)), className: "n4-settings-range" })
    },
    {
      tab: "audio",
      section: "tts_options",
      kw: "auto speak tu dong phat am",
      label: "Tự động phát âm",
      desc: "Phát âm khi hiện thẻ",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.autoSpeak ? "active" : ""}`, onClick: () => s.setAutoSpeak(!s.autoSpeak) })
    },
    // AUDIO -> voices
    {
      tab: "audio",
      section: "voices",
      kw: "voice jp giong noi tieng nhat",
      label: "🇯🇵 Giọng tiếng Nhật",
      desc: "Chọn giọng TTS tiếng Nhật",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx(VoicePicker, { lang: "ja" })
    },
    {
      tab: "audio",
      section: "voices",
      kw: "voice vi giong noi tieng viet",
      label: "🇻🇳 Giọng tiếng Việt",
      desc: "Chọn giọng TTS tiếng Việt",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx(VoicePicker, { lang: "vi" })
    },
    // AUDIO -> sound_fx
    {
      tab: "audio",
      section: "sound_fx",
      kw: "sound fx hieu ung am thanh ui",
      label: "🔔 Hiệu ứng âm UI",
      desc: "Âm thanh khi bấm nút",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.soundFX ? "active" : ""}`, onClick: () => s.setSoundFX(!s.soundFX) })
    },
    {
      tab: "audio",
      section: "sound_fx",
      kw: "sound correct am dung tra loi",
      label: "✅ Âm trả lời đúng",
      desc: "Phát âm khi trả lời đúng",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.soundCorrect ? "active" : ""}`, onClick: () => s.setSoundCorrect(!s.soundCorrect) })
    },
    {
      tab: "audio",
      section: "sound_fx",
      kw: "sound wrong am sai tra loi",
      label: "❌ Âm trả lời sai",
      desc: "Phát âm khi trả lời sai",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.soundWrong ? "active" : ""}`, onClick: () => s.setSoundWrong(!s.soundWrong) })
    },
    // AUDIO -> radio_options
    {
      tab: "audio",
      section: "radio_options",
      kw: "radio rate jp tieng nhat toc do",
      label: "📻 Tốc độ Radio JP",
      desc: `${s.radioRateJp.toFixed(1)}x`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Tốc độ radio tiếng Nhật", min: "0.5", max: "1.5", step: "0.1", value: s.radioRateJp, onChange: (event) => s.setRadioRateJp(parseFloat(event.target.value)), className: "n4-settings-range" })
    },
    {
      tab: "audio",
      section: "radio_options",
      kw: "radio rate vi tieng viet toc do",
      label: "📻 Tốc độ Radio VI",
      desc: `${s.radioRateVi.toFixed(1)}x`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", "aria-label": "Tốc độ radio tiếng Việt", min: "0.5", max: "1.5", step: "0.1", value: s.radioRateVi, onChange: (event) => s.setRadioRateVi(parseFloat(event.target.value)), className: "n4-settings-range" })
    },
    // ACCESSIBILITY -> focus
    {
      tab: "accessibility",
      section: "focus",
      kw: "focus mode tap trung hoc",
      label: "🎯 Chế độ tập trung",
      desc: "Ẩn thanh điều hướng, chỉ hiện nội dung (Esc để thoát)",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": "Focus mode", "aria-pressed": s.focusMode, className: `n4-toggle ${s.focusMode ? "active" : ""}`, onClick: () => s.setFocusMode(!s.focusMode) })
    },
    {
      tab: "accessibility",
      section: "focus",
      kw: "reduced motion giam chuyen dong animation",
      label: "Giảm chuyển động",
      desc: "Tắt hiệu ứng, animation",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.reducedMotion ? "active" : ""}`, onClick: () => s.setReducedMotion(!s.reducedMotion) })
    },
    // ACCESSIBILITY -> visual_aid
    {
      tab: "accessibility",
      section: "visual_aid",
      kw: "high contrast tuong phan cao",
      label: "Tương phản cao",
      desc: "Tăng độ tương phản chữ",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.highContrast ? "active" : ""}`, onClick: () => s.setHighContrast(!s.highContrast) })
    },
    {
      tab: "accessibility",
      section: "visual_aid",
      kw: "color blind protanopia mu mau do",
      label: "🔴 Mù màu đỏ (Protanopia)",
      desc: "Hỗ trợ khiếm khuyết nhìn đỏ",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.cbProtanopia ? "active" : ""}`, onClick: () => s.setCbProtanopia(!s.cbProtanopia) })
    },
    {
      tab: "accessibility",
      section: "visual_aid",
      kw: "color blind deuteranopia mu mau xanh la",
      label: "🟢 Mù màu xanh (Deuteranopia)",
      desc: "Hỗ trợ khiếm khuyết nhìn xanh lá",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.cbDeuteranopia ? "active" : ""}`, onClick: () => s.setCbDeuteranopia(!s.cbDeuteranopia) })
    },
    {
      tab: "accessibility",
      section: "visual_aid",
      kw: "color blind tritanopia mu mau xanh duong",
      label: "🔵 Mù màu xanh dương (Tritanopia)",
      desc: "Hỗ trợ khiếm khuyết nhìn xanh dương",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.cbTritanopia ? "active" : ""}`, onClick: () => s.setCbTritanopia(!s.cbTritanopia) })
    },
    {
      tab: "accessibility",
      section: "visual_aid",
      kw: "dyslexia font chu doc kho",
      label: "🔤 Font Dyslexia",
      desc: "Dùng font dễ đọc hơn",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.dyslexiaFont ? "active" : ""}`, onClick: () => s.setDyslexiaFont(!s.dyslexiaFont) })
    },
    {
      tab: "accessibility",
      section: "visual_aid",
      kw: "transparency blur trong suot giam",
      label: "Giảm hiệu ứng trong suốt",
      desc: "Dùng nền đặc, dễ đọc và nhẹ thiết bị hơn",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.reducedTransparency ? "active" : ""}`, onClick: () => s.setReducedTransparency(!s.reducedTransparency) })
    },
    // ACCESSIBILITY -> gestures
    {
      tab: "accessibility",
      section: "gestures",
      kw: "large touch target nut lon cam ung",
      label: "👆 Nút bấm lớn",
      desc: "Tăng kích thước cho màn cảm ứng",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.largeTouchTargets ? "active" : ""}`, onClick: () => s.setLargeTouchTargets(!s.largeTouchTargets) })
    },
    {
      tab: "accessibility",
      section: "gestures",
      kw: "swipe close vuot dong modal",
      label: "👇 Vuốt đóng modal",
      desc: "Vuốt xuống để đóng cửa sổ",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.swipeClose ? "active" : ""}`, onClick: () => s.setSwipeClose(!s.swipeClose) })
    },
    // ADVANCED -> developer
    ...[],
    // ADVANCED -> sidebar
    {
      tab: "advanced",
      section: "sidebar",
      kw: "sidebar study tools thanh ben cong cu hoc",
      label: "📚 Hiện Công Cụ Học",
      desc: "Timer, Jisho, Phân tích, Ghi chú... (19 công cụ)",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.sidebarStudyTools ? "active" : ""}`, onClick: () => s.setSidebarStudyTools(!s.sidebarStudyTools) })
    },
    {
      tab: "advanced",
      section: "sidebar",
      kw: "sidebar extended tinh nang mo rong",
      label: "🧩 Hiện Tính Năng Mở Rộng",
      desc: "Hán-Việt, Keigo, Viết canvas... (26 tính năng)",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.sidebarExtended ? "active" : ""}`, onClick: () => s.setSidebarExtended(!s.sidebarExtended) })
    },
    // ADVANCED -> shortcuts
    {
      tab: "advanced",
      section: "shortcuts",
      kw: "shortcut keyboard phim tat ctrl",
      label: "⌨️ Phím tắt",
      desc: "Danh sách phím tắt",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-shortcuts-list", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRow, { keys: "Ctrl+K", desc: "Tìm kiếm nhanh" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRow, { keys: "Ctrl+,", desc: "Mở Cài đặt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRow, { keys: "Ctrl+B", desc: "Bảng gỡ lỗi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRow, { keys: "Esc", desc: "Đóng modal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRow, { keys: "1-6", desc: "Chuyển tab điều hướng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRow, { keys: "Enter", desc: "Xác nhận" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRow, { keys: "Space", desc: "Phát âm" })
      ] })
    },
    // ADVANCED -> sync_options
    {
      tab: "advanced",
      section: "sync_options",
      kw: "sync interval tan suat dong bo thoi gian cloud backup",
      label: "Tần suất tự động đồng bộ",
      desc: `Đồng bộ dữ liệu lên cloud mỗi: ${s.syncInterval >= 6e4 ? `${Math.round(s.syncInterval / 6e4)} phút` : `${Math.round(s.syncInterval / 1e3)} giây`}`,
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-density-row", children: [{ v: 2e3, l: "2s (Nhanh)" }, { v: 5e3, l: "5s" }, { v: 1e4, l: "10s" }, { v: 3e4, l: "30s" }, { v: 6e4, l: "1 phút" }].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${s.syncInterval === opt.v ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => s.setSyncInterval(opt.v), children: opt.l }, opt.v)) })
    },
    // ONLINE -> cloud
    {
      tab: "online",
      section: "cloud",
      kw: "ai status trang thai provider groq openrouter",
      label: "Trạng thái nhà cung cấp AI",
      desc: "Trạng thái AI từ hệ thống",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx(AIStatusBadge, {})
    },
    {
      tab: "online",
      section: "cloud",
      kw: "account google login dang nhap sync dong bo cloud",
      label: "☁️ Tài khoản & Đồng bộ",
      desc: "Đăng nhập Google, đồng bộ dữ liệu lên cloud",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthButton, {})
    },
    // ONLINE -> backup
    {
      tab: "online",
      section: "backup",
      kw: "export xuat du lieu backup sao luu",
      label: "Xuất dữ liệu",
      desc: "Tải về bookmark, SRS, ghi chú",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: handleExport, children: "📤 Xuất" })
    },
    {
      tab: "online",
      section: "backup",
      kw: "import nhap du lieu restore khoi phuc",
      label: "Nhập dữ liệu",
      desc: "Khôi phục từ file JSON",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: handleImport, children: "📥 Nhập" })
    },
    // ONLINE -> stats
    {
      tab: "online",
      section: "stats",
      kw: "stats thong ke level xp",
      label: "Thống kê",
      desc: "Dữ liệu hiện tại",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-stats", children: [
        "🏆 Cấp độ ",
        learning.level,
        " · ",
        learning.xp,
        " Điểm",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "🔖 ",
        Object.keys(learning.bookmarks || {}).length,
        " mục đánh dấu",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "📚 ",
        Object.keys(learning.srs || {}).length,
        " mục ôn tập (SRS)"
      ] })
    },
    {
      tab: "games",
      section: "study_mode",
      kw: "chance random may rui gacha gambling an",
      label: "Ẩn hoạt động dựa trên may rủi",
      desc: "Giữ gacha, thẻ cào và trò may rủi khỏi luồng mặc định",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${s.hideChanceBasedActivities ? "active" : ""}`, onClick: () => s.setHideChanceBasedActivities(!s.hideChanceBasedActivities) })
    },
    // ONLINE -> reset
    {
      tab: "online",
      section: "reset",
      kw: "reset settings default mac dinh khoi phuc cai dat",
      label: "🔄 Khôi phục cài đặt mặc định",
      desc: "Reset mọi cài đặt, giữ nguyên dữ liệu học tập",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: resetSettings, children: "🔄 Khôi phục" })
    },
    {
      tab: "online",
      section: "reset",
      kw: "reset xoa toan bo clear du lieu",
      label: "Xóa toàn bộ",
      desc: "Xóa mọi dữ liệu local trừ đăng nhập rồi đồng bộ trạng thái sạch lên cloud",
      ctrl: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: handleResetAllData, children: "🗑️ Reset" })
    }
  ].map((item) => {
    var _a2, _b;
    return {
      ...item,
      compact: (_a2 = item.compact) != null ? _a2 : COMPACT_ITEMS_SET.has(item.label),
      popular: (_b = item.popular) != null ? _b : POPULAR_ITEMS_SET.has(item.label)
    };
  });
}
function Settings() {
  var _a;
  const [urlParams, setUrlParams] = useSearchParams();
  const store = useAppStore(useShallow((s2) => ({
    theme: s2.theme,
    themeMode: s2.themeMode,
    accent: s2.accent,
    customAccentEnabled: s2.customAccentEnabled,
    density: s2.density,
    showFurigana: s2.showFurigana,
    showRomaji: s2.showRomaji,
    ttsRate: s2.ttsRate,
    autoSpeak: s2.autoSpeak,
    difficulty: s2.difficulty,
    dailyGoal: s2.dailyGoal,
    newItemsPerDay: s2.newItemsPerDay,
    autoAdvance: s2.autoAdvance,
    defaultQuestionCount: s2.defaultQuestionCount,
    lessonStart: s2.lessonStart,
    lessonCap: s2.lessonCap,
    reducedMotion: s2.reducedMotion,
    reducedTransparency: s2.reducedTransparency,
    highContrast: s2.highContrast,
    debugMode: s2.debugMode,
    trainer3dEnabled: s2.trainer3dEnabled,
    hideChanceBasedActivities: s2.hideChanceBasedActivities,
    kanjiFont: s2.kanjiFont,
    kanjiWeight: s2.kanjiWeight,
    kanjiSize: s2.kanjiSize,
    fzKanji: s2.fzKanji,
    fzVocab: s2.fzVocab,
    fzGrammar: s2.fzGrammar,
    cardLayout: s2.cardLayout,
    exampleDisplay: s2.exampleDisplay,
    navPosition: s2.navPosition,
    gamesCols: s2.gamesCols,
    minnaView: s2.minnaView,
    soundFX: s2.soundFX,
    soundCorrect: s2.soundCorrect,
    soundWrong: s2.soundWrong,
    radioRateJp: s2.radioRateJp,
    radioRateVi: s2.radioRateVi,
    cbProtanopia: s2.cbProtanopia,
    cbDeuteranopia: s2.cbDeuteranopia,
    cbTritanopia: s2.cbTritanopia,
    dyslexiaFont: s2.dyslexiaFont,
    largeTouchTargets: s2.largeTouchTargets,
    swipeFlashcard: s2.swipeFlashcard,
    swipeClose: s2.swipeClose,
    energyMode: s2.energyMode,
    touchParticleIntensity: s2.touchParticleIntensity,
    gfxTier: s2.gfxTier,
    sidebarStudyTools: s2.sidebarStudyTools,
    sidebarExtended: s2.sidebarExtended,
    sidebarPhase2: s2.sidebarPhase2,
    sidebarPhase3: s2.sidebarPhase3,
    focusMode: s2.focusMode,
    themePreset: s2.themePreset,
    themeFamily: s2.themeFamily,
    syncInterval: s2.syncInterval,
    fontScale: s2.fontScale,
    // Setters (stable function refs — not part of shallow equality check)
    setTheme: s2.setTheme,
    setThemeMode: s2.setThemeMode,
    setAccent: s2.setAccent,
    clearCustomAccent: s2.clearCustomAccent,
    setThemeFamily: s2.setThemeFamily,
    applyThemePreset: s2.applyThemePreset,
    clearThemePreset: s2.clearThemePreset,
    setDensity: s2.setDensity,
    toggleFurigana: s2.toggleFurigana,
    toggleRomaji: s2.toggleRomaji,
    setTtsRate: s2.setTtsRate,
    setAutoSpeak: s2.setAutoSpeak,
    setDifficulty: s2.setDifficulty,
    setDailyGoal: s2.setDailyGoal,
    setNewItemsPerDay: s2.setNewItemsPerDay,
    setAutoAdvance: s2.setAutoAdvance,
    setDefaultQuestionCount: s2.setDefaultQuestionCount,
    setLessonStart: s2.setLessonStart,
    setLessonCap: s2.setLessonCap,
    setReducedMotion: s2.setReducedMotion,
    setReducedTransparency: s2.setReducedTransparency,
    setHighContrast: s2.setHighContrast,
    setTrainer3dEnabled: s2.setTrainer3dEnabled,
    setHideChanceBasedActivities: s2.setHideChanceBasedActivities,
    setDebugMode: s2.setDebugMode,
    setKanjiFont: s2.setKanjiFont,
    setKanjiWeight: s2.setKanjiWeight,
    setKanjiSize: s2.setKanjiSize,
    setFzKanji: s2.setFzKanji,
    setFzVocab: s2.setFzVocab,
    setFzGrammar: s2.setFzGrammar,
    setCardLayout: s2.setCardLayout,
    setExampleDisplay: s2.setExampleDisplay,
    setNavPosition: s2.setNavPosition,
    setGamesCols: s2.setGamesCols,
    setMinnaView: s2.setMinnaView,
    setSoundFX: s2.setSoundFX,
    setSoundCorrect: s2.setSoundCorrect,
    setSoundWrong: s2.setSoundWrong,
    setRadioRateJp: s2.setRadioRateJp,
    setRadioRateVi: s2.setRadioRateVi,
    setCbProtanopia: s2.setCbProtanopia,
    setCbDeuteranopia: s2.setCbDeuteranopia,
    setCbTritanopia: s2.setCbTritanopia,
    setDyslexiaFont: s2.setDyslexiaFont,
    setLargeTouchTargets: s2.setLargeTouchTargets,
    setSwipeFlashcard: s2.setSwipeFlashcard,
    setSwipeClose: s2.setSwipeClose,
    setEnergyMode: s2.setEnergyMode,
    setTouchParticleIntensity: s2.setTouchParticleIntensity,
    setGfxTier: s2.setGfxTier,
    setSidebarStudyTools: s2.setSidebarStudyTools,
    setSidebarExtended: s2.setSidebarExtended,
    setSidebarPhase2: s2.setSidebarPhase2,
    setSidebarPhase3: s2.setSidebarPhase3,
    setFocusMode: s2.setFocusMode,
    setSyncInterval: s2.setSyncInterval,
    setFontScale: s2.setFontScale
  })));
  const learning = useLearningStore(useShallow((s2) => ({
    level: s2.level,
    xp: s2.xp,
    bookmarks: s2.bookmarks,
    srs: s2.srs,
    unlockedItems: s2.unlockedItems,
    equippedCosmetics: s2.equippedCosmetics,
    equipItem: s2.equipItem,
    unequipItem: s2.unequipItem
  })));
  const [search, setSearch] = reactExports.useState("");
  const [exportMsg, setExportMsg] = reactExports.useState(null);
  const [activeTab, setActiveTab] = reactExports.useState(() => {
    const requested = urlParams.get("tab");
    return TABS.some((tab) => tab.id === requested) ? requested : "popular";
  });
  const [pendingReset, setPendingReset] = reactExports.useState(null);
  const [pendingImport, setPendingImport] = reactExports.useState(null);
  const [presentationUndo, setPresentationUndo] = reactExports.useState(null);
  const [rollbackAvailable, setRollbackAvailable] = reactExports.useState(() => hasSettingsImportRollback());
  const resetDialogRef = useDialogFocus(Boolean(pendingReset), () => setPendingReset(null), { inertRoot: true });
  const importDialogRef = useDialogFocus(Boolean(pendingImport), () => setPendingImport(null), { inertRoot: true });
  const rememberPresentationChange = reactExports.useCallback(() => {
    setPresentationUndo({
      theme: store.theme,
      themeMode: store.themeMode,
      themePreset: store.themePreset,
      themeFamily: store.themeFamily,
      accent: store.accent,
      customAccentEnabled: store.customAccentEnabled,
      fontScale: store.fontScale
    });
  }, [store.accent, store.customAccentEnabled, store.fontScale, store.theme, store.themeFamily, store.themeMode, store.themePreset]);
  const undoPresentationChange = reactExports.useCallback(() => {
    if (!presentationUndo) return;
    store.setThemeMode(presentationUndo.themeMode);
    store.setThemeFamily(presentationUndo.themeFamily);
    if (presentationUndo.themePreset) {
      store.applyThemePreset(presentationUndo.themePreset);
    } else {
      store.clearThemePreset();
      store.setTheme(presentationUndo.theme);
    }
    store.setAccent(presentationUndo.accent);
    if (!presentationUndo.customAccentEnabled) store.clearCustomAccent();
    store.setFontScale(presentationUndo.fontScale);
    setPresentationUndo(null);
  }, [presentationUndo, store]);
  reactExports.useEffect(() => {
    const section = urlParams.get("section");
    if (!section) return void 0;
    const frame = requestAnimationFrame(() => {
      var _a2, _b;
      return (_b = (_a2 = document.getElementById(`settings-${section}`)) == null ? void 0 : _a2.scrollIntoView) == null ? void 0 : _b.call(_a2, { block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [activeTab, urlParams]);
  const selectTab = reactExports.useCallback((tabId) => {
    setActiveTab(tabId);
    const next = new URLSearchParams(urlParams);
    if (tabId === "popular") next.delete("tab");
    else next.set("tab", tabId);
    next.delete("section");
    setUrlParams(next, { replace: true });
  }, [setUrlParams, urlParams]);
  const handleExport = reactExports.useCallback(() => {
    try {
      downloadSettingsBackupFile(buildSettingsBackupPayload());
      setExportMsg("✅ Đã xuất dữ liệu!");
    } catch (error) {
      console.warn("Export failed:", error);
      setExportMsg("❌ " + getUserErrorMessage(error, "Không thể xuất dữ liệu lúc này."));
    }
    setTimeout(() => setExportMsg(null), 3e3);
  }, []);
  const handleImport = reactExports.useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      var _a2;
      const file = (_a2 = e.target.files) == null ? void 0 : _a2[0];
      if (!file) return;
      if (file.size > MAX_SETTINGS_BACKUP_BYTES) {
        setExportMsg("❌ File sao lưu vượt quá giới hạn 5 MB");
        setTimeout(() => setExportMsg(null), 3e3);
        return;
      }
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const data = JSON.parse(evt.target.result);
          const preview = inspectSettingsBackupData(data);
          if (preview.status === "invalid") {
            setExportMsg("❌ File không hợp lệ");
            setTimeout(() => setExportMsg(null), 3e3);
            return;
          }
          setPendingImport({ data, fileName: file.name, ...preview });
        } catch (e2) {
          setExportMsg("❌ File không hợp lệ");
          setTimeout(() => setExportMsg(null), 3e3);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }, []);
  const s = store;
  const activeThemeMode = resolveThemeMode(s.themeMode, s.theme);
  const handleResetSettings = reactExports.useCallback(() => {
    setPendingReset("settings");
  }, []);
  const handleResetAllData = reactExports.useCallback(async () => {
    setPendingReset("all-first");
  }, []);
  const confirmPendingReset = reactExports.useCallback(async () => {
    var _a2, _b, _c, _d;
    const action = pendingReset;
    setPendingReset(null);
    if (action === "settings") {
      resetSettingsToDefaults(s);
      s.setFontScale("M");
      setExportMsg("✅ Đã khôi phục cài đặt mặc định!");
      setTimeout(() => setExportMsg(null), 3e3);
      return;
    }
    if (action === "rollback") {
      if (!restoreLatestImportedBackup()) {
        setExportMsg("❌ Không thể khôi phục bản dữ liệu trước khi nhập");
        return;
      }
      setRollbackAvailable(false);
      await Promise.allSettled([
        (_b = (_a2 = useAppStore.persist) == null ? void 0 : _a2.rehydrate) == null ? void 0 : _b.call(_a2),
        (_d = (_c = useLearningStore.persist) == null ? void 0 : _c.rehydrate) == null ? void 0 : _d.call(_c)
      ]);
      location.reload();
      return;
    }
    if (action === "all-first") {
      setPendingReset("all-confirm");
      return;
    }
    if (action !== "all-confirm") return;
    try {
      const result = await resetAllAndSync();
      setExportMsg(result.message || "✅ Đã xoá sạch dữ liệu!");
      await new Promise((resolve) => setTimeout(resolve, 800));
      location.reload();
    } catch (error) {
      setExportMsg("❌ " + getUserErrorMessage(error));
    }
  }, [pendingReset, s]);
  const confirmImport = reactExports.useCallback(() => {
    var _a2, _b, _c, _d;
    if (!pendingImport) return;
    const result = applyImportedBackupData(pendingImport.data);
    if (result.status === "invalid" || result.status === "failed") {
      setExportMsg(result.rolledBack ? "❌ Không thể nhập dữ liệu; dữ liệu cũ đã được khôi phục an toàn" : "❌ File không hợp lệ hoặc bộ nhớ không khả dụng");
      setPendingImport(null);
      return;
    }
    setPendingImport(null);
    setRollbackAvailable(true);
    Promise.allSettled([
      (_b = (_a2 = useAppStore.persist) == null ? void 0 : _a2.rehydrate) == null ? void 0 : _b.call(_a2),
      (_d = (_c = useLearningStore.persist) == null ? void 0 : _c.rehydrate) == null ? void 0 : _d.call(_c)
    ]).finally(() => location.reload());
  }, [pendingImport]);
  const handleRollbackImport = reactExports.useCallback(() => {
    setPendingReset("rollback");
  }, []);
  const allItems = reactExports.useMemo(() => buildSettingsItems({
    store,
    learning,
    activeThemeMode,
    actions: {
      handleExport,
      handleImport,
      handleResetAllData,
      resetSettings: handleResetSettings,
      rememberPresentationChange
    }
  }), [store, learning, activeThemeMode, handleExport, handleImport, handleResetAllData, handleResetSettings, rememberPresentationChange]);
  const visibleItems = reactExports.useMemo(() => {
    let items = allItems;
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter((it) => it.label.toLowerCase().includes(q) || it.kw.includes(q) || it.desc && it.desc.toLowerCase().includes(q));
    }
    return items;
  }, [allItems, search]);
  const isSearching = search.trim().length > 0;
  const displayedItems = reactExports.useMemo(() => {
    if (isSearching) return visibleItems;
    if (activeTab === "popular") return allItems.filter((it) => it.popular);
    return allItems.filter((it) => it.tab === activeTab);
  }, [isSearching, visibleItems, allItems, activeTab]);
  const searchGroupedItems = reactExports.useMemo(() => {
    if (!isSearching) return {};
    const groups = {};
    for (const item of displayedItems) {
      if (!groups[item.tab]) groups[item.tab] = [];
      groups[item.tab].push(item);
    }
    return groups;
  }, [isSearching, displayedItems]);
  const tabCounts = reactExports.useMemo(() => {
    const counts = {};
    for (const tab of TABS) counts[tab.id] = allItems.filter((it) => it.tab === tab.id).length;
    return counts;
  }, [allItems]);
  const renderSection = (sectionId) => {
    const sectionItems = displayedItems.filter((item) => item.section === sectionId);
    if (sectionItems.length === 0) return null;
    const sec = SECTIONS[sectionId] || {};
    return /* @__PURE__ */ jsxRuntimeExports.jsx(IOSGroupedList, { id: `settings-${sectionId}`, header: sec.header, footer: sec.footer, children: sectionItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-row-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(IOSGroupedRow, { label: item.label, description: item.desc, right: item.ctrl, compact: item.compact }),
      item.preview && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-preview", children: item.preview })
    ] }, `${sectionId}-${i}`)) }, sectionId);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-settings-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-eyebrow", children: "Tùy chỉnh" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Cài đặt" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Điều chỉnh trải nghiệm học, hiển thị, âm thanh và khả năng tiếp cận." })
    ] }),
    presentationUndo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-undo", role: "status", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Đang xem trước thay đổi giao diện hoặc cỡ chữ." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: undoPresentationChange, children: "Hoàn tác" })
    ] }),
    rollbackAvailable && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-undo", role: "status", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Có thể hoàn tác lần nhập dữ liệu gần nhất." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: handleRollbackImport, children: "Khôi phục dữ liệu cũ" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: "n4-input n4-settings-search",
        type: "text",
        placeholder: "🔍 Tìm cài đặt...",
        value: search,
        onChange: (e) => setSearch(e.target.value)
      }
    ),
    !isSearching && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-tabs", children: [{ id: "popular", icon: "⭐", label: "Phổ biến" }, ...TABS].map((tab) => {
      const isActive = activeTab === tab.id;
      const count = tab.id !== "popular" ? tabCounts[tab.id] : null;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `n4-settings-tab ${isActive ? "active" : ""}`,
          onClick: () => selectTab(tab.id),
          "aria-pressed": isActive,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-settings-tab-icon", children: tab.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-settings-tab-label", children: tab.label }),
            !isActive && count != null && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-settings-tab-count", children: count })
          ]
        },
        tab.id
      );
    }) }),
    isSearching ? TABS.map((tab) => {
      const items = searchGroupedItems[tab.id];
      if (!(items == null ? void 0 : items.length)) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(IOSGroupedList, { header: GROUP_LABELS[tab.id] || tab.label, children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-row-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IOSGroupedRow, { label: `${GROUP_LABELS[item.tab] || tab.label} › ${item.label}`, description: item.desc, right: item.ctrl, compact: item.compact }),
        item.preview && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-preview", children: item.preview })
      ] }, `${tab.id}-${i}`)) }, tab.id);
    }) : activeTab === "popular" ? displayedItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(IOSGroupedList, { header: GROUP_LABELS[activeTab], children: displayedItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-row-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(IOSGroupedRow, { label: item.label, description: item.desc, right: item.ctrl, compact: item.compact }),
      item.preview && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-preview", children: item.preview })
    ] }, `${activeTab}-${i}`)) }) : activeTab === "advanced" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "n4-settings-advanced", defaultOpen: Boolean(urlParams.get("section")), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { children: "Công cụ nâng cao" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chỉ thay đổi các mục này khi bạn cần chẩn đoán hoặc tùy chỉnh sâu." }),
      TAB_SECTIONS.advanced.map(renderSection)
    ] }) : (_a = TAB_SECTIONS[activeTab]) == null ? void 0 : _a.map(renderSection),
    displayedItems.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state n4-settings-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: isSearching ? "🔍" : "⚙️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: isSearching ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Không tìm thấy “",
        search,
        "”"
      ] }) : "Không có cài đặt" })
    ] }),
    exportMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-settings-export-msg ${exportMsg.startsWith("✅") ? "success" : "error"}`, children: exportMsg }),
    pendingReset && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dialog-backdrop", role: "presentation", onMouseDown: (event) => {
        if (event.target === event.currentTarget) setPendingReset(null);
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          ref: resetDialogRef,
          className: "n4-dialog",
          role: "alertdialog",
          "aria-modal": "true",
          "aria-labelledby": "settings-reset-title",
          tabIndex: -1,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "settings-reset-title", children: pendingReset === "rollback" ? "Khôi phục dữ liệu trước lần nhập?" : pendingReset === "all-first" ? "Xóa toàn bộ dữ liệu?" : pendingReset === "all-confirm" ? "Xác nhận xóa vĩnh viễn" : "Khôi phục cài đặt mặc định?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: pendingReset === "rollback" ? "Tiến độ tạo sau lần nhập gần nhất sẽ bị thay thế. Bản hoàn tác chỉ được giữ trong 24 giờ." : pendingReset === "all-first" ? "Bước 1/2: dữ liệu học local và cloud sẽ được đưa về trạng thái sạch." : pendingReset === "all-confirm" ? "Bước 2/2: đây là hành động không thể hoàn tác. Chỉ tiếp tục khi bạn đã có bản sao lưu cần thiết." : "Dữ liệu học tập của bạn không bị ảnh hưởng." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dialog-actions", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-btn n4-btn-ghost", onClick: () => setPendingReset(null), children: "Hủy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-btn n4-btn-danger", onClick: confirmPendingReset, children: pendingReset === "all-first" ? "Tiếp tục" : pendingReset === "all-confirm" ? "Xóa vĩnh viễn" : "Khôi phục" })
            ] })
          ]
        }
      ) }),
      document.body
    ),
    pendingImport && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dialog-backdrop", role: "presentation", onMouseDown: (event) => {
        if (event.target === event.currentTarget) setPendingImport(null);
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: importDialogRef, className: "n4-dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": "settings-import-title", tabIndex: -1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "settings-import-title", children: "Xem trước dữ liệu nhập" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: pendingImport.fileName }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: pendingImport.sections.map((sectionName) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: sectionName }, sectionName)) }),
        pendingImport.exportedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-muted", children: [
          "Ngày xuất: ",
          new Date(pendingImport.exportedAt).toLocaleString("vi-VN")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-muted", children: [
          "Định dạng sao lưu v",
          pendingImport.version,
          pendingImport.migrated ? " · sẽ được nâng cấp khi nhập" : ""
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Dữ liệu chỉ được áp dụng sau khi bạn xác nhận." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dialog-actions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-btn n4-btn-ghost", onClick: () => setPendingImport(null), children: "Hủy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-btn n4-btn-primary", onClick: confirmImport, children: "Nhập dữ liệu" })
        ] })
      ] }) }),
      document.body
    )
  ] });
}
export {
  Settings as default
};
