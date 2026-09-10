const WORLD_TOOL_DESTINATIONS = Object.freeze({
  openJishoPopup: { activityId: "place.dictionary" },
  startVerbConjugator: { activityId: "trainer.conjugation-dojo.verb-quiz" },
  startRadio: { activityId: "trainer.listening-lab.radio" },
  startBookmarkFlashcards: { trainerId: "daily-practice", mode: "bookmarks" }
});
function worldToolDestination(fn) {
  return WORLD_TOOL_DESTINATIONS[fn] || null;
}
function navigateWorldToolActivity(activityId, contentId, sourceRoute) {
  const query = new URLSearchParams({ activity: activityId });
  if (contentId) query.set("content", contentId);
  if (sourceRoute) query.set("route", sourceRoute);
  window.location.hash = `/?${query}`;
}
const WORLD_ASSESSED_TOOL_IDS = Object.freeze([
  "tool.startSpeedMemory",
  "tool.openWeakDrill",
  "tool.openDailyMiniLesson",
  "tool.openDailyListening",
  "tool.openMorningQuiz"
]);
export {
  WORLD_ASSESSED_TOOL_IDS as W,
  navigateWorldToolActivity as n,
  worldToolDestination as w
};
