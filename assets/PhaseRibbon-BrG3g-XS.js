import { r as reactExports } from "./vendor-react-BYxMSDiB.js";
import { y as srs } from "./feature-3d-hud-CYISTbY6.js";
import "./TrainerTopBar-Ht4KBG1w.js";
import { a8 as PHASES } from "./index-D1BqAvip.js";
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function categorize(items, getKey, now) {
  const due = [];
  const fresh = [];
  const review = [];
  for (const item of items) {
    const key = getKey == null ? void 0 : getKey(item);
    if (!key) {
      fresh.push(item);
      continue;
    }
    let state = null;
    try {
      state = srs.stateFor(key);
    } catch (e) {
    }
    if (!state) {
      fresh.push(item);
      continue;
    }
    if (state.dueAt <= now) due.push(item);
    else review.push(item);
  }
  return { due, fresh, review };
}
function useSrsAwareBatch(items, {
  maxItems = 10,
  getKey,
  weights = { overdue: 0.5, new: 0.3, review: 0.2 },
  enabled = true,
  sessionKey = 0,
  now
} = {}) {
  const stableItemsRef = reactExports.useRef(null);
  if ((items == null ? void 0 : items.length) && stableItemsRef.current !== items) stableItemsRef.current = items;
  return reactExports.useMemo(() => {
    var _a, _b, _c;
    const src = stableItemsRef.current;
    if (!(src == null ? void 0 : src.length)) return [];
    const n = Math.max(1, Math.min(maxItems, src.length));
    if (!enabled || typeof getKey !== "function") {
      return shuffleArray(src).slice(0, n);
    }
    const t = Number.isFinite(now) ? now : Date.now();
    const { due, fresh, review } = categorize(src, getKey, t);
    if (due.length === 0 && review.length === 0) {
      return shuffleArray(src).slice(0, n);
    }
    const wOverdue = Math.max(0, (_a = weights.overdue) != null ? _a : 0.5);
    const wNew = Math.max(0, (_b = weights.new) != null ? _b : 0.3);
    const wReview = Math.max(0, (_c = weights.review) != null ? _c : 0.2);
    const wSum = wOverdue + wNew + wReview || 1;
    let dueTarget = Math.round(n * wOverdue / wSum);
    let freshTarget = Math.round(n * wNew / wSum);
    let reviewTarget = n - dueTarget - freshTarget;
    const dueShuffled = shuffleArray(due);
    const freshShuffled = shuffleArray(fresh);
    const reviewShuffled = shuffleArray(review);
    const picks = [];
    const takeDue = Math.min(dueTarget, dueShuffled.length);
    picks.push(...dueShuffled.slice(0, takeDue));
    const takeFresh = Math.min(freshTarget, freshShuffled.length);
    picks.push(...freshShuffled.slice(0, takeFresh));
    const takeReview = Math.min(reviewTarget, reviewShuffled.length);
    picks.push(...reviewShuffled.slice(0, takeReview));
    const leftovers = [
      ...dueShuffled.slice(takeDue),
      ...freshShuffled.slice(takeFresh),
      ...reviewShuffled.slice(takeReview)
    ];
    let i = 0;
    while (picks.length < n && i < leftovers.length) {
      picks.push(leftovers[i++]);
    }
    return shuffleArray(picks);
  }, [sessionKey, maxItems, enabled, getKey, now, weights.overdue, weights.new, weights.review]);
}
({
  [PHASES.WARMUP]: {},
  [PHASES.CORE]: {},
  [PHASES.BOSS]: {},
  [PHASES.COOLDOWN]: {}
});
export {
  shuffleArray as s,
  useSrsAwareBatch as u
};
