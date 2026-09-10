import { r as reactExports } from "./vendor-react-BUL8WuXG.js";
import { u as useAppStore } from "./index-BEJSIlFS.js";
const SWIPE_CLOSE_THRESHOLD = 90;
const MAX_OFFSET = 140;
function isInteractiveTarget(target) {
  return !!(target == null ? void 0 : target.closest('button, a, input, textarea, select, label, canvas, [role="button"]'));
}
function useSwipeClose(onClose) {
  const enabled = useAppStore((s) => s.swipeClose);
  const [offsetY, setOffsetY] = reactExports.useState(0);
  const touchStartRef = reactExports.useRef(null);
  const onCloseRef = reactExports.useRef(onClose);
  onCloseRef.current = onClose;
  reactExports.useEffect(() => {
    setOffsetY(0);
    touchStartRef.current = null;
  }, [enabled]);
  const handleTouchStart = (e) => {
    var _a, _b;
    if (!enabled || isInteractiveTarget(e.target)) return;
    const touch = (_a = e.changedTouches) == null ? void 0 : _a[0];
    if (!touch) return;
    if (((_b = e.currentTarget) == null ? void 0 : _b.scrollTop) > 0) return;
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };
  const handleTouchMove = (e) => {
    var _a;
    if (!enabled || !touchStartRef.current) return;
    const touch = (_a = e.changedTouches) == null ? void 0 : _a[0];
    if (!touch) return;
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;
    if (dy <= 0 || Math.abs(dy) <= Math.abs(dx) * 1.15) {
      setOffsetY(0);
      return;
    }
    setOffsetY(Math.max(0, Math.min(MAX_OFFSET, dy)));
  };
  const handleTouchEnd = (e) => {
    var _a, _b;
    if (!touchStartRef.current) return;
    const touch = (_a = e.changedTouches) == null ? void 0 : _a[0];
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!touch || !enabled) {
      setOffsetY(0);
      return;
    }
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    const shouldClose = dy >= SWIPE_CLOSE_THRESHOLD && Math.abs(dy) > Math.abs(dx) * 1.25;
    setOffsetY(0);
    if (shouldClose) (_b = onCloseRef.current) == null ? void 0 : _b.call(onCloseRef);
  };
  return {
    swipeCloseEnabled: enabled,
    swipeOffsetY: offsetY,
    swipeHandlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onTouchCancel: handleTouchEnd
    },
    swipeStyle: enabled ? {
      transform: `translateY(${offsetY}px)`,
      opacity: offsetY ? Math.max(0.72, 1 - offsetY / 420) : 1,
      transition: touchStartRef.current ? "none" : "transform 0.18s ease, opacity 0.18s ease",
      touchAction: "pan-y"
    } : void 0
  };
}
export {
  useSwipeClose as u
};
