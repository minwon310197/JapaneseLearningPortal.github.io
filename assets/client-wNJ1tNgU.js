import { i as isOnline } from "./api-BAg1LJRR.js";
import { h as useLearningStore, a as useDataStore, s as safeGetItem, S as STORAGE_KEYS, _ as getSrsLevel, az as parseLearningKey, v as supabase } from "./index-BEJSIlFS.js";
function summarizeLessonProgress(progress) {
  if (!progress) return "chưa có dữ liệu tiến độ";
  const parts = [];
  if (progress.vocabViewed) parts.push("đã xem từ vựng");
  if (progress.grammarViewed) parts.push("đã xem ngữ pháp");
  if (typeof progress.quizScore === "number") parts.push(`quiz tốt nhất ${progress.quizScore}%`);
  return parts.length ? parts.join(", ") : "chưa bắt đầu rõ ràng";
}
function buildLearnerProfile() {
  const s = useLearningStore.getState();
  const { xp, level, streak, maxCombo, todayCorrect, todayWrong, trainerStats, srs, bookmarks, studyHistory } = s;
  const catAccuracy = (ids) => {
    let c = 0, t = 0;
    ids.forEach((id) => {
      const st = trainerStats[id];
      if (st) {
        c += st.correct;
        t += st.total;
      }
    });
    return t > 0 ? { accuracy: Math.round(c / t * 100), correct: c, total: t } : null;
  };
  const vocabAcc = catAccuracy(["vocab-dojo"]);
  const kanjiAcc = catAccuracy(["kanji-academy"]);
  const grammarAcc = catAccuracy(["grammar-arena"]);
  const listeningAcc = catAccuracy(["listening-lab"]);
  const readingAcc = catAccuracy(["reading-room"]);
  const srsEntries = Object.entries(srs || {});
  const srsTotal = srsEntries.length;
  const srsNew = srsEntries.filter(([, state]) => getSrsLevel(state) === 0).length;
  const srsLearning = srsEntries.filter(([, state]) => getSrsLevel(state) >= 1 && getSrsLevel(state) <= 2).length;
  const srsMastered = srsEntries.filter(([, state]) => getSrsLevel(state) >= 3).length;
  const historyEntries = Object.entries(studyHistory || {});
  const studyDays = historyEntries.filter(([, e]) => e && (typeof e === "number" ? e > 0 : (e.total || 0) > 0)).length;
  const totalQuestions = historyEntries.reduce((sum, [, e]) => {
    if (!e) return sum;
    return sum + (typeof e === "number" ? e : e.total || 0);
  }, 0);
  const totalCorrectAll = historyEntries.reduce((sum, [, e]) => {
    if (!e || typeof e === "number") return sum;
    return sum + (e.correct || 0);
  }, 0);
  const totalPlays = Object.values(trainerStats || {}).reduce((sum, st) => sum + (st.plays || 0), 0);
  const bmCount = Object.keys(bookmarks || {}).length;
  const weakKeys = srsEntries.filter(([, state]) => getSrsLevel(state) <= 2).map(([k]) => k);
  const weakSample = weakKeys.slice(0, 10).map((k) => {
    const parts = k.split("-");
    return parts.length > 2 ? parts.slice(2).join("-") : k;
  });
  const todayTotal = todayCorrect + todayWrong;
  const todayAcc = todayTotal > 0 ? Math.round(todayCorrect / todayTotal * 100) : null;
  let profile = `Level ${level} (${xp} XP). Streak: ${streak || 0} ngày.`;
  profile += ` SRS: ${srsTotal} mục (Mới: ${srsNew}, Đang học: ${srsLearning}, Thuộc: ${srsMastered}).`;
  profile += ` Tổng câu đã trả lời: ${totalQuestions} (${totalCorrectAll} đúng). Ngày học: ${studyDays}. Lần chơi: ${totalPlays}.`;
  profile += ` Bookmarks: ${bmCount}.`;
  if (maxCombo > 0) profile += ` Combo cao nhất: ${maxCombo}.`;
  if (todayAcc !== null) profile += ` Hôm nay: ${todayCorrect}/${todayTotal} đúng (${todayAcc}%).`;
  const cats = [];
  if (vocabAcc) cats.push(`Từ vựng ${vocabAcc.accuracy}% (${vocabAcc.correct}/${vocabAcc.total})`);
  if (kanjiAcc) cats.push(`Kanji ${kanjiAcc.accuracy}% (${kanjiAcc.correct}/${kanjiAcc.total})`);
  if (grammarAcc) cats.push(`Ngữ pháp ${grammarAcc.accuracy}% (${grammarAcc.correct}/${grammarAcc.total})`);
  if (listeningAcc) cats.push(`Nghe ${listeningAcc.accuracy}% (${listeningAcc.correct}/${listeningAcc.total})`);
  if (readingAcc) cats.push(`Đọc ${readingAcc.accuracy}% (${readingAcc.correct}/${readingAcc.total})`);
  if (cats.length) profile += ` Accuracy theo loại: ${cats.join(", ")}.`;
  else profile += ` Chưa có accuracy theo loại bài tập.`;
  if (weakSample.length) profile += ` Điểm yếu: ${weakSample.join(", ")}.`;
  return profile;
}
function getLastMinnaLessonContext() {
  var _a;
  const data = useDataStore.getState();
  const lastLessonRaw = safeGetItem(STORAGE_KEYS.LAST_MINNA_LESSON);
  const lastLesson = Number.parseInt(lastLessonRaw || "", 10);
  if (!Number.isFinite(lastLesson)) return null;
  const lessonKey = String(lastLesson);
  return {
    lessonNum: lastLesson,
    lessonMeta: (data.minnaLessons || []).find((lesson, index) => {
      var _a2;
      return Number((_a2 = lesson == null ? void 0 : lesson.l) != null ? _a2 : index + 1) === lastLesson;
    }) || null,
    lessonData: ((_a = data.minna) == null ? void 0 : _a[lessonKey]) || null
  };
}
function normalizeWeakSrsLabel(key) {
  return parseLearningKey(key);
}
function getWeakStudyItems(type = "mixed", limit = 8) {
  var _a;
  const learning = useLearningStore.getState();
  const srsEntries = Object.entries(learning.srs || {}).map(([key, state]) => ({ key, level: getSrsLevel(state), normalized: normalizeWeakSrsLabel(key) })).filter((entry) => {
    var _a2;
    return (_a2 = entry.normalized) == null ? void 0 : _a2.label;
  }).sort((a, b) => a.level - b.level);
  const allowType = (entryType) => type === "mixed" || entryType === type || entryType === "mixed";
  const picks = [];
  const seen = /* @__PURE__ */ new Set();
  srsEntries.forEach((entry) => {
    if (!allowType(entry.normalized.type)) return;
    if (entry.level > 2) return;
    if (seen.has(entry.normalized.label)) return;
    seen.add(entry.normalized.label);
    picks.push(entry.normalized.label);
  });
  if ((type === "grammar" || type === "mixed") && picks.length < limit) {
    const minnaCtx = getLastMinnaLessonContext();
    const grammarItems = ((_a = minnaCtx == null ? void 0 : minnaCtx.lessonData) == null ? void 0 : _a.grammarItems) || [];
    grammarItems.forEach((item) => {
      const label = (item == null ? void 0 : item.title) || (item == null ? void 0 : item.pattern) || (item == null ? void 0 : item.meaning) || "";
      if (!label || seen.has(label)) return;
      seen.add(label);
      picks.push(label);
    });
  }
  return picks.slice(0, limit);
}
function buildLearnerContextBlock() {
  var _a, _b, _c;
  const learning = useLearningStore.getState();
  useDataStore.getState();
  const profile = buildLearnerProfile();
  const focus = safeGetItem(STORAGE_KEYS.ONBOARDING_FOCUS);
  const lastLessonContext = getLastMinnaLessonContext();
  const lastLesson = lastLessonContext == null ? void 0 : lastLessonContext.lessonNum;
  const lessonMeta = lastLessonContext == null ? void 0 : lastLessonContext.lessonMeta;
  const lessonData = lastLessonContext == null ? void 0 : lastLessonContext.lessonData;
  const lessonKey = lastLesson ? String(lastLesson) : null;
  const lessonProgress = lessonKey ? (_a = learning.lessonProgress) == null ? void 0 : _a[lessonKey] : null;
  const weakItems = Object.entries(learning.srs || {}).filter(([, state]) => getSrsLevel(state) <= 2).slice(0, 5).map(([key]) => {
    const parts = key.split("-");
    return parts.length > 2 ? parts.slice(2).join("-") : key;
  });
  const lines = [profile];
  if (focus) lines.push(`Ưu tiên học tập đã chọn: ${focus}.`);
  if (Number.isFinite(lastLesson)) {
    const title = (lessonMeta == null ? void 0 : lessonMeta.t) || (lessonMeta == null ? void 0 : lessonMeta.title) || (lessonMeta == null ? void 0 : lessonMeta.vi) || "";
    const counts = lessonData ? ` (${((_b = lessonData.vocab) == null ? void 0 : _b.length) || 0} từ, ${((_c = lessonData.grammarItems) == null ? void 0 : _c.length) || 0} mẫu)` : "";
    lines.push(`Bài Minna gần nhất: Bài ${lastLesson}${title ? ` - ${title}` : ""}${counts}.`);
    lines.push(`Tiến độ bài gần nhất: ${summarizeLessonProgress(lessonProgress)}.`);
  }
  if (learning.maxCombo > 0) lines.push(`Combo cao nhất gần đây: ${learning.maxCombo}.`);
  if (weakItems.length) lines.push(`5 điểm yếu cần ưu tiên: ${weakItems.join(", ")}.`);
  return lines.join("\n");
}
const ENDPOINTS = {
  groq: "https://api.groq.com/openai/v1/chat/completions",
  openrouter: "https://openrouter.ai/api/v1/chat/completions",
  openai: "https://api.openai.com/v1/chat/completions"
};
const DEFAULT_MODELS = {
  groq: "llama-3.3-70b-versatile",
  openrouter: "meta-llama/llama-3.3-70b-instruct:free",
  openai: "gpt-3.5-turbo"
};
const GROQ_FALLBACKS = [
  "llama-3.3-70b-versatile",
  "llama-3.1-8b-instant",
  "gemma2-9b-it",
  "mixtral-8x7b-32768"
];
const OPENROUTER_FALLBACKS = [
  "openrouter/free",
  "meta-llama/llama-3.3-70b-instruct:free",
  "google/gemma-3-27b-it:free",
  "mistralai/mistral-small-3.1-24b-instruct:free",
  "meta-llama/llama-3.2-3b-instruct:free"
];
const SYSTEM_PROMPT = `You are a helpful Japanese language tutor for a Vietnamese student studying JLPT N4.
- Always explain in Vietnamese when possible
- Give example sentences in Japanese with Vietnamese translations
- Correct mistakes gently and explain why
- Use simple, clear Vietnamese explanations
- When teaching grammar, provide the pattern, meaning, and 2-3 examples
- When asked about vocabulary, include reading (hiragana), meaning, and usage
- The student is a native Vietnamese speaker, so compare with Vietnamese when helpful
- If learner context is provided, adapt examples and advice to that context naturally`;
let _cooldownUntil = 0;
const COOLDOWN_DURATION = 6e4;
let _inFlight = false;
function getCooldownRemaining() {
  const now = Date.now();
  if (_cooldownUntil > now) return Math.ceil((_cooldownUntil - now) / 1e3);
  return 0;
}
function _activateCooldown(durationMs) {
  _cooldownUntil = Date.now() + durationMs;
}
function detectProvider(apiKey) {
  if (!apiKey) return null;
  if (apiKey.startsWith("gsk_")) return "groq";
  if (apiKey.startsWith("sk-or-")) return "openrouter";
  if (apiKey.startsWith("sk-")) return "openai";
  return "groq";
}
function isAIAvailable(apiKey) {
  return Boolean(apiKey) && isOnline();
}
async function getAIKeyStatus() {
  return { status: "proxy", provider: "server" };
}
let _chatWithAIOverride = null;
function _setChatWithAIForTests(fn) {
  _chatWithAIOverride = fn;
}
async function chatWithAI(message, apiKey, options = {}) {
  var _a, _b, _c, _d, _e, _f, _g;
  if (_chatWithAIOverride) {
    return _chatWithAIOverride(message, apiKey, options);
  }
  if (!apiKey || !isOnline()) throw new Error("Cần đăng nhập và kết nối internet để dùng AI.");
  const cooldownLeft = getCooldownRemaining();
  if (cooldownLeft > 0) {
    throw new Error(`⏳ Đang trong thời gian chờ (${cooldownLeft}s). Vui lòng đợi trước khi gửi lại.`);
  }
  if (_inFlight) {
    throw new Error("Đang xử lý yêu cầu trước đó, vui lòng đợi.");
  }
  _inFlight = true;
  try {
    const shouldIncludeLearnerContext = (_a = options.includeLearnerContext) != null ? _a : !options.jsonMode;
    const learnerContext = shouldIncludeLearnerContext ? buildLearnerContextBlock() : "";
    const systemPrompt = learnerContext ? `${options.systemPrompt || SYSTEM_PROMPT}

Learner context:
${learnerContext}

Use this context when it helps. Keep the answer concise, accurate, and tailored to the learner's current stage.` : options.systemPrompt || SYSTEM_PROMPT;
    const messages = [
      { role: "system", content: systemPrompt },
      ...options.history || [],
      { role: "user", content: message }
    ];
    if ((_b = options.signal) == null ? void 0 : _b.aborted) throw new Error("Đã hủy bởi người dùng.");
    const controller = new AbortController();
    const abortFromCaller = () => controller.abort();
    (_c = options.signal) == null ? void 0 : _c.addEventListener("abort", abortFromCaller, { once: true });
    const timeoutId = setTimeout(() => controller.abort(), options.timeout || 45e3);
    let data;
    let error;
    try {
      ({ data, error } = await supabase.functions.invoke("ai-proxy", {
        body: {
          messages,
          model: options.model || null,
          maxTokens: options.maxTokens || 1e3,
          temperature: (_d = options.temperature) != null ? _d : 0.7,
          jsonMode: Boolean(options.jsonMode)
        },
        signal: controller.signal
      }));
    } catch (invokeError) {
      if (controller.signal.aborted) throw new Error(((_e = options.signal) == null ? void 0 : _e.aborted) ? "Đã hủy bởi người dùng." : "Hết thời gian chờ AI.");
      throw invokeError;
    } finally {
      clearTimeout(timeoutId);
      (_f = options.signal) == null ? void 0 : _f.removeEventListener("abort", abortFromCaller);
    }
    if (error) {
      const status = (_g = error == null ? void 0 : error.context) == null ? void 0 : _g.status;
      if (status === 429) _activateCooldown(COOLDOWN_DURATION);
      throw new Error(status === 429 ? "AI đang quá tải. Vui lòng chờ một phút rồi thử lại." : "Không thể kết nối dịch vụ AI an toàn. Vui lòng thử lại sau.");
    }
    if (typeof (data == null ? void 0 : data.text) !== "string" || !data.text.trim()) {
      throw new Error("Dịch vụ AI không trả về nội dung hợp lệ.");
    }
    return data.text;
  } finally {
    _inFlight = false;
  }
}
export {
  DEFAULT_MODELS as D,
  ENDPOINTS as E,
  GROQ_FALLBACKS as G,
  OPENROUTER_FALLBACKS as O,
  SYSTEM_PROMPT as S,
  _activateCooldown as _,
  getWeakStudyItems as a,
  buildLearnerProfile as b,
  chatWithAI as c,
  _chatWithAIOverride as d,
  _setChatWithAIForTests as e,
  buildLearnerContextBlock as f,
  getCooldownRemaining as g,
  detectProvider as h,
  getAIKeyStatus as i,
  getLastMinnaLessonContext as j,
  isAIAvailable as k,
  normalizeWeakSrsLabel as n,
  summarizeLessonProgress as s
};
