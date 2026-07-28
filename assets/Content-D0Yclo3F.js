import { j as jsxRuntimeExports, r as reactExports, R as React, u as useShallow } from "./vendor-react-BYxMSDiB.js";
import { d as useLearningStore, am as makeKanjiKey, an as makeVocabKey, ao as getVocabLabel, J as useDataStore, ap as makeGrammarKey, aq as getGrammarLabel, ar as fetchKanjiSVG, as as speakJP, N as safeSetItem, f as STORAGE_KEYS, u as useAppStore, R as content, at as ContentHeroScene } from "./feature-3d-ClP3ARU5.js";
import { v as logActivity, w as useEnsureLegacyDataLoaded } from "./index-ZUSnnghe.js";
import { I as IOSSegmentControl } from "./IOSSegmentControl-B7LgaL2H.js";
import { b as useNavigate, c as useParams, N as Navigate } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-icons-DHCyxOF-.js";
const GRID_CHUNK_SIZE = 8;
function EmptyState({ title, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state n4-ct-empty", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon n4-ct-empty-icon", children: "📦" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-empty-state-title", children: title || "Chưa có dữ liệu" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: text }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-empty-state-subtitle n4-ct-empty-sub", children: "Dữ liệu sẽ tự động tải từ hệ thống cũ khi có sẵn." })
  ] });
}
function ProgressiveSectionGrid({ items, renderItem, chunkSize = GRID_CHUNK_SIZE }) {
  const [visibleCount, setVisibleCount] = reactExports.useState(chunkSize);
  const sentinelRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    setVisibleCount(chunkSize);
  }, [items, chunkSize]);
  reactExports.useEffect(() => {
    if (!(items == null ? void 0 : items.length) || visibleCount >= items.length) return;
    if (typeof IntersectionObserver !== "function") {
      setVisibleCount(items.length);
      return;
    }
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setVisibleCount((count) => Math.min(count + chunkSize, items.length));
      }
    }, { rootMargin: "240px 0px" });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [items, visibleCount, chunkSize]);
  const rendered = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-trainers-grid", children: rendered.map(renderItem) }),
    hasMore && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: sentinelRef, style: { display: "flex", justifyContent: "center", marginTop: "var(--n4-sp-4)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setVisibleCount((count) => Math.min(count + chunkSize, items.length)), children: [
      "Hiện thêm ",
      Math.min(chunkSize, items.length - visibleCount),
      " mục"
    ] }) })
  ] });
}
function KanjiContent({ data, onSelect, bookmarkOnly }) {
  const bookmarks = useLearningStore((s) => s.bookmarks);
  if (!data || data.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Đang tải Kanji", text: "Dữ liệu Kanji sẽ xuất hiện ngay khi hệ thống cũ đồng bộ xong." });
  const filtered = bookmarkOnly ? data.map((s) => ({ ...s, entries: (s.entries || []).filter((e) => bookmarks[makeKanjiKey(e.kanji)]) })).filter((s) => s.entries.length > 0) : data;
  const totalEntries = filtered.reduce((sum, s) => {
    var _a;
    return sum + (((_a = s.entries) == null ? void 0 : _a.length) || 0);
  }, 0);
  if (bookmarkOnly && totalEntries === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Chưa có Kanji đã đánh dấu", text: "Hãy mở một mục Kanji và nhấn dấu sao để lưu lại." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "n4-section-title", children: [
      "🈲 Kanji ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge", children: totalEntries })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressiveSectionGrid, { items: filtered, renderItem: (section, idx) => {
      var _a, _b, _c, _d;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-card n4-section-card-button", onClick: () => {
        var _a2;
        return onSelect((_a2 = section.id) != null ? _a2 : idx + 1);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-section-name", children: section.name || section.title || `§${idx + 1}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-badge", children: [
            ((_a = section.entries) == null ? void 0 : _a.length) || 0,
            " chữ"
          ] })
        ] }),
        (_b = section.entries) == null ? void 0 : _b.slice(0, 5).map((entry, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ct-preview-kanji", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-preview-kanji-char", children: entry.kanji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-preview-kanji-meaning", children: entry.meaning })
        ] }, j)),
        (((_c = section.entries) == null ? void 0 : _c.length) || 0) > 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ct-more", children: [
          "+",
          section.entries.length - 5,
          " chữ khác..."
        ] })
      ] }, (_d = section.id) != null ? _d : idx);
    } })
  ] });
}
function VocabContent({ data, onSelect, bookmarkOnly }) {
  const bookmarks = useLearningStore((s) => s.bookmarks);
  if (!data || data.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Đang tải từ vựng", text: "Dữ liệu từ vựng sẽ xuất hiện ngay khi nguồn dữ liệu sẵn sàng." });
  const filtered = bookmarkOnly ? data.map((s) => ({ ...s, entries: (s.entries || []).filter((e) => bookmarks[makeVocabKey(getVocabLabel(e))]) })).filter((s) => s.entries.length > 0) : data;
  const totalEntries = filtered.reduce((sum, s) => {
    var _a;
    return sum + (((_a = s.entries) == null ? void 0 : _a.length) || 0);
  }, 0);
  if (bookmarkOnly && totalEntries === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Chưa có từ vựng đã đánh dấu", text: "Đánh dấu từ quan trọng để gom lại thành danh sách ôn tập nhanh." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "n4-section-title", children: [
      "📝 Từ vựng ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge", children: totalEntries })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressiveSectionGrid, { items: filtered, renderItem: (section, idx) => {
      var _a, _b, _c;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-card n4-section-card-button", onClick: () => {
        var _a2;
        return onSelect((_a2 = section.id) != null ? _a2 : idx + 1);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-section-name", children: section.name || section.title || `§${idx + 1}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-badge", children: [
            ((_a = section.entries) == null ? void 0 : _a.length) || 0,
            " từ"
          ] })
        ] }),
        (_b = section.entries) == null ? void 0 : _b.slice(0, 4).map((entry, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ct-preview-vocab", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-preview-vocab-jp", children: entry.word || entry.kanji || entry.japanese }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-preview-vocab-meaning", children: entry.meaning || entry.vietnamese })
        ] }, j))
      ] }, (_c = section.id) != null ? _c : idx);
    } })
  ] });
}
function GrammarContent({ data, onSelect, bookmarkOnly }) {
  const loaded = useDataStore((s) => s.loaded);
  const bookmarks = useLearningStore((s) => s.bookmarks);
  if (!data || data.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: loaded ? "Không có dữ liệu ngữ pháp" : "Đang tải ngữ pháp", text: loaded ? "Dữ liệu ngữ pháp trống hoặc bị lọc bởi cài đặt. Hãy kiểm tra giới hạn bài học trong Cài đặt." : "Dữ liệu ngữ pháp sẽ xuất hiện ngay khi đồng bộ hoàn tất." });
  const filtered = bookmarkOnly ? data.map((s) => {
    const items = s.patterns || s.items || s.entries || [];
    const bItems = items.filter((i) => bookmarks[makeGrammarKey(getGrammarLabel(i))]);
    return { ...s, patterns: bItems, items: bItems, entries: bItems };
  }).filter((s) => {
    var _a, _b, _c;
    return (((_a = s.patterns) == null ? void 0 : _a.length) || ((_b = s.items) == null ? void 0 : _b.length) || ((_c = s.entries) == null ? void 0 : _c.length) || 0) > 0;
  }) : data;
  const totalItems = filtered.reduce((sum, s) => {
    var _a, _b, _c;
    return sum + (((_a = s.patterns) == null ? void 0 : _a.length) || ((_b = s.items) == null ? void 0 : _b.length) || ((_c = s.entries) == null ? void 0 : _c.length) || 0);
  }, 0);
  if (bookmarkOnly && totalItems === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Chưa có ngữ pháp đã đánh dấu", text: "Lưu các mẫu khó nhớ để quay lại ôn tập theo cụm." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "n4-section-title", children: [
      "📐 Ngữ pháp ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge", children: totalItems })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressiveSectionGrid, { items: filtered, renderItem: (section, idx) => {
      var _a;
      const items = section.patterns || section.items || section.entries || [];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-card n4-section-card-button", onClick: () => {
        var _a2;
        return onSelect((_a2 = section.id) != null ? _a2 : idx + 1);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-section-name", children: section.name || section.title || `§${idx + 1}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-badge", children: [
            items.length,
            " mẫu"
          ] })
        ] }),
        items.slice(0, 3).map((item, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ct-preview-grammar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-preview-grammar-title", children: item.title || item.pattern || item.word || "" }),
          item.meaning && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-preview-grammar-meaning", children: item.meaning })
        ] }, j)),
        items.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ct-more", children: [
          "+",
          items.length - 3,
          " mẫu khác..."
        ] })
      ] }, (_a = section.id) != null ? _a : idx);
    } })
  ] });
}
function getLessonCompletion(progress) {
  if (!progress) return 0;
  let pct = 0;
  if (progress.vocabViewed) pct += 30;
  if (progress.grammarViewed) pct += 30;
  if (typeof progress.quizScore === "number" && progress.quizScore >= 80) pct += 40;
  return pct;
}
function MinnaContent({ data, minna, onSelect }) {
  const lessonProgress = useLearningStore((s) => s.lessonProgress);
  if (!data || data.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "Đang tải Minna", text: "Danh sách bài Minna sẽ xuất hiện sau khi dữ liệu bài học sẵn sàng." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "n4-section-title", children: [
      "📖 Minna no Nihongo ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-badge", children: [
        data.length,
        " bài"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressiveSectionGrid, { items: data, renderItem: (lesson, idx) => {
      var _a;
      const lNum = lesson.l || idx + 1;
      const prog = lessonProgress[String(lNum)];
      const pct = getLessonCompletion(prog);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-card n4-section-card-button", onClick: () => {
        var _a2;
        return onSelect((_a2 = lesson.l) != null ? _a2 : idx + 1);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-ct-section-name", children: [
            lesson.icon || "📚",
            " Bài ",
            lNum
          ] }),
          lNum <= 25 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge", style: { background: "var(--n4-cat-kanji, #f0a)", color: "#fff", fontSize: "0.65rem", padding: "1px 6px" }, children: "ôn N5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge n4-ct-minna-badge", children: (() => {
            var _a2, _b;
            const ld = (minna == null ? void 0 : minna[String(lNum)]) || {};
            return `${((_a2 = ld.vocab) == null ? void 0 : _a2.length) || 0}từ · ${((_b = ld.grammarItems) == null ? void 0 : _b.length) || 0}mẫu`;
          })() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-minna-title", children: lesson.t || "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ct-minna-desc", children: lesson.vi || lesson.desc || "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-lesson-progress", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-lesson-progress-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-lesson-progress-fill", style: { width: `${pct}%` } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-lesson-progress-text", children: [
            pct,
            "%"
          ] })
        ] }),
        prog && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-lesson-progress-detail", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: prog.vocabViewed ? "var(--n4-neon-green, #22c55e)" : "var(--n4-text-muted)" }, children: [
            prog.vocabViewed ? "✓" : "○",
            " Từ vựng"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: prog.grammarViewed ? "var(--n4-neon-green, #22c55e)" : "var(--n4-text-muted)" }, children: [
            prog.grammarViewed ? "✓" : "○",
            " Ngữ pháp"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: prog.quizScore >= 80 ? "var(--n4-neon-green, #22c55e)" : "var(--n4-text-muted)" }, children: [
            prog.quizScore >= 80 ? "✓" : "○",
            " Kiểm tra ",
            prog.quizScore != null ? `(${prog.quizScore}%)` : ""
          ] })
        ] })
      ] }, (_a = lesson.l) != null ? _a : idx);
    } })
  ] });
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
function renderHighlightedText(text = "") {
  return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, index) => {
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
function KanjiDetail({ section, onBack }) {
  const entries = section.entries || [];
  const [writingKanji, setWritingKanji] = reactExports.useState(null);
  if (writingKanji) {
    const entry = entries.find((e) => e.kanji === writingKanji) || null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(KanjiWritingOverlay, { kanji: writingKanji, onClose: () => setWritingKanji(null), entry, renderHighlightedText });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, { onBack }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-kanji-char", onClick: () => setWritingKanji(entry.kanji), title: "🔍 Nhấn để xem chi tiết & tập viết", children: entry.kanji }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-kanji-compound-jp", children: [
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-kanji-example-jp", children: [
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
function VocabDetail({ section, onBack }) {
  const entries = section.entries || [];
  const [expanded, setExpanded] = reactExports.useState(null);
  const totalEx = entries.reduce((s, e) => {
    var _a;
    return s + (((_a = e.examples) == null ? void 0 : _a.length) || 0);
  }, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, { onBack }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-td-jp", children: e.word || e.kanji || e.japanese || "" }),
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
function GrammarDetail({ section, onBack }) {
  const items = section.patterns || section.items || section.entries || [];
  const [expanded, setExpanded] = reactExports.useState(null);
  const totalEx = items.reduce((s, p) => {
    var _a;
    return s + (((_a = p.examples) == null ? void 0 : _a.length) || 0);
  }, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, { onBack }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-grammar-title", children: item.title || item.pattern || item.word || "" }),
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
            ))
          ] }),
          !item.usage && !exs.length && item.content && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { whiteSpace: "pre-wrap", lineHeight: 1.6 }, children: item.content })
        ] })
      ] }, item.id || item.key || item.title || j);
    } })
  ] });
}
function MinnaDetail({ lesson, onBack }) {
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, { onBack }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "n4-ct-td-jp", children: e.word || "" }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ct-minna-grammar-title", children: item.title || "" }),
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
const TABS = [
  { id: "minna", icon: "📖", label: "Minna" },
  { id: "vocab", icon: "📝", label: "Từ vựng" },
  { id: "kanji", icon: "🈲", label: "Kanji" },
  { id: "grammar", icon: "📐", label: "Ngữ pháp" },
  { id: "reference", icon: "📋", label: "Tham khảo" }
];
function Content() {
  const { type, section } = useParams();
  const navigate = useNavigate();
  const validType = !type || TABS.some((tab) => tab.id === type);
  const activeTab = validType ? type || "minna" : "minna";
  const { vocab, kanji, grammar, minna, minnaLessons, loaded, loadFromLegacy } = useDataStore(
    useShallow((s) => ({ vocab: s.vocab, kanji: s.kanji, grammar: s.grammar, minna: s.minna, minnaLessons: s.minnaLessons, loaded: s.loaded, loadFromLegacy: s.loadFromLegacy }))
  );
  const [bookmarkOnly, setBookmarkOnly] = reactExports.useState(false);
  useEnsureLegacyDataLoaded(loaded, loadFromLegacy);
  const goSection = reactExports.useCallback((secId) => navigate(`/content/${activeTab}/${secId}`), [activeTab, navigate]);
  const goBack = reactExports.useCallback(() => navigate(`/content/${activeTab}`), [activeTab, navigate]);
  const sectionData = section ? findSection(activeTab, { kanji, vocab, grammar, minnaLessons }, section) : null;
  if (!validType) return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/content/minna", replace: true });
  if (section && !sectionData) return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: `/content/${activeTab}`, replace: true });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", children: [
    !section && /* @__PURE__ */ jsxRuntimeExports.jsx(ContentHeroScene, {}),
    !section && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "0 var(--n4-sp-4)", marginBottom: "var(--n4-sp-3)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      IOSSegmentControl,
      {
        items: TABS.map((t) => ({ value: t.id, label: `${t.icon} ${t.label}` })),
        active: activeTab,
        onChange: (id) => navigate(`/content/${id}`)
      }
    ) }),
    !section && activeTab !== "reference" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "flex-end", padding: "0 var(--n4-sp-2)", marginBottom: "var(--n4-sp-2)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `n4-btn n4-btn-sm ${bookmarkOnly ? "n4-btn-primary" : "n4-btn-ghost"}`,
        onClick: () => setBookmarkOnly(!bookmarkOnly),
        title: bookmarkOnly ? "Hiện tất cả" : "Chỉ hiện đánh dấu",
        children: bookmarkOnly ? "⭐ Đã đánh dấu" : "☆ Lọc bookmark"
      }
    ) }),
    section && sectionData ? /* @__PURE__ */ jsxRuntimeExports.jsx(SectionDetail, { type: activeTab, section: sectionData, onBack: goBack }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      activeTab === "kanji" && /* @__PURE__ */ jsxRuntimeExports.jsx(KanjiContent, { data: kanji, onSelect: goSection, bookmarkOnly }),
      activeTab === "vocab" && /* @__PURE__ */ jsxRuntimeExports.jsx(VocabContent, { data: vocab, onSelect: goSection, bookmarkOnly }),
      activeTab === "grammar" && /* @__PURE__ */ jsxRuntimeExports.jsx(GrammarContent, { data: grammar, onSelect: goSection, bookmarkOnly }),
      activeTab === "minna" && /* @__PURE__ */ jsxRuntimeExports.jsx(MinnaContent, { data: minnaLessons, minna, onSelect: goSection }),
      activeTab === "reference" && /* @__PURE__ */ jsxRuntimeExports.jsx(ReferenceContent, {})
    ] })
  ] });
}
function findSection(type, stores, sectionId) {
  if (type === "minna") return { l: Number(sectionId) };
  const arr = stores[type] || [];
  const match = arr.find((s) => String(s.id) === String(sectionId));
  if (match) return match;
  const idx = Number(sectionId) - 1;
  if (idx >= 0 && idx < arr.length) return arr[idx];
  return null;
}
function SectionDetail({ type, section, onBack }) {
  if (type === "kanji") return /* @__PURE__ */ jsxRuntimeExports.jsx(KanjiDetail, { section, onBack });
  if (type === "vocab") return /* @__PURE__ */ jsxRuntimeExports.jsx(VocabDetail, { section, onBack });
  if (type === "grammar") return /* @__PURE__ */ jsxRuntimeExports.jsx(GrammarDetail, { section, onBack });
  if (type === "minna") return /* @__PURE__ */ jsxRuntimeExports.jsx(MinnaDetail, { lesson: section, onBack });
  return null;
}
export {
  Content as default
};
