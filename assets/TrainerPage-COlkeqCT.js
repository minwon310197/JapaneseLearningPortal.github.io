const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-qzEsKs-W.js","./vendor-react-DMamQVB4.js","./vendor-supabase-DTEAj5J1.js","./vendor-router-udyIeVgQ.js","./vendor-runtime-BbOs9S9B.js","./vendor-icons-MeSkysD6.js","./index-9fUQtPyz.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-DMamQVB4.js";
import { a as useDataStore, b as useLearningStore, c as useAppStore, d as useGameStore } from "./index-qzEsKs-W.js";
import { u as useEnsureLegacyDataLoaded } from "./useEnsureLegacyDataLoaded-Dkt39hfj.js";
import { T as TRAINER_REGISTRY } from "./registry-DTSzvidR.js";
import { u as useParams, N as Navigate, L as Link } from "./vendor-router-udyIeVgQ.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-icons-MeSkysD6.js";
const TRAINER_COMPONENTS = Object.fromEntries(
  Object.entries(TRAINER_REGISTRY).map(([trainerId, trainer]) => [trainerId, reactExports.lazy(trainer.load)])
);
function TrainerLoadingFallback({ trainer }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "n4-arranged-page n4-page-enter", "aria-busy": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-arranged-panel n4-stable-skeleton", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-kicker", children: (trainer == null ? void 0 : trainer.category) === "assessment" ? "Đánh giá" : "Luyện tập" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { children: [
      "Đang chuẩn bị ",
      (trainer == null ? void 0 : trainer.title) || "bài luyện",
      "…"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Kích thước màn hình được giữ ổn định trong khi tải nội dung." })
  ] }) });
}
function TrainerNotFound() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "n4-arranged-page n4-page-enter", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-empty-state", role: "status", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Không tìm thấy bài luyện" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bài luyện này có thể chưa sẵn sàng hoặc đã được chuyển sang danh mục khác." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/practice", className: "n4-btn n4-btn-primary", children: "Về Luyện tập" })
  ] }) });
}
function TrainerPage() {
  const { id, mode } = useParams();
  const trainer = TRAINER_REGISTRY[id];
  const available = trainer && trainer.status !== "hidden" && trainer.status !== "unavailable";
  const activeMode = available ? trainer.modes.includes(mode) ? mode : trainer.primaryModes[0] || trainer.modes[0] : null;
  const { loaded, loadFromLegacy } = useDataStore(useShallow((state) => ({
    loaded: state.loaded,
    loadFromLegacy: state.loadFromLegacy
  })));
  useEnsureLegacyDataLoaded(loaded, loadFromLegacy);
  reactExports.useEffect(() => {
    var _a;
    if (!available || !activeMode) return;
    useLearningStore.getState().setLastVisitedRoute(`/trainer/${id}/${activeMode}`);
    const userId = (_a = useAppStore.getState().user) == null ? void 0 : _a.id;
    if (userId) {
      __vitePreload(async () => {
        const { logActivity } = await import("./index-qzEsKs-W.js").then((n) => n.c8);
        return { logActivity };
      }, true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0, import.meta.url).then(({ logActivity }) => logActivity(userId, "trainer_start", { trainer: id, mode: activeMode })).catch(() => {
      });
    }
  }, [activeMode, available, id]);
  reactExports.useLayoutEffect(() => {
    if (!available || !activeMode) return void 0;
    useGameStore.getState().startGame(id, activeMode);
    return () => {
      var _a, _b, _c, _d;
      try {
        (_d = (_c = (_b = (_a = window.__N4_STORE__) == null ? void 0 : _a.learning) == null ? void 0 : _b.getState()) == null ? void 0 : _c.flushNonCritical) == null ? void 0 : _d.call(_c);
      } catch (e) {
      }
      useGameStore.getState().endGame();
    };
  }, [activeMode, available, id]);
  if (!available) return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerNotFound, {});
  if (mode && mode !== activeMode) return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: `/trainer/${id}/${activeMode}`, replace: true });
  const TrainerComponent = TRAINER_COMPONENTS[id];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerLoadingFallback, { trainer }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerComponent, { mode: activeMode }) });
}
export {
  TrainerPage as default
};
