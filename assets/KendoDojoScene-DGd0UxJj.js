import { j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
function KendoDojo() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -0.01, 0], receiveShadow: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("planeGeometry", { args: [10, 10, 1, 1] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#d7b677", roughness: 0.95 })
    ] }),
    Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "mesh",
      {
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 2e-3, i * 2 - 4],
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("planeGeometry", { args: [10, 1.95] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#b59756", roughness: 0.95, wireframe: true })
        ]
      },
      i
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 2, -5], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [10, 4, 0.1] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#f3ead3", roughness: 0.85 })
    ] }),
    Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [i * 1.7 - 4.25, 2, -4.94], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.04, 4, 0.02] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#2b2316" })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 1, -2.5], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("cylinderGeometry", { args: [0.45, 0.55, 2, 16] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#1b1b1b", roughness: 0.7 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 2.2, -2.5], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.32, 16, 16] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#ff6b33" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0.45, 0.9, 1.4], rotation: [0, 0, 0.4], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("cylinderGeometry", { args: [0.045, 0.045, 1.8, 10] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#a87137" })
    ] })
  ] });
}
function KendoDojoScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(KendoDojo, {});
}
export {
  KendoDojo,
  KendoDojoScene as default
};
