const _meta = { "description": "Pitch-accent data per word (mora-aligned). 1 = high, 0 = low.", "schemaVersion": "1.0", "source": "NHK Nihongo Hatsuon Akusento Shin Jiten (seed curation from common JLPT N4 vocab)", "notes": "Extend via Tools/tts/build-pitch.cjs. Missing words will not render pitch marks; UI falls back silently." };
const entries = { "勉強": [0, 0, 1, 1], "新聞": [0, 1, 0, 1], "電車": [0, 1, 0, 1], "学校": [0, 1, 1, 0], "先生": [0, 1, 1, 1], "学生": [0, 1, 1, 0], "日本": [1, 0, 1], "会社": [0, 1, 1], "時間": [0, 1, 1], "一緒": [0, 1, 1, 1], "映画": [1, 0, 0], "音楽": [0, 1, 1, 0], "写真": [0, 1, 1, 1], "質問": [0, 1, 1, 1], "宿題": [0, 1, 1, 1], "会議": [1, 0, 0], "仕事": [0, 1, 1, 1], "休み": [1, 0, 1], "天気": [0, 1, 0, 1], "元気": [0, 1, 1, 1], "病気": [0, 1, 1, 0], "電話": [0, 1, 1, 0], "手紙": [0, 1, 1, 0], "今日": [1, 0, 1], "明日": [1, 0, 1, 0], "昨日": [0, 1, 1, 0], "人": [1], "本": [1], "水": [0, 1, 0], "車": [0, 1, 0], "猫": [1, 0], "犬": [0, 1], "魚": [0, 1, 1, 0], "山": [0, 1, 0], "川": [0, 1, 0], "海": [0, 1, 1], "空": [1, 0], "雨": [1, 0], "雪": [0, 1, 0], "花": [0, 1, 0] };
const pitch = {
  _meta,
  entries
};
export {
  _meta,
  pitch as default,
  entries
};
