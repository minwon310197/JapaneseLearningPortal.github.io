import { j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { l as loadDailyStudyPlan } from "./index-D1BqAvip.js";
/* empty css                  */
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./feature-3d-CFvJkEt3.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-icons-DHCyxOF-.js";
function DailyStudyResults() {
  const plan = loadDailyStudyPlan();
  if (!plan) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "n4-study-session n4-page-enter", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-study-session__shell n4-card n4-study-results", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-study-plan__eyebrow", children: "Tổng kết hôm nay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Không tìm thấy buổi học" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Hãy bắt đầu lộ trình học từ trang chủ." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-study-session__actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-primary", to: "/", children: "Về trang chủ" }) })
    ] }) });
  }
  let totalCorrect = 0;
  let totalQuestions = 0;
  let totalXp = 0;
  let totalCoins = 0;
  let totalTimeMs = 0;
  plan.blocks.forEach((block) => {
    if (block.result) {
      totalCorrect += block.result.score || 0;
      totalQuestions += block.result.total || 0;
      totalXp += block.result.xp || 0;
      totalCoins += block.result.coins || 0;
      totalTimeMs += block.result.timeMs || 0;
    }
  });
  const minutes = Math.floor(totalTimeMs / 6e4);
  const seconds = Math.floor(totalTimeMs % 6e4 / 1e3);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "n4-study-session n4-page-enter", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-study-session__shell n4-card n4-study-results", style: { maxWidth: "600px", width: "95%" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-study-plan__eyebrow", children: "Hoàn thành lộ trình" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { marginBottom: "1.5rem" }, children: "Tổng kết hôm nay 🎉" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-results-summary", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem", textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat-card", style: { background: "var(--n4-bg-dark)", padding: "1rem", borderRadius: "8px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "1.5rem", fontWeight: "bold", color: "var(--n4-accent)" }, children: [
          totalQuestions > 0 ? Math.round(totalCorrect / totalQuestions * 100) : 0,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.8rem", opacity: 0.7 }, children: [
          "Chính xác (",
          totalCorrect,
          "/",
          totalQuestions,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat-card", style: { background: "var(--n4-bg-dark)", padding: "1rem", borderRadius: "8px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "1.5rem", fontWeight: "bold", color: "var(--n4-warning)" }, children: [
          "+",
          totalXp,
          " XP / +",
          totalCoins,
          " 🪙"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8rem", opacity: 0.7 }, children: "Thưởng tích lũy" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat-card", style: { background: "var(--n4-bg-dark)", padding: "1rem", borderRadius: "8px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "1.5rem", fontWeight: "bold", color: "var(--n4-primary)" }, children: [
          minutes,
          ":",
          String(seconds).padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8rem", opacity: 0.7 }, children: "Tổng thời gian" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-results-blocks", style: { textAlign: "left", marginBottom: "2rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { borderBottom: "1px solid var(--n4-border)", paddingBottom: "0.5rem", marginBottom: "1rem" }, children: "Chi tiết từng phần học" }),
      plan.blocks.filter((block) => block.type !== "recap").map((block, i) => {
        const label = block.type === "review" ? "Ôn tập đúng lúc" : block.type === "repair" ? "Sửa điểm yếu" : "Luyện tập mục tiêu";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-block-item", style: { display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px dashed var(--n4-border)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontWeight: 600 }, children: [
              "Phần ",
              i + 1,
              ": ",
              label,
              " (",
              block.domain,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85rem", opacity: 0.6 }, children: block.rationale })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "right" }, children: block.result ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontWeight: 600 }, children: [
              block.result.score,
              "/",
              block.result.total,
              " đúng"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.8rem", color: "var(--n4-accent)" }, children: [
              "+",
              block.result.xp,
              " XP"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { opacity: 0.5, fontStyle: "italic" }, children: "Bỏ qua" }) })
        ] }, i);
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-study-session__actions", style: { display: "flex", gap: "1rem", justifyContent: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-primary", to: "/analytics", children: "Xem tiến độ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-ghost", to: "/", children: "Về Hôm nay" })
    ] })
  ] }) });
}
export {
  DailyStudyResults as default
};
