const QUEST_CHAINS = Object.freeze([
  {
    id: "chain-tamhoc",
    scope: "weekly",
    name: "San-gaku",
    nameVi: "Tam Học",
    icon: "三",
    description: "Hoàn thành trọn bộ vựng – tự – pháp trong tuần.",
    steps: [
      { kind: "vocab", goalKey: "weekCorrectByKind.vocab", goal: 20, reward: { coins: 40 } },
      { kind: "kanji", goalKey: "weekCorrectByKind.kanji", goal: 15, reward: { coins: 60 } },
      { kind: "grammar", goalKey: "weekCorrectByKind.grammar", goal: 15, reward: { coins: 80, gems: 2 } }
    ],
    final: { coins: 200, gems: 5, cosmetic: "badge-tamhoc" }
  },
  // Seasonal / event chains — defined but gated by world-clock:
  {
    id: "chain-hanami",
    scope: "seasonal",
    seasonId: "spring",
    name: "Hanami",
    nameVi: "Hoa Anh Đào",
    icon: "🌸",
    description: "Lễ hội hoa anh đào — học dưới bóng sakura.",
    steps: [
      { kind: "vocab", goalKey: "seasonCorrectByKind.vocab", goal: 30, reward: { coins: 60, gems: 1 } },
      { kind: "reading", goalKey: "seasonCorrectByKind.reading", goal: 5, reward: { coins: 100, gems: 2 } }
    ],
    final: { coins: 300, gems: 10, cosmetic: "hat-hanami" }
  },
  {
    id: "chain-tsukimi",
    scope: "seasonal",
    seasonId: "autumn",
    name: "Tsukimi",
    nameVi: "Ngắm Trăng",
    icon: "🌕",
    description: "Đêm ngắm trăng — kanji tĩnh lặng, nghe thơ haiku.",
    steps: [
      { kind: "kanji", goalKey: "seasonCorrectByKind.kanji", goal: 25, reward: { coins: 75, gems: 1 } },
      { kind: "listening", goalKey: "seasonCorrectByKind.listening", goal: 10, reward: { coins: 100, gems: 2 } }
    ],
    final: { coins: 300, gems: 10, cosmetic: "frame-tsukimi" }
  }
]);
function getChainById(id) {
  return QUEST_CHAINS.find((c) => c.id === id) || null;
}
export {
  QUEST_CHAINS as Q,
  getChainById as g
};
