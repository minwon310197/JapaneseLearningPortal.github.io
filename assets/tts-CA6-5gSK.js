import { ab as S, f as speakJP } from "./feature-3d-CFvJkEt3.js";
function speak(text) {
  if (window.__n4TtsMuted || !text) return;
  const rate = S.ttsRate >= 0.3 && S.ttsRate <= 2 ? S.ttsRate : 0.9;
  speakJP(text, rate);
}
export {
  speak as s
};
