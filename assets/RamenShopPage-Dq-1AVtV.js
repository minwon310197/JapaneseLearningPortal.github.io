import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, aW as SubgameCanvas, bt as RamenCounter, bu as getCookingBuffDescription } from "./feature-3d-jK3b4Iv-.js";
import { a1 as useTakaraStore } from "./index-CjITGIof.js";
import { b as SparklePing, d as RarityAura, g as RARITY_LABELS_VI, h as RewardPop } from "./feature-3d-scenery-C3eSpuWG.js";
import { i as installAudioPrewarm, p as playSfx, g as getAudioBus } from "./sfx-catalog-BoRQvGpU.js";
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-Dp6hMoyV.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-icons-DHCyxOF-.js";
const INGREDIENT_ITEMS = [
  { key: "ing-miso", kind: "food-ingredient", rarity: "common", name: "Miso", nameVi: "Tương Miso", iconRef: "🍘", desc: "Fermented soybean paste.", descVi: "Tương đậu lên men.", tags: ["cooking"], stack: { max: 99 }, currency: "coin", price: 12 },
  { key: "ing-noodle", kind: "food-ingredient", rarity: "common", name: "Fresh Noodle", nameVi: "Mì Tươi", iconRef: "🍜", desc: "Springy ramen noodle.", descVi: "Sợi mì ramen dai.", tags: ["cooking"], stack: { max: 99 }, currency: "coin", price: 10 },
  { key: "ing-egg", kind: "food-ingredient", rarity: "common", name: "Egg", nameVi: "Trứng", iconRef: "🥚", desc: "Soft-boiled candidate.", descVi: "Trứng luộc lòng đào.", tags: ["cooking"], stack: { max: 99 }, currency: "coin", price: 8 },
  { key: "ing-pork", kind: "food-ingredient", rarity: "rare", name: "Chashu Pork", nameVi: "Thịt Heo Chashu", iconRef: "🥩", desc: "Braised pork belly slice.", descVi: "Ba chỉ heo áp chảo.", tags: ["cooking"], stack: { max: 99 }, currency: "coin", price: 30 },
  { key: "ing-nori", kind: "food-ingredient", rarity: "common", name: "Nori Sheet", nameVi: "Rong Biển Nori", iconRef: "🟩", desc: "Roasted seaweed.", descVi: "Rong biển nướng.", tags: ["cooking"], stack: { max: 99 }, currency: "coin", price: 9 },
  { key: "ing-scallion", kind: "food-ingredient", rarity: "common", name: "Scallion", nameVi: "Hành Lá", iconRef: "🌿", desc: "Chopped green onion.", descVi: "Hành lá cắt nhỏ.", tags: ["cooking"], stack: { max: 99 }, currency: "coin", price: 5 },
  { key: "ing-chili", kind: "food-ingredient", rarity: "common", name: "Chili", nameVi: "Ớt", iconRef: "🌶️", desc: "Dried red chili.", descVi: "Ớt đỏ khô.", tags: ["cooking"], stack: { max: 99 }, currency: "coin", price: 6 },
  { key: "ing-kombu", kind: "food-ingredient", rarity: "rare", name: "Kombu", nameVi: "Tảo Kombu", iconRef: "🫘", desc: "Kelp for dashi broth.", descVi: "Rong biển làm nước dùng.", tags: ["cooking"], stack: { max: 99 }, currency: "coin", price: 20 },
  { key: "ing-soy", kind: "food-ingredient", rarity: "common", name: "Soy Sauce", nameVi: "Xì Dầu", iconRef: "🍶", desc: "Shoyu condiment.", descVi: "Nước tương shoyu.", tags: ["cooking"], stack: { max: 99 }, currency: "coin", price: 7 },
  { key: "ing-mirin", kind: "food-ingredient", rarity: "rare", name: "Mirin", nameVi: "Rượu Mirin", iconRef: "🍾", desc: "Sweet cooking rice wine.", descVi: "Rượu gạo ngọt nấu ăn.", tags: ["cooking"], stack: { max: 99 }, currency: "coin", price: 22 },
  { key: "ing-rice", kind: "food-ingredient", rarity: "common", name: "Rice", nameVi: "Gạo", iconRef: "🍚", desc: "Short-grain rice.", descVi: "Gạo hạt ngắn.", tags: ["cooking"], stack: { max: 99 }, currency: "coin", price: 4 },
  { key: "ing-sugar", kind: "food-ingredient", rarity: "common", name: "Sugar", nameVi: "Đường", iconRef: "🧂", desc: "Fine white sugar.", descVi: "Đường trắng mịn.", tags: ["cooking"], stack: { max: 99 }, currency: "coin", price: 5 },
  { key: "ing-matcha", kind: "food-ingredient", rarity: "rare", name: "Matcha", nameVi: "Matcha", iconRef: "🍵", desc: "Whisked green tea.", descVi: "Bột trà xanh đánh tan.", tags: ["cooking", "tea"], stack: { max: 99 }, currency: "coin", price: 28 },
  { key: "ing-adzuki", kind: "food-ingredient", rarity: "rare", name: "Adzuki Bean", nameVi: "Đậu Đỏ Adzuki", iconRef: "🫘", desc: "Sweet red bean.", descVi: "Đậu đỏ ngọt.", tags: ["cooking", "dessert"], stack: { max: 99 }, currency: "coin", price: 18 },
  { key: "ing-mochi", kind: "food-ingredient", rarity: "rare", name: "Mochi", nameVi: "Bánh Mochi", iconRef: "🍡", desc: "Chewy rice cake.", descVi: "Bánh gạo nếp dẻo.", tags: ["cooking", "dessert"], stack: { max: 99 }, currency: "coin", price: 24 },
  { key: "ing-fish", kind: "food-ingredient", rarity: "rare", name: "Fresh Fish", nameVi: "Cá Tươi", iconRef: "🐟", desc: "Sashimi-grade fish.", descVi: "Cá tươi đủ tiêu chuẩn sashimi.", tags: ["cooking"], stack: { max: 99 }, currency: "coin", price: 32 },
  { key: "ing-tea-leaf", kind: "food-ingredient", rarity: "common", name: "Tea Leaf", nameVi: "Lá Trà", iconRef: "🍃", desc: "Dried green tea leaf.", descVi: "Lá trà xanh khô.", tags: ["cooking", "tea"], stack: { max: 99 }, currency: "coin", price: 10 },
  { key: "ing-udon", kind: "food-ingredient", rarity: "common", name: "Udon Noodle", nameVi: "Mì Udon", iconRef: "🍝", desc: "Thick wheat noodle.", descVi: "Sợi mì udon dày.", tags: ["cooking"], stack: { max: 99 }, currency: "coin", price: 12 }
];
const DISH_ITEMS = [
  { key: "dish-shoyu-ramen", kind: "dish", rarity: "common", name: "Shoyu Ramen", nameVi: "Shoyu Ramen", iconRef: "🍜", desc: "Soy-based classic.", descVi: "Ramen tương cổ điển.", tags: ["ramen"], stack: { max: 20 }, extra: { buff: { ref: "buff-xp-10-30m", seconds: 1800 } } },
  { key: "dish-miso-ramen", kind: "dish", rarity: "common", name: "Miso Ramen", nameVi: "Miso Ramen", iconRef: "🍜", desc: "Rich miso broth.", descVi: "Ramen miso đậm đà.", tags: ["ramen"], stack: { max: 20 }, extra: { buff: { ref: "buff-coin-10-30m", seconds: 1800 } } },
  { key: "dish-tonkotsu", kind: "dish", rarity: "rare", name: "Tonkotsu", nameVi: "Tonkotsu", iconRef: "🍜", desc: "Creamy pork broth.", descVi: "Nước dùng heo trắng béo.", tags: ["ramen"], stack: { max: 20 }, extra: { buff: { ref: "buff-xp-20-60m", seconds: 3600 } } },
  { key: "dish-spicy-ramen", kind: "dish", rarity: "rare", name: "Spicy Ramen", nameVi: "Ramen Cay", iconRef: "🌶️", desc: "Fiery chili broth.", descVi: "Ramen cay nồng.", tags: ["ramen"], stack: { max: 20 }, extra: { buff: { ref: "buff-combo-cap-2", seconds: 1200 } } },
  { key: "dish-kake-udon", kind: "dish", rarity: "common", name: "Kake Udon", nameVi: "Udon Kake", iconRef: "🍲", desc: "Plain hot udon.", descVi: "Udon nóng đơn giản.", tags: ["udon"], stack: { max: 20 }, extra: { buff: { ref: "buff-hint-free-1", seconds: 1200 } } },
  { key: "dish-tempura-udon", kind: "dish", rarity: "rare", name: "Tempura Udon", nameVi: "Udon Tempura", iconRef: "🍤", desc: "Shrimp tempura on udon.", descVi: "Udon với tempura tôm.", tags: ["udon"], stack: { max: 20 }, extra: { buff: { ref: "buff-xp-15-45m", seconds: 2700 } } },
  { key: "dish-kitsune-udon", kind: "dish", rarity: "rare", name: "Kitsune Udon", nameVi: "Udon Kitsune", iconRef: "🦊", desc: "Sweet fried tofu udon.", descVi: "Udon với đậu phụ ngọt.", tags: ["udon"], stack: { max: 20 }, extra: { buff: { ref: "buff-gacha-luck-001-30m", seconds: 1800 } } },
  { key: "dish-gyudon", kind: "dish", rarity: "common", name: "Gyūdon", nameVi: "Cơm Bò Gyudon", iconRef: "🍚", desc: "Beef bowl.", descVi: "Cơm thịt bò.", tags: ["donburi"], stack: { max: 20 }, extra: { buff: { ref: "buff-coin-10-30m", seconds: 1800 } } },
  { key: "dish-oyakodon", kind: "dish", rarity: "common", name: "Oyakodon", nameVi: "Cơm Gà Trứng", iconRef: "🍛", desc: "Chicken and egg bowl.", descVi: "Cơm gà và trứng.", tags: ["donburi"], stack: { max: 20 }, extra: { buff: { ref: "buff-xp-10-30m", seconds: 1800 } } },
  { key: "dish-katsudon", kind: "dish", rarity: "rare", name: "Katsudon", nameVi: "Cơm Katsu", iconRef: "🍱", desc: "Breaded pork cutlet bowl.", descVi: "Cơm sườn heo chiên xù.", tags: ["donburi"], stack: { max: 20 }, extra: { buff: { ref: "buff-xp-20-60m", seconds: 3600 } } },
  { key: "dish-sakura-bento", kind: "dish", rarity: "rare", name: "Sakura Bentō", nameVi: "Hộp Cơm Sakura", iconRef: "🌸", desc: "Seasonal spring bento.", descVi: "Bento mùa xuân.", tags: ["bento"], stack: { max: 20 }, extra: { buff: { ref: "buff-coin-15-45m", seconds: 2700 } } },
  { key: "dish-ninja-bento", kind: "dish", rarity: "rare", name: "Ninja Bentō", nameVi: "Hộp Cơm Ninja", iconRef: "🥷", desc: "Black sesame bentō.", descVi: "Bento đen.", tags: ["bento"], stack: { max: 20 }, extra: { buff: { ref: "buff-combo-cap-2", seconds: 1200 } } },
  { key: "dish-ekiben", kind: "dish", rarity: "common", name: "Ekiben", nameVi: "Cơm Ga Xe Lửa", iconRef: "🚅", desc: "Train station bentō.", descVi: "Bento nhà ga.", tags: ["bento"], stack: { max: 20 }, extra: { buff: { ref: "buff-xp-10-30m", seconds: 1800 } } },
  { key: "dish-kaiseki-bento", kind: "dish", rarity: "epic", name: "Kaiseki Bentō", nameVi: "Bento Kaiseki", iconRef: "🎎", desc: "Artful tasting bentō.", descVi: "Bento thẩm mỹ nhiều món.", tags: ["bento"], stack: { max: 20 }, extra: { buff: { ref: "buff-xp-25-60m", seconds: 3600 } } },
  { key: "dish-dorayaki", kind: "dish", rarity: "common", name: "Dorayaki", nameVi: "Bánh Dorayaki", iconRef: "🥞", desc: "Red bean pancake.", descVi: "Bánh kẹp đậu đỏ.", tags: ["dessert"], stack: { max: 20 }, extra: { buff: { ref: "buff-xp-05-20m", seconds: 1200 } } },
  { key: "dish-daifuku", kind: "dish", rarity: "common", name: "Daifuku", nameVi: "Bánh Daifuku", iconRef: "🍡", desc: "Soft mochi sweet.", descVi: "Bánh mochi nhân ngọt.", tags: ["dessert"], stack: { max: 20 }, extra: { buff: { ref: "buff-hint-free-1", seconds: 1200 } } },
  { key: "dish-mochi-ice", kind: "dish", rarity: "rare", name: "Mochi Ice Cream", nameVi: "Kem Mochi", iconRef: "🍨", desc: "Frozen mochi shell.", descVi: "Mochi vỏ kem.", tags: ["dessert"], stack: { max: 20 }, extra: { buff: { ref: "buff-gacha-luck-001-30m", seconds: 1800 } } },
  { key: "dish-wagashi", kind: "dish", rarity: "epic", name: "Wagashi", nameVi: "Bánh Wagashi", iconRef: "🌼", desc: "Delicate seasonal sweet.", descVi: "Bánh ngọt mùa tinh tế.", tags: ["dessert"], stack: { max: 20 }, extra: { buff: { ref: "buff-xp-30-60m", seconds: 3600 } } },
  { key: "dish-matcha-latte", kind: "dish", rarity: "common", name: "Matcha Latte", nameVi: "Matcha Latte", iconRef: "🧋", desc: "Foamed matcha.", descVi: "Matcha pha sữa đánh bọt.", tags: ["drink"], stack: { max: 20 }, extra: { buff: { ref: "buff-xp-10-30m", seconds: 1800 } } },
  { key: "dish-sake-warm", kind: "dish", rarity: "rare", name: "Warm Sake", nameVi: "Sake Nóng", iconRef: "🍶", desc: "Warming rice wine.", descVi: "Rượu gạo ấm.", tags: ["drink"], stack: { max: 20 }, extra: { buff: { ref: "buff-coin-15-45m", seconds: 2700 } } },
  { key: "dish-yuzu-soda", kind: "dish", rarity: "common", name: "Yuzu Soda", nameVi: "Yuzu Soda", iconRef: "🥤", desc: "Citrus fizz.", descVi: "Nước có gas cam quýt.", tags: ["drink"], stack: { max: 20 }, extra: { buff: { ref: "buff-hint-free-1", seconds: 1200 } } },
  { key: "dish-hanami-dango", kind: "dish", rarity: "epic", name: "Hanami Dango", nameVi: "Dango Hanami", iconRef: "🌸", desc: "Seasonal three-ball dango.", descVi: "Dango 3 viên mùa xuân.", tags: ["seasonal", "dessert"], stack: { max: 20 }, extra: { buff: { ref: "buff-xp-25-60m", seconds: 3600 } } },
  { key: "dish-nagashi-somen", kind: "dish", rarity: "rare", name: "Nagashi Sōmen", nameVi: "Sōmen Trôi", iconRef: "💧", desc: "Chilled summer noodles.", descVi: "Mì lạnh mùa hè.", tags: ["seasonal"], stack: { max: 20 }, extra: { buff: { ref: "buff-coin-20-60m", seconds: 3600 } } },
  { key: "dish-oshogatsu-osechi", kind: "dish", rarity: "legendary", name: "Oshogatsu Osechi", nameVi: "Osechi Năm Mới", iconRef: "🎍", desc: "New-year feast box.", descVi: "Hộp cỗ Tết.", tags: ["seasonal", "bento"], stack: { max: 10 }, extra: { buff: { ref: "buff-xp-40-120m", seconds: 7200 } } }
];
const COOKING_RECIPES = [
  { id: "rec-shoyu-ramen", nameVi: "Shoyu Ramen", dishKey: "dish-shoyu-ramen", ingredients: [{ itemKey: "ing-noodle", n: 1 }, { itemKey: "ing-soy", n: 1 }, { itemKey: "ing-scallion", n: 1 }], minigame: "timing", difficulty: 1, buff: { effectRef: "buff-xp-10-30m", seconds: 1800 } },
  { id: "rec-miso-ramen", nameVi: "Miso Ramen", dishKey: "dish-miso-ramen", ingredients: [{ itemKey: "ing-noodle", n: 1 }, { itemKey: "ing-miso", n: 1 }, { itemKey: "ing-egg", n: 1 }], minigame: "timing", difficulty: 1, buff: { effectRef: "buff-coin-10-30m", seconds: 1800 } },
  { id: "rec-tonkotsu", nameVi: "Tonkotsu", dishKey: "dish-tonkotsu", ingredients: [{ itemKey: "ing-noodle", n: 1 }, { itemKey: "ing-pork", n: 2 }, { itemKey: "ing-nori", n: 1 }, { itemKey: "ing-egg", n: 1 }], minigame: "heat", difficulty: 2, buff: { effectRef: "buff-xp-20-60m", seconds: 3600 } },
  { id: "rec-spicy-ramen", nameVi: "Ramen Cay", dishKey: "dish-spicy-ramen", ingredients: [{ itemKey: "ing-noodle", n: 1 }, { itemKey: "ing-chili", n: 3 }, { itemKey: "ing-miso", n: 1 }], minigame: "heat", difficulty: 2, buff: { effectRef: "buff-combo-cap-2", seconds: 1200 } },
  { id: "rec-kake-udon", nameVi: "Udon Kake", dishKey: "dish-kake-udon", ingredients: [{ itemKey: "ing-udon", n: 1 }, { itemKey: "ing-kombu", n: 1 }], minigame: "timing", difficulty: 1, buff: { effectRef: "buff-hint-free-1", seconds: 1200 } },
  { id: "rec-tempura-udon", nameVi: "Udon Tempura", dishKey: "dish-tempura-udon", ingredients: [{ itemKey: "ing-udon", n: 1 }, { itemKey: "ing-kombu", n: 1 }, { itemKey: "ing-fish", n: 1 }], minigame: "heat", difficulty: 2, buff: { effectRef: "buff-xp-15-45m", seconds: 2700 } },
  { id: "rec-kitsune-udon", nameVi: "Udon Kitsune", dishKey: "dish-kitsune-udon", ingredients: [{ itemKey: "ing-udon", n: 1 }, { itemKey: "ing-soy", n: 1 }, { itemKey: "ing-sugar", n: 1 }], minigame: "mix", difficulty: 1, buff: { effectRef: "buff-gacha-luck-001-30m", seconds: 1800 } },
  { id: "rec-gyudon", nameVi: "Cơm Bò Gyudon", dishKey: "dish-gyudon", ingredients: [{ itemKey: "ing-rice", n: 1 }, { itemKey: "ing-pork", n: 1 }, { itemKey: "ing-soy", n: 1 }], minigame: "timing", difficulty: 1, buff: { effectRef: "buff-coin-10-30m", seconds: 1800 } },
  { id: "rec-oyakodon", nameVi: "Cơm Gà Trứng", dishKey: "dish-oyakodon", ingredients: [{ itemKey: "ing-rice", n: 1 }, { itemKey: "ing-egg", n: 2 }, { itemKey: "ing-mirin", n: 1 }], minigame: "timing", difficulty: 1, buff: { effectRef: "buff-xp-10-30m", seconds: 1800 } },
  { id: "rec-katsudon", nameVi: "Cơm Katsu", dishKey: "dish-katsudon", ingredients: [{ itemKey: "ing-rice", n: 1 }, { itemKey: "ing-pork", n: 2 }, { itemKey: "ing-egg", n: 1 }], minigame: "heat", difficulty: 2, buff: { effectRef: "buff-xp-20-60m", seconds: 3600 } },
  { id: "rec-sakura-bento", nameVi: "Hộp Cơm Sakura", dishKey: "dish-sakura-bento", ingredients: [{ itemKey: "ing-rice", n: 1 }, { itemKey: "ing-fish", n: 1 }, { itemKey: "ing-nori", n: 1 }], minigame: "mix", difficulty: 2, buff: { effectRef: "buff-coin-15-45m", seconds: 2700 } },
  { id: "rec-ninja-bento", nameVi: "Hộp Cơm Ninja", dishKey: "dish-ninja-bento", ingredients: [{ itemKey: "ing-rice", n: 1 }, { itemKey: "ing-fish", n: 1 }, { itemKey: "ing-nori", n: 2 }, { itemKey: "ing-chili", n: 1 }], minigame: "mix", difficulty: 2, buff: { effectRef: "buff-combo-cap-2", seconds: 1200 } },
  { id: "rec-ekiben", nameVi: "Cơm Ga Xe Lửa", dishKey: "dish-ekiben", ingredients: [{ itemKey: "ing-rice", n: 1 }, { itemKey: "ing-egg", n: 1 }, { itemKey: "ing-scallion", n: 1 }], minigame: "timing", difficulty: 1, buff: { effectRef: "buff-xp-10-30m", seconds: 1800 } },
  { id: "rec-kaiseki-bento", nameVi: "Bento Kaiseki", dishKey: "dish-kaiseki-bento", ingredients: [{ itemKey: "ing-rice", n: 1 }, { itemKey: "ing-fish", n: 1 }, { itemKey: "ing-pork", n: 1 }, { itemKey: "ing-nori", n: 1 }, { itemKey: "ing-matcha", n: 1 }], minigame: "heat", difficulty: 3, buff: { effectRef: "buff-xp-25-60m", seconds: 3600 } },
  { id: "rec-dorayaki", nameVi: "Bánh Dorayaki", dishKey: "dish-dorayaki", ingredients: [{ itemKey: "ing-adzuki", n: 1 }, { itemKey: "ing-egg", n: 1 }, { itemKey: "ing-sugar", n: 1 }], minigame: "mix", difficulty: 1, buff: { effectRef: "buff-xp-05-20m", seconds: 1200 } },
  { id: "rec-daifuku", nameVi: "Bánh Daifuku", dishKey: "dish-daifuku", ingredients: [{ itemKey: "ing-mochi", n: 1 }, { itemKey: "ing-adzuki", n: 1 }], minigame: "mix", difficulty: 1, buff: { effectRef: "buff-hint-free-1", seconds: 1200 } },
  { id: "rec-mochi-ice", nameVi: "Kem Mochi", dishKey: "dish-mochi-ice", ingredients: [{ itemKey: "ing-mochi", n: 2 }, { itemKey: "ing-matcha", n: 1 }], minigame: "timing", difficulty: 2, buff: { effectRef: "buff-gacha-luck-001-30m", seconds: 1800 } },
  { id: "rec-wagashi", nameVi: "Bánh Wagashi", dishKey: "dish-wagashi", ingredients: [{ itemKey: "ing-adzuki", n: 1 }, { itemKey: "ing-matcha", n: 1 }, { itemKey: "ing-sugar", n: 1 }, { itemKey: "ing-mochi", n: 1 }], minigame: "mix", difficulty: 3, buff: { effectRef: "buff-xp-30-60m", seconds: 3600 } },
  { id: "rec-matcha-latte", nameVi: "Matcha Latte", dishKey: "dish-matcha-latte", ingredients: [{ itemKey: "ing-matcha", n: 1 }, { itemKey: "ing-sugar", n: 1 }], minigame: "mix", difficulty: 1, buff: { effectRef: "buff-xp-10-30m", seconds: 1800 } },
  { id: "rec-sake-warm", nameVi: "Sake Nóng", dishKey: "dish-sake-warm", ingredients: [{ itemKey: "ing-rice", n: 2 }, { itemKey: "ing-mirin", n: 1 }], minigame: "heat", difficulty: 2, buff: { effectRef: "buff-coin-15-45m", seconds: 2700 } },
  { id: "rec-yuzu-soda", nameVi: "Yuzu Soda", dishKey: "dish-yuzu-soda", ingredients: [{ itemKey: "ing-sugar", n: 1 }, { itemKey: "ing-tea-leaf", n: 1 }], minigame: "mix", difficulty: 1, buff: { effectRef: "buff-hint-free-1", seconds: 1200 } },
  { id: "rec-hanami-dango", nameVi: "Dango Hanami", dishKey: "dish-hanami-dango", ingredients: [{ itemKey: "ing-mochi", n: 3 }, { itemKey: "ing-sugar", n: 1 }, { itemKey: "ing-matcha", n: 1 }], minigame: "mix", difficulty: 3, buff: { effectRef: "buff-xp-25-60m", seconds: 3600 } },
  { id: "rec-nagashi-somen", nameVi: "Sōmen Trôi", dishKey: "dish-nagashi-somen", ingredients: [{ itemKey: "ing-noodle", n: 2 }, { itemKey: "ing-kombu", n: 1 }, { itemKey: "ing-soy", n: 1 }], minigame: "timing", difficulty: 2, buff: { effectRef: "buff-coin-20-60m", seconds: 3600 } },
  { id: "rec-osechi", nameVi: "Osechi Năm Mới", dishKey: "dish-oshogatsu-osechi", ingredients: [{ itemKey: "ing-rice", n: 2 }, { itemKey: "ing-fish", n: 2 }, { itemKey: "ing-pork", n: 1 }, { itemKey: "ing-adzuki", n: 1 }, { itemKey: "ing-nori", n: 1 }, { itemKey: "ing-kombu", n: 1 }], minigame: "mix", difficulty: 4, buff: { effectRef: "buff-xp-40-120m", seconds: 7200 } }
];
function findRecipe(id) {
  return COOKING_RECIPES.find((r) => r.id === id) || null;
}
function findDish(key) {
  return DISH_ITEMS.find((d) => d.key === key) || null;
}
function canCookWith(inventoryCounts = {}, recipeId) {
  const r = findRecipe(recipeId);
  if (!r) return false;
  return r.ingredients.every(({ itemKey, n }) => (inventoryCounts[itemKey] || 0) >= n);
}
function canCook(state, recipeId) {
  return canCookWith(state.ingredients || {}, recipeId);
}
function cook(state, recipeId, opts = {}) {
  var _a;
  const r = findRecipe(recipeId);
  if (!r) return { ok: false, reason: "recipe-not-found" };
  if (!canCook(state, recipeId)) return { ok: false, reason: "missing-ingredients" };
  const dish = findDish(r.dishKey);
  if (!dish) return { ok: false, reason: "dish-def-missing" };
  const rngFn = typeof opts.rng === "function" ? opts.rng : Math.random;
  const roll = rngFn();
  const skill = Math.max(0, Math.min(1, (_a = opts.skill) != null ? _a : 0.5));
  const baseDifficulty = Math.max(1, r.difficulty);
  const threshold = 0.5 + skill * 0.3 - baseDifficulty * 0.05;
  const quality = roll >= threshold ? "perfect" : roll >= threshold - 0.25 ? "good" : "ok";
  const deducted = {};
  for (const { itemKey, n } of r.ingredients) deducted[itemKey] = -n;
  return {
    ok: true,
    dish,
    deductedIngredients: deducted,
    quality,
    buffRef: r.buff.effectRef,
    buffSeconds: r.buff.seconds * (quality === "perfect" ? 1.2 : quality === "good" ? 1 : 0.85)
  };
}
const RAMEN_RECIPE_IDS = ["rec-shoyu-ramen", "rec-miso-ramen", "rec-tonkotsu", "rec-spicy-ramen"];
function RamenShopPage() {
  const coins = useLearningStore((s) => s.coins || 0);
  const spendCoins = useLearningStore((s) => s.spendCoins);
  const addXp = useLearningStore((s) => s.addXp);
  const addCoinsLS = useLearningStore((s) => s.addCoins);
  const cookingSlice = useTakaraStore((s) => s.cookingSlice);
  const applyCookedDeductions = useTakaraStore((s) => s.applyCookedDeductions);
  useTakaraStore((s) => s.applyBuff);
  const addDish = useTakaraStore((s) => s.addDish);
  const addIngredient = useTakaraStore((s) => s.addIngredient);
  const [reward, setReward] = reactExports.useState(null);
  const [cookFlash, setCookFlash] = reactExports.useState(null);
  reactExports.useEffect(() => {
    installAudioPrewarm();
  }, []);
  const ramenRecipes = reactExports.useMemo(() => COOKING_RECIPES.filter((r) => RAMEN_RECIPE_IDS.includes(r.id)), []);
  const canCookRecipe = reactExports.useCallback((r) => r.ingredients.every(
    ({ itemKey, n }) => (cookingSlice.ingredients[itemKey] || 0) >= n
  ), [cookingSlice]);
  const runCook = reactExports.useCallback((recipe) => {
    const state = { ingredients: cookingSlice.ingredients };
    const result = cook(state, recipe.id);
    if (!result.ok) {
      try {
        playSfx(getAudioBus(), "error");
      } catch (e) {
      }
      return;
    }
    applyCookedDeductions(result.deductedIngredients);
    addDish(result.dish.key, 1);
    const baseTip = result.quality === "perfect" ? 80 : result.quality === "good" ? 45 : 20;
    const tip = Math.round(baseTip * 30);
    if (addCoinsLS) addCoinsLS(tip, "ramen-cook");
    if (addXp) addXp(Math.round(tip / 5));
    try {
      playSfx(getAudioBus(), "pan-sizzle");
    } catch (e) {
    }
    setCookFlash(result.quality);
    setReward({
      rarity: result.dish.rarity,
      iconRef: result.dish.iconRef,
      nameVi: `${result.dish.nameVi} · ${result.quality} · +${tip} 🪙`,
      name: result.dish.name
    });
  }, [cookingSlice, applyCookedDeductions, addDish, addCoinsLS, addXp]);
  const buyIngredient = reactExports.useCallback((ing) => {
    if (!spendCoins || !addIngredient) return;
    const ok = spendCoins(ing.price, `ramen:ingredient:${ing.key}`);
    if (!ok) {
      try {
        playSfx(getAudioBus(), "error");
      } catch (e) {
      }
      return;
    }
    addIngredient(ing.key, 1);
    try {
      playSfx(getAudioBus(), "stamp-buy");
    } catch (e) {
    }
  }, [spendCoins, addIngredient]);
  const requiredIngredientKeys = reactExports.useMemo(() => {
    const set = /* @__PURE__ */ new Set();
    for (const r of ramenRecipes) for (const ing of r.ingredients) set.add(ing.itemKey);
    return [...set];
  }, [ramenRecipes]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-ramen-remaster", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "n4-ramen-remaster__header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "🍜 Quán Ramen Yokocho" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Nấu ramen lấy tip + buff. 4 công thức kinh điển · nguyên liệu mua tại quầy." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ramen-remaster__wallet", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "🪙 ",
          coins.toLocaleString("vi-VN")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cooking", className: "n4-ramen-remaster__cooking-link", children: "Bếp đầy đủ →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ramen-remaster__hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ramen-remaster__hero-fallback", children: "🍜 Đang dựng quầy…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SubgameCanvas, { cameraPos: [0, 2, 4], fov: 48, backgroundColor: "#160b06", envPreset: "sunset", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RamenCounter, {}) }) }),
      cookFlash && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-ramen-remaster__flash is-${cookFlash}`, children: [
        cookFlash === "perfect" ? "PERFECT!" : cookFlash === "good" ? "Good" : "OK",
        /* @__PURE__ */ jsxRuntimeExports.jsx(SparklePing, { duration: 600, onDone: () => setCookFlash(null) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-ramen-remaster__section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Công thức ramen" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ramen-remaster__recipes", children: ramenRecipes.map((r) => {
        const dish = findDish(r.dishKey);
        const ready = canCookRecipe(r);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: (dish == null ? void 0 : dish.rarity) || "common", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ramen-remaster__card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ramen-remaster__card-icon", children: (dish == null ? void 0 : dish.iconRef) || "🍜" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ramen-remaster__card-name", children: r.nameVi }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ramen-remaster__card-rarity", children: RARITY_LABELS_VI[(dish == null ? void 0 : dish.rarity) || "common"] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "n4-ramen-remaster__ings", children: r.ingredients.map((i) => {
            const meta = INGREDIENT_ITEMS.find((x) => x.key === i.itemKey);
            const have = cookingSlice.ingredients[i.itemKey] || 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: have >= i.n ? "is-ok" : "is-missing", children: [
              meta == null ? void 0 : meta.iconRef,
              " ",
              meta == null ? void 0 : meta.nameVi,
              " ×",
              i.n,
              " (",
              have,
              ")"
            ] }, i.itemKey);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ramen-remaster__card-buff", children: [
            "Hiệu ứng: ",
            getCookingBuffDescription(r.buff.effectRef) || r.buff.effectRef
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", disabled: !ready, onClick: () => runCook(r), children: ready ? "🔥 Nấu" : "Thiếu nguyên liệu" })
        ] }) }, r.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-ramen-remaster__section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Mua nguyên liệu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ramen-remaster__pantry", children: requiredIngredientKeys.map((key) => {
        const ing = INGREDIENT_ITEMS.find((x) => x.key === key);
        if (!ing) return null;
        const have = cookingSlice.ingredients[ing.key] || 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: ing.rarity, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ramen-remaster__ing", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ramen-remaster__ing-icon", children: ing.iconRef }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-ramen-remaster__ing-name", children: ing.nameVi }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-ramen-remaster__ing-count", children: [
            "Có: ",
            have
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => buyIngredient(ing), disabled: coins < (ing.price || 10), children: [
            "Mua 🪙 ",
            ing.price || 10
          ] })
        ] }) }, ing.key);
      }) })
    ] }),
    reward && /* @__PURE__ */ jsxRuntimeExports.jsx(RewardPop, { item: reward, onDone: () => setReward(null) })
  ] });
}
export {
  RamenShopPage as default
};
