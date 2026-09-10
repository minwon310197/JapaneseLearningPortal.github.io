import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
function StrokeCanvas({
  width = 320,
  height = 320,
  onStroke,
  onComplete,
  guideGrid = true,
  referencePath = null,
  // SVG path for the target kanji
  className = ""
}) {
  const canvasRef = reactExports.useRef(null);
  const ctxRef = reactExports.useRef(null);
  const [strokes, setStrokes] = reactExports.useState([]);
  const drawingRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    ctxRef.current = c.getContext("2d");
    drawAll();
  }, [strokes, referencePath]);
  const drawAll = reactExports.useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    if (guideGrid) {
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();
      ctx.restore();
    }
    ctx.strokeStyle = "#00f0ff";
    ctx.shadowColor = "#00f0ff";
    ctx.shadowBlur = 12;
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (const s of strokes) {
      if (s.length < 2) continue;
      ctx.beginPath();
      ctx.moveTo(s[0].x, s[0].y);
      for (let i = 1; i < s.length; i++) ctx.lineTo(s[i].x, s[i].y);
      ctx.stroke();
    }
  }, [strokes, width, height, guideGrid]);
  const pointFromEvent = (e) => {
    var _a, _b;
    const r = canvasRef.current.getBoundingClientRect();
    const clientX = e.touches ? (_a = e.touches[0]) == null ? void 0 : _a.clientX : e.clientX;
    const clientY = e.touches ? (_b = e.touches[0]) == null ? void 0 : _b.clientY : e.clientY;
    return { x: (clientX - r.left) * (width / r.width), y: (clientY - r.top) * (height / r.height) };
  };
  const startStroke = (e) => {
    e.preventDefault();
    const p = pointFromEvent(e);
    if (!p) return;
    drawingRef.current = [p];
  };
  const moveStroke = (e) => {
    if (!drawingRef.current) return;
    e.preventDefault();
    const p = pointFromEvent(e);
    if (!p) return;
    drawingRef.current.push(p);
    const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.strokeStyle = "#00f0ff";
    ctx.shadowColor = "#00f0ff";
    ctx.shadowBlur = 12;
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    const pts = drawingRef.current;
    ctx.beginPath();
    ctx.moveTo(pts[pts.length - 2].x, pts[pts.length - 2].y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
  };
  const endStroke = () => {
    if (!drawingRef.current) return;
    const s = drawingRef.current;
    drawingRef.current = null;
    if (s.length >= 2) {
      setStrokes((prev) => {
        const next = [...prev, s];
        try {
          onStroke == null ? void 0 : onStroke(s, next);
        } catch (e) {
        }
        return next;
      });
    }
  };
  const undo = () => setStrokes((arr) => arr.slice(0, -1));
  const clearAll = () => setStrokes([]);
  const submit = () => {
    try {
      onComplete == null ? void 0 : onComplete(strokes);
    } catch (e) {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-stroke ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: "stroke-canvas-instructions", className: "n4-sr-only", children: "Vẽ từng nét kanji bằng chuột hoặc ngón tay, sau đó chọn Xác nhận. Có lựa chọn nhập số nét bằng bàn phím bên dưới." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stroke-canvas-wrap", style: { width, height }, children: [
      referencePath && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "n4-stroke-reference", width, height, viewBox: `0 0 ${width} ${height}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: referencePath, fill: "none", stroke: "rgba(255,255,255,0.15)", strokeWidth: "2" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "canvas",
        {
          ref: canvasRef,
          width,
          height,
          onMouseDown: startStroke,
          onMouseMove: moveStroke,
          onMouseUp: endStroke,
          onMouseLeave: endStroke,
          onTouchStart: startStroke,
          onTouchMove: moveStroke,
          onTouchEnd: endStroke,
          "aria-label": "Khung viết kanji",
          "aria-describedby": "stroke-canvas-instructions",
          role: "img"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stroke-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: undo, disabled: !strokes.length, children: "↺ Xoá 1 nét" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: clearAll, disabled: !strokes.length, children: "🗑️ Xoá" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-btn-sm", onClick: submit, disabled: !strokes.length, children: "✓ Xác nhận" })
    ] })
  ] });
}
export {
  StrokeCanvas as default
};
