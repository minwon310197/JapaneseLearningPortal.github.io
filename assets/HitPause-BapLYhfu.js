import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
const ShakeContext = reactExports.createContext({ shake: () => {
} });
function ScreenShakeProvider({ children }) {
  const [key, setKey] = reactExports.useState(0);
  const intensityRef = reactExports.useRef(0);
  const durRef = reactExports.useRef(0);
  const rootRef = reactExports.useRef(null);
  const shake = reactExports.useCallback(({ intensity = 0.5, duration = 180 } = {}) => {
    intensityRef.current = intensity;
    durRef.current = duration;
    setKey((k) => k + 1);
  }, []);
  reactExports.useEffect(() => {
    if (!rootRef.current || key === 0) return;
    const el = rootRef.current;
    el.style.setProperty("--shake-intensity", String(intensityRef.current));
    el.style.setProperty("--shake-duration", `${durRef.current}ms`);
    el.classList.remove("is-shaking");
    void el.offsetWidth;
    el.classList.add("is-shaking");
    const t = setTimeout(() => el.classList.remove("is-shaking"), durRef.current);
    return () => clearTimeout(t);
  }, [key]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ShakeContext.Provider, { value: { shake }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: rootRef, className: "n4-screen-shake-root", children }) });
}
function useScreenShake() {
  return reactExports.useContext(ShakeContext);
}
const HitPauseContext = reactExports.createContext({ pause: () => {
}, isPaused: () => false, pausedAt: 0 });
function useHitPause() {
  return reactExports.useContext(HitPauseContext);
}
export {
  ScreenShakeProvider as S,
  useHitPause as a,
  useScreenShake as u
};
