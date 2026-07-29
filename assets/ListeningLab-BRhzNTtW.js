const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VoiceShadowing-CNDOcuRm.js","./vendor-react-BYxMSDiB.js"])))=>i.map(i=>d[i]);
import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { b as bus, G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-Ht4KBG1w.js";
import { u as useScoreEngine, T as TrainerContext, c as calcXp } from "./useScoreEngine-fO3A-KMP.js";
import { c as createCombatText, a as createBattleBanner, g as getComboTier, G as GameplayEffects } from "./feature-particles-BSY69iaM.js";
import { Q as QuizMode, v as vocabAccessors } from "./QuizMode-BZfpUmXt.js";
import { u as useVocabItems, a as useKanjiItems, c as useSectionList } from "./useDataHelper-CLs8Rj_F.js";
import { bn as getQualityConfig, f as speakJP, bA as playSFX, u as useLearningStore, _ as __vitePreload, b as useDataStore, ac as onStopAll, a2 as isMuted, ad as speakLongText } from "./feature-3d-CFvJkEt3.js";
import { u as useGameStore } from "./useGameEngine-CJjDfpsP.js";
import { a6 as GAME_EVENTS } from "./index-D1BqAvip.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-router-BTJacUKt.js";
import "./empty-Bvm-mx50.js";
import "./feature-3d-scenery-C3eSpuWG.js";
import "./quest-chains-CiwzmCpJ.js";
import "./PhaseRibbon-BrG3g-XS.js";
import "./useQuestionMeta-D4bSCufi.js";
import "./QuizFeedback-C5B0QP7Y.js";
import "./vendor-icons-DHCyxOF-.js";
const NUMBER_DRILL_CATEGORIES = [
  {
    id: "time",
    label: "🕐 Giờ",
    icon: "🕐",
    items: [
      { jp: "7時", romaji: "shichiji", vi: "7 giờ" },
      { jp: "12時", romaji: "jūniji", vi: "12 giờ" },
      { jp: "3時半", romaji: "sanji han", vi: "3 giờ 30" },
      { jp: "9時15分", romaji: "kuji jūgofun", vi: "9 giờ 15 phút" },
      { jp: "6時45分", romaji: "rokuji yonjūgofun", vi: "6 giờ 45 phút" },
      { jp: "午前10時", romaji: "gozen jūji", vi: "10 giờ sáng" },
      { jp: "午後3時", romaji: "gogo sanji", vi: "3 giờ chiều" },
      { jp: "夜11時", romaji: "yoru jūichiji", vi: "11 giờ đêm" },
      { jp: "朝8時30分", romaji: "asa hachiji sanjuppun", vi: "8 giờ 30 sáng" },
      { jp: "昼12時", romaji: "hiru jūniji", vi: "12 giờ trưa" }
    ]
  },
  {
    id: "price",
    label: "💴 Giá tiền",
    icon: "💴",
    items: [
      { jp: "100円", romaji: "hyaku en", vi: "100 yên" },
      { jp: "500円", romaji: "gohyaku en", vi: "500 yên" },
      { jp: "1,000円", romaji: "sen en", vi: "1.000 yên" },
      { jp: "2,500円", romaji: "nisen gohyaku en", vi: "2.500 yên" },
      { jp: "10,000円", romaji: "ichiman en", vi: "10.000 yên" },
      { jp: "3,800円", romaji: "sanzenhappyaku en", vi: "3.800 yên" },
      { jp: "980円", romaji: "kyūhyaku hachijū en", vi: "980 yên" },
      { jp: "15,000円", romaji: "ichiman gosen en", vi: "15.000 yên" },
      { jp: "450円", romaji: "yonhyaku gojū en", vi: "450 yên" },
      { jp: "6,300円", romaji: "rokusen sanbyaku en", vi: "6.300 yên" }
    ]
  },
  {
    id: "date",
    label: "📅 Ngày tháng",
    icon: "📅",
    items: [
      { jp: "1月1日", romaji: "ichigatsu tsuitachi", vi: "Ngày 1 tháng 1" },
      { jp: "3月3日", romaji: "sangatsu mikkа", vi: "Ngày 3 tháng 3" },
      { jp: "5月5日", romaji: "gogatsu itsuka", vi: "Ngày 5 tháng 5" },
      { jp: "7月7日", romaji: "shichigatsu nanoka", vi: "Ngày 7 tháng 7" },
      { jp: "12月25日", romaji: "jūnigatsu nijūgonichi", vi: "Ngày 25 tháng 12" },
      { jp: "4月1日", romaji: "shigatsu tsuitachi", vi: "Ngày 1 tháng 4" },
      { jp: "8月15日", romaji: "hachigatsu jūgonichi", vi: "Ngày 15 tháng 8" },
      { jp: "11月3日", romaji: "jūichigatsu mikkа", vi: "Ngày 3 tháng 11" },
      { jp: "2月14日", romaji: "nigatsu jūyokka", vi: "Ngày 14 tháng 2" },
      { jp: "9月20日", romaji: "kugatsu hatsuka", vi: "Ngày 20 tháng 9" }
    ]
  },
  {
    id: "phone",
    label: "📱 Điện thoại",
    icon: "📱",
    items: [
      { jp: "090-1234-5678", romaji: "zero kyū zero no ichi ni san shi no go roku nana hachi", vi: "090-1234-5678" },
      { jp: "03-5678-9012", romaji: "zero san no go roku nana hachi no kyū zero ichi ni", vi: "03-5678-9012" },
      { jp: "080-0000-1111", romaji: "zero hachi zero no zero zero zero zero no ichi ichi ichi ichi", vi: "080-0000-1111" },
      { jp: "075-345-6789", romaji: "zero nana go no san yon go no roku nana hachi kyū", vi: "075-345-6789" },
      { jp: "06-4321-8765", romaji: "zero roku no yon san ni ichi no hachi nana roku go", vi: "06-4321-8765" }
    ]
  },
  {
    id: "counter",
    label: "🔢 Đếm",
    icon: "🔢",
    items: [
      { jp: "1つ", romaji: "hitotsu", vi: "1 cái" },
      { jp: "3本", romaji: "sanbon", vi: "3 cây/chai" },
      { jp: "5枚", romaji: "gomai", vi: "5 tờ/cái phẳng" },
      { jp: "2冊", romaji: "nisatsu", vi: "2 quyển sách" },
      { jp: "4人", romaji: "yonin", vi: "4 người" },
      { jp: "6台", romaji: "rokudai", vi: "6 máy móc" },
      { jp: "10個", romaji: "jukko", vi: "10 hạt/viên" },
      { jp: "8匹", romaji: "happiki", vi: "8 con (nhỏ)" },
      { jp: "7頭", romaji: "nanatō", vi: "7 con (lớn)" },
      { jp: "2杯", romaji: "nihai", vi: "2 ly/bát" }
    ]
  }
];
const DIALOGUE_SCENARIOS = [
  {
    id: "restaurant",
    title: "🍜 Tại nhà hàng",
    situation: "Bạn gọi món ăn tại nhà hàng Nhật Bản.",
    lines: [
      { role: "staff", jp: "いらっしゃいませ。何名様ですか？", romaji: "Irasshaimase. Nan-mei-sama desu ka?", vi: "Xin chào! Quý khách mấy người ạ?" },
      { role: "you", choices: ["2人です。", "1人です。", "4人です。"], correct: 0, jp: "2人です。", romaji: "Futari desu.", vi: "2 người ạ." },
      { role: "staff", jp: "こちらへどうぞ。ご注文はお決まりですか？", romaji: "Kochira e dōzo. Go-chūmon wa o-kimari desu ka?", vi: "Mời vào đây. Quý khách đã chọn món chưa?" },
      { role: "you", choices: ["ラーメンをください。", "ラーメンですか？", "ラーメンがあります。"], correct: 0, jp: "ラーメンをください。", romaji: "Rāmen o kudasai.", vi: "Cho tôi một tô ramen." },
      { role: "staff", jp: "お飲み物はいかがですか？", romaji: "O-nomimono wa ikaga desu ka?", vi: "Quý khách dùng gì uống không?" },
      { role: "you", choices: ["お水をお願いします。", "お水はどこですか？", "お水を買います。"], correct: 0, jp: "お水をお願いします。", romaji: "O-mizu o onegai shimasu.", vi: "Cho tôi nước suối." }
    ]
  },
  {
    id: "station",
    title: "🚉 Tại ga tàu",
    situation: "Bạn hỏi đường đến ga tàu và mua vé.",
    lines: [
      { role: "you", choices: ["新宿駅はどこですか？", "新宿駅に行きます。", "新宿駅が好きです。"], correct: 0, jp: "新宿駅はどこですか？", romaji: "Shinjuku-eki wa doko desu ka?", vi: "Ga Shinjuku ở đâu ạ?" },
      { role: "staff", jp: "あそこに見える建物の横です。", romaji: "Asoko ni mieru tatemono no yoko desu.", vi: "Bên cạnh tòa nhà trông thấy đằng kia." },
      { role: "you", choices: ["切符を1枚ください。", "切符はいくらですか？", "切符がありますか？"], correct: 0, jp: "切符を1枚ください。", romaji: "Kippu o ichimai kudasai.", vi: "Cho tôi một vé." },
      { role: "staff", jp: "170円です。", romaji: "Hyaku nana-jū en desu.", vi: "170 yên." },
      { role: "you", choices: ["ありがとうございます。", "すみません。", "どうぞ。"], correct: 0, jp: "ありがとうございます。", romaji: "Arigatō gozaimasu.", vi: "Cảm ơn." }
    ]
  },
  {
    id: "hospital",
    title: "🏥 Tại bệnh viện",
    situation: "Bạn đến bệnh viện vì không khỏe.",
    lines: [
      { role: "receptionist", jp: "どうされましたか？", romaji: "Dō saremashita ka?", vi: "Bạn có chuyện gì vậy?" },
      { role: "you", choices: ["熱があります。", "熱がほしいです。", "熱が好きです。"], correct: 0, jp: "熱があります。", romaji: "Netsu ga arimasu.", vi: "Tôi bị sốt." },
      { role: "doctor", jp: "いつから熱がありますか？", romaji: "Itsu kara netsu ga arimasu ka?", vi: "Bạn bị sốt từ khi nào?" },
      { role: "you", choices: ["昨日からです。", "昨日がいいです。", "昨日に行きます。"], correct: 0, jp: "昨日からです。", romaji: "Kinō kara desu.", vi: "Từ hôm qua ạ." },
      { role: "doctor", jp: "薬を3日分出します。", romaji: "Kusuri o mikkabun dashimasu.", vi: "Tôi sẽ kê thuốc cho 3 ngày." },
      { role: "you", choices: ["ありがとうございます。", "わかりません。", "どうぞ。"], correct: 0, jp: "ありがとうございます。", romaji: "Arigatō gozaimasu.", vi: "Vâng, cảm ơn bác sĩ." }
    ]
  },
  {
    id: "shopping",
    title: "🛍️ Mua sắm",
    situation: "Bạn mua quần áo tại cửa hàng.",
    lines: [
      { role: "staff", jp: "いらっしゃいませ。何かお探しですか？", romaji: "Irasshaimase. Nanika o-sagashi desu ka?", vi: "Xin chào! Bạn tìm gì vậy?" },
      { role: "you", choices: ["シャツを探しています。", "シャツが好きです。", "シャツを食べます。"], correct: 0, jp: "シャツを探しています。", romaji: "Shatsu o sagashite imasu.", vi: "Tôi đang tìm áo sơ mi." },
      { role: "staff", jp: "サイズはいかがですか？", romaji: "Saizu wa ikaga desu ka?", vi: "Cỡ nào ạ?" },
      { role: "you", choices: ["Mサイズをください。", "Mサイズが来ます。", "Mサイズを読みます。"], correct: 0, jp: "Mサイズをください。", romaji: "Emu-saizu o kudasai.", vi: "Cho tôi cỡ M." },
      { role: "staff", jp: "こちらはいかがですか？2,800円です。", romaji: "Kochira wa ikaga desu ka? Nisen happyaku en desu.", vi: "Cái này thế nào? 2.800 yên." },
      { role: "you", choices: ["じゃ、これをください。", "じゃ、どこですか？", "じゃ、行きます。"], correct: 0, jp: "じゃ、これをください。", romaji: "Ja, kore o kudasai.", vi: "Vậy tôi lấy cái này." }
    ]
  },
  {
    id: "phone-call",
    title: "📞 Gọi điện",
    situation: "Bạn gọi điện thoại để đặt lịch hẹn.",
    lines: [
      { role: "you", choices: ["もしもし、田中様はいらっしゃいますか？", "もしもし、田中さんが来ます。", "もしもし、田中さんが好きです。"], correct: 0, jp: "もしもし、田中様はいらっしゃいますか？", romaji: "Moshi moshi, Tanaka-sama wa irasshaimasu ka?", vi: "Xin chào, anh/chị Tanaka có ở đó không?" },
      { role: "staff", jp: "少々お待ちください。", romaji: "Shōshō o-machi kudasai.", vi: "Xin chờ một chút." },
      { role: "tanaka", jp: "はい、田中です。", romaji: "Hai, Tanaka desu.", vi: "Vâng, tôi là Tanaka." },
      { role: "you", choices: ["来週の月曜日に会えますか？", "来週の月曜日が好きです。", "来週の月曜日を食べます。"], correct: 0, jp: "来週の月曜日に会えますか？", romaji: "Raishū no getsuyōbi ni aemasu ka?", vi: "Tuần tới vào thứ Hai, chúng ta có thể gặp nhau không?" },
      { role: "tanaka", jp: "午後2時はどうですか？", romaji: "Gogo niji wa dō desu ka?", vi: "2 giờ chiều thì sao?" },
      { role: "you", choices: ["はい、大丈夫です。", "はい、行きます。", "はい、食べます。"], correct: 0, jp: "はい、大丈夫です。", romaji: "Hai, daijōbu desu.", vi: "Vâng, được ạ." }
    ]
  },
  {
    id: "train-station",
    title: "🚆 Tại nhà ga",
    situation: "Bạn hỏi đường đi và mua vé tàu.",
    lines: [
      { role: "you", choices: ["すみません、新宿に行きたいんですが。", "すみません、新宿が好きです。", "すみません、新宿を食べます。"], correct: 0, jp: "すみません、新宿に行きたいんですが。", romaji: "Sumimasen, Shinjuku ni ikitain desu ga.", vi: "Xin lỗi, tôi muốn đi Shinjuku ạ." },
      { role: "staff", jp: "新宿ですね。山手線の2番線に乗ってください。", romaji: "Shinjuku desu ne. Yamanotesen no nibansen ni notte kudasai.", vi: "Shinjuku nhỉ. Xin hãy lên tuyến Yamanote ở số 2." },
      { role: "you", choices: ["切符はどこで買えますか？", "切符はいくらですか？", "切符をなくしました。"], correct: 0, jp: "切符はどこで買えますか？", romaji: "Kippu wa doko de kaemasu ka?", vi: "Tôi có thể mua vé ở đâu ạ?" },
      { role: "staff", jp: "あそこの券売機で買えますよ。", romaji: "Asoko no kenbaiki de kaemasu yo.", vi: "Bạn có thể mua ở máy bán vé đằng kia." },
      { role: "you", choices: ["ありがとうございます。", "さようなら。", "わかりません。"], correct: 0, jp: "ありがとうございます。", romaji: "Arigatō gozaimasu.", vi: "Cảm ơn bạn rất nhiều." }
    ]
  },
  {
    id: "hotel",
    title: "🏨 Tại khách sạn",
    situation: "Bạn làm thủ tục nhận phòng (check-in) tại khách sạn.",
    lines: [
      { role: "you", choices: ["チェックインをお願いします。", "チェックアウトをお願いします。", "部屋を掃除してください。"], correct: 0, jp: "チェックインをお願いします。", romaji: "Chekkuin o onegaishimasu.", vi: "Cho tôi làm thủ tục nhận phòng ạ." },
      { role: "staff", jp: "はい。お名前をお願いします。", romaji: "Hai. Onamae o onegaishimasu.", vi: "Vâng, xin cho biết tên của quý khách ạ." },
      { role: "you", choices: ["田中です。予約しています。", "田中です。帰ります。", "田中です。寝ます。"], correct: 0, jp: "田中です。予約しています。", romaji: "Tanaka desu. Yoyaku shite imasu.", vi: "Tôi là Tanaka. Tôi có đặt trước rồi." },
      { role: "staff", jp: "田中様ですね。お待ちしておりました。こちらの用紙にご記入をお願いします。", romaji: "Tanaka-sama desu ne. Omachi shite orimashita. Kochira no yōshi ni gokinyū o onegaishimasu.", vi: "Quý khách Tanaka nhỉ. Chúng tôi đã đợi quý khách. Xin vui lòng điền vào mẫu này ạ." },
      { role: "you", choices: ["はい、書きました。", "はい、読みました。", "はい、食べました。"], correct: 0, jp: "はい、書きました。", romaji: "Hai, kakimashita.", vi: "Vâng, tôi đã viết xong rồi." }
    ]
  }
];
function getScenarioItems(scenario) {
  if (!scenario) return [];
  return scenario.lines.map((line, idx) => ({
    id: `${scenario.id}_${idx}`,
    role: line.role,
    isYou: line.role === "you",
    jp: line.jp,
    romaji: line.romaji || "",
    vi: line.vi,
    choices: line.choices || null,
    correct: typeof line.correct === "number" ? line.correct : null
  }));
}
function MechaRadioMode({ items = [] }) {
  var _a;
  const { score, combo, hp, addScore, takeDamage, resetCombo } = useGameStore(useShallow((s) => ({
    score: s.score,
    combo: s.combo,
    hp: s.hp,
    addScore: s.addScore,
    takeDamage: s.takeDamage,
    resetCombo: s.resetCombo
  })));
  const scoring = useScoreEngine();
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [phase, setPhase] = reactExports.useState("SCANNING");
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [finished, setFinished] = reactExports.useState(false);
  const [signalStrength, setSignalStrength] = reactExports.useState(0);
  const [waveData, setWaveData] = reactExports.useState([]);
  const [screenPulse, setScreenPulse] = reactExports.useState(false);
  const [decryptProgress, setDecryptProgress] = reactExports.useState(0);
  const timerRef = reactExports.useRef(null);
  const pulseTimerRef = reactExports.useRef(null);
  const correctCount = reactExports.useRef(0);
  const qCfg = reactExports.useMemo(() => getQualityConfig(), []);
  const lowPowerMotion = qCfg.tier === "low" || ((_a = qCfg.deviceProbe) == null ? void 0 : _a.isMobile);
  reactExports.useEffect(() => {
    useGameStore.setState({ hp: 100, score: 0, combo: 0, gameState: "PLAYING" });
  }, []);
  const pool = reactExports.useMemo(() => {
    const valid = items.filter((it) => it.word && it.meaning);
    return [...valid].sort(() => Math.random() - 0.5).slice(0, 15);
  }, [items]);
  const current = pool[qIdx];
  const options = reactExports.useMemo(() => {
    if (!current) return [];
    const others = pool.filter((_, i) => i !== qIdx).sort(() => Math.random() - 0.5).slice(0, 3).map((it) => it.meaning);
    const ans = [current.meaning, ...others].sort(() => Math.random() - 0.5);
    return ans;
  }, [current, pool, qIdx]);
  reactExports.useEffect(() => {
    if (lowPowerMotion) {
      setWaveData(Array.from({ length: 12 }, (_, i) => 0.28 + i % 4 * 0.08));
      return void 0;
    }
    let frame;
    let lastRender = 0;
    const frameMs = 1e3 / 30;
    const bars = 32;
    const animate = (now = performance.now()) => {
      if (typeof document === "undefined" || !document.hidden) {
        if (now - lastRender >= frameMs) {
          lastRender = now;
          const phaseBoost = phase === "SCANNING" ? 0.2 : phase === "LOCKED" ? 0.6 : 0.9;
          const data = Array.from({ length: bars }, (_, i) => phaseBoost * (0.3 + 0.7 * Math.abs(Math.sin(now * 3e-3 + i * 0.5))));
          setWaveData(data);
        }
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [phase, lowPowerMotion]);
  reactExports.useEffect(() => {
    if (phase === "SCANNING") {
      const interval = setInterval(() => {
        setSignalStrength((prev) => {
          const next = prev + (lowPowerMotion ? 4 : 2);
          if (next >= 100) {
            clearInterval(interval);
            setPhase("LOCKED");
            return 100;
          }
          return next;
        });
      }, lowPowerMotion ? 120 : 30);
      return () => clearInterval(interval);
    }
  }, [phase, qIdx, lowPowerMotion]);
  reactExports.useEffect(() => {
    if (phase === "LOCKED" && current) {
      const delay = setTimeout(() => {
        speakJP(current.word);
        setPhase("DECRYPTING");
      }, 600);
      return () => clearTimeout(delay);
    }
  }, [phase, current]);
  const handleDecrypt = reactExports.useCallback((opt) => {
    if (feedback || !current) return;
    setSelected(opt);
    const isCorrect = opt === current.meaning;
    if (isCorrect) {
      playSFX("correct");
      addScore(150 + combo * 25);
      correctCount.current++;
      scoring.recordCorrect(current);
      setFeedback("correct");
      setDecryptProgress(100);
      setScreenPulse(true);
      if (pulseTimerRef.current) {
        clearTimeout(pulseTimerRef.current);
      }
      pulseTimerRef.current = setTimeout(() => {
        setScreenPulse(false);
        pulseTimerRef.current = null;
      }, lowPowerMotion ? 160 : 300);
    } else {
      playSFX("wrong");
      takeDamage(15);
      resetCombo();
      scoring.recordWrong(current);
      setFeedback("wrong");
    }
    timerRef.current = setTimeout(() => {
      setFeedback(null);
      setSelected(null);
      setDecryptProgress(0);
      setSignalStrength(0);
      if (qIdx + 1 >= pool.length || hp <= 0) {
        setFinished(true);
      } else {
        setQIdx((i) => i + 1);
        setPhase("SCANNING");
      }
    }, 1400);
  }, [feedback, current, combo, qIdx, pool.length, hp, addScore, takeDamage, resetCombo, scoring, lowPowerMotion]);
  reactExports.useEffect(() => () => {
    clearTimeout(timerRef.current);
    clearTimeout(pulseTimerRef.current);
  }, []);
  if (pool.length < 4) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📡" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu cho Mecha Radio. Cần ít nhất 4 mục." })
    ] });
  }
  if (finished) {
    const pct = pool.length > 0 ? Math.round(correctCount.current / pool.length * 100) : 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mecha-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mecha-result-icon", children: "📡" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mecha-result-title", children: "HOÀN TẤT TRUYỀN TIN" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mecha-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mecha-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mecha-stat-value", children: correctCount.current }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mecha-stat-label", children: "Giải mã" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mecha-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mecha-stat-value", children: pool.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mecha-stat-label", children: "Tín hiệu" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mecha-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mecha-stat-value", children: [
            pct,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mecha-stat-label", children: "Chính xác" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mecha-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mecha-stat-value", children: score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mecha-stat-label", children: "Điểm" })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mecha-radio-container ${screenPulse ? "pulse" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mecha-hud", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mecha-hud-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mecha-score", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mecha-score-icon", children: "⚡" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mecha-score-value", children: score })
        ] }),
        combo > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mecha-combo", children: [
          "x",
          combo,
          " CHUỖI"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mecha-hud-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mecha-signal-label", children: [
        "TÍN HIỆU ",
        qIdx + 1,
        "/",
        pool.length
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mecha-hud-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mecha-hp-bar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mecha-hp-fill", style: { width: `${hp}%` } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mecha-hp-text", children: [
          "KHIÊN ",
          hp,
          "%"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mecha-waveform", children: waveData.map((val, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `mecha-wave-bar ${phase === "DECRYPTING" ? "active" : ""}`,
        style: { height: `${val * 100}%` }
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mecha-signal-meter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mecha-signal-fill", style: { width: `${signalStrength}%` } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mecha-signal-text", children: [
        phase === "SCANNING" && "📡 SCANNING...",
        phase === "LOCKED" && "🔒 SIGNAL LOCKED",
        phase === "DECRYPTING" && "🔓 DECRYPTING..."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mecha-central", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mecha-transmission ${phase}`, children: [
      phase === "SCANNING" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mecha-scan-text", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "scan-dot" }),
        "ĐANG TÌM KIẾM TÍN HIỆU..."
      ] }),
      (phase === "LOCKED" || phase === "DECRYPTING") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mecha-word-display", children: current == null ? void 0 : current.word }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mecha-reading", children: (current == null ? void 0 : current.reading) || "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "mecha-replay-btn",
            onClick: () => speakJP(current == null ? void 0 : current.word),
            children: "🔊 REPLAY"
          }
        )
      ] })
    ] }) }),
    phase === "DECRYPTING" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mecha-options", children: options.map((opt, i) => {
      let cls = "mecha-option";
      if (feedback && opt === current.meaning) cls += " correct";
      else if (feedback && opt === selected && opt !== current.meaning) cls += " wrong";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: cls,
          onClick: () => handleDecrypt(opt),
          disabled: !!feedback,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mecha-option-prefix", children: [
              String.fromCharCode(65 + i),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mecha-option-text", children: opt })
          ]
        },
        i
      );
    }) }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mecha-feedback ${feedback}`, children: feedback === "correct" ? "✅ SIGNAL DECODED SUCCESSFULLY" : `❌ DECODE FAILED — Answer: ${current.meaning}` })
  ] });
}
const VoiceShadowing = reactExports.lazy(() => __vitePreload(() => import("./VoiceShadowing-CNDOcuRm.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url));
function similarity(a = "", b = "") {
  const na = String(a).replace(/\s+/g, "").toLowerCase();
  const nb = String(b).replace(/\s+/g, "").toLowerCase();
  if (!na || !nb) return 0;
  let hits = 0;
  for (let i = 0; i < na.length; i++) if (nb.includes(na[i])) hits++;
  return hits / Math.max(na.length, nb.length);
}
function ShadowingMode({ items = [], maxItems = 8 }) {
  const pool = reactExports.useMemo(() => items.filter((it) => (it == null ? void 0 : it.word) || (it == null ? void 0 : it.sentence)).slice(0, maxItems), [items, maxItems]);
  const [idx, setIdx] = reactExports.useState(0);
  const [record, setRecord] = reactExports.useState(null);
  const recordAnswer = useLearningStore((s) => s.recordAnswer);
  const current = pool[idx];
  const target = (current == null ? void 0 : current.sentence) || (current == null ? void 0 : current.word) || "";
  if (!current) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "🎤" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có câu nào để luyện shadowing." })
    ] });
  }
  const handleResult = ({ transcript }) => {
    const sim = similarity(transcript, target);
    const ok = sim >= 0.5;
    setRecord({ transcript, sim, ok });
    try {
      bus.emit(GAME_EVENTS.ANSWER_SUBMITTED, {
        correct: ok,
        itemKey: current.word ? `v:${current.word}` : null,
        itemKind: "listening",
        combo: ok ? 1 : 0,
        phase: "core",
        trainerId: "listening-lab",
        mode: "shadowing",
        ts: Date.now(),
        meta: { transcript, similarity: sim, target }
      });
    } catch (e) {
    }
    recordAnswer(ok);
  };
  const next = () => {
    setRecord(null);
    setIdx((i) => Math.min(pool.length - 1, i + 1));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shadowing-mode", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-shadowing-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(target), children: "🔊 Nghe mẫu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Câu ",
        idx + 1,
        "/",
        pool.length
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Đang tải micro…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(VoiceShadowing, { targetText: target, langCode: "ja-JP", onResult: handleResult }) }),
    record && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-shadowing-result ${record.ok ? "is-ok" : "is-off"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Độ giống: ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
          Math.round(record.sim * 100),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-shadowing-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setRecord(null), children: "↺ Thử lại" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-btn-sm", onClick: next, disabled: idx + 1 >= pool.length, children: idx + 1 >= pool.length ? "Đã hết" : "Tiếp →" })
      ] })
    ] })
  ] });
}
const MODES = [
  // Primary 3 — always visible as tabs
  { id: "dictation", label: "Chính tả", icon: "🤖" },
  { id: "comprehension", label: "Nghe hiểu", icon: "🎧" },
  { id: "speech", label: "Phát âm", icon: "🎤" },
  // Overflow — behind "⋯" button
  { id: "drills", label: "Luyện nhanh", icon: "⚡" },
  { id: "numbers", label: "Số & Ngày", icon: "🔢" },
  { id: "dialogue", label: "Hội thoại", icon: "💬" },
  { id: "radio", label: "Radio N4", icon: "📻" },
  { id: "shadowing", label: "Bắt chước", icon: "🎙️" }
];
function extractRomaji(text) {
  if (!text) return "";
  const m = text.match(/\(([A-Za-z][A-Za-z\s.,!?'"\-~]+)\)\s*$/);
  if (m) return m[1].trim();
  const all = text.match(/\(([A-Za-z][A-Za-z\s.,!?'"\-~]+)\)/g);
  if (all == null ? void 0 : all.length) return all[all.length - 1].replace(/^\(|\)$/g, "").trim();
  return "";
}
function SpeedDrill({ items, maxQuestions = 20 }) {
  const scoring = useScoreEngine();
  const TIME_PER_Q = 6;
  const LOW_TIME_WARNING_SECONDS = 2;
  const [sessionKey, setSessionKey] = reactExports.useState(0);
  const pool = reactExports.useMemo(() => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(maxQuestions, shuffled.length));
  }, [items, maxQuestions, sessionKey]);
  const [idx, setIdx] = reactExports.useState(0);
  const [timer, setTimer] = reactExports.useState(TIME_PER_Q);
  const [score, setScore] = reactExports.useState(0);
  const [wrong, setWrong] = reactExports.useState(0);
  const [answered, setAnswered] = reactExports.useState(false);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [finished, setFinished] = reactExports.useState(false);
  const [selected, setSelected] = reactExports.useState(-1);
  const [damageEvents, setDamageEvents] = reactExports.useState([]);
  const [comboTier, setComboTier] = reactExports.useState(null);
  const [effectBanner, setEffectBanner] = reactExports.useState(null);
  const timerRef = reactExports.useRef(null);
  const effectTimeoutsRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const lowTimeWarningRef = reactExports.useRef(false);
  const current = pool[idx];
  const clearEffectTimeouts = reactExports.useCallback(() => {
    effectTimeoutsRef.current.forEach(clearTimeout);
    effectTimeoutsRef.current.clear();
  }, []);
  const resetEffectState = reactExports.useCallback(() => {
    clearEffectTimeouts();
    lowTimeWarningRef.current = false;
    setDamageEvents([]);
    setComboTier(null);
    setEffectBanner(null);
  }, [clearEffectTimeouts]);
  const scheduleEffectCleanup = reactExports.useCallback((callback, delayMs) => {
    const timeoutId = setTimeout(() => {
      effectTimeoutsRef.current.delete(timeoutId);
      callback();
    }, delayMs);
    effectTimeoutsRef.current.add(timeoutId);
    return timeoutId;
  }, []);
  const pushEffectText = reactExports.useCallback((payload, durationMs = 760) => {
    const nextEvent = createCombatText(payload);
    setDamageEvents((events) => [...events, nextEvent]);
    scheduleEffectCleanup(() => {
      setDamageEvents((events) => events.filter((event) => event.id !== nextEvent.id));
    }, durationMs);
    return nextEvent;
  }, [scheduleEffectCleanup]);
  const showEffectBanner = reactExports.useCallback((payload, durationMs = 1100) => {
    const nextBanner = createBattleBanner(payload);
    setEffectBanner(nextBanner);
    scheduleEffectCleanup(() => {
      setEffectBanner((banner) => (banner == null ? void 0 : banner.id) === nextBanner.id ? null : banner);
    }, durationMs);
    return nextBanner;
  }, [scheduleEffectCleanup]);
  const triggerComboTierEffect = reactExports.useCallback((nextCombo) => {
    const tier = getComboTier(nextCombo);
    if (!tier) return null;
    const tierState = { ...tier, combo: nextCombo };
    setComboTier(tierState);
    scheduleEffectCleanup(() => {
      setComboTier((activeTier) => (activeTier == null ? void 0 : activeTier.combo) === nextCombo ? null : activeTier);
    }, 1100);
    if (nextCombo === tier.threshold) {
      showEffectBanner({
        icon: tier.icon,
        label: `${tier.label}!`,
        detail: `Chuỗi x${nextCombo} đang tăng tốc.`,
        tone: "power"
      }, 1e3);
    }
    return tierState;
  }, [scheduleEffectCleanup, showEffectBanner]);
  const emitPenaltyEffects = reactExports.useCallback(({ comboBeforeAnswer, missType, powerUps }) => {
    const skipShieldActive = ((powerUps == null ? void 0 : powerUps.skipShield) || 0) > 0;
    const comboProtected = skipShieldActive || ((powerUps == null ? void 0 : powerUps.comboSaver) || 0) > 0 || ((powerUps == null ? void 0 : powerUps.titanShield) || 0) > 0;
    setComboTier(null);
    pushEffectText({
      amount: 0,
      label: skipShieldActive ? "Chắn lỗi" : missType === "timeout" ? "Hết giờ" : "Lệch nhịp",
      target: "player",
      left: "50%",
      top: "18%",
      color: skipShieldActive ? "#c4b5fd" : missType === "timeout" ? "#fdba74" : "#fca5a5",
      textShadow: skipShieldActive ? "0 0 12px rgba(196, 181, 253, 0.55)" : missType === "timeout" ? "0 0 10px rgba(251, 191, 36, 0.42)" : "0 0 10px rgba(248, 113, 113, 0.38)"
    });
    if (skipShieldActive) {
      showEffectBanner({
        icon: "🛡️",
        label: "Lá chắn cứu nguy",
        detail: "Lỗi sai đã bị hấp thụ, bạn vẫn giữ nhịp.",
        tone: "power"
      }, 1200);
      return;
    }
    if (comboProtected && comboBeforeAnswer > 1) {
      showEffectBanner({
        icon: "🧷",
        label: "Combo được giữ",
        detail: `Power-up đã giữ chuỗi x${comboBeforeAnswer}.`,
        tone: "power"
      }, 1200);
      return;
    }
    if (comboBeforeAnswer > 1) {
      showEffectBanner({
        icon: "💔",
        label: "Combo bị gãy",
        detail: missType === "timeout" ? `Bạn hụt nhịp ở chuỗi x${comboBeforeAnswer}.` : `Chuỗi x${comboBeforeAnswer} đã bị cắt.`,
        tone: "warning"
      }, 1300);
      return;
    }
    if (missType === "timeout") {
      showEffectBanner({
        icon: "⏰",
        label: "Hết giờ",
        detail: "Chọn nhanh hơn ở câu tiếp theo.",
        tone: "warning"
      }, 1100);
    }
  }, [pushEffectText, showEffectBanner]);
  const options = reactExports.useMemo(() => {
    if (!current) return [];
    const otherMeanings = [...new Set(items.filter((it) => it.meaning !== current.meaning).map((it) => it.meaning))];
    const wrongs = otherMeanings.sort(() => Math.random() - 0.5).slice(0, 3);
    return [...wrongs, current.meaning].sort(() => Math.random() - 0.5);
  }, [idx, items]);
  const correctIdx = options.indexOf(current == null ? void 0 : current.meaning);
  reactExports.useEffect(() => {
    if (!current || finished) return;
    clearInterval(timerRef.current);
    resetEffectState();
    setAnswered(false);
    setFeedback(null);
    setSelected(-1);
    setTimer(TIME_PER_Q);
    const t = setTimeout(() => speakJP(current.word), 150);
    return () => clearTimeout(t);
  }, [current, finished, idx, resetEffectState]);
  const handleTimeout = reactExports.useCallback(() => {
    if (answered || finished || !current) return;
    const comboBeforeAnswer = scoring.combo;
    const powerUps = useLearningStore.getState().powerUps;
    setAnswered(true);
    setFeedback("timeout");
    setWrong((w) => w + 1);
    scoring.recordWrong(current);
    playSFX("wrong");
    emitPenaltyEffects({ comboBeforeAnswer, missType: "timeout", powerUps });
  }, [answered, current, emitPenaltyEffects, finished, scoring]);
  reactExports.useEffect(() => {
    if (answered || finished || !current) return;
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev === LOW_TIME_WARNING_SECONDS + 1 && !lowTimeWarningRef.current) {
          lowTimeWarningRef.current = true;
          showEffectBanner({
            icon: "⌛",
            label: "Nước rút",
            detail: "Chỉ còn 2 giây để chốt đáp án.",
            tone: "warning"
          }, 700);
        }
        if (prev <= 1) {
          clearInterval(timerRef.current);
          queueMicrotask(() => handleTimeout());
          return 0;
        }
        return prev - 1;
      });
    }, 1e3);
    return () => clearInterval(timerRef.current);
  }, [answered, current, finished, handleTimeout, showEffectBanner]);
  const handlePick = reactExports.useCallback((i) => {
    if (answered || finished) return;
    clearInterval(timerRef.current);
    setAnswered(true);
    setSelected(i);
    if (i === correctIdx) {
      const nextCombo = scoring.combo + 1;
      setScore((s) => s + 1);
      setFeedback("correct");
      playSFX("correct");
      scoring.recordCorrect(current);
      pushEffectText({
        amount: nextCombo,
        label: `+${calcXp(nextCombo)} XP`,
        target: "boss",
        left: "50%",
        top: "18%",
        variant: nextCombo >= 5 ? "crit" : "hit",
        emphasis: nextCombo >= 5,
        color: nextCombo >= 5 ? "#fde68a" : "#4ade80",
        textShadow: nextCombo >= 5 ? "0 0 14px rgba(250, 204, 21, 0.52)" : "0 0 12px rgba(74, 222, 128, 0.45)"
      });
      if (nextCombo === 3) {
        showEffectBanner({
          icon: "🎧",
          label: "Bắt đúng nhịp",
          detail: "Ba câu liên tiếp không trượt.",
          tone: "info"
        }, 900);
      }
      if (timer <= LOW_TIME_WARNING_SECONDS) {
        showEffectBanner({
          icon: "⚡",
          label: "Phản xạ nhanh",
          detail: "Bạn chốt đáp án ngay lúc nước rút.",
          tone: "info"
        }, 900);
      }
      triggerComboTierEffect(nextCombo);
    } else {
      const comboBeforeAnswer = scoring.combo;
      const powerUps = useLearningStore.getState().powerUps;
      setWrong((w) => w + 1);
      setFeedback("wrong");
      playSFX("wrong");
      scoring.recordWrong(current);
      emitPenaltyEffects({ comboBeforeAnswer, missType: "wrong", powerUps });
    }
  }, [answered, correctIdx, current, emitPenaltyEffects, finished, pushEffectText, scoring, showEffectBanner, timer, triggerComboTierEffect]);
  const goNext = () => {
    if (idx + 1 >= pool.length) {
      setFinished(true);
    } else {
      setIdx((i) => i + 1);
    }
  };
  const restart = () => {
    clearInterval(timerRef.current);
    setSessionKey((k) => k + 1);
    setIdx(0);
    setScore(0);
    setWrong(0);
    setAnswered(false);
    setFeedback(null);
    setFinished(false);
    setSelected(-1);
    resetEffectState();
    scoring.reset();
  };
  reactExports.useEffect(() => () => {
    clearInterval(timerRef.current);
    clearEffectTimeouts();
  }, [clearEffectTimeouts]);
  if (!(items == null ? void 0 : items.length) || items.length < 4) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu. Chọn phần khác." })
    ] });
  }
  if (finished) {
    const pct = pool.length ? Math.round(score / pool.length * 100) : 0;
    const emoji = pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "💪";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-emoji", children: emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-result-title", children: pct >= 80 ? "Xuất sắc!" : pct >= 50 ? "Khá tốt!" : "Cố lên!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Đúng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value success", children: score })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Sai" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value error", children: wrong })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Chính xác" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stat-value", children: [
            pct,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: restart, children: "🔄 Làm lại" })
    ] });
  }
  const timerPct = timer / TIME_PER_Q * 100;
  const timerColor = timer <= 2 ? "var(--n4-danger)" : timer <= 4 ? "var(--n4-warning, orange)" : "var(--n4-neon-cyan)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { position: "relative" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GameplayEffects, { damageEvents, comboTier, banner: effectBanner }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sd-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-sd-progress", children: [
        "⚡ ",
        idx + 1,
        "/",
        pool.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-sd-timer", style: { color: timerColor }, children: [
        timer,
        "s"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-sd-score", children: [
        "✓ ",
        score
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sd-timer-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sd-timer-fill", style: { width: `${timerPct}%`, background: timerColor } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sd-question", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sd-speaker", children: "🔊" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(current.word), children: "Nghe lại" }),
      feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sd-reveal", children: [
        current.word,
        current.reading && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-sd-reveal-reading", children: current.reading })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sd-options", children: options.map((opt, i) => {
      let bg = void 0;
      if (feedback) {
        if (i === correctIdx) bg = "var(--n4-success)";
        else if (i === selected) bg = "var(--n4-danger)";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-btn ${feedback && i === correctIdx ? "n4-btn-primary" : "n4-btn-neon"}`,
          style: bg ? { background: bg } : void 0,
          onClick: () => handlePick(i),
          disabled: !!feedback,
          children: opt
        },
        i
      );
    }) }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sd-feedback", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sd-feedback-text", children: feedback === "correct" ? "✅ Chính xác!" : feedback === "timeout" ? "⏰ Hết giờ!" : `❌ Sai! → ${current.meaning}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-btn-sm", onClick: goNext, children: idx + 1 < pool.length ? "Câu tiếp →" : "Xem kết quả" })
    ] })
  ] });
}
function SpeechRecMode({ items, maxQuestions = 10 }) {
  const scoring = useScoreEngine();
  const [sessionKey, setSessionKey] = reactExports.useState(0);
  const pool = reactExports.useMemo(() => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(maxQuestions, shuffled.length));
  }, [items, maxQuestions, sessionKey]);
  const [idx, setIdx] = reactExports.useState(0);
  const [score, setScore] = reactExports.useState(0);
  const [wrong, setWrong] = reactExports.useState(0);
  const [listening, setListening] = reactExports.useState(false);
  const [transcript, setTranscript] = reactExports.useState("");
  const [feedback, setFeedback] = reactExports.useState(null);
  const [finished, setFinished] = reactExports.useState(false);
  const [showHint, setShowHint] = reactExports.useState(false);
  const [supported, setSupported] = reactExports.useState(true);
  const recognitionRef = reactExports.useRef(null);
  const current = pool[idx];
  reactExports.useEffect(() => {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      setSupported(false);
      return;
    }
    const rec = new SpeechRec();
    rec.lang = "ja-JP";
    rec.interimResults = false;
    rec.maxAlternatives = 5;
    rec.continuous = false;
    recognitionRef.current = rec;
    return () => {
      try {
        rec.abort();
      } catch (e) {
        console.warn("Speech recognition abort:", e);
      }
    };
  }, []);
  reactExports.useEffect(() => {
    if (!current || finished) return;
    setTranscript("");
    setFeedback(null);
    setShowHint(false);
    const t = setTimeout(() => speakJP(current.word), 200);
    return () => clearTimeout(t);
  }, [idx, finished]);
  const normalize = (text) => {
    if (!text) return "";
    return text.replace(/[\s\u3000。、！？!?,.\-~・（）()「」『』【】\[\]]/g, "").toLowerCase();
  };
  const startListening = () => {
    const rec = recognitionRef.current;
    if (!rec || listening) return;
    setTranscript("");
    setFeedback(null);
    setListening(true);
    rec.onresult = (event) => {
      const results = [];
      for (let i = 0; i < event.results.length; i++) {
        for (let j = 0; j < event.results[i].length; j++) {
          results.push(event.results[i][j].transcript);
        }
      }
      const best = results[0] || "";
      setTranscript(best);
      const normWord = normalize(current.word);
      const normReading = normalize(current.reading || "");
      const isCorrect = results.some((r) => {
        const nr = normalize(r);
        return nr === normWord || nr === normReading || normWord.includes(nr) || nr.includes(normWord);
      });
      if (isCorrect) {
        setFeedback("correct");
        setScore((s) => s + 1);
        scoring.recordCorrect(current);
        playSFX("correct");
      } else {
        setFeedback("wrong");
        setWrong((w) => w + 1);
        scoring.recordWrong(current);
        playSFX("wrong");
      }
    };
    rec.onend = () => setListening(false);
    rec.onerror = (e) => {
      setListening(false);
      if (e.error === "no-speech") setTranscript("Không nghe thấy, thử lại!");
      else if (e.error === "not-allowed") setTranscript("Vui lòng cấp quyền microphone");
      else if (e.error !== "aborted") setTranscript("Lỗi: " + e.error);
    };
    try {
      rec.start();
    } catch (e) {
      setListening(false);
    }
  };
  const goNext = () => {
    if (idx + 1 >= pool.length) setFinished(true);
    else setIdx((i) => i + 1);
  };
  const skip = () => {
    setWrong((w) => w + 1);
    scoring.recordWrong(current);
    goNext();
  };
  const restart = () => {
    setSessionKey((k) => k + 1);
    setIdx(0);
    setScore(0);
    setWrong(0);
    setTranscript("");
    setFeedback(null);
    setFinished(false);
    setShowHint(false);
  };
  if (!supported) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "🚫" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Trình duyệt không hỗ trợ Speech Recognition." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Sử dụng ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Chrome trên Android hoặc PC" }),
        "."
      ] })
    ] });
  }
  if (!(items == null ? void 0 : items.length) || items.length < 3) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không đủ dữ liệu. Chọn phần khác." })
    ] });
  }
  if (finished) {
    const pct = pool.length ? Math.round(score / pool.length * 100) : 0;
    const emoji = pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "💪";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-emoji", children: emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-result-title", children: pct >= 80 ? "Phát âm tuyệt vời!" : pct >= 50 ? "Khá tốt!" : "Cần luyện thêm!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Đúng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value success", children: score })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Sai" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value error", children: wrong })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Chính xác" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stat-value", children: [
            pct,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: restart, children: "🔄 Làm lại" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sd-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-sd-progress", children: [
        "🎤 ",
        idx + 1,
        "/",
        pool.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-sd-score", children: [
        "✓ ",
        score
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { textAlign: "center", padding: "2rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2.5rem", marginBottom: "0.5rem" }, children: current.word }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(current.word), title: "Nghe mẫu", children: "🔊 Nghe mẫu" }),
      showHint && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "0.75rem", color: "var(--n4-text-muted)", fontSize: "0.9rem" }, children: [
        current.reading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "📖 ",
          current.reading
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "🇻🇳 ",
          current.meaning
        ] })
      ] }),
      !showHint && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => setShowHint(true), style: { marginTop: "0.5rem" }, children: "💡 Gợi ý" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", margin: "1.5rem 0" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-btn ${listening ? "n4-btn-danger" : "n4-btn-neon"}`,
          onClick: startListening,
          disabled: !!feedback,
          style: { fontSize: "2rem", width: 80, height: 80, borderRadius: "50%" },
          children: listening ? "⏹" : "🎤"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "0.5rem", color: "var(--n4-text-muted)", fontSize: "0.85rem" }, children: listening ? "🔴 Đang nghe..." : feedback ? "" : "Nhấn 🎤 rồi đọc to" })
    ] }),
    transcript && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { textAlign: "center", padding: "1rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85rem", color: "var(--n4-text-muted)", marginBottom: "0.25rem" }, children: "Bạn nói:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.3rem" }, children: transcript })
    ] }),
    feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sd-feedback", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sd-feedback-text", children: feedback === "correct" ? "✅ Phát âm chính xác!" : `❌ Chưa đúng! Đáp án: ${current.word}${current.reading ? ` (${current.reading})` : ""}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "0.5rem", justifyContent: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(current.word), children: "🔊 Nghe lại" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-btn-sm", onClick: goNext, children: idx + 1 < pool.length ? "Câu tiếp →" : "Xem kết quả" })
      ] })
    ] }),
    !feedback && !listening && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginTop: "0.5rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: skip, children: "Bỏ qua →" }) })
  ] });
}
function NumberDrill() {
  const [categoryId, setCategoryId] = reactExports.useState(NUMBER_DRILL_CATEGORIES[0].id);
  const [idx, setIdx] = reactExports.useState(0);
  const [score, setScore] = reactExports.useState(0);
  const [wrong, setWrong] = reactExports.useState(0);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [revealed, setRevealed] = reactExports.useState(false);
  const [finished, setFinished] = reactExports.useState(false);
  const [pool, setPool] = reactExports.useState([]);
  const category = reactExports.useMemo(() => NUMBER_DRILL_CATEGORIES.find((c) => c.id === categoryId), [categoryId]);
  reactExports.useEffect(() => {
    const shuffled = [...(category == null ? void 0 : category.items) || []].sort(() => Math.random() - 0.5);
    setPool(shuffled);
    setIdx(0);
    setScore(0);
    setWrong(0);
    setFeedback(null);
    setRevealed(false);
    setFinished(false);
  }, [categoryId]);
  const current = pool[idx];
  const options = reactExports.useMemo(() => {
    if (!current || !category) return [];
    const others = category.items.filter((it) => it.vi !== current.vi).map((it) => it.vi).sort(() => Math.random() - 0.5).slice(0, 3);
    return [...others, current.vi].sort(() => Math.random() - 0.5);
  }, [idx, categoryId]);
  const correctIdx = options.indexOf(current == null ? void 0 : current.vi);
  reactExports.useEffect(() => {
    if (!current || finished) return;
    setFeedback(null);
    setRevealed(false);
    const t = setTimeout(() => speakJP(current.jp), 200);
    return () => clearTimeout(t);
  }, [idx, finished]);
  const handlePick = (i) => {
    if (feedback || finished) return;
    if (i === correctIdx) {
      setScore((s) => s + 1);
      setFeedback("correct");
      playSFX("correct");
    } else {
      setWrong((w) => w + 1);
      setFeedback("wrong");
      playSFX("wrong");
    }
    setRevealed(true);
  };
  const goNext = () => {
    if (idx + 1 >= pool.length) setFinished(true);
    else setIdx((i) => i + 1);
  };
  const restart = () => {
    const shuffled = [...(category == null ? void 0 : category.items) || []].sort(() => Math.random() - 0.5);
    setPool(shuffled);
    setIdx(0);
    setScore(0);
    setWrong(0);
    setFeedback(null);
    setRevealed(false);
    setFinished(false);
  };
  if (finished) {
    const total = score + wrong;
    const pct = total ? Math.round(score / total * 100) : 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-emoji", children: pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "💪" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-result-title", children: pct >= 80 ? "Xuất sắc!" : pct >= 50 ? "Khá tốt!" : "Cố lên!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Đúng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value success", children: score })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Sai" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value error", children: wrong })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Chính xác" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stat-value", children: [
            pct,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: restart, children: "🔄 Làm lại" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }, children: NUMBER_DRILL_CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: `n4-btn n4-btn-sm ${categoryId === c.id ? "n4-btn-primary" : "n4-btn-ghost"}`,
        onClick: () => setCategoryId(c.id),
        children: [
          c.icon,
          " ",
          c.label
        ]
      },
      c.id
    )) }),
    !current ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có dữ liệu." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sd-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-sd-progress", children: [
          "🔢 ",
          idx + 1,
          "/",
          pool.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-sd-score", children: [
          "✓ ",
          score
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sd-question", style: { textAlign: "center", padding: "1.5rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2rem", marginBottom: "0.5rem" }, children: "🔊" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-muted)", marginBottom: "0.75rem", fontSize: "0.9rem" }, children: "Nghe và chọn đáp án đúng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => speakJP(current.jp), children: "▶ Nghe lại" }),
        revealed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "0.75rem", fontSize: "1.4rem", fontWeight: "bold" }, children: [
          current.jp,
          current.romaji && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85rem", color: "var(--n4-text-muted)", marginTop: "0.25rem" }, children: [
            "(",
            current.romaji,
            ")"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sd-options", children: options.map((opt, i) => {
        let bg;
        if (feedback) {
          if (i === correctIdx) bg = "var(--n4-success)";
          else if (feedback === "wrong" && options[i] === options[options.indexOf(opt)]) bg = void 0;
        }
        revealed && feedback === "wrong" && i !== correctIdx && options[i] !== (current == null ? void 0 : current.vi);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `n4-btn ${feedback && i === correctIdx ? "n4-btn-primary" : "n4-btn-neon"}`,
            style: bg ? { background: bg } : void 0,
            onClick: () => handlePick(i),
            disabled: !!feedback,
            children: opt
          },
          i
        );
      }) }),
      feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sd-feedback", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sd-feedback-text", children: feedback === "correct" ? "✅ Chính xác!" : `❌ Sai! Đáp án: ${current.vi}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-btn-sm", onClick: goNext, children: idx + 1 < pool.length ? "Câu tiếp →" : "Xem kết quả" })
      ] })
    ] })
  ] });
}
function DialogueRolePlay() {
  const [scenarioId, setScenarioId] = reactExports.useState(DIALOGUE_SCENARIOS[0].id);
  const [lineIdx, setLineIdx] = reactExports.useState(0);
  const [score, setScore] = reactExports.useState(0);
  const [wrong, setWrong] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [finished, setFinished] = reactExports.useState(false);
  const [autoPlay, setAutoPlay] = reactExports.useState(true);
  const scenario = reactExports.useMemo(() => DIALOGUE_SCENARIOS.find((s) => s.id === scenarioId), [scenarioId]);
  const items = reactExports.useMemo(() => scenario ? getScenarioItems(scenario) : [], [scenario]);
  const current = items[lineIdx];
  reactExports.useEffect(() => {
    if (!current || finished) return;
    setSelected(null);
    setFeedback(null);
    if (!current.isYou && autoPlay) {
      const t = setTimeout(() => speakJP(current.jp), 300);
      return () => clearTimeout(t);
    }
  }, [lineIdx, scenarioId, finished, autoPlay]);
  const handleSelect = (choiceIdx) => {
    if (feedback || finished || !(current == null ? void 0 : current.isYou)) return;
    setSelected(choiceIdx);
    const isCorrect = choiceIdx === current.correct;
    setFeedback(isCorrect ? "correct" : "wrong");
    if (isCorrect) {
      setScore((s) => s + 1);
      playSFX("correct");
      speakJP(current.choices[choiceIdx]);
    } else {
      setWrong((w) => w + 1);
      playSFX("wrong");
    }
  };
  const advance = () => {
    if (lineIdx + 1 >= items.length) setFinished(true);
    else setLineIdx((i) => i + 1);
  };
  const restart = (sid) => {
    const id = sid || scenarioId;
    setScenarioId(id);
    setLineIdx(0);
    setScore(0);
    setWrong(0);
    setSelected(null);
    setFeedback(null);
    setFinished(false);
  };
  if (!scenario) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không có dữ liệu hội thoại." }) });
  if (finished) {
    const youLines = items.filter((it) => it.isYou);
    const pct = youLines.length ? Math.round(score / youLines.length * 100) : 100;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-emoji", children: pct >= 80 ? "🎉" : "👍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-result-title", children: "Hoàn thành hội thoại!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Đúng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value success", children: score })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Sai" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-value error", children: wrong })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stat-label", children: "Chính xác" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stat-value", children: [
            pct,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: () => restart(), children: "🔄 Làm lại" }),
        DIALOGUE_SCENARIOS.filter((s) => s.id !== scenarioId).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", onClick: () => restart(s.id), children: s.title }, s.id))
      ] })
    ] });
  }
  const roleLabel = { staff: "👤 Nhân viên", doctor: "👨‍⚕️ Bác sĩ", tanaka: "👔 Tanaka", receptionist: "👤 Lễ tân", you: "🙋 Bạn" };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }, children: DIALOGUE_SCENARIOS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `n4-btn n4-btn-sm ${scenarioId === s.id ? "n4-btn-primary" : "n4-btn-ghost"}`,
        onClick: () => restart(s.id),
        children: s.title
      },
      s.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { marginBottom: "1rem", background: "var(--n4-surface-alt, var(--n4-surface))", padding: "0.75rem 1rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85rem", color: "var(--n4-text-muted)" }, children: "📍 Tình huống" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "0.25rem" }, children: scenario.situation })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sd-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-sd-progress", children: [
        "💬 ",
        lineIdx + 1,
        "/",
        items.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-sd-score", children: [
        "✓ ",
        score
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `n4-btn n4-btn-sm ${autoPlay ? "n4-btn-neon" : "n4-btn-ghost"}`,
          onClick: () => setAutoPlay((a) => !a),
          title: "Tự động đọc",
          children: [
            "🔊 ",
            autoPlay ? "Tắt tự động" : "Tự động"
          ]
        }
      )
    ] }),
    current && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "1.25rem", marginBottom: "1rem", borderLeft: `4px solid ${current.isYou ? "var(--n4-neon-cyan)" : "var(--n4-text-muted)"}` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8rem", color: "var(--n4-text-muted)", marginBottom: "0.5rem" }, children: roleLabel[current.role] || current.role }),
      !current.isYou && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.2rem", marginBottom: "0.25rem" }, children: current.jp }),
        current.romaji && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8rem", color: "var(--n4-text-muted)" }, children: current.romaji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "0.5rem", color: "var(--n4-text-secondary, var(--n4-text-muted))" }, children: current.vi }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost n4-btn-sm", style: { marginTop: "0.5rem" }, onClick: () => speakJP(current.jp), children: "🔊 Nghe lại" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "0.5rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-btn-sm", onClick: advance, children: lineIdx + 1 < items.length ? "Tiếp theo →" : "Kết thúc" }) })
      ] }),
      current.isYou && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginBottom: "0.5rem", fontSize: "0.9rem" }, children: "Chọn câu trả lời đúng:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem" }, children: (current.choices || []).map((choice, ci) => {
          let bg;
          if (feedback) {
            if (ci === current.correct) bg = "var(--n4-success)";
            else if (ci === selected && ci !== current.correct) bg = "var(--n4-danger)";
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `n4-btn ${feedback && ci === current.correct ? "n4-btn-primary" : "n4-btn-neon"}`,
              style: bg ? { background: bg, textAlign: "left" } : { textAlign: "left" },
              onClick: () => handleSelect(ci),
              disabled: !!feedback,
              children: choice
            },
            ci
          );
        }) }),
        feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sd-feedback", style: { marginTop: "0.75rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sd-feedback-text", children: feedback === "correct" ? "✅ Chính xác!" : `❌ Sai! → ${current.jp}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary n4-btn-sm", onClick: advance, children: lineIdx + 1 < items.length ? "Tiếp theo →" : "Kết thúc" })
        ] })
      ] })
    ] })
  ] });
}
let _radioPendingTimers = /* @__PURE__ */ new Set();
function _radioSetTimeout(fn, ms) {
  const id = setTimeout(() => {
    _radioPendingTimers.delete(id);
    fn();
  }, ms);
  _radioPendingTimers.add(id);
  return id;
}
function _radioClearAllTimers() {
  _radioPendingTimers.forEach((id) => clearTimeout(id));
  _radioPendingTimers.clear();
}
const RR2_SOURCES = [
  { id: "vocab", label: "Từ vựng", icon: "📝" },
  { id: "kanji", label: "Kanji", icon: "🈲" },
  { id: "grammar", label: "Ngữ pháp", icon: "📐" },
  { id: "minna", label: "Minna", icon: "📖" }
];
const RR2_SPEED_PRESETS = [0.7, 0.85, 1, 1.15, 1.3];
function RadioN4() {
  var _a;
  const vocabSections = useDataStore((s) => s.vocab);
  const kanjiSections = useDataStore((s) => s.kanji);
  const grammarSections = useDataStore((s) => s.grammar);
  const minnaData = useDataStore((s) => s.minna);
  const minnaLessons = useDataStore((s) => s.minnaLessons);
  const [source, setSource] = reactExports.useState("vocab");
  const [sectionId, setSectionId] = reactExports.useState("-1");
  const [queue, setQueue] = reactExports.useState([]);
  const [idx, setIdx] = reactExports.useState(0);
  const [playing, setPlaying] = reactExports.useState(false);
  const [paused, setPaused] = reactExports.useState(false);
  const [shuffle, setShuffle] = reactExports.useState(false);
  const [status, setStatus] = reactExports.useState("");
  const [displayJp, setDisplayJp] = reactExports.useState("");
  const [displayRomaji, setDisplayRomaji] = reactExports.useState("");
  const [displayVi, setDisplayVi] = reactExports.useState("");
  const [displayStep, setDisplayStep] = reactExports.useState("");
  const [jpRate, setJpRate] = reactExports.useState(0.85);
  const [viRate, setViRate] = reactExports.useState(1);
  const [currentPhase, setCurrentPhase] = reactExports.useState(null);
  const [speaking, setSpeaking] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  const playingRef = reactExports.useRef(false);
  const pausedRef = reactExports.useRef(false);
  const queueRef = reactExports.useRef([]);
  const idxRef = reactExports.useRef(0);
  const jpRateRef = reactExports.useRef(0.85);
  const viRateRef = reactExports.useRef(1);
  const sessionRef = reactExports.useRef(null);
  const selfStopRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    playingRef.current = playing;
  }, [playing]);
  reactExports.useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);
  reactExports.useEffect(() => {
    queueRef.current = queue;
  }, [queue]);
  reactExports.useEffect(() => {
    idxRef.current = idx;
  }, [idx]);
  reactExports.useEffect(() => {
    jpRateRef.current = jpRate;
  }, [jpRate]);
  reactExports.useEffect(() => {
    viRateRef.current = viRate;
  }, [viRate]);
  reactExports.useEffect(() => {
    var _a2;
    if (!("speechSynthesis" in window)) return;
    const prime = () => {
      try {
        speechSynthesis.getVoices();
      } catch (e) {
      }
    };
    prime();
    (_a2 = speechSynthesis.addEventListener) == null ? void 0 : _a2.call(speechSynthesis, "voiceschanged", prime);
    return () => {
      var _a3;
      return (_a3 = speechSynthesis.removeEventListener) == null ? void 0 : _a3.call(speechSynthesis, "voiceschanged", prime);
    };
  }, []);
  reactExports.useEffect(() => {
    const unsub = onStopAll(() => {
      if (selfStopRef.current) return;
      stopRadio();
    });
    return () => {
      unsub();
      selfStopRef.current = true;
      invalidateSession();
      try {
        speechSynthesis.cancel();
      } catch (e) {
      }
      _radioClearAllTimers();
      selfStopRef.current = false;
    };
  }, []);
  const sectionOptions = reactExports.useMemo(() => {
    const opts = [{ value: "-1", label: "Tất cả" }];
    if (source === "vocab" && vocabSections) {
      vocabSections.forEach((sec) => opts.push({ value: String(sec.id), label: `${sec.id}. ${sec.name}` }));
    } else if (source === "kanji" && kanjiSections) {
      kanjiSections.forEach((sec) => opts.push({ value: String(sec.id), label: `${sec.id}. ${sec.name}` }));
    } else if (source === "grammar" && grammarSections) {
      grammarSections.forEach((sec) => {
        if (sec.id === 0) return;
        opts.push({ value: String(sec.id), label: `${sec.id}. ${sec.name}` });
      });
    } else if (source === "minna" && minnaData) {
      const lessons = Object.keys(minnaData).map(Number).sort((a, b) => a - b);
      const meta = minnaLessons || [];
      lessons.forEach((n) => {
        const info = meta.find((m) => m.l === n);
        const topic = (info == null ? void 0 : info.vi) || "";
        const prefix = topic ? `Bài ${n} - ${topic}` : `Bài ${n}`;
        opts.push({ value: `V_${n}`, label: `${prefix} - Từ vựng` });
        opts.push({ value: `G_${n}`, label: `${prefix} - Ngữ pháp` });
      });
    }
    return opts;
  }, [source, vocabSections, kanjiSections, grammarSections, minnaData, minnaLessons]);
  function buildVocabQueue(secId) {
    const items = [];
    (vocabSections || []).forEach((sec) => {
      if (secId >= 0 && sec.id !== secId) return;
      (sec.entries || []).forEach((e) => {
        if (e.word && e.meaning) items.push({ type: "vocab", jp: e.word, romaji: e.romaji || "", vi: e.meaning });
        if (e.word2 && e.meaning2) items.push({ type: "vocab", jp: e.word2, romaji: e.romaji2 || "", vi: e.meaning2 });
      });
    });
    return items;
  }
  function buildKanjiQueue(secId) {
    const items = [];
    (kanjiSections || []).forEach((sec) => {
      if (secId >= 0 && sec.id !== secId) return;
      (sec.entries || []).forEach((k) => {
        if (!k.kanji) return;
        const readings = [k.on, k.kun].filter(Boolean).map((r) => r.replace(/\s*\([^)]*\)\s*/g, "").trim()).join(" / ");
        const romaji = [extractRomaji(k.on) || (k.on || "").replace(/[^a-zA-Z,\s]/g, "").trim(), extractRomaji(k.kun) || (k.kun || "").replace(/[^a-zA-Z,\s]/g, "").trim()].filter(Boolean).join(" / ");
        items.push({ type: "kanji", jp: k.kanji, readings, romaji, vi: k.meaning || k.title, compounds: k.compounds || "" });
      });
    });
    return items;
  }
  function buildGrammarQueue(secId) {
    const items = [];
    (grammarSections || []).forEach((sec) => {
      if (sec.id === 0) return;
      if (secId >= 0 && sec.id !== secId) return;
      (sec.patterns || []).forEach((p) => {
        const lines = (p.content || "").split("\n");
        let purpose = "", explanation = "";
        const examples = [];
        for (const ln of lines) {
          const t = ln.trim();
          if (t.startsWith("**Mục đích sử dụng:**")) purpose = t.replace("**Mục đích sử dụng:**", "").trim();
          else if (t.startsWith("**Giải thích:**")) explanation = t.replace("**Giải thích:**", "").trim();
          else {
            const stripped = t.replace(/^[-・•*]\s*/, "").replace(/\*\*/g, "").trim();
            if (!stripped) continue;
            const ai = stripped.indexOf("→");
            if (ai < 1) continue;
            if (!/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/.test(stripped)) continue;
            const jpPart = stripped.substring(0, ai).trim();
            const viPart = stripped.substring(ai + 1).trim();
            const romaji = extractRomaji(jpPart);
            const jpClean = jpPart.replace(/\([^)]*\)/g, "").replace(/\s{2,}/g, " ").trim();
            if (jpClean && viPart) examples.push({ jp: jpClean, romaji, vi: viPart });
          }
        }
        let viTitle = p.title || "";
        const dashIdx = viTitle.lastIndexOf("-");
        if (dashIdx > 0) viTitle = viTitle.substring(dashIdx + 1).trim();
        viTitle = viTitle.replace(/\[N\d]\s*/g, "").replace(/[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\uFF00-\uFFEF]/g, "").replace(/\([^)]*\)/g, "").replace(/[~\/|]/g, " ").replace(/\s{2,}/g, " ").trim();
        if (!viTitle || viTitle.length < 3) viTitle = purpose || "";
        if (examples.length) items.push({ type: "grammar", patternId: p.id, title: p.title, viTitle, purpose, explanation, examples });
      });
    });
    return items;
  }
  function buildMinnaQueue(lessonNum, filter) {
    const items = [];
    if (!minnaData) return items;
    const lessons = lessonNum >= 0 ? [lessonNum] : Object.keys(minnaData).map(Number).sort((a, b) => a - b);
    lessons.forEach((n) => {
      const data = minnaData[n];
      if (!data) return;
      if (filter !== "grammar" && data.vocab) {
        data.vocab.forEach((e) => {
          if (e.word && e.meaning) items.push({ type: "minna", jp: e.word, romaji: e.romaji || "", vi: e.meaning, lesson: n });
        });
      }
      if (filter !== "vocab" && data.grammarItems) {
        data.grammarItems.forEach((gi) => items.push({ type: "grammar", patternId: `Bài ${n}`, title: gi.title, viTitle: gi.title, purpose: gi.purpose || gi.explanation || "", explanation: gi.explanation || "", examples: gi.examples || [] }));
      }
    });
    return items;
  }
  function buildQueue(src, secVal) {
    let items = [];
    if (src === "vocab") items = buildVocabQueue(secVal.indexOf("_") > 0 ? -1 : parseInt(secVal));
    else if (src === "kanji") items = buildKanjiQueue(parseInt(secVal));
    else if (src === "grammar") items = buildGrammarQueue(parseInt(secVal));
    else if (src === "minna") {
      let lessonNum = -1, filter = "all";
      if (secVal.indexOf("_") > 0) {
        const parts = secVal.split("_");
        filter = parts[0] === "V" ? "vocab" : parts[0] === "G" ? "grammar" : "all";
        lessonNum = parseInt(parts[1]);
      }
      items = buildMinnaQueue(lessonNum, filter);
    }
    return items;
  }
  function invalidateSession() {
    var _a2;
    const s = sessionRef.current;
    if (s) {
      s.cancelled = true;
      selfStopRef.current = true;
      try {
        (_a2 = s.controller) == null ? void 0 : _a2.cancel();
      } catch (e) {
      }
      selfStopRef.current = false;
    }
    sessionRef.current = null;
  }
  function newSession() {
    invalidateSession();
    const s = { cancelled: false, controller: null };
    sessionRef.current = s;
    return s;
  }
  function cleanSpeechText(text) {
    return String(text || "").replace(/\(.+?\)/g, "").replace(/\*\*/g, "").replace(/[→📝📖🈁📗🔀🇯🇵🇻🇳]/g, "").trim();
  }
  async function speak(session, text, lang) {
    if (session.cancelled) return;
    const clean = cleanSpeechText(text);
    if (!clean || isMuted() || !("speechSynthesis" in window)) return;
    setCurrentPhase(lang === "ja-JP" ? "ja" : "vi");
    setSpeaking(true);
    const rate = lang === "ja-JP" ? jpRateRef.current : viRateRef.current;
    selfStopRef.current = true;
    const ctl = speakLongText(clean, { lang, rate, maxLen: 180 });
    session.controller = ctl;
    Promise.resolve().then(() => {
      selfStopRef.current = false;
    });
    try {
      await ctl.promise;
    } catch (e) {
    }
    if (session.controller === ctl) session.controller = null;
    setSpeaking(false);
  }
  function wait(session, ms) {
    return new Promise((resolve) => {
      if (session.cancelled) {
        resolve();
        return;
      }
      timerRef.current = _radioSetTimeout(() => {
        if (session.cancelled) {
          resolve();
          return;
        }
        resolve();
      }, ms);
    });
  }
  function stillActive(session) {
    return !session.cancelled && playingRef.current && !pausedRef.current;
  }
  async function playVocab(item, session) {
    setDisplayJp(item.jp);
    setDisplayRomaji(item.romaji || "");
    setDisplayVi(item.vi);
    setDisplayStep("");
    setStatus("");
    await speak(session, item.jp, "ja-JP");
    if (!stillActive(session)) return;
    await wait(session, 420);
    if (!stillActive(session)) return;
    await speak(session, item.vi, "vi-VN");
    if (!stillActive(session)) return;
    advanceNext(session);
  }
  async function playKanji(item, session) {
    setDisplayJp(item.jp);
    setDisplayRomaji(item.romaji || "");
    setDisplayVi(item.vi);
    setDisplayStep("");
    setStatus("");
    await speak(session, item.jp, "ja-JP");
    if (!stillActive(session)) return;
    if (item.readings) {
      setDisplayStep(item.readings);
      await wait(session, 500);
      if (!stillActive(session)) return;
      await speak(session, item.readings, "ja-JP");
      if (!stillActive(session)) return;
    }
    await wait(session, 360);
    if (!stillActive(session)) return;
    await speak(session, item.vi, "vi-VN");
    if (!stillActive(session)) return;
    if (item.compounds) {
      const first = item.compounds.split(",")[0].trim();
      const compJp = first.split(/[(-]/)[0].trim();
      if (compJp) {
        setDisplayStep(first);
        await speak(session, compJp, "ja-JP");
        if (!stillActive(session)) return;
      }
    }
    setDisplayStep("");
    advanceNext(session);
  }
  async function playGrammar(item, session) {
    setDisplayStep(`${item.patternId || ""} · ${item.title || ""}`.trim());
    setDisplayJp(item.viTitle || item.title || "");
    setDisplayRomaji("");
    setDisplayVi(item.purpose || "");
    setCurrentPhase(null);
    const examples = item.examples || [];
    for (let i = 0; i < examples.length; i++) {
      if (!stillActive(session)) return;
      const ex = examples[i];
      setStatus(`Ví dụ ${i + 1}/${examples.length}`);
      setDisplayJp(ex.jp);
      setDisplayRomaji(ex.romaji || "");
      setDisplayVi(ex.vi);
      await speak(session, ex.jp, "ja-JP");
      if (!stillActive(session)) return;
      await wait(session, 320);
      if (!stillActive(session)) return;
      await speak(session, ex.vi, "vi-VN");
      if (!stillActive(session)) return;
      await wait(session, 280);
    }
    setStatus("");
    setDisplayStep("");
    advanceNext(session);
  }
  function playCurrent(q, i, session) {
    if (!q.length || !stillActive(session)) return;
    const item = q[i];
    if (!item) return;
    setCurrentPhase(null);
    if (item.type === "grammar") playGrammar(item, session);
    else if (item.type === "kanji") playKanji(item, session);
    else playVocab(item, session);
  }
  function advanceNext(session) {
    setCurrentPhase(null);
    timerRef.current = _radioSetTimeout(() => {
      if (!stillActive(session)) return;
      const q = queueRef.current;
      const next = (idxRef.current + 1) % q.length;
      setIdx(next);
      idxRef.current = next;
      playCurrent(q, next, session);
    }, 1e3);
  }
  function beginPlay() {
    _radioClearAllTimers();
    const items = buildQueue(source, sectionId);
    if (!items.length) {
      setStatus("Không có dữ liệu");
      return;
    }
    const q = shuffle ? [...items].sort(() => Math.random() - 0.5) : items;
    const session = newSession();
    setQueue(q);
    queueRef.current = q;
    setIdx(0);
    idxRef.current = 0;
    setPlaying(true);
    setPaused(false);
    playingRef.current = true;
    pausedRef.current = false;
    setStatus("");
    _radioSetTimeout(() => playCurrent(q, 0, session), 120);
  }
  function togglePlay() {
    if (!playing) {
      beginPlay();
      return;
    }
    if (paused) {
      setPaused(false);
      pausedRef.current = false;
      if ("speechSynthesis" in window && speechSynthesis.paused) {
        try {
          speechSynthesis.resume();
        } catch (e) {
        }
      } else {
        const session = newSession();
        _radioSetTimeout(() => playCurrent(queueRef.current, idxRef.current, session), 80);
      }
    } else {
      setPaused(true);
      pausedRef.current = true;
      try {
        speechSynthesis.pause();
      } catch (e) {
      }
      _radioClearAllTimers();
      setSpeaking(false);
    }
  }
  function doNext() {
    _radioClearAllTimers();
    invalidateSession();
    try {
      speechSynthesis.cancel();
    } catch (e) {
    }
    const q = queueRef.current;
    if (!q.length) return;
    const next = (idxRef.current + 1) % q.length;
    setIdx(next);
    idxRef.current = next;
    setCurrentPhase(null);
    if (playing && !pausedRef.current) {
      const session = newSession();
      _radioSetTimeout(() => playCurrent(q, next, session), 120);
    }
  }
  function doPrev() {
    _radioClearAllTimers();
    invalidateSession();
    try {
      speechSynthesis.cancel();
    } catch (e) {
    }
    const q = queueRef.current;
    if (!q.length) return;
    const prev = (idxRef.current - 1 + q.length) % q.length;
    setIdx(prev);
    idxRef.current = prev;
    setCurrentPhase(null);
    if (playing && !pausedRef.current) {
      const session = newSession();
      _radioSetTimeout(() => playCurrent(q, prev, session), 120);
    }
  }
  function stopRadio() {
    _radioClearAllTimers();
    invalidateSession();
    try {
      speechSynthesis.cancel();
    } catch (e) {
    }
    setPlaying(false);
    setPaused(false);
    playingRef.current = false;
    pausedRef.current = false;
    setQueue([]);
    queueRef.current = [];
    setIdx(0);
    idxRef.current = 0;
    setDisplayJp("");
    setDisplayRomaji("");
    setDisplayVi("");
    setDisplayStep("");
    setStatus("");
    setCurrentPhase(null);
    setSpeaking(false);
  }
  function changeSource(src) {
    stopRadio();
    setSource(src);
    setSectionId("-1");
  }
  function changeSection(val) {
    stopRadio();
    setSectionId(val);
  }
  const typeLabel = { vocab: "từ vựng", kanji: "kanji", grammar: "ngữ pháp", minna: "minna" };
  const currentItem = queue[idx];
  const progressCount = queue.length ? `${idx + 1} / ${queue.length}` : "— / —";
  const progressKind = currentItem ? typeLabel[currentItem.type] || currentItem.type : "";
  const progressPct = queue.length ? (idx + 1) / queue.length * 100 : 0;
  const sourceIndex = Math.max(0, RR2_SOURCES.findIndex((s) => s.id === source));
  const isActivePlayback = playing && !paused;
  const hasContent = !!(displayJp || displayVi);
  const emptyHint = "Chọn nguồn rồi nhấn ▶ để bắt đầu phát";
  const stationSub = `${((_a = RR2_SOURCES[sourceIndex]) == null ? void 0 : _a.label) || ""} · ${currentItem ? typeLabel[currentItem.type] : "đang chờ"}`;
  const setJpPreset = (v) => setJpRate(v);
  const setViPreset = (v) => setViRate(v);
  const jpIsPreset = (v) => Math.abs(jpRate - v) < 0.03;
  const viIsPreset = (v) => Math.abs(viRate - v) < 0.03;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rr2",
      "data-playing": isActivePlayback ? "true" : "false",
      "data-paused": paused ? "true" : "false",
      "data-speaking": speaking ? "true" : "false",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rr2-vinyl", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-station", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rr2-station-tag", children: "FM · Radio N4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rr2-station-id", children: "日本語 RADIO" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rr2-station-sub", children: stationSub })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-eq", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rr2-eq-bar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rr2-eq-bar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rr2-eq-bar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rr2-eq-bar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rr2-eq-bar" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-sources", role: "tablist", "aria-label": "Nguồn nội dung", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rr2-sources-indicator",
              style: { transform: `translateX(calc(${sourceIndex} * (100% + 4px)))` },
              "aria-hidden": "true"
            }
          ),
          RR2_SOURCES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              role: "tab",
              "aria-selected": source === s.id,
              className: "rr2-source-btn",
              onClick: () => changeSource(s.id),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: s.icon }),
                " ",
                s.label
              ]
            },
            s.id
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rr2-select-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              className: "rr2-select",
              value: sectionId,
              onChange: (e) => changeSection(e.target.value),
              "aria-label": "Chọn phần / bài học",
              children: sectionOptions.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o.value, children: o.label }, o.value))
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "rr2-shuffle",
              "aria-pressed": shuffle,
              onClick: () => setShuffle((x) => !x),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rr2-shuffle-track", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rr2-shuffle-dot" }) }),
                "🔀 Ngẫu nhiên"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-speed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-speed-card", "data-lang": "ja", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-speed-head", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🎌 Tốc độ tiếng Nhật" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                jpRate.toFixed(2),
                "×"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rr2-speed-presets", role: "group", "aria-label": "Tốc độ Nhật", children: RR2_SPEED_PRESETS.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: `rr2-speed-preset${jpIsPreset(v) ? " active" : ""}`,
                onClick: () => setJpPreset(v),
                "aria-pressed": jpIsPreset(v),
                children: [
                  v,
                  "×"
                ]
              },
              v
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "range",
                min: "0.4",
                max: "1.8",
                step: "0.05",
                value: jpRate,
                onChange: (e) => setJpRate(parseFloat(e.target.value)),
                className: "rr2-speed-range",
                "aria-label": "Tốc độ tiếng Nhật"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-speed-card", "data-lang": "vi", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-speed-head", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🇻🇳 Tốc độ tiếng Việt" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                viRate.toFixed(2),
                "×"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rr2-speed-presets", role: "group", "aria-label": "Tốc độ Việt", children: RR2_SPEED_PRESETS.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: `rr2-speed-preset${viIsPreset(v) ? " active" : ""}`,
                onClick: () => setViPreset(v),
                "aria-pressed": viIsPreset(v),
                children: [
                  v,
                  "×"
                ]
              },
              v
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "range",
                min: "0.4",
                max: "1.8",
                step: "0.05",
                value: viRate,
                onChange: (e) => setViRate(parseFloat(e.target.value)),
                className: "rr2-speed-range",
                "aria-label": "Tốc độ tiếng Việt"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-display", "aria-live": "polite", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rr2-crumb", children: displayStep || status || (currentItem ? `${typeLabel[currentItem.type] || ""} · ${progressCount}` : "Đang chờ…") }),
          !hasContent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rr2-empty", children: emptyHint }),
          hasContent && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rr2-phase-card",
                "data-lang": "ja",
                "data-active": currentPhase === "ja" ? "true" : "false",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-phase-label", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rr2-phase-dot" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Nhật · JA" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rr2-jp-text", children: displayJp || "—" }),
                  displayRomaji && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rr2-romaji", children: displayRomaji })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rr2-phase-card",
                "data-lang": "vi",
                "data-active": currentPhase === "vi" ? "true" : "false",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-phase-label", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rr2-phase-dot" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Việt · VI" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rr2-vi-text", children: displayVi || "—" })
                ]
              }
            )
          ] })
        ] }),
        queue.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-progress", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-progress-info", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: progressCount }),
              progressKind ? ` · ${progressKind}` : ""
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              Math.round(progressPct),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rr2-progress-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rr2-progress-fill", style: { width: `${progressPct}%` } }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rr2-transport", role: "group", "aria-label": "Điều khiển phát", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "rr2-t-btn rr2-t-skip",
              onClick: doPrev,
              disabled: !queue.length,
              "aria-label": "Bài trước",
              children: "⏮"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "rr2-t-btn rr2-t-play",
              onClick: togglePlay,
              "aria-label": isActivePlayback ? "Tạm dừng" : "Phát",
              children: isActivePlayback ? "⏸" : "▶"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "rr2-t-btn rr2-t-skip",
              onClick: doNext,
              disabled: !queue.length,
              "aria-label": "Bài kế",
              children: "⏭"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "rr2-t-btn rr2-t-stop",
              onClick: stopRadio,
              disabled: !playing,
              "aria-label": "Dừng",
              children: "⏹ Dừng"
            }
          )
        ] })
      ]
    }
  );
}
function ListeningLab({ mode = "dictation" }) {
  const [section, setSection] = reactExports.useState("all");
  const [difficulty, setDifficulty] = reactExports.useState("normal");
  const [itemCount, setItemCount] = reactExports.useState(10);
  const vocabItems = useVocabItems(section);
  const kanjiItems = useKanjiItems(section);
  const sections = useSectionList("vocab");
  const items = reactExports.useMemo(() => {
    return [...vocabItems, ...kanjiItems.map((k) => ({
      word: k.kanji,
      reading: k.kun || k.on || "",
      meaning: k.meaning || k.title || ""
    }))].filter((it) => it.word && it.meaning);
  }, [vocabItems, kanjiItems]);
  const maxQ = difficulty === "easy" ? 5 : difficulty === "hard" ? 20 : itemCount;
  const renderMode = () => {
    switch (mode) {
      case "dictation":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(MechaRadioMode, { items });
      case "shadowing":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ShadowingMode, { items, maxItems: Math.min(maxQ, 10) });
      case "comprehension":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items,
            getQuestion: (it) => it.word,
            getAnswer: (it) => it.word,
            getQuestionDisplay: () => "🔊 Nghe và chọn từ đúng",
            getCorrectInfo: (it) => ({ reading: it.reading || "", meaning: it.meaning }),
            getSrsKey: vocabAccessors.getKey,
            getSection: vocabAccessors.getSection,
            optionCount: 4,
            maxQuestions: maxQ,
            speakOnShow: true,
            difficulty,
            srsAware: true
          }
        );
      case "drills":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SpeedDrill, { items, maxQuestions: Math.min(20, items.length) });
      case "numbers":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(NumberDrill, {});
      case "dialogue":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogueRolePlay, {});
      case "speech":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SpeechRecMode, { items, maxQuestions: maxQ });
      case "radio":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioN4, {});
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuizMode,
          {
            items,
            getQuestion: (it) => it.word,
            getAnswer: (it) => it.meaning,
            getQuestionDisplay: () => "🔊 Nghe và chọn",
            getCorrectInfo: (it) => ({ reading: it.reading || "", meaning: it.meaning }),
            getSrsKey: vocabAccessors.getKey,
            getSection: vocabAccessors.getSection,
            optionCount: 4,
            maxQuestions: maxQ,
            speakOnShow: true,
            difficulty,
            srsAware: true
          }
        );
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerContext.Provider, { value: "listening-lab", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    GameShell,
    {
      trainerId: "listening-lab",
      mode,
      icon: "🎧",
      title: "Phòng luyện nghe",
      color: "var(--n4-cat-listening)",
      hearts: 3,
      rhythm: { warmup: 3, bossAt: "mid", bossCount: 1, cooldown: 1, totalItems: itemCount },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrainerTopBar,
          {
            trainerId: "listening-lab",
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
  ListeningLab as default
};
