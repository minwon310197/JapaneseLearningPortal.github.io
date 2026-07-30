import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { a as useAppStore, b as useDataStore, az as stableAnswerKey, u as useLearningStore, a5 as stopSpeech, f as speakJP, ac as onStopAll, aA as equalsAnswerText } from "./feature-3d-jK3b4Iv-.js";
import { s as supabase } from "./feature-3d-hud-Dp6hMoyV.js";
import { s as submitChallengeResult, a as getChallengeLeaderboard, b as getUserSubmission } from "./challenges-_OHmA2ch.js";
import { w as useEnsureLegacyDataLoaded, v as logActivity, $ as syncProfileStats, a0 as pushIfChanged, c as getUserErrorMessage } from "./index-CjITGIof.js";
import { c as useParams, L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-icons-DHCyxOF-.js";
function SafeAvatar({ src }) {
  const [ready, setReady] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!src) {
      setReady(false);
      return void 0;
    }
    let active = true;
    const image = new Image();
    image.onload = () => {
      if (active) setReady(true);
    };
    image.onerror = () => {
      if (active) setReady(false);
    };
    image.src = src;
    return () => {
      active = false;
    };
  }, [src]);
  if (!ready) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", style: { width: 28, height: 28, borderRadius: "50%", background: "var(--n4-bg-secondary)" } });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", style: { width: 28, height: 28, borderRadius: "50%", background: "var(--n4-bg-secondary)" } });
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function generateQuestions(type, count, { vocab, kanji, grammar }) {
  const questions = [];
  if ((type === "vocab" || type === "mixed") && vocab.length) {
    const flat = [];
    vocab.forEach((sec) => {
      var _a;
      return (_a = sec.entries) == null ? void 0 : _a.forEach((e) => {
        if (e.word && e.meaning) flat.push(e);
      });
    });
    if (flat.length >= 4) {
      const pool = shuffle(flat);
      const n = type === "mixed" ? Math.ceil(count / 3) : count;
      for (let i = 0; i < Math.min(n, pool.length); i++) {
        const item = pool[i];
        const wrongs = shuffle(flat.filter((x) => !equalsAnswerText(x.meaning, item.meaning))).slice(0, 3).map((x) => x.meaning);
        const options = shuffle([item.meaning, ...wrongs]);
        const answerKey = stableAnswerKey(item.meaning);
        questions.push({
          question: item.word,
          hint: item.reading || item.romaji || "",
          options,
          answerKey,
          explanation: `${item.word} (${item.reading || ""}) = ${item.meaning}`,
          type: "vocab"
        });
      }
    }
  }
  if ((type === "kanji" || type === "mixed") && kanji.length) {
    const flat = [];
    kanji.forEach((sec) => {
      var _a;
      return (_a = sec.entries) == null ? void 0 : _a.forEach((e) => {
        if (e.kanji && e.title) flat.push(e);
      });
    });
    if (flat.length >= 4) {
      const pool = shuffle(flat);
      const n = type === "mixed" ? Math.ceil(count / 3) : count;
      for (let i = 0; i < Math.min(n, pool.length); i++) {
        const item = pool[i];
        const wrongs = shuffle(flat.filter((x) => !equalsAnswerText(x.title, item.title))).slice(0, 3).map((x) => x.title);
        const options = shuffle([item.title, ...wrongs]);
        const answerKey = stableAnswerKey(item.title);
        questions.push({
          question: item.kanji,
          hint: item.on || item.kun || "",
          options,
          answerKey,
          explanation: `${item.kanji} (${item.on || ""} / ${item.kun || ""}) = ${item.title}`,
          type: "kanji"
        });
      }
    }
  }
  if ((type === "grammar" || type === "mixed") && grammar.length) {
    const flat = [];
    grammar.forEach((sec) => {
      var _a;
      return (_a = sec.entries) == null ? void 0 : _a.forEach((e) => {
        if (e.pattern && e.meaning) flat.push(e);
      });
    });
    if (flat.length >= 4) {
      const pool = shuffle(flat);
      const n = type === "mixed" ? Math.ceil(count / 3) : count;
      for (let i = 0; i < Math.min(n, pool.length); i++) {
        const item = pool[i];
        const wrongs = shuffle(flat.filter((x) => !equalsAnswerText(x.meaning, item.meaning))).slice(0, 3).map((x) => x.meaning);
        const options = shuffle([item.meaning, ...wrongs]);
        const answerKey = stableAnswerKey(item.meaning);
        questions.push({
          question: item.pattern,
          hint: "",
          options,
          answerKey,
          explanation: `${item.pattern} = ${item.meaning}`,
          type: "grammar"
        });
      }
    }
  }
  return shuffle(questions).slice(0, count);
}
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
function ChallengeQuiz() {
  const { id: challengeId } = useParams();
  const user = useAppStore((s) => s.user);
  const { vocab, kanji, grammar, loaded, loadFromLegacy } = useDataStore(useShallow((s) => ({
    vocab: s.vocab,
    kanji: s.kanji,
    grammar: s.grammar,
    loaded: s.loaded,
    loadFromLegacy: s.loadFromLegacy
  })));
  const [challenge, setChallenge] = reactExports.useState(null);
  const [phase, setPhase] = reactExports.useState("loading");
  const [existingSub, setExistingSub] = reactExports.useState(null);
  const [leaderboard, setLeaderboard] = reactExports.useState([]);
  const [error, setError] = reactExports.useState(null);
  const [questions, setQuestions] = reactExports.useState([]);
  const [currentQ, setCurrentQ] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [answers, setAnswers] = reactExports.useState([]);
  const [timeLeft, setTimeLeft] = reactExports.useState(0);
  const timerRef = reactExports.useRef(null);
  const handleFinishRef = reactExports.useRef(null);
  const [results, setResults] = reactExports.useState(null);
  useEnsureLegacyDataLoaded(loaded, loadFromLegacy);
  reactExports.useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const { data: ch, error: chErr } = await supabase.from("quiz_challenges").select("*").eq("id", challengeId).single();
        if (chErr) throw chErr;
        if (cancelled) return;
        setChallenge(ch);
        if (user) {
          const sub = await getUserSubmission(user.id, challengeId);
          if (cancelled) return;
          if (sub) {
            setExistingSub(sub);
            const lb = await getChallengeLeaderboard(challengeId);
            if (!cancelled) setLeaderboard(lb || []);
            setPhase("already-done");
            return;
          }
        }
        const now = /* @__PURE__ */ new Date();
        if (new Date(ch.ends_at) < now) {
          setError("Thử thách này đã kết thúc.");
          setPhase("ready");
          return;
        }
        setPhase("ready");
      } catch (e) {
        if (!cancelled) {
          setError(getUserErrorMessage(e, "Không thể tạo bài thử thách lúc này."));
          setPhase("ready");
        }
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [challengeId, user]);
  reactExports.useEffect(() => {
    if (phase !== "quiz" || timeLeft <= 0) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        var _a;
        if (prev <= 1) {
          clearInterval(timerRef.current);
          (_a = handleFinishRef.current) == null ? void 0 : _a.call(handleFinishRef);
          return 0;
        }
        return prev - 1;
      });
    }, 1e3);
    return () => clearInterval(timerRef.current);
  }, [phase]);
  const handleStart = reactExports.useCallback(() => {
    if (!(challenge == null ? void 0 : challenge.quiz_config)) return;
    const cfg = challenge.quiz_config;
    const qs = generateQuestions(cfg.quiz_type || "vocab", cfg.question_count || 10, { vocab, kanji, grammar });
    if (qs.length === 0) {
      setError("Không đủ dữ liệu để tạo câu hỏi. Hãy tải nội dung trước.");
      return;
    }
    setQuestions(qs);
    setCurrentQ(0);
    setSelected(null);
    setAnswers([]);
    setTimeLeft((cfg.time_limit_minutes || 5) * 60);
    setPhase("quiz");
  }, [challenge, vocab, kanji, grammar]);
  const handleAnswer = reactExports.useCallback((idx) => {
    if (selected !== null) return;
    const q = questions[currentQ];
    const selectedKey = stableAnswerKey(q.options[idx]);
    const correct = selectedKey === q.answerKey;
    setSelected(idx);
    setAnswers((prev) => [...prev, { idx, correct }]);
  }, [selected, questions, currentQ]);
  const handleNext = reactExports.useCallback(() => {
    var _a;
    if (currentQ + 1 >= questions.length) {
      (_a = handleFinishRef.current) == null ? void 0 : _a.call(handleFinishRef);
    } else {
      setCurrentQ((prev) => prev + 1);
      setSelected(null);
    }
  }, [currentQ, questions.length]);
  const handleFinish = reactExports.useCallback(async () => {
    clearInterval(timerRef.current);
    const score = answers.filter((a) => a.correct).length;
    const total = questions.length;
    const cfg = challenge == null ? void 0 : challenge.quiz_config;
    const timeSeconds = ((cfg == null ? void 0 : cfg.time_limit_minutes) || 5) * 60 - timeLeft;
    setPhase("submitting");
    try {
      if (user) {
        await submitChallengeResult(user.id, challengeId, {
          score,
          total,
          timeSeconds,
          answers: answers.map((a, i) => {
            var _a;
            return {
              question: (_a = questions[i]) == null ? void 0 : _a.question,
              selected: a.idx,
              correct: a.correct
            };
          })
        });
        logActivity(user.id, "quiz_complete", { type: "challenge", challengeId, score, total, timeSeconds });
        const rewardXp = (cfg == null ? void 0 : cfg.reward_xp) || 50;
        const earnedXp = total > 0 ? Math.round(rewardXp * (score / total)) : 0;
        if (earnedXp > 0) {
          useLearningStore.getState().addXp(earnedXp);
          useLearningStore.getState().recordStudy();
        }
        const ls = useLearningStore.getState();
        syncProfileStats(user.id, {
          xp: ls.xp,
          level: ls.level,
          streak: ls.streak,
          totalQuizzes: Object.values(ls.trainerStats || {}).reduce((s, t) => s + (t.plays || 0), 0),
          totalCorrect: Object.values(ls.trainerStats || {}).reduce((s, t) => s + (t.correct || 0), 0)
        }).catch(() => {
        });
        pushIfChanged().catch(() => {
        });
      }
      await new Promise((r) => setTimeout(r, 500));
      const lb = await getChallengeLeaderboard(challengeId);
      setLeaderboard(lb || []);
      setResults({ score, total, timeSeconds, earnedXp: total > 0 ? Math.round(((cfg == null ? void 0 : cfg.reward_xp) || 50) * (score / total)) : 0 });
      setPhase("results");
    } catch (e) {
      console.error("Challenge submit error:", e);
      setResults({ score, total, timeSeconds, earnedXp: 0 });
      setPhase("results");
    }
  }, [answers, questions, challenge, timeLeft, user, challengeId]);
  handleFinishRef.current = handleFinish;
  reactExports.useEffect(() => {
    if (phase === "quiz" && questions[currentQ]) {
      stopSpeech();
      speakJP(questions[currentQ].question);
    }
    return () => stopSpeech();
  }, [phase, currentQ, questions]);
  reactExports.useEffect(() => {
    const unsub = onStopAll(() => {
    });
    return unsub;
  }, []);
  const typeIcon = { vocab: "📖", kanji: "🈁", grammar: "📐", mixed: "🎯" };
  if (phase === "loading") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", style: { textAlign: "center", padding: 60 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2em", marginBottom: 12 }, children: "⏳" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-muted)" }, children: "Đang tải thử thách..." })
    ] });
  }
  if (!user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", style: { textAlign: "center", padding: 60 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2em", marginBottom: 12 }, children: "🔒" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Đăng nhập để tham gia" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-muted)" }, children: "Bạn cần đăng nhập để làm quiz thử thách." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "n4-btn n4-btn-primary", style: { marginTop: 16 }, children: "🏠 Về trang chủ" })
    ] });
  }
  if (phase === "already-done" && existingSub) {
    const rank = leaderboard.findIndex((l) => l.user_id === user.id) + 1;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", style: { maxWidth: 600, width: "100%", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { marginBottom: 8 }, children: (challenge == null ? void 0 : challenge.title) || "Thử thách" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: 20, textAlign: "center", marginBottom: 16 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2em", marginBottom: 8 }, children: "✅" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontWeight: 600, fontSize: "1.1em" }, children: "Bạn đã hoàn thành thử thách này" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "center", gap: 24, margin: "16px 0" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "1.5em", fontWeight: 700, color: "var(--n4-primary)" }, children: [
              existingSub.score,
              "/",
              existingSub.total
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8em", color: "var(--n4-text-muted)" }, children: "Điểm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.5em", fontWeight: 700 }, children: formatTime(existingSub.time_seconds || 0) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8em", color: "var(--n4-text-muted)" }, children: "Thời gian" })
          ] }),
          rank > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "1.5em", fontWeight: 700, color: rank <= 3 ? "#f59e0b" : "var(--n4-text-primary)" }, children: [
              "#",
              rank
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8em", color: "var(--n4-text-muted)" }, children: "Xếp hạng" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Leaderboard, { data: leaderboard, userId: user.id }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/inbox", className: "n4-btn n4-btn-ghost", style: { marginTop: 16, display: "block", textAlign: "center" }, children: "← Quay lại Sự kiện" })
    ] });
  }
  if (phase === "ready") {
    const cfg = (challenge == null ? void 0 : challenge.quiz_config) || {};
    const ended = challenge && new Date(challenge.ends_at) < /* @__PURE__ */ new Date();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", style: { maxWidth: 600, width: "100%", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { marginBottom: 8 }, children: (challenge == null ? void 0 : challenge.title) || "Thử thách" }),
      (challenge == null ? void 0 : challenge.description) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-muted)", marginBottom: 16 }, children: challenge.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: 20, marginBottom: 16 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginBottom: 12 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-badge", children: [
            typeIcon[cfg.quiz_type] || "🎯",
            " ",
            cfg.quiz_type || "mixed"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-badge", children: [
            "📝 ",
            cfg.question_count || 10,
            " câu"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-badge", children: [
            "⏱️ ",
            cfg.time_limit_minutes || 5,
            " phút"
          ] })
        ] }),
        (challenge == null ? void 0 : challenge.ends_at) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: "0.85em", color: "var(--n4-text-muted)", textAlign: "center" }, children: [
          "Hạn: ",
          new Date(challenge.ends_at).toLocaleDateString("vi-VN"),
          " ",
          new Date(challenge.ends_at).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
        ] })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: 12, color: "var(--n4-danger)", marginBottom: 12 }, children: [
        "❌ ",
        error
      ] }),
      !ended ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", style: { width: "100%", padding: "14px 0", fontSize: "1.1em" }, onClick: handleStart, children: "🚀 Bắt đầu làm quiz" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-card", style: { padding: 16, textAlign: "center", color: "var(--n4-text-muted)" }, children: "⏰ Thử thách đã kết thúc" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/inbox", className: "n4-btn n4-btn-ghost", style: { marginTop: 12, display: "block", textAlign: "center" }, children: "← Quay lại Sự kiện" })
    ] });
  }
  if (phase === "quiz" && questions.length > 0) {
    const q = questions[currentQ];
    const progress = (currentQ + (selected !== null ? 1 : 0)) / questions.length * 100;
    const isLast = currentQ + 1 >= questions.length;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", style: { maxWidth: 600, width: "100%", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 600 }, children: [
          "Câu ",
          currentQ + 1,
          "/",
          questions.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 600, color: timeLeft < 30 ? "var(--n4-danger)" : "var(--n4-text-primary)", fontSize: "1.1em" }, children: [
          "⏱️ ",
          formatTime(timeLeft)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 6, background: "var(--n4-bg-secondary)", borderRadius: 3, marginBottom: 20, overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "100%", width: `${progress}%`, background: "var(--n4-primary)", borderRadius: 3, transition: "width 0.3s" } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: 24, textAlign: "center", marginBottom: 16 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.75em", color: "var(--n4-text-muted)", marginBottom: 8 }, children: [
          typeIcon[q.type] || "📝",
          " ",
          q.type === "vocab" ? "Từ vựng" : q.type === "kanji" ? "Kanji" : "Ngữ pháp"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2em", fontWeight: 700, marginBottom: 8 }, children: q.question }),
        q.hint && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.9em", color: "var(--n4-text-muted)" }, children: q.hint }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "n4-btn n4-btn-ghost n4-btn-sm",
            style: { marginTop: 8 },
            onClick: () => {
              stopSpeech();
              speakJP(q.question);
            },
            title: "Nghe phát âm",
            children: "🔊 Nghe"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }, children: q.options.map((opt, idx) => {
        var _a;
        let bg = "var(--n4-bg-secondary)";
        let border = "2px solid transparent";
        const optionIsCorrect = stableAnswerKey(opt) === q.answerKey;
        if (selected !== null) {
          if (optionIsCorrect) {
            bg = "rgba(34, 197, 94, 0.15)";
            border = "2px solid #22c55e";
          } else if (idx === selected && !((_a = answers[currentQ]) == null ? void 0 : _a.correct)) {
            bg = "rgba(239, 68, 68, 0.15)";
            border = "2px solid #ef4444";
          }
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleAnswer(idx),
            disabled: selected !== null,
            style: {
              padding: "14px 16px",
              borderRadius: 10,
              background: bg,
              border,
              textAlign: "left",
              fontSize: "1em",
              cursor: selected !== null ? "default" : "pointer",
              transition: "all 0.2s",
              color: "var(--n4-text-primary)"
            },
            children: opt
          },
          idx
        );
      }) }),
      selected !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 12 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: 12, fontSize: "0.9em", marginBottom: 8, color: "var(--n4-text-muted)" }, children: [
          "💡 ",
          q.explanation
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", style: { width: "100%" }, onClick: handleNext, children: isLast ? "📊 Xem kết quả" : "Câu tiếp theo →" })
      ] })
    ] });
  }
  if (phase === "submitting") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", style: { textAlign: "center", padding: 60 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2em", marginBottom: 12 }, children: "⏳" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-muted)" }, children: "Đang gửi kết quả..." })
    ] });
  }
  if (phase === "results" && results) {
    const pct = results.total > 0 ? Math.round(results.score / results.total * 100) : 0;
    const rank = leaderboard.findIndex((l) => l.user_id === user.id) + 1;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", style: { maxWidth: 600, width: "100%", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-challenge-result-banner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", top: 8, left: 16, fontSize: "1.5em", opacity: 0.5 }, children: "✨" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", top: 12, right: 20, fontSize: "1.3em", opacity: 0.5 }, children: "🌟" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", bottom: 10, left: "30%", fontSize: "1.2em", opacity: 0.4 }, children: "🎊" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "4em", marginBottom: 8 }, children: pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "💪" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { marginBottom: 4, fontSize: "1.6em" }, children: pct >= 80 ? "🏆 Xuất sắc!" : pct >= 50 ? "Tốt lắm!" : "Cố gắng thêm nhé!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--n4-text-muted)", marginBottom: 16, fontSize: "0.9em" }, children: pct >= 80 ? "Bạn đã chinh phục challenge này!" : pct >= 50 ? "Kết quả khá tốt, tiếp tục phát huy!" : "Luyện tập thêm để cải thiện kết quả!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "center", gap: 24, margin: "16px 0" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "2em", fontWeight: 700, color: "var(--n4-primary)" }, children: [
              results.score,
              "/",
              results.total
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.8em", color: "var(--n4-text-muted)" }, children: [
              "Điểm (",
              pct,
              "%)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "2em", fontWeight: 700 }, children: formatTime(results.timeSeconds) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8em", color: "var(--n4-text-muted)" }, children: "Thời gian" })
          ] }),
          rank > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "2em", fontWeight: 700, color: rank <= 3 ? "var(--n4-neon-yellow, #EAB308)" : "var(--n4-text-primary)" }, children: [
              "#",
              rank
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.8em", color: "var(--n4-text-muted)" }, children: "Xếp hạng" })
          ] })
        ] }),
        results.earnedXp > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-challenge-xp-reward", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "2em", fontWeight: 700, color: "var(--n4-primary)" }, children: [
            "+",
            results.earnedXp,
            " XP"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.9em", color: "var(--n4-text-muted)", marginTop: 2 }, children: "🎁 Phần thưởng đã được cộng vào tài khoản!" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { style: { marginBottom: 16 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { style: { cursor: "pointer", fontWeight: 600, padding: "8px 0" }, children: [
          "📝 Xem lại đáp án (",
          results.score,
          "/",
          results.total,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }, children: questions.map((q, i) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "10px 14px", fontSize: "0.9em", display: "flex", gap: 8, alignItems: "center" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ((_a = answers[i]) == null ? void 0 : _a.correct) ? "✅" : "❌" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600 }, children: q.question }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--n4-text-muted)", flex: 1 }, children: q.options.find((opt) => stableAnswerKey(opt) === q.answerKey) || q.options[0] })
          ] }, i);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Leaderboard, { data: leaderboard, userId: user.id }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/inbox", className: "n4-btn n4-btn-ghost", style: { marginTop: 16, display: "block", textAlign: "center" }, children: "← Quay lại Sự kiện" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-dashboard n4-page-enter", style: { textAlign: "center", padding: 60 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Không tìm thấy thử thách." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "n4-btn n4-btn-ghost", style: { marginTop: 16 }, children: "🏠 Về trang chủ" })
  ] });
}
function Leaderboard({ data, userId }) {
  if (!data.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { marginBottom: 8 }, children: "🏆 Bảng xếp hạng" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 4 }, children: data.map((entry, i) => {
      var _a, _b;
      const isMe = entry.user_id === userId;
      const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i + 1}`;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "n4-card",
          style: {
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: isMe ? "rgba(99, 102, 241, 0.08)" : void 0,
            border: isMe ? "1px solid var(--n4-primary)" : void 0
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 700, minWidth: 32 }, children: medal }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SafeAvatar, { src: ((_a = entry.user_profiles) == null ? void 0 : _a.avatar_url) || "" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { flex: 1, fontWeight: isMe ? 700 : 400 }, children: [
              ((_b = entry.user_profiles) == null ? void 0 : _b.display_name) || "Ẩn danh",
              isMe && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.8em", color: "var(--n4-primary)", marginLeft: 6 }, children: "(Bạn)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: 600 }, children: [
              entry.score,
              "/",
              entry.total
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.8em", color: "var(--n4-text-muted)" }, children: formatTime(entry.time_seconds || 0) })
          ]
        },
        entry.user_id
      );
    }) })
  ] });
}
export {
  ChallengeQuiz as default
};
