import { j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { d as useLearningStore, bN as AJL_BUILDINGS, bO as VillageScene } from "./feature-3d-ClP3ARU5.js";
import { A as ArrowLeft, l as Clock } from "./vendor-icons-DHCyxOF-.js";
import { m as motion } from "./vendor-motion-CoQCRLnb.js";
import { b as useNavigate } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
function VillagePage() {
  const navigate = useNavigate();
  const coins = useLearningStore((s) => s.coins);
  const villageBuildings = useLearningStore((s) => s.villageBuildings);
  const lastVillageCollect = useLearningStore((s) => s.lastVillageCollect);
  const buildVillage = useLearningStore((s) => s.buildVillage);
  const collectVillageIncome = useLearningStore((s) => s.collectVillageIncome);
  const lastCollect = lastVillageCollect ? new Date(lastVillageCollect).getTime() : Date.now();
  const hoursElapsed = Math.min(24, (Date.now() - lastCollect) / (1e3 * 60 * 60));
  const hourlyIncome = villageBuildings.reduce((sum, bId) => {
    const b = AJL_BUILDINGS.find((x) => x.id === bId);
    return sum + (b ? b.incomePerHour : 0);
  }, 0);
  const pendingIncome = Math.floor(hourlyIncome * hoursElapsed);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { padding: "1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn", onClick: () => navigate(-1), style: { display: "flex", alignItems: "center", gap: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 }),
        " Quay lại"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontSize: "1.5rem", fontWeight: 700 }, children: "🏘️ Làng của bạn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(VillageScene, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-dim)", fontSize: "0.85rem" }, children: "Xây dựng để nhận thu nhập thụ động." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 700, color: "#eab308" }, children: [
        "🪙 ",
        coins
      ] })
    ] }),
    villageBuildings.length > 0 && pendingIncome > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        className: "n4-card",
        style: { padding: "1rem 1.5rem", marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center", border: "2px solid rgba(234,179,8,0.3)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 6, fontWeight: 700, marginBottom: 4 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16, color: "#eab308" }),
              " Thu nhập chờ thu"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "var(--n4-text-dim)", fontSize: "0.85rem" }, children: [
              hourlyIncome,
              " 🪙/giờ · ",
              hoursElapsed.toFixed(1),
              "h đã qua"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-primary", onClick: collectVillageIncome, children: [
            "Thu ",
            pendingIncome,
            " 🪙"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }, children: AJL_BUILDINGS.map((b, idx) => {
      const owned = villageBuildings.includes(b.id);
      const canAfford = coins >= b.price;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: idx * 0.08 },
          className: "n4-card",
          style: {
            padding: "1.5rem",
            textAlign: "center",
            border: owned ? "2px solid #22c55e" : void 0,
            boxShadow: owned ? "0 0 16px rgba(34,197,94,0.15)" : void 0
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2.5rem", marginBottom: 8 }, children: b.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontWeight: 700, marginBottom: 4 }, children: b.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-dim)", fontSize: "0.8rem", marginBottom: 8 }, children: b.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "#eab308", fontWeight: 600, fontSize: "0.85rem", marginBottom: 12 }, children: [
              "+",
              b.incomePerHour,
              " 🪙/giờ"
            ] }),
            owned ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#22c55e", fontWeight: 700, fontSize: "0.85rem" }, children: "✅ Đã xây" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: "n4-btn n4-btn-primary",
                onClick: () => buildVillage(b.id),
                disabled: !canAfford,
                style: { width: "100%" },
                children: [
                  "Xây (",
                  b.price,
                  " 🪙)"
                ]
              }
            )
          ]
        },
        b.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card", style: { padding: "1rem", marginTop: 20, textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "var(--n4-text-dim)", fontSize: "0.85rem" }, children: [
      "Tổng thu nhập: ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 700, color: "#eab308" }, children: [
        hourlyIncome,
        " 🪙/giờ"
      ] }),
      " · Công trình: ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 700 }, children: [
        villageBuildings.length,
        "/",
        AJL_BUILDINGS.length
      ] })
    ] }) })
  ] });
}
export {
  VillagePage as default
};
