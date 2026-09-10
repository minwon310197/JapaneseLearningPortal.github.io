import { j as jsxRuntimeExports, r as reactExports, R as React, u as useShallow } from "./vendor-react-BUL8WuXG.js";
import { cd as fetchKanjiSVG, L as speakJP, h as useLearningStore, a as useDataStore, d as safeSetItem, S as STORAGE_KEYS, u as useAppStore, X as logActivity, F as content, ce as V5Button, _ as getSrsLevel, bw as makeVocabKey, a0 as getVocabLabel, bA as makeGrammarKey, $ as getGrammarLabel, by as makeKanjiKey, cf as V5IconButton, cg as V5LinkButton, N as useEnsureLegacyDataLoaded } from "./index-BEJSIlFS.js";
import { a as useNavigate, e as NavLink, L as Link, b as useParams, c as useSearchParams } from "./vendor-router-Dx6RIovR.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
const DOMAINS = Object.freeze({
  vocab: ["語", "Từ vựng"],
  kanji: ["漢", "Kanji"],
  grammar: ["文", "Ngữ pháp"],
  listening: ["聴", "Nghe"],
  reading: ["読", "Đọc"],
  conjugation: ["活", "Chia động từ"],
  particles: ["助", "Trợ từ"],
  minna: ["旅", "Minna no Nihongo"],
  exam: ["試", "Luyện thi"]
});
function DomainMark({ domain, size = "md", label }) {
  const [glyph, defaultLabel] = DOMAINS[domain] || ["学", "Học tập"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `v5-domain-mark v5-domain-mark--${size}`, style: { "--v5-domain-accent": `var(--ui-domain-${domain}, var(--v5-domain-${domain}, var(--v5-indigo)))` }, role: "img", "aria-label": label || defaultLabel, children: glyph });
}
function drawSVGPath(ctx, d) {
  if (!d || typeof d !== "string") return;
  if (typeof Path2D !== "undefined") {
    try {
      ctx.stroke(new Path2D(d));
      return;
    } catch (e) {
    }
  }
  try {
    ctx.beginPath();
    const re = /([MLHVCSQTAZ])\s*([^MLHVCSQTAZ]*)/gi;
    let m, cx = 0, cy = 0, cpx, cpy;
    while ((m = re.exec(d)) !== null) {
      const cmd = m[1];
      const nums = (m[2].match(/-?[\d.]+/g) || []).map(Number);
      const upper = cmd === cmd.toUpperCase();
      switch (cmd.toUpperCase()) {
        case "M":
          cx = upper ? nums[0] : cx + nums[0];
          cy = upper ? nums[1] : cy + nums[1];
          ctx.moveTo(cx, cy);
          for (let i = 2; i + 1 < nums.length; i += 2) {
            cx = upper ? nums[i] : cx + nums[i];
            cy = upper ? nums[i + 1] : cy + nums[i + 1];
            ctx.lineTo(cx, cy);
          }
          break;
        case "L":
          for (let i = 0; i + 1 < nums.length; i += 2) {
            cx = upper ? nums[i] : cx + nums[i];
            cy = upper ? nums[i + 1] : cy + nums[i + 1];
            ctx.lineTo(cx, cy);
          }
          break;
        case "H":
          for (let i = 0; i < nums.length; i++) {
            cx = upper ? nums[i] : cx + nums[i];
            ctx.lineTo(cx, cy);
          }
          break;
        case "V":
          for (let i = 0; i < nums.length; i++) {
            cy = upper ? nums[i] : cy + nums[i];
            ctx.lineTo(cx, cy);
          }
          break;
        case "C":
          for (let i = 0; i + 5 < nums.length; i += 6) {
            const x1 = upper ? nums[i] : cx + nums[i], y1 = upper ? nums[i + 1] : cy + nums[i + 1];
            const x2 = upper ? nums[i + 2] : cx + nums[i + 2], y2 = upper ? nums[i + 3] : cy + nums[i + 3];
            const ex = upper ? nums[i + 4] : cx + nums[i + 4], ey = upper ? nums[i + 5] : cy + nums[i + 5];
            ctx.bezierCurveTo(x1, y1, x2, y2, ex, ey);
            cpx = x2;
            cpy = y2;
            cx = ex;
            cy = ey;
          }
          break;
        case "S":
          for (let i = 0; i + 3 < nums.length; i += 4) {
            const rx = cpx != null ? 2 * cx - cpx : cx, ry = cpy != null ? 2 * cy - cpy : cy;
            const x2 = upper ? nums[i] : cx + nums[i], y2 = upper ? nums[i + 1] : cy + nums[i + 1];
            const ex = upper ? nums[i + 2] : cx + nums[i + 2], ey = upper ? nums[i + 3] : cy + nums[i + 3];
            ctx.bezierCurveTo(rx, ry, x2, y2, ex, ey);
            cpx = x2;
            cpy = y2;
            cx = ex;
            cy = ey;
          }
          break;
        case "Q":
          for (let i = 0; i + 3 < nums.length; i += 4) {
            const qx = upper ? nums[i] : cx + nums[i], qy = upper ? nums[i + 1] : cy + nums[i + 1];
            const ex = upper ? nums[i + 2] : cx + nums[i + 2], ey = upper ? nums[i + 3] : cy + nums[i + 3];
            ctx.quadraticCurveTo(qx, qy, ex, ey);
            cpx = qx;
            cpy = qy;
            cx = ex;
            cy = ey;
          }
          break;
        case "Z":
          ctx.closePath();
          break;
      }
    }
    ctx.stroke();
  } catch (e) {
  }
}
function KanjiWritingOverlay({ kanji, onClose, entry, renderHighlightedText: renderHighlightedText2 }) {
  const canvasRef = reactExports.useRef(null);
  const bgCanvasRef = reactExports.useRef(null);
  const fetchControllerRef = reactExports.useRef(null);
  const animationTimerRef = reactExports.useRef(null);
  const [isDrawing, setIsDrawing] = reactExports.useState(false);
  const [showGuide, setShowGuide] = reactExports.useState(true);
  const [strokeCount, setStrokeCount] = reactExports.useState(0);
  const [strokes, setStrokes] = reactExports.useState([]);
  const [strokeStatus, setStrokeStatus] = reactExports.useState("");
  const [animating, setAnimating] = reactExports.useState(false);
  const [activeStep, setActiveStep] = reactExports.useState(-1);
  const [canvasSize, setCanvasSize] = reactExports.useState(() => Math.min(300, Math.max(220, (typeof window === "undefined" ? 348 : window.innerWidth) - 48)));
  const showGuideRef = reactExports.useRef(true);
  const animatingRef = reactExports.useRef(false);
  const strokesRef = reactExports.useRef([]);
  showGuideRef.current = showGuide;
  strokesRef.current = strokes;
  const SIZE = canvasSize;
  const KANJIVG_VIEWBOX = 109;
  reactExports.useEffect(() => {
    const initCanvas = (canvas) => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = SIZE * dpr;
      canvas.height = SIZE * dpr;
      canvas.style.width = SIZE + "px";
      canvas.style.height = SIZE + "px";
      const ctx = canvas.getContext("2d");
      ctx.scale(dpr, dpr);
    };
    initCanvas(canvasRef.current);
    initCanvas(bgCanvasRef.current);
    drawGrid(true);
    loadStrokes(kanji);
    return () => {
      animatingRef.current = false;
      const activeController = fetchControllerRef.current;
      fetchControllerRef.current = null;
      activeController == null ? void 0 : activeController.abort();
      clearTimeout(animationTimerRef.current);
    };
  }, [kanji, SIZE]);
  reactExports.useEffect(() => {
    const updateSize = () => setCanvasSize(Math.min(300, Math.max(220, window.innerWidth - 48)));
    window.addEventListener("resize", updateSize);
    window.addEventListener("orientationchange", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("orientationchange", updateSize);
    };
  }, []);
  function drawGrid(guide) {
    var _a;
    const ctx = (_a = canvasRef.current) == null ? void 0 : _a.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.strokeStyle = "rgba(128,128,128,0.15)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(SIZE / 2, 0);
    ctx.lineTo(SIZE / 2, SIZE);
    ctx.moveTo(0, SIZE / 2);
    ctx.lineTo(SIZE, SIZE / 2);
    ctx.setLineDash([6, 4]);
    ctx.moveTo(0, 0);
    ctx.lineTo(SIZE, SIZE);
    ctx.moveTo(SIZE, 0);
    ctx.lineTo(0, SIZE);
    ctx.stroke();
    ctx.setLineDash([]);
    if (guide) {
      ctx.font = `${Math.round(SIZE * 0.73)}px "Noto Sans JP", serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "rgba(128,128,128,0.1)";
      ctx.fillText(kanji, SIZE / 2, SIZE / 2 + 10);
    }
  }
  function loadStrokes(char) {
    var _a;
    setStrokeStatus("Đang tải nét chữ...");
    setStrokes([]);
    (_a = fetchControllerRef.current) == null ? void 0 : _a.abort();
    const controller = new AbortController();
    fetchControllerRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 1e4);
    fetchKanjiSVG(char, controller.signal).then((svg) => {
      clearTimeout(timeout);
      const parser = new DOMParser();
      const doc = parser.parseFromString(svg, "image/svg+xml");
      const paths = Array.from(doc.querySelectorAll("path")).map((p) => p.getAttribute("d")).filter(Boolean);
      if (controller.signal.aborted) return;
      setStrokes(paths);
      strokesRef.current = paths;
      setStrokeStatus(paths.length + " nét — Nhấn ▶ để xem thứ tự!");
    }).catch((err) => {
      clearTimeout(timeout);
      if (err.name === "AbortError" && fetchControllerRef.current === controller) setStrokeStatus("Tải quá lâu — kiểm tra kết nối");
      else if (err.message === "not-found") setStrokeStatus("Không có dữ liệu nét cho " + char);
      else setStrokeStatus("Không thể tải dữ liệu nét lúc này.");
    });
  }
  function drawGuideStrokes(upTo) {
    var _a;
    const bgCtx = (_a = bgCanvasRef.current) == null ? void 0 : _a.getContext("2d");
    if (!bgCtx) return;
    bgCtx.clearRect(0, 0, SIZE, SIZE);
    const paths = strokesRef.current;
    if (!paths.length) return;
    const max = upTo < 0 ? paths.length : upTo;
    const scale = SIZE / KANJIVG_VIEWBOX;
    bgCtx.save();
    bgCtx.scale(scale, scale);
    for (let i = 0; i < max; i++) {
      bgCtx.lineCap = "round";
      bgCtx.lineJoin = "round";
      if (i === max - 1 && upTo > 0) {
        bgCtx.strokeStyle = "rgba(225,29,72,0.7)";
        bgCtx.lineWidth = 4 / scale;
      } else {
        bgCtx.strokeStyle = "rgba(99,102,241,0.25)";
        bgCtx.lineWidth = 3 / scale;
      }
      drawSVGPath(bgCtx, paths[i]);
      if (upTo > 0 && i === max - 1) {
        const pm = paths[i].match(/^M\s*([\d.]+)[,\s]+([\d.]+)/i);
        if (pm) {
          bgCtx.fillStyle = "rgba(225,29,72,0.9)";
          bgCtx.font = "bold 10px sans-serif";
          bgCtx.fillText(String(i + 1), parseFloat(pm[1]) + 2, parseFloat(pm[2]) - 2);
        }
      }
    }
    bgCtx.restore();
  }
  function animateStrokes() {
    var _a;
    const paths = strokesRef.current;
    if (!paths.length || animatingRef.current) return;
    animatingRef.current = true;
    setAnimating(true);
    const bgCtx = (_a = bgCanvasRef.current) == null ? void 0 : _a.getContext("2d");
    if (bgCtx) bgCtx.clearRect(0, 0, SIZE, SIZE);
    let step = 0;
    function next() {
      if (!animatingRef.current || step > paths.length) {
        animatingRef.current = false;
        setAnimating(false);
        setActiveStep(-1);
        return;
      }
      drawGuideStrokes(step);
      setActiveStep(step - 1);
      step++;
      animationTimerRef.current = setTimeout(next, 700);
    }
    next();
  }
  function stopAnimation() {
    var _a;
    animatingRef.current = false;
    clearTimeout(animationTimerRef.current);
    setAnimating(false);
    setActiveStep(-1);
    const bgCtx = (_a = bgCanvasRef.current) == null ? void 0 : _a.getContext("2d");
    if (bgCtx) bgCtx.clearRect(0, 0, SIZE, SIZE);
  }
  function showStep(n) {
    drawGuideStrokes(n);
    setActiveStep(n - 1);
  }
  function showAllStrokes() {
    drawGuideStrokes(-1);
    setActiveStep(-1);
  }
  function clearCanvas() {
    drawGrid(showGuideRef.current);
    setStrokeCount(0);
  }
  function getPos(e) {
    if (!canvasRef.current) return { x: 0, y: 0 };
    const rect = canvasRef.current.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }
  function startDraw(e) {
    var _a, _b;
    if (animatingRef.current) return;
    e.preventDefault();
    (_b = (_a = e.currentTarget).setPointerCapture) == null ? void 0 : _b.call(_a, e.pointerId);
    setIsDrawing(true);
    const ctx = canvasRef.current.getContext("2d");
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.strokeStyle = "#4db89a";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }
  function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const ctx = canvasRef.current.getContext("2d");
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }
  function endDraw(e) {
    var _a, _b;
    if (!isDrawing) return;
    e.preventDefault();
    setIsDrawing(false);
    (_b = (_a = e.currentTarget).releasePointerCapture) == null ? void 0 : _b.call(_a, e.pointerId);
    setStrokeCount((c) => c + 1);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-ct-kw-back", onClick: onClose, children: "← Quay lại danh sách Kanji" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card n4-ct-kw-info", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ct-kw-info-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-kw-kanji-char", children: kanji }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ct-kw-info-text", children: [
        (entry == null ? void 0 : entry.title) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-kw-title", children: entry.title }),
        (entry == null ? void 0 : entry.meaning) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-kw-meaning", children: entry.meaning }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ct-kw-readings", children: [
          (entry == null ? void 0 : entry.on) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-kw-on", children: "音" }),
            " ",
            entry.on
          ] }),
          (entry == null ? void 0 : entry.kun) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-kw-kun", children: "訓" }),
            " ",
            entry.kun
          ] }),
          (entry == null ? void 0 : entry.strokes) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "✏️ ",
            entry.strokes,
            " nét"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-ct-kw-tts", onClick: () => speakJP(kanji), title: "Nghe phát âm", children: "🔊" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ct-kw-canvas-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-ct-kw-canvas-heading", children: "✏️ Luyện viết chữ Kanji" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        position: "relative",
        width: SIZE,
        height: SIZE,
        margin: "0 auto",
        background: "var(--n4-bg-secondary)",
        border: "2px solid var(--n4-border)",
        borderRadius: 8,
        overflow: "hidden"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: bgCanvasRef, "aria-hidden": "true", style: {
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          borderRadius: 8,
          pointerEvents: "none"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "canvas",
          {
            ref: canvasRef,
            style: {
              position: "relative",
              zIndex: 2,
              borderRadius: 8,
              cursor: "crosshair",
              touchAction: "none",
              background: "transparent"
            },
            role: "img",
            "aria-label": `Vùng luyện viết chữ ${kanji}`,
            "aria-describedby": "n4-kanji-canvas-help n4-kanji-stroke-status",
            onPointerDown: startDraw,
            onPointerMove: draw,
            onPointerUp: endDraw,
            onPointerCancel: endDraw
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: "n4-kanji-canvas-help", className: "n4-review-detail", children: "Dùng bút, chuột hoặc ngón tay để viết. Nếu không dùng được canvas, hãy dùng các nút “Xem nét” và từng số nét bên dưới." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "n4-kanji-stroke-status", className: "n4-ct-kw-stroke-info", role: "status", "aria-live": "polite", children: [
        strokeStatus,
        " · Nét đã viết: ",
        strokeCount
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ct-kw-anim-controls", children: [
        !animating ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-neon n4-btn-sm", onClick: animateStrokes, disabled: !strokes.length, children: "▶ Xem nét" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: stopAnimation, style: { color: "var(--n4-danger)" }, children: "⏹ Dừng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: showAllStrokes, disabled: !strokes.length || animating, children: "👁️ Tất cả nét" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: clearCanvas, children: "🗑️ Xoá" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => {
          const next = !showGuide;
          setShowGuide(next);
          showGuideRef.current = next;
          drawGrid(next);
        }, children: showGuide ? "🔡 Ẩn mẫu" : "🔡 Hiện mẫu" })
      ] }),
      strokes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-kw-step-buttons", children: strokes.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-btn n4-btn-ghost n4-ct-kw-step-btn${activeStep === i ? " active" : ""}`,
          onClick: () => showStep(i + 1),
          title: `Nét ${i + 1}`,
          disabled: animating,
          children: i + 1
        },
        i
      )) })
    ] }),
    Array.isArray(entry == null ? void 0 : entry.compoundsList) && entry.compoundsList.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-ct-kw-compounds", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-kw-compounds-label", children: "📝 Từ ghép" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-kw-compounds-list", children: entry.compoundsList.map((compound, ci) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-badge n4-ct-kw-compound-badge", onClick: () => speakJP(compound.compound), children: [
        compound.compound,
        compound.reading ? ` (${compound.reading})` : "",
        compound.meaning && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-ct-kw-compound-vi", children: [
          "(",
          compound.meaning,
          ")"
        ] })
      ] }, `${compound.compound}-${ci}`)) })
    ] }),
    Array.isArray(entry == null ? void 0 : entry.examples) && entry.examples.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-ct-kw-example", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-kw-example-label", children: "💬 Ví dụ" }),
      (() => {
        const example = entry.examples[0];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-ct-kw-example-jp", onClick: () => speakJP(example.ja), children: renderHighlightedText2(example.ja) }),
          example.romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-kw-example-romaji", children: example.romaji }),
          example.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-kw-example-vi", children: example.vi })
        ] });
      })()
    ] })
  ] });
}
function LessonExam({ lesson, vocab, grammar }) {
  const [active, setActive] = reactExports.useState(false);
  const [questions, setQuestions] = reactExports.useState([]);
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [answered, setAnswered] = reactExports.useState(false);
  const [score, setScore] = reactExports.useState(0);
  const [finished, setFinished] = reactExports.useState(false);
  const [earnedXp, setEarnedXp] = reactExports.useState(0);
  const recordLessonQuiz = useLearningStore((s) => s.recordLessonQuiz);
  const addXp = useLearningStore((s) => s.addXp);
  const startExam = reactExports.useCallback(() => {
    const qs = [];
    const vPool = [...vocab].sort(() => Math.random() - 0.5).slice(0, 12);
    for (const v of vPool) {
      const correct = v.meaning || "";
      if (!correct) continue;
      const wrongs = vocab.filter((x) => x.meaning && x.meaning !== correct).sort(() => Math.random() - 0.5).slice(0, 3).map((x) => x.meaning);
      if (wrongs.length < 2) continue;
      const opts = [correct, ...wrongs].sort(() => Math.random() - 0.5);
      qs.push({ type: "vocab", question: `「${v.word || v.reading}」nghĩa là gì?`, options: opts, answer: correct, jp: v.word || v.reading });
    }
    const gPool = [...grammar].filter((g) => {
      var _a;
      return ((_a = g.examples) == null ? void 0 : _a.length) > 0;
    }).sort(() => Math.random() - 0.5).slice(0, 8);
    for (const g of gPool) {
      const ex = g.examples[Math.floor(Math.random() * g.examples.length)];
      if (!(ex == null ? void 0 : ex.jp) || !g.title) continue;
      qs.push({ type: "grammar", question: `Hoàn thành câu: ${ex.vi || g.purpose || ""}`, options: null, answer: g.title, hint: ex.jp, jp: ex.jp });
    }
    const shuffled = qs.sort(() => Math.random() - 0.5).slice(0, 20);
    setQuestions(shuffled);
    setQIdx(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setEarnedXp(0);
    setActive(true);
  }, [vocab, grammar]);
  const handleAnswer = reactExports.useCallback((opt) => {
    var _a;
    if (answered) return;
    setSelected(opt);
    setAnswered(true);
    if (opt === ((_a = questions[qIdx]) == null ? void 0 : _a.answer)) setScore((s) => s + 1);
  }, [answered, questions, qIdx]);
  const nextQ = reactExports.useCallback(() => {
    if (qIdx + 1 >= questions.length) {
      setFinished(true);
      const finalPct = Math.round(score / questions.length * 100);
      const passed = finalPct >= 80;
      const key = String(lesson.l);
      const prevProgress = useLearningStore.getState().lessonProgress[key] || {};
      const prevBest = prevProgress.quizScore || 0;
      recordLessonQuiz(lesson.l, finalPct);
      let xpEarned = 0;
      if (passed && finalPct > prevBest) {
        const currentBestXp = Math.round(finalPct / 2);
        const prevBestXp = Math.round(prevBest / 2);
        xpEarned = Math.max(0, currentBestXp - prevBestXp);
        if (xpEarned > 0) {
          addXp(xpEarned);
        }
      }
      setEarnedXp(xpEarned);
    } else {
      setQIdx((i) => i + 1);
      setSelected(null);
      setAnswered(false);
    }
  }, [qIdx, questions, score, lesson.l, recordLessonQuiz, addXp]);
  if (!active) {
    const totalPossible = Math.min(20, vocab.length + grammar.filter((g) => {
      var _a;
      return (_a = g.examples) == null ? void 0 : _a.length;
    }).length);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { marginTop: "var(--n4-sp-4)", padding: "var(--n4-sp-4)", textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { style: { margin: "0 0 var(--n4-sp-2) 0" }, children: [
        "📝 Kiểm tra Bài ",
        lesson.l
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "var(--n4-fs-sm)", color: "var(--n4-text-secondary)", margin: "0 0 var(--n4-sp-3)" }, children: totalPossible > 0 ? `${totalPossible} câu hỏi · Từ vựng MCQ + Ngữ pháp · Đạt ≥80% để hoàn thành bài` : "Không đủ dữ liệu để tạo bài kiểm tra" }),
      totalPossible >= 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: startExam, children: "📝 Bắt đầu kiểm tra" })
    ] });
  }
  if (finished) {
    const finalPct = Math.round(score / questions.length * 100);
    const passed = finalPct >= 80;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { marginTop: "var(--n4-sp-4)", padding: "var(--n4-sp-6)", textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2.5rem", marginBottom: "var(--n4-sp-3)" }, children: passed ? "🎉" : "💪" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: "0 0 var(--n4-sp-2)" }, children: passed ? "Xuất sắc!" : "Cố gắng thêm nhé!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "var(--n4-fs-xl)", fontWeight: 700, color: passed ? "var(--n4-neon-green)" : "var(--n4-danger, #f44)" }, children: [
        finalPct,
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: "var(--n4-fs-sm)", color: "var(--n4-text-secondary)", margin: "var(--n4-sp-2) 0" }, children: [
        score,
        "/",
        questions.length,
        " câu đúng ",
        earnedXp > 0 && ` · +${earnedXp} XP`
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginTop: "var(--n4-sp-3)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => setActive(false), children: "✕ Đóng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: startExam, children: "🔄 Làm lại" })
      ] })
    ] });
  }
  const q = questions[qIdx];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { marginTop: "var(--n4-sp-4)", padding: "var(--n4-sp-4)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "var(--n4-sp-3)", fontSize: "var(--n4-fs-sm)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "📝 Câu ",
        qIdx + 1,
        "/",
        questions.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "var(--n4-neon-green)" }, children: [
        "✓ ",
        score
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setActive(false), children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-lesson-progress-bar", style: { marginBottom: "var(--n4-sp-3)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-lesson-progress-fill", style: { width: `${(qIdx + 1) / questions.length * 100}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "var(--n4-fs-base)", marginBottom: "var(--n4-sp-3)", lineHeight: 1.6 }, children: [
      q.type === "grammar" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge", style: { marginRight: 6, fontSize: "var(--n4-fs-xs)" }, children: "Ngữ pháp" }),
      q.type === "vocab" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge", style: { marginRight: 6, fontSize: "var(--n4-fs-xs)" }, children: "Từ vựng" }),
      q.question
    ] }),
    q.jp && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "n4-exam-speak-prompt",
        style: { fontFamily: "var(--n4-font-jp)", fontSize: "var(--n4-fs-lg)", marginBottom: "var(--n4-sp-3)" },
        onClick: () => speakJP(q.jp),
        children: [
          "🔊 ",
          q.jp
        ]
      }
    ),
    q.options ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: q.options.map((opt, i) => {
      let bg = "";
      if (answered) {
        if (opt === q.answer) bg = "var(--n4-neon-green)";
        else if (opt === selected) bg = "var(--n4-danger, #f44)";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-btn ${answered ? "n4-btn-ghost" : "n4-btn-ghost"}`,
          style: { textAlign: "left", border: bg ? `2px solid ${bg}` : void 0, color: bg || void 0 },
          onClick: () => handleAnswer(opt),
          disabled: answered,
          children: opt
        },
        i
      );
    }) }) : (
      /* Grammar: show hint and answer after click */
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        q.hint && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontFamily: "var(--n4-font-jp)", marginBottom: 8 }, children: q.hint }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: () => handleAnswer(q.answer), disabled: answered, children: "✓ Biết rồi" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => {
            setSelected("wrong");
            setAnswered(true);
          }, disabled: answered, children: "✕ Chưa biết" })
        ] }),
        answered && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 8, padding: 8, borderRadius: 8, background: "var(--n4-surface-2)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Đáp án:" }),
          " ",
          q.answer
        ] })
      ] })
    ),
    answered && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", style: { marginTop: "var(--n4-sp-3)", width: "100%" }, onClick: nextQ, children: qIdx + 1 >= questions.length ? "📊 Xem kết quả" : "Câu tiếp theo →" })
  ] });
}
function VirtualCell({ children, eager, estimatedHeight }) {
  const ref = reactExports.useRef(null);
  const measuredHeight = reactExports.useRef(estimatedHeight);
  const [visible, setVisible] = reactExports.useState(() => eager || typeof IntersectionObserver !== "function");
  reactExports.useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver !== "function") return void 0;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "800px 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (!node || !visible) return void 0;
    const measure = () => {
      const height = node.getBoundingClientRect().height;
      if (height > 0) measuredHeight.current = height;
    };
    measure();
    if (typeof ResizeObserver !== "function") return void 0;
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "n4-virtual-cell", style: !visible ? { minHeight: measuredHeight.current } : void 0, children: visible ? children : null });
}
function VirtualizedGrid({ items = [], renderItem, getKey, className = "", estimatedHeight = 240, eagerCount = 12 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, "data-virtualized-count": items.length, children: items.map((item, index) => {
    var _a;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(VirtualCell, { eager: index < eagerCount, estimatedHeight, children: renderItem(item, index) }, (_a = getKey == null ? void 0 : getKey(item, index)) != null ? _a : index);
  }) });
}
function renderHighlightedText(text2 = "") {
  return text2.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("b", { style: { color: "var(--n4-accent)" }, children: part.slice(2, -2) }, index);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, { children: part }, index);
  });
}
function BackButton({ onBack, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-ghost n4-ct-kw-back", onClick: onBack, children: [
    "← ",
    label || "Quay lại"
  ] });
}
function LessonSummary({ lesson, vocabCount, grammarCount }) {
  const bookmarks = useLearningStore((s) => s.bookmarks);
  const lessonNum = lesson == null ? void 0 : lesson.l;
  const bmCount = Object.keys(bookmarks).filter((k) => k.includes(`minna-${lessonNum}`)).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { marginTop: "var(--n4-sp-4)", padding: "var(--n4-sp-4)", borderLeft: "3px solid var(--n4-accent)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { style: { margin: "0 0 var(--n4-sp-2) 0", fontSize: "var(--n4-fs-base)" }, children: [
      "📊 Tổng kết Bài ",
      lessonNum
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "var(--n4-sp-4)", flexWrap: "wrap", fontSize: "var(--n4-fs-sm)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "📝 ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: vocabCount }),
        " từ vựng"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "📐 ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: grammarCount }),
        " mẫu ngữ pháp"
      ] }),
      bmCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "⭐ ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: bmCount }),
        " đã đánh dấu"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "var(--n4-sp-3)", fontSize: "var(--n4-fs-xs)", color: "var(--n4-text-secondary)" }, children: "💡 Hãy luyện tập với mục Bài Minna để củng cố kiến thức bài này!" })
  ] });
}
function NextLessonNav({ currentLesson, onBack }) {
  const navigate = useNavigate();
  const prevLesson = currentLesson > 1 ? currentLesson - 1 : null;
  const nextLesson = currentLesson < 50 ? currentLesson + 1 : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginTop: "var(--n4-sp-4)", gap: "var(--n4-sp-3)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: "n4-btn n4-btn-ghost",
        disabled: !prevLesson,
        onClick: () => prevLesson && navigate(`/content/minna/${prevLesson}`),
        children: [
          "← Bài ",
          prevLesson || ""
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: onBack, children: "📖 Danh sách bài" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: "n4-btn n4-btn-primary",
        disabled: !nextLesson,
        onClick: () => nextLesson && navigate(`/content/minna/${nextLesson}`),
        children: [
          "Bài ",
          nextLesson || "",
          " →"
        ]
      }
    )
  ] });
}
function KanjiDetail({ section, onBack, hideBack = false }) {
  const entries = section.entries || [];
  const [writingKanji, setWritingKanji] = reactExports.useState(null);
  if (writingKanji) {
    const entry = entries.find((e) => e.kanji === writingKanji) || null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(KanjiWritingOverlay, { kanji: writingKanji, onClose: () => setWritingKanji(null), entry, renderHighlightedText });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    !hideBack && /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, { onBack }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "n4-section-title", children: [
      "🈲 ",
      section.name || section.title,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-badge", children: [
        entries.length,
        " chữ"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      VirtualizedGrid,
      {
        className: "n4-trainers-grid",
        items: entries,
        getKey: (entry, j) => entry.key || entry.kanji || j,
        estimatedHeight: 360,
        renderItem: (entry, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-kanji-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kanji-card-header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-kanji-char", lang: "ja", onClick: () => setWritingKanji(entry.kanji), title: "🔍 Nhấn để xem chi tiết & tập viết", children: entry.kanji }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kanji-info", children: [
              entry.title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-kanji-hanviet", children: entry.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-kanji-meaning", children: entry.meaning }),
              entry.strokes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kanji-strokes", children: [
                "✏️ ",
                entry.strokes,
                " nét"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-icon n4-btn-ghost", onClick: () => setWritingKanji(entry.kanji), title: "✏️ Luyện viết", children: "✏️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-icon n4-btn-ghost n4-kanji-tts", onClick: () => speakJP(entry.kanji), title: "Nghe phát âm", children: "🔊" })
          ] }),
          (entry.on || entry.kun) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kanji-readings", children: [
            entry.on && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-kanji-reading", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-kanji-reading-label", children: "音" }),
              " ",
              entry.on
            ] }),
            entry.kun && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-kanji-reading", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-kanji-reading-label", children: "訓" }),
              " ",
              entry.kun
            ] })
          ] }),
          Array.isArray(entry.compoundsList) && entry.compoundsList.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kanji-compounds", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kanji-section-label", children: [
              "📝 Từ ghép (",
              entry.compoundsList.length,
              ")"
            ] }),
            entry.compoundsList.map((c, ci) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-kanji-compound-item", onClick: () => speakJP(c.compound), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-kanji-compound-jp", lang: "ja", children: [
                c.compound,
                " ",
                c.reading ? `(${c.reading})` : ""
              ] }),
              c.meaning && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-kanji-compound-vi", children: [
                "— ",
                c.meaning
              ] })
            ] }, `${c.compound}-${ci}`))
          ] }),
          Array.isArray(entry.examples) && entry.examples.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kanji-example", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kanji-section-label", children: [
              "💬 Ví dụ (",
              entry.examples.length,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: entry.examples.map((ex, ki) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-content-speak-row", style: { padding: "0.4rem 0.6rem", background: "rgba(255,255,255,0.04)", borderRadius: 6, cursor: "pointer" }, onClick: () => speakJP(ex.ja), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kanji-example-jp", lang: "ja", children: [
                "🔊 ",
                ex.ja
              ] }),
              ex.romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-kanji-example-romaji", children: ex.romaji }),
              ex.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-kanji-example-vi", children: ex.vi })
            ] }, `${ex.ja}-${ki}`)) })
          ] }),
          entry.description && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kanji-desc", children: [
            "💡 ",
            entry.description.split(". ").map((line, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-desc-line", children: i < arr.length - 1 ? line + "." : line }, i))
          ] })
        ] }, j)
      }
    )
  ] });
}
function VocabDetail({ section, onBack, hideBack = false }) {
  const entries = section.entries || [];
  const [expanded, setExpanded] = reactExports.useState(null);
  const totalEx = entries.reduce((s, e) => {
    var _a;
    return s + (((_a = e.examples) == null ? void 0 : _a.length) || 0);
  }, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    !hideBack && /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, { onBack }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "n4-section-title", children: [
      "📝 ",
      section.name || section.title,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-badge", children: [
        entries.length,
        " từ"
      ] }),
      totalEx > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-badge", style: { marginLeft: 6, background: "var(--n4-cat-vocab, #4ade80)", color: "#fff" }, children: [
        totalEx,
        " ví dụ"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card", style: { padding: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-table-wrap", style: { width: "100%", overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-ct-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("caption", { children: [
        "Từ vựng trong phần ",
        section.name || section.title
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-thead", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-th-tts", children: "🔊" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-th", children: "Từ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-th n4-ct-th-reading", children: "Đọc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-th n4-ct-th-romaji", children: "Romaji" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-th", children: "Nghĩa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-th", style: { width: 40 }, children: "ⓘ" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: entries.map((e, i) => {
        const exs = Array.isArray(e.examples) ? e.examples : [];
        const isOpen = expanded === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-vocab-row n4-ct-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-td-tts", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-vocab-tts", "aria-label": `Nghe ${e.word || e.kanji || e.reading || "từ vựng"}`, onClick: () => speakJP(e.word || e.kanji || e.reading || ""), children: "🔊" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-td-jp", lang: "ja", children: e.word || e.kanji || e.japanese || "" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-td-reading", children: e.reading || "" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-td-romaji", children: e.romaji || "" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-td-meaning", children: e.meaning || e.vietnamese || "" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-td-muted", style: { textAlign: "center", fontSize: ".8rem" }, children: exs.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "n4-btn n4-btn-ghost n4-btn-sm",
                "aria-expanded": isOpen,
                "aria-label": `${isOpen ? "Ẩn" : "Hiện"} ${exs.length} ví dụ`,
                onClick: () => setExpanded(isOpen ? null : i),
                children: [
                  isOpen ? "▲" : "▼",
                  " ",
                  exs.length
                ]
              }
            ) : "—" })
          ] }),
          isOpen && exs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 6, style: { padding: "0.6rem 1rem", background: "rgba(74,222,128,0.05)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
            exs.map((ex, k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "n4-content-speak-row",
                style: { padding: "0.5rem 0.7rem", background: "rgba(255,255,255,0.04)", borderRadius: 8, cursor: "pointer" },
                onClick: () => speakJP(ex.ja),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "1.05rem", color: "var(--n4-accent, #4bb3ff)" }, children: [
                    "🔊 ",
                    ex.ja
                  ] }),
                  ex.romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: ".85rem", color: "var(--n4-text-dim)", marginTop: 2 }, children: ex.romaji }),
                  ex.vi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: ".9rem", marginTop: 2 }, children: [
                    "↳ ",
                    ex.vi
                  ] })
                ]
              },
              `${ex.ja}-${k}`
            )),
            e.hanviet && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: ".85rem", color: "var(--n4-text-dim)", marginTop: 4 }, children: [
              "Hán Việt: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: e.hanviet }),
              e.partOfSpeech && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { marginLeft: 12 }, children: [
                "Từ loại: ",
                e.partOfSpeech
              ] })
            ] })
          ] }) }) })
        ] }, i);
      }) })
    ] }) }) })
  ] });
}
function GrammarDetail({ section, onBack, hideBack = false }) {
  const items = section.patterns || section.items || section.entries || [];
  const [expanded, setExpanded] = reactExports.useState(null);
  const totalEx = items.reduce((s, p) => {
    var _a;
    return s + (((_a = p.examples) == null ? void 0 : _a.length) || 0);
  }, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    !hideBack && /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, { onBack }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "n4-section-title", children: [
      "📐 ",
      section.name || section.title,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-badge", children: [
        items.length,
        " mẫu"
      ] }),
      totalEx > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-badge", style: { marginLeft: 6, background: "var(--n4-cat-grammar, #fb923c)", color: "#fff" }, children: [
        totalEx,
        " ví dụ"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VirtualizedGrid, { items, getKey: (item, j) => item.id || item.key || item.title || j, estimatedHeight: 220, renderItem: (item, j) => {
      const isOpen = expanded === j;
      const exs = Array.isArray(item.examples) ? item.examples : [];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-ct-grammar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-ct-grammar-header", "aria-expanded": isOpen, onClick: () => setExpanded(isOpen ? null : j), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-grammar-title", lang: "ja", children: item.title || item.pattern || item.word || "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-grammar-arrow", children: isOpen ? "▲" : "▼" })
        ] }),
        (item.structure || item.meaning) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-grammar-meaning", children: item.structure || item.meaning }),
        isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ct-grammar-body", children: [
          item.usage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "0.6rem 0.8rem", background: "rgba(251,146,60,0.06)", borderRadius: 8, marginBottom: 10, whiteSpace: "pre-wrap", lineHeight: 1.6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cách dùng:" }),
            " ",
            item.usage
          ] }),
          exs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginBottom: 10 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontWeight: 600, color: "var(--n4-text-dim)", fontSize: ".9rem" }, children: [
              "💬 Ví dụ (",
              exs.length,
              ")"
            ] }),
            exs.map((ex, k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "n4-content-speak-row",
                style: { padding: "0.5rem 0.7rem", background: "rgba(255,255,255,0.04)", borderRadius: 8, cursor: "pointer" },
                onClick: () => speakJP(ex.ja),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { lang: "ja", style: { fontSize: "1.05rem", color: "var(--n4-accent, #4bb3ff)" }, children: [
                    "🔊 ",
                    ex.ja
                  ] }),
                  ex.romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: ".85rem", color: "var(--n4-text-dim)", marginTop: 2 }, children: ex.romaji }),
                  ex.vi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: ".9rem", marginTop: 2 }, children: [
                    "↳ ",
                    ex.vi
                  ] })
                ]
              },
              `${ex.ja}-${k}`
            ))
          ] }),
          !item.usage && !exs.length && item.content && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { whiteSpace: "pre-wrap", lineHeight: 1.6 }, children: item.content })
        ] })
      ] }, item.id || item.key || item.title || j);
    } })
  ] });
}
function MinnaDetail({ lesson, onBack, hideBack = false }) {
  const minna = useDataStore((s) => s.minna);
  const [view, setView] = reactExports.useState("vocab");
  const [collapsedGrammar, setCollapsedGrammar] = reactExports.useState(/* @__PURE__ */ new Set());
  const lessonData = minna[String(lesson.l)] || {};
  const vocab = lessonData.vocab || [];
  const grammar = lessonData.grammarItems || [];
  const markVocabViewed = useLearningStore((s) => s.markLessonVocabViewed);
  const markGrammarViewed = useLearningStore((s) => s.markLessonGrammarViewed);
  reactExports.useEffect(() => {
    var _a;
    if (lesson == null ? void 0 : lesson.l) {
      safeSetItem(STORAGE_KEYS.LAST_MINNA_LESSON, String(lesson.l));
      const uid = (_a = useAppStore.getState().user) == null ? void 0 : _a.id;
      if (uid) {
        try {
          logActivity(uid, "lesson_view", { lesson: lesson.l, title: lesson.t });
        } catch (e) {
        }
      }
    }
  }, [lesson == null ? void 0 : lesson.l, lesson == null ? void 0 : lesson.t]);
  reactExports.useEffect(() => {
    if (!(lesson == null ? void 0 : lesson.l)) return;
    if (view === "vocab" && vocab.length > 0) markVocabViewed(lesson.l);
    if (view === "grammar" && grammar.length > 0) markGrammarViewed(lesson.l);
  }, [view, lesson == null ? void 0 : lesson.l, vocab.length, grammar.length, markVocabViewed, markGrammarViewed]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    !hideBack && /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, { onBack }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "n4-section-title", children: [
      lesson.icon || "📚",
      " Bài ",
      lesson.l,
      " — ",
      lesson.t || ""
    ] }),
    (lesson.vi || lesson.desc) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-ct-minna-desc-p", children: lesson.vi || lesson.desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ct-minna-tabs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `n4-btn ${view === "vocab" ? "n4-btn-primary" : "n4-btn-ghost"}`,
          onClick: () => setView("vocab"),
          children: [
            "📝 Từ vựng (",
            vocab.length,
            ")"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `n4-btn ${view === "grammar" ? "n4-btn-primary" : "n4-btn-ghost"}`,
          onClick: () => {
            setView("grammar");
            setCollapsedGrammar(/* @__PURE__ */ new Set());
          },
          children: [
            "📐 Ngữ pháp (",
            grammar.length,
            ")"
          ]
        }
      )
    ] }),
    view === "vocab" && (vocab.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-empty-msg", children: "Không có dữ liệu từ vựng cho bài này." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card", style: { padding: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-table-wrap", style: { width: "100%", overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-ct-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("caption", { children: [
        "Từ vựng Minna bài ",
        lesson.l
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-thead", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-th-tts", children: "🔊" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-th", children: "Từ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-th n4-ct-th-reading", children: "Đọc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-th n4-ct-th-romaji", children: "Romaji" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-th", children: "Nghĩa" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: vocab.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-vocab-row n4-ct-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-td-tts", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-vocab-tts", "aria-label": `Nghe ${e.word || e.reading || "từ vựng"}`, onClick: () => speakJP(e.word || e.reading || ""), children: "🔊" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-td-jp", lang: "ja", children: e.word || "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-td-reading", children: e.reading || "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-td-romaji", children: e.romaji || "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-td-meaning", children: e.meaning || "" })
      ] }, i)) })
    ] }) }) })),
    view === "grammar" && (grammar.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-empty-msg", children: "Không có dữ liệu ngữ pháp cho bài này." }) : grammar.map((item, j) => {
      var _a;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-ct-grammar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "n4-ct-grammar-header",
            "aria-expanded": !collapsedGrammar.has(j),
            onClick: () => setCollapsedGrammar((prev) => {
              const next = new Set(prev);
              if (next.has(j)) next.delete(j);
              else next.add(j);
              return next;
            }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-minna-grammar-title", lang: "ja", children: item.title || "" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-grammar-arrow", children: collapsedGrammar.has(j) ? "▼" : "▲" })
            ]
          }
        ),
        item.purpose && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-grammar-meaning", children: item.purpose }),
        !collapsedGrammar.has(j) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ct-minna-grammar-body", children: [
          item.explanation && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-minna-grammar-explain", children: item.explanation }),
          (_a = item.examples) == null ? void 0 : _a.map((ex, k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "n4-ct-minna-grammar-ex",
              onClick: (ev) => {
                ev.stopPropagation();
                speakJP(ex.jp);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-minna-grammar-ex-jp", children: ex.jp }),
                ex.romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-minna-grammar-ex-romaji", children: ex.romaji }),
                ex.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-minna-grammar-ex-vi", children: ex.vi })
              ]
            },
            k
          ))
        ] })
      ] }, item.id || item.key || item.title || j);
    })),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LessonExam, { lesson, vocab, grammar }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LessonSummary, { lesson, vocabCount: vocab.length, grammarCount: grammar.length }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NextLessonNav, { currentLesson: lesson.l, onBack })
  ] });
}
function KeigoTable() {
  const pairs = content.getKeigoPairs() || [];
  if (!pairs.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card n4-ct-ref-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { padding: "1rem", color: "var(--n4-text-dim)" }, children: "Đang tải kính ngữ… vui lòng đợi content service khởi động." }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-ct-ref-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "0 0 0.6rem", color: "var(--n4-text-dim)", fontSize: ".9rem" }, children: [
      pairs.length,
      " cặp kính ngữ phổ biến — ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "plain" }),
      " · ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "尊敬語" }),
      " (tôn kính) · ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "謙譲語" }),
      " (khiêm nhường)."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-ct-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { children: "Bảng kính ngữ N4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-thead", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Nghĩa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Bình thường" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "尊敬語" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "謙譲語" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: pairs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-muted", children: p.vi }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-jp", children: p.plain }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-jp", children: p.respectful }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-jp", children: p.humble })
      ] }, p.key || i)) })
    ] })
  ] });
}
function GrammarCompareTable() {
  const items = (content.allItems ? content.allItems() : []).filter((it) => it.kind === "grammar" && Array.isArray(it.comparesWith) && it.comparesWith.length > 0);
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card n4-ct-ref-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { padding: "1rem", color: "var(--n4-text-dim)" }, children: [
      "Bảng so sánh mẫu ngữ pháp đang được biên tập. Các cặp gợi ý đã được sinh tự động trong ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "grammar.v2.comparesWith.proposed.json" }),
      " — đợi duyệt thủ công trước khi xuất hiện ở đây."
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-ct-ref-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "0 0 0.6rem", color: "var(--n4-text-dim)", fontSize: ".9rem" }, children: [
      items.length,
      " mẫu có cặp so sánh — hiểu rõ khi nào dùng A, khi nào dùng B."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-ct-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { children: "So sánh các mẫu ngữ pháp N4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-thead", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Mẫu A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Mẫu B" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Phân biệt" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: items.flatMap((a) => a.comparesWith.map((cw, i) => {
        const b = content.getItem(cw.partnerKey);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-jp", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-jp", children: (b == null ? void 0 : b.title) || cw.partnerKey }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td", children: cw.distinction || "—" })
        ] }, `${a.key}-${i}`);
      })) })
    ] })
  ] });
}
function WordFamilyTable() {
  var _a;
  const kanji = (content.allItems ? content.allItems() : []).filter((it) => it.kind === "kanji");
  const [selectedChar, setSelectedChar] = reactExports.useState(((_a = kanji[0]) == null ? void 0 : _a.character) || "");
  const family = React.useMemo(() => {
    if (!selectedChar) return [];
    try {
      return content.getWordFamilyFor(selectedChar) || [];
    } catch (e) {
      return [];
    }
  }, [selectedChar]);
  const selectedKanji = kanji.find((k) => k.character === selectedChar);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-ct-ref-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "0.8rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "n4-word-family-kanji", style: { display: "block", marginBottom: 6, color: "var(--n4-text-dim)", fontSize: ".9rem" }, children: "Chọn kanji để xem họ từ:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          id: "n4-word-family-kanji",
          value: selectedChar,
          onChange: (e) => setSelectedChar(e.target.value),
          style: { width: "100%", maxWidth: 360, padding: "8px 10px", background: "var(--n4-surface-raised, rgba(255,255,255,0.05))", color: "inherit", borderRadius: 8, border: "1px solid rgba(255,255,255,0.12)" },
          children: kanji.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: k.character, children: [
            k.character,
            " — ",
            k.meaning
          ] }, k.key))
        }
      )
    ] }),
    selectedKanji && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "0.8rem 1rem", background: "rgba(255,179,71,0.08)", borderRadius: 10, marginBottom: "0.8rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2.4rem", lineHeight: 1 }, children: selectedKanji.character }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 4 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedKanji.meaning }),
        selectedKanji.hanviet ? ` · ${selectedKanji.hanviet}` : ""
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "var(--n4-text-dim)", fontSize: ".85rem", marginTop: 2 }, children: [
        "On: ",
        (selectedKanji.onReadings || []).join(" / ") || "—",
        " ·",
        " ",
        "Kun: ",
        (selectedKanji.kunReadings || []).join(" / ") || "—"
      ] })
    ] }),
    family.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { padding: "1rem", color: "var(--n4-text-dim)" }, children: "Chưa tìm thấy từ chứa kanji này." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-ct-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("caption", { children: [
        "Họ từ của kanji ",
        selectedChar
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-thead", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Từ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Đọc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Nghĩa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Hán Việt" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: family.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-jp", children: v.word }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-muted", children: v.reading }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td", children: v.meaning }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-muted", children: v.hanviet || "—" })
      ] }, v.key)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { marginTop: 10, color: "var(--n4-text-dim)", fontSize: ".8rem" }, children: [
      family.length,
      " từ chứa kanji ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedChar }),
      "."
    ] })
  ] });
}
function ConjugationInteractive() {
  var _a;
  const verbs = (content.allItems ? content.allItems() : []).filter((it) => it.kind === "vocab" && (it.partOfSpeech === "verb-godan" || it.partOfSpeech === "verb-ichidan" || it.partOfSpeech === "verb-irregular"));
  const [selectedKey, setSelectedKey] = reactExports.useState(((_a = verbs[0]) == null ? void 0 : _a.key) || "");
  const conj = React.useMemo(() => {
    if (!selectedKey) return null;
    try {
      return content.getConjugation(selectedKey);
    } catch (e) {
      return null;
    }
  }, [selectedKey]);
  const selectedVerb = verbs.find((v) => v.key === selectedKey);
  const FORM_LABELS = {
    dictionary: "Dictionary (辞書)",
    masu: "〜ます",
    masuNeg: "〜ません",
    masuPast: "〜ました",
    masuPastNeg: "〜ませんでした",
    te: "〜て",
    nai: "〜ない",
    naiPast: "〜なかった",
    ta: "〜た",
    potential: "Potential (可能)",
    passive: "Passive (受け身)",
    causative: "Causative (使役)",
    causativePassive: "Causative-Passive",
    volitional: "Volitional (〜よう)",
    imperative: "Imperative (命令)",
    prohibitive: "Prohibitive (禁止)",
    condBa: "〜ば (conditional)",
    condTara: "〜たら (conditional)",
    tai: "〜たい (desire)",
    teIru: "〜ている",
    teKudasai: "〜てください"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-ct-ref-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "0.8rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "block", marginBottom: 6, color: "var(--n4-text-dim)", fontSize: ".9rem" }, children: [
        "Chọn động từ (",
        verbs.length,
        " từ có sẵn):"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: selectedKey,
          onChange: (e) => setSelectedKey(e.target.value),
          style: { width: "100%", maxWidth: 360, padding: "8px 10px", background: "var(--n4-surface-raised, rgba(255,255,255,0.05))", color: "inherit", borderRadius: 8, border: "1px solid rgba(255,255,255,0.12)" },
          children: verbs.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: v.key, children: [
            v.word,
            " (",
            v.reading,
            ") — ",
            v.meaning
          ] }, v.key))
        }
      )
    ] }),
    !conj ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { padding: "1rem", color: "var(--n4-text-dim)" }, children: "Từ này chưa có bảng chia chi tiết. Thử động từ khác." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "0.8rem 1rem", background: "rgba(75,179,255,0.08)", borderRadius: 10, marginBottom: "0.8rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontWeight: 700, fontSize: "1.1rem" }, children: [
          selectedVerb == null ? void 0 : selectedVerb.word,
          " · ",
          conj.group
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-dim)", fontSize: ".85rem" }, children: selectedVerb == null ? void 0 : selectedVerb.meaning })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-ct-table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("caption", { children: [
          "Các dạng chia của ",
          (selectedVerb == null ? void 0 : selectedVerb.word) || "động từ đã chọn"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-thead", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Thể" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Dạng" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: Object.entries(conj.forms || {}).map(([form, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td", children: FORM_LABELS[form] || form }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-jp", children: value })
        ] }, form)) })
      ] })
    ] })
  ] });
}
function RadicalsTable() {
  var _a, _b;
  const radicals = ((_b = (_a = content).getRadicals) == null ? void 0 : _b.call(_a)) || [];
  if (!radicals.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card n4-ct-ref-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { padding: "1rem", color: "var(--n4-text-dim)" }, children: "Đang tải danh sách bộ thủ…" }) });
  }
  const sorted = [...radicals].sort((a, b) => (a.stroke || 0) - (b.stroke || 0));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-ct-ref-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "0 0 0.6rem", color: "var(--n4-text-dim)", fontSize: ".9rem" }, children: [
      sorted.length,
      " bộ thủ thường gặp — sắp xếp theo số nét."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-ct-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { children: "Bảng bộ thủ kanji N4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-thead", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Bộ thủ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Số nét" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Nghĩa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Hán Việt" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: sorted.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-jp", style: { fontSize: "1.4rem" }, children: r.r }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "n4-ct-ref-td-muted", children: [
          r.stroke,
          " nét"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td", children: r.meaning || "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-muted", children: r.vi || "—" })
      ] }, r.key)) })
    ] })
  ] });
}
function ConfusablesTable() {
  const raw = content.getConfusables();
  const pairs = Array.isArray(raw) ? raw : [];
  if (!pairs.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card n4-ct-ref-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { padding: "1rem", color: "var(--n4-text-dim)" }, children: "Đang tải danh sách từ dễ nhầm…" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-ct-ref-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "0 0 0.6rem", color: "var(--n4-text-dim)", fontSize: ".9rem" }, children: [
      pairs.length,
      " cặp từ dễ nhầm — so sánh nghĩa / cách dùng để tránh sai."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-ct-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { children: "Các cặp từ dễ nhầm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-thead", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Cặp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Phân biệt" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: pairs.map((p, i) => {
        const pair = Array.isArray(p.pair) ? p.pair : [];
        const items = pair.map((k) => content.getItem(k)).filter(Boolean);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-jp", children: items.map((it) => `${it.word || it.character} (${it.meaning || "—"})`).join(" ↔ ") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td", children: p.note || p.distinction || "" })
        ] }, p.key || i);
      }) })
    ] })
  ] });
}
function ReferenceContent() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const [refTab, setRefTab] = reactExports.useState("particles");
  const [, bumpVersion] = reactExports.useState(0);
  reactExports.useEffect(() => {
    return content.onReady(() => bumpVersion((version) => version + 1));
  }, []);
  const tabs = [
    { id: "particles", label: "🔤 Trợ từ" },
    { id: "counters", label: "🔢 Trợ số từ" },
    { id: "verbs", label: "✍️ Chia động từ" },
    { id: "connectors", label: "🔗 Liên từ" },
    { id: "keigo", label: "🎎 Kính ngữ" },
    { id: "confusables", label: "🔀 Dễ nhầm" },
    { id: "radicals", label: "🧱 Bộ thủ" },
    { id: "compare", label: "⚖️ So sánh mẫu" },
    { id: "wordfamily", label: "👪 Họ từ" },
    { id: "conjugation", label: "🧩 Chia chi tiết" }
  ];
  const particlesData = ((_b = (_a = content).getParticles) == null ? void 0 : _b.call(_a)) || [];
  const particlesRows = particlesData.map((p) => {
    const u = (p.usages || [])[0] || {};
    return { p: p.particle, use: p.role || u.context || "—", ex: u.ja || "", vi: u.vi || "" };
  });
  const countersData = ((_d = (_c = content).getCounters) == null ? void 0 : _d.call(_c)) || [];
  const countersRows = countersData.map((c) => ({
    c: c.counter,
    use: c.vi || "—",
    ex: c.attachRule || c.example || ""
  }));
  const verbForms = ((_f = (_e = content).getVerbForms) == null ? void 0 : _f.call(_e)) || [];
  const connectors = ((_h = (_g = content).getConnectors) == null ? void 0 : _h.call(_g)) || [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-section-title", children: "📋 Bảng tham khảo nhanh" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-ref-tabs", children: tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-btn n4-btn-sm ${refTab === t.id ? "n4-btn-primary" : "n4-btn-ghost"}`, onClick: () => setRefTab(t.id), children: t.label }, t.id)) }),
    refTab === "particles" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-ct-ref-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "0 0 0.6rem", color: "var(--n4-text-dim)", fontSize: ".9rem" }, children: [
        particlesRows.length,
        " trợ từ N5/N4 — vai trò ngữ pháp và ví dụ thực tế."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-ct-table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { children: "Bảng trợ từ tiếng Nhật N4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-thead", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Trợ từ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Chức năng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Ví dụ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Nghĩa" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: particlesRows.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-jp", children: p.p }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td", children: p.use }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-example", children: p.ex }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-muted", children: p.vi })
        ] }, i)) })
      ] })
    ] }),
    refTab === "counters" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-ct-ref-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "0 0 0.6rem", color: "var(--n4-text-dim)", fontSize: ".9rem" }, children: [
        countersRows.length,
        " trợ số từ — chọn đúng counter theo loại vật đếm."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-ct-table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { children: "Bảng trợ số từ tiếng Nhật N4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-thead", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Trợ số từ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Dùng cho" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Ví dụ / Quy tắc" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: countersRows.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-jp", children: c.c }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td", children: c.use }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-example", children: c.ex })
        ] }, i)) })
      ] })
    ] }),
    refTab === "radicals" && /* @__PURE__ */ jsxRuntimeExports.jsx(RadicalsTable, {}),
    refTab === "verbs" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card n4-ct-ref-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-ct-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { children: "Bảng các thể động từ N4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-thead", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Thể" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Chức năng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Ví dụ" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: verbForms.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-form", children: v.form }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td", children: v.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-example", children: v.example })
      ] }, i)) })
    ] }) }),
    refTab === "connectors" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card n4-ct-ref-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-ct-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { children: "Bảng liên từ tiếng Nhật N4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-thead", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Liên từ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Nghĩa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "n4-ct-ref-th", children: "Ví dụ" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: connectors.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "n4-ct-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-jp", children: c.word }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td", children: c.meaning }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-ref-td-example", children: c.example })
      ] }, i)) })
    ] }) }),
    refTab === "keigo" && /* @__PURE__ */ jsxRuntimeExports.jsx(KeigoTable, {}),
    refTab === "confusables" && /* @__PURE__ */ jsxRuntimeExports.jsx(ConfusablesTable, {}),
    refTab === "compare" && /* @__PURE__ */ jsxRuntimeExports.jsx(GrammarCompareTable, {}),
    refTab === "wordfamily" && /* @__PURE__ */ jsxRuntimeExports.jsx(WordFamilyTable, {}),
    refTab === "conjugation" && /* @__PURE__ */ jsxRuntimeExports.jsx(ConjugationInteractive, {})
  ] });
}
function LearnShell({ rail, index, reader, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-learn", "data-learn-detail": Boolean(reader) || void 0, children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-learn__workspace", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "v5-learn__rail", "aria-label": "Thư viện học tập", children: rail }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "v5-learn__index", "aria-label": "Mục lục nội dung", children: index }),
      reader && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "v5-learn__reader", "aria-label": "Nội dung đang đọc", children: reader })
    ] })
  ] });
}
const LEARN_DOMAINS = [
  { id: "minna", label: "Minna", note: "Lộ trình bài học", domain: "minna" },
  { id: "vocab", label: "Từ vựng", note: "Từ và cụm từ N4", domain: "vocab" },
  { id: "kanji", label: "Kanji", note: "Ký tự và âm đọc", domain: "kanji" },
  { id: "grammar", label: "Ngữ pháp", note: "Mẫu câu và cấu trúc", domain: "grammar" },
  { id: "reference", label: "Tham khảo", note: "Bảng tra nhanh", domain: "reading" }
];
function LibraryRail({ activeType }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "v5-library-rail", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-library-rail__heading", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v5-eyebrow", children: "Thư viện" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "学びの棚" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v5-library-rail__links", children: LEARN_DOMAINS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      NavLink,
      {
        to: `/content/${item.id}`,
        className: `v5-library-link ${activeType === item.id ? "is-active" : ""}`,
        "aria-current": activeType === item.id ? "page" : void 0,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DomainMark, { domain: item.domain, size: "sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: item.note })
          ] })
        ]
      },
      item.id
    )) })
  ] });
}
function lessonCompletion(progress) {
  if (!progress) return 0;
  return (progress.vocabViewed ? 30 : 0) + (progress.grammarViewed ? 30 : 0) + (Number(progress.quizScore) >= 80 ? 40 : 0);
}
function CoursePath({ lessons = [], minna = {}, progress = {}, onSelect }) {
  var _a, _b;
  if (!lessons.length) return null;
  const firstIncomplete = lessons.findIndex((lesson) => lessonCompletion(progress[String(lesson.l)]) < 100);
  const currentIndex = firstIncomplete === -1 ? lessons.length - 1 : firstIncomplete;
  const current = lessons[currentIndex] || lessons[lessons.length - 1];
  const currentNumber = Number(current == null ? void 0 : current.l) || 1;
  const currentProgress = progress[String(currentNumber)];
  const percent = lessonCompletion(currentProgress);
  const data = minna[String(currentNumber)] || {};
  const previous = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const next = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;
  const complete = lessons.filter((lesson) => lessonCompletion(progress[String(lesson.l)]) === 100).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "v5-course-path", "aria-labelledby": "v5-course-title", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "v5-course-path__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v5-eyebrow", children: "Lộ trình Minna no Nihongo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "v5-course-title", children: "Bài học hiện tại" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "v5-course-path__count", children: [
        complete,
        "/",
        lessons.length,
        " hoàn thành"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-course-path__line", children: [
      previous && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "v5-course-node v5-course-node--compact", onClick: () => onSelect(previous.l), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Đã học · Bài ",
          previous.l
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: previous.t || `Bài ${previous.l}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "v5-course-node v5-course-node--current", "aria-current": "step", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-course-node__meta", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Bài ",
            currentNumber
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            percent,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { lang: "ja", children: current.t || `Bài ${currentNumber}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: current.vi || current.desc || "Tiếp tục theo lộ trình Minna no Nihongo." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-course-node__facts", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            ((_a = data.vocab) == null ? void 0 : _a.length) || 0,
            " từ"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            ((_b = data.grammarItems) == null ? void 0 : _b.length) || 0,
            " mẫu câu"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "v5-course-checklist", "aria-label": "Điều kiện hoàn thành", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "data-done": Boolean(currentProgress == null ? void 0 : currentProgress.vocabViewed), children: "Từ vựng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "data-done": Boolean(currentProgress == null ? void 0 : currentProgress.grammarViewed), children: "Ngữ pháp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "data-done": Number(currentProgress == null ? void 0 : currentProgress.quizScore) >= 80, children: "Kiểm tra đạt 80%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v5-course-progress", role: "progressbar", "aria-label": "Tiến độ bài học", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": percent, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: `${percent}%` } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(V5Button, { variant: "primary", onClick: () => onSelect(currentNumber), children: percent === 0 ? "Bắt đầu bài học" : percent === 100 ? "Ôn lại bài" : "Tiếp tục bài học" })
      ] }),
      next && (percent === 100 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "v5-course-node v5-course-node--compact", onClick: () => onSelect(next.l), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Tiếp theo · Bài ",
          next.l
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: next.t || `Bài ${next.l}` })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "v5-course-node v5-course-node--compact v5-course-node--preview", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Xem trước · Bài ",
          next.l
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: next.t || `Bài ${next.l}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Hoàn thành bài hiện tại để mở." })
      ] }))
    ] })
  ] });
}
const POPULAR = ["て-form", "旅行", "～ながら", "食べる"];
const STORAGE_KEY = "n4-learn-searches";
function text(value) {
  return String(value || "").trim();
}
function searchable(values) {
  return values.map(text).filter(Boolean).join(" ").toLocaleLowerCase("vi");
}
function buildLearnSearchIndex({ minnaLessons = [], minna = {}, vocab = [], kanji = [], grammar = [] }) {
  const rows = [];
  minnaLessons.forEach((lesson) => {
    const data = minna[String(lesson.l)] || {};
    rows.push({ type: "minna", section: String(lesson.l), category: "Minna", title: `Bài ${lesson.l} · ${lesson.t || ""}`, subtitle: lesson.vi || lesson.desc || "", haystack: searchable([lesson.l, lesson.t, lesson.vi, lesson.desc, ...(data.vocab || []).flatMap((item) => [item.word, item.reading, item.romaji, item.meaning]), ...(data.grammarItems || []).flatMap((item) => [item.title, item.pattern, item.purpose, item.meaning])]) });
  });
  const addSections = (type, category, sections, itemFields) => sections.forEach((section, index) => {
    var _a;
    const items = section.entries || section.patterns || section.items || [];
    rows.push({ type, section: String((_a = section.id) != null ? _a : index + 1), category, title: section.name || section.title || `${category} ${index + 1}`, subtitle: `${items.length} mục`, haystack: searchable([section.name, section.title, section.tags, ...items.flatMap(itemFields)]) });
  });
  addSections("vocab", "Từ vựng", vocab, (item) => [item.word, item.kanji, item.japanese, item.reading, item.romaji, item.meaning, item.vietnamese, item.tags]);
  addSections("kanji", "Kanji", kanji, (item) => [item.kanji, item.title, item.meaning, item.on, item.kun, item.tags]);
  addSections("grammar", "Ngữ pháp", grammar, (item) => [item.title, item.pattern, item.structure, item.meaning, item.usage, item.content, item.tags]);
  return rows;
}
function LearnCommandSearch({ sources, onOpen }) {
  const rootRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const listId = reactExports.useId();
  const index = reactExports.useMemo(() => buildLearnSearchIndex(sources), [sources]);
  const [query, setQuery] = reactExports.useState("");
  const [open, setOpen] = reactExports.useState(false);
  const [active, setActive] = reactExports.useState(0);
  const [online, setOnline] = reactExports.useState(() => typeof navigator === "undefined" || navigator.onLine);
  const [recent, setRecent] = reactExports.useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch (e) {
      return [];
    }
  });
  const normalized = query.trim().toLocaleLowerCase("vi");
  const results = reactExports.useMemo(() => normalized ? index.filter((row) => row.haystack.includes(normalized)).slice(0, 8) : [], [index, normalized]);
  const options = normalized ? results : [...recent, ...POPULAR.filter((item) => !recent.includes(item))].slice(0, 6).map((item) => ({ suggestion: item, title: item, category: recent.includes(item) ? "Gần đây" : "Gợi ý" }));
  reactExports.useEffect(() => {
    const close = (event) => {
      var _a;
      if (!((_a = rootRef.current) == null ? void 0 : _a.contains(event.target))) setOpen(false);
    };
    const updateOnline = () => setOnline(navigator.onLine);
    document.addEventListener("pointerdown", close);
    window.addEventListener("online", updateOnline);
    window.addEventListener("offline", updateOnline);
    return () => {
      document.removeEventListener("pointerdown", close);
      window.removeEventListener("online", updateOnline);
      window.removeEventListener("offline", updateOnline);
    };
  }, []);
  reactExports.useEffect(() => setActive(0), [query]);
  const remember = (value) => {
    const next = [value, ...recent.filter((item) => item !== value)].slice(0, 5);
    setRecent(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (e) {
    }
  };
  const choose = (option) => {
    var _a;
    if (option.suggestion) {
      setQuery(option.suggestion);
      setOpen(true);
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      return;
    }
    remember(query.trim() || option.title);
    setOpen(false);
    onOpen(option);
  };
  const handleKeyDown = (event) => {
    var _a;
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      (_a = inputRef.current) == null ? void 0 : _a.blur();
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActive((value) => Math.min(value + 1, Math.max(0, options.length - 1)));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((value) => Math.max(0, value - 1));
    }
    if (event.key === "Enter" && open && options[active]) {
      event.preventDefault();
      choose(options[active]);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-learn-search", ref: rootRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: `${listId}-input`, className: "v5-sr-only", children: "Tìm nội dung học" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-learn-search__field", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "⌕" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: `${listId}-input`, ref: inputRef, role: "combobox", type: "search", value: query, placeholder: "Tìm tiếng Nhật, tiếng Việt, romaji, thẻ hoặc bài…", autoComplete: "off", "aria-expanded": open, "aria-controls": listId, "aria-autocomplete": "list", "aria-activedescendant": open && options[active] ? `${listId}-${active}` : void 0, onFocus: () => setOpen(true), onChange: (event) => {
        setQuery(event.target.value);
        setOpen(true);
      }, onKeyDown: handleKeyDown }),
      query && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
        var _a;
        setQuery("");
        (_a = inputRef.current) == null ? void 0 : _a.focus();
      }, "aria-label": "Xóa tìm kiếm", children: "×" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "⌘ K" })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-learn-search__menu", id: listId, role: "listbox", "aria-label": "Kết quả tìm kiếm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: normalized ? `${results.length} kết quả` : "Tìm gần đây và gợi ý" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: online ? "" : "is-offline", children: online ? "Dữ liệu trên thiết bị" : "Ngoại tuyến · vẫn tìm được" })
      ] }),
      options.length ? options.map((option, indexValue) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { id: `${listId}-${indexValue}`, type: "button", role: "option", "aria-selected": active === indexValue, onPointerMove: () => setActive(indexValue), onClick: () => choose(option), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { lang: option.type === "kanji" ? "ja" : void 0, children: option.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: option.subtitle || "Nhấn Enter để tìm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: option.category })
      ] }, `${option.type || "suggestion"}-${option.section || option.title}`)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "v5-learn-search__empty", children: "Không tìm thấy nội dung phù hợp. Thử từ khóa ngắn hơn." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { children: "↑↓ chọn · Enter mở · Esc đóng" })
    ] })
  ] });
}
function itemsFor(type, section) {
  if (type === "grammar") return section.patterns || section.items || section.entries || [];
  return section.entries || [];
}
function keyFor(type, item) {
  if (type === "kanji") return makeKanjiKey(item.kanji);
  if (type === "grammar") return makeGrammarKey(getGrammarLabel(item));
  return makeVocabKey(getVocabLabel(item));
}
function readerKey$1(type, section) {
  var _a, _b, _c, _d;
  return `reader:${type}:${(_d = (_c = (_b = (_a = section == null ? void 0 : section.id) != null ? _a : section == null ? void 0 : section.l) != null ? _b : section == null ? void 0 : section.name) != null ? _c : section == null ? void 0 : section.title) != null ? _d : "item"}`;
}
function keysForSection(type, section, minna) {
  if (type === "minna") {
    const data = minna[String(section.l)] || {};
    return [
      ...(data.vocab || []).map((item) => makeVocabKey(getVocabLabel(item))),
      ...(data.grammarItems || []).map((item) => makeGrammarKey(getGrammarLabel(item)))
    ].filter(Boolean);
  }
  return itemsFor(type, section).map((item) => keyFor(type, item)).filter(Boolean);
}
function qualifies(type, section, filter, bookmarks, srs, now, minna) {
  if (filter === "all") return true;
  const keys = keysForSection(type, section, minna);
  if (filter === "saved") return Boolean(bookmarks[readerKey$1(type, section)]) || keys.some((key) => bookmarks[key]);
  if (filter === "due") return keys.some((key) => {
    var _a;
    return srs[key] && Number((_a = srs[key].dueAt) != null ? _a : srs[key].nextReview) <= now;
  });
  if (filter === "weak") return keys.some((key) => srs[key] && getSrsLevel(srs[key]) <= 2);
  return true;
}
function ContentIndex({ type, sections = [], minna = {}, filter = "all", onSelect, selectedId }) {
  const bookmarks = useLearningStore((state) => state.bookmarks);
  const srs = useLearningStore((state) => state.srs);
  const lessonProgress = useLearningStore((state) => state.lessonProgress);
  const now = Date.now();
  const visible = sections.filter((section) => qualifies(type, section, filter, bookmarks, srs, now, minna));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-content-index", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v5-eyebrow", children: "Mục lục" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
        visible.length,
        " phần"
      ] })
    ] }),
    visible.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { children: visible.map((section, index) => {
      var _a, _b, _c;
      const id = String(type === "minna" ? section.l : (_a = section.id) != null ? _a : index + 1);
      const items = type === "minna" ? [...((_b = minna[id]) == null ? void 0 : _b.vocab) || [], ...((_c = minna[id]) == null ? void 0 : _c.grammarItems) || []] : itemsFor(type, section);
      const title = type === "minna" ? `Bài ${id} · ${section.t || ""}` : section.name || section.title || `Phần ${index + 1}`;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", "aria-current": String(selectedId) === id ? "true" : void 0, onClick: () => onSelect(id), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { lang: type === "kanji" ? "ja" : void 0, children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: type === "minna" ? `${lessonCompletion(lessonProgress[id])}% hoàn thành` : `${items.length} mục` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "›" })
      ] }) }, id);
    }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-content-index__empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Không có mục phù hợp" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bộ lọc đang dùng dữ liệu đã lưu và lịch SRS thật. Hãy chọn “Tất cả” để xem toàn bộ thư viện." })
    ] })
  ] });
}
function readerKey(type, section) {
  var _a, _b, _c, _d;
  return `reader:${type}:${(_d = (_c = (_b = (_a = section == null ? void 0 : section.id) != null ? _a : section == null ? void 0 : section.l) != null ? _b : section == null ? void 0 : section.name) != null ? _c : section == null ? void 0 : section.title) != null ? _d : "item"}`;
}
function ReaderPane({ type, section, onBack, children }) {
  const [furigana, setFurigana] = reactExports.useState(true);
  const [romaji, setRomaji] = reactExports.useState(false);
  const [fontScale, setFontScale] = reactExports.useState(1);
  const [more, setMore] = reactExports.useState(false);
  const key = reactExports.useMemo(() => readerKey(type, section), [type, section]);
  const bookmarked = useLearningStore((state) => Boolean(state.bookmarks[key]));
  const toggleBookmark = useLearningStore((state) => state.toggleBookmark);
  const title = (section == null ? void 0 : section.t) || (section == null ? void 0 : section.name) || (section == null ? void 0 : section.title) || `Bài ${(section == null ? void 0 : section.l) || ""}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "v5-reader-pane", "data-furigana": furigana, "data-romaji": romaji, style: { "--v5-reader-scale": fontScale }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "v5-reader-pane__heading", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(V5Button, { variant: "quiet", onClick: onBack, children: "← Mục lục" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v5-eyebrow", children: "Đang đọc" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { lang: "ja", children: title })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-reading-tools", role: "toolbar", "aria-label": "Công cụ đọc", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(V5Button, { variant: "quiet", "aria-pressed": furigana, onClick: () => setFurigana((value) => !value), children: "Furigana" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(V5Button, { variant: "quiet", onClick: () => setFontScale((value) => value >= 1.2 ? 0.9 : Number((value + 0.1).toFixed(1))), "aria-label": `Cỡ chữ ${Math.round(fontScale * 100)}%`, children: [
        "Aa ",
        Math.round(fontScale * 100),
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(V5IconButton, { label: "Nghe tiêu đề", onClick: () => speakJP(title), children: "♪" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(V5IconButton, { label: bookmarked ? "Bỏ đánh dấu" : "Đánh dấu nội dung", "aria-pressed": bookmarked, onClick: () => toggleBookmark(key), children: bookmarked ? "★" : "☆" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-reading-tools__more", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(V5IconButton, { label: "Thêm công cụ", "aria-expanded": more, onClick: () => setMore((value) => !value), children: "•••" }),
        more && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { role: "menu", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", role: "menuitemcheckbox", "aria-checked": romaji, onClick: () => setRomaji((value) => !value), children: [
            "Romaji ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: romaji ? "Đang hiện" : "Đang ẩn" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { role: "menuitem", to: "/settings?section=feedback", children: "Báo nội dung" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { role: "menuitem", to: "/ai-tutor", children: [
            "Hỏi AI ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Có thể chưa chính xác" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v5-reader-paper", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "v5-reader-pane__practice", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v5-eyebrow", children: "Bước tiếp theo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Củng cố nội dung vừa đọc" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(V5LinkButton, { variant: "primary", to: `/practice?domain=${type}`, children: "Bắt đầu luyện tập" })
    ] })
  ] });
}
const TYPES = new Set(LEARN_DOMAINS.map((item) => item.id));
const FILTERS = [["all", "Tất cả"], ["saved", "Đã lưu"], ["due", "Đến hạn"], ["weak", "Hay sai"]];
function MinnaCoursePathHero({ minnaLessons, minna, lessonProgress, onSelect }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CoursePath, { lessons: minnaLessons, minna, progress: lessonProgress, onSelect });
}
function findSection(type, stores, sectionId) {
  if (type === "minna") {
    if (!/^\d+$/.test(String(sectionId))) return null;
    const lessonNumber = Number(sectionId);
    if (!Number.isSafeInteger(lessonNumber) || lessonNumber < 1) return null;
    const metadata = (stores.minnaLessons || []).find((item) => Number(item.l) === lessonNumber);
    const hasData = Object.prototype.hasOwnProperty.call(stores.minna || {}, String(lessonNumber));
    return hasData ? metadata || { l: lessonNumber } : null;
  }
  return (stores[type] || []).find((item, index) => {
    var _a;
    return String((_a = item.id) != null ? _a : index + 1) === String(sectionId);
  }) || null;
}
function SectionDetail({ type, section, onBack }) {
  let detail = null;
  if (type === "kanji") detail = /* @__PURE__ */ jsxRuntimeExports.jsx(KanjiDetail, { section, onBack, hideBack: true });
  if (type === "vocab") detail = /* @__PURE__ */ jsxRuntimeExports.jsx(VocabDetail, { section, onBack, hideBack: true });
  if (type === "grammar") detail = /* @__PURE__ */ jsxRuntimeExports.jsx(GrammarDetail, { section, onBack, hideBack: true });
  if (type === "minna") detail = /* @__PURE__ */ jsxRuntimeExports.jsx(MinnaDetail, { lesson: section, onBack, hideBack: true });
  return detail;
}
function LearnState({ kind, title, text: text2, action }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "v5-learn v5-learn-state", "aria-busy": kind === "loading" || void 0, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v5-learn-state__mark", "aria-hidden": "true", children: kind === "error" ? "!" : kind === "loading" ? "…" : "⌕" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: text2 }),
    action
  ] });
}
function Content() {
  var _a, _b, _c;
  const { type, section } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeType = type || "minna";
  const validType = TYPES.has(activeType);
  const { vocab, kanji, grammar, minna, minnaLessons, loaded, error, loadFromLegacy } = useDataStore(useShallow((state) => ({
    vocab: state.vocab,
    kanji: state.kanji,
    grammar: state.grammar,
    minna: state.minna,
    minnaLessons: state.minnaLessons,
    loaded: state.loaded,
    error: state.error,
    loadFromLegacy: state.loadFromLegacy
  })));
  const [recent, setRecent] = reactExports.useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem("n4-learn-recent") || "[]");
    } catch (e) {
      return [];
    }
  });
  const activeFilter = searchParams.get("filter") || "all";
  const lessonProgress = useLearningStore((state) => state.lessonProgress);
  useEnsureLegacyDataLoaded(loaded, loadFromLegacy);
  const stores = { vocab, kanji, grammar, minna, minnaLessons };
  const sections = activeType === "minna" ? minnaLessons : stores[activeType] || [];
  const selected = validType && section ? findSection(activeType, stores, section) : null;
  const rememberAndOpen = reactExports.useCallback((nextType, sectionId) => {
    var _a2;
    const entry = { type: nextType, section: String(sectionId), label: `${((_a2 = LEARN_DOMAINS.find((item) => item.id === nextType)) == null ? void 0 : _a2.label) || nextType} · ${sectionId}` };
    setRecent((current) => {
      const next = [entry, ...current.filter((item) => item.type !== entry.type || item.section !== entry.section)].slice(0, 4);
      try {
        sessionStorage.setItem("n4-learn-recent", JSON.stringify(next));
        sessionStorage.setItem(`n4-learn-scroll:${nextType}`, String(window.scrollY));
      } catch (e) {
      }
      return next;
    });
    const query = searchParams.toString();
    navigate(`/content/${nextType}/${sectionId}${query ? `?${query}` : ""}`);
  }, [navigate, searchParams]);
  const goBack = reactExports.useCallback(() => {
    const query = searchParams.toString();
    navigate(`/content/${activeType}${query ? `?${query}` : ""}`);
  }, [activeType, navigate, searchParams]);
  reactExports.useEffect(() => {
    if (section || !validType) return void 0;
    let scrollY = 0;
    try {
      scrollY = Number(sessionStorage.getItem(`n4-learn-scroll:${activeType}`) || 0);
    } catch (e) {
    }
    if (!scrollY) return void 0;
    const frame = requestAnimationFrame(() => window.scrollTo({ top: scrollY, behavior: "auto" }));
    return () => cancelAnimationFrame(frame);
  }, [activeType, section, validType]);
  if (!validType) return /* @__PURE__ */ jsxRuntimeExports.jsx(LearnState, { kind: "not-found", title: "Không tìm thấy thư viện", text: `“${activeType}” không phải là một khu vực học tập hiện có.`, action: /* @__PURE__ */ jsxRuntimeExports.jsx(V5LinkButton, { variant: "primary", to: "/content/minna", children: "Về thư viện Minna" }) });
  if (!loaded && !error) return /* @__PURE__ */ jsxRuntimeExports.jsx(LearnState, { kind: "loading", title: "Đang chuẩn bị thư viện…", text: "Ứng dụng đang kiểm tra nội dung học trên thiết bị." });
  if (error && !loaded) return /* @__PURE__ */ jsxRuntimeExports.jsx(LearnState, { kind: "error", title: "Không thể mở thư viện", text: "Nội dung chưa tải được. Bạn có thể thử lại mà không mất tiến độ.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(V5Button, { variant: "primary", onClick: loadFromLegacy, children: "Thử tải lại" }) });
  if (section && !selected) return /* @__PURE__ */ jsxRuntimeExports.jsx(LearnState, { kind: "not-found", title: "Không tìm thấy bài học", text: `Liên kết “${section}” không khớp với nội dung ${((_a = LEARN_DOMAINS.find((item) => item.id === activeType)) == null ? void 0 : _a.label) || activeType} hiện có.`, action: /* @__PURE__ */ jsxRuntimeExports.jsx(V5LinkButton, { variant: "primary", to: `/content/${activeType}`, children: "Xem mục lục" }) });
  const updateFilter = (filter) => {
    const next = new URLSearchParams(searchParams);
    if (filter === "all") next.delete("filter");
    else next.set("filter", filter);
    setSearchParams(next, { replace: true });
  };
  const search = /* @__PURE__ */ jsxRuntimeExports.jsx(LearnCommandSearch, { sources: { minnaLessons, minna, vocab, kanji, grammar }, onOpen: (result) => rememberAndOpen(result.type, result.section) });
  const rail = /* @__PURE__ */ jsxRuntimeExports.jsx(LibraryRail, { activeType });
  const index = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v5-learn__mobile-search", children: search }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "v5-learn-index__heading", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v5-eyebrow", children: (_b = LEARN_DOMAINS.find((item) => item.id === activeType)) == null ? void 0 : _b.note }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: (_c = LEARN_DOMAINS.find((item) => item.id === activeType)) == null ? void 0 : _c.label })
      ] }),
      recent.length > 0 && !section && /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/content/${recent[0].type}/${recent[0].section}`, className: "v5-learn-recent", children: [
        "Tiếp tục: ",
        recent[0].label
      ] })
    ] }),
    activeType !== "reference" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v5-learn-filters", "aria-label": "Bộ lọc nội dung", children: FILTERS.map(([id, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-pressed": activeFilter === id, onClick: () => updateFilter(id), children: label }, id)) }),
    activeType === "minna" && !section && /* @__PURE__ */ jsxRuntimeExports.jsx(CoursePath, { lessons: minnaLessons, minna, progress: lessonProgress, onSelect: (id) => rememberAndOpen("minna", id) }),
    activeType === "reference" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v5-reference-index", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReferenceContent, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ContentIndex, { type: activeType, sections, minna, filter: activeFilter, selectedId: section, onSelect: (id) => rememberAndOpen(activeType, id) })
  ] });
  const reader = selected ? /* @__PURE__ */ jsxRuntimeExports.jsx(ReaderPane, { type: activeType, section: selected, onBack: goBack, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionDetail, { type: activeType, section: selected, onBack: goBack }) }) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LearnShell, { rail, index, reader, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "v5-learn__header", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "v5-eyebrow", children: "Học · 学ぶ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Thư viện và sổ tay N4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Đi theo lộ trình hoặc tìm đúng nội dung bạn cần." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "v5-learn__desktop-search", children: search })
  ] }) });
}
export {
  MinnaCoursePathHero,
  Content as default,
  findSection
};
