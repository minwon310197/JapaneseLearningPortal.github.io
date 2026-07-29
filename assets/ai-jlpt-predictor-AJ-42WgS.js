import { r as reactExports, j as jsxRuntimeExports, u as useShallow } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, b as useDataStore } from "./feature-3d-CFvJkEt3.js";
import { aP as getLearningKeyType } from "./feature-3d-hud-CYISTbY6.js";
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-supabase-DTEAj5J1.js";
const JLPT = {
  N5: { kanji: 100, vocab: 800, grammar: 70, label: "N5", total: 180 },
  N4: { kanji: 300, vocab: 1500, grammar: 150, label: "N4", total: 180 }
};
const READINESS_MAP = {
  "not-ready": { icon: "🔴", label: "Chưa sẵn sàng", color: "var(--n4-neon-red)" },
  "almost": { icon: "🟡", label: "Gần sẵn sàng", color: "var(--n4-neon-yellow, #EAB308)" },
  "ready": { icon: "🟢", label: "Sẵn sàng", color: "var(--n4-neon-green)" },
  "confident": { icon: "🌟", label: "Tự tin", color: "var(--n4-neon-blue)" }
};
function gradeColor(level) {
  const map = { A: "var(--n4-neon-green)", B: "var(--n4-neon-blue)", C: "var(--n4-neon-yellow, #EAB308)", D: "var(--n4-neon-red)" };
  return map[level] || "var(--n4-text-muted)";
}
function gradeLevel(pct) {
  return pct >= 80 ? "A" : pct >= 60 ? "B" : pct >= 40 ? "C" : "D";
}
function useJLPTScores() {
  const { srs, trainerStats, bookmarks, studyHistory } = useLearningStore(
    useShallow((s) => ({ srs: s.srs, trainerStats: s.trainerStats, bookmarks: s.bookmarks, studyHistory: s.studyHistory }))
  );
  const { vocab, kanji, grammar } = useDataStore(
    useShallow((s) => ({ vocab: s.vocab, kanji: s.kanji, grammar: s.grammar }))
  );
  return reactExports.useMemo(() => {
    const totalKanji = kanji.reduce((sum, s) => {
      var _a;
      return sum + (((_a = s.entries) == null ? void 0 : _a.length) || 0);
    }, 0);
    const totalVocab = vocab.reduce((sum, s) => {
      var _a;
      return sum + (((_a = s.entries) == null ? void 0 : _a.length) || 0);
    }, 0);
    const totalGrammar = grammar.reduce((sum, s) => {
      var _a, _b, _c;
      return sum + (((_a = s.patterns) == null ? void 0 : _a.length) || ((_b = s.items) == null ? void 0 : _b.length) || ((_c = s.entries) == null ? void 0 : _c.length) || 0);
    }, 0);
    const srsEntries = Object.entries(srs || {});
    const srsTotal = srsEntries.length;
    const srsMastered = srsEntries.filter(([, lv]) => lv >= 3).length;
    const srsLearning = srsEntries.filter(([, lv]) => lv >= 1 && lv <= 2).length;
    const srsNew = srsEntries.filter(([, lv]) => lv === 0).length;
    const srsKanji = srsEntries.filter(([k]) => getLearningKeyType(k) === "kanji");
    const srsVocab = srsEntries.filter(([k]) => getLearningKeyType(k) === "vocab");
    const srsGrammar = srsEntries.filter(([k]) => getLearningKeyType(k) === "grammar");
    const srsKanjiCount = srsKanji.length;
    const srsVocabCount = srsVocab.length;
    const srsGrammarCount = srsGrammar.length;
    const srsKanjiMastered = srsKanji.filter(([, lv]) => lv >= 3).length;
    const srsVocabMastered = srsVocab.filter(([, lv]) => lv >= 3).length;
    const srsGrammarMastered = srsGrammar.filter(([, lv]) => lv >= 3).length;
    const catAcc = (ids) => {
      let c = 0, t = 0;
      ids.forEach((id) => {
        const st = trainerStats[id];
        if (st) {
          c += st.correct;
          t += st.total;
        }
      });
      return { accuracy: t > 0 ? c / t : 0, correct: c, total: t, plays: ids.reduce((s, id) => {
        var _a;
        return s + (((_a = trainerStats[id]) == null ? void 0 : _a.plays) || 0);
      }, 0) };
    };
    const vocabAcc = catAcc(["vocab-dojo"]);
    const kanjiAcc = catAcc(["kanji-academy"]);
    const grammarAcc = catAcc(["grammar-arena", "conjugation-dojo"]);
    const listeningAcc = catAcc(["listening-lab"]);
    const readingAcc = catAcc(["reading-room"]);
    const studyDays = Object.keys(studyHistory || {}).filter((k) => {
      const e = studyHistory[k];
      return e && (typeof e === "number" ? e > 0 : (e.total || 0) > 0);
    }).length;
    const bmCount = Object.keys(bookmarks || {}).length;
    const totalPlays = Object.values(trainerStats || {}).reduce((s, st) => s + (st.plays || 0), 0);
    const totalQuestions = Object.values(trainerStats || {}).reduce((s, st) => s + (st.total || 0), 0);
    function calcSection(target, coverage, mastery, accuracy, sectionMax) {
      const coverageRatio = Math.min(1, coverage / Math.max(1, target));
      const masteryRatio = Math.min(1, mastery / Math.max(1, target));
      const accFactor = accuracy > 0 ? accuracy : coverage > 0 ? 0.3 : 0;
      const raw = (masteryRatio * 0.5 + coverageRatio * 0.2 + accFactor * 0.3) * sectionMax;
      return Math.round(Math.min(sectionMax, raw));
    }
    function calcLevel(target) {
      const t = JLPT[target];
      const vocabCoverage = Math.min(t.vocab, srsVocabCount);
      const vocabMastery = Math.min(t.vocab, srsVocabMastered);
      const vocabScore = calcSection(t.vocab, vocabCoverage, vocabMastery, vocabAcc.accuracy, 60);
      const gramCovered = srsGrammarCount > 0 ? srsGrammarCount : Math.round(totalGrammar * Math.min(1, grammarAcc.plays / 10));
      const gramMastered = srsGrammarCount > 0 ? srsGrammarMastered : Math.round(gramCovered * grammarAcc.accuracy);
      const grammarCoverage = Math.min(t.grammar, gramCovered);
      const grammarMastery = Math.min(t.grammar, gramMastered);
      const grammarScore = calcSection(t.grammar, grammarCoverage, grammarMastery, grammarAcc.accuracy, 60);
      const readingCoverage = Math.min(t.vocab, srsVocabCount);
      const readingScore = calcSection(t.vocab, readingCoverage, vocabMastery, readingAcc.accuracy, 60);
      const listeningScore = calcSection(t.vocab, vocabCoverage, vocabMastery, listeningAcc.accuracy, 60);
      const totalScore = vocabScore + grammarScore + readingScore + listeningScore;
      const vocabGrammarCombined = vocabScore + grammarScore;
      const passing = totalScore >= 90 && vocabGrammarCombined >= 38 && readingScore >= 19 && listeningScore >= 19;
      const passingChance = Math.min(100, Math.round(
        Math.min(1, totalScore / 90) * 40 + Math.min(1, vocabGrammarCombined / 38) * 20 + Math.min(1, readingScore / 19) * 20 + Math.min(1, listeningScore / 19) * 20
      ));
      const readiness = passingChance >= 85 ? "confident" : passingChance >= 65 ? "ready" : passingChance >= 40 ? "almost" : "not-ready";
      const kanjiPct = Math.round(Math.min(100, srsKanjiCount / t.kanji * 100));
      const vocabPct = Math.round(Math.min(100, srsVocabCount / t.vocab * 100));
      const grammarPct = Math.round(Math.min(100, gramCovered / t.grammar * 100));
      return {
        totalScore,
        passingChance,
        readiness,
        passing,
        sections: {
          vocabulary: { score: vocabScore, max: 60, level: gradeLevel(vocabScore / 60 * 100), label: "Từ vựng · Chữ" },
          grammar: { score: grammarScore, max: 60, level: gradeLevel(grammarScore / 60 * 100), label: "Ngữ pháp" },
          reading: { score: readingScore, max: 60, level: gradeLevel(readingScore / 60 * 100), label: "Đọc hiểu" },
          listening: { score: listeningScore, max: 60, level: gradeLevel(listeningScore / 60 * 100), label: "Nghe hiểu" }
        },
        coverage: { kanji: kanjiPct, vocab: vocabPct, grammar: grammarPct },
        targets: t
      };
    }
    const n5 = calcLevel("N5");
    const n4 = calcLevel("N4");
    return {
      n5,
      n4,
      stats: {
        srsTotal,
        srsMastered,
        srsLearning,
        srsNew,
        totalKanji,
        totalVocab,
        totalGrammar,
        srsKanjiCount,
        srsVocabCount,
        srsGrammarCount,
        srsKanjiMastered,
        srsVocabMastered,
        srsGrammarMastered,
        studyDays,
        bmCount,
        totalPlays,
        totalQuestions,
        vocabAcc,
        kanjiAcc,
        grammarAcc,
        listeningAcc,
        readingAcc
      }
    };
  }, [srs, trainerStats, bookmarks, studyHistory, vocab, kanji, grammar]);
}
function ScoreBar({ label, score, max, level }) {
  const pct = max > 0 ? score / max * 100 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginBottom: 6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-bar", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-ai-bar-label", style: { display: "flex", alignItems: "center", gap: 4, minWidth: 100 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-ai-pill", style: { "--pill-color": gradeColor(level), padding: "0 6px", fontSize: "0.7rem" }, children: level }),
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-bar-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-bar-fill", style: { width: `${pct}%`, "--bar-color": gradeColor(level) } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-ai-bar-value", children: [
      score,
      "/",
      max
    ] })
  ] }) });
}
function CoverageBar({ label, pct, detail }) {
  const color = pct >= 80 ? "var(--n4-neon-green)" : pct >= 50 ? "var(--n4-neon-blue)" : pct >= 25 ? "var(--n4-neon-yellow, #EAB308)" : "var(--n4-neon-red)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 8 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 600, color }, children: [
        pct,
        "% ",
        detail && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 400, color: "var(--n4-text-muted)" }, children: [
          "(",
          detail,
          ")"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 6, borderRadius: 3, background: "var(--n4-bg-tertiary)", overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "100%", width: `${pct}%`, borderRadius: 3, background: color, transition: "width 0.3s" } }) })
  ] });
}
function LevelCard({ level, data, stats }) {
  const readiness = READINESS_MAP[data.readiness];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { marginBottom: "var(--n4-sp-3)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "var(--n4-sp-3)", marginBottom: "var(--n4-sp-3)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2.2rem", fontWeight: 800, background: `linear-gradient(135deg, ${readiness.color}, var(--n4-neon-purple))`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1 }, children: data.totalScore }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.7rem", color: "var(--n4-text-muted)" }, children: "/180" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontWeight: 700, fontSize: "1.1rem", marginBottom: 2 }, children: [
          "JLPT ",
          level
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 10px", borderRadius: 100, background: `color-mix(in srgb, ${readiness.color} 15%, transparent)`, color: readiness.color, fontSize: "0.78rem", fontWeight: 600 }, children: [
          readiness.icon,
          " ",
          readiness.label,
          " — ",
          data.passingChance,
          "% khả năng đậu"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "var(--n4-sp-3)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8rem", fontWeight: 600, marginBottom: 6, color: "var(--n4-text-secondary)" }, children: "📊 Điểm từng phần" }),
      Object.entries(data.sections).map(([key, sec]) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreBar, { label: sec.label, score: sec.score, max: sec.max, level: sec.level }, key))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8rem", fontWeight: 600, marginBottom: 6, color: "var(--n4-text-secondary)" }, children: "📚 Mức độ bao phủ nội dung" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CoverageBar, { label: `Kanji (mục tiêu: ${data.targets.kanji})`, pct: data.coverage.kanji, detail: `${stats.srsKanjiCount} đã học · ${stats.srsKanjiMastered} thuộc` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CoverageBar, { label: `Từ vựng (mục tiêu: ${data.targets.vocab})`, pct: data.coverage.vocab, detail: `${stats.srsVocabCount} đã học · ${stats.srsVocabMastered} thuộc` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CoverageBar, { label: `Ngữ pháp (mục tiêu: ${data.targets.grammar})`, pct: data.coverage.grammar, detail: `${stats.srsGrammarCount} đã học · ${stats.srsGrammarMastered} thuộc` })
    ] })
  ] });
}
function AIJLPTPredictor() {
  const scores = useJLPTScores();
  const [activeTab, setActiveTab] = reactExports.useState("N4");
  const data = activeTab === "N5" ? scores.n5 : scores.n4;
  const { stats } = scores;
  const accDisplay = (acc) => acc.total > 0 ? `${Math.round(acc.accuracy * 100)}% (${acc.correct}/${acc.total})` : "Chưa có dữ liệu";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-feature n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ai-hero-icon", children: "📊" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Dự đoán điểm JLPT" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Dự đoán điểm thi JLPT dựa trên dữ liệu học tập thực tế" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: "var(--n4-sp-2)", marginBottom: "var(--n4-sp-3)", justifyContent: "center" }, children: ["N5", "N4"].map((lv) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: `n4-btn ${activeTab === lv ? "n4-btn-primary" : "n4-btn-ghost"}`,
        onClick: () => setActiveTab(lv),
        style: { minWidth: 100 },
        children: [
          lv === "N5" ? "🟢" : "🟡",
          " JLPT ",
          lv
        ]
      },
      lv
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LevelCard, { level: activeTab, data, stats }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "0.9rem" }, children: "📈 Dữ liệu học tập" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px", fontSize: "0.8rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "📚 SRS: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: stats.srsTotal }),
          " mục"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "✅ Thuộc: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: stats.srsMastered }),
          " mục"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "📖 Đang học: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: stats.srsLearning }),
          " mục"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "🆕 Mới: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: stats.srsNew }),
          " mục"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "📅 Ngày học: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: stats.studyDays })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "🎮 Lần chơi: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: stats.totalPlays })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "❓ Tổng câu hỏi: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: stats.totalQuestions })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "🔖 Bookmarks: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: stats.bmCount })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-3)", fontSize: "0.9rem" }, children: "🎯 Độ chính xác theo loại" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8rem" }, children: [
        { icon: "🗡️", label: "Từ vựng", acc: stats.vocabAcc },
        { icon: "🏯", label: "Kanji", acc: stats.kanjiAcc },
        { icon: "⚔️", label: "Ngữ pháp", acc: stats.grammarAcc },
        { icon: "🎧", label: "Nghe", acc: stats.listeningAcc },
        { icon: "📖", label: "Đọc", acc: stats.readingAcc }
      ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", padding: "3px 0", borderBottom: "1px solid var(--n4-bg-tertiary)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          c.icon,
          " ",
          c.label
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: c.acc.total > 0 ? c.acc.accuracy >= 0.7 ? "var(--n4-neon-green)" : "var(--n4-neon-yellow, #EAB308)" : "var(--n4-text-muted)" }, children: accDisplay(c.acc) })
      ] }, c.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-glass", style: { fontSize: "0.8rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: "0 0 var(--n4-sp-2)", fontSize: "0.85rem" }, children: "💡 Gợi ý cải thiện" }),
      stats.srsTotal < 50 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "2px 0" }, children: [
        "⚠️ Cần ôn tập thêm nhiều mục SRS (hiện: ",
        stats.srsTotal,
        ", khuyến nghị: 200+)"
      ] }),
      stats.srsMastered < stats.srsTotal * 0.5 && stats.srsTotal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "2px 0" }, children: [
        "📖 Chỉ ",
        Math.round(stats.srsMastered / stats.srsTotal * 100),
        "% mục SRS đã thuộc — cần ôn tập đều đặn hơn"
      ] }),
      stats.vocabAcc.total === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "2px 0" }, children: "🗡️ Chưa luyện tập Từ vựng — hãy thử Võ đường từ vựng" }),
      stats.kanjiAcc.total === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "2px 0" }, children: "🏯 Chưa luyện Hán tự — hãy thử Học viện hán tự" }),
      stats.grammarAcc.total === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "2px 0" }, children: "⚔️ Chưa luyện Ngữ pháp — hãy thử Đấu trường ngữ pháp" }),
      stats.listeningAcc.total === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "2px 0" }, children: "🎧 Chưa luyện Nghe — hãy thử Phòng luyện nghe" }),
      stats.readingAcc.total === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "2px 0" }, children: "📖 Chưa luyện Đọc — hãy thử Phòng đọc hiểu" }),
      stats.studyDays < 7 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "2px 0" }, children: [
        "📅 Mới học ",
        stats.studyDays,
        " ngày — cần duy trì ít nhất 30 ngày để dự đoán chính xác hơn"
      ] }),
      stats.vocabAcc.accuracy > 0 && stats.vocabAcc.accuracy < 0.6 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "2px 0" }, children: [
        "⚠️ Từ vựng chỉ đạt ",
        Math.round(stats.vocabAcc.accuracy * 100),
        "% — cần ôn lại"
      ] }),
      stats.grammarAcc.accuracy > 0 && stats.grammarAcc.accuracy < 0.6 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "2px 0" }, children: [
        "⚠️ Ngữ pháp chỉ đạt ",
        Math.round(stats.grammarAcc.accuracy * 100),
        "% — cần ôn lại"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ai-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/ai-tutor", className: "n4-btn n4-btn-ghost", children: "✨ Gia sư AI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "n4-btn n4-btn-ghost", children: "🏠 Trang chủ" })
    ] })
  ] });
}
export {
  AIJLPTPredictor as default
};
