import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { f as speakJP } from "./feature-3d-CFvJkEt3.js";
import { a5 as isOnline, a6 as apiFetch } from "./feature-3d-hud-CYISTbY6.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-supabase-DTEAj5J1.js";
const TATOEBA_API = "https://tatoeba.org/en/api_v0/search";
function SentenceCard({ sentence }) {
  var _a, _b, _c;
  const jpText = sentence.text || "";
  const translations = ((_a = sentence.translations) == null ? void 0 : _a[0]) || [];
  const viTrans = translations.find((t) => t.lang === "vie");
  const enTrans = translations.find((t) => t.lang === "eng");
  const bestTrans = viTrans || enTrans;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card n4-tat-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-tat-card-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-tat-card-body", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "n4-tat-jp",
          onClick: () => speakJP(jpText),
          title: "🔊 Nghe phát âm",
          children: jpText
        }
      ),
      ((_c = (_b = sentence.transcriptions) == null ? void 0 : _b[0]) == null ? void 0 : _c.text) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tat-romaji", children: sentence.transcriptions[0].text }),
      bestTrans && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-tat-trans", children: [
        viTrans ? "🇻🇳" : "🇬🇧",
        " ",
        bestTrans.text
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-ghost n4-btn-sm n4-tat-speak",
        onClick: () => speakJP(jpText),
        children: "🔊"
      }
    )
  ] }) });
}
function Tatoeba() {
  const [query, setQuery] = reactExports.useState("");
  const [results, setResults] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [searched, setSearched] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [page, setPage] = reactExports.useState(1);
  const [hasMore, setHasMore] = reactExports.useState(false);
  const search = reactExports.useCallback(async (q, pageNum = 1) => {
    var _a;
    if (!q.trim()) return;
    if (!isOnline()) {
      setError("Cần kết nối internet");
      return;
    }
    setLoading(true);
    setError(null);
    setSearched(true);
    try {
      const params = new URLSearchParams({
        from: "jpn",
        query: q.trim(),
        page: String(pageNum),
        sort: "relevance"
      });
      const url = `${TATOEBA_API}?${params}`;
      const data = await apiFetch(url, {
        timeout: 15e3,
        useProxy: true,
        cacheKey: `tatoeba:${q.trim()}:${pageNum}`,
        cacheTTL: 10 * 60 * 1e3
      });
      const sentences = data.results || [];
      if (pageNum === 1) {
        setResults(sentences);
      } else {
        setResults((prev) => [...prev, ...sentences]);
      }
      setPage(pageNum);
      setHasMore(Boolean((_a = data.paging) == null ? void 0 : _a.next));
    } catch (err) {
      if (err.name === "AbortError" || err.name === "TimeoutError") {
        setError("Hết thời gian chờ. Thử lại sau.");
      } else {
        setError("Không thể tìm kiếm. Kiểm tra kết nối mạng.");
      }
    } finally {
      setLoading(false);
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    search(query, 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-tat-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-tat-title", children: "📝 Tatoeba — Câu ví dụ" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-tat-desc", children: "Tìm câu ví dụ thực tế với bản dịch tiếng Việt/Anh từ Tatoeba.org" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "n4-tat-form", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: query,
          onChange: (e) => setQuery(e.target.value),
          placeholder: "Nhập từ tiếng Nhật (食べる, 学校...)",
          className: "n4-input n4-tat-input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "submit",
          className: "n4-btn n4-btn-neon n4-tat-submit",
          disabled: loading || !query.trim(),
          children: [
            loading ? "⏳" : "🔍",
            " Tìm"
          ]
        }
      )
    ] }),
    !searched && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-tat-suggest", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tat-suggest-label", children: "💡 Gợi ý tìm kiếm:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tat-suggest-list", children: ["食べる", "学校", "天気", "仕事", "旅行", "友達", "勉強"].map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-btn n4-btn-ghost n4-btn-sm n4-tat-suggest-btn",
          onClick: () => {
            setQuery(w);
            search(w, 1);
          },
          children: w
        },
        w
      )) })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-tat-error", children: [
      "❌ ",
      error
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tat-skeleton-wrap", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-tat-skeleton", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tat-skel-line n4-tat-skel-l1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tat-skel-line n4-tat-skel-l2" })
    ] }, i)) }),
    !loading && results.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-tat-count", children: [
        results.length,
        " câu ví dụ ",
        hasMore ? "(còn thêm)" : ""
      ] }),
      results.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SentenceCard, { sentence: s }, s.id)),
      hasMore && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-btn n4-btn-ghost n4-tat-more",
          onClick: () => search(query, page + 1),
          disabled: loading,
          children: loading ? "⏳ Đang tải..." : "📄 Xem thêm"
        }
      )
    ] }),
    searched && !loading && results.length === 0 && !error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        'Không tìm thấy câu ví dụ cho "',
        query,
        '"'
      ] })
    ] })
  ] });
}
export {
  Tatoeba as default
};
