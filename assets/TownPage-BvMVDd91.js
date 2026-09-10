const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ai-S4u4-t6_.js","./client-wNJ1tNgU.js","./api-BAg1LJRR.js","./index-BEJSIlFS.js","./vendor-react-BUL8WuXG.js","./vendor-runtime-BbOs9S9B.js","./vendor-icons-D83cEu6Z.js","./vendor-router-Dx6RIovR.js","./vendor-supabase-DTEAj5J1.js","./index-BF-iHvWQ.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { h as useLearningStore, ab as useNPCStore, ac as AJL_TOWN_SCENARIOS } from "./index-BEJSIlFS.js";
import { a as awardAjlRewards } from "./ajl-rewards-DFK0Q7fw.js";
import { A as ArrowLeft, b as CircleCheck, d as Send } from "./vendor-icons-D83cEu6Z.js";
import { m as motion } from "./vendor-motion-C2SAPQSW.js";
import { a as useNavigate } from "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
const TOWN_SCENE_ID = "tokyo-town";
function TownPage() {
  const navigate = useNavigate();
  const storyProgress = useLearningStore((s) => s.storyProgress);
  const completeScenario = useLearningStore((s) => s.completeScenario);
  const upsertNpc = useNPCStore((s) => s.upsertNpc);
  const setSceneNpcIds = useNPCStore((s) => s.setSceneNpcIds);
  const startSession = useNPCStore((s) => s.startSession);
  const appendSessionMessage = useNPCStore((s) => s.appendSessionMessage);
  const closeSession = useNPCStore((s) => s.closeSession);
  const setMemorySummary = useNPCStore((s) => s.setMemorySummary);
  const [activeScenario, setActiveScenario] = reactExports.useState(null);
  const [sessionId, setSessionId] = reactExports.useState(null);
  const [messages, setMessages] = reactExports.useState([]);
  const [inputText, setInputText] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [completed, setCompleted] = reactExports.useState(false);
  const chatEndRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const npcIds = AJL_TOWN_SCENARIOS.map((s) => s.id);
    for (const scenario of AJL_TOWN_SCENARIOS) {
      upsertNpc({
        id: scenario.id,
        name: scenario.name,
        icon: scenario.icon,
        tags: ["town", "scenario"],
        scenarioData: { objective: scenario.objective, keywords: scenario.keywords }
      });
    }
    setSceneNpcIds(TOWN_SCENE_ID, npcIds);
  }, [upsertNpc, setSceneNpcIds]);
  reactExports.useEffect(() => {
    var _a;
    (_a = chatEndRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const startScenarioChat = reactExports.useCallback((scenario) => {
    setActiveScenario(scenario);
    const greeting = { role: "assistant", content: scenario.greeting };
    setMessages([greeting]);
    setCompleted(false);
    setInputText("");
    const sid = startSession({ npcId: scenario.id, sceneId: TOWN_SCENE_ID, channel: "roleplay" });
    setSessionId(sid);
    if (sid) appendSessionMessage(sid, greeting);
  }, [startSession, appendSessionMessage]);
  const exitScenario = reactExports.useCallback(() => {
    if (sessionId) {
      closeSession(sessionId, completed ? "completed" : "abandoned");
      if (activeScenario) {
        setMemorySummary(activeScenario.id, {
          lastInteraction: (/* @__PURE__ */ new Date()).toISOString(),
          messageCount: messages.length,
          completed,
          tags: completed ? ["completed"] : []
        });
      }
    }
    setActiveScenario(null);
    setSessionId(null);
    setMessages([]);
  }, [sessionId, completed, activeScenario, messages.length, closeSession, setMemorySummary]);
  const sendMessage = reactExports.useCallback(async () => {
    if (!inputText.trim() || isLoading || !activeScenario) return;
    const userMsg = inputText.trim();
    setInputText("");
    const userEntry = { role: "user", content: userMsg };
    setMessages((prev) => [...prev, userEntry]);
    if (sessionId) appendSessionMessage(sessionId, userEntry);
    setIsLoading(true);
    try {
      const { chatWithAI } = await __vitePreload(async () => {
        const { chatWithAI: chatWithAI2 } = await import("./ai-S4u4-t6_.js");
        return { chatWithAI: chatWithAI2 };
      }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url);
      const history = messages.map((m) => ({ role: m.role, content: m.content }));
      const response = await chatWithAI(userMsg, null, {
        history,
        systemPrompt: activeScenario.systemPrompt,
        maxTokens: 300
      });
      const assistantEntry = { role: "assistant", content: response };
      setMessages((prev) => [...prev, assistantEntry]);
      if (sessionId) appendSessionMessage(sessionId, assistantEntry);
      if (response.includes("[OBJECTIVE_COMPLETE]") || response.includes("[HOÀN THÀNH]")) {
        setCompleted(true);
        const isFirst = !storyProgress[activeScenario.id];
        completeScenario(activeScenario.id);
        const baseCoins = isFirst ? 80 : 20;
        const baseXP = isFirst ? 100 : 25;
        awardAjlRewards(baseXP, baseCoins, "town-scenario");
      }
    } catch (err) {
      const errorEntry = { role: "assistant", content: "⚠️ Không thể kết nối AI. Hãy thử lại sau." };
      setMessages((prev) => [...prev, errorEntry]);
      if (sessionId) appendSessionMessage(sessionId, errorEntry);
    } finally {
      setIsLoading(false);
    }
  }, [inputText, isLoading, activeScenario, messages, storyProgress, completeScenario, sessionId, appendSessionMessage]);
  const handleKeyDown = reactExports.useCallback((e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }, [sendMessage]);
  if (!activeScenario) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { padding: "1rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn", onClick: () => navigate(-1), style: { display: "flex", alignItems: "center", gap: 6 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 }),
          " Quay lại"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontSize: "1.5rem", fontWeight: 700 }, children: "🏙️ Thị trấn Tokyo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 80 } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-dim)", textAlign: "center", marginBottom: 24 }, children: "Luyện tập hội thoại tiếng Nhật với AI trong các tình huống thực tế." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }, children: AJL_TOWN_SCENARIOS.map((scenario, idx) => {
        const isDone = !!storyProgress[scenario.id];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: idx * 0.1 },
            className: "n4-card",
            style: { padding: "1.5rem", cursor: "pointer", position: "relative" },
            onClick: () => startScenarioChat(scenario),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2.5rem", marginBottom: 8 }, children: scenario.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontWeight: 700, marginBottom: 4 }, children: scenario.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-dim)", fontSize: "0.85rem", marginBottom: 8 }, children: scenario.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "#a855f7", fontSize: "0.8rem", marginBottom: 8 }, children: [
                "Mục tiêu: ",
                scenario.objective
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#eab308", fontWeight: 600, fontSize: "0.85rem" }, children: isDone ? "🔁 20 🪙" : "🎁 80 🪙" }),
                isDone && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16, color: "#22c55e" })
              ] })
            ]
          },
          scenario.id
        );
      }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { padding: "1rem", display: "flex", flexDirection: "column", height: "calc(100vh - 120px)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexShrink: 0 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn", onClick: exitScenario, style: { display: "flex", alignItems: "center", gap: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: { fontWeight: 700 }, children: [
          activeScenario.icon,
          " ",
          activeScenario.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "var(--n4-text-dim)", fontSize: "0.8rem" }, children: [
          "Mục tiêu: ",
          activeScenario.objective
        ] })
      ] }),
      completed && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { marginLeft: "auto", color: "#22c55e", fontWeight: 700, display: "flex", alignItems: "center", gap: 4, fontSize: "0.85rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16 }),
        " Hoàn thành!"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, overflow: "auto", display: "flex", flexDirection: "column", gap: 10, paddingBottom: 8 }, children: [
      messages.map((msg, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
        maxWidth: "80%",
        padding: "10px 14px",
        borderRadius: 16,
        background: msg.role === "user" ? "var(--n4-primary, #3b82f6)" : "var(--n4-surface)",
        color: msg.role === "user" ? "#fff" : "var(--n4-text)",
        fontSize: "0.95rem",
        lineHeight: 1.5
      }, children: msg.content.replace("[OBJECTIVE_COMPLETE]", "").replace("[HOÀN THÀNH]", "") }, i)),
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { alignSelf: "flex-start", padding: "10px 14px", borderRadius: 16, background: "var(--n4-surface)", color: "var(--n4-text-dim)" }, children: "Đang nghĩ..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: chatEndRef })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flexShrink: 0, display: "flex", gap: 8, marginTop: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: inputText,
          onChange: (e) => setInputText(e.target.value),
          onKeyDown: handleKeyDown,
          placeholder: "Nhập tiếng Nhật...",
          style: {
            flex: 1,
            padding: "10px 14px",
            borderRadius: 12,
            border: "2px solid var(--n4-border)",
            background: "var(--n4-surface)",
            color: "var(--n4-text)",
            fontSize: "1rem",
            outline: "none"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-btn n4-btn-primary",
          onClick: sendMessage,
          disabled: !inputText.trim() || isLoading,
          style: { padding: "10px 16px", display: "flex", alignItems: "center", gap: 4 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 18 })
        }
      )
    ] })
  ] });
}
export {
  TownPage as default
};
