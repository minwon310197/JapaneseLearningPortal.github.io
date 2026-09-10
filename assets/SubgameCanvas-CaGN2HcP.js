const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SubgameCanvasRenderer-C3c7Y1Z3.js","./vendor-react-BUL8WuXG.js","./WorldSurfaceContext-CUHCnPUQ.js","./feature-3d-B9k2WEUa.js","./vendor-three-DqkPfKji.js","./index-BEJSIlFS.js","./vendor-runtime-BbOs9S9B.js","./vendor-icons-D83cEu6Z.js","./vendor-router-Dx6RIovR.js","./vendor-supabase-DTEAj5J1.js","./index-BF-iHvWQ.css","./VisibilityPauseBinder-CQh7nPdw.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { j as jsxRuntimeExports, r as reactExports } from "./vendor-react-BUL8WuXG.js";
import { u as useWorldSurface } from "./WorldSurfaceContext-CUHCnPUQ.js";
const Renderer = reactExports.lazy(() => __vitePreload(() => import("./SubgameCanvasRenderer-C3c7Y1Z3.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url));
function SubgameCanvas(props) {
  const inWorld = useWorldSurface();
  if (inWorld) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Renderer, { ...props }) });
}
export {
  SubgameCanvas as S
};
