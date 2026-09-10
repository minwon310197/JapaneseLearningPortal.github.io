const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SceneContainerRenderer-eUmholUI.js","./vendor-react-BUL8WuXG.js","./WorldSurfaceContext-CUHCnPUQ.js","./feature-3d-B9k2WEUa.js","./vendor-three-DqkPfKji.js","./index-BEJSIlFS.js","./vendor-runtime-BbOs9S9B.js","./vendor-icons-D83cEu6Z.js","./vendor-router-Dx6RIovR.js","./vendor-supabase-DTEAj5J1.js","./index-BF-iHvWQ.css","./VisibilityPauseBinder-CQh7nPdw.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, r as reactExports } from "./vendor-react-BUL8WuXG.js";
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { u as useWorldSurface } from "./WorldSurfaceContext-CUHCnPUQ.js";
import { b as useGLTF, u as useFrame } from "./feature-3d-B9k2WEUa.js";
import "./vendor-three-DqkPfKji.js";
const Renderer = reactExports.lazy(() => __vitePreload(() => import("./SceneContainerRenderer-eUmholUI.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0, import.meta.url));
function SceneContainer(props) {
  const inWorld = useWorldSurface();
  if (inWorld) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Renderer, { ...props }) });
}
const B = "./models/buildings/";
const N = "./models/nature/";
const NM = "./models/nature-mega/";
const F = "./models/food/";
const A = "./models/animals/";
const I = "./models/furniture/";
const P = "./models/props/";
const E = "./models/effects/";
const NPC = "./models/npcs/";
const R = "./models/resources/";
const PL = "./models/platformer/";
const BUILDING_MODELS = {
  // Medieval Village Pack
  "fantasy-house": { url: `${B}fantasy-house.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Nhà Cổ" },
  "fantasy-inn": { url: `${B}fantasy-inn.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Quán Trọ" },
  "fantasy-sawmill": { url: `${B}fantasy-sawmill.glb`, scale: [2.2, 2.2, 2.2], rotation: [0, 0, 0], category: "building", displayName: "Xưởng Cưa" },
  "fantasy-stable": { url: `${B}fantasy-stable.glb`, scale: [2.2, 2.2, 2.2], rotation: [0, 0, 0], category: "building", displayName: "Chuồng Ngựa" },
  "fantasy-barracks": { url: `${B}fantasy-barracks.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Doanh Trại" },
  "bell-tower": { url: `${B}bell-tower.glb`, scale: [2.2, 2.2, 2.2], rotation: [0, 0, 0], category: "building", displayName: "Tháp Chuông" },
  "gazebo": { url: `${B}gazebo.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Chòi Nghỉ" },
  "market-stand": { url: `${B}market-stand.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Quầy Hàng" },
  "mill": { url: `${B}mill.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Cối Xay" },
  "well": { url: `${B}well.glb`, scale: [1.5, 1.5, 1.5], rotation: [0, 0, 0], category: "building", displayName: "Giếng Nước" },
  // Fantasy RTS
  "temple": { url: `${B}temple.glb`, scale: [2.8, 2.8, 2.8], rotation: [0, 0, 0], category: "building", displayName: "Đền Thờ" },
  "castle": { url: `${B}castle.glb`, scale: [3.5, 3.5, 3.5], rotation: [0, 0, 0], category: "building", displayName: "Lâu Đài" },
  "castle-fortress": { url: `${B}castle-fortress.glb`, scale: [3, 3, 3], rotation: [0, 0, 0], category: "building", displayName: "Pháo Đài" },
  "fortress": { url: `${B}fortress.glb`, scale: [3, 3, 3], rotation: [0, 0, 0], category: "building", displayName: "Pháo Đài" },
  "barracks": { url: `${B}barracks.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Doanh Trại" },
  "town-center": { url: `${B}town-center.glb`, scale: [3, 3, 3], rotation: [0, 0, 0], category: "building", displayName: "Trung Tâm" },
  "town-center-2nd": { url: `${B}town-center-2nd-age.glb`, scale: [3, 3, 3], rotation: [0, 0, 0], category: "building", displayName: "Thị Trấn" },
  "market-stalls": { url: `${B}market-stalls.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Chợ" },
  "storage-house": { url: `${B}storage-house.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Kho Hàng" },
  "windmill": { url: `${B}windmill.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Cối Xay Gió" },
  "watch-tower": { url: `${B}watch-tower.glb`, scale: [2.8, 2.8, 2.8], rotation: [0, 0, 0], category: "building", displayName: "Tháp Canh" },
  "stone-tower": { url: `${B}stone-tower.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Tháp Đá" },
  "dock": { url: `${B}dock.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Bến Tàu" },
  "houses": { url: `${B}houses.glb`, scale: [2.8, 2.8, 2.8], rotation: [0, 0, 0], category: "building", displayName: "Khu Nhà" },
  "hut": { url: `${B}hut.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Túp Lều" },
  "village-market": { url: `${B}village-market.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Chợ Làng" },
  "wooden-temple": { url: `${B}wooden-temple.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Đền Gỗ" },
  "wonder": { url: `${B}wonder.glb`, scale: [3.5, 3.5, 3.5], rotation: [0, 0, 0], category: "building", displayName: "Kỳ Quan" },
  "wooden-fortress": { url: `${B}wooden-fortress.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Pháo Đài Gỗ" },
  "mine": { url: `${B}mine.glb`, scale: [2.2, 2.2, 2.2], rotation: [0, 0, 0], category: "building", displayName: "Hầm Mỏ" },
  "blacksmith": { url: `${B}blacksmith.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Lò Rèn" },
  "archery-tower": { url: `${B}archery-tower.glb`, scale: [2.2, 2.2, 2.2], rotation: [0, 0, 0], category: "building", displayName: "Tháp Bắn" },
  "wooden-monument": { url: `${B}wooden-monument.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Tượng Đài Gỗ" },
  "port": { url: `${B}port.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Cảng" },
  // City Kit
  "skyscraper": { url: `${B}skyscraper.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Cao Ốc" },
  "large-building": { url: `${B}large-building.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Tòa Nhà Lớn" },
  "small-building": { url: `${B}small-building.glb`, scale: [1.5, 1.5, 1.5], rotation: [0, 0, 0], category: "building", displayName: "Nhà Nhỏ" },
  // ── Fantasy village variants (used by manga/neko buildings) ──
  "fantasy-house-2": { url: `${B}fantasy-house-2.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Nhà Cổ 2" },
  "fantasy-house-3": { url: `${B}fantasy-house-3.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Nhà Cổ 3" },
  // ── Additional buildings (disk assets) ──
  "farm": { url: `${B}farm.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Nông Trại" },
  "small-farm": { url: `${B}small-farm.glb`, scale: [1.5, 1.5, 1.5], rotation: [0, 0, 0], category: "building", displayName: "Trang Trại Nhỏ" },
  "shack": { url: `${B}shack.glb`, scale: [1.5, 1.5, 1.5], rotation: [0, 0, 0], category: "building", displayName: "Lều Gỗ" },
  "huts": { url: `${B}huts.glb`, scale: [1.8, 1.8, 1.8], rotation: [0, 0, 0], category: "building", displayName: "Cụm Lều" },
  "tower-house": { url: `${B}tower-house.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Nhà Tháp" },
  "storage-hut": { url: `${B}storage-hut.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Kho Nhỏ" },
  "storage-shed": { url: `${B}storage-shed.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Nhà Kho" },
  "wooden-encampment": { url: `${B}wooden-encampment.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Doanh Trại Gỗ" },
  "castle-gate": { url: `${B}castle-gate.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Cổng Thành" },
  // ── Newly added (previously sitting on disk unused) ──
  "business-building": { url: `${B}business-building.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Tòa Văn Phòng" },
  "low-building": { url: `${B}low-building.glb`, scale: [1.6, 1.6, 1.6], rotation: [0, 0, 0], category: "building", displayName: "Nhà Thấp" },
  "sign-hospital": { url: `${B}sign-hospital.glb`, scale: [1.4, 1.4, 1.4], rotation: [0, 0, 0], category: "building", displayName: "Bảng Y Tế" },
  "wooden-fortress-gate": { url: `${B}wooden-fortress-gate.glb`, scale: [2.2, 2.2, 2.2], rotation: [0, 0, 0], category: "building", displayName: "Cổng Pháo Đài Gỗ" },
  "docks": { url: `${B}docks.glb`, scale: [2.2, 2.2, 2.2], rotation: [0, 0, 0], category: "building", displayName: "Bến Cảng" },
  "crops": { url: `${B}crops.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "building", displayName: "Ruộng Hoa Màu" },
  "gold-rocks": { url: `${B}gold-rocks.glb`, scale: [1.3, 1.3, 1.3], rotation: [0, 0, 0], category: "building", displayName: "Mỏ Vàng" },
  "stone-wall": { url: `${B}stone-wall.glb`, scale: [1.5, 1.5, 1.5], rotation: [0, 0, 0], category: "building", displayName: "Tường Đá" }
};
const NATURE_MODELS = {
  "tree": { url: `${N}tree.glb`, scale: [1.5, 1.5, 1.5], rotation: [0, 0, 0], category: "nature", displayName: "Cây" },
  "pine": { url: `${N}pine.glb`, scale: [1.5, 1.5, 1.5], rotation: [0, 0, 0], category: "nature", displayName: "Cây Thông" },
  "bush": { url: `${N}bush.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Bụi Cây" },
  "grass": { url: `${N}grass.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Cỏ" },
  "fern": { url: `${N}fern.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Dương Xỉ" },
  "mushroom": { url: `${N}mushroom.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "nature", displayName: "Nấm" },
  "flower-single": { url: `${N}flower-single.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "nature", displayName: "Hoa" },
  "flower-group": { url: `${N}flower-group.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Cụm Hoa" },
  "dead-tree": { url: `${N}dead-tree.glb`, scale: [1.5, 1.5, 1.5], rotation: [0, 0, 0], category: "nature", displayName: "Cây Khô" },
  "rock-medium": { url: `${N}rock-medium.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Đá" },
  "fence": { url: `${N}fence.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Hàng Rào" },
  "path-straight": { url: `${N}path-straight.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Đường Đi" },
  "pine-trees": { url: `${N}pine-trees.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "nature", displayName: "Rừng Thông" },
  "mountain": { url: `${N}mountain.glb`, scale: [3, 3, 3], rotation: [0, 0, 0], category: "nature", displayName: "Núi" },
  "rocks": { url: `${N}rocks.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Đá Tảng" },
  // ── Additional nature (disk assets) ──
  "bush-with-flowers": { url: `${N}bush-with-flowers.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "nature", displayName: "Bụi Hoa" },
  "clover": { url: `${N}clover.glb`, scale: [0.6, 0.6, 0.6], rotation: [0, 0, 0], category: "nature", displayName: "Cỏ Ba Lá" },
  "pebble-round": { url: `${N}pebble-round.glb`, scale: [0.5, 0.5, 0.5], rotation: [0, 0, 0], category: "nature", displayName: "Cuội" },
  "grass-wispy": { url: `${N}grass-wispy.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "nature", displayName: "Cỏ Mỏng" },
  "survival-grass": { url: `${N}survival-grass.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "nature", displayName: "Cỏ Dại" },
  "survival-rock": { url: `${N}survival-rock.glb`, scale: [0.7, 0.7, 0.7], rotation: [0, 0, 0], category: "nature", displayName: "Đá Tự Nhiên" },
  "twisted-tree": { url: `${N}twisted-tree.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "nature", displayName: "Cây Xoắn" },
  // ── Newly added (previously on disk but unregistered) ──
  "survival-tree": { url: `${N}survival-tree.glb`, scale: [1.4, 1.4, 1.4], rotation: [0, 0, 0], category: "nature", displayName: "Cây Hoang Dã" },
  "tree-cluster": { url: `${N}trees.glb`, scale: [1.8, 1.8, 1.8], rotation: [0, 0, 0], category: "nature", displayName: "Cụm Cây" }
};
const FOOD_MODELS = {
  "apple": { url: `${F}apple.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Táo" },
  "banana": { url: `${F}banana.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Chuối" },
  "burger": { url: `${F}burger.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Hamburger" },
  "cake": { url: `${F}cake.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Bánh" },
  "pizza": { url: `${F}pizza.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Pizza" },
  "sushi-salmon": { url: `${F}sushi-salmon.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Sushi Cá Hồi" },
  "ice-cream": { url: `${F}ice-cream.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Kem" },
  "fries": { url: `${F}fries.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Khoai Tây" },
  "donut-chocolate": { url: `${F}donut-chocolate.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Bánh Donut" },
  "sushi-nigiri": { url: `${F}sushi-nigiri.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Sushi Nigiri" },
  "steak": { url: `${F}steak.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Bít Tết" },
  "hotdog": { url: `${F}hotdog.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Hot Dog" },
  "cupcake": { url: `${F}cupcake.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Bánh Cupcake" },
  "rice-ball": { url: `${F}rice-ball.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Cơm Nắm" },
  "taco": { url: `${F}taco.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Taco" },
  "sushi-egg": { url: `${F}sushi-egg.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Sushi Trứng" },
  "pancakes": { url: `${F}pancakes.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Bánh Kếp" },
  "waffle": { url: `${F}waffle.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Bánh Waffle" },
  "bowl-broth": { url: `${F}bowl-broth.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Tô Nước Dùng" },
  "bowl-soup": { url: `${F}bowl-soup.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Tô Súp" },
  "croissant": { url: `${F}croissant.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Bánh Sừng Bò" },
  "sandwich": { url: `${F}sandwich.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Bánh Mì Kẹp" },
  "salad": { url: `${F}salad.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Salad" },
  "steamer": { url: `${F}steamer.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Xửng Hấp" },
  "chinese-food": { url: `${F}chinese-food.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Mì Trung Hoa" },
  "frappe": { url: `${F}frappe.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Frappé" },
  "sundae": { url: `${F}sundae.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Sundae" },
  "turkey": { url: `${F}turkey.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Gà Tây" },
  "pie": { url: `${F}pie.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Bánh Pie" },
  "grapes": { url: `${F}grapes.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Nho" },
  "strawberry": { url: `${F}strawberry.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Dâu Tây" },
  "watermelon": { url: `${F}watermelon.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Dưa Hấu" },
  "cocktail": { url: `${F}cocktail.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Cocktail" },
  // ── Additional food (disk assets) ──
  "bacon": { url: `${F}bacon.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Thịt Xông Khói" },
  "carrot": { url: `${F}carrot.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Cà Rốt" },
  "egg": { url: `${F}egg.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "food", displayName: "Trứng" }
};
const ANIMAL_MODELS = {
  "cat": { url: `${A}cat.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Mèo" },
  "dog": { url: `${A}dog.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Chó" },
  "rabbit": { url: `${A}rabbit.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Thỏ" },
  "fox": { url: `${A}fox.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Cáo" },
  "penguin": { url: `${A}penguin.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Chim Cánh Cụt" },
  "bird": { url: `${A}bird.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Chim" },
  "frog": { url: `${A}frog.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Ếch" },
  "corgi": { url: `${A}corgi.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Corgi" },
  "beagle": { url: `${A}beagle.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Beagle" },
  "bear": { url: `${A}bear.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "animal", displayName: "Gấu" },
  "deer": { url: `${A}deer.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Hươu" },
  "horse": { url: `${A}horse.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "animal", displayName: "Ngựa" },
  "sheep": { url: `${A}sheep.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Cừu" },
  "chicken": { url: `${A}chicken.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "animal", displayName: "Gà" },
  "duck": { url: `${A}duck.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "animal", displayName: "Vịt" },
  "cow": { url: `${A}cow.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "animal", displayName: "Bò" },
  "pig": { url: `${A}pig.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Heo" },
  "llama": { url: `${A}llama.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Lạc Đà" },
  "giraffe": { url: `${A}giraffe.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Hươu Cao Cổ" },
  "lizard": { url: `${A}lizard.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Thằn Lằn" },
  "shark": { url: `${A}shark.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "animal", displayName: "Cá Mập" },
  "bizon": { url: `${A}bizon.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "animal", displayName: "Bò Rừng" },
  "chick": { url: `${A}chick.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "animal", displayName: "Gà Con" },
  "pug": { url: `${A}pug.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Chó Pug" },
  "zebra": { url: `${A}zebra.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "animal", displayName: "Ngựa Vằn" }
};
const FURNITURE_MODELS = {
  "executive-desk": { url: `${I}executive-desk.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Bàn Làm Việc" },
  "double-bed": { url: `${I}double-bed.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Giường Đôi" },
  "bookshelf": { url: `${I}three-seater-couch.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Kệ Sách" },
  "computer-desk": { url: `${I}computer-desk.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Bàn Máy Tính" },
  "club-arm-chair": { url: `${I}club-arm-chair.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Ghế Bành" },
  "coffee-machine": { url: `${I}coffee-machine.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Máy Pha Cà Phê" },
  "desk-lamp": { url: `${I}desk-lamp.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Đèn Bàn" },
  "ceiling-lamp": { url: `${I}ceiling-lamp.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Đèn Trần" },
  "fireplace": { url: `${I}fireplace.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Lò Sưởi" },
  "wardrobe": { url: `${I}wardrobe.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Tủ Quần Áo" },
  "monitor": { url: `${I}monitor.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Màn Hình" },
  "guitar": { url: `${I}guitar.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Guitar" },
  "fridge": { url: `${I}fridge.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Tủ Lạnh" },
  "drum-set": { url: `${I}drum-set.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Bộ Trống" },
  "tv": { url: `${I}tv.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Tivi" },
  "three-seater-couch": { url: `${I}three-seater-couch.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Sofa Dài" },
  "two-seater-couch": { url: `${I}two-seater-couch.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Sofa Đôi" },
  "punching-bag": { url: `${I}punching-bag.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Bao Cát" },
  "boxing-gloves": { url: `${I}boxing-gloves.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Găng Boxing" },
  "barbell": { url: `${I}barbell.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Tạ" },
  "basketball": { url: `${I}basketball.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Bóng Rổ" },
  "football": { url: `${I}football.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Bóng Đá" },
  "painting-canvas": { url: `${I}painting-canvas.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Khung Vẽ" },
  "wooden-chair": { url: `${I}wooden-chair.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Ghế Gỗ" },
  "speakers": { url: `${I}speakers.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Loa" },
  // ── Newly added furniture ──
  "executive-chair": { url: `${I}executive-chair.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "furniture", displayName: "Ghế Giám Đốc" }
};
const PROP_MODELS = {
  "campfire": { url: `${P}campfire.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Lửa Trại" },
  "bonfire": { url: `${P}bonfire.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Đống Lửa" },
  "chest": { url: `${P}chest.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Rương Kho Báu" },
  "tent": { url: `${P}tent.glb`, scale: [1.5, 1.5, 1.5], rotation: [0, 0, 0], category: "prop", displayName: "Lều Trại" },
  "workbench": { url: `${P}workbench.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Bàn Chế Tác" },
  "workbench-anvil": { url: `${P}workbench-anvil.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Bàn Rèn" },
  "barrel": { url: `${P}barrel.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Thùng Gỗ" },
  "signpost": { url: `${P}signpost.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Bảng Chỉ Đường" },
  "bedroll": { url: `${P}bedroll.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Túi Ngủ" },
  "bench": { url: `${P}bench.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Ghế Dài" },
  "hay": { url: `${P}hay.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Đống Cỏ Khô" },
  "cart": { url: `${P}cart.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Xe Kéo" },
  "crate": { url: `${P}crate.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Thùng Gỗ" },
  "bag": { url: `${P}bag.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Túi" },
  "bags": { url: `${P}bags.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Túi Hàng" },
  "cauldron": { url: `${P}cauldron.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Vạc Nấu" },
  "pickaxe": { url: `${P}pickaxe.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Cuốc" },
  "shovel": { url: `${P}shovel.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Xẻng" },
  "fishing-stand": { url: `${P}fishing-stand.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Cần Câu" },
  "tool-axe": { url: `${P}tool-axe.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Rìu" },
  // ── Additional props (disk assets) ──
  "box": { url: `${P}box.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Hộp" },
  "box-open": { url: `${P}box-open.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Hộp Mở" },
  "fish": { url: `${P}fish.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Cá" },
  "package": { url: `${P}package.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Gói Hàng" },
  "stairs": { url: `${P}stairs.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Cầu Thang" },
  "tool-hoe": { url: `${P}tool-hoe.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Cái Cuốc" },
  "fence-fortified": { url: `${P}fence-fortified.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Hàng Rào Cứng" },
  "twig": { url: `${P}twig.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Cành Cây" },
  "rock-flat": { url: `${P}rock-flat.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Đá Phẳng" },
  "rock-flat-grass": { url: `${P}rock-flat-grass.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Đá Cỏ" },
  // ── Newly added props (on disk, previously unregistered) ──
  "bell": { url: `${P}bell.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Chuông" },
  "structure-base": { url: `${P}structure-base.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Nền Xây" },
  "structure-roof": { url: `${P}structure-roof.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Mái Xây" }
};
const EFFECT_MODELS = {
  "pumpkin": { url: `${E}pumpkin.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Bí Ngô" },
  "gravestone": { url: `${E}gravestone.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Bia Mộ" },
  "lantern": { url: `${E}lantern.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Đèn Lồng" },
  "candle": { url: `${E}candle.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Nến" },
  "candles": { url: `${E}candles.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Cụm Nến" },
  "skull": { url: `${E}skull.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Đầu Lâu" },
  "shrine": { url: `${E}shrine.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Đền Nhỏ" },
  "crypt": { url: `${E}crypt.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Hầm Mộ" },
  "jackolantern": { url: `${E}jackolantern.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Bí Ngô Ma" },
  "ribcage": { url: `${E}ribcage.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Lồng Ngực" },
  "coffin": { url: `${E}coffin.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Quan Tài" },
  "post-lantern": { url: `${E}post-lantern.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Đèn Đường" },
  "hanging-lantern": { url: `${E}hanging-lantern.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Đèn Treo" },
  "stone-bench": { url: `${E}stone-bench.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Ghế Đá" },
  "stone-path": { url: `${E}stone-path.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Đường Đá" },
  "arch": { url: `${E}arch.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Cổng Vòm" },
  "arch-gate": { url: `${E}arch-gate.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Cổng Lớn" },
  "pillar": { url: `${E}pillar.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Trụ Đá" },
  "iron-fence": { url: `${E}iron-fence.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Hàng Rào Sắt" },
  "fence-gate": { url: `${E}fence-gate.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Cổng Rào" },
  // ── Additional effects (disk assets) ──
  "autumn-pine": { url: `${E}autumn-pine.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "effect", displayName: "Thông Mùa Thu" },
  "post-skull": { url: `${E}post-skull.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Cột Đầu Lâu" },
  "plaque-candles": { url: `${E}plaque-candles.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Đĩa Nến" },
  "cobblestone-tile": { url: `${E}cobblestone-tile.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Gạch Đá" },
  "dead-tree-eff": { url: `${E}dead-tree.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "effect", displayName: "Cây Khô Ma" },
  // ── Newly added effects ──
  "bone": { url: `${E}bone.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "effect", displayName: "Xương" },
  "dirt-tile": { url: `${E}dirt-tile.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Gạch Đất" },
  "stone-fence": { url: `${E}fence.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "effect", displayName: "Rào Đá" }
};
const H = "./models/home/";
const HOME_MODELS = {
  "bedside-table": { url: `${H}bedside-table.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "home", displayName: "Tủ Đầu Giường" },
  "beer-bottle": { url: `${H}beer-bottle.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "home", displayName: "Chai Bia" },
  "blue-book": { url: `${H}blue-book.glb`, scale: [0.6, 0.6, 0.6], rotation: [0, 0, 0], category: "home", displayName: "Sách Xanh" },
  "cabinet-shelves": { url: `${H}cabinet-shelves.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "home", displayName: "Kệ Tủ" },
  "dining-chair": { url: `${H}dining-chair.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "home", displayName: "Ghế Ăn" },
  "dining-table": { url: `${H}dining-table.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "home", displayName: "Bàn Ăn" },
  "kitchen-oven": { url: `${H}kitchen-oven.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "home", displayName: "Lò Nướng" },
  "round-pot": { url: `${H}round-pot.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "home", displayName: "Nồi Tròn" },
  "rock-dish": { url: `${H}rock-dish.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "home", displayName: "Dĩa Đá" },
  "simple-plate": { url: `${H}simple-plate.glb`, scale: [0.7, 0.7, 0.7], rotation: [0, 0, 0], category: "home", displayName: "Dĩa" },
  "tall-cabinet": { url: `${H}tall-cabinet.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "home", displayName: "Tủ Cao" },
  "countertop": { url: `${H}countertop.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "home", displayName: "Mặt Bếp" },
  // ── Newly added home items ──
  "cell-phone": { url: `${H}cell-phone.glb`, scale: [0.6, 0.6, 0.6], rotation: [0, 0, 0], category: "home", displayName: "Điện Thoại" },
  "countertop-sink": { url: `${H}countertop-sink.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "home", displayName: "Bồn Rửa" },
  "wooden-bed": { url: `${H}wooden-bed.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "home", displayName: "Giường Gỗ" }
};
const BA = "./models/bathroom/";
const BATHROOM_MODELS = {
  "ducky": { url: `${BA}ducky.glb`, scale: [0.5, 0.5, 0.5], rotation: [0, 0, 0], category: "bathroom", displayName: "Vịt Bồn Tắm" },
  "bath-candle": { url: `${BA}bath-candle.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "bathroom", displayName: "Nến Bồn Tắm" },
  "slippers": { url: `${BA}slippers.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "bathroom", displayName: "Dép" },
  "mirror": { url: `${BA}mirror.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "bathroom", displayName: "Gương" },
  // ── Newly added bathroom items ──
  "bath": { url: `${BA}bath.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "bathroom", displayName: "Bồn Tắm" },
  "bath-plant": { url: `${BA}bath-plant.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "bathroom", displayName: "Cây Cảnh Bồn Tắm" },
  "floor-tiled": { url: `${BA}floor-tiled.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], positionOffset: [0, 0.03, 0], category: "bathroom", displayName: "Sàn Gạch" },
  "bath-mat": { url: `${BA}mat.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], positionOffset: [0, 0.03, 0], category: "bathroom", displayName: "Thảm Tắm" },
  "towel-blue": { url: `${BA}towel-blue.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "bathroom", displayName: "Khăn Xanh" },
  "towel-pink": { url: `${BA}towel-pink.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "bathroom", displayName: "Khăn Hồng" },
  "towel-stacked": { url: `${BA}towel-stacked.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "bathroom", displayName: "Chồng Khăn" },
  "wall-shelf": { url: `${BA}wall-shelf.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "bathroom", displayName: "Kệ Tường" }
};
const NK = "./models/nature-kaykit/";
const KAYKIT_MODELS = {
  "kk-bush-1": { url: `${NK}Bush_1_A_Color1.gltf`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "nature", displayName: "Bụi KK 1" },
  "kk-bush-2": { url: `${NK}Bush_2_A_Color1.gltf`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "nature", displayName: "Bụi KK 2" },
  "kk-bush-3": { url: `${NK}Bush_3_A_Color1.gltf`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Bụi KK 3" },
  "kk-bush-4": { url: `${NK}Bush_4_A_Color1.gltf`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Bụi KK 4" },
  "kk-grass-1": { url: `${NK}Grass_1_A_Color1.gltf`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "nature", displayName: "Cỏ KK 1" },
  "kk-grass-2": { url: `${NK}Grass_2_A_Color1.gltf`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "nature", displayName: "Cỏ KK 2" },
  "kk-rock-1": { url: `${NK}Rock_1_A_Color1.gltf`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Đá KK 1" },
  "kk-rock-2": { url: `${NK}Rock_2_A_Color1.gltf`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Đá KK 2" },
  "kk-rock-3": { url: `${NK}Rock_3_A_Color1.gltf`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "nature", displayName: "Đá KK 3" },
  "kk-tree-1": { url: `${NK}Tree_1_A_Color1.gltf`, scale: [3.5, 3.5, 3.5], rotation: [0, 0, 0], category: "nature", displayName: "Cây KK 1" },
  "kk-tree-2": { url: `${NK}Tree_2_A_Color1.gltf`, scale: [3.5, 3.5, 3.5], rotation: [0, 0, 0], category: "nature", displayName: "Cây KK 2" },
  "kk-tree-3": { url: `${NK}Tree_3_A_Color1.gltf`, scale: [3.5, 3.5, 3.5], rotation: [0, 0, 0], category: "nature", displayName: "Cây KK 3" },
  "kk-tree-4": { url: `${NK}Tree_4_A_Color1.gltf`, scale: [3.5, 3.5, 3.5], rotation: [0, 0, 0], category: "nature", displayName: "Cây KK 4" },
  "kk-bare-1": { url: `${NK}Tree_Bare_1_A_Color1.gltf`, scale: [3, 3, 3], rotation: [0, 0, 0], category: "nature", displayName: "Cây Trụi KK 1" },
  "kk-bare-2": { url: `${NK}Tree_Bare_2_A_Color1.gltf`, scale: [3, 3, 3], rotation: [0, 0, 0], category: "nature", displayName: "Cây Trụi KK 2" }
};
const NPC_MODELS = {
  "npc-barbarian": { url: `${NPC}barbarian.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "npc", displayName: "Chiến Binh" },
  "npc-knight": { url: `${NPC}knight.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "npc", displayName: "Hiệp Sĩ" },
  "npc-mage": { url: `${NPC}mage.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "npc", displayName: "Pháp Sư" },
  "npc-ranger": { url: `${NPC}ranger.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "npc", displayName: "Xạ Thủ" },
  "npc-rogue": { url: `${NPC}rogue.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "npc", displayName: "Sát Thủ" },
  "npc-rogue-hooded": { url: `${NPC}rogue_hooded.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "npc", displayName: "Ẩn Sĩ" },
  "npc-emiko": { url: `${NPC}emiko.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "npc", displayName: "Emiko" }
};
const NATURE_MEGA_MODELS = {
  "mega-tree": { url: `${NM}mega-tree.glb`, scale: [1.8, 1.8, 1.8], rotation: [0, 0, 0], category: "nature", displayName: "Cây Lớn" },
  "mega-pine": { url: `${NM}mega-pine.glb`, scale: [1.8, 1.8, 1.8], rotation: [0, 0, 0], category: "nature", displayName: "Thông Lớn" },
  "mega-bush": { url: `${NM}mega-bush.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "nature", displayName: "Bụi Rậm Lớn" },
  "mega-rock": { url: `${NM}mega-rock.glb`, scale: [0.7, 0.7, 0.7], rotation: [0, 0, 0], category: "nature", displayName: "Đá Lớn" },
  "mega-grass": { url: `${NM}mega-grass.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "nature", displayName: "Cỏ Rậm" },
  "mega-fern": { url: `${NM}mega-fern.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "nature", displayName: "Dương Xỉ Lớn" },
  "mega-mushroom": { url: `${NM}mega-mushroom.glb`, scale: [0.6, 0.6, 0.6], rotation: [0, 0, 0], category: "nature", displayName: "Nấm Lớn" },
  "mega-flower-single": { url: `${NM}mega-flower-single.glb`, scale: [0.6, 0.6, 0.6], rotation: [0, 0, 0], category: "nature", displayName: "Hoa Lớn" },
  "mega-flower-group": { url: `${NM}mega-flower-group.glb`, scale: [0.7, 0.7, 0.7], rotation: [0, 0, 0], category: "nature", displayName: "Cụm Hoa Lớn" },
  "mega-plant": { url: `${NM}mega-plant.glb`, scale: [0.7, 0.7, 0.7], rotation: [0, 0, 0], category: "nature", displayName: "Cây Cảnh" },
  // ── Newly added nature-mega variants ──
  "mega-dead-tree": { url: `${NM}mega-dead-tree.glb`, scale: [1.6, 1.6, 1.6], rotation: [0, 0, 0], category: "nature", displayName: "Cây Khô Lớn" },
  "mega-plant-big": { url: `${NM}mega-plant-big.glb`, scale: [0.9, 0.9, 0.9], rotation: [0, 0, 0], category: "nature", displayName: "Cây Cảnh Lớn" },
  "mega-bush-flowers": { url: `${NM}bush-flowers.glb`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "nature", displayName: "Bụi Hoa Lớn" },
  "mega-clover": { url: `${NM}clover.glb`, scale: [0.6, 0.6, 0.6], rotation: [0, 0, 0], category: "nature", displayName: "Cỏ Ba Lá Lớn" },
  "mushroom-shelf": { url: `${NM}mushroom-shelf.glb`, scale: [0.7, 0.7, 0.7], rotation: [0, 0, 0], category: "nature", displayName: "Nấm Gỗ" },
  "tall-grass": { url: `${NM}tall-grass.glb`, scale: [0.9, 0.9, 0.9], rotation: [0, 0, 0], category: "nature", displayName: "Cỏ Cao" },
  "mega-twisted-tree": { url: `${NM}twisted-tree.glb`, scale: [1.6, 1.6, 1.6], rotation: [0, 0, 0], category: "nature", displayName: "Cây Xoắn Lớn" },
  "mega-pebble": { url: `${NM}pebble-round.glb`, scale: [0.7, 0.7, 0.7], rotation: [0, 0, 0], category: "nature", displayName: "Cuội Lớn" },
  "path-round": { url: `${NM}path-round.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Đá Lát Tròn" },
  "path-square": { url: `${NM}path-square.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Đá Lát Vuông" }
};
const PLATFORMER_MODELS = {
  "plat-star": { url: `${PL}star.gltf`, scale: [0.5, 0.5, 0.5], rotation: [0, 0, 0], category: "collectible", displayName: "Ngôi Sao" },
  "plat-diamond": { url: `${PL}diamond.gltf`, scale: [0.5, 0.5, 0.5], rotation: [0, 0, 0], category: "collectible", displayName: "Kim Cương" },
  "plat-heart": { url: `${PL}heart.gltf`, scale: [0.5, 0.5, 0.5], rotation: [0, 0, 0], category: "collectible", displayName: "Trái Tim" },
  // ── Newly added platformer collectibles ──
  "plat-ball": { url: `${PL}ball.gltf`, scale: [0.6, 0.6, 0.6], rotation: [0, 0, 0], category: "collectible", displayName: "Quả Bóng" },
  "plat-cone": { url: `${PL}cone.gltf`, scale: [0.7, 0.7, 0.7], rotation: [0, 0, 0], category: "collectible", displayName: "Nón Đường" },
  "plat-flag": { url: `${PL}flag.gltf`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "collectible", displayName: "Cờ" },
  "plat-spring": { url: `${PL}spring-pad.gltf`, scale: [0.6, 0.6, 0.6], rotation: [0, 0, 0], category: "collectible", displayName: "Bàn Lò Xo" }
};
const RESOURCE_MODELS = {
  "copper-nugget": { url: `${R}Copper_Nugget_Small.gltf`, scale: [0.9, 0.9, 0.9], rotation: [0, 0, 0], category: "resource", displayName: "Quặng Đồng" },
  "fuel-barrel": { url: `${R}Fuel_A_Barrel.gltf`, scale: [0.9, 0.9, 0.9], rotation: [0, 0, 0], category: "resource", displayName: "Thùng Nhiên Liệu" },
  "gold-bar": { url: `${R}Gold_Bar.gltf`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "resource", displayName: "Thỏi Vàng" },
  "iron-bar": { url: `${R}Iron_Bar.gltf`, scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0], category: "resource", displayName: "Thỏi Sắt" },
  "parts-cog": { url: `${R}Parts_Cog.gltf`, scale: [0.9, 0.9, 0.9], rotation: [0, 0, 0], category: "resource", displayName: "Bánh Răng" },
  "stone-brick": { url: `${R}Stone_Brick.gltf`, scale: [0.9, 0.9, 0.9], rotation: [0, 0, 0], category: "resource", displayName: "Gạch Đá" },
  "wood-plank": { url: `${R}Wood_Plank_A.gltf`, scale: [0.9, 0.9, 0.9], rotation: [0, 0, 0], category: "resource", displayName: "Gỗ Xẻ" }
};
const ALIAS_MODELS = {
  // NPC character aliases (registry uses npc- prefix, layers use bare names)
  "knight": NPC_MODELS["npc-knight"],
  "barbarian": NPC_MODELS["npc-barbarian"],
  "mage": NPC_MODELS["npc-mage"],
  "ranger": NPC_MODELS["npc-ranger"],
  "rogue": NPC_MODELS["npc-rogue"],
  "rogue_hooded": NPC_MODELS["npc-rogue-hooded"],
  "emiko": NPC_MODELS["npc-emiko"],
  // ── Housing aliases ──
  "barn": { url: `${B}storage-shed.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Nhà kho" },
  "tea-house": { url: `${B}gazebo.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Trà quán" },
  // Dressing props (mura biome)
  "torii-small": { url: `${B}wooden-monument.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Cổng Torii nhỏ" },
  "well-small": { url: `${B}well.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Giếng nhỏ" },
  // Dressing props (mori biome)
  "log": { url: `${N}dead-tree.glb`, scale: [0.6, 0.4, 0.6], rotation: [Math.PI / 2, 0, 0], category: "nature", displayName: "Khúc gỗ" },
  "stump": { url: `${N}dead-tree.glb`, scale: [0.5, 0.3, 0.5], rotation: [0, 0, 0], category: "nature", displayName: "Gốc cây" },
  "fallen-log": { url: `${N}dead-tree.glb`, scale: [0.8, 0.4, 0.8], rotation: [Math.PI / 2, 0, 0], category: "nature", displayName: "Gỗ đổ" },
  "vine": { url: `${N}grass-wispy.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Dây leo" },
  "moss-rock": { url: `${N}survival-rock.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "nature", displayName: "Đá rêu" },
  "bird-nest": { url: `${P}hay.glb`, scale: [0.4, 0.4, 0.4], rotation: [0, 0, 0], category: "nature", displayName: "Tổ chim" },
  "hollow-tree": { url: `${N}twisted-tree.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "nature", displayName: "Cây rỗng" },
  // Dressing props (yama biome)
  "boulder": { url: `${N}rock-medium.glb`, scale: [1.6, 1.6, 1.6], rotation: [0, 0, 0], category: "nature", displayName: "Tảng đá" },
  "snow-pine": { url: `${N}pine.glb`, scale: [1.5, 1.5, 1.5], rotation: [0, 0, 0], category: "nature", displayName: "Thông tuyết" },
  "cliff-face": { url: `${N}mountain.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "nature", displayName: "Vách đá" },
  "ore-vein": { url: `${B}gold-rocks.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Quặng" },
  "eagle-nest": { url: `${P}hay.glb`, scale: [0.6, 0.6, 0.6], rotation: [0, 0, 0], category: "nature", displayName: "Tổ đại bàng" },
  "stone-lantern": { url: `${E}post-lantern.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Đèn đá" },
  // Dressing props (umi biome)
  "shell": { url: `${N}pebble-round.glb`, scale: [0.3, 0.3, 0.3], rotation: [0, 0, 0], category: "nature", displayName: "Vỏ sò" },
  "coral": { url: `${N}bush.glb`, scale: [0.5, 0.5, 0.5], rotation: [0, 0, 0], category: "nature", displayName: "San hô" },
  "driftwood": { url: `${N}dead-tree.glb`, scale: [0.5, 0.3, 0.5], rotation: [0.4, 0, 0], category: "nature", displayName: "Gỗ trôi" },
  "palm-tree": { url: `${N}tree.glb`, scale: [1.5, 1.5, 1.5], rotation: [0, 0, 0], category: "nature", displayName: "Cây cọ" },
  "seaweed": { url: `${N}fern.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "nature", displayName: "Rong biển" },
  "crab": { url: `${N}rock-medium.glb`, scale: [0.2, 0.2, 0.2], rotation: [0, 0, 0], category: "nature", displayName: "Cua" },
  "sandcastle": { url: `${B}castle.glb`, scale: [0.2, 0.2, 0.2], rotation: [0, 0, 0], category: "prop", displayName: "Lâu đài cát" },
  "boat-wreck": { url: `${N}dead-tree.glb`, scale: [0.6, 0.3, 0.6], rotation: [0.4, 0, 0], category: "prop", displayName: "Thuyền đắm" },
  // Dressing props (sato biome)
  "scarecrow": { url: `${P}signpost.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "prop", displayName: "Bù nhìn" },
  "hay-bale": { url: `${P}hay.glb`, scale: [1.2, 1.2, 1.2], rotation: [0, 0, 0], category: "prop", displayName: "Cuộn rơm" },
  "rice-stack": { url: `${P}hay.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Ụ lúa" },
  "bamboo-grove": { url: `${N}trees.glb`, scale: [1.5, 1.5, 1.5], rotation: [0, 0, 0], category: "nature", displayName: "Rặng tre" },
  "koi-pond": { url: `${B}well.glb`, scale: [0.8, 0.2, 0.8], rotation: [0, 0, 0], category: "prop", displayName: "Hồ Koi" },
  "waterwheel": { url: `${B}mill.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "building", displayName: "Bánh xe nước" },
  // Dressing props (doukutsu biome)
  "crystal": { url: `${N}rock-medium.glb`, scale: [0.6, 1, 0.6], rotation: [0, 0, 0], category: "nature", displayName: "Pha lê" },
  "stalactite": { url: `${N}rock-medium.glb`, scale: [0.4, 0.8, 0.4], rotation: [Math.PI, 0, 0], category: "nature", displayName: "Nhũ đá" },
  "glowing-fungus": { url: `${N}mushroom.glb`, scale: [0.6, 0.6, 0.6], rotation: [0, 0, 0], category: "nature", displayName: "Nấm phát sáng" },
  "bat-cluster": { url: `${N}pebble-round.glb`, scale: [0.2, 0.2, 0.2], rotation: [0, 0, 0], category: "nature", displayName: "Đàn dơi" },
  "treasure-chest": { url: `${P}chest.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Rương kho báu" },
  "ancient-pillar": { url: `${E}pillar.glb`, scale: [1, 1, 1], rotation: [0, 0, 0], category: "prop", displayName: "Cột cổ" },
  // BiomeGate models
  "shrine-gate": { url: `${B}wooden-temple.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Cổng đền" },
  "arch": { url: `${B}castle-gate.glb`, scale: [2, 2, 2], rotation: [0, 0, 0], category: "building", displayName: "Vòm cổng" },
  // Landmark overrides
  "castle-tower": { url: `${B}watch-tower.glb`, scale: [2.5, 2.5, 2.5], rotation: [0, 0, 0], category: "building", displayName: "Tháp lâu đài" }
};
const ALL_MODELS = {
  ...BUILDING_MODELS,
  ...NATURE_MODELS,
  ...NATURE_MEGA_MODELS,
  ...FOOD_MODELS,
  ...ANIMAL_MODELS,
  ...FURNITURE_MODELS,
  ...HOME_MODELS,
  ...BATHROOM_MODELS,
  ...PROP_MODELS,
  ...EFFECT_MODELS,
  ...NPC_MODELS,
  ...KAYKIT_MODELS,
  ...PLATFORMER_MODELS,
  ...RESOURCE_MODELS,
  ...ALIAS_MODELS
};
function getModelConfig(modelId) {
  return ALL_MODELS[modelId] || null;
}
const getModel = getModelConfig;
function RotatingModel({ modelDef, autoRotate = true }) {
  const ref = reactExports.useRef();
  const { scene } = useGLTF(modelDef.url);
  const clonedScene = reactExports.useMemo(() => scene.clone(true), [scene]);
  useFrame((_, delta) => {
    if (ref.current && autoRotate) {
      ref.current.rotation.y += delta * 0.5;
    }
  });
  const [sx, sy, sz] = modelDef.scale || [1, 1, 1];
  const [rx, ry, rz] = modelDef.rotation || [0, 0, 0];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "primitive",
    {
      ref,
      object: clonedScene,
      scale: [sx, sy, sz],
      rotation: [rx, ry, rz]
    }
  );
}
function ModelViewer({
  modelId,
  height = "200px",
  autoRotate = true,
  background = "radial-gradient(circle, rgba(30,20,60,0.8) 0%, transparent 70%)",
  className = "",
  style = {}
}) {
  if (!modelId) return null;
  const modelDef = getModel(modelId);
  if (!modelDef) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SceneContainer,
    {
      height,
      background,
      orbitControls: false,
      cameraPosition: [0, 1.5, 4],
      className,
      style,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(RotatingModel, { modelDef, autoRotate })
    }
  );
}
export {
  ModelViewer as default
};
