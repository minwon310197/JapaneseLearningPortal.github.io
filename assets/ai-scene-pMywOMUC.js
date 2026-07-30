import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { B as useAIKey, aX as simulateScene } from "./feature-3d-hud-Dp6hMoyV.js";
import { c as getUserErrorMessage } from "./index-CjITGIof.js";
import { f as speakJP } from "./feature-3d-jK3b4Iv-.js";
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-icons-DHCyxOF-.js";
const PRESET_SCENES = [
  { icon: "🏪", title: "コンビニで", desc: "Tại cửa hàng tiện lợi", situation: "Bạn vào cửa hàng tiện lợi mua đồ ăn trưa. Nhân viên chào bạn." },
  { icon: "🚉", title: "駅で", desc: "Tại ga tàu", situation: "Bạn bị lạc ở ga tàu Tokyo. Hỏi đường đến ga Shibuya." },
  { icon: "🏨", title: "ホテルで", desc: "Tại khách sạn", situation: "Bạn check-in tại khách sạn ở Osaka. Lễ tân hỏi bạn thông tin." },
  { icon: "🏥", title: "病院で", desc: "Tại bệnh viện", situation: "Bạn bị đau bụng và đến bệnh viện. Bác sĩ hỏi triệu chứng." },
  { icon: "📮", title: "郵便局で", desc: "Tại bưu điện", situation: "Bạn muốn gửi bưu kiện về Việt Nam. Nhân viên hướng dẫn." },
  { icon: "🍜", title: "ラーメン屋で", desc: "Tại quán ramen", situation: "Bạn vào quán ramen. Nhân viên hỏi bạn muốn gọi gì." },
  { icon: "🏠", title: "不動産屋で", desc: "Tại văn phòng bất động sản", situation: "Bạn đang tìm phòng trọ ở Tokyo. Nhân viên giới thiệu phòng." },
  { icon: "📱", title: "携帯ショップで", desc: "Tại cửa hàng điện thoại", situation: "Bạn muốn mua SIM card ở Nhật. Nhân viên hỏi nhu cầu." }
];
function AIScene() {
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [phase, setPhase] = reactExports.useState("config");
  const [situation, setSituation] = reactExports.useState("");
  const [customSituation, setCustomSituation] = reactExports.useState("");
  const [messages, setMessages] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const chatEndRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a;
    (_a = chatEndRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const startScene = reactExports.useCallback(async (sit) => {
    setLoading(true);
    setError(null);
    setSituation(sit);
    setMessages([]);
    try {
      const response = await simulateScene(sit, [], "", apiKey);
      setMessages([{ role: "ai", text: response }]);
      setPhase("chat");
    } catch (err) {
      setError(getUserErrorMessage(err, "Không thể bắt đầu tình huống lúc này."));
    } finally {
      setLoading(false);
    }
  }, [apiKey]);
  const sendMessage = reactExports.useCallback(async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    const newMessages = [...messages, { role: "user", text: userMsg }];
    setMessages(newMessages);
    setLoading(true);
    setError(null);
    try {
      const history = newMessages.map((m) => ({ role: m.role === "ai" ? "assistant" : "user", content: m.text }));
      const response = await simulateScene(situation, history, userMsg, apiKey);
      if (response.toLowerCase().includes("[end]") || response.toLowerCase().includes("終了") || newMessages.length >= 14) {
        setMessages([...newMessages, { role: "ai", text: response.replace(/\[end\]/gi, "").trim() }]);
        setPhase("ended");
      } else {
        setMessages([...newMessages, { role: "ai", text: response }]);
      }
    } catch (err) {
      setError(getUserErrorMessage(err, "Không thể tiếp tục tình huống lúc này."));
    } finally {
      setLoading(false);
    }
  }, [apiKey, input, messages, situation]);
  const reset = () => {
    setPhase("config");
    setMessages([]);
    setSituation("");
    setError(null);
  };
  if (!isLoggedIn || !hasKey) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-ai-nokey", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-nokey-icon", children: "🎭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Mô phỏng tình huống bằng AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-ai-nokey-desc", children: !isLoggedIn ? "Vui lòng đăng nhập để sử dụng tính năng này." : "Đang chờ AI key từ hệ thống..." }),
      !isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", className: "n4-btn n4-btn-primary", children: "🔒 Đăng nhập" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-feature n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-hero", style: { background: "linear-gradient(135deg, #f5af19 0%, #f12711 100%)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-hero-icon", children: "🎭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Mô phỏng tình huống bằng AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Mô phỏng tình huống thực tế — luyện hội thoại tiếng Nhật" })
    ] }),
    phase === "config" && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-config", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-config-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-config-label", children: "Tình huống tùy chọn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "n4-input",
            style: { flex: 1 },
            value: customSituation,
            onChange: (e) => setCustomSituation(e.target.value),
            placeholder: "Mô tả tình huống bằng tiếng Việt...",
            onKeyDown: (e) => {
              if (e.key === "Enter" && customSituation.trim()) startScene(customSituation.trim());
            }
          }
        ),
        customSituation.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: () => startScene(customSituation.trim()), children: "🎭 Bắt đầu" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85rem", color: "var(--n4-text-muted)", margin: "var(--n4-sp-2) 0 var(--n4-sp-1)", textAlign: "center" }, children: "Hoặc chọn tình huống có sẵn:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "var(--n4-sp-1)" }, children: PRESET_SCENES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-ai-scene-card", onClick: () => startScene(s.situation), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-scene-card-icon", children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-scene-card-title", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-scene-card-desc", children: s.desc })
      ] }, s.title)) })
    ] }),
    loading && messages.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-loading-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-loading-spinner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "🎭 Đang tạo tình huống..." })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-error-card", style: { marginBottom: "var(--n4-sp-2)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-icon", children: "❌" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-error-msg", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => setError(null), children: "Đóng" })
    ] }),
    (phase === "chat" || phase === "ended") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { fontSize: "0.85rem", marginBottom: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "📍 Tình huống:" }),
        " ",
        situation
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-scene-chat", children: [
        messages.map((msg, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-ai-scene-msg ${msg.role === "user" ? "n4-ai-scene-msg-user" : "n4-ai-scene-msg-ai"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-scene-msg-avatar", children: msg.role === "user" ? "🧑" : "👩‍🏫" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-scene-msg-bubble", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-scene-msg-text", children: msg.text }),
            msg.role === "ai" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { marginTop: 4, padding: "2px 8px" }, onClick: () => speakJP(msg.text), children: "🔊" })
          ] })
        ] }, i)),
        loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-scene-msg n4-ai-scene-msg-ai", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-scene-msg-avatar", children: "👩‍🏫" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-scene-msg-bubble", children: /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Đang trả lời..." }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: chatEndRef })
      ] }),
      phase === "chat" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "var(--n4-sp-1)", marginTop: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "n4-input",
            style: { flex: 1 },
            value: input,
            onChange: (e) => setInput(e.target.value),
            placeholder: "Trả lời bằng tiếng Nhật...",
            onKeyDown: (e) => {
              if (e.key === "Enter") sendMessage();
            },
            disabled: loading
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: sendMessage, disabled: loading || !input.trim(), children: loading ? "⏳" : "📤" })
      ] }),
      phase === "ended" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { textAlign: "center", marginTop: "var(--n4-sp-2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2rem" }, children: "🎉" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Hội thoại kết thúc!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: "0.85rem", color: "var(--n4-text-secondary)" }, children: [
          "Bạn đã trao đổi ",
          messages.filter((m) => m.role === "user").length,
          " lượt. Tuyệt vời!"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-actions", style: { marginTop: "var(--n4-sp-2)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: reset, children: "🔄 Tình huống mới" }) })
    ] })
  ] });
}
export {
  AIScene as default
};
