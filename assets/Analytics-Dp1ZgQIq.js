import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, b as useDataStore } from "./feature-3d-jK3b4Iv-.js";
import { a4 as getGrammarLabel, a2 as getVocabLabel, ah as makeLearningKey } from "./feature-3d-hud-Dp6hMoyV.js";
import { b as useNavigate } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-supabase-DTEAj5J1.js";
function resolveEntry(entry) {
  if (!entry) return { total: 0, correct: 0, wrong: 0 };
  if (typeof entry === "number") return { total: entry, correct: 0, wrong: 0 };
  return entry;
}
function lastNDays(n) {
  const result = [];
  const today = /* @__PURE__ */ new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    result.push(d.toISOString().slice(0, 10));
  }
  return result;
}
function fmtDate(isoDate) {
  if (!isoDate || isoDate.length < 10) return "—";
  return isoDate.slice(8, 10) + "/" + isoDate.slice(5, 7);
}
function BarChart({ data, labelKey, valueKey, height = 120, color = "var(--n4-accent)" }) {
  const maxVal = Math.max(1, ...data.map((d) => d[valueKey]));
  const barW = Math.max(6, Math.min(24, Math.floor(280 / data.length) - 2));
  const totalW = data.length * (barW + 2);
  const labelInterval = Math.max(1, Math.ceil(data.length / 6));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "100%", viewBox: `0 0 ${totalW} ${height + 28}`, style: { display: "block" }, children: data.map((d, i) => {
    const h = d[valueKey] / maxVal * height;
    const x = i * (barW + 2);
    const showLabel = i % labelInterval === 0 || i === data.length - 1;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x, y: height - h, width: barW, height: Math.max(h, 1), rx: 2, fill: color, opacity: d[valueKey] > 0 ? 0.85 : 0.15 }),
      d[valueKey] > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: x + barW / 2, y: height - h - 3, textAnchor: "middle", fontSize: "6", fill: "var(--n4-text-muted)", children: d[valueKey] }),
      showLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "text",
        {
          x: x + barW / 2,
          y: height + 6,
          textAnchor: "end",
          fontSize: "6.5",
          fill: "var(--n4-text-secondary)",
          transform: `rotate(-45, ${x + barW / 2}, ${height + 6})`,
          children: fmtDate(d[labelKey])
        }
      )
    ] }, i);
  }) });
}
function AccuracyChart({ data, height = 110 }) {
  const points = data.filter((d) => d.total > 0);
  if (points.length < 2) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-secondary)", fontSize: "var(--n4-fs-sm)" }, children: "Chưa đủ dữ liệu để hiển thị biểu đồ." });
  const w = 320;
  const padX = 28;
  const padY = 5;
  const usableW = w - padX - 10;
  const usableH = height - padY * 2;
  const stepX = usableW / (points.length - 1);
  const coords = points.map((p, i) => {
    const x = padX + i * stepX;
    const acc = p.total > 0 ? p.correct / p.total : 0;
    const y = height - padY - acc * usableH;
    return { x, y, acc, date: p.date };
  });
  const linePath = coords.map((c, i) => `${i === 0 ? "M" : "L"}${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(" ");
  const areaPath = linePath + ` L${coords[coords.length - 1].x.toFixed(1)},${height - padY} L${coords[0].x.toFixed(1)},${height - padY} Z`;
  const labelInterval = Math.max(1, Math.ceil(points.length / 6));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100%", viewBox: `0 0 ${w} ${height + 20}`, style: { display: "block" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "accGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--n4-accent)", stopOpacity: "0.3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--n4-accent)", stopOpacity: "0.02" })
    ] }) }),
    [0, 25, 50, 75, 100].map((pct) => {
      const y = height - padY - pct / 100 * usableH;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: padX - 2, x2: w - 10, y1: y, y2: y, stroke: "var(--n4-bg-tertiary)", strokeWidth: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: padX - 4, y: y + 3, textAnchor: "end", fontSize: "6", fill: "var(--n4-text-muted)", children: [
          pct,
          "%"
        ] })
      ] }, pct);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: areaPath, fill: "url(#accGrad)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: linePath, fill: "none", stroke: "var(--n4-accent)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
    coords.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: c.x, cy: c.y, r: 2.5, fill: "var(--n4-accent)" }, i)),
    coords.map((c, i) => {
      if (i % labelInterval !== 0 && i !== coords.length - 1) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: c.x, y: height + 14, textAnchor: "middle", fontSize: "6.5", fill: "var(--n4-text-secondary)", children: fmtDate(c.date) }, `l${i}`);
    })
  ] });
}
const TRAINER_LABELS = {
  "vocab-dojo": "🗡️ Võ đường từ vựng",
  "kanji-academy": "🏯 Học viện hán tự",
  "grammar-arena": "📐 Đấu trường ngữ pháp",
  "listening-lab": "🎧 Phòng luyện nghe",
  "reading-room": "📖 Phòng đọc hiểu",
  "speed-challenge": "⚡ Thử thách tốc độ",
  "daily-practice": "📚 Luyện tập hằng ngày",
  "review-station": "🔄 Trạm ôn tập",
  "boss-battle": "🏆 Đấu trùm",
  "mini-game": "🎮 Trò chơi nhỏ"
};
function TrainerTable({ trainerStats, gameHistory }) {
  const entries = reactExports.useMemo(() => {
    const now = Date.now();
    const d7 = 7 * 864e5;
    return Object.entries(trainerStats || {}).map(([id, s]) => {
      const accuracy = s.total > 0 ? Math.round(s.correct / s.total * 100) : 0;
      const recent = (gameHistory || []).filter((g) => g.trainerId === id);
      let last7Correct = 0, last7Total = 0, prev7Correct = 0, prev7Total = 0;
      recent.forEach((g) => {
        const t = new Date(g.date).getTime();
        if (now - t < d7) {
          last7Correct += g.score || 0;
          last7Total += g.total || 0;
        } else if (now - t < d7 * 2) {
          prev7Correct += g.score || 0;
          prev7Total += g.total || 0;
        }
      });
      const last7Acc = last7Total > 0 ? last7Correct / last7Total * 100 : null;
      const prev7Acc = prev7Total > 0 ? prev7Correct / prev7Total * 100 : null;
      let trend = "same";
      if (last7Acc !== null && prev7Acc !== null) {
        if (last7Acc > prev7Acc + 3) trend = "up";
        else if (last7Acc < prev7Acc - 3) trend = "down";
      }
      return {
        id,
        label: TRAINER_LABELS[id] || id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        plays: s.plays,
        correct: s.correct,
        total: s.total,
        accuracy,
        trend
      };
    }).sort((a, b) => b.plays - a.plays);
  }, [trainerStats, gameHistory]);
  if (entries.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", padding: "var(--n4-sp-4)", color: "var(--n4-text-secondary)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.5rem", marginBottom: "var(--n4-sp-2)" }, children: "🎮" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "var(--n4-fs-sm)", margin: 0 }, children: "Chưa có dữ liệu bài tập." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "var(--n4-fs-xs)", margin: "var(--n4-sp-1) 0 0", color: "var(--n4-text-muted)" }, children: "Hãy chơi Trắc nghiệm, Thẻ lật hoặc các bài tập khác để xem thống kê." })
    ] });
  }
  const trendIcon = { up: "↑", down: "↓", same: "→" };
  const trendClass = { up: "var(--n4-success)", down: "var(--n4-danger)", same: "var(--n4-text-muted)" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-analytics-table n4-responsive-table", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { className: "n4-sr-only", children: "Thống kê bài tập" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Bài tập" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", style: { textAlign: "right" }, children: "Lần chơi" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", style: { textAlign: "right" }, children: "Độ chính xác" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", style: { textAlign: "center", width: 70 }, children: "Tiến trình" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", style: { textAlign: "center", width: 30 }, children: "Xu hướng" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: entries.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Bài tập", children: e.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Lần chơi", style: { textAlign: "right" }, children: e.plays }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Độ chính xác", style: { textAlign: "right" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
        color: e.accuracy >= 80 ? "var(--n4-success)" : e.accuracy >= 50 ? "var(--n4-warning)" : "var(--n4-danger)",
        fontWeight: 600
      }, children: [
        e.accuracy,
        "%"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Tiến trình", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-acc-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-acc-bar-fill", style: {
        width: `${e.accuracy}%`,
        background: e.accuracy >= 80 ? "var(--n4-success)" : e.accuracy >= 50 ? "var(--n4-warning)" : "var(--n4-danger)"
      } }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Xu hướng", style: { textAlign: "center", fontWeight: 700, color: trendClass[e.trend] }, children: trendIcon[e.trend] })
    ] }, e.id)) })
  ] }) });
}
function SectionProgress() {
  const { srs, bookmarks } = useLearningStore(useShallow((s) => ({ srs: s.srs, bookmarks: s.bookmarks })));
  const { vocab, kanji, grammar } = useDataStore(useShallow((s) => ({ vocab: s.vocab, kanji: s.kanji, grammar: s.grammar })));
  const [expanded, setExpanded] = reactExports.useState({});
  const computeCategory = reactExports.useMemo(() => {
    const buildSections = (data, prefix, nameKey, entryKey, itemKey) => {
      if (!(data == null ? void 0 : data.length)) return { total: 0, studied: 0, sections: [] };
      let total = 0, studied = 0;
      const sections = data.map((sec, idx) => {
        const entries = sec[entryKey] || sec.entries || [];
        const secTotal = entries.length;
        let secStudied = 0;
        entries.forEach((e) => {
          const rawKey = prefix === "grammar" ? getGrammarLabel(e) : prefix === "vocab" ? getVocabLabel(e) : e[itemKey] || e.word || e.kanji || "";
          const key = makeLearningKey(prefix, rawKey);
          if (srs[key] !== void 0 || bookmarks[key]) secStudied++;
        });
        total += secTotal;
        studied += secStudied;
        return {
          name: sec[nameKey] || sec.name || sec.title || `§${idx + 1}`,
          total: secTotal,
          studied: secStudied,
          pct: secTotal > 0 ? Math.round(secStudied / secTotal * 100) : 0
        };
      });
      return { total, studied, sections };
    };
    return {
      vocabData: buildSections(vocab, "vocab", "name", "entries", "word"),
      kanjiData: buildSections(kanji, "kanji", "name", "entries", "kanji"),
      grammarData: buildSections(grammar, "grammar", "name", "entries", "title")
    };
  }, [srs, bookmarks, vocab, kanji, grammar]);
  const { vocabData, kanjiData, grammarData } = computeCategory;
  const categories = [
    { key: "vocab", icon: "📚", label: "Từ vựng", color: "var(--n4-accent)", ...vocabData },
    { key: "kanji", icon: "漢", label: "Kanji", color: "var(--n4-neon-red, #ef4444)", ...kanjiData },
    { key: "grammar", icon: "📐", label: "Ngữ pháp", color: "var(--n4-neon-blue, #3b82f6)", ...grammarData }
  ];
  const overallTotal = categories.reduce((s, c) => s + c.total, 0);
  const overallStudied = categories.reduce((s, c) => s + c.studied, 0);
  const overallPct = overallTotal > 0 ? Math.round(overallStudied / overallTotal * 100) : 0;
  if (overallTotal === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", padding: "var(--n4-sp-4)", color: "var(--n4-text-secondary)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.5rem", marginBottom: "var(--n4-sp-2)" }, children: "📚" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "var(--n4-fs-sm)", margin: 0 }, children: "Đang tải dữ liệu nội dung..." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--n4-sp-3)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "var(--n4-fs-sm)", color: "var(--n4-text-secondary)" }, children: "Tổng tiến trình" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "var(--n4-fs-sm)", fontWeight: 600 }, children: [
        overallStudied,
        "/",
        overallTotal,
        " (",
        overallPct,
        "%)"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 8, borderRadius: 4, background: "var(--n4-bg-tertiary)", overflow: "hidden", marginBottom: "var(--n4-sp-4)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "100%", width: `${overallPct}%`, borderRadius: 4, background: "var(--n4-accent)", transition: "width 0.3s" } }) }),
    categories.map((cat) => {
      const catPct = cat.total > 0 ? Math.round(cat.studied / cat.total * 100) : 0;
      const isExpanded = expanded[cat.key];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "var(--n4-sp-3)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setExpanded((prev) => ({ ...prev, [cat.key]: !prev[cat.key] })),
            "aria-expanded": Boolean(isExpanded),
            style: { display: "flex", width: "100%", border: 0, background: "transparent", color: "inherit", alignItems: "center", gap: "var(--n4-sp-2)", cursor: "pointer", padding: "var(--n4-sp-2) 0" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1rem" }, children: cat.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: 1, fontSize: "var(--n4-fs-sm)", fontWeight: 600 }, children: cat.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "var(--n4-fs-xs)", color: "var(--n4-text-secondary)" }, children: [
                cat.studied,
                "/",
                cat.total
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "var(--n4-fs-sm)", fontWeight: 700, color: cat.color, minWidth: 40, textAlign: "right" }, children: [
                catPct,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.7rem", color: "var(--n4-text-muted)", transition: "transform 0.2s", transform: isExpanded ? "rotate(90deg)" : "none" }, children: "▶" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 5, borderRadius: 3, background: "var(--n4-bg-tertiary)", overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "100%", width: `${catPct}%`, borderRadius: 3, background: cat.color, transition: "width 0.3s" } }) }),
        isExpanded && cat.sections.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "var(--n4-sp-2)", paddingLeft: "var(--n4-sp-4)" }, children: cat.sections.map((sec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "var(--n4-sp-2)", marginBottom: 4, fontSize: "var(--n4-fs-xs)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: 1, color: "var(--n4-text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: sec.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "var(--n4-text-muted)", minWidth: 50, textAlign: "right" }, children: [
            sec.studied,
            "/",
            sec.total
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 60, height: 4, borderRadius: 2, background: "var(--n4-bg-tertiary)", overflow: "hidden", flexShrink: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "100%", width: `${sec.pct}%`, borderRadius: 2, background: cat.color, transition: "width 0.3s" } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { minWidth: 28, textAlign: "right", fontWeight: 600, color: sec.pct >= 80 ? "var(--n4-success)" : sec.pct >= 40 ? cat.color : "var(--n4-text-muted)" }, children: [
            sec.pct,
            "%"
          ] })
        ] }, i)) })
      ] }, cat.key);
    })
  ] });
}
function WeeklyComparison({ dailyData }) {
  const thisWeek = dailyData.slice(-7);
  const prevWeek = dailyData.slice(-14, -7);
  const sum = (arr) => arr.reduce((a, d) => ({ total: a.total + d.total, correct: a.correct + d.correct }), { total: 0, correct: 0 });
  const tw = sum(thisWeek);
  const pw = sum(prevWeek);
  const twAcc = tw.total > 0 ? Math.round(tw.correct / tw.total * 100) : 0;
  const pwAcc = pw.total > 0 ? Math.round(pw.correct / pw.total * 100) : 0;
  const twActive = thisWeek.filter((d) => d.total > 0).length;
  const pwActive = prevWeek.filter((d) => d.total > 0).length;
  const delta = (current, prev) => {
    const diff = current - prev;
    if (diff > 0) return { text: `+${diff}`, cls: "up" };
    if (diff < 0) return { text: `${diff}`, cls: "down" };
    return { text: "—", cls: "same" };
  };
  const metrics = [
    { label: "Câu hỏi", current: tw.total, prev: pw.total },
    { label: "Chính xác", current: twAcc, prev: pwAcc, suffix: "%" },
    { label: "Ngày hoạt động", current: twActive, prev: pwActive }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-compare", children: metrics.map((m) => {
    const d = delta(m.current, m.prev);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-compare-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-compare-label", children: m.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-compare-values", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-analytics-compare-current", children: [
          m.current,
          m.suffix || ""
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `n4-analytics-compare-delta ${d.cls}`, children: [
          d.text,
          m.suffix || ""
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-compare-prev", children: [
        "Tuần trước: ",
        m.prev,
        m.suffix || ""
      ] })
    ] }, m.label);
  }) });
}
function SRSHealth({ srs }) {
  const boxDist = reactExports.useMemo(() => {
    const boxes = [0, 0, 0, 0, 0, 0];
    const entries = Object.entries(srs || {});
    entries.forEach(([, val]) => {
      const box = typeof val === "object" ? val.box || 0 : typeof val === "number" ? Math.min(val, 5) : 0;
      boxes[Math.min(Math.max(box, 0), 5)]++;
    });
    return boxes;
  }, [srs]);
  const total = boxDist.reduce((a, b) => a + b, 0);
  const mastered = boxDist[4] + boxDist[5];
  const masteryPct = total > 0 ? Math.round(mastered / total * 100) : 0;
  const boxLabels = ["Mới", "Hộp 1", "Hộp 2", "Hộp 3", "Hộp 4", "Thuộc"];
  const boxColors = ["var(--n4-danger)", "var(--n4-warning)", "#f0a030", "var(--n4-accent)", "var(--n4-success)", "var(--n4-neon-green, #10b981)"];
  if (total === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: "var(--n4-sp-3)", color: "var(--n4-text-secondary)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "var(--n4-fs-sm)", margin: 0 }, children: "Chưa có từ trong SRS. Học và đánh dấu từ vựng để bắt đầu!" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--n4-sp-3)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "var(--n4-fs-sm)", color: "var(--n4-text-secondary)" }, children: [
        "Tổng: ",
        total,
        " mục"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "var(--n4-fs-sm)", fontWeight: 600 }, children: [
        "Thuộc: ",
        mastered,
        "/",
        total,
        " (",
        masteryPct,
        "%)"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-srs-boxes", children: boxDist.map((count, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-srs-box", style: { borderBottom: `3px solid ${boxColors[i]}` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-srs-box-count", style: { color: boxColors[i] }, children: count }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-srs-box-label", children: boxLabels[i] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 6, borderRadius: 3, background: "var(--n4-bg-tertiary)", overflow: "hidden", marginTop: "var(--n4-sp-3)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "100%", width: `${masteryPct}%`, borderRadius: 3, background: "var(--n4-success)", transition: "width 0.3s" } }) })
  ] });
}
function WeekdayDistribution({ dailyActiveMinutes }) {
  const weekdayData = reactExports.useMemo(() => {
    const totals = [0, 0, 0, 0, 0, 0, 0];
    const counts = [0, 0, 0, 0, 0, 0, 0];
    Object.entries(dailyActiveMinutes || {}).forEach(([key, min]) => {
      const d = new Date(key);
      if (isNaN(d.getTime())) return;
      const dow = (d.getDay() + 6) % 7;
      totals[dow] += min;
      counts[dow]++;
    });
    return totals.map((t, i) => ({
      total: t,
      avg: counts[i] > 0 ? Math.round(t / counts[i]) : 0
    }));
  }, [dailyActiveMinutes]);
  const maxAvg = Math.max(1, ...weekdayData.map((d) => d.avg));
  const dayLabels = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  const peakIdx = weekdayData.reduce((best, d, i, arr) => d.avg > arr[best].avg ? i : best, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-weekday", children: weekdayData.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "n4-analytics-weekday-bar",
        style: {
          height: `${d.avg / maxAvg * 100}%`,
          opacity: i === peakIdx ? 1 : 0.7,
          background: i === peakIdx ? "var(--n4-accent)" : void 0
        },
        title: `${dayLabels[i]}: TB ${d.avg} phút`
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-weekday-labels", children: dayLabels.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: i === peakIdx ? 700 : 400, color: i === peakIdx ? "var(--n4-accent)" : void 0 }, children: l }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "var(--n4-fs-xs)", color: "var(--n4-text-muted)", marginTop: "var(--n4-sp-2)", textAlign: "center" }, children: [
      "Ngày học nhiều nhất: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--n4-accent)" }, children: dayLabels[peakIdx] }),
      " (TB ",
      weekdayData[peakIdx].avg,
      " phút/ngày)"
    ] })
  ] });
}
function SessionHistory({ gameHistory }) {
  const [page, setPage] = reactExports.useState(0);
  const perPage = 10;
  if (!(gameHistory == null ? void 0 : gameHistory.length)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", padding: "var(--n4-sp-4)", color: "var(--n4-text-secondary)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.5rem", marginBottom: "var(--n4-sp-2)" }, children: "📝" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "var(--n4-fs-sm)", margin: 0 }, children: "Chưa có lịch sử phiên chơi." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "var(--n4-fs-xs)", margin: "var(--n4-sp-1) 0 0", color: "var(--n4-text-muted)" }, children: "Hoàn thành bài tập để xem chi tiết từng phiên." })
    ] });
  }
  const sorted = [...gameHistory].reverse();
  const totalPages = Math.ceil(sorted.length / perPage);
  const pageItems = sorted.slice(page * perPage, (page + 1) * perPage);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-analytics-table n4-responsive-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { className: "n4-sr-only", children: "Lịch sử học gần đây" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Ngày" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Bài tập" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", style: { textAlign: "right" }, children: "Kết quả" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", style: { textAlign: "right" }, children: "Thời gian" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", style: { textAlign: "right" }, children: "Chính xác" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: pageItems.map((s, i) => {
        var _a;
        const acc = s.total > 0 ? Math.round(s.score / s.total * 100) : 0;
        const label = TRAINER_LABELS[s.trainerId] || ((_a = s.trainerId) == null ? void 0 : _a.replace(/-/g, " ")) || "—";
        const timeStr = s.timeMs ? `${Math.round(s.timeMs / 1e3)}s` : "—";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Ngày", style: { fontSize: "var(--n4-fs-xs)", whiteSpace: "nowrap" }, children: fmtDate(s.date) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Bài tập", style: { fontSize: "var(--n4-fs-xs)" }, children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { "data-label": "Kết quả", style: { textAlign: "right", fontSize: "var(--n4-fs-xs)" }, children: [
            s.score,
            "/",
            s.total
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Thời gian", style: { textAlign: "right", fontSize: "var(--n4-fs-xs)", color: "var(--n4-text-secondary)" }, children: timeStr }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-label": "Chính xác", style: { textAlign: "right" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
            color: acc >= 80 ? "var(--n4-success)" : acc >= 50 ? "var(--n4-warning)" : "var(--n4-danger)",
            fontWeight: 600,
            fontSize: "var(--n4-fs-xs)"
          }, children: [
            acc,
            "%"
          ] }) })
        ] }, page * perPage + i);
      }) })
    ] }) }),
    totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-pagination", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage((p) => Math.max(0, p - 1)), disabled: page === 0, children: "←" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "var(--n4-fs-xs)", color: "var(--n4-text-secondary)", padding: "2px 6px" }, children: [
        page + 1,
        "/",
        totalPages
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage((p) => Math.min(totalPages - 1, p + 1)), disabled: page >= totalPages - 1, children: "→" })
    ] })
  ] });
}
function ActiveTimeCard({ dailyActiveMinutes }) {
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const todayMin = (dailyActiveMinutes || {})[today] || 0;
  const now = /* @__PURE__ */ new Date();
  let week = 0, month = 0;
  for (let i = 0; i < 30; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const min = (dailyActiveMinutes || {})[key] || 0;
    month += min;
    if (i < 7) week += min;
  }
  if (todayMin === 0 && month === 0) return null;
  const formatTime = (min) => {
    if (min < 60) return `${min} phút`;
    const h = Math.floor(min / 60);
    const m = min % 60;
    return m > 0 ? `${h}h ${m}p` : `${h} giờ`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "var(--n4-sp-4)", flexWrap: "wrap" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatTime(todayMin) }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-text-secondary)", fontSize: "var(--n4-fs-xs)" }, children: "hôm nay" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatTime(week) }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-text-secondary)", fontSize: "var(--n4-fs-xs)" }, children: "7 ngày" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatTime(month) }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-text-secondary)", fontSize: "var(--n4-fs-xs)" }, children: "30 ngày" })
    ] })
  ] });
}
function EngagementKPIs({ studyHistory, gameHistory, dailyActiveMinutes }) {
  const kpis = reactExports.useMemo(() => {
    const now = /* @__PURE__ */ new Date();
    now.toISOString().slice(0, 10);
    let dau7 = 0, dau30 = 0;
    for (let i = 0; i < 30; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      const entry = studyHistory[key];
      const active = entry && (typeof entry === "number" ? entry > 0 : entry.total > 0);
      if (active) {
        dau30++;
        if (i < 7) dau7++;
      }
    }
    const wau = /* @__PURE__ */ new Set();
    for (let i = 0; i < 28; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      const entry = studyHistory[key];
      const active = entry && (typeof entry === "number" ? entry > 0 : entry.total > 0);
      if (active) wau.add(Math.floor(i / 7));
    }
    const recentGames = (gameHistory || []).filter((g) => {
      if (!(g == null ? void 0 : g.date)) return false;
      const diff = (now - new Date(g.date)) / 864e5;
      return diff < 30 && g.timeMs;
    });
    const avgSessionMs = recentGames.length > 0 ? recentGames.reduce((s, g) => s + (g.timeMs || 0), 0) / recentGames.length : 0;
    let totalMinWeek = 0, activeDaysWeek = 0;
    for (let i = 0; i < 7; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      const min = (dailyActiveMinutes || {})[key] || 0;
      totalMinWeek += min;
      if (min > 0) activeDaysWeek++;
    }
    const avgMinPerDay = activeDaysWeek > 0 ? Math.round(totalMinWeek / activeDaysWeek) : 0;
    return { dau7, dau30, wau: wau.size, avgSessionMs, avgMinPerDay, totalSessions: recentGames.length };
  }, [studyHistory, gameHistory, dailyActiveMinutes]);
  const fmtTime = (ms) => {
    if (!ms) return "—";
    const s = Math.round(ms / 1e3);
    return s < 60 ? `${s}s` : `${Math.floor(s / 60)}m ${s % 60}s`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-kpi-grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-kpi", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-kpi-value", children: [
        kpis.dau7,
        "/7"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-kpi-label", children: "DAU (7 ngày)" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-kpi", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-kpi-value", children: [
        kpis.dau30,
        "/30"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-kpi-label", children: "DAU (30 ngày)" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-kpi", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-kpi-value", children: [
        kpis.wau,
        "/4"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-kpi-label", children: "WAU (4 tuần)" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-kpi", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-kpi-value", children: fmtTime(kpis.avgSessionMs) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-kpi-label", children: "TB phiên chơi" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-kpi", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-kpi-value", children: [
        kpis.avgMinPerDay,
        "p"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-kpi-label", children: "TB phút/ngày" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-kpi", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-kpi-value", children: kpis.totalSessions }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-kpi-label", children: "Phiên 30 ngày" })
    ] })
  ] });
}
function Analytics() {
  const navigate = useNavigate();
  const { xp, level, streak, studyHistory, trainerStats, todayCorrect, todayWrong, achievements, gameHistory, dailyActiveMinutes, srs, bookmarks } = useLearningStore(
    useShallow((s) => ({
      xp: s.xp,
      level: s.level,
      streak: s.streak,
      studyHistory: s.studyHistory,
      trainerStats: s.trainerStats,
      todayCorrect: s.todayCorrect,
      todayWrong: s.todayWrong,
      achievements: s.achievements,
      gameHistory: s.gameHistory,
      dailyActiveMinutes: s.dailyActiveMinutes,
      srs: s.srs,
      bookmarks: s.bookmarks
    }))
  );
  const { vocab, kanji, grammar } = useDataStore(useShallow((s) => ({ vocab: s.vocab, kanji: s.kanji, grammar: s.grammar })));
  const days30 = reactExports.useMemo(() => lastNDays(30), []);
  const dailyData = reactExports.useMemo(() => {
    return days30.map((date) => {
      const entry = resolveEntry(studyHistory[date]);
      return { date, ...entry };
    });
  }, [days30, studyHistory]);
  const totalStudied = reactExports.useMemo(() => dailyData.reduce((s, d) => s + d.total, 0), [dailyData]);
  const totalCorrect = reactExports.useMemo(() => dailyData.reduce((s, d) => s + d.correct, 0), [dailyData]);
  const activeDays = reactExports.useMemo(() => dailyData.filter((d) => d.total > 0).length, [dailyData]);
  const avgAccuracy = totalStudied > 0 ? Math.round(totalCorrect / totalStudied * 100) : 0;
  const achievementCount = Object.keys(achievements || {}).length;
  const todayTotal = todayCorrect + todayWrong;
  const todayAccuracy = todayTotal > 0 ? Math.round(todayCorrect / todayTotal * 100) : 0;
  const bestStreak = reactExports.useMemo(() => {
    const keys = Object.keys(studyHistory || {}).sort();
    if (keys.length === 0) return 0;
    let max = 1, cur = 1;
    for (let i = 1; i < keys.length; i++) {
      const prev = new Date(keys[i - 1]);
      const curr = new Date(keys[i]);
      const diff = (curr - prev) / 864e5;
      if (diff === 1) {
        cur++;
        max = Math.max(max, cur);
      } else if (diff > 1) {
        cur = 1;
      }
    }
    return Math.max(max, cur);
  }, [studyHistory]);
  const totalItems = reactExports.useMemo(() => {
    const v = vocab.reduce((s, sec) => {
      var _a;
      return s + (((_a = sec.entries) == null ? void 0 : _a.length) || 0);
    }, 0);
    const k = kanji.reduce((s, sec) => {
      var _a;
      return s + (((_a = sec.entries) == null ? void 0 : _a.length) || 0);
    }, 0);
    const g = grammar.reduce((s, sec) => {
      var _a, _b, _c;
      return s + (((_a = sec.entries) == null ? void 0 : _a.length) || ((_b = sec.patterns) == null ? void 0 : _b.length) || ((_c = sec.items) == null ? void 0 : _c.length) || 0);
    }, 0);
    return v + k + g;
  }, [vocab, kanji, grammar]);
  const itemsStudied = reactExports.useMemo(() => {
    const keys = /* @__PURE__ */ new Set([...Object.keys(srs || {}), ...Object.keys(bookmarks || {})]);
    return keys.size;
  }, [srs, bookmarks]);
  const coveragePct = totalItems > 0 ? Math.round(itemsStudied / totalItems * 100) : 0;
  const estScore = reactExports.useMemo(() => {
    if (totalStudied === 0) return "—";
    const score = Math.round(avgAccuracy / 100 * (coveragePct / 100) * 180);
    return Math.min(180, Math.max(0, score));
  }, [avgAccuracy, coveragePct, totalStudied]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page", style: { padding: "var(--n4-sp-4)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "var(--n4-sp-3)", marginBottom: "var(--n4-sp-4)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-icon", onClick: () => navigate("/"), title: "Quay lại", children: "←" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { margin: 0, fontSize: "var(--n4-fs-xl)", fontWeight: 700 }, children: "📊 Phân tích học tập" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-summary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-stat-value", children: xp }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-stat-label", children: "Tổng XP" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-stat-value", children: [
          "Cấp độ ",
          level
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-stat-label", children: "Cấp độ" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-stat-value", children: [
          streak,
          "🔥"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-stat-label", children: "Chuỗi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-stat-sub", children: [
          "Kỷ lục: ",
          bestStreak
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-stat-value", children: achievementCount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-stat-label", children: "Huy hiệu" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-stat-value", children: itemsStudied }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-stat-label", children: "Mục đã học" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-stat-sub", children: [
          coveragePct,
          "% bao phủ"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-stat-value", children: [
          avgAccuracy,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-stat-label", children: "Chính xác 30 ngày" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-stat-value", children: activeDays }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-stat-label", children: "Ngày hoạt động" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-stat-sub", children: "/ 30 ngày" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-analytics-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-stat-value", children: estScore }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-stat-label", children: "Điểm JLPT ước tính" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-analytics-stat-sub", children: "/ 180" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "var(--n4-sp-4)", marginBottom: "var(--n4-sp-4)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "var(--n4-fs-md)" }, children: "📅 Hôm nay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "var(--n4-sp-4)", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: todayCorrect }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-success)" }, children: "đúng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: todayWrong }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-danger)" }, children: "sai" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            todayAccuracy,
            "%"
          ] }),
          " chính xác"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: todayTotal }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-text-secondary)" }, children: "tổng câu" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "var(--n4-sp-4)", marginBottom: "var(--n4-sp-4)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "var(--n4-fs-md)" }, children: "📊 Chỉ số tương tác" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EngagementKPIs, { studyHistory, gameHistory, dailyActiveMinutes })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "var(--n4-sp-4)", marginBottom: "var(--n4-sp-4)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "var(--n4-fs-md)" }, children: "📊 So sánh tuần" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WeeklyComparison, { dailyData })
    ] }),
    dailyActiveMinutes && Object.keys(dailyActiveMinutes).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "var(--n4-sp-4)", marginBottom: "var(--n4-sp-4)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "var(--n4-fs-md)" }, children: "⏱️ Thời gian học tập" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveTimeCard, { dailyActiveMinutes })
    ] }),
    dailyActiveMinutes && Object.keys(dailyActiveMinutes).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "var(--n4-sp-4)", marginBottom: "var(--n4-sp-4)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "var(--n4-fs-md)" }, children: "📅 Phân bố thời gian theo ngày" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WeekdayDistribution, { dailyActiveMinutes })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "var(--n4-sp-4)", marginBottom: "var(--n4-sp-4)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "var(--n4-fs-md)" }, children: "🧠 SRS — Ôn tập cách quãng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SRSHealth, { srs })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "var(--n4-sp-4)", marginBottom: "var(--n4-sp-4)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "var(--n4-fs-md)" }, children: "📚 Tiến trình theo chủ đề" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionProgress, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "var(--n4-sp-4)", marginBottom: "var(--n4-sp-4)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "var(--n4-fs-md)" }, children: "📈 Hoạt động 30 ngày" }),
      totalStudied > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "var(--n4-sp-4)", fontSize: "var(--n4-fs-sm)", color: "var(--n4-text-secondary)", marginBottom: "var(--n4-sp-3)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            totalStudied,
            " câu"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            activeDays,
            " ngày"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            avgAccuracy,
            "% TB"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BarChart, { data: dailyData, labelKey: "date", valueKey: "total" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: "var(--n4-sp-3)", color: "var(--n4-text-secondary)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "var(--n4-fs-sm)", margin: 0 }, children: "Chưa có hoạt động trong 30 ngày qua." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "var(--n4-sp-4)", marginBottom: "var(--n4-sp-4)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "var(--n4-fs-md)" }, children: "🎯 Độ chính xác theo ngày" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccuracyChart, { data: dailyData })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "var(--n4-sp-4)", marginBottom: "var(--n4-sp-4)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "var(--n4-fs-md)" }, children: "🎮 Hiệu suất bài tập" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerTable, { trainerStats, gameHistory })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "var(--n4-sp-4)", marginBottom: "var(--n4-sp-4)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "var(--n4-fs-md)" }, children: "📝 Lịch sử phiên chơi" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SessionHistory, { gameHistory })
    ] })
  ] });
}
export {
  Analytics as default
};
