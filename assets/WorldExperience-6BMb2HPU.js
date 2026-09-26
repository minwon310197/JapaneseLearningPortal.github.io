import { j as jsxRuntimeExports, r as reactExports } from "./vendor-react-BJfqeUfp.js";
import { s as supabase, i as isSupabaseConfigured, a as signInWithGoogle, b as signOut, u as useHaruWorldAuth } from "./index-DxiW6w6j.js";
import { u as useLocation, a as useNavigate } from "./vendor-router-BqW7KNUg.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-runtime-BbOs9S9B.js";
const HARU_WORLD_CHANNEL = "haru-world";
const HARU_WORLD_PROTOCOL_VERSION = 1;
const PRIVATE_FIELD_PATTERN = /(?:^|_)(?:token|jwt|secret|password|service[_-]?role|access[_-]?token|refresh[_-]?token|email)(?:$|_)/i;
function isRecord$2(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function containsPrivateField(value) {
  if (Array.isArray(value)) return value.some(containsPrivateField);
  if (!isRecord$2(value)) return false;
  return Object.entries(value).some(([key, nested]) => PRIVATE_FIELD_PATTERN.test(key) || containsPrivateField(nested));
}
function validIdentifier$1(value) {
  return typeof value === "string" && value.length > 0 && value.length <= 160;
}
function createHaruWorldEnvelope({ sessionId, requestId, type, payload = {} }) {
  if (!validIdentifier$1(sessionId)) throw new TypeError("sessionId must be a bounded non-empty string");
  if (!validIdentifier$1(type)) throw new TypeError("type must be a bounded non-empty string");
  if (requestId !== void 0 && !validIdentifier$1(requestId)) throw new TypeError("requestId must be a bounded non-empty string");
  if (!isRecord$2(payload) || containsPrivateField(payload)) throw new TypeError("payload must be a credential-free object");
  const envelope = {
    channel: HARU_WORLD_CHANNEL,
    protocolVersion: HARU_WORLD_PROTOCOL_VERSION,
    sessionId,
    type,
    payload: structuredClone(payload)
  };
  if (requestId !== void 0) envelope.requestId = requestId;
  return envelope;
}
function parseHaruWorldEnvelope(value, { sessionId, types = [] } = {}) {
  if (!isRecord$2(value) || value.channel !== HARU_WORLD_CHANNEL || value.protocolVersion !== HARU_WORLD_PROTOCOL_VERSION) {
    return { ok: false, code: "INVALID_ENVELOPE" };
  }
  if (value.sessionId !== sessionId) return { ok: false, code: "STALE_SESSION" };
  if (!validIdentifier$1(value.type) || !types.includes(value.type)) return { ok: false, code: "UNSUPPORTED_TYPE" };
  if (value.requestId !== void 0 && !validIdentifier$1(value.requestId)) return { ok: false, code: "INVALID_REQUEST_ID" };
  if (!isRecord$2(value.payload)) return { ok: false, code: "INVALID_PAYLOAD" };
  if (containsPrivateField(value.payload)) return { ok: false, code: "PRIVATE_FIELD" };
  return { ok: true, envelope: value };
}
const HERO_IDS = Object.freeze(["knight", "mage", "ranger"]);
const PART_SLOTS = Object.freeze(["weapon", "head", "body", "hands", "feet", "charm"]);
const HARU_WORLD_CONTENT_VERSION = "haru-world-v1";
const FIXED_SKILL_PRESETS = Object.freeze({
  knight: Object.freeze({
    normal: Object.freeze([
      "knight.moon_slash",
      "knight.wind_charge",
      "knight.iron_guard",
      "knight.counter",
      "knight.earthquake",
      "knight.armor_break"
    ]),
    ultimate: "knight.heaven_sword"
  }),
  mage: Object.freeze({
    normal: Object.freeze([
      "mage.fireball",
      "mage.ice_lance",
      "mage.chain_lightning",
      "mage.frozen_domain",
      "mage.flame_seal",
      "mage.mana_shield"
    ]),
    ultimate: "mage.meteor_rain"
  }),
  ranger: Object.freeze({
    normal: Object.freeze([
      "ranger.piercing_arrow",
      "ranger.rapid_arrows",
      "ranger.arrow_rain",
      "ranger.thorn_trap",
      "ranger.wind_step",
      "ranger.mark"
    ]),
    ultimate: "ranger.celestial_arrow"
  })
});
const LEGACY_TOP_LEVEL_FIELDS = /* @__PURE__ */ new Set([
  "items",
  "bag",
  "storage",
  "pending",
  "shops",
  "buyback",
  "gems",
  "gemCurrency",
  "rarity",
  "affixes",
  "sets",
  "sockets",
  "equipment",
  "loadout"
]);
const LEGACY_HERO_FIELDS = /* @__PURE__ */ new Set(["equipment", "loadout"]);
const REQUIRED_TOP_LEVEL_FIELDS = /* @__PURE__ */ new Set([
  "schemaVersion",
  "contentVersion",
  "heroId",
  "wallet",
  "heroes",
  "inventory",
  "activeEffects",
  "learning",
  "world",
  "quests",
  "pets",
  "cosmetics",
  "social",
  "presentation",
  "gmState"
]);
const REQUIRED_HERO_FIELDS = /* @__PURE__ */ new Set([
  "level",
  "xp",
  "attributes",
  "attributePoints",
  "autoAttributes",
  "skillPoints",
  "skillRanks",
  "partRanks"
]);
function isRecord$1(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function isNonNegativeInteger(value, max = Number.MAX_SAFE_INTEGER) {
  return Number.isSafeInteger(value) && value >= 0 && value <= max;
}
function clone(value) {
  return structuredClone(value);
}
function mergeDeep(target, patch) {
  if (!isRecord$1(patch)) return target;
  for (const [key, value] of Object.entries(patch)) {
    if (isRecord$1(value) && isRecord$1(target[key])) {
      mergeDeep(target[key], value);
    } else {
      target[key] = clone(value);
    }
  }
  return target;
}
function emptyPartRanks() {
  return Object.fromEntries(PART_SLOTS.map((slot) => [slot, 0]));
}
function freshHero(heroId) {
  const starter = FIXED_SKILL_PRESETS[heroId].normal.slice(0, 3);
  return {
    level: 1,
    xp: 0,
    attributes: { strength: 0, agility: 0, intellect: 0, vitality: 0 },
    attributePoints: 0,
    autoAttributes: true,
    skillPoints: 2,
    skillRanks: Object.fromEntries(starter.map((id) => [id, 1])),
    partRanks: emptyPartRanks()
  };
}
function createHaruWorldSave(overrides = {}) {
  const save = {
    schemaVersion: 1,
    contentVersion: HARU_WORLD_CONTENT_VERSION,
    heroId: "knight",
    wallet: { coins: 100 },
    heroes: Object.fromEntries(HERO_IDS.map((id) => [id, freshHero(id)])),
    inventory: {},
    activeEffects: {},
    learning: {
      contentProgress: {},
      srs: {},
      mastery: {},
      mistakes: {},
      bookmarks: {},
      notes: {},
      customCards: {},
      history: [],
      streak: { current: 0, best: 0, lastStudyDate: null },
      planner: {},
      activityProgress: {}
    },
    world: {
      zone: "town",
      position: { x: -2, z: 8 },
      checkpoint: "town_shrine",
      discovered: {},
      opened: [],
      bosses: [],
      bossRespawns: {},
      waypoint: null
    },
    quests: {},
    pets: {},
    cosmetics: { unlocked: [], slots: ["", "", ""] },
    social: {},
    presentation: { quality: "auto" },
    gmState: {
      unlockPresets: {},
      overrides: {},
      spawned: []
    }
  };
  return mergeDeep(save, overrides);
}
function validateHaruWorldSave(save) {
  if (!isRecord$1(save) || save.schemaVersion !== 1 || save.contentVersion !== HARU_WORLD_CONTENT_VERSION) {
    return { ok: false, code: "INVALID_SCHEMA" };
  }
  if (Object.keys(save).some((field) => !REQUIRED_TOP_LEVEL_FIELDS.has(field)) || [...REQUIRED_TOP_LEVEL_FIELDS].some((field) => !Object.hasOwn(save, field))) {
    return { ok: false, code: "INVALID_SCHEMA" };
  }
  for (const field of LEGACY_TOP_LEVEL_FIELDS) {
    if (Object.hasOwn(save, field)) return { ok: false, code: "LEGACY_ITEM_INSTANCES" };
  }
  if (!HERO_IDS.includes(save.heroId) || !isRecord$1(save.wallet) || !isNonNegativeInteger(save.wallet.coins, 1e9)) {
    return { ok: false, code: "INVALID_WALLET" };
  }
  if (!isRecord$1(save.heroes) || HERO_IDS.some((id) => !isRecord$1(save.heroes[id]))) {
    return { ok: false, code: "INVALID_HEROES" };
  }
  for (const id of HERO_IDS) {
    const hero = save.heroes[id];
    for (const field of LEGACY_HERO_FIELDS) {
      if (Object.hasOwn(hero, field)) return { ok: false, code: "LEGACY_EQUIPMENT" };
    }
    if (Object.keys(hero).some((field) => !REQUIRED_HERO_FIELDS.has(field)) || [...REQUIRED_HERO_FIELDS].some((field) => !Object.hasOwn(hero, field))) {
      return { ok: false, code: "INVALID_HERO" };
    }
    if (!isNonNegativeInteger(hero.level, 50) || hero.level < 1 || !isNonNegativeInteger(hero.xp) || !isNonNegativeInteger(hero.attributePoints, 147) || !isNonNegativeInteger(hero.skillPoints, 100) || typeof hero.autoAttributes !== "boolean" || !isRecord$1(hero.attributes) || !isRecord$1(hero.skillRanks) || !isRecord$1(hero.partRanks)) {
      return { ok: false, code: "INVALID_HERO" };
    }
    if (PART_SLOTS.some((slot) => !isNonNegativeInteger(hero.partRanks[slot], 10))) {
      return { ok: false, code: "INVALID_PART_RANKS" };
    }
    if (["strength", "agility", "intellect", "vitality"].some((attribute) => !isNonNegativeInteger(hero.attributes[attribute], 147)) || Object.entries(hero.skillRanks).some(([skillId, rank]) => typeof skillId !== "string" || !skillId || !isNonNegativeInteger(rank, 10) || rank < 1)) {
      return { ok: false, code: "INVALID_HERO" };
    }
  }
  if (!isRecord$1(save.inventory) || Object.entries(save.inventory).some(([id, count]) => typeof id !== "string" || !id || !isNonNegativeInteger(count, 99999) || count < 1)) {
    return { ok: false, code: "INVALID_INVENTORY" };
  }
  if (!isRecord$1(save.activeEffects) || !isRecord$1(save.learning) || !isRecord$1(save.world) || !isRecord$1(save.quests) || !isRecord$1(save.pets) || !isRecord$1(save.cosmetics) || !isRecord$1(save.social) || !isRecord$1(save.presentation) || !isRecord$1(save.gmState)) {
    return { ok: false, code: "INVALID_SECTIONS" };
  }
  if (Object.values(save.activeEffects).some((effect) => !isRecord$1(effect) || !isNonNegativeInteger(effect.expiresAtMs, 9007199254740991) || !isNonNegativeInteger(effect.stacks, 99) || effect.stacks < 1)) {
    return { ok: false, code: "INVALID_ACTIVE_EFFECTS" };
  }
  return { ok: true };
}
const HARU_WORLD_GUEST_OWNER = "guest:this-browser:v1";
const DATABASE_NAME = "haru-world-v1";
const DATABASE_VERSION = 1;
function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function isRevision(value) {
  return Number.isSafeInteger(value) && value >= 0;
}
function canonicalize(value) {
  if (Array.isArray(value)) return value.map(canonicalize);
  if (!isRecord(value)) return value;
  return Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonicalize(value[key])]));
}
function sameSave(left, right) {
  return JSON.stringify(canonicalize(left)) === JSON.stringify(canonicalize(right));
}
function worldOwner(userId) {
  return userId ? `user:${userId}` : HARU_WORLD_GUEST_OWNER;
}
function createHaruWorldRecord(save = createHaruWorldSave()) {
  const validation = validateHaruWorldSave(save);
  if (!validation.ok) throw new Error(`Invalid Haru World save: ${validation.code}`);
  return { save: structuredClone(save), localRevision: 0, cloudRevision: 0, dirty: false, conflict: null };
}
function openHaruWorldDatabase(factory = globalThis.indexedDB) {
  return new Promise((resolve, reject) => {
    if (!factory) {
      reject(new Error("Trình duyệt chưa hỗ trợ lưu IndexedDB."));
      return;
    }
    const request = factory.open(DATABASE_NAME, DATABASE_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("saves")) db.createObjectStore("saves");
      if (!db.objectStoreNames.contains("archives")) db.createObjectStore("archives");
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    request.onblocked = () => reject(new Error("Hãy đóng tab Haru World khác rồi thử lại."));
  });
}
function acquireHaruWorldSession(owner, locks = ((_a) => (_a = globalThis.navigator) == null ? void 0 : _a.locks)()) {
  if (!locks) return Promise.resolve(() => {
  });
  return new Promise((resolve, reject) => {
    locks.request(`haru-world:${owner}`, { mode: "exclusive", ifAvailable: true }, (lock) => {
      if (!lock) {
        reject(new Error("Bản lưu Haru đang mở trong tab khác."));
        return;
      }
      return new Promise((release) => resolve(release));
    }).catch(reject);
  });
}
function readHaruWorldRecord(db, owner) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["saves"]);
    const request = transaction.objectStore("saves").get(owner);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}
function writeHaruWorldRecord(db, owner, record, archive = null) {
  var _a, _b;
  const validation = validateHaruWorldSave(record == null ? void 0 : record.save);
  if (!validation.ok) return Promise.reject(new Error(`Bản lưu Haru không hợp lệ: ${validation.code}`));
  if (!isRevision((_a = record.localRevision) != null ? _a : 0) || !isRevision((_b = record.cloudRevision) != null ? _b : 0)) {
    return Promise.reject(new Error("Revision local/cloud không hợp lệ."));
  }
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["saves", "archives"], "readwrite");
    const saves = transaction.objectStore("saves");
    const archives = transaction.objectStore("archives");
    let result = null;
    let conflict = null;
    const latestRequest = saves.get(owner);
    latestRequest.onsuccess = () => {
      var _a2, _b2, _c;
      const latest = latestRequest.result || null;
      if (((_a2 = latest == null ? void 0 : latest.localRevision) != null ? _a2 : 0) !== ((_b2 = record.localRevision) != null ? _b2 : 0)) {
        const conflictArchive = {
          reason: "local-revision-conflict",
          local: record.save,
          remote: (latest == null ? void 0 : latest.save) || null,
          at: Date.now()
        };
        archives.put(conflictArchive, `${owner}:conflict:${crypto.randomUUID()}`);
        conflict = Object.assign(new Error("Một tab khác vừa lưu Haru World."), {
          code: "WORLD_LOCAL_CONFLICT",
          latest,
          attempted: record.save
        });
        return;
      }
      if (latest) {
        archives.put({ reason: "last-good", record: latest, at: Date.now() }, `${owner}:last-good`);
      }
      result = { ...structuredClone(record), localRevision: ((_c = record.localRevision) != null ? _c : 0) + 1 };
      saves.put(result, owner);
      if (archive) archives.put(structuredClone(archive), `${owner}:archive:${crypto.randomUUID()}`);
    };
    transaction.oncomplete = () => conflict ? reject(conflict) : resolve(result);
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error || new Error("Không thể lưu Haru World trên thiết bị."));
  });
}
async function loadHaruWorldRecord(db, owner) {
  const existing = await readHaruWorldRecord(db, owner);
  if (existing) {
    const validation = validateHaruWorldSave(existing.save);
    if (!validation.ok) throw new Error(`Bản lưu Haru World bị lỗi: ${validation.code}`);
    return existing;
  }
  return writeHaruWorldRecord(db, owner, createHaruWorldRecord());
}
async function callRpc(client, name, args) {
  const { data, error } = await client.rpc(name, args);
  if (error) throw new Error(error.message || `Không gọi được ${name}.`);
  return data;
}
async function fetchCloudHaruWorld(userId, client) {
  const remote = await callRpc(client, "load_haru_world_v1", {});
  if (remote == null) return null;
  if (!isRecord(remote) || !isRevision(remote.revision) || !isRecord(remote.save)) {
    throw new Error("Phản hồi bản lưu Haru World không hợp lệ.");
  }
  const validation = validateHaruWorldSave(remote.save);
  if (!validation.ok) throw new Error(`Bản lưu Haru World trên đám mây bị lỗi: ${validation.code}`);
  return { save: remote.save, revision: remote.revision };
}
async function pullHaruWorldCloud(record, userId, client = supabase) {
  var _a;
  if (!userId || client === supabase && !isSupabaseConfigured) return record;
  const remote = await fetchCloudHaruWorld(userId, client);
  if (!remote || remote.revision === record.cloudRevision) return record;
  if (record.dirty && !sameSave(record.save, remote.save)) {
    return { ...record, conflict: { local: record.save, remote: remote.save, revision: remote.revision } };
  }
  return {
    save: remote.save,
    localRevision: (_a = record.localRevision) != null ? _a : 0,
    cloudRevision: remote.revision,
    dirty: false,
    conflict: null
  };
}
async function pushHaruWorldCloud(record, userId, client = supabase) {
  if (!userId || client === supabase && !isSupabaseConfigured || record.conflict) return record;
  const validation = validateHaruWorldSave(record.save);
  if (!validation.ok) throw new Error(`Bản lưu Haru World không hợp lệ: ${validation.code}`);
  const reply = await callRpc(client, "save_haru_world_v1", {
    expected_revision: record.cloudRevision,
    new_save: record.save
  });
  if (!isRecord(reply)) throw new Error("Xác nhận lưu Haru World không hợp lệ.");
  if (reply.ok === true && reply.revision === record.cloudRevision + 1) {
    return { ...record, cloudRevision: reply.revision, dirty: false, conflict: null };
  }
  const remote = await fetchCloudHaruWorld(userId, client);
  if (!remote) throw new Error("Không đọc được phiên bản xung đột của Haru World.");
  return { ...record, conflict: { local: record.save, remote: remote.save, revision: remote.revision } };
}
async function applyHaruWorldGmCommand(record, userId, command, payload, client = supabase) {
  if (!userId) throw new Error("GM yêu cầu tài khoản Admin đã đăng nhập.");
  if (client === supabase && !isSupabaseConfigured || (record == null ? void 0 : record.conflict)) {
    throw new Error("GM chưa có kết nối đám mây an toàn.");
  }
  if (!validIdentifier(command) || !isRecord(payload)) {
    throw new Error("GM command không hợp lệ.");
  }
  const reply = await callRpc(client, "apply_haru_gm_command", {
    target_user_id: userId,
    expected_revision: record.cloudRevision,
    command,
    payload
  });
  if (!isRecord(reply) || reply.ok !== true || !isRevision(reply.revision) || reply.revision !== record.cloudRevision + 1) {
    throw new Error("GM command không được máy chủ xác nhận.");
  }
  const validation = validateHaruWorldSave(reply.save);
  if (!validation.ok) throw new Error(`GM trả về save không hợp lệ: ${validation.code}`);
  return { ...record, save: reply.save, cloudRevision: reply.revision, dirty: false, conflict: null };
}
function validIdentifier(value) {
  return typeof value === "string" && value.length > 0 && value.length <= 80;
}
const HARU_WORLD_ADMIN_TABS = Object.freeze([
  { group: "Tổng quan", id: "overview", icon: "📊", label: "Tổng quan" },
  { group: "Quản lý", id: "users", icon: "👥", label: "Người dùng" },
  { group: "Quản lý", id: "issues", icon: "🐛", label: "Vấn đề" },
  { group: "Quản lý", id: "announce", icon: "📢", label: "Thông báo" },
  { group: "Quản lý", id: "challenges", icon: "🏆", label: "Thử thách" },
  { group: "Quản lý", id: "messages", icon: "💬", label: "Tin nhắn" },
  { group: "Phân tích", id: "activity", icon: "📋", label: "Hoạt động" },
  { group: "Phân tích", id: "economy", icon: "💰", label: "Economy / xu" },
  { group: "Hệ thống", id: "content", icon: "📚", label: "Nội dung" },
  { group: "Hệ thống", id: "config", icon: "⚙️", label: "Cấu hình" },
  { group: "Hệ thống", id: "system", icon: "🖥️", label: "Hệ thống" }
]);
const activities = /* @__PURE__ */ JSON.parse('[{"id":"field.market","kind":"field","location":"market","label":"Đơn hàng đầu tiên","description":"Nghe yêu cầu, chọn đồ vật ở quầy rồi ghép câu trả lời trên bàn học.","legacyRoute":null,"controller":"native.field.field_market","inputModel":"mixed","contentQuery":{"domain":"vocab","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"field.kanji","kind":"field","location":"dojo","label":"Dấu ấn Kanji","description":"Đọc chữ trên các bia đá và tìm đúng ý nghĩa.","legacyRoute":null,"controller":"native.field.field_kanji","inputModel":"choice","contentQuery":{"domain":"kanji","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"field.grammar","kind":"field","location":"school","label":"Lời nhắn của làng","description":"Sắp các mảnh câu trên bàn để hoàn thành lời nhắn tiếng Nhật.","legacyRoute":null,"controller":"native.field.field_grammar","inputModel":"sentence","contentQuery":{"domain":"grammar","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"field.listening","kind":"field","location":"sensei","label":"Lắng nghe thị trấn","description":"Nghe tiếng Nhật và chọn biển chữ tương ứng.","legacyRoute":null,"controller":"native.field.field_listening","inputModel":"listening","contentQuery":{"domain":"vocab","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"field.review","kind":"field","location":"garden","label":"Năm dấu nhớ hôm nay","description":"Ôn năm mục đến hạn trong vườn ký ức.","legacyRoute":null,"controller":"native.field.field_review","inputModel":"choice","contentQuery":{"domain":"vocab","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.daily-practice.today","kind":"trainer","location":"garden","label":"Hôm nay · Hôm nay","description":"SRS, lỗi gần đây và kỹ năng cần ưu tiên.","legacyRoute":"/trainer/daily-practice/today","controller":"native.trainer.trainer_daily-practice_today","inputModel":"trainer:today","contentQuery":{"domain":"mixed","trainerId":"daily-practice","mode":"today","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.daily-practice.review","kind":"trainer","location":"garden","label":"Hôm nay · Ôn đến hạn","description":"SRS, lỗi gần đây và kỹ năng cần ưu tiên.","legacyRoute":"/trainer/daily-practice/review","controller":"native.trainer.trainer_daily-practice_review","inputModel":"trainer:review","contentQuery":{"domain":"mixed","trainerId":"daily-practice","mode":"review","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.daily-practice.weak-points","kind":"trainer","location":"garden","label":"Hôm nay · Điểm yếu","description":"SRS, lỗi gần đây và kỹ năng cần ưu tiên.","legacyRoute":"/trainer/daily-practice/weak-points","controller":"native.trainer.trainer_daily-practice_weak-points","inputModel":"trainer:weak-points","contentQuery":{"domain":"mixed","trainerId":"daily-practice","mode":"weak-points","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.daily-practice.challenge","kind":"trainer","location":"garden","label":"Hôm nay · Thử thách","description":"SRS, lỗi gần đây và kỹ năng cần ưu tiên.","legacyRoute":"/trainer/daily-practice/challenge","controller":"native.trainer.trainer_daily-practice_challenge","inputModel":"trainer:challenge","contentQuery":{"domain":"mixed","trainerId":"daily-practice","mode":"challenge","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.vocab-dojo.flashcard","kind":"trainer","location":"market","label":"Từ vựng · Thẻ nhớ","description":"Nhớ nghĩa, cách đọc và cách dùng từ N4.","legacyRoute":"/trainer/vocab-dojo/flashcard","controller":"native.trainer.trainer_vocab-dojo_flashcard","inputModel":"trainer:flashcard","contentQuery":{"domain":"vocab","trainerId":"vocab-dojo","mode":"flashcard","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.vocab-dojo.quiz","kind":"trainer","location":"market","label":"Từ vựng · Trắc nghiệm","description":"Nhớ nghĩa, cách đọc và cách dùng từ N4.","legacyRoute":"/trainer/vocab-dojo/quiz","controller":"native.trainer.trainer_vocab-dojo_quiz","inputModel":"trainer:quiz","contentQuery":{"domain":"vocab","trainerId":"vocab-dojo","mode":"quiz","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.vocab-dojo.fill-blank","kind":"trainer","location":"market","label":"Từ vựng · Điền chỗ trống","description":"Nhớ nghĩa, cách đọc và cách dùng từ N4.","legacyRoute":"/trainer/vocab-dojo/fill-blank","controller":"native.trainer.trainer_vocab-dojo_fill-blank","inputModel":"trainer:fill-blank","contentQuery":{"domain":"vocab","trainerId":"vocab-dojo","mode":"fill-blank","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.vocab-dojo.listening","kind":"trainer","location":"market","label":"Từ vựng · Nghe","description":"Nhớ nghĩa, cách đọc và cách dùng từ N4.","legacyRoute":"/trainer/vocab-dojo/listening","controller":"native.trainer.trainer_vocab-dojo_listening","inputModel":"trainer:listening","contentQuery":{"domain":"vocab","trainerId":"vocab-dojo","mode":"listening","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.vocab-dojo.match","kind":"trainer","location":"market","label":"Từ vựng · Ghép cặp","description":"Nhớ nghĩa, cách đọc và cách dùng từ N4.","legacyRoute":"/trainer/vocab-dojo/match","controller":"native.trainer.trainer_vocab-dojo_match","inputModel":"trainer:match","contentQuery":{"domain":"vocab","trainerId":"vocab-dojo","mode":"match","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.vocab-dojo.match-drag","kind":"trainer","location":"market","label":"Từ vựng · Kéo thả ghép cặp","description":"Nhớ nghĩa, cách đọc và cách dùng từ N4.","legacyRoute":"/trainer/vocab-dojo/match-drag","controller":"native.trainer.trainer_vocab-dojo_match-drag","inputModel":"trainer:match-drag","contentQuery":{"domain":"vocab","trainerId":"vocab-dojo","mode":"match-drag","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.vocab-dojo.true-false","kind":"trainer","location":"market","label":"Từ vựng · Đúng hoặc sai","description":"Nhớ nghĩa, cách đọc và cách dùng từ N4.","legacyRoute":"/trainer/vocab-dojo/true-false","controller":"native.trainer.trainer_vocab-dojo_true-false","inputModel":"trainer:true-false","contentQuery":{"domain":"vocab","trainerId":"vocab-dojo","mode":"true-false","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.vocab-dojo.speed","kind":"trainer","location":"market","label":"Từ vựng · Phản xạ nhanh","description":"Nhớ nghĩa, cách đọc và cách dùng từ N4.","legacyRoute":"/trainer/vocab-dojo/speed","controller":"native.trainer.trainer_vocab-dojo_speed","inputModel":"trainer:speed","contentQuery":{"domain":"vocab","trainerId":"vocab-dojo","mode":"speed","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.vocab-dojo.speed-run","kind":"trainer","location":"market","label":"Từ vựng · Chạy đua tốc độ","description":"Nhớ nghĩa, cách đọc và cách dùng từ N4.","legacyRoute":"/trainer/vocab-dojo/speed-run","controller":"native.trainer.trainer_vocab-dojo_speed-run","inputModel":"trainer:speed-run","contentQuery":{"domain":"vocab","trainerId":"vocab-dojo","mode":"speed-run","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.vocab-dojo.bingo","kind":"trainer","location":"market","label":"Từ vựng · Bingo từ vựng","description":"Nhớ nghĩa, cách đọc và cách dùng từ N4.","legacyRoute":"/trainer/vocab-dojo/bingo","controller":"native.trainer.trainer_vocab-dojo_bingo","inputModel":"trainer:bingo","contentQuery":{"domain":"vocab","trainerId":"vocab-dojo","mode":"bingo","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.vocab-dojo.minimal-pair","kind":"trainer","location":"market","label":"Từ vựng · Phân biệt âm gần","description":"Nhớ nghĩa, cách đọc và cách dùng từ N4.","legacyRoute":"/trainer/vocab-dojo/minimal-pair","controller":"native.trainer.trainer_vocab-dojo_minimal-pair","inputModel":"trainer:minimal-pair","contentQuery":{"domain":"vocab","trainerId":"vocab-dojo","mode":"minimal-pair","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.vocab-dojo.word-chain","kind":"trainer","location":"market","label":"Từ vựng · Nối chuỗi từ","description":"Nhớ nghĩa, cách đọc và cách dùng từ N4.","legacyRoute":"/trainer/vocab-dojo/word-chain","controller":"native.trainer.trainer_vocab-dojo_word-chain","inputModel":"trainer:word-chain","contentQuery":{"domain":"vocab","trainerId":"vocab-dojo","mode":"word-chain","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.vocab-dojo.compound-word","kind":"trainer","location":"market","label":"Từ vựng · Từ ghép","description":"Nhớ nghĩa, cách đọc và cách dùng từ N4.","legacyRoute":"/trainer/vocab-dojo/compound-word","controller":"native.trainer.trainer_vocab-dojo_compound-word","inputModel":"trainer:compound-word","contentQuery":{"domain":"vocab","trainerId":"vocab-dojo","mode":"compound-word","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.kanji-academy.quiz","kind":"trainer","location":"dojo","label":"Kanji · Trắc nghiệm","description":"Luyện nghĩa, âm đọc, viết và phân biệt kanji.","legacyRoute":"/trainer/kanji-academy/quiz","controller":"native.trainer.trainer_kanji-academy_quiz","inputModel":"trainer:quiz","contentQuery":{"domain":"kanji","trainerId":"kanji-academy","mode":"quiz","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.kanji-academy.flashcard","kind":"trainer","location":"dojo","label":"Kanji · Thẻ nhớ","description":"Luyện nghĩa, âm đọc, viết và phân biệt kanji.","legacyRoute":"/trainer/kanji-academy/flashcard","controller":"native.trainer.trainer_kanji-academy_flashcard","inputModel":"trainer:flashcard","contentQuery":{"domain":"kanji","trainerId":"kanji-academy","mode":"flashcard","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.kanji-academy.writing","kind":"trainer","location":"dojo","label":"Kanji · Luyện viết","description":"Luyện nghĩa, âm đọc, viết và phân biệt kanji.","legacyRoute":"/trainer/kanji-academy/writing","controller":"native.trainer.trainer_kanji-academy_writing","inputModel":"trainer:writing","contentQuery":{"domain":"kanji","trainerId":"kanji-academy","mode":"writing","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.kanji-academy.on-kun","kind":"trainer","location":"dojo","label":"Kanji · Âm On/Kun","description":"Luyện nghĩa, âm đọc, viết và phân biệt kanji.","legacyRoute":"/trainer/kanji-academy/on-kun","controller":"native.trainer.trainer_kanji-academy_on-kun","inputModel":"trainer:on-kun","contentQuery":{"domain":"kanji","trainerId":"kanji-academy","mode":"on-kun","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.kanji-academy.match","kind":"trainer","location":"dojo","label":"Kanji · Ghép cặp","description":"Luyện nghĩa, âm đọc, viết và phân biệt kanji.","legacyRoute":"/trainer/kanji-academy/match","controller":"native.trainer.trainer_kanji-academy_match","inputModel":"trainer:match","contentQuery":{"domain":"kanji","trainerId":"kanji-academy","mode":"match","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.kanji-academy.reading","kind":"trainer","location":"dojo","label":"Kanji · Âm đọc","description":"Luyện nghĩa, âm đọc, viết và phân biệt kanji.","legacyRoute":"/trainer/kanji-academy/reading","controller":"native.trainer.trainer_kanji-academy_reading","inputModel":"trainer:reading","contentQuery":{"domain":"kanji","trainerId":"kanji-academy","mode":"reading","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.kanji-academy.family","kind":"trainer","location":"dojo","label":"Kanji · Bộ kanji","description":"Luyện nghĩa, âm đọc, viết và phân biệt kanji.","legacyRoute":"/trainer/kanji-academy/family","controller":"native.trainer.trainer_kanji-academy_family","inputModel":"trainer:family","contentQuery":{"domain":"kanji","trainerId":"kanji-academy","mode":"family","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.kanji-academy.okurigana","kind":"trainer","location":"dojo","label":"Kanji · Okurigana","description":"Luyện nghĩa, âm đọc, viết và phân biệt kanji.","legacyRoute":"/trainer/kanji-academy/okurigana","controller":"native.trainer.trainer_kanji-academy_okurigana","inputModel":"trainer:okurigana","contentQuery":{"domain":"kanji","trainerId":"kanji-academy","mode":"okurigana","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.grammar-arena.quiz","kind":"trainer","location":"school","label":"Ngữ pháp · Trắc nghiệm","description":"Mẫu câu, sửa lỗi và biến đổi dạng N4.","legacyRoute":"/trainer/grammar-arena/quiz","controller":"native.trainer.trainer_grammar-arena_quiz","inputModel":"trainer:quiz","contentQuery":{"domain":"grammar","trainerId":"grammar-arena","mode":"quiz","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.grammar-arena.fill-blank","kind":"trainer","location":"school","label":"Ngữ pháp · Điền chỗ trống","description":"Mẫu câu, sửa lỗi và biến đổi dạng N4.","legacyRoute":"/trainer/grammar-arena/fill-blank","controller":"native.trainer.trainer_grammar-arena_fill-blank","inputModel":"trainer:fill-blank","contentQuery":{"domain":"grammar","trainerId":"grammar-arena","mode":"fill-blank","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.grammar-arena.particles","kind":"trainer","location":"school","label":"Ngữ pháp · Trợ từ","description":"Mẫu câu, sửa lỗi và biến đổi dạng N4.","legacyRoute":"/trainer/grammar-arena/particles","controller":"native.trainer.trainer_grammar-arena_particles","inputModel":"trainer:particles","contentQuery":{"domain":"grammar","trainerId":"grammar-arena","mode":"particles","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.grammar-arena.correction","kind":"trainer","location":"school","label":"Ngữ pháp · Sửa câu","description":"Mẫu câu, sửa lỗi và biến đổi dạng N4.","legacyRoute":"/trainer/grammar-arena/correction","controller":"native.trainer.trainer_grammar-arena_correction","inputModel":"trainer:correction","contentQuery":{"domain":"grammar","trainerId":"grammar-arena","mode":"correction","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.grammar-arena.form-transform","kind":"trainer","location":"school","label":"Ngữ pháp · Biến đổi dạng","description":"Mẫu câu, sửa lỗi và biến đổi dạng N4.","legacyRoute":"/trainer/grammar-arena/form-transform","controller":"native.trainer.trainer_grammar-arena_form-transform","inputModel":"trainer:form-transform","contentQuery":{"domain":"grammar","trainerId":"grammar-arena","mode":"form-transform","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.grammar-arena.cloze","kind":"trainer","location":"school","label":"Ngữ pháp · Điền ngữ cảnh","description":"Mẫu câu, sửa lỗi và biến đổi dạng N4.","legacyRoute":"/trainer/grammar-arena/cloze","controller":"native.trainer.trainer_grammar-arena_cloze","inputModel":"trainer:cloze","contentQuery":{"domain":"grammar","trainerId":"grammar-arena","mode":"cloze","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.grammar-arena.flashcard","kind":"trainer","location":"school","label":"Ngữ pháp · Thẻ nhớ","description":"Mẫu câu, sửa lỗi và biến đổi dạng N4.","legacyRoute":"/trainer/grammar-arena/flashcard","controller":"native.trainer.trainer_grammar-arena_flashcard","inputModel":"trainer:flashcard","contentQuery":{"domain":"grammar","trainerId":"grammar-arena","mode":"flashcard","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.grammar-arena.true-false","kind":"trainer","location":"school","label":"Ngữ pháp · Đúng hoặc sai","description":"Mẫu câu, sửa lỗi và biến đổi dạng N4.","legacyRoute":"/trainer/grammar-arena/true-false","controller":"native.trainer.trainer_grammar-arena_true-false","inputModel":"trainer:true-false","contentQuery":{"domain":"grammar","trainerId":"grammar-arena","mode":"true-false","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.grammar-arena.scramble","kind":"trainer","location":"school","label":"Ngữ pháp · Sắp xếp câu","description":"Mẫu câu, sửa lỗi và biến đổi dạng N4.","legacyRoute":"/trainer/grammar-arena/scramble","controller":"native.trainer.trainer_grammar-arena_scramble","inputModel":"trainer:scramble","contentQuery":{"domain":"grammar","trainerId":"grammar-arena","mode":"scramble","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.grammar-arena.sort","kind":"trainer","location":"school","label":"Ngữ pháp · Phân loại","description":"Mẫu câu, sửa lỗi và biến đổi dạng N4.","legacyRoute":"/trainer/grammar-arena/sort","controller":"native.trainer.trainer_grammar-arena_sort","inputModel":"trainer:sort","contentQuery":{"domain":"grammar","trainerId":"grammar-arena","mode":"sort","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.grammar-arena.sort-timeline","kind":"trainer","location":"school","label":"Ngữ pháp · Sắp xếp trình tự","description":"Mẫu câu, sửa lỗi và biến đổi dạng N4.","legacyRoute":"/trainer/grammar-arena/sort-timeline","controller":"native.trainer.trainer_grammar-arena_sort-timeline","inputModel":"trainer:sort-timeline","contentQuery":{"domain":"grammar","trainerId":"grammar-arena","mode":"sort-timeline","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.grammar-arena.grammar-vs","kind":"trainer","location":"school","label":"Ngữ pháp · So sánh ngữ pháp","description":"Mẫu câu, sửa lỗi và biến đổi dạng N4.","legacyRoute":"/trainer/grammar-arena/grammar-vs","controller":"native.trainer.trainer_grammar-arena_grammar-vs","inputModel":"trainer:grammar-vs","contentQuery":{"domain":"grammar","trainerId":"grammar-arena","mode":"grammar-vs","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.grammar-arena.pattern-completion","kind":"trainer","location":"school","label":"Ngữ pháp · Hoàn thành mẫu câu","description":"Mẫu câu, sửa lỗi và biến đổi dạng N4.","legacyRoute":"/trainer/grammar-arena/pattern-completion","controller":"native.trainer.trainer_grammar-arena_pattern-completion","inputModel":"trainer:pattern-completion","contentQuery":{"domain":"grammar","trainerId":"grammar-arena","mode":"pattern-completion","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.particle-dojo.fill-drop","kind":"trainer","location":"school","label":"Trợ từ · Thả trợ từ","description":"Chọn trợ từ đúng theo ngữ cảnh.","legacyRoute":"/trainer/particle-dojo/fill-drop","controller":"native.trainer.trainer_particle-dojo_fill-drop","inputModel":"trainer:fill-drop","contentQuery":{"domain":"grammar","trainerId":"particle-dojo","mode":"fill-drop","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.particle-dojo.quick-pick","kind":"trainer","location":"school","label":"Trợ từ · Chọn nhanh","description":"Chọn trợ từ đúng theo ngữ cảnh.","legacyRoute":"/trainer/particle-dojo/quick-pick","controller":"native.trainer.trainer_particle-dojo_quick-pick","inputModel":"trainer:quick-pick","contentQuery":{"domain":"grammar","trainerId":"particle-dojo","mode":"quick-pick","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.particle-dojo.sentence-build","kind":"trainer","location":"school","label":"Trợ từ · Ghép câu","description":"Chọn trợ từ đúng theo ngữ cảnh.","legacyRoute":"/trainer/particle-dojo/sentence-build","controller":"native.trainer.trainer_particle-dojo_sentence-build","inputModel":"trainer:sentence-build","contentQuery":{"domain":"grammar","trainerId":"particle-dojo","mode":"sentence-build","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.conjugation-dojo.verb-quiz","kind":"trainer","location":"school","label":"Chia thể · Động từ trắc nghiệm","description":"Chia động từ và tính từ trong phạm vi N4.","legacyRoute":"/trainer/conjugation-dojo/verb-quiz","controller":"native.trainer.trainer_conjugation-dojo_verb-quiz","inputModel":"trainer:verb-quiz","contentQuery":{"domain":"grammar","trainerId":"conjugation-dojo","mode":"verb-quiz","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.conjugation-dojo.verb-fill","kind":"trainer","location":"school","label":"Chia thể · Điền dạng động từ","description":"Chia động từ và tính từ trong phạm vi N4.","legacyRoute":"/trainer/conjugation-dojo/verb-fill","controller":"native.trainer.trainer_conjugation-dojo_verb-fill","inputModel":"trainer:verb-fill","contentQuery":{"domain":"grammar","trainerId":"conjugation-dojo","mode":"verb-fill","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.conjugation-dojo.adj-quiz","kind":"trainer","location":"school","label":"Chia thể · Tính từ trắc nghiệm","description":"Chia động từ và tính từ trong phạm vi N4.","legacyRoute":"/trainer/conjugation-dojo/adj-quiz","controller":"native.trainer.trainer_conjugation-dojo_adj-quiz","inputModel":"trainer:adj-quiz","contentQuery":{"domain":"grammar","trainerId":"conjugation-dojo","mode":"adj-quiz","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.conjugation-dojo.adj-fill","kind":"trainer","location":"school","label":"Chia thể · Điền dạng tính từ","description":"Chia động từ và tính từ trong phạm vi N4.","legacyRoute":"/trainer/conjugation-dojo/adj-fill","controller":"native.trainer.trainer_conjugation-dojo_adj-fill","inputModel":"trainer:adj-fill","contentQuery":{"domain":"grammar","trainerId":"conjugation-dojo","mode":"adj-fill","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.conjugation-dojo.mixed","kind":"trainer","location":"school","label":"Chia thể · Luyện tổng hợp","description":"Chia động từ và tính từ trong phạm vi N4.","legacyRoute":"/trainer/conjugation-dojo/mixed","controller":"native.trainer.trainer_conjugation-dojo_mixed","inputModel":"trainer:mixed","contentQuery":{"domain":"grammar","trainerId":"conjugation-dojo","mode":"mixed","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.conjugation-dojo.flashcard","kind":"trainer","location":"school","label":"Chia thể · Thẻ nhớ","description":"Chia động từ và tính từ trong phạm vi N4.","legacyRoute":"/trainer/conjugation-dojo/flashcard","controller":"native.trainer.trainer_conjugation-dojo_flashcard","inputModel":"trainer:flashcard","contentQuery":{"domain":"grammar","trainerId":"conjugation-dojo","mode":"flashcard","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.conjugation-dojo.volitional-drill","kind":"trainer","location":"school","label":"Chia thể · Luyện thể ý chí","description":"Chia động từ và tính từ trong phạm vi N4.","legacyRoute":"/trainer/conjugation-dojo/volitional-drill","controller":"native.trainer.trainer_conjugation-dojo_volitional-drill","inputModel":"trainer:volitional-drill","contentQuery":{"domain":"grammar","trainerId":"conjugation-dojo","mode":"volitional-drill","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.listening-lab.comprehension","kind":"trainer","location":"sensei","label":"Nghe · Nghe hiểu","description":"Nghe hiểu, chính tả và hội thoại N4.","legacyRoute":"/trainer/listening-lab/comprehension","controller":"native.trainer.trainer_listening-lab_comprehension","inputModel":"trainer:comprehension","contentQuery":{"domain":"listening","trainerId":"listening-lab","mode":"comprehension","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.listening-lab.dictation","kind":"trainer","location":"sensei","label":"Nghe · Nghe chép","description":"Nghe hiểu, chính tả và hội thoại N4.","legacyRoute":"/trainer/listening-lab/dictation","controller":"native.trainer.trainer_listening-lab_dictation","inputModel":"trainer:dictation","contentQuery":{"domain":"listening","trainerId":"listening-lab","mode":"dictation","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.listening-lab.dialogue","kind":"trainer","location":"sensei","label":"Nghe · Hội thoại","description":"Nghe hiểu, chính tả và hội thoại N4.","legacyRoute":"/trainer/listening-lab/dialogue","controller":"native.trainer.trainer_listening-lab_dialogue","inputModel":"trainer:dialogue","contentQuery":{"domain":"listening","trainerId":"listening-lab","mode":"dialogue","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.listening-lab.numbers","kind":"trainer","location":"sensei","label":"Nghe · numbers","description":"Nghe hiểu, chính tả và hội thoại N4.","legacyRoute":"/trainer/listening-lab/numbers","controller":"native.trainer.trainer_listening-lab_numbers","inputModel":"trainer:numbers","contentQuery":{"domain":"listening","trainerId":"listening-lab","mode":"numbers","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.listening-lab.speech","kind":"trainer","location":"sensei","label":"Nghe · Luyện nói","description":"Nghe hiểu, chính tả và hội thoại N4.","legacyRoute":"/trainer/listening-lab/speech","controller":"native.trainer.trainer_listening-lab_speech","inputModel":"trainer:speech","contentQuery":{"domain":"listening","trainerId":"listening-lab","mode":"speech","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.listening-lab.drills","kind":"trainer","location":"sensei","label":"Nghe · Bài nghe ngắn","description":"Nghe hiểu, chính tả và hội thoại N4.","legacyRoute":"/trainer/listening-lab/drills","controller":"native.trainer.trainer_listening-lab_drills","inputModel":"trainer:drills","contentQuery":{"domain":"listening","trainerId":"listening-lab","mode":"drills","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.reading-room.passages","kind":"trainer","location":"library","label":"Đọc · Bài đọc","description":"Đoạn văn, câu và suy luận theo ngữ cảnh.","legacyRoute":"/trainer/reading-room/passages","controller":"native.trainer.trainer_reading-room_passages","inputModel":"trainer:passages","contentQuery":{"domain":"reading","trainerId":"reading-room","mode":"passages","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.reading-room.sentences","kind":"trainer","location":"library","label":"Đọc · Câu","description":"Đoạn văn, câu và suy luận theo ngữ cảnh.","legacyRoute":"/trainer/reading-room/sentences","controller":"native.trainer.trainer_reading-room_sentences","inputModel":"trainer:sentences","contentQuery":{"domain":"reading","trainerId":"reading-room","mode":"sentences","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.reading-room.context","kind":"trainer","location":"library","label":"Đọc · Ngữ cảnh","description":"Đoạn văn, câu và suy luận theo ngữ cảnh.","legacyRoute":"/trainer/reading-room/context","controller":"native.trainer.trainer_reading-room_context","inputModel":"trainer:context","contentQuery":{"domain":"reading","trainerId":"reading-room","mode":"context","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.jlpt-mock.full","kind":"trainer","location":"library","label":"Thi thử · Toàn bài","description":"Đánh giá theo từng phần hoặc toàn bài.","legacyRoute":"/trainer/jlpt-mock/full","controller":"native.trainer.trainer_jlpt-mock_full","inputModel":"trainer:full","contentQuery":{"domain":"exam","trainerId":"jlpt-mock","mode":"full","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.jlpt-mock.vocab-section","kind":"trainer","location":"library","label":"Thi thử · Từ vựng","description":"Đánh giá theo từng phần hoặc toàn bài.","legacyRoute":"/trainer/jlpt-mock/vocab-section","controller":"native.trainer.trainer_jlpt-mock_vocab-section","inputModel":"trainer:vocab-section","contentQuery":{"domain":"exam","trainerId":"jlpt-mock","mode":"vocab-section","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.jlpt-mock.grammar-section","kind":"trainer","location":"library","label":"Thi thử · Ngữ pháp","description":"Đánh giá theo từng phần hoặc toàn bài.","legacyRoute":"/trainer/jlpt-mock/grammar-section","controller":"native.trainer.trainer_jlpt-mock_grammar-section","inputModel":"trainer:grammar-section","contentQuery":{"domain":"exam","trainerId":"jlpt-mock","mode":"grammar-section","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.jlpt-mock.reading-section","kind":"trainer","location":"library","label":"Thi thử · Đọc","description":"Đánh giá theo từng phần hoặc toàn bài.","legacyRoute":"/trainer/jlpt-mock/reading-section","controller":"native.trainer.trainer_jlpt-mock_reading-section","inputModel":"trainer:reading-section","contentQuery":{"domain":"exam","trainerId":"jlpt-mock","mode":"reading-section","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.jlpt-mock.listening-section","kind":"trainer","location":"library","label":"Thi thử · Nghe","description":"Đánh giá theo từng phần hoặc toàn bài.","legacyRoute":"/trainer/jlpt-mock/listening-section","controller":"native.trainer.trainer_jlpt-mock_listening-section","inputModel":"trainer:listening-section","contentQuery":{"domain":"exam","trainerId":"jlpt-mock","mode":"listening-section","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.minna-lessons.lesson-picker","kind":"trainer","location":"school","label":"Minna · Chọn bài","description":"Luyện theo bài Minna đang học.","legacyRoute":"/trainer/minna-lessons/lesson-picker","controller":"native.trainer.trainer_minna-lessons_lesson-picker","inputModel":"trainer:lesson-picker","contentQuery":{"domain":"minna","trainerId":"minna-lessons","mode":"lesson-picker","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.minna-lessons.vocab","kind":"trainer","location":"school","label":"Minna · Từ vựng","description":"Luyện theo bài Minna đang học.","legacyRoute":"/trainer/minna-lessons/vocab","controller":"native.trainer.trainer_minna-lessons_vocab","inputModel":"trainer:vocab","contentQuery":{"domain":"minna","trainerId":"minna-lessons","mode":"vocab","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.minna-lessons.grammar","kind":"trainer","location":"school","label":"Minna · Ngữ pháp","description":"Luyện theo bài Minna đang học.","legacyRoute":"/trainer/minna-lessons/grammar","controller":"native.trainer.trainer_minna-lessons_grammar","inputModel":"trainer:grammar","contentQuery":{"domain":"minna","trainerId":"minna-lessons","mode":"grammar","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.minna-lessons.quiz","kind":"trainer","location":"school","label":"Minna · Trắc nghiệm","description":"Luyện theo bài Minna đang học.","legacyRoute":"/trainer/minna-lessons/quiz","controller":"native.trainer.trainer_minna-lessons_quiz","inputModel":"trainer:quiz","contentQuery":{"domain":"minna","trainerId":"minna-lessons","mode":"quiz","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.minna-lessons.combined-quiz","kind":"trainer","location":"school","label":"Minna · Trắc nghiệm tổng hợp","description":"Luyện theo bài Minna đang học.","legacyRoute":"/trainer/minna-lessons/combined-quiz","controller":"native.trainer.trainer_minna-lessons_combined-quiz","inputModel":"trainer:combined-quiz","contentQuery":{"domain":"minna","trainerId":"minna-lessons","mode":"combined-quiz","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.puzzle-world.hangman","kind":"trainer","location":"garden","label":"Câu đố · Đoán từ","description":"Trò chơi chữ hỗ trợ ghi nhớ.","legacyRoute":"/trainer/puzzle-world/hangman","controller":"native.trainer.trainer_puzzle-world_hangman","inputModel":"trainer:hangman","contentQuery":{"domain":"mixed","trainerId":"puzzle-world","mode":"hangman","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.puzzle-world.build","kind":"trainer","location":"garden","label":"Câu đố · Ghép từ","description":"Trò chơi chữ hỗ trợ ghi nhớ.","legacyRoute":"/trainer/puzzle-world/build","controller":"native.trainer.trainer_puzzle-world_build","inputModel":"trainer:build","contentQuery":{"domain":"mixed","trainerId":"puzzle-world","mode":"build","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.puzzle-world.wordsearch","kind":"trainer","location":"garden","label":"Câu đố · Tìm từ","description":"Trò chơi chữ hỗ trợ ghi nhớ.","legacyRoute":"/trainer/puzzle-world/wordsearch","controller":"native.trainer.trainer_puzzle-world_wordsearch","inputModel":"trainer:wordsearch","contentQuery":{"domain":"mixed","trainerId":"puzzle-world","mode":"wordsearch","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.puzzle-world.crossword","kind":"trainer","location":"garden","label":"Câu đố · Ô chữ","description":"Trò chơi chữ hỗ trợ ghi nhớ.","legacyRoute":"/trainer/puzzle-world/crossword","controller":"native.trainer.trainer_puzzle-world_crossword","inputModel":"trainer:crossword","contentQuery":{"domain":"mixed","trainerId":"puzzle-world","mode":"crossword","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.puzzle-world.speed-type","kind":"trainer","location":"garden","label":"Câu đố · Gõ nhanh","description":"Trò chơi chữ hỗ trợ ghi nhớ.","legacyRoute":"/trainer/puzzle-world/speed-type","controller":"native.trainer.trainer_puzzle-world_speed-type","inputModel":"trainer:speed-type","contentQuery":{"domain":"mixed","trainerId":"puzzle-world","mode":"speed-type","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.mind-tricks.memory","kind":"trainer","location":"garden","label":"Ghi nhớ · Lật thẻ nhớ","description":"Liên tưởng, mẫu hình và trí nhớ âm thanh.","legacyRoute":"/trainer/mind-tricks/memory","controller":"native.trainer.trainer_mind-tricks_memory","inputModel":"trainer:memory","contentQuery":{"domain":"mixed","trainerId":"mind-tricks","mode":"memory","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.mind-tricks.association","kind":"trainer","location":"garden","label":"Ghi nhớ · Liên tưởng","description":"Liên tưởng, mẫu hình và trí nhớ âm thanh.","legacyRoute":"/trainer/mind-tricks/association","controller":"native.trainer.trainer_mind-tricks_association","inputModel":"trainer:association","contentQuery":{"domain":"mixed","trainerId":"mind-tricks","mode":"association","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.mind-tricks.pattern","kind":"trainer","location":"garden","label":"Ghi nhớ · Nhận diện mẫu","description":"Liên tưởng, mẫu hình và trí nhớ âm thanh.","legacyRoute":"/trainer/mind-tricks/pattern","controller":"native.trainer.trainer_mind-tricks_pattern","inputModel":"trainer:pattern","contentQuery":{"domain":"mixed","trainerId":"mind-tricks","mode":"pattern","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.mind-tricks.kanji-parts","kind":"trainer","location":"garden","label":"Ghi nhớ · Bộ phận kanji","description":"Liên tưởng, mẫu hình và trí nhớ âm thanh.","legacyRoute":"/trainer/mind-tricks/kanji-parts","controller":"native.trainer.trainer_mind-tricks_kanji-parts","inputModel":"trainer:kanji-parts","contentQuery":{"domain":"mixed","trainerId":"mind-tricks","mode":"kanji-parts","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.mind-tricks.audio-memory","kind":"trainer","location":"garden","label":"Ghi nhớ · Trí nhớ âm thanh","description":"Liên tưởng, mẫu hình và trí nhớ âm thanh.","legacyRoute":"/trainer/mind-tricks/audio-memory","controller":"native.trainer.trainer_mind-tricks_audio-memory","inputModel":"trainer:audio-memory","contentQuery":{"domain":"mixed","trainerId":"mind-tricks","mode":"audio-memory","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.mind-tricks.speed","kind":"trainer","location":"garden","label":"Ghi nhớ · Phản xạ nhanh","description":"Liên tưởng, mẫu hình và trí nhớ âm thanh.","legacyRoute":"/trainer/mind-tricks/speed","controller":"native.trainer.trainer_mind-tricks_speed","inputModel":"trainer:speed","contentQuery":{"domain":"mixed","trainerId":"mind-tricks","mode":"speed","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.mind-tricks.odd-one-out","kind":"trainer","location":"garden","label":"Ghi nhớ · Tìm mục khác biệt","description":"Liên tưởng, mẫu hình và trí nhớ âm thanh.","legacyRoute":"/trainer/mind-tricks/odd-one-out","controller":"native.trainer.trainer_mind-tricks_odd-one-out","inputModel":"trainer:odd-one-out","contentQuery":{"domain":"mixed","trainerId":"mind-tricks","mode":"odd-one-out","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.story-mode.palace","kind":"trainer","location":"library","label":"Câu chuyện · Cung điện ký ức","description":"Đọc và quyết định trong câu chuyện N4.","legacyRoute":"/trainer/story-mode/palace","controller":"native.trainer.trainer_story-mode_palace","inputModel":"trainer:palace","contentQuery":{"domain":"reading","trainerId":"story-mode","mode":"palace","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.story-mode.adventures","kind":"trainer","location":"library","label":"Câu chuyện · Truyện phiêu lưu","description":"Đọc và quyết định trong câu chuyện N4.","legacyRoute":"/trainer/story-mode/adventures","controller":"native.trainer.trainer_story-mode_adventures","inputModel":"trainer:adventures","contentQuery":{"domain":"reading","trainerId":"story-mode","mode":"adventures","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.story-mode.scenarios","kind":"trainer","location":"library","label":"Câu chuyện · Tình huống","description":"Đọc và quyết định trong câu chuyện N4.","legacyRoute":"/trainer/story-mode/scenarios","controller":"native.trainer.trainer_story-mode_scenarios","inputModel":"trainer:scenarios","contentQuery":{"domain":"reading","trainerId":"story-mode","mode":"scenarios","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.adventure-arena.kanji-battle","kind":"trainer","location":"garden","label":"Phiêu lưu · Đấu kanji","description":"Thử thách học tập có cường độ cao hơn.","legacyRoute":"/trainer/adventure-arena/kanji-battle","controller":"native.trainer.trainer_adventure-arena_kanji-battle","inputModel":"trainer:kanji-battle","contentQuery":{"domain":"mixed","trainerId":"adventure-arena","mode":"kanji-battle","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.adventure-arena.arena-blitz","kind":"trainer","location":"garden","label":"Phiêu lưu · Đấu trường tốc độ","description":"Thử thách học tập có cường độ cao hơn.","legacyRoute":"/trainer/adventure-arena/arena-blitz","controller":"native.trainer.trainer_adventure-arena_arena-blitz","inputModel":"trainer:arena-blitz","contentQuery":{"domain":"mixed","trainerId":"adventure-arena","mode":"arena-blitz","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.adventure-arena.ninja-typing","kind":"trainer","location":"garden","label":"Phiêu lưu · Ninja gõ chữ","description":"Thử thách học tập có cường độ cao hơn.","legacyRoute":"/trainer/adventure-arena/ninja-typing","controller":"native.trainer.trainer_adventure-arena_ninja-typing","inputModel":"trainer:ninja-typing","contentQuery":{"domain":"mixed","trainerId":"adventure-arena","mode":"ninja-typing","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.adventure-arena.world-boss","kind":"trainer","location":"garden","label":"Phiêu lưu · Trùm thế giới","description":"Thử thách học tập có cường độ cao hơn.","legacyRoute":"/trainer/adventure-arena/world-boss","controller":"native.trainer.trainer_adventure-arena_world-boss","inputModel":"trainer:world-boss","contentQuery":{"domain":"mixed","trainerId":"adventure-arena","mode":"world-boss","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.adventure-arena.izakaya","kind":"trainer","location":"garden","label":"Phiêu lưu · Quán Izakaya","description":"Thử thách học tập có cường độ cao hơn.","legacyRoute":"/trainer/adventure-arena/izakaya","controller":"native.trainer.trainer_adventure-arena_izakaya","inputModel":"trainer:izakaya","contentQuery":{"domain":"mixed","trainerId":"adventure-arena","mode":"izakaya","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.adventure-arena.anime-quotes","kind":"trainer","location":"garden","label":"Phiêu lưu · Câu thoại anime","description":"Thử thách học tập có cường độ cao hơn.","legacyRoute":"/trainer/adventure-arena/anime-quotes","controller":"native.trainer.trainer_adventure-arena_anime-quotes","inputModel":"trainer:anime-quotes","contentQuery":{"domain":"mixed","trainerId":"adventure-arena","mode":"anime-quotes","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.adventure-arena.sushi-chef","kind":"trainer","location":"garden","label":"Phiêu lưu · Đầu bếp sushi","description":"Thử thách học tập có cường độ cao hơn.","legacyRoute":"/trainer/adventure-arena/sushi-chef","controller":"native.trainer.trainer_adventure-arena_sushi-chef","inputModel":"trainer:sushi-chef","contentQuery":{"domain":"mixed","trainerId":"adventure-arena","mode":"sushi-chef","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.boss-battle.easy","kind":"trainer","location":"garden","label":"Đấu trùm · Dễ","description":"Chuỗi câu hỏi dài dành cho người muốn thử sức.","legacyRoute":"/trainer/boss-battle/easy","controller":"native.trainer.trainer_boss-battle_easy","inputModel":"trainer:easy","contentQuery":{"domain":"mixed","trainerId":"boss-battle","mode":"easy","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.boss-battle.normal","kind":"trainer","location":"garden","label":"Đấu trùm · Thường","description":"Chuỗi câu hỏi dài dành cho người muốn thử sức.","legacyRoute":"/trainer/boss-battle/normal","controller":"native.trainer.trainer_boss-battle_normal","inputModel":"trainer:normal","contentQuery":{"domain":"mixed","trainerId":"boss-battle","mode":"normal","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.boss-battle.hard","kind":"trainer","location":"garden","label":"Đấu trùm · Khó","description":"Chuỗi câu hỏi dài dành cho người muốn thử sức.","legacyRoute":"/trainer/boss-battle/hard","controller":"native.trainer.trainer_boss-battle_hard","inputModel":"trainer:hard","contentQuery":{"domain":"mixed","trainerId":"boss-battle","mode":"hard","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"trainer.boss-battle.nightmare","kind":"trainer","location":"garden","label":"Đấu trùm · Ác mộng","description":"Chuỗi câu hỏi dài dành cho người muốn thử sức.","legacyRoute":"/trainer/boss-battle/nightmare","controller":"native.trainer.trainer_boss-battle_nightmare","inputModel":"trainer:nightmare","contentQuery":{"domain":"mixed","trainerId":"boss-battle","mode":"nightmare","tool":null},"rewardPolicy":{"kind":"learning","baseCorrectCoins":2,"completionBonus":true,"effectModifiersOnly":true},"persistenceKeys":["learning.contentProgress","learning.srs","learning.mastery","learning.mistakes","learning.history","learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openGrammarQuickRef","kind":"tool","location":"library","label":"Cẩm nang ngữ pháp","description":"Tra cứu nhanh ngữ pháp","legacyRoute":"/tools","controller":"native.tool.tool_openGrammarQuickRef","inputModel":"tool:openGrammarQuickRef","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openGrammarQuickRef"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openKanjiDecomposer","kind":"tool","location":"library","label":"Tách bộ kanji","description":"Phân tích bộ thủ kanji","legacyRoute":"/tools","controller":"native.tool.tool_openKanjiDecomposer","inputModel":"tool:openKanjiDecomposer","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openKanjiDecomposer"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openVocabExplorer","kind":"tool","location":"library","label":"Khám phá từ vựng","description":"Khám phá từ vựng","legacyRoute":"/tools","controller":"native.tool.tool_openVocabExplorer","inputModel":"tool:openVocabExplorer","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openVocabExplorer"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openConjugationTable","kind":"tool","location":"library","label":"Bảng chia thể","description":"Bảng chia động từ","legacyRoute":"/tools","controller":"native.tool.tool_openConjugationTable","inputModel":"tool:openConjugationTable","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openConjugationTable"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openAnalyticsDash","kind":"tool","location":"home","label":"Bảng phân tích","description":"Biểu đồ phân tích","legacyRoute":"/tools","controller":"native.tool.tool_openAnalyticsDash","inputModel":"tool:openAnalyticsDash","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openAnalyticsDash"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openStudyStreak","kind":"tool","location":"home","label":"Chuỗi học","description":"Theo dõi chuỗi học","legacyRoute":"/tools","controller":"native.tool.tool_openStudyStreak","inputModel":"tool:openStudyStreak","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openStudyStreak"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openQuickStats","kind":"tool","location":"home","label":"Thống kê nhanh","description":"Thống kê nhanh hôm nay","legacyRoute":"/tools","controller":"native.tool.tool_openQuickStats","inputModel":"tool:openQuickStats","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openQuickStats"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openSrsQueue","kind":"tool","location":"home","label":"Hàng đợi SRS","description":"Xem hàng đợi SRS","legacyRoute":"/tools","controller":"native.tool.tool_openSrsQueue","inputModel":"tool:openSrsQueue","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openSrsQueue"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openMistakeNotebook","kind":"tool","location":"home","label":"Sổ lỗi sai","description":"Sổ ghi lỗi sai","legacyRoute":"/tools","controller":"native.tool.tool_openMistakeNotebook","inputModel":"tool:openMistakeNotebook","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openMistakeNotebook"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openStudyNotes","kind":"tool","location":"home","label":"Ghi chú học","description":"Ghi chú nhanh","legacyRoute":"/tools","controller":"native.tool.tool_openStudyNotes","inputModel":"tool:openStudyNotes","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openStudyNotes"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openOfflineDict","kind":"tool","location":"home","label":"Từ điển ngoại tuyến","description":"Từ điển ngoại tuyến","legacyRoute":"/tools","controller":"native.tool.tool_openOfflineDict","inputModel":"tool:openOfflineDict","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openOfflineDict"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openKeigoBasics","kind":"tool","location":"home","label":"Kính ngữ cơ bản","description":"Kính ngữ cơ bản","legacyRoute":"/tools","controller":"native.tool.tool_openKeigoBasics","inputModel":"tool:openKeigoBasics","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openKeigoBasics"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openHanVietDict","kind":"tool","location":"home","label":"Từ điển Hán-Việt","description":"Từ điển Hán Việt","legacyRoute":"/tools","controller":"native.tool.tool_openHanVietDict","inputModel":"tool:openHanVietDict","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openHanVietDict"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openRadicalDetail","kind":"tool","location":"home","label":"Chi tiết bộ thủ","description":"Chi tiết bộ thủ","legacyRoute":"/tools","controller":"native.tool.tool_openRadicalDetail","inputModel":"tool:openRadicalDetail","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openRadicalDetail"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openCustomCards","kind":"tool","location":"home","label":"Thẻ tự tạo","description":"Tạo thẻ riêng","legacyRoute":"/tools","controller":"native.tool.tool_openCustomCards","inputModel":"tool:openCustomCards","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openCustomCards"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openWordOfDay","kind":"tool","location":"home","label":"Từ hôm nay","description":"Từ vựng hôm nay","legacyRoute":"/tools","controller":"native.tool.tool_openWordOfDay","inputModel":"tool:openWordOfDay","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openWordOfDay"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openKanjiOfDay","kind":"tool","location":"home","label":"Kanji hôm nay","description":"Kanji hôm nay","legacyRoute":"/tools","controller":"native.tool.tool_openKanjiOfDay","inputModel":"tool:openKanjiOfDay","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openKanjiOfDay"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openGrammarOfDay","kind":"tool","location":"home","label":"Ngữ pháp hôm nay","description":"Ngữ pháp hôm nay","legacyRoute":"/tools","controller":"native.tool.tool_openGrammarOfDay","inputModel":"tool:openGrammarOfDay","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openGrammarOfDay"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openDailyMiniLesson","kind":"tool","location":"home","label":"Bài mini","description":"Bài học mini 5 phút","legacyRoute":"/tools","controller":"native.tool.tool_openDailyMiniLesson","inputModel":"tool:openDailyMiniLesson","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openDailyMiniLesson"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openDailyListening","kind":"tool","location":"home","label":"Nghe hằng ngày","description":"Luyện nghe 1 phút","legacyRoute":"/tools","controller":"native.tool.tool_openDailyListening","inputModel":"tool:openDailyListening","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openDailyListening"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openPhraseOfDay","kind":"tool","location":"home","label":"Cụm từ hôm nay","description":"Cụm từ hằng ngày","legacyRoute":"/tools","controller":"native.tool.tool_openPhraseOfDay","inputModel":"tool:openPhraseOfDay","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openPhraseOfDay"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openMistakeDigest","kind":"tool","location":"home","label":"Tổng hợp lỗi sai","description":"Tổng hợp lỗi sai hôm qua","legacyRoute":"/tools","controller":"native.tool.tool_openMistakeDigest","inputModel":"tool:openMistakeDigest","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openMistakeDigest"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openMorningQuiz","kind":"tool","location":"home","label":"Trắc nghiệm sáng","description":"10 câu trắc nghiệm buổi sáng","legacyRoute":"/tools","controller":"native.tool.tool_openMorningQuiz","inputModel":"tool:openMorningQuiz","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openMorningQuiz"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openNightReview","kind":"tool","location":"home","label":"Ôn tối","description":"Tổng kết cuối ngày","legacyRoute":"/tools","controller":"native.tool.tool_openNightReview","inputModel":"tool:openNightReview","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openNightReview"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openParticleRef","kind":"tool","location":"library","label":"Cẩm nang trợ từ","description":"Tất cả trợ từ + ví dụ","legacyRoute":"/tools","controller":"native.tool.tool_openParticleRef","inputModel":"tool:openParticleRef","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openParticleRef"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openCounterRef","kind":"tool","location":"library","label":"Cẩm nang trợ số từ","description":"Số đếm + đơn vị","legacyRoute":"/tools","controller":"native.tool.tool_openCounterRef","inputModel":"tool:openCounterRef","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openCounterRef"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openTimeExprRef","kind":"tool","location":"library","label":"Biểu thức thời gian","description":"Biểu thức thời gian","legacyRoute":"/tools","controller":"native.tool.tool_openTimeExprRef","inputModel":"tool:openTimeExprRef","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openTimeExprRef"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openVerbGroupRef","kind":"tool","location":"library","label":"Nhóm động từ","description":"Chia nhóm động từ","legacyRoute":"/tools","controller":"native.tool.tool_openVerbGroupRef","inputModel":"tool:openVerbGroupRef","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openVerbGroupRef"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openAdjectiveRef","kind":"tool","location":"library","label":"Cẩm nang tính từ","description":"Bảng chia tính từ","legacyRoute":"/tools","controller":"native.tool.tool_openAdjectiveRef","inputModel":"tool:openAdjectiveRef","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openAdjectiveRef"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openConnectorRef","kind":"tool","location":"library","label":"Từ nối","description":"Liên từ nối câu","legacyRoute":"/tools","controller":"native.tool.tool_openConnectorRef","inputModel":"tool:openConnectorRef","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openConnectorRef"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openHonorificRef","kind":"tool","location":"library","label":"Hướng dẫn kính ngữ","description":"Kính ngữ nhanh","legacyRoute":"/tools","controller":"native.tool.tool_openHonorificRef","inputModel":"tool:openHonorificRef","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openHonorificRef"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openGrammarTree","kind":"tool","location":"home","label":"Cây ngữ pháp","description":"Cây kỹ năng ngữ pháp","legacyRoute":"/tools","controller":"native.tool.tool_openGrammarTree","inputModel":"tool:openGrammarTree","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openGrammarTree"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"tool.openGrammarCompare","kind":"tool","location":"home","label":"So sánh ngữ pháp","description":"So sánh ngữ pháp","legacyRoute":"/tools","controller":"native.tool.tool_openGrammarCompare","inputModel":"tool:openGrammarCompare","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":"openGrammarCompare"},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.bookmarks","learning.notes","learning.customCards"],"onlineRequirement":false,"permission":"learner"},{"id":"ai.chat","kind":"ai","location":"sensei","label":"Chat AI","description":"Hỏi đáp tự do bằng tiếng Việt hoặc Nhật","legacyRoute":"/ai-tutor?feature=chat","controller":"native.ai.ai_chat","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.grammar","kind":"ai","location":"sensei","label":"Kiểm tra ngữ pháp","description":"Kiểm tra câu tiếng Nhật của bạn","legacyRoute":"/ai-tutor?feature=grammar","controller":"native.ai.ai_grammar","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.examples","kind":"ai","location":"sensei","label":"Tạo ví dụ","description":"Tạo câu ví dụ cho từ vựng/ngữ pháp","legacyRoute":"/ai-tutor?feature=examples","controller":"native.ai.ai_examples","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.conversation","kind":"ai","location":"sensei","label":"Hội thoại mẫu","description":"Tạo hội thoại theo chủ đề","legacyRoute":"/ai-tutor?feature=conversation","controller":"native.ai.ai_conversation","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.writing","kind":"ai","location":"sensei","label":"Viết & chấm điểm","description":"Viết bài JP, AI sửa và chấm","legacyRoute":"/ai-tutor?feature=writing","controller":"native.ai.ai_writing","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.roleplay","kind":"ai","location":"sensei","label":"Nhập vai","description":"Nhập vai tình huống thực tế","legacyRoute":"/ai-tutor?feature=roleplay","controller":"native.ai.ai_roleplay","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.analyze","kind":"ai","location":"sensei","label":"Phân tích câu","description":"Phân tích từng từ, ngữ pháp, nghĩa","legacyRoute":"/ai-tutor?feature=analyze","controller":"native.ai.ai_analyze","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.advisor","kind":"ai","location":"sensei","label":"Cố vấn học tập","description":"Lộ trình cá nhân hóa dựa trên dữ liệu","legacyRoute":"/ai-tutor?feature=advisor","controller":"native.ai.ai_advisor","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.freetalk","kind":"ai","location":"sensei","label":"Trò chuyện tự do","description":"Nói chuyện tự do bằng tiếng Nhật","legacyRoute":"/ai-tutor?feature=freetalk","controller":"native.ai.ai_freetalk","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.ai-quiz","kind":"ai","location":"sensei","label":"AI trắc nghiệm","description":"Bài trắc nghiệm cá nhân hóa bằng AI","legacyRoute":"/ai-tutor?feature=ai-quiz","controller":"native.ai.ai_ai-quiz","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.ai-grammar-drill","kind":"ai","location":"sensei","label":"Luyện ngữ pháp AI","description":"Luyện ngữ pháp thích ứng","legacyRoute":"/ai-tutor?feature=ai-grammar-drill","controller":"native.ai.ai_ai-grammar-drill","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.ai-mistakes","kind":"ai","location":"sensei","label":"Phân tích lỗi sai","description":"Phân tích lỗi sai và điểm yếu","legacyRoute":"/ai-tutor?feature=ai-mistakes","controller":"native.ai.ai_ai-mistakes","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.ai-navigator","kind":"ai","location":"sensei","label":"Điều hướng AI","description":"Chatbot đề xuất tính năng phù hợp","legacyRoute":"/ai-tutor?feature=ai-navigator","controller":"native.ai.ai_ai-navigator","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.ai-jlpt-predictor","kind":"ai","location":"sensei","label":"Dự đoán JLPT","description":"Dự đoán điểm JLPT","legacyRoute":"/ai-tutor?feature=ai-jlpt-predictor","controller":"native.ai.ai_ai-jlpt-predictor","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.ai-wordmap","kind":"ai","location":"sensei","label":"Bản đồ từ","description":"Sơ đồ liên tưởng từ vựng","legacyRoute":"/ai-tutor?feature=ai-wordmap","controller":"native.ai.ai_ai-wordmap","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.ai-story","kind":"ai","location":"sensei","label":"Tạo truyện","description":"Truyện tương tác phân nhánh","legacyRoute":"/ai-tutor?feature=ai-story","controller":"native.ai.ai_ai-story","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.ai-news","kind":"ai","location":"sensei","label":"Đơn giản hóa tin","description":"Đơn giản hóa văn bản JP","legacyRoute":"/ai-tutor?feature=ai-news","controller":"native.ai.ai_ai-news","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.ai-lyrics","kind":"ai","location":"sensei","label":"Lời bài hát","description":"Học qua bài hát AI tạo","legacyRoute":"/ai-tutor?feature=ai-lyrics","controller":"native.ai.ai_ai-lyrics","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.ai-diary","kind":"ai","location":"sensei","label":"Trợ lý nhật ký","description":"Viết nhật ký JP, AI chấm và sửa","legacyRoute":"/ai-tutor?feature=ai-diary","controller":"native.ai.ai_ai-diary","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.ai-scene","kind":"ai","location":"sensei","label":"Mô phỏng tình huống","description":"Mô phỏng tình huống thực tế","legacyRoute":"/ai-tutor?feature=ai-scene","controller":"native.ai.ai_ai-scene","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"ai.ai-kanji-detective","kind":"ai","location":"sensei","label":"Thám tử kanji","description":"Giải mã kanji: bộ thủ, mẹo nhớ","legacyRoute":"/ai-tutor?feature=ai-kanji-detective","controller":"native.ai.ai_ai-kanji-detective","inputModel":"conversation","contentQuery":{"domain":"ai","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":true,"permission":"learner"},{"id":"content.minna","kind":"content","location":"school","label":"Giáo trình Minna","description":"","legacyRoute":"/content/minna","controller":"native.content.content_minna","inputModel":"browser","contentQuery":{"domain":"minna","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"content.vocab","kind":"content","location":"market","label":"Kho từ vựng","description":"","legacyRoute":"/content/vocab","controller":"native.content.content_vocab","inputModel":"browser","contentQuery":{"domain":"vocab","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"content.kanji","kind":"content","location":"dojo","label":"Kho Kanji","description":"","legacyRoute":"/content/kanji","controller":"native.content.content_kanji","inputModel":"browser","contentQuery":{"domain":"kanji","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"content.grammar","kind":"content","location":"school","label":"Kho ngữ pháp","description":"","legacyRoute":"/content/grammar","controller":"native.content.content_grammar","inputModel":"browser","contentQuery":{"domain":"grammar","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"content.reference","kind":"content","location":"library","label":"Cẩm nang tiếng Nhật","description":"","legacyRoute":"/content/reference","controller":"native.content.content_reference","inputModel":"browser","contentQuery":{"domain":"reference","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"place.practice","kind":"catalog","location":"home","label":"Luyện tập","description":"","legacyRoute":"/practice","controller":"native.catalog.place_practice","inputModel":"panel","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"place.tools","kind":"catalog","location":"home","label":"Công cụ","description":"","legacyRoute":"/tools","controller":"native.catalog.place_tools","inputModel":"panel","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"place.settings","kind":"place","location":"home","label":"Cài đặt","description":"","legacyRoute":"/settings","controller":"native.place.place_settings","inputModel":"panel","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"place.shop","kind":"place","location":"home","label":"Cửa hàng","description":"","legacyRoute":"/shop","controller":"native.place.place_shop","inputModel":"panel","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"place.inventory","kind":"place","location":"home","label":"Kho đồ","description":"","legacyRoute":"/inventory","controller":"native.place.place_inventory","inputModel":"panel","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"place.studyRoom","kind":"place","location":"home","label":"Phòng học","description":"","legacyRoute":"/study-room","controller":"native.place.place_studyRoom","inputModel":"panel","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":false,"permission":"learner"},{"id":"place.profile","kind":"place","location":"home","label":"Hồ sơ","description":"","legacyRoute":"/profile","controller":"native.place.place_profile","inputModel":"panel","contentQuery":{"domain":"support","trainerId":null,"mode":null,"tool":null},"rewardPolicy":{"kind":"none"},"persistenceKeys":["learning.activityProgress"],"onlineRequirement":false,"permission":"learner"}]');
const manifest = {
  activities
};
const HARU_WORLD_ACTIVITIES = Object.freeze(manifest.activities.map(Object.freeze));
const byId = new Map(HARU_WORLD_ACTIVITIES.map((entry) => [entry.id, entry]));
function resolveHaruWorldActivity(id) {
  return typeof id === "string" ? byId.get(id) || null : null;
}
function haruWorldActivityHref(id, contentId, sourceRoute) {
  if (!resolveHaruWorldActivity(id)) return "/";
  const query = new URLSearchParams({ activity: id });
  if (sourceRoute) query.set("route", sourceRoute);
  return `/?${query}`;
}
function normalizedPath(rawPath) {
  const url = new URL(rawPath || "/", "https://haru.invalid");
  return { url, path: url.pathname.replace(/\/$/, "") || "/" };
}
function resolveHaruWorldLegacyActivity(rawPath) {
  const { url, path } = normalizedPath(rawPath);
  if (path.startsWith("/trainer/")) {
    const [, , trainerId, mode] = path.split("/");
    return HARU_WORLD_ACTIVITIES.find((entry) => {
      var _a, _b;
      return entry.kind === "trainer" && ((_a = entry.contentQuery) == null ? void 0 : _a.trainerId) === trainerId && ((_b = entry.contentQuery) == null ? void 0 : _b.mode) === mode;
    }) || null;
  }
  if (path.startsWith("/content")) {
    const type = path.split("/")[2] || "minna";
    return resolveHaruWorldActivity(`content.${type}`);
  }
  if (path === "/ai-tutor") return resolveHaruWorldActivity(`ai.${url.searchParams.get("feature") || "chat"}`);
  if (path.startsWith("/ai-")) return resolveHaruWorldActivity(`ai.${path.slice(1) === "ai-jlpt-predict" ? "ai-jlpt-predictor" : path.slice(1)}`);
  if (path === "/admin") return null;
  return HARU_WORLD_ACTIVITIES.find((entry) => {
    const route = entry.legacyRoute;
    if (!route || route === "/") return false;
    const prefix = route.split("/:")[0].replace(/\/$/, "");
    return path === prefix || route.includes("/:") && path.startsWith(`${prefix}/`);
  }) || null;
}
const FROM_WORLD = Object.freeze([
  "ready",
  "save_commit",
  "auth_request",
  "admin_revalidate",
  "platform_request",
  "admin_request",
  "telemetry",
  "fatal_error"
]);
const ADMIN_MUTATIONS = /* @__PURE__ */ new Set([
  "announcement_upsert",
  "challenge_create",
  "challenge_delete",
  "message_send",
  "issue_status_set",
  "config_set"
]);
const AI_FEATURE_IDS = new Set(HARU_WORLD_ACTIVITIES.filter((entry) => entry.kind === "ai").map((entry) => entry.id.replace(/^ai\./, "")));
const WORLD_AI_SYSTEM_PROMPT = "Bạn là gia sư tiếng Nhật JLPT N4 cho người học Việt Nam. Trả lời ngắn gọn bằng tiếng Việt, nêu ví dụ tiếng Nhật chính xác khi hữu ích. Không yêu cầu hay tiết lộ thông tin đăng nhập.";
const WORLD_AI_FEATURE_INSTRUCTIONS = Object.freeze({
  chat: "Trò chuyện tự do nhưng luôn hướng về việc học N4.",
  grammar: "Giải thích cấu trúc ngữ pháp, điều kiện dùng và ví dụ N4.",
  examples: "Tạo ví dụ tiếng Nhật tự nhiên kèm bản dịch Việt.",
  conversation: "Luyện hội thoại ngắn, lần lượt từng lượt nói.",
  writing: "Sửa bài viết nhẹ nhàng, nêu lỗi và cách cải thiện.",
  roleplay: "Nhập vai tình huống thực tế và chờ người học trả lời.",
  analyze: "Phân tích câu theo thành phần, từ vựng và ngữ pháp.",
  advisor: "Đề xuất kế hoạch học ngắn, khả thi dựa trên câu hỏi.",
  freetalk: "Khuyến khích hội thoại tự do bằng tiếng Nhật N4.",
  "ai-quiz": "Tạo bài luyện ngắn, có đáp án và giải thích sau khi người học trả lời.",
  "ai-grammar-drill": "Tạo drill ngữ pháp N4 tăng dần độ khó.",
  "ai-mistakes": "Giúp nhận diện kiểu lỗi học tập và chiến lược khắc phục.",
  "ai-navigator": "Hướng dẫn chọn hoạt động Haru phù hợp mục tiêu học.",
  "ai-jlpt-predictor": "Đưa ước lượng thận trọng, nêu rõ đây không phải điểm thi chính thức.",
  "ai-wordmap": "Xây sơ đồ liên tưởng từ vựng bằng danh sách gọn.",
  "ai-story": "Cùng sáng tác truyện ngắn tiếng Nhật mức N4.",
  "ai-news": "Đơn giản hóa hoặc giải thích tin tiếng Nhật ở mức N4.",
  "ai-lyrics": "Phân tích motif ngôn ngữ, không chép lời bài hát có bản quyền.",
  "ai-diary": "Phản hồi nhật ký bằng nhận xét mang tính học tập, tích cực.",
  "ai-scene": "Mô phỏng tình huống đời thường và giữ vai trò rõ ràng.",
  "ai-kanji-detective": "Phân tích Kanji: bộ thủ, âm đọc, nghĩa và mẹo nhớ."
});
function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function freshRequestId(prefix) {
  return `${prefix}:${crypto.randomUUID()}`;
}
function HaruWorldV1Host({
  userId,
  adminCapability = { verified: false, allowed: false },
  initialActivityId = null,
  initialPanelId = null,
  onWorldEvent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    HaruWorldV1Session,
    {
      userId: userId || null,
      adminCapability,
      initialActivityId,
      initialPanelId,
      onWorldEvent
    },
    userId || "guest"
  );
}
function HaruWorldV1Session({ userId, adminCapability, initialActivityId, initialPanelId, onWorldEvent }) {
  const frame = reactExports.useRef(null);
  const events = reactExports.useRef(onWorldEvent);
  const capabilityGeneration = reactExports.useRef(0);
  const declaredAdminCapability = reactExports.useRef(false);
  const sessionCleanup = reactExports.useRef(Promise.resolve());
  events.current = onWorldEvent;
  const [attempt, setAttempt] = reactExports.useState(0);
  const [sessionId, setSessionId] = reactExports.useState(() => crypto.randomUUID());
  const [ready, setReady] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const url = new URL("game/world/index.html", document.baseURI);
  url.searchParams.set("sessionId", sessionId);
  url.searchParams.set("attempt", String(attempt));
  if (["localhost", "127.0.0.1", "[::1]"].includes(location.hostname) && new URLSearchParams(location.search).get("qa") === "1") {
    url.searchParams.set("qa", "1");
  }
  const send = reactExports.useCallback((type, payload = {}, requestId) => {
    var _a, _b;
    try {
      const envelope = createHaruWorldEnvelope({ sessionId, type, payload, ...requestId ? { requestId } : {} });
      (_b = (_a = frame.current) == null ? void 0 : _a.contentWindow) == null ? void 0 : _b.postMessage(envelope, location.origin);
      return true;
    } catch (cause) {
      setError(`Bridge Haru World không hợp lệ: ${cause.message || cause}`);
      return false;
    }
  }, [sessionId]);
  reactExports.useEffect(() => {
    declaredAdminCapability.current = (adminCapability == null ? void 0 : adminCapability.verified) === true && (adminCapability == null ? void 0 : adminCapability.allowed) === true;
    if (!declaredAdminCapability.current) {
      capabilityGeneration.current += 1;
      send("admin_capability", { verified: false, allowed: false });
    } else {
      window.dispatchEvent(new Event("haru-world-capability-refresh"));
    }
  }, [adminCapability == null ? void 0 : adminCapability.allowed, adminCapability == null ? void 0 : adminCapability.verified, send]);
  reactExports.useEffect(() => {
    if (!ready) return;
    if (initialActivityId) send("realtime_event", { kind: "open_activity", activityId: initialActivityId });
    if (initialPanelId === "admin") send("realtime_event", { kind: "open_admin" });
  }, [initialActivityId, initialPanelId, ready, send]);
  reactExports.useEffect(() => {
    let active = true;
    let db;
    let releaseSession;
    let record;
    let gameReady = false;
    let initialized = false;
    let bootstrapSent = false;
    let nativeReady = false;
    let lifecycleQueue = Promise.resolve();
    let adminAllowed = false;
    const requests = /* @__PURE__ */ new Map();
    const owner = worldOwner(userId);
    const post = (type, payload = {}, requestId) => {
      if (!active) return false;
      if (requestId && requests.has(requestId)) requests.set(requestId, { type, payload });
      return send(type, payload, requestId);
    };
    const report = (cause) => {
      if (!active) return;
      setError((cause == null ? void 0 : cause.message) || "Không thể mở Haru World.");
      post("realtime_event", { kind: "host_error" });
    };
    const queue = (work) => {
      lifecycleQueue = lifecycleQueue.then(async () => {
        if (active) await work();
      }).catch(report);
      return lifecycleQueue;
    };
    const emitAdminCapability = (value, checking = false) => {
      adminAllowed = value === true;
      post("admin_capability", { verified: adminAllowed, allowed: adminAllowed, ...checking ? { checking: true } : {} });
    };
    const revalidateAdmin = async () => {
      if (!active || !userId || !isSupabaseConfigured) return false;
      try {
        const { data, error: rpcError } = await supabase.rpc("is_current_user_admin");
        return !rpcError && data === true;
      } catch (e) {
        return false;
      }
    };
    const revalidateAndEmitCapability = async () => {
      const generation = ++capabilityGeneration.current;
      emitAdminCapability(false, true);
      if (!declaredAdminCapability.current) {
        emitAdminCapability(false);
        return false;
      }
      const capability = await revalidateAdmin();
      if (!active || generation !== capabilityGeneration.current) {
        return false;
      }
      emitAdminCapability(capability);
      return capability;
    };
    const bootstrap = async () => {
      if (!active || initialized || !gameReady || !record) return;
      initialized = true;
      await revalidateAndEmitCapability();
      if (!active) return;
      send("auth_state", { authenticated: Boolean(userId), owner: userId ? "account" : "guest" });
      send("bootstrap_start", {
        revision: record.cloudRevision,
        contentVersion: record.save.contentVersion,
        chunkCount: 1
      });
      send("bootstrap_chunk", { index: 0, save: record.save });
      send("bootstrap_end", {});
      bootstrapSent = true;
      if (record.conflict) send("realtime_event", { kind: "save_conflict", revision: record.conflict.revision });
    };
    const boot = (async () => {
      await sessionCleanup.current;
      if (!active) return;
      releaseSession = await acquireHaruWorldSession(owner);
      if (!active) return;
      db = await openHaruWorldDatabase();
      if (!active) return;
      record = await loadHaruWorldRecord(db, owner);
      if (!active) return;
      if (userId) {
        try {
          record = await pullHaruWorldCloud(record, userId);
          if (!active) return;
          if (!record.conflict && record.cloudRevision === 0) {
            record = await pushHaruWorldCloud({ ...record, dirty: true }, userId);
            if (!active) return;
            if (!record.conflict) record = await writeHaruWorldRecord(db, owner, record);
          }
        } catch (e) {
          post("realtime_event", { kind: "cloud_warning" });
        }
      }
      await bootstrap();
    })().catch(report);
    const replySave = (requestId, payload) => post("save_result", { requestId, ...payload }, requestId);
    const replyAdmin = (requestId, payload) => post("admin_result", { requestId, ...payload }, requestId);
    const persistWorldSave = async (payload, requestId) => {
      var _a, _b, _c;
      if (!record || record.conflict) {
        replySave(requestId, { ok: false, error: "SAVE_CONFLICT", revision: (_c = (_b = (_a = record == null ? void 0 : record.conflict) == null ? void 0 : _a.revision) != null ? _b : record == null ? void 0 : record.cloudRevision) != null ? _c : 0 });
        return;
      }
      if (payload.expectedRevision !== record.cloudRevision) {
        replySave(requestId, { ok: false, error: "STALE_REVISION", revision: record.cloudRevision });
        return;
      }
      const validation = validateHaruWorldSave(payload.save);
      if (!validation.ok) {
        replySave(requestId, { ok: false, error: validation.code, revision: record.cloudRevision });
        return;
      }
      record = await writeHaruWorldRecord(db, owner, { ...record, save: structuredClone(payload.save), dirty: Boolean(userId) });
      if (!active) return;
      if (userId) {
        try {
          record = await pushHaruWorldCloud(record, userId);
          if (!active) return;
          if (!record.conflict && !record.dirty) record = await writeHaruWorldRecord(db, owner, record);
        } catch (e) {
          post("realtime_event", { kind: "cloud_warning" });
        }
      }
      if (record.conflict) {
        replySave(requestId, { ok: false, error: "SAVE_CONFLICT", revision: record.conflict.revision });
        return;
      }
      replySave(requestId, { ok: true, revision: record.cloudRevision, save: record.save });
    };
    const runAdminRequest = async (payload, requestId) => {
      if (!userId || !isObject(payload) || !["gm_command", "admin_tab", "admin_mutation"].includes(payload.operation)) {
        replyAdmin(requestId, { ok: false, error: "ADMIN_REQUIRED" });
        return;
      }
      const capability = await revalidateAndEmitCapability();
      if (!active) return;
      if (!capability || !adminAllowed) {
        replyAdmin(requestId, { ok: false, error: "ADMIN_REQUIRED" });
        return;
      }
      if (payload.operation === "admin_tab") {
        const tabId = String(payload.tabId || "");
        if (!HARU_WORLD_ADMIN_TABS.some((tab) => tab.id === tabId)) {
          replyAdmin(requestId, { ok: false, error: "INVALID_ADMIN_TAB" });
          return;
        }
        const page = Number.isInteger(payload.page) ? payload.page : 0;
        const pageSize = Number.isInteger(payload.pageSize) ? payload.pageSize : 25;
        if (page < 0 || page > 1e4 || pageSize < 1 || pageSize > 50) {
          replyAdmin(requestId, { ok: false, tabId, error: "INVALID_ADMIN_PAGINATION" });
          return;
        }
        const generation = capabilityGeneration.current;
        try {
          const { data, error: rpcError } = await supabase.rpc("load_haru_world_admin_snapshot", {
            requested_tab_id: tabId,
            requested_page: page,
            requested_page_size: pageSize
          });
          if (!active) return;
          if (generation !== capabilityGeneration.current || !declaredAdminCapability.current || !adminAllowed) {
            replyAdmin(requestId, { ok: false, tabId, error: "ADMIN_REQUIRED" });
            return;
          }
          if (rpcError || !isObject(data) || data.ok !== true || data.tabId !== tabId || data.page !== page || data.pageSize !== pageSize || !Array.isArray(data.rows) || !isObject(data.summary)) {
            replyAdmin(requestId, { ok: false, tabId, error: "ADMIN_SNAPSHOT_REJECTED" });
            return;
          }
          replyAdmin(requestId, { ok: true, tabId, snapshot: data });
        } catch (e) {
          replyAdmin(requestId, { ok: false, tabId, error: "ADMIN_SNAPSHOT_UNAVAILABLE" });
        }
        return;
      }
      if (payload.operation === "admin_mutation") {
        const mutation = String(payload.mutation || "");
        const mutationPayload = payload.payload;
        const forbiddenPayloadKeys = /* @__PURE__ */ new Set(["save", "table", "query", "sql", "role", "raw"]);
        if (!ADMIN_MUTATIONS.has(mutation) || !isObject(mutationPayload) || Object.keys(mutationPayload).some((key) => forbiddenPayloadKeys.has(key))) {
          replyAdmin(requestId, { ok: false, error: "INVALID_ADMIN_MUTATION" });
          return;
        }
        const generation = capabilityGeneration.current;
        try {
          const { data, error: rpcError } = await supabase.rpc("apply_haru_world_admin_mutation", {
            requested_operation: mutation,
            requested_payload: mutationPayload
          });
          if (!active) return;
          if (generation !== capabilityGeneration.current || !declaredAdminCapability.current || !adminAllowed) {
            replyAdmin(requestId, { ok: false, error: "ADMIN_REQUIRED" });
            return;
          }
          if (rpcError || !isObject(data) || data.ok !== true || data.operation !== mutation || data.resultCode !== "APPLIED" || !("resourceId" in data) || !(data.resourceId === null || typeof data.resourceId === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(data.resourceId))) {
            replyAdmin(requestId, { ok: false, error: "ADMIN_MUTATION_REJECTED" });
            return;
          }
          replyAdmin(requestId, {
            ok: true,
            operation: data.operation,
            resourceId: data.resourceId,
            resultCode: data.resultCode
          });
        } catch (e) {
          replyAdmin(requestId, { ok: false, error: "ADMIN_MUTATION_UNAVAILABLE" });
        }
        return;
      }
      if ((record == null ? void 0 : record.conflict) || payload.expectedRevision !== (record == null ? void 0 : record.cloudRevision) || typeof payload.command !== "string" || !isObject(payload.payload)) {
        replyAdmin(requestId, { ok: false, error: "STALE_REVISION" });
        return;
      }
      try {
        const generation = capabilityGeneration.current;
        const authoritative = await applyHaruWorldGmCommand(record, userId, payload.command, payload.payload);
        if (!active) return;
        record = await writeHaruWorldRecord(db, owner, authoritative);
        if (generation !== capabilityGeneration.current || !declaredAdminCapability.current) {
          replyAdmin(requestId, { ok: false, error: "ADMIN_REQUIRED", revision: record.cloudRevision, save: record.save });
          return;
        }
        replyAdmin(requestId, { ok: true, revision: record.cloudRevision, save: record.save });
      } catch (e) {
        replyAdmin(requestId, { ok: false, error: "ADMIN_COMMAND_REJECTED" });
      }
    };
    const platformRequest = async (payload, requestId) => {
      var _a, _b, _c, _d, _e, _f;
      const operation = payload == null ? void 0 : payload.operation;
      try {
        if (operation === "request_fullscreen") {
          await ((_b = (_a = document.documentElement).requestFullscreen) == null ? void 0 : _b.call(_a));
        } else if (operation === "lock_landscape") {
          await ((_d = (_c = screen.orientation) == null ? void 0 : _c.lock) == null ? void 0 : _d.call(_c, "landscape"));
        } else if (operation === "tts") {
          const text = String(payload.text || "").slice(0, 500);
          if (!text || !globalThis.speechSynthesis) throw new Error("UNAVAILABLE");
          speechSynthesis.cancel();
          speechSynthesis.speak(new SpeechSynthesisUtterance(text));
        } else if (operation === "speech_recognition") {
          const language = payload.language === "ja-JP" ? "ja-JP" : null;
          const Recognition = globalThis.SpeechRecognition || globalThis.webkitSpeechRecognition;
          if (!language || !Recognition) throw new Error("UNAVAILABLE");
          const transcript = await new Promise((resolveTranscript, rejectTranscript) => {
            const recognition = new Recognition();
            let settled = false;
            const settle = (callback, value) => {
              if (settled) return;
              settled = true;
              callback(value);
            };
            recognition.lang = language;
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            recognition.continuous = false;
            recognition.onresult = (event) => {
              var _a2, _b2, _c2;
              const value = String(((_c2 = (_b2 = (_a2 = event == null ? void 0 : event.results) == null ? void 0 : _a2[0]) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.transcript) || "").trim();
              if (!value || value.length > 500) settle(rejectTranscript, new Error("INVALID_TRANSCRIPT"));
              else settle(resolveTranscript, value);
            };
            recognition.onerror = () => settle(rejectTranscript, new Error("SPEECH_RECOGNITION_FAILED"));
            recognition.onend = () => settle(rejectTranscript, new Error("SPEECH_RECOGNITION_ENDED"));
            try {
              recognition.start();
            } catch (error2) {
              settle(rejectTranscript, error2);
            }
          });
          post("platform_result", { ok: true, operation, transcript }, requestId);
          return;
        } else if (operation === "clipboard_write") {
          const text = String(payload.text || "").slice(0, 4096);
          if (!((_e = navigator.clipboard) == null ? void 0 : _e.writeText)) throw new Error("UNAVAILABLE");
          await navigator.clipboard.writeText(text);
        } else if (operation === "ai_request") {
          const feature = String(payload.feature || "");
          const prompt = String(payload.prompt || "").trim();
          if (!userId || !isSupabaseConfigured || !AI_FEATURE_IDS.has(feature) || !prompt || prompt.length > 2e3 || !((_f = supabase.functions) == null ? void 0 : _f.invoke)) {
            post("platform_result", { ok: false, operation, error: "AI_UNAVAILABLE" }, requestId);
            return;
          }
          const { data, error: aiError } = await supabase.functions.invoke("ai-proxy", {
            body: {
              messages: [
                { role: "system", content: `${WORLD_AI_SYSTEM_PROMPT}
${WORLD_AI_FEATURE_INSTRUCTIONS[feature] || ""}` },
                { role: "user", content: prompt }
              ],
              maxTokens: 700,
              temperature: 0.5
            }
          });
          const answer = typeof (data == null ? void 0 : data.text) === "string" ? data.text.trim().slice(0, 6e3) : "";
          if (aiError || !answer) {
            post("platform_result", { ok: false, operation, error: "AI_UNAVAILABLE" }, requestId);
            return;
          }
          post("platform_result", { ok: true, operation, text: answer }, requestId);
          return;
        } else {
          post("platform_result", { ok: false, error: "UNSUPPORTED_PLATFORM_REQUEST" }, requestId);
          return;
        }
        post("platform_result", { ok: true, operation }, requestId);
      } catch (e) {
        post("platform_result", { ok: false, error: "PLATFORM_REQUEST_FAILED" }, requestId);
      }
    };
    const receive = (event) => {
      var _a, _b, _c;
      if (event.source !== ((_a = frame.current) == null ? void 0 : _a.contentWindow) || event.origin !== location.origin) return;
      const parsed = parseHaruWorldEnvelope(event.data, { sessionId, types: FROM_WORLD });
      if (!parsed.ok) return;
      const { type, payload, requestId } = parsed.envelope;
      if (requestId) {
        if (requests.has(requestId)) {
          const reply = requests.get(requestId);
          if (reply) post(reply.type, reply.payload, requestId);
          return;
        }
        if (requests.size >= 4096) {
          report(new Error("Phiên Haru đã đạt giới hạn yêu cầu. Hãy tải lại để tiếp tục."));
          return;
        }
        requests.set(requestId, null);
      }
      if (type === "ready") {
        if (payload.phase === "bootstrapped") {
          if (!bootstrapSent || nativeReady) return;
          nativeReady = true;
          setReady(true);
          window.__HARU_WORLD_READY = true;
          (_b = events.current) == null ? void 0 : _b.call(events, { type: "world_ready" });
          window.dispatchEvent(new Event("haru-world-ready"));
          return;
        }
        gameReady = true;
        void bootstrap();
      } else if (type === "save_commit" && requestId) {
        void queue(() => persistWorldSave(payload, requestId));
      } else if (type === "admin_revalidate") {
        void queue(revalidateAndEmitCapability);
      } else if (type === "admin_request" && requestId) {
        void queue(() => runAdminRequest(payload, requestId));
      } else if (type === "platform_request" && requestId) {
        void queue(() => platformRequest(payload, requestId));
      } else if (type === "auth_request" && requestId) {
        void queue(async () => {
          try {
            if (payload.operation === "google_sign_in") await signInWithGoogle();
            else if (payload.operation === "sign_out") await signOut();
            else throw new Error("UNSUPPORTED_AUTH_REQUEST");
            post("platform_result", { ok: true, operation: payload.operation }, requestId);
          } catch (e) {
            post("platform_result", { ok: false, error: "AUTH_REQUEST_FAILED" }, requestId);
          }
        });
      } else if (type === "fatal_error") {
        report(new Error("Godot không thể tiếp tục phiên Haru World."));
      } else if (type === "telemetry") {
        (_c = events.current) == null ? void 0 : _c.call(events, { type, payload });
      }
    };
    const visibility = () => {
      send("realtime_event", { kind: "visibility", hidden: document.hidden });
      if (!document.hidden) void queue(revalidateAndEmitCapability);
    };
    const refreshCapability = () => {
      void queue(revalidateAndEmitCapability);
    };
    window.__HARU_WORLD_READY = false;
    window.addEventListener("message", receive);
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("haru-world-capability-refresh", refreshCapability);
    return () => {
      active = false;
      window.__HARU_WORLD_READY = false;
      window.removeEventListener("message", receive);
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("haru-world-capability-refresh", refreshCapability);
      sessionCleanup.current = Promise.allSettled([boot, lifecycleQueue]).then(() => {
        db == null ? void 0 : db.close();
        releaseSession == null ? void 0 : releaseSession();
      });
    };
  }, [send, sessionId, userId]);
  const retry = () => {
    setError("");
    setReady(false);
    setSessionId(freshRequestId("world"));
    setAttempt((value) => value + 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-godot-host", "aria-label": "Haru World", "data-world-state": ready ? "ready" : "loading", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { ref: frame, src: url.href, title: "Haru World", allow: "fullscreen; autoplay; gamepad; clipboard-read; clipboard-write; microphone" }, attempt),
    !ready && !error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-godot-overlay", role: "status", children: "Đang mở Haru World…" }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-godot-message", role: "alert", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: retry, children: "Thử tải lại" })
    ] })
  ] });
}
function useIsAdmin() {
  const { user } = useHaruWorldAuth();
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [refreshKey, setRefreshKey] = reactExports.useState(0);
  const refresh = reactExports.useCallback(() => setRefreshKey((value) => value + 1), []);
  reactExports.useEffect(() => {
    if (!isSupabaseConfigured || !(user == null ? void 0 : user.id)) {
      setIsAdmin(false);
      setLoading(false);
      setError(null);
      return void 0;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    (async () => {
      try {
        const { data, error: error2 } = await supabase.rpc("is_current_user_admin");
        if (error2) throw error2;
        if (!cancelled) {
          setIsAdmin(data === true);
        }
      } catch (reason) {
        if (!cancelled) {
          setIsAdmin(false);
          setError(String((reason == null ? void 0 : reason.message) || reason));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user == null ? void 0 : user.id, refreshKey]);
  reactExports.useEffect(() => {
    if (!(user == null ? void 0 : user.id) || typeof window === "undefined") return void 0;
    const revalidate = () => refresh();
    const onVisibilityChange = () => {
      if (!document.hidden) revalidate();
    };
    window.addEventListener("focus", revalidate);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.removeEventListener("focus", revalidate);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [user == null ? void 0 : user.id, refresh]);
  reactExports.useEffect(() => {
    if (!(user == null ? void 0 : user.id) || !isSupabaseConfigured || typeof supabase.channel !== "function") return void 0;
    const channel = supabase.channel(`haru-world-admin-capability:${user.id}`).on("postgres_changes", {
      event: "UPDATE",
      schema: "public",
      table: "user_private_profiles",
      filter: `user_id=eq.${user.id}`
    }, refresh).subscribe();
    return () => {
      var _a;
      if (typeof supabase.removeChannel === "function") supabase.removeChannel(channel);
      else (_a = channel == null ? void 0 : channel.unsubscribe) == null ? void 0 : _a.call(channel);
    };
  }, [refresh, user == null ? void 0 : user.id]);
  return { isAdmin, loading, error, refresh };
}
function requestedWorldSurface(location2) {
  const directSearch = typeof window === "undefined" ? "" : window.location.search;
  const query = new URLSearchParams(location2.search || directSearch);
  const activity = resolveHaruWorldActivity(query.get("activity"));
  return {
    activityId: (activity == null ? void 0 : activity.id) || null,
    panelId: query.get("panel") === "admin" ? "admin" : null
  };
}
function WorldExperience() {
  const location2 = useLocation();
  const navigate = useNavigate();
  const { ready, user } = useHaruWorldAuth();
  const { isAdmin, loading: adminLoading, error: adminError } = useIsAdmin();
  const requested = reactExports.useMemo(() => requestedWorldSurface(location2), [location2]);
  const redirect = reactExports.useMemo(() => {
    if (location2.pathname === "/" || location2.pathname === "/world") {
      return location2.pathname === "/world" ? `/${location2.search}` : null;
    }
    if (location2.pathname === "/admin") return "/?panel=admin";
    const activity = resolveHaruWorldLegacyActivity(location2.pathname + location2.search);
    return activity ? haruWorldActivityHref(activity.id, null, location2.pathname + location2.search) : "/";
  }, [location2.pathname, location2.search]);
  const adminCapability = reactExports.useMemo(() => ({
    verified: Boolean(user == null ? void 0 : user.id) && !adminLoading && !adminError,
    allowed: Boolean(user == null ? void 0 : user.id) && !adminLoading && !adminError && isAdmin
  }), [adminError, adminLoading, isAdmin, user == null ? void 0 : user.id]);
  reactExports.useEffect(() => {
    if (redirect) navigate(redirect, { replace: true });
  }, [navigate, redirect]);
  if (!ready) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "haru-boot", role: "status", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { lang: "ja", children: "春" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Đang kiểm tra tài khoản và mở Haru…" })
    ] });
  }
  if (redirect) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "haru-boot", role: "status", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { lang: "ja", children: "春" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Đang mở Haru World…" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "haru-experience haru-experience--immersive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    HaruWorldV1Host,
    {
      userId: (user == null ? void 0 : user.id) || null,
      adminCapability,
      initialActivityId: requested.activityId,
      initialPanelId: requested.panelId,
      onWorldEvent: () => {
      }
    }
  ) });
}
export {
  WorldExperience as default,
  requestedWorldSurface
};
