import { u as useShallow, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { a as useAppStore, u as useLearningStore } from "./feature-3d-jK3b4Iv-.js";
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-Dp6hMoyV.js";
import "./vendor-supabase-DTEAj5J1.js";
function ProfilePage() {
  const user = useAppStore((s) => s.user);
  const { xp, level, streak } = useLearningStore(
    useShallow((s) => ({
      xp: s.xp || 0,
      level: s.level || 1,
      streak: s.streak || 0
    }))
  );
  const xpInLevel = xp % 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { padding: "20px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "n4-btn n4-btn-ghost n4-btn-icon", children: "←" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontSize: "1.5rem", margin: 0 }, children: "👤 Hồ sơ" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { borderRadius: "16px", padding: "24px", marginBottom: "20px", border: "1px solid var(--n4-border, rgba(255,255,255,0.1))", background: "var(--n4-card-bg, rgba(255,255,255,0.05))" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "3rem", position: "relative" }, children: "👤" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.3rem", fontWeight: 700 }, children: (user == null ? void 0 : user.name) || (user == null ? void 0 : user.email) || "Người học" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.8rem", color: "var(--n4-text-2, #888)", marginTop: "4px" }, children: [
            "Lv.",
            level
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "var(--n4-bg-2, rgba(0,0,0,0.2))", borderRadius: "8px", height: "8px", overflow: "hidden", marginBottom: "12px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: `${xpInLevel}%`, height: "100%", background: "var(--n4-accent, #0af)", borderRadius: "8px", transition: "width 0.3s" } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "16px", fontSize: "0.85rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "⭐ XP: ",
          xp
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "🔥 Streak: ",
          streak
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: "10px", flexWrap: "wrap" } })
  ] });
}
export {
  ProfilePage as default
};
