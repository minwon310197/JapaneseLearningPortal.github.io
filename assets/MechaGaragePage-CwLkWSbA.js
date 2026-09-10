const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MechaGarageScene-Cyc8BuqI.js","./vendor-react-BUL8WuXG.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { r as reactExports, j as jsxRuntimeExports, R as React } from "./vendor-react-BUL8WuXG.js";
import { M as MechaScene } from "./ThemedScenes-TCkAJ91j.js";
import { h as useLearningStore, b2 as AJL_MECHA_PARTS } from "./index-BEJSIlFS.js";
import { S as SubgameCanvas } from "./SubgameCanvas-CaGN2HcP.js";
import { R as RarityAura } from "./RarityAura-BqxZE2kk.js";
import "./rarity-tokens-i3-fv4xK.js";
import { S as SparklePing } from "./SparklePing-BWX7eC-Z.js";
import "./HitPause-BapLYhfu.js";
import { i as installAudioPrewarm, p as playSfx, g as getAudioBus } from "./sfx-catalog-CnWM5zfr.js";
import { W as Wrench, e as Coins, Z as Zap } from "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./WorldSurfaceContext-CUHCnPUQ.js";
const MechaGarage = React.lazy(() => __vitePreload(() => import("./MechaGarageScene-Cyc8BuqI.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url).then((module) => ({ default: module.MechaGarage })));
function getEffectText(effect) {
  if (!effect) return "";
  if (effect.type === "xp") return `+${effect.value}% Kinh nghiệm (XP)`;
  if (effect.type === "coin") return `+${effect.value}% Xu`;
  if (effect.type === "boss-damage") return `+${effect.value}% Sát thương Trùm`;
  if (effect.type === "all") return `+${effect.value}% Mọi chỉ số`;
  return `+${effect.value}% ${effect.type}`;
}
function MechaGaragePage() {
  const coins = useLearningStore((s) => s.coins || 0);
  const mechaParts = useLearningStore((s) => s.mechaParts || {});
  const upgradeMechaPart = useLearningStore((s) => s.upgradeMechaPart);
  const [notice, setNotice] = reactExports.useState("");
  const [sparkFor, setSparkFor] = reactExports.useState(null);
  reactExports.useEffect(() => {
    installAudioPrewarm();
  }, []);
  const totalLevels = reactExports.useMemo(() => AJL_MECHA_PARTS.reduce((sum, part) => sum + (mechaParts[part.id] || 0), 0), [mechaParts]);
  const handleUpgrade = reactExports.useCallback((part) => {
    if (!part) return;
    const level = mechaParts[part.id] || 0;
    const cost = part.baseCost * Math.pow(2, level);
    const ok = upgradeMechaPart(part.id, cost);
    if (ok) {
      setSparkFor(part.id);
      try {
        playSfx(getAudioBus(), "craft-forge");
      } catch (e) {
      }
    } else {
      try {
        playSfx(getAudioBus(), "error");
      } catch (e) {
      }
    }
    setNotice(ok ? `Nâng ${part.name} lên cấp ${level + 1}.` : "Không đủ xu để nâng cấp.");
  }, [mechaParts, upgradeMechaPart]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { padding: "1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "1rem", marginBottom: 12 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: { margin: 0, display: "inline-flex", alignItems: "center", gap: 8, fontSize: "1.4rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { size: 22 }),
          " Gara mecha"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MechaScene, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "inline-flex", gap: 8, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-chip", children: [
            "Tổng cấp: ",
            totalLevels
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-chip", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { size: 14 }),
            " ",
            coins.toLocaleString("vi-VN")
          ] })
        ] })
      ] }),
      notice && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 8, color: "var(--n4-text-dim)", fontSize: ".9rem" }, children: notice })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mecha-remaster__hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mecha-remaster__hero-fallback", children: "🤖 Đang dựng gara…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SubgameCanvas, { cameraPos: [0, 2.4, 5], fov: 48, backgroundColor: "#0a0d12", envPreset: "night", orbit: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MechaGarage, {}) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 12 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "1rem", textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "5.2rem", marginBottom: 10 }, children: "🤖" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: 0, color: "var(--n4-text-dim)" }, children: "Nâng cấp từng bộ phận để tăng chỉ số thưởng cho hành trình học tập và đấu trùm. Mỗi cấp có chi phí tăng theo cấp số nhân ×2." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card", style: { padding: "1rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gap: 10 }, children: AJL_MECHA_PARTS.map((part) => {
        const level = mechaParts[part.id] || 0;
        const cost = part.baseCost * Math.pow(2, level);
        const canUpgrade = coins >= cost;
        const rarity = level >= 7 ? "legendary" : level >= 4 ? "epic" : level >= 2 ? "rare" : "common";
        return /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity, animated: level >= 7, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-panel", style: { padding: ".9rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.9rem" }, children: part.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontWeight: 700 }, children: [
                part.name,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "var(--n4-accent)" }, children: [
                  "Lv.",
                  level
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-dim)", fontSize: ".82rem" }, children: part.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-success)", fontSize: ".8rem", marginTop: 2 }, children: getEffectText(part.effect) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: `n4-btn ${canUpgrade ? "n4-btn-primary" : ""}`,
              onClick: () => handleUpgrade(part),
              disabled: !canUpgrade,
              style: { minHeight: 38 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 14, style: { marginRight: 4 } }),
                cost
              ]
            }
          ),
          sparkFor === part.id && /* @__PURE__ */ jsxRuntimeExports.jsx(SparklePing, { duration: 600, onDone: () => setSparkFor(null) })
        ] }) }, part.id);
      }) }) })
    ] })
  ] });
}
export {
  MechaGaragePage as default
};
