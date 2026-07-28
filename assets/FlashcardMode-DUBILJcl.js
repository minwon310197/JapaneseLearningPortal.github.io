import { r as reactExports, j as jsxRuntimeExports, R as React } from "./vendor-react-BYxMSDiB.js";
import { u as useSrsAwareBatch, s as shuffleArray } from "./PhaseRibbon-VgLgSQxn.js";
import { u as useScoreEngine } from "./useScoreEngine-Cjc3MMN3.js";
import { cp as isN4Flag, u as useAppStore, as as speakJP } from "./feature-3d-ClP3ARU5.js";
import { u as useInGameLookup, a as useGameHelpers, M as ModeResultsScreen, h as hasJapanese, o as optionRomaji, G as GameToolbar, Q as QuickDictionaryOverlay, C as ContentDetailDrawer } from "./useQuestionMeta-D-yYGU7U.js";
import "./TrainerTopBar-9qsLJC8Z.js";
import "./index-ZUSnnghe.js";
const POSITIVE_RATINGS = /* @__PURE__ */ new Set(["remembered", "good", "easy"]);
const NEGATIVE_RATINGS$1 = /* @__PURE__ */ new Set(["forgot", "again", "hard"]);
function ratingToQuality(rating) {
  if (rating === "again" || rating === "forgot") return 0;
  if (rating === "hard") return 1;
  if (rating === "good" || rating === "remembered") return 2;
  if (rating === "easy") return 3;
  return null;
}
function useFlashcardEngine(items, {
  getFront,
  getBack,
  maxCards = 20,
  onRate,
  getSrsKey,
  srsAware = false
} = {}) {
  const [cardIdx, setCardIdx] = reactExports.useState(0);
  const [flipped, setFlipped] = reactExports.useState(false);
  const [ratings, setRatings] = reactExports.useState({});
  const [shuffleKey, setShuffleKey] = reactExports.useState(0);
  const itemsRef = reactExports.useRef(null);
  if (!itemsRef.current && (items == null ? void 0 : items.length)) itemsRef.current = items;
  const srsBatched = useSrsAwareBatch(items, {
    maxItems: maxCards,
    getKey: srsAware ? getSrsKey : void 0,
    enabled: srsAware && typeof getSrsKey === "function",
    sessionKey: shuffleKey
  });
  const sessionItems = reactExports.useMemo(() => {
    if (srsAware && (srsBatched == null ? void 0 : srsBatched.length)) return srsBatched;
    const src = itemsRef.current;
    if (!(src == null ? void 0 : src.length)) return [];
    return shuffleArray(src).slice(0, maxCards);
  }, [shuffleKey, maxCards, srsAware, srsBatched]);
  const currentItem = sessionItems[cardIdx] || null;
  const front = currentItem ? getFront(currentItem) : "";
  const back = currentItem ? getBack(currentItem) : { reading: "", meaning: "" };
  const flip = reactExports.useCallback(() => setFlipped((f) => !f), []);
  const goTo = reactExports.useCallback((idx) => {
    const clamped = Math.max(0, Math.min(idx, (sessionItems.length || 1) - 1));
    setCardIdx(clamped);
    setFlipped(false);
  }, [sessionItems.length]);
  const nextCard = reactExports.useCallback(() => {
    if (cardIdx < sessionItems.length - 1) {
      setCardIdx((i) => i + 1);
      setFlipped(false);
    }
  }, [cardIdx, sessionItems.length]);
  const prevCard = reactExports.useCallback(() => {
    if (cardIdx > 0) {
      setCardIdx((i) => i - 1);
      setFlipped(false);
    }
  }, [cardIdx]);
  const rate = reactExports.useCallback((rating) => {
    setRatings((r) => ({ ...r, [cardIdx]: rating }));
    if (onRate) {
      const item = sessionItems[cardIdx];
      const q = ratingToQuality(rating);
      try {
        onRate(item, rating, q);
      } catch (e) {
        console.warn("[flashcard] onRate handler threw", e);
      }
    }
    if (cardIdx < sessionItems.length - 1) {
      setCardIdx((i) => i + 1);
      setFlipped(false);
    }
  }, [cardIdx, sessionItems, onRate]);
  const restart = reactExports.useCallback((overrideItems) => {
    itemsRef.current = overrideItems != null ? overrideItems : items;
    setCardIdx(0);
    setFlipped(false);
    setRatings({});
    setShuffleKey((k) => k + 1);
  }, [items]);
  const remembered = Object.values(ratings).filter((r) => POSITIVE_RATINGS.has(r)).length;
  const forgot = Object.values(ratings).filter((r) => NEGATIVE_RATINGS$1.has(r)).length;
  const finished = Object.keys(ratings).length === sessionItems.length && sessionItems.length > 0;
  return {
    // State
    currentItem,
    front,
    back,
    flipped,
    finished,
    cardNumber: cardIdx + 1,
    totalCards: sessionItems.length,
    progress: sessionItems.length > 0 ? (cardIdx + 1) / sessionItems.length * 100 : 0,
    currentRating: ratings[cardIdx] || null,
    remembered,
    forgot,
    ratings,
    sessionItems,
    // Actions
    flip,
    nextCard,
    prevCard,
    goTo,
    rate,
    restart
  };
}
const NEGATIVE_RATINGS = /* @__PURE__ */ new Set(["forgot", "again", "hard"]);
const RATING_BUTTONS = [
  { id: "again", label: "😵 Quên", className: "is-again" },
  { id: "hard", label: "😓 Khó", className: "is-hard" },
  { id: "good", label: "😊 Được", className: "is-good" },
  { id: "easy", label: "🤩 Dễ", className: "is-easy" }
];
function isInteractiveTarget(target) {
  return !!(target == null ? void 0 : target.closest('button, a, input, textarea, select, label, canvas, [role="button"]'));
}
const isRichBack = (b) => b && (b.backHeader || b.on || b.kun || b.compounds || b.example || b.description || b.sections);
function renderMarkedText(text = "") {
  return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, index) => part.startsWith("**") && part.endsWith("**") ? /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--n4-accent)" }, children: part.slice(2, -2) }, `${part}-${index}`) : /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, { children: part }, `${part}-${index}`));
}
function RichBack({ back }) {
  var _a, _b;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-fc-rich", children: [
    back.backHeader && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-fc-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-fc-header-char", onClick: (event) => {
        event.stopPropagation();
        speakJP(back.backHeader.char);
      }, children: back.backHeader.char }),
      back.backHeader.label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-fc-header-label", children: back.backHeader.label })
    ] }),
    (back.on || back.kun) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-fc-readings", children: [
      back.on && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-fc-reading-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-fc-reading-badge on", children: "音" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: back.on })
      ] }),
      back.kun && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-fc-reading-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-fc-reading-badge kun", children: "訓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: back.kun })
      ] })
    ] }),
    back.meaning && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-fc-meaning", children: back.meaning }),
    back.romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-fc-romaji", children: back.romaji }),
    back.reading && !back.on && !back.kun && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-flashcard-reading", children: back.reading }),
    ((_a = back.compounds) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-fc-divider" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-fc-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-fc-section-label", children: "📝 Từ ghép" }),
        back.compounds.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "n4-fc-compound-item", onClick: (event) => {
          event.stopPropagation();
          const w = (c.jp || "").match(/^([^\s(]+)/);
          if (w) speakJP(w[1]);
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-fc-compound-jp", children: c.jp }),
          c.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-fc-compound-vi", children: c.vi })
        ] }, `${c.jp || "compound"}-${i}`))
      ] })
    ] }),
    back.example && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-fc-divider" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-fc-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-fc-section-label", children: "💬 Ví dụ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "n4-fc-example-jp",
            onClick: (event) => {
              event.stopPropagation();
              speakJP((back.example.jp || "").replace(/\*\*/g, ""));
            },
            children: renderMarkedText(back.example.jp)
          }
        ),
        back.example.romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-fc-example-romaji", children: back.example.romaji }),
        back.example.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-fc-example-vi", children: back.example.vi })
      ] })
    ] }),
    (_b = back.sections) == null ? void 0 : _b.map((sec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-fc-divider" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-fc-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-fc-section-label", children: [
          sec.icon,
          " ",
          sec.label
        ] }),
        typeof sec.content === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-fc-section-text", children: sec.content }) : sec.content
      ] })
    ] }, i)),
    back.description && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-fc-divider" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-fc-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-fc-section-label", children: "💡 Mẹo nhớ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-fc-description", children: back.description.split(". ").map((line, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-desc-line", children: i < arr.length - 1 ? line + "." : line }, i)) })
      ] })
    ] })
  ] });
}
function LegacyBack({ back }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-flashcard-reading", children: back.reading }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-flashcard-meaning", children: back.meaning }),
    back.extra && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-flashcard-extra", children: back.extra })
  ] });
}
function FlashcardMode({
  items,
  getFront,
  getBack,
  getSubtitle,
  cardType,
  maxCards = 20,
  onFinish,
  getSrsKey,
  srsAware = false,
  trainerId
}) {
  const [retryItems, setRetryItems] = reactExports.useState(null);
  const [drawerKey, setDrawerKey] = reactExports.useState(null);
  const [shake, setShake] = reactExports.useState(false);
  const [glow, setGlow] = reactExports.useState("");
  const feedbackTimers = reactExports.useRef(/* @__PURE__ */ new Set());
  const effectiveItems = retryItems || items;
  const scoring = useScoreEngine(trainerId);
  const onRate = reactExports.useCallback((item, rating, quality) => {
    if (!item) return;
    if (quality == null || quality === 0) {
      scoring.recordWrong(item);
      setShake(true);
      const timer = setTimeout(() => {
        setShake(false);
        feedbackTimers.current.delete(timer);
      }, 400);
      feedbackTimers.current.add(timer);
    } else {
      scoring.recordCorrect(item, quality);
      setGlow("success");
      const timer = setTimeout(() => {
        setGlow("");
        feedbackTimers.current.delete(timer);
      }, 600);
      feedbackTimers.current.add(timer);
    }
  }, [scoring]);
  reactExports.useEffect(() => () => {
    feedbackTimers.current.forEach(clearTimeout);
    feedbackTimers.current.clear();
  }, []);
  const fc = useFlashcardEngine(effectiveItems, {
    getFront,
    getBack,
    maxCards: retryItems ? retryItems.length : maxCards,
    onRate,
    getSrsKey,
    srsAware: srsAware && !retryItems
  });
  const scaffoldingOn = isN4Flag("scaffolding");
  const currentItem = (effectiveItems == null ? void 0 : effectiveItems[fc.cardNumber - 1]) || null;
  const currentItemKey = (currentItem == null ? void 0 : currentItem.key) || null;
  const lookup = useInGameLookup();
  const helpers = useGameHelpers({
    currentItemKey,
    onOpenLookup: lookup.open,
    onOpenDrawer: (k) => setDrawerKey(k)
  });
  const autoSpeak = useAppStore((s) => s.autoSpeak);
  reactExports.useEffect(() => {
    if (autoSpeak && fc.currentItem && !fc.flipped) {
      const text = getFront(fc.currentItem);
      if (text) {
        speakJP(text);
      }
    }
  }, [fc.cardNumber, fc.flipped, fc.currentItem, autoSpeak, getFront]);
  const handleCardClick = () => fc.flip();
  const handleCardKeyDown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    if (isInteractiveTarget(event.target) && event.target !== event.currentTarget) return;
    event.preventDefault();
    fc.flip();
  };
  if (!(items == null ? void 0 : items.length)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có dữ liệu để hiển thị." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-review-detail", children: "Hãy chọn phần khác hoặc tải lại trang." })
    ] });
  }
  if (fc.finished) {
    const forgotItems = Object.entries(fc.ratings).filter(([, r]) => NEGATIVE_RATINGS.has(r)).map(([idx]) => fc.sessionItems[Number(idx)]).filter(Boolean);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModeResultsScreen,
      {
        scoring,
        getQuestion: getFront,
        getCorrectInfo: (item) => {
          const b = getBack(item);
          return { reading: (b == null ? void 0 : b.reading) || "", meaning: (b == null ? void 0 : b.meaning) || "" };
        },
        correctLabel: "Nhớ",
        wrongLabel: "Quên",
        showCombo: false,
        onRetryWrong: forgotItems.length > 0 ? () => {
          setRetryItems(forgotItems);
          fc.restart();
          onFinish == null ? void 0 : onFinish();
        } : void 0,
        onRestart: () => {
          setRetryItems(null);
          fc.restart(items);
          onFinish == null ? void 0 : onFinish();
        }
      }
    );
  }
  const back = fc.back;
  const subtitle = getSubtitle ? getSubtitle(fc.currentItem) : back.subtitle;
  const rich = isRichBack(back);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-progress-bar-mini-fill", style: { width: `${fc.progress}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-fc-container ${shake ? "n4-screen-shake" : ""} ${glow ? "n4-glow-" + glow : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `n4-flashcard ${fc.flipped ? "is-flipped" : ""} ${fc.currentRating ? "has-rating-" + fc.currentRating : ""}`,
        "data-type": cardType || "",
        role: "button",
        tabIndex: 0,
        "aria-label": fc.flipped ? "Lật về mặt trước của thẻ" : "Lật thẻ để xem đáp án",
        "aria-pressed": fc.flipped,
        onClick: handleCardClick,
        onKeyDown: handleCardKeyDown,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-flashcard-front", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-flashcard-word", children: fc.front }),
            hasJapanese(fc.front) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-qdisplay-romaji", style: { marginTop: 4 }, children: optionRomaji(fc.front) }),
            subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-fc-subtitle", children: subtitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-flashcard-hint", children: "Nhấp để lật thẻ" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-flashcard-back", children: rich ? /* @__PURE__ */ jsxRuntimeExports.jsx(RichBack, { back }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LegacyBack, { back }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginTop: "var(--n4-sp-3)" }, children: scaffoldingOn && currentItemKey ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      GameToolbar,
      {
        helpers,
        config: { hint: true, reveal: false, speak: true, bookmark: false, lookup: false, drawer: false },
        text: fc.front
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "n4-btn n4-btn-ghost n4-btn-sm",
        onClick: (e) => {
          e.stopPropagation();
          speakJP(fc.front);
        },
        children: "🔊 Nghe"
      }
    ) }),
    fc.flipped && !fc.currentRating && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-flashcard-actions n4-page-enter", children: RATING_BUTTONS.map((button) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `n4-btn n4-btn-glass n4-flashcard-rate ${button.className}`,
        onClick: (e) => {
          e.stopPropagation();
          fc.rate(button.id);
        },
        children: button.label
      },
      button.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-flashcard-nav", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: fc.prevCard, disabled: fc.cardNumber <= 1, children: "← Trước" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-flashcard-progress", children: [
        fc.cardNumber,
        " / ",
        fc.totalCards
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: fc.nextCard, disabled: fc.cardNumber >= fc.totalCards, children: "Tiếp →" })
    ] }),
    scaffoldingOn && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        QuickDictionaryOverlay,
        {
          active: lookup.active,
          onClose: lookup.close,
          onSelect: (item) => {
            setDrawerKey(item.key);
            lookup.close();
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ContentDetailDrawer,
        {
          itemKey: drawerKey,
          open: !!drawerKey,
          onClose: () => setDrawerKey(null)
        }
      )
    ] })
  ] });
}
const FlashcardMode$1 = reactExports.memo(FlashcardMode);
export {
  FlashcardMode$1 as F
};
