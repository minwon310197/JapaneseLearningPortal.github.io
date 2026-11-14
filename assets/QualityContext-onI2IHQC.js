import { r as reactExports } from "./vendor-react-DMamQVB4.js";
import { c as useAppStore } from "./index-BgvNAguN.js";
const DEFAULT_DEVICE_PROBE = Object.freeze({
  isMobile: false,
  isTinyScreen: false,
  hardwareConcurrency: 4,
  deviceMemory: 4,
  crowdScale: 1,
  ambientScale: 1,
  viewDistance: 150,
  dprMax: 1
});
let cachedDeviceProbe = null;
function readNavigatorNumber(navigatorRef, key, fallback) {
  const value = Number(navigatorRef == null ? void 0 : navigatorRef[key]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}
function readScreenWidth(globalRef) {
  var _a;
  const width = Number((globalRef == null ? void 0 : globalRef.innerWidth) || ((_a = globalRef == null ? void 0 : globalRef.screen) == null ? void 0 : _a.width) || 0);
  return Number.isFinite(width) && width > 0 ? width : 1024;
}
function createDeviceProbe(globalRef = globalThis) {
  const navigatorRef = globalRef == null ? void 0 : globalRef.navigator;
  const userAgent = String((navigatorRef == null ? void 0 : navigatorRef.userAgent) || "");
  const hardwareConcurrency = readNavigatorNumber(navigatorRef, "hardwareConcurrency", 4);
  const deviceMemory = readNavigatorNumber(navigatorRef, "deviceMemory", 4);
  const screenWidth = readScreenWidth(globalRef);
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent) || screenWidth <= 768;
  const isTinyScreen = screenWidth <= 430;
  const weakCpu = hardwareConcurrency <= 4;
  const lowMemory = deviceMemory <= 4;
  const constrained = isMobile || isTinyScreen || weakCpu || lowMemory;
  return Object.freeze({
    isMobile,
    isTinyScreen,
    hardwareConcurrency,
    deviceMemory,
    crowdScale: constrained ? 0.65 : 1,
    ambientScale: constrained ? 0.45 : 1,
    viewDistance: isTinyScreen ? 90 : isMobile ? 110 : 150,
    dprMax: isTinyScreen ? 0.75 : isMobile ? 0.85 : 1
  });
}
function getDeviceProbe() {
  if (!cachedDeviceProbe) cachedDeviceProbe = createDeviceProbe();
  return cachedDeviceProbe || DEFAULT_DEVICE_PROBE;
}
const BASE_LOW = Object.freeze({
  tier: "low",
  shadows: false,
  shadowMapSize: 0,
  shadowSpan: 0,
  environment: null,
  antialias: false,
  enablePostProcessing: false,
  enable3D: true,
  enableDetailProps: false,
  enableAnimalScatter: false,
  enableMixedTerrain: false,
  enableRiver: false,
  enableMistPlanes: false,
  enablePetals: false,
  enableButterflies: false,
  enableMegaNature: false,
  enableFireflies: false,
  enableClouds: false,
  enableStarPulse: false,
  enableLanternFlicker: false,
  enableNPCBob: false,
  enableLakeRipple: false,
  enableCollectibleFloat: false,
  enableBuildingHover: false,
  enableMagicAura: false,
  enableEnemyLOD: true,
  enableAmbientLife: false,
  monumentVfxTier: "off",
  countMultiplier: 0.02,
  maxNPCs: 1,
  maxDetailProps: 0,
  scatterMultiplier: 0.01,
  pebbleTileCap: 80,
  lanternDetail: "off",
  viewDistance: 90,
  ambientScale: 1,
  crowdScale: 1,
  frameCap: 24,
  deviceProbe: DEFAULT_DEVICE_PROBE
});
const BASE_MED = Object.freeze({
  ...BASE_LOW,
  tier: "medium",
  shadows: false,
  shadowMapSize: 1024,
  shadowSpan: 60,
  antialias: false,
  enablePostProcessing: false,
  enableDetailProps: true,
  enableMixedTerrain: true,
  enablePetals: false,
  enableFireflies: false,
  enableClouds: true,
  enableLanternFlicker: true,
  enableNPCBob: true,
  enableLakeRipple: true,
  enableCollectibleFloat: true,
  enableBuildingHover: true,
  enableAmbientLife: true,
  monumentVfxTier: "lite",
  countMultiplier: 0.15,
  maxNPCs: 8,
  maxDetailProps: 7,
  scatterMultiplier: 0.18,
  pebbleTileCap: 200,
  lanternDetail: "lite",
  viewDistance: 220,
  frameCap: 45
});
const BASE_HIGH = Object.freeze({
  ...BASE_LOW,
  tier: "high",
  shadows: false,
  shadowMapSize: 2048,
  shadowSpan: 100,
  antialias: true,
  enablePostProcessing: false,
  enableDetailProps: true,
  enableAnimalScatter: true,
  enableMixedTerrain: true,
  enableRiver: true,
  enableMistPlanes: false,
  enablePetals: true,
  enableButterflies: false,
  enableMegaNature: true,
  enableFireflies: true,
  enableClouds: true,
  enableStarPulse: true,
  enableLanternFlicker: true,
  enableNPCBob: true,
  enableLakeRipple: true,
  enableCollectibleFloat: true,
  enableBuildingHover: true,
  enableMagicAura: true,
  enableAmbientLife: true,
  monumentVfxTier: "full",
  countMultiplier: 0.35,
  maxNPCs: 8,
  maxDetailProps: 10,
  scatterMultiplier: 0.38,
  pebbleTileCap: 400,
  lanternDetail: "full",
  viewDistance: 220,
  frameCap: 60
});
const TIER_TABLE = Object.freeze({
  low: BASE_LOW,
  medium: BASE_MED,
  high: BASE_HIGH
});
function pickRecommendedTier(probe = getDeviceProbe()) {
  if (!probe) return "low";
  if (probe.isMobile || probe.isTinyScreen) return "low";
  const cores = Number(probe.hardwareConcurrency) || 4;
  const mem = Number(probe.deviceMemory) || 4;
  if (cores >= 8 && mem >= 8) return "high";
  if (cores >= 4 && mem >= 4) return "medium";
  return "low";
}
function normaliseTier(tier) {
  return TIER_TABLE[tier] ? tier : "low";
}
function createQualityProfile(tier = "low", deviceProbe = getDeviceProbe()) {
  const base = TIER_TABLE[normaliseTier(tier)];
  const crowdScale = Number.isFinite(deviceProbe == null ? void 0 : deviceProbe.crowdScale) ? deviceProbe.crowdScale : 1;
  const ambientScale = Number.isFinite(deviceProbe == null ? void 0 : deviceProbe.ambientScale) ? deviceProbe.ambientScale : 1;
  const dprMax = Number.isFinite(deviceProbe == null ? void 0 : deviceProbe.dprMax) ? deviceProbe.dprMax : 1;
  const dprFloor = base.tier === "high" ? 0.9 : base.tier === "medium" ? 0.75 : 0.5;
  const dprCeiling = base.tier === "high" ? 1.5 : base.tier === "medium" ? 1.1 : 0.75;
  const minNPCs = base.tier === "low" ? 0 : 2;
  const minDetailProps = base.tier === "low" ? 0 : 2;
  return Object.freeze({
    ...base,
    antialias: base.antialias && !(deviceProbe == null ? void 0 : deviceProbe.isMobile) && !(deviceProbe == null ? void 0 : deviceProbe.isTinyScreen),
    dpr: [dprFloor, Math.max(dprFloor, Math.min(dprCeiling, dprMax * dprCeiling))],
    countMultiplier: base.countMultiplier * ambientScale,
    maxNPCs: Math.max(minNPCs, Math.round(base.maxNPCs * crowdScale)),
    maxDetailProps: Math.max(minDetailProps, Math.round(base.maxDetailProps * ambientScale)),
    scatterMultiplier: base.scatterMultiplier * ambientScale,
    pebbleTileCap: Math.max(base.tier === "low" ? 40 : 80, Math.round(base.pebbleTileCap * ambientScale)),
    viewDistance: Math.min(
      base.viewDistance,
      Number.isFinite(deviceProbe == null ? void 0 : deviceProbe.viewDistance) ? deviceProbe.viewDistance * (base.viewDistance / 150) : base.viewDistance
    ),
    frameCap: (deviceProbe == null ? void 0 : deviceProbe.isMobile) || (deviceProbe == null ? void 0 : deviceProbe.isTinyScreen) ? Math.min(base.frameCap, 30) : base.frameCap,
    ambientScale,
    crowdScale,
    deviceProbe
  });
}
function createLiteQualityProfile(deviceProbe = getDeviceProbe()) {
  return createQualityProfile("low", deviceProbe);
}
const LITE_PROFILE = createLiteQualityProfile(DEFAULT_DEVICE_PROBE);
const QUALITY_TIERS = Object.freeze({ LOW: "low", MEDIUM: "medium", HIGH: "high" });
const QualityCtx = reactExports.createContext({ tier: "low", config: LITE_PROFILE });
function resolveTier(gfxTier, energyMode = "performance") {
  var _a;
  const effective = (_a = QUALITY_TIERS[gfxTier == null ? void 0 : gfxTier.toUpperCase()]) != null ? _a : pickRecommendedTier(getDeviceProbe());
  if (energyMode !== "quality" && effective === "high") return "medium";
  return effective;
}
function useQuality() {
  return reactExports.useContext(QualityCtx);
}
function getQualityConfig() {
  try {
    const state = useAppStore.getState();
    return createQualityProfile(resolveTier(state.gfxTier, state.energyMode), getDeviceProbe());
  } catch (e) {
    return LITE_PROFILE;
  }
}
export {
  getQualityConfig as g,
  useQuality as u
};
