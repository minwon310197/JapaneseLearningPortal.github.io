import { j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
function OrigamiStudio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0], receiveShadow: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("planeGeometry", { args: [8, 8] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#e9e2c8", roughness: 0.9 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 0.5, 0], receiveShadow: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [3, 1, 1.5] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#83593a" })
    ] }),
    ["#e85858", "#55c48a", "#5a9df0", "#f0cc4e"].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [i * 0.6 - 0.9, 1.05, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.4, 0.08, 0.4] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: c })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0.9, 1.25, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("coneGeometry", { args: [0.15, 0.35, 4] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#ffffff" })
    ] })
  ] });
}
function OrigamiStudioScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OrigamiStudio, {});
}
export {
  OrigamiStudio,
  OrigamiStudioScene as default
};
