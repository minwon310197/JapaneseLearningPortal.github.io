function showToast(msg, duration) {
  duration = duration || 2500;
  const c = document.getElementById("toast-container");
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  t.style.animationDuration = "0.35s, 0.35s";
  t.style.animationDelay = "0s, " + (duration - 350) + "ms";
  c.appendChild(t);
  setTimeout(() => t.remove(), duration);
}
export {
  showToast as s
};
