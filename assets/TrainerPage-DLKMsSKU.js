const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-ZUSnnghe.js","./vendor-react-BYxMSDiB.js","./feature-3d-ClP3ARU5.js","./vendor-three-CoFVKTas.js","./vendor-supabase-DTEAj5J1.js","./feature-3d-BCypkRKt.css","./vendor-router-BTJacUKt.js","./vendor-icons-DHCyxOF-.js","./index-Cd3YZH-k.css"])))=>i.map(i=>d[i]);
import { d as useLearningStore, a3 as useDialogFocus, aE as BET_AMOUNTS, aF as BET_PAYOUTS, J as useDataStore, u as useAppStore, _ as __vitePreload, C as useGameStore, ah as TRAINER_REGISTRY } from "./feature-3d-ClP3ARU5.js";
import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { w as useEnsureLegacyDataLoaded } from "./index-ZUSnnghe.js";
import { I as IOSSegmentControl } from "./IOSSegmentControl-B7LgaL2H.js";
import { c as useParams, b as useNavigate, L as Link, N as Navigate } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-icons-DHCyxOF-.js";
function BettingDialog({ onClose, onConfirm }) {
  const { coins, bettingEnabled, placeBet } = useLearningStore(useShallow((s) => ({
    coins: s.coins,
    bettingEnabled: s.bettingEnabled,
    placeBet: s.placeBet
  })));
  const dialogRef = useDialogFocus(bettingEnabled, onClose);
  const [selectedBet, setSelectedBet] = reactExports.useState(0);
  if (!bettingEnabled) return null;
  const handleConfirm = () => {
    if (selectedBet <= 0) {
      onConfirm == null ? void 0 : onConfirm(0);
      onClose == null ? void 0 : onClose();
      return;
    }
    if (placeBet(selectedBet)) {
      onConfirm == null ? void 0 : onConfirm(selectedBet);
      onClose == null ? void 0 : onClose();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-bet-overlay", onPointerDown: (event) => event.target === event.currentTarget && (onClose == null ? void 0 : onClose()), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "n4-bet-dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": "n4-bet-title", tabIndex: -1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "n4-bet-title", children: "🎲 Đặt cược trước trận" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Điểm càng cao, tiền cược nhân càng lớn." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-bet-amounts", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-bet-amt ${selectedBet === 0 ? "selected" : ""}`, onClick: () => setSelectedBet(0), children: "Không cược" }),
      BET_AMOUNTS.map((amt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `n4-bet-amt ${selectedBet === amt ? "selected" : ""} ${coins < amt ? "disabled" : ""}`,
          disabled: coins < amt,
          onClick: () => setSelectedBet(amt),
          children: [
            "🪙 ",
            amt
          ]
        },
        amt
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-bet-payouts", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Bảng thưởng" }),
      BET_PAYOUTS.filter((p) => p.multiplier > 0).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-bet-payout-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Điểm ",
          p.minPercent,
          "%+"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "×",
          p.multiplier,
          " → 🪙 ",
          selectedBet > 0 ? selectedBet * p.multiplier : "—"
        ] })
      ] }, p.minPercent)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-bet-payout-row loss", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "<80% điểm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mất cược" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-bet-balance", children: [
      "Số dư: 🪙 ",
      coins.toLocaleString()
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-bet-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-bet-cancel", onClick: onClose, children: "Hủy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-bet-confirm", onClick: handleConfirm, children: selectedBet > 0 ? `Cược 🪙 ${selectedBet}` : "Chơi không cược" })
    ] })
  ] }) });
}
const NATIVE_TRAINERS = Object.fromEntries(
  Object.entries(TRAINER_REGISTRY).map(([trainerId, entry]) => [trainerId, reactExports.lazy(entry.load)])
);
function getTrainerModes(trainerId) {
  var _a;
  return ((_a = TRAINER_REGISTRY[trainerId]) == null ? void 0 : _a.modes) || [];
}
function TrainerLoadingFallback() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dashboard n4-page-enter n4-tp-loading", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-tp-dev-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tp-dev-icon", children: "⏳" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Đang tải trainer" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-tp-dev-notice", children: "Đang chuẩn bị chế độ luyện tập..." })
  ] }) });
}
const TRAINER_INFO = {
  "daily-practice": {
    icon: "🎯",
    title: "Luyện tập hằng ngày",
    color: "var(--n4-cat-daily)",
    modes: getTrainerModes("daily-practice"),
    desc: "Luyện tập hằng ngày với SRS thông minh, tập trung vào điểm yếu.",
    legacyActions: [
      { label: "📊 Thống kê nhanh", fn: "openQuickStats" },
      { label: "❌ Sổ lỗi sai", fn: "openMistakeNotebook" },
      { label: "🎯 Thử thách ngày", fn: "openDailyChallenge" },
      { label: "⚡ Điểm yếu", fn: "openWeakPoints" },
      { label: "📋 Hàng đợi SRS", fn: "openSrsQueue" },
      { label: "🔥 Chuỗi học", fn: "openStudyStreak" }
    ]
  },
  "vocab-dojo": {
    icon: "🗡️",
    title: "Võ đường từ vựng",
    color: "var(--n4-cat-vocab)",
    modes: getTrainerModes("vocab-dojo"),
    desc: "Luyện từ vựng N4 với điền từ, trắc nghiệm, đúng/sai, ghép đôi, nghe, tốc độ và thẻ lật.",
    legacyActions: [
      { label: "🃏 Thẻ nhớ", fn: "startFlashcards", args: ["vocab"] },
      { label: "❓ Trắc nghiệm", fn: "startQuiz", args: ["vocab"] },
      { label: "🔗 Ghép đôi", fn: "startMatch", args: ["vocab"] },
      { label: "🎧 Nghe", fn: "startListening", args: ["vocab"] },
      { label: "⚡ Tốc độ nhớ", fn: "startSpeedMemory" }
    ]
  },
  "kanji-academy": {
    icon: "🏯",
    title: "Học viện hán tự",
    color: "var(--n4-cat-kanji)",
    modes: getTrainerModes("kanji-academy"),
    desc: "Chinh phục 472 chữ Hán N4 với thẻ lật, trắc nghiệm, ghép đôi, đọc hán tự và luyện viết.",
    legacyActions: [
      { label: "🃏 Thẻ nhớ", fn: "startFlashcards", args: ["kanji"] },
      { label: "❓ Trắc nghiệm", fn: "startQuiz", args: ["kanji"] },
      { label: "🔗 Ghép đôi", fn: "startMatch", args: ["kanji"] },
      { label: "🎧 Nghe", fn: "startListening", args: ["kanji"] },
      { label: "✍️ Viết kanji", fn: "startKanjiWriter" }
    ]
  },
  "grammar-arena": {
    icon: "⚔️",
    title: "Đấu trường ngữ pháp",
    color: "var(--n4-cat-grammar)",
    modes: getTrainerModes("grammar-arena"),
    desc: "150 mẫu ngữ pháp N4 với trắc nghiệm, điền chỗ trống, đúng/sai, trợ từ, nhận dạng và thẻ lật.",
    legacyActions: [
      { label: "📝 Chia động từ", fn: "startVerbConjugator" },
      { label: "🔤 Trắc nghiệm trợ từ", fn: "startParticleQuiz" },
      { label: "🔀 Xáo câu", fn: "startScramble" },
      { label: "🥊 Đấu trùm", fn: "startBossFight" }
    ]
  },
  "boss-battle": {
    icon: "🐉",
    title: "Đấu trùm",
    color: "var(--n4-cat-boss)",
    modes: getTrainerModes("boss-battle"),
    desc: "Thử thách trùm tổng hợp. Trả lời đúng để hạ trùm!",
    legacyActions: [
      { label: "🐉 Đấu trùm", fn: "startBossFight" },
      { label: "⚡ Tốc độ nhớ", fn: "startSpeedMemory" }
    ]
  },
  "listening-lab": {
    icon: "🎧",
    title: "Phòng luyện nghe",
    color: "var(--n4-cat-listening)",
    modes: getTrainerModes("listening-lab"),
    desc: "Luyện nghe: Nghe chép, Radio N4, Nhận diện giọng nói, Phản xạ nhanh.",
    legacyActions: [
      { label: "📝 Nghe chép", fn: "startDictation" },
      { label: "📻 Radio N4", fn: "startRadio" },
      { label: "🎤 Nhận giọng nói", fn: "startSpeechRec" },
      { label: "⚡ Phản xạ nhanh", fn: "startQuickResponse" }
    ]
  },
  "reading-room": {
    icon: "📖",
    title: "Phòng đọc hiểu",
    color: "var(--n4-cat-reading)",
    modes: getTrainerModes("reading-room"),
    desc: "Đọc hiểu: Bài đọc theo chủ đề, câu ví dụ và nhận diện ngữ cảnh.",
    legacyActions: [
      { label: "📖 Dokkai", fn: "startDokkai" },
      { label: "📰 Đọc kanji", fn: "startKanjiReading" }
    ]
  },
  "puzzle-world": {
    icon: "🧩",
    title: "Thế giới câu đố",
    color: "var(--n4-cat-puzzle)",
    modes: getTrainerModes("puzzle-world"),
    desc: "Treo cổ, gõ nhanh, ghép câu và tìm từ.",
    legacyActions: [
      { label: "🏁 Ô chữ", fn: "startCrossword" },
      { label: "🔍 Tìm từ", fn: "startWordSearch" },
      { label: "☠️ Treo cổ", fn: "startHangman" },
      { label: "⌨️ Gõ nhanh", fn: "startSpeedTyping" },
      { label: "🧱 Ghép câu", fn: "startSentenceBuilder" }
    ]
  },
  "mind-tricks": {
    icon: "🧠",
    title: "Thử thách trí não",
    color: "var(--n4-cat-mind)",
    modes: getTrainerModes("mind-tricks"),
    desc: "Thử thách tư duy: Trí nhớ, Mẫu hình, Tốc độ, Liên tưởng, Bộ kanji, Khác nhóm và Nghe-nhớ.",
    legacyActions: [
      { label: "👤 Ghép bóng", fn: "startShadowMatch" },
      { label: "🔄 Quiz ngược", fn: "startReverseQuiz" },
      { label: "🧩 Mảnh thiếu", fn: "startMissingPiece" },
      { label: "🔗 Nối từ", fn: "startWordChain" }
    ]
  },
  "story-mode": {
    icon: "🗺️",
    title: "Chế độ cốt truyện",
    color: "var(--n4-cat-story)",
    modes: getTrainerModes("story-mode"),
    desc: "Cung điện trí nhớ, Phiêu lưu tình huống, Nhập vai thực tế.",
    legacyActions: [
      { label: "🏰 Cung điện ký ức", fn: "startMemoryPalace" },
      { label: "📖 Chế độ cốt truyện", fn: "startStoryMode" }
    ]
  },
  "minna-lessons": {
    icon: "📚",
    title: "Bài Minna",
    color: "var(--n4-cat-minna)",
    modes: getTrainerModes("minna-lessons"),
    desc: "Minna no Nihongo Bài 1–50: Từ vựng, Ngữ pháp, Hội thoại, Bài tập.",
    legacyActions: []
  },
  "jlpt-mock": {
    icon: "📋",
    title: "Thi thử JLPT",
    color: "var(--n4-cat-jlpt)",
    modes: getTrainerModes("jlpt-mock"),
    desc: "Thi thử JLPT N4 đầy đủ hoặc từng phần, có đếm thời gian.",
    legacyActions: []
  },
  "conjugation-dojo": {
    icon: "🔤",
    title: "Võ đường chia thể",
    color: "var(--n4-cat-grammar)",
    modes: getTrainerModes("conjugation-dojo"),
    desc: "Chia động từ & tính từ: て形、ない形、た形、受身、使役、い/な形容詞, kèm drill chuyên sâu cho 使役受身形 và 意向形.",
    legacyActions: []
  },
  "adventure-arena": {
    icon: "⚔️",
    title: "Đấu trường phiêu lưu",
    color: "var(--n4-cat-boss)",
    modes: getTrainerModes("adventure-arena"),
    desc: "Mini game phiêu lưu: Đấu hán tự, Gõ ninja, Izakaya, Trích dẫn anime, Đầu bếp sushi, Boss thế giới.",
    legacyActions: []
  },
  "particle-dojo": {
    icon: "🔵",
    title: "Võ đường trợ từ",
    color: "var(--n4-cat-grammar)",
    modes: getTrainerModes("particle-dojo"),
    desc: "Luyện tập chuyên sâu trợ từ qua các mini-game đa dạng.",
    legacyActions: []
  }
};
function TrainerPage() {
  const { id, mode } = useParams();
  const navigate = useNavigate();
  const trainer = TRAINER_INFO[id];
  const activeMode = (trainer == null ? void 0 : trainer.modes.includes(mode)) ? mode : trainer == null ? void 0 : trainer.modes[0];
  const { loaded, loadFromLegacy } = useDataStore(useShallow((s) => ({ loaded: s.loaded, loadFromLegacy: s.loadFromLegacy })));
  const bettingEnabled = useLearningStore((s) => s.bettingEnabled);
  const activeBet = useLearningStore((s) => s.activeBet);
  const [betPlaced, setBetPlaced] = reactExports.useState(false);
  useEnsureLegacyDataLoaded(loaded, loadFromLegacy);
  reactExports.useEffect(() => {
    var _a;
    if (!id || !trainer) return;
    const route = activeMode ? `/trainer/${id}/${activeMode}` : `/trainer/${id}`;
    useLearningStore.getState().setLastVisitedRoute(route);
    const uid = (_a = useAppStore.getState().user) == null ? void 0 : _a.id;
    if (uid) {
      __vitePreload(() => import("./index-ZUSnnghe.js").then((n) => n.ah), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0, import.meta.url).then((m) => m.logActivity(uid, "trainer_start", { trainer: id, mode: activeMode })).catch(() => {
      });
    }
  }, [activeMode, id, trainer]);
  reactExports.useLayoutEffect(() => {
    if (!id || !trainer) return;
    useGameStore.getState().startGame(id, activeMode);
    return () => {
      var _a, _b, _c, _d;
      try {
        (_d = (_c = (_b = (_a = window.__N4_STORE__) == null ? void 0 : _a.learning) == null ? void 0 : _b.getState()) == null ? void 0 : _c.flushNonCritical) == null ? void 0 : _d.call(_c);
      } catch (e) {
      }
      useGameStore.getState().endGame();
    };
  }, [activeMode, id, trainer]);
  if (!trainer) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter n4-tp-not-found", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tp-not-found-icon", children: "❓" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Trainer không tìm thấy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "n4-btn n4-btn-primary n4-tp-home-link", children: "← Về trang chủ" })
    ] });
  }
  if (mode && mode !== activeMode) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: `/trainer/${id}`, replace: true });
  }
  const NativeTrainer = NATIVE_TRAINERS[id];
  const shouldBet = bettingEnabled && !betPlaced && activeBet === 0;
  if (NativeTrainer) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      shouldBet && /* @__PURE__ */ jsxRuntimeExports.jsx(BettingDialog, { onClose: () => setBetPlaced(true), onConfirm: () => setBetPlaced(true) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerLoadingFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(NativeTrainer, { mode: activeMode }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", children: [
    shouldBet && /* @__PURE__ */ jsxRuntimeExports.jsx(BettingDialog, { onClose: () => setBetPlaced(true), onConfirm: () => setBetPlaced(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-trainer-header", style: { borderLeft: `4px solid ${trainer.color}` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-trainer-header-info", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "n4-btn n4-btn-ghost n4-btn-sm n4-tp-home-btn", children: "← Trang chủ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-tp-trainer-icon", children: trainer.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-tp-trainer-title", children: trainer.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-tp-trainer-desc", children: trainer.desc })
    ] }),
    trainer.modes.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "0 var(--n4-sp-4)", marginBottom: "var(--n4-sp-3)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      IOSSegmentControl,
      {
        items: trainer.modes.map((m) => ({ value: m, label: m.replace(/-/g, " ") })),
        active: mode || trainer.modes[0],
        onChange: (m) => navigate(`/trainer/${id}/${m}`)
      }
    ) }),
    trainer.legacyActions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-tp-legacy-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-tp-legacy-heading", children: "⚡ Chạy nhanh (Bản cũ)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tp-legacy-grid", children: trainer.legacyActions.map((action) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "n4-btn n4-btn-neon n4-btn-sm",
          onClick: () => {
            var _a;
            const fn = window[action.fn];
            if (typeof fn === "function") {
              const appStore = (_a = window.__N4_STORE__) == null ? void 0 : _a.app;
              if (appStore) appStore.getState().setReactMode(false);
              setTimeout(() => fn(...action.args || []), 100);
            }
          },
          children: action.label
        },
        action.label
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-tp-dev-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tp-dev-icon", children: "🚧" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Đang phát triển" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-tp-dev-notice", children: "Trainer React gốc đang được xây dựng. Dùng Quick Launch ở trên để chơi game." })
    ] })
  ] });
}
export {
  TrainerPage as default
};
