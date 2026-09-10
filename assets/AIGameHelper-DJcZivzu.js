import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { u as useAIKey } from "./useAIKey-CpSw0zmN.js";
import { c as chatWithAI } from "./client-wNJ1tNgU.js";
import { u as useAppStore, F as content, s as safeGetItem, d as safeSetItem } from "./index-BEJSIlFS.js";
import { r as reportContentError } from "./content-errors-D90Pz2ps.js";
function simpleHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i) | 0;
  }
  return Math.abs(h).toString(36);
}
const CACHE_PREFIX = "n4-ai-explain-";
function normalizeAnalysisContext(context) {
  if (!context) return null;
  if (typeof context === "string") return { notes: context };
  if (typeof context !== "object") return { notes: String(context) };
  return context;
}
function stableStringify(value) {
  if (value == null || value === "") return "";
  if (typeof value !== "object") return String(value);
  const seen = /* @__PURE__ */ new WeakSet();
  return JSON.stringify(value, (key, val) => {
    if (!val || typeof val !== "object") return val;
    if (seen.has(val)) return "[Circular]";
    seen.add(val);
    if (Array.isArray(val)) return val;
    return Object.keys(val).sort().reduce((acc, itemKey) => {
      const itemValue = val[itemKey];
      if (itemValue !== void 0 && itemValue !== null && itemValue !== "") {
        acc[itemKey] = itemValue;
      }
      return acc;
    }, {});
  });
}
function compactText(value) {
  if (value == null || value === "") return "";
  if (Array.isArray(value)) return value.map(compactText).filter(Boolean).join("\n");
  if (typeof value === "object") return stableStringify(value);
  return String(value).trim();
}
function formatChoice(choice) {
  if (choice == null || choice === "") return "";
  if (typeof choice !== "object") return String(choice);
  const label = compactText(choice.label || choice.word || choice.answer || choice.text || choice.key);
  const reading = compactText(choice.reading || choice.romaji);
  const meaning = compactText(choice.meaning || choice.vi || choice.gloss);
  const correctness = choice.isCorrect ? " [đáp án đúng]" : "";
  return [label, reading ? `(${reading})` : "", meaning ? `- ${meaning}` : ""].filter(Boolean).join(" ") + correctness;
}
function addContextLine(lines, label, value) {
  const text = compactText(value);
  if (text) lines.push(`- ${label}: ${text}`);
}
function formatContextLines(ctx) {
  if (!ctx) return "";
  const lines = [];
  addContextLine(lines, "Overlay", ctx.overlay || ctx.domain);
  addContextLine(lines, "Loại", ctx.examTypeLabel || ctx.questionType);
  addContextLine(lines, "Prompt", ctx.questionPrompt || ctx.prompt);
  addContextLine(lines, "Câu gốc", ctx.blankSentence || ctx.questionJapanese || ctx.sentence);
  addContextLine(lines, "Romaji câu gốc", ctx.blankRomaji || ctx.questionRomaji || ctx.sentenceRomaji);
  addContextLine(lines, "Nghĩa câu gốc", ctx.questionVietnamese || ctx.promptVietnamese || ctx.sentenceVietnamese);
  addContextLine(lines, "Đáp án", ctx.correctAnswer || ctx.correctAnswerJapanese);
  addContextLine(lines, "Reading", ctx.correctReading || ctx.correctAnswerReading);
  addContextLine(lines, "Romaji đáp án", ctx.correctRomaji || ctx.correctAnswerRomaji);
  addContextLine(lines, "Nghĩa đáp án", ctx.correctMeaning || ctx.correctAnswerVietnamese);
  addContextLine(lines, "Người học chọn", ctx.userAnswer || ctx.userAnswerJapanese);
  addContextLine(lines, "Câu đầy đủ", ctx.fullSentence || ctx.fullSentenceJapanese);
  addContextLine(lines, "Romaji câu đầy đủ", ctx.fullSentenceRomaji);
  addContextLine(lines, "Nghĩa câu đầy đủ", ctx.fullSentenceVietnamese || ctx.fullMeaning);
  addContextLine(lines, "Mục tiêu", ctx.grammarPoint || ctx.targetForm || ctx.target);
  addContextLine(lines, "Từ gốc", ctx.base);
  addContextLine(lines, "Romaji từ gốc", ctx.baseRomaji);
  addContextLine(lines, "Nghĩa từ gốc", ctx.baseMeaning);
  addContextLine(lines, "Giải thích app", ctx.expectedExplanation || ctx.explanationVi || ctx.explanation);
  addContextLine(lines, "Thông tin", ctx.itemInfo);
  addContextLine(lines, "Ghi chú", ctx.notes || ctx.extraContext);
  if (Array.isArray(ctx.choices) && ctx.choices.length) {
    lines.push(`- Lựa chọn:
  ${ctx.choices.map(formatChoice).filter(Boolean).join("\n  ")}`);
  }
  if (Array.isArray(ctx.examples) && ctx.examples.length) {
    lines.push(`- Ví dụ:
  ${ctx.examples.map(compactText).filter(Boolean).join("\n  ")}`);
  }
  if (Array.isArray(ctx.vocabularyExamples) && ctx.vocabularyExamples.length) {
    lines.push(`- Từ ví dụ:
  ${ctx.vocabularyExamples.map(formatChoice).filter(Boolean).join("\n  ")}`);
  }
  return lines.join("\n");
}
const JLPT_N4_OVERLAY_SYSTEM_PROMPT = [
  "Bạn là GV tiếng Nhật JLPT N4.",
  "Phạm vi bắt buộc: chỉ dùng kiến thức N5/N4 để phục vụ ôn thi JLPT N4; không thêm mẫu N3/N2/N1.",
  'Nếu context chứa kiến thức vượt N4, hãy ghi rõ "ngoài phạm vi N4" và quay về cách giải N4 thay vì mở rộng.',
  "App-provided reading/correctAnswer là nguồn sự thật (nhất là kanji/vocab), không tự bác bỏ.",
  "Giải thích lý do đáp án đúng.",
  'Chỉ báo "Cần sửa" nếu context mâu thuẫn nội bộ rõ rệt (ví dụ: nghĩa sai hoàn toàn, romaji lệch kana).',
  'Nếu không chắc, ghi "không đủ dữ liệu để xác minh". Không bịa từ/thể chia.',
  "Viết ngắn gọn bằng tiếng Việt."
].join(" ");
function buildJlptN4OverlayAnalysisPrompt({
  question,
  answer,
  userAnswer,
  isCorrect,
  itemInfo,
  analysisContext
}) {
  const ctx = normalizeAnalysisContext(analysisContext) || {};
  const info = normalizeAnalysisContext(itemInfo) || {};
  const correctAnswer = ctx.correctAnswer || ctx.correctAnswerJapanese || answer;
  const selectedAnswer = ctx.userAnswer || ctx.userAnswerJapanese || userAnswer || "(không chọn)";
  const domain = ctx.domain || ctx.overlay || "";
  const isKanjiVocab = /kanji|vocab|reading/i.test(domain);
  const trustNote = isKanjiVocab ? `
LƯU Ý: Đây là câu ${domain}. Reading & đáp án từ app là nguồn sự thật — hãy giải thích dựa trên đó. Đừng tự bác bỏ cách đọc KUN/ON hợp lệ. Chỉ báo "Cần sửa" nếu context mâu thuẫn nội tại rõ rệt (nghĩa sai, romaji lệch kana). Nếu không chắc, ghi "không đủ dữ liệu để xác minh".` : "";
  const reading = ctx.correctReading || ctx.correctAnswerReading || info.reading || "";
  const meaning = ctx.correctMeaning || ctx.correctAnswerVietnamese || info.meaning || "";
  const contextLines = formatContextLines({
    questionPrompt: question,
    correctAnswer,
    correctReading: reading,
    correctMeaning: meaning,
    userAnswer: selectedAnswer,
    ...ctx
  });
  return `Phân tích & kiểm chứng câu JLPT N4.${trustNote}

Dữ liệu app:
${contextLines || "- Không có."}
- Kết quả: ${isCorrect ? "Chọn đúng" : "Chọn sai"}

Nhiệm vụ:
- Giữ phân tích trong phạm vi N5/N4 phục vụ ôn thi JLPT N4; không thêm kiến thức N3/N2/N1.
- Nếu dữ liệu app có dấu hiệu vượt N4, ghi "ngoài phạm vi N4" và chỉ giải thích phần cần thiết cho N4.
- Giải thích đáp án đúng dựa vào dữ liệu app (reading từ app là nguồn sự thật).
- Chỉ báo "Cần sửa" nếu context mâu thuẫn nội bộ rõ rệt.
- Không chắc chắn thì ghi "không đủ dữ liệu để xác minh".
- Khôi phục câu đầy đủ. Phân tích cụm (cụm / romaji: vai trò) nếu là ngữ pháp/thể/trợ từ.
- Không trả JSON hay bảng.

Format trả về bắt buộc:

Kết luận kiểm chứng
Trạng thái: Hợp lệ / Cần sửa / Không đủ dữ liệu
Ghi chú: ...

Câu hỏi
<câu gốc/chỗ trống>
Romaji: ...
Nghĩa: ...

Đáp án đúng
<đáp án> / <romaji>

Câu đầy đủ:
<câu đầy đủ>
Romaji: ...
Nghĩa: ...

Ngữ pháp trong câu
<phân tích cụm Nhật/romaji: vai trò>

Vì sao chọn ${correctAnswer || "<đáp án đúng>"}
<giải thích ngắn gọn>

Vì sao bạn chọn sai: ${selectedAnswer}
<nếu người học chọn sai, giải thích lý do. Nếu chọn đúng, ghi: "Bạn đã chọn đúng, không có đáp án sai.">

Mẹo ghi nhớ
<1-2 câu hoặc bỏ>`;
}
function AIExplainButton({ question, answer, userAnswer, isCorrect, itemInfo, questionId, analysisContext }) {
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [explanation, setExplanation] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [expanded, setExpanded] = reactExports.useState(false);
  const user = useAppStore((state) => state.user);
  const [reportStatus, setReportStatus] = reactExports.useState("idle");
  const normalizedAnalysisContext = reactExports.useMemo(() => normalizeAnalysisContext(analysisContext), [analysisContext]);
  const analysisContextKey = reactExports.useMemo(() => stableStringify(normalizedAnalysisContext), [normalizedAnalysisContext]);
  const useOverlayAnalysisPrompt = (normalizedAnalysisContext == null ? void 0 : normalizedAnalysisContext.format) === "jlpt-n4-world-overlay";
  const authored = reactExports.useMemo(() => {
    var _a, _b;
    if (!questionId) return null;
    try {
      return ((_b = (_a = content).getExplanation) == null ? void 0 : _b.call(_a, questionId)) || null;
    } catch (e) {
      return null;
    }
  }, [questionId]);
  const renderAuthored = reactExports.useCallback(() => {
    if (!authored) return null;
    const parts = [];
    if (authored.core) parts.push(authored.core);
    if (authored.pattern) parts.push(`
Mẫu: ${authored.pattern}`);
    if (authored.whenToUse) parts.push(`
Khi nào dùng: ${authored.whenToUse}`);
    if (authored.distractors && typeof authored.distractors === "object") {
      const list = Object.entries(authored.distractors).filter(([opt]) => opt !== answer).map(([opt, why]) => `• ${opt}: ${why}`);
      if (list.length) parts.push("\nVì sao các đáp án còn lại sai:\n" + list.join("\n"));
    }
    return parts.join("\n");
  }, [authored, answer]);
  const handleExplain = reactExports.useCallback(async () => {
    if (explanation) {
      setExpanded((e) => !e);
      return;
    }
    const authoredText = useOverlayAnalysisPrompt ? null : renderAuthored();
    if (authoredText) {
      setExplanation(authoredText);
      setExpanded(true);
      return;
    }
    if (!isLoggedIn || !hasKey) {
      alert("Vui lòng đăng nhập để sử dụng tính năng này");
      return;
    }
    const cacheKey = CACHE_PREFIX + simpleHash(`${questionId || question}|${answer}|${userAnswer || ""}|${isCorrect ? "ok" : "ng"}|${analysisContextKey}`);
    const cached = safeGetItem(cacheKey);
    if (cached) {
      const tsKey = cacheKey + "-ts";
      const ts = parseInt(safeGetItem(tsKey) || "0", 10);
      if (ts && Date.now() - ts < 7 * 864e5) {
        setExplanation(cached);
        setExpanded(true);
        return;
      }
    }
    setLoading(true);
    try {
      const reading = (itemInfo == null ? void 0 : itemInfo.reading) || "";
      const meaning = (itemInfo == null ? void 0 : itemInfo.meaning) || "";
      const contextBlock = normalizedAnalysisContext ? `
- Bối cảnh kiểm chứng từ hệ thống:
${formatContextLines(normalizedAnalysisContext)}` : "";
      const msg = useOverlayAnalysisPrompt ? buildJlptN4OverlayAnalysisPrompt({
        question,
        answer,
        userAnswer,
        isCorrect,
        itemInfo,
        analysisContext: normalizedAnalysisContext
      }) : `Phân tích và double-check câu hỏi JLPT N4 này bằng tiếng Việt:
- Câu hỏi: ${question}
- Đáp án đúng: ${answer}${reading ? ` (${reading})` : ""}${meaning ? ` — ${meaning}` : ""}
- Người học chọn: ${userAnswer || "(không chọn)"}
- Kết quả: ${isCorrect ? "Đúng" : "Sai"}
${contextBlock}

Yêu cầu bắt buộc:
- Kiểm chứng đáp án đúng trước khi giải thích; nếu dữ liệu có dấu hiệu sai hoặc không tồn tại trong tiếng Nhật, hãy nói rõ.
- Không tự bịa từ tiếng Nhật, không ghép các hậu tố mâu thuẫn như ました + たい hoặc ます + たい.
- Nếu là bài chia động từ: xác định thể từ điển trước, xác định nhóm động từ từ thể từ điển, rồi mới nêu quy tắc.
- Với たい形: lấy ます形, bỏ toàn bộ ます để được thân động từ, rồi thêm たい.
- Chỉ dùng kiến thức N5/N4 cho kỳ thi JLPT N4; không gợi ý học tiếp N3/N2/N1 trong phần giải thích.
- Nếu không đủ dữ liệu để xác minh chắc chắn, hãy nói "không đủ dữ liệu để xác minh" thay vì đoán.

Hãy giải thích:
1. Kết luận kiểm chứng: đáp án có hợp lệ không
2. Tại sao đáp án đúng là "${answer}"
3. ${!isCorrect ? `Tại sao "${userAnswer}" sai` : "Điểm cần nhớ"}
4. Mẹo ghi nhớ (nếu có)

Trả lời ngắn gọn, chắc chắn, dễ hiểu.`;
      const result = await chatWithAI(msg, apiKey, {
        systemPrompt: useOverlayAnalysisPrompt ? JLPT_N4_OVERLAY_SYSTEM_PROMPT : "Bạn là giáo viên tiếng Nhật chuyên JLPT N4. Chỉ dùng kiến thức N5/N4 phục vụ ôn thi N4, không thêm mẫu N3/N2/N1. Luôn kiểm chứng trước khi giải thích, không bịa từ tiếng Nhật, không tạo dạng chia không tồn tại. Với chia động từ, xác định nhóm từ thể từ điển, không dựa vào đuôi ます. Nếu không chắc, nói rõ là không đủ dữ liệu để xác minh. Giải thích bằng tiếng Việt, ngắn gọn và dễ hiểu.",
        maxTokens: useOverlayAnalysisPrompt ? 1e3 : 420,
        temperature: useOverlayAnalysisPrompt ? 0.25 : 0.5,
        timeout: useOverlayAnalysisPrompt ? 2e4 : 15e3
      });
      if (result) {
        try {
          safeSetItem(cacheKey, result);
          safeSetItem(cacheKey + "-ts", String(Date.now()));
        } catch (e) {
          if ((e == null ? void 0 : e.name) === "QuotaExceededError") {
            for (let i = localStorage.length - 1; i >= 0; i--) {
              const k = localStorage.key(i);
              if (k == null ? void 0 : k.startsWith(CACHE_PREFIX)) localStorage.removeItem(k);
            }
            try {
              safeSetItem(cacheKey, result);
              safeSetItem(cacheKey + "-ts", String(Date.now()));
            } catch (e2) {
            }
          }
        }
        setExplanation(result);
        setExpanded(true);
      }
    } catch (e) {
      setExplanation("Không thể kết nối AI. Vui lòng thử lại.");
      setExpanded(true);
    } finally {
      setLoading(false);
    }
  }, [explanation, apiKey, hasKey, isLoggedIn, questionId, question, answer, userAnswer, isCorrect, itemInfo, normalizedAnalysisContext, analysisContextKey, useOverlayAnalysisPrompt, renderAuthored]);
  const handleReportError = reactExports.useCallback(async () => {
    if (reportStatus === "loading") return;
    setReportStatus("loading");
    try {
      await reportContentError((user == null ? void 0 : user.id) || "anonymous", {
        itemType: "ai_verification",
        itemId: questionId || "unknown",
        section: "ai",
        field: "explanation",
        currentValue: explanation,
        suggestedValue: JSON.stringify({ question, answer, userAnswer, isCorrect, itemInfo, analysisContext: normalizedAnalysisContext }),
        description: "Người dùng báo lỗi AI kiểm chứng"
      });
      setReportStatus("success");
    } catch (e) {
      console.error("Failed to report AI error:", e);
      setReportStatus("error");
    }
  }, [user, questionId, explanation, question, answer, userAnswer, isCorrect, itemInfo, normalizedAnalysisContext, reportStatus]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-explain", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-ghost n4-btn-sm",
        onClick: handleExplain,
        disabled: loading,
        "aria-busy": loading,
        children: loading ? "⏳ Đang phân tích..." : explanation ? expanded ? "🤖 Ẩn phân tích" : "🧠 Xem phân tích AI" : "🧠 AI phân tích / kiểm chứng"
      }
    ),
    expanded && explanation && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-explain-content", children: [
      explanation,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-explain-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-btn n4-btn-ghost n4-btn-sm n4-ai-report-btn",
          onClick: handleReportError,
          disabled: reportStatus === "loading" || reportStatus === "success",
          children: reportStatus === "loading" ? "⏳ Đang gửi..." : reportStatus === "success" ? "✅ Đã báo cáo" : reportStatus === "error" ? "❌ Lỗi gửi báo cáo. Thử lại?" : "⚠️ Báo cáo AI giải thích sai"
        }
      ) })
    ] })
  ] });
}
function AIHintButton({ question, options, correctAnswer, itemInfo }) {
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [hints, setHints] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const handleHint = reactExports.useCallback(async () => {
    if (!isLoggedIn || !hasKey) {
      alert("Vui lòng đăng nhập để sử dụng tính năng này");
      return;
    }
    setLoading(true);
    try {
      const hintLevel = hints.length + 1;
      const reading = (itemInfo == null ? void 0 : itemInfo.reading) || "";
      const meaning = (itemInfo == null ? void 0 : itemInfo.meaning) || "";
      const msg = `Cho gợi ý cấp ${hintLevel} cho câu hỏi JLPT N4 này (tiếng Việt):
- Câu hỏi: ${question}
- Các đáp án: ${(options || []).join(", ")}
- Đáp án đúng: ${correctAnswer}${reading ? ` (${reading})` : ""}${meaning ? ` — ${meaning}` : ""}

Cấp gợi ý:
- Cấp 1: Gợi ý chung (loại từ, ngữ cảnh, không nói đáp án)
- Cấp 2: Gợi ý cụ thể hơn (loại bỏ 1-2 đáp án sai)
- Cấp 3+: Gợi ý rất rõ (gần như cho đáp án)

CHỈ cho gợi ý cấp ${hintLevel}. Một câu ngắn gọn.`;
      const result = await chatWithAI(msg, apiKey, {
        systemPrompt: "Bạn cho gợi ý cho câu hỏi JLPT N4. Chỉ dùng kiến thức N5/N4, không mở rộng sang N3/N2/N1. Trả lời 1 câu ngắn gọn bằng tiếng Việt. KHÔNG nói thẳng đáp án ở cấp 1-2.",
        maxTokens: 100,
        temperature: 0.7,
        timeout: 1e4
      });
      if (result) {
        setHints((prev) => [...prev, result]);
      }
    } catch (e) {
      setHints((prev) => [...prev, "Không thể kết nối AI."]);
    } finally {
      setLoading(false);
    }
  }, [apiKey, hasKey, isLoggedIn, question, options, correctAnswer, itemInfo, hints.length]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-hint", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-ghost n4-btn-sm",
        onClick: handleHint,
        disabled: loading,
        "aria-busy": loading,
        children: loading ? "⏳ ..." : `💡 AI Hint${hints.length > 0 ? ` (${hints.length})` : ""}`
      }
    ),
    hints.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-hint-content", children: [
      "💡 ",
      h
    ] }, i))
  ] });
}
function AIPostGameButton({ history, getQuestion, getCorrectInfo, score, total }) {
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [analysis, setAnalysis] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [expanded, setExpanded] = reactExports.useState(false);
  const handleAnalyze = reactExports.useCallback(async () => {
    if (analysis) {
      setExpanded((e) => !e);
      return;
    }
    if (!isLoggedIn || !hasKey) {
      alert("Vui lòng đăng nhập để sử dụng tính năng này");
      return;
    }
    setLoading(true);
    try {
      const wrongItems = history.filter((h) => !h.correct);
      const correctItems = history.filter((h) => h.correct);
      const wrongSummary = wrongItems.slice(0, 10).map((h) => {
        const q = (getQuestion == null ? void 0 : getQuestion(h.item)) || "?";
        const info = getCorrectInfo == null ? void 0 : getCorrectInfo(h.item);
        return `❌ ${q}${(info == null ? void 0 : info.meaning) ? ` (${info.meaning})` : ""}`;
      }).join("\n");
      const correctSummary = correctItems.slice(0, 5).map((h) => {
        const q = (getQuestion == null ? void 0 : getQuestion(h.item)) || "?";
        return `✅ ${q}`;
      }).join("\n");
      const pct = total > 0 ? Math.round(score / total * 100) : 0;
      const msg = `Phân tích kết quả luyện tập JLPT N4 của học sinh (tiếng Việt):

📊 Kết quả: ${score}/${total} (${pct}%)

❌ Câu sai:
${wrongSummary || "(Không có)"}

✅ Câu đúng (mẫu):
${correctSummary || "(Không có)"}

Hãy phân tích:
1. Đánh giá tổng quan (1 câu)
2. Điểm yếu cần cải thiện (từ các câu sai)
3. 2-3 lời khuyên cụ thể để cải thiện
4. Từ/mẫu nào nên ôn lại ngay`;
      const result = await chatWithAI(msg, apiKey, {
        systemPrompt: "Bạn là giáo viên tiếng Nhật JLPT N4. Phân tích kết quả luyện tập bằng tiếng Việt, chỉ khuyên ôn kiến thức N5/N4 phục vụ N4, không gợi ý mở sang N3/N2/N1. Tích cực nhưng thực tế. Ngắn gọn, có cấu trúc rõ ràng.",
        maxTokens: 400,
        temperature: 0.5,
        timeout: 2e4
      });
      if (result) {
        setAnalysis(result);
        setExpanded(true);
      }
    } catch (e) {
      setAnalysis("Không thể kết nối AI. Vui lòng thử lại.");
      setExpanded(true);
    } finally {
      setLoading(false);
    }
  }, [analysis, apiKey, hasKey, isLoggedIn, history, getQuestion, getCorrectInfo, score, total]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-postgame", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-ghost n4-ai-postgame__trigger",
        onClick: handleAnalyze,
        disabled: loading,
        "aria-busy": loading,
        children: loading ? "⏳ AI đang phân tích..." : analysis ? expanded ? "🤖 Ẩn phân tích" : "🧠 Xem phân tích AI" : "🧠 Phân tích kết quả"
      }
    ),
    expanded && analysis && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-postgame__content", children: analysis })
  ] });
}
const AI_INTENTS = Object.freeze([
  { id: "explain", icon: "💡", label: "Giải thích", prompt: "Giải thích chi tiết ngữ pháp/từ vựng trong ngữ cảnh này." },
  { id: "check", icon: "📝", label: "Đối chiếu", prompt: "Đối chiếu lựa chọn của người học với đáp án đúng và giải thích điểm cần sửa." },
  { id: "dialogue", icon: "💬", label: "Hội thoại N4", prompt: "Tạo đoạn hội thoại ngắn 2 câu N4 minh họa mẫu này." },
  { id: "exercise", icon: "✏️", label: "Bài tập ngắn", prompt: "Tạo 1 câu hỏi luyện tập N4 tương tự kèm đáp án." },
  { id: "plan", icon: "🎯", label: "Lời khuyên", prompt: "Cho 2 lời khuyên ôn tập ngắn gọn dựa trên lỗi/mục này." }
]);
function getLocalSenseiFallback(intentId, context = {}) {
  const question = compactText(context.question);
  const answer = compactText(context.answer);
  const userAnswer = compactText(context.userAnswer);
  const contextNote = question ? `
Câu hỏi đang học: ${question}${userAnswer ? `
Lựa chọn của bạn: ${userAnswer}` : ""}${answer ? `
Đáp án của bài: ${answer}` : ""}` : "";
  const fallbacks = {
    explain: `Giải thích cục bộ chưa thể phân tích riêng nội dung này. Hãy đối chiếu câu hỏi, đáp án và phần giải thích chính của bài trước khi ghi nhớ.${contextNote}`,
    check: `Mẫu cục bộ không thể tự động kết luận vì sao lựa chọn đúng hoặc sai. Hãy đối chiếu lựa chọn với đáp án của bài, rồi kiểm tra trợ từ, dạng chia và ý nghĩa trong câu hỏi.${contextNote}`,
    dialogue: `Hội thoại mẫu N4 soạn sẵn:
A: 田中さんは来ますか。
B: はい、来ると思います。
Nghĩa: A hỏi anh Tanaka có đến không; B trả lời rằng mình nghĩ anh ấy sẽ đến.`,
    exercise: `Bài tập N4 soạn sẵn: 日本語を___たいです。
a. 勉強し　b. 勉強する　c. 勉強して
Đáp án: a — bỏ ます trong 勉強します rồi thêm たいです。`,
    plan: `Gợi ý ôn tập cục bộ:
1. Xem lại câu và đáp án đúng sau 10 phút.
2. Tự đặt một câu N4 tương tự rồi ôn lại trong 24 giờ.${contextNote}`
  };
  return fallbacks[intentId] || fallbacks.explain;
}
function AISenseiIntents({ question, answer, userAnswer, isCorrect, itemInfo, onSelectIntent }) {
  const { aiKey: apiKey, hasKey, isLoggedIn } = useAIKey();
  const [activeIntent, setActiveIntent] = reactExports.useState(null);
  const [response, setResponse] = reactExports.useState(null);
  const [responseSource, setResponseSource] = reactExports.useState(null);
  const [recoveryNotice, setRecoveryNotice] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const requestRef = reactExports.useRef({ id: 0, controller: null });
  const itemInfoKey = reactExports.useMemo(() => stableStringify(itemInfo), [itemInfo]);
  reactExports.useEffect(() => {
    var _a;
    requestRef.current.id += 1;
    (_a = requestRef.current.controller) == null ? void 0 : _a.abort();
    requestRef.current.controller = null;
    setActiveIntent(null);
    setResponse(null);
    setResponseSource(null);
    setRecoveryNotice("");
    setLoading(false);
    return () => {
      var _a2;
      requestRef.current.id += 1;
      (_a2 = requestRef.current.controller) == null ? void 0 : _a2.abort();
      requestRef.current.controller = null;
    };
  }, [question, answer, userAnswer, isCorrect, itemInfoKey]);
  const handleIntent = async (intent, forceRetry = false) => {
    var _a;
    if (loading) return;
    if (!forceRetry && activeIntent === intent.id) {
      requestRef.current.id += 1;
      (_a = requestRef.current.controller) == null ? void 0 : _a.abort();
      requestRef.current.controller = null;
      setActiveIntent(null);
      setResponse(null);
      setResponseSource(null);
      setRecoveryNotice("");
      return;
    }
    setActiveIntent(intent.id);
    setResponse(null);
    setResponseSource(null);
    setRecoveryNotice("");
    setLoading(true);
    if (onSelectIntent) onSelectIntent(intent);
    const requestId = requestRef.current.id + 1;
    const controller = new AbortController();
    requestRef.current = { id: requestId, controller };
    const fallbackContext = { question, answer, userAnswer };
    if (!isLoggedIn || !hasKey) {
      setLoading(false);
      setResponse(getLocalSenseiFallback(intent.id, fallbackContext));
      setResponseSource("local");
      requestRef.current.controller = null;
      return;
    }
    try {
      const msg = `Mục tiêu JLPT N4. Câu hỏi: ${question || "(không có)"}. Lựa chọn của người học: ${userAnswer || "(không chọn)"}. Đáp án đúng của bài: ${answer || "(không có)"}. Kết quả: ${isCorrect == null ? "(chưa xác định)" : isCorrect ? "đúng" : "sai"}. Thẻ tin: ${JSON.stringify(itemInfo || {})}. ${intent.prompt}`;
      const res = await chatWithAI(msg, apiKey, {
        systemPrompt: "Bạn là AI Sensei dạy JLPT N4. Trả lời bằng tiếng Việt ngắn gọn, dễ hiểu, có ví dụ cụ thể.",
        maxTokens: 300,
        temperature: 0.5,
        signal: controller.signal
      });
      if (requestRef.current.id !== requestId) return;
      if (compactText(res)) {
        setResponse(res);
        setResponseSource("ai");
      } else {
        setResponse(getLocalSenseiFallback(intent.id, fallbackContext));
        setResponseSource("local");
        setRecoveryNotice("AI chưa trả về nội dung. Đã chuyển sang mẫu N4 cục bộ để bạn tiếp tục học.");
      }
    } catch (e) {
      if (controller.signal.aborted || requestRef.current.id !== requestId) return;
      setResponse(getLocalSenseiFallback(intent.id, fallbackContext));
      setResponseSource("local");
      setRecoveryNotice("AI Sensei chưa hoàn tất yêu cầu. Đã chuyển sang mẫu N4 cục bộ; bạn có thể thử lại khi sẵn sàng.");
    } finally {
      if (requestRef.current.id === requestId) {
        requestRef.current.controller = null;
        setLoading(false);
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-intents-panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-kicker", children: "AI Sensei — Lựa chọn trợ giúp" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-intents-buttons", children: AI_INTENTS.map((intent) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: `n4-btn n4-btn-sm ${activeIntent === intent.id ? "n4-btn-primary" : "n4-btn-ghost"}`,
        onClick: () => handleIntent(intent),
        disabled: loading,
        "aria-pressed": activeIntent === intent.id,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: intent.icon }),
          " ",
          intent.label
        ]
      },
      intent.id
    )) }),
    activeIntent && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "n4-ai-intent-response",
        "data-source": loading ? "loading" : responseSource || "local",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        "aria-busy": loading,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-intent-response__meta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: loading ? "Đang chuẩn bị" : responseSource === "ai" ? "AI tạo" : "Mẫu N4 cục bộ" }),
            !loading && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: responseSource === "ai" ? "Nội dung sinh tự động · nên đối chiếu bài học" : "Dùng được khi ngoại tuyến" })
          ] }),
          recoveryNotice && !loading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-ai-intent-response__recovery", children: recoveryNotice }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-intent-response__body", children: loading ? "AI Sensei đang suy nghĩ…" : response }),
          recoveryNotice && !loading && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "n4-btn n4-btn-ghost n4-btn-sm n4-ai-intent-response__retry",
              onClick: () => handleIntent(AI_INTENTS.find((intent) => intent.id === activeIntent), true),
              children: "Thử lại với AI"
            }
          )
        ]
      }
    )
  ] });
}
export {
  AIExplainButton as A,
  AIHintButton as a,
  AIPostGameButton as b,
  AISenseiIntents as c
};
