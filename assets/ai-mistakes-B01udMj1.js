import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { h as useLearningStore, P as getUserErrorMessage, _ as getSrsLevel } from "./index-BEJSIlFS.js";
import { u as useAIKey } from "./useAIKey-CpSw0zmN.js";
import { analyzeMistakes } from "./ai-S4u4-t6_.js";
import { c as cacheKey, g as getCached, s as setCache } from "./ai-cache-BWre2oCi.js";
import { L as Link } from "./vendor-router-Dx6RIovR.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./client-wNJ1tNgU.js";
import "./api-BAg1LJRR.js";
function AIMistakes() {
  var _a, _b, _c;
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const { trainerStats, srs, bookmarks } = useLearningStore(
    useShallow((s) => ({ trainerStats: s.trainerStats, srs: s.srs, bookmarks: s.bookmarks }))
  );
  const [result, setResult] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const analyze = reactExports.useCallback(async () => {
    setLoading(true);
    setError(null);
    const key = cacheKey("mistakes", JSON.stringify(Object.keys(trainerStats)));
    const cached = getCached(key);
    if (cached) {
      setResult(cached);
      setLoading(false);
      return;
    }
    try {
      const data = await analyzeMistakes(trainerStats, srs, bookmarks, apiKey);
      setResult(data);
      setCache(key, data, 6 * 60 * 60 * 1e3);
    } catch (err) {
      setError(getUserErrorMessage(err, "Không thể phân tích lỗi sai lúc này."));
    } finally {
      setLoading(false);
    }
  }, [trainerStats, srs, bookmarks, apiKey]);
  if (!isLoggedIn || !hasKey) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-ai-nokey", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-nokey-icon", children: "🎯" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Phân tích lỗi bằng AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-ai-nokey-desc", children: !isLoggedIn ? "Vui lòng đăng nhập để sử dụng tính năng này." : "Đang chờ AI key từ hệ thống..." }),
      !isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", className: "n4-btn n4-btn-primary", children: "🔒 Đăng nhập" })
    ] });
  }
  const scoreClass = (v) => v >= 70 ? "good" : v >= 40 ? "ok" : "weak";
  const statusIcon = (s) => s === "strong" ? "✅" : s === "ok" ? "⚠️" : "❌";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-feature n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-hero-icon", children: "🎯" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Phân tích lỗi bằng AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Phân tích pattern lỗi sai — tìm điểm yếu — đề xuất bài tập sửa lỗi" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-2)", fontSize: "0.9rem" }, children: "📊 Dữ liệu hiện tại" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-bar-chart", children: [
        Object.entries(trainerStats).filter(([, s]) => s.total > 0).map(([id, s]) => {
          const acc = Math.round(s.correct / s.total * 100);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-bar", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-bar-label", children: id.split("-").pop() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-bar-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-bar-fill", style: { width: `${acc}%`, "--bar-color": acc >= 70 ? "var(--n4-neon-green)" : acc >= 40 ? "var(--n4-neon-yellow, #EAB308)" : "var(--n4-neon-red)" } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-ai-bar-value", children: [
              acc,
              "%"
            ] })
          ] }, id);
        }),
        Object.keys(trainerStats).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-muted)", fontSize: "0.85rem" }, children: "Chưa có dữ liệu. Hãy luyện tập để AI phân tích!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "var(--n4-sp-2)", fontSize: "0.8rem", color: "var(--n4-text-muted)" }, children: [
        "SRS items yếu: ",
        Object.entries(srs).filter(([, state]) => getSrsLevel(state) <= 2).length,
        " | Bookmarks: ",
        Object.values(bookmarks).flat().length
      ] })
    ] }),
    !result && !loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: analyze, style: { padding: "12px 32px", fontSize: "1rem" }, children: "🤖 Phân tích bằng AI" }) }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-loading-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-loading-spinner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "🔍 Đang phân tích dữ liệu học tập..." })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-error-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-icon", children: "❌" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-msg", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => {
        setError(null);
        analyze();
      }, children: "🔄 Thử lại" })
    ] }),
    result && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-ai-score ${scoreClass(result.overallScore)}`, children: result.overallScore }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "var(--n4-sp-2)", fontSize: "0.9rem", color: "var(--n4-text-secondary)" }, children: "Điểm tổng quan" }),
        result.summary && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "var(--n4-sp-2) 0 0", fontSize: "0.85rem" }, children: result.summary })
      ] }),
      ((_a = result.categories) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "0.9rem" }, children: "📊 Phân tích theo loại" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-bar-chart", children: result.categories.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-bar", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-ai-bar-label", children: [
              statusIcon(cat.status),
              " ",
              cat.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-bar-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-bar-fill", style: { width: `${cat.accuracy}%`, "--bar-color": cat.status === "strong" ? "var(--n4-neon-green)" : cat.status === "ok" ? "var(--n4-neon-yellow, #EAB308)" : "var(--n4-neon-red)" } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-ai-bar-value", children: [
              cat.accuracy,
              "%"
            ] })
          ] }),
          cat.tip && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.75rem", color: "var(--n4-text-muted)", marginLeft: 82, marginTop: 2 }, children: [
            "💡 ",
            cat.tip
          ] })
        ] }, i)) })
      ] }),
      ((_b = result.errorPatterns) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "0.9rem" }, children: "🔍 Pattern lỗi sai" }),
        result.errorPatterns.map((ep, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "var(--n4-sp-2)", padding: "var(--n4-sp-2)", borderRadius: "var(--n4-radius-sm)", background: "var(--n4-bg-elevated)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontWeight: 600, fontSize: "0.85rem" }, children: [
            "❌ ",
            ep.pattern
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8rem", color: "var(--n4-text-secondary)", margin: "4px 0" }, children: ep.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.8rem", color: "var(--n4-neon-green)" }, children: [
            "✅ ",
            ep.fix
          ] })
        ] }, i))
      ] }),
      ((_c = result.recommendations) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "0.9rem" }, children: "🎯 Đề xuất hành động" }),
        result.recommendations.map((rec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "var(--n4-sp-2)", alignItems: "flex-start", marginBottom: "var(--n4-sp-2)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-pill", style: { "--pill-color": rec.priority === "high" ? "var(--n4-neon-red)" : rec.priority === "medium" ? "var(--n4-neon-yellow, #EAB308)" : "var(--n4-neon-green)" }, children: rec.priority }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, fontSize: "0.85rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: rec.action }),
            " — ",
            rec.target
          ] })
        ] }, i))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: analyze, children: "🔄 Phân tích lại" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/ai-tutor", className: "n4-btn n4-btn-ghost", children: "✨ Gia sư AI" })
      ] })
    ] })
  ] });
}
export {
  AIMistakes as default
};
