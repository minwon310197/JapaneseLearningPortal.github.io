import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { aT as WHEEL_CONFIG, aU as SLOT_CONFIG, al as getPowerUpMeta, u as useLearningStore, a1 as useManagedTimeout, aB as getCurrentSeason, aV as VIP_CONFIG, aW as SubgameCanvas, aX as TreasureCave } from "./feature-3d-CFvJkEt3.js";
import { u as useTodayKey } from "./useTodayKey-BBNOYeod.js";
import { t as triggerCelebration } from "./CelebrationOverlay-C3dUD_zC.js";
import { d as RarityAura, a as ConfettiBurst, b as SparklePing } from "./feature-3d-scenery-C3eSpuWG.js";
import { i as installAudioPrewarm, p as playSfx, g as getAudioBus } from "./sfx-catalog-DZj5Y_7h.js";
/* empty css                 */
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
const WHEEL_SEGMENTS = [
  { label: "10 🪙", reward: 10, type: "coins", color: "#3b82f6", weight: 24 },
  { label: "25 🪙", reward: 25, type: "coins", color: "#8b5cf6", weight: 20 },
  { label: "50 🪙", reward: 50, type: "coins", color: "#f59e0b", weight: 14 },
  { label: "100 🪙", reward: 100, type: "coins", color: "#ef4444", weight: 4 },
  { label: "💡 Gợi ý", reward: 1, type: "powerup", powerUpId: "hintPack", color: "#10b981", weight: 15 },
  { label: "⚡ XP×2", reward: 1, type: "powerup", powerUpId: "xpBoost", color: "#06b6d4", weight: 10 },
  { label: "🔗 Giữ combo", reward: 1, type: "powerup", powerUpId: "comboSaver", color: "#ec4899", weight: 5 },
  { label: "💀 Trắng tay", reward: 0, type: "nothing", color: "#374151", weight: 8 }
];
const SLOT_SYMBOLS = ["🌸", "⛩️", "🐉", "💰", "🎌", "🍣", "🗻", "🎎"];
const SLOT_WEIGHTS = [15, 12, 3, 5, 15, 15, 20, 15];
const SLOT_PAYOUTS = {
  "🐉🐉🐉": 1800,
  "💰💰💰": 700,
  "⛩️⛩️⛩️": 300,
  "🌸🌸🌸": 150,
  "🎌🎌🎌": 120,
  "🍣🍣🍣": 90,
  "🗻🗻🗻": 75,
  "🎎🎎🎎": 70
};
let cachedWheelProfile = null;
let cachedSlotProfile = null;
function weightedPick(items, rng = Math.random) {
  const totalWeight = items.reduce((sum, item) => sum + Math.max(0, item.weight || 0), 0);
  if (!totalWeight) return 0;
  let roll = rng() * totalWeight;
  for (let index = 0; index < items.length; index += 1) {
    roll -= Math.max(0, items[index].weight || 0);
    if (roll <= 0) return index;
  }
  return Math.max(0, items.length - 1);
}
function randomSlotSymbol(rng = Math.random) {
  const totalWeight = SLOT_WEIGHTS.reduce((sum, weight) => sum + weight, 0);
  let roll = rng() * totalWeight;
  for (let index = 0; index < SLOT_SYMBOLS.length; index += 1) {
    roll -= SLOT_WEIGHTS[index];
    if (roll <= 0) return SLOT_SYMBOLS[index];
  }
  return SLOT_SYMBOLS[0];
}
function resolveWheelCoinReward(segment, powerUps = {}) {
  if (!segment || segment.type !== "coins") return 0;
  const stacks = Math.min((powerUps == null ? void 0 : powerUps.luckyCharm) || 0, 3);
  const multiplier = 1 + stacks * WHEEL_CONFIG.luckyCharmBoostPerStack;
  return Math.round((segment.reward || 0) * multiplier);
}
function getWheelRewardValue(segment) {
  if (!segment) return 0;
  if (segment.type === "coins") return Math.max(0, Number(segment.reward) || 0);
  if (segment.type === "powerup") {
    const meta = getPowerUpMeta(segment.powerUpId);
    return Math.max(0, Number(meta.coinValue) || 0) * Math.max(1, Number(segment.reward) || 1);
  }
  return 0;
}
function getWheelProfile() {
  if (cachedWheelProfile) return cachedWheelProfile;
  const totalWeight = WHEEL_SEGMENTS.reduce((sum, segment) => sum + segment.weight, 0);
  const probabilities = WHEEL_SEGMENTS.map((segment) => ({
    ...segment,
    probability: totalWeight > 0 ? segment.weight / totalWeight : 0
  }));
  const coinValue = probabilities.reduce(
    (sum, segment) => sum + (segment.type === "coins" ? segment.probability * getWheelRewardValue(segment) : 0),
    0
  );
  const powerUpValue = probabilities.reduce(
    (sum, segment) => sum + (segment.type === "powerup" ? segment.probability * getWheelRewardValue(segment) : 0),
    0
  );
  const expectedValue = roundMetric(coinValue + powerUpValue);
  cachedWheelProfile = {
    expectedValue,
    efficiency: Number((expectedValue / Math.max(1, WHEEL_CONFIG.costPerSpin)).toFixed(2)),
    coinValue: roundMetric(coinValue),
    powerUpValue: roundMetric(powerUpValue),
    bustChance: Number(
      probabilities.filter((segment) => segment.type === "nothing").reduce((sum, segment) => sum + segment.probability, 0).toFixed(2)
    ),
    bestHitValue: Math.max(...WHEEL_SEGMENTS.map(getWheelRewardValue)),
    dailySpendCap: WHEEL_CONFIG.costPerSpin * WHEEL_CONFIG.maxSpinsPerDay,
    bestFor: "Giá trị hằng ngày",
    tone: "Ít rủi ro, trần thưởng rõ ràng"
  };
  return cachedWheelProfile;
}
function getSlotFortuneRefund(slotPity = 0) {
  const pity = Math.max(0, Number(slotPity) || 0);
  if (pity < SLOT_CONFIG.fortuneStart) return 0;
  return Math.min(
    SLOT_CONFIG.fortuneRefundCap,
    SLOT_CONFIG.fortuneRefundBase + (pity - SLOT_CONFIG.fortuneStart) * SLOT_CONFIG.fortuneRefundStep
  );
}
function evaluateSlotSpin(finalSymbols, slotPity = 0) {
  const key = (finalSymbols || []).join("");
  const triplePayout = SLOT_PAYOUTS[key] || 0;
  const hasTwoMatch = !triplePayout && hasAnyPair(finalSymbols);
  const basePayout = triplePayout || (hasTwoMatch ? SLOT_CONFIG.twoMatchPayout : 0);
  const fortuneRefund = !basePayout ? getSlotFortuneRefund(slotPity) : 0;
  const totalPayout = basePayout + fortuneRefund;
  const isJackpot = triplePayout >= SLOT_CONFIG.jackpotThreshold;
  const tier = isJackpot ? "jackpot" : triplePayout > 0 ? "triple" : hasTwoMatch ? "pair" : fortuneRefund > 0 ? "fortune" : "miss";
  return {
    symbols: finalSymbols,
    key,
    triplePayout,
    basePayout,
    fortuneRefund,
    totalPayout,
    hasTwoMatch,
    isJackpot,
    tier,
    nextPity: totalPayout > 0 ? 0 : Math.max(0, Number(slotPity) || 0) + 1
  };
}
function getSlotProfile() {
  if (cachedSlotProfile) return cachedSlotProfile;
  const baseExpectedValue = getExactSlotExpectedValue();
  const simulated = simulateSlotProfile();
  cachedSlotProfile = {
    expectedValue: roundMetric(simulated.expectedValue),
    baseExpectedValue: roundMetric(baseExpectedValue),
    efficiency: Number((simulated.expectedValue / Math.max(1, SLOT_CONFIG.costPerSpin)).toFixed(2)),
    hitChance: Number(simulated.hitChance.toFixed(2)),
    jackpotChance: Number(simulated.jackpotChance.toFixed(4)),
    fortuneChance: Number(simulated.fortuneChance.toFixed(2)),
    bestHitValue: Math.max(...Object.values(SLOT_PAYOUTS)),
    fortuneStart: SLOT_CONFIG.fortuneStart,
    maxFortuneRefund: SLOT_CONFIG.fortuneRefundCap,
    bestFor: "Săn jackpot",
    tone: "Biến động cao nhưng có lưới an toàn"
  };
  return cachedSlotProfile;
}
function getExactSlotExpectedValue() {
  let expected = 0;
  for (const a of SLOT_SYMBOLS) {
    for (const b of SLOT_SYMBOLS) {
      for (const c of SLOT_SYMBOLS) {
        const probability = getSlotSymbolProbability(a) * getSlotSymbolProbability(b) * getSlotSymbolProbability(c);
        const outcome = evaluateSlotSpin([a, b, c], 0);
        expected += probability * outcome.totalPayout;
      }
    }
  }
  return expected;
}
function simulateSlotProfile(spins = 12e3) {
  const rng = createSeededRng(918273645);
  let pity = 0;
  let totalPayout = 0;
  let hits = 0;
  let jackpots = 0;
  let fortunes = 0;
  for (let spin = 0; spin < spins; spin += 1) {
    const finalSymbols = [randomSlotSymbol(rng), randomSlotSymbol(rng), randomSlotSymbol(rng)];
    const outcome = evaluateSlotSpin(finalSymbols, pity);
    pity = outcome.nextPity;
    totalPayout += outcome.totalPayout;
    if (outcome.totalPayout > 0) hits += 1;
    if (outcome.isJackpot) jackpots += 1;
    if (outcome.fortuneRefund > 0) fortunes += 1;
  }
  return {
    expectedValue: totalPayout / Math.max(1, spins),
    hitChance: hits / Math.max(1, spins),
    jackpotChance: jackpots / Math.max(1, spins),
    fortuneChance: fortunes / Math.max(1, spins)
  };
}
function getSlotSymbolProbability(symbol) {
  const index = SLOT_SYMBOLS.indexOf(symbol);
  const total = SLOT_WEIGHTS.reduce((sum, weight) => sum + weight, 0);
  if (index < 0 || !total) return 0;
  return SLOT_WEIGHTS[index] / total;
}
function hasAnyPair(symbols = []) {
  return symbols[0] === symbols[1] || symbols[1] === symbols[2] || symbols[0] === symbols[2];
}
function createSeededRng(seed = 1) {
  let state = seed >>> 0;
  return () => {
    state = 1664525 * state + 1013904223 >>> 0;
    return state / 4294967296;
  };
}
function roundMetric(value) {
  const safe = Math.max(0, Number(value) || 0);
  return Math.round(safe * 100) / 100;
}
function WheelOfFortune() {
  const { coins, spendCoins, addCoins, grantPowerUp, wheelSpinsToday, lastWheelDate, vipExpiry, recordWheelSpin, powerUps } = useLearningStore(useShallow((s) => ({
    coins: s.coins,
    spendCoins: s.spendCoins,
    addCoins: s.addCoins,
    grantPowerUp: s.grantPowerUp,
    wheelSpinsToday: s.wheelSpinsToday,
    lastWheelDate: s.lastWheelDate,
    vipExpiry: s.vipExpiry,
    recordWheelSpin: s.recordWheelSpin,
    powerUps: s.powerUps
  })));
  const [spinning, setSpinning] = reactExports.useState(false);
  const [rotation, setRotation] = reactExports.useState(0);
  const [result, setResult] = reactExports.useState(null);
  const wheelRef = reactExports.useRef(null);
  const spinningRef = reactExports.useRef(false);
  const spinTimeoutRef = reactExports.useRef(null);
  const { scheduleTimeout, clearManagedTimeout } = useManagedTimeout();
  const today = useTodayKey();
  const isNewDay = lastWheelDate !== today;
  const currentSpins = isNewDay ? 0 : wheelSpinsToday;
  const isVip = vipExpiry && Date.now() < vipExpiry;
  const maxSpins = WHEEL_CONFIG.maxSpinsPerDay + (isVip ? WHEEL_CONFIG.vipBonusSpins : 0);
  const canSpin = currentSpins < maxSpins && coins >= WHEEL_CONFIG.costPerSpin;
  const currentSeason = getCurrentSeason();
  const isMatsuri = (currentSeason == null ? void 0 : currentSeason.id) === "autumn";
  const profile = getWheelProfile();
  const handleSpin = reactExports.useCallback(() => {
    if (!canSpin || spinningRef.current) return;
    if (!spendCoins(WHEEL_CONFIG.costPerSpin, "wheel-spin")) return;
    recordWheelSpin();
    spinningRef.current = true;
    setSpinning(true);
    setResult(null);
    const winnerIndex = weightedPick(WHEEL_SEGMENTS);
    const segmentAngle = 360 / WHEEL_SEGMENTS.length;
    const extraRotations = (5 + Math.floor(Math.random() * 4)) * 360;
    const targetAngle = 360 - (winnerIndex * segmentAngle + segmentAngle / 2);
    const finalRotation = rotation + extraRotations + targetAngle;
    setRotation(finalRotation);
    clearManagedTimeout(spinTimeoutRef.current);
    spinTimeoutRef.current = scheduleTimeout(() => {
      spinTimeoutRef.current = null;
      spinningRef.current = false;
      setSpinning(false);
      const seg = WHEEL_SEGMENTS[winnerIndex];
      if (seg.type === "coins" && seg.reward > 0) {
        const finalReward = resolveWheelCoinReward(seg, powerUps);
        setResult({ ...seg, finalReward });
        addCoins(finalReward, "wheel-win");
      } else if (seg.type === "powerup") {
        setResult(seg);
        grantPowerUp(seg.powerUpId, seg.reward, "wheel-win");
      } else {
        setResult(seg);
      }
    }, 4e3);
  }, [addCoins, canSpin, clearManagedTimeout, grantPowerUp, powerUps, recordWheelSpin, rotation, scheduleTimeout, spendCoins]);
  const segAngle = 360 / WHEEL_SEGMENTS.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-wheel-container${isMatsuri ? " matsuri" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🎡 Vòng quay may mắn" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-wheel-sub", children: "Quay để nhận xu và vật phẩm hỗ trợ!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-wheel-meta", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: profile.bestFor }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Giá trị x",
        profile.efficiency.toFixed(2)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Trắng tay ",
        Math.round(profile.bustChance * 100),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-wheel-wrapper", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-wheel-pointer", children: "▼" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          ref: wheelRef,
          viewBox: "0 0 300 300",
          className: `n4-wheel-svg${spinning ? " spinning" : ""}`,
          style: { transform: `rotate(${rotation}deg)`, transition: spinning ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)" : "none" },
          children: [
            WHEEL_SEGMENTS.map((seg, i) => {
              const startAngle = i * segAngle - 90;
              const endAngle = startAngle + segAngle;
              const x1 = 150 + 140 * Math.cos(startAngle * Math.PI / 180);
              const y1 = 150 + 140 * Math.sin(startAngle * Math.PI / 180);
              const x2 = 150 + 140 * Math.cos(endAngle * Math.PI / 180);
              const y2 = 150 + 140 * Math.sin(endAngle * Math.PI / 180);
              const largeArc = segAngle > 180 ? 1 : 0;
              const textAngle = startAngle + segAngle / 2;
              const tx = 150 + 90 * Math.cos(textAngle * Math.PI / 180);
              const ty = 150 + 90 * Math.sin(textAngle * Math.PI / 180);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: `M150,150 L${x1},${y1} A140,140 0 ${largeArc},1 ${x2},${y2} Z`,
                    fill: seg.color,
                    stroke: "#1a1a2e",
                    strokeWidth: "2"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "text",
                  {
                    x: tx,
                    y: ty,
                    fill: "white",
                    fontSize: "12",
                    fontWeight: "bold",
                    textAnchor: "middle",
                    dominantBaseline: "central",
                    transform: `rotate(${textAngle + 90}, ${tx}, ${ty})`,
                    children: seg.label
                  }
                )
              ] }, i);
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "150", cy: "150", r: "20", fill: "#1a1a2e" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "150", y: "150", fill: "white", fontSize: "14", textAnchor: "middle", dominantBaseline: "central", children: "🎡" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-wheel-info", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Lượt quay: ",
        currentSpins,
        "/",
        maxSpins
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Giá: 🪙 ",
        WHEEL_CONFIG.costPerSpin,
        "/lượt"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-wheel-spin-btn", disabled: !canSpin || spinning, onClick: handleSpin, children: spinning ? "🌀 Đang quay..." : canSpin ? `🎡 Quay (🪙 ${WHEEL_CONFIG.costPerSpin})` : currentSpins >= maxSpins ? "Hết lượt hôm nay" : "Không đủ xu" }),
    result && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-wheel-result ${result.type === "nothing" ? "loss" : "win"}`, children: result.type === "nothing" ? "💀 Hẹn may lần sau!" : result.type === "coins" ? `🎉 Nhận 🪙 ${result.finalReward || result.reward}!` : `🎉 Nhận: ${result.label}!` })
  ] });
}
function SlotMachine() {
  var _a;
  const { coins, spendCoins, addCoins, slotSpinsToday, lastSlotDate, recordSlotSpin, slotPity, setSlotPity } = useLearningStore(useShallow((s) => ({
    coins: s.coins,
    spendCoins: s.spendCoins,
    addCoins: s.addCoins,
    slotSpinsToday: s.slotSpinsToday,
    lastSlotDate: s.lastSlotDate,
    recordSlotSpin: s.recordSlotSpin,
    slotPity: s.slotPity || 0,
    setSlotPity: s.setSlotPity
  })));
  const [spinning, setSpinning] = reactExports.useState(false);
  const [reels, setReels] = reactExports.useState(["🌸", "⛩️", "🐉"]);
  const [reelAnimClass, setReelAnimClass] = reactExports.useState(["", "", ""]);
  const [result, setResult] = reactExports.useState(null);
  const [jackpot, setJackpot] = reactExports.useState(false);
  const spinningRef = reactExports.useRef(false);
  const { scheduleTimeout, clearAllManagedTimeouts } = useManagedTimeout();
  const today = useTodayKey();
  const isNewDay = lastSlotDate !== today;
  const currentSpins = isNewDay ? 0 : slotSpinsToday;
  const currentPity = isNewDay ? 0 : slotPity;
  const canSpin = currentSpins < SLOT_CONFIG.maxSpinsPerDay && coins >= SLOT_CONFIG.costPerSpin;
  const isMatsuri = ((_a = getCurrentSeason()) == null ? void 0 : _a.id) === "autumn";
  const profile = getSlotProfile();
  const pityProgress = `${Math.min(100, Math.round(Math.min(currentPity, SLOT_CONFIG.fortuneStart) / SLOT_CONFIG.fortuneStart * 100))}%`;
  const fortuneReady = currentPity >= SLOT_CONFIG.fortuneStart;
  const handleSpin = reactExports.useCallback(() => {
    if (!canSpin || spinningRef.current) return;
    if (!spendCoins(SLOT_CONFIG.costPerSpin, "slot-spin")) return;
    recordSlotSpin();
    clearAllManagedTimeouts();
    spinningRef.current = true;
    setSpinning(true);
    setResult(null);
    setJackpot(false);
    setReelAnimClass(["n4-slot-spin", "n4-slot-spin", "n4-slot-spin"]);
    const final = [randomSlotSymbol(), randomSlotSymbol(), randomSlotSymbol()];
    scheduleTimeout(() => {
      setReels((r) => [final[0], r[1], r[2]]);
      setReelAnimClass((c) => ["n4-slot-stop", c[1], c[2]]);
    }, 800);
    scheduleTimeout(() => {
      setReels((r) => [r[0], final[1], r[2]]);
      setReelAnimClass((c) => [c[0], "n4-slot-stop", c[2]]);
    }, 1400);
    scheduleTimeout(() => {
      setReels(final);
      setReelAnimClass(["n4-slot-stop", "n4-slot-stop", "n4-slot-stop"]);
      spinningRef.current = false;
      setSpinning(false);
      const outcome = evaluateSlotSpin(final, currentPity);
      setSlotPity(outcome.nextPity);
      if (outcome.totalPayout > 0) {
        addCoins(outcome.totalPayout, "slot-win");
        setJackpot(outcome.isJackpot);
        triggerCelebration(outcome.isJackpot ? "coin" : "sparkle", outcome.isJackpot ? 3e3 : 1500);
        if (outcome.isJackpot) scheduleTimeout(() => setJackpot(false), 2500);
      }
      setResult(outcome);
    }, 2e3);
  }, [addCoins, canSpin, clearAllManagedTimeouts, currentPity, recordSlotSpin, scheduleTimeout, setSlotPity, spendCoins]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-slot-container${isMatsuri ? " matsuri" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🎰 Máy slot" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-slot-sub", children: "Khớp 3 biểu tượng để săn thưởng lớn!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-slot-meta", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: profile.bestFor }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Tỷ suất x",
        profile.efficiency.toFixed(2)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Tỉ lệ trúng ",
        Math.round(profile.hitChance * 100),
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Jackpot ",
        (profile.jackpotChance * 100).toFixed(2),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-slot-machine", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-slot-frame${jackpot ? " jackpot" : ""}`, children: reels.map((symbol, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-slot-reel ${reelAnimClass[i]}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-slot-symbol", children: symbol }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-slot-arm", onClick: handleSpin, "aria-label": "Quay máy đánh bạc", disabled: spinning })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-slot-payouts", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Thưởng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-slot-payout-grid", children: [
        Object.entries(SLOT_PAYOUTS).slice(0, 4).map(([symbols, payout]) => {
          var _a2;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-slot-payout-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ((_a2 = symbols.match(/.{2}/g)) == null ? void 0 : _a2.join(" ")) || symbols }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "🪙 ",
              payout
            ] })
          ] }, symbols);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-slot-payout-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "2 biểu tượng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "🪙 ",
            SLOT_CONFIG.twoMatchPayout
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-slot-fortune", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-slot-fortune-top", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Thước may mắn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: fortuneReady ? `Sẵn hoàn xu • tối đa 🪙 ${SLOT_CONFIG.fortuneRefundCap}` : `${currentPity}/${SLOT_CONFIG.fortuneStart}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-slot-fortune-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-slot-fortune-fill", style: { width: pityProgress } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-slot-info", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Lượt quay: ",
        currentSpins,
        "/",
        SLOT_CONFIG.maxSpinsPerDay
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Giá: 🪙 ",
        SLOT_CONFIG.costPerSpin,
        "/lượt"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-slot-spin-btn", disabled: !canSpin || spinning, onClick: handleSpin, children: spinning ? "🌀 Đang quay..." : canSpin ? `🎰 Quay (🪙 ${SLOT_CONFIG.costPerSpin})` : "Hết lượt" }),
    result && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-slot-result ${result.totalPayout > 0 ? "win" : "loss"}`, children: result.tier === "jackpot" ? `🎉 Jackpot! Nhận 🪙 ${result.totalPayout}!` : result.tier === "triple" ? `🎉 Trúng bộ ba! Nhận 🪙 ${result.totalPayout}!` : result.tier === "pair" ? `✨ Trúng cặp! Nhận 🪙 ${result.totalPayout}!` : result.tier === "fortune" ? `🍀 Mở hoàn xu may mắn: 🪙 ${result.totalPayout}!` : "💨 Trượt rồi, thử lại nhé!" })
  ] });
}
function VIPPass() {
  const { coins, vipExpiry, purchaseVIP } = useLearningStore(useShallow((s) => ({
    coins: s.coins,
    vipExpiry: s.vipExpiry,
    purchaseVIP: s.purchaseVIP
  })));
  const isActive = vipExpiry && Date.now() < vipExpiry;
  const daysLeft = isActive ? Math.max(0, Math.ceil((vipExpiry - Date.now()) / (1e3 * 60 * 60 * 24))) : 0;
  const handlePurchase = () => {
    if (isActive) return;
    purchaseVIP();
  };
  const benefits = [
    { icon: "🪙", text: `+${Math.round((VIP_CONFIG.coinMultiplier - 1) * 100)}% mọi nguồn xu` },
    { icon: "🎡", text: `+${WHEEL_CONFIG.vipBonusSpins} lượt vòng quay mỗi ngày` },
    { icon: "🐾", text: `Giảm ${Math.round(VIP_CONFIG.petFeedingDiscount * 100)}% phí chăm thú cưng` },
    { icon: "✨", text: "Huy hiệu và viền VIP riêng" },
    { icon: "🎰", text: "Ưu tiên hiệu ứng gacha" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-vip-card ${isActive ? "active" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-vip-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-vip-crown", children: "👑" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Vé VIP tuần" }),
      isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-vip-badge", children: "ĐANG BẬT" })
    ] }),
    isActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-vip-status", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-vip-expires", children: [
        "⏰ Còn ",
        daysLeft,
        " ngày"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-vip-timer-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-vip-timer-fill", style: { width: `${daysLeft / 7 * 100}%` } }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-vip-buy-btn", disabled: coins < VIP_CONFIG.price, onClick: handlePurchase, children: [
      "Kích hoạt VIP — 🪙 ",
      VIP_CONFIG.price
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-vip-benefits", children: benefits.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-vip-benefit", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b.text })
    ] }, i)) })
  ] });
}
const COIN_FLIP_KEY = "n4.gambling.coinFlipToday.v1";
function getTodayKey() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function GamblingPage() {
  const coins = useLearningStore((s) => s.coins);
  const spendCoins = useLearningStore((s) => s.spendCoins);
  const addCoins = useLearningStore((s) => s.addCoins);
  const wheelProfile = getWheelProfile();
  const slotProfile = getSlotProfile();
  const [flipState, setFlipState] = reactExports.useState(() => {
    try {
      const raw = localStorage.getItem(COIN_FLIP_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.date === getTodayKey()) return parsed;
      }
    } catch (e) {
    }
    return { date: getTodayKey(), flipsLeft: 3, totalWon: 0 };
  });
  const [bet, setBet] = reactExports.useState(50);
  const [flipping, setFlipping] = reactExports.useState(false);
  const [lastFlip, setLastFlip] = reactExports.useState(null);
  const [celebrate, setCelebrate] = reactExports.useState(false);
  reactExports.useEffect(() => {
    installAudioPrewarm();
  }, []);
  reactExports.useEffect(() => {
    try {
      localStorage.setItem(COIN_FLIP_KEY, JSON.stringify(flipState));
    } catch (e) {
    }
  }, [flipState]);
  const flipCoin = reactExports.useCallback((pick) => {
    if (flipping) return;
    if (flipState.flipsLeft <= 0) return;
    if (coins < bet) return;
    if (!(spendCoins == null ? void 0 : spendCoins(bet, "coin-flip"))) return;
    setFlipping(true);
    try {
      playSfx(getAudioBus(), "reel-tick");
    } catch (e) {
    }
    setTimeout(() => {
      var _a, _b;
      const outcome = Math.random() < 0.5 ? "heads" : "tails";
      const won = outcome === pick;
      const payout = won ? bet * 2 : 0;
      if (won && addCoins) addCoins(payout, "coin-flip-win");
      setLastFlip({ outcome, pick, won, payout });
      setFlipState((s) => ({
        date: getTodayKey(),
        flipsLeft: s.flipsLeft - 1,
        totalWon: s.totalWon + (won ? payout - bet : -bet)
      }));
      setFlipping(false);
      try {
        (_b = (_a = getAudioBus()).playRarityChime) == null ? void 0 : _b.call(_a, won ? "rare" : "common");
      } catch (e) {
      }
      if (won && payout >= 200) setCelebrate(true);
    }, 1200);
  }, [flipping, flipState.flipsLeft, coins, bet, spendCoins, addCoins]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gambling-remaster", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gambling-remaster__nav", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "n4-btn n4-btn-sm n4-btn-ghost", children: "← Về trang chủ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gacha-coins", children: [
        "🪙 ",
        coins.toLocaleString("vi-VN")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gambling-remaster__hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gambling-remaster__hero-fallback", children: "🎲 Đang chuẩn bị sảnh…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SubgameCanvas, { cameraPos: [0, 2.2, 5], fov: 50, backgroundColor: "#100a1a", envPreset: "night", orbit: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TreasureCave, {}) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gambling-remaster__hero-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "🎲 Sảnh Cá Cược" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Quay, cược, và săn thưởng. Mỗi ngày 3 lượt Coin Flip miễn phí cho người chưa VIP." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gambling-remaster__snapshot", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: "rare", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gambling-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🎡 Vòng quay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: wheelProfile.bestFor }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("em", { children: [
          "Giá trị x",
          wheelProfile.efficiency.toFixed(2),
          " · Trắng tay ",
          Math.round(wheelProfile.bustChance * 100),
          "%"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: "epic", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gambling-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🎰 Máy slot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: slotProfile.bestFor }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("em", { children: [
          "Tỷ suất x",
          slotProfile.efficiency.toFixed(2),
          " · Jackpot ",
          (slotProfile.jackpotChance * 100).toFixed(2),
          "%"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: "legendary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gambling-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🪙 Tung đồng xu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "50/50 · Thắng ×2 cược" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("em", { children: [
          "Còn ",
          flipState.flipsLeft,
          "/3 lượt · Hôm nay ",
          flipState.totalWon >= 0 ? "+" : "",
          flipState.totalWon,
          " 🪙"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-gambling-remaster__coinflip", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🪙 Đồng xu may mắn" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gambling-remaster__flip-panel", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-gambling-remaster__flip-coin", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: flipping ? "is-flipping" : lastFlip ? `is-${lastFlip.outcome}` : "", children: flipping ? "🪙" : lastFlip ? lastFlip.outcome === "heads" ? "👤" : "🌸" : "🪙" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gambling-remaster__flip-bet", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "coin-flip-bet", children: "Mức cược:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "coin-flip-bet",
              type: "number",
              min: 10,
              max: 1e3,
              step: 10,
              value: bet,
              onChange: (e) => setBet(Math.max(10, Math.min(1e3, Number(e.target.value) || 10))),
              disabled: flipping
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gambling-remaster__flip-actions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              disabled: flipping || flipState.flipsLeft <= 0 || coins < bet,
              onClick: () => flipCoin("heads"),
              children: [
                "👤 Người · ",
                bet,
                " 🪙"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              disabled: flipping || flipState.flipsLeft <= 0 || coins < bet,
              onClick: () => flipCoin("tails"),
              children: [
                "🌸 Hoa · ",
                bet,
                " 🪙"
              ]
            }
          )
        ] }),
        lastFlip && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-gambling-remaster__flip-result is-${lastFlip.won ? "won" : "lost"}`, children: [
          "Ra ",
          lastFlip.outcome === "heads" ? "👤 Người" : "🌸 Hoa",
          " · Bạn chọn ",
          lastFlip.pick === "heads" ? "👤" : "🌸",
          " ·",
          lastFlip.won ? ` Thắng! +${lastFlip.payout} 🪙` : " Thua cược."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VIPPass, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-gambling-remaster__stack", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(WheelOfFortune, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SlotMachine, {})
    ] }),
    celebrate && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ConfettiBurst, { rarity: "legendary", duration: 1600 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SparklePing, { duration: 1e3, onDone: () => setCelebrate(false) })
    ] })
  ] });
}
export {
  GamblingPage as default
};
