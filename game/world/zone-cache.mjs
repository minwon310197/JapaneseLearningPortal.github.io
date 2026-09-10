/** SHA-256 is checked on every cache read, not merely on first download. */
export async function loadVerifiedPack(entry, { cache, base, fetcher = fetch, subtle = globalThis.crypto.subtle } = {}) {
  if (!entry || !/^packs\/[a-z][a-z0-9_-]*\.pck$/.test(entry.url) || !Number.isSafeInteger(entry.bytes) || entry.bytes < 1 || !/^[a-f0-9]{64}$/.test(entry.sha256)) {
    throw new Error('Invalid zone pack path or integrity metadata');
  }
  const url = new URL(entry.url, base).href;
  async function verified(response) {
    if (!response?.ok) throw new Error(`Zone download failed (${response?.status ?? 'missing'})`);
    const buffer = await response.arrayBuffer();
    if (buffer.byteLength !== entry.bytes) throw new Error('Zone pack integrity: size mismatch');
    const digest = Array.from(new Uint8Array(await subtle.digest('SHA-256', buffer)), byte => byte.toString(16).padStart(2, '0')).join('');
    if (digest !== entry.sha256) throw new Error('Zone pack integrity: SHA-256 mismatch');
    return buffer;
  }
  if (cache) {
    const cached = await cache.match(url);
    if (cached) {
      try { return await verified(cached); } catch { await cache.delete(url); }
    }
  }
  const response = await fetcher(url, { signal: AbortSignal.timeout(30000) });
  const data = await verified(response);
  if (cache) {
    try { await cache.put(url, new Response(data, { headers: { 'Content-Type': 'application/octet-stream' } })); } catch { /* Quota/private-mode failure does not invalidate a verified pack. */ }
  }
  return data;
}
