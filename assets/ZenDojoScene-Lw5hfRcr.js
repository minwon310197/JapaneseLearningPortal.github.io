import { j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
function ZenDojo() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0], receiveShadow: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("planeGeometry", { args: [8, 8] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#dcd4c2", roughness: 0.95 })
    ] }),
    [[-1, 0.4, 0.5, 0.7], [1.2, 0.5, 0, 0.9], [0, 0.3, -1.3, 0.5]].map(([x, y, z, s], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [x, y, z], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("dodecahedronGeometry", { args: [s] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#4a4a42", roughness: 0.85 })
    ] }, i)),
    Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [i * 0.6 - 2.7, 1, -3], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("cylinderGeometry", { args: [0.06, 0.06, 2, 8] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#8a7e4a" })
    ] }, i))
  ] });
}
function ZenDojoScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ZenDojo, {});
}
export {
  ZenDojo,
  ZenDojoScene as default
};
