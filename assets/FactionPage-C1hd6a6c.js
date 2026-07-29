import { j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, bg as AJL_FACTIONS } from "./feature-3d-CFvJkEt3.js";
import { A as ArrowLeft, k as CircleCheck } from "./vendor-icons-DHCyxOF-.js";
import { m as motion } from "./vendor-motion-CoQCRLnb.js";
import { b as useNavigate } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
function FactionPage() {
  const navigate = useNavigate();
  const faction = useLearningStore((s) => s.faction);
  const chooseFaction = useLearningStore((s) => s.chooseFaction);
  const handleChoose = (factionId) => {
    if (faction) return;
    if (chooseFaction(factionId)) ;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { padding: "1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn", onClick: () => navigate(-1), style: { display: "flex", alignItems: "center", gap: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 }),
        " Quay lại"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontSize: "1.5rem", fontWeight: 700 }, children: "⚔️ Chọn Phe Phái" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-dim)", fontSize: "0.85rem" }, children: faction ? "Bạn đã chọn phe. Không thể thay đổi!" : "Chọn một lần duy nhất — hãy cân nhắc kỹ!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 80 } }),
      " "
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }, children: AJL_FACTIONS.map((f, idx) => {
      var _a, _b, _c;
      const isChosen = faction === f.id;
      const locked = faction && !isChosen;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: idx * 0.1 },
          className: "n4-card",
          style: {
            padding: "2rem",
            textAlign: "center",
            position: "relative",
            opacity: locked ? 0.35 : 1,
            border: isChosen ? `3px solid ${f.color}` : void 0,
            boxShadow: isChosen ? `0 0 24px ${f.color}33` : void 0
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "3rem", marginBottom: 12 }, children: f.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontWeight: 700, fontSize: "1.2rem", marginBottom: 4 }, children: f.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-dim)", fontSize: "0.85rem", marginBottom: 16 }, children: f.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: f.color, fontSize: "0.8rem", fontWeight: 600, marginBottom: 16 }, children: [
              "+",
              (_a = f.bonus) == null ? void 0 : _a.value,
              "% ",
              ((_b = f.bonus) == null ? void 0 : _b.type) === "xp" ? "Điểm" : ((_c = f.bonus) == null ? void 0 : _c.type) === "coin" ? "Xu" : "Tỉ lệ Gacha"
            ] }),
            isChosen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "#22c55e", fontWeight: 700 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 18 }),
              " Phe của bạn"
            ] }) : !faction ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-primary", onClick: () => handleChoose(f.id), style: { width: "100%" }, children: [
              "Chọn ",
              f.name
            ] }) : null
          ]
        },
        f.id
      );
    }) }),
    !faction && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginTop: 24, padding: 16, background: "rgba(234,179,8,0.1)", borderRadius: 12, border: "1px solid rgba(234,179,8,0.2)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#eab308", fontWeight: 600, fontSize: "0.9rem" }, children: "⚠️ Lưu ý: Đây là lựa chọn vĩnh viễn. Mỗi phe có bonus khác nhau!" }) })
  ] });
}
export {
  FactionPage as default
};
