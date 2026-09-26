function boundedNumber(value, maximum = Number.MAX_SAFE_INTEGER) {
  return Number.isFinite(value) ? Math.max(0, Math.min(maximum, Number(value))) : 0;
}

function normalizeSafeArea(value = {}) {
  return {
    top: boundedNumber(value.top),
    right: boundedNumber(value.right),
    bottom: boundedNumber(value.bottom),
    left: boundedNumber(value.left),
  };
}

export function buildViewportMetrics({
  width,
  height,
  devicePixelRatio = 1,
  safeArea,
  coarsePointer = false,
  fullscreen = false,
} = {}) {
  const cssWidth = boundedNumber(width);
  const cssHeight = boundedNumber(height);
  const normalizedDpr = Math.max(1, Math.min(4, boundedNumber(devicePixelRatio) || 1));
  const orientation = cssWidth >= cssHeight ? 'landscape' : 'portrait';
  const mobile = Boolean(coarsePointer);

  return {
    cssWidth,
    cssHeight,
    devicePixelRatio: normalizedDpr,
    safeArea: normalizeSafeArea(safeArea),
    coarsePointer: mobile,
    fullscreen: Boolean(fullscreen),
    orientation,
    portraitBlocked: mobile && cssHeight > cssWidth,
  };
}

export function readSafeAreaInsets(documentLike = document) {
  const probe = documentLike.createElement('div');
  probe.style.cssText = [
    'position:fixed',
    'visibility:hidden',
    'pointer-events:none',
    'padding-top:env(safe-area-inset-top,0px)',
    'padding-right:env(safe-area-inset-right,0px)',
    'padding-bottom:env(safe-area-inset-bottom,0px)',
    'padding-left:env(safe-area-inset-left,0px)',
  ].join(';');
  documentLike.body.append(probe);
  const style = documentLike.defaultView.getComputedStyle(probe);
  const safeArea = {
    top: Number.parseFloat(style.paddingTop),
    right: Number.parseFloat(style.paddingRight),
    bottom: Number.parseFloat(style.paddingBottom),
    left: Number.parseFloat(style.paddingLeft),
  };
  probe.remove();
  return normalizeSafeArea(safeArea);
}

export function readViewportMetrics(windowLike = window, documentLike = document) {
  const viewport = windowLike.visualViewport;
  return buildViewportMetrics({
    width: viewport?.width ?? windowLike.innerWidth,
    height: viewport?.height ?? windowLike.innerHeight,
    devicePixelRatio: windowLike.devicePixelRatio,
    safeArea: readSafeAreaInsets(documentLike),
    coarsePointer: windowLike.matchMedia?.('(pointer: coarse)').matches === true,
    fullscreen: Boolean(documentLike.fullscreenElement),
  });
}

export async function requestImmersiveLandscape(documentLike = document, screenLike = screen) {
  try {
    if (!documentLike.fullscreenElement && documentLike.documentElement.requestFullscreen) {
      await documentLike.documentElement.requestFullscreen();
    }
  } catch {
    // A browser may refuse fullscreen even after a gesture. The world remains
    // usable in visual-viewport mode.
  }

  try {
    await screenLike.orientation?.lock?.('landscape');
  } catch {
    // Orientation lock is optional on mobile browsers and PWAs.
  }
}
