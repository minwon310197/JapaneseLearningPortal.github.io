import { v as supabase, aq as isSupabaseConfigured } from "./index-CcAX8r97.js";
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
export {
  HARU_WORLD_CONTENT_VERSION as H,
  acquireHaruWorldSession as a,
  pushHaruWorldCloud as b,
  writeHaruWorldRecord as c,
  applyHaruWorldGmCommand as d,
  loadHaruWorldRecord as l,
  openHaruWorldDatabase as o,
  pullHaruWorldCloud as p,
  readHaruWorldRecord as r,
  validateHaruWorldSave as v,
  worldOwner as w
};
