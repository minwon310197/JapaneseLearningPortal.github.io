import { j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
function TreasureCave() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0], receiveShadow: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("planeGeometry", { args: [10, 10] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#1c1812", roughness: 0.95 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 0.5, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [1, 20, 20] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#ffcc33", emissive: "#ffcc33", emissiveIntensity: 0.75, metalness: 0.6, roughness: 0.25 })
    ] }),
    Array.from({ length: 20 }).map((_, i) => {
      const a = i / 20 * Math.PI * 2;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [Math.cos(a) * 1.6, 0.06, Math.sin(a) * 1.4], rotation: [-Math.PI / 2, 0, a], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("cylinderGeometry", { args: [0.08, 0.08, 0.02, 16] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#f5c138", metalness: 0.7 })
      ] }, i);
    }),
    [[-3, 2.5, -2], [2.6, 2.3, -2.4], [0, 2.8, -1]].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: p, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("coneGeometry", { args: [0.5, 1.6, 8] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#2a241d" })
    ] }, i))
  ] });
}
function TreasureCaveScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TreasureCave, {});
}
export {
  TreasureCave,
  TreasureCaveScene as default
};
