const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ModelViewerRenderer-CnXwS-Nm.js","./vendor-react-DMamQVB4.js","./vendor-runtime-BbOs9S9B.js","./WorldSurfaceContext-4twqImdW.js","./feature-3d-BsCVfJIV.js","./vendor-three-DYjRxPnd.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { j as jsxRuntimeExports, r as reactExports } from "./vendor-react-DMamQVB4.js";
import { u as useWorldSurface } from "./WorldSurfaceContext-4twqImdW.js";
const Renderer = reactExports.lazy(() => __vitePreload(() => import("./ModelViewerRenderer-CnXwS-Nm.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0, import.meta.url));
function ModelViewer(props) {
  const inWorld = useWorldSurface();
  if (inWorld) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Renderer, { ...props }) });
}
export {
  ModelViewer as M
};
