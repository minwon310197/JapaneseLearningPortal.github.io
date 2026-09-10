import { r as reactExports } from "./vendor-react-BUL8WuXG.js";
let inertDialogCount = 0;
let previousRootInert = false;
let previousRootAriaHidden = null;
const FOCUSABLE = [
  "button:not([disabled])",
  "a[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(",");
function useDialogFocus(active, onClose, { initialFocusRef, inertRoot = false } = {}) {
  const dialogRef = reactExports.useRef(null);
  const previousFocusRef = reactExports.useRef(null);
  const onCloseRef = reactExports.useRef(onClose);
  reactExports.useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);
  reactExports.useEffect(() => {
    if (!active || !dialogRef.current) return void 0;
    const dialog = dialogRef.current;
    previousFocusRef.current = document.activeElement;
    const appRoot = inertRoot ? document.getElementById("react-root") : null;
    if (appRoot) {
      if (inertDialogCount === 0) {
        previousRootInert = appRoot.hasAttribute("inert");
        previousRootAriaHidden = appRoot.getAttribute("aria-hidden");
      }
      inertDialogCount += 1;
      appRoot.setAttribute("inert", "");
      appRoot.setAttribute("aria-hidden", "true");
    }
    const focusables = () => [...dialog.querySelectorAll(FOCUSABLE)].filter((element) => !element.hidden && element.getAttribute("aria-hidden") !== "true");
    const initial = (initialFocusRef == null ? void 0 : initialFocusRef.current) || focusables()[0] || dialog;
    initial.focus({ preventScroll: true });
    const frame = requestAnimationFrame(() => {
      if (!dialog.contains(document.activeElement)) initial.focus({ preventScroll: true });
    });
    const handleKeyDown = (event) => {
      var _a;
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        (_a = onCloseRef.current) == null ? void 0 : _a.call(onCloseRef);
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      if (!items.length) {
        event.preventDefault();
        dialog.focus();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    dialog.addEventListener("keydown", handleKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      dialog.removeEventListener("keydown", handleKeyDown);
      if (appRoot) {
        inertDialogCount = Math.max(0, inertDialogCount - 1);
        if (inertDialogCount === 0) {
          if (previousRootInert) appRoot.setAttribute("inert", "");
          else appRoot.removeAttribute("inert");
          if (previousRootAriaHidden === null) appRoot.removeAttribute("aria-hidden");
          else appRoot.setAttribute("aria-hidden", previousRootAriaHidden);
        }
      }
      const previous = previousFocusRef.current;
      if (previous == null ? void 0 : previous.isConnected) requestAnimationFrame(() => previous.focus({ preventScroll: true }));
    };
  }, [active, initialFocusRef, inertRoot]);
  return dialogRef;
}
export {
  useDialogFocus as u
};
