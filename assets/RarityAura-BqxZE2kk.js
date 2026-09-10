import { j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { a as RARITY_COLORS, b as RARITY_GLOW } from "./rarity-tokens-i3-fv4xK.js";
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
export {
  RarityAura as R
};
