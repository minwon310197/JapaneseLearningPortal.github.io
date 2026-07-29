import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, bf as AJL_BOUNTIES } from "./feature-3d-CFvJkEt3.js";
import { j as Swords, k as CircleCheck } from "./vendor-icons-DHCyxOF-.js";
import { m as motion } from "./vendor-motion-CoQCRLnb.js";
import { b as useNavigate } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
function BountyBoardPage() {
  useNavigate();
  const bounties = useLearningStore((s) => s.bounties);
  const lastBountyReset = useLearningStore((s) => s.lastBountyReset);
  const claimBountyReward = useLearningStore((s) => s.claimBountyReward);
  reactExports.useEffect(() => {
    const todayKey = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
    const lastKey = lastBountyReset ? new Date(lastBountyReset).toLocaleDateString("en-CA") : null;
    if (lastKey !== todayKey) {
      const fresh = AJL_BOUNTIES.map((b) => ({
        id: b.id,
        title: b.title,
        target: b.target,
        reward: b.reward,
        icon: b.icon,
        progress: 0,
        completed: false,
        claimed: false
      }));
      useLearningStore.setState({ bounties: fresh, lastBountyReset: (/* @__PURE__ */ new Date()).toISOString() });
    }
  }, [lastBountyReset]);
  const displayBounties = (bounties == null ? void 0 : bounties.length) ? bounties : AJL_BOUNTIES.map((b) => ({ ...b, progress: 0, completed: false }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { padding: "1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 56, height: 56, background: "rgba(127,29,29,0.3)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(127,29,29,0.5)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Swords, { size: 28, color: "#ef4444" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontSize: "1.5rem", fontWeight: 700, color: "#ef4444" }, children: "📋 Bảng Nhiệm Vụ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-dim)", fontSize: "0.85rem" }, children: "Hoàn thành nhiệm vụ hằng ngày để nhận thưởng." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }, children: displayBounties.map((bounty, idx) => {
      const isComplete = bounty.progress >= bounty.target;
      const isClaimed = bounty.claimed;
      const pct = Math.min(100, bounty.progress / bounty.target * 100);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: idx * 0.1 },
          className: "n4-card",
          style: {
            padding: "1.5rem",
            position: "relative",
            overflow: "hidden",
            opacity: isClaimed ? 0.5 : 1,
            border: isComplete && !isClaimed ? "2px solid #ef4444" : void 0,
            boxShadow: isComplete && !isClaimed ? "0 0 20px rgba(239,68,68,0.15)" : void 0
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "2rem" }, children: bounty.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 4, fontWeight: 700, color: "#eab308", background: "rgba(234,179,8,0.1)", padding: "2px 10px", borderRadius: 12, fontSize: "0.85rem" }, children: [
                "🪙 ",
                bounty.reward
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontWeight: 700, fontSize: "1rem", marginBottom: 8 }, children: bounty.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 16 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--n4-text-dim)", marginBottom: 4 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tiến độ" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  bounty.progress,
                  " / ",
                  bounty.target
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 8, background: "var(--n4-surface)", borderRadius: 4, overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  animate: { width: `${pct}%` },
                  style: { height: "100%", background: isComplete ? "#ef4444" : "var(--n4-text-dim)", borderRadius: 4 }
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => claimBountyReward(bounty.id),
                disabled: !isComplete || isClaimed,
                className: isComplete && !isClaimed ? "n4-btn n4-btn-primary" : "n4-btn",
                style: { width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 },
                children: isClaimed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16 }),
                  " Đã nhận"
                ] }) : isComplete ? "Nhận thưởng" : "Đang thực hiện"
              }
            )
          ]
        },
        bounty.id
      );
    }) })
  ] });
}
export {
  BountyBoardPage as default
};
