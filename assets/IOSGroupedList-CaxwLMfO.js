import { j as jsxRuntimeExports, R as React } from "./vendor-react-BYxMSDiB.js";
import { g as ChevronRight } from "./vendor-icons-DHCyxOF-.js";
function IOSGroupedList({ header, footer, children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-ios-group ${className}`, children: [
    header && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ios-group-header", children: header }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ios-group-body", children }),
    footer && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ios-group-footer", children: footer })
  ] });
}
function IOSGroupedRow({
  label,
  description,
  icon,
  right,
  chevron = false,
  onClick,
  danger = false,
  compact = false,
  className = ""
}) {
  var _a;
  const Tag = onClick ? "button" : "div";
  const isToggle = React.isValidElement(right) && right.type === "button" && String(right.props.className || "").split(/\s+/).includes("n4-toggle");
  const accessibleRight = isToggle ? React.cloneElement(right, {
    type: right.props.type || "button",
    "aria-label": right.props["aria-label"] || label,
    "aria-pressed": (_a = right.props["aria-pressed"]) != null ? _a : String(right.props.className || "").split(/\s+/).includes("active")
  }) : right;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Tag,
    {
      className: `n4-ios-row ${compact ? "n4-ios-row--compact" : ""} ${danger ? "n4-ios-row--danger" : ""} ${onClick ? "n4-ios-row--tappable" : ""} ${className}`,
      onClick,
      type: onClick ? "button" : void 0,
      children: [
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ios-row-icon", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ios-row-content", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ios-row-label", children: label }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ios-row-desc", children: description })
        ] }),
        accessibleRight && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ios-row-right", children: accessibleRight }),
        chevron && !right && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, strokeWidth: 2, className: "n4-ios-row-chevron" })
      ]
    }
  );
}
export {
  IOSGroupedList as I,
  IOSGroupedRow as a
};
