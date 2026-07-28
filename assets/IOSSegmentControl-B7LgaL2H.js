import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
function IOSSegmentControl({ items, active, onChange, className = "" }) {
  const containerRef = reactExports.useRef(null);
  const [pillStyle, setPillStyle] = reactExports.useState({});
  const updatePill = reactExports.useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const idx = items.findIndex((item) => item.value === active);
    if (idx < 0) return;
    const btn = container.children[idx + 1];
    if (!btn) return;
    setPillStyle({
      width: btn.offsetWidth + "px",
      transform: `translateX(${btn.offsetLeft}px)`
    });
  }, [items, active]);
  reactExports.useEffect(() => {
    updatePill();
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [updatePill]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-ios-segment ${className}`, ref: containerRef, role: "tablist", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ios-segment-pill", style: pillStyle }),
    items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        role: "tab",
        "aria-selected": item.value === active,
        className: `n4-ios-segment-btn ${item.value === active ? "active" : ""}`,
        onClick: () => onChange(item.value),
        children: [
          item.icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ios-segment-icon", children: item.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
        ]
      },
      item.value
    ))
  ] });
}
export {
  IOSSegmentControl as I
};
