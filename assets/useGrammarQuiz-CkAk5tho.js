import { r as reactExports } from "./vendor-react-BUL8WuXG.js";
import { a as useDataStore, u as useAppStore } from "./index-BEJSIlFS.js";
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function collectMinnaGrammar(minna, minLesson, maxLesson) {
  var _a;
  const result = [];
  const keys = Object.keys(minna).map(Number).filter((n) => !isNaN(n) && n >= 1).sort((a, b) => a - b);
  for (const lessonNum of keys) {
    if (maxLesson > 0 && lessonNum > maxLesson) break;
    if (minLesson > 0 && lessonNum < minLesson) continue;
    const lesson = minna[lessonNum];
    const items = lesson == null ? void 0 : lesson.grammarItems;
    if (!(items == null ? void 0 : items.length)) continue;
    for (const gi of items) {
      if (!gi.title || !((_a = gi.examples) == null ? void 0 : _a.length)) continue;
      const validExamples = gi.examples.filter((ex) => ex.jp && ex.vi);
      if (validExamples.length === 0) continue;
      result.push({
        title: gi.title,
        explanation: gi.explanation || gi.purpose || "",
        purpose: gi.purpose || "",
        examples: validExamples,
        lesson: lessonNum
      });
    }
  }
  return result;
}
function findBlankTarget(sentence, grammarTitle) {
  const MARKERS = [
    "てもいいですか",
    "てはいけません",
    "なければなりません",
    "なければならない",
    "なくてもいいです",
    "ないでください",
    "てください",
    "ています",
    "てあります",
    "てしまいました",
    "てしまう",
    "ているところ",
    "たばかり",
    "たことがある",
    "ようになる",
    "ようにする",
    "ことにする",
    "ことになる",
    "ことができる",
    "つもりです",
    "たいです",
    "ましょうか",
    "ましょう",
    "ませんか",
    "でしょう",
    "かもしれません",
    "そうです",
    "ようです",
    "らしいです",
    "はずです",
    "みたいです",
    "ということ",
    "のために",
    "ために",
    "ながら",
    "たり",
    "ので",
    "のに",
    "から",
    "けど",
    "けれど",
    "ている",
    "ておく",
    "てある",
    "てみる",
    "てくる",
    "ていく",
    "すぎる",
    "やすい",
    "にくい",
    "かた",
    "そう"
  ];
  for (const marker of MARKERS) {
    const idx = sentence.indexOf(marker);
    if (idx >= 0) {
      return {
        before: sentence.substring(0, idx),
        blank: marker,
        after: sentence.substring(idx + marker.length)
      };
    }
  }
  const endPatterns = ["です。", "ます。", "ました。", "ません。", "でした。"];
  for (const ep of endPatterns) {
    const idx = sentence.indexOf(ep);
    if (idx > 3) {
      const blankLen = Math.min(4, idx);
      const blankStart = idx - blankLen;
      return {
        before: sentence.substring(0, blankStart),
        blank: sentence.substring(blankStart, idx),
        after: sentence.substring(idx)
      };
    }
  }
  return null;
}
function useGrammarGameItems(maxItems = 30) {
  const minna = useDataStore((s) => s.minna);
  const lessonStart = useAppStore((s) => s.lessonStart);
  const lessonCap = useAppStore((s) => s.lessonCap);
  return reactExports.useMemo(() => {
    const effFrom = lessonStart > 0 ? lessonStart : 1;
    const allGrammar = collectMinnaGrammar(minna, effFrom, lessonCap);
    if (allGrammar.length === 0) return [];
    const items = [];
    for (const gi of allGrammar) {
      const ex = gi.examples[Math.floor(Math.random() * gi.examples.length)];
      const slot = findBlankTarget(ex.jp, gi.title);
      items.push({
        // For QuizMode: sentence → grammar title
        title: gi.title,
        explanation: gi.explanation,
        purpose: gi.purpose,
        // Sentence data
        sentence: ex.jp,
        sentenceBlank: slot ? slot.before + "＿＿" + slot.after : "",
        blankAnswer: slot ? slot.blank : "",
        vi: ex.vi,
        romaji: ex.romaji || "",
        lesson: gi.lesson,
        // All examples for flashcard back
        allExamples: gi.examples
      });
    }
    return shuffle(items).slice(0, maxItems);
  }, [minna, lessonStart, lessonCap, maxItems]);
}
export {
  useGrammarGameItems as u
};
