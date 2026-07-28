import { r as reactExports, u as useShallow, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { a3 as useDialogFocus, J as useDataStore } from "./feature-3d-ClP3ARU5.js";
import { u as useSwipeClose } from "./useSwipeClose-CIl2xGkM.js";
import { u as useDebouncedValue } from "./useDebouncedValue-BtXOG7zv.js";
import { s as searchAppData } from "./data-index-TwpfsXMG.js";
import { N as NAV_ITEMS } from "./index-ZUSnnghe.js";
import { b as useNavigate } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-icons-DHCyxOF-.js";
const TOOL_ITEMS = [
  { icon: "⚙️", label: "Cài đặt", desc: "Cài đặt ứng dụng", path: "/settings", cat: "settings", shortcut: "Ctrl+," },
  { icon: "🔍", label: "Từ điển Jisho", desc: "Tra từ điển Jisho", action: "openJisho", cat: "tool" },
  { icon: "⏱️", label: "Hẹn giờ học", desc: "Đồng hồ học", action: "openStudyTimer", cat: "tool" },
  { icon: "🐛", label: "Bảng gỡ lỗi", desc: "Công cụ gỡ lỗi (Ctrl+B)", shortcut: "Ctrl+B", cat: "tool", action: "__debug__" }
];
const PALETTE_ITEMS = [...NAV_ITEMS, ...TOOL_ITEMS];
const PALETTE_SEARCH_ITEMS = PALETTE_ITEMS.map((item) => ({
  ...item,
  _searchText: `${item.label || ""} ${item.desc || ""} ${item.cat || ""}`.toLowerCase()
}));
function CommandPalette({ open, onClose }) {
  const [query, setQuery] = reactExports.useState("");
  const [activeIdx, setActiveIdx] = reactExports.useState(0);
  const debouncedQuery = useDebouncedValue(query, 120);
  const inputRef = reactExports.useRef(null);
  const dialogRef = useDialogFocus(open, onClose, { initialFocusRef: inputRef });
  const navigate = useNavigate();
  const swipeClose = useSwipeClose(onClose);
  const { vocab, kanji, grammar, minna } = useDataStore(useShallow((s) => ({
    vocab: s.vocab,
    kanji: s.kanji,
    grammar: s.grammar,
    minna: s.minna
  })));
  const filtered = reactExports.useMemo(() => {
    if (!debouncedQuery.trim()) return PALETTE_SEARCH_ITEMS;
    const q = debouncedQuery.toLowerCase();
    const navMatches = PALETTE_SEARCH_ITEMS.filter((item) => item._searchText.includes(q));
    const dataMatches = searchAppData(q, { vocab, kanji, grammar, minna }, 15);
    return [...navMatches, ...dataMatches];
  }, [debouncedQuery, vocab, kanji, grammar, minna]);
  reactExports.useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIdx(0);
    }
  }, [open]);
  reactExports.useEffect(() => {
    setActiveIdx(0);
  }, [debouncedQuery]);
  function handleKeyDown(e) {
    if (e.key === "Escape") {
      onClose();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    }
    if (e.key === "Enter" && filtered[activeIdx]) {
      selectItem(filtered[activeIdx]);
    }
  }
  function selectItem(item) {
    onClose();
    if (item.path) {
      navigate(item.path);
    } else if (item.action === "__debug__") {
      window.dispatchEvent(new Event("n4-open-debug-panel"));
    } else if (item.action && typeof window[item.action] === "function") {
      window[item.action]();
    }
  }
  const indexed = reactExports.useMemo(() => filtered.map((item, idx) => ({ ...item, _idx: idx })), [filtered]);
  const navResults = indexed.filter((i) => i.cat !== "data");
  const dataResults = indexed.filter((i) => i.cat === "data");
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-palette-overlay", onPointerDown: (e) => e.target === e.currentTarget && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "n4-palette", role: "dialog", "aria-modal": "true", "aria-label": "Tìm nhanh trong ứng dụng", tabIndex: -1, ...swipeClose.swipeHandlers, style: swipeClose.swipeStyle, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: inputRef,
        type: "text",
        className: "n4-palette-input",
        placeholder: "Tìm kiếm từ vựng, kanji, trainer, cài đặt...",
        value: query,
        onChange: (e) => setQuery(e.target.value),
        onKeyDown: handleKeyDown
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-palette-results", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-palette-empty", children: "Không tìm thấy kết quả" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      navResults.map((item) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: `n4-palette-item ${item._idx === activeIdx ? "active" : ""}`,
            onClick: () => selectItem(item),
            onMouseEnter: () => setActiveIdx(item._idx),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-palette-item-icon", children: item.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-palette-item-label", children: [
                item.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-text-muted)", marginLeft: 8, fontSize: "var(--n4-fs-xs)" }, children: item.desc })
              ] }),
              item.shortcut && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-palette-item-shortcut", children: item.shortcut })
            ]
          },
          "nav-" + item.label
        );
      }),
      dataResults.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "6px 16px", fontSize: "var(--n4-fs-xs)", color: "var(--n4-text-muted)", borderTop: "1px solid var(--n4-border)" }, children: [
          "📚 Dữ liệu (",
          dataResults.length,
          ")"
        ] }),
        dataResults.map((item) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: `n4-palette-item ${item._idx === activeIdx ? "active" : ""}`,
              onClick: () => selectItem(item),
              onMouseEnter: () => setActiveIdx(item._idx),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-palette-item-icon", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-palette-item-label", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontFamily: "var(--n4-font-jp)", fontWeight: 600 }, children: item.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-text-muted)", marginLeft: 8, fontSize: "var(--n4-fs-xs)" }, children: item.desc })
                ] })
              ]
            },
            "data-" + item.label + item.desc
          );
        })
      ] })
    ] }) })
  ] }) });
}
export {
  CommandPalette as default
};
