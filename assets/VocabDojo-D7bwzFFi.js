import { r as reactExports, j as jsxRuntimeExports, d as requireReact, u as useShallow, R as React } from "./vendor-react-BUL8WuXG.js";
import { b as bus, G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-BbQ9A_1j.js";
import { u as useScoreEngine, T as TrainerContext } from "./useScoreEngine-f-lCg0MN.js";
import { F as FlashcardMode } from "./FlashcardMode-CA-Jcray.js";
import { a as QuizMode } from "./QuizMode-DQg4kJzy.js";
import { M as MatchMode } from "./MatchMode-ftsrtm9f.js";
import { u as useGameRestart, a as useStudySession } from "./useStudySession-DXubMAgN.js";
import { x as playSFX, ba as GAME_EVENTS, L as speakJP, ap as shuffleArray$1, H as getQualityConfig, F as content, u as useAppStore, k as kanaToRomaji } from "./index-BEJSIlFS.js";
import { F as FillBlankMode } from "./FillBlankMode-Dzv12HKC.js";
import { T as TrueFalseMode } from "./TrueFalseMode-DKzuYm0f.js";
import { S as ScaffoldingLayer } from "./ScaffoldingLayer-BwAQh4aw.js";
import { u as useVocabItems, b as useSectionList } from "./useDataHelper-DtTUT9Wk.js";
import "./ModeResultsScreen-5Gki9ifL.js";
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { u as useWorldSurface } from "./WorldSurfaceContext-CUHCnPUQ.js";
import { u as useGameStore, E as EntityPool, a as useGameEngine } from "./useGameEngine-BKAIg4EU.js";
import { a as AIHintButton, A as AIExplainButton } from "./AIGameHelper-DJcZivzu.js";
import { v as vocabAccessors } from "./index-B2ai8n3C.js";
import "./useDialogFocus-CowhWfi-.js";
import "./vendor-router-Dx6RIovR.js";
import "./empty-Bvm-mx50.js";
import "./HitPause-BapLYhfu.js";
import "./study-results-DtyGPqxP.js";
import "./quest-chains-CiwzmCpJ.js";
import "./registry-BAotxlgH.js";
import "./utils-zpwy_og2.js";
import "./PhaseRibbon-D3yQ4T2H.js";
import "./QuizFeedback-Pap1aVYn.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./useAIKey-CpSw0zmN.js";
import "./client-wNJ1tNgU.js";
import "./api-BAg1LJRR.js";
import "./content-errors-D90Pz2ps.js";
const DragContext = reactExports.createContext(null);
function DragDropZone({ onDrop, children, className = "" }) {
  const [held, setHeld] = reactExports.useState(null);
  const [hover, setHover] = reactExports.useState(null);
  const pickUp = reactExports.useCallback((id) => setHeld(id), []);
  const release = reactExports.useCallback((zoneId) => {
    if (held && zoneId) {
      try {
        onDrop == null ? void 0 : onDrop(held, zoneId);
      } catch (err) {
        console.warn("[DragDropZone]", err);
      }
    }
    setHeld(null);
    setHover(null);
  }, [held, onDrop]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DragContext.Provider, { value: { held, hover, setHover, pickUp, release }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-dnd ${className}`, children }) });
}
function Item({ id, children, disabled = false, onPickup }) {
  const ctx = reactExports.useContext(DragContext);
  const [pressed, setPressed] = reactExports.useState(false);
  const handleStart = () => {
    if (disabled) return;
    ctx == null ? void 0 : ctx.pickUp(id);
    setPressed(true);
    try {
      onPickup == null ? void 0 : onPickup(id);
    } catch (e) {
    }
  };
  const handleEnd = () => {
    setPressed(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `n4-dnd-item ${pressed || (ctx == null ? void 0 : ctx.held) === id ? "is-held" : ""}`,
      tabIndex: 0,
      role: "button",
      "aria-grabbed": (ctx == null ? void 0 : ctx.held) === id,
      draggable: !disabled,
      onDragStart: (e) => {
        if (disabled) return;
        e.dataTransfer.setData("text/plain", id);
        handleStart();
      },
      onDragEnd: handleEnd,
      onTouchStart: handleStart,
      onTouchEnd: handleEnd,
      onKeyDown: (e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          handleStart();
        }
      },
      children
    }
  );
}
function Zone({ id, children, className = "" }) {
  const ctx = reactExports.useContext(DragContext);
  const active = (ctx == null ? void 0 : ctx.hover) === id;
  const onDragOver = (e) => {
    e.preventDefault();
    ctx == null ? void 0 : ctx.setHover(id);
  };
  const onDragLeave = () => ctx == null ? void 0 : ctx.setHover(null);
  const onDrop = (e) => {
    e.preventDefault();
    const dragged = e.dataTransfer.getData("text/plain");
    if (dragged) ctx == null ? void 0 : ctx.release(id);
    else ctx == null ? void 0 : ctx.release(id);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `n4-dnd-zone ${active ? "is-hover" : ""} ${className}`,
      onDragOver,
      onDragLeave,
      onDrop,
      onClick: () => {
        if (ctx == null ? void 0 : ctx.held) ctx.release(id);
      },
      onKeyDown: (e) => {
        if ((e.key === " " || e.key === "Enter") && (ctx == null ? void 0 : ctx.held)) {
          e.preventDefault();
          ctx.release(id);
        }
      },
      tabIndex: 0,
      role: "button",
      "aria-dropeffect": "move",
      children
    }
  );
}
DragDropZone.Item = Item;
DragDropZone.Zone = Zone;
DragDropZone.useContext = () => reactExports.useContext(DragContext);
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function MatchDragMode({ items, getWord, getMeaning, pairCount = 6, trainerId }) {
  const [matched, setMatched] = reactExports.useState({});
  const [flash, setFlash] = reactExports.useState(null);
  const [attempts, setAttempts] = reactExports.useState(0);
  const scoring = useScoreEngine(trainerId);
  const { gameKey, restart } = useGameRestart(scoring, {
    onReset: () => {
      setMatched({});
      setFlash(null);
      setAttempts(0);
    }
  });
  const pool = reactExports.useMemo(() => {
    const filtered = (items || []).filter((it) => getWord(it) && getMeaning(it));
    return shuffle(filtered).slice(0, pairCount);
  }, [items, getWord, getMeaning, pairCount, gameKey]);
  const zones = reactExports.useMemo(() => shuffle(pool.map((it) => ({ id: `zone-${getWord(it)}`, meaning: getMeaning(it), item: it }))), [pool, getWord, getMeaning]);
  const words = reactExports.useMemo(() => pool.map((it) => ({ id: `word-${getWord(it)}`, word: getWord(it), meaning: getMeaning(it), item: it })), [pool, getWord, getMeaning]);
  const total = pool.length;
  const done = total > 0 && Object.keys(matched).length === total;
  const handleDrop = reactExports.useCallback((itemId, zoneId) => {
    var _a, _b;
    setAttempts((a) => a + 1);
    const word = words.find((w) => w.id === itemId);
    const zone = zones.find((z) => z.id === zoneId);
    if (!word || !zone) return;
    const ok = word.meaning === zone.meaning;
    if (ok) {
      setMatched((m) => ({ ...m, [word.id]: true }));
      setFlash("correct");
      playSFX("correct");
      (_a = scoring.recordCorrect) == null ? void 0 : _a.call(scoring, word.item);
      try {
        bus.emit(GAME_EVENTS.ANSWER_SUBMITTED, {
          correct: true,
          itemKey: `v:${word.word}`,
          itemKind: "vocab",
          combo: scoring.combo + 1,
          phase: "core",
          trainerId,
          mode: "match-drag",
          ts: Date.now()
        });
      } catch (e) {
      }
    } else {
      setFlash({ wrong: zone.id });
      playSFX("wrong");
      (_b = scoring.recordWrong) == null ? void 0 : _b.call(scoring, word.item);
    }
    setTimeout(() => setFlash(null), 600);
  }, [words, zones, scoring, trainerId]);
  reactExports.useEffect(() => {
    if (done) playSFX("correct");
  }, [done]);
  if (pool.length < 2) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Cần ít nhất ",
        pairCount,
        " mục."
      ] })
    ] });
  }
  if (done) {
    const pct = Math.round(total / Math.max(attempts, total) * 100);
    const emoji = pct >= 90 ? "🏆" : pct >= 70 ? "🎉" : "👍";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-emoji", children: emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-result-title", children: "Hoàn thành!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Cặp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stat-value", children: [
            total,
            "/",
            total
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Lần thử" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value", children: attempts })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Chính xác" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stat-value", children: [
            pct,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 12, textAlign: "left", fontSize: "0.9rem" }, children: pool.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 700 }, lang: "ja", children: getWord(it) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { opacity: 0.6 }, children: "→" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: getMeaning(it) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(getWord(it)), style: { marginLeft: "auto" }, children: "🔊" })
      ] }, getWord(it))) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", style: { width: "100%", marginTop: 12 }, onClick: restart, children: "🔁 Chơi lại" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DragDropZone, { onDrop: handleDrop, className: "n4-match-drag", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini-fill", style: { width: `${Object.keys(matched).length / total * 100}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-match-drag-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-match-drag-col n4-match-drag-words", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "🇯🇵 Từ" }),
        words.filter((w) => !matched[w.id]).map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(DragDropZone.Item, { id: w.id, onPickup: () => speakJP(w.word), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { lang: "ja", children: w.word }) }, w.id))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-match-drag-col n4-match-drag-zones", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "🇻🇳 Nghĩa" }),
        zones.map((z) => {
          const isMatched = Object.keys(matched).some((wid) => {
            var _a;
            return ((_a = words.find((w) => w.id === wid)) == null ? void 0 : _a.meaning) === z.meaning;
          });
          const isWrong = flash && typeof flash === "object" && flash.wrong === z.id;
          if (isMatched) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(DragDropZone.Zone, { id: z.id, className: isWrong ? "is-wrong" : "", children: z.meaning }, z.id);
        })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-match-drag-stats", children: [
      "Đã nối: ",
      Object.keys(matched).length,
      "/",
      total,
      " · Thử: ",
      attempts,
      flash === "correct" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-feedback-correct", style: { marginLeft: 8 }, children: "✓" })
    ] })
  ] });
}
const MatchDragMode$1 = reactExports.memo(MatchDragMode);
const TOPIC_CATEGORIES = [
  {
    id: "food",
    labelVi: "🍱 Ẩm thực",
    keywords: [
      "ご飯",
      "ごはん",
      "食べ",
      "たべ",
      "飲",
      "のむ",
      "料理",
      "りょうり",
      "パン",
      "肉",
      "にく",
      "野菜",
      "やさい",
      "果物",
      "くだもの",
      "魚",
      "さかな",
      "すし",
      "寿司",
      "ラーメン",
      "らーめん",
      "お茶",
      "おちゃ",
      "コーヒー",
      "牛乳",
      "ぎゅうにゅう",
      "水",
      "みず",
      "ビール",
      "たまご",
      "卵",
      "みかん",
      "りんご",
      "バナナ",
      "味",
      "あじ",
      "辛",
      "甘",
      "塩",
      "醤油",
      "ケーキ",
      "お菓子"
    ]
  },
  {
    id: "transport",
    labelVi: "🚃 Giao thông",
    keywords: [
      "電車",
      "でんしゃ",
      "車",
      "くるま",
      "自動車",
      "じどうしゃ",
      "自転車",
      "じてんしゃ",
      "バス",
      "タクシー",
      "飛行機",
      "ひこうき",
      "船",
      "ふね",
      "地下鉄",
      "ちかてつ",
      "駅",
      "えき",
      "空港",
      "くうこう",
      "乗",
      "のる",
      "降",
      "おりる",
      "切符",
      "きっぷ",
      "出発",
      "しゅっぱつ",
      "到着",
      "とうちゃつ",
      "道",
      "みち",
      "地図",
      "ちず"
    ]
  },
  {
    id: "school",
    labelVi: "🏫 Trường học",
    keywords: [
      "学校",
      "がっこう",
      "先生",
      "せんせい",
      "学生",
      "がくせい",
      "勉強",
      "べんきょう",
      "授業",
      "じゅぎょう",
      "教室",
      "きょうしつ",
      "試験",
      "しけん",
      "本",
      "ほん",
      "鉛筆",
      "えんぴつ",
      "ペン",
      "ノート",
      "辞書",
      "じしょ",
      "宿題",
      "しゅくだい",
      "大学",
      "だいがく",
      "卒業",
      "そつぎょう",
      "入学",
      "にゅうがく",
      "成績",
      "せいせき"
    ]
  },
  {
    id: "work",
    labelVi: "💼 Công việc",
    keywords: [
      "仕事",
      "しごと",
      "会社",
      "かいしゃ",
      "会議",
      "かいぎ",
      "電話",
      "でんわ",
      "書類",
      "しょるい",
      "上司",
      "じょうし",
      "同僚",
      "どうりょう",
      "給料",
      "きゅうりょう",
      "働",
      "はたらく",
      "残業",
      "ざんぎょう",
      "メール",
      "パソコン",
      "コンピューター",
      "報告"
    ]
  },
  {
    id: "body-health",
    labelVi: "🏥 Sức khỏe",
    keywords: [
      "病気",
      "びょうき",
      "病院",
      "びょういん",
      "医者",
      "いしゃ",
      "薬",
      "くすり",
      "頭",
      "あたま",
      "体",
      "からだ",
      "目",
      "め",
      "耳",
      "みみ",
      "鼻",
      "はな",
      "口",
      "くち",
      "手",
      "て",
      "足",
      "あし",
      "熱",
      "ねつ",
      "痛",
      "いたい",
      "元気",
      "げんき",
      "疲",
      "つかれる",
      "休",
      "やすむ"
    ]
  },
  {
    id: "home",
    labelVi: "🏠 Nhà cửa",
    keywords: [
      "家",
      "いえ",
      "うち",
      "部屋",
      "へや",
      "ドア",
      "窓",
      "まど",
      "台所",
      "だいどころ",
      "お風呂",
      "おふろ",
      "トイレ",
      "掃除",
      "そうじ",
      "洗濯",
      "せんたく",
      "料理",
      "りょうり",
      "冷蔵庫",
      "れいぞうこ",
      "テレビ",
      "テーブル",
      "いす",
      "椅子",
      "机",
      "つくえ",
      "庭",
      "にわ",
      "アパート",
      "マンション"
    ]
  },
  {
    id: "shopping",
    labelVi: "🛍️ Mua sắm",
    keywords: [
      "買",
      "かう",
      "売",
      "うる",
      "店",
      "みせ",
      "スーパー",
      "デパート",
      "値段",
      "ねだん",
      "円",
      "えん",
      "高",
      "たかい",
      "安",
      "やすい",
      "安い",
      "服",
      "ふく",
      "靴",
      "くつ",
      "財布",
      "さいふ",
      "お金",
      "おかね",
      "払",
      "はらう",
      "レジ",
      "セール",
      "割引",
      "わりびき",
      "領収書",
      "りょうしゅうしょ"
    ]
  },
  {
    id: "nature",
    labelVi: "🌿 Thiên nhiên",
    keywords: [
      "花",
      "はな",
      "木",
      "き",
      "山",
      "やま",
      "川",
      "かわ",
      "海",
      "うみ",
      "空",
      "そら",
      "雨",
      "あめ",
      "雪",
      "ゆき",
      "風",
      "かぜ",
      "月",
      "つき",
      "星",
      "ほし",
      "太陽",
      "たいよう",
      "森",
      "もり",
      "池",
      "いけ",
      "島",
      "しま",
      "動物",
      "どうぶつ",
      "犬",
      "いぬ",
      "猫",
      "ねこ"
    ]
  }
];
function detectVerbGroup(word, reading) {
  if (!word && !reading) return null;
  const w = word || reading || "";
  if (w === "する" || w === "くる" || w === "来る" || w.endsWith("する")) return "G3";
  if (/[いきしちにひみりえけせてねへめれ]る$/.test(reading || "")) {
    const g1Exceptions = ["走", "知", "要", "帰", "切", "入", "握", "蹴", "練", "参", "限", "滑", "喋"];
    if (g1Exceptions.some((k) => w.startsWith(k))) return "G1";
    return "G2";
  }
  if (/[うくぐすつぬぶむ]$/.test(reading || "")) return "G1";
  if (/る$/.test(reading || "")) return "G2";
  return null;
}
const VERB_GROUP_CATEGORIES = [
  { id: "G1", labelVi: "🔵 Nhóm 1 (う-động từ)" },
  { id: "G2", labelVi: "🟢 Nhóm 2 (る-động từ)" },
  { id: "G3", labelVi: "🔴 Nhóm 3 (đặc biệt)" }
];
const FORMALITY_GROUPS = [
  { id: "formal", labelVi: "🎩 Lịch sự (です/ます)" },
  { id: "casual", labelVi: "😊 Thân mật (plain)" },
  { id: "honorific", labelVi: "🙇 Kính ngữ (お〜/ご〜)" }
];
const FORMALITY_MARKERS = {
  formal: ["です", "ます", "ました", "ません", "でした", "ていただく", "おります"],
  casual: ["だ", "だろ", "じゃない", "てる", "てた", "なかった", "ない"],
  honorific: ["おっしゃ", "いらっしゃ", "ご", "お〜", "くださ", "いただ", "さしあげ", "まいる"]
};
const MINIMAL_PAIRS = [
  // きる vs きいる
  {
    a: "着る",
    b: "聞いる",
    readingA: "きる",
    readingB: "きいる",
    meaningA: "mặc (quần áo)",
    meaningB: "đang nghe",
    hint: "「き」ngắn vs「きい」dài"
  },
  // かう vs かよう
  {
    a: "買う",
    b: "通う",
    readingA: "かう",
    readingB: "かよう",
    meaningA: "mua",
    meaningB: "đi lại, thông qua",
    hint: "「かう」kết thúc ở う vs「かよう」dài hơn"
  },
  // はし — phân biệt thanh điệu
  {
    a: "橋",
    b: "箸",
    readingA: "はし (cầu)",
    readingB: "はし (đũa)",
    meaningA: "cây cầu",
    meaningB: "đôi đũa",
    hint: "Cùng âm 「はし」, nghĩa khác nhau"
  },
  // いく vs いける
  {
    a: "行く",
    b: "行ける",
    readingA: "いく",
    readingB: "いける",
    meaningA: "đi",
    meaningB: "có thể đi",
    hint: "「いく」plain vs「いける」khả năng"
  },
  // みる vs みえる
  {
    a: "見る",
    b: "見える",
    readingA: "みる",
    readingB: "みえる",
    meaningA: "nhìn (chủ động)",
    meaningB: "thấy (bị động)",
    hint: "みる=chủ động nhìn, みえる=thấy được"
  },
  // のむ vs のみる
  {
    a: "飲む",
    b: "飲み込む",
    readingA: "のむ",
    readingB: "のみこむ",
    meaningA: "uống",
    meaningB: "nuốt",
    hint: "「のむ」vs「のみこむ」thêm「こむ」"
  },
  // あける vs あく
  {
    a: "開ける",
    b: "開く",
    readingA: "あける",
    readingB: "あく",
    meaningA: "mở ra (타동사)",
    meaningB: "mở ra (自動詞)",
    hint: "あける=mở (ai đó mở), あく=tự mở"
  },
  // おきる vs おく
  {
    a: "起きる",
    b: "置く",
    readingA: "おきる",
    readingB: "おく",
    meaningA: "thức dậy",
    meaningB: "đặt xuống",
    hint: "「おきる」vs「おく」âm rất giống"
  },
  // かえる vs かわる
  {
    a: "帰る",
    b: "変わる",
    readingA: "かえる",
    readingB: "かわる",
    meaningA: "về nhà",
    meaningB: "thay đổi",
    hint: "「かえ」vs「かわ」khác ở âm đệm"
  },
  // きく vs きこえる
  {
    a: "聞く",
    b: "聞こえる",
    readingA: "きく",
    readingB: "きこえる",
    meaningA: "nghe (chủ động)",
    meaningB: "nghe thấy (bị động)",
    hint: "きく=chủ động nghe, きこえる=nghe thấy được"
  },
  // つく vs つける
  {
    a: "着く",
    b: "付ける",
    readingA: "つく",
    readingB: "つける",
    meaningA: "đến nơi",
    meaningB: "gắn vào",
    hint: "「つく」tự động,「つける」타동"
  },
  // すむ vs すます
  {
    a: "住む",
    b: "済ます",
    readingA: "すむ",
    readingB: "すます",
    meaningA: "sinh sống",
    meaningB: "xong xuôi",
    hint: "「すむ」ngắn, 「すます」dài hơn"
  },
  // のる vs のせる
  {
    a: "乗る",
    b: "乗せる",
    readingA: "のる",
    readingB: "のせる",
    meaningA: "lên (phương tiện)",
    meaningB: "cho lên, chở",
    hint: "のる=tự lên, のせる=đặt/chở lên"
  },
  // てつだう vs てつだい
  {
    a: "手伝う",
    b: "手伝い",
    readingA: "てつだう",
    readingB: "てつだい",
    meaningA: "giúp đỡ (động từ)",
    meaningB: "sự giúp đỡ (danh từ)",
    hint: "「てつだう」=动词, 「てつだい」=名詞"
  },
  // とる vs とれる
  {
    a: "取る",
    b: "取れる",
    readingA: "とる",
    readingB: "とれる",
    meaningA: "lấy",
    meaningB: "có thể lấy",
    hint: "「とる」plain vs「とれる」khả năng"
  }
];
const SCENE_DESCRIPTIONS = [
  {
    id: "restaurant",
    emoji: "🍽️🍜👨‍🍳💴",
    titleVi: "Nhà hàng Nhật",
    items: [
      { word: "レストラン", reading: "レストラン", meaning: "nhà hàng" },
      { word: "料理", reading: "りょうり", meaning: "món ăn / nấu ăn" },
      { word: "注文", reading: "ちゅうもん", meaning: "đặt món" },
      { word: "お金", reading: "おかね", meaning: "tiền" },
      { word: "メニュー", reading: "メニュー", meaning: "thực đơn" }
    ]
  },
  {
    id: "station",
    emoji: "🚉🎫🚂⏰",
    titleVi: "Ga tàu",
    items: [
      { word: "駅", reading: "えき", meaning: "ga tàu" },
      { word: "電車", reading: "でんしゃ", meaning: "tàu điện" },
      { word: "切符", reading: "きっぷ", meaning: "vé tàu" },
      { word: "時間", reading: "じかん", meaning: "thời gian" },
      { word: "乗る", reading: "のる", meaning: "lên (tàu)" }
    ]
  },
  {
    id: "hospital",
    emoji: "🏥👨‍⚕️💊🤒",
    titleVi: "Bệnh viện",
    items: [
      { word: "病院", reading: "びょういん", meaning: "bệnh viện" },
      { word: "医者", reading: "いしゃ", meaning: "bác sĩ" },
      { word: "薬", reading: "くすり", meaning: "thuốc" },
      { word: "病気", reading: "びょうき", meaning: "bệnh tật" },
      { word: "熱", reading: "ねつ", meaning: "sốt / nhiệt" }
    ]
  },
  {
    id: "school",
    emoji: "🏫📚✏️👩‍🏫",
    titleVi: "Lớp học",
    items: [
      { word: "学校", reading: "がっこう", meaning: "trường học" },
      { word: "先生", reading: "せんせい", meaning: "giáo viên" },
      { word: "勉強", reading: "べんきょう", meaning: "học tập" },
      { word: "ノート", reading: "ノート", meaning: "vở ghi chép" },
      { word: "鉛筆", reading: "えんぴつ", meaning: "bút chì" }
    ]
  },
  {
    id: "shopping",
    emoji: "🛍️🏪💴👕",
    titleVi: "Mua sắm",
    items: [
      { word: "買い物", reading: "かいもの", meaning: "mua sắm" },
      { word: "値段", reading: "ねだん", meaning: "giá cả" },
      { word: "高い", reading: "たかい", meaning: "đắt / cao" },
      { word: "安い", reading: "やすい", meaning: "rẻ" },
      { word: "服", reading: "ふく", meaning: "quần áo" }
    ]
  },
  {
    id: "park",
    emoji: "🌳🌸🐕☀️",
    titleVi: "Công viên",
    items: [
      { word: "公園", reading: "こうえん", meaning: "công viên" },
      { word: "花", reading: "はな", meaning: "hoa" },
      { word: "犬", reading: "いぬ", meaning: "chó" },
      { word: "天気", reading: "てんき", meaning: "thời tiết" },
      { word: "散歩", reading: "さんぽ", meaning: "đi dạo" }
    ]
  },
  {
    id: "home",
    emoji: "🏠🍳🛋️🧹",
    titleVi: "Ở nhà",
    items: [
      { word: "家", reading: "いえ", meaning: "ngôi nhà" },
      { word: "料理", reading: "りょうり", meaning: "nấu ăn" },
      { word: "掃除", reading: "そうじ", meaning: "dọn dẹp" },
      { word: "洗濯", reading: "せんたく", meaning: "giặt đồ" },
      { word: "部屋", reading: "へや", meaning: "phòng" }
    ]
  },
  {
    id: "travel",
    emoji: "✈️🧳🏨🗺️",
    titleVi: "Du lịch",
    items: [
      { word: "旅行", reading: "りょこう", meaning: "du lịch" },
      { word: "飛行機", reading: "ひこうき", meaning: "máy bay" },
      { word: "ホテル", reading: "ホテル", meaning: "khách sạn" },
      { word: "地図", reading: "ちず", meaning: "bản đồ" },
      { word: "空港", reading: "くうこう", meaning: "sân bay" }
    ]
  }
];
const TIMER_SECONDS = 90;
const SORT_TYPES = [
  { id: "section", label: "📂 Theo phần", desc: "Phân loại theo mục từ vựng" },
  { id: "topic", label: "🏷️ Theo chủ đề", desc: "Phân loại theo chủ đề (thức ăn, giao thông…)" },
  { id: "verb-group", label: "🔤 Nhóm động từ", desc: "Nhóm 1 / Nhóm 2 / Nhóm 3" },
  { id: "formality", label: "🎩 Trang trọng", desc: "Lịch sự / Thông thường / Kính ngữ" }
];
function seededPick(arr, seed, count) {
  if (!arr.length) return [];
  const out = [];
  const used = /* @__PURE__ */ new Set();
  let s = seed;
  while (out.length < count && out.length < arr.length) {
    s = s * 1664525 + 1013904223 & 4294967295;
    const idx = Math.abs(s) % arr.length;
    if (!used.has(idx)) {
      used.add(idx);
      out.push(arr[idx]);
    }
  }
  return out;
}
function CategorySortMode({ items, maxQuestions = 16, sortType: initialSortType = "section" }) {
  var _a;
  const { onCorrect, onWrong } = useScoreEngine();
  const [sortType, setSortType] = reactExports.useState(initialSortType);
  const [sessionKey, setSessionKey] = reactExports.useState(0);
  const { categories, wordList } = reactExports.useMemo(() => {
    var _a2;
    if (!items || items.length < 6) return { categories: [], wordList: [] };
    const seed = parseInt((/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, ""), 10) + sessionKey * 9999;
    if (sortType === "topic") {
      const matched = [];
      for (const topic of TOPIC_CATEGORIES) {
        const topicItems = items.filter((it) => {
          const text = `${it.word || ""}${it.reading || ""}${it.meaning || ""}`.toLowerCase();
          return topic.keywords.some((kw) => text.includes(kw));
        });
        if (topicItems.length >= 3) matched.push({ sec: topic.id, label: topic.labelVi, words: topicItems });
      }
      const topCats = matched.sort((a, b) => b.words.length - a.words.length).slice(0, 3);
      if (topCats.length < 2) return { categories: [], wordList: [] };
      const cats2 = topCats.map((c) => ({ sec: c.sec, label: c.label }));
      const allWords2 = [];
      for (const c of topCats) {
        const picked = seededPick(c.words, seed + allWords2.length, Math.min(5, c.words.length));
        for (const w of picked) allWords2.push({ ...w, _correct_sec: c.sec });
      }
      return { categories: cats2, wordList: shuffleArray$1(allWords2).slice(0, maxQuestions) };
    }
    if (sortType === "verb-group") {
      const groups = { G1: [], G2: [], G3: [] };
      for (const it of items) {
        const g = detectVerbGroup(it.word || "", it.reading || "");
        if (g && groups[g]) groups[g].push(it);
      }
      const topCats = VERB_GROUP_CATEGORIES.filter((vc) => groups[vc.id].length >= 2).map((vc) => ({ sec: vc.id, label: vc.labelVi, words: groups[vc.id] }));
      if (topCats.length < 2) return { categories: [], wordList: [] };
      const cats2 = topCats.map((c) => ({ sec: c.sec, label: c.label }));
      const allWords2 = [];
      for (const c of topCats) {
        const picked = seededPick(c.words, seed + allWords2.length, Math.min(5, c.words.length));
        for (const w of picked) allWords2.push({ ...w, _correct_sec: c.sec });
      }
      return { categories: cats2, wordList: shuffleArray$1(allWords2).slice(0, maxQuestions) };
    }
    if (sortType === "formality") {
      const groups = {};
      for (const fg of FORMALITY_GROUPS) groups[fg.id] = [];
      for (const it of items) {
        const text = `${it.word || ""}${it.reading || ""}${it.meaning || ""}`;
        for (const [level, markers] of Object.entries(FORMALITY_MARKERS)) {
          if (markers.some((m) => text.includes(m))) {
            (_a2 = groups[level]) == null ? void 0 : _a2.push(it);
            break;
          }
        }
      }
      const topCats = FORMALITY_GROUPS.filter((fg) => (groups[fg.id] || []).length >= 2).map((fg) => ({ sec: fg.id, label: fg.labelVi, words: groups[fg.id] }));
      if (topCats.length < 2) return { categories: [], wordList: [] };
      const cats2 = topCats.map((c) => ({ sec: c.sec, label: c.label }));
      const allWords2 = [];
      for (const c of topCats) {
        const picked = seededPick(c.words, seed + allWords2.length, Math.min(5, c.words.length));
        for (const w of picked) allWords2.push({ ...w, _correct_sec: c.sec });
      }
      return { categories: cats2, wordList: shuffleArray$1(allWords2).slice(0, maxQuestions) };
    }
    const bySec = {};
    for (const it of items) {
      const sec = it._section || it.section || "?";
      if (!bySec[sec]) bySec[sec] = { label: it._sectionTitle || sec, words: [] };
      bySec[sec].words.push(it);
    }
    const topSecs = Object.entries(bySec).filter(([, v]) => v.words.length >= 3).sort((a, b) => b[1].words.length - a[1].words.length).slice(0, 3);
    if (topSecs.length < 2) return { categories: [], wordList: [] };
    const cats = topSecs.map(([sec, val]) => ({ sec, label: val.label }));
    const allWords = [];
    for (const [sec, val] of topSecs) {
      const picked = seededPick(val.words, seed + allWords.length, Math.min(5, val.words.length));
      for (const w of picked) allWords.push({ ...w, _correct_sec: sec });
    }
    return { categories: cats, wordList: shuffleArray$1(allWords).slice(0, maxQuestions) };
  }, [items, maxQuestions, sortType, sessionKey]);
  const [remaining, setRemaining] = reactExports.useState(() => wordList);
  const [placed, setPlaced] = reactExports.useState({});
  const [dragging, setDragging] = reactExports.useState(null);
  const [timeLeft, setTimeLeft] = reactExports.useState(TIMER_SECONDS);
  const [done, setDone] = reactExports.useState(false);
  const [score, setScore] = reactExports.useState({ correct: 0, wrong: 0 });
  const [started, setStarted] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    setRemaining(wordList);
    setPlaced({});
    setScore({ correct: 0, wrong: 0 });
    setTimeLeft(TIMER_SECONDS);
    setDone(false);
    setStarted(false);
  }, [wordList]);
  reactExports.useEffect(() => {
    if (!started || done) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          setDone(true);
          return 0;
        }
        return t - 1;
      });
    }, 1e3);
    return () => clearInterval(timerRef.current);
  }, [started, done]);
  reactExports.useEffect(() => {
    if (started && remaining.length === 0) {
      clearInterval(timerRef.current);
      setDone(true);
    }
  }, [remaining, started]);
  const handleDrop = reactExports.useCallback((sec, e) => {
    e.preventDefault();
    if (dragging === null) return;
    const word = remaining[dragging];
    if (!word) return;
    const correct = word._correct_sec === sec;
    setPlaced((p) => ({ ...p, [dragging]: correct ? "correct" : "wrong" }));
    setRemaining((r) => r.filter((_, i) => i !== dragging));
    setScore((s) => ({ correct: s.correct + (correct ? 1 : 0), wrong: s.wrong + (correct ? 0 : 1) }));
    if (correct) onCorrect(word);
    else onWrong(word);
    setDragging(null);
  }, [dragging, remaining, onCorrect, onWrong]);
  const handleClickPlace = reactExports.useCallback((wordIdx, sec) => {
    const word = remaining[wordIdx];
    if (!word) return;
    const correct = word._correct_sec === sec;
    setPlaced((p) => ({ ...p, [wordIdx]: correct ? "correct" : "wrong" }));
    setRemaining((r) => r.filter((_, i) => i !== wordIdx));
    setScore((s) => ({ correct: s.correct + (correct ? 1 : 0), wrong: s.wrong + (correct ? 0 : 1) }));
    if (correct) onCorrect(word);
    else onWrong(word);
  }, [remaining, onCorrect, onWrong]);
  const handleReset = () => {
    setSessionKey((k) => k + 1);
    setRemaining(wordList);
    setPlaced({});
    setScore({ correct: 0, wrong: 0 });
    setTimeLeft(TIMER_SECONDS);
    setDone(false);
    setStarted(false);
  };
  if (categories.length < 2) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mode-empty-icon", children: "🗂️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: 'Không đủ dữ liệu từ vựng để chơi Category Sort. Hãy chọn "Tất cả" phần từ vựng.' })
    ] });
  }
  const totalWords = wordList.length;
  const placedCount = totalWords - remaining.length;
  const accuracy = placedCount > 0 ? Math.round(score.correct / placedCount * 100) : 0;
  const speedBonus = done && timeLeft > 0 ? Math.round(timeLeft * 0.5) : 0;
  const finalScore = score.correct * 10 + speedBonus;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-category-sort", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sort-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sort-timer", style: { color: timeLeft < 15 ? "var(--n4-danger, #f44)" : "var(--n4-accent)" }, children: [
        "⏱ ",
        timeLeft,
        "s"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sort-progress", children: [
        placedCount,
        "/",
        totalWords,
        " từ"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sort-score", children: [
        "✅ ",
        score.correct,
        " / ❌ ",
        score.wrong
      ] })
    ] }),
    started && !done && remaining[0] && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScaffoldingLayer,
      {
        currentItem: remaining[0],
        text: remaining[0].word || remaining[0].kanji || "",
        toolbarConfig: { hint: false, reveal: false, speak: true, bookmark: true, lookup: true, drawer: true }
      }
    ),
    !started && !done && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sort-start-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sort-start-icon", children: "🗂️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Phân loại tốc độ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", margin: "8px 0" }, children: SORT_TYPES.map((st) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-btn n4-btn-sm ${sortType === st.id ? "n4-btn-primary" : "n4-btn-ghost"}`,
          onClick: () => setSortType(st.id),
          title: st.desc,
          children: st.label
        },
        st.id
      )) }),
      categories.length < 2 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "var(--n4-danger, #f44)" }, children: [
        '⚠ Không đủ dữ liệu cho chế độ "',
        (_a = SORT_TYPES.find((s) => s.id === sortType)) == null ? void 0 : _a.label,
        '". Hãy chọn chế độ khác hoặc chọn "Tất cả" phần từ vựng.'
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Sắp xếp ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: totalWords }),
          " từ vào ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: categories.length }),
          " chủ đề trong ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: TIMER_SECONDS }),
          " giây!"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-sort-hint", children: "💡 Kéo thẻ từ vào đúng hộp chủ đề bên dưới, hoặc nhấn từ rồi nhấn chủ đề." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-sort-start-btn", onClick: () => setStarted(true), children: "▶ Bắt đầu" })
      ] })
    ] }),
    done && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sort-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sort-result-icon", children: accuracy >= 80 ? "🏆" : accuracy >= 50 ? "⭐" : "💪" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: accuracy >= 80 ? "Xuất sắc!" : accuracy >= 50 ? "Tốt lắm!" : "Cố lên!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sort-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✅ Đúng:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: score.correct })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "❌ Sai:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: score.wrong })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🎯 Chính xác:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            accuracy,
            "%"
          ] })
        ] }),
        speedBonus > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚡ Điểm thưởng tốc độ:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            "+",
            speedBonus
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🏆 Tổng điểm:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: finalScore })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: handleReset, children: "🔄 Chơi lại" })
    ] }),
    started && !done && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sort-word-pool", children: [
        remaining.map((word, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: `n4-sort-word-chip${dragging === i ? " dragging" : ""}`,
            draggable: true,
            onDragStart: () => setDragging(i),
            onDragEnd: () => setDragging(null),
            onClick: () => {
              setDragging(dragging === i ? null : i);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-sort-word-jp", children: word.word || word.kanji || word.title || "" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-sort-word-vi", children: word.meaning || "" })
            ]
          },
          i
        )),
        remaining.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sort-all-placed", children: "Đã đặt tất cả từ! ✓" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sort-categories", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: `n4-sort-category${dragging !== null ? " drop-target" : ""}`,
          onDragOver: (e) => e.preventDefault(),
          onDrop: (e) => handleDrop(cat.sec, e),
          onClick: () => dragging !== null && handleClickPlace(dragging, cat.sec),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sort-cat-label", children: cat.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sort-cat-hint", children: "Kéo vào đây" })
          ]
        },
        cat.sec
      )) })
    ] })
  ] });
}
const GRID_SIZE = 5;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;
function checkWin(marked) {
  const size = GRID_SIZE;
  for (let r = 0; r < size; r++) {
    if (Array.from({ length: size }, (_, c) => r * size + c).every((i) => marked.has(i))) return true;
  }
  for (let c = 0; c < size; c++) {
    if (Array.from({ length: size }, (_, r) => r * size + c).every((i) => marked.has(i))) return true;
  }
  if (Array.from({ length: size }, (_, i) => i * size + i).every((i) => marked.has(i))) return true;
  if (Array.from({ length: size }, (_, i) => i * size + (size - 1 - i)).every((i) => marked.has(i))) return true;
  return false;
}
function BingoMode({ items, difficulty = "normal" }) {
  const { onCorrect, onWrong } = useScoreEngine();
  const variant = difficulty === "hard" ? "audio" : "standard";
  const buildRound2 = reactExports.useCallback(() => {
    const pool = shuffleArray$1([...items || []]).slice(0, TOTAL_CELLS);
    return pool;
  }, [items]);
  const [grid, setGrid] = reactExports.useState(() => buildRound2());
  const [marked, setMarked] = reactExports.useState(/* @__PURE__ */ new Set());
  const [wrong, setWrong] = reactExports.useState(/* @__PURE__ */ new Set());
  const [currentIdx, setCurrentIdx] = reactExports.useState(null);
  const [calledSoFar, setCalledSoFar] = reactExports.useState([]);
  const [calledHistory, setCalledHistory] = reactExports.useState([]);
  const [won, setWon] = reactExports.useState(false);
  const [finished, setFinished] = reactExports.useState(false);
  const [score, setScore] = reactExports.useState({ correct: 0, wrong: 0 });
  const [started, setStarted] = reactExports.useState(false);
  const [waitingClick, setWaitingClick] = reactExports.useState(false);
  const [showHistory, setShowHistory] = reactExports.useState(false);
  const answerLockRef = reactExports.useRef(false);
  const callWord = reactExports.useCallback(() => {
    const uncalled = grid.map((_, i) => i).filter((i) => !calledSoFar.includes(i));
    if (uncalled.length === 0) {
      setFinished(true);
      return;
    }
    const idx = uncalled[Math.floor(Math.random() * uncalled.length)];
    const item = grid[idx];
    setCurrentIdx(idx);
    setCalledSoFar((prev) => [...prev, idx]);
    setCalledHistory((prev) => [
      { word: (item == null ? void 0 : item.word) || (item == null ? void 0 : item.kanji) || "?", meaning: (item == null ? void 0 : item.meaning) || "" },
      ...prev
    ]);
    setWaitingClick(true);
    answerLockRef.current = false;
    speakJP((item == null ? void 0 : item.word) || (item == null ? void 0 : item.kanji) || "");
  }, [grid, calledSoFar]);
  const handleCellClick = reactExports.useCallback((cellIdx) => {
    if (!waitingClick || won || finished || answerLockRef.current) return;
    const isCorrect = cellIdx === currentIdx;
    if (isCorrect) {
      answerLockRef.current = true;
      const newMarked = new Set(marked);
      newMarked.add(cellIdx);
      setMarked(newMarked);
      onCorrect(grid[cellIdx]);
      setScore((s) => ({ ...s, correct: s.correct + 1 }));
      if (checkWin(newMarked)) {
        setWon(true);
        return;
      }
      setWaitingClick(false);
    } else {
      const newWrong = new Set(wrong);
      newWrong.add(cellIdx);
      setWrong(newWrong);
      onWrong(grid[cellIdx]);
      setScore((s) => ({ ...s, wrong: s.wrong + 1 }));
      setTimeout(() => setWrong((prev) => {
        const n = new Set(prev);
        n.delete(cellIdx);
        return n;
      }), 800);
    }
  }, [waitingClick, won, finished, currentIdx, marked, wrong, onCorrect, onWrong, grid]);
  const handleReset = () => {
    answerLockRef.current = false;
    const newGrid = buildRound2();
    setGrid(newGrid);
    setMarked(/* @__PURE__ */ new Set());
    setWrong(/* @__PURE__ */ new Set());
    setCurrentIdx(null);
    setCalledSoFar([]);
    setCalledHistory([]);
    setWon(false);
    setFinished(false);
    setScore({ correct: 0, wrong: 0 });
    setStarted(false);
    setWaitingClick(false);
    setShowHistory(false);
  };
  const currentWord = currentIdx !== null ? grid[currentIdx] : null;
  if (!items || items.length < TOTAL_CELLS) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mode-empty-icon", children: "🎰" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: 'Cần ít nhất 25 từ để chơi Bingo 5×5. Hãy chọn "Tất cả" hoặc phần có nhiều từ hơn.' })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-bingo", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-bingo-call-area", children: !started ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-bingo-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "3rem" }, children: "🎰" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Bingo từ vựng 5×5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: variant === "audio" ? "🔊 Nghe TTS → tìm ô nghĩa đúng mà không thấy từ!" : "Nghe từ tiếng Nhật → tìm và nhấn ô đúng!" }),
      variant === "audio" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-bingo-hint", children: "⚙️ Đang ở độ khó khó: chỉ nghe, không hiện từ." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-bingo-hint", children: "🏆 Hoàn thành 1 hàng, cột hoặc đường chéo → BINGO!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: () => {
        setStarted(true);
        setTimeout(callWord, 400);
      }, children: "▶ Bắt đầu" })
    ] }) : won ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-bingo-won", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-bingo-won-text", children: "🎉 BINGO!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "✅ ",
        score.correct,
        " đúng · ❌ ",
        score.wrong,
        " sai"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", style: { marginTop: 12 }, onClick: handleReset, children: "🔄 Chơi lại" })
    ] }) : finished ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-bingo-won", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2rem" }, children: "😅" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Hết từ! Không có BINGO lần này." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "✅ ",
        score.correct,
        " đúng · ❌ ",
        score.wrong,
        " sai"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", style: { marginTop: 12 }, onClick: handleReset, children: "🔄 Chơi lại" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      currentWord && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-bingo-current", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-bingo-current-label", children: "Tìm từ:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "n4-bingo-speak-btn",
            onClick: () => speakJP(currentWord.word || currentWord.kanji || ""),
            title: "Phát âm lại",
            children: variant === "audio" ? "🔊 ???" : `🔊 ${currentWord.word || currentWord.kanji || "?"}`
          }
        ),
        variant === "standard" && currentWord.reading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-bingo-current-hint", children: [
          "(",
          currentWord.reading,
          ")"
        ] }),
        variant === "audio" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-bingo-current-hint", children: "Nhấn 🔊 để nghe lại · Tìm ô có nghĩa đúng" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "n4-btn n4-btn-ghost n4-btn-sm",
          style: { marginBottom: 4 },
          onClick: () => setShowHistory((h) => !h),
          children: [
            "📜 ",
            showHistory ? "Ẩn" : "Xem",
            " lịch sử (",
            calledHistory.length,
            ")"
          ]
        }
      ),
      showHistory && calledHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-bingo-history", children: calledHistory.slice(0, 8).map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-bingo-history-chip", children: [
        i === 0 ? "⬅ " : "",
        h.word,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("em", { style: { opacity: 0.7 }, children: [
          "(",
          h.meaning,
          ")"
        ] })
      ] }, i)) }),
      !waitingClick && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-bingo-next-btn", onClick: callWord, children: "Từ tiếp theo ▶" }),
      currentWord && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScaffoldingLayer,
        {
          currentItem: currentWord,
          text: currentWord.word || currentWord.kanji || "",
          toolbarConfig: { hint: false, reveal: false, speak: false, bookmark: true, lookup: true, drawer: false },
          compact: true
        }
      )
    ] }) }),
    started && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "n4-bingo-grid",
        style: { gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` },
        children: grid.map((item, i) => {
          const isMarked = marked.has(i);
          const isWrong = wrong.has(i);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: `n4-bingo-cell${isMarked ? " marked" : ""}${isWrong ? " wrong-flash" : ""}`,
              onClick: () => handleCellClick(i),
              disabled: isMarked || !waitingClick && !won && !finished,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-bingo-cell-meaning", children: item.meaning || item.title || "?" }),
                isMarked && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-bingo-cell-check", children: "✓" })
              ]
            },
            i
          );
        })
      }
    )
  ] });
}
var dist = {};
var rive$1 = { exports: {} };
var rive = rive$1.exports;
var hasRequiredRive;
function requireRive() {
  if (hasRequiredRive) return rive$1.exports;
  hasRequiredRive = 1;
  (function(module, exports$1) {
    (function webpackUniversalModuleDefinition(root, factory) {
      module.exports = factory();
    })(rive, () => {
      return (
        /******/
        (() => {
          var __webpack_modules__ = [
            ,
            /* 1 */
            /***/
            ((__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var Rive = (() => {
                var _a;
                var _scriptName = typeof document != "undefined" ? (_a = document.currentScript) == null ? void 0 : _a.src : void 0;
                return (function(moduleArg = {}) {
                  var moduleRtn;
                  var m = moduleArg, ba, ca, da = new Promise((a, b) => {
                    ba = a;
                    ca = b;
                  }), ea = "object" == typeof window, fa = "function" == typeof importScripts;
                  function ia() {
                    function a(g) {
                      const k = d;
                      c = b = 0;
                      d = /* @__PURE__ */ new Map();
                      k.forEach((p) => {
                        try {
                          p(g);
                        } catch (n) {
                          console.error(n);
                        }
                      });
                      this.ob();
                      e && e.Qb();
                    }
                    let b = 0, c = 0, d = /* @__PURE__ */ new Map(), e = null, f = null;
                    this.requestAnimationFrame = function(g) {
                      b || (b = requestAnimationFrame(a.bind(this)));
                      const k = ++c;
                      d.set(k, g);
                      return k;
                    };
                    this.cancelAnimationFrame = function(g) {
                      d.delete(g);
                      b && 0 == d.size && (cancelAnimationFrame(b), b = 0);
                    };
                    this.Ob = function(g) {
                      f && (document.body.remove(f), f = null);
                      g || (f = document.createElement("div"), f.style.backgroundColor = "black", f.style.position = "fixed", f.style.right = 0, f.style.top = 0, f.style.color = "white", f.style.padding = "4px", f.innerHTML = "RIVE FPS", g = function(k) {
                        f.innerHTML = "RIVE FPS " + k.toFixed(1);
                      }, document.body.appendChild(f));
                      e = new function() {
                        let k = 0, p = 0;
                        this.Qb = function() {
                          var n = performance.now();
                          p ? (++k, n -= p, 1e3 < n && (g(1e3 * k / n), k = p = 0)) : (p = n, k = 0);
                        };
                      }();
                    };
                    this.Lb = function() {
                      f && (document.body.remove(f), f = null);
                      e = null;
                    };
                    this.ob = function() {
                    };
                  }
                  function ja(a) {
                    console.assert(true);
                    const b = /* @__PURE__ */ new Map();
                    let c = -Infinity;
                    this.push = function(d) {
                      d = d + ((1 << a) - 1) >> a;
                      b.has(d) && clearTimeout(b.get(d));
                      b.set(d, setTimeout(function() {
                        b.delete(d);
                        0 == b.length ? c = -Infinity : d == c && (c = Math.max(...b.keys()), console.assert(c < d));
                      }, 1e3));
                      c = Math.max(d, c);
                      return c << a;
                    };
                  }
                  const ka = m.onRuntimeInitialized;
                  m.onRuntimeInitialized = function() {
                    ka && ka();
                    let a = m.decodeAudio;
                    m.decodeAudio = function(e, f) {
                      e = a(e);
                      f(e);
                    };
                    let b = m.decodeFont;
                    m.decodeFont = function(e, f) {
                      e = b(e);
                      f(e);
                    };
                    const c = m.FileAssetLoader;
                    m.ptrToAsset = (e) => {
                      let f = m.ptrToFileAsset(e);
                      return f.isImage ? m.ptrToImageAsset(e) : f.isFont ? m.ptrToFontAsset(e) : f.isAudio ? m.ptrToAudioAsset(e) : f;
                    };
                    m.CustomFileAssetLoader = c.extend("CustomFileAssetLoader", { __construct: function({ loadContents: e }) {
                      this.__parent.__construct.call(this);
                      this.Eb = e;
                    }, loadContents: function(e, f) {
                      e = m.ptrToAsset(e);
                      return this.Eb(e, f);
                    } });
                    m.CDNFileAssetLoader = c.extend("CDNFileAssetLoader", { __construct: function() {
                      this.__parent.__construct.call(this);
                    }, loadContents: function(e) {
                      let f = m.ptrToAsset(e);
                      e = f.cdnUuid;
                      if ("" === e) {
                        return false;
                      }
                      (function(g, k) {
                        var p = new XMLHttpRequest();
                        p.responseType = "arraybuffer";
                        p.onreadystatechange = function() {
                          4 == p.readyState && 200 == p.status && k(p);
                        };
                        p.open("GET", g, true);
                        p.send(null);
                      })(f.cdnBaseUrl + "/" + e, (g) => {
                        f.decode(new Uint8Array(g.response));
                      });
                      return true;
                    } });
                    m.FallbackFileAssetLoader = c.extend("FallbackFileAssetLoader", { __construct: function() {
                      this.__parent.__construct.call(this);
                      this.kb = [];
                    }, addLoader: function(e) {
                      this.kb.push(e);
                    }, loadContents: function(e, f) {
                      for (let g of this.kb) {
                        if (g.loadContents(e, f)) {
                          return true;
                        }
                      }
                      return false;
                    } });
                    let d = m.computeAlignment;
                    m.computeAlignment = function(e, f, g, k, p = 1) {
                      return d.call(this, e, f, g, k, p);
                    };
                  };
                  const la = "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(" "), ma = new function() {
                    function a() {
                      if (!b) {
                        let D = function(I, w, L) {
                          w = r.createShader(w);
                          r.shaderSource(w, L);
                          r.compileShader(w);
                          L = r.getShaderInfoLog(w);
                          if (0 < (L || "").length) {
                            throw L;
                          }
                          r.attachShader(I, w);
                        };
                        var l = document.createElement("canvas"), u = { alpha: 1, depth: 0, stencil: 0, antialias: 0, premultipliedAlpha: 1, preserveDrawingBuffer: 0, powerPreference: "high-performance", failIfMajorPerformanceCaveat: 0, enableExtensionsByDefault: 1, explicitSwapControl: 1, renderViaOffscreenBackBuffer: 1 };
                        let r;
                        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                          if (r = l.getContext("webgl", u), c = 1, !r) {
                            return console.log("No WebGL support. Image mesh will not be drawn."), false;
                          }
                        } else {
                          if (r = l.getContext("webgl2", u)) {
                            c = 2;
                          } else {
                            if (r = l.getContext("webgl", u)) {
                              c = 1;
                            } else {
                              return console.log("No WebGL support. Image mesh will not be drawn."), false;
                            }
                          }
                        }
                        r = new Proxy(r, { get(I, w) {
                          if (I.isContextLost()) {
                            if (p || (console.error("Cannot render the mesh because the GL Context was lost. Tried to invoke ", w), p = true), "function" === typeof I[w]) {
                              return function() {
                              };
                            }
                          } else {
                            return "function" === typeof I[w] ? function(...L) {
                              return I[w].apply(I, L);
                            } : I[w];
                          }
                        }, set(I, w, L) {
                          if (I.isContextLost()) {
                            p || (console.error("Cannot render the mesh because the GL Context was lost. Tried to set property " + w), p = true);
                          } else {
                            return I[w] = L, true;
                          }
                        } });
                        d = Math.min(r.getParameter(r.MAX_RENDERBUFFER_SIZE), r.getParameter(r.MAX_TEXTURE_SIZE));
                        l = r.createProgram();
                        D(l, r.VERTEX_SHADER, "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }");
                        D(l, r.FRAGMENT_SHADER, "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }");
                        r.bindAttribLocation(l, 0, "vertex");
                        r.bindAttribLocation(l, 1, "uv");
                        r.linkProgram(l);
                        u = r.getProgramInfoLog(l);
                        if (0 < (u || "").trim().length) {
                          throw u;
                        }
                        e = r.getUniformLocation(l, "mat");
                        f = r.getUniformLocation(l, "translate");
                        r.useProgram(l);
                        r.bindBuffer(r.ARRAY_BUFFER, r.createBuffer());
                        r.enableVertexAttribArray(0);
                        r.enableVertexAttribArray(1);
                        r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, r.createBuffer());
                        r.uniform1i(r.getUniformLocation(l, "image"), 0);
                        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
                        b = r;
                      }
                      return true;
                    }
                    let b = null, c = 0, d = 0, e = null, f = null, g = 0, k = 0, p = false;
                    a();
                    this.bc = function() {
                      a();
                      return d;
                    };
                    this.Kb = function(l) {
                      b.deleteTexture && b.deleteTexture(l);
                    };
                    this.Jb = function(l) {
                      if (!a()) {
                        return null;
                      }
                      const u = b.createTexture();
                      if (!u) {
                        return null;
                      }
                      b.bindTexture(b.TEXTURE_2D, u);
                      b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, l);
                      b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                      b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                      b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
                      2 == c ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR_MIPMAP_LINEAR), b.generateMipmap(b.TEXTURE_2D)) : b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
                      return u;
                    };
                    const n = new ja(8), t = new ja(8), x = new ja(10), y = new ja(10);
                    this.Nb = function(l, u, r, D, I) {
                      if (a()) {
                        var w = n.push(l), L = t.push(u);
                        if (b.canvas) {
                          if (b.canvas.width != w || b.canvas.height != L) {
                            b.canvas.width = w, b.canvas.height = L;
                          }
                          b.viewport(0, L - u, l, u);
                          b.disable(b.SCISSOR_TEST);
                          b.clearColor(0, 0, 0, 0);
                          b.clear(b.COLOR_BUFFER_BIT);
                          b.enable(b.SCISSOR_TEST);
                          r.sort((K, Z) => Z.vb - K.vb);
                          w = x.push(D);
                          g != w && (b.bufferData(b.ARRAY_BUFFER, 8 * w, b.DYNAMIC_DRAW), g = w);
                          w = 0;
                          for (var R of r) {
                            b.bufferSubData(b.ARRAY_BUFFER, w, R.Ta), w += 4 * R.Ta.length;
                          }
                          console.assert(w == 4 * D);
                          for (var V of r) {
                            b.bufferSubData(b.ARRAY_BUFFER, w, V.Bb), w += 4 * V.Bb.length;
                          }
                          console.assert(w == 8 * D);
                          w = y.push(I);
                          k != w && (b.bufferData(b.ELEMENT_ARRAY_BUFFER, 2 * w, b.DYNAMIC_DRAW), k = w);
                          R = 0;
                          for (var qa of r) {
                            b.bufferSubData(b.ELEMENT_ARRAY_BUFFER, R, qa.indices), R += 2 * qa.indices.length;
                          }
                          console.assert(R == 2 * I);
                          qa = 0;
                          V = true;
                          w = R = 0;
                          for (const K of r) {
                            K.image.Ja != qa && (b.bindTexture(b.TEXTURE_2D, K.image.Ia || null), qa = K.image.Ja);
                            K.hc ? (b.scissor(K.Za, L - K.$a - K.jb, K.uc, K.jb), V = true) : V && (b.scissor(0, L - u, l, u), V = false);
                            r = 2 / l;
                            const Z = -2 / u;
                            b.uniform4f(e, K.ha[0] * r * K.Aa, K.ha[1] * Z * K.Ba, K.ha[2] * r * K.Aa, K.ha[3] * Z * K.Ba);
                            b.uniform2f(f, K.ha[4] * r * K.Aa + r * (K.Za - K.cc * K.Aa) - 1, K.ha[5] * Z * K.Ba + Z * (K.$a - K.dc * K.Ba) + 1);
                            b.vertexAttribPointer(0, 2, b.FLOAT, false, 0, w);
                            b.vertexAttribPointer(1, 2, b.FLOAT, false, 0, w + 4 * D);
                            b.drawElements(b.TRIANGLES, K.indices.length, b.UNSIGNED_SHORT, R);
                            w += 4 * K.Ta.length;
                            R += 2 * K.indices.length;
                          }
                          console.assert(w == 4 * D);
                          console.assert(R == 2 * I);
                        }
                      }
                    };
                    this.canvas = function() {
                      return a() && b.canvas;
                    };
                  }(), na = m.onRuntimeInitialized;
                  m.onRuntimeInitialized = function() {
                    function a(q) {
                      switch (q) {
                        case n.srcOver:
                          return "source-over";
                        case n.screen:
                          return "screen";
                        case n.overlay:
                          return "overlay";
                        case n.darken:
                          return "darken";
                        case n.lighten:
                          return "lighten";
                        case n.colorDodge:
                          return "color-dodge";
                        case n.colorBurn:
                          return "color-burn";
                        case n.hardLight:
                          return "hard-light";
                        case n.softLight:
                          return "soft-light";
                        case n.difference:
                          return "difference";
                        case n.exclusion:
                          return "exclusion";
                        case n.multiply:
                          return "multiply";
                        case n.hue:
                          return "hue";
                        case n.saturation:
                          return "saturation";
                        case n.color:
                          return "color";
                        case n.luminosity:
                          return "luminosity";
                      }
                    }
                    function b(q) {
                      return "rgba(" + ((16711680 & q) >>> 16) + "," + ((65280 & q) >>> 8) + "," + ((255 & q) >>> 0) + "," + ((4278190080 & q) >>> 24) / 255 + ")";
                    }
                    function c() {
                      0 < L.length && (ma.Nb(w.drawWidth(), w.drawHeight(), L, R, V), L = [], V = R = 0, w.reset(512, 512));
                      for (const q of I) {
                        for (const v of q.I) {
                          v();
                        }
                        q.I = [];
                      }
                      I.clear();
                    }
                    na && na();
                    var d = m.RenderPaintStyle;
                    const e = m.RenderPath, f = m.RenderPaint, g = m.Renderer, k = m.StrokeCap, p = m.StrokeJoin, n = m.BlendMode, t = d.fill, x = d.stroke, y = m.FillRule.evenOdd;
                    let l = 1;
                    var u = m.RenderImage.extend("CanvasRenderImage", { __construct: function({ la: q, wa: v } = {}) {
                      this.__parent.__construct.call(this);
                      this.Ja = l;
                      l = l + 1 & 2147483647 || 1;
                      this.la = q;
                      this.wa = v;
                    }, __destruct: function() {
                      this.Ia && (ma.Kb(this.Ia), URL.revokeObjectURL(this.Wa));
                      this.__parent.__destruct.call(this);
                    }, decode: function(q) {
                      var v = this;
                      v.wa && v.wa(v);
                      var J = new Image();
                      v.Wa = URL.createObjectURL(new Blob([q], { type: "image/png" }));
                      J.onload = function() {
                        v.Db = J;
                        v.Ia = ma.Jb(J);
                        v.size(J.width, J.height);
                        v.la && v.la(v);
                      };
                      J.src = v.Wa;
                    } }), r = e.extend("CanvasRenderPath", { __construct: function() {
                      this.__parent.__construct.call(this);
                      this.U = new Path2D();
                    }, rewind: function() {
                      this.U = new Path2D();
                    }, addPath: function(q, v, J, G, A, H, E) {
                      var M = this.U, ya = M.addPath;
                      q = q.U;
                      const T = new DOMMatrix();
                      T.a = v;
                      T.b = J;
                      T.c = G;
                      T.d = A;
                      T.e = H;
                      T.f = E;
                      ya.call(M, q, T);
                    }, fillRule: function(q) {
                      this.Va = q;
                    }, moveTo: function(q, v) {
                      this.U.moveTo(q, v);
                    }, lineTo: function(q, v) {
                      this.U.lineTo(q, v);
                    }, cubicTo: function(q, v, J, G, A, H) {
                      this.U.bezierCurveTo(q, v, J, G, A, H);
                    }, close: function() {
                      this.U.closePath();
                    } }), D = f.extend("CanvasRenderPaint", { color: function(q) {
                      this.Xa = b(q);
                    }, thickness: function(q) {
                      this.Gb = q;
                    }, join: function(q) {
                      switch (q) {
                        case p.miter:
                          this.Ha = "miter";
                          break;
                        case p.round:
                          this.Ha = "round";
                          break;
                        case p.bevel:
                          this.Ha = "bevel";
                      }
                    }, cap: function(q) {
                      switch (q) {
                        case k.butt:
                          this.Ga = "butt";
                          break;
                        case k.round:
                          this.Ga = "round";
                          break;
                        case k.square:
                          this.Ga = "square";
                      }
                    }, style: function(q) {
                      this.Fb = q;
                    }, blendMode: function(q) {
                      this.Cb = a(q);
                    }, clearGradient: function() {
                      this.ja = null;
                    }, linearGradient: function(q, v, J, G) {
                      this.ja = { xb: q, yb: v, cb: J, eb: G, Qa: [] };
                    }, radialGradient: function(q, v, J, G) {
                      this.ja = { xb: q, yb: v, cb: J, eb: G, Qa: [], ac: true };
                    }, addStop: function(q, v) {
                      this.ja.Qa.push({ color: q, stop: v });
                    }, completeGradient: function() {
                    }, draw: function(q, v, J, G) {
                      let A = this.Fb;
                      var H = this.Xa, E = this.ja;
                      const M = q.globalCompositeOperation, ya = q.globalAlpha;
                      q.globalCompositeOperation = this.Cb;
                      q.globalAlpha = G;
                      if (null != E) {
                        H = E.xb;
                        const X = E.yb, ha = E.cb;
                        var T = E.eb;
                        G = E.Qa;
                        E.ac ? (E = ha - H, T -= X, H = q.createRadialGradient(H, X, 0, H, X, Math.sqrt(E * E + T * T))) : H = q.createLinearGradient(H, X, ha, T);
                        for (let Y = 0, aa = G.length; Y < aa; Y++) {
                          E = G[Y], H.addColorStop(E.stop, b(E.color));
                        }
                        this.Xa = H;
                        this.ja = null;
                      }
                      switch (A) {
                        case x:
                          q.strokeStyle = H;
                          q.lineWidth = this.Gb;
                          q.lineCap = this.Ga;
                          q.lineJoin = this.Ha;
                          q.stroke(v);
                          break;
                        case t:
                          q.fillStyle = H, q.fill(v, J);
                      }
                      q.globalCompositeOperation = M;
                      q.globalAlpha = ya;
                    } });
                    const I = /* @__PURE__ */ new Set();
                    let w = null, L = [], R = 0, V = 0;
                    var qa = m.CanvasRenderer = g.extend("Renderer", { __construct: function(q) {
                      this.__parent.__construct.call(this);
                      this.T = [1, 0, 0, 1, 0, 0];
                      this.G = [1];
                      this.B = q.getContext("2d");
                      this.Ua = q;
                      this.I = [];
                    }, save: function() {
                      this.T.push(...this.T.slice(this.T.length - 6));
                      this.G.push(this.G[this.G.length - 1]);
                      this.I.push(this.B.save.bind(this.B));
                    }, restore: function() {
                      const q = this.T.length - 6;
                      if (6 > q) {
                        throw "restore() called without matching save().";
                      }
                      this.T.splice(q);
                      this.G.pop();
                      this.I.push(this.B.restore.bind(this.B));
                    }, transform: function(q, v, J, G, A, H) {
                      const E = this.T, M = E.length - 6;
                      E.splice(M, 6, E[M] * q + E[M + 2] * v, E[M + 1] * q + E[M + 3] * v, E[M] * J + E[M + 2] * G, E[M + 1] * J + E[M + 3] * G, E[M] * A + E[M + 2] * H + E[M + 4], E[M + 1] * A + E[M + 3] * H + E[M + 5]);
                      this.I.push(this.B.transform.bind(this.B, q, v, J, G, A, H));
                    }, rotate: function(q) {
                      const v = Math.sin(q);
                      q = Math.cos(q);
                      this.transform(q, v, -v, q, 0, 0);
                    }, modulateOpacity: function(q) {
                      this.G[this.G.length - 1] *= q;
                    }, _drawPath: function(q, v) {
                      this.I.push(v.draw.bind(v, this.B, q.U, q.Va === y ? "evenodd" : "nonzero", Math.max(0, this.G[this.G.length - 1])));
                    }, _drawRiveImage: function(q, v, J, G) {
                      var A = q.Db;
                      if (A) {
                        var H = this.B, E = a(J), M = Math.max(0, G * this.G[this.G.length - 1]);
                        this.I.push(function() {
                          H.globalCompositeOperation = E;
                          H.globalAlpha = M;
                          H.drawImage(A, 0, 0);
                          H.globalAlpha = 1;
                        });
                      }
                    }, _getMatrix: function(q) {
                      const v = this.T, J = v.length - 6;
                      for (let G = 0; 6 > G; ++G) {
                        q[G] = v[J + G];
                      }
                    }, _drawImageMesh: function(q, v, J, G, A, H, E, M, ya, T, X, ha, Y, aa) {
                      let ac, bc, cc;
                      try {
                        ac = m.HEAPF32.slice(A >> 2, (A >> 2) + H), bc = m.HEAPF32.slice(E >> 2, (E >> 2) + M), cc = m.HEAPU16.slice(ya >> 1, (ya >> 1) + T);
                      } catch (sb) {
                        console.error("[Rive] _drawImageMesh: failed to read mesh data from WASM heap. Mesh skipped for this frame.");
                        return;
                      }
                      v = this.B.canvas.width;
                      A = this.B.canvas.height;
                      E = Y - X;
                      M = aa - ha;
                      X = Math.max(X, 0);
                      ha = Math.max(ha, 0);
                      Y = Math.min(Y, v);
                      aa = Math.min(aa, A);
                      const Ga = Y - X, Ha = aa - ha;
                      console.assert(Ga <= Math.min(E, v));
                      console.assert(Ha <= Math.min(M, A));
                      if (!(0 >= Ga || 0 >= Ha)) {
                        Y = Ga < E || Ha < M;
                        v = aa = 1;
                        var ra = Math.ceil(Ga * aa), sa = Math.ceil(Ha * v);
                        A = ma.bc();
                        ra > A && (aa *= A / ra, ra = A);
                        sa > A && (v *= A / sa, sa = A);
                        w || (w = new m.DynamicRectanizer(A), w.reset(512, 512));
                        A = w.addRect(ra, sa);
                        0 > A && (c(), I.add(this), A = w.addRect(ra, sa), console.assert(0 <= A));
                        var dc = A & 65535, ec = A >> 16;
                        L.push({ ha: this.T.slice(this.T.length - 6), image: q, Za: dc, $a: ec, cc: X, dc: ha, uc: ra, jb: sa, Aa: aa, Ba: v, Ta: ac, Bb: bc, indices: cc, hc: Y, vb: q.Ja << 1 | (Y ? 1 : 0) });
                        R += H;
                        V += T;
                        var za = this.B, rd = a(J), sd = Math.max(0, G * this.G[this.G.length - 1]);
                        this.I.push(function() {
                          za.save();
                          za.resetTransform();
                          za.globalCompositeOperation = rd;
                          za.globalAlpha = sd;
                          const sb = ma.canvas();
                          sb && za.drawImage(sb, dc, ec, ra, sa, X, ha, Ga, Ha);
                          za.restore();
                        });
                      }
                    }, _clipPath: function(q) {
                      this.I.push(this.B.clip.bind(this.B, q.U, q.Va === y ? "evenodd" : "nonzero"));
                    }, clear: function() {
                      I.add(this);
                      this.I.push(this.B.clearRect.bind(this.B, 0, 0, this.Ua.width, this.Ua.height));
                    }, flush: function() {
                    }, translate: function(q, v) {
                      this.transform(1, 0, 0, 1, q, v);
                    } });
                    m.makeRenderer = function(q) {
                      const v = new qa(q), J = v.B;
                      return new Proxy(v, { get(G, A) {
                        if ("function" === typeof G[A]) {
                          return function(...H) {
                            return G[A].apply(G, H);
                          };
                        }
                        if ("function" === typeof J[A]) {
                          if (-1 < la.indexOf(A)) {
                            throw Error("RiveException: Method call to '" + A + "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.");
                          }
                          return function(...H) {
                            v.I.push(J[A].bind(J, ...H));
                          };
                        }
                        return G[A];
                      }, set(G, A, H) {
                        if (A in J) {
                          return v.I.push(() => {
                            J[A] = H;
                          }), true;
                        }
                      } });
                    };
                    m.decodeImage = function(q, v) {
                      new u({ la: v }).decode(q);
                    };
                    m.renderFactory = { makeRenderPaint: function() {
                      return new D();
                    }, makeRenderPath: function() {
                      return new r();
                    }, makeRenderImage: function() {
                      let q = Z;
                      return new u({ wa: () => {
                        q.total++;
                      }, la: () => {
                        q.loaded++;
                        if (q.loaded === q.total) {
                          const v = q.ready;
                          v && (v(), q.ready = null);
                        }
                      } });
                    } };
                    let K = m.load, Z = null;
                    m.load = function(q, v, J = true) {
                      const G = new m.FallbackFileAssetLoader();
                      void 0 !== v && G.addLoader(v);
                      J && (v = new m.CDNFileAssetLoader(), G.addLoader(v));
                      return new Promise(function(A) {
                        let H = null;
                        Z = { total: 0, loaded: 0, ready: function() {
                          A(H);
                        } };
                        H = K(q, G);
                        0 == Z.total && A(H);
                      });
                    };
                    let td = m.RendererWrapper.prototype.align;
                    m.RendererWrapper.prototype.align = function(q, v, J, G, A = 1) {
                      td.call(this, q, v, J, G, A);
                    };
                    d = new ia();
                    m.requestAnimationFrame = d.requestAnimationFrame.bind(d);
                    m.cancelAnimationFrame = d.cancelAnimationFrame.bind(d);
                    m.enableFPSCounter = d.Ob.bind(d);
                    m.disableFPSCounter = d.Lb;
                    d.ob = c;
                    m.resolveAnimationFrame = c;
                    m.cleanup = function() {
                      w && w.delete();
                    };
                  };
                  var oa = Object.assign({}, m), pa = "./this.program", ta = "", ua, va;
                  if (ea || fa) {
                    fa ? ta = self.location.href : "undefined" != typeof document && document.currentScript && (ta = document.currentScript.src), _scriptName && (ta = _scriptName), ta.startsWith("blob:") ? ta = "" : ta = ta.substr(0, ta.replace(/[?#].*/, "").lastIndexOf("/") + 1), fa && (va = (a) => {
                      var b = new XMLHttpRequest();
                      b.open("GET", a, false);
                      b.responseType = "arraybuffer";
                      b.send(null);
                      return new Uint8Array(b.response);
                    }), ua = (a, b, c) => {
                      if (wa(a)) {
                        var d = new XMLHttpRequest();
                        d.open("GET", a, true);
                        d.responseType = "arraybuffer";
                        d.onload = () => {
                          200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
                        };
                        d.onerror = c;
                        d.send(null);
                      } else {
                        fetch(a, { credentials: "same-origin" }).then((e) => e.ok ? e.arrayBuffer() : Promise.reject(Error(e.status + " : " + e.url))).then(b, c);
                      }
                    };
                  }
                  var xa = m.print || console.log.bind(console), Aa = m.printErr || console.error.bind(console);
                  Object.assign(m, oa);
                  oa = null;
                  m.thisProgram && (pa = m.thisProgram);
                  var Ba;
                  m.wasmBinary && (Ba = m.wasmBinary);
                  var Ca, Da = false, z, B, Ea, Fa, C, F, Ia, Ja;
                  function Ka() {
                    var a = Ca.buffer;
                    m.HEAP8 = z = new Int8Array(a);
                    m.HEAP16 = Ea = new Int16Array(a);
                    m.HEAPU8 = B = new Uint8Array(a);
                    m.HEAPU16 = Fa = new Uint16Array(a);
                    m.HEAP32 = C = new Int32Array(a);
                    m.HEAPU32 = F = new Uint32Array(a);
                    m.HEAPF32 = Ia = new Float32Array(a);
                    m.HEAPF64 = Ja = new Float64Array(a);
                  }
                  var La = [], Ma = [], Na = [];
                  function Oa() {
                    var a = m.preRun.shift();
                    La.unshift(a);
                  }
                  var Pa = 0, Ra = null;
                  function Sa(a) {
                    var _a2;
                    (_a2 = m.onAbort) == null ? void 0 : _a2.call(m, a);
                    a = "Aborted(" + a + ")";
                    Aa(a);
                    Da = true;
                    a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
                    ca(a);
                    throw a;
                  }
                  var Ta = (a) => a.startsWith("data:application/octet-stream;base64,"), wa = (a) => a.startsWith("file://"), Ua;
                  function Va(a) {
                    if (a == Ua && Ba) {
                      return new Uint8Array(Ba);
                    }
                    if (va) {
                      return va(a);
                    }
                    throw "both async and sync fetching of the wasm failed";
                  }
                  function Wa(a) {
                    return Ba ? Promise.resolve().then(() => Va(a)) : new Promise((b, c) => {
                      ua(a, (d) => b(new Uint8Array(d)), () => {
                        try {
                          b(Va(a));
                        } catch (d) {
                          c(d);
                        }
                      });
                    });
                  }
                  function Xa(a, b, c) {
                    return Wa(a).then((d) => WebAssembly.instantiate(d, b)).then(c, (d) => {
                      Aa(`failed to asynchronously prepare wasm: ${d}`);
                      Sa(d);
                    });
                  }
                  function Ya(a, b) {
                    var c = Ua;
                    return Ba || "function" != typeof WebAssembly.instantiateStreaming || Ta(c) || wa(c) || "function" != typeof fetch ? Xa(c, a, b) : fetch(c, { credentials: "same-origin" }).then((d) => WebAssembly.instantiateStreaming(d, a).then(b, function(e) {
                      Aa(`wasm streaming compile failed: ${e}`);
                      Aa("falling back to ArrayBuffer instantiation");
                      return Xa(c, a, b);
                    }));
                  }
                  var Za, $a, db = { 478498: (a, b, c, d, e) => {
                    if ("undefined" === typeof window || void 0 === (window.AudioContext || window.webkitAudioContext)) {
                      return 0;
                    }
                    if ("undefined" === typeof window.h) {
                      window.h = { za: 0 };
                      window.h.J = {};
                      window.h.J.xa = a;
                      window.h.J.capture = b;
                      window.h.J.Ka = c;
                      window.h.ga = {};
                      window.h.ga.stopped = d;
                      window.h.ga.wb = e;
                      let f = window.h;
                      f.D = [];
                      f.sc = function(g) {
                        for (var k = 0; k < f.D.length; ++k) {
                          if (null == f.D[k]) {
                            return f.D[k] = g, k;
                          }
                        }
                        f.D.push(g);
                        return f.D.length - 1;
                      };
                      f.Ab = function(g) {
                        for (f.D[g] = null; 0 < f.D.length; ) {
                          if (null == f.D[f.D.length - 1]) {
                            f.D.pop();
                          } else {
                            break;
                          }
                        }
                      };
                      f.Pc = function(g) {
                        for (var k = 0; k < f.D.length; ++k) {
                          if (f.D[k] == g) {
                            return f.Ab(k);
                          }
                        }
                      };
                      f.qa = function(g) {
                        return f.D[g];
                      };
                      f.Sa = ["touchend", "click"];
                      f.unlock = function() {
                        for (var g = 0; g < f.D.length; ++g) {
                          var k = f.D[g];
                          null != k && null != k.L && k.state === f.ga.wb && k.L.resume().then(() => {
                            ab(k.pb);
                          }, (p) => {
                            console.error("Failed to resume audiocontext", p);
                          });
                        }
                        f.Sa.map(function(p) {
                          document.removeEventListener(p, f.unlock, true);
                        });
                      };
                      f.Sa.map(function(g) {
                        document.addEventListener(g, f.unlock, true);
                      });
                    }
                    window.h.za += 1;
                    return 1;
                  }, 480676: () => {
                    "undefined" !== typeof window.h && (window.h.Sa.map(function(a) {
                      document.removeEventListener(a, window.h.unlock, true);
                    }), --window.h.za, 0 === window.h.za && delete window.h);
                  }, 480980: () => void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia, 481084: () => {
                    try {
                      var a = new (window.AudioContext || window.webkitAudioContext)(), b = a.sampleRate;
                      a.close();
                      return b;
                    } catch (c) {
                      return 0;
                    }
                  }, 481255: (a, b, c, d, e, f) => {
                    if ("undefined" === typeof window.h) {
                      return -1;
                    }
                    var g = {}, k = {};
                    a == window.h.J.xa && 0 != c && (k.sampleRate = c);
                    g.L = new (window.AudioContext || window.webkitAudioContext)(k);
                    g.L.suspend();
                    g.state = window.h.ga.stopped;
                    c = 0;
                    a != window.h.J.xa && (c = b);
                    g.Z = g.L.createScriptProcessor(d, c, b);
                    g.Z.onaudioprocess = function(p) {
                      if (null == g.ra || 0 == g.ra.length) {
                        g.ra = new Float32Array(Ia.buffer, e, d * b);
                      }
                      if (a == window.h.J.capture || a == window.h.J.Ka) {
                        for (var n = 0; n < b; n += 1) {
                          for (var t = p.inputBuffer.getChannelData(n), x = g.ra, y = 0; y < d; y += 1) {
                            x[y * b + n] = t[y];
                          }
                        }
                        bb(f, d, e);
                      }
                      if (a == window.h.J.xa || a == window.h.J.Ka) {
                        for (cb(f, d, e), n = 0; n < p.outputBuffer.numberOfChannels; ++n) {
                          for (t = p.outputBuffer.getChannelData(n), x = g.ra, y = 0; y < d; y += 1) {
                            t[y] = x[y * b + n];
                          }
                        }
                      } else {
                        for (n = 0; n < p.outputBuffer.numberOfChannels; ++n) {
                          p.outputBuffer.getChannelData(n).fill(0);
                        }
                      }
                    };
                    a != window.h.J.capture && a != window.h.J.Ka || navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(function(p) {
                      g.Ca = g.L.createMediaStreamSource(p);
                      g.Ca.connect(g.Z);
                      g.Z.connect(g.L.destination);
                    }).catch(function(p) {
                      console.log("Failed to get user media: " + p);
                    });
                    a == window.h.J.xa && g.Z.connect(g.L.destination);
                    g.pb = f;
                    return window.h.sc(g);
                  }, 484132: (a) => window.h.qa(a).L.sampleRate, 484205: (a) => {
                    a = window.h.qa(a);
                    void 0 !== a.Z && (a.Z.onaudioprocess = function() {
                    }, a.Z.disconnect(), a.Z = void 0);
                    void 0 !== a.Ca && (a.Ca.disconnect(), a.Ca = void 0);
                    a.L.close();
                    a.L = void 0;
                    a.pb = void 0;
                  }, 484605: (a) => {
                    window.h.Ab(a);
                  }, 484655: (a) => {
                    a = window.h.qa(a);
                    a.L.resume();
                    a.state = window.h.ga.wb;
                  }, 484794: (a) => {
                    a = window.h.qa(a);
                    a.L.suspend();
                    a.state = window.h.ga.stopped;
                  } }, eb = (a) => {
                    for (; 0 < a.length; ) {
                      a.shift()(m);
                    }
                  };
                  function fb() {
                    var a = C[+gb >> 2];
                    gb += 4;
                    return a;
                  }
                  var hb = (a, b) => {
                    for (var c = 0, d = a.length - 1; 0 <= d; d--) {
                      var e = a[d];
                      "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
                    }
                    if (b) {
                      for (; c; c--) {
                        a.unshift("..");
                      }
                    }
                    return a;
                  }, ib = (a) => {
                    var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
                    (a = hb(a.split("/").filter((d) => !!d), !b).join("/")) || b || (a = ".");
                    a && c && (a += "/");
                    return (b ? "/" : "") + a;
                  }, jb = (a) => {
                    var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
                    a = b[0];
                    b = b[1];
                    if (!a && !b) {
                      return ".";
                    }
                    b && (b = b.substr(0, b.length - 1));
                    return a + b;
                  }, kb = (a) => {
                    if ("/" === a) {
                      return "/";
                    }
                    a = ib(a);
                    a = a.replace(/\/$/, "");
                    var b = a.lastIndexOf("/");
                    return -1 === b ? a : a.substr(b + 1);
                  }, lb = () => {
                    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                      return (a) => crypto.getRandomValues(a);
                    }
                    Sa("initRandomDevice");
                  }, mb = (a) => (mb = lb())(a), nb = (...a) => {
                    for (var b = "", c = false, d = a.length - 1; -1 <= d && !c; d--) {
                      c = 0 <= d ? a[d] : "/";
                      if ("string" != typeof c) {
                        throw new TypeError("Arguments to path.resolve must be strings");
                      }
                      if (!c) {
                        return "";
                      }
                      b = c + "/" + b;
                      c = "/" === c.charAt(0);
                    }
                    b = hb(b.split("/").filter((e) => !!e), !c).join("/");
                    return (c ? "/" : "") + b || ".";
                  }, ob = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, pb = (a, b, c) => {
                    var d = b + c;
                    for (c = b; a[c] && !(c >= d); ) {
                      ++c;
                    }
                    if (16 < c - b && a.buffer && ob) {
                      return ob.decode(a.subarray(b, c));
                    }
                    for (d = ""; b < c; ) {
                      var e = a[b++];
                      if (e & 128) {
                        var f = a[b++] & 63;
                        if (192 == (e & 224)) {
                          d += String.fromCharCode((e & 31) << 6 | f);
                        } else {
                          var g = a[b++] & 63;
                          e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | g : (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63;
                          65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
                        }
                      } else {
                        d += String.fromCharCode(e);
                      }
                    }
                    return d;
                  }, qb = [], rb = (a) => {
                    for (var b = 0, c = 0; c < a.length; ++c) {
                      var d = a.charCodeAt(c);
                      127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
                    }
                    return b;
                  }, tb = (a, b, c, d) => {
                    if (!(0 < d)) {
                      return 0;
                    }
                    var e = c;
                    d = c + d - 1;
                    for (var f = 0; f < a.length; ++f) {
                      var g = a.charCodeAt(f);
                      if (55296 <= g && 57343 >= g) {
                        var k = a.charCodeAt(++f);
                        g = 65536 + ((g & 1023) << 10) | k & 1023;
                      }
                      if (127 >= g) {
                        if (c >= d) {
                          break;
                        }
                        b[c++] = g;
                      } else {
                        if (2047 >= g) {
                          if (c + 1 >= d) {
                            break;
                          }
                          b[c++] = 192 | g >> 6;
                        } else {
                          if (65535 >= g) {
                            if (c + 2 >= d) {
                              break;
                            }
                            b[c++] = 224 | g >> 12;
                          } else {
                            if (c + 3 >= d) {
                              break;
                            }
                            b[c++] = 240 | g >> 18;
                            b[c++] = 128 | g >> 12 & 63;
                          }
                          b[c++] = 128 | g >> 6 & 63;
                        }
                        b[c++] = 128 | g & 63;
                      }
                    }
                    b[c] = 0;
                    return c - e;
                  };
                  function ub(a, b) {
                    var c = Array(rb(a) + 1);
                    a = tb(a, c, 0, c.length);
                    b && (c.length = a);
                    return c;
                  }
                  var vb = [];
                  function wb(a, b) {
                    vb[a] = { input: [], H: [], W: b };
                    xb(a, yb);
                  }
                  var yb = { open(a) {
                    var b = vb[a.node.ya];
                    if (!b) {
                      throw new N(43);
                    }
                    a.s = b;
                    a.seekable = false;
                  }, close(a) {
                    a.s.W.pa(a.s);
                  }, pa(a) {
                    a.s.W.pa(a.s);
                  }, read(a, b, c, d) {
                    if (!a.s || !a.s.W.ib) {
                      throw new N(60);
                    }
                    for (var e = 0, f = 0; f < d; f++) {
                      try {
                        var g = a.s.W.ib(a.s);
                      } catch (k) {
                        throw new N(29);
                      }
                      if (void 0 === g && 0 === e) {
                        throw new N(6);
                      }
                      if (null === g || void 0 === g) {
                        break;
                      }
                      e++;
                      b[c + f] = g;
                    }
                    e && (a.node.timestamp = Date.now());
                    return e;
                  }, write(a, b, c, d) {
                    if (!a.s || !a.s.W.Na) {
                      throw new N(60);
                    }
                    try {
                      for (var e = 0; e < d; e++) {
                        a.s.W.Na(a.s, b[c + e]);
                      }
                    } catch (f) {
                      throw new N(29);
                    }
                    d && (a.node.timestamp = Date.now());
                    return e;
                  } }, zb = { ib() {
                    a: {
                      if (!qb.length) {
                        var a = null;
                        "undefined" != typeof window && "function" == typeof window.prompt && (a = window.prompt("Input: "), null !== a && (a += "\n"));
                        if (!a) {
                          a = null;
                          break a;
                        }
                        qb = ub(a, true);
                      }
                      a = qb.shift();
                    }
                    return a;
                  }, Na(a, b) {
                    null === b || 10 === b ? (xa(pb(a.H, 0)), a.H = []) : 0 != b && a.H.push(b);
                  }, pa(a) {
                    a.H && 0 < a.H.length && (xa(pb(a.H, 0)), a.H = []);
                  }, Yb() {
                    return { Ac: 25856, Cc: 5, zc: 191, Bc: 35387, yc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
                  }, Zb() {
                    return 0;
                  }, $b() {
                    return [24, 80];
                  } }, Ab = { Na(a, b) {
                    null === b || 10 === b ? (Aa(pb(a.H, 0)), a.H = []) : 0 != b && a.H.push(b);
                  }, pa(a) {
                    a.H && 0 < a.H.length && (Aa(pb(a.H, 0)), a.H = []);
                  } };
                  function Bb(a, b) {
                    var c = a.l ? a.l.length : 0;
                    c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.l, a.l = new Uint8Array(b), 0 < a.v && a.l.set(c.subarray(0, a.v), 0));
                  }
                  var O = { O: null, V() {
                    return O.createNode(null, "/", 16895, 0);
                  }, createNode(a, b, c, d) {
                    if (24576 === (c & 61440) || 4096 === (c & 61440)) {
                      throw new N(63);
                    }
                    O.O || (O.O = { dir: { node: { Y: O.j.Y, R: O.j.R, ka: O.j.ka, ua: O.j.ua, tb: O.j.tb, zb: O.j.zb, ub: O.j.ub, sb: O.j.sb, Da: O.j.Da }, stream: { ba: O.m.ba } }, file: { node: { Y: O.j.Y, R: O.j.R }, stream: { ba: O.m.ba, read: O.m.read, write: O.m.write, Ya: O.m.Ya, lb: O.m.lb, nb: O.m.nb } }, link: { node: { Y: O.j.Y, R: O.j.R, ma: O.j.ma }, stream: {} }, ab: { node: { Y: O.j.Y, R: O.j.R }, stream: Cb } });
                    c = Db(a, b, c, d);
                    16384 === (c.mode & 61440) ? (c.j = O.O.dir.node, c.m = O.O.dir.stream, c.l = {}) : 32768 === (c.mode & 61440) ? (c.j = O.O.file.node, c.m = O.O.file.stream, c.v = 0, c.l = null) : 40960 === (c.mode & 61440) ? (c.j = O.O.link.node, c.m = O.O.link.stream) : 8192 === (c.mode & 61440) && (c.j = O.O.ab.node, c.m = O.O.ab.stream);
                    c.timestamp = Date.now();
                    a && (a.l[b] = c, a.timestamp = c.timestamp);
                    return c;
                  }, Gc(a) {
                    return a.l ? a.l.subarray ? a.l.subarray(0, a.v) : new Uint8Array(a.l) : new Uint8Array(0);
                  }, j: { Y(a) {
                    var b = {};
                    b.Ec = 8192 === (a.mode & 61440) ? a.id : 1;
                    b.Ic = a.id;
                    b.mode = a.mode;
                    b.Lc = 1;
                    b.uid = 0;
                    b.Hc = 0;
                    b.ya = a.ya;
                    16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.v : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
                    b.wc = new Date(a.timestamp);
                    b.Kc = new Date(a.timestamp);
                    b.Dc = new Date(a.timestamp);
                    b.Hb = 4096;
                    b.xc = Math.ceil(b.size / b.Hb);
                    return b;
                  }, R(a, b) {
                    void 0 !== b.mode && (a.mode = b.mode);
                    void 0 !== b.timestamp && (a.timestamp = b.timestamp);
                    if (void 0 !== b.size && (b = b.size, a.v != b)) {
                      if (0 == b) {
                        a.l = null, a.v = 0;
                      } else {
                        var c = a.l;
                        a.l = new Uint8Array(b);
                        c && a.l.set(c.subarray(0, Math.min(b, a.v)));
                        a.v = b;
                      }
                    }
                  }, ka() {
                    throw Eb[44];
                  }, ua(a, b, c, d) {
                    return O.createNode(a, b, c, d);
                  }, tb(a, b, c) {
                    if (16384 === (a.mode & 61440)) {
                      try {
                        var d = Fb(b, c);
                      } catch (f) {
                      }
                      if (d) {
                        for (var e in d.l) {
                          throw new N(55);
                        }
                      }
                    }
                    delete a.parent.l[a.name];
                    a.parent.timestamp = Date.now();
                    a.name = c;
                    b.l[c] = a;
                    b.timestamp = a.parent.timestamp;
                  }, zb(a, b) {
                    delete a.l[b];
                    a.timestamp = Date.now();
                  }, ub(a, b) {
                    var c = Fb(a, b), d;
                    for (d in c.l) {
                      throw new N(55);
                    }
                    delete a.l[b];
                    a.timestamp = Date.now();
                  }, sb(a) {
                    var b = [".", ".."], c;
                    for (c of Object.keys(a.l)) {
                      b.push(c);
                    }
                    return b;
                  }, Da(a, b, c) {
                    a = O.createNode(a, b, 41471, 0);
                    a.link = c;
                    return a;
                  }, ma(a) {
                    if (40960 !== (a.mode & 61440)) {
                      throw new N(28);
                    }
                    return a.link;
                  } }, m: { read(a, b, c, d, e) {
                    var f = a.node.l;
                    if (e >= a.node.v) {
                      return 0;
                    }
                    a = Math.min(a.node.v - e, d);
                    if (8 < a && f.subarray) {
                      b.set(f.subarray(e, e + a), c);
                    } else {
                      for (d = 0; d < a; d++) {
                        b[c + d] = f[e + d];
                      }
                    }
                    return a;
                  }, write(a, b, c, d, e, f) {
                    b.buffer === z.buffer && (f = false);
                    if (!d) {
                      return 0;
                    }
                    a = a.node;
                    a.timestamp = Date.now();
                    if (b.subarray && (!a.l || a.l.subarray)) {
                      if (f) {
                        return a.l = b.subarray(c, c + d), a.v = d;
                      }
                      if (0 === a.v && 0 === e) {
                        return a.l = b.slice(c, c + d), a.v = d;
                      }
                      if (e + d <= a.v) {
                        return a.l.set(b.subarray(c, c + d), e), d;
                      }
                    }
                    Bb(a, e + d);
                    if (a.l.subarray && b.subarray) {
                      a.l.set(b.subarray(c, c + d), e);
                    } else {
                      for (f = 0; f < d; f++) {
                        a.l[e + f] = b[c + f];
                      }
                    }
                    a.v = Math.max(a.v, e + d);
                    return d;
                  }, ba(a, b, c) {
                    1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.v);
                    if (0 > b) {
                      throw new N(28);
                    }
                    return b;
                  }, Ya(a, b, c) {
                    Bb(a.node, b + c);
                    a.node.v = Math.max(a.node.v, b + c);
                  }, lb(a, b, c, d, e) {
                    if (32768 !== (a.node.mode & 61440)) {
                      throw new N(43);
                    }
                    a = a.node.l;
                    if (e & 2 || a.buffer !== z.buffer) {
                      if (0 < c || c + b < a.length) {
                        a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
                      }
                      c = true;
                      Sa();
                      b = void 0;
                      if (!b) {
                        throw new N(48);
                      }
                      z.set(a, b);
                    } else {
                      c = false, b = a.byteOffset;
                    }
                    return { o: b, vc: c };
                  }, nb(a, b, c, d) {
                    O.m.write(a, b, 0, d, c, false);
                    return 0;
                  } } }, Gb = (a, b) => {
                    var c = 0;
                    a && (c |= 365);
                    b && (c |= 146);
                    return c;
                  }, Hb = null, Ib = {}, Jb = [], Kb = 1, Lb = null, Mb = true, N = class {
                    constructor(a) {
                      this.name = "ErrnoError";
                      this.aa = a;
                    }
                  }, Eb = {}, Nb = class {
                    constructor() {
                      this.h = {};
                      this.node = null;
                    }
                    get flags() {
                      return this.h.flags;
                    }
                    set flags(a) {
                      this.h.flags = a;
                    }
                    get position() {
                      return this.h.position;
                    }
                    set position(a) {
                      this.h.position = a;
                    }
                  }, Ob = class {
                    constructor(a, b, c, d) {
                      a || (a = this);
                      this.parent = a;
                      this.V = a.V;
                      this.va = null;
                      this.id = Kb++;
                      this.name = b;
                      this.mode = c;
                      this.j = {};
                      this.m = {};
                      this.ya = d;
                    }
                    get read() {
                      return 365 === (this.mode & 365);
                    }
                    set read(a) {
                      a ? this.mode |= 365 : this.mode &= -366;
                    }
                    get write() {
                      return 146 === (this.mode & 146);
                    }
                    set write(a) {
                      a ? this.mode |= 146 : this.mode &= -147;
                    }
                  };
                  function Pb(a, b = {}) {
                    a = nb(a);
                    if (!a) {
                      return { path: "", node: null };
                    }
                    b = Object.assign({ hb: true, Pa: 0 }, b);
                    if (8 < b.Pa) {
                      throw new N(32);
                    }
                    a = a.split("/").filter((g) => !!g);
                    for (var c = Hb, d = "/", e = 0; e < a.length; e++) {
                      var f = e === a.length - 1;
                      if (f && b.parent) {
                        break;
                      }
                      c = Fb(c, a[e]);
                      d = ib(d + "/" + a[e]);
                      c.va && (!f || f && b.hb) && (c = c.va.root);
                      if (!f || b.gb) {
                        for (f = 0; 40960 === (c.mode & 61440); ) {
                          if (c = Qb(d), d = nb(jb(d), c), c = Pb(d, { Pa: b.Pa + 1 }).node, 40 < f++) {
                            throw new N(32);
                          }
                        }
                      }
                    }
                    return { path: d, node: c };
                  }
                  function Rb(a) {
                    for (var b; ; ) {
                      if (a === a.parent) {
                        return a = a.V.mb, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
                      }
                      b = b ? `${a.name}/${b}` : a.name;
                      a = a.parent;
                    }
                  }
                  function Sb(a, b) {
                    for (var c = 0, d = 0; d < b.length; d++) {
                      c = (c << 5) - c + b.charCodeAt(d) | 0;
                    }
                    return (a + c >>> 0) % Lb.length;
                  }
                  function Fb(a, b) {
                    var c = 16384 === (a.mode & 61440) ? (c = Tb(a, "x")) ? c : a.j.ka ? 0 : 2 : 54;
                    if (c) {
                      throw new N(c);
                    }
                    for (c = Lb[Sb(a.id, b)]; c; c = c.fc) {
                      var d = c.name;
                      if (c.parent.id === a.id && d === b) {
                        return c;
                      }
                    }
                    return a.j.ka(a, b);
                  }
                  function Db(a, b, c, d) {
                    a = new Ob(a, b, c, d);
                    b = Sb(a.parent.id, a.name);
                    a.fc = Lb[b];
                    return Lb[b] = a;
                  }
                  function Ub(a) {
                    var b = ["r", "w", "rw"][a & 3];
                    a & 512 && (b += "w");
                    return b;
                  }
                  function Tb(a, b) {
                    if (Mb) {
                      return 0;
                    }
                    if (!b.includes("r") || a.mode & 292) {
                      if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) {
                        return 2;
                      }
                    } else {
                      return 2;
                    }
                    return 0;
                  }
                  function Vb(a, b) {
                    try {
                      return Fb(a, b), 20;
                    } catch (c) {
                    }
                    return Tb(a, "wx");
                  }
                  function Wb(a) {
                    a = Jb[a];
                    if (!a) {
                      throw new N(8);
                    }
                    return a;
                  }
                  function Xb(a, b = -1) {
                    a = Object.assign(new Nb(), a);
                    if (-1 == b) {
                      a: {
                        for (b = 0; 4096 >= b; b++) {
                          if (!Jb[b]) {
                            break a;
                          }
                        }
                        throw new N(33);
                      }
                    }
                    a.X = b;
                    return Jb[b] = a;
                  }
                  function Yb(a, b = -1) {
                    var _a2, _b;
                    a = Xb(a, b);
                    (_b = (_a2 = a.m) == null ? void 0 : _a2.Fc) == null ? void 0 : _b.call(_a2, a);
                    return a;
                  }
                  var Cb = { open(a) {
                    var _a2, _b;
                    a.m = Ib[a.node.ya].m;
                    (_b = (_a2 = a.m).open) == null ? void 0 : _b.call(_a2, a);
                  }, ba() {
                    throw new N(70);
                  } };
                  function xb(a, b) {
                    Ib[a] = { m: b };
                  }
                  function Zb(a, b) {
                    var c = "/" === b;
                    if (c && Hb) {
                      throw new N(10);
                    }
                    if (!c && b) {
                      var d = Pb(b, { hb: false });
                      b = d.path;
                      d = d.node;
                      if (d.va) {
                        throw new N(10);
                      }
                      if (16384 !== (d.mode & 61440)) {
                        throw new N(54);
                      }
                    }
                    b = { type: a, Nc: {}, mb: b, ec: [] };
                    a = a.V(b);
                    a.V = b;
                    b.root = a;
                    c ? Hb = a : d && (d.va = b, d.V && d.V.ec.push(b));
                  }
                  function $b(a, b, c) {
                    var d = Pb(a, { parent: true }).node;
                    a = kb(a);
                    if (!a || "." === a || ".." === a) {
                      throw new N(28);
                    }
                    var e = Vb(d, a);
                    if (e) {
                      throw new N(e);
                    }
                    if (!d.j.ua) {
                      throw new N(63);
                    }
                    return d.j.ua(d, a, b, c);
                  }
                  function fc(a) {
                    return $b(a, 16895, 0);
                  }
                  function gc(a, b, c) {
                    "undefined" == typeof c && (c = b, b = 438);
                    $b(a, b | 8192, c);
                  }
                  function hc(a, b) {
                    if (!nb(a)) {
                      throw new N(44);
                    }
                    var c = Pb(b, { parent: true }).node;
                    if (!c) {
                      throw new N(44);
                    }
                    b = kb(b);
                    var d = Vb(c, b);
                    if (d) {
                      throw new N(d);
                    }
                    if (!c.j.Da) {
                      throw new N(63);
                    }
                    c.j.Da(c, b, a);
                  }
                  function Qb(a) {
                    a = Pb(a).node;
                    if (!a) {
                      throw new N(44);
                    }
                    if (!a.j.ma) {
                      throw new N(28);
                    }
                    return nb(Rb(a.parent), a.j.ma(a));
                  }
                  function ic(a, b, c) {
                    if ("" === a) {
                      throw new N(44);
                    }
                    if ("string" == typeof b) {
                      var d = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[b];
                      if ("undefined" == typeof d) {
                        throw Error(`Unknown file open mode: ${b}`);
                      }
                      b = d;
                    }
                    c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
                    if ("object" == typeof a) {
                      var e = a;
                    } else {
                      a = ib(a);
                      try {
                        e = Pb(a, { gb: !(b & 131072) }).node;
                      } catch (f) {
                      }
                    }
                    d = false;
                    if (b & 64) {
                      if (e) {
                        if (b & 128) {
                          throw new N(20);
                        }
                      } else {
                        e = $b(a, c, 0), d = true;
                      }
                    }
                    if (!e) {
                      throw new N(44);
                    }
                    8192 === (e.mode & 61440) && (b &= -513);
                    if (b & 65536 && 16384 !== (e.mode & 61440)) {
                      throw new N(54);
                    }
                    if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== Ub(b) || b & 512) ? 31 : Tb(e, Ub(b)) : 44)) {
                      throw new N(c);
                    }
                    if (b & 512 && !d) {
                      c = e;
                      c = "string" == typeof c ? Pb(c, { gb: true }).node : c;
                      if (!c.j.R) {
                        throw new N(63);
                      }
                      if (16384 === (c.mode & 61440)) {
                        throw new N(31);
                      }
                      if (32768 !== (c.mode & 61440)) {
                        throw new N(28);
                      }
                      if (d = Tb(c, "w")) {
                        throw new N(d);
                      }
                      c.j.R(c, { size: 0, timestamp: Date.now() });
                    }
                    b &= -131713;
                    e = Xb({ node: e, path: Rb(e), flags: b, seekable: true, position: 0, m: e.m, tc: [], error: false });
                    e.m.open && e.m.open(e);
                    !m.logReadFiles || b & 1 || (jc || (jc = {}), a in jc || (jc[a] = 1));
                    return e;
                  }
                  function kc(a, b, c) {
                    if (null === a.X) {
                      throw new N(8);
                    }
                    if (!a.seekable || !a.m.ba) {
                      throw new N(70);
                    }
                    if (0 != c && 1 != c && 2 != c) {
                      throw new N(28);
                    }
                    a.position = a.m.ba(a, b, c);
                    a.tc = [];
                  }
                  var lc;
                  function mc(a, b, c) {
                    a = ib("/dev/" + a);
                    var d = Gb(!!b, !!c);
                    nc || (nc = 64);
                    var e = nc++ << 8 | 0;
                    xb(e, { open(f) {
                      f.seekable = false;
                    }, close() {
                      var _a2;
                      ((_a2 = c == null ? void 0 : c.buffer) == null ? void 0 : _a2.length) && c(10);
                    }, read(f, g, k, p) {
                      for (var n = 0, t = 0; t < p; t++) {
                        try {
                          var x = b();
                        } catch (y) {
                          throw new N(29);
                        }
                        if (void 0 === x && 0 === n) {
                          throw new N(6);
                        }
                        if (null === x || void 0 === x) {
                          break;
                        }
                        n++;
                        g[k + t] = x;
                      }
                      n && (f.node.timestamp = Date.now());
                      return n;
                    }, write(f, g, k, p) {
                      for (var n = 0; n < p; n++) {
                        try {
                          c(g[k + n]);
                        } catch (t) {
                          throw new N(29);
                        }
                      }
                      p && (f.node.timestamp = Date.now());
                      return n;
                    } });
                    gc(a, d, e);
                  }
                  var nc, oc = {}, jc, gb = void 0, pc = (a, b) => Object.defineProperty(b, "name", { value: a }), qc = [], rc = [], P, sc = (a) => {
                    if (!a) {
                      throw new P("Cannot use deleted val. handle = " + a);
                    }
                    return rc[a];
                  }, tc = (a) => {
                    switch (a) {
                      case void 0:
                        return 2;
                      case null:
                        return 4;
                      case true:
                        return 6;
                      case false:
                        return 8;
                      default:
                        const b = qc.pop() || rc.length;
                        rc[b] = a;
                        rc[b + 1] = 1;
                        return b;
                    }
                  }, uc = (a) => {
                    var b = Error, c = pc(a, function(d) {
                      this.name = a;
                      this.message = d;
                      d = Error(d).stack;
                      void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
                    });
                    c.prototype = Object.create(b.prototype);
                    c.prototype.constructor = c;
                    c.prototype.toString = function() {
                      return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
                    };
                    return c;
                  }, vc, wc, Q = (a) => {
                    for (var b = ""; B[a]; ) {
                      b += wc[B[a++]];
                    }
                    return b;
                  }, xc = [], yc = () => {
                    for (; xc.length; ) {
                      var a = xc.pop();
                      a.g.fa = false;
                      a["delete"]();
                    }
                  }, zc, Ac = {}, Bc = (a, b) => {
                    if (void 0 === b) {
                      throw new P("ptr should not be undefined");
                    }
                    for (; a.C; ) {
                      b = a.na(b), a = a.C;
                    }
                    return b;
                  }, Cc = {}, Fc = (a) => {
                    a = Dc(a);
                    var b = Q(a);
                    Ec(a);
                    return b;
                  }, Gc = (a, b) => {
                    var c = Cc[a];
                    if (void 0 === c) {
                      throw a = `${b} has unknown type ${Fc(a)}`, new P(a);
                    }
                    return c;
                  }, Hc = () => {
                  }, Ic = false, Jc = (a, b, c) => {
                    if (b === c) {
                      return a;
                    }
                    if (void 0 === c.C) {
                      return null;
                    }
                    a = Jc(a, b, c.C);
                    return null === a ? null : c.Mb(a);
                  }, Kc = {}, Lc = (a, b) => {
                    b = Bc(a, b);
                    return Ac[b];
                  }, Mc, Oc = (a, b) => {
                    if (!b.u || !b.o) {
                      throw new Mc("makeClassHandle requires ptr and ptrType");
                    }
                    if (!!b.K !== !!b.F) {
                      throw new Mc("Both smartPtrType and smartPtr must be specified");
                    }
                    b.count = { value: 1 };
                    return Nc(Object.create(a, { g: { value: b, writable: true } }));
                  }, Nc = (a) => {
                    if ("undefined" === typeof FinalizationRegistry) {
                      return Nc = (b) => b, a;
                    }
                    Ic = new FinalizationRegistry((b) => {
                      b = b.g;
                      --b.count.value;
                      0 === b.count.value && (b.F ? b.K.P(b.F) : b.u.i.P(b.o));
                    });
                    Nc = (b) => {
                      var c = b.g;
                      c.F && Ic.register(b, { g: c }, b);
                      return b;
                    };
                    Hc = (b) => {
                      Ic.unregister(b);
                    };
                    return Nc(a);
                  }, Pc = {}, Qc = (a) => {
                    for (; a.length; ) {
                      var b = a.pop();
                      a.pop()(b);
                    }
                  };
                  function Rc(a) {
                    return this.fromWireType(F[a >> 2]);
                  }
                  var Sc = {}, Tc = {}, S = (a, b, c) => {
                    function d(k) {
                      k = c(k);
                      if (k.length !== a.length) {
                        throw new Mc("Mismatched type converter count");
                      }
                      for (var p = 0; p < a.length; ++p) {
                        Uc(a[p], k[p]);
                      }
                    }
                    a.forEach(function(k) {
                      Tc[k] = b;
                    });
                    var e = Array(b.length), f = [], g = 0;
                    b.forEach((k, p) => {
                      Cc.hasOwnProperty(k) ? e[p] = Cc[k] : (f.push(k), Sc.hasOwnProperty(k) || (Sc[k] = []), Sc[k].push(() => {
                        e[p] = Cc[k];
                        ++g;
                        g === f.length && d(e);
                      }));
                    });
                    0 === f.length && d(e);
                  };
                  function Vc(a, b, c = {}) {
                    var d = b.name;
                    if (!a) {
                      throw new P(`type "${d}" must have a positive integer typeid pointer`);
                    }
                    if (Cc.hasOwnProperty(a)) {
                      if (c.Wb) {
                        return;
                      }
                      throw new P(`Cannot register type '${d}' twice`);
                    }
                    Cc[a] = b;
                    delete Tc[a];
                    Sc.hasOwnProperty(a) && (b = Sc[a], delete Sc[a], b.forEach((e) => e()));
                  }
                  function Uc(a, b, c = {}) {
                    if (!("argPackAdvance" in b)) {
                      throw new TypeError("registerType registeredInstance requires argPackAdvance");
                    }
                    return Vc(a, b, c);
                  }
                  var Wc = (a) => {
                    throw new P(a.g.u.i.name + " instance already deleted");
                  };
                  function Xc() {
                  }
                  var Yc = (a, b, c) => {
                    if (void 0 === a[b].A) {
                      var d = a[b];
                      a[b] = function(...e) {
                        if (!a[b].A.hasOwnProperty(e.length)) {
                          throw new P(`Function '${c}' called with an invalid number of arguments (${e.length}) - expects one of (${a[b].A})!`);
                        }
                        return a[b].A[e.length].apply(this, e);
                      };
                      a[b].A = [];
                      a[b].A[d.ea] = d;
                    }
                  }, Zc = (a, b, c) => {
                    if (m.hasOwnProperty(a)) {
                      if (void 0 === c || void 0 !== m[a].A && void 0 !== m[a].A[c]) {
                        throw new P(`Cannot register public name '${a}' twice`);
                      }
                      Yc(m, a, a);
                      if (m.hasOwnProperty(c)) {
                        throw new P(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`);
                      }
                      m[a].A[c] = b;
                    } else {
                      m[a] = b, void 0 !== c && (m[a].Mc = c);
                    }
                  }, $c = (a) => {
                    if (void 0 === a) {
                      return "_unknown";
                    }
                    a = a.replace(/[^a-zA-Z0-9_]/g, "$");
                    var b = a.charCodeAt(0);
                    return 48 <= b && 57 >= b ? `_${a}` : a;
                  };
                  function ad(a, b, c, d, e, f, g, k) {
                    this.name = a;
                    this.constructor = b;
                    this.N = c;
                    this.P = d;
                    this.C = e;
                    this.Rb = f;
                    this.na = g;
                    this.Mb = k;
                    this.qb = [];
                  }
                  var bd = (a, b, c) => {
                    for (; b !== c; ) {
                      if (!b.na) {
                        throw new P(`Expected null or instance of ${c.name}, got an instance of ${b.name}`);
                      }
                      a = b.na(a);
                      b = b.C;
                    }
                    return a;
                  };
                  function cd(a, b) {
                    if (null === b) {
                      if (this.Ma) {
                        throw new P(`null is not a valid ${this.name}`);
                      }
                      return 0;
                    }
                    if (!b.g) {
                      throw new P(`Cannot pass "${dd(b)}" as a ${this.name}`);
                    }
                    if (!b.g.o) {
                      throw new P(`Cannot pass deleted object as a pointer of type ${this.name}`);
                    }
                    return bd(b.g.o, b.g.u.i, this.i);
                  }
                  function ed(a, b) {
                    if (null === b) {
                      if (this.Ma) {
                        throw new P(`null is not a valid ${this.name}`);
                      }
                      if (this.ta) {
                        var c = this.Oa();
                        null !== a && a.push(this.P, c);
                        return c;
                      }
                      return 0;
                    }
                    if (!b || !b.g) {
                      throw new P(`Cannot pass "${dd(b)}" as a ${this.name}`);
                    }
                    if (!b.g.o) {
                      throw new P(`Cannot pass deleted object as a pointer of type ${this.name}`);
                    }
                    if (!this.sa && b.g.u.sa) {
                      throw new P(`Cannot convert argument of type ${b.g.K ? b.g.K.name : b.g.u.name} to parameter type ${this.name}`);
                    }
                    c = bd(b.g.o, b.g.u.i, this.i);
                    if (this.ta) {
                      if (void 0 === b.g.F) {
                        throw new P("Passing raw pointer to smart pointer is illegal");
                      }
                      switch (this.nc) {
                        case 0:
                          if (b.g.K === this) {
                            c = b.g.F;
                          } else {
                            throw new P(`Cannot convert argument of type ${b.g.K ? b.g.K.name : b.g.u.name} to parameter type ${this.name}`);
                          }
                          break;
                        case 1:
                          c = b.g.F;
                          break;
                        case 2:
                          if (b.g.K === this) {
                            c = b.g.F;
                          } else {
                            var d = b.clone();
                            c = this.jc(c, tc(() => d["delete"]()));
                            null !== a && a.push(this.P, c);
                          }
                          break;
                        default:
                          throw new P("Unsupporting sharing policy");
                      }
                    }
                    return c;
                  }
                  function fd(a, b) {
                    if (null === b) {
                      if (this.Ma) {
                        throw new P(`null is not a valid ${this.name}`);
                      }
                      return 0;
                    }
                    if (!b.g) {
                      throw new P(`Cannot pass "${dd(b)}" as a ${this.name}`);
                    }
                    if (!b.g.o) {
                      throw new P(`Cannot pass deleted object as a pointer of type ${this.name}`);
                    }
                    if (b.g.u.sa) {
                      throw new P(`Cannot convert argument of type ${b.g.u.name} to parameter type ${this.name}`);
                    }
                    return bd(b.g.o, b.g.u.i, this.i);
                  }
                  function gd(a, b, c, d, e, f, g, k, p, n, t) {
                    this.name = a;
                    this.i = b;
                    this.Ma = c;
                    this.sa = d;
                    this.ta = e;
                    this.ic = f;
                    this.nc = g;
                    this.rb = k;
                    this.Oa = p;
                    this.jc = n;
                    this.P = t;
                    e || void 0 !== b.C ? this.toWireType = ed : (this.toWireType = d ? cd : fd, this.M = null);
                  }
                  var hd = (a, b, c) => {
                    if (!m.hasOwnProperty(a)) {
                      throw new Mc("Replacing nonexistent public symbol");
                    }
                    void 0 !== m[a].A && void 0 !== c ? m[a].A[c] = b : (m[a] = b, m[a].ea = c);
                  }, jd = [], kd, ld = (a) => {
                    var b = jd[a];
                    b || (a >= jd.length && (jd.length = a + 1), jd[a] = b = kd.get(a));
                    return b;
                  }, md = (a, b, c = []) => {
                    a.includes("j") ? (a = a.replace(/p/g, "i"), b = (0, m["dynCall_" + a])(b, ...c)) : b = ld(b)(...c);
                    return b;
                  }, nd = (a, b) => (...c) => md(a, b, c), U = (a, b) => {
                    a = Q(a);
                    var c = a.includes("j") ? nd(a, b) : ld(b);
                    if ("function" != typeof c) {
                      throw new P(`unknown function pointer with signature ${a}: ${b}`);
                    }
                    return c;
                  }, od, pd = (a, b) => {
                    function c(f) {
                      e[f] || Cc[f] || (Tc[f] ? Tc[f].forEach(c) : (d.push(f), e[f] = true));
                    }
                    var d = [], e = {};
                    b.forEach(c);
                    throw new od(`${a}: ` + d.map(Fc).join([", "]));
                  };
                  function qd(a) {
                    for (var b = 1; b < a.length; ++b) {
                      if (null !== a[b] && void 0 === a[b].M) {
                        return true;
                      }
                    }
                    return false;
                  }
                  function ud(a, b, c, d, e) {
                    var f = b.length;
                    if (2 > f) {
                      throw new P("argTypes array size mismatch! Must at least get return value and 'this' types!");
                    }
                    var g = null !== b[1] && null !== c, k = qd(b), p = "void" !== b[0].name, n = f - 2, t = Array(n), x = [], y = [];
                    return pc(a, function(...l) {
                      if (l.length !== n) {
                        throw new P(`function ${a} called with ${l.length} arguments, expected ${n}`);
                      }
                      y.length = 0;
                      x.length = g ? 2 : 1;
                      x[0] = e;
                      if (g) {
                        var u = b[1].toWireType(y, this);
                        x[1] = u;
                      }
                      for (var r = 0; r < n; ++r) {
                        t[r] = b[r + 2].toWireType(y, l[r]), x.push(t[r]);
                      }
                      l = d(...x);
                      if (k) {
                        Qc(y);
                      } else {
                        for (r = g ? 1 : 2; r < b.length; r++) {
                          var D = 1 === r ? u : t[r - 2];
                          null !== b[r].M && b[r].M(D);
                        }
                      }
                      u = p ? b[0].fromWireType(l) : void 0;
                      return u;
                    });
                  }
                  var vd = (a, b) => {
                    for (var c = [], d = 0; d < a; d++) {
                      c.push(F[b + 4 * d >> 2]);
                    }
                    return c;
                  }, wd = (a) => {
                    a = a.trim();
                    const b = a.indexOf("(");
                    return -1 !== b ? a.substr(0, b) : a;
                  }, xd = (a, b, c) => {
                    if (!(a instanceof Object)) {
                      throw new P(`${c} with invalid "this": ${a}`);
                    }
                    if (!(a instanceof b.i.constructor)) {
                      throw new P(`${c} incompatible with "this" of type ${a.constructor.name}`);
                    }
                    if (!a.g.o) {
                      throw new P(`cannot call emscripten binding method ${c} on deleted object`);
                    }
                    return bd(a.g.o, a.g.u.i, b.i);
                  }, yd = (a) => {
                    9 < a && 0 === --rc[a + 1] && (rc[a] = void 0, qc.push(a));
                  }, zd = { name: "emscripten::val", fromWireType: (a) => {
                    var b = sc(a);
                    yd(a);
                    return b;
                  }, toWireType: (a, b) => tc(b), argPackAdvance: 8, readValueFromPointer: Rc, M: null }, Ad = (a, b, c) => {
                    switch (b) {
                      case 1:
                        return c ? function(d) {
                          return this.fromWireType(z[d]);
                        } : function(d) {
                          return this.fromWireType(B[d]);
                        };
                      case 2:
                        return c ? function(d) {
                          return this.fromWireType(Ea[d >> 1]);
                        } : function(d) {
                          return this.fromWireType(Fa[d >> 1]);
                        };
                      case 4:
                        return c ? function(d) {
                          return this.fromWireType(C[d >> 2]);
                        } : function(d) {
                          return this.fromWireType(F[d >> 2]);
                        };
                      default:
                        throw new TypeError(`invalid integer width (${b}): ${a}`);
                    }
                  }, dd = (a) => {
                    if (null === a) {
                      return "null";
                    }
                    var b = typeof a;
                    return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
                  }, Bd = (a, b) => {
                    switch (b) {
                      case 4:
                        return function(c) {
                          return this.fromWireType(Ia[c >> 2]);
                        };
                      case 8:
                        return function(c) {
                          return this.fromWireType(Ja[c >> 3]);
                        };
                      default:
                        throw new TypeError(`invalid float width (${b}): ${a}`);
                    }
                  }, Cd = (a, b, c) => {
                    switch (b) {
                      case 1:
                        return c ? (d) => z[d] : (d) => B[d];
                      case 2:
                        return c ? (d) => Ea[d >> 1] : (d) => Fa[d >> 1];
                      case 4:
                        return c ? (d) => C[d >> 2] : (d) => F[d >> 2];
                      default:
                        throw new TypeError(`invalid integer width (${b}): ${a}`);
                    }
                  }, Dd = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, Ed = (a, b) => {
                    var c = a >> 1;
                    for (var d = c + b / 2; !(c >= d) && Fa[c]; ) {
                      ++c;
                    }
                    c <<= 1;
                    if (32 < c - a && Dd) {
                      return Dd.decode(B.subarray(a, c));
                    }
                    c = "";
                    for (d = 0; !(d >= b / 2); ++d) {
                      var e = Ea[a + 2 * d >> 1];
                      if (0 == e) {
                        break;
                      }
                      c += String.fromCharCode(e);
                    }
                    return c;
                  }, Fd = (a, b, c) => {
                    c != null ? c : c = 2147483647;
                    if (2 > c) {
                      return 0;
                    }
                    c -= 2;
                    var d = b;
                    c = c < 2 * a.length ? c / 2 : a.length;
                    for (var e = 0; e < c; ++e) {
                      Ea[b >> 1] = a.charCodeAt(e), b += 2;
                    }
                    Ea[b >> 1] = 0;
                    return b - d;
                  }, Gd = (a) => 2 * a.length, Hd = (a, b) => {
                    for (var c = 0, d = ""; !(c >= b / 4); ) {
                      var e = C[a + 4 * c >> 2];
                      if (0 == e) {
                        break;
                      }
                      ++c;
                      65536 <= e ? (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) : d += String.fromCharCode(e);
                    }
                    return d;
                  }, Id = (a, b, c) => {
                    c != null ? c : c = 2147483647;
                    if (4 > c) {
                      return 0;
                    }
                    var d = b;
                    c = d + c - 4;
                    for (var e = 0; e < a.length; ++e) {
                      var f = a.charCodeAt(e);
                      if (55296 <= f && 57343 >= f) {
                        var g = a.charCodeAt(++e);
                        f = 65536 + ((f & 1023) << 10) | g & 1023;
                      }
                      C[b >> 2] = f;
                      b += 4;
                      if (b + 4 > c) {
                        break;
                      }
                    }
                    C[b >> 2] = 0;
                    return b - d;
                  }, Jd = (a) => {
                    for (var b = 0, c = 0; c < a.length; ++c) {
                      var d = a.charCodeAt(c);
                      55296 <= d && 57343 >= d && ++c;
                      b += 4;
                    }
                    return b;
                  }, Kd = (a, b, c) => {
                    var d = [];
                    a = a.toWireType(d, c);
                    d.length && (F[b >> 2] = tc(d));
                    return a;
                  }, Ld = {}, Md = (a) => {
                    var b = Ld[a];
                    return void 0 === b ? Q(a) : b;
                  }, Nd = [], Od = (a) => {
                    var b = Nd.length;
                    Nd.push(a);
                    return b;
                  }, Pd = (a, b) => {
                    for (var c = Array(a), d = 0; d < a; ++d) {
                      c[d] = Gc(F[b + 4 * d >> 2], "parameter " + d);
                    }
                    return c;
                  }, Qd = Reflect.construct, Rd = (a) => 0 === a % 4 && (0 !== a % 100 || 0 === a % 400), Sd = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], Td = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Ud = [], Vd = {}, Xd = () => {
                    if (!Wd) {
                      var a = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: pa || "./this.program" }, b;
                      for (b in Vd) {
                        void 0 === Vd[b] ? delete a[b] : a[b] = Vd[b];
                      }
                      var c = [];
                      for (b in a) {
                        c.push(`${b}=${a[b]}`);
                      }
                      Wd = c;
                    }
                    return Wd;
                  }, Wd, Yd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Zd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], $d = (a, b, c, d) => {
                    function e(l, u, r) {
                      for (l = "number" == typeof l ? l.toString() : l || ""; l.length < u; ) {
                        l = r[0] + l;
                      }
                      return l;
                    }
                    function f(l, u) {
                      return e(l, u, "0");
                    }
                    function g(l, u) {
                      function r(I) {
                        return 0 > I ? -1 : 0 < I ? 1 : 0;
                      }
                      var D;
                      0 === (D = r(l.getFullYear() - u.getFullYear())) && 0 === (D = r(l.getMonth() - u.getMonth())) && (D = r(l.getDate() - u.getDate()));
                      return D;
                    }
                    function k(l) {
                      switch (l.getDay()) {
                        case 0:
                          return new Date(l.getFullYear() - 1, 11, 29);
                        case 1:
                          return l;
                        case 2:
                          return new Date(l.getFullYear(), 0, 3);
                        case 3:
                          return new Date(l.getFullYear(), 0, 2);
                        case 4:
                          return new Date(l.getFullYear(), 0, 1);
                        case 5:
                          return new Date(l.getFullYear() - 1, 11, 31);
                        case 6:
                          return new Date(l.getFullYear() - 1, 11, 30);
                      }
                    }
                    function p(l) {
                      var u = l.ca;
                      for (l = new Date(new Date(l.da + 1900, 0, 1).getTime()); 0 < u; ) {
                        var r = l.getMonth(), D = (Rd(l.getFullYear()) ? Yd : Zd)[r];
                        if (u > D - l.getDate()) {
                          u -= D - l.getDate() + 1, l.setDate(1), 11 > r ? l.setMonth(r + 1) : (l.setMonth(0), l.setFullYear(l.getFullYear() + 1));
                        } else {
                          l.setDate(l.getDate() + u);
                          break;
                        }
                      }
                      r = new Date(l.getFullYear() + 1, 0, 4);
                      u = k(new Date(l.getFullYear(), 0, 4));
                      r = k(r);
                      return 0 >= g(u, l) ? 0 >= g(r, l) ? l.getFullYear() + 1 : l.getFullYear() : l.getFullYear() - 1;
                    }
                    var n = F[d + 40 >> 2];
                    d = { qc: C[d >> 2], pc: C[d + 4 >> 2], Ea: C[d + 8 >> 2], Ra: C[d + 12 >> 2], Fa: C[d + 16 >> 2], da: C[d + 20 >> 2], S: C[d + 24 >> 2], ca: C[d + 28 >> 2], Oc: C[d + 32 >> 2], oc: C[d + 36 >> 2], rc: n ? n ? pb(B, n) : "" : "" };
                    c = c ? pb(B, c) : "";
                    n = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
                    for (var t in n) {
                      c = c.replace(new RegExp(t, "g"), n[t]);
                    }
                    var x = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), y = "January February March April May June July August September October November December".split(" ");
                    n = { "%a": (l) => x[l.S].substring(0, 3), "%A": (l) => x[l.S], "%b": (l) => y[l.Fa].substring(0, 3), "%B": (l) => y[l.Fa], "%C": (l) => f((l.da + 1900) / 100 | 0, 2), "%d": (l) => f(l.Ra, 2), "%e": (l) => e(l.Ra, 2, " "), "%g": (l) => p(l).toString().substring(2), "%G": p, "%H": (l) => f(l.Ea, 2), "%I": (l) => {
                      l = l.Ea;
                      0 == l ? l = 12 : 12 < l && (l -= 12);
                      return f(l, 2);
                    }, "%j": (l) => {
                      for (var u = 0, r = 0; r <= l.Fa - 1; u += (Rd(l.da + 1900) ? Yd : Zd)[r++]) {
                      }
                      return f(l.Ra + u, 3);
                    }, "%m": (l) => f(l.Fa + 1, 2), "%M": (l) => f(l.pc, 2), "%n": () => "\n", "%p": (l) => 0 <= l.Ea && 12 > l.Ea ? "AM" : "PM", "%S": (l) => f(l.qc, 2), "%t": () => "	", "%u": (l) => l.S || 7, "%U": (l) => f(Math.floor((l.ca + 7 - l.S) / 7), 2), "%V": (l) => {
                      var u = Math.floor((l.ca + 7 - (l.S + 6) % 7) / 7);
                      2 >= (l.S + 371 - l.ca - 2) % 7 && u++;
                      if (u) {
                        53 == u && (r = (l.S + 371 - l.ca) % 7, 4 == r || 3 == r && Rd(l.da) || (u = 1));
                      } else {
                        u = 52;
                        var r = (l.S + 7 - l.ca - 1) % 7;
                        (4 == r || 5 == r && Rd(l.da % 400 - 1)) && u++;
                      }
                      return f(u, 2);
                    }, "%w": (l) => l.S, "%W": (l) => f(Math.floor((l.ca + 7 - (l.S + 6) % 7) / 7), 2), "%y": (l) => (l.da + 1900).toString().substring(2), "%Y": (l) => l.da + 1900, "%z": (l) => {
                      l = l.oc;
                      var u = 0 <= l;
                      l = Math.abs(l) / 60;
                      return (u ? "+" : "-") + String("0000" + (l / 60 * 100 + l % 60)).slice(-4);
                    }, "%Z": (l) => l.rc, "%%": () => "%" };
                    c = c.replace(/%%/g, "\0\0");
                    for (t in n) {
                      c.includes(t) && (c = c.replace(new RegExp(t, "g"), n[t](d)));
                    }
                    c = c.replace(/\0\0/g, "%");
                    t = ub(c, false);
                    if (t.length > b) {
                      return 0;
                    }
                    z.set(t, a);
                    return t.length - 1;
                  };
                  [44].forEach((a) => {
                    Eb[a] = new N(a);
                    Eb[a].stack = "<generic error, no stack>";
                  });
                  Lb = Array(4096);
                  Zb(O, "/");
                  fc("/tmp");
                  fc("/home");
                  fc("/home/web_user");
                  (function() {
                    fc("/dev");
                    xb(259, { read: () => 0, write: (d, e, f, g) => g });
                    gc("/dev/null", 259);
                    wb(1280, zb);
                    wb(1536, Ab);
                    gc("/dev/tty", 1280);
                    gc("/dev/tty1", 1536);
                    var a = new Uint8Array(1024), b = 0, c = () => {
                      0 === b && (b = mb(a).byteLength);
                      return a[--b];
                    };
                    mc("random", c);
                    mc("urandom", c);
                    fc("/dev/shm");
                    fc("/dev/shm/tmp");
                  })();
                  (function() {
                    fc("/proc");
                    var a = fc("/proc/self");
                    fc("/proc/self/fd");
                    Zb({ V() {
                      var b = Db(a, "fd", 16895, 73);
                      b.j = { ka(c, d) {
                        var e = Wb(+d);
                        c = { parent: null, V: { mb: "fake" }, j: { ma: () => e.path } };
                        return c.parent = c;
                      } };
                      return b;
                    } }, "/proc/self/fd");
                  })();
                  P = m.BindingError = class extends Error {
                    constructor(a) {
                      super(a);
                      this.name = "BindingError";
                    }
                  };
                  rc.push(0, 1, void 0, 1, null, 1, true, 1, false, 1);
                  m.count_emval_handles = () => rc.length / 2 - 5 - qc.length;
                  vc = m.PureVirtualError = uc("PureVirtualError");
                  for (var ae = Array(256), be = 0; 256 > be; ++be) {
                    ae[be] = String.fromCharCode(be);
                  }
                  wc = ae;
                  m.getInheritedInstanceCount = () => Object.keys(Ac).length;
                  m.getLiveInheritedInstances = () => {
                    var a = [], b;
                    for (b in Ac) {
                      Ac.hasOwnProperty(b) && a.push(Ac[b]);
                    }
                    return a;
                  };
                  m.flushPendingDeletes = yc;
                  m.setDelayFunction = (a) => {
                    zc = a;
                    xc.length && zc && zc(yc);
                  };
                  Mc = m.InternalError = class extends Error {
                    constructor(a) {
                      super(a);
                      this.name = "InternalError";
                    }
                  };
                  Object.assign(Xc.prototype, { isAliasOf: function(a) {
                    if (!(this instanceof Xc && a instanceof Xc)) {
                      return false;
                    }
                    var b = this.g.u.i, c = this.g.o;
                    a.g = a.g;
                    var d = a.g.u.i;
                    for (a = a.g.o; b.C; ) {
                      c = b.na(c), b = b.C;
                    }
                    for (; d.C; ) {
                      a = d.na(a), d = d.C;
                    }
                    return b === d && c === a;
                  }, clone: function() {
                    this.g.o || Wc(this);
                    if (this.g.ia) {
                      return this.g.count.value += 1, this;
                    }
                    var a = Nc, b = Object, c = b.create, d = Object.getPrototypeOf(this), e = this.g;
                    a = a(c.call(b, d, { g: { value: { count: e.count, fa: e.fa, ia: e.ia, o: e.o, u: e.u, F: e.F, K: e.K } } }));
                    a.g.count.value += 1;
                    a.g.fa = false;
                    return a;
                  }, ["delete"]() {
                    this.g.o || Wc(this);
                    if (this.g.fa && !this.g.ia) {
                      throw new P("Object already scheduled for deletion");
                    }
                    Hc(this);
                    var a = this.g;
                    --a.count.value;
                    0 === a.count.value && (a.F ? a.K.P(a.F) : a.u.i.P(a.o));
                    this.g.ia || (this.g.F = void 0, this.g.o = void 0);
                  }, isDeleted: function() {
                    return !this.g.o;
                  }, deleteLater: function() {
                    this.g.o || Wc(this);
                    if (this.g.fa && !this.g.ia) {
                      throw new P("Object already scheduled for deletion");
                    }
                    xc.push(this);
                    1 === xc.length && zc && zc(yc);
                    this.g.fa = true;
                    return this;
                  } });
                  Object.assign(gd.prototype, { Sb(a) {
                    this.rb && (a = this.rb(a));
                    return a;
                  }, bb(a) {
                    var _a2;
                    (_a2 = this.P) == null ? void 0 : _a2.call(this, a);
                  }, argPackAdvance: 8, readValueFromPointer: Rc, fromWireType: function(a) {
                    function b() {
                      return this.ta ? Oc(this.i.N, { u: this.ic, o: c, K: this, F: a }) : Oc(this.i.N, { u: this, o: a });
                    }
                    var c = this.Sb(a);
                    if (!c) {
                      return this.bb(a), null;
                    }
                    var d = Lc(this.i, c);
                    if (void 0 !== d) {
                      if (0 === d.g.count.value) {
                        return d.g.o = c, d.g.F = a, d.clone();
                      }
                      d = d.clone();
                      this.bb(a);
                      return d;
                    }
                    d = this.i.Rb(c);
                    d = Kc[d];
                    if (!d) {
                      return b.call(this);
                    }
                    d = this.sa ? d.Ib : d.pointerType;
                    var e = Jc(c, this.i, d.i);
                    return null === e ? b.call(this) : this.ta ? Oc(d.i.N, { u: d, o: e, K: this, F: a }) : Oc(d.i.N, { u: d, o: e });
                  } });
                  od = m.UnboundTypeError = uc("UnboundTypeError");
                  var ee = { __syscall_fcntl64: function(a, b, c) {
                    gb = c;
                    try {
                      var d = Wb(a);
                      switch (b) {
                        case 0:
                          var e = fb();
                          if (0 > e) {
                            break;
                          }
                          for (; Jb[e]; ) {
                            e++;
                          }
                          return Yb(d, e).X;
                        case 1:
                        case 2:
                          return 0;
                        case 3:
                          return d.flags;
                        case 4:
                          return e = fb(), d.flags |= e, 0;
                        case 12:
                          return e = fb(), Ea[e + 0 >> 1] = 2, 0;
                        case 13:
                        case 14:
                          return 0;
                      }
                      return -28;
                    } catch (f) {
                      if ("undefined" == typeof oc || "ErrnoError" !== f.name) {
                        throw f;
                      }
                      return -f.aa;
                    }
                  }, __syscall_ioctl: function(a, b, c) {
                    gb = c;
                    try {
                      var d = Wb(a);
                      switch (b) {
                        case 21509:
                          return d.s ? 0 : -59;
                        case 21505:
                          if (!d.s) {
                            return -59;
                          }
                          if (d.s.W.Yb) {
                            a = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            var e = fb();
                            C[e >> 2] = 25856;
                            C[e + 4 >> 2] = 5;
                            C[e + 8 >> 2] = 191;
                            C[e + 12 >> 2] = 35387;
                            for (var f = 0; 32 > f; f++) {
                              z[e + f + 17] = a[f] || 0;
                            }
                          }
                          return 0;
                        case 21510:
                        case 21511:
                        case 21512:
                          return d.s ? 0 : -59;
                        case 21506:
                        case 21507:
                        case 21508:
                          if (!d.s) {
                            return -59;
                          }
                          if (d.s.W.Zb) {
                            for (e = fb(), a = [], f = 0; 32 > f; f++) {
                              a.push(z[e + f + 17]);
                            }
                          }
                          return 0;
                        case 21519:
                          if (!d.s) {
                            return -59;
                          }
                          e = fb();
                          return C[e >> 2] = 0;
                        case 21520:
                          return d.s ? -28 : -59;
                        case 21531:
                          e = fb();
                          if (!d.m.Xb) {
                            throw new N(59);
                          }
                          return d.m.Xb(d, b, e);
                        case 21523:
                          if (!d.s) {
                            return -59;
                          }
                          d.s.W.$b && (f = [24, 80], e = fb(), Ea[e >> 1] = f[0], Ea[e + 2 >> 1] = f[1]);
                          return 0;
                        case 21524:
                          return d.s ? 0 : -59;
                        case 21515:
                          return d.s ? 0 : -59;
                        default:
                          return -28;
                      }
                    } catch (g) {
                      if ("undefined" == typeof oc || "ErrnoError" !== g.name) {
                        throw g;
                      }
                      return -g.aa;
                    }
                  }, __syscall_openat: function(a, b, c, d) {
                    gb = d;
                    try {
                      b = b ? pb(B, b) : "";
                      var e = b;
                      if ("/" === e.charAt(0)) {
                        b = e;
                      } else {
                        var f = -100 === a ? "/" : Wb(a).path;
                        if (0 == e.length) {
                          throw new N(44);
                        }
                        b = ib(f + "/" + e);
                      }
                      var g = d ? fb() : 0;
                      return ic(b, c, g).X;
                    } catch (k) {
                      if ("undefined" == typeof oc || "ErrnoError" !== k.name) {
                        throw k;
                      }
                      return -k.aa;
                    }
                  }, _abort_js: () => {
                    Sa("");
                  }, _embind_create_inheriting_constructor: (a, b, c) => {
                    a = Q(a);
                    b = Gc(b, "wrapper");
                    c = sc(c);
                    var d = b.i, e = d.N, f = d.C.N, g = d.C.constructor;
                    a = pc(a, function(...k) {
                      d.C.qb.forEach(function(p) {
                        if (this[p] === f[p]) {
                          throw new vc(`Pure virtual function ${p} must be implemented in JavaScript`);
                        }
                      }.bind(this));
                      Object.defineProperty(this, "__parent", { value: e });
                      this.__construct(...k);
                    });
                    e.__construct = function(...k) {
                      if (this === e) {
                        throw new P("Pass correct 'this' to __construct");
                      }
                      k = g.implement(this, ...k);
                      Hc(k);
                      var p = k.g;
                      k.notifyOnDestruction();
                      p.ia = true;
                      Object.defineProperties(this, { g: { value: p } });
                      Nc(this);
                      k = p.o;
                      k = Bc(d, k);
                      if (Ac.hasOwnProperty(k)) {
                        throw new P(`Tried to register registered instance: ${k}`);
                      }
                      Ac[k] = this;
                    };
                    e.__destruct = function() {
                      if (this === e) {
                        throw new P("Pass correct 'this' to __destruct");
                      }
                      Hc(this);
                      var k = this.g.o;
                      k = Bc(d, k);
                      if (Ac.hasOwnProperty(k)) {
                        delete Ac[k];
                      } else {
                        throw new P(`Tried to unregister unregistered instance: ${k}`);
                      }
                    };
                    a.prototype = Object.create(e);
                    Object.assign(a.prototype, c);
                    return tc(a);
                  }, _embind_finalize_value_object: (a) => {
                    var b = Pc[a];
                    delete Pc[a];
                    var c = b.Oa, d = b.P, e = b.fb, f = e.map((g) => g.Vb).concat(e.map((g) => g.lc));
                    S([a], f, (g) => {
                      var k = {};
                      e.forEach((p, n) => {
                        var t = g[n], x = p.Tb, y = p.Ub, l = g[n + e.length], u = p.kc, r = p.mc;
                        k[p.Pb] = { read: (D) => t.fromWireType(x(y, D)), write: (D, I) => {
                          var w = [];
                          u(r, D, l.toWireType(w, I));
                          Qc(w);
                        } };
                      });
                      return [{ name: b.name, fromWireType: (p) => {
                        var n = {}, t;
                        for (t in k) {
                          n[t] = k[t].read(p);
                        }
                        d(p);
                        return n;
                      }, toWireType: (p, n) => {
                        for (var t in k) {
                          if (!(t in n)) {
                            throw new TypeError(`Missing field: "${t}"`);
                          }
                        }
                        var x = c();
                        for (t in k) {
                          k[t].write(x, n[t]);
                        }
                        null !== p && p.push(d, x);
                        return x;
                      }, argPackAdvance: 8, readValueFromPointer: Rc, M: d }];
                    });
                  }, _embind_register_bigint: () => {
                  }, _embind_register_bool: (a, b, c, d) => {
                    b = Q(b);
                    Uc(a, { name: b, fromWireType: function(e) {
                      return !!e;
                    }, toWireType: function(e, f) {
                      return f ? c : d;
                    }, argPackAdvance: 8, readValueFromPointer: function(e) {
                      return this.fromWireType(B[e]);
                    }, M: null });
                  }, _embind_register_class: (a, b, c, d, e, f, g, k, p, n, t, x, y) => {
                    t = Q(t);
                    f = U(e, f);
                    k && (k = U(g, k));
                    n && (n = U(p, n));
                    y = U(x, y);
                    var l = $c(t);
                    Zc(l, function() {
                      pd(`Cannot construct ${t} due to unbound types`, [d]);
                    });
                    S([a, b, c], d ? [d] : [], (u) => {
                      var _a2;
                      u = u[0];
                      if (d) {
                        var r = u.i;
                        var D = r.N;
                      } else {
                        D = Xc.prototype;
                      }
                      u = pc(t, function(...R) {
                        if (Object.getPrototypeOf(this) !== I) {
                          throw new P("Use 'new' to construct " + t);
                        }
                        if (void 0 === w.$) {
                          throw new P(t + " has no accessible constructor");
                        }
                        var V = w.$[R.length];
                        if (void 0 === V) {
                          throw new P(`Tried to invoke ctor of ${t} with invalid number of parameters (${R.length}) - expected (${Object.keys(w.$).toString()}) parameters instead!`);
                        }
                        return V.apply(this, R);
                      });
                      var I = Object.create(D, { constructor: { value: u } });
                      u.prototype = I;
                      var w = new ad(t, u, I, y, r, f, k, n);
                      if (w.C) {
                        var L;
                        (_a2 = (L = w.C).oa) != null ? _a2 : L.oa = [];
                        w.C.oa.push(w);
                      }
                      r = new gd(t, w, true, false, false);
                      L = new gd(t + "*", w, false, false, false);
                      D = new gd(t + " const*", w, false, true, false);
                      Kc[a] = { pointerType: L, Ib: D };
                      hd(l, u);
                      return [r, L, D];
                    });
                  }, _embind_register_class_class_function: (a, b, c, d, e, f, g) => {
                    var k = vd(c, d);
                    b = Q(b);
                    b = wd(b);
                    f = U(e, f);
                    S([], [a], (p) => {
                      function n() {
                        pd(`Cannot call ${t} due to unbound types`, k);
                      }
                      p = p[0];
                      var t = `${p.name}.${b}`;
                      b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                      var x = p.i.constructor;
                      void 0 === x[b] ? (n.ea = c - 1, x[b] = n) : (Yc(x, b, t), x[b].A[c - 1] = n);
                      S([], k, (y) => {
                        y = ud(t, [y[0], null].concat(y.slice(1)), null, f, g);
                        void 0 === x[b].A ? (y.ea = c - 1, x[b] = y) : x[b].A[c - 1] = y;
                        if (p.i.oa) {
                          for (const l of p.i.oa) {
                            l.constructor.hasOwnProperty(b) || (l.constructor[b] = y);
                          }
                        }
                        return [];
                      });
                      return [];
                    });
                  }, _embind_register_class_class_property: (a, b, c, d, e, f, g, k) => {
                    b = Q(b);
                    f = U(e, f);
                    S([], [a], (p) => {
                      p = p[0];
                      var n = `${p.name}.${b}`, t = { get() {
                        pd(`Cannot access ${n} due to unbound types`, [c]);
                      }, enumerable: true, configurable: true };
                      t.set = k ? () => {
                        pd(`Cannot access ${n} due to unbound types`, [c]);
                      } : () => {
                        throw new P(`${n} is a read-only property`);
                      };
                      Object.defineProperty(p.i.constructor, b, t);
                      S([], [c], (x) => {
                        x = x[0];
                        var y = { get() {
                          return x.fromWireType(f(d));
                        }, enumerable: true };
                        k && (k = U(g, k), y.set = (l) => {
                          var u = [];
                          k(d, x.toWireType(u, l));
                          Qc(u);
                        });
                        Object.defineProperty(p.i.constructor, b, y);
                        return [];
                      });
                      return [];
                    });
                  }, _embind_register_class_constructor: (a, b, c, d, e, f) => {
                    var g = vd(b, c);
                    e = U(d, e);
                    S([], [a], (k) => {
                      k = k[0];
                      var p = `constructor ${k.name}`;
                      void 0 === k.i.$ && (k.i.$ = []);
                      if (void 0 !== k.i.$[b - 1]) {
                        throw new P(`Cannot register multiple constructors with identical number of parameters (${b - 1}) for class '${k.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                      }
                      k.i.$[b - 1] = () => {
                        pd(`Cannot construct ${k.name} due to unbound types`, g);
                      };
                      S([], g, (n) => {
                        n.splice(1, 0, null);
                        k.i.$[b - 1] = ud(p, n, null, e, f);
                        return [];
                      });
                      return [];
                    });
                  }, _embind_register_class_function: (a, b, c, d, e, f, g, k) => {
                    var p = vd(c, d);
                    b = Q(b);
                    b = wd(b);
                    f = U(e, f);
                    S([], [a], (n) => {
                      function t() {
                        pd(`Cannot call ${x} due to unbound types`, p);
                      }
                      n = n[0];
                      var x = `${n.name}.${b}`;
                      b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                      k && n.i.qb.push(b);
                      var y = n.i.N, l = y[b];
                      void 0 === l || void 0 === l.A && l.className !== n.name && l.ea === c - 2 ? (t.ea = c - 2, t.className = n.name, y[b] = t) : (Yc(y, b, x), y[b].A[c - 2] = t);
                      S([], p, (u) => {
                        u = ud(x, u, n, f, g);
                        void 0 === y[b].A ? (u.ea = c - 2, y[b] = u) : y[b].A[c - 2] = u;
                        return [];
                      });
                      return [];
                    });
                  }, _embind_register_class_property: (a, b, c, d, e, f, g, k, p, n) => {
                    b = Q(b);
                    e = U(d, e);
                    S([], [a], (t) => {
                      t = t[0];
                      var x = `${t.name}.${b}`, y = { get() {
                        pd(`Cannot access ${x} due to unbound types`, [c, g]);
                      }, enumerable: true, configurable: true };
                      y.set = p ? () => pd(`Cannot access ${x} due to unbound types`, [c, g]) : () => {
                        throw new P(x + " is a read-only property");
                      };
                      Object.defineProperty(t.i.N, b, y);
                      S([], p ? [c, g] : [c], (l) => {
                        var u = l[0], r = { get() {
                          var I = xd(this, t, x + " getter");
                          return u.fromWireType(e(f, I));
                        }, enumerable: true };
                        if (p) {
                          p = U(k, p);
                          var D = l[1];
                          r.set = function(I) {
                            var w = xd(this, t, x + " setter"), L = [];
                            p(n, w, D.toWireType(L, I));
                            Qc(L);
                          };
                        }
                        Object.defineProperty(t.i.N, b, r);
                        return [];
                      });
                      return [];
                    });
                  }, _embind_register_emval: (a) => Uc(a, zd), _embind_register_enum: (a, b, c, d) => {
                    function e() {
                    }
                    b = Q(b);
                    e.values = {};
                    Uc(a, { name: b, constructor: e, fromWireType: function(f) {
                      return this.constructor.values[f];
                    }, toWireType: (f, g) => g.value, argPackAdvance: 8, readValueFromPointer: Ad(b, c, d), M: null });
                    Zc(b, e);
                  }, _embind_register_enum_value: (a, b, c) => {
                    var d = Gc(a, "enum");
                    b = Q(b);
                    a = d.constructor;
                    d = Object.create(d.constructor.prototype, { value: { value: c }, constructor: { value: pc(`${d.name}_${b}`, function() {
                    }) } });
                    a.values[c] = d;
                    a[b] = d;
                  }, _embind_register_float: (a, b, c) => {
                    b = Q(b);
                    Uc(a, { name: b, fromWireType: (d) => d, toWireType: (d, e) => e, argPackAdvance: 8, readValueFromPointer: Bd(b, c), M: null });
                  }, _embind_register_function: (a, b, c, d, e, f) => {
                    var g = vd(b, c);
                    a = Q(a);
                    a = wd(a);
                    e = U(d, e);
                    Zc(a, function() {
                      pd(`Cannot call ${a} due to unbound types`, g);
                    }, b - 1);
                    S([], g, (k) => {
                      hd(a, ud(a, [k[0], null].concat(k.slice(1)), null, e, f), b - 1);
                      return [];
                    });
                  }, _embind_register_integer: (a, b, c, d, e) => {
                    b = Q(b);
                    -1 === e && (e = 4294967295);
                    e = (k) => k;
                    if (0 === d) {
                      var f = 32 - 8 * c;
                      e = (k) => k << f >>> f;
                    }
                    var g = b.includes("unsigned") ? function(k, p) {
                      return p >>> 0;
                    } : function(k, p) {
                      return p;
                    };
                    Uc(a, { name: b, fromWireType: e, toWireType: g, argPackAdvance: 8, readValueFromPointer: Cd(b, c, 0 !== d), M: null });
                  }, _embind_register_memory_view: (a, b, c) => {
                    function d(f) {
                      return new e(z.buffer, F[f + 4 >> 2], F[f >> 2]);
                    }
                    var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b];
                    c = Q(c);
                    Uc(a, { name: c, fromWireType: d, argPackAdvance: 8, readValueFromPointer: d }, { Wb: true });
                  }, _embind_register_std_string: (a, b) => {
                    b = Q(b);
                    var c = "std::string" === b;
                    Uc(a, { name: b, fromWireType: function(d) {
                      var e = F[d >> 2], f = d + 4;
                      if (c) {
                        for (var g = f, k = 0; k <= e; ++k) {
                          var p = f + k;
                          if (k == e || 0 == B[p]) {
                            g = g ? pb(B, g, p - g) : "";
                            if (void 0 === n) {
                              var n = g;
                            } else {
                              n += String.fromCharCode(0), n += g;
                            }
                            g = p + 1;
                          }
                        }
                      } else {
                        n = Array(e);
                        for (k = 0; k < e; ++k) {
                          n[k] = String.fromCharCode(B[f + k]);
                        }
                        n = n.join("");
                      }
                      Ec(d);
                      return n;
                    }, toWireType: function(d, e) {
                      e instanceof ArrayBuffer && (e = new Uint8Array(e));
                      var f = "string" == typeof e;
                      if (!(f || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array)) {
                        throw new P("Cannot pass non-string to std::string");
                      }
                      var g = c && f ? rb(e) : e.length;
                      var k = ce(4 + g + 1), p = k + 4;
                      F[k >> 2] = g;
                      if (c && f) {
                        tb(e, B, p, g + 1);
                      } else {
                        if (f) {
                          for (f = 0; f < g; ++f) {
                            var n = e.charCodeAt(f);
                            if (255 < n) {
                              throw Ec(p), new P("String has UTF-16 code units that do not fit in 8 bits");
                            }
                            B[p + f] = n;
                          }
                        } else {
                          for (f = 0; f < g; ++f) {
                            B[p + f] = e[f];
                          }
                        }
                      }
                      null !== d && d.push(Ec, k);
                      return k;
                    }, argPackAdvance: 8, readValueFromPointer: Rc, M(d) {
                      Ec(d);
                    } });
                  }, _embind_register_std_wstring: (a, b, c) => {
                    c = Q(c);
                    if (2 === b) {
                      var d = Ed;
                      var e = Fd;
                      var f = Gd;
                      var g = (k) => Fa[k >> 1];
                    } else {
                      4 === b && (d = Hd, e = Id, f = Jd, g = (k) => F[k >> 2]);
                    }
                    Uc(a, { name: c, fromWireType: (k) => {
                      for (var p = F[k >> 2], n, t = k + 4, x = 0; x <= p; ++x) {
                        var y = k + 4 + x * b;
                        if (x == p || 0 == g(y)) {
                          t = d(t, y - t), void 0 === n ? n = t : (n += String.fromCharCode(0), n += t), t = y + b;
                        }
                      }
                      Ec(k);
                      return n;
                    }, toWireType: (k, p) => {
                      if ("string" != typeof p) {
                        throw new P(`Cannot pass non-string to C++ string type ${c}`);
                      }
                      var n = f(p), t = ce(4 + n + b);
                      F[t >> 2] = n / b;
                      e(p, t + 4, n + b);
                      null !== k && k.push(Ec, t);
                      return t;
                    }, argPackAdvance: 8, readValueFromPointer: Rc, M(k) {
                      Ec(k);
                    } });
                  }, _embind_register_value_object: (a, b, c, d, e, f) => {
                    Pc[a] = { name: Q(b), Oa: U(c, d), P: U(e, f), fb: [] };
                  }, _embind_register_value_object_field: (a, b, c, d, e, f, g, k, p, n) => {
                    Pc[a].fb.push({ Pb: Q(b), Vb: c, Tb: U(d, e), Ub: f, lc: g, kc: U(k, p), mc: n });
                  }, _embind_register_void: (a, b) => {
                    b = Q(b);
                    Uc(a, { Jc: true, name: b, argPackAdvance: 0, fromWireType: () => {
                    }, toWireType: () => {
                    } });
                  }, _emscripten_get_now_is_monotonic: () => 1, _emscripten_memcpy_js: (a, b, c) => B.copyWithin(a, b, b + c), _emscripten_throw_longjmp: () => {
                    throw Infinity;
                  }, _emval_as: (a, b, c) => {
                    a = sc(a);
                    b = Gc(b, "emval::as");
                    return Kd(b, c, a);
                  }, _emval_call_method: (a, b, c, d, e) => {
                    a = Nd[a];
                    b = sc(b);
                    c = Md(c);
                    return a(b, b[c], d, e);
                  }, _emval_decref: yd, _emval_get_method_caller: (a, b, c) => {
                    var d = Pd(a, b), e = d.shift();
                    a--;
                    var f = Array(a);
                    b = `methodCaller<(${d.map((g) => g.name).join(", ")}) => ${e.name}>`;
                    return Od(pc(b, (g, k, p, n) => {
                      for (var t = 0, x = 0; x < a; ++x) {
                        f[x] = d[x].readValueFromPointer(n + t), t += d[x].argPackAdvance;
                      }
                      g = 1 === c ? Qd(k, f) : k.apply(g, f);
                      return Kd(e, p, g);
                    }));
                  }, _emval_get_module_property: (a) => {
                    a = Md(a);
                    return tc(m[a]);
                  }, _emval_get_property: (a, b) => {
                    a = sc(a);
                    b = sc(b);
                    return tc(a[b]);
                  }, _emval_incref: (a) => {
                    9 < a && (rc[a + 1] += 1);
                  }, _emval_new_array: () => tc([]), _emval_new_cstring: (a) => tc(Md(a)), _emval_new_object: () => tc({}), _emval_run_destructors: (a) => {
                    var b = sc(a);
                    Qc(b);
                    yd(a);
                  }, _emval_set_property: (a, b, c) => {
                    a = sc(a);
                    b = sc(b);
                    c = sc(c);
                    a[b] = c;
                  }, _emval_take_value: (a, b) => {
                    a = Gc(a, "_emval_take_value");
                    a = a.readValueFromPointer(b);
                    return tc(a);
                  }, _gmtime_js: function(a, b, c) {
                    a = new Date(1e3 * (b + 2097152 >>> 0 < 4194305 - !!a ? (a >>> 0) + 4294967296 * b : NaN));
                    C[c >> 2] = a.getUTCSeconds();
                    C[c + 4 >> 2] = a.getUTCMinutes();
                    C[c + 8 >> 2] = a.getUTCHours();
                    C[c + 12 >> 2] = a.getUTCDate();
                    C[c + 16 >> 2] = a.getUTCMonth();
                    C[c + 20 >> 2] = a.getUTCFullYear() - 1900;
                    C[c + 24 >> 2] = a.getUTCDay();
                    C[c + 28 >> 2] = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864e5 | 0;
                  }, _localtime_js: function(a, b, c) {
                    a = new Date(1e3 * (b + 2097152 >>> 0 < 4194305 - !!a ? (a >>> 0) + 4294967296 * b : NaN));
                    C[c >> 2] = a.getSeconds();
                    C[c + 4 >> 2] = a.getMinutes();
                    C[c + 8 >> 2] = a.getHours();
                    C[c + 12 >> 2] = a.getDate();
                    C[c + 16 >> 2] = a.getMonth();
                    C[c + 20 >> 2] = a.getFullYear() - 1900;
                    C[c + 24 >> 2] = a.getDay();
                    C[c + 28 >> 2] = (Rd(a.getFullYear()) ? Sd : Td)[a.getMonth()] + a.getDate() - 1 | 0;
                    C[c + 36 >> 2] = -(60 * a.getTimezoneOffset());
                    b = new Date(a.getFullYear(), 6, 1).getTimezoneOffset();
                    var d = new Date(a.getFullYear(), 0, 1).getTimezoneOffset();
                    C[c + 32 >> 2] = (b != d && a.getTimezoneOffset() == Math.min(d, b)) | 0;
                  }, _tzset_js: (a, b, c, d) => {
                    var e = (/* @__PURE__ */ new Date()).getFullYear(), f = new Date(e, 0, 1), g = new Date(e, 6, 1);
                    e = f.getTimezoneOffset();
                    var k = g.getTimezoneOffset();
                    F[a >> 2] = 60 * Math.max(e, k);
                    C[b >> 2] = Number(e != k);
                    a = (p) => p.toLocaleTimeString(void 0, { hour12: false, timeZoneName: "short" }).split(" ")[1];
                    f = a(f);
                    g = a(g);
                    k < e ? (tb(f, B, c, 17), tb(g, B, d, 17)) : (tb(f, B, d, 17), tb(g, B, c, 17));
                  }, emscripten_asm_const_int: (a, b, c) => {
                    Ud.length = 0;
                    for (var d; d = B[b++]; ) {
                      var e = 105 != d;
                      e &= 112 != d;
                      c += e && c % 8 ? 4 : 0;
                      Ud.push(112 == d ? F[c >> 2] : 105 == d ? C[c >> 2] : Ja[c >> 3]);
                      c += e ? 8 : 4;
                    }
                    return db[a](...Ud);
                  }, emscripten_date_now: () => Date.now(), emscripten_get_now: () => performance.now(), emscripten_resize_heap: (a) => {
                    var b = B.length;
                    a >>>= 0;
                    if (2147483648 < a) {
                      return false;
                    }
                    for (var c = 1; 4 >= c; c *= 2) {
                      var d = b * (1 + 0.2 / c);
                      d = Math.min(d, a + 100663296);
                      var e = Math;
                      d = Math.max(a, d);
                      a: {
                        e = (e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536) - Ca.buffer.byteLength + 65535) / 65536;
                        try {
                          Ca.grow(e);
                          Ka();
                          var f = 1;
                          break a;
                        } catch (g) {
                        }
                        f = void 0;
                      }
                      if (f) {
                        return true;
                      }
                    }
                    return false;
                  }, environ_get: (a, b) => {
                    var c = 0;
                    Xd().forEach((d, e) => {
                      var f = b + c;
                      e = F[a + 4 * e >> 2] = f;
                      for (f = 0; f < d.length; ++f) {
                        z[e++] = d.charCodeAt(f);
                      }
                      z[e] = 0;
                      c += d.length + 1;
                    });
                    return 0;
                  }, environ_sizes_get: (a, b) => {
                    var c = Xd();
                    F[a >> 2] = c.length;
                    var d = 0;
                    c.forEach((e) => d += e.length + 1);
                    F[b >> 2] = d;
                    return 0;
                  }, fd_close: function(a) {
                    try {
                      var b = Wb(a);
                      if (null === b.X) {
                        throw new N(8);
                      }
                      b.La && (b.La = null);
                      try {
                        b.m.close && b.m.close(b);
                      } catch (c) {
                        throw c;
                      } finally {
                        Jb[b.X] = null;
                      }
                      b.X = null;
                      return 0;
                    } catch (c) {
                      if ("undefined" == typeof oc || "ErrnoError" !== c.name) {
                        throw c;
                      }
                      return c.aa;
                    }
                  }, fd_read: function(a, b, c, d) {
                    try {
                      a: {
                        var e = Wb(a);
                        a = b;
                        for (var f, g = b = 0; g < c; g++) {
                          var k = F[a >> 2], p = F[a + 4 >> 2];
                          a += 8;
                          var n = e, t = f, x = z;
                          if (0 > p || 0 > t) {
                            throw new N(28);
                          }
                          if (null === n.X) {
                            throw new N(8);
                          }
                          if (1 === (n.flags & 2097155)) {
                            throw new N(8);
                          }
                          if (16384 === (n.node.mode & 61440)) {
                            throw new N(31);
                          }
                          if (!n.m.read) {
                            throw new N(28);
                          }
                          var y = "undefined" != typeof t;
                          if (!y) {
                            t = n.position;
                          } else if (!n.seekable) {
                            throw new N(70);
                          }
                          var l = n.m.read(n, x, k, p, t);
                          y || (n.position += l);
                          var u = l;
                          if (0 > u) {
                            var r = -1;
                            break a;
                          }
                          b += u;
                          if (u < p) {
                            break;
                          }
                          "undefined" != typeof f && (f += u);
                        }
                        r = b;
                      }
                      F[d >> 2] = r;
                      return 0;
                    } catch (D) {
                      if ("undefined" == typeof oc || "ErrnoError" !== D.name) {
                        throw D;
                      }
                      return D.aa;
                    }
                  }, fd_seek: function(a, b, c, d, e) {
                    b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
                    try {
                      if (isNaN(b)) {
                        return 61;
                      }
                      var f = Wb(a);
                      kc(f, b, d);
                      $a = [f.position >>> 0, (Za = f.position, 1 <= +Math.abs(Za) ? 0 < Za ? +Math.floor(Za / 4294967296) >>> 0 : ~~+Math.ceil((Za - +(~~Za >>> 0)) / 4294967296) >>> 0 : 0)];
                      C[e >> 2] = $a[0];
                      C[e + 4 >> 2] = $a[1];
                      f.La && 0 === b && 0 === d && (f.La = null);
                      return 0;
                    } catch (g) {
                      if ("undefined" == typeof oc || "ErrnoError" !== g.name) {
                        throw g;
                      }
                      return g.aa;
                    }
                  }, fd_write: function(a, b, c, d) {
                    try {
                      a: {
                        var e = Wb(a);
                        a = b;
                        for (var f, g = b = 0; g < c; g++) {
                          var k = F[a >> 2], p = F[a + 4 >> 2];
                          a += 8;
                          var n = e, t = k, x = p, y = f, l = z;
                          if (0 > x || 0 > y) {
                            throw new N(28);
                          }
                          if (null === n.X) {
                            throw new N(8);
                          }
                          if (0 === (n.flags & 2097155)) {
                            throw new N(8);
                          }
                          if (16384 === (n.node.mode & 61440)) {
                            throw new N(31);
                          }
                          if (!n.m.write) {
                            throw new N(28);
                          }
                          n.seekable && n.flags & 1024 && kc(n, 0, 2);
                          var u = "undefined" != typeof y;
                          if (!u) {
                            y = n.position;
                          } else if (!n.seekable) {
                            throw new N(70);
                          }
                          var r = n.m.write(n, l, t, x, y, void 0);
                          u || (n.position += r);
                          var D = r;
                          if (0 > D) {
                            var I = -1;
                            break a;
                          }
                          b += D;
                          "undefined" != typeof f && (f += D);
                        }
                        I = b;
                      }
                      F[d >> 2] = I;
                      return 0;
                    } catch (w) {
                      if ("undefined" == typeof oc || "ErrnoError" !== w.name) {
                        throw w;
                      }
                      return w.aa;
                    }
                  }, invoke_vii: de, isWindowsBrowser: function() {
                    return -1 < navigator.platform.indexOf("Win");
                  }, strftime: $d, strftime_l: (a, b, c, d) => $d(a, b, c, d) }, W = (function() {
                    var _a2;
                    function a(c) {
                      var _a3;
                      W = c.exports;
                      Ca = W.memory;
                      Ka();
                      kd = W.__indirect_function_table;
                      Ma.unshift(W.__wasm_call_ctors);
                      Pa--;
                      (_a3 = m.monitorRunDependencies) == null ? void 0 : _a3.call(m, Pa);
                      0 == Pa && (Ra && (c = Ra, Ra = null, c()));
                      return W;
                    }
                    var b = { env: ee, wasi_snapshot_preview1: ee };
                    Pa++;
                    (_a2 = m.monitorRunDependencies) == null ? void 0 : _a2.call(m, Pa);
                    if (m.instantiateWasm) {
                      try {
                        return m.instantiateWasm(b, a);
                      } catch (c) {
                        Aa(`Module.instantiateWasm callback failed with error: ${c}`), ca(c);
                      }
                    }
                    Ua || (Ua = Ta("canvas_advanced.wasm") ? "canvas_advanced.wasm" : m.locateFile ? m.locateFile("canvas_advanced.wasm", ta) : ta + "canvas_advanced.wasm");
                    Ya(b, function(c) {
                      a(c.instance);
                    }).catch(ca);
                    return {};
                  })(), Ec = (a) => (Ec = W.free)(a), ce = (a) => (ce = W.malloc)(a), Dc = (a) => (Dc = W.__getTypeName)(a), ab = m._ma_device__on_notification_unlocked = (a) => (ab = m._ma_device__on_notification_unlocked = W.ma_device__on_notification_unlocked)(a);
                  m._ma_malloc_emscripten = (a, b) => (m._ma_malloc_emscripten = W.ma_malloc_emscripten)(a, b);
                  m._ma_free_emscripten = (a, b) => (m._ma_free_emscripten = W.ma_free_emscripten)(a, b);
                  var bb = m._ma_device_process_pcm_frames_capture__webaudio = (a, b, c) => (bb = m._ma_device_process_pcm_frames_capture__webaudio = W.ma_device_process_pcm_frames_capture__webaudio)(a, b, c), cb = m._ma_device_process_pcm_frames_playback__webaudio = (a, b, c) => (cb = m._ma_device_process_pcm_frames_playback__webaudio = W.ma_device_process_pcm_frames_playback__webaudio)(a, b, c), fe = (a, b) => (fe = W.setThrew)(a, b), ge = (a) => (ge = W._emscripten_stack_restore)(a), he = () => (he = W.emscripten_stack_get_current)();
                  m.dynCall_iiji = (a, b, c, d, e) => (m.dynCall_iiji = W.dynCall_iiji)(a, b, c, d, e);
                  m.dynCall_jiji = (a, b, c, d, e) => (m.dynCall_jiji = W.dynCall_jiji)(a, b, c, d, e);
                  m.dynCall_iiiji = (a, b, c, d, e, f) => (m.dynCall_iiiji = W.dynCall_iiiji)(a, b, c, d, e, f);
                  m.dynCall_iij = (a, b, c, d) => (m.dynCall_iij = W.dynCall_iij)(a, b, c, d);
                  m.dynCall_jii = (a, b, c) => (m.dynCall_jii = W.dynCall_jii)(a, b, c);
                  m.dynCall_viijii = (a, b, c, d, e, f, g) => (m.dynCall_viijii = W.dynCall_viijii)(a, b, c, d, e, f, g);
                  m.dynCall_iiiiij = (a, b, c, d, e, f, g) => (m.dynCall_iiiiij = W.dynCall_iiiiij)(a, b, c, d, e, f, g);
                  m.dynCall_iiiiijj = (a, b, c, d, e, f, g, k, p) => (m.dynCall_iiiiijj = W.dynCall_iiiiijj)(a, b, c, d, e, f, g, k, p);
                  m.dynCall_iiiiiijj = (a, b, c, d, e, f, g, k, p, n) => (m.dynCall_iiiiiijj = W.dynCall_iiiiiijj)(a, b, c, d, e, f, g, k, p, n);
                  function de(a, b, c) {
                    var d = he();
                    try {
                      ld(a)(b, c);
                    } catch (e) {
                      ge(d);
                      if (e !== e + 0) {
                        throw e;
                      }
                      fe(1, 0);
                    }
                  }
                  var ie;
                  Ra = function je() {
                    ie || ke();
                    ie || (Ra = je);
                  };
                  function ke() {
                    function a() {
                      if (!ie && (ie = true, m.calledRun = true, !Da)) {
                        m.noFSInit || lc || (lc = true, m.stdin = m.stdin, m.stdout = m.stdout, m.stderr = m.stderr, m.stdin ? mc("stdin", m.stdin) : hc("/dev/tty", "/dev/stdin"), m.stdout ? mc("stdout", null, m.stdout) : hc("/dev/tty", "/dev/stdout"), m.stderr ? mc("stderr", null, m.stderr) : hc("/dev/tty1", "/dev/stderr"), ic("/dev/stdin", 0), ic("/dev/stdout", 1), ic("/dev/stderr", 1));
                        Mb = false;
                        eb(Ma);
                        ba(m);
                        if (m.onRuntimeInitialized) {
                          m.onRuntimeInitialized();
                        }
                        if (m.postRun) {
                          for ("function" == typeof m.postRun && (m.postRun = [m.postRun]); m.postRun.length; ) {
                            var b = m.postRun.shift();
                            Na.unshift(b);
                          }
                        }
                        eb(Na);
                      }
                    }
                    if (!(0 < Pa)) {
                      if (m.preRun) {
                        for ("function" == typeof m.preRun && (m.preRun = [m.preRun]); m.preRun.length; ) {
                          Oa();
                        }
                      }
                      eb(La);
                      0 < Pa || (m.setStatus ? (m.setStatus("Running..."), setTimeout(function() {
                        setTimeout(function() {
                          m.setStatus("");
                        }, 1);
                        a();
                      }, 1)) : a());
                    }
                  }
                  if (m.preInit) {
                    for ("function" == typeof m.preInit && (m.preInit = [m.preInit]); 0 < m.preInit.length; ) {
                      m.preInit.pop()();
                    }
                  }
                  ke();
                  moduleRtn = da;
                  return moduleRtn;
                });
              })();
              const __WEBPACK_DEFAULT_EXPORT__ = Rive;
            }),
            /* 2 */
            /***/
            ((module2) => {
              module2.exports = /* @__PURE__ */ JSON.parse(`{"name":"@rive-app/canvas","version":"2.35.4","description":"Rive's canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}`);
            }),
            /* 3 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                Animation: () => (
                  /* reexport safe */
                  _Animation__WEBPACK_IMPORTED_MODULE_0__.Animation
                )
                /* harmony export */
              });
              var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(4);
            }),
            /* 4 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                Animation: () => (
                  /* binding */
                  Animation
                )
                /* harmony export */
              });
              var Animation = (
                /** @class */
                (function() {
                  function Animation2(animation, artboard, runtime, playing) {
                    this.animation = animation;
                    this.artboard = artboard;
                    this.playing = playing;
                    this.loopCount = 0;
                    this.scrubTo = null;
                    this.instance = new runtime.LinearAnimationInstance(animation, artboard);
                  }
                  Object.defineProperty(Animation2.prototype, "name", {
                    /**
                     * Returns the animation's name
                     */
                    get: function() {
                      return this.animation.name;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Animation2.prototype, "time", {
                    /**
                     * Returns the animation's name
                     */
                    get: function() {
                      return this.instance.time;
                    },
                    /**
                     * Sets the animation's current time
                     */
                    set: function(value) {
                      this.instance.time = value;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Animation2.prototype, "loopValue", {
                    /**
                     * Returns the animation's loop type
                     */
                    get: function() {
                      return this.animation.loopValue;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Animation2.prototype, "needsScrub", {
                    /**
                     * Indicates whether the animation needs to be scrubbed.
                     * @returns `true` if the animation needs to be scrubbed, `false` otherwise.
                     */
                    get: function() {
                      return this.scrubTo !== null;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Animation2.prototype.advance = function(time) {
                    if (this.scrubTo === null) {
                      this.instance.advance(time);
                    } else {
                      this.instance.time = 0;
                      this.instance.advance(this.scrubTo);
                      this.scrubTo = null;
                    }
                  };
                  Animation2.prototype.apply = function(mix) {
                    this.instance.apply(mix);
                  };
                  Animation2.prototype.cleanup = function() {
                    this.instance.delete();
                  };
                  return Animation2;
                })()
              );
            }),
            /* 5 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                AudioAssetWrapper: () => (
                  /* reexport safe */
                  _finalizationRegistry__WEBPACK_IMPORTED_MODULE_2__.AudioAssetWrapper
                ),
                /* harmony export */
                AudioWrapper: () => (
                  /* reexport safe */
                  _finalizationRegistry__WEBPACK_IMPORTED_MODULE_2__.AudioWrapper
                ),
                /* harmony export */
                BLANK_URL: () => (
                  /* reexport safe */
                  _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__.BLANK_URL
                ),
                /* harmony export */
                CustomFileAssetLoaderWrapper: () => (
                  /* reexport safe */
                  _finalizationRegistry__WEBPACK_IMPORTED_MODULE_2__.CustomFileAssetLoaderWrapper
                ),
                /* harmony export */
                FileAssetWrapper: () => (
                  /* reexport safe */
                  _finalizationRegistry__WEBPACK_IMPORTED_MODULE_2__.FileAssetWrapper
                ),
                /* harmony export */
                FileFinalizer: () => (
                  /* reexport safe */
                  _finalizationRegistry__WEBPACK_IMPORTED_MODULE_2__.FileFinalizer
                ),
                /* harmony export */
                FontAssetWrapper: () => (
                  /* reexport safe */
                  _finalizationRegistry__WEBPACK_IMPORTED_MODULE_2__.FontAssetWrapper
                ),
                /* harmony export */
                FontWrapper: () => (
                  /* reexport safe */
                  _finalizationRegistry__WEBPACK_IMPORTED_MODULE_2__.FontWrapper
                ),
                /* harmony export */
                ImageAssetWrapper: () => (
                  /* reexport safe */
                  _finalizationRegistry__WEBPACK_IMPORTED_MODULE_2__.ImageAssetWrapper
                ),
                /* harmony export */
                ImageWrapper: () => (
                  /* reexport safe */
                  _finalizationRegistry__WEBPACK_IMPORTED_MODULE_2__.ImageWrapper
                ),
                /* harmony export */
                createFinalization: () => (
                  /* reexport safe */
                  _finalizationRegistry__WEBPACK_IMPORTED_MODULE_2__.createFinalization
                ),
                /* harmony export */
                finalizationRegistry: () => (
                  /* reexport safe */
                  _finalizationRegistry__WEBPACK_IMPORTED_MODULE_2__.finalizationRegistry
                ),
                /* harmony export */
                registerTouchInteractions: () => (
                  /* reexport safe */
                  _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__.registerTouchInteractions
                ),
                /* harmony export */
                sanitizeUrl: () => (
                  /* reexport safe */
                  _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__.sanitizeUrl
                )
                /* harmony export */
              });
              var _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(6);
              var _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(7);
              var _finalizationRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(8);
            }),
            /* 6 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                registerTouchInteractions: () => (
                  /* binding */
                  registerTouchInteractions
                )
                /* harmony export */
              });
              var _this = void 0;
              var getClientCoordinates = function(event, isTouchScrollEnabled, enableMultiTouch) {
                var _a, _b;
                var coordinates = [];
                if (["touchstart", "touchmove"].indexOf(event.type) > -1 && ((_a = event.changedTouches) === null || _a === void 0 ? void 0 : _a.length)) {
                  if (!isTouchScrollEnabled) {
                    event.preventDefault();
                  }
                  var cnt = 0;
                  var totalTouches = enableMultiTouch ? event.changedTouches.length : 1;
                  while (cnt < totalTouches) {
                    var touch = event.changedTouches[cnt];
                    coordinates.push({
                      clientX: touch.clientX,
                      clientY: touch.clientY,
                      identifier: touch.identifier
                    });
                    cnt++;
                  }
                } else if (event.type === "touchend" && ((_b = event.changedTouches) === null || _b === void 0 ? void 0 : _b.length)) {
                  var cnt = 0;
                  var totalTouches = enableMultiTouch ? event.changedTouches.length : 1;
                  while (cnt < totalTouches) {
                    var touch = event.changedTouches[cnt];
                    coordinates.push({
                      clientX: touch.clientX,
                      clientY: touch.clientY,
                      identifier: touch.identifier
                    });
                    cnt++;
                  }
                } else {
                  coordinates.push({
                    clientX: event.clientX,
                    clientY: event.clientY,
                    identifier: 0
                  });
                }
                return coordinates;
              };
              var registerTouchInteractions = function(_a) {
                var canvas = _a.canvas, artboard = _a.artboard, _b = _a.stateMachines, stateMachines = _b === void 0 ? [] : _b, renderer = _a.renderer, rive2 = _a.rive, fit = _a.fit, alignment = _a.alignment, _c = _a.isTouchScrollEnabled, isTouchScrollEnabled = _c === void 0 ? false : _c, _d = _a.dispatchPointerExit, dispatchPointerExit = _d === void 0 ? true : _d, _e = _a.enableMultiTouch, enableMultiTouch = _e === void 0 ? false : _e, _f = _a.layoutScaleFactor, layoutScaleFactor = _f === void 0 ? 1 : _f;
                if (!canvas || !stateMachines.length || !renderer || !rive2 || !artboard || typeof window === "undefined") {
                  return null;
                }
                var _prevEventType = null;
                var _syntheticEventsActive = false;
                var processEventCallback = function(event) {
                  if (_syntheticEventsActive && event instanceof MouseEvent) {
                    if (event.type == "mouseup") {
                      _syntheticEventsActive = false;
                    }
                    return;
                  }
                  _syntheticEventsActive = isTouchScrollEnabled && event.type === "touchend" && _prevEventType === "touchstart";
                  _prevEventType = event.type;
                  var boundingRect = event.currentTarget.getBoundingClientRect();
                  var coordinateSets = getClientCoordinates(event, isTouchScrollEnabled, enableMultiTouch);
                  var forwardMatrix = rive2.computeAlignment(fit, alignment, {
                    minX: 0,
                    minY: 0,
                    maxX: boundingRect.width,
                    maxY: boundingRect.height
                  }, artboard.bounds, layoutScaleFactor);
                  var invertedMatrix = new rive2.Mat2D();
                  forwardMatrix.invert(invertedMatrix);
                  coordinateSets.forEach(function(coordinateSet) {
                    var clientX = coordinateSet.clientX;
                    var clientY = coordinateSet.clientY;
                    if (!clientX && !clientY) {
                      return;
                    }
                    var canvasX = clientX - boundingRect.left;
                    var canvasY = clientY - boundingRect.top;
                    var canvasCoordinatesVector = new rive2.Vec2D(canvasX, canvasY);
                    var transformedVector = rive2.mapXY(invertedMatrix, canvasCoordinatesVector);
                    var transformedX = transformedVector.x();
                    var transformedY = transformedVector.y();
                    coordinateSet.transformedX = transformedX;
                    coordinateSet.transformedY = transformedY;
                    transformedVector.delete();
                    canvasCoordinatesVector.delete();
                  });
                  invertedMatrix.delete();
                  forwardMatrix.delete();
                  switch (event.type) {
                    /**
                     * There's a 2px buffer for a hitRadius when translating the pointer coordinates
                     * down to the state machine. In cases where the hitbox is about that much away
                     * from the Artboard border, we don't have exact precision on determining pointer
                     * exit. We're therefore adding to the translated coordinates on mouseout of a canvas
                     * to ensure that we report the mouse has truly exited the hitarea.
                     * https://github.com/rive-app/rive-cpp/blob/master/src/animation/state_machine_instance.cpp#L336
                     *
                     */
                    case "mouseout":
                      var _loop_1 = function(stateMachine2) {
                        if (dispatchPointerExit) {
                          coordinateSets.forEach(function(coordinateSet) {
                            stateMachine2.pointerExit(coordinateSet.transformedX, coordinateSet.transformedY, coordinateSet.identifier);
                          });
                        } else {
                          coordinateSets.forEach(function(coordinateSet) {
                            stateMachine2.pointerMove(coordinateSet.transformedX, coordinateSet.transformedY, coordinateSet.identifier);
                          });
                        }
                      };
                      for (var _i = 0, stateMachines_1 = stateMachines; _i < stateMachines_1.length; _i++) {
                        var stateMachine = stateMachines_1[_i];
                        _loop_1(stateMachine);
                      }
                      break;
                    // Pointer moving/hovering on the canvas
                    case "touchmove":
                    case "mouseover":
                    case "mousemove": {
                      var _loop_2 = function(stateMachine2) {
                        coordinateSets.forEach(function(coordinateSet) {
                          stateMachine2.pointerMove(coordinateSet.transformedX, coordinateSet.transformedY, coordinateSet.identifier);
                        });
                      };
                      for (var _a2 = 0, stateMachines_2 = stateMachines; _a2 < stateMachines_2.length; _a2++) {
                        var stateMachine = stateMachines_2[_a2];
                        _loop_2(stateMachine);
                      }
                      break;
                    }
                    // Pointer click initiated but not released yet on the canvas
                    case "touchstart":
                    case "mousedown": {
                      var _loop_3 = function(stateMachine2) {
                        coordinateSets.forEach(function(coordinateSet) {
                          stateMachine2.pointerDown(coordinateSet.transformedX, coordinateSet.transformedY, coordinateSet.identifier);
                        });
                      };
                      for (var _b2 = 0, stateMachines_3 = stateMachines; _b2 < stateMachines_3.length; _b2++) {
                        var stateMachine = stateMachines_3[_b2];
                        _loop_3(stateMachine);
                      }
                      break;
                    }
                    // Pointer click released on the canvas
                    case "touchend": {
                      var _loop_4 = function(stateMachine2) {
                        coordinateSets.forEach(function(coordinateSet) {
                          stateMachine2.pointerUp(coordinateSet.transformedX, coordinateSet.transformedY, coordinateSet.identifier);
                          stateMachine2.pointerExit(coordinateSet.transformedX, coordinateSet.transformedY, coordinateSet.identifier);
                        });
                      };
                      for (var _c2 = 0, stateMachines_4 = stateMachines; _c2 < stateMachines_4.length; _c2++) {
                        var stateMachine = stateMachines_4[_c2];
                        _loop_4(stateMachine);
                      }
                      break;
                    }
                    case "mouseup": {
                      var _loop_5 = function(stateMachine2) {
                        coordinateSets.forEach(function(coordinateSet) {
                          stateMachine2.pointerUp(coordinateSet.transformedX, coordinateSet.transformedY, coordinateSet.identifier);
                        });
                      };
                      for (var _d2 = 0, stateMachines_5 = stateMachines; _d2 < stateMachines_5.length; _d2++) {
                        var stateMachine = stateMachines_5[_d2];
                        _loop_5(stateMachine);
                      }
                      break;
                    }
                  }
                };
                var callback = processEventCallback.bind(_this);
                canvas.addEventListener("mouseover", callback);
                canvas.addEventListener("mouseout", callback);
                canvas.addEventListener("mousemove", callback);
                canvas.addEventListener("mousedown", callback);
                canvas.addEventListener("mouseup", callback);
                canvas.addEventListener("touchmove", callback, {
                  passive: isTouchScrollEnabled
                });
                canvas.addEventListener("touchstart", callback, {
                  passive: isTouchScrollEnabled
                });
                canvas.addEventListener("touchend", callback);
                return function() {
                  canvas.removeEventListener("mouseover", callback);
                  canvas.removeEventListener("mouseout", callback);
                  canvas.removeEventListener("mousemove", callback);
                  canvas.removeEventListener("mousedown", callback);
                  canvas.removeEventListener("mouseup", callback);
                  canvas.removeEventListener("touchmove", callback);
                  canvas.removeEventListener("touchstart", callback);
                  canvas.removeEventListener("touchend", callback);
                };
              };
            }),
            /* 7 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                BLANK_URL: () => (
                  /* binding */
                  BLANK_URL
                ),
                /* harmony export */
                sanitizeUrl: () => (
                  /* binding */
                  sanitizeUrl
                )
                /* harmony export */
              });
              var invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
              var htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
              var htmlCtrlEntityRegex = /&(newline|tab);/gi;
              var ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
              var urlSchemeRegex = /^.+(:|&colon;)/gim;
              var relativeFirstCharacters = [".", "/"];
              var BLANK_URL = "about:blank";
              function isRelativeUrlWithoutProtocol(url) {
                return relativeFirstCharacters.indexOf(url[0]) > -1;
              }
              function decodeHtmlCharacters(str) {
                var removedNullByte = str.replace(ctrlCharactersRegex, "");
                return removedNullByte.replace(htmlEntitiesRegex, function(match, dec) {
                  return String.fromCharCode(dec);
                });
              }
              function sanitizeUrl(url) {
                if (!url) {
                  return BLANK_URL;
                }
                var sanitizedUrl = decodeHtmlCharacters(url).replace(htmlCtrlEntityRegex, "").replace(ctrlCharactersRegex, "").trim();
                if (!sanitizedUrl) {
                  return BLANK_URL;
                }
                if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
                  return sanitizedUrl;
                }
                var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
                if (!urlSchemeParseResults) {
                  return sanitizedUrl;
                }
                var urlScheme = urlSchemeParseResults[0];
                if (invalidProtocolRegex.test(urlScheme)) {
                  return BLANK_URL;
                }
                return sanitizedUrl;
              }
            }),
            /* 8 */
            /***/
            ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
              __webpack_require__2.r(__webpack_exports__2);
              __webpack_require__2.d(__webpack_exports__2, {
                /* harmony export */
                AudioAssetWrapper: () => (
                  /* binding */
                  AudioAssetWrapper
                ),
                /* harmony export */
                AudioWrapper: () => (
                  /* binding */
                  AudioWrapper
                ),
                /* harmony export */
                CustomFileAssetLoaderWrapper: () => (
                  /* binding */
                  CustomFileAssetLoaderWrapper
                ),
                /* harmony export */
                FileAssetWrapper: () => (
                  /* binding */
                  FileAssetWrapper
                ),
                /* harmony export */
                FileFinalizer: () => (
                  /* binding */
                  FileFinalizer
                ),
                /* harmony export */
                FontAssetWrapper: () => (
                  /* binding */
                  FontAssetWrapper
                ),
                /* harmony export */
                FontWrapper: () => (
                  /* binding */
                  FontWrapper
                ),
                /* harmony export */
                ImageAssetWrapper: () => (
                  /* binding */
                  ImageAssetWrapper
                ),
                /* harmony export */
                ImageWrapper: () => (
                  /* binding */
                  ImageWrapper
                ),
                /* harmony export */
                createFinalization: () => (
                  /* binding */
                  createFinalization
                ),
                /* harmony export */
                finalizationRegistry: () => (
                  /* binding */
                  finalizationRegistry
                )
                /* harmony export */
              });
              var __extends = /* @__PURE__ */ (function() {
                var extendStatics = function(d, b) {
                  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                  } || function(d2, b2) {
                    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                  };
                  return extendStatics(d, b);
                };
                return function(d, b) {
                  if (typeof b !== "function" && b !== null)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
              })();
              var FileFinalizer = (
                /** @class */
                (function() {
                  function FileFinalizer2(file) {
                    this.selfUnref = false;
                    this._file = file;
                  }
                  FileFinalizer2.prototype.unref = function() {
                    if (this._file) {
                      this._file.unref();
                    }
                  };
                  return FileFinalizer2;
                })()
              );
              var ObjectFinalizer = (
                /** @class */
                (function() {
                  function ObjectFinalizer2(finalizableObject) {
                    this._finalizableObject = finalizableObject;
                  }
                  ObjectFinalizer2.prototype.unref = function() {
                    this._finalizableObject.unref();
                  };
                  return ObjectFinalizer2;
                })()
              );
              var AssetWrapper = (
                /** @class */
                (function() {
                  function AssetWrapper2() {
                    this.selfUnref = false;
                  }
                  AssetWrapper2.prototype.unref = function() {
                  };
                  return AssetWrapper2;
                })()
              );
              var ImageWrapper = (
                /** @class */
                (function(_super) {
                  __extends(ImageWrapper2, _super);
                  function ImageWrapper2(image) {
                    var _this = _super.call(this) || this;
                    _this._nativeImage = image;
                    return _this;
                  }
                  Object.defineProperty(ImageWrapper2.prototype, "nativeImage", {
                    get: function() {
                      return this._nativeImage;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  ImageWrapper2.prototype.unref = function() {
                    if (this.selfUnref) {
                      this._nativeImage.unref();
                    }
                  };
                  return ImageWrapper2;
                })(AssetWrapper)
              );
              var AudioWrapper = (
                /** @class */
                (function(_super) {
                  __extends(AudioWrapper2, _super);
                  function AudioWrapper2(audio) {
                    var _this = _super.call(this) || this;
                    _this._nativeAudio = audio;
                    return _this;
                  }
                  Object.defineProperty(AudioWrapper2.prototype, "nativeAudio", {
                    get: function() {
                      return this._nativeAudio;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  AudioWrapper2.prototype.unref = function() {
                    if (this.selfUnref) {
                      this._nativeAudio.unref();
                    }
                  };
                  return AudioWrapper2;
                })(AssetWrapper)
              );
              var FontWrapper = (
                /** @class */
                (function(_super) {
                  __extends(FontWrapper2, _super);
                  function FontWrapper2(font) {
                    var _this = _super.call(this) || this;
                    _this._nativeFont = font;
                    return _this;
                  }
                  Object.defineProperty(FontWrapper2.prototype, "nativeFont", {
                    get: function() {
                      return this._nativeFont;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  FontWrapper2.prototype.unref = function() {
                    if (this.selfUnref) {
                      this._nativeFont.unref();
                    }
                  };
                  return FontWrapper2;
                })(AssetWrapper)
              );
              var CustomFileAssetLoaderWrapper = (
                /** @class */
                (function() {
                  function CustomFileAssetLoaderWrapper2(runtime, loaderCallback) {
                    this._assetLoaderCallback = loaderCallback;
                    this.assetLoader = new runtime.CustomFileAssetLoader({
                      loadContents: this.loadContents.bind(this)
                    });
                  }
                  CustomFileAssetLoaderWrapper2.prototype.loadContents = function(asset, bytes) {
                    var assetWrapper;
                    if (asset.isImage) {
                      assetWrapper = new ImageAssetWrapper(asset);
                    } else if (asset.isAudio) {
                      assetWrapper = new AudioAssetWrapper(asset);
                    } else if (asset.isFont) {
                      assetWrapper = new FontAssetWrapper(asset);
                    }
                    return this._assetLoaderCallback(assetWrapper, bytes);
                  };
                  return CustomFileAssetLoaderWrapper2;
                })()
              );
              var FileAssetWrapper = (
                /** @class */
                (function() {
                  function FileAssetWrapper2(nativeAsset) {
                    this._nativeFileAsset = nativeAsset;
                  }
                  FileAssetWrapper2.prototype.decode = function(bytes) {
                    this._nativeFileAsset.decode(bytes);
                  };
                  Object.defineProperty(FileAssetWrapper2.prototype, "name", {
                    get: function() {
                      return this._nativeFileAsset.name;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FileAssetWrapper2.prototype, "fileExtension", {
                    get: function() {
                      return this._nativeFileAsset.fileExtension;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FileAssetWrapper2.prototype, "uniqueFilename", {
                    get: function() {
                      return this._nativeFileAsset.uniqueFilename;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FileAssetWrapper2.prototype, "isAudio", {
                    get: function() {
                      return this._nativeFileAsset.isAudio;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FileAssetWrapper2.prototype, "isImage", {
                    get: function() {
                      return this._nativeFileAsset.isImage;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FileAssetWrapper2.prototype, "isFont", {
                    get: function() {
                      return this._nativeFileAsset.isFont;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FileAssetWrapper2.prototype, "cdnUuid", {
                    get: function() {
                      return this._nativeFileAsset.cdnUuid;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(FileAssetWrapper2.prototype, "nativeFileAsset", {
                    get: function() {
                      return this._nativeFileAsset;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  return FileAssetWrapper2;
                })()
              );
              var ImageAssetWrapper = (
                /** @class */
                (function(_super) {
                  __extends(ImageAssetWrapper2, _super);
                  function ImageAssetWrapper2() {
                    return _super !== null && _super.apply(this, arguments) || this;
                  }
                  ImageAssetWrapper2.prototype.setRenderImage = function(image) {
                    this._nativeFileAsset.setRenderImage(image.nativeImage);
                  };
                  return ImageAssetWrapper2;
                })(FileAssetWrapper)
              );
              var AudioAssetWrapper = (
                /** @class */
                (function(_super) {
                  __extends(AudioAssetWrapper2, _super);
                  function AudioAssetWrapper2() {
                    return _super !== null && _super.apply(this, arguments) || this;
                  }
                  AudioAssetWrapper2.prototype.setAudioSource = function(audio) {
                    this._nativeFileAsset.setAudioSource(audio.nativeAudio);
                  };
                  return AudioAssetWrapper2;
                })(FileAssetWrapper)
              );
              var FontAssetWrapper = (
                /** @class */
                (function(_super) {
                  __extends(FontAssetWrapper2, _super);
                  function FontAssetWrapper2() {
                    return _super !== null && _super.apply(this, arguments) || this;
                  }
                  FontAssetWrapper2.prototype.setFont = function(font) {
                    this._nativeFileAsset.setFont(font.nativeFont);
                  };
                  return FontAssetWrapper2;
                })(FileAssetWrapper)
              );
              var FakeFinalizationRegistry = (
                /** @class */
                (function() {
                  function FakeFinalizationRegistry2(_) {
                  }
                  FakeFinalizationRegistry2.prototype.register = function(object) {
                    object.selfUnref = true;
                  };
                  FakeFinalizationRegistry2.prototype.unregister = function(_) {
                  };
                  return FakeFinalizationRegistry2;
                })()
              );
              var MyFinalizationRegistry = typeof FinalizationRegistry !== "undefined" ? FinalizationRegistry : FakeFinalizationRegistry;
              var finalizationRegistry = new MyFinalizationRegistry(function(ob) {
                ob === null || ob === void 0 ? void 0 : ob.unref();
              });
              var createFinalization = function(target, finalizable) {
                var finalizer = new ObjectFinalizer(finalizable);
                finalizationRegistry.register(target, finalizer);
              };
            })
            /******/
          ];
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          (() => {
            __webpack_require__.d = (exports$12, definition) => {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports$12, key)) {
                  Object.defineProperty(exports$12, key, { enumerable: true, get: definition[key] });
                }
              }
            };
          })();
          (() => {
            __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
          })();
          (() => {
            __webpack_require__.r = (exports$12) => {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports$12, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports$12, "__esModule", { value: true });
            };
          })();
          var __webpack_exports__ = {};
          (() => {
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
              /* harmony export */
              Alignment: () => (
                /* binding */
                Alignment
              ),
              /* harmony export */
              DataEnum: () => (
                /* binding */
                DataEnum
              ),
              /* harmony export */
              DataType: () => (
                /* binding */
                DataType
              ),
              /* harmony export */
              DrawOptimizationOptions: () => (
                /* binding */
                DrawOptimizationOptions
              ),
              /* harmony export */
              EventType: () => (
                /* binding */
                EventType
              ),
              /* harmony export */
              Fit: () => (
                /* binding */
                Fit
              ),
              /* harmony export */
              Layout: () => (
                /* binding */
                Layout
              ),
              /* harmony export */
              LoopType: () => (
                /* binding */
                LoopType
              ),
              /* harmony export */
              Rive: () => (
                /* binding */
                Rive
              ),
              /* harmony export */
              RiveEventType: () => (
                /* binding */
                RiveEventType
              ),
              /* harmony export */
              RiveFile: () => (
                /* binding */
                RiveFile
              ),
              /* harmony export */
              RuntimeLoader: () => (
                /* binding */
                RuntimeLoader
              ),
              /* harmony export */
              StateMachineInput: () => (
                /* binding */
                StateMachineInput
              ),
              /* harmony export */
              StateMachineInputType: () => (
                /* binding */
                StateMachineInputType
              ),
              /* harmony export */
              Testing: () => (
                /* binding */
                Testing
              ),
              /* harmony export */
              ViewModel: () => (
                /* binding */
                ViewModel
              ),
              /* harmony export */
              ViewModelInstance: () => (
                /* binding */
                ViewModelInstance
              ),
              /* harmony export */
              ViewModelInstanceArtboard: () => (
                /* binding */
                ViewModelInstanceArtboard
              ),
              /* harmony export */
              ViewModelInstanceAssetImage: () => (
                /* binding */
                ViewModelInstanceAssetImage
              ),
              /* harmony export */
              ViewModelInstanceBoolean: () => (
                /* binding */
                ViewModelInstanceBoolean
              ),
              /* harmony export */
              ViewModelInstanceColor: () => (
                /* binding */
                ViewModelInstanceColor
              ),
              /* harmony export */
              ViewModelInstanceEnum: () => (
                /* binding */
                ViewModelInstanceEnum
              ),
              /* harmony export */
              ViewModelInstanceList: () => (
                /* binding */
                ViewModelInstanceList
              ),
              /* harmony export */
              ViewModelInstanceNumber: () => (
                /* binding */
                ViewModelInstanceNumber
              ),
              /* harmony export */
              ViewModelInstanceString: () => (
                /* binding */
                ViewModelInstanceString
              ),
              /* harmony export */
              ViewModelInstanceTrigger: () => (
                /* binding */
                ViewModelInstanceTrigger
              ),
              /* harmony export */
              ViewModelInstanceValue: () => (
                /* binding */
                ViewModelInstanceValue
              ),
              /* harmony export */
              decodeAudio: () => (
                /* binding */
                decodeAudio
              ),
              /* harmony export */
              decodeFont: () => (
                /* binding */
                decodeFont
              ),
              /* harmony export */
              decodeImage: () => (
                /* binding */
                decodeImage
              )
              /* harmony export */
            });
            var _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
            var package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
            var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
            var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
            var __extends = /* @__PURE__ */ (function() {
              var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                  d2.__proto__ = b2;
                } || function(d2, b2) {
                  for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                };
                return extendStatics(d, b);
              };
              return function(d, b) {
                if (typeof b !== "function" && b !== null)
                  throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
            })();
            var __assign = function() {
              __assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
                }
                return t;
              };
              return __assign.apply(this, arguments);
            };
            var __awaiter = function(thisArg, _arguments, P, generator) {
              function adopt(value) {
                return value instanceof P ? value : new P(function(resolve) {
                  resolve(value);
                });
              }
              return new (P || (P = Promise))(function(resolve, reject) {
                function fulfilled(value) {
                  try {
                    step(generator.next(value));
                  } catch (e) {
                    reject(e);
                  }
                }
                function rejected(value) {
                  try {
                    step(generator["throw"](value));
                  } catch (e) {
                    reject(e);
                  }
                }
                function step(result) {
                  result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
              });
            };
            var __generator = function(thisArg, body) {
              var _ = { label: 0, sent: function() {
                if (t[0] & 1) throw t[1];
                return t[1];
              }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
              return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                return this;
              }), g;
              function verb(n) {
                return function(v) {
                  return step([n, v]);
                };
              }
              function step(op) {
                if (f) throw new TypeError("Generator is already executing.");
                while (g && (g = 0, op[0] && (_ = 0)), _) try {
                  if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                  if (y = 0, t) op = [op[0] & 2, t.value];
                  switch (op[0]) {
                    case 0:
                    case 1:
                      t = op;
                      break;
                    case 4:
                      _.label++;
                      return { value: op[1], done: false };
                    case 5:
                      _.label++;
                      y = op[1];
                      op = [0];
                      continue;
                    case 7:
                      op = _.ops.pop();
                      _.trys.pop();
                      continue;
                    default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                      }
                      if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                      }
                      if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                      }
                      if (t[2]) _.ops.pop();
                      _.trys.pop();
                      continue;
                  }
                  op = body.call(thisArg, _);
                } catch (e) {
                  op = [6, e];
                  y = 0;
                } finally {
                  f = t = 0;
                }
                if (op[0] & 5) throw op[1];
                return { value: op[0] ? op[1] : void 0, done: true };
              }
            };
            var __spreadArray = function(to, from, pack) {
              if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                  if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                  ar[i] = from[i];
                }
              }
              return to.concat(ar || Array.prototype.slice.call(from));
            };
            var RiveError = (
              /** @class */
              (function(_super) {
                __extends(RiveError2, _super);
                function RiveError2() {
                  var _this = _super !== null && _super.apply(this, arguments) || this;
                  _this.isHandledError = true;
                  return _this;
                }
                return RiveError2;
              })(Error)
            );
            var resolveErrorMessage = function(error) {
              return error && error.isHandledError ? error.message : "Problem loading file; may be corrupt!";
            };
            var Fit;
            (function(Fit2) {
              Fit2["Cover"] = "cover";
              Fit2["Contain"] = "contain";
              Fit2["Fill"] = "fill";
              Fit2["FitWidth"] = "fitWidth";
              Fit2["FitHeight"] = "fitHeight";
              Fit2["None"] = "none";
              Fit2["ScaleDown"] = "scaleDown";
              Fit2["Layout"] = "layout";
            })(Fit || (Fit = {}));
            var Alignment;
            (function(Alignment2) {
              Alignment2["Center"] = "center";
              Alignment2["TopLeft"] = "topLeft";
              Alignment2["TopCenter"] = "topCenter";
              Alignment2["TopRight"] = "topRight";
              Alignment2["CenterLeft"] = "centerLeft";
              Alignment2["CenterRight"] = "centerRight";
              Alignment2["BottomLeft"] = "bottomLeft";
              Alignment2["BottomCenter"] = "bottomCenter";
              Alignment2["BottomRight"] = "bottomRight";
            })(Alignment || (Alignment = {}));
            var DrawOptimizationOptions;
            (function(DrawOptimizationOptions2) {
              DrawOptimizationOptions2["AlwaysDraw"] = "alwaysDraw";
              DrawOptimizationOptions2["DrawOnChanged"] = "drawOnChanged";
            })(DrawOptimizationOptions || (DrawOptimizationOptions = {}));
            var Layout = (
              /** @class */
              (function() {
                function Layout2(params) {
                  var _a, _b, _c, _d, _e, _f, _g;
                  this.fit = (_a = params === null || params === void 0 ? void 0 : params.fit) !== null && _a !== void 0 ? _a : Fit.Contain;
                  this.alignment = (_b = params === null || params === void 0 ? void 0 : params.alignment) !== null && _b !== void 0 ? _b : Alignment.Center;
                  this.layoutScaleFactor = (_c = params === null || params === void 0 ? void 0 : params.layoutScaleFactor) !== null && _c !== void 0 ? _c : 1;
                  this.minX = (_d = params === null || params === void 0 ? void 0 : params.minX) !== null && _d !== void 0 ? _d : 0;
                  this.minY = (_e = params === null || params === void 0 ? void 0 : params.minY) !== null && _e !== void 0 ? _e : 0;
                  this.maxX = (_f = params === null || params === void 0 ? void 0 : params.maxX) !== null && _f !== void 0 ? _f : 0;
                  this.maxY = (_g = params === null || params === void 0 ? void 0 : params.maxY) !== null && _g !== void 0 ? _g : 0;
                }
                Layout2.new = function(_a) {
                  var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
                  console.warn("This function is deprecated: please use `new Layout({})` instead");
                  return new Layout2({ fit, alignment, minX, minY, maxX, maxY });
                };
                Layout2.prototype.copyWith = function(_a) {
                  var fit = _a.fit, alignment = _a.alignment, layoutScaleFactor = _a.layoutScaleFactor, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
                  return new Layout2({
                    fit: fit !== null && fit !== void 0 ? fit : this.fit,
                    alignment: alignment !== null && alignment !== void 0 ? alignment : this.alignment,
                    layoutScaleFactor: layoutScaleFactor !== null && layoutScaleFactor !== void 0 ? layoutScaleFactor : this.layoutScaleFactor,
                    minX: minX !== null && minX !== void 0 ? minX : this.minX,
                    minY: minY !== null && minY !== void 0 ? minY : this.minY,
                    maxX: maxX !== null && maxX !== void 0 ? maxX : this.maxX,
                    maxY: maxY !== null && maxY !== void 0 ? maxY : this.maxY
                  });
                };
                Layout2.prototype.runtimeFit = function(rive2) {
                  if (this.cachedRuntimeFit)
                    return this.cachedRuntimeFit;
                  var fit;
                  if (this.fit === Fit.Cover)
                    fit = rive2.Fit.cover;
                  else if (this.fit === Fit.Contain)
                    fit = rive2.Fit.contain;
                  else if (this.fit === Fit.Fill)
                    fit = rive2.Fit.fill;
                  else if (this.fit === Fit.FitWidth)
                    fit = rive2.Fit.fitWidth;
                  else if (this.fit === Fit.FitHeight)
                    fit = rive2.Fit.fitHeight;
                  else if (this.fit === Fit.ScaleDown)
                    fit = rive2.Fit.scaleDown;
                  else if (this.fit === Fit.Layout)
                    fit = rive2.Fit.layout;
                  else
                    fit = rive2.Fit.none;
                  this.cachedRuntimeFit = fit;
                  return fit;
                };
                Layout2.prototype.runtimeAlignment = function(rive2) {
                  if (this.cachedRuntimeAlignment)
                    return this.cachedRuntimeAlignment;
                  var alignment;
                  if (this.alignment === Alignment.TopLeft)
                    alignment = rive2.Alignment.topLeft;
                  else if (this.alignment === Alignment.TopCenter)
                    alignment = rive2.Alignment.topCenter;
                  else if (this.alignment === Alignment.TopRight)
                    alignment = rive2.Alignment.topRight;
                  else if (this.alignment === Alignment.CenterLeft)
                    alignment = rive2.Alignment.centerLeft;
                  else if (this.alignment === Alignment.CenterRight)
                    alignment = rive2.Alignment.centerRight;
                  else if (this.alignment === Alignment.BottomLeft)
                    alignment = rive2.Alignment.bottomLeft;
                  else if (this.alignment === Alignment.BottomCenter)
                    alignment = rive2.Alignment.bottomCenter;
                  else if (this.alignment === Alignment.BottomRight)
                    alignment = rive2.Alignment.bottomRight;
                  else
                    alignment = rive2.Alignment.center;
                  this.cachedRuntimeAlignment = alignment;
                  return alignment;
                };
                return Layout2;
              })()
            );
            var RuntimeLoader = (
              /** @class */
              (function() {
                function RuntimeLoader2() {
                }
                RuntimeLoader2.loadRuntime = function() {
                  _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]({
                    // Loads Wasm bundle
                    locateFile: function() {
                      return RuntimeLoader2.wasmURL;
                    }
                  }).then(function(rive2) {
                    var _a;
                    RuntimeLoader2.runtime = rive2;
                    while (RuntimeLoader2.callBackQueue.length > 0) {
                      (_a = RuntimeLoader2.callBackQueue.shift()) === null || _a === void 0 ? void 0 : _a(RuntimeLoader2.runtime);
                    }
                  }).catch(function(error) {
                    var errorDetails = {
                      message: (error === null || error === void 0 ? void 0 : error.message) || "Unknown error",
                      type: (error === null || error === void 0 ? void 0 : error.name) || "Error",
                      // Some browsers may provide additional WebAssembly-specific details
                      wasmError: error instanceof WebAssembly.CompileError || error instanceof WebAssembly.RuntimeError,
                      originalError: error
                    };
                    console.debug("Rive WASM load error details:", errorDetails);
                    var backupJsdelivrUrl = "https://cdn.jsdelivr.net/npm/".concat(package_json__WEBPACK_IMPORTED_MODULE_1__.name, "@").concat(package_json__WEBPACK_IMPORTED_MODULE_1__.version, "/rive_fallback.wasm");
                    if (RuntimeLoader2.wasmURL.toLowerCase() !== backupJsdelivrUrl) {
                      console.warn("Failed to load WASM from ".concat(RuntimeLoader2.wasmURL, " (").concat(errorDetails.message, "), trying jsdelivr as a backup"));
                      RuntimeLoader2.setWasmUrl(backupJsdelivrUrl);
                      RuntimeLoader2.loadRuntime();
                    } else {
                      var errorMessage = [
                        "Could not load Rive WASM file from ".concat(RuntimeLoader2.wasmURL, " or ").concat(backupJsdelivrUrl, "."),
                        "Possible reasons:",
                        "- Network connection is down",
                        "- WebAssembly is not supported in this environment",
                        "- The WASM file is corrupted or incompatible",
                        "\nError details:",
                        "- Type: ".concat(errorDetails.type),
                        "- Message: ".concat(errorDetails.message),
                        "- WebAssembly-specific error: ".concat(errorDetails.wasmError),
                        "\nTo resolve, you may need to:",
                        "1. Check your network connection",
                        "2. Set a new WASM source via RuntimeLoader.setWasmUrl()",
                        "3. Call RuntimeLoader.loadRuntime() again"
                      ].join("\n");
                      console.error(errorMessage);
                    }
                  });
                };
                RuntimeLoader2.getInstance = function(callback) {
                  if (!RuntimeLoader2.isLoading) {
                    RuntimeLoader2.isLoading = true;
                    RuntimeLoader2.loadRuntime();
                  }
                  if (!RuntimeLoader2.runtime) {
                    RuntimeLoader2.callBackQueue.push(callback);
                  } else {
                    callback(RuntimeLoader2.runtime);
                  }
                };
                RuntimeLoader2.awaitInstance = function() {
                  return new Promise(function(resolve) {
                    return RuntimeLoader2.getInstance(function(rive2) {
                      return resolve(rive2);
                    });
                  });
                };
                RuntimeLoader2.setWasmUrl = function(url) {
                  RuntimeLoader2.wasmURL = url;
                };
                RuntimeLoader2.getWasmUrl = function() {
                  return RuntimeLoader2.wasmURL;
                };
                RuntimeLoader2.isLoading = false;
                RuntimeLoader2.callBackQueue = [];
                RuntimeLoader2.wasmURL = "https://unpkg.com/".concat(package_json__WEBPACK_IMPORTED_MODULE_1__.name, "@").concat(package_json__WEBPACK_IMPORTED_MODULE_1__.version, "/rive.wasm");
                return RuntimeLoader2;
              })()
            );
            var StateMachineInputType;
            (function(StateMachineInputType2) {
              StateMachineInputType2[StateMachineInputType2["Number"] = 56] = "Number";
              StateMachineInputType2[StateMachineInputType2["Trigger"] = 58] = "Trigger";
              StateMachineInputType2[StateMachineInputType2["Boolean"] = 59] = "Boolean";
            })(StateMachineInputType || (StateMachineInputType = {}));
            var StateMachineInput = (
              /** @class */
              (function() {
                function StateMachineInput2(type, runtimeInput) {
                  this.type = type;
                  this.runtimeInput = runtimeInput;
                }
                Object.defineProperty(StateMachineInput2.prototype, "name", {
                  /**
                   * Returns the name of the input
                   */
                  get: function() {
                    return this.runtimeInput.name;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(StateMachineInput2.prototype, "value", {
                  /**
                   * Returns the current value of the input
                   */
                  get: function() {
                    return this.runtimeInput.value;
                  },
                  /**
                   * Sets the value of the input
                   */
                  set: function(value) {
                    this.runtimeInput.value = value;
                  },
                  enumerable: false,
                  configurable: true
                });
                StateMachineInput2.prototype.fire = function() {
                  if (this.type === StateMachineInputType.Trigger) {
                    this.runtimeInput.fire();
                  }
                };
                StateMachineInput2.prototype.delete = function() {
                  this.runtimeInput = null;
                };
                return StateMachineInput2;
              })()
            );
            var RiveEventType;
            (function(RiveEventType2) {
              RiveEventType2[RiveEventType2["General"] = 128] = "General";
              RiveEventType2[RiveEventType2["OpenUrl"] = 131] = "OpenUrl";
            })(RiveEventType || (RiveEventType = {}));
            var BaseArtboard = (
              /** @class */
              /* @__PURE__ */ (function() {
                function BaseArtboard2(_isBindableArtboard) {
                  this.isBindableArtboard = false;
                  this.isBindableArtboard = _isBindableArtboard;
                }
                return BaseArtboard2;
              })()
            );
            var Artboard = (
              /** @class */
              (function(_super) {
                __extends(Artboard2, _super);
                function Artboard2(artboard, _file) {
                  var _this = _super.call(this, false) || this;
                  _this.nativeArtboard = artboard;
                  _this.file = _file;
                  return _this;
                }
                return Artboard2;
              })(BaseArtboard)
            );
            var BindableArtboard = (
              /** @class */
              (function(_super) {
                __extends(BindableArtboard2, _super);
                function BindableArtboard2(artboard) {
                  var _this = _super.call(this, true) || this;
                  _this.selfUnref = false;
                  _this.nativeArtboard = artboard;
                  return _this;
                }
                Object.defineProperty(BindableArtboard2.prototype, "viewModel", {
                  set: function(value) {
                    this.nativeViewModel = value.nativeInstance;
                  },
                  enumerable: false,
                  configurable: true
                });
                BindableArtboard2.prototype.destroy = function() {
                  var _a;
                  if (this.selfUnref) {
                    this.nativeArtboard.unref();
                    (_a = this.nativeViewModel) === null || _a === void 0 ? void 0 : _a.unref();
                  }
                };
                return BindableArtboard2;
              })(BaseArtboard)
            );
            var StateMachine = (
              /** @class */
              (function() {
                function StateMachine2(stateMachine, runtime, playing, artboard) {
                  this.stateMachine = stateMachine;
                  this.playing = playing;
                  this.artboard = artboard;
                  this.inputs = [];
                  this.instance = new runtime.StateMachineInstance(stateMachine, artboard);
                  this.initInputs(runtime);
                }
                Object.defineProperty(StateMachine2.prototype, "name", {
                  get: function() {
                    return this.stateMachine.name;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(StateMachine2.prototype, "statesChanged", {
                  /**
                   * Returns a list of state names that have changed on this frame
                   */
                  get: function() {
                    var names = [];
                    for (var i = 0; i < this.instance.stateChangedCount(); i++) {
                      names.push(this.instance.stateChangedNameByIndex(i));
                    }
                    return names;
                  },
                  enumerable: false,
                  configurable: true
                });
                StateMachine2.prototype.advance = function(time) {
                  this.instance.advance(time);
                };
                StateMachine2.prototype.advanceAndApply = function(time) {
                  this.instance.advanceAndApply(time);
                };
                StateMachine2.prototype.reportedEventCount = function() {
                  return this.instance.reportedEventCount();
                };
                StateMachine2.prototype.reportedEventAt = function(i) {
                  return this.instance.reportedEventAt(i);
                };
                StateMachine2.prototype.initInputs = function(runtime) {
                  for (var i = 0; i < this.instance.inputCount(); i++) {
                    var input = this.instance.input(i);
                    this.inputs.push(this.mapRuntimeInput(input, runtime));
                  }
                };
                StateMachine2.prototype.mapRuntimeInput = function(input, runtime) {
                  if (input.type === runtime.SMIInput.bool) {
                    return new StateMachineInput(StateMachineInputType.Boolean, input.asBool());
                  } else if (input.type === runtime.SMIInput.number) {
                    return new StateMachineInput(StateMachineInputType.Number, input.asNumber());
                  } else if (input.type === runtime.SMIInput.trigger) {
                    return new StateMachineInput(StateMachineInputType.Trigger, input.asTrigger());
                  }
                };
                StateMachine2.prototype.cleanup = function() {
                  this.inputs.forEach(function(input) {
                    input.delete();
                  });
                  this.inputs.length = 0;
                  this.instance.delete();
                };
                StateMachine2.prototype.bindViewModelInstance = function(viewModelInstance) {
                  if (viewModelInstance.runtimeInstance != null) {
                    this.instance.bindViewModelInstance(viewModelInstance.runtimeInstance);
                  }
                };
                return StateMachine2;
              })()
            );
            var Animator = (
              /** @class */
              (function() {
                function Animator2(runtime, artboard, eventManager, animations, stateMachines) {
                  if (animations === void 0) {
                    animations = [];
                  }
                  if (stateMachines === void 0) {
                    stateMachines = [];
                  }
                  this.runtime = runtime;
                  this.artboard = artboard;
                  this.eventManager = eventManager;
                  this.animations = animations;
                  this.stateMachines = stateMachines;
                }
                Animator2.prototype.add = function(animatables, playing, fireEvent) {
                  if (fireEvent === void 0) {
                    fireEvent = true;
                  }
                  animatables = mapToStringArray(animatables);
                  if (animatables.length === 0) {
                    this.animations.forEach(function(a) {
                      return a.playing = playing;
                    });
                    this.stateMachines.forEach(function(m) {
                      return m.playing = playing;
                    });
                  } else {
                    var instancedAnimationNames = this.animations.map(function(a) {
                      return a.name;
                    });
                    var instancedMachineNames = this.stateMachines.map(function(m) {
                      return m.name;
                    });
                    for (var i = 0; i < animatables.length; i++) {
                      var aIndex = instancedAnimationNames.indexOf(animatables[i]);
                      var mIndex = instancedMachineNames.indexOf(animatables[i]);
                      if (aIndex >= 0 || mIndex >= 0) {
                        if (aIndex >= 0) {
                          this.animations[aIndex].playing = playing;
                        } else {
                          this.stateMachines[mIndex].playing = playing;
                        }
                      } else {
                        var anim = this.artboard.animationByName(animatables[i]);
                        if (anim) {
                          var newAnimation = new _animation__WEBPACK_IMPORTED_MODULE_2__.Animation(anim, this.artboard, this.runtime, playing);
                          newAnimation.advance(0);
                          newAnimation.apply(1);
                          this.animations.push(newAnimation);
                        } else {
                          var sm = this.artboard.stateMachineByName(animatables[i]);
                          if (sm) {
                            var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                            this.stateMachines.push(newStateMachine);
                          }
                        }
                      }
                    }
                  }
                  if (fireEvent) {
                    if (playing) {
                      this.eventManager.fire({
                        type: EventType.Play,
                        data: this.playing
                      });
                    } else {
                      this.eventManager.fire({
                        type: EventType.Pause,
                        data: this.paused
                      });
                    }
                  }
                  return playing ? this.playing : this.paused;
                };
                Animator2.prototype.initLinearAnimations = function(animatables, playing) {
                  var instancedAnimationNames = this.animations.map(function(a) {
                    return a.name;
                  });
                  for (var i = 0; i < animatables.length; i++) {
                    var aIndex = instancedAnimationNames.indexOf(animatables[i]);
                    if (aIndex >= 0) {
                      this.animations[aIndex].playing = playing;
                    } else {
                      var anim = this.artboard.animationByName(animatables[i]);
                      if (anim) {
                        var newAnimation = new _animation__WEBPACK_IMPORTED_MODULE_2__.Animation(anim, this.artboard, this.runtime, playing);
                        newAnimation.advance(0);
                        newAnimation.apply(1);
                        this.animations.push(newAnimation);
                      } else {
                        console.error("Animation with name ".concat(animatables[i], " not found."));
                      }
                    }
                  }
                };
                Animator2.prototype.initStateMachines = function(animatables, playing) {
                  var instancedStateMachineNames = this.stateMachines.map(function(a) {
                    return a.name;
                  });
                  for (var i = 0; i < animatables.length; i++) {
                    var aIndex = instancedStateMachineNames.indexOf(animatables[i]);
                    if (aIndex >= 0) {
                      this.stateMachines[aIndex].playing = playing;
                    } else {
                      var sm = this.artboard.stateMachineByName(animatables[i]);
                      if (sm) {
                        var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                        this.stateMachines.push(newStateMachine);
                      } else {
                        console.warn("State Machine with name ".concat(animatables[i], " not found."));
                        this.initLinearAnimations([animatables[i]], playing);
                      }
                    }
                  }
                };
                Animator2.prototype.play = function(animatables) {
                  return this.add(animatables, true);
                };
                Animator2.prototype.advanceIfPaused = function() {
                  this.stateMachines.forEach(function(sm) {
                    if (!sm.playing) {
                      sm.advanceAndApply(0);
                    }
                  });
                };
                Animator2.prototype.pause = function(animatables) {
                  return this.add(animatables, false);
                };
                Animator2.prototype.scrub = function(animatables, value) {
                  var forScrubbing = this.animations.filter(function(a) {
                    return animatables.includes(a.name);
                  });
                  forScrubbing.forEach(function(a) {
                    return a.scrubTo = value;
                  });
                  return forScrubbing.map(function(a) {
                    return a.name;
                  });
                };
                Object.defineProperty(Animator2.prototype, "playing", {
                  /**
                   * Returns a list of names of all animations and state machines currently
                   * playing
                   */
                  get: function() {
                    return this.animations.filter(function(a) {
                      return a.playing;
                    }).map(function(a) {
                      return a.name;
                    }).concat(this.stateMachines.filter(function(m) {
                      return m.playing;
                    }).map(function(m) {
                      return m.name;
                    }));
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Animator2.prototype, "paused", {
                  /**
                   * Returns a list of names of all animations and state machines currently
                   * paused
                   */
                  get: function() {
                    return this.animations.filter(function(a) {
                      return !a.playing;
                    }).map(function(a) {
                      return a.name;
                    }).concat(this.stateMachines.filter(function(m) {
                      return !m.playing;
                    }).map(function(m) {
                      return m.name;
                    }));
                  },
                  enumerable: false,
                  configurable: true
                });
                Animator2.prototype.stop = function(animatables) {
                  var _this = this;
                  animatables = mapToStringArray(animatables);
                  var removedNames = [];
                  if (animatables.length === 0) {
                    removedNames = this.animations.map(function(a) {
                      return a.name;
                    }).concat(this.stateMachines.map(function(m) {
                      return m.name;
                    }));
                    this.animations.forEach(function(a) {
                      return a.cleanup();
                    });
                    this.stateMachines.forEach(function(m) {
                      return m.cleanup();
                    });
                    this.animations.splice(0, this.animations.length);
                    this.stateMachines.splice(0, this.stateMachines.length);
                  } else {
                    var animationsToRemove = this.animations.filter(function(a) {
                      return animatables.includes(a.name);
                    });
                    animationsToRemove.forEach(function(a) {
                      a.cleanup();
                      _this.animations.splice(_this.animations.indexOf(a), 1);
                    });
                    var machinesToRemove = this.stateMachines.filter(function(m) {
                      return animatables.includes(m.name);
                    });
                    machinesToRemove.forEach(function(m) {
                      m.cleanup();
                      _this.stateMachines.splice(_this.stateMachines.indexOf(m), 1);
                    });
                    removedNames = animationsToRemove.map(function(a) {
                      return a.name;
                    }).concat(machinesToRemove.map(function(m) {
                      return m.name;
                    }));
                  }
                  this.eventManager.fire({
                    type: EventType.Stop,
                    data: removedNames
                  });
                  return removedNames;
                };
                Object.defineProperty(Animator2.prototype, "isPlaying", {
                  /**
                   * Returns true if at least one animation is active
                   */
                  get: function() {
                    return this.animations.reduce(function(acc, curr) {
                      return acc || curr.playing;
                    }, false) || this.stateMachines.reduce(function(acc, curr) {
                      return acc || curr.playing;
                    }, false);
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Animator2.prototype, "isPaused", {
                  /**
                   * Returns true if all animations are paused and there's at least one animation
                   */
                  get: function() {
                    return !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0);
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Animator2.prototype, "isStopped", {
                  /**
                   * Returns true if there are no playing or paused animations/state machines
                   */
                  get: function() {
                    return this.animations.length === 0 && this.stateMachines.length === 0;
                  },
                  enumerable: false,
                  configurable: true
                });
                Animator2.prototype.atLeastOne = function(playing, fireEvent) {
                  if (fireEvent === void 0) {
                    fireEvent = true;
                  }
                  var instancedName;
                  if (this.animations.length === 0 && this.stateMachines.length === 0) {
                    if (this.artboard.animationCount() > 0) {
                      this.add([instancedName = this.artboard.animationByIndex(0).name], playing, fireEvent);
                    } else if (this.artboard.stateMachineCount() > 0) {
                      this.add([instancedName = this.artboard.stateMachineByIndex(0).name], playing, fireEvent);
                    }
                  }
                  return instancedName;
                };
                Animator2.prototype.handleLooping = function() {
                  for (var _i = 0, _a = this.animations.filter(function(a) {
                    return a.playing;
                  }); _i < _a.length; _i++) {
                    var animation = _a[_i];
                    if (animation.loopValue === 0 && animation.loopCount) {
                      animation.loopCount = 0;
                      this.stop(animation.name);
                    } else if (animation.loopValue === 1 && animation.loopCount) {
                      this.eventManager.fire({
                        type: EventType.Loop,
                        data: { animation: animation.name, type: LoopType.Loop }
                      });
                      animation.loopCount = 0;
                    } else if (animation.loopValue === 2 && animation.loopCount > 1) {
                      this.eventManager.fire({
                        type: EventType.Loop,
                        data: { animation: animation.name, type: LoopType.PingPong }
                      });
                      animation.loopCount = 0;
                    }
                  }
                };
                Animator2.prototype.handleStateChanges = function() {
                  var statesChanged = [];
                  for (var _i = 0, _a = this.stateMachines.filter(function(sm) {
                    return sm.playing;
                  }); _i < _a.length; _i++) {
                    var stateMachine = _a[_i];
                    statesChanged.push.apply(statesChanged, stateMachine.statesChanged);
                  }
                  if (statesChanged.length > 0) {
                    this.eventManager.fire({
                      type: EventType.StateChange,
                      data: statesChanged
                    });
                  }
                };
                Animator2.prototype.handleAdvancing = function(time) {
                  this.eventManager.fire({
                    type: EventType.Advance,
                    data: time
                  });
                };
                return Animator2;
              })()
            );
            var EventType;
            (function(EventType2) {
              EventType2["Load"] = "load";
              EventType2["LoadError"] = "loaderror";
              EventType2["Play"] = "play";
              EventType2["Pause"] = "pause";
              EventType2["Stop"] = "stop";
              EventType2["Loop"] = "loop";
              EventType2["Draw"] = "draw";
              EventType2["Advance"] = "advance";
              EventType2["StateChange"] = "statechange";
              EventType2["RiveEvent"] = "riveevent";
              EventType2["AudioStatusChange"] = "audiostatuschange";
            })(EventType || (EventType = {}));
            var LoopType;
            (function(LoopType2) {
              LoopType2["OneShot"] = "oneshot";
              LoopType2["Loop"] = "loop";
              LoopType2["PingPong"] = "pingpong";
            })(LoopType || (LoopType = {}));
            var EventManager = (
              /** @class */
              (function() {
                function EventManager2(listeners) {
                  if (listeners === void 0) {
                    listeners = [];
                  }
                  this.listeners = listeners;
                }
                EventManager2.prototype.getListeners = function(type) {
                  return this.listeners.filter(function(e) {
                    return e.type === type;
                  });
                };
                EventManager2.prototype.add = function(listener) {
                  if (!this.listeners.includes(listener)) {
                    this.listeners.push(listener);
                  }
                };
                EventManager2.prototype.remove = function(listener) {
                  for (var i = 0; i < this.listeners.length; i++) {
                    var currentListener = this.listeners[i];
                    if (currentListener.type === listener.type) {
                      if (currentListener.callback === listener.callback) {
                        this.listeners.splice(i, 1);
                        break;
                      }
                    }
                  }
                };
                EventManager2.prototype.removeAll = function(type) {
                  var _this = this;
                  if (!type) {
                    this.listeners.splice(0, this.listeners.length);
                  } else {
                    this.listeners.filter(function(l) {
                      return l.type === type;
                    }).forEach(function(l) {
                      return _this.remove(l);
                    });
                  }
                };
                EventManager2.prototype.fire = function(event) {
                  var eventListeners = this.getListeners(event.type);
                  eventListeners.forEach(function(listener) {
                    return listener.callback(event);
                  });
                };
                return EventManager2;
              })()
            );
            var TaskQueueManager = (
              /** @class */
              (function() {
                function TaskQueueManager2(eventManager) {
                  this.eventManager = eventManager;
                  this.queue = [];
                }
                TaskQueueManager2.prototype.add = function(task) {
                  this.queue.push(task);
                };
                TaskQueueManager2.prototype.process = function() {
                  while (this.queue.length > 0) {
                    var task = this.queue.shift();
                    if (task === null || task === void 0 ? void 0 : task.action) {
                      task.action();
                    }
                    if (task === null || task === void 0 ? void 0 : task.event) {
                      this.eventManager.fire(task.event);
                    }
                  }
                };
                return TaskQueueManager2;
              })()
            );
            var SystemAudioStatus;
            (function(SystemAudioStatus2) {
              SystemAudioStatus2[SystemAudioStatus2["AVAILABLE"] = 0] = "AVAILABLE";
              SystemAudioStatus2[SystemAudioStatus2["UNAVAILABLE"] = 1] = "UNAVAILABLE";
            })(SystemAudioStatus || (SystemAudioStatus = {}));
            var AudioManager = (
              /** @class */
              (function(_super) {
                __extends(AudioManager2, _super);
                function AudioManager2() {
                  var _this = _super !== null && _super.apply(this, arguments) || this;
                  _this._started = false;
                  _this._enabled = false;
                  _this._status = SystemAudioStatus.UNAVAILABLE;
                  return _this;
                }
                AudioManager2.prototype.delay = function(time) {
                  return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                      return [2, new Promise(function(resolve) {
                        return setTimeout(resolve, time);
                      })];
                    });
                  });
                };
                AudioManager2.prototype.timeout = function() {
                  return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                      return [2, new Promise(function(_, reject) {
                        return setTimeout(reject, 50);
                      })];
                    });
                  });
                };
                AudioManager2.prototype.reportToListeners = function() {
                  this.fire({ type: EventType.AudioStatusChange });
                  this.removeAll();
                };
                AudioManager2.prototype.enableAudio = function() {
                  return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                      if (!this._enabled) {
                        this._enabled = true;
                        this._status = SystemAudioStatus.AVAILABLE;
                        this.reportToListeners();
                      }
                      return [
                        2
                        /*return*/
                      ];
                    });
                  });
                };
                AudioManager2.prototype.testAudio = function() {
                  return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_b) {
                      switch (_b.label) {
                        case 0:
                          if (!(this._status === SystemAudioStatus.UNAVAILABLE && this._audioContext !== null)) return [3, 4];
                          _b.label = 1;
                        case 1:
                          _b.trys.push([1, 3, , 4]);
                          return [4, Promise.race([this._audioContext.resume(), this.timeout()])];
                        case 2:
                          _b.sent();
                          this.enableAudio();
                          return [3, 4];
                        case 3:
                          _b.sent();
                          return [3, 4];
                        case 4:
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                };
                AudioManager2.prototype._establishAudio = function() {
                  return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                      switch (_a.label) {
                        case 0:
                          if (!!this._started) return [3, 5];
                          this._started = true;
                          if (!(typeof window == "undefined")) return [3, 1];
                          this.enableAudio();
                          return [3, 5];
                        case 1:
                          this._audioContext = new AudioContext();
                          this.listenForUserAction();
                          _a.label = 2;
                        case 2:
                          if (!(this._status === SystemAudioStatus.UNAVAILABLE)) return [3, 5];
                          return [4, this.testAudio()];
                        case 3:
                          _a.sent();
                          return [4, this.delay(1e3)];
                        case 4:
                          _a.sent();
                          return [3, 2];
                        case 5:
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                };
                AudioManager2.prototype.listenForUserAction = function() {
                  var _this = this;
                  var _clickListener = function() {
                    return __awaiter(_this, void 0, void 0, function() {
                      return __generator(this, function(_a) {
                        this.enableAudio();
                        return [
                          2
                          /*return*/
                        ];
                      });
                    });
                  };
                  document.addEventListener("pointerdown", _clickListener, {
                    once: true
                  });
                };
                AudioManager2.prototype.establishAudio = function() {
                  return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                      this._establishAudio();
                      return [
                        2
                        /*return*/
                      ];
                    });
                  });
                };
                Object.defineProperty(AudioManager2.prototype, "systemVolume", {
                  get: function() {
                    if (this._status === SystemAudioStatus.UNAVAILABLE) {
                      this.testAudio();
                      return 0;
                    }
                    return 1;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(AudioManager2.prototype, "status", {
                  get: function() {
                    return this._status;
                  },
                  enumerable: false,
                  configurable: true
                });
                return AudioManager2;
              })(EventManager)
            );
            var audioManager = new AudioManager();
            var FakeResizeObserver = (
              /** @class */
              (function() {
                function FakeResizeObserver2() {
                }
                FakeResizeObserver2.prototype.observe = function() {
                };
                FakeResizeObserver2.prototype.unobserve = function() {
                };
                FakeResizeObserver2.prototype.disconnect = function() {
                };
                return FakeResizeObserver2;
              })()
            );
            var MyResizeObserver = globalThis.ResizeObserver || FakeResizeObserver;
            var ObjectObservers = (
              /** @class */
              (function() {
                function ObjectObservers2() {
                  var _this = this;
                  this._elementsMap = /* @__PURE__ */ new Map();
                  this._onObservedEntry = function(entry) {
                    var observed = _this._elementsMap.get(entry.target);
                    if (observed !== null) {
                      observed.onResize(entry.target.clientWidth == 0 || entry.target.clientHeight == 0);
                    } else {
                      _this._resizeObserver.unobserve(entry.target);
                    }
                  };
                  this._onObserved = function(entries) {
                    entries.forEach(_this._onObservedEntry);
                  };
                  this._resizeObserver = new MyResizeObserver(this._onObserved);
                }
                ObjectObservers2.prototype.add = function(element, onResize) {
                  var observed = {
                    onResize,
                    element
                  };
                  this._elementsMap.set(element, observed);
                  this._resizeObserver.observe(element);
                  return observed;
                };
                ObjectObservers2.prototype.remove = function(observed) {
                  this._resizeObserver.unobserve(observed.element);
                  this._elementsMap.delete(observed.element);
                };
                return ObjectObservers2;
              })()
            );
            var observers = new ObjectObservers();
            var RiveFile = (
              /** @class */
              (function() {
                function RiveFile2(params) {
                  this.enableRiveAssetCDN = true;
                  this.referenceCount = 0;
                  this.destroyed = false;
                  this.selfUnref = false;
                  this.bindableArtboards = [];
                  this.src = params.src;
                  this.buffer = params.buffer;
                  if (params.assetLoader)
                    this.assetLoader = params.assetLoader;
                  this.enableRiveAssetCDN = typeof params.enableRiveAssetCDN == "boolean" ? params.enableRiveAssetCDN : true;
                  this.eventManager = new EventManager();
                  if (params.onLoad)
                    this.on(EventType.Load, params.onLoad);
                  if (params.onLoadError)
                    this.on(EventType.LoadError, params.onLoadError);
                }
                RiveFile2.prototype.releaseFile = function() {
                  var _a;
                  if (this.selfUnref) {
                    (_a = this.file) === null || _a === void 0 ? void 0 : _a.unref();
                  }
                  this.file = null;
                };
                RiveFile2.prototype.releaseBindableArtboards = function() {
                  this.bindableArtboards.forEach(function(bindableArtboard) {
                    return bindableArtboard.destroy();
                  });
                };
                RiveFile2.prototype.initData = function() {
                  return __awaiter(this, void 0, void 0, function() {
                    var _a, loader, loaderWrapper, _b, fileFinalizer;
                    return __generator(this, function(_c) {
                      switch (_c.label) {
                        case 0:
                          if (!this.src) return [3, 2];
                          _a = this;
                          return [4, loadRiveFile(this.src)];
                        case 1:
                          _a.buffer = _c.sent();
                          _c.label = 2;
                        case 2:
                          if (this.destroyed) {
                            return [
                              2
                              /*return*/
                            ];
                          }
                          if (this.assetLoader) {
                            loaderWrapper = new _utils__WEBPACK_IMPORTED_MODULE_3__.CustomFileAssetLoaderWrapper(this.runtime, this.assetLoader);
                            loader = loaderWrapper.assetLoader;
                          }
                          _b = this;
                          return [4, this.runtime.load(new Uint8Array(this.buffer), loader, this.enableRiveAssetCDN)];
                        case 3:
                          _b.file = _c.sent();
                          fileFinalizer = new _utils__WEBPACK_IMPORTED_MODULE_3__.FileFinalizer(this.file);
                          _utils__WEBPACK_IMPORTED_MODULE_3__.finalizationRegistry.register(this, fileFinalizer);
                          if (this.destroyed) {
                            this.releaseFile();
                            return [
                              2
                              /*return*/
                            ];
                          }
                          if (this.file !== null) {
                            this.eventManager.fire({
                              type: EventType.Load,
                              data: this
                            });
                          } else {
                            this.fireLoadError(RiveFile2.fileLoadErrorMessage);
                          }
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                };
                RiveFile2.prototype.init = function() {
                  return __awaiter(this, void 0, void 0, function() {
                    var _a, error_1;
                    return __generator(this, function(_b) {
                      switch (_b.label) {
                        case 0:
                          if (!this.src && !this.buffer) {
                            this.fireLoadError(RiveFile2.missingErrorMessage);
                            return [
                              2
                              /*return*/
                            ];
                          }
                          _b.label = 1;
                        case 1:
                          _b.trys.push([1, 4, , 5]);
                          _a = this;
                          return [4, RuntimeLoader.awaitInstance()];
                        case 2:
                          _a.runtime = _b.sent();
                          if (this.destroyed) {
                            return [
                              2
                              /*return*/
                            ];
                          }
                          return [4, this.initData()];
                        case 3:
                          _b.sent();
                          return [3, 5];
                        case 4:
                          error_1 = _b.sent();
                          this.fireLoadError(error_1 instanceof Error ? error_1.message : RiveFile2.fileLoadErrorMessage);
                          return [3, 5];
                        case 5:
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                };
                RiveFile2.prototype.fireLoadError = function(message) {
                  this.eventManager.fire({
                    type: EventType.LoadError,
                    data: message
                  });
                  throw new Error(message);
                };
                RiveFile2.prototype.on = function(type, callback) {
                  this.eventManager.add({
                    type,
                    callback
                  });
                };
                RiveFile2.prototype.off = function(type, callback) {
                  this.eventManager.remove({
                    type,
                    callback
                  });
                };
                RiveFile2.prototype.cleanup = function() {
                  this.referenceCount -= 1;
                  if (this.referenceCount <= 0) {
                    this.removeAllRiveEventListeners();
                    this.releaseFile();
                    this.releaseBindableArtboards();
                    this.destroyed = true;
                  }
                };
                RiveFile2.prototype.removeAllRiveEventListeners = function(type) {
                  this.eventManager.removeAll(type);
                };
                RiveFile2.prototype.getInstance = function() {
                  if (this.file !== null) {
                    this.referenceCount += 1;
                    return this.file;
                  }
                };
                RiveFile2.prototype.destroyIfUnused = function() {
                  if (this.referenceCount <= 0) {
                    this.cleanup();
                  }
                };
                RiveFile2.prototype.createBindableArtboard = function(nativeBindableArtboard) {
                  if (nativeBindableArtboard != null) {
                    var bindableArtboard = new BindableArtboard(nativeBindableArtboard);
                    (0, _utils__WEBPACK_IMPORTED_MODULE_3__.createFinalization)(bindableArtboard, bindableArtboard.nativeArtboard);
                    this.bindableArtboards.push(bindableArtboard);
                    return bindableArtboard;
                  }
                  return null;
                };
                RiveFile2.prototype.getArtboard = function(name) {
                  var nativeArtboard = this.file.artboardByName(name);
                  if (nativeArtboard != null) {
                    return new Artboard(nativeArtboard, this);
                  }
                };
                RiveFile2.prototype.getBindableArtboard = function(name) {
                  var nativeArtboard = this.file.bindableArtboardByName(name);
                  return this.createBindableArtboard(nativeArtboard);
                };
                RiveFile2.prototype.getDefaultBindableArtboard = function() {
                  var nativeArtboard = this.file.bindableArtboardDefault();
                  return this.createBindableArtboard(nativeArtboard);
                };
                RiveFile2.prototype.internalBindableArtboardFromArtboard = function(artboard) {
                  var nativeBindableArtboard = this.file.internalBindableArtboardFromArtboard(artboard);
                  return this.createBindableArtboard(nativeBindableArtboard);
                };
                RiveFile2.prototype.viewModelByName = function(name) {
                  var viewModel = this.file.viewModelByName(name);
                  if (viewModel !== null) {
                    return new ViewModel(viewModel);
                  }
                  return null;
                };
                RiveFile2.missingErrorMessage = "Rive source file or data buffer required";
                RiveFile2.fileLoadErrorMessage = "The file failed to load";
                return RiveFile2;
              })()
            );
            var Rive = (
              /** @class */
              (function() {
                function Rive2(params) {
                  var _this = this;
                  var _a, _b;
                  this.loaded = false;
                  this.destroyed = false;
                  this._observed = null;
                  this.readyForPlaying = false;
                  this.artboard = null;
                  this.eventCleanup = null;
                  this.shouldDisableRiveListeners = false;
                  this.automaticallyHandleEvents = false;
                  this.dispatchPointerExit = true;
                  this.enableMultiTouch = false;
                  this.enableRiveAssetCDN = true;
                  this._volume = 1;
                  this._artboardWidth = void 0;
                  this._artboardHeight = void 0;
                  this._devicePixelRatioUsed = 1;
                  this._hasZeroSize = false;
                  this._needsRedraw = false;
                  this._currentCanvasWidth = 0;
                  this._currentCanvasHeight = 0;
                  this._audioEventListener = null;
                  this._boundDraw = null;
                  this._viewModelInstance = null;
                  this._dataEnums = null;
                  this.drawOptimization = DrawOptimizationOptions.DrawOnChanged;
                  this.durations = [];
                  this.frameTimes = [];
                  this.frameCount = 0;
                  this.isTouchScrollEnabled = false;
                  this.onCanvasResize = function(hasZeroSize) {
                    var toggledDisplay = _this._hasZeroSize !== hasZeroSize;
                    _this._hasZeroSize = hasZeroSize;
                    if (!hasZeroSize) {
                      if (toggledDisplay) {
                        _this.resizeDrawingSurfaceToCanvas();
                      }
                    } else if (!_this._layout.maxX || !_this._layout.maxY) {
                      _this.resizeToCanvas();
                    }
                  };
                  this.renderSecondTimer = 0;
                  this._boundDraw = this.draw.bind(this);
                  this.canvas = params.canvas;
                  if (params.canvas.constructor === HTMLCanvasElement) {
                    this._observed = observers.add(this.canvas, this.onCanvasResize);
                  }
                  this._currentCanvasWidth = this.canvas.width;
                  this._currentCanvasHeight = this.canvas.height;
                  this.src = params.src;
                  this.buffer = params.buffer;
                  this.riveFile = params.riveFile;
                  this.layout = (_a = params.layout) !== null && _a !== void 0 ? _a : new Layout();
                  this.shouldDisableRiveListeners = !!params.shouldDisableRiveListeners;
                  this.isTouchScrollEnabled = !!params.isTouchScrollEnabled;
                  this.automaticallyHandleEvents = !!params.automaticallyHandleEvents;
                  this.dispatchPointerExit = params.dispatchPointerExit === false ? params.dispatchPointerExit : this.dispatchPointerExit;
                  this.enableMultiTouch = !!params.enableMultiTouch;
                  this.drawOptimization = (_b = params.drawingOptions) !== null && _b !== void 0 ? _b : this.drawOptimization;
                  this.enableRiveAssetCDN = params.enableRiveAssetCDN === void 0 ? true : params.enableRiveAssetCDN;
                  this.eventManager = new EventManager();
                  if (params.onLoad)
                    this.on(EventType.Load, params.onLoad);
                  if (params.onLoadError)
                    this.on(EventType.LoadError, params.onLoadError);
                  if (params.onPlay)
                    this.on(EventType.Play, params.onPlay);
                  if (params.onPause)
                    this.on(EventType.Pause, params.onPause);
                  if (params.onStop)
                    this.on(EventType.Stop, params.onStop);
                  if (params.onLoop)
                    this.on(EventType.Loop, params.onLoop);
                  if (params.onStateChange)
                    this.on(EventType.StateChange, params.onStateChange);
                  if (params.onAdvance)
                    this.on(EventType.Advance, params.onAdvance);
                  if (params.onload && !params.onLoad)
                    this.on(EventType.Load, params.onload);
                  if (params.onloaderror && !params.onLoadError)
                    this.on(EventType.LoadError, params.onloaderror);
                  if (params.onplay && !params.onPlay)
                    this.on(EventType.Play, params.onplay);
                  if (params.onpause && !params.onPause)
                    this.on(EventType.Pause, params.onpause);
                  if (params.onstop && !params.onStop)
                    this.on(EventType.Stop, params.onstop);
                  if (params.onloop && !params.onLoop)
                    this.on(EventType.Loop, params.onloop);
                  if (params.onstatechange && !params.onStateChange)
                    this.on(EventType.StateChange, params.onstatechange);
                  if (params.assetLoader)
                    this.assetLoader = params.assetLoader;
                  this.taskQueue = new TaskQueueManager(this.eventManager);
                  this.init({
                    src: this.src,
                    buffer: this.buffer,
                    riveFile: this.riveFile,
                    autoplay: params.autoplay,
                    autoBind: params.autoBind,
                    animations: params.animations,
                    stateMachines: params.stateMachines,
                    artboard: params.artboard,
                    useOffscreenRenderer: params.useOffscreenRenderer
                  });
                }
                Object.defineProperty(Rive2.prototype, "viewModelCount", {
                  get: function() {
                    return this.file.viewModelCount();
                  },
                  enumerable: false,
                  configurable: true
                });
                Rive2.new = function(params) {
                  console.warn("This function is deprecated: please use `new Rive({})` instead");
                  return new Rive2(params);
                };
                Rive2.prototype.onSystemAudioChanged = function() {
                  this.volume = this._volume;
                };
                Rive2.prototype.init = function(_a) {
                  var _this = this;
                  var src = _a.src, buffer = _a.buffer, riveFile = _a.riveFile, animations = _a.animations, stateMachines = _a.stateMachines, artboard = _a.artboard, _b = _a.autoplay, autoplay = _b === void 0 ? false : _b, _c = _a.useOffscreenRenderer, useOffscreenRenderer = _c === void 0 ? false : _c, _d = _a.autoBind, autoBind = _d === void 0 ? false : _d;
                  if (this.destroyed) {
                    return;
                  }
                  this.src = src;
                  this.buffer = buffer;
                  this.riveFile = riveFile;
                  if (!this.src && !this.buffer && !this.riveFile) {
                    throw new RiveError(Rive2.missingErrorMessage);
                  }
                  var startingAnimationNames = mapToStringArray(animations);
                  var startingStateMachineNames = mapToStringArray(stateMachines);
                  this.loaded = false;
                  this.readyForPlaying = false;
                  RuntimeLoader.awaitInstance().then(function(runtime) {
                    if (_this.destroyed) {
                      return;
                    }
                    _this.runtime = runtime;
                    _this.removeRiveListeners();
                    _this.deleteRiveRenderer();
                    _this.renderer = _this.runtime.makeRenderer(_this.canvas, useOffscreenRenderer);
                    if (!(_this.canvas.width || _this.canvas.height)) {
                      _this.resizeDrawingSurfaceToCanvas();
                    }
                    _this.initData(artboard, startingAnimationNames, startingStateMachineNames, autoplay, autoBind).then(function(hasInitialized) {
                      if (hasInitialized) {
                        return _this.setupRiveListeners();
                      }
                    }).catch(function(e) {
                      console.error(e);
                    });
                  }).catch(function(e) {
                    console.error(e);
                  });
                };
                Rive2.prototype.setupRiveListeners = function(riveListenerOptions) {
                  var _this = this;
                  if (this.eventCleanup) {
                    this.eventCleanup();
                  }
                  if (!this.shouldDisableRiveListeners) {
                    var activeStateMachines = (this.animator.stateMachines || []).filter(function(sm) {
                      return sm.playing && _this.runtime.hasListeners(sm.instance);
                    }).map(function(sm) {
                      return sm.instance;
                    });
                    var touchScrollEnabledOption = this.isTouchScrollEnabled;
                    var dispatchPointerExit = this.dispatchPointerExit;
                    var enableMultiTouch = this.enableMultiTouch;
                    if (riveListenerOptions && "isTouchScrollEnabled" in riveListenerOptions) {
                      touchScrollEnabledOption = riveListenerOptions.isTouchScrollEnabled;
                    }
                    this.eventCleanup = (0, _utils__WEBPACK_IMPORTED_MODULE_3__.registerTouchInteractions)({
                      canvas: this.canvas,
                      artboard: this.artboard,
                      stateMachines: activeStateMachines,
                      renderer: this.renderer,
                      rive: this.runtime,
                      fit: this._layout.runtimeFit(this.runtime),
                      alignment: this._layout.runtimeAlignment(this.runtime),
                      isTouchScrollEnabled: touchScrollEnabledOption,
                      dispatchPointerExit,
                      enableMultiTouch,
                      layoutScaleFactor: this._layout.layoutScaleFactor
                    });
                  }
                };
                Rive2.prototype.removeRiveListeners = function() {
                  if (this.eventCleanup) {
                    this.eventCleanup();
                    this.eventCleanup = null;
                  }
                };
                Rive2.prototype.initializeAudio = function() {
                  var _this = this;
                  var _a;
                  if (audioManager.status == SystemAudioStatus.UNAVAILABLE) {
                    if (this.file.hasAudio || ((_a = this.artboard) === null || _a === void 0 ? void 0 : _a.hasAudio) && this._audioEventListener === null) {
                      this._audioEventListener = {
                        type: EventType.AudioStatusChange,
                        callback: function() {
                          return _this.onSystemAudioChanged();
                        }
                      };
                      audioManager.add(this._audioEventListener);
                      audioManager.establishAudio();
                    }
                  }
                };
                Rive2.prototype.initArtboardSize = function() {
                  if (!this.artboard)
                    return;
                  this._artboardWidth = this.artboard.width = this._artboardWidth || this.artboard.width;
                  this._artboardHeight = this.artboard.height = this._artboardHeight || this.artboard.height;
                };
                Rive2.prototype.initData = function(artboardName, animationNames, stateMachineNames, autoplay, autoBind) {
                  return __awaiter(this, void 0, void 0, function() {
                    var riveFile, error_2, msg;
                    var _a;
                    return __generator(this, function(_b) {
                      switch (_b.label) {
                        case 0:
                          _b.trys.push([0, 3, , 4]);
                          if (!(this.riveFile == null)) return [3, 2];
                          riveFile = new RiveFile({
                            src: this.src,
                            buffer: this.buffer,
                            enableRiveAssetCDN: this.enableRiveAssetCDN,
                            assetLoader: this.assetLoader
                          });
                          this.riveFile = riveFile;
                          return [4, riveFile.init()];
                        case 1:
                          _b.sent();
                          if (this.destroyed) {
                            riveFile.destroyIfUnused();
                            return [2, false];
                          }
                          _b.label = 2;
                        case 2:
                          this.file = this.riveFile.getInstance();
                          this.initArtboard(artboardName, animationNames, stateMachineNames, autoplay, autoBind);
                          this.initArtboardSize();
                          this.initializeAudio();
                          this.loaded = true;
                          this.eventManager.fire({
                            type: EventType.Load,
                            data: (_a = this.src) !== null && _a !== void 0 ? _a : "buffer"
                          });
                          this.animator.advanceIfPaused();
                          this.readyForPlaying = true;
                          this.taskQueue.process();
                          this.drawFrame();
                          return [2, true];
                        case 3:
                          error_2 = _b.sent();
                          msg = resolveErrorMessage(error_2);
                          console.warn(msg);
                          this.eventManager.fire({ type: EventType.LoadError, data: msg });
                          return [2, Promise.reject(msg)];
                        case 4:
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                };
                Rive2.prototype.initArtboard = function(artboardName, animationNames, stateMachineNames, autoplay, autoBind) {
                  if (!this.file) {
                    return;
                  }
                  var rootArtboard = artboardName ? this.file.artboardByName(artboardName) : this.file.defaultArtboard();
                  if (!rootArtboard) {
                    var msg = "Invalid artboard name or no default artboard";
                    console.warn(msg);
                    this.eventManager.fire({ type: EventType.LoadError, data: msg });
                    return;
                  }
                  this.artboard = rootArtboard;
                  rootArtboard.volume = this._volume * audioManager.systemVolume;
                  this.animator = new Animator(this.runtime, this.artboard, this.eventManager);
                  var instanceNames;
                  if (animationNames.length > 0 || stateMachineNames.length > 0) {
                    instanceNames = animationNames.concat(stateMachineNames);
                    this.animator.initLinearAnimations(animationNames, autoplay);
                    this.animator.initStateMachines(stateMachineNames, autoplay);
                  } else {
                    instanceNames = [this.animator.atLeastOne(autoplay, false)];
                  }
                  this.taskQueue.add({
                    event: {
                      type: autoplay ? EventType.Play : EventType.Pause,
                      data: instanceNames
                    }
                  });
                  if (autoBind) {
                    var viewModel = this.file.defaultArtboardViewModel(rootArtboard);
                    if (viewModel !== null) {
                      var runtimeInstance = viewModel.defaultInstance();
                      if (runtimeInstance !== null) {
                        var viewModelInstance = new ViewModelInstance(runtimeInstance, null);
                        (0, _utils__WEBPACK_IMPORTED_MODULE_3__.createFinalization)(viewModelInstance, viewModelInstance.runtimeInstance);
                        this.bindViewModelInstance(viewModelInstance);
                      }
                    }
                  }
                };
                Rive2.prototype.drawFrame = function() {
                  var _a, _b;
                  if ((_a = document === null || document === void 0 ? void 0 : document.timeline) === null || _a === void 0 ? void 0 : _a.currentTime) {
                    if (this.loaded && this.artboard && !this.frameRequestId) {
                      this._boundDraw(document.timeline.currentTime);
                      (_b = this.runtime) === null || _b === void 0 ? void 0 : _b.resolveAnimationFrame();
                    }
                  } else {
                    this.scheduleRendering();
                  }
                };
                Rive2.prototype._canvasSizeChanged = function() {
                  var changed = false;
                  if (this.canvas) {
                    if (this.canvas.width !== this._currentCanvasWidth) {
                      this._currentCanvasWidth = this.canvas.width;
                      changed = true;
                    }
                    if (this.canvas.height !== this._currentCanvasHeight) {
                      this._currentCanvasHeight = this.canvas.height;
                      changed = true;
                    }
                  }
                  return changed;
                };
                Rive2.prototype.draw = function(time, onSecond) {
                  var _a;
                  this.frameRequestId = null;
                  var before = performance.now();
                  if (!this.lastRenderTime) {
                    this.lastRenderTime = time;
                  }
                  this.renderSecondTimer += time - this.lastRenderTime;
                  if (this.renderSecondTimer > 5e3) {
                    this.renderSecondTimer = 0;
                    onSecond === null || onSecond === void 0 ? void 0 : onSecond();
                  }
                  var elapsedTime = (time - this.lastRenderTime) / 1e3;
                  this.lastRenderTime = time;
                  var activeAnimations = this.animator.animations.filter(function(a) {
                    return a.playing || a.needsScrub;
                  }).sort(function(first) {
                    return first.needsScrub ? -1 : 1;
                  });
                  for (var _i = 0, activeAnimations_1 = activeAnimations; _i < activeAnimations_1.length; _i++) {
                    var animation = activeAnimations_1[_i];
                    animation.advance(elapsedTime);
                    if (animation.instance.didLoop) {
                      animation.loopCount += 1;
                    }
                    animation.apply(1);
                  }
                  var activeStateMachines = this.animator.stateMachines.filter(function(a) {
                    return a.playing;
                  });
                  for (var _b = 0, activeStateMachines_1 = activeStateMachines; _b < activeStateMachines_1.length; _b++) {
                    var stateMachine = activeStateMachines_1[_b];
                    var numEventsReported = stateMachine.reportedEventCount();
                    if (numEventsReported) {
                      for (var i = 0; i < numEventsReported; i++) {
                        var event_1 = stateMachine.reportedEventAt(i);
                        if (event_1) {
                          if (event_1.type === RiveEventType.OpenUrl) {
                            this.eventManager.fire({
                              type: EventType.RiveEvent,
                              data: event_1
                            });
                            if (this.automaticallyHandleEvents) {
                              var newAnchorTag = document.createElement("a");
                              var _c = event_1, url = _c.url, target = _c.target;
                              var sanitizedUrl = (0, _utils__WEBPACK_IMPORTED_MODULE_3__.sanitizeUrl)(url);
                              url && newAnchorTag.setAttribute("href", sanitizedUrl);
                              target && newAnchorTag.setAttribute("target", target);
                              if (sanitizedUrl && sanitizedUrl !== _utils__WEBPACK_IMPORTED_MODULE_3__.BLANK_URL) {
                                newAnchorTag.click();
                              }
                            }
                          } else {
                            this.eventManager.fire({
                              type: EventType.RiveEvent,
                              data: event_1
                            });
                          }
                        }
                      }
                    }
                    stateMachine.advanceAndApply(elapsedTime);
                  }
                  if (this.animator.stateMachines.length == 0) {
                    this.artboard.advance(elapsedTime);
                  }
                  var renderer = this.renderer;
                  if (!this._hasZeroSize) {
                    if (this.drawOptimization == DrawOptimizationOptions.AlwaysDraw || this.artboard.didChange() || this._needsRedraw || this._canvasSizeChanged()) {
                      renderer.clear();
                      renderer.save();
                      this.alignRenderer();
                      this.artboard.draw(renderer);
                      renderer.restore();
                      renderer.flush();
                      this._needsRedraw = false;
                    }
                  }
                  this.animator.handleLooping();
                  this.animator.handleStateChanges();
                  this.animator.handleAdvancing(elapsedTime);
                  this.frameCount++;
                  var after = performance.now();
                  this.frameTimes.push(after);
                  this.durations.push(after - before);
                  while (this.frameTimes[0] <= after - 1e3) {
                    this.frameTimes.shift();
                    this.durations.shift();
                  }
                  (_a = this._viewModelInstance) === null || _a === void 0 ? void 0 : _a.handleCallbacks();
                  if (this.animator.isPlaying) {
                    this.scheduleRendering();
                  } else if (this.animator.isPaused) {
                    this.lastRenderTime = 0;
                  } else if (this.animator.isStopped) {
                    this.lastRenderTime = 0;
                  }
                };
                Rive2.prototype.alignRenderer = function() {
                  var _a = this, renderer = _a.renderer, runtime = _a.runtime, _layout = _a._layout, artboard = _a.artboard;
                  renderer.align(_layout.runtimeFit(runtime), _layout.runtimeAlignment(runtime), {
                    minX: _layout.minX,
                    minY: _layout.minY,
                    maxX: _layout.maxX,
                    maxY: _layout.maxY
                  }, artboard.bounds, this._devicePixelRatioUsed * _layout.layoutScaleFactor);
                };
                Object.defineProperty(Rive2.prototype, "fps", {
                  get: function() {
                    return this.durations.length;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "frameTime", {
                  get: function() {
                    if (this.durations.length === 0) {
                      return 0;
                    }
                    return (this.durations.reduce(function(a, b) {
                      return a + b;
                    }, 0) / this.durations.length).toFixed(4);
                  },
                  enumerable: false,
                  configurable: true
                });
                Rive2.prototype.cleanup = function() {
                  var _a, _b;
                  this.destroyed = true;
                  this.stopRendering();
                  this.cleanupInstances();
                  if (this._observed !== null) {
                    observers.remove(this._observed);
                  }
                  this.removeRiveListeners();
                  if (this.file) {
                    (_a = this.riveFile) === null || _a === void 0 ? void 0 : _a.cleanup();
                    this.file = null;
                  }
                  this.riveFile = null;
                  this.deleteRiveRenderer();
                  if (this._audioEventListener !== null) {
                    audioManager.remove(this._audioEventListener);
                    this._audioEventListener = null;
                  }
                  (_b = this._viewModelInstance) === null || _b === void 0 ? void 0 : _b.cleanup();
                  this._viewModelInstance = null;
                  this._dataEnums = null;
                };
                Rive2.prototype.deleteRiveRenderer = function() {
                  var _a;
                  (_a = this.renderer) === null || _a === void 0 ? void 0 : _a.delete();
                  this.renderer = null;
                };
                Rive2.prototype.cleanupInstances = function() {
                  if (this.eventCleanup !== null) {
                    this.eventCleanup();
                  }
                  this.stop();
                  if (this.artboard) {
                    this.artboard.delete();
                    this.artboard = null;
                  }
                };
                Rive2.prototype.retrieveTextRun = function(textRunName) {
                  var _a;
                  if (!textRunName) {
                    console.warn("No text run name provided");
                    return;
                  }
                  if (!this.artboard) {
                    console.warn("Tried to access text run, but the Artboard is null");
                    return;
                  }
                  var textRun = this.artboard.textRun(textRunName);
                  if (!textRun) {
                    console.warn("Could not access a text run with name '".concat(textRunName, "' in the '").concat((_a = this.artboard) === null || _a === void 0 ? void 0 : _a.name, "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."));
                    return;
                  }
                  return textRun;
                };
                Rive2.prototype.getTextRunValue = function(textRunName) {
                  var textRun = this.retrieveTextRun(textRunName);
                  return textRun ? textRun.text : void 0;
                };
                Rive2.prototype.setTextRunValue = function(textRunName, textRunValue) {
                  var textRun = this.retrieveTextRun(textRunName);
                  if (textRun) {
                    textRun.text = textRunValue;
                  }
                };
                Rive2.prototype.play = function(animationNames, autoplay) {
                  var _this = this;
                  animationNames = mapToStringArray(animationNames);
                  if (!this.readyForPlaying) {
                    this.taskQueue.add({
                      action: function() {
                        return _this.play(animationNames, autoplay);
                      }
                    });
                    return;
                  }
                  this.animator.play(animationNames);
                  if (this.eventCleanup) {
                    this.eventCleanup();
                  }
                  this.setupRiveListeners();
                  this.startRendering();
                };
                Rive2.prototype.pause = function(animationNames) {
                  var _this = this;
                  animationNames = mapToStringArray(animationNames);
                  if (!this.readyForPlaying) {
                    this.taskQueue.add({
                      action: function() {
                        return _this.pause(animationNames);
                      }
                    });
                    return;
                  }
                  if (this.eventCleanup) {
                    this.eventCleanup();
                  }
                  this.animator.pause(animationNames);
                };
                Rive2.prototype.scrub = function(animationNames, value) {
                  var _this = this;
                  animationNames = mapToStringArray(animationNames);
                  if (!this.readyForPlaying) {
                    this.taskQueue.add({
                      action: function() {
                        return _this.scrub(animationNames, value);
                      }
                    });
                    return;
                  }
                  this.animator.scrub(animationNames, value || 0);
                  this.drawFrame();
                };
                Rive2.prototype.stop = function(animationNames) {
                  var _this = this;
                  animationNames = mapToStringArray(animationNames);
                  if (!this.readyForPlaying) {
                    this.taskQueue.add({
                      action: function() {
                        return _this.stop(animationNames);
                      }
                    });
                    return;
                  }
                  if (this.animator) {
                    this.animator.stop(animationNames);
                  }
                  if (this.eventCleanup) {
                    this.eventCleanup();
                  }
                };
                Rive2.prototype.reset = function(params) {
                  var _a, _b;
                  var artBoardName = params === null || params === void 0 ? void 0 : params.artboard;
                  var animationNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.animations);
                  var stateMachineNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.stateMachines);
                  var autoplay = (_a = params === null || params === void 0 ? void 0 : params.autoplay) !== null && _a !== void 0 ? _a : false;
                  var autoBind = (_b = params === null || params === void 0 ? void 0 : params.autoBind) !== null && _b !== void 0 ? _b : false;
                  this.cleanupInstances();
                  this.initArtboard(artBoardName, animationNames, stateMachineNames, autoplay, autoBind);
                  this.taskQueue.process();
                };
                Rive2.prototype.load = function(params) {
                  this.file = null;
                  this.stop();
                  this.init(params);
                };
                Object.defineProperty(Rive2.prototype, "layout", {
                  /**
                   * Returns the current layout. Note that layout should be treated as
                   * immutable. If you want to change the layout, create a new one use the
                   * layout setter
                   */
                  get: function() {
                    return this._layout;
                  },
                  // Sets a new layout
                  set: function(layout) {
                    this._layout = layout;
                    if (!layout.maxX || !layout.maxY) {
                      this.resizeToCanvas();
                    }
                    if (this.loaded && !this.animator.isPlaying) {
                      this.drawFrame();
                    }
                  },
                  enumerable: false,
                  configurable: true
                });
                Rive2.prototype.resizeToCanvas = function() {
                  this._layout = this.layout.copyWith({
                    minX: 0,
                    minY: 0,
                    maxX: this.canvas.width,
                    maxY: this.canvas.height
                  });
                };
                Rive2.prototype.resizeDrawingSurfaceToCanvas = function(customDevicePixelRatio) {
                  if (this.canvas instanceof HTMLCanvasElement && !!window) {
                    var _a = this.canvas.getBoundingClientRect(), width = _a.width, height = _a.height;
                    var dpr = customDevicePixelRatio || window.devicePixelRatio || 1;
                    this.devicePixelRatioUsed = dpr;
                    this.canvas.width = dpr * width;
                    this.canvas.height = dpr * height;
                    this._needsRedraw = true;
                    this.resizeToCanvas();
                    this.drawFrame();
                    if (this.layout.fit === Fit.Layout) {
                      var scaleFactor = this._layout.layoutScaleFactor;
                      this.artboard.width = width / scaleFactor;
                      this.artboard.height = height / scaleFactor;
                    }
                  }
                };
                Object.defineProperty(Rive2.prototype, "source", {
                  // Returns the animation source, which may be undefined
                  get: function() {
                    return this.src;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "activeArtboard", {
                  /**
                   * Returns the name of the active artboard
                   */
                  get: function() {
                    return this.artboard ? this.artboard.name : "";
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "animationNames", {
                  // Returns a list of animation names on the chosen artboard
                  get: function() {
                    if (!this.loaded || !this.artboard) {
                      return [];
                    }
                    var animationNames = [];
                    for (var i = 0; i < this.artboard.animationCount(); i++) {
                      animationNames.push(this.artboard.animationByIndex(i).name);
                    }
                    return animationNames;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "stateMachineNames", {
                  /**
                   * Returns a list of state machine names from the current artboard
                   */
                  get: function() {
                    if (!this.loaded || !this.artboard) {
                      return [];
                    }
                    var stateMachineNames = [];
                    for (var i = 0; i < this.artboard.stateMachineCount(); i++) {
                      stateMachineNames.push(this.artboard.stateMachineByIndex(i).name);
                    }
                    return stateMachineNames;
                  },
                  enumerable: false,
                  configurable: true
                });
                Rive2.prototype.stateMachineInputs = function(name) {
                  if (!this.loaded) {
                    return;
                  }
                  var stateMachine = this.animator.stateMachines.find(function(m) {
                    return m.name === name;
                  });
                  return stateMachine === null || stateMachine === void 0 ? void 0 : stateMachine.inputs;
                };
                Rive2.prototype.retrieveInputAtPath = function(name, path) {
                  if (!name) {
                    console.warn("No input name provided for path '".concat(path, "'"));
                    return;
                  }
                  if (!this.artboard) {
                    console.warn("Tried to access input: '".concat(name, "', at path: '").concat(path, "', but the Artboard is null"));
                    return;
                  }
                  var input = this.artboard.inputByPath(name, path);
                  if (!input) {
                    console.warn("Could not access an input with name: '".concat(name, "', at path:'").concat(path, "'"));
                    return;
                  }
                  return input;
                };
                Rive2.prototype.setBooleanStateAtPath = function(inputName, value, path) {
                  var input = this.retrieveInputAtPath(inputName, path);
                  if (!input)
                    return;
                  if (input.type === StateMachineInputType.Boolean) {
                    input.asBool().value = value;
                  } else {
                    console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a boolean"));
                  }
                };
                Rive2.prototype.setNumberStateAtPath = function(inputName, value, path) {
                  var input = this.retrieveInputAtPath(inputName, path);
                  if (!input)
                    return;
                  if (input.type === StateMachineInputType.Number) {
                    input.asNumber().value = value;
                  } else {
                    console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a number"));
                  }
                };
                Rive2.prototype.fireStateAtPath = function(inputName, path) {
                  var input = this.retrieveInputAtPath(inputName, path);
                  if (!input)
                    return;
                  if (input.type === StateMachineInputType.Trigger) {
                    input.asTrigger().fire();
                  } else {
                    console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a trigger"));
                  }
                };
                Rive2.prototype.retrieveTextAtPath = function(name, path) {
                  if (!name) {
                    console.warn("No text name provided for path '".concat(path, "'"));
                    return;
                  }
                  if (!path) {
                    console.warn("No path provided for text '".concat(name, "'"));
                    return;
                  }
                  if (!this.artboard) {
                    console.warn("Tried to access text: '".concat(name, "', at path: '").concat(path, "', but the Artboard is null"));
                    return;
                  }
                  var text = this.artboard.textByPath(name, path);
                  if (!text) {
                    console.warn("Could not access text with name: '".concat(name, "', at path:'").concat(path, "'"));
                    return;
                  }
                  return text;
                };
                Rive2.prototype.getTextRunValueAtPath = function(textName, path) {
                  var run = this.retrieveTextAtPath(textName, path);
                  if (!run) {
                    console.warn("Could not get text with name: '".concat(textName, "', at path:'").concat(path, "'"));
                    return;
                  }
                  return run.text;
                };
                Rive2.prototype.setTextRunValueAtPath = function(textName, value, path) {
                  var run = this.retrieveTextAtPath(textName, path);
                  if (!run) {
                    console.warn("Could not set text with name: '".concat(textName, "', at path:'").concat(path, "'"));
                    return;
                  }
                  run.text = value;
                };
                Object.defineProperty(Rive2.prototype, "playingStateMachineNames", {
                  // Returns a list of playing machine names
                  get: function() {
                    if (!this.loaded) {
                      return [];
                    }
                    return this.animator.stateMachines.filter(function(m) {
                      return m.playing;
                    }).map(function(m) {
                      return m.name;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "playingAnimationNames", {
                  // Returns a list of playing animation names
                  get: function() {
                    if (!this.loaded) {
                      return [];
                    }
                    return this.animator.animations.filter(function(a) {
                      return a.playing;
                    }).map(function(a) {
                      return a.name;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "pausedAnimationNames", {
                  // Returns a list of paused animation names
                  get: function() {
                    if (!this.loaded) {
                      return [];
                    }
                    return this.animator.animations.filter(function(a) {
                      return !a.playing;
                    }).map(function(a) {
                      return a.name;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "pausedStateMachineNames", {
                  /**
                   *  Returns a list of paused machine names
                   * @returns a list of state machine names that are paused
                   */
                  get: function() {
                    if (!this.loaded) {
                      return [];
                    }
                    return this.animator.stateMachines.filter(function(m) {
                      return !m.playing;
                    }).map(function(m) {
                      return m.name;
                    });
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "isPlaying", {
                  /**
                   * @returns true if any animation is playing
                   */
                  get: function() {
                    return this.animator.isPlaying;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "isPaused", {
                  /**
                   * @returns true if all instanced animations are paused
                   */
                  get: function() {
                    return this.animator.isPaused;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "isStopped", {
                  /**
                   * @returns true if no animations are playing or paused
                   */
                  get: function() {
                    var _a, _b;
                    return (_b = (_a = this.animator) === null || _a === void 0 ? void 0 : _a.isStopped) !== null && _b !== void 0 ? _b : true;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "bounds", {
                  /**
                   * @returns the bounds of the current artboard, or undefined if the artboard
                   * isn't loaded yet.
                   */
                  get: function() {
                    return this.artboard ? this.artboard.bounds : void 0;
                  },
                  enumerable: false,
                  configurable: true
                });
                Rive2.prototype.on = function(type, callback) {
                  this.eventManager.add({
                    type,
                    callback
                  });
                };
                Rive2.prototype.off = function(type, callback) {
                  this.eventManager.remove({
                    type,
                    callback
                  });
                };
                Rive2.prototype.unsubscribe = function(type, callback) {
                  console.warn("This function is deprecated: please use `off()` instead.");
                  this.off(type, callback);
                };
                Rive2.prototype.removeAllRiveEventListeners = function(type) {
                  this.eventManager.removeAll(type);
                };
                Rive2.prototype.unsubscribeAll = function(type) {
                  console.warn("This function is deprecated: please use `removeAllRiveEventListeners()` instead.");
                  this.removeAllRiveEventListeners(type);
                };
                Rive2.prototype.stopRendering = function() {
                  if (this.loaded && this.frameRequestId) {
                    if (this.runtime.cancelAnimationFrame) {
                      this.runtime.cancelAnimationFrame(this.frameRequestId);
                    } else {
                      cancelAnimationFrame(this.frameRequestId);
                    }
                    this.frameRequestId = null;
                  }
                };
                Rive2.prototype.startRendering = function() {
                  this.drawFrame();
                };
                Rive2.prototype.scheduleRendering = function() {
                  if (this.loaded && this.artboard && !this.frameRequestId) {
                    if (this.runtime.requestAnimationFrame) {
                      this.frameRequestId = this.runtime.requestAnimationFrame(this._boundDraw);
                    } else {
                      this.frameRequestId = requestAnimationFrame(this._boundDraw);
                    }
                  }
                };
                Rive2.prototype.enableFPSCounter = function(fpsCallback) {
                  this.runtime.enableFPSCounter(fpsCallback);
                };
                Rive2.prototype.disableFPSCounter = function() {
                  this.runtime.disableFPSCounter();
                };
                Object.defineProperty(Rive2.prototype, "contents", {
                  /**
                   * Returns the contents of a Rive file: the artboards, animations, and state machines
                   */
                  get: function() {
                    if (!this.loaded) {
                      return void 0;
                    }
                    var riveContents = {
                      artboards: []
                    };
                    for (var i = 0; i < this.file.artboardCount(); i++) {
                      var artboard = this.file.artboardByIndex(i);
                      var artboardContents = {
                        name: artboard.name,
                        animations: [],
                        stateMachines: []
                      };
                      for (var j = 0; j < artboard.animationCount(); j++) {
                        var animation = artboard.animationByIndex(j);
                        artboardContents.animations.push(animation.name);
                      }
                      for (var k = 0; k < artboard.stateMachineCount(); k++) {
                        var stateMachine = artboard.stateMachineByIndex(k);
                        var name_1 = stateMachine.name;
                        var instance = new this.runtime.StateMachineInstance(stateMachine, artboard);
                        var inputContents = [];
                        for (var l = 0; l < instance.inputCount(); l++) {
                          var input = instance.input(l);
                          inputContents.push({ name: input.name, type: input.type });
                        }
                        artboardContents.stateMachines.push({
                          name: name_1,
                          inputs: inputContents
                        });
                      }
                      riveContents.artboards.push(artboardContents);
                    }
                    return riveContents;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "volume", {
                  /**
                   * Getter / Setter for the volume of the artboard
                   */
                  get: function() {
                    if (this.artboard && this.artboard.volume !== this._volume) {
                      this._volume = this.artboard.volume;
                    }
                    return this._volume;
                  },
                  set: function(value) {
                    this._volume = value;
                    if (this.artboard) {
                      this.artboard.volume = value * audioManager.systemVolume;
                    }
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "artboardWidth", {
                  /**
                   * The width of the artboard.
                   *
                   * This will return 0 if the artboard is not loaded yet and a custom
                   * width has not been set.
                   *
                   * Do not set this value manually when using {@link resizeDrawingSurfaceToCanvas}
                   * with a {@link Layout.fit} of {@link Fit.Layout}, as the artboard width is
                   * automatically set.
                   */
                  get: function() {
                    var _a;
                    if (this.artboard) {
                      return this.artboard.width;
                    }
                    return (_a = this._artboardWidth) !== null && _a !== void 0 ? _a : 0;
                  },
                  set: function(value) {
                    this._artboardWidth = value;
                    if (this.artboard) {
                      this.artboard.width = value;
                    }
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(Rive2.prototype, "artboardHeight", {
                  /**
                   * The height of the artboard.
                   *
                   * This will return 0 if the artboard is not loaded yet and a custom
                   * height has not been set.
                   *
                   * Do not set this value manually when using {@link resizeDrawingSurfaceToCanvas}
                   * with a {@link Layout.fit} of {@link Fit.Layout}, as the artboard height is
                   * automatically set.
                   */
                  get: function() {
                    var _a;
                    if (this.artboard) {
                      return this.artboard.height;
                    }
                    return (_a = this._artboardHeight) !== null && _a !== void 0 ? _a : 0;
                  },
                  set: function(value) {
                    this._artboardHeight = value;
                    if (this.artboard) {
                      this.artboard.height = value;
                    }
                  },
                  enumerable: false,
                  configurable: true
                });
                Rive2.prototype.resetArtboardSize = function() {
                  if (this.artboard) {
                    this.artboard.resetArtboardSize();
                    this._artboardWidth = this.artboard.width;
                    this._artboardHeight = this.artboard.height;
                  } else {
                    this._artboardWidth = void 0;
                    this._artboardHeight = void 0;
                  }
                };
                Object.defineProperty(Rive2.prototype, "devicePixelRatioUsed", {
                  /**
                   * The device pixel ratio used in rendering and canvas/artboard resizing.
                   *
                   * This value will be overidden by the device pixel ratio used in
                   * {@link resizeDrawingSurfaceToCanvas}. If you use that method, do not set this value.
                   */
                  get: function() {
                    return this._devicePixelRatioUsed;
                  },
                  set: function(value) {
                    this._devicePixelRatioUsed = value;
                  },
                  enumerable: false,
                  configurable: true
                });
                Rive2.prototype.bindViewModelInstance = function(viewModelInstance) {
                  var _a;
                  if (this.artboard && !this.destroyed) {
                    if (viewModelInstance && viewModelInstance.runtimeInstance) {
                      viewModelInstance.internalIncrementReferenceCount();
                      (_a = this._viewModelInstance) === null || _a === void 0 ? void 0 : _a.cleanup();
                      this._viewModelInstance = viewModelInstance;
                      if (this.animator.stateMachines.length > 0) {
                        this.animator.stateMachines.forEach(function(stateMachine) {
                          return stateMachine.bindViewModelInstance(viewModelInstance);
                        });
                      } else {
                        this.artboard.bindViewModelInstance(viewModelInstance.runtimeInstance);
                      }
                    }
                  }
                };
                Object.defineProperty(Rive2.prototype, "viewModelInstance", {
                  get: function() {
                    return this._viewModelInstance;
                  },
                  enumerable: false,
                  configurable: true
                });
                Rive2.prototype.viewModelByIndex = function(index) {
                  var viewModel = this.file.viewModelByIndex(index);
                  if (viewModel !== null) {
                    return new ViewModel(viewModel);
                  }
                  return null;
                };
                Rive2.prototype.viewModelByName = function(name) {
                  var _a;
                  return (_a = this.riveFile) === null || _a === void 0 ? void 0 : _a.viewModelByName(name);
                };
                Rive2.prototype.enums = function() {
                  if (this._dataEnums === null) {
                    var dataEnums = this.file.enums();
                    this._dataEnums = dataEnums.map(function(dataEnum) {
                      return new DataEnum(dataEnum);
                    });
                  }
                  return this._dataEnums;
                };
                Rive2.prototype.defaultViewModel = function() {
                  if (this.artboard) {
                    var viewModel = this.file.defaultArtboardViewModel(this.artboard);
                    if (viewModel) {
                      return new ViewModel(viewModel);
                    }
                  }
                  return null;
                };
                Rive2.prototype.getArtboard = function(name) {
                  var _a, _b;
                  return (_b = (_a = this.riveFile) === null || _a === void 0 ? void 0 : _a.getArtboard(name)) !== null && _b !== void 0 ? _b : null;
                };
                Rive2.prototype.getBindableArtboard = function(name) {
                  var _a, _b;
                  return (_b = (_a = this.riveFile) === null || _a === void 0 ? void 0 : _a.getBindableArtboard(name)) !== null && _b !== void 0 ? _b : null;
                };
                Rive2.prototype.getDefaultBindableArtboard = function() {
                  var _a, _b;
                  return (_b = (_a = this.riveFile) === null || _a === void 0 ? void 0 : _a.getDefaultBindableArtboard()) !== null && _b !== void 0 ? _b : null;
                };
                Rive2.missingErrorMessage = "Rive source file or data buffer required";
                Rive2.cleanupErrorMessage = "Attempt to use file after calling cleanup.";
                return Rive2;
              })()
            );
            var DataType;
            (function(DataType2) {
              DataType2["none"] = "none";
              DataType2["string"] = "string";
              DataType2["number"] = "number";
              DataType2["boolean"] = "boolean";
              DataType2["color"] = "color";
              DataType2["list"] = "list";
              DataType2["enumType"] = "enumType";
              DataType2["trigger"] = "trigger";
              DataType2["viewModel"] = "viewModel";
              DataType2["integer"] = "integer";
              DataType2["listIndex"] = "listIndex";
              DataType2["image"] = "image";
              DataType2["artboard"] = "artboard";
            })(DataType || (DataType = {}));
            var ViewModel = (
              /** @class */
              (function() {
                function ViewModel2(viewModel) {
                  this._viewModel = viewModel;
                }
                Object.defineProperty(ViewModel2.prototype, "instanceCount", {
                  get: function() {
                    return this._viewModel.instanceCount;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(ViewModel2.prototype, "name", {
                  get: function() {
                    return this._viewModel.name;
                  },
                  enumerable: false,
                  configurable: true
                });
                ViewModel2.prototype.instanceByIndex = function(index) {
                  var instance = this._viewModel.instanceByIndex(index);
                  if (instance !== null) {
                    var viewModelInstance = new ViewModelInstance(instance, null);
                    (0, _utils__WEBPACK_IMPORTED_MODULE_3__.createFinalization)(viewModelInstance, instance);
                    return viewModelInstance;
                  }
                  return null;
                };
                ViewModel2.prototype.instanceByName = function(name) {
                  var instance = this._viewModel.instanceByName(name);
                  if (instance !== null) {
                    var viewModelInstance = new ViewModelInstance(instance, null);
                    (0, _utils__WEBPACK_IMPORTED_MODULE_3__.createFinalization)(viewModelInstance, instance);
                    return viewModelInstance;
                  }
                  return null;
                };
                ViewModel2.prototype.defaultInstance = function() {
                  var runtimeInstance = this._viewModel.defaultInstance();
                  if (runtimeInstance !== null) {
                    var viewModelInstance = new ViewModelInstance(runtimeInstance, null);
                    (0, _utils__WEBPACK_IMPORTED_MODULE_3__.createFinalization)(viewModelInstance, runtimeInstance);
                    return viewModelInstance;
                  }
                  return null;
                };
                ViewModel2.prototype.instance = function() {
                  var runtimeInstance = this._viewModel.instance();
                  if (runtimeInstance !== null) {
                    var viewModelInstance = new ViewModelInstance(runtimeInstance, null);
                    (0, _utils__WEBPACK_IMPORTED_MODULE_3__.createFinalization)(viewModelInstance, runtimeInstance);
                    return viewModelInstance;
                  }
                  return null;
                };
                Object.defineProperty(ViewModel2.prototype, "properties", {
                  get: function() {
                    return this._viewModel.getProperties();
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(ViewModel2.prototype, "instanceNames", {
                  get: function() {
                    return this._viewModel.getInstanceNames();
                  },
                  enumerable: false,
                  configurable: true
                });
                return ViewModel2;
              })()
            );
            var DataEnum = (
              /** @class */
              (function() {
                function DataEnum2(dataEnum) {
                  this._dataEnum = dataEnum;
                }
                Object.defineProperty(DataEnum2.prototype, "name", {
                  get: function() {
                    return this._dataEnum.name;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(DataEnum2.prototype, "values", {
                  get: function() {
                    return this._dataEnum.values;
                  },
                  enumerable: false,
                  configurable: true
                });
                return DataEnum2;
              })()
            );
            var PropertyType;
            (function(PropertyType2) {
              PropertyType2["Number"] = "number";
              PropertyType2["String"] = "string";
              PropertyType2["Boolean"] = "boolean";
              PropertyType2["Color"] = "color";
              PropertyType2["Trigger"] = "trigger";
              PropertyType2["Enum"] = "enum";
              PropertyType2["List"] = "list";
              PropertyType2["Image"] = "image";
              PropertyType2["Artboard"] = "artboard";
            })(PropertyType || (PropertyType = {}));
            var ViewModelInstance = (
              /** @class */
              (function() {
                function ViewModelInstance2(runtimeInstance, parent) {
                  this._parents = [];
                  this._children = [];
                  this._viewModelInstances = /* @__PURE__ */ new Map();
                  this._propertiesWithCallbacks = [];
                  this._referenceCount = 0;
                  this.selfUnref = false;
                  this._runtimeInstance = runtimeInstance;
                  if (parent !== null) {
                    this._parents.push(parent);
                  }
                }
                Object.defineProperty(ViewModelInstance2.prototype, "runtimeInstance", {
                  get: function() {
                    return this._runtimeInstance;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(ViewModelInstance2.prototype, "nativeInstance", {
                  get: function() {
                    return this._runtimeInstance;
                  },
                  enumerable: false,
                  configurable: true
                });
                ViewModelInstance2.prototype.handleCallbacks = function() {
                  if (this._propertiesWithCallbacks.length !== 0) {
                    this._propertiesWithCallbacks.forEach(function(property) {
                      property.handleCallbacks();
                    });
                    this._propertiesWithCallbacks.forEach(function(property) {
                      property.clearChanges();
                    });
                  }
                  this._children.forEach(function(child) {
                    return child.handleCallbacks();
                  });
                };
                ViewModelInstance2.prototype.addParent = function(parent) {
                  if (!this._parents.includes(parent)) {
                    this._parents.push(parent);
                    if (this._propertiesWithCallbacks.length > 0 || this._children.length > 0) {
                      parent.addToViewModelCallbacks(this);
                    }
                  }
                };
                ViewModelInstance2.prototype.removeParent = function(parent) {
                  var index = this._parents.indexOf(parent);
                  if (index !== -1) {
                    var parent_1 = this._parents[index];
                    parent_1.removeFromViewModelCallbacks(this);
                    this._parents.splice(index, 1);
                  }
                };
                ViewModelInstance2.prototype.addToPropertyCallbacks = function(property) {
                  var _this = this;
                  if (!this._propertiesWithCallbacks.includes(property)) {
                    this._propertiesWithCallbacks.push(property);
                    if (this._propertiesWithCallbacks.length > 0) {
                      this._parents.forEach(function(parent) {
                        parent.addToViewModelCallbacks(_this);
                      });
                    }
                  }
                };
                ViewModelInstance2.prototype.removeFromPropertyCallbacks = function(property) {
                  var _this = this;
                  if (this._propertiesWithCallbacks.includes(property)) {
                    this._propertiesWithCallbacks = this._propertiesWithCallbacks.filter(function(prop) {
                      return prop !== property;
                    });
                    if (this._children.length === 0 && this._propertiesWithCallbacks.length === 0) {
                      this._parents.forEach(function(parent) {
                        parent.removeFromViewModelCallbacks(_this);
                      });
                    }
                  }
                };
                ViewModelInstance2.prototype.addToViewModelCallbacks = function(instance) {
                  var _this = this;
                  if (!this._children.includes(instance)) {
                    this._children.push(instance);
                    this._parents.forEach(function(parent) {
                      parent.addToViewModelCallbacks(_this);
                    });
                  }
                };
                ViewModelInstance2.prototype.removeFromViewModelCallbacks = function(instance) {
                  var _this = this;
                  if (this._children.includes(instance)) {
                    this._children = this._children.filter(function(child) {
                      return child !== instance;
                    });
                    if (this._children.length === 0 && this._propertiesWithCallbacks.length === 0) {
                      this._parents.forEach(function(parent) {
                        parent.removeFromViewModelCallbacks(_this);
                      });
                    }
                  }
                };
                ViewModelInstance2.prototype.clearCallbacks = function() {
                  this._propertiesWithCallbacks.forEach(function(property) {
                    property.clearCallbacks();
                  });
                };
                ViewModelInstance2.prototype.propertyFromPath = function(path, type) {
                  var pathSegments = path.split("/");
                  return this.propertyFromPathSegments(pathSegments, 0, type);
                };
                ViewModelInstance2.prototype.viewModelFromPathSegments = function(pathSegments, index) {
                  var viewModelInstance = this.internalViewModelInstance(pathSegments[index]);
                  if (viewModelInstance !== null) {
                    if (index == pathSegments.length - 1) {
                      return viewModelInstance;
                    } else {
                      return viewModelInstance.viewModelFromPathSegments(pathSegments, index++);
                    }
                  }
                  return null;
                };
                ViewModelInstance2.prototype.propertyFromPathSegments = function(pathSegments, index, type) {
                  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
                  if (index < pathSegments.length - 1) {
                    var viewModelInstance = this.internalViewModelInstance(pathSegments[index]);
                    if (viewModelInstance !== null) {
                      return viewModelInstance.propertyFromPathSegments(pathSegments, index + 1, type);
                    } else {
                      return null;
                    }
                  }
                  var instance = null;
                  switch (type) {
                    case PropertyType.Number:
                      instance = (_b = (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.number(pathSegments[index])) !== null && _b !== void 0 ? _b : null;
                      if (instance !== null) {
                        return new ViewModelInstanceNumber(instance, this);
                      }
                      break;
                    case PropertyType.String:
                      instance = (_d = (_c = this._runtimeInstance) === null || _c === void 0 ? void 0 : _c.string(pathSegments[index])) !== null && _d !== void 0 ? _d : null;
                      if (instance !== null) {
                        return new ViewModelInstanceString(instance, this);
                      }
                      break;
                    case PropertyType.Boolean:
                      instance = (_f = (_e = this._runtimeInstance) === null || _e === void 0 ? void 0 : _e.boolean(pathSegments[index])) !== null && _f !== void 0 ? _f : null;
                      if (instance !== null) {
                        return new ViewModelInstanceBoolean(instance, this);
                      }
                      break;
                    case PropertyType.Color:
                      instance = (_h = (_g = this._runtimeInstance) === null || _g === void 0 ? void 0 : _g.color(pathSegments[index])) !== null && _h !== void 0 ? _h : null;
                      if (instance !== null) {
                        return new ViewModelInstanceColor(instance, this);
                      }
                      break;
                    case PropertyType.Trigger:
                      instance = (_k = (_j = this._runtimeInstance) === null || _j === void 0 ? void 0 : _j.trigger(pathSegments[index])) !== null && _k !== void 0 ? _k : null;
                      if (instance !== null) {
                        return new ViewModelInstanceTrigger(instance, this);
                      }
                      break;
                    case PropertyType.Enum:
                      instance = (_m = (_l = this._runtimeInstance) === null || _l === void 0 ? void 0 : _l.enum(pathSegments[index])) !== null && _m !== void 0 ? _m : null;
                      if (instance !== null) {
                        return new ViewModelInstanceEnum(instance, this);
                      }
                      break;
                    case PropertyType.List:
                      instance = (_p = (_o = this._runtimeInstance) === null || _o === void 0 ? void 0 : _o.list(pathSegments[index])) !== null && _p !== void 0 ? _p : null;
                      if (instance !== null) {
                        return new ViewModelInstanceList(instance, this);
                      }
                      break;
                    case PropertyType.Image:
                      instance = (_r = (_q = this._runtimeInstance) === null || _q === void 0 ? void 0 : _q.image(pathSegments[index])) !== null && _r !== void 0 ? _r : null;
                      if (instance !== null) {
                        return new ViewModelInstanceAssetImage(instance, this);
                      }
                      break;
                    case PropertyType.Artboard:
                      instance = (_t = (_s = this._runtimeInstance) === null || _s === void 0 ? void 0 : _s.artboard(pathSegments[index])) !== null && _t !== void 0 ? _t : null;
                      if (instance !== null) {
                        return new ViewModelInstanceArtboard(instance, this);
                      }
                      break;
                  }
                  return null;
                };
                ViewModelInstance2.prototype.internalViewModelInstance = function(name) {
                  var _a;
                  if (this._viewModelInstances.has(name)) {
                    return this._viewModelInstances.get(name);
                  }
                  var viewModelRuntimeInstance = (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.viewModel(name);
                  if (viewModelRuntimeInstance !== null) {
                    var viewModelInstance = new ViewModelInstance2(viewModelRuntimeInstance, this);
                    (0, _utils__WEBPACK_IMPORTED_MODULE_3__.createFinalization)(viewModelInstance, viewModelRuntimeInstance);
                    viewModelInstance.internalIncrementReferenceCount();
                    this._viewModelInstances.set(name, viewModelInstance);
                    return viewModelInstance;
                  }
                  return null;
                };
                ViewModelInstance2.prototype.number = function(path) {
                  var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.Number);
                  return viewmodelInstanceValue;
                };
                ViewModelInstance2.prototype.string = function(path) {
                  var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.String);
                  return viewmodelInstanceValue;
                };
                ViewModelInstance2.prototype.boolean = function(path) {
                  var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.Boolean);
                  return viewmodelInstanceValue;
                };
                ViewModelInstance2.prototype.color = function(path) {
                  var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.Color);
                  return viewmodelInstanceValue;
                };
                ViewModelInstance2.prototype.trigger = function(path) {
                  var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.Trigger);
                  return viewmodelInstanceValue;
                };
                ViewModelInstance2.prototype.enum = function(path) {
                  var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.Enum);
                  return viewmodelInstanceValue;
                };
                ViewModelInstance2.prototype.list = function(path) {
                  var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.List);
                  return viewmodelInstanceValue;
                };
                ViewModelInstance2.prototype.image = function(path) {
                  var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.Image);
                  return viewmodelInstanceValue;
                };
                ViewModelInstance2.prototype.artboard = function(path) {
                  var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.Artboard);
                  return viewmodelInstanceValue;
                };
                ViewModelInstance2.prototype.viewModel = function(path) {
                  var pathSegments = path.split("/");
                  var parentViewModelInstance = pathSegments.length > 1 ? this.viewModelFromPathSegments(pathSegments.slice(0, pathSegments.length - 1), 0) : this;
                  if (parentViewModelInstance != null) {
                    return parentViewModelInstance.internalViewModelInstance(pathSegments[pathSegments.length - 1]);
                  }
                  return null;
                };
                ViewModelInstance2.prototype.internalReplaceViewModel = function(name, value) {
                  var _a;
                  if (value.runtimeInstance !== null) {
                    var result = ((_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.replaceViewModel(name, value.runtimeInstance)) || false;
                    if (result) {
                      value.internalIncrementReferenceCount();
                      var oldInstance_1 = this.internalViewModelInstance(name);
                      if (oldInstance_1 !== null) {
                        oldInstance_1.removeParent(this);
                        if (this._children.includes(oldInstance_1)) {
                          this._children = this._children.filter(function(child) {
                            return child !== oldInstance_1;
                          });
                        }
                        oldInstance_1.cleanup();
                      }
                      this._viewModelInstances.set(name, value);
                      value.addParent(this);
                    }
                    return result;
                  }
                  return false;
                };
                ViewModelInstance2.prototype.replaceViewModel = function(path, value) {
                  var _a;
                  var pathSegments = path.split("/");
                  var viewModelInstance = pathSegments.length > 1 ? this.viewModelFromPathSegments(pathSegments.slice(0, pathSegments.length - 1), 0) : this;
                  return (_a = viewModelInstance === null || viewModelInstance === void 0 ? void 0 : viewModelInstance.internalReplaceViewModel(pathSegments[pathSegments.length - 1], value)) !== null && _a !== void 0 ? _a : false;
                };
                ViewModelInstance2.prototype.incrementReferenceCount = function() {
                  var _a;
                  this._referenceCount++;
                  (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.incrementReferenceCount();
                };
                ViewModelInstance2.prototype.decrementReferenceCount = function() {
                  var _a;
                  this._referenceCount--;
                  (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.decrementReferenceCount();
                };
                Object.defineProperty(ViewModelInstance2.prototype, "properties", {
                  get: function() {
                    var _a;
                    return ((_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.getProperties().map(function(prop) {
                      return __assign({}, prop);
                    })) || [];
                  },
                  enumerable: false,
                  configurable: true
                });
                ViewModelInstance2.prototype.internalIncrementReferenceCount = function() {
                  this._referenceCount++;
                };
                ViewModelInstance2.prototype.cleanup = function() {
                  var _this = this;
                  var _a;
                  this._referenceCount--;
                  if (this._referenceCount <= 0) {
                    if (this.selfUnref) {
                      (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.unref();
                    }
                    this._runtimeInstance = null;
                    this.clearCallbacks();
                    this._propertiesWithCallbacks = [];
                    this._viewModelInstances.forEach(function(value) {
                      value.cleanup();
                    });
                    this._viewModelInstances.clear();
                    var children = __spreadArray([], this._children, true);
                    this._children.length = 0;
                    var parents = __spreadArray([], this._parents, true);
                    this._parents.length = 0;
                    children.forEach(function(child) {
                      child.removeParent(_this);
                    });
                    parents.forEach(function(parent) {
                      parent.removeFromViewModelCallbacks(_this);
                    });
                  }
                };
                return ViewModelInstance2;
              })()
            );
            var ViewModelInstanceValue = (
              /** @class */
              (function() {
                function ViewModelInstanceValue2(instance, parent) {
                  this.callbacks = [];
                  this._viewModelInstanceValue = instance;
                  this._parentViewModel = parent;
                }
                ViewModelInstanceValue2.prototype.on = function(callback) {
                  if (this.callbacks.length === 0) {
                    this._viewModelInstanceValue.clearChanges();
                  }
                  if (!this.callbacks.includes(callback)) {
                    this.callbacks.push(callback);
                    this._parentViewModel.addToPropertyCallbacks(this);
                  }
                };
                ViewModelInstanceValue2.prototype.off = function(callback) {
                  if (!callback) {
                    this.callbacks.length = 0;
                  } else {
                    this.callbacks = this.callbacks.filter(function(cb) {
                      return cb !== callback;
                    });
                  }
                  if (this.callbacks.length === 0) {
                    this._parentViewModel.removeFromPropertyCallbacks(this);
                  }
                };
                ViewModelInstanceValue2.prototype.internalHandleCallback = function(callback) {
                };
                ViewModelInstanceValue2.prototype.handleCallbacks = function() {
                  var _this = this;
                  if (this._viewModelInstanceValue.hasChanged) {
                    this.callbacks.forEach(function(callback) {
                      _this.internalHandleCallback(callback);
                    });
                  }
                };
                ViewModelInstanceValue2.prototype.clearChanges = function() {
                  this._viewModelInstanceValue.clearChanges();
                };
                ViewModelInstanceValue2.prototype.clearCallbacks = function() {
                  this.callbacks.length = 0;
                };
                Object.defineProperty(ViewModelInstanceValue2.prototype, "name", {
                  get: function() {
                    return this._viewModelInstanceValue.name;
                  },
                  enumerable: false,
                  configurable: true
                });
                return ViewModelInstanceValue2;
              })()
            );
            var ViewModelInstanceString = (
              /** @class */
              (function(_super) {
                __extends(ViewModelInstanceString2, _super);
                function ViewModelInstanceString2(instance, parent) {
                  return _super.call(this, instance, parent) || this;
                }
                Object.defineProperty(ViewModelInstanceString2.prototype, "value", {
                  get: function() {
                    return this._viewModelInstanceValue.value;
                  },
                  set: function(val) {
                    this._viewModelInstanceValue.value = val;
                  },
                  enumerable: false,
                  configurable: true
                });
                ViewModelInstanceString2.prototype.internalHandleCallback = function(callback) {
                  callback(this.value);
                };
                return ViewModelInstanceString2;
              })(ViewModelInstanceValue)
            );
            var ViewModelInstanceNumber = (
              /** @class */
              (function(_super) {
                __extends(ViewModelInstanceNumber2, _super);
                function ViewModelInstanceNumber2(instance, parent) {
                  return _super.call(this, instance, parent) || this;
                }
                Object.defineProperty(ViewModelInstanceNumber2.prototype, "value", {
                  get: function() {
                    return this._viewModelInstanceValue.value;
                  },
                  set: function(val) {
                    this._viewModelInstanceValue.value = val;
                  },
                  enumerable: false,
                  configurable: true
                });
                ViewModelInstanceNumber2.prototype.internalHandleCallback = function(callback) {
                  callback(this.value);
                };
                return ViewModelInstanceNumber2;
              })(ViewModelInstanceValue)
            );
            var ViewModelInstanceBoolean = (
              /** @class */
              (function(_super) {
                __extends(ViewModelInstanceBoolean2, _super);
                function ViewModelInstanceBoolean2(instance, parent) {
                  return _super.call(this, instance, parent) || this;
                }
                Object.defineProperty(ViewModelInstanceBoolean2.prototype, "value", {
                  get: function() {
                    return this._viewModelInstanceValue.value;
                  },
                  set: function(val) {
                    this._viewModelInstanceValue.value = val;
                  },
                  enumerable: false,
                  configurable: true
                });
                ViewModelInstanceBoolean2.prototype.internalHandleCallback = function(callback) {
                  callback(this.value);
                };
                return ViewModelInstanceBoolean2;
              })(ViewModelInstanceValue)
            );
            var ViewModelInstanceTrigger = (
              /** @class */
              (function(_super) {
                __extends(ViewModelInstanceTrigger2, _super);
                function ViewModelInstanceTrigger2(instance, parent) {
                  return _super.call(this, instance, parent) || this;
                }
                ViewModelInstanceTrigger2.prototype.trigger = function() {
                  return this._viewModelInstanceValue.trigger();
                };
                ViewModelInstanceTrigger2.prototype.internalHandleCallback = function(callback) {
                  callback();
                };
                return ViewModelInstanceTrigger2;
              })(ViewModelInstanceValue)
            );
            var ViewModelInstanceEnum = (
              /** @class */
              (function(_super) {
                __extends(ViewModelInstanceEnum2, _super);
                function ViewModelInstanceEnum2(instance, parent) {
                  return _super.call(this, instance, parent) || this;
                }
                Object.defineProperty(ViewModelInstanceEnum2.prototype, "value", {
                  get: function() {
                    return this._viewModelInstanceValue.value;
                  },
                  set: function(val) {
                    this._viewModelInstanceValue.value = val;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(ViewModelInstanceEnum2.prototype, "valueIndex", {
                  get: function() {
                    return this._viewModelInstanceValue.valueIndex;
                  },
                  set: function(val) {
                    this._viewModelInstanceValue.valueIndex = val;
                  },
                  enumerable: false,
                  configurable: true
                });
                Object.defineProperty(ViewModelInstanceEnum2.prototype, "values", {
                  get: function() {
                    return this._viewModelInstanceValue.values;
                  },
                  enumerable: false,
                  configurable: true
                });
                ViewModelInstanceEnum2.prototype.internalHandleCallback = function(callback) {
                  callback(this.value);
                };
                return ViewModelInstanceEnum2;
              })(ViewModelInstanceValue)
            );
            var ViewModelInstanceList = (
              /** @class */
              (function(_super) {
                __extends(ViewModelInstanceList2, _super);
                function ViewModelInstanceList2(instance, parent) {
                  return _super.call(this, instance, parent) || this;
                }
                Object.defineProperty(ViewModelInstanceList2.prototype, "length", {
                  get: function() {
                    return this._viewModelInstanceValue.size;
                  },
                  enumerable: false,
                  configurable: true
                });
                ViewModelInstanceList2.prototype.addInstance = function(instance) {
                  if (instance.runtimeInstance != null) {
                    this._viewModelInstanceValue.addInstance(instance.runtimeInstance);
                    instance.addParent(this._parentViewModel);
                  }
                };
                ViewModelInstanceList2.prototype.addInstanceAt = function(instance, index) {
                  if (instance.runtimeInstance != null) {
                    if (this._viewModelInstanceValue.addInstanceAt(instance.runtimeInstance, index)) {
                      instance.addParent(this._parentViewModel);
                      return true;
                    }
                  }
                  return false;
                };
                ViewModelInstanceList2.prototype.removeInstance = function(instance) {
                  if (instance.runtimeInstance != null) {
                    this._viewModelInstanceValue.removeInstance(instance.runtimeInstance);
                    instance.removeParent(this._parentViewModel);
                  }
                };
                ViewModelInstanceList2.prototype.removeInstanceAt = function(index) {
                  this._viewModelInstanceValue.removeInstanceAt(index);
                };
                ViewModelInstanceList2.prototype.instanceAt = function(index) {
                  var runtimeInstance = this._viewModelInstanceValue.instanceAt(index);
                  if (runtimeInstance != null) {
                    var viewModelInstance = new ViewModelInstance(runtimeInstance, this._parentViewModel);
                    (0, _utils__WEBPACK_IMPORTED_MODULE_3__.createFinalization)(viewModelInstance, runtimeInstance);
                    return viewModelInstance;
                  }
                  return null;
                };
                ViewModelInstanceList2.prototype.swap = function(a, b) {
                  this._viewModelInstanceValue.swap(a, b);
                };
                ViewModelInstanceList2.prototype.internalHandleCallback = function(callback) {
                  callback();
                };
                return ViewModelInstanceList2;
              })(ViewModelInstanceValue)
            );
            var ViewModelInstanceColor = (
              /** @class */
              (function(_super) {
                __extends(ViewModelInstanceColor2, _super);
                function ViewModelInstanceColor2(instance, parent) {
                  return _super.call(this, instance, parent) || this;
                }
                Object.defineProperty(ViewModelInstanceColor2.prototype, "value", {
                  get: function() {
                    return this._viewModelInstanceValue.value;
                  },
                  set: function(val) {
                    this._viewModelInstanceValue.value = val;
                  },
                  enumerable: false,
                  configurable: true
                });
                ViewModelInstanceColor2.prototype.rgb = function(r, g, b) {
                  this._viewModelInstanceValue.rgb(r, g, b);
                };
                ViewModelInstanceColor2.prototype.rgba = function(r, g, b, a) {
                  this._viewModelInstanceValue.argb(a, r, g, b);
                };
                ViewModelInstanceColor2.prototype.argb = function(a, r, g, b) {
                  this._viewModelInstanceValue.argb(a, r, g, b);
                };
                ViewModelInstanceColor2.prototype.alpha = function(a) {
                  this._viewModelInstanceValue.alpha(a);
                };
                ViewModelInstanceColor2.prototype.opacity = function(o) {
                  this._viewModelInstanceValue.alpha(Math.round(Math.max(0, Math.min(1, o)) * 255));
                };
                ViewModelInstanceColor2.prototype.internalHandleCallback = function(callback) {
                  callback(this.value);
                };
                return ViewModelInstanceColor2;
              })(ViewModelInstanceValue)
            );
            var ViewModelInstanceAssetImage = (
              /** @class */
              (function(_super) {
                __extends(ViewModelInstanceAssetImage2, _super);
                function ViewModelInstanceAssetImage2(instance, root) {
                  return _super.call(this, instance, root) || this;
                }
                Object.defineProperty(ViewModelInstanceAssetImage2.prototype, "value", {
                  set: function(image) {
                    var _a;
                    this._viewModelInstanceValue.value((_a = image === null || image === void 0 ? void 0 : image.nativeImage) !== null && _a !== void 0 ? _a : null);
                  },
                  enumerable: false,
                  configurable: true
                });
                ViewModelInstanceAssetImage2.prototype.internalHandleCallback = function(callback) {
                  callback();
                };
                return ViewModelInstanceAssetImage2;
              })(ViewModelInstanceValue)
            );
            var ViewModelInstanceArtboard = (
              /** @class */
              (function(_super) {
                __extends(ViewModelInstanceArtboard2, _super);
                function ViewModelInstanceArtboard2(instance, root) {
                  return _super.call(this, instance, root) || this;
                }
                Object.defineProperty(ViewModelInstanceArtboard2.prototype, "value", {
                  set: function(artboard) {
                    var _a, _b;
                    var bindableArtboard;
                    if (artboard.isBindableArtboard) {
                      bindableArtboard = artboard;
                    } else {
                      bindableArtboard = artboard.file.internalBindableArtboardFromArtboard(artboard.nativeArtboard);
                    }
                    this._viewModelInstanceValue.value((_a = bindableArtboard === null || bindableArtboard === void 0 ? void 0 : bindableArtboard.nativeArtboard) !== null && _a !== void 0 ? _a : null);
                    if (bindableArtboard === null || bindableArtboard === void 0 ? void 0 : bindableArtboard.nativeViewModel) {
                      this._viewModelInstanceValue.viewModelInstance((_b = bindableArtboard === null || bindableArtboard === void 0 ? void 0 : bindableArtboard.nativeViewModel) !== null && _b !== void 0 ? _b : null);
                    }
                  },
                  enumerable: false,
                  configurable: true
                });
                ViewModelInstanceArtboard2.prototype.internalHandleCallback = function(callback) {
                  callback();
                };
                return ViewModelInstanceArtboard2;
              })(ViewModelInstanceValue)
            );
            var loadRiveFile = function(src) {
              return __awaiter(void 0, void 0, void 0, function() {
                var req, res, buffer;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      req = new Request(src);
                      return [4, fetch(req)];
                    case 1:
                      res = _a.sent();
                      return [4, res.arrayBuffer()];
                    case 2:
                      buffer = _a.sent();
                      return [2, buffer];
                  }
                });
              });
            };
            var mapToStringArray = function(obj) {
              if (typeof obj === "string") {
                return [obj];
              } else if (obj instanceof Array) {
                return obj;
              }
              return [];
            };
            var Testing = {
              EventManager,
              TaskQueueManager
            };
            var decodeAudio = function(bytes) {
              return __awaiter(void 0, void 0, void 0, function() {
                var decodedPromise, audio, audioWrapper;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      decodedPromise = new Promise(function(resolve) {
                        return RuntimeLoader.getInstance(function(rive2) {
                          rive2.decodeAudio(bytes, resolve);
                        });
                      });
                      return [4, decodedPromise];
                    case 1:
                      audio = _a.sent();
                      audioWrapper = new _utils__WEBPACK_IMPORTED_MODULE_3__.AudioWrapper(audio);
                      _utils__WEBPACK_IMPORTED_MODULE_3__.finalizationRegistry.register(audioWrapper, audio);
                      return [2, audioWrapper];
                  }
                });
              });
            };
            var decodeImage = function(bytes) {
              return __awaiter(void 0, void 0, void 0, function() {
                var decodedPromise, image, imageWrapper;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      decodedPromise = new Promise(function(resolve) {
                        return RuntimeLoader.getInstance(function(rive2) {
                          rive2.decodeImage(bytes, resolve);
                        });
                      });
                      return [4, decodedPromise];
                    case 1:
                      image = _a.sent();
                      imageWrapper = new _utils__WEBPACK_IMPORTED_MODULE_3__.ImageWrapper(image);
                      _utils__WEBPACK_IMPORTED_MODULE_3__.finalizationRegistry.register(imageWrapper, image);
                      return [2, imageWrapper];
                  }
                });
              });
            };
            var decodeFont = function(bytes) {
              return __awaiter(void 0, void 0, void 0, function() {
                var decodedPromise, font, fontWrapper;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      decodedPromise = new Promise(function(resolve) {
                        return RuntimeLoader.getInstance(function(rive2) {
                          rive2.decodeFont(bytes, resolve);
                        });
                      });
                      return [4, decodedPromise];
                    case 1:
                      font = _a.sent();
                      fontWrapper = new _utils__WEBPACK_IMPORTED_MODULE_3__.FontWrapper(font);
                      _utils__WEBPACK_IMPORTED_MODULE_3__.finalizationRegistry.register(fontWrapper, font);
                      return [2, fontWrapper];
                  }
                });
              });
            };
          })();
          return __webpack_exports__;
        })()
      );
    });
  })(rive$1);
  return rive$1.exports;
}
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  (function(exports$1) {
    Object.defineProperty(exports$1, "__esModule", { value: true });
    var observer, React2 = requireReact(), canvas = requireRive();
    function _interopDefaultLegacy(e) {
      return e && "object" == typeof e && "default" in e ? e : { default: e };
    }
    var React__default = /* @__PURE__ */ _interopDefaultLegacy(React2);
    function useDevicePixelRatio(e) {
      var t = e || getDevicePixelRatio(), n = React2.useState(t), a = n[0], r = n[1];
      return React2.useEffect(function() {
        if ("u" > typeof window && "matchMedia" in window) {
          var t2 = function() {
            r(e || getDevicePixelRatio());
          }, n2 = window.matchMedia("screen and (resolution: " + a + "dppx)");
          return n2.hasOwnProperty("addEventListener") ? n2.addEventListener("change", t2) : n2.addListener(t2), function() {
            n2.hasOwnProperty("removeEventListener") ? n2.removeEventListener("change", t2) : n2.removeListener(t2);
          };
        }
      }, [a, e]), a;
    }
    function getDevicePixelRatio() {
      return Math.min(Math.max(1, "u" > typeof window && "number" == typeof window.devicePixelRatio ? window.devicePixelRatio : 1), 3);
    }
    var FakeResizeObserver = /* @__PURE__ */ (function() {
      function e() {
      }
      var t = e.prototype;
      return t.observe = function() {
      }, t.unobserve = function() {
      }, t.disconnect = function() {
      }, e;
    })();
    function throttle(e, t) {
      var n = 0;
      return function() {
        for (var a = this, r = arguments.length, u = Array(r), i = 0; i < r; i++) u[i] = arguments[i];
        clearTimeout(n), n = window.setTimeout(function() {
          return e.apply(a, u);
        }, t);
      };
    }
    var MyResizeObserver = globalThis.ResizeObserver || FakeResizeObserver, hasResizeObserver = void 0 !== globalThis.ResizeObserver, useResizeObserver = hasResizeObserver, useWindowListener = !useResizeObserver;
    function useSize(e, t) {
      void 0 === t && (t = true);
      var n = React2.useState({ width: 0, height: 0 }), a = n[0], r = n[1];
      React2.useEffect(function() {
        if ("u" > typeof window && t) {
          var e2 = function() {
            r({ width: window.innerWidth, height: window.innerHeight });
          };
          return useWindowListener && (e2(), window.addEventListener("resize", e2)), function() {
            return window.removeEventListener("resize", e2);
          };
        }
      }, []);
      var u = React2.useRef(new MyResizeObserver(throttle(function(e2) {
        useResizeObserver && r({ width: e2[e2.length - 1].contentRect.width, height: e2[e2.length - 1].contentRect.height });
      }, 0)));
      return React2.useEffect(function() {
        var n2 = u.current;
        if (!t) return void n2.disconnect();
        var a2 = e.current;
        return e.current && useResizeObserver && n2.observe(e.current), function() {
          n2.disconnect(), a2 && useResizeObserver && n2.unobserve(a2);
        };
      }, [e, u]), a;
    }
    var defaultOptions = { useDevicePixelRatio: true, fitCanvasToArtboardHeight: false, useOffscreenRenderer: true, shouldResizeCanvasToContainer: true };
    function getOptions(e) {
      return Object.assign({}, defaultOptions, e);
    }
    function useResizeCanvas(e) {
      var t = e.riveLoaded, n = void 0 !== t && t, a = e.canvasElem, r = e.containerRef, u = e.options, i = e.onCanvasHasResized, o = e.artboardBounds, s = getOptions(void 0 === u ? {} : u), c = React2.useState({ height: 0, width: 0 }), l = c[0], f = l.height, d = l.width, v = c[1], p = React2.useState({ height: 0, width: 0 }), R = p[0], b = R.height, h = R.width, g = p[1], w = React2.useState(true), y = w[0], m = w[1], I = s.fitCanvasToArtboardHeight, V = s.shouldResizeCanvasToContainer, C = s.useDevicePixelRatio, O = s.customDevicePixelRatio, M = useSize(r, V), x = useDevicePixelRatio(O), E = null != o ? o : {}, P = E.maxX, _ = E.maxY, k = React2.useCallback(function() {
        var e2, t2, n2, a2, u2 = null != (e2 = null == (n2 = r.current) ? void 0 : n2.clientWidth) ? e2 : 0, i2 = null != (t2 = null == (a2 = r.current) ? void 0 : a2.clientHeight) ? t2 : 0;
        return I && o ? { width: u2, height: o.maxY / o.maxX * u2 } : { width: u2, height: i2 };
      }, [r, I, P, _]);
      React2.useEffect(function() {
        if (V && r.current && n) {
          var e2 = k(), t2 = e2.width, u2 = e2.height, o2 = false;
          if (a) {
            var c2 = t2 !== d || u2 !== f;
            if (s.fitCanvasToArtboardHeight && c2 && (r.current.style.height = u2 + "px", o2 = true), s.useDevicePixelRatio) {
              var l2 = t2 * x !== h || u2 * x !== b;
              if (c2 || l2) {
                var p2 = x * t2, R2 = x * u2;
                a.width = p2, a.height = R2, a.style.width = t2 + "px", a.style.height = u2 + "px", g({ width: p2, height: R2 }), o2 = true;
              }
            } else c2 && (a.width = t2, a.height = u2, g({ width: t2, height: u2 }), o2 = true);
            v({ width: t2, height: u2 });
          }
          i && (y || o2) && i && i(), y && m(false);
        }
      }, [a, r, M, x, k, y, m, b, h, f, d, i, V, I, C, n]), React2.useEffect(function() {
        g({ width: 0, height: 0 });
      }, [a]);
    }
    var FakeIntersectionObserver = /* @__PURE__ */ (function() {
      function e() {
      }
      var t = e.prototype;
      return t.observe = function() {
      }, t.unobserve = function() {
      }, t.disconnect = function() {
      }, e;
    })(), MyIntersectionObserver = globalThis.IntersectionObserver || FakeIntersectionObserver, ElementObserver = /* @__PURE__ */ (function() {
      function e() {
        var e2 = this;
        this.elementsMap = /* @__PURE__ */ new Map(), this.onObserved = function(t2) {
          t2.forEach(function(t3) {
            var n = e2.elementsMap.get(t3.target);
            n && n(t3);
          });
        }, this.observer = new MyIntersectionObserver(this.onObserved);
      }
      var t = e.prototype;
      return t.registerCallback = function(e2, t2) {
        this.observer.observe(e2), this.elementsMap.set(e2, t2);
      }, t.removeCallback = function(e2) {
        this.observer.unobserve(e2), this.elementsMap.delete(e2);
      }, e;
    })(), getObserver = function() {
      return observer || (observer = new ElementObserver()), observer;
    };
    function useIntersectionObserver() {
      return { observe: React2.useCallback(function(e, t) {
        getObserver().registerCallback(e, t);
      }, []), unobserve: React2.useCallback(function(e) {
        getObserver().removeCallback(e);
      }, []) };
    }
    function _extends$1() {
      return (_extends$1 = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
        }
        return e;
      }).apply(this, arguments);
    }
    function _object_without_properties_loose$1(e, t) {
      if (null == e) return {};
      var n, a, r = {}, u = Object.getOwnPropertyNames(e);
      for (a = 0; a < u.length; a++) n = u[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      return r;
    }
    function RiveComponent(e) {
      var t = e.setContainerRef, n = e.setCanvasRef, a = e.className, r = void 0 === a ? "" : a, u = e.style, i = e.children, o = _object_without_properties_loose$1(e, ["setContainerRef", "setCanvasRef", "className", "style", "children"]), s = _extends$1({ width: "100%", height: "100%" }, u);
      return /* @__PURE__ */ React__default.default.createElement("div", _extends$1({ ref: t, className: r }, !r && { style: s }), /* @__PURE__ */ React__default.default.createElement("canvas", _extends$1({ ref: n, style: { verticalAlign: "top", width: 0, height: 0 } }, o), i));
    }
    function useRive(e, t) {
      void 0 === t && (t = {});
      var n = React2.useState(null), a = n[0], r = n[1], u = React2.useRef(null), i = React2.useRef(null), o = React2.useState(null), s = o[0], c = o[1], l = !!e, f = getOptions(t), d = useDevicePixelRatio(), v = React2.useCallback(function() {
        if (s) {
          if (s.layout && s.layout.fit === canvas.Fit.Layout && a) {
            var e2 = d * s.layout.layoutScaleFactor;
            s.devicePixelRatioUsed = d, s.artboardWidth = (null == a ? void 0 : a.width) / e2, s.artboardHeight = (null == a ? void 0 : a.height) / e2;
          }
          s.startRendering(), s.resizeToCanvas();
        }
      }, [s, d]);
      useResizeCanvas({ riveLoaded: !!s, canvasElem: a, containerRef: u, options: f, onCanvasHasResized: v, artboardBounds: null == s ? void 0 : s.bounds });
      var p = React2.useCallback(function(e2) {
        null === e2 && a && (a.height = 0, a.width = 0), r(e2);
      }, []);
      React2.useEffect(function() {
        if (a && e) {
          var t2, n2 = null != s;
          if (null == s) {
            var r2 = f.useOffscreenRenderer, u2 = e.onRiveReady, o2 = _object_without_properties_loose$1(e, ["onRiveReady"]);
            t2 = new canvas.Rive(_extends$1({ useOffscreenRenderer: r2 }, o2, { canvas: a })), null != i.current && i.current.cleanup(), i.current = t2, t2.on(canvas.EventType.Load, function() {
              n2 = true, u2 && u2(t2), a ? c(t2) : t2.cleanup();
            });
          }
          return function() {
            n2 || null == t2 || t2.cleanup();
          };
        }
      }, [a, l, s]);
      var R = React2.useCallback(function(e2) {
        u.current = e2;
      }, []), b = useIntersectionObserver(), h = b.observe, g = b.unobserve;
      React2.useEffect(function() {
        var e2, t2 = false, n2 = function() {
          if (a && t2) {
            var e3 = a.getBoundingClientRect();
            e3.width > 0 && e3.height > 0 && e3.top < (window.innerHeight || document.documentElement.clientHeight) && e3.bottom > 0 && e3.left < (window.innerWidth || document.documentElement.clientWidth) && e3.right > 0 && (null == s || s.startRendering(), t2 = false);
          }
        };
        return a && false !== f.shouldUseIntersectionObserver && h(a, function(a2) {
          a2.isIntersecting ? s && s.startRendering() : s && s.stopRendering(), t2 = !a2.isIntersecting, clearTimeout(e2), a2.isIntersecting || 0 !== a2.boundingClientRect.width || (e2 = setTimeout(n2, 10));
        }), function() {
          a && g(a);
        };
      }, [h, g, s, a, f.shouldUseIntersectionObserver]), React2.useEffect(function() {
        return function() {
          s && (s.cleanup(), c(null));
        };
      }, [s, a]), React2.useEffect(function() {
        return function() {
          null != i.current && i.current.cleanup();
        };
      }, []);
      var w = null == e ? void 0 : e.animations;
      React2.useEffect(function() {
        s && w && (s.isPlaying ? (s.stop(s.animationNames), s.play(w)) : s.isPaused && (s.stop(s.animationNames), s.pause(w)));
      }, [w, s]);
      var y = React2.useCallback(function(e2) {
        return /* @__PURE__ */ React__default.default.createElement(RiveComponent, _extends$1({ setContainerRef: R, setCanvasRef: p }, e2));
      }, [p, R]);
      return { canvas: a, container: u.current, setCanvasRef: p, setContainerRef: R, rive: s, RiveComponent: y };
    }
    function _object_without_properties_loose(e, t) {
      if (null == e) return {};
      var n, a, r = {}, u = Object.getOwnPropertyNames(e);
      for (a = 0; a < u.length; a++) n = u[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      return r;
    }
    var Rive = function(e) {
      var t = e.src, n = e.artboard, a = e.animations, r = e.stateMachines, u = e.layout, i = e.useOffscreenRenderer, o = e.shouldDisableRiveListeners, s = e.shouldResizeCanvasToContainer, c = e.automaticallyHandleEvents, l = e.children, f = _object_without_properties_loose(e, ["src", "artboard", "animations", "stateMachines", "layout", "useOffscreenRenderer", "shouldDisableRiveListeners", "shouldResizeCanvasToContainer", "automaticallyHandleEvents", "children"]), d = useRive({ src: t, artboard: n, animations: a, layout: u, stateMachines: r, autoplay: true, shouldDisableRiveListeners: void 0 !== o && o, automaticallyHandleEvents: void 0 !== c && c }, { useOffscreenRenderer: void 0 === i || i, shouldResizeCanvasToContainer: void 0 === s || s }).RiveComponent;
      return /* @__PURE__ */ React__default.default.createElement(d, f, l);
    };
    function useStateMachineInput(e, t, n, a) {
      var r = React2.useState(null), u = r[0], i = r[1];
      return React2.useEffect(function() {
        var r2 = function() {
          if (e && t && n || i(null), e && t && n) {
            var r3 = e.stateMachineInputs(t);
            if (r3) {
              var u2 = r3.find(function(e2) {
                return e2.name === n;
              });
              void 0 !== a && u2 && (u2.value = a), i(u2 || null);
            }
          } else i(null);
        };
        r2(), e && e.on(canvas.EventType.Load, function() {
          r2();
        });
      }, [e]), u;
    }
    function useViewModel(e, t) {
      var n = null != t ? t : {}, a = n.name, r = n.useDefault, u = React2.useState(null), i = u[0], o = u[1];
      return React2.useEffect(function() {
        var t2 = function() {
          if (!e) return void o(null);
          o(null != a ? (null == e.viewModelByName ? void 0 : e.viewModelByName.call(e, a)) || null : e.defaultViewModel() || null);
        };
        return t2(), e && e.on(canvas.EventType.Load, t2), function() {
          e && e.off(canvas.EventType.Load, t2);
        };
      }, [e, a, void 0 !== r && r]), i;
    }
    function useViewModelInstance(e, t) {
      var n = null != t ? t : {}, a = n.name, r = n.useDefault, u = void 0 !== r && r, i = n.useNew, o = void 0 !== i && i, s = n.rive, c = React2.useState(null), l = c[0], f = c[1];
      return React2.useEffect(function() {
        if (!e) return void f(null);
        var t2 = null;
        f(t2 = null != a ? e.instanceByName(a) || null : u ? (null == e.defaultInstance ? void 0 : e.defaultInstance.call(e)) || null : o ? (null == e.instance ? void 0 : e.instance.call(e)) || null : (null == e.defaultInstance ? void 0 : e.defaultInstance.call(e)) || null), s && t2 && s.viewModelInstance !== t2 && s.bindViewModelInstance(t2);
      }, [e, a, u, o, s]), l;
    }
    function _extends() {
      return (_extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
        }
        return e;
      }).apply(this, arguments);
    }
    function useViewModelInstanceProperty(e, t, n) {
      var a = React2.useState(null), r = a[0], u = a[1], i = React2.useState(n.defaultValue), o = i[0], s = i[1], c = React2.useState(null), l = c[0], f = c[1], d = React2.useRef(null), v = React2.useRef(e), p = React2.useRef(n);
      React2.useEffect(function() {
        p.current = n;
      }, [n]);
      var R = React2.useCallback(function() {
        var e2 = d.current, t2 = v.current, n2 = p.current;
        if (!e2 || !t2) return u(null), s(n2.defaultValue), f(null), function() {
        };
        var a2 = n2.getProperty(e2, t2);
        if (a2) {
          u(a2), s(n2.getValue(a2)), n2.getExtendedData && f(n2.getExtendedData(a2));
          var r2 = function() {
            s(n2.getValue(a2)), n2.getExtendedData && f(n2.getExtendedData(a2)), n2.onPropertyEvent && n2.onPropertyEvent();
          };
          return a2.on(r2), function() {
            a2.off(r2);
          };
        }
        return function() {
        };
      }, []);
      React2.useEffect(function() {
        return d.current = t, v.current = e, R();
      }, [t, e, R]);
      var b = React2.useCallback(function(e2) {
        if (r && d.current === t) try {
          e2(r), p.current.getExtendedData && f(p.current.getExtendedData(r));
          return;
        } catch (e3) {
        }
        if (d.current) try {
          var n2 = p.current.getProperty(d.current, v.current);
          n2 && (u(n2), e2(n2), p.current.getExtendedData && f(p.current.getExtendedData(n2)));
        } catch (e3) {
        }
      }, [r, t]), h = React2.useMemo(function() {
        return p.current.buildPropertyOperations(b);
      }, [b]), g = _extends({ value: o }, h);
      return n.getExtendedData && (g.extendedData = l), g;
    }
    function useViewModelInstanceNumber(e, t) {
      var n = useViewModelInstanceProperty(e, t, { getProperty: React2.useCallback(function(e2, t2) {
        return e2.number(t2);
      }, []), getValue: React2.useCallback(function(e2) {
        return e2.value;
      }, []), defaultValue: null, buildPropertyOperations: React2.useCallback(function(e2) {
        return { setValue: function(t2) {
          e2(function(e3) {
            e3.value = t2;
          });
        } };
      }, []) });
      return { value: n.value, setValue: n.setValue };
    }
    function useViewModelInstanceString(e, t) {
      var n = useViewModelInstanceProperty(e, t, { getProperty: React2.useCallback(function(e2, t2) {
        return e2.string(t2);
      }, []), getValue: React2.useCallback(function(e2) {
        return e2.value;
      }, []), defaultValue: null, buildPropertyOperations: React2.useCallback(function(e2) {
        return { setValue: function(t2) {
          e2(function(e3) {
            e3.value = t2;
          });
        } };
      }, []) });
      return { value: n.value, setValue: n.setValue };
    }
    function useViewModelInstanceBoolean(e, t) {
      var n = useViewModelInstanceProperty(e, t, { getProperty: React2.useCallback(function(e2, t2) {
        return e2.boolean(t2);
      }, []), getValue: React2.useCallback(function(e2) {
        return e2.value;
      }, []), defaultValue: null, buildPropertyOperations: React2.useCallback(function(e2) {
        return { setValue: function(t2) {
          e2(function(e3) {
            e3.value = t2;
          });
        } };
      }, []) });
      return { value: n.value, setValue: n.setValue };
    }
    function useViewModelInstanceColor(e, t) {
      var n = useViewModelInstanceProperty(e, t, { getProperty: React2.useCallback(function(e2, t2) {
        return e2.color(t2);
      }, []), getValue: React2.useCallback(function(e2) {
        return e2.value;
      }, []), defaultValue: null, buildPropertyOperations: React2.useCallback(function(e2) {
        return { setValue: function(t2) {
          e2(function(e3) {
            e3.value = t2;
          });
        }, setRgb: function(t2, n2, a) {
          e2(function(e3) {
            e3.rgb(t2, n2, a);
          });
        }, setRgba: function(t2, n2, a, r) {
          e2(function(e3) {
            e3.rgba(t2, n2, a, r);
          });
        }, setAlpha: function(t2) {
          e2(function(e3) {
            e3.alpha(t2);
          });
        }, setOpacity: function(t2) {
          e2(function(e3) {
            e3.opacity(t2);
          });
        } };
      }, []) });
      return { value: n.value, setValue: n.setValue, setRgb: n.setRgb, setRgba: n.setRgba, setAlpha: n.setAlpha, setOpacity: n.setOpacity };
    }
    function useViewModelInstanceEnum(e, t) {
      var n = useViewModelInstanceProperty(e, t, { getProperty: React2.useCallback(function(e2, t2) {
        return e2.enum(t2);
      }, []), getValue: React2.useCallback(function(e2) {
        return e2.value;
      }, []), defaultValue: null, getExtendedData: React2.useCallback(function(e2) {
        return e2.values;
      }, []), buildPropertyOperations: React2.useCallback(function(e2) {
        return { setValue: function(t2) {
          e2(function(e3) {
            e3.value = t2;
          });
        } };
      }, []) });
      return { value: n.value, values: n.extendedData || [], setValue: n.setValue };
    }
    function useViewModelInstanceTrigger(e, t, n) {
      var a = (null != n ? n : {}).onTrigger;
      return { trigger: useViewModelInstanceProperty(e, t, { getProperty: React2.useCallback(function(e2, t2) {
        return e2.trigger(t2);
      }, []), getValue: React2.useCallback(function() {
      }, []), defaultValue: null, onPropertyEvent: a, buildPropertyOperations: React2.useCallback(function(e2) {
        return { trigger: function() {
          e2(function(e3) {
            e3.trigger();
          });
        } };
      }, []) }).trigger };
    }
    function useViewModelInstanceImage(e, t) {
      return { setValue: useViewModelInstanceProperty(e, t, { getProperty: React2.useCallback(function(e2, t2) {
        return e2.image(t2);
      }, []), getValue: React2.useCallback(function() {
      }, []), defaultValue: null, buildPropertyOperations: React2.useCallback(function(e2) {
        return { setValue: function(t2) {
          e2(function(e3) {
            e3.value = t2;
          });
        } };
      }, []) }).setValue };
    }
    function useViewModelInstanceList(e, t) {
      var n, a = React2.useState(0)[1], r = useViewModelInstanceProperty(e, t, { getProperty: React2.useCallback(function(e2, t2) {
        return e2.list(t2);
      }, []), getValue: React2.useCallback(function(e2) {
        return e2.length;
      }, []), defaultValue: null, onPropertyEvent: function() {
        a(function(e2) {
          return e2 + 1;
        });
      }, buildPropertyOperations: React2.useCallback(function(e2) {
        return { addInstance: function(t2) {
          e2(function(e3) {
            return e3.addInstance(t2);
          });
        }, addInstanceAt: function(t2, n2) {
          var a2 = false;
          return e2(function(e3) {
            a2 = e3.addInstanceAt(t2, n2);
          }), a2;
        }, removeInstance: function(t2) {
          e2(function(e3) {
            return e3.removeInstance(t2);
          });
        }, removeInstanceAt: function(t2) {
          e2(function(e3) {
            return e3.removeInstanceAt(t2);
          });
        }, getInstanceAt: function(t2) {
          var n2 = null;
          return e2(function(e3) {
            n2 = e3.instanceAt(t2);
          }), n2;
        }, swap: function(t2, n2) {
          e2(function(e3) {
            return e3.swap(t2, n2);
          });
        } };
      }, []) });
      return { length: null != (n = r.value) ? n : 0, addInstance: r.addInstance, addInstanceAt: r.addInstanceAt, removeInstance: r.removeInstance, removeInstanceAt: r.removeInstanceAt, getInstanceAt: r.getInstanceAt, swap: r.swap };
    }
    function asyncGeneratorStep(e, t, n, a, r, u, i) {
      try {
        var o = e[u](i), s = o.value;
      } catch (e2) {
        n(e2);
        return;
      }
      o.done ? t(s) : Promise.resolve(s).then(a, r);
    }
    function _async_to_generator(e) {
      return function() {
        var t = this, n = arguments;
        return new Promise(function(a, r) {
          var u = e.apply(t, n);
          function i(e2) {
            asyncGeneratorStep(u, a, r, i, o, "next", e2);
          }
          function o(e2) {
            asyncGeneratorStep(u, a, r, i, o, "throw", e2);
          }
          i(void 0);
        });
      };
    }
    function _ts_generator(e, t) {
      var n, a, r, u = { label: 0, sent: function() {
        if (1 & r[0]) throw r[1];
        return r[1];
      }, trys: [], ops: [] }, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype), o = Object.defineProperty;
      return o(i, "next", { value: s(0) }), o(i, "throw", { value: s(1) }), o(i, "return", { value: s(2) }), "function" == typeof Symbol && o(i, Symbol.iterator, { value: function() {
        return this;
      } }), i;
      function s(o2) {
        return function(s2) {
          var c = [o2, s2];
          if (n) throw TypeError("Generator is already executing.");
          for (; i && (i = 0, c[0] && (u = 0)), u; ) try {
            if (n = 1, a && (r = 2 & c[0] ? a.return : c[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, c[1])).done) return r;
            switch (a = 0, r && (c = [2 & c[0], r.value]), c[0]) {
              case 0:
              case 1:
                r = c;
                break;
              case 4:
                return u.label++, { value: c[1], done: false };
              case 5:
                u.label++, a = c[1], c = [0];
                continue;
              case 7:
                c = u.ops.pop(), u.trys.pop();
                continue;
              default:
                if (!(r = (r = u.trys).length > 0 && r[r.length - 1]) && (6 === c[0] || 2 === c[0])) {
                  u = 0;
                  continue;
                }
                if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                  u.label = c[1];
                  break;
                }
                if (6 === c[0] && u.label < r[1]) {
                  u.label = r[1], r = c;
                  break;
                }
                if (r && u.label < r[2]) {
                  u.label = r[2], u.ops.push(c);
                  break;
                }
                r[2] && u.ops.pop(), u.trys.pop();
                continue;
            }
            c = t.call(e, u);
          } catch (e2) {
            c = [6, e2], a = 0;
          } finally {
            n = r = 0;
          }
          if (5 & c[0]) throw c[1];
          return { value: c[0] ? c[1] : void 0, done: true };
        };
      }
    }
    function useRiveFile(e) {
      var t = React2.useState(null), n = t[0], a = t[1], r = React2.useState("idle"), u = r[0], i = r[1];
      return React2.useEffect(function() {
        var t2 = null;
        return _async_to_generator(function() {
          return _ts_generator(this, function(n2) {
            try {
              i("loading"), (t2 = new canvas.RiveFile(e)).init(), t2.on(canvas.EventType.Load, function() {
                null == t2 || t2.getInstance(), a(t2), i("success");
              }), t2.on(canvas.EventType.LoadError, function() {
                i("failed");
              }), a(t2);
            } catch (e2) {
              console.error(e2), i("failed");
            }
            return [2];
          });
        })(), function() {
          null == t2 || t2.cleanup();
        };
      }, [e.src, e.buffer]), { riveFile: n, status: u };
    }
    function useViewModelInstanceArtboard(e, t) {
      return { setValue: useViewModelInstanceProperty(e, t, { getProperty: React2.useCallback(function(e2, t2) {
        return e2.artboard(t2);
      }, []), getValue: React2.useCallback(function() {
      }, []), defaultValue: null, buildPropertyOperations: React2.useCallback(function(e2) {
        return { setValue: function(t2) {
          e2(function(e3) {
            e3.value = t2;
          });
        } };
      }, []) }).setValue };
    }
    exports$1.default = Rive, exports$1.useResizeCanvas = useResizeCanvas, exports$1.useRive = useRive, exports$1.useRiveFile = useRiveFile, exports$1.useStateMachineInput = useStateMachineInput, exports$1.useViewModel = useViewModel, exports$1.useViewModelInstance = useViewModelInstance, exports$1.useViewModelInstanceArtboard = useViewModelInstanceArtboard, exports$1.useViewModelInstanceBoolean = useViewModelInstanceBoolean, exports$1.useViewModelInstanceColor = useViewModelInstanceColor, exports$1.useViewModelInstanceEnum = useViewModelInstanceEnum, exports$1.useViewModelInstanceImage = useViewModelInstanceImage, exports$1.useViewModelInstanceList = useViewModelInstanceList, exports$1.useViewModelInstanceNumber = useViewModelInstanceNumber, exports$1.useViewModelInstanceString = useViewModelInstanceString, exports$1.useViewModelInstanceTrigger = useViewModelInstanceTrigger, Object.keys(canvas).forEach(function(e) {
      "default" === e || exports$1.hasOwnProperty(e) || Object.defineProperty(exports$1, e, { enumerable: true, get: function() {
        return canvas[e];
      } });
    });
  })(dist);
  return dist;
}
var distExports = requireDist();
const EMPTY_WORDS = [];
function NinjaTypingMode({ wordsData = EMPTY_WORDS }) {
  var _a;
  const { recordCorrect, recordWrong, reset: resetScoring } = useScoreEngine("vocab-dojo");
  const sessionWords = reactExports.useMemo(() => wordsData.map((word) => ({
    ...word,
    word: word.word || word.kanji,
    romaji: String(word.romaji || "").normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/[^a-z]/g, "")
  })).filter((word) => word.word && word.romaji).slice(0, 20), [wordsData]);
  const spawnedRef = reactExports.useRef(0);
  const finishedRef = reactExports.useRef(false);
  const containerRef = reactExports.useRef(null);
  const canvasRef = reactExports.useRef(null);
  const inWorld = useWorldSurface();
  const shakeTimerRef = reactExports.useRef(null);
  const lastDomSyncRef = reactExports.useRef(0);
  const qCfg = reactExports.useMemo(() => getQualityConfig(), []);
  const lowPowerMotion = qCfg.tier === "low" || ((_a = qCfg.deviceProbe) == null ? void 0 : _a.isMobile);
  const { score, combo, hp, gameState, addScore, resetCombo, takeDamage, setGameState } = useGameStore(useShallow((s) => ({
    score: s.score,
    combo: s.combo,
    hp: s.hp,
    gameState: s.gameState,
    addScore: s.addScore,
    resetCombo: s.resetCombo,
    takeDamage: s.takeDamage,
    setGameState: s.setGameState
  })));
  const [screenShake, setScreenShake] = reactExports.useState(false);
  const [activeWords, setActiveWords] = reactExports.useState([]);
  const { rive: rive2, RiveComponent } = distExports.useRive({
    src: inWorld ? void 0 : "https://cdn.rive.app/animations/vehicles.riv",
    // Placeholder riv
    stateMachines: "bumpy",
    autoplay: !lowPowerMotion
  });
  const triggerSlashInput = distExports.useStateMachineInput(rive2, "bumpy", "bump");
  const triggerHurtInput = distExports.useStateMachineInput(rive2, "bumpy", "bump");
  const wordPool = reactExports.useRef(new EntityPool((id) => ({
    id: `entity_${id}`,
    active: false,
    x: 100,
    y: Math.random() * 60 + 20,
    // 20% -> 80% chiều cao
    wordData: null,
    typedIndex: 0,
    speed: 15 + Math.random() * 10
  }), 30));
  const spawnTimerRef = reactExports.useRef(0);
  const uiSyncMs = lowPowerMotion ? 1e3 / 20 : 1e3 / 30;
  const triggerScreenShake = reactExports.useCallback(() => {
    setScreenShake(true);
    if (shakeTimerRef.current) window.clearTimeout(shakeTimerRef.current);
    shakeTimerRef.current = window.setTimeout(() => {
      setScreenShake(false);
      shakeTimerRef.current = null;
    }, lowPowerMotion ? 120 : 200);
  }, [lowPowerMotion]);
  const systems = reactExports.useMemo(() => [
    {
      update: (dt, store) => {
        if (useGameStore.getState().gameState !== "PLAYING") return;
        const currentEntities = wordPool.current.getActiveEntities();
        currentEntities.forEach((entity) => {
          entity.x -= entity.speed * dt;
          if (entity.x < 0) {
            recordWrong(entity.wordData);
            takeDamage(10);
            resetCombo();
            if (triggerHurtInput) triggerHurtInput.fire();
            triggerScreenShake();
            wordPool.current.despawn(entity);
          }
        });
        spawnTimerRef.current -= dt;
        if (spawnTimerRef.current <= 0 && currentEntities.length < 5 && spawnedRef.current < sessionWords.length) {
          const newWord = sessionWords[spawnedRef.current++];
          wordPool.current.spawn({
            x: 100,
            y: Math.random() * 60 + 20,
            wordData: newWord,
            typedIndex: 0,
            speed: 15 + Math.random() * 15 + useGameStore.getState().score / 1e3
            // Khó dần
          });
          spawnTimerRef.current = 1.5 - Math.min(1, useGameStore.getState().score / 5e3);
        }
        if (spawnedRef.current >= sessionWords.length && wordPool.current.getActiveEntities().length === 0) {
          setGameState("GAME_OVER");
        }
        if (store.time - lastDomSyncRef.current >= uiSyncMs) {
          setActiveWords([...wordPool.current.getActiveEntities()]);
          lastDomSyncRef.current = store.time;
        }
      }
    }
  ], [resetCombo, takeDamage, triggerHurtInput, triggerScreenShake, uiSyncMs, sessionWords, recordWrong, setGameState]);
  const { triggerHitStop } = useGameEngine(systems);
  const handleTyping = reactExports.useCallback((typedKey) => {
    if (useGameStore.getState().gameState !== "PLAYING") return;
    if (!/^[a-zA-Z]$/.test(typedKey)) return;
    const typedChar = typedKey.toLowerCase();
    const entities = wordPool.current.getActiveEntities();
    if (entities.length === 0) return;
    let target = entities.find((en) => en.typedIndex > 0 && en.wordData.romaji[en.typedIndex] === typedChar);
    if (!target) {
      const potentials = entities.filter((en) => en.typedIndex === 0 && en.wordData.romaji[0] === typedChar).sort((a, b) => a.x - b.x);
      if (potentials.length > 0) target = potentials[0];
    }
    if (target) {
      target.typedIndex++;
      if (target.typedIndex === target.wordData.romaji.length) {
        if (triggerSlashInput) triggerSlashInput.fire();
        triggerHitStop(50);
        triggerScreenShake();
        recordCorrect(target.wordData);
        addScore(100 + combo * 10);
        wordPool.current.despawn(target);
      }
    } else {
      resetCombo();
    }
    setActiveWords([...wordPool.current.getActiveEntities()]);
  }, [combo, addScore, resetCombo, triggerHitStop, triggerSlashInput, triggerScreenShake, recordCorrect]);
  reactExports.useEffect(() => {
    const handleKey = (event) => {
      if (event.target instanceof HTMLElement && event.target.matches('input, textarea, [contenteditable="true"]')) return;
      handleTyping(event.key);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleTyping]);
  reactExports.useEffect(() => {
    if (hp <= 0 && gameState === "PLAYING") setGameState("GAME_OVER");
    if (gameState === "GAME_OVER" && !finishedRef.current) {
      finishedRef.current = true;
      resetScoring();
    }
  }, [hp, gameState, setGameState, resetScoring]);
  const restart = () => {
    resetScoring();
    wordPool.current.getActiveEntities().forEach((entity) => wordPool.current.despawn(entity));
    spawnedRef.current = 0;
    spawnTimerRef.current = 0;
    finishedRef.current = false;
    setActiveWords([]);
    useGameStore.setState({ hp: 100, score: 0, combo: 0, gameState: "PLAYING" });
  };
  reactExports.useEffect(() => {
    finishedRef.current = false;
    useGameStore.setState({ hp: 100, score: 0, combo: 0, gameState: "PLAYING" });
  }, []);
  reactExports.useEffect(() => () => {
    if (shakeTimerRef.current) window.clearTimeout(shakeTimerRef.current);
  }, []);
  reactExports.useEffect(() => {
    if (inWorld || !canvasRef.current || lowPowerMotion) return;
    let disposed = false;
    let cleanup = () => {
    };
    __vitePreload(() => import("./vendor-three-DqkPfKji.js").then((n) => n.g0), true ? [] : void 0, import.meta.url).then((THREE) => {
      var _a2;
      if (disposed) return;
      const canvas = canvasRef.current;
      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: qCfg.antialias,
        powerPreference: ((_a2 = qCfg.deviceProbe) == null ? void 0 : _a2.isMobile) ? "low-power" : "high-performance"
      });
      const maxDpr = Array.isArray(qCfg.dpr) ? qCfg.dpr[1] : 1;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxDpr || 1));
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1e3);
      camera.position.z = 5;
      const resize = () => {
        const host = containerRef.current || canvas.parentElement;
        const width = Math.max(1, (host == null ? void 0 : host.clientWidth) || window.innerWidth || 1);
        const height = Math.max(1, (host == null ? void 0 : host.clientHeight) || window.innerHeight || 1);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };
      resize();
      const geometry = new THREE.BufferGeometry();
      const particlesCount = lowPowerMotion ? 36 : 100;
      const posArray = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
      }
      geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
      const material = new THREE.PointsMaterial({ size: 0.05, color: 61695, transparent: true, opacity: 0.5 });
      const particlesMesh = new THREE.Points(geometry, material);
      scene.add(particlesMesh);
      let reqId;
      let lastRender = 0;
      let lastTime = performance.now();
      const frameMs = 1e3 / (qCfg.frameCap || 30);
      const animate = (now = performance.now()) => {
        if (disposed) return;
        reqId = requestAnimationFrame(animate);
        if (typeof document !== "undefined" && document.hidden) return;
        if (now - lastRender < frameMs) return;
        const deltaScale = Math.min(2, Math.max(0.25, (now - lastTime) / 16.67));
        lastTime = now;
        lastRender = now;
        particlesMesh.rotation.y += 1e-3 * deltaScale;
        particlesMesh.rotation.x += 5e-4 * deltaScale;
        renderer.render(scene, camera);
      };
      reqId = requestAnimationFrame(animate);
      const handleResize = () => {
        resize();
      };
      window.addEventListener("resize", handleResize, { passive: true });
      cleanup = () => {
        disposed = true;
        cancelAnimationFrame(reqId);
        window.removeEventListener("resize", handleResize);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    }).catch(() => {
    });
    return () => {
      disposed = true;
      cleanup();
    };
  }, [inWorld, lowPowerMotion, qCfg]);
  if (!sessionWords.length) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state", children: "Không có từ và cách đọc để luyện gõ." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `ninja-dojo-container ${screenShake ? "shake-hard" : ""}`, ref: containerRef, children: [
    !inWorld && !lowPowerMotion && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "webgpu-canvas-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "falling-words-layer", children: activeWords.map((entity) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `falling-word ${entity.typedIndex > 0 ? "targeted" : ""}`,
        style: {
          left: `${entity.x}%`,
          top: `${entity.y}%`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fw-kanji", children: entity.wordData.kanji }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fw-romaji", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typed", children: entity.wordData.romaji.slice(0, entity.typedIndex) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: entity.wordData.romaji.slice(entity.typedIndex) })
          ] })
        ]
      },
      entity.id
    )) }),
    !inWorld && !lowPowerMotion && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rive-character-layer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RiveComponent, { className: "ninja-rive" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "game-hud", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "score-pop", children: [
          "Điểm: ",
          score
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: `combo-meter ${combo > 10 ? "fire" : ""}`, children: [
          "Combo x",
          combo
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hp-bar-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hp-bar-fill", style: { width: `${hp}%` } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "absolute", bottom: 12, left: 12, right: 12, zIndex: 30 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "ninja-typing-input", children: [
        "Gõ romaji để chém từ đang bay (",
        sessionWords.length,
        " từ)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "ninja-typing-input", className: "n4-input", "aria-label": "Gõ romaji", autoComplete: "off", autoCapitalize: "none", value: "", disabled: gameState !== "PLAYING", onChange: (event) => {
        for (const char of event.target.value) handleTyping(char);
      } })
    ] }),
    gameState === "GAME_OVER" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "game-over-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: hp <= 0 ? "Hết năng lượng" : "Hoàn thành!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
        "Điểm: ",
        score
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-restart", onClick: restart, children: "CHƠI LẠI" })
    ] })
  ] });
}
const WORD_EMOJI = {
  // Animals
  "犬": "🐕",
  "いぬ": "🐕",
  "猫": "🐈",
  "ねこ": "🐈",
  "魚": "🐟",
  "さかな": "🐟",
  "鳥": "🐦",
  "とり": "🐦",
  "馬": "🐴",
  "うま": "🐴",
  "牛": "🐄",
  "うし": "🐄",
  "豚": "🐷",
  "ぶた": "🐷",
  "象": "🐘",
  "ぞう": "🐘",
  "うさぎ": "🐰",
  "兎": "🐰",
  "虫": "🐛",
  "むし": "🐛",
  // Nature & Weather
  "花": "🌸",
  "はな": "🌸",
  "木": "🌳",
  "き": "🌳",
  "山": "⛰️",
  "やま": "⛰️",
  "川": "🏞️",
  "かわ": "🏞️",
  "海": "🌊",
  "うみ": "🌊",
  "雨": "🌧️",
  "あめ": "🌧️",
  "雪": "❄️",
  "ゆき": "❄️",
  "風": "💨",
  "かぜ": "💨",
  "月": "🌙",
  "つき": "🌙",
  "星": "⭐",
  "ほし": "⭐",
  "太陽": "☀️",
  "たいよう": "☀️",
  "空": "🌤️",
  "そら": "🌤️",
  "森": "🌲",
  "もり": "🌲",
  // Buildings & Places
  "家": "🏠",
  "いえ": "🏠",
  "うち": "🏠",
  "学校": "🏫",
  "がっこう": "🏫",
  "病院": "🏥",
  "びょういん": "🏥",
  "銀行": "🏦",
  "ぎんこう": "🏦",
  "駅": "🚉",
  "えき": "🚉",
  "図書館": "📚",
  "としょかん": "📚",
  "公園": "🌳",
  "こうえん": "🌳",
  "レストラン": "🍽️",
  "ホテル": "🏨",
  "スーパー": "🏪",
  "空港": "✈️",
  "くうこう": "✈️",
  "郵便局": "📮",
  "ゆうびんきょく": "📮",
  "会社": "🏢",
  "かいしゃ": "🏢",
  "お寺": "⛩️",
  "てら": "⛩️",
  "神社": "⛩️",
  "じんじゃ": "⛩️",
  // Transportation
  "電車": "🚂",
  "でんしゃ": "🚂",
  "自動車": "🚗",
  "じどうしゃ": "🚗",
  "車": "🚗",
  "くるま": "🚗",
  "自転車": "🚲",
  "じてんしゃ": "🚲",
  "バス": "🚌",
  "タクシー": "🚕",
  "飛行機": "✈️",
  "ひこうき": "✈️",
  "船": "⛵",
  "ふね": "⛵",
  "地下鉄": "🚇",
  "ちかてつ": "🚇",
  // Food & Drink
  "ご飯": "🍚",
  "ごはん": "🍚",
  "パン": "🍞",
  "肉": "🥩",
  "にく": "🥩",
  "野菜": "🥦",
  "やさい": "🥦",
  "果物": "🍎",
  "くだもの": "🍎",
  "りんご": "🍎",
  "みかん": "🍊",
  "バナナ": "🍌",
  "水": "💧",
  "みず": "💧",
  "お茶": "🍵",
  "おちゃ": "🍵",
  "コーヒー": "☕",
  "牛乳": "🥛",
  "ぎゅうにゅう": "🥛",
  "ビール": "🍺",
  "すし": "🍣",
  "寿司": "🍣",
  "らーめん": "🍜",
  "ラーメン": "🍜",
  "たまご": "🥚",
  "卵": "🥚",
  // Body parts
  "頭": "🧠",
  "あたま": "🧠",
  "目": "👁️",
  "め": "👁️",
  "鼻": "👃",
  // はな reading omitted — already used for 花 (flower)
  "口": "👄",
  "くち": "👄",
  "耳": "👂",
  "みみ": "👂",
  "手": "✋",
  "て": "✋",
  "足": "🦶",
  "あし": "🦶",
  "顔": "😊",
  "かお": "😊",
  "体": "🧍",
  "からだ": "🧍",
  "歯": "🦷",
  "は": "🦷",
  // Clothing & Items
  "服": "👕",
  // ふく reading omitted — avoids homophone collision with 拭く (to wipe)
  "シャツ": "👕",
  "ズボン": "👖",
  "靴": "👟",
  "くつ": "👟",
  "帽子": "🎩",
  "ぼうし": "🎩",
  "眼鏡": "👓",
  "めがね": "👓",
  "傘": "☂️",
  "かさ": "☂️",
  "財布": "👛",
  "さいふ": "👛",
  "鍵": "🔑",
  "かぎ": "🔑",
  "かばん": "👜",
  "鞄": "👜",
  "ネクタイ": "👔",
  // School & Office
  "本": "📖",
  "ほん": "📖",
  "鉛筆": "✏️",
  "えんぴつ": "✏️",
  "ペン": "🖊️",
  "辞書": "📕",
  "じしょ": "📕",
  "ノート": "📓",
  "紙": "📄",
  "かみ": "📄",
  "机": "🪑",
  "つくえ": "🪑",
  "椅子": "🪑",
  "いす": "🪑",
  "カレンダー": "📅",
  // Electronics
  "テレビ": "📺",
  "電話": "📞",
  "でんわ": "📞",
  "コンピューター": "💻",
  "カメラ": "📷",
  "スマホ": "📱",
  "冷蔵庫": "🧊",
  "れいぞうこ": "🧊",
  // Actions & Activities
  "勉強": "📚",
  "べんきょう": "📚",
  "仕事": "💼",
  "しごと": "💼",
  "旅行": "🧳",
  "りょこう": "🧳",
  "料理": "🍳",
  "りょうり": "🍳",
  "掃除": "🧹",
  "そうじ": "🧹",
  "拭く": "🧽",
  "買い物": "🛍️",
  "かいもの": "🛍️",
  "運動": "🏃",
  "うんどう": "🏃",
  "音楽": "🎵",
  "おんがく": "🎵",
  "映画": "🎬",
  "えいが": "🎬",
  "写真": "📷",
  "しゃしん": "📷",
  "歌": "🎤",
  "うた": "🎤",
  "踊り": "💃",
  "おどり": "💃",
  "スポーツ": "⚽",
  "サッカー": "⚽",
  "野球": "⚾",
  "やきゅう": "⚾",
  "水泳": "🏊",
  "すいえい": "🏊",
  // People
  "先生": "👩‍🏫",
  "せんせい": "👩‍🏫",
  "学生": "🎓",
  "がくせい": "🎓",
  "友達": "👫",
  "ともだち": "👫",
  "家族": "👨‍👩‍👧",
  "かぞく": "👨‍👩‍👧",
  "父": "👨",
  "ちち": "👨",
  "母": "👩",
  "はは": "👩",
  "兄": "🧑",
  "あに": "🧑",
  "姉": "👩",
  "あね": "👩",
  "弟": "👦",
  "おとうと": "👦",
  "妹": "👧",
  "いもうと": "👧",
  "子供": "👧",
  "こども": "👧",
  "赤ちゃん": "👶",
  "あかちゃん": "👶",
  "医者": "👨‍⚕️",
  "いしゃ": "👨‍⚕️",
  // Colors
  "赤": "🔴",
  "あか": "🔴",
  "青": "🔵",
  "あお": "🔵",
  "白": "⬜",
  "しろ": "⬜",
  "黒": "⬛",
  "くろ": "⬛",
  "黄色": "🟡",
  "きいろ": "🟡",
  "緑": "🟢",
  "みどり": "🟢",
  "オレンジ": "🟠",
  "むらさき": "🟣",
  "紫": "🟣",
  // Time & Dates
  "朝": "🌅",
  "あさ": "🌅",
  "昼": "☀️",
  "ひる": "☀️",
  "夜": "🌙",
  "よる": "🌙",
  "時間": "⏰",
  "じかん": "⏰",
  "今日": "📅",
  "きょう": "📅",
  "明日": "📅",
  "あした": "📅",
  "週": "📆",
  "しゅう": "📆",
  "月曜日": "📅",
  "げつようび": "📅",
  "誕生日": "🎂",
  "たんじょうび": "🎂",
  "お正月": "🎍",
  // Misc
  "お金": "💴",
  "おかね": "💴",
  "時計": "⏰",
  "とけい": "⏰",
  "電気": "💡",
  "でんき": "💡",
  "病気": "🤒",
  "びょうき": "🤒",
  "薬": "💊",
  "くすり": "💊",
  "地図": "🗺️",
  "ちず": "🗺️",
  "ゴミ": "🗑️",
  "世界": "🌍",
  "せかい": "🌍",
  "国": "🌐",
  "くに": "🌐"
};
const OPT_COUNT$1 = 4;
function getEmoji(item) {
  if (!item) return null;
  return WORD_EMOJI[item.word] || WORD_EMOJI[item.reading] || WORD_EMOJI[item.kanji] || null;
}
function filterEmojiItems(items, max = 80) {
  return items.filter((it) => getEmoji(it) !== null).slice(0, max);
}
function SceneMode({ items, onCorrect, onWrong, onBack }) {
  var _a;
  const playableScenes = reactExports.useMemo(() => {
    return SCENE_DESCRIPTIONS.filter((sc) => sc.items.length >= 4);
  }, []);
  const [sceneIdx, setSceneIdx] = reactExports.useState(
    () => Math.floor(Math.random() * playableScenes.length)
  );
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [options, setOptions] = reactExports.useState([]);
  const [score, setScore] = reactExports.useState({ correct: 0, total: 0 });
  const [done, setDone] = reactExports.useState(false);
  const scene = (_a = playableScenes[sceneIdx]) != null ? _a : SCENE_DESCRIPTIONS[0];
  const sceneItems = scene.items;
  const current = sceneItems[qIdx];
  reactExports.useEffect(() => {
    if (!current) return;
    const others = sceneItems.filter((_, i) => i !== qIdx);
    const wrong = shuffleArray$1(others).slice(0, 3);
    setOptions(shuffleArray$1([current, ...wrong]));
    setSelected(null);
    speakJP(current.word);
  }, [qIdx, sceneIdx]);
  const handlePick = (opt) => {
    if (selected !== null) return;
    setSelected(opt.word);
    const isRight = opt.word === current.word;
    if (isRight) {
      playSFX("correct");
      onCorrect({ word: current.word, reading: current.reading, meaning: current.meaning });
      setScore((s) => ({ correct: s.correct + 1, total: s.total + 1 }));
    } else {
      playSFX("wrong");
      onWrong({ word: current.word, reading: current.reading, meaning: current.meaning });
      setScore((s) => ({ ...s, total: s.total + 1 }));
    }
    setTimeout(() => {
      if (qIdx + 1 >= sceneItems.length) {
        setDone(true);
      } else {
        setQIdx((q) => q + 1);
      }
    }, 900);
  };
  const nextScene = () => {
    const next = (sceneIdx + 1) % playableScenes.length;
    setSceneIdx(next);
    setQIdx(0);
    setSelected(null);
    setDone(false);
  };
  if (playableScenes.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Không đủ dữ liệu cảnh. Vui lòng chọn phần khác." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: onBack, children: "← Quay lại" })
    ] });
  }
  if (done) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-picture-vocab n4-pv-ready", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pv-icon", children: scene.emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-pv-title", children: scene.titleVi }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-pv-desc", children: [
        "Đúng ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: score.correct }),
        " / ",
        score.total,
        " từ trong cảnh này!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: nextScene, children: "➡ Cảnh tiếp theo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: onBack, children: "← Chọn chế độ khác" })
      ] })
    ] });
  }
  if (!current) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-picture-vocab", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pv-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: onBack, children: "←" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-pv-scene-label", children: [
        scene.emoji,
        " ",
        scene.titleVi
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-pv-progress", children: [
        qIdx + 1,
        "/",
        sceneItems.length
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pv-card n4-pv-scene-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pv-emoji", style: { fontSize: "3rem" }, children: scene.emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-pv-scene-prompt", children: "Tìm từ trong cảnh này:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-pv-meaning", children: current.meaning }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-btn n4-btn-ghost n4-btn-sm",
          onClick: () => speakJP(current.word),
          children: "🔊 Nghe"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScaffoldingLayer,
      {
        currentItem: current,
        text: (current == null ? void 0 : current.word) || "",
        toolbarConfig: { hint: true, reveal: false, speak: true, bookmark: true, lookup: true, drawer: true }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pv-options", children: options.map((opt) => {
      let cls = "n4-pv-opt";
      if (selected !== null) {
        if (opt.word === current.word) cls += " n4-pv-opt-correct";
        else if (opt.word === selected) cls += " n4-pv-opt-wrong";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: cls, onClick: () => handlePick(opt), children: [
        opt.word,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-pv-opt-reading", children: opt.reading })
      ] }, opt.word);
    }) }),
    selected !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-pv-feedback ${selected === current.word ? "correct" : "wrong"}`, children: selected === current.word ? "✅ Chính xác!" : `❌ Đúng là: ${current.word}（${current.reading}）` })
  ] });
}
function PictureVocabMode({ items, subMode: initialSubMode = "picture" }) {
  const [subMode, setSubMode] = reactExports.useState(initialSubMode);
  const { onCorrect, onWrong } = useScoreEngine();
  const [phase, setPhase] = reactExports.useState("ready");
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [questions, setQuestions] = reactExports.useState([]);
  const [selected, setSelected] = reactExports.useState(null);
  const [score, setScore] = reactExports.useState({ correct: 0, wrong: 0 });
  const answerLockRef = reactExports.useRef(false);
  const emojiPool = reactExports.useMemo(
    () => filterEmojiItems(items || []),
    [items]
  );
  const allItems = items || [];
  const buildQuestions = reactExports.useCallback(() => {
    const pool = emojiPool.length >= OPT_COUNT$1 ? emojiPool : allItems;
    const shuffled = shuffleArray$1([...pool]);
    return shuffled.slice(0, Math.min(15, shuffled.length)).map((item2) => {
      const others = pool.filter((x) => x !== item2);
      const opts2 = shuffleArray$1([item2, ...shuffleArray$1(others).slice(0, OPT_COUNT$1 - 1)]);
      return { item: item2, opts: opts2 };
    });
  }, [emojiPool, allItems]);
  const startGame = reactExports.useCallback(() => {
    const qs = buildQuestions();
    setQuestions(qs);
    setQIdx(0);
    setSelected(null);
    setScore({ correct: 0, wrong: 0 });
    answerLockRef.current = false;
    setPhase("playing");
  }, [buildQuestions]);
  const current = phase === "playing" ? questions[qIdx] : null;
  const isLast = qIdx >= questions.length - 1;
  const handleAnswer = reactExports.useCallback(
    (opt) => {
      if (selected !== null || phase !== "playing" || !current || answerLockRef.current) return;
      answerLockRef.current = true;
      const isCorrect = opt === current.item;
      setSelected(opt);
      if (isCorrect) {
        setScore((s) => ({ ...s, correct: s.correct + 1 }));
        onCorrect(current.item);
        speakJP(current.item.word || current.item.kanji || "");
      } else {
        setScore((s) => ({ ...s, wrong: s.wrong + 1 }));
        onWrong(current.item);
      }
    },
    [selected, phase, current, onCorrect, onWrong]
  );
  const handleNext = () => {
    answerLockRef.current = false;
    if (isLast) {
      setPhase("done");
    } else {
      setQIdx((q) => q + 1);
      setSelected(null);
    }
  };
  if (!allItems || allItems.length < OPT_COUNT$1) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mode-empty-icon", children: "🖼️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Không đủ từ để chơi. Hãy chọn phần có nhiều từ hơn." })
    ] });
  }
  if (subMode === "scene") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SceneMode,
      {
        items: allItems,
        onCorrect,
        onWrong,
        onBack: () => setSubMode("picture")
      }
    );
  }
  if (phase === "ready") {
    const emojiCount = emojiPool.length;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-picture-vocab n4-pv-ready", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pv-icon", children: "🖼️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-pv-title", children: "Từ vựng bằng hình" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, justifyContent: "center", margin: "8px 0 12px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `n4-btn n4-btn-sm ${subMode === "picture" ? "n4-btn-primary" : "n4-btn-ghost"}`,
            onClick: () => setSubMode("picture"),
            children: "🖼️ Hình ảnh"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `n4-btn n4-btn-sm ${subMode === "scene" ? "n4-btn-primary" : "n4-btn-ghost"}`,
            onClick: () => setSubMode("scene"),
            children: "🎭 Cảnh tình huống"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-pv-desc", children: "Xem hình ảnh / emoji → chọn từ tiếng Nhật đúng!" }),
      emojiCount > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-pv-info", children: [
        "Tìm thấy ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: emojiCount }),
        " từ có hình trong phần này."
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-pv-info", children: "Chế độ dự phòng: sử dụng tất cả từ trong phần." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-pv-start-btn", onClick: startGame, children: "▶ Bắt đầu" })
    ] });
  }
  if (phase === "done") {
    const total = score.correct + score.wrong;
    const pct = total > 0 ? Math.round(score.correct / total * 100) : 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-picture-vocab n4-pv-done", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pv-icon", children: "🎉" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-pv-title", children: "Xong!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pv-result-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-pv-correct", children: [
          "✅ ",
          score.correct
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-pv-wrong", children: [
          "❌ ",
          score.wrong
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-pv-pct", children: [
          pct,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", style: { marginTop: 16 }, onClick: startGame, children: "🔄 Chơi lại" })
    ] });
  }
  if (!current) return null;
  const { item, opts } = current;
  const emoji = getEmoji(item);
  const answered = selected !== null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-picture-vocab n4-pv-playing", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pv-progress", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "n4-pv-progress-fill",
        style: { width: `${(qIdx + 1) / questions.length * 100}%` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pv-counter", children: [
      qIdx + 1,
      " / ",
      questions.length
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pv-visual", children: [
      emoji ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-pv-emoji", children: emoji }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-pv-emoji", children: "📖" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pv-meaning", children: item.meaning || "" }),
      item.reading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pv-reading", children: item.reading })
    ] }),
    !answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
      AIHintButton,
      {
        question: emoji || item.meaning || "",
        options: opts.map((o) => o.word || o.kanji || ""),
        correctAnswer: item.word || item.kanji || "",
        itemInfo: `${item.word || item.kanji || ""} (${item.reading || ""}) — ${item.meaning || ""}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pv-options", children: opts.map((opt, i) => {
      let cls = "n4-pv-opt";
      if (answered) {
        if (opt === item) cls += " correct";
        else if (opt === selected) cls += " wrong";
        else cls += " dimmed";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: cls,
          onClick: () => handleAnswer(opt),
          disabled: answered,
          children: [
            opt.word || opt.kanji || "?",
            answered && opt === item && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-pv-opt-reading", children: [
              " (",
              opt.reading,
              ")"
            ] })
          ]
        },
        i
      );
    }) }),
    answered && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-pv-answer-fb${selected === item ? " correct" : " wrong"}`, children: [
      selected === item ? "✓ Đúng!" : `✗ Sai! Đáp án: ${item.word || item.kanji || ""}`,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AIExplainButton,
        {
          question: emoji || item.meaning || "",
          answer: item.word || item.kanji || "",
          userAnswer: (selected == null ? void 0 : selected.word) || (selected == null ? void 0 : selected.kanji) || "",
          isCorrect: selected === item,
          itemInfo: `${item.word || item.kanji || ""} (${item.reading || ""}) — ${item.meaning || ""}`
        }
      )
    ] }),
    answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-secondary n4-pv-next-btn",
        onClick: handleNext,
        children: isLast ? "Xem kết quả ▶" : "Tiếp theo ▶"
      }
    )
  ] });
}
const MAX_QUESTIONS$1 = 15;
function buildPairsFromItems(items) {
  const byPrefix = {};
  for (const it of items) {
    const r = it.reading || "";
    if (r.length < 2) continue;
    const prefix = r.slice(0, 2);
    if (!byPrefix[prefix]) byPrefix[prefix] = [];
    byPrefix[prefix].push(it);
  }
  const pairs = [];
  for (const group of Object.values(byPrefix)) {
    if (group.length < 2) continue;
    for (let i = 0; i < group.length - 1 && pairs.length < 20; i++) {
      const a = group[i], b = group[i + 1];
      if (a.word === b.word) continue;
      pairs.push({
        a: a.word,
        b: b.word,
        readingA: a.reading,
        readingB: b.reading,
        meaningA: a.meaning,
        meaningB: b.meaning,
        hint: `${a.reading} ≠ ${b.reading}`
      });
    }
  }
  return pairs;
}
function MinimalPairMode({ items }) {
  const { onCorrect, onWrong } = useScoreEngine();
  const allPairs = reactExports.useMemo(() => {
    const dynamic = buildPairsFromItems(items || []);
    return shuffleArray$1([...MINIMAL_PAIRS, ...dynamic]).slice(0, MAX_QUESTIONS$1);
  }, [items]);
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [targetIsA, setTargetIsA] = reactExports.useState(true);
  const [score, setScore] = reactExports.useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = reactExports.useState(false);
  const [done, setDone] = reactExports.useState(false);
  const pair = allPairs[qIdx];
  const setupQuestion = reactExports.useCallback((idx) => {
    const p = allPairs[idx];
    if (!p) {
      setDone(true);
      return;
    }
    const isA = Math.random() < 0.5;
    setTargetIsA(isA);
    setSelected(null);
    setShowHint(false);
    speakJP(isA ? p.a : p.b);
  }, [allPairs]);
  reactExports.useEffect(() => {
    if (allPairs.length > 0) setupQuestion(0);
  }, [allPairs, setupQuestion]);
  const handlePick = (pickedA) => {
    if (selected !== null) return;
    const correct = pickedA === targetIsA;
    setSelected(pickedA ? "a" : "b");
    const targetWord = targetIsA ? pair.a : pair.b;
    const item = { word: targetWord, reading: targetIsA ? pair.readingA : pair.readingB, meaning: targetIsA ? pair.meaningA : pair.meaningB };
    if (correct) {
      playSFX("correct");
      onCorrect(item);
      setScore((s) => ({ correct: s.correct + 1, total: s.total + 1 }));
    } else {
      playSFX("wrong");
      onWrong(item);
      setScore((s) => ({ ...s, total: s.total + 1 }));
    }
    setTimeout(() => {
      const next = qIdx + 1;
      if (next >= allPairs.length) {
        setDone(true);
      } else {
        setQIdx(next);
        setupQuestion(next);
      }
    }, 1200);
  };
  const replayAudio = () => {
    if (!pair) return;
    speakJP(targetIsA ? pair.a : pair.b);
  };
  if (!allPairs.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mode-empty-icon", children: "👂" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Không đủ cặp từ gần âm để chơi." })
    ] });
  }
  if (done) {
    const accuracy = score.total > 0 ? Math.round(score.correct / score.total * 100) : 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-picture-vocab n4-pv-ready", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pv-icon", children: "👂" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-pv-title", children: "Kết quả Minimal Pair" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sort-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✅ Đúng:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: score.correct })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📊 Tổng:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: score.total })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🎯 Chính xác:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            accuracy,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: () => {
        setQIdx(0);
        setDone(false);
        setScore({ correct: 0, total: 0 });
        setupQuestion(0);
      }, children: "🔄 Chơi lại" })
    ] });
  }
  if (!pair) return null;
  const correctChoice = targetIsA ? "a" : "b";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-picture-vocab", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pv-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-pv-progress", children: [
        qIdx + 1,
        "/",
        allPairs.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "✅ ",
        score.correct,
        " / ",
        score.total
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pv-card", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "1rem", marginBottom: 8, color: "var(--n4-muted)" }, children: "Nghe từ phát ra và chọn đúng từ:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: replayAudio, style: { fontSize: "2rem", margin: "8px 0" }, children: "🔊" }),
      !showHint && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setShowHint(true), style: { display: "block", margin: "4px auto" }, children: "💡 Gợi ý" }),
      showHint && pair.hint && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-muted)", fontSize: "0.85rem" }, children: pair.hint })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScaffoldingLayer, { text: targetIsA ? pair.a : pair.b, minimal: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pv-options", style: { display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 16 }, children: [
      { key: "a", word: pair.a, reading: pair.readingA, meaning: pair.meaningA },
      { key: "b", word: pair.b, reading: pair.readingB, meaning: pair.meaningB }
    ].map((opt) => {
      let cls = "n4-pv-opt";
      if (selected !== null) {
        if (opt.key === correctChoice) cls += " n4-pv-opt-correct";
        else if (opt.key === selected) cls += " n4-pv-opt-wrong";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: cls,
          onClick: () => handlePick(opt.key === "a"),
          style: { minWidth: 120, padding: "12px 16px" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.3rem" }, children: opt.word }),
            selected !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { display: "block", fontSize: "0.8rem", marginTop: 4, color: "var(--n4-muted)" }, children: [
              opt.reading,
              " — ",
              opt.meaning
            ] })
          ]
        },
        opt.key
      );
    }) }),
    selected !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-pv-feedback ${selected === correctChoice ? "correct" : "wrong"}`, children: selected === correctChoice ? "✅ Chính xác!" : `❌ Đúng là: ${targetIsA ? pair.a : pair.b}（${targetIsA ? pair.readingA : pair.readingB}）— ${targetIsA ? pair.meaningA : pair.meaningB}` })
  ] });
}
const OPT_COUNT = 4;
function lastKana(reading) {
  if (!reading) return "";
  const clean = reading.replace(/[ーっッ]$/, "");
  return clean.slice(-1);
}
function firstKana(reading) {
  return (reading || "").charAt(0);
}
function endsWithN(reading) {
  return lastKana(reading) === "ん";
}
function WordChainMode({ items }) {
  const { onCorrect, onWrong } = useScoreEngine();
  const { byFirst, allReadings } = reactExports.useMemo(() => {
    const map = {};
    const readings = /* @__PURE__ */ new Set();
    for (const it of items || []) {
      const r = it.reading || "";
      if (r.length < 2) continue;
      if (endsWithN(r)) continue;
      readings.add(r);
      const fk = firstKana(r);
      if (!map[fk]) map[fk] = [];
      map[fk].push(it);
    }
    return { byFirst: map, allReadings: readings };
  }, [items]);
  const [chain, setChain] = reactExports.useState([]);
  const [currentKana, setCurrentKana] = reactExports.useState("");
  const [options, setOptions] = reactExports.useState([]);
  const [selected, setSelected] = reactExports.useState(null);
  const [gameOver, setGameOver] = reactExports.useState(false);
  const [started, setStarted] = reactExports.useState(false);
  const usedRef = React.useRef(/* @__PURE__ */ new Set());
  const startGame = reactExports.useCallback(() => {
    usedRef.current = /* @__PURE__ */ new Set();
    const pool = (items || []).filter((it) => (it.reading || "").length >= 2 && !endsWithN(it.reading));
    if (pool.length < OPT_COUNT) return;
    const first = pool[Math.floor(Math.random() * pool.length)];
    usedRef.current.add(first.reading);
    const lk = lastKana(first.reading);
    setChain([{ word: first.word, reading: first.reading, meaning: first.meaning }]);
    setCurrentKana(lk);
    setSelected(null);
    setGameOver(false);
    setStarted(true);
    speakJP(first.word);
    buildOptions(lk, usedRef.current);
  }, [items]);
  const buildOptions = reactExports.useCallback((kana, used) => {
    const candidates = (byFirst[kana] || []).filter((it) => !used.has(it.reading));
    if (candidates.length === 0) {
      setOptions([]);
      setGameOver(true);
      return;
    }
    const correct = candidates[Math.floor(Math.random() * candidates.length)];
    const wrongPool = (items || []).filter(
      (it) => firstKana(it.reading) !== kana && !used.has(it.reading) && (it.reading || "").length >= 2
    );
    const wrong = shuffleArray$1(wrongPool).slice(0, OPT_COUNT - 1);
    setOptions(shuffleArray$1([correct, ...wrong]));
  }, [byFirst, items]);
  const handlePick = (opt) => {
    if (selected !== null) return;
    const fk = firstKana(opt.reading);
    const correct = fk === currentKana;
    setSelected(opt.reading);
    if (correct) {
      playSFX("correct");
      onCorrect(opt);
      speakJP(opt.word);
      const lk = lastKana(opt.reading);
      usedRef.current.add(opt.reading);
      setTimeout(() => {
        setChain((c) => [...c, { word: opt.word, reading: opt.reading, meaning: opt.meaning }]);
        setCurrentKana(lk);
        setSelected(null);
        buildOptions(lk, usedRef.current);
      }, 600);
    } else {
      playSFX("wrong");
      onWrong(opt);
      setTimeout(() => {
        setGameOver(true);
      }, 800);
    }
  };
  const availableWords = Object.values(byFirst).flat().length;
  if (!items || availableWords < OPT_COUNT * 2) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mode-empty-icon", children: "🔗" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: 'Không đủ từ để chơi Word Chain. Hãy chọn "Tất cả" phần từ vựng.' })
    ] });
  }
  if (!started) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-picture-vocab n4-pv-ready", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pv-icon", children: "🔗" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-pv-title", children: "Nối từ しりとり" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-pv-desc", children: [
        "Nối chuỗi từ theo kiểu しりとり: chọn từ ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "bắt đầu" }),
        " bằng ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "âm cuối" }),
        " của từ trước!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-pv-info", children: [
        "Có ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: availableWords }),
        " từ có thể nối."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: startGame, children: "▶ Bắt đầu" })
    ] });
  }
  if (gameOver) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-picture-vocab n4-pv-ready", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pv-icon", children: chain.length >= 10 ? "🏆" : chain.length >= 5 ? "⭐" : "💪" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "n4-pv-title", children: [
        "Chuỗi: ",
        chain.length,
        " từ!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { maxHeight: 200, overflow: "auto", margin: "8px 0", textAlign: "left" }, children: chain.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "2px 0", fontSize: "0.9rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: w.word }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-muted)", marginLeft: 6 }, children: w.reading }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "var(--n4-muted)", marginLeft: 6 }, children: [
          "— ",
          w.meaning
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 8, justifyContent: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: startGame, children: "🔄 Chơi lại" }) })
    ] });
  }
  const lastWord = chain[chain.length - 1];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-picture-vocab", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pv-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "🔗 Chuỗi: ",
        chain.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(lastWord.word), children: "🔊" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pv-card", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.5rem", fontWeight: 700 }, children: lastWord.word }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "var(--n4-muted)", margin: "4px 0" }, children: [
        lastWord.reading,
        " — ",
        lastWord.meaning
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 12, fontSize: "1.2rem" }, children: [
        "Chọn từ bắt đầu bằng: ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { style: { fontSize: "1.6rem", color: "var(--n4-accent)" }, children: [
          "「",
          currentKana,
          "」"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScaffoldingLayer, { text: lastWord.word, minimal: true }),
    options.length === 0 && !gameOver ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", margin: 16, color: "var(--n4-muted)" }, children: "Hết từ có thể nối! Tuyệt vời! 🎉" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pv-options", style: { display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: 16 }, children: options.map((opt) => {
      let cls = "n4-pv-opt";
      if (selected !== null) {
        const isCorrect = firstKana(opt.reading) === currentKana;
        if (isCorrect) cls += " n4-pv-opt-correct";
        else if (opt.reading === selected) cls += " n4-pv-opt-wrong";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: cls,
          onClick: () => handlePick(opt),
          style: { minWidth: 100, padding: "10px 14px" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.2rem" }, children: opt.word }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { display: "block", fontSize: "0.8rem", color: "var(--n4-muted)" }, children: opt.reading })
          ]
        },
        opt.reading + opt.word
      );
    }) })
  ] });
}
const PASSAGES = [
  {
    id: "p1",
    text: "毎朝{0}に起きます。{1}を浴びてから、朝ごはんを{2}ます。朝ごはんはパンと{3}です。",
    blanks: [
      { answer: "7時", meaning: "7 giờ" },
      { answer: "シャワー", meaning: "tắm vòi" },
      { answer: "食べ", meaning: "ăn" },
      { answer: "コーヒー", meaning: "cà phê" }
    ]
  },
  {
    id: "p2",
    text: "先週の{0}に友達と{1}に行きました。天気がよかったので{2}をしました。とても{3}かったです。",
    blanks: [
      { answer: "日曜日", meaning: "chủ nhật" },
      { answer: "公園", meaning: "công viên" },
      { answer: "散歩", meaning: "đi dạo" },
      { answer: "楽し", meaning: "vui" }
    ]
  },
  {
    id: "p3",
    text: "来月、{0}に旅行します。{1}で東京から大阪まで行きます。大阪で{2}を食べたいです。{3}がとても楽しみです。",
    blanks: [
      { answer: "日本", meaning: "Nhật Bản" },
      { answer: "新幹線", meaning: "tàu cao tốc" },
      { answer: "たこ焼き", meaning: "takoyaki" },
      { answer: "旅行", meaning: "du lịch" }
    ]
  },
  {
    id: "p4",
    text: "私の{0}はとても静かです。{1}の近くに大きい{2}があります。毎日そこで{3}を読みます。",
    blanks: [
      { answer: "アパート", meaning: "căn hộ" },
      { answer: "家", meaning: "nhà" },
      { answer: "図書館", meaning: "thư viện" },
      { answer: "本", meaning: "sách" }
    ]
  },
  {
    id: "p5",
    text: "{0}は日本語の{1}があります。今日は{2}を20個覚えなければなりません。{3}は難しいです。",
    blanks: [
      { answer: "明日", meaning: "ngày mai" },
      { answer: "試験", meaning: "kỳ thi" },
      { answer: "漢字", meaning: "kanji" },
      { answer: "勉強", meaning: "học" }
    ]
  },
  {
    id: "p6",
    text: "駅の前に新しい{0}ができました。二階に{1}があって、三階に{2}があります。{3}にたくさんの人が来ます。",
    blanks: [
      { answer: "デパート", meaning: "trung tâm thương mại" },
      { answer: "レストラン", meaning: "nhà hàng" },
      { answer: "映画館", meaning: "rạp chiếu phim" },
      { answer: "毎日", meaning: "hàng ngày" }
    ]
  },
  {
    id: "p7",
    text: "田中さんは{0}で働いています。毎朝{1}時に出かけて、{2}時に帰ります。{3}はとても忙しいです。",
    blanks: [
      { answer: "会社", meaning: "công ty" },
      { answer: "8", meaning: "8" },
      { answer: "7", meaning: "7" },
      { answer: "仕事", meaning: "công việc" }
    ]
  },
  {
    id: "p8",
    text: "日本の{0}は四つあります。{1}は暑いですが、{2}は寒いです。{3}には桜がきれいに咲きます。",
    blanks: [
      { answer: "季節", meaning: "mùa" },
      { answer: "夏", meaning: "mùa hè" },
      { answer: "冬", meaning: "mùa đông" },
      { answer: "春", meaning: "mùa xuân" }
    ]
  },
  {
    id: "p9",
    text: "先生に{0}を書きました。来週{1}があるので、質問が{2}つあります。先生は{3}に答えてくれました。",
    blanks: [
      { answer: "メール", meaning: "email" },
      { answer: "テスト", meaning: "bài kiểm tra" },
      { answer: "三", meaning: "3" },
      { answer: "丁寧", meaning: "lịch sự" }
    ]
  },
  {
    id: "p10",
    text: "週末に{0}でパーティーをします。{1}を10人招待しました。{2}を作って、{3}も買います。",
    blanks: [
      { answer: "家", meaning: "nhà" },
      { answer: "友達", meaning: "bạn bè" },
      { answer: "料理", meaning: "món ăn" },
      { answer: "飲み物", meaning: "đồ uống" }
    ]
  },
  {
    id: "p11",
    text: "{0}から日本に来ました。最初は{1}が分かりませんでしたが、毎日{2}して、今は少し{3}ができます。",
    blanks: [
      { answer: "ベトナム", meaning: "Việt Nam" },
      { answer: "日本語", meaning: "tiếng Nhật" },
      { answer: "練習", meaning: "luyện tập" },
      { answer: "会話", meaning: "hội thoại" }
    ]
  },
  {
    id: "p12",
    text: "病院に{0}に行きました。{1}が痛くて、{2}もありました。{3}に薬をもらいました。",
    blanks: [
      { answer: "検査", meaning: "khám" },
      { answer: "頭", meaning: "đầu" },
      { answer: "熱", meaning: "sốt" },
      { answer: "医者", meaning: "bác sĩ" }
    ]
  }
];
function buildDistractors(correctAnswer, allAnswers, vocabPool) {
  const wrongs = /* @__PURE__ */ new Set();
  for (const a of allAnswers) {
    if (a !== correctAnswer) wrongs.add(a);
  }
  for (const v of shuffleArray$1(vocabPool).slice(0, 10)) {
    const w = v.word || v.kanji || "";
    if (w && w !== correctAnswer) wrongs.add(w);
  }
  return shuffleArray$1([...wrongs]).slice(0, 3);
}
function ClozePassageMode({ items = [] }) {
  var _a;
  const scoring = useScoreEngine();
  const allBlanks = reactExports.useMemo(() => PASSAGES.flatMap((p) => p.blanks.map((b) => b.answer)), []);
  const [passIdx, setPassIdx] = reactExports.useState(0);
  const [blankIdx, setBlankIdx] = reactExports.useState(0);
  const [answers, setAnswers] = reactExports.useState({});
  const [feedback, setFeedback] = reactExports.useState(null);
  const [done, setDone] = reactExports.useState(false);
  const { gameKey, restart, lockRef } = useGameRestart(scoring, {
    onReset: () => {
      setPassIdx(0);
      setBlankIdx(0);
      setAnswers({});
      setFeedback(null);
      setDone(false);
    }
  });
  const passages = reactExports.useMemo(() => shuffleArray$1([...PASSAGES]).slice(0, 3), [gameKey]);
  const currentPassage = passages[passIdx];
  const currentBlank = (_a = currentPassage == null ? void 0 : currentPassage.blanks) == null ? void 0 : _a[blankIdx];
  const options = reactExports.useMemo(() => {
    if (!currentBlank) return [];
    const wrongs = buildDistractors(currentBlank.answer, allBlanks, items);
    return shuffleArray$1([currentBlank.answer, ...wrongs]);
  }, [currentBlank, allBlanks, items]);
  const renderPassage = reactExports.useCallback((passage, pIdx) => {
    if (!passage) return null;
    const parts = passage.text.split(/\{(\d+)\}/);
    return parts.map((part, i) => {
      if (i % 2 === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: part }, i);
      const bIdx = parseInt(part, 10);
      const key = `${pIdx}-${bIdx}`;
      const answered = answers[key];
      const isActive = pIdx === passIdx && bIdx === blankIdx && !done;
      const blank = passage.blanks[bIdx];
      if (answered) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-cloze-filled", title: blank == null ? void 0 : blank.meaning, children: answered }, i);
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-cloze-blank ${isActive ? "active" : ""}`, children: isActive ? `__(${blank == null ? void 0 : blank.meaning})__` : "____" }, i);
    });
  }, [answers, passIdx, blankIdx, done]);
  const handleSelect = reactExports.useCallback((opt) => {
    var _a2, _b;
    if (lockRef.current || !currentBlank) return;
    lockRef.current = true;
    const isCorrect = opt === currentBlank.answer;
    const key = `${passIdx}-${blankIdx}`;
    if (isCorrect) {
      setAnswers((prev) => ({ ...prev, [key]: opt }));
      (_a2 = scoring.recordCorrect) == null ? void 0 : _a2.call(scoring, { word: currentBlank.answer });
      playSFX("correct");
    } else {
      setAnswers((prev) => ({ ...prev, [key]: currentBlank.answer }));
      (_b = scoring.recordWrong) == null ? void 0 : _b.call(scoring, { word: currentBlank.answer });
      playSFX("wrong");
    }
    setFeedback({ correct: isCorrect, answer: currentBlank.answer, selected: opt, meaning: currentBlank.meaning });
    setTimeout(() => {
      setFeedback(null);
      lockRef.current = false;
      const nextBlank = blankIdx + 1;
      if (nextBlank < currentPassage.blanks.length) {
        setBlankIdx(nextBlank);
      } else {
        const nextPass = passIdx + 1;
        if (nextPass < passages.length) {
          setPassIdx(nextPass);
          setBlankIdx(0);
        } else {
          setDone(true);
        }
      }
    }, 1200);
  }, [currentBlank, passIdx, blankIdx, currentPassage, passages, scoring]);
  if (!passages.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có đoạn văn. Vui lòng thử lại." })
    ] });
  }
  if (done) {
    const totalBlanks = passages.reduce((s, p) => s + p.blanks.length, 0);
    const correct = scoring.score || 0;
    const pct = totalBlanks > 0 ? Math.round(correct / totalBlanks * 100) : 0;
    const emoji = pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "💪";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-emoji", children: emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-result-title", children: pct >= 80 ? "Xuất sắc!" : pct >= 50 ? "Khá tốt!" : "Cố lên!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Đoạn văn" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value", children: passages.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Đúng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value success", children: correct })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Tổng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value", children: totalBlanks })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Chính xác" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stat-value", children: [
            pct,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 16, textAlign: "left" }, children: passages.map((p, pi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 12, padding: "10px 12px", borderRadius: 8, background: "var(--n4-bg-tertiary, rgba(0,0,0,0.04))", lineHeight: 1.8, fontSize: "1rem" }, children: [
        renderPassage(p, pi),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(p.text.replace(/\{\d+\}/g, (m) => {
          var _a2;
          return ((_a2 = p.blanks[parseInt(m.slice(1, -1), 10)]) == null ? void 0 : _a2.answer) || "";
        })), style: { marginTop: 6 }, children: "🔊 Nghe" })
      ] }, p.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: restart, style: { width: "100%", marginTop: 12 }, children: "🔄 Làm lại" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-instruction", style: { marginBottom: 8 }, children: [
      "Đoạn ",
      passIdx + 1,
      "/",
      passages.length,
      " — Chỗ trống ",
      blankIdx + 1,
      "/",
      (currentPassage == null ? void 0 : currentPassage.blanks.length) || 0
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "14px 16px", borderRadius: 10, background: "var(--n4-bg-tertiary, rgba(0,0,0,0.04))", lineHeight: 2, fontSize: "1.05rem", marginBottom: 14 }, children: renderPassage(currentPassage, passIdx) }),
    currentBlank && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 10, fontSize: "0.9rem", opacity: 0.7 }, children: [
      "💡 Gợi ý: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: currentBlank.meaning })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScaffoldingLayer, { text: (currentBlank == null ? void 0 : currentBlank.answer) || "", minimal: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quiz-options", children: options.map((opt, idx) => {
      let cls = "n4-quiz-option";
      if (feedback) {
        if (opt === feedback.answer) cls += " correct";
        else if (opt === feedback.selected && !feedback.correct) cls += " wrong";
        cls += " answered";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: cls,
          onClick: () => handleSelect(opt),
          disabled: !!feedback,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-quiz-option-idx", children: idx + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: opt })
          ]
        },
        `${passIdx}-${blankIdx}-${idx}`
      );
    }) }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginTop: 8, padding: "8px 12px", borderRadius: 8, background: feedback.correct ? "rgba(74,222,128,0.15)" : "rgba(248,113,113,0.15)", fontSize: "0.92rem" }, children: feedback.correct ? "✅ Chính xác!" : `❌ Sai — Đáp án: ${feedback.answer} (${feedback.meaning})` })
  ] });
}
const COMPOUNDS = [
  { compound: "学校", reading: "がっこう", parts: ["学", "校"], meaning: "Trường học" },
  { compound: "先生", reading: "せんせい", parts: ["先", "生"], meaning: "Giáo viên" },
  { compound: "電車", reading: "でんしゃ", parts: ["電", "車"], meaning: "Tàu điện" },
  { compound: "天気", reading: "てんき", parts: ["天", "気"], meaning: "Thời tiết" },
  { compound: "病院", reading: "びょういん", parts: ["病", "院"], meaning: "Bệnh viện" },
  { compound: "図書", reading: "としょ", parts: ["図", "書"], meaning: "Sách vở" },
  { compound: "新聞", reading: "しんぶん", parts: ["新", "聞"], meaning: "Báo" },
  { compound: "会社", reading: "かいしゃ", parts: ["会", "社"], meaning: "Công ty" },
  { compound: "食堂", reading: "しょくどう", parts: ["食", "堂"], meaning: "Căng-tin" },
  { compound: "映画", reading: "えいが", parts: ["映", "画"], meaning: "Phim" },
  { compound: "銀行", reading: "ぎんこう", parts: ["銀", "行"], meaning: "Ngân hàng" },
  { compound: "大学", reading: "だいがく", parts: ["大", "学"], meaning: "Đại học" },
  { compound: "空港", reading: "くうこう", parts: ["空", "港"], meaning: "Sân bay" },
  { compound: "家族", reading: "かぞく", parts: ["家", "族"], meaning: "Gia đình" },
  { compound: "問題", reading: "もんだい", parts: ["問", "題"], meaning: "Câu hỏi/Vấn đề" },
  { compound: "地図", reading: "ちず", parts: ["地", "図"], meaning: "Bản đồ" },
  { compound: "自転", reading: "じてん", parts: ["自", "転"], meaning: "Tự xoay (自転車)" },
  { compound: "料理", reading: "りょうり", parts: ["料", "理"], meaning: "Nấu ăn" },
  { compound: "旅行", reading: "りょこう", parts: ["旅", "行"], meaning: "Du lịch" },
  { compound: "練習", reading: "れんしゅう", parts: ["練", "習"], meaning: "Luyện tập" },
  { compound: "勉強", reading: "べんきょう", parts: ["勉", "強"], meaning: "Học" },
  { compound: "説明", reading: "せつめい", parts: ["説", "明"], meaning: "Giải thích" },
  { compound: "注意", reading: "ちゅうい", parts: ["注", "意"], meaning: "Chú ý" },
  { compound: "準備", reading: "じゅんび", parts: ["準", "備"], meaning: "Chuẩn bị" },
  { compound: "質問", reading: "しつもん", parts: ["質", "問"], meaning: "Câu hỏi" },
  { compound: "心配", reading: "しんぱい", parts: ["心", "配"], meaning: "Lo lắng" },
  { compound: "特別", reading: "とくべつ", parts: ["特", "別"], meaning: "Đặc biệt" },
  { compound: "安全", reading: "あんぜん", parts: ["安", "全"], meaning: "An toàn" },
  { compound: "運動", reading: "うんどう", parts: ["運", "動"], meaning: "Vận động" },
  { compound: "交通", reading: "こうつう", parts: ["交", "通"], meaning: "Giao thông" },
  { compound: "教室", reading: "きょうしつ", parts: ["教", "室"], meaning: "Lớp học" },
  { compound: "授業", reading: "じゅぎょう", parts: ["授", "業"], meaning: "Tiết học" },
  { compound: "宿題", reading: "しゅくだい", parts: ["宿", "題"], meaning: "Bài tập" },
  { compound: "卒業", reading: "そつぎょう", parts: ["卒", "業"], meaning: "Tốt nghiệp" },
  { compound: "受験", reading: "じゅけん", parts: ["受", "験"], meaning: "Thi cử" },
  { compound: "結婚", reading: "けっこん", parts: ["結", "婚"], meaning: "Kết hôn" },
  { compound: "生活", reading: "せいかつ", parts: ["生", "活"], meaning: "Cuộc sống" },
  { compound: "約束", reading: "やくそく", parts: ["約", "束"], meaning: "Hứa hẹn" },
  { compound: "経験", reading: "けいけん", parts: ["経", "験"], meaning: "Kinh nghiệm" },
  { compound: "文化", reading: "ぶんか", parts: ["文", "化"], meaning: "Văn hóa" }
];
const MAX_QUESTIONS = 12;
function CompoundWordMode({ items = [] }) {
  const scoring = useScoreEngine();
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [selectedParts, setSelectedParts] = reactExports.useState([]);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [done, setDone] = reactExports.useState(false);
  const { gameKey, restart, lockRef } = useGameRestart(scoring, {
    onReset: () => {
      setQIdx(0);
      setSelectedParts([]);
      setFeedback(null);
      setDone(false);
    }
  });
  const pool = reactExports.useMemo(() => shuffleArray$1([...COMPOUNDS]).slice(0, MAX_QUESTIONS), [gameKey]);
  const allParts = reactExports.useMemo(() => {
    const set = /* @__PURE__ */ new Set();
    for (const c of COMPOUNDS) {
      set.add(c.parts[0]);
      set.add(c.parts[1]);
    }
    return [...set];
  }, []);
  const current = pool[qIdx];
  const gridOptions = reactExports.useMemo(() => {
    if (!current) return [];
    const correct = current.parts;
    const wrongs = shuffleArray$1(allParts.filter((k) => !correct.includes(k))).slice(0, 6);
    return shuffleArray$1([...correct, ...wrongs]);
  }, [current, allParts]);
  const handleSelect = reactExports.useCallback((kanji) => {
    var _a, _b;
    if (lockRef.current || !current) return;
    if (selectedParts.includes(kanji)) return;
    const next = [...selectedParts, kanji];
    setSelectedParts(next);
    if (next.length === 2) {
      lockRef.current = true;
      const formed = next.join("");
      const isCorrect = formed === current.compound || next[0] === current.parts[0] && next[1] === current.parts[1];
      if (isCorrect) {
        (_a = scoring.recordCorrect) == null ? void 0 : _a.call(scoring, { word: current.compound });
        playSFX("correct");
        speakJP(current.reading);
      } else {
        (_b = scoring.recordWrong) == null ? void 0 : _b.call(scoring, { word: current.compound });
        playSFX("wrong");
      }
      setFeedback({ correct: isCorrect, formed, answer: current.compound, reading: current.reading, meaning: current.meaning });
      setTimeout(() => {
        lockRef.current = false;
        setSelectedParts([]);
        setFeedback(null);
        if (qIdx + 1 >= pool.length) {
          setDone(true);
        } else {
          setQIdx((q) => q + 1);
        }
      }, 1500);
    }
  }, [selectedParts, current, pool, qIdx, scoring]);
  if (done) {
    const pct = pool.length > 0 ? Math.round((scoring.score || 0) / pool.length * 100) : 0;
    const emoji = pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "💪";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-emoji", children: emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-result-title", children: pct >= 80 ? "Xuất sắc!" : pct >= 50 ? "Khá tốt!" : "Cố lên!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Đúng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value success", children: scoring.score || 0 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Tổng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value", children: pool.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Chính xác" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stat-value", children: [
            pct,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 16, textAlign: "left" }, children: pool.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 6, fontSize: "0.95rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.2rem", fontWeight: 700 }, children: c.compound }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { opacity: 0.7 }, children: c.reading }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "— ",
          c.meaning
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(c.reading), style: { marginLeft: "auto" }, children: "🔊" })
      ] }, c.compound)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: restart, style: { width: "100%", marginTop: 12 }, children: "🔄 Làm lại" })
    ] });
  }
  if (!current) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-instruction", style: { marginBottom: 8 }, children: [
      "Câu ",
      qIdx + 1,
      "/",
      pool.length,
      " — Ghép 2 chữ Hán thành từ ghép"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 14 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.95rem", opacity: 0.7, marginBottom: 4 }, children: "Tìm từ ghép có nghĩa:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.4rem", fontWeight: 700 }, children: current.meaning }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1rem", opacity: 0.7 }, children: current.reading })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "center", gap: 8, marginBottom: 14 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: 52,
        height: 52,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px dashed var(--n4-border, #ccc)",
        borderRadius: 8,
        fontSize: "1.5rem",
        fontWeight: 700,
        background: selectedParts[0] ? "var(--n4-accent-bg, rgba(79,70,229,0.1))" : "transparent"
      }, children: selectedParts[0] || "？" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", alignItems: "center", fontSize: "1.2rem", opacity: 0.5 }, children: "+" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: 52,
        height: 52,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px dashed var(--n4-border, #ccc)",
        borderRadius: 8,
        fontSize: "1.5rem",
        fontWeight: 700,
        background: selectedParts[1] ? "var(--n4-accent-bg, rgba(79,70,229,0.1))" : "transparent"
      }, children: selectedParts[1] || "？" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 14 }, children: gridOptions.map((kanji, idx) => {
      const isSelected = selectedParts.includes(kanji);
      let bg = "var(--n4-surface, #fff)";
      let border = "var(--n4-border, #ddd)";
      if (feedback) {
        if (current.parts.includes(kanji)) {
          bg = "rgba(74,222,128,0.2)";
          border = "#4ade80";
        } else if (isSelected) {
          bg = "rgba(248,113,113,0.2)";
          border = "#f87171";
        }
      } else if (isSelected) {
        bg = "var(--n4-accent-bg, rgba(79,70,229,0.15))";
        border = "var(--n4-accent, #4f46e5)";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          style: {
            padding: "12px 0",
            borderRadius: 8,
            fontSize: "1.4rem",
            fontWeight: 700,
            background: bg,
            border: `2px solid ${border}`,
            cursor: feedback ? "default" : "pointer",
            transition: "all 0.15s"
          },
          onClick: () => handleSelect(kanji),
          disabled: !!feedback || isSelected,
          children: kanji
        },
        `${qIdx}-${idx}`
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScaffoldingLayer, { text: (current == null ? void 0 : current.compound) || "", minimal: true }),
    selectedParts.length > 0 && !feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setSelectedParts([]), style: { width: "100%", marginBottom: 8 }, children: "↩ Chọn lại" }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: "10px 12px", borderRadius: 8, background: feedback.correct ? "rgba(74,222,128,0.15)" : "rgba(248,113,113,0.15)" }, children: feedback.correct ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "✅ Chính xác! ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: feedback.answer }),
      " (",
      feedback.reading,
      ") = ",
      feedback.meaning
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "❌ Sai — Bạn ghép: ",
      feedback.formed,
      " — Đáp án: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: feedback.answer }),
      " (",
      feedback.reading,
      ")"
    ] }) })
  ] });
}
const POOL_SIZE = 12;
const WIN_COUNT = 5;
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function buildRound(kanjiList, allVocab) {
  const usable = kanjiList.filter((k) => {
    var _a, _b;
    const fam = ((_b = (_a = content).getWordFamilyFor) == null ? void 0 : _b.call(_a, k.character)) || [];
    return fam.length >= WIN_COUNT;
  });
  if (!usable.length) return null;
  const target = usable[Math.floor(Math.random() * usable.length)];
  const family = content.getWordFamilyFor(target.character) || [];
  const correct = shuffleArray(family).slice(0, WIN_COUNT);
  const correctKeys = new Set(correct.map((v) => v.key));
  const distractorPool = (allVocab || []).filter(
    (v) => v && v.kind === "vocab" && !correctKeys.has(v.key) && typeof v.word === "string" && !v.word.includes(target.character)
  );
  const distractors = shuffleArray(distractorPool).slice(0, POOL_SIZE - WIN_COUNT);
  const pool = shuffleArray([...correct, ...distractors]);
  return { target, correct, pool, correctKeys };
}
function WordFamilyMode({ maxRounds = 8 }) {
  var _a, _b;
  const scoring = useScoreEngine();
  const { kanjiList, allVocab } = reactExports.useMemo(() => {
    var _a2, _b2;
    try {
      const all = ((_b2 = (_a2 = content).allItems) == null ? void 0 : _b2.call(_a2)) || [];
      return {
        kanjiList: all.filter((it) => it.kind === "kanji" && typeof it.character === "string"),
        allVocab: all.filter((it) => it.kind === "vocab")
      };
    } catch (e) {
      return { kanjiList: [], allVocab: [] };
    }
  }, []);
  const [round, setRound] = reactExports.useState(() => buildRound(kanjiList, allVocab));
  const [roundIdx, setRoundIdx] = reactExports.useState(0);
  const [collected, setCollected] = reactExports.useState(() => /* @__PURE__ */ new Set());
  const [wrong, setWrong] = reactExports.useState(() => /* @__PURE__ */ new Set());
  const [hintUsed, setHintUsed] = reactExports.useState(false);
  const [hintRevealed, setHintRevealed] = reactExports.useState(null);
  const [done, setDone] = reactExports.useState(false);
  const reshuffle = reactExports.useCallback(() => {
    setRound(buildRound(kanjiList, allVocab));
    setCollected(/* @__PURE__ */ new Set());
    setWrong(/* @__PURE__ */ new Set());
    setHintUsed(false);
    setHintRevealed(null);
  }, [kanjiList, allVocab]);
  const handleTap = reactExports.useCallback((item) => {
    var _a2, _b2;
    if (!round || done) return;
    if (collected.has(item.key)) return;
    if (round.correctKeys.has(item.key)) {
      const next = new Set(collected);
      next.add(item.key);
      setCollected(next);
      (_a2 = scoring.recordCorrect) == null ? void 0 : _a2.call(scoring, item);
      playSFX("correct");
      speakJP(item.word || "");
      if (next.size >= WIN_COUNT) {
        setTimeout(() => {
          if (roundIdx + 1 >= maxRounds) {
            setDone(true);
          } else {
            setRoundIdx((i) => i + 1);
            reshuffle();
          }
        }, 900);
      }
    } else {
      setWrong((prev) => {
        const next = new Set(prev);
        next.add(item.key);
        return next;
      });
      (_b2 = scoring.recordWrong) == null ? void 0 : _b2.call(scoring, item);
      playSFX("wrong");
      setTimeout(() => {
        setWrong((prev) => {
          const next = new Set(prev);
          next.delete(item.key);
          return next;
        });
      }, 900);
    }
  }, [round, collected, done, roundIdx, maxRounds, reshuffle, scoring]);
  const handleHint = reactExports.useCallback(() => {
    if (!round || hintUsed) return;
    const uncollected = round.correct.filter((v) => !collected.has(v.key));
    if (!uncollected.length) return;
    const pick = uncollected[Math.floor(Math.random() * uncollected.length)];
    setHintRevealed(pick.key);
    setHintUsed(true);
  }, [round, hintUsed, collected]);
  const handleRestart = reactExports.useCallback(() => {
    var _a2;
    setRoundIdx(0);
    setDone(false);
    reshuffle();
    (_a2 = scoring.reset) == null ? void 0 : _a2.call(scoring);
  }, [reshuffle, scoring]);
  if (!round) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "👪" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có kanji với họ từ đầy đủ. Hãy thử lại sau khi content khởi động xong." })
    ] });
  }
  if (done) {
    const pct = scoring.total > 0 ? scoring.accuracy : 0;
    const emoji = pct >= 80 ? "👪🏆" : pct >= 50 ? "👍" : "💪";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-emoji", children: emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-result-title", children: pct >= 80 ? "Họ từ vững vàng!" : pct >= 50 ? "Khá lắm!" : "Cần luyện thêm!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Đúng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value success", children: scoring.score })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Tổng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value", children: scoring.total })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Chính xác" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stat-value", children: [
            pct,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: handleRestart, style: { width: "100%", marginTop: 12 }, children: "🔄 Chơi lại" })
    ] });
  }
  const { target, pool } = round;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quiz-instruction", style: { marginBottom: 8 }, children: [
      "👪 Vòng ",
      roundIdx + 1,
      "/",
      maxRounds,
      " — Gom họ từ (",
      collected.size,
      "/",
      WIN_COUNT,
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "14px 16px", marginBottom: 12, textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85rem", opacity: 0.7, marginBottom: 4 }, children: "Kanji mục tiêu:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "3.2rem", fontWeight: 700, lineHeight: 1.1 }, children: target.character }),
      target.hanviet && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.95rem", opacity: 0.8, marginTop: 4 }, children: [
        target.hanviet,
        " · ",
        target.meaning
      ] }),
      ((_a = target.onReadings) == null ? void 0 : _a[0]) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85rem", opacity: 0.6, marginTop: 2 }, children: [
        "音: ",
        target.onReadings.slice(0, 2).join(" / "),
        ((_b = target.kunReadings) == null ? void 0 : _b[0]) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "  ·  訓: ",
          target.kunReadings.slice(0, 2).join(" / ")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.9rem" }, children: [
        "Chọn ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: WIN_COUNT }),
        " từ có chứa ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: target.character }),
        ":"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "n4-btn n4-btn-ghost n4-btn-sm",
          onClick: handleHint,
          disabled: hintUsed,
          title: "Tiết lộ 1 từ đúng (-50% điểm mục đó)",
          children: [
            "💡 ",
            hintUsed ? "Đã dùng gợi ý" : "Gợi ý (1 lần)"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 8 }, children: pool.map((item) => {
      const isCollected = collected.has(item.key);
      const isWrong = wrong.has(item.key);
      const isHint = hintRevealed === item.key && !isCollected;
      let bg = "var(--n4-surface, #fff)";
      let border = "var(--n4-border, #ddd)";
      if (isCollected) {
        bg = "rgba(74,222,128,0.2)";
        border = "#4ade80";
      } else if (isWrong) {
        bg = "rgba(248,113,113,0.2)";
        border = "#f87171";
      } else if (isHint) {
        bg = "rgba(251,191,36,0.15)";
        border = "#fbbf24";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => handleTap(item),
          disabled: isCollected,
          style: {
            padding: "10px 8px",
            borderRadius: 10,
            background: bg,
            border: `2px solid ${border}`,
            cursor: isCollected ? "default" : "pointer",
            transition: "all 0.15s",
            textAlign: "center",
            minHeight: 60,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.05rem", fontWeight: 700 }, children: item.word }),
            item.reading && item.reading !== item.word && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.7rem", opacity: 0.65 }, children: item.reading }),
            isCollected && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.75rem", color: "#15803d" }, children: [
              "✓ ",
              item.meaning
            ] })
          ]
        },
        item.key
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScaffoldingLayer,
      {
        currentItem: target,
        text: target.character,
        toolbarConfig: { hint: false, reveal: false, speak: true, bookmark: true, lookup: true, drawer: true }
      }
    )
  ] });
}
const MODES = [
  // Primary 3 — always visible as tabs
  { id: "flashcard", label: "Thẻ lật", icon: "🃏" },
  { id: "quiz", label: "Trắc nghiệm", icon: "❓" },
  { id: "match", label: "Ghép đôi", icon: "🔗" },
  // Overflow — behind "⋯" button
  { id: "fill-blank", label: "Điền từ", icon: "✏️" },
  { id: "listening", label: "Nghe", icon: "🎧" },
  { id: "true-false", label: "Đúng/Sai", icon: "⚖️" },
  { id: "speed", label: "Tốc độ", icon: "⚡" },
  { id: "speed-run", label: "Gõ ninja", icon: "🥷" },
  { id: "category-sort", label: "Phân loại", icon: "🗂️" },
  { id: "bingo", label: "Lô tô", icon: "🎰" },
  { id: "picture", label: "Hình ảnh", icon: "🖼️" },
  { id: "minimal-pair", label: "Gần âm", icon: "👂" },
  { id: "word-chain", label: "Nối từ", icon: "🔗" },
  { id: "cloze-passage", label: "Đoạn văn", icon: "📄" },
  { id: "compound-word", label: "Từ ghép", icon: "🧩" },
  { id: "word-family", label: "Họ từ", icon: "👪" },
  { id: "match-drag", label: "Kéo-thả", icon: "🧲" }
];
const vocabWord = vocabAccessors.getQuestion;
const vocabMeaning = vocabAccessors.getAnswer;
const vocabFront = vocabAccessors.getDisplay;
const vocabSubtitle = vocabAccessors.getSubtitle;
const vocabBack = vocabAccessors.getBack;
const vocabInfo = vocabAccessors.getInfo;
const vocabAlt = vocabAccessors.getAltAnswers;
function VocabDojo({ mode = "fill-blank" }) {
  const storeDifficulty = useAppStore((s) => s.difficulty);
  const storeQuestionCount = useAppStore((s) => s.defaultQuestionCount);
  const setItemCount = useAppStore((s) => s.setDefaultQuestionCount);
  const [section, setSection] = reactExports.useState("all");
  const [difficulty, setDifficulty] = reactExports.useState(storeDifficulty || "normal");
  const studySession = useStudySession("vocab-dojo");
  const baseItems = useVocabItems(section);
  const items = studySession.filterItems(baseItems);
  const sections = useSectionList("vocab");
  const rawItemCount = storeQuestionCount || 10;
  const itemCount = studySession.filterQuestionCount(rawItemCount);
  const maxQ = difficulty === "easy" ? Math.min(5, itemCount) : difficulty === "hard" ? Math.min(20, itemCount) : itemCount;
  const optCount = difficulty === "easy" ? 3 : difficulty === "hard" ? 5 : 4;
  const exampleItems = items.filter((it) => it.example && typeof it.example === "string" && it.example.includes("/"));
  const renderMode = () => {
    switch (mode) {
      case "fill-blank":
        if (exampleItems.length < 4) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            QuizMode,
            {
              items,
              getQuestion: vocabWord,
              getAnswer: vocabMeaning,
              getQuestionDisplay: vocabWord,
              getCorrectInfo: vocabInfo,
              getSrsKey: vocabAccessors.getKey,
              getSection: vocabAccessors.getSection,
              getAltAnswers: vocabAlt,
              optionCount: optCount,
              maxQuestions: maxQ,
              difficulty,
              srsAware: true
            }
          );
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          FillBlankMode,
          {
            items: exampleItems,
            getSentence: (it) => {
              var _a;
              return ((_a = (it.example || "").split("/")[0]) == null ? void 0 : _a.trim()) || it.word;
            },
            getBlankWord: vocabWord,
            getHint: vocabMeaning,
            getCorrectInfo: vocabInfo,
            getSrsKey: vocabAccessors.getKey,
            optionCount: optCount,
            maxQuestions: maxQ,
            srsAware: true
          }
        );
      case "true-false":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrueFalseMode,
          {
            items,
            getDisplay: vocabWord,
            getMeaning: vocabMeaning,
            getCorrectInfo: vocabInfo,
            getSrsKey: vocabAccessors.getKey,
            maxQuestions: maxQ,
            srsAware: true
          }
        );
      case "flashcard":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          FlashcardMode,
          {
            items,
            getFront: vocabFront,
            getBack: vocabBack,
            getSubtitle: vocabSubtitle,
            getSrsKey: vocabAccessors.getKey,
            cardType: "vocab",
            maxCards: maxQ,
            srsAware: true
          }
        );
      case "quiz":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items,
            getQuestion: vocabWord,
            getAnswer: vocabMeaning,
            getQuestionDisplay: vocabWord,
            getCorrectInfo: vocabInfo,
            getSrsKey: vocabAccessors.getKey,
            getSection: vocabAccessors.getSection,
            getAltAnswers: vocabAlt,
            optionCount: optCount,
            maxQuestions: maxQ,
            difficulty,
            srsAware: true
          }
        );
      case "listening":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items,
            getQuestion: vocabWord,
            getAnswer: vocabMeaning,
            getQuestionDisplay: () => "🔊 ???",
            getCorrectInfo: vocabInfo,
            getSrsKey: vocabAccessors.getKey,
            getSection: vocabAccessors.getSection,
            getAltAnswers: vocabAlt,
            optionCount: optCount,
            maxQuestions: maxQ,
            speakOnShow: true,
            difficulty,
            srsAware: true
          }
        );
      case "match-drag":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          MatchDragMode$1,
          {
            items,
            getWord: vocabWord,
            getMeaning: vocabMeaning,
            pairCount: Math.min(6, Math.floor(items.length / 2)),
            trainerId: "vocab-dojo"
          }
        );
      case "match":
        if (items.length < 4) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            QuizMode,
            {
              items,
              getQuestion: vocabWord,
              getAnswer: vocabMeaning,
              getQuestionDisplay: vocabWord,
              getCorrectInfo: vocabInfo,
              getSrsKey: vocabAccessors.getKey,
              getSection: vocabAccessors.getSection,
              getAltAnswers: vocabAlt,
              optionCount: optCount,
              maxQuestions: maxQ,
              difficulty,
              srsAware: true
            }
          );
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          MatchMode,
          {
            items,
            getWord: vocabWord,
            getMeaning: vocabMeaning,
            getSrsKey: vocabAccessors.getKey,
            pairCount: Math.max(2, Math.min(6, Math.floor(items.length / 2))),
            srsAware: true
          }
        );
      case "speed":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items,
            getQuestion: vocabMeaning,
            getAnswer: vocabWord,
            getQuestionDisplay: vocabMeaning,
            getCorrectInfo: vocabInfo,
            getSrsKey: vocabAccessors.getKey,
            getSection: vocabAccessors.getSection,
            optionCount: 4,
            maxQuestions: Math.min(20, items.length),
            speakOnShow: false,
            difficulty,
            srsAware: true
          }
        );
      case "category-sort":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CategorySortMode, { items, maxQuestions: 16 });
      case "bingo":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(BingoMode, { items, difficulty });
      case "speed-run": {
        const typingItems = items.filter((it) => it.word && it.reading).map((it) => ({
          ...it,
          id: it.key || it.word,
          kanji: it.word,
          romaji: it.romaji || kanaToRomaji(it.reading || ""),
          meaning: it.meaning || ""
        })).filter((it) => it.romaji);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(NinjaTypingMode, { wordsData: typingItems });
      }
      case "picture":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(PictureVocabMode, { items });
      case "minimal-pair":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(MinimalPairMode, { items });
      case "word-chain":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(WordChainMode, { items });
      case "cloze-passage":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ClozePassageMode, { items });
      case "compound-word":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CompoundWordMode, { items });
      case "word-family":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(WordFamilyMode, { maxRounds: Math.min(8, maxQ) });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          FillBlankMode,
          {
            items: exampleItems.length >= 4 ? exampleItems : items,
            getSentence: (it) => {
              var _a;
              return exampleItems.length >= 4 ? ((_a = (it.example || "").split("/")[0]) == null ? void 0 : _a.trim()) || it.word : it.word;
            },
            getBlankWord: vocabWord,
            getHint: vocabMeaning,
            getCorrectInfo: vocabInfo,
            getSrsKey: vocabAccessors.getKey,
            optionCount: optCount,
            maxQuestions: maxQ,
            srsAware: true
          }
        );
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerContext.Provider, { value: "vocab-dojo", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    GameShell,
    {
      trainerId: "vocab-dojo",
      mode,
      icon: "🗡️",
      title: "Võ đường từ vựng",
      color: "var(--n4-cat-vocab)",
      hearts: 3,
      rhythm: { warmup: 3, bossAt: "mid", bossCount: 1, cooldown: 1, totalItems: maxQ },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrainerTopBar,
          {
            trainerId: "vocab-dojo",
            activeMode: mode,
            modes: MODES,
            sections,
            section,
            onSectionChange: setSection,
            difficulty,
            onDifficultyChange: setDifficulty,
            itemCount,
            onItemCountChange: setItemCount
          }
        ),
        renderMode()
      ]
    }
  ) });
}
export {
  MODES,
  VocabDojo as default
};
