import { r as reactExports, u as useShallow, R as React, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { a_ as isGamblingWinSource, a$ as isPurchaseSource, b0 as isQuizCoinSource, b1 as getIsoWeekStartKey, d as useLearningStore, aX as EconomySceneHero } from "./feature-3d-ClP3ARU5.js";
import { t as triggerCelebration } from "./CelebrationOverlay-C3dUD_zC.js";
import { D as DAILY_QUESTS, W as WEEKLY_QUESTS, M as MILESTONE_QUESTS } from "./quests-OG8KoiB9.js";
import { u as useTodayKey } from "./useTodayKey-BBNOYeod.js";
import { E as EMPTY_OBJ, a as EMPTY_ARR } from "./empty-Bvm-mx50.js";
/* empty css                 */
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
function hashString(input = "") {
  let hash = 2166136261;
  for (const char of String(input)) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}
function getDateKey(value) {
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const date = new Date(value || Date.now());
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString().slice(0, 10);
}
function getSessionCorrect(entry) {
  var _a;
  return Number((_a = entry == null ? void 0 : entry.score) != null ? _a : entry == null ? void 0 : entry.correct) || 0;
}
function getSeededQuestOrder(questPool, seedKey) {
  return [...questPool].sort((a, b) => {
    return hashString(`${seedKey}:${a.id}`) - hashString(`${seedKey}:${b.id}`) || hashString(a.id) - hashString(b.id) || a.id.localeCompare(b.id);
  });
}
function pickDailyQuests(todayKey, progressMap, questPool = DAILY_QUESTS) {
  const shuffled = getSeededQuestOrder(questPool, `daily:${todayKey}`);
  const questGroups = shuffled.reduce((map, quest) => {
    map.set(quest.goalKey, [...map.get(quest.goalKey) || [], quest]);
    return map;
  }, /* @__PURE__ */ new Map());
  const picked = [];
  const orderedGoals = [...questGroups.keys()].sort((a, b) => {
    return hashString(`${todayKey}:goal:${a}`) - hashString(`${todayKey}:goal:${b}`) || a.localeCompare(b);
  });
  for (const goalKey of orderedGoals) {
    if (picked.length >= 3) break;
    const variants = [...questGroups.get(goalKey) || []].sort((a, b) => {
      return hashString(`${todayKey}:quest:${a.id}`) - hashString(`${todayKey}:quest:${b.id}`) || a.id.localeCompare(b.id);
    });
    if (variants[0]) picked.push(variants[0]);
  }
  for (const q of shuffled) {
    if (picked.length >= 3) break;
    if (!picked.includes(q)) picked.push(q);
  }
  picked.push({
    id: "weak-track-focus",
    icon: "🧭",
    title: "Tập trung kỹ năng yếu",
    desc: "Làm 14 câu hôm nay để cải thiện kỹ năng!",
    goalKey: "todayTotal",
    goal: 14,
    reward: 32,
    color: "var(--n4-accent)"
  });
  return picked.map((q) => ({ ...q, progress: progressMap[q.goalKey] || 0 }));
}
function pickWeeklyQuests(weekKey, progressMap, questPool = WEEKLY_QUESTS) {
  const shuffled = getSeededQuestOrder(questPool, `weekly:${weekKey}`);
  return shuffled.slice(0, 3).map((q) => ({ ...q, progress: progressMap[q.goalKey] || 0 }));
}
function buildMissionProgressMap({
  economyLog = [],
  gameHistory = [],
  todayCorrect = 0,
  todayWrong = 0,
  todayPowerUps = 0,
  todayPetFed = 0,
  wheelSpinsToday = 0,
  slotSpinsToday = 0,
  streak = 0,
  level = 0,
  unlockedItems = {},
  gachaHistory = [],
  pets = {},
  collectionClaims = {},
  todayKey = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
  weekKey = getIsoWeekStartKey(todayKey)
}) {
  const history = Array.isArray(gameHistory) ? gameHistory : [];
  const log = Array.isArray(economyLog) ? economyLog : [];
  const todaySessions = history.filter((entry) => getDateKey(entry == null ? void 0 : entry.date) === todayKey).length;
  const weekGames = history.filter((entry) => {
    const dateKey = getDateKey(entry == null ? void 0 : entry.date);
    return dateKey && dateKey >= weekKey;
  });
  const weekQuestions = weekGames.reduce((sum, entry) => sum + (Number(entry == null ? void 0 : entry.total) || 0), 0);
  const weekCorrect = weekGames.reduce((sum, entry) => sum + getSessionCorrect(entry), 0);
  const weekSessions = weekGames.length;
  const todayTotal = (Number(todayCorrect) || 0) + (Number(todayWrong) || 0);
  const totalEarned = log.reduce((sum, entry) => (entry == null ? void 0 : entry.type) === "earn" ? sum + (Number(entry.amount) || 0) : sum, 0);
  const totalQuizzes = history.length;
  const totalCorrect = history.reduce((sum, entry) => sum + getSessionCorrect(entry), 0);
  const totalGambleWins = log.reduce((sum, entry) => {
    return isGamblingWinSource(entry == null ? void 0 : entry.source) ? sum + (Number(entry.amount) || 0) : sum;
  }, 0);
  const totalPurchases = log.reduce((sum, entry) => {
    return (entry == null ? void 0 : entry.type) === "spend" && isPurchaseSource(entry == null ? void 0 : entry.source) ? sum + 1 : sum;
  }, 0);
  const weekAccuracy5 = weekGames.filter((entry) => {
    const total = Number(entry == null ? void 0 : entry.total) || 0;
    return total > 0 && getSessionCorrect(entry) / total >= 0.8;
  }).length;
  const weekEarned = log.reduce((sum, entry) => {
    const dateKey = getDateKey(entry == null ? void 0 : entry.at);
    if ((entry == null ? void 0 : entry.type) !== "earn" || !dateKey || dateKey < weekKey || !isQuizCoinSource(entry == null ? void 0 : entry.source)) return sum;
    return sum + (Number(entry.amount) || 0);
  }, 0);
  return {
    todayTotal,
    todayCorrect: Number(todayCorrect) || 0,
    todaySessions,
    todayPowerUps: Number(todayPowerUps) || 0,
    todayPetFed: Number(todayPetFed) || 0,
    todaySpins: (Number(wheelSpinsToday) || 0) + (Number(slotSpinsToday) || 0),
    weekTotal: weekQuestions,
    weekStreak: Number(streak) || 0,
    weekSessions,
    weekAccuracy: weekQuestions > 0 ? Math.round(weekCorrect / weekQuestions * 100) : 0,
    weekAccuracy5,
    weekEarned,
    totalQuizzes,
    totalCorrect,
    maxStreak: Number(streak) || 0,
    level: Number(level) || 0,
    totalEarned,
    totalPurchases,
    totalOwned: Object.keys(unlockedItems || {}).length,
    totalGacha: Array.isArray(gachaHistory) ? gachaHistory.length : 0,
    totalPets: Object.keys(pets || {}).length,
    totalCollections: Object.keys(collectionClaims || {}).length,
    totalGambleWins
  };
}
const DAILY_COIN_REWARDS = [40, 48, 56, 64, 72, 84, 120];
function clampPercent(v) {
  return Math.max(0, Math.min(100, Math.round(v)));
}
const TABS = [
  { id: "daily", label: "📋 Hàng ngày" },
  { id: "weekly", label: "📅 Hàng tuần" },
  { id: "milestones", label: "🏆 Cột mốc" }
];
function MissionsPage() {
  const [tab, setTab] = reactExports.useState("daily");
  const {
    coins,
    dailyClaimStreak,
    lastDailyClaimDate,
    questClaims,
    weeklyQuestClaims,
    milestoneClaims,
    economyLog,
    gameHistory,
    level,
    streak,
    todayCorrect,
    todayWrong,
    todayPowerUps,
    todayPetFed,
    wheelSpinsToday,
    slotSpinsToday,
    unlockedItems,
    gachaHistory,
    pets,
    collectionClaims,
    claimDailyReward,
    claimQuestReward,
    claimWeeklyReward,
    claimMilestoneReward
  } = useLearningStore(useShallow((s) => ({
    coins: s.coins,
    dailyClaimStreak: s.dailyClaimStreak,
    lastDailyClaimDate: s.lastDailyClaimDate,
    questClaims: s.questClaims,
    weeklyQuestClaims: s.weeklyQuestClaims || EMPTY_OBJ,
    milestoneClaims: s.milestoneClaims || EMPTY_OBJ,
    economyLog: s.economyLog || EMPTY_ARR,
    gameHistory: s.gameHistory || EMPTY_ARR,
    level: s.level,
    streak: s.streak,
    todayCorrect: s.todayCorrect || 0,
    todayWrong: s.todayWrong || 0,
    todayPowerUps: s.todayPowerUps || 0,
    todayPetFed: s.todayPetFed || 0,
    wheelSpinsToday: s.wheelSpinsToday || 0,
    slotSpinsToday: s.slotSpinsToday || 0,
    unlockedItems: s.unlockedItems || EMPTY_OBJ,
    gachaHistory: s.gachaHistory || EMPTY_ARR,
    pets: s.pets || EMPTY_OBJ,
    collectionClaims: s.collectionClaims || EMPTY_OBJ,
    claimDailyReward: s.claimDailyReward,
    claimQuestReward: s.claimQuestReward,
    claimWeeklyReward: s.claimWeeklyReward,
    claimMilestoneReward: s.claimMilestoneReward
  })));
  const todayKey = useTodayKey();
  const weekKey = reactExports.useMemo(() => getIsoWeekStartKey(todayKey), [todayKey]);
  const claimedToday = lastDailyClaimDate === todayKey;
  const questClaimsToday = (questClaims == null ? void 0 : questClaims[todayKey]) || {};
  const weeklyClaimsThisWeek = (weeklyQuestClaims == null ? void 0 : weeklyQuestClaims[weekKey]) || {};
  const progressMap = reactExports.useMemo(() => ({
    ...buildMissionProgressMap({
      economyLog,
      gameHistory,
      todayCorrect,
      todayWrong,
      todayPowerUps,
      todayPetFed,
      wheelSpinsToday,
      slotSpinsToday,
      streak,
      level,
      unlockedItems,
      gachaHistory,
      pets,
      collectionClaims,
      todayKey,
      weekKey
    }),
    dailyClaimStreak
  }), [
    collectionClaims,
    dailyClaimStreak,
    economyLog,
    gameHistory,
    gachaHistory,
    level,
    pets,
    slotSpinsToday,
    streak,
    todayCorrect,
    todayKey,
    todayPetFed,
    todayPowerUps,
    todayWrong,
    unlockedItems,
    weekKey,
    wheelSpinsToday
  ]);
  const dailyQuests = reactExports.useMemo(() => pickDailyQuests(todayKey, progressMap), [todayKey, progressMap]);
  const weeklyQuests = reactExports.useMemo(() => pickWeeklyQuests(weekKey, progressMap), [weekKey, progressMap]);
  const milestoneQuests = reactExports.useMemo(() => {
    return MILESTONE_QUESTS.map((q) => ({
      ...q,
      progress: progressMap[q.goalKey] || 0
    }));
  }, [progressMap]);
  const nextClaimStreak = claimedToday ? dailyClaimStreak : dailyClaimStreak + 1;
  const nextClaimCoins = DAILY_COIN_REWARDS[Math.min(Math.max(nextClaimStreak, 1) - 1, 6)];
  const nextClaimBonus = nextClaimStreak % 7 === 0 ? "Tặng thêm 1 Streak Freeze." : nextClaimStreak % 3 === 0 ? "Tặng thêm 1 Hint Pack." : "Đăng nhập liên tục để đạt bonus ngày 3 và ngày 7.";
  const [claimFeedback, setClaimFeedback] = reactExports.useState(null);
  const showFeedback = reactExports.useCallback((msg, kind = "info") => {
    setClaimFeedback({ msg, kind, id: Date.now() });
  }, []);
  React.useEffect(() => {
    if (!claimFeedback) return void 0;
    const t = window.setTimeout(() => setClaimFeedback(null), 3500);
    return () => window.clearTimeout(t);
  }, [claimFeedback]);
  const handleDailyClaim = reactExports.useCallback(() => {
    if (typeof claimDailyReward !== "function") {
      showFeedback("Hệ thống chưa sẵn sàng, thử lại sau vài giây.", "error");
      return;
    }
    try {
      const r = claimDailyReward();
      if (r) {
        triggerCelebration("coin", 2500);
        showFeedback(`🎉 Đã nhận +${r.coins || 0} coin (chuỗi ${r.streak || 1} ngày)!`, "success");
      } else {
        showFeedback("Bạn đã nhận thưởng hôm nay rồi — quay lại ngày mai!", "info");
      }
    } catch (e) {
      showFeedback(`Lỗi khi nhận thưởng: ${(e == null ? void 0 : e.message) || "không rõ nguyên nhân"}`, "error");
      console.error("[MissionsPage] claimDailyReward failed:", e);
    }
  }, [claimDailyReward, showFeedback]);
  const renderQuestItem = reactExports.useCallback((quest, claimFn, isClaimed) => {
    const percent = clampPercent(quest.progress / quest.goal * 100);
    const done = quest.progress >= quest.goal;
    const handleQuestClick = () => {
      if (isClaimed) {
        showFeedback("Nhiệm vụ này đã được nhận thưởng rồi.", "info");
        return;
      }
      if (!done) {
        showFeedback(`Chưa đủ điều kiện — tiến độ ${quest.progress}/${quest.goal}.`, "info");
        return;
      }
      if (typeof claimFn !== "function") {
        showFeedback("Không thể nhận thưởng ngay lúc này, thử lại sau.", "error");
        return;
      }
      try {
        const ok = claimFn();
        if (ok) {
          triggerCelebration("coin", 1500);
          showFeedback(`🎉 +${quest.reward} 🪙 — ${quest.title}`, "success");
        } else {
          showFeedback("Đã nhận thưởng này trước đó.", "info");
        }
      } catch (e) {
        showFeedback(`Lỗi khi nhận thưởng: ${(e == null ? void 0 : e.message) || "không rõ"}`, "error");
        console.error("[MissionsPage] quest claim failed:", e);
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quest-item", style: { "--quest-color": quest.color }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quest-topline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quest-copy", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quest-title", children: [
            quest.icon,
            " ",
            quest.title
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quest-desc", children: quest.desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quest-reward", children: [
          "+",
          quest.reward,
          " 🪙"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quest-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quest-bar-fill", style: { width: `${percent}%` } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-quest-footer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          Math.min(quest.progress, quest.goal),
          "/",
          quest.goal
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `n4-btn n4-btn-sm ${done && !isClaimed ? "n4-btn-primary" : "n4-btn-ghost"}`,
            onClick: handleQuestClick,
            title: isClaimed ? "Đã nhận thưởng" : done ? "Bấm để nhận thưởng" : `Tiến độ ${quest.progress}/${quest.goal}`,
            children: isClaimed ? "✅ Đã nhận" : done ? "🎁 Nhận thưởng" : "Chưa xong"
          }
        )
      ] })
    ] }, quest.id);
  }, [showFeedback]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page n4-missions-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(EconomySceneHero, { scene: "BattleArenaScene" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-page-title", children: "🎯 Nhiệm vụ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-page-subtitle", style: { color: "var(--n4-text-secondary)", fontSize: "0.85rem" }, children: "Hoàn thành nhiệm vụ để nhận coin và phần thưởng" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-reward-balance", style: { fontSize: "1.1rem" }, children: [
        "🪙 ",
        coins.toLocaleString("vi-VN")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-glass-card", style: { marginBottom: 16, padding: "16px 20px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-reward-eyebrow", children: [
            "Daily Check-in · Ngày ",
            Math.max(nextClaimStreak, 1)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "1rem", fontWeight: 600 }, children: [
            "+",
            nextClaimCoins,
            " coin"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.75rem", color: "var(--n4-text-secondary)", marginTop: 2 }, children: nextClaimBonus })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `n4-btn ${claimedToday ? "n4-btn-ghost" : "n4-btn-primary"}`,
            onClick: handleDailyClaim,
            title: claimedToday ? "Đã nhận thưởng hôm nay — quay lại ngày mai" : "Bấm để nhận thưởng điểm danh",
            children: claimedToday ? "✅ Đã nhận hôm nay" : "🎁 Nhận thưởng"
          }
        )
      ] }),
      dailyClaimStreak > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-streak-milestones", style: { marginTop: 10 }, children: [3, 7, 14, 30].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-streak-dot ${dailyClaimStreak >= m ? "reached" : ""}`, title: `${m} ngày`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m }),
        dailyClaimStreak >= m && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-streak-check", children: "✓" })
      ] }, m)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-tab-bar", style: { marginBottom: 16 }, children: TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-tab-btn ${tab === t.id ? "active" : ""}`, onClick: () => setTab(t.id), children: t.label }, t.id)) }),
    tab === "daily" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-glass-card", style: { padding: "16px 20px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontSize: "0.95rem", marginBottom: 12 }, children: "📋 Nhiệm vụ hằng ngày" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quest-list", children: dailyQuests.map((q) => renderQuestItem(
        q,
        () => claimQuestReward(q.id, q.reward, { title: q.title }),
        Boolean(questClaimsToday[q.id])
      )) })
    ] }),
    tab === "weekly" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-glass-card", style: { padding: "16px 20px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontSize: "0.95rem", marginBottom: 12 }, children: "📅 Nhiệm vụ hàng tuần" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quest-list", children: weeklyQuests.map((q) => renderQuestItem(
        q,
        () => claimWeeklyReward(q.id, q.reward, { title: q.title }),
        Boolean(weeklyClaimsThisWeek[q.id])
      )) })
    ] }),
    tab === "milestones" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-glass-card", style: { padding: "16px 20px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontSize: "0.95rem", marginBottom: 12 }, children: "🏆 Cột mốc thành tựu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-quest-list", children: milestoneQuests.map((q) => renderQuestItem(
        q,
        () => claimMilestoneReward(q.id, q.reward),
        Boolean(milestoneClaims[q.id])
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginTop: 20, fontSize: "0.8rem", color: "var(--n4-text-secondary)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", style: { color: "var(--n4-accent)" }, children: "🛍️ Đổi coin tại Shop" }) }),
    claimFeedback && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "status",
        "aria-live": "polite",
        style: {
          position: "fixed",
          left: "50%",
          bottom: 96,
          transform: "translateX(-50%)",
          zIndex: 400,
          padding: "10px 18px",
          borderRadius: 999,
          fontWeight: 700,
          fontSize: "0.92rem",
          background: claimFeedback.kind === "error" ? "rgba(220,40,60,0.92)" : claimFeedback.kind === "success" ? "rgba(34,197,94,0.95)" : "rgba(30,35,50,0.88)",
          color: "#fff",
          boxShadow: "0 6px 22px rgba(0,0,0,0.35)",
          backdropFilter: "blur(10px)",
          maxWidth: "calc(100vw - 32px)",
          textAlign: "center",
          animation: "n4-claim-feedback-in 0.25s ease-out"
        },
        children: claimFeedback.msg
      },
      claimFeedback.id
    )
  ] });
}
export {
  MissionsPage as default
};
