import { j as jsxRuntimeExports, r as reactExports } from "./vendor-react-DMamQVB4.js";
import { a as acquireHaruWorldSession, o as openHaruWorldDatabase, l as loadHaruWorldRecord, p as pullHaruWorldCloud, b as pushHaruWorldCloud, c as writeHaruWorldRecord, w as worldOwner, v as validateHaruWorldSave, d as applyHaruWorldGmCommand } from "./haru-world-storage-Dh30TKk6.js";
import { b6 as signInWithGoogle, b7 as signOut, v as supabase, aq as isSupabaseConfigured, b8 as useHaruWorldAuth, b9 as useIsAdmin } from "./index-CS9cjAs1.js";
import { H as HARU_WORLD_ADMIN_TABS } from "./haru-world-admin-tabs-CMe6y1wi.js";
import { H as HARU_WORLD_ACTIVITIES, r as resolveHaruWorldLegacyActivity, h as haruWorldActivityHref, a as resolveHaruWorldActivity } from "./haru-world-activity-catalog-5ZfG2j7n.js";
import { c as useLocation, a as useNavigate } from "./vendor-router-udyIeVgQ.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-MeSkysD6.js";
const HARU_WORLD_CHANNEL = "haru-world";
const HARU_WORLD_PROTOCOL_VERSION = 1;
const PRIVATE_FIELD_PATTERN = /(?:^|_)(?:token|jwt|secret|password|service[_-]?role|access[_-]?token|refresh[_-]?token|email)(?:$|_)/i;
function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function containsPrivateField(value) {
  if (Array.isArray(value)) return value.some(containsPrivateField);
  if (!isRecord(value)) return false;
  return Object.entries(value).some(([key, nested]) => PRIVATE_FIELD_PATTERN.test(key) || containsPrivateField(nested));
}
function validIdentifier(value) {
  return typeof value === "string" && value.length > 0 && value.length <= 160;
}
function createHaruWorldEnvelope({ sessionId, requestId, type, payload = {} }) {
  if (!validIdentifier(sessionId)) throw new TypeError("sessionId must be a bounded non-empty string");
  if (!validIdentifier(type)) throw new TypeError("type must be a bounded non-empty string");
  if (requestId !== void 0 && !validIdentifier(requestId)) throw new TypeError("requestId must be a bounded non-empty string");
  if (!isRecord(payload) || containsPrivateField(payload)) throw new TypeError("payload must be a credential-free object");
  const envelope = {
    channel: HARU_WORLD_CHANNEL,
    protocolVersion: HARU_WORLD_PROTOCOL_VERSION,
    sessionId,
    type,
    payload: structuredClone(payload)
  };
  if (requestId !== void 0) envelope.requestId = requestId;
  return envelope;
}
function parseHaruWorldEnvelope(value, { sessionId, types = [] } = {}) {
  if (!isRecord(value) || value.channel !== HARU_WORLD_CHANNEL || value.protocolVersion !== HARU_WORLD_PROTOCOL_VERSION) {
    return { ok: false, code: "INVALID_ENVELOPE" };
  }
  if (value.sessionId !== sessionId) return { ok: false, code: "STALE_SESSION" };
  if (!validIdentifier(value.type) || !types.includes(value.type)) return { ok: false, code: "UNSUPPORTED_TYPE" };
  if (value.requestId !== void 0 && !validIdentifier(value.requestId)) return { ok: false, code: "INVALID_REQUEST_ID" };
  if (!isRecord(value.payload)) return { ok: false, code: "INVALID_PAYLOAD" };
  if (containsPrivateField(value.payload)) return { ok: false, code: "PRIVATE_FIELD" };
  return { ok: true, envelope: value };
}
function seedReducedMotionPreference(matchMedia = typeof window !== "undefined" ? ((_a) => (_a = window.matchMedia) == null ? void 0 : _a.bind(window))() : null, storage = typeof localStorage !== "undefined" ? localStorage : null) {
  if (!matchMedia || !storage) return false;
  try {
    let raw = {};
    try {
      raw = JSON.parse(storage.getItem("n4-haru:presentation:v1") || "{}");
    } catch (e) {
      raw = {};
    }
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) raw = {};
    if ("reduceFlash" in raw || "reduceShake" in raw) return false;
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    storage.setItem("n4-haru:presentation:v1", JSON.stringify({ vfxDensity: "low", reduceFlash: true, reduceShake: true, ...raw }));
    return true;
  } catch (e) {
    return false;
  }
}
if (typeof window !== "undefined") seedReducedMotionPreference();
const FROM_WORLD = Object.freeze([
  "ready",
  "save_commit",
  "auth_request",
  "admin_revalidate",
  "platform_request",
  "admin_request",
  "telemetry",
  "fatal_error",
  "loading_progress",
  "shortcut"
]);
const ADMIN_MUTATIONS = /* @__PURE__ */ new Set([
  "announcement_upsert",
  "challenge_create",
  "challenge_delete",
  "message_send",
  "issue_status_set",
  "config_set"
]);
const AI_FEATURE_IDS = new Set(HARU_WORLD_ACTIVITIES.filter((entry) => entry.kind === "ai").map((entry) => entry.id.replace(/^ai\./, "")));
const WORLD_AI_SYSTEM_PROMPT = "Bạn là gia sư tiếng Nhật JLPT N4 cho người học Việt Nam. Trả lời ngắn gọn bằng tiếng Việt, nêu ví dụ tiếng Nhật chính xác khi hữu ích. Không yêu cầu hay tiết lộ thông tin đăng nhập.";
const WORLD_AI_FEATURE_INSTRUCTIONS = Object.freeze({
  chat: "Trò chuyện tự do nhưng luôn hướng về việc học N4.",
  grammar: "Giải thích cấu trúc ngữ pháp, điều kiện dùng và ví dụ N4.",
  examples: "Tạo ví dụ tiếng Nhật tự nhiên kèm bản dịch Việt.",
  conversation: "Luyện hội thoại ngắn, lần lượt từng lượt nói.",
  writing: "Sửa bài viết nhẹ nhàng, nêu lỗi và cách cải thiện.",
  roleplay: "Nhập vai tình huống thực tế và chờ người học trả lời.",
  analyze: "Phân tích câu theo thành phần, từ vựng và ngữ pháp.",
  advisor: "Đề xuất kế hoạch học ngắn, khả thi dựa trên câu hỏi.",
  freetalk: "Khuyến khích hội thoại tự do bằng tiếng Nhật N4.",
  "ai-quiz": "Tạo bài luyện ngắn, có đáp án và giải thích sau khi người học trả lời.",
  "ai-grammar-drill": "Tạo drill ngữ pháp N4 tăng dần độ khó.",
  "ai-mistakes": "Giúp nhận diện kiểu lỗi học tập và chiến lược khắc phục.",
  "ai-navigator": "Hướng dẫn chọn hoạt động Haru phù hợp mục tiêu học.",
  "ai-jlpt-predictor": "Đưa ước lượng thận trọng, nêu rõ đây không phải điểm thi chính thức.",
  "ai-wordmap": "Xây sơ đồ liên tưởng từ vựng bằng danh sách gọn.",
  "ai-story": "Cùng sáng tác truyện ngắn tiếng Nhật mức N4.",
  "ai-news": "Đơn giản hóa hoặc giải thích tin tiếng Nhật ở mức N4.",
  "ai-lyrics": "Phân tích motif ngôn ngữ, không chép lời bài hát có bản quyền.",
  "ai-diary": "Phản hồi nhật ký bằng nhận xét mang tính học tập, tích cực.",
  "ai-scene": "Mô phỏng tình huống đời thường và giữ vai trò rõ ràng.",
  "ai-kanji-detective": "Phân tích Kanji: bộ thủ, âm đọc, nghĩa và mẹo nhớ."
});
function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function freshRequestId(prefix) {
  return `${prefix}:${crypto.randomUUID()}`;
}
let globalSessionCleanup = Promise.resolve();
const DEFAULT_ADMIN_CAPABILITY = Object.freeze({ verified: false, allowed: false });
function HaruWorldV1Host({
  userId,
  adminCapability = DEFAULT_ADMIN_CAPABILITY,
  initialActivityId = null,
  initialPanelId = null,
  onWorldEvent,
  exitRequested = false,
  cancelRequested = false,
  cancelToken = 0,
  onExitComplete = null
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    HaruWorldV1Session,
    {
      userId: userId || null,
      adminCapability,
      initialActivityId,
      initialPanelId,
      onWorldEvent,
      exitRequested,
      cancelRequested,
      cancelToken,
      onExitComplete
    },
    userId || "guest"
  );
}
function HaruWorldV1Session({
  userId,
  adminCapability,
  initialActivityId,
  initialPanelId,
  onWorldEvent,
  exitRequested = false,
  cancelRequested = false,
  cancelToken = 0,
  onExitComplete = null
}) {
  const frame = reactExports.useRef(null);
  const events = reactExports.useRef(onWorldEvent);
  const exitCallback = reactExports.useRef(onExitComplete);
  const exitPending = reactExports.useRef(null);
  const lastPersistedRevision = reactExports.useRef(0);
  const lastPersistedExitRevision = reactExports.useRef(null);
  const cancelGeneration = reactExports.useRef(0);
  const lastHandledCancelToken = reactExports.useRef(cancelToken);
  const exitAttemptCounter = reactExports.useRef(0);
  const activeExitAttempt = reactExports.useRef(null);
  const hasDispatchedExit = reactExports.useRef(false);
  const hasHadCancellationOrRetry = reactExports.useRef(false);
  const capabilityGeneration = reactExports.useRef(0);
  const declaredAdminCapability = reactExports.useRef(false);
  const isFirstCapabilityCheck = reactExports.useRef(true);
  const sessionCleanup = reactExports.useRef(Promise.resolve());
  events.current = onWorldEvent;
  exitCallback.current = onExitComplete;
  const [attempt, setAttempt] = reactExports.useState(0);
  const [sessionId, setSessionId] = reactExports.useState(() => crypto.randomUUID());
  const [ready, setReady] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [loadingProgress, setLoadingProgress] = reactExports.useState(null);
  const retryBtnRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a;
    if (error) {
      (_a = retryBtnRef.current) == null ? void 0 : _a.focus();
    }
  }, [error]);
  const url = reactExports.useMemo(() => {
    const nextUrl = new URL("game/world/index.html", document.baseURI);
    nextUrl.searchParams.set("sessionId", sessionId);
    nextUrl.searchParams.set("attempt", String(attempt));
    if (["localhost", "127.0.0.1", "[::1]"].includes(location.hostname) && new URLSearchParams(location.search).get("qa") === "1") {
      nextUrl.searchParams.set("qa", "1");
    }
    return nextUrl;
  }, [attempt, sessionId]);
  const send = reactExports.useCallback((type, payload = {}, requestId) => {
    var _a, _b;
    try {
      const envelope = createHaruWorldEnvelope({ sessionId, type, payload, ...requestId ? { requestId } : {} });
      (_b = (_a = frame.current) == null ? void 0 : _a.contentWindow) == null ? void 0 : _b.postMessage(envelope, location.origin);
      return true;
    } catch (cause) {
      setError(`Bridge Haru World không hợp lệ: ${cause.message || cause}`);
      return false;
    }
  }, [sessionId]);
  reactExports.useEffect(() => {
    declaredAdminCapability.current = (adminCapability == null ? void 0 : adminCapability.verified) === true && (adminCapability == null ? void 0 : adminCapability.allowed) === true;
    if (isFirstCapabilityCheck.current) {
      isFirstCapabilityCheck.current = false;
      return;
    }
    if (!declaredAdminCapability.current) {
      capabilityGeneration.current += 1;
      send("admin_capability", { verified: false, allowed: false });
    } else {
      window.dispatchEvent(new Event("haru-world-capability-refresh"));
    }
  }, [adminCapability == null ? void 0 : adminCapability.allowed, adminCapability == null ? void 0 : adminCapability.verified, send]);
  reactExports.useEffect(() => {
    if (!ready) return;
    if (initialActivityId) send("realtime_event", { kind: "open_activity", activityId: initialActivityId });
    if (initialPanelId === "admin") send("realtime_event", { kind: "open_admin" });
  }, [initialActivityId, initialPanelId, ready, send]);
  reactExports.useEffect(() => {
    const isTokenCancel = cancelToken > 0 && cancelToken !== lastHandledCancelToken.current;
    if (cancelRequested || isTokenCancel) {
      hasHadCancellationOrRetry.current = true;
      cancelGeneration.current += 1;
      lastHandledCancelToken.current = cancelToken;
      lastPersistedExitRevision.current = null;
      hasDispatchedExit.current = false;
      activeExitAttempt.current = null;
      if (exitPending.current) {
        clearTimeout(exitPending.current.timer);
        exitPending.current = null;
      }
      send("realtime_event", { kind: "cancel_exit" });
    }
  }, [cancelRequested, cancelToken, send]);
  reactExports.useEffect(() => {
    var _a, _b;
    if (!exitRequested) {
      lastPersistedExitRevision.current = null;
      if (exitPending.current) {
        hasHadCancellationOrRetry.current = true;
        cancelGeneration.current += 1;
        clearTimeout(exitPending.current.timer);
        exitPending.current = null;
      }
      return;
    }
    if (!ready) {
      (_a = exitCallback.current) == null ? void 0 : _a.call(exitCallback, { ok: true, revision: null });
      return;
    }
    if (lastPersistedExitRevision.current !== null) {
      (_b = exitCallback.current) == null ? void 0 : _b.call(exitCallback, { ok: true, revision: lastPersistedExitRevision.current });
      return;
    }
    if (exitPending.current) return;
    exitAttemptCounter.current += 1;
    const attemptId = exitAttemptCounter.current;
    activeExitAttempt.current = attemptId;
    hasDispatchedExit.current = true;
    const currentCancelGen = cancelGeneration.current;
    const timer = setTimeout(() => {
      var _a2, _b2;
      if (((_a2 = exitPending.current) == null ? void 0 : _a2.attemptId) === attemptId && cancelGeneration.current === currentCancelGen) {
        exitPending.current = null;
        (_b2 = exitCallback.current) == null ? void 0 : _b2.call(exitCallback, { ok: false, error: "SAVE_TIMEOUT" });
      }
    }, 3500);
    exitPending.current = { timer, attemptId, cancelToken, cancelGeneration: currentCancelGen };
    send("realtime_event", { kind: "exit", attemptId });
  }, [cancelToken, exitRequested, ready, send]);
  reactExports.useEffect(() => {
    var _a;
    let active = true;
    let db;
    let releaseSession;
    let record;
    let gameReady = false;
    let initialized = false;
    let bootstrapSent = false;
    let nativeReady = false;
    let lifecycleQueue = Promise.resolve();
    let adminAllowed = false;
    const requests = /* @__PURE__ */ new Map();
    const owner = worldOwner(userId);
    const post = (type, payload = {}, requestId) => {
      if (!active) return false;
      if (requestId && requests.has(requestId)) requests.set(requestId, { type, payload });
      return send(type, payload, requestId);
    };
    const report = (cause) => {
      if (!active) return;
      setError((cause == null ? void 0 : cause.message) || "Không thể mở Haru World.");
      post("realtime_event", { kind: "host_error" });
    };
    const queue = (work) => {
      lifecycleQueue = lifecycleQueue.then(async () => {
        if (active) await work();
      }).catch(report);
      return lifecycleQueue;
    };
    const emitAdminCapability = (value, checking = false) => {
      adminAllowed = value === true;
      post("admin_capability", { verified: adminAllowed, allowed: adminAllowed, ...checking ? { checking: true } : {} });
    };
    const revalidateAdmin = async () => {
      if (!active || !userId || !isSupabaseConfigured) return false;
      try {
        const { data, error: rpcError } = await supabase.rpc("is_current_user_admin");
        return !rpcError && data === true;
      } catch (e) {
        return false;
      }
    };
    const revalidateAndEmitCapability = async () => {
      const generation = ++capabilityGeneration.current;
      if (!declaredAdminCapability.current) {
        emitAdminCapability(false);
        return false;
      }
      emitAdminCapability(false, true);
      const capability = await revalidateAdmin();
      if (!active || generation !== capabilityGeneration.current) {
        return false;
      }
      emitAdminCapability(capability);
      return capability;
    };
    const bootstrap = async () => {
      if (!active || initialized || !gameReady || !record) return;
      initialized = true;
      await revalidateAndEmitCapability();
      if (!active) return;
      send("auth_state", { authenticated: Boolean(userId), owner: userId ? "account" : "guest" });
      send("bootstrap_start", {
        revision: record.cloudRevision,
        contentVersion: record.save.contentVersion,
        chunkCount: 1
      });
      send("bootstrap_chunk", { index: 0, save: record.save });
      send("bootstrap_end", {});
      bootstrapSent = true;
      if (record.conflict) send("realtime_event", { kind: "save_conflict", revision: record.conflict.revision });
    };
    const boot = (async () => {
      await Promise.allSettled([sessionCleanup.current, globalSessionCleanup]);
      if (!active) return;
      releaseSession = await acquireHaruWorldSession(owner);
      if (!active) return;
      db = await openHaruWorldDatabase();
      if (!active) return;
      record = await loadHaruWorldRecord(db, owner);
      if (!active) return;
      lastPersistedRevision.current = record.cloudRevision;
      if (userId) {
        try {
          record = await pullHaruWorldCloud(record, userId);
          if (!active) return;
          lastPersistedRevision.current = record.cloudRevision;
          if (!record.conflict && record.cloudRevision === 0) {
            record = await pushHaruWorldCloud({ ...record, dirty: true }, userId);
            if (!active) return;
            lastPersistedRevision.current = record.cloudRevision;
            if (!record.conflict) {
              record = await writeHaruWorldRecord(db, owner, record);
              lastPersistedRevision.current = record.cloudRevision;
            }
          }
        } catch (e) {
          post("realtime_event", { kind: "cloud_warning" });
        }
      }
      await bootstrap();
    })().catch(report);
    const replySave = (requestId, payload) => post("save_result", { requestId, ...payload }, requestId);
    const replyAdmin = (requestId, payload) => post("admin_result", { requestId, ...payload }, requestId);
    const persistWorldSave = async (payload, requestId) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      const isExitCommit = (payload == null ? void 0 : payload.reason) === "exit";
      const commitAttemptId = payload == null ? void 0 : payload.attemptId;
      (_b = (_a2 = exitPending.current) == null ? void 0 : _a2.attemptId) != null ? _b : null;
      const arrivalCancelGeneration = cancelGeneration.current;
      lastHandledCancelToken.current;
      const isCurrentAttemptAuthoritative = () => {
        if (!isExitCommit || !exitPending.current) return false;
        if (commitAttemptId !== void 0) {
          return exitPending.current.attemptId === commitAttemptId && cancelGeneration.current === arrivalCancelGeneration;
        }
        const hasCancellationOrRetry = cancelGeneration.current > 0 || lastHandledCancelToken.current > 0 || cancelToken > 0 || exitAttemptCounter.current > 1 || hasHadCancellationOrRetry.current || cancelGeneration.current !== arrivalCancelGeneration;
        if (hasCancellationOrRetry) {
          return false;
        }
        return exitPending.current.attemptId === 1;
      };
      const isQaHost = typeof window !== "undefined" && ["localhost", "127.0.0.1", "[::1]"].includes((_c = window.location) == null ? void 0 : _c.hostname) && new URLSearchParams((_d = window.location) == null ? void 0 : _d.search).get("qa") === "1";
      const rawDelay = typeof window !== "undefined" ? window.__HARU_QA_SAVE_DELAY_MS__ : 0;
      if (isQaHost && Number.isFinite(rawDelay) && rawDelay > 0) {
        const targetReason = window.__HARU_QA_SAVE_DELAY_REASON__;
        if (!targetReason || targetReason === payload.reason) {
          const boundedDelay = Math.min(1e4, Math.max(0, rawDelay));
          await new Promise((resolve) => setTimeout(resolve, boundedDelay));
          if (!active) return;
        }
      }
      if (!active) return;
      if (!record || record.conflict) {
        replySave(requestId, { ok: false, error: "SAVE_CONFLICT", revision: (_g = (_f = (_e = record == null ? void 0 : record.conflict) == null ? void 0 : _e.revision) != null ? _f : record == null ? void 0 : record.cloudRevision) != null ? _g : 0 });
        if (isCurrentAttemptAuthoritative()) {
          clearTimeout(exitPending.current.timer);
          exitPending.current = null;
          (_k = exitCallback.current) == null ? void 0 : _k.call(exitCallback, { ok: false, error: "SAVE_CONFLICT", revision: (_j = (_i = (_h = record == null ? void 0 : record.conflict) == null ? void 0 : _h.revision) != null ? _i : record == null ? void 0 : record.cloudRevision) != null ? _j : 0 });
        }
        return;
      }
      if (payload.expectedRevision !== record.cloudRevision) {
        replySave(requestId, { ok: false, error: "STALE_REVISION", revision: record.cloudRevision });
        if (isCurrentAttemptAuthoritative()) {
          clearTimeout(exitPending.current.timer);
          exitPending.current = null;
          (_l = exitCallback.current) == null ? void 0 : _l.call(exitCallback, { ok: false, error: "STALE_REVISION", revision: record.cloudRevision });
        }
        return;
      }
      const validation = validateHaruWorldSave(payload.save);
      if (!validation.ok) {
        replySave(requestId, { ok: false, error: validation.code, revision: record.cloudRevision });
        if (isCurrentAttemptAuthoritative()) {
          clearTimeout(exitPending.current.timer);
          exitPending.current = null;
          (_m = exitCallback.current) == null ? void 0 : _m.call(exitCallback, { ok: false, error: validation.code, revision: record.cloudRevision });
        }
        return;
      }
      record = await writeHaruWorldRecord(db, owner, { ...record, save: structuredClone(payload.save), dirty: Boolean(userId) });
      lastPersistedRevision.current = record.cloudRevision;
      if (!active) return;
      if (userId) {
        try {
          record = await pushHaruWorldCloud(record, userId);
          lastPersistedRevision.current = record.cloudRevision;
          if (!active) return;
          if (!record.conflict && !record.dirty) {
            record = await writeHaruWorldRecord(db, owner, record);
            lastPersistedRevision.current = record.cloudRevision;
          }
        } catch (e) {
          post("realtime_event", { kind: "cloud_warning" });
        }
      }
      if (record.conflict) {
        replySave(requestId, { ok: false, error: "SAVE_CONFLICT", revision: record.conflict.revision });
        if (isCurrentAttemptAuthoritative()) {
          clearTimeout(exitPending.current.timer);
          exitPending.current = null;
          (_n = exitCallback.current) == null ? void 0 : _n.call(exitCallback, { ok: false, error: "SAVE_CONFLICT", revision: record.conflict.revision });
        }
        return;
      }
      replySave(requestId, { ok: true, revision: record.cloudRevision, save: record.save });
      if (isExitCommit) {
        if (!isCurrentAttemptAuthoritative()) {
          return;
        }
        lastPersistedExitRevision.current = record.cloudRevision;
        hasDispatchedExit.current = false;
        if (exitPending.current) {
          clearTimeout(exitPending.current.timer);
          exitPending.current = null;
          (_o = exitCallback.current) == null ? void 0 : _o.call(exitCallback, { ok: true, revision: record.cloudRevision });
        }
      } else {
        lastPersistedExitRevision.current = null;
      }
    };
    const runAdminRequest = async (payload, requestId) => {
      if (!userId || !isObject(payload) || !["gm_command", "admin_tab", "admin_mutation"].includes(payload.operation)) {
        replyAdmin(requestId, { ok: false, error: "ADMIN_REQUIRED" });
        return;
      }
      const capability = await revalidateAndEmitCapability();
      if (!active) return;
      if (!capability || !adminAllowed) {
        replyAdmin(requestId, { ok: false, error: "ADMIN_REQUIRED" });
        return;
      }
      if (payload.operation === "admin_tab") {
        const tabId = String(payload.tabId || "");
        if (!HARU_WORLD_ADMIN_TABS.some((tab) => tab.id === tabId)) {
          replyAdmin(requestId, { ok: false, error: "INVALID_ADMIN_TAB" });
          return;
        }
        const page = Number.isInteger(payload.page) ? payload.page : 0;
        const pageSize = Number.isInteger(payload.pageSize) ? payload.pageSize : 25;
        if (page < 0 || page > 1e4 || pageSize < 1 || pageSize > 50) {
          replyAdmin(requestId, { ok: false, tabId, error: "INVALID_ADMIN_PAGINATION" });
          return;
        }
        const generation = capabilityGeneration.current;
        try {
          const { data, error: rpcError } = await supabase.rpc("load_haru_world_admin_snapshot", {
            requested_tab_id: tabId,
            requested_page: page,
            requested_page_size: pageSize
          });
          if (!active) return;
          if (generation !== capabilityGeneration.current || !declaredAdminCapability.current || !adminAllowed) {
            replyAdmin(requestId, { ok: false, tabId, error: "ADMIN_REQUIRED" });
            return;
          }
          if (rpcError || !isObject(data) || data.ok !== true || data.tabId !== tabId || data.page !== page || data.pageSize !== pageSize || !Array.isArray(data.rows) || !isObject(data.summary)) {
            replyAdmin(requestId, { ok: false, tabId, error: "ADMIN_SNAPSHOT_REJECTED" });
            return;
          }
          replyAdmin(requestId, { ok: true, tabId, snapshot: data });
        } catch (e) {
          replyAdmin(requestId, { ok: false, tabId, error: "ADMIN_SNAPSHOT_UNAVAILABLE" });
        }
        return;
      }
      if (payload.operation === "admin_mutation") {
        const mutation = String(payload.mutation || "");
        const mutationPayload = payload.payload;
        const forbiddenPayloadKeys = /* @__PURE__ */ new Set(["save", "table", "query", "sql", "role", "raw"]);
        if (!ADMIN_MUTATIONS.has(mutation) || !isObject(mutationPayload) || Object.keys(mutationPayload).some((key) => forbiddenPayloadKeys.has(key))) {
          replyAdmin(requestId, { ok: false, error: "INVALID_ADMIN_MUTATION" });
          return;
        }
        const generation = capabilityGeneration.current;
        try {
          const { data, error: rpcError } = await supabase.rpc("apply_haru_world_admin_mutation", {
            requested_operation: mutation,
            requested_payload: mutationPayload
          });
          if (!active) return;
          if (generation !== capabilityGeneration.current || !declaredAdminCapability.current || !adminAllowed) {
            replyAdmin(requestId, { ok: false, error: "ADMIN_REQUIRED" });
            return;
          }
          if (rpcError || !isObject(data) || data.ok !== true || data.operation !== mutation || data.resultCode !== "APPLIED" || !("resourceId" in data) || !(data.resourceId === null || typeof data.resourceId === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(data.resourceId))) {
            replyAdmin(requestId, { ok: false, error: "ADMIN_MUTATION_REJECTED" });
            return;
          }
          replyAdmin(requestId, {
            ok: true,
            operation: data.operation,
            resourceId: data.resourceId,
            resultCode: data.resultCode
          });
        } catch (e) {
          replyAdmin(requestId, { ok: false, error: "ADMIN_MUTATION_UNAVAILABLE" });
        }
        return;
      }
      if ((record == null ? void 0 : record.conflict) || payload.expectedRevision !== (record == null ? void 0 : record.cloudRevision) || typeof payload.command !== "string" || !isObject(payload.payload)) {
        replyAdmin(requestId, { ok: false, error: "STALE_REVISION" });
        return;
      }
      try {
        const generation = capabilityGeneration.current;
        const authoritative = await applyHaruWorldGmCommand(record, userId, payload.command, payload.payload);
        if (!active) return;
        record = await writeHaruWorldRecord(db, owner, authoritative);
        if (generation !== capabilityGeneration.current || !declaredAdminCapability.current) {
          replyAdmin(requestId, { ok: false, error: "ADMIN_REQUIRED", revision: record.cloudRevision, save: record.save });
          return;
        }
        replyAdmin(requestId, { ok: true, revision: record.cloudRevision, save: record.save });
      } catch (e) {
        replyAdmin(requestId, { ok: false, error: "ADMIN_COMMAND_REJECTED" });
      }
    };
    const platformRequest = async (payload, requestId) => {
      var _a2, _b, _c, _d, _e, _f;
      const operation = payload == null ? void 0 : payload.operation;
      try {
        if (operation === "request_fullscreen") {
          await ((_b = (_a2 = document.documentElement).requestFullscreen) == null ? void 0 : _b.call(_a2));
        } else if (operation === "lock_landscape") {
          await ((_d = (_c = screen.orientation) == null ? void 0 : _c.lock) == null ? void 0 : _d.call(_c, "landscape"));
        } else if (operation === "tts") {
          const text = String(payload.text || "").slice(0, 500);
          if (!text || !globalThis.speechSynthesis) throw new Error("UNAVAILABLE");
          speechSynthesis.cancel();
          speechSynthesis.speak(new SpeechSynthesisUtterance(text));
        } else if (operation === "speech_recognition") {
          const language = payload.language === "ja-JP" ? "ja-JP" : null;
          const Recognition = globalThis.SpeechRecognition || globalThis.webkitSpeechRecognition;
          if (!language || !Recognition) throw new Error("UNAVAILABLE");
          const transcript = await new Promise((resolveTranscript, rejectTranscript) => {
            const recognition = new Recognition();
            let settled = false;
            const settle = (callback, value) => {
              if (settled) return;
              settled = true;
              callback(value);
            };
            recognition.lang = language;
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            recognition.continuous = false;
            recognition.onresult = (event) => {
              var _a3, _b2, _c2;
              const value = String(((_c2 = (_b2 = (_a3 = event == null ? void 0 : event.results) == null ? void 0 : _a3[0]) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.transcript) || "").trim();
              if (!value || value.length > 500) settle(rejectTranscript, new Error("INVALID_TRANSCRIPT"));
              else settle(resolveTranscript, value);
            };
            recognition.onerror = () => settle(rejectTranscript, new Error("SPEECH_RECOGNITION_FAILED"));
            recognition.onend = () => settle(rejectTranscript, new Error("SPEECH_RECOGNITION_ENDED"));
            try {
              recognition.start();
            } catch (error2) {
              settle(rejectTranscript, error2);
            }
          });
          post("platform_result", { ok: true, operation, transcript }, requestId);
          return;
        } else if (operation === "clipboard_write") {
          const text = String(payload.text || "").slice(0, 4096);
          if (!((_e = navigator.clipboard) == null ? void 0 : _e.writeText)) throw new Error("UNAVAILABLE");
          await navigator.clipboard.writeText(text);
        } else if (operation === "ai_request") {
          const feature = String(payload.feature || "");
          const prompt = String(payload.prompt || "").trim();
          if (!userId || !isSupabaseConfigured || !AI_FEATURE_IDS.has(feature) || !prompt || prompt.length > 2e3 || !((_f = supabase.functions) == null ? void 0 : _f.invoke)) {
            post("platform_result", { ok: false, operation, error: "AI_UNAVAILABLE" }, requestId);
            return;
          }
          const { data, error: aiError } = await supabase.functions.invoke("ai-proxy", {
            body: {
              messages: [
                { role: "system", content: `${WORLD_AI_SYSTEM_PROMPT}
${WORLD_AI_FEATURE_INSTRUCTIONS[feature] || ""}` },
                { role: "user", content: prompt }
              ],
              maxTokens: 700,
              temperature: 0.5
            }
          });
          const answer = typeof (data == null ? void 0 : data.text) === "string" ? data.text.trim().slice(0, 6e3) : "";
          if (aiError || !answer) {
            post("platform_result", { ok: false, operation, error: "AI_UNAVAILABLE" }, requestId);
            return;
          }
          post("platform_result", { ok: true, operation, text: answer }, requestId);
          return;
        } else {
          post("platform_result", { ok: false, error: "UNSUPPORTED_PLATFORM_REQUEST" }, requestId);
          return;
        }
        post("platform_result", { ok: true, operation }, requestId);
      } catch (e) {
        post("platform_result", { ok: false, error: "PLATFORM_REQUEST_FAILED" }, requestId);
      }
    };
    const receive = (event) => {
      var _a2, _b, _c, _d, _e, _f, _g;
      if (event.source !== ((_a2 = frame.current) == null ? void 0 : _a2.contentWindow) || event.origin !== location.origin) return;
      const parsed = parseHaruWorldEnvelope(event.data, { sessionId, types: FROM_WORLD });
      if (!parsed.ok) return;
      const { type, payload, requestId } = parsed.envelope;
      if (requestId) {
        if (requests.has(requestId)) {
          const reply = requests.get(requestId);
          if (reply) post(reply.type, reply.payload, requestId);
          return;
        }
        if (requests.size >= 4096) {
          report(new Error("Phiên Haru đã đạt giới hạn yêu cầu. Hãy tải lại để tiếp tục."));
          return;
        }
        requests.set(requestId, null);
      }
      if (type === "ready") {
        if (payload.phase === "bootstrapped") {
          if (!bootstrapSent || nativeReady) return;
          nativeReady = true;
          setReady(true);
          window.__HARU_WORLD_READY = true;
          (_b = events.current) == null ? void 0 : _b.call(events, { type: "world_ready" });
          window.dispatchEvent(new Event("haru-world-ready"));
          return;
        }
        gameReady = true;
        void bootstrap();
      } else if (type === "save_commit" && requestId) {
        void queue(() => persistWorldSave(payload, requestId));
      } else if (type === "admin_revalidate") {
        void queue(revalidateAndEmitCapability);
      } else if (type === "admin_request" && requestId) {
        void queue(() => runAdminRequest(payload, requestId));
      } else if (type === "platform_request" && requestId) {
        void queue(() => platformRequest(payload, requestId));
      } else if (type === "auth_request" && requestId) {
        void queue(async () => {
          try {
            if (payload.operation === "google_sign_in") await signInWithGoogle();
            else if (payload.operation === "sign_out") await signOut();
            else throw new Error("UNSUPPORTED_AUTH_REQUEST");
            post("platform_result", { ok: true, operation: payload.operation }, requestId);
          } catch (e) {
            post("platform_result", { ok: false, error: "AUTH_REQUEST_FAILED" }, requestId);
          }
        });
      } else if (type === "loading_progress") {
        const current = Number(payload.current);
        const total = Number(payload.total);
        if (Number.isFinite(current) && Number.isFinite(total) && total > 0 && current >= 0 && !payload.indeterminate) {
          const percent = Math.min(100, Math.max(0, Math.round(current / total * 100)));
          setLoadingProgress((prev) => prev === percent ? prev : percent);
        } else {
          setLoadingProgress((prev) => prev === null ? prev : null);
        }
      } else if (type === "fatal_error") {
        const detail = typeof (payload == null ? void 0 : payload.message) === "string" && payload.message.trim() ? payload.message.trim() : "Godot không thể tiếp tục phiên Haru World.";
        report(new Error(detail));
      } else if (type === "telemetry") {
        (_c = events.current) == null ? void 0 : _c.call(events, { type, payload });
        if ((payload == null ? void 0 : payload.event) === "exit_saved") {
          const ackRevision = Number.isInteger(payload.revision) ? payload.revision : (_e = (_d = lastPersistedExitRevision.current) != null ? _d : lastPersistedRevision.current) != null ? _e : 0;
          const telemetryAttemptId = payload.attemptId;
          const hasCancellationOrRetry = cancelGeneration.current > 0 || lastHandledCancelToken.current > 0 || cancelToken > 0 || hasHadCancellationOrRetry.current || exitAttemptCounter.current > 1;
          if (exitPending.current) {
            const isCorrelated = telemetryAttemptId !== void 0 ? exitPending.current.attemptId === telemetryAttemptId && cancelGeneration.current === exitPending.current.cancelGeneration : !hasCancellationOrRetry && exitPending.current.attemptId === 1;
            if (!isCorrelated) {
              return;
            }
            lastPersistedExitRevision.current = ackRevision;
            hasDispatchedExit.current = false;
            clearTimeout(exitPending.current.timer);
            exitPending.current = null;
            (_f = exitCallback.current) == null ? void 0 : _f.call(exitCallback, { ok: true, revision: ackRevision });
          } else {
            if (!hasCancellationOrRetry) {
              lastPersistedExitRevision.current = ackRevision;
            }
          }
        }
      } else if (type === "shortcut") {
        (_g = events.current) == null ? void 0 : _g.call(events, { type, payload });
      }
    };
    const visibility = () => {
      send("realtime_event", { kind: "visibility", hidden: document.hidden });
      if (!document.hidden) void queue(revalidateAndEmitCapability);
    };
    const refreshCapability = () => {
      void queue(revalidateAndEmitCapability);
    };
    const handleViewportChange = () => {
      send("realtime_event", { kind: "viewport_changed" });
    };
    window.__HARU_WORLD_READY = false;
    window.addEventListener("message", receive);
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("haru-world-capability-refresh", refreshCapability);
    window.addEventListener("resize", handleViewportChange, { passive: true });
    window.addEventListener("orientationchange", handleViewportChange, { passive: true });
    (_a = window.visualViewport) == null ? void 0 : _a.addEventListener("resize", handleViewportChange, { passive: true });
    return () => {
      var _a2;
      active = false;
      window.__HARU_WORLD_READY = false;
      if (exitPending.current) {
        clearTimeout(exitPending.current.timer);
        exitPending.current = null;
      }
      window.removeEventListener("message", receive);
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("haru-world-capability-refresh", refreshCapability);
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("orientationchange", handleViewportChange);
      (_a2 = window.visualViewport) == null ? void 0 : _a2.removeEventListener("resize", handleViewportChange);
      const cleanup = Promise.allSettled([boot, lifecycleQueue]).then(async () => {
        var _a3;
        await ((_a3 = db == null ? void 0 : db.close) == null ? void 0 : _a3.call(db));
        await (releaseSession == null ? void 0 : releaseSession());
      });
      sessionCleanup.current = cleanup;
      globalSessionCleanup = cleanup;
    };
  }, [send, sessionId, userId]);
  const retry = () => {
    hasHadCancellationOrRetry.current = true;
    cancelGeneration.current += 1;
    setError("");
    setLoadingProgress(null);
    setReady(false);
    lastPersistedExitRevision.current = null;
    hasDispatchedExit.current = false;
    activeExitAttempt.current = null;
    isFirstCapabilityCheck.current = true;
    if (exitPending.current) {
      clearTimeout(exitPending.current.timer);
      exitPending.current = null;
    }
    setSessionId(freshRequestId("world"));
    setAttempt((value) => value + 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-godot-host", "aria-label": "Haru World", "data-world-state": ready ? "ready" : "loading", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { ref: frame, src: url.href, title: "Haru World", allow: "fullscreen; autoplay; gamepad; clipboard-read; clipboard-write; microphone" }, attempt),
    !ready && !error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-godot-overlay", role: "status", "aria-live": "polite", "aria-busy": !ready, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-godot-loading-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-godot-spinner", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-godot-loading-title", children: "Đang mở Haru World…" }),
      loadingProgress !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "n4-godot-progress-track",
          role: "progressbar",
          "aria-label": "Tiến độ tải thế giới Haru",
          "aria-valuenow": loadingProgress,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuetext": `${loadingProgress}%`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-godot-progress-fill", style: { width: `${loadingProgress}%` } })
        }
      ),
      loadingProgress !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-godot-progress-caption", children: [
        loadingProgress,
        "%"
      ] })
    ] }) }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-godot-message", role: "alert", "aria-live": "assertive", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { ref: retryBtnRef, type: "button", onClick: retry, children: "Thử tải lại" })
    ] })
  ] });
}
function requestedWorldSurface(location2) {
  const directSearch = typeof window === "undefined" ? "" : window.location.search;
  const query = new URLSearchParams(location2.search || directSearch);
  const activity = resolveHaruWorldActivity(query.get("activity"));
  return {
    activityId: (activity == null ? void 0 : activity.id) || null,
    panelId: query.get("panel") === "admin" ? "admin" : null
  };
}
function WorldExperience({ forcedExit = false, onExitSettled = null }) {
  const location2 = useLocation();
  const navigate = useNavigate();
  const { ready, user } = useHaruWorldAuth();
  const { isAdmin, loading: adminLoading, error: adminError } = useIsAdmin();
  const requested = reactExports.useMemo(() => requestedWorldSurface(location2), [location2]);
  const redirect = reactExports.useMemo(() => {
    if (location2.pathname === "/" || location2.pathname === "/world") {
      return null;
    }
    const activity = resolveHaruWorldLegacyActivity(location2.pathname + location2.search);
    return activity ? haruWorldActivityHref(activity.id, null, location2.pathname + location2.search) : null;
  }, [location2.pathname, location2.search]);
  const adminCapability = reactExports.useMemo(() => ({
    verified: Boolean(user == null ? void 0 : user.id) && !adminLoading && !adminError,
    allowed: Boolean(user == null ? void 0 : user.id) && !adminLoading && !adminError && isAdmin
  }), [adminError, adminLoading, isAdmin, user == null ? void 0 : user.id]);
  const [switchState, setSwitchState] = reactExports.useState("idle");
  const [switchError, setSwitchError] = reactExports.useState("");
  const [cancelToken, setCancelToken] = reactExports.useState(0);
  const errorRetryBtnRef = reactExports.useRef(null);
  const switchIdleBtnRef = reactExports.useRef(null);
  const wasCancelledFromError = reactExports.useRef(false);
  reactExports.useEffect(() => {
    var _a;
    if (switchState === "error") {
      (_a = errorRetryBtnRef.current) == null ? void 0 : _a.focus();
      return void 0;
    }
    if (switchState === "idle" && wasCancelledFromError.current) {
      wasCancelledFromError.current = false;
      const targetBtn = switchIdleBtnRef.current;
      let frameId1;
      let frameId2;
      const shouldRestoreFocus = () => {
        const active = document.activeElement;
        return !active || active === document.body || active.tagName === "IFRAME";
      };
      const restore = () => {
        if (shouldRestoreFocus()) {
          targetBtn == null ? void 0 : targetBtn.focus();
        }
      };
      if (typeof requestAnimationFrame === "function") {
        frameId1 = requestAnimationFrame(() => {
          restore();
          frameId2 = requestAnimationFrame(restore);
        });
      } else {
        frameId1 = setTimeout(restore, 0);
      }
      return () => {
        if (typeof cancelAnimationFrame === "function") {
          if (frameId1) cancelAnimationFrame(frameId1);
          if (frameId2) cancelAnimationFrame(frameId2);
        } else {
          clearTimeout(frameId1);
        }
      };
    }
    return void 0;
  }, [switchState]);
  const handleSwitchToLearning = reactExports.useCallback(() => {
    if (switchState === "saving") return;
    setSwitchError("");
    setSwitchState("saving");
  }, [switchState]);
  const autoTriggeredForcedExit = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (forcedExit) {
      if (!autoTriggeredForcedExit.current && switchState !== "saving") {
        autoTriggeredForcedExit.current = true;
        handleSwitchToLearning();
      }
    } else {
      autoTriggeredForcedExit.current = false;
    }
  }, [forcedExit, handleSwitchToLearning, switchState]);
  const handleExitComplete = reactExports.useCallback((result) => {
    if (result == null ? void 0 : result.ok) {
      setSwitchState("idle");
      onExitSettled == null ? void 0 : onExitSettled(result);
      if (!forcedExit) {
        navigate("/content");
      }
    } else {
      setSwitchState("error");
      setSwitchError((result == null ? void 0 : result.error) === "SAVE_TIMEOUT" ? "Lưu tiến độ bị quá thời gian. Bạn có thể thử lại." : "Chưa thể lưu tiến độ. Bạn có thể thử lại.");
    }
  }, [forcedExit, navigate, onExitSettled]);
  const handleCancelSwitch = reactExports.useCallback(() => {
    wasCancelledFromError.current = true;
    setSwitchState("idle");
    setSwitchError("");
    setCancelToken((token) => token + 1);
    if (forcedExit) {
      navigate("/world");
    }
  }, [forcedExit, navigate]);
  function isEditableTarget(element) {
    if (!element || typeof element !== "object") return false;
    const tag = element.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
    if (element.isContentEditable) return true;
    if (typeof element.closest === "function") {
      const editableAncestor = element.closest("[contenteditable]");
      if (editableAncestor && editableAncestor.getAttribute("contenteditable") !== "false") {
        return true;
      }
    }
    return false;
  }
  const handleWorldEvent = reactExports.useCallback((event) => {
    var _a;
    if ((event == null ? void 0 : event.type) === "shortcut" && ((_a = event == null ? void 0 : event.payload) == null ? void 0 : _a.key) === "Alt+L") {
      if (switchState === "saving") return;
      handleSwitchToLearning();
    }
  }, [handleSwitchToLearning, switchState]);
  reactExports.useEffect(() => {
    function handleKeyDown(e) {
      if (switchState === "saving") return;
      if (e.key === "Escape" && switchState === "error" && !forcedExit) {
        e.preventDefault();
        handleCancelSwitch();
        return;
      }
      if (e.altKey && (e.key === "l" || e.key === "L" || e.code === "KeyL")) {
        if (isEditableTarget(document.activeElement) || isEditableTarget(e.target)) return;
        e.preventDefault();
        handleSwitchToLearning();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [forcedExit, handleCancelSwitch, handleSwitchToLearning, switchState]);
  reactExports.useEffect(() => {
    if (redirect) navigate(redirect, { replace: true });
  }, [navigate, redirect]);
  if (!ready) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "haru-boot", role: "status", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { lang: "ja", children: "春" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Đang kiểm tra tài khoản và mở Haru…" })
    ] });
  }
  if (redirect) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "haru-boot", role: "status", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { lang: "ja", children: "春" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Đang mở Haru World…" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "haru-experience haru-experience--immersive", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "haru-world-switch-banner", children: [
      switchState === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          ref: switchIdleBtnRef,
          type: "button",
          className: "haru-world-switch-btn",
          onClick: handleSwitchToLearning,
          title: "Chuyển sang góc học tập N4 (Alt+L)",
          "aria-label": "Chuyển sang góc học tập N4 (phím tắt Alt+L)",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "haru-world-switch-icon", "aria-hidden": "true", children: "← 📚" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "haru-world-switch-text", children: "Góc học tập N4" })
          ]
        }
      ),
      switchState === "saving" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "haru-world-switch-btn haru-world-switch-btn--saving",
          disabled: true,
          "aria-busy": "true",
          "aria-label": "Đang lưu tiến độ…",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "haru-world-switch-spinner", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "haru-world-switch-text", children: "Đang lưu tiến độ…" })
          ]
        }
      ),
      switchState === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "haru-world-switch-error-group", role: "alert", "aria-live": "assertive", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            ref: errorRetryBtnRef,
            type: "button",
            className: "haru-world-switch-btn haru-world-switch-btn--error",
            onClick: handleSwitchToLearning,
            title: switchError || "Lưu chưa xong · Thử lại",
            "aria-label": "Lưu chưa xong. Thử lại",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "haru-world-switch-icon", "aria-hidden": "true", children: "⚠️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "haru-world-switch-text", children: "Lưu chưa xong · Thử lại" })
            ]
          }
        ),
        !forcedExit && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "haru-world-switch-btn haru-world-switch-btn--cancel",
            onClick: handleCancelSwitch,
            title: "Hủy chuyển chế độ",
            "aria-label": "Hủy chuyển chế độ",
            children: "✕"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HaruWorldV1Host,
      {
        userId: (user == null ? void 0 : user.id) || null,
        adminCapability,
        initialActivityId: requested.activityId,
        initialPanelId: requested.panelId,
        onWorldEvent: handleWorldEvent,
        exitRequested: switchState === "saving",
        cancelRequested: cancelToken > 0,
        cancelToken,
        onExitComplete: handleExitComplete
      }
    )
  ] });
}
export {
  WorldExperience as default,
  requestedWorldSurface
};
