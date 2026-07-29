import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { f as SenseiScene } from "./feature-3d-scenery-C3eSpuWG.js";
import { u as useLearningStore, bl as AJL_ITEMS } from "./feature-3d-CFvJkEt3.js";
import { r as Heart, p as Coins, s as MessageCircle, q as Gift, i as Star } from "./vendor-icons-DHCyxOF-.js";
import { m as motion, A as AnimatePresence } from "./vendor-motion-CoQCRLnb.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
const SENSEI_LINES = [
  "Chào mừng trở lại. Hôm nay mình học tiếp nhé?",
  "Nhịp học của bạn đang rất tốt. Cứ giữ đều như vậy.",
  "Bạn đã ôn lại các điểm yếu của mình chưa?",
  "Tiến bộ nhỏ mỗi ngày vẫn tốt hơn học hứng lên rồi bỏ dở.",
  "Bạn đang tiến bộ nhanh hơn mình nghĩ đấy."
];
function getAffinityRank(affinity) {
  if (affinity >= 1e3) return { label: "Môn đệ huyền thoại", color: "var(--n4-neon-gold, #f59e0b)" };
  if (affinity >= 500) return { label: "Đệ tử thân tín", color: "var(--n4-neon-purple, #a855f7)" };
  if (affinity >= 200) return { label: "Học trò tin cậy", color: "var(--n4-neon-cyan, #06b6d4)" };
  if (affinity >= 80) return { label: "Khách quen", color: "var(--n4-neon-green, #10b981)" };
  return { label: "Học trò mới", color: "var(--n4-text-dim)" };
}
function SenseiRoomPage() {
  const coins = useLearningStore((s) => s.coins || 0);
  const affinity = useLearningStore((s) => s.senseiAffinity || 0);
  const spendCoins = useLearningStore((s) => s.spendCoins);
  const addSenseiAffinity = useLearningStore((s) => s.addSenseiAffinity);
  const gifts = reactExports.useMemo(
    () => AJL_ITEMS.filter((item) => Number(item.affinity) > 0).sort((a, b) => a.price - b.price),
    []
  );
  const [line, setLine] = reactExports.useState(SENSEI_LINES[0]);
  const [giftOpen, setGiftOpen] = reactExports.useState(false);
  const [lastGiftId, setLastGiftId] = reactExports.useState(null);
  const rank = getAffinityRank(affinity);
  const handleTalk = reactExports.useCallback(() => {
    const next = SENSEI_LINES[Math.floor(Math.random() * SENSEI_LINES.length)];
    setLine(next);
  }, []);
  const handleGiveGift = reactExports.useCallback((gift) => {
    if (!gift || coins < gift.price) return;
    const ok = spendCoins(gift.price, "sensei-gift");
    if (!ok) return;
    addSenseiAffinity(gift.affinity || 0);
    setLine("Cảm ơn món quà này. Cứ giữ nhịp học này nhé.");
    setLastGiftId(gift.id);
    setGiftOpen(false);
  }, [addSenseiAffinity, coins, spendCoins]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { padding: "1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card", style: { padding: "1rem", marginBottom: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: { margin: 0, display: "inline-flex", alignItems: "center", gap: 8, fontSize: "1.45rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 22 }),
        " Phòng hướng dẫn"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SenseiScene, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "inline-flex", gap: 8, alignItems: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-chip", children: [
          "💗 Độ thân thiết: ",
          affinity
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-chip", style: { color: rank.color }, children: rank.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-chip", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { size: 14 }),
          " ",
          coins.toLocaleString("vi-VN")
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "1.2rem", marginBottom: 12, textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: { y: [-4, 4, -4] },
          transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
          style: { fontSize: "4.2rem", marginBottom: 12 },
          children: "👩‍🏫"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        margin: "0 auto 12px",
        padding: "0.9rem 1rem",
        borderRadius: 12,
        maxWidth: 620,
        border: "1px solid var(--n4-border)",
        background: "color-mix(in srgb, var(--n4-surface) 78%, var(--n4-accent) 22%)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: 0, fontWeight: 600 }, children: line }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn", onClick: handleTalk, style: { minHeight: 44, minWidth: 150 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 16, style: { marginRight: 6 } }),
          " Trò chuyện"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-primary", onClick: () => setGiftOpen((v) => !v), style: { minHeight: 44, minWidth: 150 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { size: 16, style: { marginRight: 6 } }),
          " Tặng quà"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: giftOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        className: "n4-card",
        style: { padding: "1rem" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 10 }, children: gifts.map((gift) => {
          const canBuy = coins >= gift.price;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-panel", style: { padding: "0.9rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.8rem", marginBottom: 6 }, children: gift.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 700 }, children: gift.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-dim)", fontSize: ".85rem", minHeight: 38, marginTop: 4 }, children: gift.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 8, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: ".85rem", color: "var(--n4-accent)" }, children: [
                "+",
                gift.affinity,
                " thân thiết"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `n4-btn ${canBuy ? "n4-btn-primary" : ""}`,
                  disabled: !canBuy,
                  onClick: () => handleGiveGift(gift),
                  style: { minHeight: 38 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { size: 14, style: { marginRight: 4 } }),
                    gift.price
                  ]
                }
              )
            ] }),
            lastGiftId === gift.id && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 8, fontSize: ".82rem", color: "var(--n4-success)" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 13, style: { marginRight: 4 } }),
              "Đã tặng quà"
            ] })
          ] }, gift.id);
        }) })
      }
    ) })
  ] });
}
export {
  SenseiRoomPage as default
};
