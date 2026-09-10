const TOOL_GROUPS = [
  {
    id: "lookup",
    header: "📖 Tra cứu",
    tools: [
      { icon: "📕", label: "Từ điển Jisho", fn: "openJishoPopup", desc: "Từ điển Jisho" },
      { icon: "🔤", label: "Bảng kana", fn: "openKanaChart", desc: "Bảng ひらがな và カタカナ" },
      { icon: "📐", label: "Cẩm nang ngữ pháp", fn: "openGrammarQuickRef", desc: "Tra cứu nhanh ngữ pháp" },
      { icon: "🔍", label: "Tách bộ kanji", fn: "openKanjiDecomposer", desc: "Phân tích bộ thủ kanji" },
      { icon: "🗺️", label: "Khám phá từ vựng", fn: "openVocabExplorer", desc: "Khám phá từ vựng" },
      { icon: "📊", label: "Bảng chia thể", fn: "openConjugationTable", desc: "Bảng chia động từ" }
    ]
  },
  {
    id: "practice",
    header: "🎯 Luyện tập",
    tools: [
      { icon: "⚡", label: "Trí nhớ tốc độ", fn: "startSpeedMemory", desc: "Luyện trí nhớ tốc độ" },
      { icon: "🔄", label: "Chia động từ", fn: "startVerbConjugator", desc: "Bài tập chia động từ" },
      { icon: "🎲", label: "Ôn ngẫu nhiên", fn: "openRandomReview", desc: "Ôn luyện ngẫu nhiên" },
      { icon: "⭐", label: "Thẻ đã đánh dấu", fn: "startBookmarkFlashcards", desc: "Thẻ lật từ đã đánh dấu" },
      { icon: "📻", label: "Đài N4", fn: "startRadio", desc: "Nghe thụ động N4" },
      { icon: "📖", label: "Tốc độ đọc", fn: "openReadingSpeed", desc: "Luyện tốc độ đọc" }
    ]
  },
  {
    id: "tracking",
    header: "📊 Theo dõi",
    tools: [
      { icon: "📈", label: "Phân tích", fn: "openAnalyticsDash", desc: "Phân tích chi tiết" },
      { icon: "🔥", label: "Chuỗi học", fn: "openStudyStreak", desc: "Theo dõi chuỗi học" },
      { icon: "📋", label: "Thống kê nhanh", fn: "openQuickStats", desc: "Thống kê nhanh hôm nay" },
      { icon: "📅", label: "Kế hoạch học", fn: "openStudyPlanner", desc: "Lập kế hoạch tuần" },
      { icon: "🔁", label: "Hàng đợi SRS", fn: "openSrsQueue", desc: "Xem hàng đợi SRS" },
      { icon: "🏆", label: "Xuất thành tích", fn: "openAchievementExport", desc: "Xuất thành tích" }
    ]
  },
  {
    id: "challenge",
    header: "💪 Thử thách",
    tools: [
      { icon: "📓", label: "Sổ lỗi sai", fn: "openMistakeNotebook", desc: "Sổ ghi lỗi sai" },
      { icon: "🌟", label: "Thử thách ngày", fn: "openDailyChallenge", desc: "Thử thách hằng ngày" },
      { icon: "🎯", label: "Điểm yếu", fn: "openWeakPoints", desc: "Tập trung điểm yếu" }
    ]
  },
  {
    id: "support",
    header: "🛠️ Hỗ trợ",
    tools: [
      { icon: "⏱️", label: "Hẹn giờ học", fn: "openStudyTimer", desc: "Đếm giờ Pomodoro" },
      { icon: "📝", label: "Ghi chú học", fn: "openStudyNotes", desc: "Ghi chú nhanh" },
      { icon: "🧠", label: "Mẹo nhớ", fn: "openMnemonics", desc: "Phương pháp ghi nhớ" },
      { icon: "🔗", label: "Liên tưởng từ", fn: "openWordAssociation", desc: "Liên kết từ vựng" }
    ]
  },
  {
    id: "extended",
    header: "🚀 Tính năng mở rộng",
    tools: [
      { icon: "🔙", label: "Ôn N5", fn: "openN5Review", desc: "Ôn tập N5 cơ bản" },
      { icon: "🔄", label: "Tự/Tha động từ", fn: "openTransIntrans", desc: "Cặp tự động từ & tha động từ N4" },
      { icon: "📱", label: "Từ điển ngoại tuyến", fn: "openOfflineDict", desc: "Từ điển ngoại tuyến" },
      { icon: "🏮", label: "Tục ngữ", fn: "openProverbs", desc: "Tục ngữ Nhật Bản" },
      { icon: "🎌", label: "Kính ngữ cơ bản", fn: "openKeigoBasics", desc: "Kính ngữ cơ bản" },
      { icon: "🇻🇳", label: "Từ điển Hán-Việt", fn: "openHanVietDict", desc: "Từ điển Hán Việt" },
      { icon: "🎤", label: "So phát âm", fn: "openPronunciationCompare", desc: "So sánh phát âm" },
      { icon: "🗣️", label: "Nhại lời", fn: "openShadowing", desc: "Luyện nói nhại theo" },
      { icon: "🔊", label: "Chọn giọng", fn: "openVoiceSelect", desc: "Chọn giọng TTS" },
      { icon: "✍️", label: "Viết trên bảng", fn: "openCanvasWriting", desc: "Tập viết trên bảng" },
      { icon: "🧩", label: "Chi tiết bộ thủ", fn: "openRadicalDetail", desc: "Chi tiết bộ thủ" },
      { icon: "🃏", label: "Thẻ tự tạo", fn: "openCustomCards", desc: "Tạo thẻ riêng" }
    ]
  },
  {
    id: "daily",
    header: "📅 Học hằng ngày",
    tools: [
      { icon: "📅", label: "Từ hôm nay", fn: "openWordOfDay", desc: "Từ vựng hôm nay" },
      { icon: "🈲", label: "Kanji hôm nay", fn: "openKanjiOfDay", desc: "Kanji hôm nay" },
      { icon: "📐", label: "Ngữ pháp hôm nay", fn: "openGrammarOfDay", desc: "Ngữ pháp hôm nay" },
      { icon: "📚", label: "Bài mini", fn: "openDailyMiniLesson", desc: "Bài học mini 5 phút" },
      { icon: "🎧", label: "Nghe hằng ngày", fn: "openDailyListening", desc: "Luyện nghe 1 phút" },
      { icon: "💬", label: "Cụm từ hôm nay", fn: "openPhraseOfDay", desc: "Cụm từ hằng ngày" },
      { icon: "📋", label: "Tổng hợp lỗi sai", fn: "openMistakeDigest", desc: "Tổng hợp lỗi sai hôm qua" },
      { icon: "🌅", label: "Trắc nghiệm sáng", fn: "openMorningQuiz", desc: "10 câu trắc nghiệm buổi sáng" },
      { icon: "🌙", label: "Ôn tối", fn: "openNightReview", desc: "Tổng kết cuối ngày" }
    ]
  },
  {
    id: "reference",
    header: "📋 Tham khảo nhanh",
    tools: [
      { icon: "🔶", label: "Cẩm nang trợ từ", fn: "openParticleRef", desc: "Tất cả trợ từ + ví dụ" },
      { icon: "🔢", label: "Cẩm nang trợ số từ", fn: "openCounterRef", desc: "Số đếm + đơn vị" },
      { icon: "⏰", label: "Biểu thức thời gian", fn: "openTimeExprRef", desc: "Biểu thức thời gian" },
      { icon: "📖", label: "Nhóm động từ", fn: "openVerbGroupRef", desc: "Chia nhóm động từ" },
      { icon: "🏷️", label: "Cẩm nang tính từ", fn: "openAdjectiveRef", desc: "Bảng chia tính từ" },
      { icon: "🔗", label: "Từ nối", fn: "openConnectorRef", desc: "Liên từ nối câu" },
      { icon: "❓", label: "Từ để hỏi", fn: "openQuestionWordRef", desc: "Từ để hỏi" },
      { icon: "💥", label: "Từ tượng thanh", fn: "openOnomatopoeiaRef", desc: "Từ tượng thanh/hình" },
      { icon: "📌", label: "Cụm cố định", fn: "openSetPhraseRef", desc: "Cụm cố định N4" },
      { icon: "🙇", label: "Hướng dẫn kính ngữ", fn: "openHonorificRef", desc: "Kính ngữ nhanh" }
    ]
  },
  {
    id: "flashcards",
    header: "🃏 Biến thể thẻ lật",
    tools: [
      { icon: "🔊", label: "Thẻ nghe trước", fn: "openAudioFirstCards", desc: "Nghe trước, nhớ sau" },
      { icon: "🔄", label: "Thẻ đảo chiều", fn: "openReverseCards", desc: "Xem nghĩa → nhớ JP" },
      { icon: "📝", label: "Thẻ ngữ cảnh", fn: "openContextCards", desc: "Từ trong ngữ cảnh" },
      { icon: "🧩", label: "Thành phần kanji", fn: "openKanjiComponentCards", desc: "Phân tích bộ thủ" },
      { icon: "📐", label: "Mẫu ngữ pháp", fn: "openGrammarPatternCards", desc: "Thẻ mẫu ngữ pháp" },
      { icon: "💬", label: "Thẻ hội thoại", fn: "openConversationCards", desc: "Luyện hội thoại" },
      { icon: "❌", label: "Tập trung lỗi sai", fn: "openErrorFocusedCards", desc: "Từ hay sai" },
      { icon: "⏱️", label: "Thẻ hẹn giờ", fn: "openTimedCards", desc: "Tự động lật thẻ" },
      { icon: "📚", label: "Thẻ theo bài Minna", fn: "openMinnaLessonCards", desc: "Theo từng bài Minna" }
    ]
  },
  {
    id: "smart",
    header: "🧠 Học thông minh",
    tools: [
      { icon: "🗺️", label: "Lộ trình học", fn: "openStudyPath", desc: "Lộ trình học cá nhân" },
      { icon: "📊", label: "Bảng phân tích", fn: "openAnalyticsDash", desc: "Biểu đồ phân tích" },
      { icon: "📋", label: "Dự đoán điểm JLPT", fn: "openPredictedScore", desc: "Dự đoán điểm JLPT" },
      { icon: "🎯", label: "Luyện điểm yếu", fn: "openWeakDrill", desc: "Drill điểm yếu tự động" },
      { icon: "🏅", label: "Cột mốc", fn: "openMilestones", desc: "Huy hiệu và mốc" },
      { icon: "📈", label: "Tăng trưởng từ vựng", fn: "openVocabGrowth", desc: "Biểu đồ từ vựng" },
      { icon: "🌳", label: "Cây ngữ pháp", fn: "openGrammarTree", desc: "Cây kỹ năng ngữ pháp" },
      { icon: "🔬", label: "Phân tích lỗi", fn: "openMistakeAnalyzer", desc: "Phân loại lỗi sai" },
      { icon: "⚖️", label: "So sánh ngữ pháp", fn: "openGrammarCompare", desc: "So sánh ngữ pháp" }
    ]
  }
];
export {
  TOOL_GROUPS as T
};
