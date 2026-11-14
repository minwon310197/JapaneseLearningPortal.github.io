const CORS_PROXIES = [
  "https://api.allorigins.win/raw?url=",
  "https://corsproxy.io/?",
  "https://corsproxy.org/?",
  "https://api.codetabs.com/v1/proxy?quest="
];
const cache = /* @__PURE__ */ new Map();
const CACHE_TTL = 5 * 60 * 1e3;
function fetchWithTimeout(url, options = {}, timeout = 1e4) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  return fetch(url, { ...options, signal: controller.signal }).finally(() => clearTimeout(id));
}
async function apiFetch(url, options = {}) {
  const {
    timeout = 1e4,
    retries = 1,
    useProxy = false,
    cacheKey = null,
    cacheTTL = CACHE_TTL,
    headers = {},
    ...fetchOpts
  } = options;
  if (cacheKey && cache.has(cacheKey)) {
    const cached = cache.get(cacheKey);
    if (Date.now() - cached.time < cacheTTL) return cached.data;
    cache.delete(cacheKey);
  }
  const mergedHeaders = { "Accept": "application/json", ...headers };
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetchWithTimeout(url, { ...fetchOpts, headers: mergedHeaders }, timeout);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (cacheKey) cache.set(cacheKey, { data, time: Date.now() });
      return data;
    } catch (err) {
      if (attempt === retries && !useProxy) throw err;
      if (attempt < retries) await new Promise((r) => setTimeout(r, 500 * (attempt + 1)));
    }
  }
  if (useProxy) {
    for (const proxy of CORS_PROXIES) {
      try {
        const proxyUrl = proxy + encodeURIComponent(url);
        const res = await fetchWithTimeout(proxyUrl, { ...fetchOpts, headers: mergedHeaders }, timeout);
        if (!res.ok) continue;
        const data = await res.json();
        if (cacheKey) cache.set(cacheKey, { data, time: Date.now() });
        return data;
      } catch (e) {
        continue;
      }
    }
    throw new Error("All CORS proxies failed");
  }
  throw new Error("API fetch failed");
}
function isOnline() {
  return navigator.onLine !== false;
}
export {
  apiFetch as a,
  isOnline as i
};
