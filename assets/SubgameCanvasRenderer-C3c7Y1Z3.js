import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { u as useWorldSurface } from "./WorldSurfaceContext-CUHCnPUQ.js";
import { C as Canvas, E as Environment, O as OrbitControls } from "./feature-3d-B9k2WEUa.js";
import { H as getQualityConfig } from "./index-BEJSIlFS.js";
import { V as VisibilityPauseBinder, W as WebGLContextLostRecovery } from "./VisibilityPauseBinder-CQh7nPdw.js";
import "./vendor-three-DqkPfKji.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
function SubgameCanvas({
  children,
  cameraPos = [0, 2, 6],
  fov = 48,
  backgroundColor = "#0d1117",
  envPreset = "night",
  orbit = true,
  className = ""
}) {
  const inWorld = useWorldSurface();
  const qCfg = getQualityConfig();
  const useShadows = !!qCfg.shadows;
  const [canvasKey, setCanvasKey] = reactExports.useState(0);
  const handleContextLost = reactExports.useCallback(() => {
    setCanvasKey((k) => k + 1);
  }, []);
  if (inWorld) return null;
  if (qCfg.tier === "low") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-subgame-canvas ${className}`, "aria-hidden": "true" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-subgame-canvas ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Canvas,
    {
      camera: { position: cameraPos, fov },
      shadows: useShadows,
      frameloop: "demand",
      gl: { antialias: qCfg.antialias, powerPreference: "low-power" },
      dpr: qCfg.dpr,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(VisibilityPauseBinder, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WebGLContextLostRecovery, { onLost: handleContextLost }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("color", { attach: "background", args: [backgroundColor] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.45 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [5, 8, 5], intensity: 1.1, castShadow: useShadows }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: null, children: [
          qCfg.tier !== "low" && /* @__PURE__ */ jsxRuntimeExports.jsx(Environment, { preset: envPreset }),
          children
        ] }),
        orbit && /* @__PURE__ */ jsxRuntimeExports.jsx(OrbitControls, { enablePan: false, minPolarAngle: Math.PI / 4, maxPolarAngle: Math.PI / 2.1 })
      ]
    },
    canvasKey
  ) });
}
export {
  SubgameCanvas as default
};
