import { j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { ae as loadDailyStudyPlan } from "./index-BEJSIlFS.js";
import { b as AIPostGameButton } from "./AIGameHelper-DJcZivzu.js";
import { s as summarizeStudyPlanResults } from "./study-results-DtyGPqxP.js";
/* empty css                  */
import { L as Link } from "./vendor-router-Dx6RIovR.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./useAIKey-CpSw0zmN.js";
import "./client-wNJ1tNgU.js";
import "./api-BAg1LJRR.js";
import "./content-errors-D90Pz2ps.js";
const DOMAIN_LABELS = {
  vocab: "Từ vựng",
  kanji: "Kanji",
  grammar: "Ngữ pháp",
  listening: "Nghe",
  reading: "Đọc hiểu",
  conjugation: "Chia động từ",
  particles: "Trợ từ"
};
const DOMAIN_ICONS = {
  vocab: "語",
  kanji: "漢",
  grammar: "文",
  listening: "聴",
  reading: "読",
  conjugation: "活",
  particles: "助"
};
function AccuracyRing({ value, size = 88 }) {
  const r = (size - 12) / 2;
  const circ = 2 * Math.PI * r;
  const filled = circ * (value / 100);
  const strokeColor = value >= 80 ? "var(--n4-success)" : value >= 60 ? "var(--n4-warning)" : "var(--n4-error)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      className: "n4-results-ring",
      width: size,
      height: size,
      viewBox: `0 0 ${size} ${size}`,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: size / 2,
            cy: size / 2,
            r,
            fill: "none",
            stroke: "var(--n4-border)",
            strokeWidth: "8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: size / 2,
            cy: size / 2,
            r,
            fill: "none",
            stroke: strokeColor,
            strokeWidth: "8",
            strokeLinecap: "round",
            strokeDasharray: `${filled} ${circ}`,
            strokeDashoffset: circ / 4,
            style: { transition: "stroke-dasharray 0.6s ease" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "text",
          {
            x: "50%",
            y: "50%",
            dominantBaseline: "middle",
            textAnchor: "middle",
            fill: "var(--n4-text-primary)",
            fontSize: "1.4rem",
            fontWeight: "700",
            fontFamily: "var(--n4-font-ui)",
            children: [
              value,
              "%"
            ]
          }
        )
      ]
    }
  );
}
function MasteryBar({ delta, domain, maxXp }) {
  const pct = maxXp ? Math.max(8, Math.round(delta.xp / maxXp * 100)) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-results-mastery-bar", "data-domain": domain, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-results-mastery-bar__label", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-results-domain-icon", "aria-hidden": "true", children: DOMAIN_ICONS[domain] || "◉" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: DOMAIN_LABELS[domain] || domain }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-results-mastery-bar__score", children: [
        "+",
        delta.xp,
        " XP",
        delta.level > 0 ? ` · +${delta.level} cấp` : ""
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "n4-results-mastery-bar__track",
        role: "progressbar",
        "aria-label": `${DOMAIN_LABELS[domain] || domain}: tăng ${delta.xp} XP mastery`,
        "aria-valuemin": 0,
        "aria-valuemax": maxXp || 1,
        "aria-valuenow": delta.xp,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: `${pct}%`, background: "var(--n4-success)" } })
      }
    )
  ] });
}
function MistakeItem({ item, index }) {
  const label = item.label || item.question || item.itemKey || "Nội dung cần ôn lại";
  const domain = item.domain || item.type;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "n4-results-mistake-item", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-results-mistake-item__num", "aria-hidden": "true", children: index + 1 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-results-mistake-item__content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: [domain && (DOMAIN_LABELS[domain] || domain), item.meaning || item.explanation].filter(Boolean).join(" · ") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-results-mistake-item__tag", "aria-label": "Cần ôn lại", children: "↩" })
  ] });
}
function PerformanceBadge({ accuracy, partial }) {
  if (partial) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-results-badge n4-results-badge--partial", children: "Một phần" });
  if (accuracy >= 90) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-results-badge n4-results-badge--excellent", children: "Xuất sắc" });
  if (accuracy >= 75) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-results-badge n4-results-badge--good", children: "Tốt" });
  if (accuracy >= 55) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-results-badge n4-results-badge--ok", children: "Ổn" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-results-badge n4-results-badge--retry", children: "Cần ôn thêm" });
}
function DailyStudyResults() {
  const plan = loadDailyStudyPlan();
  if (!plan) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "n4-arranged-page n4-results-page n4-page-enter", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-results-empty-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-results-empty-card__icon", "aria-hidden": "true", children: "📋" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Không tìm thấy buổi học" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bắt đầu kế hoạch từ Hôm nay hoặc Luyện tập." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-primary", to: "/", children: "Về Hôm nay" })
    ] }) });
  }
  const { completed, totals, mistakes: allMistakes, mastery } = summarizeStudyPlanResults(plan);
  const accuracy = totals.questions ? Math.round(totals.firstAttemptCorrect / totals.questions * 100) : 0;
  const mistakes = allMistakes.slice(0, 5);
  const partial = completed.length < plan.blocks.filter((block) => block.type !== "recap").length;
  const minutes = Math.max(0, Math.round(totals.time / 6e4));
  const sortedDomains = Object.entries(mastery).filter(([, delta]) => delta.xp > 0 || delta.level > 0).sort(([, left], [, right]) => right.xp - left.xp || right.level - left.level);
  const maxMasteryXp = Math.max(0, ...sortedDomains.map(([, delta]) => delta.xp));
  const nextRoute = mistakes.length ? "/trainer/daily-practice/weak-points" : partial ? "/study-session" : "/analytics";
  const nextLabel = mistakes.length ? `Ôn ${mistakes.length} lỗi` : partial ? "Tiếp tục học" : "Xem tiến độ";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "n4-arranged-page n4-results-page n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-results-postcard", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-results-postcard__left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-results-postcard__title-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-kicker", children: partial ? "Buổi học một phần" : "Buổi học hoàn thành" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PerformanceBadge, { accuracy, partial })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "n4-results-postcard__headline", children: totals.questions ? `${totals.firstAttemptCorrect} / ${totals.questions} đúng ngay lần đầu` : "Chưa có câu trả lời" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-results-postcard__meta", children: [
          minutes > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            minutes,
            " phút"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            completed.length,
            " phần hoàn thành"
          ] }),
          totals.eventualCorrect > totals.firstAttemptCorrect && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            totals.eventualCorrect,
            " câu đúng sau khi thử lại"
          ] }),
          totals.hintsUsed > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            totals.hintsUsed,
            " gợi ý"
          ] }),
          totals.revealsUsed > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            totals.revealsUsed,
            " lần xem đáp án"
          ] }),
          totals.technicalFailures > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            totals.technicalFailures,
            " lỗi kỹ thuật đã loại"
          ] }),
          plan.duration && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Kế hoạch ",
            plan.duration,
            " phút"
          ] })
        ] })
      ] }),
      totals.questions > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-results-postcard__ring", "aria-label": `Độ chính xác ${accuracy}%`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccuracyRing, { value: accuracy }) })
    ] }),
    completed.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-results-section", "aria-labelledby": "mastery-change-title", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-results-section__heading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-kicker", children: "Tiến bộ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "mastery-change-title", children: "Những gì bạn vừa củng cố" })
      ] }),
      sortedDomains.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-results-mastery-list", children: sortedDomains.map(([domain, delta]) => /* @__PURE__ */ jsxRuntimeExports.jsx(MasteryBar, { domain, delta, maxXp: maxMasteryXp }, domain)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-results-section__insight", children: "Chưa ghi nhận thay đổi mastery trong phần đã hoàn thành." }),
      sortedDomains.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-results-section__insight", children: (() => {
        const [bestDomain, bestDelta] = sortedDomains[0];
        return `${DOMAIN_LABELS[bestDomain] || bestDomain} tăng nhiều nhất (+${bestDelta.xp} XP mastery).`;
      })() })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-results-section", "aria-labelledby": "mistakes-title", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-results-section__heading", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-kicker", children: "Cần xem lại" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "mistakes-title", children: "Lỗi đáng chú ý" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/ai-tutor?feature=ai-mistakes", className: "n4-btn n4-btn-ghost n4-results-section__action", children: "Nhờ AI phân tích" })
      ] }),
      mistakes.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "n4-results-mistakes-list", children: mistakes.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(MistakeItem, { item, index }, item.id || item.itemKey || index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AIPostGameButton,
          {
            history: mistakes.map((item) => ({ item, correct: false })),
            getQuestion: (item) => item.label || item.itemKey,
            getCorrectInfo: (item) => ({ meaning: item.meaning, explanation: item.explanation }),
            score: totals.firstAttemptCorrect,
            total: totals.questions
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-results-no-mistakes", role: "status", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: totals.questions ? "Không có lỗi trong buổi này. Tốt lắm!" : "Chưa có dữ liệu lỗi sai." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-results-next-action", "aria-labelledby": "next-action-title", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-results-next-action__copy", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-kicker", children: "Bước tiếp theo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "next-action-title", children: mistakes.length ? "Ôn lại lỗi vừa gặp" : partial ? "Tiếp tục kế hoạch hôm nay" : "Xem tiến độ N4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Giữ nhịp bằng một hành động ngắn và rõ ràng." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "n4-btn n4-btn-primary", to: nextRoute, children: nextLabel })
    ] }),
    (totals.xp > 0 || totals.coins > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "n4-results-reward", "aria-label": "Phần thưởng buổi học", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-results-reward__inner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-results-reward__label", children: "Phần thưởng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-results-reward__items", children: [
        totals.xp > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-results-reward__item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { "aria-hidden": "true", children: "⬆" }),
          " +",
          totals.xp,
          " XP"
        ] }),
        totals.coins > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-results-reward__item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { "aria-hidden": "true", children: "◎" }),
          " +",
          totals.coins,
          " xu"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "n4-btn n4-btn-ghost n4-results-reward__done", children: "Xong" })
    ] }) })
  ] });
}
export {
  DailyStudyResults as default
};
