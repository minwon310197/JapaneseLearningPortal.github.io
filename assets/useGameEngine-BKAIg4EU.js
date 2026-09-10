import { a as create, r as reactExports } from "./vendor-react-BUL8WuXG.js";
import { H as getQualityConfig } from "./index-BEJSIlFS.js";
const useGameStore = create((set, get) => ({
  score: 0,
  combo: 0,
  hp: 100,
  gameState: "MENU",
  // MENU, PLAYING, GAME_OVER,
  addScore: (pts) => set((s) => ({ score: s.score + pts, combo: s.combo + 1 })),
  resetCombo: () => set({ combo: 0 }),
  takeDamage: (dmg) => set((s) => ({ hp: Math.max(0, s.hp - dmg) })),
  setGameState: (state) => set({ gameState: state })
}));
class EntityPool {
  constructor(factoryFunc, poolSize = 500) {
    this.pool = [];
    this.factory = factoryFunc;
    for (let i = 0; i < poolSize; i++) {
      this.pool.push(this.factory(i));
    }
  }
  spawn(initData) {
    const entity = this.pool.find((e) => !e.active);
    if (entity) {
      entity.active = true;
      Object.assign(entity, initData);
      return entity;
    }
    return null;
  }
  despawn(entity) {
    if (entity) {
      entity.active = false;
    }
  }
  getActiveEntities() {
    return this.pool.filter((e) => e.active);
  }
}
function useGameEngine(systems = []) {
  const ecsStore = reactExports.useRef({
    time: 0,
    deltaTime: 0,
    isHitStop: false,
    hitStopEndTime: 0
  });
  const reqRef = reactExports.useRef();
  reactExports.useEffect(() => {
    const quality = getQualityConfig();
    const targetFps = Math.max(15, Math.min(60, quality.frameCap || 60));
    const frameMs = 1e3 / targetFps;
    let lastTime = performance.now();
    let lastStep = lastTime;
    const loop = (now) => {
      if (typeof document !== "undefined" && document.hidden) {
        lastTime = now;
        lastStep = now;
        reqRef.current = requestAnimationFrame(loop);
        return;
      }
      if (now - lastStep < frameMs) {
        reqRef.current = requestAnimationFrame(loop);
        return;
      }
      lastStep = now;
      if (ecsStore.current.isHitStop) {
        if (now >= ecsStore.current.hitStopEndTime) {
          ecsStore.current.isHitStop = false;
          lastTime = now;
        } else {
          reqRef.current = requestAnimationFrame(loop);
          return;
        }
      }
      let dt = (now - lastTime) / 1e3;
      if (dt > 0.1) dt = frameMs / 1e3;
      lastTime = now;
      ecsStore.current.time = now;
      ecsStore.current.deltaTime = dt;
      for (const sys of systems) {
        if (sys.update) {
          sys.update(dt, ecsStore.current);
        }
      }
      reqRef.current = requestAnimationFrame(loop);
    };
    reqRef.current = requestAnimationFrame(loop);
    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, [systems]);
  const triggerHitStop = (durationMs = 50) => {
    ecsStore.current.isHitStop = true;
    ecsStore.current.hitStopEndTime = performance.now() + durationMs;
  };
  return { engineContext: ecsStore, triggerHitStop };
}
export {
  EntityPool as E,
  useGameEngine as a,
  useGameStore as u
};
