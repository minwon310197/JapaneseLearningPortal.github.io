import { P as S, as as speakJP } from "./feature-3d-ClP3ARU5.js";
function speak(text) {
  if (window.__n4TtsMuted || !text) return;
  const rate = S.ttsRate >= 0.3 && S.ttsRate <= 2 ? S.ttsRate : 0.9;
  speakJP(text, rate);
}
export {
  speak as s
};
