import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, a1 as useManagedTimeout, b7 as generateTreasureGrid, b8 as TREASURE_CONFIG, b9 as pickDigReward, a$ as MATERIAL_TYPES, aW as SubgameCanvas, aX as TreasureCave, ba as getHeat, bb as TREASURE_HEAT, bc as TREASURE_BONUS_CHEST } from "./feature-3d-jK3b4Iv-.js";
import { u as useTodayKey } from "./useTodayKey-BBNOYeod.js";
import { T as TreasureHunt3DScene, d as RarityAura, a as ConfettiBurst, b as SparklePing } from "./feature-3d-scenery-C3eSpuWG.js";
import { i as installAudioPrewarm, g as getAudioBus, p as playSfx } from "./sfx-catalog-BoRQvGpU.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-Dp6hMoyV.js";
import "./vendor-supabase-DTEAj5J1.js";
function TreasureHuntPage() {
  const today = useTodayKey();
  const coins = useLearningStore((s) => s.coins);
  const materials = useLearningStore((s) => s.materials || {});
  const treasureHuntGrid = useLearningStore((s) => s.treasureHuntGrid);
  const lastTreasureDate = useLearningStore((s) => s.lastTreasureDate);
  const treasureDigsToday = useLearningStore((s) => {
    return s.lastTreasureDate === today ? s.treasureDigsToday || 0 : 0;
  });
  const digTreasure = useLearningStore((s) => s.digTreasure);
  const initTreasureGrid = useLearningStore((s) => s.initTreasureGrid);
  const [localGrid, setLocalGrid] = reactExports.useState(null);
  const [lastDig, setLastDig] = reactExports.useState(null);
  const [toast, setToast] = reactExports.useState(null);
  const [totalFound, setTotalFound] = reactExports.useState(0);
  const [gotBonusChest, setGotBonusChest] = reactExports.useState(false);
  const toastTimeoutRef = reactExports.useRef(null);
  const { scheduleTimeout, clearManagedTimeout } = useManagedTimeout();
  reactExports.useEffect(() => {
    installAudioPrewarm();
  }, []);
  reactExports.useEffect(() => {
    var _a;
    const gridIsForToday = lastTreasureDate === today && treasureHuntGrid;
    if (gridIsForToday) {
      setLocalGrid(treasureHuntGrid);
      setTotalFound(((_a = treasureHuntGrid.dug) == null ? void 0 : _a.length) || 0);
      return;
    }
    setLocalGrid(null);
    setLastDig(null);
    setTotalFound(0);
    setGotBonusChest(false);
  }, [lastTreasureDate, today, treasureHuntGrid]);
  function showToast(msg, ok = true) {
    setToast({ msg, ok });
    clearManagedTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = scheduleTimeout(() => {
      toastTimeoutRef.current = null;
      setToast(null);
    }, 3e3);
  }
  const startNewHunt = reactExports.useCallback(() => {
    const newGrid = generateTreasureGrid();
    initTreasureGrid(newGrid);
    setLocalGrid(newGrid);
    setLastDig(null);
    setTotalFound(0);
    setGotBonusChest(false);
  }, [initTreasureGrid]);
  const handleDig = reactExports.useCallback((flatIdx) => {
    var _a, _b;
    if (!localGrid) return;
    if (localGrid.dug.includes(flatIdx)) return;
    if (treasureDigsToday >= TREASURE_CONFIG.dailyLimit) {
      showToast("Hết lượt đào hôm nay!", false);
      return;
    }
    if (coins < TREASURE_CONFIG.digCost) {
      showToast(`Cần ${TREASURE_CONFIG.digCost} xu để đào!`, false);
      return;
    }
    const isTreasure = localGrid.treasurePositions.includes(flatIdx);
    const loot = isTreasure ? { coins: 80, crystalRare: 1 } : pickDigReward().reward;
    const newDigCount = treasureDigsToday + 1;
    let bonusChestReward = null;
    const willGetBonus = newDigCount === TREASURE_CONFIG.bonusChestAt && !gotBonusChest;
    if (willGetBonus) {
      bonusChestReward = TREASURE_BONUS_CHEST;
      setGotBonusChest(true);
    }
    const ok = digTreasure(flatIdx, loot, isTreasure, bonusChestReward);
    if (!ok) {
      showToast("Đào thất bại!", false);
      return;
    }
    const newGrid = { ...localGrid, dug: [...localGrid.dug, flatIdx] };
    setLocalGrid(newGrid);
    setTotalFound(newGrid.dug.length);
    setLastDig({ reward: loot, isTreasure, gotBonus: willGetBonus, bonusChest: bonusChestReward });
    try {
      if (isTreasure) {
        (_b = (_a = getAudioBus()).playRarityChime) == null ? void 0 : _b.call(_a, willGetBonus ? "legendary" : "epic");
        playSfx(getAudioBus(), "capsule-open");
      } else {
        playSfx(getAudioBus(), "tap-soft");
      }
    } catch (e) {
    }
    if (isTreasure) showToast("💎 Tìm thấy kho báu!");
    else if (willGetBonus) showToast("🎁 Bonus chest! Nhận thưởng đặc biệt!");
    else if (loot && Object.keys(loot).length > 0 && !loot.empty) {
      showToast(`✅ Đào được: ${formatReward(loot)}`);
    } else {
      showToast("🪨 Đất trống, thử ô khác!", false);
    }
  }, [localGrid, treasureDigsToday, coins, digTreasure, gotBonusChest]);
  function formatReward(r) {
    if (!r) return "Không có";
    return Object.entries(r).filter(([, v]) => v > 0).map(([k, v]) => {
      var _a;
      if (k === "coins") return `🪙 ${v} xu`;
      if (k === "xp") return `⚡ ${v} XP`;
      return `${((_a = MATERIAL_TYPES[k]) == null ? void 0 : _a.icon) || k} ×${v}`;
    }).join(", ") || "Đất trống";
  }
  const hasGrid = !!localGrid;
  const isNewDay = lastTreasureDate !== today;
  const digsLeft = TREASURE_CONFIG.dailyLimit - treasureDigsToday;
  const allDone = !isNewDay && digsLeft <= 0;
  const { gridCols, gridRows } = TREASURE_CONFIG;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-treasure-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-treasure-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "🗺️ Kho Báu Ẩn" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-treasure-meta", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-coin-badge", children: [
          "🪙 ",
          coins.toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-dig-badge", children: [
          "⛏️ Còn ",
          digsLeft,
          "/",
          TREASURE_CONFIG.dailyLimit,
          " lượt"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-treasure-remaster__hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-treasure-remaster__hero-fallback", children: "🗺️ Đang dò kho báu…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SubgameCanvas, { cameraPos: [0, 2, 5], fov: 50, backgroundColor: "#0d0906", envPreset: "night", orbit: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TreasureCave, {}) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TreasureHunt3DScene, { treasureFound: totalFound > 0 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-treasure-rules", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "💰 Mỗi lượt đào: ",
        TREASURE_CONFIG.digCost,
        " xu"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "💎 Có 3 kho báu ẩn trong ô 5×5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "🎁 Đào đủ ",
        TREASURE_CONFIG.bonusChestAt,
        " lần nhận hòm thưởng đặc biệt!"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-treasure-mats", children: Object.values(MATERIAL_TYPES).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-mat-pill", style: { "--mat-color": m.color }, children: [
      m.icon,
      " ",
      materials[m.id] || 0
    ] }, m.id)) }),
    (!hasGrid || isNewDay) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-treasure-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-treasure-map-blank", children: [...Array(gridRows)].map((_, r) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-treasure-row", children: [...Array(gridCols)].map((_2, c) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-treasure-fog", children: "🌫️" }, c)) }, r)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-start-hunt-btn ${coins < TREASURE_CONFIG.digCost ? "disabled" : ""}`,
          onClick: startNewHunt,
          disabled: coins < TREASURE_CONFIG.digCost,
          children: coins < TREASURE_CONFIG.digCost ? `❌ Cần ${TREASURE_CONFIG.digCost} xu` : "🗺️ Bắt đầu đào!"
        }
      )
    ] }),
    hasGrid && !isNewDay && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-treasure-arena", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-treasure-grid", style: { "--grid-cols": gridCols }, children: [...Array(gridRows * gridCols)].map((_, flatIdx) => {
        const isDug = localGrid.dug.includes(flatIdx);
        const isTreasure = localGrid.treasurePositions.includes(flatIdx);
        const heat = !isDug ? getHeat(flatIdx, (localGrid == null ? void 0 : localGrid.treasurePositions) || []) : null;
        const heatInfo = heat ? TREASURE_HEAT[heat] : null;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `n4-dig-cell ${isDug ? "dug" : "undug"} ${isTreasure && isDug ? "treasure-found" : ""}`,
            onClick: () => handleDig(flatIdx),
            disabled: isDug || allDone,
            title: isDug ? "Đã đào" : heatInfo == null ? void 0 : heatInfo.label,
            children: isDug ? isTreasure ? "💎" : "🕳️" : heatInfo ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: heatInfo.color, fontSize: "1.3rem" }, children: heatInfo.icon }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-undug-mark", children: "⛏️" })
          },
          flatIdx
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dig-progress", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "n4-dig-bar",
            style: { width: `${treasureDigsToday / TREASURE_CONFIG.dailyLimit * 100}%` }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-dig-label", children: [
          treasureDigsToday,
          "/",
          TREASURE_CONFIG.dailyLimit,
          " lượt đã dùng",
          treasureDigsToday >= TREASURE_CONFIG.bonusChestAt && !gotBonusChest && " 🎁"
        ] })
      ] }),
      lastDig && /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: lastDig.gotBonus ? "legendary" : lastDig.isTreasure ? "epic" : "common", animated: lastDig.gotBonus, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-last-dig ${lastDig.isTreasure ? "treasure" : ""}`, children: [
        lastDig.isTreasure && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dig-headline", children: "💎 Kho báu!" }),
        lastDig.gotBonus && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dig-bonus", children: [
          "🎁 Hòm Thưởng: ",
          formatReward(lastDig.bonusChest)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dig-reward", children: [
          "Lượt này: ",
          formatReward(lastDig.reward)
        ] })
      ] }) }),
      (lastDig == null ? void 0 : lastDig.gotBonus) && /* @__PURE__ */ jsxRuntimeExports.jsx(ConfettiBurst, { rarity: "legendary", duration: 1500 }),
      (lastDig == null ? void 0 : lastDig.isTreasure) && !lastDig.gotBonus && /* @__PURE__ */ jsxRuntimeExports.jsx(SparklePing, { duration: 900 }),
      allDone && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-treasure-done", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "⛏️ Hết lượt đào hôm nay!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-hint", children: "Quay lại lúc 0:00 để tìm kho báu mới nhé 🌙" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "n4-heat-legend", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { children: "🧭 Chú giải nhiệt độ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-heat-rows", children: Object.entries(TREASURE_HEAT).map(([key, info]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-heat-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: info.color }, children: info.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: info.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-heat-desc", children: key === "treasure" ? "Tìm thấy rồi!" : key === "hot" ? "Cách 1 ô" : key === "warm" ? "Cách 2 ô" : "Cách 3+ ô" })
      ] }, key)) })
    ] }),
    toast && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-market-toast ${toast.ok ? "ok" : "err"}`, children: toast.msg })
  ] });
}
export {
  TreasureHuntPage as default
};
