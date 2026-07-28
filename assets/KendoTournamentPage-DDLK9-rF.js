import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { d as useLearningStore, c5 as ScreenShakeProvider, b8 as SparklePing, c6 as useScreenShake, bW as getQualityConfig, bl as SubgameCanvas, c7 as KendoDojo, bn as RarityAura } from "./feature-3d-ClP3ARU5.js";
import { i as installAudioPrewarm, p as playSfx, g as getAudioBus } from "./sfx-catalog-BX24DhjS.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
const TARGETS = [
  { id: "men", nameVi: "Men (đầu)", icon: "🎌", point: 50, windowPct: [46, 54], key: "q" },
  { id: "do", nameVi: "Dō (ngực)", icon: "🛡️", point: 35, windowPct: [42, 58], key: "w" },
  { id: "kote", nameVi: "Kote (cổ tay)", icon: "🤚", point: 30, windowPct: [40, 60], key: "e" },
  { id: "tsuki", nameVi: "Tsuki (họng)", icon: "🎯", point: 80, windowPct: [48, 52], key: "r" }
];
const ROUNDS = [
  { id: 1, nameVi: "Vòng 1 · Hạng Nghiệp Dư", speed: 1.8, stamina: 100, coinReward: 40 },
  { id: 2, nameVi: "Vòng 2 · Hạng Thường", speed: 2.4, stamina: 85, coinReward: 70 },
  { id: 3, nameVi: "Vòng 3 · Hạng Cao", speed: 3, stamina: 70, coinReward: 110 },
  { id: 4, nameVi: "Chung kết · Kendo Champ", speed: 3.8, stamina: 60, coinReward: 200 }
];
function KendoMatch({ round, onFinish }) {
  var _a;
  const { shake } = useScreenShake();
  const qCfg = reactExports.useMemo(() => getQualityConfig(), []);
  const lowPowerMotion = qCfg.tier === "low" || ((_a = qCfg.deviceProbe) == null ? void 0 : _a.isMobile);
  const [position, setPosition] = reactExports.useState(0);
  const [direction, setDirection] = reactExports.useState(1);
  const [score, setScore] = reactExports.useState(0);
  const [combo, setCombo] = reactExports.useState(0);
  const [stamina, setStamina] = reactExports.useState(round.stamina);
  const [activeTarget, setActiveTarget] = reactExports.useState(TARGETS[0]);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [strikesDone, setStrikesDone] = reactExports.useState(0);
  const [timeLeft, setTimeLeft] = reactExports.useState(30);
  const rafRef = reactExports.useRef(0);
  const lastTsRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setActiveTarget(TARGETS[Math.floor(Math.random() * TARGETS.length)]);
    }, 2200);
    return () => clearInterval(id);
  }, []);
  reactExports.useEffect(() => {
    let lastRender = 0;
    const frameMs = 1e3 / (lowPowerMotion ? 20 : 30);
    const step = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      if (typeof document !== "undefined" && document.hidden) {
        lastTsRef.current = ts;
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      if (ts - lastRender < frameMs) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      lastRender = ts;
      const dt = Math.min(0.05, (ts - lastTsRef.current) / 1e3);
      lastTsRef.current = ts;
      setPosition((prev) => {
        let next = prev + direction * round.speed * 100 * dt;
        let newDir = direction;
        if (next >= 100) {
          next = 100;
          newDir = -1;
        }
        if (next <= 0) {
          next = 0;
          newDir = 1;
        }
        if (newDir !== direction) setDirection(newDir);
        return next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [direction, round.speed, lowPowerMotion]);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((t) => t > 0 ? t - 1 : 0);
      setStamina((s) => Math.max(0, s - 1));
    }, 1e3);
    return () => clearInterval(id);
  }, []);
  reactExports.useEffect(() => {
    if (timeLeft <= 0 || stamina <= 0) {
      cancelAnimationFrame(rafRef.current);
      onFinish == null ? void 0 : onFinish({ score, combo, strikes: strikesDone, stamina });
    }
  }, [timeLeft, stamina, score, combo, strikesDone, onFinish]);
  const strike = reactExports.useCallback((targetId) => {
    if (timeLeft <= 0 || stamina <= 0) return;
    const target = TARGETS.find((t) => t.id === targetId);
    if (!target) return;
    const inside = position >= target.windowPct[0] && position <= target.windowPct[1];
    const matchesActive = target.id === activeTarget.id;
    let rating = "miss";
    let gain = 0;
    if (inside && matchesActive) {
      rating = "ippon";
      gain = target.point + combo * 3;
      shake({ intensity: 0.6, duration: 180 });
      try {
        playSfx(getAudioBus(), "parry");
      } catch (e) {
      }
      try {
        playSfx(getAudioBus(), "hit-perfect");
      } catch (e) {
      }
    } else if (inside) {
      rating = "waza-ari";
      gain = Math.round(target.point * 0.45);
      try {
        playSfx(getAudioBus(), "hit-good");
      } catch (e) {
      }
    } else {
      try {
        playSfx(getAudioBus(), "miss");
      } catch (e) {
      }
    }
    setStrikesDone((s) => s + 1);
    setScore((s) => s + gain);
    setCombo((c) => rating === "miss" ? 0 : c + 1);
    setStamina((s) => Math.max(0, s - (rating === "miss" ? 8 : 4)));
    setFeedback({ rating, gain, target: target.nameVi, at: Date.now() });
  }, [timeLeft, stamina, position, activeTarget, combo, shake]);
  reactExports.useEffect(() => {
    const onKey = (e) => {
      const t = TARGETS.find((t2) => t2.key === e.key.toLowerCase());
      if (t) strike(t.id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [strike]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kendo-match", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubgameCanvas, { cameraPos: [0, 2, 5], fov: 48, backgroundColor: "#1a130c", envPreset: "sunset", orbit: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(KendoDojo, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kendo-match__hud", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kendo-match__stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Điểm: ",
          score
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Chuỗi: ",
          combo
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "⏱ ",
          timeLeft,
          "s"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kendo-match__stamina", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-kendo-match__stamina-label", children: "Thể lực" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-kendo-match__stamina-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-kendo-match__stamina-fill", style: { width: `${stamina}%` } }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-kendo-match__target", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: "rare", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kendo-match__target-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-kendo-match__target-icon", children: activeTarget.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-kendo-match__target-name", children: [
          "Đánh: ",
          activeTarget.nameVi
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-kendo-match__target-pt", children: [
          "+",
          activeTarget.point
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kendo-match__bar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "n4-kendo-match__zone is-perfect",
            style: { left: `${activeTarget.windowPct[0]}%`, width: `${activeTarget.windowPct[1] - activeTarget.windowPct[0]}%` }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "n4-kendo-match__needle",
            style: { left: `${position}%` }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-kendo-match__buttons", children: TARGETS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: `n4-kendo-match__btn ${activeTarget.id === t.id ? "is-active" : ""}`,
          onClick: () => strike(t.id),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.nameVi }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-kendo-match__btn-key", children: t.key.toUpperCase() })
          ]
        },
        t.id
      )) }),
      feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-kendo-match__flash is-${feedback.rating}`, children: [
        feedback.rating === "ippon" ? "IPPON!" : feedback.rating === "waza-ari" ? "WAZA-ARI" : "MISS",
        feedback.gain > 0 && ` +${feedback.gain}`
      ] })
    ] })
  ] });
}
function KendoTournamentPage() {
  const addCoins = useLearningStore((s) => s.addCoins);
  const addXp = useLearningStore((s) => s.addXp);
  const [roundIdx, setRoundIdx] = reactExports.useState(0);
  const [ladderScore, setLadderScore] = reactExports.useState(0);
  const [ladderHistory, setLadderHistory] = reactExports.useState([]);
  const [status, setStatus] = reactExports.useState("idle");
  const [tournamentResult, setTournamentResult] = reactExports.useState(null);
  reactExports.useEffect(() => {
    installAudioPrewarm();
  }, []);
  const handleMatchFinish = reactExports.useCallback((result) => {
    const round = ROUNDS[roundIdx];
    const passed = result.score >= round.coinReward * 2;
    setLadderHistory((h) => [...h, { round: round.id, ...result, passed }]);
    setLadderScore((s) => s + result.score);
    if (passed && roundIdx < ROUNDS.length - 1) {
      setRoundIdx((r) => r + 1);
      setStatus("idle");
    } else {
      const totalCoinsRaw = ROUNDS.slice(0, roundIdx + (passed ? 1 : 0)).reduce((sum, r) => sum + r.coinReward, 0);
      const totalCoins = Math.max(500, totalCoinsRaw * 20);
      const totalXp = Math.max(50, Math.round((ladderScore + result.score) / 10) * 15);
      if (totalCoins > 0 && addCoins) addCoins(totalCoins, "subgame:kendo-tournament");
      if (totalXp > 0 && addXp) addXp(totalXp);
      setTournamentResult({ totalCoins, totalScore: ladderScore + result.score, finalRound: round.id, championship: passed && roundIdx === ROUNDS.length - 1 });
      setStatus("done");
    }
  }, [roundIdx, ladderScore, addCoins, addXp]);
  const restart = reactExports.useCallback(() => {
    setRoundIdx(0);
    setLadderScore(0);
    setLadderHistory([]);
    setTournamentResult(null);
    setStatus("idle");
  }, []);
  const currentRound = ROUNDS[roundIdx];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ScreenShakeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-kendo-remaster", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-kendo-remaster__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "🤺 Giải Kendo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-kendo-remaster__ladder", children: ROUNDS.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `n4-kendo-remaster__rung ${i === roundIdx && status !== "done" ? "is-current" : ""} ${i < roundIdx ? "is-past" : ""}`,
          children: r.nameVi
        },
        r.id
      )) })
    ] }),
    status === "idle" && !tournamentResult && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kendo-remaster__lobby", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: currentRound.nameVi }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Nhấn phím Q/W/E/R (hoặc click) để đánh các mục tiêu: Men 🎌 +50, Dō 🛡️ +35, Kote 🤚 +30, Tsuki 🎯 +80. Mục tiêu đang sáng = điểm đầy đủ, đánh đúng zone xanh để Ippon. Combo cộng thêm điểm thưởng." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mục tiêu pass:" }),
        " ",
        currentRound.coinReward * 2,
        " điểm · stamina ",
        currentRound.stamina,
        ". Thưởng thắng vòng: ",
        currentRound.coinReward,
        " 🪙."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-kendo-remaster__start", onClick: () => setStatus("fighting"), children: "Bắt đầu trận" })
    ] }),
    status === "fighting" && /* @__PURE__ */ jsxRuntimeExports.jsx(KendoMatch, { round: currentRound, onFinish: handleMatchFinish }, roundIdx),
    status === "done" && tournamentResult && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kendo-remaster__result", children: [
      tournamentResult.championship && /* @__PURE__ */ jsxRuntimeExports.jsx(SparklePing, { duration: 1800 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: tournamentResult.championship ? "🏆 Vô Địch!" : "Kết thúc giải" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Tổng điểm: ",
        tournamentResult.totalScore
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Tổng xu nhận: ",
        tournamentResult.totalCoins,
        " 🪙"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Dừng ở vòng: ",
        tournamentResult.finalRound,
        "/",
        ROUNDS.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-kendo-remaster__history", children: ladderHistory.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: h.passed ? "is-passed" : "", children: [
        "Vòng ",
        h.round,
        ": ",
        h.score,
        " điểm · ",
        h.passed ? "Qua" : "Dừng"
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-kendo-remaster__start", onClick: restart, children: "Chơi lại" })
    ] })
  ] }) });
}
export {
  KendoTournamentPage as default
};
