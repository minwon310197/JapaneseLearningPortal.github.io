import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { Z as ZenScene, d as RarityAura, b as SparklePing } from "./feature-3d-scenery-C3eSpuWG.js";
import { u as useLearningStore, bj as getAjlYokaiById, aW as SubgameCanvas, bk as ZenDojo, al as getPowerUpMeta } from "./feature-3d-CFvJkEt3.js";
import { a as awardAjlRewards } from "./ajl-rewards-5BQsC-ZT.js";
import { A as ArrowLeft, n as Timer, o as Square, P as Play, k as CircleCheck, p as Coins, q as Gift } from "./vendor-icons-DHCyxOF-.js";
import { m as motion, A as AnimatePresence } from "./vendor-motion-CoQCRLnb.js";
import { b as useNavigate } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
const ZEN_PRESETS = [
  {
    id: "quick",
    label: "5 phút",
    subtitle: "Quick Focus",
    seconds: 5 * 60,
    rewardCoins: 50,
    bonusChance: 0.5,
    bonusPool: ["omikuji"]
  },
  {
    id: "pomodoro",
    label: "25 phút",
    subtitle: "Pomodoro",
    seconds: 25 * 60,
    rewardCoins: 300,
    bonusChance: 1,
    bonusPool: ["omikuji", "matchaFocus", "onsenToken"]
  },
  {
    id: "deep",
    label: "50 phút",
    subtitle: "Deep Work",
    seconds: 50 * 60,
    rewardCoins: 800,
    bonusChance: 1,
    bonusPool: ["onsenToken", "daruma", "shrineBell"]
  }
];
function formatClock(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function ZenDojoPage() {
  const navigate = useNavigate();
  const grantPowerUp = useLearningStore((s) => s.grantPowerUp);
  const equippedYokaiId = useLearningStore((s) => s.equippedYokai);
  const yokai = reactExports.useMemo(() => getAjlYokaiById(equippedYokaiId), [equippedYokaiId]);
  const [presetId, setPresetId] = reactExports.useState("pomodoro");
  const preset = reactExports.useMemo(() => ZEN_PRESETS.find((p) => p.id === presetId) || ZEN_PRESETS[1], [presetId]);
  const [timeLeft, setTimeLeft] = reactExports.useState(preset.seconds);
  const [isRunning, setIsRunning] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState(null);
  const [notice, setNotice] = reactExports.useState("");
  const finishedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!isRunning) {
      setTimeLeft(preset.seconds);
      finishedRef.current = false;
    }
  }, [preset.seconds, isRunning]);
  reactExports.useEffect(() => {
    if (!isRunning) return void 0;
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev <= 1 ? 0 : prev - 1);
    }, 1e3);
    return () => clearInterval(timerId);
  }, [isRunning]);
  const completeSession = reactExports.useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setIsRunning(false);
    const baseXp = Math.max(10, Math.floor(preset.seconds / 60) * 10);
    const rewards = awardAjlRewards(baseXp, preset.rewardCoins, "zen-dojo");
    let grantedPowerUp = null;
    if (Math.random() < preset.bonusChance && preset.bonusPool.length > 0) {
      grantedPowerUp = preset.bonusPool[Math.floor(Math.random() * preset.bonusPool.length)];
      grantPowerUp(grantedPowerUp, 1, "zen-dojo");
    }
    setResult({
      xp: rewards.xp,
      coins: rewards.coins,
      bonusPowerUp: grantedPowerUp
    });
    setNotice("Hoàn thành phiên tập trung! Thưởng đã được cộng vào tài khoản.");
  }, [grantPowerUp, preset.bonusChance, preset.bonusPool, preset.rewardCoins, preset.seconds]);
  reactExports.useEffect(() => {
    if (isRunning && timeLeft === 0) {
      completeSession();
    }
  }, [isRunning, timeLeft, completeSession]);
  const handleToggle = reactExports.useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
      setTimeLeft(preset.seconds);
      setNotice("Da dung va reset bo dem.");
      finishedRef.current = false;
      return;
    }
    setResult(null);
    setNotice("");
    setTimeLeft(preset.seconds);
    finishedRef.current = false;
    setIsRunning(true);
  }, [isRunning, preset.seconds]);
  const handleRestart = reactExports.useCallback(() => {
    setResult(null);
    setNotice("");
    setTimeLeft(preset.seconds);
    finishedRef.current = false;
  }, [preset.seconds]);
  const progress = (preset.seconds - timeLeft) / preset.seconds * 100;
  const radius = 126;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - progress / 100 * circumference;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { padding: "1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 18 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn", onClick: () => navigate("/tools"), style: { display: "inline-flex", alignItems: "center", gap: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 }),
        " Công cụ"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: { margin: 0, display: "inline-flex", alignItems: "center", gap: 8, fontSize: "1.4rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { size: 22 }),
        " Thiền đường"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ZenScene, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 80 } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { marginTop: 0, color: "var(--n4-text-dim)", marginBottom: 14 }, children: "Pomodoro tập trung theo phong cách AJL. Hoàn thành để nhận XP, xu và quà ngẫu nhiên." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-zen-remaster__hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-zen-remaster__hero-fallback", children: "🧘 Đang dựng thiền đường…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SubgameCanvas, { cameraPos: [0, 2.4, 5], fov: 50, backgroundColor: "#0f1310", envPreset: "dawn", orbit: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZenDojo, {}) }) }) }),
    notice && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card", style: { padding: 10, marginBottom: 14, borderColor: "var(--n4-accent)" }, children: notice }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card", style: { padding: "1.1rem", marginBottom: 14 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 10 }, children: ZEN_PRESETS.map((p) => {
      const active = p.id === preset.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `n4-btn ${active ? "n4-btn-primary" : "n4-btn-neon"}`,
          onClick: () => !isRunning && setPresetId(p.id),
          disabled: isRunning,
          style: { minHeight: 62, display: "grid", gap: 2, touchAction: "manipulation" },
          title: `${p.label} - +${p.rewardCoins} xu`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: p.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: ".8rem", opacity: 0.9 }, children: p.subtitle })
          ]
        },
        p.id
      );
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "1.2rem", minHeight: 520, display: "grid", placeItems: "center", position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: isRunning ? { opacity: [0.2, 0.45, 0.2] } : { opacity: 0.18 },
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          style: {
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,.25), rgba(59,130,246,0))",
            filter: "blur(2px)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: !result ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.96 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.96 },
          style: { position: "relative", zIndex: 2, width: "100%", display: "grid", justifyItems: "center", gap: 14 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", width: 290, height: 290 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "290", height: "290", style: { transform: "rotate(-90deg)" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "145", cy: "145", r: radius, stroke: "var(--n4-border)", strokeWidth: "10", fill: "transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "145",
                    cy: "145",
                    r: radius,
                    stroke: "var(--n4-accent)",
                    strokeWidth: "10",
                    fill: "transparent",
                    strokeLinecap: "round",
                    strokeDasharray: circumference,
                    strokeDashoffset: strokeOffset,
                    style: { transition: "stroke-dashoffset .8s linear" }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    animate: isRunning ? { y: [0, -4, 0] } : { y: 0 },
                    transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
                    style: { fontSize: "3.1rem", lineHeight: 1 },
                    children: (yokai == null ? void 0 : yokai.icon) || "🧘"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2rem", fontWeight: 800, letterSpacing: 1.2 }, children: formatClock(timeLeft) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: ".85rem", color: "var(--n4-text-dim)" }, children: [
                  preset.label,
                  " · +",
                  preset.rewardCoins,
                  " xu"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-dim)", fontSize: ".9rem", textAlign: "center" }, children: yokai ? `Đồng hành: ${yokai.name}. Phần thưởng cộng thêm từ yokai sẽ được tính tự động.` : "Chưa trang bị yokai. Bạn vẫn nhận đủ phần thưởng cơ bản." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "n4-btn n4-btn-primary",
                onClick: handleToggle,
                style: { minWidth: 210, minHeight: 50, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, touchAction: "manipulation" },
                children: isRunning ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { size: 18 }),
                  " Dừng và đặt lại"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 18 }),
                  " Bắt đầu tập trung"
                ] })
              }
            )
          ]
        },
        "running"
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0 },
          style: { position: "relative", zIndex: 2, width: "min(100%, 520px)", textAlign: "center" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 10 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: preset.id === "deep" ? "legendary" : preset.id === "pomodoro" ? "epic" : "rare", animated: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 44, color: "var(--n4-success)" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SparklePing, { duration: 900 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { marginTop: 0 }, children: "Hoàn thành tập trung" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "var(--n4-text-dim)", marginTop: -6, marginBottom: 16 }, children: [
              "Bạn đã hoàn thành ",
              preset.label,
              " và nhận thưởng."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "1rem", marginBottom: 12 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 6 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { size: 18 }),
                  " Xu"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                  "+",
                  result.coins
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { display: "inline-flex", alignItems: "center", gap: 6 }, children: "⭐ Điểm" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                  "+",
                  result.xp
                ] })
              ] }),
              result.bonusPowerUp && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--n4-border)", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 6 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { size: 16 }),
                  " Thưởng"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                  getPowerUpMeta(result.bonusPowerUp).icon,
                  " ",
                  getPowerUpMeta(result.bonusPowerUp).label,
                  " x1"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: handleRestart, style: { minWidth: 170, minHeight: 46 }, children: "Bắt đầu lại" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn", onClick: () => navigate("/tools"), style: { minWidth: 170, minHeight: 46 }, children: "Quay ve Cong cu" })
            ] })
          ]
        },
        "result"
      ) })
    ] })
  ] });
}
export {
  ZenDojoPage as default
};
