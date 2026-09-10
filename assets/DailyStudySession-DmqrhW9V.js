import { j as jsxRuntimeExports, r as reactExports } from "./vendor-react-BUL8WuXG.js";
import { ae as loadDailyStudyPlan, b3 as STUDY_PLAN_UPDATED_EVENT, b4 as STUDY_PLAN_STORAGE_KEY, b5 as completeBlockInStudyPlan, b6 as saveDailyStudyPlan } from "./index-BEJSIlFS.js";
/* empty css                  */
import { a as useNavigate, L as Link } from "./vendor-router-Dx6RIovR.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
const DOMAIN_LABELS$1 = {
  vocab: "Từ vựng",
  kanji: "Kanji",
  grammar: "Ngữ pháp",
  listening: "Nghe",
  reading: "Đọc hiểu"
};
const BLOCK_LABELS = {
  review: "Ôn đến hạn",
  repair: "Sửa điểm yếu",
  learn: "Học mới",
  mixed: "Luyện trọng tâm",
  variation: "Đổi nhịp",
  recap: "Tổng kết"
};
function SessionTimeline({
  blocks,
  currentBlock,
  status,
  selectedIndex,
  onSelect
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "n4-session-timeline-container", "aria-label": "Lộ trình buổi học", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-session-timeline__heading", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-study-plan__eyebrow", children: "Lộ trình" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Buổi học hôm nay" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        Math.min(currentBlock, blocks.length),
        "/",
        blocks.length,
        " phần đã đi qua"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "n4-session-timeline", children: blocks.map((block, index) => {
      const isDone = index < currentBlock || status === "complete";
      const isCurrent = index === currentBlock && status !== "complete";
      const isFuture = index > currentBlock;
      const isSelectedReview = selectedIndex === index;
      const state = isDone ? "done" : isCurrent ? "current" : "locked";
      return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "data-state": state, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => onSelect(index),
          disabled: isFuture,
          "aria-current": isCurrent ? "step" : void 0,
          "aria-label": `${isDone ? "Đã xong" : isCurrent ? "Đang học" : "Chưa mở"}: phần ${index + 1}, ${BLOCK_LABELS[block.type] || "Luyện tập"}, ${DOMAIN_LABELS$1[block.domain] || block.domain}`,
          "data-selected": isSelectedReview || void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-session-timeline__marker", "aria-hidden": "true", children: isDone ? "✓" : index + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-session-timeline__copy", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: BLOCK_LABELS[block.type] || "Luyện tập" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: DOMAIN_LABELS$1[block.domain] || block.domain })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-session-timeline__state", children: isDone ? "Xem lại" : isCurrent ? "Bây giờ" : "Sắp tới" })
          ]
        }
      ) }, block.id || `${block.type}-${index}`);
    }) })
  ] });
}
const DOMAIN_LABELS = { vocab: "Từ vựng", kanji: "Kanji", grammar: "Ngữ pháp", listening: "Nghe", reading: "Đọc hiểu" };
const DOMAIN_ICONS = { vocab: "語", kanji: "漢", grammar: "文", listening: "🎧", reading: "📖" };
const BLOCK_TITLES = {
  review: "Ôn đúng lúc",
  repair: "Sửa điểm yếu",
  variation: "Đổi nhịp kỹ năng",
  recap: "Tổng kết"
};
function DailyStudySession() {
  var _a, _b;
  const navigate = useNavigate();
  const [plan, setPlan] = reactExports.useState(() => loadDailyStudyPlan());
  const [reviewBlockIndex, setReviewBlockIndex] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const refresh = () => setPlan(loadDailyStudyPlan());
    const refreshFromStorage = (event) => {
      if (event.key === STUDY_PLAN_STORAGE_KEY) refresh();
    };
    window.addEventListener(STUDY_PLAN_UPDATED_EVENT, refresh);
    window.addEventListener("storage", refreshFromStorage);
    return () => {
      window.removeEventListener(STUDY_PLAN_UPDATED_EVENT, refresh);
      window.removeEventListener("storage", refreshFromStorage);
    };
  }, []);
  if (!((_a = plan == null ? void 0 : plan.blocks) == null ? void 0 : _a.length)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "n4-study-session n4-page-enter", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "n4-study-session__shell", role: "status", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-session__focus is-complete", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-study-plan__eyebrow", children: "Khôi phục buổi học" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Chưa có kế hoạch để tiếp tục" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tạo lại hành trình hôm nay hoặc chọn một bài luyện ngắn. Không có tiến độ nào bị mất." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-session__actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-primary", to: "/", children: "Tạo kế hoạch hôm nay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-ghost", to: "/practice", children: "Mở Luyện tập" })
      ] })
    ] }) }) });
  }
  const totalBlocks = plan.blocks.length;
  const canonicalIndex = Math.min(plan.currentBlock || 0, totalBlocks - 1);
  const index = reviewBlockIndex == null ? canonicalIndex : reviewBlockIndex;
  const block = plan.blocks[index];
  const done = plan.status === "complete" || plan.currentBlock >= totalBlocks;
  const progress = totalBlocks ? Math.round((done ? totalBlocks : plan.currentBlock) / totalBlocks * 100) : 100;
  const startBlock = () => {
    const isReview = index < plan.currentBlock;
    if (isReview) {
      navigate(block.route);
      return;
    }
    if (block.type === "recap") {
      const completed = completeBlockInStudyPlan(
        plan,
        canonicalIndex,
        [],
        { score: 0, total: 0, xp: 0, coins: 0, gems: 0, recap: true },
        { blockId: block.id }
      );
      setPlan(completed);
      navigate(block.route);
      return;
    }
    const active = saveDailyStudyPlan({ ...plan, status: "active" });
    setPlan(active);
    navigate(block.route);
  };
  const selectTimelineBlock = (idx) => {
    if (idx <= plan.currentBlock) setReviewBlockIndex(idx === plan.currentBlock ? null : idx);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "n4-study-session n4-page-enter", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-study-session__shell", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-study-session__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "n4-btn n4-btn-ghost", children: "← Hôm nay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        plan.duration,
        " phút · ",
        plan.estimatedQuestions,
        " câu"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-session__progress-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tiến độ buổi học" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          progress,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "n4-study-session__progress",
          role: "progressbar",
          "aria-label": `Tiến độ ${progress}%`,
          "aria-valuemin": "0",
          "aria-valuemax": "100",
          "aria-valuenow": progress,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: `${progress}%` } })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SessionTimeline,
      {
        blocks: plan.blocks,
        currentBlock: plan.currentBlock,
        status: plan.status,
        selectedIndex: reviewBlockIndex,
        onSelect: selectTimelineBlock
      }
    ),
    done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-session__focus is-complete", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-study-plan__eyebrow", children: "Hoàn thành" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Buổi học hôm nay đã xong" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bạn có thể xem lại tiến độ hoặc chọn một buổi tự luyện." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-session__actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-primary", to: "/study-results", children: "Xem kết quả" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-ghost", to: "/", children: "Về Hôm nay" })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "n4-study-session__focus", "data-domain": block.domain, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-session__step-marker", "aria-hidden": "true", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: index < plan.currentBlock ? "↺" : index + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: index < plan.currentBlock ? "Ôn" : "Phần" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-session__focus-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-study-plan__eyebrow", children: index < plan.currentBlock ? "Xem lại phần đã hoàn thành" : `Phần ${index + 1}/${totalBlocks} · Bước tiếp theo` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: BLOCK_TITLES[block.type] || "Luyện tập có mục tiêu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-study-session__reason", children: block.rationale }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-session__tools", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-domain-chip", "data-domain": block.domain, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: DOMAIN_ICONS[block.domain] || "N4" }),
            " ",
            DOMAIN_LABELS[block.domain] || block.domain
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ((_b = block.itemKeys) == null ? void 0 : _b.length) ? `${block.itemKeys.length} mục đã chọn` : `${block.questionCount || 0} câu dự kiến` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-session__actions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", type: "button", onClick: startBlock, children: index < plan.currentBlock ? "Ôn lại phần này" : block.type === "recap" ? "Mở tổng kết" : "Bắt đầu phần này" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-ghost", to: "/", children: "Tạm dừng" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-study-session__note", children: "Tiến độ được lưu tự động trên thiết bị. Phần hiện tại chỉ hoàn thành khi trainer xác nhận kết quả." })
      ] })
    ] })
  ] }) });
}
export {
  DailyStudySession as default
};
