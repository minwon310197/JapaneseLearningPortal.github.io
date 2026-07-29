import { bK as esc, ab as S, bB as shuffleArray, bL as haptic, s as safeGetItem, S as STORAGE_KEYS, d as safeSetItem } from "./feature-3d-CFvJkEt3.js";
import { s as showToast } from "./toast-CJdbqLP6.js";
import { s as speak } from "./tts-CA6-5gSK.js";
import "./vendor-react-BYxMSDiB.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
function _loadPlaylist() {
  try {
    return JSON.parse(safeGetItem(STORAGE_KEYS.PLAYLIST) || "[]");
  } catch (e) {
    return [];
  }
}
function _savePlaylist(words) {
  return safeSetItem(STORAGE_KEYS.PLAYLIST, JSON.stringify(Array.isArray(words) ? words : []));
}
function _vocab() {
  var r = [];
  S.vocab.forEach(function(s) {
    s.entries.forEach(function(e) {
      if (e.word && e.meaning) r.push(e);
    });
  });
  return r;
}
function _pick(a, n) {
  return shuffleArray([...a]).slice(0, n);
}
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
function openPronunciationCompare() {
  var vocab = _vocab();
  var w = vocab[Math.floor(Math.random() * vocab.length)];
  var ol = _ov("proncompare-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🎤 So sánh phát âm</h3><span class="mg-close" onclick="closePronunciationCompare()">✕</span></div>';
  h += '<div class="at-word">' + esc(w.word) + "</div>";
  h += '<div class="at-reading">' + esc(w.reading || "") + "</div>";
  h += '<div class="at-meaning">' + esc(w.meaning) + "</div>";
  h += '<div class="at-actions">';
  h += `<button class="st-btn primary" onclick="speak('` + esc(w.word).replace(/'/g, "\\'") + `')">🔊 Nghe mẫu</button>`;
  h += '<button class="st-btn" id="at-rec-btn" onclick="atToggleRecord()">🎙️ Ghi âm</button>';
  h += "</div>";
  h += '<div id="at-rec-status" class="at-status"></div>';
  h += '<div class="at-tip">💡 Nhấn "Nghe mẫu" rồi nhấn "Ghi âm" để so sánh phát âm của bạn.</div>';
  h += '<button class="st-btn" onclick="openPronunciationCompare()" style="margin-top:12px">🔄 Từ mới</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
var _atRecording = false, _atMediaRec = null, _atChunks = [];
function atToggleRecord() {
  if (_atRecording) {
    if (_atMediaRec) _atMediaRec.stop();
    _atRecording = false;
    var btn = document.getElementById("at-rec-btn");
    if (btn) btn.textContent = "🎙️ Ghi âm";
    return;
  }
  if (!navigator.mediaDevices) {
    showToast("Trình duyệt không hỗ trợ ghi âm");
    return;
  }
  navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream) {
    _atChunks = [];
    _atMediaRec = new MediaRecorder(stream);
    _atMediaRec.ondataavailable = function(e) {
      _atChunks.push(e.data);
    };
    _atMediaRec.onstop = function() {
      stream.getTracks().forEach(function(t) {
        t.stop();
      });
      var blob = new Blob(_atChunks, { type: "audio/webm" });
      var url = URL.createObjectURL(blob);
      var st2 = document.getElementById("at-rec-status");
      if (st2) st2.innerHTML = '<audio controls src="' + url + '"></audio><div style="margin-top:6px">✅ Nghe lại và so sánh với mẫu!</div>';
    };
    _atMediaRec.start();
    _atRecording = true;
    var btn2 = document.getElementById("at-rec-btn");
    if (btn2) btn2.textContent = "⏹ Dừng ghi";
    var st = document.getElementById("at-rec-status");
    if (st) st.innerHTML = "🔴 Đang ghi âm...";
  }).catch(function() {
    showToast("Không thể truy cập microphone");
  });
}
function closePronunciationCompare() {
  _clOv("proncompare-overlay");
}
var SHADOW = { words: [], idx: 0, playing: false, timer: null };
function openShadowing() {
  var vocab = _vocab().filter(function(e) {
    return e.word;
  });
  SHADOW.words = _pick(vocab, 10);
  SHADOW.idx = 0;
  SHADOW.playing = false;
  _renderShadow();
}
function _renderShadow() {
  var ol = _ov("shadow-overlay");
  var w = SHADOW.words[SHADOW.idx];
  var h = '<div class="mg-container"><div class="mg-header"><h3>🗣️ Shadowing</h3><span class="mg-close" onclick="closeShadowing()">✕</span></div>';
  h += '<div class="mg-progress">' + (SHADOW.idx + 1) + "/" + SHADOW.words.length + "</div>";
  if (w) {
    h += '<div class="at-word">' + esc(w.word) + "</div>";
    h += '<div class="at-reading">' + esc(w.reading || "") + "</div>";
    h += '<div class="at-meaning">' + esc(w.meaning) + "</div>";
    h += '<div class="at-actions">';
    h += `<button class="st-btn primary" onclick="speak('` + esc(w.word).replace(/'/g, "\\'") + `')">🔊 Phát</button>`;
    h += '<button class="st-btn" onclick="shadowNext()">Tiếp →</button>';
    h += "</div>";
    h += '<button class="st-btn' + (SHADOW.playing ? " active" : "") + '" onclick="shadowAutoPlay()" style="margin-top:8px">' + (SHADOW.playing ? "⏸ Dừng Auto" : "▶ Auto Play") + "</button>";
  } else {
    h += '<div class="mg-result">🎉 Hoàn thành shadowing!</div>';
    h += '<button class="st-btn primary" onclick="openShadowing()">🔄 Lại</button>';
  }
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function shadowNext() {
  SHADOW.idx++;
  if (SHADOW.idx >= SHADOW.words.length) SHADOW.playing = false;
  _renderShadow();
}
function shadowAutoPlay() {
  if (SHADOW.playing) {
    SHADOW.playing = false;
    if (SHADOW.timer) clearTimeout(SHADOW.timer);
    _renderShadow();
    return;
  }
  SHADOW.playing = true;
  _shadowPlayCurrent();
}
function _shadowPlayCurrent() {
  if (!SHADOW.playing || SHADOW.idx >= SHADOW.words.length) {
    SHADOW.playing = false;
    _renderShadow();
    return;
  }
  var w = SHADOW.words[SHADOW.idx];
  speak(w.word);
  _renderShadow();
  SHADOW.timer = setTimeout(function() {
    SHADOW.idx++;
    _shadowPlayCurrent();
  }, 3e3);
}
function closeShadowing() {
  SHADOW.playing = false;
  if (SHADOW.timer) clearTimeout(SHADOW.timer);
  _clOv("shadow-overlay");
}
var PODCAST = { items: [], idx: 0, playing: false, timer: null };
function openMiniPodcast() {
  var items = [];
  S.grammar.forEach(function(sec) {
    sec.patterns.forEach(function(p) {
      var m = p.content.match(/[ぁ-ん\u30A0-\u30FF\u4E00-\u9FFF][^\n|*]{5,60}/g);
      if (m) m.forEach(function(s) {
        items.push({ jp: s.trim(), title: p.title });
      });
    });
  });
  PODCAST.items = _pick(items, 15);
  PODCAST.idx = 0;
  PODCAST.playing = false;
  _renderPodcast();
}
function _renderPodcast() {
  var ol = _ov("podcast-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🎧 Mini Podcast</h3><span class="mg-close" onclick="closeMiniPodcast()">✕</span></div>';
  h += '<div class="mg-progress">Track ' + (PODCAST.idx + 1) + "/" + PODCAST.items.length + "</div>";
  var item = PODCAST.items[PODCAST.idx];
  if (item) {
    h += '<div class="at-podcast-card">';
    h += '<div class="at-podcast-title">📚 ' + esc(item.title) + "</div>";
    h += '<div class="at-podcast-text">' + esc(item.jp) + "</div>";
    h += "</div>";
    h += '<div class="at-actions">';
    h += '<button class="st-btn" onclick="podcastPrev()">⏮</button>';
    h += '<button class="st-btn primary" onclick="podcastPlay()">🔊 Phát</button>';
    h += '<button class="st-btn" onclick="podcastNextTrack()">⏭</button>';
    h += "</div>";
    h += '<button class="st-btn" onclick="podcastAutoPlay()" style="margin-top:8px">' + (PODCAST.playing ? "⏸ Dừng" : "▶ Auto") + "</button>";
  } else {
    h += '<div class="mg-result">🎉 Hết podcast!</div>';
  }
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function podcastPlay() {
  var item = PODCAST.items[PODCAST.idx];
  if (item) speak(item.jp);
}
function podcastPrev() {
  if (PODCAST.idx > 0) {
    PODCAST.idx--;
    _renderPodcast();
  }
}
function podcastNextTrack() {
  if (PODCAST.idx < PODCAST.items.length - 1) {
    PODCAST.idx++;
    _renderPodcast();
  }
}
function podcastAutoPlay() {
  if (PODCAST.playing) {
    PODCAST.playing = false;
    if (PODCAST.timer) clearTimeout(PODCAST.timer);
    _renderPodcast();
    return;
  }
  PODCAST.playing = true;
  _podcastAuto();
}
function _podcastAuto() {
  if (!PODCAST.playing || PODCAST.idx >= PODCAST.items.length) {
    PODCAST.playing = false;
    _renderPodcast();
    return;
  }
  podcastPlay();
  _renderPodcast();
  PODCAST.timer = setTimeout(function() {
    PODCAST.idx++;
    _podcastAuto();
  }, 4e3);
}
function closeMiniPodcast() {
  PODCAST.playing = false;
  if (PODCAST.timer) clearTimeout(PODCAST.timer);
  _clOv("podcast-overlay");
}
var _CONVOS = [
  { title: "Tại nhà hàng", lines: [
    { speaker: "Staff", jp: "いらっしゃいませ。何名様ですか？", vi: "Xin chào. Mấy người ạ?" },
    { speaker: "You", jp: "二人です。", vi: "Hai người." },
    { speaker: "Staff", jp: "こちらへどうぞ。", vi: "Mời đi lối này." },
    { speaker: "You", jp: "メニューをください。", vi: "Cho xin menu." },
    { speaker: "Staff", jp: "ご注文はお決まりですか？", vi: "Quý khách đã chọn món chưa?" },
    { speaker: "You", jp: "ラーメンをお願いします。", vi: "Cho tôi ramen." },
    { speaker: "Staff", jp: "かしこまりました。", vi: "Vâng, tôi hiểu rồi." }
  ] },
  { title: "Hỏi đường", lines: [
    { speaker: "You", jp: "すみません、駅はどこですか？", vi: "Xin lỗi, ga ở đâu ạ?" },
    { speaker: "Person", jp: "まっすぐ行って、右に曲がってください。", vi: "Đi thẳng rồi rẽ phải." },
    { speaker: "You", jp: "遠いですか？", vi: "Có xa không?" },
    { speaker: "Person", jp: "五分ぐらいです。", vi: "Khoảng 5 phút." },
    { speaker: "You", jp: "ありがとうございます。", vi: "Cảm ơn ạ." }
  ] },
  { title: "Tại cửa hàng", lines: [
    { speaker: "You", jp: "これはいくらですか？", vi: "Cái này bao nhiêu tiền?" },
    { speaker: "Staff", jp: "三千円です。", vi: "3000 yên." },
    { speaker: "You", jp: "少し高いですね。安くなりますか？", vi: "Hơi đắt nhỉ. Có giảm được không?" },
    { speaker: "Staff", jp: "二千五百円はいかがですか？", vi: "2500 yên được không?" },
    { speaker: "You", jp: "じゃ、これをください。", vi: "Vậy cho tôi cái này." }
  ] }
];
var CONV = { convo: null, lineIdx: 0, showVi: false };
function openConversationSim() {
  CONV.convo = _CONVOS[Math.floor(Math.random() * _CONVOS.length)];
  CONV.lineIdx = 0;
  CONV.showVi = false;
  _renderConvo();
}
function _renderConvo() {
  var ol = _ov("convo-overlay");
  var c = CONV.convo;
  var h = '<div class="mg-container"><div class="mg-header"><h3>💬 Hội thoại: ' + esc(c.title) + '</h3><span class="mg-close" onclick="closeConversationSim()">✕</span></div>';
  h += '<div class="at-convo-lines">';
  for (var i = 0; i <= CONV.lineIdx && i < c.lines.length; i++) {
    var line = c.lines[i];
    var cls = line.speaker === "You" ? "at-line-you" : "at-line-other";
    h += '<div class="at-convo-line ' + cls + '">';
    h += '<div class="at-line-speaker">' + esc(line.speaker) + "</div>";
    h += '<div class="at-line-jp">' + esc(line.jp) + ` <button class="at-speak-btn" onclick="speak('` + esc(line.jp).replace(/'/g, "\\'") + `')">🔊</button></div>`;
    if (CONV.showVi || i < CONV.lineIdx) h += '<div class="at-line-vi">' + esc(line.vi) + "</div>";
    h += "</div>";
  }
  h += "</div>";
  h += '<div class="at-actions">';
  h += '<button class="st-btn" onclick="convoToggleVi()">' + (CONV.showVi ? "🙈 Ẩn VN" : "👁 Hiện VN") + "</button>";
  if (CONV.lineIdx < c.lines.length - 1) {
    h += '<button class="st-btn primary" onclick="convoNext()">Tiếp →</button>';
  } else {
    h += '<button class="st-btn primary" onclick="openConversationSim()">🔄 Hội thoại mới</button>';
  }
  h += "</div></div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function convoNext() {
  CONV.lineIdx++;
  _renderConvo();
}
function convoToggleVi() {
  CONV.showVi = !CONV.showVi;
  _renderConvo();
}
function closeConversationSim() {
  _clOv("convo-overlay");
}
var _PITCH_DATA = [
  { word: "箸", reading: "はし", pitch: "HL", meaning: "đũa", note: "頭高型" },
  { word: "橋", reading: "はし", pitch: "LH", meaning: "cầu", note: "尾高型" },
  { word: "雨", reading: "あめ", pitch: "HL", meaning: "mưa", note: "頭高型" },
  { word: "飴", reading: "あめ", pitch: "LH", meaning: "kẹo", note: "平板型" },
  { word: "花", reading: "はな", pitch: "LH", meaning: "hoa", note: "平板型" },
  { word: "鼻", reading: "はな", pitch: "HL", meaning: "mũi", note: "頭高型" },
  { word: "酒", reading: "さけ", pitch: "LH", meaning: "rượu", note: "平板型" },
  { word: "鮭", reading: "さけ", pitch: "HL", meaning: "cá hồi", note: "頭高型" },
  { word: "神", reading: "かみ", pitch: "LH", meaning: "thần", note: "平板型" },
  { word: "紙", reading: "かみ", pitch: "LH(L)", meaning: "giấy", note: "尾高型" },
  { word: "髪", reading: "かみ", pitch: "HL", meaning: "tóc", note: "頭高型" }
];
var PITCH = { items: [], idx: 0, score: 0 };
function openPitchAccent() {
  PITCH.items = shuffleArray([..._PITCH_DATA]).slice(0, 8);
  PITCH.idx = 0;
  PITCH.score = 0;
  _renderPitch();
}
function _renderPitch() {
  var ol = _ov("pitch-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🎵 Pitch Accent</h3><span class="mg-close" onclick="closePitchAccent()">✕</span></div>';
  if (PITCH.idx >= PITCH.items.length) {
    h += '<div class="mg-result">Kết quả: ' + PITCH.score + "/" + PITCH.items.length + "</div>";
    h += '<button class="st-btn primary" onclick="openPitchAccent()">🔄 Lại</button>';
  } else {
    var item = PITCH.items[PITCH.idx];
    h += '<div class="mg-progress">' + (PITCH.idx + 1) + "/" + PITCH.items.length + " · ✅ " + PITCH.score + "</div>";
    h += '<div class="at-word">' + esc(item.reading) + "</div>";
    h += '<div class="at-meaning">' + esc(item.meaning) + "</div>";
    h += `<button class="st-btn" onclick="speak('` + esc(item.word).replace(/'/g, "\\'") + `')" style="margin:8px auto;display:block">🔊 Nghe</button>`;
    h += '<div class="at-pitch-q">Pitch pattern là gì?</div>';
    h += '<div class="mg-choices">';
    ["HL (cao-thấp)", "LH (thấp-cao)", "LHL (thấp-cao-thấp)", "LH(L) (thấp-cao, rơi)"].forEach(function(opt) {
      var code = opt.split(" ")[0];
      h += `<button class="mg-choice-btn" onclick="pitchAnswer('` + code + `')">` + opt + "</button>";
    });
    h += "</div>";
    h += '<div id="pitch-fb"></div>';
  }
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function pitchAnswer(ans) {
  var item = PITCH.items[PITCH.idx];
  var correct = item.pitch === ans;
  if (correct) {
    PITCH.score++;
    haptic();
  }
  var fb = document.getElementById("pitch-fb");
  if (fb) fb.innerHTML = '<div class="mg-feedback ' + (correct ? "correct" : "wrong") + '">' + (correct ? "✓" : "✗ → " + esc(item.pitch)) + " (" + esc(item.note) + ")</div>";
  setTimeout(function() {
    PITCH.idx++;
    _renderPitch();
  }, 1200);
}
function closePitchAccent() {
  _clOv("pitch-overlay");
}
function openExtendedListening() {
  var passages = [];
  S.grammar.forEach(function(sec) {
    sec.patterns.forEach(function(p) {
      var lines = p.content.match(/[ぁ-ん\u30A0-\u30FF\u4E00-\u9FFF][^\n|*]{8,80}/g);
      if (lines && lines.length >= 3) {
        passages.push({ title: p.title, lines: lines.slice(0, 5) });
      }
    });
  });
  if (passages.length < 1) {
    showToast("Không đủ dữ liệu");
    return;
  }
  var passage = passages[Math.floor(Math.random() * passages.length)];
  var ol = _ov("extlisten-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>👂 Extended Listening</h3><span class="mg-close" onclick="closeExtendedListening()">✕</span></div>';
  h += '<div class="at-podcast-title">📖 ' + esc(passage.title) + "</div>";
  h += '<div class="at-passage" id="ext-passage">';
  passage.lines.forEach(function(line, i) {
    h += '<div class="at-passage-line" id="ext-line-' + i + '">';
    h += `<button class="at-speak-btn" onclick="speak('` + esc(line.trim()).replace(/'/g, "\\'") + `')">🔊</button>`;
    h += '<span class="at-passage-text">' + esc(line.trim()) + "</span>";
    h += "</div>";
  });
  h += "</div>";
  h += '<button class="st-btn primary" onclick="extListenAll()" style="margin:12px auto;display:block">🔊 Phát tất cả</button>';
  h += '<button class="st-btn" onclick="openExtendedListening()" style="margin:4px auto;display:block">🔄 Bài mới</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function extListenAll() {
  var lines = document.querySelectorAll("#ext-passage .at-passage-text");
  var texts = [];
  lines.forEach(function(el) {
    texts.push(el.textContent);
  });
  var full = texts.join("。");
  speak(full);
}
function closeExtendedListening() {
  _clOv("extlisten-overlay");
}
function openVoiceSelect() {
  var voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  var jaVoices = voices.filter(function(v) {
    return v.lang.indexOf("ja") >= 0;
  });
  var ol = _ov("voicesel-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🎙️ Chọn giọng TTS</h3><span class="mg-close" onclick="closeVoiceSelect()">✕</span></div>';
  h += '<div class="at-voices">';
  if (jaVoices.length === 0) {
    h += '<div class="at-tip">Không tìm thấy giọng tiếng Nhật. Thử cài thêm giọng TTS trong cài đặt hệ thống.</div>';
  }
  jaVoices.forEach(function(v, i) {
    h += '<div class="at-voice-item" onclick="selectVoice(' + i + ')">';
    h += '<div class="at-voice-name">' + esc(v.name) + "</div>";
    h += '<div class="at-voice-lang">' + esc(v.lang) + (v.localService ? " (local)" : " (remote)") + "</div>";
    h += '<button class="st-btn" onclick="event.stopPropagation();testVoice(' + i + ')">🔊 Test</button>';
    h += "</div>";
  });
  h += "</div>";
  h += '<div class="at-tip">💡 Giọng hiện tại sẽ được lưu trong cài đặt TTS.</div>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function selectVoice(idx) {
  var voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  var jaVoices = voices.filter(function(v) {
    return v.lang.indexOf("ja") >= 0;
  });
  if (jaVoices[idx]) {
    S.ttsVoiceName = jaVoices[idx].name;
    showToast("Đã chọn: " + jaVoices[idx].name);
  }
}
function testVoice(idx) {
  var voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  var jaVoices = voices.filter(function(v) {
    return v.lang.indexOf("ja") >= 0;
  });
  if (jaVoices[idx] && window.speechSynthesis) {
    var u = new SpeechSynthesisUtterance("こんにちは、テストです");
    u.voice = jaVoices[idx];
    u.lang = "ja-JP";
    window.speechSynthesis.speak(u);
  }
}
function closeVoiceSelect() {
  _clOv("voicesel-overlay");
}
function openCustomPlaylist() {
  var saved = _loadPlaylist();
  _vocab();
  var ol = _ov("playlist-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🎵 Custom Playlist</h3><span class="mg-close" onclick="closeCustomPlaylist()">✕</span></div>';
  h += '<div class="at-tip">Thêm từ vào playlist cá nhân để luyện nghe</div>';
  h += '<input class="pz-spt-input" id="pl-search" placeholder="Tìm từ vựng..." oninput="plSearch()" />';
  h += '<div id="pl-results" class="at-pl-results"></div>';
  h += '<div class="at-pl-current"><b>Playlist hiện tại (' + saved.length + " từ):</b></div>";
  h += '<div id="pl-list" class="at-pl-list">';
  saved.forEach(function(w, i) {
    h += '<div class="at-pl-item">' + esc(w) + ' <button class="at-pl-rm" onclick="plRemove(' + i + ')">✕</button></div>';
  });
  h += "</div>";
  h += '<button class="st-btn primary" onclick="plPlayAll()" style="margin-top:8px">🔊 Phát playlist</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function plSearch() {
  var q = document.getElementById("pl-search");
  if (!q) return;
  var term = q.value.trim().toLowerCase();
  var results = document.getElementById("pl-results");
  if (!results || term.length < 1) {
    if (results) results.innerHTML = "";
    return;
  }
  var vocab = _vocab();
  var matches = vocab.filter(function(v) {
    return v.word && v.word.toLowerCase().indexOf(term) >= 0 || v.meaning && v.meaning.toLowerCase().indexOf(term) >= 0;
  }).slice(0, 8);
  var h = "";
  matches.forEach(function(m) {
    h += `<div class="at-pl-result" onclick="plAdd('` + esc(m.word).replace(/'/g, "\\'") + `')">` + esc(m.word) + " - " + esc(m.meaning) + " <small>+ Thêm</small></div>";
  });
  results.innerHTML = h;
}
function plAdd(word) {
  var saved = _loadPlaylist();
  if (saved.length >= 300) {
    showToast("Playlist tối đa 300 từ");
    return;
  }
  if (saved.indexOf(word) < 0) {
    saved.push(word);
    _savePlaylist(saved);
  }
  openCustomPlaylist();
}
function plRemove(idx) {
  var saved = _loadPlaylist();
  saved.splice(idx, 1);
  _savePlaylist(saved);
  openCustomPlaylist();
}
function plPlayAll() {
  var saved = _loadPlaylist();
  if (saved.length === 0) {
    showToast("Playlist trống");
    return;
  }
  var idx = 0;
  function playNext() {
    if (idx >= saved.length) {
      showToast("🎵 Hết playlist!");
      return;
    }
    speak(saved[idx]);
    idx++;
    setTimeout(playNext, 2500);
  }
  playNext();
}
function closeCustomPlaylist() {
  _clOv("playlist-overlay");
}
function openKaraoke() {
  var items = [];
  S.grammar.forEach(function(sec) {
    sec.patterns.forEach(function(p) {
      var m = p.content.match(/[ぁ-ん\u30A0-\u30FF\u4E00-\u9FFF][^\n|*]{5,40}/g);
      if (m) m.slice(0, 3).forEach(function(s) {
        items.push(s.trim());
      });
    });
  });
  items = _pick(items, 8);
  var ol = _ov("karaoke-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>🎤 Karaoke</h3><span class="mg-close" onclick="closeKaraoke()">✕</span></div>';
  h += '<div class="at-tip">Đọc theo dòng chữ hiện ra!</div>';
  h += '<div class="at-karaoke-lines" id="karaoke-lines">';
  items.forEach(function(line, i) {
    h += '<div class="at-karaoke-line" id="kr-line-' + i + '" style="opacity:0.3">' + esc(line) + "</div>";
  });
  h += "</div>";
  h += '<button class="st-btn primary" onclick="karaokePlay()" id="kr-play">▶ Bắt đầu</button>';
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
  window._krItems = items;
}
function karaokePlay() {
  var items = window._krItems || [];
  var idx = 0;
  function highlight() {
    if (idx >= items.length) {
      showToast("🎤 Hết bài!");
      return;
    }
    for (var i = 0; i < items.length; i++) {
      var el = document.getElementById("kr-line-" + i);
      if (el) el.style.opacity = i === idx ? "1" : "0.3";
      if (el && i === idx) el.style.transform = "scale(1.1)";
      else if (el) el.style.transform = "scale(1)";
    }
    speak(items[idx]);
    idx++;
    setTimeout(highlight, 3e3);
  }
  highlight();
}
function closeKaraoke() {
  _clOv("karaoke-overlay");
}
var _MINIMAL_PAIRS = [
  { a: "おばさん", b: "おばあさん", qa: "cô/dì", qb: "bà ngoại" },
  { a: "おじさん", b: "おじいさん", qa: "chú/bác", qb: "ông ngoại" },
  { a: "ここ", b: "こっこ", qa: "ở đây", qb: "(sound)" },
  { a: "きて", b: "きって", qa: "mặc", qb: "cắt" },
  { a: "ビル", b: "ビール", qa: "tòa nhà", qb: "bia" },
  { a: "かわいい", b: "こわい", qa: "dễ thương", qb: "đáng sợ" },
  { a: "すき", b: "すうき", qa: "thích", qb: "(other)" },
  { a: "つき", b: "づき", qa: "mặt trăng", qb: "đính kèm" }
];
var SDIS = { pairs: [], idx: 0, score: 0, current: null };
function openSoundDiscrimination() {
  SDIS.pairs = shuffleArray([..._MINIMAL_PAIRS]).slice(0, 6);
  SDIS.idx = 0;
  SDIS.score = 0;
  _renderSoundDisc();
}
function _renderSoundDisc() {
  var ol = _ov("sounddisc-overlay");
  var h = '<div class="mg-container"><div class="mg-header"><h3>👂 Sound Discrimination</h3><span class="mg-close" onclick="closeSoundDiscrimination()">✕</span></div>';
  if (SDIS.idx >= SDIS.pairs.length) {
    h += '<div class="mg-result">Kết quả: ' + SDIS.score + "/" + SDIS.pairs.length + "</div>";
    h += '<button class="st-btn primary" onclick="openSoundDiscrimination()">🔄 Lại</button>';
  } else {
    var pair = SDIS.pairs[SDIS.idx];
    var playA = Math.random() < 0.5;
    SDIS.current = playA ? "a" : "b";
    h += '<div class="mg-progress">' + (SDIS.idx + 1) + "/" + SDIS.pairs.length + " · ✅ " + SDIS.score + "</div>";
    h += '<button class="st-btn primary" onclick="sdPlay()" style="margin:16px auto;display:block;font-size:1.2em">🔊 Nghe</button>';
    h += '<div class="at-pitch-q">Bạn nghe thấy từ nào?</div>';
    h += '<div class="mg-choices">';
    h += `<button class="mg-choice-btn" onclick="sdAnswer('a')">` + esc(pair.a) + " (" + esc(pair.qa) + ")</button>";
    h += `<button class="mg-choice-btn" onclick="sdAnswer('b')">` + esc(pair.b) + " (" + esc(pair.qb) + ")</button>";
    h += "</div>";
    h += '<div id="sd-fb"></div>';
  }
  h += "</div>";
  ol.innerHTML = h;
  ol.classList.add("active");
}
function sdPlay() {
  var pair = SDIS.pairs[SDIS.idx];
  speak(SDIS.current === "a" ? pair.a : pair.b);
}
function sdAnswer(ans) {
  var correct = ans === SDIS.current;
  if (correct) {
    SDIS.score++;
    haptic();
  }
  var pair = SDIS.pairs[SDIS.idx];
  var word = SDIS.current === "a" ? pair.a : pair.b;
  var fb = document.getElementById("sd-fb");
  if (fb) fb.innerHTML = '<div class="mg-feedback ' + (correct ? "correct" : "wrong") + '">' + (correct ? "✓" : "✗") + " → " + esc(word) + "</div>";
  setTimeout(function() {
    SDIS.idx++;
    _renderSoundDisc();
  }, 1200);
}
function closeSoundDiscrimination() {
  _clOv("sounddisc-overlay");
}
export {
  CONV,
  PITCH,
  PODCAST,
  SDIS,
  SHADOW,
  atToggleRecord,
  closeConversationSim,
  closeCustomPlaylist,
  closeExtendedListening,
  closeKaraoke,
  closeMiniPodcast,
  closePitchAccent,
  closePronunciationCompare,
  closeShadowing,
  closeSoundDiscrimination,
  closeVoiceSelect,
  convoNext,
  convoToggleVi,
  extListenAll,
  karaokePlay,
  openConversationSim,
  openCustomPlaylist,
  openExtendedListening,
  openKaraoke,
  openMiniPodcast,
  openPitchAccent,
  openPronunciationCompare,
  openShadowing,
  openSoundDiscrimination,
  openVoiceSelect,
  pitchAnswer,
  plAdd,
  plPlayAll,
  plRemove,
  plSearch,
  podcastAutoPlay,
  podcastNextTrack,
  podcastPlay,
  podcastPrev,
  sdAnswer,
  sdPlay,
  selectVoice,
  shadowAutoPlay,
  shadowNext,
  testVoice
};
