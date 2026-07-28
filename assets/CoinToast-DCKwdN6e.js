import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { d as useLearningStore, D as useManagedTimeout, a2 as formatEconomySourceLabel } from "./feature-3d-ClP3ARU5.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
const SOURCE_LABELS = {
  "correct-answer": "📝 Trả lời đúng",
  "game-completion": "🎮 Hoàn thành game",
  "first-game-of-day": "🌅 Game đầu ngày",
  "daily-claim": "📅 Điểm danh",
  "achievement": "🏆 Thành tích",
  "level-up": "⭐ Lên cấp",
  "wheel-win": "🎡 Vòng quay",
  "slot-win": "🎰 Slot",
  "bet-win": "🎲 Cá cược",
  "daily-quest": "📋 Nhiệm vụ",
  "weekly-quest": "📅 Nhiệm vụ tuần",
  "milestone": "🏅 Cột mốc",
  "collection-claim": "🏆 Bộ sưu tập",
  "shop": "🛍️ Mua sắm",
  "gacha": "⛩️ Gacha",
  "gacha-reward": "⛩️ Thưởng gacha",
  "pet-adoption": "🐾 Nhận thú cưng",
  "pet-feed": "🐾 Cho thú ăn",
  "room-buy": "🏠 Trang trí phòng"
};
let _toastSeq = 0;
function CoinToast() {
  const [toasts, setToasts] = reactExports.useState([]);
  const seenIds = reactExports.useRef(/* @__PURE__ */ new Set());
  const economyLog = useLearningStore((s) => s.economyLog);
  const { scheduleTimeout } = useManagedTimeout();
  const push = reactExports.useCallback((entry) => {
    const id = ++_toastSeq;
    setToasts((prev) => [...prev.slice(-4), { id, entry }]);
    scheduleTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 2100);
  }, [scheduleTimeout]);
  reactExports.useEffect(() => {
    if (!Array.isArray(economyLog) || economyLog.length === 0) return;
    const last = economyLog[economyLog.length - 1];
    if (!(last == null ? void 0 : last.id) || seenIds.current.has(last.id)) return;
    seenIds.current.add(last.id);
    if (seenIds.current.size > 50) {
      const arr = [...seenIds.current];
      seenIds.current = new Set(arr.slice(-30));
    }
    if (last.type === "earn" || last.type === "spend") {
      push(last);
    }
  }, [economyLog, push]);
  if (toasts.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-global-coin-toast-container", "aria-live": "polite", children: toasts.map(({ id, entry }) => {
    const isEarn = entry.type === "earn";
    const label = formatEconomySourceLabel(entry.source, SOURCE_LABELS);
    const sign = isEarn ? "+" : "−";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `n4-global-coin-toast ${isEarn ? "n4-global-coin-toast-earn" : "n4-global-coin-toast-spend"}`,
        role: "status",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1rem" }, children: "🪙" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 800 }, children: [
            sign,
            (entry.amount || 0).toLocaleString("vi-VN")
          ] }),
          label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { opacity: 0.75, fontSize: "0.78rem", fontWeight: 500 }, children: label })
        ]
      },
      id
    );
  }) });
}
export {
  CoinToast as default
};
