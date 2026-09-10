import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { h as useLearningStore } from "./index-BEJSIlFS.js";
import { f as Music, c as Clock, S as Star } from "./vendor-icons-D83cEu6Z.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
function generateSequence(length = 12) {
  return Array.from({ length }, () => Math.random() > 0.5 ? "don" : "ka");
}
function TaikoMasterPage() {
  const addXp = useLearningStore((s) => s.addXp);
  const addCoins = useLearningStore((s) => s.addCoins);
  const hasNoBreakCombo = useLearningStore((s) => (s.unlockedSkills || []).includes("skill_taiko"));
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  const [sequence, setSequence] = reactExports.useState(() => generateSequence());
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [score, setScore] = reactExports.useState(0);
  const [combo, setCombo] = reactExports.useState(0);
  const [maxCombo, setMaxCombo] = reactExports.useState(0);
  const [timeLeft, setTimeLeft] = reactExports.useState(30);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [result, setResult] = reactExports.useState(null);
  const feedbackTimerRef = reactExports.useRef(null);
  const rewardedRef = reactExports.useRef(false);
  const startGame = reactExports.useCallback(() => {
    if (feedbackTimerRef.current) {
      window.clearTimeout(feedbackTimerRef.current);
      feedbackTimerRef.current = null;
    }
    rewardedRef.current = false;
    setSequence(generateSequence());
    setCurrentIndex(0);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setTimeLeft(30);
    setFeedback(null);
    setResult(null);
    setIsPlaying(true);
  }, []);
  const finishGame = reactExports.useCallback(() => {
    if (rewardedRef.current) return;
    rewardedRef.current = true;
    const earnedXp = score > 0 ? Math.max(100, Math.floor(score * 10)) : 50;
    const earnedCoins = score > 0 ? Math.max(1e3, Math.floor(score * 20)) : 500;
    if (earnedXp > 0) addXp(earnedXp);
    if (earnedCoins > 0) addCoins(earnedCoins, "taiko-session");
    setResult({ earnedXp, earnedCoins });
    setIsPlaying(false);
  }, [addCoins, addXp, score]);
  reactExports.useEffect(() => {
    if (!isPlaying) return void 0;
    const timerId = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timerId);
          return 0;
        }
        return prev - 1;
      });
    }, 1e3);
    return () => window.clearInterval(timerId);
  }, [isPlaying]);
  reactExports.useEffect(() => {
    if (isPlaying && timeLeft === 0) {
      finishGame();
    }
  }, [finishGame, isPlaying, timeLeft]);
  const handleInput = reactExports.useCallback((type) => {
    if (!isPlaying || timeLeft <= 0) return;
    const expected = sequence[currentIndex];
    if (expected === type) {
      const gain = 10 + combo * 2;
      setScore((s) => s + gain);
      setCombo((c) => {
        const next = c + 1;
        setMaxCombo((m) => Math.max(m, next));
        return next;
      });
      setFeedback("perfect");
      if (currentIndex + 1 >= sequence.length) {
        setSequence(generateSequence());
        setCurrentIndex(0);
      } else {
        setCurrentIndex((i) => i + 1);
      }
    } else {
      if (!hasNoBreakCombo) setCombo(0);
      setFeedback("miss");
    }
    if (feedbackTimerRef.current) window.clearTimeout(feedbackTimerRef.current);
    feedbackTimerRef.current = window.setTimeout(() => setFeedback(null), 220);
  }, [combo, currentIndex, hasNoBreakCombo, isPlaying, sequence, timeLeft]);
  reactExports.useEffect(() => {
    const onKeyDown = (event) => {
      if (!isPlaying) return;
      const key = event.key.toLowerCase();
      if (key === "f") handleInput("don");
      if (key === "j") handleInput("ka");
    };
    window.addEventListener("keydown", onKeyDown, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (feedbackTimerRef.current) {
        window.clearTimeout(feedbackTimerRef.current);
        feedbackTimerRef.current = null;
      }
    };
  }, [handleInput, isPlaying]);
  const shownNotes = reactExports.useMemo(() => sequence.slice(currentIndex, currentIndex + 8), [currentIndex, sequence]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { padding: "1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card", style: { padding: "1rem", marginBottom: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: { margin: 0, display: "inline-flex", alignItems: "center", gap: 8, fontSize: "1.4rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { size: 22 }),
        " Trống taiko"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "inline-flex", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-chip", children: [
          "Điểm: ",
          score
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-chip", children: [
          "Combo: ",
          combo,
          "x"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-chip", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14 }),
          " ",
          timeLeft,
          " giây"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card", style: { padding: "1rem", textAlign: "center" }, children: !isPlaying && !result ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "4.2rem", marginBottom: 8 }, children: "🥁" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { marginTop: 0, color: "var(--n4-text-dim)" }, children: "Nhấn F cho DON đỏ, J cho KA xanh. Nhớ giữ combo càng cao càng tốt." }),
      hasNoBreakCombo && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginBottom: 10, color: "var(--n4-success)", fontSize: ".85rem" }, children: "Kỹ năng Rhythm Master đang kích hoạt: hụt vẫn không mất combo." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: startGame, style: { minHeight: 46, minWidth: 180 }, children: "Bắt đầu đánh trống" })
    ] }) : result ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2rem", fontWeight: 700, marginBottom: 8 }, children: "Hết giờ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 8, color: "var(--n4-text-dim)" }, children: [
        "Chuỗi tối đa: ",
        maxCombo,
        "x"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "var(--n4-accent)", marginBottom: 10 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, style: { marginRight: 4 } }),
        " +",
        result.earnedXp,
        " Điểm, +",
        result.earnedCoins,
        " Xu"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: startGame, style: { minHeight: 44, minWidth: 170 }, children: "Chơi lại" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        minHeight: 102,
        border: "2px solid var(--n4-border)",
        borderRadius: 999,
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "0 1rem",
        overflow: "hidden",
        marginBottom: 10,
        background: "color-mix(in srgb, var(--n4-surface) 85%, black 15%)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 80, height: 80, borderRadius: 999, border: "2px solid var(--n4-accent)", display: "grid", placeItems: "center", flexShrink: 0 }, children: feedback === "perfect" ? "✨" : feedback === "miss" ? "❌" : "🥁" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", alignItems: "center", gap: 8, flexWrap: "nowrap" }, children: shownNotes.map((note, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              width: 52,
              height: 52,
              borderRadius: 999,
              display: "grid",
              placeItems: "center",
              fontWeight: 700,
              background: note === "don" ? "#ef4444" : "#3b82f6",
              color: "#fff",
              flexShrink: 0
            },
            children: note === "don" ? "D" : "K"
          },
          `${note}-${idx}`
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "center", gap: 16, marginTop: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: () => handleInput("don"), style: { minHeight: 74, minWidth: 132, fontSize: "1.05rem" }, children: "DON (F)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon", onClick: () => handleInput("ka"), style: { minHeight: 74, minWidth: 132, fontSize: "1.05rem" }, children: "KA (J)" })
      ] })
    ] }) })
  ] });
}
export {
  TaikoMasterPage as default
};
