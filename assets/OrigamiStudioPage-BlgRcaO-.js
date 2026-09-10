const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./OrigamiStudioScene-7INvzliM.js","./vendor-react-BUL8WuXG.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { r as reactExports, j as jsxRuntimeExports, R as React } from "./vendor-react-BUL8WuXG.js";
import { h as useLearningStore, j as useManagedTimeout, b1 as AJL_ORIGAMI } from "./index-BEJSIlFS.js";
import { O as OrigamiScene } from "./ThemedScenes-TCkAJ91j.js";
import { S as SubgameCanvas } from "./SubgameCanvas-CaGN2HcP.js";
import { R as RarityAura } from "./RarityAura-BqxZE2kk.js";
import "./rarity-tokens-i3-fv4xK.js";
import "./HitPause-BapLYhfu.js";
import { j as Scissors, e as Coins, i as Sparkles, b as CircleCheck } from "./vendor-icons-D83cEu6Z.js";
import { m as motion } from "./vendor-motion-C2SAPQSW.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./WorldSurfaceContext-CUHCnPUQ.js";
const OrigamiStudio = React.lazy(() => __vitePreload(() => import("./OrigamiStudioScene-7INvzliM.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url).then((module) => ({ default: module.OrigamiStudio })));
function getEffectText(effect) {
  if (!effect) return "";
  if (effect.type === "xp") return `+${effect.value}% kinh nghiệm`;
  if (effect.type === "coin") return `+${effect.value}% xu`;
  if (effect.type === "boss-damage") return `+${effect.value}% sát thương lên trùm`;
  return `+${effect.value}% ${effect.type}`;
}
function OrigamiStudioPage() {
  const coins = useLearningStore((s) => s.coins || 0);
  const ownedOrigami = useLearningStore((s) => s.ownedOrigami || []);
  const craftOrigami = useLearningStore((s) => s.craftOrigami);
  const [craftingId, setCraftingId] = reactExports.useState(null);
  const [notice, setNotice] = reactExports.useState("");
  const craftTimeoutRef = reactExports.useRef(null);
  const craftingRef = reactExports.useRef(false);
  const { scheduleTimeout, clearManagedTimeout } = useManagedTimeout();
  const ownedSet = reactExports.useMemo(() => new Set(ownedOrigami), [ownedOrigami]);
  const handleCraft = reactExports.useCallback((item) => {
    if (!item || craftingRef.current) return;
    if (ownedSet.has(item.id)) {
      setNotice("Bạn đã chế tạo vật phẩm này rồi.");
      return;
    }
    if (coins < item.cost) {
      setNotice("Không đủ xu để chế tạo.");
      return;
    }
    craftingRef.current = true;
    setCraftingId(item.id);
    setNotice("Đang gấp giấy...");
    clearManagedTimeout(craftTimeoutRef.current);
    craftTimeoutRef.current = scheduleTimeout(() => {
      craftTimeoutRef.current = null;
      const ok = craftOrigami(item);
      craftingRef.current = false;
      setCraftingId(null);
      setNotice(ok ? `Đã chế tạo ${item.name}.` : "Chế tạo thất bại. Thử lại sau.");
    }, 900);
  }, [clearManagedTimeout, coins, craftOrigami, ownedSet, scheduleTimeout]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { padding: "1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "1rem", marginBottom: 12 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: { margin: 0, display: "inline-flex", alignItems: "center", gap: 8, fontSize: "1.4rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Scissors, { size: 22 }),
          " Xưởng gấp giấy"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(OrigamiScene, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-chip", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { size: 14 }),
          " ",
          coins.toLocaleString("vi-VN")
        ] })
      ] }),
      notice && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 10, color: "var(--n4-text-dim)", fontSize: ".9rem" }, children: notice })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-origami-remaster__hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-origami-remaster__hero-fallback", children: "✂️ Đang dựng xưởng…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SubgameCanvas, { cameraPos: [0, 2.2, 4.5], fov: 50, backgroundColor: "#1b140c", envPreset: "dawn", orbit: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(OrigamiStudio, {}) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }, children: AJL_ORIGAMI.map((item) => {
      var _a, _b, _c;
      const owned = ownedSet.has(item.id);
      const canCraft = coins >= item.cost && !owned && !craftingId;
      const isCrafting = craftingId === item.id;
      const rarityTier = ((_a = item.effect) == null ? void 0 : _a.value) >= 8 ? "legendary" : ((_b = item.effect) == null ? void 0 : _b.value) >= 5 ? "epic" : ((_c = item.effect) == null ? void 0 : _c.value) >= 3 ? "rare" : "common";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: owned ? rarityTier : "common", animated: owned && rarityTier === "legendary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          whileHover: { y: -3 },
          className: "n4-panel",
          style: {
            padding: "1rem",
            borderColor: owned ? "var(--n4-success)" : "var(--n4-border)",
            background: owned ? "color-mix(in srgb, var(--n4-surface) 74%, var(--n4-success) 26%)" : void 0
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2.3rem", marginBottom: 8 }, children: isCrafting ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                animate: { rotate: 360 },
                transition: { duration: 0.7, repeat: Infinity, ease: "linear" },
                style: { display: "inline-block" },
                children: "📄"
              }
            ) : item.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 700 }, children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: ".86rem", color: "var(--n4-text-dim)", marginTop: 4, minHeight: 34 }, children: item.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 8, display: "flex", alignItems: "center", gap: 6, color: "var(--n4-accent)" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: ".82rem" }, children: getEffectText(item.effect) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }, children: [
              owned ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4, color: "var(--n4-success)", fontSize: ".86rem" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 14 }),
                " Đã chế tạo"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: ".86rem", color: "var(--n4-text-dim)" }, children: [
                "Chi phí: ",
                item.cost
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `n4-btn ${canCraft ? "n4-btn-primary" : ""}`,
                  onClick: () => handleCraft(item),
                  disabled: !canCraft,
                  style: { minHeight: 38 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { size: 14, style: { marginRight: 4 } }),
                    isCrafting ? "Đang chế tạo" : owned ? "Đã sở hữu" : "Chế tạo"
                  ]
                }
              )
            ] })
          ]
        }
      ) }, item.id);
    }) })
  ] });
}
export {
  OrigamiStudioPage as default
};
