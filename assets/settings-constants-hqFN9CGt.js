const ACCENT_COLORS = [
  { label: "Lam sáng", value: "#00f0ff" },
  { label: "Hồng tím", value: "#ff00aa" },
  { label: "Vàng", value: "#ffd700" },
  { label: "Xanh ngọc", value: "#00ff88" },
  { label: "Đỏ", value: "#ff3355" },
  { label: "Tím", value: "#aa66ff" },
  { label: "Hoa đào", value: "#ff6b9d" },
  { label: "Biển xanh", value: "#0088cc" },
  { label: "Hoàng hôn", value: "#ff6622" }
];
const THEME_MODE_LABELS = { dark: "Ban đêm", light: "Ban ngày" };
const DENSITIES = [
  { label: "Gọn", value: "compact" },
  { label: "Thoải mái", value: "comfortable" },
  { label: "Rộng", value: "spacious" }
];
const DIFFICULTIES = [
  { label: "😊 Dễ", value: "easy", desc: "Nhiều gợi ý, thời gian dài" },
  { label: "📚 Bình thường", value: "normal", desc: "Cân bằng học & thử thách" },
  { label: "🔥 Khó", value: "hard", desc: "Ít gợi ý, thời gian ngắn" },
  { label: "📋 JLPT", value: "jlpt", desc: "Mô phỏng điều kiện thi thật" }
];
const KANJI_FONTS = [
  { label: "Mặc định", value: "default" },
  { label: "Noto Serif JP", value: "'Noto Serif JP', serif" },
  { label: "Serif", value: "serif" },
  { label: "Sans-serif", value: "sans-serif" }
];
const KANJI_WEIGHTS = [
  { label: "Nhẹ", value: "400" },
  { label: "Vừa", value: "500" },
  { label: "Đậm", value: "700" },
  { label: "Rất đậm", value: "900" }
];
const CARD_LAYOUTS = [
  { label: "Lưới", value: "grid" },
  { label: "Danh sách", value: "list" },
  { label: "Gọn", value: "compact" }
];
const EXAMPLE_MODES = [
  { label: "Cùng dòng", value: "inline" },
  { label: "Tách khối", value: "block" },
  { label: "Ẩn", value: "hidden" }
];
const MINNA_VIEWS = [
  { label: "Mặc định", value: "default" },
  { label: "Thu gọn", value: "compact" },
  { label: "Chi tiết", value: "expanded" }
];
const COMPACT_ITEMS_SET = /* @__PURE__ */ new Set([
  "Hiện Furigana",
  "Hiện Romaji",
  "Tự động chuyển câu",
  "Tự động phát âm",
  "🔔 Hiệu ứng âm UI",
  "✅ Âm trả lời đúng",
  "❌ Âm trả lời sai",
  "🎯 Chế độ tập trung",
  "Giảm chuyển động",
  "Tương phản cao",
  "🔴 Mù màu đỏ (Protanopia)",
  "🟢 Mù màu xanh (Deuteranopia)",
  "🔵 Mù màu xanh dương (Tritanopia)",
  "🔤 Font Dyslexia",
  "👆 Nút bấm lớn",
  "👉 Vuốt lật thẻ",
  "👇 Vuốt đóng modal",
  "Chế độ gỡ lỗi",
  "📚 Hiện Công Cụ Học",
  "🧩 Hiện Tính Năng Mở Rộng",
  "📖 Hiện Công Cụ Giai Đoạn 2",
  "🧠 Hiện Công Cụ Giai Đoạn 3",
  "Chế độ sáng/tối",
  "Mật độ hiển thị",
  "🔤 Cỡ chữ toàn cục",
  "🃏 Kiểu hiển thị thẻ",
  "📍 Vị trí thanh điều hướng",
  "🎮 Số cột Games Hub",
  "📚 Chế độ xem Minna",
  "📖 Hiển thị ví dụ",
  "Tốc độ TTS",
  "Mục tiêu XP/ngày",
  "Từ mới/ngày",
  "Số câu hỏi mặc định",
  "📖 Bắt đầu từ bài",
  "📖 Kết thúc ở bài",
  "📏 Cỡ chữ Kanji",
  "📐 Cỡ chữ tab Kanji",
  "📐 Cỡ chữ tab Từ vựng",
  "📐 Cỡ chữ tab Ngữ pháp",
  "📻 Tốc độ Radio JP",
  "📻 Tốc độ Radio VI",
  "🇯🇵 Giọng tiếng Nhật",
  "🇻🇳 Giọng tiếng Việt",
  "🖋️ Font chữ Kanji",
  "🖊️ Độ đậm Kanji"
]);
const POPULAR_ITEMS_SET = /* @__PURE__ */ new Set([
  "Hiện Furigana",
  "Hiện Romaji",
  "Chế độ sáng/tối",
  "Độ khó",
  "Tốc độ TTS",
  "🔤 Cỡ chữ toàn cục",
  "Tự động phát âm",
  "🎯 Chế độ tập trung"
]);
const TABS = [
  { id: "display", icon: "Aa", label: "Hiển thị" },
  { id: "games", icon: "学", label: "Học tập" },
  { id: "audio", icon: "♪", label: "Âm thanh" },
  { id: "accessibility", icon: "A+", label: "Trợ năng" },
  { id: "advanced", icon: "⋯", label: "Nâng cao" },
  { id: "online", icon: "↕", label: "Dữ liệu" }
];
const GROUP_LABELS = {
  popular: "Cài đặt phổ biến",
  display: "Thiết lập hiển thị",
  games: "Tiến trình và chế độ học tập",
  audio: "Âm thanh và radio",
  accessibility: "Chế độ trợ năng",
  advanced: "Công cụ nâng cao",
  online: "Sao lưu và đồng bộ"
};
const SECTIONS = {
  // display
  theme: { header: "Giao diện và chủ đề", footer: "Chọn chế độ sáng/tối, bộ chủ đề màu sắc và màu nhấn cho ứng dụng." },
  gfx: { header: "Hiệu ứng và hiệu năng", footer: "Tăng giảm chất lượng đồ họa và hiệu ứng hạt khi chạm màn hình." },
  layout: { header: "Bố cục và mật độ hiển thị", footer: "Tùy chỉnh khoảng cách các phần tử, kiểu hiển thị thẻ và các thanh điều hướng." },
  japanese: { header: "Hiển thị tiếng Nhật", footer: "Cài đặt cách hiển thị bảng chữ cái Furigana và Romaji." },
  font: { header: "Font và cỡ chữ Kanji", footer: "Tùy biến kiểu chữ, độ đậm nhạt và kích thước chữ Kanji, Từ vựng, Ngữ pháp." },
  // games
  study_mode: { header: "Chế độ học tập", footer: "Chọn độ khó phù hợp với tiến trình học tập của bạn." },
  goals: { header: "Chỉ tiêu và mục tiêu ngày", footer: "Đặt chỉ tiêu điểm kinh nghiệm (XP) và số từ học mới mỗi ngày." },
  quiz_options: { header: "Thiết lập trắc nghiệm", footer: "Cài đặt hành vi chuyển câu và số câu hỏi mặc định trong mỗi bài luyện tập." },
  minna_range: { header: "Giới hạn bài học Minna", footer: "Giới hạn phạm vi bài học Minna no Nihongo đang học." },
  // audio
  tts_options: { header: "Đọc thoại và phát âm", footer: "Cấu hình giọng đọc tự động và tốc độ của hệ thống phát âm." },
  voices: { header: "Chọn giọng đọc", footer: "Thay đổi giọng đọc của AI tiếng Nhật và tiếng Việt." },
  sound_fx: { header: "Hiệu ứng âm thanh", footer: "Bật tắt âm thanh phản hồi UI và âm báo kết quả đúng/sai." },
  radio_options: { header: "Radio tin tức N4", footer: "Cấu hình tốc độ phát thanh tin tức đài tiếng Nhật và thuyết minh tiếng Việt." },
  // accessibility
  focus: { header: "Tập trung và trải nghiệm", footer: "Bật chế độ tập trung giảm xao nhãng hoặc tắt các chuyển động động." },
  visual_aid: { header: "Hỗ trợ hiển thị", footer: "Hỗ trợ người khiếm khuyết thị lực, mù màu hoặc font chữ Dyslexia." },
  gestures: { header: "Tương tác và cử chỉ", footer: "Tăng kích thước phím bấm và cấu hình vuốt nhanh trên màn hình." },
  // advanced
  developer: { header: "Công cụ nhà phát triển", footer: "Bật bảng gỡ lỗi (Debug panel) của hệ thống." },
  sidebar: { header: "Công cụ ở thanh bên", footer: "Chọn các bộ công cụ hiển thị ở thanh biên để tối ưu hóa không gian làm việc." },
  shortcuts: { header: "Phím tắt", footer: "Tham khảo danh sách phím tắt trên máy tính để thao tác nhanh hơn." },
  sync_options: { header: "Tần suất tự động đồng bộ", footer: "Cấu hình khoảng thời gian tự động đồng bộ lên đám mây." },
  // online
  cloud: { header: "Đồng bộ đám mây", footer: "Đăng nhập tài khoản Google để tự động sao lưu dữ liệu lên đám mây." },
  backup: { header: "Sao lưu bằng tệp", footer: "Tải về máy file sao lưu thủ công hoặc nạp dữ liệu từ file backup dạng JSON." },
  stats: { header: "Dữ liệu hiện tại", footer: "Xem thống kê về XP, cấp độ và số lượng từ vựng đang quản lý." },
  reset: { header: "Khôi phục và xóa dữ liệu", footer: "Khôi phục các cài đặt ban đầu hoặc xóa sạch tiến trình học tập (hành động không thể hoàn tác)." }
};
const TAB_SECTIONS = {
  display: ["theme", "gfx", "layout", "japanese", "font"],
  games: ["study_mode", "goals", "quiz_options", "minna_range"],
  audio: ["tts_options", "voices", "sound_fx", "radio_options"],
  accessibility: ["focus", "visual_aid", "gestures"],
  advanced: ["developer", "sidebar", "shortcuts", "sync_options"],
  online: ["cloud", "backup", "stats", "reset"]
};
export {
  ACCENT_COLORS as A,
  CARD_LAYOUTS as C,
  DENSITIES as D,
  EXAMPLE_MODES as E,
  GROUP_LABELS as G,
  KANJI_FONTS as K,
  MINNA_VIEWS as M,
  POPULAR_ITEMS_SET as P,
  SECTIONS as S,
  TABS as T,
  TAB_SECTIONS as a,
  THEME_MODE_LABELS as b,
  KANJI_WEIGHTS as c,
  DIFFICULTIES as d,
  COMPACT_ITEMS_SET as e
};
