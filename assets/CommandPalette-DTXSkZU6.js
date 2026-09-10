import { r as reactExports, u as useShallow, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { a as useDataStore } from "./index-BEJSIlFS.js";
import { u as useSwipeClose } from "./useSwipeClose-Ba57cA9P.js";
import { u as useDebouncedValue, E as EMPTY_SEARCH_ITEMS, N as NAV_ITEMS } from "./navigation-index-BUPaV9YS.js";
import { u as useDialogFocus } from "./useDialogFocus-CowhWfi-.js";
import { s as searchAppData } from "./data-index-Dcwjwz3J.js";
import { T as TABS, a as TAB_SECTIONS, S as SECTIONS } from "./settings-constants-hqFN9CGt.js";
import { a as useNavigate } from "./vendor-router-Dx6RIovR.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./registry-BAotxlgH.js";
const TOOL_ITEMS = [
  { icon: "TRA", label: "Từ điển", desc: "Tra từ trong dữ liệu N4 và nguồn trực tuyến", path: "/dictionary", cat: "tool", local: true },
  { icon: "HỖ TRỢ", label: "Công cụ học", desc: "Hẹn giờ và công cụ hỗ trợ", path: "/tools", cat: "tool", local: true },
  ...[]
];
const SETTINGS_ITEMS = TABS.flatMap((tab) => (TAB_SECTIONS[tab.id] || []).map((sectionId) => {
  var _a, _b, _c;
  return {
    icon: "CÀI",
    label: ((_b = (_a = SECTIONS[sectionId]) == null ? void 0 : _a.header) == null ? void 0 : _b.replace(/^[^\p{L}\p{N}]+/u, "")) || tab.label,
    desc: `${tab.label} › ${((_c = SECTIONS[sectionId]) == null ? void 0 : _c.footer) || "Cài đặt ứng dụng"}`,
    path: `/settings?tab=${tab.id}&section=${sectionId}`,
    cat: "settings",
    local: true
  };
}));
const PALETTE_ITEMS = [...NAV_ITEMS, ...TOOL_ITEMS, ...SETTINGS_ITEMS];
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
    if (!debouncedQuery.trim()) return EMPTY_SEARCH_ITEMS;
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
  reactExports.useEffect(() => {
    var _a, _b;
    if (!open) return;
    (_b = (_a = document.querySelector(`[data-palette-index="${activeIdx}"]`)) == null ? void 0 : _a.scrollIntoView) == null ? void 0 : _b.call(_a, { block: "nearest" });
  }, [activeIdx, open]);
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
    }
  }
  const indexed = reactExports.useMemo(() => filtered.map((item, idx) => ({ ...item, _idx: idx })), [filtered]);
  const navResults = indexed.filter((i) => i.cat !== "data");
  const dataResults = indexed.filter((i) => i.cat === "data");
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v6-command-backdrop", onPointerDown: (e) => e.target === e.currentTarget && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "v6-command", role: "dialog", "aria-modal": "true", "aria-label": "Tìm nhanh trong ứng dụng", tabIndex: -1, ...swipeClose.swipeHandlers, style: swipeClose.swipeStyle, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: inputRef,
        type: "text",
        className: "v6-command__input",
        "aria-label": "Tìm kiếm trong ứng dụng",
        placeholder: "Tìm kiếm từ vựng, kanji, trainer, cài đặt...",
        value: query,
        onChange: (e) => setQuery(e.target.value),
        onKeyDown: handleKeyDown,
        "aria-describedby": "palette-result-count"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "palette-result-count", className: "v6-sr-only", "aria-live": "polite", children: [
      filtered.length,
      " kết quả"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v6-command__results", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v6-command__empty", children: "Không tìm thấy kết quả" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      navResults.map((item) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-palette-index": item._idx,
            className: `v6-command__item ${item._idx === activeIdx ? "active" : ""}`,
            onClick: () => selectItem(item),
            onMouseEnter: () => setActiveIdx(item._idx),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-command__item-icon", "aria-hidden": "true", children: item.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v6-command__item-label", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightedText, { text: item.label, query: debouncedQuery }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-command__item-desc", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightedText, { text: item.desc, query: debouncedQuery }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v6-command__source", children: [
                item.local === false ? "Trực tuyến" : "Cục bộ",
                " · ",
                item.cat
              ] }),
              item.shortcut && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-command__shortcut", children: item.shortcut })
            ]
          },
          "nav-" + item.label
        );
      }),
      dataResults.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v6-command__group-heading", children: [
          "Dữ liệu học tập (",
          dataResults.length,
          ")"
        ] }),
        dataResults.map((item) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-palette-index": item._idx,
              className: `v6-command__item ${item._idx === activeIdx ? "active" : ""}`,
              onClick: () => selectItem(item),
              onMouseEnter: () => setActiveIdx(item._idx),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-command__item-icon", "aria-hidden": "true", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v6-command__item-label", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-command__japanese", lang: "ja", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightedText, { text: item.label, query: debouncedQuery }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-command__item-desc", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightedText, { text: item.desc, query: debouncedQuery }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v6-command__source", children: "Cục bộ · nội dung" })
              ]
            },
            "data-" + item.label + item.desc
          );
        })
      ] })
    ] }) })
  ] }) });
}
function HighlightedText({ text, query }) {
  const value = String(text || "");
  const needle = String(query || "").trim();
  if (!needle) return value;
  const index = value.toLocaleLowerCase("vi").indexOf(needle.toLocaleLowerCase("vi"));
  if (index < 0) return value;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    value.slice(0, index),
    /* @__PURE__ */ jsxRuntimeExports.jsx("mark", { children: value.slice(index, index + needle.length) }),
    value.slice(index + needle.length)
  ] });
}
export {
  CommandPalette as default
};
