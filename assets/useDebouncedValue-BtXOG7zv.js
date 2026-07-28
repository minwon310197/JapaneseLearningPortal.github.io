import { r as reactExports } from "./vendor-react-BYxMSDiB.js";
function useDebouncedValue(value, delayMs = 120) {
  const [debounced, setDebounced] = reactExports.useState(value);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(timer);
  }, [value, delayMs]);
  return debounced;
}
export {
  useDebouncedValue as u
};
