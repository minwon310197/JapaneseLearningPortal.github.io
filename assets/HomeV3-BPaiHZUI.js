const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./feature-3d-hud-CYISTbY6.js","./feature-3d-CFvJkEt3.js","./vendor-react-BYxMSDiB.js","./vendor-three-Ba7Uoy0A.js","./feature-3d-DB-cvyPV.css","./vendor-supabase-DTEAj5J1.js"])))=>i.map(i=>d[i]);
import { u as useLearningStore, a as useAppStore, b as useDataStore, _ as __vitePreload } from "./feature-3d-CFvJkEt3.js";
import { r as reactExports, j as jsxRuntimeExports, u as useShallow, b as reactDomExports } from "./vendor-react-BYxMSDiB.js";
import { g as getCosmeticMeta } from "./cosmetic-registry-BevBw2sp.js";
import "./quests-OG8KoiB9.js";
import { l as loadDailyStudyPlan, u as useMasteryStore, e as buildDailyStudyPlan, f as saveDailyStudyPlan } from "./index-D1BqAvip.js";
import { u as useVocabItems, a as useKanjiItems, b as useGrammarItems } from "./useDataHelper-CLs8Rj_F.js";
import { L as Link } from "./vendor-router-BTJacUKt.js";
import { Q as loadExpandedStudyPools, R as ACTION_EMITTERS, U as resetStudyDomain, m as STUDY_PROGRESS_CHANGED_EVENT, X as subscribe, Y as getWorldStudyStats, Z as buildStudyRoute, _ as TRAINER_REGISTRY, $ as getStudyDomainProgress } from "./feature-3d-hud-CYISTbY6.js";
/* empty css                        */
/* empty css                  */
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-icons-DHCyxOF-.js";
import "./vendor-supabase-DTEAj5J1.js";
function classifyKey(k) {
  if (!k) return null;
  if (k.startsWith("v:") || k.startsWith("vocab:")) return "vocab";
  if (k.startsWith("k:") || k.startsWith("kanji:")) return "kanji";
  if (k.startsWith("g:") || k.startsWith("grammar:")) return "grammar";
  return null;
}
function useSrsDueBreakdown() {
  const [bd, setBd] = reactExports.useState({ total: 0, vocab: 0, kanji: 0, grammar: 0 });
  const timerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const recompute = () => {
      try {
        const raw = localStorage.getItem("n4-srs");
        if (!raw) {
          setBd({ total: 0, vocab: 0, kanji: 0, grammar: 0 });
          return;
        }
        const data = JSON.parse(raw);
        const now = Date.now();
        let total = 0, vocab = 0, kanji = 0, grammar = 0;
        for (const k of Object.keys(data)) {
          const e = data[k];
          if (!(e && e.nextReview && new Date(e.nextReview).valueOf() <= now)) continue;
          total++;
          const type = classifyKey(k);
          if (type === "vocab") vocab++;
          else if (type === "kanji") kanji++;
          else if (type === "grammar") grammar++;
        }
        setBd({ total, vocab, kanji, grammar });
      } catch (e) {
        setBd({ total: 0, vocab: 0, kanji: 0, grammar: 0 });
      }
    };
    const debounced = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(recompute, 150);
    };
    recompute();
    window.addEventListener("n4-srs-changed", debounced);
    window.addEventListener("storage", debounced);
    return () => {
      window.removeEventListener("n4-srs-changed", debounced);
      window.removeEventListener("storage", debounced);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  return bd;
}
function LearnerPassportRing({ xp = 0, level = 1, size = 76, stroke = 6 }) {
  const xpForLevel = 100;
  const pct = Math.min(1, xp % xpForLevel / xpForLevel);
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dashoffset = c * (1 - pct);
  const levelStr = String(level);
  const fontSize = levelStr.length >= 4 ? "0.9rem" : levelStr.length === 3 ? "1.1rem" : "1.4rem";
  const labelSize = levelStr.length >= 4 ? "0.45rem" : "0.6rem";
  const labelMargin = levelStr.length >= 4 ? "-2px" : "0px";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-hv3-passport", style: { width: size, height: size }, "aria-label": `Cấp ${level}, ${Math.round(pct * 100)}% đến cấp tiếp theo`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}`, "aria-hidden": "true", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: size / 2, cy: size / 2, r, fill: "none", stroke: "rgba(255,255,255,0.08)", strokeWidth: stroke }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "circle",
        {
          cx: size / 2,
          cy: size / 2,
          r,
          fill: "none",
          stroke: "url(#n4-passport-grad)",
          strokeWidth: stroke,
          strokeLinecap: "round",
          strokeDasharray: c,
          strokeDashoffset: dashoffset,
          transform: `rotate(-90 ${size / 2} ${size / 2})`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "n4-passport-grad", x1: "0", y1: "0", x2: "1", y2: "1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#ffd68a" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#6fbfff" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-hv3-passport-level", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-hv3-passport-level-label", style: { fontSize: labelSize, marginBottom: labelMargin }, children: "LV" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { style: { fontSize }, children: level })
    ] })
  ] });
}
const RARITY_GLOW = {
  common: "rgba(255,255,255,0.18)",
  rare: "rgba(96,165,250,0.45)",
  epic: "rgba(168,85,247,0.55)",
  legendary: "rgba(251,191,36,0.65)"
};
const AURA_GRADIENT = {
  fire: "radial-gradient(circle, #ff6a3d44 0%, transparent 70%)",
  sakura: "radial-gradient(circle, #ffafd255 0%, transparent 70%)",
  shadow: "radial-gradient(circle, #1a1a2e88 0%, transparent 70%)",
  wind: "radial-gradient(circle, #93c5fd44 0%, transparent 70%)",
  void: "radial-gradient(circle, #5b21b688 0%, transparent 70%)",
  golden: "radial-gradient(circle, #fcd34d66 0%, transparent 70%)",
  lightning: "radial-gradient(circle, #60a5fa66 0%, transparent 70%)"
};
const EMPTY_OBJ = {};
function CosmeticAvatar2D({ size = 56, className = "" }) {
  const { equipped } = useLearningStore(useShallow((s) => ({
    equipped: s.equippedCosmetics || EMPTY_OBJ
  })));
  const avatar = reactExports.useMemo(() => getCosmeticMeta(equipped.avatar), [equipped.avatar]);
  const frame = reactExports.useMemo(() => getCosmeticMeta(equipped.frame), [equipped.frame]);
  const badge = reactExports.useMemo(() => getCosmeticMeta(equipped.badge), [equipped.badge]);
  const auraMeta = reactExports.useMemo(() => getCosmeticMeta(equipped.aura), [equipped.aura]);
  const auraKey = (avatar == null ? void 0 : avatar.aura) || (auraMeta == null ? void 0 : auraMeta.aura) || equipped.aura;
  const auraBg = AURA_GRADIENT[auraKey] || null;
  const rarity = (avatar == null ? void 0 : avatar.rarity) || "common";
  const particle = equipped.particleAmbient || "none";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `n4-cosmetic-avatar n4-ca-rarity-${rarity}${className ? ` ${className}` : ""}`,
      style: {
        width: size,
        height: size,
        "--ca-glow": RARITY_GLOW[rarity] || RARITY_GLOW.common
      },
      "aria-label": avatar ? `Avatar ${avatar.name}` : "Avatar mặc định",
      children: [
        auraBg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ca-aura", style: { background: auraBg }, "aria-hidden": "true" }),
        particle !== "none" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ca-particles", "data-particle": particle, "aria-hidden": "true", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ca-avatar-emoji", style: { fontSize: Math.round(size * 0.55) }, children: (avatar == null ? void 0 : avatar.emoji) || "👤" }),
        frame && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ca-frame", "data-rarity": frame.rarity, "aria-hidden": "true", children: frame.emoji }),
        badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ca-badge", title: badge.name, "data-rarity": badge.rarity, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: badge.emoji }) })
      ]
    }
  );
}
function DailyPlanCard() {
  const studyOsV1 = useAppStore((s) => s.studyOsV1);
  const [duration, setDuration] = reactExports.useState(10);
  const [plan, setPlan] = reactExports.useState(() => loadDailyStudyPlan());
  const srs = useLearningStore((s) => s.srs);
  const bookmarks = useLearningStore((s) => s.bookmarks);
  const vocab = useDataStore((s) => s.vocab);
  const kanji = useDataStore((s) => s.kanji);
  const grammar = useDataStore((s) => s.grammar);
  const vocabItems = useVocabItems("all");
  const kanjiItems = useKanjiItems("all");
  const grammarItems = useGrammarItems("all");
  const masteryBars = useMasteryStore((s) => s.masteryBars);
  const availableDomains = reactExports.useMemo(() => [vocab.length && "vocab", kanji.length && "kanji", grammar.length && "grammar"].filter(Boolean), [vocab.length, kanji.length, grammar.length]);
  const allowedItemKeys = reactExports.useMemo(() => [
    ...vocabItems.flatMap((item) => (item == null ? void 0 : item.word) ? [`v:${item.word}`, `vocab:${item.word}`] : []),
    ...kanjiItems.flatMap((item) => (item == null ? void 0 : item.kanji) ? [`k:${item.kanji}`, `kanji:${item.kanji}`] : []),
    ...grammarItems.flatMap((item) => (item == null ? void 0 : item.title) ? [`g:${item.title}`, `grammar:${item.title}`] : [])
  ], [vocabItems, kanjiItems, grammarItems]);
  const regenerate = () => {
    const next = buildDailyStudyPlan({ duration, srs, bookmarks, masteryBars, availableDomains, allowedItemKeys });
    setPlan(saveDailyStudyPlan(next));
  };
  reactExports.useEffect(() => {
    if (!plan && availableDomains.length) regenerate();
  }, [availableDomains.join("|")]);
  if (!studyOsV1) return null;
  if (!plan) return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "n4-study-plan n4-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Đang chuẩn bị lộ trình học ngoại tuyến…" }) });
  const current = plan.blocks[plan.currentBlock] || plan.blocks[0];
  const complete = plan.status === "complete";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-study-plan n4-card", "aria-label": "Lộ trình học hôm nay", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-plan__head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-study-plan__eyebrow", children: "Hôm nay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: complete ? "Bạn đã hoàn thành lộ trình" : "Học gì tiếp theo?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-study-plan__time", children: [
        plan.duration,
        " phút · ",
        plan.estimatedQuestions,
        " câu"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-study-plan__reason", children: complete ? "Tuyệt vời. Xem tiến độ hoặc tạo một buổi tự chọn." : plan.rationale }),
    !complete && current && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-plan__next", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tiếp theo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: current.rationale })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-plan__actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-primary", to: "/study-session", children: plan.status === "active" ? "Tiếp tục học" : complete ? "Xem tiến độ" : "Bắt đầu lộ trình" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
        "Thời gian ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: duration, onChange: (e) => setDuration(Number(e.target.value)), children: [5, 10, 20, 30].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value, children: [
          value,
          " phút"
        ] }, value)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", type: "button", onClick: regenerate, children: "Tạo lại" })
    ] })
  ] });
}
const WorldLearningOverlayStack = reactExports.lazy(() => __vitePreload(() => import("./feature-3d-hud-CYISTbY6.js").then((n) => n.b0), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0, import.meta.url));
const EMPTY_GAME_HISTORY = Object.freeze([]);
function currentTimeOfDay() {
  const h = (/* @__PURE__ */ new Date()).getHours();
  if (h < 5) return "night";
  if (h < 11) return "morning";
  if (h < 16) return "afternoon";
  if (h < 19) return "evening";
  return "night";
}
function currentSeason() {
  const m = (/* @__PURE__ */ new Date()).getMonth() + 1;
  if (m <= 2 || m === 12) return { id: "winter" };
  if (m <= 5) return { id: "spring" };
  if (m <= 8) return { id: "summer" };
  return { id: "autumn" };
}
function formatDashNumber(value) {
  return new Intl.NumberFormat("vi-VN").format(Number(value) || 0);
}
function countSectionItems(sections) {
  if (!Array.isArray(sections)) return 0;
  return sections.reduce((sum, section) => {
    if (Array.isArray(section == null ? void 0 : section.items)) return sum + section.items.length;
    if (Array.isArray(section == null ? void 0 : section.data)) return sum + section.data.length;
    if (Array.isArray(section)) return sum + section.length;
    return sum + (section && typeof section === "object" ? 1 : 0);
  }, 0);
}
function countMinnaItems(minna) {
  if (!minna || typeof minna !== "object") return 0;
  return Object.values(minna).reduce((sum, lesson) => sum + (Array.isArray(lesson == null ? void 0 : lesson.vocab) ? lesson.vocab.length : 0) + (Array.isArray(lesson == null ? void 0 : lesson.grammarItems) ? lesson.grammarItems.length : 0) + (Array.isArray(lesson == null ? void 0 : lesson.dialogues) ? lesson.dialogues.length : 0), 0);
}
function renderDomainBgArt(domainId) {
  switch (domainId) {
    case "vocab":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 80C32 80 50 72 50 68C50 72 68 80 85 80V25C68 25 50 17 50 21C50 17 32 25 15 25V80Z", stroke: "currentColor", strokeWidth: "2.5", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M50 21V68", stroke: "currentColor", strokeWidth: "2.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "26", y: "44", fill: "currentColor", fontSize: "13", fontWeight: "bold", opacity: "0.6", children: "あ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "68", y: "40", fill: "currentColor", fontSize: "11", fontWeight: "bold", opacity: "0.6", children: "い" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "32", y: "60", fill: "currentColor", fontSize: "15", fontWeight: "black", opacity: "0.8", children: "語" })
      ] });
    case "vocabJlpt":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "22", y: "16", width: "56", height: "68", rx: "5", stroke: "currentColor", strokeWidth: "2.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "32", y1: "30", x2: "68", y2: "30", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "32", y1: "44", x2: "68", y2: "44", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "32", y1: "58", x2: "52", y2: "58", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "66", cy: "62", r: "11", fill: "currentColor", opacity: "0.2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "60", y: "66", fill: "currentColor", fontSize: "9", fontWeight: "900", opacity: "0.85", children: "N4" })
      ] });
    case "kanji":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 26H88", stroke: "currentColor", strokeWidth: "4.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 36H82", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M34 36V84", stroke: "currentColor", strokeWidth: "4.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M66 36V84", stroke: "currentColor", strokeWidth: "4.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M28 20L50 14L72 20", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "40", y: "63", fill: "currentColor", fontSize: "20", fontWeight: "bold", opacity: "0.8", children: "漢" })
      ] });
    case "grammar":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 26C14 17.5 25.5 11 39.5 11C53.5 11 65 17.5 65 26C65 34.5 53.5 41 39.5 41C34.7 41 30.2 39.6 26.5 37.2L14 43V26Z", stroke: "currentColor", strokeWidth: "2.5", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M86 57C86 50 77 44.5 66 44.5C64.6 44.5 63.3 44.6 62 44.9C58.8 46.9 54.8 48 50.5 48C48.7 48 47 47.8 45.3 47.4L35.5 52L38 45.2C30.8 42.6 26.2 37.2 26.2 31.2V31.7C26.2 40.3 37.7 47.2 51.7 47.2C53.1 47.2 54.5 47.1 55.9 46.9C59.7 49.3 64.3 50.8 69.2 50.8C73.9 50.8 78.2 49.6 81.5 47.4L86 49.2V43.5C86 50 86 57 86 57Z", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", opacity: "0.6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "23", y: "30", fill: "currentColor", fontSize: "9", fontWeight: "bold", opacity: "0.8", children: "AはBです" })
      ] });
    case "particles":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "38", r: "15", stroke: "currentColor", strokeWidth: "2.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "72", cy: "38", r: "15", stroke: "currentColor", strokeWidth: "2.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "72", r: "15", stroke: "currentColor", strokeWidth: "2.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M43 38H57", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M37 50L43 56", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M63 50L57 56", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "21", y: "43", fill: "currentColor", fontSize: "14", fontWeight: "black", opacity: "0.8", children: "は" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "65", y: "43", fill: "currentColor", fontSize: "14", fontWeight: "black", opacity: "0.8", children: "が" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "43", y: "77", fill: "currentColor", fontSize: "14", fontWeight: "black", opacity: "0.8", children: "を" })
      ] });
    case "conjugation":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 76V81H88V76L76 59H24L12 76Z", fill: "currentColor", opacity: "0.15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 76V81H92V76L80 58C90 52 84 35 70 35H30C16 35 10 52 20 58L8 76Z", stroke: "currentColor", strokeWidth: "2.5", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M33 24L41 11L44 19L54 9L51 23L64 17L55 29", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "32", y: "49", fill: "currentColor", fontSize: "9", fontWeight: "bold", opacity: "0.8", children: "V-ます" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M48 46L58 46", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "61", y: "49", fill: "currentColor", fontSize: "9", fontWeight: "bold", opacity: "0.8", children: "て" })
      ] });
    case "keigo":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "18", y: "18", width: "64", height: "64", rx: "9", stroke: "currentColor", strokeWidth: "2.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M28 35H72", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M32 52H68", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M38 68H62", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "34", y: "49", fill: "currentColor", fontSize: "20", fontWeight: "900", opacity: "0.85", children: "敬" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "52", y: "67", fill: "currentColor", fontSize: "13", fontWeight: "900", opacity: "0.65", children: "語" })
      ] });
    default:
      return null;
  }
}
function HeroAura({ timeOfDay }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-home-aura n4-home-aura-${timeOfDay}`, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-home-aura-orb n4-home-aura-orb-1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-home-aura-orb n4-home-aura-orb-2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-home-aura-orb n4-home-aura-orb-3" })
  ] });
}
function SeasonalParticles({ season, timeOfDay }) {
  const kind = reactExports.useMemo(() => {
    if ((season == null ? void 0 : season.id) === "spring") return "sakura";
    if ((season == null ? void 0 : season.id) === "autumn") return "maple";
    if ((season == null ? void 0 : season.id) === "winter") return "snow";
    if ((season == null ? void 0 : season.id) === "summer" && (timeOfDay === "evening" || timeOfDay === "night")) return "firefly";
    return "sakura";
  }, [season, timeOfDay]);
  const particles = reactExports.useMemo(() => Array.from({ length: kind === "firefly" ? 10 : 14 }, (_, i) => ({
    i,
    left: Math.round((i * 7.3 + i % 3 * 13) % 100),
    delay: (i * 1.7 % 12).toFixed(2),
    dur: (9 + i % 5 * 1.4).toFixed(2),
    drift: ((i % 7 - 3) * 14).toFixed(0),
    size: 0.8 + i % 4 * 0.25
  })), [kind]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-home-particles n4-home-particles-${kind}`, "aria-hidden": "true", children: particles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "n4-home-particle",
      style: { left: `${p.left}%`, "--delay": `${p.delay}s`, "--dur": `${p.dur}s`, "--drift": `${p.drift}px`, "--size": `${p.size}` }
    },
    p.i
  )) });
}
function HeroBar({ srsDue }) {
  const { xp, level, streak, coins } = useLearningStore(useShallow((s) => ({
    xp: s.xp || 0,
    level: s.level || 1,
    streak: s.streak || 0,
    coins: s.coins || 0
  })));
  const hour = (/* @__PURE__ */ new Date()).getHours();
  const greeting = hour < 11 ? "おはよう" : hour < 16 ? "こんにちは" : hour < 19 ? "おつかれ" : "こんばんは";
  const greetingVi = hour < 11 ? "Chào buổi sáng" : hour < 16 ? "Chào buổi trưa" : hour < 19 ? "Vất vả rồi" : "Chào buổi tối";
  const xpPerLevel = Math.max(100, level * 100);
  const xpInLevel = xp % xpPerLevel;
  const xpPct = Math.min(100, Math.round(xpInLevel / xpPerLevel * 100));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dash-hero", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dash-hero-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dash-hero-avatar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CosmeticAvatar2D, { size: 48 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dash-hero-ring", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LearnerPassportRing, { xp, level, size: 64 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dash-hero-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dash-hero-greet-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dash-hero-greeting", lang: "ja", children: greeting }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dash-hero-greeting-vi", children: greetingVi })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dash-hero-xp", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dash-xp-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dash-xp-fill", style: { width: `${xpPct}%` } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-dash-xp-label", children: [
          "Lv.",
          level,
          "  ·  ",
          xpInLevel.toLocaleString(),
          " / ",
          xpPerLevel.toLocaleString(),
          " XP"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dash-hero-stats", children: [
      streak > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dash-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dash-stat-icon", children: "🔥" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dash-stat-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dash-stat-val", children: streak }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dash-stat-lbl", children: "ngày streak" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dash-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dash-stat-icon", children: "🪙" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dash-stat-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dash-stat-val", children: coins.toLocaleString("vi-VN") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dash-stat-lbl", children: "xu" })
        ] })
      ] }),
      (srsDue == null ? void 0 : srsDue.total) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/trainer/daily-practice?mode=srs", className: "n4-dash-stat n4-dash-stat--srs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dash-stat-icon", children: "🧠" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dash-stat-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dash-stat-val", children: srsDue.total }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dash-stat-lbl", children: "cần ôn" })
        ] })
      ] })
    ] })
  ] });
}
const AI_TUTOR_LINK = {
  icon: "🤖",
  label: "Gia sư Trí tuệ Nhân tạo",
  sub: "Hỏi đáp · Giải thích",
  path: "/ai-tutor",
  color: "#c8a4ff"
};
const DISTRICTS = [
  {
    id: "shrine",
    name: "Đền thờ",
    nameJp: "神社",
    icon: "⛩️",
    bg: "linear-gradient(135deg,rgba(220,38,38,.15),rgba(249,115,22,.10))",
    features: [{ icon: "⛩️", label: "Xin quẻ", path: "/shrine" }, { icon: "♨️", label: "Suối nóng", path: "/onsen" }, { icon: "🍵", label: "Trà đạo", path: "/tea" }, { icon: "🧘", label: "Thiền", path: "/zen-dojo" }]
  },
  {
    id: "shopping",
    name: "Phố mua sắm",
    nameJp: "商店街",
    icon: "🛍️",
    bg: "linear-gradient(135deg,rgba(245,158,11,.15),rgba(234,179,8,.10))",
    features: [{ icon: "🛍️", label: "Cửa hàng", path: "/shop" }, { icon: "🏪", label: "Chợ", path: "/market" }, { icon: "🎰", label: "Gacha", path: "/gacha" }, { icon: "🎒", label: "Kho đồ", path: "/inventory" }, { icon: "🎫", label: "Thẻ cào", path: "/scratch-cards" }]
  },
  {
    id: "yokocho",
    name: "Ngõ ẩm thực",
    nameJp: "横丁",
    icon: "🍜",
    bg: "linear-gradient(135deg,rgba(249,115,22,.15),rgba(239,68,68,.10))",
    features: [{ icon: "🍜", label: "Quán mì", path: "/ramen" }, { icon: "🐱", label: "Quán mèo", path: "/neko" }, { icon: "🎲", label: "Mini game", path: "/gambling" }, { icon: "🗺️", label: "Kho báu", path: "/treasure-hunt" }]
  },
  {
    id: "village",
    name: "Làng",
    nameJp: "村",
    icon: "🏘️",
    bg: "linear-gradient(135deg,rgba(34,197,94,.15),rgba(16,185,129,.10))",
    features: [{ icon: "🏘️", label: "Làng", path: "/village" }, { icon: "🏙️", label: "Thị trấn", path: "/town" }, { icon: "👩‍🏫", label: "Sensei", path: "/sensei" }, { icon: "⚔️", label: "Phe phái", path: "/faction" }, { icon: "📜", label: "Tiền thưởng", path: "/bounties" }]
  },
  {
    id: "dojo",
    name: "Võ đường",
    nameJp: "道場",
    icon: "🥋",
    bg: "linear-gradient(135deg,rgba(99,102,241,.15),rgba(139,92,246,.10))",
    features: [{ icon: "🤺", label: "Kiếm đạo", path: "/kendo" }, { icon: "🥁", label: "Taiko", path: "/taiko" }, { icon: "🌳", label: "Cây kỹ năng", path: "/skill-tree" }, { icon: "⚔️", label: "Chỉ số", path: "/character-stats" }, { icon: "🤖", label: "Mecha", path: "/mecha" }, { icon: "✂️", label: "Origami", path: "/origami" }]
  },
  {
    id: "culture",
    name: "Văn hóa",
    nameJp: "文化",
    icon: "📚",
    bg: "linear-gradient(135deg,rgba(236,72,153,.15),rgba(139,92,246,.10))",
    features: [{ icon: "📚", label: "Manga", path: "/manga" }, { icon: "📖", label: "Story Quest", path: "/story" }, { icon: "🏠", label: "Phòng học", path: "/study-room" }, { icon: "🐾", label: "Thú cưng", path: "/pets" }]
  },
  {
    id: "square",
    name: "Quảng trường",
    nameJp: "広場",
    icon: "📋",
    bg: "linear-gradient(135deg,rgba(14,165,233,.15),rgba(20,184,166,.10))",
    features: [{ icon: "📋", label: "Nhiệm vụ", path: "/missions" }, { icon: "🏆", label: "Bộ sưu tập", path: "/collections" }, { icon: "📊", label: "Thống kê", path: "/economy-stats" }, { icon: "🚧", label: "Nháp", path: "/draft-features" }]
  }
];
const SYSTEM_ITEMS = [
  { icon: "👤", label: "Hồ sơ", sub: "Thông tin & thành tích", path: "/profile", color: "#9ec7ff" },
  { icon: "📊", label: "Phân tích", sub: "Tiến độ học tập", path: "/analytics", color: "#4db89a" },
  { icon: "📬", label: "Hộp thư", sub: "Thông báo & sự kiện", path: "/inbox", color: "#ffbf6f" },
  { icon: "⚙️", label: "Cài đặt", sub: "Giao diện & tùy chỉnh", path: "/settings", color: "#d4a853" },
  { icon: "🧪", label: "Công cụ", sub: "Tiện ích nâng cao", path: "/tools", color: "#c8a4ff" },
  { icon: "🔍", label: "Tatoeba", sub: "Tra câu mẫu", path: "/tatoeba", color: "#8e7cc3" }
];
const TRAINER_LABELS = {
  "vocab-dojo": "Dojo Từ vựng",
  "kanji-academy": "Học viện Kanji",
  "grammar-arena": "Đấu trường Ngữ pháp",
  "listening-lab": "Phòng luyện Nghe",
  "reading-room": "Phòng luyện Đọc",
  "puzzle-world": "Thế giới Câu đố",
  "mind-tricks": "Rèn luyện Trí tuệ",
  "boss-battle": "Đấu Trùm",
  "story-mode": "Chế độ Cốt truyện",
  "minna-lessons": "Bài học Minna",
  "jlpt-mock": "Thi thử JLPT",
  "daily-practice": "Luyện tập Hàng ngày",
  "conjugation-dojo": "Võ đường Chia thể",
  "adventure-arena": "Đấu trường Phiêu lưu",
  "particle-dojo": "Võ đường Trợ từ"
};
const TRAINER_ACCENTS = [
  "#7ed3ff",
  "#ffbf6f",
  "#9fe6bd",
  "#c8a4ff",
  "#ffaaaa",
  "#f2a2ff",
  "#ffc0a2",
  "#ff7777",
  "#a7b1ff",
  "#a8e0ff",
  "#77bdff",
  "#ffd68a",
  "#b7f7c2",
  "#ffb887",
  "#a8ffea"
];
function getTrainerLabel(id) {
  return TRAINER_LABELS[id] || id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
function domainFromReward(event) {
  if ((event == null ? void 0 : event.source) === "particle") return "particles";
  if ((event == null ? void 0 : event.source) === "conjugation") return "conjugation";
  if ((event == null ? void 0 : event.source) === "grammar") return "grammar";
  if ((event == null ? void 0 : event.source) === "keigo") return "keigo";
  if ((event == null ? void 0 : event.kind) === "KANJI_ROCK") return "kanji";
  if ((event == null ? void 0 : event.source) === "encounter") return "vocab";
  return null;
}
function AllInOneJlptN4() {
  const [routeSeed, setRouteSeed] = reactExports.useState(() => Date.now());
  const [progressTick, setProgressTick] = reactExports.useState(0);
  const [overlayMounted, setOverlayMounted] = reactExports.useState(false);
  const startDomain = reactExports.useCallback(async (domain) => {
    try {
      await loadExpandedStudyPools();
      setProgressTick((value) => value + 1);
    } catch (e) {
    }
    const emit = ACTION_EMITTERS[domain.action];
    if (!emit) {
      console.warn("[HomeV3] Unknown study action:", domain.action, domain);
      return;
    }
    setOverlayMounted(true);
    window.setTimeout(() => {
      emit({
        id: `study-${domain.id}-${Date.now()}`,
        type: domain.action,
        seed: domain.seed || Date.now(),
        source: "study-panel",
        studyDomain: domain.id
      });
    }, 0);
  }, []);
  const resetDomain = reactExports.useCallback((event, domain) => {
    event.stopPropagation();
    resetStudyDomain(domain.id);
    setProgressTick((value) => value + 1);
    setRouteSeed(Date.now());
  }, []);
  const [, setSessionProgress] = reactExports.useState(() => {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const saved = localStorage.getItem(`n4_study_session_progress_${today}`);
    return saved ? JSON.parse(saved) : { vocab: 0, kanji: 0, grammar: 0, particles: 0, conjugation: 0, keigo: 0 };
  });
  reactExports.useEffect(() => {
    let alive = true;
    loadExpandedStudyPools().then(() => {
      if (alive) setProgressTick((value) => value + 1);
    }).catch(() => {
    });
    return () => {
      alive = false;
    };
  }, []);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return void 0;
    const handleProgressChange = () => setProgressTick((value) => value + 1);
    window.addEventListener(STUDY_PROGRESS_CHANGED_EVENT, handleProgressChange);
    return () => window.removeEventListener(STUDY_PROGRESS_CHANGED_EVENT, handleProgressChange);
  }, []);
  const gameHistory = useLearningStore((s) => Array.isArray(s.gameHistory) ? s.gameHistory : EMPTY_GAME_HISTORY);
  const prevHistoryLengthRef = reactExports.useRef(gameHistory.length);
  reactExports.useEffect(() => {
    if (gameHistory.length > prevHistoryLengthRef.current) {
      const newGames = gameHistory.slice(prevHistoryLengthRef.current);
      newGames.forEach((game) => {
        let domainId = null;
        if (game.trainerId === "vocab-dojo") domainId = "vocab";
        else if (game.trainerId === "kanji-academy") domainId = "kanji";
        else if (game.trainerId === "grammar-arena") domainId = "grammar";
        else if (game.trainerId === "particle-dojo") domainId = "particles";
        else if (game.trainerId === "conjugation-dojo") domainId = "conjugation";
        if (domainId) {
          const pts = game.score || 0;
          setSessionProgress((prev) => {
            const next = { ...prev, [domainId]: (prev[domainId] || 0) + pts };
            const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
            localStorage.setItem(`n4_study_session_progress_${today}`, JSON.stringify(next));
            return next;
          });
        }
      });
    }
    prevHistoryLengthRef.current = gameHistory.length;
  }, [gameHistory]);
  reactExports.useEffect(() => {
    return subscribe((event) => {
      if ((event == null ? void 0 : event.type) !== "reward" && (event == null ? void 0 : event.type) !== "fail") return;
      const domain = domainFromReward(event);
      if (!domain) return;
      setProgressTick((value) => value + 1);
      if ((event == null ? void 0 : event.type) !== "reward") return;
      setSessionProgress((prev) => {
        const next = { ...prev, [domain]: (prev[domain] || 0) + 1 };
        const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        localStorage.setItem(`n4_study_session_progress_${today}`, JSON.stringify(next));
        return next;
      });
    });
  }, []);
  const { vocab, kanji, grammar, minna, minnaLessons, loaded } = useDataStore(useShallow((s) => ({
    vocab: s.vocab,
    kanji: s.kanji,
    grammar: s.grammar,
    minna: s.minna,
    minnaLessons: s.minnaLessons,
    loaded: s.loaded
  })));
  const dataCounts = reactExports.useMemo(() => {
    const minnaLessonCount = Math.max(
      Array.isArray(minnaLessons) ? minnaLessons.length : 0,
      minna && typeof minna === "object" ? Object.keys(minna).length : 0
    );
    return {
      vocab: countSectionItems(vocab),
      kanji: countSectionItems(kanji),
      grammar: countSectionItems(grammar),
      minnaItems: countMinnaItems(minna),
      minnaLessons: minnaLessonCount
    };
  }, [grammar, kanji, minna, minnaLessons, vocab]);
  const worldStats = reactExports.useMemo(() => getWorldStudyStats(), [
    loaded,
    dataCounts.grammar,
    dataCounts.kanji,
    dataCounts.vocab,
    progressTick
  ]);
  const studyRoute = reactExports.useMemo(() => {
    const fallback = {
      vocab: Math.max(worldStats.vocab || 0, dataCounts.vocab),
      kanji: Math.max(worldStats.kanji || 0, worldStats.kanjiStudyItems || 0, worldStats.kanjiBiomeItems || 0, dataCounts.kanji),
      grammar: worldStats.grammarEcho || worldStats.grammar || dataCounts.grammar,
      particles: worldStats.particles || 0,
      conjugation: worldStats.conjugationForms || 0,
      keigo: worldStats.keigoItems || 0
    };
    return buildStudyRoute(routeSeed).map((domain, index) => {
      const available = Math.max(domain.available || 0, fallback[domain.id] || 0);
      return {
        ...domain,
        available,
        target: Math.max(3, Math.min(12, Math.round(available / 120) + 3 + index))
      };
    });
  }, [
    dataCounts.grammar,
    dataCounts.kanji,
    dataCounts.vocab,
    routeSeed,
    worldStats.conjugationForms,
    worldStats.grammar,
    worldStats.grammarEcho,
    worldStats.kanji,
    worldStats.kanjiBiomeItems,
    worldStats.kanjiStudyItems,
    worldStats.keigoItems,
    worldStats.particles,
    worldStats.vocab,
    progressTick
  ]);
  const trainerIds = reactExports.useMemo(() => Object.keys(TRAINER_REGISTRY), []);
  const visibleTrainerIds = reactExports.useMemo(() => trainerIds.filter((id) => id !== "daily-practice"), [trainerIds]);
  const trainerModeCount = reactExports.useMemo(() => trainerIds.reduce((sum, id) => {
    var _a, _b;
    return sum + (((_b = (_a = TRAINER_REGISTRY[id]) == null ? void 0 : _a.modes) == null ? void 0 : _b.length) || 0);
  }, 0), [trainerIds]);
  const worldFeatureCount = reactExports.useMemo(() => DISTRICTS.reduce((sum, district) => sum + district.features.length, 0), []);
  const totalStudyItems = Math.max(
    worldStats.total || 0,
    dataCounts.vocab + dataCounts.kanji + dataCounts.grammar + (worldStats.particles || 0) + (worldStats.grammarEcho || 0) + (worldStats.conjugationForms || 0) + (worldStats.keigoItems || 0) + (worldStats.kanjiBiomeItems || 0)
  ) + dataCounts.minnaItems;
  const contentLinks = [
    {
      label: "Từ vựng",
      value: `${formatDashNumber(Math.max(dataCounts.vocab, worldStats.vocab || 0))} mục`,
      path: "/content/vocab",
      accent: "#4db89a"
    },
    {
      label: "Kanji",
      value: `${formatDashNumber(Math.max(dataCounts.kanji, worldStats.kanji || 0, worldStats.kanjiBiomeItems || 0))} mục`,
      path: "/content/kanji",
      accent: "#e07060"
    },
    {
      label: "Ngữ pháp",
      value: `${formatDashNumber(Math.max(dataCounts.grammar, worldStats.grammar || 0, worldStats.grammarEcho || 0))} mục`,
      path: "/content/grammar",
      accent: "#6ba3be"
    },
    {
      label: "Minna",
      value: `${formatDashNumber(dataCounts.minnaLessons)} bài · ${formatDashNumber(dataCounts.minnaItems)} mục`,
      path: "/content/minna",
      accent: "#d49a53"
    },
    {
      label: "Bảng tham khảo",
      value: "trợ từ · chia thể · mẫu câu",
      path: "/content/reference",
      accent: "#8e7cc3"
    },
    {
      label: "Từ điển",
      value: "tra cứu nhanh",
      path: "/dictionary",
      accent: "#9ec7ff"
    }
  ];
  const supportLinks = [AI_TUTOR_LINK, ...SYSTEM_ITEMS];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-allinone", "aria-label": "Học tiếng Nhật N4 toàn diện", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-allinone-head", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-allinone-titlebox", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-allinone-kicker", children: "Lộ trình học từ JLPT N4 World" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "n4-allinone-title", children: "LỘ TRÌNH JLPT N4 TOÀN DIỆN" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-allinone-subtitle", children: "Một bảng học chính cho nội dung N4, bộ luyện tập, ôn thi, AI và toàn bộ khu World." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-allinone-stats", "aria-label": "Tổng quan lộ trình N4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-allinone-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatDashNumber(totalStudyItems) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "mục học" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-allinone-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: trainerIds.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "bộ luyện tập" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-allinone-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: trainerModeCount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "chế độ" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-allinone-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: worldFeatureCount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "liên kết thế giới" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-allinone-route-v3", "aria-label": "Lộ trình luyện tập", children: studyRoute.map((domain) => {
      const progress = getStudyDomainProgress(domain.id, domain.available);
      const done = Math.min(progress.completedCount, domain.available);
      const pct = domain.available > 0 ? Math.min(100, Math.round(done / domain.available * 100)) : 0;
      const isComplete = domain.available > 0 && progress.remainingCount === 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "n4-allinone-domain-card-v3",
          style: { "--study-accent": domain.accent },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "n4-allinone-domain-v3-reset",
                onClick: (event) => resetDomain(event, domain),
                title: `Reset vòng ${domain.label}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-reset-icon", children: "↻" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-reset-text", children: "Đặt lại" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => startDomain(domain),
                className: `n4-allinone-domain-v3 ${isComplete ? "is-complete" : ""}`,
                "data-study-id": domain.id,
                "data-study-action": domain.action,
                disabled: isComplete || domain.available === 0,
                title: isComplete ? "Đã hoàn thành. Reset để học lại." : `Mở ${domain.label}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-allinone-domain-v3-bg-art", "aria-hidden": "true", children: renderDomainBgArt(domain.id) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-allinone-domain-v3-main", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-allinone-domain-v3-short", children: domain.shortLabel }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-allinone-domain-v3-title", children: domain.label })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-allinone-domain-v3-desc", children: isComplete ? "Đã học hết mục mới trong vòng này. Reset để luyện lại." : domain.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-allinone-domain-v3-meter", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: `${pct}%` } }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-allinone-domain-v3-count", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      formatDashNumber(done),
                      "/",
                      formatDashNumber(domain.available),
                      " đúng · còn ",
                      formatDashNumber(progress.remainingCount)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: progress.missedCount > 0 ? ` · Sai: ${formatDashNumber(progress.missedCount)}` : " · Sai: 0" })
                  ] })
                ]
              }
            )
          ]
        },
        domain.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-allinone-main-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-allinone-block", "aria-label": "Nội dung N4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-allinone-block-head", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Nội dung N4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/content", className: "n4-allinone-more", children: "Mở thư viện" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-allinone-content-grid", children: contentLinks.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.path,
            className: "n4-allinone-content-link",
            style: { "--aio-accent": item.accent },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: item.value })
            ]
          },
          item.path
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-allinone-block", "aria-label": "Trainer và chế độ luyện", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-allinone-block-head", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Trainer & ôn thi" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-allinone-trainers", children: visibleTrainerIds.map((id, index) => {
          var _a, _b;
          const modeCount = ((_b = (_a = TRAINER_REGISTRY[id]) == null ? void 0 : _a.modes) == null ? void 0 : _b.length) || 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: `/trainer/${id}`,
              className: "n4-allinone-trainer",
              style: { "--aio-accent": TRAINER_ACCENTS[index % TRAINER_ACCENTS.length] },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: getTrainerLabel(id) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { children: [
                  modeCount,
                  " chế độ"
                ] })
              ]
            },
            id
          );
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-allinone-block n4-allinone-block--wide", "aria-label": "Công cụ hỗ trợ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-allinone-block-head", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "AI, tiến độ & hệ thống" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-allinone-support", children: supportLinks.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: item.path, style: { "--aio-accent": item.color || "#9ec7ff" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: item.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: item.sub })
        ] })
      ] }, `${item.path}-${item.label}`)) })
    ] }),
    overlayMounted && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorldLearningOverlayStack, {}) }),
      document.body
    )
  ] });
}
function HomeV3() {
  const { loaded, loadFromLegacy } = useDataStore(useShallow((s) => ({
    loaded: s.loaded,
    loadFromLegacy: s.loadFromLegacy
  })));
  const srsDue = useSrsDueBreakdown();
  const [timeOfDay] = reactExports.useState(currentTimeOfDay());
  const [season] = reactExports.useState(currentSeason());
  reactExports.useEffect(() => {
    if (!loaded && typeof loadFromLegacy === "function") {
      try {
        loadFromLegacy();
      } catch (e) {
      }
    }
  }, [loaded, loadFromLegacy]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", "data-timeofday": timeOfDay, "data-season": season.id, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroAura, { timeOfDay }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SeasonalParticles, { season, timeOfDay }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroBar, { srsDue }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DailyPlanCard, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AllInOneJlptN4, {})
  ] });
}
export {
  DISTRICTS,
  HomeV3 as default
};
