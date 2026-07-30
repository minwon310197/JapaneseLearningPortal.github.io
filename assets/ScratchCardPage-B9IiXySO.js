import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, a1 as useManagedTimeout, b3 as generateScratchGrid, b4 as evalScratchResult, a$ as MATERIAL_TYPES, aE as ModelViewer, b5 as SCRATCH_CONFIG, b6 as SCRATCH_SYMBOLS } from "./feature-3d-jK3b4Iv-.js";
import { u as useTodayKey } from "./useTodayKey-BBNOYeod.js";
import { d as RarityAura, a as ConfettiBurst, b as SparklePing, e as StampPop } from "./feature-3d-scenery-C3eSpuWG.js";
import { i as installAudioPrewarm, p as playSfx, g as getAudioBus } from "./sfx-catalog-BoRQvGpU.js";
/* empty css                 */
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-Dp6hMoyV.js";
import "./vendor-supabase-DTEAj5J1.js";
function ScratchCardPage() {
  const today = useTodayKey();
  const coins = useLearningStore((s) => s.coins);
  const scratchCardsToday = useLearningStore((s) => {
    const last = s.lastScratchDate;
    return last === today ? s.scratchCardsToday || 0 : 0;
  });
  const materials = useLearningStore((s) => s.materials || {});
  const scratchCard = useLearningStore((s) => s.scratchCard);
  const [grid, setGrid] = reactExports.useState(null);
  const [revealed, setRevealed] = reactExports.useState([]);
  const [result, setResult] = reactExports.useState(null);
  const [done, setDone] = reactExports.useState(false);
  const [toast, setToast] = reactExports.useState(null);
  const [celebrateRarity, setCelebrateRarity] = reactExports.useState(null);
  const [stampText, setStampText] = reactExports.useState(null);
  const toastTimeoutRef = reactExports.useRef(null);
  const { scheduleTimeout, clearManagedTimeout } = useManagedTimeout();
  reactExports.useEffect(() => {
    installAudioPrewarm();
  }, []);
  const remaining = SCRATCH_CONFIG.dailyLimit - scratchCardsToday;
  const canBuy = remaining > 0 && coins >= SCRATCH_CONFIG.cardCost && !grid;
  function showToast(msg, ok = true) {
    setToast({ msg, ok });
    clearManagedTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = scheduleTimeout(() => {
      toastTimeoutRef.current = null;
      setToast(null);
    }, 3e3);
  }
  const handleBuyCard = reactExports.useCallback(() => {
    if (!canBuy) return;
    const cells = generateScratchGrid();
    setGrid(cells);
    setRevealed([]);
    setResult(null);
    setDone(false);
  }, [canBuy]);
  const handleReveal = reactExports.useCallback((idx) => {
    var _a, _b;
    if (!grid || revealed.includes(idx) || done) return;
    const next = [...revealed, idx];
    setRevealed(next);
    try {
      playSfx(getAudioBus(), "tap-click");
    } catch (e) {
    }
    if (next.length === grid.length) {
      setDone(true);
      const prize = evalScratchResult(grid);
      setResult(prize);
      const ok = scratchCard(prize || {});
      if (!ok) showToast("Đã dùng hết lượt hoặc thiếu xu!", false);
      else if (prize && Object.keys(prize).length > 0) {
        showToast(`🎉 Thắng! ${formatReward(prize)}`);
        const totalCoins = Number(prize.coins || 0);
        const rarity = totalCoins >= 500 ? "legendary" : totalCoins >= 200 ? "epic" : totalCoins > 0 ? "rare" : "common";
        setCelebrateRarity(rarity);
        setStampText("CHÚC MỪNG");
        try {
          (_b = (_a = getAudioBus()).playRarityChime) == null ? void 0 : _b.call(_a, rarity);
        } catch (e) {
        }
      } else {
        showToast("😕 Không trúng lần này. Thử lại nhé!", false);
        try {
          playSfx(getAudioBus(), "miss");
        } catch (e) {
        }
      }
    }
  }, [grid, revealed, done, scratchCard]);
  const handleRevealAll = reactExports.useCallback(() => {
    if (!grid || done) return;
    const allIdx = grid.map((_, i) => i);
    setRevealed(allIdx);
    setDone(true);
    const prize = evalScratchResult(grid);
    setResult(prize);
    const ok = scratchCard(prize || {});
    if (!ok) showToast("Đã dùng hết lượt hoặc thiếu xu!", false);
    else if (prize && Object.keys(prize).length > 0) showToast(`🎉 Thắng! ${formatReward(prize)}`);
    else showToast("😕 Không trúng. Thử lại nhé!", false);
  }, [grid, done, scratchCard]);
  const handleNewCard = () => {
    setGrid(null);
    setRevealed([]);
    setResult(null);
    setDone(false);
  };
  function formatReward(reward) {
    if (!reward) return "";
    return Object.entries(reward).map(([k, v]) => {
      var _a;
      if (k === "coins") return `🪙 ${v} xu`;
      if (k === "xp") return `⚡ ${v} XP`;
      return `${((_a = MATERIAL_TYPES[k]) == null ? void 0 : _a.icon) || k} ×${v}`;
    }).join(", ");
  }
  const symbolFor = (id) => SCRATCH_SYMBOLS.find((s) => s.id === id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-scratch-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-scratch-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModelViewer, { modelId: "chest", height: "120px", background: "transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "🎫 Thẻ Cào May Mắn" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-scratch-meta", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-coin-badge", children: [
          "🪙 ",
          coins.toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-limit-badge", children: [
          "Còn ",
          remaining,
          "/",
          SCRATCH_CONFIG.dailyLimit,
          " thẻ hôm nay"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-scratch-rules", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "💰 Mỗi thẻ: ",
        SCRATCH_CONFIG.cardCost,
        " xu"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🎯 Cào 3 biểu tượng giống nhau để thắng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "🔄 Tối đa ",
        SCRATCH_CONFIG.dailyLimit,
        " thẻ/ngày"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-scratch-mats", children: Object.values(MATERIAL_TYPES).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-mat-pill", style: { "--mat-color": m.color }, children: [
      m.icon,
      " ",
      materials[m.id] || 0
    ] }, m.id)) }),
    !grid ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-scratch-buy-area", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-blank-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-blank-card-row", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-scratch-placeholder", children: "?" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-blank-card-row", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-scratch-placeholder", children: "?" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-blank-card-row", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-scratch-placeholder", children: "?" }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-buy-card-btn ${canBuy ? "" : "disabled"}`,
          onClick: handleBuyCard,
          disabled: !canBuy,
          children: remaining <= 0 ? "😴 Hết lượt hôm nay" : coins < SCRATCH_CONFIG.cardCost ? `❌ Cần ${SCRATCH_CONFIG.cardCost} xu` : `🎫 Mua thẻ — ${SCRATCH_CONFIG.cardCost} xu`
        }
      ),
      remaining <= 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-scratch-comeback", children: "Quay lại lúc 0:00 để cào thêm nhé! 🌙" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-scratch-active", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-scratch-grid", children: grid.map((symId, idx) => {
        const sym = symbolFor(symId);
        const isRevealed = revealed.includes(idx);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `n4-scratch-cell ${isRevealed ? "revealed" : "hidden"}`,
            onClick: () => handleReveal(idx),
            disabled: isRevealed || done,
            children: isRevealed ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-scratch-sym", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-sym-icon", children: sym == null ? void 0 : sym.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-sym-label", children: sym == null ? void 0 : sym.label })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-scratch-cover", children: "✨" })
          },
          idx
        );
      }) }),
      done && /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: celebrateRarity || "common", animated: celebrateRarity === "legendary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-scratch-result ${result && Object.keys(result).length > 0 ? "win" : "lose"}`, children: result && Object.keys(result).length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-title", children: "🎉 Chúc mừng!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-reward", children: formatReward(result) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-title", children: "😕 Chưa trúng lần này" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-hint", children: [
          "Cố lên! Còn ",
          remaining - 1,
          " thẻ nữa."
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-scratch-controls", children: [
        !done && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-reveal-all-btn", onClick: handleRevealAll, children: "⚡ Mở tất cả" }),
        done && remaining > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-new-card-btn", onClick: handleNewCard, children: [
          "🎫 Mua thẻ mới (",
          remaining - 1,
          " còn lại)"
        ] }),
        done && remaining <= 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-scratch-comeback", children: "Hết lượt hôm nay. Quay lại lúc 0:00! 🌙" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "n4-scratch-prize-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { children: "📋 Bảng giải thưởng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-prize-list", children: SCRATCH_SYMBOLS.filter((s) => s.id !== "nothing").map((sym) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-prize-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: sym.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: sym.label })
      ] }, sym.id)) })
    ] }),
    toast && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-market-toast ${toast.ok ? "ok" : "err"}`, children: toast.msg }),
    celebrateRarity === "legendary" && /* @__PURE__ */ jsxRuntimeExports.jsx(ConfettiBurst, { rarity: "legendary", duration: 1800, density: "high", onDone: () => setCelebrateRarity(null) }),
    celebrateRarity && celebrateRarity !== "legendary" && /* @__PURE__ */ jsxRuntimeExports.jsx(SparklePing, { duration: 900, onDone: () => setCelebrateRarity(null) }),
    stampText && /* @__PURE__ */ jsxRuntimeExports.jsx(StampPop, { text: stampText, color: celebrateRarity === "legendary" ? "#ffca7a" : "#8ef5a0", onDone: () => setStampText(null) })
  ] });
}
export {
  ScratchCardPage as default
};
