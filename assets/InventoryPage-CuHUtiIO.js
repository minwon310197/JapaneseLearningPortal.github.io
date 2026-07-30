import { r as reactExports, u as useShallow, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, a as useAppStore, a1 as useManagedTimeout, al as getPowerUpMeta, aD as getItemEffectDescription, aE as ModelViewer } from "./feature-3d-jK3b4Iv-.js";
import { l as localizeCosmeticDisplayName, g as getCosmeticMeta, S as SHOP_ITEMS } from "./cosmetic-registry-Do13zNAS.js";
import { I as useDialogFocus } from "./feature-3d-hud-Dp6hMoyV.js";
/* empty css                 */
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./vendor-supabase-DTEAj5J1.js";
const UPGRADE_PATHS = {
  hintPack: { maxLevel: 3, costs: [0, 120, 240], effects: ["Show reading", "Show reading + meaning", "Show full answer 3s"] },
  timeExtend: { maxLevel: 3, costs: [0, 160, 320], effects: ["+15s", "+25s", "+40s"] },
  skipShield: { maxLevel: 3, costs: [0, 200, 400], effects: ["Skip 1 wrong", "Skip 2 wrong", "Skip 3 wrong"] },
  comboSaver: { maxLevel: 3, costs: [0, 180, 360], effects: ["Save 1 combo break", "Save 2 combo breaks", "Save 3 combo breaks"] },
  xpBoost: { maxLevel: 3, costs: [0, 160, 320], effects: ["×2 XP", "×2.5 XP", "×3 XP"] },
  doubleCoins: { maxLevel: 3, costs: [0, 240, 480], effects: ["×2 coins", "×2.5 coins", "×3 coins"] },
  coinMagnet: { maxLevel: 3, costs: [0, 300, 600], effects: ["+50% coins", "+75% coins", "+100% coins"] },
  revealOne: { maxLevel: 2, costs: [0, 100], effects: ["Eliminate 1 wrong", "Eliminate 2 wrong"] },
  slowMotion: { maxLevel: 2, costs: [0, 220], effects: ["×1.5 time", "×2 time"] }
};
function getUpgradeCost(powerUpId, currentLevel) {
  const path = UPGRADE_PATHS[powerUpId];
  if (!path || currentLevel >= path.maxLevel) return null;
  return path.costs[currentLevel] || null;
}
function getUpgradeEffect(powerUpId, level) {
  const path = UPGRADE_PATHS[powerUpId];
  if (!path) return null;
  return path.effects[Math.min(level, path.effects.length) - 1] || path.effects[0];
}
const CATEGORY_ORDER = ["theme", "avatar", "badge", "title", "cardStyle", "effect", "textColor", "entrance", "particleAmbient", "particleTouch", "sticker", "music", "tool", "skill", "frame", "banner", "charm", "aura", "sfx", "emote"];
const COSMETIC_CATEGORIES = {
  theme: { label: "Giao diện", icon: "🎨", prefix: "theme-", applyDesc: "🎨 Áp dụng cho: Giao diện toàn bộ ứng dụng" },
  avatar: { label: "Hình đại diện", icon: "🎭", prefix: "avatar-", applyDesc: "🎭 Áp dụng cho: Ảnh đại diện ở thanh tài khoản" },
  badge: { label: "Huy hiệu", icon: "🏅", prefix: "badge-", applyDesc: "🏅 Áp dụng cho: Huy hiệu hiển thị bên cạnh tên người dùng" },
  cardStyle: { label: "Kiểu thẻ", icon: "✨", prefix: "card-", applyDesc: "✨ Áp dụng cho: Kiểu hiển thị của tất cả thẻ lật trong ứng dụng" },
  effect: { label: "Hiệu ứng", icon: "🎆", prefix: "effect-", applyDesc: "🎆 Áp dụng cho: Hiệu ứng ăn mừng khi trả lời đúng" },
  title: { label: "Danh hiệu", icon: "🏷️", prefix: "title-", applyDesc: "🏷️ Áp dụng cho: Danh hiệu hiển thị dưới tên người dùng" },
  textColor: { label: "Màu chữ", icon: "🌈", prefix: "textcolor-", applyDesc: "🌈 Áp dụng cho: Màu gradient cho tên người dùng" },
  entrance: { label: "Hiệu ứng vào", icon: "🎬", prefix: "entrance-", applyDesc: "🎬 Áp dụng cho: Hiệu ứng khi đăng nhập hoặc mở app" },
  particleAmbient: { label: "Hạt nền", icon: "🫧", prefix: "particle-", applyDesc: "🫧 Áp dụng cho: Hiệu ứng hạt thả nổi hoặc chạy nền trên màn hình" },
  particleTouch: { label: "Hạt chạm", icon: "✨", prefix: "particle-touch-", applyDesc: "✨ Áp dụng cho: Hiệu ứng burst xuất hiện khi chạm hoặc click vào màn hình" },
  sticker: { label: "Nhãn dán", icon: "🎨", prefix: "sticker-", applyDesc: "🎨 Áp dụng cho: Nhãn dán hiển thị bên cạnh avatar" },
  music: { label: "Nhạc", icon: "🎵", prefix: "music-", applyDesc: "🎵 Áp dụng cho: Nhạc nền khi học (tính năng sắp ra mắt)" },
  tool: { label: "Công cụ", icon: "🔧", prefix: "tool-", applyDesc: "🔧 Áp dụng cho: Công cụ hỗ trợ thêm trong bài học" },
  skill: { label: "Kỹ năng", icon: "📈", prefix: "skill-", applyDesc: "📈 Hiệu ứng thụ động: có hiệu lực vĩnh viễn khi sở hữu" },
  frame: { label: "Khung", icon: "🖼️", prefix: "frame-", applyDesc: "🖼️ Áp dụng cho: Viền trang trí quanh avatar ở header và profile" },
  banner: { label: "Biểu ngữ", icon: "🏕️", prefix: "banner-", applyDesc: "🏕️ Áp dụng cho: Nền ảnh rộng ở đầu trang hồ sơ" },
  charm: { label: "お守り", icon: "🧿", prefix: "charm-", applyDesc: "🧿 Tài vật hộ mệnh — hiển thị bên cạnh avatar và cộng hiệu ứng thụ động nhỏ" },
  aura: { label: "Hào quang", icon: "💫", prefix: "aura-", applyDesc: "💫 Áp dụng cho: Hiệu ứng phát sáng hoặc quay quanh avatar" },
  sfx: { label: "Gói SFX", icon: "🔊", prefix: "sfx-", applyDesc: "🔊 Áp dụng cho: Bộ âm thanh hiệu ứng khi đúng, sai hoặc combo" },
  emote: { label: "Biểu cảm", icon: "😄", prefix: "emote-", applyDesc: "😄 Áp dụng cho: Biểu cảm phản ứng khi đạt thành tích" }
};
function isTouchParticleKey(key) {
  return String(key || "").startsWith("particle-touch-");
}
function deriveCosmeticCategory(key) {
  if (!key) return "theme";
  if (key.startsWith("theme-")) return "theme";
  if (key.startsWith("avatar-") || key.startsWith("gacha-avatar-")) return "avatar";
  if (key.startsWith("badge-")) return "badge";
  if (key.startsWith("card-") || key.startsWith("gacha-card-")) return "cardStyle";
  if (key.startsWith("effect-")) return "effect";
  if (key.startsWith("title-")) return "title";
  if (key.startsWith("textcolor-")) return "textColor";
  if (key.startsWith("entrance-")) return "entrance";
  if (isTouchParticleKey(key)) return "particleTouch";
  if (key.startsWith("particle-")) return "particleAmbient";
  if (key.startsWith("sticker-")) return "sticker";
  if (key.startsWith("music-")) return "music";
  if (key.startsWith("tool-")) return "tool";
  if (key.startsWith("skill-")) return "skill";
  if (key.startsWith("frame-")) return "frame";
  if (key.startsWith("banner-")) return "banner";
  if (key.startsWith("charm-")) return "charm";
  if (key.startsWith("aura-")) return "aura";
  if (key.startsWith("sfx-")) return "sfx";
  if (key.startsWith("emote-")) return "emote";
  return "theme";
}
const ITEM_META = {
  // ── Themes ──
  "theme-sakura": { name: "Sakura Theme", icon: "🌸", category: "theme" },
  "theme-ocean": { name: "Ocean Theme", icon: "🌊", category: "theme" },
  "theme-sunset": { name: "Sunset Theme", icon: "🌅", category: "theme" },
  "theme-forest": { name: "Forest Theme", icon: "🌲", category: "theme" },
  "theme-galaxy": { name: "Galaxy Theme", icon: "🌌", category: "theme" },
  "theme-midnight": { name: "Midnight Theme", icon: "🌙", category: "theme" },
  "theme-autumn": { name: "Autumn Theme", icon: "🍂", category: "theme" },
  "theme-cyberpunk": { name: "Cyberpunk Theme", icon: "🤖", category: "theme" },
  "theme-amethyst": { name: "Amethyst", icon: "💜", category: "theme" },
  "theme-ember": { name: "Ember", icon: "🔥", category: "theme" },
  "theme-neon-tokyo": { name: "Neon Tokyo", icon: "🌃", category: "theme" },
  "theme-aurora": { name: "Aurora", icon: "🌈", category: "theme" },
  "theme-tropical": { name: "Tropical", icon: "🌴", category: "theme" },
  "theme-lavender": { name: "Lavender", icon: "💐", category: "theme" },
  "theme-dragon-flame": { name: "Dragon Flame", icon: "🐉", category: "theme" },
  "theme-aurora-borealis": { name: "Aurora Borealis", icon: "🌌", category: "theme" },
  "theme-deep-ocean": { name: "Deep Ocean", icon: "🐙", category: "theme" },
  "theme-cherry-blossom": { name: "Cherry Blossom Rain", icon: "🌸", category: "theme" },
  "theme-cosmic-void": { name: "Cosmic Void", icon: "✨", category: "theme" },
  "theme-neon-matrix": { name: "Neon Matrix", icon: "💾", category: "theme" },
  "theme-golden-palace": { name: "Golden Palace", icon: "🏯", category: "theme" },
  "theme-thunderstorm": { name: "Thunderstorm", icon: "⛈️", category: "theme" },
  "seasonal-hanami-bg": { name: "Hanami BG", icon: "🌳", category: "theme" },
  "seasonal-momiji-theme": { name: "Momiji Theme", icon: "🍁", category: "theme" },
  // ── Avatars ──
  "avatar-ninja": { name: "Ninja Avatar", icon: "🥷", category: "avatar" },
  "avatar-maneki": { name: "Maneki Neko", icon: "🐱", category: "avatar" },
  "avatar-tanuki": { name: "Tanuki Avatar", icon: "🦝", category: "avatar" },
  "avatar-kitsune": { name: "Kitsune Avatar", icon: "🦊", category: "avatar" },
  "avatar-phoenix": { name: "Hō-ō Avatar", icon: "🔥", category: "avatar" },
  "avatar-daruma": { name: "Daruma Avatar", icon: "🎯", category: "avatar" },
  "avatar-oni": { name: "Oni Avatar", icon: "👹", category: "avatar" },
  "avatar-crane": { name: "Tsuru Avatar", icon: "🦢", category: "avatar" },
  "avatar-dragon-king": { name: "龍王 Dragon King", icon: "🐲", category: "avatar" },
  "avatar-sakura-spirit": { name: "桜の精 Sakura Spirit", icon: "🧚", category: "avatar" },
  "avatar-thunder-god": { name: "雷神 Raijin", icon: "⚡", category: "avatar" },
  "avatar-ice-empress": { name: "氷の女王 Ice Empress", icon: "❄️", category: "avatar" },
  "avatar-shadow-ninja": { name: "忍 Shadow Ninja", icon: "🌑", category: "avatar" },
  "avatar-celestial-fox": { name: "天狐 Celestial Fox", icon: "🦊", category: "avatar" },
  "avatar-wind-samurai": { name: "風の侍 Wind Samurai", icon: "🌪️", category: "avatar" },
  "avatar-golden-buddha": { name: "金仏 Golden Buddha", icon: "🧘", category: "avatar" },
  "seasonal-yukata-avatar": { name: "Yukata Avatar", icon: "👘", category: "avatar" },
  "gacha-avatar-samurai": { name: "Gacha Samurai", icon: "⚔️", category: "avatar" },
  "gacha-avatar-geisha": { name: "Gacha Geisha", icon: "👘", category: "avatar" },
  "gacha-avatar-shinobi": { name: "Gacha Shinobi", icon: "🌀", category: "avatar" },
  "gacha-avatar-tengu": { name: "Gacha Tengu", icon: "👺", category: "avatar" },
  "gacha-avatar-yokai": { name: "Gacha Yōkai", icon: "👻", category: "avatar" },
  "gacha-avatar-amaterasu": { name: "Amaterasu Avatar", icon: "☀️", category: "avatar" },
  "gacha-avatar-susanoo": { name: "Susanoo Avatar", icon: "⚡", category: "avatar" },
  // ── Badges ──
  "badge-vip": { name: "VIP Badge", icon: "⭐", category: "badge" },
  "badge-samurai": { name: "Samurai Badge", icon: "⚔️", category: "badge" },
  "badge-sensei": { name: "Sensei Badge", icon: "🎓", category: "badge" },
  "badge-dragon": { name: "Dragon Badge", icon: "🐉", category: "badge" },
  "badge-sakura": { name: "Sakura Badge", icon: "🌸", category: "badge" },
  "badge-crown": { name: "Crown Badge", icon: "👑", category: "badge" },
  "badge-scholar": { name: "Scholar", icon: "📚", category: "badge" },
  "badge-explorer": { name: "Explorer", icon: "🧭", category: "badge" },
  "badge-diamond": { name: "Diamond", icon: "💎", category: "badge" },
  "badge-flame-master": { name: "Flame Master", icon: "🔥", category: "badge" },
  "badge-frost-king": { name: "Frost King", icon: "❄️", category: "badge" },
  "badge-thunder-bolt": { name: "Thunder Bolt", icon: "⚡", category: "badge" },
  "badge-cosmic-star": { name: "Cosmic Star", icon: "🌟", category: "badge" },
  "badge-sakura-bloom": { name: "Sakura Bloom", icon: "🌸", category: "badge" },
  "badge-golden-dragon": { name: "Golden Dragon", icon: "🐉", category: "badge" },
  "seasonal-harvest-badge": { name: "Harvest Badge", icon: "🌾", category: "badge" },
  "seasonal-kagami-mochi": { name: "Kagami Mochi", icon: "🎍", category: "badge" },
  // ── Titles ──
  "title-ganbatte": { name: "Title: 頑張って", icon: "💪", category: "title" },
  "title-sugoi": { name: "Title: すごい", icon: "✨", category: "title" },
  "title-nihongo-master": { name: "Title: 日本語マスター", icon: "🇯🇵", category: "title" },
  "title-samurai": { name: "Title: 侍", icon: "⚔️", category: "title" },
  "title-daimyo": { name: "Title: 大名", icon: "🏯", category: "title" },
  "title-shogun": { name: "Title: 将軍", icon: "👑", category: "title" },
  "seasonal-spring-title": { name: "Title: 春の子", icon: "🌸", category: "title" },
  "seasonal-summer-title": { name: "Title: 夏祭り", icon: "🎆", category: "title" },
  "seasonal-autumn-title": { name: "Title: 紅葉狩り", icon: "🍂", category: "title" },
  "seasonal-winter-title": { name: "Title: 冬将軍", icon: "❄️", category: "title" },
  "gacha-title-warrior": { name: "Title: 戦士", icon: "⚔️", category: "title" },
  "gacha-title-legend": { name: "Title: 伝説", icon: "🏆", category: "title" },
  // ── Card Styles ──
  "card-neon": { name: "Neon Card", icon: "✨", category: "cardStyle" },
  "card-glass": { name: "Glass Card", icon: "💎", category: "cardStyle" },
  "card-gradient": { name: "Gradient Card", icon: "🌈", category: "cardStyle" },
  "card-gold": { name: "Gold Card", icon: "🏅", category: "cardStyle" },
  "card-hologram": { name: "Hologram Card", icon: "🔮", category: "cardStyle" },
  "card-flame-border": { name: "Flame Border", icon: "🔥", category: "cardStyle" },
  "card-frost-crystal": { name: "Frost Crystal", icon: "❄️", category: "cardStyle" },
  "card-aurora-shine": { name: "Aurora Shine", icon: "🌌", category: "cardStyle" },
  "card-cosmic-void": { name: "Cosmic Void Card", icon: "🕳️", category: "cardStyle" },
  "card-thunder-pulse": { name: "Thunder Pulse", icon: "⚡", category: "cardStyle" },
  "card-sakura-dream": { name: "Sakura Dream", icon: "🌸", category: "cardStyle" },
  "card-golden-dragon": { name: "Golden Dragon Card", icon: "🐉", category: "cardStyle" },
  "gacha-card-sakura": { name: "Gacha Sakura Card", icon: "🌸", category: "cardStyle" },
  "gacha-card-wave": { name: "Great Wave Card", icon: "🌊", category: "cardStyle" },
  "gacha-card-dragon": { name: "Dragon Scale Card", icon: "🐲", category: "cardStyle" },
  "gacha-card-imperial": { name: "Imperial Gold Card", icon: "👑", category: "cardStyle" },
  // ── Effects ──
  "effect-confetti": { name: "Confetti Effect", icon: "🎊", category: "effect" },
  "effect-sparkle": { name: "Sparkle Effect", icon: "💫", category: "effect" },
  "effect-firework": { name: "Fireworks Effect", icon: "🎆", category: "effect" },
  "effect-sakura-petals": { name: "Sakura Petals", icon: "🌸", category: "effect" },
  "effect-lightning": { name: "Lightning Effect", icon: "⚡", category: "effect" },
  "effect-rainbow": { name: "Rainbow Effect", icon: "🌈", category: "effect" },
  "effect-snow": { name: "Snowfall Effect", icon: "❄️", category: "effect" },
  "effect-meteor-shower": { name: "Meteor Shower", icon: "☄️", category: "effect" },
  "effect-dragon-breath": { name: "Dragon Breath", icon: "🐲", category: "effect" },
  "effect-ice-shatter": { name: "Ice Shatter", icon: "💠", category: "effect" },
  "effect-thunder-strike": { name: "Thunder Strike", icon: "🌩️", category: "effect" },
  "effect-cherry-storm": { name: "Cherry Storm", icon: "🌸", category: "effect" },
  "effect-golden-rain": { name: "Golden Rain", icon: "🌟", category: "effect" },
  "effect-shadow-burst": { name: "Shadow Burst", icon: "🌑", category: "effect" },
  "effect-wind-slash": { name: "Wind Slash", icon: "🌪️", category: "effect" },
  "seasonal-sakura-frame": { name: "Sakura Frame", icon: "🌸", category: "effect" },
  "seasonal-firework-effect": { name: "Firework Burst", icon: "🎆", category: "effect" },
  "seasonal-snow-effect": { name: "Snow Falling", icon: "❄️", category: "effect" },
  "gacha-effect-fire": { name: "Sacred Fire", icon: "🔥", category: "effect" },
  "gacha-effect-dragon": { name: "Dragon Aura", icon: "🐉", category: "effect" },
  "gacha-effect-celestial": { name: "Celestial Effect", icon: "✨", category: "effect" },
  // ── Stickers ──
  "sticker-neko": { name: "Sticker: Neko", icon: "😺", category: "sticker" },
  "sticker-sakura": { name: "Sticker: Sakura", icon: "🌸", category: "sticker" },
  "sticker-onigiri": { name: "Sticker: Onigiri", icon: "🍙", category: "sticker" },
  "sticker-torii": { name: "Sticker: Torii", icon: "⛩️", category: "sticker" },
  "sticker-fuji": { name: "Sticker: Fuji", icon: "🗻", category: "sticker" },
  // ── Music ──
  "music-lofi": { name: "Music: Lo-Fi Study", icon: "🎵", category: "music" },
  "music-zen": { name: "Music: Zen Garden", icon: "🎶", category: "music" },
  "music-shamisen": { name: "Music: Shamisen", icon: "🎸", category: "music" },
  "music-sakura-rain": { name: "Music: Sakura Rain", icon: "🌧️", category: "music" },
  // ── Tools ──
  "tool-vocab-highlighter": { name: "Vocab Highlighter", icon: "🖍️", category: "tool" },
  "tool-kanji-overlay": { name: "Kanji Overlay", icon: "🔎", category: "tool" },
  "tool-grammar-checker": { name: "Grammar Tag", icon: "🏷️", category: "tool" },
  // ── Skills (passive, always active when owned) ──
  "skill-coinBoost5": { name: "Skill: Coin +5%", icon: "💰", category: "skill" },
  "skill-xpBoost5": { name: "Skill: XP +5%", icon: "📈", category: "skill" },
  "skill-hintFree": { name: "Skill: Free Hint Daily", icon: "💡", category: "skill" },
  "skill-comboExtend": { name: "Skill: Combo Window", icon: "⏱️", category: "skill" },
  "skill-dailyBonus": { name: "Skill: Daily Bonus +20%", icon: "📅", category: "skill" }
};
try {
  for (const si of SHOP_ITEMS || []) {
    if (!si || !si.unlockKey) continue;
    const k = si.unlockKey;
    if (ITEM_META[k]) continue;
    const category = deriveCosmeticCategory(k);
    const prettyName = (si.name || k).replace(/^(Theme:|Card Style:|Avatar:|Badge:|Effect:|Title:|Music:|Tool:|Unlock:)/, "").trim();
    ITEM_META[k] = { name: prettyName || k, icon: si.icon || "📦", category };
  }
} catch (e) {
}
function getInventoryItemMeta(key) {
  const registryMeta = getCosmeticMeta(key);
  if (registryMeta) {
    return {
      ...registryMeta,
      icon: registryMeta.emoji || registryMeta.icon || "📦",
      category: registryMeta.category || deriveCosmeticCategory(key) || "theme"
    };
  }
  if (!ITEM_META[key]) return null;
  return {
    ...ITEM_META[key],
    name: localizeCosmeticDisplayName(ITEM_META[key].name)
  };
}
const INVENTORY_GROUPS = [
  { id: "all", label: "Tất cả", icon: "📦", cats: null },
  { id: "support", label: "Hỗ trợ", icon: "⚡", cats: ["skill", "charm"], includePowerUps: true },
  { id: "appearance", label: "Giao diện", icon: "🎨", cats: ["theme", "cardStyle"] },
  { id: "profile", label: "Hồ sơ", icon: "👤", cats: ["avatar", "frame", "badge", "title", "banner", "aura", "sticker", "textColor"] },
  { id: "fx", label: "Hiệu ứng", icon: "✨", cats: ["effect", "entrance", "particleAmbient", "particleTouch"] },
  { id: "interactive", label: "Tương tác", icon: "🔊", cats: ["sfx", "music", "emote"] },
  { id: "tools", label: "Công cụ", icon: "🔧", cats: ["tool"] }
];
function subPillDef(catId) {
  if (catId === "powerup") return { label: "Hỗ trợ", icon: "⚡" };
  const c = COSMETIC_CATEGORIES[catId];
  return c ? { label: c.label, icon: c.icon } : { label: catId, icon: "📦" };
}
function InventoryPage() {
  var _a;
  const [group, setGroup] = reactExports.useState("all");
  const [subCategory, setSubCategory] = reactExports.useState("all");
  const [confirmReset, setConfirmReset] = reactExports.useState(false);
  const [equipPopup, setEquipPopup] = reactExports.useState(null);
  const equipDialogRef = useDialogFocus(Boolean(equipPopup), () => setEquipPopup(null));
  const entranceTimerRef = reactExports.useRef(null);
  const entranceClassRef = reactExports.useRef(null);
  const equipPopupTimerRef = reactExports.useRef(null);
  const { coins, powerUps, unlockedItems, equippedCosmetics, equipItem, unequipItem, resetAllCosmetics, powerUpLevels, upgradePowerUp } = useLearningStore(
    useShallow((s) => ({
      coins: s.coins,
      powerUps: s.powerUps,
      unlockedItems: s.unlockedItems || {},
      equippedCosmetics: s.equippedCosmetics || {},
      equipItem: s.equipItem,
      unequipItem: s.unequipItem,
      resetAllCosmetics: s.resetAllCosmetics,
      powerUpLevels: s.powerUpLevels || {},
      upgradePowerUp: s.upgradePowerUp
    }))
  );
  const applyThemePreset = useAppStore((s) => s.applyThemePreset);
  const clearThemePreset = useAppStore((s) => s.clearThemePreset);
  const { scheduleTimeout, clearManagedTimeout } = useManagedTimeout();
  const cosmeticItems = reactExports.useMemo(() => {
    function prettifyKeyName(k) {
      if (!k) return k;
      return k.replace(/^(theme-|unlock-|card-|avatar-|badge-|effect-|title-|textcolor-|entrance-|particle-touch-|particle-|sticker-|music-|tool-|skill-|frame-|banner-|charm-|aura-|sfx-|emote-|gacha-card-|gacha-avatar-)/, "").replace(/-/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());
    }
    return Object.keys(unlockedItems || {}).map((key) => {
      const derivedCategory = deriveCosmeticCategory(key);
      const meta = getInventoryItemMeta(key);
      if (meta) {
        const metaCategory = meta.category === "particle" ? derivedCategory : meta.category || derivedCategory;
        return { key, name: meta.name, icon: meta.icon || "📦", category: metaCategory, disabled: meta.disabled === true };
      }
      return { key, name: localizeCosmeticDisplayName(prettifyKeyName(key) || key), icon: "📦", category: derivedCategory, disabled: false };
    }).sort((a, b) => {
      const ai = CATEGORY_ORDER.indexOf(a.category);
      const bi = CATEGORY_ORDER.indexOf(b.category);
      if (ai !== bi) return ai - bi;
      return (a.name || "").localeCompare(b.name || "");
    });
  }, [unlockedItems]);
  const activeGroupDef = INVENTORY_GROUPS.find((g) => g.id === group) || INVENTORY_GROUPS[0];
  const groupCats = activeGroupDef.cats;
  const groupIncludesPowerUps = group === "all" || activeGroupDef.includePowerUps;
  const filteredItems = reactExports.useMemo(() => {
    let cosmetics = cosmeticItems;
    if (groupCats) {
      cosmetics = cosmetics.filter((item) => groupCats.includes(item.category));
    }
    if (subCategory !== "all" && subCategory !== "powerup") {
      cosmetics = cosmetics.filter((item) => item.category === subCategory);
    }
    if (subCategory === "powerup") {
      cosmetics = [];
    }
    const powerups = [];
    const showPowerUps = groupIncludesPowerUps && (subCategory === "all" || subCategory === "powerup");
    if (showPowerUps) {
      Object.entries(powerUps || {}).forEach(([key, count]) => {
        if (count > 0) {
          const meta = getPowerUpMeta(key);
          powerups.push({ key, count, ...meta });
        }
      });
    }
    return { cosmetics, powerups };
  }, [cosmeticItems, group, subCategory, powerUps, groupCats, groupIncludesPowerUps]);
  const groupedCosmetics = reactExports.useMemo(() => {
    const groups = {};
    for (const item of filteredItems.cosmetics) {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    }
    return CATEGORY_ORDER.filter((cat) => {
      var _a2;
      return ((_a2 = groups[cat]) == null ? void 0 : _a2.length) > 0;
    }).map((cat) => ({ category: cat, items: groups[cat], meta: COSMETIC_CATEGORIES[cat] }));
  }, [filteredItems.cosmetics]);
  const totalOwned = filteredItems.cosmetics.length + filteredItems.powerups.length;
  const applyEquipSideEffects = reactExports.useCallback((category, unlockKey, isEquip) => {
    var _a2;
    if (!isEquip) {
      if (category === "theme") clearThemePreset();
      if (category === "cardStyle") {
        (_a2 = document.querySelector(".n4-app")) == null ? void 0 : _a2.classList.forEach((c) => {
          if (c.startsWith("n4-cardstyle-")) document.querySelector(".n4-app").classList.remove(c);
        });
      }
      return;
    }
    if (category === "theme") {
      const presetId = unlockKey.replace("theme-", "").replace("seasonal-", "").replace("hanami-bg", "hanami");
      applyThemePreset(presetId);
    }
    if (category === "cardStyle") {
      const appEl = document.querySelector(".n4-app");
      if (appEl) {
        appEl.classList.forEach((c) => {
          if (c.startsWith("n4-cardstyle-")) appEl.classList.remove(c);
        });
        const style = unlockKey.replace("card-", "").replace("gacha-card-", "");
        appEl.classList.add(`n4-cardstyle-${style}`);
      }
    }
    if (category === "effect") {
      unlockKey.replace("effect-", "").replace("seasonal-", "").replace("gacha-effect-", "");
    }
    if (category === "entrance") {
      const appEl = document.querySelector(".n4-app");
      if (appEl) {
        const animName = unlockKey.replace("entrance-", "");
        clearManagedTimeout(entranceTimerRef.current);
        if (entranceClassRef.current) {
          appEl.classList.remove(entranceClassRef.current);
        }
        entranceClassRef.current = `n4-entrance-${animName}`;
        appEl.classList.add(`n4-entrance-${animName}`);
        entranceTimerRef.current = scheduleTimeout(() => {
          appEl.classList.remove(`n4-entrance-${animName}`);
          entranceClassRef.current = null;
          entranceTimerRef.current = null;
        }, 1500);
      }
    }
  }, [applyThemePreset, clearManagedTimeout, clearThemePreset, scheduleTimeout]);
  const queueEquipPopupClear = reactExports.useCallback((delayMs = 3e3) => {
    clearManagedTimeout(equipPopupTimerRef.current);
    equipPopupTimerRef.current = scheduleTimeout(() => {
      equipPopupTimerRef.current = null;
      setEquipPopup(null);
    }, delayMs);
  }, [clearManagedTimeout, scheduleTimeout]);
  const handleEquip = reactExports.useCallback((category, unlockKey) => {
    const current = equippedCosmetics[category];
    const isUnequip = current === unlockKey;
    const meta = getInventoryItemMeta(unlockKey);
    const catMeta = COSMETIC_CATEGORIES[category];
    if (category === "skill" || category === "tool") {
      const effect = getItemEffectDescription(unlockKey);
      setEquipPopup({
        item: meta,
        action: "info",
        message: `${(meta == null ? void 0 : meta.icon) || "📈"} ${(meta == null ? void 0 : meta.name) || unlockKey}

${effect || (catMeta == null ? void 0 : catMeta.applyDesc) || "Có hiệu lực vĩnh viễn khi sở hữu."}`
      });
      queueEquipPopupClear();
      return;
    }
    if (isUnequip) {
      unequipItem(category);
      applyEquipSideEffects(category, unlockKey, false);
      setEquipPopup({
        item: meta,
        action: "unequip",
        message: `❌ Đã tháo ${(meta == null ? void 0 : meta.name) || unlockKey}`
      });
    } else {
      equipItem(category, unlockKey);
      applyEquipSideEffects(category, unlockKey, true);
      setEquipPopup({
        item: meta,
        action: "equip",
        message: `✅ Đã trang bị ${(meta == null ? void 0 : meta.name) || unlockKey}

${(catMeta == null ? void 0 : catMeta.applyDesc) || ""}`
      });
    }
    queueEquipPopupClear();
  }, [equippedCosmetics, equipItem, unequipItem, applyEquipSideEffects, queueEquipPopupClear]);
  const handleReset = reactExports.useCallback(() => {
    resetAllCosmetics();
    clearThemePreset();
    const appEl = document.querySelector(".n4-app");
    if (appEl) {
      appEl.classList.forEach((c) => {
        if (c.startsWith("n4-cardstyle-")) appEl.classList.remove(c);
      });
    }
    setConfirmReset(false);
  }, [resetAllCosmetics, clearThemePreset]);
  const hasEquipped = Object.values(equippedCosmetics || {}).some((v) => v != null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-inventory-page n4-page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-inventory-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "n4-btn n4-btn-ghost n4-btn-icon", children: "←" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModelViewer, { modelId: "chest", height: "100px", background: "transparent", style: { flex: "none", width: "100px" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "🎒 Túi đồ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-inventory-coins", children: [
        "🪙 ",
        coins.toLocaleString("vi-VN")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-inventory-tabs", children: INVENTORY_GROUPS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: `n4-inventory-tab${group === g.id ? " active" : ""}`,
        onClick: () => {
          setGroup(g.id);
          setSubCategory("all");
        },
        children: [
          g.icon,
          " ",
          g.label
        ]
      },
      g.id
    )) }),
    activeGroupDef.cats && activeGroupDef.cats.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-inventory-tabs", style: { paddingTop: 0, opacity: 0.9 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-inventory-tab${subCategory === "all" ? " active" : ""}`,
          onClick: () => setSubCategory("all"),
          style: { fontSize: "0.78rem" },
          children: "· Tất cả ·"
        }
      ),
      activeGroupDef.cats.map((catId) => {
        const def = subPillDef(catId);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: `n4-inventory-tab${subCategory === catId ? " active" : ""}`,
            onClick: () => setSubCategory(catId),
            style: { fontSize: "0.78rem" },
            children: [
              def.icon,
              " ",
              def.label
            ]
          },
          catId
        );
      }),
      activeGroupDef.includePowerUps && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `n4-inventory-tab${subCategory === "powerup" ? " active" : ""}`,
          onClick: () => setSubCategory("powerup"),
          style: { fontSize: "0.78rem" },
          children: "⚡ Hỗ trợ"
        }
      )
    ] }),
    totalOwned === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-inventory-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-inventory-empty-icon", children: "🎒" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chưa có vật phẩm nào." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "n4-btn n4-btn-primary", style: { textDecoration: "none", marginTop: 12 }, children: "🛍️ Ghé Shop mua sắm" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      groupedCosmetics.length > 0 && groupedCosmetics.map((group2) => {
        var _a2;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-inventory-category-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-inventory-category-header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ((_a2 = group2.meta) == null ? void 0 : _a2.label) || group2.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: "0.7rem", fontWeight: 400, color: "var(--n4-text-tertiary)", marginLeft: 8 }, children: [
              group2.items.length,
              " vật phẩm"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-inventory-grid", children: group2.items.map((item) => {
            var _a3;
            const isEquipped = equippedCosmetics[item.category] === item.key;
            const isPassive = item.category === "skill" || item.category === "tool";
            const effectDesc = getItemEffectDescription(item.key);
            let previewClass = "";
            if (isEquipped) {
              if (item.category === "cardStyle") previewClass = ` n4-preview-${item.key.replace("card-", "")}`;
              if (item.category === "avatar") previewClass = ` n4-avatar-aura n4-avatar-aura-${item.key.replace("avatar-", "")}`;
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: `n4-inventory-item${isEquipped ? " equipped" : ""}${isPassive ? " skill-passive" : ""}${previewClass}`,
                onClick: () => handleEquip(item.category, item.key),
                title: isPassive ? "Bị động — luôn có hiệu lực khi sở hữu" : isEquipped ? "Bấm để tháo" : "Bấm để trang bị",
                children: [
                  isEquipped && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-inventory-item-badge", children: "Đang dùng" }),
                  isPassive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-inventory-item-badge", style: { background: "var(--n4-neon-green)", color: "#000" }, children: "Bị động" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-inventory-item-icon n4-item-float", children: item.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-inventory-item-name", children: item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.7rem", color: "var(--n4-text-tertiary)", textTransform: "capitalize" }, children: ((_a3 = group2.meta) == null ? void 0 : _a3.label) || item.category }),
                  effectDesc && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.65rem", color: "var(--n4-neon-green, #10b981)", marginTop: 4, lineHeight: 1.2 }, children: [
                    "✨ ",
                    effectDesc
                  ] })
                ]
              },
              item.key
            );
          }) })
        ] }, group2.category);
      }),
      filteredItems.powerups.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        filteredItems.cosmetics.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { margin: "16px 0 8px", fontSize: "0.85rem", fontWeight: 600, color: "var(--n4-text-secondary)" }, children: "⚡ Vật phẩm hỗ trợ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-inventory-grid n4-inventory-powerups", style: { gridTemplateColumns: "1fr" }, children: filteredItems.powerups.map((item) => {
          var _a2;
          const currentLevel = powerUpLevels[item.key] || 1;
          const upgradeCost = getUpgradeCost(item.key, currentLevel);
          const maxLevel = ((_a2 = UPGRADE_PATHS[item.key]) == null ? void 0 : _a2.maxLevel) || 1;
          const nextEffect = upgradeCost ? getUpgradeEffect(item.key, currentLevel + 1) : null;
          const currentEffect = getUpgradeEffect(item.key, currentLevel) || "";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-inventory-item n4-powerup-row", style: { display: "flex", alignItems: "center", textAlign: "left", padding: "12px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-inventory-item-icon", style: { fontSize: "2rem", marginRight: "16px" }, children: item.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-inventory-item-name", style: { fontSize: "1rem", marginBottom: 4 }, children: [
                item.name,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-badge", children: [
                  "×",
                  item.count
                ] }),
                maxLevel > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-badge n4-badge-gold", style: { marginLeft: 6 }, children: [
                  "Cấp ",
                  currentLevel
                ] })
              ] }),
              currentEffect && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.8rem", color: "var(--n4-text-2)" }, children: [
                "Hiện tại: ",
                currentEffect
              ] }),
              nextEffect && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.75rem", color: "var(--n4-neon-green)", marginTop: 2 }, children: [
                "Cấp kế: ",
                nextEffect
              ] })
            ] }),
            upgradeCost && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: "n4-btn n4-btn-primary n4-btn-sm",
                disabled: coins < upgradeCost,
                onClick: () => upgradePowerUp(item.key, upgradeCost),
                children: [
                  "Nâng cấp 🪙 ",
                  upgradeCost
                ]
              }
            ),
            !upgradeCost && maxLevel > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge", style: { padding: "6px 10px" }, children: "Tối đa" })
          ] }, item.key);
        }) })
      ] }),
      filteredItems.cosmetics.length === 0 && filteredItems.powerups.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-inventory-empty", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chưa có vật phẩm nào trong danh mục này." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "n4-btn n4-btn-sm n4-btn-ghost", style: { textDecoration: "none", marginTop: 8 }, children: "🛍️ Mua thêm" })
      ] })
    ] }),
    hasEquipped && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-inventory-reset-section", children: confirmReset ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "0.85rem", marginBottom: 8 }, children: "Tháo tất cả vật phẩm đang dùng?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-danger", onClick: handleReset, style: { marginRight: 8 }, children: "Xác nhận reset" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => setConfirmReset(false), children: "Hủy" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => setConfirmReset(true), children: "🔄 Reset tất cả trang bị" }) }),
    equipPopup && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "n4-equip-popup-overlay",
        onPointerDown: (event) => {
          if (event.target === event.currentTarget) setEquipPopup(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: equipDialogRef,
            className: "n4-equip-popup",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Trạng thái trang bị",
            tabIndex: -1,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-equip-popup-icon", children: ((_a = equipPopup.item) == null ? void 0 : _a.icon) || "📦" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-equip-popup-message", style: { whiteSpace: "pre-line" }, children: equipPopup.message }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-sm n4-btn-ghost", onClick: () => setEquipPopup(null), style: { marginTop: 8 }, children: "OK" })
            ]
          }
        )
      }
    )
  ] });
}
export {
  InventoryPage as default
};
