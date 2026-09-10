import { j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
function MangaAlcove() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0], receiveShadow: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("planeGeometry", { args: [6, 6] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#f1e6c8", roughness: 0.95 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 1.6, -2], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [5, 3.2, 0.3] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#4a2a10", roughness: 0.8 })
    ] }),
    Array.from({ length: 36 }).map((_, i) => {
      const row = Math.floor(i / 12);
      const col = i % 12;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [col * 0.4 - 2.2, 2.4 - row * 0.7, -1.85], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.32, 0.6, 0.05] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: ["#b33a3a", "#3a9fb3", "#74b33a", "#b39f3a", "#a63ab3"][i % 5] })
      ] }, i);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 0.35, 1.2], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [1, 0.7, 1] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#9a2f4a" })
    ] })
  ] });
}
function MangaAlcoveScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MangaAlcove, {});
}
export {
  MangaAlcove,
  MangaAlcoveScene as default
};
