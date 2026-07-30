import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, a1 as useManagedTimeout, aW as SubgameCanvas, bx as TeaRoom } from "./feature-3d-jK3b4Iv-.js";
import { d as RarityAura, b as SparklePing } from "./feature-3d-scenery-C3eSpuWG.js";
import { i as installAudioPrewarm, p as playSfx, g as getAudioBus } from "./sfx-catalog-BoRQvGpU.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-Dp6hMoyV.js";
import "./vendor-supabase-DTEAj5J1.js";
const STEPS = [
  { id: "clean", nameVi: "Làm sạch chén", icon: "🥣", sfx: "pour-water" },
  { id: "matcha", nameVi: "Cho matcha", icon: "🍵", sfx: "slice-ingredient" },
  { id: "water", nameVi: "Rót nước", icon: "💧", sfx: "pour-water" },
  { id: "whisk", nameVi: "Đánh trà", icon: "🥢", sfx: "tap-click" },
  { id: "serve", nameVi: "Dâng trà", icon: "🫖", sfx: "bell-shrine" }
];
function randomStepId() {
  return STEPS[Math.floor(Math.random() * STEPS.length)].id;
}
function TeaCeremonyPage() {
  const addXp = useLearningStore((s) => s.addXp);
  const addCoins = useLearningStore((s) => s.addCoins);
  const [status, setStatus] = reactExports.useState("idle");
  const [round, setRound] = reactExports.useState(1);
  const [sequence, setSequence] = reactExports.useState([]);
  const [playerSequence, setPlayerSequence] = reactExports.useState([]);
  const [revealIndex, setRevealIndex] = reactExports.useState(-1);
  const [earnedXp, setEarnedXp] = reactExports.useState(0);
  const [earnedCoins, setEarnedCoins] = reactExports.useState(0);
  const [notice, setNotice] = reactExports.useState("Ghi nhớ thứ tự nghi thức rồi lặp lại.");
  const [perfectStreak, setPerfectStreak] = reactExports.useState(0);
  const awardedRef = reactExports.useRef(false);
  const roundTransitionTimeoutRef = reactExports.useRef(null);
  const { scheduleTimeout, clearManagedTimeout } = useManagedTimeout();
  reactExports.useEffect(() => {
    installAudioPrewarm();
  }, []);
  const startRound = reactExports.useCallback((nextRound) => {
    const len = Math.min(nextRound + 2, 8);
    const nextSequence = Array.from({ length: len }, () => randomStepId());
    setRound(nextRound);
    setSequence(nextSequence);
    setPlayerSequence([]);
    setRevealIndex(-1);
    setStatus("showing");
    setNotice("Hãy nhìn kỹ thứ tự này...");
  }, []);
  const startGame = reactExports.useCallback(() => {
    clearManagedTimeout(roundTransitionTimeoutRef.current);
    roundTransitionTimeoutRef.current = null;
    awardedRef.current = false;
    setEarnedXp(0);
    setEarnedCoins(0);
    setPerfectStreak(0);
    startRound(1);
  }, [clearManagedTimeout, startRound]);
  const finishGame = reactExports.useCallback((failed) => {
    clearManagedTimeout(roundTransitionTimeoutRef.current);
    roundTransitionTimeoutRef.current = null;
    const xp = Math.max(50, (round - 1) * 150 + perfectStreak * 50);
    const coins = Math.max(500, (round - 1) * 300 + perfectStreak * 100);
    if (!awardedRef.current) {
      if (xp > 0 && addXp) addXp(xp);
      if (coins > 0 && addCoins) addCoins(coins, "tea-ceremony");
      awardedRef.current = true;
    }
    setEarnedXp(xp);
    setEarnedCoins(coins);
    setStatus("done");
    setRevealIndex(-1);
    setNotice(failed ? "Sai bước — nghi thức gián đoạn." : "Hoàn thành nghi thức.");
    try {
      playSfx(getAudioBus(), failed ? "miss" : "level-up");
    } catch (e) {
    }
  }, [addXp, addCoins, clearManagedTimeout, round, perfectStreak]);
  reactExports.useEffect(() => {
    var _a;
    if (status !== "showing" || sequence.length === 0) return void 0;
    let idx = 0;
    let doneTimerId = null;
    setRevealIndex(0);
    try {
      playSfx(getAudioBus(), ((_a = STEPS.find((s) => s.id === sequence[0])) == null ? void 0 : _a.sfx) || "tap-soft");
    } catch (e) {
    }
    const timerId = window.setInterval(() => {
      var _a2;
      idx += 1;
      if (idx < sequence.length) {
        setRevealIndex(idx);
        try {
          playSfx(getAudioBus(), ((_a2 = STEPS.find((s) => s.id === sequence[idx])) == null ? void 0 : _a2.sfx) || "tap-soft");
        } catch (e) {
        }
        return;
      }
      window.clearInterval(timerId);
      doneTimerId = window.setTimeout(() => {
        setRevealIndex(-1);
        setStatus("input");
        setNotice("Tới lượt bạn. Lặp lại từng bước.");
      }, 500);
    }, 720);
    return () => {
      window.clearInterval(timerId);
      if (doneTimerId) window.clearTimeout(doneTimerId);
    };
  }, [sequence, status]);
  const shownSequence = reactExports.useMemo(() => {
    if (status !== "showing" || revealIndex < 0) return [];
    return sequence.slice(0, revealIndex + 1);
  }, [revealIndex, sequence, status]);
  const handlePickStep = reactExports.useCallback((stepId) => {
    if (status !== "input") return;
    const nextPlayer = [...playerSequence, stepId];
    setPlayerSequence(nextPlayer);
    const expected = sequence[nextPlayer.length - 1];
    const step = STEPS.find((s) => s.id === stepId);
    try {
      playSfx(getAudioBus(), (step == null ? void 0 : step.sfx) || "tap-click");
    } catch (e) {
    }
    if (expected !== stepId) {
      finishGame(true);
      return;
    }
    if (nextPlayer.length === sequence.length) {
      setPerfectStreak((s) => s + 1);
      if (round >= 8) {
        finishGame(false);
        return;
      }
      setStatus("showing");
      setNotice("Chuẩn! Sang vòng tiếp theo...");
      clearManagedTimeout(roundTransitionTimeoutRef.current);
      roundTransitionTimeoutRef.current = scheduleTimeout(() => {
        roundTransitionTimeoutRef.current = null;
        startRound(round + 1);
      }, 900);
    }
  }, [clearManagedTimeout, finishGame, playerSequence, round, scheduleTimeout, sequence, startRound, status]);
  const currentProgress = `${playerSequence.length}/${sequence.length || round + 2}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-tea-remaster", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-tea-remaster__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "🍵 Trà Đạo Chanoyu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-tea-remaster__chips", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Vòng: ",
          round
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Tiến độ: ",
          currentProgress
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Chuỗi: ",
          perfectStreak
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tea-remaster__hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tea-remaster__hero-fallback", children: "🍵 Đang dựng trà thất…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SubgameCanvas, { cameraPos: [0, 1.6, 4], fov: 50, backgroundColor: "#15100a", envPreset: "dawn", orbit: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TeaRoom, {}) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-tea-remaster__panel", children: [
      status === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-tea-remaster__lobby", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          notice,
          " Nghi thức mở rộng với 5 bước: làm sạch, matcha, nước, đánh, dâng."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chuỗi không sai → nhân thưởng XP + xu. 8 vòng liên tiếp để hoàn thành." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-tea-remaster__start", onClick: startGame, children: "Bắt đầu nghi thức" })
      ] }),
      (status === "showing" || status === "input") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tea-remaster__sequence", children: status === "showing" ? shownSequence.map((id, idx) => {
          const step = STEPS.find((s) => s.id === id);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: "epic", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-tea-remaster__step-icon", children: (step == null ? void 0 : step.icon) || "❔" }) }, `${id}-${idx}`);
        }) : playerSequence.map((id, idx) => {
          const step = STEPS.find((s) => s.id === id);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: "rare", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-tea-remaster__step-icon", children: (step == null ? void 0 : step.icon) || "❔" }) }, `${id}-${idx}`);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tea-remaster__notice", children: notice }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tea-remaster__buttons", children: STEPS.map((step) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "n4-tea-remaster__step",
            onClick: () => handlePickStep(step.id),
            disabled: status !== "input",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-tea-remaster__step-big", children: step.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-tea-remaster__step-label", children: step.nameVi })
            ]
          },
          step.id
        )) })
      ] }),
      status === "done" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-tea-remaster__result", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SparklePing, { duration: 1e3 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: notice }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "🪙 +",
          earnedCoins,
          " · ✨ +",
          earnedXp,
          " XP · Vòng đạt ",
          round - 1,
          "/8"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-tea-remaster__start", onClick: startGame, children: "Thử lại" })
      ] })
    ] })
  ] });
}
export {
  TeaCeremonyPage as default
};
