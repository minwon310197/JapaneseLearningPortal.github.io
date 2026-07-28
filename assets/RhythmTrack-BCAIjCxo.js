import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { bW as getQualityConfig } from "./feature-3d-ClP3ARU5.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
const LANE_KEYS = { don: "f", ka: "j" };
const HIT_WINDOW_PERFECT = 80;
const HIT_WINDOW_GOOD = 160;
function RhythmTrack({
  pattern = [],
  tempo = 120,
  onHit,
  onMiss,
  onFinish,
  className = ""
}) {
  var _a;
  const startedAtRef = reactExports.useRef(null);
  const notesRef = reactExports.useRef(pattern.map((n) => ({ ...n, hit: false, missed: false })));
  const [tick, setTick] = reactExports.useState(0);
  const rafRef = reactExports.useRef(null);
  const qCfg = reactExports.useMemo(() => getQualityConfig(), []);
  const lowPowerMotion = qCfg.tier === "low" || ((_a = qCfg.deviceProbe) == null ? void 0 : _a.isMobile);
  reactExports.useEffect(() => {
    notesRef.current = pattern.map((n) => ({ ...n, hit: false, missed: false }));
  }, [pattern]);
  reactExports.useEffect(() => {
    startedAtRef.current = performance.now();
    let lastFrame = startedAtRef.current;
    let lastRender = 0;
    const frameMs = 1e3 / (lowPowerMotion ? 20 : 30);
    const loop = (now2 = performance.now()) => {
      if (typeof document !== "undefined" && document.hidden) {
        startedAtRef.current += now2 - lastFrame;
        lastFrame = now2;
        rafRef.current = requestAnimationFrame(loop);
        return;
      }
      lastFrame = now2;
      if (now2 - lastRender < frameMs) {
        rafRef.current = requestAnimationFrame(loop);
        return;
      }
      lastRender = now2;
      setTick((v) => (v + 1) % 1e4);
      const elapsed2 = now2 - startedAtRef.current;
      let remaining = 0;
      for (const note of notesRef.current) {
        if (!note.hit && !note.missed && elapsed2 > note.t + HIT_WINDOW_GOOD) {
          note.missed = true;
          try {
            onMiss == null ? void 0 : onMiss({ lane: note.lane });
          } catch (e) {
          }
        }
        if (!note.hit && !note.missed) remaining++;
      }
      if (remaining === 0) {
        try {
          onFinish == null ? void 0 : onFinish();
        } catch (e) {
        }
        return;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onMiss, onFinish, lowPowerMotion]);
  const handleHit = (lane) => {
    const now2 = performance.now();
    const elapsed2 = now2 - (startedAtRef.current || now2);
    let closest = null;
    let closestDist = Infinity;
    for (const note of notesRef.current) {
      if (note.hit || note.missed || note.lane !== lane) continue;
      const dist = Math.abs(note.t - elapsed2);
      if (dist < closestDist) {
        closest = note;
        closestDist = dist;
      }
    }
    if (closest && closestDist < HIT_WINDOW_GOOD) {
      closest.hit = true;
      const accuracy = closestDist < HIT_WINDOW_PERFECT ? "perfect" : "good";
      try {
        onHit == null ? void 0 : onHit({ lane, accuracy, miss: closestDist });
      } catch (e) {
      }
    } else {
      try {
        onMiss == null ? void 0 : onMiss({ lane });
      } catch (e) {
      }
    }
  };
  reactExports.useEffect(() => {
    const onKey = (e) => {
      const k = (e.key || "").toLowerCase();
      if (k === LANE_KEYS.don) handleHit("don");
      else if (k === LANE_KEYS.ka) handleHit("ka");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const now = performance.now();
  const elapsed = startedAtRef.current ? now - startedAtRef.current : 0;
  const travelMs = 1800;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-rhythm ${className}`, "data-tempo": tempo, "data-tick": tick, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-rhythm-lane n4-rhythm-lane-don", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-rhythm-hit-zone", children: "F" }),
      notesRef.current.filter((n) => n.lane === "don" && !n.hit && !n.missed).map((n, i) => {
        const delta = n.t - elapsed;
        if (delta < -HIT_WINDOW_GOOD || delta > travelMs) return null;
        const pct = 100 - delta / travelMs * 100;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-rhythm-note", style: { left: `${pct}%` } }, `d-${i}`);
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-rhythm-lane n4-rhythm-lane-ka", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-rhythm-hit-zone", children: "J" }),
      notesRef.current.filter((n) => n.lane === "ka" && !n.hit && !n.missed).map((n, i) => {
        const delta = n.t - elapsed;
        if (delta < -HIT_WINDOW_GOOD || delta > travelMs) return null;
        const pct = 100 - delta / travelMs * 100;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-rhythm-note is-ka", style: { left: `${pct}%` } }, `k-${i}`);
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-rhythm-hint", children: [
      "Nhấn ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "F" }),
      " cho nhịp trầm / ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "J" }),
      " cho nhịp cao"
    ] })
  ] });
}
export {
  RhythmTrack as default
};
