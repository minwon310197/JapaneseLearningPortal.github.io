import { d as safeSetItem, s as safeGetItem, bK as esc, ab as S } from "./feature-3d-CFvJkEt3.js";
import { s as showToast } from "./toast-CJdbqLP6.js";
import { g as getSRS, a as getBookmarks } from "./bookmarks-BRjrfByw.js";
import "./vendor-react-BYxMSDiB.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
function _ov(id) {
  var el = document.getElementById(id);
  if (!el) {
    el = document.createElement("div");
    el.id = id;
    el.className = "game-overlay";
    document.body.appendChild(el);
  }
  return el;
}
function _clOv(id) {
  var el = document.getElementById(id);
  if (el) {
    el.classList.remove("active");
    setTimeout(function() {
      el.remove();
    }, 300);
  }
}
function _getStats() {
  var bm = getBookmarks();
  var srs = getSRS();
  var vocabCount = 0, kanjiCount = 0, grammarCount = 0;
  S.vocab.forEach(function(s) {
    vocabCount += s.entries.length;
  });
  S.kanji.forEach(function(s) {
    kanjiCount += s.entries.length;
  });
  S.grammar.forEach(function(s) {
    grammarCount += s.patterns.length;
  });
  var bmCount = Object.keys(bm).length;
  var srsCount = Object.keys(srs).length;
  var masteredCount = 0;
  Object.values(srs).forEach(function(v) {
    if (v.level >= 4) masteredCount++;
  });
  var streak = 0;
  try {
    var ls = JSON.parse(safeGetItem("n4-learning") || "{}");
    streak = ls.state && ls.state.streak || 0;
  } catch (e) {
  }
  return { vocabCount, kanjiCount, grammarCount, bmCount, srsCount, masteredCount, streak };
}
function _getActivity() {
  var log = {};
  try {
    log = JSON.parse(safeGetItem("n4_activity_log") || "{}");
  } catch (e) {
  }
  return log;
}
function _logActivity() {
  var log = _getActivity();
  var today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  log[today] = (log[today] || 0) + 1;
  safeSetItem("n4_activity_log", JSON.stringify(log));
}
function _onOpen() {
  _logActivity();
}
function openMonthlyChart() {
  _onOpen();
  var log = _getActivity();
  var now = /* @__PURE__ */ new Date();
  var year = now.getFullYear(), month = now.getMonth();
  var daysInMonth = new Date(year, month + 1, 0).getDate();
  var maxVal = 1;
  var data = [];
  for (var d = 1; d <= daysInMonth; d++) {
    var key = year + "-" + String(month + 1).padStart(2, "0") + "-" + String(d).padStart(2, "0");
    var val = log[key] || 0;
    if (val > maxVal) maxVal = val;
    data.push({ day: d, val });
  }
  var ol = _ov("mchart-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📊 Biểu đồ tháng ' + (month + 1) + "/" + year + '</h3><span class="mg-close" onclick="closeMonthlyChart()">✕</span></div>';
  h += '<div class="an-chart">';
  data.forEach(function(d2) {
    var pct = maxVal > 0 ? Math.round(d2.val / maxVal * 100) : 0;
    h += '<div class="an-bar-wrap"><div class="an-bar" style="height:' + pct + '%"' + (d2.val > 0 ? ' title="' + d2.day + "/" + (month + 1) + ": " + d2.val + ' hoạt động"' : "") + '></div><div class="an-bar-label">' + d2.day + "</div></div>";
  });
  h += "</div>";
  var total = data.reduce(function(s, d2) {
    return s + d2.val;
  }, 0);
  var active = data.filter(function(d2) {
    return d2.val > 0;
  }).length;
  h += '<div class="an-summary">Tổng: ' + total + " hoạt động · " + active + "/" + daysInMonth + " ngày</div>";
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeMonthlyChart() {
  _clOv("mchart-overlay");
}
function openJLPTReadiness() {
  _onOpen();
  var st = _getStats();
  var vocabPct = Math.min(100, Math.round(st.bmCount / Math.max(1, st.vocabCount) * 100));
  var srsePct = Math.min(100, Math.round(st.masteredCount / Math.max(1, st.srsCount || 1) * 100));
  var streakPct = Math.min(100, Math.round((st.streak || 0) / 30 * 100));
  var overall = Math.round(vocabPct * 0.4 + srsePct * 0.3 + streakPct * 0.3);
  var ol = _ov("readiness-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🎯 JLPT N4 Readiness</h3><span class="mg-close" onclick="closeJLPTReadiness()">✕</span></div>';
  h += '<div class="an-readiness-score">' + overall + "%</div>";
  h += '<div class="an-readiness-bar"><div class="an-readiness-fill" style="width:' + overall + '%"></div></div>';
  h += '<div class="an-readiness-details">';
  h += '<div class="an-detail-row"><span>📚 Từ vựng đã bookmark</span><span>' + st.bmCount + "/" + st.vocabCount + " (" + vocabPct + "%)</span></div>";
  h += '<div class="an-detail-row"><span>🧠 SRS đã master</span><span>' + st.masteredCount + "/" + st.srsCount + " (" + srsePct + "%)</span></div>";
  h += '<div class="an-detail-row"><span>🔥 Streak học liên tục</span><span>' + (st.streak || 0) + "/30 ngày (" + streakPct + "%)</span></div>";
  h += '<div class="an-detail-row"><span>✏️ Kanji</span><span>' + st.kanjiCount + " entries</span></div>";
  h += '<div class="an-detail-row"><span>📖 Ngữ pháp</span><span>' + st.grammarCount + " mẫu</span></div>";
  h += "</div>";
  h += '<div class="at-tip">' + (overall >= 80 ? "🌟 Sẵn sàng thi!" : overall >= 50 ? "💪 Đang tiến bộ tốt!" : "📖 Tiếp tục nỗ lực!") + "</div>";
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeJLPTReadiness() {
  _clOv("readiness-overlay");
}
function openHeatmap() {
  _onOpen();
  var log = _getActivity();
  var now = /* @__PURE__ */ new Date();
  var ol = _ov("heatmap-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🟩 Activity Heatmap</h3><span class="mg-close" onclick="closeHeatmap()">✕</span></div>';
  h += '<div class="an-heatmap">';
  for (var i = 83; i >= 0; i--) {
    var d = new Date(now);
    d.setDate(d.getDate() - i);
    var key = d.toISOString().slice(0, 10);
    var val = log[key] || 0;
    var level = val === 0 ? 0 : val <= 2 ? 1 : val <= 5 ? 2 : val <= 10 ? 3 : 4;
    h += '<div class="an-hm-cell hm-l' + level + '" title="' + key + ": " + val + '"></div>';
  }
  h += "</div>";
  h += '<div class="an-hm-legend">Ít <span class="an-hm-cell hm-l0"></span><span class="an-hm-cell hm-l1"></span><span class="an-hm-cell hm-l2"></span><span class="an-hm-cell hm-l3"></span><span class="an-hm-cell hm-l4"></span> Nhiều</div>';
  var totalDays = Object.keys(log).length;
  var totalAct = Object.values(log).reduce(function(s, v) {
    return s + v;
  }, 0);
  h += '<div class="an-summary">' + totalDays + " ngày hoạt động · " + totalAct + " tổng hoạt động</div>";
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeHeatmap() {
  _clOv("heatmap-overlay");
}
function openGoalComparison() {
  _onOpen();
  var goals = {};
  try {
    goals = JSON.parse(safeGetItem("n4_goals") || "{}");
  } catch (e) {
  }
  var st = _getStats();
  var ol = _ov("goalcomp-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📈 Goal Comparison</h3><span class="mg-close" onclick="closeGoalComparison()">✕</span></div>';
  h += '<div class="an-goals">';
  var items = [
    { name: "Bookmark từ vựng", actual: st.bmCount, target: goals.vocabTarget || 200 },
    { name: "SRS mastered", actual: st.masteredCount, target: goals.srsTarget || 100 },
    { name: "Ngày liên tiếp", actual: Object.keys(_getActivity()).length, target: goals.streakTarget || 30 }
  ];
  items.forEach(function(item) {
    var pct = Math.min(100, Math.round(item.actual / item.target * 100));
    h += '<div class="an-goal-row">';
    h += '<div class="an-goal-name">' + esc(item.name) + "</div>";
    h += '<div class="an-goal-bar"><div class="an-goal-fill" style="width:' + pct + '%"></div></div>';
    h += '<div class="an-goal-nums">' + item.actual + "/" + item.target + " (" + pct + "%)</div>";
    h += "</div>";
  });
  h += "</div>";
  h += '<div class="an-goal-edit"><h4>Đặt mục tiêu:</h4>';
  h += '<label>Từ vựng: <input type="number" id="goal-vocab" value="' + (goals.vocabTarget || 200) + '" min="1" /></label>';
  h += '<label>SRS: <input type="number" id="goal-srs" value="' + (goals.srsTarget || 100) + '" min="1" /></label>';
  h += '<label>Ngày: <input type="number" id="goal-streak" value="' + (goals.streakTarget || 30) + '" min="1" /></label>';
  h += '<button class="st-btn primary" onclick="saveGoals()">💾 Lưu</button>';
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function saveGoals() {
  var v = document.getElementById("goal-vocab");
  var s = document.getElementById("goal-srs");
  var d = document.getElementById("goal-streak");
  var goals = {
    vocabTarget: parseInt(v ? v.value : 200) || 200,
    srsTarget: parseInt(s ? s.value : 100) || 100,
    streakTarget: parseInt(d ? d.value : 30) || 30
  };
  safeSetItem("n4_goals", JSON.stringify(goals));
  showToast("Đã lưu mục tiêu!");
  openGoalComparison();
}
function closeGoalComparison() {
  _clOv("goalcomp-overlay");
}
function openStrengthAnalysis() {
  _onOpen();
  var srs = getSRS();
  var bm = getBookmarks();
  var categories = {};
  S.vocab.forEach(function(sec) {
    var total = sec.entries.length;
    var bookmarked = 0, mastered = 0;
    sec.entries.forEach(function(e) {
      var key = "v_" + e.word;
      if (bm[key]) bookmarked++;
      if (srs[key] && srs[key].level >= 4) mastered++;
    });
    categories[sec.name] = { total, bookmarked, mastered, pct: total > 0 ? Math.round(bookmarked / total * 100) : 0 };
  });
  var sorted = Object.entries(categories).sort(function(a, b) {
    return a[1].pct - b[1].pct;
  });
  var ol = _ov("strength-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>💪 Strength Analysis</h3><span class="mg-close" onclick="closeStrengthAnalysis()">✕</span></div>';
  h += '<div class="an-strength">';
  if (sorted.length > 0) {
    h += '<div class="an-weak"><h4>⚠️ Cần cải thiện:</h4>';
    sorted.slice(0, 3).forEach(function(item) {
      h += '<div class="an-str-row weak"><span>' + esc(item[0]) + "</span><span>" + item[1].pct + "%</span></div>";
    });
    h += "</div>";
    h += '<div class="an-strong"><h4>🌟 Mạnh nhất:</h4>';
    sorted.slice(-3).reverse().forEach(function(item) {
      h += '<div class="an-str-row strong"><span>' + esc(item[0]) + "</span><span>" + item[1].pct + "%</span></div>";
    });
    h += "</div>";
  }
  h += "<h4>📋 Chi tiết:</h4>";
  sorted.forEach(function(item) {
    var d = item[1];
    h += '<div class="an-detail-row"><span>' + esc(item[0]) + "</span><span>" + d.bookmarked + "/" + d.total + " (" + d.pct + "%)</span></div>";
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeStrengthAnalysis() {
  _clOv("strength-overlay");
}
function openTimeStats() {
  _onOpen();
  var timeLog = {};
  try {
    timeLog = JSON.parse(safeGetItem("n4_time_log") || "{}");
  } catch (e) {
  }
  var sessionStart = window._n4SessionStart || Date.now();
  window._n4SessionStart = sessionStart;
  var today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  var sessionMin = Math.round((Date.now() - sessionStart) / 6e4);
  timeLog[today] = (timeLog[today] || 0) + (sessionMin > 0 ? sessionMin : 1);
  safeSetItem("n4_time_log", JSON.stringify(timeLog));
  var ol = _ov("timestats-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>⏱ Study Time</h3><span class="mg-close" onclick="closeTimeStats()">✕</span></div>';
  var totalMin = Object.values(timeLog).reduce(function(s, v) {
    return s + v;
  }, 0);
  var totalDays = Object.keys(timeLog).length;
  var avgMin = totalDays > 0 ? Math.round(totalMin / totalDays) : 0;
  h += '<div class="an-time-summary">';
  h += '<div class="an-time-stat"><div class="an-time-num">' + totalMin + "</div><div>phút tổng</div></div>";
  h += '<div class="an-time-stat"><div class="an-time-num">' + totalDays + "</div><div>ngày học</div></div>";
  h += '<div class="an-time-stat"><div class="an-time-num">' + avgMin + "</div><div>phút/ngày</div></div>";
  h += "</div>";
  h += '<div class="an-time-recent"><h4>7 ngày gần nhất:</h4>';
  var now = /* @__PURE__ */ new Date();
  for (var i = 6; i >= 0; i--) {
    var d = new Date(now);
    d.setDate(d.getDate() - i);
    var key = d.toISOString().slice(0, 10);
    var min = timeLog[key] || 0;
    h += '<div class="an-detail-row"><span>' + key.slice(5) + "</span><span>" + min + " phút</span></div>";
  }
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeTimeStats() {
  _clOv("timestats-overlay");
}
function openWeeklyReport() {
  _onOpen();
  var log = _getActivity();
  var st = _getStats();
  var now = /* @__PURE__ */ new Date();
  var weekDays = [];
  for (var i = 6; i >= 0; i--) {
    var d = new Date(now);
    d.setDate(d.getDate() - i);
    weekDays.push(d.toISOString().slice(0, 10));
  }
  var weekActivity = weekDays.reduce(function(s, k) {
    return s + (log[k] || 0);
  }, 0);
  var activeDays = weekDays.filter(function(k) {
    return (log[k] || 0) > 0;
  }).length;
  var ol = _ov("weekly-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>📋 Weekly Report</h3><span class="mg-close" onclick="closeWeeklyReport()">✕</span></div>';
  h += '<div class="an-report">';
  h += '<div class="an-report-period">' + weekDays[0] + " → " + weekDays[6] + "</div>";
  h += '<div class="an-time-summary">';
  h += '<div class="an-time-stat"><div class="an-time-num">' + weekActivity + "</div><div>hoạt động</div></div>";
  h += '<div class="an-time-stat"><div class="an-time-num">' + activeDays + "/7</div><div>ngày học</div></div>";
  h += '<div class="an-time-stat"><div class="an-time-num">' + st.bmCount + "</div><div>bookmarks</div></div>";
  h += "</div>";
  h += '<div class="an-report-detail">';
  weekDays.forEach(function(day) {
    var act = log[day] || 0;
    var dayName = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"][new Date(day).getDay()];
    h += '<div class="an-detail-row"><span>' + dayName + " " + day.slice(5) + "</span><span>" + (act > 0 ? "✅ " + act : "—") + "</span></div>";
  });
  h += "</div></div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeWeeklyReport() {
  _clOv("weekly-overlay");
}
function openLeaderboard() {
  _onOpen();
  var scores = {};
  try {
    scores = JSON.parse(safeGetItem("n4_highscores") || "{}");
  } catch (e) {
  }
  var ol = _ov("leader-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🏆 Leaderboard</h3><span class="mg-close" onclick="closeLeaderboard()">✕</span></div>';
  var entries = Object.entries(scores).sort(function(a, b) {
    return b[1] - a[1];
  });
  if (entries.length === 0) {
    h += '<div class="at-tip">Chưa có điểm nào. Hãy chơi game để ghi điểm!</div>';
  } else {
    h += '<div class="an-leaderboard">';
    entries.forEach(function(entry, i) {
      var medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : "  ";
      h += '<div class="an-lb-row"><span class="an-lb-rank">' + medal + " " + (i + 1) + '</span><span class="an-lb-name">' + esc(entry[0]) + '</span><span class="an-lb-score">' + entry[1] + "</span></div>";
    });
    h += "</div>";
  }
  h += '<button class="st-btn" onclick="clearLeaderboard()" style="margin:12px auto;display:block">🗑 Xóa bảng điểm</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function clearLeaderboard() {
  safeSetItem("n4_highscores", "{}");
  showToast("Đã xóa");
  openLeaderboard();
}
function closeLeaderboard() {
  _clOv("leader-overlay");
}
function openSmartGoals() {
  _onOpen();
  var smartGoals = [];
  try {
    smartGoals = JSON.parse(safeGetItem("n4_smart_goals") || "[]");
  } catch (e) {
  }
  var ol = _ov("smart-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🎯 SMART Goals</h3><span class="mg-close" onclick="closeSmartGoals()">✕</span></div>';
  h += '<div class="at-tip">S=Specific, M=Measurable, A=Achievable, R=Relevant, T=Time-bound</div>';
  h += '<div class="an-smart-form">';
  h += '<input class="pz-spt-input" id="sg-goal" placeholder="Mục tiêu cụ thể..." />';
  h += '<input class="pz-spt-input" id="sg-measure" placeholder="Đo lường: vd. 50 từ/tuần" />';
  h += '<input class="pz-spt-input" id="sg-deadline" placeholder="Hạn chót: vd. 2025-06-30" type="date" />';
  h += '<button class="st-btn primary" onclick="sgAdd()">+ Thêm mục tiêu</button>';
  h += "</div>";
  h += '<div class="an-smart-list">';
  smartGoals.forEach(function(g, i) {
    h += '<div class="an-smart-item' + (g.done ? " done" : "") + '">';
    h += '<input type="checkbox" ' + (g.done ? "checked" : "") + ' onchange="sgToggle(' + i + ')" />';
    h += "<div><b>" + esc(g.goal) + "</b><br><small>" + esc(g.measure) + " · Hạn: " + esc(g.deadline) + "</small></div>";
    h += '<button class="at-pl-rm" onclick="sgRemove(' + i + ')">✕</button>';
    h += "</div>";
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function sgAdd() {
  var goal = document.getElementById("sg-goal");
  var measure = document.getElementById("sg-measure");
  var deadline = document.getElementById("sg-deadline");
  if (!goal || !goal.value.trim()) {
    showToast("Nhập mục tiêu");
    return;
  }
  var goals = [];
  try {
    goals = JSON.parse(safeGetItem("n4_smart_goals") || "[]");
  } catch (e) {
  }
  goals.push({ goal: goal.value.trim(), measure: measure ? measure.value.trim() : "", deadline: deadline ? deadline.value : "", done: false });
  safeSetItem("n4_smart_goals", JSON.stringify(goals));
  openSmartGoals();
}
function sgToggle(idx) {
  var goals = [];
  try {
    goals = JSON.parse(safeGetItem("n4_smart_goals") || "[]");
  } catch (e) {
  }
  if (goals[idx]) goals[idx].done = !goals[idx].done;
  safeSetItem("n4_smart_goals", JSON.stringify(goals));
  openSmartGoals();
}
function sgRemove(idx) {
  var goals = [];
  try {
    goals = JSON.parse(safeGetItem("n4_smart_goals") || "[]");
  } catch (e) {
  }
  goals.splice(idx, 1);
  safeSetItem("n4_smart_goals", JSON.stringify(goals));
  openSmartGoals();
}
function closeSmartGoals() {
  _clOv("smart-overlay");
}
var _REWARDS = [
  { days: 3, title: "🔥 3 ngày liên tiếp", desc: "Bắt đầu tốt!" },
  { days: 7, title: "⭐ 1 tuần", desc: "Kiên trì!" },
  { days: 14, title: "🌟 2 tuần", desc: "Ấn tượng!" },
  { days: 30, title: "🏅 1 tháng", desc: "Xuất sắc!" },
  { days: 60, title: "🏆 2 tháng", desc: "Tuyệt vời!" },
  { days: 100, title: "💎 100 ngày", desc: "Huyền thoại!" },
  { days: 365, title: "👑 1 năm", desc: "Master!" }
];
function openStreakRewards() {
  _onOpen();
  var log = _getActivity();
  var days = Object.keys(log).sort();
  var streak = 0;
  if (days.length > 0) {
    streak = 1;
    (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    var d = /* @__PURE__ */ new Date();
    while (true) {
      var key = d.toISOString().slice(0, 10);
      if (log[key]) {
        d.setDate(d.getDate() - 1);
        streak++;
      } else break;
    }
    streak--;
  }
  var ol = _ov("streak-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🔥 Streak Rewards</h3><span class="mg-close" onclick="closeStreakRewards()">✕</span></div>';
  h += '<div class="an-streak-current">🔥 Streak hiện tại: <b>' + streak + "</b> ngày</div>";
  h += '<div class="an-rewards">';
  _REWARDS.forEach(function(r) {
    var unlocked = streak >= r.days;
    h += '<div class="an-reward-card' + (unlocked ? " unlocked" : "") + '">';
    h += '<div class="an-reward-title">' + r.title + "</div>";
    h += '<div class="an-reward-desc">' + esc(r.desc) + "</div>";
    h += '<div class="an-reward-status">' + (unlocked ? "✅ Đã mở khóa!" : "🔒 Cần " + r.days + " ngày") + "</div>";
    h += "</div>";
  });
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function closeStreakRewards() {
  _clOv("streak-overlay");
}
export {
  clearLeaderboard,
  closeGoalComparison,
  closeHeatmap,
  closeJLPTReadiness,
  closeLeaderboard,
  closeMonthlyChart,
  closeSmartGoals,
  closeStreakRewards,
  closeStrengthAnalysis,
  closeTimeStats,
  closeWeeklyReport,
  openGoalComparison,
  openHeatmap,
  openJLPTReadiness,
  openLeaderboard,
  openMonthlyChart,
  openSmartGoals,
  openStreakRewards,
  openStrengthAnalysis,
  openTimeStats,
  openWeeklyReport,
  saveGoals,
  sgAdd,
  sgRemove,
  sgToggle
};
