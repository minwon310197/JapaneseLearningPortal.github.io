import { I as getItem } from "./index-BEJSIlFS.js";
const RESULT_SCHEMA = 1;
function number(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}
function compactMasteryBar(bar = {}) {
  return {
    level: number(bar.level),
    xp: number(bar.xp),
    nextAt: number(bar.nextAt),
    lifetime: number(bar.lifetime)
  };
}
function snapshotMasteryBars(bars = {}) {
  return Object.fromEntries(
    Object.entries(bars || {}).map(([domain, bar]) => [domain, compactMasteryBar(bar)])
  );
}
function isTechnicalAnswerEvent(event = {}) {
  var _a, _b, _c;
  return Boolean(
    event.technicalFailure || ((_a = event.meta) == null ? void 0 : _a.technicalFailure) || ((_b = event.meta) == null ? void 0 : _b.outcome) === "technical-error" || ((_c = event.meta) == null ? void 0 : _c.classification) === "technical-error"
  );
}
function contentLabel(item, itemKey) {
  return (item == null ? void 0 : item.word) || (item == null ? void 0 : item.character) || (item == null ? void 0 : item.title) || (item == null ? void 0 : item.pattern) || (item == null ? void 0 : item.question) || itemKey;
}
function resolveStudyResultItem(answer, resolveItem = getItem) {
  let item = null;
  try {
    item = (resolveItem == null ? void 0 : resolveItem(answer.itemKey)) || null;
  } catch (e) {
  }
  return {
    itemKey: answer.itemKey,
    domain: (item == null ? void 0 : item.kind) || answer.itemKind || answer.domain || null,
    label: contentLabel(item, answer.itemKey),
    reading: (item == null ? void 0 : item.reading) || null,
    meaning: (item == null ? void 0 : item.meaning) || (item == null ? void 0 : item.usage) || null,
    explanation: (item == null ? void 0 : item.explanation) || (item == null ? void 0 : item.usage) || (item == null ? void 0 : item.meaning) || null,
    firstAttemptCorrect: answer.firstAttemptCorrect === true,
    eventualCorrect: answer.eventualCorrect === true,
    attempts: Math.max(0, number(answer.attempts)),
    hintUsed: Boolean(answer.hintUsed),
    revealUsed: Boolean(answer.revealUsed)
  };
}
function computeMasteryDelta(before, after) {
  const keys = /* @__PURE__ */ new Set([...Object.keys(before), ...Object.keys(after)]);
  return Object.fromEntries([...keys].map((domain) => {
    const start = compactMasteryBar(before[domain]);
    const end = compactMasteryBar(after[domain]);
    return [domain, {
      level: end.level - start.level,
      xp: end.lifetime - start.lifetime
    }];
  }));
}
function buildStudyResult({
  answers = [],
  technicalFailures = [],
  summary = {},
  rewards = {},
  sessionId,
  domainBefore = {},
  domainAfter = {},
  resolveItem = getItem
} = {}) {
  const gradedAnswers = answers.filter((answer) => typeof (answer == null ? void 0 : answer.firstAttemptCorrect) === "boolean");
  const firstAttemptCorrect = gradedAnswers.filter((answer) => answer.firstAttemptCorrect).length;
  const eventualCorrect = gradedAnswers.filter((answer) => answer.eventualCorrect).length;
  const before = snapshotMasteryBars(domainBefore);
  const after = snapshotMasteryBars(domainAfter);
  const wrongFirstAttemptItems = gradedAnswers.filter((answer) => !answer.firstAttemptCorrect).map((answer) => resolveStudyResultItem(answer, resolveItem));
  return {
    schema: RESULT_SCHEMA,
    firstAttemptCorrect,
    eventualCorrect,
    score: eventualCorrect,
    total: gradedAnswers.length,
    wrongFirstAttemptItems,
    domainBefore: before,
    domainAfter: after,
    masteryDelta: computeMasteryDelta(before, after),
    technicalFailures: technicalFailures.map((failure) => ({
      itemKey: failure.itemKey || null,
      reason: failure.reason || "technical-error",
      at: number(failure.at)
    })),
    hintsUsed: gradedAnswers.filter((answer) => answer.hintUsed).length,
    revealsUsed: gradedAnswers.filter((answer) => answer.revealUsed).length,
    timeMs: Math.max(0, number(summary.timeMs)),
    xp: number(rewards.xp),
    coins: number(rewards.coins),
    gems: number(rewards.gems),
    sessionId: sessionId || null,
    reportedScore: number(summary.score),
    reportedTotal: number(summary.total)
  };
}
function summarizeStudyPlanResults(plan) {
  var _a;
  const completed = ((plan == null ? void 0 : plan.blocks) || []).filter((block) => block.result);
  const totals = completed.reduce((sum, block) => {
    var _a2, _b;
    const result = block.result || {};
    const answers = Array.isArray(block.answers) ? block.answers : [];
    const gradedAnswers = answers.filter((answer) => typeof (answer == null ? void 0 : answer.firstAttemptCorrect) === "boolean");
    const hasAnswerEvidence = gradedAnswers.length > 0;
    const total = hasAnswerEvidence ? gradedAnswers.length : number(result.total);
    const firstAttemptCorrect = hasAnswerEvidence ? gradedAnswers.filter((answer) => answer.firstAttemptCorrect).length : number(result.firstAttemptCorrect);
    const eventualCorrect = hasAnswerEvidence ? gradedAnswers.filter((answer) => answer.eventualCorrect).length : number((_a2 = result.eventualCorrect) != null ? _a2 : result.score);
    const hintsUsed = hasAnswerEvidence ? gradedAnswers.filter((answer) => answer.hintUsed).length : number(result.hintsUsed);
    const revealsUsed = hasAnswerEvidence ? gradedAnswers.filter((answer) => answer.revealUsed).length : number(result.revealsUsed);
    return {
      firstAttemptCorrect: sum.firstAttemptCorrect + firstAttemptCorrect,
      eventualCorrect: sum.eventualCorrect + eventualCorrect,
      questions: sum.questions + total,
      xp: sum.xp + number(result.xp),
      coins: sum.coins + number(result.coins),
      time: sum.time + number(result.timeMs),
      hintsUsed: sum.hintsUsed + hintsUsed,
      revealsUsed: sum.revealsUsed + revealsUsed,
      technicalFailures: sum.technicalFailures + (((_b = result.technicalFailures) == null ? void 0 : _b.length) || 0)
    };
  }, {
    firstAttemptCorrect: 0,
    eventualCorrect: 0,
    questions: 0,
    xp: 0,
    coins: 0,
    time: 0,
    hintsUsed: 0,
    revealsUsed: 0,
    technicalFailures: 0
  });
  const mistakes = completed.flatMap((block) => {
    var _a2;
    if (Array.isArray((_a2 = block.result) == null ? void 0 : _a2.wrongFirstAttemptItems)) return block.result.wrongFirstAttemptItems;
    return (block.answers || []).filter((answer) => answer.firstAttemptCorrect === false).map((answer) => resolveStudyResultItem(answer));
  });
  const mastery = {};
  for (const block of completed) {
    for (const [domain, delta] of Object.entries(((_a = block.result) == null ? void 0 : _a.masteryDelta) || {})) {
      if (!mastery[domain]) mastery[domain] = { level: 0, xp: 0 };
      mastery[domain].level += number(delta.level);
      mastery[domain].xp += number(delta.xp);
    }
  }
  return { completed, totals, mistakes, mastery };
}
export {
  snapshotMasteryBars as a,
  buildStudyResult as b,
  isTechnicalAnswerEvent as i,
  summarizeStudyPlanResults as s
};
