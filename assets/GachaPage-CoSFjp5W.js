import { r as reactExports, j as jsxRuntimeExports, u as useShallow } from "./vendor-react-BUL8WuXG.js";
import { h as useLearningStore, bL as useTakaraStore, bR as selGems, bS as selShards, a2 as getCurrentSeason, bT as GACHA_PHASE_TIMINGS, bc as GACHA_PITY, bU as RARITY_COLORS$1, bV as RARITY_LABELS, bW as getCharmBonus, a5 as getPowerUpMeta } from "./index-BEJSIlFS.js";
import { E as EconomySceneHero } from "./EconomySceneHero-B_AmZV8_.js";
import { G as GACHA_BOXES, c as getBoxRewardProfile, f as getBoxById, h as getFeaturedItemsForBox, s as summarizeGachaPull, S as SHOP_ITEMS, r as rollGachaBox, g as getCosmeticName } from "./cosmetic-registry-CEb8QiBv.js";
import { C as ConfettiBurst } from "./ConfettiBurst-BVLR_uM0.js";
import { S as SparklePing } from "./SparklePing-BWX7eC-Z.js";
import { a as RARITY_COLORS } from "./rarity-tokens-i3-fv4xK.js";
import "./HitPause-BapLYhfu.js";
import { i as installAudioPrewarm, g as getAudioBus, p as playSfx } from "./sfx-catalog-CnWM5zfr.js";
/* empty css                 */
import { L as Link } from "./vendor-router-Dx6RIovR.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
const BANNERS = [
  {
    id: "std-standard",
    name: "Standard",
    nameVi: "Cơ Bản",
    start: 0,
    end: 99999,
    // permanent
    featuredKeys: ["unlock-avatar-kitsune", "unlock-theme-aurora"],
    rateUp: 0,
    pity: { soft: 50, hard: 80 },
    currency: "gem",
    price: { single: 15, ten: 135 }
  },
  {
    id: "seasonal-spring",
    name: "Spring Bloom",
    nameVi: "Xuân Mãn Khai",
    start: 60,
    end: 95,
    featuredKeys: ["unlock-theme-sakura", "unlock-avatar-crane", "unlock-effect-sakura-petals"],
    rateUp: 0.5,
    pity: { soft: 50, hard: 80 },
    currency: "gem",
    price: { single: 20, ten: 180 }
  },
  {
    id: "seasonal-summer",
    name: "Festival Nights",
    nameVi: "Đêm Hội Natsu",
    start: 150,
    end: 185,
    featuredKeys: ["unlock-theme-ember", "unlock-avatar-oni", "unlock-effect-firework"],
    rateUp: 0.5,
    pity: { soft: 50, hard: 80 },
    currency: "gem",
    price: { single: 20, ten: 180 }
  },
  {
    id: "seasonal-autumn",
    name: "Amber Leaves",
    nameVi: "Lá Hổ Phách",
    start: 240,
    end: 275,
    featuredKeys: ["unlock-theme-autumn", "unlock-avatar-tanuki", "unlock-badge-scholar"],
    rateUp: 0.5,
    pity: { soft: 50, hard: 80 },
    currency: "gem",
    price: { single: 20, ten: 180 }
  },
  {
    id: "seasonal-winter",
    name: "Snow Shrine",
    nameVi: "Đền Tuyết",
    start: 330,
    end: 365,
    featuredKeys: ["unlock-theme-midnight", "unlock-avatar-phoenix", "unlock-effect-snow"],
    rateUp: 0.5,
    pity: { soft: 50, hard: 80 },
    currency: "gem",
    price: { single: 20, ten: 180 }
  },
  {
    id: "character-kitsune",
    name: "Kitsune Trickster",
    nameVi: "Cáo Kitsune",
    start: 0,
    end: 7,
    featuredKeys: ["unlock-avatar-kitsune"],
    rateUp: 0.7,
    pity: { soft: 50, hard: 80 },
    currency: "gem",
    price: { single: 18, ten: 160 }
  }
];
function currentBanners(dayIndex) {
  return BANNERS.filter((b) => dayIndex >= b.start && dayIndex <= b.end);
}
function findBanner(id) {
  return BANNERS.find((b) => b.id === id) || null;
}
const BASE_RATES = { common: 0.7, rare: 0.22, epic: 0.065, legendary: 0.015 };
function resolveRng(rng, callerName) {
  if (typeof rng === "function") return rng;
  const isProd = (() => {
    var _a, _b;
    try {
      return Boolean((_b = (_a = import.meta) == null ? void 0 : _a.env) == null ? void 0 : _b.PROD);
    } catch (e) {
      return false;
    }
  })();
  if (isProd) {
    throw new Error(
      `[gacha] ${callerName} requires a seeded rng in production. Pass { rng: mulberry32(seed) } — Math.random fallback disabled so pity + pull sequences are reproducible.`
    );
  }
  return Math.random;
}
function pickRarity(counter, banner, rngFn) {
  const softHit = counter >= banner.pity.soft;
  const hardHit = counter >= banner.pity.hard;
  if (hardHit) return { rarity: "legendary", hit: "hard" };
  let rates = { ...BASE_RATES };
  if (softHit) {
    const ramp = Math.min(0.5, (counter - banner.pity.soft) * 0.04);
    rates.legendary += ramp;
    rates.common = Math.max(0.05, rates.common - ramp);
  }
  const r = rngFn();
  let acc = 0;
  for (const rar of ["legendary", "epic", "rare", "common"]) {
    acc += rates[rar];
    if (r <= acc) return { rarity: rar, hit: softHit ? "soft" : null };
  }
  return { rarity: "common", hit: null };
}
function pickItemOfRarity(pool, rarity, banner, rngFn) {
  const candidates = pool.filter((p) => p.rarity === rarity);
  if (!candidates.length) return null;
  const weights = candidates.map((c) => {
    var _a;
    return c.featured ? 1 + ((_a = banner.rateUp) != null ? _a : 0) : 1;
  });
  const total = weights.reduce((a, b) => a + b, 0);
  let r = rngFn() * total;
  for (let i = 0; i < candidates.length; i++) {
    r -= weights[i];
    if (r <= 0) return candidates[i];
  }
  return candidates[candidates.length - 1];
}
function pullOne({ banner, pool, counter = 0, rng }) {
  var _a;
  const rngFn = resolveRng(rng, "pullOne");
  const { rarity, hit } = pickRarity(counter, banner, rngFn);
  const nextCounter = rarity === "legendary" ? 0 : counter + 1;
  const item = pickItemOfRarity(pool, rarity, banner, rngFn);
  return {
    itemKey: (_a = item == null ? void 0 : item.key) != null ? _a : null,
    rarity,
    isFeatured: Boolean(item == null ? void 0 : item.featured),
    pityHit: hit,
    nextCounter
  };
}
function pullMany({ banner, pool, counter = 0, count = 10, rng }) {
  var _a;
  const results = [];
  let c = counter;
  let rngFn = resolveRng(rng, "pullMany");
  const guaranteeAtLeastRare = count >= 10;
  let hasRarePlus = false;
  for (let i = 0; i < count; i++) {
    const res = pullOne({ banner, pool, counter: c, rng: rngFn });
    c = res.nextCounter;
    if (res.rarity !== "common") hasRarePlus = true;
    results.push(res);
  }
  if (guaranteeAtLeastRare && !hasRarePlus) {
    for (let i = results.length - 1; i >= 0; i--) {
      if (results[i].rarity === "common") {
        const promoted = pickItemOfRarity(pool, "rare", banner, rngFn);
        results[i] = { ...results[i], rarity: "rare", itemKey: (_a = promoted == null ? void 0 : promoted.key) != null ? _a : results[i].itemKey };
        break;
      }
    }
  }
  return { pulls: results, finalCounter: c };
}
function shardsForDupe(rarity) {
  var _a;
  return (_a = { common: 1, rare: 3, epic: 10, legendary: 50 }[rarity]) != null ? _a : 1;
}
function getDayIndex(nowMs = Date.now()) {
  const d = new Date(nowMs);
  const start = new Date(d.getFullYear(), 0, 0);
  return Math.floor((d.getTime() - start.getTime()) / 864e5);
}
function RarityStream({ rarity = "legendary", duration = 1800, onDone }) {
  reactExports.useEffect(() => {
    if (!onDone) return void 0;
    const t = setTimeout(onDone, duration);
    return () => clearTimeout(t);
  }, [duration, onDone]);
  const color = RARITY_COLORS[rarity] || RARITY_COLORS.legendary;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-vfx-rarity-stream", "aria-hidden": "true", style: { "--vfx-duration": `${duration}ms`, "--rarity-color": color }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-vfx-rarity-stream__beam" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-vfx-rarity-stream__beam n4-vfx-rarity-stream__beam--b" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-vfx-rarity-stream__beam n4-vfx-rarity-stream__beam--c" })
  ] });
}
function Gacha3DScene() {
  return null;
}
const PULL_PHASE_COPY = {
  charging: "Đang gom vận may...",
  portal: "Đang mở cổng gacha...",
  burst: "Vận mệnh đang hạ xuống...",
  revealing: "Đang lật phần thưởng...",
  complete: "Phần thưởng đã chốt."
};
function applyReward(reward, { addCoins, grantPowerUp, unlockItem }) {
  if (!reward) return;
  if (reward.type === "coins") addCoins(reward.amount || 0, "gacha-reward");
  if (reward.type === "powerup") grantPowerUp(reward.powerUpId, reward.amount || 1, "gacha-reward");
  if (reward.type === "unlock") unlockItem(reward.unlockKey);
}
function getResultFlag(item) {
  if (item == null ? void 0 : item.isDuplicate) return "Đã có • Quy đổi";
  if (item == null ? void 0 : item.isNew) return "Mở khóa mới";
  if ((item == null ? void 0 : item.type) === "powerup") return "Vật phẩm hỗ trợ";
  if ((item == null ? void 0 : item.type) === "coins") return "Xu";
  return "Phần thưởng";
}
function getGachaItemDisplayName(item) {
  if (!item) return "";
  if (item.type === "unlock" && item.unlockKey) {
    return getCosmeticName(item.unlockKey) || item.name || item.unlockKey;
  }
  if (item.type === "powerup" && item.powerUpId) {
    const meta = getPowerUpMeta(item.powerUpId);
    const amount = Math.max(1, Number(item.amount) || 1);
    return amount > 1 ? `${meta.name} ×${amount}` : meta.name;
  }
  if (item.type === "coins") {
    return `${Number(item.amount || 0).toLocaleString("vi-VN")} xu`;
  }
  return item.name || "";
}
function getGachaRewardDisplayName(reward) {
  if (!reward) return "";
  if (reward.type === "unlock" && reward.unlockKey) {
    return getCosmeticName(reward.unlockKey) || reward.name || reward.unlockKey;
  }
  if (reward.type === "powerup" && reward.powerUpId) {
    const meta = getPowerUpMeta(reward.powerUpId);
    const amount = Math.max(1, Number(reward.amount) || 1);
    return amount > 1 ? `${meta.name} ×${amount}` : meta.name;
  }
  if (reward.type === "coins") {
    return `${Number(reward.amount || 0).toLocaleString("vi-VN")} xu`;
  }
  return reward.name || "";
}
function getPityProgress(value, goal) {
  return `${Math.max(0, Math.min(100, Math.round(value / goal * 100)))}%`;
}
const SHOP_INDEX = new Map(SHOP_ITEMS.map((i) => [i.unlockKey, i]));
function gemPullToDisplayItem(pullResult, ownedBefore) {
  const meta = SHOP_INDEX.get(pullResult.itemKey);
  const already = !!ownedBefore[pullResult.itemKey];
  const item = {
    id: pullResult.itemKey,
    rarity: pullResult.rarity,
    type: "unlock",
    unlockKey: pullResult.itemKey,
    icon: (meta == null ? void 0 : meta.icon) || "✨",
    name: (meta == null ? void 0 : meta.name) || pullResult.itemKey,
    isNew: !already,
    isDuplicate: already,
    pityHit: pullResult.pityHit || null,
    grantedRewards: already ? [{
      type: "shards",
      rarity: pullResult.rarity,
      amount: shardsForDupe(pullResult.rarity),
      icon: "💠",
      name: `+${shardsForDupe(pullResult.rarity)} mảnh ${RARITY_LABELS[pullResult.rarity]}`
    }] : [{
      type: "unlock",
      unlockKey: pullResult.itemKey,
      icon: (meta == null ? void 0 : meta.icon) || "✨",
      name: (meta == null ? void 0 : meta.name) || pullResult.itemKey
    }]
  };
  return item;
}
const PITY_STORAGE_KEY = "n4.gacha.gemPity.v1";
function GachaPage() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
  const {
    coins,
    gachaPity,
    spendCoins,
    addCoins,
    grantPowerUp,
    unlockItem,
    recordGachaPull,
    unlockedItems,
    powerUps,
    equippedCosmetics
  } = useLearningStore(useShallow((s) => ({
    coins: s.coins,
    gachaPity: s.gachaPity,
    spendCoins: s.spendCoins,
    addCoins: s.addCoins,
    grantPowerUp: s.grantPowerUp,
    unlockItem: s.unlockItem,
    recordGachaPull: s.recordGachaPull,
    unlockedItems: s.unlockedItems || {},
    powerUps: s.powerUps || {},
    equippedCosmetics: s.equippedCosmetics
  })));
  const gems = useTakaraStore(selGems);
  const shards = useTakaraStore(selShards);
  const spendGems = useTakaraStore((s) => s.spendGems);
  const addShards = useTakaraStore((s) => s.addShards);
  const [mode, setMode] = reactExports.useState("coin");
  const [selectedBox, setSelectedBox] = reactExports.useState(((_a = GACHA_BOXES[0]) == null ? void 0 : _a.id) || null);
  const dayIndex = getDayIndex();
  const banners = reactExports.useMemo(() => currentBanners(dayIndex), [dayIndex]);
  const [selectedBannerId, setSelectedBannerId] = reactExports.useState(((_b = banners[0]) == null ? void 0 : _b.id) || "std-standard");
  const [pulling, setPulling] = reactExports.useState(false);
  const [results, setResults] = reactExports.useState(null);
  const [revealIndex, setRevealIndex] = reactExports.useState(-1);
  const [pullPhase, setPullPhase] = reactExports.useState("idle");
  const [finalCutscene, setFinalCutscene] = reactExports.useState(false);
  const timersRef = reactExports.useRef([]);
  const [gemPity, setGemPity] = reactExports.useState(() => {
    try {
      return Number(localStorage.getItem(PITY_STORAGE_KEY)) || 0;
    } catch (e) {
      return 0;
    }
  });
  reactExports.useEffect(() => {
    installAudioPrewarm();
  }, []);
  const currentSeason = getCurrentSeason();
  const isMatsuri = (currentSeason == null ? void 0 : currentSeason.id) === "autumn";
  const boxProfiles = reactExports.useMemo(
    () => Object.fromEntries(GACHA_BOXES.map((box) => [box.id, getBoxRewardProfile(box.id)])),
    []
  );
  const activeBox = reactExports.useMemo(() => getBoxById(selectedBox) || GACHA_BOXES[0] || null, [selectedBox]);
  const boxProfile = reactExports.useMemo(() => boxProfiles[selectedBox] || getBoxRewardProfile(selectedBox), [boxProfiles, selectedBox]);
  const featuredItems = reactExports.useMemo(() => getFeaturedItemsForBox(selectedBox, 6), [selectedBox]);
  const resultSummary = reactExports.useMemo(() => summarizeGachaPull(results || []), [results]);
  const activeBanner = reactExports.useMemo(() => findBanner(selectedBannerId) || banners[0], [selectedBannerId, banners]);
  const bannerPool = reactExports.useMemo(() => {
    const list = SHOP_ITEMS.filter((i) => i.type === "unlock" && i.unlockKey).map((i) => ({
      key: i.unlockKey,
      rarity: i.rarity || "common"
    }));
    if (!activeBanner) return list;
    return list.map((p) => {
      var _a2;
      return { ...p, featured: (_a2 = activeBanner.featuredKeys) == null ? void 0 : _a2.includes(p.key) };
    });
  }, [activeBanner]);
  const clearTimers = reactExports.useCallback(() => {
    for (const timer of timersRef.current) clearTimeout(timer);
    timersRef.current = [];
  }, []);
  const queueTimer = reactExports.useCallback((callback, delay) => {
    const timer = setTimeout(callback, delay);
    timersRef.current.push(timer);
  }, []);
  reactExports.useEffect(() => () => clearTimers(), [clearTimers]);
  const saveGemPity = reactExports.useCallback((v) => {
    setGemPity(v);
    try {
      localStorage.setItem(PITY_STORAGE_KEY, String(v));
    } catch (e) {
    }
  }, []);
  const runAnimation = reactExports.useCallback((items) => {
    setPulling(true);
    setPullPhase("charging");
    setResults(null);
    setRevealIndex(-1);
    queueTimer(() => setPullPhase("portal"), GACHA_PHASE_TIMINGS.portal);
    queueTimer(() => setPullPhase("burst"), GACHA_PHASE_TIMINGS.burst);
    queueTimer(() => {
      setPulling(false);
      setResults(items);
      setPullPhase("revealing");
    }, GACHA_PHASE_TIMINGS.reveal);
    items.forEach((item, index) => {
      queueTimer(() => {
        var _a2, _b2;
        setRevealIndex(index);
        try {
          (_b2 = (_a2 = getAudioBus()).playRarityChime) == null ? void 0 : _b2.call(_a2, item.rarity);
        } catch (e) {
        }
      }, GACHA_PHASE_TIMINGS.revealStart + index * GACHA_PHASE_TIMINGS.revealStep);
    });
    const bestRarity = items.reduce((best, it) => {
      const order = { common: 0, rare: 1, epic: 2, legendary: 3 };
      return (order[it.rarity] || 0) > (order[best] || 0) ? it.rarity : best;
    }, "common");
    const completeAt = GACHA_PHASE_TIMINGS.revealStart + items.length * GACHA_PHASE_TIMINGS.revealStep + GACHA_PHASE_TIMINGS.completeDelay;
    queueTimer(() => {
      setPullPhase("complete");
      if (bestRarity === "legendary") setFinalCutscene(true);
    }, completeAt);
  }, [queueTimer]);
  const handleCoinPull = reactExports.useCallback(() => {
    const box = activeBox;
    if (!box || pulling || coins < box.price) return;
    if (!spendCoins(box.price, "gacha")) return;
    clearTimers();
    const charmKey = equippedCosmetics == null ? void 0 : equippedCosmetics.charm;
    const cb = charmKey ? getCharmBonus(charmKey) : null;
    const charmGachaBonus = cb && cb.type === "gacha" ? cb.value : 0;
    const planned = rollGachaBox(box, {
      pity: gachaPity,
      seasonalBonus: currentSeason == null ? void 0 : currentSeason.bonus,
      powerUps,
      ownedUnlocks: unlockedItems,
      charmGachaBonus
    });
    recordGachaPull(planned.items, box.price, box.id);
    for (const item of planned.items) {
      for (const reward of item.grantedRewards || []) {
        applyReward(reward, { addCoins, grantPowerUp, unlockItem });
      }
    }
    try {
      playSfx(getAudioBus(), "capsule-roll");
    } catch (e) {
    }
    runAnimation(planned.items);
  }, [
    activeBox,
    addCoins,
    clearTimers,
    coins,
    currentSeason,
    gachaPity,
    grantPowerUp,
    pulling,
    powerUps,
    recordGachaPull,
    spendCoins,
    unlockItem,
    unlockedItems,
    equippedCosmetics,
    runAnimation
  ]);
  const handleGemPull = reactExports.useCallback((count) => {
    if (!activeBanner || pulling) return;
    const price = count === 10 ? activeBanner.price.ten : activeBanner.price.single;
    const res = spendGems(price, `gacha:${activeBanner.id}:${count}`);
    if (!(res == null ? void 0 : res.ok)) {
      try {
        playSfx(getAudioBus(), "error");
      } catch (e) {
      }
      return;
    }
    clearTimers();
    const ownedSnapshot = { ...unlockedItems };
    const { pulls, finalCounter } = pullMany({
      banner: activeBanner,
      pool: bannerPool,
      counter: gemPity,
      count
    });
    saveGemPity(finalCounter);
    const unlockedInThisPull = /* @__PURE__ */ new Set();
    const displayItems = pulls.map((p) => {
      const already = !!ownedSnapshot[p.itemKey] || unlockedInThisPull.has(p.itemKey);
      if (already) {
        addShards(p.rarity, shardsForDupe(p.rarity));
      } else if (p.itemKey) {
        unlockItem == null ? void 0 : unlockItem(p.itemKey);
        unlockedInThisPull.add(p.itemKey);
      }
      return gemPullToDisplayItem(p, ownedSnapshot);
    });
    try {
      playSfx(getAudioBus(), "capsule-roll");
    } catch (e) {
    }
    runAnimation(displayItems);
  }, [activeBanner, pulling, spendGems, clearTimers, unlockedItems, bannerPool, gemPity, saveGemPity, addShards, unlockItem, runAnimation]);
  const handleBackToSelection = reactExports.useCallback(() => {
    clearTimers();
    setResults(null);
    setRevealIndex(-1);
    setPullPhase("idle");
    setPulling(false);
    setFinalCutscene(false);
  }, [clearTimers]);
  const handlePullAgain = reactExports.useCallback(() => {
    handleBackToSelection();
    if (mode === "coin") handleCoinPull();
    else handleGemPull(1);
  }, [handleBackToSelection, mode, handleCoinPull, handleGemPull]);
  const pityCards = [
    {
      id: "epic",
      label: "Bảo hiểm Sử thi (xu)",
      value: (gachaPity == null ? void 0 : gachaPity.epic) || 0,
      goal: GACHA_PITY.epicGuarantee,
      note: "Đủ số lượt kém may sẽ được đảm bảo từ Sử thi trở lên.",
      color: "var(--n4-neon-purple, #a855f7)"
    },
    {
      id: "legendary",
      label: "Bảo hiểm Huyền thoại (xu)",
      value: (gachaPity == null ? void 0 : gachaPity.legendary) || 0,
      goal: GACHA_PITY.legendaryGuarantee,
      note: "Mốc bảo hiểm Huyền thoại giúp chuỗi đen dài vẫn công bằng.",
      color: "var(--n4-neon-gold, #fbbf24)"
    }
  ];
  const showResultScene = pulling || results;
  if (showResultScene) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-gacha-page n4-gacha-result-scene${isMatsuri ? " matsuri" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-matsuri-bg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-gacha-back-btn", onClick: handleBackToSelection, children: "← Chọn Gacha khác" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-result-scene-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-coins", children: [
          "🪙 ",
          coins.toLocaleString("vi-VN"),
          " · 💎 ",
          gems.toLocaleString("vi-VN")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-result-scene-box", children: mode === "coin" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          activeBox == null ? void 0 : activeBox.icon,
          " ",
          activeBox == null ? void 0 : activeBox.name
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "🎏 ",
          (activeBanner == null ? void 0 : activeBanner.nameVi) || (activeBanner == null ? void 0 : activeBanner.name)
        ] }) })
      ] }),
      pulling && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-gacha-stage phase-${pullPhase}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Gacha3DScene, { phase: pullPhase }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-stage-core", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-stage-ring ring-a" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-stage-ring ring-b" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-stage-burst", children: "✨" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-stage-icon", children: mode === "coin" ? (activeBox == null ? void 0 : activeBox.icon) || "⛩️" : "🎏" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-stage-text", children: PULL_PHASE_COPY[pullPhase] || "Đang quay..." })
      ] }),
      results && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-results n4-page-enter", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-results-head", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-result-topline", children: "Kết quả đã chốt" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Phần thưởng" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-results-summary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-gacha-summary-chip", children: [
              "Mới ",
              resultSummary.newUnlocks
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-gacha-summary-chip", children: [
              "Quy đổi ",
              resultSummary.duplicates
            ] }),
            mode === "coin" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-gacha-summary-chip", children: [
                "Giá trị ~ ",
                resultSummary.totalValue.toLocaleString("vi-VN")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-gacha-summary-chip", children: [
                "Xu ",
                resultSummary.totalCoins
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-gacha-summary-chip", children: [
                "Vật phẩm ",
                resultSummary.totalPowerUps
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-result-cards", children: results.map((item, index) => {
          const revealed = index <= revealIndex;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `n4-gacha-result-card ${revealed ? "revealed" : "hidden"} rarity-${item.rarity} ${item.isDuplicate ? "duplicate" : ""} ${item.isNew ? "new" : ""}`,
              style: { "--rarity-color": RARITY_COLORS$1[item.rarity] },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-card-inner", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-card-front", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-result-flag", children: getResultFlag(item) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-result-icon", children: item.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-result-name", children: getGachaItemDisplayName(item) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-result-rarity", style: { color: RARITY_COLORS$1[item.rarity] }, children: RARITY_LABELS[item.rarity] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-result-rewards", children: (item.grantedRewards || []).map((reward, rewardIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-gacha-result-reward", children: [
                    reward.icon,
                    " ",
                    getGachaRewardDisplayName(reward)
                  ] }, `${reward.type}-${rewardIndex}-${reward.name}`)) }),
                  item.compensation && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-result-comp", children: item.compensation.label }),
                  item.pityHit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-result-comp", children: [
                    "Pity ",
                    item.pityHit
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-card-back", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-result-mystery", children: "❓" }) })
              ] })
            },
            `${item.id}-${index}`
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-result-scene-actions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "n4-gacha-again-btn",
              disabled: pulling || (mode === "coin" ? !activeBox || coins < ((_c = activeBox == null ? void 0 : activeBox.price) != null ? _c : Infinity) : !activeBanner || gems < ((_e = (_d = activeBanner == null ? void 0 : activeBanner.price) == null ? void 0 : _d.single) != null ? _e : Infinity)),
              onClick: handlePullAgain,
              children: [
                "🔄 Quay lại · ",
                mode === "coin" ? `${(_f = activeBox == null ? void 0 : activeBox.price) == null ? void 0 : _f.toLocaleString("vi-VN")} 🪙` : `${(_g = activeBanner == null ? void 0 : activeBanner.price) == null ? void 0 : _g.single} 💎`
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-gacha-back-btn", onClick: handleBackToSelection, children: "← Chọn Gacha khác" })
        ] })
      ] }),
      finalCutscene && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RarityStream, { rarity: "legendary", duration: 1800, onDone: () => setFinalCutscene(false) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ConfettiBurst, { rarity: "legendary", duration: 1500, density: "high" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SparklePing, { duration: 900 })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-gacha-page${isMatsuri ? " matsuri" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(EconomySceneHero, { scene: "DungeonScene" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-matsuri-bg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "⛩️ Lò Gacha" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-gacha-sub", children: "Hai nhánh quay: xu cho hộp cơ bản đến Mythic, đá quý cho banner mùa. Mọi món trùng đều được quy đổi." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-coins", children: [
        "🪙 ",
        coins.toLocaleString("vi-VN"),
        " · 💎 ",
        gems.toLocaleString("vi-VN")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-status-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-status-badge", children: "Đang bật bồi hoàn trùng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-status-badge", children: "Mỹ phẩm đã sở hữu luôn được bảo toàn" }),
        (currentSeason == null ? void 0 : currentSeason.bonusDesc) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-status-badge accent", children: currentSeason.bonusDesc }),
        shards.common + shards.rare + shards.epic + shards.legendary > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-gacha-status-badge", children: [
          "Mảnh đổi: 🔹",
          shards.common,
          " 💎",
          shards.rare,
          " 💠",
          shards.epic,
          " 🔮",
          shards.legendary
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-mode-switch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: mode === "coin" ? "is-selected" : "",
            onClick: () => setMode("coin"),
            children: "🪙 Hộp xu"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: mode === "gem" ? "is-selected" : "",
            onClick: () => setMode("gem"),
            children: "💎 Banner đá quý"
          }
        )
      ] })
    ] }),
    mode === "coin" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-boxes", children: GACHA_BOXES.map((box) => {
        var _a2, _b2;
        const profile = boxProfiles[box.id];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: `n4-gacha-box ${selectedBox === box.id ? "selected" : ""} ${coins < box.price ? "disabled" : ""}`,
            onClick: () => setSelectedBox(box.id),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-box-icon", children: box.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-box-name", children: box.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-box-role", children: (profile == null ? void 0 : profile.bestFor) || "Đẩy nhanh bộ sưu tập" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-gacha-box-info", children: [
                box.itemCount,
                " phần thưởng"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-gacha-box-price", children: [
                "🪙 ",
                box.price.toLocaleString("vi-VN")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-box-desc", children: box.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-box-meta", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Giá trị x",
                  ((_b2 = (_a2 = profile == null ? void 0 : profile.efficiency) == null ? void 0 : _a2.toFixed) == null ? void 0 : _b2.call(_a2, 2)) || "0.00"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Sử thi+ ",
                  Math.round(((profile == null ? void 0 : profile.epicPlusChance) || 0) * 100),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-rate-grid", children: Object.entries(box.rates).filter(([, rate]) => rate > 0).map(([rarity, rate]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `n4-gacha-rate-chip rarity-${rarity}`, children: [
                RARITY_LABELS[rarity],
                " ",
                rate,
                "%"
              ] }, rarity)) }),
              box.guaranteedMin && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-gacha-box-guarantee", children: [
                "Đảm bảo ",
                RARITY_LABELS[box.guaranteedMin],
                "+"
              ] })
            ]
          },
          box.id
        );
      }) }),
      activeBox && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-spotlight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-spotlight-copy", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-spotlight-eyebrow", children: [
            activeBox.icon,
            " Hộp nổi bật"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-gacha-spotlight-title", children: activeBox.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-gacha-spotlight-desc", children: activeBox.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-spotlight-role", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: (boxProfile == null ? void 0 : boxProfile.bestFor) || "Đẩy nhanh bộ sưu tập" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (boxProfile == null ? void 0 : boxProfile.tone) || "Tổ hợp thưởng linh hoạt" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-spotlight-meta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              activeBox.itemCount,
              " món / lượt quay"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Giá trị sưu tập ~ ",
              ((_h = boxProfile == null ? void 0 : boxProfile.expectedValue) == null ? void 0 : _h.toLocaleString("vi-VN")) || 0
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Hiệu suất x",
              ((_j = (_i = boxProfile == null ? void 0 : boxProfile.efficiency) == null ? void 0 : _i.toFixed) == null ? void 0 : _j.call(_i, 2)) || "0.00"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Sử thi+ ",
              Math.round(((boxProfile == null ? void 0 : boxProfile.epicPlusChance) || 0) * 100),
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Huyền thoại ",
              Math.round(((boxProfile == null ? void 0 : boxProfile.legendaryChance) || 0) * 100),
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Bảo toàn trùng ",
              Math.round(((boxProfile == null ? void 0 : boxProfile.duplicateRetention) || 0) * 100),
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Quy đổi trùng ~ ",
              ((_k = boxProfile == null ? void 0 : boxProfile.duplicateValue) == null ? void 0 : _k.toLocaleString("vi-VN")) || 0
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Món ngon nhất ~ ",
              ((_l = boxProfile == null ? void 0 : boxProfile.bestHitValue) == null ? void 0 : _l.toLocaleString("vi-VN")) || 0
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: activeBox.guaranteedMin ? `Tối thiểu ${RARITY_LABELS[activeBox.guaranteedMin]}+` : "Tỉ lệ phẩm chất mở" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-featured", children: featuredItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-gacha-featured-item rarity-${item.rarity}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-featured-icon", children: item.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-featured-name", children: getGachaItemDisplayName(item) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-featured-rarity", style: { color: RARITY_COLORS$1[item.rarity] }, children: RARITY_LABELS[item.rarity] })
        ] }, item.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "n4-gacha-pull-btn",
          disabled: !activeBox || coins < ((_m = activeBox == null ? void 0 : activeBox.price) != null ? _m : Infinity),
          onClick: handleCoinPull,
          children: [
            "⛩️ Quay ",
            activeBox == null ? void 0 : activeBox.name,
            " · ",
            (_n = activeBox == null ? void 0 : activeBox.price) == null ? void 0 : _n.toLocaleString("vi-VN"),
            " 🪙"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-pity-grid", children: pityCards.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-pity-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-pity-top", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: card.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            card.value,
            "/",
            card.goal
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-pity-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "n4-gacha-pity-fill",
            style: { width: getPityProgress(card.value, card.goal), "--pity-color": card.color }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-pity-note", children: card.note })
      ] }, card.id)) })
    ] }),
    mode === "gem" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-remaster__banners", children: banners.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: `n4-gacha-remaster__banner ${selectedBannerId === b.id ? "is-selected" : ""}`,
          onClick: () => setSelectedBannerId(b.id),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-gacha-remaster__banner-name", children: [
              "🎏 ",
              b.nameVi || b.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-gacha-remaster__banner-sub", children: [
              "Featured: ",
              b.featuredKeys.length,
              " · Rate-up ×",
              (1 + (b.rateUp || 0)).toFixed(1)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-gacha-remaster__banner-sub", children: [
              "💎 ",
              b.price.single,
              " / 10× ",
              b.price.ten
            ] })
          ]
        },
        b.id
      )) }),
      activeBanner && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-spotlight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-spotlight-copy", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-spotlight-eyebrow", children: "🎏 Banner đá quý" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-gacha-spotlight-title", children: activeBanner.nameVi || activeBanner.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-gacha-spotlight-desc", children: [
            "Tỉ lệ rate-up ×",
            (1 + (activeBanner.rateUp || 0)).toFixed(1),
            " cho các món featured. Pity mềm ",
            activeBanner.pity.soft,
            " / pity cứng ",
            activeBanner.pity.hard,
            ". Trùng tự đổi thành mảnh."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-spotlight-meta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "1 lượt · ",
              activeBanner.price.single,
              " 💎"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "10 lượt · ",
              activeBanner.price.ten,
              " 💎"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Guarantee rare+ mỗi 10 lượt" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Hard pity → legendary" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-featured", children: activeBanner.featuredKeys.map((key) => {
          const meta = SHOP_INDEX.get(key);
          if (!meta) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-gacha-featured-item rarity-${meta.rarity || "common"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-featured-icon", children: meta.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gacha-featured-name", children: meta.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "n4-gacha-featured-rarity",
                style: { color: RARITY_COLORS$1[meta.rarity || "common"] },
                children: RARITY_LABELS[meta.rarity || "common"]
              }
            )
          ] }, key);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-remaster__pity", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-remaster__pity-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "n4-gacha-remaster__pity-fill",
            style: { width: `${Math.min(100, gemPity / (((_o = activeBanner == null ? void 0 : activeBanner.pity) == null ? void 0 : _o.hard) || 80) * 100)}%` }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-remaster__pity-label", children: [
          "Pity đá quý: ",
          gemPity,
          " / ",
          ((_p = activeBanner == null ? void 0 : activeBanner.pity) == null ? void 0 : _p.hard) || 80,
          gemPity >= (((_q = activeBanner == null ? void 0 : activeBanner.pity) == null ? void 0 : _q.soft) || 50) && " · Chế độ soft — tỉ lệ legendary tăng"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "n4-gacha-pull-btn",
            disabled: !activeBanner || gems < ((_s = (_r = activeBanner == null ? void 0 : activeBanner.price) == null ? void 0 : _r.single) != null ? _s : Infinity),
            onClick: () => handleGemPull(1),
            children: [
              "🎲 Quay 1 · ",
              (_t = activeBanner == null ? void 0 : activeBanner.price) == null ? void 0 : _t.single,
              " 💎"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "n4-gacha-pull-btn",
            disabled: !activeBanner || gems < ((_v = (_u = activeBanner == null ? void 0 : activeBanner.price) == null ? void 0 : _u.ten) != null ? _v : Infinity),
            onClick: () => handleGemPull(10),
            children: [
              "🎲🎲 Quay 10 · ",
              (_w = activeBanner == null ? void 0 : activeBanner.price) == null ? void 0 : _w.ten,
              " 💎 (guarantee rare+)"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gacha-gem-help", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Cách kiếm đá quý: (1) gacha xu trùng → mảnh, (2) quest tuần, (3) sub-game rơi hiếm. Mảnh có thể dùng để craft item trong ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/market", children: "Chợ" }),
        "."
      ] }) })
    ] })
  ] });
}
export {
  GachaPage as default
};
