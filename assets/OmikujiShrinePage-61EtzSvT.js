import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, aW as SubgameCanvas, bm as OmikujiShrine } from "./feature-3d-jK3b4Iv-.js";
import { t as triggerCelebration } from "./CelebrationOverlay-C3dUD_zC.js";
import { u as useTodayKey, g as getTodayKey } from "./useTodayKey-BBNOYeod.js";
import { b as SparklePing, d as RarityAura, a as ConfettiBurst } from "./feature-3d-scenery-C3eSpuWG.js";
import { i as installAudioPrewarm, p as playSfx, g as getAudioBus } from "./sfx-catalog-BoRQvGpU.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-Dp6hMoyV.js";
import "./vendor-supabase-DTEAj5J1.js";
const FORTUNES = [
  { id: "daikichi", jp: "大吉", label: "Đại cát", coins: 500, xp: 500, weight: 5, rarity: "legendary", color: "#eab308", buffHint: "May mắn tuyệt đỉnh hôm nay." },
  { id: "chukichi", jp: "中吉", label: "Trung cát", coins: 260, xp: 260, weight: 10, rarity: "epic", color: "#f97316", buffHint: "Thuận lợi lớn trong quyết định." },
  { id: "shokichi", jp: "小吉", label: "Tiểu cát", coins: 160, xp: 160, weight: 16, rarity: "epic", color: "#22c55e", buffHint: "May mắn vừa phải, ổn định." },
  { id: "kichi", jp: "吉", label: "Cát", coins: 110, xp: 110, weight: 20, rarity: "rare", color: "#06b6d4", buffHint: "Suôn sẻ, tiến bước đều." },
  { id: "hankichi", jp: "半吉", label: "Bán cát", coins: 80, xp: 80, weight: 18, rarity: "rare", color: "#7dd3fc", buffHint: "Nửa may nửa thử thách." },
  { id: "suekichi", jp: "末吉", label: "Mạt cát", coins: 50, xp: 40, weight: 16, rarity: "common", color: "#a78bfa", buffHint: "May mắn sẽ đến chậm." },
  { id: "kyo", jp: "凶", label: "Hung", coins: 25, xp: 0, weight: 12, rarity: "common", color: "#a855f7", buffHint: "Cẩn thận hơn hôm nay." },
  { id: "daikyo", jp: "大凶", label: "Đại hung", coins: 10, xp: 0, weight: 3, rarity: "common", color: "#64748b", buffHint: "Thử thách lớn — kiên nhẫn." }
];
function weightedPick(items) {
  const total = items.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;
  for (const item of items) {
    roll -= item.weight;
    if (roll <= 0) return item;
  }
  return items[items.length - 1];
}
function OmikujiShrinePage() {
  const lastOmikujiDate = useLearningStore((s) => s.lastOmikujiDate);
  const setLastOmikujiDate = useLearningStore((s) => s.setLastOmikujiDate);
  const addCoins = useLearningStore((s) => s.addCoins);
  const addXp = useLearningStore((s) => s.addXp);
  const today = useTodayKey();
  const canDraw = lastOmikujiDate !== today;
  const [phase, setPhase] = reactExports.useState("idle");
  const [fortune, setFortune] = reactExports.useState(null);
  const [shakeCount, setShakeCount] = reactExports.useState(0);
  const drawingRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    installAudioPrewarm();
  }, []);
  const handleShake = reactExports.useCallback(() => {
    if (!canDraw || drawingRef.current) return;
    if (phase === "idle") setPhase("shaking");
    if (phase === "shaking") {
      setShakeCount((c) => c + 1);
      try {
        playSfx(getAudioBus(), "reel-tick");
      } catch (e) {
      }
    }
  }, [canDraw, phase]);
  const drawFortune = reactExports.useCallback(() => {
    if (!canDraw || drawingRef.current) return;
    drawingRef.current = true;
    setPhase("revealing");
    try {
      playSfx(getAudioBus(), "bell-shrine");
    } catch (e) {
    }
    setTimeout(() => {
      var _a, _b;
      const liveToday = getTodayKey();
      if (useLearningStore.getState().lastOmikujiDate === liveToday) {
        drawingRef.current = false;
        setPhase("idle");
        return;
      }
      const selected = weightedPick(FORTUNES);
      setFortune(selected);
      setLastOmikujiDate(liveToday);
      addCoins(selected.coins, "omikuji");
      if (selected.xp > 0) addXp(selected.xp);
      triggerCelebration(selected.rarity === "legendary" ? "confetti" : "coin", 1800);
      try {
        (_b = (_a = getAudioBus()).playRarityChime) == null ? void 0 : _b.call(_a, selected.rarity);
      } catch (e) {
      }
      drawingRef.current = false;
      setPhase("done");
    }, 1500);
  }, [canDraw, addCoins, addXp, setLastOmikujiDate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-omikuji-remaster", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-omikuji-remaster__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "⛩️ Đền Omikuji" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Rút quẻ may mắn mỗi ngày. 8 cấp từ 大吉 đến 大凶." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-omikuji-remaster__hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-omikuji-remaster__hero-fallback", children: "⛩️ Đang dựng đền…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SubgameCanvas, { cameraPos: [0, 2.2, 5], fov: 50, backgroundColor: "#1a0906", envPreset: "sunset", orbit: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(OmikujiShrine, {}) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-omikuji-remaster__panel", children: [
      !canDraw && phase !== "done" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-omikuji-remaster__cooldown", children: "⏳ Hôm nay đã rút. Quay lại vào ngày mai." }),
      canDraw && phase === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-omikuji-remaster__lobby", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-omikuji-remaster__instruction", children: 'Nhấn "Lắc hộp" vài lần rồi "Rút quẻ" để nhận kết quả.' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-omikuji-remaster__shake-btn", onClick: handleShake, children: "🪔 Chạm vào hộp" })
      ] }),
      phase === "shaking" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-omikuji-remaster__shake", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-omikuji-remaster__shake-count", children: [
          "Đã lắc: ",
          shakeCount,
          " lần"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-omikuji-remaster__shake-hint", children: "Lắc thêm → năng lượng mạnh hơn (tối thiểu 3 lần)." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-omikuji-remaster__shake-actions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handleShake, children: "🪔 Lắc thêm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "n4-omikuji-remaster__draw-btn",
              disabled: shakeCount < 3,
              onClick: drawFortune,
              children: shakeCount < 3 ? `Cần ${3 - shakeCount} lần lắc nữa` : "🎋 Rút quẻ"
            }
          )
        ] })
      ] }),
      phase === "revealing" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-omikuji-remaster__revealing", children: [
        "🎋 Đang lật quẻ...",
        /* @__PURE__ */ jsxRuntimeExports.jsx(SparklePing, { duration: 1200 })
      ] }),
      phase === "done" && fortune && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-omikuji-remaster__result", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: fortune.rarity, animated: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-omikuji-remaster__result-card", style: { borderColor: fortune.color }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-omikuji-remaster__result-jp", style: { color: fortune.color }, children: fortune.jp }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-omikuji-remaster__result-label", children: fortune.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-omikuji-remaster__result-hint", children: fortune.buffHint }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-omikuji-remaster__result-rewards", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "🪙 +",
              fortune.coins
            ] }),
            fortune.xp > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "✨ +",
              fortune.xp,
              " XP"
            ] })
          ] })
        ] }) }),
        fortune.rarity === "legendary" && /* @__PURE__ */ jsxRuntimeExports.jsx(ConfettiBurst, { rarity: "legendary", duration: 1800, density: "high" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-omikuji-remaster__table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Bảng quẻ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-omikuji-remaster__table-grid", children: FORTUNES.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-omikuji-remaster__table-row", style: { borderLeftColor: f.color }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: f.color }, children: f.jp }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "🪙 ",
          f.coins
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.xp > 0 ? `+${f.xp} XP` : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-omikuji-remaster__table-weight", children: [
          "~",
          Math.round(f.weight),
          "%"
        ] })
      ] }, f.id)) })
    ] })
  ] });
}
export {
  OmikujiShrinePage as default
};
