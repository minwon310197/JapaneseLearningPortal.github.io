import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { u as useAIKey } from "./useAIKey-CpSw0zmN.js";
import { P as getUserErrorMessage, L as speakJP } from "./index-BEJSIlFS.js";
import { simplifyText } from "./ai-S4u4-t6_.js";
import { c as cacheKey, g as getCached, s as setCache } from "./ai-cache-BWre2oCi.js";
import { L as Link } from "./vendor-router-Dx6RIovR.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./client-wNJ1tNgU.js";
import "./api-BAg1LJRR.js";
const SAMPLE_TOPICS = [
  { icon: "🌸", label: "日本の季節", desc: "Mùa ở Nhật Bản" },
  { icon: "🚄", label: "日本の電車", desc: "Tàu điện ở Nhật" },
  { icon: "🍣", label: "日本の食べ物", desc: "Ẩm thực Nhật Bản" },
  { icon: "🎌", label: "日本の祭り", desc: "Lễ hội Nhật Bản" },
  { icon: "📱", label: "日本のテクノロジー", desc: "Công nghệ Nhật" },
  { icon: "🏫", label: "日本の学校", desc: "Trường học Nhật Bản" }
];
function AINews() {
  var _a, _b, _c;
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [inputText, setInputText] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [showOriginal, setShowOriginal] = reactExports.useState(false);
  const simplify = reactExports.useCallback(async (text) => {
    if (!text.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    const key = cacheKey("news", text.trim().slice(0, 100));
    const cached = getCached(key);
    if (cached) {
      setResult({ ...cached, originalText: text.trim() });
      setLoading(false);
      return;
    }
    try {
      const data = await simplifyText(text.trim(), apiKey);
      setResult({ ...data, originalText: text.trim() });
      setCache(key, data, 48 * 60 * 60 * 1e3);
    } catch (err) {
      setError(getUserErrorMessage(err, "Không thể phân tích bài báo lúc này."));
    } finally {
      setLoading(false);
    }
  }, [apiKey]);
  const handleTopic = (topic) => {
    setInputText("");
    simplify(topic.label);
  };
  if (!isLoggedIn || !hasKey) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-ai-nokey", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-nokey-icon", children: "📰" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Đơn giản hóa tin bằng AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-ai-nokey-desc", children: !isLoggedIn ? "Vui lòng đăng nhập để sử dụng tính năng này." : "Đang chờ AI key từ hệ thống..." }),
      !isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", className: "n4-btn n4-btn-primary", children: "🔒 Đăng nhập" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-feature n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-hero-icon", children: "📰" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Đơn giản hóa tin bằng AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Đơn giản hóa văn bản tiếng Nhật — thêm chú thích và từ vựng" })
    ] }),
    !result && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-config", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            className: "n4-input",
            rows: 5,
            value: inputText,
            onChange: (e) => setInputText(e.target.value),
            placeholder: "Dán văn bản tiếng Nhật vào đây... hoặc chọn chủ đề bên dưới",
            style: { width: "100%", resize: "vertical", fontFamily: "inherit" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", disabled: !inputText.trim(), onClick: () => simplify(inputText), style: { width: "100%", marginTop: "var(--n4-sp-1)" }, children: "🔍 Đơn giản hóa" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85rem", color: "var(--n4-text-muted)", margin: "var(--n4-sp-3) 0 var(--n4-sp-1)", textAlign: "center" }, children: "Hoặc chọn chủ đề để AI tạo bài viết N4:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "var(--n4-sp-1)" }, children: SAMPLE_TOPICS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-ai-story-choice", onClick: () => handleTopic(t), style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.5rem" }, children: t.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-story-choice-jp", style: { fontSize: "0.85rem" }, children: t.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-story-choice-vn", children: t.desc })
      ] }, t.label)) })
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-loading-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-loading-spinner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "📰 Đang đơn giản hóa văn bản..." })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-error-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-icon", children: "❌" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-msg", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => setError(null), children: "Đóng" })
    ] }),
    result && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      result.originalText && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", style: { marginBottom: "var(--n4-sp-2)" }, onClick: () => setShowOriginal(!showOriginal), children: showOriginal ? "🔽 Ẩn văn bản gốc" : "▶️ Xem văn bản gốc" }),
      showOriginal && result.originalText && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { marginBottom: "var(--n4-sp-2)", fontSize: "0.85rem", color: "var(--n4-text-muted)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Gốc:" }),
        " ",
        result.originalText
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--n4-sp-2)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: 0 }, children: "📖 Phiên bản N4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(result.simplified), children: "🔊 Đọc" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.05rem", lineHeight: 1.8 }, children: result.simplified }),
        result.simplifiedVn && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "var(--n4-sp-2)", fontSize: "0.85rem", color: "var(--n4-text-secondary)", borderTop: "1px solid var(--n4-card-border)", paddingTop: "var(--n4-sp-2)" }, children: [
          "🇻🇳 ",
          result.simplifiedVn
        ] })
      ] }),
      ((_a = result.annotations) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { marginTop: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-1)" }, children: "📝 Chú thích" }),
        result.annotations.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "var(--n4-sp-2)", alignItems: "baseline", padding: "4px 0", borderBottom: "1px solid var(--n4-card-border)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-ai-inline-word", onClick: () => speakJP(a.word), children: a.word }),
          a.reading && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.8rem", color: "var(--n4-text-muted)" }, children: [
            "(",
            a.reading,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85rem" }, children: a.meaning })
        ] }, i))
      ] }),
      ((_b = result.vocabList) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { marginTop: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-1)" }, children: "📚 Từ vựng mới" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-vocab-list", children: result.vocabList.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-ai-vocab-chip", onClick: () => speakJP(v.word), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-vocab-chip-word", children: v.word }),
          v.reading && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.7rem" }, children: [
            "(",
            v.reading,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-vocab-chip-meaning", children: v.meaning })
        ] }, i)) })
      ] }),
      ((_c = result.comprehensionQs) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { marginTop: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-1)" }, children: "❓ Câu hỏi kiểm tra" }),
        result.comprehensionQs.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ComprehensionQ, { q, index: i }, i))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: () => {
        setResult(null);
        setInputText("");
      }, children: "📰 Bài mới" }) })
    ] })
  ] });
}
function ComprehensionQ({ q, index }) {
  var _a, _b;
  const [reveal, setReveal] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "8px 0", borderBottom: "1px solid var(--n4-card-border)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.9rem", marginBottom: 4 }, children: [
      index + 1,
      ". ",
      q.question
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setReveal(!reveal), children: reveal ? "🔽 Ẩn" : "👁️ Xem đáp án" }),
    reveal && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85rem", color: "var(--n4-success)", marginTop: 4 }, children: [
      "💡 ",
      (_b = (_a = q.choices) == null ? void 0 : _a[q.answer]) != null ? _b : q.answer
    ] })
  ] });
}
export {
  AINews as default
};
