import { r as reactExports } from "./vendor-react-DMamQVB4.js";
const LEGACY_POLL_INTERVAL_MS = 200;
const LEGACY_POLL_MAX_ATTEMPTS = 50;
const LEGACY_GLOBAL_LOAD_DEBOUNCE_MS = 250;
let legacyLastLoadAttemptAt = 0;
function hasLegacyDataReady() {
  var _a, _b;
  return !!((_b = (_a = window.S) == null ? void 0 : _a.vocab) == null ? void 0 : _b.length);
}
function useEnsureLegacyDataLoaded(loaded, loadFromLegacy) {
  const loadRef = reactExports.useRef(loadFromLegacy);
  loadRef.current = loadFromLegacy;
  reactExports.useEffect(() => {
    if (loaded) return;
    let didLoad = false;
    let attempts = 0;
    const shouldThrottleGlobalLoad = () => {
      const now = Date.now();
      if (now - legacyLastLoadAttemptAt < LEGACY_GLOBAL_LOAD_DEBOUNCE_MS) {
        return true;
      }
      legacyLastLoadAttemptAt = now;
      return false;
    };
    const tryLoad = (force = false) => {
      if (didLoad) return false;
      if (!force && !hasLegacyDataReady()) {
        if (shouldThrottleGlobalLoad()) return false;
      }
      didLoad = true;
      try {
        loadRef.current();
      } catch (error) {
        didLoad = false;
        console.warn("loadFromLegacy failed:", error);
      }
      return true;
    };
    if (tryLoad(true)) return;
    let pollId = null;
    const stopPolling = () => {
      if (pollId !== null) {
        clearInterval(pollId);
        pollId = null;
      }
    };
    const onReady = () => {
      if (tryLoad()) stopPolling();
    };
    window.addEventListener("n4-data-ready", onReady);
    pollId = setInterval(() => {
      attempts += 1;
      if (tryLoad() || attempts >= LEGACY_POLL_MAX_ATTEMPTS) {
        stopPolling();
      }
    }, LEGACY_POLL_INTERVAL_MS);
    return () => {
      stopPolling();
      window.removeEventListener("n4-data-ready", onReady);
    };
  }, [loaded]);
}
export {
  useEnsureLegacyDataLoaded as u
};
