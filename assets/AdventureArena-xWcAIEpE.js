import { r as reactExports, j as jsxRuntimeExports, R as React, u as useShallow } from "./vendor-react-BYxMSDiB.js";
import { G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-Ht4KBG1w.js";
import { u as useScoreEngine, T as TrainerContext } from "./useScoreEngine-fO3A-KMP.js";
import { K as KanjiBattleMode } from "./KanjiBattleMode-BIjkIpC4.js";
import { u as useLearningStore, bH as AJL_IZAKAYA_MENU, bI as AJL_ANIME_QUOTES, bJ as AJL_SUSHI_TYPES, bA as playSFX, f as speakJP } from "./feature-3d-CFvJkEt3.js";
import { a as awardAjlRewards } from "./ajl-rewards-5BQsC-ZT.js";
import { S as ScaffoldingLayer } from "./ScaffoldingLayer-BRKW1Dj-.js";
import { M as ModeResultsScreen } from "./useQuestionMeta-D4bSCufi.js";
import { K as Keyboard, r as Heart, e as Trophy, x as ChefHat, i as Star, n as Timer, y as MessageSquare, h as Shield, w as Sword } from "./vendor-icons-DHCyxOF-.js";
import { A as AnimatePresence, m as motion } from "./vendor-motion-CoQCRLnb.js";
import { Q as QuizFeedback } from "./QuizFeedback-C5B0QP7Y.js";
import { m as SushiBackdrop, B as BattleBackdrop } from "./feature-3d-scenery-C3eSpuWG.js";
import { u as useVocabItems, a as useKanjiItems } from "./useDataHelper-CLs8Rj_F.js";
import { u as useGameStore } from "./useGameEngine-CJjDfpsP.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./index-D1BqAvip.js";
import "./vendor-router-BTJacUKt.js";
import "./empty-Bvm-mx50.js";
import "./quest-chains-CiwzmCpJ.js";
function generateRomajiVariants(raw) {
  if (!raw) return [];
  let base = raw.toLowerCase().trim();
  const macronMap = {
    "ā": "aa",
    "â": "aa",
    "ī": "ii",
    "î": "ii",
    "ū": "uu",
    "û": "uu",
    "ē": "ee",
    "ê": "ee",
    "ō": "oo",
    "ô": "oo"
  };
  for (const [key, val] of Object.entries(macronMap)) {
    base = base.replaceAll(key, val);
  }
  const candidates = /* @__PURE__ */ new Set();
  candidates.add(base);
  function addVariant(str) {
    if (!str) return;
    const cleaned = str.replace(/[^a-z0-9-]/g, "");
    if (cleaned) candidates.add(cleaned);
    const noHyphen = cleaned.replaceAll("-", "");
    if (noHyphen) candidates.add(noHyphen);
  }
  for (const item of [...candidates]) {
    if (item.includes("-")) {
      const vowels = ["a", "i", "u", "e", "o"];
      let expanded = item;
      for (const v of vowels) {
        expanded = expanded.replaceAll(`${v}-`, `${v}${v}`);
      }
      addVariant(expanded);
    }
  }
  for (const item of [...candidates]) {
    if (item.includes("ii")) {
      addVariant(item.replaceAll("ii", "ee"));
      addVariant(item.replaceAll("ii", "i"));
    }
    if (item.includes("ee")) {
      addVariant(item.replaceAll("ee", "ii"));
      addVariant(item.replaceAll("ee", "e"));
    }
    if (item.includes("oo")) {
      addVariant(item.replaceAll("oo", "ou"));
      addVariant(item.replaceAll("oo", "o"));
    }
    if (item.includes("ou")) {
      addVariant(item.replaceAll("ou", "oo"));
      addVariant(item.replaceAll("ou", "o"));
    }
    if (item.includes("uu")) {
      addVariant(item.replaceAll("uu", "u"));
    }
    if (item.includes("aa")) {
      addVariant(item.replaceAll("aa", "a"));
    }
  }
  for (const item of [...candidates]) {
    let replaced = item;
    if (replaced.includes("shi")) addVariant(replaced.replaceAll("shi", "si"));
    if (replaced.includes("si")) addVariant(replaced.replaceAll("si", "shi"));
    if (replaced.includes("chi")) addVariant(replaced.replaceAll("chi", "ti"));
    if (replaced.includes("ti")) addVariant(replaced.replaceAll("ti", "chi"));
    if (replaced.includes("tsu")) addVariant(replaced.replaceAll("tsu", "tu"));
    if (replaced.includes("tu")) addVariant(replaced.replaceAll("tu", "tsu"));
    if (replaced.includes("ji")) addVariant(replaced.replaceAll("ji", "zi"));
    if (replaced.includes("zi")) addVariant(replaced.replaceAll("zi", "ji"));
    if (replaced.includes("fu")) addVariant(replaced.replaceAll("fu", "hu"));
    if (replaced.includes("hu")) addVariant(replaced.replaceAll("hu", "fu"));
    if (replaced.includes("wo")) addVariant(replaced.replaceAll("wo", "o"));
    if (replaced.endsWith("n") && !replaced.endsWith("nn")) {
      addVariant(replaced + "n");
    }
  }
  return Array.from(candidates).map((s) => s.replace(/[^a-z0-9-]/g, "")).filter((s) => s.length > 0);
}
const DIFFICULTY_SETTINGS = {
  easy: { spawnInterval: 4500, duration: 15 },
  normal: { spawnInterval: 3200, duration: 11 },
  hard: { spawnInterval: 2e3, duration: 7 }
};
function NinjaTypingMode({ items, onComplete, trainerId = "ninja-typing" }) {
  var _a;
  const scoring = useScoreEngine(trainerId);
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  const [isGameOver, setIsGameOver] = reactExports.useState(false);
  const [score, setScore] = reactExports.useState(0);
  const hasSkill = useLearningStore((s) => s.hasSkill);
  const startingLives = hasSkill("skill_ninja") ? 4 : 3;
  const [lives, setLives] = reactExports.useState(startingLives);
  const [activeWords, setActiveWords] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const [earnedCoins, setEarnedCoins] = reactExports.useState(0);
  const [earnedXP, setEarnedXP] = reactExports.useState(0);
  const [difficulty, setDifficulty] = reactExports.useState("easy");
  const spawnRef = reactExports.useRef(null);
  const wordIdRef = reactExports.useRef(0);
  const gameAreaRef = reactExports.useRef(null);
  const wordList = reactExports.useRef([]);
  reactExports.useEffect(() => {
    if (items == null ? void 0 : items.length) {
      wordList.current = items.filter((i) => i.reading || i.romaji || i.hiragana).map((i) => {
        const rawRomaji = (i.romaji || i.reading || "").toLowerCase().replace(/\s/g, "");
        return {
          item: i,
          jp: i.word || i.kanji || i.hiragana || i.jp || "?",
          romaji: rawRomaji,
          primaryRomaji: rawRomaji.replaceAll("-", ""),
          acceptableRomajis: generateRomajiVariants(rawRomaji),
          meaning: i.meaning || i.vi || i.en || ""
        };
      }).filter((w) => w.acceptableRomajis.length > 0);
    }
  }, [items]);
  const startGame = reactExports.useCallback(() => {
    setIsPlaying(true);
    setIsGameOver(false);
    setScore(0);
    setLives(startingLives);
    setActiveWords([]);
    setInput("");
    setEarnedCoins(0);
    setEarnedXP(0);
    wordIdRef.current = 0;
    scoring.reset();
  }, [startingLives, scoring]);
  reactExports.useEffect(() => {
    if (isPlaying && !isGameOver) {
      const settings = DIFFICULTY_SETTINGS[difficulty] || DIFFICULTY_SETTINGS.easy;
      spawnRef.current = setInterval(() => {
        const pool = wordList.current;
        if (!pool.length) return;
        const w = pool[Math.floor(Math.random() * pool.length)];
        setActiveWords((prev) => [...prev, {
          ...w,
          id: `w-${wordIdRef.current++}`,
          left: 10 + Math.random() * 80
        }]);
      }, settings.spawnInterval);
    }
    return () => {
      if (spawnRef.current) clearInterval(spawnRef.current);
    };
  }, [isPlaying, isGameOver, difficulty]);
  reactExports.useEffect(() => {
    if (lives <= 0 && !isGameOver && isPlaying) {
      setIsGameOver(true);
      setIsPlaying(false);
      if (spawnRef.current) clearInterval(spawnRef.current);
      const baseCoins = Math.floor(score / 10);
      const rewards = awardAjlRewards(score, baseCoins, "ninja-typing");
      setEarnedCoins(rewards.coins);
      setEarnedXP(rewards.xp);
      useLearningStore.getState().updateBountyProgress("typing", Math.floor(score / 10));
    }
  }, [lives, isGameOver, isPlaying, score]);
  reactExports.useEffect(() => {
    const onKeyDown = (e) => {
      if (!isPlaying || isGameOver) return;
      if (e.key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
        return;
      }
      if (e.key.length === 1 && /[a-z-]/i.test(e.key)) {
        const char = e.key.toLowerCase();
        setInput((prev) => {
          const newVal = prev + char;
          const matchIdx = activeWords.findIndex((w) => w.acceptableRomajis.includes(newVal));
          if (matchIdx > -1) {
            const matchedWord = activeWords[matchIdx];
            setActiveWords((cur) => cur.filter((_, i) => i !== matchIdx));
            setScore((s) => s + 10 * matchedWord.primaryRomaji.length);
            scoring.recordCorrect(matchedWord.item);
            return "";
          }
          const isPrefix = activeWords.some((w) => w.acceptableRomajis.some((r) => r.startsWith(newVal)));
          return isPrefix ? newVal : "";
        });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isPlaying, isGameOver, activeWords, scoring]);
  const handleWordMiss = reactExports.useCallback((id) => {
    setActiveWords((prev) => {
      const exists = prev.some((w) => w.id === id);
      if (exists) {
        setLives((l) => Math.max(0, l - 1));
        const missedWord = prev.find((w) => w.id === id);
        scoring.recordWrong(missedWord.item);
        return prev.filter((w) => w.id !== id);
      }
      return prev;
    });
  }, [scoring]);
  if (!(items == null ? void 0 : items.length)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "🥷" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có dữ liệu. Chọn phần khác để bắt đầu." })
    ] });
  }
  const currentDiffSettings = DIFFICULTY_SETTINGS[difficulty] || DIFFICULTY_SETTINGS.easy;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: 800, margin: "0 auto" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: { fontSize: "1.5rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Keyboard, { size: 24, color: "var(--n4-accent, #f97316)" }),
        " 🥷 Ninja Typing"
      ] }),
      isPlaying && activeWords[0] && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScaffoldingLayer,
        {
          text: ((_a = activeWords[0]) == null ? void 0 : _a.jp) || "",
          toolbarConfig: { hint: false, reveal: false, speak: false, bookmark: false, lookup: true, drawer: false },
          compact: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: gameAreaRef, style: {
      position: "relative",
      height: 500,
      background: "#0a0a0a",
      borderRadius: 24,
      overflow: "hidden",
      border: "3px solid var(--n4-border)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "absolute", top: 0, left: 0, right: 0, padding: "12px 16px", display: "flex", justifyContent: "space-between", zIndex: 20, background: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 6 }, children: [...Array(startingLives)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 22, color: i < lives ? "#ef4444" : "#333", fill: i < lives ? "#ef4444" : "none" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "1.3rem", fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: 6 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 18, color: "#eab308" }),
          " ",
          score
        ] })
      ] }),
      !isPlaying && !isGameOver && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(5,5,5,0.85)", zIndex: 30, backdropFilter: "blur(6px)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, #f97316, #ea580c)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Keyboard, { size: 40, color: "#fff" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: 8, letterSpacing: "0.5px" }, children: "Sẵn sàng gõ?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#aaa", marginBottom: 24, textAlign: "center", maxWidth: 320, fontSize: "0.95rem" }, children: "Gõ romaji để tiêu diệt từ đang rơi xuống!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 28, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.85rem", color: "#888", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }, children: "Tốc độ / Độ khó" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 8, background: "#1e1e1e", padding: 4, borderRadius: 12, border: "1px solid #333" }, children: [
            { id: "easy", label: "🐢 Dễ", desc: "Spawn 4.5s • Rơi 15s" },
            { id: "normal", label: "🦊 Vừa", desc: "Spawn 3.2s • Rơi 11s" },
            { id: "hard", label: "🥷 Khó", desc: "Spawn 2.0s • Rơi 7s" }
          ].map((opt) => {
            const isSelected = difficulty === opt.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setDifficulty(opt.id),
                style: {
                  padding: "8px 16px",
                  borderRadius: 8,
                  border: "none",
                  background: isSelected ? "linear-gradient(135deg, #f97316, #ea580c)" : "transparent",
                  color: isSelected ? "#fff" : "#ccc",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: isSelected ? "0 2px 8px rgba(249, 115, 22, 0.3)" : "none"
                },
                title: opt.desc,
                children: opt.label
              },
              opt.id
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: startGame, style: { padding: "0.8rem 2.5rem", fontSize: "1.15rem", borderRadius: 14, fontWeight: 700 }, children: "Bắt đầu" })
      ] }),
      isGameOver && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", inset: 0, zIndex: 30, background: "var(--n4-bg)", overflowY: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "2rem 1rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        ModeResultsScreen,
        {
          scoring: { ...scoring, xp: earnedXP, coins: earnedCoins },
          getQuestion: (item) => item.word || item.kanji || item.hiragana || item.jp || "?",
          getCorrectInfo: (item) => ({ reading: item.romaji || item.reading || "", meaning: item.meaning || item.vi || item.en || "" }),
          onRestart: startGame,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginBottom: 16 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "1.2rem", fontWeight: 700, color: "#eab308" }, children: [
              "Tổng điểm: ",
              score
            ] }) }),
            onComplete && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "center", marginTop: -12, position: "relative", zIndex: 10 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn", onClick: () => onComplete(score), children: "Thoát Mode" }) })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeWords.map((word) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { y: -80 },
          animate: { y: 480 },
          transition: { duration: currentDiffSettings.duration, ease: "linear" },
          onAnimationComplete: () => handleWordMiss(word.id),
          style: {
            position: "absolute",
            left: `${word.left}%`,
            transform: "translateX(-50%)",
            background: "rgba(26, 26, 26, 0.85)",
            padding: "10px 20px",
            borderRadius: 18,
            border: "2px solid rgba(249, 115, 22, 0.35)",
            textAlign: "center",
            zIndex: 10,
            backdropFilter: "blur(8px)",
            boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
            minWidth: 100
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.7rem", fontWeight: 800, color: "#fff", textShadow: "0 2px 4px rgba(0,0,0,0.8)", letterSpacing: 0.5 }, children: word.jp }),
            (() => {
              const matchedVariant = word.acceptableRomajis.find((r) => r.startsWith(input));
              const displayRomaji = matchedVariant || word.romaji;
              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.95rem", color: "var(--n4-accent, #f97316)", fontFamily: "monospace", fontWeight: 700, letterSpacing: 0.5, marginTop: 2 }, children: input && displayRomaji.startsWith(input) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#888", textDecoration: "line-through", opacity: 0.7 }, children: input }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-accent, #f97316)" }, children: displayRomaji.slice(input.length) })
              ] }) : displayRomaji });
            })(),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8rem", color: "#bbb", marginTop: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 150 }, children: word.meaning })
          ]
        },
        word.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        background: "#111",
        borderTop: "2px solid #333",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 20
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.8rem", fontFamily: "monospace", fontWeight: 700, color: "#fff", letterSpacing: 4 }, children: input || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#444" }, children: "Gõ để bắt đầu..." }) }) })
    ] })
  ] });
}
const CUSTOMER_FACES = ["🧑‍🍳", "👱‍♀️", "👨", "👩‍🦰", "🧔‍♂️", "👵", "🧓", "👦", "👧", "🦊"];
const PHRASES = ["{word} をください！", "{word} おねがいします！", "すみません、{word}！"];
function shuffleArray$1(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function IzakayaMode({ onComplete, trainerId = "izakaya" }) {
  var _a;
  const scoring = useScoreEngine(trainerId);
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  const [isGameOver, setIsGameOver] = reactExports.useState(false);
  const hasSkill = useLearningStore((s) => s.hasSkill);
  const startTime = hasSkill("skill_chef") ? 75 : 60;
  const [timeLeft, setTimeLeft] = reactExports.useState(startTime);
  const [score, setScore] = reactExports.useState(0);
  const [customersServed, setCustomersServed] = reactExports.useState(0);
  const [currentOrder, setCurrentOrder] = reactExports.useState(null);
  const [options, setOptions] = reactExports.useState([]);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [earnedCoins, setEarnedCoins] = reactExports.useState(0);
  const [earnedXP, setEarnedXP] = reactExports.useState(0);
  const timerRef = reactExports.useRef(null);
  const menu = AJL_IZAKAYA_MENU;
  const generateOrder = reactExports.useCallback(() => {
    const target = menu[Math.floor(Math.random() * menu.length)];
    const phrase = PHRASES[Math.floor(Math.random() * PHRASES.length)].replace("{word}", target.jp);
    const face = CUSTOMER_FACES[Math.floor(Math.random() * CUSTOMER_FACES.length)];
    setCurrentOrder({ item: target, phrase, customerFace: face });
    let opts = [target];
    while (opts.length < 4) {
      const r = menu[Math.floor(Math.random() * menu.length)];
      if (!opts.find((o) => o.id === r.id)) opts.push(r);
    }
    setOptions(shuffleArray$1(opts));
  }, [menu]);
  const startGame = reactExports.useCallback(() => {
    setIsPlaying(true);
    setIsGameOver(false);
    setTimeLeft(startTime);
    setScore(0);
    setCustomersServed(0);
    setEarnedCoins(0);
    setEarnedXP(0);
    setFeedback(null);
    scoring.reset();
    generateOrder();
  }, [startTime, generateOrder, scoring]);
  reactExports.useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      timerRef.current = setInterval(() => setTimeLeft((p) => p - 1), 1e3);
    } else if (isPlaying && timeLeft <= 0) {
      endGame();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, timeLeft]);
  const endGame = reactExports.useCallback(() => {
    setIsPlaying(false);
    setIsGameOver(true);
    if (timerRef.current) clearInterval(timerRef.current);
    const baseCoins = Math.max(0, Math.floor(score / 2));
    const rewards = awardAjlRewards(score, baseCoins, "izakaya");
    setEarnedCoins(rewards.coins);
    setEarnedXP(rewards.xp);
  }, [score]);
  const handleServe = reactExports.useCallback((item) => {
    if (!currentOrder || feedback) return;
    if (item.id === currentOrder.item.id) {
      setScore((p) => p + 10);
      setCustomersServed((p) => p + 1);
      setFeedback("correct");
      scoring.recordCorrect(currentOrder.item);
      useLearningStore.getState().updateBountyProgress("izakaya", 1);
      setTimeout(() => {
        setFeedback(null);
        generateOrder();
      }, 300);
    } else {
      setScore((p) => Math.max(0, p - 5));
      setTimeLeft((p) => Math.max(0, p - 2));
      setFeedback("wrong");
      scoring.recordWrong(currentOrder.item);
      setTimeout(() => setFeedback(null), 300);
    }
  }, [currentOrder, feedback, generateOrder, scoring]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { maxWidth: 800, margin: "0 auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    background: "#0a0a0a",
    borderRadius: 24,
    padding: "2rem",
    border: "3px solid var(--n4-border)",
    minHeight: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 100, background: "rgba(127,29,29,0.3)", borderBottom: "4px solid rgba(127,29,29,0.5)", display: "flex", justifyContent: "space-around", alignItems: "flex-end", paddingBottom: 8, opacity: 0.3, pointerEvents: "none" }, children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 40, height: 55, background: "#dc2626", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 18, color: "#450a0a" }, children: "祭" }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      !isPlaying && !isGameOver && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0 },
          style: { textAlign: "center", position: "relative", zIndex: 10, maxWidth: 400 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 80, height: 80, borderRadius: 16, background: "rgba(239,68,68,0.15)", border: "3px solid rgba(239,68,68,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChefHat, { size: 40, color: "#ef4444" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontSize: "2rem", fontWeight: 700, color: "#fff", marginBottom: 8 }, children: "🏮 Anime Izakaya" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#999", marginBottom: "2rem" }, children: "Phục vụ khách hàng đúng món họ gọi bằng tiếng Nhật!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-primary", onClick: startGame, style: { padding: "0.8rem 2rem", fontSize: "1.1rem", width: "100%" }, children: [
              "Bắt đầu ca (",
              startTime,
              "s)"
            ] })
          ]
        },
        "start"
      ),
      isPlaying && currentOrder && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          style: { width: "100%", position: "relative", zIndex: 10 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, background: "rgba(0,0,0,0.5)", padding: "10px 16px", borderRadius: 16, border: "1px solid #333" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: 4 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 18, color: "#eab308" }),
                  " ",
                  score
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#888" }, children: [
                  "Phục vụ: ",
                  customersServed
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "1.3rem", fontWeight: 700, fontFamily: "monospace", color: timeLeft <= 10 ? "#ef4444" : "#fff", display: "flex", alignItems: "center", gap: 4 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { size: 18 }),
                " ",
                timeLeft,
                "s"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 32, minHeight: 180 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 40, scale: 0.8 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: { opacity: 0, x: -40 },
                  style: { display: "flex", flexDirection: "column", alignItems: "center" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "#fff", color: "#000", padding: "12px 20px", borderRadius: "20px 20px 20px 4px", marginBottom: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.3)", fontSize: "1.3rem", fontWeight: 700, textAlign: "center" }, children: currentOrder.phrase }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "4rem" }, children: currentOrder.customerFace })
                  ]
                },
                currentOrder.phrase
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: feedback && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.5 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 1.5 },
                  style: { position: "absolute", top: "40%", fontSize: "3rem", fontWeight: 700, color: feedback === "correct" ? "#22c55e" : "#ef4444", zIndex: 50 },
                  children: feedback === "correct" ? "⭕" : "❌"
                }
              ) })
            ] }),
            ((_a = currentOrder == null ? void 0 : currentOrder.item) == null ? void 0 : _a.jp) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ScaffoldingLayer,
              {
                text: currentOrder.item.jp,
                toolbarConfig: { hint: false, reveal: false, speak: true, bookmark: false, lookup: true, drawer: false }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "rgba(120,53,15,0.3)", padding: 20, borderRadius: 20, borderTop: "3px solid rgba(120,53,15,0.5)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }, children: options.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => handleServe(item),
                style: {
                  background: "rgba(30,30,30,0.8)",
                  border: "2px solid #444",
                  borderRadius: 16,
                  padding: "14px 8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  cursor: "pointer",
                  transition: "all 0.15s"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.borderColor = "#f97316";
                  e.currentTarget.style.transform = "translateY(-4px)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.borderColor = "#444";
                  e.currentTarget.style.transform = "translateY(0)";
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "2.5rem" }, children: item.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.8rem", fontWeight: 700, color: "#ccc" }, children: item.name })
                ]
              },
              item.id
            )) }) })
          ]
        },
        "game"
      ),
      isGameOver && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, style: { padding: "1rem 0" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        ModeResultsScreen,
        {
          scoring: { ...scoring, xp: earnedXP, coins: earnedCoins },
          getQuestion: (item) => item.jp,
          getCorrectInfo: (item) => ({ reading: "", meaning: item.name }),
          onRestart: startGame,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 16 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "1.2rem", fontWeight: 700, color: "#eab308" }, children: [
                "Tổng điểm: ",
                score
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#888" }, children: [
                "Phục vụ: ",
                customersServed,
                " khách"
              ] })
            ] }),
            onComplete && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "center", marginTop: -12, position: "relative", zIndex: 10 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn", onClick: () => onComplete(score), children: "Thoát Mode" }) })
          ]
        }
      ) }, "gameover")
    ] })
  ] }) });
}
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function AnimeQuotesMode({ onComplete, trainerId = "anime-quotes" }) {
  const scoring = useScoreEngine(trainerId);
  const [shuffledQuotes, setShuffledQuotes] = reactExports.useState(() => shuffleArray(AJL_ANIME_QUOTES).slice(0, 10));
  const [currentIdx, setCurrentIdx] = reactExports.useState(0);
  const [options, setOptions] = reactExports.useState([]);
  const [isGameOver, setIsGameOver] = reactExports.useState(false);
  const [selected, setSelected] = reactExports.useState(null);
  const [earnedCoins, setEarnedCoins] = reactExports.useState(0);
  const [earnedXP, setEarnedXP] = reactExports.useState(0);
  const lockRef = React.useRef(false);
  const pendingCorrectRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (currentIdx < shuffledQuotes.length) {
      generateOptions();
    } else if (!isGameOver) {
      endGame();
    }
  }, [currentIdx, isGameOver]);
  const generateOptions = () => {
    const current2 = shuffledQuotes[currentIdx];
    if (!current2) return;
    let opts = [current2.meaning];
    while (opts.length < 4) {
      const r = AJL_ANIME_QUOTES[Math.floor(Math.random() * AJL_ANIME_QUOTES.length)];
      if (!opts.includes(r.meaning)) opts.push(r.meaning);
    }
    setOptions(shuffleArray(opts));
  };
  const handleGuess = (guess) => {
    if (lockRef.current || selected) return;
    lockRef.current = true;
    setSelected(guess);
    const current2 = shuffledQuotes[currentIdx];
    if (guess === current2.meaning) {
      pendingCorrectRef.current = current2;
    } else {
      scoring.recordWrong(current2);
    }
  };
  const handleGrade = (quality) => {
    if (pendingCorrectRef.current) {
      scoring.recordCorrect(pendingCorrectRef.current, quality);
      pendingCorrectRef.current = null;
    }
    handleNext();
  };
  const handleNext = () => {
    lockRef.current = false;
    setSelected(null);
    setCurrentIdx((p) => p + 1);
  };
  const endGame = () => {
    setIsGameOver(true);
    const scoreVal = scoring.score * 10;
    const baseCoins = Math.floor(scoreVal / 2);
    const rewards = awardAjlRewards(scoreVal, baseCoins, "anime-quotes");
    setEarnedCoins(rewards.coins);
    setEarnedXP(rewards.xp);
  };
  const restart = () => {
    setShuffledQuotes(shuffleArray(AJL_ANIME_QUOTES).slice(0, 10));
    setCurrentIdx(0);
    setIsGameOver(false);
    setSelected(null);
    setEarnedCoins(0);
    setEarnedXP(0);
    scoring.reset();
  };
  const current = shuffledQuotes[currentIdx];
  const answered = selected !== null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: 600, margin: "0 auto" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontSize: "1.3rem", fontWeight: 700 }, children: "🎬 Câu thoại anime" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 6, fontWeight: 700, color: "#eab308" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 18 }),
        " ",
        scoring.score * 10
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      background: "#0a0a0a",
      borderRadius: 24,
      padding: "2rem",
      border: "3px solid var(--n4-border)",
      minHeight: 400,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: !isGameOver && current ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        style: { width: "100%", maxWidth: 450, textAlign: "center" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 36, color: "#a855f7", style: { margin: "0 auto 16px" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { style: { fontSize: "1.4rem", fontWeight: 700, color: "#fff", marginBottom: 4 }, children: [
            '"',
            current.romaji,
            '"'
          ] }),
          current.jp && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#aaa", fontSize: "1rem", marginBottom: 4 }, children: current.jp }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "#666", fontSize: "0.85rem", marginBottom: 24 }, children: [
            "— ",
            current.anime
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#888", marginBottom: 16 }, children: "Câu này nghĩa là gì?" }),
          current.jp && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ScaffoldingLayer,
            {
              text: current.jp,
              toolbarConfig: { hint: false, reveal: false, speak: true, bookmark: false, lookup: true, drawer: false }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 10, width: "100%", marginBottom: 16 }, children: options.map((opt, i) => {
            let style = { background: "var(--n4-surface)", border: "2px solid var(--n4-border)", color: "#fff" };
            if (answered && opt === current.meaning) {
              style = { background: "rgba(34,197,94,0.15)", border: "2px solid #22c55e", color: "#22c55e" };
            } else if (answered && opt === selected) {
              style = { background: "rgba(248,113,113,0.15)", border: "2px solid #f87171", color: "#f87171" };
            } else if (answered) {
              style = { ...style, opacity: 0.5 };
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleGuess(opt),
                disabled: answered,
                style: { ...style, padding: "12px 16px", borderRadius: 16, fontWeight: 600, fontSize: "1rem", cursor: answered ? "default" : "pointer", transition: "all 0.15s", textAlign: "left" },
                children: opt
              },
              i
            );
          }) }),
          answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
            QuizFeedback,
            {
              isCorrect: selected === current.meaning,
              correctAnswer: current.meaning,
              correctInfo: { reading: current.jp, meaning: current.anime, word: current.romaji },
              userAnswer: selected,
              questionDisplay: `Anime Quote: ${current.anime}`,
              showQualityPicker: true,
              onQualityPick: handleGrade,
              onNext: handleNext,
              isLastQuestion: currentIdx + 1 >= shuffledQuotes.length
            }
          )
        ]
      },
      `q-${currentIdx}`
    ) : isGameOver ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, style: { width: "100%" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ModeResultsScreen,
        {
          scoring: { ...scoring, xp: earnedXP, coins: earnedCoins, score: scoring.score * 10, total: scoring.total * 10, accuracy: Math.round(scoring.score * 10 / (scoring.total * 10) * 100) || 0 },
          getQuestion: (item) => item.romaji,
          getCorrectInfo: (item) => ({ reading: item.jp, meaning: `${item.meaning} (${item.anime})` }),
          onRestart: restart
        }
      ),
      onComplete && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "center", marginTop: -12, position: "relative", zIndex: 10 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn", onClick: () => onComplete(scoring.score * 10), children: "Thoát Mode" }) })
    ] }, "gameover") : null }) })
  ] });
}
function SushiChefMode({ onComplete, trainerId = "sushi-chef" }) {
  const scoring = useScoreEngine(trainerId);
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  const [score, setScore] = reactExports.useState(0);
  const [timeLeft, setTimeLeft] = reactExports.useState(30);
  const [currentOrder, setCurrentOrder] = reactExports.useState(null);
  const [earnedCoins, setEarnedCoins] = reactExports.useState(0);
  const [earnedXP, setEarnedXP] = reactExports.useState(0);
  const [isGameOver, setIsGameOver] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((p) => p - 1), 1e3);
    } else if (timeLeft === 0 && isPlaying) {
      endGame();
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);
  const nextOrder = reactExports.useCallback(() => {
    setCurrentOrder(AJL_SUSHI_TYPES[Math.floor(Math.random() * AJL_SUSHI_TYPES.length)]);
  }, []);
  const startGame = reactExports.useCallback(() => {
    setIsPlaying(true);
    setIsGameOver(false);
    setScore(0);
    setTimeLeft(30);
    setEarnedCoins(0);
    setEarnedXP(0);
    scoring.reset();
    nextOrder();
  }, [nextOrder, scoring]);
  const serveSushi = reactExports.useCallback((sushi) => {
    if (!isPlaying || !currentOrder) return;
    if (sushi.id === currentOrder.id) {
      setScore((p) => p + (sushi.score || 10));
      scoring.recordCorrect(currentOrder);
      nextOrder();
    } else {
      setScore((p) => Math.max(0, p - 5));
      scoring.recordWrong(currentOrder);
    }
  }, [isPlaying, currentOrder, nextOrder, scoring]);
  const endGame = reactExports.useCallback(() => {
    setIsPlaying(false);
    setIsGameOver(true);
    const baseCoins = Math.floor(score / 2);
    const rewards = awardAjlRewards(score, baseCoins, "sushi-chef");
    setEarnedCoins(rewards.coins);
    setEarnedXP(rewards.xp);
  }, [score]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: 700, margin: "0 auto", textAlign: "center" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: { fontSize: "1.5rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 16, color: "var(--n4-accent, #f97316)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChefHat, { size: 24 }),
      " 🍣 Sushi Chef"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SushiBackdrop, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "2.5rem", minHeight: 350, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: [
      !isPlaying && !isGameOver && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "5rem", marginBottom: 16 }, children: "👨‍🍳" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-dim)", marginBottom: 24, maxWidth: 350 }, children: "Phục vụ đúng loại sushi cho khách trước khi hết giờ!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: startGame, style: { padding: "0.8rem 2.5rem", fontSize: "1.1rem" }, children: "Bắt đầu (30s)" })
      ] }),
      isPlaying && currentOrder && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { width: "100%", maxWidth: 500 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, fontSize: "1.2rem", fontWeight: 700 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: timeLeft <= 10 ? "#ef4444" : "var(--n4-accent)" }, children: [
            "⏱️ ",
            timeLeft,
            "s"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "var(--n4-primary)" }, children: [
            "Điểm: ",
            score
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "1.5rem", marginBottom: 24, border: "2px dashed var(--n4-border)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontWeight: 600, marginBottom: 8, color: "var(--n4-text-dim)" }, children: "Khách muốn:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "3rem", marginBottom: 4 }, children: currentOrder.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.5rem", fontWeight: 700, color: "var(--n4-accent)" }, children: currentOrder.jp }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-dim)" }, children: currentOrder.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ScaffoldingLayer,
          {
            text: currentOrder.jp,
            toolbarConfig: { hint: false, reveal: false, speak: true, bookmark: false, lookup: true, drawer: false }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }, children: AJL_SUSHI_TYPES.map((sushi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            whileTap: { scale: 0.95 },
            onClick: () => serveSushi(sushi),
            style: {
              padding: "14px 8px",
              background: "var(--n4-surface)",
              border: "2px solid var(--n4-border)",
              borderRadius: 16,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              transition: "border-color 0.15s"
            },
            onMouseEnter: (e) => e.currentTarget.style.borderColor = "var(--n4-accent, #f97316)",
            onMouseLeave: (e) => e.currentTarget.style.borderColor = "var(--n4-border)",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "2rem" }, children: sushi.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600, fontSize: "0.85rem" }, children: sushi.name })
            ]
          },
          sushi.id
        )) })
      ] }),
      isGameOver && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100%", margin: "0 -2.5rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        ModeResultsScreen,
        {
          scoring: { ...scoring, xp: earnedXP, coins: earnedCoins },
          getQuestion: (item) => item.icon + " " + item.jp,
          getCorrectInfo: (item) => ({ reading: "", meaning: item.name }),
          onRestart: startGame,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginBottom: 16 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "1.2rem", fontWeight: 700, color: "#eab308" }, children: [
              "Tổng điểm: ",
              score
            ] }) }),
            onComplete && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "center", marginTop: -12, position: "relative", zIndex: 10 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn", onClick: () => onComplete(score), children: "Thoát Mode" }) })
          ]
        }
      ) })
    ] })
  ] });
}
const MAX_BOSS_HP = 1e5;
function WorldBossMode({ onComplete }) {
  const [bossHealth, setBossHealth] = reactExports.useState(MAX_BOSS_HP);
  const [damageDealt, setDamageDealt] = reactExports.useState(0);
  const [isAttacking, setIsAttacking] = reactExports.useState(false);
  const [earnedCoins, setEarnedCoins] = reactExports.useState(0);
  const equippedWeapon = useLearningStore((s) => s.equippedWeapon);
  const equippedArmor = useLearningStore((s) => s.equippedArmor);
  const bossDamage = useLearningStore((s) => s.bossDamage);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setBossHealth((p) => Math.max(0, p - Math.floor(Math.random() * 50)));
    }, 2e3);
    return () => clearInterval(interval);
  }, []);
  const attackBoss = reactExports.useCallback(() => {
    if (isAttacking || bossHealth <= 0) return;
    setIsAttacking(true);
    let damage = Math.floor(Math.random() * 100) + 50;
    if (equippedWeapon === "wpn_katana") damage = Math.floor(damage * 1.1);
    if (equippedWeapon === "wpn_naginata") damage = Math.floor(damage * 1.2);
    if (equippedArmor === "arm_mecha") damage = Math.floor(damage * 1.15);
    setBossHealth((p) => Math.max(0, p - damage));
    setDamageDealt((p) => p + damage);
    const coins = Math.floor(damage / 10);
    setEarnedCoins((p) => p + coins);
    const store = useLearningStore.getState();
    store.addBossDamage(damage);
    store.addCoins(coins, "boss-raid");
    store.updateBountyProgress("boss", damage);
    setTimeout(() => setIsAttacking(false), 500);
  }, [isAttacking, bossHealth, equippedWeapon, equippedArmor]);
  const bossPercent = (bossHealth / MAX_BOSS_HP * 100).toFixed(1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: 700, margin: "0 auto" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: { fontSize: "1.5rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 8, color: "#ef4444" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 24 }),
        " 🦊 World Boss Raid"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 700, color: "#eab308" }, children: [
        "+",
        earnedCoins,
        " 🪙"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BattleBackdrop, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      background: "#111",
      borderRadius: 24,
      padding: "3rem 2rem",
      textAlign: "center",
      border: "3px solid rgba(127,29,29,0.5)",
      position: "relative",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: isAttacking ? { x: [-10, 10, -10, 10, 0], scale: 0.95 } : { y: [-5, 5, -5] },
          transition: isAttacking ? { duration: 0.2 } : { repeat: Infinity, duration: 2 },
          style: { fontSize: "6rem", marginBottom: 24, filter: "drop-shadow(0 0 30px rgba(239,68,68,0.5))" },
          children: "🦊"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: 500, margin: "0 auto", marginBottom: 24 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", color: "#fff", fontWeight: 700, marginBottom: 6 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cửu Vĩ Hồ (Kyuubi)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            bossHealth.toLocaleString(),
            " / ",
            MAX_BOSS_HP.toLocaleString(),
            " HP"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 20, background: "#222", borderRadius: 10, overflow: "hidden", border: "2px solid #333" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: { width: `${bossPercent}%` }, style: { height: "100%", background: "linear-gradient(90deg, #dc2626, #f97316)", borderRadius: 10 } }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          whileTap: { scale: 0.95 },
          onClick: attackBoss,
          disabled: isAttacking || bossHealth <= 0,
          style: {
            padding: "14px 40px",
            background: "#dc2626",
            color: "#fff",
            border: "none",
            borderRadius: 20,
            fontWeight: 700,
            fontSize: "1.2rem",
            cursor: isAttacking ? "wait" : "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            opacity: isAttacking ? 0.6 : 1,
            boxShadow: "0 4px 16px rgba(220,38,38,0.3)",
            transition: "opacity 0.15s"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sword, { size: 22 }),
            " Tấn công!"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 24, color: "#888" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Sát thương phiên này: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#fff", fontWeight: 700 }, children: damageDealt.toLocaleString() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Tổng sát thương: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#fff", fontWeight: 700 }, children: (bossDamage + damageDealt).toLocaleString() })
        ] }),
        equippedWeapon && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#f97316", fontSize: "0.85rem", marginTop: 4 }, children: "⚔️ Vũ khí đang trang bị tăng sát thương!" })
      ] }),
      bossHealth <= 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          style: { marginTop: 24, padding: 16, background: "rgba(34,197,94,0.15)", borderRadius: 16, border: "2px solid #22c55e" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "1.5rem", fontWeight: 700, color: "#22c55e" }, children: "🎉 Boss đã bị đánh bại!" })
        }
      )
    ] })
  ] });
}
const WAVE_NAMES = ["🐺 Wolf Pack", "🦁 Lion Pride", "🐉 Dragon Nest", "👑 Champion", "⚡ Legendary"];
function ArenaBlitzMode({ items = [], onComplete }) {
  const { score, combo, hp, addScore, takeDamage, resetCombo } = useGameStore(useShallow((s) => ({
    score: s.score,
    combo: s.combo,
    hp: s.hp,
    addScore: s.addScore,
    takeDamage: s.takeDamage,
    resetCombo: s.resetCombo
  })));
  const scoring = useScoreEngine();
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [wave, setWave] = reactExports.useState(1);
  const [phase, setPhase] = reactExports.useState("fight");
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [hype, setHype] = reactExports.useState(0);
  const [shield, setShield] = reactExports.useState(0);
  const [critFlash, setCritFlash] = reactExports.useState(false);
  const [arenaShake, setArenaShake] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  const correctCount = reactExports.useRef(0);
  reactExports.useEffect(() => {
    useGameStore.setState({ hp: 100, score: 0, combo: 0, gameState: "PLAYING" });
  }, []);
  const pool = reactExports.useMemo(() => {
    const valid = items.filter((it) => it.word && it.meaning);
    return [...valid].sort(() => Math.random() - 0.5).slice(0, 25);
  }, [!!items.length]);
  const current = pool[qIdx];
  const waveSize = 5;
  const waveProgress = qIdx % waveSize;
  const currentWaveName = WAVE_NAMES[Math.min(wave - 1, WAVE_NAMES.length - 1)];
  const options = reactExports.useMemo(() => {
    if (!current) return [];
    const others = pool.filter((_, i) => i !== qIdx).sort(() => Math.random() - 0.5).slice(0, 3).map((it) => it.meaning);
    return [current.meaning, ...others].sort(() => Math.random() - 0.5);
  }, [current, pool, qIdx]);
  reactExports.useEffect(() => {
    if (phase === "wave_clear") {
      const tid = setTimeout(() => {
        setWave((w) => w + 1);
        setShield((s) => Math.min(s + 1, 3));
        setPhase("fight");
      }, 2e3);
      return () => clearTimeout(tid);
    }
  }, [phase]);
  const handleStrike = reactExports.useCallback((opt) => {
    if (feedback || !current) return;
    setSelected(opt);
    const isCorrect = opt === current.meaning;
    if (isCorrect) {
      playSFX("correct");
      const isCrit = combo >= 3 && Math.random() < 0.3;
      const basePoints = 200 + combo * 35 + wave * 50;
      const points = isCrit ? basePoints * 2 : basePoints;
      addScore(points);
      correctCount.current++;
      setHype((h) => Math.min(100, h + 8 + combo * 2));
      scoring.recordCorrect(current);
      setFeedback(isCrit ? "critical" : "correct");
      if (isCrit) {
        setCritFlash(true);
        setTimeout(() => setCritFlash(false), 500);
      }
      if ((qIdx + 1) % waveSize === 0 && qIdx + 1 < pool.length) {
        timerRef.current = setTimeout(() => {
          setFeedback(null);
          setSelected(null);
          setPhase("wave_clear");
          setQIdx((i) => i + 1);
        }, 1e3);
        return;
      }
    } else {
      playSFX("wrong");
      if (shield > 0) {
        setShield((s) => s - 1);
        setFeedback("blocked");
      } else {
        takeDamage(12 + wave * 3);
        setArenaShake(true);
        setTimeout(() => setArenaShake(false), 300);
        setFeedback("wrong");
      }
      resetCombo();
      setHype((h) => Math.max(0, h - 15));
      scoring.recordWrong(current);
    }
    timerRef.current = setTimeout(() => {
      setFeedback(null);
      setSelected(null);
      if (hp <= 0 || qIdx + 1 >= pool.length) {
        setPhase("result");
      } else {
        setQIdx((i) => i + 1);
      }
    }, 1200);
  }, [feedback, current, combo, wave, qIdx, pool.length, hp, shield, addScore, takeDamage, resetCombo, scoring]);
  reactExports.useEffect(() => () => clearTimeout(timerRef.current), []);
  if (pool.length < 4) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "⚔️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cần ít nhất 4 mục cho Arena Blitz." })
    ] });
  }
  if (phase === "wave_clear") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "arena-container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-wave-clear", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "arena-wave-clear-icon", children: "🏟️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-wave-clear-title", children: [
        "ĐÃ QUA ĐỢT ",
        wave,
        "!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-wave-clear-sub", children: [
        "+1 khiên • Tiếp: ",
        WAVE_NAMES[Math.min(wave, WAVE_NAMES.length - 1)]
      ] })
    ] }) });
  }
  if (phase === "result") {
    const pct = pool.length > 0 ? Math.round(correctCount.current / Math.min(qIdx + 1, pool.length) * 100) : 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "arena-result-icon", children: hp > 0 ? "🏆" : "💀" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "arena-result-title", children: hp > 0 ? "NHÀ VÔ ĐỊCH ĐẤU TRƯỜNG!" : "ĐẤU SĨ ĐÃ GỤC NGÃ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-result-wave", children: [
        "Đã tới đợt ",
        wave
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "arena-stat-value", children: correctCount.current }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "arena-stat-label", children: "Thắng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "arena-stat-value", children: wave }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "arena-stat-label", children: "Đợt" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "arena-stat-value", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "arena-stat-label", children: "Điểm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "arena-stat-value", children: [
            pct,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "arena-stat-label", children: "Chính xác" })
        ] })
      ] }),
      onComplete && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "arena-restart-btn", onClick: onComplete, children: "🔄 Vào lại đấu trường" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `arena-container ${critFlash ? "crit-flash" : ""} ${arenaShake ? "shake" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-hud", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-hud-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "arena-score-icon", children: "⚡" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "arena-score-val", children: score }),
        combo > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "arena-combo-badge", children: [
          "x",
          combo
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-hud-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "arena-wave-badge", children: currentWaveName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "arena-wave-progress", children: Array.from({ length: waveSize }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `arena-dot ${i < waveProgress ? "filled" : i === waveProgress ? "current" : ""}` }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-hud-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "arena-shields", children: "🛡️".repeat(shield) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-hp-bar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "arena-hp-fill", style: { width: `${hp}%`, background: hp > 50 ? "#22c55e" : hp > 25 ? "#eab308" : "#ef4444" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "arena-hp-text", children: [
            hp,
            "%"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-hype-bar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "arena-hype-fill", style: { width: `${hype}%` } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "arena-hype-text", children: [
        "🔥 HYPE ",
        hype,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "arena-challenger", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "arena-challenger-word", children: current == null ? void 0 : current.word }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "arena-challenger-reading", children: (current == null ? void 0 : current.reading) || "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "arena-listen-btn", onClick: () => speakJP(current == null ? void 0 : current.word), children: "🔊" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "arena-options", children: options.map((opt, i) => {
      let cls = "arena-option";
      if (feedback === "critical" && opt === (current == null ? void 0 : current.meaning)) cls += " critical";
      else if ((feedback === "correct" || feedback === "blocked") && opt === (current == null ? void 0 : current.meaning)) cls += " correct";
      else if (feedback === "wrong" && opt === selected && opt !== (current == null ? void 0 : current.meaning)) cls += " wrong";
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: cls, onClick: () => handleStrike(opt), disabled: !!feedback, children: opt }, i);
    }) }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `arena-feedback ${feedback}`, children: [
      feedback === "critical" && "⚡ CRITICAL HIT! Double damage!",
      feedback === "correct" && "✅ Strike landed!",
      feedback === "blocked" && "🛡️ Shield absorbed the blow!",
      feedback === "wrong" && `❌ Miss! Answer: ${current == null ? void 0 : current.meaning}`
    ] })
  ] });
}
const MODES = [
  { id: "kanji-battle", label: "Đấu hán tự", icon: "⚔️" },
  { id: "arena-blitz", label: "Đấu trường chớp nhoáng", icon: "🏟️" },
  { id: "ninja-typing", label: "Gõ ninja", icon: "🥷" },
  { id: "izakaya", label: "Quán 居酒屋", icon: "🍶" },
  { id: "anime-quotes", label: "Câu anime", icon: "💬" },
  { id: "sushi-chef", label: "Đầu bếp sushi", icon: "🍣" },
  { id: "world-boss", label: "Trùm thế giới", icon: "🐉" }
];
function AdventureArena({ mode = "kanji-battle" }) {
  const [section, setSection] = reactExports.useState("all");
  const [key, setKey] = reactExports.useState(0);
  const items = useVocabItems(section);
  const kanjiItems = useKanjiItems(section);
  const handleComplete = reactExports.useCallback(() => {
    setKey((k) => k + 1);
  }, []);
  const renderMode = () => {
    const safeItems = items.length >= 4 ? items : [];
    const safeKanjiItems = kanjiItems.length >= 4 ? kanjiItems : [];
    switch (mode) {
      case "kanji-battle":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(KanjiBattleMode, { items: safeKanjiItems, onComplete: handleComplete }, key);
      case "arena-blitz":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaBlitzMode, { items: safeItems, onComplete: handleComplete }, key);
      case "ninja-typing":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(NinjaTypingMode, { items: safeItems, onComplete: handleComplete }, key);
      case "izakaya":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(IzakayaMode, { items: safeItems, onComplete: handleComplete }, key);
      case "anime-quotes":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimeQuotesMode, { items: safeItems, onComplete: handleComplete }, key);
      case "sushi-chef":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SushiChefMode, { items: safeItems, onComplete: handleComplete }, key);
      case "world-boss":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(WorldBossMode, { items: safeItems, onComplete: handleComplete }, key);
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(KanjiBattleMode, { items: safeKanjiItems, onComplete: handleComplete }, key);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerContext.Provider, { value: "adventure-arena", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    GameShell,
    {
      trainerId: "adventure-arena",
      mode,
      icon: "🏟️",
      title: "Đấu trường phiêu lưu",
      color: "var(--n4-cat-adventure, #ffb887)",
      hearts: 3,
      rhythm: { warmup: 2, bossAt: "mid", bossCount: 1, cooldown: 1, totalItems: 15 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrainerTopBar,
          {
            trainerId: "adventure-arena",
            activeMode: mode,
            modes: MODES,
            section,
            onSectionChange: setSection
          }
        ),
        items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", padding: "3rem 1rem", color: "var(--n4-text-dim)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "2rem", marginBottom: "0.5rem" }, children: "📭" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chưa có dữ liệu. Hãy chọn section khác." })
        ] }) : renderMode()
      ]
    }
  ) });
}
export {
  MODES,
  AdventureArena as default
};
