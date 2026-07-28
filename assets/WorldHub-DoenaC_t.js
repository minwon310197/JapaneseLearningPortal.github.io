import { u as useShallow, r as reactExports, j as jsxRuntimeExports, R as React } from "./vendor-react-BYxMSDiB.js";
import { d as useLearningStore, bo as useQuality, aV as getCurrentSeason, bp as WorldLoadGate, bq as V3WorldRoot } from "./feature-3d-ClP3ARU5.js";
import { t as triggerCelebration } from "./CelebrationOverlay-C3dUD_zC.js";
import { u as useTodayKey } from "./useTodayKey-BBNOYeod.js";
import { D as DAILY_QUESTS } from "./quests-OG8KoiB9.js";
import { L as Link } from "./vendor-router-BTJacUKt.js";
/* empty css                 */
/* empty css                        */
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
function chooseDailySlice(arr, n, salt = 0) {
  const day = Math.floor(Date.now() / (24 * 60 * 60 * 1e3));
  const seed = day + salt >>> 0;
  const copy = arr.slice();
  let s = seed;
  const rand = () => {
    s = s * 1103515245 + 12345 & 2147483647;
    return s / 2147483647;
  };
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}
function progressOf(quest, state) {
  var _a;
  const val = (_a = state == null ? void 0 : state[quest.goalKey]) != null ? _a : 0;
  const pct = Math.min(1, val / Math.max(1, quest.goal));
  return { val, goal: quest.goal, pct };
}
function DailyMissionBoard() {
  const state = useLearningStore(useShallow((s) => ({
    todaySessions: s.todaySessions || 0,
    todayCorrect: s.todayCorrect || 0,
    todayWrong: s.todayWrong || 0,
    todayPowerUps: s.todayPowerUps || 0,
    todayTotal: (s.todayCorrect || 0) + (s.todayWrong || 0),
    todayPetFed: s.todayPetFed || 0,
    todaySpins: (s.wheelSpinsToday || 0) + (s.slotSpinsToday || 0),
    weekSessions: s.weekSessions || 0
  })));
  const picks = reactExports.useMemo(() => chooseDailySlice(DAILY_QUESTS, 3), []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-daily-board", "aria-label": "Nhiệm vụ hôm nay", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-daily-board-title", children: "🎯 Nhiệm vụ hôm nay" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-daily-board-list", children: picks.map((q) => {
      const p = progressOf(q, state);
      const done = p.pct >= 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/missions", className: `n4-daily-mission${done ? " is-done" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-daily-mission-icon", children: q.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-daily-mission-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-daily-mission-title", children: q.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-daily-mission-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-daily-mission-bar-fill", style: { width: `${p.pct * 100}%`, background: q.color || "var(--n4-accent)" } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-daily-mission-meta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              p.val,
              "/",
              p.goal
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "+",
              q.reward,
              " 🪙"
            ] })
          ] })
        ] }),
        done && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-daily-mission-check", children: "✓" })
      ] }, q.id);
    }) })
  ] });
}
const DISTRICTS = [
  {
    id: "shrine",
    name: "神社",
    nameVn: "Đền thờ",
    icon: "⛩️",
    color: "#ef4444",
    features: [
      { id: "shrine", path: "/shrine", icon: "⛩️", label: "Xin quẻ", desc: "Rút quẻ may mắn mỗi ngày" },
      { id: "onsen", path: "/onsen", icon: "♨️", label: "Suối nóng", desc: "Nghỉ ngơi nhận buff XP" },
      { id: "tea", path: "/tea", icon: "🍵", label: "Trà đạo", desc: "Trò trí nhớ matcha" },
      { id: "zen-dojo", path: "/zen-dojo", icon: "🧘", label: "Thiền đường", desc: "Pomodoro tập trung nhận XP" }
    ]
  },
  {
    id: "shopping",
    name: "商店街",
    nameVn: "Phố mua sắm",
    icon: "🛍️",
    color: "#f59e0b",
    featured: true,
    features: [
      { id: "shop", path: "/shop", icon: "🛍️", label: "Cửa hàng (Store)", desc: "Mua vật phẩm hỗ trợ, giao diện, huy hiệu", featured: true, tag: "Store" },
      { id: "inventory", path: "/inventory", icon: "🎒", label: "Kho đồ (Bag)", desc: "Trang bị giao diện, avatar", featured: true, tag: "Bag" },
      { id: "market", path: "/market", icon: "🏪", label: "Chợ", desc: "Chế tạo, tái chế và ưu đãi" },
      { id: "gacha", path: "/gacha", icon: "🎰", label: "Quay thưởng", desc: "Quay thưởng nhận vật phẩm hiếm" },
      { id: "scratch", path: "/scratch-cards", icon: "🎫", label: "Thẻ cào", desc: "Cào thẻ trúng thưởng mỗi ngày" }
    ]
  },
  {
    id: "yokocho",
    name: "横丁",
    nameVn: "Ngõ ẩm thực",
    icon: "🍜",
    color: "#f97316",
    features: [
      { id: "ramen", path: "/ramen", icon: "🍜", label: "Quán mì Nhật", desc: "Mua nguyên liệu và nấu mì Nhật" },
      { id: "neko", path: "/neko", icon: "🐱", label: "Quán mèo", desc: "Nhận nuôi mèo và nhận bonus" },
      { id: "gambling", path: "/gambling", icon: "🎲", label: "Trò mini", desc: "Vòng quay may mắn và máy slot" },
      { id: "treasure", path: "/treasure-hunt", icon: "🗺️", label: "Kho báu", desc: "Đào tìm kho báu ẩn" }
    ]
  },
  {
    id: "village",
    name: "村",
    nameVn: "Làng",
    icon: "🏘️",
    color: "#10b981",
    features: [
      { id: "village", path: "/village", icon: "🏘️", label: "Làng", desc: "Xây dựng và thu nhập thụ động" },
      { id: "town", path: "/town", icon: "🏙️", label: "Thị trấn", desc: "Hội thoại AI tình huống" },
      { id: "sensei", path: "/sensei", icon: "👩‍🏫", label: "Phòng hướng dẫn", desc: "Tặng quà tăng cảm tình" },
      { id: "faction", path: "/faction", icon: "⚔️", label: "Phe phái", desc: "Chọn phe phái nhận bonus" },
      { id: "bounties", path: "/bounties", icon: "📜", label: "Tiền thưởng", desc: "Nhiệm vụ săn tiền thưởng" }
    ]
  },
  {
    id: "dojo",
    name: "道場",
    nameVn: "Võ đường",
    icon: "🥋",
    color: "#6366f1",
    features: [
      { id: "kendo", path: "/kendo", icon: "🤺", label: "Kiếm đạo", desc: "Đấu nhịp nhận XP" },
      { id: "taiko", path: "/taiko", icon: "🥁", label: "Trống Nhật", desc: "Trò nhịp DON / KA" },
      { id: "skill-tree", path: "/skill-tree", icon: "🌳", label: "Cây kỹ năng", desc: "Đầu tư điểm kỹ năng" },
      { id: "character-stats", path: "/character-stats", icon: "⚔️", label: "Chỉ số nhân vật", desc: "HP / ATK / DEF, điểm từ săn quái" },
      { id: "mecha", path: "/mecha", icon: "🤖", label: "Gara người máy", desc: "Nâng cấp bộ phận người máy" },
      { id: "origami", path: "/origami", icon: "✂️", label: "Gấp giấy", desc: "Gấp giấy mở khóa bonus" }
    ]
  },
  {
    id: "culture",
    name: "文化",
    nameVn: "Văn hóa",
    icon: "📚",
    color: "#ec4899",
    features: [
      { id: "manga", path: "/manga", icon: "📚", label: "Truyện tranh", desc: "Đọc chương mới nhận XP" },
      { id: "story", path: "/story", icon: "📖", label: "Hành trình truyện", desc: "Các chương truyện tương tác" },
      { id: "room", path: "/study-room", icon: "🏠", label: "Phòng học", desc: "Trang trí phòng học" },
      { id: "pets", path: "/pets", icon: "🐾", label: "Thú cưng", desc: "Nuôi pet đồng hành" }
    ]
  },
  {
    id: "square",
    name: "広場",
    nameVn: "Quảng trường",
    icon: "📋",
    color: "#0ea5e9",
    features: [
      { id: "missions", path: "/missions", icon: "📋", label: "Nhiệm vụ", desc: "Nhiệm vụ ngày và tuần" },
      { id: "collections", path: "/collections", icon: "🏆", label: "Bộ sưu tập", desc: "Hoàn thành bộ sưu tập" },
      { id: "stats", path: "/economy-stats", icon: "📊", label: "Thống kê", desc: "Phân tích thu chi" },
      { id: "draft-features", path: "/draft-features", icon: "🚧", label: "Ý tưởng nháp", desc: "100 ý tưởng đang chờ chọn lọc" }
    ]
  }
];
const DAILY_REWARDS = [40, 48, 56, 64, 72, 84, 120];
const SOURCE_LABELS = {
  "correct-answer": "Trả lời đúng",
  "game-completion": "Hoàn thành game",
  "first-game-of-day": "Game đầu ngày",
  "daily-claim": "Điểm danh",
  "achievement": "Thành tích",
  "level-up": "Lên cấp",
  "wheel-win": "Vòng quay",
  "slot-win": "Slot",
  "bet-win": "Cá cược",
  "daily-quest": "Nhiệm vụ",
  "weekly-quest": "Nhiệm vụ tuần",
  "milestone": "Cột mốc",
  "collection-claim": "Bộ sưu tập",
  "shop": "Mua sắm",
  "gacha": "Gacha",
  "pet-feed": "Cho thú ăn",
  "room-buy": "Trang trí",
  "wheel-spin": "Quay wheel",
  "slot-spin": "Quay slot",
  "vip-purchase": "VIP",
  "craft": "Chế tạo",
  "recycle": "Tái chế",
  "enchant": "Phù chú",
  "fuse": "Hợp luyện",
  "daily-deal": "Ưu đãi hằng ngày",
  "scratch": "Cào thẻ",
  "treasure": "Kho báu"
};
const EMPTY_OBJ = {};
function WorldHub() {
  const { tier } = useQuality();
  const {
    coins,
    dailyClaimStreak,
    lastDailyClaimDate,
    vipExpiry,
    claimDailyReward,
    activePet,
    equippedCosmetics,
    level
  } = useLearningStore(useShallow((s) => ({
    coins: s.coins,
    dailyClaimStreak: s.dailyClaimStreak,
    lastDailyClaimDate: s.lastDailyClaimDate,
    vipExpiry: s.vipExpiry,
    claimDailyReward: s.claimDailyReward,
    activePet: s.activePet,
    equippedCosmetics: s.equippedCosmetics || EMPTY_OBJ,
    level: s.level
  })));
  const todayKey = useTodayKey();
  const claimedToday = lastDailyClaimDate === todayKey;
  const isVip = vipExpiry && Date.now() < vipExpiry;
  const streakDay = Math.min(dailyClaimStreak || 0, 6);
  const todayReward = DAILY_REWARDS[streakDay] || 40;
  const season = getCurrentSeason();
  const [claimMsg, setClaimMsg] = React.useState(null);
  const [isWorldOpen, setIsWorldOpen] = reactExports.useState(false);
  React.useEffect(() => {
    if (!claimMsg) return void 0;
    const t = window.setTimeout(() => setClaimMsg(null), 3e3);
    return () => window.clearTimeout(t);
  }, [claimMsg]);
  const handleClaim = reactExports.useCallback(() => {
    if (claimedToday) {
      setClaimMsg({ kind: "info", text: "Đã nhận hôm nay — quay lại mai nhé!" });
      return;
    }
    if (typeof claimDailyReward !== "function") {
      setClaimMsg({ kind: "error", text: "Chưa sẵn sàng, thử lại sau." });
      return;
    }
    try {
      const r = claimDailyReward();
      if (r) {
        triggerCelebration("coin", 2e3);
        setClaimMsg({ kind: "success", text: `🎉 +${r.coins || 0} coin!` });
      } else {
        setClaimMsg({ kind: "info", text: "Bạn đã nhận thưởng hôm nay." });
      }
    } catch (e) {
      setClaimMsg({ kind: "error", text: `Lỗi: ${(e == null ? void 0 : e.message) || "không rõ"}` });
      console.error("[WorldHub] claimDailyReward failed:", e);
    }
  }, [claimedToday, claimDailyReward]);
  const AVATAR_EMOJI = { "avatar-ninja": "🥷", "avatar-maneki": "🐱", "avatar-tanuki": "🦝", "avatar-kitsune": "🦊", "avatar-phoenix": "🔥", "avatar-daruma": "🎯", "avatar-oni": "👹", "avatar-crane": "🦢", "avatar-dragon-king": "🐲", "avatar-sakura-spirit": "🧚", "avatar-thunder-god": "⚡", "avatar-ice-empress": "❄️", "avatar-shadow-ninja": "🌑", "avatar-celestial-fox": "🦊", "avatar-wind-samurai": "🌪️", "avatar-golden-buddha": "🧘" };
  const equippedAvatar = equippedCosmetics == null ? void 0 : equippedCosmetics.avatar;
  if (!isWorldOpen) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hub n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-world-hub__header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hub__brand", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hub__eyebrow", children: "N4 WORLD MAP · 日本語の旅" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Thế giới N4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hub__profile", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hub__profile-label", children: "Hành trang" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hud-coin", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hud-coin__avatar", children: equippedAvatar && AVATAR_EMOJI[equippedAvatar] ? AVATAR_EMOJI[equippedAvatar] : "👤" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hud-coin__body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hud-coin__row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hud-coin__icon", children: "🪙" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hud-coin__amount", children: (coins || 0).toLocaleString("vi-VN") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hud-coin__meta", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-world-hud-coin__chip", children: [
                  "Lv.",
                  level
                ] }),
                isVip && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hud-coin__chip n4-world-hud-coin__chip--vip", children: "👑" }),
                activePet && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hud-coin__chip n4-world-hud-coin__chip--pet", children: "🐾" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "n4-world-hub__content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-world-hub__hero", "aria-labelledby": "world-launch-title", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hub__hero-copy", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-world-hub__kicker", children: "CỔNG LÀNG HỌC TẬP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { id: "world-launch-title", children: [
              "Học một chút,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "khám phá thật xa." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-world-hub__intro", children: "Gặp NPC, tìm thử thách N4 và biến từng phiên học thành một chuyến đi." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-world-hub__launch", onClick: () => setIsWorldOpen(true), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hub__launch-icon", "aria-hidden": "true", children: "⛩️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Vào thế giới 3D" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Khám phá làng học tập" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hub__launch-arrow", "aria-hidden": "true", children: "→" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hub__quick-links", "aria-label": "Chuẩn bị chuyến đi", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", children: "🛍️ Cửa hàng" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/inventory", children: "🎒 Kho đồ" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/market", children: "🏪 Chợ" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hub__map-art", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hub__sun" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hub__mountain n4-world-hub__mountain--back" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hub__mountain n4-world-hub__mountain--front" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hub__torii", children: "⛩" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hub__sakura n4-world-hub__sakura--one", children: "✦" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hub__sakura n4-world-hub__sakura--two", children: "✦" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hub__map-label", children: "3D VILLAGE" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-world-hub__journey", "aria-label": "Hành trình hôm nay", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hub__journey-head", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "任務" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "HÀNH TRÌNH HÔM NAY" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Ba việc nhỏ, một bước tiến." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/missions", children: "Xem tất cả →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DailyMissionBoard, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-world-hub__districts", "aria-labelledby": "districts-title", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hub__section-head", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "BẢN ĐỒ KHU VỰC" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "districts-title", children: "Chọn điểm đến tiếp theo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              DISTRICTS.filter((district) => district.id !== "shopping").length,
              " khu vực"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-world-hub__district-grid", children: DISTRICTS.filter((district) => district.id !== "shopping").map((district) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "n4-world-hub__district", style: { "--district-color": district.color }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hub__district-icon", "aria-hidden": "true", children: district.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: district.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: district.nameVn })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-world-hub__district-links", children: district.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: feature.path, title: feature.desc, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: feature.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feature.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { "aria-hidden": "true", children: "↗" })
            ] }, feature.path)) })
          ] }, district.id)) })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-root", style: { padding: 0, margin: 0, overflow: "hidden" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-world-hud-topright", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hud-coin", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hud-coin__avatar", children: equippedAvatar && AVATAR_EMOJI[equippedAvatar] ? AVATAR_EMOJI[equippedAvatar] : "👤" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hud-coin__body", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hud-coin__row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hud-coin__icon", children: "🪙" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hud-coin__amount", children: (coins || 0).toLocaleString("vi-VN") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hud-coin__meta", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-world-hud-coin__chip", children: [
            "Lv.",
            level
          ] }),
          isVip && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hud-coin__chip n4-world-hud-coin__chip--vip", children: "👑" }),
          activePet && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hud-coin__chip n4-world-hud-coin__chip--pet", children: "🐾" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hud-checkin", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-world-hud-checkin__days", children: DAILY_REWARDS.map((reward, i) => {
        const earned = i < (dailyClaimStreak || 0);
        const today = i === streakDay && !claimedToday;
        const cls = `n4-world-hud-checkin__day${earned ? " is-earned" : ""}${today ? " is-today" : ""}`;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cls, title: `Ngày ${i + 1}: +${reward} xu`, children: earned ? "✓" : i + 1 }, i);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: handleClaim,
          title: claimedToday ? "Đã nhận hôm nay" : "Nhận thưởng điểm danh",
          className: `n4-world-hud-checkin__claim${claimedToday ? " is-claimed" : ""}`,
          children: claimedToday ? "✅" : `+${todayReward}`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-world-hud-checkin__streak", children: [
        "🔥",
        dailyClaimStreak || 0
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-world-hud-season", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hud-season__icon", children: season.id === "spring" ? "🌸" : season.id === "summer" ? "🎆" : season.id === "autumn" ? "🍂" : "❄️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-world-hud-season__label", children: season.name }),
      (season.exclusiveItems || []).slice(0, 2).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: item.name, children: item.icon }, item.id))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorldLoadGate, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(V3WorldRoot, { quality: tier }) }) }),
    claimMsg && /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          background: claimMsg.kind === "error" ? "rgba(220,40,60,0.92)" : claimMsg.kind === "success" ? "rgba(34,197,94,0.95)" : "rgba(30,35,50,0.88)",
          color: "#fff",
          boxShadow: "0 6px 22px rgba(0,0,0,0.35)",
          backdropFilter: "blur(10px)",
          maxWidth: "calc(100vw - 32px)",
          textAlign: "center"
        },
        children: claimMsg.text
      }
    )
  ] });
}
export {
  SOURCE_LABELS,
  WorldHub as default
};
