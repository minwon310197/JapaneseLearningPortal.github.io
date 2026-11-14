const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DailyPractice-BoGkCPUw.js","./vendor-react-DMamQVB4.js","./TrainerTopBar-Bnk9RI1L.js","./useDialogFocus-DDCOraXF.js","./index-qzEsKs-W.js","./vendor-supabase-DTEAj5J1.js","./vendor-router-udyIeVgQ.js","./vendor-runtime-BbOs9S9B.js","./vendor-icons-MeSkysD6.js","./index-9fUQtPyz.css","./empty-Bvm-mx50.js","./HitPause-BEzg5i-7.js","./study-results-BCA5EZrq.js","./index-hY8i07o0.js","./quest-chains-CiwzmCpJ.js","./QualityContext-BEPAZrxH.js","./useScoreEngine-BNSCliVP.js","./QuizMode-BcsUZ8m4.js","./PhaseRibbon-a7dR3mxU.js","./AIGameHelper-BNBsogag.js","./useAIKey-2p5WIS3N.js","./client-CoI4WpPy.js","./api-BAg1LJRR.js","./ModeResultsScreen-IcpcYaix.js","./ModeResultsScreen-BvhueovD.css","./QuizFeedback-CNljd8Xl.js","./MatchMode-V9XHLCIR.js","./ScaffoldingLayer-CzejW9Al.js","./TrueFalseMode-DDMTrPUQ.js","./FlashcardMode-Cd3PVeb9.js","./useDataHelper-C8jS50BC.js","./lesson-filter-DQOC--QD.js","./useGrammarQuiz-CKMIasLe.js","./useGameEngine-CLeNOt_J.js","./DailyPractice-sZecCyff.css","./VocabDojo-3txDSswB.js","./useStudySession-DPnHho3d.js","./FillBlankMode-CO-Qvrxi.js","./WorldSurfaceContext-4twqImdW.js","./VocabDojo-CbrRXWTs.css","./KanjiAcademy-C3EF5Jwy.js","./KanjiBattleMode-N67iR6dI.js","./ajl-rewards-Cvt92_ii.js","./vendor-motion-CRpfP5tD.js","./GrammarArena-0LogFYCi.js","./SentenceBuildMode-DrVyq8BC.js","./SentenceBuildMode-BckzqNHP.css","./index-LF91F0yM.js","./ConjugationDojo-BUi0bjxh.js","./GameplayEffects-CiIFUZaF.js","./ListeningLab-B4ayflBn.js","./ListeningLab-DMV_LKAe.css","./ReadingRoom-K5OxGgc7.js","./ReadingRoom-CxaPVclh.css","./JLPTMock-CLHVq2S8.js","./MinnaLessons-C3QCw4TV.js","./PuzzleWorld-sj9oOU_C.js","./PuzzleWorld-B1ACQWwV.css","./MindTricks-CjDPGeC3.js","./MindTricks-DgSOWZmw.css","./StoryMode-CEhnwKRv.js","./StoryMode-B4orAei6.css","./AdventureArena-CxcAE35R.js","./AdventureArena-A78G9r9C.css","./index-Bv9mhJg6.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
const trainer = (metadata) => {
  const primaryModes = metadata.primaryModes || [];
  const moreModes = metadata.moreModes || [];
  return {
    status: "stable",
    estimatedMinutes: 10,
    ...metadata,
    primaryModes,
    moreModes,
    // Canonical mode list is derived, so navigation and routing cannot drift.
    modes: [.../* @__PURE__ */ new Set([...primaryModes, ...moreModes])]
  };
};
const TRAINER_DEFINITIONS = {
  "daily-practice": trainer({ title: "Ôn tập hôm nay", shortTitle: "Hôm nay", category: "recommended", domain: "mixed", icon: "ÔN", description: "SRS, lỗi gần đây và kỹ năng cần ưu tiên.", primaryModes: ["today", "review", "weak-points"], moreModes: ["challenge"], recommendedFor: ["due", "weak"], modes: ["today", "review", "challenge", "weak-points"], load: () => __vitePreload(() => import("./DailyPractice-BoGkCPUw.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]) : void 0, import.meta.url) }),
  "vocab-dojo": trainer({ title: "Từ vựng", shortTitle: "Từ vựng", category: "core", domain: "vocab", icon: "TỪ", description: "Nhớ nghĩa, cách đọc và cách dùng từ N4.", primaryModes: ["flashcard", "quiz", "fill-blank", "listening", "match"], moreModes: ["match-drag", "true-false", "speed", "speed-run", "category-sort", "bingo", "picture", "minimal-pair", "word-chain", "cloze-passage", "compound-word", "word-family"], modes: ["flashcard", "quiz", "fill-blank", "match", "match-drag", "listening", "true-false", "speed", "speed-run", "category-sort", "bingo", "picture", "minimal-pair", "word-chain", "cloze-passage", "compound-word", "word-family"], load: () => __vitePreload(() => import("./VocabDojo-3txDSswB.js"), true ? __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,29,18,23,19,20,21,22,24,17,25,26,27,36,37,28,30,31,38,33,39]) : void 0, import.meta.url) }),
  "kanji-academy": trainer({ title: "Kanji", shortTitle: "Kanji", category: "core", domain: "kanji", icon: "漢", description: "Luyện nghĩa, âm đọc, viết và phân biệt kanji.", primaryModes: ["quiz", "flashcard", "writing", "on-kun", "look-alike"], moreModes: ["match", "reading", "family", "okurigana"], modes: ["flashcard", "quiz", "match", "reading", "writing", "family", "okurigana", "on-kun", "look-alike"], load: () => __vitePreload(() => import("./KanjiAcademy-C3EF5Jwy.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,29,18,23,19,20,21,22,24,17,25,26,27,36,41,42,43,30,31]) : void 0, import.meta.url) }),
  "grammar-arena": trainer({ title: "Ngữ pháp", shortTitle: "Ngữ pháp", category: "core", domain: "grammar", icon: "NGỮ", description: "Mẫu câu, sửa lỗi và biến đổi dạng N4.", primaryModes: ["quiz", "fill-blank", "particles", "correction", "form-transform"], moreModes: ["cloze", "flashcard", "true-false", "scramble", "sort", "sort-timeline", "grammar-vs", "pattern-completion"], modes: ["quiz", "fill-blank", "cloze", "particles", "flashcard", "true-false", "scramble", "sort", "sort-timeline", "grammar-vs", "correction", "form-transform", "pattern-completion"], load: () => __vitePreload(() => import("./GrammarArena-0LogFYCi.js"), true ? __vite__mapDeps([44,1,45,4,5,6,7,8,9,46,16,2,3,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25,29,28,27,37,36,30,31,32]) : void 0, import.meta.url) }),
  "particle-dojo": trainer({ title: "Trợ từ", shortTitle: "Trợ từ", category: "core", domain: "grammar", icon: "TRỢ", description: "Chọn trợ từ đúng theo ngữ cảnh.", primaryModes: ["fill-drop", "quick-pick", "cascade", "sentence-build"], modes: ["fill-drop", "quick-pick", "cascade", "sentence-build"], load: () => __vitePreload(() => import("./index-LF91F0yM.js"), true ? __vite__mapDeps([47,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,32,19,20,21,22,45,46]) : void 0, import.meta.url) }),
  "conjugation-dojo": trainer({ title: "Chia thể", shortTitle: "Chia thể", category: "core", domain: "grammar", icon: "CHIA", description: "Chia động từ và tính từ trong phạm vi N4.", primaryModes: ["verb-quiz", "verb-fill", "adj-quiz", "adj-fill", "mixed"], moreModes: ["flashcard", "volitional-drill"], modes: ["verb-quiz", "verb-fill", "adj-quiz", "adj-fill", "mixed", "flashcard", "volitional-drill"], load: () => __vitePreload(() => import("./ConjugationDojo-BUi0bjxh.js"), true ? __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,49,29,18,23,19,20,21,22,24]) : void 0, import.meta.url) }),
  "listening-lab": trainer({ title: "Nghe hiểu", shortTitle: "Nghe", category: "core", domain: "listening", icon: "NGHE", description: "Nghe hiểu, chính tả và hội thoại N4.", primaryModes: ["comprehension", "dictation", "dialogue", "numbers"], moreModes: ["speech", "drills", "radio"], modes: ["dictation", "comprehension", "speech", "drills", "numbers", "dialogue", "radio"], load: () => __vitePreload(() => import("./ListeningLab-B4ayflBn.js"), true ? __vite__mapDeps([50,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,49,17,18,19,20,21,22,23,24,25,30,31,33,51]) : void 0, import.meta.url) }),
  "reading-room": trainer({ title: "Đọc hiểu", shortTitle: "Đọc", category: "core", domain: "reading", icon: "ĐỌC", description: "Đoạn văn, câu và suy luận theo ngữ cảnh.", primaryModes: ["passages", "sentences", "context"], modes: ["passages", "sentences", "context"], load: () => __vitePreload(() => import("./ReadingRoom-K5OxGgc7.js"), true ? __vite__mapDeps([52,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,30,31,33,53]) : void 0, import.meta.url) }),
  "jlpt-mock": trainer({ title: "Thi thử JLPT N4", shortTitle: "Thi thử", category: "assessment", domain: "exam", icon: "N4", description: "Đánh giá theo từng phần hoặc toàn bài.", estimatedMinutes: 25, primaryModes: ["full", "vocab-section", "grammar-section", "reading-section", "listening-section"], modes: ["full", "vocab-section", "grammar-section", "reading-section", "listening-section"], load: () => __vitePreload(() => import("./JLPTMock-CLHVq2S8.js"), true ? __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,30,31,32]) : void 0, import.meta.url) }),
  "minna-lessons": trainer({ title: "Minna no Nihongo", shortTitle: "Minna", category: "course", domain: "minna", icon: "MIN", description: "Luyện theo bài Minna đang học.", primaryModes: ["lesson-picker", "vocab", "grammar", "quiz", "combined-quiz"], modes: ["lesson-picker", "vocab", "grammar", "quiz", "combined-quiz"], load: () => __vitePreload(() => import("./MinnaLessons-C3QCw4TV.js"), true ? __vite__mapDeps([55,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,29,18,23,19,20,21,22,24,17,25]) : void 0, import.meta.url) }),
  "puzzle-world": trainer({ title: "Câu đố từ vựng", shortTitle: "Câu đố", category: "games", domain: "mixed", icon: "ĐỐ", description: "Trò chơi chữ hỗ trợ ghi nhớ.", primaryModes: ["hangman", "build", "wordsearch", "crossword", "speed-type"], modes: ["hangman", "speed-type", "build", "wordsearch", "crossword"], load: () => __vitePreload(() => import("./PuzzleWorld-sj9oOU_C.js"), true ? __vite__mapDeps([56,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,30,31,33,57]) : void 0, import.meta.url) }),
  "mind-tricks": trainer({ title: "Mẹo ghi nhớ", shortTitle: "Ghi nhớ", category: "games", domain: "mixed", icon: "NHỚ", description: "Liên tưởng, mẫu hình và trí nhớ âm thanh.", primaryModes: ["memory", "association", "pattern", "kanji-parts", "audio-memory"], moreModes: ["speed", "odd-one-out"], modes: ["memory", "pattern", "speed", "association", "kanji-parts", "odd-one-out", "audio-memory"], load: () => __vitePreload(() => import("./MindTricks-CjDPGeC3.js"), true ? __vite__mapDeps([58,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,30,31,33,59]) : void 0, import.meta.url) }),
  "story-mode": trainer({ title: "Học qua câu chuyện", shortTitle: "Câu chuyện", category: "games", domain: "reading", icon: "TRUYỆN", description: "Đọc và quyết định trong câu chuyện N4.", primaryModes: ["palace", "adventures", "scenarios"], modes: ["palace", "adventures", "scenarios"], load: () => __vitePreload(() => import("./StoryMode-CEhnwKRv.js"), true ? __vite__mapDeps([60,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,30,31,33,61]) : void 0, import.meta.url) }),
  "adventure-arena": trainer({ title: "Thử thách phiêu lưu", shortTitle: "Phiêu lưu", category: "challenge", domain: "mixed", icon: "THỬ", description: "Thử thách học tập có cường độ cao hơn.", primaryModes: ["kanji-battle", "arena-blitz", "ninja-typing", "world-boss"], moreModes: ["izakaya", "anime-quotes", "sushi-chef"], modes: ["kanji-battle", "arena-blitz", "ninja-typing", "izakaya", "anime-quotes", "sushi-chef", "world-boss"], load: () => __vitePreload(() => import("./AdventureArena-CxcAE35R.js"), true ? __vite__mapDeps([62,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,41,42,27,23,19,20,21,22,24,25,43,30,31,33,63]) : void 0, import.meta.url) }),
  "boss-battle": trainer({ title: "Đấu trùm kiến thức", shortTitle: "Đấu trùm", category: "challenge", domain: "mixed", icon: "BOSS", description: "Chuỗi câu hỏi dài dành cho người muốn thử sức.", primaryModes: ["easy", "normal", "hard"], moreModes: ["nightmare"], modes: ["easy", "normal", "hard", "nightmare"], load: () => __vitePreload(() => import("./index-Bv9mhJg6.js"), true ? __vite__mapDeps([64,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,49,30,31,38]) : void 0, import.meta.url) })
};
const TRAINER_REGISTRY = Object.freeze(Object.fromEntries(
  Object.entries(TRAINER_DEFINITIONS).map(([id, metadata]) => [id, Object.freeze({
    ...metadata,
    id,
    route: `/trainer/${id}`,
    available: !["hidden", "unavailable"].includes(metadata.status)
  })])
));
const TRAINER_MODE_LABELS = Object.freeze({
  today: "Hôm nay",
  review: "Ôn đến hạn",
  "weak-points": "Điểm yếu",
  challenge: "Thử thách",
  flashcard: "Thẻ nhớ",
  quiz: "Trắc nghiệm",
  "fill-blank": "Điền chỗ trống",
  listening: "Nghe",
  match: "Ghép cặp",
  writing: "Luyện viết",
  reading: "Âm đọc",
  "on-kun": "Âm On/Kun",
  "look-alike": "Kanji dễ nhầm",
  particles: "Trợ từ",
  correction: "Sửa câu",
  "form-transform": "Biến đổi dạng",
  dictation: "Nghe chép",
  comprehension: "Nghe hiểu",
  dialogue: "Hội thoại",
  passages: "Bài đọc",
  sentences: "Câu",
  context: "Ngữ cảnh",
  full: "Toàn bài",
  "vocab-section": "Từ vựng",
  "grammar-section": "Ngữ pháp",
  "reading-section": "Đọc",
  "listening-section": "Nghe",
  "match-drag": "Kéo thả ghép cặp",
  "true-false": "Đúng hoặc sai",
  speed: "Phản xạ nhanh",
  "speed-run": "Chạy đua tốc độ",
  "category-sort": "Phân loại từ",
  bingo: "Bingo từ vựng",
  picture: "Từ qua hình ảnh",
  "minimal-pair": "Phân biệt âm gần",
  "word-chain": "Nối chuỗi từ",
  "cloze-passage": "Điền đoạn văn",
  "compound-word": "Từ ghép",
  "word-family": "Họ từ",
  family: "Bộ kanji",
  okurigana: "Okurigana",
  cloze: "Điền ngữ cảnh",
  scramble: "Sắp xếp câu",
  sort: "Phân loại",
  "sort-timeline": "Sắp xếp trình tự",
  "grammar-vs": "So sánh ngữ pháp",
  "pattern-completion": "Hoàn thành mẫu câu",
  "fill-drop": "Thả trợ từ",
  "quick-pick": "Chọn nhanh",
  cascade: "Chuỗi trợ từ",
  "sentence-build": "Ghép câu",
  "verb-quiz": "Động từ trắc nghiệm",
  "verb-fill": "Điền dạng động từ",
  "adj-quiz": "Tính từ trắc nghiệm",
  "adj-fill": "Điền dạng tính từ",
  mixed: "Luyện tổng hợp",
  "volitional-drill": "Luyện thể ý chí",
  speech: "Luyện nói",
  drills: "Bài nghe ngắn",
  radio: "Radio tiếng Nhật",
  "lesson-picker": "Chọn bài",
  vocab: "Từ vựng",
  grammar: "Ngữ pháp",
  "combined-quiz": "Trắc nghiệm tổng hợp",
  hangman: "Đoán từ",
  build: "Ghép từ",
  wordsearch: "Tìm từ",
  crossword: "Ô chữ",
  "speed-type": "Gõ nhanh",
  memory: "Lật thẻ nhớ",
  association: "Liên tưởng",
  pattern: "Nhận diện mẫu",
  "kanji-parts": "Bộ phận kanji",
  "audio-memory": "Trí nhớ âm thanh",
  "odd-one-out": "Tìm mục khác biệt",
  palace: "Cung điện ký ức",
  adventures: "Truyện phiêu lưu",
  scenarios: "Tình huống",
  "kanji-battle": "Đấu kanji",
  "arena-blitz": "Đấu trường tốc độ",
  "ninja-typing": "Ninja gõ chữ",
  "world-boss": "Trùm thế giới",
  izakaya: "Quán Izakaya",
  "anime-quotes": "Câu thoại anime",
  "sushi-chef": "Đầu bếp sushi",
  easy: "Dễ",
  normal: "Thường",
  hard: "Khó",
  nightmare: "Ác mộng"
});
function getTrainerMeta(id) {
  return TRAINER_REGISTRY[id] || null;
}
function getVisibleTrainers() {
  return Object.entries(TRAINER_REGISTRY).filter(([, value]) => value.available);
}
function getTrainerModeLabel(mode) {
  return TRAINER_MODE_LABELS[mode] || String(mode || "").replaceAll("-", " ");
}
export {
  TRAINER_REGISTRY as T,
  getVisibleTrainers as a,
  getTrainerModeLabel as b,
  getTrainerMeta as g
};
