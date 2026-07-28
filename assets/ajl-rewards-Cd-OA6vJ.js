import { d as useLearningStore } from "./feature-3d-ClP3ARU5.js";
function calculateAjlRewards(baseXP, baseCoins) {
  const state = useLearningStore.getState();
  let xpMult = 1;
  let coinMult = 1;
  const skills = state.unlockedSkills || [];
  if (skills.includes("skill_focus")) xpMult += 0.05;
  if (skills.includes("skill_wealth")) coinMult += 0.05;
  const now = Date.now();
  const buffs = (state.activeBuffs || []).filter((b) => b.expiresAt > now);
  for (const buff of buffs) {
    if (buff.id === "buff_gravity") xpMult += 1;
    if (buff.id === "buff_slayer") xpMult += 2;
  }
  const origami = state.ownedOrigami || [];
  const cats = state.ownedCats || [];
  if (origami.includes("ori_crane")) xpMult += 0.01;
  if (origami.includes("ori_frog")) coinMult += 0.01;
  if (cats.includes("cat_tama")) coinMult += 0.01;
  if (cats.includes("cat_kuro")) coinMult += 0.02;
  if (cats.includes("cat_shiro")) coinMult += 0.05;
  const yokai = state.equippedYokai;
  const yokaiId = (typeof yokai === "string" ? yokai : (yokai == null ? void 0 : yokai.id) || "").replace(/_/g, "-");
  if (yokaiId === "yokai-kappa") coinMult += 0.1;
  if (yokaiId === "yokai-kitsune") coinMult += 0.2;
  if (yokaiId === "yokai-dragon") coinMult += 0.5;
  if (yokaiId === "yokai-tanuki") coinMult += 0.15;
  return {
    xp: Math.round(baseXP * xpMult),
    coins: Math.round(baseCoins * coinMult)
  };
}
function awardAjlRewards(baseXP, baseCoins, source = "game") {
  const rewards = calculateAjlRewards(baseXP, baseCoins);
  const { addXp, addCoins } = useLearningStore.getState();
  if (rewards.xp > 0) addXp(rewards.xp);
  if (rewards.coins > 0) addCoins(rewards.coins, source);
  return rewards;
}
export {
  awardAjlRewards as a
};
