import { j as jsxRuntimeExports, r as reactExports } from "./vendor-react-BYxMSDiB.js";
import { a as useAppStore } from "./feature-3d-jK3b4Iv-.js";
let effectSequence = 0;
function nextEffectId(prefix) {
  effectSequence += 1;
  return `${prefix}-${Date.now()}-${effectSequence}`;
}
const COMBO_EFFECT_TIERS = [
  {
    key: "divine",
    threshold: 100,
    label: "Thần thoại",
    icon: "👑",
    color: "#fde68a",
    glow: "0 0 24px rgba(250, 204, 21, 0.55)"
  },
  {
    key: "supernova",
    threshold: 50,
    label: "Siêu tân tinh",
    icon: "☄️",
    color: "#fb7185",
    glow: "0 0 24px rgba(251, 113, 133, 0.45)"
  },
  {
    key: "inferno",
    threshold: 25,
    label: "Bốc cháy",
    icon: "🔥",
    color: "#f97316",
    glow: "0 0 22px rgba(249, 115, 22, 0.4)"
  },
  {
    key: "blaze",
    threshold: 10,
    label: "Tăng tốc",
    icon: "⚡",
    color: "#f59e0b",
    glow: "0 0 18px rgba(245, 158, 11, 0.4)"
  },
  {
    key: "ember",
    threshold: 5,
    label: "Vào guồng",
    icon: "✨",
    color: "#22c55e",
    glow: "0 0 16px rgba(34, 197, 94, 0.35)"
  }
];
const BATTLE_BANNER_TONES = {
  info: {
    background: "linear-gradient(90deg, rgba(37,99,235,0.95), rgba(124,58,237,0.95))",
    border: "1px solid rgba(191, 219, 254, 0.45)",
    shadow: "0 12px 28px rgba(37, 99, 235, 0.25)",
    color: "#eff6ff"
  },
  power: {
    background: "linear-gradient(90deg, rgba(124,58,237,0.98), rgba(219,39,119,0.98))",
    border: "1px solid rgba(233, 213, 255, 0.45)",
    shadow: "0 12px 28px rgba(168, 85, 247, 0.35)",
    color: "#faf5ff"
  },
  warning: {
    background: "linear-gradient(90deg, rgba(217,119,6,0.98), rgba(239,68,68,0.95))",
    border: "1px solid rgba(254, 215, 170, 0.45)",
    shadow: "0 12px 28px rgba(217, 119, 6, 0.35)",
    color: "#fff7ed"
  },
  victory: {
    background: "linear-gradient(90deg, rgba(22,163,74,0.96), rgba(59,130,246,0.96))",
    border: "1px solid rgba(187, 247, 208, 0.45)",
    shadow: "0 12px 28px rgba(22, 163, 74, 0.3)",
    color: "#f0fdf4"
  }
};
function getComboTier(combo) {
  return COMBO_EFFECT_TIERS.find((tier) => combo >= tier.threshold) || null;
}
function getBossMood(hpPct) {
  if (hpPct <= 20) {
    return {
      key: "rage",
      label: "🔴 Cuồng loạn!",
      color: "#ef4444",
      arenaTint: "linear-gradient(180deg, rgba(239,68,68,0.16) 0%, rgba(127,29,29,0.05) 100%)",
      glow: "drop-shadow(0 0 18px rgba(239,68,68,0.9)) drop-shadow(0 0 8px rgba(239,68,68,0.65))"
    };
  }
  if (hpPct <= 50) {
    return {
      key: "warning",
      label: "⚠️ Tức giận!",
      color: "#f59e0b",
      arenaTint: "linear-gradient(180deg, rgba(245,158,11,0.12) 0%, rgba(120,53,15,0.04) 100%)",
      glow: "drop-shadow(0 0 12px rgba(245,158,11,0.65))"
    };
  }
  return {
    key: "calm",
    label: null,
    color: null,
    arenaTint: "transparent",
    glow: "drop-shadow(0 4px 16px rgba(0, 0, 0, 0.4))"
  };
}
function createCombatText({
  amount = 0,
  label,
  target = "boss",
  variant,
  emphasis = false,
  left,
  top,
  color,
  textShadow
}) {
  const isCrit = Boolean(emphasis) || Math.abs(amount) >= 20 || variant === "crit";
  const positions = target === "player" ? { left: "50%", top: "84%" } : { left: "50%", top: "28%" };
  return {
    id: nextEffectId(target),
    label: label || `-${Math.abs(amount)}`,
    target,
    variant: isCrit ? "crit" : "hit",
    left: left || positions.left,
    top: top || positions.top,
    color: color || (target === "player" ? isCrit ? "#fecaca" : "#fca5a5" : isCrit ? "#fde68a" : "#f87171"),
    textShadow: textShadow || (isCrit ? "0 0 14px rgba(250, 204, 21, 0.5)" : "0 0 10px rgba(248, 113, 113, 0.28)")
  };
}
function createBattleBanner({
  icon = "✨",
  label,
  detail = "",
  tone = "info"
}) {
  return {
    id: nextEffectId("banner"),
    icon,
    label,
    detail,
    tone
  };
}
function usePrefersReducedMotion() {
  const appReduced = useAppStore((s) => s.reducedMotion);
  const [systemReduced, setSystemReduced] = reactExports.useState(false);
  reactExports.useEffect(() => {
    var _a;
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return void 0;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSystemReduced(mediaQuery.matches);
    update();
    (_a = mediaQuery.addEventListener) == null ? void 0 : _a.call(mediaQuery, "change", update);
    return () => {
      var _a2;
      return (_a2 = mediaQuery.removeEventListener) == null ? void 0 : _a2.call(mediaQuery, "change", update);
    };
  }, []);
  return appReduced || systemReduced;
}
function AnimatedPill({ style, className, children }) {
  const reducedMotion = usePrefersReducedMotion();
  const [entered, setEntered] = reactExports.useState(reducedMotion);
  reactExports.useEffect(() => {
    if (reducedMotion) return void 0;
    const timerId = setTimeout(() => setEntered(true), 16);
    return () => clearTimeout(timerId);
  }, [reducedMotion]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className,
      style: {
        opacity: entered ? 1 : 0,
        transform: entered ? "translate(-50%, 0) scale(1)" : "translate(-50%, 10px) scale(0.92)",
        transition: reducedMotion ? "none" : "opacity 0.18s ease, transform 0.24s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        ...style
      },
      children
    }
  );
}
function CombatTextLayer({ items = [] }) {
  const reducedMotion = usePrefersReducedMotion();
  if (!items.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 5
      },
      children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: reducedMotion ? void 0 : `n4-dmg-float ${item.variant === "crit" ? "n4-dmg-crit" : "n4-dmg-hit"}`,
          style: {
            left: item.left,
            top: item.top,
            color: item.color,
            textShadow: item.textShadow,
            transform: reducedMotion ? "translate(-50%, -50%)" : void 0,
            opacity: reducedMotion ? 0.98 : void 0
          },
          children: item.label
        },
        item.id
      ))
    }
  );
}
function ComboTierBurst({ tier }) {
  if (!tier) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AnimatedPill,
    {
      className: tier.combo >= 10 ? "combo-fire" : "",
      style: {
        position: "absolute",
        top: 84,
        left: "50%",
        zIndex: 6,
        padding: "8px 16px",
        borderRadius: 999,
        background: "rgba(10, 14, 24, 0.88)",
        border: `1px solid ${tier.color}`,
        boxShadow: tier.glow,
        color: tier.color,
        fontWeight: 800,
        letterSpacing: "0.02em",
        textAlign: "center",
        whiteSpace: "nowrap",
        pointerEvents: "none"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        tier.icon,
        " ",
        tier.label,
        " • x",
        tier.combo
      ] })
    }
  );
}
function BattleBanner({ banner }) {
  if (!banner) return null;
  const tone = BATTLE_BANNER_TONES[banner.tone] || BATTLE_BANNER_TONES.info;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AnimatedPill,
    {
      style: {
        position: "absolute",
        top: 18,
        left: "50%",
        zIndex: 7,
        minWidth: 240,
        maxWidth: "min(88vw, 520px)",
        padding: "10px 16px",
        borderRadius: 14,
        background: tone.background,
        border: tone.border,
        boxShadow: tone.shadow,
        color: tone.color,
        textAlign: "center",
        pointerEvents: "none"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontWeight: 800, fontSize: "0.95rem" }, children: [
          banner.icon,
          " ",
          banner.label
        ] }),
        banner.detail ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 3, fontSize: "0.8rem", opacity: 0.92 }, children: banner.detail }) : null
      ]
    }
  );
}
function GameplayEffects({ damageEvents = [], comboTier = null, banner = null }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BattleBanner, { banner }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ComboTierBurst, { tier: comboTier }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CombatTextLayer, { items: damageEvents })
  ] });
}
export {
  GameplayEffects as G,
  createBattleBanner as a,
  getBossMood as b,
  createCombatText as c,
  getComboTier as g
};
