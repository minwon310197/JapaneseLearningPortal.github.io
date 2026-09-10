import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { u as useAIKey } from "./useAIKey-CpSw0zmN.js";
import { P as getUserErrorMessage, L as speakJP } from "./index-BEJSIlFS.js";
import { reviewDiary } from "./ai-S4u4-t6_.js";
import { L as Link } from "./vendor-router-Dx6RIovR.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./client-wNJ1tNgU.js";
import "./api-BAg1LJRR.js";
const STORAGE_KEY = "n4-ai-diary-entries";
const PROMPTS = [
  "今日何をしましたか？ (Hôm nay bạn đã làm gì?)",
  "週末の計画は？ (Kế hoạch cuối tuần?)",
  "好きな食べ物について (Về món ăn yêu thích)",
  "最近見た映画 (Phim gần đây bạn xem)",
  "日本語の勉強について (Về việc học tiếng Nhật)",
  "天気と気持ち (Thời tiết và tâm trạng)",
  "友達との思い出 (Kỷ niệm với bạn bè)",
  "将来の夢 (Ước mơ tương lai)"
];
function loadEntries() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}
function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}
function AIDiary() {
  var _a, _b, _c;
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [view, setView] = reactExports.useState("list");
  const [entries, setEntries] = reactExports.useState(() => loadEntries());
  const [text, setText] = reactExports.useState("");
  const [reviewResult, setReviewResult] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [selectedEntry, setSelectedEntry] = reactExports.useState(null);
  const submitDiary = reactExports.useCallback(async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError(null);
    setReviewResult(null);
    try {
      const data = await reviewDiary(text.trim(), apiKey);
      const entry = {
        id: Date.now(),
        date: (/* @__PURE__ */ new Date()).toISOString(),
        text: text.trim(),
        review: data
      };
      const updated = [entry, ...entries];
      setEntries(updated);
      saveEntries(updated);
      setReviewResult(data);
      setSelectedEntry(entry);
      setView("review");
    } catch (err) {
      setError(getUserErrorMessage(err, "Không thể nhận xét nhật ký lúc này."));
    } finally {
      setLoading(false);
    }
  }, [apiKey, text, entries]);
  const deleteEntry = (id) => {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    saveEntries(updated);
    if ((selectedEntry == null ? void 0 : selectedEntry.id) === id) {
      setSelectedEntry(null);
      setView("list");
    }
  };
  const viewEntry = (entry) => {
    setSelectedEntry(entry);
    setReviewResult(entry.review);
    setText(entry.text);
    setView("review");
  };
  const exportEntries = () => {
    const md = entries.map((e) => {
      var _a2, _b2;
      const d = new Date(e.date).toLocaleDateString("vi-VN");
      return `## ${d}

${e.text}

**Score:** ${(_b2 = (_a2 = e.review) == null ? void 0 : _a2.score) != null ? _b2 : "?"}/100

---`;
    }).join("\n\n");
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `diary-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const importEntries = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      var _a2;
      const file = (_a2 = e.target.files) == null ? void 0 : _a2[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const imported = JSON.parse(ev.target.result);
          if (Array.isArray(imported)) {
            const merged = [...imported, ...entries];
            const unique = merged.filter((e2, i, a) => a.findIndex((x) => x.id === e2.id) === i);
            unique.sort((a, b) => new Date(b.date) - new Date(a.date));
            setEntries(unique);
            saveEntries(unique);
          }
        } catch (e2) {
          setError("File không hợp lệ");
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };
  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(entries, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `diary-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  if (!isLoggedIn || !hasKey) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-ai-nokey", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-nokey-icon", children: "✍️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Trợ lý nhật ký AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-ai-nokey-desc", children: !isLoggedIn ? "Vui lòng đăng nhập để sử dụng tính năng này." : "Đang chờ AI key từ hệ thống..." }),
      !isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", className: "n4-btn n4-btn-primary", children: "🔒 Đăng nhập" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-feature n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-hero", style: { background: "linear-gradient(135deg, #4db89a 0%, #d4a853 100%)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-hero-icon", children: "✍️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Trợ lý nhật ký AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Viết nhật ký tiếng Nhật hằng ngày — AI chấm điểm và sửa lỗi" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "var(--n4-sp-1)", marginBottom: "var(--n4-sp-3)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: `n4-btn ${view === "list" ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => setView("list"), children: [
        "📋 Danh sách (",
        entries.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn ${view === "write" ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => {
        setView("write");
        setText("");
        setReviewResult(null);
      }, children: "✏️ Viết mới" }),
      entries.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: exportEntries, title: "Xuất Markdown", children: "📥 MD" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: exportJSON, title: "Xuất JSON", children: "📥 JSON" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: importEntries, title: "Nhập JSON", children: "📤 Nhập" })
      ] })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-error-card", style: { marginBottom: "var(--n4-sp-2)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-icon", children: "❌" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-msg", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => setError(null), children: "Đóng" })
    ] }),
    view === "list" && (entries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2rem" }, children: "📓" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chưa có bài nhật ký nào. Bắt đầu viết nào!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: () => setView("write"), children: "✏️ Viết bài đầu tiên" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "var(--n4-sp-1)" }, children: entries.map((entry) => {
      var _a2;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-diary-entry", onClick: () => viewEntry(entry), onKeyDown: (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          viewEntry(entry);
        }
      }, role: "button", tabIndex: 0, style: { cursor: "pointer" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-diary-date", children: new Date(entry.date).toLocaleDateString("vi-VN", { weekday: "short", year: "numeric", month: "short", day: "numeric" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-diary-preview", children: [
            entry.text.slice(0, 80),
            entry.text.length > 80 ? "..." : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "var(--n4-sp-1)" }, children: [
          ((_a2 = entry.review) == null ? void 0 : _a2.score) != null && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-pill", style: { background: entry.review.score >= 70 ? "var(--n4-success)" : entry.review.score >= 40 ? "var(--n4-warning)" : "var(--n4-danger)", color: "var(--n4-text-inverse)" }, children: entry.review.score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: (e) => {
            e.stopPropagation();
            deleteEntry(entry.id);
          }, title: "Xóa", children: "🗑️" })
        ] })
      ] }) }, entry.id);
    }) })),
    view === "write" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "var(--n4-sp-1)", marginBottom: "var(--n4-sp-2)" }, children: PROMPTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-ai-pill", style: { cursor: "pointer", fontSize: "0.75rem" }, onClick: () => setText((prev) => prev ? prev : ""), children: p.split("(")[0].trim() }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          className: "n4-input",
          rows: 8,
          value: text,
          onChange: (e) => setText(e.target.value),
          placeholder: "日本語で日記を書いてください... (Viết nhật ký bằng tiếng Nhật...)",
          style: { width: "100%", resize: "vertical", fontFamily: "inherit", fontSize: "1rem" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "var(--n4-sp-1)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.8rem", color: "var(--n4-text-muted)" }, children: [
          text.length,
          " ký tự"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", disabled: !text.trim() || loading, onClick: submitDiary, children: loading ? "⏳ Đang chấm..." : "✅ Gửi để AI chấm" })
      ] }),
      loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-loading-card", style: { marginTop: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-loading-spinner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "✍️ AI đang đọc và chấm bài..." })
      ] })
    ] }),
    view === "review" && reviewResult && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-1)" }, children: "📝 Bài viết của bạn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1rem", lineHeight: 1.8 }, children: (selectedEntry == null ? void 0 : selectedEntry.text) || text }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { marginTop: 4 }, onClick: () => speakJP((selectedEntry == null ? void 0 : selectedEntry.text) || text), children: "🔊 Đọc" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { textAlign: "center", marginTop: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-score", style: { background: reviewResult.score >= 70 ? "linear-gradient(135deg, var(--n4-success), var(--n4-neon-blue))" : "linear-gradient(135deg, var(--n4-warning), var(--n4-danger))" }, children: reviewResult.score }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.9rem", marginTop: 4 }, children: reviewResult.encouragement })
      ] }),
      ((_a = reviewResult.corrections) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { marginTop: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-1)" }, children: "🔴 Sửa lỗi" }),
        reviewResult.corrections.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "6px 0", borderBottom: "1px solid var(--n4-card-border)", fontSize: "0.85rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { textDecoration: "line-through", color: "var(--n4-danger)" }, children: c.original }),
            " → ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-success)" }, children: c.corrected })
          ] }),
          c.explanation && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "var(--n4-text-muted)", marginTop: 2 }, children: [
            "💡 ",
            c.explanation
          ] })
        ] }, i))
      ] }),
      ((_b = reviewResult.goodPoints) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { marginTop: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-1)" }, children: "🟢 Điểm tốt" }),
        reviewResult.goodPoints.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "4px 0", fontSize: "0.85rem" }, children: [
          "✅ ",
          p
        ] }, i))
      ] }),
      reviewResult.rewritten && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { marginTop: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-1)" }, children: "✨ Phiên bản cải thiện" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1rem", lineHeight: 1.8 }, children: reviewResult.rewritten }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { marginTop: 4 }, onClick: () => speakJP(reviewResult.rewritten), children: "🔊 Đọc" })
      ] }),
      ((_c = reviewResult.newVocab) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { marginTop: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-1)" }, children: "📚 Từ vựng mới gợi ý" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-vocab-list", children: reviewResult.newVocab.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-ai-vocab-chip", onClick: () => speakJP(v.word), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-vocab-chip-word", children: v.word }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-vocab-chip-meaning", children: v.meaning })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => setView("list"), children: "📋 Danh sách" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: () => {
          setView("write");
          setText("");
          setReviewResult(null);
        }, children: "✏️ Viết bài mới" })
      ] })
    ] })
  ] });
}
export {
  AIDiary as default
};
