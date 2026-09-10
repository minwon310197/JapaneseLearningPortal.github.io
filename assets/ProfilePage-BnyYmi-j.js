import { j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { u as useAppStore, h as useLearningStore, w as useMasteryStore } from "./index-BEJSIlFS.js";
import { L as Link } from "./vendor-router-Dx6RIovR.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
const DOMAIN_CONFIG = [
  { id: "vocab", name: "Từ vựng", icon: "語", color: "var(--n4-domain-vocab, #2563eb)" },
  { id: "kanji", name: "Kanji", icon: "漢", color: "var(--n4-domain-kanji, #b45309)" },
  { id: "grammar", name: "Ngữ pháp", icon: "文", color: "var(--n4-domain-grammar, #7c3aed)" },
  { id: "listening", name: "Nghe hiểu", icon: "聴", color: "var(--n4-domain-listening, #0f766e)" },
  { id: "reading", name: "Đọc hiểu", icon: "読", color: "var(--n4-domain-reading, #be123c)" }
];
const EMPTY_MASTERY_BARS = Object.freeze({});
const EMPTY_GAME_HISTORY = Object.freeze([]);
const EMPTY_ACHIEVEMENTS = Object.freeze([]);
function getStatusLabel(score) {
  if (score >= 80) return { label: "Đạt chuẩn N4", cls: "success" };
  if (score >= 50) return { label: "Đang tiến bộ", cls: "info" };
  if (score > 0) return { label: "Cần ôn thêm", cls: "warning" };
  return { label: "Chưa có dữ liệu", cls: "muted" };
}
function MasteryMap({ mastery }) {
  const bars = mastery || EMPTY_MASTERY_BARS;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-profile-mastery-map n4-readiness-rows", children: DOMAIN_CONFIG.map(({ id, name, icon, color }) => {
    var _a, _b;
    const val = Math.max(0, Math.min(100, Number(((_a = bars[id]) == null ? void 0 : _a.level) || ((_b = bars[id]) == null ? void 0 : _b.percent) || 0)));
    const status = getStatusLabel(val);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "n4-profile-domain-card n4-readiness-row",
        "data-domain": id,
        style: { "--domain-c": color },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-profile-domain-card__head", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-profile-domain-icon", "aria-hidden": "true", children: icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-profile-domain-info", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-profile-status-badge n4-profile-status-badge--${status.cls}`, children: status.label })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-profile-domain-score", children: [
              val,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "n4-profile-domain-bar n4-mastery-bar",
              role: "progressbar",
              "aria-label": `${name}: ${val}%`,
              "aria-valuemin": "0",
              "aria-valuemax": "100",
              "aria-valuenow": val,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: `${val}%`, backgroundColor: color } })
            }
          )
        ]
      },
      id
    );
  }) });
}
function WeeklyTrack({ history }) {
  const activeDays = new Set(
    (Array.isArray(history) ? history : []).map((e) => {
      const d = new Date(e.date || e.completedAt || e.timestamp || Date.now());
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    })
  );
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - 6 + i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    return {
      key,
      label: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"][d.getDay()],
      active: activeDays.has(key),
      today: i === 6
    };
  });
  const activeCount = days.filter((d) => d.active).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-profile-weekly", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-profile-weekly__head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Nhịp học tuần qua" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
        activeCount,
        "/7 ngày tích cực"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-profile-weekly__days", role: "list", "aria-label": "Hoạt động học 7 ngày qua", children: days.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        role: "listitem",
        className: `n4-profile-weekly__day${day.active ? " active" : ""}${day.today ? " today" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-profile-weekly__label", children: day.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-profile-weekly__dot", "aria-label": day.active ? "Đã học" : "Chưa học", children: day.active ? "✓" : "•" })
        ]
      },
      day.key
    )) })
  ] });
}
function ProfilePage() {
  const user = useAppStore((state) => state.user);
  const lastSyncAt = useAppStore((state) => state.lastSyncAt);
  const xp = useLearningStore((state) => Number(state.xp) || 0);
  const level = useLearningStore((state) => Number(state.level) || 1);
  const streak = useLearningStore((state) => Number(state.streak) || 0);
  const rawGameHistory = useLearningStore((state) => state.gameHistory);
  const gameHistory = rawGameHistory || EMPTY_GAME_HISTORY;
  const achievements = useLearningStore((state) => Array.isArray(state.achievements) ? state.achievements : EMPTY_ACHIEVEMENTS);
  const rawMastery = useMasteryStore((state) => state.masteryBars);
  const masteryBars = rawMastery || EMPTY_MASTERY_BARS;
  const scores = DOMAIN_CONFIG.map((d) => {
    var _a, _b;
    return Math.max(0, Math.min(100, Number(((_a = masteryBars[d.id]) == null ? void 0 : _a.level) || ((_b = masteryBars[d.id]) == null ? void 0 : _b.percent) || 0)));
  });
  const overallMastery = Math.round(scores.reduce((a, b) => a + b, 0) / (scores.length || 1));
  const xpInLevel = xp % 100;
  if (!user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "n4-arranged-page n4-profile-page n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-feature-hero n4-profile-signed-out", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-domain-badge", children: "Hồ sơ người học" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Lưu tiến độ & Đồng bộ N4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Đăng nhập để đồng bộ kế hoạch học, chuỗi ngày, phần thưởng và cài đặt trên mọi thiết bị." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-profile-signed-out__actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-primary", to: "/settings", children: "Đăng nhập ngay" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileLinks, {})
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "n4-arranged-page n4-profile-page n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-profile-hero", "aria-label": "Thông tin cá nhân", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-profile-hero__avatar", children: user.avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user.avatar, alt: "", referrerPolicy: "no-referrer" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: (user.name || user.email || "N4")[0].toUpperCase() }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-profile-hero__body", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-profile-hero__title-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-kicker", children: "Hồ sơ người học JLPT N4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: user.name || user.email || "Người học N4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-profile-level-badge", children: [
            "Cấp ",
            level
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-profile-hero__metrics", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-profile-metric", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-profile-metric__icon", "aria-hidden": "true", children: "🔥" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                streak,
                " ngày"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Chuỗi liên tiếp" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-profile-metric", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-profile-metric__icon", "aria-hidden": "true", children: "⭐" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                xp.toLocaleString("vi-VN"),
                " XP"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Tổng kinh nghiệm" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-profile-metric", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-profile-metric__icon", "aria-hidden": "true", children: "🎯" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                overallMastery,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Sẵn sàng N4" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-profile-xp-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-profile-xp-label", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Kinh nghiệm Cấp ",
              level
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              xpInLevel,
              "/100 XP"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "n4-profile-xp-bar",
              role: "progressbar",
              "aria-label": `Kinh nghiệm cấp ${level}: ${xpInLevel}%`,
              "aria-valuemin": "0",
              "aria-valuemax": "100",
              "aria-valuenow": xpInLevel,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: `${xpInLevel}%` } })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-arranged-panel", "aria-labelledby": "readiness-title", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-section-heading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-kicker", children: "Mức độ sẵn sàng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "readiness-title", children: "Bản đồ năng lực N4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-ghost n4-btn-sm", to: "/analytics", children: "Phân tích chi tiết →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-method-note", children: "Đánh giá dựa trên tỷ lệ trả lời đúng lần đầu và tần suất luyện tập thực tế." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MasteryMap, { mastery: masteryBars })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-arranged-panel", "aria-labelledby": "weekly-title", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-section-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-kicker", children: "Nhịp độ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "weekly-title", children: "Hành trình 7 ngày" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WeeklyTrack, { history: gameHistory })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-arranged-panel", "aria-labelledby": "achievements-title", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-section-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-kicker", children: "Thành tích" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "achievements-title", children: "Cột mốc đã mở" })
      ] }) }),
      achievements.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "n4-profile-achievements-list", children: achievements.slice(-4).reverse().map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "n4-profile-achievement-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-profile-achievement-icon", "aria-hidden": "true", children: "🏆" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: item.title || item.name || "Cột mốc học tập" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: item.description || "Hoàn thành bài học thành công" })
        ] })
      ] }, item.id || index)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-profile-empty-achievements", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "🌟" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Hoàn thành kế hoạch học đầu tiên để kích hoạt thành tích!" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-arranged-panel", "aria-labelledby": "sync-title", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-section-heading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-kicker", children: "Dữ liệu & Tài khoản" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "sync-title", children: "Trạng thái đồng bộ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-profile-sync-badge", children: lastSyncAt ? `Đồng bộ ${new Date(lastSyncAt).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })}` : "Lưu cục bộ" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-profile-link-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings?tab=data", children: "Sao lưu & Nhập dữ liệu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", children: "Cài đặt ứng dụng" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileLinks, {})
  ] });
}
function ProfileLinks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-profile-link-grid", "aria-label": "Lối tắt hồ sơ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/analytics", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Phân tích tiến độ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Chi tiết SRS và thống kê câu sai" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/settings", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cài đặt" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Giao diện, âm thanh và trợ năng" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/inbox", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Thông báo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sự kiện và hoạt động học tập" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/inventory", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Vật phẩm & Trang bị" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Vật phẩm mở khóa từ Thế giới" })
    ] })
  ] });
}
export {
  ProfilePage as default
};
