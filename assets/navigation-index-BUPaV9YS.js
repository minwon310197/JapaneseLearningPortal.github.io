import { r as reactExports } from "./vendor-react-BUL8WuXG.js";
import { aA as PRIMARY_DESTINATIONS } from "./index-BEJSIlFS.js";
import { a as getVisibleTrainers, b as getTrainerModeLabel } from "./registry-BAotxlgH.js";
function useDebouncedValue(value, delayMs = 120) {
  const [debounced, setDebounced] = reactExports.useState(value);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(timer);
  }, [value, delayMs]);
  return debounced;
}
const CONTENT_DESTINATIONS = [
  { label: "Minna no Nihongo", desc: "Bài học theo giáo trình", path: "/content/minna", marker: "MIN" },
  { label: "Từ vựng", desc: "Nội dung từ vựng N4", path: "/content/vocab", marker: "TỪ" },
  { label: "Kanji", desc: "Nội dung kanji N4", path: "/content/kanji", marker: "漢" },
  { label: "Ngữ pháp", desc: "Mẫu ngữ pháp N4", path: "/content/grammar", marker: "NGỮ" },
  { label: "Bảng tham khảo", desc: "Bảng chia và trợ từ", path: "/content/reference", marker: "BẢNG" }
];
const primaryItems = PRIMARY_DESTINATIONS.map((destination) => ({
  icon: destination.shortcut,
  label: destination.label,
  desc: "Điểm đến chính",
  path: destination.path,
  cat: "destination",
  local: true
}));
const trainerItems = getVisibleTrainers().flatMap(([id, trainer]) => [
  {
    icon: trainer.icon,
    label: trainer.title,
    desc: trainer.description,
    path: `/trainer/${id}`,
    cat: "trainer",
    local: true
  },
  ...trainer.primaryModes.map((mode) => ({
    icon: trainer.icon,
    label: `${trainer.title} · ${getTrainerModeLabel(mode)}`,
    desc: `Chế độ ${getTrainerModeLabel(mode)}`,
    path: `/trainer/${id}/${mode}`,
    cat: "trainer-mode",
    local: true
  }))
]);
const NAV_ITEMS = Object.freeze([
  ...primaryItems,
  ...CONTENT_DESTINATIONS.map((item) => ({ icon: item.marker, ...item, cat: "content", local: true })),
  ...trainerItems,
  { icon: "TRA", label: "Từ điển", desc: "Tra cứu tiếng Nhật", path: "/dictionary", cat: "learn", local: true },
  { icon: "AI", label: "AI hỗ trợ học tập", desc: "Công cụ AI được nhóm theo nhiệm vụ", path: "/ai-tutor", cat: "ai", local: false }
]);
const EMPTY_SEARCH_ITEMS = Object.freeze([
  ...primaryItems,
  { icon: "TRA", label: "Tra từ", desc: "Tìm trong từ điển", path: "/dictionary", cat: "learn", local: true }
]);
export {
  EMPTY_SEARCH_ITEMS as E,
  NAV_ITEMS as N,
  useDebouncedValue as u
};
