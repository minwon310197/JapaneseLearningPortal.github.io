const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ai-quiz-CrjchFpH.js","./vendor-react-BYxMSDiB.js","./feature-3d-jK3b4Iv-.js","./vendor-three-Ba7Uoy0A.js","./feature-3d-hud-Dp6hMoyV.js","./vendor-supabase-DTEAj5J1.js","./feature-3d-CUwqVi7Q.css","./index-CjITGIof.js","./vendor-router-BTJacUKt.js","./vendor-icons-DHCyxOF-.js","./index-Dehd9LT2.css","./ai-navigator-JWWFV2AK.js","./ai-cache-BWre2oCi.js","./ai-mistakes-B4mQ242y.js","./ai-jlpt-predictor-BTGI4EUx.js","./ai-wordmap-BvV8jS4z.js","./ai-story-BUAOCE69.js","./ai-grammar-drill--VZuWqFM.js","./ai-news-hzBpOi0p.js","./ai-lyrics-Bd_Pqjvh.js","./ai-diary-BTiLJYHR.js","./ai-scene-pMywOMUC.js","./ai-kanji-detective-4u5A6yFi.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./feature-3d-jK3b4Iv-.js";
import { r as reactExports, j as jsxRuntimeExports, R as React } from "./vendor-react-BYxMSDiB.js";
import { B as useAIKey, J as chatWithAI, a7 as getStudyAdvice, a8 as analyzeSentence, a9 as roleplayMessage, aa as roleplayEvaluate, ab as ROLEPLAY_SCENARIOS, ac as reviewWriting, ad as grammarCheck, ae as generateExamples, af as getConversationPrompt, ag as getCooldownRemaining } from "./feature-3d-hud-Dp6hMoyV.js";
import { c as getUserErrorMessage } from "./index-CjITGIof.js";
import { d as useSearchParams, b as useNavigate, L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-icons-DHCyxOF-.js";
const LazyAIQuiz = reactExports.lazy(() => __vitePreload(() => import("./ai-quiz-CrjchFpH.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url));
const LazyAINavigator = reactExports.lazy(() => __vitePreload(() => import("./ai-navigator-JWWFV2AK.js"), true ? __vite__mapDeps([11,1,4,2,3,6,5,7,8,9,10,12]) : void 0, import.meta.url));
const LazyAIMistakes = reactExports.lazy(() => __vitePreload(() => import("./ai-mistakes-B4mQ242y.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,12]) : void 0, import.meta.url));
const LazyAIJLPTPredictor = reactExports.lazy(() => __vitePreload(() => import("./ai-jlpt-predictor-BTGI4EUx.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,8]) : void 0, import.meta.url));
const LazyAIWordMap = reactExports.lazy(() => __vitePreload(() => import("./ai-wordmap-BvV8jS4z.js"), true ? __vite__mapDeps([15,1,4,2,3,6,5,7,8,9,10,12]) : void 0, import.meta.url));
const LazyAIStory = reactExports.lazy(() => __vitePreload(() => import("./ai-story-BUAOCE69.js"), true ? __vite__mapDeps([16,1,4,2,3,6,5,7,8,9,10]) : void 0, import.meta.url));
const LazyAIGrammarDrill = reactExports.lazy(() => __vitePreload(() => import("./ai-grammar-drill--VZuWqFM.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url));
const LazyAINews = reactExports.lazy(() => __vitePreload(() => import("./ai-news-hzBpOi0p.js"), true ? __vite__mapDeps([18,1,4,2,3,6,5,7,8,9,10,12]) : void 0, import.meta.url));
const LazyAILyrics = reactExports.lazy(() => __vitePreload(() => import("./ai-lyrics-Bd_Pqjvh.js"), true ? __vite__mapDeps([19,1,4,2,3,6,5,7,8,9,10,12]) : void 0, import.meta.url));
const LazyAIDiary = reactExports.lazy(() => __vitePreload(() => import("./ai-diary-BTiLJYHR.js"), true ? __vite__mapDeps([20,1,4,2,3,6,5,7,8,9,10]) : void 0, import.meta.url));
const LazyAIScene = reactExports.lazy(() => __vitePreload(() => import("./ai-scene-pMywOMUC.js"), true ? __vite__mapDeps([21,1,4,2,3,6,5,7,8,9,10]) : void 0, import.meta.url));
const LazyAIKanjiDetective = reactExports.lazy(() => __vitePreload(() => import("./ai-kanji-detective-4u5A6yFi.js"), true ? __vite__mapDeps([22,1,4,2,3,6,5,7,8,9,10,12]) : void 0, import.meta.url));
const QUICK_PROMPTS = [
  { label: "📝 Ngữ pháp hôm nay", prompt: "Dạy tôi 1 mẫu ngữ pháp JLPT quan trọng, kèm 3 ví dụ." },
  { label: "💬 Hội thoại", prompt: "Tạo 1 đoạn hội thoại ngắn JLPT về chủ đề mua sắm." },
  { label: "📖 Từ vựng", prompt: "Cho tôi 5 từ vựng JLPT về chủ đề nhà hàng, kèm ví dụ." },
  { label: "🎯 Luyện tập", prompt: "Cho tôi 3 câu hỏi trắc nghiệm ngữ pháp JLPT level." },
  { label: "✏️ Kiểm tra câu", prompt: "Kiểm tra câu này: 昨日、友達と映画を見ました。" },
  { label: "🔤 So sánh", prompt: "So sánh sự khác nhau giữa は và が trong tiếng Nhật." }
];
const TOPICS = ["Nhà hàng", "Bệnh viện", "Ga tàu", "Mua sắm", "Trường học", "Công việc", "Du lịch", "Thời tiết"];
const WRITING_PROMPTS = [
  "今日何をしましたか？ (Hôm nay bạn làm gì?)",
  "私の家族を紹介します (Giới thiệu gia đình)",
  "週末の計画 (Kế hoạch cuối tuần)",
  "好きな食べ物について (Về món ăn yêu thích)",
  "日本に行きたい理由 (Lý do muốn đến Nhật)"
];
const ANALYZER_EXAMPLES = [
  "昨日、友達と一緒に映画を見に行きました。",
  "この本は読みやすいですが、少し高いです。",
  "明日、天気がよかったら、公園に行きましょう。",
  "田中さんに日本語を教えてもらいました。",
  "日本に行ったことがありますか。"
];
const FEATURES = [
  // ─── Built-in features ───
  { id: "chat", icon: "💬", name: "Chat AI", desc: "Hỏi đáp tự do bằng tiếng Việt hoặc Nhật", cat: "core" },
  { id: "grammar", icon: "✏️", name: "Kiểm tra ngữ pháp", desc: "Kiểm tra câu tiếng Nhật của bạn", cat: "core" },
  { id: "examples", icon: "📝", name: "Tạo ví dụ", desc: "Tạo câu ví dụ cho từ vựng/ngữ pháp", cat: "core" },
  { id: "conversation", icon: "🎭", name: "Hội thoại mẫu", desc: "Tạo hội thoại theo chủ đề", cat: "core" },
  { id: "writing", icon: "✍️", name: "Viết & chấm điểm", desc: "Viết bài JP, AI sửa và chấm", cat: "core" },
  { id: "roleplay", icon: "🎭", name: "Nhập vai", desc: "Nhập vai tình huống thực tế", cat: "core" },
  { id: "analyze", icon: "🔍", name: "Phân tích câu", desc: "Phân tích từng từ, ngữ pháp, nghĩa", cat: "core" },
  { id: "advisor", icon: "📊", name: "Cố vấn học tập", desc: "Lộ trình cá nhân hóa dựa trên dữ liệu", cat: "core" },
  { id: "freetalk", icon: "💬", name: "Trò chuyện tự do", desc: "Nói chuyện tự do bằng tiếng Nhật", cat: "core" },
  // ─── External AI features ───
  { id: "ai-quiz", icon: "🎯", name: "AI trắc nghiệm", desc: "Bài trắc nghiệm cá nhân hóa bằng AI", cat: "practice", comp: LazyAIQuiz },
  { id: "ai-grammar-drill", icon: "📝", name: "Luyện ngữ pháp AI", desc: "Luyện ngữ pháp thích ứng", cat: "practice", comp: LazyAIGrammarDrill },
  { id: "ai-mistakes", icon: "🎯", name: "Phân tích lỗi sai", desc: "Phân tích lỗi sai và điểm yếu", cat: "practice", comp: LazyAIMistakes },
  { id: "ai-navigator", icon: "🤖", name: "Điều hướng AI", desc: "Chatbot đề xuất tính năng phù hợp", cat: "tools", comp: LazyAINavigator },
  { id: "ai-jlpt-predictor", icon: "📊", name: "Dự đoán JLPT", desc: "Dự đoán điểm JLPT", cat: "tools", comp: LazyAIJLPTPredictor },
  { id: "ai-wordmap", icon: "🧩", name: "Bản đồ từ", desc: "Sơ đồ liên tưởng từ vựng", cat: "tools", comp: LazyAIWordMap },
  { id: "ai-story", icon: "📖", name: "Tạo truyện", desc: "Truyện tương tác phân nhánh", cat: "creative", comp: LazyAIStory },
  { id: "ai-news", icon: "📰", name: "Đơn giản hóa tin", desc: "Đơn giản hóa văn bản JP", cat: "creative", comp: LazyAINews },
  { id: "ai-lyrics", icon: "🎵", name: "Lời bài hát", desc: "Học qua bài hát AI tạo", cat: "creative", comp: LazyAILyrics },
  { id: "ai-diary", icon: "✍️", name: "Trợ lý nhật ký", desc: "Viết nhật ký JP, AI chấm và sửa", cat: "creative", comp: LazyAIDiary },
  { id: "ai-scene", icon: "🎭", name: "Mô phỏng tình huống", desc: "Mô phỏng tình huống thực tế", cat: "creative", comp: LazyAIScene },
  { id: "ai-kanji-detective", icon: "🔍", name: "Thám tử kanji", desc: "Giải mã kanji: bộ thủ, mẹo nhớ", cat: "tools", comp: LazyAIKanjiDetective }
];
const CAT_LABELS = {
  core: "🧠 Trợ lý cốt lõi",
  practice: "🎯 Luyện tập và trắc nghiệm",
  tools: "🔧 Công cụ phân tích",
  creative: "🎨 Sáng tạo & Đọc hiểu"
};
function useCooldown() {
  const [cooldown, setCooldown] = reactExports.useState(getCooldownRemaining());
  reactExports.useEffect(() => {
    if (cooldown <= 0) return;
    const id = setInterval(() => {
      const left = getCooldownRemaining();
      setCooldown(left);
      if (left <= 0) clearInterval(id);
    }, 1e3);
    return () => clearInterval(id);
  }, [cooldown]);
  const refresh = reactExports.useCallback(() => setCooldown(getCooldownRemaining()), []);
  return { cooldown, refreshCooldown: refresh };
}
function ChatMessage({ msg }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-ai-msg ${msg.role === "user" ? "n4-ai-msg-user" : "n4-ai-msg-bot"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-ai-bubble ${msg.role === "user" ? "n4-ai-bubble-user" : "n4-ai-bubble-bot"}`, children: msg.content }) });
}
function WritingTab({ apiKey }) {
  const [text, setText] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const submit = reactExports.useCallback(async () => {
    if (!text.trim() || loading) return;
    setLoading(true);
    setResult(null);
    try {
      const reply = await reviewWriting(text.trim(), apiKey);
      setResult(reply);
    } catch (err) {
      setResult(`❌ ${getUserErrorMessage(err)}`);
    } finally {
      setLoading(false);
    }
  }, [text, apiKey, loading]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-tab-content", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-tab-intro", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "✍️ Luyện viết bằng AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Viết tiếng Nhật → AI chấm điểm, sửa lỗi, gợi ý cải thiện" })
    ] }),
    !result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-prompts", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-prompts-label", children: "💡 Gợi ý chủ đề:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-prompts-grid", children: WRITING_PROMPTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setText(p.split(" (")[0]), children: p }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: "n4-input n4-ai-textarea",
        value: text,
        onChange: (e) => setText(e.target.value),
        placeholder: "Viết tiếng Nhật tại đây... (ví dụ: 今日、私は友達と公園に行きました。)",
        rows: 5,
        disabled: loading
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-tab-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: submit, disabled: loading || !text.trim(), children: loading ? "⏳ Đang chấm..." : "📝 Chấm bài" }),
      result && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => {
        setResult(null);
        setText("");
      }, children: "🔄 Viết bài mới" })
    ] }),
    result && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card n4-ai-result", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-result-text", children: result }) })
  ] });
}
function RoleplayTab({ apiKey }) {
  const [scenario, setScenario] = reactExports.useState(null);
  const [messages, setMessages] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [evaluation, setEvaluation] = reactExports.useState(null);
  const chatEndRef = reactExports.useRef(null);
  const scenarioRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a;
    (_a = chatEndRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const startScenario = reactExports.useCallback((sc) => {
    scenarioRef.current = sc.id;
    setScenario(sc);
    setMessages([]);
    setEvaluation(null);
    setLoading(true);
    roleplayMessage(sc.id, [], `Xin chào, tôi muốn bắt đầu hội thoại tình huống "${sc.desc}". Hãy bắt đầu trước.`, apiKey).then((reply) => {
      if (scenarioRef.current !== sc.id) return;
      setMessages([{ role: "assistant", content: reply }]);
    }).catch((err) => {
      if (scenarioRef.current !== sc.id) return;
      setMessages([{ role: "assistant", content: `❌ ${getUserErrorMessage(err)}` }]);
    }).finally(() => {
      if (scenarioRef.current === sc.id) setLoading(false);
    });
  }, [apiKey]);
  const sendMessage = reactExports.useCallback(async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const history = messages.slice(-10).map((m) => ({ role: m.role, content: m.content }));
      const reply = await roleplayMessage(scenario.id, [...history, userMsg], input.trim(), apiKey);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", content: `❌ ${getUserErrorMessage(err)}` }]);
    } finally {
      setLoading(false);
    }
  }, [input, messages, scenario, apiKey, loading]);
  const endSession = reactExports.useCallback(async () => {
    if (loading || messages.length < 2) return;
    setLoading(true);
    try {
      const history = messages.map((m) => ({ role: m.role, content: m.content }));
      const report = await roleplayEvaluate(scenario.id, history, apiKey);
      setEvaluation(report);
    } catch (err) {
      setEvaluation(`❌ ${getUserErrorMessage(err)}`);
    } finally {
      setLoading(false);
    }
  }, [messages, scenario, apiKey, loading]);
  if (!scenario) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-tab-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-tab-intro", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🎭 Nhập vai AI nâng cao" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Nhập vai tình huống thực tế — AI vừa đối thoại vừa đánh giá câu của bạn" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-roleplay-grid", children: ROLEPLAY_SCENARIOS.map((sc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-card n4-ai-roleplay-card", onClick: () => startScenario(sc), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-roleplay-icon", children: sc.label.split(" ")[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-roleplay-info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-roleplay-name", children: sc.label.substring(sc.label.indexOf(" ") + 1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-roleplay-desc", children: sc.desc })
        ] })
      ] }, sc.id)) })
    ] });
  }
  if (evaluation) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-tab-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-tab-intro", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
        "📊 Đánh giá — ",
        scenario.label
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card n4-ai-result", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-result-text", children: evaluation }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-tab-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: () => startScenario(scenario), children: "🔄 Thử lại" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => {
          setScenario(null);
          setEvaluation(null);
        }, children: "📋 Chọn tình huống khác" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-tab-content n4-ai-roleplay-active", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-roleplay-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        scenario.label,
        " — ",
        scenario.character
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: endSession, disabled: loading || messages.length < 2, children: "📊 Kết thúc & Đánh giá" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-messages", children: [
      messages.map((msg, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChatMessage, { msg }, i)),
      loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-msg n4-ai-msg-bot", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-loading", children: "⏳ Đang trả lời..." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: chatEndRef })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-input-area", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "n4-input n4-ai-input",
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          },
          placeholder: "Trả lời bằng tiếng Nhật...",
          disabled: loading
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", disabled: loading || !input.trim(), onClick: sendMessage, children: loading ? "⏳" : "📨" })
    ] })
  ] });
}
function AnalyzeTab({ apiKey }) {
  const [sentence, setSentence] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const analyze = reactExports.useCallback(async () => {
    if (!sentence.trim() || loading) return;
    setLoading(true);
    setResult(null);
    try {
      const reply = await analyzeSentence(sentence.trim(), apiKey);
      setResult(reply);
    } catch (err) {
      setResult(`❌ ${getUserErrorMessage(err)}`);
    } finally {
      setLoading(false);
    }
  }, [sentence, apiKey, loading]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-tab-content", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-tab-intro", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🔍 Phân tích câu bằng AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Dán câu tiếng Nhật → phân tích từng từ, ngữ pháp, dịch nghĩa" })
    ] }),
    !result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-prompts", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-prompts-label", children: "📝 Câu mẫu:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-prompts-grid", children: ANALYZER_EXAMPLES.map((ex, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setSentence(ex), children: ex }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-input-area", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "n4-input n4-ai-input",
          value: sentence,
          onChange: (e) => setSentence(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              analyze();
            }
          },
          placeholder: "Nhập câu tiếng Nhật cần phân tích...",
          disabled: loading
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-neon", disabled: loading || !sentence.trim(), onClick: analyze, children: [
        loading ? "⏳" : "🔍",
        " Phân tích"
      ] })
    ] }),
    result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-ai-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-result-text", children: result }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => {
        setResult(null);
        setSentence("");
      }, children: "🔄 Phân tích câu khác" })
    ] })
  ] });
}
function AdvisorTab({ apiKey }) {
  const [advice, setAdvice] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const loadAdvice = reactExports.useCallback(async () => {
    setLoading(true);
    setAdvice(null);
    try {
      const reply = await getStudyAdvice(apiKey);
      setAdvice(reply);
    } catch (err) {
      setAdvice(`❌ ${getUserErrorMessage(err)}`);
    } finally {
      setLoading(false);
    }
  }, [apiKey]);
  reactExports.useEffect(() => {
    if (!advice && !loading) loadAdvice();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-tab-content", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-tab-intro", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "📊 Cố vấn học tập AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "AI phân tích dữ liệu học tập → đề xuất lộ trình cá nhân hóa" })
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-aiq-loading", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-loading-spinner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "🔍 Đang phân tích dữ liệu học tập..." })
    ] }),
    advice && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card n4-ai-result", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-result-text", children: advice }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-tab-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: loadAdvice, disabled: loading, children: "🔄 Phân tích lại" }) })
    ] })
  ] });
}
function FreeTalkTab({ apiKey }) {
  const [messages, setMessages] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const { cooldown, refreshCooldown } = useCooldown();
  const chatEnd = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a;
    (_a = chatEnd.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const DAILY_TOPICS = [
    "今日の天気 (Thời tiết hôm nay)",
    "好きな音楽 (Nhạc yêu thích)",
    "週末の予定 (Kế hoạch cuối tuần)",
    "最近のニュース (Tin tức gần đây)",
    "日本の文化 (Văn hóa Nhật)",
    "趣味について (Về sở thích)",
    "旅行の話 (Chuyện du lịch)"
  ];
  const todayTopic = DAILY_TOPICS[(/* @__PURE__ */ new Date()).getDay() % DAILY_TOPICS.length];
  const send = reactExports.useCallback(async (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput("");
    const userMsg = { role: "user", content: msg };
    const newMsgs = [...messages, userMsg];
    setMessages(newMsgs);
    setLoading(true);
    try {
      const systemPrompt = `You are a friendly Japanese conversation partner for a Vietnamese learner at JLPT N5-N4 level.
Rules:
- Reply primarily in Japanese (N5-N4 level), keep sentences short and simple
- After your Japanese reply, add a brief Vietnamese note if there's a correction
- If the user makes a grammar/vocab mistake, gently correct inline: ❌ wrong → ✅ correct
- Suggest natural alternatives when appropriate
- Keep the conversation flowing naturally
- Today's suggested topic: ${todayTopic}`;
      const history = newMsgs.map((m) => ({ role: m.role, content: m.content }));
      const response = await chatWithAI(
        msg,
        apiKey,
        { systemPrompt, extraMessages: history.slice(-10) }
      );
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", content: `⚠️ ${getUserErrorMessage(err)}` }]);
      refreshCooldown();
    } finally {
      setLoading(false);
    }
  }, [apiKey, input, messages, todayTopic, refreshCooldown]);
  const isDisabled = loading || cooldown > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "var(--n4-sp-2)", padding: "var(--n4-sp-3) 0" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { fontSize: "0.85rem", textAlign: "center" }, children: [
      "💡 Chủ đề hôm nay: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: todayTopic }),
      " — hoặc nói bất kỳ điều gì!"
    ] }),
    cooldown > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { fontSize: "0.85rem", textAlign: "center", color: "var(--n4-warning, #f59e0b)" }, children: [
      "⏳ Cooldown: ",
      cooldown,
      "s — Gemini free tier đang giới hạn. Vui lòng đợi..."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-chat", children: [
      messages.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", color: "var(--n4-text-muted)", padding: "var(--n4-sp-4) 0" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2rem" }, children: "💬" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bắt đầu nói chuyện bằng tiếng Nhật!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", marginTop: 8 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon n4-btn-sm", onClick: () => send("こんにちは！今日は何について話しましょうか？"), disabled: isDisabled, children: "こんにちは" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon n4-btn-sm", onClick: () => send(todayTopic.split("(")[0].trim() + "について話しましょう"), disabled: isDisabled, children: "📌 Chủ đề hôm nay" })
        ] })
      ] }),
      messages.map((msg, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChatMessage, { msg }, i)),
      loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-msg n4-ai-msg-bot", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-bubble n4-ai-bubble-bot", children: /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "..." }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: chatEnd })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "var(--n4-sp-1)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "n4-input",
          style: { flex: 1 },
          value: input,
          onChange: (e) => setInput(e.target.value),
          placeholder: "日本語で話してください...",
          onKeyDown: (e) => {
            if (e.key === "Enter") send();
          },
          disabled: isDisabled
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: () => send(), disabled: isDisabled || !input.trim(), children: loading ? "⏳" : cooldown > 0 ? `${cooldown}s` : "📤" }),
      messages.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => setMessages([]), children: "🗑️" })
    ] })
  ] });
}
function ChatPanel({ mode, apiKey }) {
  const [messages, setMessages] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const { cooldown, refreshCooldown } = useCooldown();
  const chatEndRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a;
    (_a = chatEndRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const sendMessage = reactExports.useCallback(async (text) => {
    if (!(text == null ? void 0 : text.trim()) || loading) return;
    const userMsg = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const history = messages.slice(-10).map((m) => ({ role: m.role, content: m.content }));
      let reply;
      if (mode === "grammar") {
        reply = await grammarCheck(text.trim(), apiKey);
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "user", content: `[Kiểm tra] ${text.trim()}` };
          return updated;
        });
      } else if (mode === "examples") {
        reply = await generateExamples(text.trim(), apiKey);
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "user", content: `[Ví dụ] ${text.trim()}` };
          return updated;
        });
      } else if (mode === "conversation") {
        reply = await getConversationPrompt(text.trim(), apiKey);
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "user", content: `🎭 Hội thoại: ${text.trim()}` };
          return updated;
        });
      } else {
        reply = await chatWithAI(text.trim(), apiKey, { history });
      }
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", content: `❌ ${getUserErrorMessage(err)}` }]);
      refreshCooldown();
    } finally {
      setLoading(false);
    }
  }, [apiKey, messages, loading, mode, refreshCooldown]);
  const isDisabled = loading || cooldown > 0;
  const placeholder = mode === "grammar" ? "Nhập câu tiếng Nhật để kiểm tra..." : mode === "examples" ? "Nhập từ/mẫu ngữ pháp cần ví dụ..." : "Hỏi gì đó bằng tiếng Việt hoặc tiếng Nhật...";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", height: "100%", gap: 8 }, children: [
    cooldown > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { fontSize: "0.85rem", textAlign: "center", color: "var(--n4-warning, #f59e0b)" }, children: [
      "⏳ Cooldown: ",
      cooldown,
      "s — Gemini free tier đang giới hạn. Vui lòng đợi..."
    ] }),
    messages.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-prompts", children: [
      mode === "chat" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-prompts-label", children: "⚡ Gợi ý nhanh:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-prompts-grid", children: QUICK_PROMPTS.map((qp, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon n4-btn-sm", onClick: () => sendMessage(qp.prompt), children: qp.label }, i)) })
      ] }),
      mode === "conversation" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-prompts-label", children: "🎭 Chọn chủ đề:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-prompts-grid", children: TOPICS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon n4-btn-sm", onClick: () => sendMessage(t), children: t }, t)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-messages", style: { flex: 1 }, children: [
      messages.map((msg, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChatMessage, { msg }, i)),
      loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-msg n4-ai-msg-bot", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-loading", children: "⏳ Đang suy nghĩ..." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: chatEndRef })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-input-area", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "n4-input n4-ai-input",
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage(input);
            }
          },
          placeholder,
          disabled: isDisabled
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", disabled: isDisabled || !input.trim(), onClick: () => sendMessage(input), children: loading ? "⏳" : cooldown > 0 ? `${cooldown}s` : "📨" }),
      messages.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => setMessages([]), children: "🗑️" })
    ] })
  ] });
}
function FeatureContent({ featureId, apiKey }) {
  const feature = FEATURES.find((f) => f.id === featureId);
  if (!feature) return null;
  switch (featureId) {
    case "chat":
    case "grammar":
    case "examples":
    case "conversation":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ChatPanel, { mode: featureId, apiKey });
    case "writing":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(WritingTab, { apiKey });
    case "roleplay":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(RoleplayTab, { apiKey });
    case "analyze":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(AnalyzeTab, { apiKey });
    case "advisor":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(AdvisorTab, { apiKey });
    case "freetalk":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(FreeTalkTab, { apiKey });
  }
  if (feature.comp) {
    const Comp = feature.comp;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: 40, color: "var(--n4-text-muted)" }, children: "⏳ Đang tải..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, {}) });
  }
  return null;
}
function AITutor() {
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const activeFeature = searchParams.get("feature") || null;
  const openFeature = reactExports.useCallback((id) => {
    if (id) setSearchParams({ feature: id }, { replace: true });
    else navigate("/ai-tutor", { replace: true });
  }, [setSearchParams, navigate]);
  reactExports.useEffect(() => {
    if (!activeFeature) return;
    const onKey = (e) => {
      if (e.key === "Escape") openFeature(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeFeature, openFeature]);
  if (!isLoggedIn || !hasKey) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-ai-nokey", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-nokey-icon", children: "✨" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "AI Learning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-ai-nokey-desc", children: !isLoggedIn ? "Vui lòng đăng nhập để sử dụng tính năng này." : "Đang chờ AI key từ hệ thống..." }),
      !isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", className: "n4-btn n4-btn-primary n4-ai-nokey-settings", children: "🔒 Đăng nhập" })
    ] });
  }
  if (activeFeature) {
    const info = FEATURES.find((f) => f.id === activeFeature);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-ai-scene", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-scene-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => openFeature(null), children: "← Quay lại" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "n4-ai-scene-title", children: [
          info == null ? void 0 : info.icon,
          " ",
          info == null ? void 0 : info.name
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-scene-content", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureContent, { featureId: activeFeature, apiKey }) })
    ] });
  }
  const categories = ["core", "practice", "tools", "creative"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-ai-dashboard-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-dashboard-header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-ai-dashboard-title", children: "✨ AI Learning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-ai-dashboard-subtitle", children: "21 công cụ AI hỗ trợ học JLPT" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-dashboard-grid", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-cat-divider", children: CAT_LABELS[cat] }),
      FEATURES.filter((f) => f.cat === cat).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "n4-card n4-ai-feature-card",
          onClick: () => openFeature(f.id),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-feature-icon", children: f.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-feature-info", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-feature-name", children: f.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-feature-desc", children: f.desc }),
              f.comp && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-feature-badge", children: "AI Online" })
            ] })
          ]
        },
        f.id
      ))
    ] }, cat)) })
  ] });
}
export {
  AITutor as default
};
