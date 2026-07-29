import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, a1 as useManagedTimeout } from "./feature-3d-CFvJkEt3.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-CYISTbY6.js";
import "./vendor-supabase-DTEAj5J1.js";
function XpToast() {
  const xp = useLearningStore((s) => s.xp);
  const combo = useLearningStore((s) => s.combo);
  const prevXp = reactExports.useRef(xp);
  const [toasts, setToasts] = reactExports.useState([]);
  const { scheduleTimeout } = useManagedTimeout();
  reactExports.useEffect(() => {
    const delta = xp - prevXp.current;
    prevXp.current = xp;
    if (delta <= 0) return;
    const id = Date.now() + Math.random();
    const comboVal = combo > 1 ? combo : null;
    setToasts((prev) => [...prev, { id, delta, combo: comboVal }]);
    scheduleTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2e3);
  }, [scheduleTimeout, xp]);
  const dismiss = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));
  if (toasts.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-xp-toast-container", children: toasts.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      className: "n4-xp-toast",
      onClick: () => dismiss(t.id),
      "aria-label": "Đóng",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-xp-toast-icon", children: "⭐" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-xp-toast-amount", children: [
          "+",
          t.delta,
          " XP"
        ] }),
        t.combo && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-xp-toast-combo", children: [
          "🔥×",
          t.combo
        ] })
      ]
    },
    t.id
  )) });
}
export {
  XpToast as default
};
