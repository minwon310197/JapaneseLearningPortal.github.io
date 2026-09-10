var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { u as useWorldSurface } from "./WorldSurfaceContext-CUHCnPUQ.js";
import { C as Canvas, E as Environment, O as OrbitControls, B as Billboard, T as Text, a as useThree } from "./feature-3d-B9k2WEUa.js";
import { H as getQualityConfig } from "./index-BEJSIlFS.js";
import { V as VisibilityPauseBinder, W as WebGLContextLostRecovery } from "./VisibilityPauseBinder-CQh7nPdw.js";
import { aw as PCFShadowMap } from "./vendor-three-DqkPfKji.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
class Scene3DErrorBoundary extends reactExports.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", { error: null });
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "100%",
        height: this.props.height || "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--n4-surface, #1a1a2e)",
        borderRadius: 12,
        color: "var(--n4-text-dim, #888)",
        fontSize: "0.85rem"
      }, children: "⚠️ Không thể tải cảnh 3D" });
    }
    return this.props.children;
  }
}
function SceneDisposer() {
  const { scene, gl } = useThree();
  reactExports.useEffect(() => () => {
    scene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        mats.forEach((m) => {
          Object.values(m).forEach((v) => {
            if (v == null ? void 0 : v.isTexture) v.dispose();
          });
          m.dispose();
        });
      }
    });
    gl.dispose();
  }, [scene, gl]);
  return null;
}
function SceneContainer({
  height = "300px",
  background = "transparent",
  orbitControls = true,
  interactive,
  shadows = true,
  environment = "city",
  cameraPosition = [0, 2, 5],
  className = "",
  style = {},
  children
}) {
  var _a;
  const allowPointer = interactive != null ? interactive : orbitControls;
  const inWorld = useWorldSurface();
  const qCfg = getQualityConfig();
  const useShadows = shadows && qCfg.shadows;
  const envPreset = qCfg.environment ? environment : null;
  const [canvasKey, setCanvasKey] = reactExports.useState(0);
  const handleContextLost = reactExports.useCallback(() => {
    setCanvasKey((k) => k + 1);
  }, []);
  if (inWorld) return null;
  if (qCfg.tier === "low") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `n4-scene-container ${className}`,
        "aria-hidden": "true",
        style: {
          width: "100%",
          height,
          maxHeight: "30vh",
          background,
          borderRadius: "12px",
          overflow: "hidden",
          pointerEvents: "none",
          ...style
        }
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Scene3DErrorBoundary, { height, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `n4-scene-container ${className}`,
      style: {
        width: "100%",
        height,
        maxHeight: "30vh",
        background,
        borderRadius: "12px",
        overflow: "hidden",
        pointerEvents: allowPointer ? "auto" : "none",
        ...style
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Canvas,
        {
          camera: { position: cameraPosition, fov: 45 },
          shadows: useShadows ? { type: PCFShadowMap } : false,
          style: { width: "100%", height: "100%" },
          dpr: qCfg.dpr,
          gl: {
            antialias: qCfg.antialias,
            alpha: true,
            powerPreference: ((_a = qCfg.deviceProbe) == null ? void 0 : _a.isMobile) ? "low-power" : "high-performance"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(VisibilityPauseBinder, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(WebGLContextLostRecovery, { onLost: handleContextLost }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SceneDisposer, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Billboard, { follow: true, position: [0, 0, 0], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { fontSize: 0.3, color: "white", anchorX: "center", anchorY: "middle", outlineWidth: 0.02, outlineColor: "#000000", children: "Đang tải 3D..." }) }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.6 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [5, 8, 5], intensity: 1, castShadow: useShadows }),
              envPreset && /* @__PURE__ */ jsxRuntimeExports.jsx(Environment, { preset: envPreset }),
              orbitControls && /* @__PURE__ */ jsxRuntimeExports.jsx(
                OrbitControls,
                {
                  enablePan: false,
                  minDistance: 2,
                  maxDistance: 15,
                  maxPolarAngle: Math.PI / 2.1
                }
              ),
              children
            ] })
          ]
        },
        canvasKey
      )
    }
  ) });
}
export {
  SceneContainer as default
};
