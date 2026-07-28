import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-9qsLJC8Z.js";
import { u as useScoreEngine, T as TrainerContext } from "./useScoreEngine-Cjc3MMN3.js";
import { a as QuestionDisplay, A as AnswerOptionRow, Q as QuizMode, g as grammarAccessors } from "./QuizMode-CK8dFQ5n.js";
import { F as FlashcardMode } from "./FlashcardMode-DUBILJcl.js";
import { T as TrueFalseMode } from "./TrueFalseMode-HWeFGFrP.js";
import { F as FillBlankMode } from "./FillBlankMode-CyYX0lSy.js";
import { cf as shuffleArray$1, aT as equalsAnswerText, ce as playSFX, as as speakJP, cg as AIHintButton, R as content, u as useAppStore } from "./feature-3d-ClP3ARU5.js";
import { S as ScaffoldingLayer } from "./ScaffoldingLayer-Dgchp7gt.js";
import { Q as QuizFeedback } from "./QuizFeedback-BMOgeHCF.js";
import { M as ModeResultsScreen, s as safeTtsText } from "./useQuestionMeta-D-yYGU7U.js";
import { u as useGameRestart, a as useStudySession } from "./useStudySession-cPqeZXg_.js";
import { b as useGrammarItems, c as useSectionList } from "./useDataHelper-BnDD_cSP.js";
import { u as useGrammarGameItems } from "./useGrammarQuiz-CDFNBuyo.js";
import "./index-ZUSnnghe.js";
import "./vendor-router-BTJacUKt.js";
import "./vendor-icons-DHCyxOF-.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./empty-Bvm-mx50.js";
import "./quest-chains-CiwzmCpJ.js";
import "./PhaseRibbon-VgLgSQxn.js";
function blanksForDifficulty(difficulty) {
  if (difficulty === "hard") return 3;
  if (difficulty === "normal") return 2;
  return 1;
}
function buildMultiBlankQuestion(sourceItems, allItems, blankCount) {
  const picked = sourceItems.slice(0, blankCount);
  if (picked.length < blankCount) return null;
  const segments = picked.map((it, i) => {
    const blankedSentence = it.sentenceBlank || "";
    return blankedSentence.replace("＿＿", `｛${i}｝`);
  });
  const composedSentence = segments.join("　");
  const blanks = picked.map((it) => {
    const others = shuffleArray$1(
      allItems.filter((x) => x.blankAnswer && !equalsAnswerText(x.blankAnswer, it.blankAnswer))
    ).slice(0, 3).map((x) => x.blankAnswer);
    return {
      answer: it.blankAnswer,
      options: shuffleArray$1([it.blankAnswer, ...others]),
      vi: it.vi || "",
      title: it.title || "",
      fullSentence: it.sentence || ""
    };
  });
  return { composedSentence, blanks };
}
function buildQuestions$1(items, maxQ, difficulty = "easy") {
  const withBlank = shuffleArray$1(items.filter((it) => it.sentenceBlank && it.blankAnswer && it.sentence));
  if (withBlank.length < 4) return null;
  const blankCount = blanksForDifficulty(difficulty);
  const questions = [];
  if (blankCount === 1) {
    const pool = withBlank.slice(0, maxQ);
    for (const item of pool) {
      const others = shuffleArray$1(items.filter((it) => it.blankAnswer && !equalsAnswerText(it.blankAnswer, item.blankAnswer))).slice(0, 3).map((it) => it.blankAnswer);
      const opts = shuffleArray$1([item.blankAnswer, ...others]);
      questions.push({
        type: "single",
        sentence: item.sentenceBlank,
        answer: item.blankAnswer,
        options: opts,
        fullSentence: item.sentence,
        vi: item.vi || "",
        title: item.title || ""
      });
    }
  } else {
    const usedCount = Math.min(maxQ * blankCount, withBlank.length);
    const pool = withBlank.slice(0, usedCount);
    for (let i = 0; i < pool.length - blankCount + 1 && questions.length < maxQ; i += blankCount) {
      const chunk = pool.slice(i, i + blankCount);
      const q = buildMultiBlankQuestion(chunk, items, blankCount);
      if (q) questions.push({ type: "multi", blankCount, ...q });
    }
  }
  return questions.length >= 2 ? questions : null;
}
function SingleBlankQuestion({ q, onNext, onGrade, scoring, qIdx, total }) {
  const [chosen, setChosen] = reactExports.useState(null);
  const lockRef = reactExports.useRef(false);
  const handlePick = reactExports.useCallback((opt) => {
    if (chosen || lockRef.current) return;
    lockRef.current = true;
    setChosen(opt);
    const correct = equalsAnswerText(opt, q.answer);
    if (correct) {
      onGrade(q, true);
      playSFX("correct");
    } else {
      onGrade(q, false);
      playSFX("wrong");
    }
  }, [chosen, q, onGrade]);
  const isCorrect = chosen && equalsAnswerText(chosen, q.answer);
  const ttsSentence = safeTtsText(q.sentence);
  q.fullSentence || ttsSentence;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cloze", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini-fill", style: { width: `${(qIdx + 1) / total * 100}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cloze-progress", children: [
      "Câu ",
      qIdx + 1,
      " / ",
      total,
      " · ✅",
      scoring.score,
      " ❌",
      scoring.total - scoring.score
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cloze-sentence-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cloze-instruction", children: "Chọn mẫu ngữ pháp đúng để điền vào ＿＿:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        QuestionDisplay,
        {
          text: q.sentence,
          ttsText: ttsSentence,
          viMeaning: q.vi || null,
          viIsAnswer: false,
          answered: !!chosen
        }
      ),
      chosen && !isCorrect && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cloze-correction", children: [
        "✅ Đúng: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: q.answer }),
        q.fullSentence && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(q.fullSentence), children: "🔊 Nghe câu đầy đủ" })
        ] })
      ] }),
      chosen && isCorrect && q.fullSentence && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm n4-cloze-speak", onClick: () => speakJP(q.fullSentence), children: "🔊 Nghe câu đầy đủ" })
    ] }),
    !chosen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cloze-options", children: q.options.map((opt, oi) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      AnswerOptionRow,
      {
        opt,
        idx: oi,
        stateClass: "",
        onClick: () => handlePick(opt)
      },
      opt
    )) }),
    chosen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuizFeedback,
      {
        isCorrect,
        correctAnswer: q.answer,
        userAnswer: chosen,
        questionDisplay: q.sentence,
        correctInfo: { meaning: q.vi, reading: q.title },
        showQualityPicker: isCorrect,
        onQualityPick: onNext,
        onNext: () => onNext(),
        isLastQuestion: qIdx + 1 >= total
      }
    )
  ] });
}
function MultiBlankQuestion({ q, onNext, onGrade, scoring, qIdx, total }) {
  var _a, _b;
  const [blankIdx, setBlankIdx] = reactExports.useState(0);
  const [blankAnswers, setBlankAnswers] = reactExports.useState([]);
  const [chosen, setChosen] = reactExports.useState(null);
  const lockRef = reactExports.useRef(false);
  const blank = q.blanks[blankIdx];
  const allDone = blankAnswers.length === q.blankCount;
  const handlePick = reactExports.useCallback((opt) => {
    if (chosen || lockRef.current || allDone) return;
    lockRef.current = true;
    setChosen(opt);
    const correct = equalsAnswerText(opt, blank.answer);
    if (correct) {
      onGrade({ ...blank, sentence: q.composedSentence }, true);
      playSFX("correct");
    } else {
      onGrade({ ...blank, sentence: q.composedSentence }, false);
      playSFX("wrong");
    }
    const updated = [...blankAnswers, { opt, correct }];
    setBlankAnswers(updated);
  }, [chosen, lockRef, allDone, blank, q, onGrade, blankAnswers]);
  const handleNextBlank = reactExports.useCallback((quality) => {
    if (quality !== void 0) onNext(quality, true);
    else onNext(void 0, true);
    lockRef.current = false;
    setChosen(null);
    if (blankIdx + 1 < q.blankCount) {
      setBlankIdx((b) => b + 1);
    }
  }, [blankIdx, q.blankCount]);
  const renderSentence = () => {
    let parts = q.composedSentence;
    const filled = [];
    for (let i = 0; i < q.blankCount; i++) {
      const ans = blankAnswers[i];
      const isActive = i === blankIdx && !allDone;
      filled.push({ placeholder: `｛${i}｝`, label: ans ? ans.opt : isActive ? "　＿＿　" : `[${i + 1}]`, correct: ans == null ? void 0 : ans.correct, active: isActive });
    }
    return parts.split(/(｛\d+｝)/).map((seg, idx) => {
      const match = seg.match(/｛(\d+)｝/);
      if (match) {
        const i = parseInt(match[1]);
        const info = filled[i];
        let cls = "n4-cloze-blank";
        if (blankAnswers[i]) cls += blankAnswers[i].correct ? " correct" : " wrong";
        else if (info.active) cls += " active";
        return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cls, children: info.label }, idx);
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: seg }, idx);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cloze", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini-fill", style: { width: `${(qIdx + 1) / total * 100}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cloze-progress", children: [
      "Câu ",
      qIdx + 1,
      " / ",
      total,
      " · Chỗ trống ",
      blankIdx + 1,
      "/",
      q.blankCount,
      " · ✅",
      scoring.score,
      " ❌",
      scoring.total - scoring.score
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cloze-sentence-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cloze-instruction", style: { marginBottom: 4 }, children: [
        "Điền lần lượt từng chỗ trống (",
        q.blankCount,
        " chỗ):"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cloze-sentence", children: renderSentence() }),
      (blank == null ? void 0 : blank.vi) && !allDone && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cloze-vi", children: [
        "💡 Gợi ý: ",
        blank.vi
      ] }),
      allDone && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 8, fontSize: "0.9em", opacity: 0.8 }, children: q.blanks.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "✅ Chỗ ",
        i + 1,
        ": ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: b.answer }),
        " — ",
        b.title,
        b.fullSentence && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { marginLeft: 6 }, onClick: () => speakJP(b.fullSentence), children: "🔊" })
      ] }, i)) })
    ] }),
    !allDone && !chosen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScaffoldingLayer,
        {
          currentItem: (blank == null ? void 0 : blank.grammarKey) ? { key: blank.grammarKey, kind: "grammar" } : null,
          text: (blank == null ? void 0 : blank.fullSentence) || "",
          toolbarConfig: { hint: true, reveal: false, speak: true, bookmark: true, lookup: true, drawer: true }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AIHintButton,
        {
          question: `Câu ${blankIdx + 1}: ${(blank == null ? void 0 : blank.vi) || ""}`,
          options: (blank == null ? void 0 : blank.options) || [],
          correctAnswer: (blank == null ? void 0 : blank.answer) || "",
          itemInfo: { meaning: blank == null ? void 0 : blank.vi, reading: blank == null ? void 0 : blank.title }
        }
      )
    ] }),
    !allDone && !chosen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cloze-options", children: ((blank == null ? void 0 : blank.options) || []).map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-cloze-option", onClick: () => handlePick(opt), children: opt }, opt)) }),
    chosen && !allDone && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuizFeedback,
      {
        isCorrect: (_a = blankAnswers[blankAnswers.length - 1]) == null ? void 0 : _a.correct,
        correctAnswer: blank.answer,
        userAnswer: chosen,
        questionDisplay: `Chỗ trống ${blankIdx + 1}: ${(blank == null ? void 0 : blank.vi) || ""}`,
        correctInfo: { meaning: blank == null ? void 0 : blank.vi, reading: blank == null ? void 0 : blank.title },
        showQualityPicker: (_b = blankAnswers[blankAnswers.length - 1]) == null ? void 0 : _b.correct,
        onQualityPick: handleNextBlank,
        onNext: () => handleNextBlank(),
        isLastQuestion: false,
        nextLabel: `Chỗ trống tiếp theo (${blankIdx + 2}/${q.blankCount}) ▶`
      }
    ),
    allDone && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-cloze-next-btn", onClick: () => onNext(), children: qIdx + 1 < total ? "Câu tiếp ▶" : "Xem kết quả" })
  ] });
}
function GrammarClozeMode({ items, maxQuestions = 10, difficulty = "easy", trainerId }) {
  const scoring = useScoreEngine(trainerId);
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  const pendingCorrectRef = reactExports.useRef(null);
  const questions = reactExports.useMemo(() => buildQuestions$1(items || [], maxQuestions, difficulty), [items, maxQuestions, difficulty]);
  const commitPending = reactExports.useCallback((quality) => {
    if (pendingCorrectRef.current) {
      scoring.recordCorrect(pendingCorrectRef.current, quality);
      pendingCorrectRef.current = null;
    }
  }, [scoring]);
  const handleGrade = reactExports.useCallback((item, isCorrect) => {
    if (isCorrect) {
      pendingCorrectRef.current = item;
    } else {
      scoring.recordWrong(item);
    }
  }, [scoring]);
  const handleNext = reactExports.useCallback((quality, isMultiStep) => {
    commitPending(quality);
    if (isMultiStep) return;
    if (qIdx + 1 >= ((questions == null ? void 0 : questions.length) || 0)) {
      setDone(true);
    } else {
      setQIdx((i) => i + 1);
    }
  }, [commitPending, qIdx, questions]);
  const handleReset = reactExports.useCallback(() => {
    commitPending(void 0);
    setQIdx(0);
    scoring.reset();
    setDone(false);
  }, [commitPending, scoring]);
  if (!questions || questions.length < 2) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mode-empty-icon", children: "📝" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: 'Không đủ dữ liệu văn phạm điền vào chỗ trống. Hãy thử phần "Tất cả".' })
    ] });
  }
  if (done) {
    commitPending(void 0);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModeResultsScreen,
      {
        scoring,
        getQuestion: (q2) => q2.sentence || q2.composedSentence || "",
        getCorrectInfo: (q2) => ({ reading: "", meaning: q2.vi || "", extra: q2.answer || "" }),
        onRestart: handleReset
      }
    );
  }
  const q = questions[qIdx];
  const commonProps = {
    qIdx,
    total: questions.length,
    scoring,
    onNext: handleNext,
    onGrade: handleGrade
  };
  if (q.type === "multi") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MultiBlankQuestion, { q, ...commonProps }, qIdx);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SingleBlankQuestion, { q, ...commonProps }, qIdx);
}
const CATEGORIES = [
  { id: "time", label: "🕐 Thời gian", desc: "Chỉ thời điểm, trình tự, khoảng thời gian" },
  { id: "reason", label: "🔍 Lý do", desc: "Chỉ nguyên nhân, lý do" },
  { id: "condition", label: "🔀 Điều kiện", desc: "Chỉ điều kiện, giả định" },
  { id: "purpose", label: "🎯 Mục đích", desc: "Chỉ mục đích, ý định" },
  { id: "contrast", label: "↩️ Đối lập", desc: "Chỉ sự đối lập, tương phản" },
  { id: "compare", label: "📊 So sánh", desc: "Chỉ so sánh mức độ" },
  { id: "ability", label: "💪 Khả năng", desc: "Chỉ khả năng, cho phép" },
  { id: "request", label: "🙏 Nhờ vả / Cho phép", desc: "Chỉ lời nhờ, xin phép, ra lệnh" },
  { id: "change", label: "🔄 Thay đổi", desc: "Chỉ sự thay đổi, trở thành" },
  { id: "experience", label: "⭐ Kinh nghiệm", desc: "Chỉ trải nghiệm, đã từng" },
  { id: "obligation", label: "⚠️ Bắt buộc", desc: "Chỉ nghĩa vụ, phải làm" },
  { id: "other", label: "📌 Khác", desc: "Các mẫu khác" }
];
const CAT_KEYWORDS = [
  { id: "time", kws: ["thời gian", "thời điểm", "trước khi", "sau khi", "trong khi", "từ khi", "khi", "lúc", "trình tự", "khoảng thời", "đồng thời", "suốt"] },
  { id: "reason", kws: ["lý do", "nguyên nhân", "bởi vì", "vì", "do", "vì vậy", "nên"] },
  { id: "condition", kws: ["điều kiện", "giả định", "nếu", "nếu như", "khi nào", "giả sử", "hễ"] },
  { id: "purpose", kws: ["mục đích", "ý định", "để", "nhằm", "để mà", "cố gắng"] },
  { id: "contrast", kws: ["đối lập", "tương phản", "mặc dù", "dù", "nhưng", "tuy nhiên", "trái lại", "ngược lại", "dù vậy", "thế mà", "dẫu"] },
  { id: "compare", kws: ["so sánh", "hơn", "kém hơn", "bằng", "mức độ", "càng", "không bằng"] },
  { id: "ability", kws: ["khả năng", "có thể", "được", "không thể", "có khả năng"] },
  { id: "request", kws: ["nhờ", "xin phép", "ra lệnh", "yêu cầu", "cho phép", "cấm", "mệnh lệnh", "đề nghị", "căn dặn"] },
  { id: "change", kws: ["thay đổi", "trở thành", "trở nên", "biến thành", "trở"] },
  { id: "experience", kws: ["kinh nghiệm", "đã từng", "từng", "đã làm", "trải nghiệm"] },
  { id: "obligation", kws: ["bắt buộc", "nghĩa vụ", "phải", "cần phải", "bắt buộc phải", "không được"] }
];
function detectCategory(item) {
  const text = [item._purpose, item.meaning, item.explanation, item.purpose, (item.content || "").slice(0, 300)].filter(Boolean).join(" ").toLowerCase();
  for (const { id, kws } of CAT_KEYWORDS) {
    if (kws.some((kw) => text.includes(kw))) return id;
  }
  return "other";
}
function buildQuestions(items, maxQ) {
  const tagged = items.filter((it) => it.title).map((it) => ({ ...it, _catId: detectCategory(it) }));
  if (tagged.length < 4) return [];
  const pool = shuffleArray$1(tagged).slice(0, Math.min(maxQ, tagged.length));
  return pool.map((item) => {
    const correctCat = CATEGORIES.find((c) => c.id === item._catId) || CATEGORIES[CATEGORIES.length - 1];
    const otherCats = shuffleArray$1(CATEGORIES.filter((c) => c.id !== correctCat.id)).slice(0, 3);
    const opts = shuffleArray$1([correctCat, ...otherCats]);
    return { item, correctCat, opts };
  });
}
const TIMELINE_PUZZLES = [
  {
    id: "tl-1",
    desc: "Sắp xếp các mẫu theo thứ tự thời gian (sớm → muộn):",
    patterns: [
      { label: "〜る前に", meaning: "Trước khi ~ (sự kiện chưa xảy ra)", order: 1 },
      { label: "〜ながら", meaning: "Vừa ~ vừa ~ (đồng thời)", order: 2 },
      { label: "〜てから", meaning: "Sau khi ~ xong thì ~", order: 3 },
      { label: "〜た後で", meaning: "Sau khi ~ (nhìn lại quá khứ)", order: 4 }
    ]
  },
  {
    id: "tl-2",
    desc: "Sắp xếp các giai đoạn học tiếng Nhật:",
    patterns: [
      { label: "〜始める", meaning: "Bắt đầu làm ~", order: 1 },
      { label: "〜ている", meaning: "Đang trong quá trình ~", order: 2 },
      { label: "〜続ける", meaning: "Tiếp tục làm ~", order: 3 },
      { label: "〜終わる", meaning: "Làm ~ xong", order: 4 }
    ]
  },
  {
    id: "tl-3",
    desc: "Sắp xếp theo quan hệ nhân-quả (nguyên nhân → kết quả):",
    patterns: [
      { label: "〜ので", meaning: "Vì ~ (nguyên nhân lịch sự)", order: 1 },
      { label: "〜から", meaning: "Vì ~ (nguyên nhân thẳng thắn)", order: 2 },
      { label: "〜て", meaning: "Và rồi ~ (kết nối nguyên nhân nhẹ)", order: 3 },
      { label: "〜そうだ", meaning: "Có vẻ ~ (kết quả quan sát)", order: 4 }
    ]
  },
  {
    id: "tl-4",
    desc: "Sắp xếp quy trình xin phép:",
    patterns: [
      { label: "〜てもいいですか", meaning: "Cho tôi làm ~ được không?", order: 1 },
      { label: "〜てください", meaning: "Xin hãy làm ~", order: 2 },
      { label: "〜なければなりません", meaning: "Phải làm ~", order: 3 },
      { label: "〜てしまった", meaning: "Đã lỡ làm ~ rồi", order: 4 }
    ]
  },
  {
    id: "tl-5",
    desc: "Sắp xếp các mẫu điều kiện (nhẹ → chắc chắn):",
    patterns: [
      { label: "〜ば", meaning: "Nếu (giả định chung)", order: 1 },
      { label: "〜たら", meaning: "Khi/Nếu (hoàn thành điều kiện)", order: 2 },
      { label: "〜と", meaning: "Hễ…thì (tất yếu, tự nhiên)", order: 3 },
      { label: "〜なら", meaning: "Nếu đúng là ~ (xác nhận giả thiết)", order: 4 }
    ]
  }
];
function buildTimelineRound(puzzles) {
  const puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
  const shuffled = shuffleArray$1([...puzzle.patterns]);
  return { puzzle, shuffled, order: puzzle.patterns.map((p) => p.label) };
}
function TimelineSubMode({ items, maxQuestions, trainerId }) {
  const scoring = useScoreEngine(trainerId);
  const [roundIdx, setRoundIdx] = reactExports.useState(0);
  const [phase, setPhase] = reactExports.useState("playing");
  const [placed, setPlaced] = reactExports.useState([]);
  const [remaining, setRemaining] = reactExports.useState(() => {
    const { shuffled } = buildTimelineRound(TIMELINE_PUZZLES);
    return shuffled;
  });
  const [currentPuzzle, setCurrentPuzzle] = reactExports.useState(() => buildTimelineRound(TIMELINE_PUZZLES));
  const [checked, setChecked] = reactExports.useState(false);
  const [isCorrectOrder, setIsCorrectOrder] = reactExports.useState(null);
  const maxRounds = Math.min(maxQuestions, TIMELINE_PUZZLES.length);
  const handleTap = reactExports.useCallback((pattern) => {
    if (checked) return;
    setPlaced((prev) => [...prev, pattern]);
    setRemaining((prev) => prev.filter((p) => p.label !== pattern.label));
  }, [checked]);
  const handleRemove = reactExports.useCallback((idx) => {
    if (checked) return;
    const removed = placed[idx];
    setPlaced((prev) => prev.filter((_, i) => i !== idx));
    setRemaining((prev) => [...prev, removed]);
  }, [placed, checked]);
  const handleCheck = reactExports.useCallback(() => {
    if (placed.length !== currentPuzzle.puzzle.patterns.length) return;
    const correct = placed.every((p, i) => p.order === i + 1);
    setIsCorrectOrder(correct);
    setChecked(true);
    if (correct) {
      scoring.recordCorrect({ title: currentPuzzle.puzzle.desc });
    } else {
      scoring.recordWrong({ title: currentPuzzle.puzzle.desc });
    }
  }, [placed, currentPuzzle, scoring]);
  const handleNext = reactExports.useCallback(() => {
    if (roundIdx + 1 >= maxRounds) {
      setPhase("done");
      return;
    }
    const next = buildTimelineRound(TIMELINE_PUZZLES);
    setCurrentPuzzle(next);
    setPlaced([]);
    setRemaining(next.shuffled);
    setChecked(false);
    setIsCorrectOrder(null);
    setRoundIdx((r) => r + 1);
  }, [roundIdx, maxRounds]);
  if (phase === "done") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModeResultsScreen,
      {
        scoring,
        showReview: false,
        showAIAnalysis: false,
        onRestart: () => {
          setRoundIdx(0);
          setPhase("playing");
          const next = buildTimelineRound(TIMELINE_PUZZLES);
          setCurrentPuzzle(next);
          setPlaced([]);
          setRemaining(next.shuffled);
          setChecked(false);
          setIsCorrectOrder(null);
          scoring.reset();
        }
      }
    );
  }
  const allPlaced = placed.length === currentPuzzle.puzzle.patterns.length;
  const correctOrder = currentPuzzle.puzzle.patterns.slice().sort((a, b) => a.order - b.order);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gsort n4-gsort-playing", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gsort-progress", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gsort-progress-fill", style: { width: `${(roundIdx + 1) / maxRounds * 100}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gsort-counter", children: [
      "Câu ",
      roundIdx + 1,
      " / ",
      maxRounds,
      " · ✅",
      scoring.score,
      " ❌",
      scoring.total - scoring.score
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gsort-card", style: { marginBottom: 10 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600, marginBottom: 4 }, children: "⏱️ Thứ tự thời gian" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gsort-meaning", children: currentPuzzle.puzzle.desc })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 10 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.82em", opacity: 0.7, marginBottom: 4 }, children: "Thứ tự bạn chọn:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 4, minHeight: 36 }, children: [
        placed.map((p, i) => {
          let bg = "var(--n4-surface-2, rgba(255,255,255,0.08))";
          if (checked) bg = p.order === i + 1 ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleRemove(i),
              disabled: checked,
              style: { display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 8, border: "1.5px solid var(--n4-border, rgba(255,255,255,0.1))", background: bg, textAlign: "left", cursor: checked ? "default" : "pointer" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 700, opacity: 0.5 }, children: [
                  i + 1,
                  "."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600 }, children: p.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.85em", opacity: 0.75, marginLeft: 4 }, children: [
                  "— ",
                  p.meaning
                ] }),
                checked && p.order === i + 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginLeft: "auto" }, children: "✅" }),
                checked && p.order !== i + 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginLeft: "auto" }, children: "❌" })
              ]
            },
            `placed-${i}`
          );
        }),
        placed.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { opacity: 0.4, fontSize: "0.85em", padding: "4px 8px" }, children: "Nhấn vào mẫu bên dưới để sắp xếp..." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 10 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.82em", opacity: 0.7, marginBottom: 4 }, children: "Chưa sắp xếp:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 }, children: remaining.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => handleTap(p),
          className: "n4-btn n4-btn-ghost",
          style: { fontSize: "0.9em", padding: "5px 10px" },
          children: p.label
        },
        p.label
      )) })
    ] }),
    !checked && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-primary",
        onClick: handleCheck,
        disabled: !allPlaced,
        style: { width: "100%", marginTop: 4 },
        children: "✔ Kiểm tra thứ tự"
      }
    ),
    checked && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-gsort-feedback${isCorrectOrder ? " correct" : " wrong"}`, style: { marginTop: 8 }, children: isCorrectOrder ? "✅ Hoàn toàn đúng! Thứ tự thời gian chính xác." : `❌ Chưa đúng. Thứ tự đúng: ${correctOrder.map((p) => p.label).join(" → ")}` }),
    checked && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      !isCorrectOrder && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 8, fontSize: "0.85em", opacity: 0.8 }, children: correctOrder.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          i + 1,
          ". ",
          p.label
        ] }),
        " — ",
        p.meaning
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-secondary", style: { marginTop: 10, width: "100%" }, onClick: handleNext, children: roundIdx + 1 < maxRounds ? "Câu tiếp ▶" : "Xem kết quả" })
    ] })
  ] });
}
function GrammarSortMode({ items, maxQuestions = 12, subMode = "classify", trainerId }) {
  if (subMode === "timeline") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineSubMode, { items, maxQuestions, trainerId });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GrammarClassifyMode, { items, maxQuestions, trainerId });
}
function GrammarClassifyMode({ items, maxQuestions = 12, trainerId }) {
  const scoring = useScoreEngine(trainerId);
  const [phase, setPhase] = reactExports.useState("ready");
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [questions, setQuestions] = reactExports.useState([]);
  const [selected, setSelected] = reactExports.useState(null);
  const answerLockRef = reactExports.useRef(false);
  const pendingCorrectRef = reactExports.useRef(null);
  const commitPending = reactExports.useCallback((quality) => {
    if (pendingCorrectRef.current) {
      scoring.recordCorrect(pendingCorrectRef.current, quality);
      pendingCorrectRef.current = null;
    }
  }, [scoring]);
  const start = reactExports.useCallback(() => {
    const qs = buildQuestions(items || [], maxQuestions);
    setQuestions(qs);
    setQIdx(0);
    setSelected(null);
    scoring.reset();
    answerLockRef.current = false;
    setPhase(qs.length >= 4 ? "playing" : "empty");
  }, [items, maxQuestions, scoring]);
  const current = phase === "playing" ? questions[qIdx] : null;
  const isLast = qIdx >= questions.length - 1;
  const handleAnswer = reactExports.useCallback(
    (cat) => {
      if (selected !== null || !current || answerLockRef.current) return;
      answerLockRef.current = true;
      setSelected(cat);
      if (cat.id === current.correctCat.id) {
        pendingCorrectRef.current = current.item;
      } else {
        scoring.recordWrong(current.item);
      }
    },
    [selected, current, scoring]
  );
  const handleNext = reactExports.useCallback(() => {
    commitPending(void 0);
    answerLockRef.current = false;
    if (isLast) setPhase("done");
    else {
      setQIdx((i) => i + 1);
      setSelected(null);
    }
  }, [commitPending, isLast]);
  const handleGrade = reactExports.useCallback((quality) => {
    commitPending(quality);
    answerLockRef.current = false;
    if (isLast) setPhase("done");
    else {
      setQIdx((i) => i + 1);
      setSelected(null);
    }
  }, [commitPending, isLast]);
  if (!items || items.length < 4) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mode-empty-icon", children: "🗂️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: 'Không đủ mẫu ngữ pháp. Hãy chọn "Tất cả" hoặc chương có nhiều mẫu hơn.' })
    ] });
  }
  if (phase === "empty") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mode-empty-icon", children: "🗂️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: 'Không đủ dữ liệu phân loại. Hãy chọn "Tất cả".' })
    ] });
  }
  if (phase === "ready") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gsort n4-gsort-ready", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gsort-icon", children: "🗂️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-gsort-title", children: "Phân loại Ngữ pháp" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-gsort-desc", children: "Xem mẫu ngữ pháp → chọn chức năng đúng của mẫu đó!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gsort-cats", children: CATEGORIES.slice(0, 8).map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-gsort-cat-chip", children: cat.label }, cat.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-gsort-start-btn", onClick: start, children: "▶ Bắt đầu" })
    ] });
  }
  if (phase === "done") {
    commitPending(void 0);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModeResultsScreen,
      {
        scoring,
        getQuestion: (q) => q.title || "",
        getCorrectInfo: (q) => ({ reading: "", meaning: q._purpose || q.meaning || "" }),
        onRestart: start
      }
    );
  }
  if (!current) return null;
  const { item, correctCat, opts } = current;
  const answered = selected !== null;
  const isCorrect = answered && selected.id === correctCat.id;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gsort n4-gsort-playing", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gsort-progress", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "n4-gsort-progress-fill",
        style: { width: `${(qIdx + 1) / questions.length * 100}%` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gsort-counter", children: [
      qIdx + 1,
      " / ",
      questions.length
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gsort-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gsort-pattern", children: item.title || "" }),
      (item._purpose || item.meaning) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gsort-meaning", children: item._purpose || item.meaning }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gsort-question-label", children: "Mẫu này thuộc chức năng nào?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScaffoldingLayer, { currentItem: item, text: item.title || "", toolbarConfig: { hint: true, reveal: false, speak: true, bookmark: true, lookup: true, drawer: true } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gsort-opts", children: opts.map((cat, i) => {
      let cls = "n4-gsort-opt";
      if (answered) {
        if (cat.id === correctCat.id) cls += " correct";
        else if (cat.id === selected.id) cls += " wrong";
        else cls += " dimmed";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: cls,
          onClick: () => handleAnswer(cat),
          disabled: answered,
          children: cat.label
        },
        i
      );
    }) }),
    answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuizFeedback,
      {
        isCorrect,
        correctAnswer: correctCat.label,
        userAnswer: selected.label,
        questionDisplay: item.title || "",
        correctInfo: { meaning: correctCat.desc },
        showQualityPicker: isCorrect,
        onQualityPick: handleGrade,
        onNext: handleNext,
        isLastQuestion: isLast
      }
    )
  ] });
}
const VS_QUESTIONS = [
  {
    id: "vs-1",
    context: "昨日、バスが__の電車で来ました。",
    options: ["来なかった", "来ないから"],
    correct: 0,
    vi: "Hôm qua xe buýt không đến, nên tôi đi tàu điện.",
    explain: "〜なかった là quá khứ phủ định (thực tế đã xảy ra). 〜ないから dùng khi giải thích lý do ở hiện tại/tương lai."
  },
  {
    id: "vs-2",
    context: "部屋が静か__、よく勉強できます。",
    options: ["なら", "だったら"],
    correct: 0,
    vi: "Nếu phòng yên tĩnh thì có thể học tốt.",
    explain: "〜なら dùng khi giả định dựa trên thông tin vừa biết. 〜だったら giả định về một tình huống đã hoàn thành."
  },
  {
    id: "vs-3",
    context: "宿題を__から、遊びに行ってもいいですよ。",
    options: ["した", "して"],
    correct: 0,
    vi: "Vì đã làm xong bài tập, nên có thể đi chơi.",
    explain: '〜てから = sau khi làm ~ xong. ~した+から = vì đã làm ~ (lý do). Ở đây "宿題をしてから" (sau khi làm bài xong) đúng hơn, nhưng câu hỏi contrasts した+から.'
  },
  {
    id: "vs-4",
    context: "熱があります__、学校を休みます。",
    options: ["ので", "のに"],
    correct: 0,
    vi: "Vì bị sốt, tôi nghỉ học.",
    explain: "〜ので = lý do lịch sự (nguyên nhân→kết quả tự nhiên). 〜のに = mặc dù (kỳ vọng bị phá vỡ). Sốt→nghỉ học là kết quả tự nhiên, nên dùng ので."
  },
  {
    id: "vs-5",
    context: "毎日練習している__、なかなか上手くならない。",
    options: ["のに", "ので"],
    correct: 0,
    vi: "Mặc dù luyện tập mỗi ngày nhưng vẫn không giỏi lên.",
    explain: "〜のに = mặc dù ~ (kết quả trái kỳ vọng). Luyện tập mà không tiến bộ là kết quả bất ngờ → dùng のに."
  },
  {
    id: "vs-6",
    context: "友達が来る__、部屋を掃除した。",
    options: ["前に", "ために"],
    correct: 0,
    vi: "Trước khi bạn bè đến, tôi đã dọn phòng.",
    explain: "〜前に = trước khi ~ (thứ tự thời gian). 〜ために = để (mục đích). Dọn phòng xảy ra trước khi bạn bè đến → 前に."
  },
  {
    id: "vs-7",
    context: "N4試験に合格する__、毎日勉強しています。",
    options: ["ために", "前に"],
    correct: 0,
    vi: "Để đỗ kỳ thi N4, tôi học mỗi ngày.",
    explain: "〜ために = để đạt mục đích ~. 〜前に = trước khi ~. Học nhằm mục đích đỗ thi → ために."
  },
  {
    id: "vs-8",
    context: "彼女は歌__踊りも上手です。",
    options: ["だけでなく", "だけ"],
    correct: 0,
    vi: "Cô ấy không chỉ hát hay mà còn múa giỏi.",
    explain: '〜だけでなく = không chỉ ~ mà còn. 〜だけ = chỉ ~. Cấu trúc "không chỉ A mà còn B" → だけでなく.'
  },
  {
    id: "vs-9",
    context: "電気を消す__、寝てください。",
    options: ["てから", "て"],
    correct: 0,
    vi: "Sau khi tắt đèn rồi hãy ngủ.",
    explain: "〜てから = sau khi hoàn thành A rồi mới B. 〜て = nối tiếp thông thường. Ở đây nhấn mạnh thứ tự: tắt đèn XONG rồi mới ngủ → てから."
  },
  {
    id: "vs-10",
    context: "日本語を話す__なってきました。",
    options: ["ようになりました", "ようにしています"],
    correct: 0,
    vi: "Tôi đã bắt đầu có thể nói tiếng Nhật (tự nhiên thay đổi).",
    explain: "〜ようになる = trở nên có thể ~ (thay đổi tự nhiên theo thời gian). 〜ようにする = cố gắng để ~ (ý chí cá nhân)."
  },
  {
    id: "vs-11",
    context: "毎朝6時に起きる__にしています。",
    options: ["よう", "とき"],
    correct: 0,
    vi: "Tôi cố gắng thức dậy lúc 6 giờ mỗi sáng.",
    explain: "〜ようにしている = cố gắng duy trì ~ (hành động có chủ ý). 〜とき = lúc/khi."
  },
  {
    id: "vs-12",
    context: "財布を忘れてしまった__、買い物できなかった。",
    options: ["ので", "のに"],
    correct: 0,
    vi: "Vì lỡ quên ví nên không mua sắm được.",
    explain: '〜てしまった+ので = vì đã lỡ làm ~ (nguyên nhân không mong muốn). のに sẽ mang nghĩa "mặc dù quên ví nhưng...", không hợp lý ở đây.'
  },
  {
    id: "vs-13",
    context: "雨が降ってきた__、傘を持ってきてよかった。",
    options: ["から", "ので"],
    correct: 0,
    vi: "Vì trời bắt đầu mưa, may mà mang ô theo.",
    explain: "Cả から và ので đều chỉ lý do. から mang tính cá nhân/chủ quan hơn, phù hợp khi nói về phán đoán cá nhân."
  },
  {
    id: "vs-14",
    context: "子供の__、一人で行かないでください。",
    options: ["うちに", "あいだに"],
    correct: 0,
    vi: "Khi còn là trẻ em, đừng đi một mình.",
    explain: "〜うちに = trong khi còn/vẫn còn ~ (trạng thái còn duy trì). 〜あいだに = trong khoảng thời gian ~ (khoảng thời gian giữa hai điểm)."
  },
  {
    id: "vs-15",
    context: "父が旅行している__に電話が来た。",
    options: ["あいだ", "うち"],
    correct: 0,
    vi: "Trong lúc bố đang đi du lịch thì có điện thoại đến.",
    explain: "〜あいだに = trong khoảng thời gian đó có sự kiện xảy ra. 〜うちに = trong khi trạng thái còn duy trì."
  }
];
function buildVsQuestions(dynamicItems, maxQ) {
  const dynamicQs = [];
  for (const it of dynamicItems || []) {
    if (!it.blankAnswer || !it.sentenceBlank) continue;
    const distractor = dynamicItems.find((x) => x.blankAnswer && x.blankAnswer !== it.blankAnswer);
    if (!distractor) continue;
    const opts = Math.random() < 0.5 ? [it.blankAnswer, distractor.blankAnswer] : [distractor.blankAnswer, it.blankAnswer];
    const correctIdx = opts.indexOf(it.blankAnswer);
    dynamicQs.push({
      id: `dyn-${it.id || it.title}`,
      context: it.sentenceBlank,
      options: opts,
      correct: correctIdx,
      vi: it.vi || "",
      explain: it.explanation || `${it.title}: ${it.vi || ""}`
    });
  }
  const pool = shuffleArray$1([...VS_QUESTIONS, ...dynamicQs.slice(0, 10)]).slice(0, maxQ);
  return pool;
}
function GrammarVsMode({ items, maxQuestions = 10, trainerId }) {
  const scoring = useScoreEngine(trainerId);
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [chosen, setChosen] = reactExports.useState(null);
  const [done, setDone] = reactExports.useState(false);
  const lockRef = reactExports.useRef(false);
  const pendingCorrectRef = reactExports.useRef(null);
  const questions = reactExports.useMemo(() => buildVsQuestions(items || [], maxQuestions), [items, maxQuestions]);
  const q = questions[qIdx] || null;
  const commitPending = reactExports.useCallback((quality) => {
    if (pendingCorrectRef.current) {
      scoring.recordCorrect(pendingCorrectRef.current, quality);
      pendingCorrectRef.current = null;
    }
  }, [scoring]);
  const handlePick = reactExports.useCallback((idx) => {
    if (chosen !== null || lockRef.current || !q) return;
    lockRef.current = true;
    setChosen(idx);
    const correct = idx === q.correct;
    if (correct) {
      pendingCorrectRef.current = q;
      playSFX("correct");
    } else {
      scoring.recordWrong(q);
      playSFX("wrong");
    }
  }, [chosen, q, scoring]);
  const handleNext = reactExports.useCallback(() => {
    commitPending(void 0);
    lockRef.current = false;
    if (qIdx + 1 >= questions.length) {
      setDone(true);
      return;
    }
    setQIdx((i) => i + 1);
    setChosen(null);
  }, [commitPending, qIdx, questions.length]);
  const handleGrade = reactExports.useCallback((quality) => {
    commitPending(quality);
    lockRef.current = false;
    if (qIdx + 1 >= questions.length) {
      setDone(true);
      return;
    }
    setQIdx((i) => i + 1);
    setChosen(null);
  }, [commitPending, qIdx, questions.length]);
  const handleReset = reactExports.useCallback(() => {
    commitPending(void 0);
    lockRef.current = false;
    setQIdx(0);
    setChosen(null);
    scoring.reset();
    setDone(false);
  }, [commitPending, scoring]);
  if (!questions.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mode-empty-icon", children: "⚔️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: 'Không đủ dữ liệu. Hãy chọn "Tất cả".' })
    ] });
  }
  if (done) {
    commitPending(void 0);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModeResultsScreen,
      {
        scoring,
        getQuestion: (q2) => q2.context,
        getCorrectInfo: (q2) => ({ reading: "", meaning: q2.vi, extra: `Đáp án đúng: ${q2.options[q2.correct]}` }),
        onRestart: handleReset
      }
    );
  }
  if (!q) return null;
  const answered = chosen !== null;
  const isCorrect = answered && chosen === q.correct;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cloze", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini-fill", style: { width: `${(qIdx + 1) / questions.length * 100}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cloze-sentence-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cloze-instruction", children: "⚔️ Chọn mẫu ngữ pháp đúng cho câu:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cloze-sentence", style: { fontSize: "1.1em" }, children: q.context }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { marginTop: 4 }, onClick: () => speakJP(q.context), children: "🔊 Nghe" }),
      q.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cloze-vi", children: q.vi })
    ] }),
    !answered && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScaffoldingLayer, { text: q.context, minimal: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AIHintButton,
        {
          question: q.context,
          options: q.options,
          correctAnswer: q.options[q.correct],
          itemInfo: { meaning: q.vi }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "12px 0" }, children: q.options.map((opt, idx) => {
      let cls = "n4-cloze-option";
      let extraStyle = { textAlign: "center", fontSize: "1.05em", padding: "12px 8px", minHeight: 64 };
      if (answered) {
        if (idx === q.correct) {
          cls += " n4-cloze-correct";
          extraStyle.background = "rgba(34,197,94,0.12)";
        } else if (idx === chosen) {
          cls += " n4-cloze-wrong";
          extraStyle.background = "rgba(239,68,68,0.12)";
        }
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: cls, style: extraStyle, onClick: () => handlePick(idx), disabled: answered, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontWeight: 700, marginBottom: 4 }, children: [
          String.fromCharCode(65 + idx),
          ". ",
          opt
        ] }),
        answered && idx === q.correct && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8em", opacity: 0.75 }, children: "✓ Đúng" }),
        answered && idx === chosen && idx !== q.correct && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8em", opacity: 0.75 }, children: "✗ Sai" })
      ] }, idx);
    }) }),
    answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuizFeedback,
      {
        isCorrect,
        correctAnswer: q.options[q.correct],
        userAnswer: q.options[chosen],
        questionDisplay: q.context,
        correctInfo: { meaning: q.vi, extra: q.explain ? `Giải thích: ${q.explain}` : "" },
        showQualityPicker: isCorrect,
        onQualityPick: handleGrade,
        onNext: handleNext,
        isLastQuestion: qIdx + 1 >= questions.length,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 8, fontSize: "0.9em", padding: "8px 12px", background: "var(--n4-surface)", borderRadius: 8 }, children: [
          "✅ ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Đáp án:" }),
          " ",
          q.options[q.correct]
        ] })
      }
    )
  ] });
}
const CORRECTION_QUESTIONS = [
  {
    id: "corr-1",
    wrong: "昨日は学校に行きないでした。",
    correct: "昨日は学校に行きませんでした。",
    options: ["行きませんでした", "行かなかったです", "行きないでした", "行かないでした"],
    correctIdx: 0,
    errorPart: "行きないでした",
    errorType: "否定過去形",
    vi: "Hôm qua tôi không đến trường.",
    explain: "動詞の丁寧否定過去は「〜ませんでした」。「〜ないでした」は間違い。または「行かなかったです」も正しい口語表現。"
  },
  {
    id: "corr-2",
    wrong: "日本語を話すことができない私はとても困りました。",
    correct: "日本語を話せない私はとても困りました。",
    options: ["日本語を話せない", "日本語を話しない", "日本語を話されない", "日本語が話ない"],
    correctIdx: 0,
    errorPart: "話すことができない",
    errorType: "可能形",
    vi: "Tôi không nói được tiếng Nhật nên rất bối rối.",
    explain: "能力否定は「〜られない」または短縮形「〜せない」が自然。「話すことができない」は文法的に正しいが冗長。"
  },
  {
    id: "corr-3",
    wrong: "友達に本を貸してもらいました。私が借りました。",
    correct: "友達に本を貸してもらいました。私は借りました。",
    options: ["私は借りました", "私が借りた", "私を借りました", "私で借りました"],
    correctIdx: 0,
    errorPart: "私が",
    errorType: "は vs が",
    vi: "Bạn tôi đã cho tôi mượn sách. Tôi đã mượn.",
    explain: "既知の主語（話題）には「は」を使う。「私が」は新情報・焦点を強調する場合。ここでは「私は」が自然。"
  },
  {
    id: "corr-4",
    wrong: "雨が降るとき、傘を持って行きます。",
    correct: "雨が降るときは、傘を持って行きます。",
    options: ["降るときは", "降っているとき", "降ったら", "降るなら"],
    correctIdx: 0,
    errorPart: "とき",
    errorType: "〜とき vs 〜ときは",
    vi: "Khi trời mưa, tôi mang ô đi.",
    explain: "〜ときは は一般的な習慣を述べる時に自然。「とき」だけでも文法的には正しいが、は を付けると話題として提示するニュアンスが加わる。"
  },
  {
    id: "corr-5",
    wrong: "もっと早くおきれば、バスに乗れた。",
    correct: "もっと早く起きれば、バスに乗れた。",
    options: ["早く起きれば", "早く起きたら", "早く起きると", "早く起きながら"],
    correctIdx: 0,
    errorPart: "おきれば",
    errorType: "条件形",
    vi: "Nếu dậy sớm hơn thì đã kịp xe buýt.",
    explain: "反事実の過去条件：「〜れば〜た」または「〜たら〜た」。起きる→起きれば は正しい。ひらがなのみも正しいが漢字の方が読みやすい。"
  },
  {
    id: "corr-6",
    wrong: "試験のために、毎日練習をしたい。",
    correct: "試験のために、毎日練習したい。",
    options: ["毎日練習したい", "毎日練習するために", "毎日練習ができます", "毎日練習をしてほしい"],
    correctIdx: 0,
    errorPart: "をしたい",
    errorType: "〜したい",
    vi: "Để thi, tôi muốn luyện tập mỗi ngày.",
    explain: "「練習したい」が自然。「練習をする」は可能だが「したい」とつなぐ場合は「練習したい」がより自然。"
  },
  {
    id: "corr-7",
    wrong: "彼女はきれいで、そして優しいのに、とても人気があります。",
    correct: "彼女はきれいで、優しくて、とても人気があります。",
    options: ["きれいで、優しくて", "きれいだから、優しいので", "きれいなのに、優しいくて", "きれいで、優しいから"],
    correctIdx: 0,
    errorPart: "のに",
    errorType: "のに vs て形接続",
    vi: "Cô ấy xinh, hiền, nên rất được yêu thích.",
    explain: "「のに」は逆接（期待の裏切り）を表す。ここは並列（A+B→Cという結果）なので「〜で〜くて」が正しい。"
  },
  {
    id: "corr-8",
    wrong: "田中さんはまだ学校があります。",
    correct: "田中さんはまだ学校にいます。",
    options: ["学校にいます", "学校にあります", "学校がいます", "学校であります"],
    correctIdx: 0,
    errorPart: "があります",
    errorType: "います vs あります",
    vi: "Bạn Tanaka vẫn còn ở trường.",
    explain: "人（生き物）の存在は「います」。「あります」は物・事柄の存在・所有に使う。田中さんは人なので「います」。"
  },
  {
    id: "corr-9",
    wrong: "先生に本を読んでいただけませんか。",
    correct: "先生に本を読んでいただけませんか。",
    options: ["この文は正しい", "先生が本を読んでください", "先生は本を読んでもらえませんか", "先生に本を読んでくれませんか"],
    correctIdx: 0,
    errorPart: "",
    errorType: "敬語（正しい）",
    vi: "Xin thầy/cô hãy đọc sách giúp tôi (có thể được không?).",
    explain: "先生に〜していただけませんか は正しい敬語表現。先生＝に格で動作主を表す。いただく は謙譲語として正しい使い方。"
  },
  {
    id: "corr-10",
    wrong: "もう少し待てば、電車は来られます。",
    correct: "もう少し待てば、電車は来ます。",
    options: ["電車は来ます", "電車は来られます", "電車が来ます", "電車に来ます"],
    correctIdx: 0,
    errorPart: "来られます",
    errorType: "受身・可能の混同",
    vi: "Nếu đợi thêm một chút, xe lửa sẽ đến.",
    explain: "電車が「来る」のは電車の動作。可能形「来られる」は誰か（人）ができるかどうかの話。電車には可能の意味はない。"
  },
  {
    id: "corr-11",
    wrong: "彼は食べることが好きです。食べるのも好きです。",
    correct: "彼は食べることが好きです。（正しい）",
    options: ["この文は正しい", "彼は食べるのが好きです", "彼は食べるから好きです", "彼は食べますが好きです"],
    correctIdx: 0,
    errorPart: "",
    errorType: "こと/の（正しい）",
    vi: "Anh ấy thích ăn.",
    explain: "「食べることが好き」も「食べるのが好き」も両方正しい。「こと」「の」は名詞化する働きをし、好き嫌いの文には両方使える。"
  },
  {
    id: "corr-12",
    wrong: "寒くなってきたので、コートを来ていきます。",
    correct: "寒くなってきたので、コートを着ていきます。",
    options: ["コートを着ていきます", "コートを来ていきます", "コートを着てきます", "コートを着ていました"],
    correctIdx: 0,
    errorPart: "コートを来て",
    errorType: "同音異義語（착る vs 来る）",
    vi: "Trời trở lạnh nên tôi sẽ mặc áo khoác đi.",
    explain: "「着る（きる）」= mặc quần áo。「来る（くる）」= đến. コートは「着る」。「来ていきます」は意味が通じない。"
  }
];
function buildCorrectionQuestions(maxQ) {
  return shuffleArray$1([...CORRECTION_QUESTIONS]).slice(0, maxQ);
}
function GrammarCorrectionMode({ items, maxQuestions = 10, trainerId }) {
  const scoring = useScoreEngine(trainerId);
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [chosen, setChosen] = reactExports.useState(null);
  const [done, setDone] = reactExports.useState(false);
  const lockRef = reactExports.useRef(false);
  const pendingCorrectRef = reactExports.useRef(null);
  const questions = reactExports.useMemo(() => buildCorrectionQuestions(maxQuestions), [maxQuestions]);
  const q = questions[qIdx] || null;
  const commitPending = reactExports.useCallback((quality) => {
    if (pendingCorrectRef.current) {
      scoring.recordCorrect(pendingCorrectRef.current, quality);
      pendingCorrectRef.current = null;
    }
  }, [scoring]);
  const handlePick = reactExports.useCallback((idx) => {
    if (chosen !== null || lockRef.current || !q) return;
    lockRef.current = true;
    setChosen(idx);
    const correct = idx === q.correctIdx;
    if (correct) {
      pendingCorrectRef.current = q;
      playSFX("correct");
    } else {
      scoring.recordWrong(q);
      playSFX("wrong");
    }
  }, [chosen, q, scoring]);
  const handleNext = reactExports.useCallback(() => {
    commitPending(void 0);
    lockRef.current = false;
    if (qIdx + 1 >= questions.length) {
      setDone(true);
      return;
    }
    setQIdx((i) => i + 1);
    setChosen(null);
  }, [commitPending, qIdx, questions.length]);
  const handleGrade = reactExports.useCallback((quality) => {
    commitPending(quality);
    lockRef.current = false;
    if (qIdx + 1 >= questions.length) {
      setDone(true);
      return;
    }
    setQIdx((i) => i + 1);
    setChosen(null);
  }, [commitPending, qIdx, questions.length]);
  const handleReset = reactExports.useCallback(() => {
    commitPending(void 0);
    lockRef.current = false;
    setQIdx(0);
    setChosen(null);
    scoring.reset();
    setDone(false);
  }, [commitPending, scoring]);
  if (!questions.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mode-empty-icon", children: "🩺" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Không đủ dữ liệu. Hãy thử lại." })
    ] });
  }
  if (done) {
    commitPending(void 0);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModeResultsScreen,
      {
        scoring,
        getQuestion: (q2) => `Sửa lỗi: ${q2.wrong}`,
        getCorrectInfo: (q2) => ({ reading: "", meaning: q2.vi, extra: `Câu đúng: ${q2.correct}` }),
        onRestart: handleReset
      }
    );
  }
  if (!q) return null;
  const answered = chosen !== null;
  const isCorrect = answered && chosen === q.correctIdx;
  const renderWrongSentence = () => {
    if (!q.errorPart) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: q.wrong });
    const parts = q.wrong.split(q.errorPart);
    if (parts.length < 2) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: q.wrong });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      parts[0],
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-error, #ef4444)", textDecoration: "underline wavy", fontWeight: 700 }, children: q.errorPart }),
      parts.slice(1).join(q.errorPart)
    ] });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cloze", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini-fill", style: { width: `${(qIdx + 1) / questions.length * 100}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cloze-sentence-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cloze-instruction", children: "🩺 Câu sau có lỗi ngữ pháp. Chọn cách sửa đúng:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cloze-sentence", style: { marginBottom: 6 }, children: renderWrongSentence() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(q.wrong), children: "🔊 Nghe (lỗi)" }),
      q.errorPart && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 6, fontSize: "0.82em", opacity: 0.7 }, children: [
        "🔴 Lỗi tại: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: q.errorPart || "xem gợi ý" }),
        " (",
        q.errorType,
        ")"
      ] }),
      q.vi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cloze-vi", children: [
        "💭 ",
        q.vi
      ] })
    ] }),
    !answered && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScaffoldingLayer, { text: q.wrong, minimal: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AIHintButton,
        {
          question: `Sửa lỗi trong câu: ${q.wrong}`,
          options: q.options,
          correctAnswer: q.options[q.correctIdx],
          itemInfo: { meaning: q.vi }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cloze-options", children: q.options.map((opt, idx) => {
      let cls = "n4-cloze-option";
      if (answered) {
        if (idx === q.correctIdx) cls += " n4-cloze-correct";
        else if (idx === chosen) cls += " n4-cloze-wrong";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: cls, onClick: () => handlePick(idx), disabled: answered, children: [
        opt,
        answered && idx === q.correctIdx && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-cloze-option-check", children: " ✓" })
      ] }, `${q.id}-${idx}`);
    }) }),
    answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuizFeedback,
      {
        isCorrect,
        correctAnswer: q.options[q.correctIdx],
        userAnswer: q.options[chosen],
        questionDisplay: `Lỗi trong câu: ${q.wrong}`,
        correctInfo: { meaning: q.vi, extra: q.explain ? `Giải thích: ${q.explain}` : "" },
        showQualityPicker: isCorrect,
        onQualityPick: handleGrade,
        onNext: handleNext,
        isLastQuestion: qIdx + 1 >= questions.length,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 8, fontSize: "0.9em", padding: "8px 12px", background: "var(--n4-surface)", borderRadius: 8 }, children: [
          "✅ ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Câu đúng:" }),
          " ",
          q.correct
        ] })
      }
    )
  ] });
}
const TRANSFORMS = [
  // Plain → Polite (丁寧語)
  { source: "食べる", target: "食べます", type: "plain→polite", hint: "Đổi sang thể lịch sự (ます)", meaning: "Ăn" },
  { source: "飲む", target: "飲みます", type: "plain→polite", hint: "Đổi sang thể lịch sự (ます)", meaning: "Uống" },
  { source: "行く", target: "行きます", type: "plain→polite", hint: "Đổi sang thể lịch sự (ます)", meaning: "Đi" },
  { source: "読む", target: "読みます", type: "plain→polite", hint: "Đổi sang thể lịch sự (ます)", meaning: "Đọc" },
  { source: "書く", target: "書きます", type: "plain→polite", hint: "Đổi sang thể lịch sự (ます)", meaning: "Viết" },
  { source: "話す", target: "話します", type: "plain→polite", hint: "Đổi sang thể lịch sự (ます)", meaning: "Nói" },
  { source: "買う", target: "買います", type: "plain→polite", hint: "Đổi sang thể lịch sự (ます)", meaning: "Mua" },
  // Affirmative → Negative
  { source: "食べます", target: "食べません", type: "affirm→neg", hint: "Đổi sang thể phủ định", meaning: "Ăn" },
  { source: "行きます", target: "行きません", type: "affirm→neg", hint: "Đổi sang thể phủ định", meaning: "Đi" },
  { source: "飲みます", target: "飲みません", type: "affirm→neg", hint: "Đổi sang thể phủ định", meaning: "Uống" },
  { source: "高い", target: "高くない", type: "affirm→neg", hint: "い形 phủ định: bỏ い → くない", meaning: "Đắt/Cao" },
  { source: "きれいです", target: "きれいじゃありません", type: "affirm→neg", hint: "な形 phủ định: じゃありません", meaning: "Đẹp" },
  { source: "静かです", target: "静かじゃありません", type: "affirm→neg", hint: "な形 phủ định: じゃありません", meaning: "Yên tĩnh" },
  // Present → Past
  { source: "食べます", target: "食べました", type: "present→past", hint: "Đổi sang thể quá khứ", meaning: "Ăn" },
  { source: "行きます", target: "行きました", type: "present→past", hint: "Đổi sang thể quá khứ", meaning: "Đi" },
  { source: "飲みます", target: "飲みました", type: "present→past", hint: "Đổi sang thể quá khứ", meaning: "Uống" },
  { source: "高いです", target: "高かったです", type: "present→past", hint: "い形 quá khứ: い → かった", meaning: "Đắt/Cao" },
  { source: "きれいです", target: "きれいでした", type: "present→past", hint: "な形 quá khứ: です → でした", meaning: "Đẹp" },
  { source: "書きます", target: "書きました", type: "present→past", hint: "Đổi sang thể quá khứ", meaning: "Viết" },
  // Dict → Te-form
  { source: "食べる", target: "食べて", type: "dict→te", hint: "Đổi sang thể て", meaning: "Ăn" },
  { source: "飲む", target: "飲んで", type: "dict→te", hint: "む → んで", meaning: "Uống" },
  { source: "行く", target: "行って", type: "dict→te", hint: "く → って (ngoại lệ)", meaning: "Đi" },
  { source: "読む", target: "読んで", type: "dict→te", hint: "む → んで", meaning: "Đọc" },
  { source: "書く", target: "書いて", type: "dict→te", hint: "く → いて", meaning: "Viết" },
  { source: "話す", target: "話して", type: "dict→te", hint: "す → して", meaning: "Nói" },
  { source: "待つ", target: "待って", type: "dict→te", hint: "つ → って", meaning: "Chờ" },
  { source: "死ぬ", target: "死んで", type: "dict→te", hint: "ぬ → んで", meaning: "Chết" },
  { source: "遊ぶ", target: "遊んで", type: "dict→te", hint: "ぶ → んで", meaning: "Chơi" },
  // Active → Passive
  { source: "食べる", target: "食べられる", type: "active→passive", hint: "Đổi sang thể bị động (受身形)", meaning: "Ăn" },
  { source: "読む", target: "読まれる", type: "active→passive", hint: "む → まれる", meaning: "Đọc" },
  { source: "書く", target: "書かれる", type: "active→passive", hint: "く → かれる", meaning: "Viết" },
  { source: "話す", target: "話される", type: "active→passive", hint: "す → される", meaning: "Nói" },
  // Dict → Potential
  { source: "食べる", target: "食べられる", type: "dict→potential", hint: "Đổi sang thể khả năng (可能形)", meaning: "Ăn" },
  { source: "読む", target: "読める", type: "dict→potential", hint: "む → める", meaning: "Đọc" },
  { source: "書く", target: "書ける", type: "dict→potential", hint: "く → ける", meaning: "Viết" },
  { source: "話す", target: "話せる", type: "dict→potential", hint: "す → せる", meaning: "Nói" },
  { source: "泳ぐ", target: "泳げる", type: "dict→potential", hint: "ぐ → げる", meaning: "Bơi" },
  // Dict → Tai-form
  { source: "食べる", target: "食べたい", type: "dict→tai", hint: "ます形「食べます」→ bỏ ます → 食べ + たい", meaning: "Ăn" },
  { source: "行く", target: "行きたい", type: "dict→tai", hint: "ます形「行きます」→ bỏ ます → 行き + たい", meaning: "Đi" },
  { source: "書く", target: "書きたい", type: "dict→tai", hint: "ます形「書きます」→ bỏ ます → 書き + たい", meaning: "Viết" },
  { source: "飲む", target: "飲みたい", type: "dict→tai", hint: "ます形「飲みます」→ bỏ ます → 飲み + たい", meaning: "Uống" },
  { source: "勉強する", target: "勉強したい", type: "dict→tai", hint: "ます形「勉強します」→ bỏ ます → 勉強し + たい", meaning: "Học" }
];
const TYPE_LABELS = {
  "plain→polite": "普通形 → 丁寧形",
  "affirm→neg": "肯定 → 否定",
  "present→past": "現在 → 過去",
  "dict→te": "辞書形 → て形",
  "active→passive": "能動態 → 受身形",
  "dict→potential": "辞書形 → 可能形",
  "dict→tai": "辞書形 → たい形"
};
const TYPE_LABELS_VI = {
  "plain→polite": "Thể thường → Lịch sự",
  "affirm→neg": "Khẳng định → Phủ định",
  "present→past": "Hiện tại → Quá khứ",
  "dict→te": "Từ điển → て形",
  "active→passive": "Chủ động → Bị động",
  "dict→potential": "Từ điển → Khả năng",
  "dict→tai": "Từ điển → Muốn làm"
};
const MAX_Q$1 = 12;
function FormTransformMode({ items = [], maxQuestions = MAX_Q$1 }) {
  const scoring = useScoreEngine();
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [showHint, setShowHint] = reactExports.useState(false);
  const [done, setDone] = reactExports.useState(false);
  const { gameKey, restart, lockRef } = useGameRestart(scoring, {
    onReset: () => {
      setQIdx(0);
      setSelected(null);
      setShowHint(false);
      setDone(false);
    }
  });
  const pool = reactExports.useMemo(() => shuffleArray$1([...TRANSFORMS]).slice(0, maxQuestions), [maxQuestions, gameKey]);
  const current = pool[qIdx];
  const options = reactExports.useMemo(() => {
    if (!current) return [];
    const sameType = TRANSFORMS.filter((t) => t.type === current.type && t.target !== current.target);
    const otherType = TRANSFORMS.filter((t) => t.type !== current.type && t.target !== current.target);
    const wrongs = shuffleArray$1([...sameType, ...otherType]).slice(0, 3).map((t) => t.target);
    return shuffleArray$1([current.target, ...wrongs.filter((w) => w !== current.target)]).slice(0, 4);
  }, [current]);
  const handleSelect = reactExports.useCallback((opt) => {
    var _a, _b;
    if (lockRef.current || !current) return;
    lockRef.current = true;
    const isCorrect = opt === current.target;
    setSelected(opt);
    if (isCorrect) {
      (_a = scoring.recordCorrect) == null ? void 0 : _a.call(scoring, { word: current.source });
      playSFX("correct");
      speakJP(current.target);
    } else {
      (_b = scoring.recordWrong) == null ? void 0 : _b.call(scoring, { word: current.source });
      playSFX("wrong");
    }
    setTimeout(() => {
      lockRef.current = false;
      setSelected(null);
      setShowHint(false);
      if (qIdx + 1 >= pool.length) setDone(true);
      else setQIdx((q) => q + 1);
    }, 1500);
  }, [current, pool, qIdx, scoring]);
  if (done) {
    const pct = pool.length > 0 ? Math.round((scoring.score || 0) / pool.length * 100) : 0;
    const emoji = pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "💪";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-emoji", children: emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-result-title", children: pct >= 80 ? "Xuất sắc!" : pct >= 50 ? "Khá tốt!" : "Cố lên!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Đúng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value success", children: scoring.score || 0 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Tổng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value", children: pool.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Chính xác" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stat-value", children: [
            pct,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: restart, style: { width: "100%", marginTop: 12 }, children: "🔄 Làm lại" })
    ] });
  }
  if (!current) return null;
  const answered = selected !== null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-instruction", style: { marginBottom: 8 }, children: [
      "Câu ",
      qIdx + 1,
      "/",
      pool.length,
      " — Biến đổi câu"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginBottom: 10 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { display: "inline-block", padding: "4px 12px", borderRadius: 999, background: "var(--n4-accent-bg, rgba(79,70,229,0.1))", fontSize: "0.85rem", fontWeight: 600 }, children: [
      TYPE_LABELS[current.type],
      " (",
      TYPE_LABELS_VI[current.type],
      ")"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 14 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.5rem", fontWeight: 700 }, children: current.source }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.9rem", opacity: 0.6 }, children: current.meaning }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(current.source), style: { marginTop: 4 }, children: "🔊" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScaffoldingLayer, { text: current.source, minimal: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", fontSize: "1.4rem", marginBottom: 10 }, children: "→ ?" }),
    !answered && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginBottom: 10 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setShowHint(true), children: "💡 Gợi ý" }) }),
    showHint && !answered && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", fontSize: "0.88rem", opacity: 0.7, marginBottom: 10, padding: "6px 10px", borderRadius: 8, background: "var(--n4-bg-tertiary, rgba(0,0,0,0.04))" }, children: [
      "💡 ",
      current.hint
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quiz-options", children: options.map((opt, idx) => {
      let cls = "n4-quiz-option";
      if (answered) {
        if (opt === current.target) cls += " correct";
        else if (opt === selected) cls += " wrong";
        cls += " answered";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: cls, onClick: () => handleSelect(opt), disabled: answered, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-quiz-option-idx", children: idx + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: opt })
      ] }, `${qIdx}-${idx}`);
    }) }),
    answered && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginTop: 10, padding: "10px 12px", borderRadius: 8, background: selected === current.target ? "rgba(74,222,128,0.15)" : "rgba(248,113,113,0.15)" }, children: selected === current.target ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "✅ Chính xác! ",
      current.source,
      " → ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: current.target })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "❌ Sai — Đáp án: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: current.target }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85rem", opacity: 0.8 }, children: current.hint })
    ] }) })
  ] });
}
const PATTERNS = [
  { start: "雨が降っている", ending: "ので、傘を持っていきます", full: "雨が降っているので、傘を持っていきます", pattern: "〜ので", vi: "Vì trời đang mưa nên mang ô đi" },
  { start: "日本語が上手に", ending: "なりたいです", full: "日本語が上手になりたいです", pattern: "〜たい", vi: "Muốn giỏi tiếng Nhật" },
  { start: "明日は早く起き", ending: "なければなりません", full: "明日は早く起きなければなりません", pattern: "〜なければならない", vi: "Ngày mai phải dậy sớm" },
  { start: "友達が来る", ending: "かもしれません", full: "友達が来るかもしれません", pattern: "〜かもしれない", vi: "Có lẽ bạn sẽ đến" },
  { start: "薬を飲んだ", ending: "のに、まだ熱があります", full: "薬を飲んだのに、まだ熱があります", pattern: "〜のに", vi: "Dù đã uống thuốc nhưng vẫn còn sốt" },
  { start: "先生が話している", ending: "あいだ、静かにしてください", full: "先生が話しているあいだ、静かにしてください", pattern: "〜あいだ", vi: "Trong lúc thầy nói, hãy im lặng" },
  { start: "漢字を覚える", ending: "ために、毎日練習します", full: "漢字を覚えるために、毎日練習します", pattern: "〜ために", vi: "Để nhớ chữ Hán, luyện tập mỗi ngày" },
  { start: "食べすぎた", ending: "せいで、お腹が痛いです", full: "食べすぎたせいで、お腹が痛いです", pattern: "〜せいで", vi: "Vì ăn quá nhiều nên đau bụng" },
  { start: "日本に行った", ending: "ことがあります", full: "日本に行ったことがあります", pattern: "〜ことがある", vi: "Đã từng đi Nhật" },
  { start: "映画を見", ending: "ながら、ご飯を食べました", full: "映画を見ながら、ご飯を食べました", pattern: "〜ながら", vi: "Vừa xem phim vừa ăn cơm" },
  { start: "宿題を", ending: "してから、遊びに行きます", full: "宿題をしてから、遊びに行きます", pattern: "〜てから", vi: "Làm bài tập xong rồi đi chơi" },
  { start: "天気が良ければ", ending: "、散歩に行きましょう", full: "天気が良ければ、散歩に行きましょう", pattern: "〜ば", vi: "Nếu thời tiết đẹp thì đi dạo nhé" },
  { start: "電車に乗る", ending: "まえに、切符を買います", full: "電車に乗るまえに、切符を買います", pattern: "〜まえに", vi: "Trước khi lên tàu, mua vé" },
  { start: "部屋を掃除した", ending: "あとで、出かけます", full: "部屋を掃除したあとで、出かけます", pattern: "〜あとで", vi: "Sau khi dọn phòng, sẽ ra ngoài" },
  { start: "母に料理の作り方を", ending: "教えてもらいました", full: "母に料理の作り方を教えてもらいました", pattern: "〜てもらう", vi: "Được mẹ dạy cách nấu ăn" },
  { start: "あの店のケーキは", ending: "食べたことがありますか", full: "あの店のケーキは食べたことがありますか", pattern: "〜ことがある", vi: "Bạn đã bao giờ ăn bánh ở quán đó chưa?" },
  { start: "忙しくても", ending: "、日本語の勉強を続けます", full: "忙しくても、日本語の勉強を続けます", pattern: "〜ても", vi: "Dù bận cũng tiếp tục học tiếng Nhật" },
  { start: "彼は日本人の", ending: "ように日本語を話します", full: "彼は日本人のように日本語を話します", pattern: "〜ように", vi: "Anh ấy nói tiếng Nhật như người Nhật" },
  { start: "この本は読み", ending: "やすいです", full: "この本は読みやすいです", pattern: "〜やすい", vi: "Cuốn sách này dễ đọc" },
  { start: "あの漢字は覚え", ending: "にくいです", full: "あの漢字は覚えにくいです", pattern: "〜にくい", vi: "Chữ Hán đó khó nhớ" },
  { start: "窓を開けて", ending: "もいいですか", full: "窓を開けてもいいですか", pattern: "〜てもいい", vi: "Mở cửa sổ được không?" },
  { start: "ここで写真を撮って", ending: "はいけません", full: "ここで写真を撮ってはいけません", pattern: "〜てはいけない", vi: "Không được chụp ảnh ở đây" },
  { start: "毎日運動する", ending: "ようにしています", full: "毎日運動するようにしています", pattern: "〜ようにする", vi: "Tôi cố gắng tập thể dục mỗi ngày" },
  { start: "子供が一人で行ける", ending: "ようになりました", full: "子供が一人で行けるようになりました", pattern: "〜ようになる", vi: "Trẻ đã có thể tự đi một mình" }
];
const MAX_Q = 12;
function PatternCompletionMode({ items = [], maxQuestions = MAX_Q, trainerId }) {
  const scoring = useScoreEngine(trainerId);
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [showHint, setShowHint] = reactExports.useState(false);
  const [done, setDone] = reactExports.useState(false);
  const pendingCorrectRef = reactExports.useRef(null);
  const commitPending = reactExports.useCallback((quality) => {
    if (pendingCorrectRef.current) {
      scoring.recordCorrect(pendingCorrectRef.current, quality);
      pendingCorrectRef.current = null;
    }
  }, [scoring]);
  const { gameKey, restart, lockRef } = useGameRestart(scoring, {
    onReset: () => {
      commitPending(void 0);
      setQIdx(0);
      setSelected(null);
      setShowHint(false);
      setDone(false);
    }
  });
  const pool = reactExports.useMemo(() => shuffleArray$1([...PATTERNS]).slice(0, maxQuestions), [maxQuestions, gameKey]);
  const current = pool[qIdx];
  const options = reactExports.useMemo(() => {
    if (!current) return [];
    const wrongs = PATTERNS.filter((p) => p.ending !== current.ending).map((p) => p.ending);
    const picked = shuffleArray$1(wrongs).slice(0, 3);
    return shuffleArray$1([current.ending, ...picked]);
  }, [current]);
  const handleSelect = reactExports.useCallback((opt) => {
    if (lockRef.current || !current) return;
    lockRef.current = true;
    const isCorrect = opt === current.ending;
    setSelected(opt);
    if (isCorrect) {
      pendingCorrectRef.current = current;
      playSFX("correct");
      speakJP(current.full);
    } else {
      scoring.recordWrong(current);
      playSFX("wrong");
    }
  }, [current, scoring]);
  const handleNext = reactExports.useCallback(() => {
    commitPending(void 0);
    lockRef.current = false;
    setSelected(null);
    setShowHint(false);
    if (qIdx + 1 >= pool.length) setDone(true);
    else setQIdx((q) => q + 1);
  }, [commitPending, qIdx, pool.length]);
  const handleGrade = reactExports.useCallback((quality) => {
    commitPending(quality);
    lockRef.current = false;
    setSelected(null);
    setShowHint(false);
    if (qIdx + 1 >= pool.length) setDone(true);
    else setQIdx((q) => q + 1);
  }, [commitPending, qIdx, pool.length]);
  if (done) {
    commitPending(void 0);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModeResultsScreen,
      {
        scoring,
        getQuestion: (q) => q.full,
        getCorrectInfo: (q) => ({ meaning: q.vi, extra: q.pattern }),
        onRestart: restart
      }
    );
  }
  if (!current) return null;
  const answered = selected !== null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-instruction", style: { marginBottom: 8 }, children: [
      "Câu ",
      qIdx + 1,
      "/",
      pool.length,
      " — Hoàn thành mẫu câu"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginBottom: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "1.35rem", fontWeight: 700, lineHeight: 1.5 }, children: [
      current.start,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.5rem", color: "var(--n4-accent, #4f46e5)" }, children: "______" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScaffoldingLayer, { text: current.full, minimal: true }),
    (showHint || answered) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginBottom: 10 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { display: "inline-block", padding: "3px 10px", borderRadius: 999, background: "var(--n4-accent-bg, rgba(79,70,229,0.1))", fontSize: "0.85rem", fontWeight: 600 }, children: current.pattern }) }),
    !answered && !showHint && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginBottom: 10 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setShowHint(true), children: "💡 Gợi ý mẫu ngữ pháp" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quiz-options", children: options.map((opt, idx) => {
      let cls = "n4-quiz-option";
      if (answered) {
        if (opt === current.ending) cls += " correct";
        else if (opt === selected) cls += " wrong";
        cls += " answered";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: cls, onClick: () => handleSelect(opt), disabled: answered, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-quiz-option-idx", children: idx + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { textAlign: "left" }, children: opt })
      ] }, `${qIdx}-${idx}`);
    }) }),
    answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuizFeedback,
      {
        isCorrect: selected === current.ending,
        correctAnswer: current.ending,
        userAnswer: selected,
        questionDisplay: current.start + " ______",
        correctInfo: { meaning: current.vi, extra: current.full },
        showQualityPicker: selected === current.ending,
        onQualityPick: handleGrade,
        onNext: handleNext,
        isLastQuestion: qIdx + 1 >= pool.length
      }
    )
  ] });
}
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const FALLBACK_PAIRS = [
  {
    id: "node-noni",
    a: "〜ので",
    b: "〜のに",
    sentence: "雨が降っている___、傘を持って行く。",
    correct: "a",
    vi: "Vì trời đang mưa, tôi mang ô đi.",
    distinction: "ので = lý do hợp lý (có mang ô khi mưa là bình thường); のに = trái kỳ vọng."
  },
  {
    id: "node-noni-2",
    a: "〜ので",
    b: "〜のに",
    sentence: "毎日勉強している___、日本語がまだ下手だ。",
    correct: "b",
    vi: "Dù học mỗi ngày mà tiếng Nhật vẫn chưa giỏi.",
    distinction: "Học mỗi ngày mà chưa giỏi → trái kỳ vọng → のに."
  },
  {
    id: "kara-node",
    a: "〜から",
    b: "〜ので",
    sentence: "忙しい___、少し待ってください。",
    correct: "b",
    vi: "Vì bận nên xin hãy đợi một chút.",
    distinction: "Trong văn cảnh lịch sự / gián tiếp → ので tự nhiên hơn から."
  },
  {
    id: "teoku-teshimau",
    a: "〜ておく",
    b: "〜てしまう",
    sentence: "明日のテストのために、今夜復習し___。",
    correct: "a",
    vi: "Vì bài kiểm tra ngày mai, tối nay tôi sẽ ôn trước.",
    distinction: "ておく = chuẩn bị sẵn cho tương lai; てしまう = hoàn tất / lỡ."
  },
  {
    id: "teoku-teshimau-2",
    a: "〜ておく",
    b: "〜てしまう",
    sentence: "宿題を忘れて家に置いて来___。",
    correct: "b",
    vi: "Tôi lỡ để quên bài tập ở nhà.",
    distinction: "Hành động ngoài ý muốn / hoàn tất đáng tiếc → てしまう."
  },
  {
    id: "ba-tara",
    a: "〜ば",
    b: "〜たら",
    sentence: "宝くじが当たっ___、家を買いたい。",
    correct: "b",
    vi: "Nếu trúng xổ số thì tôi muốn mua nhà.",
    distinction: "Giả định cụ thể một sự kiện hoàn tất → たら tự nhiên hơn."
  },
  {
    id: "to-ba",
    a: "〜と",
    b: "〜ば",
    sentence: "春になる___、桜が咲く。",
    correct: "a",
    vi: "Hễ cứ đến mùa xuân là anh đào nở.",
    distinction: "Kết quả tất yếu / tự nhiên theo quy luật → と."
  },
  {
    id: "nagara-tsutsu",
    a: "〜ながら",
    b: "〜つつ",
    sentence: "音楽を聴き___、勉強する。",
    correct: "a",
    vi: "Vừa nghe nhạc vừa học bài.",
    distinction: "Hành động đồng thời trong đời sống thường ngày → ながら. つつ trang trọng/văn viết."
  },
  {
    id: "youninaru-younisuru",
    a: "〜ようになる",
    b: "〜ようにする",
    sentence: "毎日運動する___している。",
    correct: "b",
    vi: "Tôi đang cố gắng tập thể dục mỗi ngày.",
    distinction: "Chủ ý duy trì hành động → ようにする; thay đổi tự nhiên → ようになる."
  },
  {
    id: "mae-ato",
    a: "〜まえに",
    b: "〜あとで",
    sentence: "日本に来る___、日本語を勉強していた。",
    correct: "a",
    vi: "Trước khi sang Nhật, tôi đã học tiếng Nhật.",
    distinction: "Sự kiện xảy ra trước sự kiện chính → まえに."
  },
  {
    id: "sugiru-rashii",
    a: "〜すぎる",
    b: "〜らしい",
    sentence: "このコーヒーは苦___飲めない。",
    correct: "a",
    vi: "Cà phê này đắng quá không uống nổi.",
    distinction: "Quá mức / thái quá → すぎる. らしい = nghe nói / có vẻ."
  },
  {
    id: "hodo-kurai",
    a: "〜ほど",
    b: "〜くらい",
    sentence: "疲れて歩けない___だった。",
    correct: "b",
    vi: "Mệt đến mức không đi nổi.",
    distinction: "Diễn tả mức độ xấp xỉ → くらい (gợi cảm giác nhẹ hơn ほど)."
  }
];
function deriveFromContent() {
  var _a, _b, _c, _d, _e;
  try {
    const all = ((_b = (_a = content).allItems) == null ? void 0 : _b.call(_a)) || [];
    const pairs = [];
    for (const item of all) {
      if (item.kind !== "grammar") continue;
      const compares = ((_d = (_c = content).getGrammarComparesWith) == null ? void 0 : _d.call(_c, item.key)) || [];
      for (const entry of compares) {
        if (!(entry == null ? void 0 : entry.partner) || !entry.distinction) continue;
        const exampleA = Array.isArray(item.examples) && ((_e = item.examples[0]) == null ? void 0 : _e.ja);
        if (!exampleA) continue;
        const token = item.title || item.key.replace(/^g:/, "");
        const masked = exampleA.includes(token) ? exampleA.replace(token, "___") : `${exampleA} ___`;
        pairs.push({
          id: `${item.key}::${entry.partnerKey}`,
          a: item.title || token,
          b: entry.partner.title || entry.partnerKey,
          sentence: masked,
          correct: "a",
          vi: item.examples[0].vi || "",
          distinction: entry.distinction
        });
      }
    }
    return pairs;
  } catch (e) {
    return [];
  }
}
function GrammarPatternDuelMode({ maxQuestions = 10, trainerId }) {
  const scoring = useScoreEngine(trainerId);
  const [sessionKey, setSessionKey] = reactExports.useState(0);
  const pool = reactExports.useMemo(() => {
    const fromContent = deriveFromContent();
    const bank = fromContent.length >= 5 ? fromContent : FALLBACK_PAIRS;
    return shuffleArray(bank).slice(0, maxQuestions);
  }, [maxQuestions, sessionKey]);
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [done, setDone] = reactExports.useState(false);
  const lockRef = reactExports.useRef(false);
  const pendingCorrectRef = reactExports.useRef(null);
  const commitPending = reactExports.useCallback((quality) => {
    if (pendingCorrectRef.current) {
      scoring.recordCorrect(pendingCorrectRef.current, quality);
      pendingCorrectRef.current = null;
    }
  }, [scoring]);
  const current = pool[qIdx];
  const [swap, setSwap] = reactExports.useState(() => Math.random() < 0.5);
  const displayedPair = reactExports.useMemo(() => {
    if (!current) return null;
    const left = swap ? "b" : "a";
    const right = swap ? "a" : "b";
    return {
      left: { key: left, label: current[left] },
      right: { key: right, label: current[right] }
    };
  }, [current, swap]);
  const handlePick = reactExports.useCallback((optKey) => {
    if (!current || selected || lockRef.current) return;
    lockRef.current = true;
    setSelected(optKey);
    const correct = optKey === current.correct;
    if (correct) {
      pendingCorrectRef.current = current;
      playSFX("correct");
    } else {
      scoring.recordWrong(current);
      playSFX("wrong");
    }
    const answeredText = current.sentence.replace("___", current[current.correct]);
    speakJP(answeredText);
  }, [current, selected, scoring]);
  const handleNext = reactExports.useCallback(() => {
    commitPending(void 0);
    lockRef.current = false;
    setSelected(null);
    setSwap(Math.random() < 0.5);
    if (qIdx + 1 >= pool.length) setDone(true);
    else setQIdx((q) => q + 1);
  }, [commitPending, qIdx, pool.length]);
  const handleGrade = reactExports.useCallback((quality) => {
    commitPending(quality);
    lockRef.current = false;
    setSelected(null);
    setSwap(Math.random() < 0.5);
    if (qIdx + 1 >= pool.length) setDone(true);
    else setQIdx((q) => q + 1);
  }, [commitPending, qIdx, pool.length]);
  const handleRestart = reactExports.useCallback(() => {
    commitPending(void 0);
    setSessionKey((k) => k + 1);
    lockRef.current = false;
    setQIdx(0);
    setSelected(null);
    setSwap(Math.random() < 0.5);
    setDone(false);
    scoring.reset();
  }, [commitPending, scoring]);
  if (!pool.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "⚔️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có cặp mẫu để so sánh. Hãy bổ sung comparesWith cho grammar items." })
    ] });
  }
  if (done) {
    commitPending(void 0);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModeResultsScreen,
      {
        scoring,
        getQuestion: (q) => q.sentence.replace("___", q[q.correct]),
        getCorrectInfo: (q) => ({ meaning: q.vi, extra: q.distinction }),
        onRestart: handleRestart
      }
    );
  }
  if (!current || !displayedPair) return null;
  const answered = selected !== null;
  const isCorrect = answered && selected === current.correct;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-instruction", style: { marginBottom: 8 }, children: [
      "⚔️ Câu ",
      qIdx + 1,
      "/",
      pool.length,
      " — Song đấu mẫu ngữ pháp"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "14px 16px", marginBottom: 12 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85rem", opacity: 0.7, marginBottom: 6 }, children: "Chọn mẫu phù hợp cho chỗ trống:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.6 }, children: current.sentence }),
      current.vi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.9rem", opacity: 0.7, marginTop: 4 }, children: [
        "💭 ",
        current.vi
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "n4-btn n4-btn-ghost n4-btn-sm",
          style: { marginTop: 6 },
          onClick: () => speakJP(current.sentence.replace("___", "〜")),
          children: "🔊 Nghe câu"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScaffoldingLayer, { text: current.sentence.replace("___", "〜"), minimal: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }, children: [displayedPair.left, displayedPair.right].map((opt) => {
      let bg = "var(--n4-surface, #fff)";
      let border = "var(--n4-border, #ddd)";
      if (answered) {
        if (opt.key === current.correct) {
          bg = "rgba(74,222,128,0.22)";
          border = "#4ade80";
        } else if (opt.key === selected) {
          bg = "rgba(248,113,113,0.22)";
          border = "#f87171";
        }
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => handlePick(opt.key),
          disabled: answered,
          style: {
            padding: "16px 10px",
            borderRadius: 12,
            background: bg,
            border: `2px solid ${border}`,
            cursor: answered ? "default" : "pointer",
            fontSize: "1.1rem",
            fontWeight: 700,
            minHeight: 72
          },
          children: opt.label
        },
        opt.key
      );
    }) }),
    answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuizFeedback,
      {
        isCorrect,
        correctAnswer: current[current.correct],
        userAnswer: current[selected],
        questionDisplay: current.sentence.replace("___", "〜"),
        correctInfo: { meaning: current.vi, extra: current.distinction },
        showQualityPicker: isCorrect,
        onQualityPick: handleGrade,
        onNext: handleNext,
        isLastQuestion: qIdx + 1 >= pool.length
      }
    )
  ] });
}
const MODES = [
  // ── Primary 3 (always visible as tabs) ──
  { id: "quiz", label: "Trắc nghiệm", icon: "❓" },
  { id: "cloze", label: "Điền chỗ", icon: "📝" },
  { id: "flashcard", label: "Thẻ lật", icon: "🃏" },
  // ── Overflow (behind ⋯ menu) ──
  { id: "particles", label: "Trợ từ", icon: "🔤" },
  { id: "fill-blank", label: "Điền mẫu", icon: "🍣" },
  { id: "true-false", label: "Đúng/Sai", icon: "⚖️" },
  { id: "scramble", label: "Nhận dạng", icon: "🔀" },
  { id: "sort", label: "Phân loại", icon: "🗂️" },
  { id: "grammar-vs", label: "So sánh", icon: "⚔️" },
  { id: "correction", label: "Sửa lỗi", icon: "🩺" },
  { id: "form-transform", label: "Biến đổi", icon: "🔄" },
  { id: "pattern-completion", label: "Hoàn thành", icon: "🧩" },
  { id: "pattern-duel", label: "Song đấu", icon: "🆚" },
  { id: "sort-timeline", label: "Thứ tự", icon: "⏱️" }
];
const stripMd = (s) => s.replace(/\*\*/g, "").replace(/^[-・•*]\s*/gm, "").trim();
const extractSection = (content2, keyword) => {
  const re = new RegExp(`\\*\\*${keyword}[:：]\\*\\*\\s*(.+)`, "i");
  const m = content2.match(re);
  return m ? stripMd(m[1]) : "";
};
const extractExamples = (content2) => {
  return content2.split("\n").filter((l) => /→/.test(l) && /[\u3000-\u9fff\u30a0-\u30ff]/.test(l)).slice(0, 3).map((l) => stripMd(l.replace(/\(.*?\)/g, "").trim())).filter(Boolean);
};
const grammarFront = grammarAccessors.getDisplay;
const grammarSubtitle = (item) => item._purpose || extractSection(item.content || "", "Cấu trúc") || "";
const grammarBack = (item) => {
  var _a;
  const sections = [];
  const structure = item._structure || extractSection(item.content || "", "Cấu trúc");
  if (structure) sections.push({ icon: "📐", label: "Cấu trúc", content: structure });
  const explanation = item._explanation || extractSection(item.content || "", "Giải thích");
  if (explanation) sections.push({ icon: "📖", label: "Giải thích", content: explanation });
  if ((_a = item._examples) == null ? void 0 : _a.length) {
    const exText = item._examples.slice(0, 3).map((ex) => `${ex.jp} → ${ex.vi}`).join("\n");
    sections.push({ icon: "💬", label: "Ví dụ", content: exText });
  } else {
    const exList = extractExamples(item.content || "");
    if (exList.length) sections.push({ icon: "💬", label: "Ví dụ", content: exList.join("\n") });
  }
  return {
    reading: item._purpose || "",
    meaning: explanation || extractSection(item.content || "", "Cấu trúc") || "",
    sections,
    subtitle: item._purpose || ""
  };
};
function GrammarArena({ mode = "quiz" }) {
  const storeDifficulty = useAppStore((s) => s.difficulty);
  const storeQuestionCount = useAppStore((s) => s.defaultQuestionCount);
  const setItemCount = useAppStore((s) => s.setDefaultQuestionCount);
  const [section, setSection] = reactExports.useState("all");
  const [difficulty, setDifficulty] = reactExports.useState(storeDifficulty || "normal");
  const studySession = useStudySession("grammar-arena");
  const baseItems = useGrammarItems(section);
  const items = studySession.filterItems(baseItems);
  const sections = useSectionList("grammar");
  const baseGrammarGameItems = useGrammarGameItems(50);
  const grammarGameItems = reactExports.useMemo(() => {
    var _a;
    if (studySession.isSessionActive && studySession.block && ((_a = studySession.block.itemKeys) == null ? void 0 : _a.length) > 0) {
      const allowedTitles = new Set(items.map((it) => it.title));
      const filtered = baseGrammarGameItems.filter((it) => allowedTitles.has(it.title));
      if (filtered.length >= 2) return filtered;
    }
    return baseGrammarGameItems;
  }, [studySession.isSessionActive, studySession.block, baseGrammarGameItems, items]);
  const rawItemCount = storeQuestionCount || 10;
  const itemCount = studySession.filterQuestionCount(rawItemCount);
  const maxQ = difficulty === "easy" ? Math.min(5, itemCount) : difficulty === "hard" ? Math.min(20, itemCount) : itemCount;
  const PARTICLES = ["ながら", "ので", "のに", "から", "まで", "より", "は", "が", "を", "に", "で", "と", "の", "へ", "も"];
  const PARTICLES_SORTED = [...PARTICLES].sort((a, b) => b.length - a.length);
  const particleQuizItems = reactExports.useMemo(() => {
    const result = [];
    const usedSentences = /* @__PURE__ */ new Set();
    for (const it of grammarGameItems) {
      const sentences = it.allExamples || [];
      for (const ex of sentences) {
        const jp = ex.jp || "";
        if (usedSentences.has(jp)) continue;
        for (const p of PARTICLES_SORTED) {
          const idx = jp.indexOf(p);
          if (idx > 0 && idx < jp.length - p.length) {
            const blanked = jp.substring(0, idx) + "＿＿" + jp.substring(idx + p.length);
            result.push({ sentence: blanked, particle: p, original: jp, grammar: it.title || "", vi: ex.vi || "" });
            usedSentences.add(jp);
            break;
          }
        }
      }
    }
    if (result.length < 10) {
      for (const it of items) {
        const examples = extractExamples(it.content || "");
        for (const ex of examples) {
          for (const p of PARTICLES) {
            const idx = ex.indexOf(p);
            if (idx > 0 && idx < ex.length - p.length) {
              const blanked = ex.substring(0, idx) + "＿＿" + ex.substring(idx + p.length);
              result.push({ sentence: blanked, particle: p, original: ex, grammar: it.title || "", vi: "" });
              break;
            }
          }
        }
      }
    }
    return result.sort(() => Math.random() - 0.5);
  }, [items, grammarGameItems]);
  const renderMode = () => {
    const hasGameItems = grammarGameItems.length >= 4;
    const quizItems = hasGameItems ? grammarGameItems : items;
    switch (mode) {
      case "quiz":
        if (hasGameItems) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            QuizMode,
            {
              items: quizItems.filter((it) => it.sentence),
              getQuestion: (it) => it.sentence,
              getAnswer: (it) => it.title,
              getQuestionDisplay: (it) => it.sentence,
              getCorrectInfo: (it) => ({
                reading: it.vi || "",
                meaning: it.explanation || it.purpose || ""
              }),
              getSrsKey: grammarAccessors.getKey,
              getSection: grammarAccessors.getSection,
              optionCount: difficulty === "easy" ? 3 : difficulty === "hard" ? 5 : 4,
              maxQuestions: maxQ,
              speakOnShow: true,
              difficulty,
              srsAware: true
            }
          );
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items,
            getQuestion: (it) => it.title || "",
            getAnswer: (it) => extractSection(it.content || "", "Giải thích") || it.title,
            getCorrectInfo: (it) => ({ reading: it.id || "", meaning: extractSection(it.content || "", "Giải thích") }),
            getSrsKey: grammarAccessors.getKey,
            getSection: grammarAccessors.getSection,
            optionCount: 4,
            maxQuestions: maxQ,
            speakOnShow: false,
            difficulty,
            srsAware: true
          }
        );
      case "fill-blank":
        if (hasGameItems) {
          const fillItems = quizItems.filter((it) => it.sentenceBlank && it.blankAnswer);
          if (fillItems.length >= 4) {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              FillBlankMode,
              {
                items: fillItems,
                getSentence: (it) => it.sentenceBlank,
                getBlankWord: (it) => it.blankAnswer,
                getHint: (it) => it.vi || it.explanation || "",
                getCorrectInfo: (it) => ({
                  reading: it.sentence || "",
                  meaning: `${it.title}: ${it.explanation || it.vi || ""}`
                }),
                getSrsKey: grammarAccessors.getKey,
                maxQuestions: maxQ,
                srsAware: true,
                trainerId: "grammar-arena"
              }
            );
          }
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items,
            getQuestion: (it) => it.title || "",
            getAnswer: (it) => extractSection(it.content || "", "Giải thích") || it.title,
            getCorrectInfo: (it) => ({ reading: it.id || "", meaning: extractSection(it.content || "", "Giải thích") }),
            getSrsKey: grammarAccessors.getKey,
            getSection: grammarAccessors.getSection,
            optionCount: 4,
            maxQuestions: maxQ,
            speakOnShow: false,
            difficulty,
            srsAware: true
          }
        );
      case "true-false":
        if (hasGameItems) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            TrueFalseMode,
            {
              items: quizItems.filter((it) => it.sentence && it.vi),
              getDisplay: (it) => it.sentence,
              getMeaning: (it) => it.vi,
              getCorrectInfo: (it) => ({
                reading: it.romaji || "",
                meaning: `${it.title}: ${it.explanation || ""}`
              }),
              getSrsKey: grammarAccessors.getKey,
              maxQuestions: maxQ,
              srsAware: true
            }
          );
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrueFalseMode,
          {
            items,
            getDisplay: (it) => it.title || "",
            getMeaning: (it) => extractSection(it.content || "", "Giải thích") || "",
            getCorrectInfo: (it) => ({ reading: it.id || "", meaning: "" }),
            getSrsKey: grammarAccessors.getKey,
            maxQuestions: maxQ,
            srsAware: true
          }
        );
      case "flashcard":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          FlashcardMode,
          {
            items: items.length > 0 ? items : quizItems,
            getFront: grammarFront,
            getBack: grammarBack,
            getSubtitle: grammarSubtitle,
            getSrsKey: grammarAccessors.getKey,
            cardType: "grammar",
            maxCards: maxQ,
            srsAware: true
          }
        );
      case "particles":
        if (particleQuizItems.length < 4) {
          const fallbackItems = quizItems.filter((it) => it.sentence);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            QuizMode,
            {
              items: fallbackItems.length >= 2 ? fallbackItems : items,
              getQuestion: (it) => it.sentence || it.title,
              getAnswer: (it) => it.title || it.vi,
              getCorrectInfo: (it) => ({ reading: it.vi || "", meaning: it.explanation || "" }),
              optionCount: 4,
              maxQuestions: maxQ,
              speakOnShow: false,
              difficulty
            }
          );
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items: particleQuizItems,
            getQuestion: (it) => it.sentence,
            getAnswer: (it) => it.particle,
            getQuestionDisplay: (it) => `📝 ${it.sentence}`,
            getCorrectInfo: (it) => ({
              reading: it.original,
              meaning: it.vi ? `${it.grammar} — ${it.vi}` : `Ngữ pháp: ${it.grammar}`
            }),
            optionCount: 4,
            maxQuestions: Math.min(maxQ, particleQuizItems.length),
            speakOnShow: false,
            difficulty
          }
        );
      case "cloze":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          GrammarClozeMode,
          {
            items: grammarGameItems.length >= 4 ? grammarGameItems : items,
            maxQuestions: maxQ,
            difficulty
          }
        );
      case "sort":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(GrammarSortMode, { items, maxQuestions: maxQ, subMode: "classify" });
      case "sort-timeline":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(GrammarSortMode, { items, maxQuestions: maxQ, subMode: "timeline" });
      case "grammar-vs":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(GrammarVsMode, { items: grammarGameItems.length >= 4 ? grammarGameItems : items, maxQuestions: maxQ });
      case "correction":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(GrammarCorrectionMode, { items, maxQuestions: maxQ });
      case "form-transform":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(FormTransformMode, { items, maxQuestions: maxQ });
      case "pattern-completion":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(PatternCompletionMode, { items, maxQuestions: maxQ });
      case "pattern-duel":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(GrammarPatternDuelMode, { maxQuestions: maxQ });
      case "scramble":
        if (hasGameItems) {
          const scrambleItems = quizItems.filter((it) => it.sentence);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            QuizMode,
            {
              items: scrambleItems,
              getQuestion: (it) => it.sentence,
              getAnswer: (it) => it.title,
              getQuestionDisplay: (it) => `🔀 ${it.sentence}`,
              getCorrectInfo: (it) => ({
                reading: it.vi || "",
                meaning: it.explanation || ""
              }),
              getSrsKey: grammarAccessors.getKey,
              getSection: grammarAccessors.getSection,
              optionCount: 4,
              maxQuestions: maxQ,
              speakOnShow: true,
              difficulty,
              srsAware: true
            }
          );
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items,
            getQuestion: (it) => extractExamples(it.content || "")[0] || it.title,
            getAnswer: (it) => it.title || "",
            getCorrectInfo: (it) => ({ reading: it.title || "", meaning: "" }),
            getSrsKey: grammarAccessors.getKey,
            getSection: grammarAccessors.getSection,
            optionCount: 4,
            maxQuestions: maxQ,
            speakOnShow: false,
            difficulty,
            srsAware: true
          }
        );
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items: quizItems.filter((it) => it.sentence),
            getQuestion: (it) => it.sentence || it.title,
            getAnswer: (it) => it.title,
            getCorrectInfo: (it) => ({ reading: it.vi || "", meaning: it.explanation || "" }),
            getSrsKey: grammarAccessors.getKey,
            getSection: grammarAccessors.getSection,
            optionCount: 4,
            maxQuestions: maxQ,
            speakOnShow: false,
            difficulty,
            srsAware: true
          }
        );
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerContext.Provider, { value: "grammar-arena", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    GameShell,
    {
      trainerId: "grammar-arena",
      mode,
      icon: "⚔️",
      title: "Đấu trường ngữ pháp",
      color: "var(--n4-cat-grammar)",
      hearts: 3,
      rhythm: { warmup: 3, bossAt: "mid", bossCount: 1, cooldown: 1, totalItems: itemCount },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrainerTopBar,
          {
            trainerId: "grammar-arena",
            activeMode: mode,
            modes: MODES,
            sections,
            section,
            onSectionChange: setSection,
            difficulty,
            onDifficultyChange: setDifficulty,
            itemCount,
            onItemCountChange: setItemCount
          }
        ),
        renderMode()
      ]
    }
  ) });
}
export {
  MODES,
  GrammarArena as default
};
