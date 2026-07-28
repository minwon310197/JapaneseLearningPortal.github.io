import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { d as useLearningStore, D as useManagedTimeout, c8 as NekoCafeScene, c9 as AJL_CATS, bn as RarityAura, c2 as RARITY_LABELS_VI, b8 as SparklePing } from "./feature-3d-ClP3ARU5.js";
import { i as installAudioPrewarm, p as playSfx, g as getAudioBus } from "./sfx-catalog-BX24DhjS.js";
import { r as Heart, p as Coins } from "./vendor-icons-DHCyxOF-.js";
import { m as motion, A as AnimatePresence } from "./vendor-motion-CoQCRLnb.js";
import { L as Link } from "./vendor-router-BTJacUKt.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
const PET_DEFS = [
  // ── Cats (4) ──
  { key: "pet-cat-momo", nameVi: "Momo", species: "cat", rarity: "common", abilities: ["ab-cat-purr", "ab-active-soft-paw"], roamingBehavior: "follow", outfitSlots: ["hat", "collar"] },
  { key: "pet-cat-mochi", nameVi: "Mochi", species: "cat", rarity: "rare", abilities: ["ab-cat-lucky", "ab-active-coin-rain"], roamingBehavior: "village", outfitSlots: ["hat", "collar", "cape"] },
  { key: "pet-cat-kuro", nameVi: "Kuro", species: "cat", rarity: "epic", abilities: ["ab-cat-night", "ab-active-shadow-leap"], roamingBehavior: "shrine", outfitSlots: ["hat", "cape"] },
  { key: "pet-cat-hime", nameVi: "Hime", species: "cat", rarity: "legendary", abilities: ["ab-cat-royal", "ab-active-royal-gift"], roamingBehavior: "house", outfitSlots: ["hat", "collar", "cape"] },
  // ── Foxes / Kitsune (4) ──
  { key: "pet-fox-kori", nameVi: "Kori", species: "fox", rarity: "rare", abilities: ["ab-fox-inari", "ab-active-rice-blessing"], roamingBehavior: "shrine", outfitSlots: ["collar"] },
  { key: "pet-fox-aki", nameVi: "Aki", species: "fox", rarity: "epic", abilities: ["ab-fox-wily", "ab-active-phantom-step"], roamingBehavior: "forest", outfitSlots: ["hat", "cape"] },
  { key: "pet-fox-yuki", nameVi: "Yuki", species: "fox", rarity: "epic", abilities: ["ab-fox-winter", "ab-active-snow-cloak"], roamingBehavior: "forest", outfitSlots: ["cape"] },
  { key: "pet-fox-nine", nameVi: "Kyūbi", species: "fox", rarity: "legendary", abilities: ["ab-fox-nine-tails", "ab-active-fox-fire"], roamingBehavior: "shrine", outfitSlots: ["hat", "collar", "cape"] },
  // ── Tanuki (4) ──
  { key: "pet-tanuki-taro", nameVi: "Tarō", species: "tanuki", rarity: "common", abilities: ["ab-tanuki-belly", "ab-active-barrel-roll"], roamingBehavior: "follow", outfitSlots: ["hat"] },
  { key: "pet-tanuki-pon", nameVi: "Pon-chan", species: "tanuki", rarity: "rare", abilities: ["ab-tanuki-merchant", "ab-active-shop-deal"], roamingBehavior: "village", outfitSlots: ["hat", "collar"] },
  { key: "pet-tanuki-moko", nameVi: "Moko", species: "tanuki", rarity: "epic", abilities: ["ab-tanuki-shape", "ab-active-disguise"], roamingBehavior: "forest", outfitSlots: ["cape"] },
  { key: "pet-tanuki-bake", nameVi: "Bakemono", species: "tanuki", rarity: "legendary", abilities: ["ab-tanuki-moon", "ab-active-moon-song"], roamingBehavior: "shrine", outfitSlots: ["hat", "collar", "cape"] },
  // ── Inu (3) ──
  { key: "pet-inu-shiba", nameVi: "Shiba", species: "inu", rarity: "common", abilities: ["ab-inu-loyal", "ab-active-bark-rally"], roamingBehavior: "follow", outfitSlots: ["collar"] },
  { key: "pet-inu-akita", nameVi: "Akita", species: "inu", rarity: "rare", abilities: ["ab-inu-guardian", "ab-active-steady-watch"], roamingBehavior: "village", outfitSlots: ["hat", "collar"] },
  { key: "pet-inu-komainu", nameVi: "Komainu", species: "inu", rarity: "epic", abilities: ["ab-inu-temple", "ab-active-lion-roar"], roamingBehavior: "shrine", outfitSlots: ["cape"] },
  // ── Birds (4) ──
  { key: "pet-bird-tsubame", nameVi: "Tsubame", species: "bird", rarity: "common", abilities: ["ab-bird-swift", "ab-active-wing-dash"], roamingBehavior: "follow", outfitSlots: ["collar"] },
  { key: "pet-bird-tsuru", nameVi: "Tsuru", species: "bird", rarity: "rare", abilities: ["ab-bird-longevity", "ab-active-graceful-glide"], roamingBehavior: "house", outfitSlots: ["cape"] },
  { key: "pet-bird-karasu", nameVi: "Karasu", species: "bird", rarity: "epic", abilities: ["ab-bird-trickster", "ab-active-raven-call"], roamingBehavior: "forest", outfitSlots: ["hat"] },
  { key: "pet-bird-phoenix", nameVi: "Hō-ō", species: "bird", rarity: "legendary", abilities: ["ab-bird-phoenix", "ab-active-rebirth"], roamingBehavior: "shrine", outfitSlots: ["hat", "collar", "cape"] },
  // ── Spirits (5) ──
  { key: "pet-spirit-kodama", nameVi: "Kodama", species: "spirit", rarity: "common", abilities: ["ab-spirit-forest", "ab-active-tree-whisper"], roamingBehavior: "forest", outfitSlots: ["hat"] },
  { key: "pet-spirit-yukionna", nameVi: "Yuki-onna", species: "spirit", rarity: "rare", abilities: ["ab-spirit-snow", "ab-active-blizzard-veil"], roamingBehavior: "shrine", outfitSlots: ["cape"] },
  { key: "pet-spirit-oni", nameVi: "Koni", species: "spirit", rarity: "epic", abilities: ["ab-spirit-rage", "ab-active-iron-club"], roamingBehavior: "forest", outfitSlots: ["hat", "cape"] },
  { key: "pet-spirit-tengu", nameVi: "Tengu", species: "spirit", rarity: "epic", abilities: ["ab-spirit-wind", "ab-active-tengu-fan"], roamingBehavior: "shrine", outfitSlots: ["hat", "cape"] },
  { key: "pet-spirit-dragon", nameVi: "Ryujin", species: "spirit", rarity: "legendary", abilities: ["ab-spirit-dragon", "ab-active-storm-call"], roamingBehavior: "shrine", outfitSlots: ["hat", "collar", "cape"] }
];
function NekoCafePage() {
  const coins = useLearningStore((s) => s.coins || 0);
  const ownedCats = useLearningStore((s) => s.ownedCats || []);
  const buyCat = useLearningStore((s) => s.buyCat);
  const [pettingCatId, setPettingCatId] = reactExports.useState(null);
  const [notice, setNotice] = reactExports.useState("");
  const petTimeoutRef = reactExports.useRef(null);
  const { scheduleTimeout, clearManagedTimeout } = useManagedTimeout();
  const ownedSet = reactExports.useMemo(() => new Set(ownedCats), [ownedCats]);
  const catsInCatalog = reactExports.useMemo(() => PET_DEFS.filter((p) => p.species === "cat"), []);
  reactExports.useEffect(() => {
    installAudioPrewarm();
  }, []);
  const handleAdopt = reactExports.useCallback((cat) => {
    if (!cat) return;
    const ok = buyCat(cat);
    if (ok) {
      try {
        playSfx(getAudioBus(), "level-up");
      } catch (e) {
      }
    } else {
      try {
        playSfx(getAudioBus(), "error");
      } catch (e) {
      }
    }
    setNotice(ok ? `Bạn đã nhận nuôi ${cat.name}.` : "Không đủ xu để nhận nuôi mèo này.");
  }, [buyCat]);
  const handlePet = reactExports.useCallback((catId) => {
    if (!ownedSet.has(catId)) return;
    clearManagedTimeout(petTimeoutRef.current);
    setPettingCatId(catId);
    setNotice("Neko đang rất vui.");
    petTimeoutRef.current = scheduleTimeout(() => {
      petTimeoutRef.current = null;
      setPettingCatId((cur) => cur === catId ? null : cur);
    }, 850);
  }, [clearManagedTimeout, ownedSet, scheduleTimeout]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter", style: { padding: "1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-card", style: { padding: "1rem", marginBottom: 12 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: { margin: 0, display: "inline-flex", alignItems: "center", gap: 8, fontSize: "1.4rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 22 }),
          " Quán mèo"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NekoCafeScene, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "inline-flex", gap: 8, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-chip", children: [
            "Mèo: ",
            ownedCats.length,
            "/",
            AJL_CATS.length
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-chip", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { size: 14 }),
            " ",
            coins.toLocaleString("vi-VN")
          ] })
        ] })
      ] }),
      notice && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 8, color: "var(--n4-text-dim)", fontSize: ".9rem" }, children: notice })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-neko-remaster__showcase", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-neko-remaster__showcase-head", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "🐾 Mèo Takara · bộ sưu tập mở rộng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bốn mèo đặc biệt chỉ có trong Gacha — gom về để đồng hành trong thế giới 3D." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-neko-remaster__showcase-grid", children: catsInCatalog.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: p.rarity, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-neko-remaster__showcase-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-neko-remaster__showcase-icon", children: "🐱" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-neko-remaster__showcase-name", children: p.nameVi }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-neko-remaster__showcase-rarity", children: RARITY_LABELS_VI[p.rarity] })
      ] }) }, p.key)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gacha", className: "n4-neko-remaster__gacha-link", children: "🎏 Rút Gacha để gặp các bạn mèo" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }, children: AJL_CATS.map((cat) => {
      var _a, _b, _c;
      const owned = ownedSet.has(cat.id);
      const canAdopt = coins >= cat.cost && !owned;
      const isPetting = pettingCatId === cat.id;
      const effectVal = ((_a = cat.effect) == null ? void 0 : _a.value) || 0;
      const rarity = effectVal >= 10 ? "legendary" : effectVal >= 6 ? "epic" : effectVal >= 3 ? "rare" : "common";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(RarityAura, { rarity: owned ? rarity : "common", animated: owned && rarity === "legendary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          whileHover: { y: -3 },
          className: "n4-panel",
          style: {
            padding: "1rem",
            cursor: owned ? "pointer" : "default",
            borderColor: owned ? "var(--n4-accent)" : "var(--n4-border)"
          },
          onClick: () => handlePet(cat.id),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", height: 74, marginBottom: 8, display: "grid", placeItems: "center" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  animate: isPetting ? { y: [-8, 0, -8], scale: [1, 1.1, 1] } : { y: 0, scale: 1 },
                  transition: { duration: 0.7 },
                  style: { fontSize: "3rem" },
                  children: cat.icon
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isPetting && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  initial: { opacity: 0, y: 0 },
                  animate: { opacity: 1, y: -15 },
                  exit: { opacity: 0 },
                  style: { position: "absolute", right: 18, top: 6, fontSize: "1.2rem" },
                  children: "❤️"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 700 }, children: cat.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-dim)", fontSize: ".84rem", marginTop: 4, minHeight: 36 }, children: cat.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "var(--n4-success)", fontSize: ".82rem" }, children: [
                "+",
                ((_b = cat.effect) == null ? void 0 : _b.value) || 0,
                "% ",
                ((_c = cat.effect) == null ? void 0 : _c.type) || "bonus"
              ] }),
              owned ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: ".85rem", color: "var(--n4-accent)" }, children: "Nhấp để vuốt ve" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `n4-btn ${canAdopt ? "n4-btn-primary" : ""}`,
                  onClick: (e) => {
                    e.stopPropagation();
                    handleAdopt(cat);
                  },
                  disabled: !canAdopt,
                  style: { minHeight: 38 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { size: 14, style: { marginRight: 4 } }),
                    cat.cost
                  ]
                }
              )
            ] }),
            isPetting && /* @__PURE__ */ jsxRuntimeExports.jsx(SparklePing, { duration: 600 })
          ]
        }
      ) }, cat.id);
    }) })
  ] });
}
export {
  NekoCafePage as default
};
