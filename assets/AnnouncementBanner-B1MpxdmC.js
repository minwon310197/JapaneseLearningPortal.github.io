import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { a as useAppStore } from "./feature-3d-jK3b4Iv-.js";
import { g as getUnreadAnnouncements, m as markAsRead } from "./index-CjITGIof.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-Dp6hMoyV.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-router-BTJacUKt.js";
import "./vendor-icons-DHCyxOF-.js";
const TYPE_STYLES = {
  info: { bg: "#dbeafe", color: "#1e40af", icon: "ℹ️" },
  update: { bg: "#dcfce7", color: "#166534", icon: "🆕" },
  warning: { bg: "#fef3c7", color: "#92400e", icon: "⚠️" },
  event: { bg: "#fce7f3", color: "#9d174d", icon: "🎉" }
};
function AnnouncementBanner() {
  const user = useAppStore((s) => s.user);
  const [items, setItems] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (!(user == null ? void 0 : user.id)) return;
    getUnreadAnnouncements(user.id).then((d) => setItems(d || [])).catch(() => {
    });
  }, [user == null ? void 0 : user.id]);
  const dismiss = async (ann) => {
    await markAsRead(user.id, ann.id).catch(() => {
    });
    setItems((prev) => prev.filter((a) => a.id !== ann.id));
  };
  if (!items.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }, children: items.map((ann) => {
    const st = TYPE_STYLES[ann.type] || TYPE_STYLES.info;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "8px 14px", borderRadius: 8, background: st.bg, color: st.color }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: st.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ann.title }),
        ann.content && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginLeft: 8, fontSize: "0.9em", opacity: 0.85 }, children: ann.content })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => dismiss(ann), style: { background: "none", border: "none", cursor: "pointer", fontSize: "1.1em", color: st.color, opacity: 0.6 }, children: "✕" })
    ] }, ann.id);
  }) });
}
export {
  AnnouncementBanner as default
};
