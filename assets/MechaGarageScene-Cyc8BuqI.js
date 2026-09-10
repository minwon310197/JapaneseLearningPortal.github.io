import { j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
function MechaGarage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0], receiveShadow: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("planeGeometry", { args: [10, 10] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#1d2026", roughness: 0.8 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 1.4, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [1.2, 1.8, 0.8] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#6f7a85", metalness: 0.7, roughness: 0.4 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 2.5, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.5, 0.4, 0.4] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#3b4048", metalness: 0.8 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [-1, 1.4, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("cylinderGeometry", { args: [0.2, 0.2, 1.6, 8] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#6f7a85", metalness: 0.7 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [1, 1.4, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("cylinderGeometry", { args: [0.2, 0.2, 1.6, 8] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#6f7a85", metalness: 0.7 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [-0.3, 0.4, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("cylinderGeometry", { args: [0.25, 0.25, 0.8, 8] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#50585e", metalness: 0.5 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0.3, 0.4, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("cylinderGeometry", { args: [0.25, 0.25, 0.8, 8] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#50585e", metalness: 0.5 })
    ] }),
    [[-1.3, 0.6, 0.2], [1.3, 0.4, 0.1]].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: p, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.1, 10, 10] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#ffea9c", emissive: "#ffd84f", emissiveIntensity: 1 })
    ] }, i))
  ] });
}
function MechaGarageScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MechaGarage, {});
}
export {
  MechaGarage,
  MechaGarageScene as default
};
