import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { u as useAIKey } from "./useAIKey-CpSw0zmN.js";
import { P as getUserErrorMessage, L as speakJP } from "./index-BEJSIlFS.js";
import { investigateKanji } from "./ai-S4u4-t6_.js";
import { c as cacheKey, g as getCached, s as setCache } from "./ai-cache-BWre2oCi.js";
import { L as Link } from "./vendor-router-Dx6RIovR.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./client-wNJ1tNgU.js";
import "./api-BAg1LJRR.js";
const POPULAR_KANJI = [
  "食",
  "飲",
  "書",
  "読",
  "見",
  "聞",
  "話",
  "言",
  "行",
  "来",
  "帰",
  "買",
  "売",
  "教",
  "習",
  "勉",
  "強",
  "待",
  "持",
  "使",
  "作",
  "思",
  "考",
  "知"
];
function AIKanjiDetective() {
  var _a, _b, _c;
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [input, setInput] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const [history, setHistory] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const investigate = reactExports.useCallback(async (kanji) => {
    const char = kanji.trim().charAt(0);
    if (!char) return;
    setInput(char);
    setLoading(true);
    setError(null);
    const key = cacheKey("kanji-detective", char);
    const cached = getCached(key);
    if (cached) {
      setResult({ ...cached, kanji: char });
      setHistory((prev) => prev.includes(char) ? prev : [...prev, char]);
      setLoading(false);
      return;
    }
    try {
      const data = await investigateKanji(char, apiKey);
      setResult({ ...data, kanji: char });
      setCache(key, data, 7 * 24 * 60 * 60 * 1e3);
      setHistory((prev) => prev.includes(char) ? prev : [...prev, char]);
    } catch (err) {
      setError(getUserErrorMessage(err, "Không thể phân tích kanji lúc này."));
    } finally {
      setLoading(false);
    }
  }, [apiKey]);
  if (!isLoggedIn || !hasKey) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-ai-nokey", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-nokey-icon", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Thám tử kanji AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-ai-nokey-desc", children: !isLoggedIn ? "Vui lòng đăng nhập để sử dụng tính năng này." : "Đang chờ AI key từ hệ thống..." }),
      !isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", className: "n4-btn n4-btn-primary", children: "🔒 Đăng nhập" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-feature n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-hero", style: { background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-hero-icon", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Thám tử kanji AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Giải mã kanji — bộ thủ, nguồn gốc, mẹo nhớ, kanji giống nhau" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-config", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-config-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-config-label", children: "Nhập kanji" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "n4-input",
          style: { flex: 1, fontSize: "1.3rem", textAlign: "center" },
          value: input,
          onChange: (e) => setInput(e.target.value),
          placeholder: "漢字",
          maxLength: 3,
          onKeyDown: (e) => {
            if (e.key === "Enter" && input.trim()) investigate(input);
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: () => investigate(input), disabled: !input.trim() || loading, children: "🔍 Điều tra" })
    ] }) }),
    history.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: 4, marginBottom: "var(--n4-sp-2)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.8rem", color: "var(--n4-text-muted)" }, children: "Đã tra:" }),
      history.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-ai-pill", style: { cursor: "pointer", fontWeight: (result == null ? void 0 : result.kanji) === k ? 700 : 400 }, onClick: () => investigate(k), children: k }, k))
    ] }),
    !result && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85rem", color: "var(--n4-text-muted)", margin: "var(--n4-sp-2) 0 var(--n4-sp-1)", textAlign: "center" }, children: "Hoặc chọn kanji phổ biến:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "var(--n4-sp-1)", justifyContent: "center" }, children: POPULAR_KANJI.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-ai-detective-kanji-btn", onClick: () => investigate(k), children: k }, k)) })
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-loading-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-loading-spinner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "🔍 Đang điều tra kanji..." })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-error-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-icon", children: "❌" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-msg", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => setError(null), children: "Đóng" })
    ] }),
    result && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-detective-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-ai-detective-kanji", onClick: () => speakJP(result.kanji), children: result.kanji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(result.kanji), children: "🔊" })
      ] }),
      ((_a = result.radicals) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-detective-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-ai-detective-section-title", children: "🧩 Bộ thủ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "var(--n4-sp-1)" }, children: result.radicals.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { padding: "8px 14px", textAlign: "center", minWidth: 80 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.5rem" }, children: r.radical }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8rem" }, children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.75rem", color: "var(--n4-text-muted)" }, children: r.meaning })
        ] }, i)) })
      ] }),
      result.etymology && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-detective-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-ai-detective-section-title", children: "📜 Nguồn gốc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-glass", children: result.etymology })
      ] }),
      result.mnemonic && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-detective-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-ai-detective-section-title", children: "💡 Mẹo nhớ (cho người Việt)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-glass", style: { background: "linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1))" }, children: result.mnemonic })
      ] }),
      ((_b = result.lookalikes) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-detective-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-ai-detective-section-title", children: "👀 Kanji giống nhau" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "var(--n4-sp-1)" }, children: result.lookalikes.map((la, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-ai-detective-lookalike", onClick: () => investigate(la.kanji), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-detective-lookalike-char", children: la.kanji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-detective-lookalike-meaning", children: la.meaning }),
          la.difference && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-ai-detective-lookalike-diff", children: [
            "❗ ",
            la.difference
          ] })
        ] }, i)) })
      ] }),
      ((_c = result.compounds) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-detective-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-ai-detective-section-title", children: "📝 Từ ghép thường gặp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-vocab-list", children: result.compounds.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-ai-vocab-chip", onClick: () => speakJP(c.word), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-vocab-chip-word", children: c.word }),
          c.reading && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.7rem" }, children: [
            "(",
            c.reading,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-vocab-chip-meaning", children: c.meaning })
        ] }, i)) })
      ] }),
      result.funFact && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-detective-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-ai-detective-section-title", children: "🎉 Góc thú vị" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-glass", children: result.funFact })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: () => {
        setResult(null);
        setInput("");
      }, children: "🔍 Tra kanji khác" }) })
    ] })
  ] });
}
export {
  AIKanjiDetective as default
};
