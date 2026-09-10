const AI_FEATURE_METADATA = [
  // ─── Built-in features ───
  { id: "chat", icon: "💬", name: "Chat AI", desc: "Hỏi đáp tự do bằng tiếng Việt hoặc Nhật", cat: "core" },
  { id: "grammar", icon: "✏️", name: "Kiểm tra ngữ pháp", desc: "Kiểm tra câu tiếng Nhật của bạn", cat: "core" },
  { id: "examples", icon: "📝", name: "Tạo ví dụ", desc: "Tạo câu ví dụ cho từ vựng/ngữ pháp", cat: "core" },
  { id: "conversation", icon: "🎭", name: "Hội thoại mẫu", desc: "Tạo hội thoại theo chủ đề", cat: "core" },
  { id: "writing", icon: "✍️", name: "Viết & chấm điểm", desc: "Viết bài JP, AI sửa và chấm", cat: "core" },
  { id: "roleplay", icon: "🎭", name: "Nhập vai", desc: "Nhập vai tình huống thực tế", cat: "core" },
  { id: "analyze", icon: "🔍", name: "Phân tích câu", desc: "Phân tích từng từ, ngữ pháp, nghĩa", cat: "core" },
  { id: "advisor", icon: "📊", name: "Cố vấn học tập", desc: "Lộ trình cá nhân hóa dựa trên dữ liệu", cat: "core" },
  { id: "freetalk", icon: "💬", name: "Trò chuyện tự do", desc: "Nói chuyện tự do bằng tiếng Nhật", cat: "core" },
  // ─── External AI features ───
  { id: "ai-quiz", icon: "🎯", name: "AI trắc nghiệm", desc: "Bài trắc nghiệm cá nhân hóa bằng AI", cat: "practice" },
  { id: "ai-grammar-drill", icon: "📝", name: "Luyện ngữ pháp AI", desc: "Luyện ngữ pháp thích ứng", cat: "practice" },
  { id: "ai-mistakes", icon: "🎯", name: "Phân tích lỗi sai", desc: "Phân tích lỗi sai và điểm yếu", cat: "practice" },
  { id: "ai-navigator", icon: "🤖", name: "Điều hướng AI", desc: "Chatbot đề xuất tính năng phù hợp", cat: "tools" },
  { id: "ai-jlpt-predictor", icon: "📊", name: "Dự đoán JLPT", desc: "Dự đoán điểm JLPT", cat: "tools" },
  { id: "ai-wordmap", icon: "🧩", name: "Bản đồ từ", desc: "Sơ đồ liên tưởng từ vựng", cat: "tools" },
  { id: "ai-story", icon: "📖", name: "Tạo truyện", desc: "Truyện tương tác phân nhánh", cat: "creative" },
  { id: "ai-news", icon: "📰", name: "Đơn giản hóa tin", desc: "Đơn giản hóa văn bản JP", cat: "creative" },
  { id: "ai-lyrics", icon: "🎵", name: "Lời bài hát", desc: "Học qua bài hát AI tạo", cat: "creative" },
  { id: "ai-diary", icon: "✍️", name: "Trợ lý nhật ký", desc: "Viết nhật ký JP, AI chấm và sửa", cat: "creative" },
  { id: "ai-scene", icon: "🎭", name: "Mô phỏng tình huống", desc: "Mô phỏng tình huống thực tế", cat: "creative" },
  { id: "ai-kanji-detective", icon: "🔍", name: "Thám tử kanji", desc: "Giải mã kanji: bộ thủ, mẹo nhớ", cat: "tools" }
];
export {
  AI_FEATURE_METADATA as A
};
