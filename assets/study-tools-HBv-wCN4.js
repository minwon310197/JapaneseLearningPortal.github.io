import { ai as S, s as safeGetItem, d as safeSetItem, ao as esc, h as useLearningStore, av as isLessonFilterActive, A as effectiveStart, z as effectiveCap, au as selectDueSrsEntries } from "./index-BEJSIlFS.js";
import { w as worldOverlayMount, b as canonicalToolState } from "./legacy-loader-gyvSYPc3.js";
import { s as showToast } from "./toast-Dwy3w2e2.js";
/* empty css               */
import { getBookmarks, getSRS } from "./bookmarks-DzO2NqfT.js";
import "./vendor-react-BUL8WuXG.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./world-tool-destinations-BAVvWbat.js";
function showConfirm(msg, onOk) {
  var overlay = document.getElementById("confirm-overlay");
  var msgEl = document.getElementById("confirm-msg");
  var okBtn = document.getElementById("confirm-ok");
  var cancelBtn = document.getElementById("confirm-cancel");
  msgEl.textContent = msg;
  overlay.style.display = "flex";
  function cleanup() {
    overlay.style.display = "none";
    okBtn.onclick = null;
    cancelBtn.onclick = null;
  }
  cancelBtn.onclick = function() {
    cleanup();
  };
  okBtn.onclick = function() {
    cleanup();
    if (onOk) onOk();
  };
}
function _getStudyStats() {
  var bm = getBookmarks(), srs = getSRS();
  var bmKeys = Object.keys(bm), srsKeys = Object.keys(srs);
  var kBm = 0, vBm = 0, gBm = 0;
  bmKeys.forEach(function(k) {
    if (k.startsWith("kanji:")) kBm++;
    else if (k.startsWith("vocab:")) vBm++;
    else if (k.startsWith("grammar:")) gBm++;
  });
  var srsLevels = [0, 0, 0, 0, 0];
  srsKeys.forEach(function(k) {
    var lv = srs[k];
    if (lv >= 0 && lv <= 4) srsLevels[lv]++;
  });
  var kT = 0, vT = 0, gT = 0;
  S.kanji.forEach(function(s) {
    kT += s.entries.length;
  });
  S.vocab.forEach(function(s) {
    s.entries.forEach(function(e) {
      vT++;
      if (e.word2) vT++;
    });
  });
  S.grammar.forEach(function(s) {
    gT += s.patterns.length;
  });
  return { kBm, vBm, gBm, kT, vT, gT, total: kT + vT + gT, bmTotal: bmKeys.length, srsTotal: srsKeys.length, srsLevels };
}
var _timerInterval = null;
var _timerSeconds = 0;
var _timerTarget = 25 * 60;
var _timerSubmittedSeconds = 0;
function openStudyTimer() {
  var existing = document.getElementById("study-timer-modal");
  if (existing) {
    existing.remove();
  }
  var total = safeGetItem("n4-study-total") || "0";
  var modal = document.createElement("div");
  modal.id = "study-timer-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeStudyTimer();
  };
  modal.innerHTML = '<div class="st-modal"><div class="st-modal-header"><h3>⏱️ Hẹn giờ học tập</h3><button class="st-close" onclick="closeStudyTimer()">✕</button></div><div class="st-timer-display" id="st-display">25:00</div><div class="st-timer-presets"><button onclick="_setTimerPreset(5)">5p</button><button onclick="_setTimerPreset(10)">10p</button><button onclick="_setTimerPreset(15)">15p</button><button onclick="_setTimerPreset(25)" class="active">25p</button><button onclick="_setTimerPreset(45)">45p</button><button onclick="_setTimerPreset(60)">60p</button></div><div class="st-timer-controls"><button class="st-btn primary" id="st-start" onclick="_toggleTimer()">▶ Bắt đầu</button><button class="st-btn" onclick="_resetTimer()">↩ Đặt lại</button></div><div class="st-timer-stats">📊 Tổng thời gian đã học: <strong>' + Math.floor(parseInt(total) / 60) + "</strong> phút</div></div>";
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
}
function closeStudyTimer() {
  var modal = document.getElementById("study-timer-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
  if (_timerInterval) {
    clearInterval(_timerInterval);
    _timerInterval = null;
  }
  _creditStudyTime();
}
function _creditStudyTime() {
  var unsubmitted = _timerSeconds - _timerSubmittedSeconds;
  if (unsubmitted >= 60) {
    var mins = Math.floor(unsubmitted / 60);
    try {
      useLearningStore.getState().addActiveTime(mins);
    } catch (e) {
    }
    _timerSubmittedSeconds += mins * 60;
  }
}
function _setTimerPreset(mins) {
  _timerTarget = mins * 60;
  _timerSeconds = 0;
  if (_timerInterval) {
    clearInterval(_timerInterval);
    _timerInterval = null;
  }
  _updateTimerDisplay();
  var btns = document.querySelectorAll(".st-timer-presets button");
  btns.forEach(function(b) {
    b.classList.toggle("active", b.textContent === mins + "p");
  });
  var startBtn = document.getElementById("st-start");
  if (startBtn) startBtn.innerHTML = "▶ Bắt đầu";
}
function _toggleTimer() {
  if (_timerInterval) {
    clearInterval(_timerInterval);
    _timerInterval = null;
    document.getElementById("st-start").innerHTML = "▶ Tiếp tục";
  } else {
    _timerInterval = setInterval(function() {
      _timerSeconds++;
      _updateTimerDisplay();
      if (_timerSeconds >= _timerTarget) {
        clearInterval(_timerInterval);
        _timerInterval = null;
        var total = parseInt(safeGetItem("n4-study-total") || "0") + _timerTarget;
        safeSetItem("n4-study-total", total.toString());
        var unsubmitted = _timerTarget - _timerSubmittedSeconds;
        if (unsubmitted > 0) {
          try {
            useLearningStore.getState().addActiveTime(Math.floor(unsubmitted / 60));
          } catch (e) {
          }
          _timerSubmittedSeconds = _timerTarget;
        }
        showToast("🎉 Hoàn thành " + Math.floor(_timerTarget / 60) + " phút học! +🪙 Nhận coin!");
        document.getElementById("st-start").innerHTML = "✅ Hoàn thành!";
        try {
          navigator.vibrate && navigator.vibrate([200, 100, 200]);
        } catch (e) {
        }
      }
    }, 1e3);
    document.getElementById("st-start").innerHTML = "⏸ Tạm dừng";
  }
}
function _resetTimer() {
  if (_timerInterval) {
    clearInterval(_timerInterval);
    _timerInterval = null;
  }
  _timerSeconds = 0;
  _timerSubmittedSeconds = 0;
  _updateTimerDisplay();
  document.getElementById("st-start").innerHTML = "▶ Bắt đầu";
}
function _updateTimerDisplay() {
  var remaining = _timerTarget - _timerSeconds;
  if (remaining < 0) remaining = 0;
  var m = Math.floor(remaining / 60);
  var s = remaining % 60;
  var el = document.getElementById("st-display");
  if (el) el.textContent = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
}
function openKanaChart() {
  var existing = document.getElementById("kana-chart-modal");
  if (existing) {
    existing.remove();
  }
  var modal = document.createElement("div");
  modal.id = "kana-chart-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeKanaChart();
  };
  var hiragana = [
    ["あ a", "い i", "う u", "え e", "お o"],
    ["か ka", "き ki", "く ku", "け ke", "こ ko"],
    ["さ sa", "し shi", "す su", "せ se", "そ so"],
    ["た ta", "ち chi", "つ tsu", "て te", "と to"],
    ["な na", "に ni", "ぬ nu", "ね ne", "の no"],
    ["は ha", "ひ hi", "ふ fu", "へ he", "ほ ho"],
    ["ま ma", "み mi", "む mu", "め me", "も mo"],
    ["や ya", "", "ゆ yu", "", "よ yo"],
    ["ら ra", "り ri", "る ru", "れ re", "ろ ro"],
    ["わ wa", "", "", "", "を wo"],
    ["ん n", "", "", "", ""]
  ];
  var katakana = [
    ["ア a", "イ i", "ウ u", "エ e", "オ o"],
    ["カ ka", "キ ki", "ク ku", "ケ ke", "コ ko"],
    ["サ sa", "シ shi", "ス su", "セ se", "ソ so"],
    ["タ ta", "チ chi", "ツ tsu", "テ te", "ト to"],
    ["ナ na", "ニ ni", "ヌ nu", "ネ ne", "ノ no"],
    ["ハ ha", "ヒ hi", "フ fu", "ヘ he", "ホ ho"],
    ["マ ma", "ミ mi", "ム mu", "メ me", "モ mo"],
    ["ヤ ya", "", "ユ yu", "", "ヨ yo"],
    ["ラ ra", "リ ri", "ル ru", "レ re", "ロ ro"],
    ["ワ wa", "", "", "", "ヲ wo"],
    ["ン n", "", "", "", ""]
  ];
  function buildTable(data) {
    var t = '<table class="kana-table">';
    for (var r = 0; r < data.length; r++) {
      t += "<tr>";
      for (var c = 0; c < data[r].length; c++) {
        var cell = data[r][c];
        if (!cell) {
          t += '<td class="kana-empty"></td>';
          continue;
        }
        var parts = cell.split(" ");
        var kana = parts[0], romaji = parts[1] || "";
        t += `<td class="kana-cell" onclick="speak('` + esc(kana).replace(/'/g, "\\'") + `')">`;
        t += '<span class="kana-char">' + esc(kana) + "</span>";
        t += '<span class="kana-rom">' + esc(romaji) + "</span>";
        t += "</td>";
      }
      t += "</tr>";
    }
    t += "</table>";
    return t;
  }
  modal.innerHTML = `<div class="st-modal st-modal-wide"><div class="st-modal-header"><h3>あ Bảng Kana</h3><button class="st-close" onclick="closeKanaChart()">✕</button></div><div class="kana-tabs"><button class="kana-tab-btn active" onclick="this.parentElement.querySelectorAll('.kana-tab-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active');document.getElementById('kana-hira').style.display='';document.getElementById('kana-kata').style.display='none'">ひらがな Hiragana</button><button class="kana-tab-btn" onclick="this.parentElement.querySelectorAll('.kana-tab-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active');document.getElementById('kana-hira').style.display='none';document.getElementById('kana-kata').style.display=''">カタカナ Katakana</button></div><div id="kana-hira" class="kana-chart-body">` + buildTable(hiragana) + '</div><div id="kana-kata" class="kana-chart-body" style="display:none">' + buildTable(katakana) + '</div><div style="text-align:center;padding:8px;font-size:0.72rem;color:var(--text-muted)">💡 Nhấn vào ô để nghe phát âm</div></div>';
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
}
function closeKanaChart() {
  var modal = document.getElementById("kana-chart-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function openStudyNotes() {
  var existing = document.getElementById("study-notes-modal");
  if (existing) {
    existing.remove();
  }
  var notes = safeGetItem("n4-study-notes") || "";
  var modal = document.createElement("div");
  modal.id = "study-notes-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeStudyNotes();
  };
  modal.innerHTML = '<div class="st-modal"><div class="st-modal-header"><h3>📝 Ghi chú nhanh</h3><button class="st-close" onclick="closeStudyNotes()">✕</button></div><textarea id="study-notes-textarea" class="st-notes-area" placeholder="Ghi chép từ mới, ngữ pháp cần nhớ, mẹo học...">' + esc(notes) + '</textarea><div class="st-notes-footer"><span class="st-notes-count" id="st-notes-count">' + notes.length + ' ký tự</span><div style="display:flex;gap:6px"><button class="st-btn" onclick="_clearNoteText()" title="Xóa nội dung">🗑️ Xóa</button><button class="st-btn" onclick="_archiveNote()">📥 Lưu bản</button><button class="st-btn" onclick="_toggleSavedNotes()">📋 Đã lưu</button></div></div><div id="st-notes-log-area"></div></div>';
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
  var ta = document.getElementById("study-notes-textarea");
  if (ta) {
    ta.oninput = function() {
      var c = document.getElementById("st-notes-count");
      if (c) c.textContent = ta.value.length + " ký tự";
    };
  }
}
function closeStudyNotes() {
  var ta = document.getElementById("study-notes-textarea");
  if (ta && ta.value.trim()) safeSetItem("n4-study-notes", ta.value);
  var modal = document.getElementById("study-notes-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function _clearNoteText() {
  var ta = document.getElementById("study-notes-textarea");
  if (ta) {
    ta.value = "";
    safeSetItem("n4-study-notes", "");
    var c = document.getElementById("st-notes-count");
    if (c) c.textContent = "0 ký tự";
    showToast("🗑️ Đã xóa nội dung");
  }
}
function _archiveNote() {
  var ta = document.getElementById("study-notes-textarea");
  if (!ta || !ta.value.trim()) {
    showToast("Ghi chú trống");
    return;
  }
  var log = _getNotesLog();
  var d = /* @__PURE__ */ new Date();
  var dateStr = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0") + " " + String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
  log.unshift({ date: dateStr, text: ta.value, preview: ta.value.substring(0, 60).replace(/\n/g, " ") });
  if (log.length > 30) log.pop();
  try {
    safeSetItem("n4-study-notes-log", JSON.stringify(log));
  } catch (e) {
  }
  ta.value = "";
  safeSetItem("n4-study-notes", "");
  var c = document.getElementById("st-notes-count");
  if (c) c.textContent = "0 ký tự";
  showToast("📥 Đã lưu bản ghi chú");
  var logArea = document.getElementById("st-notes-log-area");
  if (logArea && logArea.innerHTML) _renderNotesLog(logArea);
}
function _toggleSavedNotes() {
  var logArea = document.getElementById("st-notes-log-area");
  if (!logArea) return;
  if (logArea.innerHTML) {
    logArea.innerHTML = "";
    return;
  }
  _renderNotesLog(logArea);
}
function _renderNotesLog(logArea) {
  var savedList = _getNotesLog();
  if (!savedList.length) {
    logArea.innerHTML = '<div style="padding:12px;text-align:center;font-size:0.78rem;color:var(--text-muted)">Chưa có ghi chú đã lưu</div>';
    return;
  }
  var html = '<div class="st-notes-log"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px"><span style="font-size:0.72rem;font-weight:700;color:var(--text-muted)">📋 Ghi chú đã lưu (' + savedList.length + ')</span><button onclick="_deleteAllNotes()" style="background:none;border:none;cursor:pointer;color:var(--danger);font-size:0.7rem;font-weight:600;padding:2px 6px" title="Xóa tất cả">🗑️ Xóa hết</button></div>';
  for (var i = 0; i < savedList.length; i++) {
    var entry = savedList[i];
    html += '<div class="st-notes-log-item">';
    html += '<div style="display:flex;align-items:center;gap:6px;cursor:pointer" onclick="_loadNoteEntry(' + i + ')">';
    html += '<span style="font-size:0.7rem;color:var(--text-muted)">' + esc(entry.date) + "</span>";
    html += '<span style="font-size:0.72rem;color:var(--text);flex:1">' + esc(entry.preview) + "</span>";
    html += "</div>";
    html += '<button onclick="_deleteNoteEntry(' + i + ')" style="background:none;border:none;cursor:pointer;color:var(--danger);font-size:0.78rem;padding:2px 4px" title="Xóa">✕</button>';
    html += "</div>";
  }
  html += "</div>";
  logArea.innerHTML = html;
}
function _loadNoteEntry(idx) {
  var log = _getNotesLog();
  if (log[idx]) {
    var ta = document.getElementById("study-notes-textarea");
    if (ta) {
      ta.value = log[idx].text;
      safeSetItem("n4-study-notes", log[idx].text);
      var c = document.getElementById("st-notes-count");
      if (c) c.textContent = ta.value.length + " ký tự";
      showToast("📋 Đã tải ghi chú");
    }
  }
}
function _deleteAllNotes() {
  var log = _getNotesLog();
  if (!log.length) {
    showToast("Không có ghi chú nào");
    return;
  }
  safeSetItem("n4-study-notes-log", "[]");
  showToast("🗑️ Đã xóa tất cả ghi chú");
  var logArea = document.getElementById("st-notes-log-area");
  if (logArea) _renderNotesLog(logArea);
}
function _deleteNoteEntry(idx) {
  var log = _getNotesLog();
  if (idx >= 0 && idx < log.length) {
    log.splice(idx, 1);
    try {
      safeSetItem("n4-study-notes-log", JSON.stringify(log));
    } catch (e) {
    }
    showToast("🗑️ Đã xóa ghi chú");
    var logArea = document.getElementById("st-notes-log-area");
    if (logArea) _renderNotesLog(logArea);
  }
}
function _saveStudyNotes() {
  var ta = document.getElementById("study-notes-textarea");
  if (ta) {
    safeSetItem("n4-study-notes", ta.value);
    showToast("💾 Đã lưu ghi chú");
  }
}
function _getNotesLog() {
  try {
    return JSON.parse(safeGetItem("n4-study-notes-log") || "[]");
  } catch (e) {
    return [];
  }
}
function openMistakeNotebook() {
  var existing = document.getElementById("mistake-notebook-modal");
  if (existing) existing.remove();
  var mistakes = {};
  mistakes = _canonicalMistakeCounts();
  var arr = [];
  for (var key in mistakes) {
    if (mistakes.hasOwnProperty(key)) arr.push({ word: key.replace(/^(vocab|kanji|grammar):/, ""), count: mistakes[key] });
  }
  arr.sort(function(a, b) {
    return b.count - a.count;
  });
  var modal = document.createElement("div");
  modal.id = "mistake-notebook-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeMistakeNotebook();
  };
  var h = '<div class="st-modal">';
  h += '<div class="st-modal-header"><h3>❌ Sổ tay lỗi sai</h3><button class="st-close" onclick="closeMistakeNotebook()">✕</button></div>';
  if (arr.length === 0) {
    h += '<div style="padding:30px;text-align:center;color:var(--text-muted)">🎉 Chưa có lỗi sai nào! Hãy chơi Quiz để bắt đầu theo dõi.</div>';
  } else {
    h += '<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:10px">📊 ' + arr.length + " từ đã sai — sắp xếp theo số lần sai</div>";
    h += '<div class="mn-list">';
    for (var i = 0; i < Math.min(arr.length, 50); i++) {
      var it = arr[i];
      h += '<div class="mn-item">';
      h += `<span class="mn-word" onclick="speak('` + esc(it.word).replace(/'/g, "\\'") + `')">` + esc(it.word) + "</span>";
      h += '<span class="mn-count">' + it.count + " lần</span>";
      h += "</div>";
    }
    h += "</div>";
    h += '<div style="margin-top:12px;text-align:center">';
    h += '<button class="st-btn" onclick="_clearMistakes()">🗑️ Xóa tất cả</button>';
    h += "</div>";
  }
  h += "</div>";
  modal.innerHTML = h;
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
}
function closeMistakeNotebook() {
  var modal = document.getElementById("mistake-notebook-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function _clearMistakes() {
  showConfirm("Xóa tất cả lịch sử lỗi sai?", function() {
    safeSetItem("n4-mistakes", "{}");
    showToast("🗑️ Đã xóa lịch sử lỗi sai");
    closeMistakeNotebook();
  });
}
function openStudyStreak() {
  var existing = document.getElementById("streak-modal");
  if (existing) existing.remove();
  var streak = _calcStreak();
  var modal = document.createElement("div");
  modal.id = "streak-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeStudyStreak();
  };
  var h = '<div class="st-modal">';
  h += '<div class="st-modal-header"><h3>🔥 Chuỗi ngày học</h3><button class="st-close" onclick="closeStudyStreak()">✕</button></div>';
  h += '<div style="text-align:center;padding:20px 0">';
  h += '<div style="font-size:3rem;margin-bottom:8px">' + (streak.current >= 7 ? "🔥" : streak.current >= 3 ? "⭐" : "💪") + "</div>";
  h += '<div style="font-size:2.5rem;font-weight:900;color:var(--accent)">' + streak.current + "</div>";
  h += '<div style="font-size:0.88rem;color:var(--text-secondary)">ngày liên tục</div>';
  h += "</div>";
  h += '<div style="display:flex;justify-content:space-around;padding:12px 0;border-top:1px solid var(--border)">';
  h += '<div style="text-align:center"><div style="font-size:1.2rem;font-weight:700;color:var(--accent)">' + streak.longest + '</div><div style="font-size:0.72rem;color:var(--text-muted)">Kỷ lục</div></div>';
  h += '<div style="text-align:center"><div style="font-size:1.2rem;font-weight:700;color:var(--accent)">' + streak.totalDays + '</div><div style="font-size:0.72rem;color:var(--text-muted)">Tổng ngày</div></div>';
  h += "</div>";
  h += '<div style="margin-top:12px;padding:8px 0;border-top:1px solid var(--border)">';
  h += '<div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:6px;font-weight:700">7 ngày gần đây</div>';
  h += '<div style="display:flex;gap:6px;justify-content:center">';
  var dayNames = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  var today = /* @__PURE__ */ new Date();
  for (var di = 6; di >= 0; di--) {
    var d = new Date(today);
    d.setDate(d.getDate() - di);
    var ds = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    var active = streak.days.indexOf(ds) >= 0;
    h += '<div style="text-align:center;width:36px">';
    h += '<div style="font-size:0.62rem;color:var(--text-muted)">' + dayNames[d.getDay()] + "</div>";
    h += '<div style="width:28px;height:28px;border-radius:50%;margin:2px auto;display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;' + (active ? "background:var(--accent);color:#fff" : "background:var(--bg-main);color:var(--text-muted);border:1px solid var(--border)") + '">' + d.getDate() + "</div>";
    h += "</div>";
  }
  h += "</div></div>";
  h += "</div>";
  modal.innerHTML = h;
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
}
function closeStudyStreak() {
  var modal = document.getElementById("streak-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function _recordStudyDay() {
  var days = _getStudyDays();
  var today = /* @__PURE__ */ new Date();
  var ds = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
  if (days.indexOf(ds) < 0) {
    days.push(ds);
    if (days.length > 365) days = days.slice(-365);
    safeSetItem("n4-study-days", JSON.stringify(days));
  }
}
function _getStudyDays() {
  var days = [];
  try {
    days = JSON.parse(safeGetItem("n4-study-days") || "[]");
  } catch (e) {
  }
  var history = canonicalToolState().studyHistory || {};
  return [.../* @__PURE__ */ new Set([...days, ...Object.keys(history).filter((day) => {
    var _a, _b, _c;
    return ((_a = history[day]) == null ? void 0 : _a.total) || ((_b = history[day]) == null ? void 0 : _b.durationMs) || ((_c = history[day]) == null ? void 0 : _c.sessions);
  })])];
}
function _calcStreak() {
  var days = _getStudyDays();
  days.sort();
  var totalDays = days.length;
  var current = 0;
  var today = /* @__PURE__ */ new Date();
  var check = new Date(today);
  for (var i = 0; i < 365; i++) {
    var ds = check.getFullYear() + "-" + String(check.getMonth() + 1).padStart(2, "0") + "-" + String(check.getDate()).padStart(2, "0");
    if (days.indexOf(ds) >= 0) {
      current++;
      check.setDate(check.getDate() - 1);
    } else {
      break;
    }
  }
  var longest = 0, run = 0;
  for (var j = 0; j < days.length; j++) {
    if (j === 0) {
      run = 1;
    } else {
      var prev = new Date(days[j - 1]);
      var cur = new Date(days[j]);
      var diff = Math.round((cur - prev) / 864e5);
      if (diff === 1) run++;
      else run = 1;
    }
    if (run > longest) longest = run;
  }
  return { current, longest, totalDays, days };
}
function openQuickStats() {
  var existing = document.getElementById("quick-stats-modal");
  if (existing) existing.remove();
  var bm = {}, srs = {};
  bm = canonicalToolState().bookmarks || {};
  srs = canonicalToolState().srs || {};
  var bmCount = Object.keys(bm).length;
  var srsCount = Object.keys(srs).length;
  var studyTotal = parseInt(safeGetItem("n4-study-total") || "0", 10);
  var mistakes = {};
  mistakes = _canonicalMistakeCounts();
  var mistakeCount = Object.keys(mistakes).length;
  var streak = _calcStreak();
  var modal = document.createElement("div");
  modal.id = "quick-stats-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeQuickStats();
  };
  var h = '<div class="st-modal">';
  h += '<div class="st-modal-header"><h3>📊 Thống kê nhanh</h3><button class="st-close" onclick="closeQuickStats()">✕</button></div>';
  h += '<div class="qs-grid">';
  h += '<div class="qs-item"><div class="qs-val" style="color:var(--accent)">' + streak.current + '</div><div class="qs-label">🔥 Streak</div></div>';
  h += '<div class="qs-item"><div class="qs-val" style="color:var(--kanji-accent)">' + bmCount + '</div><div class="qs-label">⭐ Bookmark</div></div>';
  h += '<div class="qs-item"><div class="qs-val" style="color:var(--vocab-accent)">' + srsCount + '</div><div class="qs-label">📦 SRS</div></div>';
  h += '<div class="qs-item"><div class="qs-val" style="color:var(--grammar-accent)">' + Math.floor(studyTotal / 60) + '</div><div class="qs-label">⏱️ Phút học</div></div>';
  h += '<div class="qs-item"><div class="qs-val" style="color:#f43f5e">' + mistakeCount + '</div><div class="qs-label">❌ Từ sai</div></div>';
  h += '<div class="qs-item"><div class="qs-val" style="color:var(--accent)">' + streak.longest + '</div><div class="qs-label">🏆 Kỷ lục</div></div>';
  h += "</div>";
  h += "</div>";
  modal.innerHTML = h;
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
}
function closeQuickStats() {
  var modal = document.getElementById("quick-stats-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function startBookmarkFlashcards() {
  var bm = {};
  bm = canonicalToolState().bookmarks || {};
  var bmKeys = Object.keys(bm);
  if (bmKeys.length === 0) {
    showToast("⭐ Chưa có bookmark nào. Hãy đánh dấu từ/kanji trước!");
    return;
  }
  showToast("⭐ Flashcard bookmark — " + bmKeys.length + " mục");
  var origBmOnly = window.S ? window.S.bookmarkOnly : false;
  if (window.S) window.S.bookmarkOnly = true;
  if (window.startFlashcards) window.startFlashcards();
  setTimeout(function() {
    if (window.S) window.S.bookmarkOnly = origBmOnly;
  }, 500);
}
function openDailyChallenge() {
  var existing = document.getElementById("daily-challenge-modal");
  if (existing) existing.remove();
  var S2 = window.S;
  var dayNum = Math.floor(Date.now() / 864e5);
  var items = [];
  var allK = [];
  S2.kanji.forEach(function(s) {
    s.entries.forEach(function(k) {
      allK.push(k);
    });
  });
  var allV = [];
  S2.vocab.forEach(function(s) {
    s.entries.forEach(function(e) {
      if (e.word && e.meaning) allV.push(e);
    });
  });
  var allG = [];
  S2.grammar.forEach(function(s) {
    s.patterns.forEach(function(p) {
      allG.push(p);
    });
  });
  function pick(arr, seed) {
    return arr.length ? arr[(dayNum * 7 + seed) % arr.length] : null;
  }
  var k1 = pick(allK, 1), k2 = pick(allK, 29);
  var v1 = pick(allV, 13), v2 = pick(allV, 41);
  var g1 = pick(allG, 53);
  if (k1) items.push({ type: "kanji", q: k1.kanji, a: k1.title + (k1.meaning ? " — " + k1.meaning : ""), on: k1.on || "" });
  if (k2) items.push({ type: "kanji", q: k2.kanji, a: k2.title + (k2.meaning ? " — " + k2.meaning : ""), on: k2.on || "" });
  if (v1) items.push({ type: "vocab", q: v1.word, a: v1.meaning, r: v1.reading || "" });
  if (v2) items.push({ type: "vocab", q: v2.word, a: v2.meaning, r: v2.reading || "" });
  if (g1) items.push({ type: "grammar", q: g1.id, a: g1.title });
  var dcKey = "n4-dc-" + dayNum;
  var done = safeGetItem(dcKey) === "1";
  var modal = document.createElement("div");
  modal.id = "daily-challenge-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeDailyChallenge();
  };
  var h = '<div class="st-modal"><div class="st-modal-header"><h3>🏆 Thử thách hàng ngày</h3><button class="st-close" onclick="closeDailyChallenge()">✕</button></div>';
  if (done) h += '<div style="text-align:center;padding:20px;color:var(--accent);font-size:1.2rem;font-weight:700">✅ Bạn đã hoàn thành thử thách hôm nay!</div>';
  h += '<div id="dc-items">';
  items.forEach(function(it, i) {
    var typeLabel = it.type === "kanji" ? "漢字" : it.type === "vocab" ? "語彙" : "文法";
    h += '<div class="dc-item" data-idx="' + i + '">';
    h += '<span class="dc-type" style="color:var(--' + (it.type === "kanji" ? "kanji-accent" : it.type === "vocab" ? "vocab-accent" : "grammar-accent") + ')">' + typeLabel + "</span>";
    h += `<span class="dc-q" onclick="speak('` + esc(it.q).replace(/'/g, "\\'") + `')">` + esc(it.q) + "</span>";
    h += `<button class="dc-reveal-btn" onclick="this.style.display='none';this.nextElementSibling.style.display='';_dcCheck(` + i + ')">Xem đáp án</button>';
    h += '<span class="dc-a" style="display:none">' + esc(it.a) + (it.r ? " <small>" + esc(it.r) + "</small>" : "") + "</span>";
    h += "</div>";
  });
  h += "</div>";
  if (!done) h += '<div style="text-align:center;margin-top:12px"><button class="st-btn primary" id="dc-complete-btn" onclick="_dcComplete()" disabled>✅ Hoàn thành</button></div>';
  h += "</div>";
  modal.innerHTML = h;
  worldOverlayMount().appendChild(modal);
  window._dcTotal = items.length;
  window._dcRevealed = 0;
  window._dcKey = dcKey;
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
}
function closeDailyChallenge() {
  var modal = document.getElementById("daily-challenge-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function _dcCheck(idx) {
  window._dcRevealed = (window._dcRevealed || 0) + 1;
  if (window._dcRevealed >= window._dcTotal) {
    var btn = document.getElementById("dc-complete-btn");
    if (btn) btn.disabled = false;
  }
}
function _dcComplete() {
  safeSetItem(window._dcKey, "1");
  _recordStudyDay();
  showToast("🏆 Hoàn thành thử thách hàng ngày!");
  closeDailyChallenge();
}
function openWeakPoints() {
  var existing = document.getElementById("weak-points-modal");
  if (existing) existing.remove();
  var srs = {};
  srs = canonicalToolState().srs || {};
  var mistakes = {};
  mistakes = _canonicalMistakeCounts();
  var weakItems = [];
  var srsKeys = Object.keys(srs);
  srsKeys.forEach(function(k) {
    var _a, _b, _c;
    if ((Number((_a = srs[k]) == null ? void 0 : _a.wrong) || 0) > 0 || Number.isFinite((_b = srs[k]) == null ? void 0 : _b.level) && srs[k].level <= 1) {
      var parts = k.split(":");
      weakItems.push({ key: k, type: parts[0], word: parts.slice(1).join(":"), srsLevel: Number.isFinite((_c = srs[k]) == null ? void 0 : _c.level) ? srs[k].level : -1, mistakes: mistakes[parts.slice(1).join(":")] || 0 });
    }
  });
  Object.keys(mistakes).forEach(function(w) {
    if (mistakes[w] >= 2 && !srs["kanji:" + w] && !srs["vocab:" + w]) {
      weakItems.push({ key: "mistake:" + w, type: "mistake", word: w, srsLevel: -1, mistakes: mistakes[w] });
    }
  });
  weakItems.sort(function(a, b) {
    return b.mistakes - a.mistakes || a.srsLevel - b.srsLevel;
  });
  var modal = document.createElement("div");
  modal.id = "weak-points-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeWeakPoints();
  };
  var h = '<div class="st-modal"><div class="st-modal-header"><h3>🎯 Điểm yếu cần ôn</h3><button class="st-close" onclick="closeWeakPoints()">✕</button></div>';
  if (weakItems.length === 0) {
    h += '<div style="padding:30px;text-align:center;color:var(--text-muted)">🎉 Không có điểm yếu nào! Tiếp tục học nhé!</div>';
  } else {
    h += '<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:10px">' + weakItems.length + " mục cần ôn tập thêm</div>";
    h += '<div class="mn-list">';
    for (var i = 0; i < Math.min(weakItems.length, 40); i++) {
      var it = weakItems[i];
      h += '<div class="mn-item">';
      h += `<span class="mn-word" onclick="speak('` + esc(it.word).replace(/'/g, "\\'") + `')">` + esc(it.word) + "</span>";
      h += '<span class="mn-count">';
      if (it.srsLevel >= 0) h += "SRS:" + it.srsLevel + " ";
      if (it.mistakes > 0) h += "❌" + it.mistakes;
      h += "</span></div>";
    }
    h += "</div>";
  }
  h += "</div>";
  modal.innerHTML = h;
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
}
function closeWeakPoints() {
  var modal = document.getElementById("weak-points-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function openKanjiDecomposer() {
  var existing = document.getElementById("kanji-decomposer-modal");
  if (existing) existing.remove();
  var modal = document.createElement("div");
  modal.id = "kanji-decomposer-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeKanjiDecomposer();
  };
  var h = '<div class="st-modal"><div class="st-modal-header"><h3>🔍 Phân tích Kanji</h3><button class="st-close" onclick="closeKanjiDecomposer()">✕</button></div>';
  h += '<div style="text-align:center;padding:12px">';
  h += '<input type="text" id="kd-input" class="st-notes-area" style="height:auto;padding:10px;font-size:1.5rem;text-align:center;font-family:var(--font-jp)" placeholder="Nhập kanji..." maxlength="1" oninput="_decomposeKanji(this.value)">';
  h += "</div>";
  h += '<div id="kd-result" style="padding:12px"></div>';
  h += "</div>";
  modal.innerHTML = h;
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
    document.getElementById("kd-input").focus();
  }, 10);
}
function closeKanjiDecomposer() {
  var modal = document.getElementById("kanji-decomposer-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function _decomposeKanji(ch) {
  var el = document.getElementById("kd-result");
  if (!el || !ch) {
    if (el) el.innerHTML = "";
    return;
  }
  var S2 = window.S;
  var found = null;
  S2.kanji.forEach(function(s) {
    s.entries.forEach(function(k) {
      if (k.kanji === ch) found = k;
    });
  });
  if (!found) {
    el.innerHTML = '<div style="text-align:center;color:var(--text-muted)">Không tìm thấy kanji này trong bộ N4</div>';
    return;
  }
  var h = '<div style="text-align:center;margin-bottom:12px">';
  h += `<div style="font-size:3.5rem;font-family:var(--font-jp);font-weight:900;cursor:pointer" onclick="speak('` + esc(ch).replace(/'/g, "\\'") + `')">` + esc(ch) + "</div>";
  h += '<div style="font-size:1rem;font-weight:700;margin:4px 0">' + esc(found.title) + "</div>";
  if (found.meaning) h += '<div style="font-size:0.85rem;color:var(--text-secondary)">' + esc(found.meaning) + "</div>";
  h += "</div>";
  h += '<div class="qs-grid">';
  h += '<div class="qs-item"><div class="qs-val" style="color:var(--kanji-accent)">' + esc(found.on || "—") + '</div><div class="qs-label">音 On</div></div>';
  h += '<div class="qs-item"><div class="qs-val" style="color:var(--vocab-accent)">' + esc(found.kun || "—") + '</div><div class="qs-label">訓 Kun</div></div>';
  h += '<div class="qs-item"><div class="qs-val" style="color:var(--grammar-accent)">' + (found.strokes || "—") + '</div><div class="qs-label">画 Nét</div></div>';
  h += "</div>";
  if (found.compounds) {
    h += '<div style="margin-top:12px;padding:10px;background:var(--bg-main);border-radius:var(--radius-sm)">';
    h += '<div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);margin-bottom:4px">📝 Từ ghép</div>';
    h += '<div style="font-size:0.88rem;font-family:var(--font-jp)">' + esc(found.compounds) + "</div>";
    h += "</div>";
  }
  if (found.description) {
    h += '<div style="margin-top:8px;padding:10px;background:var(--bg-main);border-radius:var(--radius-sm)">';
    h += '<div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);margin-bottom:4px">📖 Mô tả</div>';
    h += '<div style="font-size:0.82rem;color:var(--text-secondary)">' + esc(found.description) + "</div>";
    h += "</div>";
  }
  h += '<div style="text-align:center;margin-top:12px"><a href="https://jisho.org/search/' + encodeURIComponent(ch) + '%23kanji" target="_blank" rel="noopener" style="font-size:0.78rem;color:var(--accent);text-decoration:none">🔗 Xem trên Jisho.org</a></div>';
  el.innerHTML = h;
}
function openGrammarQuickRef() {
  var existing = document.getElementById("grammar-qref-modal");
  if (existing) existing.remove();
  var S2 = window.S;
  var modal = document.createElement("div");
  modal.id = "grammar-qref-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeGrammarQuickRef();
  };
  var h = '<div class="st-modal st-modal-wide"><div class="st-modal-header"><h3>📋 Bảng ngữ pháp nhanh</h3><button class="st-close" onclick="closeGrammarQuickRef()">✕</button></div>';
  h += '<input type="text" id="gqr-filter" class="st-notes-area" style="height:auto;padding:8px 12px;font-size:0.85rem;margin-bottom:8px" placeholder="🔍 Lọc ngữ pháp..." oninput="_filterGrammarQRef(this.value)">';
  h += '<div id="gqr-list" style="max-height:65vh;overflow-y:auto">';
  S2.grammar.forEach(function(sec) {
    h += '<div class="gqr-sec" data-name="' + esc(sec.name) + '">';
    h += '<div style="font-size:0.72rem;font-weight:700;color:var(--grammar-accent);margin:8px 0 4px;padding:4px 8px;background:var(--bg-main);border-radius:4px">' + esc(sec.name) + "</div>";
    sec.patterns.forEach(function(p) {
      var _a, _b;
      h += '<div class="gqr-item" data-text="' + esc((p.id + p.title).toLowerCase()) + `" onclick="closeGrammarQuickRef();switchTab('grammar');S.section=` + sec.id + ";S.search='" + esc(String((_a = p.id) != null ? _a : "")).replace(/'/g, "\\'") + `';render()">`;
      h += '<span style="font-size:0.72rem;color:var(--text-muted);min-width:32px">' + esc(String((_b = p.id) != null ? _b : "")) + "</span>";
      h += '<span style="font-size:0.82rem;font-family:var(--font-jp)">' + esc(p.title) + "</span>";
      h += "</div>";
    });
    h += "</div>";
  });
  h += "</div></div>";
  modal.innerHTML = h;
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
    document.getElementById("gqr-filter").focus();
  }, 10);
}
function closeGrammarQuickRef() {
  var modal = document.getElementById("grammar-qref-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function _filterGrammarQRef(val) {
  var q = val.toLowerCase();
  document.querySelectorAll("#gqr-list .gqr-item").forEach(function(el) {
    el.style.display = !q || (el.getAttribute("data-text") || "").indexOf(q) >= 0 ? "" : "none";
  });
}
var _rstInterval = null;
function openReadingSpeed() {
  var existing = document.getElementById("reading-speed-modal");
  if (existing) existing.remove();
  var S2 = window.S;
  var sentences = [];
  S2.vocab.forEach(function(sec) {
    sec.entries.forEach(function(e) {
      if (e.example && e.example.length > 3) sentences.push(e.example);
    });
  });
  if (S2.minnaData) {
    var _stKeys = Object.keys(S2.minnaData);
    if (isLessonFilterActive()) {
      var _stFrom = effectiveStart(), _stTo = effectiveCap();
      _stKeys = _stKeys.filter(function(k) {
        var n = Number(k);
        return n >= _stFrom && n <= _stTo;
      });
    }
    _stKeys.forEach(function(k) {
      var ld = S2.minnaData[k];
      if (!ld || !ld.vocab) return;
      ld.vocab.forEach(function(v) {
        if (v.example && v.example.length > 3) sentences.push(v.example);
      });
    });
  }
  window._rstSentences = sentences;
  window._rstSpeed = 3e3;
  var modal = document.createElement("div");
  modal.id = "reading-speed-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeReadingSpeed();
  };
  var h = '<div class="st-modal"><div class="st-modal-header"><h3>⚡ Luyện đọc nhanh</h3><button class="st-close" onclick="closeReadingSpeed()">✕</button></div>';
  h += '<div style="text-align:center;padding:20px 0">';
  h += '<div id="rst-display" style="font-size:1.3rem;font-family:var(--font-jp);font-weight:700;min-height:60px;display:flex;align-items:center;justify-content:center;padding:16px;background:var(--bg-main);border-radius:var(--radius-sm);margin-bottom:12px">Nhấn "Bắt đầu" để luyện tập</div>';
  h += '<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:8px">Tốc độ: <span id="rst-speed-val">3.0</span>s / câu</div>';
  h += `<input type="range" id="rst-speed" min="500" max="5000" step="250" value="3000" style="width:80%" oninput="window._rstSpeed=parseInt(this.value);document.getElementById('rst-speed-val').textContent=(this.value/1000).toFixed(1)">`;
  h += "</div>";
  h += '<div style="display:flex;gap:8px;justify-content:center">';
  h += '<button class="st-btn primary" id="rst-btn" onclick="_toggleReadingSpeed()">▶ Bắt đầu</button>';
  h += '<button class="st-btn" onclick="_nextReadingSentence()">⏭ Bỏ qua</button>';
  h += "</div>";
  h += '<div style="text-align:center;font-size:0.72rem;color:var(--text-muted);margin-top:8px">' + sentences.length + " câu có sẵn</div>";
  h += "</div>";
  modal.innerHTML = h;
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
}
function closeReadingSpeed() {
  if (_rstInterval) {
    clearInterval(_rstInterval);
    _rstInterval = null;
  }
  var modal = document.getElementById("reading-speed-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function _toggleReadingSpeed() {
  if (_rstInterval) {
    clearInterval(_rstInterval);
    _rstInterval = null;
    document.getElementById("rst-btn").innerHTML = "▶ Tiếp tục";
  } else {
    _nextReadingSentence();
    _rstInterval = setInterval(_nextReadingSentence, window._rstSpeed || 3e3);
    document.getElementById("rst-btn").innerHTML = "⏸ Tạm dừng";
  }
}
function _nextReadingSentence() {
  var ss = window._rstSentences;
  if (!ss || !ss.length) return;
  var s = ss[Math.floor(Math.random() * ss.length)];
  var el = document.getElementById("rst-display");
  if (el) {
    el.style.opacity = "0";
    setTimeout(function() {
      el.textContent = s;
      el.style.opacity = "1";
    }, 150);
  }
}
function openMnemonics() {
  var existing = document.getElementById("mnemonics-modal");
  if (existing) existing.remove();
  var data = {};
  try {
    data = JSON.parse(safeGetItem("n4-mnemonics") || "{}");
  } catch (e) {
  }
  var modal = document.createElement("div");
  modal.id = "mnemonics-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeMnemonics();
  };
  var h = '<div class="st-modal"><div class="st-modal-header"><h3>💡 Mẹo ghi nhớ</h3><button class="st-close" onclick="closeMnemonics()">✕</button></div>';
  h += '<div style="display:flex;gap:8px;margin-bottom:8px">';
  h += '<input type="text" id="mnem-word" placeholder="Từ / Kanji" style="flex:1;padding:8px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--bg-main);color:var(--text);font-family:var(--font-jp);font-size:1rem">';
  h += '<input type="text" id="mnem-hint" placeholder="Mẹo ghi nhớ..." style="flex:2;padding:8px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--bg-main);color:var(--text);font-size:0.85rem">';
  h += '<button class="st-btn primary" onclick="_addMnemonic()" style="white-space:nowrap">+ Thêm</button>';
  h += "</div>";
  h += '<div id="mnem-list">';
  h += _renderMnemonicsList(data);
  h += "</div></div>";
  modal.innerHTML = h;
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
}
function closeMnemonics() {
  var modal = document.getElementById("mnemonics-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function _addMnemonic() {
  var wordEl = document.getElementById("mnem-word");
  var hintEl = document.getElementById("mnem-hint");
  if (!wordEl || !hintEl) return;
  var word = wordEl.value.trim(), hint = hintEl.value.trim();
  if (!word || !hint) {
    showToast("Nhập từ và mẹo ghi nhớ");
    return;
  }
  var data = {};
  try {
    data = JSON.parse(safeGetItem("n4-mnemonics") || "{}");
  } catch (e) {
  }
  data[word] = hint;
  safeSetItem("n4-mnemonics", JSON.stringify(data));
  wordEl.value = "";
  hintEl.value = "";
  document.getElementById("mnem-list").innerHTML = _renderMnemonicsList(data);
  showToast("💡 Đã lưu mẹo cho " + word);
}
function _deleteMnemonic(word) {
  var data = {};
  try {
    data = JSON.parse(safeGetItem("n4-mnemonics") || "{}");
  } catch (e) {
  }
  delete data[word];
  safeSetItem("n4-mnemonics", JSON.stringify(data));
  document.getElementById("mnem-list").innerHTML = _renderMnemonicsList(data);
}
function _renderMnemonicsList(data) {
  var keys = Object.keys(data);
  if (!keys.length) return '<div style="padding:20px;text-align:center;color:var(--text-muted)">Chưa có mẹo nào. Thêm mẹo ghi nhớ cho từ/kanji khó!</div>';
  var h = "";
  keys.forEach(function(k) {
    h += '<div class="mn-item" style="display:flex;align-items:center;gap:8px">';
    h += `<span class="mn-word" onclick="speak('` + esc(k).replace(/'/g, "\\'") + `')" style="min-width:50px">` + esc(k) + "</span>";
    h += '<span style="flex:1;font-size:0.82rem;color:var(--text-secondary)">' + esc(data[k]) + "</span>";
    h += `<button onclick="_deleteMnemonic('` + esc(k).replace(/'/g, "\\'") + `')" style="background:none;border:none;cursor:pointer;color:var(--danger);font-size:0.78rem">✕</button>`;
    h += "</div>";
  });
  return h;
}
function openStudyPlanner() {
  var existing = document.getElementById("study-planner-modal");
  if (existing) existing.remove();
  var goals = {};
  try {
    goals = JSON.parse(safeGetItem("n4-study-goals") || "{}");
  } catch (e) {
  }
  if (!goals.daily) goals = { daily: 30, weekly: 150, dailyDone: 0, weeklyDone: 0, lastDay: "", lastWeek: "" };
  var now = /* @__PURE__ */ new Date();
  var today = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
  var weekNum = Math.floor(now.getTime() / (7 * 864e5));
  if (goals.lastDay !== today) {
    goals.dailyDone = 0;
    goals.lastDay = today;
  }
  if (goals.lastWeek !== "" + weekNum) {
    goals.weeklyDone = 0;
    goals.lastWeek = "" + weekNum;
  }
  safeSetItem("n4-study-goals", JSON.stringify(goals));
  var modal = document.createElement("div");
  modal.id = "study-planner-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeStudyPlanner();
  };
  var dailyPct = Math.min(100, Math.round(goals.dailyDone / goals.daily * 100));
  var weeklyPct = Math.min(100, Math.round(goals.weeklyDone / goals.weekly * 100));
  var h = '<div class="st-modal"><div class="st-modal-header"><h3>📅 Kế hoạch học</h3><button class="st-close" onclick="closeStudyPlanner()">✕</button></div>';
  h += '<div style="padding:12px 0">';
  h += '<div style="margin-bottom:16px">';
  h += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><span style="font-size:0.85rem;font-weight:700">📌 Mục tiêu hôm nay</span><span style="font-size:0.78rem;color:var(--accent)">' + goals.dailyDone + " / " + goals.daily + " phút</span></div>";
  h += '<div style="height:10px;background:var(--bg-main);border-radius:5px;overflow:hidden"><div style="height:100%;width:' + dailyPct + '%;background:var(--accent);border-radius:5px;transition:width 0.3s"></div></div>';
  h += "</div>";
  h += '<div style="margin-bottom:16px">';
  h += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><span style="font-size:0.85rem;font-weight:700">📊 Mục tiêu tuần</span><span style="font-size:0.78rem;color:var(--accent)">' + goals.weeklyDone + " / " + goals.weekly + " phút</span></div>";
  h += '<div style="height:10px;background:var(--bg-main);border-radius:5px;overflow:hidden"><div style="height:100%;width:' + weeklyPct + '%;background:var(--vocab-accent);border-radius:5px;transition:width 0.3s"></div></div>';
  h += "</div>";
  h += '<div style="border-top:1px solid var(--border);padding-top:12px">';
  h += '<div style="font-size:0.78rem;font-weight:700;color:var(--text-muted);margin-bottom:8px">Cài đặt mục tiêu</div>';
  h += '<div style="display:flex;gap:12px;margin-bottom:8px">';
  h += '<div style="flex:1"><label style="font-size:0.72rem;color:var(--text-muted)">Phút/ngày</label><input type="number" id="sp-daily" value="' + goals.daily + '" min="5" max="480" style="width:100%;padding:6px 8px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--bg-main);color:var(--text);font-size:0.85rem"></div>';
  h += '<div style="flex:1"><label style="font-size:0.72rem;color:var(--text-muted)">Phút/tuần</label><input type="number" id="sp-weekly" value="' + goals.weekly + '" min="10" max="3000" style="width:100%;padding:6px 8px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--bg-main);color:var(--text);font-size:0.85rem"></div>';
  h += "</div>";
  h += '<button class="st-btn primary" onclick="_saveStudyGoals()" style="width:100%">💾 Lưu mục tiêu</button>';
  h += "</div>";
  h += '<div style="border-top:1px solid var(--border);padding-top:12px;margin-top:12px">';
  h += '<div style="font-size:0.78rem;font-weight:700;color:var(--text-muted);margin-bottom:8px">Ghi nhận thời gian học</div>';
  h += '<div style="display:flex;gap:6px">';
  var presets = [5, 10, 15, 25, 30, 45];
  presets.forEach(function(m) {
    h += '<button class="st-btn" onclick="_addStudyMinutes(' + m + ')" style="flex:1">' + m + "p</button>";
  });
  h += "</div></div>";
  h += "</div></div>";
  modal.innerHTML = h;
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
}
function closeStudyPlanner() {
  var modal = document.getElementById("study-planner-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function _saveStudyGoals() {
  var goals = {};
  try {
    goals = JSON.parse(safeGetItem("n4-study-goals") || "{}");
  } catch (e) {
  }
  var d = parseInt(document.getElementById("sp-daily").value, 10);
  var w = parseInt(document.getElementById("sp-weekly").value, 10);
  if (d >= 5) goals.daily = d;
  if (w >= 10) goals.weekly = w;
  safeSetItem("n4-study-goals", JSON.stringify(goals));
  showToast("💾 Đã lưu mục tiêu");
}
function _addStudyMinutes(mins) {
  var goals = {};
  try {
    goals = JSON.parse(safeGetItem("n4-study-goals") || "{}");
  } catch (e) {
  }
  goals.dailyDone = (goals.dailyDone || 0) + mins;
  goals.weeklyDone = (goals.weeklyDone || 0) + mins;
  safeSetItem("n4-study-goals", JSON.stringify(goals));
  var total = parseInt(safeGetItem("n4-study-total") || "0") + mins * 60;
  safeSetItem("n4-study-total", total.toString());
  _recordStudyDay();
  showToast("⏱️ +" + mins + " phút");
  closeStudyPlanner();
  openStudyPlanner();
}
function openSrsQueue() {
  var existing = document.getElementById("srs-queue-modal");
  if (existing) existing.remove();
  var srs = {};
  srs = canonicalToolState().srs || {};
  var now = Date.now();
  var dueItems = selectDueSrsEntries(srs, now).map(function(entry) {
    var parts = entry.key.split(":");
    return { key: entry.key, type: parts[0], word: parts.slice(1).join(":"), level: entry.level, overdue: Math.max(0, Math.floor((now - entry.dueAt) / 864e5)) };
  });
  dueItems.sort(function(a, b) {
    return b.overdue - a.overdue || a.level - b.level;
  });
  var modal = document.createElement("div");
  modal.id = "srs-queue-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeSrsQueue();
  };
  var h = '<div class="st-modal"><div class="st-modal-header"><h3>📦 Hàng đợi SRS</h3><button class="st-close" onclick="closeSrsQueue()">✕</button></div>';
  if (dueItems.length === 0) {
    h += '<div style="padding:30px;text-align:center;color:var(--text-muted)">✅ Không có mục nào đến hạn ôn tập! Quay lại sau nhé.</div>';
  } else {
    h += '<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:10px">📋 ' + dueItems.length + " mục cần ôn tập</div>";
    h += '<div class="mn-list">';
    var srsColors = ["#f43f5e", "#f97316", "#eab308", "#10b981", "#6366f1"];
    for (var i = 0; i < Math.min(dueItems.length, 50); i++) {
      var it = dueItems[i];
      h += '<div class="mn-item">';
      h += `<span class="mn-word" onclick="speak('` + esc(it.word).replace(/'/g, "\\'") + `')">` + esc(it.word) + "</span>";
      h += '<span style="font-size:0.68rem;padding:2px 6px;border-radius:8px;background:' + (srsColors[it.level] || srsColors[4]) + ';color:#fff">Lv' + it.level + "</span>";
      if (it.overdue > 0) h += '<span class="mn-count" style="color:var(--danger)">quá hạn ' + it.overdue + " ngày</span>";
      h += "</div>";
    }
    h += "</div>";
    h += '<div style="text-align:center;margin-top:12px"><button class="st-btn primary" onclick="closeSrsQueue();startFlashcards()">🃏 Ôn bằng Flashcard</button></div>';
  }
  h += "</div>";
  modal.innerHTML = h;
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
}
function closeSrsQueue() {
  var modal = document.getElementById("srs-queue-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function openWordAssociation() {
  var existing = document.getElementById("word-assoc-modal");
  if (existing) existing.remove();
  var S2 = window.S;
  var allWords = [];
  S2.vocab.forEach(function(s) {
    s.entries.forEach(function(e) {
      if (e.word && e.meaning) allWords.push(e);
    });
  });
  var pick = allWords[Math.floor(Math.random() * allWords.length)];
  window._waWord = pick;
  var related = [];
  if (pick) {
    allWords.forEach(function(w) {
      if (w === pick) return;
      var score = 0;
      if (pick.reading && w.reading && w.reading.charAt(0) === pick.reading.charAt(0)) score += 1;
      if (pick.word && w.word) {
        for (var c = 0; c < pick.word.length; c++) {
          if (w.word.indexOf(pick.word[c]) >= 0 && pick.word[c].charCodeAt(0) > 19968) score += 2;
        }
      }
      if (score > 0) related.push({ word: w, score });
    });
    related.sort(function(a, b) {
      return b.score - a.score;
    });
  }
  var modal = document.createElement("div");
  modal.id = "word-assoc-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeWordAssociation();
  };
  var h = '<div class="st-modal"><div class="st-modal-header"><h3>🔗 Liên tưởng từ vựng</h3><button class="st-close" onclick="closeWordAssociation()">✕</button></div>';
  if (pick) {
    h += '<div style="text-align:center;padding:16px 0">';
    h += `<div style="font-size:2rem;font-family:var(--font-jp);font-weight:900;cursor:pointer" onclick="speak('` + esc(pick.word).replace(/'/g, "\\'") + `')">` + esc(pick.word) + "</div>";
    if (pick.reading) h += '<div style="font-size:0.88rem;color:var(--accent)">' + esc(pick.reading) + "</div>";
    h += '<div style="font-size:0.88rem;color:var(--text-secondary)">' + esc(pick.meaning) + "</div>";
    h += "</div>";
    if (related.length > 0) {
      h += '<div style="border-top:1px solid var(--border);padding-top:10px">';
      h += '<div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);margin-bottom:6px">🔗 Từ liên quan (cùng kanji / âm đầu)</div>';
      h += '<div class="mn-list">';
      for (var i = 0; i < Math.min(related.length, 12); i++) {
        var rw = related[i].word;
        h += '<div class="mn-item">';
        h += `<span class="mn-word" onclick="speak('` + esc(rw.word).replace(/'/g, "\\'") + `')">` + esc(rw.word) + "</span>";
        h += '<span style="font-size:0.78rem;color:var(--text-secondary)">' + esc(rw.meaning) + "</span>";
        h += "</div>";
      }
      h += "</div></div>";
    }
  }
  h += '<div style="text-align:center;margin-top:12px"><button class="st-btn" onclick="closeWordAssociation();openWordAssociation()">🔄 Từ khác</button></div>';
  h += "</div>";
  modal.innerHTML = h;
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
}
function closeWordAssociation() {
  var modal = document.getElementById("word-assoc-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function openVocabExplorer() {
  var existing = document.getElementById("vocab-explorer-modal");
  if (existing) existing.remove();
  var S2 = window.S;
  var modal = document.createElement("div");
  modal.id = "vocab-explorer-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeVocabExplorer();
  };
  var h = '<div class="st-modal st-modal-wide"><div class="st-modal-header"><h3>📖 Khám phá từ vựng</h3><button class="st-close" onclick="closeVocabExplorer()">✕</button></div>';
  h += '<div style="max-height:70vh;overflow-y:auto">';
  var bm = {};
  bm = canonicalToolState().bookmarks || {};
  S2.vocab.forEach(function(sec) {
    var total = sec.entries.length;
    var bmCount = 0;
    sec.entries.forEach(function(e) {
      if (bm["vocab:" + e.word]) bmCount++;
    });
    var pct = total > 0 ? Math.round(bmCount / total * 100) : 0;
    h += '<div style="padding:8px 0;border-bottom:1px solid var(--border)">';
    h += `<div style="display:flex;align-items:center;justify-content:space-between;cursor:pointer" onclick="closeVocabExplorer();switchTab('vocab');S.section=` + sec.id + ';render()">';
    h += '<span style="font-size:0.85rem;font-weight:700">' + esc(sec.name) + "</span>";
    h += '<span style="font-size:0.72rem;color:var(--text-muted)">' + bmCount + "/" + total + " (" + pct + "%)</span>";
    h += "</div>";
    h += '<div style="height:4px;background:var(--bg-main);border-radius:2px;margin-top:4px;overflow:hidden"><div style="height:100%;width:' + pct + '%;background:var(--accent);border-radius:2px"></div></div>';
    h += "</div>";
  });
  h += "</div></div>";
  modal.innerHTML = h;
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
}
function closeVocabExplorer() {
  var modal = document.getElementById("vocab-explorer-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function openConjugationTable() {
  var existing = document.getElementById("conj-table-modal");
  if (existing) existing.remove();
  var modal = document.createElement("div");
  modal.id = "conj-table-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeConjugationTable();
  };
  var h = '<div class="st-modal st-modal-wide"><div class="st-modal-header"><h3>📋 Bảng chia động từ</h3><button class="st-close" onclick="closeConjugationTable()">✕</button></div>';
  h += '<div style="overflow-x:auto">';
  var forms = [
    ["Thể", "Nhóm 1 (五段)", "Nhóm 2 (一段)", "Bất quy tắc"],
    ["辞書形 (Dict)", "書く (kaku)", "食べる (taberu)", "する / 来る"],
    ["ます形", "書きます", "食べます", "します / 来ます"],
    ["て形", "書いて", "食べて", "して / 来て"],
    ["ない形", "書かない", "食べない", "しない / 来ない"],
    ["た形", "書いた", "食べた", "した / 来た"],
    ["可能形", "書ける", "食べられる", "できる / 来られる"],
    ["受身形", "書かれる", "食べられる", "される / 来られる"],
    ["使役形", "書かせる", "食べさせる", "させる / 来させる"],
    ["意向形", "書こう", "食べよう", "しよう / 来よう"],
    ["条件形", "書けば", "食べれば", "すれば / 来れば"],
    ["命令形", "書け", "食べろ", "しろ / 来い"]
  ];
  h += '<table style="width:100%;border-collapse:collapse;font-size:0.82rem;font-family:var(--font-jp)">';
  forms.forEach(function(row, idx) {
    h += "<tr>";
    row.forEach(function(cell, ci) {
      var tag = idx === 0 ? "th" : "td";
      var style = idx === 0 ? "font-weight:700;background:var(--accent-light);color:var(--accent);padding:8px 10px;text-align:left;font-size:0.75rem" : "padding:6px 10px;border-bottom:1px solid var(--border)";
      if (ci === 0 && idx > 0) style += ";font-weight:600;color:var(--grammar-accent);font-size:0.75rem;white-space:nowrap";
      h += "<" + tag + ' style="' + style + '">' + cell + "</" + tag + ">";
    });
    h += "</tr>";
  });
  h += "</table>";
  h += "</div>";
  h += '<div style="text-align:center;font-size:0.72rem;color:var(--text-muted);padding:8px">💡 Nhấn vào bảng Chia động từ trong Games để luyện tập</div>';
  h += "</div>";
  modal.innerHTML = h;
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
}
function closeConjugationTable() {
  var modal = document.getElementById("conj-table-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function openAchievementExport() {
  var existing = document.getElementById("achievement-export-modal");
  if (existing) existing.remove();
  var modal = document.createElement("div");
  modal.id = "achievement-export-modal";
  modal.className = "st-modal-overlay";
  modal.onclick = function(e) {
    if (e.target === modal) closeAchievementExport();
  };
  var st = _getStudyStats();
  var pctK = st.kT > 0 ? Math.round(st.kBm / st.kT * 100) : 0;
  var pctV = st.vT > 0 ? Math.round(st.vBm / st.vT * 100) : 0;
  var pctG = st.gT > 0 ? Math.round(st.gBm / st.gT * 100) : 0;
  var pctAll = st.total > 0 ? Math.round(st.bmTotal / st.total * 100) : 0;
  var mastered = st.srsLevels[4];
  var streakData = _calcStreak();
  var streak = streakData.current;
  var h = '<div class="st-modal st-modal-wide"><div class="st-modal-header"><h3>🏆 Xuất thành tích</h3><button class="st-close" onclick="closeAchievementExport()">✕</button></div>';
  h += '<div class="ae-preview" id="ae-preview">';
  h += '<div class="ae-card" id="ae-card">';
  h += '<div class="ae-card-header"><span class="ae-logo">📚</span><span class="ae-title">JLPT N4 Learning System</span></div>';
  h += '<div class="ae-card-date">' + (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN") + "</div>";
  h += '<div class="ae-card-stats">';
  h += '<div class="ae-stat"><div class="ae-stat-val" style="color:#6366f1">' + pctAll + '%</div><div class="ae-stat-lbl">Tổng tiến độ</div></div>';
  h += '<div class="ae-stat"><div class="ae-stat-val" style="color:#ef4444">' + st.kBm + "/" + st.kT + '</div><div class="ae-stat-lbl">Kanji (' + pctK + "%)</div></div>";
  h += '<div class="ae-stat"><div class="ae-stat-val" style="color:#3b82f6">' + st.vBm + "/" + st.vT + '</div><div class="ae-stat-lbl">Từ vựng (' + pctV + "%)</div></div>";
  h += '<div class="ae-stat"><div class="ae-stat-val" style="color:#10b981">' + st.gBm + "/" + st.gT + '</div><div class="ae-stat-lbl">Ngữ pháp (' + pctG + "%)</div></div>";
  h += "</div>";
  h += '<div class="ae-card-row"><span>🏅 SRS Mastered:</span><strong>' + mastered + " cards</strong></div>";
  h += '<div class="ae-card-row"><span>🔥 Streak:</span><strong>' + streak + " ngày</strong></div>";
  h += _renderAchievementBadges(st, pctAll, streak);
  h += '<div class="ae-card-footer">Generated by Japanese Learning Portal</div>';
  h += "</div></div>";
  h += '<div class="ae-actions">';
  h += '<button class="st-btn primary" onclick="_exportAsImage()">🖼️ Tải ảnh PNG</button>';
  h += '<button class="st-btn" onclick="_exportAsText()">📋 Sao chép văn bản</button>';
  h += "</div>";
  h += "</div>";
  modal.innerHTML = h;
  worldOverlayMount().appendChild(modal);
  setTimeout(function() {
    if (!modal.isConnected) return;
    modal.classList.add("active");
  }, 10);
}
function closeAchievementExport() {
  var modal = document.getElementById("achievement-export-modal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(function() {
      modal.remove();
    }, 200);
  }
}
function _renderAchievementBadges(st, pctAll, streak) {
  var badges = [];
  if (pctAll >= 100) badges.push("🌟 Hoàn thành 100%");
  else if (pctAll >= 75) badges.push("🏆 75% Hoàn thành");
  else if (pctAll >= 50) badges.push("🥈 50% Hoàn thành");
  else if (pctAll >= 25) badges.push("🥉 25% Hoàn thành");
  if (st.srsLevels[4] >= 100) badges.push("🧠 100+ Mastered");
  else if (st.srsLevels[4] >= 50) badges.push("💪 50+ Mastered");
  if (streak >= 30) badges.push("🔥 30-day Streak");
  else if (streak >= 7) badges.push("⭐ 7-day Streak");
  if (st.kBm >= st.kT && st.kT > 0) badges.push("✨ Kanji Master");
  if (st.vBm >= st.vT && st.vT > 0) badges.push("📖 Vocab Master");
  if (st.gBm >= st.gT && st.gT > 0) badges.push("🎓 Grammar Master");
  if (badges.length === 0) badges.push("🌱 Mới bắt đầu");
  var h = '<div class="ae-badges">';
  badges.forEach(function(b) {
    h += '<span class="ae-badge">' + b + "</span>";
  });
  h += "</div>";
  return h;
}
function _exportAsImage() {
  var card = document.getElementById("ae-card");
  if (!card) return;
  var w = card.offsetWidth, ht = card.offsetHeight;
  var canvas = document.createElement("canvas");
  var scale = 2;
  canvas.width = w * scale;
  canvas.height = ht * scale;
  var ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  var isDark = S.theme === "dark";
  ctx.fillStyle = isDark ? "#1a1a2e" : "#ffffff";
  ctx.fillRect(0, 0, w, ht);
  var grad = ctx.createLinearGradient(0, 0, w, 0);
  grad.addColorStop(0, "#6366f1");
  grad.addColorStop(1, "#8b5cf6");
  ctx.strokeStyle = grad;
  ctx.lineWidth = 3;
  ctx.strokeRect(1.5, 1.5, w - 3, ht - 3);
  var svgData = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + ht + '"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family:sans-serif;font-size:14px;color:' + (isDark ? "#e0e0e0" : "#333") + '">' + card.innerHTML + "</div></foreignObject></svg>";
  var img = new Image();
  var svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  var url = URL.createObjectURL(svgBlob);
  img.onload = function() {
    ctx.drawImage(img, 0, 0, w, ht);
    URL.revokeObjectURL(url);
    canvas.toBlob(function(blob) {
      if (!blob) {
        _exportAsText();
        return;
      }
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "JLPT_N4_Achievement_" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) + ".png";
      a.click();
      URL.revokeObjectURL(a.href);
      showToast("✅ Đã tải ảnh thành tích!");
    }, "image/png");
  };
  img.onerror = function() {
    URL.revokeObjectURL(url);
    _exportAsText();
  };
  img.src = url;
}
function _exportAsText() {
  var st = _getStudyStats();
  var pctK = st.kT > 0 ? Math.round(st.kBm / st.kT * 100) : 0;
  var pctV = st.vT > 0 ? Math.round(st.vBm / st.vT * 100) : 0;
  var pctG = st.gT > 0 ? Math.round(st.gBm / st.gT * 100) : 0;
  var pctAll = st.total > 0 ? Math.round(st.bmTotal / st.total * 100) : 0;
  var streak = _calcStreak().current;
  var text = "🏆 Japanese Learning Portal Achievement Report\n";
  text += "📅 " + (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN") + "\n\n";
  text += "📊 Tổng tiến độ: " + pctAll + "%\n";
  text += "🌿 Kanji: " + st.kBm + "/" + st.kT + " (" + pctK + "%)\n";
  text += "📖 Từ vựng: " + st.vBm + "/" + st.vT + " (" + pctV + "%)\n";
  text += "💡 Ngữ pháp: " + st.gBm + "/" + st.gT + " (" + pctG + "%)\n";
  text += "🏅 SRS Mastered: " + st.srsLevels[4] + " cards\n";
  text += "🔥 Streak: " + streak + " ngày\n\n";
  text += "Generated by Japanese Learning Portal";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      showToast("✅ Đã sao chép vào clipboard!");
    }).catch(function() {
      _fbCopy(text);
      showToast("✅ Đã sao chép vào clipboard!");
    });
  } else {
    _fbCopy(text);
    showToast("✅ Đã sao chép vào clipboard!");
  }
}
function _fbCopy(t) {
  var ta = document.createElement("textarea");
  ta.value = t;
  ta.style.cssText = "position:fixed;left:-9999px;top:-9999px;opacity:0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand("copy");
  } catch (e) {
  }
  ta.remove();
}
function _canonicalMistakeCounts() {
  return Object.fromEntries(Object.entries(canonicalToolState().mistakes || {}).map(([key, value]) => [key, Math.max(0, Number(typeof value === "object" ? value.count : value) || 0)]).filter(([, count]) => count > 0));
}
export {
  _addMnemonic,
  _addStudyMinutes,
  _archiveNote,
  _clearMistakes,
  _clearNoteText,
  _dcCheck,
  _dcComplete,
  _decomposeKanji,
  _deleteAllNotes,
  _deleteMnemonic,
  _deleteNoteEntry,
  _exportAsImage,
  _exportAsText,
  _filterGrammarQRef,
  _loadNoteEntry,
  _nextReadingSentence,
  _resetTimer,
  _saveStudyGoals,
  _saveStudyNotes,
  _setTimerPreset,
  _toggleReadingSpeed,
  _toggleSavedNotes,
  _toggleTimer,
  closeAchievementExport,
  closeConjugationTable,
  closeDailyChallenge,
  closeGrammarQuickRef,
  closeKanaChart,
  closeKanjiDecomposer,
  closeMistakeNotebook,
  closeMnemonics,
  closeQuickStats,
  closeReadingSpeed,
  closeSrsQueue,
  closeStudyNotes,
  closeStudyPlanner,
  closeStudyStreak,
  closeStudyTimer,
  closeVocabExplorer,
  closeWeakPoints,
  closeWordAssociation,
  openAchievementExport,
  openConjugationTable,
  openDailyChallenge,
  openGrammarQuickRef,
  openKanaChart,
  openKanjiDecomposer,
  openMistakeNotebook,
  openMnemonics,
  openQuickStats,
  openReadingSpeed,
  openSrsQueue,
  openStudyNotes,
  openStudyPlanner,
  openStudyStreak,
  openStudyTimer,
  openVocabExplorer,
  openWeakPoints,
  openWordAssociation,
  startBookmarkFlashcards
};
