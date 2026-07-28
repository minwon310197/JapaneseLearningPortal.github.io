const DAILY_QUESTS = [
  { id: "daily-quiz-1", icon: "🎮", title: "Hoàn thành 1 lượt trắc nghiệm", goalKey: "todaySessions", goal: 1, reward: 20, color: "var(--n4-neon-blue)" },
  { id: "daily-correct-10", icon: "✅", title: "Trả lời đúng 10 câu hỏi", goalKey: "todayCorrect", goal: 10, reward: 15, color: "var(--n4-neon-green)" },
  { id: "daily-use-powerup", icon: "⚡", title: "Sử dụng 1 vật phẩm bổ trợ", goalKey: "todayPowerUps", goal: 1, reward: 10, color: "var(--n4-neon-gold)" },
  { id: "daily-feed-pet", icon: "🐾", title: "Cho thú cưng ăn", goalKey: "todayPetFed", goal: 1, reward: 10, color: "var(--n4-accent)" },
  { id: "daily-spin-wheel", icon: "🎡", title: "Quay vòng quay may mắn 1 lần", goalKey: "todaySpins", goal: 1, reward: 5, color: "var(--n4-neon-purple)" },
  { id: "daily-marathon-20", icon: "🏃", title: "Trả lời 20 câu hỏi", goalKey: "todayTotal", goal: 20, reward: 25, color: "var(--n4-neon-gold)" },
  { id: "daily-accuracy-8", icon: "🎯", title: "Trả lời đúng liên tiếp 8 câu", goalKey: "todayCorrect", goal: 8, reward: 20, color: "var(--n4-neon-green)" },
  { id: "daily-explore-2", icon: "🗺️", title: "Chơi 2 trò chơi khác nhau", goalKey: "todaySessions", goal: 2, reward: 15, color: "var(--n4-neon-blue)" }
];
const WEEKLY_QUESTS = [
  { id: "weekly-sessions-10", icon: "📚", title: "Hoàn thành 10 lượt chơi", goalKey: "weekSessions", goal: 10, reward: 100, color: "var(--n4-neon-blue)" },
  { id: "weekly-accuracy-5", icon: "🎯", title: "Đạt độ chính xác trên 80% trong 5 lượt chơi", goalKey: "weekAccuracy5", goal: 5, reward: 150, color: "var(--n4-neon-green)" },
  { id: "weekly-earn-200", icon: "🪙", title: "Kiếm được 200 xu từ các bài kiểm tra", goalKey: "weekEarned", goal: 200, reward: 100, color: "var(--n4-neon-gold)" },
  { id: "weekly-streak-5", icon: "🔥", title: "Duy trì chuỗi học tập 5 ngày", goalKey: "weekStreak", goal: 5, reward: 80, color: "var(--n4-neon-red, #ef4444)" }
];
const ALL_QUEST_IDS = /* @__PURE__ */ new Set();
const MILESTONE_QUESTS = [
  { id: "ms-first-purchase", icon: "🛍️", title: "Lượt mua hàng đầu tiên", goalKey: "totalPurchases", goal: 1, reward: 50 },
  { id: "ms-own-10", icon: "📦", title: "Sở hữu 10 vật phẩm", goalKey: "totalOwned", goal: 10, reward: 100 },
  { id: "ms-own-50", icon: "📦", title: "Sở hữu 50 vật phẩm", goalKey: "totalOwned", goal: 50, reward: 500 },
  { id: "ms-first-gacha", icon: "🎰", title: "Lượt quay gacha đầu tiên", goalKey: "totalGacha", goal: 1, reward: 30 },
  { id: "ms-first-pet", icon: "🐾", title: "Nhận nuôi thú cưng đầu tiên", goalKey: "totalPets", goal: 1, reward: 100 },
  { id: "ms-level-10", icon: "⭐", title: "Đạt Cấp 10", goalKey: "level", goal: 10, reward: 200 },
  { id: "ms-level-25", icon: "💫", title: "Đạt Cấp 25", goalKey: "level", goal: 25, reward: 500 },
  { id: "ms-collection-1", icon: "🏆", title: "Hoàn thành 1 bộ sưu tập", goalKey: "totalCollections", goal: 1, reward: 300 },
  { id: "ms-collection-3", icon: "🏆", title: "Hoàn thành 3 bộ sưu tập", goalKey: "totalCollections", goal: 3, reward: 1e3 },
  { id: "ms-gamble-500", icon: "🎰", title: "Thắng 500 xu từ trò chơi may rủi", goalKey: "totalGambleWins", goal: 500, reward: 200 }
];
for (const q of [...DAILY_QUESTS, ...WEEKLY_QUESTS, ...MILESTONE_QUESTS]) {
  ALL_QUEST_IDS.add(q.id);
}
export {
  DAILY_QUESTS as D,
  MILESTONE_QUESTS as M,
  WEEKLY_QUESTS as W
};
