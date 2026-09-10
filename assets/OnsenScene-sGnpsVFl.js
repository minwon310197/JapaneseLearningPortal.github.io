import { j as jsxRuntimeExports, r as reactExports } from "./vendor-react-BUL8WuXG.js";
import { u as useFrame } from "./feature-3d-B9k2WEUa.js";
import { aV as Object3D } from "./vendor-three-DqkPfKji.js";
function SteamParticles({ count = 30 }) {
  const meshRef = reactExports.useRef();
  const dummy = reactExports.useRef(new Object3D());
  const particles = reactExports.useRef(Array.from({ length: count }).map(() => ({
    x: (Math.random() - 0.5) * 4,
    y: Math.random() * 1,
    z: (Math.random() - 0.5) * 2.5,
    v: 0.4 + Math.random() * 0.6,
    s: 0.3 + Math.random() * 0.25
  })));
  useFrame((_, dt) => {
    if (!meshRef.current) return;
    const arr = particles.current;
    for (let i = 0; i < arr.length; i++) {
      const p = arr[i];
      p.y += p.v * dt;
      if (p.y > 3) p.y = 0;
      dummy.current.position.set(p.x, p.y, p.z);
      const scale = p.s * (1 + p.y * 0.2);
      dummy.current.scale.set(scale, scale, scale);
      dummy.current.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.current.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("instancedMesh", { ref: meshRef, args: [null, null, count], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.2, 8, 8] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#ffffff", transparent: true, opacity: 0.4 })
  ] });
}
function OnsenBath() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    Array.from({ length: 16 }).map((_, i) => {
      const a = i / 16 * Math.PI * 2;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [Math.cos(a) * 2.2, 0.2, Math.sin(a) * 1.8], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.6, 0.4, 0.6] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#3a3932", roughness: 0.9 })
      ] }, i);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 0.05, 0], rotation: [-Math.PI / 2, 0, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circleGeometry", { args: [1.8, 32] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#6dc0d7", transparent: true, opacity: 0.7, metalness: 0.2, roughness: 0.1 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SteamParticles, { count: 35 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [-2.8, 1.5, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.25, 14, 14] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#ff7043", emissive: "#ff7a33", emissiveIntensity: 1 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 2.2, -3], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [8, 4.4, 0.1] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#1e2126", roughness: 0.85 })
    ] })
  ] });
}
function OnsenScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(OnsenBath, {});
}
export {
  OnsenBath,
  OnsenScene as default
};
