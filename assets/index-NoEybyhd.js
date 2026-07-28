const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vendor-three-webgpu-BJO4mfMz.js","./vendor-three-CoFVKTas.js"])))=>i.map(i=>d[i]);
import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { G as GameShell, T as TrainerTopBar } from "./TrainerTopBar-9qsLJC8Z.js";
import { u as useScoreEngine, T as TrainerContext } from "./useScoreEngine-Cjc3MMN3.js";
import { c as createCombatText, a as createBattleBanner, g as getComboTier, G as GameplayEffects, b as getBossMood } from "./feature-particles-DIErvp6i.js";
import { c as create, bW as getQualityConfig, _ as __vitePreload, ce as playSFX, aS as stableAnswerKey, aT as equalsAnswerText, V as onStopAll, H as stopSpeech, as as speakJP } from "./feature-3d-ClP3ARU5.js";
import { u as useVocabItems, a as useKanjiItems, b as useGrammarItems, c as useSectionList } from "./useDataHelper-BnDD_cSP.js";
import "./index-ZUSnnghe.js";
import "./vendor-router-BTJacUKt.js";
import "./vendor-icons-DHCyxOF-.js";
import "./vendor-three-CoFVKTas.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./empty-Bvm-mx50.js";
import "./quest-chains-CiwzmCpJ.js";
const MINI_BOSSES = [
  {
    name: "Kappa",
    emoji: "🐢",
    hp: 20,
    miniBoss: true,
    intro: "キャッパ が あらわれた！",
    introVi: "Kappa xuất hiện! Sinh vật nước thần bí!",
    defeatMsg: "Kappa bị đánh bại — chiếc đĩa trên đầu nó bị làm ướt!",
    specialAttack: "💧 Cuộn nước! Bạn mất 20 HP!",
    specialDmgToPlayer: 20,
    rageThreshold: 10
    // activates special when HP drops below this
  },
  {
    name: "Tengu",
    emoji: "👺",
    hp: 25,
    miniBoss: true,
    intro: "テング が あらわれた！",
    introVi: "Quỷ Tengu xuất hiện! Hãy cẩn thận với cánh quạt!",
    defeatMsg: "Tengu bị đánh bại — chiếc mũi dài lảo đảo!",
    specialAttack: "🌪️ Lốc gió! Bạn mất 15 HP và mất lượt!",
    specialDmgToPlayer: 15,
    rageThreshold: 12
  },
  {
    name: "Oni",
    emoji: "👿",
    hp: 35,
    miniBoss: true,
    intro: "オニ が あらわれた！",
    introVi: "Oni xuất hiện! Quỷ sừng đỏ đáng sợ!",
    defeatMsg: "Oni bị đánh bại — cây gậy sắt rơi xuống đất!",
    specialAttack: "🔥 Đòn gậy lửa! Bạn mất 25 HP!",
    specialDmgToPlayer: 25,
    rageThreshold: 15
  },
  {
    name: "Tanuki",
    emoji: "🦝",
    hp: 18,
    miniBoss: true,
    intro: "タヌキ が あらわれた！",
    introVi: "Tanuki xuất hiện! Hắn sẽ biến hình để đánh lừa bạn!",
    defeatMsg: "Tanuki bị đánh bại — phép biến hình tan biến!",
    specialAttack: "✨ Biến hình! Đáp án bị xáo trộn thêm 1 phút.",
    specialDmgToPlayer: 10,
    rageThreshold: 8
  }
];
const SPECIAL_ATTACKS = [
  {
    id: "lightning",
    name: "⚡ Sét đánh!",
    descVi: "Kiến thức của bạn tạo ra năng lượng! Gây thêm {bonus} sát thương!",
    bonusDmg: 20,
    animation: "flash"
  },
  {
    id: "fire",
    name: "🔥 Cột lửa!",
    descVi: "Ngọn lửa trí tuệ bùng cháy! Gây thêm {bonus} sát thương!",
    bonusDmg: 25,
    animation: "shake"
  },
  {
    id: "ice",
    name: "❄️ Phong tỏa băng!",
    descVi: "Kẻ thù bị đóng băng! Gây thêm {bonus} sát thương!",
    bonusDmg: 15,
    animation: "flash"
  },
  {
    id: "beam",
    name: "💫 Tia sáng!",
    descVi: "Ánh sáng trí tuệ chiếu thẳng! Gây thêm {bonus} sát thương!",
    bonusDmg: 30,
    animation: "shake"
  },
  {
    id: "void",
    name: "🌀 Hư không!",
    descVi: "Kẻ thù bị cuốn vào vùng tri thức! Gây thêm {bonus} sát thương!",
    bonusDmg: 22,
    animation: "flash"
  }
];
const BOSS_DIFFICULTY_EXT = {
  easy: { miniBossEvery: 0, specialEvery: 5, rageEnabled: false },
  normal: { miniBossEvery: 0, specialEvery: 5, rageEnabled: true },
  hard: { miniBossEvery: 10, specialEvery: 5, rageEnabled: true },
  nightmare: { miniBossEvery: 7, specialEvery: 5, rageEnabled: true }
};
const VICTORY_MSGS = [
  "Xuất sắc! Trí tuệ của bạn đã chiến thắng!",
  "Tuyệt vời! JLPT N4 đang chờ bạn!",
  "Không thể tin được! Bạn thật sự mạnh mẽ!",
  "Chiến thắng vẻ vang! Tiếp tục học nhé!"
];
const DEFEAT_MSGS = [
  "Đừng nản! Ôn lại và thử lại nhé!",
  "Thất bại là bước đệm của thành công!",
  "Hãy ôn tập thêm rồi quay lại!",
  "Kẻ thù mạnh hơn lần này — nhưng bạn sẽ mạnh hơn sau!"
];
const useBossECSStore = create((set) => ({
  entities: {},
  // { [id]: { ...components } }
  time: 0,
  isRunning: false,
  addEntity: (id, components) => set((state) => ({
    entities: { ...state.entities, [id]: components }
  })),
  removeEntity: (id) => set((state) => {
    const next = { ...state.entities };
    delete next[id];
    return { entities: next };
  }),
  updateComponent: (id, name, data) => set((state) => {
    const entity = state.entities[id];
    if (!entity) return state;
    return {
      entities: {
        ...state.entities,
        [id]: { ...entity, [name]: { ...entity[name], ...data } }
      }
    };
  })
}));
const HealthComponent = (max = 100) => ({
  type: "health",
  current: max,
  max
});
const TagComponent = (tag) => ({
  type: "tag",
  tag
});
let _poolCounter = 0;
class ObjectPool {
  constructor(factory, initialSize = 50) {
    this.pool = [];
    this.factory = factory;
    for (let i = 0; i < initialSize; i++) this.pool.push(this.factory());
  }
  acquire() {
    return this.pool.length > 0 ? this.pool.pop() : this.factory();
  }
  release(obj) {
    obj.active = false;
    this.pool.push(obj);
  }
}
new ObjectPool(
  () => ({ id: `bullet_${++_poolCounter}`, active: false }),
  100
);
class BehaviorNode {
  constructor(name) {
    this.name = name;
  }
  tick() {
    return "SUCCESS";
  }
}
class Selector extends BehaviorNode {
  constructor(name, children) {
    super(name);
    this.children = children;
  }
  tick(blackboard) {
    for (const child of this.children) {
      const status = child.tick(blackboard);
      if (status !== "FAILURE") return status;
    }
    return "FAILURE";
  }
}
class Sequence extends BehaviorNode {
  constructor(name, children) {
    super(name);
    this.children = children;
  }
  tick(blackboard) {
    for (const child of this.children) {
      const status = child.tick(blackboard);
      if (status !== "SUCCESS") return status;
    }
    return "SUCCESS";
  }
}
class Condition extends BehaviorNode {
  constructor(name, checkFn) {
    super(name);
    this.checkFn = checkFn;
  }
  tick(blackboard) {
    return this.checkFn(blackboard) ? "SUCCESS" : "FAILURE";
  }
}
class Action extends BehaviorNode {
  constructor(name, actionFn) {
    super(name);
    this.actionFn = actionFn;
  }
  tick(blackboard) {
    return this.actionFn(blackboard);
  }
}
function buildBossAI() {
  const isEnraged = new Condition(
    "Máu dưới 30%",
    (bb) => bb.hpPercent < 30
  );
  const enrageAction = new Action(
    "Hồi máu hắc ám",
    (bb) => {
      bb.actionQueue.push({ type: "enrage", heal: 10 });
      return "SUCCESS";
    }
  );
  const checkPlayerMistake = new Condition(
    "Người chơi sai nhiều?",
    (bb) => bb.playerMistakes > 3
  );
  const punishAction = new Action(
    "Nổi điên tấn công",
    (bb) => {
      bb.actionQueue.push({ type: "punish", damage: 20 });
      return "SUCCESS";
    }
  );
  const defaultAttack = new Action(
    "Tấn công cơ bản",
    (bb) => {
      bb.actionQueue.push({ type: "attack", damage: 10 });
      return "SUCCESS";
    }
  );
  return new Selector("Boss Decision Node", [
    new Sequence("Cơn thịnh nộ", [isEnraged, enrageAction]),
    new Sequence("Trừng phạt", [checkPlayerMistake, punishAction]),
    defaultAttack
  ]);
}
function WebGPUCanvas({ onRendererReady, className = "", style }) {
  const canvasRef = reactExports.useRef(null);
  const rendererRef = reactExports.useRef(null);
  const rafRef = reactExports.useRef(null);
  const cleanupRef = reactExports.useRef(null);
  const disposedRef = reactExports.useRef(false);
  const disabled = getQualityConfig().tier === "low";
  const stopLoop = reactExports.useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);
  const disposeRenderer = reactExports.useCallback(() => {
    var _a;
    stopLoop();
    (_a = cleanupRef.current) == null ? void 0 : _a.call(cleanupRef);
    cleanupRef.current = null;
    if (rendererRef.current) {
      rendererRef.current.dispose();
      rendererRef.current = null;
    }
  }, [stopLoop]);
  const init = reactExports.useCallback(async () => {
    var _a, _b;
    if (disabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    disposeRenderer();
    disposedRef.current = false;
    const qCfg = getQualityConfig();
    const maxDpr = Array.isArray(qCfg.dpr) ? qCfg.dpr[1] : 1;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, maxDpr || 1);
    const frameMs = 1e3 / (qCfg.frameCap || 30);
    const antialias = !!qCfg.antialias;
    let renderer;
    let renderAsync = false;
    try {
      const THREE = await __vitePreload(() => import("./vendor-three-webgpu-BJO4mfMz.js").then((n) => n.t), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
      if (disposedRef.current) return;
      renderer = new THREE.WebGPURenderer({ canvas, antialias });
      await renderer.init();
      renderAsync = true;
    } catch (e) {
      try {
        const { WebGLRenderer } = await __vitePreload(async () => {
          const { WebGLRenderer: WebGLRenderer2 } = await import("./vendor-three-CoFVKTas.js").then((n) => n.T);
          return { WebGLRenderer: WebGLRenderer2 };
        }, true ? [] : void 0, import.meta.url);
        if (disposedRef.current) return;
        renderer = new WebGLRenderer({
          canvas,
          antialias,
          powerPreference: ((_a = qCfg.deviceProbe) == null ? void 0 : _a.isMobile) ? "low-power" : "high-performance"
        });
      } catch (e2) {
        return;
      }
    }
    if (disposedRef.current || !renderer) {
      (_b = renderer == null ? void 0 : renderer.dispose) == null ? void 0 : _b.call(renderer);
      return;
    }
    const { Scene, PerspectiveCamera } = await __vitePreload(async () => {
      const { Scene: Scene2, PerspectiveCamera: PerspectiveCamera2 } = await import("./vendor-three-CoFVKTas.js").then((n) => n.T);
      return { Scene: Scene2, PerspectiveCamera: PerspectiveCamera2 };
    }, true ? [] : void 0, import.meta.url);
    if (disposedRef.current) {
      renderer.dispose();
      return;
    }
    const scene = new Scene();
    const camera = new PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.set(0, 2, 5);
    camera.lookAt(0, 0, 0);
    const resize = () => {
      var _a2, _b2;
      const width = Math.max(1, canvas.clientWidth || ((_a2 = canvas.parentElement) == null ? void 0 : _a2.clientWidth) || 1);
      const height = Math.max(1, canvas.clientHeight || ((_b2 = canvas.parentElement) == null ? void 0 : _b2.clientHeight) || 1);
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });
    cleanupRef.current = () => window.removeEventListener("resize", resize);
    rendererRef.current = renderer;
    onRendererReady == null ? void 0 : onRendererReady(renderer, scene, camera);
    let lastRender = 0;
    const loop = (now) => {
      if (disposedRef.current || !rendererRef.current) return;
      if (typeof document !== "undefined" && document.hidden) {
        rafRef.current = requestAnimationFrame(loop);
        return;
      }
      if (now - lastRender < frameMs) {
        rafRef.current = requestAnimationFrame(loop);
        return;
      }
      lastRender = now;
      if (renderAsync && typeof renderer.renderAsync === "function") {
        renderer.renderAsync(scene, camera).catch(() => {
        }).finally(() => {
          if (!disposedRef.current) rafRef.current = requestAnimationFrame(loop);
        });
        return;
      }
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  }, [disabled, disposeRenderer, onRendererReady]);
  reactExports.useEffect(() => {
    if (disabled) {
      disposedRef.current = true;
      disposeRenderer();
      return void 0;
    }
    init();
    return () => {
      disposedRef.current = true;
      disposeRenderer();
    };
  }, [disabled, disposeRenderer, init]);
  if (disabled) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      "aria-hidden": "true",
      className: `n4-webgpu-canvas ${className}`,
      style: { width: "100%", height: "100%", borderRadius: "var(--n4-radius-lg)", ...style }
    }
  );
}
async function createSlashParticles(count = 1e4) {
  const THREE = await __vitePreload(() => import("./vendor-three-webgpu-BJO4mfMz.js").then((n) => n.t), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
  const { storage, instanceIndex, Fn, color, pass } = await __vitePreload(async () => {
    const { storage: storage2, instanceIndex: instanceIndex2, Fn: Fn2, color: color2, pass: pass2 } = await import("./vendor-three-webgpu-BJO4mfMz.js").then((n) => n.a);
    return { storage: storage2, instanceIndex: instanceIndex2, Fn: Fn2, color: color2, pass: pass2 };
  }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
  const baseGeometry = new THREE.PlaneGeometry(0.1, 0.1);
  const instancedGeometry = new THREE.InstancedBufferGeometry();
  instancedGeometry.copy(baseGeometry);
  instancedGeometry.instanceCount = count;
  const velocityStorage = storage(new Float32Array(count * 3), "vec3", count);
  const positionStorage = storage(new Float32Array(count * 3), "vec3", count);
  const updateParticles = Fn(() => {
    const vel = velocityStorage.element(instanceIndex);
    const pos = positionStorage.element(instanceIndex);
    vel.y.subAssign(1e-3);
    pos.addAssign(vel);
  })();
  const computeNode = updateParticles.compute(count);
  const materialNode = new THREE.SpriteNodeMaterial({
    transparent: true,
    blending: THREE.AdditiveBlending
  });
  materialNode.colorNode = pass(color(16711765));
  materialNode.positionNode = positionStorage.element(instanceIndex);
  const mesh = new THREE.InstancedMesh(instancedGeometry, materialNode, count);
  mesh.frustumCulled = false;
  return { mesh, computeNode };
}
const MODES = [
  { id: "easy", label: "Dễ", icon: "🟢" },
  { id: "normal", label: "Thường", icon: "🟡" },
  { id: "hard", label: "Khó", icon: "🔴" },
  { id: "nightmare", label: "Ác mộng", icon: "💀" }
];
const BOSSES = [
  { name: "Slime", emoji: "🟢", hp: 30 },
  { name: "Goblin", emoji: "👹", hp: 50 },
  { name: "Ogre", emoji: "👺", hp: 80 },
  { name: "Dragon", emoji: "🐉", hp: 120 },
  { name: "Demon King", emoji: "😈", hp: 200 }
];
const DIFF_CONFIG = {
  easy: { options: 3, dmg: 15, bossIdx: 0, timeLimit: 0 },
  normal: { options: 4, dmg: 10, bossIdx: 1, timeLimit: 0 },
  hard: { options: 4, dmg: 8, bossIdx: 3, timeLimit: 35 },
  nightmare: { options: 5, dmg: 5, bossIdx: 4, timeLimit: 30 }
};
const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
function BossFight({ items, difficulty, onRestart, scoring, onTimerChange }) {
  const config = DIFF_CONFIG[difficulty] || DIFF_CONFIG.normal;
  const extConfig = BOSS_DIFFICULTY_EXT[difficulty] || BOSS_DIFFICULTY_EXT.normal;
  const boss = BOSSES[Math.min(config.bossIdx || 0, BOSSES.length - 1)] || BOSSES[0];
  const ecsStore = useBossECSStore;
  const bossAIRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    ecsStore.getState().addEntity("boss", {
      health: HealthComponent(boss.hp),
      tag: TagComponent("boss")
    });
    ecsStore.getState().addEntity("player", {
      health: HealthComponent(100),
      tag: TagComponent("player")
    });
    bossAIRef.current = buildBossAI();
    return () => {
      ecsStore.getState().removeEntity("boss");
      ecsStore.getState().removeEntity("player");
    };
  }, [boss.hp, ecsStore]);
  const particlesRef = reactExports.useRef(null);
  const computeRafRef = reactExports.useRef(null);
  const handleRendererReady = reactExports.useCallback(async (renderer, scene, camera) => {
    var _a;
    try {
      const qCfg = getQualityConfig();
      const particleCount = qCfg.tier === "low" || ((_a = qCfg.deviceProbe) == null ? void 0 : _a.isMobile) ? 250 : qCfg.tier === "medium" ? 500 : 1e3;
      const { mesh, computeNode } = await createSlashParticles(particleCount);
      mesh.position.set(0, 0, -2);
      scene.add(mesh);
      particlesRef.current = { mesh, computeNode };
      if (renderer.compute) {
        if (computeRafRef.current) cancelAnimationFrame(computeRafRef.current);
        const computeLoop = () => {
          if (!particlesRef.current) return;
          if (typeof document === "undefined" || !document.hidden) {
            renderer.compute(particlesRef.current.computeNode);
          }
          computeRafRef.current = requestAnimationFrame(computeLoop);
        };
        computeRafRef.current = requestAnimationFrame(computeLoop);
      }
    } catch (err) {
      console.warn("TSL Particles failed to load:", err);
    }
  }, []);
  const pool = reactExports.useMemo(() => {
    return [...items].sort(() => Math.random() - 0.5).slice(0, 30);
  }, [!!items.length]);
  const [qIdx, setQIdx] = reactExports.useState(0);
  const [bossHp, setBossHp] = reactExports.useState(boss.hp);
  const [playerHp, setPlayerHp] = reactExports.useState(100);
  const [selected, setSelected] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [timer, setTimer] = reactExports.useState(config.timeLimit || 0);
  const [correctStreak, setCorrectStreak] = reactExports.useState(0);
  const [miniBoss, setMiniBoss] = reactExports.useState(null);
  const [miniBossActive, setMiniBossActive] = reactExports.useState(false);
  const [combo, setCombo] = reactExports.useState(0);
  const [pendingNext, setPendingNext] = reactExports.useState(false);
  const [damageEvents, setDamageEvents] = reactExports.useState([]);
  const [comboTier, setComboTier] = reactExports.useState(null);
  const [battleBanner, setBattleBanner] = reactExports.useState(null);
  const [bossVisualState, setBossVisualState] = reactExports.useState("idle");
  const [battleOutcome, setBattleOutcome] = reactExports.useState(null);
  const timeoutIdsRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const current = pool[qIdx];
  const victoryAnimating = bossVisualState === "defeated" && battleOutcome !== "victory";
  const gameOver = (playerHp <= 0 || !current) && !victoryAnimating;
  const bossDefeated = battleOutcome === "victory";
  const scheduleCleanup = reactExports.useCallback((callback, delayMs) => {
    const timeoutId = setTimeout(() => {
      timeoutIdsRef.current.delete(timeoutId);
      callback();
    }, delayMs);
    timeoutIdsRef.current.add(timeoutId);
    return timeoutId;
  }, []);
  const pushDamageEvent = reactExports.useCallback((payload) => {
    const nextEvent = createCombatText(payload);
    setDamageEvents((events) => [...events, nextEvent]);
    scheduleCleanup(() => {
      setDamageEvents((events) => events.filter((event) => event.id !== nextEvent.id));
    }, 760);
    return nextEvent;
  }, [scheduleCleanup]);
  const showBattleBanner = reactExports.useCallback((payload, durationMs = 1400) => {
    const nextBanner = createBattleBanner(payload);
    setBattleBanner(nextBanner);
    scheduleCleanup(() => {
      setBattleBanner((banner) => (banner == null ? void 0 : banner.id) === nextBanner.id ? null : banner);
    }, durationMs);
    return nextBanner;
  }, [scheduleCleanup]);
  const triggerBossHit = reactExports.useCallback(() => {
    var _a;
    setBossVisualState("hit");
    if ((_a = particlesRef.current) == null ? void 0 : _a.mesh) {
      particlesRef.current.mesh.scale.set(1.5, 1.5, 1.5);
      scheduleCleanup(() => {
        if (particlesRef.current) particlesRef.current.mesh.scale.set(1, 1, 1);
      }, 300);
    }
    scheduleCleanup(() => {
      setBossVisualState((state) => state === "hit" ? "idle" : state);
    }, 420);
  }, [scheduleCleanup]);
  const triggerComboTier = reactExports.useCallback((nextCombo) => {
    const tier = getComboTier(nextCombo);
    if (!tier) return;
    const tierState = { ...tier, combo: nextCombo };
    setComboTier(tierState);
    scheduleCleanup(() => {
      setComboTier((activeTier) => (activeTier == null ? void 0 : activeTier.combo) === nextCombo ? null : activeTier);
    }, 1100);
  }, [scheduleCleanup]);
  const triggerVictory = reactExports.useCallback((damageAmount) => {
    pushDamageEvent({ amount: damageAmount, target: "boss", emphasis: true, label: `-${damageAmount}` });
    showBattleBanner({ icon: "🏆", label: "Kết liễu!", detail: `${boss.name} đã gục ngã`, tone: "victory" }, 900);
    setBossVisualState("defeated");
    setPendingNext(false);
    scheduleCleanup(() => setBattleOutcome("victory"), 760);
  }, [boss.name, pushDamageEvent, scheduleCleanup, showBattleBanner]);
  const handleTimeout = reactExports.useCallback(() => {
    playSFX("wrong");
    setFeedback("timeout");
    setPlayerHp((hp) => Math.max(0, hp - 15));
    setCombo(0);
    setComboTier(null);
    pushDamageEvent({ amount: 15, target: "player", label: "-15" });
    showBattleBanner({ icon: "⏱️", label: "Hết giờ!", detail: "Boss phản công vì bạn chậm tay.", tone: "warning" });
    setPendingNext(true);
    scoring.recordWrong(current);
  }, [current, pushDamageEvent, scoring, showBattleBanner]);
  reactExports.useEffect(() => {
    if (config.timeLimit <= 0 || feedback || gameOver || bossDefeated || victoryAnimating) return;
    setTimer(config.timeLimit);
    const interval = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          clearInterval(interval);
          return 0;
        }
        return t - 1;
      });
    }, 1e3);
    return () => clearInterval(interval);
  }, [qIdx, gameOver, bossDefeated]);
  reactExports.useEffect(() => {
    if (timer === 0 && config.timeLimit > 0 && !feedback && !gameOver && !bossDefeated && current) {
      handleTimeout();
    }
  }, [timer, config.timeLimit, feedback, gameOver, bossDefeated, current, handleTimeout]);
  reactExports.useEffect(() => {
    onTimerChange == null ? void 0 : onTimerChange(timer);
  }, [timer, onTimerChange]);
  const options = reactExports.useMemo(() => {
    if (!current) return [];
    const correct = current.answer;
    const correctKey = stableAnswerKey(correct);
    const seen = /* @__PURE__ */ new Set([correctKey]);
    const wrongs = [];
    const sameType = pool.filter((it) => it.type === current.type).sort(() => Math.random() - 0.5);
    for (const it of sameType) {
      if (wrongs.length >= config.options - 1) break;
      if (it.answer) {
        const key = stableAnswerKey(it.answer);
        if (!seen.has(key) && !equalsAnswerText(it.answer, correct)) {
          seen.add(key);
          wrongs.push(it.answer);
        }
      }
    }
    if (wrongs.length < config.options - 1) {
      const otherType = pool.filter((it) => it.type !== current.type).sort(() => Math.random() - 0.5);
      for (const it of otherType) {
        if (wrongs.length >= config.options - 1) break;
        if (it.answer) {
          const key = stableAnswerKey(it.answer);
          if (!seen.has(key) && !equalsAnswerText(it.answer, correct)) {
            seen.add(key);
            wrongs.push(it.answer);
          }
        }
      }
    }
    return [...wrongs, correct].sort(() => Math.random() - 0.5);
  }, [current, pool, config.options]);
  const answer = reactExports.useCallback((opt) => {
    if (feedback || gameOver || bossDefeated || victoryAnimating) return;
    setSelected(opt);
    const correct = equalsAnswerText(opt, current.answer);
    if (bossAIRef.current) {
      const blackboard = {
        hpPercent: bossHp / boss.hp * 100,
        playerMistakes: scoring.total - scoring.score,
        actionQueue: []
      };
      bossAIRef.current.tick(blackboard);
    }
    if (correct) {
      playSFX("correct");
      setFeedback("correct");
      const newStreak = correctStreak + 1;
      setCorrectStreak(newStreak);
      const nextCombo = combo + 1;
      let damage = config.dmg + combo * 2;
      let nextBanner = null;
      if (extConfig.specialEvery > 0 && newStreak % extConfig.specialEvery === 0) {
        const atk = pickRandom(SPECIAL_ATTACKS);
        damage += atk.bonusDmg;
        nextBanner = {
          icon: atk.name.split(" ")[0] || "⚡",
          label: atk.name,
          detail: atk.descVi.replace("{bonus}", atk.bonusDmg),
          tone: "power"
        };
      }
      if (extConfig.miniBossEvery > 0 && newStreak % extConfig.miniBossEvery === 0 && !miniBossActive) {
        const pickedMiniBoss = pickRandom(MINI_BOSSES);
        const mb = { ...pickedMiniBoss, currentHp: pickedMiniBoss.hp };
        setMiniBoss(mb);
        setMiniBossActive(true);
        showBattleBanner({ icon: mb.emoji, label: `${mb.name} xuất hiện!`, detail: mb.introVi, tone: "warning" }, 1600);
      }
      const nextBossHp = Math.max(0, bossHp - damage);
      setBossHp(nextBossHp);
      setCombo(nextCombo);
      triggerComboTier(nextCombo);
      if (nextBanner) showBattleBanner(nextBanner, 1500);
      ecsStore.getState().updateComponent("boss", "health", { current: nextBossHp });
      if (nextBossHp <= 0) {
        triggerVictory(damage);
      } else {
        pushDamageEvent({ amount: damage, target: "boss", label: `-${damage}`, emphasis: damage >= config.dmg + 20 });
        triggerBossHit();
        setPendingNext(true);
      }
      scoring.recordCorrect(current);
    } else {
      playSFX("wrong");
      setFeedback("wrong");
      setCorrectStreak(0);
      const nextPlayerHp = Math.max(0, playerHp - 10);
      setPlayerHp(nextPlayerHp);
      setCombo(0);
      setComboTier(null);
      pushDamageEvent({ amount: 10, target: "player", label: "-10" });
      if (combo > 1) {
        showBattleBanner({ icon: "💔", label: "Combo bị gãy", detail: `Chuỗi ${combo} đã mất.`, tone: "warning" });
      }
      ecsStore.getState().updateComponent("player", "health", { current: nextPlayerHp });
      scoring.recordWrong(current);
      setPendingNext(true);
    }
  }, [
    feedback,
    gameOver,
    bossDefeated,
    victoryAnimating,
    current,
    combo,
    bossHp,
    playerHp,
    config.dmg,
    correctStreak,
    extConfig,
    miniBossActive,
    pushDamageEvent,
    scoring,
    showBattleBanner,
    triggerBossHit,
    triggerComboTier,
    triggerVictory,
    boss.hp,
    ecsStore
  ]);
  const handleNextQuestion = reactExports.useCallback(() => {
    if (!pendingNext) return;
    setFeedback(null);
    setSelected(null);
    setPendingNext(false);
    if (miniBossActive) {
      setMiniBossActive(false);
      setMiniBoss(null);
    }
    setQIdx((i) => i + 1);
  }, [pendingNext, miniBossActive]);
  reactExports.useEffect(() => {
    const unsub = onStopAll(() => {
    });
    return () => {
      unsub();
      stopSpeech();
      if (computeRafRef.current) {
        cancelAnimationFrame(computeRafRef.current);
        computeRafRef.current = null;
      }
      particlesRef.current = null;
      timeoutIdsRef.current.forEach(clearTimeout);
      timeoutIdsRef.current.clear();
    };
  }, []);
  reactExports.useEffect(() => {
    if (current) speakJP(current.question);
    return () => stopSpeech();
  }, [qIdx]);
  if (items.length < 4) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-empty-state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-empty-state-icon", children: "📭" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cần ít nhất 4 mục." })
  ] });
  if (bossDefeated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-icon", children: "🏆" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-title", children: [
        "Đánh bại ",
        boss.emoji,
        " ",
        boss.name,
        "!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-muted)", marginTop: 4, fontSize: "0.9rem" }, children: pickRandom(VICTORY_MSGS) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-value", children: qIdx }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Câu hỏi" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-value", children: playerHp }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "HP còn" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result-stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-result-stat-value success", children: [
            scoring.score,
            "/",
            scoring.total
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-result-stat-label", children: "Đúng" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: onRestart, children: "🔄 Chơi lại" }) })
    ] });
  }
  if (gameOver) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-result", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-icon", children: "💀" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-title", children: "Thất bại!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--n4-text-muted)", marginTop: 4, fontSize: "0.9rem" }, children: pickRandom(DEFEAT_MSGS) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "var(--n4-text-muted)", marginTop: 8 }, children: [
        boss.emoji,
        " ",
        boss.name,
        " còn ",
        bossHp,
        " HP"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-result-actions", style: { marginTop: "var(--n4-sp-4)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: onRestart, children: "🔄 Chơi lại" }) })
    ] });
  }
  const bossHpPct = Math.max(0, bossHp / boss.hp * 100);
  const playerHpPct = Math.max(0, playerHp);
  const bossHpClass = bossHpPct > 50 ? "hp-high" : bossHpPct > 20 ? "hp-mid" : "hp-low";
  const playerHpClass = playerHpPct > 30 ? "hp-high" : "hp-low";
  const timerPct = config.timeLimit > 0 ? Math.max(0, timer / config.timeLimit * 100) : 0;
  const timerUrgent = config.timeLimit > 0 && timerPct <= 25;
  const roundLabel = `${Math.min(qIdx + 1, pool.length)}/${pool.length}`;
  const bossMood = getBossMood(bossHpPct);
  const arenaStyle = {
    position: "relative",
    background: bossMood.arenaTint,
    transition: "background 0.5s ease"
  };
  const bossGlow = { filter: bossMood.glow, transition: "filter 0.4s ease" };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-boss-arena n4-game-center", style: arenaStyle, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GameplayEffects, { damageEvents, comboTier, banner: battleBanner }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-boss-topbar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-boss-status-pill", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "🐉 ",
        boss.name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Câu ",
        roundLabel
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "❤️ ",
        playerHp
      ] }),
      combo > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-boss-status-combo", children: [
          "🔥 x",
          combo
        ] })
      ] }),
      bossMood.label && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: bossMood.color, fontWeight: 700 }, children: bossMood.label })
      ] })
    ] }) }),
    config.timeLimit > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-boss-timer-shell", "aria-label": `Còn ${timer} giây`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-boss-timer-fill${timerUrgent ? " danger" : ""}`, style: { width: `${timerPct}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-boss-display", style: { position: "relative" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WebGPUCanvas,
        {
          className: "n4-boss-webgpu-bg",
          onRendererReady: handleRendererReady,
          style: { position: "absolute", inset: 0, opacity: 0.6, pointerEvents: "none" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `n4-boss-emoji${bossVisualState === "hit" ? " n4-boss-hit" : ""}${bossVisualState === "defeated" ? " n4-boss-defeated" : ""}`,
          style: { ...bossGlow, position: "relative", zIndex: 1 },
          children: boss.emoji
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-boss-name", children: boss.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-hp-bar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-hp-bar-fill ${bossHpClass}`, style: { width: `${bossHpPct}%` } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-hp-bar-label", children: [
          bossHp,
          "/",
          boss.hp
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-question-display", children: current.display }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-options-grid", children: options.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: `n4-option-btn${feedback && equalsAnswerText(opt, current.answer) ? " correct" : feedback && equalsAnswerText(selected, opt) && !equalsAnswerText(opt, current.answer) ? " wrong" : ""}`,
        onClick: () => answer(opt),
        disabled: !!feedback,
        children: opt
      },
      i
    )) }),
    pendingNext && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "var(--n4-sp-3)", textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-primary", onClick: handleNextQuestion, children: "Câu tiếp theo ▶" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-hp-bar n4-hp-player", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-hp-bar-fill ${playerHpClass}`, style: { width: `${playerHpPct}%` } }) })
  ] });
}
function BossBattle({ mode = "normal" }) {
  var _a, _b;
  const [section, setSection] = reactExports.useState("all");
  const [battleKey, setBattleKey] = reactExports.useState(0);
  const scoring = useScoreEngine("boss-battle");
  const { reset } = scoring;
  const [timerDisplay, setTimerDisplay] = reactExports.useState(((_a = DIFF_CONFIG[mode]) == null ? void 0 : _a.timeLimit) || 0);
  const restartBattle = reactExports.useCallback(() => {
    var _a2;
    reset();
    setTimerDisplay(((_a2 = DIFF_CONFIG[mode]) == null ? void 0 : _a2.timeLimit) || 0);
    setBattleKey((k) => k + 1);
  }, [mode, reset]);
  const vocabItems = useVocabItems(section);
  const kanjiItems = useKanjiItems(section);
  const grammarItems = useGrammarItems(section);
  const sections = useSectionList("vocab");
  const battleSessionKey = `${mode}:${section}:${battleKey}`;
  reactExports.useEffect(() => {
    var _a2;
    reset();
    setTimerDisplay(((_a2 = DIFF_CONFIG[mode]) == null ? void 0 : _a2.timeLimit) || 0);
  }, [mode, reset, section]);
  const allItems = reactExports.useMemo(() => {
    const mixed = [];
    vocabItems.forEach((it) => {
      if (it.word && it.meaning) {
        mixed.push({ question: it.word, answer: it.meaning, display: it.word, type: "vocab" });
      }
    });
    kanjiItems.forEach((it) => {
      if (it.kanji && (it.meaning || it.title)) {
        mixed.push({ question: it.kanji, answer: it.meaning || it.title, display: it.kanji, type: "kanji" });
      }
    });
    grammarItems.forEach((it) => {
      var _a2;
      if (it.title) {
        const c = it.content || "";
        const purposeMatch = c.match(/\*\*(?:Mục đích sử dụng|Giải thích)[:：]\*\*\s*(.+)/i);
        const answer = purposeMatch ? purposeMatch[1].replace(/\*\*/g, "").trim().substring(0, 50) : ((_a2 = c.split("\n").find((l) => l.trim() && !l.startsWith("#") && !l.startsWith("|"))) == null ? void 0 : _a2.trim().substring(0, 50)) || "";
        if (answer) {
          mixed.push({ question: it.title, answer, display: it.title, type: "grammar" });
        }
      }
    });
    return mixed.filter((it) => it.answer);
  }, [vocabItems, kanjiItems, grammarItems]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerContext.Provider, { value: "boss-battle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    GameShell,
    {
      trainerId: "boss-battle",
      mode,
      icon: "🐉",
      title: "Đấu trùm",
      color: "var(--n4-cat-boss, #ff7777)",
      hearts: 3,
      hazardSeconds: ((_b = DIFF_CONFIG[mode]) == null ? void 0 : _b.timeLimit) > 0 ? DIFF_CONFIG[mode].timeLimit : null,
      bodyLayout: "hybrid",
      rhythm: { warmup: 2, bossAt: "end", bossCount: 5, cooldown: 0, totalItems: 30 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TrainerTopBar,
          {
            trainerId: "boss-battle",
            activeMode: mode,
            modes: MODES,
            sections,
            section,
            onSectionChange: setSection
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BossFight,
          {
            items: allItems,
            difficulty: mode,
            onRestart: restartBattle,
            scoring,
            onTimerChange: setTimerDisplay
          },
          battleSessionKey
        )
      ]
    }
  ) });
}
export {
  MODES,
  BossBattle as default
};
