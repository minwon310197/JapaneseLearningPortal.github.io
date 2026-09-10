const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./QuestChainPage-1bslP90_.js","./vendor-react-BUL8WuXG.js","./quest-chains-CiwzmCpJ.js","./index-BEJSIlFS.js","./vendor-runtime-BbOs9S9B.js","./vendor-icons-D83cEu6Z.js","./vendor-router-Dx6RIovR.js","./vendor-supabase-DTEAj5J1.js","./index-BF-iHvWQ.css","./TrainerPage-CzaCoQ2m.js","./registry-BAotxlgH.js","./ToolsPanel-DVXChPP8.js","./IOSGroupedList-s00mgaMZ.js","./legacy-loader-gyvSYPc3.js","./world-tool-destinations-BAVvWbat.js","./learning-tools-CW2TYh-A.js","./lookup-UkoT7MA1.js","./navigation-index-BUPaV9YS.js","./data-index-Dcwjwz3J.js","./api-BAg1LJRR.js","./ai-tutor-_IL-DJS1.js","./ai-feature-catalog-BVQfq9eZ.js","./useAIKey-CpSw0zmN.js","./client-wNJ1tNgU.js","./ai-S4u4-t6_.js","./tatoeba-nQntoJ6h.js","./AdminDashboard-Dpk_kQBd.js","./useDialogFocus-CowhWfi-.js","./challenges-CPMh71LA.js","./Inbox-CKanfJx3.js","./ChallengeQuiz-CJxXarkr.js","./Analytics-DpQ8t--Y.js","./ShopPage-DSMBI66p.js","./EconomySceneHero-B_AmZV8_.js","./cosmetic-registry-CEb8QiBv.js","./ModelViewer-CaRNmJCy.js","./WorldSurfaceContext-CUHCnPUQ.js","./economy-DWU_E1da.css","./InventoryPage-c-RFh7Rq.js","./MissionsPage-DdidGU7N.js","./CelebrationOverlay-DB_axjco.js","./useTodayKey-B7U75uD4.js","./empty-Bvm-mx50.js","./GachaPage-CoSFjp5W.js","./ConfettiBurst-BVLR_uM0.js","./rarity-tokens-i3-fv4xK.js","./SparklePing-BWX7eC-Z.js","./HitPause-BapLYhfu.js","./sfx-catalog-CnWM5zfr.js","./GachaPage-Cs0FS-Dv.css","./PetPage-YM4WaXUj.js","./CollectionsPage-DI_fTdfo.js","./StudyRoomPage-CJR__01Q.js","./EconomyStatsPage-BX55xGlL.js","./GamblingPage-Bd8AaQyL.js","./SubgameCanvas-CaGN2HcP.js","./RarityAura-BqxZE2kk.js","./GamblingPage-D-v-oewi.css","./DraftFeaturesPage-CpZhdsI4.js","./vendor-motion-C2SAPQSW.js","./MarketPage-C_j717Iv.js","./ScratchCardPage-CptfwX7u.js","./TreasureHuntPage-DUQlqY59.js","./TreasureHuntPage-DKRttcfe.css","./SkillTreePage-qSRcKK_0.js","./BountyBoardPage-BRIbJswj.js","./FactionPage-B46LPkRw.js","./VillagePage-Cl7wxsFP.js","./ThemedScenes-TCkAJ91j.js","./TownPage-BvMVDd91.js","./ajl-rewards-DFK0Q7fw.js","./ZenDojoPage-CcFULI7f.js","./ZenDojoPage-DhL7W_YC.css","./SenseiRoomPage-CCM4EY2a.js","./OmikujiShrinePage-C3CFPhTs.js","./OmikujiShrinePage-Bv7giyRO.css","./OnsenPage-D3F_hfnv.js","./OnsenPage-DJRi4ZAK.css","./MangaLibraryPage-CXYgW7UV.js","./MangaLibraryPage-DO19uY4I.css","./OrigamiStudioPage-BlgRcaO-.js","./OrigamiStudioPage-5Dzq-mKY.css","./RamenShopPage-qBiNUHmA.js","./RamenShopPage-D50UFOq6.css","./KendoTournamentPage-CaG1M2qK.js","./KendoTournamentPage-o147VzXG.css","./NekoCafePage-ECEr325j.js","./NekoCafePage-Br5wOMaO.css","./TeaCeremonyPage-Cxt5aVFM.js","./TeaCeremonyPage-GZynvGir.css","./MechaGaragePage-CwLkWSbA.js","./MechaGaragePage-Bmcl3KF2.css","./TaikoMasterPage-5_O28gR4.js","./StoryQuestPage-BIWGLyNV.js","./DailyStudySession-DmqrhW9V.js","./study-os-C1PgoW7A.css","./DailyStudyResults-BygOB-dw.js","./AIGameHelper-DJcZivzu.js","./content-errors-D90Pz2ps.js","./study-results-DtyGPqxP.js","./NotFound-Izg_M7ie.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./vendor-runtime-BbOs9S9B.js";
import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { u as useAppStore, aB as ROUTE_PATHS, aC as RouteErrorBoundary, aD as RouteLoadingShell, aE as useIsAdmin, aF as primaryRouteLoaders, aG as clearChunkReloadClaim } from "./index-BEJSIlFS.js";
import { u as useLocation, R as Routes, d as Route, N as Navigate } from "./vendor-router-Dx6RIovR.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-supabase-DTEAj5J1.js";
let historyStack = [];
function getDirection(pathname) {
  const prevIdx = historyStack.lastIndexOf(pathname);
  if (prevIdx >= 0 && prevIdx < historyStack.length - 1) {
    historyStack = historyStack.slice(0, prevIdx + 1);
    return "back";
  }
  historyStack.push(pathname);
  if (historyStack.length > 50) historyStack = historyStack.slice(-30);
  return "forward";
}
function PageTransition({ children }) {
  const location = useLocation();
  const containerRef = reactExports.useRef(null);
  const isFirstMount = reactExports.useRef(true);
  reactExports.useLayoutEffect(() => {
    var _a;
    const el = containerRef.current;
    if (!el) return;
    const dir = getDirection(location.pathname);
    const animClass = isFirstMount.current || dir !== "back" ? "n4-page-push" : "n4-page-pop";
    isFirstMount.current = false;
    try {
      if (useAppStore.getState().reducedMotion) return;
    } catch (e) {
    }
    if ((_a = window.matchMedia) == null ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    el.classList.remove("n4-page-push", "n4-page-pop");
    void el.offsetWidth;
    el.classList.add(animClass);
    const onEnd = () => el.classList.remove(animClass);
    el.addEventListener("animationend", onEnd, { once: true });
    return () => {
      el.removeEventListener("animationend", onEnd);
    };
  }, [location.pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, className: "n4-page-transition", children });
}
const QuestChainPage = reactExports.lazy(() => __vitePreload(() => import("./QuestChainPage-1bslP90_.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0, import.meta.url));
const Content = reactExports.lazy(primaryRouteLoaders["/content"]);
const Settings = reactExports.lazy(primaryRouteLoaders["/settings"]);
const TrainerPage = reactExports.lazy(() => __vitePreload(() => import("./TrainerPage-CzaCoQ2m.js"), true ? __vite__mapDeps([9,4,1,3,5,6,7,8,10]) : void 0, import.meta.url));
const PracticeHub = reactExports.lazy(primaryRouteLoaders["/practice"]);
const ToolsPanel = reactExports.lazy(() => __vitePreload(() => import("./ToolsPanel-DVXChPP8.js"), true ? __vite__mapDeps([11,1,12,5,3,4,6,7,8,13,14,15]) : void 0, import.meta.url));
const Lookup = reactExports.lazy(() => __vitePreload(() => import("./lookup-UkoT7MA1.js"), true ? __vite__mapDeps([16,1,3,4,5,6,7,8,17,10,18,19]) : void 0, import.meta.url));
const AITutor = reactExports.lazy(() => __vitePreload(() => import("./ai-tutor-_IL-DJS1.js"), true ? __vite__mapDeps([20,4,1,21,3,5,6,7,8,22,23,19,24]) : void 0, import.meta.url));
const Tatoeba = reactExports.lazy(() => __vitePreload(() => import("./tatoeba-nQntoJ6h.js"), true ? __vite__mapDeps([25,1,3,4,5,6,7,8,19]) : void 0, import.meta.url));
const AdminDashboard = reactExports.lazy(() => __vitePreload(() => import("./AdminDashboard-Dpk_kQBd.js"), true ? __vite__mapDeps([26,1,3,4,5,6,7,8,27,28]) : void 0, import.meta.url));
const Inbox = reactExports.lazy(() => __vitePreload(() => import("./Inbox-CKanfJx3.js"), true ? __vite__mapDeps([29,1,3,4,5,6,7,8,28]) : void 0, import.meta.url));
const ChallengeQuiz = reactExports.lazy(() => __vitePreload(() => import("./ChallengeQuiz-CJxXarkr.js"), true ? __vite__mapDeps([30,1,3,4,5,6,7,8,28]) : void 0, import.meta.url));
const Analytics = reactExports.lazy(() => __vitePreload(() => import("./Analytics-DpQ8t--Y.js"), true ? __vite__mapDeps([31,1,3,4,5,6,7,8,10]) : void 0, import.meta.url));
const ShopPage = reactExports.lazy(() => __vitePreload(() => import("./ShopPage-DSMBI66p.js"), true ? __vite__mapDeps([32,1,3,4,5,6,7,8,33,27,34,35,36,37]) : void 0, import.meta.url));
const InventoryPage = reactExports.lazy(() => __vitePreload(() => import("./InventoryPage-c-RFh7Rq.js"), true ? __vite__mapDeps([38,1,3,4,5,6,7,8,34,27,35,36,37]) : void 0, import.meta.url));
const MissionsPage = reactExports.lazy(() => __vitePreload(() => import("./MissionsPage-DdidGU7N.js"), true ? __vite__mapDeps([39,1,3,4,5,6,7,8,40,33,41,42,37]) : void 0, import.meta.url));
const GachaPage = reactExports.lazy(() => __vitePreload(() => import("./GachaPage-CoSFjp5W.js"), true ? __vite__mapDeps([43,1,3,4,5,6,7,8,33,34,44,45,46,47,48,49,37]) : void 0, import.meta.url));
const PetPage = reactExports.lazy(() => __vitePreload(() => import("./PetPage-YM4WaXUj.js"), true ? __vite__mapDeps([50,1,3,4,5,6,7,8,37]) : void 0, import.meta.url));
const CollectionsPage = reactExports.lazy(() => __vitePreload(() => import("./CollectionsPage-DI_fTdfo.js"), true ? __vite__mapDeps([51,1,3,4,5,6,7,8,34,35,36,37]) : void 0, import.meta.url));
const StudyRoomPage = reactExports.lazy(() => __vitePreload(() => import("./StudyRoomPage-CJR__01Q.js"), true ? __vite__mapDeps([52,1,3,4,5,6,7,8,42]) : void 0, import.meta.url));
const EconomyStatsPage = reactExports.lazy(() => __vitePreload(() => import("./EconomyStatsPage-BX55xGlL.js"), true ? __vite__mapDeps([53,1,3,4,5,6,7,8,34]) : void 0, import.meta.url));
const GamblingPage = reactExports.lazy(() => __vitePreload(() => import("./GamblingPage-Bd8AaQyL.js"), true ? __vite__mapDeps([54,4,1,3,5,6,7,8,41,40,55,36,56,45,44,46,47,48,57,37]) : void 0, import.meta.url));
reactExports.lazy(() => __vitePreload(() => import("./DraftFeaturesPage-CpZhdsI4.js"), true ? __vite__mapDeps([58,1,3,4,5,6,7,8,59]) : void 0, import.meta.url));
const ProfilePage = reactExports.lazy(primaryRouteLoaders["/profile"]);
const MarketPage = reactExports.lazy(() => __vitePreload(() => import("./MarketPage-C_j717Iv.js"), true ? __vite__mapDeps([60,1,3,4,5,6,7,8,42,33,41,37]) : void 0, import.meta.url));
const ScratchCardPage = reactExports.lazy(() => __vitePreload(() => import("./ScratchCardPage-CptfwX7u.js"), true ? __vite__mapDeps([61,1,3,4,5,6,7,8,41,56,45,44,46,47,48,35,36,37]) : void 0, import.meta.url));
const TreasureHuntPage = reactExports.lazy(() => __vitePreload(() => import("./TreasureHuntPage-DUQlqY59.js"), true ? __vite__mapDeps([62,4,1,3,5,6,7,8,41,55,36,56,45,44,46,47,48,63]) : void 0, import.meta.url));
const SkillTreePage = reactExports.lazy(() => __vitePreload(() => import("./SkillTreePage-qSRcKK_0.js"), true ? __vite__mapDeps([64,1,3,4,5,6,7,8,59]) : void 0, import.meta.url));
const BountyBoardPage = reactExports.lazy(() => __vitePreload(() => import("./BountyBoardPage-BRIbJswj.js"), true ? __vite__mapDeps([65,1,3,4,5,6,7,8,59]) : void 0, import.meta.url));
const FactionPage = reactExports.lazy(() => __vitePreload(() => import("./FactionPage-B46LPkRw.js"), true ? __vite__mapDeps([66,1,3,4,5,6,7,8,59]) : void 0, import.meta.url));
const VillagePage = reactExports.lazy(() => __vitePreload(() => import("./VillagePage-Cl7wxsFP.js"), true ? __vite__mapDeps([67,1,68,3,4,5,6,7,8,59]) : void 0, import.meta.url));
const TownPage = reactExports.lazy(() => __vitePreload(() => import("./TownPage-BvMVDd91.js"), true ? __vite__mapDeps([69,4,1,3,5,6,7,8,70,59]) : void 0, import.meta.url));
const ZenDojoPage = reactExports.lazy(() => __vitePreload(() => import("./ZenDojoPage-CcFULI7f.js"), true ? __vite__mapDeps([71,4,1,68,55,36,56,45,46,47,3,5,6,7,8,70,59,72]) : void 0, import.meta.url));
const SenseiRoomPage = reactExports.lazy(() => __vitePreload(() => import("./SenseiRoomPage-CCM4EY2a.js"), true ? __vite__mapDeps([73,1,68,3,4,5,6,7,8,59]) : void 0, import.meta.url));
const OmikujiShrinePage = reactExports.lazy(() => __vitePreload(() => import("./OmikujiShrinePage-C3CFPhTs.js"), true ? __vite__mapDeps([74,4,1,3,5,6,7,8,55,36,40,41,56,45,44,46,47,48,75]) : void 0, import.meta.url));
const OnsenPage = reactExports.lazy(() => __vitePreload(() => import("./OnsenPage-D3F_hfnv.js"), true ? __vite__mapDeps([76,4,1,3,5,6,7,8,55,36,56,45,46,47,48,77]) : void 0, import.meta.url));
const MangaLibraryPage = reactExports.lazy(() => __vitePreload(() => import("./MangaLibraryPage-CXYgW7UV.js"), true ? __vite__mapDeps([78,4,1,3,5,6,7,8,55,36,56,45,47,59,79]) : void 0, import.meta.url));
const OrigamiStudioPage = reactExports.lazy(() => __vitePreload(() => import("./OrigamiStudioPage-BlgRcaO-.js"), true ? __vite__mapDeps([80,4,1,3,5,6,7,8,68,55,36,56,45,47,59,81]) : void 0, import.meta.url));
const RamenShopPage = reactExports.lazy(() => __vitePreload(() => import("./RamenShopPage-qBiNUHmA.js"), true ? __vite__mapDeps([82,4,1,3,5,6,7,8,55,36,56,45,46,47,44,48,83]) : void 0, import.meta.url));
const KendoTournamentPage = reactExports.lazy(() => __vitePreload(() => import("./KendoTournamentPage-CaG1M2qK.js"), true ? __vite__mapDeps([84,4,1,3,5,6,7,8,55,36,56,45,46,47,48,85]) : void 0, import.meta.url));
const NekoCafePage = reactExports.lazy(() => __vitePreload(() => import("./NekoCafePage-ECEr325j.js"), true ? __vite__mapDeps([86,1,3,4,5,6,7,8,68,56,45,46,47,48,59,87]) : void 0, import.meta.url));
const TeaCeremonyPage = reactExports.lazy(() => __vitePreload(() => import("./TeaCeremonyPage-Cxt5aVFM.js"), true ? __vite__mapDeps([88,4,1,3,5,6,7,8,55,36,56,45,46,47,48,89]) : void 0, import.meta.url));
const MechaGaragePage = reactExports.lazy(() => __vitePreload(() => import("./MechaGaragePage-CwLkWSbA.js"), true ? __vite__mapDeps([90,4,1,68,3,5,6,7,8,55,36,56,45,46,47,48,91]) : void 0, import.meta.url));
const TaikoMasterPage = reactExports.lazy(() => __vitePreload(() => import("./TaikoMasterPage-5_O28gR4.js"), true ? __vite__mapDeps([92,1,3,4,5,6,7,8]) : void 0, import.meta.url));
const StoryQuestPage = reactExports.lazy(() => __vitePreload(() => import("./StoryQuestPage-BIWGLyNV.js"), true ? __vite__mapDeps([93,1,3,4,5,6,7,8,59]) : void 0, import.meta.url));
const DailyStudySession = reactExports.lazy(() => __vitePreload(() => import("./DailyStudySession-DmqrhW9V.js"), true ? __vite__mapDeps([94,1,3,4,5,6,7,8,95]) : void 0, import.meta.url));
const DailyStudyResults = reactExports.lazy(() => __vitePreload(() => import("./DailyStudyResults-BygOB-dw.js"), true ? __vite__mapDeps([96,1,3,4,5,6,7,8,97,22,23,19,98,99,95]) : void 0, import.meta.url));
const NotFound = reactExports.lazy(() => __vitePreload(() => import("./NotFound-Izg_M7ie.js"), true ? __vite__mapDeps([100,1,6]) : void 0, import.meta.url));
function ChunkLoadSuccess() {
  reactExports.useEffect(() => {
    const timeout = window.setTimeout(() => clearChunkReloadClaim(sessionStorage), 1e4);
    return () => window.clearTimeout(timeout);
  }, []);
  return null;
}
function AdminRoute({ children }) {
  const userId = useAppStore((state) => {
    var _a;
    return (_a = state.user) == null ? void 0 : _a.id;
  });
  const { isAdmin, loading } = useIsAdmin();
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(RouteLoadingShell, { cards: 3, lines: 5 });
  if (!userId || !isAdmin) return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/", replace: true });
  return children;
}
function LazyPage({ children, cards }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RouteErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(RouteLoadingShell, { cards, lines: 5 }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkLoadSuccess, {}),
    children
  ] }) });
}
const AI_FEATURE_ROUTE_ALIASES = [
  "ai-quiz",
  "ai-grammar-drill",
  "ai-mistakes",
  "ai-navigator",
  "ai-jlpt-predict",
  "ai-jlpt-predictor",
  "ai-wordmap",
  "ai-story",
  "ai-news",
  "ai-lyrics",
  "ai-diary",
  "ai-scene",
  "ai-kanji-detective"
];
const coreRoutes = [
  { path: ROUTE_PATHS.content, element: /* @__PURE__ */ jsxRuntimeExports.jsx(Content, {}), cards: 6 },
  { path: ROUTE_PATHS.contentSection, element: /* @__PURE__ */ jsxRuntimeExports.jsx(Content, {}), cards: 6 },
  { path: ROUTE_PATHS.practice, element: /* @__PURE__ */ jsxRuntimeExports.jsx(PracticeHub, {}), cards: 5 },
  { path: ROUTE_PATHS.trainer, element: /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerPage, {}), cards: 5 },
  { path: ROUTE_PATHS.trainerMode, element: /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerPage, {}), cards: 5 },
  { path: ROUTE_PATHS.studySession, element: /* @__PURE__ */ jsxRuntimeExports.jsx(DailyStudySession, {}), cards: 1 },
  { path: ROUTE_PATHS.studyResults, element: /* @__PURE__ */ jsxRuntimeExports.jsx(DailyStudyResults, {}), cards: 1 },
  { path: ROUTE_PATHS.chain, element: /* @__PURE__ */ jsxRuntimeExports.jsx(QuestChainPage, {}), cards: 3 },
  { path: ROUTE_PATHS.dictionary, element: /* @__PURE__ */ jsxRuntimeExports.jsx(Lookup, {}), cards: 0 },
  { path: ROUTE_PATHS.aiTutor, element: /* @__PURE__ */ jsxRuntimeExports.jsx(AITutor, {}), cards: 6 },
  { path: ROUTE_PATHS.tatoeba, element: /* @__PURE__ */ jsxRuntimeExports.jsx(Tatoeba, {}), cards: 4 },
  { path: ROUTE_PATHS.tools, element: /* @__PURE__ */ jsxRuntimeExports.jsx(ToolsPanel, {}), cards: 3 },
  { path: ROUTE_PATHS.inbox, element: /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, {}), cards: 4 },
  { path: ROUTE_PATHS.challenge, element: /* @__PURE__ */ jsxRuntimeExports.jsx(ChallengeQuiz, {}), cards: 4 }
];
const economyRoutes = [
  { path: ROUTE_PATHS.shop, element: /* @__PURE__ */ jsxRuntimeExports.jsx(ShopPage, {}), cards: 6 },
  { path: ROUTE_PATHS.inventory, element: /* @__PURE__ */ jsxRuntimeExports.jsx(InventoryPage, {}), cards: 4 },
  { path: ROUTE_PATHS.missions, element: /* @__PURE__ */ jsxRuntimeExports.jsx(MissionsPage, {}), cards: 4 },
  { path: ROUTE_PATHS.gacha, element: /* @__PURE__ */ jsxRuntimeExports.jsx(GachaPage, {}), cards: 4 },
  { path: ROUTE_PATHS.pets, element: /* @__PURE__ */ jsxRuntimeExports.jsx(PetPage, {}), cards: 4 },
  { path: ROUTE_PATHS.collections, element: /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionsPage, {}), cards: 4 },
  { path: ROUTE_PATHS.studyRoom, element: /* @__PURE__ */ jsxRuntimeExports.jsx(StudyRoomPage, {}), cards: 4 },
  { path: ROUTE_PATHS.economyStats, element: /* @__PURE__ */ jsxRuntimeExports.jsx(EconomyStatsPage, {}), cards: 4 },
  { path: ROUTE_PATHS.gambling, element: /* @__PURE__ */ jsxRuntimeExports.jsx(GamblingPage, {}), cards: 4 },
  { path: ROUTE_PATHS.market, element: /* @__PURE__ */ jsxRuntimeExports.jsx(MarketPage, {}), cards: 4 },
  { path: ROUTE_PATHS.scratchCards, element: /* @__PURE__ */ jsxRuntimeExports.jsx(ScratchCardPage, {}), cards: 4 },
  { path: ROUTE_PATHS.treasureHunt, element: /* @__PURE__ */ jsxRuntimeExports.jsx(TreasureHuntPage, {}), cards: 4 }
];
const profileRoutes = [
  { path: ROUTE_PATHS.profile, element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProfilePage, {}), cards: 4 },
  { path: ROUTE_PATHS.analytics, element: /* @__PURE__ */ jsxRuntimeExports.jsx(Analytics, {}), cards: 4 },
  { path: ROUTE_PATHS.settings, element: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, {}), cards: 4 }
];
const ajlRoutes = [
  { path: ROUTE_PATHS.skillTree, element: /* @__PURE__ */ jsxRuntimeExports.jsx(SkillTreePage, {}), cards: 4 },
  { path: ROUTE_PATHS.bounties, element: /* @__PURE__ */ jsxRuntimeExports.jsx(BountyBoardPage, {}), cards: 3 },
  { path: ROUTE_PATHS.faction, element: /* @__PURE__ */ jsxRuntimeExports.jsx(FactionPage, {}), cards: 3 },
  { path: ROUTE_PATHS.village, element: /* @__PURE__ */ jsxRuntimeExports.jsx(VillagePage, {}), cards: 4 },
  { path: ROUTE_PATHS.town, element: /* @__PURE__ */ jsxRuntimeExports.jsx(TownPage, {}), cards: 3 },
  { path: ROUTE_PATHS.zenDojo, element: /* @__PURE__ */ jsxRuntimeExports.jsx(ZenDojoPage, {}), cards: 2 },
  { path: ROUTE_PATHS.sensei, element: /* @__PURE__ */ jsxRuntimeExports.jsx(SenseiRoomPage, {}), cards: 3 },
  { path: ROUTE_PATHS.shrine, element: /* @__PURE__ */ jsxRuntimeExports.jsx(OmikujiShrinePage, {}), cards: 2 },
  { path: ROUTE_PATHS.onsen, element: /* @__PURE__ */ jsxRuntimeExports.jsx(OnsenPage, {}), cards: 2 },
  { path: ROUTE_PATHS.manga, element: /* @__PURE__ */ jsxRuntimeExports.jsx(MangaLibraryPage, {}), cards: 3 },
  { path: ROUTE_PATHS.origami, element: /* @__PURE__ */ jsxRuntimeExports.jsx(OrigamiStudioPage, {}), cards: 3 },
  { path: ROUTE_PATHS.ramen, element: /* @__PURE__ */ jsxRuntimeExports.jsx(RamenShopPage, {}), cards: 3 },
  { path: ROUTE_PATHS.kendo, element: /* @__PURE__ */ jsxRuntimeExports.jsx(KendoTournamentPage, {}), cards: 3 },
  { path: ROUTE_PATHS.neko, element: /* @__PURE__ */ jsxRuntimeExports.jsx(NekoCafePage, {}), cards: 3 },
  { path: ROUTE_PATHS.tea, element: /* @__PURE__ */ jsxRuntimeExports.jsx(TeaCeremonyPage, {}), cards: 3 },
  { path: ROUTE_PATHS.mecha, element: /* @__PURE__ */ jsxRuntimeExports.jsx(MechaGaragePage, {}), cards: 3 },
  { path: ROUTE_PATHS.taiko, element: /* @__PURE__ */ jsxRuntimeExports.jsx(TaikoMasterPage, {}), cards: 3 },
  { path: ROUTE_PATHS.story, element: /* @__PURE__ */ jsxRuntimeExports.jsx(StoryQuestPage, {}), cards: 3 }
];
function ActivityRouter({ routeLocation }) {
  const actualLocation = useLocation();
  const parsed = routeLocation ? new URL(routeLocation, "https://haru.invalid") : null;
  const location = parsed ? { pathname: parsed.pathname, search: parsed.search, hash: parsed.hash } : actualLocation;
  const allGeneratedRoutes = [
    ...coreRoutes,
    ...economyRoutes,
    ...profileRoutes,
    ...ajlRoutes
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { location, children: [
    allGeneratedRoutes.map((route) => {
      var _a;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: route.path,
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyPage, { cards: (_a = route.cards) != null ? _a : 4, children: route.element })
        },
        route.path
      );
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: ROUTE_PATHS.admin,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyPage, { cards: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboard, {}) }) })
      }
    ),
    AI_FEATURE_ROUTE_ALIASES.map((featureId) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: `/${featureId}`,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Navigate,
          {
            to: `/ai-tutor?feature=${featureId === "ai-jlpt-predict" ? "ai-jlpt-predictor" : featureId}`,
            replace: true
          }
        )
      },
      featureId
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/character-stats", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/world", replace: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/stats", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/world", replace: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/explore", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/world", replace: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/economy", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/world", replace: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: ROUTE_PATHS.draftFeatures,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/world", replace: true })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/dev/design-system",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/", replace: true })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyPage, { cards: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFound, {}) }) })
  ] }) });
}
export {
  ActivityRouter as default
};
