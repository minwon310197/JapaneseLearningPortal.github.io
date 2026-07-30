import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { a as useAppStore } from "./feature-3d-jK3b4Iv-.js";
import { a as getSyncState, o as onSyncEvent, s as syncNow, p as pullNow, b as getPendingRetryInfo, c as getUserErrorMessage } from "./index-CjITGIof.js";
import "./feature-3d-hud-Dp6hMoyV.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-router-BTJacUKt.js";
import "./vendor-icons-DHCyxOF-.js";
import "./vendor-supabase-DTEAj5J1.js";
function formatTimeSince(iso) {
  if (!iso) return null;
  const ms = Date.now() - new Date(iso).getTime();
  if (ms < 0) return "vừa xong";
  const s = Math.floor(ms / 1e3);
  if (s < 5) return "vừa xong";
  if (s < 60) return s + "s trước";
  const m = Math.floor(s / 60);
  if (m < 60) return m + " phút trước";
  const h = Math.floor(m / 60);
  if (h < 24) return h + " giờ trước";
  return Math.floor(h / 24) + " ngày trước";
}
function pickStatus(state, hasUser) {
  if (!hasUser) return { tone: "idle", label: "Chưa đăng nhập" };
  if (!state.isOnline) return { tone: "offline", label: "Mất mạng" };
  if (state.inFlight) return { tone: "syncing", label: "Đang đồng bộ…" };
  if (state.lastError) return { tone: "error", label: "Lỗi đồng bộ" };
  if (state.pendingRetry) return { tone: "retry", label: "Chờ thử lại" };
  if (state.lastSyncAt) return { tone: "ok", label: "Đã đồng bộ" };
  return { tone: "idle", label: "Sẵn sàng" };
}
function SyncStatusBadge() {
  const user = useAppStore((s) => s.user);
  const [state, setState] = reactExports.useState(() => getSyncState());
  const [open, setOpen] = reactExports.useState(false);
  const [busy, setBusy] = reactExports.useState(false);
  const [toast, setToast] = reactExports.useState(null);
  const [remoteFlash, setRemoteFlash] = reactExports.useState(false);
  const [, forceTick] = reactExports.useState(0);
  const panelRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const unsub = onSyncEvent((type) => {
      setState(getSyncState());
      if (type === "remote-update") {
        setRemoteFlash(true);
        setTimeout(() => setRemoteFlash(false), 2200);
      }
    });
    return unsub;
  }, []);
  reactExports.useEffect(() => {
    if (!open) return;
    const id = setInterval(() => forceTick((n) => n + 1), 2e4);
    return () => clearInterval(id);
  }, [open]);
  reactExports.useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const handleSyncNow = reactExports.useCallback(async () => {
    if (busy) return;
    setBusy(true);
    setToast(null);
    try {
      const r = await syncNow();
      setToast((r == null ? void 0 : r.message) || "✅ Đã đồng bộ");
    } catch (e) {
      setToast("❌ " + ((e == null ? void 0 : e.message) || "Đồng bộ thất bại"));
    } finally {
      setBusy(false);
      setTimeout(() => setToast(null), 3e3);
    }
  }, [busy]);
  const handlePullNow = reactExports.useCallback(async () => {
    if (busy) return;
    const ok = window.confirm(
      "⚠️ Lấy dữ liệu từ cloud sẽ ghi đè toàn bộ dữ liệu trên thiết bị này.\n\nTiếp tục?"
    );
    if (!ok) return;
    setBusy(true);
    setToast(null);
    try {
      const r = await pullNow();
      setToast((r == null ? void 0 : r.message) || "⬇️ Đã lấy từ cloud");
    } catch (e) {
      setToast("❌ " + ((e == null ? void 0 : e.message) || "Pull thất bại"));
    } finally {
      setBusy(false);
      setTimeout(() => setToast(null), 3e3);
    }
  }, [busy]);
  const status = pickStatus(state, !!user);
  const pending = state.pendingRetry ? getPendingRetryInfo() : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-sync-badge n4-sync-${status.tone}${remoteFlash ? " n4-sync-remote-flash" : ""}`, ref: panelRef, children: [
    remoteFlash && !open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sync-remote-toast", role: "status", children: "☁️ Dữ liệu đồng bộ từ thiết bị khác" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: "n4-sync-badge-dot",
        onClick: () => setOpen((o) => !o),
        "aria-label": `Trạng thái đồng bộ: ${status.label}`,
        title: status.label,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-sync-dot", "aria-hidden": "true" })
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sync-badge-panel", role: "dialog", "aria-label": "Chi tiết đồng bộ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sync-panel-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-sync-dot", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: status.label })
      ] }),
      !user && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sync-panel-row muted", children: "Đăng nhập Google để bật đồng bộ cloud." }),
      user && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sync-panel-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label", children: "Đồng bộ gần nhất" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "value", children: formatTimeSince(state.lastSyncAt) || "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sync-panel-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label", children: "Push gần nhất" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "value", children: formatTimeSince(state.lastPushAt) || "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sync-panel-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label", children: "Pull gần nhất" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "value", children: formatTimeSince(state.lastPullAt) || "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sync-panel-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label", children: "Mạng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "value", children: state.isOnline ? "🟢 Online" : "🔴 Offline" })
        ] }),
        state.lastError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sync-panel-row error", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label", children: "Lỗi" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "value", children: getUserErrorMessage(state.lastError, "Đồng bộ chưa thành công. Vui lòng thử lại.") })
        ] }),
        pending && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sync-panel-row warn", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label", children: "Đang chờ thử lại" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "value", title: pending.reason, children: formatTimeSince(new Date(pending.at).toISOString()) || "vừa xong" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-sync-panel-actions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "n4-sync-panel-btn",
              onClick: handleSyncNow,
              disabled: busy || !state.isOnline,
              title: "Merge local + cloud rồi đẩy lên",
              children: busy ? "⏳ Đang…" : "☁️ Đồng bộ"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "n4-sync-panel-btn n4-sync-panel-btn-ghost",
              onClick: handlePullNow,
              disabled: busy || !state.isOnline,
              title: "Ghi đè local bằng dữ liệu cloud (dùng khi đổi thiết bị)",
              children: "⬇️ Pull"
            }
          )
        ] }),
        toast && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-sync-panel-toast", children: toast })
      ] })
    ] })
  ] });
}
export {
  SyncStatusBadge as default
};
