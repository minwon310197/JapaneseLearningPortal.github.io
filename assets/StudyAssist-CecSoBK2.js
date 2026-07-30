import { r as reactExports, u as useShallow, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { s as safeGetItem, S as STORAGE_KEYS, b as useDataStore, a5 as stopSpeech, ac as onStopAll, ad as speakLongText, d as safeSetItem, k as kanaToRomaji, ae as readingToRomaji, af as isKanjiChar, ag as isKanaChar, a2 as isMuted } from "./feature-3d-jK3b4Iv-.js";
import { B as useAIKey, F as batchTranslate, G as batchRomaji } from "./feature-3d-hud-Dp6hMoyV.js";
import { b as buildVocabLookupMap } from "./data-index-CwfOmPuR.js";
import { u as useLocation } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-supabase-DTEAj5J1.js";
const JP_REGEX = /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf\u3400-\u4dbf]/;
const KANA_REGEX = /^[\u3040-\u309f\u30a0-\u30ff\u30fc]+$/;
function isJapanese(text) {
  return JP_REGEX.test(text);
}
function tryDeconjugate(word, vocabMap) {
  const DECONJ = [
    // て/た-form (godan)
    [/って$/, ["う", "つ", "る"]],
    [/った$/, ["う", "つ", "る"]],
    [/んで$/, ["む", "ぶ", "ぬ"]],
    [/んだ$/, ["む", "ぶ", "ぬ"]],
    [/いて$/, ["く"]],
    [/いた$/, ["く"]],
    [/いで$/, ["ぐ"]],
    [/いだ$/, ["ぐ"]],
    [/して$/, ["す"]],
    [/した$/, ["す"]],
    // ichidan て/た
    [/て$/, ["る"]],
    [/た$/, ["る"]],
    // ない-form (godan)
    [/わない$/, ["う"]],
    [/かない$/, ["く"]],
    [/がない$/, ["ぐ"]],
    [/さない$/, ["す"]],
    [/たない$/, ["つ"]],
    [/ばない$/, ["ぶ"]],
    [/まない$/, ["む"]],
    [/らない$/, ["る"]],
    // ない-form (ichidan)
    [/ない$/, ["る"]],
    // ます-form
    [/きます$/, ["く"]],
    [/ぎます$/, ["ぐ"]],
    [/します$/, ["す"]],
    [/ちます$/, ["つ"]],
    [/びます$/, ["ぶ"]],
    [/みます$/, ["む"]],
    [/ります$/, ["る"]],
    [/います$/, ["う"]],
    [/ます$/, ["る"]],
    // ichidan fallback
    // potential form
    [/ける$/, ["く"]],
    [/げる$/, ["ぐ"]],
    [/せる$/, ["す"]],
    [/てる$/, ["つ"]],
    [/べる$/, ["ぶ"]],
    [/める$/, ["む"]],
    [/れる$/, ["る", "う"]],
    // ている/ていた
    [/ている$/, ["る", "う", "く", "す", "つ", "ぶ", "む", "ぐ"]],
    [/ていた$/, ["る", "う", "く", "す", "つ", "ぶ", "む", "ぐ"]],
    // ました (past polite)
    [/きました$/, ["く"]],
    [/ぎました$/, ["ぐ"]],
    [/しました$/, ["す"]],
    [/ちました$/, ["つ"]],
    [/びました$/, ["ぶ"]],
    [/みました$/, ["む"]],
    [/りました$/, ["る"]],
    [/いました$/, ["う"]],
    [/ました$/, ["る"]],
    // ません (negative polite)
    [/きません$/, ["く"]],
    [/ぎません$/, ["ぐ"]],
    [/しません$/, ["す"]],
    [/ちません$/, ["つ"]],
    [/びません$/, ["ぶ"]],
    [/みません$/, ["む"]],
    [/りません$/, ["る"]],
    [/いません$/, ["う"]],
    [/ません$/, ["る"]],
    // ましょう (volitional polite)
    [/きましょう$/, ["く"]],
    [/ぎましょう$/, ["ぐ"]],
    [/しましょう$/, ["す"]],
    [/ちましょう$/, ["つ"]],
    [/びましょう$/, ["ぶ"]],
    [/みましょう$/, ["む"]],
    [/りましょう$/, ["る"]],
    [/いましょう$/, ["う"]],
    [/ましょう$/, ["る"]],
    // たい (desiderative)
    [/きたい$/, ["く"]],
    [/ぎたい$/, ["ぐ"]],
    [/したい$/, ["す"]],
    [/ちたい$/, ["つ"]],
    [/びたい$/, ["ぶ"]],
    [/みたい$/, ["む"]],
    [/りたい$/, ["る"]],
    [/いたい$/, ["う"]],
    [/たい$/, ["る"]],
    // なかった (past negative)
    [/わなかった$/, ["う"]],
    [/かなかった$/, ["く"]],
    [/がなかった$/, ["ぐ"]],
    [/さなかった$/, ["す"]],
    [/たなかった$/, ["つ"]],
    [/ばなかった$/, ["ぶ"]],
    [/まなかった$/, ["む"]],
    [/らなかった$/, ["る"]],
    [/なかった$/, ["る"]]
  ];
  for (const [regex, endings] of DECONJ) {
    const m = word.match(regex);
    if (!m) continue;
    const stem = word.substring(0, m.index);
    if (!stem) continue;
    for (const end of endings) {
      const dictForm = stem + end;
      if (vocabMap[dictForm]) return { entry: vocabMap[dictForm], dict: dictForm };
    }
  }
  return null;
}
let _segmenter = null;
function getSegmenter() {
  if (_segmenter) return _segmenter;
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    try {
      _segmenter = new Intl.Segmenter("ja", { granularity: "word" });
    } catch (e) {
    }
  }
  return _segmenter;
}
function segmentJP(text, vocabMap, wIdx) {
  const segmenter = getSegmenter();
  if (segmenter) {
    return segmentWithIntl(text, vocabMap, segmenter);
  }
  return segmentManual(text, vocabMap, wIdx);
}
function segmentWithIntl(text, vocabMap, segmenter) {
  const segments = [...segmenter.segment(text)];
  const result = [];
  for (const seg of segments) {
    const word = seg.segment;
    if (!seg.isWordLike) {
      result.push({ t: word, k: "punct" });
      continue;
    }
    if (vocabMap[word]) {
      result.push({ t: word, e: vocabMap[word], k: "w" });
      continue;
    }
    const deconj = tryDeconjugate(word, vocabMap);
    if (deconj) {
      result.push({ t: word, e: deconj.entry, k: "w", dict: deconj.dict });
      continue;
    }
    if (KANA_REGEX.test(word)) {
      result.push({ t: word, k: "kana" });
      continue;
    }
    if (word.length === 1 && isKanjiChar(word)) {
      result.push({ t: word, e: vocabMap[word], k: "kanji" });
    } else {
      result.push({ t: word, k: "unknown" });
    }
  }
  return result;
}
function buildWordIndex(vocabMap) {
  const index = {};
  for (const word of Object.keys(vocabMap)) {
    if (!word) continue;
    const first = word[0];
    if (!index[first]) index[first] = [];
    index[first].push(word);
  }
  for (const key of Object.keys(index)) {
    index[key].sort((a, b) => b.length - a.length);
  }
  return index;
}
function segmentManual(text, vocabMap, wIdx) {
  const result = [];
  let i = 0;
  while (i < text.length) {
    const cands = wIdx[text[i]] || [];
    let matched = false;
    for (const word of cands) {
      if (word.length <= text.length - i && text.substring(i, i + word.length) === word) {
        result.push({ t: word, e: vocabMap[word], k: "w" });
        i += word.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;
    if (isKanjiChar(text[i])) {
      let found = false;
      let maxOku = 0;
      for (let j = i + 1; j < text.length && j <= i + 4 && isKanaChar(text[j]); j++) maxOku = j - i;
      for (let len = maxOku; len >= 1; len--) {
        const compound = text.substring(i, i + 1 + len);
        if (vocabMap[compound]) {
          result.push({ t: compound, e: vocabMap[compound], k: "w" });
          i += compound.length;
          found = true;
          break;
        }
      }
      if (found) continue;
      let kanjiEnd = i + 1;
      while (kanjiEnd < text.length && kanjiEnd < i + 4 && isKanjiChar(text[kanjiEnd])) kanjiEnd++;
      if (kanjiEnd > i + 1) {
        let mf = false;
        let mEnd = kanjiEnd;
        while (mEnd < text.length && mEnd < kanjiEnd + 3 && isKanaChar(text[mEnd])) mEnd++;
        for (let end = mEnd; end >= i + 2; end--) {
          const comp = text.substring(i, end);
          if (vocabMap[comp]) {
            result.push({ t: comp, e: vocabMap[comp], k: "w" });
            i = end;
            mf = true;
            break;
          }
        }
        if (mf) continue;
      }
      result.push({ t: text[i], e: vocabMap[text[i]], k: "kanji" });
      i++;
    } else if (isKanaChar(text[i])) {
      let start = i;
      while (i < text.length && isKanaChar(text[i])) i++;
      result.push({ t: text.substring(start, i), k: "kana" });
    } else {
      result.push({ t: text[i], k: "punct" });
      i++;
    }
  }
  return result;
}
const PARTICLE_SET = /* @__PURE__ */ new Set([
  "は",
  "が",
  "を",
  "に",
  "で",
  "と",
  "も",
  "の",
  "へ",
  "から",
  "まで",
  "より",
  "か",
  "ね",
  "よ",
  "な",
  "わ"
]);
function splitSentences(text) {
  const result = [];
  let current = "";
  for (let i = 0; i < text.length; i++) {
    current += text[i];
    if (text[i] === "。" || text[i] === "！" || text[i] === "？" || text[i] === "\n") {
      if (current.trim()) result.push(current);
      current = "";
    }
  }
  if (current.trim()) result.push(current);
  return result.length ? result : [text];
}
function simpleHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return h.toString(36);
}
function offlineFallback(sentence, mode, vocabMap, wIdx) {
  const pieces = segmentJP(sentence, vocabMap, wIdx);
  if (mode === "romaji") {
    return pieces.map((p) => {
      if (p.k === "punct") return p.t;
      if (p.k === "kana") return kanaToRomaji(p.t);
      if (p.e) {
        const r = readingToRomaji(p.t, p.e.reading, p.e.romaji);
        if (r) return r;
      }
      if (KANA_REGEX.test(p.t)) return kanaToRomaji(p.t);
      return p.t;
    }).join(" ").replace(/\s+/g, " ").trim();
  }
  return pieces.map((p) => {
    var _a;
    if (p.k === "punct") return "";
    if (PARTICLE_SET.has(p.t)) return "";
    if ((_a = p.e) == null ? void 0 : _a.meaning) {
      const m = p.e.meaning;
      return m.length > 20 ? m.substring(0, 18) + "…" : m;
    }
    return "";
  }).filter(Boolean).join(" · ");
}
const ANNOTATION_ATTR = "data-sa-annotated";
const WRAPPER_CLASS = "sa-annotated-wrapper";
function getTextNodesIn(root) {
  const nodes = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "TEXTAREA" || tag === "INPUT") return NodeFilter.FILTER_REJECT;
      if (parent.closest(".sa-toolbar, .n4-nav, nav, .n4-mobile-nav, .sa-annotation")) return NodeFilter.FILTER_REJECT;
      if (parent.hasAttribute(ANNOTATION_ATTR)) return NodeFilter.FILTER_REJECT;
      const text = node.textContent;
      if (!text || !text.trim()) return NodeFilter.FILTER_REJECT;
      if (!isJapanese(text)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function clearAnnotations() {
  document.querySelectorAll("." + WRAPPER_CLASS).forEach((wrapper) => {
    const originalText = wrapper.getAttribute("data-sa-original");
    if (originalText != null) {
      const textNode = document.createTextNode(originalText);
      wrapper.parentNode.replaceChild(textNode, wrapper);
    }
  });
}
async function annotateText(mode, isCancelled, source = "ai", vocabMap = {}, wordIndex = []) {
  clearAnnotations();
  const main = document.querySelector(".n4-main") || document.querySelector(".n4-app");
  if (!main) return;
  const textNodes = getTextNodesIn(main);
  if (!textNodes.length) return;
  const allJPSentences = [];
  const lineBelowElements = [];
  textNodes.forEach((node) => {
    const text = node.textContent;
    if (!text.trim()) return;
    const wrapper = document.createElement("span");
    wrapper.className = WRAPPER_CLASS;
    wrapper.setAttribute(ANNOTATION_ATTR, "1");
    wrapper.setAttribute("data-sa-original", text);
    const sentences = splitSentences(text);
    sentences.forEach((sent) => {
      if (!isJapanese(sent)) {
        wrapper.appendChild(document.createTextNode(sent));
        return;
      }
      const block = document.createElement("span");
      block.className = "sa-annotated-block";
      const original = document.createElement("span");
      original.className = "sa-original";
      original.textContent = sent;
      block.appendChild(original);
      const lineBelow = document.createElement("span");
      lineBelow.className = source === "local" ? "sa-line-below" : "sa-line-below sa-line-loading";
      lineBelow.textContent = source === "local" ? "" : "…";
      block.appendChild(lineBelow);
      wrapper.appendChild(block);
      allJPSentences.push(sent);
      lineBelowElements.push(lineBelow);
    });
    node.parentNode.replaceChild(wrapper, node);
  });
  if (!allJPSentences.length) return;
  if (source === "local") {
    const results2 = allJPSentences.map((s) => offlineFallback(s, mode, vocabMap, wordIndex));
    results2.forEach((r, i) => {
      if (lineBelowElements[i]) {
        lineBelowElements[i].textContent = r || "";
      }
    });
    return;
  }
  const cacheKey = `sa-${mode}-${simpleHash(allJPSentences.join("|"))}`;
  let results = null;
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length === allJPSentences.length) results = parsed;
    }
  } catch (e) {
  }
  if (!results) {
    try {
      results = mode === "meaning" ? await batchTranslate(allJPSentences, "") : await batchRomaji(allJPSentences, "");
      try {
        sessionStorage.setItem(cacheKey, JSON.stringify(results));
      } catch (e) {
      }
    } catch (e) {
      console.warn("AI annotation failed, using offline fallback:", e.message);
    }
    if (isCancelled == null ? void 0 : isCancelled()) return;
    if (!results) {
      results = allJPSentences.map((s) => offlineFallback(s, mode, vocabMap, wordIndex));
    }
  }
  if (isCancelled == null ? void 0 : isCancelled()) return;
  results.forEach((r, i) => {
    if (lineBelowElements[i]) {
      lineBelowElements[i].textContent = r || "";
      lineBelowElements[i].classList.remove("sa-line-loading");
    }
  });
}
function collectJapaneseText() {
  const main = document.querySelector(".n4-main") || document.querySelector(".n4-app");
  if (!main) return "";
  const texts = [];
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      var _a, _b, _c, _d;
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "RT") return NodeFilter.FILTER_REJECT;
      if (parent.closest(".sa-toolbar, .n4-nav, nav, .n4-mobile-nav, .sa-line-below")) {
        return NodeFilter.FILTER_REJECT;
      }
      try {
        const cs = (_c = (_b = (_a = parent.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle) == null ? void 0 : _c.call(_b, parent);
        if (cs && (cs.display === "none" || cs.visibility === "hidden")) {
          return NodeFilter.FILTER_REJECT;
        }
      } catch (e) {
      }
      const text = (_d = node.textContent) == null ? void 0 : _d.trim();
      if (!text || !isJapanese(text)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  while (walker.nextNode()) {
    const t = walker.currentNode.textContent.trim();
    if (t) texts.push(t);
  }
  return [...new Set(texts)].join("。 ");
}
function StudyAssist() {
  const [expanded, setExpanded] = reactExports.useState(false);
  const [activeMode, setActiveMode] = reactExports.useState(null);
  const [speaking, setSpeaking] = reactExports.useState(false);
  const { hasKey: hasAiKey, isLoggedIn } = useAIKey();
  const [fontSize, setFontSize] = reactExports.useState(() => {
    try {
      return parseFloat(safeGetItem(STORAGE_KEYS.FONT_SIZE_BASE)) || 15;
    } catch (e) {
      return 15;
    }
  });
  const [showScrollTop, setShowScrollTop] = reactExports.useState(false);
  const location = useLocation();
  const toolbarRef = reactExports.useRef(null);
  const { vocab, kanji, grammar, minna } = useDataStore(useShallow((s) => ({
    vocab: s.vocab,
    kanji: s.kanji,
    grammar: s.grammar,
    minna: s.minna
  })));
  const vocabMap = reactExports.useMemo(() => buildVocabLookupMap({ vocab, kanji, grammar, minna }), [vocab, kanji, grammar, minna]);
  const wordIndex = reactExports.useMemo(() => buildWordIndex(vocabMap), [vocabMap]);
  reactExports.useEffect(() => {
    clearAnnotations();
    setActiveMode(null);
    setSpeaking(false);
    stopSpeech();
  }, [location.pathname]);
  reactExports.useEffect(() => {
    const unsub = onStopAll(() => {
      setSpeaking(false);
    });
    return unsub;
  }, []);
  reactExports.useEffect(() => {
    if (!activeMode) {
      clearAnnotations();
      return;
    }
    const { mode, source } = activeMode;
    let cancelled = false;
    annotateText(mode, () => cancelled, source, vocabMap, wordIndex);
    const main = document.querySelector(".n4-main") || document.querySelector(".n4-app");
    if (!main) return;
    let debounceTimer;
    let applying = false;
    const observer = new MutationObserver((mutations) => {
      if (applying || cancelled) return;
      const isOwn = mutations.every((m) => {
        if (m.type !== "childList") return false;
        return [...m.addedNodes].every(
          (n) => {
            var _a, _b;
            return n.nodeType === 1 && (((_a = n.hasAttribute) == null ? void 0 : _a.call(n, ANNOTATION_ATTR)) || ((_b = n.classList) == null ? void 0 : _b.contains(WRAPPER_CLASS)));
          }
        );
      });
      if (isOwn) return;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        if (cancelled) return;
        applying = true;
        annotateText(mode, () => cancelled, source, vocabMap, wordIndex).then(() => {
          applying = false;
        }).catch(() => {
          applying = false;
        });
      }, 150);
    });
    observer.observe(main, { childList: true, subtree: true });
    return () => {
      cancelled = true;
      observer.disconnect();
      clearTimeout(debounceTimer);
    };
  }, [activeMode, vocabMap, wordIndex]);
  reactExports.useEffect(() => {
    const container = document.querySelector(".n4-main");
    if (!container) return;
    function onScroll() {
      setShowScrollTop(container.scrollTop > 200);
    }
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);
  const readCtrlRef = reactExports.useRef(null);
  const handleReadAloud = reactExports.useCallback(() => {
    var _a;
    if (speaking) {
      (_a = readCtrlRef.current) == null ? void 0 : _a.cancel();
      readCtrlRef.current = null;
      stopSpeech();
      setSpeaking(false);
      return;
    }
    if (isMuted()) return;
    const text = collectJapaneseText();
    if (!text) return;
    setSpeaking(true);
    const ctrl = speakLongText(text, { lang: "ja-JP", rate: 0.85 });
    readCtrlRef.current = ctrl;
    ctrl.promise.finally(() => {
      if (readCtrlRef.current === ctrl) readCtrlRef.current = null;
      setSpeaking(false);
    });
  }, [speaking]);
  const handleReadSelection = reactExports.useCallback(() => {
    var _a;
    const text = window.getSelection().toString().trim();
    if (!text) {
      alert("Vui lòng bôi đen (chọn) đoạn văn bản cần đọc trước.");
      return;
    }
    if (speaking) {
      (_a = readCtrlRef.current) == null ? void 0 : _a.cancel();
      readCtrlRef.current = null;
      stopSpeech();
      setSpeaking(false);
      return;
    }
    if (isMuted()) return;
    setSpeaking(true);
    const ctrl = speakLongText(text, { lang: "ja-JP", rate: 0.85 });
    readCtrlRef.current = ctrl;
    ctrl.promise.finally(() => {
      if (readCtrlRef.current === ctrl) readCtrlRef.current = null;
      setSpeaking(false);
    });
  }, [speaking]);
  reactExports.useEffect(() => () => {
    var _a;
    (_a = readCtrlRef.current) == null ? void 0 : _a.cancel();
  }, []);
  const toggleAnnotation = reactExports.useCallback((mode, source) => {
    setActiveMode((prev) => {
      if (prev && prev.mode === mode && prev.source === source) return null;
      return { mode, source };
    });
  }, []);
  const changeFontSize = reactExports.useCallback((delta) => {
    setFontSize((prev) => {
      const next = Math.min(22, Math.max(12, prev + delta));
      document.documentElement.style.fontSize = next + "px";
      safeSetItem(STORAGE_KEYS.FONT_SIZE_BASE, String(next));
      return next;
    });
  }, []);
  const scrollToTop = reactExports.useCallback(() => {
    const container = document.querySelector(".n4-main");
    if (container) container.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  reactExports.useEffect(() => {
    if (!expanded) return;
    function handleClick(e) {
      if (toolbarRef.current && !toolbarRef.current.contains(e.target)) {
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [expanded]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `sa-toolbar ${expanded ? "sa-expanded" : ""}`, ref: toolbarRef, children: [
      expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sa-panel sa-panel-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `sa-btn ${(activeMode == null ? void 0 : activeMode.mode) === "meaning" && (activeMode == null ? void 0 : activeMode.source) === "ai" ? "sa-active" : ""}`,
            onClick: () => toggleAnnotation("meaning", "ai"),
            disabled: !hasAiKey,
            title: hasAiKey ? "Dịch nghĩa tiếng Việt bằng AI" : !isLoggedIn ? "Vui lòng đăng nhập để sử dụng" : "Đang chờ AI key...",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-label", children: "Dịch nghĩa VN (AI)" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `sa-btn ${(activeMode == null ? void 0 : activeMode.mode) === "meaning" && (activeMode == null ? void 0 : activeMode.source) === "local" ? "sa-active" : ""}`,
            onClick: () => toggleAnnotation("meaning", "local"),
            title: "Dịch nghĩa tiếng Việt từ dữ liệu có sẵn (offline)",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-label", children: "Dịch nghĩa VN (Local)" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `sa-btn ${(activeMode == null ? void 0 : activeMode.mode) === "romaji" && (activeMode == null ? void 0 : activeMode.source) === "ai" ? "sa-active" : ""}`,
            onClick: () => toggleAnnotation("romaji", "ai"),
            disabled: !hasAiKey,
            title: hasAiKey ? "Phiên âm Romaji bằng AI" : !isLoggedIn ? "Vui lòng đăng nhập để sử dụng" : "Đang chờ AI key...",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-label", children: "Phiên âm Romaji (AI)" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `sa-btn ${(activeMode == null ? void 0 : activeMode.mode) === "romaji" && (activeMode == null ? void 0 : activeMode.source) === "local" ? "sa-active" : ""}`,
            onClick: () => toggleAnnotation("romaji", "local"),
            title: "Phiên âm Romaji từ dữ liệu có sẵn (offline)",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-label", children: "Phiên âm Romaji (Local)" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `sa-btn ${speaking ? "sa-active" : ""}`,
            onClick: handleReadAloud,
            title: "Đọc to toàn bộ chữ Nhật trên trang",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-label", children: speaking ? "Dừng đọc" : "Đọc tất cả" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `sa-btn ${speaking ? "sa-active" : ""}`,
            onClick: handleReadSelection,
            title: "Bôi đen văn bản và nhấn để đọc",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-btn-label", children: "Đọc phần bôi đen" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sa-font-group", title: `Cỡ chữ: ${fontSize}px`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sa-font-btn", onClick: () => changeFontSize(-1), "aria-label": "Thu nhỏ", children: "−" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-font-val", children: "A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sa-font-btn", onClick: () => changeFontSize(1), "aria-label": "Phóng to", children: "+" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `sa-toggle ${expanded ? "sa-toggle-open" : ""} ${activeMode || speaking ? "sa-toggle-active" : ""}`,
          onClick: () => setExpanded((prev) => !prev),
          title: "Công cụ hỗ trợ học",
          "aria-label": "Công cụ hỗ trợ học",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sa-toggle-icon", children: "📖" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `sa-scroll-top ${showScrollTop ? "sa-visible" : ""}`,
        onClick: scrollToTop,
        title: "Lên đầu trang",
        "aria-label": "Lên đầu trang",
        children: "↑"
      }
    )
  ] });
}
export {
  StudyAssist as default
};
