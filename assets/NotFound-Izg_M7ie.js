import { j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { u as useLocation, L as Link } from "./vendor-router-Dx6RIovR.js";
function NotFound() {
  const location = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "n4-page", "aria-labelledby": "not-found-title", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { maxWidth: 560, margin: "3rem auto", textAlign: "center" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { id: "not-found-title", children: "Không tìm thấy trang" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Đường dẫn ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: location.pathname }),
      " không tồn tại hoặc đã được thay đổi."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-primary", to: "/", children: "Về trang chủ" })
  ] }) });
}
export {
  NotFound as default
};
