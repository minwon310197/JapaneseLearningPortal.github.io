const CACHE_PREFIX = "n4-ai-";
const MAX_CACHE_SIZE = 5 * 1024 * 1024;
const DEFAULT_TTL = 24 * 60 * 60 * 1e3;
function cacheHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i) | 0;
  }
  return Math.abs(hash).toString(36);
}
function cacheKey(feature, prompt) {
  return `${CACHE_PREFIX}${feature}-${cacheHash(prompt)}`;
}
function getCached(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (Date.now() > entry.expires) {
      localStorage.removeItem(key);
      return null;
    }
    entry.lastAccess = Date.now();
    localStorage.setItem(key, JSON.stringify(entry));
    return entry.data;
  } catch (e) {
    return null;
  }
}
function setCache(key, data, ttl = DEFAULT_TTL) {
  try {
    const entry = {
      data,
      created: Date.now(),
      expires: Date.now() + ttl,
      lastAccess: Date.now()
    };
    const json = JSON.stringify(entry);
    if (json.length > MAX_CACHE_SIZE / 2) return;
    evictIfNeeded(json.length);
    localStorage.setItem(key, json);
  } catch (e) {
    try {
      evictOldest(10);
      localStorage.setItem(key, JSON.stringify({ data, created: Date.now(), expires: Date.now() + ttl, lastAccess: Date.now() }));
    } catch (e2) {
    }
  }
}
function getAllCacheKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key == null ? void 0 : key.startsWith(CACHE_PREFIX)) keys.push(key);
  }
  return keys;
}
function getCacheSize() {
  let total = 0;
  getAllCacheKeys().forEach((k) => {
    total += (localStorage.getItem(k) || "").length * 2;
  });
  return total;
}
function evictIfNeeded(incomingSize) {
  const currentSize = getCacheSize();
  if (currentSize + incomingSize <= MAX_CACHE_SIZE) return;
  evictOldest(Math.ceil((currentSize + incomingSize - MAX_CACHE_SIZE) / 2e3));
}
function evictOldest(n) {
  const entries = getAllCacheKeys().map((key) => {
    try {
      const entry = JSON.parse(localStorage.getItem(key));
      return { key, lastAccess: entry.lastAccess || 0 };
    } catch (e) {
      return { key, lastAccess: 0 };
    }
  });
  entries.sort((a, b) => a.lastAccess - b.lastAccess);
  entries.slice(0, n).forEach((e) => localStorage.removeItem(e.key));
}
export {
  cacheKey as c,
  getCached as g,
  setCache as s
};
