import { r as reactExports, j as jsxRuntimeExports, u as useShallow, R as React } from "./vendor-react-BYxMSDiB.js";
import { b as bus, G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-Ht4KBG1w.js";
import { u as useScoreEngine, T as TrainerContext } from "./useScoreEngine-fO3A-KMP.js";
import { F as FlashcardMode } from "./FlashcardMode-ShKBbtGU.js";
import { v as vocabAccessors, Q as QuizMode } from "./QuizMode-BZfpUmXt.js";
import { M as MatchMode } from "./MatchMode-BJLGM0c5.js";
import { u as useGameRestart, a as useStudySession } from "./useStudySession-NFFE7V-8.js";
import { bA as playSFX, f as speakJP, bB as shuffleArray$1, bn as getQualityConfig, a as useAppStore, k as kanaToRomaji } from "./feature-3d-CFvJkEt3.js";
import { a6 as GAME_EVENTS } from "./index-D1BqAvip.js";
import { F as FillBlankMode } from "./FillBlankMode-Cp8uDzAK.js";
import { T as TrueFalseMode } from "./TrueFalseMode-CScvKHpA.js";
import { S as ScaffoldingLayer } from "./ScaffoldingLayer-BRKW1Dj-.js";
import { u as useVocabItems, c as useSectionList } from "./useDataHelper-CLs8Rj_F.js";
import "./useQuestionMeta-D4bSCufi.js";
import { ai as AIHintButton, aj as AIExplainButton, A as content } from "./feature-3d-hud-CYISTbY6.js";
import { d as distExports } from "./index-Cmrzkkdy.js";
import { W as WebGLRenderer, S as Scene, P as PerspectiveCamera, ac as BufferGeometry, k as BufferAttribute, a6 as PointsMaterial, ah as Points } from "./vendor-three-Ba7Uoy0A.js";
import { u as useGameStore, E as EntityPool, a as useGameEngine } from "./useGameEngine-CJjDfpsP.js";
import "./vendor-router-BTJacUKt.js";
import "./empty-Bvm-mx50.js";
import "./feature-3d-scenery-C3eSpuWG.js";
import "./quest-chains-CiwzmCpJ.js";
import "./PhaseRibbon-BrG3g-XS.js";
import "./QuizFeedback-C5B0QP7Y.js";
import "./vendor-icons-DHCyxOF-.js";
import "./vendor-supabase-DTEAj5J1.js";
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
const SAMPLE_WORDS = [
  { id: "w1", kanji: "食べる", romaji: "taberu", meaning: "ăn" },
  { id: "w2", kanji: "飲む", romaji: "nomu", meaning: "uống" },
  { id: "w3", kanji: "先生", romaji: "sensei", meaning: "giáo viên" },
  { id: "w4", kanji: "学生", romaji: "gakusei", meaning: "học sinh" },
  { id: "w5", kanji: "学校", romaji: "gakkou", meaning: "trường học" },
  { id: "w6", kanji: "銀行", romaji: "ginkou", meaning: "ngân hàng" }
];
function NinjaTypingMode({ wordsData = SAMPLE_WORDS }) {
  var _a;
  const containerRef = reactExports.useRef(null);
  const canvasRef = reactExports.useRef(null);
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
  const { rive, RiveComponent } = distExports.useRive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    // Placeholder riv
    stateMachines: "bumpy",
    autoplay: !lowPowerMotion
  });
  const triggerSlashInput = distExports.useStateMachineInput(rive, "bumpy", "bump");
  const triggerHurtInput = distExports.useStateMachineInput(rive, "bumpy", "bump");
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
            takeDamage(10);
            resetCombo();
            if (triggerHurtInput) triggerHurtInput.fire();
            triggerScreenShake();
            wordPool.current.despawn(entity);
          }
        });
        spawnTimerRef.current -= dt;
        if (spawnTimerRef.current <= 0 && currentEntities.length < 5) {
          const newWord = wordsData[Math.floor(Math.random() * wordsData.length)];
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
        if (store.time - lastDomSyncRef.current >= uiSyncMs) {
          setActiveWords([...wordPool.current.getActiveEntities()]);
          lastDomSyncRef.current = store.time;
        }
      }
    }
  ], [resetCombo, takeDamage, triggerHurtInput, triggerScreenShake, uiSyncMs, wordsData]);
  const { triggerHitStop } = useGameEngine(systems);
  reactExports.useEffect(() => {
    if (gameState !== "PLAYING") return;
    const handleKey = (e) => {
      if (!/^[a-zA-Z]$/.test(e.key)) return;
      const typedChar = e.key.toLowerCase();
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
          addScore(100 + combo * 10);
          wordPool.current.despawn(target);
        }
      } else {
        resetCombo();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameState, combo, addScore, resetCombo, triggerHitStop, triggerSlashInput]);
  reactExports.useEffect(() => {
    useGameStore.setState({ hp: 100, score: 0, combo: 0, gameState: "PLAYING" });
  }, []);
  reactExports.useEffect(() => () => {
    if (shakeTimerRef.current) window.clearTimeout(shakeTimerRef.current);
  }, []);
  reactExports.useEffect(() => {
    var _a2;
    if (!canvasRef.current || lowPowerMotion) return;
    const canvas = canvasRef.current;
    const renderer = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: qCfg.antialias,
      powerPreference: ((_a2 = qCfg.deviceProbe) == null ? void 0 : _a2.isMobile) ? "low-power" : "high-performance"
    });
    const maxDpr = Array.isArray(qCfg.dpr) ? qCfg.dpr[1] : 1;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxDpr || 1));
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, 1, 0.1, 1e3);
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
    const geometry = new BufferGeometry();
    const particlesCount = lowPowerMotion ? 36 : 100;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    geometry.setAttribute("position", new BufferAttribute(posArray, 3));
    const material = new PointsMaterial({ size: 0.05, color: 61695, transparent: true, opacity: 0.5 });
    const particlesMesh = new Points(geometry, material);
    scene.add(particlesMesh);
    let reqId;
    let disposed = false;
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
    return () => {
      disposed = true;
      cancelAnimationFrame(reqId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [lowPowerMotion, qCfg]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `ninja-dojo-container ${screenShake ? "shake-hard" : ""}`, ref: containerRef, children: [
    !lowPowerMotion && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "webgpu-canvas-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, "aria-hidden": "true" }) }),
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
    !lowPowerMotion && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rive-character-layer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RiveComponent, { className: "ninja-rive" }) }),
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
    gameState === "GAME_OVER" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "game-over-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Thất bại!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
        "Điểm: ",
        score
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-restart", onClick: () => useGameStore.setState({ hp: 100, score: 0, combo: 0, gameState: "PLAYING" }), children: "CHƠI LẠI" })
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
          id: it.key || it.word,
          kanji: it.word,
          romaji: it.romaji || kanaToRomaji(it.reading || ""),
          meaning: it.meaning || ""
        })).filter((it) => it.romaji);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(NinjaTypingMode, { wordsData: typingItems.length >= 4 ? typingItems : void 0 });
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
