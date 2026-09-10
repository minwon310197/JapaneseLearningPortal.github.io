import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
function VoiceShadowing({ targetText = "", langCode = "ja-JP", onResult, onError }) {
  const [supported, setSupported] = reactExports.useState(true);
  const [listening, setListening] = reactExports.useState(false);
  const [transcript, setTranscript] = reactExports.useState("");
  const [fallbackText, setFallbackText] = reactExports.useState("");
  const recognitionRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const SR = typeof window !== "undefined" ? window.SpeechRecognition || window.webkitSpeechRecognition : null;
    if (!SR) {
      setSupported(false);
      return;
    }
    const rec = new SR();
    rec.lang = langCode;
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onresult = (e) => {
      var _a, _b, _c;
      const t = ((_c = (_b = (_a = e.results) == null ? void 0 : _a[0]) == null ? void 0 : _b[0]) == null ? void 0 : _c.transcript) || "";
      setTranscript(t);
      try {
        onResult == null ? void 0 : onResult({ transcript: t, target: targetText });
      } catch (e2) {
      }
    };
    rec.onerror = (e) => {
      try {
        onError == null ? void 0 : onError(e);
      } catch (e2) {
      }
    };
    rec.onend = () => setListening(false);
    recognitionRef.current = rec;
    return () => {
      var _a;
      try {
        (_a = rec.abort) == null ? void 0 : _a.call(rec);
      } catch (e) {
      }
    };
  }, [langCode, onResult, onError, targetText]);
  const start = reactExports.useCallback(() => {
    var _a;
    if (!supported) return;
    try {
      (_a = recognitionRef.current) == null ? void 0 : _a.start();
      setListening(true);
    } catch (e) {
    }
  }, [supported]);
  const stop = reactExports.useCallback(() => {
    var _a;
    if (!supported) return;
    try {
      (_a = recognitionRef.current) == null ? void 0 : _a.stop();
    } catch (e) {
    }
    setListening(false);
  }, [supported]);
  if (!supported) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-voice n4-voice-fallback", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "🎙️ Trình duyệt không hỗ trợ micro. Hãy gõ lại câu bạn nghe được:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-voice-target", children: targetText }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: fallbackText,
          onChange: (e) => setFallbackText(e.target.value),
          placeholder: "Gõ lại câu...",
          className: "n4-input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-btn n4-btn-primary",
          onClick: () => onResult == null ? void 0 : onResult({ transcript: fallbackText, target: targetText }),
          children: "Xác nhận"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-voice", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-voice-target", lang: langCode, children: targetText }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `n4-voice-btn ${listening ? "is-listening" : ""}`,
        onMouseDown: start,
        onMouseUp: stop,
        onMouseLeave: stop,
        onTouchStart: start,
        onTouchEnd: stop,
        "aria-label": listening ? "Đang nghe..." : "Nhấn giữ để nói",
        children: listening ? "🎤 Đang nghe…" : "🎙️ Nhấn giữ để nói"
      }
    ),
    transcript && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-voice-transcript", children: [
      "Bạn nói: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: transcript })
    ] })
  ] });
}
export {
  VoiceShadowing as default
};
