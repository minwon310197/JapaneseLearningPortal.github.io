import { r as reactExports, j as jsxRuntimeExports, b as reactDomExports, u as useShallow } from "./vendor-react-BYxMSDiB.js";
import { C as getAllProfiles, D as getDailyActiveUsers, E as setConfig, c as getUserErrorMessage, v as logActivity, F as setUserRole, G as setUserAccess, H as createAnnouncement, I as sendMessage, J as getAnnouncements, K as updateAnnouncement, L as deleteAnnouncement, M as getConversations, O as getMessages, P as adminDeleteConversation, Q as getRecentActivity, R as getAllQuizHistory, S as getQuizAnalytics, T as getActivityHeatmap, U as purgeActivityLog, V as getUserActivity, W as getAllConfig, X as deleteConfig, Y as useIsAdmin } from "./index-ZUSnnghe.js";
import { a3 as useDialogFocus, s as supabase, u as useAppStore, J as useDataStore } from "./feature-3d-ClP3ARU5.js";
import { g as getAllChallenges, c as createChallenge, d as deleteChallenge, a as getChallengeLeaderboard } from "./challenges-MrAHEXdp.js";
import { h as Shield } from "./vendor-icons-DHCyxOF-.js";
import "./vendor-router-BTJacUKt.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
const BREAKPOINTS = {
  phone: 640,
  tablet: 960
};
function computeBreakpoint(width) {
  if (width <= BREAKPOINTS.phone) return "phone";
  if (width <= BREAKPOINTS.tablet) return "tablet";
  return "desktop";
}
function useBreakpoint() {
  const [bp, setBp] = reactExports.useState(
    () => typeof window === "undefined" ? "desktop" : computeBreakpoint(window.innerWidth)
  );
  reactExports.useEffect(() => {
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setBp(computeBreakpoint(window.innerWidth)));
    };
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);
  return {
    bp,
    isPhone: bp === "phone",
    isTablet: bp === "tablet",
    isDesktop: bp === "desktop",
    isMobile: bp === "phone" || bp === "tablet"
  };
}
const TABS = [
  { group: "Tổng quan", id: "overview", icon: "📊", label: "Tổng quan" },
  { group: "Quản lý", id: "users", icon: "👥", label: "Người dùng" },
  { group: "Quản lý", id: "issues", icon: "🐛", label: "Vấn đề" },
  { group: "Quản lý", id: "announce", icon: "📢", label: "Thông báo" },
  { group: "Quản lý", id: "challenges", icon: "🏆", label: "Thử thách" },
  { group: "Quản lý", id: "messages", icon: "💬", label: "Tin nhắn" },
  { group: "Phân tích", id: "activity", icon: "📋", label: "Hoạt động" },
  { group: "Phân tích", id: "economy", icon: "💰", label: "Chợ" },
  { group: "Hệ thống", id: "content", icon: "📚", label: "Nội dung" },
  { group: "Hệ thống", id: "config", icon: "⚙️", label: "Cấu hình" },
  { group: "Hệ thống", id: "system", icon: "🖥️", label: "Hệ thống" }
];
function AdminSidebar({ activeTab, onTabChange, collapsed, onToggleCollapse }) {
  const groups = TABS.reduce((acc, tab) => {
    const currentGroup = acc.find((item) => item.label === tab.group);
    if (currentGroup) currentGroup.items.push(tab);
    else acc.push({ label: tab.group, items: [tab] });
    return acc;
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: `n4-admin-sidebar ${collapsed ? "collapsed" : ""}`, "aria-label": "Điều hướng quản trị", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-sidebar-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-admin-sidebar-toggle",
          onClick: onToggleCollapse,
          title: collapsed ? "Mở rộng" : "Thu gọn",
          "aria-label": collapsed ? "Mở rộng menu" : "Thu gọn menu",
          "aria-expanded": !collapsed,
          children: collapsed ? "☰" : "✕"
        }
      ),
      !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-sidebar-title", children: "Quản trị" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "n4-admin-sidebar-nav", children: groups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-sidebar-group", children: [
      !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-sidebar-group-label", children: group.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-sidebar-group-list", children: group.items.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `n4-admin-sidebar-item ${activeTab === tab.id ? "active" : ""}`,
          onClick: () => onTabChange(tab.id),
          title: tab.label,
          "aria-current": activeTab === tab.id ? "page" : void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-sidebar-icon", "aria-hidden": "true", children: tab.icon }),
            !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-sidebar-label", children: tab.label })
          ]
        },
        tab.id
      )) })
    ] }, group.label)) })
  ] });
}
function AdminMobileNav({ activeTab, onTabChange }) {
  const [drawerOpen, setDrawerOpen] = reactExports.useState(false);
  const drawerRef = useDialogFocus(drawerOpen, () => setDrawerOpen(false));
  reactExports.useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);
  const activeTabDef = TABS.find((t) => t.id === activeTab);
  const groups = TABS.reduce((acc, tab) => {
    const existing = acc.find((g) => g.label === tab.group);
    if (existing) existing.items.push(tab);
    else acc.push({ label: tab.group, items: [tab] });
    return acc;
  }, []);
  const selectTab = (id) => {
    onTabChange(id);
    setDrawerOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-mobilenav", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "n4-admin-mobilenav-menu",
          onClick: () => setDrawerOpen(true),
          "aria-label": "Mở menu quản trị",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "☰" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-admin-mobilenav-active", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: activeTabDef == null ? void 0 : activeTabDef.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: activeTabDef == null ? void 0 : activeTabDef.label })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-mobilenav-chips", role: "tablist", children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          role: "tab",
          "aria-selected": activeTab === tab.id,
          className: `n4-admin-mobilenav-chip ${activeTab === tab.id ? "active" : ""}`,
          onClick: () => onTabChange(tab.id),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.label })
          ]
        },
        tab.id
      )) })
    ] }),
    drawerOpen && typeof document !== "undefined" && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "n4-admin-mobilenav-backdrop",
          onPointerDown: (event) => {
            if (event.target === event.currentTarget) setDrawerOpen(false);
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: drawerRef,
              className: "n4-admin-mobilenav-drawer",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": "Điều hướng quản trị",
              tabIndex: -1,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-mobilenav-drawer-head", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bảng quản trị" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      className: "n4-btn n4-btn-sm n4-btn-ghost",
                      onClick: () => setDrawerOpen(false),
                      "aria-label": "Đóng",
                      children: "✕"
                    }
                  )
                ] }),
                groups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-mobilenav-group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-mobilenav-group-label", children: group.label }),
                  group.items.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      className: `n4-admin-mobilenav-item ${activeTab === tab.id ? "active" : ""}`,
                      onClick: () => selectTab(tab.id),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-mobilenav-icon", children: tab.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.label })
                      ]
                    },
                    tab.id
                  ))
                ] }, group.label))
              ]
            }
          )
        }
      ),
      document.body
    )
  ] });
}
function StatCard({ icon, label, value, color, trend, onClick }) {
  const Component = onClick ? "button" : "div";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Component,
    {
      type: onClick ? "button" : void 0,
      className: `n4-admin-stat ${onClick ? "clickable" : ""}`,
      onClick,
      style: color ? { "--stat-color": color } : void 0,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-stat-icon", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-stat-value", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-stat-label", children: label }),
        trend != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-admin-stat-trend ${trend >= 0 ? "up" : "down"}`, children: [
          trend >= 0 ? "▲" : "▼",
          " ",
          Math.abs(trend),
          "%"
        ] })
      ]
    }
  );
}
function MiniSparkline({ data = [], width = 80, height = 24, color = "var(--n4-accent)" }) {
  if (data.length < 2) return null;
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min || 1;
  const points = data.map((v, i) => {
    const x = i / (data.length - 1) * width;
    const y = height - (v - min) / range * (height - 4) - 2;
    return `${x},${y}`;
  }).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width, height, style: { display: "inline-block", verticalAlign: "middle" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points, fill: "none", stroke: color, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function OverviewPanel({ onNavigate }) {
  const [stats, setStats] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [dau, setDau] = reactExports.useState([]);
  const [topUsers, setTopUsers] = reactExports.useState([]);
  const [recentBugs, setRecentBugs] = reactExports.useState([]);
  const [recentUsers, setRecentUsers] = reactExports.useState([]);
  const [bugStatusCounts, setBugStatusCounts] = reactExports.useState({});
  const [spotlight, setSpotlight] = reactExports.useState(null);
  const [allProfiles, setAllProfiles] = reactExports.useState([]);
  const load = reactExports.useCallback(async () => {
    setLoading(true);
    try {
      const [profiles, dauData, bugsRes, challengesRes, recentUsersRes, bugsByStatusRes, contentErrorsRes] = await Promise.all([
        getAllProfiles(),
        getDailyActiveUsers("7d").catch(() => []),
        supabase.from("bug_reports").select("id,description,status,created_at", { count: "exact" }).eq("status", "open").order("created_at", { ascending: false }).limit(5),
        supabase.from("quiz_challenges").select("id", { count: "exact" }).gte("ends_at", (/* @__PURE__ */ new Date()).toISOString()),
        supabase.from("user_profiles").select("id,display_name,avatar_url,joined_at,created_at").order("joined_at", { ascending: false }).limit(5),
        supabase.from("bug_reports").select("status"),
        supabase.from("content_errors").select("id", { count: "exact", head: true })
      ]);
      const now = Date.now();
      const threeDays = 3 * 24 * 60 * 60 * 1e3;
      const sevenDays = 7 * 24 * 60 * 60 * 1e3;
      const thirtyDays = 30 * 24 * 60 * 60 * 1e3;
      const activeUsers = profiles.filter((u) => u.last_active_at && now - new Date(u.last_active_at).getTime() < threeDays);
      const newUsers = profiles.filter((u) => u.created_at && now - new Date(u.created_at).getTime() < sevenDays);
      const dormantUsers = profiles.filter((u) => {
        if (!u.last_active_at) return true;
        const diff = now - new Date(u.last_active_at).getTime();
        return diff > sevenDays && diff < thirtyDays;
      });
      const totalQuizzes = profiles.reduce((s, u) => s + (u.total_quizzes || 0), 0);
      const totalXp = profiles.reduce((s, u) => s + (u.xp || 0), 0);
      setStats({
        totalUsers: profiles.length,
        activeUsers: activeUsers.length,
        newUsers: newUsers.length,
        dormantUsers: dormantUsers.length,
        totalQuizzes,
        totalXp,
        openBugs: bugsRes.count || 0,
        contentErrors: contentErrorsRes.count || 0,
        activeChallenges: challengesRes.count || 0
      });
      setDau(dauData || []);
      setTopUsers(
        [...profiles].sort((a, b) => (b.xp || 0) - (a.xp || 0)).slice(0, 5)
      );
      setAllProfiles(profiles);
      setRecentUsers(recentUsersRes.data || []);
      setBugStatusCounts((bugsByStatusRes.data || []).reduce((acc, item) => {
        const key = item.status || "pending";
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {}));
      try {
        const { data: spotCfg } = await supabase.from("app_config").select("value").eq("key", "spotlight_user").maybeSingle();
        if (spotCfg == null ? void 0 : spotCfg.value) setSpotlight(spotCfg.value);
      } catch (e) {
      }
      setRecentBugs(bugsRes.data || []);
    } catch (err) {
      console.warn("[OverviewPanel] Load error:", err);
    }
    setLoading(false);
  }, []);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-loading", children: "⏳ Đang tải tổng quan..." });
  if (!stats) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Không thể tải dữ liệu." });
  const maxDau = Math.max(...dau.map((d) => d.count || 0), 1);
  const dauValues = dau.map((d) => d.count || 0);
  const alerts = [];
  if (stats.openBugs > 3) alerts.push({ icon: "🐛", text: `${stats.openBugs} bugs mở — cần xem xét`, color: "var(--n4-danger)" });
  if (stats.contentErrors > 0) alerts.push({ icon: "⚠️", text: `${stats.contentErrors} lỗi nội dung đang chờ xử lý`, color: "var(--n4-warning)" });
  if (stats.activeUsers === 0) alerts.push({ icon: "⚠️", text: "Không có user active trong 3 ngày qua", color: "var(--n4-warning)" });
  if (stats.activeChallenges === 0) alerts.push({ icon: "🏆", text: "Chưa có challenge đang chạy", color: "var(--n4-warning)" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-panel", children: [
    alerts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }, children: alerts.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 8, background: "var(--n4-bg-secondary)", borderLeft: `4px solid ${a.color}`, fontSize: "0.85em" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.text })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stat-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "👥", label: "Tổng users", value: stats.totalUsers, trend: /* @__PURE__ */ jsxRuntimeExports.jsx(MiniSparkline, { data: dauValues, color: "var(--n4-text-muted)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "🟢", label: "Active (3 ngày)", value: stats.activeUsers, color: "var(--n4-neon-green)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "🆕", label: "Mới (7 ngày)", value: stats.newUsers, color: "var(--n4-accent)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "😴", label: "Dormant", value: stats.dormantUsers, color: "var(--n4-warning)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "📝", label: "Tổng quizzes", value: stats.totalQuizzes.toLocaleString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "⭐", label: "Tổng XP", value: stats.totalXp.toLocaleString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "🐛", label: "Bugs mở", value: stats.openBugs, color: stats.openBugs > 0 ? "var(--n4-danger)" : void 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "⚠️", label: "Content errors", value: stats.contentErrors, color: stats.contentErrors > 0 ? "var(--n4-warning)" : void 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "🏆", label: "Challenges active", value: stats.activeChallenges })
    ] }),
    onNavigate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", style: { marginTop: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 10px" }, children: "⚡ Thao tác nhanh" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: () => onNavigate("challenges"), children: "🏆 Tạo Challenge" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-accent", onClick: () => onNavigate("announce"), children: "📢 Gửi thông báo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => onNavigate("messages"), children: "💬 Tin nhắn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => onNavigate("issues"), children: "🐛 Xem bugs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => onNavigate("content"), children: "📤 Upload content" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", style: { marginTop: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "📊 DAU — 7 ngày qua" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", alignItems: "flex-end", gap: 4, height: 120 }, children: dau.length > 0 ? dau.map((d, i) => {
        const pct = Math.max(4, (d.count || 0) / maxDau * 100);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                width: "100%",
                height: `${pct}%`,
                background: "var(--n4-accent)",
                borderRadius: "4px 4px 0 0",
                minHeight: 4,
                transition: "height 0.3s"
              },
              title: `${d.date}: ${d.count} users`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.65em", color: "var(--n4-text-muted)" }, children: d.date ? d.date.slice(5) : "" })
        ] }, i);
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1, textAlign: "center", color: "var(--n4-text-muted)", padding: 20 }, children: "Chưa có dữ liệu DAU" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-grid-auto", style: { marginTop: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "🏅 Top Users (XP)" }),
        topUsers.map((u, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: "1px solid var(--n4-border)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 700, fontSize: "0.9em", minWidth: 20 }, children: [
            "#",
            i + 1
          ] }),
          u.avatar_url && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: u.avatar_url, alt: "", style: { width: 24, height: 24, borderRadius: "50%" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600, fontSize: "0.85em" }, children: u.display_name || "N/A" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.75em", color: "var(--n4-text-muted)" }, children: [
              "⭐ ",
              u.xp || 0,
              " XP · 🔥 ",
              u.streak || 0,
              " streak"
            ] })
          ] })
        ] }, u.id))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "🐛 Bugs mở gần nhất" }),
        recentBugs.length > 0 ? recentBugs.map((b) => {
          var _a, _b;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "6px 0", borderBottom: "1px solid var(--n4-border)", fontSize: "0.85em" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              ((_a = b.description) == null ? void 0 : _a.slice(0, 80)) || "No description",
              ((_b = b.description) == null ? void 0 : _b.length) > 80 ? "..." : ""
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.75em", color: "var(--n4-text-muted)" }, children: b.created_at ? new Date(b.created_at).toLocaleDateString("vi") : "" })
          ] }, b.id);
        }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-muted)", fontSize: "0.85em" }, children: "Không có bugs mở 🎉" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "🆕 Người dùng mới" }),
        recentUsers.length > 0 ? recentUsers.map((recentUser) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: "1px solid var(--n4-border)" }, children: [
          recentUser.avatar_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: recentUser.avatar_url, alt: "", style: { width: 24, height: 24, borderRadius: "50%" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.1em" }, children: "🆕" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600, fontSize: "0.85em" }, children: recentUser.display_name || "N/A" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.75em", color: "var(--n4-text-muted)" }, children: new Date(recentUser.joined_at || recentUser.created_at || Date.now()).toLocaleDateString("vi") })
          ] })
        ] }, recentUser.id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-muted)", fontSize: "0.85em" }, children: "Không có user mới." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", style: { marginTop: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "📌 Trạng thái bug" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
        Object.entries(bugStatusCounts).map(([status, count]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-tag", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600 }, children: status }),
          ": ",
          count
        ] }, status)),
        Object.keys(bugStatusCounts).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-text-muted)" }, children: "Không có dữ liệu" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", style: { marginTop: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "🌟 Spotlight — User of the Week" }),
      spotlight ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12, padding: 12, background: "linear-gradient(135deg, rgba(240,192,0,0.1), rgba(255,215,0,0.05))", borderRadius: 10, border: "1px solid rgba(240,192,0,0.3)" }, children: [
        (() => {
          const su = allProfiles.find((p) => p.id === spotlight.userId);
          return (su == null ? void 0 : su.avatar_url) ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: su.avatar_url, alt: "", style: { width: 48, height: 48, borderRadius: "50%" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "2em" }, children: "👑" });
        })(),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 700, fontSize: "1.1em" }, children: spotlight.name || "N/A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.82em", color: "var(--n4-text-muted)" }, children: [
            spotlight.reason || "Top performer",
            " · Tuần ",
            spotlight.week || "?"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: async () => {
          await supabase.from("app_config").delete().eq("key", "spotlight_user");
          setSpotlight(null);
        }, children: "✕ Xóa" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85em", color: "var(--n4-text-muted)", marginBottom: 8 }, children: "Chưa chọn spotlight." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-accent", onClick: async () => {
          if (topUsers.length === 0) return;
          const top = topUsers[0];
          const week = `${(/* @__PURE__ */ new Date()).getFullYear()}-W${Math.ceil(((/* @__PURE__ */ new Date()).getTime() - new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1).getTime()) / 6048e5)}`;
          const val = { userId: top.id, name: top.display_name, reason: `Top XP (${top.xp || 0})`, week, setAt: (/* @__PURE__ */ new Date()).toISOString() };
          await setConfig("spotlight_user", val);
          setSpotlight(val);
        }, children: "🤖 Auto-chọn (Top XP)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", style: { width: "auto", fontSize: "0.85em" }, onChange: async (e) => {
          if (!e.target.value) return;
          const p = allProfiles.find((u) => u.id === e.target.value);
          if (!p) return;
          const reason = prompt("Lý do spotlight:") || "Manual pick";
          const week = `${(/* @__PURE__ */ new Date()).getFullYear()}-W${Math.ceil(((/* @__PURE__ */ new Date()).getTime() - new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1).getTime()) / 6048e5)}`;
          const val = { userId: p.id, name: p.display_name, reason, week, setAt: (/* @__PURE__ */ new Date()).toISOString() };
          await setConfig("spotlight_user", val);
          setSpotlight(val);
          e.target.value = "";
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Chọn thủ công --" }),
          allProfiles.slice(0, 50).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.id, children: p.display_name || p.id.slice(0, 12) }, p.id))
        ] })
      ] })
    ] })
  ] });
}
const COIN_RANGES = [
  { label: "0", min: 0, max: 0 },
  { label: "1-100", min: 1, max: 100 },
  { label: "101-500", min: 101, max: 500 },
  { label: "501-1k", min: 501, max: 1e3 },
  { label: "1k+", min: 1001, max: Infinity }
];
const POWER_UP_KEYS = ["hint", "freeze", "doubleXp", "skip", "reveal"];
function buildEconomyUsers(profiles, economy) {
  const ecoMap = new Map((economy || []).map((e) => [e.user_id, e]));
  return (profiles || []).map((p) => {
    const eco = ecoMap.get(p.id) || {};
    return {
      id: p.id,
      name: p.display_name || p.email || p.id.slice(0, 8),
      coins: Number(eco.coins) || 0,
      powerUps: eco.power_ups || {}
    };
  });
}
function buildEconomyStats(users) {
  const totalCoins = users.reduce((s, u) => s + u.coins, 0);
  const avgCoins = users.length ? Math.round(totalCoins / users.length) : 0;
  const maxCoins = users.length ? Math.max(...users.map((u) => u.coins)) : 0;
  const withPowerUps = users.filter((u) => Object.keys(u.powerUps).length > 0).length;
  return { totalCoins, avgCoins, maxCoins, withPowerUps };
}
function buildCoinDistribution(users) {
  return COIN_RANGES.map((r) => ({
    label: r.label,
    count: users.filter((u) => u.coins >= r.min && u.coins <= r.max).length
  }));
}
function buildPowerUpDistribution(users) {
  return POWER_UP_KEYS.map((key) => ({
    key,
    total: users.reduce((s, u) => {
      var _a;
      return s + (Number((_a = u.powerUps) == null ? void 0 : _a[key]) || 0);
    }, 0)
  }));
}
function matchesQuery(user, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  return user.name.toLowerCase().includes(q) || user.id.toLowerCase().includes(q);
}
function StatsGrid({ stats, userCount }) {
  const items = [
    { icon: "👥", value: userCount, label: "Người chơi" },
    { icon: "🪙", value: stats.totalCoins.toLocaleString(), label: "Tổng xu" },
    { icon: "📊", value: stats.avgCoins.toLocaleString(), label: "TB/người" },
    { icon: "🏆", value: stats.maxCoins.toLocaleString(), label: "Cao nhất" },
    { icon: "⚡", value: stats.withPowerUps, label: "Có hiệu ứng tăng cường" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-stat-grid", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stat", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-stat-icon", children: it.icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-stat-value", children: it.value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-stat-label", children: it.label })
  ] }, it.label)) });
}
function CoinDistributionSection({ data }) {
  const max = Math.max(...data.map((d) => d.count), 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-admin-section-title", children: "📊 Phân bổ xu" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", alignItems: "flex-end", gap: 4, height: 100 }, children: data.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", style: { marginBottom: 4 }, children: d.count }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-chart-bar", style: { height: `${d.count / max * 100}%`, width: "100%" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", style: { marginTop: 4 }, children: d.label })
    ] }, d.label)) })
  ] });
}
function PowerUpSection({ data }) {
  const max = Math.max(...data.map((d) => d.total), 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-admin-section-title", children: "⚡ Phân bổ hiệu ứng tăng cường" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", alignItems: "flex-end", gap: 4, height: 100 }, children: data.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", style: { marginBottom: 4 }, children: d.total }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-chart-bar", style: { height: `${d.total / max * 100}%`, width: "100%" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", style: { marginTop: 4 }, children: d.key })
    ] }, d.key)) })
  ] });
}
function TopEarnersSection({ earners }) {
  if (!earners.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-admin-section-title", children: "🏆 Top người chơi" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-stack n4-admin-gap-sm", children: earners.map((u, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-row-main", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-admin-text-sm", children: [
        i + 1,
        ". ",
        u.name
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-row-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-admin-badge n4-admin-badge--info", children: [
        "🪙 ",
        u.coins.toLocaleString()
      ] }) })
    ] }, u.id)) })
  ] });
}
function RewardGrantSection({ economyUsers, onGrant }) {
  const [targetId, setTargetId] = reactExports.useState("");
  const [coins, setCoins] = reactExports.useState("");
  const [powerUp, setPowerUp] = reactExports.useState("hint");
  const [powerUpQty, setPowerUpQty] = reactExports.useState("1");
  const [granting, setGranting] = reactExports.useState(false);
  async function handleGrant() {
    if (!targetId) return;
    setGranting(true);
    try {
      await onGrant(targetId, Number(coins) || 0, powerUp, Number(powerUpQty) || 0);
      setCoins("");
      setPowerUpQty("1");
    } finally {
      setGranting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-admin-section-title", children: "🎁 Cấp phần thưởng" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", htmlFor: "economy-user", children: "Người chơi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "economy-user", className: "n4-input", value: targetId, onChange: (e) => setTargetId(e.target.value), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Chọn --" }),
          economyUsers.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: u.id, children: [
            u.name,
            " (🪙",
            u.coins,
            ")"
          ] }, u.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", htmlFor: "economy-coins", children: "Xu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "economy-coins", className: "n4-input", type: "number", placeholder: "0", value: coins, onChange: (e) => setCoins(e.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", htmlFor: "economy-power-up", children: "Hiệu ứng tăng cường" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { id: "economy-power-up", className: "n4-input", value: powerUp, onChange: (e) => setPowerUp(e.target.value), children: POWER_UP_KEYS.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: k, children: k }, k)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", htmlFor: "economy-power-up-qty", children: "Số lượng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "economy-power-up-qty", className: "n4-input", type: "number", min: "0", value: powerUpQty, onChange: (e) => setPowerUpQty(e.target.value) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-toolbar--end", style: { marginTop: "var(--n4-sp-2)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn--accent", onClick: handleGrant, disabled: !targetId || granting, children: granting ? "⏳ Đang cấp..." : "🎁 Cấp thưởng" }) })
  ] });
}
function RewardConfigSection({ rewardConfig, onSave }) {
  const [config, setConfig2] = reactExports.useState(rewardConfig);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setConfig2(rewardConfig);
  }, [rewardConfig]);
  function update(key, value) {
    setConfig2((prev) => ({ ...prev, [key]: Number(value) || 0 }));
  }
  async function handleSave() {
    setSaving(true);
    try {
      await onSave(config);
    } finally {
      setSaving(false);
    }
  }
  const fields = [
    { key: "daily_login", label: "Đăng nhập hằng ngày" },
    { key: "quiz_complete", label: "Hoàn thành trắc nghiệm" },
    { key: "perfect_score", label: "Điểm tuyệt đối" },
    { key: "streak_bonus", label: "Bonus streak" },
    { key: "first_game", label: "Trò chơi đầu tiên" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-admin-section-title", children: "⚙️ Cấu hình thưởng" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-form-grid", children: fields.map((f) => {
      var _a;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", children: f.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "n4-input",
            type: "number",
            min: "0",
            value: (_a = config[f.key]) != null ? _a : "",
            onChange: (e) => update(f.key, e.target.value)
          }
        )
      ] }, f.key);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-toolbar--end", style: { marginTop: "var(--n4-sp-2)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn--accent", onClick: handleSave, disabled: saving, children: saving ? "⏳ Đang lưu..." : "💾 Lưu cấu hình" }) })
  ] });
}
function BatchGrantSection({ economyUsers, onBatchGrant }) {
  const [search, setSearch] = reactExports.useState("");
  const [selected, setSelected] = reactExports.useState(/* @__PURE__ */ new Set());
  const [batchCoins, setBatchCoins] = reactExports.useState("");
  const [granting, setGranting] = reactExports.useState(false);
  const filtered = reactExports.useMemo(
    () => economyUsers.filter((u) => matchesQuery(u, search)),
    [economyUsers, search]
  );
  function toggleUser(id) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }
  function toggleAll() {
    if (selected.size === filtered.length) {
      setSelected(/* @__PURE__ */ new Set());
    } else {
      setSelected(new Set(filtered.map((u) => u.id)));
    }
  }
  async function handleBatch() {
    if (!selected.size || !Number(batchCoins)) return;
    setGranting(true);
    try {
      await onBatchGrant([...selected], Number(batchCoins));
      setSelected(/* @__PURE__ */ new Set());
      setBatchCoins("");
    } finally {
      setGranting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-admin-section-title", children: "📦 Cấp hàng loạt" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "n4-input",
          placeholder: "🔍 Tìm người chơi...",
          value: search,
          onChange: (e) => setSearch(e.target.value)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "n4-input",
          type: "number",
          placeholder: "Số xu",
          value: batchCoins,
          onChange: (e) => setBatchCoins(e.target.value),
          style: { maxWidth: 120 }
        }
      )
    ] }),
    selected.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-batch-bar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-admin-text-sm", children: [
        "Đã chọn ",
        selected.size,
        " người"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn--sm n4-btn--accent", onClick: handleBatch, disabled: granting, children: granting ? "⏳..." : `🎁 Cấp ${batchCoins || 0} xu` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack n4-admin-gap-sm n4-admin-scroll-list", style: { maxHeight: 240, overflowY: "auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-list-item", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-text-sm", style: { cursor: "pointer" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: selected.size === filtered.length && filtered.length > 0, onChange: toggleAll, style: { marginRight: 8 } }),
        "Chọn tất cả (",
        filtered.length,
        ")"
      ] }) }),
      filtered.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-text-sm", style: { cursor: "pointer" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: selected.has(u.id), onChange: () => toggleUser(u.id), style: { marginRight: 8 } }),
          u.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: [
          "🪙 ",
          u.coins
        ] })
      ] }, u.id))
    ] })
  ] });
}
function GiftHistorySection({ gifts }) {
  if (!(gifts == null ? void 0 : gifts.length)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-admin-section-title", children: "📜 Lịch sử tặng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Chưa có lịch sử tặng quà" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-admin-section-title", children: "📜 Lịch sử tặng" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-table-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-table-scroll", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-admin-table n4-responsive-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { className: "n4-sr-only", children: "Lịch sử cấp phần thưởng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Thời gian" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Người nhận" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Xu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Power-Up" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Ghi chú" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: gifts.slice(0, 50).map((g, i) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Thời gian", className: "n4-admin-text-xs", children: new Date(g.created_at).toLocaleString("vi") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Người nhận", className: "n4-admin-text-sm", children: g.recipient_name || ((_a = g.recipient_id) == null ? void 0 : _a.slice(0, 8)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Xu", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-admin-badge n4-admin-badge--info", children: [
            "🪙 ",
            g.coins || 0
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Power-Up", className: "n4-admin-text-sm", children: g.power_up ? `${g.power_up} ×${g.power_up_qty || 0}` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Ghi chú", className: "n4-admin-text-xs n4-admin-text-muted", children: g.note || "—" })
        ] }, i);
      }) })
    ] }) }) })
  ] });
}
function EconomyPanel() {
  const [profiles, setProfiles] = reactExports.useState([]);
  const [economy, setEconomy] = reactExports.useState([]);
  const [gifts, setGifts] = reactExports.useState([]);
  const [rewardConfig, setRewardConfig] = reactExports.useState({});
  const [loading, setLoading] = reactExports.useState(true);
  const [message, setMessage] = reactExports.useState(null);
  reactExports.useEffect(() => {
    loadData();
  }, []);
  async function loadData() {
    setLoading(true);
    try {
      const [pRes, eRes, gRes, rRes] = await Promise.all([
        supabase.from("profiles").select("id, display_name, email"),
        supabase.from("economy").select("*"),
        supabase.from("gift_history").select("*").order("created_at", { ascending: false }).limit(50),
        supabase.from("app_config").select("*").eq("category", "rewards")
      ]);
      setProfiles(pRes.data || []);
      setEconomy(eRes.data || []);
      setGifts(gRes.data || []);
      const cfg = {};
      (rRes.data || []).forEach((r) => {
        cfg[r.key] = Number(r.value) || 0;
      });
      setRewardConfig(cfg);
    } catch (err) {
      setMessage({ type: "error", text: getUserErrorMessage(err, "Không thể tải dữ liệu kinh tế lúc này.") });
    } finally {
      setLoading(false);
    }
  }
  const economyUsers = reactExports.useMemo(() => buildEconomyUsers(profiles, economy), [profiles, economy]);
  const stats = reactExports.useMemo(() => buildEconomyStats(economyUsers), [economyUsers]);
  const coinDist = reactExports.useMemo(() => buildCoinDistribution(economyUsers), [economyUsers]);
  const powerUpDist = reactExports.useMemo(() => buildPowerUpDistribution(economyUsers), [economyUsers]);
  const topEarners = reactExports.useMemo(() => [...economyUsers].sort((a, b) => b.coins - a.coins).slice(0, 10), [economyUsers]);
  function flash(type, text) {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 4e3);
  }
  async function grantReward(userId, coins, powerUp, powerUpQty) {
    try {
      const user = economyUsers.find((u) => u.id === userId);
      if (!user) throw new Error("Không tìm thấy người chơi");
      const updates = { coins: user.coins + coins };
      if (powerUpQty > 0) {
        updates.power_ups = { ...user.powerUps, [powerUp]: (Number(user.powerUps[powerUp]) || 0) + powerUpQty };
      }
      const { error } = await supabase.from("economy").upsert({ user_id: userId, ...updates });
      if (error) throw error;
      flash("success", `Đã cấp ${coins} xu${powerUpQty ? ` + ${powerUpQty} ${powerUp}` : ""}`);
      await loadData();
    } catch (err) {
      flash("error", getUserErrorMessage(err));
    }
  }
  async function batchGrant(userIds, coins) {
    try {
      const ops = userIds.map((id) => {
        const user = economyUsers.find((u) => u.id === id);
        return supabase.from("economy").upsert({
          user_id: id,
          coins: ((user == null ? void 0 : user.coins) || 0) + coins
        });
      });
      await Promise.all(ops);
      flash("success", `Đã cấp ${coins} xu cho ${userIds.length} người`);
      await loadData();
    } catch (err) {
      flash("error", getUserErrorMessage(err, "Không thể cấp thưởng hàng loạt lúc này."));
    }
  }
  async function saveRewardConfig(cfg) {
    try {
      const ops = Object.entries(cfg).map(
        ([key, value]) => supabase.from("app_config").upsert({ key, value: String(value), category: "rewards" })
      );
      await Promise.all(ops);
      flash("success", "Đã lưu cấu hình thưởng");
      await loadData();
    } catch (err) {
      flash("error", getUserErrorMessage(err, "Không thể lưu thay đổi lúc này."));
    }
  }
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-loading", children: "⏳ Đang tải Economy..." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-panel", children: [
    message && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-admin-msg n4-admin-msg--${message.type === "error" ? "received" : "sent"}`, children: message.text }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatsGrid, { stats, userCount: economyUsers.length }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-grid-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CoinDistributionSection, { data: coinDist }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PowerUpSection, { data: powerUpDist })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopEarnersSection, { earners: topEarners }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RewardGrantSection, { economyUsers, onGrant: grantReward }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RewardConfigSection, { rewardConfig, onSave: saveRewardConfig }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BatchGrantSection, { economyUsers, onBatchGrant: batchGrant }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GiftHistorySection, { gifts })
  ] });
}
function safeCopy(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).catch(() => {
      _fbCopy(text);
    });
  }
  _fbCopy(text);
  return Promise.resolve();
}
function _fbCopy(t) {
  const ta = document.createElement("textarea");
  ta.value = t;
  ta.style.cssText = "position:fixed;left:-9999px;top:-9999px;opacity:0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand("copy");
  } catch (e) {
  }
  ta.remove();
}
function logAdminAction(adminId, action, target, details = null) {
  if (!adminId || !action) return;
  supabase.rpc("write_admin_audit", {
    audit_action: action,
    audit_target: target || "unknown",
    audit_details: details || {}
  }).then(({ error }) => {
    if (error) logActivity(adminId, `admin_${action}`, { target, ...details || {} });
  }).catch(() => logActivity(adminId, `admin_${action}`, { target, ...details || {} }));
}
function exportData(data, filename, format) {
  let content, mime;
  if (format === "csv") {
    if (!data.length) return;
    const keys = Object.keys(data[0]);
    const rows = [keys.join(","), ...data.map((row) => keys.map((k) => {
      const v = row[k];
      const s = v == null ? "" : String(v);
      return s.includes(",") || s.includes('"') || s.includes("\n") ? `"${s.replace(/"/g, '""')}"` : s;
    }).join(","))];
    content = rows.join("\n");
    mime = "text/csv;charset=utf-8";
  } else {
    content = JSON.stringify(data, null, 2);
    mime = "application/json";
  }
  const blob = new Blob([content], { type: mime });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${filename}.${format}`;
  a.click();
  URL.revokeObjectURL(a.href);
}
function formatDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" }) + " " + d.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
}
function formatRelativeTime(iso) {
  if (!iso) return "—";
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 6e4);
  if (mins < 1) return "vừa xong";
  if (mins < 60) return `${mins} phút trước`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} giờ trước`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} ngày trước`;
  return formatDate(iso);
}
function AdminModal({ open, onClose, wide = false, children, labelledBy }) {
  const dialogRef = useDialogFocus(open, onClose);
  reactExports.useEffect(() => {
    if (!open) return void 0;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);
  if (!open) return null;
  if (typeof document === "undefined") return null;
  return reactDomExports.createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "n4-admin-modal-backdrop",
        onPointerDown: (event) => event.target === event.currentTarget && (onClose == null ? void 0 : onClose()),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: dialogRef,
            className: `n4-admin-modal ${wide ? "n4-admin-modal--wide" : ""}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": labelledBy,
            "aria-label": labelledBy ? void 0 : "Hộp thoại quản trị",
            tabIndex: -1,
            children
          }
        )
      }
    ),
    document.body
  );
}
function BulkMessageDialog({ open, selectedCount, onSend, onClose }) {
  const [mode, setMode] = reactExports.useState("dm");
  const [content, setContent] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (!open) return;
    setMode("dm");
    setContent("");
  }, [open]);
  if (!open) return null;
  const handleSubmit = () => {
    if (!content.trim()) return;
    onSend == null ? void 0 : onSend({ mode, content: content.trim() });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminModal, { open, onClose, labelledBy: "bulk-msg-title", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { id: "bulk-msg-title", className: "n4-admin-modal-title", children: "📧 Gửi hàng loạt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-text-sm n4-admin-text-muted", children: [
          "Đang gửi tới ",
          selectedCount,
          " người dùng."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: onClose, "aria-label": "Đóng", children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-radio-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", checked: mode === "dm", onChange: () => setMode("dm") }),
          "Tin nhắn riêng"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-radio-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", checked: mode === "announce", onChange: () => setMode("announce") }),
          "Thông báo chung"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          className: "n4-input",
          rows: 4,
          placeholder: "Nhập nội dung cần gửi...",
          value: content,
          onChange: (e) => setContent(e.target.value),
          style: { width: "100%", resize: "vertical" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: mode === "announce" ? "Tạo announcement toàn hệ thống." : "Gửi direct message cho từng user đã chọn." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight n4-admin-toolbar--end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: onClose, children: "Hủy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: handleSubmit, disabled: !content.trim(), children: "📨 Gửi ngay" })
        ] })
      ] })
    ] })
  ] });
}
const REASON_TEMPLATES = [
  "Vi phạm quy tắc cộng đồng",
  "Gian lận trong quiz/game",
  "Spam hoặc quấy rối người dùng khác",
  "Sử dụng ngôn ngữ không phù hợp",
  "Tài khoản giả mạo"
];
const DURATION_OPTIONS = [
  { key: "1h", label: "1 giờ" },
  { key: "24h", label: "24 giờ" },
  { key: "7d", label: "7 ngày" },
  { key: "30d", label: "30 ngày" },
  { key: "permanent", label: "Vĩnh viễn" }
];
function BanDialog({ target, onConfirm, onClose }) {
  const [reason, setReason] = reactExports.useState("");
  const [duration, setDuration] = reactExports.useState("permanent");
  reactExports.useEffect(() => {
    if (!target) return;
    setReason("");
    setDuration("permanent");
  }, [target]);
  if (!target) return null;
  const handleConfirm = () => {
    onConfirm == null ? void 0 : onConfirm({ reason: reason.trim(), duration });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminModal, { open: !!target, onClose, labelledBy: "ban-dialog-title", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { id: "ban-dialog-title", className: "n4-admin-modal-title", children: "🚫 Chặn người dùng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-sm n4-admin-text-muted", children: target.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: onClose, "aria-label": "Đóng", children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-form-label", children: "Thời hạn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight", children: DURATION_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `n4-btn n4-btn-sm ${duration === option.key ? "n4-btn-danger" : "n4-btn-ghost"}`,
            onClick: () => setDuration(option.key),
            children: option.label
          },
          option.key
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-form-label", children: "Mẫu lý do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight", children: REASON_TEMPLATES.map((template) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "n4-btn n4-btn-sm n4-btn-ghost",
            onClick: () => setReason(template),
            children: template
          },
          template
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-form-label", children: "Lý do chi tiết" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            className: "n4-input",
            rows: 3,
            placeholder: "Nhập lý do chặn...",
            value: reason,
            onChange: (e) => setReason(e.target.value),
            style: { width: "100%", resize: "vertical" }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Có thể để trống lý do nếu chỉ muốn chặn nhanh." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight n4-admin-toolbar--end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: onClose, children: "Hủy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: handleConfirm, children: "🚫 Xác nhận chặn" })
        ] })
      ] })
    ] })
  ] });
}
const SETTING_OPTIONS = {
  theme: ["light", "dark"],
  ttsRate: [0.5, 0.75, 1, 1.25, 1.5, 2],
  tab: ["roadmap", "kanji", "vocab", "grammar", "games", "minna"],
  section: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
};
const EDITOR_TABS = [
  { id: "profile", label: "Hồ sơ", icon: "👤" },
  { id: "learning", label: "Học tập", icon: "📚" },
  { id: "economy", label: "Kinh tế", icon: "🪙" },
  { id: "data", label: "Dữ liệu", icon: "🧩" },
  { id: "settings", label: "Cài đặt", icon: "⚙️" }
];
const FIELD_LIMITS = {
  xp: { min: 0, max: 999999, label: "XP" },
  level: { min: 1, max: 100, label: "Level" },
  streak: { min: 0, max: 9999, label: "Streak" },
  total_quizzes: { min: 0, max: 999999, label: "Tổng trắc nghiệm" },
  total_correct: { min: 0, max: 999999, label: "Tổng đúng" },
  coins: { min: 0, max: 999999, label: "Coins" }
};
function deepClone(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}
function buildProfileState(userProfile) {
  var _a, _b, _c, _d, _e;
  return {
    xp: String((_a = userProfile.xp) != null ? _a : 0),
    level: String((_b = userProfile.level) != null ? _b : 1),
    streak: String((_c = userProfile.streak) != null ? _c : 0),
    total_quizzes: String((_d = userProfile.total_quizzes) != null ? _d : 0),
    total_correct: String((_e = userProfile.total_correct) != null ? _e : 0)
  };
}
function buildCloudState(initialCloudData) {
  if (!initialCloudData) return null;
  const cloned = deepClone(initialCloudData);
  const { user_id, id, created_at, ...rest } = cloned;
  return rest;
}
function buildEmptyCloud(profile) {
  return {
    bookmarks: {},
    srs: {},
    trainer_stats: {},
    learning: {
      xp: Number(profile.xp) || 0,
      level: Number(profile.level) || 1,
      streak: Number(profile.streak) || 0,
      lastStudyDate: null,
      coins: 0,
      dailyClaimStreak: 0,
      lastDailyClaimDate: null,
      powerUps: {}
    },
    settings: {},
    version: 1,
    updated_at: null
  };
}
function numericValue(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}
function validateRange(rawValue, config) {
  if (rawValue === "") return `${config.label} không được để trống.`;
  const parsed = Number(rawValue);
  if (!Number.isFinite(parsed)) return `${config.label} phải là số.`;
  if (parsed < config.min || parsed > config.max) {
    return `${config.label} phải trong khoảng ${config.min} - ${config.max}.`;
  }
  return "";
}
function buildValidation(profile, learning) {
  var _a;
  const errors = {
    xp: validateRange(profile.xp, FIELD_LIMITS.xp),
    level: validateRange(profile.level, FIELD_LIMITS.level),
    streak: validateRange(profile.streak, FIELD_LIMITS.streak),
    total_quizzes: validateRange(profile.total_quizzes, FIELD_LIMITS.total_quizzes),
    total_correct: validateRange(profile.total_correct, FIELD_LIMITS.total_correct),
    coins: validateRange(String((_a = learning.coins) != null ? _a : 0), FIELD_LIMITS.coins)
  };
  if (!errors.total_quizzes && !errors.total_correct) {
    if (numericValue(profile.total_correct) > numericValue(profile.total_quizzes)) {
      errors.total_correct = "Tổng đúng không thể lớn hơn tổng quiz.";
    }
  }
  return errors;
}
function buildSnapshot(profile, cloud) {
  return JSON.stringify({ profile, cloud: cloud || null });
}
function UserDataEditor({ uid, userProfile, initialCloudData, onBack }) {
  var _a, _b, _c, _d, _e, _f, _g;
  const adminUser = useAppStore((s) => s.user);
  const [profile, setProfile] = reactExports.useState(() => buildProfileState(userProfile));
  const [cloud, setCloud] = reactExports.useState(() => buildCloudState(initialCloudData));
  const [saving, setSaving] = reactExports.useState(false);
  const [jsonEditing, setJsonEditing] = reactExports.useState(null);
  const [activeTab, setActiveTab] = reactExports.useState("profile");
  const baselineRef = reactExports.useRef(buildSnapshot(buildProfileState(userProfile), buildCloudState(initialCloudData)));
  const learning = (cloud == null ? void 0 : cloud.learning) || {};
  const bookmarks = (cloud == null ? void 0 : cloud.bookmarks) || {};
  const srs = (cloud == null ? void 0 : cloud.srs) || {};
  const trainerStats = (cloud == null ? void 0 : cloud.trainer_stats) || {};
  const settings = (cloud == null ? void 0 : cloud.settings) || {};
  const validation = buildValidation(profile, learning);
  const hasValidationErrors = Object.values(validation).some(Boolean);
  const dirty = buildSnapshot(profile, cloud) !== baselineRef.current;
  reactExports.useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (!dirty) return;
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [dirty]);
  const syncBaseline = (nextProfile, nextCloud) => {
    baselineRef.current = buildSnapshot(nextProfile, nextCloud);
  };
  const updateProfile = (key, value) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };
  const updateCloud = (field, value) => {
    setCloud((prev) => prev ? { ...prev, [field]: value } : { [field]: value });
  };
  const updateLearning = (key, value) => {
    setCloud((prev) => {
      const next = prev || buildEmptyCloud(profile);
      return {
        ...next,
        learning: {
          ...next.learning || {},
          [key]: value
        }
      };
    });
  };
  const updateSetting = (key, value) => {
    setCloud((prev) => {
      const next = prev || buildEmptyCloud(profile);
      return {
        ...next,
        settings: {
          ...next.settings || {},
          [key]: value
        }
      };
    });
  };
  const deleteSetting = (key) => {
    setCloud((prev) => {
      if (!(prev == null ? void 0 : prev.settings)) return prev;
      const nextSettings = { ...prev.settings };
      delete nextSettings[key];
      return { ...prev, settings: nextSettings };
    });
  };
  const ensureCloud = () => {
    if (cloud) return;
    const nextCloud = buildEmptyCloud(profile);
    setCloud(nextCloud);
  };
  const clearField = (field) => {
    if (!confirm(`Xóa toàn bộ ${field}?`)) return;
    updateCloud(field, field === "bookmarks" || field === "srs" || field === "trainer_stats" || field === "settings" ? {} : null);
  };
  const openJsonEditor = (field) => {
    setJsonEditing({ field, value: JSON.stringify((cloud == null ? void 0 : cloud[field]) || {}, null, 2) });
  };
  const saveJsonEditor = () => {
    if (!jsonEditing) return;
    try {
      const parsed = JSON.parse(jsonEditing.value);
      updateCloud(jsonEditing.field, parsed);
      setJsonEditing(null);
    } catch (err) {
      alert("JSON không hợp lệ: " + err.message);
    }
  };
  const handleBack = () => {
    if (dirty && !confirm("Bạn có thay đổi chưa lưu. Vẫn quay lại?")) return;
    onBack == null ? void 0 : onBack();
  };
  const saveAll = async () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h, _i, _j, _k, _l;
    if (hasValidationErrors) {
      alert("Có trường dữ liệu chưa hợp lệ. Hãy kiểm tra lại trước khi lưu.");
      return;
    }
    setSaving(true);
    try {
      const nextProfilePayload = {
        xp: numericValue(profile.xp),
        level: numericValue(profile.level, 1),
        streak: numericValue(profile.streak),
        total_quizzes: numericValue(profile.total_quizzes),
        total_correct: numericValue(profile.total_correct)
      };
      const nextProfileState = {
        xp: String(nextProfilePayload.xp),
        level: String(nextProfilePayload.level),
        streak: String(nextProfilePayload.streak),
        total_quizzes: String(nextProfilePayload.total_quizzes),
        total_correct: String(nextProfilePayload.total_correct)
      };
      await supabase.from("user_profiles").update(nextProfilePayload).eq("id", uid);
      let nextCloud = cloud ? deepClone(cloud) : null;
      if (nextCloud) {
        const pushTs = (/* @__PURE__ */ new Date()).toISOString();
        const initialXp = (_c2 = (_b2 = (_a2 = initialCloudData == null ? void 0 : initialCloudData.learning) == null ? void 0 : _a2.xp) != null ? _b2 : userProfile.xp) != null ? _c2 : 0;
        const initialLevel = (_f2 = (_e2 = (_d2 = initialCloudData == null ? void 0 : initialCloudData.learning) == null ? void 0 : _d2.level) != null ? _e2 : userProfile.level) != null ? _f2 : 1;
        const initialStreak = (_i = (_h = (_g2 = initialCloudData == null ? void 0 : initialCloudData.learning) == null ? void 0 : _g2.streak) != null ? _h : userProfile.streak) != null ? _i : 0;
        const nextCoins = numericValue((_k = (_j = nextCloud.learning) == null ? void 0 : _j.coins) != null ? _k : 0);
        nextCloud.learning = {
          ...nextCloud.learning || {},
          xp: nextProfilePayload.xp,
          level: nextProfilePayload.level,
          streak: nextProfilePayload.streak,
          coins: nextCoins,
          powerUps: ((_l = nextCloud.learning) == null ? void 0 : _l.powerUps) || {}
        };
        const xpChanged = nextProfilePayload.xp !== numericValue(initialXp) || nextProfilePayload.level !== numericValue(initialLevel, 1) || nextProfilePayload.streak !== numericValue(initialStreak);
        if (xpChanged) {
          nextCloud.learning.adminXpOverride = {
            value: nextProfilePayload.xp,
            level: nextProfilePayload.level,
            streak: nextProfilePayload.streak,
            setAt: pushTs
          };
        }
        nextCloud.learning.adminCoinOverride = {
          value: nextCoins,
          powerUps: nextCloud.learning.powerUps,
          setAt: pushTs
        };
        nextCloud.updated_at = pushTs;
        nextCloud.version = (nextCloud.version || 0) + 1;
        await supabase.from("user_data").upsert({ ...nextCloud, updated_at: pushTs, user_id: uid }, { onConflict: "user_id" });
        setCloud(nextCloud);
      }
      setProfile(nextProfileState);
      syncBaseline(nextProfileState, nextCloud);
      alert("Đã lưu tất cả!");
    } catch (err) {
      alert(getUserErrorMessage(err));
    }
    setSaving(false);
  };
  const resetUserData = async () => {
    if (!confirm("Đặt lại dữ liệu đám mây về mặc định?\n\nXP, bookmarks, SRS, trainer stats sẽ được đặt lại về 0.\nSettings giữ nguyên.")) return;
    setSaving(true);
    try {
      const pushTs = (/* @__PURE__ */ new Date()).toISOString();
      const resetData = {
        bookmarks: {},
        srs: {},
        trainer_stats: {},
        learning: { xp: 0, level: 1, streak: 0, lastStudyDate: null, coins: 0, dailyClaimStreak: 0, lastDailyClaimDate: null, powerUps: {} },
        settings: (cloud == null ? void 0 : cloud.settings) || {},
        updated_at: pushTs,
        version: ((cloud == null ? void 0 : cloud.version) || 0) + 1
      };
      const nextProfileState = { xp: "0", level: "1", streak: "0", total_quizzes: "0", total_correct: "0" };
      await supabase.from("user_data").upsert({ ...resetData, user_id: uid }, { onConflict: "user_id" });
      await supabase.from("user_profiles").update({ xp: 0, level: 1, streak: 0, total_quizzes: 0, total_correct: 0 }).eq("id", uid);
      logAdminAction(adminUser == null ? void 0 : adminUser.id, "reset_user_data", "user_data", { targetUserId: uid });
      setCloud(resetData);
      setProfile(nextProfileState);
      syncBaseline(nextProfileState, resetData);
      alert("Đã reset dữ liệu!");
    } catch (err) {
      alert(getUserErrorMessage(err));
    }
    setSaving(false);
  };
  const wipeUserData = async () => {
    if (!confirm("⚠️ XÓA TOÀN BỘ dữ liệu cloud của user này?\n\nBookmarks, SRS, trainer stats, settings — TẤT CẢ sẽ bị xóa.\nHành động KHÔNG THỂ hoàn tác!")) return;
    if (!confirm("Xác nhận lần 2: Bạn chắc chắn muốn xóa dữ liệu của " + (userProfile.display_name || "user") + "?")) return;
    setSaving(true);
    try {
      await supabase.from("user_data").delete().eq("user_id", uid);
      logAdminAction(adminUser == null ? void 0 : adminUser.id, "wipe_user_data", "user_data", { targetUserId: uid });
      alert("Đã xóa toàn bộ dữ liệu cloud!");
      onBack == null ? void 0 : onBack();
    } catch (err) {
      alert(getUserErrorMessage(err));
    }
    setSaving(false);
  };
  const exportUserData = () => {
    exportData([
      {
        profile: {
          ...userProfile,
          xp: numericValue(profile.xp),
          level: numericValue(profile.level, 1),
          streak: numericValue(profile.streak),
          total_quizzes: numericValue(profile.total_quizzes),
          total_correct: numericValue(profile.total_correct)
        },
        cloud
      }
    ], `user-${userProfile.display_name || uid}`, "json");
  };
  const renderFieldError = (key) => validation[key] ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-field-error", children: validation[key] }) : null;
  const noCloudState = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-empty", children: [
    "☁️ Người dùng này chưa có dữ liệu cloud.",
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight n4-admin-toolbar--center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-sm n4-btn-primary",
        onClick: () => {
          ensureCloud();
          setActiveTab("learning");
        },
        children: "➕ Tạo dữ liệu cloud mới"
      }
    ) })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section n4-admin-editor-shell", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between n4-admin-editor-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack n4-admin-gap-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: handleBack, children: "← Users" }),
            dirty && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-tag n4-admin-tag--warning", children: "Chưa lưu" }),
            hasValidationErrors && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-tag n4-admin-tag--danger", children: "Cần kiểm tra dữ liệu" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-admin-modal-title", children: "📝 Chỉnh dữ liệu người chơi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-text-sm n4-admin-text-muted", children: [
              userProfile.display_name || "User",
              " · ",
              userProfile.email || uid
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight n4-admin-toolbar--end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: exportUserData, children: "📥 Export" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: resetUserData, disabled: saving, children: "🔄 Reset" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: wipeUserData, disabled: saving, children: "🗑️ Wipe" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: saveAll, disabled: saving || hasValidationErrors || !dirty, children: saving ? "⏳ Đang lưu..." : "💾 Lưu" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            "Lv.",
            profile.level,
            " · XP ",
            profile.xp
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Tiến độ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            profile.total_correct,
            "/",
            profile.total_quizzes,
            " đúng"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Cloud" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: cloud ? "Đã sync" : "Chưa sync" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Kinh tế" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            numericValue((_a = learning.coins) != null ? _a : 0),
            " coins"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-panel-tabs", children: EDITOR_TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `n4-admin-panel-tab ${activeTab === tab.id ? "active" : ""}`,
          onClick: () => setActiveTab(tab.id),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.label })
          ]
        },
        tab.id
      )) }),
      activeTab === "profile" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-section-title", children: "📋 Profile (user_profiles)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "XP" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", value: profile.xp, onChange: (e) => updateProfile("xp", e.target.value) }),
              renderFieldError("xp")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "Level" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", value: profile.level, onChange: (e) => updateProfile("level", e.target.value) }),
              renderFieldError("level")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "Streak" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", value: profile.streak, onChange: (e) => updateProfile("streak", e.target.value) }),
              renderFieldError("streak")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "Tổng Quiz" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", value: profile.total_quizzes, onChange: (e) => updateProfile("total_quizzes", e.target.value) }),
              renderFieldError("total_quizzes")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "Tổng đúng" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", value: profile.total_correct, onChange: (e) => updateProfile("total_correct", e.target.value) }),
              renderFieldError("total_correct")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-section-title", children: "🕐 Metadata" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Tham gia" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: userProfile.joined_at ? new Date(userProfile.joined_at).toLocaleDateString("vi") : "N/A" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Hoạt động gần nhất" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: userProfile.last_active_at ? new Date(userProfile.last_active_at).toLocaleString("vi") : "N/A" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Phiên bản cloud" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: (cloud == null ? void 0 : cloud.version) || 0 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Cập nhật cloud" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: (cloud == null ? void 0 : cloud.updated_at) ? new Date(cloud.updated_at).toLocaleString("vi") : "N/A" })
            ] })
          ] })
        ] })
      ] }),
      activeTab === "learning" && !cloud && noCloudState,
      activeTab === "learning" && cloud && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-section-title", children: "📈 Learning (cloud)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "Điểm (đồng bộ)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", value: (_b = learning.xp) != null ? _b : "", onChange: (e) => updateLearning("xp", numericValue(e.target.value)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "Cấp độ (đồng bộ)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", value: (_c = learning.level) != null ? _c : "", onChange: (e) => updateLearning("level", numericValue(e.target.value, 1)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "Ngày học cuối" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "text", value: (_d = learning.lastStudyDate) != null ? _d : "", onChange: (e) => updateLearning("lastStudyDate", e.target.value) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-grid-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                "⭐ Đánh dấu (",
                Object.keys(bookmarks).length,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight n4-admin-toolbar--end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => openJsonEditor("bookmarks"), children: "📄 JSON" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: () => clearField("bookmarks"), children: "🗑️ Xóa hết" })
              ] })
            ] }),
            Object.keys(bookmarks).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-sm n4-admin-text-muted", children: "Trống" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-json-box", children: Object.entries(bookmarks).map(([key, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list-item n4-admin-list-item--tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: key }),
                ": ",
                String(value)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => {
                const next = { ...bookmarks };
                delete next[key];
                updateCloud("bookmarks", next);
              }, children: "✕" })
            ] }, key)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                "🔄 SRS (",
                Object.keys(srs).length,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight n4-admin-toolbar--end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => openJsonEditor("srs"), children: "📄 JSON" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: () => clearField("srs"), children: "🗑️ Xóa hết" })
              ] })
            ] }),
            Object.keys(srs).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-sm n4-admin-text-muted", children: "Trống" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-json-box", children: [
              Object.entries(srs).slice(0, 50).map(([key, value]) => {
                var _a2, _b2;
                return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-list-item n4-admin-list-item--tight", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: key }),
                  ": box=",
                  (_a2 = value == null ? void 0 : value.box) != null ? _a2 : "?",
                  " next=",
                  (_b2 = value == null ? void 0 : value.next) != null ? _b2 : "?"
                ] }) }, key);
              }),
              Object.keys(srs).length > 50 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: [
                "... và ",
                Object.keys(srs).length - 50,
                " items nữa"
              ] })
            ] })
          ] })
        ] })
      ] }),
      activeTab === "economy" && !cloud && noCloudState,
      activeTab === "economy" && cloud && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-section-title", children: "🪙 Kinh tế" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "Xu" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", value: (_e = learning.coins) != null ? _e : 0, onChange: (e) => updateLearning("coins", numericValue(e.target.value)) }),
              renderFieldError("coins")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "Chuỗi điểm danh" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", value: (_f = learning.dailyClaimStreak) != null ? _f : 0, onChange: (e) => updateLearning("dailyClaimStreak", numericValue(e.target.value)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "Ngày điểm danh cuối" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "text", value: (_g = learning.lastDailyClaimDate) != null ? _g : "", onChange: (e) => updateLearning("lastDailyClaimDate", e.target.value) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-section-title", children: "⚡ Hiệu ứng tăng cường" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-form-grid", children: ["hintPack", "xpBoost", "streakFreeze", "doubleCoins"].map((powerUpId) => {
            var _a2, _b2;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: powerUpId }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: "n4-input",
                  type: "number",
                  min: "0",
                  value: (_b2 = (_a2 = learning.powerUps) == null ? void 0 : _a2[powerUpId]) != null ? _b2 : 0,
                  onChange: (e) => updateLearning("powerUps", { ...learning.powerUps || {}, [powerUpId]: numericValue(e.target.value) })
                }
              )
            ] }, powerUpId);
          }) })
        ] })
      ] }),
      activeTab === "data" && !cloud && noCloudState,
      activeTab === "data" && cloud && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-section-title", children: "🎮 Thống kê Luyện tập" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight n4-admin-toolbar--end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => openJsonEditor("trainer_stats"), children: "📄 JSON" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: () => clearField("trainer_stats"), children: "🗑️ Xóa hết" })
            ] })
          ] }),
          Object.keys(trainerStats).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-sm n4-admin-text-muted", children: "Trống" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-list", children: Object.entries(trainerStats).map(([trainer, stats]) => {
            var _a2, _b2;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: trainer }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: [
                  "Lượt chơi: ",
                  (stats == null ? void 0 : stats.plays) || 0,
                  " · Đúng: ",
                  (stats == null ? void 0 : stats.correct) || 0,
                  " · Tổng: ",
                  (stats == null ? void 0 : stats.total) || 0,
                  " · Trung bình: ",
                  ((_b2 = (_a2 = stats == null ? void 0 : stats.avgScore) == null ? void 0 : _a2.toFixed) == null ? void 0 : _b2.call(_a2, 1)) || "—"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => {
                const next = { ...trainerStats };
                delete next[trainer];
                updateCloud("trainer_stats", next);
              }, children: "✕" })
            ] }, trainer);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-section-title", children: "🧾 Thông tin phụ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Đánh dấu" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: Object.keys(bookmarks).length })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Mục ôn tập (SRS)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: Object.keys(srs).length })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Thống kê luyện tập" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: Object.keys(trainerStats).length })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Số khóa cài đặt" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: Object.keys(settings).filter((key) => key !== "legacy").length })
            ] })
          ] })
        ] })
      ] }),
      activeTab === "settings" && !cloud && noCloudState,
      activeTab === "settings" && cloud && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-stack", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-section-title", children: "⚙️ Cài đặt" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight n4-admin-toolbar--end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => openJsonEditor("settings"), children: "📄 JSON" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: () => clearField("settings"), children: "🗑️ Xóa hết" })
          ] })
        ] }),
        Object.keys(settings).filter((key) => key !== "legacy").length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-sm n4-admin-text-muted", children: "Trống" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-json-box", children: Object.entries(settings).filter(([key]) => key !== "legacy").map(([key, value]) => {
          const options = SETTING_OPTIONS[key];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list-item n4-admin-list-item--settings", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-setting-key", children: key }),
            typeof value === "boolean" ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${value ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => updateSetting(key, !value), children: value ? "ON" : "OFF" }) : options ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: "n4-input",
                value,
                onChange: (e) => updateSetting(key, typeof options[0] === "number" ? Number(e.target.value) : e.target.value),
                style: { width: "auto", minWidth: 110 },
                children: [
                  options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option, children: option }, option)),
                  !options.includes(value) && /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value, children: [
                    value,
                    " (custom)"
                  ] })
                ]
              }
            ) : typeof value === "number" ? /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", value, onChange: (e) => updateSetting(key, numericValue(e.target.value)), style: { width: 120 } }) : typeof value === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "text", value, onChange: (e) => updateSetting(key, e.target.value), style: { maxWidth: 220 } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: JSON.stringify(value) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => deleteSetting(key), children: "✕" })
          ] }, key);
        }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AdminModal, { open: !!jsonEditing, onClose: () => setJsonEditing(null), wide: true, labelledBy: "json-editor-title", children: jsonEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { id: "json-editor-title", className: "n4-admin-modal-title", children: [
          "📄 Chỉnh sửa JSON: ",
          jsonEditing.field
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => setJsonEditing(null), "aria-label": "Đóng", children: "✕" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: jsonEditing.value,
          onChange: (e) => setJsonEditing((prev) => ({ ...prev, value: e.target.value })),
          className: "n4-admin-json-editor"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight n4-admin-toolbar--end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => setJsonEditing(null), children: "Hủy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: saveJsonEditor, children: "✓ Áp dụng" })
      ] })
    ] }) })
  ] });
}
const USER_TAGS = [
  { key: "vip", icon: "⭐", label: "VIP", color: "#f0c000" },
  { key: "warning", icon: "⚠️", label: "Cảnh báo", color: "#e67e22" },
  { key: "cheater", icon: "🚩", label: "Gian lận", color: "#e74c3c" },
  { key: "new", icon: "🆕", label: "Mới", color: "#3498db" },
  { key: "helpful", icon: "🤝", label: "Hữu ích", color: "#2ecc71" },
  { key: "inactive", icon: "😴", label: "Không hoạt động", color: "#95a5a6" }
];
const BAN_DURATION_MS = {
  "1h": 36e5,
  "24h": 864e5,
  "7d": 6048e5,
  "30d": 2592e6,
  permanent: 0
};
function buildEditingProfile(user, cloudData) {
  var _a;
  return {
    xp: user.xp || 0,
    level: user.level || 1,
    streak: user.streak || 0,
    coins: ((_a = cloudData == null ? void 0 : cloudData.learning) == null ? void 0 : _a.coins) || 0,
    total_quizzes: user.total_quizzes || 0,
    total_correct: user.total_correct || 0
  };
}
function UsersPanel({ search = "", onOpenChat }) {
  const user = useAppStore((s) => s.user);
  const [users, setUsers] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [roleFilter, setRoleFilter] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("last_active");
  const [selected, setSelected] = reactExports.useState(/* @__PURE__ */ new Set());
  const [bulkMessageOpen, setBulkMessageOpen] = reactExports.useState(false);
  const [expandedUser, setExpandedUser] = reactExports.useState(null);
  const [userDevices, setUserDevices] = reactExports.useState([]);
  const [userData, setUserData] = reactExports.useState(null);
  const [editingProfile, setEditingProfile] = reactExports.useState(null);
  const [userDataLoading, setUserDataLoading] = reactExports.useState(false);
  const [editorScene, setEditorScene] = reactExports.useState(null);
  const [page, setPage] = reactExports.useState(0);
  const [pageSize, setPageSize] = reactExports.useState(25);
  const [banDialog, setBanDialog] = reactExports.useState(null);
  const [banHistory, setBanHistory] = reactExports.useState({});
  const [pinnedUsers, setPinnedUsers] = reactExports.useState(() => {
    try {
      return JSON.parse(localStorage.getItem("admin_pinned_users") || "[]");
    } catch (e) {
      return [];
    }
  });
  const [userNotes, setUserNotes] = reactExports.useState({});
  const [noteDrafts, setNoteDrafts] = reactExports.useState({});
  const load = reactExports.useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllProfiles();
      setUsers(data || []);
    } catch (e) {
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  reactExports.useEffect(() => {
    setPage(0);
  }, [roleFilter, sortBy, search]);
  reactExports.useEffect(() => {
    (async () => {
      try {
        const { data } = await supabase.from("admin_user_notes").select("user_id,note,tags");
        if (!data) return;
        const map = {};
        for (const row of data) {
          map[row.user_id] = { note: row.note, tags: row.tags || [] };
        }
        setUserNotes(map);
      } catch (e) {
      }
    })();
  }, []);
  reactExports.useEffect(() => {
    (async () => {
      try {
        const { data } = await supabase.from("user_ban_history").select("*").order("banned_at", { ascending: true });
        if (!data) return;
        const map = {};
        for (const row of data) {
          if (!map[row.user_id]) map[row.user_id] = [];
          map[row.user_id].push({
            reason: row.reason,
            duration: row.duration,
            bannedAt: row.banned_at,
            bannedBy: row.banned_by,
            unbanAt: row.unban_at
          });
        }
        setBanHistory(map);
      } catch (e) {
      }
    })();
  }, []);
  const togglePin = (uid) => {
    setPinnedUsers((prev) => {
      const next = prev.includes(uid) ? prev.filter((id) => id !== uid) : [...prev, uid];
      try {
        localStorage.setItem("admin_pinned_users", JSON.stringify(next));
      } catch (e) {
      }
      return next;
    });
  };
  const saveUserNote = async (uid, note, tags) => {
    const value = { note: note || "", tags: tags || [] };
    setUserNotes((prev) => ({ ...prev, [uid]: value }));
    setNoteDrafts((prev) => ({ ...prev, [uid]: value.note || "" }));
    try {
      await supabase.from("admin_user_notes").upsert({
        user_id: uid,
        note: value.note,
        tags: value.tags,
        updated_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_by: user == null ? void 0 : user.id
      }, { onConflict: "user_id" });
      logAdminAction(user == null ? void 0 : user.id, "update_note", "user_note", { targetUserId: uid });
    } catch (e) {
    }
  };
  const toggleUserTag = (uid, tagKey) => {
    const current = userNotes[uid] || { note: "", tags: [] };
    const nextTags = current.tags.includes(tagKey) ? current.tags.filter((tag) => tag !== tagKey) : [...current.tags, tagKey];
    saveUserNote(uid, current.note, nextTags);
  };
  const toggleAdmin = async (uid, currentRole) => {
    const nextRole = currentRole === "admin" ? "user" : "admin";
    await setUserRole(uid, nextRole);
    logAdminAction(user == null ? void 0 : user.id, "role_change", "user_profile", {
      targetUserId: uid,
      previousRole: currentRole || "user",
      newRole: nextRole
    });
    load();
  };
  const openBanDialog = (uid) => {
    const targetUser = users.find((item) => item.id === uid);
    setBanDialog({ uid, name: (targetUser == null ? void 0 : targetUser.display_name) || uid });
  };
  const confirmBan = async ({ reason, duration }) => {
    if (!banDialog) return;
    const ms = BAN_DURATION_MS[duration] || 0;
    const unbanAt = ms ? new Date(Date.now() + ms).toISOString() : null;
    await setUserAccess(banDialog.uid, "blocked", { reason, duration, banUntil: unbanAt });
    const history = [
      ...banHistory[banDialog.uid] || [],
      {
        reason,
        duration,
        bannedAt: (/* @__PURE__ */ new Date()).toISOString(),
        bannedBy: user == null ? void 0 : user.id,
        unbanAt
      }
    ];
    setBanHistory((prev) => ({ ...prev, [banDialog.uid]: history }));
    logAdminAction(user == null ? void 0 : user.id, "block_user", "user_profile", {
      targetUserId: banDialog.uid,
      reason: reason || null,
      duration
    });
    setBanDialog(null);
    load();
  };
  const unblockUser = async (uid) => {
    await setUserAccess(uid, "user");
    logAdminAction(user == null ? void 0 : user.id, "unblock_user", "user_profile", { targetUserId: uid });
    load();
  };
  const toggleSelect = (uid) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(uid)) next.delete(uid);
      else next.add(uid);
      return next;
    });
  };
  const sendBulk = async ({ mode, content }) => {
    if (!content || selected.size === 0) return;
    if (mode === "announce") {
      await createAnnouncement(user == null ? void 0 : user.id, { title: "Thông báo từ Admin", content, type: "info" });
    } else {
      for (const uid of selected) {
        await sendMessage(user == null ? void 0 : user.id, uid, content);
      }
    }
    logAdminAction(user == null ? void 0 : user.id, "bulk_message", mode === "announce" ? "announcement" : "direct_message", {
      audienceSize: selected.size,
      mode
    });
    setSelected(/* @__PURE__ */ new Set());
    setBulkMessageOpen(false);
    alert(`Đã gửi ${mode === "announce" ? "thông báo" : "tin nhắn"} thành công!`);
  };
  const expandUser = async (uid) => {
    if (expandedUser === uid) {
      setExpandedUser(null);
      setUserData(null);
      setEditingProfile(null);
      return;
    }
    setExpandedUser(uid);
    setUserData(null);
    setEditingProfile(null);
    setUserDataLoading(true);
    try {
      const [devicesRes, dataRes] = await Promise.all([
        supabase.from("devices").select("*").eq("user_id", uid).order("last_active_at", { ascending: false }),
        supabase.from("user_data").select("*").eq("user_id", uid).maybeSingle()
      ]);
      setUserDevices(devicesRes.data || []);
      setUserData(dataRes.data || null);
    } catch (e) {
      setUserDevices([]);
      setUserData(null);
    }
    setUserDataLoading(false);
  };
  const saveProfileEdits = async (uid) => {
    var _a;
    if (!editingProfile) return;
    try {
      const adminXp = Number(editingProfile.xp) || 0;
      const adminLevel = Number(editingProfile.level) || 1;
      const adminStreak = Number(editingProfile.streak) || 0;
      const adminCoins = Math.max(0, Number(editingProfile.coins) || 0);
      await supabase.from("user_profiles").update({
        xp: adminXp,
        level: adminLevel,
        streak: adminStreak,
        total_quizzes: Number(editingProfile.total_quizzes) || 0,
        total_correct: Number(editingProfile.total_correct) || 0
      }).eq("id", uid);
      const { data: currentCloud } = await supabase.from("user_data").select("*").eq("user_id", uid).maybeSingle();
      const pushTs = (/* @__PURE__ */ new Date()).toISOString();
      const cloudToSave = { ...currentCloud || {} };
      cloudToSave.learning = {
        ...cloudToSave.learning || {},
        xp: adminXp,
        level: adminLevel,
        streak: adminStreak,
        coins: adminCoins,
        adminXpOverride: {
          value: adminXp,
          level: adminLevel,
          streak: adminStreak,
          setAt: pushTs
        },
        adminCoinOverride: {
          value: adminCoins,
          powerUps: ((_a = cloudToSave.learning) == null ? void 0 : _a.powerUps) || {},
          setAt: pushTs
        }
      };
      await supabase.from("user_data").upsert({
        ...cloudToSave,
        user_id: uid,
        updated_at: pushTs
      }, { onConflict: "user_id" });
      logAdminAction(user == null ? void 0 : user.id, "edit_profile", "user_profile", { targetUserId: uid });
      setEditingProfile(null);
      load();
      alert("Đã cập nhật profile!");
    } catch (err) {
      alert(getUserErrorMessage(err));
    }
  };
  const openEditorScene = async (uid) => {
    const targetUser = users.find((item) => item.id === uid);
    if (!targetUser) return;
    try {
      const { data: cloudData } = await supabase.from("user_data").select("*").eq("user_id", uid).maybeSingle();
      setEditorScene({ uid, user: targetUser, cloudData: cloudData || null });
    } catch (e) {
      setEditorScene({ uid, user: targetUser, cloudData: null });
    }
  };
  const query = search.toLowerCase();
  let filtered = users;
  if (roleFilter !== "all") filtered = filtered.filter((item) => (item.role || "user") === roleFilter);
  if (query) {
    filtered = filtered.filter(
      (item) => (item.display_name || "").toLowerCase().includes(query) || (item.email || "").toLowerCase().includes(query)
    );
  }
  if (sortBy === "xp") filtered = [...filtered].sort((a, b) => (b.xp || 0) - (a.xp || 0));
  else if (sortBy === "streak") filtered = [...filtered].sort((a, b) => (b.streak || 0) - (a.streak || 0));
  else filtered = [...filtered].sort((a, b) => new Date(b.last_active_at || 0) - new Date(a.last_active_at || 0));
  filtered = [...filtered].sort((a, b) => {
    const aPinned = pinnedUsers.includes(a.id) ? 1 : 0;
    const bPinned = pinnedUsers.includes(b.id) ? 1 : 0;
    return bPinned - aPinned;
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages - 1);
  const paged = filtered.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
  const allSelected = filtered.length > 0 && selected.size === filtered.length;
  const selectAll = () => {
    if (allSelected) setSelected(/* @__PURE__ */ new Set());
    else setSelected(new Set(filtered.map((item) => item.id)));
  };
  if (editorScene) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      UserDataEditor,
      {
        uid: editorScene.uid,
        userProfile: editorScene.user,
        initialCloudData: editorScene.cloudData,
        onBack: () => {
          setEditorScene(null);
          load();
        }
      }
    );
  }
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-loading", children: "⏳ Đang tải..." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", value: roleFilter, onChange: (e) => setRoleFilter(e.target.value), style: { width: "auto" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: "all", children: [
          "Tất cả (",
          users.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "admin", children: "Quản trị viên" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "user", children: "Người dùng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "blocked", children: "Đã chặn" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", value: sortBy, onChange: (e) => setSortBy(e.target.value), style: { width: "auto" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "last_active", children: "Hoạt động gần nhất" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "xp", children: "Điểm cao nhất" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "streak", children: "Chuỗi dài nhất" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: 1 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: selectAll, children: allSelected ? "☐ Bỏ chọn" : "☑ Chọn tất cả" }),
      selected.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: () => setBulkMessageOpen(true), children: [
        "📧 Gửi (",
        selected.size,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => exportData(filtered, "users", "csv"), children: "📥 Xuất CSV" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => exportData(filtered, "users", "json"), children: "📥 Xuất JSON" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-btn n4-btn-sm n4-btn-primary",
          onClick: async () => {
            try {
              const { data: allData } = await supabase.from("user_data").select("*");
              const combined = filtered.map((item) => ({
                profile: item,
                cloud_data: (allData || []).find((entry) => entry.user_id === item.id) || null
              }));
              exportData(combined, "users-full-export", "json");
            } catch (err) {
              alert(getUserErrorMessage(err, "Không thể xuất dữ liệu lúc này."));
            }
          },
          children: "📦 Xuất đầy đủ"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between n4-admin-summary-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-text-sm n4-admin-text-muted", children: [
        "Hiển thị ",
        paged.length,
        "/",
        filtered.length,
        " người dùng · Đã chọn ",
        selected.size
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", value: pageSize, onChange: (e) => {
        setPageSize(Number(e.target.value));
        setPage(0);
      }, style: { width: "auto", fontSize: "0.85em" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 25, children: "25/trang" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 50, children: "50/trang" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 100, children: "100/trang" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack n4-admin-gap-sm", children: [
      paged.map((item) => {
        var _a, _b, _c, _d, _e, _f;
        const noteValue = (_c = (_b = noteDrafts[item.id]) != null ? _b : (_a = userNotes[item.id]) == null ? void 0 : _a.note) != null ? _c : "";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row", style: { flexWrap: "wrap" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", flex: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: selected.has(item.id), onChange: () => toggleSelect(item.id) }),
            item.avatar_url && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.avatar_url, alt: "", style: { width: 32, height: 32, borderRadius: "50%" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-admin-row-main", style: { cursor: "pointer", textAlign: "left", border: 0, background: "transparent", color: "inherit" }, onClick: () => expandUser(item.id), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.display_name || "N/A" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-sm n4-admin-text-muted", children: item.email || item.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: [
                "XP: ",
                item.xp || 0,
                " · Streak: ",
                item.streak || 0,
                " · Quiz: ",
                item.total_quizzes || 0
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-admin-badge ${item.role === "blocked" ? "n4-admin-badge--blocked" : item.role === "admin" ? "n4-admin-badge--admin" : "n4-admin-badge--info"}`, children: item.role || "user" }),
            (((_d = userNotes[item.id]) == null ? void 0 : _d.tags) || []).map((tagKey) => {
              const tag = USER_TAGS.find((entry) => entry.key === tagKey);
              return tag ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: tag.label, style: { fontSize: "0.9em" }, children: tag.icon }, tagKey) : null;
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => onOpenChat == null ? void 0 : onOpenChat(item.id), title: "Nhắn tin", children: "💬" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => togglePin(item.id), title: pinnedUsers.includes(item.id) ? "Bỏ ghim" : "Ghim", children: pinnedUsers.includes(item.id) ? "📌" : "📍" }),
            item.role === "blocked" ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: () => unblockUser(item.id), children: "🔓 Mở khoá" }) : item.role !== "admin" ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: () => openBanDialog(item.id), children: "🚫" }) : null,
            item.role !== "blocked" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${item.role === "admin" ? "n4-btn-danger" : "n4-btn-primary"}`, onClick: () => toggleAdmin(item.id, item.role), children: item.role === "admin" ? "Hạ quyền" : "Thăng quản trị viên" })
          ] }),
          expandedUser === item.id && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-detail n4-admin-text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "📋 Hồ sơ" }),
              !editingProfile ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => setEditingProfile(buildEditingProfile(item, userData)), children: "✏️ Sửa nhanh" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight n4-admin-toolbar--end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: () => saveProfileEdits(item.id), children: "💾 Lưu" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => setEditingProfile(null), children: "Hủy" })
              ] })
            ] }),
            !editingProfile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-grid", style: { marginTop: 8 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
                "📊 XP: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.xp || 0 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
                "🏆 Cấp độ: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.level || 1 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
                "🔥 Chuỗi: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.streak || 0 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
                "📝 Lượt làm bài: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.total_quizzes || 0 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
                "✅ Trả lời đúng: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.total_correct || 0 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
                "🪙 Xu: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ((_e = userData == null ? void 0 : userData.learning) == null ? void 0 : _e.coins) || 0 })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-grid", style: { marginTop: 8 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "XP" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", value: editingProfile.xp, onChange: (e) => setEditingProfile((prev) => ({ ...prev, xp: e.target.value })) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "Cấp độ" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", value: editingProfile.level, onChange: (e) => setEditingProfile((prev) => ({ ...prev, level: e.target.value })) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "Chuỗi" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", value: editingProfile.streak, onChange: (e) => setEditingProfile((prev) => ({ ...prev, streak: e.target.value })) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "Xu" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", min: "0", value: editingProfile.coins, onChange: (e) => setEditingProfile((prev) => ({ ...prev, coins: e.target.value })) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "Tổng Quiz" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", value: editingProfile.total_quizzes, onChange: (e) => setEditingProfile((prev) => ({ ...prev, total_quizzes: e.target.value })) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-form-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-form-label", children: "Tổng đúng" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", type: "number", value: editingProfile.total_correct, onChange: (e) => setEditingProfile((prev) => ({ ...prev, total_correct: e.target.value })) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-grid", style: { marginTop: 12 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
                "📅 Tham gia: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.joined_at ? new Date(item.joined_at).toLocaleDateString("vi") : "Không có" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
                "⏰ Hoạt động: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.last_active_at ? new Date(item.last_active_at).toLocaleString("vi") : "Không có" })
              ] }),
              item.total_quizzes > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
                "📈 Độ chính xác: ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                  Math.round(item.total_correct / item.total_quizzes * 100),
                  "%"
                ] })
              ] })
            ] }),
            item.ban_reason && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-field-error", children: [
              "🚫 Lý do chặn: ",
              item.ban_reason
            ] }),
            item.ban_until && new Date(item.ban_until) > /* @__PURE__ */ new Date() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-field-error", children: [
              "⏰ Tự mở khóa: ",
              new Date(item.ban_until).toLocaleString("vi")
            ] }),
            userDataLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "⏳ Đang tải dữ liệu cloud..." }),
            !userDataLoading && userData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", style: { marginTop: 12 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "☁️ Dữ liệu đám mây" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: () => openEditorScene(item.id), children: "📝 Mở trình chỉnh sửa đầy đủ" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-grid", style: { marginTop: 8 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
                  "📚 Mục đánh dấu: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: userData.bookmarks ? Object.keys(userData.bookmarks).length : 0 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
                  "🔄 SRS: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: userData.srs ? Object.keys(userData.srs).length : 0 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
                  "🎮 Thống kê luyện tập: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: userData.trainer_stats ? Object.keys(userData.trainer_stats).length : 0 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
                  "🕐 Lần đồng bộ cuối: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: userData.updated_at ? new Date(userData.updated_at).toLocaleString("vi") : "Không có" })
                ] })
              ] })
            ] }),
            !userDataLoading && !userData && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-sm n4-admin-text-muted", style: { marginTop: 8 }, children: "☁️ Chưa có dữ liệu cloud (user chưa sync)." }),
            userDevices.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 12 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontWeight: 600, marginBottom: 4 }, children: [
                "📱 Thiết bị (",
                userDevices.length,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-list", children: userDevices.map((device) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-list-item n4-admin-list-item--tight", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                device.device_name || device.browser || "Không rõ",
                " · ",
                device.os || "—",
                " · ",
                device.last_active_at ? new Date(device.last_active_at).toLocaleString("vi") : "—"
              ] }) }, device.id)) })
            ] }),
            (banHistory[item.id] || []).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { style: { marginTop: 12 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { style: { cursor: "pointer", fontWeight: 600 }, children: [
                "🚫 Lịch sử chặn (",
                banHistory[item.id].length,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-list", style: { marginTop: 8 }, children: banHistory[item.id].map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-list-item n4-admin-list-item--tight", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                new Date(entry.bannedAt).toLocaleString("vi"),
                " · ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: entry.duration }),
                entry.reason ? ` · ${entry.reason}` : ""
              ] }) }, index)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", style: { marginTop: 12 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🏷️ Tags & Ghi chú" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight", style: { marginTop: 8 }, children: USER_TAGS.map((tag) => {
                var _a2;
                const active = (((_a2 = userNotes[item.id]) == null ? void 0 : _a2.tags) || []).includes(tag.key);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => toggleUserTag(item.id, tag.key),
                    style: {
                      padding: "3px 10px",
                      borderRadius: 12,
                      border: `1.5px solid ${active ? tag.color : "var(--n4-border)"}`,
                      background: active ? `${tag.color}22` : "transparent",
                      cursor: "pointer",
                      fontSize: "0.82em",
                      opacity: active ? 1 : 0.65,
                      transition: "all .15s"
                    },
                    children: [
                      tag.icon,
                      " ",
                      tag.label
                    ]
                  },
                  tag.key
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: "n4-input",
                    placeholder: "Ghi chú...",
                    value: noteValue,
                    onChange: (e) => setNoteDrafts((prev) => ({ ...prev, [item.id]: e.target.value })),
                    style: { flex: 1 }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: () => {
                  var _a2;
                  return saveUserNote(item.id, noteValue, ((_a2 = userNotes[item.id]) == null ? void 0 : _a2.tags) || []);
                }, children: "💾" })
              ] }),
              ((_f = userNotes[item.id]) == null ? void 0 : _f.note) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-text-xs n4-admin-text-muted", style: { fontStyle: "italic" }, children: [
                "📝 ",
                userNotes[item.id].note
              ] })
            ] })
          ] })
        ] }, item.id);
      }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Không tìm thấy người dùng." })
    ] }),
    totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--center", style: { marginTop: 12 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", disabled: currentPage === 0, onClick: () => setPage(0), children: "⟨⟨" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", disabled: currentPage === 0, onClick: () => setPage(currentPage - 1), children: "⟨" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-admin-text-sm n4-admin-text-muted", children: [
        "Trang ",
        currentPage + 1,
        "/",
        totalPages
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", disabled: currentPage >= totalPages - 1, onClick: () => setPage(currentPage + 1), children: "⟩" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", disabled: currentPage >= totalPages - 1, onClick: () => setPage(totalPages - 1), children: "⟩⟩" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BulkMessageDialog,
      {
        open: bulkMessageOpen,
        selectedCount: selected.size,
        onSend: sendBulk,
        onClose: () => setBulkMessageOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BanDialog,
      {
        target: banDialog,
        onConfirm: confirmBan,
        onClose: () => setBanDialog(null)
      }
    )
  ] });
}
const PRIORITY_ACCENTS = {
  critical: "var(--n4-neon-red)",
  high: "var(--n4-neon-orange)",
  medium: "var(--n4-neon-gold)",
  low: "var(--n4-neon-green)"
};
const SOURCE_META = {
  bug: { label: "🐛 Bug", className: "n4-admin-badge--critical" },
  content: { label: "⚠️ Content", className: "n4-admin-badge--high" }
};
const STATUS_BADGE_CLASS = {
  open: "n4-admin-badge--blocked",
  pending: "n4-admin-badge--high",
  in_progress: "n4-admin-badge--admin",
  resolved: "n4-admin-badge--info",
  closed: "n4-admin-badge--low"
};
const STATUS_OPTIONS = ["open", "pending", "in_progress", "resolved", "closed"];
function getIssueKey(issue) {
  return `${issue._source}:${issue.id}`;
}
function getIssueTable(issue) {
  return issue._source === "bug" ? "bug_reports" : "content_errors";
}
function IssuesPanel({ search }) {
  const user = useAppStore((s) => s.user);
  const [issues, setIssues] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [sourceFilter, setSourceFilter] = reactExports.useState("all");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [priorityFilter, setPriorityFilter] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("newest");
  const [selected, setSelected] = reactExports.useState(/* @__PURE__ */ new Set());
  const [expanded, setExpanded] = reactExports.useState(null);
  const load = reactExports.useCallback(async () => {
    setLoading(true);
    try {
      const fetchWithProfiles = async (table, userCol) => {
        const { data, error } = await supabase.from(table).select("*").order("created_at", { ascending: false });
        if (error) {
          console.error(`Error fetching ${table}:`, error);
          return [];
        }
        const records = data || [];
        const userIds = [...new Set(records.map((r) => r[userCol]).filter(Boolean))];
        if (userIds.length > 0) {
          const { data: profiles } = await supabase.from("user_profiles").select("id, display_name, email").in("id", userIds);
          const profileMap = {};
          (profiles || []).forEach((p) => profileMap[p.id] = p);
          records.forEach((r) => {
            r.user_profiles = profileMap[r[userCol]] || null;
          });
        }
        return records;
      };
      const [bugs, errors] = await Promise.all([
        fetchWithProfiles("bug_reports", "user_id"),
        fetchWithProfiles("content_errors", "reporter_id")
      ]);
      setIssues([
        ...bugs.map((issue) => ({ ...issue, _source: "bug", _priority: issue.priority || "medium" })),
        ...errors.map((issue) => ({ ...issue, _source: "content", _priority: issue.priority || "low" }))
      ]);
    } catch (err) {
      console.error("Failed to load issues:", err);
      setIssues([]);
    } finally {
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  const updateStatus = async (issue, newStatus) => {
    try {
      const table = getIssueTable(issue);
      await supabase.from(table).update({ status: newStatus, reviewed_at: (/* @__PURE__ */ new Date()).toISOString(), reviewed_by: user.id }).eq("id", issue.id);
      logAdminAction(user.id, "update_issue_status", table, {
        issueId: issue.id,
        oldStatus: issue.status,
        newStatus
      });
      load();
    } catch (err) {
      alert(getUserErrorMessage(err));
    }
  };
  const deleteIssue = async (issue) => {
    if (!confirm("Xóa issue này?")) return;
    try {
      const table = getIssueTable(issue);
      await supabase.from(table).delete().eq("id", issue.id);
      logAdminAction(user.id, "delete_issue", table, { issueId: issue.id });
      load();
    } catch (err) {
      alert(getUserErrorMessage(err));
    }
  };
  const bulkUpdateStatus = async (newStatus) => {
    if (selected.size === 0) return;
    try {
      const selectedIssues = Array.from(selected).map((key) => issues.find((issue) => getIssueKey(issue) === key)).filter(Boolean);
      await Promise.all(
        selectedIssues.map(
          (issue) => supabase.from(getIssueTable(issue)).update({ status: newStatus, reviewed_at: (/* @__PURE__ */ new Date()).toISOString(), reviewed_by: user.id }).eq("id", issue.id)
        )
      );
      logAdminAction(user.id, "bulk_update_issues", "issues", { count: selectedIssues.length, newStatus });
      setSelected(/* @__PURE__ */ new Set());
      load();
    } catch (err) {
      alert(getUserErrorMessage(err));
    }
  };
  const bulkDelete = async () => {
    if (selected.size === 0 || !confirm(`Xóa ${selected.size} issues?`)) return;
    try {
      const selectedIssues = Array.from(selected).map((key) => issues.find((issue) => getIssueKey(issue) === key)).filter(Boolean);
      await Promise.all(
        selectedIssues.map((issue) => supabase.from(getIssueTable(issue)).delete().eq("id", issue.id))
      );
      logAdminAction(user.id, "bulk_delete_issues", "issues", { count: selectedIssues.length });
      setSelected(/* @__PURE__ */ new Set());
      load();
    } catch (err) {
      alert(getUserErrorMessage(err));
    }
  };
  const toggleSelect = (issueKey) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(issueKey)) {
        next.delete(issueKey);
      } else {
        next.add(issueKey);
      }
      return next;
    });
  };
  const q = (search || "").toLowerCase();
  let filtered = issues;
  if (sourceFilter !== "all") filtered = filtered.filter((issue) => issue._source === sourceFilter);
  if (statusFilter !== "all") filtered = filtered.filter((issue) => (issue.status || "open") === statusFilter);
  if (priorityFilter !== "all") filtered = filtered.filter((issue) => issue._priority === priorityFilter);
  if (q) {
    filtered = filtered.filter(
      (issue) => {
        var _a;
        return (issue.title || "").toLowerCase().includes(q) || (issue.description || "").toLowerCase().includes(q) || (((_a = issue.user_profiles) == null ? void 0 : _a.display_name) || "").toLowerCase().includes(q);
      }
    );
  }
  if (sortBy === "oldest") {
    filtered = [...filtered].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  } else if (sortBy === "priority") {
    const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    filtered = [...filtered].sort((a, b) => (priorityOrder[a._priority] || 2) - (priorityOrder[b._priority] || 2));
  }
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-loading", children: "⏳ Đang tải..." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", value: sourceFilter, onChange: (e) => setSourceFilter(e.target.value), style: { width: "auto" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Tất cả nguồn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bug", children: "🐛 Bug Reports" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "content", children: "⚠️ Content Errors" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", value: statusFilter, onChange: (e) => setStatusFilter(e.target.value), style: { width: "auto" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Tất cả trạng thái" }),
        STATUS_OPTIONS.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: status, children: status }, status))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", value: priorityFilter, onChange: (e) => setPriorityFilter(e.target.value), style: { width: "auto" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Tất cả mức độ" }),
        Object.keys(PRIORITY_ACCENTS).map((priority) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: priority, children: priority }, priority))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", value: sortBy, onChange: (e) => setSortBy(e.target.value), style: { width: "auto" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "newest", children: "Mới nhất" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "oldest", children: "Cũ nhất" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "priority", children: "Mức độ" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: 1 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => exportData(filtered, "issues", "csv"), children: "📥 CSV" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => exportData(filtered, "issues", "json"), children: "📥 JSON" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: load, children: "🔄" })
    ] }),
    selected.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-batch-bar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.85em" }, children: [
        "Đã chọn: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selected.size })
      ] }),
      STATUS_OPTIONS.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => bulkUpdateStatus(status), children: [
        "→ ",
        status
      ] }, status)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: bulkDelete, children: "🗑️ Xóa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => setSelected(/* @__PURE__ */ new Set()), children: "✕ Bỏ chọn" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-admin-text-sm n4-admin-text-muted", style: { margin: "8px 0" }, children: [
      filtered.length,
      " vấn đề (",
      issues.filter((issue) => issue._source === "bug").length,
      " lỗi, ",
      issues.filter((issue) => issue._source === "content").length,
      " lỗi nội dung)"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack n4-admin-gap-sm", children: [
      filtered.map((issue) => {
        var _a, _b;
        const issueKey = getIssueKey(issue);
        const sourceMeta = SOURCE_META[issue._source] || SOURCE_META.content;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "n4-admin-row",
            style: { flexWrap: "wrap", borderLeft: `4px solid ${PRIORITY_ACCENTS[issue._priority] || "var(--n4-border)"}` },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: selected.has(issueKey), onChange: () => toggleSelect(issueKey) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-admin-badge ${sourceMeta.className}`, children: sourceMeta.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-admin-row-main", style: { flex: 1, minWidth: 0, cursor: "pointer", textAlign: "left", border: 0, background: "transparent", color: "inherit" }, onClick: () => setExpanded(expanded === issueKey ? null : issueKey), "aria-expanded": expanded === issueKey, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { fontSize: "0.9em" }, children: issue.title || ((_a = issue.description) == null ? void 0 : _a.slice(0, 60)) || "No title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.75em", color: "var(--n4-text-muted)" }, children: [
                    ((_b = issue.user_profiles) == null ? void 0 : _b.display_name) || "Anonymous",
                    " · ",
                    formatRelativeTime(issue.created_at)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-admin-badge ${STATUS_BADGE_CLASS[issue.status || "open"] || "n4-admin-badge--blocked"}`, children: issue.status || "open" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row-actions", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "n4-input", value: issue.status || "open", onChange: (e) => updateStatus(issue, e.target.value), style: { width: "auto", fontSize: "0.8em" }, children: STATUS_OPTIONS.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: status, children: status }, status)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => safeCopy(JSON.stringify(issue, null, 2)), title: "Copy JSON", children: "📋" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: () => deleteIssue(issue), title: "Xóa", children: "🗑️" })
              ] }),
              expanded === issueKey && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-detail", style: { width: "100%", marginTop: 8, fontSize: "0.85em" }, children: [
                issue.description && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 8 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mô tả:" }),
                  " ",
                  issue.description
                ] }),
                issue.page && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "📄 Trang: ",
                  issue.page
                ] }),
                issue.section && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "📂 Section: ",
                  issue.section
                ] }),
                issue.item_id && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "🆔 Item: ",
                  issue.item_id
                ] }),
                issue.error_type && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "⚡ Loại: ",
                  issue.error_type
                ] }),
                issue.suggested_fix && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "💡 Gợi ý sửa: ",
                  issue.suggested_fix
                ] }),
                issue.screenshot_url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: issue.screenshot_url, alt: "screenshot", style: { maxWidth: "100%", maxHeight: 200, marginTop: 8, borderRadius: 6 } }) }),
                issue.metadata && /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { style: { marginTop: 8 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { style: { cursor: "pointer" }, children: "📋 Metadata" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "n4-admin-scroll-list", style: { fontSize: "0.8em", padding: 8, background: "var(--n4-bg-primary)", color: "var(--n4-text-primary)", border: "1px solid var(--n4-border)", borderRadius: 6, overflow: "auto", maxHeight: 200 }, children: JSON.stringify(issue.metadata, null, 2) })
                ] })
              ] })
            ]
          },
          issueKey
        );
      }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Không có issues nào." })
    ] })
  ] });
}
const ANNOUNCEMENT_TYPE_CLASS = {
  info: "n4-admin-badge--info",
  warning: "n4-admin-badge--high",
  success: "n4-admin-badge--low",
  update: "n4-admin-badge--admin"
};
function AnnouncementsPanel({ search }) {
  const user = useAppStore((s) => s.user);
  const [announcements, setAnnouncements] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [creating, setCreating] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({ title: "", content: "", type: "info", scheduled_at: "", pinned: false });
  const load = reactExports.useCallback(async () => {
    setLoading(true);
    try {
      const d = await getAnnouncements();
      setAnnouncements(d || []);
    } catch (e) {
      setAnnouncements([]);
    } finally {
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  const handleSave = async () => {
    if (!form.title.trim() || !form.content.trim()) return;
    try {
      const payload = { title: form.title, content: form.content, type: form.type, pinned: form.pinned };
      if (form.scheduled_at) payload.scheduled_at = new Date(form.scheduled_at).toISOString();
      if (editing) {
        await updateAnnouncement(editing, payload);
        logAdminAction(user.id, "update_announcement", "announcements", { id: editing });
      } else {
        await createAnnouncement(user.id, payload);
        logAdminAction(user.id, "create_announcement", "announcements", { title: form.title });
      }
      setForm({ title: "", content: "", type: "info", scheduled_at: "", pinned: false });
      setCreating(false);
      setEditing(null);
      load();
    } catch (err) {
      alert(getUserErrorMessage(err));
    }
  };
  const handleDelete = async (id) => {
    if (!confirm("Xóa thông báo này?")) return;
    try {
      await deleteAnnouncement(id);
      logAdminAction(user.id, "delete_announcement", "announcements", { id });
      load();
    } catch (err) {
      alert(getUserErrorMessage(err));
    }
  };
  const startEdit = (a) => {
    setForm({ title: a.title, content: a.content, type: a.type || "info", scheduled_at: a.scheduled_at ? new Date(a.scheduled_at).toISOString().slice(0, 16) : "", pinned: a.pinned || false });
    setEditing(a.id);
    setCreating(true);
  };
  const q = (search || "").toLowerCase();
  const filtered = announcements.filter(
    (a) => !q || (a.title || "").toLowerCase().includes(q) || (a.content || "").toLowerCase().includes(q)
  ).sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-loading", children: "⏳ Đang tải..." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: () => {
        setCreating(!creating);
        setEditing(null);
        setForm({ title: "", content: "", type: "info", scheduled_at: "", pinned: false });
      }, children: creating ? "✕ Đóng" : "➕ Tạo mới" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: 1 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: load, children: "🔄" })
    ] }),
    creating && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", style: { border: "2px solid var(--n4-accent)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: editing ? "✏️ Sửa thông báo" : "➕ Thông báo mới" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", placeholder: "Tiêu đề...", value: form.title, onChange: (e) => setForm((f) => ({ ...f, title: e.target.value })), style: { width: "100%", marginBottom: 8 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "n4-input", rows: 3, placeholder: "Nội dung...", value: form.content, onChange: (e) => setForm((f) => ({ ...f, content: e.target.value })), style: { width: "100%", marginBottom: 8, resize: "vertical" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", value: form.type, onChange: (e) => setForm((f) => ({ ...f, type: e.target.value })), style: { width: "auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "info", children: "ℹ️ Info" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "warning", children: "⚠️ Warning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "success", children: "✅ Success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "update", children: "🆕 Update" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: "0.85em" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: form.pinned, onChange: (e) => setForm((f) => ({ ...f, pinned: e.target.checked })) }),
          "📌 Ghim"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 2 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "announcement-scheduled-at", style: { fontSize: "0.7em", color: "var(--n4-text-muted)" }, children: "Hẹn giờ đăng (tùy chọn)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "announcement-scheduled-at", className: "n4-input", type: "datetime-local", value: form.scheduled_at, onChange: (e) => setForm((f) => ({ ...f, scheduled_at: e.target.value })), style: { width: "100%", maxWidth: 240, fontSize: "0.85em" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: 1 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: handleSave, children: [
          "💾 ",
          editing ? "Cập nhật" : "Tạo"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => {
          setCreating(false);
          setEditing(null);
        }, children: "Hủy" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack n4-admin-gap-sm", children: [
      filtered.map((a) => {
        var _a, _b;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row", style: { justifyContent: "space-between" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row-main", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
              a.pinned && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: "Đã ghim", children: "📌" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-admin-badge ${ANNOUNCEMENT_TYPE_CLASS[a.type || "info"] || "n4-admin-badge--info"}`, children: a.type || "info" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: a.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85em", color: "var(--n4-text-muted)", marginTop: 2 }, children: [
              (_a = a.content) == null ? void 0 : _a.slice(0, 120),
              (((_b = a.content) == null ? void 0 : _b.length) || 0) > 120 ? "..." : ""
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.75em", color: "var(--n4-text-muted)", marginTop: 2 }, children: [
              a.created_at ? new Date(a.created_at).toLocaleString("vi") : "",
              a.scheduled_at && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { marginLeft: 8, color: "var(--n4-warning)" }, children: [
                "⏰ Hẹn: ",
                new Date(a.scheduled_at).toLocaleString("vi")
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row-actions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => {
              updateAnnouncement(a.id, { pinned: !a.pinned }).then(load);
            }, title: a.pinned ? "Bỏ ghim" : "Ghim", children: a.pinned ? "📌" : "📍" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => startEdit(a), children: "✏️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: () => handleDelete(a.id), children: "🗑️" })
          ] })
        ] }, a.id);
      }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Chưa có thông báo nào." })
    ] })
  ] });
}
const DEFAULT_FORM = {
  title: "",
  description: "",
  quiz_type: "vocab",
  game_mode: "",
  question_count: 10,
  time_limit_minutes: 5,
  difficulty: "normal",
  sections: "",
  reward_xp: 50,
  allow_retry: true,
  show_answers: true,
  starts_at: "",
  ends_at: ""
};
const QUIZ_TYPE_OPTIONS = [
  { value: "vocab", label: "🗡️ Từ vựng" },
  { value: "kanji", label: "🏯 Kanji" },
  { value: "grammar", label: "⚔️ Ngữ pháp" },
  { value: "listening", label: "🎧 Nghe" },
  { value: "reading", label: "📖 Đọc hiểu" },
  { value: "mixed", label: "🎯 Tổng hợp" },
  { value: "speed", label: "⚡ Tốc độ" },
  { value: "boss", label: "🐉 Đấu trùm" },
  { value: "puzzle", label: "🧩 Câu đố" },
  { value: "mind", label: "🧠 Thử thách trí não" }
];
const GAME_MODE_OPTIONS = {
  vocab: [
    { value: "fill-blank", label: "Điền chỗ trống" },
    { value: "quiz", label: "Trắc nghiệm" },
    { value: "true-false", label: "Đúng/Sai" },
    { value: "match", label: "Ghép đôi" },
    { value: "listening", label: "Nghe" },
    { value: "speed", label: "Tốc độ" },
    { value: "flashcard", label: "Thẻ lật" }
  ],
  kanji: [
    { value: "flashcard", label: "Thẻ lật" },
    { value: "quiz", label: "Trắc nghiệm" },
    { value: "match", label: "Ghép đôi" },
    { value: "writing", label: "Viết" },
    { value: "deep", label: "Phân tích" },
    { value: "speed", label: "Tốc độ" }
  ],
  grammar: [
    { value: "quiz", label: "Trắc nghiệm" },
    { value: "true-false", label: "Đúng/Sai" },
    { value: "particles", label: "Trợ từ" },
    { value: "scramble", label: "Sắp xếp câu" },
    { value: "flashcard", label: "Thẻ lật" }
  ],
  listening: [
    { value: "dictation", label: "Nghe chép" },
    { value: "drills", label: "Luyện tập" },
    { value: "comprehension", label: "Nghe hiểu" }
  ],
  reading: [
    { value: "passages", label: "Bài đọc" },
    { value: "real-world", label: "Thực tế" },
    { value: "stories", label: "Truyện" }
  ],
  boss: [
    { value: "easy", label: "Dễ" },
    { value: "normal", label: "Thường" },
    { value: "hard", label: "Khó" },
    { value: "nightmare", label: "Ác mộng" }
  ],
  puzzle: [
    { value: "crossword", label: "Ô chữ" },
    { value: "wordsearch", label: "Tìm từ" },
    { value: "hangman", label: "Treo cổ" },
    { value: "speed-type", label: "Gõ nhanh" }
  ],
  mind: [
    { value: "memory", label: "Trí nhớ" },
    { value: "pattern", label: "Mẫu hình" },
    { value: "speed", label: "Tốc độ" },
    { value: "association", label: "Liên tưởng" }
  ]
};
const DIFFICULTY_OPTIONS = [
  { value: "easy", label: "🟢 Dễ" },
  { value: "normal", label: "🟡 Thường" },
  { value: "hard", label: "🟠 Khó" },
  { value: "jlpt", label: "🔴 JLPT" }
];
const STATUS_META = {
  active: { label: "Đang chạy", badge: "n4-admin-badge--low" },
  upcoming: { label: "Sắp mở", badge: "n4-admin-badge--info" },
  ended: { label: "Đã kết thúc", badge: "n4-admin-badge--high" }
};
function countEntries(sections, matcher) {
  return (sections || []).reduce((total, section) => {
    return total + (section.entries || []).reduce((count, entry) => count + (matcher(entry) ? 1 : 0), 0);
  }, 0);
}
function getContentPoolSizes(vocab, kanji, grammar, quizType) {
  const pools = {};
  const activeTypes = quizType === "mixed" ? ["vocab", "kanji", "grammar"] : [quizType];
  if (activeTypes.includes("vocab")) {
    pools["Từ vựng"] = countEntries(vocab, (entry) => entry.word && entry.meaning);
  }
  if (activeTypes.includes("kanji")) {
    pools["Kanji"] = countEntries(kanji, (entry) => entry.kanji && (entry.title || entry.meaning));
  }
  if (activeTypes.includes("grammar")) {
    pools["Ngữ pháp"] = (grammar || []).reduce((total, section) => {
      return total + (section.patterns || section.entries || []).reduce((count, entry) => {
        return count + ((entry.pattern || entry.title) && (entry.meaning || entry.content) ? 1 : 0);
      }, 0);
    }, 0);
  }
  return pools;
}
function formatDateTimeLocal(value) {
  if (!value) return "";
  return new Date(value).toISOString().slice(0, 16);
}
function buildDefaultSchedule() {
  const now = /* @__PURE__ */ new Date();
  const later = new Date(now.getTime() + 7 * 864e5);
  return {
    starts_at: formatDateTimeLocal(now),
    ends_at: formatDateTimeLocal(later)
  };
}
function buildFormFromChallenge(challenge) {
  var _a;
  const config = challenge.quiz_config || {};
  return {
    title: `${challenge.title} (copy)`,
    description: challenge.description || "",
    quiz_type: config.quiz_type || "vocab",
    game_mode: config.game_mode || "",
    question_count: config.question_count || 10,
    time_limit_minutes: config.time_limit_minutes || 5,
    difficulty: config.difficulty || "normal",
    sections: ((_a = config.sections) == null ? void 0 : _a.join(",")) || "",
    reward_xp: config.reward_xp || 50,
    allow_retry: config.allow_retry !== false,
    show_answers: config.show_answers !== false,
    ...buildDefaultSchedule()
  };
}
function getChallengeStatus(challenge) {
  const now = Date.now();
  const startsAt = challenge.starts_at ? new Date(challenge.starts_at).getTime() : 0;
  const endsAt = challenge.ends_at ? new Date(challenge.ends_at).getTime() : 0;
  if (startsAt > now) return "upcoming";
  if (endsAt && endsAt < now) return "ended";
  return "active";
}
function ChallengeEditorDialog({ open, form, poolSizes, onChange, onClose, onSave }) {
  if (!open) return null;
  const modeOptions = GAME_MODE_OPTIONS[form.quiz_type] || [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminModal, { open, onClose, wide: true, labelledBy: "challenge-editor-title", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { id: "challenge-editor-title", className: "n4-admin-modal-title", children: "🏆 Thử thách mới" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-sm n4-admin-text-muted", children: "Cấu hình challenge gọn theo quiz type, mode, thời gian và phần thưởng." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: onClose, "aria-label": "Đóng", children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack", children: [
      Object.keys(poolSizes).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-summary-grid", children: Object.entries(poolSizes).map(([label, count]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: [
          "Pool ",
          label
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          count,
          " mục"
        ] })
      ] }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", htmlFor: "challenge-title", children: "Tên challenge" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "challenge-title", className: "n4-input", value: form.title, onChange: (event) => onChange("title", event.target.value), placeholder: "Tên challenge" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", htmlFor: "challenge-description", children: "Mô tả" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "challenge-description", className: "n4-input", rows: 3, value: form.description, onChange: (event) => onChange("description", event.target.value), placeholder: "Mô tả ngắn cho challenge", style: { width: "100%" } })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", htmlFor: "challenge-quiz-type", children: "Loại quiz" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { id: "challenge-quiz-type", className: "n4-input", value: form.quiz_type, onChange: (event) => onChange("quiz_type", event.target.value), children: QUIZ_TYPE_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: option.label }, option.value)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", htmlFor: "challenge-game-mode", children: "Chế độ chơi" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "challenge-game-mode", className: "n4-input", value: form.game_mode, onChange: (event) => onChange("game_mode", event.target.value), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Mặc định" }),
            modeOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: option.label }, option.value))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", htmlFor: "challenge-difficulty", children: "Độ khó" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { id: "challenge-difficulty", className: "n4-input", value: form.difficulty, onChange: (event) => onChange("difficulty", event.target.value), children: DIFFICULTY_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: option.label }, option.value)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", htmlFor: "challenge-sections", children: "Sections" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "challenge-sections", className: "n4-input", value: form.sections, onChange: (event) => onChange("sections", event.target.value), placeholder: "1,2,3 hoặc để trống" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", htmlFor: "challenge-question-count", children: "Số câu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "challenge-question-count", className: "n4-input", type: "number", min: 5, max: 100, value: form.question_count, onChange: (event) => onChange("question_count", event.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", htmlFor: "challenge-time-limit", children: "Thời gian (phút)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "challenge-time-limit", className: "n4-input", type: "number", min: 1, max: 60, value: form.time_limit_minutes, onChange: (event) => onChange("time_limit_minutes", event.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", htmlFor: "challenge-reward-xp", children: "XP thưởng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "challenge-reward-xp", className: "n4-input", type: "number", min: 0, max: 500, step: 10, value: form.reward_xp, onChange: (event) => onChange("reward_xp", event.target.value) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-radio-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: form.allow_retry, onChange: (event) => onChange("allow_retry", event.target.checked) }),
          "Cho phép làm lại"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-admin-radio-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: form.show_answers, onChange: (event) => onChange("show_answers", event.target.checked) }),
          "Hiện đáp án sau khi sai"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", htmlFor: "challenge-starts-at", children: "Bắt đầu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "challenge-starts-at", className: "n4-input", type: "datetime-local", value: form.starts_at, onChange: (event) => onChange("starts_at", event.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "n4-admin-form-label", htmlFor: "challenge-ends-at", children: "Kết thúc" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "challenge-ends-at", className: "n4-input", type: "datetime-local", value: form.ends_at, onChange: (event) => onChange("ends_at", event.target.value) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "n4-btn n4-btn-sm n4-btn-ghost",
            onClick: () => {
              const schedule = buildDefaultSchedule();
              onChange("starts_at", form.starts_at || schedule.starts_at);
              onChange("ends_at", form.ends_at || schedule.ends_at);
            },
            children: "⏰ Mặc định 7 ngày"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight n4-admin-toolbar--end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: onClose, children: "Hủy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: onSave, children: "💾 Tạo challenge" })
        ] })
      ] })
    ] })
  ] });
}
function ChallengeLeaderboardDialog({ leaderboard, onClose }) {
  if (!leaderboard) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminModal, { open: !!leaderboard, onClose, labelledBy: "challenge-lb-title", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { id: "challenge-lb-title", className: "n4-admin-modal-title", children: "🏅 Bảng xếp hạng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: onClose, "aria-label": "Đóng", children: "✕" })
    ] }),
    leaderboard.data.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Chưa có ai tham gia challenge này." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-list", children: leaderboard.data.map((entry, index) => {
      var _a;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-row-main", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          index + 1,
          ". ",
          ((_a = entry.user_profiles) == null ? void 0 : _a.display_name) || "User"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-text-sm n4-admin-text-muted", children: [
          entry.score,
          "/",
          entry.total,
          " · ",
          entry.time_seconds,
          "s"
        ] })
      ] }, entry.id);
    }) })
  ] });
}
function ChallengeCard({ challenge, onClone, onDelete, onLeaderboard }) {
  var _a;
  const status = getChallengeStatus(challenge);
  const statusMeta = STATUS_META[status];
  const config = challenge.quiz_config || {};
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "n4-admin-section n4-admin-stack", style: { margin: 0 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row-main", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          "🏆 ",
          challenge.title
        ] }),
        challenge.description && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-sm n4-admin-text-muted", style: { marginTop: 4 }, children: challenge.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-admin-badge ${statusMeta.badge}`, children: statusMeta.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-badge n4-admin-badge--info", children: config.quiz_type || "—" }),
        config.game_mode && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-tag", children: config.game_mode })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Cấu hình" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          config.question_count || "?",
          " câu · ",
          config.time_limit_minutes || "?",
          " phút"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Phần thưởng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: config.reward_xp ? `🎁 ${config.reward_xp} XP` : "Không có" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Sections" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ((_a = config.sections) == null ? void 0 : _a.length) ? `§${config.sections.join(",")}` : "Tất cả" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Lịch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          challenge.starts_at ? new Date(challenge.starts_at).toLocaleDateString("vi") : "Ngay",
          " → ",
          challenge.ends_at ? new Date(challenge.ends_at).toLocaleDateString("vi") : "—"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight n4-admin-toolbar--end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => onLeaderboard(challenge.id), children: "🏅 Xem BXH" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => onClone(challenge), children: "📋 Clone" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: () => onDelete(challenge.id), children: "🗑️ Xóa" })
    ] })
  ] });
}
function ChallengesPanel({ search }) {
  const user = useAppStore((s) => s.user);
  const { vocab = [], kanji = [], grammar = [] } = useDataStore(useShallow((state) => ({
    vocab: state.vocab,
    kanji: state.kanji,
    grammar: state.grammar
  })));
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [creating, setCreating] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState(DEFAULT_FORM);
  const [leaderboard, setLeaderboard] = reactExports.useState(null);
  const load = reactExports.useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllChallenges();
      setItems(data || []);
    } catch (e) {
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  const updateForm = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
      ...key === "quiz_type" ? { game_mode: "" } : null
    }));
  };
  const resetForm = () => {
    setForm(DEFAULT_FORM);
    setCreating(false);
  };
  const handleCreate = async () => {
    const missing = [];
    if (!form.title.trim()) missing.push("Tên challenge");
    if (!form.ends_at) missing.push("Ngày kết thúc");
    if (missing.length) {
      alert("⚠️ Thiếu thông tin: " + missing.join(", "));
      return;
    }
    const startsAt = form.starts_at ? new Date(form.starts_at).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
    const endsAt = new Date(form.ends_at).toISOString();
    if (new Date(endsAt).getTime() <= new Date(startsAt).getTime()) {
      alert("⚠️ Thời gian kết thúc phải sau thời gian bắt đầu.");
      return;
    }
    const poolSizes2 = getContentPoolSizes(vocab, kanji, grammar, form.quiz_type);
    const insufficient = Object.entries(poolSizes2).filter(([, count]) => count < 4);
    if (insufficient.length > 0) {
      const detail = insufficient.map(([label, count]) => `${label}: ${count} mục`).join(", ");
      alert(`⚠️ Không đủ dữ liệu để tạo câu hỏi!

${detail}

Cần ít nhất 4 mục cho mỗi loại.`);
      return;
    }
    const quizConfig = {
      quiz_type: form.quiz_type,
      game_mode: form.game_mode || null,
      question_count: Number(form.question_count),
      time_limit_minutes: Number(form.time_limit_minutes),
      difficulty: form.difficulty,
      sections: form.sections ? form.sections.split(",").map((section) => section.trim()).filter(Boolean) : null,
      reward_xp: Number(form.reward_xp) || 50,
      allow_retry: form.allow_retry,
      show_answers: form.show_answers
    };
    await createChallenge(user.id, {
      title: form.title.trim(),
      description: form.description.trim(),
      quizConfig,
      startsAt,
      endsAt
    });
    logAdminAction(user.id, "challenge_create", "challenge", {
      title: form.title.trim(),
      quizType: form.quiz_type,
      questionCount: Number(form.question_count)
    });
    resetForm();
    load();
  };
  const handleDelete = async (challengeId) => {
    if (!confirm("Xóa challenge này? Hành động này không thể hoàn tác.")) return;
    await deleteChallenge(challengeId);
    logAdminAction(user.id, "challenge_delete", "challenge", { challengeId });
    load();
  };
  const handleClone = (challenge) => {
    setForm(buildFormFromChallenge(challenge));
    setCreating(true);
  };
  const showLeaderboard = async (challengeId) => {
    try {
      const data = await getChallengeLeaderboard(challengeId);
      setLeaderboard({ challengeId, data: data || [] });
    } catch (error) {
      console.error("Leaderboard load error:", error);
      setLeaderboard({ challengeId, data: [] });
    }
  };
  const q = (search || "").toLowerCase();
  const filtered = q ? items.filter((challenge) => {
    const title = (challenge.title || "").toLowerCase();
    const description = (challenge.description || "").toLowerCase();
    return title.includes(q) || description.includes(q);
  }) : items;
  const stats = items.reduce((acc, challenge) => {
    acc[getChallengeStatus(challenge)] += 1;
    return acc;
  }, { active: 0, upcoming: 0, ended: 0 });
  const poolSizes = getContentPoolSizes(vocab, kanji, grammar, form.quiz_type);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-loading", children: "⏳ Đang tải..." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-admin-text-sm n4-admin-text-muted", style: { margin: 0 }, children: [
        "Tổng: ",
        filtered.length,
        " challenge hiển thị / ",
        items.length,
        " challenge toàn hệ thống"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: () => setCreating(true), children: "➕ Tạo Challenge" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-grid", style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Tổng challenge" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: items.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Đang chạy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: stats.active })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Sắp mở" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: stats.upcoming })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Đã kết thúc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: stats.ended })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list", children: [
      filtered.map((challenge) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChallengeCard,
        {
          challenge,
          onClone: handleClone,
          onDelete: handleDelete,
          onLeaderboard: showLeaderboard
        },
        challenge.id
      )),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Chưa có challenge nào khớp bộ lọc hiện tại." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ChallengeEditorDialog,
      {
        open: creating,
        form,
        poolSizes,
        onChange: updateForm,
        onClose: resetForm,
        onSave: handleCreate
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChallengeLeaderboardDialog, { leaderboard, onClose: () => setLeaderboard(null) })
  ] });
}
const MSG_TEMPLATES = [
  { label: "👋 Chào mừng", text: "Chào mừng bạn đến với N4 Learning! Nếu cần hỗ trợ gì, hãy nhắn tin cho admin nhé." },
  { label: "🎉 Chúc mừng", text: "Chúc mừng bạn đã đạt thành tích mới! Hãy tiếp tục cố gắng nhé! 🔥" },
  { label: "⚠️ Nhắc nhở", text: "Bạn chưa học trong vài ngày rồi. Hãy quay lại luyện tập để duy trì streak nhé!" },
  { label: "🐛 Bug đã sửa", text: "Cảm ơn bạn đã báo lỗi. Bug đã được sửa, vui lòng tải lại trang để kiểm tra." },
  { label: "📢 Cập nhật", text: "Hệ thống vừa được cập nhật với tính năng mới. Khám phá ngay!" }
];
function MessagesPanel({ search }) {
  const user = useAppStore((s) => s.user);
  const [convos, setConvos] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [activeConvo, setActiveConvo] = reactExports.useState(null);
  const [reply, setReply] = reactExports.useState("");
  const [showNewMsg, setShowNewMsg] = reactExports.useState(false);
  const [allUsers, setAllUsers] = reactExports.useState([]);
  const [newMsgReceiver, setNewMsgReceiver] = reactExports.useState("");
  const [newMsgContent, setNewMsgContent] = reactExports.useState("");
  const messagesEndRef = reactExports.useRef(null);
  const loadConvos = reactExports.useCallback(async () => {
    if (!(user == null ? void 0 : user.id)) return;
    setLoading(true);
    try {
      const d = await getConversations(user.id);
      setConvos(d || []);
    } catch (e) {
      setConvos([]);
    } finally {
      setLoading(false);
    }
  }, [user == null ? void 0 : user.id]);
  reactExports.useEffect(() => {
    loadConvos();
  }, [loadConvos]);
  reactExports.useEffect(() => {
    if (!(activeConvo == null ? void 0 : activeConvo.partnerId) || !(user == null ? void 0 : user.id)) return;
    let mounted = true;
    const interval = setInterval(async () => {
      try {
        const msgs = await getMessages(user.id, activeConvo.partnerId);
        if (mounted) setActiveConvo((prev) => prev ? { ...prev, messages: msgs || [] } : null);
      } catch (e) {
      }
    }, 5e3);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [activeConvo == null ? void 0 : activeConvo.partnerId, user == null ? void 0 : user.id]);
  reactExports.useEffect(() => {
    window.__adminOpenChat = (uid) => openConvo(uid);
    return () => {
      delete window.__adminOpenChat;
    };
  }, [user == null ? void 0 : user.id, convos]);
  reactExports.useEffect(() => {
    var _a;
    (_a = messagesEndRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [activeConvo == null ? void 0 : activeConvo.messages]);
  const openConvo = async (partnerId) => {
    const msgs = await getMessages(user.id, partnerId);
    const convo = convos.find((c) => c.partnerId === partnerId);
    setActiveConvo({ partnerId, partnerName: (convo == null ? void 0 : convo.partnerName) || "User", messages: msgs || [] });
  };
  const handleSend = async () => {
    if (!reply.trim() || !activeConvo) return;
    await sendMessage(user.id, activeConvo.partnerId, reply.trim());
    logAdminAction(user.id, "message_send", "direct_message", { targetUserId: activeConvo.partnerId });
    setReply("");
    openConvo(activeConvo.partnerId);
  };
  const handleDeleteConvo = async (partnerId, e) => {
    e.stopPropagation();
    if (!confirm("Xóa toàn bộ cuộc hội thoại này?")) return;
    try {
      await adminDeleteConversation(user.id, partnerId);
      logAdminAction(user.id, "message_delete", "conversation", { targetUserId: partnerId });
      if ((activeConvo == null ? void 0 : activeConvo.partnerId) === partnerId) setActiveConvo(null);
      loadConvos();
    } catch (err) {
      console.error("Delete conversation error:", err);
      alert(getUserErrorMessage(err, "Không thể xoá hội thoại lúc này."));
    }
  };
  const handleNewMsg = async () => {
    if (!newMsgReceiver) {
      alert("⚠️ Vui lòng chọn người nhận.");
      return;
    }
    if (!newMsgContent.trim()) {
      alert("⚠️ Vui lòng nhập nội dung tin nhắn.");
      return;
    }
    await sendMessage(user.id, newMsgReceiver, newMsgContent.trim());
    setNewMsgContent("");
    setNewMsgReceiver("");
    setShowNewMsg(false);
    loadConvos();
  };
  const openNewMsgDialog = async () => {
    try {
      const profiles = await getAllProfiles();
      setAllUsers((profiles || []).filter((p) => p.id !== user.id));
    } catch (e) {
      setAllUsers([]);
    }
    setShowNewMsg(true);
  };
  const q = (search || "").toLowerCase();
  const filtered = q ? convos.filter((c) => (c.partnerName || "").toLowerCase().includes(q)) : convos;
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-loading", children: "⏳ Đang tải..." });
  if (activeConvo) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-panel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar", style: { marginBottom: 12 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => {
          setActiveConvo(null);
          loadConvos();
        }, children: "← Quay lại" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: activeConvo.partnerName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: 1 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: (e) => handleDeleteConvo(activeConvo.partnerId, e), children: "🗑️ Xóa hội thoại" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-scroll-list", style: { maxHeight: 400, overflowY: "auto", display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }, children: [
        activeConvo.messages.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-admin-msg ${m.sender_id === user.id ? "n4-admin-msg--sent" : "n4-admin-msg--received"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m.content }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-msg-time", children: new Date(m.created_at).toLocaleTimeString("vi") })
        ] }, m.id)),
        activeConvo.messages.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Chưa có tin nhắn." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", value: "", onChange: (e) => {
          if (e.target.value) setReply(e.target.value);
        }, style: { width: "auto", fontSize: "0.8em" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "📝 Mẫu tin nhắn..." }),
          MSG_TEMPLATES.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t.text, children: t.label }, i))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", style: { flex: 1 }, placeholder: "Nhập tin nhắn...", value: reply, onChange: (e) => setReply(e.target.value), onKeyDown: (e) => e.key === "Enter" && handleSend() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: handleSend, children: "Gửi" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar", style: { justifyContent: "space-between" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "var(--n4-text-muted)", margin: 0 }, children: [
        "Tổng: ",
        filtered.length,
        " cuộc hội thoại"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: openNewMsgDialog, children: "➕ Tin nhắn mới" })
    ] }),
    showNewMsg && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", style: { border: "2px solid var(--n4-accent)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "💬 Gửi tin nhắn mới" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", value: newMsgReceiver, onChange: (e) => setNewMsgReceiver(e.target.value), style: { marginBottom: 8, width: "100%" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Chọn người nhận --" }),
        allUsers.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: u.id, children: u.display_name || u.id }, u.id))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "n4-input", placeholder: "Nội dung tin nhắn...", rows: 3, value: newMsgContent, onChange: (e) => setNewMsgContent(e.target.value), style: { marginBottom: 8, width: "100%", resize: "vertical" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", value: "", onChange: (e) => {
          if (e.target.value) setNewMsgContent(e.target.value);
        }, style: { width: "auto", fontSize: "0.8em" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "📝 Dùng mẫu..." }),
          MSG_TEMPLATES.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t.text, children: t.label }, i))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: handleNewMsg, children: "📨 Gửi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => setShowNewMsg(false), children: "Hủy" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack n4-admin-gap-sm", children: [
      filtered.map((c) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "n4-admin-row",
            style: { cursor: "pointer" },
            onClick: () => openConvo(c.partnerId),
            onKeyDown: (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openConvo(c.partnerId);
              }
            },
            role: "button",
            tabIndex: 0,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10, width: "100%" }, children: [
              c.partnerAvatar && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.partnerAvatar, alt: "", style: { width: 28, height: 28, borderRadius: "50%" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row-main", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: c.partnerName || "User" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85em", color: "var(--n4-text-muted)" }, children: ((_a = c.lastMessage) == null ? void 0 : _a.content) || "" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row-actions", children: [
                c.unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-badge n4-admin-badge--info", children: c.unread }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: (e) => handleDeleteConvo(c.partnerId, e), title: "Xóa hội thoại", children: "🗑️" })
              ] })
            ] })
          },
          c.partnerId
        );
      }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Chưa có tin nhắn nào." })
    ] })
  ] });
}
const EVENT_LABELS = {
  login: "🔑 Đăng nhập",
  quiz_complete: "📝 Hoàn thành quiz",
  quiz_start: "🎯 Bắt đầu quiz",
  trainer_start: "🎮 Bắt đầu trainer",
  lesson_view: "📖 Xem bài học",
  bookmark: "⭐ Bookmark",
  sync: "☁️ Đồng bộ",
  page_view: "👁️ Xem trang",
  settings_change: "⚙️ Đổi cài đặt",
  admin_role_change: "👑 Đổi quyền user",
  admin_block_user: "🚫 Chặn user",
  admin_unblock_user: "🔓 Mở khóa user",
  admin_bulk_message: "📨 Gửi hàng loạt",
  admin_edit_profile: "📝 Sửa profile user",
  admin_overwrite_cloud_data: "☁️ Ghi đè dữ liệu đám mây",
  admin_issue_status: "🐛 Cập nhật issue",
  admin_issue_delete: "🗑️ Xóa issue",
  admin_announcement_save: "📢 Lưu thông báo",
  admin_announcement_delete: "🗑️ Xóa thông báo",
  admin_challenge_create: "🏆 Tạo challenge",
  admin_challenge_delete: "🗑️ Xóa challenge",
  admin_message_send: "💬 Gửi tin nhắn admin",
  admin_message_delete: "🧹 Xóa hội thoại",
  admin_activity_purge: "🧽 Dọn activity log",
  admin_config_update: "⚙️ Cập nhật config",
  admin_config_delete: "🗑️ Xóa config",
  admin_maintenance_toggle: "🔧 Đổi bảo trì"
};
const EVENT_COLORS = {
  login: "#4caf50",
  quiz_complete: "#2196f3",
  quiz_start: "#ff9800",
  trainer_start: "#9c27b0",
  lesson_view: "#00bcd4",
  bookmark: "#ffc107",
  sync: "#607d8b",
  admin_role_change: "#7c3aed",
  admin_block_user: "#dc2626",
  admin_unblock_user: "#16a34a",
  admin_bulk_message: "#0284c7",
  admin_edit_profile: "#2563eb",
  admin_overwrite_cloud_data: "#0f766e",
  admin_issue_status: "#b45309",
  admin_issue_delete: "#991b1b",
  admin_announcement_save: "#7c3aed",
  admin_announcement_delete: "#991b1b",
  admin_challenge_create: "#9333ea",
  admin_challenge_delete: "#991b1b",
  admin_message_send: "#0369a1",
  admin_message_delete: "#991b1b",
  admin_activity_purge: "#475569",
  admin_config_update: "#1d4ed8",
  admin_config_delete: "#991b1b",
  admin_maintenance_toggle: "#ea580c"
};
const SEGMENT_DEFS = [
  { key: "power", label: "⚡ Người dùng chuyên sâu", color: "#ff6f00", desc: "Chuỗi học 7+ ngày, 50+ bài trắc nghiệm" },
  { key: "active", label: "🟢 Hoạt động", color: "#4caf50", desc: "Hoạt động trong 3 ngày qua" },
  { key: "casual", label: "🔵 Thỉnh thoảng", color: "#2196f3", desc: "Hoạt động trong 7 ngày qua" },
  { key: "dormant", label: "😴 Ngủ đông", color: "#ff9800", desc: "Không hoạt động 7-30 ngày" },
  { key: "churned", label: "🔴 Rời bỏ", color: "#f44336", desc: "Không hoạt động 30+ ngày" },
  { key: "new", label: "🆕 Mới", color: "#9c27b0", desc: "Tham gia trong 7 ngày qua" }
];
const ACTIVITY_TABS = [
  { id: "overview", label: "📊 Tổng quan" },
  { id: "feed", label: "📋 Nhật ký hoạt động" },
  { id: "segments", label: "👥 Phân loại" },
  { id: "retention", label: "📈 Giữ chân" },
  { id: "quizzes", label: "🎯 Phân tích trắc nghiệm" },
  { id: "heatmap", label: "🗓️ Bản đồ nhiệt" },
  { id: "manage", label: "🛠️ Quản lý" }
];
function segmentUser(user) {
  const now = Date.now();
  const lastActive = user.last_active_at ? new Date(user.last_active_at).getTime() : 0;
  const joined = user.joined_at ? new Date(user.joined_at).getTime() : 0;
  const daysSinceActive = (now - lastActive) / 864e5;
  const daysSinceJoined = (now - joined) / 864e5;
  if (daysSinceJoined <= 7) return "new";
  if ((user.streak || 0) >= 7 && (user.total_quizzes || 0) >= 50) return "power";
  if (daysSinceActive <= 3) return "active";
  if (daysSinceActive <= 7) return "casual";
  if (daysSinceActive <= 30) return "dormant";
  return "churned";
}
function buildSegments(users) {
  const segments = {};
  SEGMENT_DEFS.forEach((segment) => {
    segments[segment.key] = [];
  });
  users.forEach((user) => {
    const segment = segmentUser(user);
    if (segments[segment]) segments[segment].push(user);
  });
  return segments;
}
function buildRetentionCohorts(users) {
  const now = Date.now();
  const weekMs = 7 * 864e5;
  const cohorts = [];
  for (let index = 0; index < 4; index += 1) {
    const weekStart = now - (index + 1) * weekMs;
    const weekEnd = now - index * weekMs;
    const cohortUsers = users.filter((user) => {
      const joined = user.joined_at ? new Date(user.joined_at).getTime() : 0;
      return joined >= weekStart && joined < weekEnd;
    });
    const retained = cohortUsers.filter((user) => {
      const lastActive = user.last_active_at ? new Date(user.last_active_at).getTime() : 0;
      return lastActive >= weekEnd;
    });
    const startDate = new Date(weekStart);
    cohorts.push({
      label: `${startDate.getDate()}/${startDate.getMonth() + 1}`,
      total: cohortUsers.length,
      retained: retained.length,
      rate: cohortUsers.length > 0 ? Math.round(retained.length / cohortUsers.length * 100) : 0
    });
  }
  return cohorts.reverse();
}
function buildFunnel(users) {
  const now = Date.now();
  const weekMs = 7 * 864e5;
  const totalUsers = users.length;
  const withQuiz = users.filter((user) => (user.total_quizzes || 0) > 0).length;
  const withStreak = users.filter((user) => (user.streak || 0) >= 3).length;
  const weekActive = users.filter((user) => {
    const lastActive = user.last_active_at ? new Date(user.last_active_at).getTime() : 0;
    return now - lastActive < weekMs;
  }).length;
  return [
    { label: "📝 Đăng ký", value: totalUsers, pct: 100 },
    { label: "🎯 Làm quiz", value: withQuiz, pct: totalUsers > 0 ? Math.round(withQuiz / totalUsers * 100) : 0 },
    { label: "🔥 Streak ≥ 3", value: withStreak, pct: totalUsers > 0 ? Math.round(withStreak / totalUsers * 100) : 0 },
    { label: "✅ Active 7d", value: weekActive, pct: totalUsers > 0 ? Math.round(weekActive / totalUsers * 100) : 0 }
  ];
}
function formatTimeAgo(dateStr) {
  if (!dateStr) return "—";
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 6e4);
  if (mins < 1) return "vừa xong";
  if (mins < 60) return `${mins} phút trước`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} giờ trước`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} ngày trước`;
  return new Date(dateStr).toLocaleDateString("vi");
}
function describeMetadata(metadata) {
  if (!metadata) return "";
  if (typeof metadata === "object") {
    return Object.entries(metadata).map(([key, value]) => `${key}: ${value}`).join(" · ");
  }
  return String(metadata);
}
function ActivityTabButtons({ activeTab, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-panel-tabs", style: { marginBottom: 16 }, children: ACTIVITY_TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      className: `n4-admin-panel-tab ${activeTab === tab.id ? "active" : ""}`,
      onClick: () => onChange(tab.id),
      children: tab.label
    },
    tab.id
  )) });
}
function ActivityOverviewSection({ users, segments, activityFeed, quizHistory, dauData, quizAnalytics }) {
  var _a, _b, _c, _d, _e, _f, _g;
  const topTypes = ((_a = quizAnalytics == null ? void 0 : quizAnalytics.typeStats) == null ? void 0 : _a.slice(0, 5)) || [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stat-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "👥", label: "Tổng users", value: users.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "🟢", label: "Active (3d)", value: (((_b = segments.active) == null ? void 0 : _b.length) || 0) + (((_c = segments.power) == null ? void 0 : _c.length) || 0) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "😴", label: "Dormant", value: ((_d = segments.dormant) == null ? void 0 : _d.length) || 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "🆕", label: "Mới (7d)", value: ((_e = segments.new) == null ? void 0 : _e.length) || 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "📝", label: "Trắc nghiệm (kỳ)", value: quizHistory.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "📋", label: "Sự kiện (kỳ)", value: activityFeed.length })
    ] }),
    dauData.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "📈 Người dùng hoạt động theo ngày (DAU)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", alignItems: "flex-end", gap: 2, height: 120, padding: "0 4px", background: "var(--n4-bg-primary)", borderRadius: 8, overflow: "hidden" }, children: dauData.map((item, index) => {
        const max = Math.max(...dauData.map((entry) => entry.count), 1);
        const height = Math.max(item.count / max * 100, 2);
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%" }, title: `${item.date}: ${item.count} users`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100%", maxWidth: 20, height: `${height}%`, background: "var(--n4-accent)", borderRadius: "4px 4px 0 0", transition: "height 0.3s", minHeight: 2 } }) }, index);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between n4-admin-text-xs n4-admin-text-muted", style: { marginTop: 4 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_f = dauData[0]) == null ? void 0 : _f.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_g = dauData[dauData.length - 1]) == null ? void 0 : _g.date })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "👥 Phân loại người dùng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-summary-grid", children: SEGMENT_DEFS.map((segment) => {
        var _a2;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", style: { borderLeft: `4px solid ${segment.color}` }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ((_a2 = segments[segment.key]) == null ? void 0 : _a2.length) || 0 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: segment.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: segment.desc })
        ] }, segment.key);
      }) })
    ] }),
    topTypes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "🎯 Quiz phổ biến nhất" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-list", children: topTypes.map((type, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-row-main", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          index + 1,
          ". ",
          type.type
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-text-sm n4-admin-text-muted", children: [
          type.sessions,
          " phiên · ",
          type.avgAccuracy,
          "% acc · ",
          type.uniqueUsers,
          " users"
        ] })
      ] }, type.type)) })
    ] })
  ] });
}
function ActivityFeedSection({
  activityFeed,
  eventFilter,
  onEventFilterChange,
  searchQuery,
  onDrillUser,
  selectedUser,
  users,
  userActivity,
  userActivityLoading
}) {
  var _a;
  const filteredFeed = activityFeed.filter((activity) => eventFilter === "all" || activity.event === eventFilter).filter((activity) => {
    var _a2;
    if (!searchQuery) return true;
    return (((_a2 = activity.user_profiles) == null ? void 0 : _a2.display_name) || "").toLowerCase().includes(searchQuery) || activity.event.includes(searchQuery);
  });
  const selectedUserName = ((_a = users.find((user) => user.id === selectedUser)) == null ? void 0 : _a.display_name) || selectedUser;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", value: eventFilter, onChange: (event) => onEventFilterChange(event.target.value), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Tất cả sự kiện" }),
        Object.entries(EVENT_LABELS).map(([key, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: key, children: label }, key))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => exportData(activityFeed, "activity-feed", "csv"), children: "📥 Xuất CSV" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => exportData(activityFeed, "activity-feed", "json"), children: "📥 Xuất JSON" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list", children: [
      filteredFeed.map((activity) => {
        var _a2, _b;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list-item n4-admin-list-item--tight", style: { alignItems: "flex-start", borderLeft: `3px solid ${EVENT_COLORS[activity.event] || "#888"}` }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 28, height: 28, borderRadius: "50%", background: "var(--n4-bg-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8em", flexShrink: 0 }, children: ((_a2 = activity.user_profiles) == null ? void 0 : _a2.avatar_url) ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: activity.user_profiles.avatar_url, alt: "", style: { width: 28, height: 28, borderRadius: "50%" } }) : "👤" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row-main", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight", style: { marginBottom: 4 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => onDrillUser(activity.user_id), children: ((_b = activity.user_profiles) == null ? void 0 : _b.display_name) || "Không rõ" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-badge", style: { background: EVENT_COLORS[activity.event] || "#888", color: "#fff" }, children: EVENT_LABELS[activity.event] || activity.event })
            ] }),
            activity.metadata && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-sm n4-admin-text-muted", children: describeMetadata(activity.metadata) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: formatTimeAgo(activity.created_at) })
        ] }, activity.id);
      }),
      filteredFeed.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Chưa có dữ liệu activity log. Chạy migration-004 và tích hợp logging vào app." })
    ] }),
    selectedUser && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-detail", style: { border: "2px solid var(--n4-accent)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", style: { marginBottom: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          "🔍 Hoạt động chi tiết: ",
          selectedUserName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => onDrillUser(selectedUser), children: "✕ Đóng" })
      ] }),
      userActivityLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-loading", children: "⏳ Đang tải..." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list", children: [
        userActivity.map((activity) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list-item n4-admin-list-item--tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row-main", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-badge", style: { background: EVENT_COLORS[activity.event] || "#888", color: "#fff", marginRight: 8 }, children: EVENT_LABELS[activity.event] || activity.event }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-sm", children: describeMetadata(activity.metadata) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: new Date(activity.created_at).toLocaleString("vi") })
        ] }, activity.id)),
        userActivity.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Chưa có hoạt động." })
      ] })
    ] })
  ] });
}
function ActivitySegmentsSection({ segments, searchQuery }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack", children: [
    SEGMENT_DEFS.map((segment) => {
      var _a;
      const users = (segments[segment.key] || []).filter((user) => {
        if (!searchQuery) return true;
        return (user.display_name || "").toLowerCase().includes(searchQuery) || (user.email || "").toLowerCase().includes(searchQuery);
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between", style: { marginBottom: 8 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight", style: { marginBottom: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: segment.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-badge", style: { background: segment.color, color: "#fff" }, children: ((_a = segments[segment.key]) == null ? void 0 : _a.length) || 0 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-sm n4-admin-text-muted", children: segment.desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list", children: [
          users.slice(0, 20).map((user) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row-main", style: { display: "flex", alignItems: "center", gap: 8 }, children: [
              user.avatar_url && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user.avatar_url, alt: "", style: { width: 24, height: 24, borderRadius: "50%" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: user.display_name || "N/A" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-xs n4-admin-text-muted", children: user.email || user.id.slice(0, 8) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-text-sm n4-admin-text-muted", style: { textAlign: "right" }, children: [
              "XP: ",
              user.xp || 0,
              " · 🔥",
              user.streak || 0,
              " · 📝",
              user.total_quizzes || 0,
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: user.last_active_at ? formatTimeAgo(user.last_active_at) : "N/A" })
            ] })
          ] }, user.id)),
          users.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Không có user." }),
          users.length > 20 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-text-sm n4-admin-text-muted", children: [
            "...và ",
            users.length - 20,
            " users khác"
          ] })
        ] })
      ] }, segment.key);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-sm n4-btn-ghost",
        onClick: () => {
          const report = SEGMENT_DEFS.map((segment) => {
            var _a;
            return {
              segment: segment.key,
              label: segment.label,
              count: ((_a = segments[segment.key]) == null ? void 0 : _a.length) || 0,
              users: (segments[segment.key] || []).map((user) => ({
                name: user.display_name,
                email: user.email,
                xp: user.xp,
                streak: user.streak,
                quizzes: user.total_quizzes,
                lastActive: user.last_active_at
              }))
            };
          });
          exportData(report, "user-segments", "json");
        },
        children: "📥 Export Segments (JSON)"
      }
    ) })
  ] });
}
function ActivityRetentionSection({ users }) {
  const cohorts = buildRetentionCohorts(users);
  const funnel = buildFunnel(users);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "🔻 Funnel chuyển đổi" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-stack", children: funnel.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-funnel-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-funnel-label", children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-funnel-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-funnel-fill", style: { width: `${item.pct}%`, background: `hsl(${120 * item.pct / 100}, 70%, 45%)` }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-admin-funnel-value", children: [
          item.value,
          " (",
          item.pct,
          "%)"
        ] }) }) })
      ] }, item.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "📅 Tỉ lệ quay lại theo tuần đăng ký" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-table-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-table-scroll", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-admin-table n4-responsive-table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { className: "n4-sr-only", children: "Tỷ lệ giữ chân theo tuần" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Tuần" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Đăng ký" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Quay lại" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Tỉ lệ quay lại" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: cohorts.map((cohort) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Tuần", children: cohort.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Đăng ký", children: cohort.total }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Quay lại", children: cohort.retained }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Tỉ lệ quay lại", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: cohort.rate >= 50 ? "#4caf50" : cohort.rate >= 25 ? "#ff9800" : "#f44336", fontWeight: 600 }, children: [
            cohort.rate,
            "%"
          ] }) })
        ] }, cohort.label)) })
      ] }) }) }),
      cohorts.every((cohort) => cohort.total === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-text-sm n4-admin-text-muted", style: { marginTop: 8 }, children: "Chưa đủ dữ liệu đăng ký trong 4 tuần qua." })
    ] })
  ] });
}
function ActivityQuizSection({ quizAnalytics, quizHistory, quizTypeFilter, onQuizTypeFilterChange }) {
  var _a;
  const filteredHistory = quizHistory.filter((item) => quizTypeFilter === "all" || item.quiz_type === quizTypeFilter).slice(0, 50);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "n4-input", value: quizTypeFilter, onChange: (event) => onQuizTypeFilterChange(event.target.value), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Tất cả loại trắc nghiệm" }),
        (_a = quizAnalytics == null ? void 0 : quizAnalytics.typeStats) == null ? void 0 : _a.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: type.type, children: [
          type.type,
          " (",
          type.sessions,
          ")"
        ] }, type.type))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => exportData(quizHistory, "quiz-history", "csv"), children: "📥 CSV" })
    ] }),
    quizAnalytics && quizAnalytics.typeStats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "🎯 Phân rã theo loại trắc nghiệm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-table-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-table-scroll", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-admin-table n4-responsive-table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { className: "n4-sr-only", children: "Hiệu suất theo loại hoạt động" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Loại" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Phiên" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Độ chính xác TB" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Thời lượng TB" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Người dùng" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: quizAnalytics.typeStats.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Loại", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: type.type }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Phiên", children: type.sessions }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Độ chính xác TB", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: type.avgAccuracy >= 70 ? "#4caf50" : type.avgAccuracy >= 40 ? "#ff9800" : "#f44336", fontWeight: 600 }, children: [
            type.avgAccuracy,
            "%"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { "data-label": "Thời lượng TB", children: [
            type.avgDuration,
            "s"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Người dùng", children: type.uniqueUsers })
        ] }, type.type)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-text-sm n4-admin-text-muted", style: { marginTop: 8 }, children: [
        "Tổng: ",
        quizAnalytics.totalSessions,
        " phiên · ",
        quizAnalytics.uniqueUsers,
        " người dùng"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "📝 Trắc nghiệm gần đây" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list", children: [
        filteredHistory.map((history) => {
          var _a2, _b;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row-main", style: { display: "flex", alignItems: "center", gap: 8 }, children: [
              ((_a2 = history.user_profiles) == null ? void 0 : _a2.avatar_url) && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: history.user_profiles.avatar_url, alt: "", style: { width: 22, height: 22, borderRadius: "50%" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ((_b = history.user_profiles) == null ? void 0 : _b.display_name) || "N/A" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-badge n4-admin-badge--info", children: history.quiz_type })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-text-sm n4-admin-text-muted", style: { display: "flex", gap: 12, alignItems: "center" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                history.score,
                "/",
                history.total
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: (history.accuracy || 0) >= 0.7 ? "#4caf50" : (history.accuracy || 0) >= 0.4 ? "#ff9800" : "#f44336", fontWeight: 600 }, children: [
                Math.round((history.accuracy || 0) * 100),
                "%"
              ] }),
              history.duration_seconds && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                history.duration_seconds,
                "s"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatTimeAgo(history.created_at) })
            ] })
          ] }, history.id);
        }),
        filteredHistory.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Chưa có dữ liệu trắc nghiệm." })
      ] })
    ] })
  ] });
}
function ActivityHeatmapSection({ heatmap }) {
  if (!heatmap) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Chưa có dữ liệu bản đồ nhiệt. Chạy migration-004 trước." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "🗓️ Hoạt động theo giờ & ngày trong tuần" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-table-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-table-scroll", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-admin-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { className: "n4-sr-only", children: "Hoạt động theo giờ và ngày" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Ngày" }),
        Array.from({ length: 24 }, (_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: index }, index))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"].map((day, dayIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: day }) }),
        heatmap[dayIndex].map((count, hourIndex) => {
          const max = Math.max(...heatmap.flat(), 1);
          const intensity = count / max;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { title: `${day} ${hourIndex}:00 — ${count} sự kiện`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 20, height: 20, borderRadius: 3, background: count === 0 ? "var(--n4-bg-primary)" : `rgba(76, 175, 80, ${0.15 + intensity * 0.85})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7em", color: intensity > 0.5 ? "#fff" : "var(--n4-text-secondary)" }, children: count || "" }) }, hourIndex);
        })
      ] }, day)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight n4-admin-text-xs n4-admin-text-muted", style: { marginTop: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ít" }),
      [0.1, 0.3, 0.5, 0.7, 0.9].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 14, height: 14, borderRadius: 2, background: `rgba(76, 175, 80, ${value})` } }, value)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Nhiều" })
    ] })
  ] });
}
function ActivityManageSection({ activityFeed, quizHistory, users, segments, purgeResult, onPurge, onExportReport }) {
  var _a, _b, _c, _d, _e;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🧹 Dọn dẹp log cũ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-admin-text-sm n4-admin-text-muted", style: { margin: "8px 0" }, children: "Xóa các bản ghi hoạt động cũ để tiết kiệm dung lượng database." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar n4-admin-toolbar--tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => onPurge(30), children: "Xóa > 30 ngày" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => onPurge(60), children: "Xóa > 60 ngày" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: () => onPurge(7), children: "Xóa > 7 ngày" })
      ] }),
      purgeResult && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 8, padding: 8, borderRadius: 6, background: "var(--n4-bg-primary)" }, children: purgeResult })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "📊 Thống kê nhanh" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-grid", style: { marginTop: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Sự kiện hoạt động" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: activityFeed.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Phiên trắc nghiệm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: quizHistory.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Tổng người dùng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: users.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Người dùng chuyên sâu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ((_a = segments.power) == null ? void 0 : _a.length) || 0 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Hoạt động (3 ngày)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ((_b = segments.active) == null ? void 0 : _b.length) || 0 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Ngủ đông" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ((_c = segments.dormant) == null ? void 0 : _c.length) || 0 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Rời bỏ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ((_d = segments.churned) == null ? void 0 : _d.length) || 0 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: "Mới (7 ngày)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ((_e = segments.new) == null ? void 0 : _e.length) || 0 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "📥 Export dữ liệu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar", style: { marginTop: 8, marginBottom: 0 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => exportData(activityFeed, "activity-log", "csv"), children: "📋 Activity (CSV)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => exportData(quizHistory, "quiz-history", "csv"), children: "📝 Quiz (CSV)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: onExportReport, children: "📊 Full Report (JSON)" })
      ] })
    ] })
  ] });
}
function ActivityPanel({ search }) {
  const adminUser = useAppStore((state) => state.user);
  const [subTab, setSubTab] = reactExports.useState("overview");
  const [users, setUsers] = reactExports.useState([]);
  const [activityFeed, setActivityFeed] = reactExports.useState([]);
  const [quizHistory, setQuizHistory] = reactExports.useState([]);
  const [quizAnalytics, setQuizAnalytics] = reactExports.useState(null);
  const [heatmap, setHeatmap] = reactExports.useState(null);
  const [dauData, setDauData] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [eventFilter, setEventFilter] = reactExports.useState("all");
  const [quizTypeFilter, setQuizTypeFilter] = reactExports.useState("all");
  const [timeRange, setTimeRange] = reactExports.useState(7);
  const [selectedUser, setSelectedUser] = reactExports.useState(null);
  const [userActivity, setUserActivity] = reactExports.useState([]);
  const [userActivityLoading, setUserActivityLoading] = reactExports.useState(false);
  const [purgeResult, setPurgeResult] = reactExports.useState(null);
  const loadData = reactExports.useCallback(async () => {
    setLoading(true);
    try {
      const since = new Date(Date.now() - timeRange * 864e5).toISOString();
      const [profilesRes, feedRes, quizRes, analyticsRes, heatmapRes, dauRes] = await Promise.all([
        getAllProfiles(),
        getRecentActivity(100, 0, { since }).catch(() => []),
        getAllQuizHistory(200, { since }).catch(() => []),
        getQuizAnalytics(timeRange).catch(() => null),
        getActivityHeatmap(timeRange).catch(() => null),
        getDailyActiveUsers(timeRange).catch(() => [])
      ]);
      setUsers(profilesRes || []);
      setActivityFeed(feedRes || []);
      setQuizHistory(quizRes || []);
      setQuizAnalytics(analyticsRes);
      setHeatmap(heatmapRes);
      setDauData(dauRes || []);
    } catch (e) {
      setUsers([]);
      setActivityFeed([]);
      setQuizHistory([]);
      setQuizAnalytics(null);
      setHeatmap(null);
      setDauData([]);
    } finally {
      setLoading(false);
    }
  }, [timeRange]);
  reactExports.useEffect(() => {
    loadData();
  }, [loadData]);
  const drillUser = async (userId) => {
    if (selectedUser === userId) {
      setSelectedUser(null);
      return;
    }
    setSelectedUser(userId);
    setUserActivityLoading(true);
    try {
      const data = await getUserActivity(userId, 100);
      setUserActivity(data || []);
    } catch (e) {
      setUserActivity([]);
    }
    setUserActivityLoading(false);
  };
  const handlePurge = async (days) => {
    if (!confirm(`Xóa activity log cũ hơn ${days} ngày? Không thể hoàn tác!`)) return;
    try {
      const count = await purgeActivityLog(days);
      logAdminAction(adminUser == null ? void 0 : adminUser.id, "activity_purge", "activity_log", { olderThanDays: days, deletedCount: count });
      setPurgeResult(`Đã xóa ${count} bản ghi cũ.`);
      loadData();
    } catch (error) {
      setPurgeResult(getUserErrorMessage(error, "Không thể dọn dữ liệu hoạt động lúc này."));
    }
  };
  const segments = buildSegments(users);
  const searchQuery = (search || "").toLowerCase();
  const exportReport = () => {
    const report = {
      generated: (/* @__PURE__ */ new Date()).toISOString(),
      timeRange: `${timeRange} days`,
      totalUsers: users.length,
      segments: SEGMENT_DEFS.reduce((acc, segment) => {
        var _a;
        acc[segment.key] = ((_a = segments[segment.key]) == null ? void 0 : _a.length) || 0;
        return acc;
      }, {}),
      quizAnalytics,
      dauData
    };
    exportData([report], "activity-report", "json");
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-loading", children: "⏳ Đang tải dữ liệu hoạt động..." });
  const sectionMap = {
    overview: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActivityOverviewSection,
      {
        users,
        segments,
        activityFeed,
        quizHistory,
        dauData,
        quizAnalytics
      }
    ),
    feed: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActivityFeedSection,
      {
        activityFeed,
        eventFilter,
        onEventFilterChange: setEventFilter,
        searchQuery,
        onDrillUser: drillUser,
        selectedUser,
        users,
        userActivity,
        userActivityLoading
      }
    ),
    segments: /* @__PURE__ */ jsxRuntimeExports.jsx(ActivitySegmentsSection, { segments, searchQuery }),
    retention: /* @__PURE__ */ jsxRuntimeExports.jsx(ActivityRetentionSection, { users }),
    quizzes: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActivityQuizSection,
      {
        quizAnalytics,
        quizHistory,
        quizTypeFilter,
        onQuizTypeFilterChange: setQuizTypeFilter
      }
    ),
    heatmap: /* @__PURE__ */ jsxRuntimeExports.jsx(ActivityHeatmapSection, { heatmap }),
    manage: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActivityManageSection,
      {
        activityFeed,
        quizHistory,
        users,
        segments,
        purgeResult,
        onPurge: handlePurge,
        onExportReport: exportReport
      }
    )
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-sm n4-admin-text-muted", children: "Khoảng thời gian:" }),
      [7, 14, 30, 90].map((days) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: `n4-btn n4-btn-sm ${timeRange === days ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => setTimeRange(days), children: [
        days,
        " ngày"
      ] }, days)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: 1 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: loadData, children: "🔄 Tải lại" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ActivityTabButtons, { activeTab: subTab, onChange: setSubTab }),
    sectionMap[subTab]
  ] });
}
const KNOWN_TYPES = ["vocab", "kanji", "grammar", "minna", "minna-lessons", "game-content"];
function ContentPanel() {
  var _a;
  const user = useAppStore((s) => s.user);
  const [rows, setRows] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [uploading, setUploading] = reactExports.useState(null);
  const fileRef = reactExports.useRef(null);
  const [uploadType, setUploadType] = reactExports.useState("");
  const [preview, setPreview] = reactExports.useState(null);
  const [uploadPreview, setUploadPreview] = reactExports.useState(null);
  const load = reactExports.useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("learning_content").select("type, version, updated_at, data");
      if (error) throw error;
      setRows((data || []).map((r) => {
        var _a2, _b;
        return {
          type: r.type,
          version: r.version,
          updated_at: r.updated_at,
          sizeKB: Math.round(JSON.stringify(r.data).length / 1024),
          itemCount: Array.isArray(r.data) ? r.data.length : ((_b = (_a2 = r.data) == null ? void 0 : _a2.sections) == null ? void 0 : _b.length) || Object.keys(r.data || {}).length
        };
      }));
    } catch (e) {
      console.error("ContentPanel load error:", e);
      setRows([]);
    } finally {
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  async function handleFileChange() {
    var _a2, _b, _c;
    const file = (_b = (_a2 = fileRef.current) == null ? void 0 : _a2.files) == null ? void 0 : _b[0];
    if (!file) {
      setUploadPreview(null);
      return;
    }
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      const itemCount = Array.isArray(data) ? data.length : ((_c = data == null ? void 0 : data.sections) == null ? void 0 : _c.length) || Object.keys(data || {}).length;
      setUploadPreview({ sizeKB: Math.round(text.length / 1024), itemCount, snippet: JSON.stringify(data, null, 2).slice(0, 2e3) });
    } catch (e) {
      setUploadPreview({ error: e.message });
    }
  }
  async function handleUpload() {
    var _a2, _b;
    const file = (_b = (_a2 = fileRef.current) == null ? void 0 : _a2.files) == null ? void 0 : _b[0];
    if (!file || !uploadType) return;
    setUploading(uploadType);
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      const existing = rows.find((r) => r.type === uploadType);
      const newVersion = ((existing == null ? void 0 : existing.version) || 0) + 1;
      const { error } = await supabase.from("learning_content").upsert(
        { type: uploadType, data, version: newVersion, updated_at: (/* @__PURE__ */ new Date()).toISOString() },
        { onConflict: "type" }
      );
      if (error) throw error;
      if (user == null ? void 0 : user.id) logAdminAction(user.id, "content_upload", uploadType, { version: newVersion, sizeKB: Math.round(text.length / 1024) });
      alert(`✅ Đã upload "${uploadType}" (v${newVersion})`);
      fileRef.current.value = "";
      setUploadType("");
      load();
    } catch (e) {
      alert("❌ " + getUserErrorMessage(e, "Không thể tải nội dung lên lúc này."));
    } finally {
      setUploading(null);
    }
  }
  async function handleDelete(type) {
    if (!confirm(`Xóa nội dung "${type}" khỏi server? Người dùng sẽ không tải được dữ liệu này nữa.`)) return;
    try {
      const { error } = await supabase.from("learning_content").delete().eq("type", type);
      if (error) throw error;
      if (user == null ? void 0 : user.id) logAdminAction(user.id, "content_delete", type);
      load();
    } catch (e) {
      alert("❌ " + getUserErrorMessage(e, "Không thể xoá nội dung lúc này."));
    }
  }
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-loading", children: "⏳ Đang tải nội dung..." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "📤 Upload nội dung mới" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: uploadType,
            onChange: (e) => setUploadType(e.target.value),
            className: "n4-input",
            style: { width: "auto" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— Chọn loại —" }),
              KNOWN_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileRef, type: "file", accept: ".json", style: { flex: 1 }, onChange: handleFileChange }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleUpload,
            disabled: !uploadType || uploading,
            className: "n4-btn n4-btn-sm n4-btn-primary",
            style: { opacity: !uploadType || uploading ? 0.5 : 1 },
            children: uploading ? "⏳ Uploading..." : "📤 Upload"
          }
        )
      ] }),
      uploadPreview && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 10, padding: 10, background: "var(--n4-bg-secondary)", borderRadius: 8, fontSize: "0.85em" }, children: uploadPreview.error ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "var(--n4-danger)" }, children: [
        "❌ JSON không hợp lệ: ",
        uploadPreview.error
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 6 }, children: [
          "📋 ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            uploadPreview.sizeKB,
            " KB"
          ] }),
          " · ",
          uploadPreview.itemCount,
          " mục"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { style: { maxHeight: 200, overflow: "auto", fontSize: "0.8em", padding: 8, background: "var(--n4-bg-primary)", borderRadius: 6, whiteSpace: "pre-wrap", wordBreak: "break-all" }, children: [
          uploadPreview.snippet,
          ((_a = uploadPreview.snippet) == null ? void 0 : _a.length) >= 2e3 ? "\n..." : ""
        ] })
      ] }) })
    ] }),
    preview && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", style: { border: "2px solid var(--n4-accent)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { style: { margin: 0 }, children: [
          "👁️ Preview: ",
          preview.type,
          " (",
          preview.sizeKB,
          " KB)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => setPreview(null), children: "✕" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { style: { maxHeight: 400, overflow: "auto", fontSize: "0.8em", padding: 12, background: "var(--n4-bg-primary)", borderRadius: 8, whiteSpace: "pre-wrap", wordBreak: "break-all" }, children: preview.snippet })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { style: { margin: "0 0 12px" }, children: [
        "📚 Nội dung trên server (",
        rows.length,
        " loại)"
      ] }),
      rows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Chưa có nội dung nào trên server." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-table-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-table-scroll", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-admin-table n4-responsive-table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { className: "n4-sr-only", children: "Các gói nội dung" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Loại" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Phiên bản" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Kích thước" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Mục" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Cập nhật" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Thao tác" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Loại", style: { fontWeight: 600 }, children: r.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { "data-label": "Phiên bản", children: [
            "v",
            r.version
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { "data-label": "Kích thước", children: [
            r.sizeKB,
            " KB"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Mục", children: r.itemCount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Cập nhật", className: "n4-admin-text-xs n4-admin-text-muted", children: r.updated_at ? new Date(r.updated_at).toLocaleString() : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Thao tác", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row-actions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: async () => {
              try {
                const { data } = await supabase.from("learning_content").select("data").eq("type", r.type).single();
                const json = JSON.stringify(data == null ? void 0 : data.data, null, 2);
                setPreview({ type: r.type, sizeKB: r.sizeKB, snippet: json.slice(0, 5e3) + (json.length > 5e3 ? "\n..." : "") });
              } catch (e) {
                alert(getUserErrorMessage(e));
              }
            }, className: "n4-btn n4-btn-sm n4-btn-ghost", children: "👁️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(r.type), className: "n4-btn n4-btn-sm n4-btn-danger", children: "🗑️" })
          ] }) })
        ] }, r.type)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-toolbar n4-admin-toolbar--end", style: { marginTop: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: load, className: "n4-btn n4-btn-sm n4-btn-ghost", children: "🔄 Tải lại" }) })
    ] })
  ] });
}
const CONFIG_HIDDEN_KEYS = /* @__PURE__ */ new Set(["ai_api_key", "ai_provider", "custom_badges", "easter_eggs", "maintenance_mode"]);
function formatConfigValue(value) {
  if (value == null || value === "") return "—";
  if (typeof value === "string") return value;
  const serialized = JSON.stringify(value);
  return serialized.length > 120 ? `${serialized.slice(0, 117)}...` : serialized;
}
function ConfigPanel() {
  var _a;
  const user = useAppStore((s) => s.user);
  const [configs, setConfigs] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [newKey, setNewKey] = reactExports.useState("");
  const [newValue, setNewValue] = reactExports.useState("");
  const [badges, setBadges] = reactExports.useState([]);
  const [badgeForm, setBadgeForm] = reactExports.useState({ icon: "🏅", name: "", condition: "", description: "" });
  const [easterEggs, setEasterEggs] = reactExports.useState([]);
  const [eggForm, setEggForm] = reactExports.useState({ code: "", reward: "", description: "", active: true });
  const load = reactExports.useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllConfig() || [];
      setConfigs(data || []);
      const badgeCfg = data.find((c) => c.key === "custom_badges");
      if (badgeCfg) setBadges(Array.isArray(badgeCfg.value) ? badgeCfg.value : []);
      const eggCfg = data.find((c) => c.key === "easter_eggs");
      if (eggCfg) setEasterEggs(Array.isArray(eggCfg.value) ? eggCfg.value : []);
    } catch (e) {
      setConfigs([]);
    } finally {
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  const saveCustomConfig = async () => {
    if (!newKey.trim() || !newValue.trim()) return;
    await setConfig(newKey.trim(), newValue.trim(), user.id);
    logAdminAction(user.id, "config_update", "app_config", { key: newKey.trim() });
    setNewKey("");
    setNewValue("");
    load();
  };
  const removeConfig = async (key) => {
    if (!confirm(`Xóa config "${key}"?`)) return;
    await deleteConfig(key);
    logAdminAction(user.id, "config_delete", "app_config", { key });
    load();
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-loading", children: "⏳ Đang tải..." });
  const otherConfigs = configs.filter((c) => !CONFIG_HIDDEN_KEYS.has(c.key));
  const maintenanceMode = ((_a = configs.find((c) => c.key === "maintenance_mode")) == null ? void 0 : _a.value) === "true";
  const toggleMaintenance = async () => {
    const next = !maintenanceMode;
    if (next && !confirm("Bật bảo trì? User thường sẽ thấy màn hình bảo trì.")) return;
    await setConfig("maintenance_mode", String(next), user.id);
    logAdminAction(user.id, "maintenance_toggle", "app_config", { enabled: next });
    load();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-section", style: { border: maintenanceMode ? "2px solid var(--n4-neon-red)" : void 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: 0 }, children: "🔧 Chế độ bảo trì" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.85em", color: "var(--n4-text-muted)", margin: "4px 0 0" }, children: maintenanceMode ? "⚠️ Đang BẬT — User thường thấy màn hình bảo trì" : "Tắt — Ứng dụng hoạt động bình thường" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-toggle ${maintenanceMode ? "active" : ""}`, onClick: toggleMaintenance })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", style: { border: "2px solid var(--n4-accent)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "✨ AI Server Proxy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.85em", color: "var(--n4-text-muted)", marginBottom: 12 }, children: "Provider key chỉ được cấu hình trong Supabase Edge Function secrets. Trình duyệt không thể đọc, lưu hoặc kiểm tra key trực tiếp." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-badge", children: "🔒 Authenticated Edge Function: ai-proxy" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "📋 App Configuration" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-toolbar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", placeholder: "Key", value: newKey, onChange: (e) => setNewKey(e.target.value), style: { width: 150 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", placeholder: "Value", value: newValue, onChange: (e) => setNewValue(e.target.value), style: { flex: 1, minWidth: 200 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: saveCustomConfig, children: "➕ Thêm" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stack n4-admin-gap-sm", children: [
      otherConfigs.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row", style: { justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row-main", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: c.key }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginLeft: 8, color: "var(--n4-text-muted)", fontSize: "0.85em" }, children: formatConfigValue(c.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row-actions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.7em", color: "var(--n4-text-muted)" }, children: c.updated_at ? new Date(c.updated_at).toLocaleString("vi") : "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: () => removeConfig(c.key), children: "🗑️" })
        ] })
      ] }, c.key)),
      otherConfigs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Chưa có config nào." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", style: { marginTop: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "🏅 Achievement / Badge Creator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "n4-input", value: badgeForm.icon, onChange: (e) => setBadgeForm((f) => ({ ...f, icon: e.target.value })), style: { width: "auto", minWidth: 64 }, children: ["🏅", "🥇", "🥈", "🥉", "🏆", "⭐", "💎", "🔥", "🎯", "📚", "🧠", "💪", "🌟", "🎓", "👑"].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: i, children: i }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", placeholder: "Tên badge", value: badgeForm.name, onChange: (e) => setBadgeForm((f) => ({ ...f, name: e.target.value })), style: { flex: 1, minWidth: 120 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", placeholder: "Điều kiện (VD: xp>=1000)", value: badgeForm.condition, onChange: (e) => setBadgeForm((f) => ({ ...f, condition: e.target.value })), style: { flex: 1, minWidth: 150 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", placeholder: "Mô tả", value: badgeForm.description, onChange: (e) => setBadgeForm((f) => ({ ...f, description: e.target.value })), style: { flex: 2, minWidth: 150 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: async () => {
          if (!badgeForm.name.trim()) return;
          const newBadges = [...badges, { ...badgeForm, id: Date.now().toString(36), createdAt: (/* @__PURE__ */ new Date()).toISOString() }];
          setBadges(newBadges);
          await setConfig("custom_badges", newBadges, user.id);
          logAdminAction(user.id, "create_badge", "badge", { name: badgeForm.name });
          setBadgeForm({ icon: "🏅", name: "", condition: "", description: "" });
        }, children: "➕ Tạo" })
      ] }),
      badges.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: badges.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row", style: { justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.4em" }, children: b.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: b.name }),
            b.condition && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { marginLeft: 6, fontSize: "0.8em", color: "var(--n4-accent)" }, children: [
              "(",
              b.condition,
              ")"
            ] }),
            b.description && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.82em", color: "var(--n4-text-muted)" }, children: b.description })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: async () => {
          const newBadges = badges.filter((_, idx) => idx !== i);
          setBadges(newBadges);
          await setConfig("custom_badges", newBadges, user.id);
        }, children: "🗑️" })
      ] }, b.id || i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty n4-admin-text-sm", children: "Chưa có badge nào. Tạo badge đầu tiên!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", style: { marginTop: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 12px" }, children: "🥚 Easter Egg Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", placeholder: "Mã code bí mật", value: eggForm.code, onChange: (e) => setEggForm((f) => ({ ...f, code: e.target.value })), style: { minWidth: 120 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", placeholder: "Phần thưởng (VD: 500 coins)", value: eggForm.reward, onChange: (e) => setEggForm((f) => ({ ...f, reward: e.target.value })), style: { minWidth: 130 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", placeholder: "Mô tả", value: eggForm.description, onChange: (e) => setEggForm((f) => ({ ...f, description: e.target.value })), style: { flex: 1, minWidth: 150 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: async () => {
          if (!eggForm.code.trim()) return;
          const newEggs = [...easterEggs, { ...eggForm, id: Date.now().toString(36), createdAt: (/* @__PURE__ */ new Date()).toISOString(), foundBy: [] }];
          setEasterEggs(newEggs);
          await setConfig("easter_eggs", newEggs, user.id);
          logAdminAction(user.id, "create_easter_egg", "easter_egg", { code: eggForm.code });
          setEggForm({ code: "", reward: "", description: "", active: true });
        }, children: "➕ Thêm" })
      ] }),
      easterEggs.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: easterEggs.map((egg, i) => {
        var _a2;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-row", style: { justifyContent: "space-between", opacity: egg.active ? 1 : 0.5 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
              "🔑 ",
              egg.code
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { marginLeft: 8, fontSize: "0.82em", color: "var(--n4-accent)" }, children: [
              "🎁 ",
              egg.reward || "N/A"
            ] }),
            egg.description && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.82em", color: "var(--n4-text-muted)" }, children: egg.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.75em", color: "var(--n4-text-muted)" }, children: [
              "Tìm thấy: ",
              ((_a2 = egg.foundBy) == null ? void 0 : _a2.length) || 0,
              " người"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 4 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: async () => {
              const updated = easterEggs.map((e, idx) => idx === i ? { ...e, active: !e.active } : e);
              setEasterEggs(updated);
              await setConfig("easter_eggs", updated, user.id);
            }, children: egg.active ? "⏸️" : "▶️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: async () => {
              const updated = easterEggs.filter((_, idx) => idx !== i);
              setEasterEggs(updated);
              await setConfig("easter_eggs", updated, user.id);
            }, children: "🗑️" })
          ] })
        ] }, egg.id || i);
      }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty n4-admin-text-sm", children: "Chưa có easter egg nào." })
    ] })
  ] });
}
function getLocalStorageSizeKb() {
  try {
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      total += (key.length + (localStorage.getItem(key) || "").length) * 2;
    }
    return (total / 1024).toFixed(1);
  } catch (e) {
    return "?";
  }
}
function getEnvironmentSnapshot() {
  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    online: navigator.onLine,
    cookieEnabled: navigator.cookieEnabled,
    screen: `${screen.width}×${screen.height}`,
    devicePixelRatio,
    localStorage: `${getLocalStorageSizeKb()} KB`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  };
}
const DB_TABLES = [
  "profiles",
  "economy",
  "leaderboard",
  "achievements",
  "app_config",
  "bug_reports",
  "content_errors",
  "announcements",
  "messages",
  "gift_history"
];
function HealthStatsGrid({ tableHealth, latency }) {
  const healthy = tableHealth.filter((t) => t.ok).length;
  const total = tableHealth.length;
  const healthPercent = total ? Math.round(healthy / total * 100) : 0;
  const items = [
    { icon: healthPercent === 100 ? "✅" : "⚠️", value: `${healthPercent}%`, label: "Sức khỏe DB" },
    { icon: "📊", value: `${healthy}/${total}`, label: "Bảng hoạt động" },
    { icon: "⚡", value: latency !== null ? `${latency}ms` : "—", label: "Độ trễ" },
    { icon: "💾", value: `${getLocalStorageSizeKb()} KB`, label: "LocalStorage" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-stat-grid", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-stat", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-stat-icon", children: it.icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-stat-value", children: it.value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-stat-label", children: it.label })
  ] }, it.label)) });
}
function DatabaseTablesSection({ tableHealth }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-admin-section-title", children: "🗄️ Database Tables" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-table-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-table-scroll", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-admin-table n4-responsive-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { className: "n4-sr-only", children: "Trạng thái bảng dữ liệu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Bảng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Trạng thái" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Số dòng" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: tableHealth.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Bảng", className: "n4-admin-text-sm", style: { fontFamily: "var(--n4-font-mono)" }, children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Trạng thái", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-admin-badge ${t.ok ? "n4-admin-badge--low" : "n4-admin-badge--critical"}`, children: t.ok ? "✅ OK" : "❌ Error" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Số dòng", className: "n4-admin-text-sm", children: t.ok ? t.count : t.error })
      ] }, t.name)) })
    ] }) }) })
  ] });
}
function LatencyHistorySection({ history }) {
  if (!history.length) return null;
  const max = Math.max(...history.map((h) => h.ms), 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-admin-section-title", children: "📈 Lịch sử độ trễ" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", alignItems: "flex-end", gap: 2, height: 80 }, children: history.map((h, i) => {
      const pct = h.ms / max * 100;
      const color = h.ms < 200 ? "var(--n4-neon-green)" : h.ms < 500 ? "var(--n4-neon-gold)" : "var(--n4-neon-red)";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          title: `${h.ms}ms — ${h.time}`,
          style: {
            flex: 1,
            height: `${pct}%`,
            minHeight: 2,
            borderRadius: "3px 3px 0 0",
            background: `linear-gradient(to top, ${color}, color-mix(in srgb, ${color} 60%, transparent))`,
            transition: "all 0.2s"
          }
        },
        i
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-flex-between n4-admin-text-xs n4-admin-text-muted", style: { marginTop: 4 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mới nhất" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cũ nhất" })
    ] })
  ] });
}
function EnvironmentSection({ env }) {
  const entries = Object.entries(env);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-admin-section-title", children: "🌐 Môi trường" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-stack n4-admin-gap-sm", children: entries.map(([key, val]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-list-item n4-admin-list-item--settings", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-setting-key", children: key }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-sm", children: String(val) })
    ] }, key)) })
  ] });
}
function AIUsageSection({ usage }) {
  var _a, _b, _c, _d;
  if (!usage) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-admin-section-title", children: "🤖 AI Usage" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-empty", children: "Không có dữ liệu AI usage" })
    ] });
  }
  const items = [
    { label: "Tổng request", value: (_a = usage.total_requests) != null ? _a : "—" },
    { label: "Token đã dùng", value: (_c = (_b = usage.total_tokens) == null ? void 0 : _b.toLocaleString()) != null ? _c : "—" },
    { label: "Chi phí ước tính", value: usage.estimated_cost ? `$${usage.estimated_cost.toFixed(4)}` : "—" },
    { label: "Provider", value: (_d = usage.provider) != null ? _d : "—" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-admin-section-title", children: "🤖 AI Usage" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-summary-grid", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-summary-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-text-xs n4-admin-text-muted", children: it.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-stat-value", style: { fontSize: "var(--n4-fs-md)" }, children: it.value })
    ] }, it.label)) })
  ] });
}
function SystemPanel() {
  const [tableHealth, setTableHealth] = reactExports.useState([]);
  const [latency, setLatency] = reactExports.useState(null);
  const [latencyHistory, setLatencyHistory] = reactExports.useState([]);
  const [aiUsage, setAiUsage] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [checking, setChecking] = reactExports.useState(false);
  const env = reactExports.useMemo(() => getEnvironmentSnapshot(), []);
  reactExports.useEffect(() => {
    runHealthCheck();
  }, []);
  async function runHealthCheck() {
    setChecking(true);
    setLoading(true);
    try {
      const t0 = performance.now();
      await supabase.from("profiles").select("id", { count: "exact", head: true });
      const ms = Math.round(performance.now() - t0);
      setLatency(ms);
      setLatencyHistory((prev) => [
        { ms, time: (/* @__PURE__ */ new Date()).toLocaleTimeString("vi") },
        ...prev.slice(0, 19)
      ]);
      const health = await Promise.all(
        DB_TABLES.map(async (name) => {
          try {
            const { count, error } = await supabase.from(name).select("*", { count: "exact", head: true });
            if (error) return { name, ok: false, error: getUserErrorMessage(error, "Không thể kiểm tra bảng này.") };
            return { name, ok: true, count: count != null ? count : 0 };
          } catch (err) {
            return { name, ok: false, error: getUserErrorMessage(err, "Không thể kiểm tra bảng này.") };
          }
        })
      );
      setTableHealth(health);
      try {
        const { data } = await supabase.from("app_config").select("*").eq("category", "ai_usage");
        if (data == null ? void 0 : data.length) {
          const usage = {};
          data.forEach((r) => {
            usage[r.key] = isNaN(Number(r.value)) ? r.value : Number(r.value);
          });
          setAiUsage(usage);
        }
      } catch (e) {
      }
    } catch (err) {
      console.error("Health check error:", err);
    } finally {
      setLoading(false);
      setChecking(false);
    }
  }
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-loading", children: "⏳ Đang kiểm tra hệ thống..." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-toolbar--end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn--sm", onClick: runHealthCheck, disabled: checking, children: checking ? "⏳ Đang kiểm tra..." : "🔄 Kiểm tra lại" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HealthStatsGrid, { tableHealth, latency }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DatabaseTablesSection, { tableHealth }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LatencyHistorySection, { history: latencyHistory }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AIUsageSection, { usage: aiUsage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EnvironmentSection, { env })
  ] });
}
function AdminDashboard() {
  const { isAdmin, loading: adminLoading } = useIsAdmin();
  const user = useAppStore((s) => s.user);
  const { isPhone, isTablet } = useBreakpoint();
  const [tab, setTab] = reactExports.useState("overview");
  const [search, setSearch] = reactExports.useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = reactExports.useState(false);
  const [cmdPalette, setCmdPalette] = reactExports.useState(false);
  const commandDialogRef = useDialogFocus(cmdPalette, () => setCmdPalette(false));
  const [cmdQuery, setCmdQuery] = reactExports.useState("");
  const tabIds = TABS.map((tab2) => tab2.id);
  const tabLabels = Object.fromEntries(TABS.map((tab2) => [tab2.id, tab2.label]));
  reactExports.useEffect(() => {
    if (isTablet) setSidebarCollapsed(true);
  }, [isTablet]);
  reactExports.useEffect(() => {
    if (isPhone) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tab, isPhone]);
  reactExports.useEffect(() => {
    const handleKey = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setCmdPalette((p) => !p);
        setCmdQuery("");
        return;
      }
      if (cmdPalette && e.key === "Escape") {
        setCmdPalette(false);
        return;
      }
      if (e.ctrlKey && e.key >= "1" && e.key <= "9") {
        e.preventDefault();
        const idx = parseInt(e.key) - 1;
        if (idx < tabIds.length) setTab(tabIds[idx]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [cmdPalette, tabIds]);
  const [realtimeEvents, setRealtimeEvents] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (adminLoading || !(user == null ? void 0 : user.id) || !isAdmin) return void 0;
    const channels = [];
    const addEvent = (type, payload) => {
      setRealtimeEvents((prev) => [{ type, payload, ts: (/* @__PURE__ */ new Date()).toISOString() }, ...prev].slice(0, 20));
    };
    channels.push(
      supabase.channel(`admin-bugs:${user.id}`).on("postgres_changes", { event: "INSERT", schema: "public", table: "bug_reports" }, (payload) => {
        addEvent("🐛 Bug mới", payload.new);
      }).subscribe()
    );
    channels.push(
      supabase.channel(`admin-msgs:${user.id}`).on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, (payload) => {
        addEvent("💬 Tin nhắn mới", payload.new);
      }).subscribe()
    );
    channels.push(
      supabase.channel(`admin-users:${user.id}`).on("postgres_changes", { event: "INSERT", schema: "public", table: "user_profiles" }, (payload) => {
        addEvent("🆕 Người dùng mới", payload.new);
      }).subscribe()
    );
    return () => {
      channels.forEach((ch) => supabase.removeChannel(ch));
    };
  }, [adminLoading, isAdmin, user == null ? void 0 : user.id]);
  if (adminLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin n4-page-enter", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-loading", children: "⏳ Đang kiểm tra quyền..." }) });
  if (!user) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin n4-page-enter", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-loading", children: "🔒 Vui lòng đăng nhập." }) });
  if (!isAdmin) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin n4-page-enter", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-loading", children: "⛔ Bạn không có quyền truy cập trang này." }) });
  const filteredCmdTabs = tabIds.filter(
    (t) => {
      var _a;
      return !cmdQuery || ((_a = tabLabels[t]) == null ? void 0 : _a.toLowerCase().includes(cmdQuery.toLowerCase())) || t.includes(cmdQuery.toLowerCase());
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-header-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 24 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-admin-title", children: "Bảng quản trị" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-subtitle", children: "Quản lý hệ thống học N4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-header-controls", children: [
        realtimeEvents.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: "n4-btn n4-btn-sm n4-btn-ghost n4-admin-notif-btn",
            onClick: () => setRealtimeEvents([]),
            title: "Xóa thông báo",
            "aria-label": `${realtimeEvents.length} thông báo mới`,
            children: [
              "🔔",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-admin-notif-badge", children: realtimeEvents.length })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "n4-input n4-admin-search",
            placeholder: isPhone ? "🔍 Tìm kiếm..." : "🔍 Tìm kiếm... (Ctrl+K)",
            value: search,
            onChange: (e) => setSearch(e.target.value)
          }
        )
      ] })
    ] }),
    cmdPalette && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "n4-admin-cmd-backdrop",
          onPointerDown: (event) => {
            if (event.target === event.currentTarget) setCmdPalette(false);
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: commandDialogRef, className: "n4-admin-cmd-shell", role: "dialog", "aria-modal": "true", "aria-label": "Command palette", tabIndex: -1, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: "n4-input n4-admin-cmd-input",
                placeholder: "Tìm panel... (Ctrl+K)",
                value: cmdQuery,
                onChange: (e) => setCmdQuery(e.target.value),
                onKeyDown: (e) => {
                  if (e.key === "Enter") {
                    const match = filteredCmdTabs[0];
                    if (match) {
                      setTab(match);
                      setCmdPalette(false);
                    }
                  }
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-cmd-list", children: [
              filteredCmdTabs.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: `n4-admin-cmd-item ${tab === t ? "active" : ""}`,
                  onClick: () => {
                    setTab(t);
                    setCmdPalette(false);
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-admin-cmd-shortcut", children: [
                      "Ctrl+",
                      i + 1
                    ] }),
                    tabLabels[t]
                  ]
                },
                t
              )),
              filteredCmdTabs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-admin-cmd-item", style: { color: "var(--n4-text-muted)" }, children: "Không tìm thấy panel phù hợp" })
            ] })
          ] })
        }
      ),
      document.body
    ),
    isPhone && /* @__PURE__ */ jsxRuntimeExports.jsx(AdminMobileNav, { activeTab: tab, onTabChange: setTab }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-admin-layout ${sidebarCollapsed ? "sidebar-collapsed" : ""}`, children: [
      !isPhone && /* @__PURE__ */ jsxRuntimeExports.jsx(
        AdminSidebar,
        {
          activeTab: tab,
          onTabChange: setTab,
          collapsed: sidebarCollapsed,
          onToggleCollapse: () => setSidebarCollapsed((c) => !c)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-admin-main", children: [
        tab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewPanel, { onNavigate: setTab }),
        tab === "users" && /* @__PURE__ */ jsxRuntimeExports.jsx(UsersPanel, { search, onOpenChat: (uid) => {
          setTab("messages");
          setTimeout(() => {
            var _a;
            return (_a = window.__adminOpenChat) == null ? void 0 : _a.call(window, uid);
          }, 100);
        } }),
        tab === "issues" && /* @__PURE__ */ jsxRuntimeExports.jsx(IssuesPanel, { search }),
        tab === "announce" && /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementsPanel, { search }),
        tab === "challenges" && /* @__PURE__ */ jsxRuntimeExports.jsx(ChallengesPanel, { search }),
        tab === "messages" && /* @__PURE__ */ jsxRuntimeExports.jsx(MessagesPanel, { search }),
        tab === "activity" && /* @__PURE__ */ jsxRuntimeExports.jsx(ActivityPanel, { search }),
        tab === "economy" && /* @__PURE__ */ jsxRuntimeExports.jsx(EconomyPanel, {}),
        tab === "content" && /* @__PURE__ */ jsxRuntimeExports.jsx(ContentPanel, {}),
        tab === "config" && /* @__PURE__ */ jsxRuntimeExports.jsx(ConfigPanel, {}),
        tab === "system" && /* @__PURE__ */ jsxRuntimeExports.jsx(SystemPanel, {})
      ] })
    ] })
  ] });
}
export {
  AdminDashboard as default
};
