import { r as reactExports, u as useShallow, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { I as IOSGroupedList, a as IOSGroupedRow } from "./IOSGroupedList-s00mgaMZ.js";
import { u as useAppStore } from "./index-BEJSIlFS.js";
import { l as loadLegacyFeature } from "./legacy-loader-gyvSYPc3.js";
import { T as TOOL_GROUPS } from "./learning-tools-CW2TYh-A.js";
import { a as useNavigate } from "./vendor-router-Dx6RIovR.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./world-tool-destinations-BAVvWbat.js";
async function callLegacy(fnName) {
  await loadLegacyFeature(fnName);
}
function ToolsPanel() {
  const [search, setSearch] = reactExports.useState("");
  const navigate = useNavigate();
  const { sidebarStudyTools, sidebarExtended, sidebarPhase2, sidebarPhase3 } = useAppStore(
    useShallow((s) => ({
      sidebarStudyTools: s.sidebarStudyTools,
      sidebarExtended: s.sidebarExtended,
      sidebarPhase2: s.sidebarPhase2,
      sidebarPhase3: s.sidebarPhase3
    }))
  );
  const handleToolClick = reactExports.useCallback((tool) => {
    if (tool.route) {
      navigate(tool.route);
      return;
    }
    callLegacy(tool.fn);
  }, [navigate]);
  const VISIBILITY_MAP = {
    lookup: sidebarStudyTools,
    practice: sidebarStudyTools,
    tracking: sidebarStudyTools,
    challenge: sidebarStudyTools,
    support: sidebarStudyTools,
    extended: sidebarExtended,
    daily: sidebarPhase2,
    reference: sidebarPhase2,
    flashcards: sidebarPhase2,
    smart: sidebarPhase3
  };
  const filteredGroups = reactExports.useMemo(() => {
    let groups = TOOL_GROUPS.filter((g) => {
      if (g.id in VISIBILITY_MAP) return VISIBILITY_MAP[g.id] !== false;
      return true;
    });
    const q = search.toLowerCase().trim();
    if (!q) return groups;
    return groups.map((g) => ({
      ...g,
      tools: g.tools.filter(
        (t) => t.label.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || (t.fn || "").toLowerCase().includes(q) || (t.route || "").toLowerCase().includes(q)
      )
    })).filter((g) => g.tools.length > 0);
  }, [search, sidebarExtended, sidebarPhase2, sidebarPhase3]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "0 var(--n4-sp-4)", marginBottom: "var(--n4-sp-3)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: "n4-input",
        type: "text",
        placeholder: "🔍 Tìm công cụ...",
        value: search,
        onChange: (e) => setSearch(e.target.value),
        style: { width: "100%" }
      }
    ) }),
    filteredGroups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsx(IOSGroupedList, { header: group.header, children: group.tools.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      IOSGroupedRow,
      {
        icon: tool.icon,
        label: tool.label,
        description: tool.desc,
        chevron: true,
        onClick: () => handleToolClick(tool)
      },
      tool.fn || tool.route || tool.label
    )) }, group.id)),
    filteredGroups.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", style: { padding: "var(--n4-sp-8)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        'Không tìm thấy công cụ cho "',
        search,
        '"'
      ] })
    ] })
  ] });
}
export {
  ToolsPanel as default
};
