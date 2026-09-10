import { c as chatWithAI, b as buildLearnerProfile, a as getWeakStudyItems } from "./client-wNJ1tNgU.js";
import { D, E, G, O, S, _, d, e, f, h, i, g, j, k, n, s } from "./client-wNJ1tNgU.js";
import { _ as getSrsLevel } from "./index-BEJSIlFS.js";
import "./api-BAg1LJRR.js";
import "./vendor-react-BUL8WuXG.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
async function generateExamples(item, apiKey) {
  const prompt = `Cho tôi 3 câu ví dụ tiếng Nhật (N4 level) sử dụng "${item}".
Mỗi câu gồm: 
1. Câu tiếng Nhật
2. Phiên âm (hiragana)
3. Nghĩa tiếng Việt
Format: mỗi ví dụ cách nhau 1 dòng trống.`;
  return chatWithAI(prompt, apiKey, { maxTokens: 500, temperature: 0.8 });
}
async function grammarCheck(text, apiKey) {
  const prompt = `Kiểm tra ngữ pháp câu tiếng Nhật sau và chỉ ra lỗi (nếu có).
Giải thích bằng tiếng Việt:

"${text}"

Nếu đúng, nói "Câu đúng ngữ pháp!" và giải thích cấu trúc.
Nếu sai, sửa lại, giải thích lỗi, và cho ví dụ đúng.`;
  return chatWithAI(prompt, apiKey, { maxTokens: 500, temperature: 0.3 });
}
async function getConversationPrompt(topic, apiKey) {
  const prompt = `Tạo 1 đoạn hội thoại ngắn (4-6 câu) bằng tiếng Nhật ở trình độ N4 về chủ đề "${topic}".
Format:
A: [câu tiếng Nhật]
B: [câu tiếng Nhật]
...

Sau đó dịch sang tiếng Việt.`;
  return chatWithAI(prompt, apiKey, { maxTokens: 600, temperature: 0.8 });
}
const QUIZ_PROMPT = (type, count, difficulty, profile, weakItems) => {
  const typeMap = { vocab: "từ vựng", grammar: "ngữ pháp", kanji: "kanji", mixed: "hỗn hợp (từ vựng + ngữ pháp + kanji)" };
  const diffMap = { easy: "Dễ (N5-N4 cơ bản)", normal: "Trung bình (N4 chuẩn)", hard: "Khó (N4 trọng điểm, không vượt N4)" };
  let prompt = `Tạo CHÍNH XÁC ${count} câu hỏi trắc nghiệm JLPT ${typeMap[type] || type}.
Độ khó: ${diffMap[difficulty] || difficulty}.`;
  if (profile) prompt += `
Thông tin học viên: ${profile}`;
  if (weakItems == null ? void 0 : weakItems.length) prompt += `
Tập trung mạnh vào điểm yếu sau: ${weakItems.join(", ")}. Ít nhất 60% số câu phải trực tiếp kiểm tra các mục này hoặc mục rất gần với chúng.`;
  prompt += `

QUAN TRỌNG: Trả lời CHÍNH XÁC dạng JSON array, KHÔNG có markdown, KHÔNG có text trước/sau.
Format:
[
  {
    "question": "câu hỏi (tiếng Nhật hoặc tiếng Việt tùy loại)",
    "choices": ["A", "B", "C", "D"],
    "answer": 0,
    "explanation": "giải thích tiếng Việt tại sao đáp án đúng"
  }
]

Quy tắc:
- Chỉ dùng kiến thức N5/N4 phục vụ JLPT N4; không tạo câu hỏi, đáp án hoặc giải thích dùng mẫu N3/N2/N1.
- "answer" là index 0-3 của đáp án đúng trong "choices"
- Các đáp án sai phải hợp lý (cùng loại, dễ nhầm)
- Mỗi câu PHẢI có giải thích chi tiết bằng tiếng Việt
- Câu hỏi từ vựng: cho nghĩa → chọn từ JP hoặc ngược lại
- Câu hỏi ngữ pháp: điền vào chỗ trống hoặc chọn mẫu đúng
- Câu hỏi kanji: cho kanji → chọn đọc/nghĩa đúng`;
  return prompt;
};
async function generateQuiz(options, apiKey) {
  const { type = "mixed", count = 5, difficulty = "normal", personalized = false } = options;
  const profile = personalized ? buildLearnerProfile() : null;
  const weakItems = personalized ? getWeakStudyItems(type, 8) : null;
  const systemPrompt = `You are a JLPT N4 quiz generator. Use only N5/N4 knowledge for JLPT N4 prep; do not introduce N3/N2/N1 grammar, vocabulary, or distractors. You MUST respond with ONLY a valid JSON array. No markdown, no explanation, no extra text — just the JSON array starting with [ and ending with ].`;
  const message = QUIZ_PROMPT(type, count, difficulty, profile, weakItems);
  const response = await chatWithAI(message, apiKey, {
    systemPrompt,
    maxTokens: 2e3,
    temperature: 0.6,
    signal: options.signal,
    timeout: 6e4,
    jsonMode: true
  });
  let parsed;
  try {
    parsed = parseJSON(response);
  } catch (parseErr) {
    console.warn("[AI Quiz] Parse failed:", parseErr.message);
    throw new Error("AI trả về format không hợp lệ. Thử chọn loại khác hoặc bấm Tạo Quiz lại.");
  }
  if (!Array.isArray(parsed)) {
    const arr = (parsed == null ? void 0 : parsed.questions) || (parsed == null ? void 0 : parsed.quiz) || (parsed == null ? void 0 : parsed.data);
    if (Array.isArray(arr)) {
      parsed = arr;
    } else throw new Error("AI trả về format không hợp lệ. Vui lòng thử lại.");
  }
  const valid = parsed.map((q) => ({
    ...q,
    answer: typeof q.answer === "string" ? parseInt(q.answer, 10) : q.answer
  })).filter(
    (q) => q.question && Array.isArray(q.choices) && q.choices.length >= 2 && typeof q.answer === "number" && !isNaN(q.answer) && q.answer >= 0 && q.answer < q.choices.length
  );
  if (valid.length === 0) {
    console.warn("[AI Quiz] Parsed array but 0 valid questions. Raw count:", parsed.length);
    throw new Error(`AI tạo ${parsed.length} câu nhưng format không đúng. Thử lại.`);
  }
  return valid;
}
async function reviewWriting(text, apiKey) {
  const systemPrompt = `Bạn là giáo viên chấm bài viết tiếng Nhật cho học viên Việt Nam trình độ N4.
Luôn trả lời bằng tiếng Việt.
Phân tích chi tiết, nhẹ nhàng, khích lệ.`;
  const message = `Chấm và sửa bài viết tiếng Nhật sau:

"${text}"

Hãy trả lời theo format sau:
📊 ĐIỂM: [X/10]

✅ ĐIỂM TỐT:
- [liệt kê những gì viết tốt]

❌ LỖI CẦN SỬA:
- [lỗi 1]: [giải thích] → [cách sửa đúng]
- [lỗi 2]: ...

📝 BẢN SỬA:
[viết lại toàn bộ bài đã sửa]

💡 GỢI Ý CẢI THIỆN:
- [gợi ý cách diễn đạt tự nhiên hơn, từ vựng nâng cao hơn]

🌟 ĐÁNH GIÁ CHUNG:
[1-2 câu nhận xét tổng quan + khích lệ]`;
  return chatWithAI(message, apiKey, {
    systemPrompt,
    maxTokens: 1500,
    temperature: 0.3
  });
}
const ROLEPLAY_SCENARIOS = [
  { id: "restaurant", label: "🍽️ Nhà hàng", desc: "Gọi món, hỏi thực đơn", character: "nhân viên nhà hàng Nhật Bản" },
  { id: "hospital", label: "🏥 Bệnh viện", desc: "Khám bệnh, mô tả triệu chứng", character: "bác sĩ tại bệnh viện Nhật" },
  { id: "hotel", label: "🏨 Khách sạn", desc: "Check-in, hỏi dịch vụ", character: "lễ tân khách sạn" },
  { id: "station", label: "🚉 Ga tàu", desc: "Mua vé, hỏi đường", character: "nhân viên ga tàu" },
  { id: "shop", label: "🛍️ Mua sắm", desc: "Hỏi giá, size, màu", character: "nhân viên cửa hàng quần áo" },
  { id: "school", label: "🏫 Trường học", desc: "Hỏi bài, nói chuyện với bạn", character: "bạn cùng lớp người Nhật" },
  { id: "work", label: "💼 Công việc", desc: "Họp, xin phép, báo cáo", character: "đồng nghiệp Nhật (senpai)" },
  { id: "postoffice", label: "📮 Bưu điện", desc: "Gửi thư, bưu kiện", character: "nhân viên bưu điện" },
  { id: "bank", label: "🏦 Ngân hàng", desc: "Mở tài khoản, chuyển tiền", character: "nhân viên ngân hàng" },
  { id: "conbini", label: "🏪 Cửa hàng tiện lợi", desc: "Mua đồ, thanh toán", character: "nhân viên konbini" },
  { id: "phone", label: "📞 Gọi điện", desc: "Hẹn gặp, hỏi thông tin", character: "người nghe điện thoại" },
  { id: "jikoshoukai", label: "🙋 Tự giới thiệu", desc: "Giới thiệu bản thân", character: "người Nhật mới gặp tại bữa tiệc" }
];
async function roleplayMessage(scenarioId, history, userMessage, apiKey) {
  const scenario = ROLEPLAY_SCENARIOS.find((s2) => s2.id === scenarioId) || ROLEPLAY_SCENARIOS[0];
  const systemPrompt = `Bạn đang đóng vai ${scenario.character} trong tình huống "${scenario.desc}" tại Nhật Bản.

QUY TẮC:
1. Trả lời bằng tiếng Nhật (N4 level, đơn giản)
2. Sau mỗi câu trả lời, LUÔN thêm phần đánh giá câu tiếng Nhật của học viên
3. Giữ vai nhất quán, tự nhiên

FORMAT trả lời (LUÔN theo format này):
🗣️ [Câu trả lời tiếng Nhật của bạn - nhập vai]

📖 Dịch: [dịch câu trả lời sang tiếng Việt]

📝 Đánh giá câu của bạn:
- Ngữ pháp: [đúng/có lỗi + sửa]
- Tự nhiên: [tự nhiên/hơi cứng + gợi ý]
- Từ vựng: [phù hợp/có thể dùng từ khác]
- Điểm: [X/10]`;
  return chatWithAI(userMessage, apiKey, {
    systemPrompt,
    history,
    maxTokens: 800,
    temperature: 0.7
  });
}
async function roleplayEvaluate(scenarioId, history, apiKey) {
  const scenario = ROLEPLAY_SCENARIOS.find((s2) => s2.id === scenarioId) || ROLEPLAY_SCENARIOS[0];
  const systemPrompt = `Bạn là giáo viên tiếng Nhật. Đánh giá tổng thể buổi luyện tập hội thoại.`;
  const message = `Hãy đánh giá tổng thể buổi luyện tập hội thoại tình huống "${scenario.label} - ${scenario.desc}".

Dựa trên các tin nhắn của học viên trong lịch sử hội thoại, hãy đưa ra:

📊 ĐIỂM TỔNG: [X/10]

🎯 Ngữ pháp: [★★★☆☆] - [nhận xét]
🗣️ Tự nhiên: [★★★☆☆] - [nhận xét]
📖 Từ vựng: [★★★☆☆] - [nhận xét]
🎌 Phù hợp tình huống: [★★★☆☆] - [nhận xét]

✅ Điểm mạnh: [liệt kê]
❌ Cần cải thiện: [liệt kê + gợi ý cụ thể]
📚 Từ vựng mới nên học: [5 từ liên quan tình huống]
💪 Lời khuyên: [1-2 câu khích lệ]`;
  return chatWithAI(message, apiKey, {
    systemPrompt,
    history,
    maxTokens: 1e3,
    temperature: 0.4
  });
}
async function analyzeSentence(sentence, apiKey) {
  const systemPrompt = `Bạn là chuyên gia phân tích ngữ pháp tiếng Nhật cho học viên Việt Nam trình độ N4.
Chỉ phân tích bằng kiến thức N5/N4 phục vụ JLPT N4; nếu câu có điểm vượt N4, ghi rõ "ngoài phạm vi N4" và không mở rộng sang N3/N2/N1.
Luôn trả lời chi tiết, dễ hiểu bằng tiếng Việt.`;
  const message = `Phân tích chi tiết câu tiếng Nhật sau:

"${sentence}"

Trả lời theo format:

📝 CÂU GỐC: ${sentence}

🔍 PHÂN TÍCH TỪNG TỪ:
| Từ | Đọc | Nghĩa | Vai trò ngữ pháp |
|---|---|---|---|
| ... | ... | ... | ... |

📐 MẪU NGỮ PHÁP:
- [mẫu 1]: [giải thích ý nghĩa + cách dùng]
- [mẫu 2]: ...

🇻🇳 DỊCH: [bản dịch tiếng Việt tự nhiên]

🔄 CÁCH NÓI KHÁC:
- [câu thay thế 1 (JP)] → [dịch VN]
- [câu thay thế 2 (JP)] → [dịch VN]

📊 ĐỘ KHÓ: [N5/N4/ngoài phạm vi N4] — [giải thích ngắn]`;
  return chatWithAI(message, apiKey, {
    systemPrompt,
    maxTokens: 1200,
    temperature: 0.3
  });
}
async function getStudyAdvice(apiKey) {
  const profile = buildLearnerProfile();
  const systemPrompt = `Bạn là cố vấn học tập JLPT N4 cho học viên Việt Nam.
Dựa trên dữ liệu thực tế, đưa ra lời khuyên cụ thể, thực tế, đo lường được.
Luôn trả lời bằng tiếng Việt, trình bày rõ ràng.`;
  const message = `Phân tích dữ liệu học tập và đưa ra lời khuyên:

📊 HỒ SƠ HỌC VIÊN:
${profile}

Hãy trả lời theo format:

🎯 ĐÁNH GIÁ TỔNG QUAN:
- Trình độ hiện tại: [mô tả]
- Ước tính sẵn sàng JLPT N4: [X]%
- Xu hướng: [đang tiến bộ / cần cố gắng hơn]

📊 PHÂN TÍCH TỪNG KỸ NĂNG:
- 📖 Từ vựng: [★★★☆☆] — [nhận xét + gợi ý]
- 🈁 Kanji: [★★★☆☆] — [nhận xét + gợi ý]
- 📐 Ngữ pháp: [★★★☆☆] — [nhận xét + gợi ý]
- 🎧 Nghe: [★★★☆☆] — [nhận xét + gợi ý]
- 📖 Đọc: [★★★☆☆] — [nhận xét + gợi ý]

📋 KẾ HOẠCH HÔM NAY (15-30 phút):
1. [hoạt động 1] — [thời gian] phút
2. [hoạt động 2] — [thời gian] phút
3. [hoạt động 3] — [thời gian] phút

⚡ TOP 3 ĐIỂM YẾU CẦN TẬP TRUNG:
1. [điểm yếu + cách khắc phục cụ thể]
2. [...]
3. [...]

💪 ĐIỂM MẠNH:
- [liệt kê + khuyến khích duy trì]

🌟 LỜI KHUYÊN:
[2-3 câu khích lệ, động viên tiếp tục học]`;
  return chatWithAI(message, apiKey, {
    systemPrompt,
    maxTokens: 1500,
    temperature: 0.5
  });
}
async function explainItem(item, type, apiKey) {
  const systemPrompt = `Bạn là gia sư tiếng Nhật. Giải thích ngắn gọn cho học viên Việt Nam N4.
Trả lời dưới 200 từ, súc tích, thực dụng.`;
  let itemDesc = "";
  if (type === "vocab") {
    itemDesc = `Từ vựng: ${item.word || item.kanji || ""}${item.reading ? ` (${item.reading})` : ""}${item.meaning ? ` — ${item.meaning}` : ""}`;
  } else if (type === "kanji") {
    itemDesc = `Kanji: ${item.kanji || item.char || ""}${item.kunyomi ? ` (kun: ${item.kunyomi})` : ""}${item.onyomi ? ` (on: ${item.onyomi})` : ""}${item.meaning ? ` — ${item.meaning}` : ""}`;
  } else {
    itemDesc = `Ngữ pháp: ${item.title || item.pattern || ""}${item.meaning ? ` — ${item.meaning}` : ""}`;
  }
  const message = `${itemDesc}

Giải thích ngắn gọn:
🧠 Mẹo nhớ: [mnemonic dễ nhớ cho người Việt]
📝 Cách dùng: [1-2 ví dụ thực tế]
⚠️ Lỗi hay gặp: [lỗi phổ biến khi dùng]
🔗 Liên quan: [2-3 từ/mẫu tương tự hoặc liên quan]`;
  return chatWithAI(message, apiKey, {
    systemPrompt,
    maxTokens: 500,
    temperature: 0.6
  });
}
async function analyzeMistakes(trainerStats, srs, bookmarks, apiKey) {
  const systemPrompt = `You are a JLPT N4 learning analytics expert. You MUST respond with ONLY valid JSON. No markdown, no explanation — just a single JSON object starting with { and ending with }.`;
  const statsSummary = Object.entries(trainerStats).filter(([, s2]) => s2.total > 0).map(([id, s2]) => `${id}: ${s2.correct}/${s2.total} (${Math.round(s2.correct / s2.total * 100)}%)`).join("; ");
  const weakItems = Object.entries(srs).filter(([, state]) => getSrsLevel(state) <= 2).slice(0, 15).map(([k2]) => {
    const p = k2.split("-");
    return p.length > 2 ? p.slice(2).join("-") : k2;
  });
  const message = `Phân tích dữ liệu học tập JLPT N4:
Thống kê: ${statsSummary || "Chưa có dữ liệu"}
Điểm yếu SRS: ${weakItems.join(", ") || "Chưa có"}
Bookmarks: ${Object.values(bookmarks).flat().length} items

Trả JSON:
{
  "overallScore": 0-100,
  "categories": [{ "name": "tên", "accuracy": 0-100, "status": "strong/ok/weak", "tip": "gợi ý" }],
  "errorPatterns": [{ "pattern": "loại lỗi", "description": "mô tả", "fix": "cách sửa" }],
  "recommendations": [{ "action": "hành động", "target": "mục tiêu", "priority": "high/medium/low" }],
  "summary": "nhận xét tổng quan 2-3 câu tiếng Việt"
}`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1500, temperature: 0.3, jsonMode: true });
  return parseJSON(raw);
}
async function generateStory(topic, difficulty, apiKey) {
  const systemPrompt = `You are a Japanese interactive story writer for Vietnamese N4 learners. You MUST respond with ONLY valid JSON. No markdown, no extra text — just a single JSON object.`;
  const diffMap = { easy: "N5-N4 cơ bản, câu ngắn", normal: "N4 chuẩn", hard: "N4 nâng cao" };
  const message = `Tạo đoạn mở đầu truyện tương tác tiếng Nhật (${diffMap[difficulty] || "N4 chuẩn"}) về "${topic}".

Trả JSON:
{
  "title": "tựa đề tiếng Nhật",
  "titleVn": "tựa đề tiếng Việt",
  "paragraph": "đoạn văn 3-4 câu tiếng Nhật (N4 level)",
  "paragraphVn": "dịch tiếng Việt",
  "vocab": [{ "word": "từ JP", "reading": "hiragana", "meaning": "nghĩa VN" }],
  "choices": [
    { "text": "lựa chọn 1 bằng tiếng Nhật", "textVn": "dịch VN" },
    { "text": "lựa chọn 2 bằng tiếng Nhật", "textVn": "dịch VN" },
    { "text": "lựa chọn 3 bằng tiếng Nhật", "textVn": "dịch VN" }
  ]
}`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1500, temperature: 0.8, jsonMode: true });
  return parseJSON(raw);
}
async function continueStory(storyHistory, choiceText, apiKey) {
  const systemPrompt = `You are a Japanese interactive story writer for Vietnamese N4 learners. You MUST respond with ONLY valid JSON. No markdown, no extra text — just a single JSON object.`;
  const historyContext = storyHistory.map(
    (s2, i2) => `Phần ${i2 + 1}: ${s2.paragraph}
Chọn: ${s2.chosenChoice || ""}`
  ).join("\n");
  const message = `Tiếp tục truyện tương tác. Lịch sử:
${historyContext}

Người chơi chọn: "${choiceText}"

Viết đoạn tiếp theo (3-4 câu N4) và 3 lựa chọn mới.
${storyHistory.length >= 4 ? 'Đây là đoạn cuối — kết thúc truyện và thêm "isEnding": true, không cần choices.' : ""}

Trả JSON:
{
  "paragraph": "đoạn tiếp theo JP",
  "paragraphVn": "dịch VN",
  "vocab": [{ "word": "từ", "reading": "đọc", "meaning": "nghĩa" }],
  "choices": [{ "text": "JP", "textVn": "VN" }],
  "isEnding": false
}`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1500, temperature: 0.8, jsonMode: true });
  return parseJSON(raw);
}
async function reviewDiary(text, apiKey) {
  const systemPrompt = `You are a Japanese diary teacher for Vietnamese N4 learners. You MUST respond with ONLY valid JSON. No markdown, no extra text — just a single JSON object.`;
  const message = `Chấm nhật ký tiếng Nhật:
"${text}"

Trả JSON:
{
  "score": 75,
  "corrections": [{ "original": "câu gốc", "corrected": "câu đã sửa", "explanation": "giải thích VN" }],
  "goodPoints": ["điểm tốt 1", "điểm tốt 2"],
  "suggestions": ["gợi ý cải thiện 1", "gợi ý 2"],
  "rewritten": "toàn bộ nhật ký đã sửa và cải thiện",
  "newVocab": [{ "word": "từ mới nên học", "reading": "đọc", "meaning": "nghĩa" }],
  "encouragement": "lời khích lệ bằng tiếng Việt"
}`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1500, temperature: 0.3, jsonMode: true });
  return parseJSON(raw);
}
async function generateWordMap(seedWord, apiKey) {
  const systemPrompt = `You are a Japanese N4 vocabulary expert. You MUST respond with ONLY valid JSON. No markdown, no extra text — just a single JSON object.`;
  const message = `Tạo mind map từ vựng cho từ "${seedWord}" (N4 level).

Trả JSON:
{
  "center": { "word": "${seedWord}", "reading": "hiragana", "meaning": "nghĩa VN" },
  "branches": [
    { "word": "từ liên quan", "reading": "hiragana", "meaning": "nghĩa", "relation": "loại quan hệ", "color": "màu CSS" }
  ]
}

Loại quan hệ: synonym, antonym, category, compound, similar-reading, related-topic, collocation, opposite
Màu: #4CAF50 (synonym), #F44336 (antonym), #2196F3 (category), #FF9800 (compound), #9C27B0 (similar), #00BCD4 (related), #795548 (collocation)
Tạo 6-8 branches đa dạng, ưu tiên từ N4-N5.`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1e3, temperature: 0.7, jsonMode: true });
  return parseJSON(raw);
}
async function predictJLPT(apiKey) {
  const profile = buildLearnerProfile();
  const systemPrompt = `You are a JLPT score prediction expert. You MUST respond with ONLY valid JSON. No markdown, no extra text — just a single JSON object.

CRITICAL SCORING RULES based on data volume:
- If SRS items < 50: totalScore MUST be below 60/180, passingChance below 20%. The learner barely started.
- If SRS items 50-100: totalScore MUST be below 90/180, passingChance below 40%. Still early stage.
- If SRS items 100-200: totalScore range 50-120 depending on accuracy. Moderate progress.
- If SRS items 200+: Score based on actual accuracy and coverage. Advanced learner.
- If a category (Nghe, Đọc, etc.) has NO accuracy data, that section score MUST be below 15/60 and level D.
- NEVER give high scores without strong quantitative evidence. Be conservative and honest.`;
  const message = `Dựa trên dữ liệu học viên, dự đoán điểm JLPT N4:
${profile}

Return ONLY this JSON object (no other text):
{
  "totalScore": 120,
  "passingChance": 75,
  "sections": {
    "vocabulary": { "score": 40, "max": 60, "level": "B", "comment": "nhận xét VN" },
    "grammar": { "score": 35, "max": 60, "level": "C", "comment": "nhận xét" },
    "reading": { "score": 25, "max": 60, "level": "C", "comment": "nhận xét" },
    "listening": { "score": 20, "max": 60, "level": "D", "comment": "nhận xét" }
  },
  "strengths": ["điểm mạnh 1", "điểm mạnh 2"],
  "weaknesses": ["điểm yếu 1", "điểm yếu 2"],
  "studyPlan": [{ "week": 1, "focus": "trọng tâm", "activities": "hoạt động cụ thể" }],
  "readinessLevel": "almost",
  "motivation": "lời khích lệ bằng tiếng Việt 1-2 câu"
}

Rules: totalScore 0-180, passingChance 0-100, each section score 0-60, level one of A/B/C/D, readinessLevel one of not-ready/almost/ready/confident. All comments in Vietnamese. Passing: total>=90 AND each section>=19. Score MUST reflect actual data volume — do NOT inflate scores for learners with little data.`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1500, temperature: 0.4, jsonMode: true });
  return parseJSON(raw);
}
async function simulateScene(situation, history, userMessage, apiKey) {
  const systemPrompt = `Bạn đang mô phỏng tình huống thực tế tại Nhật Bản: "${situation}".

QUY TẮC:
1. Trả lời bằng tiếng Nhật (N4 level) — giữ vai nhất quán
2. SAU câu trả lời, LUÔN thêm đánh giá câu tiếng Nhật của học viên
3. Tự nhiên, thực tế

FORMAT:
🗣️ [Câu trả lời tiếng Nhật — nhập vai]

📖 Dịch: [tiếng Việt]

📝 Đánh giá:
- Ngữ pháp: [đúng/sai + sửa]
- Tự nhiên: [tự nhiên/cứng + gợi ý]
- Điểm: [X/10]`;
  return chatWithAI(userMessage, apiKey, {
    systemPrompt,
    history,
    maxTokens: 800,
    temperature: 0.7
  });
}
async function generateGrammarDrill(weakPatterns, difficulty, count, apiKey) {
  const systemPrompt = `You are a JLPT N4 grammar quiz generator. You MUST respond with ONLY a valid JSON array. No markdown, no explanation, no extra text — just the JSON array.`;
  const diffMap = { easy: "Dễ (N5-N4 cơ bản)", normal: "Trung bình (N4)", hard: "Khó (N4 nâng cao)" };
  const message = `Create ${count} MCQ grammar questions for JLPT N4 learners (Vietnamese speakers).
Difficulty: ${diffMap[difficulty] || "N4"}.
${(weakPatterns == null ? void 0 : weakPatterns.length) ? `Focus on these weak patterns: ${weakPatterns.join(", ")}` : ""}

Return ONLY this JSON array (no other text):
[{"question": "日本語の文＿＿正しい答え", "options": ["A", "B", "C", "D"], "answer": 0, "grammar": "grammar pattern name", "explanation": "Vietnamese explanation of why the answer is correct"}]

Rules:
- "question" must be a Japanese sentence with ＿＿ blank
- "options" array of exactly 4 choices (strings)
- "answer" is the 0-based index (0, 1, 2, or 3) of the correct option
- "grammar" is the related grammar pattern
- "explanation" is in Vietnamese
- Wrong options must be plausible (easy to confuse)
- Output ONLY the JSON array, starting with [ and ending with ]`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 2500, temperature: 0.4, jsonMode: true });
  const parsed = parseJSON(raw);
  const arr = Array.isArray(parsed) ? parsed : (parsed == null ? void 0 : parsed.questions) || [];
  if (!Array.isArray(arr) || arr.length === 0) throw new Error("AI không tạo được câu hỏi. Vui lòng thử lại.");
  return arr.map((q) => {
    const opts = q.options || q.choices;
    return { ...q, options: opts, choices: opts };
  }).filter(
    (q) => q.question && Array.isArray(q.options) && q.options.length >= 2 && typeof q.answer === "number" && q.answer >= 0 && q.answer < q.options.length
  );
}
async function investigateKanji(kanji, apiKey) {
  const systemPrompt = `You are a Kanji expert for Vietnamese JLPT N4 learners. You MUST respond with ONLY valid JSON. No markdown, no explanation outside JSON — just a single JSON object starting with { and ending with }.`;
  const message = `Analyze this kanji in detail: ${kanji}

Return ONLY this JSON object:
{"kanji": "${kanji}", "meaning": "Vietnamese meaning", "onyomi": "ON reading", "kunyomi": "KUN reading", "hanviet": "Han-Viet reading", "strokes": 8, "radicals": [{"radical": "部首", "name": "radical name", "meaning": "meaning in Vietnamese"}], "etymology": "Origin story in Vietnamese (2-3 sentences)", "mnemonic": "Memory trick for Vietnamese learners (creative)", "lookalikes": [{"kanji": "similar kanji", "meaning": "meaning", "difference": "how to distinguish (Vietnamese)"}], "compounds": [{"word": "compound word", "reading": "hiragana", "meaning": "Vietnamese meaning"}], "funFact": "Fun fact about this kanji (1 sentence, Vietnamese)"}

All descriptions and explanations should be in Vietnamese.
Provide 2-3 radicals, 2-3 lookalikes, and 3-5 common compounds.
Output ONLY the JSON — no other text.`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1200, temperature: 0.5, jsonMode: true });
  return parseJSON(raw);
}
async function simplifyText(japaneseText, apiKey) {
  const systemPrompt = `You are a Japanese text simplification expert for N4 learners. Rewrite toward N5/N4 only and label anything harder as outside N4 instead of teaching N3/N2/N1. You MUST respond with ONLY valid JSON. No markdown, no extra text — just a single JSON object.`;
  const message = `Đơn giản hóa văn bản sau sang N4 level:
"${japaneseText}"

Trả JSON:
{
  "original": "văn bản gốc",
  "simplified": "văn bản đã đơn giản hóa (N4, câu ngắn, từ đơn giản)",
  "simplifiedVn": "dịch VN",
  "annotations": [{ "word": "từ khó", "reading": "hiragana", "meaning": "nghĩa VN", "level": "ngoài phạm vi N4" }],
  "vocabList": [{ "word": "từ mới", "reading": "đọc", "meaning": "nghĩa", "example": "ví dụ ngắn" }],
  "comprehensionQs": [{ "question": "câu hỏi VN", "choices": ["A", "B", "C"], "answer": 0 }]
}`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 2e3, temperature: 0.3, jsonMode: true });
  return parseJSON(raw);
}
async function generateLyrics(topic, mood, apiKey) {
  const systemPrompt = `You are a J-pop songwriter creating original N4-level Japanese lyrics. You MUST respond with ONLY valid JSON. No markdown, no extra text — just a single JSON object.`;
  const moodMap = { happy: "vui tươi", sad: "buồn nhẹ", energetic: "sôi động", calm: "nhẹ nhàng", romantic: "lãng mạn" };
  const message = `Viết lời bài hát J-pop ngắn (N4 level):
Chủ đề: ${topic}
Tâm trạng: ${moodMap[mood] || mood}

Trả JSON:
{
  "title": "tựa đề JP",
  "titleVn": "tựa đề VN",
  "mood": "${mood}",
  "sections": [
    {
      "type": "verse1/chorus/verse2",
      "lines": [
        { "jp": "dòng tiếng Nhật", "reading": "hiragana", "vn": "dịch VN" }
      ]
    }
  ],
  "vocabHighlights": [{ "word": "từ hay", "reading": "đọc", "meaning": "nghĩa", "note": "ghi chú" }],
  "grammarNotes": [{ "pattern": "mẫu ngữ pháp trong bài", "explanation": "giải thích VN" }]
}

Tạo 2 verse + 1 chorus, mỗi section 3-4 dòng. Dùng từ N4-N5.`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 1500, temperature: 0.8, jsonMode: true });
  return parseJSON(raw);
}
async function batchTranslate(sentences, apiKey) {
  return _runBatchWithChunking(sentences, apiKey, {
    label: "translate",
    buildPrompt: (slice) => {
      const numbered = slice.map((s2, i2) => `${i2 + 1}. ${s2}`).join("\n");
      return `Dịch ĐẦY ĐỦ từng câu tiếng Nhật sau sang tiếng Việt tự nhiên, súc tích.

QUY TẮC:
• PHẢI trả về ĐÚNG ${slice.length} phần tử trong JSON array — không được bỏ sót bất kỳ câu nào, không gộp 2 câu thành 1.
• Giữ đúng thứ tự input → output.
• Dịch tự nhiên kiểu văn nói/văn viết Việt, không dịch word-by-word.
• Giữ ý, không rút gọn quá mức; nếu câu dài vẫn phải dịch TRỌN NGHĨA.
• KHÔNG kèm giải thích, KHÔNG markdown, CHỈ trả về JSON array of strings.

Input (${slice.length} câu):
${numbered}`;
    },
    tokensPerItem: 110,
    chunkSize: 24,
    temperature: 0.2
  });
}
async function batchRomaji(sentences, apiKey) {
  return _runBatchWithChunking(sentences, apiKey, {
    label: "romaji",
    buildPrompt: (slice) => {
      const numbered = slice.map((s2, i2) => `${i2 + 1}. ${s2}`).join("\n");
      return `Phiên âm từng câu tiếng Nhật sau sang romaji Hepburn sửa đổi (kiểu Minna no Nihongo).

QUY TẮC BẮT BUỘC:
• PHẢI trả về ĐÚNG ${slice.length} phần tử — không được bỏ sót, không gộp 2 câu thành 1.
• Giữ NGUYÊN thì/thể của động từ — không chuyển về thể từ điển, không chuyển về thể ます. 食べる ⇒ "taberu" (KHÔNG "tabemasu"). 食べます ⇒ "tabemasu". 食べた ⇒ "tabeta".
• Kanji đứng một mình (không okurigana): dùng âm on phổ biến. 語 ⇒ "go" (KHÔNG "kataru"); 人 ⇒ "hito"; 日 ⇒ "hi/nichi"; 本 ⇒ "hon/moto" tùy nghĩa.
• Kanji + okurigana: phiên âm đúng thể hiển thị. 負ける ⇒ "makeru"; 負けます ⇒ "makemasu"; 負けた ⇒ "maketa"; 食べている ⇒ "tabete iru".
• Hậu tố お-/ご-: giữ nguyên.
• Trợ từ は ⇒ "wa", へ ⇒ "e", を ⇒ "o".
• づ ⇒ "zu", ぢ ⇒ "ji". ん trước nguyên âm/y thêm dấu ', ví dụ 店員 ⇒ "ten'in".
• Chōon ー dùng nguyên âm kép. コーヒー ⇒ "koohii".
• Cách từ theo ngữ nghĩa: 私は学生です ⇒ "watashi wa gakusei desu".
• Dấu câu giữ nguyên input. CHỈ trả về ONE JSON array of strings.

Ví dụ:
Input:
1. 私は日本語ကို勉強します。
2. 彼は試合に負けた。
3. 語は難しい。
Output:
["watashi wa nihongo o benkyou shimasu.", "kare wa shiai ni maketa.", "go wa muzukashii."]

Input hiện tại (${slice.length} câu):
${numbered}`;
    },
    tokensPerItem: 90,
    chunkSize: 30,
    temperature: 0.1
  });
}
async function _runBatchWithChunking(sentences, apiKey, opts) {
  if (!Array.isArray(sentences) || !sentences.length) return [];
  const { buildPrompt, chunkSize = 25, tokensPerItem = 90, temperature = 0.2, label = "batch" } = opts;
  const chunks = [];
  for (let i2 = 0; i2 < sentences.length; i2 += chunkSize) {
    chunks.push({ start: i2, items: sentences.slice(i2, i2 + chunkSize) });
  }
  const CONCURRENCY = 3;
  const results = new Array(sentences.length).fill(null);
  let cursor = 0;
  async function worker() {
    while (cursor < chunks.length) {
      const idx = cursor++;
      const { start, items } = chunks[idx];
      const part = await _translateChunkWithRetry(items, apiKey, buildPrompt, tokensPerItem, temperature);
      for (let j2 = 0; j2 < items.length; j2++) {
        results[start + j2] = part[j2] != null ? String(part[j2]) : "";
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, chunks.length) }, () => worker()));
  for (let i2 = 0; i2 < results.length; i2++) if (results[i2] == null) results[i2] = "";
  return results;
}
async function _translateChunkWithRetry(items, apiKey, buildPrompt, tokensPerItem, temperature, depth = 0) {
  if (!items.length) return [];
  const message = buildPrompt(items);
  const maxTokens = Math.min(4e3, Math.max(400, items.length * tokensPerItem + 600));
  let raw = "";
  try {
    raw = await chatWithAI(message, apiKey, { maxTokens, temperature, jsonMode: true });
  } catch (e2) {
    console.warn("[batch] chatWithAI failed", (e2 == null ? void 0 : e2.message) || e2);
    return new Array(items.length).fill("");
  }
  const parsed = _extractBatchResult(raw, items.length);
  const isComplete = parsed.length === items.length && parsed.every((s2) => s2 && String(s2).trim());
  if (isComplete) return parsed;
  if (depth >= 3 || items.length <= 1) {
    if (items.length === 1) return [parsed[0] || ""];
    return parsed;
  }
  const half = Math.max(1, Math.ceil(items.length / 2));
  const left = await _translateChunkWithRetry(items.slice(0, half), apiKey, buildPrompt, tokensPerItem, temperature, depth + 1);
  const right = await _translateChunkWithRetry(items.slice(half), apiKey, buildPrompt, tokensPerItem, temperature, depth + 1);
  return [...left, ...right];
}
function _extractBatchResult(raw, expectedLen) {
  if (!raw) return new Array(expectedLen).fill("");
  let parsed;
  try {
    parsed = parseJSON(raw);
  } catch (e2) {
    parsed = null;
  }
  const takeArr = (arr) => {
    const out = new Array(expectedLen).fill("");
    for (let i2 = 0; i2 < expectedLen && i2 < arr.length; i2++) {
      out[i2] = arr[i2] != null ? String(arr[i2]) : "";
    }
    return out;
  };
  if (Array.isArray(parsed)) return takeArr(parsed);
  if (parsed && typeof parsed === "object") {
    const arrVal = Object.values(parsed).find((v) => Array.isArray(v));
    if (arrVal) return takeArr(arrVal);
    const vals = Object.values(parsed);
    if (vals.length > 0 && vals.every((v) => typeof v === "string")) return takeArr(vals);
  }
  const lines = String(raw).split("\n").map((l) => l.replace(/^\s*(\d+)\.\s*/, "").replace(/^["\-•]\s*/, "").replace(/[",]\s*$/, "").trim()).filter((l) => l && !/^[{}\[\]]$/.test(l) && !/^["']\s*:/.test(l));
  return takeArr(lines);
}
const APP_FEATURES_MAP = `Features:
- /trainer/daily-practice: Luyện tập hằng ngày SRS (từ vựng + kanji + ngữ pháp)
- /trainer/vocab-dojo: Flashcard, Quiz, Match từ vựng
- /trainer/kanji-academy: Flashcard, Quiz, Nghe, Viết kanji
- /trainer/grammar-arena: Chia động từ, Trợ từ, Sắp xếp câu, Diễn đạt lại
- /trainer/listening-lab: Nghe chép, Radio N4, Nhận diện giọng nói
- /trainer/reading-room: Đọc hiểu (email, thực đơn, thông báo, lịch)
- /trainer/boss-battle: Boss fight nâng cao (hỗn hợp khó)
- /trainer/puzzle-world: Ô chữ, Tìm từ, Hangman
- /trainer/mind-tricks: Trí nhớ, Pattern, Tốc độ
- /trainer/story-mode: Phiêu lưu tình huống thực tế
- /trainer/minna-lessons: Bài 1-50 Minna no Nihongo (từ vựng + ngữ pháp)
- /trainer/jlpt-mock: Thi thử JLPT N4 đầy đủ (có đồng hồ)
- /dictionary: Tra từ điển Jisho online
- /tatoeba: Tra câu ví dụ Tatoeba
- /content/vocab: Tra cứu từ vựng N4 (bảng đầy đủ)
- /content/kanji: Tra cứu kanji N4 (bảng đầy đủ)
- /content/grammar: Tra cứu ngữ pháp N4 (bảng đầy đủ)
- /ai-tutor: Chat AI, kiểm tra ngữ pháp, tạo ví dụ, phân tích câu, cố vấn học tập, nhập vai, free talk
- /ai-tutor?feature=ai-quiz: Quiz AI cá nhân hóa theo điểm yếu
- /ai-tutor?feature=ai-grammar-drill: Bài tập ngữ pháp adaptive thích ứng
- /ai-tutor?feature=ai-mistakes: Phân tích lỗi sai & điểm yếu
- /ai-tutor?feature=ai-story: Truyện tương tác phân nhánh
- /ai-tutor?feature=ai-diary: Nhật ký tiếng Nhật, AI chấm & sửa
- /ai-tutor?feature=ai-wordmap: Mind map sơ đồ liên tưởng từ vựng
- /ai-tutor?feature=ai-jlpt-predictor: Dự đoán điểm JLPT dựa trên dữ liệu
- /ai-tutor?feature=ai-scene: Mô phỏng tình huống thực tế (quán ăn, bệnh viện...)
- /ai-tutor?feature=ai-kanji-detective: Giải mã kanji: bộ thủ, mẹo nhớ, ví dụ
- /ai-tutor?feature=ai-news: Đơn giản hóa tin tức tiếng Nhật
- /ai-tutor?feature=ai-lyrics: Học tiếng Nhật qua lời bài hát
- /settings: Cài đặt app, TTS, giao diện, backup`;
async function navigateApp(userQuery, apiKey) {
  const systemPrompt = `You are a Japanese learning app assistant. Help user find the right feature. You MUST respond with ONLY valid JSON. No markdown, no extra text.

${APP_FEATURES_MAP}`;
  const message = `User muốn: "${userQuery}"

Phân tích nhu cầu và gợi ý 2-4 tính năng CHÍNH XÁC nhất. Ưu tiên trainer routes (/trainer/...) cho luyện tập, AI features (/ai-tutor?feature=...) cho công cụ AI, content routes (/content/...) cho tra cứu.

Trả JSON (KHÔNG có markdown, KHÔNG có text khác):
{
  "recommendations": [
    { "path": "/route", "title": "tên tính năng", "icon": "emoji", "reason": "tại sao phù hợp với nhu cầu này (VN, 1 câu cụ thể)" }
  ],
  "tip": "mẹo học hiệu quả cho nhu cầu này (VN, 1-2 câu)"
}`;
  const raw = await chatWithAI(message, apiKey, { systemPrompt, maxTokens: 600, temperature: 0.5, jsonMode: true });
  return parseJSON(raw);
}
function parseJSON(raw) {
  if (!raw || typeof raw !== "string") {
    throw new Error("AI không trả về dữ liệu. Vui lòng thử lại.");
  }
  let str = raw.replace(/```json?\s*/gi, "").replace(/```/g, "").trim();
  str = extractJSON(str);
  str = str.replace(/,\s*([\]\}])/g, "$1").replace(/([{,]\s*)([a-zA-Z_]\w*)\s*:/g, '$1"$2":').replace(/:\s*'([^']*)'\s*([,\}\]])/g, ': "$1"$2').replace(/\/\/[^\n]*/g, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/[\x00-\x1F\x7F]/g, (c) => c === "\n" || c === "\r" || c === "	" ? c : "").replace(/,\s*([\]\}])/g, "$1");
  try {
    return JSON.parse(str);
  } catch (e1) {
    const fixed = tryFixTruncated(str);
    if (fixed !== null) return fixed;
    const objMatch = str.match(/\{[\s\S]*\}/);
    const arrMatch = str.match(/\[[\s\S]*\]/);
    const fallback = objMatch ? objMatch[0] : arrMatch ? arrMatch[0] : null;
    if (fallback && fallback !== str) {
      try {
        return JSON.parse(fallback);
      } catch (e2) {
      }
    }
    console.warn("[AI parseJSON] Failed after all attempts:", e1.message);
    throw new Error("AI trả về format không hợp lệ. Vui lòng thử lại.");
  }
}
function extractJSON(str) {
  for (let i2 = 0; i2 < str.length; i2++) {
    if (str[i2] === "{" || str[i2] === "[") {
      const open = str[i2];
      const close = open === "{" ? "}" : "]";
      let depth = 0;
      let inStr = false;
      let escape = false;
      for (let j2 = i2; j2 < str.length; j2++) {
        const c = str[j2];
        if (escape) {
          escape = false;
          continue;
        }
        if (c === "\\") {
          escape = true;
          continue;
        }
        if (c === '"') {
          inStr = !inStr;
          continue;
        }
        if (inStr) continue;
        if (c === open) depth++;
        else if (c === close) {
          depth--;
          if (depth === 0) return str.substring(i2, j2 + 1);
        }
      }
      return str.substring(i2);
    }
  }
  return str;
}
function tryFixTruncated(str) {
  let inStr = false, escape = false;
  const stack = [];
  for (let i2 = 0; i2 < str.length; i2++) {
    const c = str[i2];
    if (escape) {
      escape = false;
      continue;
    }
    if (c === "\\") {
      escape = true;
      continue;
    }
    if (c === '"') {
      inStr = !inStr;
      continue;
    }
    if (inStr) continue;
    if (c === "{" || c === "[") stack.push(c);
    else if (c === "}") {
      if (stack.length && stack[stack.length - 1] === "{") stack.pop();
    } else if (c === "]") {
      if (stack.length && stack[stack.length - 1] === "[") stack.pop();
    }
  }
  if (stack.length === 0) return null;
  let fixed = str;
  if (inStr) fixed += '"';
  fixed = fixed.replace(/,\s*"[^"]*$/, "").replace(/,\s*$/, "");
  while (stack.length) {
    const open = stack.pop();
    fixed += open === "{" ? "}" : "]";
  }
  try {
    return JSON.parse(fixed);
  } catch (e2) {
    return null;
  }
}
export {
  D as DEFAULT_MODELS,
  E as ENDPOINTS,
  G as GROQ_FALLBACKS,
  O as OPENROUTER_FALLBACKS,
  ROLEPLAY_SCENARIOS,
  S as SYSTEM_PROMPT,
  _ as _activateCooldown,
  d as _chatWithAIOverride,
  _extractBatchResult,
  e as _setChatWithAIForTests,
  analyzeMistakes,
  analyzeSentence,
  batchRomaji,
  batchTranslate,
  f as buildLearnerContextBlock,
  buildLearnerProfile,
  chatWithAI,
  continueStory,
  h as detectProvider,
  explainItem,
  generateExamples,
  generateGrammarDrill,
  generateLyrics,
  generateQuiz,
  generateStory,
  generateWordMap,
  i as getAIKeyStatus,
  getConversationPrompt,
  g as getCooldownRemaining,
  j as getLastMinnaLessonContext,
  getStudyAdvice,
  getWeakStudyItems,
  grammarCheck,
  investigateKanji,
  k as isAIAvailable,
  navigateApp,
  n as normalizeWeakSrsLabel,
  predictJLPT,
  reviewDiary,
  reviewWriting,
  roleplayEvaluate,
  roleplayMessage,
  simplifyText,
  simulateScene,
  s as summarizeLessonProgress
};
