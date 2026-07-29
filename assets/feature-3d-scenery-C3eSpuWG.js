import { j as jsxRuntimeExports, r as reactExports } from "./vendor-react-BYxMSDiB.js";
function SettingsHeroScene() {
  return null;
}
function ContentHeroScene() {
  return null;
}
function EconomySceneHero() {
  return null;
}
const RARITY_COLORS = Object.freeze({
  common: "#9fb4c7",
  rare: "#4bb3ff",
  epic: "#c264ff",
  legendary: "#ffb347"
});
const RARITY_GLOW = Object.freeze({
  common: "0 0 6px rgba(159,180,199,0.4)",
  rare: "0 0 10px rgba(75,179,255,0.55)",
  epic: "0 0 16px rgba(194,100,255,0.7)",
  legendary: "0 0 22px rgba(255,179,71,0.85)"
});
const RARITY_LABELS_VI = Object.freeze({
  common: "Thường",
  rare: "Hiếm",
  epic: "Sử thi",
  legendary: "Huyền thoại"
});
function RarityAura({
  rarity = "common",
  children,
  intensity = 1,
  // Default to static aura; only callers that genuinely want a pulse (reward
  // pop, legendary capsule reveal) opt in. Reduces ambient "breathing" noise
  // across inventory/shop grids.
  animated = false,
  className = "",
  style,
  as: As = "div"
}) {
  const color = RARITY_COLORS[rarity] || RARITY_COLORS.common;
  const glow = RARITY_GLOW[rarity] || "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    As,
    {
      className: `n4-rarity-aura n4-rarity-aura--${rarity} ${animated ? "is-animated" : ""} ${className}`,
      style: {
        "--rarity-color": color,
        "--rarity-glow": glow,
        "--rarity-intensity": intensity,
        ...style || {}
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "n4-rarity-aura__ring" }),
        children
      ]
    }
  );
}
const RARITY_PARTICLE_COLORS = {
  common: [RARITY_COLORS.common, "#cfd6dc"],
  rare: [RARITY_COLORS.rare, "#b8dcff"],
  epic: [RARITY_COLORS.epic, "#e0b4ff"],
  legendary: [RARITY_COLORS.legendary, "#ffe2a8"]
};
function getRarityParticleCount(rarity, density = "normal") {
  var _a, _b;
  const base = (_a = { common: 12, rare: 18, epic: 30, legendary: 48 }[rarity]) != null ? _a : 12;
  const mult = (_b = { low: 0.5, normal: 1, high: 1.5 }[density]) != null ? _b : 1;
  return Math.round(base * mult);
}
function ConfettiBurst({ rarity = "rare", duration = 1400, origin = { x: "50%", y: "40%" }, onDone, density = "normal" }) {
  const rootRef = reactExports.useRef(null);
  const colors = RARITY_PARTICLE_COLORS[rarity] || RARITY_PARTICLE_COLORS.common;
  const count = getRarityParticleCount(rarity, density);
  const particles = reactExports.useMemo(() => Array.from({ length: count }).map((_, i) => ({
    dx: (Math.random() - 0.5) * 420,
    dy: 200 + Math.random() * 320,
    delay: Math.random() * 180,
    rot: (Math.random() - 0.5) * 720,
    color: colors[i % colors.length],
    shape: i % 3
  })), [count, colors]);
  reactExports.useEffect(() => {
    if (!onDone) return void 0;
    const t = setTimeout(onDone, duration);
    return () => clearTimeout(t);
  }, [duration, onDone]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: rootRef,
      className: "n4-vfx-confetti-burst",
      style: { left: origin.x, top: origin.y, "--vfx-duration": `${duration}ms` },
      "aria-hidden": "true",
      children: particles.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `n4-vfx-confetti-burst__p n4-vfx-confetti-burst__p--s${p.shape}`,
          style: {
            "--dx": `${p.dx}px`,
            "--dy": `${p.dy}px`,
            "--delay": `${p.delay}ms`,
            "--rot": `${p.rot}deg`,
            background: p.color
          }
        },
        i
      ))
    }
  );
}
function SparklePing({ duration = 500, origin = { x: "50%", y: "50%" }, onDone, color = "#fff7c2" }) {
  reactExports.useEffect(() => {
    if (!onDone) return void 0;
    const t = setTimeout(onDone, duration);
    return () => clearTimeout(t);
  }, [duration, onDone]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "n4-vfx-sparkle-ping",
      style: { left: origin.x, top: origin.y, "--vfx-duration": `${duration}ms`, color },
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-vfx-sparkle-ping__core", children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-vfx-sparkle-ping__ring" })
      ]
    }
  );
}
function StampPop({ text = "PURCHASED", color = "#ff3a3a", duration = 900, onDone }) {
  reactExports.useEffect(() => {
    if (!onDone) return void 0;
    const t = setTimeout(onDone, duration);
    return () => clearTimeout(t);
  }, [duration, onDone]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-vfx-stamp-pop", "aria-hidden": "true", style: { color, "--vfx-duration": `${duration}ms` }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-vfx-stamp-pop__text", children: text }) });
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
const ShakeContext = reactExports.createContext({ shake: () => {
} });
function ScreenShakeProvider({ children }) {
  const [key, setKey] = reactExports.useState(0);
  const intensityRef = reactExports.useRef(0);
  const durRef = reactExports.useRef(0);
  const rootRef = reactExports.useRef(null);
  const shake = reactExports.useCallback(({ intensity = 0.5, duration = 180 } = {}) => {
    intensityRef.current = intensity;
    durRef.current = duration;
    setKey((k) => k + 1);
  }, []);
  reactExports.useEffect(() => {
    if (!rootRef.current || key === 0) return;
    const el = rootRef.current;
    el.style.setProperty("--shake-intensity", String(intensityRef.current));
    el.style.setProperty("--shake-duration", `${durRef.current}ms`);
    el.classList.remove("is-shaking");
    void el.offsetWidth;
    el.classList.add("is-shaking");
    const t = setTimeout(() => el.classList.remove("is-shaking"), durRef.current);
    return () => clearTimeout(t);
  }, [key]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ShakeContext.Provider, { value: { shake }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: rootRef, className: "n4-screen-shake-root", children }) });
}
function useScreenShake() {
  return reactExports.useContext(ShakeContext);
}
const HitPauseContext = reactExports.createContext({ pause: () => {
}, isPaused: () => false, pausedAt: 0 });
function useHitPause() {
  return reactExports.useContext(HitPauseContext);
}
function Gacha3DScene() {
  return null;
}
function Pet3DScene() {
  return null;
}
function Room3DScene() {
  return null;
}
function Market3DScene() {
  return null;
}
function TreasureHunt3DScene() {
  return null;
}
function SenseiScene() {
  return null;
}
function VillageScene() {
  return null;
}
function ZenScene() {
  return null;
}
function OrigamiScene() {
  return null;
}
function NekoCafeScene() {
  return null;
}
function MechaScene() {
  return null;
}
function RewardPop({
  item,
  title = "Đã nhận",
  duration = 2600,
  onDone,
  showConfetti = true
}) {
  reactExports.useEffect(() => {
    if (!onDone) return void 0;
    const t = setTimeout(onDone, duration);
    return () => clearTimeout(t);
  }, [duration, onDone]);
  if (!item) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-reward-pop", role: "status", "aria-live": "polite", children: [
    showConfetti && /* @__PURE__ */ jsxRuntimeExports.jsx(ConfettiBurst, { rarity: item.rarity || "common" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RarityAura, { rarity: item.rarity || "common", animated: true, className: "n4-reward-pop__card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-reward-pop__icon", "aria-hidden": "true", children: item.iconRef || "✨" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-reward-pop__meta", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-reward-pop__title", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-reward-pop__name", children: item.nameVi || item.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-reward-pop__rarity", children: RARITY_LABELS_VI[item.rarity] || "Thường" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SparklePing, { color: item.rarity === "legendary" ? "#ffe0a8" : "#fff" })
    ] })
  ] });
}
function useRewardPop() {
  const triggerReward = reactExports.useCallback(() => {
  }, []);
  const RewardLayer = reactExports.useCallback(() => null, []);
  return { triggerReward, RewardLayer };
}
function BattleBackdrop() {
  return null;
}
function SushiBackdrop() {
  return null;
}
export {
  BattleBackdrop as B,
  ContentHeroScene as C,
  EconomySceneHero as E,
  Gacha3DScene as G,
  Market3DScene as M,
  NekoCafeScene as N,
  OrigamiScene as O,
  Pet3DScene as P,
  RarityStream as R,
  SettingsHeroScene as S,
  TreasureHunt3DScene as T,
  VillageScene as V,
  ZenScene as Z,
  ConfettiBurst as a,
  SparklePing as b,
  Room3DScene as c,
  RarityAura as d,
  StampPop as e,
  SenseiScene as f,
  RARITY_LABELS_VI as g,
  RewardPop as h,
  ScreenShakeProvider as i,
  MechaScene as j,
  useHitPause as k,
  useRewardPop as l,
  SushiBackdrop as m,
  useScreenShake as u
};
