import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, bn as getQualityConfig, aW as SubgameCanvas, bo as OnsenBath } from "./feature-3d-CFvJkEt3.js";
import { d as RarityAura, b as SparklePing } from "./feature-3d-scenery-C3eSpuWG.js";
import { i as installAudioPrewarm, p as playSfx, g as getAudioBus } from "./sfx-catalog-DZj5Y_7h.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
function formatRemaining(ms) {
  const seconds = Math.max(0, Math.floor(ms / 1e3));
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
const BREATH_CYCLE_MS = 4e3;
function OnsenPage() {
  var _a;
  const activeBuffs = useLearningStore((s) => s.activeBuffs || []);
  const activateBuff = useLearningStore((s) => s.activateBuff);
  const addCoins = useLearningStore((s) => s.addCoins);
  const qCfg = reactExports.useMemo(() => getQualityConfig(), []);
  const lowPowerMotion = qCfg.tier === "low" || ((_a = qCfg.deviceProbe) == null ? void 0 : _a.isMobile);
  const [phase, setPhase] = reactExports.useState("idle");
  const [breathT, setBreathT] = reactExports.useState(0);
  const [holds, setHolds] = reactExports.useState([]);
  const [nowTs, setNowTs] = reactExports.useState(Date.now());
  const startRef = reactExports.useRef(0);
  const rafRef = reactExports.useRef(0);
  const onsenBuff = reactExports.useMemo(
    () => activeBuffs.find((buff) => buff.id === "buff_gravity" && buff.expiresAt > nowTs) || null,
    [activeBuffs, nowTs]
  );
  reactExports.useEffect(() => {
    installAudioPrewarm();
  }, []);
  reactExports.useEffect(() => {
    if (!onsenBuff) return void 0;
    const id = setInterval(() => setNowTs(Date.now()), 1e3);
    return () => clearInterval(id);
  }, [onsenBuff]);
  reactExports.useEffect(() => {
    if (phase !== "bathing") return void 0;
    let lastFrame = performance.now();
    let lastRender = 0;
    const frameMs = 1e3 / (lowPowerMotion ? 20 : 30);
    const step = (ts) => {
      if (!startRef.current) startRef.current = ts;
      if (typeof document !== "undefined" && document.hidden) {
        startRef.current += ts - lastFrame;
        lastFrame = ts;
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      lastFrame = ts;
      if (ts - lastRender < frameMs) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      lastRender = ts;
      const elapsed = ts - startRef.current;
      setBreathT(elapsed);
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase, lowPowerMotion]);
  const breathPhase = reactExports.useMemo(() => {
    const t = breathT % BREATH_CYCLE_MS / BREATH_CYCLE_MS;
    return t < 0.5 ? "inhale" : "exhale";
  }, [breathT]);
  const breathScale = reactExports.useMemo(() => {
    const t = breathT % BREATH_CYCLE_MS / BREATH_CYCLE_MS;
    return 0.6 + 0.4 * (Math.sin(t * Math.PI * 2 - Math.PI / 2) + 1) / 2;
  }, [breathT]);
  const handleTap = reactExports.useCallback(() => {
    if (phase !== "bathing") return;
    const t = breathT % BREATH_CYCLE_MS / BREATH_CYCLE_MS;
    const distInhale = Math.abs(t - 0.25);
    const distExhale = Math.abs(t - 0.75);
    const minDist = Math.min(distInhale, distExhale);
    let rating = "miss";
    if (minDist < 0.04) rating = "perfect";
    else if (minDist < 0.1) rating = "good";
    setHolds((list) => [...list, rating]);
    if (rating === "perfect") {
      try {
        playSfx(getAudioBus(), "hit-perfect");
      } catch (e) {
      }
    } else if (rating === "good") {
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
  }, [phase, breathT]);
  const startBath = reactExports.useCallback(() => {
    if (onsenBuff || phase === "bathing") return;
    setPhase("bathing");
    setBreathT(0);
    setHolds([]);
    startRef.current = 0;
    try {
      playSfx(getAudioBus(), "pour-water");
    } catch (e) {
    }
  }, [onsenBuff, phase]);
  const finishBath = reactExports.useCallback(() => {
    const perfect = holds.filter((h) => h === "perfect").length;
    const good = holds.filter((h) => h === "good").length;
    const baseMs = 45 * 60 * 1e3;
    const bonusMs = (perfect * 5 + good * 2) * 60 * 1e3;
    const durMs = Math.min(baseMs + bonusMs, 120 * 60 * 1e3);
    activateBuff("buff_gravity", durMs);
    const tip = 20 + perfect * 8 + good * 3;
    if (addCoins) addCoins(tip, "onsen");
    try {
      playSfx(getAudioBus(), "level-up");
    } catch (e) {
    }
    setPhase("done");
    setNowTs(Date.now());
  }, [holds, activateBuff, addCoins]);
  const cyclesCompleted = Math.floor(breathT / BREATH_CYCLE_MS);
  const canFinish = cyclesCompleted >= 3;
  const remainingMs = onsenBuff ? onsenBuff.expiresAt - nowTs : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-onsen-remaster", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-onsen-remaster__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "♨️ Khu nghỉ dưỡng Onsen" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Hít thở theo nhịp bong bóng để kéo dài buff XP. Chạm khi vòng tròn đạt đỉnh / đáy." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-onsen-remaster__hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-onsen-remaster__hero-fallback", children: "♨️ Đang dâng hơi…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SubgameCanvas, { cameraPos: [0, 1.8, 5], fov: 50, backgroundColor: "#0a0d10", envPreset: "night", orbit: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(OnsenBath, {}) }) }) }),
    onsenBuff && /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: "epic", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-onsen-remaster__buff", children: [
      "⚡ Buff XP đang hoạt động — còn ",
      formatRemaining(remainingMs)
    ] }) }),
    phase === "idle" && !onsenBuff && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-onsen-remaster__lobby", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Buff cơ bản: +45 phút. Hít thở tốt → tối đa 2 giờ." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-onsen-remaster__start", onClick: startBath, children: "♨️ Bắt đầu ngâm" })
    ] }),
    phase === "bathing" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-onsen-remaster__game", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `n4-onsen-remaster__breath is-${breathPhase}`,
          style: { transform: `scale(${breathScale})` }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-onsen-remaster__breath-label", children: breathPhase === "inhale" ? "🫁 Hít vào" : "💨 Thở ra" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-onsen-remaster__counter", children: [
        "Chu kỳ: ",
        cyclesCompleted,
        " · Perfect: ",
        holds.filter((h) => h === "perfect").length,
        " · Good: ",
        holds.filter((h) => h === "good").length,
        " · Miss: ",
        holds.filter((h) => h === "miss").length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-onsen-remaster__tap", onClick: handleTap, children: "Chạm theo nhịp" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-onsen-remaster__finish", disabled: !canFinish, onClick: finishBath, children: canFinish ? "Hoàn tất ngâm" : `Cần ${3 - cyclesCompleted} chu kỳ nữa` })
    ] }),
    phase === "done" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-onsen-remaster__done", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SparklePing, { duration: 1200, onDone: () => setPhase("idle") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Thư giãn thành công" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Buff XP đã kích hoạt. Tiếp tục học để tận dụng." })
    ] })
  ] });
}
export {
  OnsenPage as default
};
