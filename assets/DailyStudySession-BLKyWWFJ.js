import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { l as loadDailyStudyPlan, f as saveDailyStudyPlan, a5 as advanceDailyStudyPlan } from "./index-D1BqAvip.js";
/* empty css                  */
import { b as useNavigate, L as Link } from "./vendor-router-BTJacUKt.js";
import "./feature-3d-CFvJkEt3.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-icons-DHCyxOF-.js";
function DailyStudySession() {
  const navigate = useNavigate();
  const [plan, setPlan] = reactExports.useState(() => loadDailyStudyPlan());
  reactExports.useEffect(() => {
    if (!plan) navigate("/", { replace: true });
  }, [plan, navigate]);
  if (!plan) return null;
  const index = Math.min(plan.currentBlock || 0, plan.blocks.length - 1);
  const block = plan.blocks[index];
  const done = plan.status === "complete" || !block;
  const progress = plan.blocks.length ? Math.round((done ? plan.blocks.length : index) / plan.blocks.length * 100) : 100;
  const startBlock = () => {
    const active = saveDailyStudyPlan({ ...plan, status: "active" });
    setPlan(active);
    navigate(block.route);
  };
  const completeBlock = () => {
    const next = advanceDailyStudyPlan(plan);
    setPlan(next);
    if (next.status === "complete") navigate("/study-results");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "n4-study-session n4-page-enter", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-study-session__shell n4-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-study-session__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "n4-btn n4-btn-ghost", children: "← Hôm nay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        plan.duration,
        " phút · ",
        plan.estimatedQuestions,
        " câu"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-study-session__progress", "aria-label": `Tiến độ ${progress}%`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: `${progress}%` } }) }),
    done ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-study-plan__eyebrow", children: "Hoàn thành" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Buổi học hôm nay đã xong" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bạn có thể xem lại tiến độ hoặc chọn một buổi tự luyện." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-primary", to: "/study-results", children: "Xem kết quả" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-study-plan__eyebrow", children: [
        "Phần ",
        index + 1,
        "/",
        plan.blocks.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: block.type === "review" ? "Ôn đúng lúc" : block.type === "repair" ? "Sửa điểm yếu" : block.type === "recap" ? "Tổng kết" : "Luyện tập có mục tiêu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-study-session__reason", children: block.rationale }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-session__tools", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: block.domain }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: block.itemKeys.length ? `${block.itemKeys.length} mục đã chọn` : `${block.questionCount || 0} câu dự kiến` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-session__actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", type: "button", onClick: startBlock, children: block.type === "recap" ? "Mở tổng kết" : "Mở bài luyện" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", type: "button", onClick: completeBlock, children: "Đánh dấu đã xong" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-study-session__note", children: "Mẹo, đáp án và phát âm luôn nằm trong trainer. Lộ trình này được lưu trên thiết bị để bạn có thể quay lại sau." })
    ] })
  ] }) });
}
export {
  DailyStudySession as default
};
