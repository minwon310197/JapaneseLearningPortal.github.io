import { u as useShallow, r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { d as useLearningStore, be as Room3DScene, bf as ROOM_GRID, bg as ROOM_MAX_BONUS, bh as ROOM_BONUS_PER_ITEM } from "./feature-3d-ClP3ARU5.js";
import { a as EMPTY_ARR, E as EMPTY_OBJ } from "./empty-Bvm-mx50.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
const ROOM_ITEMS = [
  // Desk items
  { id: "room-bookshelf", name: "本棚 Bookshelf", icon: "📚", price: 150, category: "desk" },
  { id: "room-vase", name: "花瓶 Vase", icon: "🏺", price: 100, category: "desk" },
  { id: "room-clock", name: "時計 Clock", icon: "🕐", price: 120, category: "desk" },
  { id: "room-lamp", name: "ランプ Lamp", icon: "💡", price: 100, category: "desk" },
  { id: "room-pencil", name: "鉛筆立て Pencil", icon: "✏️", price: 80, category: "desk" },
  { id: "room-globe", name: "地球儀 Globe", icon: "🌍", price: 200, category: "desk" },
  // Wall items
  { id: "room-scroll", name: "掛け軸 Scroll", icon: "📜", price: 180, category: "wall" },
  { id: "room-calendar", name: "カレンダー", icon: "📅", price: 100, category: "wall" },
  { id: "room-map", name: "地図 Map", icon: "🗺️", price: 150, category: "wall" },
  { id: "room-photo", name: "写真 Photo", icon: "🖼️", price: 120, category: "wall" },
  { id: "room-poster", name: "ポスター Poster", icon: "🎨", price: 130, category: "wall" },
  // Floor items
  { id: "room-tatami", name: "畳 Tatami", icon: "🟫", price: 100, category: "floor" },
  { id: "room-carpet", name: "カーペット", icon: "🟥", price: 120, category: "floor" },
  { id: "room-plant", name: "植物 Plant", icon: "🌿", price: 100, category: "floor" },
  { id: "room-cushion", name: "座布団 Cushion", icon: "🟤", price: 80, category: "floor" },
  // Special items
  { id: "room-torii", name: "鳥居 Mini Torii", icon: "⛩️", price: 350, category: "special" },
  { id: "room-lantern", name: "提灯 Lantern", icon: "🏮", price: 300, category: "special" },
  { id: "room-maneki", name: "招き猫 Statue", icon: "🐱", price: 250, category: "special" },
  { id: "room-windchime", name: "風鈴 Wind Chime", icon: "🎐", price: 280, category: "special" },
  { id: "room-bonsai", name: "盆栽 Bonsai", icon: "🌳", price: 400, category: "special" },
  { id: "room-katana", name: "刀 Katana Stand", icon: "⚔️", price: 500, category: "special" },
  { id: "room-taiko", name: "太鼓 Taiko Drum", icon: "🥁", price: 450, category: "special" },
  { id: "room-origami", name: "折り紙 Origami", icon: "🪭", price: 150, category: "special" },
  { id: "room-daruma", name: "だるま Daruma", icon: "🎯", price: 200, category: "special" },
  { id: "room-fan", name: "扇子 Fan", icon: "🪭", price: 180, category: "special" }
];
function getRoomItemById(id) {
  return ROOM_ITEMS.find((i) => i.id === id) || null;
}
function StudyRoomPage() {
  const { coins, roomItems, ownedRoomItems, placeRoomItem, removeRoomItem, purchaseRoomItem } = useLearningStore(useShallow((s) => ({
    coins: s.coins,
    roomItems: s.roomItems || EMPTY_OBJ,
    ownedRoomItems: s.ownedRoomItems || EMPTY_ARR,
    placeRoomItem: s.placeRoomItem,
    removeRoomItem: s.removeRoomItem,
    purchaseRoomItem: s.purchaseRoomItem
  })));
  const [selectedSlot, setSelectedSlot] = reactExports.useState(null);
  const [shopTab, setShopTab] = reactExports.useState("desk");
  const placedCount = Object.keys(roomItems).length;
  const currentBonus = Math.min(ROOM_MAX_BONUS, placedCount * ROOM_BONUS_PER_ITEM);
  const totalSlots = ROOM_GRID.cols * ROOM_GRID.rows;
  const handleBuy = (item) => {
    purchaseRoomItem(item.id, item.price);
  };
  const handlePlace = (itemId) => {
    if (selectedSlot === null) return;
    placeRoomItem(`slot-${selectedSlot}`, itemId);
    setSelectedSlot(null);
  };
  const handleRemove = (slotKey) => {
    removeRoomItem(slotKey);
  };
  const categories = ["desk", "wall", "floor", "special"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-room-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-matsuri-bg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-room-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "🏠 Phòng học" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-room-sub", children: "Trang trí phòng để nhận thêm tiền thưởng xu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-room-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "🪙 ",
          coins.toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-room-bonus", children: [
          "Thưởng: +",
          currentBonus,
          "% xu"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Đồ đạc: ",
          placedCount,
          "/",
          totalSlots
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Room3DScene, { roomItems }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-room-grid", style: { gridTemplateColumns: `repeat(${ROOM_GRID.cols}, 1fr)` }, children: Array.from({ length: totalSlots }, (_, i) => {
      const slotKey = `slot-${i}`;
      const placedItemId = roomItems[slotKey];
      const placedItem = placedItemId ? getRoomItemById(placedItemId) : null;
      const isSelected = selectedSlot === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `n4-room-slot ${placedItem ? "occupied" : "empty"} ${isSelected ? "selected" : ""}`,
          onClick: () => setSelectedSlot(i),
          onKeyDown: (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setSelectedSlot(i);
            }
          },
          role: "button",
          tabIndex: 0,
          children: placedItem ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-room-slot-icon", children: placedItem.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-room-slot-name", children: placedItem.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-room-slot-remove", onClick: (e) => {
              e.stopPropagation();
              handleRemove(slotKey);
            }, children: "✕" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-room-slot-empty", children: "+" })
        },
        i
      );
    }) }),
    selectedSlot !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-room-place-panel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
        "Đặt vật phẩm vào ô #",
        selectedSlot + 1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-room-owned-list", children: [
        ownedRoomItems.filter((id) => !Object.values(roomItems).includes(id)).map((id) => {
          const item = getRoomItemById(id);
          if (!item) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-room-owned-btn", onClick: () => handlePlace(id), children: [
            item.icon,
            " ",
            item.name
          ] }, id);
        }),
        ownedRoomItems.filter((id) => !Object.values(roomItems).includes(id)).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-room-empty-msg", children: "Không có đồ đạc chưa đặt. Hãy mua bên dưới!" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-room-shop", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🛍️ Cửa hàng nội thất" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-room-shop-tabs", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `n4-room-shop-tab ${shopTab === cat ? "active" : ""}`, onClick: () => setShopTab(cat), children: cat.charAt(0).toUpperCase() + cat.slice(1) }, cat)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-room-shop-items", children: ROOM_ITEMS.filter((item) => item.category === shopTab).map((item) => {
        const owned = ownedRoomItems.includes(item.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-room-shop-item ${owned ? "owned" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-room-shop-icon", children: item.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-room-shop-name", children: item.name }),
          owned ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-room-shop-owned", children: "✅ Đã sở hữu" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "n4-room-shop-buy", disabled: coins < item.price, onClick: () => handleBuy(item), children: [
            "🪙 ",
            item.price
          ] })
        ] }, item.id);
      }) })
    ] })
  ] });
}
export {
  StudyRoomPage as default
};
