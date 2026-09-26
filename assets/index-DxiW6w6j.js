const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./WorldExperience-6BMb2HPU.js","./vendor-react-BJfqeUfp.js","./vendor-router-BqW7KNUg.js","./vendor-supabase-DTEAj5J1.js","./vendor-runtime-BbOs9S9B.js","./WorldExperience-Bmeza5s2.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as reactExports, j as jsxRuntimeExports, R as React, c as clientExports } from "./vendor-react-BJfqeUfp.js";
import { c as createClient } from "./vendor-supabase-DTEAj5J1.js";
import { H as HashRouter } from "./vendor-router-BqW7KNUg.js";
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function scheduleOfflineBoot({ production = false, win = globalThis.window, nav = globalThis.navigator } = {}) {
  if (!production || !win || !(nav == null ? void 0 : nav.serviceWorker)) return () => {
  };
  const page = new URL(win.location.href);
  if ([...page.searchParams.keys()].some((key) => ["qa", "__qa", "gallery", "benchmark"].includes(key.toLowerCase()))) return () => {
  };
  let disposed = false, resourceObserver = null, started = false;
  let worldReady = win.__HARU_WORLD_READY === true;
  const base = new URL("./", win.document.baseURI);
  const register = () => {
    if (disposed || started || !worldReady || win.document.readyState !== "complete") return;
    started = true;
    nav.serviceWorker.register(new URL("service-worker.js", base).href, { scope: base.pathname, updateViaCache: "none" }).then(async () => {
      var _a, _b;
      const ready = await nav.serviceWorker.ready;
      if (disposed || !(ready == null ? void 0 : ready.active)) return;
      const remember = (entries) => {
        const urls = [...new Set(entries.map((entry) => entry.name).filter((name) => {
          try {
            const url = new URL(name);
            return url.origin === base.origin && url.pathname.startsWith(base.pathname) && !url.search && /^(?:assets|game\/world|fonts|icons|images)\//.test(url.pathname.slice(base.pathname.length));
          } catch (e) {
            return false;
          }
        }))];
        for (let offset = 0; offset < urls.length; offset += 128) ready.active.postMessage({ type: "HARU_CACHE_VISITED", urls: urls.slice(offset, offset + 128) });
      };
      remember(((_b = (_a = win.performance) == null ? void 0 : _a.getEntriesByType) == null ? void 0 : _b.call(_a, "resource")) || []);
      if (win.PerformanceObserver) {
        resourceObserver = new win.PerformanceObserver((list) => remember(list.getEntries()));
        resourceObserver.observe({ type: "resource", buffered: false });
      }
    }).catch(() => {
      var _a;
      return (_a = win.console) == null ? void 0 : _a.warn("Chưa chuẩn bị được bản ngoại tuyến. Ứng dụng vẫn hoạt động trực tuyến.");
    });
  };
  const worldBecameReady = () => {
    worldReady = true;
    register();
  };
  win.addEventListener("haru-world-ready", worldBecameReady);
  if (win.document.readyState === "complete") queueMicrotask(register);
  else win.addEventListener("load", register, { once: true });
  return () => {
    disposed = true;
    resourceObserver == null ? void 0 : resourceObserver.disconnect();
    win.removeEventListener("load", register);
    win.removeEventListener("haru-world-ready", worldBecameReady);
  };
}
const CHUNK_RELOAD_KEY = "n4:chunk-reload-attempt";
const CHUNK_RELOAD_WINDOW_MS = 6e4;
function isChunkLoadError(error) {
  const message = String((error == null ? void 0 : error.message) || error || "");
  return /ChunkLoadError|Loading chunk [\w-]+ failed|Failed to fetch dynamically imported module|Importing a module script failed/i.test(message);
}
function claimChunkReload(storage, route, now = Date.now()) {
  if (!storage) return false;
  let previous = null;
  try {
    previous = JSON.parse(storage.getItem(CHUNK_RELOAD_KEY) || "null");
  } catch (e) {
  }
  if ((previous == null ? void 0 : previous.route) === route && now - Number(previous.at || 0) < CHUNK_RELOAD_WINDOW_MS) {
    return false;
  }
  try {
    storage.setItem(CHUNK_RELOAD_KEY, JSON.stringify({ route, at: now }));
    return true;
  } catch (e) {
    return false;
  }
}
const __vite_import_meta_env__ = { "BASE_URL": "./", "DEV": false, "MODE": "raw", "PROD": true, "SSR": false, "VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyZ2ZpaXV5ZmFqd3N3b2ZwZ3FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1ODQxODksImV4cCI6MjA4OTE2MDE4OX0.zIhTyu4P-JDh79r25xYm3n0j5qUWLJ0D14QVF04fVi0", "VITE_SUPABASE_URL": "https://wrgfiiuyfajwswofpgqg.supabase.co" };
function normalizeEnvValue(value) {
  return typeof value === "string" ? value.trim() : "";
}
function getPublicRuntimeConfig(env = __vite_import_meta_env__ != null ? __vite_import_meta_env__ : {}) {
  const config = {
    supabaseUrl: normalizeEnvValue(env.VITE_SUPABASE_URL),
    supabaseAnonKey: normalizeEnvValue(env.VITE_SUPABASE_ANON_KEY)
  };
  const missing = [];
  if (!config.supabaseUrl) missing.push("VITE_SUPABASE_URL");
  if (!config.supabaseAnonKey) missing.push("VITE_SUPABASE_ANON_KEY");
  return {
    ...config,
    missing,
    ok: missing.length === 0
  };
}
function formatMissingPublicEnvMessage(missing) {
  const list = Array.isArray(missing) ? missing.filter(Boolean) : [];
  if (list.length === 0) return "Runtime config is valid.";
  return `Missing public runtime config: ${list.join(", ")}. Cloud features are disabled until these variables are provided.`;
}
function reportPublicRuntimeConfigIssues(config = getPublicRuntimeConfig(), logger = console.error) {
  if (config.ok) return false;
  logger(`[Config] ${formatMissingPublicEnvMessage(config.missing)}`);
  return true;
}
const runtimeConfig = getPublicRuntimeConfig();
const isSupabaseConfigured = runtimeConfig.ok;
function createSupabaseConfigError(path = "Supabase client") {
  return new Error(`[Config] ${path} unavailable. ${formatMissingPublicEnvMessage(runtimeConfig.missing)}`);
}
function assertSupabaseConfigured(path = "Supabase feature") {
  if (!isSupabaseConfigured) {
    throw createSupabaseConfigError(path);
  }
}
function createUnavailableClient(path = "supabase") {
  const callable = () => {
    throw createSupabaseConfigError(path);
  };
  return new Proxy(callable, {
    get(_target, prop) {
      if (prop === "__isMissingConfig__") return true;
      if (prop === "then") return void 0;
      if (prop === Symbol.toStringTag) return "MissingSupabaseClient";
      if (prop === "toString") return () => "[MissingSupabaseClient]";
      if (prop === "valueOf") return () => callable;
      return createUnavailableClient(`${path}.${String(prop)}`);
    },
    apply() {
      throw createSupabaseConfigError(path);
    }
  });
}
const supabase = isSupabaseConfigured ? createClient(runtimeConfig.supabaseUrl, runtimeConfig.supabaseAnonKey, {
  auth: { flowType: "pkce", detectSessionInUrl: true, persistSession: true }
}) : createUnavailableClient();
async function getProfile(userId) {
  const { data, error } = await supabase.rpc("get_current_user_profile");
  if (error && error.code !== "PGRST116") throw error;
  if ((data == null ? void 0 : data.id) && userId && data.id !== userId) throw new Error("Profile scope mismatch");
  return data;
}
function getOAuthRedirectUrl(locationLike = window.location) {
  return `${locationLike.origin}${locationLike.pathname}`;
}
async function signInWithGoogle() {
  assertSupabaseConfigured("Google OAuth sign-in");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: getOAuthRedirectUrl() }
  });
  if (error) throw error;
  return data;
}
async function signOut() {
  assertSupabaseConfigured("Sign out");
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
async function getSession() {
  if (!isSupabaseConfigured) return null;
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}
async function checkBlocked(userId) {
  if (!isSupabaseConfigured) return false;
  if (!userId) return false;
  try {
    const profile = await getProfile(userId);
    if ((profile == null ? void 0 : profile.role) === "blocked") {
      const banUntil = (profile == null ? void 0 : profile.ban_until) ? Date.parse(profile.ban_until) : Number.NaN;
      if (Number.isFinite(banUntil) && banUntil <= Date.now()) {
        const { error } = await supabase.rpc("release_expired_current_user_ban");
        if (error) throw error;
        return false;
      }
      await signOut();
      throw new Error("Tài khoản đã bị khóa. Vui lòng liên hệ admin.");
    }
  } catch (e) {
    if (e.message.includes("bị khóa")) throw e;
    console.warn("[Auth] checkBlocked error:", e.message);
    throw e;
  }
  return false;
}
function onAuthChange(callback) {
  if (!isSupabaseConfigured) return () => {
  };
  const pendingCallbacks = /* @__PURE__ */ new Set();
  const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
    const timeoutId = setTimeout(() => {
      pendingCallbacks.delete(timeoutId);
      Promise.resolve(callback(event, session)).catch((error) => {
        console.error("[Auth] state-change handler failed:", (error == null ? void 0 : error.message) || String(error));
      });
    }, 0);
    pendingCallbacks.add(timeoutId);
  });
  return () => {
    pendingCallbacks.forEach((timeoutId) => clearTimeout(timeoutId));
    pendingCallbacks.clear();
    subscription.unsubscribe();
  };
}
const defaultState = Object.freeze({ ready: true, user: null, error: null });
const HaruWorldAuthContext = reactExports.createContext(defaultState);
function isBlockedError(error) {
  return String((error == null ? void 0 : error.message) || "").includes("bị khóa");
}
function HaruWorldAuthProvider({ children }) {
  const [state, setState] = reactExports.useState({ ready: false, user: null, error: null });
  const generation = reactExports.useRef(0);
  const currentOwner = reactExports.useRef(null);
  reactExports.useEffect(() => {
    let active = true;
    let authEventReceived = false;
    const hydrate = async (sessionUser) => {
      const requestGeneration = ++generation.current;
      const commit = (next) => {
        var _a;
        if (active && requestGeneration === generation.current) {
          currentOwner.current = ((_a = next.user) == null ? void 0 : _a.id) || null;
          setState(next);
        }
      };
      if (!sessionUser) {
        commit({ ready: true, user: null, error: null });
        return;
      }
      if (currentOwner.current !== sessionUser.id) commit({ ready: false, user: null, error: null });
      try {
        await checkBlocked(sessionUser.id);
      } catch (error) {
        if (isBlockedError(error)) {
          commit({ ready: true, user: null, error: String(error.message || error) });
          return;
        }
      }
      commit({ ready: true, user: { id: sessionUser.id }, error: null });
    };
    const unsubscribe = onAuthChange((_event, session) => {
      authEventReceived = true;
      return hydrate((session == null ? void 0 : session.user) || null);
    });
    getSession().then((session) => {
      if (active && !authEventReceived) return hydrate((session == null ? void 0 : session.user) || null);
    }).catch((error) => {
      if (active && !authEventReceived) setState({ ready: true, user: null, error: String((error == null ? void 0 : error.message) || error) });
    });
    return () => {
      active = false;
      generation.current += 1;
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  const value = reactExports.useMemo(() => state, [state]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HaruWorldAuthContext.Provider, { value, children });
}
function useHaruWorldAuth() {
  return reactExports.useContext(HaruWorldAuthContext);
}
class ErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    __publicField(this, "reset", () => {
      this.setState((state) => ({
        error: null,
        incidentId: null,
        resetKey: state.resetKey + 1
      }));
      if (this.props.onReset) {
        this.props.onReset();
      } else {
        window.location.hash = "#/";
      }
    });
    this.state = { error: null, resetKey: 0, incidentId: null };
  }
  static getDerivedStateFromError(error) {
    const incidentId = `N4-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    return { error, incidentId };
  }
  componentDidCatch(err, info) {
    console.error("[ErrorBoundary]", err, info);
    if (isChunkLoadError(err) && claimChunkReload(window.sessionStorage, window.location.href)) {
      window.location.reload();
    }
  }
  render() {
    if (this.state.error) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "haru-boot", role: "alert", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { lang: "ja", children: "春" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: isChunkLoadError(this.state.error) ? "Haru World vừa cập nhật" : "Không thể mở Haru World" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Một lỗi khởi động đã xảy ra. Bản lưu trên thiết bị không bị thay đổi." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: this.reset, children: "Thử lại" })
      ] });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, { children: this.props.children }, this.state.resetKey);
  }
}
function AppProviders({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HashRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HaruWorldAuthProvider, { children }) }) });
}
function AppShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-app haru-world-app", children: /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "n4-main", children }) });
}
const WorldExperience = reactExports.lazy(() => __vitePreload(() => import("./WorldExperience-6BMb2HPU.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0, import.meta.url));
function AppRouter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "haru-boot", role: "status", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { lang: "ja", children: "春" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Đang mở làng Haru…" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chuẩn bị hành trình học của bạn." })
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorldExperience, {}) });
}
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppProviders, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppRouter, {}) }) });
}
reportPublicRuntimeConfigIssues();
if (typeof window !== "undefined") {
  const _origWarn = console.warn.bind(console);
  console.warn = function(...args) {
    const msg = typeof args[0] === "string" ? args[0] : "";
    if (msg.includes("Clock") && msg.includes("deprecated") && msg.includes("Timer")) return;
    _origWarn(...args);
  };
}
let _mounted = false;
function mountReactApp() {
  if (_mounted) return;
  _mounted = true;
  window.__N4_REACT_APP_ACTIVE = true;
  const container = document.getElementById("react-root");
  if (!container) return;
  const root = clientExports.createRoot(container);
  root.render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
  );
}
mountReactApp();
scheduleOfflineBoot({ production: true });
export {
  signInWithGoogle as a,
  signOut as b,
  isSupabaseConfigured as i,
  supabase as s,
  useHaruWorldAuth as u
};
