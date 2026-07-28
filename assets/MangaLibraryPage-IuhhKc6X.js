import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { d as useLearningStore, bl as SubgameCanvas, bY as MangaAlcove, bZ as AJL_MANGA_CHAPTERS, bn as RarityAura } from "./feature-3d-ClP3ARU5.js";
import { B as BookOpen, t as Lock, L as LockOpen, d as Sparkles } from "./vendor-icons-DHCyxOF-.js";
import { m as motion, A as AnimatePresence } from "./vendor-motion-CoQCRLnb.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
function MangaLibraryPage() {
  const mangaProgress = useLearningStore((s) => s.mangaProgress || {});
  const markMangaRead = useLearningStore((s) => s.markMangaRead);
  const addXp = useLearningStore((s) => s.addXp);
  const [readingChapter, setReadingChapter] = reactExports.useState(null);
  const readingTimeoutRef = reactExports.useRef(null);
  const activeChapterIdRef = reactExports.useRef("");
  reactExports.useEffect(() => () => {
    if (readingTimeoutRef.current) {
      window.clearTimeout(readingTimeoutRef.current);
      readingTimeoutRef.current = null;
    }
    activeChapterIdRef.current = "";
  }, []);
  const readChapter = reactExports.useCallback((chapter, locked) => {
    if (!chapter || locked || activeChapterIdRef.current) return;
    const currentProgress = useLearningStore.getState().mangaProgress || {};
    const alreadyRead = !!currentProgress[chapter.id];
    activeChapterIdRef.current = chapter.id;
    setReadingChapter(chapter);
    readingTimeoutRef.current = window.setTimeout(() => {
      readingTimeoutRef.current = null;
      activeChapterIdRef.current = "";
      const latestProgress = useLearningStore.getState().mangaProgress || {};
      if (!latestProgress[chapter.id]) {
        addXp(chapter.reward);
        markMangaRead(chapter.id);
      }
      setReadingChapter(null);
    }, alreadyRead ? 700 : 1600);
  }, [addXp, markMangaRead]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { padding: "1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "1rem", marginBottom: 12 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: { margin: 0, display: "inline-flex", gap: 8, alignItems: "center", fontSize: "1.45rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 22 }),
        " Thư viện manga"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { marginTop: 6, marginBottom: 0, color: "var(--n4-text-dim)" }, children: "Đọc chương theo thứ tự. Hoàn thành lần đầu sẽ nhận thưởng XP." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-manga-remaster__hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-manga-remaster__hero-fallback", children: "📚 Đang dựng thư viện…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SubgameCanvas, { cameraPos: [0, 2, 4], fov: 50, backgroundColor: "#15100a", envPreset: "dawn", orbit: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MangaAlcove, {}) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 12 }, children: AJL_MANGA_CHAPTERS.map((chapter, index) => {
      const read = !!mangaProgress[chapter.id];
      const prev = AJL_MANGA_CHAPTERS[index - 1];
      const locked = index > 0 && !mangaProgress[prev.id];
      const isBusy = Boolean(readingChapter);
      const rarity = chapter.reward >= 300 ? "legendary" : chapter.reward >= 150 ? "epic" : chapter.reward >= 80 ? "rare" : "common";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: read ? rarity : "common", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          whileHover: locked ? void 0 : { y: -2, scale: 1.01 },
          className: "n4-card",
          style: {
            textAlign: "left",
            padding: "0.95rem",
            opacity: locked ? 0.62 : isBusy ? 0.82 : 1,
            cursor: locked ? "not-allowed" : isBusy ? "progress" : "pointer",
            borderColor: read ? "var(--n4-success)" : "var(--n4-border)"
          },
          onClick: () => readChapter(chapter, locked),
          disabled: locked || isBusy,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.6rem" }, children: "📖" }),
              locked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 16 }) : read ? /* @__PURE__ */ jsxRuntimeExports.jsx(LockOpen, { size: 16, color: "var(--n4-success)" }) : null
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 700, marginBottom: 4 }, children: chapter.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "var(--n4-text-dim)", fontSize: ".86rem", marginBottom: 10 }, children: [
              "Difficulty: ",
              chapter.difficulty
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 700 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14 }),
              " +",
              chapter.reward,
              " XP"
            ] })
          ]
        }
      ) }, chapter.id);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: readingChapter && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 80,
          background: "rgba(0,0,0,0.72)",
          display: "grid",
          placeItems: "center",
          padding: "1rem"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { y: 18, scale: 0.96 },
            animate: { y: 0, scale: 1 },
            className: "n4-card",
            style: { maxWidth: 560, width: "100%", padding: "1.2rem", textAlign: "center" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "3.6rem", marginBottom: 8 }, children: "📚" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { marginTop: 0 }, children: readingChapter.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-dim)", marginBottom: 0 }, children: "Đang chìm đắm vào bối cảnh câu chuyện..." })
            ]
          }
        )
      }
    ) })
  ] });
}
export {
  MangaLibraryPage as default
};
