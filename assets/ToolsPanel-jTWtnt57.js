const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./todo-audio-Kl1W2dZc.js","./feature-3d-jK3b4Iv-.js","./vendor-react-BYxMSDiB.js","./vendor-three-Ba7Uoy0A.js","./feature-3d-hud-Dp6hMoyV.js","./vendor-supabase-DTEAj5J1.js","./feature-3d-CUwqVi7Q.css","./toast-CJdbqLP6.js","./tts-CmyFILQG.js","./todo-writing-DyDzGMY4.js","./todo-reading-BiFFDzBi.js","./todo-analytics-B4DUJDk2.js","./bookmarks-wgIlRBn-.js","./todo-ai-7oDXYAqm.js","./todo-ux-CREhQ6D6.js","./todo-sharing-5vZpV8zU.js","./index-CjITGIof.js","./vendor-router-BTJacUKt.js","./vendor-icons-DHCyxOF-.js","./index-Dehd9LT2.css","./todo-content-Brbt_5LM.js","./todo-daily-i0RWa2na.js","./todo-reference-BXsLvfb4.js","./todo-immersion-BfYnd6iR.js","./todo-flashcards-ZeZ1Ji_5.js","./todo-smart-C2Kb5iLH.js","./todo-smart2-DhRvtskk.js","./todo-settings-CmrsaZ8M.js","./todo-jlptprep-BmGwZyKq.js","./todo-culture-DS31YV_J.js","./todo-extended2-DNlhekqa.js"])))=>i.map(i=>d[i]);
import { r as reactExports, u as useShallow, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { I as IOSGroupedList, a as IOSGroupedRow } from "./IOSGroupedList-CaxwLMfO.js";
import { _ as __vitePreload, a as useAppStore } from "./feature-3d-jK3b4Iv-.js";
import { b as useNavigate } from "./vendor-router-BTJacUKt.js";
import "./vendor-icons-DHCyxOF-.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-Dp6hMoyV.js";
import "./vendor-supabase-DTEAj5J1.js";
const legacyRegistry = {
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
async function loadLegacyFeature(fnName) {
  if (window[fnName]) {
    return window[fnName]();
  }
  const moduleName = legacyRegistry[fnName];
  if (!moduleName) {
    console.warn("[LegacyLoader] No chunk mapping found for: " + fnName);
    return;
  }
  try {
    let mod;
    switch (moduleName) {
      case "todo-audio":
        mod = await __vitePreload(() => import("./todo-audio-Kl1W2dZc.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0, import.meta.url);
        break;
      case "todo-writing":
        mod = await __vitePreload(() => import("./todo-writing-DyDzGMY4.js"), true ? __vite__mapDeps([9,1,2,3,4,5,6,7]) : void 0, import.meta.url);
        break;
      case "todo-reading":
        mod = await __vitePreload(() => import("./todo-reading-BiFFDzBi.js"), true ? __vite__mapDeps([10,1,2,3,4,5,6,7]) : void 0, import.meta.url);
        break;
      case "todo-analytics":
        mod = await __vitePreload(() => import("./todo-analytics-B4DUJDk2.js"), true ? __vite__mapDeps([11,1,2,3,4,5,6,7,12]) : void 0, import.meta.url);
        break;
      case "todo-ai":
        mod = await __vitePreload(() => import("./todo-ai-7oDXYAqm.js"), true ? __vite__mapDeps([13,1,2,3,4,5,6,7,12]) : void 0, import.meta.url);
        break;
      case "todo-ux":
        mod = await __vitePreload(() => import("./todo-ux-CREhQ6D6.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,7]) : void 0, import.meta.url);
        break;
      case "todo-sharing":
        mod = await __vitePreload(() => import("./todo-sharing-5vZpV8zU.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,16,17,18,19]) : void 0, import.meta.url);
        break;
      case "todo-content":
        mod = await __vitePreload(() => import("./todo-content-Brbt_5LM.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6]) : void 0, import.meta.url);
        break;
      case "todo-daily":
        mod = await __vitePreload(() => import("./todo-daily-i0RWa2na.js"), true ? __vite__mapDeps([21,1,2,3,4,5,6,7,12]) : void 0, import.meta.url);
        break;
      case "todo-reference":
        mod = await __vitePreload(() => import("./todo-reference-BXsLvfb4.js"), true ? __vite__mapDeps([22,1,2,3,4,5,6]) : void 0, import.meta.url);
        break;
      case "todo-immersion":
        mod = await __vitePreload(() => import("./todo-immersion-BfYnd6iR.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6]) : void 0, import.meta.url);
        break;
      case "todo-flashcards":
        mod = await __vitePreload(() => import("./todo-flashcards-ZeZ1Ji_5.js"), true ? __vite__mapDeps([24,1,2,3,4,5,6,7,16,17,18,19,8,12]) : void 0, import.meta.url);
        break;
      case "todo-smart":
        mod = await __vitePreload(() => import("./todo-smart-C2Kb5iLH.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,7]) : void 0, import.meta.url);
        break;
      case "todo-smart2":
        mod = await __vitePreload(() => import("./todo-smart2-DhRvtskk.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8]) : void 0, import.meta.url);
        break;
      case "todo-settings":
        mod = await __vitePreload(() => import("./todo-settings-CmrsaZ8M.js"), true ? __vite__mapDeps([27,1,2,3,4,5,6,7]) : void 0, import.meta.url);
        break;
      case "todo-jlptprep":
        mod = await __vitePreload(() => import("./todo-jlptprep-BmGwZyKq.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,12]) : void 0, import.meta.url);
        break;
      case "todo-culture":
        mod = await __vitePreload(() => import("./todo-culture-DS31YV_J.js"), true ? __vite__mapDeps([29,1,2,3,4,5,6]) : void 0, import.meta.url);
        break;
      case "todo-extended2":
        mod = await __vitePreload(() => import("./todo-extended2-DNlhekqa.js"), true ? __vite__mapDeps([30,1,2,3,4,5,6,12]) : void 0, import.meta.url);
        break;
      default:
        console.error("Unknown module", moduleName);
        return;
    }
    Object.assign(window, mod);
    if (window[fnName]) {
      return window[fnName]();
    } else {
      console.error("[LegacyLoader] Export missing in module:", fnName);
    }
  } catch (err) {
    console.error("[LegacyLoader] Failed to load module:", moduleName, err);
  }
}
const TOOL_GROUPS = [
  {
    id: "lookup",
    header: "📖 Tra cứu",
    tools: [
      { icon: "📕", label: "Từ điển Jisho", fn: "openJishoPopup", desc: "Từ điển Jisho" },
      { icon: "🔤", label: "Bảng kana", fn: "openKanaChart", desc: "Bảng ひらがな và カタカナ" },
      { icon: "📐", label: "Cẩm nang ngữ pháp", fn: "openGrammarQuickRef", desc: "Tra cứu nhanh ngữ pháp" },
      { icon: "🔍", label: "Tách bộ kanji", fn: "openKanjiDecomposer", desc: "Phân tích bộ thủ kanji" },
      { icon: "🗺️", label: "Khám phá từ vựng", fn: "openVocabExplorer", desc: "Khám phá từ vựng" },
      { icon: "📊", label: "Bảng chia thể", fn: "openConjugationTable", desc: "Bảng chia động từ" }
    ]
  },
  {
    id: "practice",
    header: "🎯 Luyện tập",
    tools: [
      { icon: "⚡", label: "Trí nhớ tốc độ", fn: "startSpeedMemory", desc: "Luyện trí nhớ tốc độ" },
      { icon: "🔄", label: "Chia động từ", fn: "startVerbConjugator", desc: "Bài tập chia động từ" },
      { icon: "🎲", label: "Ôn ngẫu nhiên", fn: "openRandomReview", desc: "Ôn luyện ngẫu nhiên" },
      { icon: "⭐", label: "Thẻ đã đánh dấu", fn: "startBookmarkFlashcards", desc: "Thẻ lật từ đã đánh dấu" },
      { icon: "📻", label: "Đài N4", fn: "startRadio", desc: "Nghe thụ động N4" },
      { icon: "📖", label: "Tốc độ đọc", fn: "openReadingSpeed", desc: "Luyện tốc độ đọc" }
    ]
  },
  {
    id: "tracking",
    header: "📊 Theo dõi",
    tools: [
      { icon: "📈", label: "Phân tích", fn: "openAnalyticsDash", desc: "Phân tích chi tiết" },
      { icon: "🔥", label: "Chuỗi học", fn: "openStudyStreak", desc: "Theo dõi chuỗi học" },
      { icon: "📋", label: "Thống kê nhanh", fn: "openQuickStats", desc: "Thống kê nhanh hôm nay" },
      { icon: "📅", label: "Kế hoạch học", fn: "openStudyPlanner", desc: "Lập kế hoạch tuần" },
      { icon: "🔁", label: "Hàng đợi SRS", fn: "openSrsQueue", desc: "Xem hàng đợi SRS" },
      { icon: "🏆", label: "Xuất thành tích", fn: "openAchievementExport", desc: "Xuất thành tích" }
    ]
  },
  {
    id: "challenge",
    header: "💪 Thử thách",
    tools: [
      { icon: "📓", label: "Sổ lỗi sai", fn: "openMistakeNotebook", desc: "Sổ ghi lỗi sai" },
      { icon: "🌟", label: "Thử thách ngày", fn: "openDailyChallenge", desc: "Thử thách hằng ngày" },
      { icon: "🎯", label: "Điểm yếu", fn: "openWeakPoints", desc: "Tập trung điểm yếu" }
    ]
  },
  {
    id: "support",
    header: "🛠️ Hỗ trợ",
    tools: [
      { icon: "⏱️", label: "Hẹn giờ học", fn: "openStudyTimer", desc: "Đếm giờ Pomodoro" },
      { icon: "📝", label: "Ghi chú học", fn: "openStudyNotes", desc: "Ghi chú nhanh" },
      { icon: "🧠", label: "Mẹo nhớ", fn: "openMnemonics", desc: "Phương pháp ghi nhớ" },
      { icon: "🔗", label: "Liên tưởng từ", fn: "openWordAssociation", desc: "Liên kết từ vựng" }
    ]
  },
  {
    id: "extended",
    header: "🚀 Tính năng mở rộng",
    tools: [
      { icon: "🔙", label: "Ôn N5", fn: "openN5Review", desc: "Ôn tập N5 cơ bản" },
      { icon: "🔄", label: "Tự/Tha động từ", fn: "openTransIntrans", desc: "Cặp tự động từ & tha động từ N4" },
      { icon: "📱", label: "Từ điển ngoại tuyến", fn: "openOfflineDict", desc: "Từ điển ngoại tuyến" },
      { icon: "🏮", label: "Tục ngữ", fn: "openProverbs", desc: "Tục ngữ Nhật Bản" },
      { icon: "🎌", label: "Kính ngữ cơ bản", fn: "openKeigoBasics", desc: "Kính ngữ cơ bản" },
      { icon: "🇻🇳", label: "Từ điển Hán-Việt", fn: "openHanVietDict", desc: "Từ điển Hán Việt" },
      { icon: "🎤", label: "So phát âm", fn: "openPronunciationCompare", desc: "So sánh phát âm" },
      { icon: "🗣️", label: "Nhại lời", fn: "openShadowing", desc: "Luyện nói nhại theo" },
      { icon: "🔊", label: "Chọn giọng", fn: "openVoiceSelect", desc: "Chọn giọng TTS" },
      { icon: "✍️", label: "Viết trên bảng", fn: "openCanvasWriting", desc: "Tập viết trên bảng" },
      { icon: "🧩", label: "Chi tiết bộ thủ", fn: "openRadicalDetail", desc: "Chi tiết bộ thủ" },
      { icon: "🃏", label: "Thẻ tự tạo", fn: "openCustomCards", desc: "Tạo thẻ riêng" }
    ]
  },
  {
    id: "daily",
    header: "📅 Học hằng ngày",
    tools: [
      { icon: "📅", label: "Từ hôm nay", fn: "openWordOfDay", desc: "Từ vựng hôm nay" },
      { icon: "🈲", label: "Kanji hôm nay", fn: "openKanjiOfDay", desc: "Kanji hôm nay" },
      { icon: "📐", label: "Ngữ pháp hôm nay", fn: "openGrammarOfDay", desc: "Ngữ pháp hôm nay" },
      { icon: "📚", label: "Bài mini", fn: "openDailyMiniLesson", desc: "Bài học mini 5 phút" },
      { icon: "🎧", label: "Nghe hằng ngày", fn: "openDailyListening", desc: "Luyện nghe 1 phút" },
      { icon: "💬", label: "Cụm từ hôm nay", fn: "openPhraseOfDay", desc: "Cụm từ hằng ngày" },
      { icon: "📋", label: "Tổng hợp lỗi sai", fn: "openMistakeDigest", desc: "Tổng hợp lỗi sai hôm qua" },
      { icon: "🌅", label: "Trắc nghiệm sáng", fn: "openMorningQuiz", desc: "10 câu trắc nghiệm buổi sáng" },
      { icon: "🌙", label: "Ôn tối", fn: "openNightReview", desc: "Tổng kết cuối ngày" }
    ]
  },
  {
    id: "reference",
    header: "📋 Tham khảo nhanh",
    tools: [
      { icon: "🔶", label: "Cẩm nang trợ từ", fn: "openParticleRef", desc: "Tất cả trợ từ + ví dụ" },
      { icon: "🔢", label: "Cẩm nang trợ số từ", fn: "openCounterRef", desc: "Số đếm + đơn vị" },
      { icon: "⏰", label: "Biểu thức thời gian", fn: "openTimeExprRef", desc: "Biểu thức thời gian" },
      { icon: "📖", label: "Nhóm động từ", fn: "openVerbGroupRef", desc: "Chia nhóm động từ" },
      { icon: "🏷️", label: "Cẩm nang tính từ", fn: "openAdjectiveRef", desc: "Bảng chia tính từ" },
      { icon: "🔗", label: "Từ nối", fn: "openConnectorRef", desc: "Liên từ nối câu" },
      { icon: "❓", label: "Từ để hỏi", fn: "openQuestionWordRef", desc: "Từ để hỏi" },
      { icon: "💥", label: "Từ tượng thanh", fn: "openOnomatopoeiaRef", desc: "Từ tượng thanh/hình" },
      { icon: "📌", label: "Cụm cố định", fn: "openSetPhraseRef", desc: "Cụm cố định N4" },
      { icon: "🙇", label: "Hướng dẫn kính ngữ", fn: "openHonorificRef", desc: "Kính ngữ nhanh" }
    ]
  },
  {
    id: "flashcards",
    header: "🃏 Biến thể thẻ lật",
    tools: [
      { icon: "🔊", label: "Thẻ nghe trước", fn: "openAudioFirstCards", desc: "Nghe trước, nhớ sau" },
      { icon: "🔄", label: "Thẻ đảo chiều", fn: "openReverseCards", desc: "Xem nghĩa → nhớ JP" },
      { icon: "📝", label: "Thẻ ngữ cảnh", fn: "openContextCards", desc: "Từ trong ngữ cảnh" },
      { icon: "🧩", label: "Thành phần kanji", fn: "openKanjiComponentCards", desc: "Phân tích bộ thủ" },
      { icon: "📐", label: "Mẫu ngữ pháp", fn: "openGrammarPatternCards", desc: "Thẻ mẫu ngữ pháp" },
      { icon: "💬", label: "Thẻ hội thoại", fn: "openConversationCards", desc: "Luyện hội thoại" },
      { icon: "❌", label: "Tập trung lỗi sai", fn: "openErrorFocusedCards", desc: "Từ hay sai" },
      { icon: "⏱️", label: "Thẻ hẹn giờ", fn: "openTimedCards", desc: "Tự động lật thẻ" },
      { icon: "📚", label: "Thẻ theo bài Minna", fn: "openMinnaLessonCards", desc: "Theo từng bài Minna" }
    ]
  },
  {
    id: "smart",
    header: "🧠 Học thông minh",
    tools: [
      { icon: "🗺️", label: "Lộ trình học", fn: "openStudyPath", desc: "Lộ trình học cá nhân" },
      { icon: "📊", label: "Bảng phân tích", fn: "openAnalyticsDash", desc: "Biểu đồ phân tích" },
      { icon: "📋", label: "Dự đoán điểm JLPT", fn: "openPredictedScore", desc: "Dự đoán điểm JLPT" },
      { icon: "🎯", label: "Luyện điểm yếu", fn: "openWeakDrill", desc: "Drill điểm yếu tự động" },
      { icon: "🏅", label: "Cột mốc", fn: "openMilestones", desc: "Huy hiệu và mốc" },
      { icon: "📈", label: "Tăng trưởng từ vựng", fn: "openVocabGrowth", desc: "Biểu đồ từ vựng" },
      { icon: "🌳", label: "Cây ngữ pháp", fn: "openGrammarTree", desc: "Cây kỹ năng ngữ pháp" },
      { icon: "🔬", label: "Phân tích lỗi", fn: "openMistakeAnalyzer", desc: "Phân loại lỗi sai" },
      { icon: "⚖️", label: "So sánh ngữ pháp", fn: "openGrammarCompare", desc: "So sánh ngữ pháp" }
    ]
  }
];
async function callLegacy(fnName) {
  await loadLegacyFeature(fnName);
}
function ToolsPanel() {
  const [search, setSearch] = reactExports.useState("");
  const navigate = useNavigate();
  const { sidebarStudyTools, sidebarExtended, sidebarPhase2, sidebarPhase3 } = useAppStore(
    useShallow((s) => ({
      sidebarStudyTools: s.sidebarStudyTools,
      sidebarExtended: s.sidebarExtended,
      sidebarPhase2: s.sidebarPhase2,
      sidebarPhase3: s.sidebarPhase3
    }))
  );
  const handleToolClick = reactExports.useCallback((tool) => {
    if (tool.route) {
      navigate(tool.route);
      return;
    }
    callLegacy(tool.fn);
  }, [navigate]);
  const VISIBILITY_MAP = {
    lookup: sidebarStudyTools,
    practice: sidebarStudyTools,
    tracking: sidebarStudyTools,
    challenge: sidebarStudyTools,
    support: sidebarStudyTools,
    extended: sidebarExtended,
    daily: sidebarPhase2,
    reference: sidebarPhase2,
    flashcards: sidebarPhase2,
    smart: sidebarPhase3
  };
  const filteredGroups = reactExports.useMemo(() => {
    let groups = TOOL_GROUPS.filter((g) => {
      if (g.id in VISIBILITY_MAP) return VISIBILITY_MAP[g.id] !== false;
      return true;
    });
    const q = search.toLowerCase().trim();
    if (!q) return groups;
    return groups.map((g) => ({
      ...g,
      tools: g.tools.filter(
        (t) => t.label.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || (t.fn || "").toLowerCase().includes(q) || (t.route || "").toLowerCase().includes(q)
      )
    })).filter((g) => g.tools.length > 0);
  }, [search, sidebarExtended, sidebarPhase2, sidebarPhase3]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "0 var(--n4-sp-4)", marginBottom: "var(--n4-sp-3)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: "n4-input",
        type: "text",
        placeholder: "🔍 Tìm công cụ...",
        value: search,
        onChange: (e) => setSearch(e.target.value),
        style: { width: "100%" }
      }
    ) }),
    filteredGroups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsx(IOSGroupedList, { header: group.header, children: group.tools.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      IOSGroupedRow,
      {
        icon: tool.icon,
        label: tool.label,
        description: tool.desc,
        chevron: true,
        onClick: () => handleToolClick(tool)
      },
      tool.fn || tool.route || tool.label
    )) }, group.id)),
    filteredGroups.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", style: { padding: "var(--n4-sp-8)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        'Không tìm thấy công cụ cho "',
        search,
        '"'
      ] })
    ] })
  ] });
}
export {
  ToolsPanel as default
};
