import { w as worldOverlayMount } from "./legacy-loader-gyvSYPc3.js";
/* empty css               */
function showToast(msg, duration) {
  duration = duration || 2500;
  let c = document.getElementById("toast-container");
  if (!c) {
    c = document.createElement("div");
    c.id = "toast-container";
    c.className = "toast-container n4-legacy-toast-host";
    c.setAttribute("role", "status");
    c.setAttribute("aria-live", "polite");
    c.setAttribute("aria-atomic", "false");
    worldOverlayMount().appendChild(c);
  }
  const t = document.createElement("div");
  t.className = "toast n4-legacy-toast";
  t.textContent = msg;
  t.style.animationDuration = "0.35s, 0.35s";
  t.style.animationDelay = "0s, " + (duration - 350) + "ms";
  c.appendChild(t);
  setTimeout(() => t.remove(), duration);
}
export {
  showToast as s
};
