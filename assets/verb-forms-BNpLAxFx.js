const version = 1;
const entries = [{ "form": "辞書形", "description": "Dạng từ điển", "example": "食べる・飲む・する・来る" }, { "form": "ます形", "description": "Lịch sự hiện tại hoặc tương lai", "example": "食べます・飲みます" }, { "form": "ません", "description": "Lịch sự phủ định hiện tại", "example": "食べません・飲みません" }, { "form": "ました", "description": "Lịch sự quá khứ", "example": "食べました・飲みました" }, { "form": "ませんでした", "description": "Lịch sự phủ định quá khứ", "example": "食べませんでした" }, { "form": "て形", "description": "Nối câu hoặc yêu cầu", "example": "食べて・読んで・して" }, { "form": "ている", "description": "Đang làm hoặc trạng thái tiếp diễn", "example": "食べている・住んでいる" }, { "form": "た形", "description": "Quá khứ thể thường", "example": "食べた・飲んだ・した" }, { "form": "ない形", "description": "Phủ định thể thường", "example": "食べない・飲まない" }, { "form": "可能形", "description": "Khả năng có thể làm", "example": "食べられる・飲める・できる" }, { "form": "意向形", "description": "Ý định hoặc rủ cùng làm", "example": "食べよう・読もう・しよう" }, { "form": "条件形 ば", "description": "Điều kiện nếu", "example": "食べれば・読めば・すれば" }, { "form": "条件形 たら", "description": "Điều kiện nếu hoặc sau khi", "example": "食べたら・読んだら・したら" }, { "form": "たい形", "description": "Muốn làm", "example": "食べたい・読みたい・したい" }, { "form": "てください", "description": "Yêu cầu lịch sự", "example": "食べてください・待ってください" }, { "form": "てもいい", "description": "Được phép", "example": "食べてもいい・行ってもいい" }, { "form": "てはいけない", "description": "Không được phép", "example": "食べてはいけません・走ってはいけません" }, { "form": "なければならない", "description": "Phải làm", "example": "勉強しなければなりません" }];
const verbForms = {
  version,
  entries
};
export {
  verbForms as default,
  entries,
  version
};
