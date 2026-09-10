import { j as jsxRuntimeExports, r as reactExports } from "./vendor-react-BUL8WuXG.js";
const WorldSurfaceContext = reactExports.createContext(false);
const WorldSurfaceProvider = ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx(WorldSurfaceContext.Provider, { value: true, children });
const useWorldSurface = () => reactExports.useContext(WorldSurfaceContext);
export {
  WorldSurfaceProvider as W,
  useWorldSurface as u
};
