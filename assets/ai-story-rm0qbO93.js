import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { B as useAIKey, aR as generateStory, aS as continueStory } from "./feature-3d-hud-CYISTbY6.js";
import { c as getUserErrorMessage } from "./index-D1BqAvip.js";
import { f as speakJP } from "./feature-3d-CFvJkEt3.js";
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-icons-DHCyxOF-.js";
const STORY_TOPICS = [
  { icon: "🏫", label: "学校の一日", desc: "Một ngày ở trường" },
  { icon: "🚃", label: "電車の旅", desc: "Chuyến tàu bất ngờ" },
  { icon: "🍽️", label: "レストランで", desc: "Tại nhà hàng" },
  { icon: "🏥", label: "病院に行く", desc: "Đi khám bệnh" },
  { icon: "🛍️", label: "買い物", desc: "Đi mua sắm" },
  { icon: "🏖️", label: "夏休み", desc: "Kỳ nghỉ hè" },
  { icon: "🎉", label: "パーティー", desc: "Bữa tiệc" },
  { icon: "🔍", label: "迷子になる", desc: "Bị lạc đường" },
  { icon: "🐱", label: "猫を見つけた", desc: "Tìm thấy chú mèo" },
  { icon: "📮", label: "手紙が届いた", desc: "Nhận được thư" }
];
const DIFFICULTIES = [
  { id: "easy", label: "🟢 Dễ", desc: "N5-N4 cơ bản" },
  { id: "normal", label: "🟡 Vừa", desc: "N4 chuẩn" },
  { id: "hard", label: "🔴 Khó", desc: "N4 nâng cao" }
];
function AIStory() {
  var _a, _b;
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [phase, setPhase] = reactExports.useState("config");
  const [difficulty, setDifficulty] = reactExports.useState("normal");
  const [customTopic, setCustomTopic] = reactExports.useState("");
  const [storyPages, setStoryPages] = reactExports.useState([]);
  const [currentPage, setCurrentPage] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const startStory = reactExports.useCallback(async (topicLabel) => {
    setPhase("loading");
    setLoading(true);
    setError(null);
    try {
      const data = await generateStory(topicLabel, difficulty, apiKey);
      const page = { ...data, chosenChoice: null };
      setStoryPages([page]);
      setCurrentPage(page);
      setPhase("story");
    } catch (err) {
      setError(getUserErrorMessage(err, "Không thể tạo câu chuyện lúc này."));
      setPhase("config");
    } finally {
      setLoading(false);
    }
  }, [apiKey, difficulty]);
  const makeChoice = reactExports.useCallback(async (choice, choiceIdx) => {
    setLoading(true);
    setError(null);
    const updatedPages = [...storyPages];
    updatedPages[updatedPages.length - 1] = { ...updatedPages[updatedPages.length - 1], chosenChoice: choice.text };
    try {
      const data = await continueStory(updatedPages, choice.text, apiKey);
      const newPage = { ...data, chosenChoice: null };
      const allPages = [...updatedPages, newPage];
      setStoryPages(allPages);
      setCurrentPage(newPage);
      if (data.isEnding) setPhase("ending");
    } catch (err) {
      setError(getUserErrorMessage(err, "Không thể tiếp tục câu chuyện lúc này."));
    } finally {
      setLoading(false);
    }
  }, [apiKey, storyPages]);
  const resetStory = () => {
    setPhase("config");
    setStoryPages([]);
    setCurrentPage(null);
    setError(null);
  };
  if (!isLoggedIn || !hasKey) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-ai-nokey", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-nokey-icon", children: "📖" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Tạo truyện bằng AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-ai-nokey-desc", children: !isLoggedIn ? "Vui lòng đăng nhập để sử dụng tính năng này." : "Đang chờ AI key từ hệ thống..." }),
      !isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", className: "n4-btn n4-btn-primary", children: "🔒 Đăng nhập" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-feature n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-hero-icon", children: "📖" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Tạo truyện bằng AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Truyện tương tác — bạn chọn hướng đi, AI viết tiếp câu chuyện" })
    ] }),
    phase === "config" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-config", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-config-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-config-label", children: "Độ khó" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-config-options", children: DIFFICULTIES.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-ai-config-option ${difficulty === d.id ? "active" : ""}`, onClick: () => setDifficulty(d.id), children: d.label }, d.id)) })
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
              placeholder: "Hoặc nhập chủ đề riêng...",
              onKeyDown: (e) => {
                if (e.key === "Enter" && customTopic.trim()) startStory(customTopic.trim());
              }
            }
          ),
          customTopic.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: () => startStory(customTopic.trim()), children: "📖 Bắt đầu" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "var(--n4-sp-2)" }, children: STORY_TOPICS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-ai-story-choice", onClick: () => startStory(t.label), style: { display: "flex", alignItems: "center", gap: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.5rem" }, children: t.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "left" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-story-choice-jp", children: t.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-story-choice-vn", children: t.desc })
        ] })
      ] }, t.label)) })
    ] }),
    (phase === "loading" || loading) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-loading-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-loading-spinner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "📖 ",
        storyPages.length > 0 ? "Đang viết tiếp..." : "Đang tạo truyện..."
      ] })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-error-card", style: { marginTop: "var(--n4-sp-3)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-icon", children: "❌" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-msg", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => setError(null), children: "Đóng" })
    ] }),
    (phase === "story" || phase === "ending") && currentPage && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: "var(--n4-sp-1)", marginBottom: "var(--n4-sp-3)", justifyContent: "center" }, children: storyPages.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 32, height: 4, borderRadius: 2, background: i === storyPages.length - 1 ? "var(--n4-neon-blue)" : "var(--n4-text-muted)", opacity: i === storyPages.length - 1 ? 1 : 0.4 } }, i)) }),
      storyPages.length === 1 && storyPages[0].title && /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { style: { textAlign: "center", margin: "0 0 var(--n4-sp-3)" }, children: [
        storyPages[0].title,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.8rem", color: "var(--n4-text-muted)" }, children: [
          "(",
          storyPages[0].titleVn,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-story-page", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-story-jp", children: [
          currentPage.paragraph,
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { marginLeft: 8 }, onClick: () => speakJP(currentPage.paragraph), children: "🔊" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-story-vn", children: currentPage.paragraphVn }),
        ((_a = currentPage.vocab) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-vocab-list", style: { marginTop: "var(--n4-sp-3)" }, children: currentPage.vocab.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-ai-vocab-chip", onClick: () => speakJP(v.word), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-vocab-chip-word", children: v.word }),
          v.reading && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.7rem" }, children: [
            "(",
            v.reading,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-vocab-chip-meaning", children: v.meaning })
        ] }, i)) })
      ] }),
      phase === "story" && ((_b = currentPage.choices) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-story-choices", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85rem", color: "var(--n4-text-muted)", marginBottom: "var(--n4-sp-1)" }, children: "🔀 Chọn hướng đi:" }),
        currentPage.choices.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-ai-story-choice", onClick: () => makeChoice(c, i), disabled: loading, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-story-choice-jp", children: "▸ " + c.text }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-story-choice-vn", children: c.textVn })
        ] }, i))
      ] }),
      phase === "ending" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { textAlign: "center", marginTop: "var(--n4-sp-3)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2rem" }, children: "🎉" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Kết thúc truyện!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: "0.85rem", color: "var(--n4-text-secondary)" }, children: [
          "Bạn đã hoàn thành ",
          storyPages.length,
          " chương. Thử chủ đề khác nào!"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: resetStory, children: "📚 Truyện mới" }) })
    ] })
  ] });
}
export {
  AIStory as default
};
