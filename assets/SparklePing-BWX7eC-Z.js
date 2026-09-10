import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
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
export {
  SparklePing as S
};
