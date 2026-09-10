import { ai as S, L as speakJP, al as speakJPPromise, am as speakVi$1, an as isTTSAvailable } from "./index-BEJSIlFS.js";
import "./vendor-react-BUL8WuXG.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
let ttsReady = false;
let jpVoice = null;
let viVoice = null;
function initTTS() {
  const check = () => {
    const status = isTTSAvailable();
    ttsReady = status.any;
    jpVoice = status.jp ? { name: "delegated" } : null;
    viVoice = status.vi ? { name: "delegated" } : null;
    if (ttsReady) document.body.classList.remove("tts-unavailable");
    else document.body.classList.add("tts-unavailable");
  };
  check();
  setTimeout(check, 1e3);
  setTimeout(check, 3e3);
  if ("speechSynthesis" in window) {
    speechSynthesis.addEventListener("voiceschanged", check);
  }
}
function speak(text) {
  if (window.__n4TtsMuted || !text) return;
  const rate = S.ttsRate >= 0.3 && S.ttsRate <= 2 ? S.ttsRate : 0.9;
  speakJP(text, rate);
}
function speakBtn(el, text) {
  speak(text);
  if (el) {
    el.classList.add("speaking");
    setTimeout(() => el.classList.remove("speaking"), 1200);
  }
}
function speakVi(text, rate) {
  if (window.__n4TtsMuted || !text) return Promise.resolve();
  speakVi$1(text, rate || 1);
  return Promise.resolve();
}
function speakJpPromise(text, rate) {
  if (window.__n4TtsMuted || !text) return Promise.resolve();
  const r = rate || S.ttsRate || 0.9;
  return speakJPPromise(text, r);
}
export {
  initTTS,
  jpVoice,
  speak,
  speakBtn,
  speakJpPromise,
  speakVi,
  ttsReady,
  viVoice
};
