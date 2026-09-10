import { r as reactExports } from "./vendor-react-BUL8WuXG.js";
import { a as useThree } from "./feature-3d-B9k2WEUa.js";
function WebGLContextLostRecovery({ onLost }) {
  const { gl } = useThree();
  reactExports.useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.warn("WebGL Renderer Context Lost detected! Recovering by remounting canvas...");
      if (typeof onLost === "function") {
        onLost();
      }
    };
    const canvas = gl.domElement;
    if (canvas) {
      canvas.addEventListener("webglcontextlost", handleContextLost);
    }
    return () => {
      if (canvas) {
        canvas.removeEventListener("webglcontextlost", handleContextLost);
      }
    };
  }, [gl, onLost]);
  return null;
}
function useVisibilityPause() {
  const set = useThree((s) => s.set);
  const invalidate = useThree((s) => s.invalidate);
  const frameloop = useThree((s) => s.frameloop);
  const lastActiveFrameloopRef = reactExports.useRef(frameloop || "always");
  reactExports.useEffect(() => {
    if (frameloop !== "never") lastActiveFrameloopRef.current = frameloop || "always";
  }, [frameloop]);
  reactExports.useEffect(() => {
    if (typeof document === "undefined") return void 0;
    const handler = () => {
      if (document.hidden) {
        set({ frameloop: "never" });
      } else {
        set({ frameloop: lastActiveFrameloopRef.current || "always" });
        invalidate();
      }
    };
    document.addEventListener("visibilitychange", handler);
    handler();
    return () => document.removeEventListener("visibilitychange", handler);
  }, [set, invalidate]);
}
function VisibilityPauseBinder() {
  useVisibilityPause();
  return null;
}
export {
  VisibilityPauseBinder as V,
  WebGLContextLostRecovery as W
};
