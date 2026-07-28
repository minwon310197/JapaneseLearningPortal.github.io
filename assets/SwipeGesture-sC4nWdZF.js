import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
const SWIPE_THRESHOLD = 40;
function SwipeGesture({
  onSwipe,
  children,
  disabled = false,
  axes = ["x", "y"],
  className = "",
  ariaOptionMap = null
}) {
  const startRef = reactExports.useRef(null);
  const [drag, setDrag] = reactExports.useState({ dx: 0, dy: 0, active: false });
  const resetDrag = reactExports.useCallback(() => {
    startRef.current = null;
    setDrag({ dx: 0, dy: 0, active: false });
  }, []);
  const handleStart = reactExports.useCallback((clientX, clientY) => {
    if (disabled) return;
    startRef.current = { x: clientX, y: clientY, t: performance.now() };
    setDrag({ dx: 0, dy: 0, active: true });
  }, [disabled]);
  const handleMove = reactExports.useCallback((clientX, clientY) => {
    if (!startRef.current) return;
    setDrag({ dx: clientX - startRef.current.x, dy: clientY - startRef.current.y, active: true });
  }, []);
  const handleEnd = reactExports.useCallback(() => {
    if (!startRef.current) {
      resetDrag();
      return;
    }
    const { x, y, t } = startRef.current;
    const now = performance.now();
    const dx = drag.dx;
    const dy = drag.dy;
    const dt = Math.max(1, now - t);
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);
    if (absX > absY && axes.includes("x") && absX > SWIPE_THRESHOLD) {
      const dir = dx > 0 ? "right" : "left";
      onSwipe == null ? void 0 : onSwipe(dir, absX / dt);
    } else if (axes.includes("y") && absY > SWIPE_THRESHOLD) {
      const dir = dy > 0 ? "down" : "up";
      onSwipe == null ? void 0 : onSwipe(dir, absY / dt);
    }
    resetDrag();
  }, [drag.dx, drag.dy, axes, onSwipe, resetDrag]);
  reactExports.useEffect(() => {
    if (disabled) return void 0;
    const onKey = (e) => {
      const tgt = e.target;
      if (tgt && /^(INPUT|TEXTAREA|SELECT)$/.test(tgt.tagName)) return;
      switch (e.key) {
        case "ArrowLeft":
          if (axes.includes("x")) onSwipe == null ? void 0 : onSwipe("left", 1);
          break;
        case "ArrowRight":
          if (axes.includes("x")) onSwipe == null ? void 0 : onSwipe("right", 1);
          break;
        case "ArrowUp":
          if (axes.includes("y")) onSwipe == null ? void 0 : onSwipe("up", 1);
          break;
        case "ArrowDown":
          if (axes.includes("y")) onSwipe == null ? void 0 : onSwipe("down", 1);
          break;
        default:
          return;
      }
      e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [disabled, axes, onSwipe]);
  const style = drag.active ? {
    transform: `translate(${drag.dx}px, ${drag.dy}px) rotate(${drag.dx * 0.03}deg)`,
    transition: "none"
  } : {};
  const describedLabel = ariaOptionMap ? Object.entries(ariaOptionMap).map(([dir, lbl]) => `${dir} = ${lbl}`).join(", ") : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `n4-swipe ${drag.active ? "is-dragging" : ""} ${className}`,
      style,
      onMouseDown: (e) => handleStart(e.clientX, e.clientY),
      onMouseMove: (e) => drag.active && handleMove(e.clientX, e.clientY),
      onMouseUp: handleEnd,
      onMouseLeave: handleEnd,
      onTouchStart: (e) => e.touches[0] && handleStart(e.touches[0].clientX, e.touches[0].clientY),
      onTouchMove: (e) => e.touches[0] && handleMove(e.touches[0].clientX, e.touches[0].clientY),
      onTouchEnd: handleEnd,
      role: "button",
      tabIndex: disabled ? -1 : 0,
      "aria-label": describedLabel ? `Vuốt: ${describedLabel}` : "Vuốt hoặc phím mũi tên",
      children
    }
  );
}
export {
  SwipeGesture as default
};
