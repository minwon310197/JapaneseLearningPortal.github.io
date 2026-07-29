import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { B as useAIKey, aV as generateLyrics } from "./feature-3d-hud-CYISTbY6.js";
import { c as getUserErrorMessage } from "./index-D1BqAvip.js";
import { f as speakJP } from "./feature-3d-CFvJkEt3.js";
import { c as cacheKey, g as getCached, s as setCache } from "./ai-cache-BWre2oCi.js";
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-icons-DHCyxOF-.js";
const MOODS = [
  { id: "happy", icon: "🌸", label: "Vui vẻ" },
  { id: "sad", icon: "🌧️", label: "Buồn" },
  { id: "energetic", icon: "⚡", label: "Năng lượng" },
  { id: "romantic", icon: "💕", label: "Lãng mạn" },
  { id: "calm", icon: "🌊", label: "Êm dịu" },
  { id: "nostalgic", icon: "🍂", label: "Hoài niệm" }
];
const TOPICS = [
  "春 (Mùa xuân)",
  "夏の海 (Biển mùa hè)",
  "友達 (Bạn bè)",
  "旅行 (Du lịch)",
  "夢 (Giấc mơ)",
  "雨の日 (Ngày mưa)",
  "学校生活 (Đời sống học sinh)",
  "東京の夜 (Đêm Tokyo)",
  "猫 (Mèo)"
];
function AILyrics() {
  var _a, _b, _c, _d;
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [mood, setMood] = reactExports.useState("happy");
  const [topic, setTopic] = reactExports.useState("");
  const [customTopic, setCustomTopic] = reactExports.useState("");
  const [lyrics, setLyrics] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [playingLine, setPlayingLine] = reactExports.useState(-1);
  const playRef = reactExports.useRef(false);
  const generate = reactExports.useCallback(async (selectedTopic) => {
    const t = selectedTopic || customTopic.trim();
    if (!t) return;
    setLoading(true);
    setError(null);
    setLyrics(null);
    setPlayingLine(-1);
    const key = cacheKey("lyrics", `${mood}-${t}`);
    const cached = getCached(key);
    if (cached) {
      setLyrics(cached);
      setLoading(false);
      return;
    }
    try {
      const data = await generateLyrics(t, mood, apiKey);
      setLyrics(data);
      setCache(key, data, 72 * 60 * 60 * 1e3);
    } catch (err) {
      setError(getUserErrorMessage(err, "Không thể tạo lời bài hát lúc này."));
    } finally {
      setLoading(false);
    }
  }, [apiKey, mood, customTopic]);
  const playSingAlong = reactExports.useCallback(async () => {
    if (!(lyrics == null ? void 0 : lyrics.sections) || playRef.current) return;
    playRef.current = true;
    let lineIdx = 0;
    for (const section of lyrics.sections) {
      for (const line of section.lines) {
        if (!playRef.current) return;
        setPlayingLine(lineIdx);
        await speakJP(line.jp);
        await new Promise((r) => setTimeout(r, 500));
        lineIdx++;
      }
    }
    playRef.current = false;
    setPlayingLine(-1);
  }, [lyrics]);
  const stopSingAlong = () => {
    playRef.current = false;
    setPlayingLine(-1);
  };
  if (!isLoggedIn || !hasKey) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-ai-nokey", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-nokey-icon", children: "🎵" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Lời bài hát AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-ai-nokey-desc", children: !isLoggedIn ? "Vui lòng đăng nhập để sử dụng tính năng này." : "Đang chờ AI key từ hệ thống..." }),
      !isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", className: "n4-btn n4-btn-primary", children: "🔒 Đăng nhập" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-feature n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-hero", style: { background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-hero-icon", children: "🎵" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Lời bài hát AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Học tiếng Nhật qua bài hát AI — chọn mood, chọn chủ đề, hát theo!" })
    ] }),
    !lyrics && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-config", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-config-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-config-label", children: "Sắc thái" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-config-options", style: { flexWrap: "wrap" }, children: MOODS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: `n4-ai-config-option ${mood === m.id ? "active" : ""}`, onClick: () => setMood(m.id), children: [
            m.icon,
            " ",
            m.label
          ] }, m.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-config-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-config-label", children: "Chủ đề tùy chọn" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "n4-input",
              style: { flex: 1 },
              value: customTopic,
              onChange: (e) => setCustomTopic(e.target.value),
              placeholder: "Nhập chủ đề riêng...",
              onKeyDown: (e) => {
                if (e.key === "Enter" && customTopic.trim()) generate();
              }
            }
          ),
          customTopic.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: () => generate(), children: "🎵 Tạo bài hát" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85rem", color: "var(--n4-text-muted)", margin: "var(--n4-sp-2) 0 var(--n4-sp-1)", textAlign: "center" }, children: "Hoặc chọn chủ đề có sẵn:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "var(--n4-sp-1)", justifyContent: "center" }, children: TOPICS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-ai-pill", style: { cursor: "pointer", padding: "6px 14px" }, onClick: () => generate(t), children: t }, t)) })
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-loading-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-loading-spinner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "🎵 Đang sáng tác bài hát..." })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-error-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-icon", children: "❌" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-msg", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => setError(null), children: "Đóng" })
    ] }),
    lyrics && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-lyrics-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-lyrics-cover", children: ((_a = MOODS.find((m) => m.id === mood)) == null ? void 0 : _a.icon) || "🎵" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-ai-lyrics-title", children: lyrics.title || "Bài hát AI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-lyrics-meta", children: [
            (_b = MOODS.find((m) => m.id === mood)) == null ? void 0 : _b.label,
            " • Mức JLPT"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: "var(--n4-sp-1)", justifyContent: "center", margin: "var(--n4-sp-2) 0" }, children: playingLine >= 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: stopSingAlong, children: "⏹️ Dừng" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: playSingAlong, children: "▶️ Hát theo" }) }),
      (() => {
        var _a2;
        let globalLineIdx = 0;
        return (_a2 = lyrics.sections) == null ? void 0 : _a2.map((section, si) => {
          var _a3;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-lyrics-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-lyrics-section-label", children: section.type || `Phần ${si + 1}` }),
            (_a3 = section.lines) == null ? void 0 : _a3.map((line, li) => {
              const thisIdx = globalLineIdx++;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: `n4-ai-lyrics-line ${playingLine === thisIdx ? "n4-ai-lyrics-line-active" : ""}`,
                  onClick: () => speakJP(line.jp),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-lyrics-line-jp", children: line.jp }),
                    line.reading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-lyrics-line-reading", children: line.reading }),
                    line.vn && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-lyrics-line-vn", children: line.vn })
                  ]
                },
                li
              );
            })
          ] }, si);
        });
      })(),
      ((_c = lyrics.vocabHighlights) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { marginTop: "var(--n4-sp-3)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-1)" }, children: "📚 Từ vựng trong bài" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-vocab-list", children: lyrics.vocabHighlights.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-ai-vocab-chip", onClick: () => speakJP(v.word), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-vocab-chip-word", children: v.word }),
          v.reading && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.7rem" }, children: [
            "(",
            v.reading,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-vocab-chip-meaning", children: v.meaning })
        ] }, i)) })
      ] }),
      ((_d = lyrics.grammarNotes) == null ? void 0 : _d.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { marginTop: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-1)" }, children: "📐 Ngữ pháp" }),
        lyrics.grammarNotes.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "4px 0", borderBottom: "1px solid var(--n4-card-border)", fontSize: "0.85rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: g.pattern }),
          ": ",
          g.explanation
        ] }, i))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: () => {
        setLyrics(null);
      }, children: "🎵 Bài mới" }) })
    ] })
  ] });
}
export {
  AILyrics as default
};
