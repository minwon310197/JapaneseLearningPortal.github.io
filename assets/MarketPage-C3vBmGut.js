import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { a1 as useManagedTimeout, u as useLearningStore, a_ as getDailyDeals, a$ as MATERIAL_TYPES, b0 as CRAFT_RECIPES, b1 as RECYCLE_YIELD, b2 as RECYCLE_COIN_REFUND_PCT } from "./feature-3d-CFvJkEt3.js";
import { E as EMPTY_OBJ } from "./empty-Bvm-mx50.js";
import { E as EconomySceneHero, M as Market3DScene } from "./feature-3d-scenery-C3eSpuWG.js";
import { u as useTodayKey } from "./useTodayKey-BBNOYeod.js";
/* empty css                 */
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
const TABS = [
  { id: "deals", icon: "🏷️", label: "Ưu Đãi Hôm Nay" },
  { id: "forge", icon: "⚔️", label: "Lò Rèn" },
  { id: "recycle", icon: "♻️", label: "Tái Chế" },
  { id: "exchange", icon: "🔄", label: "Đổi Nguyên Liệu" }
];
const EXCHANGE_RATES = [
  { from: "shardCommon", qty: 5, to: "crystalRare", toQty: 1, label: "5 Mảnh → 1 Tinh Thể" },
  { from: "crystalRare", qty: 3, to: "epicGem", toQty: 1, label: "3 Tinh Thể → 1 Đá Sử Thi" },
  { from: "epicGem", qty: 2, to: "legendaryCore", toQty: 1, label: "2 Đá Sử Thi → 1 Lõi HT" },
  { from: "shardCommon", qty: 10, to: "epicGem", toQty: 1, label: "10 Mảnh → 1 Đá Sử Thi" }
];
const DEFAULT_DAILY_DEALS = Object.freeze({ date: null, deals: [], claimed: [] });
function MarketPage() {
  var _a;
  const [tab, setTab] = reactExports.useState("deals");
  const [toast, setToast] = reactExports.useState(null);
  const [recycleTarget, setRecycleTarget] = reactExports.useState(null);
  const toastTimeoutRef = reactExports.useRef(null);
  const { scheduleTimeout, clearManagedTimeout } = useManagedTimeout();
  const coins = useLearningStore((s) => s.coins);
  const materials = useLearningStore((s) => s.materials || EMPTY_OBJ);
  const unlockedItems = useLearningStore((s) => s.unlockedItems || EMPTY_OBJ);
  const equippedCosmetics = useLearningStore((s) => s.equippedCosmetics || EMPTY_OBJ);
  const dailyDeals = useLearningStore((s) => s.dailyDeals || DEFAULT_DAILY_DEALS);
  const craftItem = useLearningStore((s) => s.craftItem);
  const recycleItem = useLearningStore((s) => s.recycleItem);
  const claimDeal = useLearningStore((s) => s.claimDeal);
  const exchangeMaterials = useLearningStore((s) => s.exchangeMaterials);
  const today = useTodayKey();
  const deals = reactExports.useMemo(() => {
    var _a2;
    if (dailyDeals.date === today && ((_a2 = dailyDeals.deals) == null ? void 0 : _a2.length)) return dailyDeals.deals;
    return getDailyDeals(today);
  }, [today, dailyDeals.date, (_a = dailyDeals.deals) == null ? void 0 : _a.length]);
  function showToast(msg, ok = true) {
    setToast({ msg, ok });
    clearManagedTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = scheduleTimeout(() => {
      toastTimeoutRef.current = null;
      setToast(null);
    }, 2500);
  }
  const handleClaimDeal = reactExports.useCallback((deal) => {
    var _a2;
    if ((_a2 = dailyDeals.claimed) == null ? void 0 : _a2.includes(deal.id)) return;
    if (coins < deal.discountedCost) {
      showToast("Không đủ xu!", false);
      return;
    }
    const ok = claimDeal(deal.id, deal.discountedCost, deal.payload);
    if (ok) showToast(`✅ Đã mua: ${deal.label}`);
    else showToast("Không thể mua!", false);
  }, [claimDeal, coins, dailyDeals.claimed]);
  const handleCraft = reactExports.useCallback((recipe) => {
    var _a2;
    if (!!unlockedItems[recipe.id]) {
      showToast("Bạn đã có item này rồi!", false);
      return;
    }
    const cost = recipe.cost || {};
    for (const [k, v] of Object.entries(cost)) {
      if (k === "coins") {
        if (coins < v) {
          showToast("Không đủ xu!", false);
          return;
        }
      } else if ((materials[k] || 0) < v) {
        showToast(`Thiếu ${(_a2 = MATERIAL_TYPES[k]) == null ? void 0 : _a2.label}!`, false);
        return;
      }
    }
    const result = craftItem(recipe.id);
    if (result) showToast(`🔨 Đã chế tạo: ${recipe.name}`);
    else showToast("Chế tạo thất bại!", false);
  }, [craftItem, coins, materials, unlockedItems]);
  const handleRecycle = reactExports.useCallback((itemId, rarity, price) => {
    const isEquipped = Object.values(equippedCosmetics).includes(itemId);
    if (isEquipped) {
      showToast("Không thể tái chế item đang trang bị!", false);
      return;
    }
    const ok = recycleItem(itemId, rarity, price);
    if (ok) {
      showToast("♻️ Đã tái chế! Nhận được nguyên liệu.");
      setRecycleTarget(null);
    } else showToast("Không thể tái chế!", false);
  }, [recycleItem, equippedCosmetics]);
  const handleExchange = reactExports.useCallback((rate) => {
    var _a2;
    if ((materials[rate.from] || 0) < rate.qty) {
      showToast(`Thiếu ${(_a2 = MATERIAL_TYPES[rate.from]) == null ? void 0 : _a2.label}!`, false);
      return;
    }
    const ok = exchangeMaterials(rate.from, rate.to, rate.qty, rate.toQty);
    if (ok) showToast(`🔄 Đổi thành công: ${rate.label}`);
    else showToast("Đổi thất bại!", false);
  }, [exchangeMaterials, materials]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-market-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(EconomySceneHero, { scene: "MarketplaceScene" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-market-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "🏪 Chợ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-market-balance", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-coin-badge", children: [
          "🪙 ",
          coins.toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mat-pills", children: Object.values(MATERIAL_TYPES).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-mat-pill", style: { "--mat-color": m.color }, children: [
          m.icon,
          " ",
          materials[m.id] || 0
        ] }, m.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Market3DScene, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-market-tabs", children: TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: `n4-market-tab ${tab === t.id ? "active" : ""}`,
        onClick: () => setTab(t.id),
        children: [
          t.icon,
          " ",
          t.label
        ]
      },
      t.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-market-content", children: [
      tab === "deals" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        DealsTab,
        {
          deals,
          claimed: dailyDeals.claimed || [],
          coins,
          onClaim: handleClaimDeal
        }
      ),
      tab === "forge" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ForgeTab,
        {
          recipes: CRAFT_RECIPES,
          materials,
          coins,
          unlockedItems,
          onCraft: handleCraft
        }
      ),
      tab === "recycle" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        RecycleTab,
        {
          unlockedItems,
          equippedCosmetics,
          recycleTarget,
          setRecycleTarget,
          onRecycle: handleRecycle
        }
      ),
      tab === "exchange" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ExchangeTab,
        {
          rates: EXCHANGE_RATES,
          materials,
          onExchange: handleExchange
        }
      )
    ] }),
    toast && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-market-toast ${toast.ok ? "ok" : "err"}`, children: toast.msg })
  ] });
}
function DealsTab({ deals, claimed, coins, onClaim }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-deals-grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-deals-note", children: "🗓️ Ưu đãi thay đổi mỗi ngày lúc 0:00. Mỗi deal chỉ mua được 1 lần/ngày." }),
    deals.map((deal) => {
      const isClaimed = claimed.includes(deal.id);
      const canAfford = coins >= deal.discountedCost;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-deal-card ${isClaimed ? "claimed" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-deal-icon", children: deal.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-deal-info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-deal-label", children: deal.label }),
          deal.bonus && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-deal-bonus", children: deal.bonus }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-deal-prices", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-price-original", children: [
              "🪙 ",
              deal.originalCost
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-price-deal", children: [
              "🪙 ",
              deal.discountedCost
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-price-save", children: [
              "-",
              Math.round((1 - deal.discountedCost / deal.originalCost) * 100),
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `n4-deal-btn ${isClaimed ? "done" : canAfford ? "" : "broke"}`,
            onClick: () => onClaim(deal),
            disabled: isClaimed,
            children: isClaimed ? "✅ Đã mua" : canAfford ? "Mua ngay" : "❌ Thiếu xu"
          }
        )
      ] }, deal.id);
    })
  ] });
}
const RARITY_COLORS = { common: "#94a3b8", rare: "#3b82f6", epic: "#a855f7", legendary: "#f59e0b" };
const RARITY_LABELS = { common: "Thường", rare: "Hiếm", epic: "Sử Thi", legendary: "Huyền Thoại" };
function ForgeTab({ recipes, materials, coins, unlockedItems, onCraft }) {
  const [filter, setFilter] = reactExports.useState("all");
  const rarities = ["all", "rare", "epic", "legendary"];
  const filtered = filter === "all" ? recipes : recipes.filter((r) => r.rarity === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-forge-tab", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-forge-note", children: "⚔️ Chế tạo vật phẩm độc quyền — chỉ có thể tạo tại đây, không bán ở shop!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-forge-filters", children: rarities.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `n4-filter-btn ${filter === r ? "active" : ""}`,
        onClick: () => setFilter(r),
        children: r === "all" ? "Tất cả" : RARITY_LABELS[r]
      },
      r
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-forge-grid", children: filtered.map((recipe) => {
      const owned = !!unlockedItems[recipe.id];
      const cost = recipe.cost || {};
      const canAfford = Object.entries(cost).every(
        ([k, v]) => k === "coins" ? coins >= v : (materials[k] || 0) >= v
      );
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-recipe-card ${owned ? "owned" : ""} rarity-${recipe.rarity}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-recipe-icon", children: recipe.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-recipe-info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-recipe-name", children: recipe.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-recipe-rarity", style: { color: RARITY_COLORS[recipe.rarity] }, children: RARITY_LABELS[recipe.rarity] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-recipe-desc", children: recipe.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-recipe-cost", children: Object.entries(cost).map(([k, v]) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-cost-item ${k === "coins" || (materials[k] || 0) >= v ? "" : "missing"}`, children: k === "coins" ? `🪙 ${v}` : `${(_a = MATERIAL_TYPES[k]) == null ? void 0 : _a.icon} ${v}` }, k);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `n4-craft-btn ${owned ? "done" : canAfford ? "" : "broke"}`,
            onClick: () => onCraft(recipe),
            disabled: owned,
            children: owned ? "✅ Đã có" : canAfford ? "🔨 Chế tạo" : "❌ Thiếu"
          }
        )
      ] }, recipe.id);
    }) })
  ] });
}
function getItemDisplay(itemId) {
  if (itemId.startsWith("forged_")) {
    return { name: itemId.replace("forged_", "").replace(/_/g, " "), rarity: "epic", price: 200, icon: "⚔️" };
  }
  return { name: itemId, rarity: "common", price: 50, icon: "🎁" };
}
function RecycleTab({ unlockedItems, equippedCosmetics, recycleTarget, setRecycleTarget, onRecycle }) {
  const equippedSet = new Set(Object.values(equippedCosmetics));
  const recyclable = Object.keys(unlockedItems).filter((id) => !equippedSet.has(id));
  if (recyclable.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-recycle-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-icon", children: "♻️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có vật phẩm nào để tái chế." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-hint", children: "Vật phẩm đang trang bị không thể tái chế." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-recycle-tab", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-recycle-note", children: "♻️ Tái chế vật phẩm để lấy nguyên liệu + hoàn lại 20% xu. Vật phẩm sẽ bị xóa vĩnh viễn!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-recycle-grid", children: recyclable.map((itemId) => {
      const { name, rarity, price, icon } = getItemDisplay(itemId);
      const yield_ = RECYCLE_YIELD[rarity] || { shardCommon: 1 };
      const refund = Math.floor(price * RECYCLE_COIN_REFUND_PCT);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-recycle-card rarity-${rarity}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-item-icon", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-item-info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-item-name", children: name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-item-rarity", style: { color: RARITY_COLORS[rarity] }, children: RARITY_LABELS[rarity] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-recycle-yield", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Nhận: " }),
            Object.entries(yield_).map(([k, v]) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                (_a = MATERIAL_TYPES[k]) == null ? void 0 : _a.icon,
                " ×",
                v,
                " "
              ] }, k);
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "🪙 +",
              refund
            ] })
          ] })
        ] }),
        recycleTarget === itemId ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-recycle-confirm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn-danger", onClick: () => onRecycle(itemId, rarity, price), children: "Xác nhận ♻️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn-cancel", onClick: () => setRecycleTarget(null), children: "Hủy" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-recycle-btn", onClick: () => setRecycleTarget(itemId), children: "♻️ Tái chế" })
      ] }, itemId);
    }) })
  ] });
}
function ExchangeTab({ rates, materials, onExchange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-exchange-tab", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-exchange-note", children: "🔄 Đổi nguyên liệu dư thừa để lấy nguyên liệu cao cấp hơn." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-exchange-list", children: rates.map((rate, i) => {
      const canAfford = (materials[rate.from] || 0) >= rate.qty;
      const fromMat = MATERIAL_TYPES[rate.from];
      const toMat = MATERIAL_TYPES[rate.to];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-exchange-row ${canAfford ? "" : "disabled"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-exchange-from", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-mat-big", style: { "--mat-color": fromMat == null ? void 0 : fromMat.color }, children: [
            fromMat == null ? void 0 : fromMat.icon,
            " ×",
            rate.qty
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-mat-have", children: [
            "(có ",
            materials[rate.from] || 0,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-exchange-arrow", children: "→" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-exchange-to", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-mat-big", style: { "--mat-color": toMat == null ? void 0 : toMat.color }, children: [
          toMat == null ? void 0 : toMat.icon,
          " ×",
          rate.toQty
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `n4-exchange-btn ${canAfford ? "" : "broke"}`,
            onClick: () => onExchange(rate),
            disabled: !canAfford,
            children: canAfford ? "🔄 Đổi" : "❌ Thiếu"
          }
        )
      ] }, i);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-exchange-help", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "💡 Nguyên liệu kiếm được từ: tái chế vật phẩm • đào kho báu • cào thẻ • gacha" }) })
  ] });
}
export {
  MarketPage as default
};
