import { u as useShallow, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, aE as ModelViewer } from "./feature-3d-CFvJkEt3.js";
import { S as SHOP_ITEMS, h as GACHA_POOL } from "./cosmetic-registry-BevBw2sp.js";
/* empty css                 */
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
const COLLECTIONS = [
  { id: "sakura", name: "🌸 Bộ hoa anh đào", items: ["theme-sakura", "avatar-maneki", "effect-sakura-petals", "gacha-card-sakura"], reward: { coins: 500, title: "Bậc thầy hoa đào" } },
  { id: "warrior", name: "⚔️ Bộ chiến binh", items: ["badge-samurai", "avatar-ninja", "effect-lightning", "gacha-title-warrior"], reward: { coins: 300, border: "warrior" } },
  { id: "scholar", name: "📚 Bộ học giả", items: ["badge-sensei", "badge-scholar", "skill-coinBoost5", "skill-xpBoost5", "skill-hintFree"], reward: { coins: 800, xpBonus: 5 } },
  { id: "nature", name: "🌿 Bộ thiên nhiên", items: ["theme-ocean", "theme-forest", "theme-autumn"], reward: { coins: 400 } },
  { id: "night", name: "🌙 Bộ đêm sao", items: ["theme-galaxy", "theme-midnight", "theme-neon-tokyo"], reward: { coins: 400 } },
  { id: "lucky", name: "🍀 Bộ may mắn", items: ["luckyCharm", "jackpot", "rainbowOrb"], reward: { coins: 600 }, checkPowerUp: true },
  { id: "petMaster", name: "🐾 Bậc thầy thú cưng", items: ["shiba", "maneki", "tanuki", "koi", "tsuru", "kitsune", "usagi", "ryu"], reward: { coins: 1e3 }, checkPets: true },
  { id: "completionist", name: "👑 Nhà sưu tập hoàn hảo", items: [], minItems: 100, reward: { coins: 2e3, title: "👑 Vương miện" } },
  { id: "omamoriCollector", name: "🧿 Nhà sưu tập omamori", items: ["charm-gakugyo", "charm-shobai", "charm-kenko", "charm-gokaku", "charm-yakuyoke", "charm-anzan"], reward: { coins: 800 } },
  { id: "frameMaster", name: "🖼️ Bậc thầy khung", items: ["frame-bamboo", "frame-sakura", "frame-torii", "frame-crane", "frame-kimono"], reward: { coins: 500 } },
  { id: "festivalComplete", name: "🎪 Bộ lễ hội", items: ["emote-festival", "sfx-taiko", "banner-shibuya", "aura-flame", "frame-dragon"], reward: { coins: 1e3 } }
];
function checkCollectionComplete(collection, unlockedItems = {}, pets = {}, powerUps = {}) {
  if (collection.minItems) {
    return Object.keys(unlockedItems).length >= collection.minItems;
  }
  return collection.items.every((itemId) => {
    if (collection.checkPets) return !!pets[itemId];
    if (collection.checkPowerUp) return (powerUps[itemId] || 0) > 0;
    return !!unlockedItems[itemId];
  });
}
function getCollectionProgress(collection, unlockedItems = {}, pets = {}, powerUps = {}) {
  if (collection.minItems) {
    return { owned: Object.keys(unlockedItems).length, total: collection.minItems };
  }
  const owned = collection.items.filter((itemId) => {
    if (collection.checkPets) return !!pets[itemId];
    if (collection.checkPowerUp) return (powerUps[itemId] || 0) > 0;
    return !!unlockedItems[itemId];
  }).length;
  return { owned, total: collection.items.length };
}
function findShopItem(unlockKey) {
  if (!unlockKey) return null;
  try {
    const fromShop = (SHOP_ITEMS || []).find((si) => si.unlockKey === unlockKey || si.id === unlockKey);
    if (fromShop) return fromShop;
    try {
      const poolItems = Object.values(GACHA_POOL || {}).flat();
      const fromGacha = (poolItems || []).find((si) => si.unlockKey === unlockKey || si.id === unlockKey);
      if (fromGacha) return fromGacha;
    } catch (e) {
    }
    return null;
  } catch (e) {
    return null;
  }
}
function getCosmeticIcon(unlockKey) {
  const si = findShopItem(unlockKey);
  if (si && si.icon) return si.icon;
  return null;
}
function getCosmeticDisplayName(unlockKey) {
  const si = findShopItem(unlockKey);
  if (si) return si.name || si.label || unlockKey;
  return unlockKey;
}
function CollectionsPage() {
  const { coins, unlockedItems, pets, powerUps, collectionClaims, claimCollectionReward } = useLearningStore(useShallow((s) => ({
    coins: s.coins,
    unlockedItems: s.unlockedItems || {},
    pets: s.pets || {},
    powerUps: s.powerUps || {},
    collectionClaims: s.collectionClaims || {},
    claimCollectionReward: s.claimCollectionReward
  })));
  const handleClaim = (collection) => {
    if (collectionClaims[collection.id]) return;
    const isComplete = checkCollectionComplete(collection, unlockedItems, pets, powerUps);
    if (!isComplete) return;
    if (claimCollectionReward(collection.id, collection.reward.coins || 0)) {
      if (collection.reward.title) ;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-collections-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-matsuri-bg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-collections-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModelViewer, { modelId: "castle", height: "150px", background: "transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "🏆 コレクション Bộ sưu tập" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-collections-sub", children: "Hoàn thành các bộ sưu tập để nhận phần thưởng độc quyền" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-collections-coins", children: [
        "🪙 ",
        coins.toLocaleString()
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-collections-grid", children: COLLECTIONS.map((col) => {
      const { owned, total } = getCollectionProgress(col, unlockedItems, pets, powerUps);
      const isComplete = checkCollectionComplete(col, unlockedItems, pets, powerUps);
      const isClaimed = !!collectionClaims[col.id];
      const pct = total > 0 ? Math.round(owned / total * 100) : 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-collection-card ${isComplete ? "complete" : ""} ${isClaimed ? "claimed" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-collection-name", children: col.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-collection-progress", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-collection-progress-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-collection-progress-fill", style: { width: `${pct}%` } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            owned,
            "/",
            total,
            " (",
            pct,
            "%)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-collection-items", children: [
          col.items.slice(0, 6).map((itemId, i) => {
            const isOwned = col.checkPets ? !!pets[itemId] : col.checkPowerUp ? (powerUps[itemId] || 0) > 0 : !!unlockedItems[itemId];
            const icon = getCosmeticIcon(itemId) || (isOwned ? "✓" : "?");
            const title = getCosmeticDisplayName(itemId) || itemId;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-collection-item-dot ${isOwned ? "owned" : ""}`, title, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 14 }, children: icon }) }, i);
          }),
          col.items.length > 6 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-collection-more", children: [
            "+",
            col.items.length - 6
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-collection-reward", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Phần thưởng: 🪙 ",
            col.reward.coins
          ] }),
          col.reward.title && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-collection-reward-title", children: [
            "+ ",
            col.reward.title
          ] })
        ] }),
        isComplete && !isClaimed && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-collection-claim-btn", onClick: () => handleClaim(col), children: "🎁 Nhận thưởng" }),
        isClaimed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-collection-claimed-badge", children: "✅ Đã nhận" })
      ] }, col.id);
    }) })
  ] });
}
export {
  CollectionsPage as default
};
