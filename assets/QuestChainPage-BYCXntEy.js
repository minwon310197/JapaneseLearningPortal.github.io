import { r as reactExports, u as useShallow, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { g as getChainById, Q as QUEST_CHAINS } from "./quest-chains-CiwzmCpJ.js";
import { t as useQuestStore } from "./index-CjITGIof.js";
import { c as useParams, b as useNavigate, L as Link } from "./vendor-router-BTJacUKt.js";
import "./feature-3d-jK3b4Iv-.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-Dp6hMoyV.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-icons-DHCyxOF-.js";
function readCounter(counters, path) {
  if (!path) return 0;
  const parts = path.split(".");
  let node = counters;
  for (const p of parts) {
    if (node == null) return 0;
    node = node[p];
  }
  return typeof node === "number" ? node : 0;
}
function QuestChainPage() {
  var _a, _b, _c;
  const { chainId } = useParams();
  const navigate = useNavigate();
  const chain = reactExports.useMemo(() => getChainById(chainId), [chainId]);
  const { chainProgress, counters } = useQuestStore(useShallow((s) => ({
    chainProgress: s.chainProgress || {},
    counters: s.counters || {}
  })));
  if (!chain) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-chain-page n4-page-enter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-chain-page-head", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => navigate(-1), children: "← Quay lại" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Không tìm thấy chuỗi nhiệm vụ" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Chuỗi ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: chainId }),
        " chưa tồn tại. Các chuỗi hiện có:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: QUEST_CHAINS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/chains/${c.id}`, children: [
        c.icon,
        " ",
        c.nameVi || c.name
      ] }) }, c.id)) })
    ] });
  }
  const progress = chainProgress[chain.id] || { step: 0 };
  const currentStepIdx = Math.min(progress.step, chain.steps.length - 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-chain-page n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-chain-page-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-ghost", onClick: () => navigate("/"), children: "← Trang chủ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-chain-page-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-chain-page-icon", "aria-hidden": "true", children: chain.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: chain.nameVi || chain.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: chain.description })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "n4-chain-page-steps", children: chain.steps.map((step, idx) => {
      const counterVal = readCounter(counters, step.goalKey);
      const done = idx < progress.step;
      const active = idx === currentStepIdx && !progress.done;
      const pct = Math.min(1, counterVal / step.goal);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "article",
        {
          className: `n4-chain-page-step ${done ? "is-done" : ""} ${active ? "is-active" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-chain-page-step-idx", children: idx + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: step.kind === "vocab" ? "📘 Từ vựng" : step.kind === "kanji" ? "🏯 Kanji" : step.kind === "grammar" ? "⚔️ Ngữ pháp" : step.kind === "listening" ? "🎧 Nghe" : step.kind === "reading" ? "📖 Đọc" : step.kind }),
              done && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-chain-page-check", children: "✓" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-chain-page-step-bar", "aria-label": `Tiến độ ${Math.round(pct * 100)}%`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: `${pct * 100}%` } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                counterVal,
                "/",
                step.goal
              ] }),
              step.reward && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "🪙 ",
                step.reward.coins || 0,
                step.reward.gems ? ` · 💎 ${step.reward.gems}` : ""
              ] })
            ] })
          ]
        },
        idx
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-chain-page-final", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🎁 Phần thưởng cuối cùng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        ((_a = chain.final) == null ? void 0 : _a.coins) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "🪙 ",
          chain.final.coins,
          " xu"
        ] }),
        ((_b = chain.final) == null ? void 0 : _b.gems) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "💎 ",
          chain.final.gems,
          " gem"
        ] }),
        ((_c = chain.final) == null ? void 0 : _c.cosmetic) && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "🎀 Vật phẩm ngoại hình: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: chain.final.cosmetic })
        ] })
      ] }),
      progress.done ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-chain-page-status is-done", children: "✅ Hoàn thành!" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-chain-page-status", children: [
        "Đang tiến hành · Bước ",
        currentStepIdx + 1,
        "/",
        chain.steps.length
      ] })
    ] })
  ] });
}
export {
  QuestChainPage as default
};
