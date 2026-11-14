const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SubgameCanvasRenderer-Be3ncYy_.js","./vendor-react-DMamQVB4.js","./WorldSurfaceContext-4twqImdW.js","./feature-3d-BsCVfJIV.js","./vendor-three-DYjRxPnd.js","./QualityContext-B08Ybl-u.js","./index-CcAX8r97.js","./vendor-supabase-DTEAj5J1.js","./vendor-router-udyIeVgQ.js","./vendor-runtime-BbOs9S9B.js","./vendor-icons-MeSkysD6.js","./index-9fUQtPyz.css","./VisibilityPauseBinder-OX2mp4L5.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { j as jsxRuntimeExports, r as reactExports } from "./vendor-react-DMamQVB4.js";
import { u as useWorldSurface } from "./WorldSurfaceContext-4twqImdW.js";
const Renderer = reactExports.lazy(() => __vitePreload(() => import("./SubgameCanvasRenderer-Be3ncYy_.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]) : void 0, import.meta.url));
function SubgameCanvas(props) {
  const inWorld = useWorldSurface();
  if (inWorld) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Renderer, { ...props }) });
}
export {
  SubgameCanvas as S
};
