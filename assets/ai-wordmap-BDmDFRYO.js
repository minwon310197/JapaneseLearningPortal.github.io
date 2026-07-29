import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { B as useAIKey, aQ as generateWordMap } from "./feature-3d-hud-CYISTbY6.js";
import { c as getUserErrorMessage } from "./index-D1BqAvip.js";
import { f as speakJP } from "./feature-3d-CFvJkEt3.js";
import { c as cacheKey, g as getCached, s as setCache } from "./ai-cache-BWre2oCi.js";
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-icons-DHCyxOF-.js";
const SEED_SUGGESTIONS = [
  "食べる",
  "学校",
  "旅行",
  "天気",
  "家族",
  "仕事",
  "友達",
  "電車",
  "病院",
  "買い物",
  "時間",
  "日本",
  "映画",
  "料理",
  "公園"
];
function AIWordMap() {
  var _a, _b, _c, _d;
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [input, setInput] = reactExports.useState("");
  const [mapData, setMapData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [history, setHistory] = reactExports.useState([]);
  const generate = reactExports.useCallback(async (word) => {
    if (!(word == null ? void 0 : word.trim()) || loading) return;
    const w = word.trim();
    setInput("");
    setError(null);
    setLoading(true);
    const key = cacheKey("wordmap", w);
    const cached = getCached(key);
    if (cached) {
      setMapData(cached);
      setHistory((prev) => [...prev, w]);
      setLoading(false);
      return;
    }
    try {
      const data = await generateWordMap(w, apiKey);
      setMapData(data);
      setHistory((prev) => [...prev, w]);
      setCache(key, data, 48 * 60 * 60 * 1e3);
    } catch (err) {
      setError(getUserErrorMessage(err, "Không thể tạo bản đồ từ lúc này."));
    } finally {
      setLoading(false);
    }
  }, [apiKey, loading]);
  const drillDown = (word) => {
    generate(word);
  };
  if (!isLoggedIn || !hasKey) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-ai-nokey", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-nokey-icon", children: "🧩" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Bản đồ từ AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-ai-nokey-desc", children: !isLoggedIn ? "Vui lòng đăng nhập để sử dụng tính năng này." : "Đang chờ AI key từ hệ thống..." }),
      !isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", className: "n4-btn n4-btn-primary", children: "🔒 Đăng nhập" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-feature n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-hero-icon", children: "🧩" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Bản đồ từ AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Nhập 1 từ → AI tạo bản đồ từ vựng liên quan — click node để mở rộng" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-input-area", style: { marginBottom: "var(--n4-sp-4)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "n4-input n4-ai-input",
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter") generate(input);
          },
          placeholder: "Nhập từ tiếng Nhật (VD: 食べる, 学校...)",
          disabled: loading
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", disabled: loading || !input.trim(), onClick: () => generate(input), children: loading ? "⏳" : "🧩" })
    ] }),
    !mapData && !loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "var(--n4-sp-2)", justifyContent: "center", marginBottom: "var(--n4-sp-4)" }, children: SEED_SUGGESTIONS.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-ai-config-option", onClick: () => generate(w), children: w }, w)) }),
    history.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: "var(--n4-sp-1)", flexWrap: "wrap", marginBottom: "var(--n4-sp-3)", fontSize: "0.8rem" }, children: history.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-text-muted)", margin: "0 4px" }, children: "→" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { padding: "2px 8px", fontSize: "0.8rem" }, onClick: () => generate(w), children: w })
    ] }, i)) }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-loading-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-loading-spinner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "🧩 Đang tạo bản đồ từ vựng..." })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-error-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-icon", children: "❌" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-msg", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => setError(null), children: "Thử lại" })
    ] }),
    mapData && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-mindmap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "n4-ai-mindmap-center",
          onClick: () => {
            var _a2;
            if ((_a2 = mapData.center) == null ? void 0 : _a2.word) speakJP(mapData.center.word);
          },
          onKeyDown: (event) => {
            var _a2;
            if ((event.key === "Enter" || event.key === " ") && ((_a2 = mapData.center) == null ? void 0 : _a2.word)) {
              event.preventDefault();
              speakJP(mapData.center.word);
            }
          },
          role: "button",
          tabIndex: 0,
          title: "Click để nghe phát âm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.5rem" }, children: (_a = mapData.center) == null ? void 0 : _a.word }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.75rem", opacity: 0.8 }, children: (_b = mapData.center) == null ? void 0 : _b.reading }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.7rem", opacity: 0.7 }, children: (_c = mapData.center) == null ? void 0 : _c.meaning })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-mindmap-branches", children: (_d = mapData.branches) == null ? void 0 : _d.map((branch, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "n4-ai-mindmap-node",
          style: { "--node-color": branch.color || "var(--n4-neon-blue)" },
          onClick: () => drillDown(branch.word),
          onKeyDown: (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              drillDown(branch.word);
            }
          },
          role: "button",
          tabIndex: 0,
          title: "Click để mở rộng từ này",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-mindmap-word", children: branch.word }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-mindmap-reading", children: branch.reading }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-mindmap-meaning", children: branch.meaning }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-mindmap-relation", children: branch.relation }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "n4-btn n4-btn-ghost n4-btn-sm",
                style: { padding: "0 4px", fontSize: "0.7rem", marginTop: 4 },
                onClick: (e) => {
                  e.stopPropagation();
                  speakJP(branch.word);
                },
                children: "🔊"
              }
            )
          ]
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => {
        setMapData(null);
        setHistory([]);
      }, children: "🔄 Từ mới" }) })
    ] })
  ] });
}
export {
  AIWordMap as default
};
