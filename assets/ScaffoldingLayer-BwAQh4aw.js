import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { u as useInGameLookup, a as useGameHelpers, Q as QuickDictionaryOverlay, C as ContentDetailDrawer, G as GameToolbar } from "./ModeResultsScreen-5Gki9ifL.js";
import { G as isN4Flag } from "./index-BEJSIlFS.js";
function ScaffoldingLayer({
  currentItem,
  text = "",
  toolbarConfig,
  minimal = false,
  placement = "inline",
  // 'inline' | 'floating'
  compact = true,
  className = ""
}) {
  const enabled = isN4Flag("scaffolding");
  const currentItemKey = (currentItem == null ? void 0 : currentItem.key) || null;
  const [drawerKey, setDrawerKey] = reactExports.useState(null);
  const lookup = useInGameLookup();
  const onOpenDrawer = reactExports.useCallback((k) => setDrawerKey(k || currentItemKey), [currentItemKey]);
  const helpers = useGameHelpers({
    currentItemKey,
    onOpenLookup: lookup.open,
    onOpenDrawer
  });
  if (!enabled) return null;
  const resolvedText = text || (currentItem == null ? void 0 : currentItem.word) || (currentItem == null ? void 0 : currentItem.character) || (currentItem == null ? void 0 : currentItem.title) || "";
  if (!currentItemKey && !resolvedText && !toolbarConfig) return null;
  const defaultConfig = currentItemKey && !minimal ? { hint: true, reveal: false, speak: true, bookmark: true, lookup: true, drawer: true } : { hint: false, reveal: false, speak: !!resolvedText, bookmark: false, lookup: true, drawer: false };
  const finalConfig = { ...defaultConfig, ...toolbarConfig || {} };
  const toolbar = /* @__PURE__ */ jsxRuntimeExports.jsx(
    GameToolbar,
    {
      helpers,
      config: finalConfig,
      text: resolvedText,
      compact,
      className
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    placement === "floating" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "n4-scaffolding-layer__floating",
        style: {
          position: "fixed",
          right: "var(--n4-sp-3, 12px)",
          bottom: "var(--n4-sp-3, 12px)",
          zIndex: 1500
        },
        children: toolbar
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "n4-scaffolding-layer__inline",
        style: {
          display: "flex",
          justifyContent: "center",
          margin: "var(--n4-sp-2, 8px) 0"
        },
        children: toolbar
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuickDictionaryOverlay,
      {
        active: lookup.active,
        onClose: lookup.close,
        onSelect: (item) => {
          setDrawerKey(item.key);
          lookup.close();
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ContentDetailDrawer,
      {
        itemKey: drawerKey,
        open: !!drawerKey,
        onClose: () => setDrawerKey(null)
      }
    )
  ] });
}
export {
  ScaffoldingLayer as S
};
