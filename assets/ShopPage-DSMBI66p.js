import { r as reactExports, u as useShallow, j as jsxRuntimeExports, b as reactDomExports } from "./vendor-react-BUL8WuXG.js";
import { j as useManagedTimeout, a2 as getCurrentSeason, h as useLearningStore, a3 as getItemBonuses, a4 as getItemEffectDescription, a5 as getPowerUpMeta } from "./index-BEJSIlFS.js";
import { E as EconomySceneHero } from "./EconomySceneHero-B_AmZV8_.js";
import { u as useDialogFocus } from "./useDialogFocus-CowhWfi-.js";
import { S as SHOP_ITEMS, i as isCosmeticDisabled, a as isTouchParticleUnlockKey, b as isAmbientParticleUnlockKey, g as getCosmeticName, l as localizeCosmeticDisplayName } from "./cosmetic-registry-CEb8QiBv.js";
/* empty css                 */
import { M as ModelViewer } from "./ModelViewer-CaRNmJCy.js";
import { L as Link } from "./vendor-router-Dx6RIovR.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./WorldSurfaceContext-CUHCnPUQ.js";
const SHOP_3D_MAP = {
  desk_basic: "executive-desk",
  desk_fancy: "computer-desk",
  lamp: "desk-lamp",
  lamp_ceiling: "ceiling-lamp",
  bookshelf: "bookshelf",
  bed: "double-bed",
  chair: "club-arm-chair",
  coffee: "coffee-machine",
  fireplace: "fireplace",
  wardrobe: "wardrobe",
  monitor: "monitor",
  guitar: "guitar",
  fridge: "fridge"
};
const CATEGORIES = [
  { id: "all", label: "Tất cả", icon: "🏪" },
  { id: "seasonal", label: "Mùa vụ", icon: "🌸", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("seasonal-");
  } },
  { id: "consumable", label: "Hỗ trợ", icon: "⚡" },
  { id: "bundle", label: "Combo", icon: "🎁" },
  { id: "textcolor", label: "Màu tên", icon: "🌈", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("textcolor-");
  } },
  { id: "effect", label: "Hiệu ứng", icon: "🎊", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("effect-");
  } },
  { id: "entrance", label: "Hiệu ứng vào", icon: "🎬", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("entrance-");
  } },
  { id: "particleAmbient", label: "Hạt nền", icon: "🫧", filterFn: (i) => isAmbientParticleUnlockKey(i.unlockKey) },
  { id: "particleTouch", label: "Hạt chạm", icon: "✨", filterFn: (i) => isTouchParticleUnlockKey(i.unlockKey) },
  { id: "theme", label: "Giao diện", icon: "🎨", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("theme-");
  } },
  { id: "card", label: "Kiểu thẻ", icon: "💎", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("card-");
  } },
  { id: "avatar", label: "Hình đại diện", icon: "🥷", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("avatar-");
  } },
  { id: "badge", label: "Huy hiệu", icon: "⭐", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("badge-");
  } },
  { id: "title", label: "Danh hiệu", icon: "🏷️", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("title-");
  } },
  { id: "skill", label: "Kỹ năng", icon: "📈", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("skill-");
  } },
  { id: "sticker", label: "Nhãn dán", icon: "😺", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("sticker-");
  } },
  { id: "music", label: "Nhạc", icon: "🎵", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("music-");
  } },
  { id: "tool", label: "Công cụ", icon: "🔧", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("tool-");
  } },
  { id: "charm", label: "お守り", icon: "🧿", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("charm-");
  } },
  { id: "frame", label: "Khung", icon: "🖼️", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("frame-");
  } },
  { id: "banner", label: "Biểu ngữ", icon: "🏞️", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("banner-");
  } },
  { id: "aura", label: "Hào quang", icon: "💫", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("aura-");
  } },
  { id: "sfx", label: "SFX", icon: "🔊", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("sfx-");
  } },
  { id: "emote", label: "Biểu cảm", icon: "😄", filterFn: (i) => {
    var _a;
    return (_a = i.unlockKey) == null ? void 0 : _a.startsWith("emote-");
  } },
  { id: "unlock", label: "Khác", icon: "🔓" }
];
const SHOP_GROUPS = [
  { id: "all", label: "Tất cả", icon: "🏪", subs: [] },
  { id: "support", label: "Hỗ trợ", icon: "⚡", subs: ["consumable", "skill", "charm"] },
  { id: "bundle", label: "Combo", icon: "🎁", subs: [] },
  { id: "appearance", label: "Giao diện", icon: "🎨", subs: ["theme", "card"] },
  { id: "profile", label: "Hồ sơ", icon: "👤", subs: ["avatar", "frame", "badge", "title", "banner", "aura", "sticker", "textcolor"] },
  { id: "fx", label: "Hiệu ứng", icon: "✨", subs: ["effect", "entrance", "particleAmbient", "particleTouch"] },
  { id: "interactive", label: "Tương tác", icon: "🔊", subs: ["sfx", "music", "emote"] },
  { id: "tools", label: "Công cụ", icon: "🔧", subs: ["tool"] },
  { id: "seasonal", label: "Mùa vụ", icon: "🌸", subs: [] },
  { id: "unlock", label: "Khác", icon: "🔓", subs: [] }
];
function shopItemMatchesGroup(item, groupId) {
  var _a, _b;
  if (groupId === "all") return true;
  if (groupId === "bundle") return item.type === "bundle";
  if (groupId === "seasonal") return (_a = item.unlockKey) == null ? void 0 : _a.startsWith("seasonal-");
  if (groupId === "unlock") {
    if (item.type !== "unlock") return false;
    const taken = CATEGORIES.some((c) => {
      var _a2;
      return (_a2 = c.filterFn) == null ? void 0 : _a2.call(c, item);
    });
    return !taken;
  }
  const group = SHOP_GROUPS.find((g) => g.id === groupId);
  if (!group || !((_b = group.subs) == null ? void 0 : _b.length)) return false;
  if (group.subs.includes("consumable") && item.type === "consumable") return true;
  return group.subs.some((subId) => {
    var _a2;
    const catDef = CATEGORIES.find((c) => c.id === subId);
    return (_a2 = catDef == null ? void 0 : catDef.filterFn) == null ? void 0 : _a2.call(catDef, item);
  });
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
const SHOP_BUNDLE_DISPLAY_NAMES = {
  starterPack: "Gói khởi đầu",
  premiumPack: "Gói cao cấp",
  weeklyPack: "Gói tăng lực tuần",
  survivalKit: "Bộ sinh tồn",
  ultimatePack: "Gói tối thượng",
  "bundle-dragon-set": "Bộ rồng",
  "bundle-sakura-set": "Bộ hoa đào",
  "bundle-cyber-set": "Bộ cyber",
  "bundle-ocean-set": "Bộ đại dương",
  "bundle-golden-set": "Bộ vàng ròng",
  "bundle-frost-set": "Bộ băng giá",
  "bundle-cosmic-set": "Bộ vũ trụ",
  "bundle-shadow-set": "Bộ bóng tối",
  "bundle-neon-set": "Bộ neon",
  "bundle-starter-deluxe": "Gói khởi đầu XL"
};
function getShopDisplayName(item) {
  if (!item) return "";
  if (item.type === "unlock" && item.unlockKey) {
    return getCosmeticName(item.unlockKey) || localizeCosmeticDisplayName(item.name || item.unlockKey);
  }
  if (item.type === "bundle") {
    return SHOP_BUNDLE_DISPLAY_NAMES[item.id] || item.name;
  }
  if (item.powerUpId) {
    const meta = getPowerUpMeta(item.powerUpId);
    const amount = Math.max(1, Number(item.amount) || 1);
    return amount > 1 ? `${meta.name} ×${amount}` : meta.name;
  }
  return item.name || "";
}
function getShopBundleEntryLabel(bundleItem) {
  const meta = getPowerUpMeta(bundleItem.powerUpId);
  return `${bundleItem.amount}× ${meta.icon} ${meta.name}`;
}
function ShopPage() {
  const [group, setGroup] = reactExports.useState("all");
  const [subCategory, setSubCategory] = reactExports.useState("all");
  const [search, setSearch] = reactExports.useState("");
  const [rarity, setRarity] = reactExports.useState("all");
  const [buying, setBuying] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [purchaseHistory, setPurchaseHistory] = reactExports.useState([]);
  const [previewItem, setPreviewItem] = reactExports.useState(null);
  const previewDialogRef = useDialogFocus(Boolean(previewItem), () => setPreviewItem(null));
  const feedbackTimerRef = reactExports.useRef(null);
  const purchaseHistoryTimerRef = reactExports.useRef(null);
  const { scheduleTimeout, clearManagedTimeout } = useManagedTimeout();
  const currentSeason = getCurrentSeason();
  const allShopItems = reactExports.useMemo(() => {
    const seasonalItems = currentSeason.exclusiveItems || [];
    return [...SHOP_ITEMS, ...seasonalItems];
  }, [currentSeason]);
  const { coins, powerUps, spendCoins, grantPowerUp, unlockedItems, equippedCosmetics, unlockItem, economyLog } = useLearningStore(
    useShallow((s) => ({
      coins: s.coins,
      powerUps: s.powerUps,
      spendCoins: s.spendCoins,
      grantPowerUp: s.grantPowerUp,
      unlockedItems: s.unlockedItems || {},
      equippedCosmetics: s.equippedCosmetics || {},
      unlockItem: s.unlockItem,
      economyLog: s.economyLog || []
    }))
  );
  const shopDiscount = reactExports.useMemo(
    () => getItemBonuses({ unlockedItems, equippedCosmetics }).shopDiscount,
    [unlockedItems, equippedCosmetics]
  );
  const getEffectivePrice = reactExports.useCallback(
    (item) => Math.max(0, Math.round(item.price * (1 - Math.min(0.5, shopDiscount || 0)))),
    [shopDiscount]
  );
  reactExports.useEffect(() => {
    clearManagedTimeout(purchaseHistoryTimerRef.current);
    if (purchaseHistory.length === 0) {
      purchaseHistoryTimerRef.current = null;
      return;
    }
    purchaseHistoryTimerRef.current = scheduleTimeout(() => {
      purchaseHistoryTimerRef.current = null;
      setPurchaseHistory([]);
    }, 3e3);
  }, [clearManagedTimeout, purchaseHistory, scheduleTimeout]);
  const filteredItems = reactExports.useMemo(() => {
    const TYPE_ORDER = { consumable: 0, bundle: 1, unlock: 2 };
    const SUBTYPE_ORDER = { "textcolor-": 0, "effect-": 1, "entrance-": 2, "particle-touch-": 3, "particle-": 4, "theme-": 5, "card-": 6, "avatar-": 7, "badge-": 8, "title-": 9, "skill-": 10, "sticker-": 11, "music-": 12, "tool-": 13 };
    const getSubOrder = (key) => {
      if (!key) return 99;
      for (const [prefix, order] of Object.entries(SUBTYPE_ORDER)) {
        if (key.startsWith(prefix)) return order;
      }
      return 99;
    };
    return allShopItems.filter((item) => {
      const displayName = getShopDisplayName(item).toLowerCase();
      const matchSearch = displayName.includes(search.toLowerCase()) || item.desc.toLowerCase().includes(search.toLowerCase());
      const matchRarity = rarity === "all" || item.rarity === rarity;
      let matchGroup = shopItemMatchesGroup(item, group);
      let matchSub = true;
      if (matchGroup && subCategory !== "all") {
        const catDef = CATEGORIES.find((c) => c.id === subCategory);
        if (subCategory === "consumable") matchSub = item.type === "consumable";
        else if (catDef == null ? void 0 : catDef.filterFn) matchSub = catDef.filterFn(item);
        else matchSub = item.type === subCategory;
      }
      return matchSearch && matchGroup && matchSub && matchRarity;
    }).sort((a, b) => {
      var _a, _b;
      const ta = (_a = TYPE_ORDER[a.type]) != null ? _a : 99;
      const tb = (_b = TYPE_ORDER[b.type]) != null ? _b : 99;
      if (ta !== tb) return ta - tb;
      const sa = getSubOrder(a.unlockKey);
      const sb = getSubOrder(b.unlockKey);
      if (sa !== sb) return sa - sb;
      return a.price - b.price;
    });
  }, [group, subCategory, search, rarity, allShopItems]);
  const activeGroupDef = SHOP_GROUPS.find((g) => g.id === group) || SHOP_GROUPS[0];
  const subPills = activeGroupDef.subs || [];
  const queueFeedbackReset = reactExports.useCallback((delayMs, resetBuying = false) => {
    clearManagedTimeout(feedbackTimerRef.current);
    feedbackTimerRef.current = scheduleTimeout(() => {
      feedbackTimerRef.current = null;
      setFeedback(null);
      if (resetBuying) setBuying(null);
    }, delayMs);
  }, [clearManagedTimeout, scheduleTimeout]);
  const handleBuy = reactExports.useCallback((item) => {
    const itemName = getShopDisplayName(item);
    const isDisabledPlaceholder = item.type === "unlock" && isCosmeticDisabled(item.unlockKey);
    if (isDisabledPlaceholder) {
      setFeedback({ type: "info", msg: `${itemName} đang được hoàn thiện. Vật phẩm này chưa thể mua hoặc trang bị.` });
      queueFeedbackReset(2800);
      return;
    }
    const effectivePrice = getEffectivePrice(item);
    if (coins < effectivePrice) {
      setFeedback({ type: "error", msg: "Không đủ xu! Hãy luyện tập thêm để kiếm xu." });
      queueFeedbackReset(2500);
      return;
    }
    if (item.type === "unlock" && unlockedItems[item.unlockKey]) {
      setFeedback({ type: "info", msg: "Bạn đã sở hữu item này." });
      queueFeedbackReset(2e3);
      return;
    }
    setBuying(item.id);
    const success = spendCoins(effectivePrice, `shop:${item.id}`);
    if (!success) {
      setBuying(null);
      setFeedback({ type: "error", msg: "Giao dịch thất bại!" });
      queueFeedbackReset(2e3);
      return;
    }
    if (item.bundle) {
      item.bundle.forEach((b) => grantPowerUp(b.powerUpId, b.amount, "shop"));
    }
    if (item.bundleUnlocks) {
      item.bundleUnlocks.forEach((key) => unlockItem == null ? void 0 : unlockItem(key));
    }
    if (!item.bundle && !item.bundleUnlocks) {
      if (item.powerUpId) {
        grantPowerUp(item.powerUpId, item.amount || 1, "shop");
      } else if (item.type === "unlock" && item.unlockKey) {
        unlockItem == null ? void 0 : unlockItem(item.unlockKey);
      }
    }
    setPurchaseHistory((prev) => [...prev, item.id]);
    if (item.type === "unlock" || item.bundleUnlocks) ;
    setFeedback({ type: "success", msg: `🎉 Đã mua ${itemName}!` });
    queueFeedbackReset(1800, true);
  }, [coins, spendCoins, grantPowerUp, queueFeedbackReset, unlockItem, unlockedItems, getEffectivePrice]);
  const totalPowerUps = Object.values(powerUps || {}).reduce((s, v) => s + v, 0);
  const totalUnlocked = Object.keys(unlockedItems).length;
  const recentLog = reactExports.useMemo(() => (economyLog || []).slice(-8).reverse(), [economyLog]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-page n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(EconomySceneHero, { scene: "MarketplaceScene" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-matsuri-bg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-page-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "n4-btn n4-btn-ghost n4-btn-icon n4-shop-back", children: "←" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-page-title-area", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "n4-shop-page-title", children: "🛍️ Cửa hàng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-shop-page-subtitle", children: "Đổi coin lấy hiệu ứng, giao diện và huy hiệu" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-page-wallet", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-wallet-icon", children: "🪙" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-wallet-amount", children: coins.toLocaleString("vi-VN") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-shop-seasonal-banner season-${currentSeason.id}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-seasonal-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-seasonal-badge", children: [
          "Sự kiện mùa ",
          currentSeason.name.split(" ")[0]
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-shop-seasonal-title", children: currentSeason.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-shop-seasonal-bonus", children: [
          "🎁 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Thưởng mùa:" }),
          " ",
          currentSeason.bonusDesc
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-shop-seasonal-icon", children: currentSeason.id === "spring" ? "🌸" : currentSeason.id === "summer" ? "🎆" : currentSeason.id === "autumn" ? "🍂" : "❄️" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-stats-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-stat-value", children: totalPowerUps }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-stat-label", children: "Vật phẩm hỗ trợ" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-stat-value", children: totalUnlocked }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-stat-label", children: "Đã mở khóa" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-stat-value", children: recentLog.length > 0 ? recentLog.filter((l) => l.type === "spend").length : 0 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-stat-label", children: "Đã mua gần đây" })
      ] })
    ] }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-shop-toast n4-shop-toast-${feedback.type}`, children: feedback.msg }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-shop-categories", children: SHOP_GROUPS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: `n4-shop-cat-btn ${group === g.id ? "active" : ""}`,
        onClick: () => {
          setGroup(g.id);
          setSubCategory("all");
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: g.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: g.label })
        ]
      },
      g.id
    )) }),
    subPills.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-subcategories", style: { display: "flex", gap: 6, flexWrap: "wrap", padding: "0 16px 8px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `n4-shop-rarity-btn${subCategory === "all" ? " active" : ""}`,
          onClick: () => setSubCategory("all"),
          children: [
            "Tất cả trong ",
            activeGroupDef.label.toLowerCase()
          ]
        }
      ),
      subPills.map((subId) => {
        const def = CATEGORIES.find((c) => c.id === subId);
        if (!def) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: `n4-shop-rarity-btn${subCategory === subId ? " active" : ""}`,
            onClick: () => setSubCategory(subId),
            children: [
              def.icon,
              " ",
              def.label
            ]
          },
          subId
        );
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-shop-rarity-filter", children: ["all", "common", "rare", "epic", "legendary"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `n4-shop-rarity-btn${rarity === r ? " active" : ""}`,
        style: r !== "all" ? { "--rarity-color": RARITY_COLORS[r] } : void 0,
        onClick: () => setRarity(r),
        children: r === "all" ? "🏷️ Tất cả" : `${RARITY_LABELS[r]}`
      },
      r
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "0 16px", marginBottom: "16px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "text",
        className: "n4-input",
        placeholder: "🔍 Tìm kiếm vật phẩm...",
        value: search,
        onChange: (e) => setSearch(e.target.value),
        style: { width: "100%" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-shop-items-grid", children: filteredItems.map((item) => {
      const displayName = getShopDisplayName(item);
      const owned = item.type === "unlock" && unlockedItems[item.unlockKey];
      const isUnavailable = item.type === "unlock" && isCosmeticDisabled(item.unlockKey);
      const effectivePrice = getEffectivePrice(item);
      const canAfford = coins >= effectivePrice;
      const discounted = effectivePrice < item.price;
      const isBuying = buying === item.id;
      const justBought = purchaseHistory.includes(item.id);
      const rarityColor = RARITY_COLORS[item.rarity] || RARITY_COLORS.common;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `n4-shop-item-card${owned ? " owned" : ""}${!canAfford && !owned ? " locked" : ""}${justBought ? " just-bought" : ""}${item.anim ? ` n4-shop-anim-${item.anim}` : ""}`,
          style: { "--rarity-color": rarityColor },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "n4-shop-item-preview",
                onClick: () => setPreviewItem(item),
                "aria-label": `Xem chi tiết ${displayName}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-shop-item-rarity", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-rarity-dot" }),
                    RARITY_LABELS[item.rarity]
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-shop-item-icon${item.anim ? " n4-shop-icon-animated" : ""}`, children: item.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-item-name", children: displayName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-item-desc", children: item.desc }),
                  (() => {
                    const eff = item.unlockKey ? getItemEffectDescription(item.unlockKey) : null;
                    return eff ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-shop-item-effect", style: { fontSize: "0.72rem", color: "var(--n4-neon-green, #10b981)", marginTop: 4 }, children: [
                      "✨ ",
                      eff
                    ] }) : null;
                  })(),
                  item.bundle && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-item-bundle", children: item.bundle.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-bundle-tag", children: getShopBundleEntryLabel(b) }, b.powerUpId)) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-shop-item-action", children: owned ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-owned-label", children: "✓ Đã mua" }) : isUnavailable ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-owned-label", style: { background: "rgba(148, 163, 184, 0.18)", color: "var(--n4-text-2, #94a3b8)" }, children: "🚧 Chưa hỗ trợ" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: `n4-shop-buy-btn${canAfford ? "" : " disabled"}`,
                onClick: () => handleBuy(item),
                disabled: !canAfford || isBuying || isUnavailable,
                title: discounted ? `Giảm giá từ ${item.price}` : void 0,
                children: isBuying ? "⏳" : discounted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { textDecoration: "line-through", opacity: 0.55, marginRight: 4 }, children: item.price }),
                  "🪙 ",
                  effectivePrice
                ] }) : `🪙 ${item.price}`
              }
            ) })
          ]
        },
        item.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-inventory", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-shop-section-title", children: "🎒 Túi đồ của bạn" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-shop-inventory-grid", children: [
        { id: "hintPack", icon: "💡", name: getPowerUpMeta("hintPack").name, count: (powerUps == null ? void 0 : powerUps.hintPack) || 0 },
        { id: "xpBoost", icon: "⚡", name: getPowerUpMeta("xpBoost").name, count: (powerUps == null ? void 0 : powerUps.xpBoost) || 0 },
        { id: "streakFreeze", icon: "🧊", name: getPowerUpMeta("streakFreeze").name, count: (powerUps == null ? void 0 : powerUps.streakFreeze) || 0 },
        { id: "doubleCoins", icon: "🪙", name: getPowerUpMeta("doubleCoins").name, count: (powerUps == null ? void 0 : powerUps.doubleCoins) || 0 }
      ].map((pu) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-shop-inv-item${pu.count === 0 ? " empty" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-inv-icon", children: pu.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-inv-name", children: pu.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-shop-inv-count", children: [
          "×",
          pu.count
        ] })
      ] }, pu.id)) })
    ] }),
    recentLog.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-history", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-shop-section-title", children: "📜 Lịch sử giao dịch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-shop-history-list", children: recentLog.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-shop-history-row n4-shop-history-${entry.type}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-history-icon", children: entry.type === "earn" ? "📈" : entry.type === "spend" ? "📉" : "⚡" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-shop-history-detail", children: [
          entry.type === "earn" ? "+" : entry.type === "spend" ? "-" : "",
          entry.amount,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { children: [
            " · ",
            entry.source
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-history-time", children: new Date(entry.at).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }) })
      ] }, entry.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-tips", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-shop-section-title", children: "🏪 Trung tâm kinh tế" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-tips-list", style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "8px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gacha", className: "n4-shop-tip", style: { textDecoration: "none", color: "inherit", cursor: "pointer" }, children: [
          "⛩️ ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Gacha" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/pets", className: "n4-shop-tip", style: { textDecoration: "none", color: "inherit", cursor: "pointer" }, children: [
          "🐾 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Thú cưng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/collections", className: "n4-shop-tip", style: { textDecoration: "none", color: "inherit", cursor: "pointer" }, children: [
          "🏆 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bộ sưu tập" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/study-room", className: "n4-shop-tip", style: { textDecoration: "none", color: "inherit", cursor: "pointer" }, children: [
          "🏠 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Phòng học" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/economy-stats", className: "n4-shop-tip", style: { textDecoration: "none", color: "inherit", cursor: "pointer" }, children: [
          "📊 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Thống kê" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/inventory", className: "n4-shop-tip", style: { textDecoration: "none", color: "inherit", cursor: "pointer" }, children: [
          "📦 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Túi đồ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/missions", className: "n4-shop-tip", style: { textDecoration: "none", color: "inherit", cursor: "pointer" }, children: [
          "📋 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Nhiệm vụ" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-tips", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-shop-section-title", children: "💰 Cách kiếm coin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-tips-list", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-tip", children: [
          "✅ Trả lời đúng: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "+2–6 coin/câu" }),
          " (combo ×1–×3)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-tip", children: [
          "🎮 Hoàn thành game: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "+10–75 coin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-tip", children: [
          "🌅 Game đầu ngày: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "+15 coin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-tip", children: [
          "📅 Điểm danh hằng ngày: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "+40–120 coin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-tip", children: [
          "🏆 Mở khoá thành tích: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "+50–500 coin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shop-tip", children: [
          "📖 Mỗi 10 phút học: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "+5 coin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-shop-tip", children: "🎡 Wheel of Fortune & 🎰 Slot Machine" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-shop-tip", children: "🔥 Giữ streak liên tục để nhận thưởng lớn hơn!" })
      ] })
    ] }),
    previewItem && reactDomExports.createPortal((() => {
      var _a, _b, _c, _d, _e, _f, _g;
      const pi = previewItem;
      const piOwned = pi.type === "unlock" && unlockedItems[pi.unlockKey];
      const piUnavailable = pi.type === "unlock" && isCosmeticDisabled(pi.unlockKey);
      const piEffectivePrice = getEffectivePrice(pi);
      const piDiscounted = piEffectivePrice < pi.price;
      const piAfford = coins >= piEffectivePrice;
      const piRarityColor = RARITY_COLORS[pi.rarity] || RARITY_COLORS.common;
      const piName = getShopDisplayName(pi);
      const isTextColor = (_a = pi.unlockKey) == null ? void 0 : _a.startsWith("textcolor-");
      const isEntrance = (_b = pi.unlockKey) == null ? void 0 : _b.startsWith("entrance-");
      const isTouchParticle = isTouchParticleUnlockKey(pi.unlockKey);
      const isAmbientParticle = isAmbientParticleUnlockKey(pi.unlockKey);
      const isEffect = (_c = pi.unlockKey) == null ? void 0 : _c.startsWith("effect-");
      const isAvatar = (_d = pi.unlockKey) == null ? void 0 : _d.startsWith("avatar-");
      const isBadge = (_e = pi.unlockKey) == null ? void 0 : _e.startsWith("badge-");
      const isCardStyle = (_f = pi.unlockKey) == null ? void 0 : _f.startsWith("card-");
      const isTheme = (_g = pi.unlockKey) == null ? void 0 : _g.startsWith("theme-");
      const tcClass = isTextColor ? `n4-${pi.unlockKey}` : "";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "n4-shop-preview-overlay",
          onPointerDown: (event) => {
            if (event.target === event.currentTarget) setPreviewItem(null);
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: previewDialogRef,
              className: `n4-shop-preview-card${pi.anim ? ` n4-shop-anim-${pi.anim}` : ""}`,
              style: { "--rarity-color": piRarityColor },
              role: "dialog",
              "aria-modal": "true",
              "aria-label": `Chi tiết ${piName}`,
              tabIndex: -1,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-shop-preview-close", onClick: () => setPreviewItem(null), "aria-label": "Đóng xem trước", children: "✕" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-shop-preview-icon${pi.anim ? " n4-shop-icon-animated" : ""}`, style: { fontSize: "3.5rem", textAlign: "center", marginBottom: "12px" }, children: pi.icon }),
                SHOP_3D_MAP[pi.id] && /* @__PURE__ */ jsxRuntimeExports.jsx(ModelViewer, { modelId: SHOP_3D_MAP[pi.id], height: "140px" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: "0 0 8px", textAlign: "center", fontSize: "1.2rem" }, children: piName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", fontSize: "0.75rem", color: piRarityColor, fontWeight: 600, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }, children: RARITY_LABELS[pi.rarity] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-2, #888)", fontSize: "0.85rem", textAlign: "center", marginBottom: "16px", lineHeight: 1.5 }, children: pi.desc }),
                (() => {
                  const eff = pi.unlockKey ? getItemEffectDescription(pi.unlockKey) : null;
                  return eff ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", fontSize: "0.82rem", color: "var(--n4-neon-green, #10b981)", marginBottom: "12px", lineHeight: 1.5, padding: "6px 8px", background: "rgba(16, 185, 129, 0.08)", borderRadius: "6px" }, children: [
                    "✨ Hiệu ứng: ",
                    eff
                  ] }) : null;
                })(),
                isTextColor && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: tcClass, style: { textAlign: "center", fontSize: "1.3rem", fontWeight: 700, marginBottom: "12px" }, children: "Tên người dùng" }),
                isEntrance && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-entrance-${pi.unlockKey.replace("entrance-", "")}`, style: { textAlign: "center", fontSize: "1rem", padding: "8px", marginBottom: "12px", background: "var(--n4-bg-2, rgba(0,0,0,0.2))", borderRadius: "8px" }, children: "✨ Xem trước hiệu ứng" }),
                (isAmbientParticle || isTouchParticle || isEffect || isAvatar || isBadge || isCardStyle || isTheme) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", fontSize: "0.75rem", color: "var(--n4-text-3, #666)", marginBottom: "12px" }, children: [
                  isAmbientParticle && "🫧 Hiệu ứng hạt nền",
                  isTouchParticle && "✨ Hiệu ứng chạm",
                  isEffect && "🎊 Hiệu ứng đặc biệt",
                  isAvatar && "🥷 Hình đại diện",
                  isBadge && "⭐ Huy hiệu",
                  isCardStyle && "💎 Kiểu thẻ",
                  isTheme && "🎨 Giao diện"
                ] }),
                pi.bundle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "center", marginBottom: "12px" }, children: pi.bundle.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-shop-bundle-tag", children: getShopBundleEntryLabel(b) }, b.powerUpId)) }),
                pi.bundleUnlocks && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.8rem", color: "var(--n4-text-2, #888)", textAlign: "center", marginBottom: "12px" }, children: [
                  "Bao gồm: ",
                  pi.bundleUnlocks.map((k) => getCosmeticName(k) || k).join(", ")
                ] }),
                piUnavailable && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", fontSize: "0.82rem", color: "var(--n4-text-2, #94a3b8)", marginBottom: "12px", lineHeight: 1.5 }, children: "🚧 Chức năng này đang được hoàn thiện. Vật phẩm sẽ hiển thị trong registry nhưng chưa thể mua hoặc trang bị." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginTop: "8px" }, children: piOwned ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-accent)", fontWeight: 700, fontSize: "1.1rem" }, children: "✓ Đã sở hữu" }) : piUnavailable ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-text-2, #94a3b8)", fontWeight: 700, fontSize: "1rem" }, children: "🚧 Chưa hỗ trợ" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: `n4-shop-buy-btn${piAfford ? "" : " disabled"}`,
                    onClick: () => {
                      handleBuy(pi);
                      setPreviewItem(null);
                    },
                    disabled: !piAfford || piUnavailable,
                    style: { fontSize: "1rem", padding: "10px 24px" },
                    title: piDiscounted ? `Giảm từ ${pi.price}` : void 0,
                    children: piDiscounted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { textDecoration: "line-through", opacity: 0.55, marginRight: 6 }, children: pi.price }),
                      "🪙 ",
                      piEffectivePrice
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      "🪙 ",
                      pi.price
                    ] })
                  }
                ) })
              ]
            }
          )
        }
      );
    })(), document.body)
  ] });
}
export {
  CATEGORIES,
  SHOP_GROUPS,
  ShopPage as default,
  shopItemMatchesGroup
};
