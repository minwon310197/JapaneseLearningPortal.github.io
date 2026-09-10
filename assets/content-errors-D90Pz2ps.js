import { v as supabase } from "./index-BEJSIlFS.js";
const CONTENT_ERROR_ITEM_TYPES = Object.freeze(["vocab", "kanji", "grammar", "minna"]);
const CONTENT_ERROR_ITEM_TYPE_ALIASES = Object.freeze({
  vocabulary: "vocab",
  word: "vocab",
  words: "vocab",
  vocab_jlpt: "vocab",
  vocabjlpt: "vocab",
  vocab_tree: "vocab",
  kanji_rock: "kanji",
  grammar_echo: "grammar",
  particle_gate: "grammar",
  particle: "grammar",
  particles: "grammar",
  conjugation: "grammar",
  conjugation_forge: "grammar",
  ai: "grammar",
  ai_verification: "grammar",
  ai_explanation: "grammar",
  explanation: "grammar",
  minna_lesson: "minna",
  lesson: "minna"
});
function normalizeContentErrorItemType(itemType) {
  const raw = String(itemType || "").trim();
  if (CONTENT_ERROR_ITEM_TYPES.includes(raw)) return raw;
  const key = raw.replace(/[-\s]+/g, "_").toLowerCase();
  return CONTENT_ERROR_ITEM_TYPE_ALIASES[key] || "grammar";
}
function buildContentErrorInsertPayload(reporterId, report = {}) {
  const itemType = normalizeContentErrorItemType(report.itemType);
  const rawType = String(report.itemType || "").trim();
  const mappedFrom = rawType && rawType !== itemType ? rawType : "";
  const section = mappedFrom ? [report.section, mappedFrom].filter(Boolean).join(":") : report.section;
  const description = mappedFrom && report.description ? `[${mappedFrom}] ${report.description}` : report.description;
  return {
    reporter_id: reporterId,
    item_type: itemType,
    item_id: report.itemId,
    section,
    field: report.field,
    current_value: report.currentValue,
    suggested_value: report.suggestedValue,
    description
  };
}
async function reportContentError(reporterId, report) {
  const payload = buildContentErrorInsertPayload(reporterId, report);
  const { data, error } = await supabase.from("content_errors").insert(payload).select().single();
  if (error) throw error;
  return data;
}
async function getMyReports(userId) {
  const { data, error } = await supabase.from("content_errors").select("*").eq("reporter_id", userId).order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
export {
  getMyReports as g,
  reportContentError as r
};
