import { r as reactExports } from "./vendor-react-BYxMSDiB.js";
import { h as collectMinnaVocabItems, i as effectiveCap, j as effectiveStart, k as flattenSectionItems, n as filterKanjiEntriesByVocab, q as collectMinnaGrammarItems, r as buildLessonSectionList } from "./index-CjITGIof.js";
import { b as useDataStore, a as useAppStore } from "./feature-3d-jK3b4Iv-.js";
function useVocabItems(section) {
  const vocab = useDataStore((s) => s.vocab);
  const minna = useDataStore((s) => s.minna);
  const lessonStart = useAppStore((s) => s.lessonStart);
  const lessonCap = useAppStore((s) => s.lessonCap);
  return reactExports.useMemo(() => {
    if (lessonCap > 0 && minna && Object.keys(minna).length > 0) {
      const minnaVocab = collectMinnaVocabItems(minna, effectiveStart(), effectiveCap());
      if (!section || section === "all") return minnaVocab;
      return minnaVocab.filter((it) => it._section === section);
    }
    const all = flattenSectionItems(vocab);
    if (!section || section === "all") return all;
    return all.filter((it) => it._section === section);
  }, [vocab, minna, lessonStart, lessonCap, section]);
}
function useKanjiItems(section) {
  const kanji = useDataStore((s) => s.kanji);
  const minna = useDataStore((s) => s.minna);
  const lessonStart = useAppStore((s) => s.lessonStart);
  const lessonCap = useAppStore((s) => s.lessonCap);
  return reactExports.useMemo(() => {
    if (lessonCap > 0 && minna && Object.keys(minna).length > 0) {
      const minnaVocab = collectMinnaVocabItems(minna, effectiveStart(), effectiveCap());
      const filtered = filterKanjiEntriesByVocab(kanji, minnaVocab);
      if (!section || section === "all") return filtered;
      return filtered.filter((it) => it._section === section);
    }
    const all = flattenSectionItems(kanji);
    if (!section || section === "all") return all;
    return all.filter((it) => it._section === section);
  }, [kanji, minna, lessonStart, lessonCap, section]);
}
function useGrammarItems(section) {
  const grammar = useDataStore((s) => s.grammar);
  const minna = useDataStore((s) => s.minna);
  const lessonStart = useAppStore((s) => s.lessonStart);
  const lessonCap = useAppStore((s) => s.lessonCap);
  return reactExports.useMemo(() => {
    if (lessonCap > 0 && minna && Object.keys(minna).length > 0) {
      const minnaGrammar = collectMinnaGrammarItems(minna, effectiveStart(), effectiveCap());
      if (!section || section === "all") return minnaGrammar;
      return minnaGrammar.filter((it) => it._section === section);
    }
    const all = flattenSectionItems(grammar);
    if (!section || section === "all") return all;
    return all.filter((it) => it._section === section);
  }, [grammar, minna, lessonStart, lessonCap, section]);
}
function useSectionList(type) {
  const vocab = useDataStore((s) => s.vocab);
  const kanji = useDataStore((s) => s.kanji);
  const grammar = useDataStore((s) => s.grammar);
  const minna = useDataStore((s) => s.minna);
  const minnaLessons = useDataStore((s) => s.minnaLessons);
  const lessonStart = useAppStore((s) => s.lessonStart);
  const lessonCap = useAppStore((s) => s.lessonCap);
  return reactExports.useMemo(() => {
    if (lessonCap > 0 && minna && Object.keys(minna).length > 0) {
      return buildLessonSectionList(type, minna, minnaLessons, effectiveStart(), effectiveCap());
    }
    const data = type === "kanji" ? kanji : type === "grammar" ? grammar : vocab;
    if (!(data == null ? void 0 : data.length)) return [];
    return data.map((sec) => {
      var _a, _b, _c;
      return {
        id: sec.id !== void 0 ? String(sec.id) : sec.name || sec.title || "",
        title: sec.name || sec.title || String(sec.id) || "",
        count: ((_a = sec.patterns) == null ? void 0 : _a.length) || ((_b = sec.entries) == null ? void 0 : _b.length) || ((_c = sec.items) == null ? void 0 : _c.length) || 0
      };
    });
  }, [type, vocab, kanji, grammar, minna, minnaLessons, lessonStart, lessonCap]);
}
export {
  useKanjiItems as a,
  useGrammarItems as b,
  useSectionList as c,
  useVocabItems as u
};
