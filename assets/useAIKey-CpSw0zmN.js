import { u as useAppStore } from "./index-BEJSIlFS.js";
const SERVER_PROXY_CAPABILITY = "server-proxy";
function useAIKey() {
  const user = useAppStore((s) => s.user);
  const isLoggedIn = Boolean(user == null ? void 0 : user.id);
  return {
    aiKey: isLoggedIn ? SERVER_PROXY_CAPABILITY : null,
    provider: "server",
    hasKey: isLoggedIn,
    isLoggedIn,
    loading: false
  };
}
export {
  useAIKey as u
};
