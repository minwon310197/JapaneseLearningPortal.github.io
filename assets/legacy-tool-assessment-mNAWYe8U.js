import { c as content } from "./index-H9MMlWno.js";
const adapters = /* @__PURE__ */ new Map();
function startLegacyToolAssessment(fn) {
  const adapter = adapters.get(fn);
  if (!adapter) return null;
  adapter.handlers.start();
  adapter.run = crypto.randomUUID();
  adapter.seen.clear();
  adapter.finished = false;
  return adapter.run;
}
function canonicalItem(item, kind) {
  if (!item) return void 0;
  const prefix = { vocab: "v:", kanji: "k:", grammar: "g:" }[kind || item.type || item.kind];
  const identity = (kind || item.type || item.kind) === "kanji" ? item.kanji || item.word : (kind || item.type || item.kind) === "grammar" ? item.id || item.title : item.word;
  const key = String(item.key || (prefix && identity ? prefix + identity : "")).replace(/^vocab:/, "v:").replace(/^kanji:/, "k:").replace(/^grammar:/, "g:");
  if (!/^[vkg]:.+/.test(key)) throw new Error("Thiếu định danh nội dung nguồn để ghi kết quả.");
  if (content.isReady()) {
    const canonical = content.getItem(key);
    if (!canonical) throw new Error("Không tìm thấy nội dung nguồn để ghi kết quả.");
    return canonical;
  }
  return { ...item, key, kind: kind || item.type || item.kind };
}
function submitLegacyToolAssessment(fn, run, { questionId, item, kind, correct, assisted = false }) {
  const adapter = adapters.get(fn);
  if (!adapter || !run || adapter.run !== run || adapter.finished || typeof correct !== "boolean" || typeof questionId !== "string" || adapter.seen.has(questionId)) return false;
  const source = canonicalItem(item, kind);
  adapter.seen.add(questionId);
  adapter.handlers.answer(source, correct, assisted === true);
  return true;
}
function finishLegacyToolAssessment(fn, run) {
  const adapter = adapters.get(fn);
  if (!adapter || !run || adapter.run !== run || adapter.finished) return;
  adapter.finished = true;
  adapter.handlers.finish();
}
export {
  startLegacyToolAssessment as a,
  finishLegacyToolAssessment as f,
  submitLegacyToolAssessment as s
};
