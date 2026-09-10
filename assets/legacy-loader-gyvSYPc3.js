const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./study-tools-HBv-wCN4.js","./index-BEJSIlFS.js","./vendor-react-BUL8WuXG.js","./vendor-runtime-BbOs9S9B.js","./vendor-icons-D83cEu6Z.js","./vendor-router-Dx6RIovR.js","./vendor-supabase-DTEAj5J1.js","./index-BF-iHvWQ.css","./toast-Dwy3w2e2.js","./toast-FOTv75r1.css","./bookmarks-DzO2NqfT.js","./world-tool-destinations-BAVvWbat.js","./quiz-DpQK5S-N.js","./tts-DDDtO8rG.js","./game-hints-C7RIXbTT.js","./game-feedback-rT-bQdpt.js","./speed-memory-CY6hXOFZ.js","./legacy-tool-assessment-CuYVfzBR.js","./todo-audio-7Ej21FbX.js","./todo-writing-lqgpOZPv.js","./todo-reading-iP13jbcu.js","./todo-analytics-DQ1CDpZe.js","./todo-ai-Dt94SH_j.js","./todo-ux-DWGli71e.js","./todo-sharing-CtCXLk78.js","./todo-content-KrpkKRji.js","./todo-daily-BoT6SMng.js","./todo-reference-D5zG60yD.js","./todo-immersion-BOi5nh5j.js","./todo-flashcards-DGpj5YpA.js","./todo-smart-c9XsUTt1.js","./todo-smart2-B7fY4JHr.js","./todo-settings-BLLTdAB_.js","./todo-jlptprep-_2J7K4pw.js","./todo-culture-C66oTZ8y.js","./todo-extended2-DOWjcILL.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { u as useAppStore, a as useDataStore, ai as S, h as useLearningStore, aM as srs, aJ as getStudyDateKey, bb as normalizeSrsEntry } from "./index-BEJSIlFS.js";
import { w as worldToolDestination, n as navigateWorldToolActivity } from "./world-tool-destinations-BAVvWbat.js";
const longKey = (key) => String(key).replace(/^v:/, "vocab:").replace(/^k:/, "kanji:").replace(/^g:/, "grammar:");
function buildLegacyToolSrs(learningSrs = {}, fsrsStates = {}) {
  const result = {};
  for (const [key, value] of Object.entries(learningSrs)) result[longKey(key)] = typeof value === "object" ? { ...value } : { level: value };
  for (const [key, state] of Object.entries(fsrsStates)) {
    const canonical = longKey(key);
    result[canonical] = {
      ...result[canonical],
      ...normalizeSrsEntry(state),
      ...state,
      correct: Math.max(0, Number(state.reps || 0) - Number(state.lapses || 0)),
      wrong: Number(state.lapses || 0),
      lastReview: state.lastReviewedAt
    };
  }
  for (const [key, entry] of Object.entries(result)) {
    const word = key.replace(/^(vocab|kanji|grammar):/, "");
    if (!(word in result)) Object.defineProperty(result, word, { value: entry, enumerable: false, configurable: true });
  }
  return result;
}
function canonicalToolState() {
  const learning = useLearningStore.getState();
  return { ...learning, srs: buildLegacyToolSrs(learning.srs, srs.snapshot().states) };
}
const grammarViews = /* @__PURE__ */ new WeakMap();
function legacyGrammarView(sections) {
  if (!grammarViews.has(sections)) grammarViews.set(sections, sections.map((section) => ({ ...section, patterns: (section.patterns || []).map((pattern) => {
    var _a;
    return { ...pattern, id: String((_a = pattern.id) != null ? _a : "") };
  }) })));
  return grammarViews.get(sections);
}
function syncLegacyToolState() {
  const app = useAppStore.getState(), data = useDataStore.getState(), learning = canonicalToolState();
  if (data.loaded) {
    S.vocab = data.vocab || [];
    S.kanji = data.kanji || [];
    S.grammar = legacyGrammarView(data.grammar || []);
    S.minnaData = data.minna || {};
  }
  S.srs = learning.srs;
  S.bookmarks = { ...learning.bookmarks || {} };
  S.mistakes = { ...learning.mistakes || {} };
  S.theme = app.theme || S.theme;
  S.ttsRate = app.ttsRate || S.ttsRate;
  window.S = S;
  return learning;
}
function canonicalToolMistakes() {
  var _a;
  const state = canonicalToolState();
  const entries = new Map(Object.entries(state.srs).filter(([, entry]) => entry.wrong > 0).map(([key, entry]) => [longKey(key), { key: longKey(key), wrong: entry.wrong, correct: entry.correct || 0 }]));
  for (const [key, value] of Object.entries(state.mistakes || {})) {
    const count = Number(typeof value === "object" ? value.count : value) || 0;
    if (count <= 0) continue;
    const canonical = longKey(key);
    entries.set(canonical, { ...entries.get(canonical), key: canonical, wrong: count, correct: ((_a = entries.get(canonical)) == null ? void 0 : _a.correct) || 0 });
  }
  return [...entries.values()].sort((a, b) => b.wrong - a.wrong);
}
function canonicalToolDayStats(now = Date.now()) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const state = canonicalToolState(), date = getStudyDateKey(now);
  const activity = ((_a = state.studyActivity) == null ? void 0 : _a[date]) || {};
  const history = ((_b = state.studyHistory) == null ? void 0 : _b[date]) || {};
  const domains = activity.domains || {};
  return {
    date,
    words: ((_c = domains.vocab) == null ? void 0 : _c.total) || 0,
    kanji: ((_d = domains.kanji) == null ? void 0 : _d.total) || 0,
    grammar: ((_e = domains.grammar) == null ? void 0 : _e.total) || 0,
    answers: (_g = (_f = history.total) != null ? _f : activity.total) != null ? _g : state.lastActivityDate === date ? (state.todayCorrect || 0) + (state.todayWrong || 0) : 0,
    sessions: (_i = (_h = history.sessions) != null ? _h : activity.sessions) != null ? _i : 0,
    correct: (_k = (_j = history.correct) != null ? _j : activity.correct) != null ? _k : state.lastActivityDate === date ? state.todayCorrect || 0 : 0,
    wrong: (_m = (_l = history.wrong) != null ? _l : activity.wrong) != null ? _m : state.lastActivityDate === date ? state.todayWrong || 0 : 0
  };
}
function worldOverlayMount() {
  return document.querySelector("[data-haru-tool-mount]") || document.body;
}
const WORLD_TOOL_OVERLAY_SELECTOR = ".game-overlay, .st-modal-overlay";
function watchWorldToolMount(root, { onOpen = () => {
}, onClose = () => {
} } = {}) {
  const previous = new Set(document.querySelectorAll(WORLD_TOOL_OVERLAY_SELECTOR));
  const owned = /* @__PURE__ */ new Set();
  let current = null, wasActive = false, disposed = false;
  const inspect = () => {
    if (disposed) return;
    for (const overlay of document.querySelectorAll(WORLD_TOOL_OVERLAY_SELECTOR)) {
      if (!root.contains(overlay) && !previous.has(overlay)) root.appendChild(overlay);
    }
    const overlays = [...root.querySelectorAll(WORLD_TOOL_OVERLAY_SELECTOR)];
    for (const overlay of overlays) owned.add(overlay);
    const candidate = overlays.find((overlay) => overlay.classList.contains("active")) || overlays[overlays.length - 1];
    if (candidate && candidate !== current) {
      current = candidate;
      wasActive = false;
    }
    if (candidate) {
      onOpen(candidate);
      if (candidate.classList.contains("active")) wasActive = true;
      else if (wasActive) onClose();
    } else if (current && wasActive) onClose();
  };
  const observer = new MutationObserver(inspect);
  observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
  return {
    inspect,
    hasOverlay: () => !!root.querySelector(WORLD_TOOL_OVERLAY_SELECTOR),
    dispose() {
      var _a, _b;
      if (disposed) return;
      disposed = true;
      observer.disconnect();
      for (const overlay of owned) {
        if (!(overlay === current && wasActive && !overlay.classList.contains("active"))) {
          const close = [...overlay.querySelectorAll("[onclick]")].find((el) => /^\s*close\w*\(/.test(el.getAttribute("onclick") || ""));
          const name = (_b = (_a = close == null ? void 0 : close.getAttribute("onclick")) == null ? void 0 : _a.match(/^\s*(close\w*)\(/)) == null ? void 0 : _b[1];
          if (name && typeof window[name] === "function") window[name]();
          else close == null ? void 0 : close.click();
        }
        overlay.remove();
      }
    }
  };
}
const legacyRegistry = {
  "openStudyTimer": "study-tools",
  "closeStudyTimer": "study-tools",
  "_setTimerPreset": "study-tools",
  "_toggleTimer": "study-tools",
  "_resetTimer": "study-tools",
  "openKanaChart": "study-tools",
  "closeKanaChart": "study-tools",
  "openStudyNotes": "study-tools",
  "closeStudyNotes": "study-tools",
  "_clearNoteText": "study-tools",
  "_archiveNote": "study-tools",
  "_toggleSavedNotes": "study-tools",
  "_loadNoteEntry": "study-tools",
  "_deleteAllNotes": "study-tools",
  "_deleteNoteEntry": "study-tools",
  "_saveStudyNotes": "study-tools",
  "openMistakeNotebook": "study-tools",
  "closeMistakeNotebook": "study-tools",
  "_clearMistakes": "study-tools",
  "openStudyStreak": "study-tools",
  "closeStudyStreak": "study-tools",
  "openQuickStats": "study-tools",
  "closeQuickStats": "study-tools",
  "startBookmarkFlashcards": "study-tools",
  "openDailyChallenge": "study-tools",
  "closeDailyChallenge": "study-tools",
  "_dcCheck": "study-tools",
  "_dcComplete": "study-tools",
  "openWeakPoints": "study-tools",
  "closeWeakPoints": "study-tools",
  "openKanjiDecomposer": "study-tools",
  "closeKanjiDecomposer": "study-tools",
  "_decomposeKanji": "study-tools",
  "openGrammarQuickRef": "study-tools",
  "closeGrammarQuickRef": "study-tools",
  "_filterGrammarQRef": "study-tools",
  "openReadingSpeed": "study-tools",
  "closeReadingSpeed": "study-tools",
  "_toggleReadingSpeed": "study-tools",
  "_nextReadingSentence": "study-tools",
  "openMnemonics": "study-tools",
  "closeMnemonics": "study-tools",
  "_addMnemonic": "study-tools",
  "_deleteMnemonic": "study-tools",
  "openStudyPlanner": "study-tools",
  "closeStudyPlanner": "study-tools",
  "_saveStudyGoals": "study-tools",
  "_addStudyMinutes": "study-tools",
  "openSrsQueue": "study-tools",
  "closeSrsQueue": "study-tools",
  "openWordAssociation": "study-tools",
  "closeWordAssociation": "study-tools",
  "openVocabExplorer": "study-tools",
  "closeVocabExplorer": "study-tools",
  "openConjugationTable": "study-tools",
  "closeConjugationTable": "study-tools",
  "openAchievementExport": "study-tools",
  "closeAchievementExport": "study-tools",
  "_exportAsImage": "study-tools",
  "_exportAsText": "study-tools",
  "startQuiz": "quiz",
  "nextQuizQuestion": "quiz",
  "renderQuiz": "quiz",
  "answerQuiz": "quiz",
  "answerQuizType": "quiz",
  "showQuizResult": "quiz",
  "renderQuizContainer": "quiz",
  "_quizSpeak": "quiz",
  "closeQuiz": "quiz",
  "openRandomReview": "quiz",
  "closeRandomReview": "quiz",
  "_setRRCat": "quiz",
  "_setRRFilter": "quiz",
  "_rollRandom": "quiz",
  "_rrSpeak": "quiz",
  "randomReview": "quiz",
  "_collectMemItems": "speed-memory",
  "_pickMemItem": "speed-memory",
  "startSpeedMemory": "speed-memory",
  "memNextRound": "speed-memory",
  "memChoose": "speed-memory",
  "memNext": "speed-memory",
  "showMemResult": "speed-memory",
  "resetMemContainer": "speed-memory",
  "closeSpeedMemory": "speed-memory",
  "openPronunciationCompare": "todo-audio",
  "atToggleRecord": "todo-audio",
  "closePronunciationCompare": "todo-audio",
  "openShadowing": "todo-audio",
  "shadowNext": "todo-audio",
  "shadowAutoPlay": "todo-audio",
  "closeShadowing": "todo-audio",
  "openMiniPodcast": "todo-audio",
  "podcastPlay": "todo-audio",
  "podcastPrev": "todo-audio",
  "podcastNextTrack": "todo-audio",
  "podcastAutoPlay": "todo-audio",
  "closeMiniPodcast": "todo-audio",
  "openConversationSim": "todo-audio",
  "convoNext": "todo-audio",
  "convoToggleVi": "todo-audio",
  "closeConversationSim": "todo-audio",
  "openPitchAccent": "todo-audio",
  "pitchAnswer": "todo-audio",
  "closePitchAccent": "todo-audio",
  "openExtendedListening": "todo-audio",
  "extListenAll": "todo-audio",
  "closeExtendedListening": "todo-audio",
  "openVoiceSelect": "todo-audio",
  "selectVoice": "todo-audio",
  "testVoice": "todo-audio",
  "closeVoiceSelect": "todo-audio",
  "openCustomPlaylist": "todo-audio",
  "plSearch": "todo-audio",
  "plAdd": "todo-audio",
  "plRemove": "todo-audio",
  "plPlayAll": "todo-audio",
  "closeCustomPlaylist": "todo-audio",
  "openKaraoke": "todo-audio",
  "karaokePlay": "todo-audio",
  "closeKaraoke": "todo-audio",
  "openSoundDiscrimination": "todo-audio",
  "sdPlay": "todo-audio",
  "sdAnswer": "todo-audio",
  "closeSoundDiscrimination": "todo-audio",
  "openCanvasWriting": "todo-writing",
  "wrClear": "todo-writing",
  "wrUndo": "todo-writing",
  "closeCanvasWriting": "todo-writing",
  "openHandwritingOCR": "todo-writing",
  "ocrClear": "todo-writing",
  "ocrRecognize": "todo-writing",
  "closeHandwritingOCR": "todo-writing",
  "openRadicalDetail": "todo-writing",
  "closeRadicalDetail": "todo-writing",
  "openEssayWriting": "todo-writing",
  "essayCheck": "todo-writing",
  "closeEssayWriting": "todo-writing",
  "openKanaPractice": "todo-writing",
  "kanaClear": "todo-writing",
  "kanaSwitch": "todo-writing",
  "kanaNext": "todo-writing",
  "closeKanaPractice": "todo-writing",
  "openComponentTree": "todo-writing",
  "closeComponentTree": "todo-writing",
  "openLookAlike": "todo-writing",
  "closeLookAlike": "todo-writing",
  "openCustomCards": "todo-writing",
  "ccAdd": "todo-writing",
  "ccRemove": "todo-writing",
  "ccStudy": "todo-writing",
  "closeCustomCards": "todo-writing",
  "openShodo": "todo-writing",
  "shodoClear": "todo-writing",
  "closeShodo": "todo-writing",
  "openKanjiEvolution": "todo-writing",
  "closeKanjiEvolution": "todo-writing",
  "openGradedReader": "todo-reading",
  "closeGradedReader": "todo-reading",
  "openNHKEasy": "todo-reading",
  "closeNHKEasy": "todo-reading",
  "openMangaReader": "todo-reading",
  "closeMangaReader": "todo-reading",
  "openMenuReading": "todo-reading",
  "menuQuiz": "todo-reading",
  "menuCheck": "todo-reading",
  "closeMenuReading": "todo-reading",
  "openSignReading": "todo-reading",
  "closeSignReading": "todo-reading",
  "openBilingualStories": "todo-reading",
  "closeBilingualStories": "todo-reading",
  "openEmailTemplates": "todo-reading",
  "closeEmailTemplates": "todo-reading",
  "openJLPTPassages": "todo-reading",
  "jlptAnswer": "todo-reading",
  "jlptCheck": "todo-reading",
  "closeJLPTPassages": "todo-reading",
  "openAutoHighlight": "todo-reading",
  "ahAnalyze": "todo-reading",
  "closeAutoHighlight": "todo-reading",
  "openSpeedReading": "todo-reading",
  "speedReadDone": "todo-reading",
  "closeSpeedReading": "todo-reading",
  "openMonthlyChart": "todo-analytics",
  "closeMonthlyChart": "todo-analytics",
  "openJLPTReadiness": "todo-analytics",
  "closeJLPTReadiness": "todo-analytics",
  "openHeatmap": "todo-analytics",
  "closeHeatmap": "todo-analytics",
  "openGoalComparison": "todo-analytics",
  "saveGoals": "todo-analytics",
  "closeGoalComparison": "todo-analytics",
  "openStrengthAnalysis": "todo-analytics",
  "closeStrengthAnalysis": "todo-analytics",
  "openTimeStats": "todo-analytics",
  "closeTimeStats": "todo-analytics",
  "openWeeklyReport": "todo-analytics",
  "closeWeeklyReport": "todo-analytics",
  "openLeaderboard": "todo-analytics",
  "clearLeaderboard": "todo-analytics",
  "closeLeaderboard": "todo-analytics",
  "openSmartGoals": "todo-analytics",
  "sgAdd": "todo-analytics",
  "sgToggle": "todo-analytics",
  "sgRemove": "todo-analytics",
  "closeSmartGoals": "todo-analytics",
  "openStreakRewards": "todo-analytics",
  "closeStreakRewards": "todo-analytics",
  "openAITutor": "todo-ai",
  "tutorAsk": "todo-ai",
  "tutorFreeAsk": "todo-ai",
  "closeAITutor": "todo-ai",
  "openExampleGen": "todo-ai",
  "exgenSearch": "todo-ai",
  "closeExampleGen": "todo-ai",
  "openChatbot": "todo-ai",
  "botSend": "todo-ai",
  "botSendInput": "todo-ai",
  "closeChatbot": "todo-ai",
  "openDailyRecommend": "todo-ai",
  "closeDailyRecommend": "todo-ai",
  "openGrammarCheck": "todo-ai",
  "gcCheck": "todo-ai",
  "closeGrammarCheck": "todo-ai",
  "openSmartReview": "todo-ai",
  "srRate": "todo-ai",
  "closeSmartReview": "todo-ai",
  "openMnemonicAI": "todo-ai",
  "mnSave": "todo-ai",
  "closeMnemonicAI": "todo-ai",
  "openTranslation": "todo-ai",
  "trTranslate": "todo-ai",
  "closeTranslation": "todo-ai",
  "openQuizGen": "todo-ai",
  "qgStart": "todo-ai",
  "qgAnswer": "todo-ai",
  "closeQuizGen": "todo-ai",
  "openTextAnalyzer": "todo-ai",
  "taAnalyze": "todo-ai",
  "closeTextAnalyzer": "todo-ai",
  "openPWAInstall": "todo-ux",
  "triggerPWA": "todo-ux",
  "closePWAInstall": "todo-ux",
  "openWidget": "todo-ux",
  "closeWidget": "todo-ux",
  "openNotifications": "todo-ux",
  "notifToggle": "todo-ux",
  "closeNotifications": "todo-ux",
  "openGestureNav": "todo-ux",
  "toggleGesture": "todo-ux",
  "closeGestureNav": "todo-ux",
  "openLandscape": "todo-ux",
  "toggleLandscape": "todo-ux",
  "closeLandscape": "todo-ux",
  "openKeyboardShortcuts": "todo-ux",
  "closeKeyboardShortcuts": "todo-ux",
  "openMultiWindow": "todo-ux",
  "openNewWindow": "todo-ux",
  "closeMultiWindow": "todo-ux",
  "openAccessibility": "todo-ux",
  "a11yFontSize": "todo-ux",
  "a11yToggle": "todo-ux",
  "a11yReset": "todo-ux",
  "closeAccessibility": "todo-ux",
  "openAMOLED": "todo-ux",
  "toggleAMOLED": "todo-ux",
  "closeAMOLED": "todo-ux",
  "openThemeCreator": "todo-ux",
  "tcPreview": "todo-ux",
  "tcApply": "todo-ux",
  "tcReset": "todo-ux",
  "closeThemeCreator": "todo-ux",
  "openCloudSync": "todo-sharing",
  "closeCloudSync": "todo-sharing",
  "openSocialShare": "todo-sharing",
  "shareNative": "todo-sharing",
  "shareCopy": "todo-sharing",
  "closeSocialShare": "todo-sharing",
  "openAnkiExport": "todo-sharing",
  "ankiDoExport": "todo-sharing",
  "closeAnkiExport": "todo-sharing",
  "openCSVImport": "todo-sharing",
  "csvPreview": "todo-sharing",
  "csvDoImport": "todo-sharing",
  "closeCSVImport": "todo-sharing",
  "openStudyGroups": "todo-sharing",
  "closeStudyGroups": "todo-sharing",
  "openDeckSharing": "todo-sharing",
  "deckExport": "todo-sharing",
  "deckImportPrompt": "todo-sharing",
  "deckDoImport": "todo-sharing",
  "closeDeckSharing": "todo-sharing",
  "openCalendarSync": "todo-sharing",
  "calExport": "todo-sharing",
  "closeCalendarSync": "todo-sharing",
  "openAutoBackup": "todo-sharing",
  "doManualBackup": "todo-sharing",
  "toggleAutoBackup": "todo-sharing",
  "closeAutoBackup": "todo-sharing",
  "openQRShare": "todo-sharing",
  "qrGenerate": "todo-sharing",
  "qrDownload": "todo-sharing",
  "closeQRShare": "todo-sharing",
  "openDataAPI": "todo-sharing",
  "apiExportAll": "todo-sharing",
  "apiExportBookmarks": "todo-sharing",
  "closeDataAPI": "todo-sharing",
  "openN5Review": "todo-content",
  "closeN5Review": "todo-content",
  "openTransIntrans": "todo-content",
  "closeTransIntrans": "todo-content",
  "openAudioExamples": "todo-content",
  "playAllAudioEx": "todo-content",
  "closeAudioExamples": "todo-content",
  "openOfflineDict": "todo-content",
  "dictSearch as cDictSearch": "todo-content",
  "closeOfflineDict": "todo-content",
  "openVocabImages": "todo-content",
  "closeVocabImages": "todo-content",
  "openProverbs": "todo-content",
  "closeProverbs": "todo-content",
  "openAnimeSentences": "todo-content",
  "closeAnimeSentences": "todo-content",
  "openKatakanaDeep": "todo-content",
  "closeKatakanaDeep": "todo-content",
  "openKeigoBasics": "todo-content",
  "closeKeigoBasics": "todo-content",
  "openTopicVocab": "todo-content",
  "closeTopicVocab": "todo-content",
  "openCultureNotes": "todo-content",
  "closeCultureNotes": "todo-content",
  "openTravelPhrases": "todo-content",
  "closeTravelPhrases": "todo-content",
  "openKanjiHistory": "todo-content",
  "closeKanjiHistory": "todo-content",
  "openBizKeigo": "todo-content",
  "closeBizKeigo": "todo-content",
  "openAnimeVsReal": "todo-content",
  "closeAnimeVsReal": "todo-content",
  "openInterviewJP": "todo-content",
  "closeInterviewJP": "todo-content",
  "openAddressReading": "todo-content",
  "closeAddressReading": "todo-content",
  "openCounterWords": "todo-content",
  "closeCounterWords": "todo-content",
  "openJLPTPrepTips": "todo-content",
  "closeJLPTPrepTips": "todo-content",
  "openHanVietDict": "todo-content",
  "closeHanVietDict": "todo-content",
  "openWordOfDay": "todo-daily",
  "closeWordOfDay": "todo-daily",
  "openKanjiOfDay": "todo-daily",
  "closeKanjiOfDay": "todo-daily",
  "openGrammarOfDay": "todo-daily",
  "closeGrammarOfDay": "todo-daily",
  "openDailyMiniLesson": "todo-daily",
  "answerMiniLesson": "todo-daily",
  "closeDailyMiniLesson": "todo-daily",
  "openDailyListening": "todo-daily",
  "answerDailyListening": "todo-daily",
  "closeDailyListening": "todo-daily",
  "openPhraseOfDay": "todo-daily",
  "closePhraseOfDay": "todo-daily",
  "openMistakeDigest": "todo-daily",
  "closeMistakeDigest": "todo-daily",
  "openDailyKanjiChallenge": "todo-daily",
  "checkDailyKanji": "todo-daily",
  "revealDailyKanji": "todo-daily",
  "closeDailyKanjiChallenge": "todo-daily",
  "openMorningQuiz": "todo-daily",
  "answerMorningQuiz": "todo-daily",
  "closeMorningQuiz": "todo-daily",
  "openNightReview": "todo-daily",
  "closeNightReview": "todo-daily",
  "openParticleRef": "todo-reference",
  "closeParticleRef": "todo-reference",
  "openCounterRef": "todo-reference",
  "closeCounterRef": "todo-reference",
  "openTimeExprRef": "todo-reference",
  "closeTimeExprRef": "todo-reference",
  "openVerbGroupRef": "todo-reference",
  "closeVerbGroupRef": "todo-reference",
  "openAdjectiveRef": "todo-reference",
  "closeAdjectiveRef": "todo-reference",
  "openConnectorRef": "todo-reference",
  "closeConnectorRef": "todo-reference",
  "openQuestionWordRef": "todo-reference",
  "closeQuestionWordRef": "todo-reference",
  "openOnomatopoeiaRef": "todo-reference",
  "closeOnomatopoeiaRef": "todo-reference",
  "openSetPhraseRef": "todo-reference",
  "closeSetPhraseRef": "todo-reference",
  "openHonorificRef": "todo-reference",
  "closeHonorificRef": "todo-reference",
  "openTopicRestaurant": "todo-immersion",
  "closeTopicRestaurant": "todo-immersion",
  "openTopicTravel": "todo-immersion",
  "closeTopicTravel": "todo-immersion",
  "openTopicHospital": "todo-immersion",
  "closeTopicHospital": "todo-immersion",
  "openTopicShopping": "todo-immersion",
  "closeTopicShopping": "todo-immersion",
  "openTopicSchool": "todo-immersion",
  "closeTopicSchool": "todo-immersion",
  "openTopicWork": "todo-immersion",
  "closeTopicWork": "todo-immersion",
  "openTopicHome": "todo-immersion",
  "closeTopicHome": "todo-immersion",
  "openTopicTransport": "todo-immersion",
  "closeTopicTransport": "todo-immersion",
  "openTopicWeather": "todo-immersion",
  "closeTopicWeather": "todo-immersion",
  "openTopicPostOffice": "todo-immersion",
  "closeTopicPostOffice": "todo-immersion",
  "openAudioFirstCards": "todo-flashcards",
  "afNext": "todo-flashcards",
  "closeAudioFirstCards": "todo-flashcards",
  "openReverseCards": "todo-flashcards",
  "rvNext": "todo-flashcards",
  "closeReverseCards": "todo-flashcards",
  "openContextCards": "todo-flashcards",
  "cxNext": "todo-flashcards",
  "closeContextCards": "todo-flashcards",
  "openKanjiComponentCards": "todo-flashcards",
  "kccNext": "todo-flashcards",
  "closeKanjiComponentCards": "todo-flashcards",
  "openGrammarPatternCards": "todo-flashcards",
  "gpcNext": "todo-flashcards",
  "closeGrammarPatternCards": "todo-flashcards",
  "openConversationCards": "todo-flashcards",
  "ccNext": "todo-flashcards",
  "closeConversationCards": "todo-flashcards",
  "openErrorFocusedCards": "todo-flashcards",
  "efNext": "todo-flashcards",
  "closeErrorFocusedCards": "todo-flashcards",
  "openTimedCards": "todo-flashcards",
  "tfNext": "todo-flashcards",
  "closeTimedCards": "todo-flashcards",
  "openSpacedCards": "todo-flashcards",
  "sfNext": "todo-flashcards",
  "closeSpacedCards": "todo-flashcards",
  "openMinnaLessonCards": "todo-flashcards",
  "mlNext": "todo-flashcards",
  "closeMinnaLessonCards": "todo-flashcards",
  "openStudyPath": "todo-smart",
  "closeStudyPath": "todo-smart",
  "openAnalyticsDash": "todo-smart",
  "closeAnalyticsDash": "todo-smart",
  "openPredictedScore": "todo-smart",
  "closePredictedScore": "todo-smart",
  "openWeakDrill": "todo-smart",
  "answerWeakDrill": "todo-smart",
  "closeWeakDrill": "todo-smart",
  "openSmartScheduler": "todo-smart",
  "closeSmartScheduler": "todo-smart",
  "openPomodoroTimer": "todo-smart",
  "pomToggle": "todo-smart",
  "pomReset": "todo-smart",
  "pomSet": "todo-smart",
  "closePomodoroTimer": "todo-smart",
  "openMilestones": "todo-smart",
  "closeMilestones": "todo-smart",
  "openSpeedTracker": "todo-smart",
  "closeSpeedTracker": "todo-smart",
  "openVocabGrowth": "todo-smart",
  "closeVocabGrowth": "todo-smart",
  "openGrammarTree": "todo-smart",
  "closeGrammarTree": "todo-smart",
  "openContextGen": "todo-smart",
  "closeContextGen": "todo-smart",
  "openDifficultyAdjust": "todo-smart",
  "closeDifficultyAdjust": "todo-smart",
  "openStudyBuddy": "todo-smart",
  "sbNext": "todo-smart",
  "closeStudyBuddy": "todo-smart",
  "openMistakeAnalyzer": "todo-smart",
  "closeMistakeAnalyzer": "todo-smart",
  "openKanjiSimilar": "todo-smart",
  "closeKanjiSimilar": "todo-smart",
  "openGrammarCompare": "todo-smart",
  "closeGrammarCompare": "todo-smart",
  "openVocabNetwork": "todo-smart",
  "closeVocabNetwork": "todo-smart",
  "openReadingLevel": "todo-smart",
  "closeReadingLevel": "todo-smart",
  "openListeningLevel": "todo-smart",
  "closeListeningLevel": "todo-smart",
  "openMockTestTimer": "todo-smart",
  "jmtToggle": "todo-smart",
  "jmtNextSection": "todo-smart",
  "closeMockTestTimer": "todo-smart",
  "openConsistency": "todo-smart2",
  "closeConsistency": "todo-smart2",
  "openWordFrequency": "todo-smart2",
  "closeWordFrequency": "todo-smart2",
  "openGrammarFrequency": "todo-smart2",
  "closeGrammarFrequency": "todo-smart2",
  "openCustomQuiz": "todo-smart2",
  "startCustomQuiz": "todo-smart2",
  "answerCustomQuiz": "todo-smart2",
  "closeCustomQuiz": "todo-smart2",
  "openMultiSkillDrill": "todo-smart2",
  "msdNext": "todo-smart2",
  "closeMultiSkillDrill": "todo-smart2",
  "openIntervalOptimizer": "todo-smart2",
  "closeIntervalOptimizer": "todo-smart2",
  "openLearningJournal": "todo-smart2",
  "closeLearningJournal": "todo-smart2",
  "openForgettingCurve": "todo-smart2",
  "closeForgettingCurve": "todo-smart2",
  "openCategoryTracker": "todo-smart2",
  "closeCategoryTracker": "todo-smart2",
  "openSmartBookmarks": "todo-smart2",
  "closeSmartBookmarks": "todo-smart2",
  "settToggle": "todo-settings",
  "openQuizDifficulty": "todo-settings",
  "setQuizDiff": "todo-settings",
  "closeQuizDifficulty": "todo-settings",
  "openTimerConfig": "todo-settings",
  "setTimerDur": "todo-settings",
  "closeTimerConfig": "todo-settings",
  "openFontSizeConfig": "todo-settings",
  "adjFontSz": "todo-settings",
  "closeFontSizeConfig": "todo-settings",
  "openCardLayout": "todo-settings",
  "setCardLayout": "todo-settings",
  "closeCardLayout": "todo-settings",
  "openAnswerFormat": "todo-settings",
  "setAnsFormat": "todo-settings",
  "closeAnswerFormat": "todo-settings",
  "openAutoPlay": "todo-settings",
  "setAutoDelay": "todo-settings",
  "closeAutoPlay": "todo-settings",
  "openReminders": "todo-settings",
  "closeReminders": "todo-settings",
  "openSessionPresets": "todo-settings",
  "setSessionLen": "todo-settings",
  "closeSessionPresets": "todo-settings",
  "openDataSync": "todo-settings",
  "closeDataSync": "todo-settings",
  "openOfflineIndicator": "todo-settings",
  "closeOfflineIndicator": "todo-settings",
  "openSectionReset": "todo-settings",
  "resetSection": "todo-settings",
  "closeSectionReset": "todo-settings",
  "openQuizHistory": "todo-settings",
  "closeQuizHistory": "todo-settings",
  "openFavoriteGames": "todo-settings",
  "removeFavGame": "todo-settings",
  "closeFavoriteGames": "todo-settings",
  "openSidebarConfig": "todo-settings",
  "closeSidebarConfig": "todo-settings",
  "openGestureConfig": "todo-settings",
  "closeGestureConfig": "todo-settings",
  "openAudioConfig": "todo-settings",
  "setTTSRate": "todo-settings",
  "closeAudioConfig": "todo-settings",
  "openColorBlind": "todo-settings",
  "closeColorBlind": "todo-settings",
  "openDyslexiaFont": "todo-settings",
  "closeDyslexiaFont": "todo-settings",
  "openLargeTouch": "todo-settings",
  "closeLargeTouch": "todo-settings",
  "openAnimToggle": "todo-settings",
  "closeAnimToggle": "todo-settings",
  "openExportPDF": "todo-settings",
  "closeExportPDF": "todo-settings",
  "openShareProgress": "todo-settings",
  "shareDownloadImg": "todo-settings",
  "shareCopyText": "todo-settings",
  "closeShareProgress": "todo-settings",
  "openShortcutEditor": "todo-settings",
  "saveShortcut": "todo-settings",
  "captureShortcut": "todo-settings",
  "resetShortcuts": "todo-settings",
  "closeShortcutEditor": "todo-settings",
  "openThemeScheduler": "todo-settings",
  "closeThemeScheduler": "todo-settings",
  "openWidgetStart": "todo-settings",
  "closeWidgetStart": "todo-settings",
  "openStudyGoalSetting": "todo-settings",
  "setDailyGoal": "todo-settings",
  "closeStudyGoalSetting": "todo-settings",
  "openStreakReward": "todo-settings",
  "closeStreakReward": "todo-settings",
  "openSoundEffects": "todo-settings",
  "closeSoundEffects": "todo-settings",
  "openContentFilter": "todo-settings",
  "closeContentFilter": "todo-settings",
  "openRomajiFade": "todo-settings",
  "closeRomajiFade": "todo-settings",
  "openMockVocab": "todo-jlptprep",
  "answerMockVocab": "todo-jlptprep",
  "closeMockVocab": "todo-jlptprep",
  "openMockGrammar": "todo-jlptprep",
  "answerMockGrammar": "todo-jlptprep",
  "closeMockGrammar": "todo-jlptprep",
  "openMockReading": "todo-jlptprep",
  "answerMockReading": "todo-jlptprep",
  "closeMockReading": "todo-jlptprep",
  "openMockListening": "todo-jlptprep",
  "answerMockListening": "todo-jlptprep",
  "closeMockListening": "todo-jlptprep",
  "openFullMockTest": "todo-jlptprep",
  "closeFullMockTest": "todo-jlptprep",
  "openTestStrategy": "todo-jlptprep",
  "closeTestStrategy": "todo-jlptprep",
  "openJLPTTraps": "todo-jlptprep",
  "closeJLPTTraps": "todo-jlptprep",
  "openVocabByFreq": "todo-jlptprep",
  "closeVocabByFreq": "todo-jlptprep",
  "openGrammarByFreq": "todo-jlptprep",
  "closeGrammarByFreq": "todo-jlptprep",
  "openReadStrategy": "todo-jlptprep",
  "closeReadStrategy": "todo-jlptprep",
  "openListenStrategy": "todo-jlptprep",
  "closeListenStrategy": "todo-jlptprep",
  "openAnswerSheet": "todo-jlptprep",
  "closeAnswerSheet": "todo-jlptprep",
  "openTimeMgmt": "todo-jlptprep",
  "closeTimeMgmt": "todo-jlptprep",
  "openElimination": "todo-jlptprep",
  "closeElimination": "todo-jlptprep",
  "openScorePredictor": "todo-jlptprep",
  "closeScorePredictor": "todo-jlptprep",
  "openJPCultureGuide": "todo-culture",
  "closeJPCultureGuide": "todo-culture",
  "openSeasonalGreetings": "todo-culture",
  "closeSeasonalGreetings": "todo-culture",
  "openVNMistakes": "todo-culture",
  "closeVNMistakes": "todo-culture",
  "openFalseFriends": "todo-culture",
  "closeFalseFriends": "todo-culture",
  "openNumberSystems": "todo-culture",
  "closeNumberSystems": "todo-culture",
  "openAddressFormat": "todo-culture",
  "closeAddressFormat": "todo-culture",
  "openJPCalendar": "todo-culture",
  "closeJPCalendar": "todo-culture",
  "openMoneyVocab": "todo-culture",
  "closeMoneyVocab": "todo-culture",
  "openMedicalVocab": "todo-culture",
  "closeMedicalVocab": "todo-culture",
  "openEmergencyPhrases": "todo-culture",
  "closeEmergencyPhrases": "todo-culture",
  "openTransportGuide": "todo-culture",
  "closeTransportGuide": "todo-culture",
  "openFoodGuide": "todo-culture",
  "closeFoodGuide": "todo-culture",
  "openShoppingPhrases": "todo-culture",
  "closeShoppingPhrases": "todo-culture",
  "openPhoneEmail": "todo-culture",
  "closePhoneEmail": "todo-culture",
  "openSelfIntro": "todo-culture",
  "closeSelfIntro": "todo-culture",
  "openVerbNounColl": "todo-extended2",
  "closeVerbNounColl": "todo-extended2",
  "openAdjNounColl": "todo-extended2",
  "closeAdjNounColl": "todo-extended2",
  "openAdverbGuide": "todo-extended2",
  "closeAdverbGuide": "todo-extended2",
  "openTransitions": "todo-extended2",
  "closeTransitions": "todo-extended2",
  "openDiaryTemplate": "todo-extended2",
  "closeDiaryTemplate": "todo-extended2",
  "openEmailTemplate2": "todo-extended2",
  "closeEmailTemplate2": "todo-extended2",
  "openBlogReading": "todo-extended2",
  "closeBlogReading": "todo-extended2",
  "openSongLyrics": "todo-extended2",
  "closeSongLyrics": "todo-extended2",
  "openAnimePhrases": "todo-extended2",
  "closeAnimePhrases": "todo-extended2",
  "openProverbDeep": "todo-extended2",
  "closeProverbDeep": "todo-extended2",
  "openKanjiEtymology": "todo-extended2",
  "closeKanjiEtymology": "todo-extended2",
  "openGrammarStories": "todo-extended2",
  "closeGrammarStories": "todo-extended2",
  "openDialogueLib": "todo-extended2",
  "closeDialogueLib": "todo-extended2",
  "openReadingLib": "todo-extended2",
  "closeReadingLib": "todo-extended2",
  "openListeningLib": "todo-extended2",
  "closeListeningLib": "todo-extended2",
  "openHandwriting2": "todo-extended2",
  "closeHandwriting2": "todo-extended2",
  "openVocabByTopic": "todo-extended2",
  "closeVocabByTopic": "todo-extended2",
  "openGrammarUsageFreq": "todo-extended2",
  "closeGrammarUsageFreq": "todo-extended2",
  "openConversationPatterns": "todo-extended2",
  "closeConversationPatterns": "todo-extended2",
  "openN4Checklist": "todo-extended2",
  "closeN4Checklist": "todo-extended2"
};
async function loadLegacyFeature(fnName, { strict = false, signal } = {}) {
  if (signal == null ? void 0 : signal.aborted) return;
  syncLegacyToolState();
  const destination = worldToolDestination(fnName);
  if (destination == null ? void 0 : destination.activityId) return navigateWorldToolActivity(destination.activityId);
  if (destination == null ? void 0 : destination.trainerId) return navigateWorldToolActivity(`tool.${fnName}`);
  await installLegacyToolGlobals();
  if (signal == null ? void 0 : signal.aborted) return;
  if (window[fnName]) {
    if (fnName === "startSpeedMemory") ensureSpeedMemoryShell(window.resetMemContainer);
    return window[fnName]();
  }
  const moduleName = legacyRegistry[fnName];
  if (!moduleName) {
    if (strict) throw new Error("Chưa tìm thấy bộ xử lý của công cụ học này.");
    console.warn("[LegacyLoader] No chunk mapping found for: " + fnName);
    return;
  }
  try {
    let mod;
    switch (moduleName) {
      case "study-tools":
        mod = await __vitePreload(() => import("./study-tools-HBv-wCN4.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url);
        break;
      case "quiz":
        mod = await __vitePreload(() => import("./quiz-DpQK5S-N.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,7,13,8,9,14,15,11]) : void 0, import.meta.url);
        break;
      case "speed-memory":
        mod = await __vitePreload(() => import("./speed-memory-CY6hXOFZ.js"), true ? __vite__mapDeps([16,17,1,2,3,4,5,6,7,11,8,9,14,15]) : void 0, import.meta.url);
        break;
      case "todo-audio":
        mod = await __vitePreload(() => import("./todo-audio-7Ej21FbX.js"), true ? __vite__mapDeps([18,1,2,3,4,5,6,7,8,9,13,11]) : void 0, import.meta.url);
        break;
      case "todo-writing":
        mod = await __vitePreload(() => import("./todo-writing-lqgpOZPv.js"), true ? __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,11]) : void 0, import.meta.url);
        break;
      case "todo-reading":
        mod = await __vitePreload(() => import("./todo-reading-iP13jbcu.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,11]) : void 0, import.meta.url);
        break;
      case "todo-analytics":
        mod = await __vitePreload(() => import("./todo-analytics-DQ1CDpZe.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url);
        break;
      case "todo-ai":
        mod = await __vitePreload(() => import("./todo-ai-Dt94SH_j.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url);
        break;
      case "todo-ux":
        mod = await __vitePreload(() => import("./todo-ux-DWGli71e.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,11]) : void 0, import.meta.url);
        break;
      case "todo-sharing":
        mod = await __vitePreload(() => import("./todo-sharing-CtCXLk78.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,8,9,11]) : void 0, import.meta.url);
        break;
      case "todo-content":
        mod = await __vitePreload(() => import("./todo-content-KrpkKRji.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7,11,9]) : void 0, import.meta.url);
        break;
      case "todo-daily":
        mod = await __vitePreload(() => import("./todo-daily-BoT6SMng.js"), true ? __vite__mapDeps([26,17,1,2,3,4,5,6,7,11,8,9]) : void 0, import.meta.url);
        break;
      case "todo-reference":
        mod = await __vitePreload(() => import("./todo-reference-D5zG60yD.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7,11]) : void 0, import.meta.url);
        break;
      case "todo-immersion":
        mod = await __vitePreload(() => import("./todo-immersion-BOi5nh5j.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,11]) : void 0, import.meta.url);
        break;
      case "todo-flashcards":
        mod = await __vitePreload(() => import("./todo-flashcards-DGpj5YpA.js"), true ? __vite__mapDeps([29,1,2,3,4,5,6,7,8,9,13,10,11]) : void 0, import.meta.url);
        break;
      case "todo-smart":
        mod = await __vitePreload(() => import("./todo-smart-c9XsUTt1.js"), true ? __vite__mapDeps([30,17,1,2,3,4,5,6,7,11,8,9]) : void 0, import.meta.url);
        break;
      case "todo-smart2":
        mod = await __vitePreload(() => import("./todo-smart2-B7fY4JHr.js"), true ? __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,13,11]) : void 0, import.meta.url);
        break;
      case "todo-settings":
        mod = await __vitePreload(() => import("./todo-settings-BLLTdAB_.js"), true ? __vite__mapDeps([32,1,2,3,4,5,6,7,8,9,11]) : void 0, import.meta.url);
        break;
      case "todo-jlptprep":
        mod = await __vitePreload(() => import("./todo-jlptprep-_2J7K4pw.js"), true ? __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url);
        break;
      case "todo-culture":
        mod = await __vitePreload(() => import("./todo-culture-C66oTZ8y.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,11]) : void 0, import.meta.url);
        break;
      case "todo-extended2":
        mod = await __vitePreload(() => import("./todo-extended2-DOWjcILL.js"), true ? __vite__mapDeps([35,1,2,3,4,5,6,7,10,8,9,11]) : void 0, import.meta.url);
        break;
      default:
        if (strict) throw new Error("Không tìm thấy gói công cụ học.");
        console.error("Unknown module", moduleName);
        return;
    }
    if (signal == null ? void 0 : signal.aborted) return;
    for (const [name, value] of Object.entries(mod)) {
      window[name] = typeof value === "function" ? (...args) => {
        syncLegacyToolState();
        return value(...args);
      } : value;
    }
    if (moduleName === "speed-memory") ensureSpeedMemoryShell(mod.resetMemContainer);
    if (window[fnName]) {
      return window[fnName]();
    } else {
      if (strict) throw new Error("Gói công cụ thiếu chức năng được yêu cầu.");
      console.error("[LegacyLoader] Export missing in module:", fnName);
    }
  } catch (err) {
    if (strict) throw err;
    console.error("[LegacyLoader] Failed to load module:", moduleName, err);
  }
}
let globalsReady;
async function installLegacyToolGlobals() {
  if (!globalsReady) globalsReady = Promise.all([
    __vitePreload(() => import("./tts-DDDtO8rG.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7]) : void 0, import.meta.url),
    __vitePreload(() => import("./bookmarks-DzO2NqfT.js"), true ? __vite__mapDeps([10,1,2,3,4,5,6,7,8,9,11]) : void 0, import.meta.url),
    __vitePreload(() => import("./game-hints-C7RIXbTT.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,9]) : void 0, import.meta.url)
  ]).then((modules) => {
    for (const mod of modules) for (const [name, value] of Object.entries(mod)) {
      if (["speak", "speakBtn", "speakVi", "speakJpPromise", "toggleBookmark", "bmBtn", "ttsBtn", "jishoBtn", "forvoBtn", "setGameHint", "gameHintBarHTML", "toggleGameHint", "getGameHintState"].includes(name) && typeof value === "function" && typeof window[name] !== "function") window[name] = value;
    }
    window.startFlashcards = () => navigateWorldToolActivity("trainer.daily-practice.review");
    window.switchTab = (type) => {
      window.S.tab = type;
      window.S.search = "";
      window.S.section = "all";
    };
    window.render = () => {
      const type = ["vocab", "kanji", "grammar", "minna"].includes(window.S.tab) ? window.S.tab : "vocab";
      const prefix = { vocab: "v:", kanji: "k:", grammar: "g:" }[type] || "";
      const key = window.S.search ? `${prefix}${window.S.search}` : void 0;
      const section = window.S.section && window.S.section !== "all" ? `/content/${type}/${encodeURIComponent(window.S.section)}` : void 0;
      navigateWorldToolActivity(`content.${type}`, key, key ? void 0 : section);
    };
  });
  return globalsReady;
}
function ensureSpeedMemoryShell(reset) {
  let overlay = document.getElementById("mem-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "mem-overlay";
    overlay.className = "game-overlay";
    const close = document.createElement("button");
    close.className = "st-close";
    close.textContent = "Đóng";
    close.setAttribute("onclick", "closeSpeedMemory()");
    const content = document.createElement("div");
    content.id = "mem-container";
    content.className = "mg-container";
    overlay.append(close, content);
    worldOverlayMount().appendChild(overlay);
  }
  reset();
}
export {
  canonicalToolDayStats as a,
  canonicalToolState as b,
  canonicalToolMistakes as c,
  watchWorldToolMount as d,
  loadLegacyFeature as l,
  worldOverlayMount as w
};
