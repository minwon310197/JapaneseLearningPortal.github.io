import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { d as useLearningStore, a2 as formatEconomySourceLabel } from "./feature-3d-ClP3ARU5.js";
import { G as GACHA_BOXES, d as getBoxRewardProfile } from "./cosmetic-registry-oPseDcsm.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
function formatRatio(value) {
  return `x${(Number(value) || 0).toFixed(2)}`;
}
function formatPercent(value) {
  return `${Math.round((Number(value) || 0) * 100)}%`;
}
function renderSourceBreakdown(entries, total, colors, sourceLabels) {
  if (!entries.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-stats-empty", children: "Chưa có dữ liệu." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-stats-sources", children: entries.map(([src, amount], i) => {
    const pct = total > 0 ? Math.round(amount / total * 100) : 0;
    const color = colors[i % colors.length];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-source-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-source-dot", style: { background: color } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-source-label", children: formatEconomySourceLabel(src, sourceLabels) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-stats-source-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-stats-source-fill", style: { width: `${pct}%`, background: color } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stats-source-val", children: [
        "🪙 ",
        amount,
        " (",
        pct,
        "%)"
      ] })
    ] }, src);
  }) });
}
function EconomyStatsPage() {
  const {
    coins,
    economyLog,
    gameHistory,
    pets,
    activePet,
    vipExpiry,
    gachaHistory,
    wheelSpinsToday,
    slotSpinsToday,
    powerUps,
    unlockedItems,
    collectionClaims,
    roomItems
  } = useLearningStore(useShallow((s) => ({
    coins: s.coins,
    economyLog: s.economyLog || [],
    gameHistory: s.gameHistory || [],
    pets: s.pets || {},
    activePet: s.activePet,
    vipExpiry: s.vipExpiry,
    gachaHistory: s.gachaHistory || [],
    wheelSpinsToday: s.wheelSpinsToday || 0,
    slotSpinsToday: s.slotSpinsToday || 0,
    powerUps: s.powerUps || {},
    unlockedItems: s.unlockedItems || {},
    collectionClaims: s.collectionClaims || {},
    roomItems: s.roomItems || {}
  })));
  const isVip = vipExpiry && Date.now() < vipExpiry;
  const stats = reactExports.useMemo(() => {
    const earned = economyLog.filter((e) => e.type === "earn").reduce((s, e) => s + (e.amount || 0), 0);
    const spent = economyLog.filter((e) => e.type === "spend").reduce((s, e) => s + (e.amount || 0), 0);
    const earnBySource = {};
    economyLog.filter((e) => e.type === "earn").forEach((e) => {
      const src = e.source || "unknown";
      earnBySource[src] = (earnBySource[src] || 0) + (e.amount || 0);
    });
    const spendBySource = {};
    economyLog.filter((e) => e.type === "spend").forEach((e) => {
      const src = e.source || "unknown";
      spendBySource[src] = (spendBySource[src] || 0) + (e.amount || 0);
    });
    const dailyEarnings = {};
    const now = /* @__PURE__ */ new Date();
    for (let d = 6; d >= 0; d--) {
      const date = new Date(now);
      date.setDate(date.getDate() - d);
      const key = date.toISOString().slice(0, 10);
      dailyEarnings[key] = 0;
    }
    economyLog.filter((e) => e.type === "earn").forEach((e) => {
      var _a;
      const day = (_a = e.at) == null ? void 0 : _a.slice(0, 10);
      if (day && dailyEarnings[day] !== void 0) {
        dailyEarnings[day] += e.amount || 0;
      }
    });
    return { earned, spent, earnBySource, spendBySource, dailyEarnings };
  }, [economyLog]);
  const totalPowerUps = Object.values(powerUps).reduce((s, v) => s + v, 0);
  const totalOwnedItems = Object.keys(unlockedItems).length;
  const totalPets = Object.keys(pets).length;
  const totalCollections = Object.keys(collectionClaims).length;
  const totalRoomItems = Object.keys(roomItems).length;
  const gachaStats = reactExports.useMemo(() => {
    return (gachaHistory || []).reduce((summary, entry) => {
      for (const item of (entry == null ? void 0 : entry.items) || []) {
        if (item == null ? void 0 : item.isNew) summary.newUnlocks += 1;
        if (item == null ? void 0 : item.isDuplicate) summary.duplicates += 1;
        for (const reward of (item == null ? void 0 : item.grantedRewards) || []) {
          if ((reward == null ? void 0 : reward.type) === "coins") summary.compensationCoins += reward.amount || 0;
        }
      }
      return summary;
    }, { newUnlocks: 0, duplicates: 0, compensationCoins: 0 });
  }, [gachaHistory]);
  const gachaBoxProfiles = reactExports.useMemo(() => {
    return GACHA_BOXES.map((box) => ({
      ...box,
      profile: getBoxRewardProfile(box.id)
    })).filter((entry) => entry.profile);
  }, []);
  const bestValueBox = reactExports.useMemo(() => {
    return gachaBoxProfiles.reduce((best, entry) => {
      if (!best) return entry;
      return entry.profile.efficiency > best.profile.efficiency ? entry : best;
    }, null);
  }, [gachaBoxProfiles]);
  const safestDupeBox = reactExports.useMemo(() => {
    return gachaBoxProfiles.reduce((best, entry) => {
      if (!best) return entry;
      return entry.profile.duplicateRetention > best.profile.duplicateRetention ? entry : best;
    }, null);
  }, [gachaBoxProfiles]);
  const dailyKeys = Object.keys(stats.dailyEarnings);
  const dailyValues = Object.values(stats.dailyEarnings);
  const maxDaily = Math.max(1, ...dailyValues);
  const earnSources = Object.entries(stats.earnBySource).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const spendSources = Object.entries(stats.spendBySource).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const pieColors = ["#3b82f6", "#8b5cf6", "#f59e0b", "#10b981", "#ef4444", "#ec4899", "#06b6d4", "#f97316"];
  const spendColors = ["#ef4444", "#f97316", "#f59e0b", "#f43f5e", "#e11d48", "#fb7185", "#dc2626", "#b91c1c"];
  const sourceLabels = {
    "correct-answer": "📝 Trả lời đúng",
    "game-completion": "🎮 Hoàn thành game",
    "first-game-of-day": "🌅 Game đầu ngày",
    "study-time": "📖 Thời gian học",
    "daily-claim": "📅 Điểm danh",
    "achievement": "🏆 Thành tựu",
    "level-up": "⭐ Lên cấp",
    "wheel-win": "🎡 Vòng quay",
    "slot-win": "🎰 Máy slot",
    "bet-win": "🎲 Cá cược",
    "quest": "📋 Nhiệm vụ",
    "gacha-reward": "⛩️ Thưởng gacha",
    "gacha": "⛩️ Quay gacha",
    "power-up": "⚡ Vật phẩm hỗ trợ",
    "shop": "🛍️ Cửa hàng",
    "pet-adoption": "🐾 Nhận thú cưng",
    "pet-feed": "🐾 Chăm thú cưng",
    "room-buy": "🏠 Phòng học",
    "vip-purchase": "👑 Đặc quyền"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-matsuri-bg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "📊 Bảng điều phối kinh tế" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-stats-sub", children: "Theo dõi nhịp kiếm và tiêu xu" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-top-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-card gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stats-card-val", children: [
          "🪙 ",
          coins.toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-card-lbl", children: "Số dư" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-card green", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stats-card-val", children: [
          "+",
          stats.earned.toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-card-lbl", children: "Tổng kiếm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-card red", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-stats-card-val", children: [
          "−",
          stats.spent.toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-card-lbl", children: "Tổng tiêu" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-card purple", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-card-val", children: isVip ? "👑 VIP" : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-card-lbl", children: "Trạng thái" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-chart-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "📈 Thu nhập 7 ngày" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 350 140", className: "n4-stats-bar-chart", children: [
        dailyKeys.map((key, i) => {
          const val = dailyValues[i];
          const barH = Math.max(2, val / maxDaily * 100);
          const x = 10 + i * 48;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x, y: 120 - barH, width: "36", height: barH, rx: "4", fill: "url(#barGrad)", opacity: "0.9" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: x + 18, y: 115 - barH, fill: "var(--n4-text, #ccc)", fontSize: "10", textAnchor: "middle", children: val > 0 ? val : "" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: x + 18, y: 135, fill: "var(--n4-text-2, #888)", fontSize: "9", textAnchor: "middle", children: key.slice(5) })
          ] }, key);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "barGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#fbbf24" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#f59e0b" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-source-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-chart-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "💰 Nguồn thu" }),
        renderSourceBreakdown(earnSources, stats.earned, pieColors, sourceLabels)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-chart-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "🛍️ Nguồn chi" }),
        renderSourceBreakdown(spendSources, stats.spent, spendColors, sourceLabels)
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-overview-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-mini", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-icon", children: "🎮" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-val", children: gameHistory.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-lbl", children: "Lượt chơi" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-mini", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-icon", children: "⚡" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-val", children: totalPowerUps }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-lbl", children: "Vật phẩm hỗ trợ" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-mini", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-icon", children: "📦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-val", children: totalOwnedItems }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-lbl", children: "Vật phẩm sở hữu" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-mini", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-icon", children: "🐾" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-val", children: totalPets }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-lbl", children: "Thú cưng" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-mini", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-icon", children: "⛩️" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-val", children: gachaHistory.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-lbl", children: "Lượt quay gacha" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-mini", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-icon", children: "🆕" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-val", children: gachaStats.newUnlocks }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-lbl", children: "Đồ mới từ gacha" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-mini", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-icon", children: "♻️" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-val", children: gachaStats.duplicates }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-lbl", children: "Đồ trùng đã đổi" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-mini", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-icon", children: "🏠" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-val", children: totalRoomItems }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-lbl", children: "Đồ phòng học" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-mini", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-icon", children: "🏆" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-val", children: totalCollections }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-lbl", children: "Bộ sưu tập" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-mini", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-icon", children: "🎡" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-val", children: wheelSpinsToday + slotSpinsToday }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-lbl", children: "Lượt quay hôm nay" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-mini", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-icon", children: "💰" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-val", children: gachaStats.compensationCoins }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-stats-mini-lbl", children: "Xu bồi hoàn" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-chart-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "⛩️ Cân bằng gacha" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-callouts", children: [
        bestValueBox && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-callout", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Giá trị tốt nhất" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            bestValueBox.icon,
            " ",
            bestValueBox.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: formatRatio(bestValueBox.profile.efficiency) })
        ] }),
        safestDupeBox && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-callout", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Chống trùng tốt nhất" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            safestDupeBox.icon,
            " ",
            safestDupeBox.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: formatPercent(safestDupeBox.profile.duplicateRetention) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-stats-gacha-boxes", children: gachaBoxProfiles.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-gacha-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-gacha-name", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            entry.icon,
            " ",
            entry.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            entry.profile.bestFor,
            " • ",
            entry.price.toLocaleString(),
            " xu"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-stats-gacha-metrics", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Giá trị ",
            entry.profile.expectedValue.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Hiệu suất ",
            formatRatio(entry.profile.efficiency)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Sử thi+ ",
            formatPercent(entry.profile.epicPlusChance)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Huyền thoại ",
            formatPercent(entry.profile.legendaryChance)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Bù trùng ",
            formatPercent(entry.profile.duplicateRetention)
          ] })
        ] })
      ] }, entry.id)) })
    ] })
  ] });
}
export {
  EconomyStatsPage as default
};
