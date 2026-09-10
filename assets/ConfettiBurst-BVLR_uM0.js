import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { R as RARITY_PARTICLE_COLORS, g as getRarityParticleCount } from "./rarity-tokens-i3-fv4xK.js";
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
export {
  ConfettiBurst as C
};
