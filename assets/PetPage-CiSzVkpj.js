import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useLearningStore, aN as PET_MAX_LEVEL, aO as PET_XP_PER_LEVEL, aP as PET_FOOD_OPTIONS } from "./feature-3d-jK3b4Iv-.js";
/* empty css                 */
import { P as Pet3DScene } from "./feature-3d-scenery-C3eSpuWG.js";
import "./vendor-three-Ba7Uoy0A.js";
import "./feature-3d-hud-Dp6hMoyV.js";
import "./vendor-supabase-DTEAj5J1.js";
const PETS = [
  { id: "shiba", name: "Shiba Inu", icon: "🐕", price: 500, coinBonus: 5, passiveDesc: "[Remastered] Khai thông tài lộc: +5% xu thu nhận khi chinh phục thử thách.", levelScale: 0.5, activeAbilityId: "ab-active-coin-rain" },
  { id: "maneki", name: "Maneki Neko", icon: "🐱", price: 600, coinBonus: 0, dailyClaimBonus: 10, passiveDesc: "[Remastered] Vẫy gọi vận may: Tăng 10% giá trị quà tặng điểm danh hằng ngày.", levelScale: 1, activeAbilityId: "ab-active-royal-gift" },
  { id: "tanuki", name: "Tanuki", icon: "🦝", price: 700, coinBonus: 0, freeGachaPull: true, passiveDesc: "[Remastered] Biến hóa rạng ngời: Nhận thêm 1 lượt quay Gacha miễn phí mỗi tuần.", levelScale: 0, activeAbilityId: "ab-active-storm-call" },
  { id: "koi", name: "Koi Fish", icon: "🐟", price: 400, coinBonus: 0, xpBonus: 5, passiveDesc: "[Remastered] Vượt vũ môn: +5% XP kinh nghiệm từ mọi nguồn năng lượng.", levelScale: 0.5, activeAbilityId: "ab-active-graceful-glide" },
  { id: "tsuru", name: "Tsuru (Crane)", icon: "🦢", price: 800, coinBonus: 0, shopDiscount: 10, passiveDesc: "[Remastered] Sải cánh thanh tao: Giảm 10% chi phí khi mua sắm tại Shop Matsuri.", levelScale: 1, activeAbilityId: "ab-active-snow-cloak" },
  { id: "kitsune", name: "Kitsune", icon: "🦊", price: 1e3, coinBonus: 0, gachaRateBonus: 15, passiveDesc: "[Remastered] Linh hồn huyền bí: +15% tỷ lệ xuất hiện vật phẩm Rare trong Gacha.", levelScale: 1.5, activeAbilityId: "ab-active-moon-song" },
  { id: "usagi", name: "Usagi (Rabbit)", icon: "🐰", price: 450, coinBonus: 0, comboWindowBonus: 10, passiveDesc: "[Remastered] Bước nhảy thời gian: Tăng 10% thời gian duy trì chuỗi Combo.", levelScale: 0.5, activeAbilityId: "ab-active-coin-rain" },
  { id: "ryu", name: "Ryū (Dragon)", icon: "🐉", price: 1500, coinBonus: 10, passiveDesc: "[Remastered] Hào quang Thiên Long: Cường hóa 10% tất cả các chỉ số thưởng và năng lượng.", levelScale: 1, activeAbilityId: "ab-active-storm-call" }
];
function getPetById(id) {
  return PETS.find((p) => p.id === id) || null;
}
function PetPage() {
  const { coins, pets, activePet, spendCoins, feedPet, switchPet, adoptPet, checkPetMood, vipExpiry } = useLearningStore(useShallow((s) => ({
    coins: s.coins,
    pets: s.pets || {},
    activePet: s.activePet,
    spendCoins: s.spendCoins,
    feedPet: s.feedPet,
    switchPet: s.switchPet,
    adoptPet: s.adoptPet,
    checkPetMood: s.checkPetMood,
    vipExpiry: s.vipExpiry
  })));
  const isVip = vipExpiry && Date.now() < vipExpiry;
  reactExports.useEffect(() => {
    checkPetMood();
  }, [checkPetMood]);
  const handleAdopt = (petDef) => {
    if (coins < petDef.price || pets[petDef.id]) return;
    if (!spendCoins(petDef.price, `adopt-${petDef.id}`)) return;
    adoptPet(petDef.id, { coinBonus: petDef.coinBonus || 0, name: petDef.name, icon: petDef.icon });
  };
  const activePetDef = activePet ? getPetById(activePet) : null;
  const activePetState = activePet ? pets[activePet] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pet-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-matsuri-bg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pet-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "🐾 ペット Thú cưng đồng hành" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-pet-sub", children: "Nhận nuôi, cho ăn và tăng cấp cho bạn đồng hành học tập của bạn" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pet-coins", children: [
        "🪙 ",
        coins.toLocaleString()
      ] })
    ] }),
    activePetState && activePetDef && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-pet-active mood-${activePetState.mood || "happy"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pet-aura-container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pet3DScene, { petId: activePet, mood: activePetState.mood || "happy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pet-aura-ring" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pet-active-info", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: 0 }, children: activePetDef.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-badge n4-badge-gold", style: { fontSize: "0.65rem" }, children: "Bản đồng hành" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pet-stats", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Lv.",
            activePetState.level,
            "/",
            PET_MAX_LEVEL
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "XP: ",
            activePetState.xp % PET_XP_PER_LEVEL,
            "/",
            PET_XP_PER_LEVEL
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-pet-mood-badge ${activePetState.mood || "happy"}`, children: activePetState.mood === "happy" ? "😊 Happy" : activePetState.mood === "sleepy" ? "😴 Sleepy" : "😿 Hungry" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pet-xp-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pet-xp-fill", style: { width: `${activePetState.xp % PET_XP_PER_LEVEL / PET_XP_PER_LEVEL * 100}%` } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-pet-happiness-bar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "❤️ ",
            activePetState.happiness,
            "/100"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pet-happiness-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pet-happiness-fill", style: { width: `${activePetState.happiness}%`, background: activePetState.happiness >= 60 ? "var(--n4-neon-green, #10b981)" : activePetState.happiness >= 30 ? "var(--n4-neon-gold, #fbbf24)" : "#ef4444" } }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "n4-pet-passive", style: { fontStyle: "italic", color: "var(--n4-accent)", marginTop: "8px" }, children: [
          "✨ ",
          activePetDef.passiveDesc
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pet-feed-actions", children: PET_FOOD_OPTIONS.map((food) => {
        const cost = isVip ? Math.round(food.cost * 0.5) : food.cost;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: "n4-pet-feed-btn",
            disabled: coins < cost,
            onClick: () => feedPet(activePet, food.id),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: food.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-pet-feed-cost", children: [
                "🪙 ",
                cost,
                isVip ? " (VIP)" : ""
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-pet-feed-gain", children: [
                "+",
                food.happinessGain,
                "❤️ +",
                food.xpGain,
                "XP"
              ] })
            ]
          },
          food.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-pet-roster-title", children: "🏠 Thú cưng hiện có" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-pet-roster", children: PETS.map((petDef) => {
      const owned = !!pets[petDef.id];
      const isActive = activePet === petDef.id;
      const petState = pets[petDef.id];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-pet-card ${owned ? "owned" : ""} ${isActive ? "active" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-pet-card-icon", children: petDef.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-pet-card-name", children: petDef.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-pet-card-bonus", children: petDef.passiveDesc }),
        owned ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-pet-card-level", children: [
            "Lv.",
            (petState == null ? void 0 : petState.level) || 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `n4-pet-card-btn ${isActive ? "active" : ""}`,
              onClick: () => switchPet(isActive ? null : petDef.id),
              children: isActive ? "✅ Active" : "Set Active"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: "n4-pet-card-btn buy",
            disabled: coins < petDef.price,
            onClick: () => handleAdopt(petDef),
            children: [
              "🪙 ",
              petDef.price
            ]
          }
        )
      ] }, petDef.id);
    }) })
  ] });
}
export {
  PetPage as default
};
