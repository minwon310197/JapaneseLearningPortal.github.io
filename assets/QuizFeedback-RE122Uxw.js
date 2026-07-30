import { R as React, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { aj as AIExplainButton } from "./feature-3d-hud-Dp6hMoyV.js";
import { a as useAppStore, f as speakJP } from "./feature-3d-jK3b4Iv-.js";
import { h as hasJapanese, o as optionRomaji } from "./useQuestionMeta-COYdBAbl.js";
const QUALITY_OPTIONS = [
  { quality: 0, label: "Quên", emoji: "😵", hint: "Không nhớ — ôn lại sớm", className: "again", keys: ["0", "1"] },
  { quality: 1, label: "Khó", emoji: "😓", hint: "Đoán mò mới đúng", className: "hard", keys: ["2"] },
  { quality: 2, label: "Được", emoji: "😊", hint: "Nhớ được bình thường", className: "good", keys: ["3", "Enter"] },
  { quality: 3, label: "Dễ", emoji: "🤩", hint: "Quá dễ — tăng khoảng cách", className: "easy", keys: ["4"] }
];
function QualityPicker({ onPick, disabled = false }) {
  const lockRef = reactExports.useRef(false);
  const pick = reactExports.useCallback((quality) => {
    if (lockRef.current || disabled) return;
    lockRef.current = true;
    onPick == null ? void 0 : onPick(quality);
  }, [onPick, disabled]);
  reactExports.useEffect(() => {
    function onKey(e) {
      if (lockRef.current || disabled) return;
      const opt = QUALITY_OPTIONS.find((o) => o.keys.includes(e.key));
      if (opt) {
        e.preventDefault();
        pick(opt.quality);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pick, disabled]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quality-picker", role: "group", "aria-label": "Đánh giá độ khó câu này", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quality-picker-label", children: "Bạn nhớ từ này thế nào?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quality-picker-row", children: QUALITY_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: `n4-quality-btn n4-quality-${opt.className}`,
        onClick: () => pick(opt.quality),
        disabled,
        title: `${opt.hint} (phím ${opt.keys[0]})`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-quality-emoji", "aria-hidden": "true", children: opt.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-quality-label", children: opt.label })
        ]
      },
      opt.quality
    )) })
  ] });
}
const QualityPicker$1 = React.memo(QualityPicker);
function QuizFeedback({
  isCorrect,
  correctAnswer,
  // string — the correct answer text
  correctInfo,
  // { reading, meaning, example } — details for feedback
  userAnswer,
  // string — what the user selected
  questionDisplay,
  // string — the question/prompt text
  questionId,
  // string — for AI explain cache key
  showQualityPicker = false,
  onQualityPick,
  // (quality: 0-3) => void
  onNext,
  // () => void
  isLastQuestion = false,
  autoAdvance = false,
  // auto-advance after timeout (for TrueFalseMode etc.)
  autoAdvanceMs = 1200,
  // ms before auto-advance
  children
  // extra content slot
}) {
  const autoAdvanceRef = reactExports.useRef(null);
  const globalAutoAdvance = useAppStore((s) => s.autoAdvance);
  const effectiveAutoAdvance = autoAdvance || globalAutoAdvance;
  reactExports.useEffect(() => {
    if (!effectiveAutoAdvance || !onNext) return;
    if (isCorrect && showQualityPicker) return;
    autoAdvanceRef.current = setTimeout(() => {
      onNext();
    }, autoAdvanceMs);
    return () => clearTimeout(autoAdvanceRef.current);
  }, [effectiveAutoAdvance, autoAdvanceMs, onNext, isCorrect, showQualityPicker]);
  const handleQualityPick = (quality) => {
    clearTimeout(autoAdvanceRef.current);
    onQualityPick == null ? void 0 : onQualityPick(quality);
  };
  const stateClass = isCorrect ? "n4-feedback--correct" : "n4-feedback--wrong";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-feedback ${stateClass}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-feedback-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-feedback-icon", "aria-hidden": "true", children: isCorrect ? "✅" : "❌" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isCorrect ? "Chính xác!" : "Sai rồi!" })
    ] }),
    !isCorrect && correctInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-feedback-detail", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-feedback-detail-label", children: "Đáp án đúng:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-feedback-detail-word", children: correctAnswer }),
      hasJapanese(correctAnswer) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-feedback-detail-romaji", children: optionRomaji(correctAnswer) }),
      correctInfo.reading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-feedback-detail-reading", children: correctInfo.reading }),
      correctInfo.meaning && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-feedback-detail-meaning", children: correctInfo.meaning }),
      correctInfo.example && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-feedback-detail-example", children: [
        "📝 ",
        correctInfo.example
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-feedback-actions", children: [
      correctAnswer && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-feedback-speak-btn",
          onClick: () => speakJP(correctAnswer),
          title: "Nghe phát âm",
          children: "🔊 Nghe"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AIExplainButton,
        {
          question: questionDisplay,
          answer: correctAnswer,
          userAnswer,
          isCorrect,
          itemInfo: correctInfo,
          questionId
        }
      )
    ] }),
    children,
    showQualityPicker && isCorrect && onQualityPick && /* @__PURE__ */ jsxRuntimeExports.jsx(QualityPicker$1, { onPick: handleQualityPick }),
    !effectiveAutoAdvance && onNext && !(showQualityPicker && isCorrect) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-feedback-next", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: onNext, children: isLastQuestion ? "Xem kết quả" : "Câu tiếp →" }) })
  ] });
}
const QuizFeedback$1 = reactExports.memo(QuizFeedback);
export {
  QuizFeedback$1 as Q
};
