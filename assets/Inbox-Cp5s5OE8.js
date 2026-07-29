import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { a as useAppStore } from "./feature-3d-CFvJkEt3.js";
import { J as getAnnouncements, g as getUnreadAnnouncements, M as getConversations, O as getMessages, m as markAsRead, Z as deleteConversation, c as getUserErrorMessage, I as sendMessage, _ as markMessagesRead } from "./index-D1BqAvip.js";
import { g as getAllChallenges, b as getUserSubmission, a as getChallengeLeaderboard } from "./challenges-CCdeaVeB.js";
import "./feature-3d-hud-CYISTbY6.js";
import { d as useSearchParams, b as useNavigate } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-icons-DHCyxOF-.js";
import "./vendor-supabase-DTEAj5J1.js";
const INBOX_TABS = [
  { id: "announce", icon: "📢", label: "Thông báo" },
  { id: "messages", icon: "💬", label: "Tin nhắn" },
  { id: "challenges", icon: "🏆", label: "Thử thách" }
];
function Inbox() {
  var _a;
  const user = useAppStore((s) => s.user);
  const [searchParams] = useSearchParams();
  const initialTab = ((_a = INBOX_TABS.find((t) => t.id === searchParams.get("tab"))) == null ? void 0 : _a.id) || "announce";
  const [tab, setTab] = reactExports.useState(initialTab);
  reactExports.useEffect(() => {
    const t = searchParams.get("tab");
    if (t && INBOX_TABS.find((x) => x.id === t)) setTab(t);
  }, [searchParams]);
  if (!user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-dashboard n4-page-enter", style: { textAlign: "center", padding: 60 }, children: "🔒 Vui lòng đăng nhập để xem sự kiện." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-header", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "n4-settings-heading", children: "📡 Sự kiện" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-tabs", children: INBOX_TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: `n4-settings-tab ${tab === t.id ? "active" : ""}`, onClick: () => setTab(t.id), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.icon }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.label })
    ] }, t.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card n4-settings-card", children: [
      tab === "announce" && /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementsTab, { userId: user.id }),
      tab === "messages" && /* @__PURE__ */ jsxRuntimeExports.jsx(MessagesTab, { userId: user.id }),
      tab === "challenges" && /* @__PURE__ */ jsxRuntimeExports.jsx(ChallengesTab, { userId: user.id })
    ] })
  ] });
}
function AnnouncementsTab({ userId }) {
  const [items, setItems] = reactExports.useState([]);
  const [unreadIds, setUnreadIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    (async () => {
      try {
        const [all, unread] = await Promise.all([
          getAnnouncements(),
          getUnreadAnnouncements(userId)
        ]);
        setItems(all);
        setUnreadIds(new Set(unread.map((u) => u.id)));
      } catch (e) {
        setItems([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [userId]);
  const handleMarkRead = async (id) => {
    await markAsRead(userId, id);
    setUnreadIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };
  const handleDismiss = async (id) => {
    await markAsRead(userId, id);
    setItems((prev) => prev.filter((a) => a.id !== id));
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { padding: 16 }, children: "⏳ Đang tải..." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: 16 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { marginBottom: 12, color: "var(--text-secondary)" }, children: [
      items.length,
      " thông báo · ",
      unreadIds.size,
      " chưa đọc"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
      items.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-row", style: { padding: "12px", opacity: unreadIds.has(a.id) ? 1 : 0.7, borderLeft: unreadIds.has(a.id) ? "3px solid var(--accent)" : "3px solid transparent" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginRight: 8 }, children: a.type === "warning" ? "⚠️" : a.type === "challenge" ? "🏆" : a.type === "update" ? "🆕" : "ℹ️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: a.title }),
            unreadIds.has(a.id) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge", style: { marginLeft: 8, fontSize: "0.7em", background: "var(--accent)", color: "#000" }, children: "MỚI" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.8em", color: "var(--text-secondary)" }, children: timeAgo(a.created_at) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => handleDismiss(a.id), title: "Xóa thông báo", style: { padding: "2px 6px", fontSize: "0.8em" }, children: "✕" })
          ] })
        ] }),
        a.content && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "6px 0 0", fontSize: "0.9em", color: "var(--text-secondary)" }, children: a.content }),
        unreadIds.has(a.id) && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", style: { marginTop: 6 }, onClick: () => handleMarkRead(a.id), children: "✓ Đánh dấu đã đọc" })
      ] }, a.id)),
      items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state", children: "Chưa có thông báo nào." })
    ] })
  ] });
}
function MessagesTab({ userId }) {
  const [convos, setConvos] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [activeConvo, setActiveConvo] = reactExports.useState(null);
  const [reply, setReply] = reactExports.useState("");
  const messagesEndRef = reactExports.useRef(null);
  const loadConvos = reactExports.useCallback(async () => {
    setLoading(true);
    try {
      const d = await getConversations(userId);
      setConvos(d || []);
    } catch (e) {
      setConvos([]);
    } finally {
      setLoading(false);
    }
  }, [userId]);
  reactExports.useEffect(() => {
    loadConvos();
  }, [loadConvos]);
  reactExports.useEffect(() => {
    if (!(activeConvo == null ? void 0 : activeConvo.partnerId) || !userId) return;
    let mounted = true;
    const interval = setInterval(async () => {
      try {
        const msgs = await getMessages(userId, activeConvo.partnerId);
        if (mounted) setActiveConvo((prev) => prev ? { ...prev, messages: msgs || [] } : null);
      } catch (e) {
      }
    }, 5e3);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [activeConvo == null ? void 0 : activeConvo.partnerId, userId]);
  reactExports.useEffect(() => {
    var _a;
    (_a = messagesEndRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [activeConvo == null ? void 0 : activeConvo.messages]);
  const openConvo = async (partnerId, partnerName) => {
    const msgs = await getMessages(userId, partnerId);
    setActiveConvo({ partnerId, partnerName, messages: msgs || [] });
    try {
      await markMessagesRead(userId, partnerId);
    } catch (e) {
    }
  };
  const handleSend = async () => {
    if (!reply.trim() || !activeConvo) return;
    await sendMessage(userId, activeConvo.partnerId, reply.trim());
    setReply("");
    openConvo(activeConvo.partnerId, activeConvo.partnerName);
  };
  const handleDeleteConvo = async (partnerId, e) => {
    e.stopPropagation();
    if (!confirm("Xóa toàn bộ cuộc hội thoại này?")) return;
    try {
      await deleteConversation(userId, partnerId);
      if ((activeConvo == null ? void 0 : activeConvo.partnerId) === partnerId) setActiveConvo(null);
      loadConvos();
    } catch (err) {
      console.error("Delete conversation error:", err);
      alert(getUserErrorMessage(err, "Không thể xoá hội thoại lúc này."));
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { padding: 16 }, children: "⏳ Đang tải..." });
  if (activeConvo) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => {
          setActiveConvo(null);
          loadConvos();
        }, children: "← Quay lại" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: activeConvo.partnerName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: 1 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: (e) => handleDeleteConvo(activeConvo.partnerId, e), children: "🗑️ Xóa hội thoại" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxHeight: 400, overflowY: "auto", display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }, children: [
        activeConvo.messages.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { alignSelf: m.sender_id === userId ? "flex-end" : "flex-start", background: m.sender_id === userId ? "var(--accent)" : "var(--bg-card)", color: m.sender_id === userId ? "#fff" : "inherit", padding: "8px 14px", borderRadius: 12, maxWidth: "70%" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m.content }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.65em", opacity: 0.7, marginTop: 2 }, children: new Date(m.created_at).toLocaleTimeString("vi") })
        ] }, m.id)),
        activeConvo.messages.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state", children: "Chưa có tin nhắn." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "n4-input", style: { flex: 1 }, placeholder: "Nhập tin nhắn...", value: reply, onChange: (e) => setReply(e.target.value), onKeyDown: (e) => e.key === "Enter" && handleSend() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: handleSend, children: "Gửi" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: 16 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { marginBottom: 12, color: "var(--text-secondary)" }, children: [
      convos.length,
      " cuộc hội thoại"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
      convos.map((c) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-settings-row", style: { padding: "10px 12px", cursor: "pointer" }, onClick: () => openConvo(c.partnerId, c.partnerName), onKeyDown: (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openConvo(c.partnerId, c.partnerName);
          }
        }, role: "button", tabIndex: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
          c.partnerAvatar && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.partnerAvatar, alt: "", style: { width: 28, height: 28, borderRadius: "50%" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: c.partnerName || "User" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.85em", color: "var(--text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: ((_a = c.lastMessage) == null ? void 0 : _a.content) || "" })
          ] }),
          c.unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge", style: { background: "var(--accent)", color: "#fff" }, children: c.unread }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: (e) => handleDeleteConvo(c.partnerId, e), title: "Xóa hội thoại", children: "🗑️" })
        ] }) }, c.partnerId);
      }),
      convos.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state", children: "Chưa có tin nhắn nào." })
    ] })
  ] });
}
function ChallengesTab({ userId }) {
  const navigate = useNavigate();
  const [challenges, setChallenges] = reactExports.useState([]);
  const [submissions, setSubmissions] = reactExports.useState({});
  const [leaderboard, setLeaderboard] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    (async () => {
      try {
        const all = await getAllChallenges();
        setChallenges(all);
        const subs = {};
        for (const c of all) {
          try {
            const sub = await getUserSubmission(userId, c.id);
            if (sub) subs[c.id] = sub;
          } catch (e) {
          }
        }
        setSubmissions(subs);
      } catch (e) {
        setChallenges([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [userId]);
  const getStatus = (c) => {
    const now = Date.now();
    const start = new Date(c.starts_at).getTime();
    const end = new Date(c.ends_at).getTime();
    if (now < start) return { label: "📵 Sắp tới", color: "#5aafa0" };
    if (now > end) return { label: "⚫ Đã kết thúc", color: "#888" };
    return { label: "🟢 Đang diễn ra", color: "#5cb85c" };
  };
  const showLeaderboard = async (challengeId) => {
    try {
      const data = await getChallengeLeaderboard(challengeId);
      setLeaderboard({ challengeId, data: data || [] });
    } catch (err) {
      console.error("Leaderboard load error:", err);
      setLeaderboard({ challengeId, data: [] });
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { padding: 16 }, children: "⏳ Đang tải..." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: 16 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { marginBottom: 12, color: "var(--text-secondary)" }, children: [
      challenges.length,
      " challenges"
    ] }),
    leaderboard && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: 16, marginBottom: 16, border: "2px solid gold" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: { margin: 0 }, children: "🏅 Bảng xếp hạng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => setLeaderboard(null), children: "✕" })
      ] }),
      leaderboard.data.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chưa có ai tham gia." }) : leaderboard.data.slice(0, 10).map((e, i) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px solid var(--border)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}.`,
            " ",
            ((_a = e.user_profiles) == null ? void 0 : _a.display_name) || "User"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            e.score,
            "/",
            e.total,
            " (",
            e.time_seconds,
            "s)"
          ] })
        ] }, e.id);
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: [
      challenges.map((c) => {
        var _a, _b;
        const status = getStatus(c);
        const sub = submissions[c.id];
        const isActive = status.label.includes("Đang diễn ra");
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-settings-row", style: { padding: "14px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
              "🏆 ",
              c.title
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.8em", color: status.color }, children: status.label })
          ] }),
          c.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "4px 0", fontSize: "0.85em", color: "var(--text-secondary)" }, children: c.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.8em", color: "var(--text-secondary)", marginBottom: 8 }, children: [
            ((_a = c.quiz_config) == null ? void 0 : _a.question_count) || "?",
            " câu · ",
            ((_b = c.quiz_config) == null ? void 0 : _b.time_limit_minutes) || "?",
            " phút",
            c.starts_at && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " · Từ: ",
              new Date(c.starts_at).toLocaleDateString("vi")
            ] }),
            c.ends_at && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " · Đến: ",
              new Date(c.ends_at).toLocaleDateString("vi")
            ] })
          ] }),
          sub && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "8px 12px", background: "rgba(0,255,0,0.08)", borderRadius: 8, marginBottom: 8, fontSize: "0.85em" }, children: [
            "✅ Đã hoàn thành: ",
            sub.score,
            "/",
            sub.total,
            " (",
            sub.time_seconds,
            "s)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
            isActive && !sub && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-primary", onClick: () => navigate(`/challenge/${c.id}`), children: "🎯 Làm quiz" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => showLeaderboard(c.id), children: "🏅 Xem BXH" })
          ] })
        ] }, c.id);
      }),
      challenges.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state", children: "Chưa có challenge nào." })
    ] })
  ] });
}
function timeAgo(dateStr) {
  if (!dateStr) return "";
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 6e4);
  if (mins < 1) return "vừa xong";
  if (mins < 60) return `${mins} phút trước`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} giờ trước`;
  const days = Math.floor(hours / 24);
  return `${days} ngày trước`;
}
export {
  Inbox as default
};
