import { r as reactExports, R as React, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { h as useLearningStore, x as playSFX, L as speakJP } from "./index-BEJSIlFS.js";
import { a as awardAjlRewards } from "./ajl-rewards-DFK0Q7fw.js";
import { S as ScaffoldingLayer } from "./ScaffoldingLayer-BwAQh4aw.js";
import { Q as QuizFeedback } from "./QuizFeedback-Pap1aVYn.js";
import { h as hasJapanese, q as questionRomaji, o as optionRomaji, M as ModeResultsScreen } from "./ModeResultsScreen-5Gki9ifL.js";
import { u as useScoreEngine } from "./useScoreEngine-f-lCg0MN.js";
import { A as AnimatePresence, m as motion } from "./vendor-motion-C2SAPQSW.js";
import { k as Sword, H as Heart, l as Shield, Z as Zap, i as Sparkles, C as ChevronRight } from "./vendor-icons-D83cEu6Z.js";
function BattleBackdrop() {
  return null;
}
function SushiBackdrop() {
  return null;
}
const KANJI_CONTEXT_READINGS = {
  "人": "ひと",
  "男": "おとこ",
  "女": "おんな",
  "子": "こ",
  "父": "ちち",
  "母": "はは",
  "兄": "あに",
  "弟": "おとうと",
  "姉": "あね",
  "妹": "いもうと",
  "夫": "おっと",
  "妻": "つま",
  "友": "とも",
  "体": "からだ",
  "頭": "あたま",
  "顔": "かお",
  "目": "め",
  "耳": "みみ",
  "口": "くち",
  "手": "て",
  "足": "あし",
  "心": "しん",
  "声": "こえ",
  "天": "てん",
  "気": "き",
  "雨": "あめ",
  "雪": "ゆき",
  "風": "かぜ",
  "空": "そら",
  "海": "うみ",
  "山": "やま",
  "川": "かわ",
  "林": "はやし",
  "森": "もり",
  "花": "はな",
  "草": "くさ",
  "木": "き",
  "石": "いし",
  "地": "じ",
  "光": "ひかり",
  "鳥": "とり",
  "魚": "さかな",
  "犬": "いぬ",
  "日": "にち",
  "月": "つき",
  "年": "ねん",
  "時": "じ",
  "分": "ふん",
  "週": "しゅう",
  "曜": "よう",
  "朝": "あさ",
  "昼": "ひる",
  "夕": "ゆう",
  "夜": "よる",
  "春": "はる",
  "夏": "なつ",
  "秋": "あき",
  "冬": "ふゆ",
  "百": "ひゃく",
  "千": "せん",
  "万": "まん",
  "多": "おお",
  "少": "すこ",
  "半": "はん",
  "全": "まった",
  "行": "い",
  "来": "く",
  "帰": "かえ",
  "食": "た",
  "飲": "の",
  "見": "み",
  "聞": "き",
  "読": "よ",
  "書": "か",
  "話": "はな",
  "買": "か",
  "売": "う",
  "作": "つく",
  "使": "つか",
  "持": "も",
  "待": "ま",
  "立": "た",
  "座": "すわ",
  "走": "はし",
  "歩": "ある",
  "止": "と",
  "送": "おく",
  "届": "とど",
  "開": "あ",
  "閉": "し",
  "入": "い",
  "出": "で",
  "動": "うご",
  "働": "はたら",
  "洗": "あら",
  "切": "き",
  "思": "おも",
  "知": "し",
  "考": "かんが",
  "教": "おし",
  "習": "なら",
  "学": "がく",
  "校": "こう",
  "先": "さき",
  "生": "い",
  "試": "し",
  "験": "けん",
  "問": "と",
  "答": "こた",
  "文": "ぶん",
  "字": "じ",
  "英": "えい",
  "語": "ご",
  "国": "くに",
  "都": "と",
  "町": "まち",
  "村": "むら",
  "家": "いえ",
  "室": "しつ",
  "堂": "どう",
  "店": "みせ",
  "病": "びょう",
  "院": "いん",
  "道": "みち",
  "駅": "えき",
  "車": "くるま",
  "電": "でん",
  "会": "あ",
  "社": "しゃ",
  "仕": "し",
  "事": "こと",
  "物": "もの",
  "金": "かね",
  "銀": "ぎん",
  "力": "ちから",
  "世": "よ",
  "運": "うん",
  "転": "てん",
  "色": "いろ",
  "音": "おと",
  "味": "あじ",
  "大": "おお",
  "小": "ちい",
  "長": "なが",
  "短": "みじか",
  "高": "たか",
  "低": "ひく",
  "強": "つよ",
  "弱": "よわ",
  "明": "あか",
  "暗": "くら",
  "重": "おも",
  "軽": "かる",
  "広": "ひろ",
  "狭": "せま",
  "新": "あたら",
  "古": "ふる",
  "白": "しろ",
  "黒": "くろ",
  "赤": "あか",
  "青": "あお",
  "早": "はや",
  "遅": "おそ",
  "近": "ちか",
  "遠": "とお",
  "正": "ただ",
  "悪": "わる",
  "楽": "たの",
  "好": "す",
  "上": "うえ",
  "下": "した",
  "中": "なか",
  "外": "そと",
  "右": "みぎ",
  "左": "ひだり",
  "前": "まえ",
  "後": "あと",
  "北": "きた",
  "南": "みなみ",
  "東": "ひがし",
  "西": "にし",
  "内": "うち",
  "起": "お",
  "受": "う",
  "終": "お",
  "集": "あつ",
  "乗": "の",
  "始": "はじ",
  "引": "ひ",
  "着": "つ",
  "発": "ぱつ",
  "払": "はら",
  "写": "しゃ",
  "合": "あ",
  "進": "すす",
  "変": "か",
  "意": "い",
  "決": "き",
  "度": "ど",
  "予": "よ",
  "理": "り",
  "特": "とく",
  "別": "わか",
  "必": "ひつ",
  "不": "ふ",
  "方": "かた",
  "法": "ほう",
  "以": "い",
  "質": "しつ",
  "映": "えい",
  "屋": "や",
  "館": "かん",
  "区": "く",
  "県": "けん",
  "市": "し",
  "場": "ば",
  "京": "きょう",
  "建": "た",
  "公": "こう",
  "図": "ず",
  "員": "いん",
  "親": "しん",
  "族": "ぞく",
  "主": "しゅ",
  "私": "わたし",
  "代": "か",
  "業": "ぎょう",
  "産": "みやげ",
  "歌": "うた",
  "画": "かく",
  "回": "かい",
  "漢": "かん",
  "急": "いそ",
  "牛": "ぎゅう",
  "去": "きょ",
  "元": "げん",
  "言": "い",
  "今": "いま",
  "紙": "かみ",
  "茶": "ちゃ",
  "注": "ちゅう",
  "番": "ばん",
  "飯": "はん",
  "服": "ふく",
  "勉": "べん",
  "旅": "りょ",
  "料": "りょう",
  "性": "せい",
  "成": "せい",
  "説": "せつ",
  "工": "こう",
  "交": "こう",
  "計": "けい",
  "研": "けん",
  "忘": "わす",
  "有": "あ",
  "用": "よう",
  "両": "りょう",
  "留": "りゅう",
  "練": "れん",
  "若": "わか",
  "住": "す",
  "台": "だい",
  "便": "べん",
  "費": "ひ",
  "反": "はん",
  "階": "かい",
  "界": "かい",
  "薬": "くすり",
  "約": "やく",
  "医": "い",
  "貸": "か",
  "借": "か",
  "暑": "あつ",
  "寒": "さむ",
  "同": "おな",
  "題": "だい",
  "品": "しな",
  "肉": "にく",
  "洋": "よう",
  "池": "いけ",
  "門": "もん",
  "所": "ところ",
  "円": "えん",
  "火": "ひ",
  "水": "みず",
  "土": "みやげ",
  "午": "ご",
  "毎": "まい",
  "何": "なん",
  "本": "ほん",
  "名": "な",
  "安": "やす",
  "休": "やす",
  "間": "ま",
  "自": "じ",
  "通": "とお",
  "真": "ま",
  "黄": "き",
  "最": "さい",
  "園": "えん",
  "野": "や",
  "供": "ども",
  "遊": "あそ",
  "活": "かつ",
  "様": "さま",
  "信": "しん",
  "取": "と",
  "返": "かえ",
  "配": "ぱい",
  "覚": "おぼ",
  "号": "ごう",
  "宿": "しゅく",
  "利": "り",
  "記": "き",
  "卒": "そつ",
  "授": "じゅ",
  "要": "よう",
  "死": "し",
  "太": "ふと",
  "細": "ほそ",
  "暖": "あたた",
  "涼": "すず",
  "痛": "いた",
  "首": "くび",
  "歯": "は",
  "違": "ちが",
  "渡": "わた",
  "落": "お",
  "押": "お",
  "捨": "す",
  "拾": "ひろ",
  "育": "そだ",
  "伝": "つた",
  "絵": "かい",
  "窓": "まど",
  "彼": "かれ",
  "指": "ゆび",
  "末": "まつ",
  "当": "あ",
  "港": "こう",
  "助": "たす",
  "相": "そう",
  "比": "くら",
  "申": "もう",
  "参": "さん",
  "晴": "は",
  "曇": "くも",
  "温": "あたた",
  "冷": "つめ",
  "熱": "ねつ",
  "消": "き",
  "残": "のこ",
  "無": "な",
  "緑": "みどり",
  "船": "ふね",
  "泳": "およ",
  "寺": "てら",
  "神": "じん",
  "橋": "はし",
  "荷": "に",
  "側": "がわ",
  "議": "ぎ",
  "辞": "じ",
  "柔": "やわ",
  "駐": "ちゅう",
  "帽": "ぼう",
  "湯": "ゆ",
  "横": "よこ",
  "欲": "ほ",
  "景": "け",
  "具": "ぐ",
  "昔": "むかし",
  "夢": "ゆめ",
  "役": "やく",
  "形": "かたち",
  "慣": "な",
  "将": "しょう",
  "眠": "ねむ",
  "優": "やさ",
  "選": "えら",
  "経": "た",
  "喫": "きっ",
  "辺": "へん",
  "汚": "よご",
  "割": "わ",
  "皿": "さら",
  "隅": "すみ",
  "机": "つくえ",
  "箱": "はこ",
  "定": "てい",
  "置": "お",
  "掛": "か",
  "片": "かた",
  "復": "ふく",
  "務": "つと",
  "飛": "ひ",
  "機": "き",
  "普": "ふ",
  "式": "しき",
  "連": "つ",
  "星": "ほし",
  "乳": "にゅう",
  "勝": "か",
  "負": "ま",
  "続": "つづ",
  "直": "なお",
  "治": "なお",
  "登": "のぼ",
  "戻": "もど",
  "付": "つ",
  "角": "かど",
  "席": "せき",
  "触": "さわ",
  "吸": "す",
  "投": "な",
  "曲": "ま",
  "塩": "しお",
  "甘": "あま",
  "辛": "から",
  "苦": "にが",
  "踊": "おど",
  "磨": "みが",
  "換": "か"
};
function UnderlinedSentence({ value }) {
  const text = String(value || "");
  const match = /^(.*?)<u>(.*?)<\/u>(.*)$/s.exec(text);
  if (!match) return text;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    match[1],
    /* @__PURE__ */ jsxRuntimeExports.jsx("u", { style: {
      textDecoration: "underline",
      textDecorationColor: "var(--n4-accent, #f97316)",
      textUnderlineOffset: 6,
      textDecorationThickness: 3,
      fontWeight: 700,
      color: "#fff"
    }, children: match[2] }),
    match[3]
  ] });
}
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function KanjiBattleMode({ items, onComplete, trainerId = "kanji-battle" }) {
  var _a, _b;
  const scoring = useScoreEngine(trainerId);
  const [gameState, setGameState] = reactExports.useState("start");
  const [health, setHealth] = reactExports.useState(100);
  const [enemyHealth, setEnemyHealth] = reactExports.useState(100);
  const [earnedCoins, setEarnedCoins] = reactExports.useState(0);
  const [earnedXP, setEarnedXP] = reactExports.useState(0);
  const [currentIdx, setCurrentIdx] = reactExports.useState(0);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [selected, setSelected] = reactExports.useState(null);
  const [hasRevived, setHasRevived] = reactExports.useState(false);
  const [questions, setQuestions] = reactExports.useState([]);
  const hasSkill = useLearningStore((s) => s.hasSkill);
  const lockRef = React.useRef(false);
  const pendingCorrectRef = reactExports.useRef(null);
  const buildQuestions = reactExports.useCallback(() => {
    if (!(items == null ? void 0 : items.length)) return [];
    const parseExample = (str) => {
      if (!str) return null;
      const slashIdx = str.indexOf(" / ");
      const jp = slashIdx > -1 ? str.slice(0, slashIdx) : str;
      const rest = slashIdx > -1 ? str.slice(slashIdx + 3) : "";
      const parenIdx = rest.indexOf("(");
      const romaji = parenIdx > -1 ? rest.slice(0, parenIdx).trim() : rest;
      const vi = parenIdx > -1 ? rest.slice(parenIdx + 1).replace(/\)$/, "") : "";
      return { jp, romaji, vi };
    };
    const parseLegacyCompounds = (str) => {
      if (!str || typeof str !== "string") return [];
      return str.split(/,\s*/).map((c) => {
        const t = c.trim();
        if (!t) return null;
        const mCompound = t.match(/^([^\s(]+)/);
        const mReading = t.match(/\(([^)\/]+)\s*\/?/);
        const mMeaning = t.match(/-\s*(.+)$/);
        return {
          compound: ((mCompound == null ? void 0 : mCompound[1]) || "").trim(),
          reading: ((mReading == null ? void 0 : mReading[1]) || "").trim(),
          meaning: ((mMeaning == null ? void 0 : mMeaning[1]) || "").trim()
        };
      }).filter((c) => c && c.compound);
    };
    const pool = shuffleArray(items).slice(0, 5);
    return pool.map((item) => {
      const char = item.kanji || item.character || "";
      const exParsed = parseExample(item.example);
      const type = Math.random() < 0.5 ? "reading" : "spelling";
      let sentenceHtml = "";
      let prompt = "";
      let correct = "";
      let options = [];
      let speakText = "";
      if (exParsed && exParsed.jp) {
        const cleanJp = exParsed.jp.replace(/\*\*/g, "");
        let targetWord = char;
        let targetReading = KANJI_CONTEXT_READINGS[char] || item.reading || "";
        const compounds = parseLegacyCompounds(item.compounds);
        const matchedCompound = compounds.find((c) => cleanJp.includes(c.compound));
        if (matchedCompound) {
          targetWord = matchedCompound.compound;
          targetReading = matchedCompound.reading;
        }
        speakText = targetWord;
        if (type === "reading") {
          prompt = "Chọn cách đọc đúng của từ gạch chân:";
          correct = targetReading;
          const highlightedJp = cleanJp.replace(targetWord, `<u>${targetWord}</u>`);
          sentenceHtml = highlightedJp;
          const otherReadings = items.filter((i) => i.kanji !== char).map((i) => KANJI_CONTEXT_READINGS[i.kanji] || i.reading || "").filter((r) => r && r !== correct);
          const uniqueOthers = [...new Set(otherReadings)];
          const distractors = shuffleArray(uniqueOthers).slice(0, 3);
          options = shuffleArray([correct, ...distractors]);
        } else {
          prompt = "Chữ Hán thích hợp của từ gạch chân là gì?";
          correct = targetWord;
          const replacedJp = cleanJp.replace(targetWord, `<u>${targetReading}</u>`);
          sentenceHtml = replacedJp;
          const otherKanjis = items.filter((i) => i.kanji !== char).map((i) => {
            if (matchedCompound) {
              const otherComp = parseLegacyCompounds(i.compounds)[0];
              return otherComp ? otherComp.compound : i.kanji;
            }
            return i.kanji;
          }).filter((k) => k && k !== correct);
          const uniqueOthers = [...new Set(otherKanjis)];
          const distractors = shuffleArray(uniqueOthers).slice(0, 3);
          options = shuffleArray([correct, ...distractors]);
        }
      } else {
        speakText = char || item.word || "";
        if (type === "reading") {
          prompt = `Cách đọc của chữ Hán: ${char || item.word}?`;
          correct = KANJI_CONTEXT_READINGS[char] || item.reading || "";
          sentenceHtml = char || item.word || "";
          const otherReadings = items.filter((i) => i.kanji !== char).map((i) => KANJI_CONTEXT_READINGS[i.kanji] || i.reading || "").filter((r) => r && r !== correct);
          const uniqueOthers = [...new Set(otherReadings)];
          const distractors = shuffleArray(uniqueOthers).slice(0, 3);
          options = shuffleArray([correct, ...distractors]);
        } else {
          prompt = `Nghĩa của chữ Hán: ${char || item.word}?`;
          correct = item.meaning || item.vi || "";
          sentenceHtml = char || item.word || "";
          const otherMeanings = items.filter((i) => i.kanji !== char).map((i) => i.meaning || i.vi || "").filter((m) => m && m !== correct);
          const uniqueOthers = [...new Set(otherMeanings)];
          const distractors = shuffleArray(uniqueOthers).slice(0, 3);
          options = shuffleArray([correct, ...distractors]);
        }
      }
      while (options.length < 4) {
        options.push("?");
      }
      return {
        kanji: char || item.word || "?",
        reading: item.reading || "",
        sentenceHtml,
        prompt,
        options,
        correctIdx: options.indexOf(correct),
        correctAnswer: correct,
        translation: exParsed ? exParsed.vi : item.meaning || item.vi || "",
        romaji: exParsed ? exParsed.romaji : "",
        speakText,
        item
      };
    });
  }, [items]);
  const startGame = reactExports.useCallback(() => {
    setQuestions(buildQuestions());
    setGameState("playing");
    setHealth(100);
    setEnemyHealth(100);
    setEarnedCoins(0);
    setEarnedXP(0);
    setCurrentIdx(0);
    setFeedback(null);
    setSelected(null);
    setHasRevived(false);
    scoring.reset();
  }, [buildQuestions, scoring]);
  const q = questions[currentIdx];
  const finishGame = reactExports.useCallback((isVictory) => {
    setGameState("finished");
    const baseCoins = isVictory ? 50 : 10;
    const baseXP = scoring.score * 100;
    const rewards = awardAjlRewards(baseXP, baseCoins, "kanji-battle");
    setEarnedCoins(rewards.coins);
    setEarnedXP(rewards.xp);
    if (isVictory) {
      const { updateBountyProgress } = useLearningStore.getState();
      updateBountyProgress("kanji", 1);
    }
  }, [scoring]);
  const handleAnswer = reactExports.useCallback((idx) => {
    if (!q || feedback || lockRef.current) return;
    lockRef.current = true;
    setSelected(idx);
    if (idx === q.correctIdx) {
      setEnemyHealth((prev) => Math.max(0, prev - 20));
      pendingCorrectRef.current = q.item;
      setFeedback("hit");
      playSFX("correct");
      speakJP(q.speakText || q.reading || q.kanji);
    } else {
      setHealth((prev) => Math.max(0, prev - 20));
      scoring.recordWrong(q.item);
      setFeedback("miss");
      playSFX("wrong");
    }
  }, [q, feedback, scoring]);
  const handleGrade = (quality) => {
    if (pendingCorrectRef.current) {
      scoring.recordCorrect(pendingCorrectRef.current, quality);
      pendingCorrectRef.current = null;
    }
    handleNext();
  };
  const handleNext = () => {
    lockRef.current = false;
    setFeedback(null);
    setSelected(null);
    const isDead = health <= 20 && selected !== q.correctIdx;
    if (isDead) {
      if (hasSkill("skill_isekai") && !hasRevived) {
        setHasRevived(true);
        setHealth(100);
      } else {
        finishGame(false);
        return;
      }
    }
    if (selected === q.correctIdx) {
      if (currentIdx < questions.length - 1) {
        setCurrentIdx((prev) => prev + 1);
      } else {
        finishGame(true);
      }
    }
  };
  reactExports.useEffect(() => {
    if (gameState !== "playing" || !q || feedback) return;
    const onKey = (e) => {
      const num = parseInt(e.key);
      if (num >= 1 && num <= q.options.length) handleAnswer(num - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gameState, q, feedback, handleAnswer]);
  if (!(items == null ? void 0 : items.length)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "⚔️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có dữ liệu. Chọn phần khác để bắt đầu." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-kanji-battle", style: { maxWidth: 800, margin: "0 auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
    gameState === "start" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0 },
        style: { textAlign: "center", padding: "3rem 1rem" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 80, height: 80, borderRadius: 20, background: "var(--n4-accent, #f97316)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sword, { color: "#fff", size: 40 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BattleBackdrop, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontSize: "2rem", fontWeight: 700, marginBottom: 8 }, children: "⚔️ Kanji Battle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-dim)", marginBottom: "2rem" }, children: "Đánh bại Kanji Spirit bằng cách chọn đúng nghĩa!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: startGame, style: { padding: "0.8rem 2.5rem", fontSize: "1.1rem" }, children: "Vào trận đấu" })
        ]
      },
      "start"
    ),
    gameState === "playing" && q && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 4 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600, fontSize: 12, color: "var(--n4-text-dim)" }, children: "BẠN" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#ef4444", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14 }),
              " ",
              health,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 12, background: "var(--n4-surface)", borderRadius: 6, overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: { width: `${health}%` }, style: { height: "100%", background: "#ef4444", borderRadius: 6 } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "center", marginTop: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 32, color: "var(--n4-primary)" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 700, color: "var(--n4-text-dim)", fontSize: 14 }, children: "VS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 4 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#f97316", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 14 }),
              " ",
              enemyHealth,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600, fontSize: 12, color: "var(--n4-text-dim)" }, children: "KANJI SPIRIT" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 12, background: "var(--n4-surface)", borderRadius: 6, overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: { width: `${enemyHealth}%` }, style: { height: "100%", background: "#f97316", borderRadius: 6 } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "center", marginTop: 8, position: "relative" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: feedback === "hit" ? { x: [0, -8, 8, -8, 0] } : {}, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "2.5rem", fontWeight: 700 }, children: q.kanji }) }),
            feedback === "hit" && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1.5 }, style: { position: "absolute", top: -8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 24, color: "#f97316" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "2rem", textAlign: "center", marginBottom: "1rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-dim)", marginBottom: 8 }, children: q.prompt }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-jlpt-sentence", style: { fontSize: "1.8rem", fontWeight: 600, lineHeight: 1.6, marginBottom: "0.5rem", fontFamily: "var(--n4-font-jp, Noto Sans JP)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(UnderlinedSentence, { value: q.sentenceHtml }) }),
        hasJapanese(((_a = q.sentenceHtml) == null ? void 0 : _a.replace(/<[^>]+>/g, "")) || q.kanji) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-qdisplay-romaji", style: { marginBottom: 8 }, children: questionRomaji(((_b = q.sentenceHtml) == null ? void 0 : _b.replace(/<[^>]+>/g, "")) || q.kanji, q.reading) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "n4-btn n4-btn-ghost n4-btn-xs n4-qdisplay-tts",
            style: { marginBottom: "0.75rem" },
            onClick: () => speakJP(q.speakText || q.kanji),
            title: "Nghe phát âm",
            children: "🔊 Nghe"
          }
        ),
        q.translation && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "var(--n4-text-dim)", fontSize: "0.9rem", marginBottom: "1.5rem", fontStyle: "italic" }, children: [
          "(",
          q.translation,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }, children: q.options.map((opt, i) => {
          let border = "2px solid var(--n4-border)";
          let bg = "var(--n4-surface)";
          if (selected != null) {
            if (i === q.correctIdx) {
              border = "2px solid #4ade80";
              bg = "rgba(74,222,128,0.15)";
            } else if (selected === i) {
              border = "2px solid #f87171";
              bg = "rgba(248,113,113,0.15)";
            }
          }
          const romaji = optionRomaji(opt);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "stretch", gap: 4 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: "n4-btn",
                onClick: () => handleAnswer(i),
                disabled: selected != null,
                style: { flex: 1, padding: "1rem", fontSize: "1.1rem", fontWeight: 600, background: bg, border, borderRadius: 16, cursor: selected != null ? "default" : "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { opacity: 0.5, marginRight: 6, fontSize: "0.8rem" }, children: i + 1 }),
                    opt
                  ] }),
                  romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-quiz-option-romaji", children: romaji })
                ]
              }
            ),
            hasJapanese(opt) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "n4-quiz-option-tts",
                style: { opacity: 0.5, fontSize: "0.75em" },
                onClick: () => speakJP(opt),
                title: `Đọc: ${opt}`,
                "aria-label": `Đọc ${opt}`,
                children: "🔊"
              }
            )
          ] }, i);
        }) })
      ] }),
      selected != null && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginBottom: "1rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        QuizFeedback,
        {
          isCorrect: selected === q.correctIdx,
          correctAnswer: q.correctAnswer,
          correctInfo: { reading: q.reading, meaning: q.item.meaning || q.kanji },
          userAnswer: q.options[selected],
          questionDisplay: q.prompt,
          showQualityPicker: selected === q.correctIdx,
          onQualityPick: selected === q.correctIdx ? handleGrade : void 0,
          onNext: handleNext,
          isLastQuestion: health <= 20 && selected !== q.correctIdx && (!hasSkill("skill_isekai") || hasRevived) || selected === q.correctIdx && currentIdx === questions.length - 1
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", color: "var(--n4-text-dim)", fontSize: "0.8rem" }, children: [
        "Câu ",
        currentIdx + 1,
        "/",
        questions.length,
        " · Điểm: ",
        scoring.score * 100
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScaffoldingLayer,
        {
          currentItem: q.item,
          text: q.kanji,
          toolbarConfig: { hint: false, reveal: false, speak: true, bookmark: true, lookup: true, drawer: true }
        }
      )
    ] }, "playing"),
    gameState === "finished" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, style: { padding: "1rem 0" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ModeResultsScreen,
        {
          scoring: { ...scoring, xp: earnedXP, coins: earnedCoins, score: scoring.score * 100, total: scoring.total * 100, accuracy: Math.round(scoring.score * 100 / (scoring.total * 100) * 100) || 0 },
          getQuestion: (item) => item.kanji || item.word,
          getCorrectInfo: (item) => ({ reading: item.reading, meaning: item.meaning }),
          onRestart: startGame
        }
      ),
      onComplete && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "center", marginTop: -12, position: "relative", zIndex: 10 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-btn", onClick: () => onComplete(scoring.score * 100), style: { display: "flex", alignItems: "center", gap: 6 }, children: [
        "Tiếp tục ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 18 })
      ] }) })
    ] }, "finished")
  ] }) });
}
export {
  BattleBackdrop as B,
  KanjiBattleMode as K,
  SushiBackdrop as S
};
