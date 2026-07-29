import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-Ht4KBG1w.js";
import { u as useScoreEngine, T as TrainerContext } from "./useScoreEngine-fO3A-KMP.js";
import { Q as QuizMode, v as vocabAccessors } from "./QuizMode-BZfpUmXt.js";
import { u as useVocabItems, b as useGrammarItems, c as useSectionList } from "./useDataHelper-CLs8Rj_F.js";
import { bA as playSFX, f as speakJP, ac as onStopAll, a5 as stopSpeech } from "./feature-3d-CFvJkEt3.js";
import { u as useGameStore } from "./useGameEngine-CJjDfpsP.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./index-D1BqAvip.js";
import "./vendor-router-BTJacUKt.js";
import "./vendor-icons-DHCyxOF-.js";
import "./empty-Bvm-mx50.js";
import "./feature-3d-scenery-C3eSpuWG.js";
import "./quest-chains-CiwzmCpJ.js";
import "./PhaseRibbon-BrG3g-XS.js";
import "./useQuestionMeta-D4bSCufi.js";
import "./QuizFeedback-C5B0QP7Y.js";
const EXTENDED_ADVENTURES = [
  /* ── 1. Bưu điện (郵便局) ── */
  {
    id: "post-office",
    theme: "📮 Bưu điện",
    intro: "Bạn cần gửi một gói hàng về Việt Nam từ Nhật Bản...",
    themeColor: "#e74c3c",
    keywords: ["送る", "郵便", "荷物", "封筒", "切手", "住所", "速達", "海外", "小包", "受け取る"],
    steps: [
      {
        situation: "Bạn bước vào bưu điện và đến quầy. Bạn chào nhân viên:",
        goal: "greet"
      },
      {
        situation: "Nhân viên hỏi bạn muốn gửi gì. Bạn chọn:",
        goal: "choose_service",
        isBranchPoint: true,
        branchChoice: {
          prompt: "Bạn muốn gửi loại nào?",
          optA: {
            label: "📦 Gói hàng thông thường (小包)",
            vocabKeywords: ["小包", "重い", "料金", "包む", "大きい"]
          },
          optB: {
            label: "✉️ Thư tốc hành (速達)",
            vocabKeywords: ["速達", "早い", "料金", "封筒", "切手"]
          }
        }
      },
      {
        situation: "Nhân viên hỏi về địa chỉ người nhận. Bạn điền và hỏi:",
        goal: "address",
        branchA: { situation: "Nhân viên cân gói hàng và báo giá. Bạn phản ứng:" },
        branchB: { situation: "Nhân viên xác nhận tốc độ giao hàng. Bạn hỏi thêm:" }
      },
      {
        situation: "Bạn thanh toán và nhận biên lai. Bạn nói:",
        goal: "finish",
        branchA: { situation: "Bạn xác nhận ngày đến và cảm ơn:" },
        branchB: { situation: "Bạn nhận mã theo dõi và cảm ơn:" }
      }
    ],
    vocab: [
      { word: "郵便局", reading: "ゆうびんきょく", meaning: "Bưu điện", romaji: "yuubinkyoku" },
      { word: "小包", reading: "こづつみ", meaning: "Bưu kiện, gói hàng", romaji: "kozutsumi" },
      { word: "速達", reading: "そくたつ", meaning: "Thư tốc hành", romaji: "sokutatsu" },
      { word: "切手", reading: "きって", meaning: "Tem thư", romaji: "kitte" },
      { word: "住所", reading: "じゅうしょ", meaning: "Địa chỉ", romaji: "juusho" },
      { word: "送る", reading: "おくる", meaning: "Gửi", romaji: "okuru" },
      { word: "受け取る", reading: "うけとる", meaning: "Nhận", romaji: "uketoru" },
      { word: "料金", reading: "りょうきん", meaning: "Phí, giá tiền", romaji: "ryoukin" }
    ]
  },
  /* ── 2. Ngân hàng (銀行) ── */
  {
    id: "bank",
    theme: "🏦 Ngân hàng",
    intro: "Bạn cần mở tài khoản ngân hàng lần đầu tiên ở Nhật...",
    themeColor: "#2980b9",
    keywords: ["銀行", "口座", "ATM", "振込", "引き出す", "預ける", "通帳", "カード", "パスワード", "手数料"],
    steps: [
      {
        situation: "Bạn đến quầy và nói mục đích của mình:",
        goal: "state_purpose"
      },
      {
        situation: "Nhân viên hỏi bạn muốn dịch vụ nào. Bạn chọn:",
        goal: "choose_service",
        isBranchPoint: true,
        branchChoice: {
          prompt: "Bạn muốn làm gì?",
          optA: {
            label: "🏧 Mở tài khoản mới (口座開設)",
            vocabKeywords: ["口座", "通帳", "印鑑", "書類", "申込書"]
          },
          optB: {
            label: "💸 Chuyển tiền về nước (海外送金)",
            vocabKeywords: ["送金", "振込", "為替", "手数料", "海外"]
          }
        }
      },
      {
        situation: "Nhân viên yêu cầu giấy tờ. Bạn nói những gì bạn có:",
        goal: "documents",
        branchA: { situation: "Nhân viên hướng dẫn điền form mở tài khoản. Bạn hỏi:" },
        branchB: { situation: "Nhân viên báo phí chuyển tiền. Bạn phản ứng:" }
      },
      {
        situation: "Giao dịch hoàn tất. Bạn nhận tài liệu và cảm ơn:",
        goal: "finish",
        branchA: { situation: "Bạn nhận thẻ ATM và hỏi cách dùng:" },
        branchB: { situation: "Bạn nhận biên lai chuyển tiền và hỏi thời gian:" }
      }
    ],
    vocab: [
      { word: "銀行", reading: "ぎんこう", meaning: "Ngân hàng", romaji: "ginkou" },
      { word: "口座", reading: "こうざ", meaning: "Tài khoản", romaji: "kouza" },
      { word: "通帳", reading: "つうちょう", meaning: "Sổ tiết kiệm", romaji: "tsuuchou" },
      { word: "引き出す", reading: "ひきだす", meaning: "Rút tiền", romaji: "hikidasu" },
      { word: "預ける", reading: "あずける", meaning: "Gửi tiền, ký gửi", romaji: "azukeru" },
      { word: "振込", reading: "ふりこみ", meaning: "Chuyển khoản", romaji: "furikomi" },
      { word: "手数料", reading: "てすうりょう", meaning: "Phí dịch vụ", romaji: "tesuunyou" },
      { word: "暗証番号", reading: "あんしょうばんごう", meaning: "Mã PIN", romaji: "anshōbangou" }
    ]
  },
  /* ── 3. Cửa hàng tiện lợi (コンビニ) ── */
  {
    id: "convenience-store",
    theme: "🏪 Cửa hàng tiện lợi",
    intro: "Bạn ghé vào cửa hàng tiện lợi để mua đồ và thực hiện một số việc...",
    themeColor: "#27ae60",
    keywords: ["コンビニ", "レジ", "弁当", "お菓子", "飲み物", "温める", "袋", "ATM", "支払い", "領収書"],
    steps: [
      {
        situation: "Bạn vào cửa hàng và lấy đồ. Nhân viên chào bạn:",
        goal: "greet"
      },
      {
        situation: "Bạn lên quầy thanh toán. Nhân viên hỏi thêm dịch vụ:",
        goal: "checkout",
        isBranchPoint: true,
        branchChoice: {
          prompt: "Bạn cần thêm gì không?",
          optA: {
            label: "🍱 Hâm nóng bento (温めますか？)",
            vocabKeywords: ["温める", "弁当", "電子レンジ", "袋", "箸"]
          },
          optB: {
            label: "📦 Nhận bưu kiện (荷物の受け取り)",
            vocabKeywords: ["荷物", "受け取る", "伝票番号", "印鑑", "サービス"]
          }
        }
      },
      {
        situation: "Nhân viên hỏi về thanh toán. Bạn trả lời:",
        goal: "payment",
        branchA: { situation: "Nhân viên hỏi bạn có muốn túi không. Bạn trả lời:" },
        branchB: { situation: "Nhân viên yêu cầu xác nhận thông tin bưu kiện. Bạn đọc:" }
      },
      {
        situation: "Giao dịch xong. Bạn cầm đồ và nói:",
        goal: "goodbye",
        branchA: { situation: "Bạn nhận biên lai và chào:" },
        branchB: { situation: "Bạn ký nhận và cảm ơn nhân viên:" }
      }
    ],
    vocab: [
      { word: "コンビニ", reading: "コンビニ", meaning: "Cửa hàng tiện lợi", romaji: "konbini" },
      { word: "弁当", reading: "べんとう", meaning: "Hộp cơm", romaji: "bentou" },
      { word: "温める", reading: "あたためる", meaning: "Hâm nóng", romaji: "atatameru" },
      { word: "レジ", reading: "レジ", meaning: "Quầy thu ngân", romaji: "reji" },
      { word: "袋", reading: "ふくろ", meaning: "Túi", romaji: "fukuro" },
      { word: "領収書", reading: "りょうしゅうしょ", meaning: "Biên lai", romaji: "ryōshuusho" },
      { word: "支払い", reading: "しはらい", meaning: "Thanh toán", romaji: "shiharai" },
      { word: "釣り銭", reading: "つりせん", meaning: "Tiền thối", romaji: "tsurisen" }
    ]
  },
  /* ── 4. Công viên (公園) ── */
  {
    id: "park",
    theme: "🌸 Công viên",
    intro: "Bạn đến công viên vào một buổi chiều đẹp trời và gặp nhiều người...",
    themeColor: "#8e44ad",
    keywords: ["公園", "花", "木", "散歩", "子ども", "自転車", "池", "天気", "遊ぶ", "休む"],
    steps: [
      {
        situation: "Bạn gặp một người lớn tuổi đang ngồi nghỉ. Bạn khởi đầu cuộc trò chuyện:",
        goal: "start_conversation"
      },
      {
        situation: "Người đó hỏi bạn đến từ đâu và đang làm gì ở Nhật. Bạn chọn chủ đề:",
        goal: "share_info",
        isBranchPoint: true,
        branchChoice: {
          prompt: "Bạn muốn kể về điều gì?",
          optA: {
            label: "🎓 Đang học tiếng Nhật (日本語を勉強しています)",
            vocabKeywords: ["勉強", "大学", "学校", "言語", "難しい"]
          },
          optB: {
            label: "💼 Đang làm việc ở đây (仕事をしています)",
            vocabKeywords: ["仕事", "会社", "働く", "同僚", "アルバイト"]
          }
        }
      },
      {
        situation: "Người đó giới thiệu về khu vực xung quanh công viên. Bạn hỏi thêm:",
        goal: "ask_about_area",
        branchA: { situation: "Người đó hỏi về học tiếng Nhật của bạn. Bạn trả lời:" },
        branchB: { situation: "Người đó hỏi về công việc của bạn. Bạn trả lời:" }
      },
      {
        situation: "Đến giờ chia tay. Bạn kết thúc cuộc trò chuyện:",
        goal: "farewell",
        branchA: { situation: "Người đó chúc bạn học tốt. Bạn đáp lại và tạm biệt:" },
        branchB: { situation: "Người đó chúc bạn thành công trong công việc. Bạn đáp lại:" }
      }
    ],
    vocab: [
      { word: "公園", reading: "こうえん", meaning: "Công viên", romaji: "kouen" },
      { word: "散歩", reading: "さんぽ", meaning: "Đi dạo", romaji: "sanpo" },
      { word: "天気", reading: "てんき", meaning: "Thời tiết", romaji: "tenki" },
      { word: "気持ちいい", reading: "きもちいい", meaning: "Dễ chịu, thoải mái", romaji: "kimochi ii" },
      { word: "池", reading: "いけ", meaning: "Ao", romaji: "ike" },
      { word: "遊ぶ", reading: "あそぶ", meaning: "Chơi", romaji: "asobu" },
      { word: "休む", reading: "やすむ", meaning: "Nghỉ ngơi", romaji: "yasumu" },
      { word: "花見", reading: "はなみ", meaning: "Ngắm hoa anh đào", romaji: "hanami" }
    ]
  },
  /* ── 5. Thư viện (図書館) ── */
  {
    id: "library",
    theme: "📚 Thư viện",
    intro: "Bạn đến thư viện để tìm sách học tập và mượn sách...",
    themeColor: "#d35400",
    keywords: ["図書館", "本", "借りる", "返す", "検索", "棚", "静か", "勉強", "資料", "期限"],
    steps: [
      {
        situation: "Bạn vào thư viện và hỏi về thẻ thư viện:",
        goal: "get_card"
      },
      {
        situation: "Bạn muốn tìm sách. Bạn hỏi nhân viên:",
        goal: "find_book",
        isBranchPoint: true,
        branchChoice: {
          prompt: "Bạn muốn tìm sách gì?",
          optA: {
            label: "📖 Sách học tiếng Nhật (日本語の本)",
            vocabKeywords: ["日本語", "テキスト", "辞書", "文法", "練習"]
          },
          optB: {
            label: "📰 Tạp chí và báo (雑誌・新聞)",
            vocabKeywords: ["雑誌", "新聞", "記事", "最新", "読む"]
          }
        }
      },
      {
        situation: "Bạn tìm thấy sách và muốn mượn. Bạn hỏi thủ tục:",
        goal: "borrow",
        branchA: { situation: "Nhân viên hướng dẫn cách mượn sách học. Bạn hỏi về hạn trả:" },
        branchB: { situation: "Nhân viên giới thiệu góc đọc báo. Bạn hỏi về điều kiện:" }
      },
      {
        situation: "Bạn hoàn tất thủ tục và chuẩn bị về. Bạn nói:",
        goal: "goodbye",
        branchA: { situation: "Bạn hỏi về gia hạn và cảm ơn nhân viên:" },
        branchB: { situation: "Bạn hỏi về giờ mở cửa cuối tuần và cảm ơn:" }
      }
    ],
    vocab: [
      { word: "図書館", reading: "としょかん", meaning: "Thư viện", romaji: "toshokan" },
      { word: "借りる", reading: "かりる", meaning: "Mượn", romaji: "kariru" },
      { word: "返す", reading: "かえす", meaning: "Trả lại", romaji: "kaesu" },
      { word: "期限", reading: "きげん", meaning: "Thời hạn", romaji: "kigen" },
      { word: "棚", reading: "たな", meaning: "Kệ sách", romaji: "tana" },
      { word: "静か", reading: "しずか", meaning: "Yên tĩnh", romaji: "shizuka" },
      { word: "検索", reading: "けんさく", meaning: "Tìm kiếm", romaji: "kensaku" },
      { word: "資料", reading: "しりょう", meaning: "Tài liệu", romaji: "shiryou" }
    ]
  }
];
const MONSTER_POOL = ["👹", "🐲", "👻", "🧟", "🕷️", "🦇", "🐍", "💀", "🧛", "👾"];
function DungeonCrawlMode({ vocabItems = [], maxQuestions = 10 }) {
  const { score, combo, hp, addScore, takeDamage, resetCombo } = useGameStore(useShallow((s) => ({
    score: s.score,
    combo: s.combo,
    hp: s.hp,
    addScore: s.addScore,
    takeDamage: s.takeDamage,
    resetCombo: s.resetCombo
  })));
  const scoring = useScoreEngine();
  const [floor, setFloor] = reactExports.useState(1);
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [phase, setPhase] = reactExports.useState("enter");
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [exp, setExp] = reactExports.useState(0);
  const [loot, setLoot] = reactExports.useState([]);
  const [monster, setMonster] = reactExports.useState("👹");
  const [attackAnim, setAttackAnim] = reactExports.useState(false);
  const [hurtAnim, setHurtAnim] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  const correctCount = reactExports.useRef(0);
  reactExports.useEffect(() => {
    useGameStore.setState({ hp: 100, score: 0, combo: 0, gameState: "PLAYING" });
  }, []);
  const pool = reactExports.useMemo(() => {
    const valid = vocabItems.filter((it) => it.word && it.meaning);
    return [...valid].sort(() => Math.random() - 0.5).slice(0, maxQuestions);
  }, [vocabItems, maxQuestions]);
  const current = pool[qIdx];
  const options = reactExports.useMemo(() => {
    if (!current) return [];
    const others = pool.filter((_, i) => i !== qIdx).sort(() => Math.random() - 0.5).slice(0, 3).map((it) => it.meaning);
    return [current.meaning, ...others].sort(() => Math.random() - 0.5);
  }, [current, pool, qIdx]);
  reactExports.useEffect(() => {
    if (phase === "enter") {
      setMonster(MONSTER_POOL[Math.floor(Math.random() * MONSTER_POOL.length)]);
      const tid = setTimeout(() => setPhase("battle"), 1500);
      return () => clearTimeout(tid);
    }
  }, [phase, floor]);
  const handleAttack = reactExports.useCallback((opt) => {
    if (feedback || !current) return;
    setSelected(opt);
    const isCorrect = opt === current.meaning;
    if (isCorrect) {
      playSFX("correct");
      const points = 200 + combo * 30 + floor * 50;
      addScore(points);
      correctCount.current++;
      setExp((e) => e + 25);
      scoring.recordCorrect(current);
      setFeedback("correct");
      setAttackAnim(true);
      setTimeout(() => setAttackAnim(false), 400);
      if (Math.random() < 0.3) {
        const loots = ["🗡️ Iron Sword", "🛡️ Shield", "💎 Crystal", "🧪 Potion", "📜 Scroll", "🍖 Meat"];
        setLoot((l) => [...l, loots[Math.floor(Math.random() * loots.length)]]);
      }
    } else {
      playSFX("wrong");
      takeDamage(15 + floor * 2);
      resetCombo();
      scoring.recordWrong(current);
      setFeedback("wrong");
      setHurtAnim(true);
      setTimeout(() => setHurtAnim(false), 400);
    }
    timerRef.current = setTimeout(() => {
      setFeedback(null);
      setSelected(null);
      if (hp <= 0 || qIdx + 1 >= pool.length) {
        setPhase("gameover");
      } else {
        setQIdx((i) => i + 1);
        if ((qIdx + 1) % 3 === 0) {
          setFloor((f) => f + 1);
          setPhase("enter");
        }
      }
    }, 1300);
  }, [feedback, current, combo, floor, qIdx, pool.length, hp, addScore, takeDamage, resetCombo, scoring]);
  reactExports.useEffect(() => () => clearTimeout(timerRef.current), []);
  if (pool.length < 4) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "⚔️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cần ít nhất 4 từ vựng cho Dungeon Crawl." })
    ] });
  }
  if (phase === "gameover") {
    const pct = pool.length > 0 ? Math.round(correctCount.current / Math.min(qIdx + 1, pool.length) * 100) : 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-result-icon", children: hp > 0 ? "🏆" : "💀" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-result-title", children: hp > 0 ? "ĐÃ VƯỢT HẦM NGỤC!" : "THẤT BẠI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-result-floor", children: [
        "Đã tới tầng ",
        floor
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dungeon-stat-value", children: correctCount.current }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dungeon-stat-label", children: "Hạ gục" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dungeon-stat-value", children: floor }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dungeon-stat-label", children: "Tầng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dungeon-stat-value", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dungeon-stat-label", children: "Điểm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "dungeon-stat-value", children: [
            pct,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dungeon-stat-label", children: "Chính xác" })
        ] })
      ] }),
      loot.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-loot-summary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-loot-title", children: "🎒 Đồ nhặt được" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-loot-items", children: loot.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dungeon-loot-item", children: l }, i)) })
      ] })
    ] });
  }
  if (phase === "enter") {
    const isBoss = floor % 3 === 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-enter-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-floor-badge", children: [
        isBoss ? "💀" : "⚔️",
        " TẦNG ",
        floor
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-monster-reveal", children: monster }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-encounter-text", children: isBoss ? "CHẠM TRÁN TRÙM!" : "Quái vật xuất hiện!" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `dungeon-container ${hurtAnim ? "hurt" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-hud", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-hud-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-hp-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-hp-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-hp-fill", style: { width: `${hp}%`, background: hp > 50 ? "#22c55e" : hp > 25 ? "#eab308" : "#ef4444" } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "dungeon-hp-label", children: [
            "Máu ",
            hp,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-exp-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-exp-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-exp-fill", style: { width: `${exp % 100}%` } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dungeon-exp-label", children: "XP" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-hud-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "dungeon-floor-label", children: [
          "T",
          floor
        ] }),
        combo > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "dungeon-combo-badge", children: [
          "x",
          combo,
          " đòn"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-hud-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "dungeon-score-label", children: [
        score,
        " điểm"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-battle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `dungeon-monster ${attackAnim ? "hit" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-monster-emoji", children: monster }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-monster-name", children: current == null ? void 0 : current.word }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-monster-reading", children: (current == null ? void 0 : current.reading) || "" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dungeon-question", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dungeon-question-label", children: "⚔️ Từ này có nghĩa là gì?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dungeon-speak-btn", onClick: () => speakJP(current == null ? void 0 : current.word), children: "🔊" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dungeon-options", children: options.map((opt, i) => {
      let cls = "dungeon-option";
      if (feedback && opt === (current == null ? void 0 : current.meaning)) cls += " correct";
      else if (feedback && opt === selected && opt !== (current == null ? void 0 : current.meaning)) cls += " wrong";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: cls, onClick: () => handleAttack(opt), disabled: !!feedback, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dungeon-option-icon", children: "🗡️⚔️🏹🔮"[i] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dungeon-option-text", children: opt })
      ] }, i);
    }) }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `dungeon-feedback ${feedback}`, children: feedback === "correct" ? `💥 CRITICAL HIT! +${200 + combo * 30 + floor * 50}` : `🩸 You took damage! Answer: ${current == null ? void 0 : current.meaning}` })
  ] });
}
const MODES = [
  { id: "palace", label: "Cung điện", icon: "🏰" },
  { id: "adventures", label: "Hầm ngục", icon: "⚔️" },
  { id: "scenarios", label: "Tình huống", icon: "🎭" }
];
function MemoryPalace({ items, onCorrect, onWrong }) {
  const stations = reactExports.useMemo(() => {
    const shuffled = [...items].sort(() => Math.random() - 0.5).slice(0, 12);
    const PALACE_ROOMS = [
      "🚪 Phòng khách",
      "🛋️ Phòng ngủ",
      "🍳 Bếp",
      "📚 Thư viện",
      "🌿 Vườn",
      "🛁 Phòng tắm",
      "🎮 Phòng chơi",
      "🌙 Sân thượng",
      "🍽️ Phòng ăn",
      "💼 Văn phòng",
      "🏥 Phòng khám",
      "🚉 Sảnh ga"
    ];
    return shuffled.map((it, i) => ({
      ...it,
      room: PALACE_ROOMS[i % 12]
    }));
  }, [items]);
  const [step, setStep] = reactExports.useState(0);
  const [phase, setPhase] = reactExports.useState("tour");
  const [score, setScore] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const feedbackTimerRef = reactExports.useRef(null);
  const current = stations[step];
  reactExports.useEffect(() => {
    if (phase === "tour" && step >= stations.length && stations.length >= 4) {
      setPhase("quiz");
      setStep(0);
    }
  }, [phase, step, stations.length]);
  reactExports.useEffect(() => {
    const unsub = onStopAll(() => {
    });
    return () => {
      unsub();
      stopSpeech();
      clearTimeout(feedbackTimerRef.current);
    };
  }, []);
  const quizItem = phase === "quiz" ? stations[step] : null;
  const quizOptions = reactExports.useMemo(() => {
    if (!quizItem || phase !== "quiz") return [];
    const wrong = stations.filter((s) => s.word !== quizItem.word).map((s) => s.meaning).sort(() => Math.random() - 0.5).slice(0, 3);
    return [...wrong, quizItem.meaning].sort(() => Math.random() - 0.5);
  }, [quizItem == null ? void 0 : quizItem.word, stations, phase]);
  if (stations.length < 4) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cần ít nhất 4 từ vựng." })
  ] });
  if (phase === "tour") {
    if (!current) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sm-transition", children: "⏳ Đang chuyển sang kiểm tra..." });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sm-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sm-progress-label", children: [
        "🏰 Tham quan cung điện · Phòng ",
        step + 1,
        "/",
        stations.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sm-room-emoji", children: current.room }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-sm-tour-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sm-word", children: current.word }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sm-reading", children: current.reading }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sm-meaning", children: current.meaning }),
        current.example && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sm-example", children: [
          "💬 ",
          current.example.split("/")[0]
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: () => {
        speakJP(current.word);
        setStep((s) => s + 1);
      }, children: step + 1 < stations.length ? "→ Phòng tiếp" : "🧠 Bắt đầu kiểm tra" })
    ] });
  }
  if (!quizItem || step >= stations.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-icon", children: "🏰" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-title", children: "Cung điện trí nhớ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-value", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Đúng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-value", children: stations.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Tổng" })
        ] })
      ] })
    ] });
  }
  const pick = (opt) => {
    if (feedback) return;
    setSelected(opt);
    const correct = opt === quizItem.meaning;
    setFeedback(correct ? "correct" : "wrong");
    if (correct) {
      playSFX("correct");
      setScore((s) => s + 1);
      onCorrect == null ? void 0 : onCorrect(quizItem);
    } else {
      playSFX("wrong");
      onWrong == null ? void 0 : onWrong(quizItem);
    }
    feedbackTimerRef.current = setTimeout(() => {
      setFeedback(null);
      setSelected(null);
      setStep((s) => s + 1);
    }, 1200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sm-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sm-progress-label", children: [
      "🧠 Kiểm tra · ",
      step + 1,
      "/",
      stations.length,
      " · Điểm: ",
      score
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sm-quiz-room", children: quizItem.room }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sm-quiz-title", children: "Từ nào ở phòng này?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sm-quiz-word", children: quizItem.word }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sm-quiz-grid", children: quizOptions.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `n4-btn n4-sm-quiz-btn ${feedback && opt === quizItem.meaning ? "n4-btn-primary" : "n4-btn-neon"}`,
        style: {
          background: feedback && opt === quizItem.meaning ? "var(--n4-success)" : feedback && selected === opt ? "var(--n4-danger)" : void 0
        },
        onClick: () => pick(opt),
        disabled: !!feedback,
        children: opt
      },
      i
    )) })
  ] });
}
const CLASSIC_SCENES = [
  {
    theme: "🍜 Nhà hàng",
    intro: "Bạn bước vào một nhà hàng Nhật Bản...",
    steps: [
      { situation: "Nhân viên chào bạn. Bạn muốn nói:", goal: "greet" },
      { situation: "Bạn muốn gọi món. Bạn sẽ nói:", goal: "order" },
      { situation: "Bạn muốn thanh toán. Bạn nói:", goal: "pay" },
      { situation: "Bạn ra về và cảm ơn:", goal: "thank" }
    ],
    keywords: ["食べ", "レストラン", "料理", "注文", "飲", "メニュー", "店", "水", "肉", "魚"]
  },
  {
    theme: "🏥 Bệnh viện",
    intro: "Bạn đến bệnh viện vì không khỏe...",
    steps: [
      { situation: "Bạn đến quầy tiếp nhận. Bạn nói:", goal: "register" },
      { situation: "Bác sĩ hỏi triệu chứng. Bạn mô tả:", goal: "describe" },
      { situation: "Bác sĩ kê đơn thuốc. Bạn hỏi:", goal: "ask" },
      { situation: "Bạn cảm ơn và ra về:", goal: "thank" }
    ],
    keywords: ["病気", "病院", "医者", "薬", "体", "痛", "熱", "頭", "元気"]
  },
  {
    theme: "🚃 Ga tàu",
    intro: "Bạn đang ở ga tàu điện...",
    steps: [
      { situation: "Bạn muốn mua vé. Bạn hỏi:", goal: "buy" },
      { situation: "Bạn không biết đi tàu nào. Bạn hỏi:", goal: "ask_direction" },
      { situation: "Tàu sắp đến. Bạn xác nhận:", goal: "confirm" },
      { situation: "Bạn đến nơi. Bạn hỏi lối ra:", goal: "exit" }
    ],
    keywords: ["駅", "電車", "切符", "乗", "降", "時間", "行", "来", "出口"]
  },
  {
    theme: "🏫 Trường học",
    intro: "Hôm nay là ngày đầu tiên đi học...",
    steps: [
      { situation: "Bạn tự giới thiệu trước lớp:", goal: "introduce" },
      { situation: "Thầy giáo hỏi bạn câu hỏi:", goal: "answer" },
      { situation: "Bạn muốn hỏi bạn cùng lớp:", goal: "ask_friend" },
      { situation: "Hết giờ học. Bạn chào mọi người:", goal: "goodbye" }
    ],
    keywords: ["学校", "先生", "勉強", "授業", "教室", "試験", "学", "友達", "名前"]
  },
  {
    theme: "🛍️ Mua sắm",
    intro: "Bạn đang đi mua sắm ở cửa hàng...",
    steps: [
      { situation: "Bạn muốn hỏi giá. Bạn nói:", goal: "ask_price" },
      { situation: "Bạn muốn thử đồ. Bạn hỏi:", goal: "try" },
      { situation: "Bạn quyết định mua. Bạn nói:", goal: "decide" },
      { situation: "Bạn thanh toán xong. Bạn nói:", goal: "thank" }
    ],
    keywords: ["買", "店", "高", "安", "円", "大き", "小さ", "色", "サイズ"]
  }
];
[
  ...CLASSIC_SCENES.map((s) => ({ ...s, isExtended: false })),
  ...EXTENDED_ADVENTURES.map((s) => ({ ...s, isExtended: true }))
];
function StoryMode({ mode = "palace" }) {
  const [section, setSection] = reactExports.useState("all");
  const [difficulty, setDifficulty] = reactExports.useState("normal");
  const [itemCount, setItemCount] = reactExports.useState(10);
  const vocabItems = useVocabItems(section);
  useGrammarItems(section);
  const sections = useSectionList("vocab");
  const maxQ = difficulty === "easy" ? 5 : difficulty === "hard" ? 20 : itemCount;
  const scoring = useScoreEngine();
  const renderMode = () => {
    switch (mode) {
      case "palace":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(MemoryPalace, { items: vocabItems, onCorrect: scoring.recordCorrect, onWrong: scoring.recordWrong });
      case "adventures":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(DungeonCrawlMode, { vocabItems, maxQuestions: maxQ });
      case "scenarios":
        if (vocabItems.length < 4) {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu." })
          ] });
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items: vocabItems,
            getQuestion: (it) => it.word,
            getAnswer: (it) => it.meaning,
            getQuestionDisplay: (it) => `🎭 ${it.word}`,
            getCorrectInfo: (it) => ({ reading: it.reading || "", meaning: it.meaning }),
            getSrsKey: vocabAccessors.getKey,
            getSection: vocabAccessors.getSection,
            getAltAnswers: vocabAccessors.getAltAnswers,
            optionCount: 4,
            maxQuestions: maxQ,
            speakOnShow: true,
            srsAware: true
          }
        );
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(MemoryPalace, { items: vocabItems });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerContext.Provider, { value: "story-mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    GameShell,
    {
      trainerId: "story-mode",
      mode,
      icon: "🗺️",
      title: "Chế độ cốt truyện",
      color: "var(--n4-cat-story)",
      hearts: 3,
      bodyLayout: "hybrid",
      rhythm: { warmup: 1, bossAt: "mid", bossCount: 1, cooldown: 1, totalItems: itemCount },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrainerTopBar,
          {
            trainerId: "story-mode",
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
  StoryMode as default
};
