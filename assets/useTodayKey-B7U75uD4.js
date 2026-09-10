import { r as reactExports } from "./vendor-react-BUL8WuXG.js";
const MIN_RESYNC_MS = 1e3;
function getTodayKey(timestamp = Date.now()) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function getNextLocalMidnightDelay(nowMs = Date.now()) {
  const now = new Date(nowMs);
  const nextMidnightMs = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime();
  return Math.max(MIN_RESYNC_MS, nextMidnightMs - nowMs + 50);
}
function useTodayKey() {
  const [todayKey, setTodayKey] = reactExports.useState(() => getTodayKey());
  reactExports.useEffect(() => {
    let timerId = null;
    const syncToday = () => {
      setTodayKey((current) => {
        const next = getTodayKey();
        return current === next ? current : next;
      });
    };
    const scheduleNextSync = () => {
      timerId = window.setTimeout(() => {
        syncToday();
        scheduleNextSync();
      }, getNextLocalMidnightDelay());
    };
    const handleVisibility = () => {
      if (document.visibilityState && document.visibilityState !== "visible") return;
      syncToday();
    };
    scheduleNextSync();
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("focus", handleVisibility);
    return () => {
      if (timerId) window.clearTimeout(timerId);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("focus", handleVisibility);
    };
  }, []);
  return todayKey;
}
export {
  getTodayKey as g,
  useTodayKey as u
};
