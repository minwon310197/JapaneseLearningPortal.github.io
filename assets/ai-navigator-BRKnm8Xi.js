import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { U as useAIKey, c_ as navigateApp } from "./feature-3d-ClP3ARU5.js";
import { c as getUserErrorMessage } from "./index-ZUSnnghe.js";
import { c as cacheKey, g as getCached, s as setCache } from "./ai-cache-BWre2oCi.js";
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-icons-DHCyxOF-.js";
const QUICK_ASKS = [
  { icon: "📝", label: "Muốn học từ vựng mới" },
  { icon: "📐", label: "Ôn ngữ pháp yếu" },
  { icon: "🎧", label: "Luyện nghe tiếng Nhật" },
  { icon: "🎮", label: "Chơi game học tiếng Nhật" },
  { icon: "📖", label: "Luyện đọc hiểu" },
  { icon: "✍️", label: "Luyện viết tiếng Nhật" },
  { icon: "🎭", label: "Luyện hội thoại" },
  { icon: "📋", label: "Chuẩn bị thi JLPT" },
  { icon: "🔍", label: "Tra từ điển" },
  { icon: "🏯", label: "Học kanji" }
];
function AINavigator() {
  var _a;
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [input, setInput] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const abortRef = reactExports.useRef(null);
  const search = reactExports.useCallback(async (query) => {
    if (!(query == null ? void 0 : query.trim()) || loading) return;
    const q = query.trim();
    setInput("");
    setError(null);
    setLoading(true);
    const key = cacheKey("navigator", q);
    const cached = getCached(key);
    if (cached) {
      setResult(cached);
      setLoading(false);
      return;
    }
    try {
      abortRef.current = new AbortController();
      const data = await navigateApp(q, apiKey);
      setResult(data);
      setCache(key, data, 12 * 60 * 60 * 1e3);
    } catch (err) {
      if (err.name !== "AbortError") setError(getUserErrorMessage(err, "Không thể tạo lộ trình lúc này."));
    } finally {
      setLoading(false);
    }
  }, [apiKey, loading]);
  if (!isLoggedIn || !hasKey) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-ai-nokey", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-nokey-icon", children: "🧭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Điều hướng AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-ai-nokey-desc", children: !isLoggedIn ? "Vui lòng đăng nhập để sử dụng tính năng này." : "Đang chờ AI key từ hệ thống..." }),
      !isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", className: "n4-btn n4-btn-primary", children: "🔒 Đăng nhập" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-feature n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-hero-icon", children: "🤖" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Điều hướng AI thông minh" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Mô tả bạn muốn gì — AI sẽ gợi ý tính năng phù hợp nhất" })
    ] }),
    !result && !loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "var(--n4-sp-2)", marginBottom: "var(--n4-sp-4)", justifyContent: "center" }, children: QUICK_ASKS.map((qa) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-ai-config-option", onClick: () => search(qa.label), children: [
      qa.icon,
      " ",
      qa.label
    ] }, qa.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-input-area", style: { marginBottom: "var(--n4-sp-4)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "n4-input n4-ai-input",
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter") search(input);
          },
          placeholder: "Bạn muốn làm gì? (VD: Muốn luyện nghe, Ôn kanji yếu...)",
          disabled: loading
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", disabled: loading || !input.trim(), onClick: () => search(input), children: loading ? "⏳" : "🔍" })
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-loading-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-loading-spinner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "🔍 Đang phân tích yêu cầu..." })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-error-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-icon", children: "❌" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-msg", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => setError(null), children: "Thử lại" })
    ] }),
    result && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-rec-list", children: (_a = result.recommendations) == null ? void 0 : _a.map((rec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: rec.path, className: "n4-ai-rec-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-rec-icon", children: rec.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-rec-info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-rec-title", children: rec.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-rec-reason", children: rec.reason })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-rec-arrow", children: "→" })
      ] }, i)) }),
      result.tip && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-glass", style: { marginTop: "var(--n4-sp-3)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85rem", color: "var(--n4-text-secondary)" }, children: [
        "💡 ",
        result.tip
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => setResult(null), children: "🔄 Hỏi câu khác" }) })
    ] })
  ] });
}
export {
  AINavigator as default
};
