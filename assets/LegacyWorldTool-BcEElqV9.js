const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DailyPractice-yzD0WEbL.js","./vendor-react-BUL8WuXG.js","./TrainerTopBar-BbQ9A_1j.js","./useDialogFocus-CowhWfi-.js","./index-BEJSIlFS.js","./vendor-runtime-BbOs9S9B.js","./vendor-icons-D83cEu6Z.js","./vendor-router-Dx6RIovR.js","./vendor-supabase-DTEAj5J1.js","./index-BF-iHvWQ.css","./empty-Bvm-mx50.js","./HitPause-BapLYhfu.js","./study-results-DtyGPqxP.js","./quest-chains-CiwzmCpJ.js","./registry-BAotxlgH.js","./useScoreEngine-f-lCg0MN.js","./QuizMode-DQg4kJzy.js","./utils-zpwy_og2.js","./PhaseRibbon-D3yQ4T2H.js","./index-B2ai8n3C.js","./AIGameHelper-DJcZivzu.js","./useAIKey-CpSw0zmN.js","./client-wNJ1tNgU.js","./api-BAg1LJRR.js","./content-errors-D90Pz2ps.js","./ModeResultsScreen-5Gki9ifL.js","./ModeResultsScreen-Bd7eTXWx.css","./QuizFeedback-Pap1aVYn.js","./MatchMode-ftsrtm9f.js","./ScaffoldingLayer-BwAQh4aw.js","./TrueFalseMode-DKzuYm0f.js","./FlashcardMode-CA-Jcray.js","./useDataHelper-DtTUT9Wk.js","./useGrammarQuiz-CkAk5tho.js","./useGameEngine-BKAIg4EU.js","./DailyPractice-DjD604un.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { j as jsxRuntimeExports, r as reactExports } from "./vendor-react-BUL8WuXG.js";
import { u as useScoreEngine } from "./useScoreEngine-f-lCg0MN.js";
import { r as registerLegacyToolAssessment } from "./legacy-tool-assessment-CuYVfzBR.js";
import { d as watchWorldToolMount, l as loadLegacyFeature } from "./legacy-loader-gyvSYPc3.js";
import { w as worldToolDestination } from "./world-tool-destinations-BAVvWbat.js";
import { a as useDataStore, b as stopSpeech } from "./index-BEJSIlFS.js";
import { N as Navigate } from "./vendor-router-Dx6RIovR.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
const DailyPractice = reactExports.lazy(() => __vitePreload(() => import("./DailyPractice-yzD0WEbL.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]) : void 0, import.meta.url));
function LegacyWorldTool(props) {
  const destination = worldToolDestination(props.activity.fn);
  if (destination == null ? void 0 : destination.activityId) return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { replace: true, to: `/?activity=${encodeURIComponent(destination.activityId)}` });
  if ((destination == null ? void 0 : destination.trainerId) === "daily-practice") return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "status", children: "Đang chuẩn bị thẻ đã lưu…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DailyPractice, { mode: destination.mode }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LegacyOverlayTool, { ...props });
}
function LegacyOverlayTool({ activity, onClose }) {
  const scoring = useScoreEngine(activity.id);
  const scoringRef = reactExports.useRef(scoring);
  scoringRef.current = scoring;
  const mount = reactExports.useRef(null);
  const cleanupRef = reactExports.useRef(null);
  const closeRef = reactExports.useRef(onClose);
  closeRef.current = onClose;
  const [attempt, setAttempt] = reactExports.useState(0);
  reactExports.useLayoutEffect(() => () => {
    var _a;
    return (_a = cleanupRef.current) == null ? void 0 : _a.call(cleanupRef);
  }, [activity.fn, attempt]);
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(true);
  const loaded = useDataStore((state) => state.loaded);
  reactExports.useEffect(() => {
    if (!loaded) return;
    let disposed = false;
    const controller = new AbortController();
    const root = mount.current;
    setLoading(true);
    setError("");
    const unregisterAssessment = registerLegacyToolAssessment(activity.fn, {
      start: () => scoringRef.current.reset(),
      answer: (item, correct, assisted) => correct ? scoringRef.current.recordCorrect(item, assisted ? 1 : void 0) : scoringRef.current.recordWrong(item),
      finish: () => scoringRef.current.reset()
    });
    const watcher = watchWorldToolMount(root, { onOpen: () => setLoading(false), onClose: () => {
      var _a;
      return (_a = closeRef.current) == null ? void 0 : _a.call(closeRef);
    } });
    loadLegacyFeature(activity.fn, { strict: true, signal: controller.signal }).then(() => {
      if (disposed) return;
      watcher.inspect();
      if (!watcher.hasOverlay()) {
        setLoading(false);
        setError("Công cụ chưa mở được. Thử tải lại để tiếp tục.");
      }
    }).catch((error2) => {
      if (!disposed) {
        setLoading(false);
        setError(error2.message || "Không tải được công cụ học.");
      }
    });
    const cleanup = () => {
      if (disposed) return;
      disposed = true;
      controller.abort();
      unregisterAssessment();
      watcher.dispose();
      stopSpeech();
    };
    cleanupRef.current = cleanup;
    return cleanup;
  }, [activity.fn, attempt, loaded]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "haru-legacy-tool", children: [
    (loading || !loaded) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "status", className: "haru-tool-status", children: "Đang chuẩn bị dụng cụ học…" }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "haru-tool-status", role: "alert", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAttempt((value) => value + 1), children: "Tải lại" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: mount, "data-haru-tool-mount": "" })
  ] });
}
export {
  LegacyWorldTool as default
};
