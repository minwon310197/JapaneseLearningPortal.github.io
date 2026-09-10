import { bC as recordRewardEntitlement, h as useLearningStore, bD as ensureLearningOwner, bE as ensureCanonicalContentReady, bF as createWorldLearningJournal, bG as applyWorldLearningCompletion, aM as srs, bH as applyWorldLearningResult, bI as applyMasteryReceipt, bb as normalizeSrsEntry, bJ as toLegacySrsEntry, u as useAppStore, F as content, b as stopSpeech, bK as assertLearningOwnerReady, f as isMuted, L as speakJP } from "./index-BEJSIlFS.js";
import { s as selectDistractors, b as getQuestionKey, p as parseExample, i as inferKind, c as buildQuestion, d as accessorsFor, g as getFirstExample } from "./index-B2ai8n3C.js";
import { F as FIELD_ACTIVITIES, r as resolveWorldActivity } from "./WorldExperience-CQ_uhNin.js";
import { W as WORLD_ASSESSED_TOOL_IDS } from "./world-tool-destinations-BAVvWbat.js";
import "./vendor-react-BUL8WuXG.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./utils-zpwy_og2.js";
import "./registry-BAotxlgH.js";
import "./learning-tools-CW2TYh-A.js";
import "./ai-feature-catalog-BVQfq9eZ.js";
import "./WorldSurfaceContext-CUHCnPUQ.js";
const clone = (value) => JSON.parse(JSON.stringify(value));
const signature = (value) => JSON.stringify(Object.fromEntries(Object.entries(value).filter(([, v]) => v !== void 0).sort(([a], [b]) => a.localeCompare(b))));
const commands = /* @__PURE__ */ new Set(["start", "next", "answer", "hint", "reveal", "pronounce", "finish", "cancel", "resume"]);
class LearningSessionService {
  constructor({ journal, loadQuestions, resolveActivity, applyAssessment, applyCompletion = async () => {
  }, enqueueReward, emit = () => {
  }, pronounce: pronounce2 = async () => {
  }, newId = () => crypto.randomUUID(), assertOwner = () => {
  }, now = Date.now }) {
    Object.assign(this, { journal, loadQuestions, resolveActivity, applyAssessment, applyCompletion, enqueueReward, emit, pronounce: pronounce2, newId, assertOwner, now });
    this.closed = false;
    this.queue = Promise.resolve();
  }
  dispose() {
    this.closed = true;
  }
  request(payload, context = {}) {
    const run = this.queue.then(() => this.execute(payload, context));
    this.queue = run.catch(() => {
    });
    return run;
  }
  state(session) {
    const q = session.questions[session.index];
    const answered = session.answers[q.id];
    const show = !!answered || !!session.assisted[q.id];
    const sentence = q.interaction === "sentence";
    return {
      sessionId: session.id,
      activityId: session.activityId,
      title: session.title,
      status: session.status,
      sequence: session.sequence,
      index: session.index,
      total: session.questions.length,
      question: {
        id: q.id,
        itemKey: q.itemKey,
        interaction: sentence ? "sentence" : "choice",
        prompt: q.listening ? "Nghe tiếng Nhật rồi chọn đáp án." : q.prompt,
        ...sentence ? { tokens: q.tokens } : { choices: q.choices },
        ...!sentence && (show || !q.listening) ? { reading: q.listening ? q.speechText : q.reading } : {}
      },
      ...answered ? { result: { correct: answered.correct, answerLabel: q.answerLabel, explanation: q.explanation, reading: q.reading, assisted: answered.assisted } } : {},
      ...session.assisted[q.id] && !answered ? { hint: q.hint || q.reading || q.prompt } : {}
    };
  }
  async recover(doc) {
    const session = doc.session;
    if (!session) return;
    for (const receipt of Object.values(session.answers)) {
      if (receipt.projected) continue;
      this.assertOwner();
      await this.applyAssessment(clone(receipt));
      this.assertOwner();
      receipt.projected = true;
      this.journal.write(doc);
    }
    if (session.reward && !session.rewardQueued) {
      this.assertOwner();
      await this.applyCompletion({ id: `completion:${session.id}`, activityId: session.activityId, correct: Object.values(session.answers).filter((a) => a.independentCorrect).length, total: 5, at: session.finishedAt, durationMs: Math.max(0, session.finishedAt - session.startedAt) });
      this.assertOwner();
      await this.enqueueReward(clone(session.reward));
      this.assertOwner();
      session.rewardQueued = true;
      session.status = "completed";
      this.journal.write(doc);
    }
  }
  async execute(payload, context) {
    if (this.closed) throw new Error("Learning session disposed");
    this.assertOwner();
    if (!payload || !commands.has(payload.command) || typeof payload.requestId !== "string" || !payload.requestId || payload.requestId.length > 200) throw new Error("Invalid learning request");
    const doc = this.journal.read();
    const sig = signature({ ...payload, _heroId: context.heroId });
    const existing = doc.requests[payload.requestId];
    if (existing && existing.signature !== sig) throw new Error("Mismatched request reuse");
    if (existing) {
      await this.recover(doc);
      const reply2 = existing.reply || this.state(doc.session);
      if (!existing.reply) {
        existing.reply = reply2;
        this.journal.write(doc);
      }
      this.emit("study_state", clone(reply2));
      return clone(reply2);
    }
    if (Object.values(doc.requests).some((r) => !r.reply)) {
      await this.recover(doc);
      for (const request of Object.values(doc.requests)) if (!request.reply) request.reply = this.state(doc.session);
      this.journal.write(doc);
    }
    let session = doc.session;
    if (payload.command === "start") {
      if (session && !["completed", "cancelled"].includes(session.status)) {
        if (session.activityId !== payload.activityId || session.heroId !== context.heroId) {
          this.emit("study_state", this.state(session));
          throw new Error("Tiếp tục hoặc tạm nghỉ phiên học đang mở trước.");
        }
        doc.requests[payload.requestId] = { signature: sig, reply: this.state(session) };
        this.journal.write(doc);
        this.emit("study_state", this.state(session));
        return this.state(session);
      }
      const activity = this.resolveActivity(payload.activityId);
      if (!activity) throw new Error("Unknown world learning activity");
      if (!context.heroId) throw new Error("Hero is required");
      const questions = await this.loadQuestions(activity);
      this.assertOwner();
      if (questions.length !== 5) throw new Error("Không đủ năm câu hỏi phù hợp. Hãy đổi phạm vi bài học.");
      session = { id: this.newId(), activityId: activity.id, title: activity.label, heroId: context.heroId, recommendedLevel: Math.max(1, Math.min(50, Math.floor(context.recommendedLevel || 1))), questions, answers: {}, assisted: {}, sequence: 0, index: 0, status: "active", startedAt: this.now() };
      doc.session = session;
    } else {
      if (!session || payload.sessionId !== session.id || context.heroId !== session.heroId) throw new Error("Invalid active learning session");
      const q = session.questions[session.index];
      if (payload.command !== "resume" && (payload.sequence !== session.sequence || payload.questionId !== q.id)) throw new Error("Stale question or sequence");
      if (["completed", "cancelled"].includes(session.status) && payload.command !== "resume") throw new Error("Learning session is closed");
      if (payload.command === "answer" || payload.command === "reveal") {
        if (session.answers[q.id] || session.status !== "active") throw new Error("Question already assessed");
        if (payload.command === "answer") {
          if (q.interaction === "sentence") {
            const ids = payload.tokenIds;
            if (!Array.isArray(ids) || ids.length !== q.tokens.length || new Set(ids).size !== q.tokens.length || ids.some((id) => typeof id !== "string" || !q.tokens.some((t) => t.id === id))) throw new Error("Invalid sentence token permutation");
          } else if (!q.choices.some((c) => c.id === payload.choiceId)) throw new Error("Invalid answer choice");
        }
        const assisted = !!session.assisted[q.id] || payload.command === "reveal";
        const correct = payload.command === "answer" && (q.interaction === "sentence" ? payload.tokenIds.map((id) => q.tokens.find((t) => t.id === id).label).join("") === q.answerLabel : payload.choiceId === q.correctChoiceId);
        session.answers[q.id] = { id: `${session.id}:${q.id}`, sessionId: session.id, itemKey: q.itemKey, legacyKey: q.legacyKey, domain: q.domain, activityId: session.activityId, correct, assisted, independentCorrect: correct && !assisted, at: this.now(), projected: false };
        session.status = "feedback";
      } else if (payload.command === "hint") {
        if (session.status !== "active") throw new Error("Question already assessed");
        session.assisted[q.id] = true;
      } else if (payload.command === "next") {
        if (session.status !== "feedback" || session.index >= 4) throw new Error("Answer this question or finish the session");
        session.index++;
        session.status = "active";
      } else if (payload.command === "finish") {
        if (Object.keys(session.answers).length !== 5) throw new Error("Complete five assessments before finishing");
        session.finishedAt = this.now();
        session.reward = { id: `study:${session.id}`, heroId: session.heroId, activityId: session.activityId, recommendedLevel: session.recommendedLevel, itemCount: 5 };
        recordRewardEntitlement(doc, session.reward);
      } else if (payload.command === "cancel") session.status = "cancelled";
      else if (payload.command === "pronounce") await this.pronounce(q.speechText);
      if (payload.command !== "resume") session.sequence++;
    }
    doc.requests[payload.requestId] = { signature: sig };
    this.assertOwner();
    this.journal.write(doc);
    await this.recover(doc);
    const reply = this.state(session);
    doc.requests[payload.requestId].reply = reply;
    this.journal.write(doc);
    this.emit("study_state", clone(reply));
    return clone(reply);
  }
}
const MARKET_OBJECTS = Object.freeze({ "v:水": "water", "v:本": "book", "v:傘": "umbrella", "v:靴": "shoes", "v:かばん": "bag", "v:魚": "fish", "v:卵": "egg", "v:パン": "bread", "v:りんご": "apple", "v:花": "flower", "v:帽子": "hat", "v:時計": "clock", "v:箱": "box", "v:牛乳": "milk", "v:お茶": "tea", "v:机": "table" });
function adaptWorldQuestion(item, listening = false) {
  const base = buildQuestion(item), a = accessorsFor(item), ex = getFirstExample(item);
  if (!/^[vkg]:.+/.test(base.itemKey || "")) return null;
  const grammar = base.kind === "grammar";
  const prompt = grammar ? ex == null ? void 0 : ex.jp : base.prompt;
  const answer = grammar ? ex == null ? void 0 : ex.vi : base.answer;
  if (!prompt || !answer || prompt.trim() === answer.trim()) return null;
  const reading = a.getReading(item);
  const speechText = grammar ? ex.jp : base.kind === "vocab" ? reading || prompt : prompt;
  const legacyKey = base.itemKey.replace(/^v:/, "vocab:").replace(/^k:/, "kanji:").replace(/^g:/, "grammar:");
  return {
    id: base.itemKey,
    itemKey: base.itemKey,
    legacyKey,
    domain: listening ? "listening" : base.kind,
    prompt,
    answerLabel: answer,
    reading: grammar ? ex.romaji : reading,
    speechText,
    listening,
    explanation: [grammar ? item.usage : answer, ex == null ? void 0 : ex.jp, ex == null ? void 0 : ex.romaji, ex == null ? void 0 : ex.vi].filter(Boolean).join(" — "),
    hint: listening ? speechText : grammar ? item.structure : reading || prompt
  };
}
function buildWorldQuestions(items, { listening = false, market = false, random = Math.random } = {}) {
  const pool = items.filter((item) => !market || MARKET_OBJECTS[item.key]).map((item) => adaptWorldQuestion(item, listening)).filter(Boolean);
  return pool.map((q) => {
    const wrongs = selectDistractors(q, pool.filter((p) => p.domain === q.domain && p.prompt !== q.prompt && (!listening || p.speechText !== q.speechText)), { count: 3, strategy: "generic", getAnswer: (p) => p.answerLabel });
    if (wrongs.length < 2) return null;
    const labels = [q.answerLabel, ...wrongs];
    for (let i = labels.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [labels[i], labels[j]] = [labels[j], labels[i]];
    }
    const choices = labels.map((label, i) => ({ id: `choice-${i}`, label, ...market ? { objectKind: MARKET_OBJECTS[pool.find((p) => p.answerLabel === label).itemKey] } : {} }));
    return { ...q, interaction: "choice", choices, correctChoiceId: choices.find((c) => c.label === q.answerLabel).id };
  }).filter(Boolean).slice(0, 5);
}
function sentenceChunks(japanese) {
  if (typeof Intl.Segmenter !== "function" || /[()（）\[\]【】\n:=→]|[a-z]/i.test(japanese)) return [];
  const words = [];
  let prefix = "";
  for (const part of new Intl.Segmenter("ja", { granularity: "word" }).segment(japanese)) {
    if (part.isWordLike) {
      words.push(prefix + part.segment);
      prefix = "";
    } else if (words.length) words[words.length - 1] += part.segment;
    else prefix += part.segment;
  }
  if (words.length < 3) return [];
  const count = Math.min(6, words.length), chunks = [];
  for (let i = 0; i < count; i++) chunks.push(words.slice(Math.floor(i * words.length / count), Math.floor((i + 1) * words.length / count)).join(""));
  return chunks.join("") === japanese && chunks.every((c) => c.length <= 24) ? chunks : [];
}
function buildWorldSentenceQuestions(items, { random = Math.random, count = 5 } = {}) {
  const questions = [], seen = /* @__PURE__ */ new Set();
  for (const item of items) {
    const itemKey = getQuestionKey(item);
    if (!/^[vkg]:.+/.test(itemKey || "")) continue;
    const examples = Array.isArray(item.examples) ? item.examples : [item.example];
    for (let index = 0; index < examples.length; index++) {
      const ex = parseExample(examples[index]);
      if (!(ex == null ? void 0 : ex.jp) || !ex.vi || ex.jp === ex.vi || seen.has(ex.jp)) continue;
      const chunks = sentenceChunks(ex.jp);
      if (!chunks.length) continue;
      const shuffled = chunks.map((label, order) => ({ label, order }));
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      if (shuffled.map((t) => t.label).join("") === ex.jp) shuffled.push(shuffled.shift());
      const tokens = shuffled.map((t, i) => ({ id: `token-${i}`, label: t.label }));
      const correctTokenIds = chunks.map((_, order) => tokens[shuffled.findIndex((t) => t.order === order)].id);
      questions.push({
        id: `${itemKey}:sentence:${index}`,
        itemKey,
        legacyKey: itemKey.replace(/^v:/, "vocab:").replace(/^k:/, "kanji:").replace(/^g:/, "grammar:"),
        domain: inferKind(item),
        interaction: "sentence",
        prompt: `Ghép lại câu ví dụ đã nghe: ${ex.vi}`,
        tokens,
        correctTokenIds,
        answerLabel: ex.jp,
        reading: ex.romaji,
        speechText: ex.jp,
        listening: false,
        hint: `Câu ví dụ bắt đầu bằng: ${chunks[0]}`,
        explanation: `Ghép lại đúng câu ví dụ nguồn: ${ex.jp} — ${ex.vi}. Bài này đối chiếu câu mẫu, không chấm mọi cách diễn đạt khác.`
      });
      seen.add(ex.jp);
      break;
    }
    if (questions.length >= count) break;
  }
  return questions;
}
function buildWorldLessonQuestions(items, options = {}) {
  if (options.market) {
    const marketItems = items.filter((item) => MARKET_OBJECTS[item.key]);
    const objects = buildWorldQuestions(marketItems, { ...options, listening: true }).slice(0, 3);
    const sentences = buildWorldSentenceQuestions(marketItems, { ...options, count: 2 });
    return objects.length === 3 && sentences.length === 2 ? [...objects, ...sentences] : [];
  }
  return options.sentence ? buildWorldSentenceQuestions(items, options) : buildWorldQuestions(items, options);
}
function createCompletedSessionObserver({ journal, history, resolveActivity, enqueueReward, assertOwner, startedAt = Date.now(), initialIds = new Set(history().map((entry) => entry.id).filter(Boolean)) }) {
  const observe = async (entry, context = {}) => {
    var _a;
    assertOwner();
    const activity = resolveActivity(context.activityId);
    const expectedTrainerId = (activity == null ? void 0 : activity.kind) === "trainer" ? activity.trainerId : (activity == null ? void 0 : activity.kind) === "tool" && WORLD_ASSESSED_TOOL_IDS.includes(activity.id) ? activity.id : null;
    if (!entry || typeof entry.id !== "string" || !entry.id || !Number.isInteger(entry.total) || entry.total < 5 || entry.answersAlreadyRecorded !== true || !Number.isFinite(entry.at) || !expectedTrainerId || expectedTrainerId !== entry.trainerId || !context.heroId) return { status: "ignored", reason: "ineligible-session" };
    const live = history().find((item) => item.id === entry.id);
    if (!live || JSON.stringify(live) !== JSON.stringify(entry)) return { status: "ignored", reason: "not-canonical-history" };
    const doc = journal.read();
    const previous = (_a = doc.observedSessions) == null ? void 0 : _a[entry.id];
    if ((initialIds.has(entry.id) || entry.at < startedAt) && !previous) return { status: "ignored", reason: "historical-session" };
    const fingerprint = JSON.stringify({ entry, heroId: context.heroId, activityId: context.activityId });
    if (previous && previous.fingerprint !== fingerprint) throw new Error("Mismatched completed session receipt");
    if (previous == null ? void 0 : previous.queued) return { status: "duplicate", receipt: previous.receipt };
    const pending = previous || { fingerprint, queued: false, receipt: { id: `study:trainer:${entry.id}`, heroId: context.heroId, activityId: context.activityId, recommendedLevel: Math.max(1, Math.min(50, Math.floor(context.recommendedLevel || 1))), itemCount: 5 } };
    doc.observedSessions = { ...doc.observedSessions || {}, [entry.id]: pending };
    recordRewardEntitlement(doc, pending.receipt);
    journal.write(doc);
    assertOwner();
    await enqueueReward(pending.receipt);
    assertOwner();
    pending.queued = true;
    journal.write(doc);
    return { status: "queued", receipt: pending.receipt };
  };
  observe.recover = async () => {
    const doc = journal.read();
    for (const entitlement of Object.values(doc.rewardEntitlements || {})) {
      assertOwner();
      await enqueueReward({ ...entitlement.receipt });
      assertOwner();
    }
  };
  return observe;
}
function pronounce(text) {
  if (!text || isMuted()) return Promise.reject(new Error("Âm thanh đang tắt. Bật âm thanh để nghe câu hỏi."));
  return new Promise((resolve, reject) => {
    const utterance = speakJP(text);
    if (!utterance) {
      reject(new Error("Không phát được tiếng Nhật. Hãy kiểm tra giọng đọc rồi thử lại."));
      return;
    }
    const timeout = setTimeout(() => reject(new Error("Giọng đọc không phản hồi. Hãy thử lại.")), 15e3);
    utterance.onend = () => {
      clearTimeout(timeout);
      resolve();
    };
    utterance.onerror = () => {
      clearTimeout(timeout);
      reject(new Error("Không phát được tiếng Nhật. Hãy thử lại."));
    };
  });
}
function strictDueWorldQuestions(items, { stateFor = (key) => srs.stateFor(key), now = Date.now() } = {}) {
  const due = items.filter((item) => {
    const state = stateFor(item.key);
    return state && state.reps > 0 && Number.isFinite(state.dueAt) && state.dueAt <= now;
  });
  if (!due.length) throw new Error("Không có mục nào đến hạn. Hãy chọn một bài học mới trong nhật ký.");
  const dueKeys = new Set(due.map((item) => item.key));
  const questions = buildWorldLessonQuestions([...due, ...items.filter((item) => !dueKeys.has(item.key))]).filter((question) => dueKeys.has(question.itemKey));
  if (questions.length < 5) throw new Error(`Hiện có ${questions.length} mục đến hạn phù hợp; cần 5 mục cho lượt này. Bạn có thể ôn số mục hiện có tại Ôn tập hôm nay.`);
  return questions;
}
async function createWorldLearningRuntime({ owner, emit, enqueueReward }) {
  const observationStartedAt = Date.now();
  const initialHistoryIds = new Set((useLearningStore.getState().gameHistory || []).map((entry) => entry.id).filter(Boolean));
  if (typeof enqueueReward !== "function") throw new Error("Durable RPG reward queue is required");
  const currentOwner = () => {
    var _a;
    return ((_a = useAppStore.getState().user) == null ? void 0 : _a.id) ? `user:${useAppStore.getState().user.id}` : "guest";
  };
  const identity = currentOwner();
  if (owner !== identity && !(identity === "guest" && owner === "guest:this-browser")) throw new Error("Learning owner does not match the active account");
  const generation = useLearningStore.getState().resetGeneration || 0;
  const assertOwner = () => {
    assertLearningOwnerReady();
    if (currentOwner() !== identity || (useLearningStore.getState().resetGeneration || 0) !== generation) throw new Error("Learning owner or reset changed. Reopen the activity.");
  };
  ensureLearningOwner(identity);
  await ensureCanonicalContentReady();
  assertOwner();
  const journal = createWorldLearningJournal({ owner, generation });
  const deliveryPromises = /* @__PURE__ */ new Map();
  const enqueueEntitlement = (receipt) => {
    assertOwner();
    const doc = journal.read();
    const entitlement = recordRewardEntitlement(doc, receipt);
    if (deliveryPromises.has(receipt.id)) return deliveryPromises.get(receipt.id);
    journal.write(doc);
    const delivery = Promise.resolve().then(async () => {
      assertOwner();
      await enqueueReward({ ...entitlement.receipt });
      assertOwner();
    });
    deliveryPromises.set(receipt.id, delivery);
    delivery.catch(() => deliveryPromises.delete(receipt.id));
    return delivery;
  };
  const observeSession = createCompletedSessionObserver({ journal, history: () => useLearningStore.getState().gameHistory || [], resolveActivity: resolveWorldActivity, enqueueReward: enqueueEntitlement, assertOwner, initialIds: initialHistoryIds, startedAt: observationStartedAt });
  const service = new LearningSessionService({
    journal,
    emit,
    enqueueReward: enqueueEntitlement,
    assertOwner,
    pronounce,
    applyCompletion: applyWorldLearningCompletion,
    resolveActivity: (id) => FIELD_ACTIVITIES.find((a) => a.id === id),
    loadQuestions: async (activity) => {
      const settings = useAppStore.getState();
      const start = Number(settings.lessonStart) || 1, end = Number(settings.lessonCap) || 50;
      const filtered = !!settings.lessonStart || !!settings.lessonCap;
      const lessonIds = filtered ? Array.from({ length: Math.max(0, end - start + 1) }, (_, i) => start + i) : void 0;
      const items = content.getBatch({ kind: activity.id === "field.review" ? void 0 : activity.domain, level: ["N5", "N4"], lessonIds, order: "random" });
      if (activity.id === "field.review") return strictDueWorldQuestions(items);
      return buildWorldLessonQuestions(items, { listening: activity.interaction === "listening", market: activity.id === "field.market", sentence: activity.id === "field.grammar" });
    },
    applyAssessment: async (receipt) => {
      assertOwner();
      srs.recordReview({ itemKey: receipt.itemKey, quality: receipt.independentCorrect ? 2 : receipt.correct ? 1 : 0, reviewedAt: receipt.at, eventId: receipt.id, meta: { source: "world" } });
      assertOwner();
      applyWorldLearningResult(receipt);
      applyMasteryReceipt(receipt);
      const state = srs.stateFor(receipt.itemKey);
      const canonical = normalizeSrsEntry(state, receipt.at);
      const raw = localStorage.getItem("n4-srs");
      const legacy = raw ? JSON.parse(raw) : {};
      legacy[receipt.legacyKey] = toLegacySrsEntry(canonical, receipt.at);
      localStorage.setItem("n4-srs", JSON.stringify(legacy));
      useLearningStore.setState({ srs: { ...useLearningStore.getState().srs || {}, [receipt.itemKey]: canonical } });
    }
  });
  await observeSession.recover();
  assertOwner();
  return {
    async reconcileRewards() {
      assertOwner();
      deliveryPromises.clear();
      for (const entitlement of Object.values(journal.read().rewardEntitlements || {})) await enqueueEntitlement(entitlement.receipt);
      await observeSession.recover();
      assertOwner();
    },
    observeCompletedSession(entry, context) {
      const run = service.queue.then(() => {
        if (service.closed) throw new Error("Learning session disposed");
        return observeSession(entry, context);
      });
      service.queue = run.catch(() => {
      });
      return run;
    },
    async request(payload, context) {
      await observeSession.recover();
      assertOwner();
      const command = payload;
      const state = await service.request(command, context);
      if (["start", "next", "resume"].includes(command.command) && state.status === "active") {
        const session = journal.read().session;
        const text = session.questions[session.index].speechText;
        pronounce(text).catch((error) => {
          if (!service.closed) emit("study_state", { error: error.message });
        });
      }
      if (["cancel", "finish"].includes(command.command)) stopSpeech();
      return state;
    },
    dispose: () => {
      service.dispose();
      stopSpeech();
    }
  };
}
export {
  createWorldLearningRuntime,
  strictDueWorldQuestions
};
