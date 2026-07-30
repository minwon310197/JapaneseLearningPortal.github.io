import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, bd as AJL_SKILLS, be as canUnlockSkill } from "./feature-3d-jK3b4Iv-.js";
import { A as ArrowLeft, i as Star, L as LockOpen, X } from "./vendor-icons-DHCyxOF-.js";
import { m as motion, A as AnimatePresence } from "./vendor-motion-CoQCRLnb.js";
import { b as useNavigate } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-Dp6hMoyV.js";
import "./vendor-supabase-DTEAj5J1.js";
function SkillTreePage() {
  const navigate = useNavigate();
  const skillPoints = useLearningStore((s) => s.skillPoints);
  const unlockedSkills = useLearningStore((s) => s.unlockedSkills);
  const unlockSkill = useLearningStore((s) => s.unlockSkill);
  const [selected, setSelected] = reactExports.useState(null);
  const handleUnlock = (skill) => {
    if (unlockSkill(skill.id)) {
      setSelected(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { padding: "1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn", onClick: () => navigate(-1), style: { display: "flex", alignItems: "center", gap: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 }),
        " Quay lại"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontSize: "1.5rem", fontWeight: 700 }, children: "🌳 Cây Kỹ Năng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-dim)", fontSize: "0.85rem" }, children: "Mở khóa khả năng bị động mạnh mẽ." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 6, background: "rgba(59,130,246,0.1)", color: "#3b82f6", padding: "6px 14px", borderRadius: 12, fontWeight: 700, fontSize: "0.9rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 16 }),
        " ",
        skillPoints,
        " SP"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "2rem", minHeight: 400, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { style: { position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.15 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "30%", y1: "20%", x2: "50%", y2: "50%", stroke: "currentColor", strokeWidth: "3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "70%", y1: "20%", x2: "50%", y2: "50%", stroke: "currentColor", strokeWidth: "3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50%", y1: "50%", x2: "30%", y2: "80%", stroke: "currentColor", strokeWidth: "3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50%", y1: "50%", x2: "70%", y2: "80%", stroke: "currentColor", strokeWidth: "3" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative", zIndex: 2 }, children: AJL_SKILLS.map((skill) => {
        const isUnlocked = unlockedSkills.includes(skill.id);
        const hasReqs = canUnlockSkill(skill.id, unlockedSkills);
        skillPoints >= skill.cost;
        const isSelectable = hasReqs && !isUnlocked;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            whileHover: isSelectable ? { scale: 1.1 } : {},
            onClick: () => setSelected(skill),
            style: {
              width: 80,
              height: 80,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              cursor: "pointer",
              transition: "all 0.2s",
              border: "3px solid",
              background: isUnlocked ? "#eab308" : isSelectable ? "var(--n4-surface)" : "var(--n4-bg)",
              borderColor: isUnlocked ? "#fbbf24" : isSelectable ? "var(--n4-border)" : "var(--n4-border)",
              opacity: isUnlocked || isSelectable ? 1 : 0.4,
              boxShadow: isUnlocked ? "0 0 20px rgba(234,179,8,0.4)" : "none"
            },
            children: skill.icon
          },
          skill.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
        style: {
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          background: "var(--n4-card-bg, #1c1c1c)",
          padding: "1.5rem",
          borderRadius: 20,
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          border: "2px solid var(--n4-border)",
          width: "90%",
          maxWidth: 420,
          zIndex: 100
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 16, alignItems: "flex-start" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "3rem", flexShrink: 0 }, children: selected.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }, children: selected.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-dim)", fontSize: "0.85rem", marginBottom: 12 }, children: selected.description }),
            selected.effect && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "#a855f7", fontSize: "0.8rem", marginBottom: 8 }, children: [
              "Hiệu ứng: +",
              selected.effect.value,
              "% ",
              selected.effect.type === "xp" ? "XP" : selected.effect.type === "coin" ? "Xu" : selected.effect.type
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 4, color: "#3b82f6", fontWeight: 700 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14 }),
                " ",
                selected.cost,
                " SP"
              ] }),
              unlockedSkills.includes(selected.id) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#22c55e", fontWeight: 700, display: "flex", alignItems: "center", gap: 4, fontSize: "0.85rem" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LockOpen, { size: 14 }),
                " Đã mở khóa"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "n4-btn n4-btn-primary",
                  onClick: () => handleUnlock(selected),
                  disabled: !canUnlockSkill(selected.id, unlockedSkills) || skillPoints < selected.cost,
                  style: { padding: "6px 16px", fontSize: "0.85rem" },
                  children: canUnlockSkill(selected.id, unlockedSkills) ? skillPoints >= selected.cost ? "Mở khóa" : "Thiếu SP" : "Cần yêu cầu trước"
                }
              )
            ] }),
            selected.req.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "#888", fontSize: "0.75rem", marginTop: 6 }, children: [
              "Yêu cầu: ",
              selected.req.map((r) => {
                var _a;
                return ((_a = AJL_SKILLS.find((s) => s.id === r)) == null ? void 0 : _a.name) || r;
              }).join(", ")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelected(null), style: { color: "var(--n4-text-dim)", cursor: "pointer", background: "none", border: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) })
        ] })
      }
    ) })
  ] });
}
export {
  SkillTreePage as default
};
