import { j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
function TeaRoom() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0], receiveShadow: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("planeGeometry", { args: [6, 6] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#e0cc88", roughness: 0.95 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 0.25, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [2.4, 0.08, 1.2] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#5c381a", roughness: 0.7 })
    ] }),
    [[-1.1, 0.1, 0.5], [1.1, 0.1, 0.5], [-1.1, 0.1, -0.5], [1.1, 0.1, -0.5]].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: p, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.1, 0.2, 0.1] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#4a2a10" })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [-0.5, 0.5, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("cylinderGeometry", { args: [0.22, 0.3, 0.4, 16] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#3a3a3a", metalness: 0.5, roughness: 0.4 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0.6, 0.34, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("cylinderGeometry", { args: [0.18, 0.15, 0.12, 16] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#4a7a44" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0.6, 0.45, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("cylinderGeometry", { args: [0.05, 0.06, 0.15, 12] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#f3e4a5" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 1.6, -3], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [6, 3.2, 0.1] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#faf3d8", roughness: 0.9 })
    ] }),
    Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [i * 1.4 - 2.1, 1.6, -2.94], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.03, 3.2, 0.01] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#3d2612" })
    ] }, i))
  ] });
}
function TeaRoomScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TeaRoom, {});
}
export {
  TeaRoom,
  TeaRoomScene as default
};
