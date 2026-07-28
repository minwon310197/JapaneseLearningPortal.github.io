import { r as reactExports, j as jsxRuntimeExports, u as useShallow } from "./vendor-react-BYxMSDiB.js";
import { aG as isOnline, aH as apiFetch, as as speakJP, J as useDataStore } from "./feature-3d-ClP3ARU5.js";
import { u as useDebouncedValue } from "./useDebouncedValue-BtXOG7zv.js";
import { a as searchLocalStudyData, s as searchAppData } from "./data-index-TwpfsXMG.js";
import { N as NAV_ITEMS } from "./index-ZUSnnghe.js";
import { I as IOSSegmentControl } from "./IOSSegmentControl-B7LgaL2H.js";
import { d as useSearchParams, b as useNavigate } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-icons-DHCyxOF-.js";
const JISHO_API = "https://jisho.org/api/v1/search/words";
const KANJI_API = "https://kanjiapi.dev/v1/kanji";
async function searchJisho(query) {
  if (!(query == null ? void 0 : query.trim()) || !isOnline()) return [];
  try {
    const data = await apiFetch(`${JISHO_API}?keyword=${encodeURIComponent(query.trim())}`, {
      timeout: 8e3,
      retries: 1,
      useProxy: true,
      cacheKey: `jisho:${query.trim()}`,
      cacheTTL: 10 * 60 * 1e3
    });
    if (!(data == null ? void 0 : data.data)) return [];
    return data.data.slice(0, 20).map((entry) => ({
      slug: entry.slug,
      isCommon: entry.is_common || false,
      jlptLevels: entry.jlpt || [],
      tags: entry.tags || [],
      japanese: (entry.japanese || []).map((jp) => ({
        word: jp.word || "",
        reading: jp.reading || ""
      })),
      senses: (entry.senses || []).map((s) => ({
        partsOfSpeech: s.parts_of_speech || [],
        englishDefinitions: s.english_definitions || [],
        info: s.info || [],
        restrictions: s.restrictions || []
      }))
    }));
  } catch (e) {
    console.warn("[Jisho] Search error:", e.message);
    return [];
  }
}
async function fetchKanjiDetail(char) {
  if (!char || !isOnline()) return null;
  try {
    const data = await apiFetch(`${KANJI_API}/${encodeURIComponent(char)}`, {
      timeout: 5e3,
      retries: 1,
      useProxy: false,
      cacheKey: `kanji:${char}`,
      cacheTTL: 60 * 60 * 1e3
      // 1 hour
    });
    return {
      kanji: data.kanji,
      meanings: data.meanings || [],
      onReadings: data.on_readings || [],
      kunReadings: data.kun_readings || [],
      grade: data.grade || null,
      strokeCount: data.stroke_count || 0,
      jlpt: data.jlpt || null,
      unicode: data.unicode || ""
    };
  } catch (e) {
    return null;
  }
}
function searchLocal(query) {
  return searchLocalStudyData(query);
}
const JISHO_PART_OF_SPEECH_LABELS = {
  Noun: "Danh từ",
  Pronoun: "Đại từ",
  Adverb: "Trạng từ",
  Adjective: "Tính từ",
  "Adverbial noun": "Danh từ trạng ngữ",
  "Adjectival nouns or quasi-adjectives (keiyodoshi)": "Tính từ đuôi na",
  "Godan verb with u ending": "Động từ nhóm 1 đuôi u",
  "Godan verb with ru ending": "Động từ nhóm 1 đuôi ru",
  "Godan verb with mu ending": "Động từ nhóm 1 đuôi mu",
  "Godan verb with bu ending": "Động từ nhóm 1 đuôi bu",
  "Godan verb with ku ending": "Động từ nhóm 1 đuôi ku",
  "Godan verb with gu ending": "Động từ nhóm 1 đuôi gu",
  "Godan verb with tsu ending": "Động từ nhóm 1 đuôi tsu",
  "Godan verb with su ending": "Động từ nhóm 1 đuôi su",
  "Ichidan verb": "Động từ nhóm 2",
  "Suru verb": "Động từ する",
  "Kuru verb - special class": "Động từ 来る",
  "Transitive verb": "Tha động từ",
  "Intransitive verb": "Tự động từ",
  "Expression (phrase, clause, etc.)": "Biểu thức",
  "Counter": "Trợ số từ",
  "Particle": "Trợ từ",
  "No-adjective (keiyodoshi)": "Tính từ na",
  "I-adjective (keiyoushi)": "Tính từ i",
  "Na-adjective (keiyodoshi)": "Tính từ na",
  "Suffix": "Hậu tố",
  "Prefix": "Tiền tố"
};
function translatePartsOfSpeech(parts = []) {
  return parts.map((part) => JISHO_PART_OF_SPEECH_LABELS[part] || part).join(", ");
}
function DictionaryCard({ result }) {
  var _a, _b, _c, _d, _e;
  const primary = ((_a = result.japanese) == null ? void 0 : _a[0]) || {};
  ((_b = result.senses) == null ? void 0 : _b[0]) || {};
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-dict-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dict-card-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dict-card-word", children: primary.word || primary.reading }),
        primary.word && primary.reading && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dict-card-reading", children: primary.reading })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dict-card-badges", children: [
        result.isCommon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge n4-dict-card-badge-common", children: "Phổ biến" }),
        (_c = result.jlptLevels) == null ? void 0 : _c.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge n4-dict-card-badge", children: l.toUpperCase() }, l)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm n4-dict-card-speak", onClick: () => speakJP(primary.word || primary.reading), children: "🔊" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dict-card-senses", children: (_d = result.senses) == null ? void 0 : _d.slice(0, 3).map((sense, i) => {
      var _a2;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dict-card-sense", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dict-card-pos", children: translatePartsOfSpeech(sense.partsOfSpeech) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dict-card-def", children: (_a2 = sense.englishDefinitions) == null ? void 0 : _a2.join("; ") })
      ] }, i);
    }) }),
    ((_e = result.japanese) == null ? void 0 : _e.length) > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dict-card-alt", children: [
      "Khác: ",
      result.japanese.slice(1, 4).map((jp) => jp.word || jp.reading).join("、 ")
    ] })
  ] });
}
function KanjiDetailCard({ kanji }) {
  var _a, _b, _c;
  if (!kanji) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-dict-kanji", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dict-kanji-char", children: kanji.kanji }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dict-kanji-readings", children: [
      ((_a = kanji.onReadings) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dict-kanji-label", children: "音: " }),
        kanji.onReadings.join("、 ")
      ] }),
      ((_b = kanji.kunReadings) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dict-kanji-label", children: "訓: " }),
        kanji.kunReadings.join("、 ")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dict-kanji-meaning", children: (_c = kanji.meanings) == null ? void 0 : _c.join(", ") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dict-kanji-meta", children: [
      kanji.strokeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "✏️ ",
        kanji.strokeCount,
        " nét"
      ] }),
      kanji.grade && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "📚 Cấp ",
        kanji.grade
      ] }),
      kanji.jlpt && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "🏷️ N",
        kanji.jlpt
      ] })
    ] })
  ] });
}
function LocalResultCard({ item }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-dict-local", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dict-local-word", children: item.word || item.kanji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dict-local-reading", children: item.reading || item.on || "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dict-local-meaning", children: item.meaning || item.title || "" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dict-local-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge n4-dict-card-badge", children: item.source }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm n4-dict-card-speak", onClick: () => speakJP(item.word || item.kanji), children: "🔊" })
    ] })
  ] });
}
function Dictionary() {
  const [query, setQuery] = reactExports.useState("");
  const debouncedQuery = useDebouncedValue(query, 350);
  const [localResults, setLocalResults] = reactExports.useState([]);
  const [onlineResults, setOnlineResults] = reactExports.useState([]);
  const [kanjiDetail, setKanjiDetail] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [tab, setTab] = reactExports.useState("all");
  const inputRef = reactExports.useRef(null);
  const searchRequestRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, []);
  const doSearch = reactExports.useCallback(async (q, forceImmediate = false) => {
    const normalized = String(q || "").trim();
    const requestId = ++searchRequestRef.current;
    if (!normalized) {
      setLocalResults([]);
      setOnlineResults([]);
      setKanjiDetail(null);
      setLoading(false);
      return;
    }
    const local = searchLocal(normalized);
    setLocalResults(local);
    const singleKanji = normalized.length === 1 && /[\u4e00-\u9faf]/.test(normalized);
    if (singleKanji) {
      fetchKanjiDetail(normalized).then((data) => {
        if (searchRequestRef.current === requestId) setKanjiDetail(data);
      });
    } else {
      setKanjiDetail(null);
    }
    if (isOnline() || forceImmediate) {
      setLoading(true);
      try {
        const results = await searchJisho(normalized);
        if (searchRequestRef.current === requestId) setOnlineResults(results);
      } catch (e) {
        if (searchRequestRef.current === requestId) setOnlineResults([]);
      } finally {
        if (searchRequestRef.current === requestId) setLoading(false);
      }
    } else {
      setOnlineResults([]);
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    doSearch(debouncedQuery);
  }, [debouncedQuery, doSearch]);
  const handleInput = (e) => {
    setQuery(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      doSearch(query, true);
    }
  };
  const hasResults = localResults.length > 0 || onlineResults.length > 0 || kanjiDetail;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-dict-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dict-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-dict-title", children: "📖 Từ điển" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-dict-subtitle", children: "Tìm từ vựng, kanji — dữ liệu nội bộ + Jisho.org" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dict-search-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref: inputRef,
          className: "n4-input n4-dict-search-input",
          type: "text",
          value: query,
          onChange: handleInput,
          onKeyDown: handleKeyDown,
          placeholder: "Nhập từ tiếng Nhật, romaji, hoặc tiếng Việt..."
        }
      ),
      loading && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-dict-search-loading", children: "⏳" })
    ] }),
    hasResults && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "0 var(--n4-sp-4)", marginBottom: "var(--n4-sp-3)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      IOSSegmentControl,
      {
        items: [
          { value: "all", label: `Tất cả (${localResults.length + onlineResults.length})` },
          { value: "local", label: `Nội bộ (${localResults.length})` },
          { value: "online", label: `Jisho (${onlineResults.length})` }
        ],
        active: tab,
        onChange: setTab
      }
    ) }),
    kanjiDetail && /* @__PURE__ */ jsxRuntimeExports.jsx(KanjiDetailCard, { kanji: kanjiDetail }),
    (tab === "all" || tab === "local") && localResults.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-dict-section-title", children: "📚 Dữ liệu N4" }),
      localResults.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(LocalResultCard, { item }, `${item.source}-${item.word || item.kanji || item.reading || i}`))
    ] }),
    (tab === "all" || tab === "online") && onlineResults.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: localResults.length > 0 ? "n4-dict-online-section" : "", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-dict-section-title", children: "🌐 Jisho.org" }),
      onlineResults.map((result, i) => {
        var _a, _b, _c, _d;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(DictionaryCard, { result }, result.slug || `${((_b = (_a = result.japanese) == null ? void 0 : _a[0]) == null ? void 0 : _b.word) || ((_d = (_c = result.japanese) == null ? void 0 : _c[0]) == null ? void 0 : _d.reading) || "result"}-${i}`);
      })
    ] }),
    query.trim() && !loading && !hasResults && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        'Không tìm thấy kết quả cho "',
        query,
        '"'
      ] })
    ] }),
    !isOnline() && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dict-offline", children: "📡 Đang offline — chỉ hiển thị dữ liệu local" })
  ] });
}
const NAV_SEARCH_ITEMS = NAV_ITEMS.map((item) => ({
  ...item,
  _searchText: `${item.label || ""} ${item.desc || ""}`.toLowerCase()
}));
function InAppSearch() {
  const [query, setQuery] = reactExports.useState("");
  const debouncedQuery = useDebouncedValue(query, 120);
  const inputRef = reactExports.useRef(null);
  const navigate = useNavigate();
  const { vocab, kanji, grammar, minna } = useDataStore(useShallow((s) => ({
    vocab: s.vocab,
    kanji: s.kanji,
    grammar: s.grammar,
    minna: s.minna
  })));
  reactExports.useEffect(() => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, []);
  const results = reactExports.useMemo(() => {
    if (!debouncedQuery.trim()) return NAV_SEARCH_ITEMS;
    const q = debouncedQuery.toLowerCase();
    const navMatches = NAV_SEARCH_ITEMS.filter((item) => item._searchText.includes(q));
    const dataMatches = searchAppData(q, { vocab, kanji, grammar, minna }, 20);
    return [...navMatches, ...dataMatches];
  }, [debouncedQuery, vocab, kanji, grammar, minna]);
  const navResults = results.filter((i) => i.cat !== "data");
  const dataResults = results.filter((i) => i.cat === "data");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", style: { padding: "0 16px 16px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontSize: "1.2em", marginBottom: 4 }, children: "🔍 Tìm kiếm trong ứng dụng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-muted)", fontSize: "0.85em" }, children: "Tìm từ vựng, kanji, ngữ pháp, trang, và công cụ" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: inputRef,
        type: "text",
        className: "n4-input",
        placeholder: "Nhập từ khóa tìm kiếm...",
        value: query,
        onChange: (e) => setQuery(e.target.value),
        style: { width: "100%", marginBottom: 16 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 4 }, children: [
      results.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", padding: 24, color: "var(--n4-text-muted)" }, children: [
        'Không tìm thấy kết quả cho "',
        query,
        '"'
      ] }),
      navResults.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        !query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.75em", color: "var(--n4-text-muted)", padding: "8px 0 4px", fontWeight: 600 }, children: "TRANG & CÔNG CỤ" }),
        navResults.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "n4-card",
            style: { padding: "10px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 },
            onClick: () => navigate(item.path),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.2em" }, children: item.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { textAlign: "left" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600 }, children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8em", color: "var(--n4-text-muted)" }, children: item.desc })
              ] })
            ]
          },
          item.path || item.label
        ))
      ] }),
      dataResults.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.75em", color: "var(--n4-text-muted)", padding: "8px 0 4px", fontWeight: 600 }, children: "DỮ LIỆU" }),
        dataResults.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "n4-card",
            style: { padding: "10px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 },
            onClick: () => navigate(item.path),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.2em" }, children: item.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { textAlign: "left" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600 }, children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8em", color: "var(--n4-text-muted)" }, children: item.desc })
              ] })
            ]
          },
          `data-${item.path || ""}-${item.label}-${i}`
        ))
      ] })
    ] })
  ] });
}
function Lookup() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") === "search" ? "search" : "dictionary";
  const switchTab = (tab) => {
    setSearchParams(tab === "search" ? { tab: "search" } : {});
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      gap: 4,
      padding: "12px 16px 0",
      borderBottom: "1px solid var(--n4-border, rgba(255,255,255,0.08))"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-btn n4-btn-sm ${activeTab === "dictionary" ? "n4-btn-primary" : "n4-btn-ghost"}`,
          onClick: () => switchTab("dictionary"),
          style: { borderRadius: "8px 8px 0 0" },
          children: "📖 Từ điển"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-btn n4-btn-sm ${activeTab === "search" ? "n4-btn-primary" : "n4-btn-ghost"}`,
          onClick: () => switchTab("search"),
          style: { borderRadius: "8px 8px 0 0" },
          children: "🔍 Tìm kiếm"
        }
      )
    ] }),
    activeTab === "dictionary" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Dictionary, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(InAppSearch, {})
  ] });
}
export {
  Lookup as default
};
