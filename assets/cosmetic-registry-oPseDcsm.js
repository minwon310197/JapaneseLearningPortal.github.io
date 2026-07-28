import { aj as getPowerUpMeta, ak as GACHA_PITY, al as SEASONS } from "./feature-3d-ClP3ARU5.js";
const RARITY_ORDER = ["common", "rare", "epic", "legendary"];
const UNLOCK_FALLBACK_VALUES = {
  common: 180,
  rare: 320,
  epic: 520,
  legendary: 900
};
const DUPLICATE_REFUND_RATES = {
  common: 0.72,
  rare: 0.58,
  epic: 0.5,
  legendary: 0.44
};
const DUPLICATE_MIN_COINS = {
  common: 45,
  rare: 140,
  epic: 300,
  legendary: 650
};
const DUPLICATE_BONUS_POWER_UP = {
  rare: "rerollToken",
  epic: "luckyCharm",
  legendary: "starFragment"
};
const DUPLICATE_CHAIN_BONUS = [0, 0.12, 0.22, 0.35];
const GACHA_UNLOCK_COIN_VALUES = {
  "sticker-torii": 80,
  "badge-explorer": 350,
  "textcolor-cherry": 300,
  "entrance-fade-slide": 200,
  "particle-sparkles": 600,
  "avatar-crane": 500,
  "badge-scholar": 450,
  "theme-neon-tokyo": 500,
  "entrance-glitch": 400,
  "particle-matrix": 1e3,
  "card-gold": 500,
  "effect-rainbow": 500,
  "textcolor-aurora": 450,
  "avatar-phoenix": 800,
  "badge-crown": 1e3,
  "theme-holographic": 800,
  "particle-cosmic-dust": 2e3,
  "textcolor-rainbow": 1e3,
  "card-hologram": 700,
  "frame-bamboo": 200,
  "frame-wave": 250,
  "frame-crane": 350,
  "frame-torii": 300,
  "frame-kintsugi": 1500,
  "aura-sakura": 600,
  "aura-ice": 600,
  "aura-rainbow": 1200,
  "aura-void": 1200,
  "banner-bamboo": 300,
  "charm-gokaku": 400,
  "charm-kinun": 1e3,
  "charm-renai": 1e3,
  "sfx-retro": 300,
  "emote-kawaii": 200
};
const BOX_PROFILE_CACHE = /* @__PURE__ */ new Map();
const BOX_POSITIONING = {
  bronze: { bestFor: "Tích vật phẩm", tone: "Hợp người mới" },
  silver: { bestFor: "Mở khóa đều", tone: "Cân bằng cày cuốc" },
  gold: { bestFor: "Toàn diện nhất", tone: "Ưu tiên giá trị" },
  diamond: { bestFor: "Săn sử thi", tone: "Biến động thấp" },
  mythic: { bestFor: "Săn huyền thoại", tone: "Trần thưởng cao" }
};
const BOX_PREVIEW_RARITIES = {
  bronze: ["rare", "common"],
  silver: ["epic", "rare", "common"],
  gold: ["legendary", "epic", "rare"],
  diamond: ["legendary", "epic", "rare"],
  mythic: ["legendary", "epic"]
};
const GACHA_BOXES = [
  {
    id: "bronze",
    name: "Hộp Đồng",
    icon: "🥉",
    price: 55,
    itemCount: 1,
    rates: { common: 72, rare: 22, epic: 6, legendary: 0 },
    accent: "#cd7f32",
    description: "Rẻ nhất, hợp để tích vật phẩm hỗ trợ và mở đầu bộ sưu tập."
  },
  {
    id: "silver",
    name: "Hộp Bạc",
    icon: "🥈",
    price: 150,
    itemCount: 2,
    rates: { common: 47, rare: 37, epic: 14, legendary: 2 },
    accent: "#cbd5e1",
    description: "Nhịp mở ổn định cho người muốn mở khóa đều mà chưa cần hộp cao cấp."
  },
  {
    id: "gold",
    name: "Hộp Vàng",
    icon: "🥇",
    price: 300,
    itemCount: 3,
    rates: { common: 22, rare: 40, epic: 28, legendary: 10 },
    accent: "#f59e0b",
    description: "Điểm ngọt về giá trị: đủ nhiều lượt, đủ chất lượng, hợp mở thường xuyên."
  },
  {
    id: "diamond",
    name: "Hộp Kim Cương",
    icon: "💎",
    price: 520,
    itemCount: 3,
    guaranteedMin: "epic",
    rates: { common: 0, rare: 24, epic: 53, legendary: 23 },
    accent: "#38bdf8",
    description: "Hộp kiểm soát độ lệch: giảm đồ yếu và luôn giữ nhịp Sử thi+."
  },
  {
    id: "mythic",
    name: "Hộp Thần Thoại",
    icon: "🌟",
    price: 1100,
    itemCount: 5,
    guaranteedMin: "legendary",
    rates: { common: 0, rare: 0, epic: 56, legendary: 44 },
    accent: "#c084fc",
    description: "Cờ săn huyền thoại: trần thưởng cao nhất và luôn có ít nhất một món Huyền thoại."
  }
];
const GACHA_POOL = {
  common: [
    { id: "gacha-hint-2", name: "Hint Pack x2", icon: "💡", type: "powerup", powerUpId: "hintPack", amount: 2 },
    { id: "gacha-hint-4", name: "Hint Pack x4", icon: "💡", type: "powerup", powerUpId: "hintPack", amount: 4 },
    { id: "gacha-xp-2", name: "XP Boost x2", icon: "⚡", type: "powerup", powerUpId: "xpBoost", amount: 2 },
    { id: "gacha-coins-40", name: "40 Coins", icon: "🪙", type: "coins", amount: 40 },
    { id: "gacha-coins-60", name: "60 Coins", icon: "🪙", type: "coins", amount: 60 },
    { id: "gacha-bonus-question-2", name: "Bonus Question x2", icon: "➕", type: "powerup", powerUpId: "bonusQuestion", amount: 2 },
    { id: "gacha-auto-hint-2", name: "Auto Hint x2", icon: "🔮", type: "powerup", powerUpId: "autoHint", amount: 2 },
    { id: "gacha-time-extend-2", name: "Time Extend x2", icon: "⏰", type: "powerup", powerUpId: "timeExtend", amount: 2 },
    { id: "gacha-skip-shield", name: "Skip Shield", icon: "🛡️", type: "powerup", powerUpId: "skipShield", amount: 1 },
    { id: "gacha-slow-motion", name: "Slow Motion", icon: "🐌", type: "powerup", powerUpId: "slowMotion", amount: 1 },
    { id: "gacha-combo-save", name: "Combo Saver", icon: "🔗", type: "powerup", powerUpId: "comboSaver", amount: 1 },
    { id: "gacha-reveal-one", name: "Reveal One", icon: "👁️", type: "powerup", powerUpId: "revealOne", amount: 1 }
  ],
  rare: [
    { id: "gacha-avatar-samurai", name: "Avatar: Samurai", icon: "⚔️", type: "unlock", unlockKey: "gacha-avatar-samurai" },
    { id: "gacha-avatar-geisha", name: "Avatar: Geisha", icon: "👘", type: "unlock", unlockKey: "gacha-avatar-geisha" },
    { id: "gacha-avatar-shinobi", name: "Avatar: Shinobi", icon: "🌀", type: "unlock", unlockKey: "gacha-avatar-shinobi" },
    { id: "gacha-card-sakura", name: "Card: Sakura", icon: "🌸", type: "unlock", unlockKey: "gacha-card-sakura" },
    { id: "gacha-card-wave", name: "Card: Great Wave", icon: "🌊", type: "unlock", unlockKey: "gacha-card-wave" },
    { id: "gacha-badge-explorer", name: "Badge: Explorer", icon: "🧭", type: "unlock", unlockKey: "badge-explorer" },
    { id: "gacha-sticker-torii", name: "Sticker: Torii", icon: "⛩️", type: "unlock", unlockKey: "sticker-torii" },
    { id: "gacha-textcolor-cherry", name: "Text: Cherry Blossom", icon: "🌸", type: "unlock", unlockKey: "textcolor-cherry" },
    { id: "gacha-entrance-fade-slide", name: "Entrance: Fade Slide", icon: "✨", type: "unlock", unlockKey: "entrance-fade-slide" },
    { id: "gacha-particle-sparkles", name: "Particle: Sparkles", icon: "💫", type: "unlock", unlockKey: "particle-sparkles" },
    { id: "gacha-coins-120", name: "120 Coins", icon: "🪙", type: "coins", amount: 120 },
    { id: "gacha-streak-2", name: "Streak Freeze x2", icon: "🧊", type: "powerup", powerUpId: "streakFreeze", amount: 2 },
    { id: "gacha-time-extend-3", name: "Time Extend x3", icon: "⏰", type: "powerup", powerUpId: "timeExtend", amount: 3 },
    { id: "gacha-coin-magnet", name: "Coin Magnet", icon: "🧲", type: "powerup", powerUpId: "coinMagnet", amount: 1 },
    { id: "gacha-reroll-token-2", name: "Reroll Token x2", icon: "🔄", type: "powerup", powerUpId: "rerollToken", amount: 2 },
    { id: "gacha-focus-lens", name: "Focus Lens", icon: "🔍", type: "powerup", powerUpId: "focusLens", amount: 1 },
    { id: "gacha-memory-ink", name: "Memory Ink", icon: "🖊️", type: "powerup", powerUpId: "memoryInk", amount: 1 },
    { id: "gacha-lucky-charm", name: "Lucky Charm", icon: "🍀", type: "powerup", powerUpId: "luckyCharm", amount: 1 },
    { id: "gacha-frame-bamboo", name: "Frame: Trúc", icon: "🎋", type: "unlock", unlockKey: "frame-bamboo" },
    { id: "gacha-frame-wave", name: "Frame: Sóng", icon: "🌊", type: "unlock", unlockKey: "frame-wave" }
  ],
  epic: [
    { id: "gacha-avatar-tengu", name: "Avatar: Tengu", icon: "👺", type: "unlock", unlockKey: "gacha-avatar-tengu" },
    { id: "gacha-avatar-yokai", name: "Avatar: Yokai", icon: "👻", type: "unlock", unlockKey: "gacha-avatar-yokai" },
    { id: "gacha-effect-fire", name: "Effect: Sacred Fire", icon: "🔥", type: "unlock", unlockKey: "gacha-effect-fire" },
    { id: "gacha-effect-dragon", name: "Effect: Dragon Aura", icon: "🐉", type: "unlock", unlockKey: "gacha-effect-dragon" },
    { id: "gacha-card-dragon", name: "Card: Dragon Scale", icon: "🐲", type: "unlock", unlockKey: "gacha-card-dragon" },
    { id: "gacha-title-warrior", name: "Title: 戦士", icon: "⚔️", type: "unlock", unlockKey: "gacha-title-warrior" },
    { id: "gacha-avatar-crane", name: "Avatar: Tsuru", icon: "🦢", type: "unlock", unlockKey: "avatar-crane" },
    { id: "gacha-badge-scholar", name: "Badge: Scholar", icon: "📚", type: "unlock", unlockKey: "badge-scholar" },
    { id: "gacha-theme-neon-tokyo", name: "Theme: Neon Tokyo", icon: "🌃", type: "unlock", unlockKey: "theme-neon-tokyo" },
    { id: "gacha-entrance-glitch", name: "Entrance: Glitch", icon: "🧩", type: "unlock", unlockKey: "entrance-glitch" },
    { id: "gacha-particle-matrix", name: "Particle: Matrix Rain", icon: "💾", type: "unlock", unlockKey: "particle-matrix" },
    { id: "gacha-card-gold", name: "Card: Gold", icon: "🏅", type: "unlock", unlockKey: "card-gold" },
    { id: "gacha-effect-rainbow", name: "Effect: Rainbow", icon: "🌈", type: "unlock", unlockKey: "effect-rainbow" },
    { id: "gacha-textcolor-aurora", name: "Text: Aurora Shimmer", icon: "🌌", type: "unlock", unlockKey: "textcolor-aurora" },
    { id: "gacha-coins-280", name: "280 Coins", icon: "💰", type: "coins", amount: 280 },
    { id: "gacha-wisdom-scroll", name: "Wisdom Scroll", icon: "📜", type: "powerup", powerUpId: "wisdomScroll", amount: 1 },
    { id: "gacha-phoenix-feather", name: "Phoenix Feather", icon: "🪶", type: "powerup", powerUpId: "phoenixFeather", amount: 1 },
    { id: "gacha-time-crystal", name: "Time Crystal", icon: "💠", type: "powerup", powerUpId: "timeCrystal", amount: 1 },
    { id: "gacha-gacha-luck", name: "Gacha Luck Up", icon: "🍀", type: "powerup", powerUpId: "gachaLuck", amount: 1 },
    { id: "gacha-jackpot", name: "Jackpot", icon: "🎰", type: "powerup", powerUpId: "jackpot", amount: 1 },
    { id: "gacha-frame-crane", name: "Frame: Hạc Giấy", icon: "🕊️", type: "unlock", unlockKey: "frame-crane" },
    { id: "gacha-frame-torii", name: "Frame: Torii", icon: "⛩️", type: "unlock", unlockKey: "frame-torii" },
    { id: "gacha-aura-sakura", name: "Aura: Hoa Đào", icon: "🌸", type: "unlock", unlockKey: "aura-sakura" },
    { id: "gacha-aura-ice", name: "Aura: Băng Giá", icon: "❄️", type: "unlock", unlockKey: "aura-ice" },
    { id: "gacha-banner-bamboo", name: "Banner: Trúc", icon: "🎋", type: "unlock", unlockKey: "banner-bamboo" },
    { id: "gacha-charm-gokaku", name: "Omamori: Hợp Cách", icon: "🎯", type: "unlock", unlockKey: "charm-gokaku" }
  ],
  legendary: [
    { id: "gacha-avatar-amaterasu", name: "Avatar: Amaterasu", icon: "☀️", type: "unlock", unlockKey: "gacha-avatar-amaterasu" },
    { id: "gacha-avatar-susanoo", name: "Avatar: Susanoo", icon: "⚡", type: "unlock", unlockKey: "gacha-avatar-susanoo" },
    { id: "gacha-effect-celestial", name: "Effect: Celestial", icon: "✨", type: "unlock", unlockKey: "gacha-effect-celestial" },
    { id: "gacha-card-imperial", name: "Card: Imperial Gold", icon: "👑", type: "unlock", unlockKey: "gacha-card-imperial" },
    { id: "gacha-title-legend", name: "Title: 伝説", icon: "🏆", type: "unlock", unlockKey: "gacha-title-legend" },
    { id: "gacha-avatar-phoenix", name: "Avatar: Hō-ō", icon: "🔥", type: "unlock", unlockKey: "avatar-phoenix" },
    { id: "gacha-badge-crown", name: "Badge: Crown", icon: "👑", type: "unlock", unlockKey: "badge-crown" },
    { id: "gacha-theme-holographic", name: "Theme: Holographic", icon: "🔮", type: "unlock", unlockKey: "theme-holographic" },
    { id: "gacha-particle-cosmic-dust", name: "Particle: Cosmic Dust", icon: "🪐", type: "unlock", unlockKey: "particle-cosmic-dust" },
    { id: "gacha-textcolor-rainbow", name: "Text: Rainbow Shift", icon: "🌈", type: "unlock", unlockKey: "textcolor-rainbow" },
    { id: "gacha-effect-meteor-shower", name: "Effect: Meteor Shower", icon: "☄️", type: "unlock", unlockKey: "effect-meteor-shower" },
    { id: "gacha-card-hologram", name: "Card: Hologram", icon: "🔮", type: "unlock", unlockKey: "card-hologram" },
    { id: "gacha-avatar-celestial-fox", name: "Avatar: Celestial Fox", icon: "🦊", type: "unlock", unlockKey: "avatar-celestial-fox" },
    { id: "gacha-coins-600", name: "600 Coins", icon: "💰", type: "coins", amount: 600 },
    { id: "gacha-star-fragment", name: "Star Fragment", icon: "⭐", type: "powerup", powerUpId: "starFragment", amount: 1 },
    { id: "gacha-titan-shield", name: "Titan Shield", icon: "🏛️", type: "powerup", powerUpId: "titanShield", amount: 1 },
    { id: "gacha-rainbow-orb-2", name: "Rainbow Orb x2", icon: "🌈", type: "powerup", powerUpId: "rainbowOrb", amount: 2 },
    { id: "gacha-frame-kintsugi", name: "Frame: Kintsugi", icon: "✨", type: "unlock", unlockKey: "frame-kintsugi" },
    { id: "gacha-aura-rainbow", name: "Aura: Cầu Vồng", icon: "🌈", type: "unlock", unlockKey: "aura-rainbow" },
    { id: "gacha-aura-void", name: "Aura: Hư Không", icon: "🌑", type: "unlock", unlockKey: "aura-void" },
    { id: "gacha-charm-kinun", name: "Omamori: Kim Vận", icon: "🪙", type: "unlock", unlockKey: "charm-kinun" },
    { id: "gacha-charm-renai", name: "Omamori: Luyến Ái", icon: "💝", type: "unlock", unlockKey: "charm-renai" }
  ]
};
function rollGachaBox(box, {
  pity = { epic: 0, legendary: 0 },
  seasonalBonus = null,
  powerUps = null,
  ownedUnlocks = {},
  pool = GACHA_POOL,
  rng = Math.random,
  charmGachaBonus = 0
} = {}) {
  const safeBox = box || GACHA_BOXES[0];
  const adjustedRates = getAdjustedRates(safeBox.rates || {}, seasonalBonus, powerUps, charmGachaBonus);
  const rarityPlan = buildRarityPlan(safeBox, adjustedRates, pity, rng);
  const ownedSet = normalizeOwnedUnlocks(ownedUnlocks);
  const seenIds = /* @__PURE__ */ new Set();
  let duplicateUnlocksInPull = 0;
  const items = rarityPlan.rarities.map((rarity) => {
    const picked = pickRandomFromPool(rarity, { pool, ownedUnlocks: ownedSet, seenIds, rng });
    const reward = toRewardPayload(picked);
    const baseValue = getRewardCoinValue(picked, rarity);
    const result = {
      ...picked,
      rarity,
      baseValue,
      rewardValue: baseValue,
      isDuplicate: false,
      isNew: false,
      grantedRewards: [reward],
      compensation: null
    };
    if (picked.type === "unlock") {
      if (ownedSet.has(picked.unlockKey)) {
        result.isDuplicate = true;
        result.compensation = buildDuplicateCompensation(picked, rarity, {
          duplicateIndex: duplicateUnlocksInPull
        });
        result.grantedRewards = result.compensation.rewards;
        result.rewardValue = result.compensation.rewardValue;
        duplicateUnlocksInPull += 1;
      } else {
        ownedSet.add(picked.unlockKey);
        result.isNew = true;
      }
    }
    seenIds.add(picked.id);
    return result;
  });
  return {
    items,
    nextPity: rarityPlan.nextPity,
    adjustedRates,
    summary: summarizeGachaPull(items)
  };
}
function summarizeGachaPull(items = []) {
  return items.reduce((summary, item) => {
    const rarity = (item == null ? void 0 : item.rarity) || "common";
    summary.rarityCounts[rarity] = (summary.rarityCounts[rarity] || 0) + 1;
    if (item == null ? void 0 : item.isNew) summary.newUnlocks += 1;
    if (item == null ? void 0 : item.isDuplicate) summary.duplicates += 1;
    summary.totalValue += Math.max(
      0,
      Number(item == null ? void 0 : item.rewardValue) || calculateGrantedRewardsValue((item == null ? void 0 : item.grantedRewards) || [], rarity)
    );
    for (const reward of (item == null ? void 0 : item.grantedRewards) || []) {
      if (!reward) continue;
      if (reward.type === "coins") {
        summary.totalCoins += reward.amount || 0;
      } else if (reward.type === "powerup") {
        summary.totalPowerUps += reward.amount || 0;
      } else if (reward.type === "unlock") {
        summary.totalUnlocks += 1;
      }
    }
    return summary;
  }, {
    newUnlocks: 0,
    duplicates: 0,
    totalCoins: 0,
    totalPowerUps: 0,
    totalUnlocks: 0,
    totalValue: 0,
    rarityCounts: { common: 0, rare: 0, epic: 0, legendary: 0 }
  });
}
function getFeaturedItemsForBox(boxId, limit = 6, pool = GACHA_POOL) {
  const box = getBoxById(boxId);
  if (!box) return [];
  const order = BOX_PREVIEW_RARITIES[box.id] || ["legendary", "epic", "rare", "common"];
  const featured = [];
  const seen = /* @__PURE__ */ new Set();
  for (const rarity of order) {
    const rarityPool = pool[rarity] || [];
    const ranked = [
      ...rarityPool.filter((item) => item.type === "unlock"),
      ...rarityPool.filter((item) => item.type !== "unlock")
    ];
    for (const item of ranked) {
      if (seen.has(item.id)) continue;
      seen.add(item.id);
      featured.push({ ...item, rarity });
      if (featured.length >= limit) return featured;
    }
  }
  return featured;
}
function getBoxById(id) {
  return GACHA_BOXES.find((box) => box.id === id) || null;
}
function getBoxRewardProfile(boxId, pool = GACHA_POOL) {
  const box = typeof boxId === "string" ? getBoxById(boxId) : boxId;
  if (!box) return null;
  if (pool === GACHA_POOL && BOX_PROFILE_CACHE.has(box.id)) {
    return BOX_PROFILE_CACHE.get(box.id);
  }
  const rarityWeights = getApproxRarityWeights(box);
  const expectedPerItem = RARITY_ORDER.reduce(
    (sum, rarity) => sum + rarityWeights[rarity] * getAverageRarityValue(rarity, pool),
    0
  );
  const unlockWeights = getUnlockRarityWeights(rarityWeights, pool);
  const averageUnlockValue = RARITY_ORDER.reduce(
    (sum, rarity) => sum + unlockWeights[rarity] * getAverageUnlockValue(rarity, pool),
    0
  );
  const duplicatePayout = RARITY_ORDER.reduce(
    (sum, rarity) => sum + unlockWeights[rarity] * getAverageDuplicateValue(rarity, pool),
    0
  );
  const expectedValue = roundValue(expectedPerItem * (box.itemCount || 1));
  const efficiency = (box == null ? void 0 : box.price) ? Number((expectedValue / box.price).toFixed(2)) : 0;
  const duplicateRetention = averageUnlockValue > 0 ? Number((duplicatePayout / averageUnlockValue).toFixed(2)) : 0;
  const positioning = BOX_POSITIONING[box.id] || { bestFor: "Đẩy bộ sưu tập", tone: "Trộn thưởng linh hoạt" };
  const profile = {
    expectedValue,
    efficiency,
    duplicateValue: roundValue(duplicatePayout),
    duplicateRetention,
    averageUnlockValue: roundValue(averageUnlockValue),
    epicPlusChance: estimateBoxRarityChance(box, "epic"),
    legendaryChance: estimateBoxRarityChance(box, "legendary"),
    bestHitValue: roundValue(getBestHitValue(box, pool)),
    rarityWeights,
    ...positioning
  };
  if (pool === GACHA_POOL) {
    BOX_PROFILE_CACHE.set(box.id, profile);
  }
  return profile;
}
function buildRarityPlan(box, adjustedRates, pity, rng) {
  const rarities = [];
  let nextPity = { ...pity };
  const totalItems = Math.max(1, Number(box == null ? void 0 : box.itemCount) || 1);
  for (let index = 0; index < totalItems; index += 1) {
    const rarity = rollRarity(adjustedRates, nextPity, rng);
    rarities.push(rarity);
    nextPity = updatePity(nextPity, rarity);
  }
  if (box == null ? void 0 : box.guaranteedMin) {
    const floorIndex = getRarityIndex(box.guaranteedMin);
    const alreadyMet = rarities.some((rarity) => getRarityIndex(rarity) >= floorIndex);
    if (!alreadyMet) {
      let weakestIndex = 0;
      for (let index = 1; index < rarities.length; index += 1) {
        if (getRarityIndex(rarities[index]) < getRarityIndex(rarities[weakestIndex])) {
          weakestIndex = index;
        }
      }
      rarities[weakestIndex] = weightedRarityFromFloor(box.guaranteedMin, adjustedRates, rng);
      nextPity = calculateNextPity(pity, rarities);
    }
  }
  return { rarities, nextPity };
}
function getAdjustedRates(rates, seasonalBonus, powerUps, charmGachaBonus = 0) {
  const adjusted = {
    common: Number(rates == null ? void 0 : rates.common) || 0,
    rare: Number(rates == null ? void 0 : rates.rare) || 0,
    epic: Number(rates == null ? void 0 : rates.epic) || 0,
    legendary: Number(rates == null ? void 0 : rates.legendary) || 0
  };
  if (charmGachaBonus > 0) {
    const boost = charmGachaBonus / 100;
    boostNonCommonRates(adjusted, { rare: boost, epic: boost, legendary: boost }, 1);
  }
  if (((powerUps == null ? void 0 : powerUps.luckyCharm) || 0) > 0) {
    const stacks = Math.min(powerUps.luckyCharm, 3);
    boostNonCommonRates(adjusted, { rare: 0.12, epic: 0.12, legendary: 0.12 }, stacks);
  }
  if (((powerUps == null ? void 0 : powerUps.jackpot) || 0) > 0) {
    const stacks = Math.min(powerUps.jackpot, 3);
    adjusted.legendary = Math.min(55, adjusted.legendary + stacks * 6);
    adjusted.common = Math.max(0, adjusted.common - stacks * 6);
  }
  if (((powerUps == null ? void 0 : powerUps.gachaLuck) || 0) > 0) {
    const stacks = Math.min(powerUps.gachaLuck, 3);
    boostNonCommonRates(adjusted, { rare: 0.1, epic: 0.08, legendary: 0.04 }, stacks);
  }
  if (seasonalBonus == null ? void 0 : seasonalBonus.gachaRare) {
    boostNonCommonRates(adjusted, {
      rare: seasonalBonus.gachaRare / 100,
      epic: seasonalBonus.gachaRare / 100,
      legendary: seasonalBonus.gachaRare / 100
    }, 1);
  }
  return adjusted;
}
function boostNonCommonRates(rates, boostMap, stacks) {
  if (!stacks) return;
  const before = {
    rare: rates.rare,
    epic: rates.epic,
    legendary: rates.legendary
  };
  rates.rare = Math.round(rates.rare * (1 + (boostMap.rare || 0) * stacks));
  rates.epic = Math.round(rates.epic * (1 + (boostMap.epic || 0) * stacks));
  rates.legendary = Math.round(rates.legendary * (1 + (boostMap.legendary || 0) * stacks));
  const extra = rates.rare - before.rare + (rates.epic - before.epic) + (rates.legendary - before.legendary);
  rates.common = Math.max(0, rates.common - extra);
}
function rollRarity(adjustedRates, pity, rng) {
  if (((pity == null ? void 0 : pity.legendary) || 0) >= GACHA_PITY.legendaryGuarantee) {
    return "legendary";
  }
  if (((pity == null ? void 0 : pity.epic) || 0) >= GACHA_PITY.epicGuarantee) {
    return weightedRarityFromFloor("epic", adjustedRates, rng);
  }
  return weightedRarityFromFloor("common", adjustedRates, rng);
}
function weightedRarityFromFloor(minRarity, adjustedRates, rng) {
  const floorIndex = getRarityIndex(minRarity);
  const allowed = RARITY_ORDER.slice(Math.max(0, floorIndex));
  const total = allowed.reduce((sum, rarity) => sum + Math.max(0, adjustedRates[rarity] || 0), 0);
  if (!total) return allowed[0] || "common";
  let roll = rng() * total;
  for (const rarity of allowed) {
    const weight = Math.max(0, adjustedRates[rarity] || 0);
    if (!weight) continue;
    roll -= weight;
    if (roll < 0 || Math.abs(roll) < 1e-12) return rarity;
  }
  return allowed[allowed.length - 1] || "common";
}
function pickRandomFromPool(rarity, { pool, ownedUnlocks, seenIds, rng }) {
  const rarityPool = pool[rarity] || pool.common || [];
  if (!rarityPool.length) return { id: "fallback-coins", name: "25 xu", icon: "🪙", type: "coins", amount: 25 };
  const freshCandidates = rarityPool.filter((item) => !seenIds.has(item.id));
  const baseCandidates = freshCandidates.length ? freshCandidates : rarityPool;
  const preferred = baseCandidates.filter((item) => item.type !== "unlock" || !ownedUnlocks.has(item.unlockKey));
  const candidates = preferred.length ? preferred : baseCandidates;
  const picked = candidates[Math.floor(rng() * candidates.length)] || candidates[0];
  return { ...picked };
}
function buildDuplicateCompensation(item, rarity, { duplicateIndex = 0 } = {}) {
  const safeRarity = rarity || "common";
  const baseValue = getRewardCoinValue(item, safeRarity);
  const chainBonus = getDuplicateChainBonus(duplicateIndex);
  const coinAmount = roundValue(Math.max(
    DUPLICATE_MIN_COINS[safeRarity] || DUPLICATE_MIN_COINS.common,
    baseValue * (DUPLICATE_REFUND_RATES[safeRarity] || DUPLICATE_REFUND_RATES.common) * (1 + chainBonus)
  ));
  const rewards = [buildCoinReward(coinAmount)];
  const bonusPowerUp = DUPLICATE_BONUS_POWER_UP[safeRarity];
  if (bonusPowerUp) {
    rewards.push(buildPowerUpReward(bonusPowerUp, 1));
  }
  const rewardValue = calculateGrantedRewardsValue(rewards, safeRarity);
  const retainedPct = Math.round(rewardValue / Math.max(1, baseValue) * 100);
  const chainLabel = chainBonus > 0 ? ` • bù chuỗi +${Math.round(chainBonus * 100)}%` : "";
  return {
    label: `Bồi hoàn trùng • giữ lại ${retainedPct}%${chainLabel}`,
    baseValue,
    rewardValue,
    duplicateIndex,
    rewards
  };
}
function getRewardCoinValue(item, rarity = item == null ? void 0 : item.rarity) {
  if (!item) return 0;
  if (item.type === "coins") {
    return Math.max(0, Number(item.amount) || 0);
  }
  if (item.type === "powerup") {
    const meta = getPowerUpMeta(item.powerUpId);
    const amount = Math.max(1, Number(item.amount) || 1);
    return Math.max(0, Number(meta.coinValue) || 0) * amount;
  }
  if (item.type === "unlock") {
    return Math.max(
      0,
      Number(item.coinValue) || Number(GACHA_UNLOCK_COIN_VALUES[item.unlockKey]) || Number(UNLOCK_FALLBACK_VALUES[rarity || "common"]) || UNLOCK_FALLBACK_VALUES.common
    );
  }
  return 0;
}
function calculateGrantedRewardsValue(rewards = [], rarity = "common") {
  return rewards.reduce((sum, reward) => sum + getRewardCoinValue(reward, rarity), 0);
}
function getDuplicateChainBonus(duplicateIndex) {
  const safeIndex = Math.max(0, Number(duplicateIndex) || 0);
  return DUPLICATE_CHAIN_BONUS[Math.min(safeIndex, DUPLICATE_CHAIN_BONUS.length - 1)] || 0;
}
function normalizeOwnedUnlocks(ownedUnlocks) {
  if (ownedUnlocks instanceof Set) return new Set(ownedUnlocks);
  return new Set(Object.keys(ownedUnlocks || {}).filter(Boolean));
}
function updatePity(currentPity, rarity) {
  return {
    epic: rarity === "epic" || rarity === "legendary" ? 0 : ((currentPity == null ? void 0 : currentPity.epic) || 0) + 1,
    legendary: rarity === "legendary" ? 0 : ((currentPity == null ? void 0 : currentPity.legendary) || 0) + 1
  };
}
function calculateNextPity(startPity, rarities) {
  let pity = { ...startPity };
  for (const rarity of rarities) {
    pity = updatePity(pity, rarity);
  }
  return pity;
}
function toRewardPayload(item) {
  if (item.type === "coins") {
    return buildCoinReward(item.amount || 0, item.name, item.icon);
  }
  if (item.type === "powerup") {
    return buildPowerUpReward(item.powerUpId, item.amount || 1, item.name, item.icon);
  }
  if (item.type === "unlock") {
    return {
      type: "unlock",
      unlockKey: item.unlockKey,
      icon: item.icon || "🎁",
      name: getCosmeticName(item.unlockKey) || item.name || item.unlockKey
    };
  }
  return { type: item.type || "unknown", ...item };
}
function buildCoinReward(amount, name, icon) {
  const total = Math.max(0, Number(amount) || 0);
  return {
    type: "coins",
    amount: total,
    icon: icon || (total >= 250 ? "💰" : "🪙"),
    name: name || `${total.toLocaleString("vi-VN")} xu`
  };
}
function buildPowerUpReward(powerUpId, amount = 1, name, icon) {
  const meta = getPowerUpMeta(powerUpId);
  const count = Math.max(1, Number(amount) || 1);
  return {
    type: "powerup",
    powerUpId,
    amount: count,
    icon: icon || meta.icon,
    name: name || `${meta.name}${count > 1 ? ` x${count}` : ""}`
  };
}
function getApproxRarityWeights(box) {
  const normalizedRates = normalizeRateMap(box == null ? void 0 : box.rates);
  const totalItems = Math.max(1, Number(box == null ? void 0 : box.itemCount) || 1);
  if (!(box == null ? void 0 : box.guaranteedMin)) return normalizedRates;
  const floorIndex = getRarityIndex(box.guaranteedMin);
  const floorRarities = RARITY_ORDER.filter((rarity) => getRarityIndex(rarity) >= floorIndex);
  const belowRarities = RARITY_ORDER.filter((rarity) => getRarityIndex(rarity) < floorIndex);
  const belowChance = belowRarities.reduce((sum, rarity) => sum + normalizedRates[rarity], 0);
  if (belowChance <= 0 || !floorRarities.length) return normalizedRates;
  const floorWeights = normalizeSubsetWeights(floorRarities, normalizedRates, box.guaranteedMin);
  const belowWeights = normalizeSubsetWeights(belowRarities, normalizedRates, belowRarities[0] || "common");
  const noneMeetChance = Math.pow(belowChance, totalItems);
  const expectedCounts = Object.fromEntries(
    RARITY_ORDER.map((rarity) => [rarity, normalizedRates[rarity] * totalItems])
  );
  for (const rarity of belowRarities) {
    expectedCounts[rarity] -= noneMeetChance * (belowWeights[rarity] || 0);
  }
  for (const rarity of floorRarities) {
    expectedCounts[rarity] += noneMeetChance * (floorWeights[rarity] || 0);
  }
  return normalizeRateMap(expectedCounts);
}
function normalizeRateMap(rates) {
  const normalized = {
    common: Math.max(0, Number(rates == null ? void 0 : rates.common) || 0),
    rare: Math.max(0, Number(rates == null ? void 0 : rates.rare) || 0),
    epic: Math.max(0, Number(rates == null ? void 0 : rates.epic) || 0),
    legendary: Math.max(0, Number(rates == null ? void 0 : rates.legendary) || 0)
  };
  const total = Object.values(normalized).reduce((sum, value) => sum + value, 0);
  if (!total) return { common: 1, rare: 0, epic: 0, legendary: 0 };
  for (const rarity of RARITY_ORDER) {
    normalized[rarity] /= total;
  }
  return normalized;
}
function normalizeSubsetWeights(rarities, source, fallbackRarity) {
  const normalized = Object.fromEntries(RARITY_ORDER.map((rarity) => [rarity, 0]));
  const total = rarities.reduce((sum, rarity) => sum + Math.max(0, Number(source == null ? void 0 : source[rarity]) || 0), 0);
  if (!rarities.length) return normalized;
  if (!total) {
    normalized[fallbackRarity || rarities[0]] = 1;
    return normalized;
  }
  for (const rarity of rarities) {
    normalized[rarity] = Math.max(0, Number(source == null ? void 0 : source[rarity]) || 0) / total;
  }
  return normalized;
}
function getAverageRarityValue(rarity, pool) {
  const items = (pool == null ? void 0 : pool[rarity]) || [];
  if (!items.length) return 0;
  return items.reduce((sum, item) => sum + getRewardCoinValue(item, rarity), 0) / items.length;
}
function getAverageUnlockValue(rarity, pool) {
  const unlocks = ((pool == null ? void 0 : pool[rarity]) || []).filter((item) => item.type === "unlock");
  if (!unlocks.length) return 0;
  return unlocks.reduce((sum, item) => sum + getRewardCoinValue(item, rarity), 0) / unlocks.length;
}
function getAverageDuplicateValue(rarity, pool) {
  const unlocks = ((pool == null ? void 0 : pool[rarity]) || []).filter((item) => item.type === "unlock");
  if (!unlocks.length) return 0;
  return unlocks.reduce(
    (sum, item) => sum + buildDuplicateCompensation(item, rarity, { duplicateIndex: 0 }).rewardValue,
    0
  ) / unlocks.length;
}
function getUnlockRarityWeights(rarityWeights, pool) {
  const weighted = Object.fromEntries(RARITY_ORDER.map((rarity) => {
    const unlockCount = ((pool == null ? void 0 : pool[rarity]) || []).filter((item) => item.type === "unlock").length;
    return [rarity, unlockCount > 0 ? rarityWeights[rarity] : 0];
  }));
  return normalizeSubsetWeights(
    RARITY_ORDER.filter((rarity) => weighted[rarity] > 0),
    weighted,
    RARITY_ORDER.find((rarity) => weighted[rarity] > 0) || "rare"
  );
}
function estimateBoxRarityChance(box, rarity) {
  const targetIndex = getRarityIndex(rarity);
  if ((box == null ? void 0 : box.guaranteedMin) && getRarityIndex(box.guaranteedMin) >= targetIndex) {
    return 1;
  }
  const normalizedRates = normalizeRateMap(box == null ? void 0 : box.rates);
  const perItemChance = RARITY_ORDER.filter((candidate) => getRarityIndex(candidate) >= targetIndex).reduce((sum, candidate) => sum + normalizedRates[candidate], 0);
  if (perItemChance <= 0) return 0;
  const totalItems = Math.max(1, Number(box == null ? void 0 : box.itemCount) || 1);
  return Number((1 - Math.pow(1 - perItemChance, totalItems)).toFixed(2));
}
function getBestHitValue(box, pool) {
  var _a;
  const floorIndex = (box == null ? void 0 : box.guaranteedMin) ? getRarityIndex(box.guaranteedMin) : 0;
  const guaranteedFallbackOnly = (box == null ? void 0 : box.guaranteedMin) && RARITY_ORDER.filter((rarity) => getRarityIndex(rarity) >= floorIndex).every((rarity) => {
    var _a2;
    return (Number((_a2 = box == null ? void 0 : box.rates) == null ? void 0 : _a2[rarity]) || 0) <= 0;
  });
  let best = 0;
  for (const rarity of RARITY_ORDER) {
    const hasBaseRate = Number((_a = box == null ? void 0 : box.rates) == null ? void 0 : _a[rarity]) > 0;
    const unlockableByFloorFallback = guaranteedFallbackOnly && rarity === (box == null ? void 0 : box.guaranteedMin);
    if (!hasBaseRate && !unlockableByFloorFallback) continue;
    for (const item of (pool == null ? void 0 : pool[rarity]) || []) {
      best = Math.max(best, getRewardCoinValue(item, rarity));
    }
  }
  return best;
}
function roundValue(value) {
  const safe = Math.max(0, Number(value) || 0);
  if (safe < 100) return Math.round(safe / 5) * 5;
  if (safe < 500) return Math.round(safe / 10) * 10;
  return Math.round(safe / 25) * 25;
}
function getRarityIndex(rarity) {
  return Math.max(0, RARITY_ORDER.indexOf(rarity));
}
const SHOP_ITEMS = [
  // ── Consumables ──
  { id: "hintPack", name: "Gói Gợi Ý", icon: "💡", price: 60, type: "consumable", powerUpId: "hintPack", rarity: "common", desc: "Thêm 1 gợi ý cho quiz. Dùng khi bí câu trả lời." },
  { id: "xpBoost", name: "Tăng Điểm Kinh Nghiệm", icon: "⚡", price: 80, type: "consumable", powerUpId: "xpBoost", rarity: "common", desc: "Tăng gấp đôi XP cho một phiên học tiếp theo." },
  { id: "streakFreeze", name: "Đóng Băng Chuỗi", icon: "🧊", price: 100, type: "consumable", powerUpId: "streakFreeze", rarity: "rare", desc: "Bảo vệ streak nếu quên học 1 ngày." },
  { id: "doubleCoins", name: "Nhân Đôi Xu", icon: "🪙", price: 120, type: "consumable", powerUpId: "doubleCoins", rarity: "rare", desc: "Nhân đôi coin kiếm được trong phiên tiếp theo." },
  { id: "hintPack3", name: "Gói Gợi Ý ×3", icon: "💡", price: 150, type: "consumable", powerUpId: "hintPack", amount: 3, rarity: "common", desc: "Mua 3 hint cùng lúc — tiết kiệm 30 coin!" },
  { id: "xpBoost3", name: "Tăng Điểm Kinh Nghiệm ×3", icon: "⚡", price: 200, type: "consumable", powerUpId: "xpBoost", amount: 3, rarity: "common", desc: "Mua 3 XP Boost — tiết kiệm 40 coin!" },
  { id: "streakFreeze3", name: "Đóng Băng Chuỗi ×3", icon: "🧊", price: 250, type: "consumable", powerUpId: "streakFreeze", amount: 3, rarity: "rare", desc: "Mua 3 Streak Freeze — tiết kiệm 50 coin!" },
  // ── Bundles ──
  { id: "starterPack", name: "Gói Khởi Đầu", icon: "🎁", price: 200, type: "bundle", rarity: "rare", bundle: [{ powerUpId: "hintPack", amount: 3 }, { powerUpId: "xpBoost", amount: 2 }], desc: "3× Hint + 2× XP Boost. Tiết kiệm 40 coin!" },
  { id: "premiumPack", name: "Gói Cao Cấp", icon: "👑", price: 400, type: "bundle", rarity: "epic", bundle: [{ powerUpId: "hintPack", amount: 5 }, { powerUpId: "xpBoost", amount: 3 }, { powerUpId: "streakFreeze", amount: 2 }, { powerUpId: "doubleCoins", amount: 1 }], desc: "Combo tất cả power-up. Tiết kiệm 120 coin!" },
  { id: "weeklyPack", name: "Gói Tăng Tốc Tuần", icon: "📦", price: 300, type: "bundle", rarity: "rare", bundle: [{ powerUpId: "xpBoost", amount: 4 }, { powerUpId: "doubleCoins", amount: 2 }], desc: "4× XP + 2× Double Coin cho tuần mới." },
  { id: "survivalKit", name: "Bộ Sinh Tồn", icon: "🛡️", price: 350, type: "bundle", rarity: "epic", bundle: [{ powerUpId: "streakFreeze", amount: 3 }, { powerUpId: "hintPack", amount: 3 }, { powerUpId: "xpBoost", amount: 1 }], desc: "3× Freeze + 3× Hint + 1× XP. Bộ sinh tồn!" },
  { id: "ultimatePack", name: "Gói Tối Thượng", icon: "💫", price: 700, type: "bundle", rarity: "legendary", bundle: [{ powerUpId: "hintPack", amount: 10 }, { powerUpId: "xpBoost", amount: 5 }, { powerUpId: "streakFreeze", amount: 3 }, { powerUpId: "doubleCoins", amount: 3 }], desc: "Gói tối thượng! 21 power-up. Tiết kiệm 300 coin!" },
  // ── Unlock: Themes ──
  { id: "unlock-theme-sakura", name: "Giao diện: Sakura", icon: "🌸", price: 300, type: "unlock", unlockKey: "theme-sakura", rarity: "rare", desc: "Giao diện hồng pastel lãng mạn." },
  { id: "unlock-theme-ocean", name: "Giao diện: Đại dương", icon: "🌊", price: 300, type: "unlock", unlockKey: "theme-ocean", rarity: "rare", desc: "Giao diện xanh dương đại dương." },
  { id: "unlock-theme-sunset", name: "Giao diện: Hoàng hôn", icon: "🌅", price: 300, type: "unlock", unlockKey: "theme-sunset", rarity: "rare", desc: "Giao diện cam đỏ hoàng hôn nóng bỏng." },
  { id: "unlock-theme-forest", name: "Giao diện: Rừng sâu", icon: "🌲", price: 300, type: "unlock", unlockKey: "theme-forest", rarity: "rare", desc: "Giao diện xanh lá rừng sâu yên bình." },
  { id: "unlock-theme-galaxy", name: "Giao diện: Vũ trụ", icon: "🌌", price: 500, type: "unlock", unlockKey: "theme-galaxy", rarity: "epic", desc: "Giao diện vũ trụ tím xanh huyền bí." },
  { id: "unlock-theme-midnight", name: "Giao diện: Nửa đêm", icon: "🌙", price: 400, type: "unlock", unlockKey: "theme-midnight", rarity: "rare", desc: "Giao diện đen xanh navy ban đêm." },
  { id: "unlock-theme-autumn", name: "Giao diện: Mùa thu", icon: "🍂", price: 350, type: "unlock", unlockKey: "theme-autumn", rarity: "rare", desc: "Giao diện lá vàng thu ấm áp." },
  { id: "unlock-theme-cyberpunk", name: "Giao diện: Tương lai viễn tưởng", icon: "🤖", price: 600, type: "unlock", unlockKey: "theme-cyberpunk", rarity: "epic", desc: "Giao diện neon xanh hồng cyberpunk." },
  { id: "unlock-theme-amethyst", name: "Giao diện: Thạch anh tím", icon: "💜", price: 300, type: "unlock", unlockKey: "theme-amethyst", rarity: "rare", desc: "Giao diện tím pha lê huyền bí." },
  { id: "unlock-theme-ember", name: "Giao diện: Than hồng", icon: "🔥", price: 350, type: "unlock", unlockKey: "theme-ember", rarity: "rare", desc: "Giao diện than hồng ấm nóng." },
  { id: "unlock-theme-neon-tokyo", name: "Giao diện: Tokyo Neon", icon: "🌃", price: 500, type: "unlock", unlockKey: "theme-neon-tokyo", rarity: "epic", desc: "Giao diện neon Tokyo rung động." },
  { id: "unlock-theme-aurora", name: "Giao diện: Cực quang", icon: "🌈", price: 400, type: "unlock", unlockKey: "theme-aurora", rarity: "rare", desc: "Giao diện cực quang lung linh." },
  { id: "unlock-theme-tropical", name: "Giao diện: Nhiệt đới", icon: "🌴", price: 350, type: "unlock", unlockKey: "theme-tropical", rarity: "rare", desc: "Giao diện nhiệt đới tươi mát." },
  { id: "unlock-theme-lavender", name: "Giao diện: Oải hương", icon: "💐", price: 300, type: "unlock", unlockKey: "theme-lavender", rarity: "rare", desc: "Giao diện oải hương dịu dàng." },
  // ── Unlock: Badges ──
  { id: "unlock-badge-vip", name: "Huy hiệu: Đặc quyền", icon: "⭐", price: 500, type: "unlock", unlockKey: "badge-vip", rarity: "epic", desc: "Huy hiệu VIP sáng trên hồ sơ cá nhân." },
  { id: "unlock-badge-samurai", name: "Huy hiệu: Samurai", icon: "⚔️", price: 400, type: "unlock", unlockKey: "badge-samurai", rarity: "rare", desc: "Huy hiệu Samurai — chiến binh tiếng Nhật." },
  { id: "unlock-badge-sensei", name: "Huy hiệu: Sensei", icon: "🎓", price: 800, type: "unlock", unlockKey: "badge-sensei", rarity: "legendary", desc: "Huy hiệu Sensei — bậc thầy N4. Hiếm!" },
  { id: "unlock-badge-dragon", name: "Huy hiệu: Rồng", icon: "🐉", price: 600, type: "unlock", unlockKey: "badge-dragon", rarity: "epic", desc: "Huy hiệu Rồng — sức mạnh vô song." },
  { id: "unlock-badge-sakura", name: "Huy hiệu: Sakura", icon: "🌸", price: 300, type: "unlock", unlockKey: "badge-sakura", rarity: "rare", desc: "Huy hiệu Hoa anh đào — vẻ đẹp Nhật Bản." },
  { id: "unlock-badge-crown", name: "Huy hiệu: Vương miện", icon: "👑", price: 1e3, type: "unlock", unlockKey: "badge-crown", rarity: "legendary", desc: "Huy hiệu Vương miện — Vua tiếng Nhật. Cực hiếm!" },
  // ── Unlock: Card Styles ──
  { id: "unlock-card-neon", name: "Kiểu thẻ: Neon", icon: "✨", price: 250, type: "unlock", unlockKey: "card-neon", rarity: "rare", desc: "Hiệu ứng neon rực rỡ cho flashcard." },
  { id: "unlock-card-glass", name: "Kiểu thẻ: Kính mờ", icon: "💎", price: 250, type: "unlock", unlockKey: "card-glass", rarity: "rare", desc: "Hiệu ứng kính mờ (glassmorphism) sang trọng." },
  { id: "unlock-card-gradient", name: "Kiểu thẻ: Chuyển sắc", icon: "🌈", price: 300, type: "unlock", unlockKey: "card-gradient", rarity: "rare", desc: "Flashcard gradient nhiều màu sống động." },
  { id: "unlock-card-gold", name: "Kiểu thẻ: Mạ vàng", icon: "🏅", price: 500, type: "unlock", unlockKey: "card-gold", rarity: "epic", desc: "Flashcard viền vàng cao cấp VIP." },
  { id: "unlock-card-hologram", name: "Kiểu thẻ: Toàn ảnh", icon: "🔮", price: 700, type: "unlock", unlockKey: "card-hologram", rarity: "legendary", desc: "Hiệu ứng hologram 3D chuyển màu. Cực đẹp!" },
  // ── Unlock: Avatars ──
  { id: "unlock-avatar-ninja", name: "Ảnh đại diện: Ninja", icon: "🥷", price: 200, type: "unlock", unlockKey: "avatar-ninja", rarity: "common", desc: "Hình đại diện Ninja bí ẩn." },
  { id: "unlock-avatar-cat", name: "Ảnh đại diện: Maneki Neko", icon: "🐱", price: 250, type: "unlock", unlockKey: "avatar-maneki", rarity: "rare", desc: "Mèo thần tài Nhật Bản đáng yêu." },
  { id: "unlock-avatar-tanuki", name: "Ảnh đại diện: Tanuki", icon: "🦝", price: 250, type: "unlock", unlockKey: "avatar-tanuki", rarity: "rare", desc: "Tanuki — linh vật may mắn Nhật Bản." },
  { id: "unlock-avatar-fox", name: "Ảnh đại diện: Kitsune", icon: "🦊", price: 400, type: "unlock", unlockKey: "avatar-kitsune", rarity: "epic", desc: "Cáo Kitsune — yêu tinh quyền năng." },
  { id: "unlock-avatar-phoenix", name: "Ảnh đại diện: Hō-ō", icon: "🔥", price: 800, type: "unlock", unlockKey: "avatar-phoenix", rarity: "legendary", desc: "Phượng hoàng Hō-ō — truyền thuyết Nhật Bản. Cực hiếm!" },
  // ── Unlock: Effects ──
  { id: "unlock-effect-confetti", name: "Hiệu ứng: Pháo giấy", icon: "🎊", price: 200, type: "unlock", unlockKey: "effect-confetti", rarity: "common", desc: "Pháo hoa giấy khi trả lời đúng!" },
  { id: "unlock-effect-sparkle", name: "Hiệu ứng: Lấp lánh", icon: "💫", price: 300, type: "unlock", unlockKey: "effect-sparkle", rarity: "rare", desc: "Hiệu ứng lấp lánh khi combo cao." },
  { id: "unlock-effect-firework", name: "Hiệu ứng: Pháo hoa", icon: "🎆", price: 450, type: "unlock", unlockKey: "effect-firework", rarity: "epic", desc: "Pháo hoa rực rỡ khi hoàn thành quiz!" },
  // ── Unlock: New Effects ──
  { id: "unlock-effect-sakura-petals", name: "Hiệu ứng: Cánh hoa Sakura", icon: "🌸", price: 350, type: "unlock", unlockKey: "effect-sakura-petals", rarity: "rare", desc: "Cánh hoa anh đào rơi nhẹ khi trả lời đúng." },
  { id: "unlock-effect-lightning", name: "Hiệu ứng: Tia chớp", icon: "⚡", price: 400, type: "unlock", unlockKey: "effect-lightning", rarity: "epic", desc: "Tia sét lóe sáng khi combo cao!" },
  { id: "unlock-effect-rainbow", name: "Hiệu ứng: Cầu vồng", icon: "🌈", price: 500, type: "unlock", unlockKey: "effect-rainbow", rarity: "epic", desc: "Cầu vồng xuất hiện khi hoàn thành xuất sắc!" },
  { id: "unlock-effect-snow", name: "Hiệu ứng: Tuyết rơi", icon: "❄️", price: 300, type: "unlock", unlockKey: "effect-snow", rarity: "rare", desc: "Tuyết rơi nhẹ nhàng — mùa đông Nhật Bản." },
  // ── Unlock: New Avatars ──
  { id: "unlock-avatar-daruma", name: "Ảnh đại diện: Daruma", icon: "🎯", price: 300, type: "unlock", unlockKey: "avatar-daruma", rarity: "rare", desc: "Daruma — búp bê may mắn Nhật Bản." },
  { id: "unlock-avatar-oni", name: "Ảnh đại diện: Oni", icon: "👹", price: 350, type: "unlock", unlockKey: "avatar-oni", rarity: "rare", desc: "Oni — quỷ dữ trong truyền thuyết Nhật." },
  { id: "unlock-avatar-crane", name: "Ảnh đại diện: Tsuru", icon: "🦢", price: 500, type: "unlock", unlockKey: "avatar-crane", rarity: "epic", desc: "Tsuru — hạc trắng biểu tượng trường thọ." },
  // ── Unlock: New Badges ──
  { id: "unlock-badge-scholar", name: "Huy hiệu: Học giả", icon: "📚", price: 450, type: "unlock", unlockKey: "badge-scholar", rarity: "epic", desc: "Huy hiệu Học giả — siêng năng không ngừng." },
  { id: "unlock-badge-explorer", name: "Huy hiệu: Nhà thám hiểm", icon: "🧭", price: 350, type: "unlock", unlockKey: "badge-explorer", rarity: "rare", desc: "Huy hiệu Nhà thám hiểm — khám phá mọi tính năng." },
  { id: "unlock-badge-diamond", name: "Huy hiệu: Kim cương", icon: "💎", price: 1200, type: "unlock", unlockKey: "badge-diamond", rarity: "legendary", desc: "Huy hiệu Kim cương — đỉnh cao sưu tập. Cực hiếm!" },
  // ── New Power-Ups (Step 6) ──
  { id: "timeExtend", name: "Thêm thời gian", icon: "⏰", price: 70, type: "consumable", powerUpId: "timeExtend", rarity: "common", desc: "+15 giây thêm trong quiz có đếm giờ." },
  { id: "skipShield", name: "Lá chắn bỏ qua", icon: "🛡️", price: 90, type: "consumable", powerUpId: "skipShield", rarity: "common", desc: "Bỏ qua 1 câu sai mà không mất streak." },
  { id: "autoHint", name: "Tự động gợi ý", icon: "🔮", price: 60, type: "consumable", powerUpId: "autoHint", rarity: "common", desc: "Tự động hiện gợi ý sau 10 giây." },
  { id: "comboSaver", name: "Bảo toàn chuỗi", icon: "🔗", price: 100, type: "consumable", powerUpId: "comboSaver", rarity: "rare", desc: "Giữ combo khi trả lời sai 1 lần." },
  { id: "bonusQuestion", name: "Câu hỏi thưởng", icon: "➕", price: 50, type: "consumable", powerUpId: "bonusQuestion", rarity: "common", desc: "+1 câu hỏi bonus thêm coin." },
  { id: "revealOne", name: "Loại đáp án sai", icon: "👁️", price: 80, type: "consumable", powerUpId: "revealOne", rarity: "common", desc: "Loại bỏ 1 đáp án sai trong trắc nghiệm." },
  { id: "slowMotion", name: "Thời gian chậm", icon: "🐌", price: 90, type: "consumable", powerUpId: "slowMotion", rarity: "common", desc: "Giảm tốc đếm ngược ×1.5." },
  { id: "coinMagnet", name: "Nam châm hút xu", icon: "🧲", price: 150, type: "consumable", powerUpId: "coinMagnet", rarity: "rare", desc: "+50% coin cho 20 câu tiếp theo." },
  { id: "luckyCharm", name: "Bùa may mắn", icon: "🍀", price: 200, type: "consumable", powerUpId: "luckyCharm", rarity: "rare", desc: "Tăng tỷ lệ thưởng bonus khi quiz." },
  { id: "goldRush", name: "Cơn sốt xu", icon: "💛", price: 250, type: "consumable", powerUpId: "goldRush", rarity: "epic", desc: "×3 coin cho 10 câu trả lời đúng tiếp." },
  { id: "rerollToken", name: "Lượt đổi câu", icon: "🔄", price: 100, type: "consumable", powerUpId: "rerollToken", rarity: "rare", desc: "Đổi câu hỏi mới trong quiz." },
  { id: "focusLens", name: "Kính tập trung", icon: "🔍", price: 120, type: "consumable", powerUpId: "focusLens", rarity: "rare", desc: "Hiển thị thêm chi tiết cho SRS cards." },
  { id: "memoryInk", name: "Mực ghi nhớ", icon: "🖊️", price: 130, type: "consumable", powerUpId: "memoryInk", rarity: "rare", desc: "SRS interval tăng thêm +1 bậc." },
  { id: "wisdomScroll", name: "Cuộn trí tuệ", icon: "📜", price: 180, type: "consumable", powerUpId: "wisdomScroll", rarity: "epic", desc: "Cuộn trí tuệ — +20% XP cho 1 giờ." },
  { id: "phoenixFeather", name: "Lông vũ Phượng hoàng", icon: "🪶", price: 300, type: "consumable", powerUpId: "phoenixFeather", rarity: "epic", desc: "Phục hồi streak bị mất tối đa 3 ngày." },
  { id: "titanShield", name: "Khiên Titan", icon: "🏛️", price: 350, type: "consumable", powerUpId: "titanShield", rarity: "epic", desc: "Bảo vệ coin khỏi phí cá cược thất bại." },
  { id: "timeCrystal", name: "Tinh thể thời gian", icon: "💠", price: 400, type: "consumable", powerUpId: "timeCrystal", rarity: "epic", desc: "Đóng băng đếm ngược 5 giây trong quiz." },
  { id: "starFragment", name: "Mảnh sao", icon: "⭐", price: 500, type: "consumable", powerUpId: "starFragment", rarity: "legendary", desc: "Mảnh sao — thành phần craft premium." },
  { id: "rainbowOrb", name: "Quả cầu cầu vồng", icon: "🌈", price: 600, type: "consumable", powerUpId: "rainbowOrb", rarity: "legendary", desc: "Guaranteed epic+ trong gacha pull tiếp." },
  // ── Unlock: Titles (Step 8) ──
  { id: "unlock-title-ganbatte", name: "Danh hiệu: 頑張って", icon: "💪", price: 200, type: "unlock", unlockKey: "title-ganbatte", rarity: "common", desc: 'Danh hiệu "Cố lên!" hiện trên hồ sơ.' },
  { id: "unlock-title-sugoi", name: "Danh hiệu: すごい", icon: "✨", price: 250, type: "unlock", unlockKey: "title-sugoi", rarity: "rare", desc: 'Danh hiệu "Tuyệt vời!" hiện trên hồ sơ.' },
  { id: "unlock-title-nihongo", name: "Danh hiệu: 日本語マスター", icon: "🇯🇵", price: 400, type: "unlock", unlockKey: "title-nihongo-master", rarity: "epic", desc: 'Danh hiệu "Bậc thầy tiếng Nhật".' },
  { id: "unlock-title-samurai", name: "Danh hiệu: 侍", icon: "⚔️", price: 350, type: "unlock", unlockKey: "title-samurai", rarity: "rare", desc: 'Danh hiệu "Samurai" oai phong.' },
  { id: "unlock-title-daimyo", name: "Danh hiệu: 大名", icon: "🏯", price: 600, type: "unlock", unlockKey: "title-daimyo", rarity: "epic", desc: 'Danh hiệu "Đại lãnh chúa" hiếm.' },
  { id: "unlock-title-shogun", name: "Danh hiệu: 将軍", icon: "👑", price: 1e3, type: "unlock", unlockKey: "title-shogun", rarity: "legendary", desc: 'Danh hiệu "Tướng quân" tối thượng!' },
  // ── Skills (Step 8) — permanent passive ──
  { id: "skill-coinBoost5", name: "Kỹ năng: Xu +5%", icon: "💰", price: 800, type: "unlock", unlockKey: "skill-coinBoost5", rarity: "epic", desc: "Tăng vĩnh viễn +5% coin kiếm được." },
  { id: "skill-xpBoost5", name: "Kỹ năng: Điểm +5%", icon: "📈", price: 800, type: "unlock", unlockKey: "skill-xpBoost5", rarity: "epic", desc: "Tăng vĩnh viễn +5% XP kiếm được." },
  { id: "skill-hintFree", name: "Kỹ năng: Gợi ý miễn phí hàng ngày", icon: "💡", price: 600, type: "unlock", unlockKey: "skill-hintFree", rarity: "rare", desc: "1 hint miễn phí mỗi ngày." },
  { id: "skill-comboExtend", name: "Kỹ năng: Kéo dài chuỗi liên tục", icon: "⏱️", price: 700, type: "unlock", unlockKey: "skill-comboExtend", rarity: "rare", desc: "Mở rộng cửa sổ combo +2 giây." },
  { id: "skill-dailyBonus", name: "Kỹ năng: Thưởng ngày +20%", icon: "📅", price: 900, type: "unlock", unlockKey: "skill-dailyBonus", rarity: "epic", desc: "+20% daily claim reward vĩnh viễn." },
  // ── Stickers (Step 8) ──
  { id: "sticker-neko", name: "Nhãn dán: Neko", icon: "😺", price: 50, type: "unlock", unlockKey: "sticker-neko", rarity: "common", desc: "Sticker mèo dễ thương." },
  { id: "sticker-sakura", name: "Nhãn dán: Sakura", icon: "🌸", price: 50, type: "unlock", unlockKey: "sticker-sakura", rarity: "common", desc: "Sticker hoa anh đào." },
  { id: "sticker-onigiri", name: "Nhãn dán: Onigiri", icon: "🍙", price: 50, type: "unlock", unlockKey: "sticker-onigiri", rarity: "common", desc: "Sticker cơm nắm Nhật Bản." },
  { id: "sticker-torii", name: "Nhãn dán: Cổng Torii", icon: "⛩️", price: 80, type: "unlock", unlockKey: "sticker-torii", rarity: "rare", desc: "Sticker cổng Torii linh thiêng." },
  { id: "sticker-fuji", name: "Nhãn dán: Núi Phú Sĩ", icon: "🗻", price: 80, type: "unlock", unlockKey: "sticker-fuji", rarity: "rare", desc: "Sticker núi Phú Sĩ hùng vĩ." },
  // ══════════════════════════════════════════════════════════
  // ── COMBAT GEAR — boost 3D world character stats ──────────
  // ══════════════════════════════════════════════════════════
  // Weapons — boost ATK
  { id: "gear-iron-sword", name: "Vũ khí: Kiếm Sắt", icon: "🗡️", price: 200, type: "unlock", unlockKey: "gear-iron-sword", rarity: "common", category: "gear", desc: "+8 ATK trong 3D World. Vũ khí cơ bản cho chiến binh mới." },
  { id: "gear-steel-sword", name: "Vũ khí: Kiếm Thép", icon: "⚔️", price: 450, type: "unlock", unlockKey: "gear-steel-sword", rarity: "rare", category: "gear", desc: "+18 ATK. Sắc bén hơn kiếm sắt rõ rệt." },
  { id: "gear-katana", name: "Vũ khí: Katana", icon: "🔪", price: 900, type: "unlock", unlockKey: "gear-katana", rarity: "epic", category: "gear", desc: "+32 ATK +5% tốc độ. Linh hồn của samurai." },
  { id: "gear-oni-blade", name: "Vũ khí: Dao Quỷ Oni", icon: "🪓", price: 1800, type: "unlock", unlockKey: "gear-oni-blade", rarity: "legendary", category: "gear", desc: "+55 ATK +8% tốc độ. Sức chém kinh hoàng của quỷ Oni." },
  // Armor — boost HP + DEF
  { id: "gear-leather-armor", name: "Giáp: Áo Da", icon: "🧥", price: 180, type: "unlock", unlockKey: "gear-leather-armor", rarity: "common", category: "gear", desc: "+60 HP. Bảo vệ cơ bản cho chiến binh mới." },
  { id: "gear-chain-mail", name: "Giáp: Áo Lưới", icon: "🛡️", price: 400, type: "unlock", unlockKey: "gear-chain-mail", rarity: "rare", category: "gear", desc: "+120 HP +4% giảm sát thương. Giáp lưới kim loại chắc chắn." },
  { id: "gear-samurai-armor", name: "Giáp: Giáp Samurai", icon: "🥋", price: 850, type: "unlock", unlockKey: "gear-samurai-armor", rarity: "epic", category: "gear", desc: "+200 HP +8% giảm sát thương. Giáp samurai đầy đủ." },
  { id: "gear-dragon-scale", name: "Giáp: Vảy Rồng", icon: "🐲", price: 2e3, type: "unlock", unlockKey: "gear-dragon-scale", rarity: "legendary", category: "gear", desc: "+350 HP +12% def +15 ATK. Vảy rồng cổ đại — quý hiếm nhất." },
  // Boots — boost SPD
  { id: "gear-wind-boots", name: "Giày: Giày Gió", icon: "👟", price: 350, type: "unlock", unlockKey: "gear-wind-boots", rarity: "rare", category: "gear", desc: "+12% tốc độ di chuyển. Nhẹ nhàng như cơn gió." },
  { id: "gear-thunder-treads", name: "Giày: Giày Sấm", icon: "⚡", price: 800, type: "unlock", unlockKey: "gear-thunder-treads", rarity: "epic", category: "gear", desc: "+22% tốc độ +10 ATK. Nhanh như sấm sét." },
  // Accessories — mixed bonuses
  { id: "gear-spirit-talisman", name: "Phụ kiện: Bùa Hộ Mệnh", icon: "📿", price: 500, type: "unlock", unlockKey: "gear-spirit-talisman", rarity: "rare", category: "gear", desc: "+10% giảm sát thương +80 HP. Bùa hộ mệnh linh thiêng." },
  { id: "gear-berserker-rune", name: "Phụ kiện: Rune Cuồng", icon: "🔮", price: 700, type: "unlock", unlockKey: "gear-berserker-rune", rarity: "epic", category: "gear", desc: "+70 ATK −5% def. Hy sinh phòng thủ lấy sức công." },
  { id: "gear-celestial-orb", name: "Phụ kiện: Ngọc Thiên", icon: "🌟", price: 2500, type: "unlock", unlockKey: "gear-celestial-orb", rarity: "legendary", category: "gear", desc: "+40 ATK +150 HP +6% def +6% spd. Ngọc thiên — tổng hợp toàn diện." },
  // ══════════════════════════════════════════════════════════
  // ── PREMIUM ANIMATED ITEMS ──
  // ══════════════════════════════════════════════════════════
  // ── Animated Themes (gradient + particle effects) ──
  { id: "unlock-theme-dragon-flame", name: "🔥 Giao diện: Lửa rồng", icon: "🐉", price: 1500, type: "unlock", unlockKey: "theme-dragon-flame", rarity: "legendary", anim: "flame", desc: "Giao diện lửa rồng — animation cháy rực trên nền đen. Rarity: Legendary." },
  { id: "unlock-theme-aurora-borealis", name: "🌌 Giao diện: Bắc cực quang", icon: "🌌", price: 1200, type: "unlock", unlockKey: "theme-aurora-borealis", rarity: "legendary", anim: "aurora", desc: "Giao diện cực quang animated — dải sáng chuyển màu xanh lục-tím." },
  { id: "unlock-theme-deep-ocean", name: "🌊 Giao diện: Đại dương sâu", icon: "🐙", price: 800, type: "unlock", unlockKey: "theme-deep-ocean", rarity: "epic", anim: "wave", desc: "Giao diện đại dương sâu — hiệu ứng sóng nước chuyển động." },
  { id: "unlock-theme-cherry-blossom", name: "🌸 Giao diện: Mưa hoa anh đào", icon: "🌸", price: 900, type: "unlock", unlockKey: "theme-cherry-blossom", rarity: "epic", anim: "petals", desc: "Giao diện hoa anh đào rơi animated — cánh hoa bay khắp màn hình." },
  { id: "unlock-theme-cosmic-void", name: "🕳️ Giao diện: Hố đen vũ trụ", icon: "✨", price: 2e3, type: "unlock", unlockKey: "theme-cosmic-void", rarity: "legendary", anim: "cosmic", desc: "Giao diện vũ trụ — hiệu ứng sao băng, hố đen xoáy. Cực hiếm!" },
  { id: "unlock-theme-neon-matrix", name: "💚 Giao diện: Neon Ma trận", icon: "💾", price: 1e3, type: "unlock", unlockKey: "theme-neon-matrix", rarity: "epic", anim: "matrix", desc: "Giao diện Matrix — ký tự rơi như mưa xanh neon." },
  { id: "unlock-theme-golden-palace", name: "🏯 Giao diện: Cung điện vàng", icon: "🏯", price: 1800, type: "unlock", unlockKey: "theme-golden-palace", rarity: "legendary", anim: "shimmer-gold", desc: "Giao diện cung điện vàng — hiệu ứng ánh vàng lấp lánh khắp nơi." },
  { id: "unlock-theme-thunderstorm", name: "⛈️ Giao diện: Bão sấm", icon: "⛈️", price: 700, type: "unlock", unlockKey: "theme-thunderstorm", rarity: "epic", anim: "lightning", desc: "Giao diện bão sấm — tia chớp nháy ngẫu nhiên trên nền tối." },
  // ── Animated Avatars (with special aura effects) ──
  { id: "unlock-avatar-dragon-king", name: "Ảnh đại diện: 龍王 Long Vương", icon: "🐲", price: 2500, type: "unlock", unlockKey: "avatar-dragon-king", rarity: "legendary", anim: "flame", desc: "Avatar Vua Rồng — hào quang lửa cháy rực. Hiếm nhất shop!" },
  { id: "unlock-avatar-sakura-spirit", name: "Ảnh đại diện: 桜の精 Tinh linh Sakura", icon: "🧚", price: 1500, type: "unlock", unlockKey: "avatar-sakura-spirit", rarity: "legendary", anim: "petals", desc: "Avatar Tinh linh hoa anh đào — cánh hoa bay quanh avatar." },
  { id: "unlock-avatar-thunder-god", name: "Ảnh đại diện: 雷神 Raijin", icon: "⚡", price: 1200, type: "unlock", unlockKey: "avatar-thunder-god", rarity: "epic", anim: "lightning", desc: "Avatar Thần Sấm Raijin — tia điện phóng quanh avatar." },
  { id: "unlock-avatar-ice-empress", name: "Ảnh đại diện: 氷の女王 Nữ hoàng Băng", icon: "❄️", price: 1e3, type: "unlock", unlockKey: "avatar-ice-empress", rarity: "epic", anim: "frost", desc: "Avatar Nữ hoàng Băng — hiệu ứng tuyết và ánh sáng lạnh." },
  { id: "unlock-avatar-shadow-ninja", name: "Ảnh đại diện: 忍 Ninja Bóng tối", icon: "🌑", price: 800, type: "unlock", unlockKey: "avatar-shadow-ninja", rarity: "epic", anim: "shadow", desc: "Avatar Ninja Bóng Tối — hào quang đen tím bí ẩn." },
  { id: "unlock-avatar-celestial-fox", name: "Ảnh đại diện: 天狐 Thiên Hồ", icon: "🦊", price: 2e3, type: "unlock", unlockKey: "avatar-celestial-fox", rarity: "legendary", anim: "cosmic", desc: "Avatar Cáo Thiên — 9 đuôi lửa thiêng, hào quang cầu vồng." },
  { id: "unlock-avatar-wind-samurai", name: "Ảnh đại diện: 風の侍 Samurai Gió", icon: "🌪️", price: 900, type: "unlock", unlockKey: "avatar-wind-samurai", rarity: "epic", anim: "wind", desc: "Avatar Samurai Gió — lốc xoáy bao quanh." },
  { id: "unlock-avatar-golden-buddha", name: "Ảnh đại diện: 金仏 Phật Vàng", icon: "🧘", price: 3e3, type: "unlock", unlockKey: "avatar-golden-buddha", rarity: "legendary", anim: "shimmer-gold", desc: "Avatar Phật Vàng — hào quang vàng tỏa sáng. Item đắt nhất!" },
  // ── Animated Badges (with glow/pulse effects) ──
  { id: "unlock-badge-flame-master", name: "Huy hiệu: 🔥 Bậc thầy Lửa", icon: "🔥", price: 1500, type: "unlock", unlockKey: "badge-flame-master", rarity: "legendary", anim: "flame", desc: "Huy hiệu Bậc thầy Lửa — cháy rực trên hồ sơ. Rất hiếm." },
  { id: "unlock-badge-frost-king", name: "Huy hiệu: ❄️ Vua Băng", icon: "❄️", price: 1200, type: "unlock", unlockKey: "badge-frost-king", rarity: "legendary", anim: "frost", desc: "Huy hiệu Vua Băng — ánh sáng lạnh tỏa quanh badge." },
  { id: "unlock-badge-thunder-bolt", name: "Huy hiệu: ⚡ Tia Sét", icon: "⚡", price: 800, type: "unlock", unlockKey: "badge-thunder-bolt", rarity: "epic", anim: "lightning", desc: "Huy hiệu Sấm Sét — tia điện nhấp nháy liên tục." },
  { id: "unlock-badge-cosmic-star", name: "Huy hiệu: 🌟 Sao Vũ Trụ", icon: "🌟", price: 2e3, type: "unlock", unlockKey: "badge-cosmic-star", rarity: "legendary", anim: "cosmic", desc: "Huy hiệu Sao Vũ trụ — xoáy sắc cầu vồng. Cực hiếm!" },
  { id: "unlock-badge-sakura-bloom", name: "Huy hiệu: 🌸 Sakura Nở Hoa", icon: "🌸", price: 600, type: "unlock", unlockKey: "badge-sakura-bloom", rarity: "epic", anim: "petals", desc: "Huy hiệu Hoa Anh Đào Nở — cánh hoa bay quanh badge." },
  { id: "unlock-badge-golden-dragon", name: "Huy hiệu: 🐉 Rồng Vàng", icon: "🐉", price: 2500, type: "unlock", unlockKey: "badge-golden-dragon", rarity: "legendary", anim: "shimmer-gold", desc: "Huy hiệu Rồng Vàng — ánh vàng chói lóa. Đắt nhất!" },
  // ── Premium Animated Effects ──
  { id: "unlock-effect-meteor-shower", name: "Hiệu ứng: Mưa sao băng", icon: "☄️", price: 1200, type: "unlock", unlockKey: "effect-meteor-shower", rarity: "legendary", anim: "cosmic", desc: "Mưa sao băng rực rỡ khi full combo!" },
  { id: "unlock-effect-dragon-breath", name: "Hiệu ứng: Hơi thở của rồng", icon: "🐲", price: 1500, type: "unlock", unlockKey: "effect-dragon-breath", rarity: "legendary", anim: "flame", desc: "Lửa rồng phun khi trả lời đúng liên tục!" },
  { id: "unlock-effect-ice-shatter", name: "Hiệu ứng: Băng vỡ tan", icon: "💠", price: 800, type: "unlock", unlockKey: "effect-ice-shatter", rarity: "epic", anim: "frost", desc: "Hiệu ứng băng vỡ tan khi hoàn thành quiz." },
  { id: "unlock-effect-thunder-strike", name: "Hiệu ứng: Sét đánh", icon: "🌩️", price: 900, type: "unlock", unlockKey: "effect-thunder-strike", rarity: "epic", anim: "lightning", desc: "Sấm sét đánh xuống khi combo ×10+!" },
  { id: "unlock-effect-cherry-storm", name: "Hiệu ứng: Bão hoa anh đào", icon: "🌸", price: 700, type: "unlock", unlockKey: "effect-cherry-storm", rarity: "epic", anim: "petals", desc: "Bão hoa anh đào tuyệt đẹp khi đúng 100%!" },
  { id: "unlock-effect-golden-rain", name: "Hiệu ứng: Mưa vàng", icon: "🌟", price: 2e3, type: "unlock", unlockKey: "effect-golden-rain", rarity: "legendary", anim: "shimmer-gold", desc: "Mưa vàng lấp lánh — hiệu ứng đắt nhất, đẹp nhất!" },
  { id: "unlock-effect-shadow-burst", name: "Hiệu ứng: Bùng nổ bóng tối", icon: "🌑", price: 600, type: "unlock", unlockKey: "effect-shadow-burst", rarity: "epic", anim: "shadow", desc: "Hiệu ứng bùng nổ bóng tối khi combo ×5+." },
  { id: "unlock-effect-wind-slash", name: "Hiệu ứng: Phong trảm", icon: "🌪️", price: 500, type: "unlock", unlockKey: "effect-wind-slash", rarity: "rare", anim: "wind", desc: "Gió cắt xoáy khi trả lời nhanh." },
  // ── Premium Animated Card Styles ──
  { id: "unlock-card-flame-border", name: "Thẻ: Viền lửa", icon: "🔥", price: 1e3, type: "unlock", unlockKey: "card-flame-border", rarity: "legendary", anim: "flame", desc: "Flashcard viền lửa cháy animated. Cực đẹp!" },
  { id: "unlock-card-frost-crystal", name: "Thẻ: Tinh thể băng", icon: "❄️", price: 800, type: "unlock", unlockKey: "card-frost-crystal", rarity: "epic", anim: "frost", desc: "Flashcard băng pha lê — hiệu ứng đóng băng lấp lánh." },
  { id: "unlock-card-aurora-shine", name: "Thẻ: Cực quang tỏa sáng", icon: "🌌", price: 1200, type: "unlock", unlockKey: "card-aurora-shine", rarity: "legendary", anim: "aurora", desc: "Flashcard cực quang — dải màu chuyển động liên tục." },
  { id: "unlock-card-cosmic-void", name: "Thẻ: Hố đen vũ trụ", icon: "🕳️", price: 1500, type: "unlock", unlockKey: "card-cosmic-void", rarity: "legendary", anim: "cosmic", desc: "Flashcard hố đen vũ trụ — xoáy sao băng trên nền tối." },
  { id: "unlock-card-thunder-pulse", name: "Thẻ: Sấm điện", icon: "⚡", price: 700, type: "unlock", unlockKey: "card-thunder-pulse", rarity: "epic", anim: "lightning", desc: "Flashcard sấm — tia điện chạy quanh viền card." },
  { id: "unlock-card-sakura-dream", name: "Thẻ: Mộng hoa anh đào", icon: "🌸", price: 600, type: "unlock", unlockKey: "card-sakura-dream", rarity: "epic", anim: "petals", desc: "Flashcard mơ hoa anh đào — cánh hoa rơi trong card." },
  { id: "unlock-card-golden-dragon", name: "Thẻ: Rồng vàng", icon: "🐉", price: 2e3, type: "unlock", unlockKey: "card-golden-dragon", rarity: "legendary", anim: "shimmer-gold", desc: "Flashcard Rồng Vàng — viền vàng rực + hiệu ứng ánh sáng." },
  // ══════════════════════════════════════════════════════════
  // ── NEON / CYBERPUNK THEMES ──
  // ══════════════════════════════════════════════════════════
  { id: "unlock-theme-neon-dragon", name: "Theme: Neon Dragon", icon: "🐉", price: 600, type: "unlock", unlockKey: "theme-neon-dragon", rarity: "epic", desc: "Giao diện neon đỏ rực — sức mạnh Rồng lửa." },
  { id: "unlock-theme-neon-sakura", name: "Theme: Neon Sakura", icon: "🌸", price: 500, type: "unlock", unlockKey: "theme-neon-sakura", rarity: "epic", desc: "Giao diện neon hồng tím — hoa anh đào phát sáng." },
  { id: "unlock-theme-neon-vaporwave", name: "Theme: Vaporwave", icon: "🌆", price: 700, type: "unlock", unlockKey: "theme-neon-vaporwave", rarity: "epic", desc: "Giao diện Vaporwave retro — tím hồng mộng mơ." },
  { id: "unlock-theme-cyber-chrome", name: "Theme: Cyber Chrome", icon: "⚙️", price: 500, type: "unlock", unlockKey: "theme-cyber-chrome", rarity: "rare", desc: "Giao diện Chrome xanh metallic — công nghệ cao." },
  { id: "unlock-theme-cyber-violet", name: "Theme: Cyber Violet", icon: "💜", price: 600, type: "unlock", unlockKey: "theme-cyber-violet", rarity: "epic", desc: "Giao diện tím đen sâu thẳm — Cyber Violet huyền bí." },
  { id: "unlock-theme-midnight-neon", name: "Theme: Midnight Neon", icon: "🌃", price: 500, type: "unlock", unlockKey: "theme-midnight-neon", rarity: "rare", desc: "Giao diện neon xanh nửa đêm — thành phố không ngủ." },
  { id: "unlock-theme-electric-blue", name: "Theme: Electric Blue", icon: "⚡", price: 400, type: "unlock", unlockKey: "theme-electric-blue", rarity: "rare", desc: "Giao diện xanh điện neon — năng lượng thuần khiết." },
  { id: "unlock-theme-plasma-red", name: "Theme: Plasma Red", icon: "🔴", price: 500, type: "unlock", unlockKey: "theme-plasma-red", rarity: "rare", desc: "Giao diện đỏ Plasma — nóng bỏng và mạnh mẽ." },
  { id: "unlock-theme-toxic-green", name: "Theme: Toxic Green", icon: "☢️", price: 500, type: "unlock", unlockKey: "theme-toxic-green", rarity: "rare", desc: "Giao diện xanh lá neon — phóng xạ phát sáng." },
  { id: "unlock-theme-holographic", name: "Theme: Holographic", icon: "🔮", price: 800, type: "unlock", unlockKey: "theme-holographic", rarity: "epic", desc: "Giao diện Holographic — chuyển sắc cầu vồng." },
  { id: "unlock-theme-synthwave", name: "Theme: Synthwave", icon: "🎹", price: 700, type: "unlock", unlockKey: "theme-synthwave", rarity: "epic", desc: "Giao diện Synthwave — retro 80s neon hồng tím." },
  { id: "unlock-theme-retrowave", name: "Theme: Retrowave", icon: "📼", price: 600, type: "unlock", unlockKey: "theme-retrowave", rarity: "epic", desc: "Giao diện Retrowave — hoài cổ neon hồng cam." },
  { id: "unlock-theme-neon-amethyst", name: "Theme: Neon Amethyst", icon: "💎", price: 500, type: "unlock", unlockKey: "theme-neon-amethyst", rarity: "rare", desc: "Giao diện Neon Amethyst — tím pha lê rực rỡ." },
  { id: "unlock-theme-neon-coral", name: "Theme: Neon Coral", icon: "🪸", price: 400, type: "unlock", unlockKey: "theme-neon-coral", rarity: "rare", desc: "Giao diện Neon Coral — san hô đỏ cam neon." },
  { id: "unlock-theme-starlight", name: "Theme: Starlight", icon: "⭐", price: 1e3, type: "unlock", unlockKey: "theme-starlight", rarity: "legendary", desc: "Giao diện Starlight — ánh sao vàng lấp lánh. Tuyệt đẹp!" },
  // ══════════════════════════════════════════════════════════
  // ── GRADIENT TEXT COLORS ──
  // ══════════════════════════════════════════════════════════
  { id: "unlock-textcolor-fire", name: "Text: Fire Gradient", icon: "🔥", price: 300, type: "unlock", unlockKey: "textcolor-fire", rarity: "rare", desc: "Tên hiển thị gradient lửa đỏ-cam-vàng." },
  { id: "unlock-textcolor-ocean", name: "Text: Ocean Gradient", icon: "🌊", price: 250, type: "unlock", unlockKey: "textcolor-ocean", rarity: "rare", desc: "Tên hiển thị gradient xanh biển sâu." },
  { id: "unlock-textcolor-sunset", name: "Text: Sunset Fade", icon: "🌅", price: 250, type: "unlock", unlockKey: "textcolor-sunset", rarity: "rare", desc: "Tên hiển thị gradient hoàng hôn cam-hồng." },
  { id: "unlock-textcolor-aurora", name: "Text: Aurora Shimmer", icon: "🌌", price: 400, type: "unlock", unlockKey: "textcolor-aurora", rarity: "epic", desc: "Tên hiển thị gradient cực quang xanh-tím." },
  { id: "unlock-textcolor-neon-pink", name: "Text: Neon Pink-Blue", icon: "💗", price: 350, type: "unlock", unlockKey: "textcolor-neon-pink", rarity: "epic", desc: "Tên hiển thị gradient neon hồng-xanh lung linh." },
  { id: "unlock-textcolor-gold", name: "Text: Gold Gleam", icon: "🏆", price: 500, type: "unlock", unlockKey: "textcolor-gold", rarity: "epic", desc: "Tên hiển thị gradient vàng ánh kim — sang trọng!" },
  { id: "unlock-textcolor-emerald", name: "Text: Emerald Flow", icon: "💚", price: 300, type: "unlock", unlockKey: "textcolor-emerald", rarity: "rare", desc: "Tên hiển thị gradient ngọc lục bảo." },
  { id: "unlock-textcolor-cosmic", name: "Text: Cosmic Purple", icon: "🪐", price: 400, type: "unlock", unlockKey: "textcolor-cosmic", rarity: "epic", desc: "Tên hiển thị gradient tím vũ trụ huyền bí." },
  { id: "unlock-textcolor-rainbow", name: "Text: Rainbow Shift", icon: "🌈", price: 800, type: "unlock", unlockKey: "textcolor-rainbow", rarity: "legendary", desc: "Tên hiển thị gradient cầu vồng 7 sắc. Cực hiếm!" },
  { id: "unlock-textcolor-cherry", name: "Text: Cherry Blossom", icon: "🌸", price: 250, type: "unlock", unlockKey: "textcolor-cherry", rarity: "rare", desc: "Tên hiển thị gradient hồng hoa anh đào." },
  { id: "unlock-textcolor-frost", name: "Text: Frost Ice", icon: "❄️", price: 300, type: "unlock", unlockKey: "textcolor-frost", rarity: "rare", desc: "Tên hiển thị gradient băng giá trắng-xanh." },
  { id: "unlock-textcolor-thunder", name: "Text: Thunder Yellow", icon: "⚡", price: 350, type: "unlock", unlockKey: "textcolor-thunder", rarity: "epic", desc: "Tên hiển thị gradient sấm vàng-trắng rực rỡ." },
  { id: "unlock-textcolor-blood", name: "Text: Blood Moon", icon: "🌑", price: 400, type: "unlock", unlockKey: "textcolor-blood", rarity: "epic", desc: "Tên hiển thị gradient đỏ đen huyết nguyệt." },
  { id: "unlock-textcolor-sakura-dream", name: "Text: Sakura Dream", icon: "💮", price: 300, type: "unlock", unlockKey: "textcolor-sakura-dream", rarity: "rare", desc: "Tên hiển thị gradient hồng-trắng mộng ảo." },
  { id: "unlock-textcolor-holographic", name: "Text: Holographic", icon: "🔮", price: 600, type: "unlock", unlockKey: "textcolor-holographic", rarity: "legendary", desc: "Tên hiển thị gradient holographic chuyển sắc cầu vồng!" },
  // ══════════════════════════════════════════════════════════
  // ── ENTRANCE ANIMATIONS ──
  // ══════════════════════════════════════════════════════════
  { id: "unlock-entrance-fade-slide", name: "Entrance: Fade Slide", icon: "✨", price: 200, type: "unlock", unlockKey: "entrance-fade-slide", rarity: "common", desc: "Hiệu ứng đăng nhập: trượt lên mờ dần đẹp mắt." },
  { id: "unlock-entrance-bounce-in", name: "Entrance: Bounce In", icon: "🏀", price: 250, type: "unlock", unlockKey: "entrance-bounce-in", rarity: "common", desc: "Hiệu ứng đăng nhập: nảy vào sinh động." },
  { id: "unlock-entrance-glitch", name: "Entrance: Glitch", icon: "📺", price: 400, type: "unlock", unlockKey: "entrance-glitch", rarity: "rare", desc: "Hiệu ứng đăng nhập: glitch nhiễu sóng cyberpunk." },
  { id: "unlock-entrance-neon-flash", name: "Entrance: Neon Flash", icon: "💥", price: 500, type: "unlock", unlockKey: "entrance-neon-flash", rarity: "epic", desc: "Hiệu ứng đăng nhập: chớp neon rực rỡ." },
  { id: "unlock-entrance-sakura-spin", name: "Entrance: Sakura Spin", icon: "🌸", price: 400, type: "unlock", unlockKey: "entrance-sakura-spin", rarity: "rare", desc: "Hiệu ứng đăng nhập: xoay hoa anh đào." },
  { id: "unlock-entrance-thunder", name: "Entrance: Thunder Strike", icon: "⚡", price: 500, type: "unlock", unlockKey: "entrance-thunder", rarity: "epic", desc: "Hiệu ứng đăng nhập: sấm sét đánh xuống." },
  { id: "unlock-entrance-matrix", name: "Entrance: Matrix Rain", icon: "💾", price: 600, type: "unlock", unlockKey: "entrance-matrix", rarity: "epic", desc: "Hiệu ứng đăng nhập: mưa ký tự Matrix." },
  { id: "unlock-entrance-cosmic-warp", name: "Entrance: Cosmic Warp", icon: "🌀", price: 800, type: "unlock", unlockKey: "entrance-cosmic-warp", rarity: "legendary", desc: "Hiệu ứng đăng nhập: xuyên không vũ trụ. Cực đẹp!" },
  { id: "unlock-entrance-flip", name: "Entrance: Flip Card", icon: "🃏", price: 300, type: "unlock", unlockKey: "entrance-flip", rarity: "rare", desc: "Hiệu ứng đăng nhập: lật thẻ 3D." },
  { id: "unlock-entrance-zoom-burst", name: "Entrance: Zoom Burst", icon: "💫", price: 350, type: "unlock", unlockKey: "entrance-zoom-burst", rarity: "rare", desc: "Hiệu ứng đăng nhập: phóng to bùng nổ." },
  { id: "unlock-entrance-spiral", name: "Entrance: Spiral In", icon: "🌀", price: 400, type: "unlock", unlockKey: "entrance-spiral", rarity: "rare", desc: "Hiệu ứng đăng nhập: xoáy ốc bay vào." },
  { id: "unlock-entrance-typewriter", name: "Entrance: Typewriter", icon: "⌨️", price: 350, type: "unlock", unlockKey: "entrance-typewriter", rarity: "rare", desc: "Hiệu ứng đăng nhập: gõ phím từng ký tự." },
  { id: "unlock-entrance-pixelate", name: "Entrance: Pixelate", icon: "🎮", price: 500, type: "unlock", unlockKey: "entrance-pixelate", rarity: "epic", desc: "Hiệu ứng đăng nhập: pixel hóa retro game." },
  { id: "unlock-entrance-wave", name: "Entrance: Wave Roll", icon: "🌊", price: 300, type: "unlock", unlockKey: "entrance-wave", rarity: "common", desc: "Hiệu ứng đăng nhập: sóng cuộn êm dịu." },
  { id: "unlock-entrance-shine", name: "Entrance: Shine Pulse", icon: "🌟", price: 600, type: "unlock", unlockKey: "entrance-shine", rarity: "epic", desc: "Hiệu ứng đăng nhập: tỏa sáng xung quanh." },
  // ══════════════════════════════════════════════════════════
  // ── PARTICLE EFFECTS ──
  // ══════════════════════════════════════════════════════════
  { id: "unlock-particle-sakura", name: "Particle: Sakura Petals", icon: "🌸", price: 800, type: "unlock", unlockKey: "particle-sakura", rarity: "epic", desc: "Cánh hoa anh đào bay nhẹ khắp màn hình." },
  { id: "unlock-particle-snow", name: "Particle: Snowfall", icon: "❄️", price: 600, type: "unlock", unlockKey: "particle-snow", rarity: "rare", desc: "Tuyết rơi nhẹ nhàng — mùa đông Nhật Bản." },
  { id: "unlock-particle-stars", name: "Particle: Starfield", icon: "⭐", price: 700, type: "unlock", unlockKey: "particle-stars", rarity: "rare", desc: "Bầu trời đầy sao lấp lánh bay qua." },
  { id: "unlock-particle-fireflies", name: "Particle: Fireflies", icon: "✨", price: 800, type: "unlock", unlockKey: "particle-fireflies", rarity: "epic", desc: "Đom đóm bay lượn lung linh trong đêm." },
  { id: "unlock-particle-bubbles", name: "Particle: Bubbles", icon: "🫧", price: 500, type: "unlock", unlockKey: "particle-bubbles", rarity: "rare", desc: "Bong bóng bay lên nhẹ nhàng đầy màu sắc." },
  { id: "unlock-particle-matrix", name: "Particle: Matrix Rain", icon: "💾", price: 1e3, type: "unlock", unlockKey: "particle-matrix", rarity: "epic", desc: "Mưa ký tự Matrix xanh neon rơi liên tục." },
  { id: "unlock-particle-embers", name: "Particle: Embers", icon: "🔥", price: 900, type: "unlock", unlockKey: "particle-embers", rarity: "epic", desc: "Tia lửa bay lên như lửa trại Nhật Bản." },
  { id: "unlock-particle-aurora", name: "Particle: Aurora Waves", icon: "🌌", price: 1500, type: "unlock", unlockKey: "particle-aurora", rarity: "legendary", desc: "Sóng cực quang đầy màu sắc bay trên nền." },
  { id: "unlock-particle-sparkles", name: "Particle: Sparkles", icon: "💫", price: 600, type: "unlock", unlockKey: "particle-sparkles", rarity: "rare", desc: "Tia sáng lấp lánh ngẫu nhiên khắp nơi." },
  { id: "unlock-particle-cosmic-dust", name: "Particle: Cosmic Dust", icon: "🪐", price: 2e3, type: "unlock", unlockKey: "particle-cosmic-dust", rarity: "legendary", desc: "Bụi vũ trụ đầy sắc màu — hiệu ứng đẹp nhất!" },
  // ══════════════════════════════════════════════════════════
  // ── TIMED SKILLS (Consumable) ──
  // ══════════════════════════════════════════════════════════
  { id: "skill-doubleXp1h", name: "Nhân đôi điểm (1 giờ)", icon: "⚡", price: 200, type: "consumable", powerUpId: "doubleXp1h", rarity: "rare", desc: "Nhân đôi XP trong 1 giờ tiếp theo." },
  { id: "skill-coinBoost1h", name: "Tăng xu (1 giờ)", icon: "💰", price: 200, type: "consumable", powerUpId: "coinBoost1h", rarity: "rare", desc: "+50% coin kiếm được trong 1 giờ." },
  { id: "skill-streakShield24h", name: "Lá chắn chuỗi (24 giờ)", icon: "🛡️", price: 300, type: "consumable", powerUpId: "streakShield24h", rarity: "epic", desc: "Bảo vệ streak trong 24 giờ — không lo quên học." },
  { id: "skill-srsAccel", name: "Tăng tốc lặp lại (SRS)", icon: "🚀", price: 250, type: "consumable", powerUpId: "srsAccel", rarity: "rare", desc: "Tăng tốc SRS — interval +1 bậc cho mọi card hôm nay." },
  { id: "skill-quizMaster", name: "Bậc thầy trắc nghiệm", icon: "🧠", price: 180, type: "consumable", powerUpId: "quizMaster", rarity: "rare", desc: "+10% gợi ý chính xác trong quiz phiên tiếp." },
  { id: "skill-speedReader", name: "Đọc thần tốc", icon: "📖", price: 150, type: "consumable", powerUpId: "speedReader", rarity: "common", desc: "Bonus XP cho bài đọc hoàn thành nhanh." },
  { id: "skill-gachaLuck", name: "Tăng may mắn Gacha", icon: "🍀", price: 350, type: "consumable", powerUpId: "gachaLuck", rarity: "epic", desc: "Tăng tỷ lệ rare+ trong 3 lần gacha tiếp." },
  { id: "skill-xpRain", name: "Mưa điểm", icon: "🌧️", price: 400, type: "consumable", powerUpId: "xpRain", rarity: "epic", desc: "Mọi câu trả lời đều splash bonus XP trong 30 phút." },
  // ── Tool Unlocks ──
  { id: "tool-advanced-analytics", name: "Công cụ: Phân tích nâng cao", icon: "📊", price: 500, type: "unlock", unlockKey: "tool-advanced-analytics", rarity: "epic", desc: "Mở khóa bảng phân tích chi tiết: biểu đồ, xu hướng, dự đoán." },
  { id: "tool-custom-quiz", name: "Công cụ: Tạo trắc nghiệm tùy chỉnh", icon: "🎯", price: 400, type: "unlock", unlockKey: "tool-custom-quiz", rarity: "rare", desc: "Tạo quiz tùy chỉnh — chọn section, số câu, độ khó." },
  { id: "tool-study-calendar", name: "Công cụ: Lịch học tập", icon: "📅", price: 350, type: "unlock", unlockKey: "tool-study-calendar", rarity: "rare", desc: "Lịch học với biểu đồ nhiệt — theo dõi mỗi ngày." },
  { id: "tool-grammar-compare", name: "Công cụ: So sánh ngữ pháp", icon: "⚖️", price: 300, type: "unlock", unlockKey: "tool-grammar-compare", rarity: "rare", desc: "So sánh 2 mẫu ngữ pháp tương tự song song." },
  { id: "tool-vocab-network", name: "Công cụ: Bản đồ từ vựng", icon: "🕸️", price: 500, type: "unlock", unlockKey: "tool-vocab-network", rarity: "epic", desc: "Bản đồ mạng từ vựng — xem mối quan hệ giữa các từ." },
  { id: "tool-streak-recovery", name: "Công cụ: Phục hồi chuỗi", icon: "🔄", price: 600, type: "unlock", unlockKey: "tool-streak-recovery", rarity: "epic", desc: "Phục hồi streak đã mất lên đến 7 ngày." },
  { id: "tool-export-pdf", name: "Công cụ: Xuất PDF", icon: "📄", price: 400, type: "unlock", unlockKey: "tool-export-pdf", rarity: "rare", desc: "Xuất bookmarks và ghi chú thành PDF đẹp mắt." },
  // ══════════════════════════════════════════════════════════
  // ── THEMED BUNDLES ──
  // ══════════════════════════════════════════════════════════
  { id: "bundle-dragon-set", name: "🐉 Bộ Rồng", icon: "🐉", price: 4500, type: "bundle", rarity: "legendary", bundle: [{ powerUpId: "xpBoost", amount: 5 }], bundleUnlocks: ["theme-neon-dragon", "textcolor-fire", "entrance-neon-flash", "particle-embers"], desc: "Bộ Rồng: Theme + Text + Entrance + Particle + 5× XP Boost. Tiết kiệm 2000 coin!" },
  { id: "bundle-sakura-set", name: "🌸 Bộ Sakura", icon: "🌸", price: 3e3, type: "bundle", rarity: "epic", bundle: [{ powerUpId: "hintPack", amount: 5 }], bundleUnlocks: ["theme-neon-sakura", "textcolor-cherry", "entrance-sakura-spin", "particle-sakura"], desc: "Bộ Sakura: Theme + Text + Entrance + Particle + 5× Hint. Tiết kiệm 1500 coin!" },
  { id: "bundle-cyber-set", name: "🤖 Bộ Công nghệ", icon: "🤖", price: 3500, type: "bundle", rarity: "epic", bundle: [{ powerUpId: "xpBoost", amount: 3 }], bundleUnlocks: ["theme-cyber-chrome", "textcolor-frost", "entrance-glitch", "particle-matrix"], desc: "Bộ Cyber: Theme + Text + Entrance + Particle + 3× XP Boost." },
  { id: "bundle-ocean-set", name: "🌊 Bộ Đại dương", icon: "🌊", price: 2500, type: "bundle", rarity: "rare", bundle: [{ powerUpId: "streakFreeze", amount: 3 }], bundleUnlocks: ["theme-electric-blue", "textcolor-ocean", "entrance-wave", "particle-bubbles"], desc: "Bộ Ocean: Theme + Text + Entrance + Particle + 3× Streak Freeze." },
  { id: "bundle-golden-set", name: "👑 Bộ Vàng rồng", icon: "👑", price: 5e3, type: "bundle", rarity: "legendary", bundle: [{ powerUpId: "doubleCoins", amount: 5 }], bundleUnlocks: ["theme-starlight", "textcolor-gold", "entrance-shine", "particle-sparkles"], desc: "Bộ Vàng Ròng: Theme + Text + Entrance + Particle + 5× Double Coin. Cực VIP!" },
  { id: "bundle-frost-set", name: "❄️ Bộ Băng giá", icon: "❄️", price: 2800, type: "bundle", rarity: "epic", bundle: [{ powerUpId: "streakFreeze", amount: 5 }], bundleUnlocks: ["theme-midnight-neon", "textcolor-frost", "entrance-thunder", "particle-snow"], desc: "Bộ Băng Giá: Theme + Text + Entrance + Particle + 5× Freeze." },
  { id: "bundle-cosmic-set", name: "🪐 Bộ Vũ trụ", icon: "🪐", price: 4e3, type: "bundle", rarity: "legendary", bundle: [{ powerUpId: "rainbowOrb", amount: 2 }], bundleUnlocks: ["theme-holographic", "textcolor-cosmic", "entrance-cosmic-warp", "particle-cosmic-dust"], desc: "Bộ Vũ Trụ: Theme + Text + Entrance + Particle + 2× Rainbow Orb!" },
  { id: "bundle-shadow-set", name: "🌑 Bộ Bóng tối", icon: "🌑", price: 3200, type: "bundle", rarity: "epic", bundle: [{ powerUpId: "xpBoost", amount: 3 }], bundleUnlocks: ["theme-cyber-violet", "textcolor-blood", "entrance-pixelate", "particle-fireflies"], desc: "Bộ Bóng Tối: Theme + Text + Entrance + Particle + 3× XP Boost." },
  { id: "bundle-neon-set", name: "💡 Bộ Neon", icon: "💡", price: 3e3, type: "bundle", rarity: "epic", bundle: [{ powerUpId: "coinMagnet", amount: 3 }], bundleUnlocks: ["theme-synthwave", "textcolor-neon-pink", "entrance-matrix", "particle-stars"], desc: "Bộ Neon: Theme + Text + Entrance + Particle + 3× Coin Magnet." },
  { id: "bundle-starter-deluxe", name: "🎁 Gói Khởi đầu Đặc biệt", icon: "🎁", price: 1500, type: "bundle", rarity: "rare", bundle: [{ powerUpId: "hintPack", amount: 10 }, { powerUpId: "xpBoost", amount: 5 }, { powerUpId: "streakFreeze", amount: 5 }, { powerUpId: "doubleCoins", amount: 5 }], desc: "Gói khởi đầu XL: 25 power-up combo! Tiết kiệm 800 coin." },
  // ══════════════════════════════════════════════════════════
  // ── EXPANDED SHOP — STICKERS (Japanese Culture) ──
  // ══════════════════════════════════════════════════════════
  { id: "sticker-ramen", name: "Nhãn dán: Ramen", icon: "🍜", price: 50, type: "unlock", unlockKey: "sticker-ramen", rarity: "common", desc: "Sticker mì ramen nóng hổi." },
  { id: "sticker-sushi", name: "Nhãn dán: Sushi", icon: "🍣", price: 50, type: "unlock", unlockKey: "sticker-sushi", rarity: "common", desc: "Sticker sushi tươi ngon." },
  { id: "sticker-dango", name: "Nhãn dán: Dango", icon: "🍡", price: 50, type: "unlock", unlockKey: "sticker-dango", rarity: "common", desc: "Sticker dango ba màu ngọt ngào." },
  { id: "sticker-bento", name: "Nhãn dán: Bento", icon: "🍱", price: 50, type: "unlock", unlockKey: "sticker-bento", rarity: "common", desc: "Sticker hộp cơm bento xinh xắn." },
  { id: "sticker-matcha", name: "Nhãn dán: Matcha", icon: "🍵", price: 60, type: "unlock", unlockKey: "sticker-matcha", rarity: "common", desc: "Sticker trà matcha truyền thống." },
  { id: "sticker-tanuki", name: "Nhãn dán: Tanuki", icon: "🦝", price: 80, type: "unlock", unlockKey: "sticker-tanuki", rarity: "rare", desc: "Sticker Tanuki — linh vật may mắn." },
  { id: "sticker-koinobori", name: "Nhãn dán: Koinobori", icon: "🎏", price: 80, type: "unlock", unlockKey: "sticker-koinobori", rarity: "rare", desc: "Sticker cờ cá chép — ngày bé trai." },
  { id: "sticker-daruma", name: "Nhãn dán: Daruma", icon: "🎯", price: 80, type: "unlock", unlockKey: "sticker-daruma", rarity: "rare", desc: "Sticker búp bê Daruma may mắn." },
  { id: "sticker-shinkansen", name: "Nhãn dán: Shinkansen", icon: "🚄", price: 60, type: "unlock", unlockKey: "sticker-shinkansen", rarity: "common", desc: "Sticker tàu Shinkansen siêu tốc." },
  { id: "sticker-kimono", name: "Nhãn dán: Kimono", icon: "👘", price: 80, type: "unlock", unlockKey: "sticker-kimono", rarity: "rare", desc: "Sticker kimono truyền thống tuyệt đẹp." },
  { id: "sticker-temple", name: "Nhãn dán: Đền chùa", icon: "🏯", price: 80, type: "unlock", unlockKey: "sticker-temple", rarity: "rare", desc: "Sticker đền chùa Nhật Bản cổ kính." },
  { id: "sticker-takoyaki", name: "Nhãn dán: Takoyaki", icon: "🐙", price: 50, type: "unlock", unlockKey: "sticker-takoyaki", rarity: "common", desc: "Sticker takoyaki — bánh bạch tuộc." },
  { id: "sticker-mochi", name: "Nhãn dán: Mochi", icon: "🍡", price: 50, type: "unlock", unlockKey: "sticker-mochi", rarity: "common", desc: "Sticker bánh mochi dẻo thơm." },
  { id: "sticker-maneki", name: "Sticker: Maneki Neko", icon: "🐱", price: 100, type: "unlock", unlockKey: "sticker-maneki", rarity: "rare", desc: "Sticker mèo thần tài vẫy tay." },
  { id: "sticker-tengu", name: "Nhãn dán: Tengu", icon: "👺", price: 120, type: "unlock", unlockKey: "sticker-tengu", rarity: "rare", desc: "Sticker mặt nạ Tengu — yêu quái." },
  { id: "sticker-kappa", name: "Nhãn dán: Kappa", icon: "🥒", price: 100, type: "unlock", unlockKey: "sticker-kappa", rarity: "rare", desc: "Sticker Kappa — quỷ nước Nhật Bản." },
  { id: "sticker-taiko", name: "Nhãn dán: Taiko", icon: "🥁", price: 60, type: "unlock", unlockKey: "sticker-taiko", rarity: "common", desc: "Sticker trống Taiko truyền thống." },
  { id: "sticker-wagasa", name: "Nhãn dán: Ô Wagasa", icon: "☂️", price: 80, type: "unlock", unlockKey: "sticker-wagasa", rarity: "rare", desc: "Sticker ô Wagasa truyền thống đầy màu sắc." },
  { id: "sticker-sensu", name: "Nhãn dán: Quạt Sensu", icon: "🪭", price: 80, type: "unlock", unlockKey: "sticker-sensu", rarity: "rare", desc: "Sticker quạt gấp Sensu thanh lịch." },
  { id: "sticker-shuriken", name: "Nhãn dán: Phi tiêu Shuriken", icon: "🌟", price: 100, type: "unlock", unlockKey: "sticker-shuriken", rarity: "rare", desc: "Sticker phi tiêu shuriken sắc bén." },
  { id: "sticker-katana", name: "Nhãn dán: Kiếm Katana", icon: "⚔️", price: 120, type: "unlock", unlockKey: "sticker-katana", rarity: "rare", desc: "Sticker kiếm katana huyền thoại." },
  { id: "sticker-kokeshi", name: "Nhãn dán: Búp bê Kokeshi", icon: "🎎", price: 80, type: "unlock", unlockKey: "sticker-kokeshi", rarity: "rare", desc: "Sticker búp bê Kokeshi gỗ xinh." },
  { id: "sticker-lucky-cat-gold", name: "Nhãn dán: Mèo thần tài vàng", icon: "🐱", price: 200, type: "unlock", unlockKey: "sticker-lucky-cat-gold", rarity: "epic", desc: "Sticker mèo thần tài vàng animated! Hiếm." },
  { id: "sticker-dragon-jp", name: "Nhãn dán: Rồng Ryū", icon: "🐉", price: 250, type: "unlock", unlockKey: "sticker-dragon-jp", rarity: "epic", desc: "Sticker rồng Ryū — oai hùng Nhật Bản." },
  { id: "sticker-origami", name: "Nhãn dán: Hạc giấy Origami", icon: "🦢", price: 100, type: "unlock", unlockKey: "sticker-origami", rarity: "rare", desc: "Sticker hạc giấy origami — 1000 ước nguyện." },
  // ── EXPANDED SHOP — TITLES (Japanese) ──
  // ══════════════════════════════════════════════════════════
  { id: "unlock-title-gakusei", name: "Danh hiệu: 学生", icon: "📚", price: 150, type: "unlock", unlockKey: "title-gakusei", rarity: "common", desc: 'Danh hiệu "Học sinh" — khởi đầu hành trình.' },
  { id: "unlock-title-yuusha", name: "Danh hiệu: 勇者", icon: "⚔️", price: 300, type: "unlock", unlockKey: "title-yuusha", rarity: "rare", desc: 'Danh hiệu "Dũng sĩ" — dũng cảm chinh phục.' },
  { id: "unlock-title-tensai", name: "Danh hiệu: 天才", icon: "🧠", price: 500, type: "unlock", unlockKey: "title-tensai", rarity: "epic", desc: 'Danh hiệu "Thiên tài" tiếng Nhật.' },
  { id: "unlock-title-mahou", name: "Danh hiệu: 魔法使い", icon: "🪄", price: 400, type: "unlock", unlockKey: "title-mahou", rarity: "rare", desc: 'Danh hiệu "Pháp sư" — ma thuật ngôn ngữ.' },
  { id: "unlock-title-ryuu", name: "Danh hiệu: 龍の子", icon: "🐉", price: 600, type: "unlock", unlockKey: "title-ryuu", rarity: "epic", desc: 'Danh hiệu "Con Rồng" — sức mạnh vô hạn.' },
  { id: "unlock-title-hime", name: "Danh hiệu: 姫", icon: "👸", price: 350, type: "unlock", unlockKey: "title-hime", rarity: "rare", desc: 'Danh hiệu "Công chúa" thanh lịch.' },
  { id: "unlock-title-oji", name: "Danh hiệu: 王子", icon: "🤴", price: 350, type: "unlock", unlockKey: "title-oji", rarity: "rare", desc: 'Danh hiệu "Hoàng tử" cao sang.' },
  { id: "unlock-title-senshi", name: "Danh hiệu: 戦士", icon: "🛡️", price: 300, type: "unlock", unlockKey: "title-senshi", rarity: "rare", desc: 'Danh hiệu "Chiến binh" — đấu sĩ ngôn ngữ.' },
  { id: "unlock-title-ninja", name: "Danh hiệu: 忍者", icon: "🥷", price: 350, type: "unlock", unlockKey: "title-ninja", rarity: "rare", desc: 'Danh hiệu "Ninja" — bí ẩn và nhanh nhẹn.' },
  { id: "unlock-title-kami", name: "Danh hiệu: 神", icon: "⛩️", price: 1500, type: "unlock", unlockKey: "title-kami", rarity: "legendary", desc: 'Danh hiệu "Thần" — đỉnh cao tối thượng. Cực hiếm!' },
  { id: "unlock-title-kenja", name: "Danh hiệu: 賢者", icon: "🧙", price: 800, type: "unlock", unlockKey: "title-kenja", rarity: "epic", desc: 'Danh hiệu "Hiền giả" — trí tuệ uyên thâm.' },
  { id: "unlock-title-okami", name: "Danh hiệu: 狼", icon: "🐺", price: 400, type: "unlock", unlockKey: "title-okami", rarity: "rare", desc: 'Danh hiệu "Sói" — bản năng hoang dã.' },
  { id: "unlock-title-sakura", name: "Danh hiệu: 桜の守護者", icon: "🌸", price: 500, type: "unlock", unlockKey: "title-sakura-guardian", rarity: "epic", desc: 'Danh hiệu "Người bảo vệ Sakura".' },
  { id: "unlock-title-taiyo", name: "Danh hiệu: 太陽", icon: "☀️", price: 450, type: "unlock", unlockKey: "title-taiyo", rarity: "epic", desc: 'Danh hiệu "Mặt trời" — rạng rỡ tỏa sáng.' },
  { id: "unlock-title-tsuki", name: "Danh hiệu: 月", icon: "🌙", price: 450, type: "unlock", unlockKey: "title-tsuki", rarity: "epic", desc: 'Danh hiệu "Mặt trăng" — huyền bí lặng lẽ.' },
  // ══════════════════════════════════════════════════════════
  // ── EXPANDED SHOP — AVATARS ──
  // ══════════════════════════════════════════════════════════
  { id: "unlock-avatar-samurai", name: "Ảnh đại diện: Samurai", icon: "⚔️", price: 300, type: "unlock", unlockKey: "avatar-samurai", rarity: "rare", desc: "Hình đại diện Samurai oai hùng." },
  { id: "unlock-avatar-geisha", name: "Ảnh đại diện: Geisha", icon: "👩", price: 350, type: "unlock", unlockKey: "avatar-geisha", rarity: "rare", desc: "Hình đại diện Geisha thanh nhã." },
  { id: "unlock-avatar-sumo", name: "Ảnh đại diện: Sumo", icon: "🏋️", price: 300, type: "unlock", unlockKey: "avatar-sumo", rarity: "rare", desc: "Hình đại diện Sumo — sức mạnh vô đối." },
  { id: "unlock-avatar-miko", name: "Ảnh đại diện: Miko", icon: "⛩️", price: 350, type: "unlock", unlockKey: "avatar-miko", rarity: "rare", desc: "Hình đại diện Miko — nữ thần chức đền." },
  { id: "unlock-avatar-ronin", name: "Ảnh đại diện: Ronin", icon: "🗡️", price: 400, type: "unlock", unlockKey: "avatar-ronin", rarity: "epic", desc: "Hình đại diện Ronin — lãng sĩ cô đơn." },
  { id: "unlock-avatar-tengu", name: "Ảnh đại diện: Tengu", icon: "👺", price: 500, type: "unlock", unlockKey: "avatar-tengu", rarity: "epic", desc: "Hình đại diện Tengu — quỷ rừng linh thiêng." },
  { id: "unlock-avatar-koi", name: "Ảnh đại diện: Cá Koi", icon: "🐟", price: 250, type: "unlock", unlockKey: "avatar-koi", rarity: "rare", desc: "Hình đại diện cá Koi — biểu tượng kiên trì." },
  { id: "unlock-avatar-panda", name: "Ảnh đại diện: Gấu trúc", icon: "🐼", price: 200, type: "unlock", unlockKey: "avatar-panda", rarity: "common", desc: "Hình đại diện Panda đáng yêu." },
  { id: "unlock-avatar-owl", name: "Ảnh đại diện: Cú Fukurō", icon: "🦉", price: 300, type: "unlock", unlockKey: "avatar-owl", rarity: "rare", desc: "Hình đại diện Cú — biểu tượng trí tuệ." },
  { id: "unlock-avatar-rabbit", name: "Ảnh đại diện: Thỏ Usagi", icon: "🐰", price: 200, type: "unlock", unlockKey: "avatar-rabbit", rarity: "common", desc: "Hình đại diện thỏ Usagi — mặt trăng." },
  { id: "unlock-avatar-wolf", name: "Ảnh đại diện: Sói Ōkami", icon: "🐺", price: 400, type: "unlock", unlockKey: "avatar-wolf", rarity: "epic", desc: "Hình đại diện sói Ōkami — bảo hộ rừng." },
  { id: "unlock-avatar-robot", name: "Ảnh đại diện: Mecha", icon: "🤖", price: 500, type: "unlock", unlockKey: "avatar-mecha", rarity: "epic", desc: "Hình đại diện robot Mecha — công nghệ cao." },
  { id: "unlock-avatar-demon-king", name: "Ảnh đại diện: 魔王 Ma Vương", icon: "😈", price: 1500, type: "unlock", unlockKey: "avatar-demon-king", rarity: "legendary", anim: "flame", desc: "Avatar Ma Vương — hào quang đen lửa. Hiếm nhất!" },
  { id: "unlock-avatar-moon-princess", name: "Ảnh đại diện: Kaguya Công chúa Mặt trăng", icon: "🌙", price: 1200, type: "unlock", unlockKey: "avatar-kaguya", rarity: "legendary", anim: "shimmer-gold", desc: "Avatar Kaguya — công chúa mặt trăng rạng rỡ." },
  { id: "unlock-avatar-cherry-warrior", name: "Ảnh đại diện: Chiến binh Sakura 桜戦士", icon: "🌸", price: 800, type: "unlock", unlockKey: "avatar-cherry-warrior", rarity: "epic", anim: "petals", desc: "Avatar chiến binh hoa đào — cánh hoa tung bay." },
  // ══════════════════════════════════════════════════════════
  // ── EXPANDED SHOP — BADGES ──
  // ══════════════════════════════════════════════════════════
  { id: "unlock-badge-100vocab", name: "Huy hiệu: 100 Từ vựng", icon: "💯", price: 300, type: "unlock", unlockKey: "badge-100vocab", rarity: "rare", desc: "Huy hiệu 100 từ vựng — mốc đầu tiên." },
  { id: "unlock-badge-300vocab", name: "Huy hiệu: 300 Từ vựng", icon: "📖", price: 500, type: "unlock", unlockKey: "badge-300vocab", rarity: "epic", desc: "Huy hiệu 300 từ vựng — trung cấp." },
  { id: "unlock-badge-500vocab", name: "Huy hiệu: 500 Từ vựng", icon: "🏆", price: 800, type: "unlock", unlockKey: "badge-500vocab", rarity: "legendary", desc: "Huy hiệu 500 từ vựng — bậc thầy! Cực hiếm." },
  { id: "unlock-badge-quiz-ace", name: "Huy hiệu: Bậc thầy Trắc nghiệm", icon: "🎯", price: 400, type: "unlock", unlockKey: "badge-quiz-ace", rarity: "rare", desc: "Huy hiệu Tay Quiz — 100 quiz hoàn hảo." },
  { id: "unlock-badge-speedster", name: "Huy hiệu: Tốc độ", icon: "⚡", price: 350, type: "unlock", unlockKey: "badge-speedster", rarity: "rare", desc: "Huy hiệu Tốc Độ — trả lời dưới 3 giây." },
  { id: "unlock-badge-perfect-week", name: "Huy hiệu: Tuần hoàn hảo", icon: "🌟", price: 500, type: "unlock", unlockKey: "badge-perfect-week", rarity: "epic", desc: "Huy hiệu Tuần Hoàn Hảo — 7 ngày streak." },
  { id: "unlock-badge-month-warrior", name: "Huy hiệu: Chiến binh tháng", icon: "📅", price: 1e3, type: "unlock", unlockKey: "badge-month-warrior", rarity: "legendary", desc: "Huy hiệu Chiến Binh Tháng — 30 ngày streak!" },
  { id: "unlock-badge-kanji-master", name: "Huy hiệu: Bậc thầy Kanji", icon: "㊗️", price: 600, type: "unlock", unlockKey: "badge-kanji-master", rarity: "epic", desc: "Huy hiệu Bậc Thầy Kanji — 300+ kanji." },
  { id: "unlock-badge-grammar-guru", name: "Huy hiệu: Guru Ngữ pháp", icon: "📝", price: 600, type: "unlock", unlockKey: "badge-grammar-guru", rarity: "epic", desc: "Huy hiệu Guru Ngữ Pháp — 100+ mẫu câu." },
  { id: "unlock-badge-night-owl", name: "Huy hiệu: Cú đêm", icon: "🦉", price: 300, type: "unlock", unlockKey: "badge-night-owl", rarity: "rare", desc: "Huy hiệu Cú Đêm — học sau 23:00." },
  { id: "unlock-badge-early-bird", name: "Huy hiệu: Chim sớm", icon: "🌅", price: 300, type: "unlock", unlockKey: "badge-early-bird", rarity: "rare", desc: "Huy hiệu Chim Sớm — học trước 7:00." },
  { id: "unlock-badge-collector", name: "Huy hiệu: Nhà sưu tập", icon: "🗃️", price: 700, type: "unlock", unlockKey: "badge-collector", rarity: "epic", desc: "Huy hiệu Nhà Sưu Tập — 50+ items." },
  { id: "unlock-badge-whale", name: "Huy hiệu: Cá voi", icon: "🐋", price: 2e3, type: "unlock", unlockKey: "badge-whale", rarity: "legendary", desc: "Huy hiệu Cá Voi — tiêu 10000+ coin. Siêu hiếm!" },
  { id: "unlock-badge-phoenix-rise", name: "Badge: Phoenix Rise", icon: "🔥", price: 500, type: "unlock", unlockKey: "badge-phoenix-rise", rarity: "epic", anim: "flame", desc: "Huy hiệu Phượng Hoàng Hồi Sinh — recover streak." },
  { id: "unlock-badge-ice-king", name: "Badge: Ice King", icon: "❄️", price: 500, type: "unlock", unlockKey: "badge-ice-king", rarity: "epic", anim: "frost", desc: "Huy hiệu Vua Băng Giá — bình tĩnh vượt khó." },
  // ══════════════════════════════════════════════════════════
  // ── EXPANDED SHOP — SKILLS (Permanent Passives) ──
  // ══════════════════════════════════════════════════════════
  { id: "skill-streakBonus10", name: "Kỹ năng: Thưởng chuỗi +10%", icon: "🔥", price: 1e3, type: "unlock", unlockKey: "skill-streakBonus10", rarity: "epic", desc: "+10% vĩnh viễn coin từ streak thưởng." },
  { id: "skill-quizAccuracy5", name: "Kỹ năng: Độ chính xác trắc nghiệm +5%", icon: "🎯", price: 700, type: "unlock", unlockKey: "skill-quizAccuracy5", rarity: "rare", desc: "Hiện gợi ý nhỏ +5% chính xác trong quiz." },
  { id: "skill-srsBoost", name: "Kỹ năng: Tăng hiệu quả SRS", icon: "🧠", price: 900, type: "unlock", unlockKey: "skill-srsBoost", rarity: "epic", desc: "SRS interval tăng hiệu quả +10% vĩnh viễn." },
  { id: "skill-gachaLuckPerm", name: "Kỹ năng: May mắn Gacha +3%", icon: "🍀", price: 1500, type: "unlock", unlockKey: "skill-gachaLuckPerm", rarity: "legendary", desc: "+3% tỷ lệ rare+ vĩnh viễn trong gacha." },
  { id: "skill-shopDiscount5", name: "Kỹ năng: Giảm giá shop 5%", icon: "🏷️", price: 1200, type: "unlock", unlockKey: "skill-shopDiscount5", rarity: "epic", desc: "Giảm 5% vĩnh viễn giá mua trong shop." },
  { id: "skill-bonusCoinQuiz", name: "Kỹ năng: Xu mỗi câu trắc nghiệm +2", icon: "🪙", price: 800, type: "unlock", unlockKey: "skill-bonusCoinQuiz", rarity: "rare", desc: "+2 coin bonus mỗi lần quiz đúng." },
  { id: "skill-autoReview", name: "Kỹ năng: Tự động ôn tập", icon: "🔄", price: 600, type: "unlock", unlockKey: "skill-autoReview", rarity: "rare", desc: "Tự gợi ý ôn tập từ SRS hằng ngày." },
  { id: "skill-doubleDailyReward", name: "Kỹ năng: Nhân đôi điểm danh ngày", icon: "📅", price: 2e3, type: "unlock", unlockKey: "skill-doubleDailyReward", rarity: "legendary", desc: "Nhân đôi vĩnh viễn phần thưởng điểm danh!" },
  { id: "skill-extraLife", name: "Kỹ năng: Thêm lượt chơi", icon: "💖", price: 700, type: "unlock", unlockKey: "skill-extraLife", rarity: "rare", desc: "+1 mạng thêm mỗi quiz (trả lời sai miễn phí)." },
  { id: "skill-multiCombo", name: "Kỹ năng: Bắt đầu chuỗi từ x2", icon: "🔗", price: 1e3, type: "unlock", unlockKey: "skill-multiCombo", rarity: "epic", desc: "Combo multiplier bắt đầu từ ×2 thay vì ×1." },
  // ══════════════════════════════════════════════════════════
  // ── EXPANDED SHOP — CARD STYLES ──
  // ══════════════════════════════════════════════════════════
  { id: "unlock-card-paper", name: "Kiểu thẻ: Giấy Washi", icon: "📜", price: 200, type: "unlock", unlockKey: "card-washi", rarity: "common", desc: "Flashcard phong cách giấy washi Nhật Bản." },
  { id: "unlock-card-bamboo", name: "Kiểu thẻ: Tre xanh", icon: "🎋", price: 250, type: "unlock", unlockKey: "card-bamboo", rarity: "rare", desc: "Flashcard viền tre xanh thanh tao." },
  { id: "unlock-card-ink", name: "Kiểu thẻ: Mực thủy mặc", icon: "🖌️", price: 300, type: "unlock", unlockKey: "card-ink", rarity: "rare", desc: "Flashcard mực Sumi-e — nghệ thuật thủy mặc." },
  { id: "unlock-card-zen", name: "Kiểu thẻ: Thiền", icon: "☯️", price: 350, type: "unlock", unlockKey: "card-zen", rarity: "rare", desc: "Flashcard Thiền — tối giản, thanh tịnh." },
  { id: "unlock-card-matsuri", name: "Kiểu thẻ: Lễ hội", icon: "🏮", price: 400, type: "unlock", unlockKey: "card-matsuri", rarity: "epic", desc: "Flashcard lễ hội — rực rỡ sắc màu." },
  { id: "unlock-card-pixel", name: "Kiểu thẻ: Điểm ảnh", icon: "🎮", price: 350, type: "unlock", unlockKey: "card-pixel", rarity: "rare", desc: "Flashcard pixel art retro game." },
  { id: "unlock-card-cherry", name: "Kiểu thẻ: Hoa anh đào", icon: "🌸", price: 400, type: "unlock", unlockKey: "card-cherry", rarity: "epic", desc: "Flashcard hoa anh đào — viền hồng nhẹ nhàng." },
  { id: "unlock-card-wave", name: "Kiểu thẻ: Sóng Kanagawa", icon: "🌊", price: 500, type: "unlock", unlockKey: "card-wave", rarity: "epic", desc: "Flashcard sóng Kanagawa — huyền thoại ukiyo-e." },
  { id: "unlock-card-shadow", name: "Kiểu thẻ: Vực thẳm bóng tối", icon: "🌑", price: 600, type: "unlock", unlockKey: "card-shadow", rarity: "epic", anim: "shadow", desc: "Flashcard bóng tối — viền đen tím huyền bí." },
  { id: "unlock-card-diamond", name: "Kiểu thẻ: Kim cương", icon: "💠", price: 1e3, type: "unlock", unlockKey: "card-diamond", rarity: "legendary", anim: "shimmer-gold", desc: "Flashcard kim cương tỏa sáng — đỉnh cao!" },
  // ══════════════════════════════════════════════════════════
  // ── EXPANDED SHOP — THEMES (Japanese/Nature) ──
  // ══════════════════════════════════════════════════════════
  { id: "unlock-theme-zen-garden", name: "Giao diện: Vườn Zen", icon: "☯️", price: 350, type: "unlock", unlockKey: "theme-zen-garden", rarity: "rare", desc: "Giao diện vườn Zen — tĩnh lặng, cát trắng." },
  { id: "unlock-theme-bamboo-grove", name: "Giao diện: Rừng tre", icon: "🎋", price: 300, type: "unlock", unlockKey: "theme-bamboo-grove", rarity: "rare", desc: "Giao diện rừng tre — xanh mát huyền bí." },
  { id: "unlock-theme-onsen", name: "Giao diện: Onsen", icon: "♨️", price: 350, type: "unlock", unlockKey: "theme-onsen", rarity: "rare", desc: "Giao diện suối nước nóng — hơi nước nhẹ." },
  { id: "unlock-theme-matsuri", name: "Giao diện: Lễ hội Matsuri", icon: "🏮", price: 400, type: "unlock", unlockKey: "theme-matsuri-fest", rarity: "rare", desc: "Giao diện lễ hội — đèn lồng, pháo hoa." },
  { id: "unlock-theme-edo", name: "Giao diện: Thời đại Edo", icon: "🏯", price: 500, type: "unlock", unlockKey: "theme-edo", rarity: "epic", desc: "Giao diện thời Edo — hoài cổ samurai." },
  { id: "unlock-theme-snow-mountain", name: "Giao diện: Núi tuyết", icon: "🏔️", price: 400, type: "unlock", unlockKey: "theme-snow-mountain", rarity: "rare", desc: "Giao diện núi tuyết — Phú Sĩ trắng xóa." },
  { id: "unlock-theme-koi-pond", name: "Giao diện: Ao cá Koi", icon: "🐟", price: 350, type: "unlock", unlockKey: "theme-koi-pond", rarity: "rare", desc: "Giao diện ao cá Koi — yên bình sắc màu." },
  { id: "unlock-theme-spring-rain", name: "Giao diện: Mưa xuân", icon: "🌧️", price: 300, type: "unlock", unlockKey: "theme-spring-rain", rarity: "rare", desc: "Giao diện mưa xuân — thơ mộng dịu dàng." },
  { id: "unlock-theme-wisteria", name: "Giao diện: Hoa tử đằng", icon: "💜", price: 400, type: "unlock", unlockKey: "theme-wisteria", rarity: "rare", desc: "Giao diện hoa tử đằng — tím mộng ảo." },
  { id: "unlock-theme-volcano", name: "Giao diện: Núi lửa", icon: "🌋", price: 600, type: "unlock", unlockKey: "theme-volcano", rarity: "epic", desc: "Giao diện núi lửa — đỏ cam rực cháy." },
  { id: "unlock-theme-underwater", name: "Giao diện: Dưới lòng đại dương", icon: "🐠", price: 500, type: "unlock", unlockKey: "theme-underwater", rarity: "epic", desc: "Giao diện dưới nước — san hô và cá." },
  { id: "unlock-theme-northern-lights", name: "Giao diện: Cực quang phương Bắc", icon: "🌌", price: 700, type: "unlock", unlockKey: "theme-northern-lights", rarity: "epic", desc: "Giao diện bắc cực quang — xanh tím huyền ảo." },
  { id: "unlock-theme-steampunk", name: "Giao diện: Steampunk", icon: "⚙️", price: 600, type: "unlock", unlockKey: "theme-steampunk", rarity: "epic", desc: "Giao diện Steampunk — đồng hồ, bánh răng, hơi nước." },
  { id: "unlock-theme-candy", name: "Giao diện: Thế giới kẹo ngọt", icon: "🍬", price: 300, type: "unlock", unlockKey: "theme-candy", rarity: "rare", desc: "Giao diện kẹo ngọt — pastel sặc sỡ." },
  { id: "unlock-theme-noir", name: "Giao diện: Điện ảnh Noir", icon: "🎬", price: 500, type: "unlock", unlockKey: "theme-noir", rarity: "epic", desc: "Giao diện đen trắng noir — sang trọng bí ẩn." },
  // ══════════════════════════════════════════════════════════
  // ── EXPANDED SHOP — CONSUMABLES (Strategic) ──
  // ══════════════════════════════════════════════════════════
  { id: "perfectShield", name: "Khiên hoàn hảo", icon: "🛡️", price: 150, type: "consumable", powerUpId: "perfectShield", rarity: "rare", desc: "Không mất điểm khi trả lời sai 1 lần." },
  { id: "kanjiReveal", name: "Hiện Kanji", icon: "👁️", price: 70, type: "consumable", powerUpId: "kanjiReveal", rarity: "common", desc: "Hiện furigana cho 1 kanji khó trong quiz." },
  { id: "grammarHelper", name: "Trợ lý ngữ pháp", icon: "📝", price: 80, type: "consumable", powerUpId: "grammarHelper", rarity: "common", desc: "Gợi ý cấu trúc ngữ pháp trong quiz." },
  { id: "vocabHint", name: "Ngữ cảnh từ vựng", icon: "📋", price: 60, type: "consumable", powerUpId: "vocabHint", rarity: "common", desc: "Hiện câu ví dụ cho từ vựng." },
  { id: "instantReplay", name: "Xem lại ngay", icon: "⏪", price: 100, type: "consumable", powerUpId: "instantReplay", rarity: "rare", desc: "Xem lại câu hỏi vừa trả lời sai." },
  { id: "scoreMultiplier", name: "Nhân 1.5 điểm", icon: "📊", price: 200, type: "consumable", powerUpId: "scoreMultiplier", rarity: "rare", desc: "×1.5 điểm cho toàn bộ quiz tiếp theo." },
  { id: "categoryBan", name: "Chặn nhóm từ", icon: "🚫", price: 120, type: "consumable", powerUpId: "categoryBan", rarity: "rare", desc: "Loại bỏ 1 category từ vựng yếu trong quiz." },
  { id: "extraTime30", name: "Thêm 30 giây", icon: "⏰", price: 100, type: "consumable", powerUpId: "extraTime30", rarity: "common", desc: "+30 giây thêm cho quiz thời gian." },
  { id: "mysteryBox", name: "Hộp bí ẩn", icon: "❓", price: 200, type: "consumable", powerUpId: "mysteryBox", rarity: "epic", desc: "Mở hộp bí ẩn — nhận random power-up!" },
  { id: "megaXpBoost", name: "Siêu tăng điểm", icon: "💥", price: 300, type: "consumable", powerUpId: "megaXpBoost", rarity: "epic", desc: "×3 XP cho phiên học tiếp theo!" },
  { id: "resurrectionStone", name: "Đá hồi sinh", icon: "💎", price: 500, type: "consumable", powerUpId: "resurrectionStone", rarity: "legendary", desc: "Phục hồi full HP trong boss fight." },
  { id: "wisdomPotion", name: "Thuốc trí tuệ", icon: "🧪", price: 180, type: "consumable", powerUpId: "wisdomPotion", rarity: "rare", desc: "Hiện đáp án 1 trong 4 (loại 2 sai)." },
  { id: "talismanLuck", name: "Bùa hộ mệnh Omamori", icon: "🎐", price: 250, type: "consumable", powerUpId: "talismanLuck", rarity: "epic", desc: "Bùa may mắn Omamori — +30% bonus ngẫu nhiên." },
  { id: "ninja-scroll", name: "Cuộn thuật Ninja", icon: "📜", price: 400, type: "consumable", powerUpId: "ninjaScroll", rarity: "epic", desc: "Cuộn thuật ninja — skip 1 câu + giữ streak." },
  // ══════════════════════════════════════════════════════════
  // ── EXPANDED SHOP — ENTRANCES ──
  // ══════════════════════════════════════════════════════════
  { id: "unlock-entrance-samurai-slash", name: "Entrance: Samurai Slash", icon: "⚔️", price: 500, type: "unlock", unlockKey: "entrance-samurai-slash", rarity: "epic", desc: "Hiệu ứng đăng nhập: kiếm chém xuyên màn hình!" },
  { id: "unlock-entrance-ink-splash", name: "Entrance: Ink Splash", icon: "🖌️", price: 400, type: "unlock", unlockKey: "entrance-ink-splash", rarity: "rare", desc: "Hiệu ứng đăng nhập: mực Sumi-e tung tóe." },
  { id: "unlock-entrance-portal", name: "Entrance: Portal Open", icon: "🌀", price: 600, type: "unlock", unlockKey: "entrance-portal", rarity: "epic", desc: "Hiệu ứng đăng nhập: cổng không gian mở ra." },
  { id: "unlock-entrance-origami", name: "Entrance: Origami Unfold", icon: "🦢", price: 350, type: "unlock", unlockKey: "entrance-origami", rarity: "rare", desc: "Hiệu ứng đăng nhập: giấy gấp mở ra thành UI." },
  { id: "unlock-entrance-fire-ring", name: "Entrance: Fire Ring", icon: "🔥", price: 700, type: "unlock", unlockKey: "entrance-fire-ring", rarity: "epic", anim: "flame", desc: "Hiệu ứng đăng nhập: vòng lửa xoáy!" },
  { id: "unlock-entrance-ice-crack", name: "Entrance: Ice Crack", icon: "❄️", price: 500, type: "unlock", unlockKey: "entrance-ice-crack", rarity: "epic", anim: "frost", desc: "Hiệu ứng đăng nhập: băng nứt vỡ screen." },
  // ══════════════════════════════════════════════════════════
  // ── EXPANDED SHOP — PARTICLES ──
  // ══════════════════════════════════════════════════════════
  { id: "unlock-particle-lanterns", name: "Particle: Lanterns", icon: "🏮", price: 800, type: "unlock", unlockKey: "particle-lanterns", rarity: "epic", desc: "Đèn lồng bay lên nhẹ nhàng trong đêm." },
  { id: "unlock-particle-leaves", name: "Particle: Autumn Leaves", icon: "🍂", price: 600, type: "unlock", unlockKey: "particle-leaves", rarity: "rare", desc: "Lá vàng thu rơi nhẹ bay theo gió." },
  { id: "unlock-particle-confetti", name: "Particle: Confetti", icon: "🎊", price: 500, type: "unlock", unlockKey: "particle-confetti", rarity: "rare", desc: "Giấy confetti nhiều màu bay tứ phía." },
  { id: "unlock-particle-hearts", name: "Particle: Hearts", icon: "💕", price: 700, type: "unlock", unlockKey: "particle-hearts", rarity: "epic", desc: "Trái tim bay lên đầy lãng mạn." },
  { id: "unlock-particle-cherry-petals", name: "Particle: Cherry Petals Rain", icon: "🌸", price: 1e3, type: "unlock", unlockKey: "particle-cherry-petals-rain", rarity: "epic", anim: "petals", desc: "Mưa cánh hoa anh đào dày đặc tuyệt đẹp." },
  { id: "unlock-particle-lightning-bolts", name: "Particle: Lightning Bolts", icon: "⚡", price: 900, type: "unlock", unlockKey: "particle-lightning-bolts", rarity: "epic", anim: "lightning", desc: "Tia sét ngẫu nhiên nháy quanh màn hình." },
  // ── INTERACTIVE TOUCH PARTICLES ──
  { id: "unlock-particle-touch-stars", name: "Particle: Touch Stars", icon: "⭐", price: 650, type: "unlock", unlockKey: "particle-touch-stars", rarity: "rare", desc: "Chạm vào màn hình để bắn ra cụm sao lấp lánh." },
  { id: "unlock-particle-touch-sakura", name: "Particle: Touch Sakura", icon: "🌸", price: 700, type: "unlock", unlockKey: "particle-touch-sakura", rarity: "rare", desc: "Mỗi lần chạm sẽ bung nở cánh hoa anh đào quanh ngón tay." },
  { id: "unlock-particle-touch-notes", name: "Particle: Touch Notes", icon: "🎵", price: 850, type: "unlock", unlockKey: "particle-touch-notes", rarity: "epic", desc: "Nốt nhạc bay lên theo từng cú chạm, hợp với vibe arcade/anime." },
  { id: "unlock-particle-touch-kanji", name: "Particle: Touch Kanji Burst", icon: "漢", price: 950, type: "unlock", unlockKey: "particle-touch-kanji", rarity: "epic", desc: "Bùng nổ ký tự Nhật mỗi khi chạm màn hình." },
  { id: "unlock-particle-touch-coin-burst", name: "Particle: Touch Coin Burst", icon: "🪙", price: 900, type: "unlock", unlockKey: "particle-touch-coin-burst", rarity: "epic", desc: "Hiệu ứng đồng xu và ký hiệu ¥ bật tung khi chạm." },
  { id: "unlock-particle-touch-hearts", name: "Particle: Touch Hearts", icon: "💗", price: 600, type: "unlock", unlockKey: "particle-touch-hearts", rarity: "rare", desc: "Trái tim hồng bung nở theo từng cú chạm." },
  { id: "unlock-particle-touch-fire", name: "Particle: Touch Fire", icon: "🔥", price: 850, type: "unlock", unlockKey: "particle-touch-fire", rarity: "epic", desc: "Ngọn lửa và sao băng bùng cháy khi chạm màn hình." },
  { id: "unlock-particle-touch-snow", name: "Particle: Touch Snow", icon: "❄️", price: 600, type: "unlock", unlockKey: "particle-touch-snow", rarity: "rare", desc: "Bông tuyết trắng lấp lánh bay ra khi chạm." },
  { id: "unlock-particle-touch-lightning", name: "Particle: Touch Lightning", icon: "⚡", price: 1200, type: "unlock", unlockKey: "particle-touch-lightning", rarity: "legendary", desc: "Tia sét vàng xanh chớp nhoáng mỗi khi chạm — cực ngầu!" },
  { id: "unlock-particle-touch-emoji", name: "Particle: Touch Emoji Party", icon: "🎉", price: 800, type: "unlock", unlockKey: "particle-touch-emoji", rarity: "epic", desc: "Bữa tiệc emoji vui nhộn bay tung tóe theo ngón tay." },
  { id: "unlock-particle-touch-leaves", name: "Particle: Touch Autumn", icon: "🍂", price: 550, type: "unlock", unlockKey: "particle-touch-leaves", rarity: "rare", desc: "Lá vàng mùa thu rơi nhẹ nhàng theo mỗi cú chạm." },
  { id: "unlock-particle-touch-bubbles", name: "Particle: Touch Bubbles", icon: "🫧", price: 550, type: "unlock", unlockKey: "particle-touch-bubbles", rarity: "rare", desc: "Bong bóng lung linh bay lên khi chạm màn hình." },
  // ══════════════════════════════════════════════════════════
  // ── EXPANDED SHOP — EFFECTS ──
  // ══════════════════════════════════════════════════════════
  { id: "unlock-effect-level-up-flame", name: "Hiệu ứng: Lửa tăng cấp", icon: "🔥", price: 400, type: "unlock", unlockKey: "effect-level-up-flame", rarity: "rare", desc: "Ngọn lửa bùng khi lên level." },
  { id: "unlock-effect-streak-aura", name: "Hiệu ứng: Hào quang chuỗi", icon: "💫", price: 500, type: "unlock", unlockKey: "effect-streak-aura", rarity: "epic", desc: "Hào quang quanh avatar khi streak > 5." },
  { id: "unlock-effect-perfect-score", name: "Hiệu ứng: Điểm tuyệt đối", icon: "💯", price: 600, type: "unlock", unlockKey: "effect-perfect-score", rarity: "epic", desc: "Cầu vồng + confetti khi quiz điểm tuyệt đối." },
  { id: "unlock-effect-coin-shower", name: "Hiệu ứng: Mưa đồng xu", icon: "🪙", price: 400, type: "unlock", unlockKey: "effect-coin-shower", rarity: "rare", desc: "Mưa đồng xu rơi khi nhận thưởng." },
  { id: "unlock-effect-kanji-glow", name: "Hiệu ứng: Kanji phát sáng", icon: "✨", price: 350, type: "unlock", unlockKey: "effect-kanji-glow", rarity: "rare", desc: "Kanji phát sáng khi học xong." },
  { id: "unlock-effect-combo-burst", name: "Hiệu ứng: Bùng nổ chuỗi", icon: "💥", price: 500, type: "unlock", unlockKey: "effect-combo-burst", rarity: "epic", desc: "Bùng nổ sắc màu khi combo ×7+." },
  { id: "unlock-effect-zen-ripple", name: "Hiệu ứng: Sóng gợn Thiền", icon: "☯️", price: 350, type: "unlock", unlockKey: "effect-zen-ripple", rarity: "rare", desc: "Gợn sóng zen khi hoàn thành SRS review." },
  { id: "unlock-effect-aurora-wave", name: "Hiệu ứng: Sóng cực quang", icon: "🌌", price: 800, type: "unlock", unlockKey: "effect-aurora-wave", rarity: "epic", anim: "aurora", desc: "Sóng cực quang quét qua khi streak ×10." },
  // ══════════════════════════════════════════════════════════
  // ── EXPANDED SHOP — TEXT COLORS ──
  // ══════════════════════════════════════════════════════════
  { id: "unlock-textcolor-mint", name: "Text: Mint Fresh", icon: "🌿", price: 250, type: "unlock", unlockKey: "textcolor-mint", rarity: "rare", desc: "Tên hiển thị gradient xanh bạc hà tươi mát." },
  { id: "unlock-textcolor-rose", name: "Text: Rose Gold", icon: "🌹", price: 350, type: "unlock", unlockKey: "textcolor-rose", rarity: "epic", desc: "Tên hiển thị gradient vàng hồng lấp lánh." },
  { id: "unlock-textcolor-lavender", name: "Text: Lavender", icon: "💐", price: 250, type: "unlock", unlockKey: "textcolor-lavender", rarity: "rare", desc: "Tên hiển thị gradient tím oải hương." },
  { id: "unlock-textcolor-peach", name: "Text: Peach Glow", icon: "🍑", price: 250, type: "unlock", unlockKey: "textcolor-peach", rarity: "rare", desc: "Tên hiển thị gradient đào hồng ấm." },
  { id: "unlock-textcolor-shadow", name: "Text: Shadow Dark", icon: "🌑", price: 400, type: "unlock", unlockKey: "textcolor-shadow", rarity: "epic", desc: "Tên hiển thị gradient đen bạc huyền bí." },
  { id: "unlock-textcolor-diamond", name: "Text: Diamond Shine", icon: "💎", price: 700, type: "unlock", unlockKey: "textcolor-diamond", rarity: "legendary", desc: "Tên hiển thị gradient kim cương chuyển sắc!" },
  // ══════════════════════════════════════════════════════════
  // ── EXPANDED SHOP — TOOLS ──
  // ══════════════════════════════════════════════════════════
  { id: "tool-srs-insights", name: "Công cụ: Phân tích SRS", icon: "📈", price: 400, type: "unlock", unlockKey: "tool-srs-insights", rarity: "rare", desc: "Biểu đồ chi tiết tiến độ SRS theo ngày." },
  { id: "tool-mistake-drill", name: "Công cụ: Tự luyện lỗi sai", icon: "🔄", price: 450, type: "unlock", unlockKey: "tool-mistake-drill", rarity: "epic", desc: "Tự tạo quiz từ các câu trả lời sai." },
  { id: "tool-speed-review", name: "Công cụ: Ôn tập nhanh", icon: "⚡", price: 350, type: "unlock", unlockKey: "tool-speed-review", rarity: "rare", desc: "Ôn tập nhanh 60 giây — tối đa hiệu quả." },
  { id: "tool-daily-planner", name: "Công cụ: Kế hoạch ngày", icon: "📋", price: 300, type: "unlock", unlockKey: "tool-daily-planner", rarity: "rare", desc: "Lên kế hoạch học tập hằng ngày chi tiết." },
  { id: "tool-weak-point-finder", name: "Công cụ: Tìm điểm yếu", icon: "🎯", price: 500, type: "unlock", unlockKey: "tool-weak-point-finder", rarity: "epic", desc: "Phân tích và tìm điểm yếu tự động." },
  { id: "tool-sentence-builder", name: "Công cụ: Ghép câu", icon: "✏️", price: 350, type: "unlock", unlockKey: "tool-sentence-builder", rarity: "rare", desc: "Công cụ ghép câu từ từ vựng đã học." },
  { id: "tool-progress-share", name: "Công cụ: Chia sẻ tiến trình", icon: "📤", price: 300, type: "unlock", unlockKey: "tool-progress-share", rarity: "rare", desc: "Chia sẻ tiến độ học tập thành ảnh đẹp." },
  // ══════════════════════════════════════════════════════════
  // ── EXPANDED SHOP — THEMED BUNDLES ──
  // ══════════════════════════════════════════════════════════
  { id: "bundle-student-essentials", name: "📚 Gói Học sinh Thiết yếu", icon: "📚", price: 800, type: "bundle", rarity: "rare", bundle: [{ powerUpId: "hintPack", amount: 5 }, { powerUpId: "xpBoost", amount: 3 }, { powerUpId: "vocabHint", amount: 3 }], desc: "Gói Sinh Viên: 11 power-up thiết yếu cho học tập." },
  { id: "bundle-quiz-master", name: "🧠 Gói Bậc thầy Trắc nghiệm", icon: "🧠", price: 1200, type: "bundle", rarity: "epic", bundle: [{ powerUpId: "revealOne", amount: 5 }, { powerUpId: "rerollToken", amount: 5 }, { powerUpId: "scoreMultiplier", amount: 3 }], desc: "Gói Quiz Master: 13 items cho quiz. Tiết kiệm 500 coin!" },
  { id: "bundle-streak-guardian", name: "🔥 Bảo vệ Chuỗi", icon: "🔥", price: 1e3, type: "bundle", rarity: "epic", bundle: [{ powerUpId: "streakFreeze", amount: 5 }, { powerUpId: "comboSaver", amount: 3 }, { powerUpId: "perfectShield", amount: 3 }], desc: "Gói Bảo Vệ Streak: không lo mất streak!" },
  { id: "bundle-coin-factory", name: "💰 Xưởng Xu", icon: "💰", price: 1500, type: "bundle", rarity: "epic", bundle: [{ powerUpId: "doubleCoins", amount: 5 }, { powerUpId: "coinMagnet", amount: 3 }, { powerUpId: "goldRush", amount: 2 }], desc: "Gói Xưởng Coin: gấp bội coin kiếm được!" },
  { id: "bundle-samurai-set", name: "⚔️ Bộ Samurai", icon: "⚔️", price: 3800, type: "bundle", rarity: "legendary", bundle: [{ powerUpId: "xpBoost", amount: 5 }], bundleUnlocks: ["avatar-samurai", "badge-samurai", "title-samurai", "entrance-samurai-slash"], desc: "Bộ Samurai: Avatar + Badge + Title + Entrance + 5× XP!" },
  { id: "bundle-zen-set", name: "☯️ Bộ Thiền", icon: "☯️", price: 2500, type: "bundle", rarity: "epic", bundle: [{ powerUpId: "streakFreeze", amount: 3 }], bundleUnlocks: ["theme-zen-garden", "card-zen", "music-zen", "particle-sparkles"], desc: "Bộ Zen: Theme + Card + Music + Particle + 3× Freeze." },
  { id: "bundle-ultimate-whale", name: "🐋 Gói Cá voi", icon: "🐋", price: 8e3, type: "bundle", rarity: "legendary", bundle: [{ powerUpId: "hintPack", amount: 20 }, { powerUpId: "xpBoost", amount: 10 }, { powerUpId: "streakFreeze", amount: 10 }, { powerUpId: "doubleCoins", amount: 10 }, { powerUpId: "rainbowOrb", amount: 5 }], bundleUnlocks: ["badge-whale"], desc: "Gói Cá Voi: 55 power-up + Badge Whale. Tiết kiệm 5000 coin!" },
  // ══════════════════════════════════════════════════════════════
  // 🧿 OMAMORI CHARMS (お守り) — Cosmetic + passive bonus hybrid
  // ══════════════════════════════════════════════════════════════
  { id: "unlock-charm-gakugyo", name: "学業成就 Học nghiệp thành tựu", icon: "📿", price: 500, type: "unlock", unlockKey: "charm-gakugyo", rarity: "rare", charmBonus: { type: "xp", value: 3 }, desc: "Bùa đền học vấn — +3% XP mỗi lần học. Đặt ước nguyện tốt nghiệp!" },
  { id: "unlock-charm-kotsu", name: "交通安全 Bình an trên đường", icon: "🛡️", price: 350, type: "unlock", unlockKey: "charm-kotsu", rarity: "common", charmBonus: { type: "boss", value: 5 }, desc: "Bùa bình an — giảm sát thương nhận trong boss fight 5%." },
  { id: "unlock-charm-shobai", name: "商売繁盛 Buôn may bán đắt", icon: "💰", price: 600, type: "unlock", unlockKey: "charm-shobai", rarity: "rare", charmBonus: { type: "coin", value: 3 }, desc: "Bùa tài lộc — +3% coin kiếm được từ mọi nguồn." },
  { id: "unlock-charm-kenko", name: "健康祈願 Sự khỏe mạnh", icon: "💚", price: 400, type: "unlock", unlockKey: "charm-kenko", rarity: "common", charmBonus: { type: "boss", value: 5 }, desc: "Bùa sức khỏe — +5 HP tối đa trong boss fight." },
  { id: "unlock-charm-renai", name: "恋愛成就 Tình duyên viên mãn", icon: "💕", price: 800, type: "unlock", unlockKey: "charm-renai", rarity: "epic", charmBonus: { type: "gacha", value: 5 }, desc: "Bùa tình duyên — +5% tỷ lệ rare khi mở gacha. Hiếm!" },
  { id: "unlock-charm-gokaku", name: "合格祈願 Đỗ kỳ thi", icon: "📜", price: 900, type: "unlock", unlockKey: "charm-gokaku", rarity: "epic", charmBonus: { type: "xp", value: 2 }, desc: "Bùa đỗ thi — +2% điểm quiz. Dành cho người đang ôn JLPT!" },
  { id: "unlock-charm-yakuyoke", name: "厄除け Trừ tà xui xẻo", icon: "🔮", price: 550, type: "unlock", unlockKey: "charm-yakuyoke", rarity: "rare", charmBonus: { type: "gacha", value: 3 }, desc: "Bùa trừ tà — +3% vận may chung, giảm kết quả xui gacha." },
  { id: "unlock-charm-anzan", name: "安産祈願 Bình an vô sự", icon: "🌸", price: 300, type: "unlock", unlockKey: "charm-anzan", rarity: "common", charmBonus: { type: "pet", value: 10 }, desc: "Bùa bình an — thú cưng hạnh phúc thêm +10% khi cho ăn." },
  { id: "unlock-charm-kaiun", name: "開運 Khai vận đại cát", icon: "🎰", price: 1e3, type: "unlock", unlockKey: "charm-kaiun", rarity: "epic", charmBonus: { type: "wheel", value: 1 }, desc: "Bùa khai vận — +1 lượt quay Wheel of Fortune mỗi ngày!" },
  { id: "unlock-charm-kachimamori", name: "勝守 Bùa chiến thắng", icon: "⚔️", price: 650, type: "unlock", unlockKey: "charm-kachimamori", rarity: "rare", charmBonus: { type: "boss", value: 5 }, desc: "Bùa chiến thắng — +5% sát thương gây ra cho boss." },
  { id: "unlock-charm-kinun", name: "金運 Vận tài lộc", icon: "🪙", price: 1200, type: "unlock", unlockKey: "charm-kinun", rarity: "legendary", charmBonus: { type: "coin", value: 2 }, desc: "Bùa tài lộc vàng — +2 coin thêm mỗi câu trả lời đúng. Cực hiếm!" },
  { id: "unlock-charm-mubyo", name: "無病息災 Vô bệnh tai qua", icon: "✨", price: 1500, type: "unlock", unlockKey: "charm-mubyo", rarity: "legendary", charmBonus: { type: "streak", value: 1 }, desc: "Bùa bình an tuyệt đối — +1 streak freeze miễn phí mỗi tuần!" },
  // ══════════════════════════════════════════════════════════════
  // 🖼️ PROFILE FRAMES (額縁) — Avatar border decoration
  // ══════════════════════════════════════════════════════════════
  { id: "unlock-frame-bamboo", name: "Khung: Trúc 竹", icon: "🎋", price: 200, type: "unlock", unlockKey: "frame-bamboo", rarity: "common", desc: "Viền trúc xanh giản dị — nhẹ nhàng và thanh lịch." },
  { id: "unlock-frame-sakura", name: "Khung: Hoa Anh Đào 桜", icon: "🌸", price: 400, type: "unlock", unlockKey: "frame-sakura", rarity: "rare", desc: "Viền cánh hoa anh đào hồng — lãng mạn mùa xuân." },
  { id: "unlock-frame-dragon", name: "Khung: Rồng Vàng 龍", icon: "🐉", price: 1500, type: "unlock", unlockKey: "frame-dragon", rarity: "legendary", anim: "flame", desc: "Viền Rồng Vàng — hào quang lửa cuộn. Huyền thoại!" },
  { id: "unlock-frame-wave", name: "Khung: Sóng Hokusai 波", icon: "🌊", price: 800, type: "unlock", unlockKey: "frame-wave", rarity: "epic", desc: "Viền sóng biển Hokusai — nghệ thuật Nhật cổ điển." },
  { id: "unlock-frame-torii", name: "Khung: Cổng Torii 鳥居", icon: "⛩️", price: 500, type: "unlock", unlockKey: "frame-torii", rarity: "rare", desc: "Viền cổng đền Torii đỏ truyền thống Nhật Bản." },
  { id: "unlock-frame-shoji", name: "Khung: Cửa Shoji 障子", icon: "🏯", price: 250, type: "unlock", unlockKey: "frame-shoji", rarity: "common", desc: "Viền cửa giấy Shoji theo phong cách nhà truyền thống." },
  { id: "unlock-frame-kimono", name: "Khung: Hoa Văn Kimono 着物", icon: "👘", price: 450, type: "unlock", unlockKey: "frame-kimono", rarity: "rare", desc: "Viền hoa văn Kimono tinh xảo nhiều màu sắc." },
  { id: "unlock-frame-crane", name: "Khung: Hạc Giấy 折鶴", icon: "🕊️", price: 300, type: "unlock", unlockKey: "frame-crane", rarity: "common", desc: "Viền hạc origami — biểu tượng may mắn và trường thọ." },
  { id: "unlock-frame-daruma", name: "Khung: Daruma 達磨", icon: "🔴", price: 700, type: "unlock", unlockKey: "frame-daruma", rarity: "epic", desc: "Viền búp bê Daruma đỏ — ý chí kiên định, không bao giờ ngã." },
  { id: "unlock-frame-kintsugi", name: "Khung: Kintsugi 金継ぎ", icon: "🥇", price: 1200, type: "unlock", unlockKey: "frame-kintsugi", rarity: "legendary", anim: "shimmer-gold", desc: "Viền Kintsugi vàng — nghệ thuật sửa vật bể bằng vàng. Siêu hiếm!" },
  // ══════════════════════════════════════════════════════════════
  // 🏞️ PROFILE BANNERS — Wide background for ProfilePage
  // ══════════════════════════════════════════════════════════════
  { id: "unlock-banner-fuji", name: "Băng rôn: Núi Phú Sĩ 富士山", icon: "🗻", price: 400, type: "unlock", unlockKey: "banner-fuji", rarity: "rare", desc: "Nền hoàng hôn núi Phú Sĩ huyền thoại — biểu tượng Nhật Bản." },
  { id: "unlock-banner-tokyo", name: "Băng rôn: Tokyo Đêm 東京夜景", icon: "🌃", price: 700, type: "unlock", unlockKey: "banner-tokyo", rarity: "epic", anim: "lightning", desc: "Nền cảnh đêm Tokyo rực rỡ — đèn neon và ánh sáng thành phố." },
  { id: "unlock-banner-bamboo", name: "Băng rôn: Rừng Trúc 竹林", icon: "🎋", price: 300, type: "unlock", unlockKey: "banner-bamboo", rarity: "common", desc: "Nền rừng trúc xanh mát Arashiyama — bình yên và thanh thản." },
  { id: "unlock-banner-zen", name: "Băng rôn: Vườn Zen 枯山水", icon: "☯️", price: 450, type: "unlock", unlockKey: "banner-zen", rarity: "rare", desc: "Nền vườn đá Zen Nhật Bản — tĩnh lặng và thiền định." },
  { id: "unlock-banner-shibuya", name: "Băng rôn: Shibuya 渋谷", icon: "🏙️", price: 650, type: "unlock", unlockKey: "banner-shibuya", rarity: "epic", desc: "Nền giao lộ Shibuya nhộn nhịp — trung tâm văn hóa trẻ Tokyo." },
  { id: "unlock-banner-temple", name: "Băng rôn: Đền Mùa Thu 秋の寺", icon: "🍁", price: 500, type: "unlock", unlockKey: "banner-temple", rarity: "rare", desc: "Nền đền cổ giữa cây lá đỏ mùa thu — momiji tuyệt đẹp." },
  { id: "unlock-banner-tanabata", name: "Băng rôn: Tanabata 七夕", icon: "🌌", price: 1e3, type: "unlock", unlockKey: "banner-tanabata", rarity: "legendary", anim: "aurora", desc: "Nền lễ hội Tanabata đầy sao — ước nguyện gửi theo Ngân Hà. Legendary!" },
  { id: "unlock-banner-koi", name: "Băng rôn: Koi Dưới Nước 鯉", icon: "🐠", price: 350, type: "unlock", unlockKey: "banner-koi", rarity: "common", desc: "Nền hồ cá Koi đầy màu sắc — bình an và may mắn." },
  // ══════════════════════════════════════════════════════════════
  // 💫 AURA EFFECTS — Animated glow/orbit around avatar
  // ══════════════════════════════════════════════════════════════
  { id: "unlock-aura-sakura", name: "Hào quang: Hoa Anh Đào 桜吹雪", icon: "🌸", price: 500, type: "unlock", unlockKey: "aura-sakura", rarity: "rare", anim: "petals", desc: "Cánh anh đào xoay quanh avatar — lãng mạn và huyền ảo." },
  { id: "unlock-aura-flame", name: "Hào quang: Ngọn Lửa 炎", icon: "🔥", price: 800, type: "unlock", unlockKey: "aura-flame", rarity: "epic", anim: "flame", desc: "Quầng lửa rực rỡ quanh avatar — mạnh mẽ và cuồng nhiệt." },
  { id: "unlock-aura-ice", name: "Hào quang: Băng Giá 氷", icon: "❄️", price: 550, type: "unlock", unlockKey: "aura-ice", rarity: "rare", anim: "frost", desc: "Tinh thể băng lơ lửng quanh avatar — lạnh lẽo và thanh tú." },
  { id: "unlock-aura-lightning", name: "Hào quang: Sét 雷", icon: "⚡", price: 900, type: "unlock", unlockKey: "aura-lightning", rarity: "epic", anim: "lightning", desc: "Tia chớp nháy quanh avatar — uy lực như thần sấm Raijin." },
  { id: "unlock-aura-shadow", name: "Hào quang: Bóng Tối 影", icon: "🌑", price: 600, type: "unlock", unlockKey: "aura-shadow", rarity: "rare", anim: "shadow", desc: "Màn sương bóng tối huyền bí quanh avatar — bí ẩn như ninja." },
  { id: "unlock-aura-golden", name: "Hào quang: Ánh Vàng 光", icon: "☀️", price: 850, type: "unlock", unlockKey: "aura-golden", rarity: "epic", anim: "shimmer-gold", desc: "Ánh hào quang vàng rực quanh avatar — uy nghiêm như thần linh." },
  { id: "unlock-aura-rainbow", name: "Hào quang: Cầu Vồng 虹", icon: "🌈", price: 1200, type: "unlock", unlockKey: "aura-rainbow", rarity: "legendary", anim: "aurora", desc: "Quầng sáng cầu vồng quanh avatar — huyền thoại thực sự!" },
  { id: "unlock-aura-void", name: "Hào quang: Hư Không 無", icon: "🕳️", price: 1500, type: "unlock", unlockKey: "aura-void", rarity: "legendary", anim: "shadow", desc: "Năng lượng hư không xoáy quanh avatar — bí ẩn tuyệt đỉnh!" },
  // ══════════════════════════════════════════════════════════════
  // 🎋 JAPANESE CULTURAL CONSUMABLES — Unique mechanics
  // ══════════════════════════════════════════════════════════════
  { id: "omikuji", name: "Quẻ Omikuji 御神籤", icon: "🎋", price: 80, type: "consumable", powerUpId: "omikuji", rarity: "common", desc: "Bốc quẻ may mắn (大吉→凶) — nhận bonus ngẫu nhiên. Vận may mỉm cười!" },
  { id: "daruma", name: "Búp bê Daruma だるま", icon: "🔴", price: 200, type: "consumable", powerUpId: "daruma", rarity: "rare", desc: "Búp bê ước nguyện — đặt mục tiêu học, hoàn thành để nhận bonus XP." },
  { id: "shichifukujin", name: "Thất Phúc Thần 七福神", icon: "🏛️", price: 350, type: "consumable", powerUpId: "shichifukujin", rarity: "epic", desc: "7 thần may mắn — tặng 7 mini-bonus khác nhau trong 7 ngày liên tiếp." },
  { id: "onsenToken", name: "Tắm suối nước nóng Onsen 温泉", icon: "♨️", price: 120, type: "consumable", powerUpId: "onsenToken", rarity: "common", desc: "Token tắm suối nóng — ×2 hiệu quả SRS trong 4 giờ. Thư giãn mà học!" },
  { id: "matchaFocus", name: "Trà xanh Matcha 抹茶", icon: "🍵", price: 150, type: "consumable", powerUpId: "matchaFocus", rarity: "rare", desc: "Trà xanh Matcha thượng hạng — +30% thưởng study time trong 2 giờ." },
  { id: "origamiCrane", name: "Hạc Giấy 折り紙", icon: "🦢", price: 100, type: "consumable", powerUpId: "origamiCrane", rarity: "common", desc: "Gấp hạc giấy cầu may — +10% tỷ lệ rare cho lần gacha kế tiếp." },
  { id: "luckyWave", name: "Mèo Thần Tài 招き猫", icon: "🐱", price: 90, type: "consumable", powerUpId: "luckyWave", rarity: "common", desc: "Mèo vẫy tay — nhận coin ngẫu nhiên (50–200) khi đăng nhập lần sau." },
  { id: "shrineBell", name: "Chuông Đền 神社の鈴", icon: "🔔", price: 300, type: "consumable", powerUpId: "shrineBell", rarity: "epic", desc: "Rung chuông đền linh — reset toàn bộ giới hạn daily (wheel, quest)!" },
  { id: "hanabi", name: "Pháo Hoa 花火", icon: "🎆", price: 60, type: "consumable", powerUpId: "hanabi", rarity: "common", desc: "Bắn pháo hoa mừng — hiệu ứng celebration đặc biệt + chia sẻ." },
  { id: "emaTablet", name: "Bảng gỗ ước nguyện Ema 絵馬", icon: "📝", price: 250, type: "consumable", powerUpId: "emaTablet", rarity: "rare", desc: "Ema nguyện cầu — viết mục tiêu và nhận +50% XP khi đạt được." },
  // ══════════════════════════════════════════════════════════════
  // 🏯 JAPANESE CULTURAL BUNDLES
  // ══════════════════════════════════════════════════════════════
  {
    id: "bundle-temple-visit",
    name: "⛩️ Tham Quan Đền 神社参り",
    icon: "⛩️",
    price: 2e3,
    type: "bundle",
    rarity: "epic",
    bundle: [{ powerUpId: "omikuji", amount: 3 }],
    bundleUnlocks: ["frame-torii", "charm-kaiun"],
    desc: "Gói Tham Quan Đền: Torii Frame + Omamori Kaiun + 3× Omikuji. Thiêng liêng!"
  },
  {
    id: "bundle-sakura-festival",
    name: "🌸 Lễ Hội Hoa Anh Đào 桜祭り",
    icon: "🌸",
    price: 1800,
    type: "bundle",
    rarity: "epic",
    bundle: [{ powerUpId: "hanabi", amount: 3 }],
    bundleUnlocks: ["frame-sakura", "aura-sakura", "theme-sakura"],
    desc: "Gói Lễ Hội Hoa Anh Đào: Frame + Aura + Theme Sakura + 3× Pháo Hoa!"
  },
  {
    id: "bundle-way-of-samurai",
    name: "⚔️ Đạo Samurai 侍道",
    icon: "⚔️",
    price: 2500,
    type: "bundle",
    rarity: "legendary",
    bundle: [{ powerUpId: "xpBoost", amount: 5 }],
    bundleUnlocks: ["emote-samurai", "sfx-samurai", "aura-flame"],
    desc: "Bộ Samurai: Emote + SFX Samurai + Lửa Aura + 5× XP Boost. Bushido!"
  },
  {
    id: "bundle-matsuri",
    name: "🏮 Lễ Hội Matsuri お祭り",
    icon: "🏮",
    price: 1500,
    type: "bundle",
    rarity: "epic",
    bundle: [{ powerUpId: "hanabi", amount: 3 }, { powerUpId: "luckyWave", amount: 2 }],
    bundleUnlocks: ["emote-festival", "sfx-taiko"],
    desc: "Gói Matsuri: Festival Emote + Taiko SFX + 3× Pháo Hoa + 2× Mèo Thần Tài!"
  },
  {
    id: "bundle-monk-training",
    name: "🧘 Tu Hành 修行僧",
    icon: "🧘",
    price: 3e3,
    type: "bundle",
    rarity: "legendary",
    bundle: [{ powerUpId: "matchaFocus", amount: 5 }],
    bundleUnlocks: ["sfx-zen", "banner-zen", "charm-gokaku"],
    desc: "Gói Tu Hành: Zen SFX + Vườn Zen Banner + Omamori Đỗ Thi + 5× Matcha!"
  }
];
const isTouchParticleUnlockKey = (unlockKey) => String(unlockKey || "").startsWith("particle-touch-");
const isAmbientParticleUnlockKey = (unlockKey) => String(unlockKey || "").startsWith("particle-") && !isTouchParticleUnlockKey(unlockKey);
const STATIC_COSMETICS = {
  // ── Themes ─────────────────────────────────────────────────────────────────
  "theme-sakura": { name: "Sakura", emoji: "🌸", category: "theme", rarity: "common" },
  "theme-ocean": { name: "Ocean", emoji: "🌊", category: "theme", rarity: "common" },
  "theme-sunset": { name: "Sunset", emoji: "🌅", category: "theme", rarity: "common" },
  "theme-forest": { name: "Forest", emoji: "🌲", category: "theme", rarity: "common" },
  "theme-galaxy": { name: "Galaxy", emoji: "🌌", category: "theme", rarity: "common" },
  "theme-midnight": { name: "Midnight", emoji: "🌙", category: "theme", rarity: "common" },
  "theme-autumn": { name: "Autumn", emoji: "🍂", category: "theme", rarity: "common" },
  "theme-cyberpunk": { name: "Cyberpunk", emoji: "🤖", category: "theme", rarity: "common" },
  "theme-amethyst": { name: "Amethyst", emoji: "💜", category: "theme", rarity: "common" },
  "theme-ember": { name: "Ember", emoji: "🔥", category: "theme", rarity: "common" },
  "theme-neon-tokyo": { name: "Neon Tokyo", emoji: "🌃", category: "theme", rarity: "epic" },
  "theme-aurora": { name: "Aurora", emoji: "🌈", category: "theme", rarity: "rare" },
  "theme-tropical": { name: "Tropical", emoji: "🌴", category: "theme", rarity: "common" },
  "theme-lavender": { name: "Lavender", emoji: "💐", category: "theme", rarity: "common" },
  "theme-dragon-flame": { name: "Dragon Flame", emoji: "🐉", category: "theme", rarity: "epic" },
  "theme-aurora-borealis": { name: "Aurora Borealis", emoji: "🌌", category: "theme", rarity: "epic" },
  "theme-deep-ocean": { name: "Deep Ocean", emoji: "🐙", category: "theme", rarity: "epic" },
  "theme-cherry-blossom": { name: "Cherry Blossom Rain", emoji: "🌸", category: "theme", rarity: "epic" },
  "theme-cosmic-void": { name: "Cosmic Void", emoji: "✨", category: "theme", rarity: "epic" },
  "theme-neon-matrix": { name: "Neon Matrix", emoji: "💾", category: "theme", rarity: "epic" },
  "theme-golden-palace": { name: "Golden Palace", emoji: "🏯", category: "theme", rarity: "legendary" },
  "theme-thunderstorm": { name: "Thunderstorm", emoji: "⛈️", category: "theme", rarity: "rare" },
  "theme-holographic": { name: "Holographic", emoji: "🔮", category: "theme", rarity: "legendary" },
  "seasonal-hanami-bg": { name: "Hanami Background", emoji: "🌳", category: "theme", rarity: "rare" },
  "seasonal-momiji-theme": { name: "Momiji Theme", emoji: "🍁", category: "theme", rarity: "rare" },
  // ── Avatars — Shop ─────────────────────────────────────────────────────────
  "avatar-ninja": { name: "Ninja", emoji: "🥷", category: "avatar", rarity: "common" },
  "avatar-maneki": { name: "Maneki Neko", emoji: "🐱", category: "avatar", rarity: "common" },
  "avatar-tanuki": { name: "Tanuki", emoji: "🦝", category: "avatar", rarity: "common" },
  "avatar-kitsune": { name: "Kitsune", emoji: "🦊", category: "avatar", rarity: "rare" },
  "avatar-phoenix": { name: "Hō-ō Phoenix", emoji: "🔥", category: "avatar", rarity: "legendary" },
  "avatar-daruma": { name: "Daruma", emoji: "🎯", category: "avatar", rarity: "common" },
  "avatar-oni": { name: "Oni", emoji: "👹", category: "avatar", rarity: "common" },
  "avatar-crane": { name: "Tsuru Crane", emoji: "🦢", category: "avatar", rarity: "epic" },
  "avatar-dragon-king": { name: "龍王 Dragon King", emoji: "🐲", category: "avatar", rarity: "epic" },
  "avatar-sakura-spirit": { name: "桜の精 Sakura Spirit", emoji: "🧚", category: "avatar", rarity: "epic" },
  "avatar-thunder-god": { name: "雷神 Raijin", emoji: "⚡", category: "avatar", rarity: "epic" },
  "avatar-ice-empress": { name: "氷の女王 Ice Empress", emoji: "❄️", category: "avatar", rarity: "epic" },
  "avatar-shadow-ninja": { name: "忍 Shadow Ninja", emoji: "🌑", category: "avatar", rarity: "rare" },
  "avatar-celestial-fox": { name: "天狐 Celestial Fox", emoji: "🦊", category: "avatar", rarity: "legendary" },
  "avatar-wind-samurai": { name: "風の侍 Wind Samurai", emoji: "🌪️", category: "avatar", rarity: "rare" },
  "avatar-golden-buddha": { name: "金仏 Golden Buddha", emoji: "🧘", category: "avatar", rarity: "legendary" },
  "seasonal-yukata-avatar": { name: "Yukata Avatar", emoji: "👘", category: "avatar", rarity: "rare" },
  // ── Avatars — Gacha exclusive ───────────────────────────────────────────────
  "gacha-avatar-samurai": { name: "Samurai", emoji: "⚔️", category: "avatar", rarity: "rare", aura: "fire" },
  "gacha-avatar-geisha": { name: "Geisha", emoji: "👘", category: "avatar", rarity: "rare", aura: "sakura" },
  "gacha-avatar-shinobi": { name: "Shinobi", emoji: "🌀", category: "avatar", rarity: "rare", aura: "shadow" },
  "gacha-avatar-tengu": { name: "Tengu", emoji: "👺", category: "avatar", rarity: "epic", aura: "wind" },
  "gacha-avatar-yokai": { name: "Yōkai", emoji: "👻", category: "avatar", rarity: "epic", aura: "void" },
  "gacha-avatar-amaterasu": { name: "天照 Amaterasu", emoji: "☀️", category: "avatar", rarity: "legendary", aura: "golden" },
  "gacha-avatar-susanoo": { name: "素戔嗚 Susanoo", emoji: "🌊", category: "avatar", rarity: "legendary", aura: "lightning" },
  // ── Badges — Shop ──────────────────────────────────────────────────────────
  "badge-vip": { name: "VIP", emoji: "⭐", category: "badge", rarity: "common" },
  "badge-samurai": { name: "Samurai", emoji: "⚔️", category: "badge", rarity: "common" },
  "badge-sensei": { name: "Sensei", emoji: "🎓", category: "badge", rarity: "common" },
  "badge-dragon": { name: "Dragon", emoji: "🐉", category: "badge", rarity: "rare" },
  "badge-sakura": { name: "Sakura", emoji: "🌸", category: "badge", rarity: "common" },
  "badge-crown": { name: "Crown", emoji: "👑", category: "badge", rarity: "legendary" },
  "badge-scholar": { name: "Scholar", emoji: "📚", category: "badge", rarity: "epic" },
  "badge-explorer": { name: "Explorer", emoji: "🧭", category: "badge", rarity: "rare" },
  "badge-diamond": { name: "Diamond", emoji: "💎", category: "badge", rarity: "rare" },
  "badge-flame-master": { name: "Flame Master", emoji: "🔥", category: "badge", rarity: "epic" },
  "badge-frost-king": { name: "Frost King", emoji: "❄️", category: "badge", rarity: "epic" },
  "badge-thunder-bolt": { name: "Thunder Bolt", emoji: "⚡", category: "badge", rarity: "epic" },
  "badge-cosmic-star": { name: "Cosmic Star", emoji: "🌟", category: "badge", rarity: "epic" },
  "badge-sakura-bloom": { name: "Sakura Bloom", emoji: "🌸", category: "badge", rarity: "rare" },
  "badge-golden-dragon": { name: "Golden Dragon", emoji: "🐉", category: "badge", rarity: "legendary" },
  "seasonal-harvest-badge": { name: "Harvest Festival", emoji: "🌾", category: "badge", rarity: "rare" },
  "seasonal-kagami-mochi": { name: "Kagami Mochi", emoji: "🎍", category: "badge", rarity: "rare" },
  // ── Titles ─────────────────────────────────────────────────────────────────
  "title-ganbatte": { name: "頑張って", emoji: "💪", category: "title", rarity: "common" },
  "title-sugoi": { name: "すごい", emoji: "✨", category: "title", rarity: "common" },
  "title-nihongo-master": { name: "日本語マスター", emoji: "🇯🇵", category: "title", rarity: "rare" },
  "title-samurai": { name: "侍", emoji: "⚔️", category: "title", rarity: "rare" },
  "title-daimyo": { name: "大名", emoji: "🏯", category: "title", rarity: "epic" },
  "title-shogun": { name: "将軍", emoji: "👑", category: "title", rarity: "epic" },
  "seasonal-spring-title": { name: "春の子", emoji: "🌸", category: "title", rarity: "rare" },
  "seasonal-summer-title": { name: "夏祭り", emoji: "🎆", category: "title", rarity: "rare" },
  "seasonal-autumn-title": { name: "紅葉狩り", emoji: "🍂", category: "title", rarity: "rare" },
  "seasonal-winter-title": { name: "冬将軍", emoji: "❄️", category: "title", rarity: "rare" },
  "gacha-title-warrior": { name: "戦士 Chiến Binh", emoji: "⚔️", category: "title", rarity: "epic" },
  "gacha-title-legend": { name: "伝説 Huyền Thoại", emoji: "🏆", category: "title", rarity: "legendary" },
  // ── Card Styles ────────────────────────────────────────────────────────────
  "card-neon": { name: "Neon", emoji: "✨", category: "cardStyle", rarity: "common" },
  "card-glass": { name: "Glass", emoji: "💎", category: "cardStyle", rarity: "common" },
  "card-gradient": { name: "Gradient", emoji: "🌈", category: "cardStyle", rarity: "common" },
  "card-gold": { name: "Gold", emoji: "🏅", category: "cardStyle", rarity: "epic" },
  "card-hologram": { name: "Hologram", emoji: "🔮", category: "cardStyle", rarity: "legendary" },
  "card-flame-border": { name: "Flame Border", emoji: "🔥", category: "cardStyle", rarity: "rare" },
  "card-frost-crystal": { name: "Frost Crystal", emoji: "❄️", category: "cardStyle", rarity: "rare" },
  "card-aurora-shine": { name: "Aurora Shine", emoji: "🌌", category: "cardStyle", rarity: "rare" },
  "card-cosmic-void": { name: "Cosmic Void", emoji: "🕳️", category: "cardStyle", rarity: "epic" },
  "card-thunder-pulse": { name: "Thunder Pulse", emoji: "⚡", category: "cardStyle", rarity: "epic" },
  "card-sakura-dream": { name: "Sakura Dream", emoji: "🌸", category: "cardStyle", rarity: "rare" },
  "card-golden-dragon": { name: "Golden Dragon", emoji: "🐉", category: "cardStyle", rarity: "epic" },
  "gacha-card-sakura": { name: "Sakura Card", emoji: "🌸", category: "cardStyle", rarity: "rare" },
  "gacha-card-wave": { name: "Great Wave", emoji: "🌊", category: "cardStyle", rarity: "rare" },
  "gacha-card-dragon": { name: "Dragon Scale", emoji: "🐲", category: "cardStyle", rarity: "epic" },
  "gacha-card-imperial": { name: "Imperial Gold", emoji: "👑", category: "cardStyle", rarity: "legendary" },
  // ── Effects ────────────────────────────────────────────────────────────────
  "effect-confetti": { name: "Confetti", emoji: "🎊", category: "effect", rarity: "common" },
  "effect-sparkle": { name: "Sparkle", emoji: "💫", category: "effect", rarity: "common" },
  "effect-firework": { name: "Fireworks", emoji: "🎆", category: "effect", rarity: "common" },
  "effect-sakura-petals": { name: "Sakura Petals", emoji: "🌸", category: "effect", rarity: "rare" },
  "effect-lightning": { name: "Lightning", emoji: "⚡", category: "effect", rarity: "rare" },
  "effect-rainbow": { name: "Rainbow", emoji: "🌈", category: "effect", rarity: "epic" },
  "effect-snow": { name: "Snowfall", emoji: "❄️", category: "effect", rarity: "rare" },
  "effect-meteor-shower": { name: "Meteor Shower", emoji: "☄️", category: "effect", rarity: "legendary" },
  "effect-dragon-breath": { name: "Dragon Breath", emoji: "🐲", category: "effect", rarity: "epic" },
  "effect-ice-shatter": { name: "Ice Shatter", emoji: "💠", category: "effect", rarity: "epic" },
  "effect-thunder-strike": { name: "Thunder Strike", emoji: "🌩️", category: "effect", rarity: "epic" },
  "effect-cherry-storm": { name: "Cherry Storm", emoji: "🌸", category: "effect", rarity: "epic" },
  "effect-golden-rain": { name: "Golden Rain", emoji: "🌟", category: "effect", rarity: "epic" },
  "effect-shadow-burst": { name: "Shadow Burst", emoji: "🌑", category: "effect", rarity: "epic" },
  "effect-wind-slash": { name: "Wind Slash", emoji: "🌪️", category: "effect", rarity: "epic" },
  "seasonal-sakura-frame": { name: "Sakura Frame", emoji: "🌸", category: "effect", rarity: "rare" },
  "seasonal-firework-effect": { name: "Firework Burst", emoji: "🎆", category: "effect", rarity: "rare" },
  "seasonal-snow-effect": { name: "Snow Falling", emoji: "❄️", category: "effect", rarity: "rare" },
  "gacha-effect-fire": { name: "Sacred Fire", emoji: "🔥", category: "effect", rarity: "epic" },
  "gacha-effect-dragon": { name: "Dragon Aura", emoji: "🐉", category: "effect", rarity: "epic" },
  "gacha-effect-celestial": { name: "Celestial", emoji: "✨", category: "effect", rarity: "legendary" },
  // ── Stickers ───────────────────────────────────────────────────────────────
  "sticker-neko": { name: "Neko", emoji: "😺", category: "sticker", rarity: "common" },
  "sticker-sakura": { name: "Sakura", emoji: "🌸", category: "sticker", rarity: "common" },
  "sticker-onigiri": { name: "Onigiri", emoji: "🍙", category: "sticker", rarity: "common" },
  "sticker-torii": { name: "Torii", emoji: "⛩️", category: "sticker", rarity: "rare" },
  "sticker-fuji": { name: "Fuji", emoji: "🗻", category: "sticker", rarity: "rare" },
  // ── Music — passive study mood buffs (see item-effects.js) ────────────────
  "music-lofi": { name: "Lo-Fi Study", emoji: "🎵", category: "music", rarity: "rare" },
  "music-zen": { name: "Zen Garden", emoji: "🎶", category: "music", rarity: "rare" },
  "music-shamisen": { name: "Shamisen", emoji: "🎸", category: "music", rarity: "rare" },
  "music-sakura-rain": { name: "Sakura Rain", emoji: "🌧️", category: "music", rarity: "rare" },
  // ── Tools — owned-scope XP/coin buffs (see item-effects.js) ───────────────
  "tool-vocab-highlighter": { name: "Vocab Highlighter", emoji: "🖍️", category: "tool", rarity: "rare" },
  "tool-kanji-overlay": { name: "Kanji Overlay", emoji: "🔎", category: "tool", rarity: "rare" },
  "tool-grammar-checker": { name: "Grammar Tag", emoji: "🏷️", category: "tool", rarity: "rare" },
  // ── Skills (passive — always active when owned) ───────────────────────────
  "skill-coinBoost5": { name: "Coin +5%", emoji: "💰", category: "skill", rarity: "rare" },
  "skill-xpBoost5": { name: "XP +5%", emoji: "📈", category: "skill", rarity: "rare" },
  "skill-hintFree": { name: "Free Hint Daily", emoji: "💡", category: "skill", rarity: "epic" },
  "skill-comboExtend": { name: "Combo Window +", emoji: "⏱️", category: "skill", rarity: "epic" },
  "skill-dailyBonus": { name: "Daily Bonus +20%", emoji: "📅", category: "skill", rarity: "rare" },
  // ── Frames ─────────────────────────────────────────────────────────────────
  "frame-bamboo": { name: "Bamboo", emoji: "🎋", category: "frame", rarity: "rare" },
  "frame-sakura": { name: "Sakura", emoji: "🌸", category: "frame", rarity: "rare" },
  "frame-dragon": { name: "Dragon", emoji: "🐉", category: "frame", rarity: "epic" },
  "frame-wave": { name: "Great Wave", emoji: "🌊", category: "frame", rarity: "rare" },
  "frame-torii": { name: "Torii Gate", emoji: "⛩️", category: "frame", rarity: "epic" },
  "frame-shoji": { name: "Shoji", emoji: "🪟", category: "frame", rarity: "common" },
  "frame-kimono": { name: "Kimono", emoji: "👘", category: "frame", rarity: "rare" },
  "frame-crane": { name: "Hạc Giấy", emoji: "🕊️", category: "frame", rarity: "epic" },
  "frame-daruma": { name: "Daruma", emoji: "🎯", category: "frame", rarity: "epic" },
  "frame-kintsugi": { name: "Kintsugi", emoji: "✨", category: "frame", rarity: "legendary" },
  // ── Banners ────────────────────────────────────────────────────────────────
  "banner-fuji": { name: "Mount Fuji", emoji: "🗻", category: "banner", rarity: "common" },
  "banner-tokyo": { name: "Tokyo Night", emoji: "🌃", category: "banner", rarity: "rare" },
  "banner-bamboo": { name: "Bamboo Forest", emoji: "🎋", category: "banner", rarity: "epic" },
  "banner-zen": { name: "Zen Garden", emoji: "🪨", category: "banner", rarity: "rare" },
  "banner-shibuya": { name: "Shibuya", emoji: "🚦", category: "banner", rarity: "epic" },
  "banner-temple": { name: "Temple", emoji: "⛩️", category: "banner", rarity: "rare" },
  "banner-tanabata": { name: "Tanabata", emoji: "🎋", category: "banner", rarity: "rare" },
  "banner-koi": { name: "Koi Pond", emoji: "🐠", category: "banner", rarity: "rare" },
  // ── Charms (Omamori) ───────────────────────────────────────────────────────
  "charm-gokaku": { name: "Omamori: 合格", emoji: "🎯", category: "charm", rarity: "epic" },
  "charm-kinun": { name: "Omamori: 金運", emoji: "🪙", category: "charm", rarity: "legendary" },
  "charm-renai": { name: "Omamori: 恋愛", emoji: "💝", category: "charm", rarity: "legendary" },
  // ── Auras ──────────────────────────────────────────────────────────────────
  "aura-sakura": { name: "Hoa Đào", emoji: "🌸", category: "aura", rarity: "epic" },
  "aura-flame": { name: "Ngọn Lửa", emoji: "🔥", category: "aura", rarity: "epic" },
  "aura-ice": { name: "Băng Giá", emoji: "❄️", category: "aura", rarity: "epic" },
  "aura-lightning": { name: "Sấm Chớp", emoji: "⚡", category: "aura", rarity: "epic" },
  "aura-shadow": { name: "Bóng Tối", emoji: "🌑", category: "aura", rarity: "epic" },
  "aura-golden": { name: "Vàng Rồng", emoji: "✨", category: "aura", rarity: "legendary" },
  "aura-rainbow": { name: "Cầu Vồng", emoji: "🌈", category: "aura", rarity: "legendary" },
  "aura-void": { name: "Hư Không", emoji: "🌑", category: "aura", rarity: "legendary" },
  // ── Text Colors ────────────────────────────────────────────────────────────
  "textcolor-cherry": { name: "Cherry Blossom", emoji: "🌸", category: "textColor", rarity: "rare" },
  "textcolor-aurora": { name: "Aurora Shimmer", emoji: "🌌", category: "textColor", rarity: "epic" },
  "textcolor-rainbow": { name: "Rainbow Shift", emoji: "🌈", category: "textColor", rarity: "legendary" },
  "textcolor-gold": { name: "Gold", emoji: "🟡", category: "textColor", rarity: "rare" },
  "textcolor-neon": { name: "Neon", emoji: "💚", category: "textColor", rarity: "rare" },
  "textcolor-ocean": { name: "Ocean", emoji: "🔵", category: "textColor", rarity: "common" },
  "textcolor-fire": { name: "Fire", emoji: "🔴", category: "textColor", rarity: "rare" },
  "textcolor-purple": { name: "Purple", emoji: "🟣", category: "textColor", rarity: "common" },
  // ── Entrances ──────────────────────────────────────────────────────────────
  "entrance-fade": { name: "Fade", emoji: "🎬", category: "entrance", rarity: "common" },
  "entrance-fade-slide": { name: "Fade Slide", emoji: "🌊", category: "entrance", rarity: "rare" },
  "entrance-zoom": { name: "Zoom In", emoji: "🔍", category: "entrance", rarity: "common" },
  "entrance-glitch": { name: "Glitch", emoji: "🧩", category: "entrance", rarity: "epic" },
  "entrance-sakura": { name: "Sakura Fall", emoji: "🌸", category: "entrance", rarity: "rare" },
  "entrance-flame": { name: "Flame Rise", emoji: "🔥", category: "entrance", rarity: "epic" },
  "entrance-lightning": { name: "Lightning Strike", emoji: "⚡", category: "entrance", rarity: "epic" },
  "entrance-void": { name: "Void Gate", emoji: "🌑", category: "entrance", rarity: "legendary" },
  // ── Particles ──────────────────────────────────────────────────────────────
  "particle-sparkles": { name: "Sparkles", emoji: "💫", category: "particleAmbient", rarity: "rare" },
  "particle-matrix": { name: "Matrix Rain", emoji: "💾", category: "particleAmbient", rarity: "epic" },
  "particle-cosmic-dust": { name: "Cosmic Dust", emoji: "🪐", category: "particleAmbient", rarity: "legendary" },
  "particle-sakura": { name: "Sakura Petals", emoji: "🌸", category: "particleAmbient", rarity: "rare" },
  "particle-snow": { name: "Snowfall", emoji: "❄️", category: "particleAmbient", rarity: "rare" },
  "particle-stars": { name: "Starfield", emoji: "⭐", category: "particleAmbient", rarity: "rare" },
  "particle-fireflies": { name: "Fireflies", emoji: "✨", category: "particleAmbient", rarity: "epic" },
  "particle-bubbles": { name: "Bubbles", emoji: "🫧", category: "particleAmbient", rarity: "rare" },
  "particle-embers": { name: "Embers", emoji: "🔥", category: "particleAmbient", rarity: "epic" },
  "particle-aurora": { name: "Aurora Waves", emoji: "🌌", category: "particleAmbient", rarity: "legendary" },
  "particle-lanterns": { name: "Lanterns", emoji: "🏮", category: "particleAmbient", rarity: "epic" },
  "particle-leaves": { name: "Autumn Leaves", emoji: "🍂", category: "particleAmbient", rarity: "rare" },
  "particle-confetti": { name: "Confetti", emoji: "🎊", category: "particleAmbient", rarity: "rare" },
  "particle-hearts": { name: "Hearts", emoji: "💕", category: "particleAmbient", rarity: "epic" },
  "particle-cherry-petals-rain": { name: "Cherry Petals Rain", emoji: "🌸", category: "particleAmbient", rarity: "epic" },
  "particle-lightning-bolts": { name: "Lightning Bolts", emoji: "⚡", category: "particleAmbient", rarity: "epic" },
  "particle-touch-stars": { name: "Touch Stars", emoji: "⭐", category: "particleTouch", rarity: "rare" },
  "particle-touch-sakura": { name: "Touch Sakura", emoji: "🌸", category: "particleTouch", rarity: "rare" },
  "particle-touch-notes": { name: "Touch Notes", emoji: "🎵", category: "particleTouch", rarity: "epic" },
  "particle-touch-kanji": { name: "Touch Kanji Burst", emoji: "漢", category: "particleTouch", rarity: "epic" },
  "particle-touch-coin-burst": { name: "Touch Coin Burst", emoji: "🪙", category: "particleTouch", rarity: "epic" },
  "particle-touch-hearts": { name: "Touch Hearts", emoji: "💗", category: "particleTouch", rarity: "rare" },
  "particle-touch-fire": { name: "Touch Fire", emoji: "🔥", category: "particleTouch", rarity: "epic" },
  "particle-touch-snow": { name: "Touch Snow", emoji: "❄️", category: "particleTouch", rarity: "rare" },
  "particle-touch-lightning": { name: "Touch Lightning", emoji: "⚡", category: "particleTouch", rarity: "legendary" },
  "particle-touch-emoji": { name: "Touch Emoji Party", emoji: "🎉", category: "particleTouch", rarity: "epic" },
  "particle-touch-leaves": { name: "Touch Autumn", emoji: "🍂", category: "particleTouch", rarity: "rare" },
  "particle-touch-bubbles": { name: "Touch Bubbles", emoji: "🫧", category: "particleTouch", rarity: "rare" },
  // ── SFX — reaction feedback buffs (see item-effects.js) ──────────────────
  "sfx-retro": { name: "Retro 8-bit", emoji: "🕹️", category: "sfx", rarity: "rare" },
  "sfx-nature": { name: "Nature", emoji: "🌿", category: "sfx", rarity: "common" },
  "sfx-traditional": { name: "Traditional JP", emoji: "🎵", category: "sfx", rarity: "rare" },
  "sfx-anime": { name: "Anime", emoji: "✨", category: "sfx", rarity: "rare" },
  "sfx-chime": { name: "Wind Chime", emoji: "🔔", category: "sfx", rarity: "common" },
  "sfx-taiko": { name: "Taiko Drum", emoji: "🥁", category: "sfx", rarity: "epic" },
  // ── Emotes — social/celebration buffs (see item-effects.js) ──────────────
  "emote-kawaii": { name: "Kawaii", emoji: "🥰", category: "emote", rarity: "rare" },
  "emote-sugoi": { name: "Sugoi!", emoji: "😲", category: "emote", rarity: "common" },
  "emote-ganbatte": { name: "Ganbatte!", emoji: "💪", category: "emote", rarity: "common" },
  "emote-nani": { name: "Nani?!", emoji: "😱", category: "emote", rarity: "rare" },
  "emote-yoroshiku": { name: "Yoroshiku", emoji: "🙏", category: "emote", rarity: "common" },
  "emote-omedetou": { name: "Omedetou!", emoji: "🎉", category: "emote", rarity: "rare" }
};
const CATEGORY_DEFAULT_EMOJIS = {
  theme: "🎨",
  avatar: "🎭",
  badge: "🏅",
  title: "🏷️",
  cardStyle: "✨",
  effect: "🎆",
  textColor: "🌈",
  entrance: "🎬",
  particleAmbient: "🫧",
  particleTouch: "✨",
  sticker: "🎨",
  music: "🎵",
  tool: "🔧",
  skill: "📈",
  frame: "🖼️",
  banner: "🏞️",
  charm: "🧿",
  aura: "💫",
  sfx: "🔊",
  emote: "😄",
  gear: "⚔️"
};
const DISABLED_CATEGORIES = /* @__PURE__ */ new Set();
const NAME_PREFIX_RE = /^(Theme|Card Style|Avatar|Badge|Effect|Title|Text|Entrance|Frame|Banner|Aura|Sticker|Music|Tool|Skill|Omamori):\s*/u;
function inferCosmeticCategory(key) {
  var _a;
  if (!key) return null;
  if (key.startsWith("theme-") || key.startsWith("seasonal-") && key.endsWith("-theme") || key.endsWith("-bg")) return "theme";
  if (key.startsWith("avatar-") || key.startsWith("gacha-avatar-") || key.endsWith("-avatar")) return "avatar";
  if (key.startsWith("badge-") || key.endsWith("-badge") || key.endsWith("-mochi")) return "badge";
  if (key.startsWith("card-") || key.startsWith("gacha-card-")) return "cardStyle";
  if (key.startsWith("effect-") || key.startsWith("gacha-effect-") || key.endsWith("-effect") || key.endsWith("-frame")) return "effect";
  if (key.startsWith("title-") || key.startsWith("gacha-title-") || key.endsWith("-title")) return "title";
  if (key.startsWith("textcolor-")) return "textColor";
  if (key.startsWith("entrance-")) return "entrance";
  if (key.startsWith("particle-touch-")) return "particleTouch";
  if (key.startsWith("particle-")) return "particleAmbient";
  if (key.startsWith("sticker-")) return "sticker";
  if (key.startsWith("music-")) return "music";
  if (key.startsWith("tool-")) return "tool";
  if (key.startsWith("skill-")) return "skill";
  if (key.startsWith("frame-")) return "frame";
  if (key.startsWith("banner-")) return "banner";
  if (key.startsWith("charm-")) return "charm";
  if (key.startsWith("aura-")) return "aura";
  if (key.startsWith("sfx-")) return "sfx";
  if (key.startsWith("emote-")) return "emote";
  if (key.startsWith("gear-")) return "gear";
  return ((_a = STATIC_COSMETICS[key]) == null ? void 0 : _a.category) || null;
}
function prettifyCosmeticName(key, name) {
  if (typeof name === "string" && name.trim()) {
    return name.replace(NAME_PREFIX_RE, "").trim();
  }
  return String(key || "").replace(/^(gacha-|seasonal-)/, "").split("-").slice(1).map((part) => part ? part.charAt(0).toUpperCase() + part.slice(1) : "").join(" ").trim();
}
function buildDerivedMeta(key, item = {}) {
  if (!key || STATIC_COSMETICS[key]) return null;
  const category = inferCosmeticCategory(key);
  if (!category) return null;
  const meta = {
    name: prettifyCosmeticName(key, item.name),
    emoji: item.icon || CATEGORY_DEFAULT_EMOJIS[category] || "📦",
    category,
    rarity: item.rarity || "common"
  };
  if (DISABLED_CATEGORIES.has(category)) {
    meta.disabled = true;
  }
  return meta;
}
function buildDerivedCosmetics() {
  const derived = {};
  const addItem = (key, item) => {
    const meta = buildDerivedMeta(key, item);
    if (meta) derived[key] = meta;
  };
  for (const item of SHOP_ITEMS || []) {
    addItem(item == null ? void 0 : item.unlockKey, item);
    for (const unlockKey of (item == null ? void 0 : item.bundleUnlocks) || []) {
      addItem(unlockKey, item);
    }
  }
  for (const pool of Object.values(GACHA_POOL || {})) {
    for (const item of pool || []) {
      addItem(item == null ? void 0 : item.unlockKey, item);
    }
  }
  for (const season of SEASONS || []) {
    for (const item of (season == null ? void 0 : season.exclusiveItems) || []) {
      addItem(item == null ? void 0 : item.unlockKey, item);
    }
  }
  return derived;
}
const COSMETIC_NAME_REPLACEMENTS = [
  ["Thunder Pulse", "Mạch sấm sét"],
  ["Sakura Dream", "Giấc mơ Sakura"],
  ["Firework Burst", "Bắn pháo hoa"],
  ["Sakura Rain", "Mưa Sakura"],
  ["Dragon", "Rồng"],
  ["Fire", "Lửa"],
  ["Purple", "Tím"],
  ["Fade", "Mờ dần"],
  ["Glitch", "Nhiễu sóng"],
  ["Lightning Strike", "Tia sét đánh"],
  ["Sparkles", "Lấp lánh"],
  ["Embers", "Tàn lửa"],
  ["Lanterns", "Đèn lồng"],
  ["Hearts", "Trái tim"],
  ["Nature", "Tự nhiên"],
  ["Hanami Background", "Nền hanami"],
  ["Momiji Theme", "Giao diện momiji"],
  ["Aurora Borealis", "Bắc cực quang"],
  ["Cherry Blossom Rain", "Mưa hoa anh đào"],
  ["Dragon Flame", "Hỏa long"],
  ["Deep Ocean", "Biển sâu"],
  ["Cosmic Void", "Hư không vũ trụ"],
  ["Neon Matrix", "Ma trận neon"],
  ["Golden Palace", "Cung điện vàng"],
  ["Thunderstorm", "Bão sấm"],
  ["Maneki Neko", "招き猫"],
  ["Hō-ō Phoenix", "鳳凰"],
  ["Tsuru Crane", "Hạc tsuru"],
  ["Dragon King", "Vua rồng"],
  ["Sakura Spirit", "Tinh linh sakura"],
  ["Ice Empress", "Nữ vương băng"],
  ["Shadow Ninja", "忍者 bóng tối"],
  ["Celestial Fox", "Thiên hồ"],
  ["Wind Samurai", "侍 gió"],
  ["Golden Buddha", "Phật vàng"],
  ["Harvest Festival", "Lễ hội mùa gặt"],
  ["Flame Master", "Bậc thầy lửa"],
  ["Frost King", "Vua băng"],
  ["Thunder Bolt", "Tia sấm"],
  ["Cosmic Star", "Sao vũ trụ"],
  ["Sakura Bloom", "Hoa đào nở"],
  ["Cyberpunk", "Viễn tưởng mạng"],
  ["Neon Tokyo", "Tokyo nê-ông"],
  ["Zen Garden", "Vườn thiền"],
  ["Lo-Fi Study", "Giai điệu thư giãn"],
  ["VIP", "Đặc biệt"],
  ["Sensei", "Thầy"],
  ["Gold", "Vàng"],
  ["Neon", "Nê-ông"],
  ["Coin +5%", "Xu +5%"],
  ["XP +5%", "Kinh nghiệm +5%"],
  ["Golden Dragon", "Rồng vàng"],
  ["Dragon Scale", "Vảy rồng"],
  ["Imperial Gold", "Vàng hoàng gia"],
  ["Flame Border", "Viền lửa"],
  ["Frost Crystal", "Pha lê băng"],
  ["Aurora Shine", "Ánh cực quang"],
  ["Sakura Petals", "Cánh hoa anh đào"],
  ["Meteor Shower", "Mưa sao băng"],
  ["Dragon Breath", "Hơi thở rồng"],
  ["Ice Shatter", "Băng vỡ"],
  ["Thunder Strike", "Sấm giáng"],
  ["Cherry Storm", "Bão hoa đào"],
  ["Golden Rain", "Mưa vàng"],
  ["Shadow Burst", "Bùng nổ bóng tối"],
  ["Wind Slash", "Chém gió"],
  ["Sacred Fire", "Lửa thần"],
  ["Dragon Aura", "Hào quang rồng"],
  ["Vocab Highlighter", "Tô sáng từ vựng"],
  ["Kanji Overlay", "Lớp phủ kanji"],
  ["Grammar Tag", "Thẻ ngữ pháp"],
  ["Free Hint Daily", "Gợi ý miễn phí mỗi ngày"],
  ["Combo Window +", "Cửa sổ combo +"],
  ["Daily Bonus +20%", "Thưởng ngày +20%"],
  ["Great Wave", "Sóng lớn"],
  ["Torii Gate", "Cổng torii"],
  ["Mount Fuji", "Núi Phú Sĩ"],
  ["Tokyo Night", "Đêm Tokyo"],
  ["Bamboo Forest", "Rừng trúc"],
  ["Koi Pond", "Hồ cá koi"],
  ["Cherry Blossom", "Hoa anh đào"],
  ["Aurora Shimmer", "Ánh cực quang"],
  ["Rainbow Shift", "Chuyển sắc cầu vồng"],
  ["Fade Slide", "Trượt mờ"],
  ["Zoom In", "Phóng to"],
  ["Sakura Fall", "Hoa đào rơi"],
  ["Flame Rise", "Lửa bốc lên"],
  ["Void Gate", "Cổng hư không"],
  ["Matrix Rain", "Mưa ma trận"],
  ["Cosmic Dust", "Bụi vũ trụ"],
  ["Starfield", "Trời sao"],
  ["Fireflies", "Đom đóm"],
  ["Bubbles", "Bong bóng"],
  ["Aurora Waves", "Sóng cực quang"],
  ["Autumn Leaves", "Lá thu"],
  ["Cherry Petals Rain", "Mưa cánh hoa đào"],
  ["Lightning Bolts", "Tia chớp"],
  ["Touch Stars", "Sao chạm"],
  ["Touch Sakura", "Hoa đào chạm"],
  ["Touch Notes", "Nốt nhạc chạm"],
  ["Touch Kanji Burst", "Bùng nổ kanji khi chạm"],
  ["Touch Coin Burst", "Bùng nổ xu khi chạm"],
  ["Touch Hearts", "Tim chạm"],
  ["Touch Fire", "Lửa chạm"],
  ["Touch Snow", "Tuyết chạm"],
  ["Touch Lightning", "Sấm chạm"],
  ["Touch Emoji Party", "Tiệc emoji chạm"],
  ["Touch Autumn", "Thu chạm"],
  ["Touch Bubbles", "Bong bóng chạm"],
  ["Retro 8-bit", "8-bit cổ điển"],
  ["Traditional JP", "Nhật truyền thống"],
  ["Wind Chime", "Chuông gió"],
  ["Taiko Drum", "Trống taiko"],
  ["Sakura", "Hoa đào"],
  ["Ocean", "Đại dương"],
  ["Sunset", "Hoàng hôn"],
  ["Forest", "Rừng xanh"],
  ["Galaxy", "Ngân hà"],
  ["Midnight", "Nửa đêm"],
  ["Autumn", "Mùa thu"],
  ["Amethyst", "Thạch anh tím"],
  ["Ember", "Than hồng"],
  ["Aurora", "Cực quang"],
  ["Tropical", "Nhiệt đới"],
  ["Lavender", "Oải hương"],
  ["Scholar", "Học giả"],
  ["Explorer", "Nhà thám hiểm"],
  ["Crown", "Vương miện"],
  ["Holographic", "Toàn ảnh"],
  ["Glass", "Kính"],
  ["Gradient", "Chuyển sắc"],
  ["Confetti", "Giấy kim tuyến"],
  ["Sparkle", "Lấp lánh"],
  ["Fireworks", "Pháo hoa"],
  ["Lightning", "Sấm chớp"],
  ["Rainbow", "Cầu vồng"],
  ["Snowfall", "Tuyết rơi"],
  ["Snow Falling", "Tuyết rơi"],
  ["Celestial", "Thiên không"],
  ["Bamboo", "Trúc"],
  ["Temple", "Đền chùa"],
  ["Banner", "Biểu ngữ"],
  ["Frame", "Khung"],
  ["Aura", "Hào quang"],
  ["Sticker", "Nhãn dán"],
  ["Music", "Nhạc"],
  ["Tool", "Công cụ"],
  ["Skill", "Kỹ năng"],
  ["Advanced Analytics", "Phân tích nâng cao"],
  ["Custom Quiz Builder", "Trình tạo quiz tùy chỉnh"],
  ["Study Calendar", "Lịch học"],
  ["Grammar Compare", "So sánh ngữ pháp"],
  ["Vocab Network", "Mạng từ vựng"],
  ["Streak Recovery", "Phục hồi chuỗi"],
  ["Export to PDF", "Xuất PDF"],
  ["SRS Insights", "Góc nhìn SRS"],
  ["Mistake Auto-Drill", "Luyện lỗi tự động"],
  ["Speed Review", "Ôn nhanh"],
  ["Daily Planner", "Kế hoạch ngày"],
  ["Weak Finder", "Tìm điểm yếu"],
  ["Sentence Builder", "Ghép câu"],
  ["Progress Share", "Chia sẻ tiến độ"],
  ["Free Hint Daily", "Gợi ý miễn phí mỗi ngày"],
  ["Combo Window", "Khung combo"],
  ["Daily Bonus +20%", "Thưởng ngày +20%"],
  ["Streak Bonus +10%", "Thưởng chuỗi +10%"],
  ["Quiz Accuracy +5%", "Chính xác quiz +5%"],
  ["SRS Boost", "Tăng SRS"],
  ["Gacha Luck +3%", "Vận gacha +3%"],
  ["Shop Discount 5%", "Giảm giá shop 5%"],
  ["Quiz Coin +2", "Xu quiz +2"],
  ["Auto Review", "Ôn tự động"],
  ["Double Daily", "Nhân đôi điểm danh"],
  ["Extra Life", "Thêm mạng"],
  ["Multi Combo +1", "Đa combo +1"],
  ["Text", "Màu chữ"],
  ["Entrance", "Hiệu ứng vào"],
  ["Avatar", "Hình đại diện"],
  ["Badge", "Huy hiệu"],
  ["Title", "Danh hiệu"],
  ["Theme", "Giao diện"],
  ["Card Style", "Kiểu thẻ"],
  ["Card", "Thẻ"],
  ["Effect", "Hiệu ứng"],
  ["Ninja", "忍者"],
  ["Samurai", "侍"],
  ["Geisha", "芸者"],
  ["Tengu", "天狗"],
  ["Yōkai", "妖怪"],
  ["Yokai", "妖怪"],
  ["Daruma", "達磨"],
  ["Kitsune", "狐"],
  ["Tanuki", "狸"],
  ["Shamisen", "三味線"],
  ["Onigiri", "おにぎり"],
  ["Torii", "鳥居"],
  ["Fuji", "富士"],
  ["Kintsugi", "金継ぎ"],
  ["Shibuya", "渋谷"],
  ["Tanabata", "七夕"],
  ["Koi", "鯉"],
  ["Raijin", "雷神"],
  ["Amaterasu", "天照"],
  ["Susanoo", "須佐之男"],
  ["Kawaii", "Dễ thương"],
  ["Yoroshiku", "よろしく"],
  ["Omedetou!", "おめでとう!"],
  ["Ganbatte!", "頑張って!"],
  ["Nani?!", "なに?!"],
  ["Sugoi!", "すごい!"]
];
const COSMETIC_NAME_PATTERNS = [
  [/^(.+?) Theme$/u, (_, base) => `Giao diện ${base}`],
  [/^(.+?) Avatar$/u, (_, base) => `Hình đại diện ${base}`],
  [/^(.+?) Badge$/u, (_, base) => `Huy hiệu ${base}`],
  [/^Title:\s*(.+)$/u, (_, base) => `Danh hiệu: ${base}`],
  [/^(.+?) Card$/u, (_, base) => `Thẻ ${base}`],
  [/^(.+?) Effect$/u, (_, base) => `Hiệu ứng ${base}`],
  [/^Sticker:\s*(.+)$/u, (_, base) => `Nhãn dán: ${base}`],
  [/^Music:\s*(.+)$/u, (_, base) => `Nhạc: ${base}`],
  [/^Tool:\s*(.+)$/u, (_, base) => `Công cụ: ${base}`],
  [/^Skill:\s*(.+)$/u, (_, base) => `Kỹ năng: ${base}`],
  [/^(.+?) Frame$/u, (_, base) => `Khung ${base}`],
  [/^(.+?) Banner$/u, (_, base) => `Biểu ngữ ${base}`],
  [/^(.+?) Aura$/u, (_, base) => `Hào quang ${base}`]
];
function applyCosmeticNamePatterns(name) {
  let current = name;
  for (const [pattern, replacer] of COSMETIC_NAME_PATTERNS) {
    if (pattern.test(current)) {
      current = current.replace(pattern, replacer);
      break;
    }
  }
  return current;
}
function localizeCosmeticName(name) {
  if (typeof name !== "string" || !name.trim()) return name;
  const normalizedName = applyCosmeticNamePatterns(name.trim());
  return COSMETIC_NAME_REPLACEMENTS.reduce((current, [from, to]) => current.split(from).join(to), normalizedName).trim();
}
function localizeCosmeticMeta(meta) {
  if (!meta) return null;
  return { ...meta, name: localizeCosmeticName(meta.name) };
}
function localizeCosmeticDisplayName(name) {
  return localizeCosmeticName(name);
}
const COSMETICS = {
  ...buildDerivedCosmetics(),
  ...STATIC_COSMETICS
};
function getCosmeticMeta(key) {
  return localizeCosmeticMeta(COSMETICS[key] || null);
}
function getCosmeticName(key) {
  var _a;
  return localizeCosmeticName(((_a = COSMETICS[key]) == null ? void 0 : _a.name) || null);
}
function isCosmeticDisabled(key) {
  var _a;
  return ((_a = COSMETICS[key]) == null ? void 0 : _a.disabled) === true;
}
export {
  GACHA_BOXES as G,
  SHOP_ITEMS as S,
  isTouchParticleUnlockKey as a,
  isAmbientParticleUnlockKey as b,
  getCosmeticName as c,
  getBoxRewardProfile as d,
  getBoxById as e,
  getFeaturedItemsForBox as f,
  getCosmeticMeta as g,
  GACHA_POOL as h,
  isCosmeticDisabled as i,
  localizeCosmeticDisplayName as l,
  rollGachaBox as r,
  summarizeGachaPull as s
};
