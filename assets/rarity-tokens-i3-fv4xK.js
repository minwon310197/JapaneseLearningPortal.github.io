const RARITY_COLORS = Object.freeze({
  common: "#9fb4c7",
  rare: "#4bb3ff",
  epic: "#c264ff",
  legendary: "#ffb347"
});
const RARITY_GLOW = Object.freeze({
  common: "0 0 6px rgba(159,180,199,0.4)",
  rare: "0 0 10px rgba(75,179,255,0.55)",
  epic: "0 0 16px rgba(194,100,255,0.7)",
  legendary: "0 0 22px rgba(255,179,71,0.85)"
});
const RARITY_LABELS_VI = Object.freeze({
  common: "Thường",
  rare: "Hiếm",
  epic: "Sử thi",
  legendary: "Huyền thoại"
});
const RARITY_PARTICLE_COLORS = {
  common: [RARITY_COLORS.common, "#cfd6dc"],
  rare: [RARITY_COLORS.rare, "#b8dcff"],
  epic: [RARITY_COLORS.epic, "#e0b4ff"],
  legendary: [RARITY_COLORS.legendary, "#ffe2a8"]
};
function getRarityParticleCount(rarity, density = "normal") {
  var _a, _b;
  const base = (_a = { common: 12, rare: 18, epic: 30, legendary: 48 }[rarity]) != null ? _a : 12;
  const mult = (_b = { low: 0.5, normal: 1, high: 1.5 }[density]) != null ? _b : 1;
  return Math.round(base * mult);
}
export {
  RARITY_PARTICLE_COLORS as R,
  RARITY_COLORS as a,
  RARITY_GLOW as b,
  RARITY_LABELS_VI as c,
  getRarityParticleCount as g
};
