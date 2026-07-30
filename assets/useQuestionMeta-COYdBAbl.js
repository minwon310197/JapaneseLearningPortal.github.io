import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { y as srs, A as content, I as useDialogFocus, ar as AIPostGameButton, as as hasJapaneseText, at as hasQuestionBlank, au as safeQuestionRomaji, av as createAnswerPresentation, aw as safeQuestionTts } from "./feature-3d-hud-Dp6hMoyV.js";
import { u as useLearningStore, f as speakJP } from "./feature-3d-jK3b4Iv-.js";
function seedSrs(key) {
  var _a, _b;
  if (!key) return;
  try {
    const existing = (_b = (_a = srs).stateFor) == null ? void 0 : _b.call(_a, key);
    if (existing) return;
    srs.recordReview({ itemKey: key, quality: 2 });
  } catch (e) {
  }
}
function useBookmarkQueue() {
  const { bookmarks, toggleBookmark } = useLearningStore(
    useShallow((s) => ({ bookmarks: s.bookmarks, toggleBookmark: s.toggleBookmark }))
  );
  const has = reactExports.useCallback((key) => !!(key && bookmarks[key]), [bookmarks]);
  const add = reactExports.useCallback(
    (key) => {
      if (!key || bookmarks[key]) return;
      toggleBookmark == null ? void 0 : toggleBookmark(key);
      seedSrs(key);
    },
    [bookmarks, toggleBookmark]
  );
  const remove = reactExports.useCallback(
    (key) => {
      if (!key || !bookmarks[key]) return;
      toggleBookmark == null ? void 0 : toggleBookmark(key);
    },
    [bookmarks, toggleBookmark]
  );
  const toggle = reactExports.useCallback(
    (key) => {
      if (!key) return;
      const wasBookmarked = !!bookmarks[key];
      toggleBookmark == null ? void 0 : toggleBookmark(key);
      if (!wasBookmarked) seedSrs(key);
    },
    [bookmarks, toggleBookmark]
  );
  const list = reactExports.useCallback(() => Object.keys(bookmarks || {}), [bookmarks]);
  const count = reactExports.useMemo(() => Object.keys(bookmarks || {}).length, [bookmarks]);
  const listDue = reactExports.useCallback(() => {
    const keys = Object.keys(bookmarks || {});
    return keys.filter((k) => {
      var _a, _b;
      try {
        return (_b = (_a = srs).isItemDue) == null ? void 0 : _b.call(_a, k);
      } catch (e) {
        return true;
      }
    });
  }, [bookmarks]);
  const dueCount = reactExports.useMemo(() => listDue().length, [listDue]);
  return reactExports.useMemo(
    () => ({ add, remove, toggle, has, list, count, dueCount, listDue }),
    [add, remove, toggle, has, list, count, dueCount, listDue]
  );
}
const JAP_RE = /[\u3040-\u30FF\u3400-\u9FFF]/;
function buildRuleHint(item, step = 0) {
  var _a, _b, _c;
  if (!item) return "";
  const s = Math.max(0, Math.floor(step));
  if (item.kind === "vocab") {
    const parts = [];
    if (s >= 0 && item.partOfSpeech) parts.push(`Từ loại: ${item.partOfSpeech}.`);
    if (s >= 0 && Array.isArray(item.topicTags) && item.topicTags.length)
      parts.push(`Chủ đề: ${item.topicTags.slice(0, 2).join(", ")}.`);
    if (s >= 1 && item.hanviet) parts.push(`Hán Việt: ${item.hanviet}.`);
    if (s >= 1 && item.register) parts.push(`Sắc thái: ${item.register}.`);
    if (s >= 2 && Array.isArray(item.examples) && ((_a = item.examples[0]) == null ? void 0 : _a.vi))
      parts.push(`Ví dụ (VI): ${item.examples[0].vi}`);
    if (s >= 3 && item.meaning) parts.push(`Nghĩa: ${item.meaning}`);
    return parts.slice(-2).join(" ");
  }
  if (item.kind === "kanji") {
    const parts = [];
    if (s >= 0 && item.strokeCount) parts.push(`${item.strokeCount} nét.`);
    if (s >= 0 && Array.isArray(item.onReadings) && item.onReadings.length)
      parts.push(`Âm on: ${item.onReadings.slice(0, 2).join(" / ")}.`);
    if (s >= 1 && Array.isArray(item.kunReadings) && item.kunReadings.length)
      parts.push(`Âm kun: ${item.kunReadings.slice(0, 2).join(" / ")}.`);
    if (s >= 1 && item.hanviet) parts.push(`Hán Việt: ${item.hanviet}.`);
    if (s >= 2 && Array.isArray(item.compounds) && ((_b = item.compounds[0]) == null ? void 0 : _b.compound))
      parts.push(`Ghép từ: ${item.compounds[0].compound} (${item.compounds[0].meaning || "—"}).`);
    if (s >= 3 && item.meaning) parts.push(`Nghĩa: ${item.meaning}`);
    return parts.slice(-2).join(" ");
  }
  if (item.kind === "grammar") {
    const parts = [];
    if (s >= 0 && item.structure) parts.push(`Cấu trúc: ${item.structure}.`);
    if (s >= 1 && item.usage) parts.push(`Cách dùng: ${item.usage.slice(0, 80)}.`);
    if (s >= 2 && Array.isArray(item.examples) && ((_c = item.examples[0]) == null ? void 0 : _c.ja))
      parts.push(`Ví dụ: ${item.examples[0].ja} — ${item.examples[0].vi || ""}`);
    if (s >= 3 && item.title) parts.push(`Mẫu: ${item.title}`);
    return parts.slice(-2).join(" ");
  }
  return "";
}
function useGameHelpers({
  currentItemKey = null,
  onRevealRequest = null,
  onOpenLookup = null,
  onOpenDrawer = null
} = {}) {
  const bm = useBookmarkQueue();
  const getCurrentItem = reactExports.useCallback(() => {
    if (!currentItemKey) return null;
    try {
      return content.getItem(currentItemKey);
    } catch (e) {
      return null;
    }
  }, [currentItemKey]);
  const speak = reactExports.useCallback((text) => {
    const s = (text || "").trim();
    if (!s || !JAP_RE.test(s)) return;
    try {
      speakJP(s);
    } catch (e) {
    }
  }, []);
  const ruleHint = reactExports.useCallback(
    (step = 0, item = null) => {
      try {
        const itemKey = (item == null ? void 0 : item.key) || currentItemKey;
        if (itemKey) {
          window.dispatchEvent(new CustomEvent("n4:study-os:hint-used", { detail: { itemKey } }));
        }
      } catch (e) {
      }
      return buildRuleHint(item || getCurrentItem(), step);
    },
    [getCurrentItem, currentItemKey]
  );
  const hint = reactExports.useCallback(() => {
    try {
      if (currentItemKey) {
        window.dispatchEvent(new CustomEvent("n4:study-os:hint-used", { detail: { itemKey: currentItemKey } }));
      }
    } catch (e) {
    }
    return ruleHint(0);
  }, [ruleHint, currentItemKey]);
  const reveal = reactExports.useCallback(() => {
    try {
      if (currentItemKey) {
        window.dispatchEvent(new CustomEvent("n4:study-os:reveal-used", { detail: { itemKey: currentItemKey } }));
      }
    } catch (e) {
    }
    if (typeof onRevealRequest === "function") onRevealRequest(getCurrentItem());
  }, [onRevealRequest, getCurrentItem, currentItemKey]);
  const bookmark = reactExports.useCallback(() => {
    if (currentItemKey) bm.toggle(currentItemKey);
  }, [bm, currentItemKey]);
  const openLookup = reactExports.useCallback(() => {
    onOpenLookup == null ? void 0 : onOpenLookup();
  }, [onOpenLookup]);
  const openDrawer = reactExports.useCallback(
    (keyOverride) => {
      const k = keyOverride || currentItemKey;
      if (!k) return;
      onOpenDrawer == null ? void 0 : onOpenDrawer(k);
    },
    [onOpenDrawer, currentItemKey]
  );
  return reactExports.useMemo(
    () => ({
      speak,
      hint,
      ruleHint,
      reveal,
      bookmark,
      openLookup,
      openDrawer,
      isBookmarked: currentItemKey ? bm.has(currentItemKey) : false,
      bookmarkCount: bm.count,
      getCurrentItem
    }),
    [speak, hint, ruleHint, reveal, bookmark, openLookup, openDrawer, bm, currentItemKey, getCurrentItem]
  );
}
function useInGameLookup({ onOpen, onClose } = {}) {
  const [active, setActive] = reactExports.useState(false);
  const open = reactExports.useCallback(() => {
    setActive(true);
    onOpen == null ? void 0 : onOpen();
  }, [onOpen]);
  const close = reactExports.useCallback(() => {
    setActive(false);
    onClose == null ? void 0 : onClose();
  }, [onClose]);
  const toggle = reactExports.useCallback(() => {
    setActive((v) => {
      const next = !v;
      if (next) onOpen == null ? void 0 : onOpen();
      else onClose == null ? void 0 : onClose();
      return next;
    });
  }, [onOpen, onClose]);
  return { active, open, close, toggle };
}
const DEFAULT_CONFIG = {
  hint: true,
  reveal: false,
  speak: true,
  bookmark: true,
  lookup: false,
  drawer: false
};
const BUTTON_META = {
  hint: { icon: "💡", label: "Gợi ý", key: "h" },
  reveal: { icon: "👁️", label: "Đáp án", key: "r" },
  speak: { icon: "🔊", label: "Phát âm", key: "s" },
  bookmark: { icon: "⭐", label: "Lưu", key: "b" },
  lookup: { icon: "🔎", label: "Từ điển", key: "d" },
  drawer: { icon: "📖", label: "Chi tiết", key: "l" }
};
function GameToolbar({
  helpers,
  config = DEFAULT_CONFIG,
  text = "",
  vertical = false,
  compact = false,
  className = "",
  style,
  onAction
}) {
  const resolved = reactExports.useMemo(() => ({ ...DEFAULT_CONFIG, ...config || {} }), [config]);
  const fire = reactExports.useCallback((action) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    onAction == null ? void 0 : onAction(action);
    switch (action) {
      case "hint":
        return (_a = helpers == null ? void 0 : helpers.hint) == null ? void 0 : _a.call(helpers);
      case "reveal":
        return (_b = helpers == null ? void 0 : helpers.reveal) == null ? void 0 : _b.call(helpers);
      case "speak":
        return (_e = helpers == null ? void 0 : helpers.speak) == null ? void 0 : _e.call(helpers, text || ((_d = (_c = helpers == null ? void 0 : helpers.getCurrentItem) == null ? void 0 : _c.call(helpers)) == null ? void 0 : _d.word) || "");
      case "bookmark":
        return (_f = helpers == null ? void 0 : helpers.bookmark) == null ? void 0 : _f.call(helpers);
      case "lookup":
        return (_g = helpers == null ? void 0 : helpers.openLookup) == null ? void 0 : _g.call(helpers);
      case "drawer":
        return (_h = helpers == null ? void 0 : helpers.openDrawer) == null ? void 0 : _h.call(helpers);
      default:
        return void 0;
    }
  }, [helpers, text, onAction]);
  reactExports.useEffect(() => {
    const onKey = (e) => {
      if (e.target && /input|textarea|select/i.test(e.target.tagName || "")) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const k = (e.key || "").toLowerCase();
      for (const [action, meta] of Object.entries(BUTTON_META)) {
        if (meta.key === k && resolved[action]) {
          e.preventDefault();
          fire(action);
          break;
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fire, resolved]);
  const actions = reactExports.useMemo(() => Object.entries(BUTTON_META).filter(([k]) => resolved[k]), [resolved]);
  if (actions.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `n4-game-toolbar ${vertical ? "is-vertical" : ""} ${compact ? "is-compact" : ""} ${className}`,
      style,
      role: "toolbar",
      "aria-label": "Thanh hỗ trợ học",
      children: actions.map(([action, meta]) => {
        const isBookmarkActive = action === "bookmark" && (helpers == null ? void 0 : helpers.isBookmarked);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: `n4-game-toolbar__btn ${isBookmarkActive ? "is-on" : ""}`,
            onClick: () => fire(action),
            title: `${meta.label} (${meta.key.toUpperCase()})`,
            "aria-label": meta.label,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-game-toolbar__icon", "aria-hidden": "true", children: meta.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-game-toolbar__kbd", "aria-hidden": "true", style: { fontSize: "0.7em", marginLeft: 4, opacity: 0.7 }, children: meta.key.toUpperCase() })
            ]
          },
          action
        );
      })
    }
  );
}
function QuickDictionaryOverlay({
  active,
  onClose,
  onSelect,
  initialQuery = ""
}) {
  const [q, setQ] = reactExports.useState(initialQuery);
  const inputRef = reactExports.useRef(null);
  const dialogRef = useDialogFocus(active, onClose, { initialFocusRef: inputRef });
  reactExports.useEffect(() => {
    if (active) {
      setQ(initialQuery);
    }
  }, [active, initialQuery]);
  const results = reactExports.useMemo(() => {
    if (!active) return [];
    const query = q.trim();
    if (query.length < 1) return [];
    try {
      return content.search(query, { limit: 40 }) || [];
    } catch (e) {
      return [];
    }
  }, [active, q]);
  const handlePick = reactExports.useCallback((item) => {
    if (!item) return;
    onSelect == null ? void 0 : onSelect(item);
  }, [onSelect]);
  if (!active) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "n4-qd-overlay",
      ref: dialogRef,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Tra cứu nhanh trong game",
      tabIndex: -1,
      onPointerDown: (e) => {
        if (e.target === e.currentTarget) onClose == null ? void 0 : onClose();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-qd-panel", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-qd-panel__head", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-qd-panel__title", children: "🔎 Tra từ nhanh" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "n4-qd-panel__close",
              onClick: onClose,
              "aria-label": "Đóng",
              children: "✕"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-qd-panel__body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: inputRef,
              type: "search",
              className: "n4-qd-panel__search",
              placeholder: "Gõ kana, kanji, romaji, nghĩa Việt…",
              value: q,
              onChange: (e) => setQ(e.target.value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-qd-panel__results", children: [
            q.trim().length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-qd-panel__hint", children: [
              "Ví dụ: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "たべる" }),
              " · ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "勉強" }),
              " · ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "is/am/are" }),
              " · ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "ăn" })
            ] }),
            q.trim().length > 0 && results.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-qd-panel__hint", children: "Không tìm thấy kết quả." }),
            results.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "n4-qd-panel__row",
                onClick: () => handlePick(item),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-qd-panel__row-kind", children: item.kind }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-qd-panel__row-headword", children: item.word || item.character || item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-qd-panel__row-reading", children: item.reading || (item.onReadings || []).slice(0, 1).join("") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-qd-panel__row-meaning", children: item.meaning || item.usage })
                ]
              },
              item.key
            ))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "n4-qd-panel__foot", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ESC để đóng · Enter để chọn" }) })
      ] })
    }
  );
}
function Section({ title, children }) {
  if (children == null || children === false) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-cdd__section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "n4-cdd__section-title", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cdd__section-body", children })
  ] });
}
function MeaningLine({ label, value }) {
  if (!value) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cdd__line", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-cdd__line-label", children: [
      label,
      ":"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-cdd__line-value", children: value })
  ] });
}
function ExampleRow({ ex }) {
  if (!ex) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cdd__example", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cdd__example-ja", children: ex.ja }),
    ex.romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cdd__example-romaji", children: ex.romaji }),
    ex.vi && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cdd__example-vi", children: ex.vi })
  ] });
}
function VocabDetail({ item }) {
  const wordFamily = reactExports.useMemo(() => {
    const chars = Array.from((item.word || "").matchAll(/[\u3400-\u9FFF]/g)).map((m) => m[0]);
    return chars.map((c) => content.getItem(`k:${c}`)).filter(Boolean);
  }, [item.word]);
  const confusables = reactExports.useMemo(() => {
    try {
      return content.getConfusables(item.key) || [];
    } catch (e) {
      return [];
    }
  }, [item.key]);
  const minnaHits = reactExports.useMemo(() => {
    try {
      return content.getMinnaLessonsIntroducing(item.key) || [];
    } catch (e) {
      return [];
    }
  }, [item.key]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Ý nghĩa", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "Từ", value: item.word }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "Đọc", value: item.reading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "Romaji", value: item.romaji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "Nghĩa", value: item.meaning }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "Hán Việt", value: item.hanviet }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "Từ loại", value: item.partOfSpeech }),
      item.register && /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "Sắc thái", value: item.register })
    ] }),
    (item.mnemonic || item.memoryStory) && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "🧠 Ghi nhớ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cdd__mnemonic", children: item.memoryStory || item.mnemonic }) }),
    Array.isArray(item.examples) && item.examples.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Ví dụ", children: item.examples.slice(0, 3).map((ex, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExampleRow, { ex }, i)) }),
    wordFamily.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Kanji thành phần", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "n4-cdd__chiplist", children: wordFamily.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "n4-cdd__chip", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: k.character }),
      " · ",
      k.meaning,
      k.hanviet ? ` (${k.hanviet})` : ""
    ] }, k.key)) }) }),
    confusables.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Dễ nhầm với", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "n4-cdd__chiplist", children: confusables.slice(0, 5).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "n4-cdd__chip", children: [
      c.word || c.character,
      " — ",
      c.meaning
    ] }, c.key)) }) }),
    minnaHits.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Xuất hiện trong Minna", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "n4-cdd__chiplist", children: minnaHits.slice(0, 5).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "n4-cdd__chip", children: [
      "Bài ",
      l.lesson,
      ": ",
      l.title
    ] }, `${l.lesson}-${l.title}`)) }) })
  ] });
}
function KanjiDetail({ item }) {
  const family = reactExports.useMemo(() => {
    try {
      return content.getWordFamilyFor(item.character) || [];
    } catch (e) {
      return [];
    }
  }, [item.character]);
  const related = reactExports.useMemo(() => {
    const keys = Array.isArray(item.relatedKanji) ? item.relatedKanji : [];
    return keys.map((k) => content.getItem(k)).filter(Boolean);
  }, [item.relatedKanji]);
  const minnaHits = reactExports.useMemo(() => {
    try {
      return content.getMinnaLessonsIntroducing(item.key) || [];
    } catch (e) {
      return [];
    }
  }, [item.key]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Kanji", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cdd__kanji-big", "aria-hidden": "true", children: item.character }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "Nghĩa", value: item.meaning }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "Hán Việt", value: item.hanviet }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "Số nét", value: item.strokeCount }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "On", value: (item.onReadings || []).join(" / ") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "Kun", value: (item.kunReadings || []).join(" / ") })
    ] }),
    item.mnemonic && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "🧠 Ghi nhớ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cdd__mnemonic", children: item.mnemonic }) }),
    Array.isArray(item.compounds) && item.compounds.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Từ ghép tiêu biểu", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "n4-cdd__chiplist", children: item.compounds.slice(0, 6).map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "n4-cdd__chip", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: c.compound }),
      c.reading ? ` (${c.reading})` : "",
      " — ",
      c.meaning
    ] }, i)) }) }),
    family.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: `Họ từ (${family.length})`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "n4-cdd__chiplist", children: family.slice(0, 20).map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "n4-cdd__chip", children: [
      v.word,
      " · ",
      v.meaning
    ] }, v.key)) }) }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Kanji liên quan", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "n4-cdd__chiplist", children: related.slice(0, 10).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "n4-cdd__chip", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: k.character }),
      " — ",
      k.meaning
    ] }, k.key)) }) }),
    minnaHits.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Xuất hiện trong Minna", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "n4-cdd__chiplist", children: minnaHits.slice(0, 5).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "n4-cdd__chip", children: [
      "Bài ",
      l.lesson,
      ": ",
      l.title
    ] }, `${l.lesson}-${l.title}`)) }) })
  ] });
}
function GrammarDetail({ item }) {
  const compares = reactExports.useMemo(() => {
    try {
      return content.getGrammarComparesWith(item.key) || [];
    } catch (e) {
      return [];
    }
  }, [item.key]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Cấu trúc", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "Mẫu", value: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "Công thức", value: item.structure }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "Cách dùng", value: item.usage }),
      item.notes && /* @__PURE__ */ jsxRuntimeExports.jsx(MeaningLine, { label: "Ghi chú", value: item.notes })
    ] }),
    Array.isArray(item.examples) && item.examples.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Ví dụ", children: item.examples.slice(0, 4).map((ex, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExampleRow, { ex }, i)) }),
    Array.isArray(item.commonMistakes) && item.commonMistakes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "⚠️ Sai thường gặp", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "n4-cdd__list", children: item.commonMistakes.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: m }, i)) }) }),
    compares.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "So sánh với mẫu khác", children: compares.map((c, i) => {
      var _a;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cdd__compare", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "vs." }),
          " ",
          ((_a = c.partner) == null ? void 0 : _a.title) || c.partnerKey
        ] }),
        c.distinction && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: c.distinction }),
        c.whenA && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "· Dùng mẫu A khi: ",
          c.whenA
        ] }),
        c.whenB && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "· Dùng mẫu B khi: ",
          c.whenB
        ] })
      ] }, i);
    }) })
  ] });
}
function ContentDetailDrawer({
  itemKey,
  open,
  onClose,
  widthPx = 420
}) {
  const item = reactExports.useMemo(() => {
    if (!itemKey) return null;
    try {
      return content.getItem(itemKey);
    } catch (e) {
      return null;
    }
  }, [itemKey]);
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "aside",
    {
      className: "n4-cdd",
      "aria-label": "Chi tiết nội dung",
      style: { "--cdd-width": `${widthPx}px` },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-cdd__backdrop", onClick: onClose, "aria-label": "Đóng chi tiết nội dung" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cdd__panel", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-cdd__head", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cdd__head-title", children: item ? item.word || item.character || item.title : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-cdd__close", onClick: onClose, "aria-label": "Đóng", children: "✕" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-cdd__scroll", children: [
            !item && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-cdd__empty", children: "Không tìm thấy dữ liệu." }),
            (item == null ? void 0 : item.kind) === "vocab" && /* @__PURE__ */ jsxRuntimeExports.jsx(VocabDetail, { item }),
            (item == null ? void 0 : item.kind) === "kanji" && /* @__PURE__ */ jsxRuntimeExports.jsx(KanjiDetail, { item }),
            (item == null ? void 0 : item.kind) === "grammar" && /* @__PURE__ */ jsxRuntimeExports.jsx(GrammarDetail, { item })
          ] })
        ] })
      ]
    }
  );
}
function ModeResultsScreen({
  scoring,
  // from useScoreEngine — { score, total, accuracy, maxCombo, xp, coins, history }
  getQuestion,
  // (item) => string
  getCorrectInfo,
  // (item) => { reading, meaning, example }
  onRetryWrong,
  // (wrongItems: item[]) => void
  onRestart,
  // () => void
  // Optional overrides for modes with different semantics (e.g. Flashcard: Nhớ/Quên)
  correctLabel = "Đúng",
  wrongLabel = "Sai",
  showCombo = true,
  showReview = true,
  showAIAnalysis = true,
  children
}) {
  var _a, _b, _c, _d, _e;
  const pct = (_a = scoring.accuracy) != null ? _a : scoring.total > 0 ? Math.round(scoring.score / scoring.total * 100) : 0;
  const emoji = pct >= 90 ? "🏆" : pct >= 80 ? "🎉" : pct >= 60 ? "👍" : pct >= 40 ? "💪" : "📚";
  const title = pct >= 90 ? "Hoàn hảo!" : pct >= 80 ? "Xuất sắc!" : pct >= 60 ? "Khá tốt!" : pct >= 40 ? "Cần cải thiện" : "Cố lên!";
  const tier = pct >= 80 ? "excellent" : pct >= 60 ? "good" : pct >= 40 ? "fair" : "weak";
  const wrongItems = (_c = (_b = scoring.history) == null ? void 0 : _b.filter((h) => !h.correct)) != null ? _c : [];
  const ringOffset = 264 - 264 * pct / 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mode-results-emoji", children: emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-mode-results-title", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mode-results-ring-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-ring", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "42", className: "n4-mode-results-ring-bg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "50",
            cy: "50",
            r: "42",
            className: "n4-mode-results-ring-fill",
            "data-tier": tier,
            style: { strokeDashoffset: ringOffset }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-mode-results-ring-label", children: [
        pct,
        "%"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-stats", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mode-results-stat-value success", children: scoring.score }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mode-results-stat-label", children: correctLabel })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mode-results-stat-value error", children: scoring.total - scoring.score }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mode-results-stat-label", children: wrongLabel })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-mode-results-stat-value accent", children: [
          pct,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mode-results-stat-label", children: "Chính xác" })
      ] }),
      showCombo && scoring.maxCombo > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-mode-results-stat-value", children: [
          "x",
          scoring.maxCombo
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mode-results-stat-label", children: "Max Combo" })
      ] }),
      (scoring.xp > 0 || scoring.xpEarned > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-mode-results-stat-value accent", children: [
          "+",
          scoring.xp || scoring.xpEarned
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mode-results-stat-label", children: "XP" })
      ] }),
      (scoring.coins > 0 || scoring.coinsEarned > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-mode-results-stat-value accent", children: [
          "+",
          scoring.coins || scoring.coinsEarned
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mode-results-stat-label", children: "Xu" })
      ] })
    ] }),
    showReview && ((_d = scoring.history) == null ? void 0 : _d.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-review", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-mode-results-review-title", children: "📝 Chi tiết kết quả" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mode-results-review-list", children: scoring.history.map((h, i) => {
        const qText = (getQuestion == null ? void 0 : getQuestion(h.item)) || "—";
        const info = getCorrectInfo == null ? void 0 : getCorrectInfo(h.item);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-mode-results-review-item ${h.correct ? "correct" : "wrong"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-mode-results-review-icon", children: h.correct ? "✅" : "❌" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-review-body", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-mode-results-review-word", children: qText }),
            info && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-review-detail", children: [
              info.reading && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                info.reading,
                " — "
              ] }),
              info.meaning
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "n4-btn n4-btn-ghost n4-btn-sm",
              onClick: () => speakJP(qText),
              title: "Nghe phát âm",
              children: "🔊"
            }
          )
        ] }, i);
      }) })
    ] }),
    showAIAnalysis && ((_e = scoring.history) == null ? void 0 : _e.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      AIPostGameButton,
      {
        history: scoring.history,
        getQuestion,
        getCorrectInfo,
        score: scoring.score,
        total: scoring.total
      }
    ),
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-mode-results-actions", children: [
      wrongItems.length > 0 && onRetryWrong && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "n4-btn n4-btn-ghost n4-btn-retry",
          onClick: () => onRetryWrong(wrongItems.map((h) => h.item)),
          children: [
            "🔁 Chơi lại câu sai (",
            wrongItems.length,
            ")"
          ]
        }
      ),
      onRestart && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: onRestart, children: "🔄 Làm lại" })
    ] })
  ] });
}
const ModeResultsScreen$1 = reactExports.memo(ModeResultsScreen);
function hasJapanese(str) {
  return hasJapaneseText(str);
}
function questionRomaji(text, readingHint) {
  const safeReading = hasQuestionBlank(text) && readingHint && !hasQuestionBlank(readingHint) ? text : readingHint;
  return safeQuestionRomaji({ text, reading: safeReading });
}
function safeTtsText(text) {
  return safeQuestionTts({ text });
}
function optionRomaji(opt) {
  return createAnswerPresentation({ label: opt }).romaji;
}
function viRevealAnswer(answerText, viMeaning) {
  if (!answerText || !viMeaning) return false;
  return String(answerText).trim().toLowerCase() === String(viMeaning).trim().toLowerCase();
}
export {
  ContentDetailDrawer as C,
  GameToolbar as G,
  ModeResultsScreen$1 as M,
  QuickDictionaryOverlay as Q,
  useGameHelpers as a,
  hasJapanese as h,
  optionRomaji as o,
  questionRomaji as q,
  safeTtsText as s,
  useInGameLookup as u,
  viRevealAnswer as v
};
