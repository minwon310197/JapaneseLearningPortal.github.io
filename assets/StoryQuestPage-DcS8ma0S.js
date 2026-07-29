import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore } from "./feature-3d-CFvJkEt3.js";
import { B as BookOpen, i as Star, g as ChevronRight } from "./vendor-icons-DHCyxOF-.js";
import { m as motion, A as AnimatePresence } from "./vendor-motion-CoQCRLnb.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
const CHAPTERS = [
  {
    id: "story-chap-1",
    title: "Chapter 1: The Awakening",
    theme: "🌌",
    reward: 500,
    nodes: [
      {
        speaker: "Mysterious Voice",
        text: "Wake up... The yokai are attacking the village!",
        jp: "起きて… 妖怪が村を襲っている！"
      },
      {
        speaker: "Sensei",
        text: "Take this wooden sword. We defend the academy now.",
        jp: "この木刀を持って。今すぐ学園を守る。"
      },
      {
        speaker: "You",
        text: "Understood. My journey begins from this moment.",
        jp: "わかりました。ここから私の旅が始まる。"
      }
    ]
  },
  {
    id: "story-chap-2",
    title: "Chapter 2: The First Trial",
    theme: "🏯",
    reward: 1e3,
    nodes: [
      {
        speaker: "Sensei",
        text: "Without Hiragana, every road is darkness.",
        jp: "ひらがながなければ、道はすべて闇だ。"
      },
      {
        speaker: "Rival",
        text: "You think you can master it faster than me?",
        jp: "私より早く覚えられると思う？"
      },
      {
        speaker: "You",
        text: "Challenge accepted.",
        jp: "勝負だ。"
      }
    ]
  },
  {
    id: "story-chap-3",
    title: "Chapter 3: Gate of Storm",
    theme: "⚡",
    reward: 1500,
    nodes: [
      {
        speaker: "Gate Keeper",
        text: "Only those who keep their combo under pressure may pass.",
        jp: "プレッシャーの中でコンボを守れる者だけ通れる。"
      },
      {
        speaker: "Sensei",
        text: "Breathe. Rhythm first, speed second.",
        jp: "息を整えろ。速さよりリズム。"
      },
      {
        speaker: "You",
        text: "I will break through the storm gate today.",
        jp: "今日、嵐の門を越えてみせる。"
      }
    ]
  }
];
function StoryQuestPage() {
  const storyProgress = useLearningStore((s) => s.storyProgress || {});
  const addXp = useLearningStore((s) => s.addXp);
  const completeScenario = useLearningStore((s) => s.completeScenario);
  const [activeChapterId, setActiveChapterId] = reactExports.useState(null);
  const [nodeIndex, setNodeIndex] = reactExports.useState(0);
  const [notice, setNotice] = reactExports.useState("");
  const activeChapter = reactExports.useMemo(
    () => CHAPTERS.find((chapter) => chapter.id === activeChapterId) || null,
    [activeChapterId]
  );
  const chapterNodes = (activeChapter == null ? void 0 : activeChapter.nodes) || [];
  const currentNode = chapterNodes[nodeIndex] || null;
  const isChapterLocked = reactExports.useCallback((chapterIndex) => {
    if (chapterIndex <= 0) return false;
    const previousChapter = CHAPTERS[chapterIndex - 1];
    return !storyProgress[previousChapter.id];
  }, [storyProgress]);
  const startChapter = reactExports.useCallback((chapter) => {
    if (!chapter) return;
    setNotice("");
    setActiveChapterId(chapter.id);
    setNodeIndex(0);
  }, []);
  const exitChapter = reactExports.useCallback(() => {
    setActiveChapterId(null);
    setNodeIndex(0);
  }, []);
  const finishChapter = reactExports.useCallback((chapter) => {
    if (!chapter) return;
    const completedBefore = !!storyProgress[chapter.id];
    if (!completedBefore) {
      completeScenario(chapter.id);
      addXp(chapter.reward);
      setNotice(`Completed ${chapter.title}. +${chapter.reward} XP`);
    } else {
      setNotice(`Replay complete: ${chapter.title} (reward already claimed)`);
    }
    exitChapter();
  }, [addXp, completeScenario, exitChapter, storyProgress]);
  const nextNode = reactExports.useCallback(() => {
    if (!activeChapter) return;
    if (nodeIndex + 1 < chapterNodes.length) {
      setNodeIndex((idx) => idx + 1);
      return;
    }
    finishChapter(activeChapter);
  }, [activeChapter, chapterNodes.length, finishChapter, nodeIndex]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { padding: "1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "1rem", marginBottom: 12 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: { margin: 0, display: "inline-flex", alignItems: "center", gap: 8, fontSize: "1.4rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 22 }),
          " Hành trình truyện"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-chip", children: [
          "Hoàn thành: ",
          Object.keys(storyProgress).length,
          "/",
          CHAPTERS.length
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "10px 0 0", color: "var(--n4-text-dim)", fontSize: ".9rem" }, children: "Luồng chương trực quan kiểu AJL. Hoàn thành lần đầu sẽ nhận thưởng XP cho chương." }),
      notice && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 8, color: "var(--n4-accent)", fontSize: ".86rem" }, children: notice })
    ] }),
    !activeChapter ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 12 }, children: CHAPTERS.map((chapter, index) => {
      const locked = isChapterLocked(index);
      const completed = !!storyProgress[chapter.id];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          whileHover: locked ? void 0 : { y: -3 },
          className: "n4-panel",
          onClick: () => !locked && startChapter(chapter),
          disabled: locked,
          style: {
            padding: "1rem",
            textAlign: "left",
            borderColor: completed ? "var(--n4-success)" : "var(--n4-border)",
            opacity: locked ? 0.55 : 1,
            cursor: locked ? "not-allowed" : "pointer"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.8rem" }, children: chapter.theme }),
              completed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-chip", style: { color: "var(--n4-success)" }, children: "Hoàn thành" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 10, fontWeight: 700 }, children: chapter.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 4, color: "var(--n4-text-dim)", fontSize: ".84rem" }, children: locked ? "Đã khóa: hãy hoàn thành chương trước" : "Nhấp để bắt đầu chương này" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 8, color: "var(--n4-accent)", fontSize: ".82rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 13, style: { marginRight: 4 } }),
              " Thưởng: +",
              chapter.reward,
              " Điểm"
            ] })
          ]
        },
        chapter.id
      );
    }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card", style: {
      padding: "1.2rem",
      minHeight: 460,
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      background: "radial-gradient(circle at 20% 15%, rgba(59,130,246,.16), transparent 42%), radial-gradient(circle at 80% 75%, rgba(236,72,153,.18), transparent 45%)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: currentNode && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        style: { width: "min(760px, 100%)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "var(--n4-text-dim)", fontSize: ".85rem", marginBottom: 8 }, children: [
            activeChapter.title,
            " · Phần ",
            nodeIndex + 1,
            "/",
            chapterNodes.length
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-panel", style: { padding: "1rem", marginBottom: 10 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-chip", children: currentNode.speaker }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.15rem", fontWeight: 650, lineHeight: 1.5 }, children: currentNode.text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 10, color: "var(--n4-text-dim)", fontSize: ".92rem" }, children: currentNode.jp })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn", onClick: exitChapter, style: { minHeight: 42, minWidth: 140 }, children: "Thoát chương" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: nextNode, style: { minHeight: 42, minWidth: 180 }, children: nodeIndex + 1 < chapterNodes.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Tiếp tục ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, style: { marginLeft: 4 } })
            ] }) : "Hoàn thành chương" })
          ] })
        ]
      },
      `${activeChapter.id}-${nodeIndex}`
    ) }) })
  ] });
}
export {
  StoryQuestPage as default
};
